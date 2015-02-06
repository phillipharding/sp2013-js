Type.registerNamespace('SP.UI.AllApps');
SP.UI.AllApps.SPAppUIState = function() {
};
SP.UI.AllApps.SPAppUIState.prototype = {
    uninstalled: 0,
    installedOk: 1,
    installedFailedUpdateTryAgain: 2,
    installedNormalUpdateAvailable: 3,
    installedProblemWithUpgradeTryAgain: 4,
    updateManuallyCancelledShowSameAsNormalUpdateAvailable: 5,
    userCancelledUpdateRollingBack: 6,
    initializedMiddownload: 7,
    initializedDidntInstallRemoveOrInstallShouldWork: 8,
    initializedInstallFailedCanRetry: 9,
    installingSomeTroubleCanRetryMightNeedAdmin: 10,
    upgradeStuckCanRetry: 11,
    upgradeStuckOMEXWantsUnstuckNowCallAdmin: 12,
    initializedDownloadInvalidatedUninstallTryAgain: 13,
    somethingWentWrongThenWeBrokeUninstallAndAreStuck: 14,
    systemDecidedToRemoveAppEverythingWorking: 15,
    uninstallingInError: 16,
    userTriedToRemoveButWeAreStuckOnUninstall: 17,
    uninstallingInErrorOMEXSomethingWrongDoSameAsUpdateForOMEX: 18,
    installedProblemWithUpgradeTryAgainImmediately: 19,
    updateHadAnIssueWeAreRollingBack: 20,
    installedFlagged: 21,
    installedWithdrawnUpdateAvailable: 22,
    installedWithdrawn: 23,
    installedFlaggedUpdateAvailable: 24,
    installedUpdateImmediatelyUpdateAvailable: 25,
    installedRevoked: 26,
    installedRevokedUpdateAvailable: 27,
    somethingWentWrongKillbitting: 28,
    weAreMidKillingAnApp: 29,
    disabled: 30,
    installedRemoved: 31,
    installedRemovedUpdateAvailable: 32,
    installingInProgress: 33,
    registeringInstall: 34,
    uninstallingNormal: 35,
    userDecidedToRemoveAppEverythingWorking: 36,
    notPossible: 37,
    upgradingEverythingGood: 38,
    registeringUpdate: 39,
    updateDownloadInProgress: 40,
    updateDownloadFailed: 41,
    secretRolling: 42,
    secretRollingInError: 43
};
SP.UI.AllApps.SPAppUIState.registerEnum('SP.UI.AllApps.SPAppUIState', false);
SP.UI.AllApps.CommandRecord = function SP_UI_AllApps_CommandRecord() {
};
SP.UI.AllApps.CommandRecord.prototype = {
    command: null,
    formdigest: null,
    sequence: 0
};
SP.UI.AllApps.CallRecord = function SP_UI_AllApps_CallRecord() {
};
SP.UI.AllApps.CallRecord.prototype = {
    commandRecord: null,
    onCommandCompleted: null,
    sequence: 0
};
SP.UI.AllApps.CommandProxy = function SP_UI_AllApps_CommandProxy(serverEndPoint) {
    this.$$d_$4_0 = Function.createDelegate(this, this.$4_0);
    this.$1_0 = -1;
    this.$2_0 = serverEndPoint;
    this.$0_0 = {};
};
SP.UI.AllApps.CommandProxy.prototype = {
    $2_0: null,
    $3_0: 0,
    $0_0: null,
    getNextSequenceNumber: function SP_UI_AllApps_CommandProxy$getNextSequenceNumber() {
        return ++this.$1_0;
    },
    executeCommand: function SP_UI_AllApps_CommandProxy$executeCommand(commandRecord, onCommandCompleted) {
        if (this.$3_0 > 0) {
            return -1;
        }
        commandRecord.sequence = this.getNextSequenceNumber();
        var $v_0 = new SP.UI.AllApps.CallRecord();

        $v_0.commandRecord = commandRecord;
        $v_0.sequence = commandRecord.sequence;
        $v_0.onCommandCompleted = onCommandCompleted;
        this.$0_0[commandRecord.sequence.toString()] = $v_0;
        var $v_1 = new Sys.Net.WebRequest();

        $v_1.set_httpVerb('POST');
        $v_1.set_url(this.$2_0);
        $v_1.set_userContext($v_0);
        $v_1.set_body(Sys.Serialization.JavaScriptSerializer.serialize(commandRecord));
        $v_1.add_completed(this.$$d_$4_0);
        $v_1.invoke();
        return commandRecord.sequence;
    },
    $4_0: function SP_UI_AllApps_CommandProxy$$4_0($p0) {
        var $v_0 = ($p0.get_webRequest()).get_userContext();
        var $v_1 = null;

        try {
            $v_1 = $p0.get_object();
        }
        catch ($$e_3) { }
        $v_0.onCommandCompleted($v_0.commandRecord, $v_1);
        this.$0_0[$v_0.commandRecord.sequence.toString()] = null;
    }
};
SP.UI.AllApps.CommandRecord.registerClass('SP.UI.AllApps.CommandRecord');
SP.UI.AllApps.CallRecord.registerClass('SP.UI.AllApps.CallRecord');
SP.UI.AllApps.CommandProxy.registerClass('SP.UI.AllApps.CommandProxy');
function sp_ui_allapps_initialize() {
}
;
sp_ui_allapps_initialize();
function GetAppLaunchFunction(appId) {
    var privateAppId = appId;

    return function() {
        LaunchAppByClick(privateAppId);
        CancelDefaultBehavior();
        return false;
    };
}
function getShowCalloutIconFunction(appId) {
    var privateAppId = appId;

    return function() {
        showCalloutIcon(privateAppId);
    };
}
function getHideCalloutIconFunction(appId) {
    var privateAppId = appId;

    return function() {
        hideCalloutIcon(privateAppId);
    };
}
function LaunchAppByClick(id) {
    var app = appData[id];

    if (app["isTenantApp"]) {
        LaunchAppFromPage(null, app["oauthId"], app["launchUrl"], null, true);
    }
    else {
        LaunchAppFromPage(id, app["oauthId"], app["launchUrl"], null, false);
    }
}
function LaunchAppFromPage(appInstanceId, appOAuthId, launchUrl, dialogOptions, isTenantApp) {
    LaunchApp(appInstanceId, appOAuthId, launchUrl, dialogOptions, isTenantApp);
    CancelDefaultBehavior();
    return false;
}
function CancelDefaultBehavior() {
    if (typeof window.event != "undefined" && window.event != null) {
        cancelDefault(window.event);
    }
}
function closeAndClearCallout(appId) {
    var app = appData[appId];

    if (typeof app.callout != "undefined" && app.callout != null) {
        app.callout.close();
    }
}
function handleManageAppPermissions(app) {
    STSNavigate(getManagePermissionsUrl(app));
}
function handleDeployTSApp(app) {
    var deployTSAppPage = strWebLayoutsFolder + "DeployTSApp.aspx?AppId=" + escapeProperly(app.id) + "&AppTitle=" + escapeProperly(app.title) + "&Source=" + escapeProperly(strWebLayoutsFolder) + "viewlsts.aspx";

    STSNavigate(deployTSAppPage);
}
function handleListSettings(appId) {
    var settingsPage = strWebLayoutsFolder + "listedit.aspx?List=" + escapeProperly(appId);

    STSNavigate(settingsPage);
}
function handleAppSettings(appId) {
    var app = appData[appId];

    LaunchAppFromPage(appId, app["oauthId"], app["appSettingsUrl"], null);
}
function handleHelp(helpUrl) {
    window.location = helpUrl;
}
function handleViewInStorefront(appId) {
    var appSource = appData[appId].appSource;
    var assetId = appData[appId].assetId;
    var productId = appData[appId].productId;
    var contentMarket = appData[appId].contentMarket;
    var id = assetId == null || assetId == "" ? productId : assetId;

    if (id == null) {
        return;
    }
    if (appSource == 0) {
        appSource = 2;
    }
    else if (appSource == 1) {
        appSource = 0;
    }
    else if (appSource == 2) {
        appSource = 1;
    }
    var storeFrontPage = strWebLayoutsFolder + "storefront.aspx?Source=" + escapeProperly(strWebLayoutsFolder) + "viewlsts.aspx#vw=AppDetailsView,app=" + escapeProperly(id) + ",clg=" + appSource;

    if (contentMarket != null && contentMarket.length > 0)
        storeFrontPage += ",cm=" + escapeProperly(contentMarket);
    STSNavigate(storeFrontPage);
}
function handleManageSeats(productId) {
    STSNavigate("specificapplicensemanagement.aspx?ProductId=" + escapeProperly(productId));
}
function handleMonitorApp(appId) {
    var appDetailsPage = strWebLayoutsFolder + "AppMonitoringDetails.aspx?AppInstanceId=" + escapeProperly(appId);

    STSNavigate(appDetailsPage);
}
var req = new Object();

function handleRetryUninstallApp(appId) {
    closeAndClearCallout(appId);
    handleUninstallAppCore(appId, true, false);
}
function handleUninstallApp(appId) {
    closeAndClearCallout(appId);
    var app = appData[appId];

    handleUninstallAppCore(appId, app.retryForRemove, true);
}
function handleUninstallAppCore(appId, retry, prompt) {
    closeAndClearCallout(appId);
    var app = appData[appId];
    var title = app.title;

    if (prompt) {
        if (!confirm(appUninstallConfirm.replace("{0}", title))) {
            app.callout.close();
            return;
        }
    }
    setAppRowMessage(appId, strUninstalling);
    callMethodOnAppInstance(appId, retry ? "retryAllJobs" : "uninstall");
}
function callMethodOnAppInstance(appId, method) {
    var app = appData[appId];

    req.ctx = SP.ClientContext.get_current();
    req.apps = SP.AppCatalog.getAppInstances(req.ctx, req.ctx.get_web());
    req.ctx.load(req.apps);
    var onAppsReturned = function(sender, args) {
        var appHash = new Object();
        var enumerator = req.apps.getEnumerator();

        while (enumerator.moveNext()) {
            var appInstance = enumerator.get_current();

            appHash[appInstance.get_id()] = appInstance;
        }
        if (method === "retryAllJobs") {
            appHash[appId].retryAllJobs();
        }
        else if (method === "uninstall") {
            appHash[appId].uninstall();
        }
        else if (method === "install") {
            appHash[appId].install();
        }
        else if (method === "cancelAllJobs") {
            appHash[appId].cancelAllJobs();
        }
        req.ctx.load(appHash[appId]);
        var onActionReturned = function() {
            app.pending = true;
            ensureAppUpdating(appId);
        };

        req.ctx.executeQueryAsync(Function.createDelegate(this, onActionReturned), Function.createDelegate(this, onQueryFailed));
    };
    var onQueryFailed = function(sender, args) {
        setAppRowMessage(appId, strGeneralError);
    };

    req.ctx.executeQueryAsync(Function.createDelegate(this, onAppsReturned), Function.createDelegate(this, onQueryFailed));
    return false;
}
function removeAppRow(appId) {
    var tile = document.getElementById("apptile-" + appId);

    if (tile && tile.parentNode)
        tile.parentNode.removeChild(tile);
}
function setAppRowMessage(appId, message) {
    var status = document.getElementById("appstatus-" + appId);

    if (status) {
        status.className = status.className.replace("ms-error", "");
        status.innerHTML = message;
    }
}
function handleUninstallList(appId) {
    closeAndClearCallout(appId);
    req.ctx = SP.ClientContext.get_current();
    var lists = (req.ctx.get_web()).get_lists();
    var app = appData[appId];

    if (app.uninstallInProgress)
        return;
    var title = app.title;
    var list = lists.getById(appId);
    var onListDeleteReturned = function(sender, args) {
        removeAppRow(appId);
        app.uninstallInProgress = false;
    };
    var onQueryFailed = function(sender, args) {
        var msg = listUninstallFailed;
        var beginAnchor = "<a onclick=\"javascript:handleListSettings('" + STSHtmlEncode(appId) + "');\">";

        msg = msg.replace("{0}", beginAnchor);
        msg = msg.replace("{1}", "</a>");
        setAppRowMessage(appId, msg);
        if (g_debugFile)
            alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
        app.uninstallInProgress = false;
    };
    var message = g_recycleBinEnabled ? appUninstallConfirmRecycle : appUninstallConfirm;

    if (confirm(message.replace("{0}", title))) {
        list.recycle();
    }
    else {
        app.callout.close();
        return;
    }
    app.uninstallInProgress = true;
    req.ctx.executeQueryAsync(Function.createDelegate(this, onListDeleteReturned), Function.createDelegate(this, onQueryFailed));
    app.callout.close();
    return false;
}
function handleUninstallFeature(appId) {
    closeAndClearCallout(appId);
    var app = appData[appId];

    if (app.uninstallInProgress)
        return;
    req.ctx = SP.ClientContext.get_current();
    var features = (req.ctx.get_web()).get_features();
    var title = app.title;
    var onFeatureRemoveReturned = function(sender, args) {
        removeAppRow(appId);
        app.uninstallInProgress = false;
    };
    var onQueryFailed = function(sender, args) {
        setAppRowMessage(appId, appUninstallFailed.replace("{0}", title));
        if (g_debugFile)
            alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
        app.uninstallInProgress = false;
    };

    if (confirm(appUninstallConfirm.replace("{0}", title))) {
        features.remove(appId);
    }
    else {
        app.callout.close();
        return;
    }
    app.uninstallInProgress = true;
    req.ctx.executeQueryAsync(Function.createDelegate(this, onFeatureRemoveReturned), Function.createDelegate(this, onQueryFailed));
    app.callout.close();
    return false;
}
function isVisible(evt, ctx) {
    return true;
}
function onOpening(callout) {
    var app = appData[callout.getID()];

    if (typeof app.callout.info != "undefined" || app.callout.waiting) {
        return;
    }
    app.callout.waiting = true;
    var command = new Object();

    command.command = "getcalloutinfo";
    command.appid = app.id;
    command.apptype = app.type;
    command.productid = app.productId;
    command.appsource = app.appSource;
    command.assetid = app.assetId;
    command.contentMarket = "";
    if (typeof app.contentMarket != "undefined" && app.contentMarket != null) {
        command.contentMarket = app.contentMarket;
    }
    command.isTenantApp = app.isTenantApp;
    app.gettingData = true;
    (getCommandProxy()).executeCommand(command, onCalloutInfoReturned);
}
function onCalloutInfoReturned(input, output) {
    var app = appData[input.appid];

    app.callout.info = output;
    var elmInner = document.createElement("div");

    elmInner.id = "calloutcontentInner-" + app.id;
    elmInner.className = "ms-vl-calloutContent";
    var eulaAnchor = "";

    if (output != null && output.eulaurl != null) {
        eulaAnchor = "<a id=\"terms-" + STSHtmlEncode(app.id) + "\" href=\"" + STSHtmlEncode(output.eulaurl) + "\" title=\"" + STSHtmlEncode(strAppTerms) + "\">" + STSHtmlEncode(strAppTerms) + "</a>";
    }
    var calloutContent = "";

    if (app.type == g_appTypeList) {
        calloutContent += "<div></div>";
    }
    else {
        calloutContent += "<div class=\"ms-metadata ms-vl-calloutversion\" id=\"calloutVersion-" + app.id + "\"></div>";
    }
    calloutContent += "<div class=\"ms-vl-calloutterms\" id=\"calloutTerms-" + app.id + "\">" + eulaAnchor + "</div>";
    calloutContent += "<div class=\"ms-vl-appdescription\" id=\"calloutDescription-" + app.id + "\"></div>";
    elmInner.innerHTML = calloutContent;
    var publisherAndVersion = "";

    if (output != null && output.publisher != null && output.publisher.length > 0) {
        publisherAndVersion = strVersionAndPublisher.replace("{0}", app.version);
        publisherAndVersion = publisherAndVersion.replace("{1}", output.publisher);
    }
    else {
        publisherAndVersion = strVersion.replace("{0}", app.version);
        ;
    }
    if (app.type != g_appTypeList) {
        setInnerText(elmInner.childNodes[0], publisherAndVersion);
    }
    if (output != null && output.description != null)
        setInnerText(elmInner.childNodes[2], output.description);
    app.calloutContent = elmInner;
    setCalloutContent(app.id, elmInner);
    if (output == null) {
        app.callout.waiting = false;
        return;
    }
    var actions = Array();

    if (app.type == g_appTypeApp) {
        if (output.removeenabled && !output.isanonymous && output.putremovefirst) {
            addRemoveAction(actions, app);
        }
        if (output.supporturl != null) {
            actions.push({
                text: strHelp,
                onClickCallback: function() {
                    handleHelp(output.supporturl);
                }
            });
        }
        if (!output.isanonymous) {
            if (!app.isTenantApp) {
                if (output != null && output.manageseatsenabled && app["appSource"] == g_appSourceMarketPlace) {
                    actions.push({
                        text: strManageLicenses,
                        onClickCallback: function() {
                            handleManageSeats(app.productId);
                        }
                    });
                }
            }
            if (output.appsettingsenabled && app.appSettingsUrl != null) {
                actions.push({
                    text: strSettings,
                    onClickCallback: function() {
                        handleAppSettings(app.id);
                    }
                });
            }
            if (output.viewinmarketplaceenabled && (app["appSource"] == g_appSourceMarketPlace || app["appSource"] == g_appSourceCorpCatalog)) {
                actions.push({
                    text: strViewInStorefront,
                    onClickCallback: function() {
                        handleViewInStorefront(app.id);
                    }
                });
            }
            if (!app.isTenantApp) {
                if (g_isCorpSite && output.managedeploymentenabled) {
                    actions.push({
                        text: strDeploy,
                        onClickCallback: function() {
                            handleDeployTSApp(app);
                        }
                    });
                }
                if (output.monitoringenabled) {
                    actions.push({
                        text: strMonitorApp,
                        onClickCallback: function() {
                            handleMonitorApp(app.id);
                        }
                    });
                }
                if (output.managepermissionsenabled) {
                    actions.push({
                        text: strManagePermissions,
                        onClickCallback: function() {
                            handleManageAppPermissions(app);
                        }
                    });
                }
                if (output.removeenabled && !output.putremovefirst) {
                    addRemoveAction(actions, app);
                }
            }
        }
    }
    else if (app.type == g_appTypeList) {
        if (!output.isanonymous) {
            if (!(app.assetId == null && app.productId == null)) {
                actions.push({
                    text: strSettings,
                    onClickCallback: function() {
                        handleListSettings(app.id);
                    }
                });
            }
            if (output.viewinmarketplaceenabled) {
                actions.push({
                    text: strViewInStorefront,
                    onClickCallback: function() {
                        handleViewInStorefront(app.id);
                    }
                });
            }
            if (output.removeenabled) {
                actions.push({
                    text: strUninstall,
                    onClickCallback: function() {
                        handleUninstallList(app.id);
                    }
                });
            }
        }
    }
    else if (app.type == g_appTypeFeature) {
        if (output.removeenabled && !output.isanonymous) {
            actions.push({
                text: strUninstall,
                onClickCallback: function() {
                    handleUninstallFeature(app.id);
                }
            });
        }
    }
    var maxBodyActions = 4;

    for (var idxAction = 0; idxAction < maxBodyActions - 1 && idxAction < actions.length; idxAction++) {
        app.callout.addAction(new CalloutAction(actions[idxAction]));
    }
    if (actions.length == maxBodyActions) {
        app.callout.addAction(new CalloutAction(actions[maxBodyActions - 1]));
    }
    else if (actions.length > maxBodyActions) {
        var menuEntries = new Array();
        var calloutActionMenu = new CalloutActionMenu(app.callout.ID + '-actions');

        for (var idxAction = maxBodyActions - 1; idxAction < actions.length; idxAction++) {
            menuEntries.push(new CalloutActionMenuEntry(actions[idxAction].text, actions[idxAction].onClickCallback));
        }
        app.callout.addAction(new CalloutAction({
            menuEntries: menuEntries
        }));
    }
    app.callout.refreshActions();
    app.callout.waiting = false;
}
function addRemoveAction(actions, app) {
    if (app.retryForRemove) {
        actions.push({
            text: strUninstall,
            onClickCallback: function() {
                handleRetryUninstallApp(app.id);
            }
        });
    }
    else {
        actions.push({
            text: strUninstall,
            onClickCallback: function() {
                handleUninstallApp(app.id);
            }
        });
    }
}
function setInnerText(elem, text) {
    var doc = elem.ownerDocument;

    if (doc.createTextNode) {
        var textNode = doc.createTextNode(text);

        elem.innerHTML = '';
        elem.appendChild(textNode);
    }
    else {
        elem.innerText = text;
    }
}
function onOpened(callout) {
    var app = appData[callout.getID()];

    if (typeof app.calloutContent != "undefined" && app.calloutContent) {
        setCalloutContent(app.id, app.calloutContent);
    }
    var elmBottomBeak = document.getElementById(callout.getID() + "_callout-bottombeak");

    if (typeof elmBottomBeak != "undefined" && elmBottomBeak != null) {
        if (elmBottomBeak.className.indexOf("ms-vl-callout-beak") == -1) {
            elmBottomBeak.className += " ms-vl-callout-beak";
        }
    }
    var elm = document.getElementById("apptile-" + app["id"]);

    elm.className = elm.className.replace("ms-vl-apptilehover", "ms-vl-apptileselected");
}
function onClosed(callout) {
    if (typeof appData == "undefined" || appData == null) {
        return;
    }
    var app = appData[callout.getID()];

    if (typeof app == "undefined" || app == null) {
        return;
    }
    var elm = document.getElementById("apptile-" + app["id"]);

    elm.className = elm.className.replace("ms-vl-apptileselected", "ms-vl-apptilehover");
}
function setCalloutContent(appId, content) {
    var elm = document.getElementById("calloutcontent-" + appId);

    if (elm.hasChildNodes)
        elm.removeChild(elm.firstChild);
    elm.appendChild(content);
}
function initializeApps() {
    insertTenantApps();
    createCallouts();
    if (g_updatableApps.length > 0) {
        ensureRealTimeUpdatesStarted();
    }
}
function appSort(app1, app2) {
    return app1.title.localeCompare(app2.title);
}
var appHtmlTemplate = "<div class=\"ms-vl-appimage\">" + "<a class=\"ms-storefront-selectanchor ms-storefront-appiconspan\" tabindex=\"-1\" id=\"viewlist{APP_ID}-image\">" + "<img class=\"ms-storefront-appiconimg\" src=\"{APP_IMAGE}\"></img></a></div>" + "<div class=\"{APP_APPINFOSTYLE} ms-vl-pointer\" onClick=\"javascript:launchCallout(arguments[0],'{APP_ID}', this)\">" + "<div><div class=\"ms-vl-apptitleouter\"><a class=\"{APP_LAUNCHLINKSTYLE} ms-vl-apptitle\" id=\"viewlist{APP_ID}\" title=\"{APP_TITLE}\">" + "{APP_TITLE}</a></div>" + "<a class=\"ms-vl-calloutarrow ms-calloutLink ms-ellipsis-a ms-pivotControl-overflowDot\" id=\"{APP_ID}\"><img id=\"{APP_ID}-breadcrumb\" class=\"ms-ellipsis-icon\" alt=\"" + "<SharePoint:EncodedLiteral runat='server' text='<%$Resources:wss,calloutOpen%>' EncodeMethod='EcmaScriptStringLiteralEncode'/>" + "\" style=\"visibility:hidden;\"></img></a></div>" + "<div class=\"ms-metadata ms-vl-appstatus\" id=\"itemcount-{APP_ID}\"></div><div class=\"ms-metadata ms-vl-appstatus {APP_ERRORSTYLE}\" id=\"appstatus-{APP_ID}\" class=\"{APP_DISABLED}\">{APP_STATUS_TEXT}</div></div>";

function insertTenantApps() {
    var tenantAppData = GetTenantAppData();

    if (tenantAppData == null) {
        return;
    }
    var apps = tenantAppData["apps"];

    if (apps.length == 0)
        return;
    for (var iTA = 0; iTA < apps.length; iTA++) {
        var app = apps[iTA];

        appSortList.push(app);
    }
    var webProducts = null;

    if (apps.length > 0) {
        if (!webProducts)
            webProducts = new Object();
        for (var appId in appData) {
            var productId = appData[appId].productId;

            webProducts[productId] = true;
        }
    }
    appSortList.sort(appSort);
    var appsList = document.getElementById("applist");

    for (var iapps = appSortList.length - 1; iapps >= 0; iapps--) {
        var sortedApp = appSortList[iapps];

        if (sortedApp["isTenantApp"]) {
            if (webProducts[sortedApp["productId"]]) {
                var title = sortedApp["title"];

                if (typeof title == "undefined" || title == null) {
                    title = "";
                }
                sortedApp["title"] = strShared.replace("{0}", title);
            }
            sortedApp.statusMessage = "";
            var elmNew = constructAppElement(sortedApp);
            var elmNextAppDom = null;

            if (iapps < appSortList.length - 1) {
                var previousApp = appSortList[iapps + 1];
                var elmSibling = document.getElementById("apptile-" + previousApp["id"]);

                appsList.insertBefore(elmNew, elmSibling);
            }
            else {
                appsList.appendChild(elmNew);
            }
            var newApp = new Object();

            newApp.id = sortedApp["id"];
            newApp.title = sortedApp["title"];
            newApp.type = 2;
            newApp.description = null;
            newApp.launchUrl = sortedApp["launchUrl"];
            newApp.appSettingsUrl = null;
            newApp.productId = sortedApp["productId"];
            newApp.imageUrl = null;
            newApp.thumbnailUrl = sortedApp["thumbnailUrl"];
            newApp.oauthId = sortedApp["oauthId"];
            newApp.version = sortedApp["version"];
            newApp.appSource = sortedApp["appSource"];
            newApp.contentMarket = sortedApp["contentMarket"];
            newApp.assetId = sortedApp["assetId"];
            newApp.isTenantApp = true;
            newApp.recent = false;
            newApp.hasErrorStyle = false;
            newApp.retryForRemove = false;
            g_draggableContentIds.push("viewlist" + sortedApp["id"]);
            appData[sortedApp["id"]] = newApp;
        }
    }
}
function constructAppElement(app) {
    var html = appHtmlTemplate.replace(/{APP_ID}/g, STSHtmlEncode(app["id"]));

    html = html.replace(/{APP_TITLE}/g, STSHtmlEncode(app["title"]));
    var thumbnailUrl = app["thumbnailUrl"];

    if (thumbnailUrl == "null" || thumbnailUrl == null) {
        html = html.replace(/{APP_IMAGE}/g, STSHtmlEncode(strAppImage96x96x32Image));
    }
    else {
        var finalImageUrl = thumbnailUrl;

        html = html.replace(/{APP_IMAGE}/g, finalImageUrl);
    }
    var elmNew = document.createElement("div");

    elmNew.id = "apptile-" + app["id"];
    var elementStylePrefix = "";

    if (app.isTenantApp) {
        elementStylePrefix = "ms-vl-apptile-tenant";
        html = html.replace(/{APP_APPINFOSTYLE}/g, "ms-vl-appinfo-tenant");
    }
    else {
        elementStylePrefix = "ms-vl-apptile";
        html = html.replace(/{APP_APPINFOSTYLE}/g, "ms-vl-appinfo");
    }
    elmNew.className = elementStylePrefix + " ms-vl-apptilehover";
    var launchHref = null;
    var launchOnClick = null;

    if (app.disabled) {
        elmNew.className += " ms-vl-disabledapp";
        html = html.replace(/{APP_DISABLED}/g, "ms-vl-disabledapp");
        html = html.replace(/{APP_LAUNCHLINKSTYLE}/g, "ms-vl-disabledapp");
    }
    else {
        html = html.replace(/{APP_DISABLED}/g, "");
        html = html.replace(/{APP_LAUNCHLINKSTYLE}/g, "ms-draggable ms-listLink");
        launchOnClick = GetAppLaunchFunction(app["id"]);
        launchHref = strWebLayoutsFolder + "appredirect.aspx?client_id=" + escapeProperly(app["oauthId"]) + "&redirect_uri=" + escapeProperly(app["launchUrl"]);
    }
    if (app.hasErrorStyle) {
        html = html.replace(/{APP_ERRORSTYLE}/g, "ms-error");
    }
    else {
        html = html.replace(/{APP_ERRORSTYLE}/g, "");
    }
    html = html.replace(/{APP_STATUS_TEXT}/g, app.statusMessage);
    elmNew.innerHTML = html;
    var elmAppTileContainer = getAppTitleContainerElement(elmNew);

    if (!app.disabled) {
        elmNew.firstChild.firstChild.href = launchHref;
        elmAppTileContainer.firstChild.firstChild.href = launchHref;
        if (!g_isAppWeb) {
            elmNew.firstChild.firstChild.onclick = launchOnClick;
            elmAppTileContainer.firstChild.firstChild.onclick = launchOnClick;
        }
    }
    var tenantAppId = app['id'];

    elmNew.onmouseover = getShowCalloutIconFunction(tenantAppId);
    elmNew.onmouseout = getHideCalloutIconFunction(tenantAppId);
    elmAppTileContainer.childNodes[1].onfocus = elmNew.onmouseover;
    elmAppTileContainer.childNodes[1].onblur = elmNew.onmouseout;
    elmAppTileContainer.childNodes[1].firstChild.src = strEllipsisImage;
    if (app.recent) {
        var elmRecent = document.createElement("span");

        elmRecent.id = "recent-" + app.id;
        elmRecent.className = "ms-vl-recent ms-textSmall";
        setInnerText(elmRecent, strNew);
        elmAppTileContainer.parentNode.insertBefore(elmRecent, getAppInfoElement(elmNew));
    }
    return elmNew;
}
function getAppTitleContainerElement(elmAppTileElement) {
    return elmAppTileElement.childNodes[1].firstChild;
}
function getAppInfoElement(elmAppTileElement) {
    return elmAppTileElement.childNodes[1].childNodes[2];
}
function launchCallout(evt, id, elm) {
    var app = appData[id];

    if (typeof evt == "undefined") {
        evt = window.event;
    }
    var sourceElement = null;

    if (typeof evt.target != "undefined" && evt.target != null) {
        sourceElement = evt.target;
    }
    if (sourceElement == null && typeof evt.srcElement != "undefined" && evt.srcElement != null) {
        sourceElement = evt.srcElement;
    }
    if (sourceElement != null && (sourceElement.nodeName.toLowerCase() == "a" || sourceElement.id == "viewlist" + id || app.callout.isOpen() || sourceElement.className.indexOf("js-callout-closeButtonImage") != -1)) {
        return true;
    }
    function doLaunch() {
        app.callout.open();
        app.togglingInProgress = false;
    }
    if (!app.togglingInProgress) {
        window.setTimeout(doLaunch, 1);
        app.togglingInProgress = true;
    }
}
function createCallouts() {
    EnsureScriptFunc("callout.js", "Callout", function() {
        for (var appId in appData) {
            createCallout(appId);
        }
    });
}
function createCallout(id) {
    var app = appData[id];

    app.togglingInProgress = false;
    app.uninstallInProgress = false;
    var elmCallout = document.getElementById(app.id);
    var content = "<div class=\"ms-vl-calloutversion\" id=\"" + "calloutcontent-" + app.id + "\">" + strLoadingInfo + "</div>";

    if (numCalloutWidth == null || isNaN(numCalloutWidth)) {
        numCalloutWidth = 370;
    }
    app.callout = CalloutManager.createNew({
        title: STSHtmlEncode(app.title),
        ID: app.id,
        launchPoint: elmCallout,
        content: content,
        contentWidth: numCalloutWidth,
        onOpenedCallback: onOpened,
        onClosedCallback: onClosed,
        onOpeningCallback: onOpening
    });
    app.callout.waiting = false;
    app.callout.addAction(new CalloutAction({
        text: "",
        onClickCallback: function() {
        },
        isVisibleCallback: function() {
            return false;
        }
    }));
}
function handleRetryDownload(appId) {
    handleViewInStorefront(appId);
}
function handleRetryInstallApp(appId) {
    closeAndClearCallout(appId);
    setAppRowMessage(appId, strInstalling);
    callMethodOnAppInstance(appId, "install");
}
function handleRetryInstallAppFromError(appId) {
    closeAndClearCallout(appId);
    setAppRowMessage(appId, strInstalling);
    callMethodOnAppInstance(appId, "retryAllJobs");
}
function handleRetryUpdateAppFromError(appId) {
    closeAndClearCallout(appId);
    setAppRowMessage(appId, strUpdatingNonAdmin);
    callMethodOnAppInstance(appId, "retryAllJobs");
}
function handleRetryKillbitFromError(appId) {
    closeAndClearCallout(appId);
    setAppRowMessage(appId, strKillbitting);
    callMethodOnAppInstance(appId, "retryAllJobs");
}
function handleSeeAppProblemDetails(appId) {
    var app = appData[appId];
    var url = app.problemUrl;

    if (typeof app.problemUrl != "undefined" && app.problemUrl != null && app.problemUrl.length > 0) {
        window.location = url;
    }
}
function handleUpdateApp(appId) {
    handleViewInStorefront(appId);
}
function handleCancelUpdate(appId) {
    closeAndClearCallout(appId);
    cancelAllAppJobs(appId, strCancelAppUpdateConfirm, strCancellingAppUpdate);
}
function handleCancelInstall(appId) {
    closeAndClearCallout(appId);
    cancelAllAppJobs(appId, strCancelAppInstallConfirm, strCancellingAppInstall);
}
function cancelAllAppJobs(appId, confirmMessage, cancellingMessage) {
    var app = appData[appId];
    var title = app.title;

    if (!confirm(confirmMessage.replace("{0}", title))) {
        return;
    }
    setAppRowMessage(appId, cancellingMessage);
    callMethodOnAppInstance(appId, "cancelAllJobs");
}
function navigateToAddAnApp() {
    STSNavigate(addAnAppUrl);
}
function showCalloutIcon(id) {
    var elm = document.getElementById(id + "-breadcrumb");

    if (elm != null) {
        elm.style.visibility = "visible";
    }
}
function hideCalloutIcon(id) {
    var elm = document.getElementById(id + "-breadcrumb");

    if (elm != null) {
        elm.style.visibility = "hidden";
    }
}
var g_updateIntervalIndex = 0;
var g_updateIntervals = [5, 5, 10, 10, 10, 20, 20, 40, 80, 160, 320, 640, 1800, 3600, 7200, 14000];
var g_realtimeUpdatesOn = false;
var g_updatingInProgress = false;

function ensureRealTimeUpdatesStarted() {
    if (!g_realtimeUpdatesOn) {
        g_realtimeUpdatesOn = true;
        g_updateIntervalIndex = 0;
        window.setTimeout(processUpdates, 1);
    }
    else {
        g_updateIntervalIndex = 0;
    }
}
function stopRealTimeUpdates() {
    g_realtimeUpdatesOn = false;
}
function processUpdates() {
    if (!g_realtimeUpdatesOn) {
        g_updateIntervalIndex = 0;
        return;
    }
    queryForUpdates();
}
function onQueryForUpdatesReturned(input, output) {
    if (output != null) {
        var statusChanged = false;

        for (var i = 0; i < output.appinfo.length; i++) {
            var newInfo = output.appinfo[i];
            var oldInfo = appData[newInfo.id];

            if (newInfo.uistate != oldInfo.uistate || typeof oldInfo.pending != "undefined" && oldInfo.pending) {
                var appList = document.getElementById("applist");
                var oldAppElement = document.getElementById("apptile-" + newInfo.id);

                if (newInfo.uistate == null) {
                    appList.removeChild(oldAppElement);
                    delete appData[newInfo.id];
                }
                else {
                    appData[newInfo.id] = newInfo;
                    var newAppElement = constructAppElement(newInfo);

                    appList.insertBefore(newAppElement, oldAppElement);
                    appList.removeChild(oldAppElement);
                    createCallout(newInfo.id);
                }
                statusChanged = true;
                g_updateIntervalIndex = 0;
            }
        }
        if (statusChanged) {
            var tempArray = new Array();

            for (var i = 0; i < g_updatableApps.length; i++) {
                if (typeof appData[g_updatableApps[i]] != "undefined" && isAppUpdatable(appData[g_updatableApps[i]])) {
                    tempArray.push(g_updatableApps[i]);
                }
            }
            g_updatableApps = tempArray;
        }
    }
    registerForNextUpdate();
}
function registerForNextUpdate() {
    if (g_updatableApps.length > 0 && g_updateIntervalIndex + 1 <= g_updateIntervals.length) {
        ++g_updateIntervalIndex;
        window.setTimeout(processUpdates, g_updateIntervals[g_updateIntervalIndex] * 1000);
    }
    else {
        g_realtimeUpdatesOn = false;
    }
}
function queryForUpdates() {
    var command = new Object();

    command.command = "getappinfo";
    command.appids = g_updatableApps.join("|");
    (getCommandProxy()).executeCommand(command, onQueryForUpdatesReturned);
}
function isAppUpdatable(app) {
    return app.updatable;
}
function ensureAppUpdating(appId) {
    for (var i = 0; i < g_updatableApps.length; i++) {
        if (g_updatableApps[i] === appId)
            return;
    }
    g_updatableApps.push(appId);
    ensureRealTimeUpdatesStarted();
}
function initDraggables() {
    if (g_draggableContentIds != null) {
        EnsureScriptFunc("DragDrop.js", "SPDragDropManager", initDraggableSiteContent);
    }
}
var g_dndSiteContentQL = "sp-dragdrop-allsitecontent-qlmenu";
var g_dndSiteContentDataKey = "SPSiteContentDragData";

function initDraggableSiteContent() {
    if (SPDragDropManager == null || typeof SPDragDropManager == 'undefined')
        return;
    var nLength = g_draggableContentIds.length;
    var linkKeys = {};

    linkKeys[g_dndSiteContentQL] = "";
    for (var i = 0; i < nLength; i++) {
        var linkId = g_draggableContentIds[i];
        var link = document.getElementById(linkId);

        if (link != null && typeof link != 'undefined') {
            var draggable = SPDragDropManager.InitDraggable(link, linkKeys);

            SetSiteContentDragOptions(draggable);
        }
        var imageLinkId = linkId + "-image";
        var imageLink = document.getElementById(imageLinkId);

        if (!fIsNullOrUndefined(imageLink)) {
            var draggable = SPDragDropManager.InitDraggable(imageLink, linkKeys);

            SetSiteContentDragOptions(draggable);
        }
    }
}
function SetSiteContentDragOptions(draggable) {
    if (!draggable)
        return;
    draggable.SetOption("dragImage", createSiteContentDragImage);
    var offset = new SPPosition(20, 20);

    draggable.SetOption("cursorAt", offset);
    draggable.AddEventListener('spDragStart', siteContentDragStartHandler);
}
function createSiteContentDragImage(element) {
    var cloneLink = element.cloneNode(true);

    cloneLink.id = "";
    document.body.appendChild(cloneLink);
    return cloneLink;
}
function siteContentDragStartHandler(spEvt) {
    var dragData = [];
    var target = GetTarget(spEvt.rawEvent);

    while (Boolean(target) && !Boolean(target.href))
        target = target.parentNode;
    if (!Boolean(target) || !Boolean(target.id))
        return;
    if (target.id.length > 6 && target.id.substring(target.id.length - 6) == "-image") {
        var textLinkId = target.id.substring(0, target.id.length - 6);
        var textLink = document.getElementById(textLinkId);

        if (!fIsNullOrUndefined(textLink)) {
            target = textLink;
        }
    }
    var title = typeof target.textContent == "undefined" ? target.innerText : target.textContent;
    var url = null;

    if (target.tagName.toUpperCase() == "A") {
        url = target.href;
    }
    var spdd = new SPSiteContentDragData(title, url);

    dragData.push(spdd);
    if (dragData.length > 0) {
        spEvt.SetData(g_dndSiteContentDataKey, dragData);
        if (spEvt.rawEvent && spEvt.rawEvent.dataTransfer) {
            spEvt.rawEvent.dataTransfer.effectAllowed = "all";
        }
    }
}
function SPSiteContentDragData(title, url) {
    this.title = title;
    this.url = url;
}
function _InitAllAppsGlobals() {
    req = new Object();
    appHtmlTemplate = "<div class=\"ms-vl-appimage\">" + "<a class=\"ms-storefront-selectanchor ms-storefront-appiconspan\" tabindex=\"-1\" id=\"viewlist{APP_ID}-image\">" + "<img class=\"ms-storefront-appiconimg\" src=\"{APP_IMAGE}\"></img></a></div>" + "<div class=\"{APP_APPINFOSTYLE} ms-vl-pointer\" onClick=\"javascript:launchCallout(arguments[0],'{APP_ID}', this)\">" + "<div><div class=\"ms-vl-apptitleouter\"><a class=\"{APP_LAUNCHLINKSTYLE} ms-vl-apptitle\" id=\"viewlist{APP_ID}\" title=\"{APP_TITLE}\">" + "{APP_TITLE}</a></div>" + "<a class=\"ms-vl-calloutarrow ms-calloutLink ms-ellipsis-a ms-pivotControl-overflowDot\" id=\"{APP_ID}\"><img id=\"{APP_ID}-breadcrumb\" class=\"ms-ellipsis-icon\" alt=\"" + "<SharePoint:EncodedLiteral runat='server' text='<%$Resources:wss,calloutOpen%>' EncodeMethod='EcmaScriptStringLiteralEncode'/>" + "\" style=\"visibility:hidden;\"></img></a></div>" + "<div class=\"ms-metadata ms-vl-appstatus\" id=\"itemcount-{APP_ID}\"></div><div class=\"ms-metadata ms-vl-appstatus {APP_ERRORSTYLE}\" id=\"appstatus-{APP_ID}\" class=\"{APP_DISABLED}\">{APP_STATUS_TEXT}</div></div>";
    g_updateIntervalIndex = 0;
    g_updateIntervals = [5, 5, 10, 10, 20, 40, 80, 160, 320, 640, 1800, 3600, 7200, 14000];
    g_realtimeUpdatesOn = false;
    g_updatingInProgress = false;
    g_dndSiteContentQL = "sp-dragdrop-allsitecontent-qlmenu";
    g_dndSiteContentDataKey = "SPSiteContentDragData";
    _spAllAppsScriptLoaded = true;
}
_InitAllAppsGlobals();
RegisterModuleInit("sp.ui.allapps.js", function() {
    sp_ui_allapps_initialize();
    _InitAllAppsGlobals();
});
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.allapps.js");
_spAllAppsScriptLoaded = true;
