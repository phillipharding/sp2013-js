function $_global_foldhyperlink() {
    if (typeof Sys != 'undefined' && Sys != null && Sys.Application != null)
        Sys.Application.notifyScriptLoaded();
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == 'function')
        NotifyScriptLoadedAndExecuteWaitingJobs("foldHyperLink.js");
}
function ULS8Cx() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "foldhyperlink.commentedjs";
    return o;
}
function ToggleElementDisplay(eleToToggle, hidingCssClassName, callBackWhenVisible, callBackWhenHidden) {
    if (Boolean(eleToToggle)) {
        var strDispStyle = GetCurrentEltStyle(eleToToggle, "display");

        if (strDispStyle == "none") {
            EnsureScriptFunc("core.js", "RemoveCssClassFromElement", function() {
            ULS8Cx:
                ;
                SetOpacity(eleToToggle, 0);
                RemoveCssClassFromElement(eleToToggle, hidingCssClassName);
                SPAnimationUtility.BasicAnimator.FadeIn(eleToToggle, callBackWhenVisible, null);
            });
        }
        else {
            SPAnimationUtility.BasicAnimator.FadeOut(eleToToggle, function() {
            ULS8Cx:
                ;
                EnsureScriptFunc("core.js", "AddCssClassToElement", function() {
                ULS8Cx:
                    ;
                    AddCssClassToElement(eleToToggle, hidingCssClassName);
                    if (Boolean(callBackWhenHidden))
                        callBackWhenHidden();
                });
            }, null);
        }
    }
}
function ToggleElementWithChangeInLinkText(eleToToggleId, hidingCssClassName, linkIdToChangeText, linkTextWhenVisible, linkTextWhenHidden, callBackWhenVisible, callBackWhenHidden) {
    if (!Boolean(hidingCssClassName))
        hidingCssClassName = "ms-hide";
    var eleToToggle = document.getElementById(eleToToggleId);

    ToggleElementDisplay(eleToToggle, hidingCssClassName, callBackWhenVisible, callBackWhenHidden);
    var eleLink = document.getElementById(linkIdToChangeText);

    if (Boolean(eleLink)) {
        var strLinkText = eleLink.innerHTML;

        if (Boolean(linkTextWhenVisible) && Boolean(eleLink) && strLinkText != linkTextWhenVisible) {
            setInnerText(eleLink, linkTextWhenVisible);
        }
        else if (Boolean(linkTextWhenHidden) && Boolean(eleLink)) {
            setInnerText(eleLink, linkTextWhenHidden);
        }
    }
    PreventDefaultNavigation();
}
function ToggleFoldText(divIdToFold, linkId, linkTitleText, linkTitleWhenFoldClosed) {
ULS8Cx:
    ;
    if (window.location.href.match(new RegExp("[?&]IsDlg=1")) != null) {
        if (window.frameElement != null) {
            var dlg = window.frameElement;

            dlg.autoSizeSuppressScrollbar(GetResizeFunc(divIdToFold, linkId, linkTitleText, linkTitleWhenFoldClosed));
        }
    }
    else {
        GetResizeFunc(divIdToFold, linkId, linkTitleText, linkTitleWhenFoldClosed)();
    }
}
function GetResizeFunc(divIdToFold, linkId, linkTitleText, linkTitleWhenFoldClosed) {
ULS8Cx:
    ;
    return function() {
    ULS8Cx:
        ;
        ToggleElementWithChangeInLinkText(divIdToFold, null, linkId, linkTitleText, linkTitleWhenFoldClosed, null, null);
    };
}
$_global_foldhyperlink();
