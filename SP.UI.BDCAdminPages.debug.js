Type.registerNamespace('SP.UI.BDCAdminPages');
SP.UI.BDCAdminPages.BDCAdminCommandNames = function SP_UI_BDCAdminPages_BDCAdminCommandNames() {
};
SP.UI.BDCAdminPages.BDCAdminPageComponent = function SP_UI_BDCAdminPages_BDCAdminPageComponent() {
    SP.UI.BDCAdminPages.BDCAdminPageComponent.initializeBase(this);
};
SP.UI.BDCAdminPages.BDCAdminPageComponent.get_instance = function SP_UI_BDCAdminPages_BDCAdminPageComponent$get_instance() {
    if (!SP.UI.BDCAdminPages.BDCAdminPageComponent.$0) {
        SP.UI.BDCAdminPages.BDCAdminPageComponent.$0 = new SP.UI.BDCAdminPages.BDCAdminPageComponent();
    }
    return SP.UI.BDCAdminPages.BDCAdminPageComponent.$0;
};
SP.UI.BDCAdminPages.BDCAdminPageComponent.registerWithPageManager = function SP_UI_BDCAdminPages_BDCAdminPageComponent$registerWithPageManager() {
    (SP.Ribbon.PageManager.get_instance()).addPageComponent(SP.UI.BDCAdminPages.BDCAdminPageComponent.get_instance());
};
SP.UI.BDCAdminPages.BDCAdminPageComponent.unregisterWithPageManager = function SP_UI_BDCAdminPages_BDCAdminPageComponent$unregisterWithPageManager() {
    if (SP.UI.BDCAdminPages.BDCAdminPageComponent.$0) {
        (SP.Ribbon.PageManager.get_instance()).removePageComponent(SP.UI.BDCAdminPages.BDCAdminPageComponent.get_instance());
    }
};
SP.UI.BDCAdminPages.BDCAdminPageComponent.get_isHandlingCommand = function SP_UI_BDCAdminPages_BDCAdminPageComponent$get_isHandlingCommand() {
    if (!SP.UI.BDCAdminPages.BDCAdminPageComponent.$0) {
        return false;
    }
    return SP.UI.BDCAdminPages.BDCAdminPageComponent.$0.$1_1;
};
SP.UI.BDCAdminPages.BDCAdminPageComponent.navigateModalDialog = function SP_UI_BDCAdminPages_BDCAdminPageComponent$navigateModalDialog(targetUrl) {
    var $v_0 = new SP.UI.DialogOptions();

    $v_0.url = targetUrl;
    $v_0.dialogReturnValueCallback = SP.UI.BDCAdminPages.BDCAdminPageComponent.$4;
    SP.UI.ModalDialog.showModalDialog($v_0);
};
SP.UI.BDCAdminPages.BDCAdminPageComponent.navigateModalDialogWithRefresh = function SP_UI_BDCAdminPages_BDCAdminPageComponent$navigateModalDialogWithRefresh(targetUrl) {
    var $v_0 = new SP.UI.DialogOptions();

    $v_0.url = targetUrl;
    $v_0.dialogReturnValueCallback = SP.UI.BDCAdminPages.BDCAdminPageComponent.$5;
    SP.UI.ModalDialog.showModalDialog($v_0);
};
SP.UI.BDCAdminPages.BDCAdminPageComponent.$4 = function SP_UI_BDCAdminPages_BDCAdminPageComponent$$4($p0, $p1) {
    ModalDialogCallback($p0);
};
SP.UI.BDCAdminPages.BDCAdminPageComponent.$5 = function SP_UI_BDCAdminPages_BDCAdminPageComponent$$5($p0, $p1) {
    ModalDialogCallbackRefreshPage($p0);
};
SP.UI.BDCAdminPages.BDCAdminPageComponent.prototype = {
    $2_1: null,
    $3_1: null,
    get_initialViewName: function SP_UI_BDCAdminPages_BDCAdminPageComponent$get_initialViewName() {
        return eval('InitialViewName');
    },
    init: function SP_UI_BDCAdminPages_BDCAdminPageComponent$init() {
        this.$2_1 = [];
        this.$3_1 = ['BDCAdminTab', 'BDCManageApplicationModels', 'BDCImportModel', 'BDCDeleteModel', 'BDCExportModel', 'BDCManagePermissions', 'BDCSetPermissions', 'BDCAssignAdmins', 'BDCManageViews', 'BDCSelectView', 'ViewSelectionMenuOpen', 'ViewSelectionMenuClose', 'ViewApplicationModels', 'ViewLobSystems', 'ViewEntities', 'QueryDisplayView', 'BDCAdminManageTab', 'BDCAdminManageTabActionManagementGroup', 'BDCAdminManageTabAddAction', 'BDCAdminManageTabDeleteAction', 'BDCAdminManageTabEditAction', 'BDCAdminManageTabApplicationManagementGroup', 'BDCAdminManageTabEditSettings', 'BDCAdminManageTabDelete', 'BDCAdminManageTabCloseGroup', 'BDCAdminManageTabCloseView', 'BDCConnectionSettingTab', 'BDCManageConnectionSettingsGroup', 'BDCConfigureConnectionSettingsGroup', 'BDCAddConnectionSettings', 'BDCDeleteConnectionSettings', 'BDCConnectionSettingsProperties', 'BDCConnectionSettingsMetadata', 'BDCConnectionSettingsCustomSecurity'];
    },
    getFocusedCommands: function SP_UI_BDCAdminPages_BDCAdminPageComponent$getFocusedCommands() {
        return this.$2_1;
    },
    getGlobalCommands: function SP_UI_BDCAdminPages_BDCAdminPageComponent$getGlobalCommands() {
        return this.$3_1;
    },
    canHandleCommand: function SP_UI_BDCAdminPages_BDCAdminPageComponent$canHandleCommand(commandId) {
        if (commandId === 'BDCImportModel') {
            return eval('BDCRibbonEnable[\'BDCImportModel\']');
        }
        else if (commandId === 'BDCDeleteModel') {
            return eval('BDCRibbonEnable[\'BDCDeleteModel\']');
        }
        else if (commandId === 'BDCExportModel') {
            return eval('BDCRibbonEnable[\'BDCExportModel\']');
        }
        else if (commandId === 'BDCSetPermissions') {
            return eval('BDCRibbonEnable[\'BDCSetPermissons\']');
        }
        else if (commandId === 'BDCAssignAdmins') {
            return eval('BDCRibbonEnable[\'BDCAssignAdmins\']');
        }
        else if (commandId === 'BDCSelectView') {
            return eval('BDCRibbonEnable[\'BDCSelectView\']');
        }
        else if (commandId === 'ViewSelectionMenuOpen') {
            return eval('BDCRibbonEnable[\'ViewSelectionMenuOpen\']');
        }
        else if (commandId === 'ViewSelectionMenuClose') {
            return eval('BDCRibbonEnable[\'ViewSelectionMenuClose\']');
        }
        else if (commandId === 'ViewApplicationModels') {
            return eval('BDCRibbonEnable[\'ViewApplicationModels\']');
        }
        else if (commandId === 'ViewLobSystems') {
            return eval('BDCRibbonEnable[\'ViewLobSystems\']');
        }
        else if (commandId === 'ViewEntities') {
            return eval('BDCRibbonEnable[\'ViewEntities\']');
        }
        else if (commandId === 'QueryDisplayView') {
            return true;
        }
        else if (commandId === 'BDCManageApplicationModels') {
            return eval('BDCRibbonEnable[\'BDCManageApplicationModels\']');
        }
        else if (commandId === 'BDCManagePermissions') {
            return eval('BDCRibbonEnable[\'BDCManagePermissions\']');
        }
        else if (commandId === 'BDCManageViews') {
            return eval('BDCRibbonEnable[\'BDCManageViews\']');
        }
        else if (commandId === 'BDCAdminTab') {
            return eval('BDCRibbonEnable[\'BDCAdminTab\']');
        }
        else if (commandId === 'BDCAdminManageTab') {
            return eval('BDCRibbonEnable[\'BDCAdminManageTab\']');
        }
        else if (commandId === 'BDCAdminManageTabApplicationManagementGroup') {
            return eval('BDCRibbonEnable[\'BDCAdminManageTabApplicationManagementGroup\']');
        }
        else if (commandId === 'BDCAdminManageTabEditSettings') {
            return eval('BDCRibbonEnable[\'BDCAdminManageTabEditSettings\']');
        }
        else if (commandId === 'BDCAdminManageTabDelete') {
            return eval('BDCRibbonEnable[\'BDCAdminManageTabDelete\']');
        }
        else if (commandId === 'BDCAdminManageTabActionManagementGroup') {
            return eval('BDCRibbonEnable[\'BDCAdminManageTabActionManagementGroup\']');
        }
        else if (commandId === 'BDCAdminManageTabAddAction') {
            return eval('BDCRibbonEnable[\'BDCAdminManageTabAddAction\']');
        }
        else if (commandId === 'BDCAdminManageTabEditAction') {
            return eval('BDCRibbonEnable[\'BDCAdminManageTabEditAction\']');
        }
        else if (commandId === 'BDCAdminManageTabDeleteAction') {
            return eval('BDCRibbonEnable[\'BDCAdminManageTabDeleteAction\']');
        }
        else if (commandId === 'BDCAdminManageTabCloseGroup') {
            return eval('BDCRibbonEnable[\'BDCAdminManageTabCloseGroup\']');
        }
        else if (commandId === 'BDCAdminManageTabCloseView') {
            return eval('BDCRibbonEnable[\'BDCAdminManageTabCloseView\']');
        }
        else if (commandId === 'BDCConnectionSettingTab') {
            return eval('BDCRibbonEnable[\'BDCConnectionSettingTab\']');
        }
        else if (commandId === 'BDCManageConnectionSettingsGroup') {
            return eval('BDCRibbonEnable[\'BDCManageConnectionSettingsGroup\']');
        }
        else if (commandId === 'BDCConfigureConnectionSettingsGroup') {
            return eval('BDCRibbonEnable[\'BDCConfigureConnectionSettingsGroup\']');
        }
        else if (commandId === 'BDCAddConnectionSettings') {
            return eval('BDCRibbonEnable[\'BDCAddConnectionSettings\']');
        }
        else if (commandId === 'BDCDeleteConnectionSettings') {
            return eval('BDCRibbonEnable[\'BDCDeleteConnectionSettings\']');
        }
        else if (commandId === 'BDCConnectionSettingsMetadata') {
            return eval('BDCRibbonEnable[\'BDCConnectionSettingsMetadata\']');
        }
        else if (commandId === 'BDCConnectionSettingsProperties') {
            return eval('BDCRibbonEnable[\'BDCConnectionSettingsProperties\']');
        }
        else if (commandId === 'BDCConnectionSettingsCustomSecurity') {
            return eval('BDCRibbonEnable[\'BDCConnectionSettingsCustomSecurity\']');
        }
        else {
            return false;
        }
    },
    $1_1: false,
    get_handlingCommand: function SP_UI_BDCAdminPages_BDCAdminPageComponent$get_handlingCommand() {
        return this.$1_1;
    },
    set_handlingCommand: function SP_UI_BDCAdminPages_BDCAdminPageComponent$set_handlingCommand(value) {
        this.$1_1 = value;
        return value;
    },
    handleCommand: function SP_UI_BDCAdminPages_BDCAdminPageComponent$handleCommand(commandId, properties, sequence) {
        if (commandId === 'QueryDisplayView') {
            properties['Value'] = this.get_initialViewName();
        }
        else if (commandId === 'BDCImportModel') {
            STSNavigate(eval('BDCRibbonUrl[\'BDCImportModel\']'));
        }
        else if (commandId === 'BDCDeleteModel') {
            RemoveBDCModel();
        }
        else if (commandId === 'BDCExportModel') {
            ExportApplicationModel();
        }
        else if (commandId === 'BDCSetPermissions') {
            SetPermissions();
        }
        else if (commandId === 'BDCAssignAdmins') {
            SP.UI.BDCAdminPages.BDCAdminPageComponent.navigateModalDialog(eval('BDCRibbonUrl[\'BDCAssignAdmins\']'));
        }
        else if (commandId === 'ViewApplicationModels') {
            STSNavigate(eval('BDCRibbonUrl[\'ViewApplicationModels\']'));
        }
        else if (commandId === 'ViewLobSystems') {
            STSNavigate(eval('BDCRibbonUrl[\'ViewLobSystems\']'));
        }
        else if (commandId === 'ViewEntities') {
            STSNavigate(eval('BDCRibbonUrl[\'ViewEntities\']'));
        }
        else if (commandId === 'BDCAdminManageTabEditSettings') {
            ManageEditSetting();
        }
        else if (commandId === 'BDCAdminManageTabDelete') {
            ManageDelete();
        }
        else if (commandId === 'BDCAdminManageTabCloseView') {
            STSNavigate(eval('BDCRibbonUrl[\'BDCAdminManageTabCloseView\']'));
        }
        else if (commandId === 'BDCAdminManageTabAddAction') {
            AddBDCAction();
        }
        else if (commandId === 'BDCAdminManageTabDeleteAction') {
            DeleteBDCAction();
        }
        else if (commandId === 'BDCAdminManageTabEditAction') {
            EditBDCAction();
        }
        else if (commandId === 'BDCAddConnectionSettings') {
            var $v_0 = window.location;
            var $v_1 = $v_0.search;

            SP.UI.BDCAdminPages.BDCAdminPageComponent.navigateModalDialogWithRefresh(eval('BDCRibbonUrl[\'BDCAddConnectionSettings\']') + $v_1);
        }
        else if (commandId === 'BDCDeleteConnectionSettings') {
            DeleteAppConnections();
        }
        else if (commandId === 'BDCConnectionSettingsMetadata') {
            OpenAppConnectionDialog(eval('BDCRibbonUrl[\'BDCConnectionSettingsMetadata\']'));
        }
        else if (commandId === 'BDCConnectionSettingsProperties') {
            OpenAppConnectionDialog(eval('BDCRibbonUrl[\'BDCConnectionSettingsProperties\']'));
        }
        else if (commandId === 'BDCConnectionSettingsCustomSecurity') {
            OpenAppConnectionDialog(eval('BDCRibbonUrl[\'BDCConnectionSettingsCustomSecurity\']'));
        }
        else {
            return false;
        }
        return true;
    },
    isFocusable: function SP_UI_BDCAdminPages_BDCAdminPageComponent$isFocusable() {
        return true;
    },
    receiveFocus: function SP_UI_BDCAdminPages_BDCAdminPageComponent$receiveFocus() {
        return true;
    },
    yieldFocus: function SP_UI_BDCAdminPages_BDCAdminPageComponent$yieldFocus() {
        return true;
    }
};
SP.UI.BDCAdminPages.BDCAdminCommandNames.registerClass('SP.UI.BDCAdminPages.BDCAdminCommandNames');
SP.UI.BDCAdminPages.BDCAdminPageComponent.registerClass('SP.UI.BDCAdminPages.BDCAdminPageComponent', CUI.Page.PageComponent);
function sp_ui_bdcadminpages_initialize() {
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcAdminTab = 'BDCAdminTab';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcManageApplicationModels = 'BDCManageApplicationModels';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcImportModel = 'BDCImportModel';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcDeleteModel = 'BDCDeleteModel';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcExportModel = 'BDCExportModel';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcManagePermissions = 'BDCManagePermissions';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcAssignAdmins = 'BDCAssignAdmins';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcSetPermissons = 'BDCSetPermissions';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcManageViews = 'BDCManageViews';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcSelectView = 'BDCSelectView';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.viewSelectionMenuOpen = 'ViewSelectionMenuOpen';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.viewSelectionMenuClose = 'ViewSelectionMenuClose';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.viewApplicationModels = 'ViewApplicationModels';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.viewLobSystems = 'ViewLobSystems';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.viewEntities = 'ViewEntities';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.queryDisplayView = 'QueryDisplayView';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcAdminManageTab = 'BDCAdminManageTab';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcAdminManageTabApplicationManagementGroup = 'BDCAdminManageTabApplicationManagementGroup';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcAdminManageTabEditSettings = 'BDCAdminManageTabEditSettings';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcAdminManageTabDelete = 'BDCAdminManageTabDelete';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcAdminManageTabActionManagementGroup = 'BDCAdminManageTabActionManagementGroup';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcAdminManageTabAddAction = 'BDCAdminManageTabAddAction';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcAdminManageTabEditAction = 'BDCAdminManageTabEditAction';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcAdminManageTabDeleteAction = 'BDCAdminManageTabDeleteAction';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcAdminManageTabCloseGroup = 'BDCAdminManageTabCloseGroup';
    SP.UI.BDCAdminPages.BDCAdminCommandNames.bdcAdminManageTabCloseView = 'BDCAdminManageTabCloseView';
    SP.UI.BDCAdminPages.BDCAdminPageComponent.$0 = null;
}
;
sp_ui_bdcadminpages_initialize();
RegisterModuleInit("sp.ui.bdcadminpages.js", sp_ui_bdcadminpages_initialize);
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.bdcadminpages.js");
_spSSSvcAdminPagesScriptLoaded = true;
