// JScript File


Type.registerNamespace('Microsoft.SharePoint.Portal');

Microsoft.SharePoint.Portal.DocumentsSharedWithMePageComponent = function Microsoft_SharePoint_Portal_DocumentsSharedWithMePageComponent() {
    Microsoft.SharePoint.Portal.DocumentsSharedWithMePageComponent.initializeBase(this);
}
Microsoft.SharePoint.Portal.DocumentsSharedWithMePageComponent.get_instance = function Microsoft_SharePoint_Portal_DocumentsSharedWithMePageComponent$get_instance() {
    if (!Microsoft.SharePoint.Portal.DocumentsSharedWithMePageComponent.$0) {
        Microsoft.SharePoint.Portal.DocumentsSharedWithMePageComponent.$0 = new Microsoft.SharePoint.Portal.DocumentsSharedWithMePageComponent();
    }
    return Microsoft.SharePoint.Portal.DocumentsSharedWithMePageComponent.$0;
}
Microsoft.SharePoint.Portal.DocumentsSharedWithMePageComponent.initialize = function Microsoft_SharePoint_Portal_DocumentsSharedWithMePageComponent$initialize() {
    SP.Ribbon.PageManager.get_instance().addPageComponent(Microsoft.SharePoint.Portal.DocumentsSharedWithMePageComponent.get_instance());
}
Microsoft.SharePoint.Portal.DocumentsSharedWithMePageComponent.$3 = function Microsoft_SharePoint_Portal_DocumentsSharedWithMePageComponent$$3() {
    var $v_0 = 0;
    var $v_1 = SP.ListOperation.Selection.getSelectedItems();
    if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
        var $$dict_2 = $v_1;
        for (var $$key_3 in $$dict_2) {
            var $v_2 = { key: $$key_3, value: $$dict_2[$$key_3] };
            if ($v_2.value.id) {
                $v_0++;
            }
        }
    }
    return $v_0;
}
Microsoft.SharePoint.Portal.DocumentsSharedWithMePageComponent.prototype = {
    
    getId: function Microsoft_SharePoint_Portal_DocumentsSharedWithMePageComponent$getId() {
        return 'DocumentsSharedWithMePageComponent';
    },
    
    getFocusedCommands: function Microsoft_SharePoint_Portal_DocumentsSharedWithMePageComponent$getFocusedCommands() {
        return this.get_$2_1();
    },
    
    getGlobalCommands: function Microsoft_SharePoint_Portal_DocumentsSharedWithMePageComponent$getGlobalCommands() {
        return this.get_$2_1();
    },
    
    canHandleCommand: function Microsoft_SharePoint_Portal_DocumentsSharedWithMePageComponent$canHandleCommand(commandId) {
        if (Microsoft.SharePoint.Portal.DocumentsSharedWithMePageComponent.$3() !== 1) {
            return false;
        }
        for (var $$arr_1 = this.get_$2_1(), $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if (commandId === $v_0) {
                return true;
            }
        }
        return false;
    },
    
    handleCommand: function Microsoft_SharePoint_Portal_DocumentsSharedWithMePageComponent$handleCommand(commandId, properties, sequence) {
        if (Microsoft.SharePoint.Portal.DocumentsSharedWithMePageComponent.$3() !== 1) {
            return false;
        }
        var $v_0 = '';
        var $v_1 = SP.ListOperation.Selection.getSelectedItems();
        var $$dict_5 = $v_1;
        for (var $$key_6 in $$dict_5) {
            var $v_3 = { key: $$key_6, value: $$dict_5[$$key_6] };
            $v_0 = $v_3.value.id;
            break;
        }
        var $v_2 = getListItemByID($v_0);
        if (commandId === 'DocumentsSharedWithMe_EditDocument') {
            openDocumentInBrowser($v_2);
        }
        else if (commandId === 'DocumentsSharedWithMe_ViewProperties') {
            viewProperties($v_2);
        }
        else if (commandId === 'DocumentsSharedWithMe_ViewVersions') {
            viewVersions($v_2);
        }
        else if (commandId === 'DocumentsSharedWithMe_ManagePermissions') {
            openSharedWithDialog($v_2);
        }
        else if (commandId === 'DocumentsSharedWithMe_DownloadCopy') {
            downloadCopy($v_2);
        }
        else if (commandId === 'DocumentsSharedWithMe_SendTo') {
            sendToOtherLocation($v_2);
        }
        return true;
    },
    
    $1_1: null,
    
    get_$2_1: function Microsoft_SharePoint_Portal_DocumentsSharedWithMePageComponent$get_$2_1() {
        if (!this.$1_1) {
            this.$1_1 = [ 'DocumentsSharedWithMe_EditDocument', 'DocumentsSharedWithMe_ViewProperties', 'DocumentsSharedWithMe_ViewVersions', 'DocumentsSharedWithMe_ManagePermissions', 'DocumentsSharedWithMe_DownloadCopy', 'DocumentsSharedWithMe_SendTo' ];
        }
        return this.$1_1;
    }
}


Type.registerNamespace('Microsoft.SharePoint.Portal.UserProfiles');

Microsoft.SharePoint.Portal.UserProfiles.DocumentsSharedWithMe = function Microsoft_SharePoint_Portal_UserProfiles_DocumentsSharedWithMe() {
}
Microsoft.SharePoint.Portal.UserProfiles.DocumentsSharedWithMe.getListDataScript = function Microsoft_SharePoint_Portal_UserProfiles_DocumentsSharedWithMe$getListDataScript(context, webPartQualifier, sortFieldName, isAscendingSort, offset, rowLimit) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{1118ef92-5f52-4de7-853f-edf3f1229990}', 'GetListDataScript', [ webPartQualifier, sortFieldName, isAscendingSort, offset, rowLimit ]);
    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}


Microsoft.SharePoint.Portal.DocumentsSharedWithMePageComponent.registerClass('Microsoft.SharePoint.Portal.DocumentsSharedWithMePageComponent', CUI.Page.PageComponent);
Microsoft.SharePoint.Portal.UserProfiles.DocumentsSharedWithMe.registerClass('Microsoft.SharePoint.Portal.UserProfiles.DocumentsSharedWithMe');
function sp_ui_documentssharedwithme_initialize() {
Microsoft.SharePoint.Portal.DocumentsSharedWithMePageComponent.$0 = null;
};
sp_ui_documentssharedwithme_initialize();

RegisterModuleInit("sp.ui.documentssharedwithme.js", sp_ui_documentssharedwithme_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}

NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.DocumentsSharedWithMe.js");

_spApplicationPagesScriptLoaded = true;
