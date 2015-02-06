function $_global_bpstd() {
    Mso_ContentSaveSucceeded = true;
    Mso_TargetHiddenField = null;
    if (typeof Sys != "undefined" && Boolean(Sys) && Boolean(Sys.Application)) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("bpstd.js");
    }
}
function ULSroH() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "bpstd.commentedjs";
    return o;
}
function UpLevelBrowser() {
ULSroH:
    ;
    return navigator.appName == 'Microsoft Internet Explorer' && !browseris.mac;
}
function ShowEditor(WebUrl, LCID, StorageKey, VarPart) {
ULSroH:
    ;
    var webUrlPrefix;

    if (UpLevelBrowser()) {
        webUrlPrefix = WebUrl;
        if (webUrlPrefix == '/') {
            webUrlPrefix = '';
        }
        MsoContentToolpartBasicEdit(webUrlPrefix + "/_layouts/15/htmledit.aspx", null, VarPart, LCID, WebUrl);
    }
    else {
        MSOTlPn_ShowToolPane2('Edit', StorageKey);
    }
}
function BasicPageOnLoadeventHandler(WebUrl, LCID, StorageKey, varPart) {
ULSroH:
    ;
    if (Boolean(location.search.match(/[?&]ContentEditorPopUp=True(&|$)/i)) && Boolean(location.search.match(/[?&]PageView=Shared(&|$)/i))) {
        var fn = function() {
        ULSroH:
            ;
            if (typeof MSOWebPartPageFormName != "undefined")
                document.forms[MSOWebPartPageFormName].action = MSOMode_RemoveMode(document.forms[MSOWebPartPageFormName].action, /(&)*ContentEditorPopUp=True/ig);
            ShowEditor(WebUrl, LCID, StorageKey, varPart);
        };
        var defd;

        try {
            defd = typeof MSOMode_RemoveMode;
        }
        catch (e) {
            defd = "undefined";
        }
        EnsureScript("browserScript", defd, fn);
    }
}
function BasicPageEditContentEventHandler(WebUrl, LCID, StorageKey, varPart) {
ULSroH:
    ;
    try {
        event.returnValue = false;
    }
    catch (e) { }
    if (!Boolean(location.search.match(/[?&]PageView=Shared(&|$)/i))) {
        var ContentEditorPopupExpression = /(&)*ContentEditorPopUp=True/ig;
        var newUrl = MSOMode_GetNewUrl(true, document.forms[MSOWebPartPageFormName].action);

        newUrl = MSOMode_RemoveMode(newUrl, ContentEditorPopupExpression);
        newUrl = MSOMode_AddMode(newUrl, ContentEditorPopupExpression, 'ContentEditorPopUp=True');
        document.forms[MSOWebPartPageFormName].action = newUrl;
        if (UpLevelBrowser()) {
            RestoreToOriginalFormAction();
            document.forms[MSOWebPartPageFormName].submit();
        }
        else {
            MSOTlPn_ShowToolPane2('Edit', StorageKey);
        }
    }
    else {
        ShowEditor(WebUrl, LCID, StorageKey, varPart);
    }
}
var Mso_ContentSaveSucceeded;
var Mso_TargetHiddenField;

function MsoSimpleFormToolpartBasicEdit(url, varActualTargetHiddenField, varWebPart, varWebUrl) {
ULSroH:
    ;
    MsoToolpartBasicEdit(url, varActualTargetHiddenField, varWebPart, 1033, varWebUrl, "http://schemas.microsoft.com/WebPart/v2/SimpleForm" + "#Content");
}
function MsoContentToolpartBasicEdit(url, varActualTargetHiddenField, varWebPart, LCID, varWebUrl) {
ULSroH:
    ;
    MsoToolpartBasicEdit(url, varActualTargetHiddenField, varWebPart, LCID, varWebUrl, "http://schemas.microsoft.com/WebPart/v2/ContentEditor" + "#Content");
}
function MsoToolpartBasicEdit(url, varActualTargetHiddenField, varWebPart, LCID, varWebUrl, nameSpace) {
    var themeHref;

    if (varActualTargetHiddenField == null) {
        if (Mso_TargetHiddenField == null) {
            try {
                var contentValue = (varWebPart.Properties.Item(nameSpace)).Value;

                Mso_TargetHiddenField = new Object();
                Mso_TargetHiddenField.value = contentValue;
            }
            catch (e) {
                return;
            }
        }
    }
    else {
        Mso_TargetHiddenField = varActualTargetHiddenField;
    }
    if (typeof LCID != "undefined") {
        Mso_TargetHiddenField.LCID = LCID;
        Mso_TargetHiddenField.docBodyDirection = LCID == 1025 || LCID == 1037 ? 'rtl' : 'ltr';
        Mso_TargetHiddenField.dir = Mso_TargetHiddenField.docBodyDirection;
        Mso_TargetHiddenField.LCID = LCID;
    }
    else {
        Mso_TargetHiddenField.LCID = undefined;
    }
    Mso_TargetHiddenField.SaveButton = 1;
    try {
        var themeLinkTag = document.getElementById("onetidThemeCSS");

        if (themeLinkTag != null) {
            var themeAbsoluteUrl;

            themeHref = themeLinkTag.href;
            themeAbsoluteUrl = location.protocol + "//" + location.host;
            if (themeHref.charAt(0) != '/') {
                var lastDelimeter = location.pathname.lastIndexOf('/');

                if (lastDelimeter >= 0) {
                    themeAbsoluteUrl = themeAbsoluteUrl + location.pathname.substring(0, lastDelimeter + 1);
                }
            }
            themeAbsoluteUrl = themeAbsoluteUrl + themeHref;
            Mso_TargetHiddenField.Theme = themeAbsoluteUrl;
        }
    }
    catch (e) { }
    Mso_TargetHiddenField.BaseURL = location.href;
    Mso_TargetHiddenField.BodyClassName = "ms-WPBody";
    Mso_TargetHiddenField.fAllowRelativeLinks = true;
    Mso_TargetHiddenField.WebUrl = varWebUrl;
    var retVal = window.showModalDialog(url, Mso_TargetHiddenField, 'dialogHeight:500px;dialogWidth:620px;resizable:yes;status:no;help:no;');

    if (typeof retVal != "undefined" && (!Mso_ContentSaveSucceeded || retVal != Mso_TargetHiddenField.value)) {
        Mso_TargetHiddenField.value = retVal;
        if (varWebPart != null) {
            try {
                Mso_ContentSaveSucceeded = false;
                (varWebPart.Properties.Item(nameSpace)).Value = retVal;
                varWebPart.Save(false, SaveCallBack);
            }
            catch (e) {
                alert(Strings.STS.L_ContentEditorSaveFailed_ERR);
            }
        }
    }
}
function SaveCallBack(saveSucceeded, soapExceptionText, soapStatus) {
ULSroH:
    ;
    Mso_ContentSaveSucceeded = saveSucceeded;
    if (Mso_ContentSaveSucceeded) {
        Mso_TargetHiddenField = null;
        RestoreToOriginalFormAction();
        if (typeof MSOWebPartPageFormName != "undefined")
            document.forms[MSOWebPartPageFormName].submit();
        return;
    }
    else {
        if (soapStatus == "401") {
            alert(Strings.STS.L_AccessDenied_ERR);
        }
        else {
            alert(Strings.STS.L_ContentEditorSaveFailed_ERR);
        }
    }
}
function WP_SetHtml(args) {
    if (args.hiddenField == null) {
        try {
            var contentValue = (args.webPart.Properties.Item("http://schemas.microsoft.com/WebPart/v2/ContentEditor" + "#Content")).Value;

            args.html = contentValue;
            args.hiddenField.value = contentValue;
        }
        catch (e) { }
    }
    else {
        args.html = args.hiddenField.value;
    }
}
function WP_SaveHtml(args) {
    if (args.webPart == null)
        return;
    try {
        Mso_ContentSaveSucceeded = false;
        (args.webPart.Properties.Item("http://schemas.microsoft.com/WebPart/v2/ContentEditor" + "#Content")).Value = args.html;
        args.webPart.Save(false, SaveCallBack);
    }
    catch (e) {
        alert(Strings.STS.L_ContentEditorSaveFailed_ERR);
    }
}
$_global_bpstd();
