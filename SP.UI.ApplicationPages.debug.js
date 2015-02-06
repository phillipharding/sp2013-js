Type.registerNamespace('SP.UI.ApplicationPages');
SP.UI.ApplicationPages.PermCommandNames = function SP_UI_ApplicationPages_PermCommandNames() {
};
SP.UI.ApplicationPages.PermLayoutPageComponent = function SP_UI_ApplicationPages_PermLayoutPageComponent() {
    SP.UI.ApplicationPages.PermLayoutPageComponent.initializeBase(this);
};
SP.UI.ApplicationPages.PermLayoutPageComponent.get_instance = function SP_UI_ApplicationPages_PermLayoutPageComponent$get_instance() {
    if (!SP.UI.ApplicationPages.PermLayoutPageComponent.$0) {
        SP.UI.ApplicationPages.PermLayoutPageComponent.$0 = new SP.UI.ApplicationPages.PermLayoutPageComponent();
    }
    return SP.UI.ApplicationPages.PermLayoutPageComponent.$0;
};
SP.UI.ApplicationPages.PermLayoutPageComponent.registerWithPageManager = function SP_UI_ApplicationPages_PermLayoutPageComponent$registerWithPageManager() {
    ExecuteOrDelayUntilScriptLoaded(SP.UI.ApplicationPages.PermLayoutPageComponent.$4, 'SP.Ribbon.js');
};
SP.UI.ApplicationPages.PermLayoutPageComponent.$4 = function SP_UI_ApplicationPages_PermLayoutPageComponent$$4() {
    (SP.Ribbon.PageManager.get_instance()).addPageComponent(SP.UI.ApplicationPages.PermLayoutPageComponent.get_instance());
};
SP.UI.ApplicationPages.PermLayoutPageComponent.unregisterWithPageManager = function SP_UI_ApplicationPages_PermLayoutPageComponent$unregisterWithPageManager() {
    if (SP.UI.ApplicationPages.PermLayoutPageComponent.$0) {
        (SP.Ribbon.PageManager.get_instance()).removePageComponent(SP.UI.ApplicationPages.PermLayoutPageComponent.get_instance());
    }
};
SP.UI.ApplicationPages.PermLayoutPageComponent.refreshRibbonStatus = function SP_UI_ApplicationPages_PermLayoutPageComponent$refreshRibbonStatus() {
    ((SP.Ribbon.PageManager.get_instance()).get_commandDispatcher()).executeCommand(Commands.CommandIds.ApplicationStateChanged, null);
};
SP.UI.ApplicationPages.PermLayoutPageComponent.get_isHandlingCommand = function SP_UI_ApplicationPages_PermLayoutPageComponent$get_isHandlingCommand() {
    if (!SP.UI.ApplicationPages.PermLayoutPageComponent.$0) {
        return false;
    }
    return SP.UI.ApplicationPages.PermLayoutPageComponent.$0.$1_1;
};
SP.UI.ApplicationPages.PermLayoutPageComponent.prototype = {
    $2_1: null,
    $3_1: null,
    init: function SP_UI_ApplicationPages_PermLayoutPageComponent$init() {
        this.$2_1 = [];
        this.$3_1 = ['Perm_PermissionTab', 'Perm_ParentGroup', 'Perm_AddGroup', 'Perm_ModifyGroup', 'Perm_ManageGroup', 'Perm_ManageParent', 'Perm_AddUser', 'Perm_NewGroup', 'Perm_EditUsrPerm', 'Perm_RemovePerms', 'Perm_AnonyAccess', 'Perm_PermLevels', 'Perm_ManageAccReq', 'Perm_SiteColAdmin', 'Perm_CheckGroup', 'Perm_CheckUsrPerm', 'PermissionContextualGroup', 'Perm_Inherit', 'Perm_StopInherit'];
    },
    getFocusedCommands: function SP_UI_ApplicationPages_PermLayoutPageComponent$getFocusedCommands() {
        return this.$2_1;
    },
    getGlobalCommands: function SP_UI_ApplicationPages_PermLayoutPageComponent$getGlobalCommands() {
        return this.$3_1;
    },
    canHandleCommand: function SP_UI_ApplicationPages_PermLayoutPageComponent$canHandleCommand(commandId) {
        var $v_0 = window.cSelectedEntries;

        if (commandId === 'Perm_AddUser') {
            return eval('PermRibbonEnable[\'Perm_AddUser\']');
        }
        else if (commandId === 'Perm_NewGroup') {
            return eval('PermRibbonEnable[\'Perm_NewGroup\']');
        }
        else if (commandId === 'Perm_ManageParent') {
            return eval('PermRibbonEnable[\'Perm_ManageParent\']');
        }
        else if (commandId === 'Perm_EditUsrPerm') {
            return eval('PermRibbonEnable[\'Perm_EditUsrPerm\']') && $v_0 > 0;
        }
        else if (commandId === 'Perm_RemovePerms') {
            return eval('PermRibbonEnable[\'Perm_RemovePerms\']') && $v_0 > 0;
        }
        else if (commandId === 'Perm_AnonyAccess') {
            return eval('PermRibbonEnable[\'Perm_AnonyAccess\']');
        }
        else if (commandId === 'Perm_PermLevels') {
            return eval('PermRibbonEnable[\'Perm_PermLevels\']');
        }
        else if (commandId === 'Perm_ManageAccReq') {
            return eval('PermRibbonEnable[\'Perm_ManageAccReq\']');
        }
        else if (commandId === 'Perm_SiteColAdmin') {
            return eval('PermRibbonEnable[\'Perm_SiteColAdmin\']');
        }
        else if (commandId === 'Perm_CheckUsrPerm') {
            return eval('PermRibbonEnable[\'Perm_CheckUsrPerm\']');
        }
        else if (commandId === 'Perm_Inherit') {
            return eval('PermRibbonEnable[\'Perm_Inherit\']');
        }
        else if (commandId === 'Perm_StopInherit') {
            return eval('PermRibbonEnable[\'Perm_StopInherit\']');
        }
        else if (commandId === 'Perm_PermissionTab') {
            return true;
        }
        else if (commandId === 'Perm_ParentGroup') {
            return true;
        }
        else if (commandId === 'Perm_AddGroup') {
            return true;
        }
        else if (commandId === 'Perm_ModifyGroup') {
            return true;
        }
        else if (commandId === 'Perm_ManageGroup') {
            return true;
        }
        else if (commandId === 'Perm_CheckGroup') {
            return true;
        }
        else if (commandId === 'PermissionContextualGroup') {
            return true;
        }
        else {
            return false;
        }
    },
    $1_1: false,
    get_handlingCommand: function SP_UI_ApplicationPages_PermLayoutPageComponent$get_handlingCommand() {
        return this.$1_1;
    },
    set_handlingCommand: function SP_UI_ApplicationPages_PermLayoutPageComponent$set_handlingCommand(value) {
        this.$1_1 = value;
        return value;
    },
    handleCommand: function SP_UI_ApplicationPages_PermLayoutPageComponent$handleCommand(commandId, properties, sequence) {
        if (commandId === 'Perm_AddUser') {
            ShowPopupDialog(eval('PermRibbonUrl[\'Perm_AddUser\']'));
        }
        else if (commandId === 'Perm_NewGroup') {
            STSNavigate(eval('PermRibbonUrl[\'Perm_NewGroup\']'));
        }
        else if (commandId === 'Perm_ManageParent') {
            GoToPage(eval('PermRibbonUrl[\'Perm_ManageParent\']'));
        }
        else if (commandId === 'Perm_EditUsrPerm') {
            EditRolesForSelectedUsers();
        }
        else if (commandId === 'Perm_RemovePerms') {
            deluser();
        }
        else if (commandId === 'Perm_AnonyAccess') {
            ShowPopupDialog(eval('PermRibbonUrl[\'Perm_AnonyAccess\']'));
        }
        else if (commandId === 'Perm_PermLevels') {
            GoToPage(eval('PermRibbonUrl[\'Perm_PermLevels\']'));
        }
        else if (commandId === 'Perm_ManageAccReq') {
            ShowPopupDialog(eval('PermRibbonUrl[\'Perm_ManageAccReq\']'));
        }
        else if (commandId === 'Perm_SiteColAdmin') {
            ShowPopupDialog(eval('PermRibbonUrl[\'Perm_SiteColAdmin\']'));
        }
        else if (commandId === 'Perm_CheckUsrPerm') {
            CheckPerms();
        }
        else if (commandId === 'Perm_Inherit') {
            inheritPerms();
        }
        else if (commandId === 'Perm_StopInherit') {
            uniquePerms();
        }
        else {
            return false;
        }
        return true;
    },
    isFocusable: function SP_UI_ApplicationPages_PermLayoutPageComponent$isFocusable() {
        return true;
    },
    receiveFocus: function SP_UI_ApplicationPages_PermLayoutPageComponent$receiveFocus() {
        return true;
    },
    yieldFocus: function SP_UI_ApplicationPages_PermLayoutPageComponent$yieldFocus() {
        return true;
    }
};
SP.UI.ApplicationPages.PermCommandNames.registerClass('SP.UI.ApplicationPages.PermCommandNames');
SP.UI.ApplicationPages.PermLayoutPageComponent.registerClass('SP.UI.ApplicationPages.PermLayoutPageComponent', CUI.Page.PageComponent);
function sp_ui_applicationpages_initialize() {
    SP.UI.ApplicationPages.PermCommandNames.perm_PermissionTab = 'Perm_PermissionTab';
    SP.UI.ApplicationPages.PermCommandNames.perm_ParentGroup = 'Perm_ParentGroup';
    SP.UI.ApplicationPages.PermCommandNames.perm_AddGroup = 'Perm_AddGroup';
    SP.UI.ApplicationPages.PermCommandNames.perm_ModifyGroup = 'Perm_ModifyGroup';
    SP.UI.ApplicationPages.PermCommandNames.perm_ManageGroup = 'Perm_ManageGroup';
    SP.UI.ApplicationPages.PermCommandNames.perm_ManageParent = 'Perm_ManageParent';
    SP.UI.ApplicationPages.PermCommandNames.perm_AddUser = 'Perm_AddUser';
    SP.UI.ApplicationPages.PermCommandNames.perm_NewGroup = 'Perm_NewGroup';
    SP.UI.ApplicationPages.PermCommandNames.perm_EditUsrPerm = 'Perm_EditUsrPerm';
    SP.UI.ApplicationPages.PermCommandNames.perm_RemovePerms = 'Perm_RemovePerms';
    SP.UI.ApplicationPages.PermCommandNames.perm_AnonyAccess = 'Perm_AnonyAccess';
    SP.UI.ApplicationPages.PermCommandNames.perm_PermLevels = 'Perm_PermLevels';
    SP.UI.ApplicationPages.PermCommandNames.perm_ManageAccReq = 'Perm_ManageAccReq';
    SP.UI.ApplicationPages.PermCommandNames.perm_SiteColAdmin = 'Perm_SiteColAdmin';
    SP.UI.ApplicationPages.PermCommandNames.perm_CheckGroup = 'Perm_CheckGroup';
    SP.UI.ApplicationPages.PermCommandNames.perm_CheckUsrPerm = 'Perm_CheckUsrPerm';
    SP.UI.ApplicationPages.PermCommandNames.perm_ContextualGroup = 'PermissionContextualGroup';
    SP.UI.ApplicationPages.PermCommandNames.perm_Inherit = 'Perm_Inherit';
    SP.UI.ApplicationPages.PermCommandNames.perm_StopInherit = 'Perm_StopInherit';
    SP.UI.ApplicationPages.PermLayoutPageComponent.$0 = null;
}
;
sp_ui_applicationpages_initialize();
RegisterModuleInit("sp.ui.applicationpages.js", sp_ui_applicationpages_initialize);
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.applicationpages.js");
_spApplicationPagesScriptLoaded = true;
