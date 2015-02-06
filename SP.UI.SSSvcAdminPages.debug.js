function ULSlb6(){var o=new Object;o.ULSTeamName="SharePoint Portal Server";o.ULSFileName="SP.UI.SSSvcAdminPages.debug.js";return o;}
// JScript File


Type.registerNamespace('SP.UI.SSSvcAdminPages');

SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames = function SP_UI_SSSvcAdminPages_SSSvcAdminCommandNames() {
}


SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent = function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent() {ULSlb6:;
    SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.initializeBase(this);
}
SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.get_instance = function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$get_instance() {ULSlb6:;
    if (!SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent._s_instance$p) {
        SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent._s_instance$p = new SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent();
    }
    return SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent._s_instance$p;
}
SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.registerWithPageManager = function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$registerWithPageManager() {ULSlb6:;
    SP.Ribbon.PageManager.get_instance().addPageComponent(SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.get_instance());
}
SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.unregisterWithPageManager = function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$unregisterWithPageManager() {ULSlb6:;
    if (SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent._s_instance$p) {
        SP.Ribbon.PageManager.get_instance().removePageComponent(SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.get_instance());
    }
}
SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.get_isHandlingCommand = function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$get_isHandlingCommand() {ULSlb6:;
    if (!SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent._s_instance$p) {
        return false;
    }
    return SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent._s_instance$p.get_handlingCommand();
}
SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent.prototype = {
    _m_focusedCommands$p$1: null,
    _m_globalCommands$p$1: null,
    
    init: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$init() {ULSlb6:;
        this._m_focusedCommands$p$1 = [];
        this._m_globalCommands$p$1 = [ SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcAdminTab, SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcManageApplications, SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcNewApplication, SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcDeleteApplication, SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcEditApplication, SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcManageKey, SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcChangeKey, SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcRefreshKey, SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcManageCredentials, SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcSetCredentials, SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcManagePermissions, SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcSetPermissions ];
    },
    
    getFocusedCommands: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$getFocusedCommands() {ULSlb6:;
        return this._m_focusedCommands$p$1;
    },
    
    getGlobalCommands: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$getGlobalCommands() {ULSlb6:;
        return this._m_globalCommands$p$1;
    },
    
    canHandleCommand: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$canHandleCommand(commandId) {ULSlb6:;
        if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcNewApplication) {
            return eval('SSSvcRibbonEnable[\'SSSvcNewApplication\']');
        }
        else if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcDeleteApplication) {
            return eval('SSSvcRibbonEnable[\'SSSvcDeleteApplication\']');
        }
        else if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcEditApplication) {
            return eval('SSSvcRibbonEnable[\'SSSvcEditApplication\']');
        }
        else if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcChangeKey) {
            return eval('SSSvcRibbonEnable[\'SSSvcChangeKey\']');
        }
        else if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcRefreshKey) {
            return eval('SSSvcRibbonEnable[\'SSSvcRefreshKey\']');
        }
        else if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcSetCredentials) {
            return eval('SSSvcRibbonEnable[\'SSSvcSetCredentials\']');
        }
        else if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcSetPermissions) {
            return eval('SSSvcRibbonEnable[\'SSSvcSetPermissions\']');
        }
        else if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcManageApplications) {
            return true;
        }
        else if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcManageKey) {
            return true;
        }
        else if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcManageCredentials) {
            return true;
        }
        else if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcManagePermissions) {
            return true;
        }
        else if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcAdminTab) {
            return true;
        }
        else {
            return false;
        }
    },
    
    _m_handlingCommand$p$1: false,
    
    get_handlingCommand: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$get_handlingCommand() {ULSlb6:;
        return this._m_handlingCommand$p$1;
    },
    set_handlingCommand: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$set_handlingCommand(value) {ULSlb6:;
        this._m_handlingCommand$p$1 = value;
        return value;
    },
    
    handleCommand: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$handleCommand(commandId, properties, sequence) {ULSlb6:;
        if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcNewApplication) {
            STSNavigate(eval('SSSvcRibbonUrl[\'SSSvcNewApplication\']'));
        }
        else if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcDeleteApplication) {
            DeleteSelectedApplication();
        }
        else if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcEditApplication) {
            EditSelectedApplication();
        }
        else if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcChangeKey) {
            PopUpChangeDBKeyPage();
        }
        else if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcRefreshKey) {
            RefreshKey();
        }
        else if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcSetCredentials) {
            SetCredentials();
        }
        else if (commandId === SP.UI.SSSvcAdminPages.SSSvcAdminCommandNames.ssSvcSetPermissions) {
            SetPermissions();
        }
        else {
            return false;
        }
        return true;
    },
    
    isFocusable: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$isFocusable() {ULSlb6:;
        return true;
    },
    
    receiveFocus: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$receiveFocus() {ULSlb6:;
        return true;
    },
    
    yieldFocus: function SP_UI_SSSvcAdminPages_SSSvcAdminPageComponent$yieldFocus() {ULSlb6:;
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
SP.UI.SSSvcAdminPages.SSSvcAdminPageComponent._s_instance$p = null;

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}

NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.sssvcadminpages.js");

_spSSSvcAdminPagesScriptLoaded = true;

