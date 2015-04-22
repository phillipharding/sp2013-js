/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_16e0058a21d84072849eb4ebe8dbf7db(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_16e0058a21d84072849eb4ebe8dbf7db.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fControl_NewsByCategory.js';
  ctx['DisplayTemplateData']['TemplateType']='Control';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchResults'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
); 
        ctx.ListDataJSONGroupsKey = "ResultTables";
        ctx.ClientControl.set_groupTemplateId('~sitecollection/_catalogs/masterpage/Display Templates/Search/Buzz365/Group_NewsCarousel.js');
        AddPostRenderCallback(ctx, function() {
            $(function() {
                $('.news-control-newsbycategory li').fadeIn(500);
            });
        });
ms_outHtml.push('   '
,'    <div class="news-control-newsbycategory-wrapper">'
,'        <ul class="news-control-newsbycategory" id="result" name="Control">'
,'            ', ctx.RenderGroups(ctx) ,''
);
            if(ctx.ClientControl.get_shouldShowNoResultMessage()) 
            {
ms_outHtml.push(''
,'                <div id="NoResult">'
);
                    var emptyMessage = ctx.ClientControl.get_emptyMessage();
                    if ($isEmptyString(emptyMessage)) 
                    {
ms_outHtml.push(''
,'                        <div class="ms-textLarge ms-srch-result-noResultsTitle">', $htmlEncode(Srch.Res.rs_NoResultsTitle) ,'</div>'
);
                    } else 
                    {
ms_outHtml.push(''
,'                        ', $htmlEncode(emptyMessage) ,''
);                        
                    }
ms_outHtml.push(''
,'                </div>'
);
            }
ms_outHtml.push(''
,'        </ul>'
,'    </div>'
,''
,'    '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_16e0058a21d84072849eb4ebe8dbf7db() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Control_NewsByCategory", DisplayTemplate_16e0058a21d84072849eb4ebe8dbf7db);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fControl_NewsByCategory.js", DisplayTemplate_16e0058a21d84072849eb4ebe8dbf7db);
}
//
        $includeScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fControl_NewsByCategory.js", "~sitecollection/_catalogs/masterpage/Display Templates/Search/Buzz365/Group_NewsCarousel.js");
        $includeCSS("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fControl_NewsByCategory.js", "~sitecollection/_catalogs/masterpage/Display Templates/Search/Buzz365/news-bycategory.css");
    //
}
RegisterTemplate_16e0058a21d84072849eb4ebe8dbf7db();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fControl_NewsByCategory.js"), RegisterTemplate_16e0058a21d84072849eb4ebe8dbf7db);
}