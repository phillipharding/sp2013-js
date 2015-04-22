/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_87707ea30d104ab3aad48e507313f5db(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_87707ea30d104ab3aad48e507313f5db.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fControl_NewsCarousel.js';
  ctx['DisplayTemplateData']['TemplateType']='Control';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchResults'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
); 
        ctx.ListDataJSONGroupsKey = "ResultTables";
        ctx.ClientControl.set_groupTemplateId('~sitecollection/_catalogs/masterpage/Display Templates/Search/Buzz365/Group_NewsCarousel.js');
        AddPostRenderCallback(ctx, function() {
            $(function() {
                var slider = $('.news-control-newscarousel').bxSlider({
                            mode: 'fade', 
                            captions: false,
                            controls: false,
                            auto: true,
                            autoStart: true,
                            autoHover: false,
                            adaptiveHeight: false,
                            pause: 8000
                        });
            });
        });
ms_outHtml.push('   '
,'        <div class="news-control-newscarousel-wrapper">'
,'        <div class="news-control-newscarousel" id="result" name="Control">'
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
,'        </div>'
,'        </div>'
,'    '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_87707ea30d104ab3aad48e507313f5db() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Control_NewsCarousel", DisplayTemplate_87707ea30d104ab3aad48e507313f5db);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fControl_NewsCarousel.js", DisplayTemplate_87707ea30d104ab3aad48e507313f5db);
}
//
        $includeScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fControl_NewsCarousel.js", "~sitecollection/_catalogs/masterpage/Display Templates/Search/Buzz365/Group_NewsCarousel.js");
        $includeScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fControl_NewsCarousel.js", "~sitecollection/_catalogs/masterpage/Display Templates/Search/Buzz365/jquery.bxslider.min.js");
        $includeCSS("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fControl_NewsCarousel.js", "~sitecollection/_catalogs/masterpage/Display Templates/Search/Buzz365/jquery.bxslider.css");
        $includeCSS("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fControl_NewsCarousel.js", "~sitecollection/_catalogs/masterpage/Display Templates/Search/Buzz365/news-carousel.css");
    //
}
RegisterTemplate_87707ea30d104ab3aad48e507313f5db();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fControl_NewsCarousel.js"), RegisterTemplate_87707ea30d104ab3aad48e507313f5db);
}