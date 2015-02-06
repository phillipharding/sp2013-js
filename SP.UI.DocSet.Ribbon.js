function ULSRWN(){var o=new Object;o.ULSTeamName="DLC Server";o.ULSFileName="SP.UI.DocSet.Ribbon.js";return o;}
Type.registerNamespace("DocSet.Ribbon");DocSet.Ribbon.DocSetRibbonComponent=function(){ULSRWN:;DocSet.Ribbon.DocSetRibbonComponent.initializeBase(this);this.$3_1();RefreshCommandUI()};DocSet.Ribbon.DocSetRibbonComponent.load=function(){ULSRWN:;DocSet.Ribbon.DocSetRibbonComponent.$2=new DocSet.Ribbon.DocSetRibbonComponent};DocSet.Ribbon.DocSetRibbonComponent.prototype={$0_1:null,$1_1:null,getId:function(){ULSRWN:;return"DocSetRibbonComponent"},$3_1:function(){ULSRWN:;SP.Ribbon.PageManager.get_instance().addPageComponent(this)},init:function(){ULSRWN:;this.$0_1=[];this.$1_1=["DocSet.ContextualGroup","ManageDocumentSetTab","DocSet.ActionsGroup","DocSet.EditProperties","DocSet.DownloadCopy","DocSet.ManagePermissions","DocSet.Delete","DocSet.ShareGroup","DocSet.EmailLink","DocSet.SendToRC","DocSet.ManageGroup","DocSet.CreateVersion","DocSet.VersionHistory","DocSet.Workflows","DocSet.ManageVideoRenditions"]},getFocusedCommands:function(){ULSRWN:;return this.$0_1},getGlobalCommands:function(){ULSRWN:;return this.$1_1},canHandleCommand:function(a){ULSRWN:;switch(a){case"DocSet.CreateVersion":return DocSet.Ribbon.DocSetCommands.createVersionEnabled();case"DocSet.VersionHistory":return DocSet.Ribbon.DocSetCommands.versionHistoryEnabled();case"DocSet.Delete":return DocSet.Ribbon.DocSetCommands.deleteSetEnabled();case"DocSet.SendToRC":return DocSet.Ribbon.DocSetCommands.sendToRCEnabled();case"DocSet.EditProperties":return DocSet.Ribbon.DocSetCommands.editPropertiesEnabled();case"DocSet.ManagePermissions":return DocSet.Ribbon.DocSetCommands.editPermissionsEnabled();case"DocSet.Workflows":return DocSet.Ribbon.DocSetCommands.workflowsEnabled();case"DocSet.ManageVideoRenditions":return DocSet.Ribbon.DocSetCommands.manageVideoRenditionsEnabled();case"DocSet.DownloadCopy":case"DocSet.EmailLink":case"DocSet.ContextualGroup":case"ManageDocumentSetTab":case"DocSet.ActionsGroup":case"DocSet.ShareGroup":case"DocSet.ManageGroup":return true;default:return false}},handleCommand:function(a){ULSRWN:;if(a==="DocSet.CreateVersion")DocSet.Ribbon.DocSetCommands.createVersion();else if(a==="DocSet.VersionHistory")DocSet.Ribbon.DocSetCommands.versionHistory();else if(a==="DocSet.Workflows")DocSet.Ribbon.DocSetCommands.workflows();else if(a==="DocSet.ManageVideoRenditions")DocSet.Ribbon.DocSetCommands.manageVideoRenditions();else if(a==="DocSet.DownloadCopy")DocSet.Ribbon.DocSetCommands.downloadCopy();else if(a==="DocSet.Delete")DocSet.Ribbon.DocSetCommands.deleteSet();else if(a==="DocSet.ManagePermissions")DocSet.Ribbon.DocSetCommands.managePermissions();else if(a==="DocSet.EditProperties")DocSet.Ribbon.DocSetCommands.editProperties();else if(a==="DocSet.EmailLink")DocSet.Ribbon.DocSetCommands.emailLink();else a==="DocSet.SendToRC"&&DocSet.Ribbon.DocSetCommands.sendToRC();return true},isFocusable:function(){ULSRWN:;return true},receiveFocus:function(){ULSRWN:;return true},yieldFocus:function(){ULSRWN:;return true}};DocSet.Ribbon.DocSetCommandNames=function(){};DocSet.Ribbon.DocSetRibbonCommandNames=function(){};DocSet.Ribbon.DocSetCommands=function(){};DocSet.Ribbon.DocSetCommands.createVersionEnabled=function(){ULSRWN:;return DocSet.Ribbon.Externals.docsetHomePageData.bCreateVersion};DocSet.Ribbon.DocSetCommands.versionHistoryEnabled=function(){ULSRWN:;return DocSet.Ribbon.Externals.docsetHomePageData.bVersionHistory};DocSet.Ribbon.DocSetCommands.editPropertiesEnabled=function(){ULSRWN:;return DocSet.Ribbon.Externals.docsetHomePageData.bEditPropertiesPermissions};DocSet.Ribbon.DocSetCommands.editPermissionsEnabled=function(){ULSRWN:;return DocSet.Ribbon.Externals.docsetHomePageData.bEditPermissionsPermissions};DocSet.Ribbon.DocSetCommands.workflowsEnabled=function(){ULSRWN:;return DocSet.Ribbon.Externals.docsetHomePageData.bWorkflowPermissions};DocSet.Ribbon.DocSetCommands.manageVideoRenditionsEnabled=function(){ULSRWN:;return DocSet.Ribbon.Externals.docsetHomePageData.bManageVideoRenditions};DocSet.Ribbon.DocSetCommands.deleteSetEnabled=function(){ULSRWN:;return!DocSet.Ribbon.Externals.docsetHomePageData.bDeletePermissions?false:!eval("GetIsItemSelected()")};DocSet.Ribbon.DocSetCommands.sendToRCEnabled=function(){ULSRWN:;return!DocSet.Ribbon.Externals.docsetHomePageData.bSendToPermissions?false:eval("RecordCenterAvailable()")};DocSet.Ribbon.DocSetCommands.createVersion=function(){ULSRWN:;if(!DocSet.Ribbon.DocSetCommands.createVersionEnabled())return;eval(DocSet.Ribbon.Externals.docsetHomePageData.urlCreateVersion)};DocSet.Ribbon.DocSetCommands.versionHistory=function(){ULSRWN:;if(!DocSet.Ribbon.DocSetCommands.versionHistoryEnabled())return;eval(DocSet.Ribbon.Externals.docsetHomePageData.urlVersionHistory)};DocSet.Ribbon.DocSetCommands.workflows=function(){ULSRWN:;eval(DocSet.Ribbon.Externals.docsetHomePageData.urlWorkflows)};DocSet.Ribbon.DocSetCommands.manageVideoRenditions=function(){ULSRWN:;eval(DocSet.Ribbon.Externals.docsetHomePageData.urlManageVideoRenditions)};DocSet.Ribbon.DocSetCommands.downloadCopy=function(){ULSRWN:;eval(DocSet.Ribbon.Externals.docsetHomePageData.urlDownloadCopy)};DocSet.Ribbon.DocSetCommands.deleteSet=function(){ULSRWN:;eval(DocSet.Ribbon.Externals.docsetHomePageData.fnDeleteSet)};DocSet.Ribbon.DocSetCommands.managePermissions=function(){ULSRWN:;eval("ManageDocSetPermissions("+DocSet.Ribbon.Externals.docsetHomePageData.idDocSet+");")};DocSet.Ribbon.DocSetCommands.editProperties=function(){ULSRWN:;eval("EditAllProps();")};DocSet.Ribbon.DocSetCommands.emailLink=function(){ULSRWN:;eval("MailLinkToDocSet();")};DocSet.Ribbon.DocSetCommands.sendToRC=function(){ULSRWN:;if(!DocSet.Ribbon.DocSetCommands.sendToRCEnabled())return;eval(DocSet.Ribbon.Externals.docsetHomePageData.urlSendToRC)};DocSet.Ribbon.DocSetRibbonComponent.registerClass("DocSet.Ribbon.DocSetRibbonComponent",CUI.Page.PageComponent);DocSet.Ribbon.DocSetCommandNames.registerClass("DocSet.Ribbon.DocSetCommandNames");DocSet.Ribbon.DocSetRibbonCommandNames.registerClass("DocSet.Ribbon.DocSetRibbonCommandNames");DocSet.Ribbon.DocSetCommands.registerClass("DocSet.Ribbon.DocSetCommands");function sp_ui_docset_ribbon_initialize(){ULSRWN:;DocSet.Ribbon.DocSetRibbonComponent.$2=null;DocSet.Ribbon.DocSetCommandNames.editProperties="DocSet.EditProperties";DocSet.Ribbon.DocSetCommandNames.downloadCopy="DocSet.DownloadCopy";DocSet.Ribbon.DocSetCommandNames.managePermissions="DocSet.ManagePermissions";DocSet.Ribbon.DocSetCommandNames.deleteSet="DocSet.Delete";DocSet.Ribbon.DocSetCommandNames.emailLink="DocSet.EmailLink";DocSet.Ribbon.DocSetCommandNames.sendToRC="DocSet.SendToRC";DocSet.Ribbon.DocSetCommandNames.createVersion="DocSet.CreateVersion";DocSet.Ribbon.DocSetCommandNames.versionHistory="DocSet.VersionHistory";DocSet.Ribbon.DocSetCommandNames.workflows="DocSet.Workflows";DocSet.Ribbon.DocSetCommandNames.manageVideoRenditions="DocSet.ManageVideoRenditions";DocSet.Ribbon.DocSetRibbonCommandNames.manageDocumentSetContextualGroup="DocSet.ContextualGroup";DocSet.Ribbon.DocSetRibbonCommandNames.manageDocumentSetTab="ManageDocumentSetTab";DocSet.Ribbon.DocSetRibbonCommandNames.actionsGroup="DocSet.ActionsGroup";DocSet.Ribbon.DocSetRibbonCommandNames.shareGroup="DocSet.ShareGroup";DocSet.Ribbon.DocSetRibbonCommandNames.manageGroup="DocSet.ManageGroup"}sp_ui_docset_ribbon_initialize();ExecuteAndRegisterBeginEndFunctions("sp.ui.docset.ribbon.js",sp_ui_docset_ribbon_initialize,null,function(){ULSRWN:;DocSet.Ribbon.Externals=function(){};if(typeof docsetHomePageData!="undefined")DocSet.Ribbon.Externals.docsetHomePageData=docsetHomePageData;if(typeof _spBodyOnLoadCalled=="undefined"||_spBodyOnLoadCalled)window.setTimeout(DocSet.Ribbon.DocSetRibbonComponent.load,0);else _spBodyOnLoadFunctionNames.push("DocSet.Ribbon.DocSetRibbonComponent.load")});function DeleteSet(){ULSRWN:;if(!confirm(DocSet.Ribbon.Externals.docsetHomePageData.DeleteConfirmation))return;eval(DocSet.Ribbon.Externals.docsetHomePageData.pbFnDeleteSet)}function GetIsItemSelected(){ULSRWN:;if(CountEntries(g_ctxDict)>0){var b=GetFirstCtx(),a=SP.ListOperation.Selection.getSelectedItems(b);if(a!=null&&a!=undefined)return CountEntries(a)>0}return false}function CountEntries(b){ULSRWN:;var a=0,c;for(c in b)a++;return a}function GetFirstCtx(){ULSRWN:;var a,b;for(b in g_ctxDict)a=b;return g_ctxDict[a]}function ManageDocSetPermissions(a){ULSRWN:;NavigateToManagePermsPage(ctx.HttpRoot,ctx.listName,a)}function MailLinkToDocSet(){ULSRWN:;navigateMailToLink(DocSet.Ribbon.Externals.docsetHomePageData.urlWelcomePage)}function RecordCenterAvailable(){ULSRWN:;if(ctx.OfficialFileNames!=null&&ctx.OfficialFileNames!=""){var a=ctx.OfficialFileNames.split("__HOSTSEPARATOR__");if(a!=null&&a.length>0)return true}return false}typeof Sys!="undefined"&&Sys&&Sys.Application&&Sys.Application.notifyScriptLoaded();typeof NotifyScriptLoadedAndExecuteWaitingJobs!="undefined"&&NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.DocSet.Ribbon.js");