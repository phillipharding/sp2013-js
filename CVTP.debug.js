function $_global_cvtp() {
    if (typeof Sys != "undefined" && Boolean(Sys) && Boolean(Sys.Application)) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("cvtp.js");
    }
}
function ULSrK4() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "cvtp.commentedjs";
    return o;
}
function MsoPageViewerToolpartOptionsEventHandler(action, textbox) {
    if (action == 0) {
        if (textbox.value == "") {
            textbox.value = "http://";
        }
    }
    else if (action == 1) {
        if (textbox.value == "http://") {
            textbox.value = "";
        }
    }
    else if (action == 2) {
        if (textbox.value == "http://") {
            textbox.value = "";
        }
    }
}
function MsoFrameworkPageViewerToolpartDLPreview(url) {
    url = url.replace(/(^\s*)|(\s*$)/g, "");
    if (Boolean(url.match(/^\s*(https?:\/\/)?\s*$/i)))
        return;
    if (MsoFrameworkToolpartCheckPath(url, 12) != 0) {
        window.open(url);
    }
    else {
        if (MsoFrameworkToolpartCheckPath(url, 3) != 0) {
            alert(Strings.STS.L_FileOrFolderUnsupported_ERR);
        }
        else {
            alert(Strings.STS.L_InvalidURLPath_ERR.replace("%0", Strings.STS.L_Link_TXT));
        }
    }
}
function MsoFrameworkPageViewerToolpartPreview(url, radioGroupName) {
ULSrK4:
    ;
    if (typeof MSOWebPartPageFormName != "undefined")
        var htmlForm = document.forms[MSOWebPartPageFormName];
    var radioGroupID;

    if (null != htmlForm) {
        radioGroupID = htmlForm[radioGroupName];
        if (null != radioGroupID) {
            if (radioGroupID[0].checked) {
                MsoFrameworkToolpartPreview(url, Strings.STS.L_InvalidURLPath_ERR.replace("%0", Strings.STS.L_Link_TXT), 12);
            }
            else if (radioGroupID[1].checked) {
                MsoFrameworkToolpartPreview(url, Strings.STS.L_InvalidURLPath_ERR.replace("%0", Strings.STS.L_Link_TXT), 2);
            }
            else if (radioGroupID[2].checked) {
                MsoFrameworkToolpartPreview(url, Strings.STS.L_InvalidURLPath_ERR.replace("%0", Strings.STS.L_Link_TXT), 1);
            }
        }
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
ULSrK4:
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
ULSrK4:
    ;
    window.open(url);
}
function MsoFrameworkToolpartCheckURLHelp(url, regex) {
ULSrK4:
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
$_global_cvtp();
