/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_5002bef8b7f3480ebd3ac65072d23ef8(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_5002bef8b7f3480ebd3ac65072d23ef8.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fFilters\u002fControl_TaxonomyRefinement.js';
  ctx['DisplayTemplateData']['TemplateType']='Control';
  ctx['DisplayTemplateData']['TargetControlType']=['TaxonomyRefinement'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
,'    <div class="ms-ref-ctrl" id="TaxonomyRefinement" name="Control">'
);
        var hasControl = !$isNull(ctx.ClientControl);
        var hasNoTaxonomyNodes = ($isEmptyArray(ctx.ListData));

        if(hasControl)
        { 
            if(hasNoTaxonomyNodes)
            {
ms_outHtml.push(''
,'        <div id="EmptyContainer"></div>'
);
            }
            else
            {
ms_outHtml.push(''
,'        <div class="ms-ref-refiner">'
,'            <div id="Container">'
,'                ', ctx.RenderItems(ctx) ,''
,'            </div>'
,'        </div>'
);
            }
        }
ms_outHtml.push(''
,''
,'    </div>'
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_5002bef8b7f3480ebd3ac65072d23ef8() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Control_TaxonomyRefinement", DisplayTemplate_5002bef8b7f3480ebd3ac65072d23ef8);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fFilters\u002fControl_TaxonomyRefinement.js", DisplayTemplate_5002bef8b7f3480ebd3ac65072d23ef8);
}

}
RegisterTemplate_5002bef8b7f3480ebd3ac65072d23ef8();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fFilters\u002fControl_TaxonomyRefinement.js"), RegisterTemplate_5002bef8b7f3480ebd3ac65072d23ef8);
}