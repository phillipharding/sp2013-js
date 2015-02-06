Type.registerNamespace('SP');
SP.ULSTraceLevel = function() {
};
SP.ULSTraceLevel.prototype = {
    verbose: 100
};
SP.ULSTraceLevel.registerEnum('SP.ULSTraceLevel', false);
SP.AddFieldOptions = function() {
};
SP.AddFieldOptions.prototype = {
    defaultValue: 0,
    addToDefaultContentType: 1,
    addToNoContentType: 2,
    addToAllContentTypes: 4,
    addFieldInternalNameHint: 8,
    addFieldToDefaultView: 16,
    addFieldCheckDisplayName: 32
};
SP.AddFieldOptions.registerEnum('SP.AddFieldOptions', false);
SP.AppInstanceErrorSource = function() {
};
SP.AppInstanceErrorSource.prototype = {
    common: 0,
    appWeb: 1,
    parentWeb: 2,
    remoteWebSite: 3,
    database: 4,
    officeExtension: 5,
    eventCallouts: 6,
    finalization: 7
};
SP.AppInstanceErrorSource.registerEnum('SP.AppInstanceErrorSource', false);
SP.AppInstanceErrorType = function() {
};
SP.AppInstanceErrorType.prototype = {
    transient: 0,
    configuration: 1,
    app: 2
};
SP.AppInstanceErrorType.registerEnum('SP.AppInstanceErrorType', false);
SP.AppInstanceStatus = function() {
};
SP.AppInstanceStatus.prototype = {
    invalidStatus: 0,
    installing: 1,
    canceling: 7,
    uninstalling: 4,
    installed: 5,
    upgrading: 8,
    initialized: 9,
    upgradeCanceling: 10,
    disabling: 11,
    disabled: 12,
    secretRolling: 13
};
SP.AppInstanceStatus.registerEnum('SP.AppInstanceStatus', false);
SP.AppLicenseType = function() {
};
SP.AppLicenseType.prototype = {
    perpetualMultiUser: 0,
    perpetualAllUsers: 1,
    trialMultiUser: 2,
    trialAllUsers: 3
};
SP.AppLicenseType.registerEnum('SP.AppLicenseType', false);
SP.BaseType = function() {
};
SP.BaseType.prototype = {
    none: -1,
    genericList: 0,
    documentLibrary: 1,
    unused: 2,
    discussionBoard: 3,
    survey: 4,
    issue: 5
};
SP.BaseType.registerEnum('SP.BaseType', false);
SP.BrowserFileHandling = function() {
};
SP.BrowserFileHandling.prototype = {
    permissive: 0,
    strict: 1
};
SP.BrowserFileHandling.registerEnum('SP.BrowserFileHandling', false);
SP.CalendarType = function() {
};
SP.CalendarType.prototype = {
    none: 0,
    gregorian: 1,
    japan: 3,
    taiwan: 4,
    korea: 5,
    hijri: 6,
    thai: 7,
    hebrew: 8,
    gregorianMEFrench: 9,
    gregorianArabic: 10,
    gregorianXLITEnglish: 11,
    gregorianXLITFrench: 12,
    koreaJapanLunar: 14,
    chineseLunar: 15,
    sakaEra: 16,
    umAlQura: 23
};
SP.CalendarType.registerEnum('SP.CalendarType', false);
SP.ChangeType = function() {
};
SP.ChangeType.prototype = {
    noChange: 0,
    add: 1,
    update: 2,
    deleteObject: 3,
    rename: 4,
    moveAway: 5,
    moveInto: 6,
    restore: 7,
    roleAdd: 8,
    roleDelete: 9,
    roleUpdate: 10,
    assignmentAdd: 11,
    assignmentDelete: 12,
    memberAdd: 13,
    memberDelete: 14,
    systemUpdate: 15,
    navigation: 16,
    scopeAdd: 17,
    scopeDelete: 18,
    listContentTypeAdd: 19,
    listContentTypeDelete: 20
};
SP.ChangeType.registerEnum('SP.ChangeType', false);
SP.CheckinType = function() {
};
SP.CheckinType.prototype = {
    minorCheckIn: 0,
    majorCheckIn: 1,
    overwriteCheckIn: 2
};
SP.CheckinType.registerEnum('SP.CheckinType', false);
SP.CheckOutType = function() {
};
SP.CheckOutType.prototype = {
    online: 0,
    offline: 1,
    none: 2
};
SP.CheckOutType.registerEnum('SP.CheckOutType', false);
SP.ChoiceFormatType = function() {
};
SP.ChoiceFormatType.prototype = {
    dropdown: 0,
    radioButtons: 1
};
SP.ChoiceFormatType.registerEnum('SP.ChoiceFormatType', false);
SP.CustomizedPageStatus = function() {
};
SP.CustomizedPageStatus.prototype = {
    none: 0,
    uncustomized: 1,
    customized: 2
};
SP.CustomizedPageStatus.registerEnum('SP.CustomizedPageStatus', false);
SP.DateTimeFieldFormatType = function() {
};
SP.DateTimeFieldFormatType.prototype = {
    dateOnly: 0,
    dateTime: 1
};
SP.DateTimeFieldFormatType.registerEnum('SP.DateTimeFieldFormatType', false);
SP.DateTimeFieldFriendlyFormatType = function() {
};
SP.DateTimeFieldFriendlyFormatType.prototype = {
    unspecified: 0,
    disabled: 1,
    relative: 2
};
SP.DateTimeFieldFriendlyFormatType.registerEnum('SP.DateTimeFieldFriendlyFormatType', false);
SP.DraftVisibilityType = function() {
};
SP.DraftVisibilityType.prototype = {
    reader: 0,
    author: 1,
    approver: 2
};
SP.DraftVisibilityType.registerEnum('SP.DraftVisibilityType', false);
SP.EventReceiverSynchronization = function() {
};
SP.EventReceiverSynchronization.prototype = {
    defaultSynchronization: 0,
    synchronous: 1,
    asynchronous: 2
};
SP.EventReceiverSynchronization.registerEnum('SP.EventReceiverSynchronization', false);
SP.EventReceiverType = function() {
};
SP.EventReceiverType.prototype = {
    invalidReceiver: -1,
    itemAdding: 1,
    itemUpdating: 2,
    itemDeleting: 3,
    itemCheckingIn: 4,
    itemCheckingOut: 5,
    itemUncheckingOut: 6,
    itemAttachmentAdding: 7,
    itemAttachmentDeleting: 8,
    itemFileMoving: 9,
    itemVersionDeleting: 11,
    fieldAdding: 101,
    fieldUpdating: 102,
    fieldDeleting: 103,
    listAdding: 104,
    listDeleting: 105,
    siteDeleting: 201,
    webDeleting: 202,
    webMoving: 203,
    webAdding: 204,
    groupAdding: 301,
    groupUpdating: 302,
    groupDeleting: 303,
    groupUserAdding: 304,
    groupUserDeleting: 305,
    roleDefinitionAdding: 306,
    roleDefinitionUpdating: 307,
    roleDefinitionDeleting: 308,
    roleAssignmentAdding: 309,
    roleAssignmentDeleting: 310,
    inheritanceBreaking: 311,
    inheritanceResetting: 312,
    workflowStarting: 501,
    itemAdded: 10001,
    itemUpdated: 10002,
    itemDeleted: 10003,
    itemCheckedIn: 10004,
    itemCheckedOut: 10005,
    itemUncheckedOut: 10006,
    itemAttachmentAdded: 10007,
    itemAttachmentDeleted: 10008,
    itemFileMoved: 10009,
    itemFileConverted: 10010,
    itemVersionDeleted: 10011,
    fieldAdded: 10101,
    fieldUpdated: 10102,
    fieldDeleted: 10103,
    listAdded: 10104,
    listDeleted: 10105,
    siteDeleted: 10201,
    webDeleted: 10202,
    webMoved: 10203,
    webProvisioned: 10204,
    groupAdded: 10301,
    groupUpdated: 10302,
    groupDeleted: 10303,
    groupUserAdded: 10304,
    groupUserDeleted: 10305,
    roleDefinitionAdded: 10306,
    roleDefinitionUpdated: 10307,
    roleDefinitionDeleted: 10308,
    roleAssignmentAdded: 10309,
    roleAssignmentDeleted: 10310,
    inheritanceBroken: 10311,
    inheritanceReset: 10312,
    workflowStarted: 10501,
    workflowPostponed: 10502,
    workflowCompleted: 10503,
    entityInstanceAdded: 10601,
    entityInstanceUpdated: 10602,
    entityInstanceDeleted: 10603,
    appInstalled: 10701,
    appUpgraded: 10702,
    appUninstalling: 10703,
    emailReceived: 20000,
    contextEvent: 32766
};
SP.EventReceiverType.registerEnum('SP.EventReceiverType', false);
SP.FeatureDefinitionScope = function() {
};
SP.FeatureDefinitionScope.prototype = {
    none: 0,
    farm: 1,
    site: 2,
    web: 3
};
SP.FeatureDefinitionScope.registerEnum('SP.FeatureDefinitionScope', false);
SP.FieldType = function() {
};
SP.FieldType.prototype = {
    invalid: 0,
    integer: 1,
    text: 2,
    note: 3,
    dateTime: 4,
    counter: 5,
    choice: 6,
    lookup: 7,
    boolean: 8,
    number: 9,
    currency: 10,
    URL: 11,
    computed: 12,
    threading: 13,
    guid: 14,
    multiChoice: 15,
    gridChoice: 16,
    calculated: 17,
    file: 18,
    attachments: 19,
    user: 20,
    recurrence: 21,
    crossProjectLink: 22,
    modStat: 23,
    error: 24,
    contentTypeId: 25,
    pageSeparator: 26,
    threadIndex: 27,
    workflowStatus: 28,
    allDayEvent: 29,
    workflowEventType: 30,
    geolocation: 31,
    outcomeChoice: 32,
    maxItems: 33
};
SP.FieldType.registerEnum('SP.FieldType', false);
SP.FieldUserSelectionMode = function() {
};
SP.FieldUserSelectionMode.prototype = {
    peopleOnly: 0,
    peopleAndGroups: 1
};
SP.FieldUserSelectionMode.registerEnum('SP.FieldUserSelectionMode', false);
SP.FileLevel = function() {
};
SP.FileLevel.prototype = {
    published: 1,
    draft: 2,
    checkout: 255
};
SP.FileLevel.registerEnum('SP.FileLevel', false);
SP.FileSystemObjectType = function() {
};
SP.FileSystemObjectType.prototype = {
    invalid: -1,
    file: 0,
    folder: 1,
    web: 2
};
SP.FileSystemObjectType.registerEnum('SP.FileSystemObjectType', false);
SP.ListDataValidationFailureReason = function() {
};
SP.ListDataValidationFailureReason.prototype = {
    dataFailure: 0,
    formulaError: 1
};
SP.ListDataValidationFailureReason.registerEnum('SP.ListDataValidationFailureReason', false);
SP.ListDataValidationType = function() {
};
SP.ListDataValidationType.prototype = {
    userFormulaField: 0,
    userFormulaItem: 1,
    requiredField: 2,
    choiceField: 3,
    minMaxField: 4,
    textField: 5
};
SP.ListDataValidationType.registerEnum('SP.ListDataValidationType', false);
SP.ListTemplateType = function() {
};
SP.ListTemplateType.prototype = {
    invalidType: -1,
    noListTemplate: 0,
    genericList: 100,
    documentLibrary: 101,
    survey: 102,
    links: 103,
    announcements: 104,
    contacts: 105,
    events: 106,
    tasks: 107,
    discussionBoard: 108,
    pictureLibrary: 109,
    dataSources: 110,
    webTemplateCatalog: 111,
    userInformation: 112,
    webPartCatalog: 113,
    listTemplateCatalog: 114,
    xmlForm: 115,
    masterPageCatalog: 116,
    noCodeWorkflows: 117,
    workflowProcess: 118,
    webPageLibrary: 119,
    customGrid: 120,
    solutionCatalog: 121,
    noCodePublic: 122,
    themeCatalog: 123,
    designCatalog: 124,
    appDataCatalog: 125,
    dataConnectionLibrary: 130,
    workflowHistory: 140,
    ganttTasks: 150,
    helpLibrary: 151,
    accessRequest: 160,
    tasksWithTimelineAndHierarchy: 171,
    maintenanceLogs: 175,
    meetings: 200,
    agenda: 201,
    meetingUser: 202,
    decision: 204,
    meetingObjective: 207,
    textBox: 210,
    thingsToBring: 211,
    homePageLibrary: 212,
    posts: 301,
    comments: 302,
    categories: 303,
    facility: 402,
    whereabouts: 403,
    callTrack: 404,
    circulation: 405,
    timecard: 420,
    holidays: 421,
    imeDic: 499,
    externalList: 600,
    mySiteDocumentLibrary: 700,
    issueTracking: 1100,
    adminTasks: 1200,
    healthRules: 1220,
    healthReports: 1221,
    developerSiteDraftApps: 1230
};
SP.ListTemplateType.registerEnum('SP.ListTemplateType', false);
SP.MoveOperations = function() {
};
SP.MoveOperations.prototype = {
    none: 0,
    overwrite: 1,
    allowBrokenThickets: 8,
    bypassApprovePermission: 64
};
SP.MoveOperations.registerEnum('SP.MoveOperations', false);
SP.OpenWebOptions = function() {
};
SP.OpenWebOptions.prototype = {
    none: 0,
    initNavigationCache: 1
};
SP.OpenWebOptions.registerEnum('SP.OpenWebOptions', false);
SP.PageType = function() {
};
SP.PageType.prototype = {
    invalid: -1,
    defaultView: 0,
    normalView: 1,
    dialogView: 2,
    view: 3,
    displayForm: 4,
    displayFormDialog: 5,
    editForm: 6,
    editFormDialog: 7,
    newForm: 8,
    newFormDialog: 9,
    solutionForm: 10,
    pagE_MAXITEMS: 11
};
SP.PageType.registerEnum('SP.PageType', false);
SP.QuickLaunchOptions = function() {
};
SP.QuickLaunchOptions.prototype = {
    off: 0,
    on: 1,
    defaultValue: 2
};
SP.QuickLaunchOptions.registerEnum('SP.QuickLaunchOptions', false);
SP.RecycleBinItemState = function() {
};
SP.RecycleBinItemState.prototype = {
    none: 0,
    firstStageRecycleBin: 1,
    secondStageRecycleBin: 2
};
SP.RecycleBinItemState.registerEnum('SP.RecycleBinItemState', false);
SP.RecycleBinItemType = function() {
};
SP.RecycleBinItemType.prototype = {
    none: 0,
    file: 1,
    fileVersion: 2,
    listItem: 3,
    list: 4,
    folder: 5,
    folderWithLists: 6,
    attachment: 7,
    listItemVersion: 8,
    cascadeParent: 9,
    web: 10
};
SP.RecycleBinItemType.registerEnum('SP.RecycleBinItemType', false);
SP.RelationshipDeleteBehaviorType = function() {
};
SP.RelationshipDeleteBehaviorType.prototype = {
    none: 0,
    cascade: 1,
    restrict: 2
};
SP.RelationshipDeleteBehaviorType.registerEnum('SP.RelationshipDeleteBehaviorType', false);
SP.RoleType = function() {
};
SP.RoleType.prototype = {
    none: 0,
    guest: 1,
    reader: 2,
    contributor: 3,
    webDesigner: 4,
    administrator: 5,
    editor: 6
};
SP.RoleType.registerEnum('SP.RoleType', false);
SP.TemplateFileType = function() {
};
SP.TemplateFileType.prototype = {
    standardPage: 0,
    wikiPage: 1,
    formPage: 2
};
SP.TemplateFileType.registerEnum('SP.TemplateFileType', false);
SP.UpgradeStatus = function() {
};
SP.UpgradeStatus.prototype = {
    none: 0,
    inProgress: 1,
    failed: 2,
    completed: 3
};
SP.UpgradeStatus.registerEnum('SP.UpgradeStatus', false);
SP.UpgradeType = function() {
};
SP.UpgradeType.prototype = {
    buildUpgrade: 0,
    versionUpgrade: 1
};
SP.UpgradeType.registerEnum('SP.UpgradeType', false);
SP.UrlFieldFormatType = function() {
};
SP.UrlFieldFormatType.prototype = {
    hyperlink: 0,
    image: 1
};
SP.UrlFieldFormatType.registerEnum('SP.UrlFieldFormatType', false);
SP.UrlZone = function() {
};
SP.UrlZone.prototype = {
    defaultZone: 0,
    intranet: 1,
    internet: 2,
    custom: 3,
    extranet: 4
};
SP.UrlZone.registerEnum('SP.UrlZone', false);
SP.UserCustomActionRegistrationType = function() {
};
SP.UserCustomActionRegistrationType.prototype = {
    none: 0,
    list: 1,
    contentType: 2,
    progId: 3,
    fileType: 4
};
SP.UserCustomActionRegistrationType.registerEnum('SP.UserCustomActionRegistrationType', false);
SP.UserCustomActionScope = function() {
};
SP.UserCustomActionScope.prototype = {
    unknown: 0,
    site: 2,
    web: 3,
    list: 4
};
SP.UserCustomActionScope.registerEnum('SP.UserCustomActionScope', false);
SP.ViewScope = function() {
};
SP.ViewScope.prototype = {
    defaultValue: 0,
    recursive: 1,
    recursiveAll: 2,
    filesOnly: 3
};
SP.ViewScope.registerEnum('SP.ViewScope', false);
SP.ViewType = function() {
};
SP.ViewType.prototype = {
    none: 0,
    html: 1,
    grid: 2048,
    calendar: 524288,
    recurrence: 8193,
    chart: 131072,
    gantt: 67108864
};
SP.ViewType.registerEnum('SP.ViewType', false);
SP.ClientContext = function SP_ClientContext(serverRelativeUrlOrFullUrl) {
    SP.ClientContext.initializeBase(this, [SP.ScriptUtility.isNullOrUndefined(serverRelativeUrlOrFullUrl) ? SP.ClientContext.$4v() : serverRelativeUrlOrFullUrl]);
    this.set_formDigestHandlingEnabled(true);
};
SP.ClientContext.$4v = function SP_ClientContext$$4v() {
    var $v_0 = window._spPageContextInfo;

    if ($v_0) {
        return $v_0.webServerRelativeUrl;
    }
    throw Error.invalidOperation(SP.ResResources.getString(SP.ResourceStrings.cannotFindContextWebServerRelativeUrl));
};
SP.ClientContext.get_current = function SP_ClientContext$get_current() {
    if (!SP.ClientContext.$p) {
        var $v_0 = null;
        var $v_1 = window._spPageContextInfo;
        var $v_2 = false;

        if ($v_1) {
            $v_0 = $v_1.webServerRelativeUrl;
        }
        if (SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            $v_0 = window.location.href;
            var $v_3 = $v_0.indexOf('?');

            if ($v_3 > 0) {
                $v_0 = $v_0.substr(0, $v_3);
            }
            $v_3 = $v_0.indexOf('#');
            if ($v_3 > 0) {
                $v_0 = $v_0.substr(0, $v_3);
            }
            var $v_4 = false;
            var $v_5 = $v_0.toLowerCase();
            var $v_6 = ['/_layouts', '/_vti_bin'];

            for (var $v_7 = 0; $v_7 < $v_6.length; $v_7++) {
                $v_3 = $v_5.indexOf($v_6[$v_7]);
                if ($v_3 > 0) {
                    $v_0 = $v_0.substr(0, $v_3);
                    $v_4 = true;
                    break;
                }
            }
            if (!$v_4) {
                $v_3 = $v_0.lastIndexOf('.');
                if ($v_3 > 0) {
                    $v_0 = $v_0.substr(0, $v_3);
                }
            }
            $v_2 = true;
        }
        SP.ClientContext.$p = new SP.ClientContext($v_0);
        SP.ClientContext.$p.set_isPageUrl($v_2);
    }
    return SP.ClientContext.$p;
};
SP.ClientContext.prototype = {
    $F_1: null,
    get_web: function SP_ClientContext$get_web() {
        if (!this.$F_1) {
            var $v_0 = SP.RequestContext.getCurrent(this);

            this.$F_1 = $v_0.get_web();
        }
        return this.$F_1;
    },
    $N_1: null,
    get_site: function SP_ClientContext$get_site() {
        if (!this.$N_1) {
            var $v_0 = SP.RequestContext.getCurrent(this);

            this.$N_1 = $v_0.get_site();
        }
        return this.$N_1;
    },
    get_serverVersion: function SP_ClientContext$get_serverVersion() {
        return this.get_serverLibraryVersion();
    }
};
SP.ULS = function SP_ULS() {
};
SP.ULS.$3c = function SP_ULS$$3c() {
    if (SP.ULS.$3N) {
        return null;
    }
    var $v_0 = window.top.s_sp_debugWindow;

    if (SP.ScriptUtility.isNullOrUndefined($v_0) || $v_0.closed) {
        try {
            $v_0 = window.open('/_layouts/' + SP.OfficeVersion.majorVersion + '/blank.htm', null, 'width=400,height=200,scrollbars=yes,resizable=yes,status=no,location=no,menubar=no,toolbar=no');
        }
        catch ($$e_1) {
            SP.ULS.$3N = true;
        }
        if ($v_0) {
            window.setTimeout(SP.ULS.$4w, 100);
        }
        window.top.s_sp_debugWindow = $v_0;
    }
    return $v_0;
};
SP.ULS.$4w = function SP_ULS$$4w() {
    var $v_0 = window.top.s_sp_debugWindow;

    if (!$v_0) {
        return;
    }
    try {
        var $v_1 = $v_0.document;
        var $v_2;

        $v_2 = $v_1.createElement('DIV');
        $v_1.body.appendChild($v_2);
        var $v_3 = $v_1.createElement('INPUT');

        $v_3.setAttribute('type', 'checkbox');
        $v_3.id = 'UlsConfigTraceApi';
        $v_2.appendChild($v_3);
        $v_2.appendChild($v_1.createTextNode('Trace API'));
        $v_2 = $v_1.createElement('DIV');
        $v_2.id = 'UlsLogs';
        $v_1.body.appendChild($v_2);
        $v_2 = $v_1.getElementById('UlsLogs');
        $v_2.appendChild($v_1.createTextNode('Use double-click to clear the entries.'));
        $addHandler($v_1.body, 'dblclick', SP.ULS.$4h);
        $addHandler($v_3, 'click', SP.ULS.$5K);
        $v_1.title = 'Debug Output';
    }
    catch ($$e_4) { }
};
SP.ULS.get_enabled = function SP_ULS$get_enabled() {
    return SP.ULS.$f;
};
SP.ULS.set_enabled = function SP_ULS$set_enabled(value) {
    SP.ULS.$f = value;
    return value;
};
SP.ULS.log = function SP_ULS$log(debugMessage) {
    if (!SP.ULS.$f) {
        return;
    }
    var $v_0 = (new Date()).format('hh:mm:ss.ffff');
    var $v_1 = SP.ULS.$K + debugMessage;

    if (SP.ULS.$E) {
        for (var $v_3 = 0; $v_3 < SP.ULS.$E.length; $v_3++) {
            var $v_4 = SP.ULS.$E[$v_3];
            var $v_5 = SP.ULS.$3g($v_4['time'], $v_4['msg']);

            if (!$v_5) {
                SP.ULS.$4d($v_0, $v_1);
                return;
            }
        }
        SP.ULS.$E = null;
    }
    var $v_2 = SP.ULS.$3g($v_0, $v_1);

    if (!$v_2) {
        SP.ULS.$4d($v_0, $v_1);
    }
};
SP.ULS.$4d = function SP_ULS$$4d($p0, $p1) {
    if (!SP.ULS.$E) {
        SP.ULS.$E = new Array(0);
    }
    var $v_0 = {};

    $v_0['time'] = $p0;
    $v_0['msg'] = $p1;
    SP.ULS.$E[SP.ULS.$E.length] = $v_0;
};
SP.ULS.$3g = function SP_ULS$$3g($p0, $p1) {
    var $v_0 = SP.ULS.$3c();

    if ($v_0) {
        try {
            var $v_1 = $v_0.document.createElement('DIV');

            $v_1.style.fontSize = '8pt';
            $v_1.style.fontFamily = 'Consolas, Courier, Sans-Serif';
            if (SP.ULS.$1c) {
                $v_1.style.backgroundColor = 'gray';
            }
            SP.ULS.$1c = !SP.ULS.$1c;
            var $v_2 = $v_0.document.createElement('SPAN');

            $v_2.style.fontWeight = 'bold';
            var $v_3 = $v_0.document.createElement('SPAN');

            $v_1.appendChild($v_2);
            $v_1.appendChild($v_3);
            var $v_4 = $v_0.document.getElementById('UlsLogs');

            if ($v_4) {
                $v_4.appendChild($v_1);
                SP.UI.UIUtility.setInnerText($v_2, $p0);
                SP.UI.UIUtility.setInnerText($v_3, $p1);
                return true;
            }
        }
        catch ($$e_7) { }
    }
    return false;
};
SP.ULS.$4h = function SP_ULS$$4h($p0) {
    var $v_0 = SP.ULS.$3c();

    if ($v_0 && $v_0.document) {
        ($v_0.document.getElementById('UlsLogs')).innerHTML = '';
    }
};
SP.ULS.$5K = function SP_ULS$$5K($p0) {
    SP.ULS.$1d = $p0.target.checked;
};
SP.ULS.increaseIndent = function SP_ULS$increaseIndent() {
    SP.ULS.$3O++;
    SP.ULS.$K = SP.ULS.$K + String.fromCharCode(160);
};
SP.ULS.decreaseIndent = function SP_ULS$decreaseIndent() {
    SP.ULS.$3O--;
    if (SP.ULS.$K.length > 0) {
        SP.ULS.$K = SP.ULS.$K.substr(0, SP.ULS.$K.length - 1);
    }
};
SP.ULS.traceApiEnter = function SP_ULS$traceApiEnter(functionName) {
    if (!SP.ULS.$f) {
        return;
    }
    if (!SP.ULS.$1d) {
        return;
    }
    SP.ULS.$3P.push(functionName);
    var $v_0 = 'Enter ' + functionName + '(';

    for (var $v_1 = 1; $v_1 < arguments.length; $v_1++) {
        var $v_2 = arguments[$v_1];

        if ($v_1 !== 1) {
            $v_0 = $v_0 + ', ';
        }
        switch (typeof $v_2) {
        case 'number':
            $v_0 = $v_0 + $v_2.toString();
            break;
        case 'string':
            $v_0 = $v_0 + $v_2;
            break;
        case 'boolean':
            $v_0 = $v_0 + $v_2.toString();
            break;
        case 'object':
            $v_0 = $v_0 + '[object]';
            break;
        default:
            $v_0 = $v_0 + '[unknownobj]';
            break;
        }
    }
    $v_0 += ')';
    SP.ULS.log($v_0);
    SP.ULS.increaseIndent();
};
SP.ULS.traceApiLeave = function SP_ULS$traceApiLeave() {
    if (!SP.ULS.$f) {
        return;
    }
    if (!SP.ULS.$1d) {
        return;
    }
    SP.ULS.decreaseIndent();
    var $v_0 = SP.ULS.$3P.pop();
    var $v_1 = 'Leave ' + $v_0;

    SP.ULS.log($v_1);
};
SP.AccessRequests = function SP_AccessRequests() {
};
SP.AccessRequests.changeRequestStatus = function SP_AccessRequests$changeRequestStatus(context, itemId, newStatus, convStr, permType, permissionLevel) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{e7dae9f6-8aa5-4b86-92c8-61941d774c44}', 'ChangeRequestStatus', [itemId, newStatus, convStr, permType, permissionLevel]);

    context.addQuery($v_0);
};
SP.AccessRequests.changeRequestStatusBulk = function SP_AccessRequests$changeRequestStatusBulk(context, requestIds, newStatus) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{e7dae9f6-8aa5-4b86-92c8-61941d774c44}', 'ChangeRequestStatusBulk', [requestIds, newStatus]);

    context.addQuery($v_0);
};
SP.AlternateUrl = function SP_AlternateUrl(context, objectPath) {
    SP.AlternateUrl.initializeBase(this, [context, objectPath]);
};
SP.AlternateUrl.prototype = {
    get_uri: function SP_AlternateUrl$get_uri() {
        this.checkUninitializedProperty('Uri');
        return ((this.get_objectData()).get_properties())['Uri'];
    },
    get_urlZone: function SP_AlternateUrl$get_urlZone() {
        this.checkUninitializedProperty('UrlZone');
        return ((this.get_objectData()).get_properties())['UrlZone'];
    },
    initPropertiesFromJson: function SP_AlternateUrl$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Uri;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Uri'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.Uri;
        }
        $v_0 = parentNode.UrlZone;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['UrlZone'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.UrlZone;
        }
    }
};
SP.AlternateUrlPropertyNames = function SP_AlternateUrlPropertyNames() {
};
SP.App = function SP_App(context, objectPath) {
    SP.App.initializeBase(this, [context, objectPath]);
};
SP.App.prototype = {
    get_assetId: function SP_App$get_assetId() {
        this.checkUninitializedProperty('AssetId');
        return ((this.get_objectData()).get_properties())['AssetId'];
    },
    get_contentMarket: function SP_App$get_contentMarket() {
        this.checkUninitializedProperty('ContentMarket');
        return ((this.get_objectData()).get_properties())['ContentMarket'];
    },
    get_versionString: function SP_App$get_versionString() {
        this.checkUninitializedProperty('VersionString');
        return ((this.get_objectData()).get_properties())['VersionString'];
    },
    initPropertiesFromJson: function SP_App$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AssetId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AssetId'] = $v_0;
            delete parentNode.AssetId;
        }
        $v_0 = parentNode.ContentMarket;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ContentMarket'] = $v_0;
            delete parentNode.ContentMarket;
        }
        $v_0 = parentNode.VersionString;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['VersionString'] = $v_0;
            delete parentNode.VersionString;
        }
    }
};
SP.AppPropertyNames = function SP_AppPropertyNames() {
};
SP.AppCatalog = function SP_AppCatalog() {
};
SP.AppCatalog.getAppInstances = function SP_AppCatalog$getAppInstances(context, web) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;

    $v_0 = new SP.ClientObjectList(context, new SP.ObjectPathStaticMethod(context, '{79cdee9f-257e-423b-9e94-e6404659f7ea}', 'GetAppInstances', [web]), SP.AppInstance);
    return $v_0;
};
SP.AppCatalog.getDeveloperSiteAppInstancesByIds = function SP_AppCatalog$getDeveloperSiteAppInstancesByIds(context, site, appInstanceIds) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;

    $v_0 = new SP.ClientObjectList(context, new SP.ObjectPathStaticMethod(context, '{79cdee9f-257e-423b-9e94-e6404659f7ea}', 'GetDeveloperSiteAppInstancesByIds', [site, appInstanceIds]), SP.AppInstance);
    return $v_0;
};
SP.AppCatalog.isAppSideloadingEnabled = function SP_AppCatalog$isAppSideloadingEnabled(context) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{79cdee9f-257e-423b-9e94-e6404659f7ea}', 'IsAppSideloadingEnabled', null);

    context.addQuery($v_1);
    $v_0 = new SP.BooleanResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.AppContextSite = function SP_AppContextSite(context, siteUrl) {
    SP.AppContextSite.initializeBase(this, [context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{5530f782-6a0d-41ec-bfd9-2cb628fe1557}', arguments)]);
};
SP.AppContextSite.newObject = function SP_AppContextSite$newObject(context, siteUrl) {
    return new SP.AppContextSite(context, new SP.ObjectPathConstructor(context, '{5530f782-6a0d-41ec-bfd9-2cb628fe1557}', [siteUrl]));
};
SP.AppContextSite.prototype = {
    get_site: function SP_AppContextSite$get_site() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Site'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Site(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Site'));
            ((this.get_objectData()).get_clientObjectProperties())['Site'] = $v_0;
        }
        return $v_0;
    },
    get_web: function SP_AppContextSite$get_web() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Web'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Web(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Web'));
            ((this.get_objectData()).get_clientObjectProperties())['Web'] = $v_0;
        }
        return $v_0;
    },
    initPropertiesFromJson: function SP_AppContextSite$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Site;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Site', this.get_site(), $v_0);
            (this.get_site()).fromJson($v_0);
            delete parentNode.Site;
        }
        $v_0 = parentNode.Web;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Web', this.get_web(), $v_0);
            (this.get_web()).fromJson($v_0);
            delete parentNode.Web;
        }
    }
};
SP.AppContextSiteObjectPropertyNames = function SP_AppContextSiteObjectPropertyNames() {
};
SP.AppInstance = function SP_AppInstance(context, objectPath) {
    SP.AppInstance.initializeBase(this, [context, objectPath]);
};
SP.AppInstance.prototype = {
    get_appPrincipalId: function SP_AppInstance$get_appPrincipalId() {
        this.checkUninitializedProperty('AppPrincipalId');
        return ((this.get_objectData()).get_properties())['AppPrincipalId'];
    },
    get_appWebFullUrl: function SP_AppInstance$get_appWebFullUrl() {
        this.checkUninitializedProperty('AppWebFullUrl');
        return ((this.get_objectData()).get_properties())['AppWebFullUrl'];
    },
    get_id: function SP_AppInstance$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_inError: function SP_AppInstance$get_inError() {
        this.checkUninitializedProperty('InError');
        return ((this.get_objectData()).get_properties())['InError'];
    },
    get_startPage: function SP_AppInstance$get_startPage() {
        this.checkUninitializedProperty('StartPage');
        return ((this.get_objectData()).get_properties())['StartPage'];
    },
    get_remoteAppUrl: function SP_AppInstance$get_remoteAppUrl() {
        this.checkUninitializedProperty('RemoteAppUrl');
        return ((this.get_objectData()).get_properties())['RemoteAppUrl'];
    },
    get_settingsPageUrl: function SP_AppInstance$get_settingsPageUrl() {
        this.checkUninitializedProperty('SettingsPageUrl');
        return ((this.get_objectData()).get_properties())['SettingsPageUrl'];
    },
    get_siteId: function SP_AppInstance$get_siteId() {
        this.checkUninitializedProperty('SiteId');
        return ((this.get_objectData()).get_properties())['SiteId'];
    },
    get_status: function SP_AppInstance$get_status() {
        this.checkUninitializedProperty('Status');
        return ((this.get_objectData()).get_properties())['Status'];
    },
    get_title: function SP_AppInstance$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData()).get_properties())['Title'];
    },
    get_webId: function SP_AppInstance$get_webId() {
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData()).get_properties())['WebId'];
    },
    initPropertiesFromJson: function SP_AppInstance$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AppPrincipalId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AppPrincipalId'] = $v_0;
            delete parentNode.AppPrincipalId;
        }
        $v_0 = parentNode.AppWebFullUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AppWebFullUrl'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.AppWebFullUrl;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.InError;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['InError'] = $v_0;
            delete parentNode.InError;
        }
        $v_0 = parentNode.StartPage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['StartPage'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.StartPage;
        }
        $v_0 = parentNode.RemoteAppUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['RemoteAppUrl'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.RemoteAppUrl;
        }
        $v_0 = parentNode.SettingsPageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SettingsPageUrl'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.SettingsPageUrl;
        }
        $v_0 = parentNode.SiteId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SiteId'] = $v_0;
            delete parentNode.SiteId;
        }
        $v_0 = parentNode.Status;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Status'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.Status;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Title'] = $v_0;
            delete parentNode.Title;
        }
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WebId'] = $v_0;
            delete parentNode.WebId;
        }
    },
    getErrorDetails: function SP_AppInstance$getErrorDetails() {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.ClientObjectList($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetErrorDetails', null), SP.AppInstanceErrorDetails);
        return $v_1;
    },
    uninstall: function SP_AppInstance$uninstall() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Uninstall', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.GuidResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    upgrade: function SP_AppInstance$upgrade(appPackageStream) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Upgrade', [appPackageStream]);

        $v_0.addQuery($v_1);
    },
    cancelAllJobs: function SP_AppInstance$cancelAllJobs() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'CancelAllJobs', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    install: function SP_AppInstance$install() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Install', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.GuidResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    getPreviousAppVersion: function SP_AppInstance$getPreviousAppVersion() {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.App($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPreviousAppVersion', null));
        return $v_1;
    },
    retryAllJobs: function SP_AppInstance$retryAllJobs() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'RetryAllJobs', null);

        $v_0.addQuery($v_1);
    }
};
SP.AppInstancePropertyNames = function SP_AppInstancePropertyNames() {
};
SP.AppInstanceErrorDetails = function SP_AppInstanceErrorDetails(context, objectPath) {
    SP.AppInstanceErrorDetails.initializeBase(this, [context, objectPath]);
};
SP.AppInstanceErrorDetails.prototype = {
    get_correlationId: function SP_AppInstanceErrorDetails$get_correlationId() {
        this.checkUninitializedProperty('CorrelationId');
        return ((this.get_objectData()).get_properties())['CorrelationId'];
    },
    set_correlationId: function SP_AppInstanceErrorDetails$set_correlationId(value) {
        ((this.get_objectData()).get_properties())['CorrelationId'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'CorrelationId', value));
        }
        return value;
    },
    get_errorDetail: function SP_AppInstanceErrorDetails$get_errorDetail() {
        this.checkUninitializedProperty('ErrorDetail');
        return ((this.get_objectData()).get_properties())['ErrorDetail'];
    },
    get_errorType: function SP_AppInstanceErrorDetails$get_errorType() {
        this.checkUninitializedProperty('ErrorType');
        return ((this.get_objectData()).get_properties())['ErrorType'];
    },
    set_errorType: function SP_AppInstanceErrorDetails$set_errorType(value) {
        ((this.get_objectData()).get_properties())['ErrorType'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ErrorType', value));
        }
        return value;
    },
    get_errorTypeName: function SP_AppInstanceErrorDetails$get_errorTypeName() {
        this.checkUninitializedProperty('ErrorTypeName');
        return ((this.get_objectData()).get_properties())['ErrorTypeName'];
    },
    get_exceptionMessage: function SP_AppInstanceErrorDetails$get_exceptionMessage() {
        this.checkUninitializedProperty('ExceptionMessage');
        return ((this.get_objectData()).get_properties())['ExceptionMessage'];
    },
    get_source: function SP_AppInstanceErrorDetails$get_source() {
        this.checkUninitializedProperty('Source');
        return ((this.get_objectData()).get_properties())['Source'];
    },
    set_source: function SP_AppInstanceErrorDetails$set_source(value) {
        ((this.get_objectData()).get_properties())['Source'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Source', value));
        }
        return value;
    },
    get_sourceName: function SP_AppInstanceErrorDetails$get_sourceName() {
        this.checkUninitializedProperty('SourceName');
        return ((this.get_objectData()).get_properties())['SourceName'];
    },
    initPropertiesFromJson: function SP_AppInstanceErrorDetails$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.CorrelationId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CorrelationId'] = $v_0;
            delete parentNode.CorrelationId;
        }
        $v_0 = parentNode.ErrorDetail;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ErrorDetail'] = $v_0;
            delete parentNode.ErrorDetail;
        }
        $v_0 = parentNode.ErrorType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ErrorType'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.ErrorType;
        }
        $v_0 = parentNode.ErrorTypeName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ErrorTypeName'] = $v_0;
            delete parentNode.ErrorTypeName;
        }
        $v_0 = parentNode.ExceptionMessage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ExceptionMessage'] = $v_0;
            delete parentNode.ExceptionMessage;
        }
        $v_0 = parentNode.Source;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Source'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.Source;
        }
        $v_0 = parentNode.SourceName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SourceName'] = $v_0;
            delete parentNode.SourceName;
        }
    }
};
SP.AppInstanceErrorDetailsPropertyNames = function SP_AppInstanceErrorDetailsPropertyNames() {
};
SP.AppLicense = function SP_AppLicense() {
    SP.AppLicense.initializeBase(this);
};
SP.AppLicense.prototype = {
    $4C_1: null,
    get_rawXMLLicenseToken: function SP_AppLicense$get_rawXMLLicenseToken() {
        return this.$4C_1;
    },
    get_typeId: function SP_AppLicense$get_typeId() {
        return '{d3425bf9-fe82-4957-afda-5fbd21dabb85}';
    },
    writeToXml: function SP_AppLicense$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['RawXMLLicenseToken'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_AppLicense$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.RawXMLLicenseToken;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4C_1 = $v_0;
            delete parentNode.RawXMLLicenseToken;
        }
    }
};
SP.AppLicenseCollection = function SP_AppLicenseCollection() {
    SP.AppLicenseCollection.initializeBase(this);
};
SP.AppLicenseCollection.prototype = {
    add: function SP_AppLicenseCollection$add(item) {
        this.addChild(item);
    },
    get_item: function SP_AppLicenseCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_typeId: function SP_AppLicenseCollection$get_typeId() {
        return '{47beb529-4c4b-41ba-b717-28d18fbdf258}';
    },
    writeToXml: function SP_AppLicenseCollection$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        SP.ClientValueObjectCollection.prototype.writeToXml.call(this, writer, serializationContext);
    }
};
SP.Attachment = function SP_Attachment(context, objectPath) {
    SP.Attachment.initializeBase(this, [context, objectPath]);
};
SP.Attachment.prototype = {
    get_fileName: function SP_Attachment$get_fileName() {
        this.checkUninitializedProperty('FileName');
        return ((this.get_objectData()).get_properties())['FileName'];
    },
    get_serverRelativeUrl: function SP_Attachment$get_serverRelativeUrl() {
        this.checkUninitializedProperty('ServerRelativeUrl');
        return ((this.get_objectData()).get_properties())['ServerRelativeUrl'];
    },
    initPropertiesFromJson: function SP_Attachment$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.FileName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['FileName'] = $v_0;
            delete parentNode.FileName;
        }
        $v_0 = parentNode.ServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ServerRelativeUrl'] = $v_0;
            delete parentNode.ServerRelativeUrl;
        }
    },
    deleteObject: function SP_Attachment$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
};
SP.AttachmentPropertyNames = function SP_AttachmentPropertyNames() {
};
SP.AttachmentCollection = function SP_AttachmentCollection(context, objectPath) {
    SP.AttachmentCollection.initializeBase(this, [context, objectPath]);
};
SP.AttachmentCollection.prototype = {
    itemAt: function SP_AttachmentCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_AttachmentCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_AttachmentCollection$get_childItemType() {
        return SP.Attachment;
    },
    getByFileName: function SP_AttachmentCollection$getByFileName(fileName) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.Attachment($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByFileName', [fileName]));
        return $v_1;
    }
};
SP.AttachmentCreationInformation = function SP_AttachmentCreationInformation() {
    SP.AttachmentCreationInformation.initializeBase(this);
};
SP.AttachmentCreationInformation.prototype = {
    $2A_1: null,
    $2P_1: null,
    get_contentStream: function SP_AttachmentCreationInformation$get_contentStream() {
        return this.$2A_1;
    },
    set_contentStream: function SP_AttachmentCreationInformation$set_contentStream(value) {
        this.$2A_1 = value;
        return value;
    },
    get_fileName: function SP_AttachmentCreationInformation$get_fileName() {
        return this.$2P_1;
    },
    set_fileName: function SP_AttachmentCreationInformation$set_fileName(value) {
        this.$2P_1 = value;
        return value;
    },
    get_typeId: function SP_AttachmentCreationInformation$get_typeId() {
        return '{edf6309c-8142-4133-921e-4d6aec35550d}';
    },
    writeToXml: function SP_AttachmentCreationInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['ContentStream', 'FileName'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_AttachmentCreationInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ContentStream;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2A_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.ContentStream;
        }
        $v_0 = parentNode.FileName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2P_1 = $v_0;
            delete parentNode.FileName;
        }
    }
};
SP.BasePermissions = function SP_BasePermissions() {
    SP.BasePermissions.initializeBase(this);
};
SP.BasePermissions.prototype = {
    $4_1: 0,
    $5_1: 0,
    set: function SP_BasePermissions$set(perm) {
        if (perm === 65) {
            this.$5_1 = 65535;
            this.$4_1 = 32767;
            return;
        }
        if (!perm) {
            this.$5_1 = 0;
            this.$4_1 = 0;
            return;
        }
        var $v_0 = perm;

        $v_0 = $v_0 - 1;
        var $v_1 = 1;

        if ($v_0 >= 0 && $v_0 < 32) {
            $v_1 = $v_1 << $v_0;
            this.$5_1 = this.$5_1 | $v_1;
        }
        else if ($v_0 >= 32 && $v_0 < 64) {
            $v_1 = $v_1 << $v_0 - 32;
            this.$4_1 = this.$4_1 | $v_1;
        }
    },
    clear: function SP_BasePermissions$clear(perm) {
        var $v_0 = perm;

        $v_0 = $v_0 - 1;
        var $v_1 = 1;

        if ($v_0 >= 0 && $v_0 < 32) {
            $v_1 = $v_1 << $v_0;
            $v_1 = ~$v_1;
            this.$5_1 = this.$5_1 & $v_1;
        }
        else if ($v_0 >= 32 && $v_0 < 64) {
            $v_1 = $v_1 << $v_0 - 32;
            $v_1 = ~$v_1;
            this.$4_1 = this.$4_1 & $v_1;
        }
    },
    clearAll: function SP_BasePermissions$clearAll() {
        this.$4_1 = 0;
        this.$5_1 = 0;
    },
    has: function SP_BasePermissions$has(perm) {
        if (!perm) {
            return true;
        }
        if (perm === 65) {
            return (this.$4_1 & 32767) === 32767 && this.$5_1 === 65535;
        }
        var $v_0 = perm;

        $v_0 = $v_0 - 1;
        var $v_1 = 1;

        if ($v_0 >= 0 && $v_0 < 32) {
            $v_1 = $v_1 << $v_0;
            return 0 !== (this.$5_1 & $v_1);
        }
        else if ($v_0 >= 32 && $v_0 < 64) {
            $v_1 = $v_1 << $v_0 - 32;
            return 0 !== (this.$4_1 & $v_1);
        }
        return false;
    },
    equals: function SP_BasePermissions$equals(perm) {
        if (!perm) {
            return false;
        }
        return perm.$4_1 === this.$4_1 && perm.$5_1 === this.$5_1;
    },
    hasPermissions: function SP_BasePermissions$hasPermissions(high, low) {
        return (this.$4_1 & high) === high && (this.$5_1 & low) === low;
    },
    get_typeId: function SP_BasePermissions$get_typeId() {
        return '{db780e5a-6bc6-41ad-8e64-9dfa761afb6d}';
    },
    writeToXml: function SP_BasePermissions$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        writer.writeStartElement(SP.ClientConstants.Property);
        writer.writeAttributeString(SP.ClientConstants.Name, 'High');
        SP.DataConvert.writeValueToXmlElement(writer, this.$4_1, serializationContext);
        writer.writeEndElement();
        writer.writeStartElement(SP.ClientConstants.Property);
        writer.writeAttributeString(SP.ClientConstants.Name, 'Low');
        SP.DataConvert.writeValueToXmlElement(writer, this.$5_1, serializationContext);
        writer.writeEndElement();
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_BasePermissions$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.High;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4_1 = $v_0;
            delete parentNode.High;
        }
        $v_0 = parentNode.Low;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = $v_0;
            delete parentNode.Low;
        }
    }
};
SP.CamlQuery = function SP_CamlQuery() {
    SP.CamlQuery.initializeBase(this);
    this.$15_1 = true;
};
SP.CamlQuery.createAllItemsQuery = function SP_CamlQuery$createAllItemsQuery() {
    var $v_0 = new SP.CamlQuery();

    $v_0.$l_1 = '<View Scope=\"RecursiveAll\">\r\n    <Query>\r\n    </Query>\r\n</View>';
    return $v_0;
};
SP.CamlQuery.createAllFoldersQuery = function SP_CamlQuery$createAllFoldersQuery() {
    var $v_0 = new SP.CamlQuery();

    $v_0.$l_1 = '<View Scope=\"RecursiveAll\">\r\n    <Query>\r\n        <Where>\r\n            <Eq>\r\n                <FieldRef Name=\"FSObjType\" />\r\n                <Value Type=\"Integer\">1</Value>\r\n            </Eq>\r\n        </Where>\r\n    </Query>\r\n</View>';
    return $v_0;
};
SP.CamlQuery.prototype = {
    $15_1: false,
    $2Q_1: null,
    $2d_1: null,
    $l_1: null,
    get_datesInUtc: function SP_CamlQuery$get_datesInUtc() {
        return this.$15_1;
    },
    set_datesInUtc: function SP_CamlQuery$set_datesInUtc(value) {
        this.$15_1 = value;
        return value;
    },
    get_folderServerRelativeUrl: function SP_CamlQuery$get_folderServerRelativeUrl() {
        return this.$2Q_1;
    },
    set_folderServerRelativeUrl: function SP_CamlQuery$set_folderServerRelativeUrl(value) {
        this.$2Q_1 = value;
        return value;
    },
    get_listItemCollectionPosition: function SP_CamlQuery$get_listItemCollectionPosition() {
        return this.$2d_1;
    },
    set_listItemCollectionPosition: function SP_CamlQuery$set_listItemCollectionPosition(value) {
        this.$2d_1 = value;
        return value;
    },
    get_viewXml: function SP_CamlQuery$get_viewXml() {
        return this.$l_1;
    },
    set_viewXml: function SP_CamlQuery$set_viewXml(value) {
        this.$l_1 = value;
        return value;
    },
    get_typeId: function SP_CamlQuery$get_typeId() {
        return '{3d248d7b-fc86-40a3-aa97-02a75d69fb8a}';
    },
    writeToXml: function SP_CamlQuery$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['DatesInUtc', 'FolderServerRelativeUrl', 'ListItemCollectionPosition', 'ViewXml'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_CamlQuery$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.DatesInUtc;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$15_1 = $v_0;
            delete parentNode.DatesInUtc;
        }
        $v_0 = parentNode.FolderServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2Q_1 = $v_0;
            delete parentNode.FolderServerRelativeUrl;
        }
        $v_0 = parentNode.ListItemCollectionPosition;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2d_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.ListItemCollectionPosition;
        }
        $v_0 = parentNode.ViewXml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$l_1 = $v_0;
            delete parentNode.ViewXml;
        }
    }
};
SP.Change = function SP_Change(context, objectPath) {
    SP.Change.initializeBase(this, [context, objectPath]);
};
SP.Change.prototype = {
    get_changeToken: function SP_Change$get_changeToken() {
        this.checkUninitializedProperty('ChangeToken');
        return ((this.get_objectData()).get_properties())['ChangeToken'];
    },
    get_changeType: function SP_Change$get_changeType() {
        this.checkUninitializedProperty('ChangeType');
        return ((this.get_objectData()).get_properties())['ChangeType'];
    },
    get_siteId: function SP_Change$get_siteId() {
        this.checkUninitializedProperty('SiteId');
        return ((this.get_objectData()).get_properties())['SiteId'];
    },
    get_time: function SP_Change$get_time() {
        this.checkUninitializedProperty('Time');
        return ((this.get_objectData()).get_properties())['Time'];
    },
    initPropertiesFromJson: function SP_Change$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ChangeToken;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ChangeToken'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.ChangeToken;
        }
        $v_0 = parentNode.ChangeType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ChangeType'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.ChangeType;
        }
        $v_0 = parentNode.SiteId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SiteId'] = $v_0;
            delete parentNode.SiteId;
        }
        $v_0 = parentNode.Time;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Time'] = $v_0;
            delete parentNode.Time;
        }
    }
};
SP.ChangePropertyNames = function SP_ChangePropertyNames() {
};
SP.ChangeAlert = function SP_ChangeAlert(context, objectPath) {
    SP.ChangeAlert.initializeBase(this, [context, objectPath]);
};
SP.ChangeAlert.prototype = {
    get_alertId: function SP_ChangeAlert$get_alertId() {
        this.checkUninitializedProperty('AlertId');
        return ((this.get_objectData()).get_properties())['AlertId'];
    },
    get_webId: function SP_ChangeAlert$get_webId() {
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData()).get_properties())['WebId'];
    },
    initPropertiesFromJson: function SP_ChangeAlert$initPropertiesFromJson(parentNode) {
        SP.Change.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AlertId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AlertId'] = $v_0;
            delete parentNode.AlertId;
        }
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WebId'] = $v_0;
            delete parentNode.WebId;
        }
    }
};
SP.ChangeAlertPropertyNames = function SP_ChangeAlertPropertyNames() {
};
SP.ChangeCollection = function SP_ChangeCollection(context, objectPath) {
    SP.ChangeCollection.initializeBase(this, [context, objectPath]);
};
SP.ChangeCollection.prototype = {
    itemAt: function SP_ChangeCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_ChangeCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_ChangeCollection$get_childItemType() {
        return SP.Change;
    }
};
SP.ChangeContentType = function SP_ChangeContentType(context, objectPath) {
    SP.ChangeContentType.initializeBase(this, [context, objectPath]);
};
SP.ChangeContentType.prototype = {
    get_contentTypeId: function SP_ChangeContentType$get_contentTypeId() {
        this.checkUninitializedProperty('ContentTypeId');
        return ((this.get_objectData()).get_properties())['ContentTypeId'];
    },
    get_webId: function SP_ChangeContentType$get_webId() {
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData()).get_properties())['WebId'];
    },
    initPropertiesFromJson: function SP_ChangeContentType$initPropertiesFromJson(parentNode) {
        SP.Change.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ContentTypeId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ContentTypeId'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.ContentTypeId;
        }
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WebId'] = $v_0;
            delete parentNode.WebId;
        }
    }
};
SP.ChangeContentTypePropertyNames = function SP_ChangeContentTypePropertyNames() {
};
SP.ChangeField = function SP_ChangeField(context, objectPath) {
    SP.ChangeField.initializeBase(this, [context, objectPath]);
};
SP.ChangeField.prototype = {
    get_fieldId: function SP_ChangeField$get_fieldId() {
        this.checkUninitializedProperty('FieldId');
        return ((this.get_objectData()).get_properties())['FieldId'];
    },
    get_webId: function SP_ChangeField$get_webId() {
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData()).get_properties())['WebId'];
    },
    initPropertiesFromJson: function SP_ChangeField$initPropertiesFromJson(parentNode) {
        SP.Change.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.FieldId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['FieldId'] = $v_0;
            delete parentNode.FieldId;
        }
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WebId'] = $v_0;
            delete parentNode.WebId;
        }
    }
};
SP.ChangeFieldPropertyNames = function SP_ChangeFieldPropertyNames() {
};
SP.ChangeFile = function SP_ChangeFile(context, objectPath) {
    SP.ChangeFile.initializeBase(this, [context, objectPath]);
};
SP.ChangeFile.prototype = {
    get_uniqueId: function SP_ChangeFile$get_uniqueId() {
        this.checkUninitializedProperty('UniqueId');
        return ((this.get_objectData()).get_properties())['UniqueId'];
    },
    get_webId: function SP_ChangeFile$get_webId() {
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData()).get_properties())['WebId'];
    },
    initPropertiesFromJson: function SP_ChangeFile$initPropertiesFromJson(parentNode) {
        SP.Change.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.UniqueId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['UniqueId'] = $v_0;
            delete parentNode.UniqueId;
        }
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WebId'] = $v_0;
            delete parentNode.WebId;
        }
    }
};
SP.ChangeFilePropertyNames = function SP_ChangeFilePropertyNames() {
};
SP.ChangeFolder = function SP_ChangeFolder(context, objectPath) {
    SP.ChangeFolder.initializeBase(this, [context, objectPath]);
};
SP.ChangeFolder.prototype = {
    get_uniqueId: function SP_ChangeFolder$get_uniqueId() {
        this.checkUninitializedProperty('UniqueId');
        return ((this.get_objectData()).get_properties())['UniqueId'];
    },
    get_webId: function SP_ChangeFolder$get_webId() {
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData()).get_properties())['WebId'];
    },
    initPropertiesFromJson: function SP_ChangeFolder$initPropertiesFromJson(parentNode) {
        SP.Change.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.UniqueId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['UniqueId'] = $v_0;
            delete parentNode.UniqueId;
        }
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WebId'] = $v_0;
            delete parentNode.WebId;
        }
    }
};
SP.ChangeFolderPropertyNames = function SP_ChangeFolderPropertyNames() {
};
SP.ChangeGroup = function SP_ChangeGroup(context, objectPath) {
    SP.ChangeGroup.initializeBase(this, [context, objectPath]);
};
SP.ChangeGroup.prototype = {
    get_groupId: function SP_ChangeGroup$get_groupId() {
        this.checkUninitializedProperty('GroupId');
        return ((this.get_objectData()).get_properties())['GroupId'];
    },
    initPropertiesFromJson: function SP_ChangeGroup$initPropertiesFromJson(parentNode) {
        SP.Change.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.GroupId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['GroupId'] = $v_0;
            delete parentNode.GroupId;
        }
    }
};
SP.ChangeGroupPropertyNames = function SP_ChangeGroupPropertyNames() {
};
SP.ChangeItem = function SP_ChangeItem(context, objectPath) {
    SP.ChangeItem.initializeBase(this, [context, objectPath]);
};
SP.ChangeItem.prototype = {
    get_itemId: function SP_ChangeItem$get_itemId() {
        this.checkUninitializedProperty('ItemId');
        return ((this.get_objectData()).get_properties())['ItemId'];
    },
    get_listId: function SP_ChangeItem$get_listId() {
        this.checkUninitializedProperty('ListId');
        return ((this.get_objectData()).get_properties())['ListId'];
    },
    get_webId: function SP_ChangeItem$get_webId() {
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData()).get_properties())['WebId'];
    },
    initPropertiesFromJson: function SP_ChangeItem$initPropertiesFromJson(parentNode) {
        SP.Change.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ItemId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ItemId'] = $v_0;
            delete parentNode.ItemId;
        }
        $v_0 = parentNode.ListId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ListId'] = $v_0;
            delete parentNode.ListId;
        }
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WebId'] = $v_0;
            delete parentNode.WebId;
        }
    }
};
SP.ChangeItemPropertyNames = function SP_ChangeItemPropertyNames() {
};
SP.ChangeList = function SP_ChangeList(context, objectPath) {
    SP.ChangeList.initializeBase(this, [context, objectPath]);
};
SP.ChangeList.prototype = {
    get_listId: function SP_ChangeList$get_listId() {
        this.checkUninitializedProperty('ListId');
        return ((this.get_objectData()).get_properties())['ListId'];
    },
    get_webId: function SP_ChangeList$get_webId() {
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData()).get_properties())['WebId'];
    },
    initPropertiesFromJson: function SP_ChangeList$initPropertiesFromJson(parentNode) {
        SP.Change.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ListId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ListId'] = $v_0;
            delete parentNode.ListId;
        }
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WebId'] = $v_0;
            delete parentNode.WebId;
        }
    }
};
SP.ChangeListPropertyNames = function SP_ChangeListPropertyNames() {
};
SP.ChangeLogItemQuery = function SP_ChangeLogItemQuery() {
    SP.ChangeLogItemQuery.initializeBase(this);
};
SP.ChangeLogItemQuery.prototype = {
    $25_1: null,
    $29_1: null,
    $a_1: null,
    $2m_1: null,
    $b_1: null,
    $e_1: null,
    $3C_1: null,
    get_changeToken: function SP_ChangeLogItemQuery$get_changeToken() {
        return this.$25_1;
    },
    set_changeToken: function SP_ChangeLogItemQuery$set_changeToken(value) {
        this.$25_1 = value;
        return value;
    },
    get_contains: function SP_ChangeLogItemQuery$get_contains() {
        return this.$29_1;
    },
    set_contains: function SP_ChangeLogItemQuery$set_contains(value) {
        this.$29_1 = value;
        return value;
    },
    get_query: function SP_ChangeLogItemQuery$get_query() {
        return this.$a_1;
    },
    set_query: function SP_ChangeLogItemQuery$set_query(value) {
        this.$a_1 = value;
        return value;
    },
    get_queryOptions: function SP_ChangeLogItemQuery$get_queryOptions() {
        return this.$2m_1;
    },
    set_queryOptions: function SP_ChangeLogItemQuery$set_queryOptions(value) {
        this.$2m_1 = value;
        return value;
    },
    get_rowLimit: function SP_ChangeLogItemQuery$get_rowLimit() {
        return this.$b_1;
    },
    set_rowLimit: function SP_ChangeLogItemQuery$set_rowLimit(value) {
        this.$b_1 = value;
        return value;
    },
    get_viewFields: function SP_ChangeLogItemQuery$get_viewFields() {
        return this.$e_1;
    },
    set_viewFields: function SP_ChangeLogItemQuery$set_viewFields(value) {
        this.$e_1 = value;
        return value;
    },
    get_viewName: function SP_ChangeLogItemQuery$get_viewName() {
        return this.$3C_1;
    },
    set_viewName: function SP_ChangeLogItemQuery$set_viewName(value) {
        this.$3C_1 = value;
        return value;
    },
    get_typeId: function SP_ChangeLogItemQuery$get_typeId() {
        return '{820ed5a1-95f7-493b-88fa-266e9db920af}';
    },
    writeToXml: function SP_ChangeLogItemQuery$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['ChangeToken', 'Contains', 'Query', 'QueryOptions', 'RowLimit', 'ViewFields', 'ViewName'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_ChangeLogItemQuery$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ChangeToken;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$25_1 = $v_0;
            delete parentNode.ChangeToken;
        }
        $v_0 = parentNode.Contains;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$29_1 = $v_0;
            delete parentNode.Contains;
        }
        $v_0 = parentNode.Query;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$a_1 = $v_0;
            delete parentNode.Query;
        }
        $v_0 = parentNode.QueryOptions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2m_1 = $v_0;
            delete parentNode.QueryOptions;
        }
        $v_0 = parentNode.RowLimit;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$b_1 = $v_0;
            delete parentNode.RowLimit;
        }
        $v_0 = parentNode.ViewFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$e_1 = $v_0;
            delete parentNode.ViewFields;
        }
        $v_0 = parentNode.ViewName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3C_1 = $v_0;
            delete parentNode.ViewName;
        }
    }
};
SP.ChangeQuery = function SP_ChangeQuery(allChangeObjectTypes, allChangeTypes) {
    SP.ChangeQuery.initializeBase(this);
    if (!arguments.length) {
        allChangeObjectTypes = false;
        allChangeTypes = false;
    }
    this.$50_1(allChangeObjectTypes, allChangeTypes);
};
SP.ChangeQuery.prototype = {
    $z_1: false,
    $10_1: false,
    $26_1: null,
    $27_1: null,
    $14_1: false,
    $16_1: false,
    $W_1: false,
    $17_1: false,
    $18_1: false,
    $G_1: false,
    $19_1: false,
    $1A_1: false,
    $1B_1: false,
    $H_1: false,
    $1G_1: false,
    $1H_1: false,
    $1M_1: false,
    $1N_1: false,
    $1O_1: false,
    $1P_1: false,
    $1Q_1: false,
    $1R_1: false,
    $1S_1: false,
    $1T_1: false,
    $N_1: false,
    $1U_1: false,
    $1X_1: false,
    $d_1: false,
    $1Y_1: false,
    $F_1: false,
    $50_1: function SP_ChangeQuery$$50_1($p0, $p1) {
        if ($p0) {
            this.$1B_1 = true;
            this.$H_1 = true;
            this.$F_1 = true;
            this.$N_1 = true;
            this.$17_1 = true;
            this.$18_1 = true;
            this.$10_1 = true;
            this.$d_1 = true;
            this.$G_1 = true;
            this.$14_1 = true;
            this.$W_1 = true;
            this.$1T_1 = true;
            this.$1Y_1 = true;
        }
        if ($p1) {
            this.$z_1 = true;
            this.$1X_1 = true;
            this.$16_1 = true;
            this.$1M_1 = true;
            this.$1G_1 = true;
            this.$1N_1 = true;
            this.$1Q_1 = true;
            this.$1R_1 = true;
            this.$1S_1 = true;
            this.$1O_1 = true;
            this.$1P_1 = true;
            this.$19_1 = true;
            this.$1A_1 = true;
            this.$1U_1 = true;
            this.$1H_1 = true;
        }
    },
    get_add: function SP_ChangeQuery$get_add() {
        return this.$z_1;
    },
    set_add: function SP_ChangeQuery$set_add(value) {
        this.$z_1 = value;
        return value;
    },
    get_alert: function SP_ChangeQuery$get_alert() {
        return this.$10_1;
    },
    set_alert: function SP_ChangeQuery$set_alert(value) {
        this.$10_1 = value;
        return value;
    },
    get_changeTokenEnd: function SP_ChangeQuery$get_changeTokenEnd() {
        return this.$26_1;
    },
    set_changeTokenEnd: function SP_ChangeQuery$set_changeTokenEnd(value) {
        this.$26_1 = value;
        return value;
    },
    get_changeTokenStart: function SP_ChangeQuery$get_changeTokenStart() {
        return this.$27_1;
    },
    set_changeTokenStart: function SP_ChangeQuery$set_changeTokenStart(value) {
        this.$27_1 = value;
        return value;
    },
    get_contentType: function SP_ChangeQuery$get_contentType() {
        return this.$14_1;
    },
    set_contentType: function SP_ChangeQuery$set_contentType(value) {
        this.$14_1 = value;
        return value;
    },
    get_deleteObject: function SP_ChangeQuery$get_deleteObject() {
        return this.$16_1;
    },
    set_deleteObject: function SP_ChangeQuery$set_deleteObject(value) {
        this.$16_1 = value;
        return value;
    },
    get_field: function SP_ChangeQuery$get_field() {
        return this.$W_1;
    },
    set_field: function SP_ChangeQuery$set_field(value) {
        this.$W_1 = value;
        return value;
    },
    get_file: function SP_ChangeQuery$get_file() {
        return this.$17_1;
    },
    set_file: function SP_ChangeQuery$set_file(value) {
        this.$17_1 = value;
        return value;
    },
    get_folder: function SP_ChangeQuery$get_folder() {
        return this.$18_1;
    },
    set_folder: function SP_ChangeQuery$set_folder(value) {
        this.$18_1 = value;
        return value;
    },
    get_group: function SP_ChangeQuery$get_group() {
        return this.$G_1;
    },
    set_group: function SP_ChangeQuery$set_group(value) {
        this.$G_1 = value;
        return value;
    },
    get_groupMembershipAdd: function SP_ChangeQuery$get_groupMembershipAdd() {
        return this.$19_1;
    },
    set_groupMembershipAdd: function SP_ChangeQuery$set_groupMembershipAdd(value) {
        this.$19_1 = value;
        return value;
    },
    get_groupMembershipDelete: function SP_ChangeQuery$get_groupMembershipDelete() {
        return this.$1A_1;
    },
    set_groupMembershipDelete: function SP_ChangeQuery$set_groupMembershipDelete(value) {
        this.$1A_1 = value;
        return value;
    },
    get_item: function SP_ChangeQuery$get_item() {
        return this.$1B_1;
    },
    set_item: function SP_ChangeQuery$set_item(value) {
        this.$1B_1 = value;
        return value;
    },
    get_list: function SP_ChangeQuery$get_list() {
        return this.$H_1;
    },
    set_list: function SP_ChangeQuery$set_list(value) {
        this.$H_1 = value;
        return value;
    },
    get_move: function SP_ChangeQuery$get_move() {
        return this.$1G_1;
    },
    set_move: function SP_ChangeQuery$set_move(value) {
        this.$1G_1 = value;
        return value;
    },
    get_navigation: function SP_ChangeQuery$get_navigation() {
        return this.$1H_1;
    },
    set_navigation: function SP_ChangeQuery$set_navigation(value) {
        this.$1H_1 = value;
        return value;
    },
    get_rename: function SP_ChangeQuery$get_rename() {
        return this.$1M_1;
    },
    set_rename: function SP_ChangeQuery$set_rename(value) {
        this.$1M_1 = value;
        return value;
    },
    get_restore: function SP_ChangeQuery$get_restore() {
        return this.$1N_1;
    },
    set_restore: function SP_ChangeQuery$set_restore(value) {
        this.$1N_1 = value;
        return value;
    },
    get_roleAssignmentAdd: function SP_ChangeQuery$get_roleAssignmentAdd() {
        return this.$1O_1;
    },
    set_roleAssignmentAdd: function SP_ChangeQuery$set_roleAssignmentAdd(value) {
        this.$1O_1 = value;
        return value;
    },
    get_roleAssignmentDelete: function SP_ChangeQuery$get_roleAssignmentDelete() {
        return this.$1P_1;
    },
    set_roleAssignmentDelete: function SP_ChangeQuery$set_roleAssignmentDelete(value) {
        this.$1P_1 = value;
        return value;
    },
    get_roleDefinitionAdd: function SP_ChangeQuery$get_roleDefinitionAdd() {
        return this.$1Q_1;
    },
    set_roleDefinitionAdd: function SP_ChangeQuery$set_roleDefinitionAdd(value) {
        this.$1Q_1 = value;
        return value;
    },
    get_roleDefinitionDelete: function SP_ChangeQuery$get_roleDefinitionDelete() {
        return this.$1R_1;
    },
    set_roleDefinitionDelete: function SP_ChangeQuery$set_roleDefinitionDelete(value) {
        this.$1R_1 = value;
        return value;
    },
    get_roleDefinitionUpdate: function SP_ChangeQuery$get_roleDefinitionUpdate() {
        return this.$1S_1;
    },
    set_roleDefinitionUpdate: function SP_ChangeQuery$set_roleDefinitionUpdate(value) {
        this.$1S_1 = value;
        return value;
    },
    get_securityPolicy: function SP_ChangeQuery$get_securityPolicy() {
        return this.$1T_1;
    },
    set_securityPolicy: function SP_ChangeQuery$set_securityPolicy(value) {
        this.$1T_1 = value;
        return value;
    },
    get_site: function SP_ChangeQuery$get_site() {
        return this.$N_1;
    },
    set_site: function SP_ChangeQuery$set_site(value) {
        this.$N_1 = value;
        return value;
    },
    get_systemUpdate: function SP_ChangeQuery$get_systemUpdate() {
        return this.$1U_1;
    },
    set_systemUpdate: function SP_ChangeQuery$set_systemUpdate(value) {
        this.$1U_1 = value;
        return value;
    },
    get_update: function SP_ChangeQuery$get_update() {
        return this.$1X_1;
    },
    set_update: function SP_ChangeQuery$set_update(value) {
        this.$1X_1 = value;
        return value;
    },
    get_user: function SP_ChangeQuery$get_user() {
        return this.$d_1;
    },
    set_user: function SP_ChangeQuery$set_user(value) {
        this.$d_1 = value;
        return value;
    },
    get_view: function SP_ChangeQuery$get_view() {
        return this.$1Y_1;
    },
    set_view: function SP_ChangeQuery$set_view(value) {
        this.$1Y_1 = value;
        return value;
    },
    get_web: function SP_ChangeQuery$get_web() {
        return this.$F_1;
    },
    set_web: function SP_ChangeQuery$set_web(value) {
        this.$F_1 = value;
        return value;
    },
    get_typeId: function SP_ChangeQuery$get_typeId() {
        return '{887a7218-1232-4cfc-b78f-88d54e9d8ec7}';
    },
    writeToXml: function SP_ChangeQuery$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['Add', 'Alert', 'ChangeTokenEnd', 'ChangeTokenStart', 'ContentType', 'DeleteObject', 'Field', 'File', 'Folder', 'Group', 'GroupMembershipAdd', 'GroupMembershipDelete', 'Item', 'List', 'Move', 'Navigation', 'Rename', 'Restore', 'RoleAssignmentAdd', 'RoleAssignmentDelete', 'RoleDefinitionAdd', 'RoleDefinitionDelete', 'RoleDefinitionUpdate', 'SecurityPolicy', 'Site', 'SystemUpdate', 'Update', 'User', 'View', 'Web'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_ChangeQuery$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Add;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$z_1 = $v_0;
            delete parentNode.Add;
        }
        $v_0 = parentNode.Alert;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$10_1 = $v_0;
            delete parentNode.Alert;
        }
        $v_0 = parentNode.ChangeTokenEnd;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$26_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.ChangeTokenEnd;
        }
        $v_0 = parentNode.ChangeTokenStart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$27_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.ChangeTokenStart;
        }
        $v_0 = parentNode.ContentType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$14_1 = $v_0;
            delete parentNode.ContentType;
        }
        $v_0 = parentNode.DeleteObject;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$16_1 = $v_0;
            delete parentNode.DeleteObject;
        }
        $v_0 = parentNode.Field;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$W_1 = $v_0;
            delete parentNode.Field;
        }
        $v_0 = parentNode.File;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$17_1 = $v_0;
            delete parentNode.File;
        }
        $v_0 = parentNode.Folder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$18_1 = $v_0;
            delete parentNode.Folder;
        }
        $v_0 = parentNode.Group;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$G_1 = $v_0;
            delete parentNode.Group;
        }
        $v_0 = parentNode.GroupMembershipAdd;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$19_1 = $v_0;
            delete parentNode.GroupMembershipAdd;
        }
        $v_0 = parentNode.GroupMembershipDelete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1A_1 = $v_0;
            delete parentNode.GroupMembershipDelete;
        }
        $v_0 = parentNode.Item;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1B_1 = $v_0;
            delete parentNode.Item;
        }
        $v_0 = parentNode.List;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$H_1 = $v_0;
            delete parentNode.List;
        }
        $v_0 = parentNode.Move;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1G_1 = $v_0;
            delete parentNode.Move;
        }
        $v_0 = parentNode.Navigation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1H_1 = $v_0;
            delete parentNode.Navigation;
        }
        $v_0 = parentNode.Rename;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1M_1 = $v_0;
            delete parentNode.Rename;
        }
        $v_0 = parentNode.Restore;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1N_1 = $v_0;
            delete parentNode.Restore;
        }
        $v_0 = parentNode.RoleAssignmentAdd;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1O_1 = $v_0;
            delete parentNode.RoleAssignmentAdd;
        }
        $v_0 = parentNode.RoleAssignmentDelete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1P_1 = $v_0;
            delete parentNode.RoleAssignmentDelete;
        }
        $v_0 = parentNode.RoleDefinitionAdd;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1Q_1 = $v_0;
            delete parentNode.RoleDefinitionAdd;
        }
        $v_0 = parentNode.RoleDefinitionDelete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1R_1 = $v_0;
            delete parentNode.RoleDefinitionDelete;
        }
        $v_0 = parentNode.RoleDefinitionUpdate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1S_1 = $v_0;
            delete parentNode.RoleDefinitionUpdate;
        }
        $v_0 = parentNode.SecurityPolicy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1T_1 = $v_0;
            delete parentNode.SecurityPolicy;
        }
        $v_0 = parentNode.Site;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$N_1 = $v_0;
            delete parentNode.Site;
        }
        $v_0 = parentNode.SystemUpdate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1U_1 = $v_0;
            delete parentNode.SystemUpdate;
        }
        $v_0 = parentNode.Update;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1X_1 = $v_0;
            delete parentNode.Update;
        }
        $v_0 = parentNode.User;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$d_1 = $v_0;
            delete parentNode.User;
        }
        $v_0 = parentNode.View;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1Y_1 = $v_0;
            delete parentNode.View;
        }
        $v_0 = parentNode.Web;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$F_1 = $v_0;
            delete parentNode.Web;
        }
    }
};
SP.ChangeSite = function SP_ChangeSite(context, objectPath) {
    SP.ChangeSite.initializeBase(this, [context, objectPath]);
};
SP.ChangeToken = function SP_ChangeToken() {
    SP.ChangeToken.initializeBase(this);
};
SP.ChangeToken.prototype = {
    $c_1: null,
    get_stringValue: function SP_ChangeToken$get_stringValue() {
        return this.$c_1;
    },
    set_stringValue: function SP_ChangeToken$set_stringValue(value) {
        this.$c_1 = value;
        return value;
    },
    get_typeId: function SP_ChangeToken$get_typeId() {
        return '{41c5be82-b5bf-4b5a-9712-97111fb87686}';
    },
    writeToXml: function SP_ChangeToken$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['StringValue'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_ChangeToken$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.StringValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$c_1 = $v_0;
            delete parentNode.StringValue;
        }
    }
};
SP.ChangeUser = function SP_ChangeUser(context, objectPath) {
    SP.ChangeUser.initializeBase(this, [context, objectPath]);
};
SP.ChangeUser.prototype = {
    get_activate: function SP_ChangeUser$get_activate() {
        this.checkUninitializedProperty('Activate');
        return ((this.get_objectData()).get_properties())['Activate'];
    },
    get_userId: function SP_ChangeUser$get_userId() {
        this.checkUninitializedProperty('UserId');
        return ((this.get_objectData()).get_properties())['UserId'];
    },
    initPropertiesFromJson: function SP_ChangeUser$initPropertiesFromJson(parentNode) {
        SP.Change.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Activate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Activate'] = $v_0;
            delete parentNode.Activate;
        }
        $v_0 = parentNode.UserId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['UserId'] = $v_0;
            delete parentNode.UserId;
        }
    }
};
SP.ChangeUserPropertyNames = function SP_ChangeUserPropertyNames() {
};
SP.ChangeView = function SP_ChangeView(context, objectPath) {
    SP.ChangeView.initializeBase(this, [context, objectPath]);
};
SP.ChangeView.prototype = {
    get_viewId: function SP_ChangeView$get_viewId() {
        this.checkUninitializedProperty('ViewId');
        return ((this.get_objectData()).get_properties())['ViewId'];
    },
    get_listId: function SP_ChangeView$get_listId() {
        this.checkUninitializedProperty('ListId');
        return ((this.get_objectData()).get_properties())['ListId'];
    },
    get_webId: function SP_ChangeView$get_webId() {
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData()).get_properties())['WebId'];
    },
    initPropertiesFromJson: function SP_ChangeView$initPropertiesFromJson(parentNode) {
        SP.Change.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ViewId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ViewId'] = $v_0;
            delete parentNode.ViewId;
        }
        $v_0 = parentNode.ListId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ListId'] = $v_0;
            delete parentNode.ListId;
        }
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WebId'] = $v_0;
            delete parentNode.WebId;
        }
    }
};
SP.ChangeViewPropertyNames = function SP_ChangeViewPropertyNames() {
};
SP.ChangeWeb = function SP_ChangeWeb(context, objectPath) {
    SP.ChangeWeb.initializeBase(this, [context, objectPath]);
};
SP.ChangeWeb.prototype = {
    get_webId: function SP_ChangeWeb$get_webId() {
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData()).get_properties())['WebId'];
    },
    initPropertiesFromJson: function SP_ChangeWeb$initPropertiesFromJson(parentNode) {
        SP.Change.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WebId'] = $v_0;
            delete parentNode.WebId;
        }
    }
};
SP.ChangeWebPropertyNames = function SP_ChangeWebPropertyNames() {
};
SP.CompatibilityRange = function SP_CompatibilityRange(context, objectPath) {
    SP.CompatibilityRange.initializeBase(this, [context, objectPath]);
};
SP.ContentType = function SP_ContentType(context, objectPath) {
    SP.ContentType.initializeBase(this, [context, objectPath]);
};
SP.ContentType.prototype = {
    $7_1: function SP_ContentType$$7_1($p0) {
        if ($p0) {
            ((this.get_objectData()).get_properties())['Description'] = $p0.$3_1;
            ((this.get_objectData()).get_properties())['Group'] = $p0.$G_1;
            ((this.get_objectData()).get_properties())['Name'] = $p0.$6_1;
        }
    },
    get_description: function SP_ContentType$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData()).get_properties())['Description'];
    },
    set_description: function SP_ContentType$set_description(value) {
        ((this.get_objectData()).get_properties())['Description'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    get_displayFormTemplateName: function SP_ContentType$get_displayFormTemplateName() {
        this.checkUninitializedProperty('DisplayFormTemplateName');
        return ((this.get_objectData()).get_properties())['DisplayFormTemplateName'];
    },
    set_displayFormTemplateName: function SP_ContentType$set_displayFormTemplateName(value) {
        ((this.get_objectData()).get_properties())['DisplayFormTemplateName'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DisplayFormTemplateName', value));
        }
        return value;
    },
    get_displayFormUrl: function SP_ContentType$get_displayFormUrl() {
        this.checkUninitializedProperty('DisplayFormUrl');
        return ((this.get_objectData()).get_properties())['DisplayFormUrl'];
    },
    set_displayFormUrl: function SP_ContentType$set_displayFormUrl(value) {
        ((this.get_objectData()).get_properties())['DisplayFormUrl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DisplayFormUrl', value));
        }
        return value;
    },
    get_documentTemplate: function SP_ContentType$get_documentTemplate() {
        this.checkUninitializedProperty('DocumentTemplate');
        return ((this.get_objectData()).get_properties())['DocumentTemplate'];
    },
    set_documentTemplate: function SP_ContentType$set_documentTemplate(value) {
        ((this.get_objectData()).get_properties())['DocumentTemplate'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DocumentTemplate', value));
        }
        return value;
    },
    get_documentTemplateUrl: function SP_ContentType$get_documentTemplateUrl() {
        this.checkUninitializedProperty('DocumentTemplateUrl');
        return ((this.get_objectData()).get_properties())['DocumentTemplateUrl'];
    },
    get_editFormTemplateName: function SP_ContentType$get_editFormTemplateName() {
        this.checkUninitializedProperty('EditFormTemplateName');
        return ((this.get_objectData()).get_properties())['EditFormTemplateName'];
    },
    set_editFormTemplateName: function SP_ContentType$set_editFormTemplateName(value) {
        ((this.get_objectData()).get_properties())['EditFormTemplateName'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'EditFormTemplateName', value));
        }
        return value;
    },
    get_editFormUrl: function SP_ContentType$get_editFormUrl() {
        this.checkUninitializedProperty('EditFormUrl');
        return ((this.get_objectData()).get_properties())['EditFormUrl'];
    },
    set_editFormUrl: function SP_ContentType$set_editFormUrl(value) {
        ((this.get_objectData()).get_properties())['EditFormUrl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'EditFormUrl', value));
        }
        return value;
    },
    get_fieldLinks: function SP_ContentType$get_fieldLinks() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['FieldLinks'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FieldLinkCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'FieldLinks'));
            ((this.get_objectData()).get_clientObjectProperties())['FieldLinks'] = $v_0;
        }
        return $v_0;
    },
    get_fields: function SP_ContentType$get_fields() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Fields'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Fields'));
            ((this.get_objectData()).get_clientObjectProperties())['Fields'] = $v_0;
        }
        return $v_0;
    },
    get_group: function SP_ContentType$get_group() {
        this.checkUninitializedProperty('Group');
        return ((this.get_objectData()).get_properties())['Group'];
    },
    set_group: function SP_ContentType$set_group(value) {
        ((this.get_objectData()).get_properties())['Group'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Group', value));
        }
        return value;
    },
    get_hidden: function SP_ContentType$get_hidden() {
        this.checkUninitializedProperty('Hidden');
        return ((this.get_objectData()).get_properties())['Hidden'];
    },
    set_hidden: function SP_ContentType$set_hidden(value) {
        ((this.get_objectData()).get_properties())['Hidden'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Hidden', value));
        }
        return value;
    },
    get_id: function SP_ContentType$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_jsLink: function SP_ContentType$get_jsLink() {
        this.checkUninitializedProperty('JSLink');
        return ((this.get_objectData()).get_properties())['JSLink'];
    },
    set_jsLink: function SP_ContentType$set_jsLink(value) {
        ((this.get_objectData()).get_properties())['JSLink'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'JSLink', value));
        }
        return value;
    },
    get_mobileDisplayFormUrl: function SP_ContentType$get_mobileDisplayFormUrl() {
        this.checkUninitializedProperty('MobileDisplayFormUrl');
        return ((this.get_objectData()).get_properties())['MobileDisplayFormUrl'];
    },
    set_mobileDisplayFormUrl: function SP_ContentType$set_mobileDisplayFormUrl(value) {
        ((this.get_objectData()).get_properties())['MobileDisplayFormUrl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'MobileDisplayFormUrl', value));
        }
        return value;
    },
    get_mobileEditFormUrl: function SP_ContentType$get_mobileEditFormUrl() {
        this.checkUninitializedProperty('MobileEditFormUrl');
        return ((this.get_objectData()).get_properties())['MobileEditFormUrl'];
    },
    set_mobileEditFormUrl: function SP_ContentType$set_mobileEditFormUrl(value) {
        ((this.get_objectData()).get_properties())['MobileEditFormUrl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'MobileEditFormUrl', value));
        }
        return value;
    },
    get_mobileNewFormUrl: function SP_ContentType$get_mobileNewFormUrl() {
        this.checkUninitializedProperty('MobileNewFormUrl');
        return ((this.get_objectData()).get_properties())['MobileNewFormUrl'];
    },
    set_mobileNewFormUrl: function SP_ContentType$set_mobileNewFormUrl(value) {
        ((this.get_objectData()).get_properties())['MobileNewFormUrl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'MobileNewFormUrl', value));
        }
        return value;
    },
    get_name: function SP_ContentType$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    set_name: function SP_ContentType$set_name(value) {
        ((this.get_objectData()).get_properties())['Name'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    get_newFormTemplateName: function SP_ContentType$get_newFormTemplateName() {
        this.checkUninitializedProperty('NewFormTemplateName');
        return ((this.get_objectData()).get_properties())['NewFormTemplateName'];
    },
    set_newFormTemplateName: function SP_ContentType$set_newFormTemplateName(value) {
        ((this.get_objectData()).get_properties())['NewFormTemplateName'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'NewFormTemplateName', value));
        }
        return value;
    },
    get_newFormUrl: function SP_ContentType$get_newFormUrl() {
        this.checkUninitializedProperty('NewFormUrl');
        return ((this.get_objectData()).get_properties())['NewFormUrl'];
    },
    set_newFormUrl: function SP_ContentType$set_newFormUrl(value) {
        ((this.get_objectData()).get_properties())['NewFormUrl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'NewFormUrl', value));
        }
        return value;
    },
    get_parent: function SP_ContentType$get_parent() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Parent'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ContentType(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Parent'));
            ((this.get_objectData()).get_clientObjectProperties())['Parent'] = $v_0;
        }
        return $v_0;
    },
    get_readOnly: function SP_ContentType$get_readOnly() {
        this.checkUninitializedProperty('ReadOnly');
        return ((this.get_objectData()).get_properties())['ReadOnly'];
    },
    set_readOnly: function SP_ContentType$set_readOnly(value) {
        ((this.get_objectData()).get_properties())['ReadOnly'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ReadOnly', value));
        }
        return value;
    },
    get_schemaXml: function SP_ContentType$get_schemaXml() {
        this.checkUninitializedProperty('SchemaXml');
        return ((this.get_objectData()).get_properties())['SchemaXml'];
    },
    get_schemaXmlWithResourceTokens: function SP_ContentType$get_schemaXmlWithResourceTokens() {
        this.checkUninitializedProperty('SchemaXmlWithResourceTokens');
        return ((this.get_objectData()).get_properties())['SchemaXmlWithResourceTokens'];
    },
    set_schemaXmlWithResourceTokens: function SP_ContentType$set_schemaXmlWithResourceTokens(value) {
        ((this.get_objectData()).get_properties())['SchemaXmlWithResourceTokens'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'SchemaXmlWithResourceTokens', value));
        }
        return value;
    },
    get_scope: function SP_ContentType$get_scope() {
        this.checkUninitializedProperty('Scope');
        return ((this.get_objectData()).get_properties())['Scope'];
    },
    get_sealed: function SP_ContentType$get_sealed() {
        this.checkUninitializedProperty('Sealed');
        return ((this.get_objectData()).get_properties())['Sealed'];
    },
    set_sealed: function SP_ContentType$set_sealed(value) {
        ((this.get_objectData()).get_properties())['Sealed'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Sealed', value));
        }
        return value;
    },
    get_stringId: function SP_ContentType$get_stringId() {
        this.checkUninitializedProperty('StringId');
        return ((this.get_objectData()).get_properties())['StringId'];
    },
    get_workflowAssociations: function SP_ContentType$get_workflowAssociations() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['WorkflowAssociations'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Workflow.WorkflowAssociationCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'WorkflowAssociations'));
            ((this.get_objectData()).get_clientObjectProperties())['WorkflowAssociations'] = $v_0;
        }
        return $v_0;
    },
    initPropertiesFromJson: function SP_ContentType$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Description'] = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.DisplayFormTemplateName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DisplayFormTemplateName'] = $v_0;
            delete parentNode.DisplayFormTemplateName;
        }
        $v_0 = parentNode.DisplayFormUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DisplayFormUrl'] = $v_0;
            delete parentNode.DisplayFormUrl;
        }
        $v_0 = parentNode.DocumentTemplate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DocumentTemplate'] = $v_0;
            delete parentNode.DocumentTemplate;
        }
        $v_0 = parentNode.DocumentTemplateUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DocumentTemplateUrl'] = $v_0;
            delete parentNode.DocumentTemplateUrl;
        }
        $v_0 = parentNode.EditFormTemplateName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EditFormTemplateName'] = $v_0;
            delete parentNode.EditFormTemplateName;
        }
        $v_0 = parentNode.EditFormUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EditFormUrl'] = $v_0;
            delete parentNode.EditFormUrl;
        }
        $v_0 = parentNode.FieldLinks;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('FieldLinks', this.get_fieldLinks(), $v_0);
            (this.get_fieldLinks()).fromJson($v_0);
            delete parentNode.FieldLinks;
        }
        $v_0 = parentNode.Fields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Fields', this.get_fields(), $v_0);
            (this.get_fields()).fromJson($v_0);
            delete parentNode.Fields;
        }
        $v_0 = parentNode.Group;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Group'] = $v_0;
            delete parentNode.Group;
        }
        $v_0 = parentNode.Hidden;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Hidden'] = $v_0;
            delete parentNode.Hidden;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.JSLink;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['JSLink'] = $v_0;
            delete parentNode.JSLink;
        }
        $v_0 = parentNode.MobileDisplayFormUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['MobileDisplayFormUrl'] = $v_0;
            delete parentNode.MobileDisplayFormUrl;
        }
        $v_0 = parentNode.MobileEditFormUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['MobileEditFormUrl'] = $v_0;
            delete parentNode.MobileEditFormUrl;
        }
        $v_0 = parentNode.MobileNewFormUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['MobileNewFormUrl'] = $v_0;
            delete parentNode.MobileNewFormUrl;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.NewFormTemplateName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['NewFormTemplateName'] = $v_0;
            delete parentNode.NewFormTemplateName;
        }
        $v_0 = parentNode.NewFormUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['NewFormUrl'] = $v_0;
            delete parentNode.NewFormUrl;
        }
        $v_0 = parentNode.Parent;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Parent', this.get_parent(), $v_0);
            (this.get_parent()).fromJson($v_0);
            delete parentNode.Parent;
        }
        $v_0 = parentNode.ReadOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ReadOnly'] = $v_0;
            delete parentNode.ReadOnly;
        }
        $v_0 = parentNode.SchemaXml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SchemaXml'] = $v_0;
            delete parentNode.SchemaXml;
        }
        $v_0 = parentNode.SchemaXmlWithResourceTokens;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SchemaXmlWithResourceTokens'] = $v_0;
            delete parentNode.SchemaXmlWithResourceTokens;
        }
        $v_0 = parentNode.Scope;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Scope'] = $v_0;
            delete parentNode.Scope;
        }
        $v_0 = parentNode.Sealed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Sealed'] = $v_0;
            delete parentNode.Sealed;
        }
        $v_0 = parentNode.StringId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['StringId'] = $v_0;
            delete parentNode.StringId;
        }
        $v_0 = parentNode.WorkflowAssociations;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('WorkflowAssociations', this.get_workflowAssociations(), $v_0);
            (this.get_workflowAssociations()).fromJson($v_0);
            delete parentNode.WorkflowAssociations;
        }
    },
    update: function SP_ContentType$update(updateChildren) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', [updateChildren]);

        $v_0.addQuery($v_1);
    },
    deleteObject: function SP_ContentType$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
};
SP.ContentTypePropertyNames = function SP_ContentTypePropertyNames() {
};
SP.ContentTypeObjectPropertyNames = function SP_ContentTypeObjectPropertyNames() {
};
SP.ContentTypeCollection = function SP_ContentTypeCollection(context, objectPath) {
    SP.ContentTypeCollection.initializeBase(this, [context, objectPath]);
};
SP.ContentTypeCollection.prototype = {
    itemAt: function SP_ContentTypeCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_ContentTypeCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_ContentTypeCollection$get_childItemType() {
        return SP.ContentType;
    },
    getById: function SP_ContentTypeCollection$getById(contentTypeId) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetById'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetById'] = $v_2;
        }
        $v_1 = $v_2[contentTypeId];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.ContentType($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [contentTypeId]));
        $v_2[contentTypeId] = $v_1;
        return $v_1;
    },
    addExistingContentType: function SP_ContentTypeCollection$addExistingContentType(contentType) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.ContentType($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'AddExistingContentType', [contentType]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    add: function SP_ContentTypeCollection$add(parameters) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.ContentType($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [parameters]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        $v_1.$7_1(parameters);
        return $v_1;
    }
};
SP.ContentTypeCreationInformation = function SP_ContentTypeCreationInformation() {
    SP.ContentTypeCreationInformation.initializeBase(this);
};
SP.ContentTypeCreationInformation.prototype = {
    $3_1: null,
    $G_1: null,
    $2W_1: null,
    $6_1: null,
    $48_1: null,
    get_description: function SP_ContentTypeCreationInformation$get_description() {
        return this.$3_1;
    },
    set_description: function SP_ContentTypeCreationInformation$set_description(value) {
        this.$3_1 = value;
        return value;
    },
    get_group: function SP_ContentTypeCreationInformation$get_group() {
        return this.$G_1;
    },
    set_group: function SP_ContentTypeCreationInformation$set_group(value) {
        this.$G_1 = value;
        return value;
    },
    get_id: function SP_ContentTypeCreationInformation$get_id() {
        return this.$2W_1;
    },
    set_id: function SP_ContentTypeCreationInformation$set_id(value) {
        this.$2W_1 = value;
        return value;
    },
    get_name: function SP_ContentTypeCreationInformation$get_name() {
        return this.$6_1;
    },
    set_name: function SP_ContentTypeCreationInformation$set_name(value) {
        this.$6_1 = value;
        return value;
    },
    get_parentContentType: function SP_ContentTypeCreationInformation$get_parentContentType() {
        return this.$48_1;
    },
    set_parentContentType: function SP_ContentTypeCreationInformation$set_parentContentType(value) {
        this.$48_1 = value;
        return value;
    },
    get_typeId: function SP_ContentTypeCreationInformation$get_typeId() {
        return '{168f3091-4554-4f14-8866-b20d48e45b54}';
    },
    writeToXml: function SP_ContentTypeCreationInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['Description', 'Group', 'Id', 'Name', 'ParentContentType'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_ContentTypeCreationInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.Group;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$G_1 = $v_0;
            delete parentNode.Group;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2W_1 = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.ParentContentType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            delete parentNode.ParentContentType;
        }
    }
};
SP.ContentTypeId = function SP_ContentTypeId() {
    SP.ContentTypeId.initializeBase(this);
};
SP.ContentTypeId.prototype = {
    $c_1: null,
    toString: function SP_ContentTypeId$toString() {
        return this.$c_1;
    },
    get_stringValue: function SP_ContentTypeId$get_stringValue() {
        return this.$c_1;
    },
    get_typeId: function SP_ContentTypeId$get_typeId() {
        return '{da0f1e90-296f-480e-bc27-cefe51eff241}';
    },
    writeToXml: function SP_ContentTypeId$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['StringValue'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_ContentTypeId$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.StringValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$c_1 = $v_0;
            delete parentNode.StringValue;
        }
    }
};
SP.EventReceiverDefinition = function SP_EventReceiverDefinition(context, objectPath) {
    SP.EventReceiverDefinition.initializeBase(this, [context, objectPath]);
};
SP.EventReceiverDefinition.prototype = {
    get_receiverAssembly: function SP_EventReceiverDefinition$get_receiverAssembly() {
        this.checkUninitializedProperty('ReceiverAssembly');
        return ((this.get_objectData()).get_properties())['ReceiverAssembly'];
    },
    get_receiverClass: function SP_EventReceiverDefinition$get_receiverClass() {
        this.checkUninitializedProperty('ReceiverClass');
        return ((this.get_objectData()).get_properties())['ReceiverClass'];
    },
    get_receiverId: function SP_EventReceiverDefinition$get_receiverId() {
        this.checkUninitializedProperty('ReceiverId');
        return ((this.get_objectData()).get_properties())['ReceiverId'];
    },
    get_receiverName: function SP_EventReceiverDefinition$get_receiverName() {
        this.checkUninitializedProperty('ReceiverName');
        return ((this.get_objectData()).get_properties())['ReceiverName'];
    },
    get_sequenceNumber: function SP_EventReceiverDefinition$get_sequenceNumber() {
        this.checkUninitializedProperty('SequenceNumber');
        return ((this.get_objectData()).get_properties())['SequenceNumber'];
    },
    get_synchronization: function SP_EventReceiverDefinition$get_synchronization() {
        this.checkUninitializedProperty('Synchronization');
        return ((this.get_objectData()).get_properties())['Synchronization'];
    },
    get_eventType: function SP_EventReceiverDefinition$get_eventType() {
        this.checkUninitializedProperty('EventType');
        return ((this.get_objectData()).get_properties())['EventType'];
    },
    get_receiverUrl: function SP_EventReceiverDefinition$get_receiverUrl() {
        this.checkUninitializedProperty('ReceiverUrl');
        return ((this.get_objectData()).get_properties())['ReceiverUrl'];
    },
    initPropertiesFromJson: function SP_EventReceiverDefinition$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ReceiverAssembly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ReceiverAssembly'] = $v_0;
            delete parentNode.ReceiverAssembly;
        }
        $v_0 = parentNode.ReceiverClass;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ReceiverClass'] = $v_0;
            delete parentNode.ReceiverClass;
        }
        $v_0 = parentNode.ReceiverId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ReceiverId'] = $v_0;
            delete parentNode.ReceiverId;
        }
        $v_0 = parentNode.ReceiverName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ReceiverName'] = $v_0;
            delete parentNode.ReceiverName;
        }
        $v_0 = parentNode.SequenceNumber;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SequenceNumber'] = $v_0;
            delete parentNode.SequenceNumber;
        }
        $v_0 = parentNode.Synchronization;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Synchronization'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.Synchronization;
        }
        $v_0 = parentNode.EventType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EventType'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.EventType;
        }
        $v_0 = parentNode.ReceiverUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ReceiverUrl'] = $v_0;
            delete parentNode.ReceiverUrl;
        }
    },
    update: function SP_EventReceiverDefinition$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);

        $v_0.addQuery($v_1);
    },
    deleteObject: function SP_EventReceiverDefinition$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
};
SP.EventReceiverDefinitionPropertyNames = function SP_EventReceiverDefinitionPropertyNames() {
};
SP.EventReceiverDefinitionCollection = function SP_EventReceiverDefinitionCollection(context, objectPath) {
    SP.EventReceiverDefinitionCollection.initializeBase(this, [context, objectPath]);
};
SP.EventReceiverDefinitionCollection.prototype = {
    itemAt: function SP_EventReceiverDefinitionCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_EventReceiverDefinitionCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_EventReceiverDefinitionCollection$get_childItemType() {
        return SP.EventReceiverDefinition;
    },
    getById: function SP_EventReceiverDefinitionCollection$getById(eventReceiverId) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetById'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetById'] = $v_2;
        }
        $v_1 = $v_2[eventReceiverId.toString()];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.EventReceiverDefinition($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [eventReceiverId]));
        $v_2[eventReceiverId.toString()] = $v_1;
        var $v_3 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_3.get_id(), $v_1);
        $v_0.addQuery($v_3);
        return $v_1;
    },
    add: function SP_EventReceiverDefinitionCollection$add(eventReceiverCreationInformation) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.EventReceiverDefinition($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [eventReceiverCreationInformation]));
        return $v_1;
    }
};
SP.EventReceiverDefinitionCreationInformation = function SP_EventReceiverDefinitionCreationInformation() {
    SP.EventReceiverDefinitionCreationInformation.initializeBase(this);
};
SP.EventReceiverDefinitionCreationInformation.prototype = {
    $2q_1: null,
    $2r_1: null,
    $2s_1: null,
    $2w_1: 0,
    $32_1: 0,
    $2K_1: 0,
    $2t_1: null,
    get_receiverAssembly: function SP_EventReceiverDefinitionCreationInformation$get_receiverAssembly() {
        return this.$2q_1;
    },
    set_receiverAssembly: function SP_EventReceiverDefinitionCreationInformation$set_receiverAssembly(value) {
        this.$2q_1 = value;
        return value;
    },
    get_receiverClass: function SP_EventReceiverDefinitionCreationInformation$get_receiverClass() {
        return this.$2r_1;
    },
    set_receiverClass: function SP_EventReceiverDefinitionCreationInformation$set_receiverClass(value) {
        this.$2r_1 = value;
        return value;
    },
    get_receiverName: function SP_EventReceiverDefinitionCreationInformation$get_receiverName() {
        return this.$2s_1;
    },
    set_receiverName: function SP_EventReceiverDefinitionCreationInformation$set_receiverName(value) {
        this.$2s_1 = value;
        return value;
    },
    get_sequenceNumber: function SP_EventReceiverDefinitionCreationInformation$get_sequenceNumber() {
        return this.$2w_1;
    },
    set_sequenceNumber: function SP_EventReceiverDefinitionCreationInformation$set_sequenceNumber(value) {
        this.$2w_1 = value;
        return value;
    },
    get_synchronization: function SP_EventReceiverDefinitionCreationInformation$get_synchronization() {
        return this.$32_1;
    },
    set_synchronization: function SP_EventReceiverDefinitionCreationInformation$set_synchronization(value) {
        this.$32_1 = value;
        return value;
    },
    get_eventType: function SP_EventReceiverDefinitionCreationInformation$get_eventType() {
        return this.$2K_1;
    },
    set_eventType: function SP_EventReceiverDefinitionCreationInformation$set_eventType(value) {
        this.$2K_1 = value;
        return value;
    },
    get_receiverUrl: function SP_EventReceiverDefinitionCreationInformation$get_receiverUrl() {
        return this.$2t_1;
    },
    set_receiverUrl: function SP_EventReceiverDefinitionCreationInformation$set_receiverUrl(value) {
        this.$2t_1 = value;
        return value;
    },
    get_typeId: function SP_EventReceiverDefinitionCreationInformation$get_typeId() {
        return '{2c15382f-b6e4-41f6-8616-4cbe0080a5de}';
    },
    writeToXml: function SP_EventReceiverDefinitionCreationInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['ReceiverAssembly', 'ReceiverClass', 'ReceiverName', 'SequenceNumber', 'Synchronization', 'EventType', 'ReceiverUrl'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_EventReceiverDefinitionCreationInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ReceiverAssembly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2q_1 = $v_0;
            delete parentNode.ReceiverAssembly;
        }
        $v_0 = parentNode.ReceiverClass;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2r_1 = $v_0;
            delete parentNode.ReceiverClass;
        }
        $v_0 = parentNode.ReceiverName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2s_1 = $v_0;
            delete parentNode.ReceiverName;
        }
        $v_0 = parentNode.SequenceNumber;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2w_1 = $v_0;
            delete parentNode.SequenceNumber;
        }
        $v_0 = parentNode.Synchronization;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$32_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.Synchronization;
        }
        $v_0 = parentNode.EventType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2K_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.EventType;
        }
        $v_0 = parentNode.ReceiverUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2t_1 = $v_0;
            delete parentNode.ReceiverUrl;
        }
    }
};
SP.Feature = function SP_Feature(context, objectPath) {
    SP.Feature.initializeBase(this, [context, objectPath]);
};
SP.Feature.prototype = {
    get_definitionId: function SP_Feature$get_definitionId() {
        this.checkUninitializedProperty('DefinitionId');
        return ((this.get_objectData()).get_properties())['DefinitionId'];
    },
    initPropertiesFromJson: function SP_Feature$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.DefinitionId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DefinitionId'] = $v_0;
            delete parentNode.DefinitionId;
        }
    }
};
SP.FeaturePropertyNames = function SP_FeaturePropertyNames() {
};
SP.FeatureCollection = function SP_FeatureCollection(context, objectPath) {
    SP.FeatureCollection.initializeBase(this, [context, objectPath]);
};
SP.FeatureCollection.prototype = {
    itemAt: function SP_FeatureCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_FeatureCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_FeatureCollection$get_childItemType() {
        return SP.Feature;
    },
    getById: function SP_FeatureCollection$getById(featureId) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetById'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetById'] = $v_2;
        }
        $v_1 = $v_2[featureId.toString()];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.Feature($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [featureId]));
        $v_2[featureId.toString()] = $v_1;
        return $v_1;
    },
    add: function SP_FeatureCollection$add(featureId, force, featdefScope) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.Feature($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [featureId, force, featdefScope]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    remove: function SP_FeatureCollection$remove(featureId, force) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Remove', [featureId, force]);

        $v_0.addQuery($v_1);
    }
};
SP.Field = function SP_Field(context, objectPath) {
    SP.Field.initializeBase(this, [context, objectPath]);
};
SP.Field.prototype = {
    get_canBeDeleted: function SP_Field$get_canBeDeleted() {
        this.checkUninitializedProperty('CanBeDeleted');
        return ((this.get_objectData()).get_properties())['CanBeDeleted'];
    },
    get_defaultValue: function SP_Field$get_defaultValue() {
        this.checkUninitializedProperty('DefaultValue');
        return ((this.get_objectData()).get_properties())['DefaultValue'];
    },
    set_defaultValue: function SP_Field$set_defaultValue(value) {
        ((this.get_objectData()).get_properties())['DefaultValue'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DefaultValue', value));
        }
        return value;
    },
    get_description: function SP_Field$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData()).get_properties())['Description'];
    },
    set_description: function SP_Field$set_description(value) {
        ((this.get_objectData()).get_properties())['Description'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    get_direction: function SP_Field$get_direction() {
        this.checkUninitializedProperty('Direction');
        return ((this.get_objectData()).get_properties())['Direction'];
    },
    set_direction: function SP_Field$set_direction(value) {
        ((this.get_objectData()).get_properties())['Direction'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Direction', value));
        }
        return value;
    },
    get_enforceUniqueValues: function SP_Field$get_enforceUniqueValues() {
        this.checkUninitializedProperty('EnforceUniqueValues');
        return ((this.get_objectData()).get_properties())['EnforceUniqueValues'];
    },
    set_enforceUniqueValues: function SP_Field$set_enforceUniqueValues(value) {
        ((this.get_objectData()).get_properties())['EnforceUniqueValues'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'EnforceUniqueValues', value));
        }
        return value;
    },
    get_entityPropertyName: function SP_Field$get_entityPropertyName() {
        this.checkUninitializedProperty('EntityPropertyName');
        return ((this.get_objectData()).get_properties())['EntityPropertyName'];
    },
    get_filterable: function SP_Field$get_filterable() {
        this.checkUninitializedProperty('Filterable');
        return ((this.get_objectData()).get_properties())['Filterable'];
    },
    get_fromBaseType: function SP_Field$get_fromBaseType() {
        this.checkUninitializedProperty('FromBaseType');
        return ((this.get_objectData()).get_properties())['FromBaseType'];
    },
    get_group: function SP_Field$get_group() {
        this.checkUninitializedProperty('Group');
        return ((this.get_objectData()).get_properties())['Group'];
    },
    set_group: function SP_Field$set_group(value) {
        ((this.get_objectData()).get_properties())['Group'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Group', value));
        }
        return value;
    },
    get_hidden: function SP_Field$get_hidden() {
        this.checkUninitializedProperty('Hidden');
        return ((this.get_objectData()).get_properties())['Hidden'];
    },
    set_hidden: function SP_Field$set_hidden(value) {
        ((this.get_objectData()).get_properties())['Hidden'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Hidden', value));
        }
        return value;
    },
    get_id: function SP_Field$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_indexed: function SP_Field$get_indexed() {
        this.checkUninitializedProperty('Indexed');
        return ((this.get_objectData()).get_properties())['Indexed'];
    },
    set_indexed: function SP_Field$set_indexed(value) {
        ((this.get_objectData()).get_properties())['Indexed'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Indexed', value));
        }
        return value;
    },
    get_internalName: function SP_Field$get_internalName() {
        this.checkUninitializedProperty('InternalName');
        return ((this.get_objectData()).get_properties())['InternalName'];
    },
    get_jsLink: function SP_Field$get_jsLink() {
        this.checkUninitializedProperty('JSLink');
        return ((this.get_objectData()).get_properties())['JSLink'];
    },
    set_jsLink: function SP_Field$set_jsLink(value) {
        ((this.get_objectData()).get_properties())['JSLink'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'JSLink', value));
        }
        return value;
    },
    get_readOnlyField: function SP_Field$get_readOnlyField() {
        this.checkUninitializedProperty('ReadOnlyField');
        return ((this.get_objectData()).get_properties())['ReadOnlyField'];
    },
    set_readOnlyField: function SP_Field$set_readOnlyField(value) {
        ((this.get_objectData()).get_properties())['ReadOnlyField'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ReadOnlyField', value));
        }
        return value;
    },
    get_required: function SP_Field$get_required() {
        this.checkUninitializedProperty('Required');
        return ((this.get_objectData()).get_properties())['Required'];
    },
    set_required: function SP_Field$set_required(value) {
        ((this.get_objectData()).get_properties())['Required'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Required', value));
        }
        return value;
    },
    get_schemaXml: function SP_Field$get_schemaXml() {
        this.checkUninitializedProperty('SchemaXml');
        return ((this.get_objectData()).get_properties())['SchemaXml'];
    },
    set_schemaXml: function SP_Field$set_schemaXml(value) {
        ((this.get_objectData()).get_properties())['SchemaXml'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'SchemaXml', value));
        }
        return value;
    },
    get_schemaXmlWithResourceTokens: function SP_Field$get_schemaXmlWithResourceTokens() {
        this.checkUninitializedProperty('SchemaXmlWithResourceTokens');
        return ((this.get_objectData()).get_properties())['SchemaXmlWithResourceTokens'];
    },
    get_scope: function SP_Field$get_scope() {
        this.checkUninitializedProperty('Scope');
        return ((this.get_objectData()).get_properties())['Scope'];
    },
    get_sealed: function SP_Field$get_sealed() {
        this.checkUninitializedProperty('Sealed');
        return ((this.get_objectData()).get_properties())['Sealed'];
    },
    get_sortable: function SP_Field$get_sortable() {
        this.checkUninitializedProperty('Sortable');
        return ((this.get_objectData()).get_properties())['Sortable'];
    },
    get_staticName: function SP_Field$get_staticName() {
        this.checkUninitializedProperty('StaticName');
        return ((this.get_objectData()).get_properties())['StaticName'];
    },
    set_staticName: function SP_Field$set_staticName(value) {
        ((this.get_objectData()).get_properties())['StaticName'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'StaticName', value));
        }
        return value;
    },
    get_title: function SP_Field$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData()).get_properties())['Title'];
    },
    set_title: function SP_Field$set_title(value) {
        ((this.get_objectData()).get_properties())['Title'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    get_fieldTypeKind: function SP_Field$get_fieldTypeKind() {
        this.checkUninitializedProperty('FieldTypeKind');
        return ((this.get_objectData()).get_properties())['FieldTypeKind'];
    },
    set_fieldTypeKind: function SP_Field$set_fieldTypeKind(value) {
        ((this.get_objectData()).get_properties())['FieldTypeKind'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'FieldTypeKind', value));
        }
        return value;
    },
    get_typeAsString: function SP_Field$get_typeAsString() {
        this.checkUninitializedProperty('TypeAsString');
        return ((this.get_objectData()).get_properties())['TypeAsString'];
    },
    set_typeAsString: function SP_Field$set_typeAsString(value) {
        ((this.get_objectData()).get_properties())['TypeAsString'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'TypeAsString', value));
        }
        return value;
    },
    get_typeDisplayName: function SP_Field$get_typeDisplayName() {
        this.checkUninitializedProperty('TypeDisplayName');
        return ((this.get_objectData()).get_properties())['TypeDisplayName'];
    },
    get_typeShortDescription: function SP_Field$get_typeShortDescription() {
        this.checkUninitializedProperty('TypeShortDescription');
        return ((this.get_objectData()).get_properties())['TypeShortDescription'];
    },
    get_validationFormula: function SP_Field$get_validationFormula() {
        this.checkUninitializedProperty('ValidationFormula');
        return ((this.get_objectData()).get_properties())['ValidationFormula'];
    },
    set_validationFormula: function SP_Field$set_validationFormula(value) {
        ((this.get_objectData()).get_properties())['ValidationFormula'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ValidationFormula', value));
        }
        return value;
    },
    get_validationMessage: function SP_Field$get_validationMessage() {
        this.checkUninitializedProperty('ValidationMessage');
        return ((this.get_objectData()).get_properties())['ValidationMessage'];
    },
    set_validationMessage: function SP_Field$set_validationMessage(value) {
        ((this.get_objectData()).get_properties())['ValidationMessage'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ValidationMessage', value));
        }
        return value;
    },
    initPropertiesFromJson: function SP_Field$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.CanBeDeleted;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CanBeDeleted'] = $v_0;
            delete parentNode.CanBeDeleted;
        }
        $v_0 = parentNode.DefaultValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DefaultValue'] = $v_0;
            delete parentNode.DefaultValue;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Description'] = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.Direction;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Direction'] = $v_0;
            delete parentNode.Direction;
        }
        $v_0 = parentNode.EnforceUniqueValues;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EnforceUniqueValues'] = $v_0;
            delete parentNode.EnforceUniqueValues;
        }
        $v_0 = parentNode.EntityPropertyName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EntityPropertyName'] = $v_0;
            delete parentNode.EntityPropertyName;
        }
        $v_0 = parentNode.Filterable;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Filterable'] = $v_0;
            delete parentNode.Filterable;
        }
        $v_0 = parentNode.FromBaseType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['FromBaseType'] = $v_0;
            delete parentNode.FromBaseType;
        }
        $v_0 = parentNode.Group;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Group'] = $v_0;
            delete parentNode.Group;
        }
        $v_0 = parentNode.Hidden;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Hidden'] = $v_0;
            delete parentNode.Hidden;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.Indexed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Indexed'] = $v_0;
            delete parentNode.Indexed;
        }
        $v_0 = parentNode.InternalName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['InternalName'] = $v_0;
            delete parentNode.InternalName;
        }
        $v_0 = parentNode.JSLink;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['JSLink'] = $v_0;
            delete parentNode.JSLink;
        }
        $v_0 = parentNode.ReadOnlyField;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ReadOnlyField'] = $v_0;
            delete parentNode.ReadOnlyField;
        }
        $v_0 = parentNode.Required;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Required'] = $v_0;
            delete parentNode.Required;
        }
        $v_0 = parentNode.SchemaXml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SchemaXml'] = $v_0;
            delete parentNode.SchemaXml;
        }
        $v_0 = parentNode.SchemaXmlWithResourceTokens;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SchemaXmlWithResourceTokens'] = $v_0;
            delete parentNode.SchemaXmlWithResourceTokens;
        }
        $v_0 = parentNode.Scope;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Scope'] = $v_0;
            delete parentNode.Scope;
        }
        $v_0 = parentNode.Sealed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Sealed'] = $v_0;
            delete parentNode.Sealed;
        }
        $v_0 = parentNode.Sortable;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Sortable'] = $v_0;
            delete parentNode.Sortable;
        }
        $v_0 = parentNode.StaticName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['StaticName'] = $v_0;
            delete parentNode.StaticName;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Title'] = $v_0;
            delete parentNode.Title;
        }
        $v_0 = parentNode.FieldTypeKind;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['FieldTypeKind'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.FieldTypeKind;
        }
        $v_0 = parentNode.TypeAsString;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['TypeAsString'] = $v_0;
            delete parentNode.TypeAsString;
        }
        $v_0 = parentNode.TypeDisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['TypeDisplayName'] = $v_0;
            delete parentNode.TypeDisplayName;
        }
        $v_0 = parentNode.TypeShortDescription;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['TypeShortDescription'] = $v_0;
            delete parentNode.TypeShortDescription;
        }
        $v_0 = parentNode.ValidationFormula;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ValidationFormula'] = $v_0;
            delete parentNode.ValidationFormula;
        }
        $v_0 = parentNode.ValidationMessage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ValidationMessage'] = $v_0;
            delete parentNode.ValidationMessage;
        }
    },
    validateSetValue: function SP_Field$validateSetValue(item, value) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'ValidateSetValue', [item, value]);

        $v_0.addQuery($v_1);
    },
    updateAndPushChanges: function SP_Field$updateAndPushChanges(pushChangesToLists) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdateAndPushChanges', [pushChangesToLists]);

        $v_0.addQuery($v_1);
    },
    update: function SP_Field$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);

        $v_0.addQuery($v_1);
    },
    deleteObject: function SP_Field$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    },
    setShowInDisplayForm: function SP_Field$setShowInDisplayForm(value) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetShowInDisplayForm', [value]);

        $v_0.addQuery($v_1);
    },
    setShowInEditForm: function SP_Field$setShowInEditForm(value) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetShowInEditForm', [value]);

        $v_0.addQuery($v_1);
    },
    setShowInNewForm: function SP_Field$setShowInNewForm(value) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetShowInNewForm', [value]);

        $v_0.addQuery($v_1);
    }
};
SP.FieldPropertyNames = function SP_FieldPropertyNames() {
};
SP.FieldCalculated = function SP_FieldCalculated(context, objectPath) {
    SP.FieldCalculated.initializeBase(this, [context, objectPath]);
};
SP.FieldCalculated.prototype = {
    get_dateFormat: function SP_FieldCalculated$get_dateFormat() {
        this.checkUninitializedProperty('DateFormat');
        return ((this.get_objectData()).get_properties())['DateFormat'];
    },
    set_dateFormat: function SP_FieldCalculated$set_dateFormat(value) {
        ((this.get_objectData()).get_properties())['DateFormat'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DateFormat', value));
        }
        return value;
    },
    get_formula: function SP_FieldCalculated$get_formula() {
        this.checkUninitializedProperty('Formula');
        return ((this.get_objectData()).get_properties())['Formula'];
    },
    set_formula: function SP_FieldCalculated$set_formula(value) {
        ((this.get_objectData()).get_properties())['Formula'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Formula', value));
        }
        return value;
    },
    get_outputType: function SP_FieldCalculated$get_outputType() {
        this.checkUninitializedProperty('OutputType');
        return ((this.get_objectData()).get_properties())['OutputType'];
    },
    set_outputType: function SP_FieldCalculated$set_outputType(value) {
        ((this.get_objectData()).get_properties())['OutputType'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'OutputType', value));
        }
        return value;
    },
    initPropertiesFromJson: function SP_FieldCalculated$initPropertiesFromJson(parentNode) {
        SP.Field.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.DateFormat;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DateFormat'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.DateFormat;
        }
        $v_0 = parentNode.Formula;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Formula'] = $v_0;
            delete parentNode.Formula;
        }
        $v_0 = parentNode.OutputType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['OutputType'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.OutputType;
        }
    }
};
SP.FieldCalculatedPropertyNames = function SP_FieldCalculatedPropertyNames() {
};
SP.FieldCalculatedErrorValue = function SP_FieldCalculatedErrorValue() {
    SP.FieldCalculatedErrorValue.initializeBase(this);
};
SP.FieldCalculatedErrorValue.prototype = {
    $j_1: null,
    get_errorMessage: function SP_FieldCalculatedErrorValue$get_errorMessage() {
        return this.$j_1;
    },
    get_typeId: function SP_FieldCalculatedErrorValue$get_typeId() {
        return '{3387286b-36e3-4199-bdca-f20048ce8328}';
    },
    writeToXml: function SP_FieldCalculatedErrorValue$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['ErrorMessage'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_FieldCalculatedErrorValue$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ErrorMessage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$j_1 = $v_0;
            delete parentNode.ErrorMessage;
        }
    }
};
SP.FieldChoice = function SP_FieldChoice(context, objectPath) {
    SP.FieldChoice.initializeBase(this, [context, objectPath]);
};
SP.FieldChoice.prototype = {
    get_editFormat: function SP_FieldChoice$get_editFormat() {
        this.checkUninitializedProperty('EditFormat');
        return ((this.get_objectData()).get_properties())['EditFormat'];
    },
    set_editFormat: function SP_FieldChoice$set_editFormat(value) {
        ((this.get_objectData()).get_properties())['EditFormat'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'EditFormat', value));
        }
        return value;
    },
    initPropertiesFromJson: function SP_FieldChoice$initPropertiesFromJson(parentNode) {
        SP.FieldMultiChoice.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.EditFormat;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EditFormat'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.EditFormat;
        }
    }
};
SP.FieldChoicePropertyNames = function SP_FieldChoicePropertyNames() {
};
SP.FieldCollection = function SP_FieldCollection(context, objectPath) {
    SP.FieldCollection.initializeBase(this, [context, objectPath]);
};
SP.FieldCollection.prototype = {
    itemAt: function SP_FieldCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_FieldCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_FieldCollection$get_childItemType() {
        return SP.Field;
    },
    get_schemaXml: function SP_FieldCollection$get_schemaXml() {
        this.checkUninitializedProperty('SchemaXml');
        return ((this.get_objectData()).get_properties())['SchemaXml'];
    },
    getByTitle: function SP_FieldCollection$getByTitle(title) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByTitle'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetByTitle'] = $v_2;
        }
        $v_1 = $v_2[title];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.Field($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByTitle', [title]));
        $v_2[title] = $v_1;
        return $v_1;
    },
    getById: function SP_FieldCollection$getById(id) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetById'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetById'] = $v_2;
        }
        $v_1 = $v_2[id.toString()];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.Field($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [id]));
        $v_2[id.toString()] = $v_1;
        return $v_1;
    },
    initPropertiesFromJson: function SP_FieldCollection$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.SchemaXml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SchemaXml'] = $v_0;
            delete parentNode.SchemaXml;
        }
    },
    add: function SP_FieldCollection$add(field) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.Field($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [field]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    addDependentLookup: function SP_FieldCollection$addDependentLookup(displayName, primaryLookupField, lookupField) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.Field($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'AddDependentLookup', [displayName, primaryLookupField, lookupField]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    addFieldAsXml: function SP_FieldCollection$addFieldAsXml(schemaXml, addToDefaultView, options) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.Field($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'AddFieldAsXml', [schemaXml, addToDefaultView, options]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    getByInternalNameOrTitle: function SP_FieldCollection$getByInternalNameOrTitle(strName) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByInternalNameOrTitle'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetByInternalNameOrTitle'] = $v_2;
        }
        $v_1 = $v_2[strName];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.Field($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByInternalNameOrTitle', [strName]));
        $v_2[strName] = $v_1;
        return $v_1;
    }
};
SP.FieldCollectionPropertyNames = function SP_FieldCollectionPropertyNames() {
};
SP.FieldComputed = function SP_FieldComputed(context, objectPath) {
    SP.FieldComputed.initializeBase(this, [context, objectPath]);
};
SP.FieldComputed.prototype = {
    get_enableLookup: function SP_FieldComputed$get_enableLookup() {
        this.checkUninitializedProperty('EnableLookup');
        return ((this.get_objectData()).get_properties())['EnableLookup'];
    },
    set_enableLookup: function SP_FieldComputed$set_enableLookup(value) {
        ((this.get_objectData()).get_properties())['EnableLookup'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'EnableLookup', value));
        }
        return value;
    },
    initPropertiesFromJson: function SP_FieldComputed$initPropertiesFromJson(parentNode) {
        SP.Field.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.EnableLookup;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EnableLookup'] = $v_0;
            delete parentNode.EnableLookup;
        }
    }
};
SP.FieldComputedPropertyNames = function SP_FieldComputedPropertyNames() {
};
SP.FieldCurrency = function SP_FieldCurrency(context, objectPath) {
    SP.FieldCurrency.initializeBase(this, [context, objectPath]);
};
SP.FieldCurrency.prototype = {
    get_currencyLocaleId: function SP_FieldCurrency$get_currencyLocaleId() {
        this.checkUninitializedProperty('CurrencyLocaleId');
        return ((this.get_objectData()).get_properties())['CurrencyLocaleId'];
    },
    set_currencyLocaleId: function SP_FieldCurrency$set_currencyLocaleId(value) {
        ((this.get_objectData()).get_properties())['CurrencyLocaleId'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'CurrencyLocaleId', value));
        }
        return value;
    },
    initPropertiesFromJson: function SP_FieldCurrency$initPropertiesFromJson(parentNode) {
        SP.FieldNumber.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.CurrencyLocaleId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CurrencyLocaleId'] = $v_0;
            delete parentNode.CurrencyLocaleId;
        }
    }
};
SP.FieldCurrencyPropertyNames = function SP_FieldCurrencyPropertyNames() {
};
SP.FieldDateTime = function SP_FieldDateTime(context, objectPath) {
    SP.FieldDateTime.initializeBase(this, [context, objectPath]);
};
SP.FieldDateTime.prototype = {
    get_dateTimeCalendarType: function SP_FieldDateTime$get_dateTimeCalendarType() {
        this.checkUninitializedProperty('DateTimeCalendarType');
        return ((this.get_objectData()).get_properties())['DateTimeCalendarType'];
    },
    set_dateTimeCalendarType: function SP_FieldDateTime$set_dateTimeCalendarType(value) {
        ((this.get_objectData()).get_properties())['DateTimeCalendarType'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DateTimeCalendarType', value));
        }
        return value;
    },
    get_displayFormat: function SP_FieldDateTime$get_displayFormat() {
        this.checkUninitializedProperty('DisplayFormat');
        return ((this.get_objectData()).get_properties())['DisplayFormat'];
    },
    set_displayFormat: function SP_FieldDateTime$set_displayFormat(value) {
        ((this.get_objectData()).get_properties())['DisplayFormat'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DisplayFormat', value));
        }
        return value;
    },
    get_friendlyDisplayFormat: function SP_FieldDateTime$get_friendlyDisplayFormat() {
        this.checkUninitializedProperty('FriendlyDisplayFormat');
        return ((this.get_objectData()).get_properties())['FriendlyDisplayFormat'];
    },
    set_friendlyDisplayFormat: function SP_FieldDateTime$set_friendlyDisplayFormat(value) {
        ((this.get_objectData()).get_properties())['FriendlyDisplayFormat'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'FriendlyDisplayFormat', value));
        }
        return value;
    },
    initPropertiesFromJson: function SP_FieldDateTime$initPropertiesFromJson(parentNode) {
        SP.Field.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.DateTimeCalendarType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DateTimeCalendarType'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.DateTimeCalendarType;
        }
        $v_0 = parentNode.DisplayFormat;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DisplayFormat'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.DisplayFormat;
        }
        $v_0 = parentNode.FriendlyDisplayFormat;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['FriendlyDisplayFormat'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.FriendlyDisplayFormat;
        }
    }
};
SP.FieldDateTimePropertyNames = function SP_FieldDateTimePropertyNames() {
};
SP.FieldGeolocation = function SP_FieldGeolocation(context, objectPath) {
    SP.FieldGeolocation.initializeBase(this, [context, objectPath]);
};
SP.FieldGeolocationValue = function SP_FieldGeolocationValue() {
    this.$1C_1 = -99999;
    this.$1D_1 = -99999;
    SP.FieldGeolocationValue.initializeBase(this);
};
SP.FieldGeolocationValue.prototype = {
    $1y_1: 0,
    $2g_1: 0,
    get_altitude: function SP_FieldGeolocationValue$get_altitude() {
        return this.$1y_1;
    },
    set_altitude: function SP_FieldGeolocationValue$set_altitude(value) {
        this.$1y_1 = value;
        return value;
    },
    get_latitude: function SP_FieldGeolocationValue$get_latitude() {
        return this.$1C_1;
    },
    set_latitude: function SP_FieldGeolocationValue$set_latitude(value) {
        this.$1C_1 = value;
        return value;
    },
    get_longitude: function SP_FieldGeolocationValue$get_longitude() {
        return this.$1D_1;
    },
    set_longitude: function SP_FieldGeolocationValue$set_longitude(value) {
        this.$1D_1 = value;
        return value;
    },
    get_measure: function SP_FieldGeolocationValue$get_measure() {
        return this.$2g_1;
    },
    set_measure: function SP_FieldGeolocationValue$set_measure(value) {
        this.$2g_1 = value;
        return value;
    },
    get_typeId: function SP_FieldGeolocationValue$get_typeId() {
        return '{97650aff-7e7b-44be-ac6e-d559f7f897a2}';
    },
    writeToXml: function SP_FieldGeolocationValue$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['Altitude', 'Latitude', 'Longitude', 'Measure'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_FieldGeolocationValue$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Altitude;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1y_1 = $v_0;
            delete parentNode.Altitude;
        }
        $v_0 = parentNode.Latitude;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1C_1 = $v_0;
            delete parentNode.Latitude;
        }
        $v_0 = parentNode.Longitude;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1D_1 = $v_0;
            delete parentNode.Longitude;
        }
        $v_0 = parentNode.Measure;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2g_1 = $v_0;
            delete parentNode.Measure;
        }
    }
};
SP.FieldGuid = function SP_FieldGuid(context, objectPath) {
    SP.FieldGuid.initializeBase(this, [context, objectPath]);
};
SP.FieldLink = function SP_FieldLink(context, objectPath) {
    SP.FieldLink.initializeBase(this, [context, objectPath]);
};
SP.FieldLink.prototype = {
    $7_1: function SP_FieldLink$$7_1($p0) {
    },
    get_hidden: function SP_FieldLink$get_hidden() {
        this.checkUninitializedProperty('Hidden');
        return ((this.get_objectData()).get_properties())['Hidden'];
    },
    set_hidden: function SP_FieldLink$set_hidden(value) {
        ((this.get_objectData()).get_properties())['Hidden'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Hidden', value));
        }
        return value;
    },
    get_id: function SP_FieldLink$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_name: function SP_FieldLink$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    get_required: function SP_FieldLink$get_required() {
        this.checkUninitializedProperty('Required');
        return ((this.get_objectData()).get_properties())['Required'];
    },
    set_required: function SP_FieldLink$set_required(value) {
        ((this.get_objectData()).get_properties())['Required'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Required', value));
        }
        return value;
    },
    initPropertiesFromJson: function SP_FieldLink$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Hidden;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Hidden'] = $v_0;
            delete parentNode.Hidden;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.Required;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Required'] = $v_0;
            delete parentNode.Required;
        }
    },
    deleteObject: function SP_FieldLink$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
};
SP.FieldLinkPropertyNames = function SP_FieldLinkPropertyNames() {
};
SP.FieldLinkCollection = function SP_FieldLinkCollection(context, objectPath) {
    SP.FieldLinkCollection.initializeBase(this, [context, objectPath]);
};
SP.FieldLinkCollection.prototype = {
    itemAt: function SP_FieldLinkCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_FieldLinkCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_FieldLinkCollection$get_childItemType() {
        return SP.FieldLink;
    },
    getById: function SP_FieldLinkCollection$getById(id) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetById'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetById'] = $v_2;
        }
        $v_1 = $v_2[id.toString()];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.FieldLink($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [id]));
        $v_2[id.toString()] = $v_1;
        return $v_1;
    },
    add: function SP_FieldLinkCollection$add(parameters) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.FieldLink($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [parameters]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        $v_1.$7_1(parameters);
        return $v_1;
    },
    reorder: function SP_FieldLinkCollection$reorder(internalNames) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Reorder', [internalNames]);

        $v_0.addQuery($v_1);
    }
};
SP.FieldLinkCreationInformation = function SP_FieldLinkCreationInformation() {
    SP.FieldLinkCreationInformation.initializeBase(this);
};
SP.FieldLinkCreationInformation.prototype = {
    $W_1: null,
    get_field: function SP_FieldLinkCreationInformation$get_field() {
        return this.$W_1;
    },
    set_field: function SP_FieldLinkCreationInformation$set_field(value) {
        this.$W_1 = value;
        return value;
    },
    get_typeId: function SP_FieldLinkCreationInformation$get_typeId() {
        return '{63fb2c92-8f65-4bbb-a658-b6cd294403f4}';
    },
    writeToXml: function SP_FieldLinkCreationInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['Field'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_FieldLinkCreationInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Field;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            delete parentNode.Field;
        }
    }
};
SP.FieldLookup = function SP_FieldLookup(context, objectPath) {
    SP.FieldLookup.initializeBase(this, [context, objectPath]);
};
SP.FieldLookup.prototype = {
    get_allowMultipleValues: function SP_FieldLookup$get_allowMultipleValues() {
        this.checkUninitializedProperty('AllowMultipleValues');
        return ((this.get_objectData()).get_properties())['AllowMultipleValues'];
    },
    set_allowMultipleValues: function SP_FieldLookup$set_allowMultipleValues(value) {
        ((this.get_objectData()).get_properties())['AllowMultipleValues'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AllowMultipleValues', value));
        }
        return value;
    },
    get_isRelationship: function SP_FieldLookup$get_isRelationship() {
        this.checkUninitializedProperty('IsRelationship');
        return ((this.get_objectData()).get_properties())['IsRelationship'];
    },
    set_isRelationship: function SP_FieldLookup$set_isRelationship(value) {
        ((this.get_objectData()).get_properties())['IsRelationship'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'IsRelationship', value));
        }
        return value;
    },
    get_lookupField: function SP_FieldLookup$get_lookupField() {
        this.checkUninitializedProperty('LookupField');
        return ((this.get_objectData()).get_properties())['LookupField'];
    },
    set_lookupField: function SP_FieldLookup$set_lookupField(value) {
        ((this.get_objectData()).get_properties())['LookupField'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'LookupField', value));
        }
        return value;
    },
    get_lookupList: function SP_FieldLookup$get_lookupList() {
        this.checkUninitializedProperty('LookupList');
        return ((this.get_objectData()).get_properties())['LookupList'];
    },
    set_lookupList: function SP_FieldLookup$set_lookupList(value) {
        ((this.get_objectData()).get_properties())['LookupList'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'LookupList', value));
        }
        return value;
    },
    get_lookupWebId: function SP_FieldLookup$get_lookupWebId() {
        this.checkUninitializedProperty('LookupWebId');
        return ((this.get_objectData()).get_properties())['LookupWebId'];
    },
    set_lookupWebId: function SP_FieldLookup$set_lookupWebId(value) {
        ((this.get_objectData()).get_properties())['LookupWebId'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'LookupWebId', value));
        }
        return value;
    },
    get_primaryFieldId: function SP_FieldLookup$get_primaryFieldId() {
        this.checkUninitializedProperty('PrimaryFieldId');
        return ((this.get_objectData()).get_properties())['PrimaryFieldId'];
    },
    set_primaryFieldId: function SP_FieldLookup$set_primaryFieldId(value) {
        ((this.get_objectData()).get_properties())['PrimaryFieldId'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'PrimaryFieldId', value));
        }
        return value;
    },
    get_relationshipDeleteBehavior: function SP_FieldLookup$get_relationshipDeleteBehavior() {
        this.checkUninitializedProperty('RelationshipDeleteBehavior');
        return ((this.get_objectData()).get_properties())['RelationshipDeleteBehavior'];
    },
    set_relationshipDeleteBehavior: function SP_FieldLookup$set_relationshipDeleteBehavior(value) {
        ((this.get_objectData()).get_properties())['RelationshipDeleteBehavior'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'RelationshipDeleteBehavior', value));
        }
        return value;
    },
    initPropertiesFromJson: function SP_FieldLookup$initPropertiesFromJson(parentNode) {
        SP.Field.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AllowMultipleValues;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowMultipleValues'] = $v_0;
            delete parentNode.AllowMultipleValues;
        }
        $v_0 = parentNode.IsRelationship;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsRelationship'] = $v_0;
            delete parentNode.IsRelationship;
        }
        $v_0 = parentNode.LookupField;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['LookupField'] = $v_0;
            delete parentNode.LookupField;
        }
        $v_0 = parentNode.LookupList;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['LookupList'] = $v_0;
            delete parentNode.LookupList;
        }
        $v_0 = parentNode.LookupWebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['LookupWebId'] = $v_0;
            delete parentNode.LookupWebId;
        }
        $v_0 = parentNode.PrimaryFieldId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['PrimaryFieldId'] = $v_0;
            delete parentNode.PrimaryFieldId;
        }
        $v_0 = parentNode.RelationshipDeleteBehavior;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['RelationshipDeleteBehavior'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.RelationshipDeleteBehavior;
        }
    }
};
SP.FieldLookupPropertyNames = function SP_FieldLookupPropertyNames() {
};
SP.FieldLookupValue = function SP_FieldLookupValue() {
    SP.FieldLookupValue.initializeBase(this);
};
SP.FieldLookupValue.prototype = {
    $1E_1: 0,
    $2e_1: null,
    $5I_1: function SP_FieldLookupValue$$5I_1($p0) {
        this.$2e_1 = $p0;
    },
    get_lookupId: function SP_FieldLookupValue$get_lookupId() {
        return this.$1E_1;
    },
    set_lookupId: function SP_FieldLookupValue$set_lookupId(value) {
        this.$1E_1 = value;
        return value;
    },
    get_lookupValue: function SP_FieldLookupValue$get_lookupValue() {
        return this.$2e_1;
    },
    get_typeId: function SP_FieldLookupValue$get_typeId() {
        return '{f1d34cc0-9b50-4a78-be78-d5facfcccfb7}';
    },
    writeToXml: function SP_FieldLookupValue$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['LookupId', 'LookupValue'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_FieldLookupValue$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.LookupId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1E_1 = $v_0;
            delete parentNode.LookupId;
        }
        $v_0 = parentNode.LookupValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2e_1 = $v_0;
            delete parentNode.LookupValue;
        }
    }
};
SP.FieldMultiChoice = function SP_FieldMultiChoice(context, objectPath) {
    SP.FieldMultiChoice.initializeBase(this, [context, objectPath]);
};
SP.FieldMultiChoice.prototype = {
    get_fillInChoice: function SP_FieldMultiChoice$get_fillInChoice() {
        this.checkUninitializedProperty('FillInChoice');
        return ((this.get_objectData()).get_properties())['FillInChoice'];
    },
    set_fillInChoice: function SP_FieldMultiChoice$set_fillInChoice(value) {
        ((this.get_objectData()).get_properties())['FillInChoice'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'FillInChoice', value));
        }
        return value;
    },
    get_mappings: function SP_FieldMultiChoice$get_mappings() {
        this.checkUninitializedProperty('Mappings');
        return ((this.get_objectData()).get_properties())['Mappings'];
    },
    get_choices: function SP_FieldMultiChoice$get_choices() {
        this.checkUninitializedProperty('Choices');
        return ((this.get_objectData()).get_properties())['Choices'];
    },
    set_choices: function SP_FieldMultiChoice$set_choices(value) {
        ((this.get_objectData()).get_properties())['Choices'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Choices', value));
        }
        return value;
    },
    initPropertiesFromJson: function SP_FieldMultiChoice$initPropertiesFromJson(parentNode) {
        SP.Field.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.FillInChoice;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['FillInChoice'] = $v_0;
            delete parentNode.FillInChoice;
        }
        $v_0 = parentNode.Mappings;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Mappings'] = $v_0;
            delete parentNode.Mappings;
        }
        $v_0 = parentNode.Choices;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Choices'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.Choices;
        }
    }
};
SP.FieldMultiChoicePropertyNames = function SP_FieldMultiChoicePropertyNames() {
};
SP.FieldMultiLineText = function SP_FieldMultiLineText(context, objectPath) {
    SP.FieldMultiLineText.initializeBase(this, [context, objectPath]);
};
SP.FieldMultiLineText.prototype = {
    get_allowHyperlink: function SP_FieldMultiLineText$get_allowHyperlink() {
        this.checkUninitializedProperty('AllowHyperlink');
        return ((this.get_objectData()).get_properties())['AllowHyperlink'];
    },
    set_allowHyperlink: function SP_FieldMultiLineText$set_allowHyperlink(value) {
        ((this.get_objectData()).get_properties())['AllowHyperlink'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AllowHyperlink', value));
        }
        return value;
    },
    get_appendOnly: function SP_FieldMultiLineText$get_appendOnly() {
        this.checkUninitializedProperty('AppendOnly');
        return ((this.get_objectData()).get_properties())['AppendOnly'];
    },
    set_appendOnly: function SP_FieldMultiLineText$set_appendOnly(value) {
        ((this.get_objectData()).get_properties())['AppendOnly'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AppendOnly', value));
        }
        return value;
    },
    get_numberOfLines: function SP_FieldMultiLineText$get_numberOfLines() {
        this.checkUninitializedProperty('NumberOfLines');
        return ((this.get_objectData()).get_properties())['NumberOfLines'];
    },
    set_numberOfLines: function SP_FieldMultiLineText$set_numberOfLines(value) {
        ((this.get_objectData()).get_properties())['NumberOfLines'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'NumberOfLines', value));
        }
        return value;
    },
    get_restrictedMode: function SP_FieldMultiLineText$get_restrictedMode() {
        this.checkUninitializedProperty('RestrictedMode');
        return ((this.get_objectData()).get_properties())['RestrictedMode'];
    },
    set_restrictedMode: function SP_FieldMultiLineText$set_restrictedMode(value) {
        ((this.get_objectData()).get_properties())['RestrictedMode'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'RestrictedMode', value));
        }
        return value;
    },
    get_richText: function SP_FieldMultiLineText$get_richText() {
        this.checkUninitializedProperty('RichText');
        return ((this.get_objectData()).get_properties())['RichText'];
    },
    set_richText: function SP_FieldMultiLineText$set_richText(value) {
        ((this.get_objectData()).get_properties())['RichText'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'RichText', value));
        }
        return value;
    },
    get_wikiLinking: function SP_FieldMultiLineText$get_wikiLinking() {
        this.checkUninitializedProperty('WikiLinking');
        return ((this.get_objectData()).get_properties())['WikiLinking'];
    },
    initPropertiesFromJson: function SP_FieldMultiLineText$initPropertiesFromJson(parentNode) {
        SP.Field.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AllowHyperlink;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowHyperlink'] = $v_0;
            delete parentNode.AllowHyperlink;
        }
        $v_0 = parentNode.AppendOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AppendOnly'] = $v_0;
            delete parentNode.AppendOnly;
        }
        $v_0 = parentNode.NumberOfLines;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['NumberOfLines'] = $v_0;
            delete parentNode.NumberOfLines;
        }
        $v_0 = parentNode.RestrictedMode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['RestrictedMode'] = $v_0;
            delete parentNode.RestrictedMode;
        }
        $v_0 = parentNode.RichText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['RichText'] = $v_0;
            delete parentNode.RichText;
        }
        $v_0 = parentNode.WikiLinking;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WikiLinking'] = $v_0;
            delete parentNode.WikiLinking;
        }
    }
};
SP.FieldMultiLineTextPropertyNames = function SP_FieldMultiLineTextPropertyNames() {
};
SP.FieldNumber = function SP_FieldNumber(context, objectPath) {
    SP.FieldNumber.initializeBase(this, [context, objectPath]);
};
SP.FieldNumber.prototype = {
    get_maximumValue: function SP_FieldNumber$get_maximumValue() {
        this.checkUninitializedProperty('MaximumValue');
        return ((this.get_objectData()).get_properties())['MaximumValue'];
    },
    set_maximumValue: function SP_FieldNumber$set_maximumValue(value) {
        ((this.get_objectData()).get_properties())['MaximumValue'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'MaximumValue', value));
        }
        return value;
    },
    get_minimumValue: function SP_FieldNumber$get_minimumValue() {
        this.checkUninitializedProperty('MinimumValue');
        return ((this.get_objectData()).get_properties())['MinimumValue'];
    },
    set_minimumValue: function SP_FieldNumber$set_minimumValue(value) {
        ((this.get_objectData()).get_properties())['MinimumValue'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'MinimumValue', value));
        }
        return value;
    },
    initPropertiesFromJson: function SP_FieldNumber$initPropertiesFromJson(parentNode) {
        SP.Field.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.MaximumValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['MaximumValue'] = $v_0;
            delete parentNode.MaximumValue;
        }
        $v_0 = parentNode.MinimumValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['MinimumValue'] = $v_0;
            delete parentNode.MinimumValue;
        }
    }
};
SP.FieldNumberPropertyNames = function SP_FieldNumberPropertyNames() {
};
SP.FieldRatingScale = function SP_FieldRatingScale(context, objectPath) {
    SP.FieldRatingScale.initializeBase(this, [context, objectPath]);
};
SP.FieldRatingScale.prototype = {
    get_gridEndNumber: function SP_FieldRatingScale$get_gridEndNumber() {
        this.checkUninitializedProperty('GridEndNumber');
        return ((this.get_objectData()).get_properties())['GridEndNumber'];
    },
    set_gridEndNumber: function SP_FieldRatingScale$set_gridEndNumber(value) {
        ((this.get_objectData()).get_properties())['GridEndNumber'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'GridEndNumber', value));
        }
        return value;
    },
    get_gridNAOptionText: function SP_FieldRatingScale$get_gridNAOptionText() {
        this.checkUninitializedProperty('GridNAOptionText');
        return ((this.get_objectData()).get_properties())['GridNAOptionText'];
    },
    set_gridNAOptionText: function SP_FieldRatingScale$set_gridNAOptionText(value) {
        ((this.get_objectData()).get_properties())['GridNAOptionText'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'GridNAOptionText', value));
        }
        return value;
    },
    get_gridStartNumber: function SP_FieldRatingScale$get_gridStartNumber() {
        this.checkUninitializedProperty('GridStartNumber');
        return ((this.get_objectData()).get_properties())['GridStartNumber'];
    },
    set_gridStartNumber: function SP_FieldRatingScale$set_gridStartNumber(value) {
        ((this.get_objectData()).get_properties())['GridStartNumber'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'GridStartNumber', value));
        }
        return value;
    },
    get_gridTextRangeAverage: function SP_FieldRatingScale$get_gridTextRangeAverage() {
        this.checkUninitializedProperty('GridTextRangeAverage');
        return ((this.get_objectData()).get_properties())['GridTextRangeAverage'];
    },
    set_gridTextRangeAverage: function SP_FieldRatingScale$set_gridTextRangeAverage(value) {
        ((this.get_objectData()).get_properties())['GridTextRangeAverage'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'GridTextRangeAverage', value));
        }
        return value;
    },
    get_gridTextRangeHigh: function SP_FieldRatingScale$get_gridTextRangeHigh() {
        this.checkUninitializedProperty('GridTextRangeHigh');
        return ((this.get_objectData()).get_properties())['GridTextRangeHigh'];
    },
    set_gridTextRangeHigh: function SP_FieldRatingScale$set_gridTextRangeHigh(value) {
        ((this.get_objectData()).get_properties())['GridTextRangeHigh'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'GridTextRangeHigh', value));
        }
        return value;
    },
    get_gridTextRangeLow: function SP_FieldRatingScale$get_gridTextRangeLow() {
        this.checkUninitializedProperty('GridTextRangeLow');
        return ((this.get_objectData()).get_properties())['GridTextRangeLow'];
    },
    set_gridTextRangeLow: function SP_FieldRatingScale$set_gridTextRangeLow(value) {
        ((this.get_objectData()).get_properties())['GridTextRangeLow'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'GridTextRangeLow', value));
        }
        return value;
    },
    get_rangeCount: function SP_FieldRatingScale$get_rangeCount() {
        this.checkUninitializedProperty('RangeCount');
        return ((this.get_objectData()).get_properties())['RangeCount'];
    },
    initPropertiesFromJson: function SP_FieldRatingScale$initPropertiesFromJson(parentNode) {
        SP.FieldMultiChoice.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.GridEndNumber;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['GridEndNumber'] = $v_0;
            delete parentNode.GridEndNumber;
        }
        $v_0 = parentNode.GridNAOptionText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['GridNAOptionText'] = $v_0;
            delete parentNode.GridNAOptionText;
        }
        $v_0 = parentNode.GridStartNumber;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['GridStartNumber'] = $v_0;
            delete parentNode.GridStartNumber;
        }
        $v_0 = parentNode.GridTextRangeAverage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['GridTextRangeAverage'] = $v_0;
            delete parentNode.GridTextRangeAverage;
        }
        $v_0 = parentNode.GridTextRangeHigh;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['GridTextRangeHigh'] = $v_0;
            delete parentNode.GridTextRangeHigh;
        }
        $v_0 = parentNode.GridTextRangeLow;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['GridTextRangeLow'] = $v_0;
            delete parentNode.GridTextRangeLow;
        }
        $v_0 = parentNode.RangeCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['RangeCount'] = $v_0;
            delete parentNode.RangeCount;
        }
    }
};
SP.FieldRatingScalePropertyNames = function SP_FieldRatingScalePropertyNames() {
};
SP.FieldRatingScaleQuestionAnswer = function SP_FieldRatingScaleQuestionAnswer() {
    SP.FieldRatingScaleQuestionAnswer.initializeBase(this);
};
SP.FieldRatingScaleQuestionAnswer.prototype = {
    $1z_1: 0,
    $2o_1: null,
    get_answer: function SP_FieldRatingScaleQuestionAnswer$get_answer() {
        return this.$1z_1;
    },
    set_answer: function SP_FieldRatingScaleQuestionAnswer$set_answer(value) {
        this.$1z_1 = value;
        return value;
    },
    get_question: function SP_FieldRatingScaleQuestionAnswer$get_question() {
        return this.$2o_1;
    },
    set_question: function SP_FieldRatingScaleQuestionAnswer$set_question(value) {
        this.$2o_1 = value;
        return value;
    },
    get_typeId: function SP_FieldRatingScaleQuestionAnswer$get_typeId() {
        return '{9b88fe8e-47cd-4ddc-9d66-0d12d70dde28}';
    },
    writeToXml: function SP_FieldRatingScaleQuestionAnswer$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['Answer', 'Question'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_FieldRatingScaleQuestionAnswer$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Answer;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1z_1 = $v_0;
            delete parentNode.Answer;
        }
        $v_0 = parentNode.Question;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2o_1 = $v_0;
            delete parentNode.Question;
        }
    }
};
SP.FieldStringValues = function SP_FieldStringValues(context, objectPath) {
    SP.FieldStringValues.initializeBase(this, [context, objectPath]);
};
SP.FieldStringValues.prototype = {
    get_fieldValues: function SP_FieldStringValues$get_fieldValues() {
        var $v_0 = ((this.get_objectData()).get_methodReturnObjects())[SP.ClientConstants.FieldValuesMethodName];

        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            ((this.get_objectData()).get_methodReturnObjects())[SP.ClientConstants.FieldValuesMethodName] = $v_0;
        }
        return $v_0;
    },
    get_item: function SP_FieldStringValues$get_item(fieldName) {
        return this.$Q_1(fieldName);
    },
    initNonPropertiesFromJson: function SP_FieldStringValues$initNonPropertiesFromJson(parentNode) {
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    $Q_1: function SP_FieldStringValues$$Q_1($p0) {
        var $v_0 = (this.get_fieldValues())[$p0];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString(SP.ResourceStrings.propertyHasNotBeenInitialized));
        }
        return $v_0;
    },
    refreshLoad: function SP_FieldStringValues$refreshLoad() {
        SP.ClientObject.prototype.refreshLoad.call(this);
        this.loadExpandoFields();
    },
    loadExpandoFields: function SP_FieldStringValues$loadExpandoFields() {
        var $$dict_0 = this.get_fieldValues();

        for (var $$key_1 in $$dict_0) {
            var $v_0 = {
                key: $$key_1,
                value: $$dict_0[$$key_1]
            };

            this.retrieve($v_0.key);
        }
    }
};
SP.FieldText = function SP_FieldText(context, objectPath) {
    SP.FieldText.initializeBase(this, [context, objectPath]);
};
SP.FieldText.prototype = {
    get_maxLength: function SP_FieldText$get_maxLength() {
        this.checkUninitializedProperty('MaxLength');
        return ((this.get_objectData()).get_properties())['MaxLength'];
    },
    set_maxLength: function SP_FieldText$set_maxLength(value) {
        ((this.get_objectData()).get_properties())['MaxLength'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'MaxLength', value));
        }
        return value;
    },
    initPropertiesFromJson: function SP_FieldText$initPropertiesFromJson(parentNode) {
        SP.Field.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.MaxLength;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['MaxLength'] = $v_0;
            delete parentNode.MaxLength;
        }
    }
};
SP.FieldTextPropertyNames = function SP_FieldTextPropertyNames() {
};
SP.FieldUrl = function SP_FieldUrl(context, objectPath) {
    SP.FieldUrl.initializeBase(this, [context, objectPath]);
};
SP.FieldUrl.prototype = {
    get_displayFormat: function SP_FieldUrl$get_displayFormat() {
        this.checkUninitializedProperty('DisplayFormat');
        return ((this.get_objectData()).get_properties())['DisplayFormat'];
    },
    set_displayFormat: function SP_FieldUrl$set_displayFormat(value) {
        ((this.get_objectData()).get_properties())['DisplayFormat'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DisplayFormat', value));
        }
        return value;
    },
    initPropertiesFromJson: function SP_FieldUrl$initPropertiesFromJson(parentNode) {
        SP.Field.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.DisplayFormat;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DisplayFormat'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.DisplayFormat;
        }
    }
};
SP.FieldUrlPropertyNames = function SP_FieldUrlPropertyNames() {
};
SP.FieldUrlValue = function SP_FieldUrlValue() {
    SP.FieldUrlValue.initializeBase(this);
};
SP.FieldUrlValue.prototype = {
    $3_1: null,
    $2_1: null,
    get_description: function SP_FieldUrlValue$get_description() {
        return this.$3_1;
    },
    set_description: function SP_FieldUrlValue$set_description(value) {
        this.$3_1 = value;
        return value;
    },
    get_url: function SP_FieldUrlValue$get_url() {
        return this.$2_1;
    },
    set_url: function SP_FieldUrlValue$set_url(value) {
        this.$2_1 = value;
        return value;
    },
    get_typeId: function SP_FieldUrlValue$get_typeId() {
        return '{fa8b44af-7b43-43f2-904a-bd319497011e}';
    },
    writeToXml: function SP_FieldUrlValue$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['Description', 'Url'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_FieldUrlValue$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = $v_0;
            delete parentNode.Url;
        }
    }
};
SP.FieldUser = function SP_FieldUser(context, objectPath) {
    SP.FieldUser.initializeBase(this, [context, objectPath]);
};
SP.FieldUser.prototype = {
    get_allowDisplay: function SP_FieldUser$get_allowDisplay() {
        this.checkUninitializedProperty('AllowDisplay');
        return ((this.get_objectData()).get_properties())['AllowDisplay'];
    },
    set_allowDisplay: function SP_FieldUser$set_allowDisplay(value) {
        ((this.get_objectData()).get_properties())['AllowDisplay'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AllowDisplay', value));
        }
        return value;
    },
    get_presence: function SP_FieldUser$get_presence() {
        this.checkUninitializedProperty('Presence');
        return ((this.get_objectData()).get_properties())['Presence'];
    },
    set_presence: function SP_FieldUser$set_presence(value) {
        ((this.get_objectData()).get_properties())['Presence'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Presence', value));
        }
        return value;
    },
    get_selectionGroup: function SP_FieldUser$get_selectionGroup() {
        this.checkUninitializedProperty('SelectionGroup');
        return ((this.get_objectData()).get_properties())['SelectionGroup'];
    },
    set_selectionGroup: function SP_FieldUser$set_selectionGroup(value) {
        ((this.get_objectData()).get_properties())['SelectionGroup'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'SelectionGroup', value));
        }
        return value;
    },
    get_selectionMode: function SP_FieldUser$get_selectionMode() {
        this.checkUninitializedProperty('SelectionMode');
        return ((this.get_objectData()).get_properties())['SelectionMode'];
    },
    set_selectionMode: function SP_FieldUser$set_selectionMode(value) {
        ((this.get_objectData()).get_properties())['SelectionMode'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'SelectionMode', value));
        }
        return value;
    },
    initPropertiesFromJson: function SP_FieldUser$initPropertiesFromJson(parentNode) {
        SP.FieldLookup.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AllowDisplay;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowDisplay'] = $v_0;
            delete parentNode.AllowDisplay;
        }
        $v_0 = parentNode.Presence;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Presence'] = $v_0;
            delete parentNode.Presence;
        }
        $v_0 = parentNode.SelectionGroup;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SelectionGroup'] = $v_0;
            delete parentNode.SelectionGroup;
        }
        $v_0 = parentNode.SelectionMode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SelectionMode'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.SelectionMode;
        }
    }
};
SP.FieldUserPropertyNames = function SP_FieldUserPropertyNames() {
};
SP.FieldUserValue = function SP_FieldUserValue() {
    SP.FieldUserValue.initializeBase(this);
};
SP.FieldUserValue.fromUser = function SP_FieldUserValue$fromUser(userName) {
    var $v_0 = new SP.FieldUserValue();

    $v_0.$1E_1 = -1;
    $v_0.$5I_1(userName);
    return $v_0;
};
SP.FieldUserValue.prototype = {
    get_typeId: function SP_FieldUserValue$get_typeId() {
        return '{c956ab54-16bd-4c18-89d2-996f57282a6f}';
    },
    writeToXml: function SP_FieldUserValue$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        SP.FieldLookupValue.prototype.writeToXml.call(this, writer, serializationContext);
    }
};
SP.File = function SP_File(context, objectPath) {
    SP.File.initializeBase(this, [context, objectPath]);
};
SP.File.getContentVerFromTag = function SP_File$getContentVerFromTag(context, contentTag) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{df28be1e-74b5-4b21-b73a-2bbac0a23d8a}', 'GetContentVerFromTag', [contentTag]);

    context.addQuery($v_1);
    $v_0 = new SP.IntResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.File.prototype = {
    $7_1: function SP_File$$7_1($p0) {
        if ($p0) {
            ((this.get_objectData()).get_properties())['Name'] = $p0.$2_1;
            if (!SP.ScriptUtility.isNullOrEmptyString($p0.$2_1)) {
                if ($p0.$2_1.endsWith('/')) {
                    throw Error.argument();
                }
                var $v_0;
                var $v_1 = $p0.$2_1.lastIndexOf('/');

                if ($v_1 >= 0 && $v_1 < $p0.$2_1.length) {
                    $v_0 = $p0.$2_1.substr($v_1 + 1);
                    ((this.get_objectData()).get_properties())['Name'] = $v_0;
                }
            }
        }
    },
    $4j_1: function SP_File$$4j_1($p0) {
        if (typeof $p0 === 'undefined') {
            throw Error.argument();
        }
    },
    get_author: function SP_File$get_author() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Author'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Author'));
            ((this.get_objectData()).get_clientObjectProperties())['Author'] = $v_0;
        }
        return $v_0;
    },
    get_checkedOutByUser: function SP_File$get_checkedOutByUser() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['CheckedOutByUser'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CheckedOutByUser'));
            ((this.get_objectData()).get_clientObjectProperties())['CheckedOutByUser'] = $v_0;
        }
        return $v_0;
    },
    get_checkInComment: function SP_File$get_checkInComment() {
        this.checkUninitializedProperty('CheckInComment');
        return ((this.get_objectData()).get_properties())['CheckInComment'];
    },
    get_checkOutType: function SP_File$get_checkOutType() {
        this.checkUninitializedProperty('CheckOutType');
        return ((this.get_objectData()).get_properties())['CheckOutType'];
    },
    get_contentTag: function SP_File$get_contentTag() {
        this.checkUninitializedProperty('ContentTag');
        return ((this.get_objectData()).get_properties())['ContentTag'];
    },
    get_customizedPageStatus: function SP_File$get_customizedPageStatus() {
        this.checkUninitializedProperty('CustomizedPageStatus');
        return ((this.get_objectData()).get_properties())['CustomizedPageStatus'];
    },
    get_eTag: function SP_File$get_eTag() {
        this.checkUninitializedProperty('ETag');
        return ((this.get_objectData()).get_properties())['ETag'];
    },
    get_exists: function SP_File$get_exists() {
        this.checkUninitializedProperty('Exists');
        return ((this.get_objectData()).get_properties())['Exists'];
    },
    get_length: function SP_File$get_length() {
        this.checkUninitializedProperty('Length');
        return ((this.get_objectData()).get_properties())['Length'];
    },
    get_level: function SP_File$get_level() {
        this.checkUninitializedProperty('Level');
        return ((this.get_objectData()).get_properties())['Level'];
    },
    get_listItemAllFields: function SP_File$get_listItemAllFields() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['ListItemAllFields'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ListItem(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ListItemAllFields'));
            ((this.get_objectData()).get_clientObjectProperties())['ListItemAllFields'] = $v_0;
        }
        return $v_0;
    },
    get_lockedByUser: function SP_File$get_lockedByUser() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['LockedByUser'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'LockedByUser'));
            ((this.get_objectData()).get_clientObjectProperties())['LockedByUser'] = $v_0;
        }
        return $v_0;
    },
    get_majorVersion: function SP_File$get_majorVersion() {
        this.checkUninitializedProperty('MajorVersion');
        return ((this.get_objectData()).get_properties())['MajorVersion'];
    },
    get_minorVersion: function SP_File$get_minorVersion() {
        this.checkUninitializedProperty('MinorVersion');
        return ((this.get_objectData()).get_properties())['MinorVersion'];
    },
    get_modifiedBy: function SP_File$get_modifiedBy() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['ModifiedBy'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ModifiedBy'));
            ((this.get_objectData()).get_clientObjectProperties())['ModifiedBy'] = $v_0;
        }
        return $v_0;
    },
    get_name: function SP_File$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    get_serverRelativeUrl: function SP_File$get_serverRelativeUrl() {
        this.checkUninitializedProperty('ServerRelativeUrl');
        return ((this.get_objectData()).get_properties())['ServerRelativeUrl'];
    },
    get_timeCreated: function SP_File$get_timeCreated() {
        this.checkUninitializedProperty('TimeCreated');
        return ((this.get_objectData()).get_properties())['TimeCreated'];
    },
    get_timeLastModified: function SP_File$get_timeLastModified() {
        this.checkUninitializedProperty('TimeLastModified');
        return ((this.get_objectData()).get_properties())['TimeLastModified'];
    },
    get_title: function SP_File$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData()).get_properties())['Title'];
    },
    get_uiVersion: function SP_File$get_uiVersion() {
        this.checkUninitializedProperty('UIVersion');
        return ((this.get_objectData()).get_properties())['UIVersion'];
    },
    get_uiVersionLabel: function SP_File$get_uiVersionLabel() {
        this.checkUninitializedProperty('UIVersionLabel');
        return ((this.get_objectData()).get_properties())['UIVersionLabel'];
    },
    get_versions: function SP_File$get_versions() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Versions'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FileVersionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Versions'));
            ((this.get_objectData()).get_clientObjectProperties())['Versions'] = $v_0;
        }
        return $v_0;
    },
    initPropertiesFromJson: function SP_File$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Author;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Author', this.get_author(), $v_0);
            (this.get_author()).fromJson($v_0);
            delete parentNode.Author;
        }
        $v_0 = parentNode.CheckedOutByUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CheckedOutByUser', this.get_checkedOutByUser(), $v_0);
            (this.get_checkedOutByUser()).fromJson($v_0);
            delete parentNode.CheckedOutByUser;
        }
        $v_0 = parentNode.CheckInComment;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CheckInComment'] = $v_0;
            delete parentNode.CheckInComment;
        }
        $v_0 = parentNode.CheckOutType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CheckOutType'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.CheckOutType;
        }
        $v_0 = parentNode.ContentTag;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ContentTag'] = $v_0;
            delete parentNode.ContentTag;
        }
        $v_0 = parentNode.CustomizedPageStatus;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CustomizedPageStatus'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.CustomizedPageStatus;
        }
        $v_0 = parentNode.ETag;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ETag'] = $v_0;
            delete parentNode.ETag;
        }
        $v_0 = parentNode.Exists;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Exists'] = $v_0;
            delete parentNode.Exists;
        }
        $v_0 = parentNode.Length;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Length'] = $v_0;
            delete parentNode.Length;
        }
        $v_0 = parentNode.Level;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Level'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.Level;
        }
        $v_0 = parentNode.ListItemAllFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ListItemAllFields', this.get_listItemAllFields(), $v_0);
            (this.get_listItemAllFields()).fromJson($v_0);
            delete parentNode.ListItemAllFields;
        }
        $v_0 = parentNode.LockedByUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('LockedByUser', this.get_lockedByUser(), $v_0);
            (this.get_lockedByUser()).fromJson($v_0);
            delete parentNode.LockedByUser;
        }
        $v_0 = parentNode.MajorVersion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['MajorVersion'] = $v_0;
            delete parentNode.MajorVersion;
        }
        $v_0 = parentNode.MinorVersion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['MinorVersion'] = $v_0;
            delete parentNode.MinorVersion;
        }
        $v_0 = parentNode.ModifiedBy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ModifiedBy', this.get_modifiedBy(), $v_0);
            (this.get_modifiedBy()).fromJson($v_0);
            delete parentNode.ModifiedBy;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.ServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ServerRelativeUrl'] = $v_0;
            delete parentNode.ServerRelativeUrl;
        }
        $v_0 = parentNode.TimeCreated;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['TimeCreated'] = $v_0;
            delete parentNode.TimeCreated;
        }
        $v_0 = parentNode.TimeLastModified;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['TimeLastModified'] = $v_0;
            delete parentNode.TimeLastModified;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Title'] = $v_0;
            delete parentNode.Title;
        }
        $v_0 = parentNode.UIVersion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['UIVersion'] = $v_0;
            delete parentNode.UIVersion;
        }
        $v_0 = parentNode.UIVersionLabel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['UIVersionLabel'] = $v_0;
            delete parentNode.UIVersionLabel;
        }
        $v_0 = parentNode.Versions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Versions', this.get_versions(), $v_0);
            (this.get_versions()).fromJson($v_0);
            delete parentNode.Versions;
        }
    },
    undoCheckOut: function SP_File$undoCheckOut() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UndoCheckOut', null);

        $v_0.addQuery($v_1);
    },
    checkIn: function SP_File$checkIn(comment, checkInType) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'CheckIn', [comment, checkInType]);

        $v_0.addQuery($v_1);
    },
    publish: function SP_File$publish(comment) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Publish', [comment]);

        $v_0.addQuery($v_1);
    },
    unPublish: function SP_File$unPublish(comment) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UnPublish', [comment]);

        $v_0.addQuery($v_1);
    },
    approve: function SP_File$approve(comment) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Approve', [comment]);

        $v_0.addQuery($v_1);
    },
    deny: function SP_File$deny(comment) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Deny', [comment]);

        $v_0.addQuery($v_1);
    },
    getLimitedWebPartManager: function SP_File$getLimitedWebPartManager(scope) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetLimitedWebPartManager'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = [];
            ((this.get_objectData()).get_methodReturnObjects())['GetLimitedWebPartManager'] = $v_2;
        }
        $v_1 = $v_2[scope];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.WebParts.LimitedWebPartManager($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetLimitedWebPartManager', [scope]));
        $v_2[scope] = $v_1;
        this.$4j_1(scope);
        return $v_1;
    },
    moveTo: function SP_File$moveTo(newUrl, flags) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'MoveTo', [newUrl, flags]);

        $v_0.addQuery($v_1);
    },
    copyTo: function SP_File$copyTo(strNewUrl, bOverWrite) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'CopyTo', [strNewUrl, bOverWrite]);

        $v_0.addQuery($v_1);
    },
    saveBinary: function SP_File$saveBinary(parameters) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SaveBinary', [parameters]);

        $v_0.addQuery($v_1);
    },
    deleteObject: function SP_File$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    },
    recycle: function SP_File$recycle() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Recycle', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.GuidResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeFromParentCollection();
        return $v_1;
    },
    checkOut: function SP_File$checkOut() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'CheckOut', null);

        $v_0.addQuery($v_1);
    }
};
SP.FilePropertyNames = function SP_FilePropertyNames() {
};
SP.FileObjectPropertyNames = function SP_FileObjectPropertyNames() {
};
SP.FileCollection = function SP_FileCollection(context, objectPath) {
    SP.FileCollection.initializeBase(this, [context, objectPath]);
};
SP.FileCollection.prototype = {
    itemAt: function SP_FileCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_FileCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_FileCollection$get_childItemType() {
        return SP.File;
    },
    getByUrl: function SP_FileCollection$getByUrl(url) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByUrl'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetByUrl'] = $v_2;
        }
        $v_1 = $v_2[url];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.File($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByUrl', [url]));
        $v_2[url] = $v_1;
        return $v_1;
    },
    add: function SP_FileCollection$add(parameters) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.File($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [parameters]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        $v_1.$7_1(parameters);
        return $v_1;
    },
    addTemplateFile: function SP_FileCollection$addTemplateFile(urlOfFile, templateFileType) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.File($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'AddTemplateFile', [urlOfFile, templateFileType]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    }
};
SP.FileCreationInformation = function SP_FileCreationInformation() {
    SP.FileCreationInformation.initializeBase(this);
};
SP.FileCreationInformation.prototype = {
    $R_1: null,
    $2i_1: false,
    $2_1: null,
    get_content: function SP_FileCreationInformation$get_content() {
        return this.$R_1;
    },
    set_content: function SP_FileCreationInformation$set_content(value) {
        this.$R_1 = value;
        return value;
    },
    get_overwrite: function SP_FileCreationInformation$get_overwrite() {
        return this.$2i_1;
    },
    set_overwrite: function SP_FileCreationInformation$set_overwrite(value) {
        this.$2i_1 = value;
        return value;
    },
    get_url: function SP_FileCreationInformation$get_url() {
        return this.$2_1;
    },
    set_url: function SP_FileCreationInformation$set_url(value) {
        this.$2_1 = value;
        return value;
    },
    get_typeId: function SP_FileCreationInformation$get_typeId() {
        return '{f5c8173c-cae6-4469-a7af-3879ca3c617c}';
    },
    writeToXml: function SP_FileCreationInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['Content', 'Overwrite', 'Url'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_FileCreationInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Content;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$R_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.Content;
        }
        $v_0 = parentNode.Overwrite;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2i_1 = $v_0;
            delete parentNode.Overwrite;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = $v_0;
            delete parentNode.Url;
        }
    }
};
SP.FileSaveBinaryInformation = function SP_FileSaveBinaryInformation() {
    SP.FileSaveBinaryInformation.initializeBase(this);
};
SP.FileSaveBinaryInformation.prototype = {
    $28_1: false,
    $R_1: null,
    $2J_1: null,
    $2O_1: null,
    get_checkRequiredFields: function SP_FileSaveBinaryInformation$get_checkRequiredFields() {
        return this.$28_1;
    },
    set_checkRequiredFields: function SP_FileSaveBinaryInformation$set_checkRequiredFields(value) {
        this.$28_1 = value;
        return value;
    },
    get_content: function SP_FileSaveBinaryInformation$get_content() {
        return this.$R_1;
    },
    set_content: function SP_FileSaveBinaryInformation$set_content(value) {
        this.$R_1 = value;
        return value;
    },
    get_eTag: function SP_FileSaveBinaryInformation$get_eTag() {
        return this.$2J_1;
    },
    set_eTag: function SP_FileSaveBinaryInformation$set_eTag(value) {
        this.$2J_1 = value;
        return value;
    },
    get_fieldValues: function SP_FileSaveBinaryInformation$get_fieldValues() {
        return this.$2O_1;
    },
    set_fieldValues: function SP_FileSaveBinaryInformation$set_fieldValues(value) {
        this.$2O_1 = value;
        return value;
    },
    get_typeId: function SP_FileSaveBinaryInformation$get_typeId() {
        return '{c3de0784-43e6-4f12-bd0c-f0d9a34ebf93}';
    },
    writeToXml: function SP_FileSaveBinaryInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['CheckRequiredFields', 'Content', 'ETag', 'FieldValues'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_FileSaveBinaryInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.CheckRequiredFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$28_1 = $v_0;
            delete parentNode.CheckRequiredFields;
        }
        $v_0 = parentNode.Content;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$R_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.Content;
        }
        $v_0 = parentNode.ETag;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2J_1 = $v_0;
            delete parentNode.ETag;
        }
        $v_0 = parentNode.FieldValues;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2O_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.FieldValues;
        }
    }
};
SP.FileVersion = function SP_FileVersion(context, objectPath) {
    SP.FileVersion.initializeBase(this, [context, objectPath]);
};
SP.FileVersion.prototype = {
    get_checkInComment: function SP_FileVersion$get_checkInComment() {
        this.checkUninitializedProperty('CheckInComment');
        return ((this.get_objectData()).get_properties())['CheckInComment'];
    },
    get_created: function SP_FileVersion$get_created() {
        this.checkUninitializedProperty('Created');
        return ((this.get_objectData()).get_properties())['Created'];
    },
    get_createdBy: function SP_FileVersion$get_createdBy() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['CreatedBy'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CreatedBy'));
            ((this.get_objectData()).get_clientObjectProperties())['CreatedBy'] = $v_0;
        }
        return $v_0;
    },
    get_id: function SP_FileVersion$get_id() {
        this.checkUninitializedProperty('ID');
        return ((this.get_objectData()).get_properties())['ID'];
    },
    get_isCurrentVersion: function SP_FileVersion$get_isCurrentVersion() {
        this.checkUninitializedProperty('IsCurrentVersion');
        return ((this.get_objectData()).get_properties())['IsCurrentVersion'];
    },
    get_size: function SP_FileVersion$get_size() {
        this.checkUninitializedProperty('Size');
        return ((this.get_objectData()).get_properties())['Size'];
    },
    get_url: function SP_FileVersion$get_url() {
        this.checkUninitializedProperty('Url');
        return ((this.get_objectData()).get_properties())['Url'];
    },
    get_versionLabel: function SP_FileVersion$get_versionLabel() {
        this.checkUninitializedProperty('VersionLabel');
        return ((this.get_objectData()).get_properties())['VersionLabel'];
    },
    initPropertiesFromJson: function SP_FileVersion$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.CheckInComment;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CheckInComment'] = $v_0;
            delete parentNode.CheckInComment;
        }
        $v_0 = parentNode.Created;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Created'] = $v_0;
            delete parentNode.Created;
        }
        $v_0 = parentNode.CreatedBy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CreatedBy', this.get_createdBy(), $v_0);
            (this.get_createdBy()).fromJson($v_0);
            delete parentNode.CreatedBy;
        }
        $v_0 = parentNode.ID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ID'] = $v_0;
            delete parentNode.ID;
        }
        $v_0 = parentNode.IsCurrentVersion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsCurrentVersion'] = $v_0;
            delete parentNode.IsCurrentVersion;
        }
        $v_0 = parentNode.Size;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Size'] = $v_0;
            delete parentNode.Size;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Url'] = $v_0;
            delete parentNode.Url;
        }
        $v_0 = parentNode.VersionLabel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['VersionLabel'] = $v_0;
            delete parentNode.VersionLabel;
        }
    },
    deleteObject: function SP_FileVersion$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
};
SP.FileVersionPropertyNames = function SP_FileVersionPropertyNames() {
};
SP.FileVersionObjectPropertyNames = function SP_FileVersionObjectPropertyNames() {
};
SP.FileVersionCollection = function SP_FileVersionCollection(context, objectPath) {
    SP.FileVersionCollection.initializeBase(this, [context, objectPath]);
};
SP.FileVersionCollection.prototype = {
    itemAt: function SP_FileVersionCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_FileVersionCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_FileVersionCollection$get_childItemType() {
        return SP.FileVersion;
    },
    getById: function SP_FileVersionCollection$getById(versionid) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetById'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = [];
            ((this.get_objectData()).get_methodReturnObjects())['GetById'] = $v_2;
        }
        $v_1 = $v_2[versionid];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.FileVersion($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [versionid]));
        $v_2[versionid] = $v_1;
        return $v_1;
    },
    deleteByID: function SP_FileVersionCollection$deleteByID(vid) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteByID', [vid]);

        $v_0.addQuery($v_1);
    },
    deleteByLabel: function SP_FileVersionCollection$deleteByLabel(versionlabel) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteByLabel', [versionlabel]);

        $v_0.addQuery($v_1);
    },
    deleteAll: function SP_FileVersionCollection$deleteAll() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteAll', null);

        $v_0.addQuery($v_1);
    },
    restoreByLabel: function SP_FileVersionCollection$restoreByLabel(versionlabel) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'RestoreByLabel', [versionlabel]);

        $v_0.addQuery($v_1);
    }
};
SP.Folder = function SP_Folder(context, objectPath) {
    SP.Folder.initializeBase(this, [context, objectPath]);
};
SP.Folder.prototype = {
    get_contentTypeOrder: function SP_Folder$get_contentTypeOrder() {
        this.checkUninitializedProperty('ContentTypeOrder');
        return ((this.get_objectData()).get_properties())['ContentTypeOrder'];
    },
    get_files: function SP_Folder$get_files() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Files'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FileCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Files'));
            ((this.get_objectData()).get_clientObjectProperties())['Files'] = $v_0;
        }
        return $v_0;
    },
    get_listItemAllFields: function SP_Folder$get_listItemAllFields() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['ListItemAllFields'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ListItem(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ListItemAllFields'));
            ((this.get_objectData()).get_clientObjectProperties())['ListItemAllFields'] = $v_0;
        }
        return $v_0;
    },
    get_itemCount: function SP_Folder$get_itemCount() {
        this.checkUninitializedProperty('ItemCount');
        return ((this.get_objectData()).get_properties())['ItemCount'];
    },
    get_name: function SP_Folder$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    get_parentFolder: function SP_Folder$get_parentFolder() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['ParentFolder'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Folder(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ParentFolder'));
            ((this.get_objectData()).get_clientObjectProperties())['ParentFolder'] = $v_0;
        }
        return $v_0;
    },
    get_properties: function SP_Folder$get_properties() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Properties'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.PropertyValues(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Properties'));
            ((this.get_objectData()).get_clientObjectProperties())['Properties'] = $v_0;
        }
        return $v_0;
    },
    get_serverRelativeUrl: function SP_Folder$get_serverRelativeUrl() {
        this.checkUninitializedProperty('ServerRelativeUrl');
        return ((this.get_objectData()).get_properties())['ServerRelativeUrl'];
    },
    get_folders: function SP_Folder$get_folders() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Folders'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FolderCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Folders'));
            ((this.get_objectData()).get_clientObjectProperties())['Folders'] = $v_0;
        }
        return $v_0;
    },
    get_uniqueContentTypeOrder: function SP_Folder$get_uniqueContentTypeOrder() {
        this.checkUninitializedProperty('UniqueContentTypeOrder');
        return ((this.get_objectData()).get_properties())['UniqueContentTypeOrder'];
    },
    set_uniqueContentTypeOrder: function SP_Folder$set_uniqueContentTypeOrder(value) {
        ((this.get_objectData()).get_properties())['UniqueContentTypeOrder'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'UniqueContentTypeOrder', value));
        }
        return value;
    },
    get_welcomePage: function SP_Folder$get_welcomePage() {
        this.checkUninitializedProperty('WelcomePage');
        return ((this.get_objectData()).get_properties())['WelcomePage'];
    },
    set_welcomePage: function SP_Folder$set_welcomePage(value) {
        ((this.get_objectData()).get_properties())['WelcomePage'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'WelcomePage', value));
        }
        return value;
    },
    initPropertiesFromJson: function SP_Folder$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ContentTypeOrder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ContentTypeOrder'] = [];
            SP.DataConvert.populateArray(this.get_context(), ((this.get_objectData()).get_properties())['ContentTypeOrder'], $v_0);
            delete parentNode.ContentTypeOrder;
        }
        $v_0 = parentNode.Files;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Files', this.get_files(), $v_0);
            (this.get_files()).fromJson($v_0);
            delete parentNode.Files;
        }
        $v_0 = parentNode.ListItemAllFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ListItemAllFields', this.get_listItemAllFields(), $v_0);
            (this.get_listItemAllFields()).fromJson($v_0);
            delete parentNode.ListItemAllFields;
        }
        $v_0 = parentNode.ItemCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ItemCount'] = $v_0;
            delete parentNode.ItemCount;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.ParentFolder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ParentFolder', this.get_parentFolder(), $v_0);
            (this.get_parentFolder()).fromJson($v_0);
            delete parentNode.ParentFolder;
        }
        $v_0 = parentNode.Properties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Properties', this.get_properties(), $v_0);
            (this.get_properties()).fromJson($v_0);
            delete parentNode.Properties;
        }
        $v_0 = parentNode.ServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ServerRelativeUrl'] = $v_0;
            delete parentNode.ServerRelativeUrl;
        }
        $v_0 = parentNode.Folders;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Folders', this.get_folders(), $v_0);
            (this.get_folders()).fromJson($v_0);
            delete parentNode.Folders;
        }
        $v_0 = parentNode.UniqueContentTypeOrder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['UniqueContentTypeOrder'] = [];
            SP.DataConvert.populateArray(this.get_context(), ((this.get_objectData()).get_properties())['UniqueContentTypeOrder'], $v_0);
            delete parentNode.UniqueContentTypeOrder;
        }
        $v_0 = parentNode.WelcomePage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WelcomePage'] = $v_0;
            delete parentNode.WelcomePage;
        }
    },
    update: function SP_Folder$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);

        $v_0.addQuery($v_1);
    },
    deleteObject: function SP_Folder$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    },
    recycle: function SP_Folder$recycle() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Recycle', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.GuidResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeFromParentCollection();
        return $v_1;
    }
};
SP.FolderPropertyNames = function SP_FolderPropertyNames() {
};
SP.FolderObjectPropertyNames = function SP_FolderObjectPropertyNames() {
};
SP.FolderCollection = function SP_FolderCollection(context, objectPath) {
    SP.FolderCollection.initializeBase(this, [context, objectPath]);
};
SP.FolderCollection.prototype = {
    itemAt: function SP_FolderCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_FolderCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_FolderCollection$get_childItemType() {
        return SP.Folder;
    },
    getByUrl: function SP_FolderCollection$getByUrl(url) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByUrl'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetByUrl'] = $v_2;
        }
        $v_1 = $v_2[url];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.Folder($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByUrl', [url]));
        $v_2[url] = $v_1;
        return $v_1;
    },
    add: function SP_FolderCollection$add(url) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.Folder($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [url]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    }
};
SP.Form = function SP_Form(context, objectPath) {
    SP.Form.initializeBase(this, [context, objectPath]);
};
SP.Form.prototype = {
    get_id: function SP_Form$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_serverRelativeUrl: function SP_Form$get_serverRelativeUrl() {
        this.checkUninitializedProperty('ServerRelativeUrl');
        return ((this.get_objectData()).get_properties())['ServerRelativeUrl'];
    },
    get_formType: function SP_Form$get_formType() {
        this.checkUninitializedProperty('FormType');
        return ((this.get_objectData()).get_properties())['FormType'];
    },
    initPropertiesFromJson: function SP_Form$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.ServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ServerRelativeUrl'] = $v_0;
            delete parentNode.ServerRelativeUrl;
        }
        $v_0 = parentNode.FormType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['FormType'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.FormType;
        }
    }
};
SP.FormPropertyNames = function SP_FormPropertyNames() {
};
SP.FormCollection = function SP_FormCollection(context, objectPath) {
    SP.FormCollection.initializeBase(this, [context, objectPath]);
};
SP.FormCollection.prototype = {
    itemAt: function SP_FormCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_FormCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_FormCollection$get_childItemType() {
        return SP.Form;
    },
    getByPageType: function SP_FormCollection$getByPageType(formType) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByPageType'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = [];
            ((this.get_objectData()).get_methodReturnObjects())['GetByPageType'] = $v_2;
        }
        $v_1 = $v_2[formType];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.Form($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByPageType', [formType]));
        $v_2[formType] = $v_1;
        return $v_1;
    },
    getById: function SP_FormCollection$getById(id) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetById'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetById'] = $v_2;
        }
        $v_1 = $v_2[id.toString()];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.Form($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [id]));
        $v_2[id.toString()] = $v_1;
        return $v_1;
    }
};
SP.Group = function SP_Group(context, objectPath) {
    SP.Group.initializeBase(this, [context, objectPath]);
};
SP.Group.prototype = {
    $7_2: function SP_Group$$7_2($p0) {
        if ($p0) {
            ((this.get_objectData()).get_properties())['Title'] = $p0.$0_1;
        }
    },
    get_allowMembersEditMembership: function SP_Group$get_allowMembersEditMembership() {
        this.checkUninitializedProperty('AllowMembersEditMembership');
        return ((this.get_objectData()).get_properties())['AllowMembersEditMembership'];
    },
    set_allowMembersEditMembership: function SP_Group$set_allowMembersEditMembership(value) {
        ((this.get_objectData()).get_properties())['AllowMembersEditMembership'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AllowMembersEditMembership', value));
        }
        return value;
    },
    get_allowRequestToJoinLeave: function SP_Group$get_allowRequestToJoinLeave() {
        this.checkUninitializedProperty('AllowRequestToJoinLeave');
        return ((this.get_objectData()).get_properties())['AllowRequestToJoinLeave'];
    },
    set_allowRequestToJoinLeave: function SP_Group$set_allowRequestToJoinLeave(value) {
        ((this.get_objectData()).get_properties())['AllowRequestToJoinLeave'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AllowRequestToJoinLeave', value));
        }
        return value;
    },
    get_autoAcceptRequestToJoinLeave: function SP_Group$get_autoAcceptRequestToJoinLeave() {
        this.checkUninitializedProperty('AutoAcceptRequestToJoinLeave');
        return ((this.get_objectData()).get_properties())['AutoAcceptRequestToJoinLeave'];
    },
    set_autoAcceptRequestToJoinLeave: function SP_Group$set_autoAcceptRequestToJoinLeave(value) {
        ((this.get_objectData()).get_properties())['AutoAcceptRequestToJoinLeave'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AutoAcceptRequestToJoinLeave', value));
        }
        return value;
    },
    get_canCurrentUserEditMembership: function SP_Group$get_canCurrentUserEditMembership() {
        this.checkUninitializedProperty('CanCurrentUserEditMembership');
        return ((this.get_objectData()).get_properties())['CanCurrentUserEditMembership'];
    },
    get_canCurrentUserManageGroup: function SP_Group$get_canCurrentUserManageGroup() {
        this.checkUninitializedProperty('CanCurrentUserManageGroup');
        return ((this.get_objectData()).get_properties())['CanCurrentUserManageGroup'];
    },
    get_canCurrentUserViewMembership: function SP_Group$get_canCurrentUserViewMembership() {
        this.checkUninitializedProperty('CanCurrentUserViewMembership');
        return ((this.get_objectData()).get_properties())['CanCurrentUserViewMembership'];
    },
    get_description: function SP_Group$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData()).get_properties())['Description'];
    },
    set_description: function SP_Group$set_description(value) {
        ((this.get_objectData()).get_properties())['Description'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    get_onlyAllowMembersViewMembership: function SP_Group$get_onlyAllowMembersViewMembership() {
        this.checkUninitializedProperty('OnlyAllowMembersViewMembership');
        return ((this.get_objectData()).get_properties())['OnlyAllowMembersViewMembership'];
    },
    set_onlyAllowMembersViewMembership: function SP_Group$set_onlyAllowMembersViewMembership(value) {
        ((this.get_objectData()).get_properties())['OnlyAllowMembersViewMembership'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'OnlyAllowMembersViewMembership', value));
        }
        return value;
    },
    get_owner: function SP_Group$get_owner() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Owner'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Principal(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Owner'));
            ((this.get_objectData()).get_clientObjectProperties())['Owner'] = $v_0;
        }
        return $v_0;
    },
    set_owner: function SP_Group$set_owner(value) {
        ((this.get_objectData()).get_clientObjectProperties())['Owner'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Owner', value));
        }
        return value;
    },
    get_ownerTitle: function SP_Group$get_ownerTitle() {
        this.checkUninitializedProperty('OwnerTitle');
        return ((this.get_objectData()).get_properties())['OwnerTitle'];
    },
    get_requestToJoinLeaveEmailSetting: function SP_Group$get_requestToJoinLeaveEmailSetting() {
        this.checkUninitializedProperty('RequestToJoinLeaveEmailSetting');
        return ((this.get_objectData()).get_properties())['RequestToJoinLeaveEmailSetting'];
    },
    set_requestToJoinLeaveEmailSetting: function SP_Group$set_requestToJoinLeaveEmailSetting(value) {
        ((this.get_objectData()).get_properties())['RequestToJoinLeaveEmailSetting'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'RequestToJoinLeaveEmailSetting', value));
        }
        return value;
    },
    get_users: function SP_Group$get_users() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Users'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.UserCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Users'));
            ((this.get_objectData()).get_clientObjectProperties())['Users'] = $v_0;
        }
        return $v_0;
    },
    initPropertiesFromJson: function SP_Group$initPropertiesFromJson(parentNode) {
        SP.Principal.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AllowMembersEditMembership;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowMembersEditMembership'] = $v_0;
            delete parentNode.AllowMembersEditMembership;
        }
        $v_0 = parentNode.AllowRequestToJoinLeave;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowRequestToJoinLeave'] = $v_0;
            delete parentNode.AllowRequestToJoinLeave;
        }
        $v_0 = parentNode.AutoAcceptRequestToJoinLeave;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AutoAcceptRequestToJoinLeave'] = $v_0;
            delete parentNode.AutoAcceptRequestToJoinLeave;
        }
        $v_0 = parentNode.CanCurrentUserEditMembership;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CanCurrentUserEditMembership'] = $v_0;
            delete parentNode.CanCurrentUserEditMembership;
        }
        $v_0 = parentNode.CanCurrentUserManageGroup;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CanCurrentUserManageGroup'] = $v_0;
            delete parentNode.CanCurrentUserManageGroup;
        }
        $v_0 = parentNode.CanCurrentUserViewMembership;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CanCurrentUserViewMembership'] = $v_0;
            delete parentNode.CanCurrentUserViewMembership;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Description'] = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.OnlyAllowMembersViewMembership;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['OnlyAllowMembersViewMembership'] = $v_0;
            delete parentNode.OnlyAllowMembersViewMembership;
        }
        $v_0 = parentNode.Owner;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Owner', this.get_owner(), $v_0);
            (this.get_owner()).fromJson($v_0);
            delete parentNode.Owner;
        }
        $v_0 = parentNode.OwnerTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['OwnerTitle'] = $v_0;
            delete parentNode.OwnerTitle;
        }
        $v_0 = parentNode.RequestToJoinLeaveEmailSetting;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['RequestToJoinLeaveEmailSetting'] = $v_0;
            delete parentNode.RequestToJoinLeaveEmailSetting;
        }
        $v_0 = parentNode.Users;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Users', this.get_users(), $v_0);
            (this.get_users()).fromJson($v_0);
            delete parentNode.Users;
        }
    },
    update: function SP_Group$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);

        $v_0.addQuery($v_1);
    }
};
SP.GroupPropertyNames = function SP_GroupPropertyNames() {
};
SP.GroupObjectPropertyNames = function SP_GroupObjectPropertyNames() {
};
SP.GroupCollection = function SP_GroupCollection(context, objectPath) {
    SP.GroupCollection.initializeBase(this, [context, objectPath]);
};
SP.GroupCollection.prototype = {
    itemAt: function SP_GroupCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_GroupCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_GroupCollection$get_childItemType() {
        return SP.Group;
    },
    getByName: function SP_GroupCollection$getByName(name) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByName'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetByName'] = $v_2;
        }
        $v_1 = $v_2[name];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.Group($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByName', [name]));
        $v_2[name] = $v_1;
        var $v_3 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_3.get_id(), $v_1);
        $v_0.addQuery($v_3);
        return $v_1;
    },
    getById: function SP_GroupCollection$getById(id) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetById'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = [];
            ((this.get_objectData()).get_methodReturnObjects())['GetById'] = $v_2;
        }
        $v_1 = $v_2[id];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.Group($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [id]));
        $v_2[id] = $v_1;
        var $v_3 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_3.get_id(), $v_1);
        $v_0.addQuery($v_3);
        return $v_1;
    },
    add: function SP_GroupCollection$add(parameters) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.Group($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [parameters]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        $v_1.$7_2(parameters);
        return $v_1;
    },
    removeByLoginName: function SP_GroupCollection$removeByLoginName(loginName) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'RemoveByLoginName', [loginName]);

        $v_0.addQuery($v_1);
    },
    removeById: function SP_GroupCollection$removeById(id) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'RemoveById', [id]);

        $v_0.addQuery($v_1);
    },
    remove: function SP_GroupCollection$remove(group) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Remove', [group]);

        $v_0.addQuery($v_1);
        this.removeChild(group);
    }
};
SP.GroupCreationInformation = function SP_GroupCreationInformation() {
    SP.GroupCreationInformation.initializeBase(this);
};
SP.GroupCreationInformation.prototype = {
    $3_1: null,
    $0_1: null,
    get_description: function SP_GroupCreationInformation$get_description() {
        return this.$3_1;
    },
    set_description: function SP_GroupCreationInformation$set_description(value) {
        this.$3_1 = value;
        return value;
    },
    get_title: function SP_GroupCreationInformation$get_title() {
        return this.$0_1;
    },
    set_title: function SP_GroupCreationInformation$set_title(value) {
        this.$0_1 = value;
        return value;
    },
    get_typeId: function SP_GroupCreationInformation$get_typeId() {
        return '{9fd1540e-59e6-47fa-9a00-5173c9c35785}';
    },
    writeToXml: function SP_GroupCreationInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['Description', 'Title'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_GroupCreationInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = $v_0;
            delete parentNode.Title;
        }
    }
};
SP.InformationRightsManagementSettings = function SP_InformationRightsManagementSettings(context, objectPath) {
    SP.InformationRightsManagementSettings.initializeBase(this, [context, objectPath]);
};
SP.InformationRightsManagementSettings.prototype = {
    get_allowPrint: function SP_InformationRightsManagementSettings$get_allowPrint() {
        this.checkUninitializedProperty('AllowPrint');
        return ((this.get_objectData()).get_properties())['AllowPrint'];
    },
    set_allowPrint: function SP_InformationRightsManagementSettings$set_allowPrint(value) {
        ((this.get_objectData()).get_properties())['AllowPrint'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AllowPrint', value));
        }
        return value;
    },
    get_allowScript: function SP_InformationRightsManagementSettings$get_allowScript() {
        this.checkUninitializedProperty('AllowScript');
        return ((this.get_objectData()).get_properties())['AllowScript'];
    },
    set_allowScript: function SP_InformationRightsManagementSettings$set_allowScript(value) {
        ((this.get_objectData()).get_properties())['AllowScript'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AllowScript', value));
        }
        return value;
    },
    get_allowWriteCopy: function SP_InformationRightsManagementSettings$get_allowWriteCopy() {
        this.checkUninitializedProperty('AllowWriteCopy');
        return ((this.get_objectData()).get_properties())['AllowWriteCopy'];
    },
    set_allowWriteCopy: function SP_InformationRightsManagementSettings$set_allowWriteCopy(value) {
        ((this.get_objectData()).get_properties())['AllowWriteCopy'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AllowWriteCopy', value));
        }
        return value;
    },
    get_disableDocumentBrowserView: function SP_InformationRightsManagementSettings$get_disableDocumentBrowserView() {
        this.checkUninitializedProperty('DisableDocumentBrowserView');
        return ((this.get_objectData()).get_properties())['DisableDocumentBrowserView'];
    },
    set_disableDocumentBrowserView: function SP_InformationRightsManagementSettings$set_disableDocumentBrowserView(value) {
        ((this.get_objectData()).get_properties())['DisableDocumentBrowserView'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DisableDocumentBrowserView', value));
        }
        return value;
    },
    get_documentAccessExpireDays: function SP_InformationRightsManagementSettings$get_documentAccessExpireDays() {
        this.checkUninitializedProperty('DocumentAccessExpireDays');
        return ((this.get_objectData()).get_properties())['DocumentAccessExpireDays'];
    },
    set_documentAccessExpireDays: function SP_InformationRightsManagementSettings$set_documentAccessExpireDays(value) {
        ((this.get_objectData()).get_properties())['DocumentAccessExpireDays'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DocumentAccessExpireDays', value));
        }
        return value;
    },
    get_documentLibraryProtectionExpireDate: function SP_InformationRightsManagementSettings$get_documentLibraryProtectionExpireDate() {
        this.checkUninitializedProperty('DocumentLibraryProtectionExpireDate');
        return ((this.get_objectData()).get_properties())['DocumentLibraryProtectionExpireDate'];
    },
    set_documentLibraryProtectionExpireDate: function SP_InformationRightsManagementSettings$set_documentLibraryProtectionExpireDate(value) {
        ((this.get_objectData()).get_properties())['DocumentLibraryProtectionExpireDate'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DocumentLibraryProtectionExpireDate', value));
        }
        return value;
    },
    get_enableDocumentAccessExpire: function SP_InformationRightsManagementSettings$get_enableDocumentAccessExpire() {
        this.checkUninitializedProperty('EnableDocumentAccessExpire');
        return ((this.get_objectData()).get_properties())['EnableDocumentAccessExpire'];
    },
    set_enableDocumentAccessExpire: function SP_InformationRightsManagementSettings$set_enableDocumentAccessExpire(value) {
        ((this.get_objectData()).get_properties())['EnableDocumentAccessExpire'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'EnableDocumentAccessExpire', value));
        }
        return value;
    },
    get_enableDocumentBrowserPublishingView: function SP_InformationRightsManagementSettings$get_enableDocumentBrowserPublishingView() {
        this.checkUninitializedProperty('EnableDocumentBrowserPublishingView');
        return ((this.get_objectData()).get_properties())['EnableDocumentBrowserPublishingView'];
    },
    set_enableDocumentBrowserPublishingView: function SP_InformationRightsManagementSettings$set_enableDocumentBrowserPublishingView(value) {
        ((this.get_objectData()).get_properties())['EnableDocumentBrowserPublishingView'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'EnableDocumentBrowserPublishingView', value));
        }
        return value;
    },
    get_enableGroupProtection: function SP_InformationRightsManagementSettings$get_enableGroupProtection() {
        this.checkUninitializedProperty('EnableGroupProtection');
        return ((this.get_objectData()).get_properties())['EnableGroupProtection'];
    },
    set_enableGroupProtection: function SP_InformationRightsManagementSettings$set_enableGroupProtection(value) {
        ((this.get_objectData()).get_properties())['EnableGroupProtection'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'EnableGroupProtection', value));
        }
        return value;
    },
    get_enableLicenseCacheExpire: function SP_InformationRightsManagementSettings$get_enableLicenseCacheExpire() {
        this.checkUninitializedProperty('EnableLicenseCacheExpire');
        return ((this.get_objectData()).get_properties())['EnableLicenseCacheExpire'];
    },
    set_enableLicenseCacheExpire: function SP_InformationRightsManagementSettings$set_enableLicenseCacheExpire(value) {
        ((this.get_objectData()).get_properties())['EnableLicenseCacheExpire'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'EnableLicenseCacheExpire', value));
        }
        return value;
    },
    get_groupName: function SP_InformationRightsManagementSettings$get_groupName() {
        this.checkUninitializedProperty('GroupName');
        return ((this.get_objectData()).get_properties())['GroupName'];
    },
    set_groupName: function SP_InformationRightsManagementSettings$set_groupName(value) {
        ((this.get_objectData()).get_properties())['GroupName'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'GroupName', value));
        }
        return value;
    },
    get_licenseCacheExpireDays: function SP_InformationRightsManagementSettings$get_licenseCacheExpireDays() {
        this.checkUninitializedProperty('LicenseCacheExpireDays');
        return ((this.get_objectData()).get_properties())['LicenseCacheExpireDays'];
    },
    set_licenseCacheExpireDays: function SP_InformationRightsManagementSettings$set_licenseCacheExpireDays(value) {
        ((this.get_objectData()).get_properties())['LicenseCacheExpireDays'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'LicenseCacheExpireDays', value));
        }
        return value;
    },
    get_policyDescription: function SP_InformationRightsManagementSettings$get_policyDescription() {
        this.checkUninitializedProperty('PolicyDescription');
        return ((this.get_objectData()).get_properties())['PolicyDescription'];
    },
    set_policyDescription: function SP_InformationRightsManagementSettings$set_policyDescription(value) {
        ((this.get_objectData()).get_properties())['PolicyDescription'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'PolicyDescription', value));
        }
        return value;
    },
    get_policyTitle: function SP_InformationRightsManagementSettings$get_policyTitle() {
        this.checkUninitializedProperty('PolicyTitle');
        return ((this.get_objectData()).get_properties())['PolicyTitle'];
    },
    set_policyTitle: function SP_InformationRightsManagementSettings$set_policyTitle(value) {
        ((this.get_objectData()).get_properties())['PolicyTitle'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'PolicyTitle', value));
        }
        return value;
    },
    initPropertiesFromJson: function SP_InformationRightsManagementSettings$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AllowPrint;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowPrint'] = $v_0;
            delete parentNode.AllowPrint;
        }
        $v_0 = parentNode.AllowScript;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowScript'] = $v_0;
            delete parentNode.AllowScript;
        }
        $v_0 = parentNode.AllowWriteCopy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowWriteCopy'] = $v_0;
            delete parentNode.AllowWriteCopy;
        }
        $v_0 = parentNode.DisableDocumentBrowserView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DisableDocumentBrowserView'] = $v_0;
            delete parentNode.DisableDocumentBrowserView;
        }
        $v_0 = parentNode.DocumentAccessExpireDays;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DocumentAccessExpireDays'] = $v_0;
            delete parentNode.DocumentAccessExpireDays;
        }
        $v_0 = parentNode.DocumentLibraryProtectionExpireDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DocumentLibraryProtectionExpireDate'] = $v_0;
            delete parentNode.DocumentLibraryProtectionExpireDate;
        }
        $v_0 = parentNode.EnableDocumentAccessExpire;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EnableDocumentAccessExpire'] = $v_0;
            delete parentNode.EnableDocumentAccessExpire;
        }
        $v_0 = parentNode.EnableDocumentBrowserPublishingView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EnableDocumentBrowserPublishingView'] = $v_0;
            delete parentNode.EnableDocumentBrowserPublishingView;
        }
        $v_0 = parentNode.EnableGroupProtection;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EnableGroupProtection'] = $v_0;
            delete parentNode.EnableGroupProtection;
        }
        $v_0 = parentNode.EnableLicenseCacheExpire;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EnableLicenseCacheExpire'] = $v_0;
            delete parentNode.EnableLicenseCacheExpire;
        }
        $v_0 = parentNode.GroupName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['GroupName'] = $v_0;
            delete parentNode.GroupName;
        }
        $v_0 = parentNode.LicenseCacheExpireDays;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['LicenseCacheExpireDays'] = $v_0;
            delete parentNode.LicenseCacheExpireDays;
        }
        $v_0 = parentNode.PolicyDescription;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['PolicyDescription'] = $v_0;
            delete parentNode.PolicyDescription;
        }
        $v_0 = parentNode.PolicyTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['PolicyTitle'] = $v_0;
            delete parentNode.PolicyTitle;
        }
    },
    reset: function SP_InformationRightsManagementSettings$reset() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Reset', null);

        $v_0.addQuery($v_1);
    },
    update: function SP_InformationRightsManagementSettings$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);

        $v_0.addQuery($v_1);
    }
};
SP.InformationRightsManagementSettingsPropertyNames = function SP_InformationRightsManagementSettingsPropertyNames() {
};
SP.Language = function SP_Language() {
    SP.Language.initializeBase(this);
};
SP.Language.prototype = {
    $S_1: null,
    $3z_1: null,
    $41_1: 0,
    get_displayName: function SP_Language$get_displayName() {
        return this.$S_1;
    },
    get_languageTag: function SP_Language$get_languageTag() {
        return this.$3z_1;
    },
    get_lcid: function SP_Language$get_lcid() {
        return this.$41_1;
    },
    get_typeId: function SP_Language$get_typeId() {
        return '{eae9f1b5-1ae9-417b-9a8b-04a1b4c05a4b}';
    },
    writeToXml: function SP_Language$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['DisplayName', 'LanguageTag', 'Lcid'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_Language$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.DisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$S_1 = $v_0;
            delete parentNode.DisplayName;
        }
        $v_0 = parentNode.LanguageTag;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3z_1 = $v_0;
            delete parentNode.LanguageTag;
        }
        $v_0 = parentNode.Lcid;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$41_1 = $v_0;
            delete parentNode.Lcid;
        }
    }
};
SP.List = function SP_List(context, objectPath) {
    SP.List.initializeBase(this, [context, objectPath]);
};
SP.List.prototype = {
    $7_2: function SP_List$$7_2($p0) {
        if ($p0) {
            ((this.get_objectData()).get_properties())['Description'] = $p0.$3_1;
            ((this.get_objectData()).get_properties())['TemplateFeatureId'] = $p0.$1V_1;
            ((this.get_objectData()).get_properties())['Title'] = $p0.$0_1;
        }
    },
    getItemById: function SP_List$getItemById(id) {
        if (typeof id === 'string') {
            return this.$4u_2(id.toString());
        }
        else {
            id = parseInt(id.toString());
            var $v_0;
            var $v_1 = ((this.get_objectData()).get_methodReturnObjects())['GetItemById'];

            if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
                $v_1 = [];
                ((this.get_objectData()).get_methodReturnObjects())['GetItemById'] = $v_1;
            }
            $v_0 = $v_1[id];
            if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
                return $v_0;
            }
            $v_0 = new SP.ListItem(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetItemById', [id]));
            $v_1[id] = $v_0;
            return $v_0;
        }
    },
    get_allowContentTypes: function SP_List$get_allowContentTypes() {
        this.checkUninitializedProperty('AllowContentTypes');
        return ((this.get_objectData()).get_properties())['AllowContentTypes'];
    },
    get_baseTemplate: function SP_List$get_baseTemplate() {
        this.checkUninitializedProperty('BaseTemplate');
        return ((this.get_objectData()).get_properties())['BaseTemplate'];
    },
    get_baseType: function SP_List$get_baseType() {
        this.checkUninitializedProperty('BaseType');
        return ((this.get_objectData()).get_properties())['BaseType'];
    },
    get_browserFileHandling: function SP_List$get_browserFileHandling() {
        this.checkUninitializedProperty('BrowserFileHandling');
        return ((this.get_objectData()).get_properties())['BrowserFileHandling'];
    },
    get_contentTypes: function SP_List$get_contentTypes() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['ContentTypes'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ContentTypeCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ContentTypes'));
            ((this.get_objectData()).get_clientObjectProperties())['ContentTypes'] = $v_0;
        }
        return $v_0;
    },
    get_contentTypesEnabled: function SP_List$get_contentTypesEnabled() {
        this.checkUninitializedProperty('ContentTypesEnabled');
        return ((this.get_objectData()).get_properties())['ContentTypesEnabled'];
    },
    set_contentTypesEnabled: function SP_List$set_contentTypesEnabled(value) {
        ((this.get_objectData()).get_properties())['ContentTypesEnabled'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ContentTypesEnabled', value));
        }
        return value;
    },
    get_created: function SP_List$get_created() {
        this.checkUninitializedProperty('Created');
        return ((this.get_objectData()).get_properties())['Created'];
    },
    get_dataSource: function SP_List$get_dataSource() {
        this.checkUninitializedProperty('DataSource');
        return ((this.get_objectData()).get_properties())['DataSource'];
    },
    get_defaultContentApprovalWorkflowId: function SP_List$get_defaultContentApprovalWorkflowId() {
        this.checkUninitializedProperty('DefaultContentApprovalWorkflowId');
        return ((this.get_objectData()).get_properties())['DefaultContentApprovalWorkflowId'];
    },
    set_defaultContentApprovalWorkflowId: function SP_List$set_defaultContentApprovalWorkflowId(value) {
        ((this.get_objectData()).get_properties())['DefaultContentApprovalWorkflowId'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DefaultContentApprovalWorkflowId', value));
        }
        return value;
    },
    get_defaultDisplayFormUrl: function SP_List$get_defaultDisplayFormUrl() {
        this.checkUninitializedProperty('DefaultDisplayFormUrl');
        return ((this.get_objectData()).get_properties())['DefaultDisplayFormUrl'];
    },
    set_defaultDisplayFormUrl: function SP_List$set_defaultDisplayFormUrl(value) {
        ((this.get_objectData()).get_properties())['DefaultDisplayFormUrl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DefaultDisplayFormUrl', value));
        }
        return value;
    },
    get_defaultEditFormUrl: function SP_List$get_defaultEditFormUrl() {
        this.checkUninitializedProperty('DefaultEditFormUrl');
        return ((this.get_objectData()).get_properties())['DefaultEditFormUrl'];
    },
    set_defaultEditFormUrl: function SP_List$set_defaultEditFormUrl(value) {
        ((this.get_objectData()).get_properties())['DefaultEditFormUrl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DefaultEditFormUrl', value));
        }
        return value;
    },
    get_defaultNewFormUrl: function SP_List$get_defaultNewFormUrl() {
        this.checkUninitializedProperty('DefaultNewFormUrl');
        return ((this.get_objectData()).get_properties())['DefaultNewFormUrl'];
    },
    set_defaultNewFormUrl: function SP_List$set_defaultNewFormUrl(value) {
        ((this.get_objectData()).get_properties())['DefaultNewFormUrl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DefaultNewFormUrl', value));
        }
        return value;
    },
    get_defaultView: function SP_List$get_defaultView() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['DefaultView'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.View(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'DefaultView'));
            ((this.get_objectData()).get_clientObjectProperties())['DefaultView'] = $v_0;
        }
        return $v_0;
    },
    get_defaultViewUrl: function SP_List$get_defaultViewUrl() {
        this.checkUninitializedProperty('DefaultViewUrl');
        return ((this.get_objectData()).get_properties())['DefaultViewUrl'];
    },
    get_description: function SP_List$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData()).get_properties())['Description'];
    },
    set_description: function SP_List$set_description(value) {
        ((this.get_objectData()).get_properties())['Description'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    get_direction: function SP_List$get_direction() {
        this.checkUninitializedProperty('Direction');
        return ((this.get_objectData()).get_properties())['Direction'];
    },
    set_direction: function SP_List$set_direction(value) {
        ((this.get_objectData()).get_properties())['Direction'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Direction', value));
        }
        return value;
    },
    get_documentTemplateUrl: function SP_List$get_documentTemplateUrl() {
        this.checkUninitializedProperty('DocumentTemplateUrl');
        return ((this.get_objectData()).get_properties())['DocumentTemplateUrl'];
    },
    set_documentTemplateUrl: function SP_List$set_documentTemplateUrl(value) {
        ((this.get_objectData()).get_properties())['DocumentTemplateUrl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DocumentTemplateUrl', value));
        }
        return value;
    },
    get_draftVersionVisibility: function SP_List$get_draftVersionVisibility() {
        this.checkUninitializedProperty('DraftVersionVisibility');
        return ((this.get_objectData()).get_properties())['DraftVersionVisibility'];
    },
    set_draftVersionVisibility: function SP_List$set_draftVersionVisibility(value) {
        ((this.get_objectData()).get_properties())['DraftVersionVisibility'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DraftVersionVisibility', value));
        }
        return value;
    },
    get_effectiveBasePermissions: function SP_List$get_effectiveBasePermissions() {
        this.checkUninitializedProperty('EffectiveBasePermissions');
        return ((this.get_objectData()).get_properties())['EffectiveBasePermissions'];
    },
    get_effectiveBasePermissionsForUI: function SP_List$get_effectiveBasePermissionsForUI() {
        this.checkUninitializedProperty('EffectiveBasePermissionsForUI');
        return ((this.get_objectData()).get_properties())['EffectiveBasePermissionsForUI'];
    },
    get_enableAttachments: function SP_List$get_enableAttachments() {
        this.checkUninitializedProperty('EnableAttachments');
        return ((this.get_objectData()).get_properties())['EnableAttachments'];
    },
    set_enableAttachments: function SP_List$set_enableAttachments(value) {
        ((this.get_objectData()).get_properties())['EnableAttachments'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'EnableAttachments', value));
        }
        return value;
    },
    get_enableFolderCreation: function SP_List$get_enableFolderCreation() {
        this.checkUninitializedProperty('EnableFolderCreation');
        return ((this.get_objectData()).get_properties())['EnableFolderCreation'];
    },
    set_enableFolderCreation: function SP_List$set_enableFolderCreation(value) {
        ((this.get_objectData()).get_properties())['EnableFolderCreation'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'EnableFolderCreation', value));
        }
        return value;
    },
    get_enableMinorVersions: function SP_List$get_enableMinorVersions() {
        this.checkUninitializedProperty('EnableMinorVersions');
        return ((this.get_objectData()).get_properties())['EnableMinorVersions'];
    },
    set_enableMinorVersions: function SP_List$set_enableMinorVersions(value) {
        ((this.get_objectData()).get_properties())['EnableMinorVersions'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'EnableMinorVersions', value));
        }
        return value;
    },
    get_enableModeration: function SP_List$get_enableModeration() {
        this.checkUninitializedProperty('EnableModeration');
        return ((this.get_objectData()).get_properties())['EnableModeration'];
    },
    set_enableModeration: function SP_List$set_enableModeration(value) {
        ((this.get_objectData()).get_properties())['EnableModeration'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'EnableModeration', value));
        }
        return value;
    },
    get_enableVersioning: function SP_List$get_enableVersioning() {
        this.checkUninitializedProperty('EnableVersioning');
        return ((this.get_objectData()).get_properties())['EnableVersioning'];
    },
    set_enableVersioning: function SP_List$set_enableVersioning(value) {
        ((this.get_objectData()).get_properties())['EnableVersioning'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'EnableVersioning', value));
        }
        return value;
    },
    get_entityTypeName: function SP_List$get_entityTypeName() {
        this.checkUninitializedProperty('EntityTypeName');
        return ((this.get_objectData()).get_properties())['EntityTypeName'];
    },
    get_eventReceivers: function SP_List$get_eventReceivers() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['EventReceivers'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.EventReceiverDefinitionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'EventReceivers'));
            ((this.get_objectData()).get_clientObjectProperties())['EventReceivers'] = $v_0;
        }
        return $v_0;
    },
    get_fields: function SP_List$get_fields() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Fields'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Fields'));
            ((this.get_objectData()).get_clientObjectProperties())['Fields'] = $v_0;
        }
        return $v_0;
    },
    get_forceCheckout: function SP_List$get_forceCheckout() {
        this.checkUninitializedProperty('ForceCheckout');
        return ((this.get_objectData()).get_properties())['ForceCheckout'];
    },
    set_forceCheckout: function SP_List$set_forceCheckout(value) {
        ((this.get_objectData()).get_properties())['ForceCheckout'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ForceCheckout', value));
        }
        return value;
    },
    get_forms: function SP_List$get_forms() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Forms'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FormCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Forms'));
            ((this.get_objectData()).get_clientObjectProperties())['Forms'] = $v_0;
        }
        return $v_0;
    },
    get_hasExternalDataSource: function SP_List$get_hasExternalDataSource() {
        this.checkUninitializedProperty('HasExternalDataSource');
        return ((this.get_objectData()).get_properties())['HasExternalDataSource'];
    },
    get_hidden: function SP_List$get_hidden() {
        this.checkUninitializedProperty('Hidden');
        return ((this.get_objectData()).get_properties())['Hidden'];
    },
    set_hidden: function SP_List$set_hidden(value) {
        ((this.get_objectData()).get_properties())['Hidden'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Hidden', value));
        }
        return value;
    },
    get_id: function SP_List$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_imageUrl: function SP_List$get_imageUrl() {
        this.checkUninitializedProperty('ImageUrl');
        return ((this.get_objectData()).get_properties())['ImageUrl'];
    },
    set_imageUrl: function SP_List$set_imageUrl(value) {
        ((this.get_objectData()).get_properties())['ImageUrl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ImageUrl', value));
        }
        return value;
    },
    get_informationRightsManagementSettings: function SP_List$get_informationRightsManagementSettings() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['InformationRightsManagementSettings'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.InformationRightsManagementSettings(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'InformationRightsManagementSettings'));
            ((this.get_objectData()).get_clientObjectProperties())['InformationRightsManagementSettings'] = $v_0;
        }
        return $v_0;
    },
    get_irmEnabled: function SP_List$get_irmEnabled() {
        this.checkUninitializedProperty('IrmEnabled');
        return ((this.get_objectData()).get_properties())['IrmEnabled'];
    },
    set_irmEnabled: function SP_List$set_irmEnabled(value) {
        ((this.get_objectData()).get_properties())['IrmEnabled'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'IrmEnabled', value));
        }
        return value;
    },
    get_irmExpire: function SP_List$get_irmExpire() {
        this.checkUninitializedProperty('IrmExpire');
        return ((this.get_objectData()).get_properties())['IrmExpire'];
    },
    set_irmExpire: function SP_List$set_irmExpire(value) {
        ((this.get_objectData()).get_properties())['IrmExpire'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'IrmExpire', value));
        }
        return value;
    },
    get_irmReject: function SP_List$get_irmReject() {
        this.checkUninitializedProperty('IrmReject');
        return ((this.get_objectData()).get_properties())['IrmReject'];
    },
    set_irmReject: function SP_List$set_irmReject(value) {
        ((this.get_objectData()).get_properties())['IrmReject'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'IrmReject', value));
        }
        return value;
    },
    get_isApplicationList: function SP_List$get_isApplicationList() {
        this.checkUninitializedProperty('IsApplicationList');
        return ((this.get_objectData()).get_properties())['IsApplicationList'];
    },
    set_isApplicationList: function SP_List$set_isApplicationList(value) {
        ((this.get_objectData()).get_properties())['IsApplicationList'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'IsApplicationList', value));
        }
        return value;
    },
    get_isCatalog: function SP_List$get_isCatalog() {
        this.checkUninitializedProperty('IsCatalog');
        return ((this.get_objectData()).get_properties())['IsCatalog'];
    },
    get_isPrivate: function SP_List$get_isPrivate() {
        this.checkUninitializedProperty('IsPrivate');
        return ((this.get_objectData()).get_properties())['IsPrivate'];
    },
    get_isSiteAssetsLibrary: function SP_List$get_isSiteAssetsLibrary() {
        this.checkUninitializedProperty('IsSiteAssetsLibrary');
        return ((this.get_objectData()).get_properties())['IsSiteAssetsLibrary'];
    },
    get_itemCount: function SP_List$get_itemCount() {
        this.checkUninitializedProperty('ItemCount');
        return ((this.get_objectData()).get_properties())['ItemCount'];
    },
    get_lastItemDeletedDate: function SP_List$get_lastItemDeletedDate() {
        this.checkUninitializedProperty('LastItemDeletedDate');
        return ((this.get_objectData()).get_properties())['LastItemDeletedDate'];
    },
    get_lastItemModifiedDate: function SP_List$get_lastItemModifiedDate() {
        this.checkUninitializedProperty('LastItemModifiedDate');
        return ((this.get_objectData()).get_properties())['LastItemModifiedDate'];
    },
    set_lastItemModifiedDate: function SP_List$set_lastItemModifiedDate(value) {
        ((this.get_objectData()).get_properties())['LastItemModifiedDate'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'LastItemModifiedDate', value));
        }
        return value;
    },
    get_listItemEntityTypeFullName: function SP_List$get_listItemEntityTypeFullName() {
        this.checkUninitializedProperty('ListItemEntityTypeFullName');
        return ((this.get_objectData()).get_properties())['ListItemEntityTypeFullName'];
    },
    get_multipleDataList: function SP_List$get_multipleDataList() {
        this.checkUninitializedProperty('MultipleDataList');
        return ((this.get_objectData()).get_properties())['MultipleDataList'];
    },
    set_multipleDataList: function SP_List$set_multipleDataList(value) {
        ((this.get_objectData()).get_properties())['MultipleDataList'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'MultipleDataList', value));
        }
        return value;
    },
    get_noCrawl: function SP_List$get_noCrawl() {
        this.checkUninitializedProperty('NoCrawl');
        return ((this.get_objectData()).get_properties())['NoCrawl'];
    },
    set_noCrawl: function SP_List$set_noCrawl(value) {
        ((this.get_objectData()).get_properties())['NoCrawl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'NoCrawl', value));
        }
        return value;
    },
    get_onQuickLaunch: function SP_List$get_onQuickLaunch() {
        this.checkUninitializedProperty('OnQuickLaunch');
        return ((this.get_objectData()).get_properties())['OnQuickLaunch'];
    },
    set_onQuickLaunch: function SP_List$set_onQuickLaunch(value) {
        ((this.get_objectData()).get_properties())['OnQuickLaunch'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'OnQuickLaunch', value));
        }
        return value;
    },
    get_parentWeb: function SP_List$get_parentWeb() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['ParentWeb'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Web(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ParentWeb'));
            ((this.get_objectData()).get_clientObjectProperties())['ParentWeb'] = $v_0;
        }
        return $v_0;
    },
    get_parentWebUrl: function SP_List$get_parentWebUrl() {
        this.checkUninitializedProperty('ParentWebUrl');
        return ((this.get_objectData()).get_properties())['ParentWebUrl'];
    },
    get_rootFolder: function SP_List$get_rootFolder() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['RootFolder'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Folder(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RootFolder'));
            ((this.get_objectData()).get_clientObjectProperties())['RootFolder'] = $v_0;
        }
        return $v_0;
    },
    get_schemaXml: function SP_List$get_schemaXml() {
        this.checkUninitializedProperty('SchemaXml');
        return ((this.get_objectData()).get_properties())['SchemaXml'];
    },
    get_serverTemplateCanCreateFolders: function SP_List$get_serverTemplateCanCreateFolders() {
        this.checkUninitializedProperty('ServerTemplateCanCreateFolders');
        return ((this.get_objectData()).get_properties())['ServerTemplateCanCreateFolders'];
    },
    get_templateFeatureId: function SP_List$get_templateFeatureId() {
        this.checkUninitializedProperty('TemplateFeatureId');
        return ((this.get_objectData()).get_properties())['TemplateFeatureId'];
    },
    get_title: function SP_List$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData()).get_properties())['Title'];
    },
    set_title: function SP_List$set_title(value) {
        ((this.get_objectData()).get_properties())['Title'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    get_userCustomActions: function SP_List$get_userCustomActions() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['UserCustomActions'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.UserCustomActionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'UserCustomActions'));
            ((this.get_objectData()).get_clientObjectProperties())['UserCustomActions'] = $v_0;
        }
        return $v_0;
    },
    get_validationFormula: function SP_List$get_validationFormula() {
        this.checkUninitializedProperty('ValidationFormula');
        return ((this.get_objectData()).get_properties())['ValidationFormula'];
    },
    set_validationFormula: function SP_List$set_validationFormula(value) {
        ((this.get_objectData()).get_properties())['ValidationFormula'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ValidationFormula', value));
        }
        return value;
    },
    get_validationMessage: function SP_List$get_validationMessage() {
        this.checkUninitializedProperty('ValidationMessage');
        return ((this.get_objectData()).get_properties())['ValidationMessage'];
    },
    set_validationMessage: function SP_List$set_validationMessage(value) {
        ((this.get_objectData()).get_properties())['ValidationMessage'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ValidationMessage', value));
        }
        return value;
    },
    get_views: function SP_List$get_views() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Views'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ViewCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Views'));
            ((this.get_objectData()).get_clientObjectProperties())['Views'] = $v_0;
        }
        return $v_0;
    },
    get_workflowAssociations: function SP_List$get_workflowAssociations() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['WorkflowAssociations'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Workflow.WorkflowAssociationCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'WorkflowAssociations'));
            ((this.get_objectData()).get_clientObjectProperties())['WorkflowAssociations'] = $v_0;
        }
        return $v_0;
    },
    initPropertiesFromJson: function SP_List$initPropertiesFromJson(parentNode) {
        SP.SecurableObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AllowContentTypes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowContentTypes'] = $v_0;
            delete parentNode.AllowContentTypes;
        }
        $v_0 = parentNode.BaseTemplate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['BaseTemplate'] = $v_0;
            delete parentNode.BaseTemplate;
        }
        $v_0 = parentNode.BaseType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['BaseType'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.BaseType;
        }
        $v_0 = parentNode.BrowserFileHandling;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['BrowserFileHandling'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.BrowserFileHandling;
        }
        $v_0 = parentNode.ContentTypes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ContentTypes', this.get_contentTypes(), $v_0);
            (this.get_contentTypes()).fromJson($v_0);
            delete parentNode.ContentTypes;
        }
        $v_0 = parentNode.ContentTypesEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ContentTypesEnabled'] = $v_0;
            delete parentNode.ContentTypesEnabled;
        }
        $v_0 = parentNode.Created;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Created'] = $v_0;
            delete parentNode.Created;
        }
        $v_0 = parentNode.DataSource;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DataSource'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.DataSource;
        }
        $v_0 = parentNode.DefaultContentApprovalWorkflowId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DefaultContentApprovalWorkflowId'] = $v_0;
            delete parentNode.DefaultContentApprovalWorkflowId;
        }
        $v_0 = parentNode.DefaultDisplayFormUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DefaultDisplayFormUrl'] = $v_0;
            delete parentNode.DefaultDisplayFormUrl;
        }
        $v_0 = parentNode.DefaultEditFormUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DefaultEditFormUrl'] = $v_0;
            delete parentNode.DefaultEditFormUrl;
        }
        $v_0 = parentNode.DefaultNewFormUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DefaultNewFormUrl'] = $v_0;
            delete parentNode.DefaultNewFormUrl;
        }
        $v_0 = parentNode.DefaultView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('DefaultView', this.get_defaultView(), $v_0);
            (this.get_defaultView()).fromJson($v_0);
            delete parentNode.DefaultView;
        }
        $v_0 = parentNode.DefaultViewUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DefaultViewUrl'] = $v_0;
            delete parentNode.DefaultViewUrl;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Description'] = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.Direction;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Direction'] = $v_0;
            delete parentNode.Direction;
        }
        $v_0 = parentNode.DocumentTemplateUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DocumentTemplateUrl'] = $v_0;
            delete parentNode.DocumentTemplateUrl;
        }
        $v_0 = parentNode.DraftVersionVisibility;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DraftVersionVisibility'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.DraftVersionVisibility;
        }
        $v_0 = parentNode.EffectiveBasePermissions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EffectiveBasePermissions'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.EffectiveBasePermissions;
        }
        $v_0 = parentNode.EffectiveBasePermissionsForUI;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EffectiveBasePermissionsForUI'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.EffectiveBasePermissionsForUI;
        }
        $v_0 = parentNode.EnableAttachments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EnableAttachments'] = $v_0;
            delete parentNode.EnableAttachments;
        }
        $v_0 = parentNode.EnableFolderCreation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EnableFolderCreation'] = $v_0;
            delete parentNode.EnableFolderCreation;
        }
        $v_0 = parentNode.EnableMinorVersions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EnableMinorVersions'] = $v_0;
            delete parentNode.EnableMinorVersions;
        }
        $v_0 = parentNode.EnableModeration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EnableModeration'] = $v_0;
            delete parentNode.EnableModeration;
        }
        $v_0 = parentNode.EnableVersioning;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EnableVersioning'] = $v_0;
            delete parentNode.EnableVersioning;
        }
        $v_0 = parentNode.EntityTypeName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EntityTypeName'] = $v_0;
            delete parentNode.EntityTypeName;
        }
        $v_0 = parentNode.EventReceivers;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('EventReceivers', this.get_eventReceivers(), $v_0);
            (this.get_eventReceivers()).fromJson($v_0);
            delete parentNode.EventReceivers;
        }
        $v_0 = parentNode.Fields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Fields', this.get_fields(), $v_0);
            (this.get_fields()).fromJson($v_0);
            delete parentNode.Fields;
        }
        $v_0 = parentNode.ForceCheckout;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ForceCheckout'] = $v_0;
            delete parentNode.ForceCheckout;
        }
        $v_0 = parentNode.Forms;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Forms', this.get_forms(), $v_0);
            (this.get_forms()).fromJson($v_0);
            delete parentNode.Forms;
        }
        $v_0 = parentNode.HasExternalDataSource;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['HasExternalDataSource'] = $v_0;
            delete parentNode.HasExternalDataSource;
        }
        $v_0 = parentNode.Hidden;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Hidden'] = $v_0;
            delete parentNode.Hidden;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.ImageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ImageUrl'] = $v_0;
            delete parentNode.ImageUrl;
        }
        $v_0 = parentNode.InformationRightsManagementSettings;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('InformationRightsManagementSettings', this.get_informationRightsManagementSettings(), $v_0);
            (this.get_informationRightsManagementSettings()).fromJson($v_0);
            delete parentNode.InformationRightsManagementSettings;
        }
        $v_0 = parentNode.IrmEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IrmEnabled'] = $v_0;
            delete parentNode.IrmEnabled;
        }
        $v_0 = parentNode.IrmExpire;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IrmExpire'] = $v_0;
            delete parentNode.IrmExpire;
        }
        $v_0 = parentNode.IrmReject;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IrmReject'] = $v_0;
            delete parentNode.IrmReject;
        }
        $v_0 = parentNode.IsApplicationList;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsApplicationList'] = $v_0;
            delete parentNode.IsApplicationList;
        }
        $v_0 = parentNode.IsCatalog;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsCatalog'] = $v_0;
            delete parentNode.IsCatalog;
        }
        $v_0 = parentNode.IsPrivate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsPrivate'] = $v_0;
            delete parentNode.IsPrivate;
        }
        $v_0 = parentNode.IsSiteAssetsLibrary;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsSiteAssetsLibrary'] = $v_0;
            delete parentNode.IsSiteAssetsLibrary;
        }
        $v_0 = parentNode.ItemCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ItemCount'] = $v_0;
            delete parentNode.ItemCount;
        }
        $v_0 = parentNode.LastItemDeletedDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['LastItemDeletedDate'] = $v_0;
            delete parentNode.LastItemDeletedDate;
        }
        $v_0 = parentNode.LastItemModifiedDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['LastItemModifiedDate'] = $v_0;
            delete parentNode.LastItemModifiedDate;
        }
        $v_0 = parentNode.ListItemEntityTypeFullName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ListItemEntityTypeFullName'] = $v_0;
            delete parentNode.ListItemEntityTypeFullName;
        }
        $v_0 = parentNode.MultipleDataList;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['MultipleDataList'] = $v_0;
            delete parentNode.MultipleDataList;
        }
        $v_0 = parentNode.NoCrawl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['NoCrawl'] = $v_0;
            delete parentNode.NoCrawl;
        }
        $v_0 = parentNode.OnQuickLaunch;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['OnQuickLaunch'] = $v_0;
            delete parentNode.OnQuickLaunch;
        }
        $v_0 = parentNode.ParentWeb;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ParentWeb', this.get_parentWeb(), $v_0);
            (this.get_parentWeb()).fromJson($v_0);
            delete parentNode.ParentWeb;
        }
        $v_0 = parentNode.ParentWebUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ParentWebUrl'] = $v_0;
            delete parentNode.ParentWebUrl;
        }
        $v_0 = parentNode.RootFolder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('RootFolder', this.get_rootFolder(), $v_0);
            (this.get_rootFolder()).fromJson($v_0);
            delete parentNode.RootFolder;
        }
        $v_0 = parentNode.SchemaXml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SchemaXml'] = $v_0;
            delete parentNode.SchemaXml;
        }
        $v_0 = parentNode.ServerTemplateCanCreateFolders;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ServerTemplateCanCreateFolders'] = $v_0;
            delete parentNode.ServerTemplateCanCreateFolders;
        }
        $v_0 = parentNode.TemplateFeatureId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['TemplateFeatureId'] = $v_0;
            delete parentNode.TemplateFeatureId;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Title'] = $v_0;
            delete parentNode.Title;
        }
        $v_0 = parentNode.UserCustomActions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('UserCustomActions', this.get_userCustomActions(), $v_0);
            (this.get_userCustomActions()).fromJson($v_0);
            delete parentNode.UserCustomActions;
        }
        $v_0 = parentNode.ValidationFormula;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ValidationFormula'] = $v_0;
            delete parentNode.ValidationFormula;
        }
        $v_0 = parentNode.ValidationMessage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ValidationMessage'] = $v_0;
            delete parentNode.ValidationMessage;
        }
        $v_0 = parentNode.Views;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Views', this.get_views(), $v_0);
            (this.get_views()).fromJson($v_0);
            delete parentNode.Views;
        }
        $v_0 = parentNode.WorkflowAssociations;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('WorkflowAssociations', this.get_workflowAssociations(), $v_0);
            (this.get_workflowAssociations()).fromJson($v_0);
            delete parentNode.WorkflowAssociations;
        }
    },
    getChanges: function SP_List$getChanges(query) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.ChangeCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetChanges', [query]));
        return $v_1;
    },
    getListItemChangesSinceToken: function SP_List$getListItemChangesSinceToken(query) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetListItemChangesSinceToken', [query]);

        $v_0.addQuery($v_2);
        $v_1 = [];
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    getUserEffectivePermissions: function SP_List$getUserEffectivePermissions(userName) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetUserEffectivePermissions', [userName]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.BasePermissions();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    saveAsNewView: function SP_List$saveAsNewView(oldName, newName, privateView, uri) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'SaveAsNewView', [oldName, newName, privateView, uri]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    getRelatedFields: function SP_List$getRelatedFields() {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.RelatedFieldCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetRelatedFields', null));
        return $v_1;
    },
    getRelatedFieldsExtendedData: function SP_List$getRelatedFieldsExtendedData() {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.RelatedFieldExtendedDataCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetRelatedFieldsExtendedData', null));
        return $v_1;
    },
    renderListFormData: function SP_List$renderListFormData(itemId, formId, mode) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'RenderListFormData', [itemId, formId, mode]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    renderListData: function SP_List$renderListData(viewXml) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'RenderListData', [viewXml]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    reserveListItemId: function SP_List$reserveListItemId() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ReserveListItemId', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.IntResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    update: function SP_List$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);

        $v_0.addQuery($v_1);
    },
    getView: function SP_List$getView(viewGuid) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetView'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetView'] = $v_2;
        }
        $v_1 = $v_2[viewGuid.toString()];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.View($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetView', [viewGuid]));
        $v_2[viewGuid.toString()] = $v_1;
        return $v_1;
    },
    deleteObject: function SP_List$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    },
    recycle: function SP_List$recycle() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Recycle', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.GuidResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeFromParentCollection();
        return $v_1;
    },
    getItems: function SP_List$getItems(query) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.ListItemCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetItems', [query]));
        return $v_1;
    },
    $4u_2: function SP_List$$4u_2($p0) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetItemByStringId'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetItemByStringId'] = $v_2;
        }
        $v_1 = $v_2[$p0];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.ListItem($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetItemByStringId', [$p0]));
        $v_2[$p0] = $v_1;
        return $v_1;
    },
    addItem: function SP_List$addItem(parameters) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.ListItem($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'AddItem', [parameters]));
        $v_1.$7_2(parameters);
        return $v_1;
    }
};
SP.ListPropertyNames = function SP_ListPropertyNames() {
};
SP.ListObjectPropertyNames = function SP_ListObjectPropertyNames() {
};
SP.ListCollection = function SP_ListCollection(context, objectPath) {
    SP.ListCollection.initializeBase(this, [context, objectPath]);
};
SP.ListCollection.prototype = {
    itemAt: function SP_ListCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_ListCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_ListCollection$get_childItemType() {
        return SP.List;
    },
    getByTitle: function SP_ListCollection$getByTitle(title) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByTitle'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetByTitle'] = $v_2;
        }
        $v_1 = $v_2[title.toUpperCase()];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.List($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByTitle', [title]));
        $v_2[title.toUpperCase()] = $v_1;
        var $v_3 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_3.get_id(), $v_1);
        $v_0.addQuery($v_3);
        return $v_1;
    },
    getById: function SP_ListCollection$getById(id) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetById'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetById'] = $v_2;
        }
        $v_1 = $v_2[id.toString()];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.List($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [id]));
        $v_2[id.toString()] = $v_1;
        return $v_1;
    },
    add: function SP_ListCollection$add(parameters) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.List($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [parameters]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        $v_1.$7_2(parameters);
        return $v_1;
    },
    ensureSitePagesLibrary: function SP_ListCollection$ensureSitePagesLibrary() {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.List($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'EnsureSitePagesLibrary', null));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    ensureSiteAssetsLibrary: function SP_ListCollection$ensureSiteAssetsLibrary() {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.List($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'EnsureSiteAssetsLibrary', null));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    }
};
SP.ListCreationInformation = function SP_ListCreationInformation() {
    SP.ListCreationInformation.initializeBase(this);
};
SP.ListCreationInformation.prototype = {
    $2E_1: null,
    $2F_1: null,
    $3_1: null,
    $2G_1: 0,
    $2p_1: 0,
    $1V_1: null,
    $33_1: 0,
    $0_1: null,
    $2_1: null,
    get_customSchemaXml: function SP_ListCreationInformation$get_customSchemaXml() {
        return this.$2E_1;
    },
    set_customSchemaXml: function SP_ListCreationInformation$set_customSchemaXml(value) {
        this.$2E_1 = value;
        return value;
    },
    get_dataSourceProperties: function SP_ListCreationInformation$get_dataSourceProperties() {
        return this.$2F_1;
    },
    set_dataSourceProperties: function SP_ListCreationInformation$set_dataSourceProperties(value) {
        this.$2F_1 = value;
        return value;
    },
    get_description: function SP_ListCreationInformation$get_description() {
        return this.$3_1;
    },
    set_description: function SP_ListCreationInformation$set_description(value) {
        this.$3_1 = value;
        return value;
    },
    get_documentTemplateType: function SP_ListCreationInformation$get_documentTemplateType() {
        return this.$2G_1;
    },
    set_documentTemplateType: function SP_ListCreationInformation$set_documentTemplateType(value) {
        this.$2G_1 = value;
        return value;
    },
    get_quickLaunchOption: function SP_ListCreationInformation$get_quickLaunchOption() {
        return this.$2p_1;
    },
    set_quickLaunchOption: function SP_ListCreationInformation$set_quickLaunchOption(value) {
        this.$2p_1 = value;
        return value;
    },
    get_templateFeatureId: function SP_ListCreationInformation$get_templateFeatureId() {
        return this.$1V_1;
    },
    set_templateFeatureId: function SP_ListCreationInformation$set_templateFeatureId(value) {
        this.$1V_1 = value;
        return value;
    },
    get_templateType: function SP_ListCreationInformation$get_templateType() {
        return this.$33_1;
    },
    set_templateType: function SP_ListCreationInformation$set_templateType(value) {
        this.$33_1 = value;
        return value;
    },
    get_title: function SP_ListCreationInformation$get_title() {
        return this.$0_1;
    },
    set_title: function SP_ListCreationInformation$set_title(value) {
        this.$0_1 = value;
        return value;
    },
    get_url: function SP_ListCreationInformation$get_url() {
        return this.$2_1;
    },
    set_url: function SP_ListCreationInformation$set_url(value) {
        this.$2_1 = value;
        return value;
    },
    get_typeId: function SP_ListCreationInformation$get_typeId() {
        return '{e247b7fc-095e-4ea4-a4c9-c5d373723d8c}';
    },
    writeToXml: function SP_ListCreationInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['CustomSchemaXml', 'DataSourceProperties', 'Description', 'DocumentTemplateType', 'QuickLaunchOption', 'TemplateFeatureId', 'TemplateType', 'Title', 'Url'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_ListCreationInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.CustomSchemaXml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2E_1 = $v_0;
            delete parentNode.CustomSchemaXml;
        }
        $v_0 = parentNode.DataSourceProperties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2F_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.DataSourceProperties;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.DocumentTemplateType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2G_1 = $v_0;
            delete parentNode.DocumentTemplateType;
        }
        $v_0 = parentNode.QuickLaunchOption;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2p_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.QuickLaunchOption;
        }
        $v_0 = parentNode.TemplateFeatureId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1V_1 = $v_0;
            delete parentNode.TemplateFeatureId;
        }
        $v_0 = parentNode.TemplateType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$33_1 = $v_0;
            delete parentNode.TemplateType;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = $v_0;
            delete parentNode.Title;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = $v_0;
            delete parentNode.Url;
        }
    }
};
SP.ListDataSource = function SP_ListDataSource() {
    SP.ListDataSource.initializeBase(this);
};
SP.ListDataSource.prototype = {
    $4B_1: null,
    get_properties: function SP_ListDataSource$get_properties() {
        return this.$4B_1;
    },
    get_typeId: function SP_ListDataSource$get_typeId() {
        return '{06bfe4a5-1516-4b55-a6d7-ecbe3ff7a3c8}';
    },
    writeToXml: function SP_ListDataSource$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['Properties'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_ListDataSource$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Properties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4B_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.Properties;
        }
    }
};
SP.ListDataValidationExceptionValue = function SP_ListDataValidationExceptionValue() {
    SP.ListDataValidationExceptionValue.initializeBase(this);
};
SP.ListDataValidationExceptionValue.prototype = {
    $2L_1: null,
    $3x_1: null,
    get_fieldFailures: function SP_ListDataValidationExceptionValue$get_fieldFailures() {
        return this.$2L_1;
    },
    get_itemFailure: function SP_ListDataValidationExceptionValue$get_itemFailure() {
        return this.$3x_1;
    },
    get_typeId: function SP_ListDataValidationExceptionValue$get_typeId() {
        return '{356fe248-721a-4adf-af96-20822bc5476e}';
    },
    writeToXml: function SP_ListDataValidationExceptionValue$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['FieldFailures', 'ItemFailure'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_ListDataValidationExceptionValue$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.FieldFailures;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2L_1 = [];
            SP.DataConvert.populateArray(null, this.$2L_1, $v_0);
            delete parentNode.FieldFailures;
        }
        $v_0 = parentNode.ItemFailure;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3x_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.ItemFailure;
        }
    }
};
SP.ListDataValidationFailure = function SP_ListDataValidationFailure() {
    SP.ListDataValidationFailure.initializeBase(this);
};
SP.ListDataValidationFailure.prototype = {
    $S_1: null,
    $1F_1: null,
    $6_1: null,
    $4D_1: 0,
    $4U_1: 0,
    get_displayName: function SP_ListDataValidationFailure$get_displayName() {
        return this.$S_1;
    },
    get_message: function SP_ListDataValidationFailure$get_message() {
        return this.$1F_1;
    },
    get_name: function SP_ListDataValidationFailure$get_name() {
        return this.$6_1;
    },
    get_reason: function SP_ListDataValidationFailure$get_reason() {
        return this.$4D_1;
    },
    get_validationType: function SP_ListDataValidationFailure$get_validationType() {
        return this.$4U_1;
    },
    get_typeId: function SP_ListDataValidationFailure$get_typeId() {
        return '{6e0bc783-53a2-4506-827f-135040524794}';
    },
    writeToXml: function SP_ListDataValidationFailure$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['DisplayName', 'Message', 'Name', 'Reason', 'ValidationType'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_ListDataValidationFailure$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.DisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$S_1 = $v_0;
            delete parentNode.DisplayName;
        }
        $v_0 = parentNode.Message;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1F_1 = $v_0;
            delete parentNode.Message;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.Reason;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4D_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.Reason;
        }
        $v_0 = parentNode.ValidationType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4U_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.ValidationType;
        }
    }
};
SP.ListItem = function SP_ListItem(context, objectPath) {
    SP.ListItem.initializeBase(this, [context, objectPath]);
};
SP.ListItem.prototype = {
    get_fieldValues: function SP_ListItem$get_fieldValues() {
        var $v_0 = ((this.get_objectData()).get_methodReturnObjects())[SP.ClientConstants.FieldValuesMethodName];

        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            ((this.get_objectData()).get_methodReturnObjects())[SP.ClientConstants.FieldValuesMethodName] = $v_0;
        }
        return $v_0;
    },
    get_item: function SP_ListItem$get_item(fieldName) {
        return this.$Q_2(fieldName);
    },
    set_item: function SP_ListItem$set_item(fieldName, value) {
        this.$1e_2(fieldName, value);
        return value;
    },
    $7_2: function SP_ListItem$$7_2($p0) {
        if ($p0) {
            ((this.get_objectData()).get_properties())['FileSystemObjectType'] = $p0.$1W_1;
            ((this.get_objectData()).get_properties())['Id'] = -1;
        }
    },
    get_attachmentFiles: function SP_ListItem$get_attachmentFiles() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['AttachmentFiles'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.AttachmentCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'AttachmentFiles'));
            ((this.get_objectData()).get_clientObjectProperties())['AttachmentFiles'] = $v_0;
        }
        return $v_0;
    },
    get_contentType: function SP_ListItem$get_contentType() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['ContentType'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ContentType(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ContentType'));
            ((this.get_objectData()).get_clientObjectProperties())['ContentType'] = $v_0;
        }
        return $v_0;
    },
    get_displayName: function SP_ListItem$get_displayName() {
        this.checkUninitializedProperty('DisplayName');
        return ((this.get_objectData()).get_properties())['DisplayName'];
    },
    get_effectiveBasePermissions: function SP_ListItem$get_effectiveBasePermissions() {
        this.checkUninitializedProperty('EffectiveBasePermissions');
        return ((this.get_objectData()).get_properties())['EffectiveBasePermissions'];
    },
    get_effectiveBasePermissionsForUI: function SP_ListItem$get_effectiveBasePermissionsForUI() {
        this.checkUninitializedProperty('EffectiveBasePermissionsForUI');
        return ((this.get_objectData()).get_properties())['EffectiveBasePermissionsForUI'];
    },
    get_fieldValuesAsHtml: function SP_ListItem$get_fieldValuesAsHtml() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['FieldValuesAsHtml'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FieldStringValues(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'FieldValuesAsHtml'));
            ((this.get_objectData()).get_clientObjectProperties())['FieldValuesAsHtml'] = $v_0;
        }
        return $v_0;
    },
    get_fieldValuesAsText: function SP_ListItem$get_fieldValuesAsText() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['FieldValuesAsText'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FieldStringValues(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'FieldValuesAsText'));
            ((this.get_objectData()).get_clientObjectProperties())['FieldValuesAsText'] = $v_0;
        }
        return $v_0;
    },
    get_fieldValuesForEdit: function SP_ListItem$get_fieldValuesForEdit() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['FieldValuesForEdit'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FieldStringValues(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'FieldValuesForEdit'));
            ((this.get_objectData()).get_clientObjectProperties())['FieldValuesForEdit'] = $v_0;
        }
        return $v_0;
    },
    get_file: function SP_ListItem$get_file() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['File'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.File(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'File'));
            ((this.get_objectData()).get_clientObjectProperties())['File'] = $v_0;
        }
        return $v_0;
    },
    get_fileSystemObjectType: function SP_ListItem$get_fileSystemObjectType() {
        this.checkUninitializedProperty('FileSystemObjectType');
        return ((this.get_objectData()).get_properties())['FileSystemObjectType'];
    },
    get_folder: function SP_ListItem$get_folder() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Folder'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Folder(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Folder'));
            ((this.get_objectData()).get_clientObjectProperties())['Folder'] = $v_0;
        }
        return $v_0;
    },
    get_id: function SP_ListItem$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_parentList: function SP_ListItem$get_parentList() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['ParentList'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.List(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ParentList'));
            ((this.get_objectData()).get_clientObjectProperties())['ParentList'] = $v_0;
        }
        return $v_0;
    },
    initNonPropertiesFromJson: function SP_ListItem$initNonPropertiesFromJson(parentNode) {
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    initPropertiesFromJson: function SP_ListItem$initPropertiesFromJson(parentNode) {
        SP.SecurableObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AttachmentFiles;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('AttachmentFiles', this.get_attachmentFiles(), $v_0);
            (this.get_attachmentFiles()).fromJson($v_0);
            delete parentNode.AttachmentFiles;
        }
        $v_0 = parentNode.ContentType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ContentType', this.get_contentType(), $v_0);
            (this.get_contentType()).fromJson($v_0);
            delete parentNode.ContentType;
        }
        $v_0 = parentNode.DisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DisplayName'] = $v_0;
            delete parentNode.DisplayName;
        }
        $v_0 = parentNode.EffectiveBasePermissions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EffectiveBasePermissions'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.EffectiveBasePermissions;
        }
        $v_0 = parentNode.EffectiveBasePermissionsForUI;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EffectiveBasePermissionsForUI'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.EffectiveBasePermissionsForUI;
        }
        $v_0 = parentNode.FieldValuesAsHtml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('FieldValuesAsHtml', this.get_fieldValuesAsHtml(), $v_0);
            (this.get_fieldValuesAsHtml()).fromJson($v_0);
            delete parentNode.FieldValuesAsHtml;
        }
        $v_0 = parentNode.FieldValuesAsText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('FieldValuesAsText', this.get_fieldValuesAsText(), $v_0);
            (this.get_fieldValuesAsText()).fromJson($v_0);
            delete parentNode.FieldValuesAsText;
        }
        $v_0 = parentNode.FieldValuesForEdit;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('FieldValuesForEdit', this.get_fieldValuesForEdit(), $v_0);
            (this.get_fieldValuesForEdit()).fromJson($v_0);
            delete parentNode.FieldValuesForEdit;
        }
        $v_0 = parentNode.File;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('File', this.get_file(), $v_0);
            (this.get_file()).fromJson($v_0);
            delete parentNode.File;
        }
        $v_0 = parentNode.FileSystemObjectType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['FileSystemObjectType'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.FileSystemObjectType;
        }
        $v_0 = parentNode.Folder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Folder', this.get_folder(), $v_0);
            (this.get_folder()).fromJson($v_0);
            delete parentNode.Folder;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.ParentList;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ParentList', this.get_parentList(), $v_0);
            (this.get_parentList()).fromJson($v_0);
            delete parentNode.ParentList;
        }
    },
    $Q_2: function SP_ListItem$$Q_2($p0) {
        var $v_0 = (this.get_fieldValues())[$p0];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString(SP.ResourceStrings.propertyHasNotBeenInitialized));
        }
        return $v_0;
    },
    refreshLoad: function SP_ListItem$refreshLoad() {
        SP.ClientObject.prototype.refreshLoad.call(this);
        this.loadExpandoFields();
    },
    loadExpandoFields: function SP_ListItem$loadExpandoFields() {
        var $$dict_0 = this.get_fieldValues();

        for (var $$key_1 in $$dict_0) {
            var $v_0 = {
                key: $$key_1,
                value: $$dict_0[$$key_1]
            };

            this.retrieve($v_0.key);
        }
    },
    getWOPIFrameUrl: function SP_ListItem$getWOPIFrameUrl(action) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetWOPIFrameUrl', [action]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    update: function SP_ListItem$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);

        $v_0.addQuery($v_1);
        this.refreshLoad();
    },
    deleteObject: function SP_ListItem$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    },
    recycle: function SP_ListItem$recycle() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Recycle', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.GuidResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeFromParentCollection();
        return $v_1;
    },
    getUserEffectivePermissions: function SP_ListItem$getUserEffectivePermissions(userName) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetUserEffectivePermissions', [userName]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.BasePermissions();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    $1e_2: function SP_ListItem$$1e_2($p0, $p1) {
        var $v_0 = this.get_context();

        (this.get_fieldValues())[$p0] = $p1;
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetFieldValue', [$p0, $p1]);

        if ($v_0) {
            $v_0.addQuery($v_1);
        }
    },
    parseAndSetFieldValue: function SP_ListItem$parseAndSetFieldValue(fieldName, value) {
        var $v_0 = this.get_context();

        (this.get_fieldValues())[fieldName] = value;
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'ParseAndSetFieldValue', [fieldName, value]);

        if ($v_0) {
            $v_0.addQuery($v_1);
        }
    },
    validateUpdateListItem: function SP_ListItem$validateUpdateListItem(formValues, bNewDocumentUpdate, checkInComment) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ValidateUpdateListItem', [formValues, bNewDocumentUpdate, checkInComment]);

        $v_0.addQuery($v_2);
        $v_1 = [];
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
};
SP.ListItemPropertyNames = function SP_ListItemPropertyNames() {
};
SP.ListItemObjectPropertyNames = function SP_ListItemObjectPropertyNames() {
};
SP.ListItemCollection = function SP_ListItemCollection(context, objectPath) {
    SP.ListItemCollection.initializeBase(this, [context, objectPath]);
};
SP.ListItemCollection.prototype = {
    itemAt: function SP_ListItemCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_ListItemCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_ListItemCollection$get_childItemType() {
        return SP.ListItem;
    },
    getById: function SP_ListItemCollection$getById(id) {
        if (typeof id === 'string') {
            return this.$4s_2(id.toString());
        }
        else {
            id = parseInt(id.toString());
            var $v_0;
            var $v_1 = ((this.get_objectData()).get_methodReturnObjects())['GetById'];

            if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
                $v_1 = [];
                ((this.get_objectData()).get_methodReturnObjects())['GetById'] = $v_1;
            }
            $v_0 = $v_1[id];
            if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
                return $v_0;
            }
            $v_0 = new SP.ListItem(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetById', [id]));
            $v_1[id] = $v_0;
            return $v_0;
        }
    },
    get_listItemCollectionPosition: function SP_ListItemCollection$get_listItemCollectionPosition() {
        this.checkUninitializedProperty('ListItemCollectionPosition');
        return ((this.get_objectData()).get_properties())['ListItemCollectionPosition'];
    },
    initPropertiesFromJson: function SP_ListItemCollection$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ListItemCollectionPosition;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ListItemCollectionPosition'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.ListItemCollectionPosition;
        }
    },
    $4s_2: function SP_ListItemCollection$$4s_2($p0) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByStringId'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetByStringId'] = $v_2;
        }
        $v_1 = $v_2[$p0];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.ListItem($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByStringId', [$p0]));
        $v_2[$p0] = $v_1;
        return $v_1;
    }
};
SP.ListItemCollectionPropertyNames = function SP_ListItemCollectionPropertyNames() {
};
SP.ListItemCollectionPosition = function SP_ListItemCollectionPosition() {
    SP.ListItemCollectionPosition.initializeBase(this);
};
SP.ListItemCollectionPosition.prototype = {
    $2j_1: null,
    get_pagingInfo: function SP_ListItemCollectionPosition$get_pagingInfo() {
        return this.$2j_1;
    },
    set_pagingInfo: function SP_ListItemCollectionPosition$set_pagingInfo(value) {
        this.$2j_1 = value;
        return value;
    },
    get_typeId: function SP_ListItemCollectionPosition$get_typeId() {
        return '{922354eb-c56a-4d88-ad59-67496854efe1}';
    },
    writeToXml: function SP_ListItemCollectionPosition$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['PagingInfo'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_ListItemCollectionPosition$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.PagingInfo;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2j_1 = $v_0;
            delete parentNode.PagingInfo;
        }
    }
};
SP.ListItemCreationInformation = function SP_ListItemCreationInformation() {
    SP.ListItemCreationInformation.initializeBase(this);
};
SP.ListItemCreationInformation.prototype = {
    $2R_1: null,
    $2b_1: null,
    $1W_1: 0,
    get_folderUrl: function SP_ListItemCreationInformation$get_folderUrl() {
        return this.$2R_1;
    },
    set_folderUrl: function SP_ListItemCreationInformation$set_folderUrl(value) {
        this.$2R_1 = value;
        return value;
    },
    get_leafName: function SP_ListItemCreationInformation$get_leafName() {
        return this.$2b_1;
    },
    set_leafName: function SP_ListItemCreationInformation$set_leafName(value) {
        this.$2b_1 = value;
        return value;
    },
    get_underlyingObjectType: function SP_ListItemCreationInformation$get_underlyingObjectType() {
        return this.$1W_1;
    },
    set_underlyingObjectType: function SP_ListItemCreationInformation$set_underlyingObjectType(value) {
        this.$1W_1 = value;
        return value;
    },
    get_typeId: function SP_ListItemCreationInformation$get_typeId() {
        return '{54cdbee5-0897-44ac-829f-411557fa11be}';
    },
    writeToXml: function SP_ListItemCreationInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['FolderUrl', 'LeafName', 'UnderlyingObjectType'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_ListItemCreationInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.FolderUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2R_1 = $v_0;
            delete parentNode.FolderUrl;
        }
        $v_0 = parentNode.LeafName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2b_1 = $v_0;
            delete parentNode.LeafName;
        }
        $v_0 = parentNode.UnderlyingObjectType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1W_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.UnderlyingObjectType;
        }
    }
};
SP.ListItemEntityCollection = function SP_ListItemEntityCollection(context, objectPath) {
    SP.ListItemEntityCollection.initializeBase(this, [context, objectPath]);
};
SP.ListItemEntityCollection.prototype = {
    itemAt: function SP_ListItemEntityCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_ListItemEntityCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_ListItemEntityCollection$get_childItemType() {
        return SP.ListItem;
    }
};
SP.ListItemFormUpdateValue = function SP_ListItemFormUpdateValue() {
    SP.ListItemFormUpdateValue.initializeBase(this);
};
SP.ListItemFormUpdateValue.prototype = {
    $j_1: null,
    $2M_1: null,
    $2N_1: null,
    $2U_1: false,
    get_errorMessage: function SP_ListItemFormUpdateValue$get_errorMessage() {
        return this.$j_1;
    },
    set_errorMessage: function SP_ListItemFormUpdateValue$set_errorMessage(value) {
        this.$j_1 = value;
        return value;
    },
    get_fieldName: function SP_ListItemFormUpdateValue$get_fieldName() {
        return this.$2M_1;
    },
    set_fieldName: function SP_ListItemFormUpdateValue$set_fieldName(value) {
        this.$2M_1 = value;
        return value;
    },
    get_fieldValue: function SP_ListItemFormUpdateValue$get_fieldValue() {
        return this.$2N_1;
    },
    set_fieldValue: function SP_ListItemFormUpdateValue$set_fieldValue(value) {
        this.$2N_1 = value;
        return value;
    },
    get_hasException: function SP_ListItemFormUpdateValue$get_hasException() {
        return this.$2U_1;
    },
    set_hasException: function SP_ListItemFormUpdateValue$set_hasException(value) {
        this.$2U_1 = value;
        return value;
    },
    get_typeId: function SP_ListItemFormUpdateValue$get_typeId() {
        return '{03745a5a-2400-440e-92d6-dad4afee30a6}';
    },
    writeToXml: function SP_ListItemFormUpdateValue$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['ErrorMessage', 'FieldName', 'FieldValue', 'HasException'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_ListItemFormUpdateValue$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ErrorMessage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$j_1 = $v_0;
            delete parentNode.ErrorMessage;
        }
        $v_0 = parentNode.FieldName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2M_1 = $v_0;
            delete parentNode.FieldName;
        }
        $v_0 = parentNode.FieldValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2N_1 = $v_0;
            delete parentNode.FieldValue;
        }
        $v_0 = parentNode.HasException;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2U_1 = $v_0;
            delete parentNode.HasException;
        }
    }
};
SP.ListTemplate = function SP_ListTemplate(context, objectPath) {
    SP.ListTemplate.initializeBase(this, [context, objectPath]);
};
SP.ListTemplate.prototype = {
    get_allowsFolderCreation: function SP_ListTemplate$get_allowsFolderCreation() {
        this.checkUninitializedProperty('AllowsFolderCreation');
        return ((this.get_objectData()).get_properties())['AllowsFolderCreation'];
    },
    get_baseType: function SP_ListTemplate$get_baseType() {
        this.checkUninitializedProperty('BaseType');
        return ((this.get_objectData()).get_properties())['BaseType'];
    },
    get_description: function SP_ListTemplate$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData()).get_properties())['Description'];
    },
    get_featureId: function SP_ListTemplate$get_featureId() {
        this.checkUninitializedProperty('FeatureId');
        return ((this.get_objectData()).get_properties())['FeatureId'];
    },
    get_hidden: function SP_ListTemplate$get_hidden() {
        this.checkUninitializedProperty('Hidden');
        return ((this.get_objectData()).get_properties())['Hidden'];
    },
    get_imageUrl: function SP_ListTemplate$get_imageUrl() {
        this.checkUninitializedProperty('ImageUrl');
        return ((this.get_objectData()).get_properties())['ImageUrl'];
    },
    get_internalName: function SP_ListTemplate$get_internalName() {
        this.checkUninitializedProperty('InternalName');
        return ((this.get_objectData()).get_properties())['InternalName'];
    },
    get_isCustomTemplate: function SP_ListTemplate$get_isCustomTemplate() {
        this.checkUninitializedProperty('IsCustomTemplate');
        return ((this.get_objectData()).get_properties())['IsCustomTemplate'];
    },
    get_name: function SP_ListTemplate$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    get_onQuickLaunch: function SP_ListTemplate$get_onQuickLaunch() {
        this.checkUninitializedProperty('OnQuickLaunch');
        return ((this.get_objectData()).get_properties())['OnQuickLaunch'];
    },
    get_listTemplateTypeKind: function SP_ListTemplate$get_listTemplateTypeKind() {
        this.checkUninitializedProperty('ListTemplateTypeKind');
        return ((this.get_objectData()).get_properties())['ListTemplateTypeKind'];
    },
    get_unique: function SP_ListTemplate$get_unique() {
        this.checkUninitializedProperty('Unique');
        return ((this.get_objectData()).get_properties())['Unique'];
    },
    initPropertiesFromJson: function SP_ListTemplate$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AllowsFolderCreation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowsFolderCreation'] = $v_0;
            delete parentNode.AllowsFolderCreation;
        }
        $v_0 = parentNode.BaseType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['BaseType'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.BaseType;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Description'] = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.FeatureId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['FeatureId'] = $v_0;
            delete parentNode.FeatureId;
        }
        $v_0 = parentNode.Hidden;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Hidden'] = $v_0;
            delete parentNode.Hidden;
        }
        $v_0 = parentNode.ImageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ImageUrl'] = $v_0;
            delete parentNode.ImageUrl;
        }
        $v_0 = parentNode.InternalName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['InternalName'] = $v_0;
            delete parentNode.InternalName;
        }
        $v_0 = parentNode.IsCustomTemplate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsCustomTemplate'] = $v_0;
            delete parentNode.IsCustomTemplate;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.OnQuickLaunch;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['OnQuickLaunch'] = $v_0;
            delete parentNode.OnQuickLaunch;
        }
        $v_0 = parentNode.ListTemplateTypeKind;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ListTemplateTypeKind'] = $v_0;
            delete parentNode.ListTemplateTypeKind;
        }
        $v_0 = parentNode.Unique;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Unique'] = $v_0;
            delete parentNode.Unique;
        }
    }
};
SP.ListTemplatePropertyNames = function SP_ListTemplatePropertyNames() {
};
SP.ListTemplateCollection = function SP_ListTemplateCollection(context, objectPath) {
    SP.ListTemplateCollection.initializeBase(this, [context, objectPath]);
};
SP.ListTemplateCollection.prototype = {
    itemAt: function SP_ListTemplateCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_ListTemplateCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_ListTemplateCollection$get_childItemType() {
        return SP.ListTemplate;
    },
    getByName: function SP_ListTemplateCollection$getByName(name) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByName'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetByName'] = $v_2;
        }
        $v_1 = $v_2[name];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.ListTemplate($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByName', [name]));
        $v_2[name] = $v_1;
        return $v_1;
    }
};
SP.Navigation = function SP_Navigation(context, objectPath) {
    SP.Navigation.initializeBase(this, [context, objectPath]);
};
SP.Navigation.prototype = {
    get_quickLaunch: function SP_Navigation$get_quickLaunch() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['QuickLaunch'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.NavigationNodeCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'QuickLaunch'));
            ((this.get_objectData()).get_clientObjectProperties())['QuickLaunch'] = $v_0;
        }
        return $v_0;
    },
    get_topNavigationBar: function SP_Navigation$get_topNavigationBar() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['TopNavigationBar'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.NavigationNodeCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TopNavigationBar'));
            ((this.get_objectData()).get_clientObjectProperties())['TopNavigationBar'] = $v_0;
        }
        return $v_0;
    },
    get_useShared: function SP_Navigation$get_useShared() {
        this.checkUninitializedProperty('UseShared');
        return ((this.get_objectData()).get_properties())['UseShared'];
    },
    set_useShared: function SP_Navigation$set_useShared(value) {
        ((this.get_objectData()).get_properties())['UseShared'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'UseShared', value));
        }
        return value;
    },
    initPropertiesFromJson: function SP_Navigation$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.QuickLaunch;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('QuickLaunch', this.get_quickLaunch(), $v_0);
            (this.get_quickLaunch()).fromJson($v_0);
            delete parentNode.QuickLaunch;
        }
        $v_0 = parentNode.TopNavigationBar;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TopNavigationBar', this.get_topNavigationBar(), $v_0);
            (this.get_topNavigationBar()).fromJson($v_0);
            delete parentNode.TopNavigationBar;
        }
        $v_0 = parentNode.UseShared;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['UseShared'] = $v_0;
            delete parentNode.UseShared;
        }
    },
    getNodeById: function SP_Navigation$getNodeById(id) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetNodeById'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = [];
            ((this.get_objectData()).get_methodReturnObjects())['GetNodeById'] = $v_2;
        }
        $v_1 = $v_2[id];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.NavigationNode($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetNodeById', [id]));
        $v_2[id] = $v_1;
        return $v_1;
    }
};
SP.NavigationPropertyNames = function SP_NavigationPropertyNames() {
};
SP.NavigationObjectPropertyNames = function SP_NavigationObjectPropertyNames() {
};
SP.NavigationNode = function SP_NavigationNode(context, objectPath) {
    SP.NavigationNode.initializeBase(this, [context, objectPath]);
};
SP.NavigationNode.prototype = {
    $7_1: function SP_NavigationNode$$7_1($p0) {
        if ($p0) {
            ((this.get_objectData()).get_properties())['Title'] = $p0.$0_1;
            ((this.get_objectData()).get_properties())['Url'] = $p0.$2_1;
        }
    },
    get_children: function SP_NavigationNode$get_children() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Children'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.NavigationNodeCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Children'));
            ((this.get_objectData()).get_clientObjectProperties())['Children'] = $v_0;
        }
        return $v_0;
    },
    get_id: function SP_NavigationNode$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_isDocLib: function SP_NavigationNode$get_isDocLib() {
        this.checkUninitializedProperty('IsDocLib');
        return ((this.get_objectData()).get_properties())['IsDocLib'];
    },
    get_isExternal: function SP_NavigationNode$get_isExternal() {
        this.checkUninitializedProperty('IsExternal');
        return ((this.get_objectData()).get_properties())['IsExternal'];
    },
    get_isVisible: function SP_NavigationNode$get_isVisible() {
        this.checkUninitializedProperty('IsVisible');
        return ((this.get_objectData()).get_properties())['IsVisible'];
    },
    set_isVisible: function SP_NavigationNode$set_isVisible(value) {
        ((this.get_objectData()).get_properties())['IsVisible'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'IsVisible', value));
        }
        return value;
    },
    get_title: function SP_NavigationNode$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData()).get_properties())['Title'];
    },
    set_title: function SP_NavigationNode$set_title(value) {
        ((this.get_objectData()).get_properties())['Title'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    get_url: function SP_NavigationNode$get_url() {
        this.checkUninitializedProperty('Url');
        return ((this.get_objectData()).get_properties())['Url'];
    },
    set_url: function SP_NavigationNode$set_url(value) {
        ((this.get_objectData()).get_properties())['Url'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Url', value));
        }
        return value;
    },
    initPropertiesFromJson: function SP_NavigationNode$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Children;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Children', this.get_children(), $v_0);
            (this.get_children()).fromJson($v_0);
            delete parentNode.Children;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsDocLib;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsDocLib'] = $v_0;
            delete parentNode.IsDocLib;
        }
        $v_0 = parentNode.IsExternal;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsExternal'] = $v_0;
            delete parentNode.IsExternal;
        }
        $v_0 = parentNode.IsVisible;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsVisible'] = $v_0;
            delete parentNode.IsVisible;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Title'] = $v_0;
            delete parentNode.Title;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Url'] = $v_0;
            delete parentNode.Url;
        }
    },
    update: function SP_NavigationNode$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);

        $v_0.addQuery($v_1);
        this.refreshLoad();
    },
    deleteObject: function SP_NavigationNode$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
};
SP.NavigationNodePropertyNames = function SP_NavigationNodePropertyNames() {
};
SP.NavigationNodeObjectPropertyNames = function SP_NavigationNodeObjectPropertyNames() {
};
SP.NavigationNodeCollection = function SP_NavigationNodeCollection(context, objectPath) {
    SP.NavigationNodeCollection.initializeBase(this, [context, objectPath]);
};
SP.NavigationNodeCollection.prototype = {
    itemAt: function SP_NavigationNodeCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_NavigationNodeCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_NavigationNodeCollection$get_childItemType() {
        return SP.NavigationNode;
    },
    add: function SP_NavigationNodeCollection$add(parameters) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.NavigationNode($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [parameters]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        $v_1.$7_1(parameters);
        return $v_1;
    }
};
SP.NavigationNodeCreationInformation = function SP_NavigationNodeCreationInformation() {
    SP.NavigationNodeCreationInformation.initializeBase(this);
};
SP.NavigationNodeCreationInformation.prototype = {
    $20_1: false,
    $2Y_1: false,
    $49_1: null,
    $0_1: null,
    $2_1: null,
    get_asLastNode: function SP_NavigationNodeCreationInformation$get_asLastNode() {
        return this.$20_1;
    },
    set_asLastNode: function SP_NavigationNodeCreationInformation$set_asLastNode(value) {
        this.$20_1 = value;
        return value;
    },
    get_isExternal: function SP_NavigationNodeCreationInformation$get_isExternal() {
        return this.$2Y_1;
    },
    set_isExternal: function SP_NavigationNodeCreationInformation$set_isExternal(value) {
        this.$2Y_1 = value;
        return value;
    },
    get_previousNode: function SP_NavigationNodeCreationInformation$get_previousNode() {
        return this.$49_1;
    },
    set_previousNode: function SP_NavigationNodeCreationInformation$set_previousNode(value) {
        this.$49_1 = value;
        return value;
    },
    get_title: function SP_NavigationNodeCreationInformation$get_title() {
        return this.$0_1;
    },
    set_title: function SP_NavigationNodeCreationInformation$set_title(value) {
        this.$0_1 = value;
        return value;
    },
    get_url: function SP_NavigationNodeCreationInformation$get_url() {
        return this.$2_1;
    },
    set_url: function SP_NavigationNodeCreationInformation$set_url(value) {
        this.$2_1 = value;
        return value;
    },
    get_typeId: function SP_NavigationNodeCreationInformation$get_typeId() {
        return '{7aaaa605-79a9-4fda-ae1e-db952e5083e0}';
    },
    writeToXml: function SP_NavigationNodeCreationInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['AsLastNode', 'IsExternal', 'PreviousNode', 'Title', 'Url'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_NavigationNodeCreationInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AsLastNode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$20_1 = $v_0;
            delete parentNode.AsLastNode;
        }
        $v_0 = parentNode.IsExternal;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2Y_1 = $v_0;
            delete parentNode.IsExternal;
        }
        $v_0 = parentNode.PreviousNode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            delete parentNode.PreviousNode;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = $v_0;
            delete parentNode.Title;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = $v_0;
            delete parentNode.Url;
        }
    }
};
SP.ObjectSharingInformation = function SP_ObjectSharingInformation(context, objectPath) {
    SP.ObjectSharingInformation.initializeBase(this, [context, objectPath]);
};
SP.ObjectSharingInformation.getListItemSharingInformation = function SP_ObjectSharingInformation$getListItemSharingInformation(context, listID, itemID, excludeCurrentUser, excludeSiteAdmin, excludeSecurityGroups, retrieveAnonymousLinks, retrieveUserInfoDetails, checkForAccessRequests) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;

    $v_0 = new SP.ObjectSharingInformation(context, new SP.ObjectPathStaticMethod(context, '{e7dae9f6-8ca5-4286-92c8-61941d774c44}', 'GetListItemSharingInformation', [listID, itemID, excludeCurrentUser, excludeSiteAdmin, excludeSecurityGroups, retrieveAnonymousLinks, retrieveUserInfoDetails, checkForAccessRequests]));
    return $v_0;
};
SP.ObjectSharingInformation.getWebSharingInformation = function SP_ObjectSharingInformation$getWebSharingInformation(context, excludeCurrentUser, excludeSiteAdmin, excludeSecurityGroups, retrieveAnonymousLinks, retrieveUserInfoDetails, checkForAccessRequests) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;

    $v_0 = new SP.ObjectSharingInformation(context, new SP.ObjectPathStaticMethod(context, '{e7dae9f6-8ca5-4286-92c8-61941d774c44}', 'GetWebSharingInformation', [excludeCurrentUser, excludeSiteAdmin, excludeSecurityGroups, retrieveAnonymousLinks, retrieveUserInfoDetails, checkForAccessRequests]));
    return $v_0;
};
SP.ObjectSharingInformation.getObjectSharingInformation = function SP_ObjectSharingInformation$getObjectSharingInformation(context, securableObject, excludeCurrentUser, excludeSiteAdmin, excludeSecurityGroups, retrieveAnonymousLinks, retrieveUserInfoDetails, checkForAccessRequests, retrievePermissionLevels) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;

    $v_0 = new SP.ObjectSharingInformation(context, new SP.ObjectPathStaticMethod(context, '{e7dae9f6-8ca5-4286-92c8-61941d774c44}', 'GetObjectSharingInformation', [securableObject, excludeCurrentUser, excludeSiteAdmin, excludeSecurityGroups, retrieveAnonymousLinks, retrieveUserInfoDetails, checkForAccessRequests, retrievePermissionLevels]));
    return $v_0;
};
SP.ObjectSharingInformation.prototype = {
    get_anonymousEditLink: function SP_ObjectSharingInformation$get_anonymousEditLink() {
        this.checkUninitializedProperty('AnonymousEditLink');
        return ((this.get_objectData()).get_properties())['AnonymousEditLink'];
    },
    get_anonymousViewLink: function SP_ObjectSharingInformation$get_anonymousViewLink() {
        this.checkUninitializedProperty('AnonymousViewLink');
        return ((this.get_objectData()).get_properties())['AnonymousViewLink'];
    },
    get_canManagePermissions: function SP_ObjectSharingInformation$get_canManagePermissions() {
        this.checkUninitializedProperty('CanManagePermissions');
        return ((this.get_objectData()).get_properties())['CanManagePermissions'];
    },
    get_hasPendingAccessRequests: function SP_ObjectSharingInformation$get_hasPendingAccessRequests() {
        this.checkUninitializedProperty('HasPendingAccessRequests');
        return ((this.get_objectData()).get_properties())['HasPendingAccessRequests'];
    },
    get_hasPermissionLevels: function SP_ObjectSharingInformation$get_hasPermissionLevels() {
        this.checkUninitializedProperty('HasPermissionLevels');
        return ((this.get_objectData()).get_properties())['HasPermissionLevels'];
    },
    get_isSharedWithCurrentUser: function SP_ObjectSharingInformation$get_isSharedWithCurrentUser() {
        this.checkUninitializedProperty('IsSharedWithCurrentUser');
        return ((this.get_objectData()).get_properties())['IsSharedWithCurrentUser'];
    },
    get_isSharedWithGuest: function SP_ObjectSharingInformation$get_isSharedWithGuest() {
        this.checkUninitializedProperty('IsSharedWithGuest');
        return ((this.get_objectData()).get_properties())['IsSharedWithGuest'];
    },
    get_isSharedWithMany: function SP_ObjectSharingInformation$get_isSharedWithMany() {
        this.checkUninitializedProperty('IsSharedWithMany');
        return ((this.get_objectData()).get_properties())['IsSharedWithMany'];
    },
    get_isSharedWithSecurityGroup: function SP_ObjectSharingInformation$get_isSharedWithSecurityGroup() {
        this.checkUninitializedProperty('IsSharedWithSecurityGroup');
        return ((this.get_objectData()).get_properties())['IsSharedWithSecurityGroup'];
    },
    get_pendingAccessRequestsLink: function SP_ObjectSharingInformation$get_pendingAccessRequestsLink() {
        this.checkUninitializedProperty('PendingAccessRequestsLink');
        return ((this.get_objectData()).get_properties())['PendingAccessRequestsLink'];
    },
    initPropertiesFromJson: function SP_ObjectSharingInformation$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AnonymousEditLink;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AnonymousEditLink'] = $v_0;
            delete parentNode.AnonymousEditLink;
        }
        $v_0 = parentNode.AnonymousViewLink;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AnonymousViewLink'] = $v_0;
            delete parentNode.AnonymousViewLink;
        }
        $v_0 = parentNode.CanManagePermissions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CanManagePermissions'] = $v_0;
            delete parentNode.CanManagePermissions;
        }
        $v_0 = parentNode.HasPendingAccessRequests;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['HasPendingAccessRequests'] = $v_0;
            delete parentNode.HasPendingAccessRequests;
        }
        $v_0 = parentNode.HasPermissionLevels;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['HasPermissionLevels'] = $v_0;
            delete parentNode.HasPermissionLevels;
        }
        $v_0 = parentNode.IsSharedWithCurrentUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsSharedWithCurrentUser'] = $v_0;
            delete parentNode.IsSharedWithCurrentUser;
        }
        $v_0 = parentNode.IsSharedWithGuest;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsSharedWithGuest'] = $v_0;
            delete parentNode.IsSharedWithGuest;
        }
        $v_0 = parentNode.IsSharedWithMany;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsSharedWithMany'] = $v_0;
            delete parentNode.IsSharedWithMany;
        }
        $v_0 = parentNode.IsSharedWithSecurityGroup;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsSharedWithSecurityGroup'] = $v_0;
            delete parentNode.IsSharedWithSecurityGroup;
        }
        $v_0 = parentNode.PendingAccessRequestsLink;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['PendingAccessRequestsLink'] = $v_0;
            delete parentNode.PendingAccessRequestsLink;
        }
    },
    getSharedWithUsers: function SP_ObjectSharingInformation$getSharedWithUsers() {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.ClientObjectList($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetSharedWithUsers', null), SP.ObjectSharingInformationUser);
        return $v_1;
    }
};
SP.ObjectSharingInformationPropertyNames = function SP_ObjectSharingInformationPropertyNames() {
};
SP.ObjectSharingInformationUser = function SP_ObjectSharingInformationUser(context, objectPath) {
    SP.ObjectSharingInformationUser.initializeBase(this, [context, objectPath]);
};
SP.ObjectSharingInformationUser.prototype = {
    get_customRoleNames: function SP_ObjectSharingInformationUser$get_customRoleNames() {
        this.checkUninitializedProperty('CustomRoleNames');
        return ((this.get_objectData()).get_properties())['CustomRoleNames'];
    },
    get_department: function SP_ObjectSharingInformationUser$get_department() {
        this.checkUninitializedProperty('Department');
        return ((this.get_objectData()).get_properties())['Department'];
    },
    get_email: function SP_ObjectSharingInformationUser$get_email() {
        this.checkUninitializedProperty('Email');
        return ((this.get_objectData()).get_properties())['Email'];
    },
    get_hasEditPermission: function SP_ObjectSharingInformationUser$get_hasEditPermission() {
        this.checkUninitializedProperty('HasEditPermission');
        return ((this.get_objectData()).get_properties())['HasEditPermission'];
    },
    get_hasViewPermission: function SP_ObjectSharingInformationUser$get_hasViewPermission() {
        this.checkUninitializedProperty('HasViewPermission');
        return ((this.get_objectData()).get_properties())['HasViewPermission'];
    },
    get_id: function SP_ObjectSharingInformationUser$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_isSiteAdmin: function SP_ObjectSharingInformationUser$get_isSiteAdmin() {
        this.checkUninitializedProperty('IsSiteAdmin');
        return ((this.get_objectData()).get_properties())['IsSiteAdmin'];
    },
    get_jobTitle: function SP_ObjectSharingInformationUser$get_jobTitle() {
        this.checkUninitializedProperty('JobTitle');
        return ((this.get_objectData()).get_properties())['JobTitle'];
    },
    get_loginName: function SP_ObjectSharingInformationUser$get_loginName() {
        this.checkUninitializedProperty('LoginName');
        return ((this.get_objectData()).get_properties())['LoginName'];
    },
    get_name: function SP_ObjectSharingInformationUser$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    get_picture: function SP_ObjectSharingInformationUser$get_picture() {
        this.checkUninitializedProperty('Picture');
        return ((this.get_objectData()).get_properties())['Picture'];
    },
    get_principal: function SP_ObjectSharingInformationUser$get_principal() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Principal'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Principal(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Principal'));
            ((this.get_objectData()).get_clientObjectProperties())['Principal'] = $v_0;
        }
        return $v_0;
    },
    get_sipAddress: function SP_ObjectSharingInformationUser$get_sipAddress() {
        this.checkUninitializedProperty('SipAddress');
        return ((this.get_objectData()).get_properties())['SipAddress'];
    },
    get_user: function SP_ObjectSharingInformationUser$get_user() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['User'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'User'));
            ((this.get_objectData()).get_clientObjectProperties())['User'] = $v_0;
        }
        return $v_0;
    },
    initPropertiesFromJson: function SP_ObjectSharingInformationUser$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.CustomRoleNames;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CustomRoleNames'] = $v_0;
            delete parentNode.CustomRoleNames;
        }
        $v_0 = parentNode.Department;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Department'] = $v_0;
            delete parentNode.Department;
        }
        $v_0 = parentNode.Email;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Email'] = $v_0;
            delete parentNode.Email;
        }
        $v_0 = parentNode.HasEditPermission;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['HasEditPermission'] = $v_0;
            delete parentNode.HasEditPermission;
        }
        $v_0 = parentNode.HasViewPermission;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['HasViewPermission'] = $v_0;
            delete parentNode.HasViewPermission;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsSiteAdmin;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsSiteAdmin'] = $v_0;
            delete parentNode.IsSiteAdmin;
        }
        $v_0 = parentNode.JobTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['JobTitle'] = $v_0;
            delete parentNode.JobTitle;
        }
        $v_0 = parentNode.LoginName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['LoginName'] = $v_0;
            delete parentNode.LoginName;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.Picture;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Picture'] = $v_0;
            delete parentNode.Picture;
        }
        $v_0 = parentNode.Principal;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Principal', this.get_principal(), $v_0);
            (this.get_principal()).fromJson($v_0);
            delete parentNode.Principal;
        }
        $v_0 = parentNode.SipAddress;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SipAddress'] = $v_0;
            delete parentNode.SipAddress;
        }
        $v_0 = parentNode.User;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('User', this.get_user(), $v_0);
            (this.get_user()).fromJson($v_0);
            delete parentNode.User;
        }
    }
};
SP.ObjectSharingInformationUserPropertyNames = function SP_ObjectSharingInformationUserPropertyNames() {
};
SP.ObjectSharingInformationUserObjectPropertyNames = function SP_ObjectSharingInformationUserObjectPropertyNames() {
};
SP.Principal = function SP_Principal(context, objectPath) {
    SP.Principal.initializeBase(this, [context, objectPath]);
};
SP.Principal.prototype = {
    get_id: function SP_Principal$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_isHiddenInUI: function SP_Principal$get_isHiddenInUI() {
        this.checkUninitializedProperty('IsHiddenInUI');
        return ((this.get_objectData()).get_properties())['IsHiddenInUI'];
    },
    get_loginName: function SP_Principal$get_loginName() {
        this.checkUninitializedProperty('LoginName');
        return ((this.get_objectData()).get_properties())['LoginName'];
    },
    get_title: function SP_Principal$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData()).get_properties())['Title'];
    },
    set_title: function SP_Principal$set_title(value) {
        ((this.get_objectData()).get_properties())['Title'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    get_principalType: function SP_Principal$get_principalType() {
        this.checkUninitializedProperty('PrincipalType');
        return ((this.get_objectData()).get_properties())['PrincipalType'];
    },
    initPropertiesFromJson: function SP_Principal$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsHiddenInUI;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsHiddenInUI'] = $v_0;
            delete parentNode.IsHiddenInUI;
        }
        $v_0 = parentNode.LoginName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['LoginName'] = $v_0;
            delete parentNode.LoginName;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Title'] = $v_0;
            delete parentNode.Title;
        }
        $v_0 = parentNode.PrincipalType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['PrincipalType'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.PrincipalType;
        }
    }
};
SP.PrincipalPropertyNames = function SP_PrincipalPropertyNames() {
};
SP.PropertyValues = function SP_PropertyValues(context, objectPath) {
    SP.PropertyValues.initializeBase(this, [context, objectPath]);
};
SP.PropertyValues.prototype = {
    get_fieldValues: function SP_PropertyValues$get_fieldValues() {
        var $v_0 = ((this.get_objectData()).get_methodReturnObjects())[SP.ClientConstants.FieldValuesMethodName];

        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            ((this.get_objectData()).get_methodReturnObjects())[SP.ClientConstants.FieldValuesMethodName] = $v_0;
        }
        return $v_0;
    },
    get_item: function SP_PropertyValues$get_item(fieldName) {
        return this.$Q_1(fieldName);
    },
    set_item: function SP_PropertyValues$set_item(fieldName, value) {
        this.$1e_1(fieldName, value);
        return value;
    },
    initNonPropertiesFromJson: function SP_PropertyValues$initNonPropertiesFromJson(parentNode) {
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    $Q_1: function SP_PropertyValues$$Q_1($p0) {
        var $v_0 = (this.get_fieldValues())[$p0];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString(SP.ResourceStrings.propertyHasNotBeenInitialized));
        }
        return $v_0;
    },
    refreshLoad: function SP_PropertyValues$refreshLoad() {
        SP.ClientObject.prototype.refreshLoad.call(this);
        this.loadExpandoFields();
    },
    loadExpandoFields: function SP_PropertyValues$loadExpandoFields() {
        var $$dict_0 = this.get_fieldValues();

        for (var $$key_1 in $$dict_0) {
            var $v_0 = {
                key: $$key_1,
                value: $$dict_0[$$key_1]
            };

            this.retrieve($v_0.key);
        }
    },
    $1e_1: function SP_PropertyValues$$1e_1($p0, $p1) {
        var $v_0 = this.get_context();

        (this.get_fieldValues())[$p0] = $p1;
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetFieldValue', [$p0, $p1]);

        if ($v_0) {
            $v_0.addQuery($v_1);
        }
    }
};
SP.PushNotificationSubscriber = function SP_PushNotificationSubscriber(context, objectPath) {
    SP.PushNotificationSubscriber.initializeBase(this, [context, objectPath]);
};
SP.PushNotificationSubscriber.prototype = {
    get_customArgs: function SP_PushNotificationSubscriber$get_customArgs() {
        this.checkUninitializedProperty('CustomArgs');
        return ((this.get_objectData()).get_properties())['CustomArgs'];
    },
    set_customArgs: function SP_PushNotificationSubscriber$set_customArgs(value) {
        ((this.get_objectData()).get_properties())['CustomArgs'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'CustomArgs', value));
        }
        return value;
    },
    get_deviceAppInstanceId: function SP_PushNotificationSubscriber$get_deviceAppInstanceId() {
        this.checkUninitializedProperty('DeviceAppInstanceId');
        return ((this.get_objectData()).get_properties())['DeviceAppInstanceId'];
    },
    get_lastModifiedTimeStamp: function SP_PushNotificationSubscriber$get_lastModifiedTimeStamp() {
        this.checkUninitializedProperty('LastModifiedTimeStamp');
        return ((this.get_objectData()).get_properties())['LastModifiedTimeStamp'];
    },
    get_registrationTimeStamp: function SP_PushNotificationSubscriber$get_registrationTimeStamp() {
        this.checkUninitializedProperty('RegistrationTimeStamp');
        return ((this.get_objectData()).get_properties())['RegistrationTimeStamp'];
    },
    get_serviceToken: function SP_PushNotificationSubscriber$get_serviceToken() {
        this.checkUninitializedProperty('ServiceToken');
        return ((this.get_objectData()).get_properties())['ServiceToken'];
    },
    set_serviceToken: function SP_PushNotificationSubscriber$set_serviceToken(value) {
        ((this.get_objectData()).get_properties())['ServiceToken'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ServiceToken', value));
        }
        return value;
    },
    get_subscriberType: function SP_PushNotificationSubscriber$get_subscriberType() {
        this.checkUninitializedProperty('SubscriberType');
        return ((this.get_objectData()).get_properties())['SubscriberType'];
    },
    set_subscriberType: function SP_PushNotificationSubscriber$set_subscriberType(value) {
        ((this.get_objectData()).get_properties())['SubscriberType'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'SubscriberType', value));
        }
        return value;
    },
    get_user: function SP_PushNotificationSubscriber$get_user() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['User'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'User'));
            ((this.get_objectData()).get_clientObjectProperties())['User'] = $v_0;
        }
        return $v_0;
    },
    initPropertiesFromJson: function SP_PushNotificationSubscriber$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.CustomArgs;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CustomArgs'] = $v_0;
            delete parentNode.CustomArgs;
        }
        $v_0 = parentNode.DeviceAppInstanceId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DeviceAppInstanceId'] = $v_0;
            delete parentNode.DeviceAppInstanceId;
        }
        $v_0 = parentNode.LastModifiedTimeStamp;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['LastModifiedTimeStamp'] = $v_0;
            delete parentNode.LastModifiedTimeStamp;
        }
        $v_0 = parentNode.RegistrationTimeStamp;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['RegistrationTimeStamp'] = $v_0;
            delete parentNode.RegistrationTimeStamp;
        }
        $v_0 = parentNode.ServiceToken;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ServiceToken'] = $v_0;
            delete parentNode.ServiceToken;
        }
        $v_0 = parentNode.SubscriberType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SubscriberType'] = $v_0;
            delete parentNode.SubscriberType;
        }
        $v_0 = parentNode.User;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('User', this.get_user(), $v_0);
            (this.get_user()).fromJson($v_0);
            delete parentNode.User;
        }
    },
    update: function SP_PushNotificationSubscriber$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);

        $v_0.addQuery($v_1);
    }
};
SP.PushNotificationSubscriberPropertyNames = function SP_PushNotificationSubscriberPropertyNames() {
};
SP.PushNotificationSubscriberObjectPropertyNames = function SP_PushNotificationSubscriberObjectPropertyNames() {
};
SP.PushNotificationSubscriberCollection = function SP_PushNotificationSubscriberCollection(context, objectPath) {
    SP.PushNotificationSubscriberCollection.initializeBase(this, [context, objectPath]);
};
SP.PushNotificationSubscriberCollection.prototype = {
    itemAt: function SP_PushNotificationSubscriberCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_PushNotificationSubscriberCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_PushNotificationSubscriberCollection$get_childItemType() {
        return SP.PushNotificationSubscriber;
    },
    getByStoreId: function SP_PushNotificationSubscriberCollection$getByStoreId(id) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByStoreId'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetByStoreId'] = $v_2;
        }
        $v_1 = $v_2[id];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.PushNotificationSubscriber($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByStoreId', [id]));
        $v_2[id] = $v_1;
        return $v_1;
    }
};
SP.RecycleBinItem = function SP_RecycleBinItem(context, objectPath) {
    SP.RecycleBinItem.initializeBase(this, [context, objectPath]);
};
SP.RecycleBinItem.prototype = {
    get_author: function SP_RecycleBinItem$get_author() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Author'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Author'));
            ((this.get_objectData()).get_clientObjectProperties())['Author'] = $v_0;
        }
        return $v_0;
    },
    get_deletedBy: function SP_RecycleBinItem$get_deletedBy() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['DeletedBy'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'DeletedBy'));
            ((this.get_objectData()).get_clientObjectProperties())['DeletedBy'] = $v_0;
        }
        return $v_0;
    },
    get_deletedDate: function SP_RecycleBinItem$get_deletedDate() {
        this.checkUninitializedProperty('DeletedDate');
        return ((this.get_objectData()).get_properties())['DeletedDate'];
    },
    get_dirName: function SP_RecycleBinItem$get_dirName() {
        this.checkUninitializedProperty('DirName');
        return ((this.get_objectData()).get_properties())['DirName'];
    },
    get_id: function SP_RecycleBinItem$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_itemState: function SP_RecycleBinItem$get_itemState() {
        this.checkUninitializedProperty('ItemState');
        return ((this.get_objectData()).get_properties())['ItemState'];
    },
    get_itemType: function SP_RecycleBinItem$get_itemType() {
        this.checkUninitializedProperty('ItemType');
        return ((this.get_objectData()).get_properties())['ItemType'];
    },
    get_leafName: function SP_RecycleBinItem$get_leafName() {
        this.checkUninitializedProperty('LeafName');
        return ((this.get_objectData()).get_properties())['LeafName'];
    },
    get_size: function SP_RecycleBinItem$get_size() {
        this.checkUninitializedProperty('Size');
        return ((this.get_objectData()).get_properties())['Size'];
    },
    get_title: function SP_RecycleBinItem$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData()).get_properties())['Title'];
    },
    initPropertiesFromJson: function SP_RecycleBinItem$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Author;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Author', this.get_author(), $v_0);
            (this.get_author()).fromJson($v_0);
            delete parentNode.Author;
        }
        $v_0 = parentNode.DeletedBy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('DeletedBy', this.get_deletedBy(), $v_0);
            (this.get_deletedBy()).fromJson($v_0);
            delete parentNode.DeletedBy;
        }
        $v_0 = parentNode.DeletedDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DeletedDate'] = $v_0;
            delete parentNode.DeletedDate;
        }
        $v_0 = parentNode.DirName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DirName'] = $v_0;
            delete parentNode.DirName;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.ItemState;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ItemState'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.ItemState;
        }
        $v_0 = parentNode.ItemType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ItemType'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.ItemType;
        }
        $v_0 = parentNode.LeafName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['LeafName'] = $v_0;
            delete parentNode.LeafName;
        }
        $v_0 = parentNode.Size;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Size'] = $v_0;
            delete parentNode.Size;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Title'] = $v_0;
            delete parentNode.Title;
        }
    },
    deleteObject: function SP_RecycleBinItem$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    },
    restore: function SP_RecycleBinItem$restore() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Restore', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
};
SP.RecycleBinItemPropertyNames = function SP_RecycleBinItemPropertyNames() {
};
SP.RecycleBinItemObjectPropertyNames = function SP_RecycleBinItemObjectPropertyNames() {
};
SP.RecycleBinItemCollection = function SP_RecycleBinItemCollection(context, objectPath) {
    SP.RecycleBinItemCollection.initializeBase(this, [context, objectPath]);
};
SP.RecycleBinItemCollection.prototype = {
    itemAt: function SP_RecycleBinItemCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_RecycleBinItemCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_RecycleBinItemCollection$get_childItemType() {
        return SP.RecycleBinItem;
    },
    $3a_2: function SP_RecycleBinItemCollection$$3a_2() {
        var $v_0 = this.get_data();

        while ($v_0.length > 0) {
            Array.removeAt($v_0, $v_0.length - 1);
        }
    },
    getById: function SP_RecycleBinItemCollection$getById(id) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetById'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetById'] = $v_2;
        }
        $v_1 = $v_2[id.toString()];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.RecycleBinItem($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [id]));
        $v_2[id.toString()] = $v_1;
        return $v_1;
    },
    deleteAll: function SP_RecycleBinItemCollection$deleteAll() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteAll', null);

        $v_0.addQuery($v_1);
        this.$3a_2();
    },
    restoreAll: function SP_RecycleBinItemCollection$restoreAll() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'RestoreAll', null);

        $v_0.addQuery($v_1);
        this.$3a_2();
    }
};
SP.RegionalSettings = function SP_RegionalSettings(context, objectPath) {
    SP.RegionalSettings.initializeBase(this, [context, objectPath]);
};
SP.RegionalSettings.prototype = {
    get_adjustHijriDays: function SP_RegionalSettings$get_adjustHijriDays() {
        this.checkUninitializedProperty('AdjustHijriDays');
        return ((this.get_objectData()).get_properties())['AdjustHijriDays'];
    },
    get_alternateCalendarType: function SP_RegionalSettings$get_alternateCalendarType() {
        this.checkUninitializedProperty('AlternateCalendarType');
        return ((this.get_objectData()).get_properties())['AlternateCalendarType'];
    },
    get_AM: function SP_RegionalSettings$get_AM() {
        this.checkUninitializedProperty('AM');
        return ((this.get_objectData()).get_properties())['AM'];
    },
    get_calendarType: function SP_RegionalSettings$get_calendarType() {
        this.checkUninitializedProperty('CalendarType');
        return ((this.get_objectData()).get_properties())['CalendarType'];
    },
    get_collation: function SP_RegionalSettings$get_collation() {
        this.checkUninitializedProperty('Collation');
        return ((this.get_objectData()).get_properties())['Collation'];
    },
    get_collationLCID: function SP_RegionalSettings$get_collationLCID() {
        this.checkUninitializedProperty('CollationLCID');
        return ((this.get_objectData()).get_properties())['CollationLCID'];
    },
    get_dateFormat: function SP_RegionalSettings$get_dateFormat() {
        this.checkUninitializedProperty('DateFormat');
        return ((this.get_objectData()).get_properties())['DateFormat'];
    },
    get_dateSeparator: function SP_RegionalSettings$get_dateSeparator() {
        this.checkUninitializedProperty('DateSeparator');
        return ((this.get_objectData()).get_properties())['DateSeparator'];
    },
    get_decimalSeparator: function SP_RegionalSettings$get_decimalSeparator() {
        this.checkUninitializedProperty('DecimalSeparator');
        return ((this.get_objectData()).get_properties())['DecimalSeparator'];
    },
    get_digitGrouping: function SP_RegionalSettings$get_digitGrouping() {
        this.checkUninitializedProperty('DigitGrouping');
        return ((this.get_objectData()).get_properties())['DigitGrouping'];
    },
    get_firstDayOfWeek: function SP_RegionalSettings$get_firstDayOfWeek() {
        this.checkUninitializedProperty('FirstDayOfWeek');
        return ((this.get_objectData()).get_properties())['FirstDayOfWeek'];
    },
    get_firstWeekOfYear: function SP_RegionalSettings$get_firstWeekOfYear() {
        this.checkUninitializedProperty('FirstWeekOfYear');
        return ((this.get_objectData()).get_properties())['FirstWeekOfYear'];
    },
    get_isEastAsia: function SP_RegionalSettings$get_isEastAsia() {
        this.checkUninitializedProperty('IsEastAsia');
        return ((this.get_objectData()).get_properties())['IsEastAsia'];
    },
    get_isRightToLeft: function SP_RegionalSettings$get_isRightToLeft() {
        this.checkUninitializedProperty('IsRightToLeft');
        return ((this.get_objectData()).get_properties())['IsRightToLeft'];
    },
    get_isUIRightToLeft: function SP_RegionalSettings$get_isUIRightToLeft() {
        this.checkUninitializedProperty('IsUIRightToLeft');
        return ((this.get_objectData()).get_properties())['IsUIRightToLeft'];
    },
    get_listSeparator: function SP_RegionalSettings$get_listSeparator() {
        this.checkUninitializedProperty('ListSeparator');
        return ((this.get_objectData()).get_properties())['ListSeparator'];
    },
    get_localeId: function SP_RegionalSettings$get_localeId() {
        this.checkUninitializedProperty('LocaleId');
        return ((this.get_objectData()).get_properties())['LocaleId'];
    },
    get_negativeSign: function SP_RegionalSettings$get_negativeSign() {
        this.checkUninitializedProperty('NegativeSign');
        return ((this.get_objectData()).get_properties())['NegativeSign'];
    },
    get_negNumberMode: function SP_RegionalSettings$get_negNumberMode() {
        this.checkUninitializedProperty('NegNumberMode');
        return ((this.get_objectData()).get_properties())['NegNumberMode'];
    },
    get_PM: function SP_RegionalSettings$get_PM() {
        this.checkUninitializedProperty('PM');
        return ((this.get_objectData()).get_properties())['PM'];
    },
    get_positiveSign: function SP_RegionalSettings$get_positiveSign() {
        this.checkUninitializedProperty('PositiveSign');
        return ((this.get_objectData()).get_properties())['PositiveSign'];
    },
    get_showWeeks: function SP_RegionalSettings$get_showWeeks() {
        this.checkUninitializedProperty('ShowWeeks');
        return ((this.get_objectData()).get_properties())['ShowWeeks'];
    },
    get_thousandSeparator: function SP_RegionalSettings$get_thousandSeparator() {
        this.checkUninitializedProperty('ThousandSeparator');
        return ((this.get_objectData()).get_properties())['ThousandSeparator'];
    },
    get_time24: function SP_RegionalSettings$get_time24() {
        this.checkUninitializedProperty('Time24');
        return ((this.get_objectData()).get_properties())['Time24'];
    },
    get_timeMarkerPosition: function SP_RegionalSettings$get_timeMarkerPosition() {
        this.checkUninitializedProperty('TimeMarkerPosition');
        return ((this.get_objectData()).get_properties())['TimeMarkerPosition'];
    },
    get_timeSeparator: function SP_RegionalSettings$get_timeSeparator() {
        this.checkUninitializedProperty('TimeSeparator');
        return ((this.get_objectData()).get_properties())['TimeSeparator'];
    },
    get_timeZone: function SP_RegionalSettings$get_timeZone() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['TimeZone'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.TimeZone(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TimeZone'));
            ((this.get_objectData()).get_clientObjectProperties())['TimeZone'] = $v_0;
        }
        return $v_0;
    },
    get_timeZones: function SP_RegionalSettings$get_timeZones() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['TimeZones'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.TimeZoneCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TimeZones'));
            ((this.get_objectData()).get_clientObjectProperties())['TimeZones'] = $v_0;
        }
        return $v_0;
    },
    get_workDayEndHour: function SP_RegionalSettings$get_workDayEndHour() {
        this.checkUninitializedProperty('WorkDayEndHour');
        return ((this.get_objectData()).get_properties())['WorkDayEndHour'];
    },
    get_workDays: function SP_RegionalSettings$get_workDays() {
        this.checkUninitializedProperty('WorkDays');
        return ((this.get_objectData()).get_properties())['WorkDays'];
    },
    get_workDayStartHour: function SP_RegionalSettings$get_workDayStartHour() {
        this.checkUninitializedProperty('WorkDayStartHour');
        return ((this.get_objectData()).get_properties())['WorkDayStartHour'];
    },
    initPropertiesFromJson: function SP_RegionalSettings$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AdjustHijriDays;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AdjustHijriDays'] = $v_0;
            delete parentNode.AdjustHijriDays;
        }
        $v_0 = parentNode.AlternateCalendarType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AlternateCalendarType'] = $v_0;
            delete parentNode.AlternateCalendarType;
        }
        $v_0 = parentNode.AM;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AM'] = $v_0;
            delete parentNode.AM;
        }
        $v_0 = parentNode.CalendarType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CalendarType'] = $v_0;
            delete parentNode.CalendarType;
        }
        $v_0 = parentNode.Collation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Collation'] = $v_0;
            delete parentNode.Collation;
        }
        $v_0 = parentNode.CollationLCID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CollationLCID'] = $v_0;
            delete parentNode.CollationLCID;
        }
        $v_0 = parentNode.DateFormat;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DateFormat'] = $v_0;
            delete parentNode.DateFormat;
        }
        $v_0 = parentNode.DateSeparator;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DateSeparator'] = $v_0;
            delete parentNode.DateSeparator;
        }
        $v_0 = parentNode.DecimalSeparator;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DecimalSeparator'] = $v_0;
            delete parentNode.DecimalSeparator;
        }
        $v_0 = parentNode.DigitGrouping;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DigitGrouping'] = $v_0;
            delete parentNode.DigitGrouping;
        }
        $v_0 = parentNode.FirstDayOfWeek;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['FirstDayOfWeek'] = $v_0;
            delete parentNode.FirstDayOfWeek;
        }
        $v_0 = parentNode.FirstWeekOfYear;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['FirstWeekOfYear'] = $v_0;
            delete parentNode.FirstWeekOfYear;
        }
        $v_0 = parentNode.IsEastAsia;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsEastAsia'] = $v_0;
            delete parentNode.IsEastAsia;
        }
        $v_0 = parentNode.IsRightToLeft;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsRightToLeft'] = $v_0;
            delete parentNode.IsRightToLeft;
        }
        $v_0 = parentNode.IsUIRightToLeft;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsUIRightToLeft'] = $v_0;
            delete parentNode.IsUIRightToLeft;
        }
        $v_0 = parentNode.ListSeparator;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ListSeparator'] = $v_0;
            delete parentNode.ListSeparator;
        }
        $v_0 = parentNode.LocaleId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['LocaleId'] = $v_0;
            delete parentNode.LocaleId;
        }
        $v_0 = parentNode.NegativeSign;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['NegativeSign'] = $v_0;
            delete parentNode.NegativeSign;
        }
        $v_0 = parentNode.NegNumberMode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['NegNumberMode'] = $v_0;
            delete parentNode.NegNumberMode;
        }
        $v_0 = parentNode.PM;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['PM'] = $v_0;
            delete parentNode.PM;
        }
        $v_0 = parentNode.PositiveSign;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['PositiveSign'] = $v_0;
            delete parentNode.PositiveSign;
        }
        $v_0 = parentNode.ShowWeeks;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ShowWeeks'] = $v_0;
            delete parentNode.ShowWeeks;
        }
        $v_0 = parentNode.ThousandSeparator;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ThousandSeparator'] = $v_0;
            delete parentNode.ThousandSeparator;
        }
        $v_0 = parentNode.Time24;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Time24'] = $v_0;
            delete parentNode.Time24;
        }
        $v_0 = parentNode.TimeMarkerPosition;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['TimeMarkerPosition'] = $v_0;
            delete parentNode.TimeMarkerPosition;
        }
        $v_0 = parentNode.TimeSeparator;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['TimeSeparator'] = $v_0;
            delete parentNode.TimeSeparator;
        }
        $v_0 = parentNode.TimeZone;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TimeZone', this.get_timeZone(), $v_0);
            (this.get_timeZone()).fromJson($v_0);
            delete parentNode.TimeZone;
        }
        $v_0 = parentNode.TimeZones;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TimeZones', this.get_timeZones(), $v_0);
            (this.get_timeZones()).fromJson($v_0);
            delete parentNode.TimeZones;
        }
        $v_0 = parentNode.WorkDayEndHour;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WorkDayEndHour'] = $v_0;
            delete parentNode.WorkDayEndHour;
        }
        $v_0 = parentNode.WorkDays;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WorkDays'] = $v_0;
            delete parentNode.WorkDays;
        }
        $v_0 = parentNode.WorkDayStartHour;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WorkDayStartHour'] = $v_0;
            delete parentNode.WorkDayStartHour;
        }
    }
};
SP.RegionalSettingsPropertyNames = function SP_RegionalSettingsPropertyNames() {
};
SP.RegionalSettingsObjectPropertyNames = function SP_RegionalSettingsObjectPropertyNames() {
};
SP.RelatedField = function SP_RelatedField(context, objectPath) {
    SP.RelatedField.initializeBase(this, [context, objectPath]);
};
SP.RelatedField.prototype = {
    get_fieldId: function SP_RelatedField$get_fieldId() {
        this.checkUninitializedProperty('FieldId');
        return ((this.get_objectData()).get_properties())['FieldId'];
    },
    get_listId: function SP_RelatedField$get_listId() {
        this.checkUninitializedProperty('ListId');
        return ((this.get_objectData()).get_properties())['ListId'];
    },
    get_lookupList: function SP_RelatedField$get_lookupList() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['LookupList'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.List(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'LookupList'));
            ((this.get_objectData()).get_clientObjectProperties())['LookupList'] = $v_0;
        }
        return $v_0;
    },
    get_relationshipDeleteBehavior: function SP_RelatedField$get_relationshipDeleteBehavior() {
        this.checkUninitializedProperty('RelationshipDeleteBehavior');
        return ((this.get_objectData()).get_properties())['RelationshipDeleteBehavior'];
    },
    get_webId: function SP_RelatedField$get_webId() {
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData()).get_properties())['WebId'];
    },
    initPropertiesFromJson: function SP_RelatedField$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.FieldId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['FieldId'] = $v_0;
            delete parentNode.FieldId;
        }
        $v_0 = parentNode.ListId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ListId'] = $v_0;
            delete parentNode.ListId;
        }
        $v_0 = parentNode.LookupList;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('LookupList', this.get_lookupList(), $v_0);
            (this.get_lookupList()).fromJson($v_0);
            delete parentNode.LookupList;
        }
        $v_0 = parentNode.RelationshipDeleteBehavior;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['RelationshipDeleteBehavior'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.RelationshipDeleteBehavior;
        }
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WebId'] = $v_0;
            delete parentNode.WebId;
        }
    }
};
SP.RelatedFieldPropertyNames = function SP_RelatedFieldPropertyNames() {
};
SP.RelatedFieldObjectPropertyNames = function SP_RelatedFieldObjectPropertyNames() {
};
SP.RelatedFieldCollection = function SP_RelatedFieldCollection(context, objectPath) {
    SP.RelatedFieldCollection.initializeBase(this, [context, objectPath]);
};
SP.RelatedFieldCollection.prototype = {
    itemAt: function SP_RelatedFieldCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_RelatedFieldCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_RelatedFieldCollection$get_childItemType() {
        return SP.RelatedField;
    }
};
SP.RelatedFieldExtendedData = function SP_RelatedFieldExtendedData(context, objectPath) {
    SP.RelatedFieldExtendedData.initializeBase(this, [context, objectPath]);
};
SP.RelatedFieldExtendedData.prototype = {
    get_fieldId: function SP_RelatedFieldExtendedData$get_fieldId() {
        this.checkUninitializedProperty('FieldId');
        return ((this.get_objectData()).get_properties())['FieldId'];
    },
    get_listId: function SP_RelatedFieldExtendedData$get_listId() {
        this.checkUninitializedProperty('ListId');
        return ((this.get_objectData()).get_properties())['ListId'];
    },
    get_listImageUrl: function SP_RelatedFieldExtendedData$get_listImageUrl() {
        this.checkUninitializedProperty('ListImageUrl');
        return ((this.get_objectData()).get_properties())['ListImageUrl'];
    },
    get_resolvedListTitle: function SP_RelatedFieldExtendedData$get_resolvedListTitle() {
        this.checkUninitializedProperty('ResolvedListTitle');
        return ((this.get_objectData()).get_properties())['ResolvedListTitle'];
    },
    get_toolTipDescription: function SP_RelatedFieldExtendedData$get_toolTipDescription() {
        this.checkUninitializedProperty('ToolTipDescription');
        return ((this.get_objectData()).get_properties())['ToolTipDescription'];
    },
    get_webId: function SP_RelatedFieldExtendedData$get_webId() {
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData()).get_properties())['WebId'];
    },
    initPropertiesFromJson: function SP_RelatedFieldExtendedData$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.FieldId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['FieldId'] = $v_0;
            delete parentNode.FieldId;
        }
        $v_0 = parentNode.ListId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ListId'] = $v_0;
            delete parentNode.ListId;
        }
        $v_0 = parentNode.ListImageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ListImageUrl'] = $v_0;
            delete parentNode.ListImageUrl;
        }
        $v_0 = parentNode.ResolvedListTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ResolvedListTitle'] = $v_0;
            delete parentNode.ResolvedListTitle;
        }
        $v_0 = parentNode.ToolTipDescription;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ToolTipDescription'] = $v_0;
            delete parentNode.ToolTipDescription;
        }
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WebId'] = $v_0;
            delete parentNode.WebId;
        }
    }
};
SP.RelatedFieldExtendedDataPropertyNames = function SP_RelatedFieldExtendedDataPropertyNames() {
};
SP.RelatedFieldExtendedDataCollection = function SP_RelatedFieldExtendedDataCollection(context, objectPath) {
    SP.RelatedFieldExtendedDataCollection.initializeBase(this, [context, objectPath]);
};
SP.RelatedFieldExtendedDataCollection.prototype = {
    itemAt: function SP_RelatedFieldExtendedDataCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_RelatedFieldExtendedDataCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_RelatedFieldExtendedDataCollection$get_childItemType() {
        return SP.RelatedFieldExtendedData;
    }
};
SP.RelatedItem = function SP_RelatedItem() {
    SP.RelatedItem.initializeBase(this);
};
SP.RelatedItem.prototype = {
    $2V_1: null,
    $2Z_1: 0,
    $I_1: null,
    $0_1: null,
    $2_1: null,
    $3F_1: null,
    get_iconUrl: function SP_RelatedItem$get_iconUrl() {
        return this.$2V_1;
    },
    set_iconUrl: function SP_RelatedItem$set_iconUrl(value) {
        this.$2V_1 = value;
        return value;
    },
    get_itemId: function SP_RelatedItem$get_itemId() {
        return this.$2Z_1;
    },
    set_itemId: function SP_RelatedItem$set_itemId(value) {
        this.$2Z_1 = value;
        return value;
    },
    get_listId: function SP_RelatedItem$get_listId() {
        return this.$I_1;
    },
    set_listId: function SP_RelatedItem$set_listId(value) {
        this.$I_1 = value;
        return value;
    },
    get_title: function SP_RelatedItem$get_title() {
        return this.$0_1;
    },
    set_title: function SP_RelatedItem$set_title(value) {
        this.$0_1 = value;
        return value;
    },
    get_url: function SP_RelatedItem$get_url() {
        return this.$2_1;
    },
    set_url: function SP_RelatedItem$set_url(value) {
        this.$2_1 = value;
        return value;
    },
    get_webId: function SP_RelatedItem$get_webId() {
        return this.$3F_1;
    },
    set_webId: function SP_RelatedItem$set_webId(value) {
        this.$3F_1 = value;
        return value;
    },
    get_typeId: function SP_RelatedItem$get_typeId() {
        return '{627c69f5-12e8-46bc-9052-bd5e46e155d3}';
    },
    writeToXml: function SP_RelatedItem$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['IconUrl', 'ItemId', 'ListId', 'Title', 'Url', 'WebId'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_RelatedItem$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.IconUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2V_1 = $v_0;
            delete parentNode.IconUrl;
        }
        $v_0 = parentNode.ItemId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2Z_1 = $v_0;
            delete parentNode.ItemId;
        }
        $v_0 = parentNode.ListId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$I_1 = $v_0;
            delete parentNode.ListId;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = $v_0;
            delete parentNode.Title;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = $v_0;
            delete parentNode.Url;
        }
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3F_1 = $v_0;
            delete parentNode.WebId;
        }
    }
};
SP.RelatedItemManager = function SP_RelatedItemManager(context, objectPath) {
    SP.RelatedItemManager.initializeBase(this, [context, objectPath]);
};
SP.RelatedItemManager.getRelatedItems = function SP_RelatedItemManager$getRelatedItems(context, SourceListName, SourceItemID) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{23af17db-2585-4d17-82a7-aa9e3fba099d}', 'GetRelatedItems', [SourceListName, SourceItemID]);

    context.addQuery($v_1);
    $v_0 = [];
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.RelatedItemManager.getPageOneRelatedItems = function SP_RelatedItemManager$getPageOneRelatedItems(context, SourceListName, SourceItemID) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{23af17db-2585-4d17-82a7-aa9e3fba099d}', 'GetPageOneRelatedItems', [SourceListName, SourceItemID]);

    context.addQuery($v_1);
    $v_0 = [];
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.RelatedItemManager.addSingleLink = function SP_RelatedItemManager$addSingleLink(context, SourceListName, SourceItemID, SourceWebUrl, TargetListName, TargetItemID, TargetWebUrl, TryAddReverseLink) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{23af17db-2585-4d17-82a7-aa9e3fba099d}', 'AddSingleLink', [SourceListName, SourceItemID, SourceWebUrl, TargetListName, TargetItemID, TargetWebUrl, TryAddReverseLink]);

    context.addQuery($v_0);
};
SP.RelatedItemManager.addSingleLinkToUrl = function SP_RelatedItemManager$addSingleLinkToUrl(context, SourceListName, SourceItemID, TargetItemUrl, TryAddReverseLink) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{23af17db-2585-4d17-82a7-aa9e3fba099d}', 'AddSingleLinkToUrl', [SourceListName, SourceItemID, TargetItemUrl, TryAddReverseLink]);

    context.addQuery($v_0);
};
SP.RelatedItemManager.addSingleLinkFromUrl = function SP_RelatedItemManager$addSingleLinkFromUrl(context, SourceItemUrl, TargetListName, TargetItemID, TryAddReverseLink) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{23af17db-2585-4d17-82a7-aa9e3fba099d}', 'AddSingleLinkFromUrl', [SourceItemUrl, TargetListName, TargetItemID, TryAddReverseLink]);

    context.addQuery($v_0);
};
SP.RelatedItemManager.deleteSingleLink = function SP_RelatedItemManager$deleteSingleLink(context, SourceListName, SourceItemID, SourceWebUrl, TargetListName, TargetItemID, TargetWebUrl, TryDeleteReverseLink) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{23af17db-2585-4d17-82a7-aa9e3fba099d}', 'DeleteSingleLink', [SourceListName, SourceItemID, SourceWebUrl, TargetListName, TargetItemID, TargetWebUrl, TryDeleteReverseLink]);

    context.addQuery($v_0);
};
SP.RequestContext = function SP_RequestContext($p0, $p1) {
    SP.RequestContext.initializeBase(this, [$p0, $p1]);
};
SP.RequestContext.getCurrent = function SP_RequestContext$getCurrent($p0) {
    var $v_0 = ($p0.get_staticObjects())['Microsoft$SharePoint$SPContext$Current'];

    if (!$v_0) {
        $v_0 = new SP.RequestContext($p0, new SP.ObjectPathStaticProperty($p0, '{3747adcd-a3c3-41b9-bfab-4a64dd2f1e0a}', 'Current'));
        ($p0.get_staticObjects())['Microsoft$SharePoint$SPContext$Current'] = $v_0;
    }
    return $v_0;
};
SP.RequestContext.prototype = {
    get_site: function SP_RequestContext$get_site() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Site'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Site(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Site'));
            ((this.get_objectData()).get_clientObjectProperties())['Site'] = $v_0;
        }
        return $v_0;
    },
    get_web: function SP_RequestContext$get_web() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Web'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Web(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Web'));
            ((this.get_objectData()).get_clientObjectProperties())['Web'] = $v_0;
        }
        return $v_0;
    },
    initPropertiesFromJson: function SP_RequestContext$initPropertiesFromJson($p0) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, $p0);
        var $v_0;

        $v_0 = $p0.Site;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Site', this.get_site(), $v_0);
            (this.get_site()).fromJson($v_0);
            delete $p0.Site;
        }
        $v_0 = $p0.Web;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Web', this.get_web(), $v_0);
            (this.get_web()).fromJson($v_0);
            delete $p0.Web;
        }
    }
};
SP.RequestContextObjectPropertyNames = function SP_RequestContextObjectPropertyNames() {
};
SP.RequestVariable = function SP_RequestVariable(context) {
    SP.RequestVariable.initializeBase(this, [context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{5806d374-4904-49e9-a73f-3265ee2e06c6}', arguments)]);
};
SP.RequestVariable.newObject = function SP_RequestVariable$newObject(context) {
    return new SP.RequestVariable(context, new SP.ObjectPathConstructor(context, '{5806d374-4904-49e9-a73f-3265ee2e06c6}', null));
};
SP.RequestVariable.prototype = {
    get_value: function SP_RequestVariable$get_value() {
        this.checkUninitializedProperty('Value');
        return ((this.get_objectData()).get_properties())['Value'];
    },
    initPropertiesFromJson: function SP_RequestVariable$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Value;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Value'] = $v_0;
            delete parentNode.Value;
        }
    },
    append: function SP_RequestVariable$append(value) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Append', [value]);

        $v_0.addQuery($v_1);
    },
    set: function SP_RequestVariable$set(value) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Set', [value]);

        $v_0.addQuery($v_1);
    }
};
SP.RequestVariablePropertyNames = function SP_RequestVariablePropertyNames() {
};
SP.RoleAssignment = function SP_RoleAssignment(context, objectPath) {
    SP.RoleAssignment.initializeBase(this, [context, objectPath]);
};
SP.RoleAssignment.prototype = {
    get_member: function SP_RoleAssignment$get_member() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Member'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Principal(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Member'));
            ((this.get_objectData()).get_clientObjectProperties())['Member'] = $v_0;
        }
        return $v_0;
    },
    get_principalId: function SP_RoleAssignment$get_principalId() {
        this.checkUninitializedProperty('PrincipalId');
        return ((this.get_objectData()).get_properties())['PrincipalId'];
    },
    get_roleDefinitionBindings: function SP_RoleAssignment$get_roleDefinitionBindings() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['RoleDefinitionBindings'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.RoleDefinitionBindingCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RoleDefinitionBindings'));
            ((this.get_objectData()).get_clientObjectProperties())['RoleDefinitionBindings'] = $v_0;
        }
        return $v_0;
    },
    initPropertiesFromJson: function SP_RoleAssignment$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Member;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Member', this.get_member(), $v_0);
            (this.get_member()).fromJson($v_0);
            delete parentNode.Member;
        }
        $v_0 = parentNode.PrincipalId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['PrincipalId'] = $v_0;
            delete parentNode.PrincipalId;
        }
        $v_0 = parentNode.RoleDefinitionBindings;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('RoleDefinitionBindings', this.get_roleDefinitionBindings(), $v_0);
            (this.get_roleDefinitionBindings()).fromJson($v_0);
            delete parentNode.RoleDefinitionBindings;
        }
    },
    importRoleDefinitionBindings: function SP_RoleAssignment$importRoleDefinitionBindings(roleDefinitionBindings) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'ImportRoleDefinitionBindings', [roleDefinitionBindings]);

        $v_0.addQuery($v_1);
    },
    update: function SP_RoleAssignment$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);

        $v_0.addQuery($v_1);
    },
    deleteObject: function SP_RoleAssignment$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
};
SP.RoleAssignmentPropertyNames = function SP_RoleAssignmentPropertyNames() {
};
SP.RoleAssignmentObjectPropertyNames = function SP_RoleAssignmentObjectPropertyNames() {
};
SP.RoleAssignmentCollection = function SP_RoleAssignmentCollection(context, objectPath) {
    SP.RoleAssignmentCollection.initializeBase(this, [context, objectPath]);
};
SP.RoleAssignmentCollection.prototype = {
    itemAt: function SP_RoleAssignmentCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_RoleAssignmentCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_RoleAssignmentCollection$get_childItemType() {
        return SP.RoleAssignment;
    },
    get_groups: function SP_RoleAssignmentCollection$get_groups() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Groups'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.GroupCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Groups'));
            ((this.get_objectData()).get_clientObjectProperties())['Groups'] = $v_0;
        }
        return $v_0;
    },
    initPropertiesFromJson: function SP_RoleAssignmentCollection$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Groups;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Groups', this.get_groups(), $v_0);
            (this.get_groups()).fromJson($v_0);
            delete parentNode.Groups;
        }
    },
    getByPrincipal: function SP_RoleAssignmentCollection$getByPrincipal(principalToFind) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.RoleAssignment($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByPrincipal', [principalToFind]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    getByPrincipalId: function SP_RoleAssignmentCollection$getByPrincipalId(principalId) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByPrincipalId'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = [];
            ((this.get_objectData()).get_methodReturnObjects())['GetByPrincipalId'] = $v_2;
        }
        $v_1 = $v_2[principalId];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.RoleAssignment($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByPrincipalId', [principalId]));
        $v_2[principalId] = $v_1;
        var $v_3 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_3.get_id(), $v_1);
        $v_0.addQuery($v_3);
        return $v_1;
    },
    add: function SP_RoleAssignmentCollection$add(principal, roleBindings) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.RoleAssignment($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [principal, roleBindings]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    }
};
SP.RoleAssignmentCollectionObjectPropertyNames = function SP_RoleAssignmentCollectionObjectPropertyNames() {
};
SP.RoleDefinition = function SP_RoleDefinition(context, objectPath) {
    SP.RoleDefinition.initializeBase(this, [context, objectPath]);
};
SP.RoleDefinition.prototype = {
    $7_1: function SP_RoleDefinition$$7_1($p0) {
        if ($p0) {
            ((this.get_objectData()).get_properties())['Description'] = $p0.$3_1;
            ((this.get_objectData()).get_properties())['Name'] = $p0.$6_1;
            ((this.get_objectData()).get_properties())['Order'] = $p0.$1J_1;
            ((this.get_objectData()).get_properties())['BasePermissions'] = $p0.$11_1;
        }
    },
    get_basePermissions: function SP_RoleDefinition$get_basePermissions() {
        this.checkUninitializedProperty('BasePermissions');
        return ((this.get_objectData()).get_properties())['BasePermissions'];
    },
    set_basePermissions: function SP_RoleDefinition$set_basePermissions(value) {
        ((this.get_objectData()).get_properties())['BasePermissions'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'BasePermissions', value));
        }
        return value;
    },
    get_description: function SP_RoleDefinition$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData()).get_properties())['Description'];
    },
    set_description: function SP_RoleDefinition$set_description(value) {
        ((this.get_objectData()).get_properties())['Description'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    get_hidden: function SP_RoleDefinition$get_hidden() {
        this.checkUninitializedProperty('Hidden');
        return ((this.get_objectData()).get_properties())['Hidden'];
    },
    get_id: function SP_RoleDefinition$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_name: function SP_RoleDefinition$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    set_name: function SP_RoleDefinition$set_name(value) {
        ((this.get_objectData()).get_properties())['Name'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    get_order: function SP_RoleDefinition$get_order() {
        this.checkUninitializedProperty('Order');
        return ((this.get_objectData()).get_properties())['Order'];
    },
    set_order: function SP_RoleDefinition$set_order(value) {
        ((this.get_objectData()).get_properties())['Order'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Order', value));
        }
        return value;
    },
    get_roleTypeKind: function SP_RoleDefinition$get_roleTypeKind() {
        this.checkUninitializedProperty('RoleTypeKind');
        return ((this.get_objectData()).get_properties())['RoleTypeKind'];
    },
    initPropertiesFromJson: function SP_RoleDefinition$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.BasePermissions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['BasePermissions'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.BasePermissions;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Description'] = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.Hidden;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Hidden'] = $v_0;
            delete parentNode.Hidden;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.Order;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Order'] = $v_0;
            delete parentNode.Order;
        }
        $v_0 = parentNode.RoleTypeKind;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['RoleTypeKind'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.RoleTypeKind;
        }
    },
    update: function SP_RoleDefinition$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);

        $v_0.addQuery($v_1);
    },
    deleteObject: function SP_RoleDefinition$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
};
SP.RoleDefinitionPropertyNames = function SP_RoleDefinitionPropertyNames() {
};
SP.RoleDefinitionBindingCollection = function SP_RoleDefinitionBindingCollection(context) {
    SP.RoleDefinitionBindingCollection.initializeBase(this, [context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{07bf1941-6953-4761-b114-58374b4aaf57}', arguments)]);
};
SP.RoleDefinitionBindingCollection.newObject = function SP_RoleDefinitionBindingCollection$newObject(context) {
    return new SP.RoleDefinitionBindingCollection(context, new SP.ObjectPathConstructor(context, '{07bf1941-6953-4761-b114-58374b4aaf57}', null));
};
SP.RoleDefinitionBindingCollection.prototype = {
    itemAt: function SP_RoleDefinitionBindingCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_RoleDefinitionBindingCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_RoleDefinitionBindingCollection$get_childItemType() {
        return SP.RoleDefinition;
    },
    $4Z_2: function SP_RoleDefinitionBindingCollection$$4Z_2() {
        var $v_0 = this.get_data();

        while ($v_0.length > 0) {
            Array.removeAt($v_0, $v_0.length - 1);
        }
    },
    add: function SP_RoleDefinitionBindingCollection$add(roleDefinition) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Add', [roleDefinition]);

        $v_0.addQuery($v_1);
        this.addChild(roleDefinition);
    },
    remove: function SP_RoleDefinitionBindingCollection$remove(roleDefinition) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Remove', [roleDefinition]);

        $v_0.addQuery($v_1);
        this.removeChild(roleDefinition);
    },
    removeAll: function SP_RoleDefinitionBindingCollection$removeAll() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'RemoveAll', null);

        $v_0.addQuery($v_1);
        this.$4Z_2();
    }
};
SP.RoleDefinitionCollection = function SP_RoleDefinitionCollection(context, objectPath) {
    SP.RoleDefinitionCollection.initializeBase(this, [context, objectPath]);
};
SP.RoleDefinitionCollection.prototype = {
    itemAt: function SP_RoleDefinitionCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_RoleDefinitionCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_RoleDefinitionCollection$get_childItemType() {
        return SP.RoleDefinition;
    },
    getByName: function SP_RoleDefinitionCollection$getByName(name) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByName'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetByName'] = $v_2;
        }
        $v_1 = $v_2[name];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.RoleDefinition($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByName', [name]));
        $v_2[name] = $v_1;
        var $v_3 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_3.get_id(), $v_1);
        $v_0.addQuery($v_3);
        return $v_1;
    },
    add: function SP_RoleDefinitionCollection$add(parameters) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.RoleDefinition($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [parameters]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        $v_1.$7_1(parameters);
        return $v_1;
    },
    getById: function SP_RoleDefinitionCollection$getById(id) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetById'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = [];
            ((this.get_objectData()).get_methodReturnObjects())['GetById'] = $v_2;
        }
        $v_1 = $v_2[id];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.RoleDefinition($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [id]));
        $v_2[id] = $v_1;
        var $v_3 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_3.get_id(), $v_1);
        $v_0.addQuery($v_3);
        return $v_1;
    },
    getByType: function SP_RoleDefinitionCollection$getByType(roleType) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByType'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = [];
            ((this.get_objectData()).get_methodReturnObjects())['GetByType'] = $v_2;
        }
        $v_1 = $v_2[roleType];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.RoleDefinition($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByType', [roleType]));
        $v_2[roleType] = $v_1;
        var $v_3 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_3.get_id(), $v_1);
        $v_0.addQuery($v_3);
        return $v_1;
    }
};
SP.RoleDefinitionCreationInformation = function SP_RoleDefinitionCreationInformation() {
    SP.RoleDefinitionCreationInformation.initializeBase(this);
};
SP.RoleDefinitionCreationInformation.prototype = {
    $11_1: null,
    $3_1: null,
    $6_1: null,
    $1J_1: 0,
    get_basePermissions: function SP_RoleDefinitionCreationInformation$get_basePermissions() {
        return this.$11_1;
    },
    set_basePermissions: function SP_RoleDefinitionCreationInformation$set_basePermissions(value) {
        this.$11_1 = value;
        return value;
    },
    get_description: function SP_RoleDefinitionCreationInformation$get_description() {
        return this.$3_1;
    },
    set_description: function SP_RoleDefinitionCreationInformation$set_description(value) {
        this.$3_1 = value;
        return value;
    },
    get_name: function SP_RoleDefinitionCreationInformation$get_name() {
        return this.$6_1;
    },
    set_name: function SP_RoleDefinitionCreationInformation$set_name(value) {
        this.$6_1 = value;
        return value;
    },
    get_order: function SP_RoleDefinitionCreationInformation$get_order() {
        return this.$1J_1;
    },
    set_order: function SP_RoleDefinitionCreationInformation$set_order(value) {
        this.$1J_1 = value;
        return value;
    },
    get_typeId: function SP_RoleDefinitionCreationInformation$get_typeId() {
        return '{59eddf82-1018-4677-8067-69e16efd3495}';
    },
    writeToXml: function SP_RoleDefinitionCreationInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['BasePermissions', 'Description', 'Name', 'Order'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_RoleDefinitionCreationInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.BasePermissions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$11_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.BasePermissions;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.Order;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1J_1 = $v_0;
            delete parentNode.Order;
        }
    }
};
SP.SecurableObject = function SP_SecurableObject(context, objectPath) {
    SP.SecurableObject.initializeBase(this, [context, objectPath]);
};
SP.SecurableObject.prototype = {
    get_firstUniqueAncestorSecurableObject: function SP_SecurableObject$get_firstUniqueAncestorSecurableObject() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['FirstUniqueAncestorSecurableObject'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.SecurableObject(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'FirstUniqueAncestorSecurableObject'));
            ((this.get_objectData()).get_clientObjectProperties())['FirstUniqueAncestorSecurableObject'] = $v_0;
        }
        return $v_0;
    },
    get_hasUniqueRoleAssignments: function SP_SecurableObject$get_hasUniqueRoleAssignments() {
        this.checkUninitializedProperty('HasUniqueRoleAssignments');
        return ((this.get_objectData()).get_properties())['HasUniqueRoleAssignments'];
    },
    get_roleAssignments: function SP_SecurableObject$get_roleAssignments() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['RoleAssignments'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.RoleAssignmentCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RoleAssignments'));
            ((this.get_objectData()).get_clientObjectProperties())['RoleAssignments'] = $v_0;
        }
        return $v_0;
    },
    initPropertiesFromJson: function SP_SecurableObject$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.FirstUniqueAncestorSecurableObject;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('FirstUniqueAncestorSecurableObject', this.get_firstUniqueAncestorSecurableObject(), $v_0);
            (this.get_firstUniqueAncestorSecurableObject()).fromJson($v_0);
            delete parentNode.FirstUniqueAncestorSecurableObject;
        }
        $v_0 = parentNode.HasUniqueRoleAssignments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['HasUniqueRoleAssignments'] = $v_0;
            delete parentNode.HasUniqueRoleAssignments;
        }
        $v_0 = parentNode.RoleAssignments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('RoleAssignments', this.get_roleAssignments(), $v_0);
            (this.get_roleAssignments()).fromJson($v_0);
            delete parentNode.RoleAssignments;
        }
    },
    resetRoleInheritance: function SP_SecurableObject$resetRoleInheritance() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'ResetRoleInheritance', null);

        $v_0.addQuery($v_1);
    },
    breakRoleInheritance: function SP_SecurableObject$breakRoleInheritance(copyRoleAssignments, clearSubscopes) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'BreakRoleInheritance', [copyRoleAssignments, clearSubscopes]);

        $v_0.addQuery($v_1);
    }
};
SP.SecurableObjectPropertyNames = function SP_SecurableObjectPropertyNames() {
};
SP.SecurableObjectObjectPropertyNames = function SP_SecurableObjectObjectPropertyNames() {
};
SP.ServerSettings = function SP_ServerSettings() {
};
SP.ServerSettings.getAlternateUrls = function SP_ServerSettings$getAlternateUrls(context) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;

    $v_0 = new SP.ClientObjectList(context, new SP.ObjectPathStaticMethod(context, '{adfa7b3e-a27c-4288-9b6c-a8ea51bf082d}', 'GetAlternateUrls', null), SP.AlternateUrl);
    return $v_0;
};
SP.ServerSettings.getGlobalInstalledLanguages = function SP_ServerSettings$getGlobalInstalledLanguages(context, compatibilityLevel) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{adfa7b3e-a27c-4288-9b6c-a8ea51bf082d}', 'GetGlobalInstalledLanguages', [compatibilityLevel]);

    context.addQuery($v_1);
    $v_0 = [];
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.Site = function SP_Site(context, objectPath) {
    SP.Site.initializeBase(this, [context, objectPath]);
};
SP.Site.prototype = {
    get_allowCreateDeclarativeWorkflow: function SP_Site$get_allowCreateDeclarativeWorkflow() {
        this.checkUninitializedProperty('AllowCreateDeclarativeWorkflow');
        return ((this.get_objectData()).get_properties())['AllowCreateDeclarativeWorkflow'];
    },
    set_allowCreateDeclarativeWorkflow: function SP_Site$set_allowCreateDeclarativeWorkflow(value) {
        ((this.get_objectData()).get_properties())['AllowCreateDeclarativeWorkflow'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AllowCreateDeclarativeWorkflow', value));
        }
        return value;
    },
    get_allowDesigner: function SP_Site$get_allowDesigner() {
        this.checkUninitializedProperty('AllowDesigner');
        return ((this.get_objectData()).get_properties())['AllowDesigner'];
    },
    set_allowDesigner: function SP_Site$set_allowDesigner(value) {
        ((this.get_objectData()).get_properties())['AllowDesigner'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AllowDesigner', value));
        }
        return value;
    },
    get_allowMasterPageEditing: function SP_Site$get_allowMasterPageEditing() {
        this.checkUninitializedProperty('AllowMasterPageEditing');
        return ((this.get_objectData()).get_properties())['AllowMasterPageEditing'];
    },
    set_allowMasterPageEditing: function SP_Site$set_allowMasterPageEditing(value) {
        ((this.get_objectData()).get_properties())['AllowMasterPageEditing'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AllowMasterPageEditing', value));
        }
        return value;
    },
    get_allowRevertFromTemplate: function SP_Site$get_allowRevertFromTemplate() {
        this.checkUninitializedProperty('AllowRevertFromTemplate');
        return ((this.get_objectData()).get_properties())['AllowRevertFromTemplate'];
    },
    set_allowRevertFromTemplate: function SP_Site$set_allowRevertFromTemplate(value) {
        ((this.get_objectData()).get_properties())['AllowRevertFromTemplate'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AllowRevertFromTemplate', value));
        }
        return value;
    },
    get_allowSaveDeclarativeWorkflowAsTemplate: function SP_Site$get_allowSaveDeclarativeWorkflowAsTemplate() {
        this.checkUninitializedProperty('AllowSaveDeclarativeWorkflowAsTemplate');
        return ((this.get_objectData()).get_properties())['AllowSaveDeclarativeWorkflowAsTemplate'];
    },
    set_allowSaveDeclarativeWorkflowAsTemplate: function SP_Site$set_allowSaveDeclarativeWorkflowAsTemplate(value) {
        ((this.get_objectData()).get_properties())['AllowSaveDeclarativeWorkflowAsTemplate'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AllowSaveDeclarativeWorkflowAsTemplate', value));
        }
        return value;
    },
    get_allowSavePublishDeclarativeWorkflow: function SP_Site$get_allowSavePublishDeclarativeWorkflow() {
        this.checkUninitializedProperty('AllowSavePublishDeclarativeWorkflow');
        return ((this.get_objectData()).get_properties())['AllowSavePublishDeclarativeWorkflow'];
    },
    set_allowSavePublishDeclarativeWorkflow: function SP_Site$set_allowSavePublishDeclarativeWorkflow(value) {
        ((this.get_objectData()).get_properties())['AllowSavePublishDeclarativeWorkflow'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AllowSavePublishDeclarativeWorkflow', value));
        }
        return value;
    },
    get_allowSelfServiceUpgrade: function SP_Site$get_allowSelfServiceUpgrade() {
        this.checkUninitializedProperty('AllowSelfServiceUpgrade');
        return ((this.get_objectData()).get_properties())['AllowSelfServiceUpgrade'];
    },
    set_allowSelfServiceUpgrade: function SP_Site$set_allowSelfServiceUpgrade(value) {
        ((this.get_objectData()).get_properties())['AllowSelfServiceUpgrade'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AllowSelfServiceUpgrade', value));
        }
        return value;
    },
    get_allowSelfServiceUpgradeEvaluation: function SP_Site$get_allowSelfServiceUpgradeEvaluation() {
        this.checkUninitializedProperty('AllowSelfServiceUpgradeEvaluation');
        return ((this.get_objectData()).get_properties())['AllowSelfServiceUpgradeEvaluation'];
    },
    set_allowSelfServiceUpgradeEvaluation: function SP_Site$set_allowSelfServiceUpgradeEvaluation(value) {
        ((this.get_objectData()).get_properties())['AllowSelfServiceUpgradeEvaluation'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AllowSelfServiceUpgradeEvaluation', value));
        }
        return value;
    },
    get_canUpgrade: function SP_Site$get_canUpgrade() {
        this.checkUninitializedProperty('CanUpgrade');
        return ((this.get_objectData()).get_properties())['CanUpgrade'];
    },
    get_compatibilityLevel: function SP_Site$get_compatibilityLevel() {
        this.checkUninitializedProperty('CompatibilityLevel');
        return ((this.get_objectData()).get_properties())['CompatibilityLevel'];
    },
    get_eventReceivers: function SP_Site$get_eventReceivers() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['EventReceivers'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.EventReceiverDefinitionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'EventReceivers'));
            ((this.get_objectData()).get_clientObjectProperties())['EventReceivers'] = $v_0;
        }
        return $v_0;
    },
    get_features: function SP_Site$get_features() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Features'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FeatureCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Features'));
            ((this.get_objectData()).get_clientObjectProperties())['Features'] = $v_0;
        }
        return $v_0;
    },
    get_id: function SP_Site$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_lockIssue: function SP_Site$get_lockIssue() {
        this.checkUninitializedProperty('LockIssue');
        return ((this.get_objectData()).get_properties())['LockIssue'];
    },
    get_maxItemsPerThrottledOperation: function SP_Site$get_maxItemsPerThrottledOperation() {
        this.checkUninitializedProperty('MaxItemsPerThrottledOperation');
        return ((this.get_objectData()).get_properties())['MaxItemsPerThrottledOperation'];
    },
    get_owner: function SP_Site$get_owner() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Owner'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Owner'));
            ((this.get_objectData()).get_clientObjectProperties())['Owner'] = $v_0;
        }
        return $v_0;
    },
    set_owner: function SP_Site$set_owner(value) {
        ((this.get_objectData()).get_clientObjectProperties())['Owner'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Owner', value));
        }
        return value;
    },
    get_primaryUri: function SP_Site$get_primaryUri() {
        this.checkUninitializedProperty('PrimaryUri');
        return ((this.get_objectData()).get_properties())['PrimaryUri'];
    },
    get_readOnly: function SP_Site$get_readOnly() {
        this.checkUninitializedProperty('ReadOnly');
        return ((this.get_objectData()).get_properties())['ReadOnly'];
    },
    get_recycleBin: function SP_Site$get_recycleBin() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['RecycleBin'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.RecycleBinItemCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RecycleBin'));
            ((this.get_objectData()).get_clientObjectProperties())['RecycleBin'] = $v_0;
        }
        return $v_0;
    },
    get_requiredDesignerVersion: function SP_Site$get_requiredDesignerVersion() {
        this.checkUninitializedProperty('RequiredDesignerVersion');
        return ((this.get_objectData()).get_properties())['RequiredDesignerVersion'];
    },
    get_rootWeb: function SP_Site$get_rootWeb() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['RootWeb'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Web(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RootWeb'));
            ((this.get_objectData()).get_clientObjectProperties())['RootWeb'] = $v_0;
        }
        return $v_0;
    },
    get_serverRelativeUrl: function SP_Site$get_serverRelativeUrl() {
        this.checkUninitializedProperty('ServerRelativeUrl');
        return ((this.get_objectData()).get_properties())['ServerRelativeUrl'];
    },
    get_shareByLinkEnabled: function SP_Site$get_shareByLinkEnabled() {
        this.checkUninitializedProperty('ShareByLinkEnabled');
        return ((this.get_objectData()).get_properties())['ShareByLinkEnabled'];
    },
    get_showUrlStructure: function SP_Site$get_showUrlStructure() {
        this.checkUninitializedProperty('ShowUrlStructure');
        return ((this.get_objectData()).get_properties())['ShowUrlStructure'];
    },
    set_showUrlStructure: function SP_Site$set_showUrlStructure(value) {
        ((this.get_objectData()).get_properties())['ShowUrlStructure'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ShowUrlStructure', value));
        }
        return value;
    },
    get_uiVersionConfigurationEnabled: function SP_Site$get_uiVersionConfigurationEnabled() {
        this.checkUninitializedProperty('UIVersionConfigurationEnabled');
        return ((this.get_objectData()).get_properties())['UIVersionConfigurationEnabled'];
    },
    set_uiVersionConfigurationEnabled: function SP_Site$set_uiVersionConfigurationEnabled(value) {
        ((this.get_objectData()).get_properties())['UIVersionConfigurationEnabled'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'UIVersionConfigurationEnabled', value));
        }
        return value;
    },
    get_upgradeInfo: function SP_Site$get_upgradeInfo() {
        this.checkUninitializedProperty('UpgradeInfo');
        return ((this.get_objectData()).get_properties())['UpgradeInfo'];
    },
    get_upgradeReminderDate: function SP_Site$get_upgradeReminderDate() {
        this.checkUninitializedProperty('UpgradeReminderDate');
        return ((this.get_objectData()).get_properties())['UpgradeReminderDate'];
    },
    get_upgrading: function SP_Site$get_upgrading() {
        this.checkUninitializedProperty('Upgrading');
        return ((this.get_objectData()).get_properties())['Upgrading'];
    },
    get_url: function SP_Site$get_url() {
        this.checkUninitializedProperty('Url');
        return ((this.get_objectData()).get_properties())['Url'];
    },
    get_usage: function SP_Site$get_usage() {
        this.checkUninitializedProperty('Usage');
        return ((this.get_objectData()).get_properties())['Usage'];
    },
    get_userCustomActions: function SP_Site$get_userCustomActions() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['UserCustomActions'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.UserCustomActionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'UserCustomActions'));
            ((this.get_objectData()).get_clientObjectProperties())['UserCustomActions'] = $v_0;
        }
        return $v_0;
    },
    initPropertiesFromJson: function SP_Site$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AllowCreateDeclarativeWorkflow;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowCreateDeclarativeWorkflow'] = $v_0;
            delete parentNode.AllowCreateDeclarativeWorkflow;
        }
        $v_0 = parentNode.AllowDesigner;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowDesigner'] = $v_0;
            delete parentNode.AllowDesigner;
        }
        $v_0 = parentNode.AllowMasterPageEditing;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowMasterPageEditing'] = $v_0;
            delete parentNode.AllowMasterPageEditing;
        }
        $v_0 = parentNode.AllowRevertFromTemplate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowRevertFromTemplate'] = $v_0;
            delete parentNode.AllowRevertFromTemplate;
        }
        $v_0 = parentNode.AllowSaveDeclarativeWorkflowAsTemplate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowSaveDeclarativeWorkflowAsTemplate'] = $v_0;
            delete parentNode.AllowSaveDeclarativeWorkflowAsTemplate;
        }
        $v_0 = parentNode.AllowSavePublishDeclarativeWorkflow;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowSavePublishDeclarativeWorkflow'] = $v_0;
            delete parentNode.AllowSavePublishDeclarativeWorkflow;
        }
        $v_0 = parentNode.AllowSelfServiceUpgrade;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowSelfServiceUpgrade'] = $v_0;
            delete parentNode.AllowSelfServiceUpgrade;
        }
        $v_0 = parentNode.AllowSelfServiceUpgradeEvaluation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowSelfServiceUpgradeEvaluation'] = $v_0;
            delete parentNode.AllowSelfServiceUpgradeEvaluation;
        }
        $v_0 = parentNode.CanUpgrade;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CanUpgrade'] = $v_0;
            delete parentNode.CanUpgrade;
        }
        $v_0 = parentNode.CompatibilityLevel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CompatibilityLevel'] = $v_0;
            delete parentNode.CompatibilityLevel;
        }
        $v_0 = parentNode.EventReceivers;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('EventReceivers', this.get_eventReceivers(), $v_0);
            (this.get_eventReceivers()).fromJson($v_0);
            delete parentNode.EventReceivers;
        }
        $v_0 = parentNode.Features;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Features', this.get_features(), $v_0);
            (this.get_features()).fromJson($v_0);
            delete parentNode.Features;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.LockIssue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['LockIssue'] = $v_0;
            delete parentNode.LockIssue;
        }
        $v_0 = parentNode.MaxItemsPerThrottledOperation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['MaxItemsPerThrottledOperation'] = $v_0;
            delete parentNode.MaxItemsPerThrottledOperation;
        }
        $v_0 = parentNode.Owner;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Owner', this.get_owner(), $v_0);
            (this.get_owner()).fromJson($v_0);
            delete parentNode.Owner;
        }
        $v_0 = parentNode.PrimaryUri;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['PrimaryUri'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.PrimaryUri;
        }
        $v_0 = parentNode.ReadOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ReadOnly'] = $v_0;
            delete parentNode.ReadOnly;
        }
        $v_0 = parentNode.RecycleBin;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('RecycleBin', this.get_recycleBin(), $v_0);
            (this.get_recycleBin()).fromJson($v_0);
            delete parentNode.RecycleBin;
        }
        $v_0 = parentNode.RequiredDesignerVersion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['RequiredDesignerVersion'] = $v_0;
            delete parentNode.RequiredDesignerVersion;
        }
        $v_0 = parentNode.RootWeb;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('RootWeb', this.get_rootWeb(), $v_0);
            (this.get_rootWeb()).fromJson($v_0);
            delete parentNode.RootWeb;
        }
        $v_0 = parentNode.ServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ServerRelativeUrl'] = $v_0;
            delete parentNode.ServerRelativeUrl;
        }
        $v_0 = parentNode.ShareByLinkEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ShareByLinkEnabled'] = $v_0;
            delete parentNode.ShareByLinkEnabled;
        }
        $v_0 = parentNode.ShowUrlStructure;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ShowUrlStructure'] = $v_0;
            delete parentNode.ShowUrlStructure;
        }
        $v_0 = parentNode.UIVersionConfigurationEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['UIVersionConfigurationEnabled'] = $v_0;
            delete parentNode.UIVersionConfigurationEnabled;
        }
        $v_0 = parentNode.UpgradeInfo;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['UpgradeInfo'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.UpgradeInfo;
        }
        $v_0 = parentNode.UpgradeReminderDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['UpgradeReminderDate'] = $v_0;
            delete parentNode.UpgradeReminderDate;
        }
        $v_0 = parentNode.Upgrading;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Upgrading'] = $v_0;
            delete parentNode.Upgrading;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Url'] = $v_0;
            delete parentNode.Url;
        }
        $v_0 = parentNode.Usage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Usage'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.Usage;
        }
        $v_0 = parentNode.UserCustomActions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('UserCustomActions', this.get_userCustomActions(), $v_0);
            (this.get_userCustomActions()).fromJson($v_0);
            delete parentNode.UserCustomActions;
        }
    },
    updateClientObjectModelUseRemoteAPIsPermissionSetting: function SP_Site$updateClientObjectModelUseRemoteAPIsPermissionSetting(requireUseRemoteAPIs) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdateClientObjectModelUseRemoteAPIsPermissionSetting', [requireUseRemoteAPIs]);

        $v_0.addQuery($v_1);
    },
    needsUpgradeByType: function SP_Site$needsUpgradeByType(versionUpgrade, recursive) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'NeedsUpgradeByType', [versionUpgrade, recursive]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    runHealthCheck: function SP_Site$runHealthCheck(ruleId, bRepair, bRunAlways) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.SiteHealth.SiteHealthSummary($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'RunHealthCheck', [ruleId, bRepair, bRunAlways]));
        return $v_1;
    },
    createPreviewSPSite: function SP_Site$createPreviewSPSite(upgrade, sendemail) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'CreatePreviewSPSite', [upgrade, sendemail]);

        $v_0.addQuery($v_1);
    },
    runUpgradeSiteSession: function SP_Site$runUpgradeSiteSession(versionUpgrade, queueOnly, sendEmail) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'RunUpgradeSiteSession', [versionUpgrade, queueOnly, sendEmail]);

        $v_0.addQuery($v_1);
    },
    getChanges: function SP_Site$getChanges(query) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.ChangeCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetChanges', [query]));
        return $v_1;
    },
    openWeb: function SP_Site$openWeb(strUrl) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['OpenWeb'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['OpenWeb'] = $v_2;
        }
        $v_1 = $v_2[strUrl.toUpperCase()];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.Web($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'OpenWeb', [strUrl]));
        $v_2[strUrl.toUpperCase()] = $v_1;
        var $v_3 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_3.get_id(), $v_1);
        $v_0.addQuery($v_3);
        return $v_1;
    },
    openWebById: function SP_Site$openWebById(gWebId) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.Web($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'OpenWebById', [gWebId]));
        return $v_1;
    },
    getWebTemplates: function SP_Site$getWebTemplates(LCID, overrideCompatLevel) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.WebTemplateCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetWebTemplates', [LCID, overrideCompatLevel]));
        return $v_1;
    },
    getCustomListTemplates: function SP_Site$getCustomListTemplates(web) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.ListTemplateCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetCustomListTemplates', [web]));
        return $v_1;
    },
    getCatalog: function SP_Site$getCatalog(typeCatalog) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetCatalog'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = [];
            ((this.get_objectData()).get_methodReturnObjects())['GetCatalog'] = $v_2;
        }
        $v_1 = $v_2[typeCatalog];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.List($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetCatalog', [typeCatalog]));
        $v_2[typeCatalog] = $v_1;
        return $v_1;
    },
    extendUpgradeReminderDate: function SP_Site$extendUpgradeReminderDate() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'ExtendUpgradeReminderDate', null);

        $v_0.addQuery($v_1);
    },
    invalidate: function SP_Site$invalidate() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Invalidate', null);

        $v_0.addQuery($v_1);
    }
};
SP.SitePropertyNames = function SP_SitePropertyNames() {
};
SP.SiteObjectPropertyNames = function SP_SiteObjectPropertyNames() {
};
SP.SiteUrl = function SP_SiteUrl(context, objectPath) {
    SP.SiteUrl.initializeBase(this, [context, objectPath]);
};
SP.SubwebQuery = function SP_SubwebQuery() {
    this.$13_1 = -1;
    this.$1Z_1 = -1;
    SP.SubwebQuery.initializeBase(this);
};
SP.SubwebQuery.prototype = {
    get_configurationFilter: function SP_SubwebQuery$get_configurationFilter() {
        return this.$13_1;
    },
    set_configurationFilter: function SP_SubwebQuery$set_configurationFilter(value) {
        this.$13_1 = value;
        return value;
    },
    get_webTemplateFilter: function SP_SubwebQuery$get_webTemplateFilter() {
        return this.$1Z_1;
    },
    set_webTemplateFilter: function SP_SubwebQuery$set_webTemplateFilter(value) {
        this.$1Z_1 = value;
        return value;
    },
    get_typeId: function SP_SubwebQuery$get_typeId() {
        return '{e3a4d63c-876b-4e24-a972-7664437146fe}';
    },
    writeToXml: function SP_SubwebQuery$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['ConfigurationFilter', 'WebTemplateFilter'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_SubwebQuery$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ConfigurationFilter;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$13_1 = $v_0;
            delete parentNode.ConfigurationFilter;
        }
        $v_0 = parentNode.WebTemplateFilter;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1Z_1 = $v_0;
            delete parentNode.WebTemplateFilter;
        }
    }
};
SP.ThemeInfo = function SP_ThemeInfo(context, objectPath) {
    SP.ThemeInfo.initializeBase(this, [context, objectPath]);
};
SP.ThemeInfo.prototype = {
    get_accessibleDescription: function SP_ThemeInfo$get_accessibleDescription() {
        this.checkUninitializedProperty('AccessibleDescription');
        return ((this.get_objectData()).get_properties())['AccessibleDescription'];
    },
    get_themeBackgroundImageUri: function SP_ThemeInfo$get_themeBackgroundImageUri() {
        this.checkUninitializedProperty('ThemeBackgroundImageUri');
        return ((this.get_objectData()).get_properties())['ThemeBackgroundImageUri'];
    },
    initPropertiesFromJson: function SP_ThemeInfo$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AccessibleDescription;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AccessibleDescription'] = $v_0;
            delete parentNode.AccessibleDescription;
        }
        $v_0 = parentNode.ThemeBackgroundImageUri;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ThemeBackgroundImageUri'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.ThemeBackgroundImageUri;
        }
    },
    getThemeShadeByName: function SP_ThemeInfo$getThemeShadeByName(name) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetThemeShadeByName', [name]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    getThemeFontByName: function SP_ThemeInfo$getThemeFontByName(name, lcid) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetThemeFontByName', [name, lcid]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
};
SP.ThemeInfoPropertyNames = function SP_ThemeInfoPropertyNames() {
};
SP.TimeZone = function SP_TimeZone(context, objectPath) {
    SP.TimeZone.initializeBase(this, [context, objectPath]);
};
SP.TimeZone.prototype = {
    get_description: function SP_TimeZone$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData()).get_properties())['Description'];
    },
    get_id: function SP_TimeZone$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_information: function SP_TimeZone$get_information() {
        this.checkUninitializedProperty('Information');
        return ((this.get_objectData()).get_properties())['Information'];
    },
    initPropertiesFromJson: function SP_TimeZone$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Description'] = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.Information;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Information'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.Information;
        }
    },
    localTimeToUTC: function SP_TimeZone$localTimeToUTC(date) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'LocalTimeToUTC', [date]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.DateTimeResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    utcToLocalTime: function SP_TimeZone$utcToLocalTime(date) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'UTCToLocalTime', [date]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.DateTimeResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
};
SP.TimeZonePropertyNames = function SP_TimeZonePropertyNames() {
};
SP.TimeZoneCollection = function SP_TimeZoneCollection(context, objectPath) {
    SP.TimeZoneCollection.initializeBase(this, [context, objectPath]);
};
SP.TimeZoneCollection.prototype = {
    itemAt: function SP_TimeZoneCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_TimeZoneCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_TimeZoneCollection$get_childItemType() {
        return SP.TimeZone;
    },
    getById: function SP_TimeZoneCollection$getById(id) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetById'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = [];
            ((this.get_objectData()).get_methodReturnObjects())['GetById'] = $v_2;
        }
        $v_1 = $v_2[id];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.TimeZone($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [id]));
        $v_2[id] = $v_1;
        return $v_1;
    }
};
SP.TimeZoneInformation = function SP_TimeZoneInformation() {
    SP.TimeZoneInformation.initializeBase(this);
};
SP.TimeZoneInformation.prototype = {
    $3j_1: 0,
    $3m_1: 0,
    $4L_1: 0,
    get_bias: function SP_TimeZoneInformation$get_bias() {
        return this.$3j_1;
    },
    get_daylightBias: function SP_TimeZoneInformation$get_daylightBias() {
        return this.$3m_1;
    },
    get_standardBias: function SP_TimeZoneInformation$get_standardBias() {
        return this.$4L_1;
    },
    get_typeId: function SP_TimeZoneInformation$get_typeId() {
        return '{09e18222-7e4d-488b-811d-6ef43f31d17f}';
    },
    writeToXml: function SP_TimeZoneInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['Bias', 'DaylightBias', 'StandardBias'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_TimeZoneInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Bias;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3j_1 = $v_0;
            delete parentNode.Bias;
        }
        $v_0 = parentNode.DaylightBias;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3m_1 = $v_0;
            delete parentNode.DaylightBias;
        }
        $v_0 = parentNode.StandardBias;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4L_1 = $v_0;
            delete parentNode.StandardBias;
        }
    }
};
SP.UpgradeInfo = function SP_UpgradeInfo() {
    SP.UpgradeInfo.initializeBase(this);
};
SP.UpgradeInfo.prototype = {
    $3q_1: null,
    $3r_1: 0,
    $40_1: null,
    $42_1: null,
    $4E_1: null,
    $4F_1: 0,
    $4M_1: null,
    $O_1: 0,
    $4T_1: 0,
    $4X_1: 0,
    get_errorFile: function SP_UpgradeInfo$get_errorFile() {
        return this.$3q_1;
    },
    get_errors: function SP_UpgradeInfo$get_errors() {
        return this.$3r_1;
    },
    get_lastUpdated: function SP_UpgradeInfo$get_lastUpdated() {
        return this.$40_1;
    },
    get_logFile: function SP_UpgradeInfo$get_logFile() {
        return this.$42_1;
    },
    get_requestDate: function SP_UpgradeInfo$get_requestDate() {
        return this.$4E_1;
    },
    get_retryCount: function SP_UpgradeInfo$get_retryCount() {
        return this.$4F_1;
    },
    get_startTime: function SP_UpgradeInfo$get_startTime() {
        return this.$4M_1;
    },
    get_status: function SP_UpgradeInfo$get_status() {
        return this.$O_1;
    },
    get_upgradeType: function SP_UpgradeInfo$get_upgradeType() {
        return this.$4T_1;
    },
    get_warnings: function SP_UpgradeInfo$get_warnings() {
        return this.$4X_1;
    },
    get_typeId: function SP_UpgradeInfo$get_typeId() {
        return '{a012e5fa-a28f-4232-9561-c4033f61c889}';
    },
    writeToXml: function SP_UpgradeInfo$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['ErrorFile', 'Errors', 'LastUpdated', 'LogFile', 'RequestDate', 'RetryCount', 'StartTime', 'Status', 'UpgradeType', 'Warnings'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_UpgradeInfo$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ErrorFile;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3q_1 = $v_0;
            delete parentNode.ErrorFile;
        }
        $v_0 = parentNode.Errors;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3r_1 = $v_0;
            delete parentNode.Errors;
        }
        $v_0 = parentNode.LastUpdated;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$40_1 = $v_0;
            delete parentNode.LastUpdated;
        }
        $v_0 = parentNode.LogFile;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$42_1 = $v_0;
            delete parentNode.LogFile;
        }
        $v_0 = parentNode.RequestDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4E_1 = $v_0;
            delete parentNode.RequestDate;
        }
        $v_0 = parentNode.RetryCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4F_1 = $v_0;
            delete parentNode.RetryCount;
        }
        $v_0 = parentNode.StartTime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4M_1 = $v_0;
            delete parentNode.StartTime;
        }
        $v_0 = parentNode.Status;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$O_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.Status;
        }
        $v_0 = parentNode.UpgradeType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4T_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.UpgradeType;
        }
        $v_0 = parentNode.Warnings;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4X_1 = $v_0;
            delete parentNode.Warnings;
        }
    }
};
SP.UsageInfo = function SP_UsageInfo() {
    SP.UsageInfo.initializeBase(this);
};
SP.UsageInfo.prototype = {
    $3i_1: 0,
    $3o_1: 0,
    $3u_1: 0,
    $4N_1: 0,
    $4O_1: 0,
    $4W_1: 0,
    get_bandwidth: function SP_UsageInfo$get_bandwidth() {
        return this.$3i_1;
    },
    get_discussionStorage: function SP_UsageInfo$get_discussionStorage() {
        return this.$3o_1;
    },
    get_hits: function SP_UsageInfo$get_hits() {
        return this.$3u_1;
    },
    get_storage: function SP_UsageInfo$get_storage() {
        return this.$4N_1;
    },
    get_storagePercentageUsed: function SP_UsageInfo$get_storagePercentageUsed() {
        return this.$4O_1;
    },
    get_visits: function SP_UsageInfo$get_visits() {
        return this.$4W_1;
    },
    get_typeId: function SP_UsageInfo$get_typeId() {
        return '{7ec28504-35f9-4fcf-a09f-401024417292}';
    },
    writeToXml: function SP_UsageInfo$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['Bandwidth', 'DiscussionStorage', 'Hits', 'Storage', 'StoragePercentageUsed', 'Visits'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_UsageInfo$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Bandwidth;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3i_1 = $v_0;
            delete parentNode.Bandwidth;
        }
        $v_0 = parentNode.DiscussionStorage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3o_1 = $v_0;
            delete parentNode.DiscussionStorage;
        }
        $v_0 = parentNode.Hits;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3u_1 = $v_0;
            delete parentNode.Hits;
        }
        $v_0 = parentNode.Storage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4N_1 = $v_0;
            delete parentNode.Storage;
        }
        $v_0 = parentNode.StoragePercentageUsed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4O_1 = $v_0;
            delete parentNode.StoragePercentageUsed;
        }
        $v_0 = parentNode.Visits;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4W_1 = $v_0;
            delete parentNode.Visits;
        }
    }
};
SP.User = function SP_User(context, objectPath) {
    SP.User.initializeBase(this, [context, objectPath]);
};
SP.User.prototype = {
    $7_2: function SP_User$$7_2($p0) {
        if ($p0) {
            ((this.get_objectData()).get_properties())['Email'] = $p0.$V_1;
            ((this.get_objectData()).get_properties())['LoginName'] = $p0.$Z_1;
            ((this.get_objectData()).get_properties())['Title'] = $p0.$0_1;
        }
    },
    get_email: function SP_User$get_email() {
        this.checkUninitializedProperty('Email');
        return ((this.get_objectData()).get_properties())['Email'];
    },
    set_email: function SP_User$set_email(value) {
        ((this.get_objectData()).get_properties())['Email'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Email', value));
        }
        return value;
    },
    get_groups: function SP_User$get_groups() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Groups'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.GroupCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Groups'));
            ((this.get_objectData()).get_clientObjectProperties())['Groups'] = $v_0;
        }
        return $v_0;
    },
    get_isSiteAdmin: function SP_User$get_isSiteAdmin() {
        this.checkUninitializedProperty('IsSiteAdmin');
        return ((this.get_objectData()).get_properties())['IsSiteAdmin'];
    },
    set_isSiteAdmin: function SP_User$set_isSiteAdmin(value) {
        ((this.get_objectData()).get_properties())['IsSiteAdmin'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'IsSiteAdmin', value));
        }
        return value;
    },
    get_userId: function SP_User$get_userId() {
        this.checkUninitializedProperty('UserId');
        return ((this.get_objectData()).get_properties())['UserId'];
    },
    initPropertiesFromJson: function SP_User$initPropertiesFromJson(parentNode) {
        SP.Principal.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Email;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Email'] = $v_0;
            delete parentNode.Email;
        }
        $v_0 = parentNode.Groups;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Groups', this.get_groups(), $v_0);
            (this.get_groups()).fromJson($v_0);
            delete parentNode.Groups;
        }
        $v_0 = parentNode.IsSiteAdmin;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsSiteAdmin'] = $v_0;
            delete parentNode.IsSiteAdmin;
        }
        $v_0 = parentNode.UserId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['UserId'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.UserId;
        }
    },
    update: function SP_User$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);

        $v_0.addQuery($v_1);
    }
};
SP.UserPropertyNames = function SP_UserPropertyNames() {
};
SP.UserObjectPropertyNames = function SP_UserObjectPropertyNames() {
};
SP.UserCollection = function SP_UserCollection(context, objectPath) {
    SP.UserCollection.initializeBase(this, [context, objectPath]);
};
SP.UserCollection.prototype = {
    itemAt: function SP_UserCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_UserCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_UserCollection$get_childItemType() {
        return SP.User;
    },
    getByLoginName: function SP_UserCollection$getByLoginName(loginName) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByLoginName'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetByLoginName'] = $v_2;
        }
        $v_1 = $v_2[loginName.toUpperCase()];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.User($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByLoginName', [loginName]));
        $v_2[loginName.toUpperCase()] = $v_1;
        var $v_3 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_3.get_id(), $v_1);
        $v_0.addQuery($v_3);
        return $v_1;
    },
    getById: function SP_UserCollection$getById(id) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.User($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [id]));
        return $v_1;
    },
    getByEmail: function SP_UserCollection$getByEmail(emailAddress) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByEmail'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetByEmail'] = $v_2;
        }
        $v_1 = $v_2[emailAddress];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.User($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByEmail', [emailAddress]));
        $v_2[emailAddress] = $v_1;
        var $v_3 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_3.get_id(), $v_1);
        $v_0.addQuery($v_3);
        return $v_1;
    },
    removeByLoginName: function SP_UserCollection$removeByLoginName(loginName) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'RemoveByLoginName', [loginName]);

        $v_0.addQuery($v_1);
    },
    removeById: function SP_UserCollection$removeById(id) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'RemoveById', [id]);

        $v_0.addQuery($v_1);
    },
    remove: function SP_UserCollection$remove(user) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Remove', [user]);

        $v_0.addQuery($v_1);
        this.removeChild(user);
    },
    add: function SP_UserCollection$add(parameters) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.User($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [parameters]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        $v_1.$7_2(parameters);
        return $v_1;
    },
    addUser: function SP_UserCollection$addUser(user) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.User($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'AddUser', [user]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    }
};
SP.UserCreationInformation = function SP_UserCreationInformation() {
    SP.UserCreationInformation.initializeBase(this);
};
SP.UserCreationInformation.prototype = {
    $V_1: null,
    $Z_1: null,
    $0_1: null,
    get_email: function SP_UserCreationInformation$get_email() {
        return this.$V_1;
    },
    set_email: function SP_UserCreationInformation$set_email(value) {
        this.$V_1 = value;
        return value;
    },
    get_loginName: function SP_UserCreationInformation$get_loginName() {
        return this.$Z_1;
    },
    set_loginName: function SP_UserCreationInformation$set_loginName(value) {
        this.$Z_1 = value;
        return value;
    },
    get_title: function SP_UserCreationInformation$get_title() {
        return this.$0_1;
    },
    set_title: function SP_UserCreationInformation$set_title(value) {
        this.$0_1 = value;
        return value;
    },
    get_typeId: function SP_UserCreationInformation$get_typeId() {
        return '{6ecd8af6-bed3-4a74-be76-1ec981b350e1}';
    },
    writeToXml: function SP_UserCreationInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['Email', 'LoginName', 'Title'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_UserCreationInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Email;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$V_1 = $v_0;
            delete parentNode.Email;
        }
        $v_0 = parentNode.LoginName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Z_1 = $v_0;
            delete parentNode.LoginName;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = $v_0;
            delete parentNode.Title;
        }
    }
};
SP.UserCustomAction = function SP_UserCustomAction(context, objectPath) {
    SP.UserCustomAction.initializeBase(this, [context, objectPath]);
};
SP.UserCustomAction.prototype = {
    get_commandUIExtension: function SP_UserCustomAction$get_commandUIExtension() {
        this.checkUninitializedProperty('CommandUIExtension');
        return ((this.get_objectData()).get_properties())['CommandUIExtension'];
    },
    set_commandUIExtension: function SP_UserCustomAction$set_commandUIExtension(value) {
        ((this.get_objectData()).get_properties())['CommandUIExtension'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'CommandUIExtension', value));
        }
        return value;
    },
    get_description: function SP_UserCustomAction$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData()).get_properties())['Description'];
    },
    set_description: function SP_UserCustomAction$set_description(value) {
        ((this.get_objectData()).get_properties())['Description'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    get_group: function SP_UserCustomAction$get_group() {
        this.checkUninitializedProperty('Group');
        return ((this.get_objectData()).get_properties())['Group'];
    },
    set_group: function SP_UserCustomAction$set_group(value) {
        ((this.get_objectData()).get_properties())['Group'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Group', value));
        }
        return value;
    },
    get_id: function SP_UserCustomAction$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_imageUrl: function SP_UserCustomAction$get_imageUrl() {
        this.checkUninitializedProperty('ImageUrl');
        return ((this.get_objectData()).get_properties())['ImageUrl'];
    },
    set_imageUrl: function SP_UserCustomAction$set_imageUrl(value) {
        ((this.get_objectData()).get_properties())['ImageUrl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ImageUrl', value));
        }
        return value;
    },
    get_location: function SP_UserCustomAction$get_location() {
        this.checkUninitializedProperty('Location');
        return ((this.get_objectData()).get_properties())['Location'];
    },
    set_location: function SP_UserCustomAction$set_location(value) {
        ((this.get_objectData()).get_properties())['Location'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Location', value));
        }
        return value;
    },
    get_name: function SP_UserCustomAction$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    set_name: function SP_UserCustomAction$set_name(value) {
        ((this.get_objectData()).get_properties())['Name'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    get_registrationId: function SP_UserCustomAction$get_registrationId() {
        this.checkUninitializedProperty('RegistrationId');
        return ((this.get_objectData()).get_properties())['RegistrationId'];
    },
    set_registrationId: function SP_UserCustomAction$set_registrationId(value) {
        ((this.get_objectData()).get_properties())['RegistrationId'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'RegistrationId', value));
        }
        return value;
    },
    get_registrationType: function SP_UserCustomAction$get_registrationType() {
        this.checkUninitializedProperty('RegistrationType');
        return ((this.get_objectData()).get_properties())['RegistrationType'];
    },
    set_registrationType: function SP_UserCustomAction$set_registrationType(value) {
        ((this.get_objectData()).get_properties())['RegistrationType'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'RegistrationType', value));
        }
        return value;
    },
    get_rights: function SP_UserCustomAction$get_rights() {
        this.checkUninitializedProperty('Rights');
        return ((this.get_objectData()).get_properties())['Rights'];
    },
    set_rights: function SP_UserCustomAction$set_rights(value) {
        ((this.get_objectData()).get_properties())['Rights'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Rights', value));
        }
        return value;
    },
    get_scope: function SP_UserCustomAction$get_scope() {
        this.checkUninitializedProperty('Scope');
        return ((this.get_objectData()).get_properties())['Scope'];
    },
    get_scriptBlock: function SP_UserCustomAction$get_scriptBlock() {
        this.checkUninitializedProperty('ScriptBlock');
        return ((this.get_objectData()).get_properties())['ScriptBlock'];
    },
    set_scriptBlock: function SP_UserCustomAction$set_scriptBlock(value) {
        ((this.get_objectData()).get_properties())['ScriptBlock'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ScriptBlock', value));
        }
        return value;
    },
    get_scriptSrc: function SP_UserCustomAction$get_scriptSrc() {
        this.checkUninitializedProperty('ScriptSrc');
        return ((this.get_objectData()).get_properties())['ScriptSrc'];
    },
    set_scriptSrc: function SP_UserCustomAction$set_scriptSrc(value) {
        ((this.get_objectData()).get_properties())['ScriptSrc'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ScriptSrc', value));
        }
        return value;
    },
    get_sequence: function SP_UserCustomAction$get_sequence() {
        this.checkUninitializedProperty('Sequence');
        return ((this.get_objectData()).get_properties())['Sequence'];
    },
    set_sequence: function SP_UserCustomAction$set_sequence(value) {
        ((this.get_objectData()).get_properties())['Sequence'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Sequence', value));
        }
        return value;
    },
    get_title: function SP_UserCustomAction$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData()).get_properties())['Title'];
    },
    set_title: function SP_UserCustomAction$set_title(value) {
        ((this.get_objectData()).get_properties())['Title'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    get_url: function SP_UserCustomAction$get_url() {
        this.checkUninitializedProperty('Url');
        return ((this.get_objectData()).get_properties())['Url'];
    },
    set_url: function SP_UserCustomAction$set_url(value) {
        ((this.get_objectData()).get_properties())['Url'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Url', value));
        }
        return value;
    },
    get_versionOfUserCustomAction: function SP_UserCustomAction$get_versionOfUserCustomAction() {
        this.checkUninitializedProperty('VersionOfUserCustomAction');
        return ((this.get_objectData()).get_properties())['VersionOfUserCustomAction'];
    },
    initPropertiesFromJson: function SP_UserCustomAction$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.CommandUIExtension;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CommandUIExtension'] = $v_0;
            delete parentNode.CommandUIExtension;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Description'] = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.Group;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Group'] = $v_0;
            delete parentNode.Group;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.ImageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ImageUrl'] = $v_0;
            delete parentNode.ImageUrl;
        }
        $v_0 = parentNode.Location;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Location'] = $v_0;
            delete parentNode.Location;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.RegistrationId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['RegistrationId'] = $v_0;
            delete parentNode.RegistrationId;
        }
        $v_0 = parentNode.RegistrationType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['RegistrationType'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.RegistrationType;
        }
        $v_0 = parentNode.Rights;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Rights'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.Rights;
        }
        $v_0 = parentNode.Scope;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Scope'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.Scope;
        }
        $v_0 = parentNode.ScriptBlock;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ScriptBlock'] = $v_0;
            delete parentNode.ScriptBlock;
        }
        $v_0 = parentNode.ScriptSrc;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ScriptSrc'] = $v_0;
            delete parentNode.ScriptSrc;
        }
        $v_0 = parentNode.Sequence;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Sequence'] = $v_0;
            delete parentNode.Sequence;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Title'] = $v_0;
            delete parentNode.Title;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Url'] = $v_0;
            delete parentNode.Url;
        }
        $v_0 = parentNode.VersionOfUserCustomAction;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['VersionOfUserCustomAction'] = $v_0;
            delete parentNode.VersionOfUserCustomAction;
        }
    },
    update: function SP_UserCustomAction$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);

        $v_0.addQuery($v_1);
        this.refreshLoad();
    },
    deleteObject: function SP_UserCustomAction$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
};
SP.UserCustomActionPropertyNames = function SP_UserCustomActionPropertyNames() {
};
SP.UserCustomActionCollection = function SP_UserCustomActionCollection(context, objectPath) {
    SP.UserCustomActionCollection.initializeBase(this, [context, objectPath]);
};
SP.UserCustomActionCollection.prototype = {
    itemAt: function SP_UserCustomActionCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_UserCustomActionCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_UserCustomActionCollection$get_childItemType() {
        return SP.UserCustomAction;
    },
    getById: function SP_UserCustomActionCollection$getById(id) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetById'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetById'] = $v_2;
        }
        $v_1 = $v_2[id.toString()];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.UserCustomAction($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [id]));
        $v_2[id.toString()] = $v_1;
        return $v_1;
    },
    clear: function SP_UserCustomActionCollection$clear() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Clear', null);

        $v_0.addQuery($v_1);
    },
    add: function SP_UserCustomActionCollection$add() {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.UserCustomAction($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', null));
        this.addChild($v_1);
        return $v_1;
    }
};
SP.UserIdInfo = function SP_UserIdInfo() {
    SP.UserIdInfo.initializeBase(this);
};
SP.UserIdInfo.prototype = {
    $45_1: null,
    $46_1: null,
    get_nameId: function SP_UserIdInfo$get_nameId() {
        return this.$45_1;
    },
    get_nameIdIssuer: function SP_UserIdInfo$get_nameIdIssuer() {
        return this.$46_1;
    },
    get_typeId: function SP_UserIdInfo$get_typeId() {
        return '{c5c3ae1a-63b6-4f25-a887-54b0b20a28e2}';
    },
    writeToXml: function SP_UserIdInfo$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['NameId', 'NameIdIssuer'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_UserIdInfo$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.NameId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$45_1 = $v_0;
            delete parentNode.NameId;
        }
        $v_0 = parentNode.NameIdIssuer;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$46_1 = $v_0;
            delete parentNode.NameIdIssuer;
        }
    }
};
SP.View = function SP_View(context, objectPath) {
    SP.View.initializeBase(this, [context, objectPath]);
};
SP.View.prototype = {
    $7_1: function SP_View$$7_1($p0) {
        if ($p0) {
            ((this.get_objectData()).get_properties())['Title'] = $p0.$0_1;
            ((this.get_objectData()).get_properties())['Paged'] = $p0.$1L_1;
        }
    },
    get_aggregations: function SP_View$get_aggregations() {
        this.checkUninitializedProperty('Aggregations');
        return ((this.get_objectData()).get_properties())['Aggregations'];
    },
    set_aggregations: function SP_View$set_aggregations(value) {
        ((this.get_objectData()).get_properties())['Aggregations'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Aggregations', value));
        }
        return value;
    },
    get_aggregationsStatus: function SP_View$get_aggregationsStatus() {
        this.checkUninitializedProperty('AggregationsStatus');
        return ((this.get_objectData()).get_properties())['AggregationsStatus'];
    },
    set_aggregationsStatus: function SP_View$set_aggregationsStatus(value) {
        ((this.get_objectData()).get_properties())['AggregationsStatus'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AggregationsStatus', value));
        }
        return value;
    },
    get_baseViewId: function SP_View$get_baseViewId() {
        this.checkUninitializedProperty('BaseViewId');
        return ((this.get_objectData()).get_properties())['BaseViewId'];
    },
    get_contentTypeId: function SP_View$get_contentTypeId() {
        this.checkUninitializedProperty('ContentTypeId');
        return ((this.get_objectData()).get_properties())['ContentTypeId'];
    },
    set_contentTypeId: function SP_View$set_contentTypeId(value) {
        ((this.get_objectData()).get_properties())['ContentTypeId'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ContentTypeId', value));
        }
        return value;
    },
    get_defaultView: function SP_View$get_defaultView() {
        this.checkUninitializedProperty('DefaultView');
        return ((this.get_objectData()).get_properties())['DefaultView'];
    },
    set_defaultView: function SP_View$set_defaultView(value) {
        ((this.get_objectData()).get_properties())['DefaultView'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DefaultView', value));
        }
        return value;
    },
    get_defaultViewForContentType: function SP_View$get_defaultViewForContentType() {
        this.checkUninitializedProperty('DefaultViewForContentType');
        return ((this.get_objectData()).get_properties())['DefaultViewForContentType'];
    },
    set_defaultViewForContentType: function SP_View$set_defaultViewForContentType(value) {
        ((this.get_objectData()).get_properties())['DefaultViewForContentType'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'DefaultViewForContentType', value));
        }
        return value;
    },
    get_editorModified: function SP_View$get_editorModified() {
        this.checkUninitializedProperty('EditorModified');
        return ((this.get_objectData()).get_properties())['EditorModified'];
    },
    set_editorModified: function SP_View$set_editorModified(value) {
        ((this.get_objectData()).get_properties())['EditorModified'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'EditorModified', value));
        }
        return value;
    },
    get_formats: function SP_View$get_formats() {
        this.checkUninitializedProperty('Formats');
        return ((this.get_objectData()).get_properties())['Formats'];
    },
    set_formats: function SP_View$set_formats(value) {
        ((this.get_objectData()).get_properties())['Formats'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Formats', value));
        }
        return value;
    },
    get_hidden: function SP_View$get_hidden() {
        this.checkUninitializedProperty('Hidden');
        return ((this.get_objectData()).get_properties())['Hidden'];
    },
    set_hidden: function SP_View$set_hidden(value) {
        ((this.get_objectData()).get_properties())['Hidden'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Hidden', value));
        }
        return value;
    },
    get_htmlSchemaXml: function SP_View$get_htmlSchemaXml() {
        this.checkUninitializedProperty('HtmlSchemaXml');
        return ((this.get_objectData()).get_properties())['HtmlSchemaXml'];
    },
    get_id: function SP_View$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_imageUrl: function SP_View$get_imageUrl() {
        this.checkUninitializedProperty('ImageUrl');
        return ((this.get_objectData()).get_properties())['ImageUrl'];
    },
    get_includeRootFolder: function SP_View$get_includeRootFolder() {
        this.checkUninitializedProperty('IncludeRootFolder');
        return ((this.get_objectData()).get_properties())['IncludeRootFolder'];
    },
    set_includeRootFolder: function SP_View$set_includeRootFolder(value) {
        ((this.get_objectData()).get_properties())['IncludeRootFolder'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'IncludeRootFolder', value));
        }
        return value;
    },
    get_viewJoins: function SP_View$get_viewJoins() {
        this.checkUninitializedProperty('ViewJoins');
        return ((this.get_objectData()).get_properties())['ViewJoins'];
    },
    set_viewJoins: function SP_View$set_viewJoins(value) {
        ((this.get_objectData()).get_properties())['ViewJoins'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ViewJoins', value));
        }
        return value;
    },
    get_jsLink: function SP_View$get_jsLink() {
        this.checkUninitializedProperty('JSLink');
        return ((this.get_objectData()).get_properties())['JSLink'];
    },
    set_jsLink: function SP_View$set_jsLink(value) {
        ((this.get_objectData()).get_properties())['JSLink'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'JSLink', value));
        }
        return value;
    },
    get_listViewXml: function SP_View$get_listViewXml() {
        this.checkUninitializedProperty('ListViewXml');
        return ((this.get_objectData()).get_properties())['ListViewXml'];
    },
    set_listViewXml: function SP_View$set_listViewXml(value) {
        ((this.get_objectData()).get_properties())['ListViewXml'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ListViewXml', value));
        }
        return value;
    },
    get_method: function SP_View$get_method() {
        this.checkUninitializedProperty('Method');
        return ((this.get_objectData()).get_properties())['Method'];
    },
    set_method: function SP_View$set_method(value) {
        ((this.get_objectData()).get_properties())['Method'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Method', value));
        }
        return value;
    },
    get_mobileDefaultView: function SP_View$get_mobileDefaultView() {
        this.checkUninitializedProperty('MobileDefaultView');
        return ((this.get_objectData()).get_properties())['MobileDefaultView'];
    },
    set_mobileDefaultView: function SP_View$set_mobileDefaultView(value) {
        ((this.get_objectData()).get_properties())['MobileDefaultView'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'MobileDefaultView', value));
        }
        return value;
    },
    get_mobileView: function SP_View$get_mobileView() {
        this.checkUninitializedProperty('MobileView');
        return ((this.get_objectData()).get_properties())['MobileView'];
    },
    set_mobileView: function SP_View$set_mobileView(value) {
        ((this.get_objectData()).get_properties())['MobileView'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'MobileView', value));
        }
        return value;
    },
    get_moderationType: function SP_View$get_moderationType() {
        this.checkUninitializedProperty('ModerationType');
        return ((this.get_objectData()).get_properties())['ModerationType'];
    },
    get_orderedView: function SP_View$get_orderedView() {
        this.checkUninitializedProperty('OrderedView');
        return ((this.get_objectData()).get_properties())['OrderedView'];
    },
    get_paged: function SP_View$get_paged() {
        this.checkUninitializedProperty('Paged');
        return ((this.get_objectData()).get_properties())['Paged'];
    },
    set_paged: function SP_View$set_paged(value) {
        ((this.get_objectData()).get_properties())['Paged'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Paged', value));
        }
        return value;
    },
    get_personalView: function SP_View$get_personalView() {
        this.checkUninitializedProperty('PersonalView');
        return ((this.get_objectData()).get_properties())['PersonalView'];
    },
    get_viewProjectedFields: function SP_View$get_viewProjectedFields() {
        this.checkUninitializedProperty('ViewProjectedFields');
        return ((this.get_objectData()).get_properties())['ViewProjectedFields'];
    },
    set_viewProjectedFields: function SP_View$set_viewProjectedFields(value) {
        ((this.get_objectData()).get_properties())['ViewProjectedFields'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ViewProjectedFields', value));
        }
        return value;
    },
    get_viewQuery: function SP_View$get_viewQuery() {
        this.checkUninitializedProperty('ViewQuery');
        return ((this.get_objectData()).get_properties())['ViewQuery'];
    },
    set_viewQuery: function SP_View$set_viewQuery(value) {
        ((this.get_objectData()).get_properties())['ViewQuery'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ViewQuery', value));
        }
        return value;
    },
    get_readOnlyView: function SP_View$get_readOnlyView() {
        this.checkUninitializedProperty('ReadOnlyView');
        return ((this.get_objectData()).get_properties())['ReadOnlyView'];
    },
    get_requiresClientIntegration: function SP_View$get_requiresClientIntegration() {
        this.checkUninitializedProperty('RequiresClientIntegration');
        return ((this.get_objectData()).get_properties())['RequiresClientIntegration'];
    },
    get_rowLimit: function SP_View$get_rowLimit() {
        this.checkUninitializedProperty('RowLimit');
        return ((this.get_objectData()).get_properties())['RowLimit'];
    },
    set_rowLimit: function SP_View$set_rowLimit(value) {
        ((this.get_objectData()).get_properties())['RowLimit'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'RowLimit', value));
        }
        return value;
    },
    get_scope: function SP_View$get_scope() {
        this.checkUninitializedProperty('Scope');
        return ((this.get_objectData()).get_properties())['Scope'];
    },
    set_scope: function SP_View$set_scope(value) {
        ((this.get_objectData()).get_properties())['Scope'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Scope', value));
        }
        return value;
    },
    get_serverRelativeUrl: function SP_View$get_serverRelativeUrl() {
        this.checkUninitializedProperty('ServerRelativeUrl');
        return ((this.get_objectData()).get_properties())['ServerRelativeUrl'];
    },
    get_styleId: function SP_View$get_styleId() {
        this.checkUninitializedProperty('StyleId');
        return ((this.get_objectData()).get_properties())['StyleId'];
    },
    get_threaded: function SP_View$get_threaded() {
        this.checkUninitializedProperty('Threaded');
        return ((this.get_objectData()).get_properties())['Threaded'];
    },
    get_title: function SP_View$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData()).get_properties())['Title'];
    },
    set_title: function SP_View$set_title(value) {
        ((this.get_objectData()).get_properties())['Title'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    get_toolbar: function SP_View$get_toolbar() {
        this.checkUninitializedProperty('Toolbar');
        return ((this.get_objectData()).get_properties())['Toolbar'];
    },
    set_toolbar: function SP_View$set_toolbar(value) {
        ((this.get_objectData()).get_properties())['Toolbar'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Toolbar', value));
        }
        return value;
    },
    get_toolbarTemplateName: function SP_View$get_toolbarTemplateName() {
        this.checkUninitializedProperty('ToolbarTemplateName');
        return ((this.get_objectData()).get_properties())['ToolbarTemplateName'];
    },
    get_viewType: function SP_View$get_viewType() {
        this.checkUninitializedProperty('ViewType');
        return ((this.get_objectData()).get_properties())['ViewType'];
    },
    get_viewData: function SP_View$get_viewData() {
        this.checkUninitializedProperty('ViewData');
        return ((this.get_objectData()).get_properties())['ViewData'];
    },
    set_viewData: function SP_View$set_viewData(value) {
        ((this.get_objectData()).get_properties())['ViewData'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ViewData', value));
        }
        return value;
    },
    get_viewFields: function SP_View$get_viewFields() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['ViewFields'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ViewFieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ViewFields'));
            ((this.get_objectData()).get_clientObjectProperties())['ViewFields'] = $v_0;
        }
        return $v_0;
    },
    initPropertiesFromJson: function SP_View$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Aggregations;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Aggregations'] = $v_0;
            delete parentNode.Aggregations;
        }
        $v_0 = parentNode.AggregationsStatus;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AggregationsStatus'] = $v_0;
            delete parentNode.AggregationsStatus;
        }
        $v_0 = parentNode.BaseViewId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['BaseViewId'] = $v_0;
            delete parentNode.BaseViewId;
        }
        $v_0 = parentNode.ContentTypeId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ContentTypeId'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.ContentTypeId;
        }
        $v_0 = parentNode.DefaultView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DefaultView'] = $v_0;
            delete parentNode.DefaultView;
        }
        $v_0 = parentNode.DefaultViewForContentType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DefaultViewForContentType'] = $v_0;
            delete parentNode.DefaultViewForContentType;
        }
        $v_0 = parentNode.EditorModified;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EditorModified'] = $v_0;
            delete parentNode.EditorModified;
        }
        $v_0 = parentNode.Formats;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Formats'] = $v_0;
            delete parentNode.Formats;
        }
        $v_0 = parentNode.Hidden;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Hidden'] = $v_0;
            delete parentNode.Hidden;
        }
        $v_0 = parentNode.HtmlSchemaXml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['HtmlSchemaXml'] = $v_0;
            delete parentNode.HtmlSchemaXml;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.ImageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ImageUrl'] = $v_0;
            delete parentNode.ImageUrl;
        }
        $v_0 = parentNode.IncludeRootFolder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IncludeRootFolder'] = $v_0;
            delete parentNode.IncludeRootFolder;
        }
        $v_0 = parentNode.ViewJoins;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ViewJoins'] = $v_0;
            delete parentNode.ViewJoins;
        }
        $v_0 = parentNode.JSLink;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['JSLink'] = $v_0;
            delete parentNode.JSLink;
        }
        $v_0 = parentNode.ListViewXml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ListViewXml'] = $v_0;
            delete parentNode.ListViewXml;
        }
        $v_0 = parentNode.Method;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Method'] = $v_0;
            delete parentNode.Method;
        }
        $v_0 = parentNode.MobileDefaultView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['MobileDefaultView'] = $v_0;
            delete parentNode.MobileDefaultView;
        }
        $v_0 = parentNode.MobileView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['MobileView'] = $v_0;
            delete parentNode.MobileView;
        }
        $v_0 = parentNode.ModerationType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ModerationType'] = $v_0;
            delete parentNode.ModerationType;
        }
        $v_0 = parentNode.OrderedView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['OrderedView'] = $v_0;
            delete parentNode.OrderedView;
        }
        $v_0 = parentNode.Paged;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Paged'] = $v_0;
            delete parentNode.Paged;
        }
        $v_0 = parentNode.PersonalView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['PersonalView'] = $v_0;
            delete parentNode.PersonalView;
        }
        $v_0 = parentNode.ViewProjectedFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ViewProjectedFields'] = $v_0;
            delete parentNode.ViewProjectedFields;
        }
        $v_0 = parentNode.ViewQuery;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ViewQuery'] = $v_0;
            delete parentNode.ViewQuery;
        }
        $v_0 = parentNode.ReadOnlyView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ReadOnlyView'] = $v_0;
            delete parentNode.ReadOnlyView;
        }
        $v_0 = parentNode.RequiresClientIntegration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['RequiresClientIntegration'] = $v_0;
            delete parentNode.RequiresClientIntegration;
        }
        $v_0 = parentNode.RowLimit;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['RowLimit'] = $v_0;
            delete parentNode.RowLimit;
        }
        $v_0 = parentNode.Scope;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Scope'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.Scope;
        }
        $v_0 = parentNode.ServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ServerRelativeUrl'] = $v_0;
            delete parentNode.ServerRelativeUrl;
        }
        $v_0 = parentNode.StyleId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['StyleId'] = $v_0;
            delete parentNode.StyleId;
        }
        $v_0 = parentNode.Threaded;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Threaded'] = $v_0;
            delete parentNode.Threaded;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Title'] = $v_0;
            delete parentNode.Title;
        }
        $v_0 = parentNode.Toolbar;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Toolbar'] = $v_0;
            delete parentNode.Toolbar;
        }
        $v_0 = parentNode.ToolbarTemplateName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ToolbarTemplateName'] = $v_0;
            delete parentNode.ToolbarTemplateName;
        }
        $v_0 = parentNode.ViewType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ViewType'] = $v_0;
            delete parentNode.ViewType;
        }
        $v_0 = parentNode.ViewData;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ViewData'] = $v_0;
            delete parentNode.ViewData;
        }
        $v_0 = parentNode.ViewFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ViewFields', this.get_viewFields(), $v_0);
            (this.get_viewFields()).fromJson($v_0);
            delete parentNode.ViewFields;
        }
    },
    deleteObject: function SP_View$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    },
    renderAsHtml: function SP_View$renderAsHtml() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'RenderAsHtml', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    update: function SP_View$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);

        $v_0.addQuery($v_1);
    }
};
SP.ViewPropertyNames = function SP_ViewPropertyNames() {
};
SP.ViewObjectPropertyNames = function SP_ViewObjectPropertyNames() {
};
SP.ViewCollection = function SP_ViewCollection(context, objectPath) {
    SP.ViewCollection.initializeBase(this, [context, objectPath]);
};
SP.ViewCollection.prototype = {
    itemAt: function SP_ViewCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_ViewCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_ViewCollection$get_childItemType() {
        return SP.View;
    },
    getByTitle: function SP_ViewCollection$getByTitle(strTitle) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByTitle'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetByTitle'] = $v_2;
        }
        $v_1 = $v_2[strTitle];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.View($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByTitle', [strTitle]));
        $v_2[strTitle] = $v_1;
        return $v_1;
    },
    getById: function SP_ViewCollection$getById(guidId) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetById'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetById'] = $v_2;
        }
        $v_1 = $v_2[guidId.toString()];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.View($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [guidId]));
        $v_2[guidId.toString()] = $v_1;
        return $v_1;
    },
    add: function SP_ViewCollection$add(parameters) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.View($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [parameters]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        $v_1.$7_1(parameters);
        return $v_1;
    }
};
SP.ViewCreationInformation = function SP_ViewCreationInformation() {
    SP.ViewCreationInformation.initializeBase(this);
};
SP.ViewCreationInformation.prototype = {
    $1L_1: false,
    $2k_1: false,
    $a_1: null,
    $b_1: 30,
    $2y_1: false,
    $0_1: null,
    $e_1: null,
    $3D_1: 0,
    get_paged: function SP_ViewCreationInformation$get_paged() {
        return this.$1L_1;
    },
    set_paged: function SP_ViewCreationInformation$set_paged(value) {
        this.$1L_1 = value;
        return value;
    },
    get_personalView: function SP_ViewCreationInformation$get_personalView() {
        return this.$2k_1;
    },
    set_personalView: function SP_ViewCreationInformation$set_personalView(value) {
        this.$2k_1 = value;
        return value;
    },
    get_query: function SP_ViewCreationInformation$get_query() {
        return this.$a_1;
    },
    set_query: function SP_ViewCreationInformation$set_query(value) {
        this.$a_1 = value;
        return value;
    },
    get_rowLimit: function SP_ViewCreationInformation$get_rowLimit() {
        return this.$b_1;
    },
    set_rowLimit: function SP_ViewCreationInformation$set_rowLimit(value) {
        this.$b_1 = value;
        return value;
    },
    get_setAsDefaultView: function SP_ViewCreationInformation$get_setAsDefaultView() {
        return this.$2y_1;
    },
    set_setAsDefaultView: function SP_ViewCreationInformation$set_setAsDefaultView(value) {
        this.$2y_1 = value;
        return value;
    },
    get_title: function SP_ViewCreationInformation$get_title() {
        return this.$0_1;
    },
    set_title: function SP_ViewCreationInformation$set_title(value) {
        this.$0_1 = value;
        return value;
    },
    get_viewFields: function SP_ViewCreationInformation$get_viewFields() {
        return this.$e_1;
    },
    set_viewFields: function SP_ViewCreationInformation$set_viewFields(value) {
        this.$e_1 = value;
        return value;
    },
    get_viewTypeKind: function SP_ViewCreationInformation$get_viewTypeKind() {
        return this.$3D_1;
    },
    set_viewTypeKind: function SP_ViewCreationInformation$set_viewTypeKind(value) {
        this.$3D_1 = value;
        return value;
    },
    get_typeId: function SP_ViewCreationInformation$get_typeId() {
        return '{a3547807-7266-42f3-b055-afa6e840e458}';
    },
    writeToXml: function SP_ViewCreationInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['Paged', 'PersonalView', 'Query', 'RowLimit', 'SetAsDefaultView', 'Title', 'ViewFields', 'ViewTypeKind'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_ViewCreationInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Paged;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1L_1 = $v_0;
            delete parentNode.Paged;
        }
        $v_0 = parentNode.PersonalView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2k_1 = $v_0;
            delete parentNode.PersonalView;
        }
        $v_0 = parentNode.Query;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$a_1 = $v_0;
            delete parentNode.Query;
        }
        $v_0 = parentNode.RowLimit;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$b_1 = $v_0;
            delete parentNode.RowLimit;
        }
        $v_0 = parentNode.SetAsDefaultView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2y_1 = $v_0;
            delete parentNode.SetAsDefaultView;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = $v_0;
            delete parentNode.Title;
        }
        $v_0 = parentNode.ViewFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$e_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.ViewFields;
        }
        $v_0 = parentNode.ViewTypeKind;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3D_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.ViewTypeKind;
        }
    }
};
SP.ViewFieldCollection = function SP_ViewFieldCollection(context, objectPath) {
    SP.ViewFieldCollection.initializeBase(this, [context, objectPath]);
};
SP.ViewFieldCollection.prototype = {
    itemAt: function SP_ViewFieldCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_ViewFieldCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_ViewFieldCollection$get_childItemType() {
        return String;
    },
    $53_2: function SP_ViewFieldCollection$$53_2($p0) {
        Array.add(this.get_data(), $p0);
    },
    $5B_2: function SP_ViewFieldCollection$$5B_2($p0) {
        Array.remove(this.get_data(), $p0);
    },
    $4Z_2: function SP_ViewFieldCollection$$4Z_2() {
        var $v_0 = this.get_data();

        while ($v_0.length > 0) {
            Array.removeAt($v_0, $v_0.length - 1);
        }
    },
    get_schemaXml: function SP_ViewFieldCollection$get_schemaXml() {
        this.checkUninitializedProperty('SchemaXml');
        return ((this.get_objectData()).get_properties())['SchemaXml'];
    },
    initPropertiesFromJson: function SP_ViewFieldCollection$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.SchemaXml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SchemaXml'] = $v_0;
            delete parentNode.SchemaXml;
        }
    },
    moveFieldTo: function SP_ViewFieldCollection$moveFieldTo(field, index) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'MoveFieldTo', [field, index]);

        $v_0.addQuery($v_1);
    },
    add: function SP_ViewFieldCollection$add(strField) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Add', [strField]);

        $v_0.addQuery($v_1);
        this.$53_2(strField);
    },
    remove: function SP_ViewFieldCollection$remove(strField) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Remove', [strField]);

        $v_0.addQuery($v_1);
        this.$5B_2(strField);
    },
    removeAll: function SP_ViewFieldCollection$removeAll() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'RemoveAll', null);

        $v_0.addQuery($v_1);
        this.$4Z_2();
    }
};
SP.ViewFieldCollectionPropertyNames = function SP_ViewFieldCollectionPropertyNames() {
};
SP.Web = function SP_Web(context, objectPath) {
    SP.Web.initializeBase(this, [context, objectPath]);
};
SP.Web.prototype = {
    $7_2: function SP_Web$$7_2($p0) {
        if ($p0) {
            ((this.get_objectData()).get_properties())['Description'] = $p0.$3_1;
            ((this.get_objectData()).get_properties())['Title'] = $p0.$0_1;
        }
    },
    get_allowCreateDeclarativeWorkflowForCurrentUser: function SP_Web$get_allowCreateDeclarativeWorkflowForCurrentUser() {
        this.checkUninitializedProperty('AllowCreateDeclarativeWorkflowForCurrentUser');
        return ((this.get_objectData()).get_properties())['AllowCreateDeclarativeWorkflowForCurrentUser'];
    },
    get_allowDesignerForCurrentUser: function SP_Web$get_allowDesignerForCurrentUser() {
        this.checkUninitializedProperty('AllowDesignerForCurrentUser');
        return ((this.get_objectData()).get_properties())['AllowDesignerForCurrentUser'];
    },
    get_allowMasterPageEditingForCurrentUser: function SP_Web$get_allowMasterPageEditingForCurrentUser() {
        this.checkUninitializedProperty('AllowMasterPageEditingForCurrentUser');
        return ((this.get_objectData()).get_properties())['AllowMasterPageEditingForCurrentUser'];
    },
    get_allowRevertFromTemplateForCurrentUser: function SP_Web$get_allowRevertFromTemplateForCurrentUser() {
        this.checkUninitializedProperty('AllowRevertFromTemplateForCurrentUser');
        return ((this.get_objectData()).get_properties())['AllowRevertFromTemplateForCurrentUser'];
    },
    get_allowRssFeeds: function SP_Web$get_allowRssFeeds() {
        this.checkUninitializedProperty('AllowRssFeeds');
        return ((this.get_objectData()).get_properties())['AllowRssFeeds'];
    },
    get_allowSaveDeclarativeWorkflowAsTemplateForCurrentUser: function SP_Web$get_allowSaveDeclarativeWorkflowAsTemplateForCurrentUser() {
        this.checkUninitializedProperty('AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser');
        return ((this.get_objectData()).get_properties())['AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser'];
    },
    get_allowSavePublishDeclarativeWorkflowForCurrentUser: function SP_Web$get_allowSavePublishDeclarativeWorkflowForCurrentUser() {
        this.checkUninitializedProperty('AllowSavePublishDeclarativeWorkflowForCurrentUser');
        return ((this.get_objectData()).get_properties())['AllowSavePublishDeclarativeWorkflowForCurrentUser'];
    },
    get_allProperties: function SP_Web$get_allProperties() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['AllProperties'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.PropertyValues(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'AllProperties'));
            ((this.get_objectData()).get_clientObjectProperties())['AllProperties'] = $v_0;
        }
        return $v_0;
    },
    get_alternateCssUrl: function SP_Web$get_alternateCssUrl() {
        this.checkUninitializedProperty('AlternateCssUrl');
        return ((this.get_objectData()).get_properties())['AlternateCssUrl'];
    },
    set_alternateCssUrl: function SP_Web$set_alternateCssUrl(value) {
        ((this.get_objectData()).get_properties())['AlternateCssUrl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AlternateCssUrl', value));
        }
        return value;
    },
    get_appInstanceId: function SP_Web$get_appInstanceId() {
        this.checkUninitializedProperty('AppInstanceId');
        return ((this.get_objectData()).get_properties())['AppInstanceId'];
    },
    get_associatedMemberGroup: function SP_Web$get_associatedMemberGroup() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['AssociatedMemberGroup'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Group(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'AssociatedMemberGroup'));
            ((this.get_objectData()).get_clientObjectProperties())['AssociatedMemberGroup'] = $v_0;
        }
        return $v_0;
    },
    set_associatedMemberGroup: function SP_Web$set_associatedMemberGroup(value) {
        ((this.get_objectData()).get_clientObjectProperties())['AssociatedMemberGroup'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AssociatedMemberGroup', value));
        }
        return value;
    },
    get_associatedOwnerGroup: function SP_Web$get_associatedOwnerGroup() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['AssociatedOwnerGroup'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Group(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'AssociatedOwnerGroup'));
            ((this.get_objectData()).get_clientObjectProperties())['AssociatedOwnerGroup'] = $v_0;
        }
        return $v_0;
    },
    set_associatedOwnerGroup: function SP_Web$set_associatedOwnerGroup(value) {
        ((this.get_objectData()).get_clientObjectProperties())['AssociatedOwnerGroup'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AssociatedOwnerGroup', value));
        }
        return value;
    },
    get_associatedVisitorGroup: function SP_Web$get_associatedVisitorGroup() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['AssociatedVisitorGroup'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Group(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'AssociatedVisitorGroup'));
            ((this.get_objectData()).get_clientObjectProperties())['AssociatedVisitorGroup'] = $v_0;
        }
        return $v_0;
    },
    set_associatedVisitorGroup: function SP_Web$set_associatedVisitorGroup(value) {
        ((this.get_objectData()).get_clientObjectProperties())['AssociatedVisitorGroup'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AssociatedVisitorGroup', value));
        }
        return value;
    },
    get_availableContentTypes: function SP_Web$get_availableContentTypes() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['AvailableContentTypes'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ContentTypeCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'AvailableContentTypes'));
            ((this.get_objectData()).get_clientObjectProperties())['AvailableContentTypes'] = $v_0;
        }
        return $v_0;
    },
    get_availableFields: function SP_Web$get_availableFields() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['AvailableFields'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'AvailableFields'));
            ((this.get_objectData()).get_clientObjectProperties())['AvailableFields'] = $v_0;
        }
        return $v_0;
    },
    get_configuration: function SP_Web$get_configuration() {
        this.checkUninitializedProperty('Configuration');
        return ((this.get_objectData()).get_properties())['Configuration'];
    },
    get_contentTypes: function SP_Web$get_contentTypes() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['ContentTypes'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ContentTypeCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ContentTypes'));
            ((this.get_objectData()).get_clientObjectProperties())['ContentTypes'] = $v_0;
        }
        return $v_0;
    },
    get_created: function SP_Web$get_created() {
        this.checkUninitializedProperty('Created');
        return ((this.get_objectData()).get_properties())['Created'];
    },
    get_currentUser: function SP_Web$get_currentUser() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['CurrentUser'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CurrentUser'));
            ((this.get_objectData()).get_clientObjectProperties())['CurrentUser'] = $v_0;
        }
        return $v_0;
    },
    get_customMasterUrl: function SP_Web$get_customMasterUrl() {
        this.checkUninitializedProperty('CustomMasterUrl');
        return ((this.get_objectData()).get_properties())['CustomMasterUrl'];
    },
    set_customMasterUrl: function SP_Web$set_customMasterUrl(value) {
        ((this.get_objectData()).get_properties())['CustomMasterUrl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'CustomMasterUrl', value));
        }
        return value;
    },
    get_description: function SP_Web$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData()).get_properties())['Description'];
    },
    set_description: function SP_Web$set_description(value) {
        ((this.get_objectData()).get_properties())['Description'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    get_designerDownloadUrlForCurrentUser: function SP_Web$get_designerDownloadUrlForCurrentUser() {
        this.checkUninitializedProperty('DesignerDownloadUrlForCurrentUser');
        return ((this.get_objectData()).get_properties())['DesignerDownloadUrlForCurrentUser'];
    },
    get_documentLibraryCalloutOfficeWebAppPreviewersDisabled: function SP_Web$get_documentLibraryCalloutOfficeWebAppPreviewersDisabled() {
        this.checkUninitializedProperty('DocumentLibraryCalloutOfficeWebAppPreviewersDisabled');
        return ((this.get_objectData()).get_properties())['DocumentLibraryCalloutOfficeWebAppPreviewersDisabled'];
    },
    get_effectiveBasePermissions: function SP_Web$get_effectiveBasePermissions() {
        this.checkUninitializedProperty('EffectiveBasePermissions');
        return ((this.get_objectData()).get_properties())['EffectiveBasePermissions'];
    },
    get_enableMinimalDownload: function SP_Web$get_enableMinimalDownload() {
        this.checkUninitializedProperty('EnableMinimalDownload');
        return ((this.get_objectData()).get_properties())['EnableMinimalDownload'];
    },
    set_enableMinimalDownload: function SP_Web$set_enableMinimalDownload(value) {
        ((this.get_objectData()).get_properties())['EnableMinimalDownload'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'EnableMinimalDownload', value));
        }
        return value;
    },
    get_eventReceivers: function SP_Web$get_eventReceivers() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['EventReceivers'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.EventReceiverDefinitionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'EventReceivers'));
            ((this.get_objectData()).get_clientObjectProperties())['EventReceivers'] = $v_0;
        }
        return $v_0;
    },
    get_features: function SP_Web$get_features() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Features'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FeatureCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Features'));
            ((this.get_objectData()).get_clientObjectProperties())['Features'] = $v_0;
        }
        return $v_0;
    },
    get_fields: function SP_Web$get_fields() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Fields'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Fields'));
            ((this.get_objectData()).get_clientObjectProperties())['Fields'] = $v_0;
        }
        return $v_0;
    },
    get_folders: function SP_Web$get_folders() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Folders'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FolderCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Folders'));
            ((this.get_objectData()).get_clientObjectProperties())['Folders'] = $v_0;
        }
        return $v_0;
    },
    get_id: function SP_Web$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_language: function SP_Web$get_language() {
        this.checkUninitializedProperty('Language');
        return ((this.get_objectData()).get_properties())['Language'];
    },
    get_lastItemModifiedDate: function SP_Web$get_lastItemModifiedDate() {
        this.checkUninitializedProperty('LastItemModifiedDate');
        return ((this.get_objectData()).get_properties())['LastItemModifiedDate'];
    },
    get_lists: function SP_Web$get_lists() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Lists'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ListCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Lists'));
            ((this.get_objectData()).get_clientObjectProperties())['Lists'] = $v_0;
        }
        return $v_0;
    },
    get_listTemplates: function SP_Web$get_listTemplates() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['ListTemplates'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ListTemplateCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ListTemplates'));
            ((this.get_objectData()).get_clientObjectProperties())['ListTemplates'] = $v_0;
        }
        return $v_0;
    },
    get_masterUrl: function SP_Web$get_masterUrl() {
        this.checkUninitializedProperty('MasterUrl');
        return ((this.get_objectData()).get_properties())['MasterUrl'];
    },
    set_masterUrl: function SP_Web$set_masterUrl(value) {
        ((this.get_objectData()).get_properties())['MasterUrl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'MasterUrl', value));
        }
        return value;
    },
    get_navigation: function SP_Web$get_navigation() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Navigation'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Navigation(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Navigation'));
            ((this.get_objectData()).get_clientObjectProperties())['Navigation'] = $v_0;
        }
        return $v_0;
    },
    get_parentWeb: function SP_Web$get_parentWeb() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['ParentWeb'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WebInformation(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ParentWeb'));
            ((this.get_objectData()).get_clientObjectProperties())['ParentWeb'] = $v_0;
        }
        return $v_0;
    },
    get_pushNotificationSubscribers: function SP_Web$get_pushNotificationSubscribers() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['PushNotificationSubscribers'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.PushNotificationSubscriberCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'PushNotificationSubscribers'));
            ((this.get_objectData()).get_clientObjectProperties())['PushNotificationSubscribers'] = $v_0;
        }
        return $v_0;
    },
    get_quickLaunchEnabled: function SP_Web$get_quickLaunchEnabled() {
        this.checkUninitializedProperty('QuickLaunchEnabled');
        return ((this.get_objectData()).get_properties())['QuickLaunchEnabled'];
    },
    set_quickLaunchEnabled: function SP_Web$set_quickLaunchEnabled(value) {
        ((this.get_objectData()).get_properties())['QuickLaunchEnabled'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'QuickLaunchEnabled', value));
        }
        return value;
    },
    get_recycleBin: function SP_Web$get_recycleBin() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['RecycleBin'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.RecycleBinItemCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RecycleBin'));
            ((this.get_objectData()).get_clientObjectProperties())['RecycleBin'] = $v_0;
        }
        return $v_0;
    },
    get_recycleBinEnabled: function SP_Web$get_recycleBinEnabled() {
        this.checkUninitializedProperty('RecycleBinEnabled');
        return ((this.get_objectData()).get_properties())['RecycleBinEnabled'];
    },
    get_regionalSettings: function SP_Web$get_regionalSettings() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['RegionalSettings'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.RegionalSettings(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RegionalSettings'));
            ((this.get_objectData()).get_clientObjectProperties())['RegionalSettings'] = $v_0;
        }
        return $v_0;
    },
    get_roleDefinitions: function SP_Web$get_roleDefinitions() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['RoleDefinitions'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.RoleDefinitionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RoleDefinitions'));
            ((this.get_objectData()).get_clientObjectProperties())['RoleDefinitions'] = $v_0;
        }
        return $v_0;
    },
    get_rootFolder: function SP_Web$get_rootFolder() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['RootFolder'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Folder(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RootFolder'));
            ((this.get_objectData()).get_clientObjectProperties())['RootFolder'] = $v_0;
        }
        return $v_0;
    },
    get_saveSiteAsTemplateEnabled: function SP_Web$get_saveSiteAsTemplateEnabled() {
        this.checkUninitializedProperty('SaveSiteAsTemplateEnabled');
        return ((this.get_objectData()).get_properties())['SaveSiteAsTemplateEnabled'];
    },
    set_saveSiteAsTemplateEnabled: function SP_Web$set_saveSiteAsTemplateEnabled(value) {
        ((this.get_objectData()).get_properties())['SaveSiteAsTemplateEnabled'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'SaveSiteAsTemplateEnabled', value));
        }
        return value;
    },
    get_serverRelativeUrl: function SP_Web$get_serverRelativeUrl() {
        this.checkUninitializedProperty('ServerRelativeUrl');
        return ((this.get_objectData()).get_properties())['ServerRelativeUrl'];
    },
    set_serverRelativeUrl: function SP_Web$set_serverRelativeUrl(value) {
        ((this.get_objectData()).get_properties())['ServerRelativeUrl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'ServerRelativeUrl', value));
        }
        return value;
    },
    get_showUrlStructureForCurrentUser: function SP_Web$get_showUrlStructureForCurrentUser() {
        this.checkUninitializedProperty('ShowUrlStructureForCurrentUser');
        return ((this.get_objectData()).get_properties())['ShowUrlStructureForCurrentUser'];
    },
    get_siteGroups: function SP_Web$get_siteGroups() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['SiteGroups'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.GroupCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'SiteGroups'));
            ((this.get_objectData()).get_clientObjectProperties())['SiteGroups'] = $v_0;
        }
        return $v_0;
    },
    get_siteLogoUrl: function SP_Web$get_siteLogoUrl() {
        this.checkUninitializedProperty('SiteLogoUrl');
        return ((this.get_objectData()).get_properties())['SiteLogoUrl'];
    },
    set_siteLogoUrl: function SP_Web$set_siteLogoUrl(value) {
        ((this.get_objectData()).get_properties())['SiteLogoUrl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'SiteLogoUrl', value));
        }
        return value;
    },
    get_siteUserInfoList: function SP_Web$get_siteUserInfoList() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['SiteUserInfoList'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.List(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'SiteUserInfoList'));
            ((this.get_objectData()).get_clientObjectProperties())['SiteUserInfoList'] = $v_0;
        }
        return $v_0;
    },
    get_siteUsers: function SP_Web$get_siteUsers() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['SiteUsers'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.UserCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'SiteUsers'));
            ((this.get_objectData()).get_clientObjectProperties())['SiteUsers'] = $v_0;
        }
        return $v_0;
    },
    get_supportedUILanguageIds: function SP_Web$get_supportedUILanguageIds() {
        this.checkUninitializedProperty('SupportedUILanguageIds');
        return ((this.get_objectData()).get_properties())['SupportedUILanguageIds'];
    },
    get_syndicationEnabled: function SP_Web$get_syndicationEnabled() {
        this.checkUninitializedProperty('SyndicationEnabled');
        return ((this.get_objectData()).get_properties())['SyndicationEnabled'];
    },
    set_syndicationEnabled: function SP_Web$set_syndicationEnabled(value) {
        ((this.get_objectData()).get_properties())['SyndicationEnabled'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'SyndicationEnabled', value));
        }
        return value;
    },
    get_themeInfo: function SP_Web$get_themeInfo() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['ThemeInfo'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ThemeInfo(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ThemeInfo'));
            ((this.get_objectData()).get_clientObjectProperties())['ThemeInfo'] = $v_0;
        }
        return $v_0;
    },
    get_title: function SP_Web$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData()).get_properties())['Title'];
    },
    set_title: function SP_Web$set_title(value) {
        ((this.get_objectData()).get_properties())['Title'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    get_treeViewEnabled: function SP_Web$get_treeViewEnabled() {
        this.checkUninitializedProperty('TreeViewEnabled');
        return ((this.get_objectData()).get_properties())['TreeViewEnabled'];
    },
    set_treeViewEnabled: function SP_Web$set_treeViewEnabled(value) {
        ((this.get_objectData()).get_properties())['TreeViewEnabled'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'TreeViewEnabled', value));
        }
        return value;
    },
    get_uiVersion: function SP_Web$get_uiVersion() {
        this.checkUninitializedProperty('UIVersion');
        return ((this.get_objectData()).get_properties())['UIVersion'];
    },
    set_uiVersion: function SP_Web$set_uiVersion(value) {
        ((this.get_objectData()).get_properties())['UIVersion'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'UIVersion', value));
        }
        return value;
    },
    get_uiVersionConfigurationEnabled: function SP_Web$get_uiVersionConfigurationEnabled() {
        this.checkUninitializedProperty('UIVersionConfigurationEnabled');
        return ((this.get_objectData()).get_properties())['UIVersionConfigurationEnabled'];
    },
    set_uiVersionConfigurationEnabled: function SP_Web$set_uiVersionConfigurationEnabled(value) {
        ((this.get_objectData()).get_properties())['UIVersionConfigurationEnabled'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'UIVersionConfigurationEnabled', value));
        }
        return value;
    },
    get_url: function SP_Web$get_url() {
        this.checkUninitializedProperty('Url');
        return ((this.get_objectData()).get_properties())['Url'];
    },
    get_userCustomActions: function SP_Web$get_userCustomActions() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['UserCustomActions'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.UserCustomActionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'UserCustomActions'));
            ((this.get_objectData()).get_clientObjectProperties())['UserCustomActions'] = $v_0;
        }
        return $v_0;
    },
    get_webs: function SP_Web$get_webs() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Webs'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WebCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Webs'));
            ((this.get_objectData()).get_clientObjectProperties())['Webs'] = $v_0;
        }
        return $v_0;
    },
    get_webTemplate: function SP_Web$get_webTemplate() {
        this.checkUninitializedProperty('WebTemplate');
        return ((this.get_objectData()).get_properties())['WebTemplate'];
    },
    get_workflowAssociations: function SP_Web$get_workflowAssociations() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['WorkflowAssociations'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Workflow.WorkflowAssociationCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'WorkflowAssociations'));
            ((this.get_objectData()).get_clientObjectProperties())['WorkflowAssociations'] = $v_0;
        }
        return $v_0;
    },
    get_workflowTemplates: function SP_Web$get_workflowTemplates() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['WorkflowTemplates'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Workflow.WorkflowTemplateCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'WorkflowTemplates'));
            ((this.get_objectData()).get_clientObjectProperties())['WorkflowTemplates'] = $v_0;
        }
        return $v_0;
    },
    initPropertiesFromJson: function SP_Web$initPropertiesFromJson(parentNode) {
        SP.SecurableObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AllowCreateDeclarativeWorkflowForCurrentUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowCreateDeclarativeWorkflowForCurrentUser'] = $v_0;
            delete parentNode.AllowCreateDeclarativeWorkflowForCurrentUser;
        }
        $v_0 = parentNode.AllowDesignerForCurrentUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowDesignerForCurrentUser'] = $v_0;
            delete parentNode.AllowDesignerForCurrentUser;
        }
        $v_0 = parentNode.AllowMasterPageEditingForCurrentUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowMasterPageEditingForCurrentUser'] = $v_0;
            delete parentNode.AllowMasterPageEditingForCurrentUser;
        }
        $v_0 = parentNode.AllowRevertFromTemplateForCurrentUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowRevertFromTemplateForCurrentUser'] = $v_0;
            delete parentNode.AllowRevertFromTemplateForCurrentUser;
        }
        $v_0 = parentNode.AllowRssFeeds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowRssFeeds'] = $v_0;
            delete parentNode.AllowRssFeeds;
        }
        $v_0 = parentNode.AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser'] = $v_0;
            delete parentNode.AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser;
        }
        $v_0 = parentNode.AllowSavePublishDeclarativeWorkflowForCurrentUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowSavePublishDeclarativeWorkflowForCurrentUser'] = $v_0;
            delete parentNode.AllowSavePublishDeclarativeWorkflowForCurrentUser;
        }
        $v_0 = parentNode.AllProperties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('AllProperties', this.get_allProperties(), $v_0);
            (this.get_allProperties()).fromJson($v_0);
            delete parentNode.AllProperties;
        }
        $v_0 = parentNode.AlternateCssUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AlternateCssUrl'] = $v_0;
            delete parentNode.AlternateCssUrl;
        }
        $v_0 = parentNode.AppInstanceId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AppInstanceId'] = $v_0;
            delete parentNode.AppInstanceId;
        }
        $v_0 = parentNode.AssociatedMemberGroup;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('AssociatedMemberGroup', this.get_associatedMemberGroup(), $v_0);
            (this.get_associatedMemberGroup()).fromJson($v_0);
            delete parentNode.AssociatedMemberGroup;
        }
        $v_0 = parentNode.AssociatedOwnerGroup;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('AssociatedOwnerGroup', this.get_associatedOwnerGroup(), $v_0);
            (this.get_associatedOwnerGroup()).fromJson($v_0);
            delete parentNode.AssociatedOwnerGroup;
        }
        $v_0 = parentNode.AssociatedVisitorGroup;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('AssociatedVisitorGroup', this.get_associatedVisitorGroup(), $v_0);
            (this.get_associatedVisitorGroup()).fromJson($v_0);
            delete parentNode.AssociatedVisitorGroup;
        }
        $v_0 = parentNode.AvailableContentTypes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('AvailableContentTypes', this.get_availableContentTypes(), $v_0);
            (this.get_availableContentTypes()).fromJson($v_0);
            delete parentNode.AvailableContentTypes;
        }
        $v_0 = parentNode.AvailableFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('AvailableFields', this.get_availableFields(), $v_0);
            (this.get_availableFields()).fromJson($v_0);
            delete parentNode.AvailableFields;
        }
        $v_0 = parentNode.Configuration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Configuration'] = $v_0;
            delete parentNode.Configuration;
        }
        $v_0 = parentNode.ContentTypes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ContentTypes', this.get_contentTypes(), $v_0);
            (this.get_contentTypes()).fromJson($v_0);
            delete parentNode.ContentTypes;
        }
        $v_0 = parentNode.Created;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Created'] = $v_0;
            delete parentNode.Created;
        }
        $v_0 = parentNode.CurrentUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CurrentUser', this.get_currentUser(), $v_0);
            (this.get_currentUser()).fromJson($v_0);
            delete parentNode.CurrentUser;
        }
        $v_0 = parentNode.CustomMasterUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['CustomMasterUrl'] = $v_0;
            delete parentNode.CustomMasterUrl;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Description'] = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.DesignerDownloadUrlForCurrentUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DesignerDownloadUrlForCurrentUser'] = $v_0;
            delete parentNode.DesignerDownloadUrlForCurrentUser;
        }
        $v_0 = parentNode.DocumentLibraryCalloutOfficeWebAppPreviewersDisabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DocumentLibraryCalloutOfficeWebAppPreviewersDisabled'] = $v_0;
            delete parentNode.DocumentLibraryCalloutOfficeWebAppPreviewersDisabled;
        }
        $v_0 = parentNode.EffectiveBasePermissions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EffectiveBasePermissions'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.EffectiveBasePermissions;
        }
        $v_0 = parentNode.EnableMinimalDownload;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EnableMinimalDownload'] = $v_0;
            delete parentNode.EnableMinimalDownload;
        }
        $v_0 = parentNode.EventReceivers;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('EventReceivers', this.get_eventReceivers(), $v_0);
            (this.get_eventReceivers()).fromJson($v_0);
            delete parentNode.EventReceivers;
        }
        $v_0 = parentNode.Features;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Features', this.get_features(), $v_0);
            (this.get_features()).fromJson($v_0);
            delete parentNode.Features;
        }
        $v_0 = parentNode.Fields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Fields', this.get_fields(), $v_0);
            (this.get_fields()).fromJson($v_0);
            delete parentNode.Fields;
        }
        $v_0 = parentNode.Folders;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Folders', this.get_folders(), $v_0);
            (this.get_folders()).fromJson($v_0);
            delete parentNode.Folders;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.Language;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Language'] = $v_0;
            delete parentNode.Language;
        }
        $v_0 = parentNode.LastItemModifiedDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['LastItemModifiedDate'] = $v_0;
            delete parentNode.LastItemModifiedDate;
        }
        $v_0 = parentNode.Lists;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Lists', this.get_lists(), $v_0);
            (this.get_lists()).fromJson($v_0);
            delete parentNode.Lists;
        }
        $v_0 = parentNode.ListTemplates;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ListTemplates', this.get_listTemplates(), $v_0);
            (this.get_listTemplates()).fromJson($v_0);
            delete parentNode.ListTemplates;
        }
        $v_0 = parentNode.MasterUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['MasterUrl'] = $v_0;
            delete parentNode.MasterUrl;
        }
        $v_0 = parentNode.Navigation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Navigation', this.get_navigation(), $v_0);
            (this.get_navigation()).fromJson($v_0);
            delete parentNode.Navigation;
        }
        $v_0 = parentNode.ParentWeb;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ParentWeb', this.get_parentWeb(), $v_0);
            (this.get_parentWeb()).fromJson($v_0);
            delete parentNode.ParentWeb;
        }
        $v_0 = parentNode.PushNotificationSubscribers;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('PushNotificationSubscribers', this.get_pushNotificationSubscribers(), $v_0);
            (this.get_pushNotificationSubscribers()).fromJson($v_0);
            delete parentNode.PushNotificationSubscribers;
        }
        $v_0 = parentNode.QuickLaunchEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['QuickLaunchEnabled'] = $v_0;
            delete parentNode.QuickLaunchEnabled;
        }
        $v_0 = parentNode.RecycleBin;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('RecycleBin', this.get_recycleBin(), $v_0);
            (this.get_recycleBin()).fromJson($v_0);
            delete parentNode.RecycleBin;
        }
        $v_0 = parentNode.RecycleBinEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['RecycleBinEnabled'] = $v_0;
            delete parentNode.RecycleBinEnabled;
        }
        $v_0 = parentNode.RegionalSettings;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('RegionalSettings', this.get_regionalSettings(), $v_0);
            (this.get_regionalSettings()).fromJson($v_0);
            delete parentNode.RegionalSettings;
        }
        $v_0 = parentNode.RoleDefinitions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('RoleDefinitions', this.get_roleDefinitions(), $v_0);
            (this.get_roleDefinitions()).fromJson($v_0);
            delete parentNode.RoleDefinitions;
        }
        $v_0 = parentNode.RootFolder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('RootFolder', this.get_rootFolder(), $v_0);
            (this.get_rootFolder()).fromJson($v_0);
            delete parentNode.RootFolder;
        }
        $v_0 = parentNode.SaveSiteAsTemplateEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SaveSiteAsTemplateEnabled'] = $v_0;
            delete parentNode.SaveSiteAsTemplateEnabled;
        }
        $v_0 = parentNode.ServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ServerRelativeUrl'] = $v_0;
            delete parentNode.ServerRelativeUrl;
        }
        $v_0 = parentNode.ShowUrlStructureForCurrentUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ShowUrlStructureForCurrentUser'] = $v_0;
            delete parentNode.ShowUrlStructureForCurrentUser;
        }
        $v_0 = parentNode.SiteGroups;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('SiteGroups', this.get_siteGroups(), $v_0);
            (this.get_siteGroups()).fromJson($v_0);
            delete parentNode.SiteGroups;
        }
        $v_0 = parentNode.SiteLogoUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SiteLogoUrl'] = $v_0;
            delete parentNode.SiteLogoUrl;
        }
        $v_0 = parentNode.SiteUserInfoList;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('SiteUserInfoList', this.get_siteUserInfoList(), $v_0);
            (this.get_siteUserInfoList()).fromJson($v_0);
            delete parentNode.SiteUserInfoList;
        }
        $v_0 = parentNode.SiteUsers;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('SiteUsers', this.get_siteUsers(), $v_0);
            (this.get_siteUsers()).fromJson($v_0);
            delete parentNode.SiteUsers;
        }
        $v_0 = parentNode.SupportedUILanguageIds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SupportedUILanguageIds'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.SupportedUILanguageIds;
        }
        $v_0 = parentNode.SyndicationEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['SyndicationEnabled'] = $v_0;
            delete parentNode.SyndicationEnabled;
        }
        $v_0 = parentNode.ThemeInfo;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ThemeInfo', this.get_themeInfo(), $v_0);
            (this.get_themeInfo()).fromJson($v_0);
            delete parentNode.ThemeInfo;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Title'] = $v_0;
            delete parentNode.Title;
        }
        $v_0 = parentNode.TreeViewEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['TreeViewEnabled'] = $v_0;
            delete parentNode.TreeViewEnabled;
        }
        $v_0 = parentNode.UIVersion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['UIVersion'] = $v_0;
            delete parentNode.UIVersion;
        }
        $v_0 = parentNode.UIVersionConfigurationEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['UIVersionConfigurationEnabled'] = $v_0;
            delete parentNode.UIVersionConfigurationEnabled;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Url'] = $v_0;
            delete parentNode.Url;
        }
        $v_0 = parentNode.UserCustomActions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('UserCustomActions', this.get_userCustomActions(), $v_0);
            (this.get_userCustomActions()).fromJson($v_0);
            delete parentNode.UserCustomActions;
        }
        $v_0 = parentNode.Webs;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Webs', this.get_webs(), $v_0);
            (this.get_webs()).fromJson($v_0);
            delete parentNode.Webs;
        }
        $v_0 = parentNode.WebTemplate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WebTemplate'] = $v_0;
            delete parentNode.WebTemplate;
        }
        $v_0 = parentNode.WorkflowAssociations;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('WorkflowAssociations', this.get_workflowAssociations(), $v_0);
            (this.get_workflowAssociations()).fromJson($v_0);
            delete parentNode.WorkflowAssociations;
        }
        $v_0 = parentNode.WorkflowTemplates;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('WorkflowTemplates', this.get_workflowTemplates(), $v_0);
            (this.get_workflowTemplates()).fromJson($v_0);
            delete parentNode.WorkflowTemplates;
        }
    },
    doesUserHavePermissions: function SP_Web$doesUserHavePermissions(permissionMask) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'DoesUserHavePermissions', [permissionMask]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    getUserEffectivePermissions: function SP_Web$getUserEffectivePermissions(userName) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetUserEffectivePermissions', [userName]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.BasePermissions();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    mapToIcon: function SP_Web$mapToIcon(fileName, progId, size) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'MapToIcon', [fileName, progId, size]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    registerPushNotificationSubscriber: function SP_Web$registerPushNotificationSubscriber(deviceAppInstanceId, serviceToken) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.PushNotificationSubscriber($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'RegisterPushNotificationSubscriber', [deviceAppInstanceId, serviceToken]));
        return $v_1;
    },
    unregisterPushNotificationSubscriber: function SP_Web$unregisterPushNotificationSubscriber(deviceAppInstanceId) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UnregisterPushNotificationSubscriber', [deviceAppInstanceId]);

        $v_0.addQuery($v_1);
    },
    getPushNotificationSubscribersByArgs: function SP_Web$getPushNotificationSubscribersByArgs(customArgs) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.PushNotificationSubscriberCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPushNotificationSubscribersByArgs', [customArgs]));
        return $v_1;
    },
    getPushNotificationSubscribersByUser: function SP_Web$getPushNotificationSubscribersByUser(userName) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.PushNotificationSubscriberCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPushNotificationSubscribersByUser', [userName]));
        return $v_1;
    },
    doesPushNotificationSubscriberExist: function SP_Web$doesPushNotificationSubscriberExist(deviceAppInstanceId) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'DoesPushNotificationSubscriberExist', [deviceAppInstanceId]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    getPushNotificationSubscriber: function SP_Web$getPushNotificationSubscriber(deviceAppInstanceId) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.PushNotificationSubscriber($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPushNotificationSubscriber', [deviceAppInstanceId]));
        return $v_1;
    },
    getUserById: function SP_Web$getUserById(userId) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetUserById'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = [];
            ((this.get_objectData()).get_methodReturnObjects())['GetUserById'] = $v_2;
        }
        $v_1 = $v_2[userId];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.User($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetUserById', [userId]));
        $v_2[userId] = $v_1;
        return $v_1;
    },
    getAvailableWebTemplates: function SP_Web$getAvailableWebTemplates(lcid, doIncludeCrossLanguage) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.WebTemplateCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetAvailableWebTemplates', [lcid, doIncludeCrossLanguage]));
        return $v_1;
    },
    getCatalog: function SP_Web$getCatalog(typeCatalog) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetCatalog'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = [];
            ((this.get_objectData()).get_methodReturnObjects())['GetCatalog'] = $v_2;
        }
        $v_1 = $v_2[typeCatalog];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.List($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetCatalog', [typeCatalog]));
        $v_2[typeCatalog] = $v_1;
        return $v_1;
    },
    getChanges: function SP_Web$getChanges(query) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.ChangeCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetChanges', [query]));
        return $v_1;
    },
    applyWebTemplate: function SP_Web$applyWebTemplate(webTemplate) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'ApplyWebTemplate', [webTemplate]);

        $v_0.addQuery($v_1);
    },
    deleteObject: function SP_Web$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    },
    update: function SP_Web$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);

        $v_0.addQuery($v_1);
    },
    getFileByServerRelativeUrl: function SP_Web$getFileByServerRelativeUrl(serverRelativeUrl) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetFileByServerRelativeUrl'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetFileByServerRelativeUrl'] = $v_2;
        }
        $v_1 = $v_2[serverRelativeUrl.toUpperCase()];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.File($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetFileByServerRelativeUrl', [serverRelativeUrl]));
        $v_2[serverRelativeUrl.toUpperCase()] = $v_1;
        var $v_3 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_3.get_id(), $v_1);
        $v_0.addQuery($v_3);
        return $v_1;
    },
    getFolderByServerRelativeUrl: function SP_Web$getFolderByServerRelativeUrl(serverRelativeUrl) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetFolderByServerRelativeUrl'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetFolderByServerRelativeUrl'] = $v_2;
        }
        $v_1 = $v_2[serverRelativeUrl.toUpperCase()];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.Folder($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetFolderByServerRelativeUrl', [serverRelativeUrl]));
        $v_2[serverRelativeUrl.toUpperCase()] = $v_1;
        var $v_3 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_3.get_id(), $v_1);
        $v_0.addQuery($v_3);
        return $v_1;
    },
    getList: function SP_Web$getList(strUrl) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetList'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetList'] = $v_2;
        }
        $v_1 = $v_2[strUrl];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.List($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetList', [strUrl]));
        $v_2[strUrl] = $v_1;
        return $v_1;
    },
    getEntity: function SP_Web$getEntity(nnamespace, name) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.Entity($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetEntity', [nnamespace, name]));
        return $v_1;
    },
    getAppBdcCatalogForAppInstance: function SP_Web$getAppBdcCatalogForAppInstance(appInstanceId) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.AppBdcCatalog($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetAppBdcCatalogForAppInstance', [appInstanceId]));
        return $v_1;
    },
    getAppBdcCatalog: function SP_Web$getAppBdcCatalog() {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.AppBdcCatalog($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetAppBdcCatalog', null));
        return $v_1;
    },
    getSubwebsForCurrentUser: function SP_Web$getSubwebsForCurrentUser(query) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.WebCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetSubwebsForCurrentUser', [query]));
        return $v_1;
    },
    getAppInstanceById: function SP_Web$getAppInstanceById(appInstanceId) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.AppInstance($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetAppInstanceById', [appInstanceId]));
        return $v_1;
    },
    getAppInstancesByProductId: function SP_Web$getAppInstancesByProductId(productId) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.ClientObjectList($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetAppInstancesByProductId', [productId]), SP.AppInstance);
        return $v_1;
    },
    loadAndInstallAppInSpecifiedLocale: function SP_Web$loadAndInstallAppInSpecifiedLocale(appPackageStream, installationLocaleLCID) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.AppInstance($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'LoadAndInstallAppInSpecifiedLocale', [appPackageStream, installationLocaleLCID]));
        return $v_1;
    },
    loadApp: function SP_Web$loadApp(appPackageStream, installationLocaleLCID) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.AppInstance($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'LoadApp', [appPackageStream, installationLocaleLCID]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    loadAndInstallApp: function SP_Web$loadAndInstallApp(appPackageStream) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.AppInstance($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'LoadAndInstallApp', [appPackageStream]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    ensureUser: function SP_Web$ensureUser(logonName) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.User($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'EnsureUser', [logonName]));
        return $v_1;
    },
    applyTheme: function SP_Web$applyTheme(colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, shareGenerated) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'ApplyTheme', [colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, shareGenerated]);

        $v_0.addQuery($v_1);
    }
};
SP.WebPropertyNames = function SP_WebPropertyNames() {
};
SP.WebObjectPropertyNames = function SP_WebObjectPropertyNames() {
};
SP.WebCollection = function SP_WebCollection(context, objectPath) {
    SP.WebCollection.initializeBase(this, [context, objectPath]);
};
SP.WebCollection.prototype = {
    itemAt: function SP_WebCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_WebCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_WebCollection$get_childItemType() {
        return SP.Web;
    },
    add: function SP_WebCollection$add(parameters) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.Web($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [parameters]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        $v_1.$7_2(parameters);
        return $v_1;
    }
};
SP.WebCreationInformation = function SP_WebCreationInformation() {
    SP.WebCreationInformation.initializeBase(this);
};
SP.WebCreationInformation.prototype = {
    $3_1: null,
    $2a_1: 0,
    $0_1: null,
    $2_1: null,
    $3A_1: false,
    $3G_1: null,
    get_description: function SP_WebCreationInformation$get_description() {
        return this.$3_1;
    },
    set_description: function SP_WebCreationInformation$set_description(value) {
        this.$3_1 = value;
        return value;
    },
    get_language: function SP_WebCreationInformation$get_language() {
        return this.$2a_1;
    },
    set_language: function SP_WebCreationInformation$set_language(value) {
        this.$2a_1 = value;
        return value;
    },
    get_title: function SP_WebCreationInformation$get_title() {
        return this.$0_1;
    },
    set_title: function SP_WebCreationInformation$set_title(value) {
        this.$0_1 = value;
        return value;
    },
    get_url: function SP_WebCreationInformation$get_url() {
        return this.$2_1;
    },
    set_url: function SP_WebCreationInformation$set_url(value) {
        this.$2_1 = value;
        return value;
    },
    get_useSamePermissionsAsParentSite: function SP_WebCreationInformation$get_useSamePermissionsAsParentSite() {
        return this.$3A_1;
    },
    set_useSamePermissionsAsParentSite: function SP_WebCreationInformation$set_useSamePermissionsAsParentSite(value) {
        this.$3A_1 = value;
        return value;
    },
    get_webTemplate: function SP_WebCreationInformation$get_webTemplate() {
        return this.$3G_1;
    },
    set_webTemplate: function SP_WebCreationInformation$set_webTemplate(value) {
        this.$3G_1 = value;
        return value;
    },
    get_typeId: function SP_WebCreationInformation$get_typeId() {
        return '{8f9e9fbe-189e-492f-884f-98f9ef9cc4d6}';
    },
    writeToXml: function SP_WebCreationInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['Description', 'Language', 'Title', 'Url', 'UseSamePermissionsAsParentSite', 'WebTemplate'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_WebCreationInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.Language;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2a_1 = $v_0;
            delete parentNode.Language;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = $v_0;
            delete parentNode.Title;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = $v_0;
            delete parentNode.Url;
        }
        $v_0 = parentNode.UseSamePermissionsAsParentSite;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3A_1 = $v_0;
            delete parentNode.UseSamePermissionsAsParentSite;
        }
        $v_0 = parentNode.WebTemplate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3G_1 = $v_0;
            delete parentNode.WebTemplate;
        }
    }
};
SP.WebInformation = function SP_WebInformation(context, objectPath) {
    SP.WebInformation.initializeBase(this, [context, objectPath]);
};
SP.WebInformation.prototype = {
    get_configuration: function SP_WebInformation$get_configuration() {
        this.checkUninitializedProperty('Configuration');
        return ((this.get_objectData()).get_properties())['Configuration'];
    },
    get_created: function SP_WebInformation$get_created() {
        this.checkUninitializedProperty('Created');
        return ((this.get_objectData()).get_properties())['Created'];
    },
    get_description: function SP_WebInformation$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData()).get_properties())['Description'];
    },
    get_id: function SP_WebInformation$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_language: function SP_WebInformation$get_language() {
        this.checkUninitializedProperty('Language');
        return ((this.get_objectData()).get_properties())['Language'];
    },
    get_lastItemModifiedDate: function SP_WebInformation$get_lastItemModifiedDate() {
        this.checkUninitializedProperty('LastItemModifiedDate');
        return ((this.get_objectData()).get_properties())['LastItemModifiedDate'];
    },
    get_serverRelativeUrl: function SP_WebInformation$get_serverRelativeUrl() {
        this.checkUninitializedProperty('ServerRelativeUrl');
        return ((this.get_objectData()).get_properties())['ServerRelativeUrl'];
    },
    get_title: function SP_WebInformation$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData()).get_properties())['Title'];
    },
    get_webTemplate: function SP_WebInformation$get_webTemplate() {
        this.checkUninitializedProperty('WebTemplate');
        return ((this.get_objectData()).get_properties())['WebTemplate'];
    },
    get_webTemplateId: function SP_WebInformation$get_webTemplateId() {
        this.checkUninitializedProperty('WebTemplateId');
        return ((this.get_objectData()).get_properties())['WebTemplateId'];
    },
    initPropertiesFromJson: function SP_WebInformation$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Configuration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Configuration'] = $v_0;
            delete parentNode.Configuration;
        }
        $v_0 = parentNode.Created;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Created'] = $v_0;
            delete parentNode.Created;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Description'] = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.Language;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Language'] = $v_0;
            delete parentNode.Language;
        }
        $v_0 = parentNode.LastItemModifiedDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['LastItemModifiedDate'] = $v_0;
            delete parentNode.LastItemModifiedDate;
        }
        $v_0 = parentNode.ServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ServerRelativeUrl'] = $v_0;
            delete parentNode.ServerRelativeUrl;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Title'] = $v_0;
            delete parentNode.Title;
        }
        $v_0 = parentNode.WebTemplate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WebTemplate'] = $v_0;
            delete parentNode.WebTemplate;
        }
        $v_0 = parentNode.WebTemplateId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WebTemplateId'] = $v_0;
            delete parentNode.WebTemplateId;
        }
    }
};
SP.WebInformationPropertyNames = function SP_WebInformationPropertyNames() {
};
SP.WebProxy = function SP_WebProxy() {
};
SP.WebProxy.invoke = function SP_WebProxy$invoke(context, requestInfo) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{656a77c4-1634-415c-bf85-c6c0cb286e0e}', 'Invoke', [requestInfo]);

    context.addQuery($v_1);
    $v_0 = new SP.WebResponseInfo();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.WebRequestInfo = function SP_WebRequestInfo() {
    SP.WebRequestInfo.initializeBase(this);
};
SP.WebRequestInfo.prototype = {
    $C_1: null,
    $Y_1: null,
    $2h_1: null,
    $2_1: null,
    get_body: function SP_WebRequestInfo$get_body() {
        return this.$C_1;
    },
    set_body: function SP_WebRequestInfo$set_body(value) {
        this.$C_1 = value;
        return value;
    },
    get_headers: function SP_WebRequestInfo$get_headers() {
        return this.$Y_1;
    },
    set_headers: function SP_WebRequestInfo$set_headers(value) {
        this.$Y_1 = value;
        return value;
    },
    get_method: function SP_WebRequestInfo$get_method() {
        return this.$2h_1;
    },
    set_method: function SP_WebRequestInfo$set_method(value) {
        this.$2h_1 = value;
        return value;
    },
    get_url: function SP_WebRequestInfo$get_url() {
        return this.$2_1;
    },
    set_url: function SP_WebRequestInfo$set_url(value) {
        this.$2_1 = value;
        return value;
    },
    get_typeId: function SP_WebRequestInfo$get_typeId() {
        return '{71aa825d-bc12-422d-a177-d2e63fe68cd9}';
    },
    writeToXml: function SP_WebRequestInfo$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['Body', 'Headers', 'Method', 'Url'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_WebRequestInfo$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Body;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$C_1 = $v_0;
            delete parentNode.Body;
        }
        $v_0 = parentNode.Headers;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Y_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.Headers;
        }
        $v_0 = parentNode.Method;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2h_1 = $v_0;
            delete parentNode.Method;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = $v_0;
            delete parentNode.Url;
        }
    }
};
SP.WebResponseInfo = function SP_WebResponseInfo() {
    SP.WebResponseInfo.initializeBase(this);
};
SP.WebResponseInfo.prototype = {
    $C_1: null,
    $Y_1: null,
    $30_1: 0,
    get_body: function SP_WebResponseInfo$get_body() {
        return this.$C_1;
    },
    set_body: function SP_WebResponseInfo$set_body(value) {
        this.$C_1 = value;
        return value;
    },
    get_headers: function SP_WebResponseInfo$get_headers() {
        return this.$Y_1;
    },
    set_headers: function SP_WebResponseInfo$set_headers(value) {
        this.$Y_1 = value;
        return value;
    },
    get_statusCode: function SP_WebResponseInfo$get_statusCode() {
        return this.$30_1;
    },
    set_statusCode: function SP_WebResponseInfo$set_statusCode(value) {
        this.$30_1 = value;
        return value;
    },
    get_typeId: function SP_WebResponseInfo$get_typeId() {
        return '{73b6054a-aa40-41e4-a34f-5a6f898e6d4f}';
    },
    writeToXml: function SP_WebResponseInfo$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['Body', 'Headers', 'StatusCode'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_WebResponseInfo$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Body;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$C_1 = $v_0;
            delete parentNode.Body;
        }
        $v_0 = parentNode.Headers;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Y_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.Headers;
        }
        $v_0 = parentNode.StatusCode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$30_1 = $v_0;
            delete parentNode.StatusCode;
        }
    }
};
SP.WebTemplate = function SP_WebTemplate(context, objectPath) {
    SP.WebTemplate.initializeBase(this, [context, objectPath]);
};
SP.WebTemplate.prototype = {
    get_description: function SP_WebTemplate$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData()).get_properties())['Description'];
    },
    get_displayCategory: function SP_WebTemplate$get_displayCategory() {
        this.checkUninitializedProperty('DisplayCategory');
        return ((this.get_objectData()).get_properties())['DisplayCategory'];
    },
    get_id: function SP_WebTemplate$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_imageUrl: function SP_WebTemplate$get_imageUrl() {
        this.checkUninitializedProperty('ImageUrl');
        return ((this.get_objectData()).get_properties())['ImageUrl'];
    },
    get_isHidden: function SP_WebTemplate$get_isHidden() {
        this.checkUninitializedProperty('IsHidden');
        return ((this.get_objectData()).get_properties())['IsHidden'];
    },
    get_isRootWebOnly: function SP_WebTemplate$get_isRootWebOnly() {
        this.checkUninitializedProperty('IsRootWebOnly');
        return ((this.get_objectData()).get_properties())['IsRootWebOnly'];
    },
    get_isSubWebOnly: function SP_WebTemplate$get_isSubWebOnly() {
        this.checkUninitializedProperty('IsSubWebOnly');
        return ((this.get_objectData()).get_properties())['IsSubWebOnly'];
    },
    get_lcid: function SP_WebTemplate$get_lcid() {
        this.checkUninitializedProperty('Lcid');
        return ((this.get_objectData()).get_properties())['Lcid'];
    },
    get_name: function SP_WebTemplate$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    get_title: function SP_WebTemplate$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData()).get_properties())['Title'];
    },
    initPropertiesFromJson: function SP_WebTemplate$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Description'] = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.DisplayCategory;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DisplayCategory'] = $v_0;
            delete parentNode.DisplayCategory;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.ImageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ImageUrl'] = $v_0;
            delete parentNode.ImageUrl;
        }
        $v_0 = parentNode.IsHidden;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsHidden'] = $v_0;
            delete parentNode.IsHidden;
        }
        $v_0 = parentNode.IsRootWebOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsRootWebOnly'] = $v_0;
            delete parentNode.IsRootWebOnly;
        }
        $v_0 = parentNode.IsSubWebOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsSubWebOnly'] = $v_0;
            delete parentNode.IsSubWebOnly;
        }
        $v_0 = parentNode.Lcid;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Lcid'] = $v_0;
            delete parentNode.Lcid;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Title'] = $v_0;
            delete parentNode.Title;
        }
    }
};
SP.WebTemplatePropertyNames = function SP_WebTemplatePropertyNames() {
};
SP.WebTemplateCollection = function SP_WebTemplateCollection(context, objectPath) {
    SP.WebTemplateCollection.initializeBase(this, [context, objectPath]);
};
SP.WebTemplateCollection.prototype = {
    itemAt: function SP_WebTemplateCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_WebTemplateCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_WebTemplateCollection$get_childItemType() {
        return SP.WebTemplate;
    },
    getByName: function SP_WebTemplateCollection$getByName(name) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByName'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetByName'] = $v_2;
        }
        $v_1 = $v_2[name.toUpperCase()];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.WebTemplate($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByName', [name]));
        $v_2[name.toUpperCase()] = $v_1;
        return $v_1;
    }
};
Type.registerNamespace('SP.UI');
SP.UI.PopoutMenu = function SP_UI_PopoutMenu(launcherId, menuId, iconId, launcherOpenCssClass, textDirection, closeIconUrl, isClustered, closeIconOffsetLeft, closeIconOffsetTop, closeIconHeight, closeIconWidth) {
    this.$$d_closeMenu = Function.createDelegate(this, this.closeMenu);
    this.$$d_onMenuMouseOver = Function.createDelegate(this, this.onMenuMouseOver);
    this.$$d_onMenuMouseOut = Function.createDelegate(this, this.onMenuMouseOut);
    this.$r_0 = -1;
    this.$A_0 = $get(launcherId);
    this.$1_0 = $get(menuId);
    this.$1j_0 = launcherOpenCssClass;
    this.$3W_0 = textDirection;
    this.$1g_0 = closeIconUrl;
    this.$3S_0 = isClustered;
    if (isClustered) {
        this.$s_0 = $get(iconId);
        this.$h_0 = this.$s_0.firstChild;
        this.$3T_0 = closeIconOffsetLeft;
        this.$3U_0 = closeIconOffsetTop;
        this.$3R_0 = closeIconHeight;
        this.$3V_0 = closeIconWidth;
    }
    else {
        this.$h_0 = $get(iconId);
    }
    if (SP.ScriptUtility.isNullOrUndefined(this.$A_0)) {
        throw Error.argument('launcherId');
    }
    if (SP.ScriptUtility.isNullOrUndefined(this.$1_0)) {
        throw Error.argument('menuId');
    }
    this.$1l_0 = this.$$d_onMenuMouseOut;
    this.$1m_0 = this.$$d_onMenuMouseOver;
    this.$1k_0 = SP.UI.PopoutMenu.onMenuClick;
    $addHandler(this.$1_0, 'mouseout', this.$1l_0);
    $addHandler(this.$1_0, 'mouseover', this.$1m_0);
    $addHandler(this.$1_0, 'click', this.$1k_0);
};
SP.UI.PopoutMenu.beginModal = function SP_UI_PopoutMenu$beginModal() {
    if (SP.UI.PopoutMenu.$L) {
        return;
    }
    if (!SP.UI.PopoutMenu.$1h) {
        $addHandler(document, 'keydown', SP.UI.PopoutMenu.onModalKeyDown);
        var $v_0 = SP.UI.PopoutMenu.onCloseEvent;

        $addHandler(window, 'scroll', $v_0);
        $addHandler(document.body, 'click', $v_0);
        SP.UI.PopoutMenu.$1h = true;
    }
    SP.UI.PopoutMenu.$L = true;
};
SP.UI.PopoutMenu.endModal = function SP_UI_PopoutMenu$endModal() {
    if (!SP.UI.PopoutMenu.$L) {
        return;
    }
    SP.UI.PopoutMenu.$L = false;
};
SP.UI.PopoutMenu.onMenuClick = function SP_UI_PopoutMenu$onMenuClick(evt) {
    evt.stopPropagation();
    if (!SP.ScriptUtility.isNullOrUndefined(SP.UI.PopoutMenu._activePopoutMenuInstance)) {
        SP.UI.PopoutMenu._activePopoutMenuInstance.closeMenu();
    }
    var $v_0 = evt.target;

    if ($v_0 && $v_0.tagName && $v_0.tagName.toUpperCase() === 'A' && $v_0.href && $v_0.href.length > 0) {
        evt.preventDefault();
        STSNavigate($v_0.href);
    }
};
SP.UI.PopoutMenu.onModalKeyDown = function SP_UI_PopoutMenu$onModalKeyDown(evt) {
    if (!SP.UI.PopoutMenu.$L) {
        return;
    }
    if (evt && evt.rawEvent) {
        if (evt.rawEvent.keyCode === 27) {
            SP.UI.PopoutMenu._activePopoutMenuInstance.closeMenu();
        }
    }
};
SP.UI.PopoutMenu.onCloseEvent = function SP_UI_PopoutMenu$onCloseEvent(evt) {
    if (!SP.UI.PopoutMenu.$L) {
        return;
    }
    SP.UI.PopoutMenu._activePopoutMenuInstance.closeMenu();
    evt.preventDefault();
};
SP.UI.PopoutMenu.ensureCSSClassOnElement = function SP_UI_PopoutMenu$ensureCSSClassOnElement(element, cssClass) {
    if (SP.ScriptUtility.isNullOrUndefined(element)) {
        return;
    }
    var $v_0 = element.className;

    if ($v_0.indexOf(cssClass) !== -1) {
        return;
    }
    var $v_1 = element.className.trim() + ' ' + cssClass;

    $v_1 = $v_1.trim();
    element.className = $v_1;
};
SP.UI.PopoutMenu.removeCSSClassFromElement = function SP_UI_PopoutMenu$removeCSSClassFromElement(element, cssClass) {
    if (SP.ScriptUtility.isNullOrUndefined(element)) {
        return;
    }
    element.className = element.className.replace(cssClass, '');
};
SP.UI.PopoutMenu.getViewPortWidth = function SP_UI_PopoutMenu$getViewPortWidth() {
    var $v_0 = window.innerWidth;

    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.documentElement.clientWidth;
    }
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.body.clientWidth;
    }
    return $v_0;
};
SP.UI.PopoutMenu.getViewPortHeight = function SP_UI_PopoutMenu$getViewPortHeight() {
    var $v_0 = window.innerHeight;

    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.documentElement.clientHeight;
    }
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.body.clientHeight;
    }
    return $v_0;
};
SP.UI.PopoutMenu.getViewableTop = function SP_UI_PopoutMenu$getViewableTop() {
    var $v_0;

    $v_0 = window.pageXOffset;
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.documentElement.scrollTop;
    }
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.body.scrollTop;
    }
    return $v_0;
};
SP.UI.PopoutMenu.getViewableLeft = function SP_UI_PopoutMenu$getViewableLeft() {
    var $v_0;

    $v_0 = window.pageYOffset;
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.documentElement.scrollLeft;
    }
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.body.scrollLeft;
    }
    return $v_0;
};
SP.UI.PopoutMenu.get_activePopoutMenuInstance = function SP_UI_PopoutMenu$get_activePopoutMenuInstance() {
    return SP.UI.PopoutMenu._activePopoutMenuInstance;
};
SP.UI.PopoutMenu.set_activePopoutMenuInstance = function SP_UI_PopoutMenu$set_activePopoutMenuInstance(value) {
    SP.UI.PopoutMenu._activePopoutMenuInstance = value;
    return value;
};
SP.UI.PopoutMenu.createPopoutMenuInstanceAndLaunch = function SP_UI_PopoutMenu$createPopoutMenuInstanceAndLaunch(anchorId, menuId, iconId, anchorOpenCss, textDirection, closeIconUrl, isClustered, x, y, height, width) {
    if (!SP.ScriptUtility.isNullOrUndefined(SP.UI.PopoutMenu._activePopoutMenuInstance)) {
        SP.UI.PopoutMenu._activePopoutMenuInstance.closeMenu();
        return;
    }
    var $v_0 = new SP.UI.PopoutMenu(anchorId, menuId, iconId, anchorOpenCss, textDirection, closeIconUrl, isClustered, x, y, height, width);

    $v_0.launchMenu();
};
SP.UI.PopoutMenu.closeActivePopoutMenuInstance = function SP_UI_PopoutMenu$closeActivePopoutMenuInstance() {
    if (!SP.ScriptUtility.isNullOrUndefined(SP.UI.PopoutMenu._activePopoutMenuInstance)) {
        SP.UI.PopoutMenu._activePopoutMenuInstance.closeMenu();
    }
};
SP.UI.PopoutMenu.prototype = {
    $A_0: null,
    $1_0: null,
    $s_0: null,
    $h_0: null,
    $1j_0: null,
    $3W_0: null,
    $1g_0: null,
    $3S_0: false,
    $3T_0: 0,
    $3U_0: 0,
    $3R_0: 0,
    $3V_0: 0,
    $1l_0: null,
    $1m_0: null,
    $1k_0: null,
    launchMenu: function SP_UI_PopoutMenu$launchMenu() {
        if (this._menuLaunched) {
            return;
        }
        if (SP.UI.PopoutMenu._activePopoutMenuInstance) {
            SP.UI.PopoutMenu._activePopoutMenuInstance.closeMenu();
        }
        SP.UI.PopoutMenu._activePopoutMenuInstance = this;
        SP.UI.PopoutMenu.beginModal();
        SP.UI.PopoutMenu.ensureCSSClassOnElement(this.$A_0, this.$1j_0);
        this.$1_0.style.display = 'block';
        this.$1_0.style.visibility = 'hidden';
        this.$1_0.style.position = 'absolute';
        this.$1_0.style.top = '0px';
        this.$1_0.style.left = '0px';
        this.$1_0.style.zIndex = 1002;
        var $v_0 = Sys.Browser.agent === Sys.Browser.InternetExplorer && Math.floor(Sys.Browser.version) === 7;

        if ($v_0) {
            var $v_1 = this.$1_0.offsetWidth;

            if ($v_1 < 142) {
                $v_1 = 142;
            }
            else if ($v_1 > 400) {
                $v_1 = 400;
            }
            this.$1_0.style.width = $v_1 + 'px';
        }
        this.positionMenu();
        this.$1_0.style.visibility = 'visible';
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            this.$1_0.parentNode.insertBefore(this.get_backFrame(), this.$1_0);
            this.positionBackFrame(this.$1_0);
        }
        this.$A_0.rel = '_spPopoutMenuIsOpen';
        this._menuLaunched = true;
    },
    closeMenu: function SP_UI_PopoutMenu$closeMenu() {
        if (!this._menuLaunched) {
            return;
        }
        this.$1_0.style.display = 'none';
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            this.$1_0.parentNode.removeChild(this.get_backFrame());
        }
        SP.UI.PopoutMenu.endModal();
        SP.UI.PopoutMenu.removeCSSClassFromElement(this.$A_0, this.$1j_0);
        if (!SP.ScriptUtility.isNullOrEmptyString(this.$1g_0)) {
            this.$5J_0();
        }
        this.$A_0.rel = '';
        this._menuLaunched = false;
        SP.UI.PopoutMenu._activePopoutMenuInstance = null;
    },
    $5J_0: function SP_UI_PopoutMenu$$5J_0() {
        this.$h_0.src = this.$1g_0;
        if (this.$3S_0) {
            this.$h_0.style.top = '-' + this.$3U_0 + 'px';
            this.$h_0.style.left = '-' + this.$3T_0 + 'px';
            this.$s_0.style.height = this.$3R_0 + 'px';
            this.$s_0.style.width = this.$3V_0 + 'px';
        }
    },
    positionBackFrame: function SP_UI_PopoutMenu$positionBackFrame(elem) {
        var $v_0 = !SP.ScriptUtility.isNullOrUndefined(elem.offsetParent);
        var $v_1 = AbsTop(elem) - ($v_0 ? AbsTop(elem.offsetParent) : 0);
        var $v_2 = AbsLeft(elem) - ($v_0 ? AbsLeft(elem.offsetParent) : 0);
        var $v_3 = elem.offsetWidth;
        var $v_4 = elem.offsetHeight;

        (this.get_backFrame()).style.top = $v_1 + 6 + 'px';
        (this.get_backFrame()).style.left = $v_2 + 'px';
        (this.get_backFrame()).style.width = $v_3 + 'px';
        (this.get_backFrame()).style.height = $v_4 + 'px';
    },
    positionMenu: function SP_UI_PopoutMenu$positionMenu() {
        var $v_0 = this.$1_0.offsetWidth;
        var $v_1 = this.$1_0.offsetHeight;
        var $v_2 = !SP.ScriptUtility.isNullOrUndefined(this.$1_0.offsetParent);
        var $v_3 = this.$A_0.offsetWidth;
        var $v_4 = this.$A_0.offsetHeight;
        var $v_5 = AbsTop(this.$A_0) - ($v_2 ? AbsTop(this.$1_0.offsetParent) : 0);
        var $v_6 = AbsLeft(this.$A_0) - ($v_2 ? AbsLeft(this.$1_0.offsetParent) : 0);
        var $v_7 = SP.UI.PopoutMenu.getViewPortWidth();
        var $v_8 = SP.UI.PopoutMenu.getViewPortHeight();
        var $v_9 = SP.UI.PopoutMenu.getViewableTop();
        var $v_A = SP.UI.PopoutMenu.getViewableLeft();

        if (this.get_defaultLaunchRight()) {
            if (this.$3M_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A)) {
                return;
            }
            if (this.$4b_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A)) {
                return;
            }
            if (this.$3L_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A)) {
                return;
            }
            if (this.$4a_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A)) {
                return;
            }
            this.$3M_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A);
        }
        else {
            if (this.$3L_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A)) {
                return;
            }
            if (this.$4a_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A)) {
                return;
            }
            if (this.$3M_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A)) {
                return;
            }
            if (this.$4b_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A)) {
                return;
            }
            this.$3L_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A);
        }
    },
    positionMenuWithCoordinates: function SP_UI_PopoutMenu$positionMenuWithCoordinates(left, top) {
        this.$1_0.style.top = top + 6 + 'px';
        this.$1_0.style.left = left + 'px';
    },
    $4a_0: function SP_UI_PopoutMenu$$4a_0($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9) {
        var $v_0 = $p5 + $p2 - $p0;

        if ($v_0 < $p9) {
            return false;
        }
        var $v_1 = $p4 - $p1;

        if ($v_1 < $p8) {
            return false;
        }
        this.positionMenuWithCoordinates($v_0, $v_1);
        return true;
    },
    $3L_0: function SP_UI_PopoutMenu$$3L_0($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9) {
        var $v_0 = $p5 + $p2 - $p0;

        if ($v_0 < $p9) {
            return false;
        }
        var $v_1 = $p4 + $p3 + $p1;
        var $v_2 = $p8 + $p7;

        if ($v_1 > $v_2) {
            return false;
        }
        this.positionMenuWithCoordinates($v_0, $p4 + $p3);
        return true;
    },
    $4b_0: function SP_UI_PopoutMenu$$4b_0($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9) {
        var $v_0 = $p5 + $p0;
        var $v_1 = $p9 + $p6;

        if ($v_0 > $v_1) {
            return false;
        }
        var $v_2 = $p4 - $p1;

        if ($v_2 < $p8) {
            return false;
        }
        this.positionMenuWithCoordinates($p5, $v_2);
        return true;
    },
    $3M_0: function SP_UI_PopoutMenu$$3M_0($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9) {
        var $v_0 = $p5 + $p0;
        var $v_1 = $p9 + $p6;

        if ($v_0 > $v_1) {
            return false;
        }
        var $v_2 = $p4 + $p3 + $p1;
        var $v_3 = $p8 + $p7;

        if ($v_2 > $v_3) {
            return false;
        }
        this.positionMenuWithCoordinates($p5, $p4 + $p3);
        return true;
    },
    onMenuMouseOver: function SP_UI_PopoutMenu$onMenuMouseOver(evt) {
        window.clearTimeout(this.$r_0);
    },
    onMenuMouseOut: function SP_UI_PopoutMenu$onMenuMouseOut(evt) {
        window.clearTimeout(this.$r_0);
        this.$r_0 = window.setTimeout(this.$$d_closeMenu, 1500);
    },
    _menuLaunched: false,
    get_menuLaunched: function SP_UI_PopoutMenu$get_menuLaunched() {
        return this._menuLaunched;
    },
    set_menuLaunched: function SP_UI_PopoutMenu$set_menuLaunched(value) {
        this._menuLaunched = value;
        return value;
    },
    _backFrame: null,
    get_backFrame: function SP_UI_PopoutMenu$get_backFrame() {
        if (!this._backFrame) {
            this._backFrame = document.createElement('iframe');
            this._backFrame.style.zIndex = 1001;
            this._backFrame.style.position = 'absolute';
            this._backFrame.style.visibility = 'hidden';
        }
        return this._backFrame;
    },
    get_defaultLaunchRight: function SP_UI_PopoutMenu$get_defaultLaunchRight() {
        return this.$3W_0 === 'ltr';
    },
    dispose: function SP_UI_PopoutMenu$dispose() {
        $removeHandler(this.$1_0, 'mouseout', this.$1l_0);
        $removeHandler(this.$1_0, 'mouseover', this.$1m_0);
        $removeHandler(this.$1_0, 'click', this.$1k_0);
    }
};
SP.UI.AttractModeControl = function SP_UI_AttractModeControl() {
    SP.UI.AttractModeControl.initializeBase(this, [document.createElement('div')]);
    (this.get_element()).className = SP.UI.AttractModeControl.cssAttractModeBackground;
    this.$5H_2();
};
SP.UI.AttractModeControl.$4n = function SP_UI_AttractModeControl$$4n() {
    var $v_0 = document.createElement('div');

    $v_0.className = SP.UI.AttractModeControl.cssAttractModeWrapper;
    return $v_0;
};
SP.UI.AttractModeControl.prototype = {
    $1i_2: null,
    $t_2: null,
    get_imageElement: function SP_UI_AttractModeControl$get_imageElement() {
        return this.$1i_2;
    },
    get_textElement: function SP_UI_AttractModeControl$get_textElement() {
        return this.$t_2;
    },
    $5H_2: function SP_UI_AttractModeControl$$5H_2() {
        var $v_0 = SP.UI.AttractModeControl.$4n();
        var $v_1 = document.createElement('div');

        $v_1.className = SP.UI.AttractModeControl.cssAttractModeCell;
        this.$1i_2 = this.$4m_2();
        $v_1.appendChild(this.$1i_2);
        $v_0.appendChild($v_1);
        var $v_2 = this.$4o_2();

        Sys.UI.DomElement.addCssClass($v_2, SP.UI.AttractModeControl.cssAttractModeCell);
        Sys.UI.DomElement.addCssClass($v_2, SP.UI.AttractModeControl.cssAttractMode);
        this.$t_2 = document.createElement('div');
        this.$t_2.className = SP.UI.AttractModeControl.cssAttractModeText;
        $v_2.appendChild(this.$t_2);
        $v_0.appendChild($v_2);
        (this.get_element()).appendChild($v_0);
    },
    $4m_2: function SP_UI_AttractModeControl$$4m_2() {
        var $v_0 = document.createElement('img');

        $v_0.src = SP.Utilities.Utility.getImageUrl(SP.UI.AttractModeControl.defaultAttractModeIcon);
        $v_0.className = SP.UI.AttractModeControl.cssAttractModeIcon;
        return $v_0;
    },
    $4o_2: function SP_UI_AttractModeControl$$4o_2() {
        var $v_0 = document.createElement('span');

        Sys.UI.DomElement.addCssClass($v_0, SP.UI.AttractModeControl.cssAttractMode);
        return $v_0;
    }
};
SP.UI.Status = function SP_UI_Status() {
};
SP.UI.Status.addStatus = function SP_UI_Status$addStatus(strTitle, strHtml, atBegining) {
    return addStatus(strTitle, strHtml, atBegining);
};
SP.UI.Status.appendStatus = function SP_UI_Status$appendStatus(sid, strTitle, strHtml) {
    return appendStatus(sid, strTitle, strHtml);
};
SP.UI.Status.updateStatus = function SP_UI_Status$updateStatus(sid, strHtml) {
    updateStatus(sid, strHtml);
};
SP.UI.Status.setStatusPriColor = function SP_UI_Status$setStatusPriColor(sid, strColor) {
    setStatusPriColor(sid, strColor);
};
SP.UI.Status.removeStatus = function SP_UI_Status$removeStatus(sid) {
    removeStatus(sid);
};
SP.UI.Status.removeAllStatus = function SP_UI_Status$removeAllStatus(hide) {
    removeAllStatus(hide);
};
SP.UI.Menu = function SP_UI_Menu($p0) {
    this.$J_0 = $p0;
};
SP.UI.Menu.create = function SP_UI_Menu$create(id) {
    var $v_0 = CMenu(id);

    return new SP.UI.Menu($v_0);
};
SP.UI.Menu.prototype = {
    $J_0: null,
    addMenuItem: function SP_UI_Menu$addMenuItem(text, actionScriptText, imageSourceUrl, imageAlternateText, sequenceNumber, description, id) {
        var $v_0 = CAMOpt(this.$J_0, text, actionScriptText, imageSourceUrl, imageAlternateText, sequenceNumber, description);

        if (id) {
            $v_0.id = id;
        }
        return $v_0;
    },
    addSeparator: function SP_UI_Menu$addSeparator() {
        CAMSep(this.$J_0);
    },
    addSubMenu: function SP_UI_Menu$addSubMenu(text, imageSourceUrl, imageAlternateText, sequenceNumber, description, id) {
        var $v_0 = CASubM(this.$J_0, text, imageSourceUrl, imageAlternateText, sequenceNumber, description);

        if (id) {
            $v_0.id = id;
        }
        return new SP.UI.Menu($v_0);
    },
    show: function SP_UI_Menu$show(relativeElement, forceRefresh, flipTopLevelMenu, yOffset) {
        OMenu(this.$J_0, relativeElement, forceRefresh, flipTopLevelMenu, yOffset);
    },
    showFilterMenu: function SP_UI_Menu$showFilterMenu(relativeElement, forceRefresh, flipTopLevelMenu, yOffset, fShowClose, fShowCheckBoxes) {
        OMenu(this.$J_0, relativeElement, forceRefresh, flipTopLevelMenu, yOffset, fShowClose, fShowCheckBoxes);
    },
    hideIcons: function SP_UI_Menu$hideIcons() {
        this.$J_0.setAttribute('hideicons', 'true');
    },
    showIcons: function SP_UI_Menu$showIcons() {
        this.$J_0.setAttribute('hideicons', 'false');
    }
};
SP.UI.MenuTest = function SP_UI_MenuTest() {
};
SP.UI.MenuTest.setup = function SP_UI_MenuTest$setup(relativeElement) {
    SP.UI.MenuTest.$g = relativeElement;
    relativeElement.attachEvent('onclick', SP.UI.MenuTest.$52);
};
SP.UI.MenuTest.$52 = function SP_UI_MenuTest$$52() {
    var $v_0 = SP.UI.MenuTest.$g._menu;

    if (!$v_0) {
        $v_0 = SP.UI.Menu.create(SP.UI.MenuTest.$g.id + '_menu');
        SP.UI.MenuTest.$g._menu = $v_0;
        $v_0.addMenuItem('Option 1', null, null, null, 0, null, null);
        $v_0.addSeparator();
        $v_0.addMenuItem('Option 2', 'window.location=\'http://www.microsoft.com\';', null, null, 0, null, null);
    }
    $v_0.show(SP.UI.MenuTest.$g, false, false, -1);
};
Type.registerNamespace('SP.Utilities');
SP.Utilities.DateTimeFormat = function() {
};
SP.Utilities.DateTimeFormat.prototype = {
    dateTime: 0,
    dateOnly: 1,
    timeOnly: 2,
    isO8601: 3,
    monthDayOnly: 4,
    monthYearOnly: 5,
    longDate: 6,
    unknownFormat: 7
};
SP.Utilities.DateTimeFormat.registerEnum('SP.Utilities.DateTimeFormat', false);
SP.Utilities.IconSize = function() {
};
SP.Utilities.IconSize.prototype = {
    size16: 0,
    size32: 1,
    size256: 2
};
SP.Utilities.IconSize.registerEnum('SP.Utilities.IconSize', false);
SP.Utilities.LogAppErrorResult = function() {
};
SP.Utilities.LogAppErrorResult.prototype = {
    success: 0,
    errorsThrottled: -1,
    accessDenied: -2
};
SP.Utilities.LogAppErrorResult.registerEnum('SP.Utilities.LogAppErrorResult', false);
SP.Utilities.PrincipalSource = function() {
};
SP.Utilities.PrincipalSource.prototype = {
    none: 0,
    userInfoList: 1,
    windows: 2,
    membershipProvider: 4,
    roleProvider: 8,
    all: 15
};
SP.Utilities.PrincipalSource.registerEnum('SP.Utilities.PrincipalSource', false);
SP.Utilities.PrincipalType = function() {
};
SP.Utilities.PrincipalType.prototype = {
    none: 0,
    user: 1,
    distributionList: 2,
    securityGroup: 4,
    sharePointGroup: 8,
    all: 15
};
SP.Utilities.PrincipalType.registerEnum('SP.Utilities.PrincipalType', false);
SP.Utilities.SPWOPIFrameAction = function() {
};
SP.Utilities.SPWOPIFrameAction.prototype = {
    view: 0,
    edit: 1,
    mobileView: 2,
    interactivePreview: 3
};
SP.Utilities.SPWOPIFrameAction.registerEnum('SP.Utilities.SPWOPIFrameAction', false);
SP.Utilities.Utility = function SP_Utilities_Utility() {
};
SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl = function SP_Utilities_Utility$get_layoutsLatestVersionRelativeUrl() {
    return SP.Utilities.Utility.layoutS_LATESTVERSION_RELATIVE_URL;
};
SP.Utilities.Utility.get_layoutsLatestVersionUrl = function SP_Utilities_Utility$get_layoutsLatestVersionUrl() {
    return SP.Utilities.Utility.layoutS_LATESTVERSION_URL;
};
SP.Utilities.Utility.getLayoutsPageUrl = function SP_Utilities_Utility$getLayoutsPageUrl(pageName) {
    return SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(), SP.Utilities.Utility.layoutS_LATESTVERSION_RELATIVE_URL + pageName);
};
SP.Utilities.Utility.getImageUrl = function SP_Utilities_Utility$getImageUrl(imageName) {
    return SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'images/' + imageName;
};
SP.Utilities.Utility.createWikiPageInContextWeb = function SP_Utilities_Utility$createWikiPageInContextWeb(context, parameters) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;

    $v_0 = new SP.File(context, new SP.ObjectPathStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'CreateWikiPageInContextWeb', [parameters]));
    return $v_0;
};
SP.Utilities.Utility.localizeWebPartGallery = function SP_Utilities_Utility$localizeWebPartGallery(context, items) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;

    $v_0 = new SP.ClientObjectList(context, new SP.ObjectPathStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'LocalizeWebPartGallery', [items]), SP.ListItem);
    return $v_0;
};
SP.Utilities.Utility.getAppLicenseInformation = function SP_Utilities_Utility$getAppLicenseInformation(context, productId) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'GetAppLicenseInformation', [productId]);

    context.addQuery($v_1);
    $v_0 = new SP.AppLicenseCollection();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.Utilities.Utility.importAppLicense = function SP_Utilities_Utility$importAppLicense(context, licenseTokenToImport, contentMarket, billingMarket, appName, iconUrl, providerName, appSubtype) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'ImportAppLicense', [licenseTokenToImport, contentMarket, billingMarket, appName, iconUrl, providerName, appSubtype]);

    context.addQuery($v_0);
};
SP.Utilities.Utility.getAppLicenseDeploymentId = function SP_Utilities_Utility$getAppLicenseDeploymentId(context) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'GetAppLicenseDeploymentId', null);

    context.addQuery($v_1);
    $v_0 = new SP.GuidResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.Utilities.Utility.logCustomAppError = function SP_Utilities_Utility$logCustomAppError(context, error) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'LogCustomAppError', [error]);

    context.addQuery($v_1);
    $v_0 = new SP.IntResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.Utilities.Utility.logCustomRemoteAppError = function SP_Utilities_Utility$logCustomRemoteAppError(context, productId, error) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'LogCustomRemoteAppError', [productId, error]);

    context.addQuery($v_1);
    $v_0 = new SP.IntResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.Utilities.Utility.getLocalizedString = function SP_Utilities_Utility$getLocalizedString(context, source, defaultResourceFile, language) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'GetLocalizedString', [source, defaultResourceFile, language]);

    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.Utilities.Utility.createNewDiscussion = function SP_Utilities_Utility$createNewDiscussion(context, list, title) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;

    $v_0 = new SP.ListItem(context, new SP.ObjectPathStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'CreateNewDiscussion', [list, title]));
    return $v_0;
};
SP.Utilities.Utility.createNewDiscussionReply = function SP_Utilities_Utility$createNewDiscussionReply(context, parent) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;

    $v_0 = new SP.ListItem(context, new SP.ObjectPathStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'CreateNewDiscussionReply', [parent]));
    return $v_0;
};
SP.Utilities.Utility.markDiscussionAsFeatured = function SP_Utilities_Utility$markDiscussionAsFeatured(context, listID, topicIDs) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'MarkDiscussionAsFeatured', [listID, topicIDs]);

    context.addQuery($v_0);
};
SP.Utilities.Utility.unmarkDiscussionAsFeatured = function SP_Utilities_Utility$unmarkDiscussionAsFeatured(context, listID, topicIDs) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'UnmarkDiscussionAsFeatured', [listID, topicIDs]);

    context.addQuery($v_0);
};
SP.Utilities.Utility.searchPrincipals = function SP_Utilities_Utility$searchPrincipals(context, web, input, scopes, sources, usersContainer, maxCount) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'SearchPrincipals', [web, input, scopes, sources, usersContainer, maxCount]);

    context.addQuery($v_1);
    $v_0 = [];
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.Utilities.Utility.getCurrentUserEmailAddresses = function SP_Utilities_Utility$getCurrentUserEmailAddresses(context) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'GetCurrentUserEmailAddresses', null);

    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.Utilities.Utility.createEmailBodyForInvitation = function SP_Utilities_Utility$createEmailBodyForInvitation(context, pageAddress) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'CreateEmailBodyForInvitation', [pageAddress]);

    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.Utilities.Utility.getPeoplePickerURL = function SP_Utilities_Utility$getPeoplePickerURL(context, web, fieldUser) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'GetPeoplePickerURL', [web, fieldUser]);

    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.Utilities.Utility.resolvePrincipal = function SP_Utilities_Utility$resolvePrincipal(context, web, input, scopes, sources, usersContainer, inputIsEmailOnly) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'ResolvePrincipal', [web, input, scopes, sources, usersContainer, inputIsEmailOnly]);

    context.addQuery($v_1);
    $v_0 = new SP.Utilities.PrincipalInfo();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.Utilities.Utility.getLowerCaseString = function SP_Utilities_Utility$getLowerCaseString(context, sourceValue, lcid) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'GetLowerCaseString', [sourceValue, lcid]);

    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.Utilities.Utility.formatDateTime = function SP_Utilities_Utility$formatDateTime(context, web, datetime, format) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'FormatDateTime', [web, datetime, format]);

    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.Utilities.Utility.isUserLicensedForEntityInContext = function SP_Utilities_Utility$isUserLicensedForEntityInContext(context, licensableEntity) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'IsUserLicensedForEntityInContext', [licensableEntity]);

    context.addQuery($v_1);
    $v_0 = new SP.BooleanResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.Utilities.EmailProperties = function SP_Utilities_EmailProperties() {
    SP.Utilities.EmailProperties.initializeBase(this);
};
SP.Utilities.EmailProperties.prototype = {
    $1u_1: null,
    $22_1: null,
    $C_1: null,
    $24_1: null,
    $2T_1: null,
    $31_1: null,
    $36_1: null,
    get_additionalHeaders: function SP_Utilities_EmailProperties$get_additionalHeaders() {
        return this.$1u_1;
    },
    set_additionalHeaders: function SP_Utilities_EmailProperties$set_additionalHeaders(value) {
        this.$1u_1 = value;
        return value;
    },
    get_BCC: function SP_Utilities_EmailProperties$get_BCC() {
        return this.$22_1;
    },
    set_BCC: function SP_Utilities_EmailProperties$set_BCC(value) {
        this.$22_1 = value;
        return value;
    },
    get_body: function SP_Utilities_EmailProperties$get_body() {
        return this.$C_1;
    },
    set_body: function SP_Utilities_EmailProperties$set_body(value) {
        this.$C_1 = value;
        return value;
    },
    get_CC: function SP_Utilities_EmailProperties$get_CC() {
        return this.$24_1;
    },
    set_CC: function SP_Utilities_EmailProperties$set_CC(value) {
        this.$24_1 = value;
        return value;
    },
    get_from: function SP_Utilities_EmailProperties$get_from() {
        return this.$2T_1;
    },
    set_from: function SP_Utilities_EmailProperties$set_from(value) {
        this.$2T_1 = value;
        return value;
    },
    get_subject: function SP_Utilities_EmailProperties$get_subject() {
        return this.$31_1;
    },
    set_subject: function SP_Utilities_EmailProperties$set_subject(value) {
        this.$31_1 = value;
        return value;
    },
    get_to: function SP_Utilities_EmailProperties$get_to() {
        return this.$36_1;
    },
    set_to: function SP_Utilities_EmailProperties$set_to(value) {
        this.$36_1 = value;
        return value;
    },
    get_typeId: function SP_Utilities_EmailProperties$get_typeId() {
        return '{fab1608d-fdfb-4c8c-bb0a-9b9cc3618a15}';
    },
    writeToXml: function SP_Utilities_EmailProperties$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['AdditionalHeaders', 'BCC', 'Body', 'CC', 'From', 'Subject', 'To'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_Utilities_EmailProperties$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AdditionalHeaders;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1u_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.AdditionalHeaders;
        }
        $v_0 = parentNode.BCC;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$22_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.BCC;
        }
        $v_0 = parentNode.Body;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$C_1 = $v_0;
            delete parentNode.Body;
        }
        $v_0 = parentNode.CC;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$24_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.CC;
        }
        $v_0 = parentNode.From;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2T_1 = $v_0;
            delete parentNode.From;
        }
        $v_0 = parentNode.Subject;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$31_1 = $v_0;
            delete parentNode.Subject;
        }
        $v_0 = parentNode.To;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$36_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.To;
        }
    }
};
SP.Utilities.PrincipalInfo = function SP_Utilities_PrincipalInfo() {
    SP.Utilities.PrincipalInfo.initializeBase(this);
};
SP.Utilities.PrincipalInfo.prototype = {
    $3n_1: null,
    $S_1: null,
    $V_1: null,
    $3y_1: null,
    $Z_1: null,
    $44_1: null,
    $4A_1: 0,
    $k_1: 0,
    $4K_1: null,
    get_department: function SP_Utilities_PrincipalInfo$get_department() {
        return this.$3n_1;
    },
    get_displayName: function SP_Utilities_PrincipalInfo$get_displayName() {
        return this.$S_1;
    },
    get_email: function SP_Utilities_PrincipalInfo$get_email() {
        return this.$V_1;
    },
    get_jobTitle: function SP_Utilities_PrincipalInfo$get_jobTitle() {
        return this.$3y_1;
    },
    get_loginName: function SP_Utilities_PrincipalInfo$get_loginName() {
        return this.$Z_1;
    },
    get_mobile: function SP_Utilities_PrincipalInfo$get_mobile() {
        return this.$44_1;
    },
    get_principalId: function SP_Utilities_PrincipalInfo$get_principalId() {
        return this.$4A_1;
    },
    get_principalType: function SP_Utilities_PrincipalInfo$get_principalType() {
        return this.$k_1;
    },
    get_sipAddress: function SP_Utilities_PrincipalInfo$get_sipAddress() {
        return this.$4K_1;
    },
    get_typeId: function SP_Utilities_PrincipalInfo$get_typeId() {
        return '{c88e4d2e-768d-4065-9da4-d2880e08733e}';
    },
    writeToXml: function SP_Utilities_PrincipalInfo$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['Department', 'DisplayName', 'Email', 'JobTitle', 'LoginName', 'Mobile', 'PrincipalId', 'PrincipalType', 'SIPAddress'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_Utilities_PrincipalInfo$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Department;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3n_1 = $v_0;
            delete parentNode.Department;
        }
        $v_0 = parentNode.DisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$S_1 = $v_0;
            delete parentNode.DisplayName;
        }
        $v_0 = parentNode.Email;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$V_1 = $v_0;
            delete parentNode.Email;
        }
        $v_0 = parentNode.JobTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3y_1 = $v_0;
            delete parentNode.JobTitle;
        }
        $v_0 = parentNode.LoginName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Z_1 = $v_0;
            delete parentNode.LoginName;
        }
        $v_0 = parentNode.Mobile;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$44_1 = $v_0;
            delete parentNode.Mobile;
        }
        $v_0 = parentNode.PrincipalId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4A_1 = $v_0;
            delete parentNode.PrincipalId;
        }
        $v_0 = parentNode.PrincipalType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$k_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.PrincipalType;
        }
        $v_0 = parentNode.SIPAddress;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4K_1 = $v_0;
            delete parentNode.SIPAddress;
        }
    }
};
SP.Utilities.WikiPageCreationInformation = function SP_Utilities_WikiPageCreationInformation() {
    SP.Utilities.WikiPageCreationInformation.initializeBase(this);
};
SP.Utilities.WikiPageCreationInformation.prototype = {
    $2x_1: null,
    $3H_1: null,
    get_serverRelativeUrl: function SP_Utilities_WikiPageCreationInformation$get_serverRelativeUrl() {
        return this.$2x_1;
    },
    set_serverRelativeUrl: function SP_Utilities_WikiPageCreationInformation$set_serverRelativeUrl(value) {
        this.$2x_1 = value;
        return value;
    },
    get_wikiHtmlContent: function SP_Utilities_WikiPageCreationInformation$get_wikiHtmlContent() {
        return this.$3H_1;
    },
    set_wikiHtmlContent: function SP_Utilities_WikiPageCreationInformation$set_wikiHtmlContent(value) {
        this.$3H_1 = value;
        return value;
    },
    get_typeId: function SP_Utilities_WikiPageCreationInformation$get_typeId() {
        return '{9e154aab-8847-4cf9-8bfa-eb8c1ec47926}';
    },
    writeToXml: function SP_Utilities_WikiPageCreationInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['ServerRelativeUrl', 'WikiHtmlContent'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_Utilities_WikiPageCreationInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2x_1 = $v_0;
            delete parentNode.ServerRelativeUrl;
        }
        $v_0 = parentNode.WikiHtmlContent;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3H_1 = $v_0;
            delete parentNode.WikiHtmlContent;
        }
    }
};
Type.registerNamespace('SP.Application.UI');
SP.Application.UI.DefaultFormsInformationRequestor = function() {
};
SP.Application.UI.DefaultFormsInformationRequestor.registerInterface('SP.Application.UI.DefaultFormsInformationRequestor');
SP.Application.UI.ViewSelectorMenuOptions = function SP_Application_UI_ViewSelectorMenuOptions() {
};
SP.Application.UI.ViewInformationRequestor = function() {
};
SP.Application.UI.ViewInformationRequestor.registerInterface('SP.Application.UI.ViewInformationRequestor');
SP.Application.UI.FormsInfo = function SP_Application_UI_FormsInfo() {
};
SP.Application.UI.FormsInfo.prototype = {
    ContentTypeName: null,
    NewFormUrl: null,
    DisplayFormUrl: null,
    EditFormUrl: null
};
SP.Application.UI.DefaultFormsInformation = function SP_Application_UI_DefaultFormsInformation() {
};
SP.Application.UI.DefaultFormsInformation.prototype = {
    DefaultForms: null,
    OtherForms: null
};
SP.Application.UI.DefaultFormsMenuBuilder = function SP_Application_UI_DefaultFormsMenuBuilder($p0) {
    this.$$d_$5C_0 = Function.createDelegate(this, this.$5C_0);
    this.$$d_$5D_0 = Function.createDelegate(this, this.$5D_0);
    this.$I_0 = $p0;
};
SP.Application.UI.DefaultFormsMenuBuilder.getDefaultFormsInformation = function SP_Application_UI_DefaultFormsMenuBuilder$getDefaultFormsInformation(requestor, listId) {
    var $v_0 = new SP.Application.UI.DefaultFormsMenuBuilder(listId);

    $v_0.$3e_0(requestor);
};
SP.Application.UI.DefaultFormsMenuBuilder.$1s = function SP_Application_UI_DefaultFormsMenuBuilder$$1s($p0) {
    if (!SP.ScriptUtility.isNullOrUndefined($p0)) {
        if ($p0.startsWith('~list/')) {
            $p0 = $p0.substr(6);
        }
        else if (($p0.toUpperCase()).startsWith('_LAYOUTS/')) {
            $p0 = '';
        }
    }
    return $p0;
};
SP.Application.UI.DefaultFormsMenuBuilder.$4t = function SP_Application_UI_DefaultFormsMenuBuilder$$4t($p0, $p1) {
    var $v_0 = new SP.Application.UI.DefaultFormsInformation();

    $v_0.DefaultForms = new SP.Application.UI.FormsInfo();
    if ($p0.get_baseType() !== 1) {
        $v_0.DefaultForms.NewFormUrl = $p0.get_defaultNewFormUrl();
    }
    $v_0.DefaultForms.DisplayFormUrl = $p0.get_defaultDisplayFormUrl();
    $v_0.DefaultForms.EditFormUrl = $p0.get_defaultEditFormUrl();
    $v_0.OtherForms = [];
    var $$enum_3 = $p1.getEnumerator();

    while ($$enum_3.moveNext()) {
        var $v_1 = $$enum_3.get_current();
        var $v_2 = new SP.Application.UI.FormsInfo();

        $v_2.ContentTypeName = $v_1.get_name();
        $v_2.NewFormUrl = SP.Application.UI.DefaultFormsMenuBuilder.$1s($v_1.get_newFormUrl());
        $v_2.DisplayFormUrl = SP.Application.UI.DefaultFormsMenuBuilder.$1s($v_1.get_displayFormUrl());
        $v_2.EditFormUrl = SP.Application.UI.DefaultFormsMenuBuilder.$1s($v_1.get_editFormUrl());
        Array.add($v_0.OtherForms, $v_2);
    }
    return $v_0;
};
SP.Application.UI.DefaultFormsMenuBuilder.prototype = {
    $I_0: null,
    $H_0: null,
    $2D_0: null,
    $9_0: null,
    $5F_0: function SP_Application_UI_DefaultFormsMenuBuilder$$5F_0() {
        var $v_0 = SP.ClientContext.get_current();
        var $v_1 = $v_0.get_web();

        this.$H_0 = ($v_1.get_lists()).getById(this.$I_0);
        this.$H_0.retrieve('BaseType', 'DefaultNewFormUrl', 'DefaultDisplayFormUrl', 'DefaultEditFormUrl');
        this.$2D_0 = this.$H_0.get_contentTypes();
        var $v_2 = this.$2D_0.retrieveItems();

        $v_2.retrieve(['Name', 'DisplayFormUrl', 'NewFormUrl', 'EditFormUrl']);
        return $v_0;
    },
    $3e_0: function SP_Application_UI_DefaultFormsMenuBuilder$$3e_0($p0) {
        var $v_0 = this.$5F_0();

        this.$9_0 = $p0;
        $v_0.executeQueryAsync(this.$$d_$5D_0, this.$$d_$5C_0);
    },
    $5D_0: function SP_Application_UI_DefaultFormsMenuBuilder$$5D_0($p0, $p1) {
        if (!SP.ScriptUtility.isNullOrUndefined(this.$9_0)) {
            var $v_0 = SP.Application.UI.DefaultFormsMenuBuilder.$4t(this.$H_0, this.$2D_0);

            this.$9_0.onDefaultFormsInformationRetrieveSuccess($v_0);
        }
        this.$9_0 = null;
    },
    $5C_0: function SP_Application_UI_DefaultFormsMenuBuilder$$5C_0($p0, $p1) {
        if ($p1 && !SP.ScriptUtility.isNullOrUndefined($p1.get_message())) { }
        if (!SP.ScriptUtility.isNullOrUndefined(this.$9_0)) {
            this.$9_0.onDefaultFormsInformationRetrieveFailure();
        }
        this.$9_0 = null;
    }
};
SP.Application.UI.BrowserUtility = function SP_Application_UI_BrowserUtility() {
};
SP.Application.UI.BrowserUtility.$51 = function SP_Application_UI_BrowserUtility$$51() {
    return Sys.Browser.agent === Sys.Browser.Firefox || (Sys.Browser.name.toLowerCase()).indexOf('firefox') !== -1;
};
SP.Application.UI.ViewSelectorGroups = function SP_Application_UI_ViewSelectorGroups() {
};
SP.Application.UI.ViewSelectorGroups.prototype = {
    ModeratedViews: null,
    PublicViews: null,
    PersonalViews: null,
    OtherViews: null,
    DefaultView: null,
    ViewCreation: null
};
SP.Application.UI.ViewSelectorMenuItem = function SP_Application_UI_ViewSelectorMenuItem() {
    this.Sequence = Number.MAX_VALUE;
};
SP.Application.UI.ViewSelectorMenuItem.prototype = {
    Text: '',
    ActionScriptText: '',
    NavigateUrl: '',
    ImageSourceUrl: '',
    Description: '',
    Id: '',
    ItemType: '',
    GroupId: 0
};
SP.Application.UI.ViewSelectorSubMenu = function SP_Application_UI_ViewSelectorSubMenu() {
};
SP.Application.UI.ViewSelectorSubMenu.prototype = {
    Text: '',
    ImageSourceUrl: '',
    SubMenuItems: null
};
SP.Application.UI.ServerMenus = function SP_Application_UI_ServerMenus() {
    this.MenuItems = [];
};
SP.Application.UI.ViewSelectorMenuBuilder = function SP_Application_UI_ViewSelectorMenuBuilder($p0, $p1) {
    this.$$d_$4q_0 = Function.createDelegate(this, this.$4q_0);
    this.$$d_$4r_0 = Function.createDelegate(this, this.$4r_0);
    this.$U_0 = $p0;
    this.$I_0 = new SP.Guid($p1.listId);
    this.$3B_0 = new SP.Guid($p1.viewId);
    this.$4V_0 = $p1.viewParameters;
    this.$1I_0 = $p1;
};
SP.Application.UI.ViewSelectorMenuBuilder.get_filterMenuItemsCallback = function SP_Application_UI_ViewSelectorMenuBuilder$get_filterMenuItemsCallback() {
    return SP.Application.UI.ViewSelectorMenuBuilder.$n;
};
SP.Application.UI.ViewSelectorMenuBuilder.set_filterMenuItemsCallback = function SP_Application_UI_ViewSelectorMenuBuilder$set_filterMenuItemsCallback(value) {
    SP.Application.UI.ViewSelectorMenuBuilder.$n = value;
    return value;
};
SP.Application.UI.ViewSelectorMenuBuilder.showMenu = function SP_Application_UI_ViewSelectorMenuBuilder$showMenu(elem, options) {
    var $v_0 = elem._menu;

    if ($v_0) {
        $v_0.show(elem, false, false, -1);
        return;
    }
    var $v_1 = new SP.Application.UI.ViewSelectorMenuBuilder(elem, options);

    $v_1.$4i_0();
};
SP.Application.UI.ViewSelectorMenuBuilder.getViewInformation = function SP_Application_UI_ViewSelectorMenuBuilder$getViewInformation(requestor, options) {
    var $v_0 = new SP.Application.UI.ViewSelectorMenuBuilder(null, options);

    $v_0.$3e_0(requestor);
};
SP.Application.UI.ViewSelectorMenuBuilder.prototype = {
    $U_0: null,
    $I_0: null,
    $3B_0: null,
    $1I_0: null,
    $4V_0: null,
    $9_0: null,
    $12_0: false,
    $3b_0: function SP_Application_UI_ViewSelectorMenuBuilder$$3b_0($p0, $p1) {
        var $v_0 = SP.PageContextInfo.get_webServerRelativeUrl();
        var $v_1 = new SP.Utilities.UrlBuilder($v_0);

        $v_1.combinePath('_layouts/' + SP.OfficeVersion.majorVersion + '/vsmenu.aspx');
        $v_1.addKeyValueQueryString('List', this.$I_0.toString('B'));
        $v_1.addKeyValueQueryString('View', this.$3B_0.toString('B'));
        $v_1.addKeyValueQueryString('Source', window.location.href);
        var $v_2 = $v_1.get_url();

        $v_2 += '&' + this.$1I_0.viewParameters;
        SP.PageRequest.doPost($v_2, '', 'application/json', $p0, $p1);
    },
    $4i_0: function SP_Application_UI_ViewSelectorMenuBuilder$$4i_0() {
        this.$12_0 = true;
        this.$3b_0(this.$$d_$4r_0, this.$$d_$4q_0);
    },
    $3e_0: function SP_Application_UI_ViewSelectorMenuBuilder$$3e_0($p0) {
        this.$12_0 = false;
        this.$9_0 = $p0;
        this.$3b_0(this.$$d_$4r_0, this.$$d_$4q_0);
    },
    $4r_0: function SP_Application_UI_ViewSelectorMenuBuilder$$4r_0($p0, $p1) {
        var $v_0 = new SP.Application.UI.ServerMenus();

        $v_0.MenuItems = eval(($p1.get_executor()).get_responseData());
        if (SP.Application.UI.ViewSelectorMenuBuilder.$n) {
            $v_0.MenuItems = SP.Application.UI.ViewSelectorMenuBuilder.$n($v_0.MenuItems);
        }
        if (this.$9_0) {
            var $v_1 = this.$4l_0($v_0.MenuItems);

            this.$9_0.onViewInformationReturned($v_1);
            this.$9_0 = null;
        }
        if (this.$U_0 && this.$12_0) {
            this.$4k_0(this.$U_0, $v_0.MenuItems);
            this.$12_0 = false;
        }
        this.$U_0 = null;
        this.$I_0 = null;
        this.$3B_0 = null;
        this.$4V_0 = null;
    },
    $4k_0: function SP_Application_UI_ViewSelectorMenuBuilder$$4k_0($p0, $p1) {
        var $v_0 = $p0.id;

        if (SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            $v_0 = SP.UI.UIUtility.generateRandomElementId();
        }
        $v_0 = $v_0 + '_menu';
        var $v_1 = SP.UI.Menu.create($v_0);

        this.$4g_0($v_1, $p1);
        this.$U_0._menu = $v_1;
        $v_1.show(this.$U_0, false, false, -1);
    },
    $4g_0: function SP_Application_UI_ViewSelectorMenuBuilder$$4g_0($p0, $p1) {
        var $v_0 = null;
        var $v_1 = false;
        var $v_2 = SP.Application.UI.BrowserUtility.$51();

        for (var $v_3 = 0; $v_3 < $p1.length; $v_3++) {
            var $v_4 = $p1[$v_3];
            var $v_5 = $v_4.ItemType;

            if ($v_5 === 'SubMenu') {
                $v_1 = true;
                if (!$v_2) {
                    $v_0 = $p0.addSubMenu($v_4.Text, $v_4.ImageSourceUrl, null, $v_4.Sequence, $v_4.Description, $v_4.Id);
                }
            }
            else if ($v_5 === 'MenuItem') {
                if ($v_1) {
                    if (!$v_2) {
                        this.$3X_0($v_0, $v_4);
                    }
                }
                else {
                    this.$3X_0($p0, $v_4);
                }
            }
            else if ($v_5 === 'SubMenuEnd') {
                $v_1 = false;
            }
            else if ($v_5 === 'MenuSeparator') {
                if ($v_1) {
                    if (!$v_2) {
                        $v_0.addSeparator();
                    }
                }
                else {
                    $p0.addSeparator();
                }
            }
        }
    },
    $3X_0: function SP_Application_UI_ViewSelectorMenuBuilder$$3X_0($p0, $p1) {
        $p0.addMenuItem($p1.Text, $p1.ActionScriptText, $p1.ImageSourceUrl, null, $p1.Sequence, $p1.Description, $p1.Id);
    },
    $4l_0: function SP_Application_UI_ViewSelectorMenuBuilder$$4l_0($p0) {
        var $v_0 = new SP.Application.UI.ViewSelectorGroups();

        $v_0.ModeratedViews = [];
        $v_0.PublicViews = [];
        $v_0.PersonalViews = [];
        $v_0.OtherViews = [];
        $v_0.DefaultView = null;
        $v_0.ViewCreation = [];
        var $v_1 = null;
        var $v_2 = false;

        for (var $v_3 = 0; $v_3 < $p0.length; $v_3++) {
            var $v_4 = $p0[$v_3];
            var $v_5 = $v_4.ItemType;
            var $v_6 = $v_4.GroupId;

            if ($v_5 === 'SubMenu') {
                $v_2 = true;
                $v_1 = new SP.Application.UI.ViewSelectorSubMenu();
                $v_1.Text = $v_4.Text;
                $v_1.ImageSourceUrl = $v_4.ImageSourceUrl;
                $v_1.SubMenuItems = [];
                switch ($v_6) {
                case 300:
                    Array.add($v_0.PublicViews, $v_1);
                    break;
                case 200:
                    Array.add($v_0.PersonalViews, $v_1);
                    break;
                case 400:
                    Array.add($v_0.ModeratedViews, $v_1);
                    break;
                case 500:
                    Array.add($v_0.ViewCreation, $v_1);
                    break;
                default:
                    Array.add($v_0.OtherViews, $v_1);
                    break;
                }
            }
            else if ($v_5 === 'SubMenuEnd') {
                $v_2 = false;
            }
            else if ($v_5 === 'MenuSeparator') {
                continue;
            }
            else {
                if ($v_2) {
                    Array.add($v_1.SubMenuItems, $v_4);
                }
                else {
                    switch ($v_6) {
                    case 300:
                        Array.add($v_0.PublicViews, $v_4);
                        break;
                    case 100:
                        $v_0.DefaultView = $v_4;
                        break;
                    case 500:
                        if ($v_4.Id === 'CreateView') {
                            if (this.$1I_0.showCreateView) {
                                Array.add($v_0.ViewCreation, $v_4);
                            }
                        }
                        else if ($v_4.Id === 'ModifyView') {
                            if (this.$1I_0.showEditView) {
                                Array.add($v_0.ViewCreation, $v_4);
                            }
                        }
                        break;
                    case 200:
                        Array.add($v_0.PersonalViews, $v_4);
                        break;
                    case 400:
                        Array.add($v_0.ModeratedViews, $v_4);
                        break;
                    default:
                        Array.add($v_0.OtherViews, $v_4);
                        break;
                    }
                }
            }
        }
        return $v_0;
    },
    $4q_0: function SP_Application_UI_ViewSelectorMenuBuilder$$4q_0($p0, $p1) {
    }
};
SP.Application.UI.MoreColorsPicker = function SP_Application_UI_MoreColorsPicker(e) {
    this.$$d_$56_2 = Function.createDelegate(this, this.$56_2);
    this.$$d_$57_2 = Function.createDelegate(this, this.$57_2);
    SP.Application.UI.MoreColorsPicker.initializeBase(this, [e]);
};
SP.Application.UI.MoreColorsPicker.$4x = function SP_Application_UI_MoreColorsPicker$$4x() {
    if (SP.Application.UI.MoreColorsPicker.$i) {
        return;
    }
    SP.Application.UI.MoreColorsPicker.$i = [new SP.Application.UI.MappedColor('#003366', new Sys.UI.Point(42, 3)), new SP.Application.UI.MappedColor('#336699', new Sys.UI.Point(56, 3)), new SP.Application.UI.MappedColor('#3366CC', new Sys.UI.Point(70, 3)), new SP.Application.UI.MappedColor('#003399', new Sys.UI.Point(84, 3)), new SP.Application.UI.MappedColor('#000099', new Sys.UI.Point(98, 3)), new SP.Application.UI.MappedColor('#0000CC', new Sys.UI.Point(112, 3)), new SP.Application.UI.MappedColor('#000066', new Sys.UI.Point(126, 3)), new SP.Application.UI.MappedColor('#006666', new Sys.UI.Point(35, 15)), new SP.Application.UI.MappedColor('#006699', new Sys.UI.Point(49, 15)), new SP.Application.UI.MappedColor('#0099CC', new Sys.UI.Point(63, 15)), new SP.Application.UI.MappedColor('#0066CC', new Sys.UI.Point(77, 15)), new SP.Application.UI.MappedColor('#0033CC', new Sys.UI.Point(91, 15)), new SP.Application.UI.MappedColor('#0000FF', new Sys.UI.Point(105, 15)), new SP.Application.UI.MappedColor('#3333FF', new Sys.UI.Point(119, 15)), new SP.Application.UI.MappedColor('#333399', new Sys.UI.Point(133, 15)), new SP.Application.UI.MappedColor('#008080', new Sys.UI.Point(28, 27)), new SP.Application.UI.MappedColor('#009999', new Sys.UI.Point(42, 27)), new SP.Application.UI.MappedColor('#33CCCC', new Sys.UI.Point(56, 27)), new SP.Application.UI.MappedColor('#00CCFF', new Sys.UI.Point(70, 27)), new SP.Application.UI.MappedColor('#0099FF', new Sys.UI.Point(84, 27)), new SP.Application.UI.MappedColor('#0066FF', new Sys.UI.Point(98, 27)), new SP.Application.UI.MappedColor('#3366FF', new Sys.UI.Point(112, 27)), new SP.Application.UI.MappedColor('#3333CC', new Sys.UI.Point(126, 27)), new SP.Application.UI.MappedColor('#666699', new Sys.UI.Point(140, 27)), new SP.Application.UI.MappedColor('#339966', new Sys.UI.Point(21, 39)), new SP.Application.UI.MappedColor('#00CC99', new Sys.UI.Point(35, 39)), new SP.Application.UI.MappedColor('#00FFCC', new Sys.UI.Point(49, 39)), new SP.Application.UI.MappedColor('#00FFFF', new Sys.UI.Point(63, 39)), new SP.Application.UI.MappedColor('#33CCFF', new Sys.UI.Point(77, 39)), new SP.Application.UI.MappedColor('#3399FF', new Sys.UI.Point(91, 39)), new SP.Application.UI.MappedColor('#6699FF', new Sys.UI.Point(105, 39)), new SP.Application.UI.MappedColor('#6666FF', new Sys.UI.Point(119, 39)), new SP.Application.UI.MappedColor('#6600FF', new Sys.UI.Point(133, 39)), new SP.Application.UI.MappedColor('#6600CC', new Sys.UI.Point(147, 39)), new SP.Application.UI.MappedColor('#339933', new Sys.UI.Point(14, 51)), new SP.Application.UI.MappedColor('#00CC66', new Sys.UI.Point(28, 51)), new SP.Application.UI.MappedColor('#00FF99', new Sys.UI.Point(42, 51)), new SP.Application.UI.MappedColor('#66FFCC', new Sys.UI.Point(56, 51)), new SP.Application.UI.MappedColor('#66FFFF', new Sys.UI.Point(70, 51)), new SP.Application.UI.MappedColor('#66CCFF', new Sys.UI.Point(84, 51)), new SP.Application.UI.MappedColor('#99CCFF', new Sys.UI.Point(98, 51)), new SP.Application.UI.MappedColor('#9999FF', new Sys.UI.Point(112, 51)), new SP.Application.UI.MappedColor('#9966FF', new Sys.UI.Point(126, 51)), new SP.Application.UI.MappedColor('#9933FF', new Sys.UI.Point(140, 51)), new SP.Application.UI.MappedColor('#9900FF', new Sys.UI.Point(154, 51)), new SP.Application.UI.MappedColor('#006600', new Sys.UI.Point(7, 63)), new SP.Application.UI.MappedColor('#00CC00', new Sys.UI.Point(21, 63)), new SP.Application.UI.MappedColor('#00FF00', new Sys.UI.Point(35, 63)), new SP.Application.UI.MappedColor('#66FF99', new Sys.UI.Point(49, 63)), new SP.Application.UI.MappedColor('#99FFCC', new Sys.UI.Point(63, 63)), new SP.Application.UI.MappedColor('#CCFFFF', new Sys.UI.Point(77, 63)), new SP.Application.UI.MappedColor('#CCECFF', new Sys.UI.Point(91, 63)), new SP.Application.UI.MappedColor('#CCCCFF', new Sys.UI.Point(105, 63)), new SP.Application.UI.MappedColor('#CC99FF', new Sys.UI.Point(119, 63)), new SP.Application.UI.MappedColor('#CC66FF', new Sys.UI.Point(133, 63)), new SP.Application.UI.MappedColor('#CC00FF', new Sys.UI.Point(147, 63)), new SP.Application.UI.MappedColor('#9900CC', new Sys.UI.Point(161, 63)), new SP.Application.UI.MappedColor('#003300', new Sys.UI.Point(0, 75)), new SP.Application.UI.MappedColor('#008000', new Sys.UI.Point(14, 75)), new SP.Application.UI.MappedColor('#33CC33', new Sys.UI.Point(28, 75)), new SP.Application.UI.MappedColor('#66FF66', new Sys.UI.Point(42, 75)), new SP.Application.UI.MappedColor('#99FF99', new Sys.UI.Point(56, 75)), new SP.Application.UI.MappedColor('#CCFFCC', new Sys.UI.Point(70, 75)), new SP.Application.UI.MappedColor('#FFFFFF', new Sys.UI.Point(84, 75)), new SP.Application.UI.MappedColor('#FFCCFF', new Sys.UI.Point(98, 75)), new SP.Application.UI.MappedColor('#FF99FF', new Sys.UI.Point(112, 75)), new SP.Application.UI.MappedColor('#FF66FF', new Sys.UI.Point(126, 75)), new SP.Application.UI.MappedColor('#FF00FF', new Sys.UI.Point(140, 75)), new SP.Application.UI.MappedColor('#CC00CC', new Sys.UI.Point(154, 75)), new SP.Application.UI.MappedColor('#660066', new Sys.UI.Point(168, 75)), new SP.Application.UI.MappedColor('#336600', new Sys.UI.Point(7, 87)), new SP.Application.UI.MappedColor('#009900', new Sys.UI.Point(21, 87)), new SP.Application.UI.MappedColor('#66FF33', new Sys.UI.Point(35, 87)), new SP.Application.UI.MappedColor('#99FF66', new Sys.UI.Point(49, 87)), new SP.Application.UI.MappedColor('#CCFF99', new Sys.UI.Point(63, 87)), new SP.Application.UI.MappedColor('#FFFFCC', new Sys.UI.Point(77, 87)), new SP.Application.UI.MappedColor('#FFCCCC', new Sys.UI.Point(91, 87)), new SP.Application.UI.MappedColor('#FF99CC', new Sys.UI.Point(105, 87)), new SP.Application.UI.MappedColor('#FF66CC', new Sys.UI.Point(119, 87)), new SP.Application.UI.MappedColor('#FF33CC', new Sys.UI.Point(133, 87)), new SP.Application.UI.MappedColor('#CC0099', new Sys.UI.Point(147, 87)), new SP.Application.UI.MappedColor('#800080', new Sys.UI.Point(161, 87)), new SP.Application.UI.MappedColor('#333300', new Sys.UI.Point(14, 99)), new SP.Application.UI.MappedColor('#669900', new Sys.UI.Point(28, 99)), new SP.Application.UI.MappedColor('#99FF33', new Sys.UI.Point(42, 99)), new SP.Application.UI.MappedColor('#CCFF66', new Sys.UI.Point(56, 99)), new SP.Application.UI.MappedColor('#FFFF99', new Sys.UI.Point(70, 99)), new SP.Application.UI.MappedColor('#FFCC99', new Sys.UI.Point(84, 99)), new SP.Application.UI.MappedColor('#FF9999', new Sys.UI.Point(98, 99)), new SP.Application.UI.MappedColor('#FF6699', new Sys.UI.Point(112, 99)), new SP.Application.UI.MappedColor('#FF3399', new Sys.UI.Point(126, 99)), new SP.Application.UI.MappedColor('#CC3399', new Sys.UI.Point(140, 99)), new SP.Application.UI.MappedColor('#990099', new Sys.UI.Point(154, 99)), new SP.Application.UI.MappedColor('#666633', new Sys.UI.Point(21, 111)), new SP.Application.UI.MappedColor('#99CC00', new Sys.UI.Point(35, 111)), new SP.Application.UI.MappedColor('#CCFF33', new Sys.UI.Point(49, 111)), new SP.Application.UI.MappedColor('#FFFF66', new Sys.UI.Point(63, 111)), new SP.Application.UI.MappedColor('#FFCC66', new Sys.UI.Point(77, 111)), new SP.Application.UI.MappedColor('#FF9966', new Sys.UI.Point(91, 111)), new SP.Application.UI.MappedColor('#FF7C80', new Sys.UI.Point(105, 111)), new SP.Application.UI.MappedColor('#FF0066', new Sys.UI.Point(119, 111)), new SP.Application.UI.MappedColor('#D60093', new Sys.UI.Point(133, 111)), new SP.Application.UI.MappedColor('#993366', new Sys.UI.Point(147, 111)), new SP.Application.UI.MappedColor('#808000', new Sys.UI.Point(28, 123)), new SP.Application.UI.MappedColor('#CCCC00', new Sys.UI.Point(42, 123)), new SP.Application.UI.MappedColor('#FFFF00', new Sys.UI.Point(56, 123)), new SP.Application.UI.MappedColor('#FFCC00', new Sys.UI.Point(70, 123)), new SP.Application.UI.MappedColor('#FF9933', new Sys.UI.Point(84, 123)), new SP.Application.UI.MappedColor('#FF6600', new Sys.UI.Point(98, 123)), new SP.Application.UI.MappedColor('#FF5050', new Sys.UI.Point(112, 123)), new SP.Application.UI.MappedColor('#CC0066', new Sys.UI.Point(126, 123)), new SP.Application.UI.MappedColor('#660033', new Sys.UI.Point(140, 123)), new SP.Application.UI.MappedColor('#996633', new Sys.UI.Point(35, 135)), new SP.Application.UI.MappedColor('#CC9900', new Sys.UI.Point(49, 135)), new SP.Application.UI.MappedColor('#FF9900', new Sys.UI.Point(63, 135)), new SP.Application.UI.MappedColor('#CC6600', new Sys.UI.Point(77, 135)), new SP.Application.UI.MappedColor('#FF3300', new Sys.UI.Point(91, 135)), new SP.Application.UI.MappedColor('#FF0000', new Sys.UI.Point(105, 135)), new SP.Application.UI.MappedColor('#CC0000', new Sys.UI.Point(119, 135)), new SP.Application.UI.MappedColor('#990033', new Sys.UI.Point(133, 135)), new SP.Application.UI.MappedColor('#663300', new Sys.UI.Point(42, 147)), new SP.Application.UI.MappedColor('#996600', new Sys.UI.Point(56, 147)), new SP.Application.UI.MappedColor('#CC3300', new Sys.UI.Point(70, 147)), new SP.Application.UI.MappedColor('#993300', new Sys.UI.Point(84, 147)), new SP.Application.UI.MappedColor('#990000', new Sys.UI.Point(98, 147)), new SP.Application.UI.MappedColor('#800000', new Sys.UI.Point(112, 147)), new SP.Application.UI.MappedColor('#A50021', new Sys.UI.Point(126, 147)), new SP.Application.UI.MappedColor('#F8F8F8', new Sys.UI.Point(35, 175)), new SP.Application.UI.MappedColor('#DDDDDD', new Sys.UI.Point(49, 175)), new SP.Application.UI.MappedColor('#B2B2B2', new Sys.UI.Point(63, 175)), new SP.Application.UI.MappedColor('#808080', new Sys.UI.Point(77, 175)), new SP.Application.UI.MappedColor('#5F5F5F', new Sys.UI.Point(91, 175)), new SP.Application.UI.MappedColor('#333333', new Sys.UI.Point(105, 175)), new SP.Application.UI.MappedColor('#1C1C1C', new Sys.UI.Point(119, 175)), new SP.Application.UI.MappedColor('#080808', new Sys.UI.Point(133, 175)), new SP.Application.UI.MappedColor('#EAEAEA', new Sys.UI.Point(42, 187)), new SP.Application.UI.MappedColor('#C0C0C0', new Sys.UI.Point(56, 187)), new SP.Application.UI.MappedColor('#969696', new Sys.UI.Point(70, 187)), new SP.Application.UI.MappedColor('#777777', new Sys.UI.Point(84, 187)), new SP.Application.UI.MappedColor('#4D4D4D', new Sys.UI.Point(98, 187)), new SP.Application.UI.MappedColor('#292929', new Sys.UI.Point(112, 187)), new SP.Application.UI.MappedColor('#111111', new Sys.UI.Point(126, 187))];
};
SP.Application.UI.MoreColorsPicker.prototype = {
    $1b_2: null,
    $3Z_2: false,
    $M_2: null,
    $4Y_2: null,
    $3I_2: null,
    $3K_2: null,
    $1p_2: null,
    $1q_2: null,
    initialize: function SP_Application_UI_MoreColorsPicker$initialize() {
        Sys.Component.prototype.initialize.call(this);
        this.$1b_2 = ((this.get_element()).getElementsByTagName('map'))[0];
        this.$4Y_2 = ((this.get_element()).getElementsByTagName('input'))[0];
        this.$M_2 = ((this.get_element()).getElementsByTagName('input'))[1];
        this.$M_2.focus();
        this.$1q_2 = this.$$d_$57_2;
        $addHandler(this.$M_2, 'blur', this.$1q_2);
        var $v_0 = (this.get_element()).getElementsByTagName('div');

        for (var $v_1 = 0; $v_1 < $v_0.length; ++$v_1) {
            if (Sys.UI.DomElement.containsCssClass($v_0[$v_1], 'new')) {
                this.$3I_2 = $v_0[$v_1];
            }
            else if (Sys.UI.DomElement.containsCssClass($v_0[$v_1], 'old')) {
                this.$3K_2 = $v_0[$v_1];
            }
        }
        this.$1p_2 = this.$$d_$56_2;
        SP.Application.UI.MoreColorsPicker.$4x();
        if (!(this.$1b_2.getElementsByTagName('area')).length) {
            for (var $v_3 = 0; $v_3 < SP.Application.UI.MoreColorsPicker.$i.length; ++$v_3) {
                this.$3f_2(SP.Application.UI.MoreColorsPicker.$i[$v_3]);
            }
            var $v_2 = new SP.Application.UI.MappedColor('#000000', new Sys.UI.Point(154, 175));

            $v_2.$x_0 = true;
            this.$3f_2($v_2);
        }
    },
    $3f_2: function SP_Application_UI_MoreColorsPicker$$3f_2($p0) {
        var $v_0 = document.createElement('area');

        $v_0.setAttribute('alt', $p0.$v_0.toString());
        $v_0.setAttribute('value', $p0.$v_0.toString());
        $v_0.setAttribute('shape', 'poly');
        $v_0.setAttribute('coords', $p0.buildCoordsAttributeValue());
        $v_0.setAttribute('href', '#');
        $addHandler($v_0, 'click', this.$1p_2);
        this.$1b_2.appendChild($v_0);
    },
    dispose: function SP_Application_UI_MoreColorsPicker$dispose() {
        try {
            $removeHandler(this.$M_2, 'blur', this.$1q_2);
            var $v_0 = this.$1b_2.getElementsByTagName('area');

            for (var $v_1 = 0; $v_1 < $v_0.length; ++$v_1) {
                $removeHandler($v_0[$v_1], 'click', this.$1p_2);
            }
        }
        finally {
            Sys.Component.prototype.dispose.call(this);
        }
    },
    $57_2: function SP_Application_UI_MoreColorsPicker$$57_2($p0) {
        this.set_colorValue(this.$M_2.value);
    },
    $56_2: function SP_Application_UI_MoreColorsPicker$$56_2($p0) {
        var $v_0 = $p0.target;

        this.set_colorValue($v_0.getAttribute('value'));
        $p0.preventDefault();
    },
    get_colorValue: function SP_Application_UI_MoreColorsPicker$get_colorValue() {
        return this.$M_2.value;
    },
    set_colorValue: function SP_Application_UI_MoreColorsPicker$set_colorValue(value) {
        if (!this.$3Z_2) {
            this.$3K_2.style.backgroundColor = value;
            this.$3K_2.title = value;
            this.$4Y_2.value = value;
            this.$3Z_2 = true;
        }
        this.$3I_2.style.backgroundColor = value;
        this.$3I_2.title = value;
        this.$M_2.value = value;
        this.raisePropertyChanged('colorValue');
        return value;
    }
};
SP.Application.UI.MappedColor = function SP_Application_UI_MappedColor($p0, $p1) {
    this.$v_0 = $p0;
    this.$o_0 = $p1;
};
SP.Application.UI.MappedColor.$4y = function SP_Application_UI_MappedColor$$4y() {
    if (SP.Application.UI.MappedColor.$P) {
        return;
    }
    SP.Application.UI.MappedColor.$P = [new Sys.UI.Point(0, 0), new Sys.UI.Point(2, 0), new Sys.UI.Point(2, -1), new Sys.UI.Point(4, -1), new Sys.UI.Point(4, -2), new Sys.UI.Point(6, -2), new Sys.UI.Point(6, -3), new Sys.UI.Point(8, -3), new Sys.UI.Point(8, -2), new Sys.UI.Point(10, -2), new Sys.UI.Point(10, -1), new Sys.UI.Point(12, -1), new Sys.UI.Point(12, 0), new Sys.UI.Point(13, 0), new Sys.UI.Point(13, 8), new Sys.UI.Point(12, 8), new Sys.UI.Point(12, 9), new Sys.UI.Point(10, 9), new Sys.UI.Point(10, 10), new Sys.UI.Point(8, 10), new Sys.UI.Point(8, 11), new Sys.UI.Point(6, 11), new Sys.UI.Point(6, 10), new Sys.UI.Point(4, 10), new Sys.UI.Point(4, 9), new Sys.UI.Point(2, 9), new Sys.UI.Point(2, 8), new Sys.UI.Point(0, 8)];
};
SP.Application.UI.MappedColor.$4z = function SP_Application_UI_MappedColor$$4z() {
    if (SP.Application.UI.MappedColor.$y) {
        return;
    }
    SP.Application.UI.MappedColor.$y = [new Sys.UI.Point(0, 0), new Sys.UI.Point(2, 0), new Sys.UI.Point(2, -1), new Sys.UI.Point(4, -1), new Sys.UI.Point(4, -2), new Sys.UI.Point(6, -2), new Sys.UI.Point(6, -3), new Sys.UI.Point(7, -3), new Sys.UI.Point(7, -4), new Sys.UI.Point(9, -4), new Sys.UI.Point(9, -5), new Sys.UI.Point(11, -5), new Sys.UI.Point(11, -6), new Sys.UI.Point(13, -6), new Sys.UI.Point(13, -7), new Sys.UI.Point(15, -7), new Sys.UI.Point(15, -6), new Sys.UI.Point(17, -6), new Sys.UI.Point(17, -5), new Sys.UI.Point(19, -5), new Sys.UI.Point(19, -4), new Sys.UI.Point(20, -4), new Sys.UI.Point(20, -3), new Sys.UI.Point(22, -3), new Sys.UI.Point(22, -2), new Sys.UI.Point(24, -2), new Sys.UI.Point(24, -1), new Sys.UI.Point(26, -1), new Sys.UI.Point(26, 0), new Sys.UI.Point(27, 0), new Sys.UI.Point(27, 16), new Sys.UI.Point(26, 16), new Sys.UI.Point(26, 17), new Sys.UI.Point(24, 17), new Sys.UI.Point(24, 18), new Sys.UI.Point(22, 18), new Sys.UI.Point(22, 19), new Sys.UI.Point(20, 19), new Sys.UI.Point(20, 20), new Sys.UI.Point(19, 20), new Sys.UI.Point(19, 21), new Sys.UI.Point(17, 21), new Sys.UI.Point(17, 22), new Sys.UI.Point(15, 22), new Sys.UI.Point(15, 23), new Sys.UI.Point(13, 23), new Sys.UI.Point(13, 22), new Sys.UI.Point(11, 22), new Sys.UI.Point(11, 21), new Sys.UI.Point(9, 21), new Sys.UI.Point(9, 20), new Sys.UI.Point(7, 20), new Sys.UI.Point(7, 19), new Sys.UI.Point(6, 19), new Sys.UI.Point(6, 18), new Sys.UI.Point(4, 18), new Sys.UI.Point(4, 17), new Sys.UI.Point(2, 17), new Sys.UI.Point(2, 16), new Sys.UI.Point(0, 16)];
};
SP.Application.UI.MappedColor.prototype = {
    $v_0: null,
    $o_0: null,
    $x_0: false,
    get_hexColor: function SP_Application_UI_MappedColor$get_hexColor() {
        return this.$v_0;
    },
    get_isLarge: function SP_Application_UI_MappedColor$get_isLarge() {
        return this.$x_0;
    },
    set_isLarge: function SP_Application_UI_MappedColor$set_isLarge($p0) {
        this.$x_0 = $p0;
        return $p0;
    },
    buildCoordsAttributeValue: function SP_Application_UI_MappedColor$buildCoordsAttributeValue() {
        SP.Application.UI.MappedColor.$4y();
        SP.Application.UI.MappedColor.$4z();
        var $v_0 = '';

        if (SP.Application.UI.MappedColor.$P.length > 0) {
            var $v_1 = SP.Application.UI.MappedColor.$P[0];

            $v_0 += ($v_1.x + this.$o_0.x).toString() + ',' + ($v_1.y + this.$o_0.y).toString();
            var $v_2 = this.$x_0 ? SP.Application.UI.MappedColor.$y : SP.Application.UI.MappedColor.$P;

            for (var $v_3 = 1; $v_3 < $v_2.length; ++$v_3) {
                $v_1 = $v_2[$v_3];
                $v_0 += ' ' + ($v_1.x + this.$o_0.x).toString() + ',' + ($v_1.y + this.$o_0.y).toString();
            }
        }
        return $v_0;
    }
};
SP.Application.UI.MoreColorsPage = function SP_Application_UI_MoreColorsPage(e) {
    this.$$d_$54_2 = Function.createDelegate(this, this.$54_2);
    this.$$d_$59_2 = Function.createDelegate(this, this.$59_2);
    this.$$d_$5A_2 = Function.createDelegate(this, this.$5A_2);
    SP.Application.UI.MoreColorsPage.initializeBase(this, [e]);
};
SP.Application.UI.MoreColorsPage.prototype = {
    $m_2: null,
    $1a_2: null,
    $1n_2: null,
    $4c_2: null,
    $3J_2: null,
    $3Y_2: null,
    initialize: function SP_Application_UI_MoreColorsPage$initialize() {
        Sys.Component.prototype.initialize.call(this);
        this.$1a_2 = $get('OkButton');
        this.$1n_2 = $get('CancelButton');
        this.$4c_2 = this.$$d_$5A_2;
        this.$m_2.add_propertyChanged(this.$4c_2);
        var $v_0 = window.self.frameElement;

        if ($v_0) {
            var $v_1 = $v_0.dialogArgs;

            if ($v_1) {
                this.$m_2.set_colorValue($v_1);
            }
        }
        this.$1a_2.setAttribute('onclick', '');
        this.$3J_2 = this.$$d_$59_2;
        $addHandler(this.$1a_2, 'click', this.$3J_2);
        this.$1n_2.setAttribute('onclick', '');
        this.$3Y_2 = this.$$d_$54_2;
        $addHandler(this.$1n_2, 'click', this.$3Y_2);
    },
    dispose: function SP_Application_UI_MoreColorsPage$dispose() {
        try {
            $removeHandler(this.$1a_2, 'click', this.$3J_2);
        }
        finally {
            Sys.Component.prototype.dispose.call(this);
        }
    },
    $5A_2: function SP_Application_UI_MoreColorsPage$$5A_2($p0, $p1) {
        if ($p1.get_propertyName() === 'colorValue' && SP.UI.ModalDialog.get_childDialog()) {
            (SP.UI.ModalDialog.get_childDialog()).set_returnValue(this.$m_2.get_colorValue());
        }
    },
    $59_2: function SP_Application_UI_MoreColorsPage$$59_2($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
        if (SP.UI.ModalDialog.get_childDialog()) {
            (SP.UI.ModalDialog.get_childDialog()).close(1);
        }
    },
    $54_2: function SP_Application_UI_MoreColorsPage$$54_2($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
        if (SP.UI.ModalDialog.get_childDialog()) {
            (SP.UI.ModalDialog.get_childDialog()).close(0);
        }
    },
    get_moreColorsPicker: function SP_Application_UI_MoreColorsPage$get_moreColorsPicker() {
        return this.$m_2;
    },
    set_moreColorsPicker: function SP_Application_UI_MoreColorsPage$set_moreColorsPicker(value) {
        this.$m_2 = value;
        return value;
    }
};
SP.Application.UI.ThemeWebPage = function SP_Application_UI_ThemeWebPage(e) {
    this.$$d_onThemeSelectionChanged = Function.createDelegate(this, this.onThemeSelectionChanged);
    this.$u_2 = new Sys.EventHandlerList();
    SP.Application.UI.ThemeWebPage.initializeBase(this, [e]);
};
SP.Application.UI.ThemeWebPage.prototype = {
    $q_2: null,
    $1f_2: null,
    $3Q_2: null,
    add_themeDisplayUpdated: function SP_Application_UI_ThemeWebPage$add_themeDisplayUpdated(value) {
        this.$u_2.addHandler('__ThemeDisplayUpdated', value);
    },
    remove_themeDisplayUpdated: function SP_Application_UI_ThemeWebPage$remove_themeDisplayUpdated(value) {
        this.$u_2.removeHandler('__ThemeDisplayUpdated', value);
    },
    $5G_2: function SP_Application_UI_ThemeWebPage$$5G_2() {
        var $v_0 = this.$u_2.getHandler('__ThemeDisplayUpdated');

        if ($v_0) {
            $v_0(null, Sys.EventArgs.Empty);
        }
    },
    initialize: function SP_Application_UI_ThemeWebPage$initialize() {
        Sys.Component.prototype.initialize.call(this);
        this.$1f_2 = $get('theme-display');
        this.$3Q_2 = this.$$d_onThemeSelectionChanged;
        $addHandler(this.$q_2, 'change', this.$3Q_2);
    },
    dispose: function SP_Application_UI_ThemeWebPage$dispose() {
        try {
            $removeHandler(this.$q_2, 'change', this.$3Q_2);
        }
        finally {
            Sys.Component.prototype.dispose.call(this);
        }
    },
    onThemeSelectionChanged: function SP_Application_UI_ThemeWebPage$onThemeSelectionChanged(evt) {
        this.updateThemeDisplay();
    },
    updateThemeDisplay: function SP_Application_UI_ThemeWebPage$updateThemeDisplay() {
        var $v_0 = window.themes[this.$q_2.value];
        var $v_1 = this.$1f_2.getElementsByTagName('li');

        for (var $v_5 = 0; $v_5 < $v_1.length; ++$v_5) {
            if (Sys.UI.DomElement.containsCssClass($v_1[$v_5], 'color')) {
                var $v_6 = null;

                if ($v_0) {
                    $v_6 = $v_0[$v_1[$v_5].getAttribute('themecolor')].Shades;
                }
                var $v_7 = $v_1[$v_5].getElementsByTagName('li');

                for (var $v_8 = 0; $v_8 < $v_7.length; ++$v_8) {
                    if ($v_6) {
                        $v_7[$v_8].style.backgroundColor = $v_6[$v_8].HtmlColor;
                    }
                    else {
                        $v_7[$v_8].style.backgroundColor = '';
                    }
                }
            }
        }
        var $v_2 = this.$1f_2.getElementsByTagName('a');

        $v_2[0].style.color = $v_0 ? $v_0.HyperlinkColor.DefaultColor.HtmlColor : '';
        $v_2[1].style.color = $v_0 ? $v_0.FollowedHyperlinkColor.DefaultColor.HtmlColor : '';
        var $v_3 = this.$1f_2.getElementsByTagName('li');

        $v_3[$v_3.length - 2].style.fontFamily = $v_0 ? $v_0.MajorFont.LatinFont : '';
        $v_3[$v_3.length - 1].style.fontFamily = $v_0 ? $v_0.MinorFont.LatinFont : '';
        var $v_4 = $get('accdesc');

        if (null !== $v_4) {
            $v_4.innerHTML = $v_0 ? SP.Utilities.HttpUtility.htmlEncode($v_0.AccessibleDescription) : '';
        }
        this.$5G_2();
    },
    get_thmxThemes: function SP_Application_UI_ThemeWebPage$get_thmxThemes() {
        return this.$q_2;
    },
    set_thmxThemes: function SP_Application_UI_ThemeWebPage$set_thmxThemes(value) {
        this.$q_2 = value;
        return value;
    }
};
SP.Application.UI.WikiPageNameInPlaceEditor = function SP_Application_UI_WikiPageNameInPlaceEditor(ownerDoc, displayElemId, editElemId, editTextBoxId) {
    this.$$d_$55_0 = Function.createDelegate(this, this.$55_0);
    this.$$d_$5E_0 = Function.createDelegate(this, this.$5E_0);
    this.$$d_$58_0 = Function.createDelegate(this, this.$58_0);
    this.$1K_0 = ownerDoc;
    this.$D_0 = this.$1K_0.getElementById(displayElemId);
    this.$2H_0 = this.$1K_0.getElementById(editElemId);
    this.$T_0 = this.$1K_0.getElementById(editTextBoxId);
    this.$3v_0 = this.$$d_$58_0;
    this.$4S_0 = this.$$d_$5E_0;
    this.$3k_0 = this.$$d_$55_0;
};
SP.Application.UI.WikiPageNameInPlaceEditor.prototype = {
    $1K_0: null,
    $D_0: null,
    $2H_0: null,
    $T_0: null,
    $47_0: null,
    $3s_0: false,
    $3v_0: null,
    $4S_0: null,
    $3k_0: null,
    editingPageCallback: function SP_Application_UI_WikiPageNameInPlaceEditor$editingPageCallback() {
        this.$47_0 = this.$T_0.value.trim();
    },
    $58_0: function SP_Application_UI_WikiPageNameInPlaceEditor$$58_0($p0) {
        this.$D_0.className = 'ms-WikiPageNameEditor-DisplayHover';
    },
    $5E_0: function SP_Application_UI_WikiPageNameInPlaceEditor$$5E_0($p0) {
        this.$D_0.className = 'ms-WikiPageNameEditor-DisplayClickable';
    },
    $55_0: function SP_Application_UI_WikiPageNameInPlaceEditor$$55_0($p0) {
        this.$D_0.style.display = 'none';
        this.$2H_0.style.display = 'inline';
        this.$T_0.focus();
    },
    savingPageCallback: function SP_Application_UI_WikiPageNameInPlaceEditor$savingPageCallback() {
        this.$T_0.value = this.$T_0.value.trim();
        if (this.$47_0 === this.$T_0.value) {
            if (this.$3s_0) {
                $removeHandler(this.$D_0, 'mouseover', this.$3v_0);
                $removeHandler(this.$D_0, 'mouseout', this.$4S_0);
                $removeHandler(this.$D_0, 'click', this.$3k_0);
                this.$3s_0 = false;
            }
            this.$D_0.className = 'ms-WikiPageNameEditor-Display';
            this.$D_0.style.display = 'inline';
            this.$2H_0.style.display = 'none';
        }
    }
};
Type.registerNamespace('SP.UI.ApplicationPages');
SP.UI.ApplicationPages.ISelectorComponent = function() {
};
SP.UI.ApplicationPages.ISelectorComponent.registerInterface('SP.UI.ApplicationPages.ISelectorComponent');
SP.UI.ApplicationPages.SelectorType = function() {
};
SP.UI.ApplicationPages.SelectorType.prototype = {
    none: 0,
    resource: 1,
    people: 2,
    people_And_Resource: 3,
    event: 4
};
SP.UI.ApplicationPages.SelectorType.registerEnum('SP.UI.ApplicationPages.SelectorType', false);
SP.UI.ApplicationPages.ICalendarController = function() {
};
SP.UI.ApplicationPages.ICalendarController.registerInterface('SP.UI.ApplicationPages.ICalendarController');
SP.UI.ApplicationPages.CalendarScope = function() {
};
SP.UI.ApplicationPages.CalendarScope.prototype = {
    nothing: 0,
    monthly: 1,
    weeklyGroup: 2,
    daily: 3,
    weekly: 4,
    dailyGroup: 5
};
SP.UI.ApplicationPages.CalendarScope.registerEnum('SP.UI.ApplicationPages.CalendarScope', false);
SP.UI.ApplicationPages.SelectorSelectionEventArgs = function SP_UI_ApplicationPages_SelectorSelectionEventArgs(entities) {
    SP.UI.ApplicationPages.SelectorSelectionEventArgs.initializeBase(this);
    this.$3p_1 = entities;
};
SP.UI.ApplicationPages.SelectorSelectionEventArgs.prototype = {
    $3p_1: null,
    get_entities: function SP_UI_ApplicationPages_SelectorSelectionEventArgs$get_entities() {
        return this.$3p_1;
    }
};
SP.UI.ApplicationPages.CalendarSelector = function SP_UI_ApplicationPages_CalendarSelector() {
    this.$$d_$4p_1 = Function.createDelegate(this, this.$4p_1);
    this.$X_1 = {};
    SP.UI.ApplicationPages.CalendarSelector.initializeBase(this);
};
SP.UI.ApplicationPages.CalendarSelector.instance = function SP_UI_ApplicationPages_CalendarSelector$instance() {
    return SP.UI.ApplicationPages.CalendarSelector.$4e;
};
SP.UI.ApplicationPages.CalendarSelector.prototype = {
    registerSelector: function SP_UI_ApplicationPages_CalendarSelector$registerSelector(selector) {
        selector.set_callback(this.$$d_$4p_1);
        this.$X_1[this.$1t_1(selector.get_componentType(), selector.get_scopeKey())] = selector;
    },
    getSelector: function SP_UI_ApplicationPages_CalendarSelector$getSelector(type, scopeKey) {
        var $v_0 = this.$X_1[this.$1t_1(type, scopeKey)];

        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = this.$X_1[this.$1t_1(3, scopeKey)];
        }
        return $v_0;
    },
    addHandler: function SP_UI_ApplicationPages_CalendarSelector$addHandler(scopeKey, people, resource, handler) {
        (this.get_events()).addHandler(scopeKey, handler);
        var $v_0 = 0;

        if (people) {
            $v_0 |= 2;
        }
        if (resource) {
            $v_0 |= 1;
        }
        if (!people && !resource) {
            $v_0 |= 4;
        }
        this.$X_1[scopeKey] = $v_0;
        this.$1r_1(scopeKey, handler);
    },
    revertTo: function SP_UI_ApplicationPages_CalendarSelector$revertTo(scopeKey, ent) {
        var $v_0 = this.getSelector(1, scopeKey);
        var $v_1 = this.getSelector(2, scopeKey);

        if ($v_0) {
            $v_0.revertTo(ent);
        }
        if ($v_1) {
            $v_1.revertTo(ent);
        }
        var $v_2 = this.$3d_1(scopeKey);

        this.$1r_1(scopeKey, $v_2);
    },
    removeEntity: function SP_UI_ApplicationPages_CalendarSelector$removeEntity(scopeKey, ent) {
        var $v_0 = this.getSelector(1, scopeKey);
        var $v_1 = this.getSelector(2, scopeKey);

        if ($v_0) {
            $v_0.removeEntity(ent);
        }
        if ($v_1) {
            $v_1.removeEntity(ent);
        }
    },
    $4f_1: function SP_UI_ApplicationPages_CalendarSelector$$4f_1($p0) {
        var $v_0 = new SP.UI.ApplicationPages.ResolveEntity();

        $v_0.entityType = '0';
        Array.add($p0, $v_0);
    },
    $4p_1: function SP_UI_ApplicationPages_CalendarSelector$$4p_1($p0, $p1) {
        var $v_0 = $p0;
        var $v_1 = this.$3d_1($v_0.get_scopeKey());

        this.$1r_1($v_0.get_scopeKey(), $v_1);
    },
    $1r_1: function SP_UI_ApplicationPages_CalendarSelector$$1r_1($p0, $p1) {
        var $v_0 = [];

        if (this.$1o_1($p0, 4)) {
            this.$4f_1($v_0);
        }
        else {
            var $v_1 = this.getSelector(3, $p0);

            if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
                Array.addRange($v_0, $v_1.get_selectedEntities());
            }
            else {
                if (this.$1o_1($p0, 2)) {
                    $v_1 = this.getSelector(2, $p0);
                    if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
                        Array.addRange($v_0, $v_1.get_selectedEntities());
                    }
                }
                if (this.$1o_1($p0, 1)) {
                    $v_1 = this.getSelector(1, $p0);
                    if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
                        Array.addRange($v_0, $v_1.get_selectedEntities());
                    }
                }
            }
        }
        if ($p1) {
            $p1(this, new SP.UI.ApplicationPages.SelectorSelectionEventArgs($v_0));
        }
    },
    $3d_1: function SP_UI_ApplicationPages_CalendarSelector$$3d_1($p0) {
        return (this.get_events()).getHandler($p0);
    },
    $1o_1: function SP_UI_ApplicationPages_CalendarSelector$$1o_1($p0, $p1) {
        var $v_0 = this.$X_1[$p0];

        return !!($v_0 & $p1);
    },
    $1t_1: function SP_UI_ApplicationPages_CalendarSelector$$1t_1($p0, $p1) {
        switch ($p0) {
        case 2:
            return '${PPL}_' + $p1;
        case 1:
            return '${RES}_' + $p1;
        case 3:
            return '${PAR}_' + $p1;
        }
        return null;
    }
};
SP.UI.ApplicationPages.BaseSelectorComponent = function SP_UI_ApplicationPages_BaseSelectorComponent(key, type) {
    this.$8_0 = key;
    this.$4R_0 = type;
    this.$B_0 = [];
    var $v_0 = SP.UI.ApplicationPages.CalendarSelector.instance();

    $v_0.registerSelector(this);
};
SP.UI.ApplicationPages.BaseSelectorComponent.prototype = {
    $8_0: null,
    $B_0: null,
    $23_0: null,
    $4R_0: 0,
    get_scopeKey: function SP_UI_ApplicationPages_BaseSelectorComponent$get_scopeKey() {
        return this.$8_0;
    },
    get_componentType: function SP_UI_ApplicationPages_BaseSelectorComponent$get_componentType() {
        return this.$4R_0;
    },
    get_selectedEntities: function SP_UI_ApplicationPages_BaseSelectorComponent$get_selectedEntities() {
        return this.$B_0;
    },
    set_selectedEntities: function SP_UI_ApplicationPages_BaseSelectorComponent$set_selectedEntities(value) {
        this.$B_0 = value;
        return value;
    },
    get_callback: function SP_UI_ApplicationPages_BaseSelectorComponent$get_callback() {
        return this.$23_0;
    },
    set_callback: function SP_UI_ApplicationPages_BaseSelectorComponent$set_callback(value) {
        this.$23_0 = value;
        return value;
    },
    revertTo: function SP_UI_ApplicationPages_BaseSelectorComponent$revertTo(ent) {
        Array.clear(this.$B_0);
        if (ent) {
            Array.add(this.$B_0, ent);
        }
    },
    removeEntity: function SP_UI_ApplicationPages_BaseSelectorComponent$removeEntity(ent) {
        for (var $v_0 = 0; $v_0 < this.$B_0.length; $v_0++) {
            var $v_1 = this.$B_0[$v_0];

            if (ent.get_key() === $v_1.get_key()) {
                Array.removeAt(this.$B_0, $v_0);
                return;
            }
        }
    },
    setEntity: function SP_UI_ApplicationPages_BaseSelectorComponent$setEntity(ent) {
        Array.clear(this.$B_0);
        Array.add(this.$B_0, ent);
        this.$23_0(this, new Sys.EventArgs());
    }
};
SP.UI.ApplicationPages.CalendarInstanceRepository = function SP_UI_ApplicationPages_CalendarInstanceRepository() {
};
SP.UI.ApplicationPages.CalendarInstanceRepository.registerInstance = function SP_UI_ApplicationPages_CalendarInstanceRepository$registerInstance(instanceId, contoller) {
    SP.UI.ApplicationPages.CalendarInstanceRepository.$w[instanceId] = contoller;
};
SP.UI.ApplicationPages.CalendarInstanceRepository.lookupInstance = function SP_UI_ApplicationPages_CalendarInstanceRepository$lookupInstance(instanceId) {
    return SP.UI.ApplicationPages.CalendarInstanceRepository.$w[instanceId];
};
SP.UI.ApplicationPages.CalendarInstanceRepository.firstInstance = function SP_UI_ApplicationPages_CalendarInstanceRepository$firstInstance() {
    var $$dict_0 = SP.UI.ApplicationPages.CalendarInstanceRepository.$w;

    for (var $$key_1 in $$dict_0) {
        var $v_0 = {
            key: $$key_1,
            value: $$dict_0[$$key_1]
        };

        return $v_0.value;
    }
    return null;
};
SP.UI.ApplicationPages.ResolveEntity = function SP_UI_ApplicationPages_ResolveEntity() {
};
SP.UI.ApplicationPages.ResolveEntity.prototype = {
    entityType: null,
    displayName: null,
    email: null,
    accountName: null,
    id: null,
    members: null,
    needResolve: false,
    isGroup: false,
    $8_0: null,
    get_key: function SP_UI_ApplicationPages_ResolveEntity$get_key() {
        if (this.$8_0) {
            return this.$8_0;
        }
        switch (this.entityType) {
        case '0':
            this.$8_0 = '0;#0';
            break;
        case '1':
            if (this.isGroup) {
                this.$8_0 = '1;#' + this.id;
            }
            else if (this.email) {
                this.$8_0 = '1;#' + this.accountName + ';' + this.email;
            }
            else {
                this.$8_0 = '1;#' + this.accountName;
            }
            break;
        case '2':
            this.$8_0 = '2;#' + this.id;
            break;
        case '3':
        default:
            this.$8_0 = '3;#' + this.email;
            break;
        }
        return this.$8_0;
    }
};
SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters = function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters() {
    SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters.initializeBase(this);
};
SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters.prototype = {
    $1v_1: false,
    $1w_1: false,
    $1x_1: false,
    $2I_1: null,
    $2S_1: false,
    $2f_1: 0,
    $2l_1: 0,
    $k_1: 0,
    $2n_1: null,
    $2u_1: false,
    $2z_1: 0,
    $37_1: 0,
    $38_1: false,
    $F_1: null,
    $3E_1: null,
    get_allowEmailAddresses: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$get_allowEmailAddresses() {
        return this.$1v_1;
    },
    set_allowEmailAddresses: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$set_allowEmailAddresses(value) {
        this.$1v_1 = value;
        return value;
    },
    get_allowMultipleEntities: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$get_allowMultipleEntities() {
        return this.$1w_1;
    },
    set_allowMultipleEntities: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$set_allowMultipleEntities(value) {
        this.$1w_1 = value;
        return value;
    },
    get_allUrlZones: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$get_allUrlZones() {
        return this.$1x_1;
    },
    set_allUrlZones: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$set_allUrlZones(value) {
        this.$1x_1 = value;
        return value;
    },
    get_enabledClaimProviders: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$get_enabledClaimProviders() {
        return this.$2I_1;
    },
    set_enabledClaimProviders: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$set_enabledClaimProviders(value) {
        this.$2I_1 = value;
        return value;
    },
    get_forceClaims: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$get_forceClaims() {
        return this.$2S_1;
    },
    set_forceClaims: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$set_forceClaims(value) {
        this.$2S_1 = value;
        return value;
    },
    get_maximumEntitySuggestions: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$get_maximumEntitySuggestions() {
        return this.$2f_1;
    },
    set_maximumEntitySuggestions: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$set_maximumEntitySuggestions(value) {
        this.$2f_1 = value;
        return value;
    },
    get_principalSource: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$get_principalSource() {
        return this.$2l_1;
    },
    set_principalSource: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$set_principalSource(value) {
        this.$2l_1 = value;
        return value;
    },
    get_principalType: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$get_principalType() {
        return this.$k_1;
    },
    set_principalType: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$set_principalType(value) {
        this.$k_1 = value;
        return value;
    },
    get_queryString: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$get_queryString() {
        return this.$2n_1;
    },
    set_queryString: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$set_queryString(value) {
        this.$2n_1 = value;
        return value;
    },
    get_required: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$get_required() {
        return this.$2u_1;
    },
    set_required: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$set_required(value) {
        this.$2u_1 = value;
        return value;
    },
    get_sharePointGroupID: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$get_sharePointGroupID() {
        return this.$2z_1;
    },
    set_sharePointGroupID: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$set_sharePointGroupID(value) {
        this.$2z_1 = value;
        return value;
    },
    get_urlZone: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$get_urlZone() {
        return this.$37_1;
    },
    set_urlZone: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$set_urlZone(value) {
        this.$37_1 = value;
        return value;
    },
    get_urlZoneSpecified: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$get_urlZoneSpecified() {
        return this.$38_1;
    },
    set_urlZoneSpecified: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$set_urlZoneSpecified(value) {
        this.$38_1 = value;
        return value;
    },
    get_web: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$get_web() {
        return this.$F_1;
    },
    set_web: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$set_web(value) {
        this.$F_1 = value;
        return value;
    },
    get_webApplicationID: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$get_webApplicationID() {
        return this.$3E_1;
    },
    set_webApplicationID: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$set_webApplicationID(value) {
        this.$3E_1 = value;
        return value;
    },
    get_typeId: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$get_typeId() {
        return '{ac9358c6-e9b1-4514-bf6e-106acbfb19ce}';
    },
    writeToXml: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['AllowEmailAddresses', 'AllowMultipleEntities', 'AllUrlZones', 'EnabledClaimProviders', 'ForceClaims', 'MaximumEntitySuggestions', 'PrincipalSource', 'PrincipalType', 'QueryString', 'Required', 'SharePointGroupID', 'UrlZone', 'UrlZoneSpecified', 'Web', 'WebApplicationID'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_UI_ApplicationPages_ClientPeoplePickerQueryParameters$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AllowEmailAddresses;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1v_1 = $v_0;
            delete parentNode.AllowEmailAddresses;
        }
        $v_0 = parentNode.AllowMultipleEntities;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1w_1 = $v_0;
            delete parentNode.AllowMultipleEntities;
        }
        $v_0 = parentNode.AllUrlZones;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1x_1 = $v_0;
            delete parentNode.AllUrlZones;
        }
        $v_0 = parentNode.EnabledClaimProviders;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2I_1 = $v_0;
            delete parentNode.EnabledClaimProviders;
        }
        $v_0 = parentNode.ForceClaims;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2S_1 = $v_0;
            delete parentNode.ForceClaims;
        }
        $v_0 = parentNode.MaximumEntitySuggestions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2f_1 = $v_0;
            delete parentNode.MaximumEntitySuggestions;
        }
        $v_0 = parentNode.PrincipalSource;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2l_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.PrincipalSource;
        }
        $v_0 = parentNode.PrincipalType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$k_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.PrincipalType;
        }
        $v_0 = parentNode.QueryString;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2n_1 = $v_0;
            delete parentNode.QueryString;
        }
        $v_0 = parentNode.Required;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2u_1 = $v_0;
            delete parentNode.Required;
        }
        $v_0 = parentNode.SharePointGroupID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2z_1 = $v_0;
            delete parentNode.SharePointGroupID;
        }
        $v_0 = parentNode.UrlZone;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$37_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.UrlZone;
        }
        $v_0 = parentNode.UrlZoneSpecified;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$38_1 = $v_0;
            delete parentNode.UrlZoneSpecified;
        }
        $v_0 = parentNode.Web;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            delete parentNode.Web;
        }
        $v_0 = parentNode.WebApplicationID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3E_1 = $v_0;
            delete parentNode.WebApplicationID;
        }
    }
};
SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface = function SP_UI_ApplicationPages_ClientPeoplePickerWebServiceInterface() {
};
SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.clientPeoplePickerSearchUser = function SP_UI_ApplicationPages_ClientPeoplePickerWebServiceInterface$clientPeoplePickerSearchUser(context, queryParams) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{de2db963-8bab-4fb4-8a58-611aebc5254b}', 'ClientPeoplePickerSearchUser', [queryParams]);

    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.clientPeoplePickerResolveUser = function SP_UI_ApplicationPages_ClientPeoplePickerWebServiceInterface$clientPeoplePickerResolveUser(context, queryParams) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{de2db963-8bab-4fb4-8a58-611aebc5254b}', 'ClientPeoplePickerResolveUser', [queryParams]);

    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.UI.ApplicationPages.PeoplePickerWebServiceInterface = function SP_UI_ApplicationPages_PeoplePickerWebServiceInterface() {
};
SP.UI.ApplicationPages.PeoplePickerWebServiceInterface.getSearchResultsByHierarchy = function SP_UI_ApplicationPages_PeoplePickerWebServiceInterface$getSearchResultsByHierarchy(context, providerID, hierarchyNodeID, entityTypes, contextUrl) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{8a000bc7-5d42-4c47-af0b-3dd25b28d26f}', 'GetSearchResultsByHierarchy', [providerID, hierarchyNodeID, entityTypes, contextUrl]);

    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.UI.ApplicationPages.PeoplePickerWebServiceInterface.getSearchResults = function SP_UI_ApplicationPages_PeoplePickerWebServiceInterface$getSearchResults(context, searchPattern, providerID, hierarchyNodeID, entityTypes) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{8a000bc7-5d42-4c47-af0b-3dd25b28d26f}', 'GetSearchResults', [searchPattern, providerID, hierarchyNodeID, entityTypes]);

    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
Type.registerNamespace('SP.Analytics');
SP.Analytics.EventTypeId = function() {
};
SP.Analytics.EventTypeId.prototype = {
    none: 0,
    first: 1,
    view: 1,
    recommendationView: 2,
    recommendationClick: 3,
    last: 3
};
SP.Analytics.EventTypeId.registerEnum('SP.Analytics.EventTypeId', false);
SP.Analytics.AnalyticsUsageEntry = function SP_Analytics_AnalyticsUsageEntry(context, objectPath) {
    SP.Analytics.AnalyticsUsageEntry.initializeBase(this, [context, objectPath]);
};
SP.Analytics.AnalyticsUsageEntry.logAnalyticsEvent = function SP_Analytics_AnalyticsUsageEntry$logAnalyticsEvent(context, eventTypeId, itemId) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{47228df5-e073-47ca-97a8-a0537b77a1df}', 'LogAnalyticsEvent', [eventTypeId, itemId]);

    context.addQuery($v_0);
};
SP.Analytics.AnalyticsUsageEntry.logAnalyticsEvent2 = function SP_Analytics_AnalyticsUsageEntry$logAnalyticsEvent2(context, eventTypeId, itemId, rollupScopeId, siteId, userId) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{47228df5-e073-47ca-97a8-a0537b77a1df}', 'LogAnalyticsEvent2', [eventTypeId, itemId, rollupScopeId, siteId, userId]);

    context.addQuery($v_0);
};
SP.Analytics.AnalyticsUsageEntry.logAnalyticsAppEvent = function SP_Analytics_AnalyticsUsageEntry$logAnalyticsAppEvent(context, appEventTypeId, itemId) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{47228df5-e073-47ca-97a8-a0537b77a1df}', 'LogAnalyticsAppEvent', [appEventTypeId, itemId]);

    context.addQuery($v_0);
};
SP.Analytics.AnalyticsUsageEntry.logAnalyticsAppEvent2 = function SP_Analytics_AnalyticsUsageEntry$logAnalyticsAppEvent2(context, appEventTypeId, itemId, rollupScopeId, siteId, userId) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{47228df5-e073-47ca-97a8-a0537b77a1df}', 'LogAnalyticsAppEvent2', [appEventTypeId, itemId, rollupScopeId, siteId, userId]);

    context.addQuery($v_0);
};
Type.registerNamespace('SP.BusinessData');
SP.BusinessData.AppBdcCatalog = function SP_BusinessData_AppBdcCatalog(context, objectPath) {
    SP.BusinessData.AppBdcCatalog.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.AppBdcCatalog.prototype = {
    getEntity: function SP_BusinessData_AppBdcCatalog$getEntity(nnamespace, name) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.Entity($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetEntity', [nnamespace, name]));
        return $v_1;
    },
    getLobSystemProperty: function SP_BusinessData_AppBdcCatalog$getLobSystemProperty(lobSystemName, propertyName) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetLobSystemProperty', [lobSystemName, propertyName]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    setLobSystemProperty: function SP_BusinessData_AppBdcCatalog$setLobSystemProperty(lobSystemName, propertyName, propertyValue) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetLobSystemProperty', [lobSystemName, propertyName, propertyValue]);

        $v_0.addQuery($v_1);
    },
    getLobSystemInstanceProperty: function SP_BusinessData_AppBdcCatalog$getLobSystemInstanceProperty(lobSystemName, lobSystemInstanceName, propertyName) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetLobSystemInstanceProperty', [lobSystemName, lobSystemInstanceName, propertyName]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    setLobSystemInstanceProperty: function SP_BusinessData_AppBdcCatalog$setLobSystemInstanceProperty(lobSystemName, lobSystemInstanceName, propertyName, propertyValue) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetLobSystemInstanceProperty', [lobSystemName, lobSystemInstanceName, propertyName, propertyValue]);

        $v_0.addQuery($v_1);
    },
    getConnectionId: function SP_BusinessData_AppBdcCatalog$getConnectionId(lobSystemName, lobSystemInstanceName) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetConnectionId', [lobSystemName, lobSystemInstanceName]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    setConnectionId: function SP_BusinessData_AppBdcCatalog$setConnectionId(lobSystemName, lobSystemInstanceName, connectionId) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetConnectionId', [lobSystemName, lobSystemInstanceName, connectionId]);

        $v_0.addQuery($v_1);
    },
    getPermissibleConnections: function SP_BusinessData_AppBdcCatalog$getPermissibleConnections() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetPermissibleConnections', null);

        $v_0.addQuery($v_2);
        $v_1 = [];
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
};
SP.BusinessData.Entity = function SP_BusinessData_Entity(context, objectPath) {
    SP.BusinessData.Entity.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.Entity.prototype = {
    get_estimatedInstanceCount: function SP_BusinessData_Entity$get_estimatedInstanceCount() {
        this.checkUninitializedProperty('EstimatedInstanceCount');
        return ((this.get_objectData()).get_properties())['EstimatedInstanceCount'];
    },
    get_name: function SP_BusinessData_Entity$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    get_namespace: function SP_BusinessData_Entity$get_namespace() {
        this.checkUninitializedProperty('Namespace');
        return ((this.get_objectData()).get_properties())['Namespace'];
    },
    initPropertiesFromJson: function SP_BusinessData_Entity$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.EstimatedInstanceCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['EstimatedInstanceCount'] = $v_0;
            delete parentNode.EstimatedInstanceCount;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.Namespace;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Namespace'] = $v_0;
            delete parentNode.Namespace;
        }
    },
    getIdentifiers: function SP_BusinessData_Entity$getIdentifiers() {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.Collections.EntityIdentifierCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetIdentifiers', null));
        return $v_1;
    },
    getIdentifierCount: function SP_BusinessData_Entity$getIdentifierCount() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetIdentifierCount', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.IntResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    getLobSystem: function SP_BusinessData_Entity$getLobSystem() {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.LobSystem($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetLobSystem', null));
        return $v_1;
    },
    getCreatorView: function SP_BusinessData_Entity$getCreatorView(methodInstanceName) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.EntityView($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetCreatorView', [methodInstanceName]));
        return $v_1;
    },
    getUpdaterView: function SP_BusinessData_Entity$getUpdaterView(updaterName) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.EntityView($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetUpdaterView', [updaterName]));
        return $v_1;
    },
    getFinderView: function SP_BusinessData_Entity$getFinderView(methodInstanceName) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.EntityView($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetFinderView', [methodInstanceName]));
        return $v_1;
    },
    getSpecificFinderView: function SP_BusinessData_Entity$getSpecificFinderView(specificFinderName) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.EntityView($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetSpecificFinderView', [specificFinderName]));
        return $v_1;
    },
    getDefaultSpecificFinderView: function SP_BusinessData_Entity$getDefaultSpecificFinderView() {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.EntityView($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetDefaultSpecificFinderView', null));
        return $v_1;
    },
    findSpecificDefault: function SP_BusinessData_Entity$findSpecificDefault(identity, lobSystemInstance) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.Runtime.EntityInstance($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'FindSpecificDefault', [identity, lobSystemInstance]));
        return $v_1;
    },
    findSpecific: function SP_BusinessData_Entity$findSpecific(identity, specificFinderName, lobSystemInstance) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.Runtime.EntityInstance($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'FindSpecific', [identity, specificFinderName, lobSystemInstance]));
        return $v_1;
    },
    findSpecificDefaultByBdcId: function SP_BusinessData_Entity$findSpecificDefaultByBdcId(bdcIdentity, lobSystemInstance) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.Runtime.EntityInstance($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'FindSpecificDefaultByBdcId', [bdcIdentity, lobSystemInstance]));
        return $v_1;
    },
    findSpecificByBdcId: function SP_BusinessData_Entity$findSpecificByBdcId(bdcIdentity, specificFinderName, lobSystemInstance) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.Runtime.EntityInstance($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'FindSpecificByBdcId', [bdcIdentity, specificFinderName, lobSystemInstance]));
        return $v_1;
    },
    findFiltered: function SP_BusinessData_Entity$findFiltered(filterList, nameOfFinder, lobSystemInstance) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.Collections.EntityInstanceCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'FindFiltered', [filterList, nameOfFinder, lobSystemInstance]));
        return $v_1;
    },
    findAssociated: function SP_BusinessData_Entity$findAssociated(entityInstance, associationName, filterList, lobSystemInstance) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.Collections.EntityInstanceCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'FindAssociated', [entityInstance, associationName, filterList, lobSystemInstance]));
        return $v_1;
    },
    getFilters: function SP_BusinessData_Entity$getFilters(methodInstanceName) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.Collections.FilterCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetFilters', [methodInstanceName]));
        return $v_1;
    },
    execute: function SP_BusinessData_Entity$execute(methodInstanceName, lobSystemInstance, inputParams) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.MethodExecutionResult($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Execute', [methodInstanceName, lobSystemInstance, inputParams]));
        return $v_1;
    },
    getAssociationView: function SP_BusinessData_Entity$getAssociationView(associationName) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.EntityView($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetAssociationView', [associationName]));
        return $v_1;
    },
    create: function SP_BusinessData_Entity$create(fieldValues, lobSystemInstance) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.Runtime.EntityIdentity($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Create', [fieldValues, lobSystemInstance]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    subscribe: function SP_BusinessData_Entity$subscribe(eventType, notificationCallback, onBehalfOfUser, subscriberName, lobSystemInstance) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.Runtime.Subscription($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Subscribe', [eventType, notificationCallback, onBehalfOfUser, subscriberName, lobSystemInstance]));
        return $v_1;
    },
    unsubscribe: function SP_BusinessData_Entity$unsubscribe(subscription, onBehalfOfUser, unsubscriberName, lobSystemInstance) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Unsubscribe', [subscription, onBehalfOfUser, unsubscriberName, lobSystemInstance]);

        $v_0.addQuery($v_1);
    }
};
SP.BusinessData.EntityPropertyNames = function SP_BusinessData_EntityPropertyNames() {
};
SP.BusinessData.EntityField = function SP_BusinessData_EntityField(context, objectPath) {
    SP.BusinessData.EntityField.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.EntityField.prototype = {
    get_containsLocalizedDisplayName: function SP_BusinessData_EntityField$get_containsLocalizedDisplayName() {
        this.checkUninitializedProperty('ContainsLocalizedDisplayName');
        return ((this.get_objectData()).get_properties())['ContainsLocalizedDisplayName'];
    },
    get_defaultDisplayName: function SP_BusinessData_EntityField$get_defaultDisplayName() {
        this.checkUninitializedProperty('DefaultDisplayName');
        return ((this.get_objectData()).get_properties())['DefaultDisplayName'];
    },
    get_localizedDisplayName: function SP_BusinessData_EntityField$get_localizedDisplayName() {
        this.checkUninitializedProperty('LocalizedDisplayName');
        return ((this.get_objectData()).get_properties())['LocalizedDisplayName'];
    },
    get_name: function SP_BusinessData_EntityField$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    initPropertiesFromJson: function SP_BusinessData_EntityField$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ContainsLocalizedDisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ContainsLocalizedDisplayName'] = $v_0;
            delete parentNode.ContainsLocalizedDisplayName;
        }
        $v_0 = parentNode.DefaultDisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DefaultDisplayName'] = $v_0;
            delete parentNode.DefaultDisplayName;
        }
        $v_0 = parentNode.LocalizedDisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['LocalizedDisplayName'] = $v_0;
            delete parentNode.LocalizedDisplayName;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
    }
};
SP.BusinessData.EntityFieldPropertyNames = function SP_BusinessData_EntityFieldPropertyNames() {
};
SP.BusinessData.EntityIdentifier = function SP_BusinessData_EntityIdentifier(context, objectPath) {
    SP.BusinessData.EntityIdentifier.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.EntityIdentifier.prototype = {
    get_identifierType: function SP_BusinessData_EntityIdentifier$get_identifierType() {
        this.checkUninitializedProperty('IdentifierType');
        return ((this.get_objectData()).get_properties())['IdentifierType'];
    },
    get_name: function SP_BusinessData_EntityIdentifier$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    initPropertiesFromJson: function SP_BusinessData_EntityIdentifier$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.IdentifierType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IdentifierType'] = $v_0;
            delete parentNode.IdentifierType;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
    },
    getDefaultDisplayName: function SP_BusinessData_EntityIdentifier$getDefaultDisplayName() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetDefaultDisplayName', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    containsLocalizedDisplayName: function SP_BusinessData_EntityIdentifier$containsLocalizedDisplayName() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ContainsLocalizedDisplayName', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    getLocalizedDisplayName: function SP_BusinessData_EntityIdentifier$getLocalizedDisplayName() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetLocalizedDisplayName', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
};
SP.BusinessData.EntityIdentifierPropertyNames = function SP_BusinessData_EntityIdentifierPropertyNames() {
};
SP.BusinessData.EntityView = function SP_BusinessData_EntityView(context, objectPath) {
    SP.BusinessData.EntityView.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.EntityView.prototype = {
    get_fields: function SP_BusinessData_EntityView$get_fields() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Fields'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.BusinessData.Collections.EntityFieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Fields'));
            ((this.get_objectData()).get_clientObjectProperties())['Fields'] = $v_0;
        }
        return $v_0;
    },
    get_name: function SP_BusinessData_EntityView$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    get_relatedSpecificFinderName: function SP_BusinessData_EntityView$get_relatedSpecificFinderName() {
        this.checkUninitializedProperty('RelatedSpecificFinderName');
        return ((this.get_objectData()).get_properties())['RelatedSpecificFinderName'];
    },
    initPropertiesFromJson: function SP_BusinessData_EntityView$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Fields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Fields', this.get_fields(), $v_0);
            (this.get_fields()).fromJson($v_0);
            delete parentNode.Fields;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.RelatedSpecificFinderName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['RelatedSpecificFinderName'] = $v_0;
            delete parentNode.RelatedSpecificFinderName;
        }
    },
    getDefaultValues: function SP_BusinessData_EntityView$getDefaultValues() {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.Runtime.EntityFieldValueDictionary($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetDefaultValues', null));
        return $v_1;
    },
    getXmlSchema: function SP_BusinessData_EntityView$getXmlSchema() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetXmlSchema', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    getTypeDescriptor: function SP_BusinessData_EntityView$getTypeDescriptor(fieldDotNotation) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.TypeDescriptor($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetTypeDescriptor', [fieldDotNotation]));
        return $v_1;
    },
    getType: function SP_BusinessData_EntityView$getType(fieldDotNotation) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetType', [fieldDotNotation]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
};
SP.BusinessData.EntityViewPropertyNames = function SP_BusinessData_EntityViewPropertyNames() {
};
SP.BusinessData.EntityViewObjectPropertyNames = function SP_BusinessData_EntityViewObjectPropertyNames() {
};
SP.BusinessData.Filter = function SP_BusinessData_Filter(context, objectPath) {
    SP.BusinessData.Filter.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.Filter.prototype = {
    get_defaultDisplayName: function SP_BusinessData_Filter$get_defaultDisplayName() {
        this.checkUninitializedProperty('DefaultDisplayName');
        return ((this.get_objectData()).get_properties())['DefaultDisplayName'];
    },
    get_filterField: function SP_BusinessData_Filter$get_filterField() {
        this.checkUninitializedProperty('FilterField');
        return ((this.get_objectData()).get_properties())['FilterField'];
    },
    get_filterType: function SP_BusinessData_Filter$get_filterType() {
        this.checkUninitializedProperty('FilterType');
        return ((this.get_objectData()).get_properties())['FilterType'];
    },
    get_localizedDisplayName: function SP_BusinessData_Filter$get_localizedDisplayName() {
        this.checkUninitializedProperty('LocalizedDisplayName');
        return ((this.get_objectData()).get_properties())['LocalizedDisplayName'];
    },
    get_name: function SP_BusinessData_Filter$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    get_valueCount: function SP_BusinessData_Filter$get_valueCount() {
        this.checkUninitializedProperty('ValueCount');
        return ((this.get_objectData()).get_properties())['ValueCount'];
    },
    initPropertiesFromJson: function SP_BusinessData_Filter$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.DefaultDisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['DefaultDisplayName'] = $v_0;
            delete parentNode.DefaultDisplayName;
        }
        $v_0 = parentNode.FilterField;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['FilterField'] = $v_0;
            delete parentNode.FilterField;
        }
        $v_0 = parentNode.FilterType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['FilterType'] = $v_0;
            delete parentNode.FilterType;
        }
        $v_0 = parentNode.LocalizedDisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['LocalizedDisplayName'] = $v_0;
            delete parentNode.LocalizedDisplayName;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.ValueCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ValueCount'] = $v_0;
            delete parentNode.ValueCount;
        }
    }
};
SP.BusinessData.FilterPropertyNames = function SP_BusinessData_FilterPropertyNames() {
};
SP.BusinessData.LobSystem = function SP_BusinessData_LobSystem(context, objectPath) {
    SP.BusinessData.LobSystem.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.LobSystem.prototype = {
    get_name: function SP_BusinessData_LobSystem$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    initPropertiesFromJson: function SP_BusinessData_LobSystem$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
    },
    getLobSystemInstances: function SP_BusinessData_LobSystem$getLobSystemInstances() {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.Collections.LobSystemInstanceCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetLobSystemInstances', null));
        return $v_1;
    }
};
SP.BusinessData.LobSystemPropertyNames = function SP_BusinessData_LobSystemPropertyNames() {
};
SP.BusinessData.LobSystemInstance = function SP_BusinessData_LobSystemInstance(context, objectPath) {
    SP.BusinessData.LobSystemInstance.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.LobSystemInstance.prototype = {
    get_name: function SP_BusinessData_LobSystemInstance$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    initPropertiesFromJson: function SP_BusinessData_LobSystemInstance$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
    }
};
SP.BusinessData.LobSystemInstancePropertyNames = function SP_BusinessData_LobSystemInstancePropertyNames() {
};
SP.BusinessData.MethodExecutionResult = function SP_BusinessData_MethodExecutionResult(context, objectPath) {
    SP.BusinessData.MethodExecutionResult.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.MethodExecutionResult.prototype = {
    get_returnParameterCollection: function SP_BusinessData_MethodExecutionResult$get_returnParameterCollection() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['ReturnParameterCollection'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.BusinessData.ReturnParameterCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ReturnParameterCollection'));
            ((this.get_objectData()).get_clientObjectProperties())['ReturnParameterCollection'] = $v_0;
        }
        return $v_0;
    },
    initPropertiesFromJson: function SP_BusinessData_MethodExecutionResult$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ReturnParameterCollection;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ReturnParameterCollection', this.get_returnParameterCollection(), $v_0);
            (this.get_returnParameterCollection()).fromJson($v_0);
            delete parentNode.ReturnParameterCollection;
        }
    }
};
SP.BusinessData.MethodExecutionResultObjectPropertyNames = function SP_BusinessData_MethodExecutionResultObjectPropertyNames() {
};
SP.BusinessData.ReturnParameterCollection = function SP_BusinessData_ReturnParameterCollection(context, objectPath) {
    SP.BusinessData.ReturnParameterCollection.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.ReturnParameterCollection.prototype = {
    itemAt: function SP_BusinessData_ReturnParameterCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_BusinessData_ReturnParameterCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_BusinessData_ReturnParameterCollection$get_childItemType() {
        return SP.BusinessData.Runtime.EntityFieldValueDictionary;
    }
};
SP.BusinessData.TypeDescriptor = function SP_BusinessData_TypeDescriptor(context, objectPath) {
    SP.BusinessData.TypeDescriptor.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.TypeDescriptor.prototype = {
    get_containsReadOnly: function SP_BusinessData_TypeDescriptor$get_containsReadOnly() {
        this.checkUninitializedProperty('ContainsReadOnly');
        return ((this.get_objectData()).get_properties())['ContainsReadOnly'];
    },
    get_isCollection: function SP_BusinessData_TypeDescriptor$get_isCollection() {
        this.checkUninitializedProperty('IsCollection');
        return ((this.get_objectData()).get_properties())['IsCollection'];
    },
    get_isReadOnly: function SP_BusinessData_TypeDescriptor$get_isReadOnly() {
        this.checkUninitializedProperty('IsReadOnly');
        return ((this.get_objectData()).get_properties())['IsReadOnly'];
    },
    get_name: function SP_BusinessData_TypeDescriptor$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    get_typeName: function SP_BusinessData_TypeDescriptor$get_typeName() {
        this.checkUninitializedProperty('TypeName');
        return ((this.get_objectData()).get_properties())['TypeName'];
    },
    initPropertiesFromJson: function SP_BusinessData_TypeDescriptor$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ContainsReadOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ContainsReadOnly'] = $v_0;
            delete parentNode.ContainsReadOnly;
        }
        $v_0 = parentNode.IsCollection;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsCollection'] = $v_0;
            delete parentNode.IsCollection;
        }
        $v_0 = parentNode.IsReadOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsReadOnly'] = $v_0;
            delete parentNode.IsReadOnly;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.TypeName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['TypeName'] = $v_0;
            delete parentNode.TypeName;
        }
    },
    containsLocalizedDisplayName: function SP_BusinessData_TypeDescriptor$containsLocalizedDisplayName() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ContainsLocalizedDisplayName', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    getLocalizedDisplayName: function SP_BusinessData_TypeDescriptor$getLocalizedDisplayName() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetLocalizedDisplayName', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    getDefaultDisplayName: function SP_BusinessData_TypeDescriptor$getDefaultDisplayName() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetDefaultDisplayName', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    isRoot: function SP_BusinessData_TypeDescriptor$isRoot() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'IsRoot', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    isLeaf: function SP_BusinessData_TypeDescriptor$isLeaf() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'IsLeaf', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    getChildTypeDescriptors: function SP_BusinessData_TypeDescriptor$getChildTypeDescriptors() {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.Collections.TypeDescriptorCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetChildTypeDescriptors', null));
        return $v_1;
    },
    getParentTypeDescriptor: function SP_BusinessData_TypeDescriptor$getParentTypeDescriptor() {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.TypeDescriptor($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetParentTypeDescriptor', null));
        return $v_1;
    }
};
SP.BusinessData.TypeDescriptorPropertyNames = function SP_BusinessData_TypeDescriptorPropertyNames() {
};
Type.registerNamespace('SP.BusinessData.Collections');
SP.BusinessData.Collections.EntityFieldCollection = function SP_BusinessData_Collections_EntityFieldCollection(context, objectPath) {
    SP.BusinessData.Collections.EntityFieldCollection.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.Collections.EntityFieldCollection.prototype = {
    itemAt: function SP_BusinessData_Collections_EntityFieldCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_BusinessData_Collections_EntityFieldCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_BusinessData_Collections_EntityFieldCollection$get_childItemType() {
        return SP.BusinessData.EntityField;
    }
};
SP.BusinessData.Collections.EntityIdentifierCollection = function SP_BusinessData_Collections_EntityIdentifierCollection(context, objectPath) {
    SP.BusinessData.Collections.EntityIdentifierCollection.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.Collections.EntityIdentifierCollection.prototype = {
    itemAt: function SP_BusinessData_Collections_EntityIdentifierCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_BusinessData_Collections_EntityIdentifierCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_BusinessData_Collections_EntityIdentifierCollection$get_childItemType() {
        return SP.BusinessData.EntityIdentifier;
    }
};
SP.BusinessData.Collections.EntityInstanceCollection = function SP_BusinessData_Collections_EntityInstanceCollection(context, objectPath) {
    SP.BusinessData.Collections.EntityInstanceCollection.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.Collections.EntityInstanceCollection.prototype = {
    itemAt: function SP_BusinessData_Collections_EntityInstanceCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_BusinessData_Collections_EntityInstanceCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_BusinessData_Collections_EntityInstanceCollection$get_childItemType() {
        return SP.BusinessData.Runtime.EntityInstance;
    }
};
SP.BusinessData.Collections.FilterCollection = function SP_BusinessData_Collections_FilterCollection(context, objectPath) {
    SP.BusinessData.Collections.FilterCollection.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.Collections.FilterCollection.prototype = {
    itemAt: function SP_BusinessData_Collections_FilterCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_BusinessData_Collections_FilterCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_BusinessData_Collections_FilterCollection$get_childItemType() {
        return SP.BusinessData.Filter;
    },
    setFilterValue: function SP_BusinessData_Collections_FilterCollection$setFilterValue(inputFilterName, valueIndex, value) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetFilterValue', [inputFilterName, valueIndex, value]);

        $v_0.addQuery($v_1);
    }
};
SP.BusinessData.Collections.LobSystemInstanceCollection = function SP_BusinessData_Collections_LobSystemInstanceCollection(context, objectPath) {
    SP.BusinessData.Collections.LobSystemInstanceCollection.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.Collections.LobSystemInstanceCollection.prototype = {
    itemAt: function SP_BusinessData_Collections_LobSystemInstanceCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_BusinessData_Collections_LobSystemInstanceCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_BusinessData_Collections_LobSystemInstanceCollection$get_childItemType() {
        return SP.BusinessData.LobSystemInstance;
    }
};
SP.BusinessData.Collections.TypeDescriptorCollection = function SP_BusinessData_Collections_TypeDescriptorCollection(context, objectPath) {
    SP.BusinessData.Collections.TypeDescriptorCollection.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.Collections.TypeDescriptorCollection.prototype = {
    itemAt: function SP_BusinessData_Collections_TypeDescriptorCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_BusinessData_Collections_TypeDescriptorCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_BusinessData_Collections_TypeDescriptorCollection$get_childItemType() {
        return SP.BusinessData.TypeDescriptor;
    }
};
Type.registerNamespace('SP.BusinessData.Infrastructure');
SP.BusinessData.Infrastructure.ExternalSubscriptionStore = function SP_BusinessData_Infrastructure_ExternalSubscriptionStore(context, web) {
    SP.BusinessData.Infrastructure.ExternalSubscriptionStore.initializeBase(this, [context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{b5d4dfa9-e948-4068-a32b-012eea5a1a61}', arguments)]);
};
SP.BusinessData.Infrastructure.ExternalSubscriptionStore.newObject = function SP_BusinessData_Infrastructure_ExternalSubscriptionStore$newObject(context, web) {
    return new SP.BusinessData.Infrastructure.ExternalSubscriptionStore(context, new SP.ObjectPathConstructor(context, '{b5d4dfa9-e948-4068-a32b-012eea5a1a61}', [web]));
};
SP.BusinessData.Infrastructure.ExternalSubscriptionStore.prototype = {
    indexStore: function SP_BusinessData_Infrastructure_ExternalSubscriptionStore$indexStore() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'IndexStore', null);

        $v_0.addQuery($v_1);
    }
};
Type.registerNamespace('SP.BusinessData.Runtime');
SP.BusinessData.Runtime.EntityEventType = function() {
};
SP.BusinessData.Runtime.EntityEventType.prototype = {
    none: 0,
    itemAdded: 1,
    itemUpdated: 2,
    itemDeleted: 3
};
SP.BusinessData.Runtime.EntityEventType.registerEnum('SP.BusinessData.Runtime.EntityEventType', false);
SP.BusinessData.Runtime.EntityFieldValueDictionary = function SP_BusinessData_Runtime_EntityFieldValueDictionary(context, objectPath) {
    SP.BusinessData.Runtime.EntityFieldValueDictionary.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.Runtime.EntityFieldValueDictionary.prototype = {
    get_fieldValues: function SP_BusinessData_Runtime_EntityFieldValueDictionary$get_fieldValues() {
        var $v_0 = ((this.get_objectData()).get_methodReturnObjects())[SP.ClientConstants.FieldValuesMethodName];

        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            ((this.get_objectData()).get_methodReturnObjects())[SP.ClientConstants.FieldValuesMethodName] = $v_0;
        }
        return $v_0;
    },
    get_item: function SP_BusinessData_Runtime_EntityFieldValueDictionary$get_item(fieldName) {
        return this.$Q_1(fieldName);
    },
    set_item: function SP_BusinessData_Runtime_EntityFieldValueDictionary$set_item(fieldName, value) {
        this.$1e_1(fieldName, value);
        return value;
    },
    initNonPropertiesFromJson: function SP_BusinessData_Runtime_EntityFieldValueDictionary$initNonPropertiesFromJson(parentNode) {
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    $Q_1: function SP_BusinessData_Runtime_EntityFieldValueDictionary$$Q_1($p0) {
        var $v_0 = (this.get_fieldValues())[$p0];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString(SP.ResourceStrings.propertyHasNotBeenInitialized));
        }
        return $v_0;
    },
    refreshLoad: function SP_BusinessData_Runtime_EntityFieldValueDictionary$refreshLoad() {
        SP.ClientObject.prototype.refreshLoad.call(this);
        this.loadExpandoFields();
    },
    loadExpandoFields: function SP_BusinessData_Runtime_EntityFieldValueDictionary$loadExpandoFields() {
        var $$dict_0 = this.get_fieldValues();

        for (var $$key_1 in $$dict_0) {
            var $v_0 = {
                key: $$key_1,
                value: $$dict_0[$$key_1]
            };

            this.retrieve($v_0.key);
        }
    },
    fromXml: function SP_BusinessData_Runtime_EntityFieldValueDictionary$fromXml(xml) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'FromXml', [xml]);

        $v_0.addQuery($v_1);
    },
    toXml: function SP_BusinessData_Runtime_EntityFieldValueDictionary$toXml() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ToXml', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    createInstance: function SP_BusinessData_Runtime_EntityFieldValueDictionary$createInstance(fieldInstanceDotNotation, fieldDotNotation) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'CreateInstance', [fieldInstanceDotNotation, fieldDotNotation]);

        $v_0.addQuery($v_1);
    },
    createCollectionInstance: function SP_BusinessData_Runtime_EntityFieldValueDictionary$createCollectionInstance(fieldDotNotation, size) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'CreateCollectionInstance', [fieldDotNotation, size]);

        $v_0.addQuery($v_1);
    },
    getCollectionSize: function SP_BusinessData_Runtime_EntityFieldValueDictionary$getCollectionSize(fieldDotNotation) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetCollectionSize', [fieldDotNotation]);

        $v_0.addQuery($v_2);
        $v_1 = new SP.IntResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    $1e_1: function SP_BusinessData_Runtime_EntityFieldValueDictionary$$1e_1($p0, $p1) {
        var $v_0 = this.get_context();

        (this.get_fieldValues())[$p0] = $p1;
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetFieldValue', [$p0, $p1]);

        if ($v_0) {
            $v_0.addQuery($v_1);
        }
    }
};
SP.BusinessData.Runtime.EntityIdentity = function SP_BusinessData_Runtime_EntityIdentity(context, identifierValues) {
    SP.BusinessData.Runtime.EntityIdentity.initializeBase(this, [context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{36c08dbd-02e6-493e-99f5-df3f18342f85}', arguments)]);
};
SP.BusinessData.Runtime.EntityIdentity.newObject = function SP_BusinessData_Runtime_EntityIdentity$newObject(context, identifierValues) {
    return new SP.BusinessData.Runtime.EntityIdentity(context, new SP.ObjectPathConstructor(context, '{36c08dbd-02e6-493e-99f5-df3f18342f85}', [identifierValues]));
};
SP.BusinessData.Runtime.EntityIdentity.prototype = {
    get_fieldValues: function SP_BusinessData_Runtime_EntityIdentity$get_fieldValues() {
        var $v_0 = ((this.get_objectData()).get_methodReturnObjects())[SP.ClientConstants.FieldValuesMethodName];

        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            ((this.get_objectData()).get_methodReturnObjects())[SP.ClientConstants.FieldValuesMethodName] = $v_0;
        }
        return $v_0;
    },
    get_item: function SP_BusinessData_Runtime_EntityIdentity$get_item(fieldName) {
        return this.$Q_1(fieldName);
    },
    get_identifierCount: function SP_BusinessData_Runtime_EntityIdentity$get_identifierCount() {
        this.checkUninitializedProperty('IdentifierCount');
        return ((this.get_objectData()).get_properties())['IdentifierCount'];
    },
    initNonPropertiesFromJson: function SP_BusinessData_Runtime_EntityIdentity$initNonPropertiesFromJson(parentNode) {
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    initPropertiesFromJson: function SP_BusinessData_Runtime_EntityIdentity$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.IdentifierCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IdentifierCount'] = $v_0;
            delete parentNode.IdentifierCount;
        }
    },
    $Q_1: function SP_BusinessData_Runtime_EntityIdentity$$Q_1($p0) {
        var $v_0 = (this.get_fieldValues())[$p0];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString(SP.ResourceStrings.propertyHasNotBeenInitialized));
        }
        return $v_0;
    },
    refreshLoad: function SP_BusinessData_Runtime_EntityIdentity$refreshLoad() {
        SP.ClientObject.prototype.refreshLoad.call(this);
        this.loadExpandoFields();
    },
    loadExpandoFields: function SP_BusinessData_Runtime_EntityIdentity$loadExpandoFields() {
        var $$dict_0 = this.get_fieldValues();

        for (var $$key_1 in $$dict_0) {
            var $v_0 = {
                key: $$key_1,
                value: $$dict_0[$$key_1]
            };

            this.retrieve($v_0.key);
        }
    }
};
SP.BusinessData.Runtime.EntityIdentityPropertyNames = function SP_BusinessData_Runtime_EntityIdentityPropertyNames() {
};
SP.BusinessData.Runtime.EntityInstance = function SP_BusinessData_Runtime_EntityInstance(context, objectPath) {
    SP.BusinessData.Runtime.EntityInstance.initializeBase(this, [context, objectPath]);
};
SP.BusinessData.Runtime.EntityInstance.prototype = {
    get_fieldValues: function SP_BusinessData_Runtime_EntityInstance$get_fieldValues() {
        var $v_0 = ((this.get_objectData()).get_methodReturnObjects())[SP.ClientConstants.FieldValuesMethodName];

        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            ((this.get_objectData()).get_methodReturnObjects())[SP.ClientConstants.FieldValuesMethodName] = $v_0;
        }
        return $v_0;
    },
    get_item: function SP_BusinessData_Runtime_EntityInstance$get_item(fieldName) {
        return this.$Q_1(fieldName);
    },
    set_item: function SP_BusinessData_Runtime_EntityInstance$set_item(fieldName, value) {
        this.$1e_1(fieldName, value);
        return value;
    },
    initNonPropertiesFromJson: function SP_BusinessData_Runtime_EntityInstance$initNonPropertiesFromJson(parentNode) {
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    $Q_1: function SP_BusinessData_Runtime_EntityInstance$$Q_1($p0) {
        var $v_0 = (this.get_fieldValues())[$p0];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString(SP.ResourceStrings.propertyHasNotBeenInitialized));
        }
        return $v_0;
    },
    refreshLoad: function SP_BusinessData_Runtime_EntityInstance$refreshLoad() {
        SP.ClientObject.prototype.refreshLoad.call(this);
        this.loadExpandoFields();
    },
    loadExpandoFields: function SP_BusinessData_Runtime_EntityInstance$loadExpandoFields() {
        var $$dict_0 = this.get_fieldValues();

        for (var $$key_1 in $$dict_0) {
            var $v_0 = {
                key: $$key_1,
                value: $$dict_0[$$key_1]
            };

            this.retrieve($v_0.key);
        }
    },
    $1e_1: function SP_BusinessData_Runtime_EntityInstance$$1e_1($p0, $p1) {
        var $v_0 = this.get_context();

        (this.get_fieldValues())[$p0] = $p1;
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetFieldValue', [$p0, $p1]);

        if ($v_0) {
            $v_0.addQuery($v_1);
        }
    },
    createInstance: function SP_BusinessData_Runtime_EntityInstance$createInstance(fieldInstanceDotNotation, fieldDotNotation) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'CreateInstance', [fieldInstanceDotNotation, fieldDotNotation]);

        $v_0.addQuery($v_1);
    },
    createCollectionInstance: function SP_BusinessData_Runtime_EntityInstance$createCollectionInstance(fieldDotNotation, size) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'CreateCollectionInstance', [fieldDotNotation, size]);

        $v_0.addQuery($v_1);
    },
    getIdentity: function SP_BusinessData_Runtime_EntityInstance$getIdentity() {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.BusinessData.Runtime.EntityIdentity($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetIdentity', null));
        return $v_1;
    },
    deleteObject: function SP_BusinessData_Runtime_EntityInstance$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
    },
    update: function SP_BusinessData_Runtime_EntityInstance$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);

        $v_0.addQuery($v_1);
        this.refreshLoad();
    },
    fromXml: function SP_BusinessData_Runtime_EntityInstance$fromXml(xml) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'FromXml', [xml]);

        $v_0.addQuery($v_1);
    },
    toXml: function SP_BusinessData_Runtime_EntityInstance$toXml() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ToXml', null);

        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
};
SP.BusinessData.Runtime.NotificationCallback = function SP_BusinessData_Runtime_NotificationCallback(context, notificationEndpoint) {
    SP.BusinessData.Runtime.NotificationCallback.initializeBase(this, [context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{87d0a4ee-8341-4848-8078-5135a1357a9d}', arguments)]);
};
SP.BusinessData.Runtime.NotificationCallback.newObject = function SP_BusinessData_Runtime_NotificationCallback$newObject(context, notificationEndpoint) {
    return new SP.BusinessData.Runtime.NotificationCallback(context, new SP.ObjectPathConstructor(context, '{87d0a4ee-8341-4848-8078-5135a1357a9d}', [notificationEndpoint]));
};
SP.BusinessData.Runtime.NotificationCallback.prototype = {
    get_notificationContext: function SP_BusinessData_Runtime_NotificationCallback$get_notificationContext() {
        this.checkUninitializedProperty('NotificationContext');
        return ((this.get_objectData()).get_properties())['NotificationContext'];
    },
    set_notificationContext: function SP_BusinessData_Runtime_NotificationCallback$set_notificationContext(value) {
        ((this.get_objectData()).get_properties())['NotificationContext'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'NotificationContext', value));
        }
        return value;
    },
    get_notificationEndpoint: function SP_BusinessData_Runtime_NotificationCallback$get_notificationEndpoint() {
        this.checkUninitializedProperty('NotificationEndpoint');
        return ((this.get_objectData()).get_properties())['NotificationEndpoint'];
    },
    get_notificationForwarderType: function SP_BusinessData_Runtime_NotificationCallback$get_notificationForwarderType() {
        this.checkUninitializedProperty('NotificationForwarderType');
        return ((this.get_objectData()).get_properties())['NotificationForwarderType'];
    },
    set_notificationForwarderType: function SP_BusinessData_Runtime_NotificationCallback$set_notificationForwarderType(value) {
        ((this.get_objectData()).get_properties())['NotificationForwarderType'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'NotificationForwarderType', value));
        }
        return value;
    },
    initPropertiesFromJson: function SP_BusinessData_Runtime_NotificationCallback$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.NotificationContext;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['NotificationContext'] = $v_0;
            delete parentNode.NotificationContext;
        }
        $v_0 = parentNode.NotificationEndpoint;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['NotificationEndpoint'] = $v_0;
            delete parentNode.NotificationEndpoint;
        }
        $v_0 = parentNode.NotificationForwarderType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['NotificationForwarderType'] = $v_0;
            delete parentNode.NotificationForwarderType;
        }
    }
};
SP.BusinessData.Runtime.NotificationCallbackPropertyNames = function SP_BusinessData_Runtime_NotificationCallbackPropertyNames() {
};
SP.BusinessData.Runtime.Subscription = function SP_BusinessData_Runtime_Subscription(context, id, hash) {
    SP.BusinessData.Runtime.Subscription.initializeBase(this, [context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{69aa7dd9-23a0-4e20-9464-0749fc0e6406}', arguments)]);
};
SP.BusinessData.Runtime.Subscription.newObject = function SP_BusinessData_Runtime_Subscription$newObject(context, id, hash) {
    return new SP.BusinessData.Runtime.Subscription(context, new SP.ObjectPathConstructor(context, '{69aa7dd9-23a0-4e20-9464-0749fc0e6406}', [id, hash]));
};
SP.BusinessData.Runtime.Subscription.prototype = {
    get_hash: function SP_BusinessData_Runtime_Subscription$get_hash() {
        this.checkUninitializedProperty('Hash');
        return ((this.get_objectData()).get_properties())['Hash'];
    },
    get_id: function SP_BusinessData_Runtime_Subscription$get_id() {
        this.checkUninitializedProperty('ID');
        return ((this.get_objectData()).get_properties())['ID'];
    },
    initPropertiesFromJson: function SP_BusinessData_Runtime_Subscription$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Hash;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Hash'] = $v_0;
            delete parentNode.Hash;
        }
        $v_0 = parentNode.ID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ID'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.ID;
        }
    }
};
SP.BusinessData.Runtime.SubscriptionPropertyNames = function SP_BusinessData_Runtime_SubscriptionPropertyNames() {
};
Type.registerNamespace('SP.Sharing');
SP.Sharing.Role = function() {
};
SP.Sharing.Role.prototype = {
    none: 0,
    view: 1,
    edit: 2,
    owner: 3
};
SP.Sharing.Role.registerEnum('SP.Sharing.Role', false);
SP.Sharing.DocumentSharingManager = function SP_Sharing_DocumentSharingManager() {
};
SP.Sharing.DocumentSharingManager.getRoleDefinition = function SP_Sharing_DocumentSharingManager$getRoleDefinition(context, role) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;

    $v_0 = new SP.RoleDefinition(context, new SP.ObjectPathStaticMethod(context, '{10c23c0e-cead-4f15-9deb-a0f1d7507495}', 'GetRoleDefinition', [role]));
    return $v_0;
};
SP.Sharing.DocumentSharingManager.isDocumentSharingEnabled = function SP_Sharing_DocumentSharingManager$isDocumentSharingEnabled(context, list) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{10c23c0e-cead-4f15-9deb-a0f1d7507495}', 'IsDocumentSharingEnabled', [list]);

    context.addQuery($v_1);
    $v_0 = new SP.BooleanResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.Sharing.DocumentSharingManager.updateDocumentSharingInfo = function SP_Sharing_DocumentSharingManager$updateDocumentSharingInfo(context, resourceAddress, userRoleAssignments, validateExistingPermissions, additiveMode, sendServerManagedNotification, customMessage, includeAnonymousLinksInNotification) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{10c23c0e-cead-4f15-9deb-a0f1d7507495}', 'UpdateDocumentSharingInfo', [resourceAddress, userRoleAssignments, validateExistingPermissions, additiveMode, sendServerManagedNotification, customMessage, includeAnonymousLinksInNotification]);

    context.addQuery($v_1);
    $v_0 = [];
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
};
SP.Sharing.UserRoleAssignment = function SP_Sharing_UserRoleAssignment() {
    SP.Sharing.UserRoleAssignment.initializeBase(this);
};
SP.Sharing.UserRoleAssignment.prototype = {
    $2v_1: 0,
    $39_1: null,
    get_role: function SP_Sharing_UserRoleAssignment$get_role() {
        return this.$2v_1;
    },
    set_role: function SP_Sharing_UserRoleAssignment$set_role(value) {
        this.$2v_1 = value;
        return value;
    },
    get_userId: function SP_Sharing_UserRoleAssignment$get_userId() {
        return this.$39_1;
    },
    set_userId: function SP_Sharing_UserRoleAssignment$set_userId(value) {
        this.$39_1 = value;
        return value;
    },
    get_typeId: function SP_Sharing_UserRoleAssignment$get_typeId() {
        return '{74485063-e2b5-424b-950c-4b62e816e31f}';
    },
    writeToXml: function SP_Sharing_UserRoleAssignment$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['Role', 'UserId'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_Sharing_UserRoleAssignment$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Role;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2v_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.Role;
        }
        $v_0 = parentNode.UserId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$39_1 = $v_0;
            delete parentNode.UserId;
        }
    }
};
SP.Sharing.UserSharingResult = function SP_Sharing_UserSharingResult() {
    SP.Sharing.UserSharingResult.initializeBase(this);
};
SP.Sharing.UserSharingResult.prototype = {
    $3h_1: null,
    $3l_1: 0,
    $3w_1: false,
    $1F_1: null,
    $O_1: false,
    $d_1: null,
    get_allowedRoles: function SP_Sharing_UserSharingResult$get_allowedRoles() {
        return this.$3h_1;
    },
    get_currentRole: function SP_Sharing_UserSharingResult$get_currentRole() {
        return this.$3l_1;
    },
    get_isUserKnown: function SP_Sharing_UserSharingResult$get_isUserKnown() {
        return this.$3w_1;
    },
    get_message: function SP_Sharing_UserSharingResult$get_message() {
        return this.$1F_1;
    },
    get_status: function SP_Sharing_UserSharingResult$get_status() {
        return this.$O_1;
    },
    get_user: function SP_Sharing_UserSharingResult$get_user() {
        return this.$d_1;
    },
    get_typeId: function SP_Sharing_UserSharingResult$get_typeId() {
        return '{782142b7-1bb8-495f-8a60-9940982de38e}';
    },
    writeToXml: function SP_Sharing_UserSharingResult$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['AllowedRoles', 'CurrentRole', 'IsUserKnown', 'Message', 'Status', 'User'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_Sharing_UserSharingResult$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AllowedRoles;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3h_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.AllowedRoles;
        }
        $v_0 = parentNode.CurrentRole;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3l_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.CurrentRole;
        }
        $v_0 = parentNode.IsUserKnown;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3w_1 = $v_0;
            delete parentNode.IsUserKnown;
        }
        $v_0 = parentNode.Message;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1F_1 = $v_0;
            delete parentNode.Message;
        }
        $v_0 = parentNode.Status;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$O_1 = $v_0;
            delete parentNode.Status;
        }
        $v_0 = parentNode.User;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$d_1 = $v_0;
            delete parentNode.User;
        }
    }
};
Type.registerNamespace('SP.SiteHealth');
SP.SiteHealth.SiteHealthStatusType = function() {
};
SP.SiteHealth.SiteHealthStatusType.prototype = {
    passed: 0,
    failedWarning: 1,
    failedError: 2
};
SP.SiteHealth.SiteHealthStatusType.registerEnum('SP.SiteHealth.SiteHealthStatusType', false);
SP.SiteHealth.SiteHealthResult = function SP_SiteHealth_SiteHealthResult() {
    SP.SiteHealth.SiteHealthResult.initializeBase(this);
};
SP.SiteHealth.SiteHealthResult.prototype = {
    $43_1: null,
    $4G_1: null,
    $4H_1: null,
    $4I_1: false,
    $4J_1: null,
    $O_1: 0,
    $35_1: null,
    get_messageAsText: function SP_SiteHealth_SiteHealthResult$get_messageAsText() {
        return this.$43_1;
    },
    get_ruleHelpLink: function SP_SiteHealth_SiteHealthResult$get_ruleHelpLink() {
        return this.$4G_1;
    },
    get_ruleId: function SP_SiteHealth_SiteHealthResult$get_ruleId() {
        return this.$4H_1;
    },
    get_ruleIsRepairable: function SP_SiteHealth_SiteHealthResult$get_ruleIsRepairable() {
        return this.$4I_1;
    },
    get_ruleName: function SP_SiteHealth_SiteHealthResult$get_ruleName() {
        return this.$4J_1;
    },
    get_status: function SP_SiteHealth_SiteHealthResult$get_status() {
        return this.$O_1;
    },
    set_status: function SP_SiteHealth_SiteHealthResult$set_status(value) {
        this.$O_1 = value;
        return value;
    },
    get_timeStamp: function SP_SiteHealth_SiteHealthResult$get_timeStamp() {
        return this.$35_1;
    },
    set_timeStamp: function SP_SiteHealth_SiteHealthResult$set_timeStamp(value) {
        this.$35_1 = value;
        return value;
    },
    get_typeId: function SP_SiteHealth_SiteHealthResult$get_typeId() {
        return '{3ba0823b-9b49-433b-a8a6-65a5139f06ec}';
    },
    writeToXml: function SP_SiteHealth_SiteHealthResult$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['MessageAsText', 'RuleHelpLink', 'RuleId', 'RuleIsRepairable', 'RuleName', 'Status', 'TimeStamp'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_SiteHealth_SiteHealthResult$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.MessageAsText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$43_1 = $v_0;
            delete parentNode.MessageAsText;
        }
        $v_0 = parentNode.RuleHelpLink;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4G_1 = $v_0;
            delete parentNode.RuleHelpLink;
        }
        $v_0 = parentNode.RuleId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4H_1 = $v_0;
            delete parentNode.RuleId;
        }
        $v_0 = parentNode.RuleIsRepairable;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4I_1 = $v_0;
            delete parentNode.RuleIsRepairable;
        }
        $v_0 = parentNode.RuleName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4J_1 = $v_0;
            delete parentNode.RuleName;
        }
        $v_0 = parentNode.Status;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$O_1 = SP.DataConvert.fixupType(null, $v_0);
            delete parentNode.Status;
        }
        $v_0 = parentNode.TimeStamp;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$35_1 = $v_0;
            delete parentNode.TimeStamp;
        }
    }
};
SP.SiteHealth.SiteHealthSummary = function SP_SiteHealth_SiteHealthSummary(context, objectPath) {
    SP.SiteHealth.SiteHealthSummary.initializeBase(this, [context, objectPath]);
};
SP.SiteHealth.SiteHealthSummary.prototype = {
    get_failedErrorCount: function SP_SiteHealth_SiteHealthSummary$get_failedErrorCount() {
        this.checkUninitializedProperty('FailedErrorCount');
        return ((this.get_objectData()).get_properties())['FailedErrorCount'];
    },
    get_failedWarningCount: function SP_SiteHealth_SiteHealthSummary$get_failedWarningCount() {
        this.checkUninitializedProperty('FailedWarningCount');
        return ((this.get_objectData()).get_properties())['FailedWarningCount'];
    },
    get_passedCount: function SP_SiteHealth_SiteHealthSummary$get_passedCount() {
        this.checkUninitializedProperty('PassedCount');
        return ((this.get_objectData()).get_properties())['PassedCount'];
    },
    get_results: function SP_SiteHealth_SiteHealthSummary$get_results() {
        this.checkUninitializedProperty('Results');
        return ((this.get_objectData()).get_properties())['Results'];
    },
    initPropertiesFromJson: function SP_SiteHealth_SiteHealthSummary$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.FailedErrorCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['FailedErrorCount'] = $v_0;
            delete parentNode.FailedErrorCount;
        }
        $v_0 = parentNode.FailedWarningCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['FailedWarningCount'] = $v_0;
            delete parentNode.FailedWarningCount;
        }
        $v_0 = parentNode.PassedCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['PassedCount'] = $v_0;
            delete parentNode.PassedCount;
        }
        $v_0 = parentNode.Results;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Results'] = [];
            SP.DataConvert.populateArray(this.get_context(), ((this.get_objectData()).get_properties())['Results'], $v_0);
            delete parentNode.Results;
        }
    }
};
SP.SiteHealth.SiteHealthSummaryPropertyNames = function SP_SiteHealth_SiteHealthSummaryPropertyNames() {
};
Type.registerNamespace('SP.WebParts');
SP.WebParts.PersonalizationScope = function() {
};
SP.WebParts.PersonalizationScope.prototype = {
    user: 0,
    shared: 1
};
SP.WebParts.PersonalizationScope.registerEnum('SP.WebParts.PersonalizationScope', false);
SP.WebParts.LimitedWebPartManager = function SP_WebParts_LimitedWebPartManager(context, objectPath) {
    SP.WebParts.LimitedWebPartManager.initializeBase(this, [context, objectPath]);
};
SP.WebParts.LimitedWebPartManager.prototype = {
    get_hasPersonalizedParts: function SP_WebParts_LimitedWebPartManager$get_hasPersonalizedParts() {
        this.checkUninitializedProperty('HasPersonalizedParts');
        return ((this.get_objectData()).get_properties())['HasPersonalizedParts'];
    },
    get_scope: function SP_WebParts_LimitedWebPartManager$get_scope() {
        this.checkUninitializedProperty('Scope');
        return ((this.get_objectData()).get_properties())['Scope'];
    },
    get_webParts: function SP_WebParts_LimitedWebPartManager$get_webParts() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['WebParts'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WebParts.WebPartDefinitionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'WebParts'));
            ((this.get_objectData()).get_clientObjectProperties())['WebParts'] = $v_0;
        }
        return $v_0;
    },
    initPropertiesFromJson: function SP_WebParts_LimitedWebPartManager$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.HasPersonalizedParts;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['HasPersonalizedParts'] = $v_0;
            delete parentNode.HasPersonalizedParts;
        }
        $v_0 = parentNode.Scope;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Scope'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.Scope;
        }
        $v_0 = parentNode.WebParts;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('WebParts', this.get_webParts(), $v_0);
            (this.get_webParts()).fromJson($v_0);
            delete parentNode.WebParts;
        }
    },
    addWebPart: function SP_WebParts_LimitedWebPartManager$addWebPart(webPart, zoneId, zoneIndex) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.WebParts.WebPartDefinition($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'AddWebPart', [webPart, zoneId, zoneIndex]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    importWebPart: function SP_WebParts_LimitedWebPartManager$importWebPart(webPartXml) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.WebParts.WebPartDefinition($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'ImportWebPart', [webPartXml]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    }
};
SP.WebParts.LimitedWebPartManagerPropertyNames = function SP_WebParts_LimitedWebPartManagerPropertyNames() {
};
SP.WebParts.LimitedWebPartManagerObjectPropertyNames = function SP_WebParts_LimitedWebPartManagerObjectPropertyNames() {
};
SP.WebParts.TileData = function SP_WebParts_TileData() {
    SP.WebParts.TileData.initializeBase(this);
};
SP.WebParts.TileData.prototype = {
    $21_1: null,
    $3_1: null,
    $2X_1: 0,
    $2c_1: null,
    $34_1: 0,
    $0_1: null,
    get_backgroundImageLocation: function SP_WebParts_TileData$get_backgroundImageLocation() {
        return this.$21_1;
    },
    set_backgroundImageLocation: function SP_WebParts_TileData$set_backgroundImageLocation(value) {
        this.$21_1 = value;
        return value;
    },
    get_description: function SP_WebParts_TileData$get_description() {
        return this.$3_1;
    },
    set_description: function SP_WebParts_TileData$set_description(value) {
        this.$3_1 = value;
        return value;
    },
    get_id: function SP_WebParts_TileData$get_id() {
        return this.$2X_1;
    },
    set_id: function SP_WebParts_TileData$set_id(value) {
        this.$2X_1 = value;
        return value;
    },
    get_linkLocation: function SP_WebParts_TileData$get_linkLocation() {
        return this.$2c_1;
    },
    set_linkLocation: function SP_WebParts_TileData$set_linkLocation(value) {
        this.$2c_1 = value;
        return value;
    },
    get_tileOrder: function SP_WebParts_TileData$get_tileOrder() {
        return this.$34_1;
    },
    set_tileOrder: function SP_WebParts_TileData$set_tileOrder(value) {
        this.$34_1 = value;
        return value;
    },
    get_title: function SP_WebParts_TileData$get_title() {
        return this.$0_1;
    },
    set_title: function SP_WebParts_TileData$set_title(value) {
        this.$0_1 = value;
        return value;
    },
    get_typeId: function SP_WebParts_TileData$get_typeId() {
        return '{9786d53b-4147-4e57-9d94-1d9f335d42b3}';
    },
    writeToXml: function SP_WebParts_TileData$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['BackgroundImageLocation', 'Description', 'ID', 'LinkLocation', 'TileOrder', 'Title'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_WebParts_TileData$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.BackgroundImageLocation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$21_1 = $v_0;
            delete parentNode.BackgroundImageLocation;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.ID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2X_1 = $v_0;
            delete parentNode.ID;
        }
        $v_0 = parentNode.LinkLocation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2c_1 = $v_0;
            delete parentNode.LinkLocation;
        }
        $v_0 = parentNode.TileOrder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$34_1 = $v_0;
            delete parentNode.TileOrder;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = $v_0;
            delete parentNode.Title;
        }
    }
};
SP.WebParts.WebPart = function SP_WebParts_WebPart(context, objectPath) {
    SP.WebParts.WebPart.initializeBase(this, [context, objectPath]);
};
SP.WebParts.WebPart.prototype = {
    get_hidden: function SP_WebParts_WebPart$get_hidden() {
        this.checkUninitializedProperty('Hidden');
        return ((this.get_objectData()).get_properties())['Hidden'];
    },
    set_hidden: function SP_WebParts_WebPart$set_hidden(value) {
        ((this.get_objectData()).get_properties())['Hidden'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Hidden', value));
        }
        return value;
    },
    get_isClosed: function SP_WebParts_WebPart$get_isClosed() {
        this.checkUninitializedProperty('IsClosed');
        return ((this.get_objectData()).get_properties())['IsClosed'];
    },
    get_properties: function SP_WebParts_WebPart$get_properties() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['Properties'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.PropertyValues(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Properties'));
            ((this.get_objectData()).get_clientObjectProperties())['Properties'] = $v_0;
        }
        return $v_0;
    },
    get_subtitle: function SP_WebParts_WebPart$get_subtitle() {
        this.checkUninitializedProperty('Subtitle');
        return ((this.get_objectData()).get_properties())['Subtitle'];
    },
    get_title: function SP_WebParts_WebPart$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData()).get_properties())['Title'];
    },
    set_title: function SP_WebParts_WebPart$set_title(value) {
        ((this.get_objectData()).get_properties())['Title'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    get_titleUrl: function SP_WebParts_WebPart$get_titleUrl() {
        this.checkUninitializedProperty('TitleUrl');
        return ((this.get_objectData()).get_properties())['TitleUrl'];
    },
    set_titleUrl: function SP_WebParts_WebPart$set_titleUrl(value) {
        ((this.get_objectData()).get_properties())['TitleUrl'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'TitleUrl', value));
        }
        return value;
    },
    get_zoneIndex: function SP_WebParts_WebPart$get_zoneIndex() {
        this.checkUninitializedProperty('ZoneIndex');
        return ((this.get_objectData()).get_properties())['ZoneIndex'];
    },
    initPropertiesFromJson: function SP_WebParts_WebPart$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Hidden;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Hidden'] = $v_0;
            delete parentNode.Hidden;
        }
        $v_0 = parentNode.IsClosed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsClosed'] = $v_0;
            delete parentNode.IsClosed;
        }
        $v_0 = parentNode.Properties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Properties', this.get_properties(), $v_0);
            (this.get_properties()).fromJson($v_0);
            delete parentNode.Properties;
        }
        $v_0 = parentNode.Subtitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Subtitle'] = $v_0;
            delete parentNode.Subtitle;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Title'] = $v_0;
            delete parentNode.Title;
        }
        $v_0 = parentNode.TitleUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['TitleUrl'] = $v_0;
            delete parentNode.TitleUrl;
        }
        $v_0 = parentNode.ZoneIndex;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ZoneIndex'] = $v_0;
            delete parentNode.ZoneIndex;
        }
    }
};
SP.WebParts.WebPartPropertyNames = function SP_WebParts_WebPartPropertyNames() {
};
SP.WebParts.WebPartObjectPropertyNames = function SP_WebParts_WebPartObjectPropertyNames() {
};
SP.WebParts.WebPartDefinition = function SP_WebParts_WebPartDefinition(context, objectPath) {
    SP.WebParts.WebPartDefinition.initializeBase(this, [context, objectPath]);
};
SP.WebParts.WebPartDefinition.prototype = {
    get_id: function SP_WebParts_WebPartDefinition$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_webPart: function SP_WebParts_WebPartDefinition$get_webPart() {
        var $v_0 = ((this.get_objectData()).get_clientObjectProperties())['WebPart'];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WebParts.WebPart(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'WebPart'));
            ((this.get_objectData()).get_clientObjectProperties())['WebPart'] = $v_0;
        }
        return $v_0;
    },
    initPropertiesFromJson: function SP_WebParts_WebPartDefinition$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.WebPart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('WebPart', this.get_webPart(), $v_0);
            (this.get_webPart()).fromJson($v_0);
            delete parentNode.WebPart;
        }
    },
    saveWebPartChanges: function SP_WebParts_WebPartDefinition$saveWebPartChanges() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SaveWebPartChanges', null);

        $v_0.addQuery($v_1);
    },
    closeWebPart: function SP_WebParts_WebPartDefinition$closeWebPart() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'CloseWebPart', null);

        $v_0.addQuery($v_1);
    },
    openWebPart: function SP_WebParts_WebPartDefinition$openWebPart() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'OpenWebPart', null);

        $v_0.addQuery($v_1);
    },
    deleteWebPart: function SP_WebParts_WebPartDefinition$deleteWebPart() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteWebPart', null);

        $v_0.addQuery($v_1);
    },
    moveWebPartTo: function SP_WebParts_WebPartDefinition$moveWebPartTo(zoneID, zoneIndex) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'MoveWebPartTo', [zoneID, zoneIndex]);

        $v_0.addQuery($v_1);
    }
};
SP.WebParts.WebPartDefinitionPropertyNames = function SP_WebParts_WebPartDefinitionPropertyNames() {
};
SP.WebParts.WebPartDefinitionObjectPropertyNames = function SP_WebParts_WebPartDefinitionObjectPropertyNames() {
};
SP.WebParts.WebPartDefinitionCollection = function SP_WebParts_WebPartDefinitionCollection(context, objectPath) {
    SP.WebParts.WebPartDefinitionCollection.initializeBase(this, [context, objectPath]);
};
SP.WebParts.WebPartDefinitionCollection.prototype = {
    itemAt: function SP_WebParts_WebPartDefinitionCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_WebParts_WebPartDefinitionCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_WebParts_WebPartDefinitionCollection$get_childItemType() {
        return SP.WebParts.WebPartDefinition;
    },
    getById: function SP_WebParts_WebPartDefinitionCollection$getById(id) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetById'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetById'] = $v_2;
        }
        $v_1 = $v_2[id.toString()];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.WebParts.WebPartDefinition($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [id]));
        $v_2[id.toString()] = $v_1;
        return $v_1;
    },
    getByControlId: function SP_WebParts_WebPartDefinitionCollection$getByControlId(controlId) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByControlId'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetByControlId'] = $v_2;
        }
        $v_1 = $v_2[controlId];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.WebParts.WebPartDefinition($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByControlId', [controlId]));
        $v_2[controlId] = $v_1;
        return $v_1;
    }
};
Type.registerNamespace('SP.Workflow');
SP.Workflow.WorkflowAssociation = function SP_Workflow_WorkflowAssociation(context, objectPath) {
    SP.Workflow.WorkflowAssociation.initializeBase(this, [context, objectPath]);
};
SP.Workflow.WorkflowAssociation.prototype = {
    $7_1: function SP_Workflow_WorkflowAssociation$$7_1($p0) {
        if ($p0) {
            ((this.get_objectData()).get_properties())['Name'] = $p0.$6_1;
        }
    },
    get_allowManual: function SP_Workflow_WorkflowAssociation$get_allowManual() {
        this.checkUninitializedProperty('AllowManual');
        return ((this.get_objectData()).get_properties())['AllowManual'];
    },
    set_allowManual: function SP_Workflow_WorkflowAssociation$set_allowManual(value) {
        ((this.get_objectData()).get_properties())['AllowManual'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AllowManual', value));
        }
        return value;
    },
    get_associationData: function SP_Workflow_WorkflowAssociation$get_associationData() {
        this.checkUninitializedProperty('AssociationData');
        return ((this.get_objectData()).get_properties())['AssociationData'];
    },
    set_associationData: function SP_Workflow_WorkflowAssociation$set_associationData(value) {
        ((this.get_objectData()).get_properties())['AssociationData'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AssociationData', value));
        }
        return value;
    },
    get_autoStartChange: function SP_Workflow_WorkflowAssociation$get_autoStartChange() {
        this.checkUninitializedProperty('AutoStartChange');
        return ((this.get_objectData()).get_properties())['AutoStartChange'];
    },
    set_autoStartChange: function SP_Workflow_WorkflowAssociation$set_autoStartChange(value) {
        ((this.get_objectData()).get_properties())['AutoStartChange'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AutoStartChange', value));
        }
        return value;
    },
    get_autoStartCreate: function SP_Workflow_WorkflowAssociation$get_autoStartCreate() {
        this.checkUninitializedProperty('AutoStartCreate');
        return ((this.get_objectData()).get_properties())['AutoStartCreate'];
    },
    set_autoStartCreate: function SP_Workflow_WorkflowAssociation$set_autoStartCreate(value) {
        ((this.get_objectData()).get_properties())['AutoStartCreate'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'AutoStartCreate', value));
        }
        return value;
    },
    get_baseId: function SP_Workflow_WorkflowAssociation$get_baseId() {
        this.checkUninitializedProperty('BaseId');
        return ((this.get_objectData()).get_properties())['BaseId'];
    },
    get_created: function SP_Workflow_WorkflowAssociation$get_created() {
        this.checkUninitializedProperty('Created');
        return ((this.get_objectData()).get_properties())['Created'];
    },
    get_description: function SP_Workflow_WorkflowAssociation$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData()).get_properties())['Description'];
    },
    set_description: function SP_Workflow_WorkflowAssociation$set_description(value) {
        ((this.get_objectData()).get_properties())['Description'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    get_enabled: function SP_Workflow_WorkflowAssociation$get_enabled() {
        this.checkUninitializedProperty('Enabled');
        return ((this.get_objectData()).get_properties())['Enabled'];
    },
    set_enabled: function SP_Workflow_WorkflowAssociation$set_enabled(value) {
        ((this.get_objectData()).get_properties())['Enabled'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Enabled', value));
        }
        return value;
    },
    get_historyListTitle: function SP_Workflow_WorkflowAssociation$get_historyListTitle() {
        this.checkUninitializedProperty('HistoryListTitle');
        return ((this.get_objectData()).get_properties())['HistoryListTitle'];
    },
    set_historyListTitle: function SP_Workflow_WorkflowAssociation$set_historyListTitle(value) {
        ((this.get_objectData()).get_properties())['HistoryListTitle'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'HistoryListTitle', value));
        }
        return value;
    },
    get_id: function SP_Workflow_WorkflowAssociation$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_instantiationUrl: function SP_Workflow_WorkflowAssociation$get_instantiationUrl() {
        this.checkUninitializedProperty('InstantiationUrl');
        return ((this.get_objectData()).get_properties())['InstantiationUrl'];
    },
    get_internalName: function SP_Workflow_WorkflowAssociation$get_internalName() {
        this.checkUninitializedProperty('InternalName');
        return ((this.get_objectData()).get_properties())['InternalName'];
    },
    get_isDeclarative: function SP_Workflow_WorkflowAssociation$get_isDeclarative() {
        this.checkUninitializedProperty('IsDeclarative');
        return ((this.get_objectData()).get_properties())['IsDeclarative'];
    },
    get_listId: function SP_Workflow_WorkflowAssociation$get_listId() {
        this.checkUninitializedProperty('ListId');
        return ((this.get_objectData()).get_properties())['ListId'];
    },
    get_modified: function SP_Workflow_WorkflowAssociation$get_modified() {
        this.checkUninitializedProperty('Modified');
        return ((this.get_objectData()).get_properties())['Modified'];
    },
    get_name: function SP_Workflow_WorkflowAssociation$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    set_name: function SP_Workflow_WorkflowAssociation$set_name(value) {
        ((this.get_objectData()).get_properties())['Name'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    get_taskListTitle: function SP_Workflow_WorkflowAssociation$get_taskListTitle() {
        this.checkUninitializedProperty('TaskListTitle');
        return ((this.get_objectData()).get_properties())['TaskListTitle'];
    },
    set_taskListTitle: function SP_Workflow_WorkflowAssociation$set_taskListTitle(value) {
        ((this.get_objectData()).get_properties())['TaskListTitle'] = value;
        if (this.get_context()) {
            (this.get_context()).addQuery(new SP.ClientActionSetProperty(this, 'TaskListTitle', value));
        }
        return value;
    },
    get_webId: function SP_Workflow_WorkflowAssociation$get_webId() {
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData()).get_properties())['WebId'];
    },
    initPropertiesFromJson: function SP_Workflow_WorkflowAssociation$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AllowManual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowManual'] = $v_0;
            delete parentNode.AllowManual;
        }
        $v_0 = parentNode.AssociationData;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AssociationData'] = $v_0;
            delete parentNode.AssociationData;
        }
        $v_0 = parentNode.AutoStartChange;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AutoStartChange'] = $v_0;
            delete parentNode.AutoStartChange;
        }
        $v_0 = parentNode.AutoStartCreate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AutoStartCreate'] = $v_0;
            delete parentNode.AutoStartCreate;
        }
        $v_0 = parentNode.BaseId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['BaseId'] = $v_0;
            delete parentNode.BaseId;
        }
        $v_0 = parentNode.Created;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Created'] = $v_0;
            delete parentNode.Created;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Description'] = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.Enabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Enabled'] = $v_0;
            delete parentNode.Enabled;
        }
        $v_0 = parentNode.HistoryListTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['HistoryListTitle'] = $v_0;
            delete parentNode.HistoryListTitle;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.InstantiationUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['InstantiationUrl'] = $v_0;
            delete parentNode.InstantiationUrl;
        }
        $v_0 = parentNode.InternalName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['InternalName'] = $v_0;
            delete parentNode.InternalName;
        }
        $v_0 = parentNode.IsDeclarative;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsDeclarative'] = $v_0;
            delete parentNode.IsDeclarative;
        }
        $v_0 = parentNode.ListId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['ListId'] = $v_0;
            delete parentNode.ListId;
        }
        $v_0 = parentNode.Modified;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Modified'] = $v_0;
            delete parentNode.Modified;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.TaskListTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['TaskListTitle'] = $v_0;
            delete parentNode.TaskListTitle;
        }
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['WebId'] = $v_0;
            delete parentNode.WebId;
        }
    },
    update: function SP_Workflow_WorkflowAssociation$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);

        $v_0.addQuery($v_1);
        this.refreshLoad();
    },
    deleteObject: function SP_Workflow_WorkflowAssociation$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);

        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
};
SP.Workflow.WorkflowAssociationPropertyNames = function SP_Workflow_WorkflowAssociationPropertyNames() {
};
SP.Workflow.WorkflowAssociationCollection = function SP_Workflow_WorkflowAssociationCollection(context, objectPath) {
    SP.Workflow.WorkflowAssociationCollection.initializeBase(this, [context, objectPath]);
};
SP.Workflow.WorkflowAssociationCollection.prototype = {
    itemAt: function SP_Workflow_WorkflowAssociationCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_Workflow_WorkflowAssociationCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_Workflow_WorkflowAssociationCollection$get_childItemType() {
        return SP.Workflow.WorkflowAssociation;
    },
    getById: function SP_Workflow_WorkflowAssociationCollection$getById(associationId) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.Workflow.WorkflowAssociation($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [associationId]));
        return $v_1;
    },
    add: function SP_Workflow_WorkflowAssociationCollection$add(parameters) {
        var $v_0 = this.get_context();
        var $v_1;

        $v_1 = new SP.Workflow.WorkflowAssociation($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [parameters]));
        ($v_1.get_path()).setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        $v_1.$7_1(parameters);
        return $v_1;
    },
    getByName: function SP_Workflow_WorkflowAssociationCollection$getByName(name) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByName'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetByName'] = $v_2;
        }
        $v_1 = $v_2[name];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.Workflow.WorkflowAssociation($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByName', [name]));
        $v_2[name] = $v_1;
        var $v_3 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_3.get_id(), $v_1);
        $v_0.addQuery($v_3);
        return $v_1;
    }
};
SP.Workflow.WorkflowAssociationCreationInformation = function SP_Workflow_WorkflowAssociationCreationInformation() {
    SP.Workflow.WorkflowAssociationCreationInformation.initializeBase(this);
};
SP.Workflow.WorkflowAssociationCreationInformation.prototype = {
    $2B_1: null,
    $2C_1: null,
    $3t_1: null,
    $6_1: null,
    $4P_1: null,
    $4Q_1: null,
    get_contentTypeAssociationHistoryListName: function SP_Workflow_WorkflowAssociationCreationInformation$get_contentTypeAssociationHistoryListName() {
        return this.$2B_1;
    },
    set_contentTypeAssociationHistoryListName: function SP_Workflow_WorkflowAssociationCreationInformation$set_contentTypeAssociationHistoryListName(value) {
        this.$2B_1 = value;
        return value;
    },
    get_contentTypeAssociationTaskListName: function SP_Workflow_WorkflowAssociationCreationInformation$get_contentTypeAssociationTaskListName() {
        return this.$2C_1;
    },
    set_contentTypeAssociationTaskListName: function SP_Workflow_WorkflowAssociationCreationInformation$set_contentTypeAssociationTaskListName(value) {
        this.$2C_1 = value;
        return value;
    },
    get_historyList: function SP_Workflow_WorkflowAssociationCreationInformation$get_historyList() {
        return this.$3t_1;
    },
    set_historyList: function SP_Workflow_WorkflowAssociationCreationInformation$set_historyList(value) {
        this.$3t_1 = value;
        return value;
    },
    get_name: function SP_Workflow_WorkflowAssociationCreationInformation$get_name() {
        return this.$6_1;
    },
    set_name: function SP_Workflow_WorkflowAssociationCreationInformation$set_name(value) {
        this.$6_1 = value;
        return value;
    },
    get_taskList: function SP_Workflow_WorkflowAssociationCreationInformation$get_taskList() {
        return this.$4P_1;
    },
    set_taskList: function SP_Workflow_WorkflowAssociationCreationInformation$set_taskList(value) {
        this.$4P_1 = value;
        return value;
    },
    get_template: function SP_Workflow_WorkflowAssociationCreationInformation$get_template() {
        return this.$4Q_1;
    },
    set_template: function SP_Workflow_WorkflowAssociationCreationInformation$set_template(value) {
        this.$4Q_1 = value;
        return value;
    },
    get_typeId: function SP_Workflow_WorkflowAssociationCreationInformation$get_typeId() {
        return '{3c812f4f-8465-41cb-b298-bd33b2604a51}';
    },
    writeToXml: function SP_Workflow_WorkflowAssociationCreationInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = ['ContentTypeAssociationHistoryListName', 'ContentTypeAssociationTaskListName', 'HistoryList', 'Name', 'TaskList', 'Template'];

        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    initPropertiesFromJson: function SP_Workflow_WorkflowAssociationCreationInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.ContentTypeAssociationHistoryListName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2B_1 = $v_0;
            delete parentNode.ContentTypeAssociationHistoryListName;
        }
        $v_0 = parentNode.ContentTypeAssociationTaskListName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2C_1 = $v_0;
            delete parentNode.ContentTypeAssociationTaskListName;
        }
        $v_0 = parentNode.HistoryList;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            delete parentNode.HistoryList;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.TaskList;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            delete parentNode.TaskList;
        }
        $v_0 = parentNode.Template;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            delete parentNode.Template;
        }
    }
};
SP.Workflow.WorkflowTemplate = function SP_Workflow_WorkflowTemplate(context, objectPath) {
    SP.Workflow.WorkflowTemplate.initializeBase(this, [context, objectPath]);
};
SP.Workflow.WorkflowTemplate.prototype = {
    get_allowManual: function SP_Workflow_WorkflowTemplate$get_allowManual() {
        this.checkUninitializedProperty('AllowManual');
        return ((this.get_objectData()).get_properties())['AllowManual'];
    },
    get_associationUrl: function SP_Workflow_WorkflowTemplate$get_associationUrl() {
        this.checkUninitializedProperty('AssociationUrl');
        return ((this.get_objectData()).get_properties())['AssociationUrl'];
    },
    get_autoStartChange: function SP_Workflow_WorkflowTemplate$get_autoStartChange() {
        this.checkUninitializedProperty('AutoStartChange');
        return ((this.get_objectData()).get_properties())['AutoStartChange'];
    },
    get_autoStartCreate: function SP_Workflow_WorkflowTemplate$get_autoStartCreate() {
        this.checkUninitializedProperty('AutoStartCreate');
        return ((this.get_objectData()).get_properties())['AutoStartCreate'];
    },
    get_description: function SP_Workflow_WorkflowTemplate$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData()).get_properties())['Description'];
    },
    get_id: function SP_Workflow_WorkflowTemplate$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData()).get_properties())['Id'];
    },
    get_isDeclarative: function SP_Workflow_WorkflowTemplate$get_isDeclarative() {
        this.checkUninitializedProperty('IsDeclarative');
        return ((this.get_objectData()).get_properties())['IsDeclarative'];
    },
    get_name: function SP_Workflow_WorkflowTemplate$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData()).get_properties())['Name'];
    },
    get_permissionsManual: function SP_Workflow_WorkflowTemplate$get_permissionsManual() {
        this.checkUninitializedProperty('PermissionsManual');
        return ((this.get_objectData()).get_properties())['PermissionsManual'];
    },
    initPropertiesFromJson: function SP_Workflow_WorkflowTemplate$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;

        $v_0 = parentNode.AllowManual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AllowManual'] = $v_0;
            delete parentNode.AllowManual;
        }
        $v_0 = parentNode.AssociationUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AssociationUrl'] = $v_0;
            delete parentNode.AssociationUrl;
        }
        $v_0 = parentNode.AutoStartChange;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AutoStartChange'] = $v_0;
            delete parentNode.AutoStartChange;
        }
        $v_0 = parentNode.AutoStartCreate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['AutoStartCreate'] = $v_0;
            delete parentNode.AutoStartCreate;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Description'] = $v_0;
            delete parentNode.Description;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Id'] = $v_0;
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsDeclarative;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['IsDeclarative'] = $v_0;
            delete parentNode.IsDeclarative;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['Name'] = $v_0;
            delete parentNode.Name;
        }
        $v_0 = parentNode.PermissionsManual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            ((this.get_objectData()).get_properties())['PermissionsManual'] = SP.DataConvert.fixupType(this.get_context(), $v_0);
            delete parentNode.PermissionsManual;
        }
    }
};
SP.Workflow.WorkflowTemplatePropertyNames = function SP_Workflow_WorkflowTemplatePropertyNames() {
};
SP.Workflow.WorkflowTemplateCollection = function SP_Workflow_WorkflowTemplateCollection(context, objectPath) {
    SP.Workflow.WorkflowTemplateCollection.initializeBase(this, [context, objectPath]);
};
SP.Workflow.WorkflowTemplateCollection.prototype = {
    itemAt: function SP_Workflow_WorkflowTemplateCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    get_item: function SP_Workflow_WorkflowTemplateCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    get_childItemType: function SP_Workflow_WorkflowTemplateCollection$get_childItemType() {
        return SP.Workflow.WorkflowTemplate;
    },
    getById: function SP_Workflow_WorkflowTemplateCollection$getById(templateId) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetById'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetById'] = $v_2;
        }
        $v_1 = $v_2[templateId.toString()];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.Workflow.WorkflowTemplate($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [templateId]));
        $v_2[templateId.toString()] = $v_1;
        return $v_1;
    },
    getByName: function SP_Workflow_WorkflowTemplateCollection$getByName(name) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData()).get_methodReturnObjects())['GetByName'];

        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            ((this.get_objectData()).get_methodReturnObjects())['GetByName'] = $v_2;
        }
        $v_1 = $v_2[name];
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.Workflow.WorkflowTemplate($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByName', [name]));
        $v_2[name] = $v_1;
        var $v_3 = new SP.ObjectIdentityQuery($v_1.get_path());

        $v_0.addQueryIdAndResultObject($v_3.get_id(), $v_1);
        $v_0.addQuery($v_3);
        return $v_1;
    }
};
SP.ClientContext.registerClass('SP.ClientContext', SP.ClientRuntimeContext);
SP.ULS.registerClass('SP.ULS');
SP.AccessRequests.registerClass('SP.AccessRequests');
SP.AlternateUrl.registerClass('SP.AlternateUrl', SP.ClientObject);
SP.AlternateUrlPropertyNames.registerClass('SP.AlternateUrlPropertyNames');
SP.App.registerClass('SP.App', SP.ClientObject);
SP.AppPropertyNames.registerClass('SP.AppPropertyNames');
SP.AppCatalog.registerClass('SP.AppCatalog');
SP.AppContextSite.registerClass('SP.AppContextSite', SP.ClientObject);
SP.AppContextSiteObjectPropertyNames.registerClass('SP.AppContextSiteObjectPropertyNames');
SP.AppInstance.registerClass('SP.AppInstance', SP.ClientObject);
SP.AppInstancePropertyNames.registerClass('SP.AppInstancePropertyNames');
SP.AppInstanceErrorDetails.registerClass('SP.AppInstanceErrorDetails', SP.ClientObject);
SP.AppInstanceErrorDetailsPropertyNames.registerClass('SP.AppInstanceErrorDetailsPropertyNames');
SP.AppLicense.registerClass('SP.AppLicense', SP.ClientValueObject);
SP.AppLicenseCollection.registerClass('SP.AppLicenseCollection', SP.ClientValueObjectCollection);
SP.Attachment.registerClass('SP.Attachment', SP.ClientObject);
SP.AttachmentPropertyNames.registerClass('SP.AttachmentPropertyNames');
SP.AttachmentCollection.registerClass('SP.AttachmentCollection', SP.ClientObjectCollection);
SP.AttachmentCreationInformation.registerClass('SP.AttachmentCreationInformation', SP.ClientValueObject);
SP.BasePermissions.registerClass('SP.BasePermissions', SP.ClientValueObject);
SP.CamlQuery.registerClass('SP.CamlQuery', SP.ClientValueObject);
SP.Change.registerClass('SP.Change', SP.ClientObject);
SP.ChangePropertyNames.registerClass('SP.ChangePropertyNames');
SP.ChangeAlert.registerClass('SP.ChangeAlert', SP.Change);
SP.ChangeAlertPropertyNames.registerClass('SP.ChangeAlertPropertyNames');
SP.ChangeCollection.registerClass('SP.ChangeCollection', SP.ClientObjectCollection);
SP.ChangeContentType.registerClass('SP.ChangeContentType', SP.Change);
SP.ChangeContentTypePropertyNames.registerClass('SP.ChangeContentTypePropertyNames');
SP.ChangeField.registerClass('SP.ChangeField', SP.Change);
SP.ChangeFieldPropertyNames.registerClass('SP.ChangeFieldPropertyNames');
SP.ChangeFile.registerClass('SP.ChangeFile', SP.Change);
SP.ChangeFilePropertyNames.registerClass('SP.ChangeFilePropertyNames');
SP.ChangeFolder.registerClass('SP.ChangeFolder', SP.Change);
SP.ChangeFolderPropertyNames.registerClass('SP.ChangeFolderPropertyNames');
SP.ChangeGroup.registerClass('SP.ChangeGroup', SP.Change);
SP.ChangeGroupPropertyNames.registerClass('SP.ChangeGroupPropertyNames');
SP.ChangeItem.registerClass('SP.ChangeItem', SP.Change);
SP.ChangeItemPropertyNames.registerClass('SP.ChangeItemPropertyNames');
SP.ChangeList.registerClass('SP.ChangeList', SP.Change);
SP.ChangeListPropertyNames.registerClass('SP.ChangeListPropertyNames');
SP.ChangeLogItemQuery.registerClass('SP.ChangeLogItemQuery', SP.ClientValueObject);
SP.ChangeQuery.registerClass('SP.ChangeQuery', SP.ClientValueObject);
SP.ChangeSite.registerClass('SP.ChangeSite', SP.Change);
SP.ChangeToken.registerClass('SP.ChangeToken', SP.ClientValueObject);
SP.ChangeUser.registerClass('SP.ChangeUser', SP.Change);
SP.ChangeUserPropertyNames.registerClass('SP.ChangeUserPropertyNames');
SP.ChangeView.registerClass('SP.ChangeView', SP.Change);
SP.ChangeViewPropertyNames.registerClass('SP.ChangeViewPropertyNames');
SP.ChangeWeb.registerClass('SP.ChangeWeb', SP.Change);
SP.ChangeWebPropertyNames.registerClass('SP.ChangeWebPropertyNames');
SP.CompatibilityRange.registerClass('SP.CompatibilityRange', SP.ClientObject);
SP.ContentType.registerClass('SP.ContentType', SP.ClientObject);
SP.ContentTypePropertyNames.registerClass('SP.ContentTypePropertyNames');
SP.ContentTypeObjectPropertyNames.registerClass('SP.ContentTypeObjectPropertyNames');
SP.ContentTypeCollection.registerClass('SP.ContentTypeCollection', SP.ClientObjectCollection);
SP.ContentTypeCreationInformation.registerClass('SP.ContentTypeCreationInformation', SP.ClientValueObject);
SP.ContentTypeId.registerClass('SP.ContentTypeId', SP.ClientValueObject);
SP.EventReceiverDefinition.registerClass('SP.EventReceiverDefinition', SP.ClientObject);
SP.EventReceiverDefinitionPropertyNames.registerClass('SP.EventReceiverDefinitionPropertyNames');
SP.EventReceiverDefinitionCollection.registerClass('SP.EventReceiverDefinitionCollection', SP.ClientObjectCollection);
SP.EventReceiverDefinitionCreationInformation.registerClass('SP.EventReceiverDefinitionCreationInformation', SP.ClientValueObject);
SP.Feature.registerClass('SP.Feature', SP.ClientObject);
SP.FeaturePropertyNames.registerClass('SP.FeaturePropertyNames');
SP.FeatureCollection.registerClass('SP.FeatureCollection', SP.ClientObjectCollection);
SP.Field.registerClass('SP.Field', SP.ClientObject);
SP.FieldPropertyNames.registerClass('SP.FieldPropertyNames');
SP.FieldCalculated.registerClass('SP.FieldCalculated', SP.Field);
SP.FieldCalculatedPropertyNames.registerClass('SP.FieldCalculatedPropertyNames');
SP.FieldCalculatedErrorValue.registerClass('SP.FieldCalculatedErrorValue', SP.ClientValueObject);
SP.FieldMultiChoice.registerClass('SP.FieldMultiChoice', SP.Field);
SP.FieldChoice.registerClass('SP.FieldChoice', SP.FieldMultiChoice);
SP.FieldChoicePropertyNames.registerClass('SP.FieldChoicePropertyNames');
SP.FieldCollection.registerClass('SP.FieldCollection', SP.ClientObjectCollection);
SP.FieldCollectionPropertyNames.registerClass('SP.FieldCollectionPropertyNames');
SP.FieldComputed.registerClass('SP.FieldComputed', SP.Field);
SP.FieldComputedPropertyNames.registerClass('SP.FieldComputedPropertyNames');
SP.FieldNumber.registerClass('SP.FieldNumber', SP.Field);
SP.FieldCurrency.registerClass('SP.FieldCurrency', SP.FieldNumber);
SP.FieldCurrencyPropertyNames.registerClass('SP.FieldCurrencyPropertyNames');
SP.FieldDateTime.registerClass('SP.FieldDateTime', SP.Field);
SP.FieldDateTimePropertyNames.registerClass('SP.FieldDateTimePropertyNames');
SP.FieldGeolocation.registerClass('SP.FieldGeolocation', SP.Field);
SP.FieldGeolocationValue.registerClass('SP.FieldGeolocationValue', SP.ClientValueObject);
SP.FieldGuid.registerClass('SP.FieldGuid', SP.Field);
SP.FieldLink.registerClass('SP.FieldLink', SP.ClientObject);
SP.FieldLinkPropertyNames.registerClass('SP.FieldLinkPropertyNames');
SP.FieldLinkCollection.registerClass('SP.FieldLinkCollection', SP.ClientObjectCollection);
SP.FieldLinkCreationInformation.registerClass('SP.FieldLinkCreationInformation', SP.ClientValueObject);
SP.FieldLookup.registerClass('SP.FieldLookup', SP.Field);
SP.FieldLookupPropertyNames.registerClass('SP.FieldLookupPropertyNames');
SP.FieldLookupValue.registerClass('SP.FieldLookupValue', SP.ClientValueObject);
SP.FieldMultiChoicePropertyNames.registerClass('SP.FieldMultiChoicePropertyNames');
SP.FieldMultiLineText.registerClass('SP.FieldMultiLineText', SP.Field);
SP.FieldMultiLineTextPropertyNames.registerClass('SP.FieldMultiLineTextPropertyNames');
SP.FieldNumberPropertyNames.registerClass('SP.FieldNumberPropertyNames');
SP.FieldRatingScale.registerClass('SP.FieldRatingScale', SP.FieldMultiChoice);
SP.FieldRatingScalePropertyNames.registerClass('SP.FieldRatingScalePropertyNames');
SP.FieldRatingScaleQuestionAnswer.registerClass('SP.FieldRatingScaleQuestionAnswer', SP.ClientValueObject);
SP.FieldStringValues.registerClass('SP.FieldStringValues', SP.ClientObject);
SP.FieldText.registerClass('SP.FieldText', SP.Field);
SP.FieldTextPropertyNames.registerClass('SP.FieldTextPropertyNames');
SP.FieldUrl.registerClass('SP.FieldUrl', SP.Field);
SP.FieldUrlPropertyNames.registerClass('SP.FieldUrlPropertyNames');
SP.FieldUrlValue.registerClass('SP.FieldUrlValue', SP.ClientValueObject);
SP.FieldUser.registerClass('SP.FieldUser', SP.FieldLookup);
SP.FieldUserPropertyNames.registerClass('SP.FieldUserPropertyNames');
SP.FieldUserValue.registerClass('SP.FieldUserValue', SP.FieldLookupValue);
SP.File.registerClass('SP.File', SP.ClientObject);
SP.FilePropertyNames.registerClass('SP.FilePropertyNames');
SP.FileObjectPropertyNames.registerClass('SP.FileObjectPropertyNames');
SP.FileCollection.registerClass('SP.FileCollection', SP.ClientObjectCollection);
SP.FileCreationInformation.registerClass('SP.FileCreationInformation', SP.ClientValueObject);
SP.FileSaveBinaryInformation.registerClass('SP.FileSaveBinaryInformation', SP.ClientValueObject);
SP.FileVersion.registerClass('SP.FileVersion', SP.ClientObject);
SP.FileVersionPropertyNames.registerClass('SP.FileVersionPropertyNames');
SP.FileVersionObjectPropertyNames.registerClass('SP.FileVersionObjectPropertyNames');
SP.FileVersionCollection.registerClass('SP.FileVersionCollection', SP.ClientObjectCollection);
SP.Folder.registerClass('SP.Folder', SP.ClientObject);
SP.FolderPropertyNames.registerClass('SP.FolderPropertyNames');
SP.FolderObjectPropertyNames.registerClass('SP.FolderObjectPropertyNames');
SP.FolderCollection.registerClass('SP.FolderCollection', SP.ClientObjectCollection);
SP.Form.registerClass('SP.Form', SP.ClientObject);
SP.FormPropertyNames.registerClass('SP.FormPropertyNames');
SP.FormCollection.registerClass('SP.FormCollection', SP.ClientObjectCollection);
SP.Principal.registerClass('SP.Principal', SP.ClientObject);
SP.Group.registerClass('SP.Group', SP.Principal);
SP.GroupPropertyNames.registerClass('SP.GroupPropertyNames');
SP.GroupObjectPropertyNames.registerClass('SP.GroupObjectPropertyNames');
SP.GroupCollection.registerClass('SP.GroupCollection', SP.ClientObjectCollection);
SP.GroupCreationInformation.registerClass('SP.GroupCreationInformation', SP.ClientValueObject);
SP.InformationRightsManagementSettings.registerClass('SP.InformationRightsManagementSettings', SP.ClientObject);
SP.InformationRightsManagementSettingsPropertyNames.registerClass('SP.InformationRightsManagementSettingsPropertyNames');
SP.Language.registerClass('SP.Language', SP.ClientValueObject);
SP.SecurableObject.registerClass('SP.SecurableObject', SP.ClientObject);
SP.List.registerClass('SP.List', SP.SecurableObject);
SP.ListPropertyNames.registerClass('SP.ListPropertyNames');
SP.ListObjectPropertyNames.registerClass('SP.ListObjectPropertyNames');
SP.ListCollection.registerClass('SP.ListCollection', SP.ClientObjectCollection);
SP.ListCreationInformation.registerClass('SP.ListCreationInformation', SP.ClientValueObject);
SP.ListDataSource.registerClass('SP.ListDataSource', SP.ClientValueObject);
SP.ListDataValidationExceptionValue.registerClass('SP.ListDataValidationExceptionValue', SP.ClientValueObject);
SP.ListDataValidationFailure.registerClass('SP.ListDataValidationFailure', SP.ClientValueObject);
SP.ListItem.registerClass('SP.ListItem', SP.SecurableObject);
SP.ListItemPropertyNames.registerClass('SP.ListItemPropertyNames');
SP.ListItemObjectPropertyNames.registerClass('SP.ListItemObjectPropertyNames');
SP.ListItemCollection.registerClass('SP.ListItemCollection', SP.ClientObjectCollection);
SP.ListItemCollectionPropertyNames.registerClass('SP.ListItemCollectionPropertyNames');
SP.ListItemCollectionPosition.registerClass('SP.ListItemCollectionPosition', SP.ClientValueObject);
SP.ListItemCreationInformation.registerClass('SP.ListItemCreationInformation', SP.ClientValueObject);
SP.ListItemEntityCollection.registerClass('SP.ListItemEntityCollection', SP.ClientObjectCollection);
SP.ListItemFormUpdateValue.registerClass('SP.ListItemFormUpdateValue', SP.ClientValueObject);
SP.ListTemplate.registerClass('SP.ListTemplate', SP.ClientObject);
SP.ListTemplatePropertyNames.registerClass('SP.ListTemplatePropertyNames');
SP.ListTemplateCollection.registerClass('SP.ListTemplateCollection', SP.ClientObjectCollection);
SP.Navigation.registerClass('SP.Navigation', SP.ClientObject);
SP.NavigationPropertyNames.registerClass('SP.NavigationPropertyNames');
SP.NavigationObjectPropertyNames.registerClass('SP.NavigationObjectPropertyNames');
SP.NavigationNode.registerClass('SP.NavigationNode', SP.ClientObject);
SP.NavigationNodePropertyNames.registerClass('SP.NavigationNodePropertyNames');
SP.NavigationNodeObjectPropertyNames.registerClass('SP.NavigationNodeObjectPropertyNames');
SP.NavigationNodeCollection.registerClass('SP.NavigationNodeCollection', SP.ClientObjectCollection);
SP.NavigationNodeCreationInformation.registerClass('SP.NavigationNodeCreationInformation', SP.ClientValueObject);
SP.ObjectSharingInformation.registerClass('SP.ObjectSharingInformation', SP.ClientObject);
SP.ObjectSharingInformationPropertyNames.registerClass('SP.ObjectSharingInformationPropertyNames');
SP.ObjectSharingInformationUser.registerClass('SP.ObjectSharingInformationUser', SP.ClientObject);
SP.ObjectSharingInformationUserPropertyNames.registerClass('SP.ObjectSharingInformationUserPropertyNames');
SP.ObjectSharingInformationUserObjectPropertyNames.registerClass('SP.ObjectSharingInformationUserObjectPropertyNames');
SP.PrincipalPropertyNames.registerClass('SP.PrincipalPropertyNames');
SP.PropertyValues.registerClass('SP.PropertyValues', SP.ClientObject);
SP.PushNotificationSubscriber.registerClass('SP.PushNotificationSubscriber', SP.ClientObject);
SP.PushNotificationSubscriberPropertyNames.registerClass('SP.PushNotificationSubscriberPropertyNames');
SP.PushNotificationSubscriberObjectPropertyNames.registerClass('SP.PushNotificationSubscriberObjectPropertyNames');
SP.PushNotificationSubscriberCollection.registerClass('SP.PushNotificationSubscriberCollection', SP.ClientObjectCollection);
SP.RecycleBinItem.registerClass('SP.RecycleBinItem', SP.ClientObject);
SP.RecycleBinItemPropertyNames.registerClass('SP.RecycleBinItemPropertyNames');
SP.RecycleBinItemObjectPropertyNames.registerClass('SP.RecycleBinItemObjectPropertyNames');
SP.RecycleBinItemCollection.registerClass('SP.RecycleBinItemCollection', SP.ClientObjectCollection);
SP.RegionalSettings.registerClass('SP.RegionalSettings', SP.ClientObject);
SP.RegionalSettingsPropertyNames.registerClass('SP.RegionalSettingsPropertyNames');
SP.RegionalSettingsObjectPropertyNames.registerClass('SP.RegionalSettingsObjectPropertyNames');
SP.RelatedField.registerClass('SP.RelatedField', SP.ClientObject);
SP.RelatedFieldPropertyNames.registerClass('SP.RelatedFieldPropertyNames');
SP.RelatedFieldObjectPropertyNames.registerClass('SP.RelatedFieldObjectPropertyNames');
SP.RelatedFieldCollection.registerClass('SP.RelatedFieldCollection', SP.ClientObjectCollection);
SP.RelatedFieldExtendedData.registerClass('SP.RelatedFieldExtendedData', SP.ClientObject);
SP.RelatedFieldExtendedDataPropertyNames.registerClass('SP.RelatedFieldExtendedDataPropertyNames');
SP.RelatedFieldExtendedDataCollection.registerClass('SP.RelatedFieldExtendedDataCollection', SP.ClientObjectCollection);
SP.RelatedItem.registerClass('SP.RelatedItem', SP.ClientValueObject);
SP.RelatedItemManager.registerClass('SP.RelatedItemManager', SP.ClientObject);
SP.RequestContext.registerClass('SP.RequestContext', SP.ClientObject);
SP.RequestContextObjectPropertyNames.registerClass('SP.RequestContextObjectPropertyNames');
SP.RequestVariable.registerClass('SP.RequestVariable', SP.ClientObject);
SP.RequestVariablePropertyNames.registerClass('SP.RequestVariablePropertyNames');
SP.RoleAssignment.registerClass('SP.RoleAssignment', SP.ClientObject);
SP.RoleAssignmentPropertyNames.registerClass('SP.RoleAssignmentPropertyNames');
SP.RoleAssignmentObjectPropertyNames.registerClass('SP.RoleAssignmentObjectPropertyNames');
SP.RoleAssignmentCollection.registerClass('SP.RoleAssignmentCollection', SP.ClientObjectCollection);
SP.RoleAssignmentCollectionObjectPropertyNames.registerClass('SP.RoleAssignmentCollectionObjectPropertyNames');
SP.RoleDefinition.registerClass('SP.RoleDefinition', SP.ClientObject);
SP.RoleDefinitionPropertyNames.registerClass('SP.RoleDefinitionPropertyNames');
SP.RoleDefinitionBindingCollection.registerClass('SP.RoleDefinitionBindingCollection', SP.ClientObjectCollection);
SP.RoleDefinitionCollection.registerClass('SP.RoleDefinitionCollection', SP.ClientObjectCollection);
SP.RoleDefinitionCreationInformation.registerClass('SP.RoleDefinitionCreationInformation', SP.ClientValueObject);
SP.SecurableObjectPropertyNames.registerClass('SP.SecurableObjectPropertyNames');
SP.SecurableObjectObjectPropertyNames.registerClass('SP.SecurableObjectObjectPropertyNames');
SP.ServerSettings.registerClass('SP.ServerSettings');
SP.Site.registerClass('SP.Site', SP.ClientObject);
SP.SitePropertyNames.registerClass('SP.SitePropertyNames');
SP.SiteObjectPropertyNames.registerClass('SP.SiteObjectPropertyNames');
SP.SiteUrl.registerClass('SP.SiteUrl', SP.ClientObject);
SP.SubwebQuery.registerClass('SP.SubwebQuery', SP.ClientValueObject);
SP.ThemeInfo.registerClass('SP.ThemeInfo', SP.ClientObject);
SP.ThemeInfoPropertyNames.registerClass('SP.ThemeInfoPropertyNames');
SP.TimeZone.registerClass('SP.TimeZone', SP.ClientObject);
SP.TimeZonePropertyNames.registerClass('SP.TimeZonePropertyNames');
SP.TimeZoneCollection.registerClass('SP.TimeZoneCollection', SP.ClientObjectCollection);
SP.TimeZoneInformation.registerClass('SP.TimeZoneInformation', SP.ClientValueObject);
SP.UpgradeInfo.registerClass('SP.UpgradeInfo', SP.ClientValueObject);
SP.UsageInfo.registerClass('SP.UsageInfo', SP.ClientValueObject);
SP.User.registerClass('SP.User', SP.Principal);
SP.UserPropertyNames.registerClass('SP.UserPropertyNames');
SP.UserObjectPropertyNames.registerClass('SP.UserObjectPropertyNames');
SP.UserCollection.registerClass('SP.UserCollection', SP.ClientObjectCollection);
SP.UserCreationInformation.registerClass('SP.UserCreationInformation', SP.ClientValueObject);
SP.UserCustomAction.registerClass('SP.UserCustomAction', SP.ClientObject);
SP.UserCustomActionPropertyNames.registerClass('SP.UserCustomActionPropertyNames');
SP.UserCustomActionCollection.registerClass('SP.UserCustomActionCollection', SP.ClientObjectCollection);
SP.UserIdInfo.registerClass('SP.UserIdInfo', SP.ClientValueObject);
SP.View.registerClass('SP.View', SP.ClientObject);
SP.ViewPropertyNames.registerClass('SP.ViewPropertyNames');
SP.ViewObjectPropertyNames.registerClass('SP.ViewObjectPropertyNames');
SP.ViewCollection.registerClass('SP.ViewCollection', SP.ClientObjectCollection);
SP.ViewCreationInformation.registerClass('SP.ViewCreationInformation', SP.ClientValueObject);
SP.ViewFieldCollection.registerClass('SP.ViewFieldCollection', SP.ClientObjectCollection);
SP.ViewFieldCollectionPropertyNames.registerClass('SP.ViewFieldCollectionPropertyNames');
SP.Web.registerClass('SP.Web', SP.SecurableObject);
SP.WebPropertyNames.registerClass('SP.WebPropertyNames');
SP.WebObjectPropertyNames.registerClass('SP.WebObjectPropertyNames');
SP.WebCollection.registerClass('SP.WebCollection', SP.ClientObjectCollection);
SP.WebCreationInformation.registerClass('SP.WebCreationInformation', SP.ClientValueObject);
SP.WebInformation.registerClass('SP.WebInformation', SP.ClientObject);
SP.WebInformationPropertyNames.registerClass('SP.WebInformationPropertyNames');
SP.WebProxy.registerClass('SP.WebProxy');
SP.WebRequestInfo.registerClass('SP.WebRequestInfo', SP.ClientValueObject);
SP.WebResponseInfo.registerClass('SP.WebResponseInfo', SP.ClientValueObject);
SP.WebTemplate.registerClass('SP.WebTemplate', SP.ClientObject);
SP.WebTemplatePropertyNames.registerClass('SP.WebTemplatePropertyNames');
SP.WebTemplateCollection.registerClass('SP.WebTemplateCollection', SP.ClientObjectCollection);
SP.UI.PopoutMenu.registerClass('SP.UI.PopoutMenu', null, Sys.IDisposable);
SP.UI.AttractModeControl.registerClass('SP.UI.AttractModeControl', Sys.UI.Control);
SP.UI.Status.registerClass('SP.UI.Status');
SP.UI.Menu.registerClass('SP.UI.Menu');
SP.UI.MenuTest.registerClass('SP.UI.MenuTest');
SP.Utilities.Utility.registerClass('SP.Utilities.Utility');
SP.Utilities.EmailProperties.registerClass('SP.Utilities.EmailProperties', SP.ClientValueObject);
SP.Utilities.PrincipalInfo.registerClass('SP.Utilities.PrincipalInfo', SP.ClientValueObject);
SP.Utilities.WikiPageCreationInformation.registerClass('SP.Utilities.WikiPageCreationInformation', SP.ClientValueObject);
SP.Application.UI.ViewSelectorMenuOptions.registerClass('SP.Application.UI.ViewSelectorMenuOptions');
SP.Application.UI.FormsInfo.registerClass('SP.Application.UI.FormsInfo');
SP.Application.UI.DefaultFormsInformation.registerClass('SP.Application.UI.DefaultFormsInformation');
SP.Application.UI.DefaultFormsMenuBuilder.registerClass('SP.Application.UI.DefaultFormsMenuBuilder');
SP.Application.UI.BrowserUtility.registerClass('SP.Application.UI.BrowserUtility');
SP.Application.UI.ViewSelectorGroups.registerClass('SP.Application.UI.ViewSelectorGroups');
SP.Application.UI.ViewSelectorMenuItem.registerClass('SP.Application.UI.ViewSelectorMenuItem');
SP.Application.UI.ViewSelectorSubMenu.registerClass('SP.Application.UI.ViewSelectorSubMenu');
SP.Application.UI.ServerMenus.registerClass('SP.Application.UI.ServerMenus');
SP.Application.UI.ViewSelectorMenuBuilder.registerClass('SP.Application.UI.ViewSelectorMenuBuilder');
SP.Application.UI.MoreColorsPicker.registerClass('SP.Application.UI.MoreColorsPicker', Sys.UI.Control);
SP.Application.UI.MappedColor.registerClass('SP.Application.UI.MappedColor');
SP.Application.UI.MoreColorsPage.registerClass('SP.Application.UI.MoreColorsPage', Sys.UI.Control);
SP.Application.UI.ThemeWebPage.registerClass('SP.Application.UI.ThemeWebPage', Sys.UI.Control);
SP.Application.UI.WikiPageNameInPlaceEditor.registerClass('SP.Application.UI.WikiPageNameInPlaceEditor');
SP.UI.ApplicationPages.SelectorSelectionEventArgs.registerClass('SP.UI.ApplicationPages.SelectorSelectionEventArgs', Sys.EventArgs);
SP.UI.ApplicationPages.CalendarSelector.registerClass('SP.UI.ApplicationPages.CalendarSelector', Sys.Component);
SP.UI.ApplicationPages.BaseSelectorComponent.registerClass('SP.UI.ApplicationPages.BaseSelectorComponent', null, SP.UI.ApplicationPages.ISelectorComponent);
SP.UI.ApplicationPages.CalendarInstanceRepository.registerClass('SP.UI.ApplicationPages.CalendarInstanceRepository');
SP.UI.ApplicationPages.ResolveEntity.registerClass('SP.UI.ApplicationPages.ResolveEntity');
SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters.registerClass('SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters', SP.ClientValueObject);
SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.registerClass('SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface');
SP.UI.ApplicationPages.PeoplePickerWebServiceInterface.registerClass('SP.UI.ApplicationPages.PeoplePickerWebServiceInterface');
SP.Analytics.AnalyticsUsageEntry.registerClass('SP.Analytics.AnalyticsUsageEntry', SP.ClientObject);
SP.BusinessData.AppBdcCatalog.registerClass('SP.BusinessData.AppBdcCatalog', SP.ClientObject);
SP.BusinessData.Entity.registerClass('SP.BusinessData.Entity', SP.ClientObject);
SP.BusinessData.EntityPropertyNames.registerClass('SP.BusinessData.EntityPropertyNames');
SP.BusinessData.EntityField.registerClass('SP.BusinessData.EntityField', SP.ClientObject);
SP.BusinessData.EntityFieldPropertyNames.registerClass('SP.BusinessData.EntityFieldPropertyNames');
SP.BusinessData.EntityIdentifier.registerClass('SP.BusinessData.EntityIdentifier', SP.ClientObject);
SP.BusinessData.EntityIdentifierPropertyNames.registerClass('SP.BusinessData.EntityIdentifierPropertyNames');
SP.BusinessData.EntityView.registerClass('SP.BusinessData.EntityView', SP.ClientObject);
SP.BusinessData.EntityViewPropertyNames.registerClass('SP.BusinessData.EntityViewPropertyNames');
SP.BusinessData.EntityViewObjectPropertyNames.registerClass('SP.BusinessData.EntityViewObjectPropertyNames');
SP.BusinessData.Filter.registerClass('SP.BusinessData.Filter', SP.ClientObject);
SP.BusinessData.FilterPropertyNames.registerClass('SP.BusinessData.FilterPropertyNames');
SP.BusinessData.LobSystem.registerClass('SP.BusinessData.LobSystem', SP.ClientObject);
SP.BusinessData.LobSystemPropertyNames.registerClass('SP.BusinessData.LobSystemPropertyNames');
SP.BusinessData.LobSystemInstance.registerClass('SP.BusinessData.LobSystemInstance', SP.ClientObject);
SP.BusinessData.LobSystemInstancePropertyNames.registerClass('SP.BusinessData.LobSystemInstancePropertyNames');
SP.BusinessData.MethodExecutionResult.registerClass('SP.BusinessData.MethodExecutionResult', SP.ClientObject);
SP.BusinessData.MethodExecutionResultObjectPropertyNames.registerClass('SP.BusinessData.MethodExecutionResultObjectPropertyNames');
SP.BusinessData.ReturnParameterCollection.registerClass('SP.BusinessData.ReturnParameterCollection', SP.ClientObjectCollection);
SP.BusinessData.TypeDescriptor.registerClass('SP.BusinessData.TypeDescriptor', SP.ClientObject);
SP.BusinessData.TypeDescriptorPropertyNames.registerClass('SP.BusinessData.TypeDescriptorPropertyNames');
SP.BusinessData.Collections.EntityFieldCollection.registerClass('SP.BusinessData.Collections.EntityFieldCollection', SP.ClientObjectCollection);
SP.BusinessData.Collections.EntityIdentifierCollection.registerClass('SP.BusinessData.Collections.EntityIdentifierCollection', SP.ClientObjectCollection);
SP.BusinessData.Collections.EntityInstanceCollection.registerClass('SP.BusinessData.Collections.EntityInstanceCollection', SP.ClientObjectCollection);
SP.BusinessData.Collections.FilterCollection.registerClass('SP.BusinessData.Collections.FilterCollection', SP.ClientObjectCollection);
SP.BusinessData.Collections.LobSystemInstanceCollection.registerClass('SP.BusinessData.Collections.LobSystemInstanceCollection', SP.ClientObjectCollection);
SP.BusinessData.Collections.TypeDescriptorCollection.registerClass('SP.BusinessData.Collections.TypeDescriptorCollection', SP.ClientObjectCollection);
SP.BusinessData.Infrastructure.ExternalSubscriptionStore.registerClass('SP.BusinessData.Infrastructure.ExternalSubscriptionStore', SP.ClientObject);
SP.BusinessData.Runtime.EntityFieldValueDictionary.registerClass('SP.BusinessData.Runtime.EntityFieldValueDictionary', SP.ClientObject);
SP.BusinessData.Runtime.EntityIdentity.registerClass('SP.BusinessData.Runtime.EntityIdentity', SP.ClientObject);
SP.BusinessData.Runtime.EntityIdentityPropertyNames.registerClass('SP.BusinessData.Runtime.EntityIdentityPropertyNames');
SP.BusinessData.Runtime.EntityInstance.registerClass('SP.BusinessData.Runtime.EntityInstance', SP.ClientObject);
SP.BusinessData.Runtime.NotificationCallback.registerClass('SP.BusinessData.Runtime.NotificationCallback', SP.ClientObject);
SP.BusinessData.Runtime.NotificationCallbackPropertyNames.registerClass('SP.BusinessData.Runtime.NotificationCallbackPropertyNames');
SP.BusinessData.Runtime.Subscription.registerClass('SP.BusinessData.Runtime.Subscription', SP.ClientObject);
SP.BusinessData.Runtime.SubscriptionPropertyNames.registerClass('SP.BusinessData.Runtime.SubscriptionPropertyNames');
SP.Sharing.DocumentSharingManager.registerClass('SP.Sharing.DocumentSharingManager');
SP.Sharing.UserRoleAssignment.registerClass('SP.Sharing.UserRoleAssignment', SP.ClientValueObject);
SP.Sharing.UserSharingResult.registerClass('SP.Sharing.UserSharingResult', SP.ClientValueObject);
SP.SiteHealth.SiteHealthResult.registerClass('SP.SiteHealth.SiteHealthResult', SP.ClientValueObject);
SP.SiteHealth.SiteHealthSummary.registerClass('SP.SiteHealth.SiteHealthSummary', SP.ClientObject);
SP.SiteHealth.SiteHealthSummaryPropertyNames.registerClass('SP.SiteHealth.SiteHealthSummaryPropertyNames');
SP.WebParts.LimitedWebPartManager.registerClass('SP.WebParts.LimitedWebPartManager', SP.ClientObject);
SP.WebParts.LimitedWebPartManagerPropertyNames.registerClass('SP.WebParts.LimitedWebPartManagerPropertyNames');
SP.WebParts.LimitedWebPartManagerObjectPropertyNames.registerClass('SP.WebParts.LimitedWebPartManagerObjectPropertyNames');
SP.WebParts.TileData.registerClass('SP.WebParts.TileData', SP.ClientValueObject);
SP.WebParts.WebPart.registerClass('SP.WebParts.WebPart', SP.ClientObject);
SP.WebParts.WebPartPropertyNames.registerClass('SP.WebParts.WebPartPropertyNames');
SP.WebParts.WebPartObjectPropertyNames.registerClass('SP.WebParts.WebPartObjectPropertyNames');
SP.WebParts.WebPartDefinition.registerClass('SP.WebParts.WebPartDefinition', SP.ClientObject);
SP.WebParts.WebPartDefinitionPropertyNames.registerClass('SP.WebParts.WebPartDefinitionPropertyNames');
SP.WebParts.WebPartDefinitionObjectPropertyNames.registerClass('SP.WebParts.WebPartDefinitionObjectPropertyNames');
SP.WebParts.WebPartDefinitionCollection.registerClass('SP.WebParts.WebPartDefinitionCollection', SP.ClientObjectCollection);
SP.Workflow.WorkflowAssociation.registerClass('SP.Workflow.WorkflowAssociation', SP.ClientObject);
SP.Workflow.WorkflowAssociationPropertyNames.registerClass('SP.Workflow.WorkflowAssociationPropertyNames');
SP.Workflow.WorkflowAssociationCollection.registerClass('SP.Workflow.WorkflowAssociationCollection', SP.ClientObjectCollection);
SP.Workflow.WorkflowAssociationCreationInformation.registerClass('SP.Workflow.WorkflowAssociationCreationInformation', SP.ClientValueObject);
SP.Workflow.WorkflowTemplate.registerClass('SP.Workflow.WorkflowTemplate', SP.ClientObject);
SP.Workflow.WorkflowTemplatePropertyNames.registerClass('SP.Workflow.WorkflowTemplatePropertyNames');
SP.Workflow.WorkflowTemplateCollection.registerClass('SP.Workflow.WorkflowTemplateCollection', SP.ClientObjectCollection);
function sp_initialize() {
    SP.ClientContext.$p = null;
    SP.ULS.$3N = false;
    SP.ULS.$f = false;
    SP.ULS.$1c = false;
    SP.ULS.$E = null;
    SP.ULS.$1d = false;
    SP.ULS.$K = '';
    SP.ULS.$3O = 0;
    SP.ULS.$3P = [];
    SP.AlternateUrlPropertyNames.uri = 'Uri';
    SP.AlternateUrlPropertyNames.urlZone = 'UrlZone';
    SP.AppPropertyNames.assetId = 'AssetId';
    SP.AppPropertyNames.contentMarket = 'ContentMarket';
    SP.AppPropertyNames.versionString = 'VersionString';
    SP.AppContextSiteObjectPropertyNames.site = 'Site';
    SP.AppContextSiteObjectPropertyNames.web = 'Web';
    SP.AppInstancePropertyNames.appPrincipalId = 'AppPrincipalId';
    SP.AppInstancePropertyNames.appWebFullUrl = 'AppWebFullUrl';
    SP.AppInstancePropertyNames.id = 'Id';
    SP.AppInstancePropertyNames.inError = 'InError';
    SP.AppInstancePropertyNames.startPage = 'StartPage';
    SP.AppInstancePropertyNames.remoteAppUrl = 'RemoteAppUrl';
    SP.AppInstancePropertyNames.settingsPageUrl = 'SettingsPageUrl';
    SP.AppInstancePropertyNames.siteId = 'SiteId';
    SP.AppInstancePropertyNames.status = 'Status';
    SP.AppInstancePropertyNames.title = 'Title';
    SP.AppInstancePropertyNames.webId = 'WebId';
    SP.AppInstanceErrorDetailsPropertyNames.correlationId = 'CorrelationId';
    SP.AppInstanceErrorDetailsPropertyNames.errorDetail = 'ErrorDetail';
    SP.AppInstanceErrorDetailsPropertyNames.errorType = 'ErrorType';
    SP.AppInstanceErrorDetailsPropertyNames.errorTypeName = 'ErrorTypeName';
    SP.AppInstanceErrorDetailsPropertyNames.exceptionMessage = 'ExceptionMessage';
    SP.AppInstanceErrorDetailsPropertyNames.source = 'Source';
    SP.AppInstanceErrorDetailsPropertyNames.sourceName = 'SourceName';
    SP.AttachmentPropertyNames.fileName = 'FileName';
    SP.AttachmentPropertyNames.serverRelativeUrl = 'ServerRelativeUrl';
    SP.ChangePropertyNames.changeToken = 'ChangeToken';
    SP.ChangePropertyNames.changeType = 'ChangeType';
    SP.ChangePropertyNames.siteId = 'SiteId';
    SP.ChangePropertyNames.time = 'Time';
    SP.ChangeAlertPropertyNames.alertId = 'AlertId';
    SP.ChangeAlertPropertyNames.webId = 'WebId';
    SP.ChangeContentTypePropertyNames.contentTypeId = 'ContentTypeId';
    SP.ChangeContentTypePropertyNames.webId = 'WebId';
    SP.ChangeFieldPropertyNames.fieldId = 'FieldId';
    SP.ChangeFieldPropertyNames.webId = 'WebId';
    SP.ChangeFilePropertyNames.uniqueId = 'UniqueId';
    SP.ChangeFilePropertyNames.webId = 'WebId';
    SP.ChangeFolderPropertyNames.uniqueId = 'UniqueId';
    SP.ChangeFolderPropertyNames.webId = 'WebId';
    SP.ChangeGroupPropertyNames.groupId = 'GroupId';
    SP.ChangeItemPropertyNames.itemId = 'ItemId';
    SP.ChangeItemPropertyNames.listId = 'ListId';
    SP.ChangeItemPropertyNames.webId = 'WebId';
    SP.ChangeListPropertyNames.listId = 'ListId';
    SP.ChangeListPropertyNames.webId = 'WebId';
    SP.ChangeUserPropertyNames.activate = 'Activate';
    SP.ChangeUserPropertyNames.userId = 'UserId';
    SP.ChangeViewPropertyNames.viewId = 'ViewId';
    SP.ChangeViewPropertyNames.listId = 'ListId';
    SP.ChangeViewPropertyNames.webId = 'WebId';
    SP.ChangeWebPropertyNames.webId = 'WebId';
    SP.ContentTypePropertyNames.description = 'Description';
    SP.ContentTypePropertyNames.displayFormTemplateName = 'DisplayFormTemplateName';
    SP.ContentTypePropertyNames.displayFormUrl = 'DisplayFormUrl';
    SP.ContentTypePropertyNames.documentTemplate = 'DocumentTemplate';
    SP.ContentTypePropertyNames.documentTemplateUrl = 'DocumentTemplateUrl';
    SP.ContentTypePropertyNames.editFormTemplateName = 'EditFormTemplateName';
    SP.ContentTypePropertyNames.editFormUrl = 'EditFormUrl';
    SP.ContentTypePropertyNames.group = 'Group';
    SP.ContentTypePropertyNames.hidden = 'Hidden';
    SP.ContentTypePropertyNames.id = 'Id';
    SP.ContentTypePropertyNames.jsLink = 'JSLink';
    SP.ContentTypePropertyNames.mobileDisplayFormUrl = 'MobileDisplayFormUrl';
    SP.ContentTypePropertyNames.mobileEditFormUrl = 'MobileEditFormUrl';
    SP.ContentTypePropertyNames.mobileNewFormUrl = 'MobileNewFormUrl';
    SP.ContentTypePropertyNames.name = 'Name';
    SP.ContentTypePropertyNames.newFormTemplateName = 'NewFormTemplateName';
    SP.ContentTypePropertyNames.newFormUrl = 'NewFormUrl';
    SP.ContentTypePropertyNames.readOnly = 'ReadOnly';
    SP.ContentTypePropertyNames.schemaXml = 'SchemaXml';
    SP.ContentTypePropertyNames.schemaXmlWithResourceTokens = 'SchemaXmlWithResourceTokens';
    SP.ContentTypePropertyNames.scope = 'Scope';
    SP.ContentTypePropertyNames.sealed = 'Sealed';
    SP.ContentTypePropertyNames.stringId = 'StringId';
    SP.ContentTypeObjectPropertyNames.fieldLinks = 'FieldLinks';
    SP.ContentTypeObjectPropertyNames.fields = 'Fields';
    SP.ContentTypeObjectPropertyNames.parent = 'Parent';
    SP.ContentTypeObjectPropertyNames.workflowAssociations = 'WorkflowAssociations';
    SP.EventReceiverDefinitionPropertyNames.receiverAssembly = 'ReceiverAssembly';
    SP.EventReceiverDefinitionPropertyNames.receiverClass = 'ReceiverClass';
    SP.EventReceiverDefinitionPropertyNames.receiverId = 'ReceiverId';
    SP.EventReceiverDefinitionPropertyNames.receiverName = 'ReceiverName';
    SP.EventReceiverDefinitionPropertyNames.sequenceNumber = 'SequenceNumber';
    SP.EventReceiverDefinitionPropertyNames.synchronization = 'Synchronization';
    SP.EventReceiverDefinitionPropertyNames.eventType = 'EventType';
    SP.EventReceiverDefinitionPropertyNames.receiverUrl = 'ReceiverUrl';
    SP.FeaturePropertyNames.definitionId = 'DefinitionId';
    SP.FieldPropertyNames.canBeDeleted = 'CanBeDeleted';
    SP.FieldPropertyNames.defaultValue = 'DefaultValue';
    SP.FieldPropertyNames.description = 'Description';
    SP.FieldPropertyNames.direction = 'Direction';
    SP.FieldPropertyNames.enforceUniqueValues = 'EnforceUniqueValues';
    SP.FieldPropertyNames.entityPropertyName = 'EntityPropertyName';
    SP.FieldPropertyNames.filterable = 'Filterable';
    SP.FieldPropertyNames.fromBaseType = 'FromBaseType';
    SP.FieldPropertyNames.group = 'Group';
    SP.FieldPropertyNames.hidden = 'Hidden';
    SP.FieldPropertyNames.id = 'Id';
    SP.FieldPropertyNames.indexed = 'Indexed';
    SP.FieldPropertyNames.internalName = 'InternalName';
    SP.FieldPropertyNames.jsLink = 'JSLink';
    SP.FieldPropertyNames.readOnlyField = 'ReadOnlyField';
    SP.FieldPropertyNames.required = 'Required';
    SP.FieldPropertyNames.schemaXml = 'SchemaXml';
    SP.FieldPropertyNames.schemaXmlWithResourceTokens = 'SchemaXmlWithResourceTokens';
    SP.FieldPropertyNames.scope = 'Scope';
    SP.FieldPropertyNames.sealed = 'Sealed';
    SP.FieldPropertyNames.sortable = 'Sortable';
    SP.FieldPropertyNames.staticName = 'StaticName';
    SP.FieldPropertyNames.title = 'Title';
    SP.FieldPropertyNames.fieldTypeKind = 'FieldTypeKind';
    SP.FieldPropertyNames.typeAsString = 'TypeAsString';
    SP.FieldPropertyNames.typeDisplayName = 'TypeDisplayName';
    SP.FieldPropertyNames.typeShortDescription = 'TypeShortDescription';
    SP.FieldPropertyNames.validationFormula = 'ValidationFormula';
    SP.FieldPropertyNames.validationMessage = 'ValidationMessage';
    SP.FieldCalculatedPropertyNames.dateFormat = 'DateFormat';
    SP.FieldCalculatedPropertyNames.formula = 'Formula';
    SP.FieldCalculatedPropertyNames.outputType = 'OutputType';
    SP.FieldChoicePropertyNames.editFormat = 'EditFormat';
    SP.FieldCollectionPropertyNames.schemaXml = 'SchemaXml';
    SP.FieldComputedPropertyNames.enableLookup = 'EnableLookup';
    SP.FieldCurrencyPropertyNames.currencyLocaleId = 'CurrencyLocaleId';
    SP.FieldDateTimePropertyNames.dateTimeCalendarType = 'DateTimeCalendarType';
    SP.FieldDateTimePropertyNames.displayFormat = 'DisplayFormat';
    SP.FieldDateTimePropertyNames.friendlyDisplayFormat = 'FriendlyDisplayFormat';
    SP.FieldLinkPropertyNames.hidden = 'Hidden';
    SP.FieldLinkPropertyNames.id = 'Id';
    SP.FieldLinkPropertyNames.name = 'Name';
    SP.FieldLinkPropertyNames.required = 'Required';
    SP.FieldLookupPropertyNames.allowMultipleValues = 'AllowMultipleValues';
    SP.FieldLookupPropertyNames.isRelationship = 'IsRelationship';
    SP.FieldLookupPropertyNames.lookupField = 'LookupField';
    SP.FieldLookupPropertyNames.lookupList = 'LookupList';
    SP.FieldLookupPropertyNames.lookupWebId = 'LookupWebId';
    SP.FieldLookupPropertyNames.primaryFieldId = 'PrimaryFieldId';
    SP.FieldLookupPropertyNames.relationshipDeleteBehavior = 'RelationshipDeleteBehavior';
    SP.FieldMultiChoicePropertyNames.fillInChoice = 'FillInChoice';
    SP.FieldMultiChoicePropertyNames.mappings = 'Mappings';
    SP.FieldMultiChoicePropertyNames.choices = 'Choices';
    SP.FieldMultiLineTextPropertyNames.allowHyperlink = 'AllowHyperlink';
    SP.FieldMultiLineTextPropertyNames.appendOnly = 'AppendOnly';
    SP.FieldMultiLineTextPropertyNames.numberOfLines = 'NumberOfLines';
    SP.FieldMultiLineTextPropertyNames.restrictedMode = 'RestrictedMode';
    SP.FieldMultiLineTextPropertyNames.richText = 'RichText';
    SP.FieldMultiLineTextPropertyNames.wikiLinking = 'WikiLinking';
    SP.FieldNumberPropertyNames.maximumValue = 'MaximumValue';
    SP.FieldNumberPropertyNames.minimumValue = 'MinimumValue';
    SP.FieldRatingScalePropertyNames.gridEndNumber = 'GridEndNumber';
    SP.FieldRatingScalePropertyNames.gridNAOptionText = 'GridNAOptionText';
    SP.FieldRatingScalePropertyNames.gridStartNumber = 'GridStartNumber';
    SP.FieldRatingScalePropertyNames.gridTextRangeAverage = 'GridTextRangeAverage';
    SP.FieldRatingScalePropertyNames.gridTextRangeHigh = 'GridTextRangeHigh';
    SP.FieldRatingScalePropertyNames.gridTextRangeLow = 'GridTextRangeLow';
    SP.FieldRatingScalePropertyNames.rangeCount = 'RangeCount';
    SP.FieldTextPropertyNames.maxLength = 'MaxLength';
    SP.FieldUrlPropertyNames.displayFormat = 'DisplayFormat';
    SP.FieldUserPropertyNames.allowDisplay = 'AllowDisplay';
    SP.FieldUserPropertyNames.presence = 'Presence';
    SP.FieldUserPropertyNames.selectionGroup = 'SelectionGroup';
    SP.FieldUserPropertyNames.selectionMode = 'SelectionMode';
    SP.FilePropertyNames.checkInComment = 'CheckInComment';
    SP.FilePropertyNames.checkOutType = 'CheckOutType';
    SP.FilePropertyNames.contentTag = 'ContentTag';
    SP.FilePropertyNames.customizedPageStatus = 'CustomizedPageStatus';
    SP.FilePropertyNames.eTag = 'ETag';
    SP.FilePropertyNames.exists = 'Exists';
    SP.FilePropertyNames.length = 'Length';
    SP.FilePropertyNames.level = 'Level';
    SP.FilePropertyNames.majorVersion = 'MajorVersion';
    SP.FilePropertyNames.minorVersion = 'MinorVersion';
    SP.FilePropertyNames.name = 'Name';
    SP.FilePropertyNames.serverRelativeUrl = 'ServerRelativeUrl';
    SP.FilePropertyNames.timeCreated = 'TimeCreated';
    SP.FilePropertyNames.timeLastModified = 'TimeLastModified';
    SP.FilePropertyNames.title = 'Title';
    SP.FilePropertyNames.uiVersion = 'UIVersion';
    SP.FilePropertyNames.uiVersionLabel = 'UIVersionLabel';
    SP.FileObjectPropertyNames.author = 'Author';
    SP.FileObjectPropertyNames.checkedOutByUser = 'CheckedOutByUser';
    SP.FileObjectPropertyNames.listItemAllFields = 'ListItemAllFields';
    SP.FileObjectPropertyNames.lockedByUser = 'LockedByUser';
    SP.FileObjectPropertyNames.modifiedBy = 'ModifiedBy';
    SP.FileObjectPropertyNames.versions = 'Versions';
    SP.FileVersionPropertyNames.checkInComment = 'CheckInComment';
    SP.FileVersionPropertyNames.created = 'Created';
    SP.FileVersionPropertyNames.id = 'ID';
    SP.FileVersionPropertyNames.isCurrentVersion = 'IsCurrentVersion';
    SP.FileVersionPropertyNames.size = 'Size';
    SP.FileVersionPropertyNames.url = 'Url';
    SP.FileVersionPropertyNames.versionLabel = 'VersionLabel';
    SP.FileVersionObjectPropertyNames.createdBy = 'CreatedBy';
    SP.FolderPropertyNames.contentTypeOrder = 'ContentTypeOrder';
    SP.FolderPropertyNames.itemCount = 'ItemCount';
    SP.FolderPropertyNames.name = 'Name';
    SP.FolderPropertyNames.serverRelativeUrl = 'ServerRelativeUrl';
    SP.FolderPropertyNames.uniqueContentTypeOrder = 'UniqueContentTypeOrder';
    SP.FolderPropertyNames.welcomePage = 'WelcomePage';
    SP.FolderObjectPropertyNames.files = 'Files';
    SP.FolderObjectPropertyNames.listItemAllFields = 'ListItemAllFields';
    SP.FolderObjectPropertyNames.parentFolder = 'ParentFolder';
    SP.FolderObjectPropertyNames.properties = 'Properties';
    SP.FolderObjectPropertyNames.folders = 'Folders';
    SP.FormPropertyNames.id = 'Id';
    SP.FormPropertyNames.serverRelativeUrl = 'ServerRelativeUrl';
    SP.FormPropertyNames.formType = 'FormType';
    SP.GroupPropertyNames.allowMembersEditMembership = 'AllowMembersEditMembership';
    SP.GroupPropertyNames.allowRequestToJoinLeave = 'AllowRequestToJoinLeave';
    SP.GroupPropertyNames.autoAcceptRequestToJoinLeave = 'AutoAcceptRequestToJoinLeave';
    SP.GroupPropertyNames.canCurrentUserEditMembership = 'CanCurrentUserEditMembership';
    SP.GroupPropertyNames.canCurrentUserManageGroup = 'CanCurrentUserManageGroup';
    SP.GroupPropertyNames.canCurrentUserViewMembership = 'CanCurrentUserViewMembership';
    SP.GroupPropertyNames.description = 'Description';
    SP.GroupPropertyNames.onlyAllowMembersViewMembership = 'OnlyAllowMembersViewMembership';
    SP.GroupPropertyNames.ownerTitle = 'OwnerTitle';
    SP.GroupPropertyNames.requestToJoinLeaveEmailSetting = 'RequestToJoinLeaveEmailSetting';
    SP.GroupObjectPropertyNames.owner = 'Owner';
    SP.GroupObjectPropertyNames.users = 'Users';
    SP.InformationRightsManagementSettingsPropertyNames.allowPrint = 'AllowPrint';
    SP.InformationRightsManagementSettingsPropertyNames.allowScript = 'AllowScript';
    SP.InformationRightsManagementSettingsPropertyNames.allowWriteCopy = 'AllowWriteCopy';
    SP.InformationRightsManagementSettingsPropertyNames.disableDocumentBrowserView = 'DisableDocumentBrowserView';
    SP.InformationRightsManagementSettingsPropertyNames.documentAccessExpireDays = 'DocumentAccessExpireDays';
    SP.InformationRightsManagementSettingsPropertyNames.documentLibraryProtectionExpireDate = 'DocumentLibraryProtectionExpireDate';
    SP.InformationRightsManagementSettingsPropertyNames.enableDocumentAccessExpire = 'EnableDocumentAccessExpire';
    SP.InformationRightsManagementSettingsPropertyNames.enableDocumentBrowserPublishingView = 'EnableDocumentBrowserPublishingView';
    SP.InformationRightsManagementSettingsPropertyNames.enableGroupProtection = 'EnableGroupProtection';
    SP.InformationRightsManagementSettingsPropertyNames.enableLicenseCacheExpire = 'EnableLicenseCacheExpire';
    SP.InformationRightsManagementSettingsPropertyNames.groupName = 'GroupName';
    SP.InformationRightsManagementSettingsPropertyNames.licenseCacheExpireDays = 'LicenseCacheExpireDays';
    SP.InformationRightsManagementSettingsPropertyNames.policyDescription = 'PolicyDescription';
    SP.InformationRightsManagementSettingsPropertyNames.policyTitle = 'PolicyTitle';
    SP.ListPropertyNames.allowContentTypes = 'AllowContentTypes';
    SP.ListPropertyNames.baseTemplate = 'BaseTemplate';
    SP.ListPropertyNames.baseType = 'BaseType';
    SP.ListPropertyNames.browserFileHandling = 'BrowserFileHandling';
    SP.ListPropertyNames.contentTypesEnabled = 'ContentTypesEnabled';
    SP.ListPropertyNames.created = 'Created';
    SP.ListPropertyNames.dataSource = 'DataSource';
    SP.ListPropertyNames.defaultContentApprovalWorkflowId = 'DefaultContentApprovalWorkflowId';
    SP.ListPropertyNames.defaultDisplayFormUrl = 'DefaultDisplayFormUrl';
    SP.ListPropertyNames.defaultEditFormUrl = 'DefaultEditFormUrl';
    SP.ListPropertyNames.defaultNewFormUrl = 'DefaultNewFormUrl';
    SP.ListPropertyNames.defaultViewUrl = 'DefaultViewUrl';
    SP.ListPropertyNames.description = 'Description';
    SP.ListPropertyNames.direction = 'Direction';
    SP.ListPropertyNames.documentTemplateUrl = 'DocumentTemplateUrl';
    SP.ListPropertyNames.draftVersionVisibility = 'DraftVersionVisibility';
    SP.ListPropertyNames.effectiveBasePermissions = 'EffectiveBasePermissions';
    SP.ListPropertyNames.effectiveBasePermissionsForUI = 'EffectiveBasePermissionsForUI';
    SP.ListPropertyNames.enableAttachments = 'EnableAttachments';
    SP.ListPropertyNames.enableFolderCreation = 'EnableFolderCreation';
    SP.ListPropertyNames.enableMinorVersions = 'EnableMinorVersions';
    SP.ListPropertyNames.enableModeration = 'EnableModeration';
    SP.ListPropertyNames.enableVersioning = 'EnableVersioning';
    SP.ListPropertyNames.entityTypeName = 'EntityTypeName';
    SP.ListPropertyNames.forceCheckout = 'ForceCheckout';
    SP.ListPropertyNames.hasExternalDataSource = 'HasExternalDataSource';
    SP.ListPropertyNames.hidden = 'Hidden';
    SP.ListPropertyNames.id = 'Id';
    SP.ListPropertyNames.imageUrl = 'ImageUrl';
    SP.ListPropertyNames.irmEnabled = 'IrmEnabled';
    SP.ListPropertyNames.irmExpire = 'IrmExpire';
    SP.ListPropertyNames.irmReject = 'IrmReject';
    SP.ListPropertyNames.isApplicationList = 'IsApplicationList';
    SP.ListPropertyNames.isCatalog = 'IsCatalog';
    SP.ListPropertyNames.isPrivate = 'IsPrivate';
    SP.ListPropertyNames.isSiteAssetsLibrary = 'IsSiteAssetsLibrary';
    SP.ListPropertyNames.itemCount = 'ItemCount';
    SP.ListPropertyNames.lastItemDeletedDate = 'LastItemDeletedDate';
    SP.ListPropertyNames.lastItemModifiedDate = 'LastItemModifiedDate';
    SP.ListPropertyNames.listItemEntityTypeFullName = 'ListItemEntityTypeFullName';
    SP.ListPropertyNames.multipleDataList = 'MultipleDataList';
    SP.ListPropertyNames.noCrawl = 'NoCrawl';
    SP.ListPropertyNames.onQuickLaunch = 'OnQuickLaunch';
    SP.ListPropertyNames.parentWebUrl = 'ParentWebUrl';
    SP.ListPropertyNames.schemaXml = 'SchemaXml';
    SP.ListPropertyNames.serverTemplateCanCreateFolders = 'ServerTemplateCanCreateFolders';
    SP.ListPropertyNames.templateFeatureId = 'TemplateFeatureId';
    SP.ListPropertyNames.title = 'Title';
    SP.ListPropertyNames.validationFormula = 'ValidationFormula';
    SP.ListPropertyNames.validationMessage = 'ValidationMessage';
    SP.ListObjectPropertyNames.contentTypes = 'ContentTypes';
    SP.ListObjectPropertyNames.defaultView = 'DefaultView';
    SP.ListObjectPropertyNames.eventReceivers = 'EventReceivers';
    SP.ListObjectPropertyNames.fields = 'Fields';
    SP.ListObjectPropertyNames.forms = 'Forms';
    SP.ListObjectPropertyNames.informationRightsManagementSettings = 'InformationRightsManagementSettings';
    SP.ListObjectPropertyNames.parentWeb = 'ParentWeb';
    SP.ListObjectPropertyNames.rootFolder = 'RootFolder';
    SP.ListObjectPropertyNames.userCustomActions = 'UserCustomActions';
    SP.ListObjectPropertyNames.views = 'Views';
    SP.ListObjectPropertyNames.workflowAssociations = 'WorkflowAssociations';
    SP.ListItemPropertyNames.displayName = 'DisplayName';
    SP.ListItemPropertyNames.effectiveBasePermissions = 'EffectiveBasePermissions';
    SP.ListItemPropertyNames.effectiveBasePermissionsForUI = 'EffectiveBasePermissionsForUI';
    SP.ListItemPropertyNames.fileSystemObjectType = 'FileSystemObjectType';
    SP.ListItemPropertyNames.id = 'Id';
    SP.ListItemObjectPropertyNames.attachmentFiles = 'AttachmentFiles';
    SP.ListItemObjectPropertyNames.contentType = 'ContentType';
    SP.ListItemObjectPropertyNames.fieldValuesAsHtml = 'FieldValuesAsHtml';
    SP.ListItemObjectPropertyNames.fieldValuesAsText = 'FieldValuesAsText';
    SP.ListItemObjectPropertyNames.fieldValuesForEdit = 'FieldValuesForEdit';
    SP.ListItemObjectPropertyNames.file = 'File';
    SP.ListItemObjectPropertyNames.folder = 'Folder';
    SP.ListItemObjectPropertyNames.parentList = 'ParentList';
    SP.ListItemCollectionPropertyNames.listItemCollectionPosition = 'ListItemCollectionPosition';
    SP.ListTemplatePropertyNames.allowsFolderCreation = 'AllowsFolderCreation';
    SP.ListTemplatePropertyNames.baseType = 'BaseType';
    SP.ListTemplatePropertyNames.description = 'Description';
    SP.ListTemplatePropertyNames.featureId = 'FeatureId';
    SP.ListTemplatePropertyNames.hidden = 'Hidden';
    SP.ListTemplatePropertyNames.imageUrl = 'ImageUrl';
    SP.ListTemplatePropertyNames.internalName = 'InternalName';
    SP.ListTemplatePropertyNames.isCustomTemplate = 'IsCustomTemplate';
    SP.ListTemplatePropertyNames.name = 'Name';
    SP.ListTemplatePropertyNames.onQuickLaunch = 'OnQuickLaunch';
    SP.ListTemplatePropertyNames.listTemplateTypeKind = 'ListTemplateTypeKind';
    SP.ListTemplatePropertyNames.unique = 'Unique';
    SP.NavigationPropertyNames.useShared = 'UseShared';
    SP.NavigationObjectPropertyNames.quickLaunch = 'QuickLaunch';
    SP.NavigationObjectPropertyNames.topNavigationBar = 'TopNavigationBar';
    SP.NavigationNodePropertyNames.id = 'Id';
    SP.NavigationNodePropertyNames.isDocLib = 'IsDocLib';
    SP.NavigationNodePropertyNames.isExternal = 'IsExternal';
    SP.NavigationNodePropertyNames.isVisible = 'IsVisible';
    SP.NavigationNodePropertyNames.title = 'Title';
    SP.NavigationNodePropertyNames.url = 'Url';
    SP.NavigationNodeObjectPropertyNames.children = 'Children';
    SP.ObjectSharingInformationPropertyNames.anonymousEditLink = 'AnonymousEditLink';
    SP.ObjectSharingInformationPropertyNames.anonymousViewLink = 'AnonymousViewLink';
    SP.ObjectSharingInformationPropertyNames.canManagePermissions = 'CanManagePermissions';
    SP.ObjectSharingInformationPropertyNames.hasPendingAccessRequests = 'HasPendingAccessRequests';
    SP.ObjectSharingInformationPropertyNames.hasPermissionLevels = 'HasPermissionLevels';
    SP.ObjectSharingInformationPropertyNames.isSharedWithCurrentUser = 'IsSharedWithCurrentUser';
    SP.ObjectSharingInformationPropertyNames.isSharedWithGuest = 'IsSharedWithGuest';
    SP.ObjectSharingInformationPropertyNames.isSharedWithMany = 'IsSharedWithMany';
    SP.ObjectSharingInformationPropertyNames.isSharedWithSecurityGroup = 'IsSharedWithSecurityGroup';
    SP.ObjectSharingInformationPropertyNames.pendingAccessRequestsLink = 'PendingAccessRequestsLink';
    SP.ObjectSharingInformationUserPropertyNames.customRoleNames = 'CustomRoleNames';
    SP.ObjectSharingInformationUserPropertyNames.department = 'Department';
    SP.ObjectSharingInformationUserPropertyNames.email = 'Email';
    SP.ObjectSharingInformationUserPropertyNames.hasEditPermission = 'HasEditPermission';
    SP.ObjectSharingInformationUserPropertyNames.hasViewPermission = 'HasViewPermission';
    SP.ObjectSharingInformationUserPropertyNames.id = 'Id';
    SP.ObjectSharingInformationUserPropertyNames.isSiteAdmin = 'IsSiteAdmin';
    SP.ObjectSharingInformationUserPropertyNames.jobTitle = 'JobTitle';
    SP.ObjectSharingInformationUserPropertyNames.loginName = 'LoginName';
    SP.ObjectSharingInformationUserPropertyNames.name = 'Name';
    SP.ObjectSharingInformationUserPropertyNames.picture = 'Picture';
    SP.ObjectSharingInformationUserPropertyNames.sipAddress = 'SipAddress';
    SP.ObjectSharingInformationUserObjectPropertyNames.principal = 'Principal';
    SP.ObjectSharingInformationUserObjectPropertyNames.user = 'User';
    SP.PrincipalPropertyNames.id = 'Id';
    SP.PrincipalPropertyNames.isHiddenInUI = 'IsHiddenInUI';
    SP.PrincipalPropertyNames.loginName = 'LoginName';
    SP.PrincipalPropertyNames.title = 'Title';
    SP.PrincipalPropertyNames.principalType = 'PrincipalType';
    SP.PushNotificationSubscriberPropertyNames.customArgs = 'CustomArgs';
    SP.PushNotificationSubscriberPropertyNames.deviceAppInstanceId = 'DeviceAppInstanceId';
    SP.PushNotificationSubscriberPropertyNames.lastModifiedTimeStamp = 'LastModifiedTimeStamp';
    SP.PushNotificationSubscriberPropertyNames.registrationTimeStamp = 'RegistrationTimeStamp';
    SP.PushNotificationSubscriberPropertyNames.serviceToken = 'ServiceToken';
    SP.PushNotificationSubscriberPropertyNames.subscriberType = 'SubscriberType';
    SP.PushNotificationSubscriberObjectPropertyNames.user = 'User';
    SP.RecycleBinItemPropertyNames.deletedDate = 'DeletedDate';
    SP.RecycleBinItemPropertyNames.dirName = 'DirName';
    SP.RecycleBinItemPropertyNames.id = 'Id';
    SP.RecycleBinItemPropertyNames.itemState = 'ItemState';
    SP.RecycleBinItemPropertyNames.itemType = 'ItemType';
    SP.RecycleBinItemPropertyNames.leafName = 'LeafName';
    SP.RecycleBinItemPropertyNames.size = 'Size';
    SP.RecycleBinItemPropertyNames.title = 'Title';
    SP.RecycleBinItemObjectPropertyNames.author = 'Author';
    SP.RecycleBinItemObjectPropertyNames.deletedBy = 'DeletedBy';
    SP.RegionalSettingsPropertyNames.adjustHijriDays = 'AdjustHijriDays';
    SP.RegionalSettingsPropertyNames.alternateCalendarType = 'AlternateCalendarType';
    SP.RegionalSettingsPropertyNames.AM = 'AM';
    SP.RegionalSettingsPropertyNames.calendarType = 'CalendarType';
    SP.RegionalSettingsPropertyNames.collation = 'Collation';
    SP.RegionalSettingsPropertyNames.collationLCID = 'CollationLCID';
    SP.RegionalSettingsPropertyNames.dateFormat = 'DateFormat';
    SP.RegionalSettingsPropertyNames.dateSeparator = 'DateSeparator';
    SP.RegionalSettingsPropertyNames.decimalSeparator = 'DecimalSeparator';
    SP.RegionalSettingsPropertyNames.digitGrouping = 'DigitGrouping';
    SP.RegionalSettingsPropertyNames.firstDayOfWeek = 'FirstDayOfWeek';
    SP.RegionalSettingsPropertyNames.firstWeekOfYear = 'FirstWeekOfYear';
    SP.RegionalSettingsPropertyNames.isEastAsia = 'IsEastAsia';
    SP.RegionalSettingsPropertyNames.isRightToLeft = 'IsRightToLeft';
    SP.RegionalSettingsPropertyNames.isUIRightToLeft = 'IsUIRightToLeft';
    SP.RegionalSettingsPropertyNames.listSeparator = 'ListSeparator';
    SP.RegionalSettingsPropertyNames.localeId = 'LocaleId';
    SP.RegionalSettingsPropertyNames.negativeSign = 'NegativeSign';
    SP.RegionalSettingsPropertyNames.negNumberMode = 'NegNumberMode';
    SP.RegionalSettingsPropertyNames.PM = 'PM';
    SP.RegionalSettingsPropertyNames.positiveSign = 'PositiveSign';
    SP.RegionalSettingsPropertyNames.showWeeks = 'ShowWeeks';
    SP.RegionalSettingsPropertyNames.thousandSeparator = 'ThousandSeparator';
    SP.RegionalSettingsPropertyNames.time24 = 'Time24';
    SP.RegionalSettingsPropertyNames.timeMarkerPosition = 'TimeMarkerPosition';
    SP.RegionalSettingsPropertyNames.timeSeparator = 'TimeSeparator';
    SP.RegionalSettingsPropertyNames.workDayEndHour = 'WorkDayEndHour';
    SP.RegionalSettingsPropertyNames.workDays = 'WorkDays';
    SP.RegionalSettingsPropertyNames.workDayStartHour = 'WorkDayStartHour';
    SP.RegionalSettingsObjectPropertyNames.timeZone = 'TimeZone';
    SP.RegionalSettingsObjectPropertyNames.timeZones = 'TimeZones';
    SP.RelatedFieldPropertyNames.fieldId = 'FieldId';
    SP.RelatedFieldPropertyNames.listId = 'ListId';
    SP.RelatedFieldPropertyNames.relationshipDeleteBehavior = 'RelationshipDeleteBehavior';
    SP.RelatedFieldPropertyNames.webId = 'WebId';
    SP.RelatedFieldObjectPropertyNames.lookupList = 'LookupList';
    SP.RelatedFieldExtendedDataPropertyNames.fieldId = 'FieldId';
    SP.RelatedFieldExtendedDataPropertyNames.listId = 'ListId';
    SP.RelatedFieldExtendedDataPropertyNames.listImageUrl = 'ListImageUrl';
    SP.RelatedFieldExtendedDataPropertyNames.resolvedListTitle = 'ResolvedListTitle';
    SP.RelatedFieldExtendedDataPropertyNames.toolTipDescription = 'ToolTipDescription';
    SP.RelatedFieldExtendedDataPropertyNames.webId = 'WebId';
    SP.RequestContextObjectPropertyNames.site = 'Site';
    SP.RequestContextObjectPropertyNames.web = 'Web';
    SP.RequestVariablePropertyNames.value = 'Value';
    SP.RoleAssignmentPropertyNames.principalId = 'PrincipalId';
    SP.RoleAssignmentObjectPropertyNames.member = 'Member';
    SP.RoleAssignmentObjectPropertyNames.roleDefinitionBindings = 'RoleDefinitionBindings';
    SP.RoleAssignmentCollectionObjectPropertyNames.groups = 'Groups';
    SP.RoleDefinitionPropertyNames.basePermissions = 'BasePermissions';
    SP.RoleDefinitionPropertyNames.description = 'Description';
    SP.RoleDefinitionPropertyNames.hidden = 'Hidden';
    SP.RoleDefinitionPropertyNames.id = 'Id';
    SP.RoleDefinitionPropertyNames.name = 'Name';
    SP.RoleDefinitionPropertyNames.order = 'Order';
    SP.RoleDefinitionPropertyNames.roleTypeKind = 'RoleTypeKind';
    SP.SecurableObjectPropertyNames.hasUniqueRoleAssignments = 'HasUniqueRoleAssignments';
    SP.SecurableObjectObjectPropertyNames.firstUniqueAncestorSecurableObject = 'FirstUniqueAncestorSecurableObject';
    SP.SecurableObjectObjectPropertyNames.roleAssignments = 'RoleAssignments';
    SP.SitePropertyNames.allowCreateDeclarativeWorkflow = 'AllowCreateDeclarativeWorkflow';
    SP.SitePropertyNames.allowDesigner = 'AllowDesigner';
    SP.SitePropertyNames.allowMasterPageEditing = 'AllowMasterPageEditing';
    SP.SitePropertyNames.allowRevertFromTemplate = 'AllowRevertFromTemplate';
    SP.SitePropertyNames.allowSaveDeclarativeWorkflowAsTemplate = 'AllowSaveDeclarativeWorkflowAsTemplate';
    SP.SitePropertyNames.allowSavePublishDeclarativeWorkflow = 'AllowSavePublishDeclarativeWorkflow';
    SP.SitePropertyNames.allowSelfServiceUpgrade = 'AllowSelfServiceUpgrade';
    SP.SitePropertyNames.allowSelfServiceUpgradeEvaluation = 'AllowSelfServiceUpgradeEvaluation';
    SP.SitePropertyNames.canUpgrade = 'CanUpgrade';
    SP.SitePropertyNames.compatibilityLevel = 'CompatibilityLevel';
    SP.SitePropertyNames.id = 'Id';
    SP.SitePropertyNames.lockIssue = 'LockIssue';
    SP.SitePropertyNames.maxItemsPerThrottledOperation = 'MaxItemsPerThrottledOperation';
    SP.SitePropertyNames.primaryUri = 'PrimaryUri';
    SP.SitePropertyNames.readOnly = 'ReadOnly';
    SP.SitePropertyNames.requiredDesignerVersion = 'RequiredDesignerVersion';
    SP.SitePropertyNames.serverRelativeUrl = 'ServerRelativeUrl';
    SP.SitePropertyNames.shareByLinkEnabled = 'ShareByLinkEnabled';
    SP.SitePropertyNames.showUrlStructure = 'ShowUrlStructure';
    SP.SitePropertyNames.uiVersionConfigurationEnabled = 'UIVersionConfigurationEnabled';
    SP.SitePropertyNames.upgradeInfo = 'UpgradeInfo';
    SP.SitePropertyNames.upgradeReminderDate = 'UpgradeReminderDate';
    SP.SitePropertyNames.upgrading = 'Upgrading';
    SP.SitePropertyNames.url = 'Url';
    SP.SitePropertyNames.usage = 'Usage';
    SP.SiteObjectPropertyNames.eventReceivers = 'EventReceivers';
    SP.SiteObjectPropertyNames.features = 'Features';
    SP.SiteObjectPropertyNames.owner = 'Owner';
    SP.SiteObjectPropertyNames.recycleBin = 'RecycleBin';
    SP.SiteObjectPropertyNames.rootWeb = 'RootWeb';
    SP.SiteObjectPropertyNames.userCustomActions = 'UserCustomActions';
    SP.ThemeInfoPropertyNames.accessibleDescription = 'AccessibleDescription';
    SP.ThemeInfoPropertyNames.themeBackgroundImageUri = 'ThemeBackgroundImageUri';
    SP.TimeZonePropertyNames.description = 'Description';
    SP.TimeZonePropertyNames.id = 'Id';
    SP.TimeZonePropertyNames.information = 'Information';
    SP.UserPropertyNames.email = 'Email';
    SP.UserPropertyNames.isSiteAdmin = 'IsSiteAdmin';
    SP.UserPropertyNames.userId = 'UserId';
    SP.UserObjectPropertyNames.groups = 'Groups';
    SP.UserCustomActionPropertyNames.commandUIExtension = 'CommandUIExtension';
    SP.UserCustomActionPropertyNames.description = 'Description';
    SP.UserCustomActionPropertyNames.group = 'Group';
    SP.UserCustomActionPropertyNames.id = 'Id';
    SP.UserCustomActionPropertyNames.imageUrl = 'ImageUrl';
    SP.UserCustomActionPropertyNames.location = 'Location';
    SP.UserCustomActionPropertyNames.name = 'Name';
    SP.UserCustomActionPropertyNames.registrationId = 'RegistrationId';
    SP.UserCustomActionPropertyNames.registrationType = 'RegistrationType';
    SP.UserCustomActionPropertyNames.rights = 'Rights';
    SP.UserCustomActionPropertyNames.scope = 'Scope';
    SP.UserCustomActionPropertyNames.scriptBlock = 'ScriptBlock';
    SP.UserCustomActionPropertyNames.scriptSrc = 'ScriptSrc';
    SP.UserCustomActionPropertyNames.sequence = 'Sequence';
    SP.UserCustomActionPropertyNames.title = 'Title';
    SP.UserCustomActionPropertyNames.url = 'Url';
    SP.UserCustomActionPropertyNames.versionOfUserCustomAction = 'VersionOfUserCustomAction';
    SP.ViewPropertyNames.aggregations = 'Aggregations';
    SP.ViewPropertyNames.aggregationsStatus = 'AggregationsStatus';
    SP.ViewPropertyNames.baseViewId = 'BaseViewId';
    SP.ViewPropertyNames.contentTypeId = 'ContentTypeId';
    SP.ViewPropertyNames.defaultView = 'DefaultView';
    SP.ViewPropertyNames.defaultViewForContentType = 'DefaultViewForContentType';
    SP.ViewPropertyNames.editorModified = 'EditorModified';
    SP.ViewPropertyNames.formats = 'Formats';
    SP.ViewPropertyNames.hidden = 'Hidden';
    SP.ViewPropertyNames.htmlSchemaXml = 'HtmlSchemaXml';
    SP.ViewPropertyNames.id = 'Id';
    SP.ViewPropertyNames.imageUrl = 'ImageUrl';
    SP.ViewPropertyNames.includeRootFolder = 'IncludeRootFolder';
    SP.ViewPropertyNames.viewJoins = 'ViewJoins';
    SP.ViewPropertyNames.jsLink = 'JSLink';
    SP.ViewPropertyNames.listViewXml = 'ListViewXml';
    SP.ViewPropertyNames.method = 'Method';
    SP.ViewPropertyNames.mobileDefaultView = 'MobileDefaultView';
    SP.ViewPropertyNames.mobileView = 'MobileView';
    SP.ViewPropertyNames.moderationType = 'ModerationType';
    SP.ViewPropertyNames.orderedView = 'OrderedView';
    SP.ViewPropertyNames.paged = 'Paged';
    SP.ViewPropertyNames.personalView = 'PersonalView';
    SP.ViewPropertyNames.viewProjectedFields = 'ViewProjectedFields';
    SP.ViewPropertyNames.viewQuery = 'ViewQuery';
    SP.ViewPropertyNames.readOnlyView = 'ReadOnlyView';
    SP.ViewPropertyNames.requiresClientIntegration = 'RequiresClientIntegration';
    SP.ViewPropertyNames.rowLimit = 'RowLimit';
    SP.ViewPropertyNames.scope = 'Scope';
    SP.ViewPropertyNames.serverRelativeUrl = 'ServerRelativeUrl';
    SP.ViewPropertyNames.styleId = 'StyleId';
    SP.ViewPropertyNames.threaded = 'Threaded';
    SP.ViewPropertyNames.title = 'Title';
    SP.ViewPropertyNames.toolbar = 'Toolbar';
    SP.ViewPropertyNames.toolbarTemplateName = 'ToolbarTemplateName';
    SP.ViewPropertyNames.viewType = 'ViewType';
    SP.ViewPropertyNames.viewData = 'ViewData';
    SP.ViewObjectPropertyNames.viewFields = 'ViewFields';
    SP.ViewFieldCollectionPropertyNames.schemaXml = 'SchemaXml';
    SP.WebPropertyNames.allowCreateDeclarativeWorkflowForCurrentUser = 'AllowCreateDeclarativeWorkflowForCurrentUser';
    SP.WebPropertyNames.allowDesignerForCurrentUser = 'AllowDesignerForCurrentUser';
    SP.WebPropertyNames.allowMasterPageEditingForCurrentUser = 'AllowMasterPageEditingForCurrentUser';
    SP.WebPropertyNames.allowRevertFromTemplateForCurrentUser = 'AllowRevertFromTemplateForCurrentUser';
    SP.WebPropertyNames.allowRssFeeds = 'AllowRssFeeds';
    SP.WebPropertyNames.allowSaveDeclarativeWorkflowAsTemplateForCurrentUser = 'AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser';
    SP.WebPropertyNames.allowSavePublishDeclarativeWorkflowForCurrentUser = 'AllowSavePublishDeclarativeWorkflowForCurrentUser';
    SP.WebPropertyNames.alternateCssUrl = 'AlternateCssUrl';
    SP.WebPropertyNames.appInstanceId = 'AppInstanceId';
    SP.WebPropertyNames.configuration = 'Configuration';
    SP.WebPropertyNames.created = 'Created';
    SP.WebPropertyNames.customMasterUrl = 'CustomMasterUrl';
    SP.WebPropertyNames.description = 'Description';
    SP.WebPropertyNames.designerDownloadUrlForCurrentUser = 'DesignerDownloadUrlForCurrentUser';
    SP.WebPropertyNames.documentLibraryCalloutOfficeWebAppPreviewersDisabled = 'DocumentLibraryCalloutOfficeWebAppPreviewersDisabled';
    SP.WebPropertyNames.effectiveBasePermissions = 'EffectiveBasePermissions';
    SP.WebPropertyNames.enableMinimalDownload = 'EnableMinimalDownload';
    SP.WebPropertyNames.id = 'Id';
    SP.WebPropertyNames.language = 'Language';
    SP.WebPropertyNames.lastItemModifiedDate = 'LastItemModifiedDate';
    SP.WebPropertyNames.masterUrl = 'MasterUrl';
    SP.WebPropertyNames.quickLaunchEnabled = 'QuickLaunchEnabled';
    SP.WebPropertyNames.recycleBinEnabled = 'RecycleBinEnabled';
    SP.WebPropertyNames.saveSiteAsTemplateEnabled = 'SaveSiteAsTemplateEnabled';
    SP.WebPropertyNames.serverRelativeUrl = 'ServerRelativeUrl';
    SP.WebPropertyNames.showUrlStructureForCurrentUser = 'ShowUrlStructureForCurrentUser';
    SP.WebPropertyNames.siteLogoUrl = 'SiteLogoUrl';
    SP.WebPropertyNames.supportedUILanguageIds = 'SupportedUILanguageIds';
    SP.WebPropertyNames.syndicationEnabled = 'SyndicationEnabled';
    SP.WebPropertyNames.title = 'Title';
    SP.WebPropertyNames.treeViewEnabled = 'TreeViewEnabled';
    SP.WebPropertyNames.uiVersion = 'UIVersion';
    SP.WebPropertyNames.uiVersionConfigurationEnabled = 'UIVersionConfigurationEnabled';
    SP.WebPropertyNames.url = 'Url';
    SP.WebPropertyNames.webTemplate = 'WebTemplate';
    SP.WebObjectPropertyNames.allProperties = 'AllProperties';
    SP.WebObjectPropertyNames.associatedMemberGroup = 'AssociatedMemberGroup';
    SP.WebObjectPropertyNames.associatedOwnerGroup = 'AssociatedOwnerGroup';
    SP.WebObjectPropertyNames.associatedVisitorGroup = 'AssociatedVisitorGroup';
    SP.WebObjectPropertyNames.availableContentTypes = 'AvailableContentTypes';
    SP.WebObjectPropertyNames.availableFields = 'AvailableFields';
    SP.WebObjectPropertyNames.contentTypes = 'ContentTypes';
    SP.WebObjectPropertyNames.currentUser = 'CurrentUser';
    SP.WebObjectPropertyNames.eventReceivers = 'EventReceivers';
    SP.WebObjectPropertyNames.features = 'Features';
    SP.WebObjectPropertyNames.fields = 'Fields';
    SP.WebObjectPropertyNames.folders = 'Folders';
    SP.WebObjectPropertyNames.lists = 'Lists';
    SP.WebObjectPropertyNames.listTemplates = 'ListTemplates';
    SP.WebObjectPropertyNames.navigation = 'Navigation';
    SP.WebObjectPropertyNames.parentWeb = 'ParentWeb';
    SP.WebObjectPropertyNames.pushNotificationSubscribers = 'PushNotificationSubscribers';
    SP.WebObjectPropertyNames.recycleBin = 'RecycleBin';
    SP.WebObjectPropertyNames.regionalSettings = 'RegionalSettings';
    SP.WebObjectPropertyNames.roleDefinitions = 'RoleDefinitions';
    SP.WebObjectPropertyNames.rootFolder = 'RootFolder';
    SP.WebObjectPropertyNames.siteGroups = 'SiteGroups';
    SP.WebObjectPropertyNames.siteUserInfoList = 'SiteUserInfoList';
    SP.WebObjectPropertyNames.siteUsers = 'SiteUsers';
    SP.WebObjectPropertyNames.themeInfo = 'ThemeInfo';
    SP.WebObjectPropertyNames.userCustomActions = 'UserCustomActions';
    SP.WebObjectPropertyNames.webs = 'Webs';
    SP.WebObjectPropertyNames.workflowAssociations = 'WorkflowAssociations';
    SP.WebObjectPropertyNames.workflowTemplates = 'WorkflowTemplates';
    SP.WebInformationPropertyNames.configuration = 'Configuration';
    SP.WebInformationPropertyNames.created = 'Created';
    SP.WebInformationPropertyNames.description = 'Description';
    SP.WebInformationPropertyNames.id = 'Id';
    SP.WebInformationPropertyNames.language = 'Language';
    SP.WebInformationPropertyNames.lastItemModifiedDate = 'LastItemModifiedDate';
    SP.WebInformationPropertyNames.serverRelativeUrl = 'ServerRelativeUrl';
    SP.WebInformationPropertyNames.title = 'Title';
    SP.WebInformationPropertyNames.webTemplate = 'WebTemplate';
    SP.WebInformationPropertyNames.webTemplateId = 'WebTemplateId';
    SP.WebTemplatePropertyNames.description = 'Description';
    SP.WebTemplatePropertyNames.displayCategory = 'DisplayCategory';
    SP.WebTemplatePropertyNames.id = 'Id';
    SP.WebTemplatePropertyNames.imageUrl = 'ImageUrl';
    SP.WebTemplatePropertyNames.isHidden = 'IsHidden';
    SP.WebTemplatePropertyNames.isRootWebOnly = 'IsRootWebOnly';
    SP.WebTemplatePropertyNames.isSubWebOnly = 'IsSubWebOnly';
    SP.WebTemplatePropertyNames.lcid = 'Lcid';
    SP.WebTemplatePropertyNames.name = 'Name';
    SP.WebTemplatePropertyNames.title = 'Title';
    SP.UI.PopoutMenu.$L = false;
    SP.UI.PopoutMenu.$1h = false;
    SP.UI.PopoutMenu._activePopoutMenuInstance = null;
    SP.UI.AttractModeControl.defaultAttractModeIcon = '256_icdocset.gif';
    SP.UI.AttractModeControl.cssAttractMode = 'ms-attractMode';
    SP.UI.AttractModeControl.cssAttractModeBackground = 'ms-attractMode-Background';
    SP.UI.AttractModeControl.cssAttractModeCell = 'ms-attractMode-Cell';
    SP.UI.AttractModeControl.cssAttractModeWrapper = 'ms-attractMode-Wrapper';
    SP.UI.AttractModeControl.cssAttractModeIcon = 'ms-attractMode-Icon';
    SP.UI.AttractModeControl.cssAttractModeText = 'ms-attractMode-Text';
    SP.UI.MenuTest.$g = null;
    SP.Utilities.Utility.layoutS_LATESTVERSION_RELATIVE_URL = '_layouts/' + SP.OfficeVersion.majorVersion + '/';
    SP.Utilities.Utility.layoutS_LATESTVERSION_URL = '/' + SP.Utilities.Utility.layoutS_LATESTVERSION_RELATIVE_URL;
    SP.Application.UI.ViewSelectorMenuBuilder.$n = null;
    SP.Application.UI.MoreColorsPicker.$i = null;
    SP.Application.UI.MappedColor.$P = null;
    SP.Application.UI.MappedColor.$y = null;
    SP.UI.ApplicationPages.CalendarSelector.$4e = new SP.UI.ApplicationPages.CalendarSelector();
    SP.UI.ApplicationPages.CalendarInstanceRepository.$w = {};
    SP.UI.ApplicationPages.ResolveEntity.typE_EVENT = '0';
    SP.UI.ApplicationPages.ResolveEntity.typE_USER = '1';
    SP.UI.ApplicationPages.ResolveEntity.typE_RESOURCE = '2';
    SP.UI.ApplicationPages.ResolveEntity.typE_EXCHANGE = '3';
    SP.BusinessData.EntityPropertyNames.estimatedInstanceCount = 'EstimatedInstanceCount';
    SP.BusinessData.EntityPropertyNames.name = 'Name';
    SP.BusinessData.EntityPropertyNames.namespace = 'Namespace';
    SP.BusinessData.EntityFieldPropertyNames.containsLocalizedDisplayName = 'ContainsLocalizedDisplayName';
    SP.BusinessData.EntityFieldPropertyNames.defaultDisplayName = 'DefaultDisplayName';
    SP.BusinessData.EntityFieldPropertyNames.localizedDisplayName = 'LocalizedDisplayName';
    SP.BusinessData.EntityFieldPropertyNames.name = 'Name';
    SP.BusinessData.EntityIdentifierPropertyNames.identifierType = 'IdentifierType';
    SP.BusinessData.EntityIdentifierPropertyNames.name = 'Name';
    SP.BusinessData.EntityViewPropertyNames.name = 'Name';
    SP.BusinessData.EntityViewPropertyNames.relatedSpecificFinderName = 'RelatedSpecificFinderName';
    SP.BusinessData.EntityViewObjectPropertyNames.fields = 'Fields';
    SP.BusinessData.FilterPropertyNames.defaultDisplayName = 'DefaultDisplayName';
    SP.BusinessData.FilterPropertyNames.filterField = 'FilterField';
    SP.BusinessData.FilterPropertyNames.filterType = 'FilterType';
    SP.BusinessData.FilterPropertyNames.localizedDisplayName = 'LocalizedDisplayName';
    SP.BusinessData.FilterPropertyNames.name = 'Name';
    SP.BusinessData.FilterPropertyNames.valueCount = 'ValueCount';
    SP.BusinessData.LobSystemPropertyNames.name = 'Name';
    SP.BusinessData.LobSystemInstancePropertyNames.name = 'Name';
    SP.BusinessData.MethodExecutionResultObjectPropertyNames.returnParameterCollection = 'ReturnParameterCollection';
    SP.BusinessData.TypeDescriptorPropertyNames.containsReadOnly = 'ContainsReadOnly';
    SP.BusinessData.TypeDescriptorPropertyNames.isCollection = 'IsCollection';
    SP.BusinessData.TypeDescriptorPropertyNames.isReadOnly = 'IsReadOnly';
    SP.BusinessData.TypeDescriptorPropertyNames.name = 'Name';
    SP.BusinessData.TypeDescriptorPropertyNames.typeName = 'TypeName';
    SP.BusinessData.Runtime.EntityIdentityPropertyNames.identifierCount = 'IdentifierCount';
    SP.BusinessData.Runtime.NotificationCallbackPropertyNames.notificationContext = 'NotificationContext';
    SP.BusinessData.Runtime.NotificationCallbackPropertyNames.notificationEndpoint = 'NotificationEndpoint';
    SP.BusinessData.Runtime.NotificationCallbackPropertyNames.notificationForwarderType = 'NotificationForwarderType';
    SP.BusinessData.Runtime.SubscriptionPropertyNames.hash = 'Hash';
    SP.BusinessData.Runtime.SubscriptionPropertyNames.id = 'ID';
    SP.SiteHealth.SiteHealthSummaryPropertyNames.failedErrorCount = 'FailedErrorCount';
    SP.SiteHealth.SiteHealthSummaryPropertyNames.failedWarningCount = 'FailedWarningCount';
    SP.SiteHealth.SiteHealthSummaryPropertyNames.passedCount = 'PassedCount';
    SP.SiteHealth.SiteHealthSummaryPropertyNames.results = 'Results';
    SP.WebParts.LimitedWebPartManagerPropertyNames.hasPersonalizedParts = 'HasPersonalizedParts';
    SP.WebParts.LimitedWebPartManagerPropertyNames.scope = 'Scope';
    SP.WebParts.LimitedWebPartManagerObjectPropertyNames.webParts = 'WebParts';
    SP.WebParts.WebPartPropertyNames.hidden = 'Hidden';
    SP.WebParts.WebPartPropertyNames.isClosed = 'IsClosed';
    SP.WebParts.WebPartPropertyNames.subtitle = 'Subtitle';
    SP.WebParts.WebPartPropertyNames.title = 'Title';
    SP.WebParts.WebPartPropertyNames.titleUrl = 'TitleUrl';
    SP.WebParts.WebPartPropertyNames.zoneIndex = 'ZoneIndex';
    SP.WebParts.WebPartObjectPropertyNames.properties = 'Properties';
    SP.WebParts.WebPartDefinitionPropertyNames.id = 'Id';
    SP.WebParts.WebPartDefinitionObjectPropertyNames.webPart = 'WebPart';
    SP.Workflow.WorkflowAssociationPropertyNames.allowManual = 'AllowManual';
    SP.Workflow.WorkflowAssociationPropertyNames.associationData = 'AssociationData';
    SP.Workflow.WorkflowAssociationPropertyNames.autoStartChange = 'AutoStartChange';
    SP.Workflow.WorkflowAssociationPropertyNames.autoStartCreate = 'AutoStartCreate';
    SP.Workflow.WorkflowAssociationPropertyNames.baseId = 'BaseId';
    SP.Workflow.WorkflowAssociationPropertyNames.created = 'Created';
    SP.Workflow.WorkflowAssociationPropertyNames.description = 'Description';
    SP.Workflow.WorkflowAssociationPropertyNames.enabled = 'Enabled';
    SP.Workflow.WorkflowAssociationPropertyNames.historyListTitle = 'HistoryListTitle';
    SP.Workflow.WorkflowAssociationPropertyNames.id = 'Id';
    SP.Workflow.WorkflowAssociationPropertyNames.instantiationUrl = 'InstantiationUrl';
    SP.Workflow.WorkflowAssociationPropertyNames.internalName = 'InternalName';
    SP.Workflow.WorkflowAssociationPropertyNames.isDeclarative = 'IsDeclarative';
    SP.Workflow.WorkflowAssociationPropertyNames.listId = 'ListId';
    SP.Workflow.WorkflowAssociationPropertyNames.modified = 'Modified';
    SP.Workflow.WorkflowAssociationPropertyNames.name = 'Name';
    SP.Workflow.WorkflowAssociationPropertyNames.taskListTitle = 'TaskListTitle';
    SP.Workflow.WorkflowAssociationPropertyNames.webId = 'WebId';
    SP.Workflow.WorkflowTemplatePropertyNames.allowManual = 'AllowManual';
    SP.Workflow.WorkflowTemplatePropertyNames.associationUrl = 'AssociationUrl';
    SP.Workflow.WorkflowTemplatePropertyNames.autoStartChange = 'AutoStartChange';
    SP.Workflow.WorkflowTemplatePropertyNames.autoStartCreate = 'AutoStartCreate';
    SP.Workflow.WorkflowTemplatePropertyNames.description = 'Description';
    SP.Workflow.WorkflowTemplatePropertyNames.id = 'Id';
    SP.Workflow.WorkflowTemplatePropertyNames.isDeclarative = 'IsDeclarative';
    SP.Workflow.WorkflowTemplatePropertyNames.name = 'Name';
    SP.Workflow.WorkflowTemplatePropertyNames.permissionsManual = 'PermissionsManual';
}
;
sp_initialize();
if (typeof RegisterModuleInit == "function") {
    RegisterModuleInit("sp.js", sp_initialize);
}
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
    NotifyScriptLoadedAndExecuteWaitingJobs("sp.js");
}
