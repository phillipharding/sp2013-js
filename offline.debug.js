function $_global_offline() {
    g_OfflineClient = null;
    if (typeof Sys != "undefined" && Sys != null && Sys.Application != null) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("offline.js");
    }
}
function ULSNRC() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "offline.commentedjs";
    return o;
}
var g_OfflineClient;

function TakeOfflineDisabled(scope, siteTemplateId, listBaseType, listTemplateType) {
    if (InitOfflineClient()) {
        return !g_OfflineClient.IsOfflineAllowed(scope, siteTemplateId, listBaseType, listTemplateType);
    }
    var parametersValid = browseris.win && IsScopeValidForOffline(scope) && IsSiteTemplateValidForOffline(scope, siteTemplateId) && IsListValidForOffline(scope, listBaseType, listTemplateType);

    if (!parametersValid) {
        return true;
    }
    if (typeof navigator.msProtocols == "object") {
        return !navigator.msProtocols["grvopen"];
    }
    return false;
}
function InitOfflineClient() {
ULSNRC:
    ;
    try {
        if (g_OfflineClient == null) {
            if (document.cookie.indexOf("OfflineClientInstalled") == -1) {
                if (IsSupportedMacBrowser()) {
                    g_OfflineClient = CreateMacPlugin();
                }
                else {
                    g_OfflineClient = new ActiveXObject("SharePoint.OfflineClient");
                }
                document.cookie = "OfflineClientInstalled=1";
            }
            else {
                if (GetCookie("OfflineClientInstalled") == "1") {
                    if (IsSupportedMacBrowser()) {
                        g_OfflineClient = CreateMacPlugin();
                    }
                    else {
                        g_OfflineClient = new ActiveXObject("SharePoint.OfflineClient");
                    }
                }
                else {
                    return false;
                }
            }
        }
        if (g_OfflineClient != null && typeof g_OfflineClient.IsOfflineAllowed != "undefined" && typeof g_OfflineClient.TakeOffline != "undefined") {
            return true;
        }
    }
    catch (e) {
        document.cookie = "OfflineClientInstalled=0";
        g_OfflineClient = null;
    }
    return false;
}
function IsScopeValidForOffline(scope) {
    switch (scope) {
    case 1:
    case 2:
    case 3:
        return true;
    default:
        return false;
    }
}
function IsSiteTemplateValidForOffline(scope, siteTemplateId) {
    if (scope !== 1) {
        return true;
    }
    switch (siteTemplateId) {
    case 2:
    case 3:
    case 4:
    case 9:
    case 15:
    case 54:
        return false;
    default:
        return true;
    }
}
function IsListValidForOffline(scope, listBaseType, listTemplateType) {
    if (scope === 1) {
        return true;
    }
    switch (listTemplateType) {
    case 100:
    case 101:
    case 103:
    case 104:
    case 105:
    case 107:
    case 108:
    case 109:
    case 120:
    case 150:
    case 499:
    case 851:
    case 1100:
    case 1300:
    case 2002:
    case 2003:
        return true;
    }
    switch (listBaseType) {
    case 0:
    case 1:
    case 3:
        return true;
    }
    return false;
}
function TakeOfflineToClientReal(scope, siteTemplate, siteUrl, listBaseType, listTemplateId, listGuid, folderUrl) {
    try {
        if (TakeOfflineDisabled(scope, siteTemplate, listBaseType, listTemplateId)) {
            Sys.Debug.assert(false, "Trying to take something offline when the action should be disabled. Check your code!");
            return;
        }
        if (InitOfflineClient()) {
            g_OfflineClient.TakeOffline(scope, siteTemplate, siteUrl, listBaseType, listTemplateId, listGuid, folderUrl);
            return;
        }
        if (!IsValidCommandForOffline(scope, siteUrl, listGuid, folderUrl)) {
            throw "ArgumentException: Incorrect parameters used to initiate offline sync.";
        }
        var uriBuilder = [];

        uriBuilder.push("/");
        uriBuilder.push(StringToASCIIAlnum(siteUrl));
        if (listGuid != null && listGuid != "") {
            uriBuilder.push(StringToASCIIAlnum(listGuid));
            if (listTemplateId != null) {
                uriBuilder.push(StringToASCIIAlnum(listTemplateId.toString()));
            }
            if (folderUrl != null && folderUrl != "") {
                uriBuilder.push(StringToASCIIAlnum(folderUrl));
            }
        }
        var uri = new URI(uriBuilder.join("/"));

        uri.setScheme("grvopen");
        var uriStringWithQuery = uri.getString() + "?" + GetScopeName(scope);
        var frameId = "SPFolderSyncFrame";
        var protocolHandlerFrame = document.getElementById(frameId);

        if (protocolHandlerFrame == null) {
            protocolHandlerFrame = document.createElement('iframe');
            protocolHandlerFrame.id = frameId;
            protocolHandlerFrame.className = 'ObjectInDialog';
            protocolHandlerFrame.style.visibility = 'hidden';
            protocolHandlerFrame.src = uriStringWithQuery;
            document.body.appendChild(protocolHandlerFrame);
        }
        else {
            protocolHandlerFrame.src = uriStringWithQuery;
        }
    }
    catch (e) {
        alert(e.message);
    }
}
function IsValidCommandForOffline(scope, siteUrl, listGuid, folderUrl) {
    var siteEmpty = siteUrl === null || siteUrl === "";
    var listOrLibraryEmpty = listGuid === null || listGuid === "";
    var folderEmpty = folderUrl === null || folderUrl === "";

    switch (scope) {
    case 1:
        return !siteEmpty && listOrLibraryEmpty && folderEmpty;
    case 2:
        return !siteEmpty && !listOrLibraryEmpty && folderEmpty;
    case 3:
        return !siteEmpty && !listOrLibraryEmpty && !folderEmpty;
    default:
        return false;
    }
}
function GetScopeName(scope) {
    switch (scope) {
    case 1:
        return "OPENSITE";
    case 2:
        return "OPENLIST";
    case 3:
        return "OPENFOLDER";
    default:
        throw "ArgumentException: Incorrect offline scope value";
    }
}
function StringToASCIIAlnum(stringToEncode) {
    var ASCII_LOWER_A_DEC_VAL = 97;
    var ret = "";

    for (var strIdx = 0; strIdx < stringToEncode.length; strIdx++) {
        var c = stringToEncode[strIdx];

        if (IsWAsciiAlnum(c)) {
            ret += c;
        }
        else {
            ret += "_";
            var charCode = c.charCodeAt(0);

            if (charCode <= 99) {
                ret += charCode.toString();
            }
            else {
                ret += String.fromCharCode(ASCII_LOWER_A_DEC_VAL + Math.floor(charCode / 0x1000));
                ret += String.fromCharCode(ASCII_LOWER_A_DEC_VAL + Math.floor(charCode / 0x0100) % 0x10);
                ret += String.fromCharCode(ASCII_LOWER_A_DEC_VAL + Math.floor(charCode / 0x0010) % 0x10);
                ret += String.fromCharCode(ASCII_LOWER_A_DEC_VAL + charCode % 0x10);
            }
        }
    }
    return ret;
}
function IsWAsciiAlnum(character) {
    return character >= 'a' && character <= 'z' || character >= 'A' && character <= 'Z' || character >= '0' && character <= '9';
}
$_global_offline();
