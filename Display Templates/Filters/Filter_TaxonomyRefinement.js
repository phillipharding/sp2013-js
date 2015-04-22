/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_954ee393237e49e7a69c5fda1a7e76a0(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_954ee393237e49e7a69c5fda1a7e76a0.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fFilters\u002fFilter_TaxonomyRefinement.js';
  ctx['DisplayTemplateData']['TemplateType']='Filter';
  ctx['DisplayTemplateData']['TargetControlType']=['TaxonomyRefinement'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['CompatibleSearchDataTypes']=[];
  ctx['DisplayTemplateData']['CompatibleManagedProperties']=[];

ms_outHtml.push('',''
);
        var nameClass = "ms-ref-name " + (ctx.RenderCounts ? "ms-displayInline" : "ms-displayInlineBlock ms-ref-ellipsis");
ms_outHtml.push(''
,'    <div id="Value" name="Item">'
,'        <a id="FilterLink" class="ms-core-listMenu-item" href="javascript:{}" onclick="$getClientControl(this).handleClickOnCategoryLink(\'', $scriptEncode(ctx.CurrentItem.id) ,'\');">'
,'            <div class="', nameClass ,'">'
,'                            ', $htmlEncode(ctx.CurrentItem.displayName)  ,''
,'            </div>'
);
        if (ctx.RenderCounts)
        {
ms_outHtml.push(''
,'            <div class="ms-ref-count ms-textSmall">'
,'                (', $htmlEncode(ctx.CurrentItem.count) ,')'
,'            </div>'
);
        }
ms_outHtml.push(''
,'        </a>'
,'    </div>'
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_954ee393237e49e7a69c5fda1a7e76a0() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Filter_TaxonomyRefinement", DisplayTemplate_954ee393237e49e7a69c5fda1a7e76a0);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fFilters\u002fFilter_TaxonomyRefinement.js", DisplayTemplate_954ee393237e49e7a69c5fda1a7e76a0);
}

}
RegisterTemplate_954ee393237e49e7a69c5fda1a7e76a0();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fFilters\u002fFilter_TaxonomyRefinement.js"), RegisterTemplate_954ee393237e49e7a69c5fda1a7e76a0);
}