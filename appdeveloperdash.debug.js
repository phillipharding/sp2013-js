function $_global_appdeveloperdash() {
    EnsureScript("SP.js", "undefined", DevDashboardPostRender);
    EnsureScript("init.js", "undefined", DevDashboardPostRender);
    (function() {
    ULSC18:
        ;
        var globalOverrideCtx = {};

        globalOverrideCtx.Templates = {};
        globalOverrideCtx.Templates.Fields = {
            'AppVersion': {
                'View': VersionColumnOverrideTemplate
            },
            'AppName': {
                'View': AppNameColumnOverrideTemplate
            }
        };
        globalOverrideCtx.OnPreRender = OnDevDashboardPreRender;
        globalOverrideCtx.OnPostRender = DevDashboardPostRender;
        SPClientTemplates.TemplateManager.RegisterTemplateOverrides(globalOverrideCtx);
    })();
    listCtx = null;
    appUninstallPending = 0;
    appNotificationId = null;
    uip = false;
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("appdeveloperdash.js");
    }
}
function ULSC18() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "appdeveloperdash.commentedjs";
    return o;
}
function VersionColumnOverrideTemplate(inCtx) {
    var listItem = inCtx.CurrentItem;
    var ctxId = listItem.ID;
    var ctxVersion = listItem.AppVersion;
    var versionDisplayStr = ctxVersion;
    var ret = [];

    ret.push("<div> ");
    ret.push("<span id='versionspan-ctx-" + ctxId + "'> ");
    ret.push(STSHtmlEncode(versionDisplayStr));
    ret.push("</span> ");
    ret.push("</div> ");
    return ret.join('');
}
function AppNameColumnOverrideTemplate(inCtx) {
    var listItem = inCtx.CurrentItem;
    var ctxId = listItem.ID;
    var ctxAppName = listItem.AppName;
    var ret = [];

    ret.push("<span id='appnamespan-ctx-" + ctxId + "' class='ms-floatLeft'> ");
    ret.push(STSHtmlEncode(ctxAppName));
    ret.push("</span> ");
    ret.push("<a href='#' class='ms-pivotControl-overflowDot ms-floatRight' style='margin: 0px 20px 0px 20px;' ctxid='" + ctxId + "' id='fbspan-ctx-" + ctxId + "' onclick='return SingleItemSelectInternal(event, false, GetAncestor(this, \"TR\"), false);'><img class=\"ms-ellipsis-icon\" src=\"" + GetThemedImageUrl("spcommon.png") + "\" alt=\"" + STSHtmlEncode(Strings.STS.L_OpenMenu) + "\" /></a> ");
    return ret.join('');
}
var listCtx;

function getListContext() {
ULSC18:
    ;
    var k;

    for (k in g_ctxDict) {
        if (g_ctxDict[k].listTemplate.toString() == "1230") {
            listCtx = g_ctxDict[k];
            break;
        }
    }
}
function OnDevDashboardPreRender(inCtx) {
}
function DevDashboardPostRender() {
ULSC18:
    ;
    getListContext();
    if (listCtx == null || listCtx.listTemplate == null || listCtx.listTemplate.toString() != "1230") {
        return;
    }
    GetInstalledApps();
}
function RegisterDashboardCallout(elementid) {
ULSC18:
    ;
    if (typeof CalloutManager !== "object" || typeof Callout !== "function" || typeof CalloutAction !== "function")
        return;
    var e = document.getElementById(elementid);
    var currItemCtxId = e.getAttribute("ctxid");
    var currItem = GetDraftAppListItemByID(listCtx, currItemCtxId);
    var callbackItemProductId = currItem.ProductId;
    var callbackItemVersion = currItem.AppVersion;
    var callbackItemAppName = currItem.AppName;
    var calloutContent = [];

    calloutContent.push("<div id='fbcontainer-" + currItemCtxId + "' style='position:relative; max-height:200px; max-width:600px; overflow:none;'>");
    calloutContent.push("<div id='url-" + currItemCtxId + "' class='ms-metadata js-callout-subtitle' style='width: 300px; margin-bottom: 30px;' dir='ltr'></div>");
    if (currItem.InError) {
        calloutContent.push("<div class='ms-metadata' style='padding-bottom: 30px;'>" + Strings.STS.L_DevSite_AppErrorMsg + "</div>");
    }
    calloutContent.push("<table><tr><td width='300px'>");
    calloutContent.push("<div id='detaildev-" + currItemCtxId + "' style='position:relative; max-height:200px; max-width:300px; overflow:none;'>");
    calloutContent.push("<table>");
    calloutContent.push("<tr><td>" + String.format(Strings.STS.L_AppCreatedByText, "<a href='javascript:return;'>" + currItem.Author[0].title + "</a>") + "</td></tr>");
    calloutContent.push("<tr><td>" + currItem.Created + "<br></td></tr>");
    calloutContent.push("</table>");
    calloutContent.push("</div>");
    calloutContent.push("</td></tr></table>");
    calloutContent.push("</div>");
    var fbCallout = CalloutManager.createNew({
        launchPoint: e,
        openOptions: {
            closeCalloutOnBlur: true,
            event: "click",
            showCloseButton: true
        },
        content: calloutContent.join(''),
        title: currItem.AppName,
        ID: currItemCtxId,
        contentWidth: 370,
        onOpeningCallback: function() {
        ULSC18:
            ;
            MyAppsCalloutOpening(currItemCtxId, currItem.AppLaunchUrl);
        }
    });

    fbCallout.addAction(new CalloutAction({
        text: Strings.STS.L_MonitorAppActionText,
        onClickCallback: function(calloutActionClickEvent, calloutAction) {
            ViewAppMonitoringDetails(calloutActionClickEvent, calloutAction, currItem);
        },
        isEnabledCallback: function() {
        ULSC18:
            ;
            return currItem.AppLaunchUrl != null || currItem.InError;
        }
    }));
    fbCallout.addAction(new CalloutAction({
        text: Strings.STS.L_ManageAppPerms_Text,
        onClickCallback: function(calloutActionClickEvent, calloutAction) {
            ManageAppPermissions(calloutActionClickEvent, calloutAction, currItem);
        },
        isEnabledCallback: function() {
        ULSC18:
            ;
            return currItem.AppLaunchUrl != null;
        }
    }));
    fbCallout.addAction(new CalloutAction({
        text: Strings.STS.L_UserFieldRemoveText,
        onClickCallback: function(calloutActionClickEvent, calloutAction) {
            DeleteAndUninstall();
        }
    }));
    (m$(e)).addClass("js-fb-calloutTargetInitialized");
}
function MyAppsCalloutOpening(currItemCtxId, appLaunchUrl) {
    var urlContainer = document.getElementById("url-" + currItemCtxId);

    MyAppsTruncateUrl(urlContainer, appLaunchUrl, 300);
}
function MyAppsTruncateUrl(urlContainer, urlToTruncate, width) {
    if (urlToTruncate == null || urlToTruncate.length == 0)
        return;
    var spanElement = document.createElement('span');

    spanElement.style.whiteSpace = 'nowrap';
    urlContainer.appendChild(spanElement);
    var truncatedUrl = displayTruncatedUrl(spanElement, new URI(urlToTruncate), width, false);

    urlContainer.removeChild(spanElement);
    var urlElement = document.createElement('input');

    urlElement.value = truncatedUrl;
    urlElement.title = urlToTruncate;
    urlElement.className = 'js-callout-location';
    urlContainer.appendChild(urlElement);
    var selectTextRange = function(elt) {
        if (elt != null) {
            elt.focus();
            elt.select();
        }
    };

    (m$(urlElement)).click(function(evt) {
        urlElement.value = urlToTruncate;
        urlElement.title = '';
        selectTextRange(urlElement);
        cancelDefault(evt);
        AttachEvent('mousedown', revertToTruncatedUrl, document);
        return false;
    });
    var revertToTruncatedUrl = function(evt) {
        if (evt.target !== urlElement) {
            urlElement.value = truncatedUrl;
            urlElement.title = urlToTruncate;
        }
        DetachEvent('mousedown', revertToTruncatedUrl, document);
    };
}
function ViewAppMonitoringDetails(calloutActionClickEvent, calloutAction, currItem) {
    var clientContext = SP.ClientContext.get_current();
    var parentWeb = clientContext.get_web();
    var parentId = currItem.AppParentWebId;
    var site = clientContext.get_site();

    parentWeb = site.openWebById(parentId);
    clientContext.load(parentWeb);
    clientContext.executeQueryAsync(function() {
    ULSC18:
        ;
        DoActionOnSuccess('MonitorApp', parentWeb, null, currItem.AppInstanceId);
    }, function() {
    ULSC18:
        ;
        OnCSOMQueryFailed();
    });
}
function ManageAppPermissions(calloutActionClickEvent, calloutAction, currItem) {
    var clientContext = SP.ClientContext.get_current();
    var devSiteWeb = clientContext.get_web();

    clientContext.load(devSiteWeb);
    var contextInfo = new Array(2);

    contextInfo[0] = devSiteWeb;
    contextInfo[1] = currItem.AppInstanceId;
    var parentId = currItem.AppParentWebId;
    var site = clientContext.get_site();
    var parentWeb = site.openWebById(parentId);

    clientContext.load(parentWeb);
    clientContext.executeQueryAsync(function() {
    ULSC18:
        ;
        DoActionOnSuccess('ManagePerms', parentWeb, null, contextInfo);
    }, function() {
    ULSC18:
        ;
        OnCSOMQueryFailed();
    });
}
function GetDraftAppListItemByID(inCtx, liid) {
    for (var i = 0; i < inCtx.ListData.Row.length; i++) {
        if (inCtx.ListData.Row[i].ID === liid) {
            return inCtx.ListData.Row[i];
        }
    }
    return null;
}
function ExecuteButtonClick(actionType) {
ULSC18:
    ;
    if (actionType == "AppDeploy" || actionType == "UpgradeTest") {
        var pageUrl = "/_layouts/15/deploydeveloperapp.aspx";
        var webUrl = ConstructAbsUrl((SP.ClientContext.get_current()).get_url());

        pageUrl = webUrl + pageUrl;
        if (actionType == "UpgradeTest") {
            pageUrl += "?mode=1";
        }
        ShowPopupDialog(pageUrl);
    }
    else if (actionType == "AppDelete") {
        if (confirm(Strings.STS.L_STSDelConfirm_Text)) {
            DeleteAndUninstall();
        }
    }
    else {
        var items = SP.ListOperation.Selection.getSelectedItems();
        var currItem = GetDraftAppListItemByID(listCtx, items[0].id);

        if (actionType == "AppLaunch") {
            window.location.href = currItem.AppLaunchUrl;
        }
        var clientContext = SP.ClientContext.get_current();
        var parentWeb = clientContext.get_web();
        var parentId = currItem.AppParentWebId;
        var site = clientContext.get_site();

        parentWeb = site.openWebById(parentId);
        clientContext.load(parentWeb);
        clientContext.executeQueryAsync(function() {
        ULSC18:
            ;
            DoActionOnSuccess(actionType, parentWeb, currItem, null);
        }, function() {
        ULSC18:
            ;
            OnCSOMQueryFailed();
        });
    }
}
var appUninstallPending;
var appNotificationId;
var uip;

function RefreshWhenDone() {
ULSC18:
    ;
    if (appUninstallPending <= 0) {
        removeNotification(appNotificationId);
        window.location.reload(true);
    }
}
function DeleteAndUninstall() {
ULSC18:
    ;
    if (listCtx != null && !uip) {
        uip = true;
        var clvp = listCtx.clvp;
        var selectedItems = GetSelectedItemsDict(FixupCtx(listCtx));
        var itemsDeleted = false;
        var instanceIds = new Array(0);

        for (var k in selectedItems) {
            var item = selectedItems[k];
            var listItem = GetDraftAppListItemByID(listCtx, item.id);

            if (listItem.AppInstanceId != null)
                instanceIds.push(new SP.Guid(listItem.AppInstanceId));
            appUninstallPending = appUninstallPending + 1;
            clvp.DeleteItemCore(String(item.id));
            itemsDeleted = true;
        }
        UninstallApp(instanceIds);
        clvp.pendingItems = [];
        if (itemsDeleted) {
            var noti = Strings.STS.L_Notification_Delete;

            appNotificationId = addNotification(noti, true);
            clvp.cctx.executeQueryAsync(function() {
            ULSC18:
                ;
                if (typeof clvp.rgehs != "undefined") {
                    var seriousError = false;

                    for (var x = 0; x < clvp.rgehs.length; x++) {
                        if (clvp.rgehs[x].get_hasException()) {
                            if (clvp.rgehs[x].get_serverErrorCode() == -2147024809)
                                continue;
                            else
                                seriousError = true;
                        }
                    }
                    if (seriousError) {
                        if (clvp.rgehs.length == 1 && clvp.rgehs[0].get_serverErrorCode() == SP.ClientErrorCodes.redirect) {
                            GoToPage(clvp.rgehs[0].get_serverErrorValue());
                            return;
                        }
                        clvp.ShowErrorDialog(RefreshWhenDone);
                    }
                    else {
                        RefreshWhenDone();
                    }
                }
                else {
                    RefreshWhenDone();
                }
            }, function() {
            ULSC18:
                ;
                RefreshWhenDone();
            });
        }
    }
}
function UninstallApp(instanceIds) {
    var clientContext = SP.ClientContext.get_current();
    var site = clientContext.get_site();

    clientContext.load(site);
    var apps = SP.AppCatalog.getDeveloperSiteAppInstancesByIds(clientContext, site, instanceIds);

    clientContext.load(apps);
    var UninstallDataFetched = function(appData) {
        var appHash = new Object();
        var enumerator = appData.getEnumerator();

        while (enumerator.moveNext()) {
            var appInstance = enumerator.get_current();

            if (appInstance != null) {
                appHash[appInstance.get_id()] = appInstance;
            }
        }
        for (var k in instanceIds) {
            var instance = appHash[instanceIds[k]];

            if (instance == null || instance.uninstall == null) {
                appUninstallPending = appUninstallPending - 1;
                RefreshWhenDone();
                return;
            }
            instance.uninstall();
            var req = new Object();

            req.ctx = SP.ClientContext.get_current();
            req.ctx.load(instance);
            var UninstallReturned = function() {
            ULSC18:
                ;
                appUninstallPending = appUninstallPending - 1;
                RefreshWhenDone();
            };

            req.ctx.executeQueryAsync(Function.createDelegate(this, UninstallReturned), Function.createDelegate(this, UninstallReturned));
        }
    };

    clientContext.executeQueryAsync(function() {
    ULSC18:
        ;
        UninstallDataFetched(apps);
    });
}
function DoActionOnSuccess(actionType, parentWeb, currItem, param) {
    var parentWebUrl = parentWeb.get_serverRelativeUrl();

    parentWebUrl = ConstructAbsUrl(parentWebUrl);
    if (actionType == "AppShare") {
        parentWebUrl = parentWebUrl + "/_layouts/15/aclinv.aspx";
        ShowPopupDialog(parentWebUrl);
    }
    else if (actionType == "MonitorApp") {
        if (param != undefined) {
            var monitoringUrl = parentWebUrl + "/_layouts/15/appmonitoringdetails.aspx" + "?AppInstanceId=" + param;

            window.location.href = monitoringUrl;
        }
    }
    else if (actionType == "ManagePerms") {
        if (param != undefined) {
            var devSiteUrl = param[0].get_serverRelativeUrl();

            devSiteUrl = ConstructAbsUrl(devSiteUrl);
            var redirectUrl = encodeURIComponent(devSiteUrl);
            var appInstanceId = param[1];
            var grantpermsUrl = parentWebUrl + "/_layouts/15/appinv.aspx" + "?AppInstanceId=" + appInstanceId + "&ret=" + redirectUrl;

            window.location.href = grantpermsUrl;
        }
    }
}
function parseVersionString(versionStr) {
    if (versionStr == undefined || versionStr == "") {
        return null;
    }
    var strArray = versionStr.split('.');
    var maj = parseInt(strArray[0]);
    var min = parseInt(strArray[1]);
    var majrev = parseInt(strArray[2]);
    var minrev = parseInt(strArray[3]);

    return {
        major: maj,
        minor: min,
        majorrev: majrev,
        minorrev: minrev
    };
}
function ConstructAbsUrl(strUrl) {
    if (strUrl.length > 0 && "/" == strUrl.substr(0, 1)) {
        strUrl = window.location.protocol + "//" + window.location.host + strUrl;
    }
    return strUrl.endsWith('/') ? strUrl.substr(0, strUrl.length - 1) : strUrl;
}
function GetInstalledApps() {
ULSC18:
    ;
    var clientContext = SP.ClientContext.get_current();
    var maxAppInstanceRequestCount = 100;
    var instanceIds = new Array(0);
    var len = listCtx.ListData.Row.length;

    for (var i = 0; i < len; i++) {
        var item = listCtx.ListData.Row[i];

        if (item != undefined) {
            var instanceId = item.AppInstanceId;

            if (instanceId != undefined) {
                instanceIds.push(instanceId);
            }
        }
        if (instanceIds.length >= maxAppInstanceRequestCount) {
            break;
        }
    }
    var site = clientContext.get_site();

    clientContext.load(site);
    var apps = SP.AppCatalog.getDeveloperSiteAppInstancesByIds(clientContext, site, instanceIds);

    clientContext.load(apps);
    clientContext.executeQueryAsync(function() {
    ULSC18:
        ;
        onAppsReturned(apps);
    }, function() {
    ULSC18:
        ;
        OnCSOMQueryFailed();
    });
    return false;
}
function onAppsReturned(apps) {
    if (apps == undefined)
        return;
    var enumerator = apps.getEnumerator();
    var appStatusTable = new Object();

    while (enumerator.moveNext()) {
        var appInstance = enumerator.get_current();
        var instanceObj = new Object();

        instanceObj.Status = appInstance.get_status();
        ;
        var appFullUrl = null;

        if (instanceObj.Status == 5) {
            var parentWebUrl = null;
            var appWebUrl = appInstance.get_appWebFullUrl();

            if (appWebUrl == null || appWebUrl == "") {
                parentWebUrl = SP.PageContextInfo.get_webAbsoluteUrl();
            }
            else {
                var appWebUri = new URI(appWebUrl);
                var appWebUrlWithoutHost = appWebUri.getPath();

                parentWebUrl = window.location.protocol + "//" + window.location.host + appWebUrlWithoutHost.substring(0, appWebUrlWithoutHost.lastIndexOf('/'));
            }
            var pageUrl = [];

            pageUrl.push(parentWebUrl);
            pageUrl.push("/_layouts/15/appredirect.aspx");
            pageUrl.push("?instance_id=");
            pageUrl.push(escapeProperly((appInstance.get_id()).toString()));
            appFullUrl = pageUrl.join('');
        }
        instanceObj.LaunchUrl = appFullUrl;
        instanceObj.InError = instanceObj.Status == 9 || appInstance.get_inError();
        appStatusTable[appInstance.get_id()] = instanceObj;
    }
    SetRowData(appStatusTable);
}
function GetAppStatusString(appStatus) {
    var appStatusString = '';

    switch (appStatus) {
    case 0:
        appStatusString = Strings.STS.L_AppInvalidStatus;
        break;
    case 1:
        appStatusString = Strings.STS.L_AppInstalling;
        break;
    case 3:
        appStatusString = Strings.STS.L_AppRegistering;
        break;
    case 4:
        appStatusString = Strings.STS.L_AppUninstalling;
        break;
    case 7:
        appStatusString = Strings.STS.L_AppCanceling;
        break;
    case 8:
        appStatusString = Strings.STS.L_AppUpgrading;
        break;
    case 10:
        appStatusString = Strings.STS.L_AppUpgradeCanceling;
        break;
    default:
        appStatusString = '';
        break;
    }
    return appStatusString;
}
function SetRowData(appStatusTable) {
    var len = listCtx.ListData.Row.length;

    ExecuteOrDelayUntilScriptLoaded(function() {
    ULSC18:
        ;
        if (WSAEnabled()) {
            var wsa = GetWSA();

            if (wsa != null)
                wsa.addToAverage(10434, len);
        }
    }, "sp.core.js");
    for (var index = 0; index < len; index++) {
        var item = listCtx.ListData.Row[index];
        var tempItemId = item.ID;
        var itemStatus = appStatusTable[new SP.Guid(item.AppInstanceId)];

        if (itemStatus != undefined) {
            item.AppLaunchUrl = itemStatus.LaunchUrl;
            item.AppStatus = itemStatus.Status;
            item.InError = itemStatus.InError;
        }
        var versionStr = item.AppVersion;
        var versionElement = document.getElementById('versionspan-ctx-' + tempItemId);
        var appStatusString = GetAppStatusString(item.AppStatus);

        if (appStatusString != null && appStatusString != '') {
            versionStr += "( " + appStatusString + " )";
        }
        versionElement.innerHTML = versionStr;
        var appNameStr = item.AppName;
        var appNameElement = document.getElementById('appnamespan-ctx-' + tempItemId);
        var spanNameContent = [];

        if (item.AppLaunchUrl != undefined && item.AppLaunchUrl != "" && item.AppInstanceId != undefined) {
            spanNameContent.push("<a href='" + STSHtmlEncode(item.AppLaunchUrl) + "' name='applink'>");
            spanNameContent.push(appNameStr);
            spanNameContent.push("</a>");
        }
        else {
            spanNameContent.push(appNameStr);
        }
        spanNameContent.push("<div id='appinstancectx-" + tempItemId + "' style='display:none'> ");
        spanNameContent.push(item.AppInstanceId);
        spanNameContent.push("</div> ");
        appNameElement.innerHTML = spanNameContent.join("");
        var calloutTargetElement = document.getElementById('fbspan-ctx-' + tempItemId);

        if (((m$(calloutTargetElement)).not(".js-fb-calloutTargetInitialized")).length == 1) {
            RegisterDashboardCallout(calloutTargetElement.id);
        }
    }
}
function OnCSOMQueryFailed() {
ULSC18:
    ;
}
$_global_appdeveloperdash();
