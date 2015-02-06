Type.registerNamespace('SP.UI.Admin');
SP.UI.Admin.ManageTrustPageComponent = function SP_UI_Admin_ManageTrustPageComponent() {
    SP.UI.Admin.ManageTrustPageComponent.initializeBase(this);
};
SP.UI.Admin.ManageTrustPageComponent.initialize = function SP_UI_Admin_ManageTrustPageComponent$initialize() {
    var $v_0 = SP.Ribbon.PageManager.get_instance();

    if (null !== $v_0) {
        $v_0.addPageComponent(SP.UI.Admin.ManageTrustPageComponent.$4);
    }
};
SP.UI.Admin.ManageTrustPageComponent.get_selectedItem = function SP_UI_Admin_ManageTrustPageComponent$get_selectedItem() {
    return SP.UI.Admin.ManageTrustPageComponent.$0;
};
SP.UI.Admin.ManageTrustPageComponent.onItemSelected = function SP_UI_Admin_ManageTrustPageComponent$onItemSelected(item) {
    if (null !== SP.UI.Admin.ManageTrustPageComponent.$0) {
        SP.UI.Admin.ManageTrustPageComponent.$0.className = SP.UI.Admin.ManageTrustPageComponent.$6;
    }
    else {
        _ribbonStartInit('Ribbon.ManageTrust', false);
    }
    SP.UI.Admin.ManageTrustPageComponent.$0 = item;
    if (null !== SP.UI.Admin.ManageTrustPageComponent.$0) {
        SP.UI.Admin.ManageTrustPageComponent.$6 = SP.UI.Admin.ManageTrustPageComponent.$0.className;
        SP.UI.Admin.ManageTrustPageComponent.$0.className = 'ms-selectednav';
    }
    var $v_0 = SP.Ribbon.PageManager.get_instance();

    if (null !== $v_0) {
        ($v_0.get_commandDispatcher()).executeCommand(Commands.CommandIds.ApplicationStateChanged, null);
    }
};
SP.UI.Admin.ManageTrustPageComponent.navigate = function SP_UI_Admin_ManageTrustPageComponent$navigate(target, selectionAttributeTarget, useDialog) {
    var $v_0 = SP.UI.Admin.ManageTrustPageComponent.$0;
    var $v_1;

    if (selectionAttributeTarget) {
        if (null === $v_0) {
            return;
        }
        $v_1 = $v_0.getAttribute(target);
    }
    else {
        $v_1 = target;
    }
    if (useDialog) {
        var $v_2 = new SP.UI.DialogOptions();

        $v_2.url = $v_1;
        $v_2.dialogReturnValueCallback = SP.UI.Admin.ManageTrustPageComponent.$5;
        SP.UI.ModalDialog.showModalDialog($v_2);
    }
    else {
        window.navigate($v_1);
    }
};
SP.UI.Admin.ManageTrustPageComponent.handleDeleteMethod = function SP_UI_Admin_ManageTrustPageComponent$handleDeleteMethod(nameAttribute, IdAttribute) {
    var $v_0 = SP.UI.Admin.ManageTrustPageComponent.$0;

    if (null === $v_0) {
        return;
    }
    var $v_1 = $v_0.getAttribute(nameAttribute);
    var $v_2 = $v_0.getAttribute(IdAttribute);

    DeleteItem($v_1, $v_2);
};
SP.UI.Admin.ManageTrustPageComponent.$5 = function SP_UI_Admin_ManageTrustPageComponent$$5($p0, $p1) {
    if ($p0 === 1) {
        location.reload(null);
    }
    else {
        ModalDialogCallback(null);
    }
};
SP.UI.Admin.ManageTrustPageComponent.enabledIfSelected = function SP_UI_Admin_ManageTrustPageComponent$enabledIfSelected(typeAttribute) {
    var $v_0 = SP.UI.Admin.ManageTrustPageComponent.$0;

    if (null === $v_0) {
        return false;
    }
    var $v_1 = $v_0.getAttribute(typeAttribute);

    if ($v_1 === 'TrustedLoginProvider') {
        return false;
    }
    else {
        return true;
    }
};
SP.UI.Admin.ManageTrustPageComponent.prototype = {
    getFocusedCommands: function SP_UI_Admin_ManageTrustPageComponent$getFocusedCommands() {
        return [];
    },
    getGlobalCommands: function SP_UI_Admin_ManageTrustPageComponent$getGlobalCommands() {
        return getGlobalCommands();
    },
    isFocusable: function SP_UI_Admin_ManageTrustPageComponent$isFocusable() {
        return true;
    },
    receiveFocus: function SP_UI_Admin_ManageTrustPageComponent$receiveFocus() {
        return true;
    },
    yieldFocus: function SP_UI_Admin_ManageTrustPageComponent$yieldFocus() {
        return true;
    },
    canHandleCommand: function SP_UI_Admin_ManageTrustPageComponent$canHandleCommand(commandId) {
        return commandEnabled(commandId);
    },
    handleCommand: function SP_UI_Admin_ManageTrustPageComponent$handleCommand(commandId, properties, sequence) {
        return handleCommand(commandId, properties, sequence);
    }
};
SP.UI.Admin.ServiceApplicationPageComponent = function SP_UI_Admin_ServiceApplicationPageComponent() {
    SP.UI.Admin.ServiceApplicationPageComponent.initializeBase(this);
};
SP.UI.Admin.ServiceApplicationPageComponent.initialize = function SP_UI_Admin_ServiceApplicationPageComponent$initialize() {
    var $v_0 = SP.Ribbon.PageManager.get_instance();

    if (null !== $v_0) {
        $v_0.addPageComponent(SP.UI.Admin.ServiceApplicationPageComponent.$4);
    }
};
SP.UI.Admin.ServiceApplicationPageComponent.get_selectedItem = function SP_UI_Admin_ServiceApplicationPageComponent$get_selectedItem() {
    return SP.UI.Admin.ServiceApplicationPageComponent.$0;
};
SP.UI.Admin.ServiceApplicationPageComponent.onKeyDown = function SP_UI_Admin_ServiceApplicationPageComponent$onKeyDown(ev, item) {
    var $v_0 = true;
    var $v_1 = window.event;

    if (!$v_1) {
        if (!ev) {
            return $v_0;
        }
        $v_1 = ev;
    }
    var $v_2 = $v_1.keyCode;

    if (String.fromCharCode($v_2) === ' ') {
        SP.UI.Admin.ServiceApplicationPageComponent.onItemSelected(item);
        $v_0 = false;
    }
    return $v_0;
};
SP.UI.Admin.ServiceApplicationPageComponent.onItemMouseOver = function SP_UI_Admin_ServiceApplicationPageComponent$onItemMouseOver(item) {
    if (SP.UI.Admin.ServiceApplicationPageComponent.$0 !== item) {
        SP.UI.Admin.ServiceApplicationPageComponent.$1 = item;
        SP.UI.Admin.ServiceApplicationPageComponent.$2 = item.className;
        item.className = 's4-itm-hover';
    }
};
SP.UI.Admin.ServiceApplicationPageComponent.onItemMouseOut = function SP_UI_Admin_ServiceApplicationPageComponent$onItemMouseOut(item) {
    if (SP.UI.Admin.ServiceApplicationPageComponent.$0 !== item) {
        item.className = SP.UI.Admin.ServiceApplicationPageComponent.$2;
        SP.UI.Admin.ServiceApplicationPageComponent.$2 = null;
        SP.UI.Admin.ServiceApplicationPageComponent.$1 = null;
    }
};
SP.UI.Admin.ServiceApplicationPageComponent.onItemSelected = function SP_UI_Admin_ServiceApplicationPageComponent$onItemSelected(item) {
    if (null !== SP.UI.Admin.ServiceApplicationPageComponent.$0) {
        SP.UI.Admin.ServiceApplicationPageComponent.$0.className = SP.UI.Admin.ServiceApplicationPageComponent.$3;
    }
    else {
        _ribbonStartInit('Ribbon.SvcApp', false);
    }
    SP.UI.Admin.ServiceApplicationPageComponent.$0 = item;
    if (null !== SP.UI.Admin.ServiceApplicationPageComponent.$0) {
        if (SP.UI.Admin.ServiceApplicationPageComponent.$1 && SP.UI.Admin.ServiceApplicationPageComponent.$1 === SP.UI.Admin.ServiceApplicationPageComponent.$0) {
            SP.UI.Admin.ServiceApplicationPageComponent.$3 = SP.UI.Admin.ServiceApplicationPageComponent.$2;
        }
        else {
            SP.UI.Admin.ServiceApplicationPageComponent.$3 = SP.UI.Admin.ServiceApplicationPageComponent.$0.className;
        }
        SP.UI.Admin.ServiceApplicationPageComponent.$0.className = 's4-itm-selected';
    }
    ExecuteOrDelayUntilScriptLoaded(SP.UI.Admin.ServiceApplicationPageComponent.onItemSelectedInternal, 'SP.Ribbon.js');
    return false;
};
SP.UI.Admin.ServiceApplicationPageComponent.onItemSelectedInternal = function SP_UI_Admin_ServiceApplicationPageComponent$onItemSelectedInternal() {
    var $v_0 = SP.Ribbon.PageManager.get_instance();

    if (null !== $v_0) {
        ($v_0.get_commandDispatcher()).executeCommand(Commands.CommandIds.ApplicationStateChanged, null);
    }
};
SP.UI.Admin.ServiceApplicationPageComponent.navigate = function SP_UI_Admin_ServiceApplicationPageComponent$navigate(target, selectionAttributeTarget, appendIdParameter, useDialog) {
    var $v_0 = SP.UI.Admin.ServiceApplicationPageComponent.$0;
    var $v_1;

    if (selectionAttributeTarget) {
        if (null === $v_0) {
            return;
        }
        $v_1 = $v_0.getAttribute(target);
    }
    else {
        $v_1 = target;
    }
    if (null === $v_1) {
        return;
    }
    if (appendIdParameter) {
        if (null === $v_0) {
            return;
        }
        var $v_2 = new Sys.StringBuilder($v_1);

        if ($v_1.indexOf('?') < 0) {
            $v_2.append('?');
        }
        else {
            $v_2.append('&');
        }
        $v_2.append('id=');
        $v_2.append($v_0.getAttribute('itemId'));
        $v_1 = $v_2.toString();
    }
    if (useDialog) {
        var $v_3 = new SP.UI.DialogOptions();

        $v_3.url = $v_1;
        $v_3.dialogReturnValueCallback = SP.UI.Admin.ServiceApplicationPageComponent.$5;
        SP.UI.ModalDialog.showModalDialog($v_3);
    }
    else {
        window.location.href = $v_1;
    }
};
SP.UI.Admin.ServiceApplicationPageComponent.$5 = function SP_UI_Admin_ServiceApplicationPageComponent$$5($p0, $p1) {
    if ($p0 === 1) {
        location.reload(null);
    }
};
SP.UI.Admin.ServiceApplicationPageComponent.selectedAttributeExists = function SP_UI_Admin_ServiceApplicationPageComponent$selectedAttributeExists(attribute) {
    var $v_0 = SP.UI.Admin.ServiceApplicationPageComponent.$0;

    if (null === $v_0) {
        return false;
    }
    if (null !== $v_0.getAttribute(attribute)) {
        return true;
    }
    return false;
};
SP.UI.Admin.ServiceApplicationPageComponent.prototype = {
    init: function SP_UI_Admin_ServiceApplicationPageComponent$init() {
    },
    getFocusedCommands: function SP_UI_Admin_ServiceApplicationPageComponent$getFocusedCommands() {
        return [];
    },
    getGlobalCommands: function SP_UI_Admin_ServiceApplicationPageComponent$getGlobalCommands() {
        return getGlobalCommands();
    },
    isFocusable: function SP_UI_Admin_ServiceApplicationPageComponent$isFocusable() {
        return true;
    },
    receiveFocus: function SP_UI_Admin_ServiceApplicationPageComponent$receiveFocus() {
        return true;
    },
    yieldFocus: function SP_UI_Admin_ServiceApplicationPageComponent$yieldFocus() {
        return true;
    },
    canHandleCommand: function SP_UI_Admin_ServiceApplicationPageComponent$canHandleCommand(commandId) {
        return commandEnabled(commandId);
    },
    handleCommand: function SP_UI_Admin_ServiceApplicationPageComponent$handleCommand(commandId, properties, sequence) {
        return handleCommand(commandId, properties, sequence);
    }
};
SP.UI.Admin.WebApplicationPageComponent = function SP_UI_Admin_WebApplicationPageComponent() {
    SP.UI.Admin.WebApplicationPageComponent.initializeBase(this);
};
SP.UI.Admin.WebApplicationPageComponent.initialize = function SP_UI_Admin_WebApplicationPageComponent$initialize() {
    ExecuteOrDelayUntilScriptLoaded(SP.UI.Admin.WebApplicationPageComponent.$7, 'SP.Ribbon.js');
};
SP.UI.Admin.WebApplicationPageComponent.$7 = function SP_UI_Admin_WebApplicationPageComponent$$7() {
    var $v_0 = SP.Ribbon.PageManager.get_instance();

    if (null !== $v_0) {
        $v_0.addPageComponent(SP.UI.Admin.WebApplicationPageComponent.$4);
    }
};
SP.UI.Admin.WebApplicationPageComponent.get_selectedItem = function SP_UI_Admin_WebApplicationPageComponent$get_selectedItem() {
    return SP.UI.Admin.WebApplicationPageComponent.$0;
};
SP.UI.Admin.WebApplicationPageComponent.onKeyDown = function SP_UI_Admin_WebApplicationPageComponent$onKeyDown(ev, item) {
    var $v_0 = window.event;

    if (!$v_0) {
        if (!ev) {
            return;
        }
        $v_0 = ev;
    }
    var $v_1 = $v_0.keyCode;

    if (String.fromCharCode($v_1) === ' ') {
        SP.UI.Admin.WebApplicationPageComponent.onItemSelected(item);
    }
};
SP.UI.Admin.WebApplicationPageComponent.onItemMouseOver = function SP_UI_Admin_WebApplicationPageComponent$onItemMouseOver(item) {
    if (SP.UI.Admin.WebApplicationPageComponent.$0 !== item) {
        SP.UI.Admin.WebApplicationPageComponent.$1 = item;
        SP.UI.Admin.WebApplicationPageComponent.$2 = item.className;
        item.className = 's4-itm-hover';
    }
};
SP.UI.Admin.WebApplicationPageComponent.onItemMouseOut = function SP_UI_Admin_WebApplicationPageComponent$onItemMouseOut(item) {
    if (SP.UI.Admin.WebApplicationPageComponent.$0 !== item) {
        item.className = SP.UI.Admin.WebApplicationPageComponent.$2;
        SP.UI.Admin.WebApplicationPageComponent.$2 = null;
        SP.UI.Admin.WebApplicationPageComponent.$1 = null;
    }
};
SP.UI.Admin.WebApplicationPageComponent.onItemSelected = function SP_UI_Admin_WebApplicationPageComponent$onItemSelected(item) {
    if (null !== SP.UI.Admin.WebApplicationPageComponent.$0) {
        SP.UI.Admin.WebApplicationPageComponent.$0.className = SP.UI.Admin.WebApplicationPageComponent.$3;
    }
    SP.UI.Admin.WebApplicationPageComponent.$0 = item;
    if (null !== SP.UI.Admin.WebApplicationPageComponent.$0) {
        if (SP.UI.Admin.WebApplicationPageComponent.$1 && SP.UI.Admin.WebApplicationPageComponent.$1 === SP.UI.Admin.WebApplicationPageComponent.$0) {
            SP.UI.Admin.WebApplicationPageComponent.$3 = SP.UI.Admin.WebApplicationPageComponent.$2;
        }
        else {
            SP.UI.Admin.WebApplicationPageComponent.$3 = SP.UI.Admin.WebApplicationPageComponent.$0.className;
        }
        SP.UI.Admin.WebApplicationPageComponent.$0.className = 's4-itm-selected';
    }
    ExecuteOrDelayUntilScriptLoaded(SP.UI.Admin.WebApplicationPageComponent.onItemSelectedInternal, 'SP.Ribbon.js');
};
SP.UI.Admin.WebApplicationPageComponent.onItemSelectedInternal = function SP_UI_Admin_WebApplicationPageComponent$onItemSelectedInternal() {
    var $v_0 = SP.Ribbon.PageManager.get_instance();

    if (null !== $v_0) {
        ($v_0.get_commandDispatcher()).executeCommand(Commands.CommandIds.ApplicationStateChanged, null);
    }
};
SP.UI.Admin.WebApplicationPageComponent.navigate = function SP_UI_Admin_WebApplicationPageComponent$navigate(target, appendIdParameter, useDialog) {
    var $v_0 = SP.UI.Admin.WebApplicationPageComponent.$0;
    var $v_1;

    if (appendIdParameter) {
        if (null === $v_0) {
            return;
        }
        $v_1 = String.format('{0}{1}', target, $v_0.getAttribute('Id'));
    }
    else {
        $v_1 = target;
    }
    if (useDialog) {
        var $v_2 = new SP.UI.DialogOptions();

        $v_2.url = $v_1;
        $v_2.dialogReturnValueCallback = SP.UI.Admin.WebApplicationPageComponent.$5;
        SP.UI.ModalDialog.showModalDialog($v_2);
    }
    else {
        window.location.href = $v_1;
    }
};
SP.UI.Admin.WebApplicationPageComponent.$5 = function SP_UI_Admin_WebApplicationPageComponent$$5($p0, $p1) {
    if ($p0 === 1) {
        location.reload(null);
    }
};
SP.UI.Admin.WebApplicationPageComponent.isEnabled = function SP_UI_Admin_WebApplicationPageComponent$isEnabled(privileged) {
    var $v_0 = SP.UI.Admin.WebApplicationPageComponent.$0;

    if ((privileged & 18) === 18) {
        return true;
    }
    if (null === $v_0) {
        return false;
    }
    var $v_1 = null;

    $v_1 = $v_0.getAttribute('IsCentralAdmin');
    if (null !== $v_1) {
        if ('true' === $v_1 && (privileged & 32) === 32) {
            return false;
        }
        if ((privileged & 1) === 1) {
            return (privileged & 16) === 16;
        }
        else {
            return true;
        }
    }
    return false;
};
SP.UI.Admin.WebApplicationPageComponent.prototype = {
    getFocusedCommands: function SP_UI_Admin_WebApplicationPageComponent$getFocusedCommands() {
        return [];
    },
    getGlobalCommands: function SP_UI_Admin_WebApplicationPageComponent$getGlobalCommands() {
        return getGlobalCommands();
    },
    isFocusable: function SP_UI_Admin_WebApplicationPageComponent$isFocusable() {
        return true;
    },
    receiveFocus: function SP_UI_Admin_WebApplicationPageComponent$receiveFocus() {
        return true;
    },
    yieldFocus: function SP_UI_Admin_WebApplicationPageComponent$yieldFocus() {
        return true;
    },
    canHandleCommand: function SP_UI_Admin_WebApplicationPageComponent$canHandleCommand(commandId) {
        return commandEnabled(commandId);
    },
    handleCommand: function SP_UI_Admin_WebApplicationPageComponent$handleCommand(commandId, properties, sequence) {
        return handleCommand(commandId, properties, sequence);
    }
};
SP.UI.Admin.ManageTrustPageComponent.registerClass('SP.UI.Admin.ManageTrustPageComponent', CUI.Page.PageComponent);
SP.UI.Admin.ServiceApplicationPageComponent.registerClass('SP.UI.Admin.ServiceApplicationPageComponent', CUI.Page.PageComponent);
SP.UI.Admin.WebApplicationPageComponent.registerClass('SP.UI.Admin.WebApplicationPageComponent', CUI.Page.PageComponent);
function sp_ui_admin_initialize() {
    SP.UI.Admin.ManageTrustPageComponent.$4 = new SP.UI.Admin.ManageTrustPageComponent();
    SP.UI.Admin.ManageTrustPageComponent.$6 = null;
    SP.UI.Admin.ManageTrustPageComponent.$0 = null;
    SP.UI.Admin.ServiceApplicationPageComponent.$4 = new SP.UI.Admin.ServiceApplicationPageComponent();
    SP.UI.Admin.ServiceApplicationPageComponent.$0 = null;
    SP.UI.Admin.ServiceApplicationPageComponent.$1 = null;
    SP.UI.Admin.ServiceApplicationPageComponent.$3 = null;
    SP.UI.Admin.ServiceApplicationPageComponent.$2 = null;
    SP.UI.Admin.WebApplicationPageComponent.$4 = new SP.UI.Admin.WebApplicationPageComponent();
    SP.UI.Admin.WebApplicationPageComponent.$0 = null;
    SP.UI.Admin.WebApplicationPageComponent.$1 = null;
    SP.UI.Admin.WebApplicationPageComponent.$3 = null;
    SP.UI.Admin.WebApplicationPageComponent.$2 = null;
}
;
sp_ui_admin_initialize();
RegisterModuleInit("sp.ui.admin.js", sp_ui_admin_initialize);
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
    NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.admin.js");
}
