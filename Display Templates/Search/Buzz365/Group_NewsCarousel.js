/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_4b1ac9516c02433ea6672c56f9a1faa9(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_4b1ac9516c02433ea6672c56f9a1faa9.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fGroup_NewsCarousel.js';
  ctx['DisplayTemplateData']['TemplateType']='Group';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchResults'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
);
    if(!$isNull(ctx.ClientControl) && ctx.ClientControl.shouldShowTable(ctx.CurrentGroup))
    {
        var id = ctx.ClientControl.get_nextUniqueId();
        var groupId = id + Srch.U.Ids.group;
        $setResultObject(groupId, ctx.CurrentGroup);

        ctx.ListDataJSONItemsKey = "ResultRows";
ms_outHtml.push('     '
,'        ', ctx.RenderItems(ctx) ,''
);
    }
ms_outHtml.push(''
,'    '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_4b1ac9516c02433ea6672c56f9a1faa9() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Group_NewsCarousel", DisplayTemplate_4b1ac9516c02433ea6672c56f9a1faa9);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fGroup_NewsCarousel.js", DisplayTemplate_4b1ac9516c02433ea6672c56f9a1faa9);
}

}
RegisterTemplate_4b1ac9516c02433ea6672c56f9a1faa9();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fGroup_NewsCarousel.js"), RegisterTemplate_4b1ac9516c02433ea6672c56f9a1faa9);
}