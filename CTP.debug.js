function $_global_ctp() {
    Mso_ContentSaveSucceeded = true;
    Mso_TargetHiddenField = null;
    if (typeof Sys != "undefined" && Boolean(Sys) && Boolean(Sys.Application)) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("ctp.js");
    }
}
function ULSrES() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "ctp.commentedjs";
    return o;
}
var Mso_ContentSaveSucceeded;
var Mso_TargetHiddenField;

function MsoSimpleFormToolpartBasicEdit(url, varActualTargetHiddenField, varWebPart, varWebUrl) {
ULSrES:
    ;
    MsoToolpartBasicEdit(url, varActualTargetHiddenField, varWebPart, 1033, varWebUrl, "http://schemas.microsoft.com/WebPart/v2/SimpleForm" + "#Content");
}
function MsoContentToolpartBasicEdit(url, varActualTargetHiddenField, varWebPart, LCID, varWebUrl) {
ULSrES:
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
ULSrES:
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
function MsoFrameworkToolpartPreview(url, errorMessage, validTypes) {
    url = url.replace(/(^\s*)|(\s*$)/g, "");
    if (Boolean(url.match(/^\s*(https?:\/\/)?\s*$/i)))
        return;
    if ((MsoFrameworkToolpartCheckPath(url, validTypes) & validTypes) != 0) {
        window.open(url);
    }
    else {
        alert(errorMessage);
    }
}
function MsoFrameworkToolpartCheckPath(url, validTypes) {
ULSrES:
    ;
    var i;
    var testMask = 0;

    if (Boolean(validTypes & 1) || Boolean(validTypes & 2)) {
        testMask += 3;
    }
    if (Boolean(validTypes & 4) || Boolean(validTypes & 8)) {
        testMask += 4;
    }
    var patterns = [/^(file:\/\/(\\\\|\/\/)?|\\\\)([^\\\/]+[\\\/]?)*$/i, /^(file:\/\/)?[a-zA-Z]:([\\\/][^\\\/]+)*[\\\/]?$/, /^(https?:\/\/|[\\\/])?(?:[^\\\/]+[\\\/])*[^\\\/]*$/i];
    var lastDelimeter;
    var parsedUrl = null;

    for (i = 0; i < patterns.length; i++) {
        if (Boolean(testMask & 1 << i)) {
            if (i < 2) {
                parsedUrl = url.match(patterns[i]);
            }
            else {
                parsedUrl = MsoFrameworkToolpartCheckURLHelp(url, patterns[i]);
            }
            if (parsedUrl != null) {
                if (i == 0 || i == 1) {
                    lastDelimeter = url.lastIndexOf('\\');
                    if (lastDelimeter == -1)
                        lastDelimeter = url.lastIndexOf('/');
                    if (lastDelimeter == url.length - 1) {
                        return 2;
                    }
                    else {
                        return 3;
                    }
                }
                else {
                    return 12;
                }
            }
        }
    }
    return 0;
}
function MsoFrameworkToolpartHelp(url) {
ULSrES:
    ;
    window.open(url);
}
function MsoFrameworkToolpartCheckURLHelp(url, regex) {
ULSrES:
    ;
    var base = "";
    var i = url.indexOf("?");

    if (i != -1) {
        base = url.substr(0, i);
    }
    else {
        base = url;
    }
    return base.match(regex);
}
$_global_ctp();
