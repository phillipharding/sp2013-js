Type.registerNamespace("JsApi");

JsApi.ExtensibilityManager = function()
{
    var _listeners;
    var _knownApis; // { api, isInited, statelisteners, bUsedForPreregisteredApis }
    var _pendingApiTypes; // namespace -> [ apitype ];
    var _registeredFiles; //  [ { api namespace, file, js namespace, downloadType } ];
    var _instrumentationPresent;

    function InitState()
    {
        _listeners = [];
        _knownApis = [];
        _pendingApiTypes = {};
        _registeredFiles = [];
        _instrumentationPresent = false;

        if (window.RegisterModuleInit != null)
        {
            RegisterModuleInit('jsapiextensibilitymanager.js', InitState);
        }
    }

    var DownloadType =
    {
        Always : 0, // 0 here means you should always download this file.
        InstrumentationOnlyBlocking: 1, // 1 means you should only download it if instrumentation is present and you should not notify any events if this file is missing
        InstrumentationOnlyNonBlocking: 2 // 2 means you should only download it if instrumentation is present, but you can notify if it is not present
    };
    
    function FindApiIdx(api)
    {
        var r = null;
        for (var i = 0; i < _knownApis.length; i++)
        {
            if (_knownApis[i].api.get_Impl() == api.get_Impl())
            {
                r = i;
                break;
            }
        }
        return r;
    };

    function AnyPendingApis()
    {
        for (var key in _pendingApiTypes)
        {
            return true;
        }
        return false;
    };
    
    function WrapApiInShim(knownApi)
    {
         var fnWrap = eval(knownApi._shimTypeName + ".Wrap");
         fnWrap(knownApi);
    };
    
    function FireListenerIfNamespaceMatchesApi(listener, apiWrapper)
    {
         if (listener.namespaceKey == null || apiWrapper.api.get_ApiNamespaceKey() == listener.namespaceKey)
         {
             listener.fnListener(apiWrapper.api, apiWrapper.isInited);
         }
    };
    
    function FilterRegisteredFilesForNamespace(namespace, bOnlyCoreFiles)
    {
        var r = [];
        
        for(var i = 0; i< _registeredFiles.length; i++)
        {
            if ((namespace == null ||_registeredFiles[i].apiNamespace == namespace) && 
                (!bOnlyCoreFiles || _registeredFiles[i].downloadType != DownloadType.InstrumentationOnlyNonBlocking))
            {
                r.push(_registeredFiles[i]);
            }
        }
        
        return r;
    };
    
    function ExecuteWithJsApisInNamespaceLoaded(namespace, bOnlyCoreFiles, fnCallback)
    {
        var filesToRegister = FilterRegisteredFilesForNamespace(namespace, bOnlyCoreFiles);
        
        if (filesToRegister.length > 0)
        {
            var callCount = 0;

            var callbackAggregator = function() 
            { 
                callCount++;
                if (fnCallback != null && callCount == filesToRegister.length) 
                {
                    fnCallback(); 
                }
            };

            for (var i =0; i < filesToRegister.length; i++)
            {
                var instrumentationFileInfo = filesToRegister[i];
                 
                if (!bOnlyCoreFiles || instrumentationFileInfo.downloadType == DownloadType.Always)
                {
                    SP.SOD.executeFunc( 
                        instrumentationFileInfo.fileName, instrumentationFileInfo.jsNamespace,
                        callbackAggregator);
                }
                else
                {
                    ExecuteOrDelayUntilScriptLoaded(callbackAggregator, instrumentationFileInfo.fileName);
                }
            }
        }
        else
        {
            if (fnCallback != null)
            {
                fnCallback();
            }
        }
    };
    
    InitState();
    
    return {
        AddListener: function(namespaceKey, fnListener)
        {
            if (fnListener != null)
            {
                var listener = { namespaceKey: namespaceKey, fnListener: fnListener};
                
                _listeners.push(listener);
    
                for(var i = 0; i < _knownApis.length; i++)
                {
                    FireListenerIfNamespaceMatchesApi(listener, _knownApis[i]);
                }
            }
        },
        AllKnownApisInited: function()
        {
            var r = true;
             
            if (AnyPendingApis())
            {
                r = false;
            }
            else
            {
                for(var i = 0; i < _knownApis.length; i++)
                {
                    if (!_knownApis[i].isInited)
                    {
                        r = false;
                        break;
                    }
                }
            }
             
            return r;
        },
        AnyApisPresent: function()
        {
            return _knownApis.length > 0 || AnyPendingApis();
        },
        ExecuteWithJsApisInNamespaceLoaded: function(namespace, fnCallback) {
            ExecuteWithJsApisInNamespaceLoaded(namespace, true, fnCallback);
        },
        RegisterStateUpdatedListenerForApi: function(api, fnListener)
        {
            var idx = FindApiIdx(api);

            if (idx != null)
            {
                if (_knownApis[idx].stateListeners == null)
                {
                    _knownApis[idx].stateListeners = [];
                }
                _knownApis[idx].stateListeners.push(fnListener);
            }
            else
            {
                Sys.Debug.assert(false, 'trying to register listener for unknown api');
            }
        },
        NotifyStateUpdated: function(wrappedObject)
        {
            if (wrappedObject != null && wrappedObject.get_Api != null)
            {
               var api = wrappedObject.get_Api();
               
               if (api != null)
               {
                  var idx = FindApiIdx(api);
      
                  if (idx != null)
                  {
                      setTimeout(FireEvents, 0);
                  }
                  else
                  {
                      Sys.Debug.assert(false, 'trying to fire state updated for unknown api');
                  }
               }
            }
            
            // internal functions follow
            function FireEvents()
            {
                var curApi = _knownApis[idx];
                var len = (curApi.stateListeners != null) ? curApi.stateListeners.length : 0;
                for(var i = 0; i < len; i++)
                {
                    curApi.stateListeners[i](curApi.api);
                }
            };
        },
        _NotifyApiPresent: function(api)
        {
            if (api != null && api.get_ApiType != null)
            {
               if (FindApiIdx(api) == null)
               {
                   if (_instrumentationPresent)
                   {
                       WrapApiInShim(api);
                   }
                   
                   // add a method that lets them register for state updates directly on the api itself
                   var coreRegMethod = this.RegisterStateUpdatedListenerForApi;
                   api.RegisterStateUpdatedListenerForApi = function(listener) { coreRegMethod(api, listener); };
                   
                   var apiWrapper = { api : api, isInited : false };
                   _knownApis.push(apiWrapper);
                   
                   var apiType = api.get_ApiType();
                   var apiNamespaceKey = api.get_ApiNamespaceKey();
   
                   var pendingApis = _pendingApiTypes[apiNamespaceKey];
   
                   if (pendingApis != null)
                   {
                       var i = 0;
                       for(i = 0; i < pendingApis.length; i++)
                       {
                           if (pendingApis[i] == apiType)
                           {
                               // if we are the last one, just clean up the whole list.
                               if (pendingApis.length == 1)
                               {
                                   delete _pendingApiTypes[apiNamespaceKey];
                               }
                               else
                               {
                                   pendingApis.splice(i, 1);
                               }
   
                               break;
                           }
                       }
                   }
                      
                   for (i = 0; i < _listeners.length; i++)
                   {
                       FireListenerIfNamespaceMatchesApi(_listeners[i], apiWrapper);
                   }
               }
               else
               {
                   Sys.Debug.assert(false, "We aren't expecting the same api object to added multiple times.");
               }
            }
            else
            {
               Sys.Debug.assert(false, 'Expecting a valid ClientApi object');
            }
        },
        _NotifyApiInitComplete: function(api)
        {
            var idx = FindApiIdx(api);
             
            if (idx != null)
            {
               if (!_knownApis[idx].isInited)
               {                  
                   _knownApis[idx].isInited = true;
                      
                   for (var i = 0; i < _listeners.length; i++)
                   {
                       FireListenerIfNamespaceMatchesApi(_listeners[i], _knownApis[idx]);
                   }
               }
               else
               {
                   Sys.Debug.assert(false, 'the same api should not be inited twice.');
               }
            }
            else
            {
                Sys.Debug.assert(false, 'we should not be notified that api has inited before it has been registered.');
            }
        },
        _RegisterExpectedApi: function(namespace, id)
        {
            var existingApiPresent = false;

            for (var i = 0; i < _knownApis.length; i++)
            {
                var curApiInfo = _knownApis[i];
                if (curApiInfo.api.get_ApiNamespaceKey() == namespace && curApiInfo.api.get_ApiType() == id && !_knownApis[i].bUsedForPreregisteredApis )
                {
                    existingApiPresent = _knownApis[i].bUsedForPreregisteredApis = true;
                    break;
                }
            }

            if (!existingApiPresent)
            {
                if (!(namespace in _pendingApiTypes))
                {
                    _pendingApiTypes[namespace] = [];
                }
                _pendingApiTypes[namespace].push(id);
            }
        },        
        _RegisterFilesForNamespace: function(apiNamespace, fileName, jsNamespace, downloadType)
        {
            if (!_instrumentationPresent)
            {
                _registeredFiles.push({ apiNamespace: apiNamespace, fileName: fileName, jsNamespace: jsNamespace, downloadType:downloadType});
            }
            else
            {
                Sys.Debug.assert(false, 'Registered instrumentation file too late.');
            }
        },
        _NotifyInstrumentationPresent: function(fnCallback)
        {            
            ExecuteWithJsApisInNamespaceLoaded(null, false,
               function()
               {
                  _instrumentationPresent = true;

                  // loop over the apis and wrap them   
                  for(var i = 0; i < _knownApis.length; i++)
                  {
                     WrapApiInShim(_knownApis[i].api);
                  }
                  if (fnCallback != null)
                  {
                     fnCallback();
                  }
               });
        }
    };
}();

JsApi.InstrumentationManager = function()
{
    var _this = {};
    var _results = {};
    var _apis = [];
    var _listeners = [];
    var _testElems = [];
    var _curCallId = 0;
    var _pageLoadTimestamp = new Date().getTime();

    JsApi.ExtensibilityManager.AddListener(null, ApiRegistered);

    function ApiRegistered(api, bApiInited)
    {
        var i = 0;
        if (bApiInited)
        {
            _apis.push(api);
             
            
            for(i = 0; i < _listeners.length; i++)
            {
                _listeners[i].NotifyApiReady(_apis.length - 1, api);
            }
             
            if (JsApi.ExtensibilityManager.AllKnownApisInited())
            {
                for(i = 0; i < _listeners.length; i++)
                {
                    _listeners[i].NotifyAllApisReady();
                }
            }
        }
        else
        {
            for(i = 0; i < _listeners.length; i++)
            {
                _listeners[i].NotifyApiPending(api);
            }
        }
    };
       
    function InvokeMethod(apiIdx, methodName, fnCallback, bSyncRes, args)
    {
        var api = _apis[apiIdx];
          
        if (args != null)
        {
            args = Sys.Serialization.JavaScriptSerializer.deserialize(args);
        }

        args = args == null ? [] : args;
          
        Sys.Debug.assert(args.constructor == Array, "trying to invoke a method from test code, but did not pass args as an array as expected.");
          
        if (fnCallback != null)
        {         
            var callId = _curCallId++;
             
            var sRes = api[methodName].apply(api, args.concat([ function(success, res) { ProcessAsyncResult(success, res, callId, fnCallback); } ]));
             
            return bSyncRes ? { CallId: callId, Result: sRes } : callId;
        }
        else
        {
            return api[methodName].apply(api, args);
        }
    };
       
    function ProcessAsyncResult(success, res, callId, fnCallback) 
    { 
        if (success)
        {
            _results[callId] = res; 
            fnCallback(); 
        }
        else
        {
            _results[callId] = null;
            // TODO: add some error handling
            fnCallback();
        }
    };
       
    _this.RaiseInvokingEvent = function(api, methodName)
    {
        var r = _curCallId++;
          
        for(var i = 0; i < _listeners.length; i++)
        {
            _listeners[i].NotifyInvoking(api, methodName, r);
        }
             
        return r;
    };
       
    _this.RaiseEndedEvent= function(callId)
    {
        for(var i = 0; i < _listeners.length; i++)
        {
            _listeners[i].NotifyInvokeComplete(callId);
        }
    };
       
    _this.GetIndexForApi = function(api)
    {
        var ret = null;
        for(var i = 0; i < _apis.length; i++)
        {
            if (api == _apis[i])
            {
                ret = i;
            }
        }
        return ret;
    };
       
    _this.BindToTestElementForWebAutoInstrumentation = function(elem, fnCallback)
    {
        JsApi.ExtensibilityManager._NotifyInstrumentationPresent(fnCallback);
        for(var i = 0; i < _testElems.length; i++)
        {
            if (_testElems[i] == elem)
            {
                return;
            }
        }
          
        _testElems.push(elem);
        _listeners.push(new WebAutoListener(elem));
    };
       
    _this.BindToListener = function(listener, bIsSingleton, fnCallback)
    {
        JsApi.ExtensibilityManager._NotifyInstrumentationPresent(fnCallback);
        for(var i = 0; i < _listeners.length; i++)
        {
            if (_listeners[i].constructor == listener.constructor && bIsSingleton)
            {
                return;
            }
        }
          
        _listeners.push(listener);
    };       
       
    return _this;
       
    // listener classes follow
    function WebAutoListener(elem)
    {
        var bWaitingForApisToBeReady = false;
          
        function Init()
        {
            elem.InvokeMethod = ExternalInvokeMethod;
            elem.ReadAsyncResult = ReadAsyncResult;
            elem.GetApis = GetApis;
            elem.ReadPageLoadTimestamp = function() { return _pageLoadTimestamp; };
        };
          
        function BeginWaitForAllApisToBeReady()
        {
            if (JsApi.ExtensibilityManager.AnyApisPresent() && !JsApi.ExtensibilityManager.AllKnownApisInited() && !bWaitingForApisToBeReady)
            {
                bWaitingForApisToBeReady = true;
                if (window.setAsyncPostBackStartFlag == null)
                {
                    alert("setAsyncPostBackStartFlag is not set");
                }
                else
                {
                    setAsyncPostBackStartFlag();
                }
            }
        };
          
        function GetApis()
        {
            BeginWaitForAllApisToBeReady();
            var r;

            if (!bWaitingForApisToBeReady)
            {
                r = [];
                for (var i = 0; i < _apis.length; i++)
                {
                    r.push({ Type: _apis[i].get_ApiType(), NamespaceKey: _apis[i].get_ApiNamespaceKey() });
                }
                r = Sys.Serialization.JavaScriptSerializer.serialize(r);
            }

            return r;
        };
          
        function ReadAsyncResult(callId)
        {
            Sys.Debug.assert(callId in _results, "call id was not in results as expected");
            return SerializeCallResult(_results[callId]);
        };
        
        function SerializeCallResult(res)
        {
            // if the result is itself an api, we want to return the index instead of trying to serialize the control
            if (res != null && res.get_ApiType != null)
            {
                 res = JsApi.InstrumentationManager.GetIndexForApi(res);
            }
            
            return Sys.Serialization.JavaScriptSerializer.serialize(res);
        };
          
        // returns either the result or the call id
        function ExternalInvokeMethod(apiIdx, name, bSync, bSyncRes, args)
        {
            var callback;
            if (!bSync)
            {
                setAsyncPostBackStartFlag();
                callback = function() { setAsyncPostBackDoneFlag(200); };
            }
             
            return SerializeCallResult(InvokeMethod(apiIdx, name, callback, bSyncRes, args));
        };
          
        this.NotifyAllApisReady = function()
        {
            if (bWaitingForApisToBeReady)
            {
                if (window.setAsyncPostBackDoneFlag == null)
                {
                    alert("setAsyncPostBackDoneFlag not defined");
                }
                else
                {
                    bWaitingForApisToBeReady = false;
                    setAsyncPostBackDoneFlag(200);
                }
            }
        };
          
        this.NotifyApiPending = function()
        {
            BeginWaitForAllApisToBeReady();
        };
          
        this.NotifyApiReady = function()
        {
          
        };
          
        this.NotifyInvoking = function(apiIdx, methodName, callId)
        {
        };
       
        this.NotifyInvokeComplete = function(callId)
        {
        };
          
        Init();
    };
}();

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
    Sys.Application.notifyScriptLoaded();
}
if(typeof(NotifyScriptLoadedAndExecuteWaitingJobs) == "function"){
    NotifyScriptLoadedAndExecuteWaitingJobs("JsApiExtensibilityManager.js");
}
