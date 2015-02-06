function $_global_xtp() {
    if (typeof Sys != "undefined" && Boolean(Sys) && Boolean(Sys.Application)) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("xtp.js");
    }
}
function ULSSES() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "xtp.commentedjs";
    return o;
}
function MsoXmlToolpartSourceEdit(url, varTargetHiddenField, dir) {
ULSSES:
    ;
    varTargetHiddenField.dir = "ltr";
    var retVal = window.showModalDialog(url, varTargetHiddenField, 'dialogHeight:500px;dialogWidth:620px;resizable:yes;status:no;help:no;');

    if (typeof retVal != "undefined") {
        varTargetHiddenField.value = retVal;
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
ULSSES:
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
ULSSES:
    ;
    window.open(url);
}
function MsoFrameworkToolpartCheckURLHelp(url, regex) {
ULSSES:
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
$_global_xtp();
