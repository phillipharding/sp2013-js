function $_global_siteupgrade() {
    ;
    if (typeof Sys != "undefined" && Sys != null && Sys.Application != null) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("siteupgrade.js");
    }
}
function ULSPIq() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "siteupgrade.commentedjs";
    return o;
}
function $dg(x) {
ULSPIq:
    ;
    if (!(x in window))
        window[x] = undefined;
}
function SiteUpgrade_CreateEvalSite() {
ULSPIq:
    ;
    ShowPopupDialog('evaluatesiteupgrade.aspx');
}
function SiteUpgrade_ConfirmSiteUpgrade() {
ULSPIq:
    ;
    ShowPopupDialogWithCallback('confirmsiteupgrade.aspx', SiteUpgrade_StartUpgrade);
}
function SiteUpgrade_StartUpgrade(dialogResult, returnValue) {
ULSPIq:
    ;
    if (dialogResult == 1) {
        document.forms[0].submit();
    }
}
function SiteUpgrade_Demo() {
ULSPIq:
    ;
    ShowPopupDialog('evaluatesiteupgrade.aspx');
}
$_global_siteupgrade();
