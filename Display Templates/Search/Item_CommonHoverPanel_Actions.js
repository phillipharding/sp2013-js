function ULSHlE(){var o=new Object;o.ULSTeamName="Search Server";o.ULSFileName="Item_CommonHoverPanel_Actions.js";return o;}
function DisplayTemplate_de3aacf5af8644f8911004043096b6e2(ctx) {ULSHlE:;
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_de3aacf5af8644f8911004043096b6e2.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_CommonHoverPanel_Actions.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchHoverPanel'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {ULSHlE:;
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);	
        var id = ctx.CurrentItem.id;   
        var appAttribs = "";
        if (!$isEmptyString(ctx.CurrentItem.csr_OpenApp)) { appAttribs += "openApp=\"" + $htmlEncode(ctx.CurrentItem.csr_OpenApp) + "\"" }; 
        if (!$isEmptyString(ctx.CurrentItem.csr_OpenControl)) { appAttribs += " openControl=\"" + $htmlEncode(ctx.CurrentItem.csr_OpenControl) + "\"" };

        if (!Srch.U.e(ctx.CurrentItem.Path))
        {
            var editId = id + HP.ids.open;
            var editTitle = Srch.Res.hp_Tooltip_Open;
            var editText = Srch.Res.hp_Open;

            if (ctx.currentItem_IsOfficeDocument)
            {
                editId = id + HP.ids.open;
                editTitle = Srch.Res.hp_Edit;
                editText = Srch.Res.hp_Edit;
            }
            else if (!Srch.U.e(ctx.CurrentItem.ServerRedirectedURL) && !ctx.CurrentItem.IsContainer && 
                     !ctx.CurrentItem.csr_ForceOpenLink)
            {
                editId = id + HP.ids.openClient;
                editTitle = Srch.Res.hp_Tooltip_OpenInClient;
                editText = Srch.Res.hp_Edit;
            }

            var editHmtl = String.format('<a clicktype="ActionEdit" id="{0}" class="ms-calloutLink ms-uppercase" href="{1}" title="{2}" {3}>{4}</a>', 
                                            $htmlEncode(editId), $urlHtmlEncodeString(ctx.CurrentItem.Path), $htmlEncode(editTitle), appAttribs, $htmlEncode(editText));
ms_outHtml.push('				'
,'            <div class="ms-srch-hover-action">        '
,'                ', editHmtl ,'                   '
,'            </div>'
);
        }

        var hasYammerPostCapability = (Flighting.VariantConfiguration.IsExpFeatureClientEnabled(4) &&
            !Srch.U.n(SP) &&
            !Srch.U.n(SP.YammerSwitch) &&
            SP.YammerSwitch.IsEnabled);

        var isOfficeDoc = (!Srch.U.n(ctx.currentItem_IsOfficeDocument) &&
            ctx.currentItem_IsOfficeDocument);

        var isPostableDoc = isOfficeDoc || (!Srch.U.n(ctx.currentItem_ShowPostToYammer) &&
            ctx.currentItem_ShowPostToYammer);

        if (hasYammerPostCapability &&
            isPostableDoc)
        {
            var forceGotoWACUrl = isOfficeDoc;
            if(ctx.ScriptApplicationManager && ctx.ScriptApplicationManager.states){

                forceGotoWACUrl = (forceGotoWACUrl && !ctx.ScriptApplicationManager.states.openDocumentsInClient);
            }

            var bestUrl = SP.Utilities.HttpUtility.urlPathEncode(ctx.CurrentItem.Path) + (forceGotoWACUrl ? "?Web=1" : "");;

            var urlForHrefClickAttrib = $htmlEncode(encodeURIComponent(bestUrl));
ms_outHtml.push(''
,'            <div class="ms-srch-hover-action">'
,'                <a id="', $htmlEncode(id + HP.ids.post) ,'" class="ms-calloutLink ms-uppercase" href="javascript:SearchHovercardPostToYammer(\'', urlForHrefClickAttrib ,'\');" title="', $htmlEncode(Srch.Res.hp_Tooltip_Post) ,'">'
,'                    ', $htmlEncode(Srch.Res.hp_Post) ,''
,'                </a>'
,'            </div>'
);
        }
        else if (!Srch.U.isSPFSKU() && ctx.CurrentItem.csr_ShowFollowLink && !$isEmptyString(ctx.CurrentItem.Path)){
            var isDoc = true;
            if(!$isNull(ctx.CurrentItem.csr_IsSite) && ctx.CurrentItem.csr_IsSite == true) {
                isDoc = false;
            }
ms_outHtml.push(''
,'            <div class="ms-srch-hover-action">'
,'                <a id="', $htmlEncode(id + HP.ids.follow) ,'" class="ms-calloutLink ms-uppercase" href="javascript:HP.Follow(\'', $scriptEncode(ctx.CurrentItem.Path) ,'\', true, ', isDoc ,')" title="', $htmlEncode(Srch.Res.hp_Tooltip_Follow) ,'">'
,'                    ', $htmlEncode(Srch.Res.hp_Follow) ,''
,'                </a>'
,'            </div>'
);
        }
ms_outHtml.push(''
,'        <div class="ms-srch-hover-action">'
);
            var emailLink = HP.GetEmailLink(ctx.CurrentItem.Title, ctx.CurrentItem.Path, ctx.CurrentItem.csr_ClientType, ctx.CurrentItem.ServerRedirectedURL);
ms_outHtml.push(''
,'            <a clicktype="ActionSend" id="', $htmlEncode(id + HP.ids.send) ,'" class="ms-calloutLink ms-uppercase" title="', $htmlEncode(Srch.Res.hp_Tooltip_Send) ,'" href="', $htmlEncode(emailLink) ,'">'
,'                ', $htmlEncode(Srch.Res.hp_Send) ,''
,'            </a>'
,'        </div>'
);
        if(!Srch.U.e(ctx.CurrentItem.ParentLink) && ctx.CurrentItem.csr_ShowViewLibrary) {
ms_outHtml.push(''
,'            <div class="ms-srch-hover-action">'
,'                <a clicktype="ActionViewLibrary" id="', $htmlEncode(id + HP.ids.parentLink) ,'" class="ms-calloutLink ms-uppercase" title="', $htmlEncode(Srch.Res.hp_Tooltip_ViewLibrary) ,'" href="', $urlHtmlEncodeString(ctx.CurrentItem.ParentLink) ,'">', $htmlEncode(Srch.Res.hp_ViewLibrary) ,'</a>'
,'            </div>'
);
        }
        if(ctx.ClientControl.get_showViewDuplicates() && !Srch.U.n(ctx.CurrentItem.CollapsingStatus) && !Srch.U.n(ctx.CurrentItem.DocId)) {
            if(ctx.CurrentItem.CollapsingStatus === 1){
ms_outHtml.push(''
,'                <div class="ms-srch-hover-action">'
,'                    <a clicktype="ActionViewDupes" id="', $htmlEncode(id + HP.ids.viewDuplicates) ,'" class="ms-calloutLink ms-uppercase" title="', $htmlEncode(Srch.Res.hp_Tooltip_ViewDuplicates) ,'" href="javascript:HP.ViewDuplicates(\'', $scriptEncode(ctx.CurrentItem.id) ,'\',', ctx.CurrentItem.DocId ,')">'
,'                        ', $htmlEncode(Srch.Res.hp_ViewDuplicates) ,''
,'                    </a>'
,'                </div>'
);
            }
        }
ms_outHtml.push(''
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_de3aacf5af8644f8911004043096b6e2() {ULSHlE:;

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_CommonHoverPanel_Actions", DisplayTemplate_de3aacf5af8644f8911004043096b6e2);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_CommonHoverPanel_Actions.js", DisplayTemplate_de3aacf5af8644f8911004043096b6e2);
}

    if(Flighting.VariantConfiguration.IsExpFeatureClientEnabled(4))
    {

        SP.SOD.executeFunc(
            'followingcommon.js',
            'PrepareYammerEnvironment',
            function() {ULSHlE:;
                PrepareYammerEnvironment(null);
            });

        window.SearchHovercardPostToYammer = function(messageOrUrlToPost)
        {ULSHlE:;
            var postToYammerFunc = function() {ULSHlE:; PostToYammer(messageOrUrlToPost, HP.postActionEventName); };
            if(Srch.U.n(PostToYammer))
            {

                SP.SOD.executeFunc('followingcommon.js', 'PostToYammer', postToYammerFunc);
            }
            else
            {

                postToYammerFunc();
            }
        };
    }

}
RegisterTemplate_de3aacf5af8644f8911004043096b6e2();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_CommonHoverPanel_Actions.js"), RegisterTemplate_de3aacf5af8644f8911004043096b6e2);
}
