Type.registerNamespace("JsApiUtils");JsApiUtils.NotifyStateUpdated=function(a){window.JsApi&&JsApi.ExtensibilityManager&&JsApi.ExtensibilityManager.NotifyStateUpdated(a)};Type.registerNamespace("SP.Portal.JsApi");SP.Portal.JsApi.ExecuteWithJsApiLoaded=function(b){var a=window.ExecuteOrDelayUntilScriptLoaded&&ExecuteOrDelayUntilScriptLoaded;a&&a(function(){JsApi.ExtensibilityManager.ExecuteWithJsApisInNamespaceLoaded("SP.Portal.JsApi",b)},"JsApiExtensibilityManager.js")};Type.registerNamespace("SP.Portal.JsApi");SP.Portal.JsApi.ClientApi={None:0,ProjectSummary:1};SP.Portal.JsApi.ProjectSummaryItem=function(){this.Name;this.AssignTo;this.FriendlyDate};SP.Portal.JsApi.ProjectSummaryItem.registerClass("SP.Portal.JsApi.ProjectSummaryItem");SP.Portal.JsApi.JsApiWrapperFactory=function(){function a(b,a){return function(){return a[b].apply(a,arguments)}}return{Create:function(c,e,f){var b={};for(var d in c)if(c[d]!=null&&c[d].constructor==Function)b[d]=a(d,c);b._impl=c;b._shimTypeName=e;c.get_Api=function(){return b};b.get_impl=b.get_Impl=function(){return this._impl};b.get_apiNamespaceKey=b.get_ApiNamespaceKey=function(){return"SP.Portal.JsApi"};b.get_ApiType=b.get_apiType=function(){return f};JsApi.ExtensibilityManager._NotifyApiPresent(b);return b}}}();SP.Portal.JsApi.ProjectSummary=function(){var a=function(a){return SP.Portal.JsApi.JsApiWrapperFactory.Create(a,"SP.Portal.JsApi.ProjectSummary.Shim",1)};a.WrapImplementationInApiAndMarkInitComplete=function(a){SP.Portal.JsApi.ExecuteWithJsApiLoaded(function(){var b=new SP.Portal.JsApi.ProjectSummary(a);JsApi.ExtensibilityManager._NotifyApiInitComplete(b)})};return a}();window.Sys!=null&&Sys.Application!=null&&Sys.Application.notifyScriptLoaded();NotifyScriptLoadedAndExecuteWaitingJobs("SpsSharedApi.generated.js");