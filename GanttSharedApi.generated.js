Type.registerNamespace("JsApiUtils");JsApiUtils.NotifyStateUpdated=function(a){window.JsApi&&JsApi.ExtensibilityManager&&JsApi.ExtensibilityManager.NotifyStateUpdated(a)};Type.registerNamespace("SP.SPGantt.InstrumentedApi");SP.SPGantt.InstrumentedApi.ExecuteWithJsApiLoaded=function(b){var a=window.ExecuteOrDelayUntilScriptLoaded&&ExecuteOrDelayUntilScriptLoaded;a&&a(function(){JsApi.ExtensibilityManager.ExecuteWithJsApisInNamespaceLoaded("SP.SPGantt.InstrumentedApi",b)},"JsApiExtensibilityManager.js")};Type.registerNamespace("SP.SPGantt.InstrumentedApi");SP.SPGantt.InstrumentedApi.ClientApi={None:0,SPGantt:1};SP.SPGantt.InstrumentedApi.JsGridColumn=function(){this.isVisible;this.columnKey;this.name};SP.SPGantt.InstrumentedApi.JsGridColumn.registerClass("SP.SPGantt.InstrumentedApi.JsGridColumn");SP.SPGantt.InstrumentedApi.JsGridProperty=function(){this.hasDataValue;this.hasLocalizedValue;this.dataValue;this.localizedValue};SP.SPGantt.InstrumentedApi.JsGridProperty.registerClass("SP.SPGantt.InstrumentedApi.JsGridProperty");SP.SPGantt.InstrumentedApi.JsGridSettableValue=function(){this.fieldKey;this.propertyValue};SP.SPGantt.InstrumentedApi.JsGridSettableValue.registerClass("SP.SPGantt.InstrumentedApi.JsGridSettableValue");SP.SPGantt.InstrumentedApi.NodeType=function(){};SP.SPGantt.InstrumentedApi.NodeType.prototype={Leaf:0,Expanded:1,Collapsed:2};SP.SPGantt.InstrumentedApi.NodeType.registerEnum("SP.SPGantt.InstrumentedApi.NodeType",false);SP.SPGantt.InstrumentedApi.JsApiWrapperFactory=function(){function a(b,a){return function(){return a[b].apply(a,arguments)}}return{Create:function(c,e,f){var b={};for(var d in c)if(c[d]!=null&&c[d].constructor==Function)b[d]=a(d,c);b._impl=c;b._shimTypeName=e;c.get_Api=function(){return b};b.get_impl=b.get_Impl=function(){return this._impl};b.get_apiNamespaceKey=b.get_ApiNamespaceKey=function(){return"SP.SPGantt.InstrumentedApi"};b.get_ApiType=b.get_apiType=function(){return f};JsApi.ExtensibilityManager._NotifyApiPresent(b);return b}}}();SP.SPGantt.InstrumentedApi.SPGantt=function(){var a=function(a){return SP.SPGantt.InstrumentedApi.JsApiWrapperFactory.Create(a,"SP.SPGantt.InstrumentedApi.SPGantt.Shim",1)};a.WrapImplementationInApiAndMarkInitComplete=function(a){SP.SPGantt.InstrumentedApi.ExecuteWithJsApiLoaded(function(){var b=new SP.SPGantt.InstrumentedApi.SPGantt(a);JsApi.ExtensibilityManager._NotifyApiInitComplete(b)})};return a}();window.Sys!=null&&Sys.Application!=null&&Sys.Application.notifyScriptLoaded();NotifyScriptLoadedAndExecuteWaitingJobs("GanttSharedApi.generated.js");