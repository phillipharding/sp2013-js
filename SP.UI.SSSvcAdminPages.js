function ULSeyo(){var o=new Object;o.ULSTeamName="SharePoint Portal Server";o.ULSFileName="SP.UI.SSSvcAdminPages.js";return o;}
// JScript File


Type.registerNamespace('SP.UI.SSSvcAdminPages');

SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames = function SP_UI_SSSvcAdminPages_SSSvcAdminCommandNames() {
}


SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent = function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent() {ULSeyo:;
    SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.initializeBase(this);
}
SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.get_instance = function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$get_instance() {ULSeyo:;
    if (!SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.$0) {
        SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.$0 = new SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent();
    }
    return SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.$0;
}
SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.registerWithPageManager = function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$registerWithPageManager() {ULSeyo:;
    SP.Ribbon.PageManager.get_instance().addPageComponent(SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.get_instance());
}
SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.unregisterWithPageManager = function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$unregisterWithPageManager() {ULSeyo:;
    if (SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.$0) {
        SP.Ribbon.PageManager.get_instance().removePageComponent(SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.get_instance());
    }
}
SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.get_isHandlingCommand = function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$get_isHandlingCommand() {ULSeyo:;
    if (!SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.$0) {
        return false;
    }
    return SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.$0.$1_1;
}
SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.prototype = {
    $2_1: null,
    $3_1: null,
    
    init: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$init() {ULSeyo:;
        this.$2_1 = [];
        this.$3_1 = [ 'SSSvcAdminTab', 'SSSvcManageApplications', 'SSSvcNewApplication', 'SSSvcDeleteApplication', 'SSSvcEditApplication', 'SSSvcManageKey', 'SSSvcChangeKey', 'SSSvcRefreshKey', 'SSSvcManageCredentials', 'SSSvcSetCredentials', 'SSSvcManagePermissions', 'SSSvcSetPermissions' ];
    },
    
    getFocusedCommands: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$getFocusedCommands() {ULSeyo:;
        return this.$2_1;
    },
    
    getGlobalCommands: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$getGlobalCommands() {ULSeyo:;
        return this.$3_1;
    },
    
    canHandleCommand: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$canHandleCommand(commandId) {ULSeyo:;
        if (commandId === 'SSSvcNewApplication') {
            return eval('SSSvcRibbonEnable[\'SSSvcNewApplication\']');
        }
        else if (commandId === 'SSSvcDeleteApplication') {
            return eval('SSSvcRibbonEnable[\'SSSvcDeleteApplication\']');
        }
        else if (commandId === 'SSSvcEditApplication') {
            return eval('SSSvcRibbonEnable[\'SSSvcEditApplication\']');
        }
        else if (commandId === 'SSSvcChangeKey') {
            return eval('SSSvcRibbonEnable[\'SSSvcChangeKey\']');
        }
        else if (commandId === 'SSSvcRefreshKey') {
            return eval('SSSvcRibbonEnable[\'SSSvcRefreshKey\']');
        }
        else if (commandId === 'SSSvcSetCredentials') {
            return eval('SSSvcRibbonEnable[\'SSSvcSetCredentials\']');
        }
        else if (commandId === 'SSSvcSetPermissions') {
            return eval('SSSvcRibbonEnable[\'SSSvcSetPermissions\']');
        }
        else if (commandId === 'SSSvcManageApplications') {
            return true;
        }
        else if (commandId === 'SSSvcManageKey') {
            return true;
        }
        else if (commandId === 'SSSvcManageCredentials') {
            return true;
        }
        else if (commandId === 'SSSvcManagePermissions') {
            return true;
        }
        else if (commandId === 'SSSvcAdminTab') {
            return true;
        }
        else {
            return false;
        }
    },
    
    $1_1: false,
    
    get_handlingCommand: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$get_handlingCommand() {ULSeyo:;
        return this.$1_1;
    },
    set_handlingCommand: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$set_handlingCommand(value) {ULSeyo:;
        this.$1_1 = value;
        return value;
    },
    
    handleCommand: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$handleCommand(commandId, properties, sequence) {ULSeyo:;
        if (commandId === 'SSSvcNewApplication') {
            STSNavigate(eval('SSSvcRibbonUrl[\'SSSvcNewApplication\']'));
        }
        else if (commandId === 'SSSvcDeleteApplication') {
            DeleteSelectedApplication();
        }
        else if (commandId === 'SSSvcEditApplication') {
            EditSelectedApplication();
        }
        else if (commandId === 'SSSvcChangeKey') {
            PopUpChangeDBKeyPage();
        }
        else if (commandId === 'SSSvcRefreshKey') {
            RefreshKey();
        }
        else if (commandId === 'SSSvcSetCredentials') {
            SetCredentials();
        }
        else if (commandId === 'SSSvcSetPermissions') {
            SetPermissions();
        }
        else {
            return false;
        }
        return true;
    },
    
    isFocusable: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$isFocusable() {ULSeyo:;
        return true;
    },
    
    receiveFocus: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$receiveFocus() {ULSeyo:;
        return true;
    },
    
    yieldFocus: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$yieldFocus() {ULSeyo:;
        return true;
    }
}


SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.registerClass('SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames');
SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.registerClass('SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent', CUI.Page.PageComponent);
SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcAdminTab = 'SSSvcAdminTab';
SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcManageApplications = 'SSSvcManageApplications';
SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcNewApplication = 'SSSvcNewApplication';
SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcDeleteApplication = 'SSSvcDeleteApplication';
SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcEditApplication = 'SSSvcEditApplication';
SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcManageKey = 'SSSvcManageKey';
SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcChangeKey = 'SSSvcChangeKey';
SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcRefreshKey = 'SSSvcRefreshKey';
SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcManageCredentials = 'SSSvcManageCredentials';
SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcSetCredentials = 'SSSvcSetCredentials';
SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcManagePermissions = 'SSSvcManagePermissions';
SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcSetPermissions = 'SSSvcSetPermissions';
SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.$0 = null;

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}

NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.sssvcadminpages.js");

_spSSSvcAdminPagesScriptLoaded = true;

