function ULS4d9(){var o=new Object;o.ULSTeamName="Search Server";o.ULSFileName="Item_PDF_HoverPanel.js";return o;}
function DisplayTemplate_63aec107aa58478799b42ec0134baf0c(ctx) {ULS4d9:;
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_63aec107aa58478799b42ec0134baf0c.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_PDF_HoverPanel.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchHoverPanel'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Title':['Title'], 'Path':['Path'], 'Description':['Description'], 'EditorOWSUSER':['EditorOWSUSER'], 'LastModifiedTime':['LastModifiedTime'], 'CollapsingStatus':['CollapsingStatus'], 'DocId':['DocId'], 'HitHighlightedSummary':['HitHighlightedSummary'], 'HitHighlightedProperties':['HitHighlightedProperties'], 'FileExtension':['FileExtension'], 'ViewsLifeTime':['ViewsLifeTime'], 'ParentLink':['ParentLink'], 'FileType':['FileType'], 'IsContainer':['IsContainer'], 'SecondaryFileExtension':['SecondaryFileExtension'], 'DisplayAuthor':['DisplayAuthor'], 'ServerRedirectedURL':['ServerRedirectedURL'], 'SectionNames':['SectionNames'], 'SectionIndexes':['SectionIndexes'], 'ServerRedirectedEmbedURL':['ServerRedirectedEmbedURL'], 'ServerRedirectedPreviewURL':['ServerRedirectedPreviewURL']};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {ULS4d9:;
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);
        var i = 0;
        var id = ctx.CurrentItem.csr_id;
        ctx.CurrentItem.csr_ShowFollowLink = true;
        ctx.currentItem_ShowPostToYammer = true;
        ctx.CurrentItem.csr_ShowViewLibrary = true;
        ctx.CurrentItem.csr_ForceOpenLink = true;
ms_outHtml.push(''
,'        <div class="ms-srch-hover-innerContainer ms-srch-hover-wacSize" id="', $htmlEncode(id + HP.ids.inner) ,'">'
,'            <div class="ms-srch-hover-arrowBorder" id="', $htmlEncode(id + HP.ids.arrowBorder) ,'"></div>'
,'            <div class="ms-srch-hover-arrow" id="', $htmlEncode(id + HP.ids.arrow) ,'"></div>'
,'            <div class="ms-srch-hover-content" id="', $htmlEncode(id + HP.ids.content) ,'" data-displaytemplate="PDFHoverPanel">'
,'                <div id="', $htmlEncode(id + HP.ids.header) ,'" class="ms-srch-hover-header">'
,'                    ', ctx.RenderHeader(ctx) ,''
,'                </div>'
,'                <div id="', $htmlEncode(id + HP.ids.body) ,'" class="ms-srch-hover-body">'
);
                    if(!Srch.U.n(ctx.CurrentItem.ServerRedirectedEmbedURL))
                    {
                        ctx.CurrentItem.csr_DataShown = true;
                        ctx.currentItem_ShowChangedBySnippet = true;
ms_outHtml.push(''
,'                        <div class="ms-srch-hover-viewerContainer">'
,'                            <iframe id="', $htmlEncode(id + HP.ids.viewer) ,'" src="', $urlHtmlEncodeString(ctx.CurrentItem.ServerRedirectedEmbedURL) ,'" scrolling="no" frameborder="0px" class="ms-srch-hover-viewer"></iframe>'
,'                        </div>'
,'                        <div class="ms-srch-hover-wacImageContainer">'
,'                            <img id="', $htmlEncode(id + HP.ids.preview) ,'" alt="', $htmlEncode(Srch.Res.item_Alt_Preview) ,'" onload="this.parentNode.style.display=\'block\';" />'
,'                        </div>'
);
                    }
                    else
                    {
                        ctx.CurrentItem.csr_ShowLastModifiedTime = true;
                        ctx.CurrentItem.csr_ShowAuthors = true; 
                    }
ms_outHtml.push(''
,'                    ', ctx.RenderBody(ctx) ,''
,'                </div>'
,'                <div id="', $htmlEncode(id + HP.ids.actions) ,'" class="ms-srch-hover-actions">'
,'                    ', ctx.RenderFooter(ctx) ,''
,'                </div>'
,'            </div>'
);
            if(!Srch.U.n(ctx.CurrentItem.ServerRedirectedEmbedURL)){
                AddPostRenderCallback(ctx, function(){ULS4d9:;
                    HP.loadViewer(ctx.CurrentItem.id, ctx.CurrentItem.id + HP.ids.inner, ctx.CurrentItem.id + HP.ids.viewer, ctx.CurrentItem.id + HP.ids.preview, ctx.CurrentItem.ServerRedirectedEmbedURL, ctx.CurrentItem.ServerRedirectedPreviewURL);
                });
            }
ms_outHtml.push(''
,'        </div>'
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_63aec107aa58478799b42ec0134baf0c() {ULS4d9:;

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_PDF_HoverPanel", DisplayTemplate_63aec107aa58478799b42ec0134baf0c);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_PDF_HoverPanel.js", DisplayTemplate_63aec107aa58478799b42ec0134baf0c);
}

}
RegisterTemplate_63aec107aa58478799b42ec0134baf0c();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_PDF_HoverPanel.js"), RegisterTemplate_63aec107aa58478799b42ec0134baf0c);
}
