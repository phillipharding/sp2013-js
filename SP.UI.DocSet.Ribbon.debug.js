
Type.registerNamespace('DocSet.Ribbon');

DocSet.Ribbon.DocSetRibbonComponent = function DocSet_Ribbon_DocSetRibbonComponent() {
    DocSet.Ribbon.DocSetRibbonComponent.initializeBase(this);
    this._registerWithPageManager$i$1();
    RefreshCommandUI();
}
DocSet.Ribbon.DocSetRibbonComponent.load = function DocSet_Ribbon_DocSetRibbonComponent$load() {
    DocSet.Ribbon.DocSetRibbonComponent._instance$p = new DocSet.Ribbon.DocSetRibbonComponent();
}
DocSet.Ribbon.DocSetRibbonComponent.prototype = {
    _focusedCommands$p$1: null,
    _globalCommands$p$1: null,
    
    getId: function DocSet_Ribbon_DocSetRibbonComponent$getId() {
        return 'DocSetRibbonComponent';
    },
    
    _registerWithPageManager$i$1: function DocSet_Ribbon_DocSetRibbonComponent$_registerWithPageManager$i$1() {
        SP.Ribbon.PageManager.get_instance().addPageComponent(this);
    },
    
    _unregisterWithPageManager$i$1: function DocSet_Ribbon_DocSetRibbonComponent$_unregisterWithPageManager$i$1() {
        SP.Ribbon.PageManager.get_instance().removePageComponent(this);
    },
    
    init: function DocSet_Ribbon_DocSetRibbonComponent$init() {
        this._focusedCommands$p$1 = [];
        this._globalCommands$p$1 = [ DocSet.Ribbon.DocSetRibbonCommandNames.manageDocumentSetContextualGroup, DocSet.Ribbon.DocSetRibbonCommandNames.manageDocumentSetTab, DocSet.Ribbon.DocSetRibbonCommandNames.actionsGroup, DocSet.Ribbon.DocSetCommandNames.editProperties, DocSet.Ribbon.DocSetCommandNames.downloadCopy, DocSet.Ribbon.DocSetCommandNames.managePermissions, DocSet.Ribbon.DocSetCommandNames.deleteSet, DocSet.Ribbon.DocSetRibbonCommandNames.shareGroup, DocSet.Ribbon.DocSetCommandNames.emailLink, DocSet.Ribbon.DocSetCommandNames.sendToRC, DocSet.Ribbon.DocSetRibbonCommandNames.manageGroup, DocSet.Ribbon.DocSetCommandNames.createVersion, DocSet.Ribbon.DocSetCommandNames.versionHistory, DocSet.Ribbon.DocSetCommandNames.workflows, DocSet.Ribbon.DocSetCommandNames.manageVideoRenditions ];
    },
    
    getFocusedCommands: function DocSet_Ribbon_DocSetRibbonComponent$getFocusedCommands() {
        return this._focusedCommands$p$1;
    },
    
    getGlobalCommands: function DocSet_Ribbon_DocSetRibbonComponent$getGlobalCommands() {
        return this._globalCommands$p$1;
    },
    
    canHandleCommand: function DocSet_Ribbon_DocSetRibbonComponent$canHandleCommand(commandId) {
        switch (commandId) {
            case DocSet.Ribbon.DocSetCommandNames.createVersion:
                return DocSet.Ribbon.DocSetCommands.createVersionEnabled();
            case DocSet.Ribbon.DocSetCommandNames.versionHistory:
                return DocSet.Ribbon.DocSetCommands.versionHistoryEnabled();
            case DocSet.Ribbon.DocSetCommandNames.deleteSet:
                return DocSet.Ribbon.DocSetCommands.deleteSetEnabled();
            case DocSet.Ribbon.DocSetCommandNames.sendToRC:
                return DocSet.Ribbon.DocSetCommands.sendToRCEnabled();
            case DocSet.Ribbon.DocSetCommandNames.editProperties:
                return DocSet.Ribbon.DocSetCommands.editPropertiesEnabled();
            case DocSet.Ribbon.DocSetCommandNames.managePermissions:
                return DocSet.Ribbon.DocSetCommands.editPermissionsEnabled();
            case DocSet.Ribbon.DocSetCommandNames.workflows:
                return DocSet.Ribbon.DocSetCommands.workflowsEnabled();
            case DocSet.Ribbon.DocSetCommandNames.manageVideoRenditions:
                return DocSet.Ribbon.DocSetCommands.manageVideoRenditionsEnabled();
            case DocSet.Ribbon.DocSetCommandNames.downloadCopy:
            case DocSet.Ribbon.DocSetCommandNames.emailLink:
            case DocSet.Ribbon.DocSetRibbonCommandNames.manageDocumentSetContextualGroup:
            case DocSet.Ribbon.DocSetRibbonCommandNames.manageDocumentSetTab:
            case DocSet.Ribbon.DocSetRibbonCommandNames.actionsGroup:
            case DocSet.Ribbon.DocSetRibbonCommandNames.shareGroup:
            case DocSet.Ribbon.DocSetRibbonCommandNames.manageGroup:
                return true;
            default:
                return false;
        }
    },
    
    handleCommand: function DocSet_Ribbon_DocSetRibbonComponent$handleCommand(commandId, properties, sequence) {
        if (commandId === DocSet.Ribbon.DocSetCommandNames.createVersion) {
            DocSet.Ribbon.DocSetCommands.createVersion();
        }
        else if (commandId === DocSet.Ribbon.DocSetCommandNames.versionHistory) {
            DocSet.Ribbon.DocSetCommands.versionHistory();
        }
        else if (commandId === DocSet.Ribbon.DocSetCommandNames.workflows) {
            DocSet.Ribbon.DocSetCommands.workflows();
        }
        else if (commandId === DocSet.Ribbon.DocSetCommandNames.manageVideoRenditions) {
            DocSet.Ribbon.DocSetCommands.manageVideoRenditions();
        }
        else if (commandId === DocSet.Ribbon.DocSetCommandNames.downloadCopy) {
            DocSet.Ribbon.DocSetCommands.downloadCopy();
        }
        else if (commandId === DocSet.Ribbon.DocSetCommandNames.deleteSet) {
            DocSet.Ribbon.DocSetCommands.deleteSet();
        }
        else if (commandId === DocSet.Ribbon.DocSetCommandNames.managePermissions) {
            DocSet.Ribbon.DocSetCommands.managePermissions();
        }
        else if (commandId === DocSet.Ribbon.DocSetCommandNames.editProperties) {
            DocSet.Ribbon.DocSetCommands.editProperties();
        }
        else if (commandId === DocSet.Ribbon.DocSetCommandNames.emailLink) {
            DocSet.Ribbon.DocSetCommands.emailLink();
        }
        else if (commandId === DocSet.Ribbon.DocSetCommandNames.sendToRC) {
            DocSet.Ribbon.DocSetCommands.sendToRC();
        }
        return true;
    },
    
    isFocusable: function DocSet_Ribbon_DocSetRibbonComponent$isFocusable() {
        return true;
    },
    
    receiveFocus: function DocSet_Ribbon_DocSetRibbonComponent$receiveFocus() {
        return true;
    },
    
    yieldFocus: function DocSet_Ribbon_DocSetRibbonComponent$yieldFocus() {
        return true;
    }
}


DocSet.Ribbon.DocSetCommandNames = function DocSet_Ribbon_DocSetCommandNames() {
}


DocSet.Ribbon.DocSetRibbonCommandNames = function DocSet_Ribbon_DocSetRibbonCommandNames() {
}


DocSet.Ribbon.DocSetCommands = function DocSet_Ribbon_DocSetCommands() {
}
DocSet.Ribbon.DocSetCommands.createVersionEnabled = function DocSet_Ribbon_DocSetCommands$createVersionEnabled() {
    return DocSet.Ribbon.Externals.docsetHomePageData.bCreateVersion;
}
DocSet.Ribbon.DocSetCommands.versionHistoryEnabled = function DocSet_Ribbon_DocSetCommands$versionHistoryEnabled() {
    return DocSet.Ribbon.Externals.docsetHomePageData.bVersionHistory;
}
DocSet.Ribbon.DocSetCommands.editPropertiesEnabled = function DocSet_Ribbon_DocSetCommands$editPropertiesEnabled() {
    return DocSet.Ribbon.Externals.docsetHomePageData.bEditPropertiesPermissions;
}
DocSet.Ribbon.DocSetCommands.editPermissionsEnabled = function DocSet_Ribbon_DocSetCommands$editPermissionsEnabled() {
    return DocSet.Ribbon.Externals.docsetHomePageData.bEditPermissionsPermissions;
}
DocSet.Ribbon.DocSetCommands.workflowsEnabled = function DocSet_Ribbon_DocSetCommands$workflowsEnabled() {
    return DocSet.Ribbon.Externals.docsetHomePageData.bWorkflowPermissions;
}
DocSet.Ribbon.DocSetCommands.manageVideoRenditionsEnabled = function DocSet_Ribbon_DocSetCommands$manageVideoRenditionsEnabled() {
    return DocSet.Ribbon.Externals.docsetHomePageData.bManageVideoRenditions;
}
DocSet.Ribbon.DocSetCommands.deleteSetEnabled = function DocSet_Ribbon_DocSetCommands$deleteSetEnabled() {
    if (!DocSet.Ribbon.Externals.docsetHomePageData.bDeletePermissions) {
        return false;
    }
    return !eval('GetIsItemSelected()');
}
DocSet.Ribbon.DocSetCommands.sendToRCEnabled = function DocSet_Ribbon_DocSetCommands$sendToRCEnabled() {
    if (!DocSet.Ribbon.Externals.docsetHomePageData.bSendToPermissions) {
        return false;
    }
    return eval('RecordCenterAvailable()');
}
DocSet.Ribbon.DocSetCommands.createVersion = function DocSet_Ribbon_DocSetCommands$createVersion() {
    if (!DocSet.Ribbon.DocSetCommands.createVersionEnabled()) {
        return;
    }
    eval(DocSet.Ribbon.Externals.docsetHomePageData.urlCreateVersion);
}
DocSet.Ribbon.DocSetCommands.versionHistory = function DocSet_Ribbon_DocSetCommands$versionHistory() {
    if (!DocSet.Ribbon.DocSetCommands.versionHistoryEnabled()) {
        return;
    }
    eval(DocSet.Ribbon.Externals.docsetHomePageData.urlVersionHistory);
}
DocSet.Ribbon.DocSetCommands.workflows = function DocSet_Ribbon_DocSetCommands$workflows() {
    eval(DocSet.Ribbon.Externals.docsetHomePageData.urlWorkflows);
}
DocSet.Ribbon.DocSetCommands.manageVideoRenditions = function DocSet_Ribbon_DocSetCommands$manageVideoRenditions() {
    eval(DocSet.Ribbon.Externals.docsetHomePageData.urlManageVideoRenditions);
}
DocSet.Ribbon.DocSetCommands.downloadCopy = function DocSet_Ribbon_DocSetCommands$downloadCopy() {
    eval(DocSet.Ribbon.Externals.docsetHomePageData.urlDownloadCopy);
}
DocSet.Ribbon.DocSetCommands.deleteSet = function DocSet_Ribbon_DocSetCommands$deleteSet() {
    eval(DocSet.Ribbon.Externals.docsetHomePageData.fnDeleteSet);
}
DocSet.Ribbon.DocSetCommands.managePermissions = function DocSet_Ribbon_DocSetCommands$managePermissions() {
    eval('ManageDocSetPermissions(' + DocSet.Ribbon.Externals.docsetHomePageData.idDocSet + ');');
}
DocSet.Ribbon.DocSetCommands.editProperties = function DocSet_Ribbon_DocSetCommands$editProperties() {
    eval('EditAllProps();');
}
DocSet.Ribbon.DocSetCommands.emailLink = function DocSet_Ribbon_DocSetCommands$emailLink() {
    eval('MailLinkToDocSet();');
}
DocSet.Ribbon.DocSetCommands.sendToRC = function DocSet_Ribbon_DocSetCommands$sendToRC() {
    if (!DocSet.Ribbon.DocSetCommands.sendToRCEnabled()) {
        return;
    }
    eval(DocSet.Ribbon.Externals.docsetHomePageData.urlSendToRC);
}


DocSet.Ribbon.DocSetRibbonComponent.registerClass('DocSet.Ribbon.DocSetRibbonComponent', CUI.Page.PageComponent);
DocSet.Ribbon.DocSetCommandNames.registerClass('DocSet.Ribbon.DocSetCommandNames');
DocSet.Ribbon.DocSetRibbonCommandNames.registerClass('DocSet.Ribbon.DocSetRibbonCommandNames');
DocSet.Ribbon.DocSetCommands.registerClass('DocSet.Ribbon.DocSetCommands');
function sp_ui_docset_ribbon_initialize() {
DocSet.Ribbon.DocSetRibbonComponent._instance$p = null;
DocSet.Ribbon.DocSetCommandNames.editProperties = 'DocSet.EditProperties';
DocSet.Ribbon.DocSetCommandNames.downloadCopy = 'DocSet.DownloadCopy';
DocSet.Ribbon.DocSetCommandNames.managePermissions = 'DocSet.ManagePermissions';
DocSet.Ribbon.DocSetCommandNames.deleteSet = 'DocSet.Delete';
DocSet.Ribbon.DocSetCommandNames.emailLink = 'DocSet.EmailLink';
DocSet.Ribbon.DocSetCommandNames.sendToRC = 'DocSet.SendToRC';
DocSet.Ribbon.DocSetCommandNames.createVersion = 'DocSet.CreateVersion';
DocSet.Ribbon.DocSetCommandNames.versionHistory = 'DocSet.VersionHistory';
DocSet.Ribbon.DocSetCommandNames.workflows = 'DocSet.Workflows';
DocSet.Ribbon.DocSetCommandNames.manageVideoRenditions = 'DocSet.ManageVideoRenditions';
DocSet.Ribbon.DocSetRibbonCommandNames.manageDocumentSetContextualGroup = 'DocSet.ContextualGroup';
DocSet.Ribbon.DocSetRibbonCommandNames.manageDocumentSetTab = 'ManageDocumentSetTab';
DocSet.Ribbon.DocSetRibbonCommandNames.actionsGroup = 'DocSet.ActionsGroup';
DocSet.Ribbon.DocSetRibbonCommandNames.shareGroup = 'DocSet.ShareGroup';
DocSet.Ribbon.DocSetRibbonCommandNames.manageGroup = 'DocSet.ManageGroup';
};
sp_ui_docset_ribbon_initialize();

ExecuteAndRegisterBeginEndFunctions("sp.ui.docset.ribbon.js",
    sp_ui_docset_ribbon_initialize, 
    null,
    function(){

DocSet.Ribbon.Externals = function DocSet_Ribbon_Externals() {}

if (typeof(docsetHomePageData) != "undefined") DocSet.Ribbon.Externals.docsetHomePageData = docsetHomePageData;

if (typeof(_spBodyOnLoadCalled) == 'undefined' || _spBodyOnLoadCalled)
{
    window.setTimeout(DocSet.Ribbon.DocSetRibbonComponent.load, 0);
}
else
{
    _spBodyOnLoadFunctionNames.push("DocSet.Ribbon.DocSetRibbonComponent.load");
}

    });


function DeleteSet()
{
    if (!confirm(DocSet.Ribbon.Externals.docsetHomePageData.DeleteConfirmation))
        return;

    eval(DocSet.Ribbon.Externals.docsetHomePageData.pbFnDeleteSet);
}

function GetIsItemSelected()
{
   if (CountEntries(g_ctxDict) > 0)
   {
       var ctx = GetFirstCtx();
       var dict = SP.ListOperation.Selection.getSelectedItems(ctx);
       if (dict != null && dict != undefined)
       {
           return (CountEntries(dict) > 0);
       }
   }
   return false;
}

function CountEntries(d) { var i = 0; var k; for (k in d) i++; return i; }
function GetFirstCtx () { var ret; var k; for (k in g_ctxDict) ret = k; return g_ctxDict[ret]; }

function ManageDocSetPermissions(id)
{
    NavigateToManagePermsPage(ctx.HttpRoot, ctx.listName, id);
}

function MailLinkToDocSet()
{
    navigateMailToLink(DocSet.Ribbon.Externals.docsetHomePageData.urlWelcomePage);
}

function RecordCenterAvailable()
{
    if (ctx.OfficialFileNames != null && ctx.OfficialFileNames != "")
    {            
        var ar_officialFileNames = ctx.OfficialFileNames.split("__HOSTSEPARATOR__");
        if(ar_officialFileNames != null && ar_officialFileNames.length > 0)
        {
            return true;
        }
    }
    return false;
}

if( typeof(Sys) != "undefined" && Sys && Sys.Application )
{
   Sys.Application.notifyScriptLoaded();
}
if (typeof(NotifyScriptLoadedAndExecuteWaitingJobs) != "undefined")
{
    NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.DocSet.Ribbon.js");
}
