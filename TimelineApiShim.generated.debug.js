﻿

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
Type.registerNamespace("SP.Timeline.InstrumentedApi");

SP.Timeline.InstrumentedApi.ShimPlaceholder = {};


SP.Timeline.InstrumentedApi.Timeline.Shim = function()
{

}

SP.Timeline.InstrumentedApi.Timeline.Shim.Wrap = function(wrappedImpl)
{
   function CallMethod(shim, name, params, bIsAsync, fnCallback, bCausesStateUpdate)
   {
      var callId = JsApi.InstrumentationManager.RaiseInvokingEvent(shim, name);

      if (bIsAsync)
      {
          params.push(HandleCallback);
      }

      var res = shim._impl[name].apply(shim._impl, params);

      if (!bIsAsync)
      {
         HandleCallback(true);
      }

      return res;

      // internal functions follow
      function HandleCallback(success, res)
      {
         JsApi.InstrumentationManager.RaiseEndedEvent(callId);

         if (bIsAsync)
         {
            if (fnCallback != null)
            {
               fnCallback(success, res);
            }
         }

         if (bCausesStateUpdate)
         {
            JsApi.ExtensibilityManager.NotifyStateUpdated(shim._impl);
         }
      }
   }
      wrappedImpl.SelectElementByUid = function(uid)
      {
         return CallMethod(this, "SelectElementByUid", [uid], false, null, false);
      };
};


if( window.Sys != null && Sys.Application != null ){
   Sys.Application.notifyScriptLoaded();
}

NotifyScriptLoadedAndExecuteWaitingJobs("TimelineApiShim.generated.js");

