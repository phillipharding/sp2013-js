Type.registerNamespace("JsApiUtils");JsApiUtils.NotifyStateUpdated=function(a){window.JsApi&&JsApi.ExtensibilityManager&&JsApi.ExtensibilityManager.NotifyStateUpdated(a)};Type.registerNamespace("SP.Timeline.InstrumentedApi");SP.Timeline.InstrumentedApi.ExecuteWithJsApiLoaded=function(b){var a=window.ExecuteOrDelayUntilScriptLoaded&&ExecuteOrDelayUntilScriptLoaded;a&&a(function(){JsApi.ExtensibilityManager.ExecuteWithJsApisInNamespaceLoaded("SP.Timeline.InstrumentedApi",b)},"JsApiExtensibilityManager.js")};Type.registerNamespace("SP.Timeline.InstrumentedApi");SP.Timeline.InstrumentedApi.ClientApi={None:0,Timeline:1};SP.Timeline.InstrumentedApi.JsApiWrapperFactory=function(){function a(b,a){return function(){return a[b].apply(a,arguments)}}return{Create:function(c,e,f){var b={};for(var d in c)if(c[d]!=null&&c[d].constructor==Function)b[d]=a(d,c);b._impl=c;b._shimTypeName=e;c.get_Api=function(){return b};b.get_impl=b.get_Impl=function(){return this._impl};b.get_apiNamespaceKey=b.get_ApiNamespaceKey=function(){return"SP.Timeline.InstrumentedApi"};b.get_ApiType=b.get_apiType=function(){return f};JsApi.ExtensibilityManager._NotifyApiPresent(b);return b}}}();SP.Timeline.InstrumentedApi.Timeline=function(){var a=function(a){return SP.Timeline.InstrumentedApi.JsApiWrapperFactory.Create(a,"SP.Timeline.InstrumentedApi.Timeline.Shim",1)};a.WrapImplementationInApiAndMarkInitComplete=function(a){SP.Timeline.InstrumentedApi.ExecuteWithJsApiLoaded(function(){var b=new SP.Timeline.InstrumentedApi.Timeline(a);JsApi.ExtensibilityManager._NotifyApiInitComplete(b)})};return a}();window.Sys!=null&&Sys.Application!=null&&Sys.Application.notifyScriptLoaded();NotifyScriptLoadedAndExecuteWaitingJobs("TimelineSharedApi.generated.js");