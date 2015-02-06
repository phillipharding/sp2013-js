function $_global_wpcm() {
    wpcmInitInfo.prototype = {
        webpartGuids: undefined
    };
    WPCState = {
        existing: 0,
        deleted: 4
    };
    WPC.prototype.PrepareToCommit = WPCPrepareToCommit;
    WPC.prototype.Dispose = WPCDispose;
    WPCM.newWebPartIdElementId = "_wpcmWpid";
    WPCM.prototype.Dispose = WPCMDispose;
    WPCM.prototype.Init = WPCMInit;
    g_wpcmSeparator = "$$__WPCM__$$";
    WPCM.prototype.PrepareToCommit = WPCMPrepareToCommit;
    WPCM.prototype.SetWpcmVal = WPCMSetWpcmVal;
    ExecuteOrDelayUntilScriptLoaded(function() {
    ULSAZ1:
        ;
        RTE.ClientWebPartManager.init();
    }, "sp.ui.rte.js");
    if (typeof Sys != "undefined" && Boolean(Sys) && Boolean(Sys.Application)) {
        Sys.Application.notifyScriptLoaded();
    }
    NotifyScriptLoadedAndExecuteWaitingJobs("wpcm.js");
}
function ULSAZ1() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "wpcm.commentedjs";
    return o;
}
function wpcmInitInfo() {
}
var WPCState;

function WPC() {
ULSAZ1:
    ;
    this.state = WPCState.existing;
    this.render = null;
    this.id = "";
    this.titleHtml = null;
}
function WPCPrepareToCommit(rgstr) {
    rgstr.push(this.state);
    rgstr.push("#");
    rgstr.push(this.id);
}
function WPCDispose() {
ULSAZ1:
    ;
    this.state = WPCState.existing;
    this.render = null;
    this.id = "";
}
function WPCM() {
ULSAZ1:
    ;
    this.rgparts = null;
    this.forEditing = false;
    this.inited = false;
}
function WPCMDispose() {
ULSAZ1:
    ;
    if (this.rgparts != null) {
        var wpid;

        for (wpid in this.rgparts) {
            var wpc = this.rgparts[wpid];

            wpc.Dispose();
        }
        delete this.rgparts;
    }
    this.rgparts = null;
    this.inited = false;
}
function WPCMInit(initInfo) {
    var wpid;
    var i;
    var wpc;

    if (!Boolean(this.rgparts)) {
        this.rgparts = new Object();
    }
    var partsValidAtServer = new Object();

    if (Boolean(initInfo) && Boolean(initInfo.webpartGuids)) {
        for (i = 0; i < initInfo.webpartGuids.length; i++) {
            wpid = initInfo.webpartGuids[i];
            partsValidAtServer[wpid] = true;
            wpc = this.rgparts[wpid];
            if (!Boolean(wpc)) {
                wpc = new WPC();
            }
            wpc.id = wpid;
            var elem = document.getElementById("div_" + wpid);

            if (Boolean(elem)) {
                wpc.render = elem;
                elem.className = "ms-rtestate-notify ms-rtegenerate-notify ms-rtestate-read " + wpid;
                if (!wpc.titleHtml) {
                    var headers = elem.getElementsByTagName("TD");

                    if (Boolean(headers)) {
                        for (var j = 0; j < headers.length; j++) {
                            if (headers[j].className && headers[j].className.indexOf('js-webpart-titleCell') >= 0) {
                                wpc.titleHtml = headers[j].innerHTML;
                                break;
                            }
                        }
                    }
                }
            }
            else {
                wpc.render = null;
                wpc.state = WPCState.deleted;
            }
            this.rgparts[wpid] = wpc;
        }
    }
    var partsToRemove = [];

    for (wpid in this.rgparts) {
        if (!partsValidAtServer[wpid]) {
            partsToRemove.push(wpid);
        }
    }
    for (i = 0; i < partsToRemove.length; i++) {
        wpc = this.rgparts[partsToRemove[i]];
        if (Boolean(wpc)) {
            wpc.Dispose();
        }
        delete this.rgparts[partsToRemove[i]];
    }
    this.inited = true;
}
var g_wpcmSeparator;

function WPCMPrepareToCommit() {
ULSAZ1:
    ;
    var rgstr = [];
    var wpid;
    var first = true;

    if (!this.forEditing)
        return "";
    for (wpid in this.rgparts) {
        var wpc = this.rgparts[wpid];
        var div = document.getElementById("div_" + wpid);

        if (div == null) {
            wpc.state = WPCState.deleted;
        }
        else {
            wpc.state = WPCState.existing;
        }
        if (wpc.state == WPCState.existing)
            continue;
        if (!first)
            rgstr.push(g_wpcmSeparator);
        else
            first = false;
        wpc.PrepareToCommit(rgstr);
    }
    var str = rgstr.join("");

    delete rgstr;
    return str;
}
function WPCMSetWpcmVal() {
ULSAZ1:
    ;
    var newWpcmVal = this.PrepareToCommit();

    (document.getElementById("wpcmVal")).value = newWpcmVal;
}
var vwpcm;

function InitPageEditor() {
ULSAZ1:
    ;
    var wpcm = vwpcm;

    if (Boolean(wpcm)) {
        wpcm.forEditing = true;
    }
}
function InitWpcm(initInfo, reset) {
ULSAZ1:
    ;
    var m = vwpcm;

    if (!Boolean(m) || reset) {
        m = new WPCM();
    }
    m.Init(initInfo);
    vwpcm = m;
}
function isElementConnected(element) {
ULSAZ1:
    ;
    if (element == null)
        return false;
    if (element == document.body)
        return true;
    return isElementConnected(element.parentNode);
}
function refreshAllWebParts() {
ULSAZ1:
    ;
    var i;

    if (!Boolean(vwpcm)) {
        return;
    }
    var allWebParts = vwpcm.rgparts;

    for (var wpid in allWebParts) {
        var wpc = allWebParts[wpid];

        if (!Boolean(wpc) || !Boolean(wpc.render)) {
            continue;
        }
        var storedDiv = wpc.render;
        var stillInDOM = isElementConnected(storedDiv) && 1 == storedDiv.parentNode.nodeType;
        var allDivs = GetElementsByName("div_" + wpid);
        var numDivs = allDivs.length;

        if (0 == numDivs) {
            continue;
        }
        var allDivs2 = [];

        for (i = 0; i < numDivs; i++) {
            allDivs2[i] = allDivs[i];
        }
        for (i = 0; i < numDivs; i++) {
            var oneDiv = allDivs2[i];

            if (stillInDOM && oneDiv == storedDiv) { }
            else if (!stillInDOM && 0 == i) {
                wpc.render = oneDiv;
            }
            else {
                var wpbox = oneDiv.parentNode;

                if (Boolean(wpbox)) {
                    if (Boolean(wpbox.className) && wpbox.className.indexOf("ms-rte-wpbox") >= 0 && Boolean(wpbox.parentNode)) {
                        wpbox.parentNode.removeChild(wpbox);
                    }
                    else {
                        wpbox.removeChild(oneDiv);
                    }
                }
            }
        }
    }
    if (typeof inplview != "undefined") {
        FixDroppedOrPastedClvps();
    }
}
$_global_wpcm();
