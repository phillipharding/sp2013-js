function $_global_commonvalidation() {
    LegalUrlChars = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, true, false, false, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    if (typeof Sys != "undefined" && Boolean(Sys) && Boolean(Sys.Application)) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("commonvalidation.js");
    }
}
function ULS8Wd() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "commonvalidation.commentedjs";
    return o;
}
var LegalUrlChars;

function AdmBuildParam(stPattern) {
    var re;
    var i;

    for (i = 1; i < arguments.length; i++) {
        re = new RegExp("\\^" + String(i));
        stPattern = stPattern.replace(re, arguments[i]);
    }
    return stPattern;
}
function IndexOfIllegalCharInUrlLeafName(strLeafName) {
    for (var i = 0; i < strLeafName.length; i++) {
        var ch = strLeafName.charCodeAt(i);

        if (strLeafName.charAt(i) == '.' && (i == 0 || i == strLeafName.length - 1))
            return i;
        if (ch < 160 && (strLeafName.charAt(i) == '/' || !LegalUrlChars[ch]))
            return i;
    }
    return -1;
}
function IndexOfIllegalCharInUrlPath(strPath) {
    for (var i = 0; i < strPath.length; i++) {
        var ch = strPath.charCodeAt(i);

        if (ch < 160 && !LegalUrlChars[ch])
            return i;
    }
    return -1;
}
function UrlContainsIllegalStrings(strPath) {
    if (strPath.indexOf("..") >= 0 || strPath.indexOf("//") >= 0 || strPath.indexOf("./") >= 0 || strPath.indexOf("/.") >= 0 || strPath.indexOf(".") == 0 || strPath.lastIndexOf(".") == strPath.length - 1) {
        return true;
    }
    return false;
}
function UrlLeafNameValidate(source, args) {
    var strMessagePrefix = "";

    if (typeof source.MessagePrefix == "string") {
        strMessagePrefix = source.MessagePrefix;
    }
    else {
        strMessagePrefix = source.id;
    }
    var i = IndexOfIllegalCharInUrlLeafName(args.Value);

    if (i >= 0) {
        if (typeof source.errormessage == "string") {
            source.errormessage = AdmBuildParam(Strings.STS.L_ContainIllegalChar_Text, strMessagePrefix, args.Value.charAt(i));
        }
        args.IsValid = false;
    }
    else if (UrlContainsIllegalStrings(args.Value)) {
        if (typeof source.errormessage == "string") {
            source.errormessage = AdmBuildParam(Strings.STS.L_ContainIllegalString_Text, strMessagePrefix);
        }
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}
function UrlPathValidate(source, args) {
    var strMessagePrefix = "";

    if (typeof source.MessagePrefix == "string") {
        strMessagePrefix = source.MessagePrefix;
    }
    else {
        strMessagePrefix = source.id;
    }
    var i = IndexOfIllegalCharInUrlPath(args.Value);

    if (i >= 0) {
        if (typeof source.errormessage == "string") {
            source.errormessage = AdmBuildParam(Strings.STS.L_ContainIllegalChar_Text, strMessagePrefix, args.Value.charAt(i));
        }
        args.IsValid = false;
    }
    else if (UrlContainsIllegalStrings(args.Value)) {
        if (typeof source.errormessage == "string") {
            source.errormessage = AdmBuildParam(Strings.STS.L_ContainIllegalString_Text, strMessagePrefix);
        }
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}
function IsCheckBoxListSelected(checkboxlist) {
    if (checkboxlist == null)
        return false;
    var len = checkboxlist.length;

    if (len == null) {
        return checkboxlist.checked;
    }
    else {
        for (var i = 0; i < len; i++) {
            var cb = checkboxlist[i];

            if (cb.checked) {
                return true;
            }
        }
    }
    return false;
}
function STSValidatorEnable(val, bEnable, bSilent) {
ULS8Wd:
    ;
    var objVal = document.getElementById(val);

    if (objVal == null)
        return;
    if (bSilent || Boolean(objVal.getAttribute("AlwaysEnableSilent"))) {
        objVal.enabled = bEnable == true;
    }
    else {
        if (typeof ValidatorEnable == "function")
            ValidatorEnable(objVal, bEnable);
    }
}
$_global_commonvalidation();
