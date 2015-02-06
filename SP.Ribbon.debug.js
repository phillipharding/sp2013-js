Type.registerNamespace('SP.SPGantt.InstrumentedApi');
SP.SPGantt.InstrumentedApi.IJsApiImpl = function() {
};
SP.SPGantt.InstrumentedApi.IJsApiImpl.registerInterface('SP.SPGantt.InstrumentedApi.IJsApiImpl');
SP.SPGantt.InstrumentedApi.IJsApi = function() {
};
SP.SPGantt.InstrumentedApi.IJsApi.registerInterface('SP.SPGantt.InstrumentedApi.IJsApi');
SP.SPGantt.InstrumentedApi.ISPGanttImpl = function() {
};
SP.SPGantt.InstrumentedApi.ISPGanttImpl.registerInterface('SP.SPGantt.InstrumentedApi.ISPGanttImpl');
SP.SPGantt.InstrumentedApi.ISPGantt = function() {
};
SP.SPGantt.InstrumentedApi.ISPGantt.registerInterface('SP.SPGantt.InstrumentedApi.ISPGantt');
Type.registerNamespace('SP.Ribbon');
SP.Ribbon.NodeType = function() {
};
SP.Ribbon.NodeType.prototype = {
    Leaf: 0,
    Expanded: 1,
    Collapsed: 2
};
SP.Ribbon.NodeType.registerEnum('SP.Ribbon.NodeType', false);
SP.Ribbon.ControlDataRecord = function SP_Ribbon_ControlDataRecord() {
};
SP.Ribbon.IRelatedFieldsInfoRequestor = function() {
};
SP.Ribbon.IRelatedFieldsInfoRequestor.registerInterface('SP.Ribbon.IRelatedFieldsInfoRequestor');
SP.Ribbon.Utility = function SP_Ribbon_Utility() {
};
SP.Ribbon.Utility.$2A = function SP_Ribbon_Utility$$2A() {
    return window.self.self;
};
SP.Ribbon.Utility.$42 = function SP_Ribbon_Utility$$42($p0, $p1) {
    var $v_0 = SP.Ribbon.Utility.$2A();

    $addHandler($v_0, $p0, $p1);
};
SP.Ribbon.Utility.$4n = function SP_Ribbon_Utility$$4n($p0, $p1) {
    var $v_0 = SP.Ribbon.Utility.$2A();

    $removeHandler($v_0, $p0, $p1);
};
SP.Ribbon.Utility.$G = function SP_Ribbon_Utility$$G($p0, $p1) {
    return !!$p0 && !SP.UI.UIUtility.isSvgNode($p0) && !!$p0.className && Sys.UI.DomElement.containsCssClass($p0, $p1);
};
SP.Ribbon.Utility.get_$U = function SP_Ribbon_Utility$get_$U() {
    return SP.PageContextInfo.get_webPermMasks();
};
SP.Ribbon.UtilityInternal = function SP_Ribbon_UtilityInternal() {
};
SP.Ribbon.UtilityInternal.$5S = function SP_Ribbon_UtilityInternal$$5S() {
    return Sys.Browser.agent === Sys.Browser.Firefox || (Sys.Browser.name.toLowerCase()).indexOf('firefox') !== -1;
};
SP.Ribbon.UtilityInternal.$2A = function SP_Ribbon_UtilityInternal$$2A() {
    if (!SP.Ribbon.UtilityInternal.$5S()) {
        return document.body;
    }
    else {
        return window.self.self;
    }
};
SP.Ribbon.UtilityInternal.$41 = function SP_Ribbon_UtilityInternal$$41($p0, $p1) {
    var $v_0 = SP.Ribbon.UtilityInternal.$2A();

    $addHandler($v_0, $p0, $p1);
};
SP.Ribbon.UtilityInternal.$i = function SP_Ribbon_UtilityInternal$$i() {
    if (SP.Ribbon.UtilityInternal.$1o > 0) {
        window.clearTimeout(SP.Ribbon.UtilityInternal.$1o);
    }
    SP.Ribbon.UtilityInternal.$1o = window.setTimeout(SP.Ribbon.UtilityInternal.$3g, 0);
};
SP.Ribbon.UtilityInternal.$5y = function SP_Ribbon_UtilityInternal$$5y() {
    ((SP.Ribbon.PageManager.get_instance()).get_commandDispatcher()).executeCommand(Commands.CommandIds.ApplicationStateChanged, null);
    var $v_0 = window._spNextRibbonTabId;

    if (!SP.Ribbon.SU.$0($v_0)) {
        window.SelectRibbonTab($v_0);
        window._spNextRibbonTabId = null;
    }
    CUI.PMetrics.perfMark(7736);
};
SP.Ribbon.SU = function SP_Ribbon_SU() {
};
SP.Ribbon.SU.$2 = function SP_Ribbon_SU$$2($p0) {
    var $v_0 = null;

    return $p0 === $v_0 || typeof $p0 === 'undefined' || !$p0.length;
};
SP.Ribbon.SU.$0 = function SP_Ribbon_SU$$0($p0) {
    var $v_0 = null;

    return $p0 === $v_0 || typeof $p0 === 'undefined';
};
SP.Ribbon.SU.$1D = function SP_Ribbon_SU$$1D($p0) {
    return typeof $p0 === 'undefined';
};
SP.Ribbon.CommandUIExtensionPageComponent = function SP_Ribbon_CommandUIExtensionPageComponent() {
    this.$$d_onHandlersReturned = Function.createDelegate(this, this.onHandlersReturned);
    SP.Ribbon.CommandUIExtensionPageComponent.initializeBase(this);
};
SP.Ribbon.CommandUIExtensionPageComponent.get_instance = function SP_Ribbon_CommandUIExtensionPageComponent$get_instance() {
    if (null === SP.Ribbon.CommandUIExtensionPageComponent.$1L) {
        SP.Ribbon.CommandUIExtensionPageComponent.$1L = new SP.Ribbon.CommandUIExtensionPageComponent();
    }
    return SP.Ribbon.CommandUIExtensionPageComponent.$1L;
};
SP.Ribbon.CommandUIExtensionPageComponent.registerWithPageManager = function SP_Ribbon_CommandUIExtensionPageComponent$registerWithPageManager() {
    if (!SP.Ribbon.SU.$0((SP.Ribbon.CommandUIExtensionPageComponent.get_instance()).$14_1) && !SP.Ribbon.CommandUIExtensionPageComponent.$1y) {
        SP.Ribbon.CommandUIExtensionPageComponent.$5s();
        return;
    }
    (SP.Ribbon.PageManager.get_instance()).addPageComponent(SP.Ribbon.CommandUIExtensionPageComponent.get_instance());
    if (!SP.ScriptUtility.isNullOrUndefined((SP.Ribbon.PageManager.get_instance()).get_ribbon())) {
        ((SP.Ribbon.PageManager.get_instance()).get_commandDispatcher()).executeCommand(Commands.CommandIds.ApplicationStateChanged, null);
    }
};
SP.Ribbon.CommandUIExtensionPageComponent.$5s = function SP_Ribbon_CommandUIExtensionPageComponent$$5s() {
    var $v_0 = null;
    var $v_1 = SP.Ribbon.CommandUIExtensionPageComponent.get_instance();

    if (!SP.Ribbon.SU.$0($v_1.$14_1)) {
        $v_0 = $v_1.$14_1;
    }
    else {
        return;
    }
    var $v_2 = null;

    if (!SP.Ribbon.SU.$0($v_1.$1N_1)) {
        $v_2 = $v_1.$1N_1;
    }
    var $v_3 = null;

    if (!SP.Ribbon.SU.$0($v_1.$1M_1)) {
        $v_3 = $v_1.$1M_1;
    }
    var $v_4;

    if ($v_0.indexOf('?') === -1) {
        $v_4 = $v_0 + '?ver=';
    }
    else {
        $v_4 = $v_0 + '&ver=';
    }
    $v_4 = $v_4 + $v_2 + '&lcid=' + $v_3 + '&qt=commandhandlers';
    var $v_5 = new Sys.Net.WebRequest();

    $v_5.set_httpVerb('GET');
    $v_5.set_url($v_4);
    $v_5.add_completed($v_1.$$d_onHandlersReturned);
    $v_5.invoke();
};
SP.Ribbon.CommandUIExtensionPageComponent.unregisterWithPageManager = function SP_Ribbon_CommandUIExtensionPageComponent$unregisterWithPageManager() {
    if (null !== SP.Ribbon.CommandUIExtensionPageComponent.$1L) {
        (SP.Ribbon.PageManager.get_instance()).removePageComponent(SP.Ribbon.CommandUIExtensionPageComponent.get_instance());
    }
};
SP.Ribbon.CommandUIExtensionPageComponent.prototype = {
    $14_1: null,
    get_dataUrl: function SP_Ribbon_CommandUIExtensionPageComponent$get_dataUrl() {
        return this.$14_1;
    },
    set_dataUrl: function SP_Ribbon_CommandUIExtensionPageComponent$set_dataUrl(value) {
        this.$14_1 = value;
        return value;
    },
    $1M_1: null,
    get_dataLCID: function SP_Ribbon_CommandUIExtensionPageComponent$get_dataLCID() {
        return this.$1M_1;
    },
    set_dataLCID: function SP_Ribbon_CommandUIExtensionPageComponent$set_dataLCID(value) {
        this.$1M_1 = value;
        return value;
    },
    $1N_1: null,
    get_dataVersion: function SP_Ribbon_CommandUIExtensionPageComponent$get_dataVersion() {
        return this.$1N_1;
    },
    set_dataVersion: function SP_Ribbon_CommandUIExtensionPageComponent$set_dataVersion(value) {
        this.$1N_1 = value;
        return value;
    },
    $c_1: null,
    $21_1: null,
    onHandlersReturned: function SP_Ribbon_CommandUIExtensionPageComponent$onHandlersReturned(executor) {
        if (executor.get_responseAvailable()) {
            this.$21_1 = executor.get_object();
        }
        SP.Ribbon.CommandUIExtensionPageComponent.$1y = true;
        SP.Ribbon.CommandUIExtensionPageComponent.registerWithPageManager();
    },
    $2a_1: function SP_Ribbon_CommandUIExtensionPageComponent$$2a_1($p0) {
        if (SP.Ribbon.SU.$0(this.$c_1)) {
            this.$c_1 = [];
        }
        var $v_0 = $p0.children;

        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return;
        }
        var $v_1 = $v_0.length;

        for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
            this.$c_1[this.$c_1.length] = $v_0[$v_2].attrs;
        }
    },
    init: function SP_Ribbon_CommandUIExtensionPageComponent$init() {
        if (!SP.Ribbon.SU.$0(this.$21_1)) {
            this.$2a_1(this.$21_1);
        }
        var $v_0 = window.g_commandUIHandlers;

        if (!SP.Ribbon.SU.$0($v_0)) {
            this.$2a_1($v_0);
        }
        this.$4j_1();
    },
    $b_1: null,
    get_$56_1: function SP_Ribbon_CommandUIExtensionPageComponent$get_$56_1() {
        if (SP.Ribbon.SU.$0(this.$b_1)) {
            this.$b_1 = [];
            for (var $v_0 = 0; $v_0 < this.$c_1.length; $v_0++) {
                var $v_1 = this.$c_1[$v_0];

                if (!SP.Ribbon.SU.$0($v_1)) {
                    var $v_2 = $v_1.Command;

                    if (!SP.Ribbon.SU.$0($v_2)) {
                        this.$b_1[$v_0] = $v_2;
                    }
                }
            }
            this.$b_1[this.$b_1.length] = 'CustomCommandsTab';
            this.$b_1[this.$b_1.length] = 'CustomCommandsGroup';
        }
        return this.$b_1;
    },
    getGlobalCommands: function SP_Ribbon_CommandUIExtensionPageComponent$getGlobalCommands() {
        return this.get_$56_1();
    },
    canHandleCommand: function SP_Ribbon_CommandUIExtensionPageComponent$canHandleCommand(commandId) {
        if (commandId === 'CustomCommandsTab' || commandId === 'CustomCommandsGroup') {
            return true;
        }
        var $v_0 = (this.get_$2B_1())[commandId];

        if (SP.Ribbon.SU.$0($v_0)) {
            return false;
        }
        if (Array.isInstanceOfType($v_0)) {
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                if (this.$2k_1($v_0[$v_1], commandId)) {
                    return true;
                }
            }
        }
        else {
            return this.$2k_1($v_0, commandId);
        }
        return false;
    },
    $2q_1: function SP_Ribbon_CommandUIExtensionPageComponent$$2q_1($p0) {
        if (SP.Ribbon.SU.$0($p0)) {
            return true;
        }
        var $v_0 = SP.Ribbon.WebPartComponent.get_pageComponentIdOfActiveWebPart();

        return !SP.Ribbon.SU.$0($v_0) && $v_0 === $p0;
    },
    $2k_1: function SP_Ribbon_CommandUIExtensionPageComponent$$2k_1($p0, $p1) {
        var $v_0 = $p0.WebPartId;
        var $v_1 = $p0.EnabledScript;
        var $v_2 = $p0.CommandAction;
        var $v_3 = !SP.Ribbon.SU.$0($v_2) && $v_2.startsWith('javascript:LaunchApp(');
        var $v_4 = $v_3 && !SP.PageContextInfo.get_isAppWeb();

        if (!this.$2q_1($v_0)) {
            return false;
        }
        var $v_5 = SP.Ribbon.Utility.get_$U();

        if (!SP.Ribbon.SU.$2($p0.HPerms) && !SP.Ribbon.SU.$2($p0.LPerms) && !SP.Ribbon.SU.$0($v_5)) {
            var $v_6 = parseInt($p0.HPerms, 10);
            var $v_7 = parseInt($p0.LPerms, 10);

            if (!$v_5.hasPermissions($v_6, $v_7)) {
                return false;
            }
        }
        if (!$v_4 && !SP.Ribbon.SU.$0($v_1) && ($v_1.toLowerCase()).startsWith('javascript:')) {
            window.g_CUIcommandId = $p1;
            var $v_8 = eval($p0.EnabledScript);

            window.g_CUIcommandId = null;
            return $v_8;
        }
        return true;
    },
    $1w_1: null,
    get_$2B_1: function SP_Ribbon_CommandUIExtensionPageComponent$get_$2B_1() {
        if (SP.Ribbon.SU.$0(this.$1w_1)) {
            this.$1w_1 = {};
        }
        return this.$1w_1;
    },
    $4j_1: function SP_Ribbon_CommandUIExtensionPageComponent$$4j_1() {
        var $v_0 = this.get_$2B_1();
        var $v_1 = this.$c_1.length;

        for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
            var $v_3 = this.$c_1[$v_2];

            if (SP.Ribbon.SU.$0($v_3.Command)) {
                continue;
            }
            var $v_4 = $v_0[$v_3.Command];

            if (SP.Ribbon.SU.$0($v_4)) {
                $v_0[$v_3.Command] = $v_3;
            }
            else if (Array.isInstanceOfType($v_4)) {
                Array.add($v_4, $v_3);
            }
            else {
                var $v_5 = [];

                Array.add($v_5, $v_4);
                Array.add($v_5, $v_3);
                $v_0[$v_3.Command] = $v_5;
            }
        }
    },
    handleCommand: function SP_Ribbon_CommandUIExtensionPageComponent$handleCommand(commandId, properties, sequence) {
        var $v_0 = (this.get_$2B_1())[commandId];

        if (SP.Ribbon.SU.$0($v_0)) {
            return false;
        }
        if (Array.isInstanceOfType($v_0)) {
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                if (this.$39_1($v_0[$v_1], commandId, properties)) {
                    return true;
                }
            }
        }
        else {
            return this.$39_1($v_0, commandId, properties);
        }
        return false;
    },
    $39_1: function SP_Ribbon_CommandUIExtensionPageComponent$$39_1($p0, $p1, $p2) {
        var $v_0 = $p0.CommandAction;
        var $v_1 = $p0.Command;
        var $v_2 = $p0.WebPartId;

        if (this.$2q_1($v_2)) {
            if (!SP.Ribbon.SU.$2($v_0)) {
                if (($v_0.toLowerCase()).startsWith('javascript:')) {
                    window.g_CUIcommandProperties = $p2;
                    window.g_CUIcommandId = $p1;
                    eval(this.$3e_1($v_0, false));
                    window.g_CUIcommandProperties = null;
                    window.g_CUIcommandId = null;
                }
                else {
                    STSNavigate(this.$3e_1($v_0, true));
                }
                return true;
            }
        }
        return false;
    },
    $3e_1: function SP_Ribbon_CommandUIExtensionPageComponent$$3e_1($p0, $p1) {
        var $v_0 = '';
        var $v_1 = null;
        var $v_2 = SP.ListOperation.Selection.getSelectedItems();

        $v_1 = SP.ListOperation.Selection.getSelectedList();
        if (!SP.Ribbon.SU.$0($v_1) && $p1) {
            $v_1 = $v_1.replace('{', '%7B');
            $v_1 = $v_1.replace('-', '%2D');
            $v_1 = $v_1.replace('}', '%7D');
        }
        if (!SP.Ribbon.SU.$0($v_2)) {
            var $v_3 = null;
            var $$dict_6 = $v_2;

            for (var $$key_7 in $$dict_6) {
                var $v_4 = {
                    key: $$key_7,
                    value: $$dict_6[$$key_7]
                };

                $v_3 = $v_4.value.id.toString();
                $v_0 += $v_3 + ',';
            }
            $v_0 = '' === $v_0 ? null : $v_0.substring(0, $v_0.length - 1);
        }
        $p0 = $p0.replace(new RegExp('{SelectedListId}', 'g'), $v_1);
        $p0 = $p0.replace(new RegExp('{SelectedItemId}', 'g'), $v_0);
        return $p0;
    }
};
SP.Ribbon.ToolbarRibbonAdapterData = function SP_Ribbon_ToolbarRibbonAdapterData() {
};
SP.Ribbon.ToolbarRibbonAdapterData.prototype = {
    ToolbarData: null
};
SP.Ribbon.ToolbarRibbonAdapter = function SP_Ribbon_ToolbarRibbonAdapter(id, data) {
    SP.Ribbon.ToolbarRibbonAdapter.initializeBase(this);
    this._data = data;
    this.$2X_1 = id;
};
SP.Ribbon.ToolbarRibbonAdapter.prototype = {
    _controlData: null,
    _componentData: null,
    $2X_1: null,
    _data: null,
    get_controlData: function SP_Ribbon_ToolbarRibbonAdapter$get_controlData() {
        return this._controlData;
    },
    ensureCommandInfoStructure: function SP_Ribbon_ToolbarRibbonAdapter$ensureCommandInfoStructure() {
        var $v_0 = eval(this._data.ToolbarData);

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];

            if (SP.Ribbon.SU.$0($v_2.Command)) {
                continue;
            }
            var $v_3 = this._controlData[$v_2.Command];

            if (SP.Ribbon.SU.$0($v_3)) {
                this._controlData[$v_2.Command] = $v_2;
                if (!SP.Ribbon.SU.$0($v_2.ContextualGroupCommand)) {
                    this._componentData[$v_2.ContextualGroupCommand] = true;
                }
                if (!SP.Ribbon.SU.$0($v_2.TabCommand)) {
                    this._componentData[$v_2.TabCommand] = true;
                }
                if (!SP.Ribbon.SU.$0($v_2.GroupCommand)) {
                    this._componentData[$v_2.GroupCommand] = true;
                }
            }
        }
    },
    canHandleCommand: function SP_Ribbon_ToolbarRibbonAdapter$canHandleCommand(commandId) {
        if (this._componentData[commandId]) {
            return true;
        }
        var $v_0 = this._controlData[commandId];

        if (SP.Ribbon.SU.$0($v_0)) {
            return false;
        }
        if (SP.Ribbon.SU.$2($v_0.HiddenScript) || SP.Ribbon.SU.$0($v_0.HiddenScript)) {
            return true;
        }
        return !eval($v_0.HiddenScript);
    },
    getGlobalCommands: function SP_Ribbon_ToolbarRibbonAdapter$getGlobalCommands() {
        return this.getToolbarCommands();
    },
    getFocusedCommands: function SP_Ribbon_ToolbarRibbonAdapter$getFocusedCommands() {
        return [];
    },
    getToolbarCommands: function SP_Ribbon_ToolbarRibbonAdapter$getToolbarCommands() {
        var $v_0 = [];
        var $$dict_1 = this._componentData;

        for (var $$key_2 in $$dict_1) {
            var $v_1 = {
                key: $$key_2,
                value: $$dict_1[$$key_2]
            };

            Array.add($v_0, $v_1.key);
        }
        var $$dict_4 = this._controlData;

        for (var $$key_5 in $$dict_4) {
            var $v_2 = {
                key: $$key_5,
                value: $$dict_4[$$key_5]
            };

            Array.add($v_0, $v_2.key);
        }
        return $v_0;
    },
    handleCommand: function SP_Ribbon_ToolbarRibbonAdapter$handleCommand(commandId, properties, sequence) {
        var $v_0 = this._controlData[commandId];

        if (SP.Ribbon.SU.$0($v_0)) {
            return false;
        }
        this.executeClickScript($v_0.ClickScript);
        return true;
    },
    executeClickScript: function SP_Ribbon_ToolbarRibbonAdapter$executeClickScript(script) {
        eval(script);
    },
    init: function SP_Ribbon_ToolbarRibbonAdapter$init() {
        this._controlData = {};
        this._componentData = {};
        this.ensureCommandInfoStructure();
    },
    isFocusable: function SP_Ribbon_ToolbarRibbonAdapter$isFocusable() {
        return false;
    },
    receiveFocus: function SP_Ribbon_ToolbarRibbonAdapter$receiveFocus() {
        throw Error.create('The ToolbarRibbonAdapter cannot receive focus.');
    },
    yieldFocus: function SP_Ribbon_ToolbarRibbonAdapter$yieldFocus() {
        throw Error.create('The ToolbarRibbonAdapter cannot receive or yield focus.');
    },
    getId: function SP_Ribbon_ToolbarRibbonAdapter$getId() {
        return this.$2X_1;
    }
};
SP.Ribbon.WebPartPageComponentData = function SP_Ribbon_WebPartPageComponentData() {
    SP.Ribbon.WebPartPageComponentData.initializeBase(this);
};
SP.Ribbon.WebPartPageComponent = function SP_Ribbon_WebPartPageComponent(id, data) {
    SP.Ribbon.WebPartPageComponent.initializeBase(this, [id, data]);
};
SP.Ribbon.WebPartPageComponent.prototype = {
    isFocusable: function SP_Ribbon_WebPartPageComponent$isFocusable() {
        return true;
    },
    $1x_2: false,
    receiveFocus: function SP_Ribbon_WebPartPageComponent$receiveFocus() {
        this.$1x_2 = true;
        return this.$1x_2;
    },
    yieldFocus: function SP_Ribbon_WebPartPageComponent$yieldFocus() {
        this.$1x_2 = false;
        return true;
    },
    get_webPartIsSelected: function SP_Ribbon_WebPartPageComponent$get_webPartIsSelected() {
        return this.getId() === SP.Ribbon.WebPartComponent.get_pageComponentIdOfActiveWebPart();
    },
    canHandleCommand: function SP_Ribbon_WebPartPageComponent$canHandleCommand(commandId) {
        if ((this.get_alwaysEnabledCommands())[commandId]) {
            return true;
        }
        return SP.Ribbon.ToolbarRibbonAdapter.prototype.canHandleCommand.call(this, commandId);
    },
    _alwaysEnabledCommands: null,
    get_alwaysEnabledCommands: function SP_Ribbon_WebPartPageComponent$get_alwaysEnabledCommands() {
        if (SP.Ribbon.SU.$0(this._alwaysEnabledCommands)) {
            this._alwaysEnabledCommands = {};
            this.addAlwaysEnabledCommands();
        }
        return this._alwaysEnabledCommands;
    },
    addAlwaysEnabledCommands: function SP_Ribbon_WebPartPageComponent$addAlwaysEnabledCommands() {
    },
    simulateClick: function SP_Ribbon_WebPartPageComponent$simulateClick(elm) {
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            elm.click();
        }
        else {
            SP.Ribbon.NativeUtility.ffClick(elm);
        }
    },
    executeOnClick: function SP_Ribbon_WebPartPageComponent$executeOnClick(elm) {
        var $v_0 = (elm.attributes.getNamedItem('onclick')).value;

        if (SP.Ribbon.SU.$0($v_0)) {
            elm.click();
        }
        else {
            this.executeClickScript($v_0);
        }
    },
    getGlobalCommands: function SP_Ribbon_WebPartPageComponent$getGlobalCommands() {
        return this.getCommands();
    },
    getFocusedCommands: function SP_Ribbon_WebPartPageComponent$getFocusedCommands() {
        return SP.Ribbon.ToolbarRibbonAdapter.prototype.getFocusedCommands.call(this);
    },
    getCommands: function SP_Ribbon_WebPartPageComponent$getCommands() {
        var $v_0 = SP.Ribbon.ToolbarRibbonAdapter.prototype.getToolbarCommands.call(this);
        var $$dict_1 = this.get_alwaysEnabledCommands();

        for (var $$key_2 in $$dict_1) {
            var $v_1 = {
                key: $$key_2,
                value: $$dict_1[$$key_2]
            };

            Array.add($v_0, $v_1.key);
        }
        return $v_0;
    }
};
SP.Ribbon.ListViewWebPartPageComponentData = function SP_Ribbon_ListViewWebPartPageComponentData() {
    SP.Ribbon.ListViewWebPartPageComponentData.initializeBase(this);
};
SP.Ribbon.ListViewWebPartPageComponentData.prototype = {
    ViewId: null,
    ViewName: null,
    ViewReadOnly: null,
    ListId: null,
    ListEnableAttachments: null,
    BaseViewId: null,
    ListBaseType: null,
    ListTemplateType: null,
    ListPermissions: null,
    ListFolderPermissions: null,
    ListHasExternalDataSource: null,
    ServerRelativeWebUrl: null,
    IsAppWeb: false
};
SP.Ribbon.PagingInformation = function SP_Ribbon_PagingInformation() {
};
SP.Ribbon.PagingInformation.prototype = {
    NextNode: null,
    PreviousNode: null,
    CurrentRange: null
};
SP.Ribbon.ECBMenuItem = function SP_Ribbon_ECBMenuItem() {
    SP.Ribbon.ECBMenuItem.initializeBase(this);
};
SP.Ribbon.ECBMenuItem.prototype = {
    CUICommand: null,
    CUIEnabledCommands: null,
    onMenuClick: null,
    IsSubMenu: false
};
SP.Ribbon.CLVP = function SP_Ribbon_CLVP() {
};
SP.Ribbon.CLVP.prototype = {
    CUIItemInfo: null,
    ctx: null
};
SP.Ribbon.ListViewWebPartData = function SP_Ribbon_ListViewWebPartData() {
    SP.Ribbon.ListViewWebPartData.initializeBase(this);
};
SP.Ribbon.ListViewWebPartData.prototype = {
    WebPartId: null,
    ViewDropDownOptions: null,
    NewMenuData: null
};
SP.Ribbon.ListViewWebPartPageComponent = function SP_Ribbon_ListViewWebPartPageComponent(id, data) {
    this.$$d_$5j_3 = Function.createDelegate(this, this.$5j_3);
    this.$$d_$5k_3 = Function.createDelegate(this, this.$5k_3);
    this.$1c_3 = '/_layouts/15/$Resources:core,Language;/images/formatmap16x16.png?rev=23'.replace('$Resources:core,Language;', SP.Res.lcid);
    this.$1d_3 = '/_layouts/15/$Resources:core,Language;/images/formatmap32x32.png?rev=23'.replace('$Resources:core,Language;', SP.Res.lcid);
    SP.Ribbon.ListViewWebPartPageComponent.initializeBase(this, [id, data]);
    this.$Y_3 = data.ViewId;
    this.$1m_3 = new SP.Guid(this.$Y_3);
    this.$2N_3 = data.ViewName;
    this.$3W_3 = data.ViewReadOnly === 'true';
    this.$D_3 = data.ListId;
    this.$3R_3 = data.ListEnableAttachments;
    this.$5W_3 = data.BaseViewId;
    this.$5X_3 = data.ListBaseType;
    this.$1k_3 = data.ListTemplateType;
    var $v_0 = eval('(' + data.ListPermissions + ')');

    this.$J_3 = new SP.BasePermissions();
    if (!this.$J_3.customFromJson($v_0)) {
        this.$J_3.fromJson($v_0);
    }
    $v_0 = eval('(' + data.ListFolderPermissions + ')');
    this.$1i_3 = new SP.BasePermissions();
    if (!this.$1i_3.customFromJson($v_0)) {
        this.$1i_3.fromJson($v_0);
    }
    this.$1j_3 = data.ListHasExternalDataSource;
    this.$y_3 = data.ServerRelativeWebUrl;
    this.$2J_3 = data.IsAppWeb;
};
SP.Ribbon.ListViewWebPartPageComponent.navigateToView = function SP_Ribbon_ListViewWebPartPageComponent$navigateToView(evt, url) {
    if ((SP.Ribbon.PageManager.get_instance()).get_ribbon() && !SP.ScriptUtility.isNullOrEmptyString(((SP.Ribbon.PageManager.get_instance()).get_ribbon()).get_selectedTabId())) {
        url = SP.Utilities.UrlBuilder.replaceOrAddQueryString(url, 'InitialTabId', ((SP.Ribbon.PageManager.get_instance()).get_ribbon()).get_selectedTabId());
        url = SP.Utilities.UrlBuilder.replaceOrAddQueryString(url, 'VisibilityContext', 'WSSListAndLibrary');
    }
    window.STSNavigateToView(evt, url);
};
SP.Ribbon.ListViewWebPartPageComponent.prototype = {
    $1m_3: null,
    $Y_3: null,
    $2N_3: null,
    $3W_3: false,
    $D_3: null,
    $3R_3: null,
    $5W_3: null,
    $5X_3: null,
    $1k_3: null,
    $y_3: null,
    $J_3: null,
    $1i_3: null,
    $1j_3: null,
    $2J_3: false,
    $1R_3: null,
    $1z_3: null,
    $1O_3: false,
    executeClickScript: function SP_Ribbon_ListViewWebPartPageComponent$executeClickScript(script) {
        SP.Ribbon.NativeUtility.executeClickScript(script, '{' + this.$Y_3.toUpperCase() + '}');
    },
    $3E_3: function SP_Ribbon_ListViewWebPartPageComponent$$3E_3() {
        var $v_0 = window.location.search;
        var $v_1 = $v_0.match(SP.Ribbon.ListViewWebPartPageComponent.$3b);

        return !!$v_1 && $v_1.length > 0;
    },
    canHandleCommand: function SP_Ribbon_ListViewWebPartPageComponent$canHandleCommand(commandId) {
        if (!SP.Ribbon.SU.$0((this.get_alwaysEnabledCommands())[commandId])) {
            return true;
        }
        if (commandId === 'DisplayView' || commandId === 'QueryDisplayView') {
            return !SP.Ribbon.SU.$0(this.get_viewSelectorOptions());
        }
        if (commandId === 'DisplayDatasheetView') {
            var $v_2 = this.get_ctx();

            if ($v_2 && $v_2['AllowGridMode']) {
                return !$v_2['inGridMode'];
            }
            else {
                return false;
            }
        }
        else if (commandId === 'DisplayStandardView') {
            var $v_3 = this.get_ctx();

            if ($v_3) {
                return !!$v_3['inGridMode'];
            }
            else {
                return false;
            }
        }
        else if (commandId === 'ConnectToClient') {
            if (this.$1k_3 === (171).toString()) {
                var $v_4 = (this.get_ctx()).ListSchema;

                if ($v_4) {
                    var $v_5 = $v_4.ListRight_AddListItems;

                    return !!$v_5;
                }
            }
        }
        else if (commandId === 'ExportToProject') {
            var $v_6 = this.$1k_3 === (171).toString();

            if ($v_6) {
                var $v_7 = this.$J_3.has(1) && this.$J_3.has(13) && (SP.Ribbon.Utility.get_$U()).has(38);

                return $v_7;
            }
        }
        var $v_0 = SP.Ribbon.WebPartPageComponent.prototype.canHandleCommand.call(this, commandId);

        if ($v_0) {
            return true;
        }
        var $v_1 = this.getCountOfSelectedItems();

        if (commandId === 'CustomViewsGroup' || commandId === 'ViewsTab') {
            return true;
        }
        if (commandId === 'ModifyView' || commandId === 'ModifyThisView' || commandId === 'PopulateModifyViewMenu') {
            if (SP.Ribbon.SU.$0(this.get_viewSelectorOptions()) || this.$3E_3()) {
                return false;
            }
            else if (this.$3W_3) {
                return false;
            }
            return (this.get_viewSelectorOptions()).showEditView;
        }
        if (commandId === 'ModifyViewInDesigner') {
            if (SP.Ribbon.SU.$0(this.get_viewSelectorOptions())) {
                return false;
            }
            return (this.get_viewSelectorOptions()).showEditView && this.$2C_3();
        }
        if (commandId === 'LibraryPermissions') {
            return this.$J_3.has(63);
        }
        if (commandId === 'EditList') {
            return this.$2C_3();
        }
        if (commandId === 'ManageCopies') {
            return this.$5T_3($v_1);
        }
        if (commandId === 'AttachFile') {
            return this.$3R_3 === 'True' && this.canHandleECBCommand('EditProperties') && this.$5V_3();
        }
        if (commandId === 'CreateView') {
            if (SP.Ribbon.SU.$0(this.get_viewSelectorOptions())) {
                return false;
            }
            return (this.get_viewSelectorOptions()).showCreateView;
        }
        if (commandId === 'CurrentPage') {
            return true;
        }
        if (commandId === 'PreviousPage') {
            var $v_8 = this.$19_3();

            return !SP.Ribbon.SU.$0($v_8.PreviousNode);
        }
        if (commandId === 'NextPage') {
            var $v_9 = this.$19_3();

            return !SP.Ribbon.SU.$0($v_9.NextNode);
        }
        if (commandId === 'EditDefaultForms') {
            return this.$J_3.has(19) && !this.$3E_3();
        }
        if (commandId === 'EditDefaultForm') {
            return true;
        }
        if (commandId === 'PopulateDefaultFormsForList') {
            return true;
        }
        if (commandId === 'PopulateViewDropDown') {
            return this.get_hasViewSelectorInfo();
        }
        if (commandId === 'EmailLibraryLink') {
            return !!this.get_ctx();
        }
        if (commandId === 'NavigateUp') {
            return CanNavigateUp(this.get_ctx());
        }
        if (commandId === 'QueryDisplayDatasheetView') {
            return true;
        }
        if (commandId === 'QueryDisplayStandardView') {
            return true;
        }
        if (commandId === 'NavZoomIn' || commandId === 'NavZoomOut' || commandId === 'NavScrollTask') {
            return true;
        }
        if (commandId === 'CreateReusableWorkflowInDesigner' || commandId === 'CreateWorkflowInDesigner' || commandId === 'AddButton') {
            return this.$2C_3() && this.$1j_3 !== 'True';
        }
        if (commandId === 'AssociateWorkflows' || commandId === 'EditWorkflowSettings' || commandId === 'PopulateManageWorkFlowsMenu' || commandId === 'ManageWorkflows') {
            return this.$5M_3() && this.$1j_3 !== 'True';
        }
        if (commandId === 'ViewProperties' && this.get_$4_3() && ((this.get_$4_3()).get_SelectedItems()).length === 1) {
            return true;
        }
        if (commandId === 'EditProperties' && this.get_$4_3() && !(this.get_$4_3()).get_IsReadOnly() && ((this.get_$4_3()).get_SelectedItems()).length === 1) {
            return true;
        }
        if (commandId === 'Indent' || commandId === 'Outdent' || commandId === 'MoveUp' || commandId === 'MoveDown') {
            if (this.get_$4_3() && !(this.get_$4_3()).get_IsReadOnly()) {
                return ((this.get_$4_3()).get_SelectedItems()).length > 0;
            }
            else if ($v_1 > 0) {
                var $v_A = this.get_ctx();

                return !!$v_A && $v_A['AllowGridMode'];
            }
        }
        if (commandId === 'Delete' && this.get_$4_3() && !(this.get_$4_3()).get_IsReadOnly() && ((this.get_$4_3()).get_SelectedItemsIncludingProvisionalItems()).length > 0) {
            return true;
        }
        if (commandId === 'ShowSubItems' && this.get_$2v_3() === 2) {
            return true;
        }
        if (commandId === 'HideSubItems' && this.get_$2v_3() === 1) {
            return true;
        }
        if (commandId === 'AddToTimeline') {
            if (this.$J_3.has(12) && this.$J_3.has(3)) {
                if (this.get_$4_3()) {
                    var $v_B = (this.get_$4_3()).get_SelectedItems();

                    return !!$v_B && $v_B.length > 0;
                }
                else {
                    var $v_C = this.get_ctx();
                    var $v_D = $v_C.ListSchema;

                    if (!$v_D) {
                        return false;
                    }
                    var $v_E = $v_D.PropertyBag;

                    return !!$v_E && this.getCountOfSelectedItems() > 0;
                }
            }
        }
        if (commandId === 'MarkAsFeaturedCommand' || commandId === 'UnmarkAsFeaturedCommand') {
            if ($v_1 > 0) {
                if (this.$J_3.has(9)) {
                    var $v_F = this.$k_3();
                    var $$dict_H = $v_F;

                    for (var $$key_I in $$dict_H) {
                        var $v_G = {
                            key: $$key_I,
                            value: $$dict_H[$$key_I]
                        };
                        var $v_H = $v_G.key.split(',');

                        if ($v_H[2] !== '1') {
                            return false;
                        }
                    }
                    return true;
                }
            }
        }
        return this.canHandleECBCommand(commandId);
    },
    $5T_3: function SP_Ribbon_ListViewWebPartPageComponent$$5T_3($p0) {
        if ($p0 !== 1) {
            return false;
        }
        var $v_0 = this.$k_3();
        var $$dict_2 = $v_0;

        for (var $$key_3 in $$dict_2) {
            var $v_2 = {
                key: $$key_3,
                value: $$dict_2[$$key_3]
            };
            var $v_3 = $v_2.key.split(',');

            if ($v_3[2] === '1') {
                return false;
            }
        }
        if (this.$1j_3 === 'True') {
            return false;
        }
        if (!this.$1i_3.has(3)) {
            return false;
        }
        var $v_1 = eval('parseInt(' + this.$1k_3 + ');');

        if ($v_1 === 101 || $v_1 === 109 || $v_1 === 130 || $v_1 === 115) {
            return true;
        }
        return false;
    },
    $5V_3: function SP_Ribbon_ListViewWebPartPageComponent$$5V_3() {
        var $v_0 = this.$k_3();
        var $v_1 = 0;
        var $$dict_2 = $v_0;

        for (var $$key_3 in $$dict_2) {
            var $v_2 = {
                key: $$key_3,
                value: $$dict_2[$$key_3]
            };
            var $v_3 = $v_2.key.split(',');

            if ($v_3[2] === '1') {
                return false;
            }
            var $v_4 = $v_3[1];

            if ($v_4.indexOf('.0.') !== -1 || $v_4.indexOf('.1.') !== -1 || $v_4.indexOf('.2.') !== -1) {
                return false;
            }
            $v_1++;
        }
        return 1 === $v_1;
    },
    get_$2v_3: function SP_Ribbon_ListViewWebPartPageComponent$get_$2v_3() {
        if (this.get_$4_3()) {
            var $v_0 = (this.get_$4_3()).get_SelectedItems();

            if ($v_0.length === 1) {
                return (this.get_$4_3()).GetNodeExpandCollapseState($v_0[0]);
            }
            return 0;
        }
        else {
            if (this.get_ctx() && CountSelectedItems(this.get_ctx()) === 1) {
                var $v_1 = this.get_ctx();
                var $v_2 = GetClientHierarchyManagerForWebpart($v_1['wpq']);
                var $v_3 = GetSelectedItemsDict(this.get_ctx());
                var $$dict_4 = $v_3;

                for (var $$key_5 in $$dict_4) {
                    var $v_4 = {
                        key: $$key_5,
                        value: $$dict_4[$$key_5]
                    };
                    var $v_5 = $v_4.value;

                    if ($v_5) {
                        var $v_6 = $v_5['id'];

                        if ($v_6) {
                            return $v_2.GetToggleStateById(parseInt($v_6));
                        }
                    }
                }
            }
        }
        return 0;
    },
    handleCommand: function SP_Ribbon_ListViewWebPartPageComponent$handleCommand(commandId, properties, sequence) {
        var $v_0 = this.get_ctx();
        var $v_1 = this.getCountOfSelectedItems();
        var $v_2 = this._controlData[commandId];

        if (commandId === 'QueryDisplayStandardView') {
            properties['On'] = !this.canHandleCommand('DisplayStandardView');
            return true;
        }
        else if (commandId === 'QueryDisplayDatasheetView') {
            properties['On'] = this.canHandleCommand('DisplayStandardView');
            return true;
        }
        else if (commandId === 'DisplayStandardView') {
            window.self.ExitGrid((this.$1m_3.toString('B')).toUpperCase());
            return true;
        }
        else if (commandId === 'DisplayDatasheetView') {
            window.self.InitGridFromView((this.$1m_3.toString('B')).toUpperCase());
            return true;
        }
        else if (!SP.Ribbon.SU.$0($v_2)) {
            this.executeClickScript($v_2.ClickScript);
            return true;
        }
        else if (commandId === 'PopulateModifyViewMenu') {
            properties.PopulationXML = this.$50_3();
            return true;
        }
        else if (commandId === 'ModifyView' || commandId === 'ModifyThisView') {
            var $v_3 = new SP.Utilities.UrlBuilder(this.$1Y_3('ViewEdit.aspx'));

            $v_3.addKeyValueQueryString('List', this.$D_3);
            $v_3.addKeyValueQueryString('View', (this.$1m_3.toString('B')).toUpperCase());
            SP.Utilities.HttpUtility.appendSourceAndNavigateTo($v_3.get_url());
        }
        else if (commandId === 'ModifyViewInDesigner') {
            var $v_4 = window.self.ajaxNavigate;

            EditInSPD($v_4.get_href(), true);
        }
        else if (commandId === 'CreateView') {
            var $v_5 = new SP.Utilities.UrlBuilder(this.$1Y_3('ViewType.aspx'));

            $v_5.addKeyValueQueryString('List', this.$D_3);
            SP.Utilities.HttpUtility.appendSourceAndNavigateTo($v_5.get_url());
        }
        else if (commandId === 'DisplayView') {
            if (!this.get_hasViewSelectorInfo()) {
                return false;
            }
            this.executeClickScript(properties['CommandValueId']);
        }
        else if (commandId === 'QueryDisplayView') {
            properties['Value'] = !SP.ScriptUtility.isNullOrEmptyString(this.$2N_3) ? this.$2N_3 : SP.Res.viewGroupDefault;
            return this.get_hasViewSelectorInfo();
        }
        else if (commandId === 'QueryCurrentPage') {
            var $v_6 = this.$19_3();

            if (!SP.Ribbon.SU.$0($v_6.CurrentRange)) {
                properties['Value'] = $v_6.CurrentRange;
            }
            else {
                properties['Value'] = '';
            }
            return true;
        }
        else if (commandId === 'PreviousPage') {
            var $v_7 = this.$19_3();

            if (!SP.Ribbon.SU.$0($v_7.PreviousNode)) {
                this.simulateClick($v_7.PreviousNode);
            }
            return true;
        }
        else if (commandId === 'NextPage') {
            var $v_8 = this.$19_3();

            if (!SP.Ribbon.SU.$0($v_8.NextNode)) {
                this.simulateClick($v_8.NextNode);
            }
            return true;
        }
        if (commandId === 'EditDefaultForms') {
            return true;
        }
        if (commandId === 'EditDefaultForm') {
            var $v_9 = properties['CommandValueId'];

            this.navigateToFormPageDesignMode($v_9);
            return true;
        }
        else if (commandId === 'PopulateDefaultFormsForList') {
            if (SP.Ribbon.SU.$0(this.$15_3)) {
                this.getDefaultFormsInfo();
                var $v_A = properties;

                $v_A.PollAgainInterval = 100;
                ++this.$20_3;
                if (SP.Ribbon.SU.$0(this.$1Q_3) && this.$20_3 > 5) {
                    this.$1Q_3 = SP.UI.Notify.addNotification(SP.Utilities.HttpUtility.htmlEncode(SP.Res.genericLoading), true);
                }
                return true;
            }
            else {
                properties.PopulationXML = this.$15_3;
                if (!SP.Ribbon.SU.$0(this.$1Q_3)) {
                    SP.UI.Notify.removeNotification(this.$1Q_3);
                }
                this.$20_3 = 0;
                return true;
            }
        }
        else if (commandId === 'PopulateViewDropDown') {
            if (!this.get_hasViewSelectorInfo()) {
                return false;
            }
            if (SP.Ribbon.SU.$0(this.$1S_3)) {
                this.getViewGroupInfo();
                var $v_B = properties;

                $v_B.PollAgainInterval = 100;
                return true;
            }
            else {
                properties.PopulationJSON = this.$1S_3;
                return true;
            }
        }
        else if (commandId === 'LibraryPermissions') {
            var $$t_Y = this;

            EnsureScriptFunc('sharing.js', 'DisplaySharingDialog', function() {
                window.self.DisplaySharedWithDialog($$t_Y.$y_3, $$t_Y.$D_3, null);
            });
        }
        else if (commandId === 'EditList') {
            this.$1e_3('?Cmd=EditList', true);
        }
        else if (commandId === 'PopulateManageWorkFlowsMenu') {
            properties.PopulationXML = this.$4z_3();
            return true;
        }
        else if (commandId === 'EditWorkflowSettings' || commandId === 'ManageWorkflows') {
            var $v_C = new SP.Guid(this.$D_3);
            var $v_D = this.$1Y_3('wrksetng.aspx') + '?List=' + SP.Utilities.HttpUtility.urlKeyValueEncode(($v_C.toString('B')).toUpperCase());

            SP.Utilities.HttpUtility.navigateTo($v_D);
        }
        else if (commandId === 'AssociateWorkflows') {
            var $v_E = new SP.Guid(this.$D_3);
            var $v_F = this.$1Y_3('Addwrkfl.aspx') + '?List=' + SP.Utilities.HttpUtility.urlKeyValueEncode(($v_E.toString('B')).toUpperCase());

            SP.Utilities.HttpUtility.navigateTo($v_F);
        }
        else if (commandId === 'CreateWorkflowInDesigner') {
            this.$1e_3('?Cmd=NewWorkFlow', true);
        }
        else if (commandId === 'CreateReusableWorkflowInDesigner') {
            this.$1e_3('?Cmd=NewReusableWorkFlow', false);
        }
        else if (commandId === 'AddButton') {
            this.$1e_3('?Cmd=AddButton', true);
        }
        else if (commandId === 'NavigateUp') {
            NavigateUp(this.get_ctx());
            ((SP.Ribbon.PageManager.get_instance()).get_commandDispatcher()).executeCommand('appstatechanged', properties);
        }
        else if (commandId === 'ManageCopies') {
            if ($v_1 === 1) {
                var $v_G = this.get_ctx();

                ManageCopies($v_G);
            }
        }
        else if (commandId === 'AttachFile') {
            if ($v_1 === 1) {
                var $v_H = this.get_ctx();

                AttachFile($v_H);
            }
        }
        else if (commandId === 'EmailLibraryLink') {
            var $v_I = $v_0.HttpRoot;
            var $v_J = SP.Utilities.HttpUtility.urlPathEncode(this.$4v_3($v_I));
            var $v_K = (this.get_$r_3()).rootFolder;

            if (SP.Ribbon.SU.$0($v_K)) {
                $v_K = $v_0.listUrlDir;
            }
            else {
                $v_K = SP.Utilities.HttpUtility.urlPathEncode($v_K);
            }
            var $v_L = new Sys.StringBuilder($v_J);

            $v_L.append($v_K);
            SP.Ribbon.EMailLink.openMailerWithUrl($v_L.toString());
            return true;
        }
        else if (commandId === 'ExportToProject') {
            SP.Ribbon.HierarchyTaskList.OpenSchedule((SP.ClientContext.get_current()).get_web(), new SP.Guid(this.$D_3));
        }
        else if (commandId === 'MarkAsFeaturedCommand') {
            var $v_M = this.selectedItemIds();
            var $v_N = SP.ClientContext.get_current();

            SP.Utilities.Utility.markDiscussionAsFeatured($v_N, this.$D_3, $v_M);
            $v_N.executeQueryAsync(this.$$d_$5k_3, this.$$d_$5j_3);
        }
        else if (commandId === 'UnmarkAsFeaturedCommand') {
            var $v_O = this.selectedItemIds();
            var $v_P = SP.ClientContext.get_current();

            SP.Utilities.Utility.unmarkDiscussionAsFeatured($v_P, this.$D_3, $v_O);
            $v_P.executeQueryAsync(this.$$d_$5k_3, this.$$d_$5j_3);
        }
        else if (commandId === 'NavZoomIn') {
            (this.get_$4_3()).ZoomInGantt();
        }
        else if (commandId === 'NavZoomOut') {
            (this.get_$4_3()).ZoomOutGantt();
        }
        else if (commandId === 'NavScrollTask') {
            (this.get_$4_3()).ScrollGanttToFocusedItem();
        }
        else if (this.get_$4_3() && commandId === 'EditProperties') {
            (this.get_$4_3()).LaunchEditItemFormForItem(((this.get_$4_3()).get_SelectedItems())[0]);
        }
        else if (this.get_$4_3() && commandId === 'ViewProperties') {
            (this.get_$4_3()).LaunchViewItemFormForItem(((this.get_$4_3()).get_SelectedItems())[0]);
        }
        else if (this.get_$4_3() && commandId === 'Delete') {
            (this.get_$4_3()).DeleteItems((this.get_$4_3()).get_SelectedItemsIncludingProvisionalItems(), null);
        }
        else if (commandId === 'AddToTimeline') {
            if (this.get_$4_3()) {
                (this.get_$4_3()).AddItemsToTimeline((this.get_$4_3()).get_SelectedItems());
            }
            else {
                var $v_Q = GetSelectedItemsNative();

                if (!SP.Ribbon.SU.$0($v_Q)) {
                    var $v_R = this.get_ctx();
                    var $v_S = $v_R.ListSchema.PropertyBag;
                    var $$t_Z = this;

                    EnsureScriptFunc('sp.ui.timeline.js', 'SP.UI.Timeline', function() {
                        GetTimelineView($v_S, function($p2_0) {
                            AddItemsToTimeline($v_Q, $$t_Z.$D_3, $p2_0);
                        });
                    });
                    return true;
                }
            }
        }
        else if (commandId === 'Outdent') {
            if (this.get_$4_3()) {
                (this.get_$4_3()).OutdentItems((this.get_$4_3()).get_SelectedItems(), null);
            }
            else {
                OutdentItems(this.get_ctx());
            }
        }
        else if (commandId === 'Indent') {
            if (this.get_$4_3()) {
                (this.get_$4_3()).IndentItems((this.get_$4_3()).get_SelectedItems(), null);
            }
            else {
                IndentItems(this.get_ctx());
            }
        }
        else if (commandId === 'MoveUp') {
            if (this.get_$4_3()) {
                (this.get_$4_3()).MoveItemsUp((this.get_$4_3()).get_ContiguousSelectedItemsWithoutEntryItems(), null);
            }
            else {
                MoveItemsUp(this.get_ctx());
            }
        }
        else if (commandId === 'MoveDown') {
            if (this.get_$4_3()) {
                (this.get_$4_3()).MoveItemsDown((this.get_$4_3()).get_ContiguousSelectedItemsWithoutEntryItems(), null);
            }
            else {
                MoveItemsDown(this.get_ctx());
            }
        }
        else if (commandId === 'ShowSubItems' || commandId === 'HideSubItems') {
            return this.$68_3();
        }
        else {
            this.$1O_3 = true;
            if ($v_1 === 1 && !this.$2e_3(commandId) && this.$3p_3()) {
                return this.$2t_3(commandId);
            }
            else {
                var $v_T = this.get_ctx();

                if (commandId === 'CheckOut') {
                    CheckoutSelectedItems($v_T);
                }
                else if (commandId === 'CheckIn') {
                    CheckinSelectedItems($v_T);
                }
                else if (commandId === 'Delete') {
                    DeleteSelectedItems($v_T);
                }
                else if (commandId === 'DiscardCheckOut') {
                    DiscardCheckoutSelectedItems($v_T);
                }
                else if (commandId === 'Moderate') {
                    ModerateSelectedItems($v_T);
                }
                else {
                    return false;
                }
            }
        }
        return false;
    },
    $5k_3: function SP_Ribbon_ListViewWebPartPageComponent$$5k_3($p0, $p1) {
        RefreshPage(1);
    },
    $5j_3: function SP_Ribbon_ListViewWebPartPageComponent$$5j_3($p0, $p1) {
    },
    selectedItemIds: function SP_Ribbon_ListViewWebPartPageComponent$selectedItemIds() {
        var $v_0 = this.$k_3();

        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return '';
        }
        var $v_1 = '';
        var $v_2 = null;
        var $$dict_3 = $v_0;

        for (var $$key_4 in $$dict_3) {
            var $v_3 = {
                key: $$key_4,
                value: $$dict_3[$$key_4]
            };

            $v_1 = $v_1 + $v_3.value.id + ',';
        }
        if ($v_1.length) {
            $v_2 = $v_1.substring(0, $v_1.length - 1);
        }
        return $v_2;
    },
    $2C_3: function SP_Ribbon_ListViewWebPartPageComponent$$2C_3() {
        return this.$J_3.has(12) && this.$J_3.has(19);
    },
    $5M_3: function SP_Ribbon_ListViewWebPartPageComponent$$5M_3() {
        return this.$J_3.has(12);
    },
    $1e_3: function SP_Ribbon_ListViewWebPartPageComponent$$1e_3($p0, $p1) {
        var $v_0 = new SP.Guid(this.$D_3);
        var $v_1 = new Sys.StringBuilder();

        $v_1.append(SP.PageContextInfo.get_webServerRelativeUrl());
        if ($v_1.toString() !== '/') {
            $v_1.append('/');
        }
        $v_1.append($p0);
        if ($p1) {
            $v_1.append('&ListId=');
            $v_1.append(($v_0.toString('B')).toUpperCase());
        }
        EditInSPD($v_1.toString(), true);
    },
    $1Y_3: function SP_Ribbon_ListViewWebPartPageComponent$$1Y_3($p0) {
        return SP.Utilities.UrlBuilder.urlCombine(this.$y_3, SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl() + $p0);
    },
    getGlobalCommands: function SP_Ribbon_ListViewWebPartPageComponent$getGlobalCommands() {
        return [];
    },
    $4v_3: function SP_Ribbon_ListViewWebPartPageComponent$$4v_3($p0) {
        if (SP.Ribbon.SU.$0($p0)) {
            return '';
        }
        var $v_0 = $p0.length;
        var $v_1 = $p0.indexOf('://');

        if ($v_1 !== -1) {
            var $v_2 = $v_1 + 3;
            var $v_3 = $v_0 - 1;
            var $v_4 = $v_2 < $v_3 ? $v_2 : $v_3;
            var $v_5 = $p0.substr($v_4, $v_3);
            var $v_6 = $v_5.indexOf('/');

            if ($v_6 !== -1) {
                return $p0.substr(0, $v_4 + $v_6);
            }
        }
        return $p0;
    },
    $68_3: function SP_Ribbon_ListViewWebPartPageComponent$$68_3() {
        if (this.get_$4_3()) {
            var $v_0 = (this.get_$4_3()).get_SelectedItems();

            if ($v_0.length === 1) {
                (this.get_$4_3()).ToggleExpandCollapse(parseInt($v_0[0]));
                ((SP.Ribbon.PageManager.get_instance()).get_ribbon()).refresh();
                return true;
            }
        }
        else {
            var $v_1 = this.get_ctx();
            var $v_2 = GetClientHierarchyManagerForWebpart($v_1['wpq']);
            var $v_3 = GetSelectedItemsDict(this.get_ctx());
            var $$dict_4 = $v_3;

            for (var $$key_5 in $$dict_4) {
                var $v_4 = {
                    key: $$key_5,
                    value: $$dict_4[$$key_5]
                };
                var $v_5 = $v_4.value;

                if ($v_5) {
                    var $v_6 = $v_5['id'];

                    if ($v_6) {
                        $v_2.ToggleExpandById(parseInt($v_6));
                        ((SP.Ribbon.PageManager.get_instance()).get_ribbon()).refresh();
                        return true;
                    }
                }
            }
        }
        return false;
    },
    getFocusedCommands: function SP_Ribbon_ListViewWebPartPageComponent$getFocusedCommands() {
        var $v_0 = SP.Ribbon.WebPartPageComponent.prototype.getCommands.call(this);

        Array.add($v_0, 'ModifyThisView');
        Array.add($v_0, 'ModifyView');
        Array.add($v_0, 'PopulateModifyViewMenu');
        Array.add($v_0, 'ModifyViewInDesigner');
        Array.add($v_0, 'PopulateViewDropDown');
        Array.add($v_0, 'NextPage');
        Array.add($v_0, 'CurrentPage');
        Array.add($v_0, 'QueryCurrentPage');
        Array.add($v_0, 'PreviousPage');
        Array.add($v_0, 'LibraryPermissions');
        Array.add($v_0, 'EditList');
        Array.add($v_0, 'ManageCopies');
        Array.add($v_0, 'AttachFile');
        Array.add($v_0, 'DisplayExplorerView');
        Array.add($v_0, 'EditDefaultForms');
        Array.add($v_0, 'EditDefaultForm');
        Array.add($v_0, 'PopulateDefaultFormsForList');
        Array.add($v_0, 'EmailLibraryLink');
        Array.add($v_0, 'Moderate');
        Array.add($v_0, 'ChangeNewButton');
        Array.add($v_0, 'QueryDisplayStandardView');
        Array.add($v_0, 'QueryDisplayDatasheetView');
        Array.add($v_0, 'ViewWorkflows');
        Array.add($v_0, 'PopulateManageWorkFlowsMenu');
        Array.add($v_0, 'ManageWorkflows');
        Array.add($v_0, 'AssociateWorkflows');
        Array.add($v_0, 'EditWorkflowSettings');
        Array.add($v_0, 'CreateReusableWorkflowInDesigner');
        Array.add($v_0, 'CreateWorkflowInDesigner');
        Array.add($v_0, 'AddButton');
        Array.add($v_0, 'NavigateUp');
        if (!Array.contains($v_0, 'DisplayStandardView')) {
            Array.add($v_0, 'DisplayStandardView');
        }
        if (!Array.contains($v_0, 'DisplayDatasheetView')) {
            Array.add($v_0, 'DisplayDatasheetView');
        }
        if (!Array.contains($v_0, 'CreateView')) {
            Array.add($v_0, 'CreateView');
        }
        Array.add($v_0, 'NavZoomIn');
        Array.add($v_0, 'NavZoomOut');
        Array.add($v_0, 'NavScrollTask');
        Array.add($v_0, 'Indent');
        Array.add($v_0, 'Outdent');
        Array.add($v_0, 'MoveUp');
        Array.add($v_0, 'MoveDown');
        Array.add($v_0, 'ShowSubItems');
        Array.add($v_0, 'HideSubItems');
        Array.add($v_0, 'MarkAsFeaturedCommand');
        Array.add($v_0, 'UnmarkAsFeaturedCommand');
        Array.add($v_0, 'AddToTimeline');
        return $v_0;
    },
    $50_3: function SP_Ribbon_ListViewWebPartPageComponent$$50_3() {
        var $v_0 = new Sys.StringBuilder();

        $v_0.append('<Menu Id=\'Ribbon.List.CustomViews.ModifyView.Menu\'>');
        $v_0.append('<MenuSection DisplayMode=\'Menu\' Id=\'Ribbon.List.CustomViews.ModifyView.Menu.Manage\'>');
        $v_0.append('<Controls Id=\'Ribbon.List.CustomViews.ModifyView.Menu.Manage.Controls\'>');
        $v_0.append('<Button');
        $v_0.append(' Id=\'Ribbon.List.CustomViews.ModifyView.Menu.Manage.ModifyView\'');
        $v_0.append(' Command=\'');
        $v_0.append('ModifyView');
        $v_0.append('\'');
        $v_0.append(' LabelText=\'');
        $v_0.append(SP.Utilities.HttpUtility.htmlEncode(SP.Res.modifyViewLabel));
        $v_0.append('\'');
        $v_0.append('/>');
        if (!this.$2J_3) {
            $v_0.append('<Button');
            $v_0.append(' Id=\'Ribbon.List.CustomViews.ModifyView.Menu.Manage.ModifyViewInDesigner\'');
            $v_0.append(' Command=\'');
            $v_0.append('ModifyViewInDesigner');
            $v_0.append('\'');
            $v_0.append(' LabelText=\'');
            $v_0.append(SP.Utilities.HttpUtility.htmlEncode(SP.Res.modifyInDesignerLabel));
            $v_0.append('\'');
            $v_0.append('/>');
        }
        $v_0.append('</Controls>');
        $v_0.append('</MenuSection>');
        $v_0.append('</Menu>');
        return $v_0.toString();
    },
    $4z_3: function SP_Ribbon_ListViewWebPartPageComponent$$4z_3() {
        var $v_0 = new Sys.StringBuilder();

        $v_0.append('<Menu Id=\'Ribbon.List.Settings.ManageWorkflows.Menu\'>');
        $v_0.append('<MenuSection DisplayMode=\'Menu\' Id=\'Ribbon.List.Settings.ManageWorkflows.Menu.Manage\'>');
        $v_0.append('<Controls Id=\'Ribbon.List.Settings.ManageWorkflows.Menu.Manage.Controls\'>');
        $v_0.append('<Button');
        $v_0.append(' Id=\'Ribbon.List.Settings.ManageWorkflows.Menu.Manage.EditSettings\'');
        $v_0.append(' Command=\'');
        $v_0.append('EditWorkflowSettings');
        $v_0.append('\'');
        $v_0.append(' MenuItemId=\'Ribbon.List.Settings.ManageWorkflows.Menu.Manage.WorkflowSettings.Menu\'');
        $v_0.append(' LabelText=\'');
        $v_0.append(SP.Utilities.HttpUtility.htmlEncode(SP.Res.workflowSettingsLabel));
        $v_0.append('\'');
        $v_0.append('/>');
        $v_0.append('<Button');
        $v_0.append(' Id=\'Ribbon.List.Settings.ManageWorkflows.Menu.Manage.Associate\'');
        $v_0.append(' Command=\'');
        $v_0.append('AssociateWorkflows');
        $v_0.append('\'');
        $v_0.append(' MenuItemId=\'Ribbon.List.Settings.ManageWorkflows.Menu.Manage.Associate.Menu\'');
        $v_0.append(' LabelText=\'');
        $v_0.append(SP.Utilities.HttpUtility.htmlEncode(SP.Res.associateWorkflowLabel));
        $v_0.append('\'');
        $v_0.append('/>');
        $v_0.append('</Controls>');
        $v_0.append('</MenuSection>');
        if (!this.$2J_3) {
            $v_0.append('<MenuSection DisplayMode=\'Menu\' Id=\'Ribbon.List.Settings.ManageWorkflows.Menu.CreateInSP\'>');
            $v_0.append('<Controls Id=\'Ribbon.List.Settings.ManageWorkflows.Menu.CreateInSP.Controls\'>');
            $v_0.append('<Button');
            $v_0.append(' Id=\'Ribbon.List.Settings.ManageWorkflows.Menu.CreateInSP.CreateWorkflowInDesigner\'');
            $v_0.append(' Command=\'');
            $v_0.append('CreateWorkflowInDesigner');
            $v_0.append('\'');
            $v_0.append(' LabelText=\'');
            $v_0.append(SP.Utilities.HttpUtility.htmlEncode(SP.Res.createWorkflowInDesignerLabel));
            $v_0.append('\'');
            $v_0.append('/>');
            $v_0.append('<Button');
            $v_0.append(' Id=\'Ribbon.List.Settings.ManageWorkflows.Menu.CreateInSP.CreateReusableWorkflowInDesigner\'');
            $v_0.append(' Command=\'');
            $v_0.append('CreateReusableWorkflowInDesigner');
            $v_0.append('\'');
            $v_0.append(' LabelText=\'');
            $v_0.append(SP.Utilities.HttpUtility.htmlEncode(SP.Res.createReUsableWorkflowInDesignerLabel));
            $v_0.append('\'');
            $v_0.append('/>');
            $v_0.append('</Controls>');
            $v_0.append('</MenuSection>');
        }
        $v_0.append('</Menu>');
        return $v_0.toString();
    },
    addAlwaysEnabledCommands: function SP_Ribbon_ListViewWebPartPageComponent$addAlwaysEnabledCommands() {
        SP.Ribbon.WebPartPageComponent.prototype.addAlwaysEnabledCommands.call(this);
        var $v_0 = this.get_alwaysEnabledCommands();

        $v_0['ViewsTab'] = true;
        $v_0['TrackTab'] = true;
        $v_0['ViewFormatGroup'] = true;
        $v_0['WorkflowGroup'] = true;
        $v_0['DisplayView'] = true;
        $v_0['QueryDisplayView'] = true;
        $v_0['DatasheetGroup'] = true;
        $v_0['ViewActionsGroup'] = true;
        $v_0['CustomViewsGroup'] = true;
        $v_0['NotificationsGroup'] = true;
        $v_0['ShareGroup'] = true;
        $v_0['GanttViewGroup'] = true;
        $v_0['HierarchyGroup'] = true;
        $v_0['CurrentView'] = true;
        $v_0['ModerateDiscussionsGroup'] = true;
    },
    setEcbStateDirty: function SP_Ribbon_ListViewWebPartPageComponent$setEcbStateDirty() {
        this.$1O_3 = true;
    },
    $2t_3: function SP_Ribbon_ListViewWebPartPageComponent$$2t_3($p0) {
        var $v_0 = this.$t_3($p0);

        if (SP.Ribbon.SU.$0($v_0)) {
            return false;
        }
        var $v_1 = this.get_ctx();
        var $v_2 = $v_0.onMenuClick;

        if (SP.Ribbon.SU.$0($v_2)) {
            if (SP.Ribbon.SU.$0($v_0.attributes.getNamedItem('onmenuclick'))) {
                return false;
            }
            $v_2 = ($v_0.attributes.getNamedItem('onmenuclick')).value;
        }
        if (!SP.Ribbon.SU.$0($v_2)) {
            SP.Ribbon.NativeUtility.executeECBCommand($v_2, $v_1);
            return true;
        }
        else {
            return false;
        }
    },
    $t_3: function SP_Ribbon_ListViewWebPartPageComponent$$t_3($p0) {
        var $v_0 = this.$k_3();

        if (!this.$2r_3($v_0)) {
            return null;
        }
        var $v_1 = this.$32_3($v_0);

        return this.$31_3($v_1, $p0);
    },
    $31_3: function SP_Ribbon_ListViewWebPartPageComponent$$31_3($p0, $p1) {
        for (var $v_0 = 0; $v_0 < $p0.childNodes.length; $v_0++) {
            var $v_1 = $p0.childNodes[$v_0];

            if (($v_1.getAttributeNode('type')).value !== 'separator') {
                var $v_2 = $v_1;

                if ($v_2.CUICommand === $p1) {
                    return $v_2;
                }
                else if ($v_2.IsSubMenu) {
                    var $v_3 = this.$31_3($v_2, $p1);

                    if (!SP.Ribbon.SU.$0($v_3)) {
                        return $v_3;
                    }
                }
            }
        }
        return null;
    },
    $k_3: function SP_Ribbon_ListViewWebPartPageComponent$$k_3() {
        var $v_0 = null;
        var $v_1 = this.get_ctx();

        $v_0 = GetSelectedItemsDict($v_1);
        return $v_0;
    },
    getCountOfSelectedItems: function SP_Ribbon_ListViewWebPartPageComponent$getCountOfSelectedItems() {
        var $v_0 = this.$k_3();

        if (SP.Ribbon.SU.$0($v_0)) {
            return 0;
        }
        var $v_1 = this.get_ctx();

        return CountSelectedItems($v_1);
    },
    canHandleECBCommand: function SP_Ribbon_ListViewWebPartPageComponent$canHandleECBCommand(commandId) {
        if (!this.$3p_3()) {
            return false;
        }
        if (this.$1O_3) {
            (this.get_$r_3()).CUIItemInfo = null;
            this.$1O_3 = false;
        }
        var $v_0 = this.$k_3();

        if (SP.Ribbon.SU.$0($v_0)) {
            return false;
        }
        var $v_1 = this.getCountOfSelectedItems();

        if ($v_1 === 1) {
            if (!this.$2r_3($v_0)) {
                return false;
            }
            var $v_2 = this.$32_3($v_0);

            if (this.$27_3($v_2, commandId)) {
                return true;
            }
        }
        else if ($v_1 > 1 && this.$2e_3(commandId)) {
            return this.$40_3($v_0, commandId);
        }
        return false;
    },
    $3p_3: function SP_Ribbon_ListViewWebPartPageComponent$$3p_3() {
        if (SP.Ribbon.SU.$0(this.get_ctx())) {
            return false;
        }
        var $v_0 = this.get_ctx();

        if ($v_0) {
            if ($v_0['inGridMode']) {
                return false;
            }
            return $v_0['listTemplate'] !== '106' || $v_0['isXslView'];
        }
        else {
            return false;
        }
    },
    $40_3: function SP_Ribbon_ListViewWebPartPageComponent$$40_3($p0, $p1) {
        var $v_0 = this.get_$r_3();

        if (SP.Ribbon.SU.$0($v_0)) {
            return false;
        }
        var $$dict_3 = $p0;

        for (var $$key_4 in $$dict_3) {
            var $v_1 = {
                key: $$key_4,
                value: $$dict_3[$$key_4]
            };
            var $v_2 = $v_1.key.split(',');

            if (!this.$2o_3($v_0, $v_2[1])) {
                return false;
            }
            var $v_3 = (this.get_$r_3()).CUIItemInfo[$v_2[1]];

            if (!this.$27_3($v_3, $p1)) {
                return false;
            }
        }
        return true;
    },
    $2e_3: function SP_Ribbon_ListViewWebPartPageComponent$$2e_3($p0) {
        return $p0 === 'CheckOut' || $p0 === 'CheckIn' || $p0 === 'Delete' || $p0 === 'DiscardCheckOut' || $p0 === 'AddToTimeline' || $p0 === 'Moderate';
    },
    $32_3: function SP_Ribbon_ListViewWebPartPageComponent$$32_3($p0) {
        var $$dict_1 = $p0;

        for (var $$key_2 in $$dict_1) {
            var $v_0 = {
                key: $$key_2,
                value: $$dict_1[$$key_2]
            };
            var $v_1 = $v_0.key.split(',');
            var $v_2 = (this.get_$r_3()).CUIItemInfo[$v_1[1]];

            return $v_2;
        }
        return null;
    },
    $27_3: function SP_Ribbon_ListViewWebPartPageComponent$$27_3($p0, $p1) {
        var $v_0 = 'cacheVal_' + $p1;
        var $v_1 = $p0.getAttribute($v_0);

        if (!SP.Ribbon.SU.$0($v_1)) {
            return $v_1 === 'TRUE';
        }
        for (var $v_2 = 0; $v_2 < $p0.childNodes.length; $v_2++) {
            var $v_3 = $p0.childNodes[$v_2];

            if (($v_3.getAttributeNode('type')).value !== 'separator') {
                var $v_4 = $v_3;

                if (this.$5Z_3($v_4, $p1)) {
                    $p0.setAttribute($v_0, 'TRUE');
                    return true;
                }
                else if ($v_4.IsSubMenu) {
                    var $v_5 = this.$27_3($v_4, $p1);

                    if ($v_5) {
                        $p0.setAttribute($v_0, 'TRUE');
                        return true;
                    }
                }
            }
        }
        $p0.setAttribute($v_0, 'FALSE');
        return false;
    },
    $5Z_3: function SP_Ribbon_ListViewWebPartPageComponent$$5Z_3($p0, $p1) {
        if (SP.Ribbon.SU.$0($p0.CUIEnabledCommands)) {
            return false;
        }
        for (var $v_0 = 0; $v_0 < $p0.CUIEnabledCommands.length; $v_0++) {
            if ($p0.CUIEnabledCommands[$v_0] === $p1) {
                return true;
            }
        }
        return false;
    },
    $2r_3: function SP_Ribbon_ListViewWebPartPageComponent$$2r_3($p0) {
        var $v_0 = this.get_$r_3();

        if (SP.Ribbon.SU.$0($v_0)) {
            return false;
        }
        var $$dict_2 = $p0;

        for (var $$key_3 in $$dict_2) {
            var $v_1 = {
                key: $$key_3,
                value: $$dict_2[$$key_3]
            };
            var $v_2 = $v_1.key.split(',');

            if (!this.$2o_3($v_0, $v_2[1])) {
                return false;
            }
        }
        return true;
    },
    $2o_3: function SP_Ribbon_ListViewWebPartPageComponent$$2o_3($p0, $p1) {
        var $v_0 = $p0.CUIItemInfo;

        if (SP.Ribbon.SU.$0($v_0)) {
            $v_0 = {};
            $p0.CUIItemInfo = $v_0;
        }
        var $v_1 = $v_0[$p1];

        if (SP.Ribbon.SU.$0($v_1)) {
            $v_1 = this.$44_3($p0, $p1);
            if (SP.Ribbon.SU.$0($v_1)) {
                return false;
            }
            $v_0[$p1] = $v_1;
        }
        return true;
    },
    $44_3: function SP_Ribbon_ListViewWebPartPageComponent$$44_3($p0, $p1) {
        var $v_0 = window.itemTable;

        window.itemTable = $p0.GetEcbInfo($p1);
        if (SP.Ribbon.SU.$0(window.itemTable)) {
            return null;
        }
        var $v_1 = this.get_ctx();

        window.dict = GetSelectedItemsDict($v_1);
        var $v_2 = BuildMenuWithInit($v_1);

        window.itemTable = $v_0;
        if (!$v_0) {
            $v_0 = null;
        }
        return $v_2;
    },
    get_ctx: function SP_Ribbon_ListViewWebPartPageComponent$get_ctx() {
        return SP.Ribbon.NativeUtility.getCtxForView('{' + this.$Y_3.toUpperCase() + '}');
    },
    get_$r_3: function SP_Ribbon_ListViewWebPartPageComponent$get_$r_3() {
        var $v_0 = this.get_ctx();

        if (!$v_0) {
            return null;
        }
        else {
            return $v_0.clvp;
        }
    },
    $1P_3: false,
    $15_3: null,
    $1Q_3: null,
    $20_3: 0,
    get_defaultFormsDropDownXml: function SP_Ribbon_ListViewWebPartPageComponent$get_defaultFormsDropDownXml() {
        return this.$15_3;
    },
    getDefaultFormsInfo: function SP_Ribbon_ListViewWebPartPageComponent$getDefaultFormsInfo() {
        if (this.$1P_3) {
            return;
        }
        this.$1P_3 = true;
        var $v_0 = new SP.Guid(this.$D_3);

        SP.Application.UI.DefaultFormsMenuBuilder.getDefaultFormsInformation(this, $v_0);
    },
    onDefaultFormsInformationRetrieveSuccess: function SP_Ribbon_ListViewWebPartPageComponent$onDefaultFormsInformationRetrieveSuccess(formsInfo) {
        this.$1P_3 = false;
        this.$15_3 = this.$4g_3(formsInfo);
    },
    onDefaultFormsInformationRetrieveFailure: function SP_Ribbon_ListViewWebPartPageComponent$onDefaultFormsInformationRetrieveFailure() {
        this.$1P_3 = false;
        this.$15_3 = this.$2p_3(SP.Utilities.HttpUtility.htmlEncode(SP.Res.relationships_ListFormsFetchFailed));
    },
    $2b_3: function SP_Ribbon_ListViewWebPartPageComponent$$2b_3($p0, $p1, $p2) {
        if (!SP.ScriptUtility.isNullOrEmptyString($p1.NewFormUrl)) {
            var $v_0 = SP.Utilities.HttpUtility.htmlEncode(!$p2 ? SP.Res.relationships_DefaultNewForm : String.format(SP.Res.relationships_CTNewForm, $p1.ContentTypeName));
            var $v_1 = '-225';
            var $v_2 = '-55';
            var $v_3 = '-171';
            var $v_4 = '-409';

            $p0.append('<Button \r\n                                    Id=\"Ribbon.List.Settings.EditDefaultForms.Menu.MS.EditDefaultFormNew' + $p2 + '\"\r\n                                    CommandValueId=\"' + SP.Utilities.HttpUtility.htmlEncode($p1.NewFormUrl) + '\"\r\n                                    Command=\"EditDefaultForm\"\r\n                                    Image16by16=\"' + this.$1c_3 + '\"\r\n                                    Image16by16Top=\"' + $v_1 + '\"\r\n                                    Image16by16Left=\"' + $v_2 + '\"\r\n                                    Image32by32=\"' + this.$1d_3 + '\"\r\n                                    Image32by32Top=\"' + $v_3 + '\"\r\n                                    Image32by32Left=\"' + $v_4 + '\"\r\n                                    LabelText=\"' + $v_0 + '\" \r\n                                />');
        }
        if (!SP.ScriptUtility.isNullOrEmptyString($p1.DisplayFormUrl)) {
            var $v_5 = SP.Utilities.HttpUtility.htmlEncode(!$p2 ? SP.Res.relationships_DefaultDisplayForm : String.format(SP.Res.relationships_CTDisplayForm, $p1.ContentTypeName));
            var $v_6 = '-107';
            var $v_7 = '-37';
            var $v_8 = '-1';
            var $v_9 = '-171';

            $p0.append('<Button \r\n                                    Id=\"Ribbon.List.Settings.EditDefaultForms.Menu.MS.EditDefaultFormDisplay' + $p2 + '\"\r\n                                    CommandValueId=\"' + SP.Utilities.HttpUtility.htmlEncode($p1.DisplayFormUrl) + '\"\r\n                                    Command=\"EditDefaultForm\"\r\n                                    Image16by16=\"' + this.$1c_3 + '\"\r\n                                    Image16by16Top=\"' + $v_6 + '\"\r\n                                    Image16by16Left=\"' + $v_7 + '\"\r\n                                    Image32by32=\"' + this.$1d_3 + '\"\r\n                                    Image32by32Top=\"' + $v_8 + '\"\r\n                                    Image32by32Left=\"' + $v_9 + '\"\r\n                                    LabelText=\"' + $v_5 + '\" \r\n                                />');
        }
        if (!SP.ScriptUtility.isNullOrEmptyString($p1.EditFormUrl)) {
            var $v_A = SP.Utilities.HttpUtility.htmlEncode(!$p2 ? SP.Res.relationships_DefaultEditForm : String.format(SP.Res.relationships_CTEditForm, $p1.ContentTypeName));
            var $v_B = '-217';
            var $v_C = '-217';
            var $v_D = '-1';
            var $v_E = '-171';

            $p0.append('<Button \r\n                                    Id=\"Ribbon.List.Settings.EditDefaultForms.Menu.MS.EditDefaultFormEdit' + $p2 + '\"\r\n                                    CommandValueId=\"' + SP.Utilities.HttpUtility.htmlEncode($p1.EditFormUrl) + '\"\r\n                                    Command=\"EditDefaultForm\"\r\n                                    Image16by16=\"' + this.$1c_3 + '\"\r\n                                    Image16by16Top=\"' + $v_B + '\"\r\n                                    Image16by16Left=\"' + $v_C + '\"\r\n                                    Image32by32=\"' + this.$1d_3 + '\"\r\n                                    Image32by32Top=\"' + $v_D + '\"\r\n                                    Image32by32Left=\"' + $v_E + '\"\r\n                                    LabelText=\"' + $v_A + '\" \r\n                                />');
        }
    },
    $4g_3: function SP_Ribbon_ListViewWebPartPageComponent$$4g_3($p0) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0.DefaultForms.DisplayFormUrl) && SP.ScriptUtility.isNullOrEmptyString($p0.DefaultForms.NewFormUrl) && SP.ScriptUtility.isNullOrEmptyString($p0.DefaultForms.EditFormUrl)) {
            return this.$2p_3(SP.Utilities.HttpUtility.htmlEncode(SP.Res.relationships_NoNewEditDisplayListForms));
        }
        var $v_0 = new Sys.StringBuilder();

        $v_0.append('\r\n                <Menu Id=\"Ribbon.List.Settings.EditDefaultForms.Menu\">');
        $v_0.append('\r\n                  <MenuSection Id=\"Ribbon.List.Settings.EditDefaultForms.Menu.Default\" Scrollable=\"false\" DisplayMode=\"Menu16\">\r\n                    <Controls Id=\"Ribbon.List.Settings.EditDefaultForms.Menu.Default.Controls\">');
        this.$2b_3($v_0, $p0.DefaultForms, 0);
        $v_0.append('\r\n                    </Controls>\r\n                  </MenuSection>');
        var $v_1 = new Sys.StringBuilder();

        for (var $v_2 = 0; $v_2 < $p0.OtherForms.length; ++$v_2) {
            var $v_3 = $p0.OtherForms[$v_2];

            this.$2b_3($v_1, $v_3, $v_2 + 1);
        }
        if (!$v_1.isEmpty()) {
            $v_0.append(String.format('\r\n                  <MenuSection Title=\"{0}\" Id=\"Ribbon.List.Settings.EditDefaultForms.Menu.Other\" Scrollable=\"false\" DisplayMode=\"Menu16\">\r\n                    <Controls Id=\"Ribbon.List.Settings.EditDefaultForms.Menu.Other.Controls\">', SP.Utilities.HttpUtility.htmlEncode(SP.Res.relationships_CTForms)));
            $v_0.append($v_1.toString());
            $v_0.append('\r\n                    </Controls>\r\n                  </MenuSection>');
        }
        $v_0.append('\r\n                </Menu>');
        return $v_0.toString();
    },
    $2p_3: function SP_Ribbon_ListViewWebPartPageComponent$$2p_3($p0) {
        var $v_0 = new Sys.StringBuilder();

        $v_0.append('\r\n                <Menu Id=\"Ribbon.List.Settings.EditDefaultForms.Menu\">');
        $v_0.append('\r\n                  <MenuSection Id=\"Ribbon.List.Settings.EditDefaultForms.Menu.Default\" Scrollable=\"false\" DisplayMode=\"Menu16\">\r\n                    <Controls Id=\"Ribbon.List.Settings.EditDefaultForms.Menu.Default.Controls\">');
        $v_0.append('\r\n                    <Button \r\n                        Id=\"Ribbon.List.Settings.EditDefaultForms.Menu.MS.ListFormFetchErrorMessage\"\r\n                        Image16by16=\"' + SP.Utilities.Utility.get_layoutsLatestVersionUrl() + 'images/edit.gif\"\r\n                        Image32by32=\"' + SP.Utilities.Utility.get_layoutsLatestVersionUrl() + 'images/placeholder32x32.png\"\r\n                        LabelText=\"' + $p0 + '\"\r\n                    />');
        $v_0.append('\r\n                    </Controls>\r\n                  </MenuSection>');
        $v_0.append('\r\n                </Menu>');
        return $v_0.toString();
    },
    navigateToFormPageDesignMode: function SP_Ribbon_ListViewWebPartPageComponent$navigateToFormPageDesignMode(formServerUrl) {
        var $v_0 = new SP.Utilities.UrlBuilder(formServerUrl);

        $v_0.addKeyValueQueryString('DisplayMode', 'Design');
        $v_0.addKeyValueQueryString('InitialTabId', 'Ribbon.WebPartPage');
        $v_0.addKeyValueQueryString('VisibilityContext', 'WSSWebPartPage');
        SP.Utilities.HttpUtility.appendSourceAndNavigateTo($v_0.get_url());
    },
    get_viewSelectorOptions: function SP_Ribbon_ListViewWebPartPageComponent$get_viewSelectorOptions() {
        if (SP.Ribbon.SU.$0(this.$1R_3) && !SP.Ribbon.SU.$0((this.get_$18_3()).ViewDropDownOptions)) {
            this.$1R_3 = eval('(' + (this.get_$18_3()).ViewDropDownOptions + ')');
        }
        return this.$1R_3;
    },
    $2Y_3: null,
    $1v_3: false,
    $1S_3: null,
    get_viewDropDownXml: function SP_Ribbon_ListViewWebPartPageComponent$get_viewDropDownXml() {
        return this.$1S_3;
    },
    get_hasViewSelectorInfo: function SP_Ribbon_ListViewWebPartPageComponent$get_hasViewSelectorInfo() {
        return !SP.Ribbon.SU.$0(this.get_viewSelectorOptions());
    },
    getViewGroupInfo: function SP_Ribbon_ListViewWebPartPageComponent$getViewGroupInfo() {
        if (this.$1v_3) {
            return;
        }
        this.$1v_3 = true;
        SP.Application.UI.ViewSelectorMenuBuilder.getViewInformation(this, this.$1R_3);
    },
    onViewInformationReturned: function SP_Ribbon_ListViewWebPartPageComponent$onViewInformationReturned(viewGroups) {
        this.$2Y_3 = viewGroups;
        this.$1v_3 = false;
        this.$1S_3 = this.$4h_3(this.$2Y_3);
    },
    $1U_3: function SP_Ribbon_ListViewWebPartPageComponent$$1U_3($p0, $p1, $p2, $p3) {
        var $v_0 = $p3.appendChild('MenuSection', {
            Id: $p1
        });

        if (!SP.Ribbon.SU.$0($p0)) {
            ($v_0.get_attributes())['Title'] = $p0;
        }
        var $v_1 = $v_0.appendChild('Controls', {
            Id: $p1 + '.Controls'
        });

        for (var $v_2 = 0; $v_2 < $p2.length; $v_2++) {
            if (SP.Application.UI.ViewSelectorSubMenu.isInstanceOfType($p2[$v_2])) {
                var $v_5 = $p2[$v_2];

                this.$3z_3($v_5, $p1, $v_1);
            }
            var $v_3 = $p2[$v_2];
            var $v_4 = this.$28_3($v_3);

            this.$22_3($v_3.Text, $p1 + '.' + $v_3.Id.toString(), $v_4, $v_1);
        }
    },
    $28_3: function SP_Ribbon_ListViewWebPartPageComponent$$28_3($p0) {
        return $p0.ActionScriptText;
    },
    $3z_3: function SP_Ribbon_ListViewWebPartPageComponent$$3z_3($p0, $p1, $p2) {
        var $v_0 = $p1 + '.SubMenu';
        var $v_1 = $p0.Text;
        var $v_2 = SP.Ribbon.SU.$0($v_1);
        var $v_3 = '';

        if (!$v_2) {
            $v_3 = $v_1;
        }
        var $v_4 = $p2.appendChild('FlyoutAnchor', {
            Id: $v_0,
            Command: 'PopulateViewDropDown'
        });

        if (!$v_2) {
            ($v_4.get_attributes())['Title'] = $v_3;
        }
        $v_0 += '.Menu';
        var $v_5 = $v_4.appendChild('Menu', {
            Id: $v_0
        });

        $v_0 += '.SubMenu1';
        var $v_6 = $v_5.appendChild('MenuSection', {
            Id: $v_0
        });

        if (!$v_2) {
            ($v_6.get_attributes())['Title'] = $v_3;
        }
        var $v_7 = $v_6.appendChild('Controls', {
            Id: $v_0 + '.Controls'
        });

        for (var $v_8 = 0; $v_8 < $p0.SubMenuItems.length; $v_8++) {
            var $v_9 = $p0.SubMenuItems[$v_8];
            var $v_A = this.$28_3($v_9);

            this.$22_3($v_9.Text, $v_0 + '.' + $v_9.Id.toString(), $v_A, $v_7);
        }
    },
    $22_3: function SP_Ribbon_ListViewWebPartPageComponent$$22_3($p0, $p1, $p2, $p3) {
        var $v_0 = !SP.Ribbon.SU.$2($p0) ? $p0 : SP.Res.viewGroupDefault;

        $p3.appendChild('Button', {
            Id: $p1,
            MenuItemId: $p2,
            CommandValueId: $p2,
            CommandType: 'OptionSelection',
            Command: 'DisplayView',
            LabelText: $v_0
        });
    },
    $4h_3: function SP_Ribbon_ListViewWebPartPageComponent$$4h_3($p0) {
        var $v_0 = new CUI.JsonXmlElement('Menu', {
            Id: this.get_viewDropDownIdPrefix() + '.Menu'
        });

        if ($p0.DefaultView) {
            var $v_1 = ($v_0.appendChild('MenuSection', {
                Title: SP.Res.viewGroupDefault,
                Id: this.get_viewDropDownIdPrefix() + '.Menu.DefaultView'
            })).appendChild('Controls', {
                Id: this.get_viewDropDownIdPrefix() + '.Menu.DefaultView.Controls'
            });

            this.$22_3($p0.DefaultView.Text, this.get_viewDropDownIdPrefix() + '.Menu.DefaultView.DefaultView.' + $p0.DefaultView.Id.toString(), this.$28_3($p0.DefaultView), $v_1);
        }
        if ($p0.PersonalViews.length > 0) {
            this.$1U_3(SP.Res.viewGroupPersonal, this.get_viewDropDownIdPrefix() + '.Menu.Personal', $p0.PersonalViews, $v_0);
        }
        if ($p0.PublicViews.length > 0) {
            this.$1U_3(SP.Res.viewGroupPublic, this.get_viewDropDownIdPrefix() + '.Menu.Public', $p0.PublicViews, $v_0);
        }
        if ($p0.ModeratedViews.length > 0) {
            this.$1U_3(SP.Res.viewGroupModerated, this.get_viewDropDownIdPrefix() + '.Menu.Moderated', $p0.ModeratedViews, $v_0);
        }
        if ($p0.OtherViews.length > 0) {
            this.$1U_3(SP.Res.viewGroupOther, this.get_viewDropDownIdPrefix() + '.Menu.Other', $p0.OtherViews, $v_0);
        }
        return $v_0;
    },
    get_newMenuRecords: function SP_Ribbon_ListViewWebPartPageComponent$get_newMenuRecords() {
        if (SP.Ribbon.SU.$0(this.$1z_3) && !SP.Ribbon.SU.$0((this.get_$18_3()).NewMenuData)) {
            this.$1z_3 = eval((this.get_$18_3()).NewMenuData);
        }
        return this.$1z_3;
    },
    getDefaultNewMenuItemScript: function SP_Ribbon_ListViewWebPartPageComponent$getDefaultNewMenuItemScript() {
        if ((this.get_newMenuData()).length > 0) {
            var $v_0 = (this.get_newMenuData())[0];

            if (!SP.ScriptUtility.isNullOrUndefined($v_0.CommandValueId)) {
                return $v_0.CommandValueId;
            }
            else if (!SP.ScriptUtility.isNullOrUndefined($v_0.ClickScript)) {
                return $v_0.ClickScript;
            }
            else {
                return null;
            }
        }
        return null;
    },
    $h_3: null,
    get_newMenuData: function SP_Ribbon_ListViewWebPartPageComponent$get_newMenuData() {
        if (SP.Ribbon.SU.$0(this.$h_3)) {
            this.$h_3 = eval('(' + (this.get_$18_3()).NewMenuData + ')');
        }
        return this.$h_3;
    },
    getNewMenuXml: function SP_Ribbon_ListViewWebPartPageComponent$getNewMenuXml(commandId, controlName) {
        var $v_0 = new CUI.JsonXmlElement('Menu', {
            Id: controlName
        });
        var $v_1 = ($v_0.appendChild('MenuSection', {
            DisplayMode: 'Menu32',
            Id: controlName + '.Menu.ContentTypes'
        })).appendChild('Controls', {
            Id: controlName + '.Menu.ContentTypes.Controls'
        });

        for (var $v_2 = 0; $v_2 < (this.get_newMenuData()).length; $v_2++) {
            this.$3y_3(controlName + '.Menu.ContentTypes.' + $v_2.toString(), commandId, this.$h_3[$v_2].ClickScript, this.$h_3[$v_2].LabelText, this.$h_3[$v_2].Description, this.$h_3[$v_2].Image32by32, $v_1);
        }
        return $v_0;
    },
    $3y_3: function SP_Ribbon_ListViewWebPartPageComponent$$3y_3($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        $p6.appendChild('Button', {
            Id: $p0,
            Command: $p1,
            MenuItemId: $p2,
            CommandValueId: $p2,
            CommandType: 'OptionSelection',
            LabelText: $p3,
            Description: $p4,
            Image32by32: $p5
        });
    },
    $19_3: function SP_Ribbon_ListViewWebPartPageComponent$$19_3() {
        var $v_0 = new SP.Ribbon.PagingInformation();
        var $v_1 = 'WPQ1';
        var $v_2 = this.getId();

        if ($v_2.startsWith('WebPart') && $v_2.length > 7) {
            $v_1 = $v_2.substring(7, $v_2.length);
        }
        var $v_3 = $get('bottomPagingCell' + $v_1);

        if (!SP.Ribbon.SU.$0($v_3)) {
            var $v_4 = $v_3.firstChild;

            if ($v_4.tagName === 'SCRIPT') {
                $v_4 = $v_4.nextSibling;
            }
            var $v_5 = $v_4.firstChild.firstChild;

            for (var $v_6 = 0; $v_6 < $v_5.childNodes.length; $v_6++) {
                var $v_7 = $v_5.childNodes[$v_6];

                if ($v_7.nodeType !== 1) {
                    continue;
                }
                if ($v_7.className === 'ms-paging') {
                    $v_0.CurrentRange = SP.UI.UIUtility.getInnerText($v_7);
                }
                else {
                    var $v_8 = $v_7.firstChild.firstChild.src;
                    var $v_9 = $v_7.id;

                    if ($v_8 && $v_8.endsWith('prev.gif') || $v_9 && $v_9.endsWith('prev')) {
                        $v_0.PreviousNode = $v_7.firstChild;
                    }
                    else if ($v_8 && $v_8.endsWith('next.gif') || $v_9 && $v_9.endsWith('next')) {
                        $v_0.NextNode = $v_7.firstChild;
                    }
                }
            }
        }
        return $v_0;
    },
    get_$4_3: function SP_Ribbon_ListViewWebPartPageComponent$get_$4_3() {
        return window.self[this.getId() + '_JSGridController'];
    },
    get_$18_3: function SP_Ribbon_ListViewWebPartPageComponent$get_$18_3() {
        return this._data;
    },
    get_viewDropDownIdPrefix: function SP_Ribbon_ListViewWebPartPageComponent$get_viewDropDownIdPrefix() {
        return 'Ribbon.List.CustomViews.DisplayView';
    }
};
SP.Ribbon.HierarchyTaskList = function SP_Ribbon_HierarchyTaskList() {
};
SP.Ribbon.HierarchyTaskList.OpenSchedule = function SP_Ribbon_HierarchyTaskList$OpenSchedule(web, taskListId) {
    if (SP.Ribbon.HierarchyTaskList.$6B()) {
        return;
    }
    try {
        var $v_0 = (SP.ClientContext.get_current()).get_site();

        $v_0.retrieve(SP.SitePropertyNames.id);
        (web.get_allProperties()).retrieve();
        web.retrieve(SP.WebPropertyNames.serverRelativeUrl, SP.WebPropertyNames.url);
        (web.get_lists()).ensureSiteAssetsLibrary();
        var $v_1 = (web.get_lists()).getById(taskListId);

        $v_1.retrieve(SP.ListPropertyNames.title);
        var $v_2 = $v_1.get_rootFolder();

        ($v_2.get_properties()).retrieve();
        (SP.ClientContext.get_current()).executeQueryAsync(function($p1_0, $p1_1) {
            try {
                var $v_3 = SP.Ribbon.HierarchyTaskList.$4y($v_1);
                var $v_4 = SP.Ribbon.HierarchyTaskList.$4x(web, $v_3);

                SP.Ribbon.HierarchyTaskList.$4w(web, $v_4, function($p2_0) {
                    SP.Ribbon.HierarchyTaskList.$45($v_0, web, $v_1, taskListId, $v_3, $p2_0);
                }, function($p2_0) {
                    alert(SP.Res.openScheduleGeneralFailure);
                });
            }
            catch ($v_5) {
                SP.Ribbon.HierarchyTaskList.$3q($v_5);
            }
        }, function($p1_0, $p1_1) {
            alert(SP.Res.openScheduleGeneralFailure);
        });
    }
    catch ($v_6) {
        SP.Ribbon.HierarchyTaskList.$3q($v_6);
    }
};
SP.Ribbon.HierarchyTaskList.$45 = function SP_Ribbon_HierarchyTaskList$$45($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = SP.Ribbon.HierarchyTaskList.TaskLauncher.getInstance();
    var $v_1 = $p1.get_url();

    if (Sys.Browser.agent !== Sys.Browser.InternetExplorer) {
        $v_1 = SP.Utilities.HttpUtility.urlPathEncode($v_1);
    }
    try {
        $v_0.openSchedule(($p0.get_id()).toString(), $v_1, $p2.get_title(), $p3.toString(), $p4, $p5, SP.Ribbon.HierarchyTaskList.$29($p1, 'MSPWAPROJUID'), SP.Ribbon.HierarchyTaskList.$29($p1, 'DistinguishedListUid'), SP.Ribbon.HierarchyTaskList.$29($p1, 'MSPWASITEUID'));
    }
    finally { }
};
SP.Ribbon.HierarchyTaskList.$4w = function SP_Ribbon_HierarchyTaskList$$4w($p0, $p1, $p2, $p3) {
    if (SP.ScriptUtility.isNullOrEmptyString($p1)) {
        $p2(false);
        return;
    }
    var $v_0 = $p1.indexOf('?');

    if ($v_0 >= 0) {
        $p1 = $p1.substr(0, $v_0);
    }
    var $v_1 = $p0.getFileByServerRelativeUrl($p1);

    $v_1.retrieve(SP.FilePropertyNames.exists);
    (SP.ClientContext.get_current()).executeQueryAsync(function($p1_0, $p1_1) {
        $p2($v_1.get_exists());
    }, function($p1_0, $p1_1) {
        if ($p1_1.get_errorCode() === SP.Ribbon.HierarchyTaskList.$2s) {
            $p2(false);
        }
        else {
            $p3(Error.create($p1_1.get_message()));
        }
    });
};
SP.Ribbon.HierarchyTaskList.$4y = function SP_Ribbon_HierarchyTaskList$$4y($p0) {
    var $v_0 = $p0.get_rootFolder();
    var $v_1;

    if ('MppUrl' in ($v_0.get_properties()).get_fieldValues()) {
        $v_1 = ($v_0.get_properties()).get_item('MppUrl');
        if (SP.ScriptUtility.isNullOrEmptyString($v_1)) {
            $v_1 = '';
        }
        else if ($v_1.indexOf('/') === -1) {
            $v_1 = SP.Ribbon.HierarchyTaskList.$6C($v_1);
        }
        else {
            var $v_2 = String.format(SP.Res.openScheduleListPropertyCorrupted, 'MppUrl', $v_1);

            throw Error.invalidOperation($v_2);
        }
    }
    else {
        $v_1 = '';
    }
    return $v_1;
};
SP.Ribbon.HierarchyTaskList.$4x = function SP_Ribbon_HierarchyTaskList$$4x($p0, $p1) {
    var $v_0;

    if (SP.ScriptUtility.isNullOrEmptyString($p1)) {
        $v_0 = $p1;
    }
    else {
        $v_0 = SP.Utilities.UrlBuilder.urlCombine($p0.get_serverRelativeUrl(), 'SiteAssets/' + $p1);
    }
    return $v_0;
};
SP.Ribbon.HierarchyTaskList.$29 = function SP_Ribbon_HierarchyTaskList$$29($p0, $p1) {
    return $p1 in ($p0.get_allProperties()).get_fieldValues() ? ($p0.get_allProperties()).get_item($p1) : '';
};
SP.Ribbon.HierarchyTaskList.$6C = function SP_Ribbon_HierarchyTaskList$$6C($p0) {
    return window.unescapeProperly($p0);
};
SP.Ribbon.HierarchyTaskList.$3q = function SP_Ribbon_HierarchyTaskList$$3q($p0) {
    alert(SP.Res.openScheduleGeneralFailure);
};
SP.Ribbon.HierarchyTaskList.$60 = function SP_Ribbon_HierarchyTaskList$$60() {
    var $v_0 = window.event || {};
    var $v_1 = $v_0;

    return 'shiftKey' in $v_1 && $v_1['shiftKey'];
};
SP.Ribbon.HierarchyTaskList.$6B = function SP_Ribbon_HierarchyTaskList$$6B() {
    if (!SP.ULS.get_enabled() && SP.Ribbon.HierarchyTaskList.$60()) {
        return SP.ULS.get_enabled();
    }
    return false;
};
SP.Ribbon.HierarchyTaskList.Continuation = function SP_Ribbon_HierarchyTaskList_Continuation() {
};
SP.Ribbon.HierarchyTaskList.TaskLauncher = function SP_Ribbon_HierarchyTaskList_TaskLauncher() {
};
SP.Ribbon.HierarchyTaskList.TaskLauncher.getInstance = function SP_Ribbon_HierarchyTaskList_TaskLauncher$getInstance() {
    return new SP.Ribbon.HierarchyTaskList.TaskLauncher();
};
SP.Ribbon.HierarchyTaskList.TaskLauncher.prototype = {
    get_isMSProjectAvailable: function SP_Ribbon_HierarchyTaskList_TaskLauncher$get_isMSProjectAvailable() {
        return phManager.IsProtocolHandlerEnabled('ms-project');
    },
    navigate: function SP_Ribbon_HierarchyTaskList_TaskLauncher$navigate($p0) {
        if (!this.get_isMSProjectAvailable()) {
            alert(SP.Res.winprojTooOld);
            return;
        }
        if (typeof navigator.msLaunchUri == "function") {
            var $$t_1 = this;

            navigator.msLaunchUri($p0, null, function() {
                alert(SP.Res.winprojTooOld);
            });
            return;
        }
        window.location.href = $p0;
    },
    openSchedule: function SP_Ribbon_HierarchyTaskList_TaskLauncher$openSchedule($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
        var $v_0 = 'ms-project:osc';

        $v_0 += '|u|' + $p1;
        $v_0 += '|b|' + $p3;
        if (!SP.ScriptUtility.isNullOrEmptyString($p4)) {
            $v_0 += '|c|' + $p4;
        }
        $v_0 += '|d|' + ($p5 ? '1' : '0');
        if (!SP.ScriptUtility.isNullOrEmptyString($p8)) {
            $v_0 += '|g|' + $p8;
        }
        if (!SP.ScriptUtility.isNullOrEmptyString($p6)) {
            $v_0 += '|h|' + $p6;
        }
        if (!SP.ScriptUtility.isNullOrEmptyString($p7)) {
            $v_0 += '|i|' + $p7;
        }
        $v_0 += '|j|' + $p0;
        this.navigate($v_0);
    }
};
SP.Ribbon.ListFormWebPartPageComponentData = function SP_Ribbon_ListFormWebPartPageComponentData() {
    SP.Ribbon.ListFormWebPartPageComponentData.initializeBase(this);
};
SP.Ribbon.ListFormWebPartPageComponentData.prototype = {
    ViewId: null
};
SP.Ribbon.ListFormWebPartPageComponent = function SP_Ribbon_ListFormWebPartPageComponent(id, data) {
    SP.Ribbon.ListFormWebPartPageComponent.initializeBase(this, [id, data]);
    this.$Y_3 = data.ViewId;
};
SP.Ribbon.ListFormWebPartPageComponent.prototype = {
    $Y_3: null,
    canHandleCommand: function SP_Ribbon_ListFormWebPartPageComponent$canHandleCommand(commandId) {
        if (commandId === 'Ribbon.ListForm.Edit.Clipboard.Cut' || commandId === 'Ribbon.ListForm.Edit.Clipboard.Copy' || commandId === 'Ribbon.ListForm.Edit.Clipboard.Paste') {
            return true;
        }
        if (!SP.Ribbon.SU.$0((this.get_alwaysEnabledCommands())[commandId])) {
            return true;
        }
        var $v_0 = this._controlData[commandId];

        if (!SP.Ribbon.SU.$0($v_0)) {
            if ($v_0.Enabled === 'False') {
                return false;
            }
        }
        if (SP.Ribbon.WebPartPageComponent.prototype.canHandleCommand.call(this, commandId)) {
            return true;
        }
        return false;
    },
    handleCommand: function SP_Ribbon_ListFormWebPartPageComponent$handleCommand(commandId, properties, sequence) {
        var $v_0 = this._controlData[commandId];

        if (!SP.Ribbon.SU.$0($v_0)) {
            if (commandId === 'Ribbon.ListForm.Edit.Commit.SaveAsDraft' || commandId === 'Ribbon.ListForm.Edit.Commit.Publish' || commandId === 'Ribbon.ListForm.Edit.Commit.CheckIn' || commandId === 'Ribbon.ListForm.Edit.Commit.Cancel' || commandId === 'Ribbon.ListForm.Display.Manage.ClaimReleaseTask' || commandId === 'Ribbon.ListForm.Display.Manage.DeleteItemVersion' || commandId === 'Ribbon.ListForm.Display.Manage.RestoreItemVersion' || commandId === 'Ribbon.ListForm.Display.HealthActions.HealthRuleRunNow' || commandId === 'Ribbon.ListForm.Display.HealthActions.HealthReportRunNow' || commandId === 'Ribbon.ListForm.Display.HealthActions.HealthReportRepair') {
                var $v_1 = $get($v_0.ElementClientId);

                if ($v_1) {
                    this.simulateClick($v_1);
                }
            }
            else if (commandId === 'Ribbon.ListForm.Display.Manage.DeleteItem') {
                var $v_2 = '';
                var $v_3 = '';

                if (!SP.Ribbon.SU.$2($v_0.ClickScript)) {
                    if ($v_0.ClickScript.indexOf('DeleteInstanceConfirmation()') !== -1) {
                        $v_3 = 'DeleteInstanceConfirmation()';
                    }
                    else if ($v_0.ClickScript.indexOf('DeleteItemConfirmation()') !== -1) {
                        $v_3 = 'DeleteItemConfirmation()';
                    }
                }
                var $v_4 = $get($v_0.ElementClientId);

                if ($v_4 && !SP.Ribbon.SU.$2($v_3)) {
                    $v_2 = $v_4.getAttribute('href');
                    if (!SP.Ribbon.SU.$2($v_2)) {
                        $v_2 = $v_2.replace('javascript:', '');
                        $v_2 = 'if(' + $v_3 + '){' + $v_2 + ';};';
                    }
                }
                if (!SP.Ribbon.SU.$2($v_2)) {
                    this.executeClickScript($v_2);
                }
                else if ($v_4) {
                    this.simulateClick($v_4);
                }
            }
            else if (commandId === 'Ribbon.ListForm.Display.Solution.ActivateSolution' || commandId === 'Ribbon.ListForm.Display.Solution.DeactivateSolution' || commandId === 'Ribbon.ListForm.Display.Solution.UpgradeSolution') {
                var $v_5 = $get($v_0.ElementClientId);
                var $v_6 = '';

                if ($v_5) {
                    $v_6 = $v_5.getAttribute('href');
                    if (!SP.Ribbon.SU.$2($v_6)) {
                        $v_6 = $v_6.replace('javascript:', '');
                    }
                }
                if (!SP.Ribbon.SU.$2($v_6)) {
                    this.executeClickScript($v_6);
                }
                else if ($v_5) {
                    this.simulateClick($v_5);
                }
            }
            else {
                if (!SP.Ribbon.SU.$2($v_0.ClickScript)) {
                    this.executeClickScript($v_0.ClickScript);
                }
            }
            return true;
        }
        if (commandId === 'Ribbon.ListForm.Edit.Clipboard.Cut') {
            this.executeClipboardCommand('Cut');
            return true;
        }
        else if (commandId === 'Ribbon.ListForm.Edit.Clipboard.Copy') {
            this.executeClipboardCommand('Copy');
            return true;
        }
        else if (commandId === 'Ribbon.ListForm.Edit.Clipboard.Paste') {
            this.executeClipboardCommand('Paste');
            return true;
        }
        return false;
    },
    executeClipboardCommand: function SP_Ribbon_ListFormWebPartPageComponent$executeClipboardCommand(commandName) {
        try {
            var $v_0 = document.body.ownerDocument.execCommand(commandName, false, null);

            if (!$v_0) {
                alert(SP.Res.errorClipboard);
            }
        }
        catch ($$e_2) {
            alert(SP.Res.errorClipboard);
        }
    },
    executeClickScript: function SP_Ribbon_ListFormWebPartPageComponent$executeClickScript(script) {
        SP.Ribbon.NativeUtility.executeClickScriptSimple(script);
    },
    getGlobalCommands: function SP_Ribbon_ListFormWebPartPageComponent$getGlobalCommands() {
        var $v_0 = SP.Ribbon.WebPartPageComponent.prototype.getGlobalCommands.call(this);

        Array.add($v_0, 'Ribbon.ListForm.Edit.Clipboard.Paste');
        Array.add($v_0, 'Ribbon.ListForm.Edit.Clipboard.Copy');
        Array.add($v_0, 'Ribbon.ListForm.Edit.Clipboard.Cut');
        return $v_0;
    },
    getFocusedCommands: function SP_Ribbon_ListFormWebPartPageComponent$getFocusedCommands() {
        return SP.Ribbon.WebPartPageComponent.prototype.getFocusedCommands.call(this);
    },
    addAlwaysEnabledCommands: function SP_Ribbon_ListFormWebPartPageComponent$addAlwaysEnabledCommands() {
        var $v_0 = this.get_alwaysEnabledCommands();

        $v_0['Ribbon.ListForm.Edit'] = true;
        $v_0['Ribbon.ListForm.Edit.CommitGroup'] = true;
        $v_0['Ribbon.ListForm.Edit.ActionsGroup'] = true;
        $v_0['Ribbon.ListForm.Edit.ClipboardGroup'] = true;
        $v_0['Ribbon.ListForm.Display'] = true;
        $v_0['Ribbon.ListForm.Display.ManageGroup'] = true;
        $v_0['Ribbon.ListForm.Display.HealthActionsGroup'] = true;
        $v_0['Ribbon.ListForm.Display.Solution.SolutionGroup'] = true;
        $v_0['Ribbon.ListForm.Display.ActionsGroup'] = true;
    },
    isFocusable: function SP_Ribbon_ListFormWebPartPageComponent$isFocusable() {
        return false;
    }
};
SP.Ribbon.DocLibWebPartPageComponent = function SP_Ribbon_DocLibWebPartPageComponent(id, data) {
    SP.Ribbon.DocLibWebPartPageComponent.initializeBase(this, [id, data]);
    this.$Y_4 = data.ViewId;
    this.$D_4 = data.ListId;
    this.$y_4 = data.ServerRelativeWebUrl;
};
SP.Ribbon.DocLibWebPartPageComponent.prototype = {
    $Y_4: null,
    $D_4: null,
    $y_4: null,
    handleCommand: function SP_Ribbon_DocLibWebPartPageComponent$handleCommand(commandId, properties, sequence) {
        var $v_0 = this.get_ctx();
        var $v_1 = this.getCountOfSelectedItems();

        if (commandId === 'PopulateSendToMenu') {
            properties.PopulationXML = this.$53_4();
            return true;
        }
        else if (commandId === 'PopulateNewDocumentMenu') {
            properties.PopulationJSON = this.getNewMenuXml('NewDocument', 'Ribbon.Document.All.NewDocument');
            return true;
        }
        else if (commandId === 'NewDocument') {
            var $v_2 = properties['CommandValueId'];

            this.executeClickScript($v_2);
            return true;
        }
        else if (commandId === 'NewDefaultDocument') {
            this.executeClickScript(this.getDefaultNewMenuItemScript());
            return true;
        }
        else if (commandId === 'SendToOfficialFile') {
            var $v_3 = properties['CommandValueId'];

            this.$2t_3($v_3);
            return true;
        }
        else if (commandId === 'ShareItem') {
            if (this.getCountOfSelectedItems() !== 1) {
                return true;
            }
            var $v_4 = this.selectedItemIds();

            if (!SP.Ribbon.SU.$2($v_4)) {
                var $v_5 = $v_4.split(',', 1);
                var $v_6 = $v_5[0];

                if (!SP.Ribbon.SU.$2(this.$y_4) && !SP.Ribbon.SU.$2(this.$D_4) && !SP.Ribbon.SU.$2($v_6)) {
                    var $$t_A = this;

                    EnsureScriptFunc('sharing.js', 'DisplaySharingDialog', function() {
                        window.self.DisplaySharingDialog($$t_A.$y_4, $$t_A.$D_4, $v_6);
                    });
                }
            }
        }
        return SP.Ribbon.ListViewWebPartPageComponent.prototype.handleCommand.call(this, commandId, properties, sequence);
    },
    addAlwaysEnabledCommands: function SP_Ribbon_DocLibWebPartPageComponent$addAlwaysEnabledCommands() {
        SP.Ribbon.ListViewWebPartPageComponent.prototype.addAlwaysEnabledCommands.call(this);
        var $v_0 = this.get_alwaysEnabledCommands();

        $v_0['DocumentNewGroup'] = true;
        $v_0['DocumentTab'] = true;
        $v_0['DocumentEditCheckoutGroup'] = true;
        $v_0['DocumentCopiesGroup'] = true;
        $v_0['DocumentManageGroup'] = true;
        $v_0['DocumentPublishingGroup'] = true;
        $v_0['FormActionsGroup'] = true;
        $v_0['DocumentsQuickStepsGroup'] = true;
        $v_0['LibraryTab'] = true;
        $v_0['SettingsGroup'] = true;
        $v_0['ActionsGroup'] = true;
        $v_0['LibraryNavigationGroup'] = true;
    },
    canHandleCommand: function SP_Ribbon_DocLibWebPartPageComponent$canHandleCommand(commandId) {
        if (commandId === 'UploadDocumentMenuOpen') {
            return SP.Ribbon.ListViewWebPartPageComponent.prototype.canHandleCommand.call(this, 'UploadDocument');
        }
        if (commandId === 'NewDefaultDocument' || commandId === 'PopulateNewDocumentMenu' || commandId === 'NewDocument') {
            return !SP.Ribbon.SU.$0(this.get_newMenuData());
        }
        if (commandId === 'NewDocumentMenuOpen') {
            if (SP.Ribbon.SU.$0(this.get_newMenuData())) {
                return false;
            }
            return (this.get_newMenuData()).length > 0;
        }
        if (commandId === 'SendToOfficialFile') {
            return this.canHandleECBCommand('SendToOfficialFile0');
        }
        if (commandId === 'ShareItem') {
            return this.getCountOfSelectedItems() === 1;
        }
        return SP.Ribbon.ListViewWebPartPageComponent.prototype.canHandleCommand.call(this, commandId);
    },
    $53_4: function SP_Ribbon_DocLibWebPartPageComponent$$53_4() {
        var $v_0;
        var $v_1 = new Sys.StringBuilder();

        $v_1.append('<Menu Id=\'Ribbon.Document.All.SendTo.Menu\'>');
        $v_1.append('<MenuSection Id=\'Ribbon.Document.All.SendTo.Menu.Items\' DisplayMode=\'Menu16\'>');
        $v_1.append('<Controls Id=\'Ribbon.Document.All.SendTo.Menu.Items.Controls\'>');
        if (this.canHandleECBCommand('SendToRecommendedLocation')) {
            $v_1.append('<Button');
            $v_1.append(' Id=\'Ribbon.Document.All.SendTo.Menu.Items.RecommendedLocation\'');
            $v_1.append(' Command=\'');
            $v_1.append('SendToRecommendedLocation');
            $v_1.append('\' LabelText=\'');
            $v_0 = this.$t_3('SendToRecommendedLocation');
            $v_1.append(SP.Utilities.HttpUtility.htmlEncode(($v_0.attributes.getNamedItem('text')).value));
            $v_1.append('\'');
            $v_1.append('/>');
        }
        if (this.canHandleECBCommand('SendToExistingCopies')) {
            $v_1.append('<Button');
            $v_1.append(' Id=\'Ribbon.Document.All.SendTo.Menu.Items.ExistingCopies\'');
            $v_1.append(' Command=\'');
            $v_1.append('SendToExistingCopies');
            $v_1.append('\' Image16by16=\'' + SP.Utilities.Utility.get_layoutsLatestVersionUrl() + 'images/existingLocations.gif\'');
            $v_1.append(' LabelText=\'');
            $v_0 = this.$t_3('SendToExistingCopies');
            $v_1.append(SP.Utilities.HttpUtility.htmlEncode(($v_0.attributes.getNamedItem('text')).value));
            $v_1.append('\'');
            $v_1.append('/>');
        }
        $v_1.append('<Button');
        $v_1.append(' Id=\'Ribbon.Document.All.SendTo.Menu.Items.OtherLocation\'');
        $v_1.append(' Command=\'');
        $v_1.append('SendToOtherLocation');
        $v_1.append('\' Image16by16=\'' + SP.Utilities.Utility.get_layoutsLatestVersionUrl() + 'images/sendOtherLoc.gif\'');
        $v_1.append(' LabelText=\'');
        $v_0 = this.$t_3('SendToOtherLocation');
        if (!SP.Ribbon.SU.$0($v_0)) {
            $v_1.append(SP.Utilities.HttpUtility.htmlEncode(($v_0.attributes.getNamedItem('text')).value));
        }
        else {
            $v_1.append(SP.Utilities.HttpUtility.htmlEncode(SP.Res.sendToOtherLocation));
        }
        $v_1.append('\'');
        $v_1.append('/>');
        var $v_2 = 0;

        while (true) {
            var $v_3 = 'SendToOfficialFile' + $v_2.toString();

            if (this.canHandleECBCommand($v_3)) {
                $v_1.append('<Button');
                $v_1.append(' Id=\'Ribbon.Document.All.SendTo.Menu.Items.OfficialFile');
                $v_1.append($v_2.toString());
                $v_1.append('\'');
                $v_1.append(' Command=\'');
                $v_1.append('SendToOfficialFile');
                $v_1.append('\'');
                $v_1.append(' MenuItemId=\'');
                $v_1.append(SP.Utilities.HttpUtility.htmlEncode($v_3));
                $v_1.append('\'');
                $v_1.append(' CommandValueId=\'');
                $v_1.append(SP.Utilities.HttpUtility.htmlEncode($v_3));
                $v_1.append('\'');
                $v_1.append(' CommandType=\'OptionSelection\'');
                $v_1.append(' LabelText=\'');
                $v_0 = this.$t_3($v_3);
                $v_1.append(SP.Utilities.HttpUtility.htmlEncode(($v_0.attributes.getNamedItem('text')).value));
                $v_1.append('\'');
                $v_1.append('/>');
            }
            else {
                break;
            }
            $v_2++;
        }
        if (this.canHandleECBCommand('CreateDocumentWorkspace')) {
            $v_1.append('<Button');
            $v_1.append(' Id=\'Ribbon.Document.All.SendTo.Menu.Items.CreateDocumentWorkspace\'');
            $v_1.append(' Command=\'');
            $v_1.append('CreateDocumentWorkspace');
            $v_1.append('\' LabelText=\'');
            $v_0 = this.$t_3('CreateDocumentWorkspace');
            $v_1.append(SP.Utilities.HttpUtility.htmlEncode(($v_0.attributes.getNamedItem('text')).value));
            $v_1.append('\'');
            $v_1.append('/>');
        }
        $v_1.append('</Controls>');
        $v_1.append('</MenuSection>');
        $v_1.append('</Menu>');
        return $v_1.toString();
    },
    getGlobalCommands: function SP_Ribbon_DocLibWebPartPageComponent$getGlobalCommands() {
        return SP.Ribbon.ListViewWebPartPageComponent.prototype.getGlobalCommands.call(this);
    },
    getFocusedCommands: function SP_Ribbon_DocLibWebPartPageComponent$getFocusedCommands() {
        var $v_0 = SP.Ribbon.ListViewWebPartPageComponent.prototype.getFocusedCommands.call(this);

        Array.add($v_0, 'ViewProperties');
        Array.add($v_0, 'EditProperties');
        Array.add($v_0, 'EditDocument');
        Array.add($v_0, 'ManagePermissions');
        Array.add($v_0, 'Delete');
        Array.add($v_0, 'CheckOut');
        Array.add($v_0, 'CheckIn');
        Array.add($v_0, 'DiscardCheckOut');
        Array.add($v_0, 'EmailLink');
        Array.add($v_0, 'ShareItem');
        Array.add($v_0, 'Publish');
        Array.add($v_0, 'Unpublish');
        Array.add($v_0, 'CancelApproval');
        Array.add($v_0, 'ViewVersions');
        Array.add($v_0, 'Subscribe');
        Array.add($v_0, 'GotoSourceItem');
        Array.add($v_0, 'SendTo');
        Array.add($v_0, 'SendToOtherLocation');
        Array.add($v_0, 'SendToExistingCopies');
        Array.add($v_0, 'SendToRecommendedLocation');
        Array.add($v_0, 'CreateDocumentWorkspace');
        Array.add($v_0, 'PopulateSendToMenu');
        Array.add($v_0, 'NewDocumentMenuOpen');
        Array.add($v_0, 'DownloadCopy');
        Array.add($v_0, 'EmailDocumentLink');
        Array.add($v_0, 'SendToOfficialFile');
        Array.add($v_0, 'NewDocument');
        Array.add($v_0, 'PopulateNewDocumentMenu');
        Array.add($v_0, 'NewDefaultDocument');
        Array.add($v_0, 'UploadDocumentMenuOpen');
        return $v_0;
    },
    get_viewDropDownIdPrefix: function SP_Ribbon_DocLibWebPartPageComponent$get_viewDropDownIdPrefix() {
        return 'Ribbon.Library.CustomViews.DisplayView';
    }
};
SP.Ribbon.GenericListWebPartPageComponentData = function SP_Ribbon_GenericListWebPartPageComponentData() {
    SP.Ribbon.GenericListWebPartPageComponentData.initializeBase(this);
};
SP.Ribbon.GenericListWebPartPageComponent = function SP_Ribbon_GenericListWebPartPageComponent(id, data) {
    SP.Ribbon.GenericListWebPartPageComponent.initializeBase(this, [id, data]);
};
SP.Ribbon.GenericListWebPartPageComponent.prototype = {
    canHandleCommand: function SP_Ribbon_GenericListWebPartPageComponent$canHandleCommand(commandId) {
        if (commandId === 'NewListItemMenuOpen') {
            if (SP.Ribbon.SU.$0(this.get_newMenuData())) {
                return false;
            }
            return (this.get_newMenuData()).length > 0;
        }
        if (commandId === 'NewDefaultListItem' || commandId === 'PopulateNewListItemMenu' || commandId === 'NewListItem') {
            return !SP.Ribbon.SU.$0(this.get_newMenuData());
        }
        if (SP.Ribbon.ListViewWebPartPageComponent.prototype.canHandleCommand.call(this, commandId)) {
            return true;
        }
        return false;
    },
    handleCommand: function SP_Ribbon_GenericListWebPartPageComponent$handleCommand(commandId, properties, sequence) {
        if (commandId === 'PopulateNewListItemMenu') {
            properties.PopulationJSON = this.getNewMenuXml('NewListItem', 'Ribbon.Document.All.NewListItem');
            return true;
        }
        else if (commandId === 'NewListItem') {
            var $v_0 = properties['CommandValueId'];

            this.executeClickScript($v_0);
            return true;
        }
        else if (commandId === 'NewDefaultListItem') {
            this.executeClickScript(this.getDefaultNewMenuItemScript());
            return true;
        }
        return SP.Ribbon.ListViewWebPartPageComponent.prototype.handleCommand.call(this, commandId, properties, sequence);
    },
    getGlobalCommands: function SP_Ribbon_GenericListWebPartPageComponent$getGlobalCommands() {
        return SP.Ribbon.ListViewWebPartPageComponent.prototype.getGlobalCommands.call(this);
    },
    getFocusedCommands: function SP_Ribbon_GenericListWebPartPageComponent$getFocusedCommands() {
        var $v_0 = SP.Ribbon.ListViewWebPartPageComponent.prototype.getFocusedCommands.call(this);

        Array.add($v_0, 'ViewProperties');
        Array.add($v_0, 'EditProperties');
        Array.add($v_0, 'ManagePermissions');
        Array.add($v_0, 'Delete');
        Array.add($v_0, 'ViewVersions');
        Array.add($v_0, 'Subscribe');
        Array.add($v_0, 'NewListItemMenuOpen');
        Array.add($v_0, 'NewDefaultListItem');
        Array.add($v_0, 'PopulateNewListItemMenu');
        Array.add($v_0, 'NewListItem');
        return $v_0;
    },
    addAlwaysEnabledCommands: function SP_Ribbon_GenericListWebPartPageComponent$addAlwaysEnabledCommands() {
        SP.Ribbon.ListViewWebPartPageComponent.prototype.addAlwaysEnabledCommands.call(this);
        var $v_0 = this.get_alwaysEnabledCommands();

        $v_0['ListItemTab'] = true;
        $v_0['ListTab'] = true;
        $v_0['ListItemManageGroup'] = true;
        $v_0['ListItemNewGroup'] = true;
        $v_0['ListItemPublishingGroup'] = true;
        $v_0['ListItemWorkflowGroup'] = true;
        $v_0['ListItemQuickStepsGroup'] = true;
        $v_0['SettingsGroup'] = true;
        $v_0['ActionsGroup'] = true;
        $v_0['LibraryNavigationGroup'] = true;
    }
};
SP.Ribbon.SolutionsPageComponent = function SP_Ribbon_SolutionsPageComponent(id, data) {
    SP.Ribbon.SolutionsPageComponent.initializeBase(this, [id, data]);
    this.$Y_4 = data.ViewId;
};
SP.Ribbon.SolutionsPageComponent.prototype = {
    $Y_4: null,
    get_alwaysEnabledCommands: function SP_Ribbon_SolutionsPageComponent$get_alwaysEnabledCommands() {
        if (SP.Ribbon.SU.$0(this._alwaysEnabledCommands)) {
            this._alwaysEnabledCommands = SP.Ribbon.WebPartPageComponent.prototype.get_alwaysEnabledCommands.call(this);
            this._alwaysEnabledCommands['NewDocument'] = true;
            this._alwaysEnabledCommands['UploadDocumentMenuOpen'] = true;
            this._alwaysEnabledCommands['SolutionTab'] = true;
            this._alwaysEnabledCommands['DocumentAllGroup'] = true;
            this._alwaysEnabledCommands['DocumentNewGroup'] = true;
            this._alwaysEnabledCommands['DocumentShareGroup'] = true;
            this._alwaysEnabledCommands['DocumentManageGroup'] = true;
            this._alwaysEnabledCommands['LibraryTab'] = true;
            this._alwaysEnabledCommands['SettingsGroup'] = true;
            this._alwaysEnabledCommands['ActionsGroup'] = true;
            this._alwaysEnabledCommands['LibraryNavigationGroup'] = true;
        }
        return this._alwaysEnabledCommands;
    },
    canHandleCommand: function SP_Ribbon_SolutionsPageComponent$canHandleCommand(commandId) {
        if (commandId === 'SolutionTab' || commandId === 'LibraryTab') {
            return true;
        }
        return SP.Ribbon.ListViewWebPartPageComponent.prototype.canHandleCommand.call(this, commandId);
    },
    getGlobalCommands: function SP_Ribbon_SolutionsPageComponent$getGlobalCommands() {
        var $v_0 = SP.Ribbon.ListViewWebPartPageComponent.prototype.getGlobalCommands.call(this);

        Array.add($v_0, 'Delete');
        Array.add($v_0, 'ActivateSolution');
        Array.add($v_0, 'DeactivateSolution');
        Array.add($v_0, 'UpgradeSolution');
        return $v_0;
    },
    getFocusedCommands: function SP_Ribbon_SolutionsPageComponent$getFocusedCommands() {
        return SP.Ribbon.ListViewWebPartPageComponent.prototype.getFocusedCommands.call(this);
    }
};
SP.Ribbon.WikiPageComponent = function SP_Ribbon_WikiPageComponent() {
    this.$$d_$5u_1 = Function.createDelegate(this, this.$5u_1);
    this.$$d_$4J_1 = Function.createDelegate(this, this.$4J_1);
    this.$$d_$4F_1 = Function.createDelegate(this, this.$4F_1);
    this.$$d_$48_1 = Function.createDelegate(this, this.$48_1);
    this.$$d_$25_1 = Function.createDelegate(this, this.$25_1);
    this.$$d_$4D_1 = Function.createDelegate(this, this.$4D_1);
    this.$$d_$4b_1 = Function.createDelegate(this, this.$4b_1);
    this.$$d_$4U_1 = Function.createDelegate(this, this.$4U_1);
    this.$$d_$4S_1 = Function.createDelegate(this, this.$4S_1);
    this.$$d_$4V_1 = Function.createDelegate(this, this.$4V_1);
    this.$$d_$1V_1 = Function.createDelegate(this, this.$1V_1);
    this.$$d_$5r_1 = Function.createDelegate(this, this.$5r_1);
    SP.Ribbon.WikiPageComponent.initializeBase(this);
};
SP.Ribbon.WikiPageComponent.registerWithPageManager = function SP_Ribbon_WikiPageComponent$registerWithPageManager(initInfo) {
    if (SP.Ribbon.WikiPageComponent.$3) {
        SP.Ribbon.WikiPageComponent.unregisterWithPageManager();
        SP.Ribbon.WikiPageComponent.$3 = null;
    }
    SP.Ribbon.WikiPageComponent.$3 = new SP.Ribbon.WikiPageComponent();
    SP.Ribbon.WikiPageComponent.$3.$2S_1(initInfo);
    (SP.Ribbon.PageManager.get_instance()).addPageComponent(SP.Ribbon.WikiPageComponent.$3);
    SP.Ribbon.PageState.PageStateHandler.setHandleSaveMenu(false);
    if (initInfo.editMode) {
        SP.Ribbon.WikiPageComponent.$3C();
        if (!SP.Ribbon.SU.$0(SP.Ribbon.WikiPageComponent.$Z)) {
            SP.Ribbon.WikiPageComponent.$Z.editingPageCallback();
        }
    }
    if (!SP.Ribbon.SU.$2(initInfo.conflictMergeTargetStatusHtml)) {
        SP.Ribbon.SaveConflictHandler.$62(initInfo.conflictMergeTargetStatusHtml);
    }
};
SP.Ribbon.WikiPageComponent.unregisterWithPageManager = function SP_Ribbon_WikiPageComponent$unregisterWithPageManager() {
    if (SP.Ribbon.WikiPageComponent.$3) {
        (SP.Ribbon.PageManager.get_instance()).removePageComponent(SP.Ribbon.WikiPageComponent.$3);
        SP.Ribbon.PageState.PageStateHandler.setHandleSaveMenu(true);
    }
};
SP.Ribbon.WikiPageComponent.get_instance = function SP_Ribbon_WikiPageComponent$get_instance() {
    return SP.Ribbon.WikiPageComponent.$3;
};
SP.Ribbon.WikiPageComponent.$2h = function SP_Ribbon_WikiPageComponent$$2h() {
    return !SP.Ribbon.WikiPageComponent.$O && SP.Ribbon.WikiPageComponent.$C();
};
SP.Ribbon.WikiPageComponent.$2j = function SP_Ribbon_WikiPageComponent$$2j() {
    return !SP.Ribbon.WikiPageComponent.$O && SP.Ribbon.WikiPageComponent.$C();
};
SP.Ribbon.WikiPageComponent.$C = function SP_Ribbon_WikiPageComponent$$C() {
    var $v_0 = false;
    var $v_1 = $get('_wikiPageMode');

    if ($v_1) {
        $v_0 = $v_1.value === 'Edit';
    }
    return $v_0;
};
SP.Ribbon.WikiPageComponent.$3G = function SP_Ribbon_WikiPageComponent$$3G() {
    return !SP.Ribbon.SU.$0($get('_wikiPageMode'));
};
SP.Ribbon.WikiPageComponent.$4W = function SP_Ribbon_WikiPageComponent$$4W($p0, $p1, $p2) {
    var $v_0 = $p1[CUI.Controls.DropDownCommandProperties.SelectedItemId];

    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        return false;
    }
    var $v_1 = $v_0.lastIndexOf('.');

    if ($v_1 < 0) {
        return false;
    }
    var $v_2 = $v_0.substring(0, $v_1 + 1);
    var $v_3 = $v_2;

    if (SP.Ribbon.WikiPageComponent.$C()) {
        $v_3 += 'SaveAndStop';
    }
    else {
        $v_3 += 'Edit';
    }
    $p1[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $v_3;
    return true;
};
SP.Ribbon.WikiPageComponent.$3C = function SP_Ribbon_WikiPageComponent$$3C() {
    if (SP.Ribbon.WikiPageComponent.$1r) {
        return;
    }
    var $v_0 = window._spWikiPageNameEditorFlag;

    if ($v_0) {
        if (SP.Ribbon.SU.$0(SP.Ribbon.WikiPageComponent.$Z)) {
            var $v_1 = window._spWikiPageNameDisplayElemId;
            var $v_2 = window._spWikiPageNameEditElemId;
            var $v_3 = window._spWikiPageNameEditTextBoxId;

            SP.Ribbon.WikiPageComponent.$Z = new SP.Application.UI.WikiPageNameInPlaceEditor(window.document, $v_1, $v_2, $v_3);
        }
    }
    SP.Ribbon.WikiPageComponent.$1r = true;
};
SP.Ribbon.WikiPageComponent.$4X = function SP_Ribbon_WikiPageComponent$$4X($p0, $p1, $p2) {
    if ($p1) {
        CUI.RibbonCommand.serverButton($p1['SourceControlId'], $p1['MenuItemId']);
    }
    return true;
};
SP.Ribbon.WikiPageComponent.$5R = function SP_Ribbon_WikiPageComponent$$5R($p0, $p1, $p2, $p3) {
    window._wikiCallback($p0, $p1, $p2, $p3);
};
SP.Ribbon.WikiPageComponent.$43 = function SP_Ribbon_WikiPageComponent$$43() {
    var $v_0 = new Sys.StringBuilder();

    $v_0.append('\r\n<table style=\'padding:10px;\'>\r\n    <tr>\r\n        <td><img src=\'' + SP.Utilities.Utility.get_layoutsLatestVersionUrl() + 'images/warning32by32.gif\' alt=\'\' /></td>\r\n        <td>');
    $v_0.append(SP.Utilities.HttpUtility.htmlEncode(SP.Res.saveChangeDialogDesc));
    $v_0.append('</td>\r\n    </tr>\r\n    <tr>\r\n        <td></td>\r\n        <td nowrap align=\'center\'>\r\n            <input type=\'button\' id=\'SaveDlgYes\' class=\'ms-NarrowButtonHeightWidth\' onclick=\'SP.Ribbon.WikiPageComponent.saveDialogClick(0)\' value=\'');
    $v_0.append(SP.Utilities.HttpUtility.htmlEncode(SP.Res.buttonSave));
    $v_0.append('\' />\r\n            <span class=\'ms-SpaceBetButtons\'>&#160;</span>\r\n            <input type=\'button\' id=\'SaveDlgNo\' class=\'ms-NarrowButtonHeightWidth\' onclick=\'SP.Ribbon.WikiPageComponent.saveDialogClick(1)\' value=\'');
    $v_0.append(SP.Utilities.HttpUtility.htmlEncode(SP.Res.buttonDiscardChanges));
    $v_0.append('\' />\r\n            <span class=\'ms-SpaceBetButtons\'>&#160;</span>\r\n            <input type=\'button\' id=\'SaveDlgCancel\' class=\'ms-NarrowButtonHeightWidth\' onclick=\'SP.Ribbon.WikiPageComponent.saveDialogClick(2)\' value=\'');
    $v_0.append(SP.Utilities.HttpUtility.htmlEncode(SP.Res.buttonCancel));
    $v_0.append('\' />\r\n        </td>\r\n    </tr>\r\n    <tr><td style=\'height:3px;\'></td></tr>\r\n</table>\r\n');
    var $v_1 = document.createElement('DIV');

    $v_1.innerHTML = $v_0.toString();
    $v_1 = ($v_1.getElementsByTagName('table'))[0];
    return $v_1;
};
SP.Ribbon.WikiPageComponent.saveDialogClick = function SP_Ribbon_WikiPageComponent$saveDialogClick(result) {
    if (!result) {
        (SP.UI.ModalDialog.get_childDialog()).set_returnValue('PageStateGroupSaveAndStop');
        (SP.UI.ModalDialog.get_childDialog()).close(1);
    }
    else if (result === 1) {
        (SP.UI.ModalDialog.get_childDialog()).set_returnValue('PageStateGroupDontSaveAndStop');
        (SP.UI.ModalDialog.get_childDialog()).close(1);
    }
    else {
        (SP.UI.ModalDialog.get_childDialog()).close(0);
    }
};
SP.Ribbon.WikiPageComponent.prototype = {
    $1_1: null,
    $2S_1: function SP_Ribbon_WikiPageComponent$$2S_1($p0) {
        this.$1_1 = $p0;
        var $v_0 = this.$1_1.itemPermMasks;

        if (!SP.BasePermissions.isInstanceOfType($v_0)) {
            this.$1_1.itemPermMasks = new SP.BasePermissions();
            if (!this.$1_1.itemPermMasks.customFromJson($v_0)) {
                this.$1_1.itemPermMasks.fromJson($v_0);
            }
        }
        $v_0 = this.$1_1.listPermMasks;
        if (!SP.BasePermissions.isInstanceOfType($v_0)) {
            this.$1_1.listPermMasks = new SP.BasePermissions();
            if (!this.$1_1.listPermMasks.customFromJson($v_0)) {
                this.$1_1.listPermMasks.fromJson($v_0);
            }
        }
    },
    getGlobalCommands: function SP_Ribbon_WikiPageComponent$getGlobalCommands() {
        if (!SP.Ribbon.WikiPageComponent.$T) {
            SP.Ribbon.WikiPageComponent.$T = ['CheckoutMenuOpen', 'CPEditTab', 'PageStateGroupEdit', 'EditAndCheckoutGroup', 'EditMobilePageMenuOpen', 'EditInDesigner', 'EditingGroup', 'EditingToolsContextualGroup', 'RenamePage', 'LibrarySettingsGroup', 'LinksGroup', 'MediaGroup', 'NotificationsGroup', 'PageActionsGroup', 'PageLayoutGroup', 'PageStateGroupDontSaveAndStop', 'PageStateGroupSave', 'PageStateGroupSaveAndPublish', 'PageStateGroupSaveAndStop', 'PageStateGroupStopEditing', 'PageStateGroupOpenMenuSave', 'PageStateGroupQuerySaveMenu', 'PageStateGroupSaveSplit', 'PublishingGroup', 'ServerButton', 'ShareGroup', 'TablesGroup', 'TrackTab', 'WebPartsGroup', 'WikiEditWebPart', 'WikiPageTab'];
        }
        return SP.Ribbon.WikiPageComponent.$T;
    },
    canHandleCommand: function SP_Ribbon_WikiPageComponent$canHandleCommand(commandId) {
        this.$5O_1();
        var $v_0 = this.$K_1[commandId];

        if (!SP.Ribbon.SU.$0($v_0)) {
            var $v_1 = $v_0;

            return $v_1();
        }
        if (!SP.Ribbon.WikiPageComponent.$10) {
            SP.Ribbon.WikiPageComponent.$10 = {};
            var $v_2 = this.getGlobalCommands();

            if ($v_2) {
                var $v_4 = $v_2.length;

                for (var $v_5 = 0; $v_5 < $v_4; $v_5++) {
                    SP.Ribbon.WikiPageComponent.$10[$v_2[$v_5]] = true;
                }
            }
            var $v_3 = this.getFocusedCommands();

            if ($v_3) {
                var $v_6 = $v_3.length;

                for (var $v_7 = 0; $v_7 < $v_6; $v_7++) {
                    SP.Ribbon.WikiPageComponent.$10[$v_3[$v_7]] = true;
                }
            }
        }
        return !SP.Ribbon.SU.$0(SP.Ribbon.WikiPageComponent.$10[commandId]);
    },
    handleCommand: function SP_Ribbon_WikiPageComponent$handleCommand(commandId, properties, sequence) {
        return this.$37_1(commandId, properties, sequence);
    },
    $37_1: function SP_Ribbon_WikiPageComponent$$37_1($p0, $p1, $p2) {
        this.$3B_1();
        var $v_0 = this.$E_1[$p0];

        if (!SP.Ribbon.SU.$0($v_0)) {
            var $v_1 = $v_0;

            return $v_1($p0, $p1, $p2);
        }
        return true;
    },
    getId: function SP_Ribbon_WikiPageComponent$getId() {
        return 'WikiPageComponent';
    },
    $4D_1: function SP_Ribbon_WikiPageComponent$$4D_1() {
        return this.$25_1() || SP.Ribbon.WikiPageComponent.$2h() || SP.Ribbon.WikiPageComponent.$2j();
    },
    $25_1: function SP_Ribbon_WikiPageComponent$$25_1() {
        return !SP.Ribbon.WikiPageComponent.$O && !SP.Ribbon.WikiPageComponent.$C() && this.$1_1.editable;
    },
    $48_1: function SP_Ribbon_WikiPageComponent$$48_1() {
        return this.$25_1() && this.$1_1.listPermMasks.has(12) && this.$1_1.listPermMasks.has(19);
    },
    $4S_1: function SP_Ribbon_WikiPageComponent$$4S_1($p0, $p1, $p2) {
        var $v_0 = $p1['CommandValueId'];

        return this.$37_1($v_0, $p1, $p2);
    },
    get_$3Z_1: function SP_Ribbon_WikiPageComponent$get_$3Z_1() {
        if (window.SPAutoSaveIsPageDirty && window.SPAutoSaveIsPageDirty()) {
            return true;
        }
        return false;
    },
    $4V_1: function SP_Ribbon_WikiPageComponent$$4V_1($p0, $p1, $p2) {
        if (!SP.Ribbon.WikiPageComponent.$O) {
            CUI.PMetrics.perfMark(7111);
            var $v_0 = '<img src=\"' + SP.Utilities.Utility.get_layoutsLatestVersionUrl() + 'images/loadingcirclests16.gif\" style=\"vertical-align: middle\" />';

            $v_0 += SP.Utilities.HttpUtility.htmlEncode(SP.Res.saving);
            var $v_1 = SP.UI.Notify.addNotification($v_0, true);
            var $v_2 = $v_1;
            var $v_3 = -1;
            var $$t_D = this;
            var $v_4 = function($p1_0, $p1_1) {
                window.clearTimeout($v_3);
                SP.Ribbon.WikiPageComponent.$O = false;
                SP.UI.Notify.removeNotification($v_2);
                SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload = false;
                if (!SP.Ribbon.SU.$2($p1_0)) {
                    eval($p1_0);
                }
                CUI.PMetrics.perfMark(7112);
            };
            var $$t_E = this;
            var $v_5 = function($p1_0, $p1_1) {
                window.clearTimeout($v_3);
                SP.Ribbon.WikiPageComponent.$O = false;
                SP.UI.Notify.removeNotification($v_2);
                SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload = false;
                if (SP.Ribbon.SU.$2($p1_0)) {
                    $p1_0 = SP.Res.saveFailed;
                }
                alert($p1_0);
            };

            SP.Ribbon.WikiPageComponent.$O = true;
            var $$t_F = this;

            $v_3 = window.setTimeout(function() {
                SP.Ribbon.WikiPageComponent.$O = false;
                SP.UI.Notify.removeNotification($v_2);
                alert(SP.Res.wikiPageSaveTimeoutError);
            }, 60000);
            SP.Ribbon.WikiPageComponent.$5R('PageStateGroupSave', $v_4, null, $v_5);
        }
        return true;
    },
    $1V_1: function SP_Ribbon_WikiPageComponent$$1V_1($p0, $p1, $p2) {
        if (!SP.Ribbon.WikiPageComponent.$O) {
            if ('PageStateGroupStopEditing' === $p0) {
                if (this.get_$3Z_1()) {
                    this.$63_1();
                    return true;
                }
                else {
                    $p0 = 'PageStateGroupDontSaveAndStop';
                }
            }
            if ($p0 === 'EditInDesigner') {
                var $v_4 = window.self.ajaxNavigate;

                EditInSPD($v_4.get_href(), false);
                return true;
            }
            var $v_0 = null;
            var $v_1;
            var $v_2 = '<img src=\"' + SP.Utilities.Utility.get_layoutsLatestVersionUrl() + 'images/loadingcirclests16.gif\" style=\"vertical-align: middle\" />';
            var $v_3 = false;

            switch ($p0) {
            case 'PageStateGroupEdit':
                $v_1 = 'Ribbon.WikiPageTab.EditAndCheckout.SaveEdit.Menu.SaveEdit.Edit';
                $v_2 += SP.Utilities.HttpUtility.htmlEncode(SP.Res.autocompleteLoading);
                break;
            case 'PageStateGroupDontSaveAndStop':
                $v_1 = 'Ribbon.WikiPageTab.EditAndCheckout.SaveEdit.Menu.SaveEdit.Revert';
                $v_2 += SP.Utilities.HttpUtility.htmlEncode(SP.Res.genericLoading);
                $v_3 = true;
                break;
            case 'PageStateGroupSaveAndStop':
                $v_1 = 'Ribbon.WikiPageTab.EditAndCheckout.SaveEdit.Menu.SaveEdit.SaveAndStop';
                $v_2 += SP.Utilities.HttpUtility.htmlEncode(SP.Res.saving);
                $v_3 = true;
                break;
            default:
                return false;
            }
            if ($p0 === 'PageStateGroupEdit' && SP.Ribbon.PageState.ImportedNativeData && SP.Ribbon.PageState.ImportedNativeData.PageState && (SP.Ribbon.PageState.ImportedNativeData.PageState['DocLibCheckoutRequired'] || this.$1_1.missingRequiredFields) && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToCurrentUser']) {
                if (!confirm(window.Strings.STS.L_ConfirmCheckout_Text)) {
                    return true;
                }
            }
            if ($v_3) {
                if (typeof window.SP.UI !== 'undefined' && typeof window.SP.UI.Rte !== 'undefined' && typeof window.SP.UI.Rte.SnapshotManager !== 'undefined' && typeof window.SP.UI.Rte.SnapshotManager.clear !== 'undefined') {
                    window.SP.UI.Rte.SnapshotManager.clear();
                }
            }
            if (!SP.Ribbon.WebPartComponent.get_$5U() && ($p0 === 'PageStateGroupDontSaveAndStop' || $p0 === 'PageStateGroupSaveAndStop')) {
                var $v_5 = $get('_wikiPageCommand');

                $v_5.value = $p0;
                $v_5 = $get('MSOWebPartPage_Shared');
                if ($v_5) {
                    $v_5.value = '';
                }
                $v_5 = $get('MSOLayout_InDesignMode');
                if ($v_5) {
                    $v_5.value = '0';
                }
                $v_5 = $get('MSOSPWebPartManager_DisplayModeName');
                if ($v_5) {
                    $v_5.value = 'Browse';
                }
                var $v_6 = this.$1_1.postbackScript;

                eval($v_6);
                return true;
            }
            if (CUI.RibbonCommand.serverQueryButton($v_1)) {
                $v_0 = SP.UI.Notify.addNotification($v_2, true);
            }
            CUI.PMetrics.perfMark(7111);
            CUI.RibbonCommand.serverButton($v_1, null);
            if ($v_0) {
                SP.Ribbon.WikiPageComponent.$O = true;
                var $v_7 = null;
                var $v_8 = $v_0;
                var $$t_J = this;
                var $v_9 = function($p1_0, $p1_1) {
                    if ($v_7) {
                        (Sys.WebForms.PageRequestManager.getInstance()).remove_pageLoaded($v_7);
                    }
                    $v_7 = null;
                    SP.Ribbon.UtilityInternal.$i();
                    CUI.PMetrics.perfMark(7112);
                };

                $v_7 = $v_9;
                (Sys.WebForms.PageRequestManager.getInstance()).add_pageLoaded($v_9);
                var $v_A = null;
                var $$t_K = this;
                var $v_B = function($p1_0, $p1_1) {
                    SP.UI.Notify.removeNotification($v_8);
                    SP.Ribbon.WikiPageComponent.$O = false;
                    if (!SP.Ribbon.SU.$0($p1_1.get_error())) {
                        if ($v_7) {
                            (Sys.WebForms.PageRequestManager.getInstance()).remove_pageLoaded($v_7);
                        }
                        $v_7 = null;
                        if ($v_A) {
                            (Sys.WebForms.PageRequestManager.getInstance()).remove_endRequest($v_A);
                        }
                        $v_A = null;
                        if (!$p1_1.get_errorHandled()) {
                            alert(($p1_1.get_error()).message);
                            $p1_1.set_errorHandled(true);
                        }
                    }
                };

                $v_A = $v_B;
                (Sys.WebForms.PageRequestManager.getInstance()).add_endRequest($v_B);
                switch ($p0) {
                case 'PageStateGroupEdit':
                    SP.Ribbon.WikiPageComponent.$3C();
                    if (!SP.Ribbon.SU.$0(SP.Ribbon.WikiPageComponent.$Z)) {
                        SP.Ribbon.WikiPageComponent.$Z.editingPageCallback();
                    }
                    break;
                case 'PageStateGroupDontSaveAndStop':
                    break;
                case 'PageStateGroupSaveAndStop':
                    if (!SP.Ribbon.SU.$0(SP.Ribbon.WikiPageComponent.$Z)) {
                        SP.Ribbon.WikiPageComponent.$Z.savingPageCallback();
                    }
                    break;
                default:
                    break;
                }
            }
        }
        return true;
    },
    $4F_1: function SP_Ribbon_WikiPageComponent$$4F_1() {
        return SP.Ribbon.WikiPageComponent.$1r && window._spWikiPageNameEditorFlag;
    },
    $4U_1: function SP_Ribbon_WikiPageComponent$$4U_1($p0, $p1, $p2) {
        var $v_0 = new SP.UI.DialogOptions();

        $v_0.url = SP.Utilities.Utility.getLayoutsPageUrl('RenamePageDialog.aspx');
        var $v_1 = window._spWikiPageNameDisplayElemId;

        $v_0.url += '?Source=' + GetSource(document.URL);
        $v_0.dialogReturnValueCallback = this.$$d_$5r_1;
        $v_0.title = SP.Res.renamePageDialog_Title;
        SP.UI.ModalDialog.showModalDialog($v_0);
        return true;
    },
    $5r_1: function SP_Ribbon_WikiPageComponent$$5r_1($p0, $p1) {
        if ($p0 !== -1 && !SP.Ribbon.SU.$0($p1)) {
            var $v_0 = window._spWikiPageNameEditTextBoxId;

            ($get($v_0)).value = $p1;
        }
        if ($p0 === 1) {
            this.$1V_1('PageStateGroupSaveAndStop', null, 0);
        }
    },
    $4J_1: function SP_Ribbon_WikiPageComponent$$4J_1() {
        return this.$1_1.editable && !SP.Ribbon.WikiPageComponent.$C();
    },
    $4b_1: function SP_Ribbon_WikiPageComponent$$4b_1($p0, $p1, $p2) {
        window.ChangeLayoutMode(false);
        return true;
    },
    $E_1: null,
    $3B_1: function SP_Ribbon_WikiPageComponent$$3B_1() {
        if (this.$E_1) {
            return;
        }
        var $v_0;

        this.$E_1 = {};
        $v_0 = this.$$d_$1V_1;
        this.$E_1['PageStateGroupEdit'] = $v_0;
        this.$E_1['PageStateGroupSaveAndStop'] = $v_0;
        this.$E_1['PageStateGroupSaveAndPublish'] = $v_0;
        this.$E_1['PageStateGroupStopEditing'] = $v_0;
        this.$E_1['PageStateGroupDontSaveAndStop'] = $v_0;
        this.$E_1['EditInDesigner'] = $v_0;
        $v_0 = this.$$d_$4V_1;
        this.$E_1['PageStateGroupSave'] = $v_0;
        this.$E_1['PageStateGroupQuerySaveMenu'] = SP.Ribbon.WikiPageComponent.$4W;
        this.$E_1['PageStateGroupSaveSplit'] = this.$$d_$4S_1;
        this.$E_1['ServerButton'] = SP.Ribbon.WikiPageComponent.$4X;
        this.$E_1['RenamePage'] = this.$$d_$4U_1;
        this.$E_1['WikiEditWebPart'] = this.$$d_$4b_1;
    },
    $K_1: null,
    $5O_1: function SP_Ribbon_WikiPageComponent$$5O_1() {
        if (this.$K_1) {
            return;
        }
        var $v_0;

        this.$K_1 = {};
        this.$K_1['PageStateGroupSaveSplit'] = this.$$d_$4D_1;
        this.$K_1['PageStateGroupEdit'] = this.$$d_$25_1;
        this.$K_1['EditInDesigner'] = this.$$d_$48_1;
        $v_0 = SP.Ribbon.WikiPageComponent.$2h;
        this.$K_1['PageStateGroupSave'] = $v_0;
        this.$K_1['PageStateGroupSaveAndStop'] = $v_0;
        this.$K_1['PageStateGroupSaveAndPublish'] = $v_0;
        this.$K_1['PageStateGroupStopEditing'] = SP.Ribbon.WikiPageComponent.$2j;
        this.$K_1['EditingToolsContextualGroup'] = SP.Ribbon.WikiPageComponent.$C;
        this.$K_1['RenamePage'] = this.$$d_$4F_1;
        $v_0 = this.$$d_$4J_1;
        this.$K_1['WikiEditWebPart'] = $v_0;
    },
    changeWikiPageMode: function SP_Ribbon_WikiPageComponent$changeWikiPageMode(toEditMode) {
        if (toEditMode && !SP.Ribbon.WikiPageComponent.$C()) {
            this.$1V_1('PageStateGroupEdit', {}, 0);
        }
    },
    revertToRead: function SP_Ribbon_WikiPageComponent$revertToRead() {
        SP.Ribbon.SaveConflictHandler.$17();
    },
    $63_1: function SP_Ribbon_WikiPageComponent$$63_1() {
        var $v_0 = new SP.UI.DialogOptions();

        $v_0.html = SP.Ribbon.WikiPageComponent.$43();
        $v_0.title = SP.Res.saveChangeDialogTitle;
        $v_0.dialogReturnValueCallback = this.$$d_$5u_1;
        SP.UI.ModalDialog.showModalDialog($v_0);
        var $$t_1 = this;

        window.setTimeout(function() {
            if ($get('SaveDlgYes')) {
                ($get('SaveDlgYes')).focus();
            }
        }, 0);
    },
    $5u_1: function SP_Ribbon_WikiPageComponent$$5u_1($p0, $p1) {
        if ($p0 === 1) {
            this.$1V_1($p1, null, 0);
        }
    }
};
SP.Ribbon.FetchedDocLibItemInfo = function SP_Ribbon_FetchedDocLibItemInfo() {
};
SP.Ribbon.FetchedDocLibItemInfo.prototype = {
    itemIsCheckedout: false,
    moderationStatus: 0
};
SP.Ribbon.DocLibAspxPageComponent = function SP_Ribbon_DocLibAspxPageComponent($p0) {
    this.$$d_$4M_1 = Function.createDelegate(this, this.$4M_1);
    this.$$d_$4P_1 = Function.createDelegate(this, this.$4P_1);
    this.$$d_$4Y_1 = Function.createDelegate(this, this.$4Y_1);
    this.$$d_$4O_1 = Function.createDelegate(this, this.$4O_1);
    this.$$d_$4R_1 = Function.createDelegate(this, this.$4R_1);
    this.$$d_$4c_1 = Function.createDelegate(this, this.$4c_1);
    this.$$d_$4Z_1 = Function.createDelegate(this, this.$4Z_1);
    this.$$d_$4T_1 = Function.createDelegate(this, this.$4T_1);
    this.$$d_$4Q_1 = Function.createDelegate(this, this.$4Q_1);
    this.$$d_$47_1 = Function.createDelegate(this, this.$47_1);
    this.$$d_$4H_1 = Function.createDelegate(this, this.$4H_1);
    this.$$d_$4A_1 = Function.createDelegate(this, this.$4A_1);
    this.$$d_$4C_1 = Function.createDelegate(this, this.$4C_1);
    this.$$d_$4K_1 = Function.createDelegate(this, this.$4K_1);
    this.$$d_$4E_1 = Function.createDelegate(this, this.$4E_1);
    this.$$d_$4B_1 = Function.createDelegate(this, this.$4B_1);
    this.$$d_$49_1 = Function.createDelegate(this, this.$49_1);
    this.$$d_$4I_1 = Function.createDelegate(this, this.$4I_1);
    SP.Ribbon.DocLibAspxPageComponent.initializeBase(this);
    this.$1_1 = $p0;
    var $v_0 = this.$1_1.itemPermMasks;

    if (!SP.BasePermissions.isInstanceOfType($v_0)) {
        this.$1_1.itemPermMasks = new SP.BasePermissions();
        if (!this.$1_1.itemPermMasks.customFromJson($v_0)) {
            this.$1_1.itemPermMasks.fromJson($v_0);
        }
    }
    $v_0 = this.$1_1.listPermMasks;
    if (!SP.BasePermissions.isInstanceOfType($v_0)) {
        this.$1_1.listPermMasks = new SP.BasePermissions();
        if (!this.$1_1.listPermMasks.customFromJson($v_0)) {
            this.$1_1.listPermMasks.fromJson($v_0);
        }
    }
};
SP.Ribbon.DocLibAspxPageComponent.registerWithPageManager = function SP_Ribbon_DocLibAspxPageComponent$registerWithPageManager(initInfo) {
    if (!SP.Ribbon.DocLibAspxPageComponent.$3) {
        SP.Ribbon.DocLibAspxPageComponent.$3 = new SP.Ribbon.DocLibAspxPageComponent(initInfo);
        (SP.Ribbon.PageManager.get_instance()).addPageComponent(SP.Ribbon.DocLibAspxPageComponent.$3);
    }
};
SP.Ribbon.DocLibAspxPageComponent.get_instance = function SP_Ribbon_DocLibAspxPageComponent$get_instance() {
    return SP.Ribbon.DocLibAspxPageComponent.$3;
};
SP.Ribbon.DocLibAspxPageComponent.$4a = function SP_Ribbon_DocLibAspxPageComponent$$4a($p0, $p1, $p2) {
    SP.Ribbon.WebPartComponent.$3n(4, false);
    return true;
};
SP.Ribbon.DocLibAspxPageComponent.$4N = function SP_Ribbon_DocLibAspxPageComponent$$4N($p0, $p1, $p2) {
    if (SP.Ribbon.PageState.ImportedNativeData && SP.Ribbon.PageState.ImportedNativeData.PageState && SP.Ribbon.PageState.ImportedNativeData.PageState['DocLibCheckoutRequired'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToCurrentUser'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser']) {
        var $v_0;

        if (SP.PageContextInfo.get_serverRequestPath()) {
            $v_0 = SP.PageContextInfo.get_serverRequestPath();
        }
        else {
            $v_0 = document.URL;
        }
        $v_0 = (($v_0.split('?'))[0].split('#'))[0];
        $v_0 = window.unescapeProperly($v_0);
        var $v_1 = window.location.protocol + '//' + window.location.host + SP.PageContextInfo.get_webServerRelativeUrl();

        if ($v_1.endsWith('/')) {
            $v_1 = $v_1.substring(0, $v_1.length - 1);
        }
        if (!CheckoutAlertBeforeNavigate(null, true, false, $v_0, $v_1)) {
            return true;
        }
    }
    SP.Ribbon.WebPartComponent.$3n(6, true);
    return true;
};
SP.Ribbon.DocLibAspxPageComponent.$2m = function SP_Ribbon_DocLibAspxPageComponent$$2m($p0, $p1, $p2) {
    SP.Ribbon.WebPartComponent.$5e();
    return true;
};
SP.Ribbon.DocLibAspxPageComponent.$2i = function SP_Ribbon_DocLibAspxPageComponent$$2i() {
    return !!SP.Ribbon.Utility.get_$U() && (SP.Ribbon.Utility.get_$U()).has(31);
};
SP.Ribbon.DocLibAspxPageComponent.$2l = function SP_Ribbon_DocLibAspxPageComponent$$2l($p0, $p1, $p2) {
    window.SetHomePage(SP.PageContextInfo.get_webServerRelativeUrl());
    return true;
};
SP.Ribbon.DocLibAspxPageComponent.prototype = {
    $1_1: null,
    get_allowInsertNewList: function SP_Ribbon_DocLibAspxPageComponent$get_allowInsertNewList() {
        return !!SP.Ribbon.Utility.get_$U() && (SP.Ribbon.Utility.get_$U()).has(12);
    },
    $5q_1: function SP_Ribbon_DocLibAspxPageComponent$$5q_1() {
        this.$m_1 = null;
        this.$2I_1 = false;
        this.$2w_1();
    },
    $2w_1: function SP_Ribbon_DocLibAspxPageComponent$$2w_1() {
        if (this.$2I_1) {
            return;
        }
        this.$2I_1 = true;
        var $v_0 = new SP.ClientContext();
        var $v_1 = (($v_0.get_web()).get_lists()).getById(new SP.Guid(this.$1_1.listId));
        var $v_2 = $v_1.getItemById(this.$1_1.itemId);

        $v_0.load($v_2, '_ModerationStatus', 'CheckoutUser');
        var $$t_3 = this;

        $v_0.executeQueryAsync(function() {
            $$t_3.$m_1 = new SP.Ribbon.FetchedDocLibItemInfo();
            if ($v_2.get_item('CheckoutUser')) {
                $$t_3.$m_1.itemIsCheckedout = true;
            }
            else {
                $$t_3.$m_1.itemIsCheckedout = false;
            }
            $$t_3.$m_1.moderationStatus = $v_2.get_item('_ModerationStatus');
            window.setTimeout(function() {
                ((SP.Ribbon.PageManager.get_instance()).get_commandDispatcher()).executeCommand(Commands.CommandIds.ApplicationStateChanged, null);
            }, 0);
        });
    },
    $m_1: null,
    $2I_1: false,
    get_$1X_1: function SP_Ribbon_DocLibAspxPageComponent$get_$1X_1() {
        if (!this.$m_1) {
            this.$2w_1();
        }
        return this.$m_1;
    },
    getGlobalCommands: function SP_Ribbon_DocLibAspxPageComponent$getGlobalCommands() {
        if (!SP.Ribbon.DocLibAspxPageComponent.$T) {
            SP.Ribbon.DocLibAspxPageComponent.$T = ['editPageProperties', 'pagePropertiesMenuOpen', 'viewPageProperties', 'webPartPageWorkflow', 'webPartPageManageWorkflow', 'webPartPageVerions', 'webPartPagePermissions', 'IncomingLinks', 'AlertMePage', 'EditTitleBar', 'ManageGroup', 'WikiEditProperties', 'LibrarySettingsGroup', 'PageActionsGroup', 'PagePropertiesMenuOpen', 'Permissions', 'SetHomePage', 'ShareGroup', 'VersionHistory', 'VersionsMenuOpen', 'VersionDiff', 'ViewAllPages', 'WikiViewProperties', 'WikiLibraryPermissions', 'WikiLibrarySettings', 'WorkflowGroup', 'PublishingGroup'];
        }
        return SP.Ribbon.DocLibAspxPageComponent.$T;
    },
    canHandleCommand: function SP_Ribbon_DocLibAspxPageComponent$canHandleCommand(commandId) {
        this.$5N_1();
        var $v_0 = this.$9_1[commandId];

        if ($v_0) {
            return $v_0();
        }
        var $v_1 = (this.get_$4L_1())[commandId];

        if ($v_1) {
            return true;
        }
        return false;
    },
    handleCommand: function SP_Ribbon_DocLibAspxPageComponent$handleCommand(commandId, properties, sequence) {
        this.$3B_1();
        var $v_0 = this.$A_1[commandId];

        if ($v_0) {
            return $v_0(commandId, properties, sequence);
        }
        return true;
    },
    getId: function SP_Ribbon_DocLibAspxPageComponent$getId() {
        return 'DocLibAspxPageComponent';
    },
    $1g_1: null,
    get_$4L_1: function SP_Ribbon_DocLibAspxPageComponent$get_$4L_1() {
        if (!this.$1g_1) {
            this.$1g_1 = {};
            var $v_0 = this.getGlobalCommands();
            var $v_1 = $v_0.length;

            for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
                this.$1g_1[$v_0[$v_2]] = true;
            }
        }
        return this.$1g_1;
    },
    $9_1: null,
    $5N_1: function SP_Ribbon_DocLibAspxPageComponent$$5N_1() {
        if (!this.$9_1) {
            this.$9_1 = {};
            var $v_0 = this.$$d_$4I_1;

            this.$9_1['PagePropertiesMenuOpen'] = $v_0;
            this.$9_1['WikiViewProperties'] = $v_0;
            this.$9_1['pagePropertiesMenuOpen'] = $v_0;
            this.$9_1['viewPageProperties'] = $v_0;
            $v_0 = this.$$d_$49_1;
            this.$9_1['WikiEditProperties'] = $v_0;
            this.$9_1['editPageProperties'] = $v_0;
            this.$9_1['LibraryPermissions'] = this.$$d_$4B_1;
            this.$9_1['WikiLibraryPermissions'] = this.$$d_$4B_1;
            $v_0 = this.$$d_$4E_1;
            this.$9_1['Permissions'] = $v_0;
            this.$9_1['webPartPagePermissions'] = $v_0;
            this.$9_1['WikiLibrarySettings'] = this.$$d_$4K_1;
            $v_0 = this.$$d_$4C_1;
            this.$9_1['ManageWorkflow'] = $v_0;
            this.$9_1['webPartPageManageWorkflow'] = $v_0;
            $v_0 = SP.Ribbon.DocLibAspxPageComponent.$2i;
            this.$9_1['SetHomePage'] = $v_0;
            $v_0 = this.$$d_$4A_1;
            this.$9_1['EditTitleBar'] = $v_0;
            $v_0 = this.$$d_$4H_1;
            this.$9_1['VersionDiff'] = $v_0;
            this.$9_1['VersionHistory'] = $v_0;
            this.$9_1['VersionsMenuOpen'] = $v_0;
            this.$9_1['webPartPageVerions'] = $v_0;
            this.$9_1['AlertMePage'] = this.$$d_$47_1;
        }
    },
    $A_1: null,
    $3B_1: function SP_Ribbon_DocLibAspxPageComponent$$3B_1() {
        if (!this.$A_1) {
            this.$A_1 = {};
            var $v_0 = SP.Ribbon.DocLibAspxPageComponent.$2m;

            this.$A_1['VersionHistory'] = $v_0;
            $v_0 = SP.Ribbon.DocLibAspxPageComponent.$4a;
            this.$A_1['WikiViewProperties'] = $v_0;
            this.$A_1['viewPageProperties'] = $v_0;
            $v_0 = SP.Ribbon.DocLibAspxPageComponent.$4N;
            this.$A_1['WikiEditProperties'] = $v_0;
            this.$A_1['editPageProperties'] = $v_0;
            $v_0 = this.$$d_$4Q_1;
            this.$A_1['WikiLibraryPermissions'] = $v_0;
            $v_0 = this.$$d_$4T_1;
            this.$A_1['Permissions'] = $v_0;
            this.$A_1['webPartPagePermissions'] = $v_0;
            this.$A_1['ViewAllPages'] = this.$$d_$4Z_1;
            this.$A_1['WikiLibrarySettings'] = this.$$d_$4c_1;
            $v_0 = this.$$d_$4R_1;
            this.$A_1['ManageWorkflow'] = $v_0;
            this.$A_1['webPartPageManageWorkflow'] = $v_0;
            $v_0 = SP.Ribbon.DocLibAspxPageComponent.$2l;
            this.$A_1['SetHomePage'] = $v_0;
            $v_0 = this.$$d_$4O_1;
            this.$A_1['EditTitleBar'] = $v_0;
            $v_0 = SP.Ribbon.DocLibAspxPageComponent.$2m;
            this.$A_1['VersionHistory'] = $v_0;
            this.$A_1['webPartPageVerions'] = $v_0;
            $v_0 = this.$$d_$4Y_1;
            this.$A_1['VersionDiff'] = $v_0;
            this.$A_1['IncomingLinks'] = this.$$d_$4P_1;
            this.$A_1['AlertMePage'] = this.$$d_$4M_1;
        }
    },
    $4I_1: function SP_Ribbon_DocLibAspxPageComponent$$4I_1() {
        return !this.$1_1.doNotShowProperties;
    },
    $49_1: function SP_Ribbon_DocLibAspxPageComponent$$49_1() {
        var $v_0 = !!SP.Ribbon.PageState.ImportedNativeData && !!SP.Ribbon.PageState.ImportedNativeData.PageState;
        var $v_1 = !$v_0 || $v_0 && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser'];

        return !this.$1_1.doNotShowProperties && this.$1_1.editable && $v_1 && this.$1_1.itemPermMasks.has(3);
    },
    $4K_1: function SP_Ribbon_DocLibAspxPageComponent$$4K_1() {
        return this.$1_1.listPermMasks.has(12);
    },
    $4c_1: function SP_Ribbon_DocLibAspxPageComponent$$4c_1($p0, $p1, $p2) {
        var $v_0 = SP.Utilities.Utility.getLayoutsPageUrl('listedit.aspx');

        $v_0 = $v_0 + '?List=' + this.$1_1.listId;
        SP.Utilities.HttpUtility.navigateTo($v_0);
        return true;
    },
    $4E_1: function SP_Ribbon_DocLibAspxPageComponent$$4E_1() {
        if (this.$1_1.itemPermMasks.has(63)) {
            return true;
        }
        return false;
    },
    $4T_1: function SP_Ribbon_DocLibAspxPageComponent$$4T_1($p0, $p1, $p2) {
        var $v_0 = SP.Utilities.Utility.getLayoutsPageUrl('User.aspx');
        var $v_1 = new SP.Utilities.UrlBuilder($v_0);
        var $v_2 = new SP.Guid(this.$1_1.listId);

        $v_1.addKeyValueQueryString('obj', $v_2.toString('B') + ',' + this.$1_1.itemId.toString() + ',LISTITEM');
        $v_1.addKeyValueQueryString('List', $v_2.toString('B'));
        $v_0 = $v_1.get_url() + '&Source' + GetSource();
        SP.Utilities.HttpUtility.navigateTo($v_0);
        return true;
    },
    $4B_1: function SP_Ribbon_DocLibAspxPageComponent$$4B_1() {
        if (this.$1_1.listPermMasks.has(63)) {
            return true;
        }
        return false;
    },
    $4Q_1: function SP_Ribbon_DocLibAspxPageComponent$$4Q_1($p0, $p1, $p2) {
        var $v_0 = SP.Utilities.Utility.getLayoutsPageUrl('User.aspx');
        var $v_1 = new SP.Utilities.UrlBuilder($v_0);
        var $v_2 = new SP.Guid(this.$1_1.listId);

        $v_1.addKeyValueQueryString('obj', $v_2.toString('B') + ',doclib');
        $v_1.addKeyValueQueryString('List', $v_2.toString('B'));
        $v_0 = $v_1.get_url() + '&Source' + GetSource();
        SP.Utilities.HttpUtility.navigateTo($v_0);
        return true;
    },
    $4Z_1: function SP_Ribbon_DocLibAspxPageComponent$$4Z_1($p0, $p1, $p2) {
        this.$5c_1();
        return true;
    },
    $5c_1: function SP_Ribbon_DocLibAspxPageComponent$$5c_1() {
        var $v_0 = SP.Utilities.Utility.getLayoutsPageUrl('listform.aspx');
        var $v_1 = new SP.Utilities.UrlBuilder($v_0);
        var $v_2 = new SP.Guid(this.$1_1.listId);

        $v_1.addKeyValueQueryString('ListId', $v_2.toString('B'));
        $v_1.addKeyValueQueryString('PageType', '0');
        SP.Utilities.HttpUtility.navigateTo($v_1.get_url());
    },
    $4P_1: function SP_Ribbon_DocLibAspxPageComponent$$4P_1($p0, $p1, $p2) {
        var $v_0 = SP.Utilities.Utility.getLayoutsPageUrl('BackLinks.aspx');
        var $v_1 = new SP.Utilities.UrlBuilder($v_0);

        $v_1.addKeyValueQueryString('List', (new SP.Guid(this.$1_1.listId)).toString());
        $v_1.addKeyValueQueryString('ID', this.$1_1.itemId.toString());
        SP.Utilities.HttpUtility.navigateTo($v_1.get_url());
        return true;
    },
    $4Y_1: function SP_Ribbon_DocLibAspxPageComponent$$4Y_1($p0, $p1, $p2) {
        var $v_0 = SP.Utilities.Utility.getLayoutsPageUrl('VersionDiff.aspx');
        var $v_1 = new SP.Utilities.UrlBuilder($v_0);
        var $v_2 = new SP.Guid(this.$1_1.listId);

        $v_1.addKeyValueQueryString('List', $v_2.toString('B'));
        $v_1.addKeyValueQueryString('ID', this.$1_1.itemId.toString());
        SP.Utilities.HttpUtility.navigateTo($v_1.get_url());
        return true;
    },
    $4H_1: function SP_Ribbon_DocLibAspxPageComponent$$4H_1() {
        if (SP.Ribbon.SU.$0(this.$1_1.itemId)) {
            return false;
        }
        if (!this.$1_1.itemPermMasks.has(7)) {
            return false;
        }
        return this.$1_1.enableVersioning;
    },
    $4R_1: function SP_Ribbon_DocLibAspxPageComponent$$4R_1($p0, $p1, $p2) {
        var $v_0 = new SP.Utilities.UrlBuilder(SP.Utilities.Utility.getLayoutsPageUrl('Workflow.aspx'));
        var $v_1 = new SP.Guid(this.$1_1.listId);

        $v_0.addKeyValueQueryString('ID', this.$1_1.itemId.toString());
        $v_0.addKeyValueQueryString('List', $v_1.toString('B'));
        var $v_2 = $v_0.get_url() + '&Source' + GetSource();

        SP.Utilities.HttpUtility.navigateTo($v_2);
        return true;
    },
    $4C_1: function SP_Ribbon_DocLibAspxPageComponent$$4C_1() {
        return !SP.Ribbon.SU.$0(this.$1_1.itemId) && this.$1_1.workflowsAssociated && this.$1_1.itemPermMasks.has(3);
    },
    $4A_1: function SP_Ribbon_DocLibAspxPageComponent$$4A_1() {
        return this.$1_1.editable;
    },
    $4O_1: function SP_Ribbon_DocLibAspxPageComponent$$4O_1($p0, $p1, $p2) {
        var $v_0 = window.document.getElementById($p0);

        if (!$v_0) {
            return false;
        }
        var $v_1 = $v_0.getAttribute('href');

        if ($v_1 && $v_1.length > 0) {
            if ($v_1.startsWith('javascript:')) {
                $v_1 = $v_1.substr(11);
            }
            eval($v_1);
            ((SP.Ribbon.PageManager.get_instance()).get_commandDispatcher()).executeCommand(Commands.CommandIds.ApplicationStateChanged, null);
            return true;
        }
        return false;
    },
    $47_1: function SP_Ribbon_DocLibAspxPageComponent$$47_1() {
        if (this.$1_1.itemPermMasks.has(40)) {
            return true;
        }
        return false;
    },
    $4M_1: function SP_Ribbon_DocLibAspxPageComponent$$4M_1($p0, $p1, $p2) {
        var $v_0 = SP.Utilities.Utility.getLayoutsPageUrl('SubNew.aspx');
        var $v_1 = new SP.Utilities.UrlBuilder($v_0);

        $v_1.addKeyValueQueryString('List', this.$1_1.listId);
        $v_1.addKeyValueQueryString('ID', this.$1_1.itemId.toString());
        $v_0 = $v_1.get_url() + '&Source' + GetSource();
        var $v_2 = new SP.UI.DialogOptions();

        $v_2.url = $v_0;
        SP.UI.ModalDialog.showModalDialog($v_2);
        return true;
    }
};
SP.Ribbon.WebPartComponent = function SP_Ribbon_WebPartComponent() {
    this.$$d_$5p_1 = Function.createDelegate(this, this.$5p_1);
    this.$$d_$5d_1 = Function.createDelegate(this, this.$5d_1);
    SP.Ribbon.WebPartComponent.initializeBase(this);
    this.$3U_1 = new SP.Ribbon.RelatedFieldsHelper(false);
    this.$3T_1 = new SP.Ribbon.RelatedFieldsHelper(true);
};
SP.Ribbon.WebPartComponent.get_instance = function SP_Ribbon_WebPartComponent$get_instance() {
    return SP.Ribbon.WebPartComponent.$3;
};
SP.Ribbon.WebPartComponent.registerWithPageManager = function SP_Ribbon_WebPartComponent$registerWithPageManager(initInfo) {
    if (!SP.Ribbon.WebPartComponent.$3) {
        SP.Ribbon.WebPartComponent.$3 = new SP.Ribbon.WebPartComponent();
        SP.Ribbon.WebPartComponent.$3.$2S_1(initInfo);
        SP.Ribbon.WebPartComponent.$3.$3a_1();
        (SP.Ribbon.PageManager.get_instance()).addPageComponent(SP.Ribbon.WebPartComponent.$3);
        SP.Ribbon.UtilityInternal.$41('click', SP.Ribbon.WebPartComponent.$5b);
    }
    else {
        (SP.Ribbon.PageManager.get_instance()).removePageComponent(SP.Ribbon.WebPartComponent.$3);
        SP.Ribbon.WebPartComponent.$3.$2S_1(initInfo);
        SP.Ribbon.WebPartComponent.$3.$3a_1();
        (SP.Ribbon.PageManager.get_instance()).addPageComponent(SP.Ribbon.WebPartComponent.$3);
    }
};
SP.Ribbon.WebPartComponent.$5b = function SP_Ribbon_WebPartComponent$$5b($p0) {
    if (SP.UI.UIUtility.focusValidOnThisNode($p0.target) && SP.Ribbon.WebPartComponent.$3) {
        CUI.PMetrics.perfMark(7186);
        SP.Ribbon.WebPartComponent.$3.$4m_1($p0.target);
        CUI.PMetrics.perfMark(7187);
    }
};
SP.Ribbon.WebPartComponent.$1a = function SP_Ribbon_WebPartComponent$$1a($p0) {
    var $v_0 = window._spWebPartComponents;

    if (SP.Ribbon.SU.$0($v_0)) {
        return null;
    }
    return $v_0[$p0];
};
SP.Ribbon.WebPartComponent.$5e = function SP_Ribbon_WebPartComponent$$5e() {
    var $v_0 = new Sys.StringBuilder();

    SP.Ribbon.WebPartComponent.$23('versions.aspx', $v_0);
    $v_0.append('list=');
    $v_0.append(SP.PageContextInfo.get_pageListId());
    $v_0.append('&ID=');
    $v_0.append((SP.PageContextInfo.get_pageItemId()).toString());
    SP.Utilities.HttpUtility.navigateTo($v_0.toString());
};
SP.Ribbon.WebPartComponent.$23 = function SP_Ribbon_WebPartComponent$$23($p0, $p1) {
    var $v_0 = SP.PageContextInfo.get_webServerRelativeUrl();

    $p1.append($v_0);
    if (!$v_0.endsWith('/')) {
        $p1.append('/');
    }
    $p1.append(SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl());
    $p1.append($p0);
    $p1.append('?');
    return;
};
SP.Ribbon.WebPartComponent.$3n = function SP_Ribbon_WebPartComponent$$3n($p0, $p1) {
    var $v_0 = new Sys.StringBuilder();

    SP.Ribbon.WebPartComponent.$23('listform.aspx', $v_0);
    $v_0.append('PageType=');
    $v_0.append($p0.toString());
    $v_0.append('&ListId=');
    $v_0.append(SP.PageContextInfo.get_pageListId());
    $v_0.append('&ID=');
    $v_0.append((SP.PageContextInfo.get_pageItemId()).toString());
    if ($p1) {
        if ($p0 === 6) {
            SP.Utilities.HttpUtility.navigateTo($v_0.toString());
        }
        else {
            SP.Utilities.HttpUtility.appendSourceAndNavigateTo($v_0.toString());
        }
    }
    else {
        window.OpenPopUpPage($v_0.toString());
    }
};
SP.Ribbon.WebPartComponent.$1W = function SP_Ribbon_WebPartComponent$$1W() {
    var $v_0 = window.document.getElementById('_wpSelected');

    if (!SP.Ribbon.SU.$0($v_0) && !SP.Ribbon.SU.$0($v_0.value)) {
        var $v_1 = (SP.Ribbon.PageManager.get_instance()).getPageComponentById(SP.Ribbon.WebPartComponent.$34($v_0.value));

        if (!SP.Ribbon.SU.$0($v_1)) {
            ((SP.Ribbon.PageManager.get_instance()).get_focusManager()).releaseFocusFromComponent($v_1);
        }
    }
};
SP.Ribbon.WebPartComponent.$2x = function SP_Ribbon_WebPartComponent$$2x() {
    var $v_0 = window.document.getElementById('_wpSelected');

    if (!SP.Ribbon.SU.$0($v_0) && !SP.Ribbon.SU.$0($v_0.value)) {
        var $v_1 = (SP.Ribbon.PageManager.get_instance()).getPageComponentById(SP.Ribbon.WebPartComponent.$34($v_0.value));

        if (!SP.Ribbon.SU.$0($v_1)) {
            ((SP.Ribbon.PageManager.get_instance()).get_focusManager()).requestFocusForComponent($v_1);
        }
    }
};
SP.Ribbon.WebPartComponent.$34 = function SP_Ribbon_WebPartComponent$$34($p0) {
    if (!SP.Ribbon.SU.$0($p0) && $p0.length > 12) {
        var $v_0 = $p0.substring(12, $p0.length);
        var $v_1 = SP.Ribbon.WebPartComponent.$1a($v_0);

        if ($v_1 && !SP.Ribbon.SU.$2($v_1.pageComponentId)) {
            return $v_1.pageComponentId;
        }
    }
    return $p0;
};
SP.Ribbon.WebPartComponent.getWebPartAdder = function SP_Ribbon_WebPartComponent$getWebPartAdder() {
    return window.WPAdder;
};
SP.Ribbon.WebPartComponent.get_$5U = function SP_Ribbon_WebPartComponent$get_$5U() {
    var $v_0 = $get('MSOLayout_InDesignMode');

    if ($v_0 && $v_0.value === '1') {
        return false;
    }
    var $v_1 = $get('MSOSPWebPartManager_DisplayModeName');

    if ($v_1 && $v_1.value && $v_1.value.toUpperCase() !== 'BROWSE') {
        return false;
    }
    return true;
};
SP.Ribbon.WebPartComponent.get_$1C = function SP_Ribbon_WebPartComponent$get_$1C() {
    var $v_0 = $get('MSOSPWebPartManager_DisplayModeName');

    if ($v_0 && $v_0.value && $v_0.value.toUpperCase() === 'EDIT') {
        return true;
    }
    return false;
};
SP.Ribbon.WebPartComponent.get_activeWebPartId = function SP_Ribbon_WebPartComponent$get_activeWebPartId() {
    var $v_0 = null;

    if (SP.Ribbon.WebPartComponent.$3 && !SP.Ribbon.SU.$2(SP.Ribbon.WebPartComponent.$3.get_$L_1())) {
        return SP.Ribbon.WebPartComponent.$3.get_$L_1();
    }
    if (window.document.getElementById('_wpSelected')) {
        $v_0 = (window.document.getElementById('_wpSelected')).value;
        if (!SP.Ribbon.SU.$2($v_0)) {
            return $v_0.substr(12);
        }
    }
    return null;
};
SP.Ribbon.WebPartComponent.get_pageComponentIdOfActiveWebPart = function SP_Ribbon_WebPartComponent$get_pageComponentIdOfActiveWebPart() {
    var $v_0 = SP.Ribbon.WebPartComponent.get_activeWebPartId();

    if (SP.Ribbon.SU.$2($v_0)) {
        return null;
    }
    var $v_1 = SP.Ribbon.WebPartComponent.$1a($v_0);

    if (!$v_1 || SP.Ribbon.SU.$2($v_1.pageComponentId)) {
        return $v_0;
    }
    return $v_1.pageComponentId;
};
SP.Ribbon.WebPartComponent.get_activeWebPartZoneId = function SP_Ribbon_WebPartComponent$get_activeWebPartZoneId() {
    if (SP.Ribbon.WebPartComponent.$3 && !SP.Ribbon.SU.$2(SP.Ribbon.WebPartComponent.$3.get_$d_1())) {
        return SP.Ribbon.WebPartComponent.$3.get_$d_1();
    }
    return null;
};
SP.Ribbon.WebPartComponent.fetchListViewWebPartPageComponent = function SP_Ribbon_WebPartComponent$fetchListViewWebPartPageComponent(webPartId, pageComponentId, list, view) {
    var $v_0 = new SP.Ribbon.FetchListViewWebPartPageComponentWorker(webPartId, pageComponentId, list, view);

    $v_0.fetch();
};
SP.Ribbon.WebPartComponent.$2u = function SP_Ribbon_WebPartComponent$$2u($p0) {
    if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
        return;
    }
    var $v_0 = document.createElement('SCRIPT');

    $v_0.setAttribute('type', 'text/javascript');
    if (Sys.Browser.agent === Sys.Browser.Safari || Sys.Browser.agent === Sys.Browser.AppleWebKit) {
        $v_0.innerHTML = $p0;
    }
    else {
        $v_0.text = $p0;
    }
    var $v_1 = (document.getElementsByTagName('HEAD'))[0];

    $v_1.appendChild($v_0);
};
SP.Ribbon.WebPartComponent.prototype = {
    $1_1: null,
    $3U_1: null,
    $3T_1: null,
    $3I_1: null,
    $2S_1: function SP_Ribbon_WebPartComponent$$2S_1($p0) {
        this.$1_1 = $p0;
        var $v_0 = this.$1_1.itemPermissions;

        if (!SP.Ribbon.SU.$0($v_0) && !SP.BasePermissions.isInstanceOfType($v_0)) {
            this.$1_1.itemPermissions = new SP.BasePermissions();
            if (!this.$1_1.itemPermissions.customFromJson($v_0)) {
                this.$1_1.itemPermissions.fromJson($v_0);
            }
        }
    },
    $4m_1: function SP_Ribbon_WebPartComponent$$4m_1($p0) {
        var $v_0 = null;
        var $v_1 = null;

        while ($p0 && $p0 !== document.body) {
            if ($p0.tagName === 'A' || $p0.tagName === 'INPUT') {
                return;
            }
            if (!$v_0 && (SP.Ribbon.Utility.$G($p0, 's4-wpActive') || SP.Ribbon.Utility.$G($p0, 's4-wpcell'))) {
                $v_0 = $p0;
            }
            else if (!$v_1 && SP.Ribbon.Utility.$G($p0, 'ms-SPZone') && $p0.getAttribute('zoneID')) {
                $v_1 = $p0;
            }
            $p0 = $p0.parentNode;
        }
        this.deselectWebPartAndZone($v_0, $v_1);
    },
    deselectWebPartAndZone: function SP_Ribbon_WebPartComponent$deselectWebPartAndZone(webpart, webpartZone) {
        if (this.get_$5_1() && !SP.Ribbon.SU.$0((this.get_$5_1()).getAttribute('WPToolPaneOpen'))) {
            return;
        }
        var $v_0 = false;

        if (this.$69_1(webpart)) {
            $v_0 = true;
        }
        if (this.$6A_1(webpartZone)) {
            $v_0 = true;
        }
        if ($v_0) {
            SP.Ribbon.UtilityInternal.$i();
        }
    },
    $69_1: function SP_Ribbon_WebPartComponent$$69_1($p0) {
        if (!$p0 && this.get_$5_1() && $p0 !== this.get_$5_1()) {
            var $v_0 = this.$55_1(this.get_$5_1());

            if ($v_0 && $v_0.isDefaultWebPart) {
                return false;
            }
            Sys.UI.DomElement.removeCssClass(this.get_$5_1(), 's4-wpActive');
            if (!SP.Ribbon.Utility.$G(this.get_$5_1(), 's4-wpcell-plain')) {
                Sys.UI.DomElement.addCssClass(this.get_$5_1(), 's4-wpcell');
            }
            DeselectAllWPItems();
            var $v_1 = 'SelectionCbx' + this.$u_1(this.get_$5_1());
            var $v_2 = $get($v_1);

            if (!SP.Ribbon.SU.$0($v_2)) {
                $v_2.checked = false;
            }
            SP.Ribbon.WebPartComponent.$1W();
            this.$v_1 = null;
            this.$2O_1(null);
            return true;
        }
        return false;
    },
    $6A_1: function SP_Ribbon_WebPartComponent$$6A_1($p0) {
        if (this.get_$I_1() && !$p0 && this.get_$F_1()) {
            Sys.UI.DomElement.removeCssClass(this.get_$F_1(), 's4-wzActive');
            this.$l_1 = null;
            this.$3d_1(null);
            return true;
        }
        return false;
    },
    selectWebPartById: function SP_Ribbon_WebPartComponent$selectWebPartById(id, setNextRibbonTab) {
        var $v_0 = $get('MSOZoneCell_' + id);

        return this.selectWebPart($v_0, setNextRibbonTab);
    },
    selectWebPart: function SP_Ribbon_WebPartComponent$selectWebPart(zc, setNextRibbonTab) {
        if (SP.Ribbon.SU.$0(zc)) {
            return false;
        }
        if (this.get_$5_1() && this.get_$5_1() !== zc && !SP.Ribbon.SU.$0((this.get_$5_1()).getAttribute('WPToolPaneOpen'))) {
            return false;
        }
        this.$3r_1(zc, setNextRibbonTab);
        SP.Ribbon.UtilityInternal.$i();
        return true;
    },
    selectWebPartZone: function SP_Ribbon_WebPartComponent$selectWebPartZone(z, zoneID) {
        if (this.get_$5_1() && !SP.Ribbon.SU.$0((this.get_$5_1()).getAttribute('WPToolPaneOpen'))) {
            return;
        }
        if (!z) {
            var $v_0 = GetElementsByName('MSOZone');

            if ($v_0 && $v_0.length > 0) {
                for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                    var $v_2 = $v_0[$v_1].getAttribute('zoneId');

                    if (zoneID === $v_2) {
                        z = $v_0[$v_1];
                        break;
                    }
                }
            }
        }
        if (z) {
            this.$3s_1(z);
            this.$3d_1(z);
        }
    },
    isFocusable: function SP_Ribbon_WebPartComponent$isFocusable() {
        return false;
    },
    receiveFocus: function SP_Ribbon_WebPartComponent$receiveFocus() {
        return true;
    },
    yieldFocus: function SP_Ribbon_WebPartComponent$yieldFocus() {
        return true;
    },
    getGlobalCommands: function SP_Ribbon_WebPartComponent$getGlobalCommands() {
        this.$3D_1();
        var $v_0 = [];

        Array.addRange($v_0, SP.Ribbon.WebPartComponent.$T);
        Array.addRange($v_0, this.$1F_1);
        return $v_0;
    },
    $3a_1: function SP_Ribbon_WebPartComponent$$3a_1() {
        var $v_0 = window._spWebPartComponents;

        if (SP.Ribbon.SU.$0($v_0)) {
            return;
        }
        this.$3I_1 = $v_0;
        this.$1F_1 = null;
    },
    $1F_1: null,
    $1G_1: null,
    $3D_1: function SP_Ribbon_WebPartComponent$$3D_1() {
        if (this.$1F_1) {
            return;
        }
        this.$1F_1 = [];
        this.$1G_1 = {};
        var $v_0 = this.$3I_1;

        if (SP.Ribbon.SU.$0($v_0)) {
            return;
        }
        var $$dict_1 = $v_0;

        for (var $$key_2 in $$dict_1) {
            var $v_1 = {
                key: $$key_2,
                value: $$dict_1[$$key_2]
            };
            var $v_2 = $v_1.value;

            for (var $v_3 = 0; $v_3 < $v_2.contextualGroupCommands.length; $v_3++) {
                var $v_4 = this.$1G_1[$v_2.contextualGroupCommands[$v_3]];

                if (SP.Ribbon.SU.$0($v_4)) {
                    $v_4 = [];
                    this.$1G_1[$v_2.contextualGroupCommands[$v_3]] = $v_4;
                }
                Array.add($v_4, $v_1.key);
            }
        }
        var $$dict_7 = this.$1G_1;

        for (var $$key_8 in $$dict_7) {
            var $v_5 = {
                key: $$key_8,
                value: $$dict_7[$$key_8]
            };

            Array.add(this.$1F_1, $v_5.key);
        }
    },
    $55_1: function SP_Ribbon_WebPartComponent$$55_1($p0) {
        var $v_0 = this.$u_1($p0);

        if (SP.Ribbon.SU.$2($v_0)) {
            return null;
        }
        return SP.Ribbon.WebPartComponent.$1a($v_0);
    },
    get_$1X_1: function SP_Ribbon_WebPartComponent$get_$1X_1() {
        if (SP.Ribbon.DocLibAspxPageComponent.$3) {
            return SP.Ribbon.DocLibAspxPageComponent.$3.get_$1X_1();
        }
        return null;
    },
    canHandleCommand: function SP_Ribbon_WebPartComponent$canHandleCommand(commandId) {
        switch (commandId) {
        case 'MSOMenu_Minimize':
        case 'MSOMenu_Restore':
        case 'MSOMenu_Close':
        case 'MSOMenu_Edit':
        case 'MSOMenu_Delete':
            if (!this.get_$5_1()) {
                return false;
            }
            return this.$46_1(commandId);
        case 'webPartPageApproval':
        case 'approveWebpartPage':
        case 'rejectWebpartPage':
            if (!SP.Ribbon.SU.$0(this.$1_1.itemId) && this.$1_1.enableModeration && this.$1_1.itemPermissions.has(3) && this.$1_1.itemPermissions.has(5) && this.get_$1X_1() && ((this.get_$1X_1()).moderationStatus === 2 || !this.$1_1.enableMinorVersioning) && !(this.get_$1X_1()).itemIsCheckedout) {
                return true;
            }
            return false;
        case 'WebPartContextualGroup':
            return (SP.Ribbon.WikiPageComponent.$C() || this.get_$I_1() || SP.Ribbon.WebPartComponent.get_$1C()) && !SP.Ribbon.SU.$0(this.get_$5_1());
        case 'insertTextWebPart':
        case 'insertImageWebPart':
            return this.$2W_1(commandId, true, null) && !SP.Ribbon.SU.$0(this.get_$F_1());
        case 'insertExistingList':
            return this.$2W_1(commandId, true, null);
        case 'EditMobileSharedPage':
            if (SP.Ribbon.WikiPageComponent.$3G() || !this.$1_1.editable) {
                return false;
            }
            return this.$2g_1();
        case 'EditMobilePersonalPage':
            if (SP.Ribbon.WikiPageComponent.$3G() || !this.$1_1.editable) {
                return false;
            }
            return this.$2f_1();
        case 'webPartPageDelete':
            if (SP.Ribbon.SU.$0(this.$1_1.itemId)) {
                return false;
            }
            if (!this.$1_1.itemPermissions.has(4)) {
                return false;
            }
            return true;
        case 'webPartPageEdit':
            return this.$1_1.editable || this.$1_1.isEditMode;
        case 'webPartPageStartEdit':
            if (this.get_$I_1() || SP.Ribbon.WebPartComponent.get_$1C()) {
                return false;
            }
            return this.$1_1.editable;
        case 'webPartPageStopEdit':
            if (!this.get_$I_1() && !SP.Ribbon.WebPartComponent.get_$1C()) {
                return false;
            }
            return true;
        case 'Ribbon.WebPartOption':
            return (SP.Ribbon.WikiPageComponent.$C() || this.get_$I_1() || SP.Ribbon.WebPartComponent.get_$1C()) && !SP.Ribbon.SU.$0(this.get_$5_1());
        case 'InsertRelatedWebPartToListViewMenuAnchor':
        case 'InsertRelatedWebPartToListView':
            return (SP.Ribbon.WikiPageComponent.$C() || this.get_$I_1()) && !SP.Ribbon.SU.$0(this.get_$5_1()) && !SP.Ribbon.SU.$0(this.get_$2Z_1());
        case 'InsertRelatedWebPartToListFormMenuAnchor':
        case 'InsertRelatedWebPartToListForm':
            return this.get_$I_1();
        case 'WebPartInsertContextualGroup':
            return !SP.Ribbon.SU.$0(this.get_$F_1()) && this.$1_1.allowWebPartAdder;
        case 'EditMobilePageMenuOpen':
            return this.$2g_1() || this.$2f_1();
        case 'makeHomePage':
            return SP.Ribbon.DocLibAspxPageComponent.$2i();
        case 'EditInDesigner':
            return !SP.Ribbon.WikiPageComponent.$C() && this.$1_1.editable && !this.get_$I_1() && !SP.Ribbon.WebPartComponent.get_$1C();
        default:
            this.$3D_1();
            var $v_0 = this.$1G_1[commandId];

            if (!SP.Ribbon.SU.$0($v_0)) {
                return Array.contains($v_0, this.get_$L_1());
            }
            break;
        }
        return true;
    },
    handleCommand: function SP_Ribbon_WebPartComponent$handleCommand(commandId, properties, sequence) {
        switch (commandId) {
        case 'MSOMenu_Minimize':
        case 'MSOMenu_Restore':
        case 'MSOMenu_Close':
        case 'MSOMenu_Edit':
        case 'MSOMenu_Delete':
            this.$3t_1(commandId, properties, sequence);
            break;
        case 'InsertRelatedWebPartToListView':
            if (!SP.Ribbon.SU.$0(properties)) {
                SP.Ribbon.RelatedFieldsHelper.addAndConnectRelatedWebPart(properties, this.get_$d_1(), this.get_$3w_1(), SP.Ribbon.WikiPageComponent.$C());
            }
            break;
        case 'GetRelatedFieldsToListViewMenuXml':
            if (!SP.Ribbon.SU.$0(properties)) {
                var $v_3 = properties;

                $v_3 = this.$3U_1.getRelatedFieldsMenuXml($v_3, this.get_$2Z_1(), this.get_$3v_1());
            }
            break;
        case 'InsertRelatedWebPartToListForm':
            if (!SP.Ribbon.SU.$0(properties)) {
                SP.Ribbon.RelatedFieldsHelper.addAndConnectRelatedWebPart(properties, 'Main', null, false);
            }
            break;
        case 'GetRelatedFieldsToListFormMenuXml':
            if (!SP.Ribbon.SU.$0(properties)) {
                var $v_4 = properties;

                $v_4 = this.$3T_1.getRelatedFieldsMenuXml($v_4, null, null);
            }
            break;
        case 'approveWebpartPage':
            this.$3Y_1(true);
            break;
        case 'rejectWebpartPage':
            this.$3Y_1(false);
            break;
        case 'webPartPageDelete':
            this.$4l_1();
            break;
        case 'webPartPageEdit':
            switch (properties['CommandValueId']) {
            case 'Ribbon.WebPartPage.Edit.Edit.Menu.Actions.Edit':
                this.handleCommand('webPartPageStartEdit', null, sequence);
                break;
            case 'Ribbon.WebPartPage.Edit.Edit.Menu.Actions.Stop':
                this.handleCommand('webPartPageStopEdit', null, sequence);
                break;
            default:
                break;
            }
            break;
        case 'webPartPageStartEdit':
            if (this.$1_1.itemId > 0 && this.$1_1.forceCheckout) {
                window.EnsureCheckoutAndChangeLayoutModeToEdit(this.$1_1.listId, this.$1_1.itemId, false);
            }
            else {
                window.ChangeLayoutMode(false, false);
            }
            break;
        case 'webPartPageStopEdit':
            window.ChangeLayoutMode(null, true);
            break;
        case 'webPartPageEditQuery':
            var $v_5 = window.document.getElementById('MSOLayout_InDesignMode');
            var $v_6 = window.document.getElementById('MSOSPWebPartManager_DisplayModeName');

            if ($v_5 && $v_5.value !== '1' && (!$v_6 || $v_6.value !== 'Edit')) {
                properties['SelectedItemId'] = 'Ribbon.WebPartPage.Edit.Edit.Menu.Actions.Edit';
            }
            else {
                properties['SelectedItemId'] = 'Ribbon.WebPartPage.Edit.Edit.Menu.Actions.Stop';
            }
            break;
        case 'insertWebPart':
        case 'insertExistingList':
            this.$64_1(commandId);
            break;
        case 'insertTextWebPart':
        case 'insertImageWebPart':
            this.$2W_1(commandId, false, null);
            break;
        case 'CommandContextChanged':
            this.$5i_1(properties);
            break;
        case 'EditMobileSharedPage':
            var $v_0 = SP.Utilities.HttpUtility.urlPathEncode(SP.PageContextInfo.get_webServerRelativeUrl());

            if (!$v_0.endsWith('/')) {
                $v_0 += '/';
            }
            $v_0 += SP.Utilities.HttpUtility.urlPathEncode(SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl() + 'mwpsettings.aspx?pageview=shared&url=');
            $v_0 += SP.Utilities.HttpUtility.urlPathEncode(GetSource());
            window.location = $v_0;
            break;
        case 'EditMobilePersonalPage':
            var $v_1 = SP.Utilities.HttpUtility.urlPathEncode(SP.PageContextInfo.get_webServerRelativeUrl());

            if (!$v_1.endsWith('/')) {
                $v_1 += '/';
            }
            $v_1 += SP.Utilities.HttpUtility.urlPathEncode(SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl() + 'mwpsettings.aspx?pageview=personal&url=');
            $v_1 += SP.Utilities.HttpUtility.urlPathEncode(GetSource());
            window.location = $v_1;
            break;
        case 'makeHomePage':
            SP.Ribbon.DocLibAspxPageComponent.$2l(commandId, properties, sequence);
            break;
        case 'EditInDesigner':
            var $v_2 = window.self.ajaxNavigate;

            EditInSPD($v_2.get_href(), false);
            break;
        default:
            break;
        }
        return true;
    },
    $2g_1: function SP_Ribbon_WebPartComponent$$2g_1() {
        return !!SP.Ribbon.Utility.get_$U() && (SP.Ribbon.Utility.get_$U()).has(19);
    },
    $2f_1: function SP_Ribbon_WebPartComponent$$2f_1() {
        return !!SP.Ribbon.Utility.get_$U() && (SP.Ribbon.Utility.get_$U()).has(30);
    },
    $5i_1: function SP_Ribbon_WebPartComponent$$5i_1($p0) {
        if ($p0.ChangedByUser && (this.get_$I_1() && $p0.OldContextCommand === 'Ribbon.WebPartInsert.Tab' || SP.Ribbon.WikiPageComponent.$C() && $p0.OldContextCommand === 'InsertTab')) {
            var $v_0 = window.WPAdder;

            if ($v_0) {
                $v_0.hide();
            }
        }
    },
    $64_1: function SP_Ribbon_WebPartComponent$$64_1($p0) {
        var $v_0 = SP.Ribbon.WebPartComponent.getWebPartAdder();

        if (!$v_0) {
            window.LoadWPAdderOnDemand();
            return;
        }
        var $v_1 = this.$36_1($v_0, $p0);

        if ($v_0) {
            var $v_2 = true;

            if ($v_1) {
                var $v_3 = $v_1;

                $v_0.selectCategoryByTitle($v_3);
                $v_2 = false;
            }
            $v_0._showCategoryColumn($v_2);
            $v_0._setZone(this.get_$d_1());
            $v_0.show();
        }
    },
    $36_1: function SP_Ribbon_WebPartComponent$$36_1($p0, $p1) {
        var $v_0 = null;

        if ($p0) {
            var $v_1 = $p0._ribbonMap;

            if ($v_1) {
                $v_0 = $v_1[$p1];
            }
        }
        return $v_0;
    },
    $2W_1: function SP_Ribbon_WebPartComponent$$2W_1($p0, $p1, $p2) {
        var $v_0 = SP.Ribbon.WebPartComponent.getWebPartAdder();

        if (!$v_0) {
            window.LoadWPAdderOnDemand();
        }
        $v_0 = SP.Ribbon.WebPartComponent.getWebPartAdder();
        if (!$v_0) {
            return false;
        }
        var $v_1 = false;
        var $v_2 = this.$36_1($v_0, $p0);

        if ($v_0 && $v_2) {
            var $v_3 = $v_2;

            $v_1 = $v_3.length > 0;
            if (!$p1) {
                if ($p2) {
                    var $v_4 = $v_0._getHiddenField('wpVal');

                    if ($v_4) {
                        $v_4.value = $p2;
                    }
                }
                $v_0.addItemToPageByItemIdAndZoneId($v_3, this.get_$d_1());
            }
        }
        return $v_1;
    },
    $4l_1: function SP_Ribbon_WebPartComponent$$4l_1() {
        var $v_0 = this.$1_1.recycleBinEnabled;
        var $v_1;

        if ($v_0) {
            $v_1 = SP.Res.webPartPageRecycleConfirmation;
        }
        else {
            $v_1 = SP.Res.webPartPageDeleteConfirmation;
        }
        if (confirm($v_1)) {
            var $v_2 = new SP.ClientContext();
            var $v_3 = ((($v_2.get_web()).get_lists()).getById(new SP.Guid(this.$1_1.listId))).getItemById(this.$1_1.itemId);

            if ($v_0) {
                $v_3.recycle();
            }
            else {
                $v_3.deleteObject();
            }
            $v_2.executeQueryAsync(this.$$d_$5d_1);
        }
    },
    $5d_1: function SP_Ribbon_WebPartComponent$$5d_1($p0, $p1) {
        var $v_0 = this.$1_1.rootFolderUrl;

        if (!$v_0) {
            window.navigate(SP.PageContextInfo.get_webServerRelativeUrl());
        }
        else {
            window.navigate($v_0);
        }
    },
    $3Y_1: function SP_Ribbon_WebPartComponent$$3Y_1($p0) {
        var $v_0 = new Sys.StringBuilder();

        SP.Ribbon.WebPartComponent.$23('approve.aspx', $v_0);
        $v_0.append('&List=');
        $v_0.append(SP.PageContextInfo.get_pageListId());
        $v_0.append('&ID=');
        $v_0.append((SP.PageContextInfo.get_pageItemId()).toString());
        $v_0.append('&action=');
        if ($p0) {
            $v_0.append('0');
        }
        else {
            $v_0.append('1');
        }
        window.OpenPopUpPage($v_0.toString(), this.$$d_$5p_1);
    },
    $5p_1: function SP_Ribbon_WebPartComponent$$5p_1($p0, $p1) {
        if ($p0 === 1) {
            if (SP.Ribbon.DocLibAspxPageComponent.$3) {
                SP.Ribbon.DocLibAspxPageComponent.$3.$5q_1();
            }
        }
    },
    $v_1: null,
    $l_1: null,
    get_$F_1: function SP_Ribbon_WebPartComponent$get_$F_1() {
        if (this.$l_1) {
            return this.$l_1;
        }
        if (this.get_$5_1()) {
            var $v_0 = this.get_$5_1();

            while ($v_0 && $v_0 !== document.body) {
                if (SP.Ribbon.Utility.$G($v_0, 'ms-SPZone') && !SP.Ribbon.SU.$0($v_0.getAttribute('zoneID'))) {
                    this.$l_1 = $v_0;
                    break;
                }
                $v_0 = $v_0.parentNode;
            }
        }
        return this.$l_1;
    },
    set_$F_1: function SP_Ribbon_WebPartComponent$set_$F_1($p0) {
        this.$l_1 = $p0;
        return $p0;
    },
    get_$5_1: function SP_Ribbon_WebPartComponent$get_$5_1() {
        if (!this.$v_1) {
            var $v_0 = $get('_wpSelected');

            if ($v_0) {
                var $v_1 = $v_0.value;

                if (!SP.Ribbon.SU.$2($v_1)) {
                    this.$v_1 = window.document.getElementById($v_1);
                }
            }
        }
        return this.$v_1;
    },
    set_$5_1: function SP_Ribbon_WebPartComponent$set_$5_1($p0) {
        this.$l_1 = null;
        this.$v_1 = $p0;
        return $p0;
    },
    $4o_1: function SP_Ribbon_WebPartComponent$$4o_1($p0) {
        var $v_0 = SP.Ribbon.WebPartComponent.$1a($p0);

        if (SP.Ribbon.SU.$0($v_0)) {
            return false;
        }
        return $v_0.hasNonPromotedContextualGroups;
    },
    $3r_1: function SP_Ribbon_WebPartComponent$$3r_1($p0, $p1) {
        var $v_0 = window._spWebPartComponents;

        if (this.get_$5_1() !== $p0 && this.get_$5_1()) {
            Sys.UI.DomElement.removeCssClass(this.get_$5_1(), 's4-wpActive');
            if (!SP.Ribbon.Utility.$G(this.get_$5_1(), 's4-wpcell') && !SP.Ribbon.Utility.$G(this.get_$5_1(), 's4-wpcell-plain')) {
                Sys.UI.DomElement.addCssClass(this.get_$5_1(), 's4-wpcell');
            }
            DeselectAllWPItems();
            var $v_2 = 'SelectionCbx' + this.$u_1(this.get_$5_1());
            var $v_3 = $get($v_2);

            if (!SP.Ribbon.SU.$0($v_3)) {
                $v_3.checked = false;
            }
        }
        this.set_$5_1($p0);
        if (!SP.Ribbon.SU.$0($v_0) && $p1) {
            var $v_4 = $v_0[this.get_$L_1()];

            if (!SP.Ribbon.SU.$0($v_4)) {
                var $v_5 = $v_4['firstTabId'];

                if (!SP.Ribbon.SU.$0($v_5)) {
                    window._spNextRibbonTabId = $v_5;
                }
            }
        }
        if (SP.Ribbon.WikiPageComponent.$C() || this.get_$I_1() || this.$4o_1(this.get_$L_1())) {
            if (!SP.Ribbon.Utility.$G($p0, 's4-wpActive')) {
                Sys.UI.DomElement.addCssClass($p0, 's4-wpActive');
                if (SP.Ribbon.Utility.$G($p0, 's4-wpcell')) {
                    Sys.UI.DomElement.removeCssClass($p0, 's4-wpcell');
                }
            }
            var $v_6 = 'SelectionCbx' + this.$u_1($p0);
            var $v_7 = $get($v_6);

            if (!SP.Ribbon.SU.$0($v_7)) {
                $v_7.checked = true;
            }
        }
        SP.Ribbon.WebPartComponent.$1W();
        this.$2O_1($p0);
        SP.Ribbon.WebPartComponent.$2x();
        if (this.get_$I_1()) {
            var $v_8 = GetElementsByName('MSOZone');

            if ($v_8 && $v_8.length > 0) {
                for (var $v_B = 0; $v_B < $v_8.length; $v_B++) {
                    Sys.UI.DomElement.removeCssClass($v_8[$v_B], 's4-wzActive');
                }
                var $v_9 = this.get_$F_1();

                if ($v_9 && !SP.Ribbon.Utility.$G($v_9, 's4-wzActive')) {
                    Sys.UI.DomElement.addCssClass(this.get_$F_1(), 's4-wzActive');
                }
                var $v_A = SP.Ribbon.WebPartComponent.getWebPartAdder();

                if ($v_A) {
                    $v_A._setZone(this.get_$d_1());
                }
            }
        }
        if (SP.Ribbon.SU.$0($v_0)) {
            return;
        }
        var $v_1 = $v_0[this.get_$L_1()];

        if (SP.Ribbon.SU.$0($v_1)) {
            return;
        }
        if (!SP.Ribbon.SU.$2($v_1.initPageComponentScript) && !(this.get_$5_1())._wpRibbonFetched) {
            (this.get_$5_1())._wpRibbonFetched = '1';
            eval($v_1.initPageComponentScript);
        }
        else {
            SP.Ribbon.UtilityInternal.$i();
        }
    },
    $2O_1: function SP_Ribbon_WebPartComponent$$2O_1($p0) {
        var $v_0 = window.document.getElementById('_wpSelected');

        if ($v_0) {
            if ($p0) {
                var $v_1 = $p0.id;

                $v_0.value = $v_1;
            }
            else {
                $v_0.value = '';
            }
        }
    },
    $3d_1: function SP_Ribbon_WebPartComponent$$3d_1($p0) {
        var $v_0 = window.document.getElementById('_wzSelected');

        if ($v_0) {
            if ($p0) {
                var $v_1 = $p0.getAttribute('zoneID');

                if (SP.Ribbon.SU.$0($v_1)) {
                    $v_1 = '';
                }
                $v_0.value = $v_1;
            }
            else {
                $v_0.value = '';
            }
        }
    },
    $3s_1: function SP_Ribbon_WebPartComponent$$3s_1($p0) {
        var $v_0 = SP.Ribbon.WebPartComponent.getWebPartAdder();

        if (this.get_$F_1() === $p0) {
            if (this.get_$I_1() && !SP.Ribbon.Utility.$G(this.get_$F_1(), 's4-wzActive')) {
                Sys.UI.DomElement.addCssClass(this.get_$F_1(), 's4-wzActive');
            }
            if ($v_0) {
                $v_0._setZone(this.get_$d_1());
            }
            return;
        }
        if (this.get_$F_1()) {
            Sys.UI.DomElement.removeCssClass(this.get_$F_1(), 's4-wzActive');
        }
        this.set_$F_1($p0);
        if (this.get_$I_1()) {
            if (!SP.Ribbon.Utility.$G($p0, 's4-wzActive')) {
                Sys.UI.DomElement.addCssClass($p0, 's4-wzActive');
            }
        }
        if ($v_0) {
            $v_0._setZone(this.get_$d_1());
        }
        if (this.get_$5_1()) {
            var $v_1 = this.get_$5_1();

            while ($v_1 && $v_1 !== document.body && $v_1 !== $p0) {
                $v_1 = $v_1.parentNode;
            }
            if ($v_1 !== $p0) {
                Sys.UI.DomElement.removeCssClass(this.get_$5_1(), 's4-wpActive');
                if (!SP.Ribbon.Utility.$G(this.get_$5_1(), 's4-wpcell') && !SP.Ribbon.Utility.$G(this.get_$5_1(), 's4-wpcell-plain')) {
                    Sys.UI.DomElement.addCssClass(this.get_$5_1(), 's4-wpcell');
                }
                DeselectAllWPItems();
                var $v_2 = 'SelectionCbx' + this.$u_1(this.get_$5_1());
                var $v_3 = $get($v_2);

                if (!SP.Ribbon.SU.$0($v_3)) {
                    $v_3.checked = false;
                }
                SP.Ribbon.WebPartComponent.$1W();
                this.$v_1 = null;
                this.$2O_1(null);
            }
        }
        SP.Ribbon.UtilityInternal.$i();
    },
    get_$d_1: function SP_Ribbon_WebPartComponent$get_$d_1() {
        if (!this.get_$F_1()) {
            return null;
        }
        return ((this.get_$F_1()).attributes.getNamedItem('ZoneID')).value;
    },
    get_$3u_1: function SP_Ribbon_WebPartComponent$get_$3u_1() {
        if (!this.get_$5_1()) {
            return null;
        }
        return window.document.getElementById(this.get_$L_1() + '_MenuLink');
    },
    get_$2Z_1: function SP_Ribbon_WebPartComponent$get_$2Z_1() {
        if (!this.get_$5_1()) {
            return null;
        }
        var $v_0 = (this.get_$5_1()).attributes.getNamedItem(this.get_$L_1() + '_RelatedListId');

        if (!$v_0) {
            return null;
        }
        return $v_0.value;
    },
    get_$3v_1: function SP_Ribbon_WebPartComponent$get_$3v_1() {
        if (!this.get_$5_1()) {
            return null;
        }
        var $v_0 = (this.get_$5_1()).attributes.getNamedItem(this.get_$L_1() + '_RelatedWebId');

        if (!$v_0) {
            return null;
        }
        return $v_0.value;
    },
    get_$3w_1: function SP_Ribbon_WebPartComponent$get_$3w_1() {
        if (!this.get_$5_1()) {
            return null;
        }
        var $v_0 = (this.get_$5_1()).attributes.getNamedItem(this.get_$L_1() + '_WebPartStorageKey');

        if (!$v_0) {
            return null;
        }
        return $v_0.value;
    },
    get_$I_1: function SP_Ribbon_WebPartComponent$get_$I_1() {
        var $v_0 = $get('MSOLayout_InDesignMode');

        if ($v_0) {
            var $v_2 = $v_0.attributes.getNamedItem('value');

            if ($v_2 && $v_2.value === '1') {
                return true;
            }
        }
        var $v_1 = $get('MSOSPWebPartManager_DisplayModeName');

        if ($v_1) {
            var $v_3 = $v_1.attributes.getNamedItem('value');

            if ($v_3 && $v_3.value.toUpperCase() === 'DESIGN') {
                return true;
            }
        }
        return false;
    },
    get_$1T_1: function SP_Ribbon_WebPartComponent$get_$1T_1() {
        var $v_0 = this.get_$3u_1();

        if (!$v_0) {
            return null;
        }
        return $v_0.getAttribute('menuid');
    },
    get_$L_1: function SP_Ribbon_WebPartComponent$get_$L_1() {
        var $v_0 = this.get_$5_1();

        if ($v_0) {
            return this.$u_1(this.get_$5_1());
        }
        return null;
    },
    $u_1: function SP_Ribbon_WebPartComponent$$u_1($p0) {
        if (!$p0) {
            return null;
        }
        return $p0.id.substr(12);
    },
    $46_1: function SP_Ribbon_WebPartComponent$$46_1($p0) {
        if (SP.Ribbon.SU.$2(this.get_$1T_1())) {
            return false;
        }
        try {
            window.MSOWebPartPage_OpenMenu(this.get_$1T_1(), null, this.get_$L_1(), false, false);
            var $v_0 = this.$2z_1($p0);

            return !!$v_0 && $v_0.style.display !== 'none';
        }
        catch ($$e_2) {
            window.OpenWebPartMenu(this.get_$1T_1(), null, this.get_$L_1(), false, true);
            return false;
        }
    },
    $2z_1: function SP_Ribbon_WebPartComponent$$2z_1($p0) {
        var $v_0 = this.get_$1T_1();

        if (SP.Ribbon.SU.$2($v_0)) {
            return null;
        }
        var $v_1 = $get($v_0);

        if (!$v_1) {
            return null;
        }
        var $v_2 = $v_1.getElementsByTagName('ie:menuitem');

        for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
            if ($v_2[$v_3].id === $p0) {
                return $v_2[$v_3];
            }
        }
        $v_2 = $v_1.getElementsByTagName('menuitem');
        for (var $v_4 = 0; $v_4 < $v_2.length; $v_4++) {
            if ($v_2[$v_4].id === $p0) {
                return $v_2[$v_4];
            }
        }
        return null;
    },
    $3t_1: function SP_Ribbon_WebPartComponent$$3t_1($p0, $p1, $p2) {
        var $v_0 = this.$2z_1($p0);

        if (!$v_0) {
            return false;
        }
        var $v_1 = $v_0.getAttribute('onmenuclick');

        if ($v_1 && $v_1.length > 0) {
            if ($v_1.startsWith('javascript:')) {
                $v_1 = $v_1.substr(11);
            }
            eval($v_1);
            switch ($p0) {
            case 'MSOMenu_Minimize':
            case 'MSOMenu_Restore':
                break;
            default:
                ((SP.Ribbon.PageManager.get_instance()).get_commandDispatcher()).executeCommand(Commands.CommandIds.ApplicationStateChanged, null);
                break;
            }
            return true;
        }
        return false;
    }
};
SP.Ribbon.FetchListViewWebPartPageComponentWorker = function SP_Ribbon_FetchListViewWebPartPageComponentWorker($p0, $p1, $p2, $p3) {
    this.$$d_$4r_0 = Function.createDelegate(this, this.$4r_0);
    this.$$d_$4s_0 = Function.createDelegate(this, this.$4s_0);
    this.$3X_0 = $p0;
    this.$3S_0 = $p1;
    this.$o_0 = $p2;
    this.$2M_0 = $p3;
};
SP.Ribbon.FetchListViewWebPartPageComponentWorker.prototype = {
    $p_0: null,
    $3X_0: null,
    $3S_0: null,
    $o_0: null,
    $2M_0: null,
    fetch: function SP_Ribbon_FetchListViewWebPartPageComponentWorker$fetch() {
        this.$p_0 = SP.UI.Notify.addNotification(SP.Utilities.HttpUtility.htmlEncode(SP.Res.genericLoading), false);
        var $v_0 = null;
        var $v_1 = SP.Ribbon.NativeUtility.getCtxForView('{' + this.$2M_0.toUpperCase() + '}');

        if ($v_1) {
            $v_0 = $v_1.HttpRoot;
        }
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = SP.PageContextInfo.get_webServerRelativeUrl();
        }
        var $v_2 = new SP.Utilities.UrlBuilder($v_0);

        $v_2.combinePath(SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl() + 'wpribbon.aspx');
        $v_2.addKeyValueQueryString('GetFormName', '0');
        $v_2.addKeyValueQueryString('WebPartId', this.$3X_0);
        $v_2.addKeyValueQueryString('PageComponentId', this.$3S_0);
        $v_2.addKeyValueQueryString('List', this.$o_0);
        $v_2.addKeyValueQueryString('View', this.$2M_0);
        var $v_3 = document.URL;
        var $v_4 = GetUrlKeyValue('RootFolder', false, $v_3);

        if (!SP.ScriptUtility.isNullOrEmptyString($v_4)) {
            $v_2.addKeyValueQueryString('RootFolder', $v_4);
        }
        var $v_5 = GetUrlKeyValue('FolderCTID', false, $v_3);

        if (!SP.ScriptUtility.isNullOrEmptyString($v_5)) {
            $v_2.addKeyValueQueryString('FolderCTID', $v_5);
        }
        var $v_6 = GetUrlKeyValue('Source', false, $v_3);

        if (!SP.ScriptUtility.isNullOrEmptyString($v_6)) {
            $v_2.addKeyValueQueryString('Source', $v_6);
        }
        var $v_7 = $v_3.indexOf('?');

        if ($v_7 > 0) {
            $v_3 = $v_3.substr(0, $v_7);
        }
        $v_7 = $v_3.indexOf('#');
        if ($v_7 > 0) {
            $v_3 = $v_3.substr(0, $v_7);
        }
        $v_7 = $v_3.indexOf('//');
        if ($v_7 > 0) {
            $v_3 = $v_3.substr($v_7 + 2);
            $v_7 = $v_3.indexOf('/');
            if ($v_7 < 0) {
                throw Error.invalidOperation();
            }
            $v_3 = $v_3.substr($v_7);
        }
        $v_3 = unescape($v_3);
        $v_2.addKeyValueQueryString('FileUrl', $v_3);
        SP.PageRequest.doGet($v_2.get_url(), 'text/html', this.$$d_$4s_0, this.$$d_$4r_0);
    },
    $4s_0: function SP_Ribbon_FetchListViewWebPartPageComponentWorker$$4s_0($p0, $p1) {
        SP.UI.Notify.removeNotification(this.$p_0);
        var $v_0 = ($p1.get_executor()).get_responseData();
        var $v_1 = $v_0.indexOf('function _initTRA');

        if ($v_1 < 0) {
            return;
        }
        $v_1 = $v_0.indexOf('<script ');
        $v_1 = $v_0.indexOf('>', $v_1) + 1;
        var $v_2 = $v_0.indexOf('</script>', $v_1);

        if ($v_2 < 0) {
            return;
        }
        var $v_3 = $v_0.substring($v_1, $v_2);

        SP.Ribbon.WebPartComponent.$2u($v_3);
        $v_1 = $v_2 + 9;
        while (($v_1 = $v_0.indexOf('<script ', $v_1)) > 0) {
            $v_1 = $v_0.indexOf('>', $v_1);
            if ($v_1 < 0) {
                break;
            }
            $v_1++;
            $v_2 = $v_0.indexOf('</script>', $v_1);
            if ($v_2 < 0) {
                break;
            }
            $v_3 = $v_0.substring($v_1, $v_2);
            SP.Ribbon.WebPartComponent.$2u($v_3);
            $v_1 = $v_2 + 9;
        }
        SP.Ribbon.WebPartComponent.$1W();
        SP.Ribbon.WebPartComponent.$2x();
        SP.Ribbon.UtilityInternal.$i();
    },
    $4r_0: function SP_Ribbon_FetchListViewWebPartPageComponentWorker$$4r_0($p0, $p1) {
        SP.UI.Notify.removeNotification(this.$p_0);
    }
};
SP.Ribbon.StateDetails = function SP_Ribbon_StateDetails() {
};
SP.Ribbon.StateDetails.prototype = {
    viewCtx: null,
    contactingServerMsg: null,
    successMsg: null,
    failureMsg: null
};
SP.Ribbon.AccessRequestsWebPartPageComponent = function SP_Ribbon_AccessRequestsWebPartPageComponent(id, data) {
    SP.Ribbon.AccessRequestsWebPartPageComponent.initializeBase(this, [id, data]);
    this.$Y_4 = data.ViewId;
};
SP.Ribbon.AccessRequestsWebPartPageComponent.prototype = {
    $Y_4: null,
    handleCommand: function SP_Ribbon_AccessRequestsWebPartPageComponent$handleCommand(commandId, properties, sequence) {
        var $v_0 = this.get_ctx();

        if (commandId === 'CheckUsrPerm') {
            var $v_1 = $v_0.HttpRoot;
            var $v_2 = GetSelectedItemsDict($v_0);
            var $v_3 = this.$1Z_4($v_2, $v_0);

            if ($v_3 && $v_3.length > 0) {
                var $v_4 = $v_3[0];
                var $v_5 = $v_4.ReqForUser;
                var $v_6 = $v_5[0];
                var $v_7 = $v_6.title;
                var $v_8 = $v_4.RequestedWebId;
                var $v_9 = $v_4.RequestedListId;
                var $v_A = $v_4.RequestedListItemId;
                var $v_B = '';

                if ($v_A !== (SP.Guid.get_empty()).toString('B')) {
                    $v_B = $v_9 + ',' + $v_A + ',DOCUMENT';
                }
                else if ($v_9 !== (SP.Guid.get_empty()).toString('B')) {
                    $v_B = $v_9 + ',LIST';
                }
                else {
                    $v_B = $v_8 + ',WEB';
                }
                if (!$v_7) {
                    $v_7 = $v_4.RequestedForDisplayName;
                }
                var $v_C = String.format('javascript:OpenPopUpPage(\'{0}{1}chkperm.aspx?obj={2}&users={3}\');', $v_1, SP.Utilities.Utility.get_layoutsLatestVersionUrl(), $v_B, SP.Utilities.HttpUtility.urlKeyValueEncode($v_7));

                this.executeClickScript($v_C);
            }
            return true;
        }
        else if (commandId === 'Resend' || commandId === 'Revoke' || commandId === 'Approve' || commandId === 'Deny') {
            var $v_D = 0;
            var $v_E = new SP.Ribbon.StateDetails();

            $v_E.viewCtx = $v_0;
            if (commandId === 'Resend') {
                $v_D = 0;
                $v_E.contactingServerMsg = window.self.Strings.STS.L_AccReqResendingInv;
                $v_E.successMsg = window.self.Strings.STS.L_AccReqResendingInvSuccess;
                $v_E.failureMsg = window.self.Strings.STS.L_AccReqResendingInvFail;
            }
            else if (commandId === 'Revoke') {
                $v_D = 5;
                $v_E.contactingServerMsg = window.self.Strings.STS.L_AccReqRevokingInv;
                $v_E.successMsg = window.self.Strings.STS.L_AccReqRevokingInvSuccess;
                $v_E.failureMsg = window.self.Strings.STS.L_AccReqRevokingInvFail;
            }
            else if (commandId === 'Approve') {
                $v_D = 1;
                $v_E.contactingServerMsg = window.self.Strings.STS.L_AccReqSendingApproval;
                $v_E.successMsg = window.self.Strings.STS.L_AccReqApprovalSuccess;
                $v_E.failureMsg = window.self.Strings.STS.L_AccReqApprovalFail;
            }
            else if (commandId === 'Deny') {
                $v_D = 3;
                $v_E.contactingServerMsg = window.self.Strings.STS.L_AccReqSendingDenial;
                $v_E.successMsg = window.self.Strings.STS.L_AccReqDenialSuccess;
                $v_E.failureMsg = window.self.Strings.STS.L_AccReqDenialFail;
            }
            var $v_F = null;

            $v_F = GetSelectedItemsDict($v_0);
            var $v_G = this.$1Z_4($v_F, $v_0);

            if ($v_G && $v_G.length > 0) {
                SP.Ribbon.NativeUtility.updateStatus($v_G, $v_D, $v_E);
            }
            return true;
        }
        else {
            return false;
        }
    },
    getFocusedCommands: function SP_Ribbon_AccessRequestsWebPartPageComponent$getFocusedCommands() {
        var $v_0 = SP.Ribbon.ListViewWebPartPageComponent.prototype.getFocusedCommands.call(this);

        Array.add($v_0, 'Resend');
        Array.add($v_0, 'Revoke');
        Array.add($v_0, 'Approve');
        Array.add($v_0, 'Deny');
        Array.add($v_0, 'CheckUsrPerm');
        return $v_0;
    },
    canHandleCommand: function SP_Ribbon_AccessRequestsWebPartPageComponent$canHandleCommand(commandId) {
        if (commandId === 'Ribbon.AccessRequestsContextualGroup.Edit' || commandId === 'Ribbon.AccessRequestsContextualGroup.Edit.InvitationsGroup' || commandId === 'Ribbon.AccessRequestsContextualGroup.Edit.RequestsGroup' || commandId === 'Ribbon.AccessRequestsContextualGroup.Edit.CheckGroup') {
            return true;
        }
        else if (commandId === 'CheckUsrPerm') {
            var $v_0 = true;
            var $v_1 = null;
            var $v_2 = this.get_ctx();

            $v_1 = GetSelectedItemsDict($v_2);
            var $v_3 = this.$1Z_4($v_1, $v_2);

            if ($v_3.length === 1) {
                var $v_4 = $v_3[0];
                var $v_5 = $v_4.IsInvitation;

                if ($v_5 === 'Yes') {
                    $v_0 = false;
                }
            }
            else {
                if ($v_3.length > 1) {
                    $v_0 = false;
                }
            }
            return $v_0;
        }
        else {
            var $v_6 = null;
            var $v_7 = this.get_ctx();
            var $v_8 = $v_7.BaseViewID;

            if ($v_8 === 1 || $v_8 === 2) {
                $v_6 = GetSelectedItemsDict($v_7);
                var $v_9 = this.$1Z_4($v_6, $v_7);
                var $v_A = false;

                for (var $$arr_C = $v_9, $$len_D = $$arr_C.length, $$idx_E = 0; $$idx_E < $$len_D; ++$$idx_E) {
                    var $v_B = $$arr_C[$$idx_E];
                    var $v_C = $v_B.IsInvitation;
                    var $v_D = $v_B.PermissionType;
                    var $v_E = $v_B.PermissionLevelRequested;
                    var $v_F = null;

                    if ($v_D === 'SharePoint Group') {
                        var $v_G = window.self.g_accReqCSRBridgeSPGroups;

                        $v_F = $v_G[$v_E];
                    }
                    else if ($v_D === 'Role Definition') {
                        var $v_H = window.self.g_accReqCSRBridgeSPIndvPerms;

                        $v_F = $v_H[$v_E];
                    }
                    if (!$v_F && commandId === 'Approve') {
                        $v_A = false;
                        break;
                    }
                    if (commandId === 'Resend' || commandId === 'Revoke') {
                        if ($v_C === 'Yes') {
                            $v_A = true;
                        }
                        else {
                            $v_A = false;
                            break;
                        }
                    }
                    else if (commandId === 'Approve' || commandId === 'Deny') {
                        if ($v_C === 'No') {
                            $v_A = true;
                        }
                        else {
                            $v_A = false;
                            break;
                        }
                    }
                }
                return $v_A;
            }
            return false;
        }
    },
    $1Z_4: function SP_Ribbon_AccessRequestsWebPartPageComponent$$1Z_4($p0, $p1) {
        var $v_0 = this.getCountOfSelectedItems();
        var $v_1 = 0;
        var $v_2 = new Array($v_0);
        var $$dict_5 = $p0;

        for (var $$key_6 in $$dict_5) {
            var $v_3 = {
                key: $$key_6,
                value: $$dict_5[$$key_6]
            };
            var $v_4 = $v_3.key.split(',');
            var $v_5 = $v_4[1];
            var $v_6 = $p1.ListData;
            var $v_7 = $v_6.Row;
            var $v_8 = 0;

            for (var $$arr_D = $v_7, $$len_E = $$arr_D.length, $$idx_F = 0; $$idx_F < $$len_E; ++$$idx_F) {
                var $v_A = $$arr_D[$$idx_F];
                var $v_B = $v_A.ID;

                if ($v_B === $v_5) {
                    break;
                }
                $v_8++;
            }
            var $v_9 = $v_7[$v_8];

            $v_2[$v_1++] = $v_9;
        }
        return $v_2;
    },
    getGlobalCommands: function SP_Ribbon_AccessRequestsWebPartPageComponent$getGlobalCommands() {
        var $v_0 = SP.Ribbon.ListViewWebPartPageComponent.prototype.getGlobalCommands.call(this);
        var $$dict_1 = this.get_alwaysEnabledCommands();

        for (var $$key_2 in $$dict_1) {
            var $v_1 = {
                key: $$key_2,
                value: $$dict_1[$$key_2]
            };

            Array.add($v_0, $v_1.key);
        }
        return $v_0;
    },
    get_alwaysEnabledCommands: function SP_Ribbon_AccessRequestsWebPartPageComponent$get_alwaysEnabledCommands() {
        this._alwaysEnabledCommands = SP.Ribbon.WebPartPageComponent.prototype.get_alwaysEnabledCommands.call(this);
        this._alwaysEnabledCommands['Ribbon.AccessRequestsContextualGroup.Edit'] = true;
        this._alwaysEnabledCommands['Ribbon.AccessRequestsContextualGroup.Edit.InvitationsGroup'] = true;
        this._alwaysEnabledCommands['Ribbon.AccessRequestsContextualGroup.Edit.RequestsGroup'] = true;
        this._alwaysEnabledCommands['Ribbon.AccessRequestsContextualGroup.Edit.CheckGroup'] = true;
        return this._alwaysEnabledCommands;
    }
};
SP.Ribbon.BlogPostWebPartPageComponent = function SP_Ribbon_BlogPostWebPartPageComponent(id, data) {
    SP.Ribbon.BlogPostWebPartPageComponent.initializeBase(this, [id, data]);
    this.$Y_5 = data.ViewId;
};
SP.Ribbon.BlogPostWebPartPageComponent.prototype = {
    $Y_5: null,
    handleCommand: function SP_Ribbon_BlogPostWebPartPageComponent$handleCommand(commandId, properties, sequence) {
        var $v_0 = this.get_ctx();
        var $v_1 = this.getCountOfSelectedItems();

        if (commandId === 'NewListItem') {
            this.executeClickScript(this.getDefaultNewMenuItemScript());
            return true;
        }
        return SP.Ribbon.DocLibWebPartPageComponent.prototype.handleCommand.call(this, commandId, properties, sequence);
    },
    get_alwaysEnabledCommands: function SP_Ribbon_BlogPostWebPartPageComponent$get_alwaysEnabledCommands() {
        this._alwaysEnabledCommands = SP.Ribbon.WebPartPageComponent.prototype.get_alwaysEnabledCommands.call(this);
        this._alwaysEnabledCommands['Ribbon.Blog.Posts'] = true;
        this._alwaysEnabledCommands['Ribbon.Blog.Posts.NewGroup'] = true;
        this._alwaysEnabledCommands['Ribbon.Blog.Posts.PostsGroup'] = true;
        this._alwaysEnabledCommands['Ribbon.Blog.Posts.StateGroup'] = true;
        this._alwaysEnabledCommands['NewListItem'] = true;
        this._alwaysEnabledCommands['Ribbon.Blog.Comments'] = true;
        this._alwaysEnabledCommands['Ribbon.Blog.Comments.CommentsGroup'] = true;
        this._alwaysEnabledCommands['Ribbon.Blog.Comments.StateGroup'] = true;
        this._alwaysEnabledCommands['Ribbon.Blog.Categories'] = true;
        this._alwaysEnabledCommands['Ribbon.Blog.Categories.NewGroup'] = true;
        this._alwaysEnabledCommands['Ribbon.Blog.Categories.CategoriesGroup'] = true;
        this._alwaysEnabledCommands['Ribbon.Blog.Categories.StateGroup'] = true;
        this._alwaysEnabledCommands['Ribbon.Blog.Lists'] = true;
        this._alwaysEnabledCommands['Ribbon.Blog.Lists.Settings.SettingsGroup'] = true;
        this._alwaysEnabledCommands['Ribbon.Blog.Lists.Actions.ActionsGroup'] = true;
        return this._alwaysEnabledCommands;
    },
    canHandleCommand: function SP_Ribbon_BlogPostWebPartPageComponent$canHandleCommand(commandId) {
        return SP.Ribbon.DocLibWebPartPageComponent.prototype.canHandleCommand.call(this, commandId);
    },
    getGlobalCommands: function SP_Ribbon_BlogPostWebPartPageComponent$getGlobalCommands() {
        var $v_0 = SP.Ribbon.DocLibWebPartPageComponent.prototype.getGlobalCommands.call(this);

        return $v_0;
    },
    getFocusedCommands: function SP_Ribbon_BlogPostWebPartPageComponent$getFocusedCommands() {
        return SP.Ribbon.DocLibWebPartPageComponent.prototype.getFocusedCommands.call(this);
    }
};
SP.Ribbon.PageManager = function SP_Ribbon_PageManager() {
    SP.Ribbon.PageManager.initializeBase(this);
};
SP.Ribbon.PageManager.get_instance = function SP_Ribbon_PageManager$get_instance() {
    if (SP.ScriptUtility.isNullOrUndefined(SP.Ribbon.PageManager.$q)) {
        SP.Ribbon.PageManager.$q = new SP.Ribbon.PageManager();
        SP.Ribbon.PageManager.$q.initializeInternal();
    }
    return SP.Ribbon.PageManager.$q;
};
SP.Ribbon.PageManager.prototype = {
    dispose: function SP_Ribbon_PageManager$dispose() {
        CUI.Page.PageManager.prototype.dispose.call(this);
        SP.Ribbon.PageManager.$q = null;
    },
    executeRootCommand: function SP_Ribbon_PageManager$executeRootCommand(commandId, properties, commandInfo, root) {
        var $v_0;

        if (!SP.ScriptUtility.isNullOrUndefined(commandInfo) && commandId !== 'RibbonEvent' && (commandId !== 'CommandContextChanged' || !SP.ScriptUtility.isNullOrUndefined(properties) && properties['ChangedByUser'])) {
            var $v_1 = 0;
            var $v_2 = 0;

            if (typeof Date !== 'undefined') {
                var $v_3 = new Date();

                $v_1 = $v_3.getTime();
            }
            $v_0 = CUI.Page.PageManager.prototype.executeRootCommand.call(this, commandId, properties, commandInfo, root);
            if (typeof Date !== 'undefined') {
                var $v_4 = new Date();

                $v_2 = $v_4.getTime() - $v_1;
                if ($v_1) {
                    $v_1 = $v_1 & 4294967295;
                    $v_2 = $v_2 & 4294967295;
                    if ($v_1 < 0) {
                        $v_1 += 4294967296;
                    }
                    if ($v_2 < 0) {
                        $v_2 += 4294967296;
                    }
                    SP.Ribbon.NativeUtility.addCommandStreamToWSA(commandInfo, $v_1, $v_2);
                }
            }
        }
        else {
            $v_0 = CUI.Page.PageManager.prototype.executeRootCommand.call(this, commandId, properties, commandInfo, root);
        }
        return $v_0;
    }
};
SP.Ribbon.PageStateActionButton = function SP_Ribbon_PageStateActionButton() {
};
SP.Ribbon.PageStateActionButton.updateState = function SP_Ribbon_PageStateActionButton$updateState() {
    var $v_0 = SP.Ribbon.PageManager.get_instance();
    var $v_1 = window._spPageStateActionControlId;

    if ($v_0 && !SP.Ribbon.SU.$2($v_1)) {
        var $v_2 = $get($v_1);

        if ($v_2) {
            var $v_3 = $v_2.querySelector('span:first-child > img');
            var $v_4 = $v_2.querySelector('.ms-promotedActionButton-text');

            if (($v_0.get_commandDispatcher()).isCommandEnabled('PageStateGroupEdit')) {
                var $v_5 = ($v_2.getAttribute('_edittooltip')).toString();

                $v_2.setAttribute('_action', 'edit');
                $v_2.title = $v_5;
                if ($v_3) {
                    $v_3.style.left = '-' + $v_2.getAttribute('_editoffsetx') + 'px';
                    $v_3.style.top = '-' + $v_2.getAttribute('_editoffsety') + 'px';
                    $v_3.alt = $v_5;
                }
                if ($v_4) {
                    SP.UI.UIUtility.setInnerText($v_4, $v_5);
                }
            }
            else if (($v_0.get_commandDispatcher()).isCommandEnabled('PageStateGroupSaveAndStop')) {
                var $v_6 = ($v_2.getAttribute('_savetooltip')).toString();

                $v_2.setAttribute('_action', 'save');
                $v_2.title = $v_6;
                if ($v_3) {
                    $v_3.style.left = '-' + $v_2.getAttribute('_saveoffsetx') + 'px';
                    $v_3.style.top = '-' + $v_2.getAttribute('_saveoffsety') + 'px';
                    $v_3.alt = $v_6;
                }
                if ($v_4) {
                    SP.UI.UIUtility.setInnerText($v_4, $v_6);
                }
            }
        }
    }
};
SP.Ribbon.PageStateActionButton.sendCommand = function SP_Ribbon_PageStateActionButton$sendCommand() {
    var $v_0 = SP.Ribbon.PageManager.get_instance();

    if ($v_0) {
        if (($v_0.get_commandDispatcher()).isCommandEnabled('PageStateGroupEdit')) {
            ($v_0.get_commandDispatcher()).executeCommand('PageStateGroupEdit', null);
        }
        else if (($v_0.get_commandDispatcher()).isCommandEnabled('PageStateGroupSaveAndStop')) {
            ($v_0.get_commandDispatcher()).executeCommand('PageStateGroupSaveAndStop', null);
        }
    }
};
SP.Ribbon.RelatedFieldsFetcher = function SP_Ribbon_RelatedFieldsFetcher($p0, $p1) {
    this.$$d_fetchFailure = Function.createDelegate(this, this.fetchFailure);
    this.$$d_fetchSuccess = Function.createDelegate(this, this.fetchSuccess);
    this.$2D_0 = $p0;
    this.$2E_0 = $p1;
};
SP.Ribbon.RelatedFieldsFetcher.prototype = {
    $2L_0: null,
    $o_0: null,
    $1E_0: null,
    $Q_0: null,
    $2D_0: null,
    $2E_0: null,
    getSelectedListValue: function SP_Ribbon_RelatedFieldsFetcher$getSelectedListValue() {
        var $v_0 = null;

        if (this.$Q_0.getIsListForm()) {
            var $v_1 = $get('currentListForRelationshipsRibbon');

            if (!SP.Ribbon.SU.$0($v_1)) {
                $v_0 = $v_1.value;
            }
        }
        else {
            if (!SP.Ribbon.SU.$0(this.$2D_0)) {
                $v_0 = this.$2D_0;
            }
        }
        return $v_0;
    },
    fetchRelatedFieldsBegin: function SP_Ribbon_RelatedFieldsFetcher$fetchRelatedFieldsBegin($p0) {
        if (this.$Q_0) { }
        this.$Q_0 = $p0;
        var $v_0 = this.getSelectedListValue();

        if (SP.Ribbon.SU.$2($v_0)) {
            this.$Q_0.fetchRelatedFieldsFailure(SP.Utilities.HttpUtility.htmlEncode(SP.Res.relationships_UnknownError));
            return true;
        }
        if (!this.$1E_0) {
            this.$1E_0 = new SP.ClientContext();
        }
        var $v_1 = null;

        if (!this.$Q_0.getIsListForm() && !SP.Ribbon.SU.$0(this.$2E_0)) {
            $v_1 = (this.$1E_0.get_site()).openWebById(new SP.Guid(this.$2E_0));
        }
        else {
            $v_1 = this.$1E_0.get_web();
        }
        var $v_2 = new SP.Guid($v_0);

        this.$o_0 = ($v_1.get_lists()).getById($v_2);
        this.$o_0.retrieve(SP.ListPropertyNames.title, SP.ListPropertyNames.baseType);
        this.$2L_0 = this.$o_0.getRelatedFieldsExtendedData();
        var $v_3 = this.$2L_0.retrieveItems();

        $v_3.retrieve([SP.RelatedFieldExtendedDataPropertyNames.webId, SP.RelatedFieldExtendedDataPropertyNames.listId, SP.RelatedFieldExtendedDataPropertyNames.fieldId, SP.RelatedFieldExtendedDataPropertyNames.resolvedListTitle, SP.RelatedFieldExtendedDataPropertyNames.toolTipDescription, SP.RelatedFieldExtendedDataPropertyNames.listImageUrl]);
        this.$1E_0.executeQueryAsync(this.$$d_fetchSuccess, this.$$d_fetchFailure);
        return false;
    },
    fetchSuccess: function SP_Ribbon_RelatedFieldsFetcher$fetchSuccess($p0, $p1) {
        if (!SP.Ribbon.SU.$0(this.$Q_0)) {
            var $v_0 = this.$o_0.get_baseType() === 1;

            this.$Q_0.fetchRelatedFieldsSuccess(this.$o_0.get_title(), $v_0, this.$2L_0);
        }
        this.$Q_0 = null;
    },
    fetchFailure: function SP_Ribbon_RelatedFieldsFetcher$fetchFailure($p0, $p1) {
        if ($p1 && !SP.Ribbon.SU.$0($p1.get_message())) { }
        if (!SP.Ribbon.SU.$0(this.$Q_0)) {
            this.$Q_0.fetchRelatedFieldsFailure(SP.Utilities.HttpUtility.htmlEncode(SP.Res.relationships_RelatedFieldsFetchFailed));
        }
        this.$Q_0 = null;
    }
};
SP.Ribbon.RelatedFieldsHelper = function SP_Ribbon_RelatedFieldsHelper(bIsListForm) {
    this.$x_0 = -1;
    this.$3H_0 = bIsListForm;
    if (bIsListForm) {
        this.$a_0 = 'ListForm';
    }
    else {
        this.$a_0 = 'ListView';
    }
};
SP.Ribbon.RelatedFieldsHelper.addAndConnectRelatedWebPart = function SP_Ribbon_RelatedFieldsHelper$addAndConnectRelatedWebPart(properties, activeZoneId, activeStorageKeyId, bInWikiEditMode) {
    var $v_0 = properties.CommandValueId;
    var $v_1 = $v_0.split(';');

    if ($v_1.length >= 2) {
        var $v_2 = $v_1[0];
        var $v_3 = $v_1[1];
        var $v_4 = $v_1[2];
        var $v_5 = activeZoneId;
        var $v_6 = activeStorageKeyId;
        var $v_7 = bInWikiEditMode && !$v_5;
        var $v_8 = String.format('RelatedAdder_addItemAndConnect(\'{0}\', \'{1}\', \'{2}\', \'{3}\', \'{4}\', {5})', $v_5, $v_2, $v_3, $v_4, $v_6, $v_7);

        eval($v_8);
    }
};
SP.Ribbon.RelatedFieldsHelper.prototype = {
    $f_0: null,
    $1I_0: false,
    $3P_0: null,
    $p_0: null,
    $a_0: null,
    $3H_0: false,
    getIsListForm: function SP_Ribbon_RelatedFieldsHelper$getIsListForm() {
        return this.$3H_0;
    },
    $35_0: function SP_Ribbon_RelatedFieldsHelper$$35_0() {
        return '\r\n                <Menu Id=\"Ribbon.Page.InsertRelatedDataTo' + this.$a_0 + '.RelatedWebPart.Menu\">\r\n                  <MenuSection Id=\"Ribbon.Page.InsertRelatedDataTo' + this.$a_0 + '.RelatedWebPart.Menu.MS\" Scrollable=\"false\" DisplayMode=\"Menu16\">\r\n                    <Controls Id=\"Ribbon.Page.InsertRelatedDataTo' + this.$a_0 + '.RelatedWebPart.Menu.MS.Controls\">\r\n                  ';
    },
    $3c_0: '\r\n                    </Controls>\r\n                  </MenuSection>\r\n                </Menu>\r\n        ',
    fetchRelatedFieldsSuccess: function SP_Ribbon_RelatedFieldsHelper$fetchRelatedFieldsSuccess(listTitle, bIsDocumentLibrary, relatedFields) {
        if (!SP.Ribbon.SU.$0(this.$f_0)) {
            return;
        }
        this.$1I_0 = false;
        var $v_0 = new Sys.StringBuilder();

        $v_0.append(this.$35_0());
        if (!relatedFields || !relatedFields.get_count()) {
            var $v_1 = null;

            if (bIsDocumentLibrary) {
                $v_1 = SP.Res.relationships_DocLibHasNoRelatedLists;
            }
            else {
                $v_1 = SP.Res.relationships_ListHasNoRelatedLists;
            }
            var $v_2 = String.format($v_1, listTitle);

            $v_0.append('\r\n                    <Button \r\n                        Id=\"Ribbon.Page.InsertRelatedDataTo' + this.$a_0 + '.RelatedWebPart.Menu.MS.InsertRelatedPartMessage\"\r\n                        Image16by16=\"' + SP.Utilities.Utility.get_layoutsLatestVersionUrl() + 'images/edit.gif\"\r\n                        Image32by32=\"' + SP.Utilities.Utility.get_layoutsLatestVersionUrl() + 'images/placeholder32x32.png\"\r\n                        LabelText=\"' + SP.Utilities.HttpUtility.htmlEncode($v_2) + '\"\r\n                    />');
        }
        else {
            var $v_3 = relatedFields.get_count();

            for (var $v_4 = 0; $v_4 < $v_3; ++$v_4) {
                var $v_5 = relatedFields.itemAt($v_4);
                var $v_6 = ($v_5.get_webId()).toString('B');
                var $v_7 = ($v_5.get_listId()).toString('B');
                var $v_8 = ($v_5.get_fieldId()).toString('B');
                var $v_9 = $v_6 + ';' + $v_7 + ';' + $v_8;

                $v_0.append('\r\n                        <Button \r\n                            Id=\"Ribbon.Page.InsertRelatedDataTo' + this.$a_0 + '.RelatedWebPart.Menu.MS.InsertRelatedPart' + $v_4 + '\"\r\n                            CommandValueId=\"' + SP.Utilities.HttpUtility.htmlEncode($v_9) + '\"\r\n                            Command=\"InsertRelatedWebPartTo' + this.$a_0 + '\"\r\n                            Image16by16=\"' + $v_5.get_listImageUrl() + '\"\r\n                            Image32by32=\"' + SP.Utilities.Utility.get_layoutsLatestVersionUrl() + 'images/placeholder32x32.png\"\r\n                            LabelText=\"' + SP.Utilities.HttpUtility.htmlEncode($v_5.get_resolvedListTitle()) + '\" \r\n                            ToolTipTitle=\"' + SP.Utilities.HttpUtility.htmlEncode($v_5.get_resolvedListTitle()) + '\"\r\n                            ToolTipDescription=\"' + SP.Utilities.HttpUtility.htmlEncode($v_5.get_toolTipDescription()) + '\"\r\n                        />');
            }
        }
        $v_0.append(this.$3c_0);
        this.$f_0 = $v_0.toString();
    },
    fetchRelatedFieldsFailure: function SP_Ribbon_RelatedFieldsHelper$fetchRelatedFieldsFailure(localizedErrorMessage) {
        if (!SP.Ribbon.SU.$0(this.$f_0)) {
            return;
        }
        this.$1I_0 = false;
        var $v_0 = new Sys.StringBuilder();

        $v_0.append(this.$35_0());
        $v_0.append('\r\n                <Button \r\n                    Id=\"Ribbon.Page.InsertRelatedDataTo' + this.$a_0 + '.RelatedWebPart.Menu.MS.InsertRelatedPartMessage\"\r\n                    Image16by16=\"' + SP.Utilities.Utility.get_layoutsLatestVersionUrl() + '\"images/edit.gif\"\r\n                    Image32by32=\"' + SP.Utilities.Utility.get_layoutsLatestVersionUrl() + '\"images/placeholder32x32.png\"\r\n                    LabelText=\"' + SP.Utilities.HttpUtility.htmlEncode(localizedErrorMessage) + '\"\r\n                />');
        $v_0.append(this.$3c_0);
        this.$f_0 = $v_0.toString();
    },
    getRelatedFieldsMenuXml: function SP_Ribbon_RelatedFieldsHelper$getRelatedFieldsMenuXml(props, activeWebPartListId, activeWebPartWebId) {
        if (this.$x_0 >= 200) {
            this.fetchRelatedFieldsFailure(SP.Utilities.HttpUtility.htmlEncode(SP.Res.relationships_RelatedFetchFieldsTookTooLong));
        }
        if (SP.Ribbon.SU.$0(this.$f_0)) {
            this.$x_0 = this.$x_0 + 1;
            if (!this.$1I_0) {
                this.$1I_0 = true;
                this.$3P_0 = new SP.Ribbon.RelatedFieldsFetcher(activeWebPartListId, activeWebPartWebId);
                var $v_0 = this.$3P_0.fetchRelatedFieldsBegin(this);

                if ($v_0) {
                    props.PopulationXML = this.$f_0;
                    this.$3f_0();
                    return props;
                }
            }
            if (SP.Ribbon.SU.$0(this.$p_0) && this.$x_0 > 5) {
                this.$p_0 = SP.UI.Notify.addNotification(SP.Utilities.HttpUtility.htmlEncode(SP.Res.genericLoading), true);
            }
            props.PollAgainInterval = 100;
            return props;
        }
        else {
            props.PopulationXML = this.$f_0;
            this.$3f_0();
            if (!SP.Ribbon.SU.$0(this.$p_0)) {
                SP.UI.Notify.removeNotification(this.$p_0);
            }
            return props;
        }
    },
    $3f_0: function SP_Ribbon_RelatedFieldsHelper$$3f_0() {
        this.$f_0 = null;
        this.$x_0 = 0;
        this.$1I_0 = false;
    }
};
SP.Ribbon.UsageReportPageComponent = function SP_Ribbon_UsageReportPageComponent() {
    SP.Ribbon.UsageReportPageComponent.initializeBase(this);
};
SP.Ribbon.UsageReportPageComponent.initialize = function SP_Ribbon_UsageReportPageComponent$initialize() {
    var $v_0 = SP.Ribbon.PageManager.get_instance();

    if ($v_0) {
        $v_0.addPageComponent(SP.Ribbon.UsageReportPageComponent.$1q);
    }
};
SP.Ribbon.UsageReportPageComponent.prototype = {
    init: function SP_Ribbon_UsageReportPageComponent$init() {
    },
    getFocusedCommands: function SP_Ribbon_UsageReportPageComponent$getFocusedCommands() {
        return [];
    },
    getGlobalCommands: function SP_Ribbon_UsageReportPageComponent$getGlobalCommands() {
        return [];
    },
    isFocusable: function SP_Ribbon_UsageReportPageComponent$isFocusable() {
        return true;
    },
    receiveFocus: function SP_Ribbon_UsageReportPageComponent$receiveFocus() {
        return true;
    },
    yieldFocus: function SP_Ribbon_UsageReportPageComponent$yieldFocus() {
        return true;
    },
    canHandleCommand: function SP_Ribbon_UsageReportPageComponent$canHandleCommand(commandId) {
        return commandEnabled(commandId);
    },
    handleCommand: function SP_Ribbon_UsageReportPageComponent$handleCommand(commandId, properties, sequence) {
        return handleCommand(commandId, properties, sequence);
    }
};
SP.Ribbon.GroupBoardWebPartPageComponent = function SP_Ribbon_GroupBoardWebPartPageComponent(id, data) {
    this.$6_5 = {};
    SP.Ribbon.GroupBoardWebPartPageComponent.initializeBase(this, [id, data]);
    this.$5z_5();
};
SP.Ribbon.GroupBoardWebPartPageComponent.prototype = {
    $5z_5: function SP_Ribbon_GroupBoardWebPartPageComponent$$5z_5() {
        var $v_0;
        var $$t_7 = this;

        $v_0 = function($p1_0, $p1_1, $p1_2) {
            return $$t_7.$3o_5('CirculationConfirm.aspx');
        };
        this.$6_5['CirculationConfirm'] = $v_0;
        this.$6_5['CirculationDisconfirm'] = $v_0;
        var $$t_8 = this;

        $v_0 = function($p1_0, $p1_1, $p1_2) {
            return $$t_8.$3o_5('CalltrackMark.aspx');
        };
        this.$6_5['CallTrackResolve'] = $v_0;
        this.$6_5['CallTrackUnresolve'] = $v_0;
    },
    handleCommand: function SP_Ribbon_GroupBoardWebPartPageComponent$handleCommand(commandId, properties, sequence) {
        if (this.$6_5[commandId]) {
            var $v_0 = this.$6_5[commandId];

            return $v_0(commandId, properties, sequence);
        }
        return SP.Ribbon.GenericListWebPartPageComponent.prototype.handleCommand.call(this, commandId, properties, sequence);
    },
    $3o_5: function SP_Ribbon_GroupBoardWebPartPageComponent$$3o_5($p0) {
        if (this.getCountOfSelectedItems() !== 1) {
            return false;
        }
        var $v_0 = this.get_ctx();
        var $v_1 = this.$1A_5($v_0);
        var $v_2 = this.$33_5($v_0, $v_1);
        var $v_3 = window.location;
        var $v_4 = $v_3.pathname;
        var $v_5 = $v_3.search;

        if (!SP.ScriptUtility.isNullOrEmptyString($v_5)) {
            $v_4 += $v_5;
        }
        $v_4 = SP.Utilities.HttpUtility.urlKeyValueEncode($v_4);
        var $v_6 = new Sys.StringBuilder();

        $v_6.append('SubmitFormPost(\"');
        $v_6.append(SP.Utilities.Utility.getLayoutsPageUrl($p0));
        $v_6.append('?List=');
        $v_6.append($v_0.listName);
        $v_6.append('&Cmd=');
        $v_6.append($v_2);
        $v_6.append('&ID=');
        $v_6.append($v_1);
        $v_6.append('&Source=');
        $v_6.append($v_4);
        $v_6.append('\")');
        this.executeClickScript($v_6.toString());
        return true;
    },
    canHandleCommand: function SP_Ribbon_GroupBoardWebPartPageComponent$canHandleCommand(commandId) {
        if (this.$6_5[commandId]) {
            var $v_0 = this.get_ctx();

            if (this.getCountOfSelectedItems() === 1) {
                var $v_1 = this.$33_5($v_0, this.$1A_5($v_0));

                if (!SP.Ribbon.SU.$0($v_1)) {
                    switch (commandId) {
                    case 'CirculationConfirm':
                        return $v_1 === 'Confirm';
                    case 'CirculationDisconfirm':
                        return $v_1 === 'Disconfirm';
                    case 'CallTrackResolve':
                        return $v_1 === 'Resolve';
                    case 'CallTrackUnresolve':
                        return $v_1 === 'Unresolve';
                    }
                }
            }
        }
        return SP.Ribbon.GenericListWebPartPageComponent.prototype.canHandleCommand.call(this, commandId);
    },
    $1A_5: function SP_Ribbon_GroupBoardWebPartPageComponent$$1A_5($p0) {
        var $v_0 = GetSelectedItemsDict($p0);

        if (!SP.Ribbon.SU.$0($v_0)) {
            var $$dict_2 = $v_0;

            for (var $$key_3 in $$dict_2) {
                var $v_1 = {
                    key: $$key_3,
                    value: $$dict_2[$$key_3]
                };
                var $v_2 = $v_1.key.split(',');

                return $v_2[1];
            }
        }
        return null;
    },
    $33_5: function SP_Ribbon_GroupBoardWebPartPageComponent$$33_5($p0, $p1) {
        var $v_0 = 'Action#' + $p0.listName + '#' + $p1;
        var $v_1 = $get($v_0);

        if (SP.Ribbon.SU.$0($v_1)) {
            return null;
        }
        else {
            return $v_1.value;
        }
    },
    getGlobalCommands: function SP_Ribbon_GroupBoardWebPartPageComponent$getGlobalCommands() {
        var $v_0 = SP.Ribbon.GenericListWebPartPageComponent.prototype.getGlobalCommands.call(this);

        Array.add($v_0, 'CirculationConfirm');
        Array.add($v_0, 'CirculationDisconfirm');
        Array.add($v_0, 'CallTrackResolve');
        Array.add($v_0, 'CallTrackUnresolve');
        return $v_0;
    },
    getFocusedCommands: function SP_Ribbon_GroupBoardWebPartPageComponent$getFocusedCommands() {
        return SP.Ribbon.GenericListWebPartPageComponent.prototype.getFocusedCommands.call(this);
    },
    addAlwaysEnabledCommands: function SP_Ribbon_GroupBoardWebPartPageComponent$addAlwaysEnabledCommands() {
        SP.Ribbon.GenericListWebPartPageComponent.prototype.addAlwaysEnabledCommands.call(this);
        var $v_0 = this.get_alwaysEnabledCommands();

        $v_0['TimecardTab'] = true;
        $v_0['TimecardActions'] = true;
        $v_0['TimecardManage'] = true;
        $v_0['TimecardSettings'] = true;
        $v_0['CirculationMenuOpen'] = true;
        $v_0['CallTrackMenuOpen'] = true;
    }
};
SP.Ribbon.CalendarPageComponentData = function SP_Ribbon_CalendarPageComponentData() {
    SP.Ribbon.CalendarPageComponentData.initializeBase(this);
};
SP.Ribbon.CalendarPageComponentData.prototype = {
    CurrentUserInfo: null,
    EnablePeopleSelector: false,
    EnableResourceSelector: false
};
SP.Ribbon.CalendarListPageComponent = function SP_Ribbon_CalendarListPageComponent(id, data) {
    this.$$d_$5x_5 = Function.createDelegate(this, this.$5x_5);
    this.$$d_$4G_5 = Function.createDelegate(this, this.$4G_5);
    this.$$d_$26_5 = Function.createDelegate(this, this.$26_5);
    this.$$d_$5J_5 = Function.createDelegate(this, this.$5J_5);
    this.$$d_$5K_5 = Function.createDelegate(this, this.$5K_5);
    this.$$d_$57_5 = Function.createDelegate(this, this.$57_5);
    this.$$d_$5g_5 = Function.createDelegate(this, this.$5g_5);
    this.$$d_$5f_5 = Function.createDelegate(this, this.$5f_5);
    this.$$d_$5o_5 = Function.createDelegate(this, this.$5o_5);
    this.$$d_$5v_5 = Function.createDelegate(this, this.$5v_5);
    this.$$d_$4q_5 = Function.createDelegate(this, this.$4q_5);
    this.$$d_$5w_5 = Function.createDelegate(this, this.$5w_5);
    this.$$d_$3x_5 = Function.createDelegate(this, this.$3x_5);
    this.$$d_$4k_5 = Function.createDelegate(this, this.$4k_5);
    this.$$d_$4u_5 = Function.createDelegate(this, this.$4u_5);
    this.$4t_5 = GetImageUrlWithRevision(SP.Utilities.Utility.get_layoutsLatestVersionUrl() + SP.Res.lcid + '/images/formatmap32x32.png');
    this.$8_5 = {};
    this.$6_5 = {};
    SP.Ribbon.CalendarListPageComponent.initializeBase(this, [id, data]);
    var $v_0 = this.get_ctx();

    if (!$v_0) {
        return;
    }
    this.$1B_5 = $v_0.ctxId;
    this.$H_5 = data.CurrentUserInfo;
    this.$s_5 = data.EnablePeopleSelector;
    this.$j_5 = data.EnableResourceSelector;
    this.$P_5 = '106' === (this.get_ctx()).listTemplate;
    this.$5Q_5();
    this.$5P_5();
};
SP.Ribbon.CalendarListPageComponent.prototype = {
    $24_5: null,
    $1B_5: null,
    $2R_5: null,
    $z_5: null,
    $H_5: null,
    $j_5: false,
    $s_5: false,
    $P_5: false,
    get_$e_5: function SP_Ribbon_CalendarListPageComponent$get_$e_5() {
        if (!this.$24_5) {
            this.$24_5 = SP.UI.ApplicationPages.CalendarInstanceRepository.lookupInstance(this.$1B_5);
        }
        return this.$24_5;
    },
    $5P_5: function SP_Ribbon_CalendarListPageComponent$$5P_5() {
        if (!this.get_ctx()) {
            return;
        }
        var $v_0;

        $v_0 = this.$$d_$4u_5;
        this.$6_5['Subscribe'] = $v_0;
        this.$6_5['ViewProperties'] = $v_0;
        this.$6_5['EditProperties'] = $v_0;
        this.$6_5['ManagePermissions'] = $v_0;
        this.$6_5['ViewVersions'] = $v_0;
        this.$6_5['Moderate'] = $v_0;
        this.$6_5['ViewWorkflows'] = $v_0;
        this.$6_5['AttachFile'] = $v_0;
        this.$6_5['Delete'] = this.$$d_$4k_5;
        this.$6_5['CalendarAddCalendar'] = this.$$d_$3x_5;
        $v_0 = this.$$d_$5w_5;
        this.$6_5['CalendarPeopleSelect'] = $v_0;
        this.$6_5['CalendarResourceSelect'] = $v_0;
        $v_0 = this.$$d_$4q_5;
        this.$6_5['CalendarExpand'] = $v_0;
        this.$6_5['CalendarCollapse'] = $v_0;
        $v_0 = this.$$d_$5v_5;
        this.$6_5['CalendarScopeDay'] = $v_0;
        this.$6_5['CalendarScopeWeek'] = $v_0;
        this.$6_5['CalendarScopeMonth'] = $v_0;
        this.$6_5['CalendarScopeWeekGroup'] = $v_0;
        this.$6_5['CalendarScopeDayGroup'] = $v_0;
        $v_0 = this.$$d_$5o_5;
        this.$6_5['QueryCalendarScopeWeekGroup'] = $v_0;
        this.$6_5['QueryCalendarScopeDayGroup'] = $v_0;
        this.$6_5['QueryCalendarScopeDay'] = $v_0;
        this.$6_5['QueryCalendarScopeWeek'] = $v_0;
        this.$6_5['QueryCalendarScopeMonth'] = $v_0;
        if (this.$P_5) {
            $v_0 = this.$$d_$5f_5;
        }
        else {
            $v_0 = this.$$d_$5g_5;
        }
        this.$6_5['NewListItem'] = $v_0;
        this.$6_5['NewDefaultListItem'] = $v_0;
        var $$t_B = this;

        this.$6_5['PopulateNewDocumentMenu'] = function($p1_0, $p1_1, $p1_2) {
            $p1_1.PopulationJSON = $$t_B.getNewMenuXml('NewDocument', 'Ribbon.Document.All.NewDocument');
            return true;
        };
        var $$t_C = this;

        this.$6_5['NewDocument'] = function($p1_0, $p1_1, $p1_2) {
            var $v_1 = $p1_1['CommandValueId'];

            $$t_C.executeClickScript($v_1);
            return true;
        };
        var $$t_D = this;

        this.$6_5['NewDefaultDocument'] = function($p1_0, $p1_1, $p1_2) {
            $$t_D.executeClickScript($$t_D.getDefaultNewMenuItemScript());
            return true;
        };
        if (this.$P_5) {
            this.$6_5['ConnectToClient'] = this.$$d_$57_5;
        }
        this.$6_5['PopulatePeopleMenu'] = this.$$d_$5K_5;
        this.$6_5['CalendarPeopleMenuSelect'] = this.$$d_$5J_5;
    },
    $3x_5: function SP_Ribbon_CalendarListPageComponent$$3x_5($p0, $p1, $p2) {
        var $v_0 = this.get_ctx();
        var $v_1 = String.format('STSNavigate(\'{0}' + SP.Utilities.Utility.get_layoutsLatestVersionUrl() + 'aggregationsettings.aspx?List={1}&View={2}&Source={3}\')', $v_0.HttpRoot, $v_0.listName, $v_0.view, GetSource());

        SP.Ribbon.NativeUtility.executeECBCommand($v_1, $v_0);
        return true;
    },
    $5J_5: function SP_Ribbon_CalendarListPageComponent$$5J_5($p0, $p1, $p2) {
        var $v_0 = $p1['CommandValueId'];

        for (var $v_1 = 0; $v_1 < this.$H_5.length; $v_1++) {
            if (this.$H_5[$v_1]['id'] === $v_0) {
                var $v_2 = (SP.UI.ApplicationPages.CalendarSelector.instance()).getSelector(3, this.$1B_5);

                if (!SP.Ribbon.SU.$0($v_2)) {
                    var $v_3 = new SP.UI.ApplicationPages.ResolveEntity();

                    $v_3.entityType = SP.UI.ApplicationPages.ResolveEntity.typE_USER;
                    $v_3.displayName = this.$H_5[$v_1]['displayName'];
                    $v_3.id = this.$H_5[$v_1]['id'];
                    if ($v_1) {
                        $v_3.needResolve = true;
                        $v_3.isGroup = true;
                    }
                    else {
                        $v_3.email = this.$H_5[$v_1]['email'];
                        $v_3.accountName = this.$H_5[$v_1]['accountName'];
                    }
                    $v_2.setEntity($v_3);
                }
                break;
            }
        }
        return true;
    },
    $5K_5: function SP_Ribbon_CalendarListPageComponent$$5K_5($p0, $p1, $p2) {
        var $v_0 = new Sys.StringBuilder();

        $v_0.append('<Menu Id=\'');
        $v_0.append(SP.Utilities.HttpUtility.htmlEncode('Ribbon.Calendar.Selector.People'));
        $v_0.append('.Menu\'>');
        $v_0.append('<MenuSection Id=\'');
        $v_0.append('Ribbon.Calendar.Selector.People');
        $v_0.append('.Menu.ContentTypes\'>');
        $v_0.append('<Controls Id=\'');
        $v_0.append(SP.Utilities.HttpUtility.htmlEncode('Ribbon.Calendar.Selector.People'));
        $v_0.append('.Menu.ContentTypes.Controls\'>');
        this.$2c_5($v_0, 'Ribbon.Calendar.Selector.People.Menu.Entities.AddPerson', 'CalendarPeopleSelect', 'CalendarPeopleSelect', 'CalendarPeopleSelect', SP.Res.cui_AddPerson);
        if (!SP.Ribbon.SU.$0(this.$H_5)) {
            for (var $v_1 = 0; $v_1 < this.$H_5.length; $v_1++) {
                this.$2c_5($v_0, 'Ribbon.Calendar.Selector.People.Menu.Entities.' + $v_1.toString(), 'CalendarPeopleMenuSelect', this.$H_5[$v_1]['id'], this.$H_5[$v_1]['id'], this.$H_5[$v_1]['displayName']);
            }
        }
        $v_0.append('</Controls>');
        $v_0.append('</MenuSection>');
        $v_0.append('</Menu>');
        $p1.PopulationXML = $v_0.toString();
        return true;
    },
    $2c_5: function SP_Ribbon_CalendarListPageComponent$$2c_5($p0, $p1, $p2, $p3, $p4, $p5) {
        $p0.append('<Button Id=\'');
        $p0.append(SP.Utilities.HttpUtility.htmlEncode($p1));
        $p0.append('\' Command=\'');
        $p0.append(SP.Utilities.HttpUtility.htmlEncode($p2));
        $p0.append('\' MenuItemId=\'');
        $p0.append(SP.Utilities.HttpUtility.htmlEncode($p3));
        $p0.append('\' CommandValueId=\'');
        $p0.append(SP.Utilities.HttpUtility.htmlEncode($p4));
        $p0.append('\' CommandType=\'OptionSelection\' LabelText=\'');
        $p0.append(SP.Utilities.HttpUtility.htmlEncode($p5));
        $p0.append('\'/>');
    },
    $57_5: function SP_Ribbon_CalendarListPageComponent$$57_5($p0, $p1, $p2) {
        if (SP.Ribbon.SU.$0(this.$z_5)) {
            var $v_0 = this._controlData[$p0];

            this.executeClickScript($v_0.ClickScript);
        }
        else {
            window.self.offlineBtnUser = this.$z_5.id;
            var $v_1 = this._controlData[$p0];

            if (!SP.Ribbon.SU.$0($v_1)) {
                var $v_2 = $v_1.ClickScript.split('\',\'');
                var $v_3 = new Sys.StringBuilder($v_2[0]);

                for (var $v_4 = 1; $v_4 < $v_2.length; $v_4++) {
                    $v_3.append('\',\'');
                    if ($v_4 === 4) {
                        $v_3.append(SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode(EEDecodeSpecialChars(this.$z_5.displayName)));
                    }
                    else {
                        $v_3.append($v_2[$v_4]);
                    }
                }
                this.executeClickScript($v_3.toString());
            }
        }
        return true;
    },
    $4u_5: function SP_Ribbon_CalendarListPageComponent$$4u_5($p0, $p1, $p2) {
        var $v_0 = this.get_ctx();
        var $v_1 = this.$1A_5($v_0);

        if (!$v_1 || !this.$26_5($p0)) {
            return true;
        }
        var $v_2 = $v_1;

        if ($v_1.indexOf('.0.') !== -1 || $v_1.indexOf('.1.') !== -1) {
            $v_2 = $v_1.substr(0, $v_1.indexOf('.'));
        }
        var $v_3 = null;

        switch ($p0) {
        case 'AttachFile':
            AttachFile($v_0);
            break;
        case 'Subscribe':
            this.$1n_5(String.format('{0}' + SP.Utilities.Utility.get_layoutsLatestVersionUrl() + 'SubNew.aspx?List={1}&ID={2}&Source={3}', $v_0['HttpRoot'], SP.Utilities.HttpUtility.urlKeyValueEncode($v_0['listName']), SP.Utilities.HttpUtility.urlKeyValueEncode($v_2), GetSource()), false);
            break;
        case 'ViewProperties':
            this.$1n_5(String.format('{0}&ID={1}', $v_0['displayFormUrl'], SP.Utilities.HttpUtility.urlKeyValueEncode($v_1)), true);
            break;
        case 'EditProperties':
            this.$1n_5(String.format('{0}&ID={1}', $v_0['editFormUrl'], SP.Utilities.HttpUtility.urlKeyValueEncode($v_1)), true);
            break;
        case 'ManagePermissions':
            $v_3 = String.format('EnsureScriptFunc(\'sharing.js\', \'DisplaySharedWithDialog\', function () {{ DisplaySharedWithDialog(\'{0}\',\'{1}\',\'{2}\') }})', $v_0['HttpRoot'], SP.Utilities.HttpUtility.urlKeyValueEncode($v_0['listName']), SP.Utilities.HttpUtility.urlKeyValueEncode($v_2));
            break;
        case 'ViewVersions':
            $v_3 = String.format('NavigateToVersionsAspxV4(event,\'{0}\',\'List={1}&ID={2}\')', $v_0['HttpRoot'], SP.Utilities.HttpUtility.urlKeyValueEncode($v_0['listName']), SP.Utilities.HttpUtility.urlKeyValueEncode($v_2));
            break;
        case 'Moderate':
            $v_3 = String.format('NavigateToApproveRejectAspx(event,\'{0}' + SP.Utilities.Utility.get_layoutsLatestVersionUrl() + 'approve.aspx?List={1}&ID={2}&Source={3}\')', $v_0['HttpRoot'], SP.Utilities.HttpUtility.urlKeyValueEncode($v_0['listName']), SP.Utilities.HttpUtility.urlKeyValueEncode($v_2), GetSource());
            break;
        case 'ViewWorkflows':
            $v_3 = String.format('STSNavigate(\'{0}' + SP.Utilities.Utility.get_layoutsLatestVersionUrl() + 'Workflow.aspx?List={1}&ID={2}&Source={3}\')', $v_0['HttpRoot'], SP.Utilities.HttpUtility.urlKeyValueEncode($v_0['listName']), SP.Utilities.HttpUtility.urlKeyValueEncode($v_2), GetSource());
            break;
        }
        if ($v_3) {
            SP.Ribbon.NativeUtility.executeECBCommand($v_3, $v_0);
        }
        return true;
    },
    $1n_5: function SP_Ribbon_CalendarListPageComponent$$1n_5($p0, $p1) {
        var $v_0 = new SP.UI.DialogOptions();

        $v_0.url = $p0;
        if ($p1 && this.get_$e_5()) {
            var $$t_5 = this;

            $v_0.dialogReturnValueCallback = function($p1_0, $p1_1) {
                if ($p1_0 === 1) {
                    ($$t_5.get_$e_5()).refreshItems();
                }
            };
        }
        SP.UI.ModalDialog.showModalDialog($v_0);
    },
    $4k_5: function SP_Ribbon_CalendarListPageComponent$$4k_5($p0, $p1, $p2) {
        var $v_0 = this.get_$e_5();
        var $v_1 = this.get_ctx();
        var $v_2 = this.$1A_5($v_1);

        if (!$v_2 || !this.$26_5($p0) || !$v_0) {
            return true;
        }
        $v_0.deleteItem($v_2);
        return true;
    },
    $5f_5: function SP_Ribbon_CalendarListPageComponent$$5f_5($p0, $p1, $p2) {
        var $v_0 = this.get_$e_5();

        if ($v_0) {
            $v_0.newItemDialog(this.$30_5($p1['CommandValueId']));
        }
        return true;
    },
    $5g_5: function SP_Ribbon_CalendarListPageComponent$$5g_5($p0, $p1, $p2) {
        var $v_0 = this.get_ctx();
        var $v_1 = $v_0['newFormUrl'];
        var $v_2 = this.$30_5($p1['CommandValueId']);

        if (!SP.Ribbon.SU.$2($v_2)) {
            $v_1 += '&ContentTypeId=';
            $v_1 += SP.Utilities.HttpUtility.urlKeyValueEncode($v_2);
        }
        this.$1n_5($v_1, true);
        return true;
    },
    $30_5: function SP_Ribbon_CalendarListPageComponent$$30_5($p0) {
        var $v_0 = null;

        if (!SP.Ribbon.SU.$0($p0)) {
            var $v_1 = $p0.toUpperCase();
            var $v_2 = $v_1.lastIndexOf('CONTENTTYPEID=');
            var $v_3 = $v_1.lastIndexOf('\')');

            if ($v_2 !== -1 && $v_3 !== -1 && $v_2 + 14 < $v_3) {
                $v_0 = $p0.substring($v_2 + 14, $v_3);
            }
        }
        return $v_0;
    },
    $5v_5: function SP_Ribbon_CalendarListPageComponent$$5v_5($p0, $p1, $p2) {
        var $v_0 = this.$2n_5($p0);
        var $v_1 = this.get_$e_5();

        if ($v_1) {
            $v_1.moveToView($v_0);
        }
        return true;
    },
    $4q_5: function SP_Ribbon_CalendarListPageComponent$$4q_5($p0, $p1, $p2) {
        var $v_0 = this.get_$e_5();

        if (!$v_0) {
            return true;
        }
        if ($p0 === 'CalendarExpand') {
            $v_0.expandAll();
        }
        else if ($p0 === 'CalendarCollapse') {
            $v_0.collapseAll();
        }
        return true;
    },
    $5w_5: function SP_Ribbon_CalendarListPageComponent$$5w_5($p0, $p1, $p2) {
        var $v_0 = this.get_$e_5();

        if (!$v_0) {
            return true;
        }
        var $v_1;

        if ($p0 === 'CalendarPeopleSelect') {
            $v_1 = 2;
        }
        else {
            $v_1 = 1;
        }
        var $v_2 = $v_0.getActiveScope();
        var $v_3 = $v_2 === 5 || $v_2 === 2;
        var $v_4 = new Sys.StringBuilder();

        $v_4.append('__spPickerDialogFunc(');
        $v_4.append($v_1.toString());
        $v_4.append(',\'');
        $v_4.append(this.$1B_5);
        $v_4.append('\',');
        $v_4.append($v_3 ? 'true' : 'false');
        $v_4.append(');');
        this.executeClickScript($v_4.toString());
        return true;
    },
    $5o_5: function SP_Ribbon_CalendarListPageComponent$$5o_5($p0, $p1, $p2) {
        var $v_0 = this.$2n_5($p0);

        $p1['On'] = this.$2y_5() === $v_0;
        return true;
    },
    $2n_5: function SP_Ribbon_CalendarListPageComponent$$2n_5($p0) {
        switch ($p0) {
        case 'QueryCalendarScopeDayGroup':
        case 'CalendarScopeDayGroup':
            return 5;
        case 'QueryCalendarScopeWeekGroup':
        case 'CalendarScopeWeekGroup':
            return 2;
        case 'QueryCalendarScopeDay':
        case 'CalendarScopeDay':
            return 3;
        case 'QueryCalendarScopeWeek':
        case 'CalendarScopeWeek':
            return 4;
        case 'QueryCalendarScopeMonth':
        case 'CalendarScopeMonth':
            return 1;
        }
        return 0;
    },
    $26_5: function SP_Ribbon_CalendarListPageComponent$$26_5($p0) {
        var $v_0 = this.get_ctx();
        var $v_1 = this.$1A_5($v_0);

        if (!$v_1) {
            return false;
        }
        var $v_2 = $v_1.indexOf('.0.') !== -1;
        var $v_3 = $v_1.indexOf('.1.') !== -1;
        var $v_4 = GetSelectedItemsDict($v_0);
        var $$dict_6 = $v_4;

        for (var $$key_7 in $$dict_6) {
            var $v_5 = {
                key: $$key_7,
                value: $$dict_6[$$key_7]
            };
            var $v_6 = $v_5.value;
            var $v_7 = this.$4i_5($v_6['Permissions']);

            switch ($p0) {
            case 'Subscribe':
                if (!$v_2) {
                    return $v_7.has(40);
                }
                break;
            case 'ViewProperties':
                return $v_7.has(1) && $v_7.has(13);
            case 'Delete':
                return $v_7.has(4) && this.$P_5;
            case 'EditProperties':
                return $v_7.has(3) && this.$P_5;
            case 'AttachFile':
                return $v_7.has(3) && this.$P_5 && !$v_2 && !$v_3;
            case 'ManagePermissions':
                if (!$v_2 && !$v_3) {
                    return $v_7.has(63) && this.$P_5;
                }
                break;
            case 'ViewVersions':
                return $v_0['verEnabled'] === 1 && $v_7.has(7) && this.$P_5;
            case 'Moderate':
                return $v_0['isModerated'] && $v_7.has(3) && $v_7.has(5) && $v_7.has(18) && $v_7.has(13) && this.$P_5;
            case 'ViewWorkflows':
                return $v_0['WorkflowsAssociated'] && $v_7.has(3) && this.$P_5;
            }
            return false;
        }
        return false;
    },
    $4i_5: function SP_Ribbon_CalendarListPageComponent$$4i_5($p0) {
        var $v_0 = new SP.BasePermissions();

        if (SP.Ribbon.SU.$2($p0)) {
            return $v_0;
        }
        var $v_1 = 0;
        var $v_2 = 0;
        var $v_3 = $p0.length;

        if ($v_3 < 8) {
            $v_2 = parseInt($p0, 16);
        }
        else {
            $v_2 = parseInt($p0.substr($v_3 - 8), 16);
            $v_1 = parseInt($p0.substr(0, $v_3 - 8), 16);
        }
        for (var $v_4 = 1; $v_2 > 0; $v_4++, $v_2 >>>= 1) {
            if (($v_2 & 1) === 1) {
                $v_0.set($v_4);
            }
        }
        for (var $v_5 = 33; $v_1 > 0; $v_5++, $v_1 >>>= 1) {
            if (($v_1 & 1) === 1) {
                $v_0.set($v_5);
            }
        }
        return $v_0;
    },
    $5Q_5: function SP_Ribbon_CalendarListPageComponent$$5Q_5() {
        if (!this.get_ctx()) {
            return;
        }
        var $v_0 = this.$$d_$26_5;
        var $$t_E = this;
        var $v_1 = function($p1_0) {
            var $v_7 = $$t_E.$2y_5();

            return $v_7 === 1 || $v_7 === 2;
        };
        var $$t_F = this;
        var $v_2 = function($p1_0) {
            return false;
        };
        var $$t_G = this;
        var $v_3 = function($p1_0) {
            return true;
        };

        this.$8_5['CalendarAddCalendar'] = this.$P_5 ? $v_3 : $v_2;
        this.$8_5['CalendarScopeDayGroup'] = !!(this.$s_5 | this.$j_5) ? $v_3 : $v_2;
        this.$8_5['CalendarScopeWeekGroup'] = !!(this.$s_5 | this.$j_5) ? $v_3 : $v_2;
        this.$8_5['QueryCalendarScopeDayGroup'] = !!(this.$s_5 | this.$j_5) ? $v_3 : $v_2;
        this.$8_5['QueryCalendarScopeWeekGroup'] = !!(this.$s_5 | this.$j_5) ? $v_3 : $v_2;
        this.$8_5['Subscribe'] = $v_0;
        this.$8_5['ViewProperties'] = $v_0;
        this.$8_5['Delete'] = $v_0;
        this.$8_5['EditProperties'] = $v_0;
        this.$8_5['ManagePermissions'] = $v_0;
        this.$8_5['ViewVersions'] = $v_0;
        this.$8_5['Moderate'] = $v_0;
        this.$8_5['ViewWorkflows'] = $v_0;
        this.$8_5['AttachFile'] = $v_0;
        this.$8_5['UploadDocumentMenuOpen'] = this.$$d_$4G_5;
        var $$t_H = this;
        var $v_4 = function($p1_0) {
            return !SP.Ribbon.SU.$0($$t_H.get_newMenuData()) && ($$t_H.get_newMenuData()).length > 0;
        };

        this.$8_5['NewDefaultDocument'] = $v_4;
        this.$8_5['PopulateNewDocumentMenu'] = $v_4;
        this.$8_5['NewDocument'] = $v_4;
        this.$8_5['NewDocumentMenuOpen'] = $v_4;
        this.$8_5['CalendarExpand'] = $v_1;
        this.$8_5['CalendarCollapse'] = $v_1;
        var $v_5 = SP.Ribbon.SU.$1D(this.$H_5) ? $v_2 : $v_3;

        this.$8_5['CalendarPeopleSelect'] = $v_5;
        this.$8_5['PopulatePeopleMenu'] = $v_5;
        this.$8_5['CalendarPeopleMenuOpen'] = $v_5;
        this.$8_5['CalendarPeopleMenuSelect'] = $v_5;
        this.$8_5['CalendarResourceSelect'] = this.$j_5 ? $v_3 : $v_2;
        this.$8_5['TasksTab'] = '171' === (this.get_ctx()).listTemplate ? $v_3 : $v_2;
        if (!!(this.$s_5 | this.$j_5)) {
            this.$8_5['ConnectToClient'] = this.$$d_$5x_5;
            var $v_6 = SP.UI.ApplicationPages.CalendarSelector.instance();
            var $$t_I = this;

            $v_6.addHandler(this.$1B_5, true, true, function($p1_0, $p1_1) {
                $$t_I.$2R_5 = $p1_1.get_entities();
                SP.Ribbon.UtilityInternal.$i();
            });
        }
    },
    $5x_5: function SP_Ribbon_CalendarListPageComponent$$5x_5($p0) {
        var $v_0 = [];
        var $v_1 = this.$2R_5.length;

        for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
            var $v_3 = this.$2R_5[$v_2];

            if ($v_3.entityType !== SP.UI.ApplicationPages.ResolveEntity.typE_USER) {
                return false;
            }
            if ($v_3.isGroup) {
                if ($v_3.needResolve) {
                    return false;
                }
                for (var $v_4 = 0; $v_4 < $v_3.members.length; $v_4++) {
                    if ($v_3.members[$v_4]) {
                        Array.add($v_0, $v_3.members[$v_4]);
                    }
                }
            }
            else {
                Array.add($v_0, $v_3);
            }
        }
        if ($v_0.length === 1) {
            this.$z_5 = $v_0[0];
            if (this.$z_5.id) {
                return true;
            }
        }
        this.$z_5 = null;
        return false;
    },
    $4G_5: function SP_Ribbon_CalendarListPageComponent$$4G_5($p0) {
        return SP.Ribbon.GenericListWebPartPageComponent.prototype.canHandleCommand.call(this, 'UploadDocument');
    },
    handleCommand: function SP_Ribbon_CalendarListPageComponent$handleCommand(commandId, properties, sequence) {
        var $v_0 = this.$6_5[commandId];

        if (!SP.Ribbon.SU.$0($v_0) && $v_0(commandId, properties, sequence)) {
            return true;
        }
        return SP.Ribbon.GenericListWebPartPageComponent.prototype.handleCommand.call(this, commandId, properties, sequence);
    },
    canHandleCommand: function SP_Ribbon_CalendarListPageComponent$canHandleCommand(commandId) {
        var $v_0 = this.$8_5[commandId];

        if (!SP.Ribbon.SU.$0($v_0)) {
            return $v_0(commandId);
        }
        return SP.Ribbon.GenericListWebPartPageComponent.prototype.canHandleCommand.call(this, commandId);
    },
    getGlobalCommands: function SP_Ribbon_CalendarListPageComponent$getGlobalCommands() {
        var $v_0 = SP.Ribbon.GenericListWebPartPageComponent.prototype.getGlobalCommands.call(this);

        Array.add($v_0, 'CalendarPeopleSelect');
        Array.add($v_0, 'CalendarResourceSelect');
        Array.add($v_0, 'CalendarPeopleMenuOpen');
        Array.add($v_0, 'PopulatePeopleMenu');
        Array.add($v_0, 'CalendarPeopleMenuSelect');
        Array.add($v_0, 'CalendarExpand');
        Array.add($v_0, 'CalendarCollapse');
        Array.add($v_0, 'CalendarAddCalendar');
        Array.add($v_0, 'CalendarScopeDayGroup');
        Array.add($v_0, 'CalendarScopeWeekGroup');
        Array.add($v_0, 'QueryCalendarScopeDayGroup');
        Array.add($v_0, 'QueryCalendarScopeWeekGroup');
        Array.add($v_0, 'NewDocument');
        Array.add($v_0, 'PopulateNewDocumentMenu');
        Array.add($v_0, 'NewDefaultDocument');
        Array.add($v_0, 'UploadDocumentMenuOpen');
        Array.add($v_0, 'NewDocumentMenuOpen');
        Array.add($v_0, 'TasksTab');
        return $v_0;
    },
    getFocusedCommands: function SP_Ribbon_CalendarListPageComponent$getFocusedCommands() {
        return SP.Ribbon.GenericListWebPartPageComponent.prototype.getFocusedCommands.call(this);
    },
    addAlwaysEnabledCommands: function SP_Ribbon_CalendarListPageComponent$addAlwaysEnabledCommands() {
        SP.Ribbon.GenericListWebPartPageComponent.prototype.addAlwaysEnabledCommands.call(this);
        var $v_0 = this.get_alwaysEnabledCommands();

        $v_0['CalendarTab'] = true;
        $v_0['DocumentTab'] = true;
        $v_0['LibraryTab'] = true;
        $v_0['DocumentNewGroup'] = true;
        $v_0['DocumentManageGroup'] = true;
        $v_0['CalendarSelectorGroup'] = true;
        $v_0['CalendarScopeGroup'] = true;
        $v_0['CalendarExpanderGroup'] = true;
        $v_0['CalendarScopeDay'] = true;
        $v_0['CalendarScopeWeek'] = true;
        $v_0['CalendarScopeMonth'] = true;
        $v_0['QueryCalendarScopeDay'] = true;
        $v_0['QueryCalendarScopeWeek'] = true;
        $v_0['QueryCalendarScopeMonth'] = true;
    },
    $2y_5: function SP_Ribbon_CalendarListPageComponent$$2y_5() {
        var $v_0 = this.get_$e_5();

        if ($v_0) {
            return $v_0.getActiveScope();
        }
        else {
            return 0;
        }
    },
    $1A_5: function SP_Ribbon_CalendarListPageComponent$$1A_5($p0) {
        var $v_0 = GetSelectedItemsDict($p0);

        if (!SP.Ribbon.SU.$0($v_0)) {
            var $$dict_2 = $v_0;

            for (var $$key_3 in $$dict_2) {
                var $v_1 = {
                    key: $$key_3,
                    value: $$dict_2[$$key_3]
                };
                var $v_2 = $v_1.key.split(',');

                return $v_2[1];
            }
        }
        return null;
    }
};
SP.Ribbon.HelpCommandNames = function SP_Ribbon_HelpCommandNames() {
};
SP.Ribbon.HelpPageComponent = function SP_Ribbon_HelpPageComponent() {
    SP.Ribbon.HelpPageComponent.initializeBase(this);
};
SP.Ribbon.HelpPageComponent.get_instance = function SP_Ribbon_HelpPageComponent$get_instance() {
    if (!SP.Ribbon.HelpPageComponent.$3) {
        SP.Ribbon.HelpPageComponent.$3 = new SP.Ribbon.HelpPageComponent();
    }
    return SP.Ribbon.HelpPageComponent.$3;
};
SP.Ribbon.HelpPageComponent.registerWithPageManager = function SP_Ribbon_HelpPageComponent$registerWithPageManager() {
    if (SP.Ribbon.HelpPageComponent.$N) {
        return;
    }
    (SP.Ribbon.PageManager.get_instance()).addPageComponent(SP.Ribbon.HelpPageComponent.get_instance());
    SP.Ribbon.HelpPageComponent.$N = true;
};
SP.Ribbon.HelpPageComponent.unregisterWithPageManager = function SP_Ribbon_HelpPageComponent$unregisterWithPageManager() {
    if (SP.Ribbon.HelpPageComponent.$3) {
        (SP.Ribbon.PageManager.get_instance()).removePageComponent(SP.Ribbon.HelpPageComponent.get_instance());
        SP.Ribbon.HelpPageComponent.$N = false;
    }
};
SP.Ribbon.HelpPageComponent.prototype = {
    $3Q_1: null,
    $n_1: null,
    init: function SP_Ribbon_HelpPageComponent$init() {
        this.$3Q_1 = ['RequestContextualHelp'];
        this.$n_1 = ['RequestContextualHelp'];
    },
    getFocusedCommands: function SP_Ribbon_HelpPageComponent$getFocusedCommands() {
        return this.$3Q_1;
    },
    getGlobalCommands: function SP_Ribbon_HelpPageComponent$getGlobalCommands() {
        return this.$n_1;
    },
    canHandleCommand: function SP_Ribbon_HelpPageComponent$canHandleCommand(commandId) {
        if (commandId === 'RequestContextualHelp') {
            return true;
        }
        else {
            return false;
        }
    },
    getId: function SP_Ribbon_HelpPageComponent$getId() {
        return 'HelpComponent';
    },
    $w_1: false,
    handleCommand: function SP_Ribbon_HelpPageComponent$handleCommand(commandId, properties, sequence) {
        if (SP.Ribbon.SU.$2(commandId) || SP.Ribbon.SU.$0(properties) || SP.Ribbon.SU.$0(sequence)) {
            return false;
        }
        if (commandId === 'RequestContextualHelp') {
            this.$w_1 = true;
            HelpWindowKey(properties['HelpKeyword']);
            this.$w_1 = false;
        }
        else {
            return false;
        }
        return true;
    },
    isFocusable: function SP_Ribbon_HelpPageComponent$isFocusable() {
        return true;
    },
    receiveFocus: function SP_Ribbon_HelpPageComponent$receiveFocus() {
        return true;
    },
    yieldFocus: function SP_Ribbon_HelpPageComponent$yieldFocus() {
        return true;
    }
};
SP.Ribbon.SaveConflictHandler = function SP_Ribbon_SaveConflictHandler() {
};
SP.Ribbon.SaveConflictHandler.$17 = function SP_Ribbon_SaveConflictHandler$$17() {
    if (!SP.Ribbon.SU.$2(SP.Ribbon.SaveConflictHandler.$11)) {
        SP.UI.Status.removeStatus(SP.Ribbon.SaveConflictHandler.$11);
        SP.Ribbon.SaveConflictHandler.$11 = null;
    }
    if (!SP.Ribbon.SU.$2(SP.Ribbon.SaveConflictHandler.$12)) {
        SP.UI.Status.removeStatus(SP.Ribbon.SaveConflictHandler.$12);
        SP.Ribbon.SaveConflictHandler.$12 = null;
    }
    if (!SP.Ribbon.SU.$2(SP.Ribbon.SaveConflictHandler.$13)) {
        SP.UI.Status.removeStatus(SP.Ribbon.SaveConflictHandler.$13);
        SP.Ribbon.SaveConflictHandler.$13 = null;
    }
};
SP.Ribbon.SaveConflictHandler.$62 = function SP_Ribbon_SaveConflictHandler$$62($p0) {
    SP.Ribbon.SaveConflictHandler.$13 = SP.UI.Status.addStatus(SP.Utilities.HttpUtility.htmlEncode(SP.Res.saveConflictStatusBarTitle), $p0, true);
    SP.UI.Status.setStatusPriColor(SP.Ribbon.SaveConflictHandler.$13, 'yellow');
};
SP.Ribbon.SaveConflictHandler.showSaveConflictDialog = function SP_Ribbon_SaveConflictHandler$showSaveConflictDialog(lastModifiedUserId, continueStatusHtml, mergeChangesUrl, mergeChangesStatusHtml, discardScript, overwriteScript) {
    var $v_0 = SP.Utilities.Utility.getLayoutsPageUrl('saveconflict.aspx');
    var $v_1 = new SP.Utilities.UrlBuilder($v_0);

    $v_1.addKeyValueQueryString('UserId', lastModifiedUserId.toString());
    var $v_2 = new SP.UI.DialogOptions();

    $v_2.args = mergeChangesUrl;
    $v_2.url = $v_1.get_url();
    $v_2.showClose = false;
    $v_2.dialogReturnValueCallback = function($p1_0, $p1_1) {
        if ($p1_0 === 1) {
            var $v_4 = $p1_1;

            switch ($v_4) {
            case 'continue':
                SP.Ribbon.SaveConflictHandler.$17();
                SP.Ribbon.SaveConflictHandler.$11 = SP.UI.Status.addStatus(SP.Utilities.HttpUtility.htmlEncode(SP.Res.saveConflictStatusBarTitle), continueStatusHtml, true);
                SP.UI.Status.setStatusPriColor(SP.Ribbon.SaveConflictHandler.$11, 'red');
                break;
            case 'merge':
                SP.Ribbon.SaveConflictHandler.$17();
                SP.Ribbon.SaveConflictHandler.$12 = SP.UI.Status.addStatus(SP.Utilities.HttpUtility.htmlEncode(SP.Res.saveConflictStatusBarTitle), mergeChangesStatusHtml, true);
                SP.UI.Status.setStatusPriColor(SP.Ribbon.SaveConflictHandler.$12, 'red');
                break;
            case 'discard':
                SP.Ribbon.SaveConflictHandler.$17();
                if (!SP.Ribbon.SU.$2(discardScript)) {
                    window.setTimeout(function() {
                        eval(discardScript);
                    }, 0);
                }
                break;
            case 'overwrite':
                SP.Ribbon.SaveConflictHandler.$17();
                if (!SP.Ribbon.SU.$2(overwriteScript)) {
                    window.setTimeout(function() {
                        eval(overwriteScript);
                    }, 0);
                }
                break;
            }
        }
    };
    var $v_3 = SP.UI.ModalDialog.showModalDialog($v_2);

    return $v_3;
};
SP.Ribbon.TrackTabPageComponent = function SP_Ribbon_TrackTabPageComponent() {
    SP.Ribbon.TrackTabPageComponent.initializeBase(this);
};
SP.Ribbon.TrackTabPageComponent.registerWithPageManager = function SP_Ribbon_TrackTabPageComponent$registerWithPageManager() {
    if (!SP.Ribbon.TrackTabPageComponent.$3) {
        SP.Ribbon.TrackTabPageComponent.$3 = new SP.Ribbon.TrackTabPageComponent();
        (SP.Ribbon.PageManager.get_instance()).addPageComponent(SP.Ribbon.TrackTabPageComponent.$3);
    }
};
SP.Ribbon.TrackTabPageComponent.prototype = {
    getGlobalCommands: function SP_Ribbon_TrackTabPageComponent$getGlobalCommands() {
        if (!SP.Ribbon.TrackTabPageComponent.$1p) {
            SP.Ribbon.TrackTabPageComponent.$1p = ['EmailPageUrl', 'EmailPageLink', 'ShareGroup', 'ManageAlerts'];
        }
        return SP.Ribbon.TrackTabPageComponent.$1p;
    },
    canHandleCommand: function SP_Ribbon_TrackTabPageComponent$canHandleCommand(commandId) {
        if (commandId === 'ManageAlerts') {
            if (window._spPageContextInfo && window._spPageContextInfo.userId) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    },
    handleCommand: function SP_Ribbon_TrackTabPageComponent$handleCommand(commandId, properties, sequence) {
        var $v_0 = false;

        switch (commandId) {
        case 'EmailPageUrl':
            SP.Ribbon.EMailLink.openMailerWithUrl(document.URL);
            $v_0 = true;
            break;
        case 'EmailPageLink':
            window.navigateMailToLink(document.URL);
            $v_0 = true;
            break;
        case 'ManageAlerts':
            SP.Utilities.HttpUtility.navigateTo(SP.Utilities.Utility.getLayoutsPageUrl('MySubs.aspx'));
            $v_0 = true;
            break;
        }
        return $v_0;
    }
};
SP.Ribbon.UserInterfacePageComponent = function SP_Ribbon_UserInterfacePageComponent() {
    SP.Ribbon.UserInterfacePageComponent.initializeBase(this);
    var $v_0 = window.g_spribbon;

    this.$5a_1 = $v_0.minimizedHeight;
    this.$5Y_1 = $v_0.maximizedHeight;
};
SP.Ribbon.UserInterfacePageComponent.get_instance = function SP_Ribbon_UserInterfacePageComponent$get_instance() {
    if (!SP.Ribbon.UserInterfacePageComponent.$3) {
        SP.Ribbon.UserInterfacePageComponent.$3 = new SP.Ribbon.UserInterfacePageComponent();
    }
    return SP.Ribbon.UserInterfacePageComponent.$3;
};
SP.Ribbon.UserInterfacePageComponent.registerWithPageManager = function SP_Ribbon_UserInterfacePageComponent$registerWithPageManager() {
    if (SP.Ribbon.UserInterfacePageComponent.$N) {
        return;
    }
    (SP.Ribbon.PageManager.get_instance()).addPageComponent(SP.Ribbon.UserInterfacePageComponent.get_instance());
    SP.Ribbon.UserInterfacePageComponent.$N = true;
};
SP.Ribbon.UserInterfacePageComponent.unregisterWithPageManager = function SP_Ribbon_UserInterfacePageComponent$unregisterWithPageManager() {
    if (SP.Ribbon.UserInterfacePageComponent.$3) {
        (SP.Ribbon.PageManager.get_instance()).removePageComponent(SP.Ribbon.UserInterfacePageComponent.get_instance());
        SP.Ribbon.UserInterfacePageComponent.$N = false;
    }
};
SP.Ribbon.UserInterfacePageComponent.prototype = {
    $n_1: null,
    $5a_1: null,
    $5Y_1: null,
    $1J_1: null,
    init: function SP_Ribbon_UserInterfacePageComponent$init() {
        this.$n_1 = ['RibbonEvent', 'CommandContextChanged', 'PreRibbonTabSwitch', 'PreToggleMinimized'];
    },
    getGlobalCommands: function SP_Ribbon_UserInterfacePageComponent$getGlobalCommands() {
        return this.$n_1;
    },
    canHandleCommand: function SP_Ribbon_UserInterfacePageComponent$canHandleCommand(commandId) {
        if (commandId === 'RibbonEvent' || commandId === 'CommandContextChanged' || commandId === 'PreRibbonTabSwitch' || commandId === 'PreToggleMinimized') {
            return true;
        }
        else {
            return false;
        }
    },
    getId: function SP_Ribbon_UserInterfacePageComponent$getId() {
        return 'UIComponent';
    },
    $w_1: false,
    handleCommand: function SP_Ribbon_UserInterfacePageComponent$handleCommand(commandId, properties, sequence) {
        var $v_0 = false;

        this.$w_1 = true;
        if (SP.Ribbon.SU.$2(commandId) || SP.Ribbon.SU.$0(properties) || SP.Ribbon.SU.$0(sequence)) {
            return false;
        }
        if (commandId === 'RibbonEvent') {
            var $v_1 = properties;

            $v_0 = this.$3A_1($v_1.Minimized || this.$1J_1 === 'Ribbon.Read');
        }
        else if (commandId === 'CommandContextChanged') {
            var $v_2 = properties;

            if (!SP.Ribbon.SU.$0($v_2.ChangedByUser) && $v_2.ChangedByUser) {
                MenuHtc_hide();
            }
            if (!SP.Ribbon.SU.$0($v_2.NewContextId) && $v_2.NewContextId === 'Ribbon.Read' || this.$1J_1 === 'Ribbon.Read') {
                $v_0 = this.$3A_1($v_2.NewContextId === 'Ribbon.Read');
            }
            this.$1J_1 = $v_2.NewContextId;
        }
        else if (commandId === 'PreRibbonTabSwitch') {
            var $v_3 = properties;

            if (!SP.Ribbon.SU.$0($v_3.NewContextId) && $v_3.NewContextId === 'Ribbon.Read' || this.$1J_1 === 'Ribbon.Read' || !this.$1J_1) {
                $v_0 = this.$5L_1($v_3.NewContextId === 'Ribbon.Read');
            }
        }
        else if (commandId === 'PreToggleMinimized') {
            var $v_4 = properties;

            if ($v_4.Cancelable) {
                var $v_5 = window.location.search;

                $v_4.CancelAction = !SP.Ribbon.SU.$0($v_5) && $v_5.indexOf('IsDlg=1') !== -1;
            }
            $v_0 = true;
        }
        this.$w_1 = false;
        return $v_0;
    },
    isFocusable: function SP_Ribbon_UserInterfacePageComponent$isFocusable() {
        return false;
    },
    $3A_1: function SP_Ribbon_UserInterfacePageComponent$$3A_1($p0) {
        OnRibbonMinimizedChanged($p0);
        return true;
    },
    $5L_1: function SP_Ribbon_UserInterfacePageComponent$$5L_1($p0) {
        PreRibbonTabSwitched($p0);
        return true;
    }
};
SP.Ribbon.EMailLink = function SP_Ribbon_EMailLink() {
};
SP.Ribbon.EMailLink.get_$2d = function SP_Ribbon_EMailLink$get_$2d() {
    if (!SP.Ribbon.SU.$2(SP.Ribbon.EMailLink.$1f)) {
        return SP.Ribbon.EMailLink.$1f;
    }
    return SP.Res.emailDefaultBody;
};
SP.Ribbon.EMailLink.openMailerWithUrl = function SP_Ribbon_EMailLink$openMailerWithUrl(URL) {
    SP.Ribbon.EMailLink.$1h = new SP.ClientContext();
    SP.Ribbon.EMailLink.$1l = SP.Utilities.Utility.createEmailBodyForInvitation(SP.Ribbon.EMailLink.$1h, URL);
    SP.Ribbon.EMailLink.$1h.executeQueryAsync(SP.Ribbon.EMailLink.onSucceededEmailBody, SP.Ribbon.EMailLink.onFailed);
};
SP.Ribbon.EMailLink.onSucceededEmailBody = function SP_Ribbon_EMailLink$onSucceededEmailBody(sender, args) {
    if (SP.Ribbon.EMailLink.$1l) {
        SP.Ribbon.EMailLink.$1f = SP.Ribbon.EMailLink.$1l.get_value();
    }
    window.navigateMailToLinkWithMessage('', SP.Ribbon.EMailLink.get_$2d());
};
SP.Ribbon.EMailLink.onFailed = function SP_Ribbon_EMailLink$onFailed(sender, args) {
    window.navigateMailToLinkWithMessage('', SP.Ribbon.EMailLink.get_$2d());
};
SP.Ribbon.TasksWebPartPageComponent = function SP_Ribbon_TasksWebPartPageComponent(id, data) {
    SP.Ribbon.TasksWebPartPageComponent.initializeBase(this, [id, data]);
};
SP.Ribbon.TasksWebPartPageComponent.prototype = {
    handleCommand: function SP_Ribbon_TasksWebPartPageComponent$handleCommand(commandId, properties, sequence) {
        switch (commandId) {
        case 'Insert':
            if (this.get_$4_3()) {
                (this.get_$4_3()).InsertProvisionalItemBeforeFocusedItem();
                return true;
            }
            else {
                InsertProvisionalItem(this.get_ctx());
                return true;
            }
        default:
            return SP.Ribbon.GenericListWebPartPageComponent.prototype.handleCommand.call(this, commandId, properties, sequence);
        }
    },
    getFocusedCommands: function SP_Ribbon_TasksWebPartPageComponent$getFocusedCommands() {
        var $v_0 = SP.Ribbon.GenericListWebPartPageComponent.prototype.getFocusedCommands.call(this);

        Array.add($v_0, 'Insert');
        return $v_0;
    },
    canHandleCommand: function SP_Ribbon_TasksWebPartPageComponent$canHandleCommand(commandId) {
        switch (commandId) {
        case 'TasksTab':
        case 'TasksManageGroup':
        case 'TasksNewGroup':
        case 'TasksActionsGroup':
            return true;
        case 'Insert':
            if (this.get_$4_3()) {
                return (this.get_$4_3()).get_IsInsertProvisionalItemBeforeFocusEnabled();
            }
            else {
                return this.getCountOfSelectedItems() > 0 && SP.Ribbon.GenericListWebPartPageComponent.prototype.canHandleCommand.call(this, 'NewDefaultListItem');
            }
        default:
            return SP.Ribbon.GenericListWebPartPageComponent.prototype.canHandleCommand.call(this, commandId);
        }
    },
    getGlobalCommands: function SP_Ribbon_TasksWebPartPageComponent$getGlobalCommands() {
        var $v_0 = SP.Ribbon.GenericListWebPartPageComponent.prototype.getGlobalCommands.call(this);
        var $$dict_1 = this.get_alwaysEnabledCommands();

        for (var $$key_2 in $$dict_1) {
            var $v_1 = {
                key: $$key_2,
                value: $$dict_1[$$key_2]
            };

            Array.add($v_0, $v_1.key);
        }
        return $v_0;
    },
    addAlwaysEnabledCommands: function SP_Ribbon_TasksWebPartPageComponent$addAlwaysEnabledCommands() {
        SP.Ribbon.GenericListWebPartPageComponent.prototype.addAlwaysEnabledCommands.call(this);
        var $v_0 = this.get_alwaysEnabledCommands();

        $v_0['TasksTab'] = true;
        $v_0['TasksManageGroup'] = true;
        $v_0['TasksNewGroup'] = true;
        $v_0['TasksActionsGroup'] = true;
        $v_0['OutlineLevels'] = true;
    }
};
SP.Ribbon.DesignBuilderPageComponent = function SP_Ribbon_DesignBuilderPageComponent() {
    SP.Ribbon.DesignBuilderPageComponent.initializeBase(this);
};
SP.Ribbon.DesignBuilderPageComponent.get_instance = function SP_Ribbon_DesignBuilderPageComponent$get_instance() {
    if (!SP.Ribbon.DesignBuilderPageComponent.$3) {
        SP.Ribbon.DesignBuilderPageComponent.$3 = new SP.Ribbon.DesignBuilderPageComponent();
    }
    return SP.Ribbon.DesignBuilderPageComponent.$3;
};
SP.Ribbon.DesignBuilderPageComponent.registerWithPageManager = function SP_Ribbon_DesignBuilderPageComponent$registerWithPageManager() {
    if (SP.Ribbon.DesignBuilderPageComponent.$N) {
        return;
    }
    (SP.Ribbon.PageManager.get_instance()).addPageComponent(SP.Ribbon.DesignBuilderPageComponent.get_instance());
    SP.Ribbon.DesignBuilderPageComponent.$N = true;
};
SP.Ribbon.DesignBuilderPageComponent.unregisterWithPageManager = function SP_Ribbon_DesignBuilderPageComponent$unregisterWithPageManager() {
    if (SP.Ribbon.DesignBuilderPageComponent.$3) {
        (SP.Ribbon.PageManager.get_instance()).removePageComponent(SP.Ribbon.DesignBuilderPageComponent.get_instance());
        SP.Ribbon.DesignBuilderPageComponent.$N = false;
    }
};
SP.Ribbon.DesignBuilderPageComponent.prototype = {
    $n_1: null,
    $3V_1: 'none',
    $S_1: 'none',
    $X_1: null,
    $W_1: null,
    $R_1: null,
    $3K_1: null,
    $3O_1: null,
    $3L_1: null,
    $3J_1: null,
    $3N_1: null,
    $3M_1: null,
    $2G_1: null,
    $2H_1: null,
    $2F_1: null,
    $1H_1: null,
    $2K_1: null,
    init: function SP_Ribbon_DesignBuilderPageComponent$init() {
        this.$n_1 = ['QueryAlwaysTrue', 'ImagePickerFileSelected', 'ImagePickerFileDismissed', 'PalettePickerSelected', 'PalettePickerPreview', 'PalettePickerPreviewRevert', 'PalettePickerQuery', 'LayoutPickerSelected', 'LayoutPickerPreview', 'LayoutPickerPreviewRevert', 'LayoutPickerQuery', 'FontSchemePickerSelected', 'FontSchemePickerQuery'];
        this.$3K_1 = $get('ms-designbuilder-hidSelectedImage');
        this.$3O_1 = $get('ms-designbuilder-hidSelectedPalette');
        this.$3L_1 = $get('ms-designbuilder-hidSelectedLayout');
        this.$3J_1 = $get('ms-designbuilder-hidSelectedFontScheme');
        this.$3N_1 = $get('ms-designbuilder-hidSelectedLayoutDefaultTheme');
        this.$3M_1 = $get('ms-designbuilder-hidSelectedLayoutDefaultFontScheme');
        this.$2G_1 = $get('ms-designbuilder-imagecontrol-placeholdertext');
        this.$2H_1 = $get('ms-designbuilder-imagecontrol-progress');
        this.$2F_1 = $get('ms-designbuilder-imagecontrol-errortext');
        this.$1H_1 = $get('ms-designbuilder-imagecontrol-image');
    },
    getGlobalCommands: function SP_Ribbon_DesignBuilderPageComponent$getGlobalCommands() {
        return this.$n_1;
    },
    canHandleCommand: function SP_Ribbon_DesignBuilderPageComponent$canHandleCommand(commandId) {
        return Array.contains(this.$n_1, commandId);
    },
    getId: function SP_Ribbon_DesignBuilderPageComponent$getId() {
        return 'DesignBuilderPageComponent';
    },
    $w_1: false,
    get_$3i_1: function SP_Ribbon_DesignBuilderPageComponent$get_$3i_1() {
        return this.$3V_1;
    },
    set_$3i_1: function SP_Ribbon_DesignBuilderPageComponent$set_$3i_1($p0) {
        this.$3V_1 = $p0;
        this.$3K_1.value = $p0;
        return $p0;
    },
    get_$3k_1: function SP_Ribbon_DesignBuilderPageComponent$get_$3k_1() {
        return this.$X_1;
    },
    set_$3k_1: function SP_Ribbon_DesignBuilderPageComponent$set_$3k_1($p0) {
        this.$X_1 = $p0;
        this.$3O_1.value = $p0;
        return $p0;
    },
    get_$3j_1: function SP_Ribbon_DesignBuilderPageComponent$get_$3j_1() {
        return this.$W_1;
    },
    set_$3j_1: function SP_Ribbon_DesignBuilderPageComponent$set_$3j_1($p0) {
        this.$W_1 = $p0;
        this.$3L_1.value = $p0;
        var $v_0 = (this.get_$5m_1())[$p0];

        this.$3N_1.value = $v_0.defaultColorPalette;
        this.$3M_1.value = $v_0.defaultFontScheme;
        return $p0;
    },
    get_$3h_1: function SP_Ribbon_DesignBuilderPageComponent$get_$3h_1() {
        return this.$R_1;
    },
    set_$3h_1: function SP_Ribbon_DesignBuilderPageComponent$set_$3h_1($p0) {
        this.$R_1 = $p0;
        this.$3J_1.value = $p0;
        return $p0;
    },
    get_$5m_1: function SP_Ribbon_DesignBuilderPageComponent$get_$5m_1() {
        if (!this.$2K_1) {
            var $v_0 = window.g_designData;

            this.$2K_1 = $v_0.preview;
        }
        return this.$2K_1;
    },
    handleCommand: function SP_Ribbon_DesignBuilderPageComponent$handleCommand(commandId, properties, sequence) {
        var $v_0 = false;

        this.$w_1 = true;
        if (SP.Ribbon.SU.$2(commandId) || SP.Ribbon.SU.$0(properties) || SP.Ribbon.SU.$0(sequence)) {
            return false;
        }
        switch (commandId) {
        case 'QueryAlwaysTrue':
            $v_0 = true;
            break;
        case 'ImagePickerFileSelected':
            $v_0 = this.$5A_1(properties);
            break;
        case 'ImagePickerFileDismissed':
            $v_0 = this.$38_1(properties);
            break;
        case 'PalettePickerSelected':
            $v_0 = this.$5I_1(properties);
            break;
        case 'PalettePickerPreview':
            $v_0 = this.$5F_1(properties);
            break;
        case 'PalettePickerPreviewRevert':
            $v_0 = this.$5G_1(properties);
            break;
        case 'PalettePickerQuery':
            $v_0 = this.$5H_1(properties);
            break;
        case 'LayoutPickerSelected':
            $v_0 = this.$5E_1(properties);
            break;
        case 'LayoutPickerPreview':
            $v_0 = this.$5B_1(properties);
            break;
        case 'LayoutPickerPreviewRevert':
            $v_0 = this.$5C_1(properties);
            break;
        case 'LayoutPickerQuery':
            $v_0 = this.$5D_1(properties);
            break;
        case 'FontSchemePickerSelected':
            $v_0 = this.$59_1(properties);
            break;
        case 'FontSchemePickerQuery':
            $v_0 = this.$58_1(properties);
            break;
        }
        this.$w_1 = false;
        return $v_0;
    },
    $5A_1: function SP_Ribbon_DesignBuilderPageComponent$$5A_1($p0) {
        var $v_0 = $p0['FileUrl'];

        if ($v_0 === 'none') {
            return this.$38_1($p0);
        }
        this.set_$3i_1($v_0);
        var $v_1 = this.$S_1 = $v_0 + '?x=' + ((new Date()).getTime()).toString();

        this.$1H_1.src = $v_1;
        this.$1H_1.style.display = 'inline-block';
        this.$2G_1.style.display = 'none';
        this.$2F_1.style.display = 'none';
        this.$2H_1.style.display = 'none';
        var $v_2 = $p0['UpdatePreview'];

        if ($v_2) {
            UpdateDesignBuilderPreview(this.$W_1, this.$X_1, $v_1, this.$R_1);
        }
        return true;
    },
    $38_1: function SP_Ribbon_DesignBuilderPageComponent$$38_1($p0) {
        this.set_$3i_1('none');
        this.$S_1 = 'none';
        this.$1H_1.src = SP.ScriptUtility.emptyString;
        this.$1H_1.style.display = 'none';
        this.$2G_1.style.display = 'inline-block';
        this.$2F_1.style.display = 'none';
        this.$2H_1.style.display = 'none';
        UpdateDesignBuilderPreview(this.$W_1, this.$X_1, this.$S_1, this.$R_1);
        return true;
    },
    $5I_1: function SP_Ribbon_DesignBuilderPageComponent$$5I_1($p0) {
        var $v_0 = this.set_$3k_1($p0['CommandValueId']);

        UpdateDesignBuilderPreview(this.$W_1, $v_0, this.$S_1, this.$R_1);
        return true;
    },
    $5F_1: function SP_Ribbon_DesignBuilderPageComponent$$5F_1($p0) {
        var $v_0 = $p0['CommandValueId'];

        UpdateDesignBuilderPreview(this.$W_1, $v_0, this.$S_1, this.$R_1);
        return true;
    },
    $5G_1: function SP_Ribbon_DesignBuilderPageComponent$$5G_1($p0) {
        UpdateDesignBuilderPreview(this.$W_1, this.$X_1, this.$S_1, this.$R_1);
        return true;
    },
    $5H_1: function SP_Ribbon_DesignBuilderPageComponent$$5H_1($p0) {
        this.set_$3k_1($p0['SelectedItemId']);
        return true;
    },
    $5E_1: function SP_Ribbon_DesignBuilderPageComponent$$5E_1($p0) {
        var $v_0 = this.set_$3j_1($p0['CommandValueId']);

        UpdateDesignBuilderPreview($v_0, this.$X_1, this.$S_1, this.$R_1);
        return true;
    },
    $5B_1: function SP_Ribbon_DesignBuilderPageComponent$$5B_1($p0) {
        var $v_0 = $p0['CommandValueId'];

        UpdateDesignBuilderPreview($v_0, this.$X_1, this.$S_1, this.$R_1);
        return true;
    },
    $5C_1: function SP_Ribbon_DesignBuilderPageComponent$$5C_1($p0) {
        UpdateDesignBuilderPreview(this.$W_1, this.$X_1, this.$S_1, this.$R_1);
        return true;
    },
    $5D_1: function SP_Ribbon_DesignBuilderPageComponent$$5D_1($p0) {
        this.set_$3j_1($p0['SelectedItemId']);
        return true;
    },
    $59_1: function SP_Ribbon_DesignBuilderPageComponent$$59_1($p0) {
        var $v_0 = this.set_$3h_1($p0['CommandValueId']);

        UpdateDesignBuilderPreview(this.$W_1, this.$X_1, this.$S_1, this.$R_1);
        return true;
    },
    $58_1: function SP_Ribbon_DesignBuilderPageComponent$$58_1($p0) {
        this.set_$3h_1($p0['SelectedItemId']);
        return true;
    },
    isFocusable: function SP_Ribbon_DesignBuilderPageComponent$isFocusable() {
        return false;
    }
};
Type.registerNamespace('SP.Ribbon.PageState');
SP.Ribbon.PageState.PageStateStrings = function SP_Ribbon_PageState_PageStateStrings() {
};
SP.Ribbon.PageState.PageStateCommands = function SP_Ribbon_PageState_PageStateCommands() {
};
SP.Ribbon.PageState.PageStateHandler = function SP_Ribbon_PageState_PageStateHandler() {
    SP.Ribbon.PageState.PageStateHandler.initializeBase(this);
};
SP.Ribbon.PageState.PageStateHandler.getButtonId = function SP_Ribbon_PageState_PageStateHandler$getButtonId(pageStateCommand) {
    if (!SP.Ribbon.PageState.PageStateHandler.$g) {
        SP.Ribbon.PageState.PageStateHandler.$g = {};
        SP.Ribbon.PageState.PageStateHandler.$g['PageStateGroupPublish'] = 'Publish';
        SP.Ribbon.PageState.PageStateHandler.$g['PageStateGroupUnpublish'] = 'Unpublish';
        SP.Ribbon.PageState.PageStateHandler.$g['PageStateGroupSubmitForApproval'] = 'SubmitForApproval';
        SP.Ribbon.PageState.PageStateHandler.$g['PageStateGroupCancelApproval'] = 'CancelApproval';
    }
    return SP.Ribbon.PageState.PageStateHandler.$g[pageStateCommand];
};
SP.Ribbon.PageState.PageStateHandler.setHandleSaveMenu = function SP_Ribbon_PageState_PageStateHandler$setHandleSaveMenu(handleSave) {
    SP.Ribbon.PageState.PageStateHandler.$1b = handleSave;
};
SP.Ribbon.PageState.PageStateHandler.$51 = function SP_Ribbon_PageState_PageStateHandler$$51($p0) {
    var $v_0 = null;
    var $v_1 = false;

    if (!SP.Ribbon.SU.$0(SP.Ribbon.PageState.PageStateHandler.$16[$p0])) {
        var $v_2 = SP.Ribbon.PageState.PageStateHandler.$16[$p0];

        for (var $v_3 = 0; $v_3 < $v_2.length && !$v_1; $v_3++) {
            if (eval(SP.Ribbon.PageState.ImportedNativeData.EnabledHandlers[$v_2[$v_3]])) {
                if (!$v_0) {
                    $v_0 = $v_2[$v_3];
                }
                else {
                    $v_0 = null;
                    $v_1 = true;
                }
            }
        }
    }
    return $v_0;
};
SP.Ribbon.PageState.PageStateHandler.$52 = function SP_Ribbon_PageState_PageStateHandler$$52($p0) {
    var $v_0 = $p0[CUI.Controls.DropDownCommandProperties.SelectedItemId];
    var $v_1 = $v_0.lastIndexOf('.');

    if ($v_1 < 0) {
        return null;
    }
    return $v_0.substring(0, $v_1 + 1);
};
SP.Ribbon.PageState.PageStateHandler.$61 = function SP_Ribbon_PageState_PageStateHandler$$61() {
    var $v_0 = false;

    if (SP.Ribbon.PageState.ImportedNativeData.PageState['ForceHideStatus']) {
        $v_0 = false;
    }
    else if (SP.Ribbon.PageState.ImportedNativeData.PageState['DocLibMinorVersionsEnabled'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsMinorVersion'] || SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsRejected'] || SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsPendingApproval'] || SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsScheduled'] || SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToCurrentUser'] || SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser'] || SP.Ribbon.PageState.ImportedNativeData.PageState['ForceShowStatus']) {
        $v_0 = true;
    }
    return $v_0;
};
SP.Ribbon.PageState.PageStateHandler.showPageStatus = function SP_Ribbon_PageState_PageStateHandler$showPageStatus() {
    if (SP.Ribbon.PageState.PageStateHandler.$61()) {
        var $v_0 = '';

        for (var $v_1 = 0; $v_1 < SP.Ribbon.PageState.ImportedNativeData.StatusBody.length; $v_1++) {
            if (!SP.Ribbon.SU.$2(SP.Ribbon.PageState.ImportedNativeData.StatusTitle[$v_1]) && !SP.Ribbon.SU.$2(SP.Ribbon.PageState.ImportedNativeData.StatusBody[$v_1])) {
                if (!SP.Ribbon.SU.$2(SP.Ribbon.PageState.PageStateHandler.$B[$v_1]) && $get(SP.Ribbon.PageState.PageStateHandler.$B[$v_1] + '_body')) {
                    SP.UI.Status.updateStatus(SP.Ribbon.PageState.PageStateHandler.$B[$v_1], SP.Ribbon.PageState.ImportedNativeData.StatusBody[$v_1]);
                    SP.UI.Status.setStatusPriColor(SP.Ribbon.PageState.PageStateHandler.$B[$v_1], SP.Ribbon.PageState.ImportedNativeData.StatusPriority);
                    if (SP.Ribbon.SU.$2($v_0)) {
                        $v_0 = SP.Ribbon.PageState.PageStateHandler.$B[$v_1];
                    }
                }
                else {
                    if (SP.Ribbon.SU.$2($v_0)) {
                        SP.Ribbon.PageState.PageStateHandler.$B[$v_1] = SP.UI.Status.addStatus(SP.Ribbon.PageState.ImportedNativeData.StatusTitle[$v_1], SP.Ribbon.PageState.ImportedNativeData.StatusBody[$v_1], false);
                        $v_0 = SP.Ribbon.PageState.PageStateHandler.$B[$v_1];
                    }
                    else {
                        SP.Ribbon.PageState.PageStateHandler.$B[$v_1] = SP.UI.Status.appendStatus($v_0, SP.Ribbon.PageState.ImportedNativeData.StatusTitle[$v_1], SP.Ribbon.PageState.ImportedNativeData.StatusBody[$v_1]);
                    }
                    SP.UI.Status.setStatusPriColor(SP.Ribbon.PageState.PageStateHandler.$B[$v_1], SP.Ribbon.PageState.ImportedNativeData.StatusPriority);
                }
            }
            else {
                if (!SP.Ribbon.SU.$2(SP.Ribbon.PageState.PageStateHandler.$B[$v_1])) {
                    SP.UI.Status.removeStatus(SP.Ribbon.PageState.PageStateHandler.$B[$v_1]);
                    SP.Ribbon.PageState.PageStateHandler.$B[$v_1] = null;
                }
            }
        }
    }
    else {
        for (var $v_2 = 0; $v_2 < SP.Ribbon.PageState.PageStateHandler.$B.length; $v_2++) {
            if (!SP.Ribbon.SU.$2(SP.Ribbon.PageState.PageStateHandler.$B[$v_2])) {
                SP.UI.Status.removeStatus(SP.Ribbon.PageState.PageStateHandler.$B[$v_2]);
                SP.Ribbon.PageState.PageStateHandler.$B[$v_2] = null;
            }
        }
    }
};
SP.Ribbon.PageState.PageStateHandler.showErrorDialog = function SP_Ribbon_PageState_PageStateHandler$showErrorDialog() {
    if (SP.Ribbon.SU.$2(SP.Ribbon.PageState.NativeErrorState.ShowErrorDialogScript)) {
        var $v_0 = '<p>' + SP.Ribbon.PageState.NativeErrorState.Message + '</p><center><ul class=\'ms-noList\'>';

        for (var $v_3 = 0; $v_3 < SP.Ribbon.PageState.NativeErrorState.ButtonCount; $v_3++) {
            $v_0 += '<li class=\"ms-dlgErrItem\"><input type=\"button\" onclick=\"' + SP.Ribbon.PageState.NativeErrorState.ButtonCommand[$v_3] + '\" value=\"' + SP.Ribbon.PageState.NativeErrorState.ButtonText[$v_3] + '\" /></li>';
        }
        $v_0 += '</ul></center>';
        var $v_1 = document.createElement('DIV');

        $v_1.className = 's4-dlg-err-itm';
        $v_1.style.paddingLeft = '11px';
        $v_1.style.paddingRight = '11px';
        $v_1.style.paddingTop = '11px';
        $v_1.style.paddingBottom = '0px';
        $v_1.style.minWidth = '200px';
        $v_1.innerHTML = $v_0;
        var $v_2 = new SP.UI.DialogOptions();

        $v_2.html = $v_1;
        $v_2.title = SP.Ribbon.PageState.NativeErrorState.Title;
        $v_2.dialogReturnValueCallback = null;
        SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload = true;
        SP.Ribbon.PageState.NativeErrorState.ErrorDialog = SP.UI.ModalDialog.showModalDialog($v_2);
    }
    else {
        SP.Ribbon.PageState.NativeErrorState.ErrorDialog = eval(SP.Ribbon.PageState.NativeErrorState.ShowErrorDialogScript);
    }
};
SP.Ribbon.PageState.PageStateHandler.dismissErrorDialog = function SP_Ribbon_PageState_PageStateHandler$dismissErrorDialog() {
    if (!SP.Ribbon.SU.$0(SP.Ribbon.PageState.NativeErrorState.ErrorDialog)) {
        SP.Ribbon.PageState.NativeErrorState.ErrorDialog.close(1);
    }
};
SP.Ribbon.PageState.PageStateHandler.popupWaitScreen = function SP_Ribbon_PageState_PageStateHandler$popupWaitScreen(title, body) {
    SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload = true;
    SP.Ribbon.PageState.ImportedNativeData.WaitScreen = SP.UI.ModalDialog.showWaitScreenWithNoClose(title, body);
    SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload = false;
};
SP.Ribbon.PageState.PageStateHandler.dismissWaitScreen = function SP_Ribbon_PageState_PageStateHandler$dismissWaitScreen() {
    if (!SP.Ribbon.SU.$0(SP.Ribbon.PageState.ImportedNativeData.WaitScreen)) {
        SP.Ribbon.PageState.ImportedNativeData.WaitScreen.close(1);
    }
};
SP.Ribbon.PageState.PageStateHandler.EnableSaveBeforeNavigate = function SP_Ribbon_PageState_PageStateHandler$EnableSaveBeforeNavigate(enable) {
    if (enable) {
        if (!SP.Ribbon.PageState.PageStateHandler.$1K) {
            SP.Ribbon.Utility.$42('beforeunload', SP.Ribbon.PageState.PageStateHandler.$2Q);
            SP.Ribbon.PageState.PageStateHandler.$1K = true;
            var $v_0 = Sys.WebForms.PageRequestManager.getInstance();

            if ($v_0) {
                $v_0.add_pageLoaded(SP.Ribbon.PageState.PageStateHandler.$2P);
            }
            SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload = false;
        }
    }
    else {
        try {
            if (SP.Ribbon.PageState.PageStateHandler.$1K) {
                SP.Ribbon.PageState.PageStateHandler.$1K = false;
                var $v_1 = Sys.WebForms.PageRequestManager.getInstance();

                if ($v_1) {
                    $v_1.remove_pageLoaded(SP.Ribbon.PageState.PageStateHandler.$2P);
                }
                SP.Ribbon.Utility.$4n('beforeunload', SP.Ribbon.PageState.PageStateHandler.$2Q);
            }
        }
        catch ($$e_3) { }
    }
};
SP.Ribbon.PageState.PageStateHandler.$5l = function SP_Ribbon_PageState_PageStateHandler$$5l($p0, $p1) {
    SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload = false;
};
SP.Ribbon.PageState.PageStateHandler.pageStateOnSubmit = function SP_Ribbon_PageState_PageStateHandler$pageStateOnSubmit(evt) {
    SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload = true;
};
SP.Ribbon.PageState.PageStateHandler.SaveBeforeNavigateCallback = function SP_Ribbon_PageState_PageStateHandler$SaveBeforeNavigateCallback(callbackResponse) {
    eval(callbackResponse);
    SP.Ribbon.PageState.PageStateHandler.saveCallbackError = SP.Ribbon.PageState.NativeErrorState.Message;
};
SP.Ribbon.PageState.PageStateHandler.WikiSaveBeforeNavigateCallback = function SP_Ribbon_PageState_PageStateHandler$WikiSaveBeforeNavigateCallback(message, status) {
    if (status) {
        SP.Ribbon.PageState.PageStateHandler.saveCallbackError = message;
    }
};
SP.Ribbon.PageState.PageStateHandler.$5n = function SP_Ribbon_PageState_PageStateHandler$$5n() {
    if (SP.Ribbon.SU.$1D(SP.Ribbon.PageState.ImportedNativeData.PageState)) {
        return true;
    }
    else {
        return !!SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsWikiPage'] || !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsWikiPage'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToCurrentUser'];
    }
};
SP.Ribbon.PageState.PageStateHandler.$3Z = function SP_Ribbon_PageState_PageStateHandler$$3Z() {
    if (SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsWikiPage']) {
        return eval('SPAutoSaveIsPageDirty();');
    }
    else {
        return true;
    }
};
SP.Ribbon.PageState.PageStateHandler.$3m = function SP_Ribbon_PageState_PageStateHandler$$3m($p0, $p1) {
    if (!SP.Ribbon.SU.$1D(window.event)) {
        if (!SP.Ribbon.SU.$2($p1)) {
            window.event.returnValue = $p1;
        }
        else {
            window.event.returnValue = undefined;
        }
    }
    else {
        if (!SP.Ribbon.SU.$2($p1)) {
            $p0.rawEvent.returnValue = $p1;
        }
    }
};
SP.Ribbon.PageState.PageStateHandler.saveBeforeNavigate = function SP_Ribbon_PageState_PageStateHandler$saveBeforeNavigate(evt) {
    if (!SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload && SP.Ribbon.PageState.Handlers.isInEditMode() && SP.Ribbon.PageState.PageStateHandler.$3Z()) {
        if (SP.Ribbon.PageState.PageStateHandler.$5n()) {
            if (!confirm(SP.Res.pageStateSaveBeforeNavigateNotCheckedOutWarning)) {
                SP.Ribbon.PageState.PageStateHandler.$3m(evt, SP.Res.pageStateSaveBeforeNavigateLastChanceWarning);
                return SP.Res.pageStateSaveBeforeNavigateLastChanceWarning;
                ;
                return;
            }
        }
        SP.Ribbon.PageState.PageStateHandler.saveCallbackError = SP.Res.pageStateSaveBeforeNavigateUnknownError15;
        eval('\r\n                var __xmlHttpRequest = window.XMLHttpRequest;\r\n                window.XMLHttpRequest = XMLHttpRequest = function() {\r\n                    var _xmlHttp = null;\r\n                    if (!__xmlHttpRequest) {\r\n                        try {\r\n                            _xmlHttp = new ActiveXObject(\'Microsoft.XMLHTTP\');\r\n                        }\r\n                        catch(ex) {}\r\n                    }\r\n                    else {\r\n                        _xmlHttp = new __xmlHttpRequest();\r\n                    }\r\n                    \r\n                    if (!_xmlHttp) return null;\r\n                    \r\n                    this.abort = function() {return _xmlHttp.abort();}\r\n\r\n                    this.getAllResponseHeaders = function() {return _xmlHttp.getAllResponseHeaders();}\r\n                    this.getResponseHeader = function(header) {return _xmlHttp.getResponseHeader(header);}\r\n                    this.open = function(method, url, async, user, password) {\r\n                        return _xmlHttp.open(method, url, false, user, password);\r\n                    }\r\n                    this.send = function(body) {\r\n                        if (_xmlHttp.timeout != undefined)\r\n                        {\r\n                            _xmlHttp.timeout = 15000;\r\n                        }\r\n                        _xmlHttp.send(body);\r\n                        this.readyState = _xmlHttp.readyState;\r\n                        if (this.readyState == 4)\r\n                        {\r\n                            this.responseBody = _xmlHttp.responseBody;\r\n                            this.responseStream = _xmlHttp.responseStream;\r\n                            this.responseText = _xmlHttp.responseText;\r\n                            this.responseXML = _xmlHttp.responseXML;\r\n                            this.status = _xmlHttp.status;\r\n                            this.statusText = _xmlHttp.statusText;\r\n                        }\r\n                        this.onreadystatechange();\r\n                    }\r\n                    this.setRequestHeader = function(name, value) {return _xmlHttp.setRequestHeader(name, value);}\r\n                }');
        eval(SP.Ribbon.PageState.ImportedNativeData.CommandHandlers['PageStateSaveBeforeNavigate']);
        eval('window.XMLHttpRequest = __xmlHttpRequest;');
        SP.Ribbon.PageState.PageStateHandler.$3m(evt, SP.Ribbon.PageState.PageStateHandler.saveCallbackError);
        SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload = false;
        if (!SP.Ribbon.SU.$2(SP.Ribbon.PageState.PageStateHandler.saveCallbackError)) {
            return SP.Ribbon.PageState.PageStateHandler.saveCallbackError;
            ;
        }
    }
    else {
        SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload = false;
    }
};
SP.Ribbon.PageState.PageStateHandler.updatePageState = function SP_Ribbon_PageState_PageStateHandler$updatePageState() {
    var $v_0 = 'PageStateUpdatePageState';

    if (!SP.Ribbon.PageState.ImportedNativeData || !SP.Ribbon.PageState.ImportedNativeData.CommandHandlers || !SP.Ribbon.PageState.ImportedNativeData.CommandHandlers[$v_0]) {
        return;
    }
    eval(SP.Ribbon.PageState.ImportedNativeData.CommandHandlers[$v_0]);
};
SP.Ribbon.PageState.PageStateHandler.prototype = {
    getFocusedCommands: function SP_Ribbon_PageState_PageStateHandler$getFocusedCommands() {
        return null;
    },
    getGlobalCommands: function SP_Ribbon_PageState_PageStateHandler$getGlobalCommands() {
        return [Commands.CommandIds.ApplicationStateChanged, 'CPEditTab', 'EditAndCheckoutGroup', 'WikiPageTab', 'PublishTab', 'ApproveGroup', 'PageStateGroupOpenMenuSave', 'PageStateGroupOpenMenuCheckin', 'PageStateGroupOpenMenuPublish', 'PageStateGroupQuerySaveMenu', 'PageStateGroupQueryCheckinMenu', 'PageStateGroupQueryPublishMenu', 'PageStateGroupQueryPagePublishMenu', 'PageStateGroupSaveSplit', 'PageStateGroupCheckinSplit', 'PageStateGroupPublishSplit', 'PageStateGroupPagePublishSplit', 'PageStateGroupSave', 'PageStateGroupSaveAndStop', 'PageStateGroupSaveAndPublish', 'PageStateGroupEdit', 'PageStateGroupDontSaveAndStop', 'PageStateGroupCheckin', 'PageStateGroupCheckout', 'PageStateGroupDiscardCheckout', 'PageStateGroupOverrideCheckout', 'PageStateGroupPublish', 'PageStateGroupUnpublish', 'PageStateGroupSubmitForApproval', 'PageStateGroupCancelApproval', 'PageStateGroupApprove', 'PageStateGroupReject', 'ManageGroup', 'DeletePage', 'PageStateGroupStopEditing', 'PublishingGroup'];
    },
    canHandleCommand: function SP_Ribbon_PageState_PageStateHandler$canHandleCommand(commandId) {
        if (!SP.Ribbon.PageState.PageStateHandler.$1b && (commandId === 'PageStateGroupSaveSplit' || commandId === 'PageStateGroupOpenMenuSave' || commandId === 'PageStateGroupQuerySaveMenu' || commandId === 'PageStateGroupSave' || commandId === 'PageStateGroupSaveAndStop' || commandId === 'PageStateGroupSaveAndPublish' || commandId === 'PageStateGroupEdit' || commandId === 'PageStateGroupDontSaveAndStop' || commandId === 'PageStateGroupStopEditing')) {
            return false;
        }
        if ('PageStateGroupStopEditing' === commandId) {
            commandId = 'PageStateGroupSaveAndStop';
        }
        if (!SP.Ribbon.SU.$0(SP.Ribbon.PageState.ImportedNativeData.EnabledHandlers[commandId])) {
            return eval(SP.Ribbon.PageState.ImportedNativeData.EnabledHandlers[commandId]);
        }
        else if (!SP.Ribbon.SU.$0(SP.Ribbon.PageState.PageStateHandler.$16[commandId])) {
            var $v_0 = false;
            var $v_1 = SP.Ribbon.PageState.PageStateHandler.$16[commandId];

            for (var $v_2 = 0; $v_2 < $v_1.length && !$v_0; $v_2++) {
                $v_0 = eval(SP.Ribbon.PageState.ImportedNativeData.EnabledHandlers[$v_1[$v_2]]);
            }
            return $v_0;
        }
        return true;
    },
    handleCommand: function SP_Ribbon_PageState_PageStateHandler$handleCommand(commandId, properties, sequence) {
        if (!SP.Ribbon.PageState.PageStateHandler.$1b && (commandId === 'PageStateGroupSaveSplit' || commandId === 'PageStateGroupOpenMenuSave' || commandId === 'PageStateGroupQuerySaveMenu' || commandId === 'PageStateGroupSave' || commandId === 'PageStateGroupSaveAndStop' || commandId === 'PageStateGroupEdit' || commandId === 'PageStateGroupDontSaveAndStop' || commandId === 'PageStateGroupStopEditing')) {
            return false;
        }
        if (Commands.CommandIds.ApplicationStateChanged === commandId) {
            SP.Ribbon.PageStateActionButton.updateState();
            return true;
        }
        if ('PageStateGroupStopEditing' === commandId) {
            if (confirm(SP.Res.pageStateSaveBeforeNavigateNotCheckedOutWarning)) {
                commandId = 'PageStateGroupSaveAndStop';
            }
            else {
                commandId = 'PageStateGroupDontSaveAndStop';
            }
        }
        if (commandId.startsWith('PageStateGroupQuery')) {
            var $v_0 = SP.Ribbon.PageState.PageStateHandler.$52(properties);

            if (!$v_0) {
                return false;
            }
            switch (commandId) {
            case 'PageStateGroupQuerySaveMenu':
                if (SP.Ribbon.PageState.Handlers.isInEditMode()) {
                    properties[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $v_0 + 'SaveAndStop';
                }
                else {
                    properties[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $v_0 + 'Edit';
                }
                break;
            case 'PageStateGroupQueryCheckinMenu':
                if (SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser']) {
                    properties[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $v_0 + 'OverrideCheckout';
                }
                else if (!SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToCurrentUser']) {
                    properties[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $v_0 + 'Checkout';
                }
                else {
                    properties[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $v_0 + 'Checkin';
                }
                break;
            case 'PageStateGroupQueryPublishMenu':
                if (!this.$3l_1(false, properties, $v_0, 'PageStateGroupPublishSplit')) {
                    return false;
                }
                break;
            case 'PageStateGroupQueryPagePublishMenu':
                if (!this.$3l_1(true, properties, $v_0, 'PageStateGroupPagePublishSplit')) {
                    return false;
                }
                break;
            }
            return true;
        }
        else if (!SP.Ribbon.SU.$0(SP.Ribbon.PageState.ImportedNativeData.CommandHandlers[commandId])) {
            return SP.Ribbon.PageState.Handlers.showStateChangeDialog(commandId, SP.Ribbon.PageState.ImportedNativeData.CommandHandlers[commandId]);
        }
        else if (properties && !SP.Ribbon.SU.$2(properties['CommandValueId'])) {
            return SP.Ribbon.PageState.Handlers.showStateChangeDialog(properties['CommandValueId'], SP.Ribbon.PageState.ImportedNativeData.CommandHandlers[properties['CommandValueId']]);
        }
        return false;
    },
    $3l_1: function SP_Ribbon_PageState_PageStateHandler$$3l_1($p0, $p1, $p2, $p3) {
        var $v_0 = null;

        if ($v_0 = SP.Ribbon.PageState.PageStateHandler.$51($p3)) {
            $p1[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $p2 + SP.Ribbon.PageState.PageStateHandler.getButtonId($v_0);
        }
        else if (SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsMajorVersion']) {
            if (SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasApproverRights'] && !$p0) {
                $p1[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $p2 + 'Unpublish';
            }
            else {
                $p1[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $p2 + 'Publish';
            }
        }
        else if (SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsPendingApproval'] && SP.Ribbon.PageState.ImportedNativeData.PageState['DocLibWorkflowEnabled']) {
            $p1[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $p2 + 'CancelApproval';
        }
        else if (SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToCurrentUser'] || SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsRejected']) {
            if (!SP.Ribbon.PageState.ImportedNativeData.PageState['DocLibWorkflowEnabled'] && (!SP.Ribbon.PageState.ImportedNativeData.PageState['DocLibApprovalEnabled'] || SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasApproverRights'])) {
                $p1[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $p2 + 'Publish';
            }
            else {
                $p1[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $p2 + 'SubmitForApproval';
            }
        }
        else if (SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser']) {
            $p1[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $p2 + 'Publish';
        }
        else if (SP.Ribbon.PageState.ImportedNativeData.PageState['ItemHasCheckedInVersion']) {
            if (!SP.Ribbon.PageState.ImportedNativeData.PageState['DocLibWorkflowEnabled'] && (!SP.Ribbon.PageState.ImportedNativeData.PageState['DocLibApprovalEnabled'] || SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasApproverRights'])) {
                $p1[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $p2 + 'Publish';
            }
            else {
                $p1[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $p2 + 'SubmitForApproval';
            }
        }
        else if (SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsPendingApproval']) {
            if (!SP.Ribbon.PageState.ImportedNativeData.PageState['DocLibWorkflowEnabled'] && SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasApproverRights']) {
                $p1[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $p2 + 'Publish';
            }
            else {
                $p1[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $p2 + 'CancelApproval';
            }
        }
        else if (SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsScheduled'] && !$p0) {
            $p1[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $p2 + 'Unpublish';
        }
        else {
            return false;
        }
        return true;
    },
    isFocusable: function SP_Ribbon_PageState_PageStateHandler$isFocusable() {
        return false;
    },
    receiveFocus: function SP_Ribbon_PageState_PageStateHandler$receiveFocus() {
        return true;
    },
    yieldFocus: function SP_Ribbon_PageState_PageStateHandler$yieldFocus() {
        return true;
    },
    init: function SP_Ribbon_PageState_PageStateHandler$init() {
        if (SP.Ribbon.PageState.NativeErrorState.ButtonCount > 0 || !SP.Ribbon.SU.$2(SP.Ribbon.PageState.NativeErrorState.ShowErrorDialogScript)) {
            SP.Ribbon.PageState.PageStateHandler.showErrorDialog();
        }
        SP.Ribbon.PageState.PageStateHandler.showPageStatus();
    },
    getId: function SP_Ribbon_PageState_PageStateHandler$getId() {
        return 'PageState';
    }
};
SP.Ribbon.PageState.StateChangeDialogHandler = function SP_Ribbon_PageState_StateChangeDialogHandler() {
};
SP.Ribbon.PageState.StateChangeDialogHandler.prototype = {
    enabled: null,
    initialize: null,
    abort: null,
    validate: null
};
SP.Ribbon.PageState.Handlers = function SP_Ribbon_PageState_Handlers() {
};
SP.Ribbon.PageState.Handlers.isInEditMode = function SP_Ribbon_PageState_Handlers$isInEditMode() {
    var $v_0 = SP.Ribbon.WikiPageComponent.$C();

    if (SP.Ribbon.SU.$1D(SP.Ribbon.PageState.ImportedNativeData) || SP.Ribbon.SU.$1D(SP.Ribbon.PageState.ImportedNativeData.PageState)) {
        return $v_0;
    }
    else {
        return !!SP.Ribbon.PageState.ImportedNativeData.PageState['ViewModeIsEdit'] || !!SP.Ribbon.PageState.ImportedNativeData.PageState['ViewModeIsWebPartDesign'] || $v_0;
    }
};
SP.Ribbon.PageState.Handlers.isSaveEnabled = function SP_Ribbon_PageState_Handlers$isSaveEnabled() {
    if (SP.Ribbon.PageState.Handlers.isInEditMode() && SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasContributorRights'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsInSharedView'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsFormsPage'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser']) {
        return true;
    }
    return false;
};
SP.Ribbon.PageState.Handlers.isEditEnabled = function SP_Ribbon_PageState_Handlers$isEditEnabled() {
    if (!SP.Ribbon.PageState.Handlers.isInEditMode() && SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasContributorRights'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsFormsPage'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsInSharedView'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser']) {
        return true;
    }
    return false;
};
SP.Ribbon.PageState.Handlers.isDontSaveAndStopEnabled = function SP_Ribbon_PageState_Handlers$isDontSaveAndStopEnabled() {
    if (SP.Ribbon.PageState.ImportedNativeData.PageState['ViewModeIsEdit'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsFormsPage'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser']) {
        return true;
    }
    return false;
};
SP.Ribbon.PageState.Handlers.isSaveAndStopEditEnabled = function SP_Ribbon_PageState_Handlers$isSaveAndStopEditEnabled() {
    if (SP.Ribbon.PageState.Handlers.isInEditMode() && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsFormsPage'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsInSharedView']) {
        return true;
    }
    return false;
};
SP.Ribbon.PageState.Handlers.isSaveAndPublishEnabled = function SP_Ribbon_PageState_Handlers$isSaveAndPublishEnabled() {
    return SP.Ribbon.PageState.Handlers.isSaveAndStopEditEnabled() && SP.Ribbon.PageState.Handlers.$3F();
};
SP.Ribbon.PageState.Handlers.isCheckoutEnabled = function SP_Ribbon_PageState_Handlers$isCheckoutEnabled() {
    if (!SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToCurrentUser'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsFormsPage'] && SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasContributorRights'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsInLibrary'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsInSharedView']) {
        return true;
    }
    return false;
};
SP.Ribbon.PageState.Handlers.isCheckinEnabled = function SP_Ribbon_PageState_Handlers$isCheckinEnabled() {
    if (SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToCurrentUser'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsFormsPage'] && SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasContributorRights'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsInLibrary'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsInSharedView']) {
        return true;
    }
    return false;
};
SP.Ribbon.PageState.Handlers.isDiscardCheckoutEnabled = function SP_Ribbon_PageState_Handlers$isDiscardCheckoutEnabled() {
    if (SP.Ribbon.PageState.ImportedNativeData.PageState['ItemHasCheckedInVersion'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsFormsPage'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsInSharedView'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToCurrentUser']) {
        return true;
    }
    return false;
};
SP.Ribbon.PageState.Handlers.isOverrideCheckoutEnabled = function SP_Ribbon_PageState_Handlers$isOverrideCheckoutEnabled() {
    if (SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsFormsPage'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToCurrentUser'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToSystemUser'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsInLibrary'] && SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasOverrideCheckoutRights']) {
        return true;
    }
    return false;
};
SP.Ribbon.PageState.Handlers.$3F = function SP_Ribbon_PageState_Handlers$$3F() {
    if (!SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsFormsPage'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsPendingApproval'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsScheduled'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsInLibrary'] && SP.Ribbon.PageState.ImportedNativeData.PageState['DocLibMinorVersionsEnabled'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['DocLibWorkflowEnabled'] && SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasContributorRights'] && (SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasApproverRights'] || !SP.Ribbon.PageState.ImportedNativeData.PageState['DocLibApprovalEnabled']) && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsInSharedView']) {
        return true;
    }
    return false;
};
SP.Ribbon.PageState.Handlers.isPublishEnabled = function SP_Ribbon_PageState_Handlers$isPublishEnabled() {
    if (SP.Ribbon.PageState.Handlers.$3F() && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsMajorVersion']) {
        return true;
    }
    return false;
};
SP.Ribbon.PageState.Handlers.isUnpublishEnabled = function SP_Ribbon_PageState_Handlers$isUnpublishEnabled() {
    if (!SP.Ribbon.PageState.Handlers.isInEditMode() && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsFormsPage'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsScheduled'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsInLibrary'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsMajorVersion'] && SP.Ribbon.PageState.ImportedNativeData.PageState['DocLibMinorVersionsEnabled'] && SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasApproverRights'] && SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasContributorRights'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsInSharedView'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToSystemUser']) {
        return true;
    }
    return false;
};
SP.Ribbon.PageState.Handlers.isSubmitForApprovalEnabled = function SP_Ribbon_PageState_Handlers$isSubmitForApprovalEnabled() {
    if (!SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsMajorVersion'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsFormsPage'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsInSharedView'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsPendingApproval'] && SP.Ribbon.PageState.ImportedNativeData.PageState['DocLibApprovalEnabled'] && SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasContributorRights']) {
        return true;
    }
    return false;
};
SP.Ribbon.PageState.Handlers.isCancelApprovalEnabled = function SP_Ribbon_PageState_Handlers$isCancelApprovalEnabled() {
    if (!SP.Ribbon.PageState.ImportedNativeData.PageState['ViewModeIsEdit'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsFormsPage'] && SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasContributorRights'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsPendingApproval'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser'] && SP.Ribbon.PageState.ImportedNativeData.PageState['DocLibMinorVersionsEnabled'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsInSharedView']) {
        return true;
    }
    return false;
};
SP.Ribbon.PageState.Handlers.isApproveEnabled = function SP_Ribbon_PageState_Handlers$isApproveEnabled() {
    if (!SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsMajorVersion'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsFormsPage'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsInSharedView'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsPendingApproval'] && SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasApproverRights'] && SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasContributorRights']) {
        return true;
    }
    return false;
};
SP.Ribbon.PageState.Handlers.isRejectEnabled = function SP_Ribbon_PageState_Handlers$isRejectEnabled() {
    if (!SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsMajorVersion'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsFormsPage'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsInSharedView'] && SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsPendingApproval'] && SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasApproverRights'] && SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasContributorRights']) {
        return true;
    }
    return false;
};
SP.Ribbon.PageState.Handlers.isDeleteEnabled = function SP_Ribbon_PageState_Handlers$isDeleteEnabled() {
    if (SP.Ribbon.PageState.ImportedNativeData.PageState['UserHasDeleteRights'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToOtherUser'] && !SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsDefaultPage']) {
        return true;
    }
    return false;
};
SP.Ribbon.PageState.Handlers.GenericCompleteHandler = function SP_Ribbon_PageState_Handlers$GenericCompleteHandler(cbr) {
    SP.Ribbon.PageState.PageStateHandler.dismissWaitScreen();
    eval(cbr);
    ((SP.Ribbon.PageManager.get_instance()).get_commandDispatcher()).executeCommand('appstatechanged', null);
    var $v_0 = SP.Ribbon.PageState.ImportedNativeData.CallbackResult['Notification'];

    if (!SP.Ribbon.SU.$2($v_0)) {
        SP.UI.Notify.addNotification($v_0, false);
        SP.Ribbon.PageState.ImportedNativeData.CallbackResult['Notification'] = '';
    }
    SP.Ribbon.PageState.PageStateHandler.showPageStatus();
    if (SP.Ribbon.PageState.NativeErrorState.ButtonCount > 0) {
        SP.Ribbon.PageState.PageStateHandler.showErrorDialog();
    }
};
SP.Ribbon.PageState.Handlers.GenericError = function SP_Ribbon_PageState_Handlers$GenericError(cbr) {
    alert('callback failed');
};
SP.Ribbon.PageState.Handlers.addStateChangeDialogHandler = function SP_Ribbon_PageState_Handlers$addStateChangeDialogHandler(handler) {
    SP.Ribbon.PageState.Handlers.$1t.push(handler);
};
SP.Ribbon.PageState.Handlers.setStateChangeDialogFocusOnNode = function SP_Ribbon_PageState_Handlers$setStateChangeDialogFocusOnNode(node) {
    if (node) {
        SP.Ribbon.PageState.Handlers.$2T = node;
    }
};
SP.Ribbon.PageState.Handlers.onOkButton = function SP_Ribbon_PageState_Handlers$onOkButton(e) {
    SP.Ribbon.PageState.Handlers.$67();
};
SP.Ribbon.PageState.Handlers.onCancelButton = function SP_Ribbon_PageState_Handlers$onCancelButton(e) {
    SP.Ribbon.PageState.Handlers.$66();
};
SP.Ribbon.PageState.Handlers.showStateChangeDialog = function SP_Ribbon_PageState_Handlers$showStateChangeDialog(commandId, func) {
    SP.Ribbon.PageState.Handlers.$M = new Array(0);
    for (var $v_3 = 0; $v_3 < SP.Ribbon.PageState.Handlers.$1t.length; $v_3++) {
        var $v_4 = true;
        var $v_5 = SP.Ribbon.PageState.Handlers.$1t[$v_3];

        if ($v_5.enabled) {
            $v_4 = $v_5.enabled(commandId);
        }
        if ($v_4) {
            SP.Ribbon.PageState.Handlers.$M.push($v_5);
        }
    }
    if (!SP.Ribbon.PageState.Handlers.$M.length) {
        return eval(func);
    }
    SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload = true;
    SP.Ribbon.PageState.Handlers.$2U = func;
    var $v_0 = document.createElement('DIV');

    for (var $v_6 = 0; $v_6 < SP.Ribbon.PageState.Handlers.$M.length; $v_6++) {
        var $v_7 = SP.Ribbon.PageState.Handlers.$M[$v_6];

        $v_7.initialize(commandId, $v_0);
    }
    var $v_1 = document.createElement('DIV');

    $v_1.className = 'ms-core-form-bottomButtonBox';
    var $v_8 = document.createElement('INPUT');

    $v_8.value = SP.Res.continueButtonText;
    $v_8.type = 'button';
    $addHandler($v_8, 'click', SP.Ribbon.PageState.Handlers.onOkButton);
    $v_8.id = 'statechangedialog_okbutton';
    var $v_9 = document.createElement('INPUT');

    $v_9.value = SP.Res.cancelButtonText;
    $v_9.type = 'button';
    $addHandler($v_9, 'click', SP.Ribbon.PageState.Handlers.onCancelButton);
    $v_9.id = 'statechangedialog_cancelbutton';
    $v_1.appendChild($v_8);
    $v_1.appendChild($v_9);
    $v_0.appendChild($v_1);
    var $v_2 = new SP.UI.DialogOptions();

    $v_2.html = $v_0;
    $v_2.autoSizeStartWidth = 400;
    $v_2.autoSize = true;
    $v_2.includeScrollBarPadding = false;
    $v_2.title = SP.Ribbon.PageState.Handlers.$54(commandId);
    $v_2.dialogReturnValueCallback = SP.Ribbon.PageState.Handlers.$65;
    SP.Ribbon.PageState.Handlers.$1s = SP.UI.ModalDialog.showModalDialog($v_2);
    SP.Ribbon.PageState.Handlers.$2T.focus();
    $v_0.parentNode.parentNode.id = 'statechangedialog';
    return true;
};
SP.Ribbon.PageState.Handlers.$54 = function SP_Ribbon_PageState_Handlers$$54($p0) {
    if (!SP.Ribbon.PageState.Handlers.$1u) {
        SP.Ribbon.PageState.Handlers.$1u = {
            PageStateGroupApprove: SP.Res.pageStateApproveLabel,
            PageStateGroupCancelApproval: SP.Res.pageStateCancelApprovalLabel,
            PageStateGroupCheckin: SP.Res.pageStateCheckinLabel,
            PageStateGroupCheckout: SP.Res.pageStateCheckoutLabel,
            PageStateGroupDiscardCheckout: SP.Res.pageStateDiscardCheckoutLabel,
            PageStateGroupDontSaveAndStop: SP.Res.pageStateDontSaveLabel,
            PageStateGroupEdit: SP.Res.pageStateEditLabel,
            PageStateGroupOverrideCheckout: SP.Res.pageStateOverrideCheckoutLabel,
            PageStateGroupPublish: SP.Res.pageStatePublishLabel,
            PageStateGroupReject: SP.Res.pageStateRejectLabel,
            PageStateGroupSave: SP.Res.pageStateSaveLabel,
            PageStateGroupSaveAndStop: SP.Res.pageStateSaveAndStopEditingLabel,
            PageStateGroupSubmitForApproval: SP.Res.pageStateSubmitForApprovalLabel,
            PageStateGroupUnpublish: SP.Res.pageStateUnpublishLabel
        };
    }
    return SP.Ribbon.PageState.Handlers.$1u[$p0];
};
SP.Ribbon.PageState.Handlers.$65 = function SP_Ribbon_PageState_Handlers$$65($p0, $p1) {
    if ($p0 === 1) {
        for (var $v_0 = 0; $v_0 < SP.Ribbon.PageState.Handlers.$M.length; $v_0++) {
            var $v_1 = SP.Ribbon.PageState.Handlers.$M[$v_0];

            if ($v_1.validate) {
                if (!$v_1.validate()) {
                    return;
                }
            }
        }
        for (var $v_2 = 0; $v_2 < SP.Ribbon.PageState.Handlers.$M.length; $v_2++) {
            var $v_3 = SP.Ribbon.PageState.Handlers.$M[$v_2];

            if ($v_3.abort) {
                $v_3.abort();
            }
        }
        eval(SP.Ribbon.PageState.Handlers.$2U);
    }
    else if (!$p0) {
        for (var $v_4 = 0; $v_4 < SP.Ribbon.PageState.Handlers.$M.length; $v_4++) {
            var $v_5 = SP.Ribbon.PageState.Handlers.$M[$v_4];

            if ($v_5.abort) {
                $v_5.abort();
            }
        }
    }
};
SP.Ribbon.PageState.Handlers.$67 = function SP_Ribbon_PageState_Handlers$$67() {
    SP.Ribbon.PageState.Handlers.$1s.close(1);
};
SP.Ribbon.PageState.Handlers.$66 = function SP_Ribbon_PageState_Handlers$$66() {
    SP.Ribbon.PageState.Handlers.$1s.close(0);
};
SP.Ribbon.PageState.Handlers.$4e = function SP_Ribbon_PageState_Handlers$$4e($p0, $p1) {
    if (!$p1) {
        return 0;
    }
    var $v_0 = document.createElement('DIV');

    $v_0.style.width = '100%';
    $v_0.style.marginBottom = '10px';
    $p1.appendChild($v_0);
    var $v_1 = document.createElement('DIV');

    $v_0.appendChild($v_1);
    var $v_2 = document.createElement('LABEL');

    $v_2.appendChild(document.createTextNode(SP.Res.checkInComments));
    $v_1.appendChild($v_2);
    SP.Ribbon.PageState.Handlers.$V = document.createElement('TEXTAREA');
    SP.Ribbon.PageState.Handlers.$V.className = 'ms-fullWidth';
    SP.Ribbon.PageState.Handlers.$V.rows = 6;
    SP.Ribbon.PageState.Handlers.$V.id = 'checkincomments';
    $v_0.appendChild(SP.Ribbon.PageState.Handlers.$V);
    SP.Ribbon.PageState.Handlers.setStateChangeDialogFocusOnNode(SP.Ribbon.PageState.Handlers.$V);
    $v_2.htmlFor = SP.Ribbon.PageState.Handlers.$V.id;
    return 148;
};
SP.Ribbon.PageState.Handlers.$4f = function SP_Ribbon_PageState_Handlers$$4f() {
    var $v_0 = $get('InputComments');

    $v_0.value = SP.Ribbon.PageState.Handlers.$V.value;
    return true;
};
SP.Ribbon.PageState.Handlers.$4d = function SP_Ribbon_PageState_Handlers$$4d($p0) {
    return ($p0 === 'PageStateGroupCheckin' || $p0 === 'PageStateGroupSubmitForApproval' || $p0 === 'PageStateGroupPublish') && !!SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsCheckedOutToCurrentUser'] || ($p0 === 'PageStateGroupApprove' || $p0 === 'PageStateGroupReject') && !!SP.Ribbon.PageState.ImportedNativeData.PageState['ItemIsPendingApproval'];
};
SP.Ribbon.PageState.Handlers.registerCommentsHandler = function SP_Ribbon_PageState_Handlers$registerCommentsHandler() {
    var $v_0 = new SP.Ribbon.PageState.StateChangeDialogHandler();

    $v_0.initialize = SP.Ribbon.PageState.Handlers.$4e;
    $v_0.enabled = SP.Ribbon.PageState.Handlers.$4d;
    $v_0.validate = SP.Ribbon.PageState.Handlers.$4f;
    SP.Ribbon.PageState.Handlers.addStateChangeDialogHandler($v_0);
};
Type.registerNamespace('SP.Ribbon.TenantAdmin');
SP.Ribbon.TenantAdmin.TenantAdminPageComponent = function SP_Ribbon_TenantAdmin_TenantAdminPageComponent() {
    SP.Ribbon.TenantAdmin.TenantAdminPageComponent.initializeBase(this);
};
SP.Ribbon.TenantAdmin.TenantAdminPageComponent.initialize = function SP_Ribbon_TenantAdmin_TenantAdminPageComponent$initialize() {
    var $v_0 = SP.Ribbon.PageManager.get_instance();

    if (null !== $v_0) {
        $v_0.addPageComponent(SP.Ribbon.TenantAdmin.TenantAdminPageComponent.$1q);
    }
};
SP.Ribbon.TenantAdmin.TenantAdminPageComponent.$4p = function SP_Ribbon_TenantAdmin_TenantAdminPageComponent$$4p($p0) {
    __doPostBack('__Page', $p0);
    return true;
};
SP.Ribbon.TenantAdmin.TenantAdminPageComponent.$5h = function SP_Ribbon_TenantAdmin_TenantAdminPageComponent$$5h($p0, $p1) {
    location.reload(null);
};
SP.Ribbon.TenantAdmin.TenantAdminPageComponent.prototype = {
    canHandleCommand: function SP_Ribbon_TenantAdmin_TenantAdminPageComponent$canHandleCommand(commandId) {
        if (commandId === 'SiteCollectionsTab' || commandId === 'SiteCollectionsContributeGroup' || commandId === 'CreateSiteCollectionClick' || commandId === 'SiteCollectionsReviewGroup' || commandId === 'SiteCollectionsManageGroup') {
            return true;
        }
        return commandEnabled(commandId);
    },
    getGlobalCommands: function SP_Ribbon_TenantAdmin_TenantAdminPageComponent$getGlobalCommands() {
        return ['SiteCollectionsTab', 'SiteCollectionsContributeGroup', 'CreateSiteCollectionClick', 'DeleteSiteCollectionsClick', 'SiteCollectionsReviewGroup', 'ViewPropertiesClick', 'SiteCollectionsManageGroup', 'OwnersClick', 'DiskQuotaClick'];
    },
    handleCommand: function SP_Ribbon_TenantAdmin_TenantAdminPageComponent$handleCommand(commandId, properties, sequence) {
        if (commandId === 'CreateSiteCollectionClick') {
            var $v_0 = new SP.UI.DialogOptions();

            $v_0.url = 'TA_CreateSiteCollection.aspx';
            $v_0.width = 850;
            $v_0.height = 480;
            $v_0.title = SP.Res.tenantAdmin_SiteCollectionNewDialogTitle;
            $v_0.dialogReturnValueCallback = SP.Ribbon.TenantAdmin.TenantAdminPageComponent.$5h;
            SP.UI.ModalDialog.showModalDialog($v_0);
            return true;
        }
        if (commandId === 'DeleteSiteCollectionsClick') {
            var $v_1 = new SP.UI.DialogOptions();

            $v_1.url = 'TA_DeleteSiteCollectionDialog.aspx';
            $v_1.width = 600;
            $v_1.height = 200;
            $v_1.title = SP.Res.tenantAdmin_SiteCollectionDeleteDialogTitle;
            $v_1.dialogReturnValueCallback = null;
            SP.UI.ModalDialog.showModalDialog($v_1);
            return true;
        }
        if (commandId === 'ViewPropertiesClick') {
            var $v_2 = new SP.UI.DialogOptions();
            var $v_3 = document.getElementById('ctl00_PlaceHolderMain_singleSelectedSite');

            $v_2.url = 'TA_ViewSiteCollectionPropertiesDialog.aspx?site=' + $v_3.getAttribute('value');
            $v_2.title = SP.Res.tenantAdmin_SiteCollectionPropertiesDialogTitle;
            $v_2.dialogReturnValueCallback = null;
            SP.UI.ModalDialog.showModalDialog($v_2);
            return true;
        }
        if (commandId === 'OwnersClick') {
            var $v_4 = new SP.UI.DialogOptions();
            var $v_5 = document.getElementById('ctl00_PlaceHolderMain_singleSelectedSite');

            $v_4.url = 'TA_SiteCollectionOwnersDialog.aspx?site=' + $v_5.getAttribute('value');
            $v_4.width = 640;
            $v_4.height = 340;
            $v_4.title = SP.Res.tenantAdmin_SiteCollectionOwnersDialogTitle;
            $v_4.dialogReturnValueCallback = null;
            SP.UI.ModalDialog.showModalDialog($v_4);
            return true;
        }
        if (commandId === 'DiskQuotaClick') {
            var $v_6 = new SP.UI.DialogOptions();
            var $v_7 = document.getElementById('ctl00_PlaceHolderMain_singleSelectedSite');

            $v_6.url = 'TA_SiteCollectionDiskQuotaDialog.aspx?site=' + $v_7.getAttribute('value');
            $v_6.width = 640;
            $v_6.height = 280;
            $v_6.title = SP.Res.tenantAdmin_SiteCollectionDiskQuotaDialogTitle;
            $v_6.dialogReturnValueCallback = null;
            SP.UI.ModalDialog.showModalDialog($v_6);
            return true;
        }
        return SP.Ribbon.TenantAdmin.TenantAdminPageComponent.$4p(commandId);
    }
};
SP.Ribbon.ControlDataRecord.registerClass('SP.Ribbon.ControlDataRecord');
SP.Ribbon.Utility.registerClass('SP.Ribbon.Utility');
SP.Ribbon.UtilityInternal.registerClass('SP.Ribbon.UtilityInternal');
SP.Ribbon.SU.registerClass('SP.Ribbon.SU');
SP.Ribbon.CommandUIExtensionPageComponent.registerClass('SP.Ribbon.CommandUIExtensionPageComponent', CUI.Page.PageComponent);
SP.Ribbon.ToolbarRibbonAdapterData.registerClass('SP.Ribbon.ToolbarRibbonAdapterData');
SP.Ribbon.ToolbarRibbonAdapter.registerClass('SP.Ribbon.ToolbarRibbonAdapter', CUI.Page.PageComponent);
SP.Ribbon.WebPartPageComponentData.registerClass('SP.Ribbon.WebPartPageComponentData', SP.Ribbon.ToolbarRibbonAdapterData);
SP.Ribbon.WebPartPageComponent.registerClass('SP.Ribbon.WebPartPageComponent', SP.Ribbon.ToolbarRibbonAdapter);
SP.Ribbon.ListViewWebPartPageComponentData.registerClass('SP.Ribbon.ListViewWebPartPageComponentData', SP.Ribbon.WebPartPageComponentData);
SP.Ribbon.PagingInformation.registerClass('SP.Ribbon.PagingInformation');
SP.Ribbon.ECBMenuItem.registerClass('SP.Ribbon.ECBMenuItem', Object);
SP.Ribbon.CLVP.registerClass('SP.Ribbon.CLVP');
SP.Ribbon.ListViewWebPartData.registerClass('SP.Ribbon.ListViewWebPartData', SP.Ribbon.ToolbarRibbonAdapterData);
SP.Ribbon.ListViewWebPartPageComponent.registerClass('SP.Ribbon.ListViewWebPartPageComponent', SP.Ribbon.WebPartPageComponent, SP.Application.UI.ViewInformationRequestor, SP.Application.UI.DefaultFormsInformationRequestor);
SP.Ribbon.HierarchyTaskList.registerClass('SP.Ribbon.HierarchyTaskList');
SP.Ribbon.HierarchyTaskList.Continuation.registerClass('SP.Ribbon.HierarchyTaskList.Continuation');
SP.Ribbon.HierarchyTaskList.TaskLauncher.registerClass('SP.Ribbon.HierarchyTaskList.TaskLauncher');
SP.Ribbon.ListFormWebPartPageComponentData.registerClass('SP.Ribbon.ListFormWebPartPageComponentData', SP.Ribbon.WebPartPageComponentData);
SP.Ribbon.ListFormWebPartPageComponent.registerClass('SP.Ribbon.ListFormWebPartPageComponent', SP.Ribbon.WebPartPageComponent);
SP.Ribbon.DocLibWebPartPageComponent.registerClass('SP.Ribbon.DocLibWebPartPageComponent', SP.Ribbon.ListViewWebPartPageComponent);
SP.Ribbon.GenericListWebPartPageComponentData.registerClass('SP.Ribbon.GenericListWebPartPageComponentData', SP.Ribbon.ListViewWebPartPageComponentData);
SP.Ribbon.GenericListWebPartPageComponent.registerClass('SP.Ribbon.GenericListWebPartPageComponent', SP.Ribbon.ListViewWebPartPageComponent);
SP.Ribbon.SolutionsPageComponent.registerClass('SP.Ribbon.SolutionsPageComponent', SP.Ribbon.ListViewWebPartPageComponent);
SP.Ribbon.WikiPageComponent.registerClass('SP.Ribbon.WikiPageComponent', CUI.Page.PageComponent);
SP.Ribbon.FetchedDocLibItemInfo.registerClass('SP.Ribbon.FetchedDocLibItemInfo');
SP.Ribbon.DocLibAspxPageComponent.registerClass('SP.Ribbon.DocLibAspxPageComponent', CUI.Page.PageComponent);
SP.Ribbon.WebPartComponent.registerClass('SP.Ribbon.WebPartComponent', CUI.Page.PageComponent);
SP.Ribbon.FetchListViewWebPartPageComponentWorker.registerClass('SP.Ribbon.FetchListViewWebPartPageComponentWorker');
SP.Ribbon.StateDetails.registerClass('SP.Ribbon.StateDetails');
SP.Ribbon.AccessRequestsWebPartPageComponent.registerClass('SP.Ribbon.AccessRequestsWebPartPageComponent', SP.Ribbon.ListViewWebPartPageComponent);
SP.Ribbon.BlogPostWebPartPageComponent.registerClass('SP.Ribbon.BlogPostWebPartPageComponent', SP.Ribbon.DocLibWebPartPageComponent);
SP.Ribbon.PageManager.registerClass('SP.Ribbon.PageManager', CUI.Page.PageManager);
SP.Ribbon.PageStateActionButton.registerClass('SP.Ribbon.PageStateActionButton');
SP.Ribbon.RelatedFieldsFetcher.registerClass('SP.Ribbon.RelatedFieldsFetcher');
SP.Ribbon.RelatedFieldsHelper.registerClass('SP.Ribbon.RelatedFieldsHelper', null, SP.Ribbon.IRelatedFieldsInfoRequestor);
SP.Ribbon.UsageReportPageComponent.registerClass('SP.Ribbon.UsageReportPageComponent', CUI.Page.PageComponent);
SP.Ribbon.GroupBoardWebPartPageComponent.registerClass('SP.Ribbon.GroupBoardWebPartPageComponent', SP.Ribbon.GenericListWebPartPageComponent);
SP.Ribbon.CalendarPageComponentData.registerClass('SP.Ribbon.CalendarPageComponentData', SP.Ribbon.GenericListWebPartPageComponentData);
SP.Ribbon.CalendarListPageComponent.registerClass('SP.Ribbon.CalendarListPageComponent', SP.Ribbon.GenericListWebPartPageComponent);
SP.Ribbon.HelpCommandNames.registerClass('SP.Ribbon.HelpCommandNames');
SP.Ribbon.HelpPageComponent.registerClass('SP.Ribbon.HelpPageComponent', CUI.Page.PageComponent);
SP.Ribbon.SaveConflictHandler.registerClass('SP.Ribbon.SaveConflictHandler');
SP.Ribbon.TrackTabPageComponent.registerClass('SP.Ribbon.TrackTabPageComponent', CUI.Page.PageComponent);
SP.Ribbon.UserInterfacePageComponent.registerClass('SP.Ribbon.UserInterfacePageComponent', CUI.Page.PageComponent);
SP.Ribbon.EMailLink.registerClass('SP.Ribbon.EMailLink');
SP.Ribbon.TasksWebPartPageComponent.registerClass('SP.Ribbon.TasksWebPartPageComponent', SP.Ribbon.GenericListWebPartPageComponent);
SP.Ribbon.DesignBuilderPageComponent.registerClass('SP.Ribbon.DesignBuilderPageComponent', CUI.Page.PageComponent);
SP.Ribbon.PageState.PageStateStrings.registerClass('SP.Ribbon.PageState.PageStateStrings');
SP.Ribbon.PageState.PageStateCommands.registerClass('SP.Ribbon.PageState.PageStateCommands');
SP.Ribbon.PageState.PageStateHandler.registerClass('SP.Ribbon.PageState.PageStateHandler', CUI.Page.PageComponent, CUI.Page.ICommandHandler);
SP.Ribbon.PageState.StateChangeDialogHandler.registerClass('SP.Ribbon.PageState.StateChangeDialogHandler');
SP.Ribbon.PageState.Handlers.registerClass('SP.Ribbon.PageState.Handlers');
SP.Ribbon.TenantAdmin.TenantAdminPageComponent.registerClass('SP.Ribbon.TenantAdmin.TenantAdminPageComponent', CUI.Page.PageComponent);
function sp_ribbon_initialize() {
    SP.Ribbon.UtilityInternal.$1o = 0;
    SP.Ribbon.UtilityInternal.$3g = SP.Ribbon.UtilityInternal.$5y;
    SP.Ribbon.CommandUIExtensionPageComponent.$1L = null;
    SP.Ribbon.CommandUIExtensionPageComponent.$1y = false;
    SP.Ribbon.ListViewWebPartPageComponent._LibraryNavigationGroup = 'LibraryNavigationGroup';
    SP.Ribbon.ListViewWebPartPageComponent.$3b = new RegExp('[?&]IsDlg=1');
    SP.Ribbon.HierarchyTaskList.$2s = -2147024894;
    SP.Ribbon.ListFormWebPartPageComponent._DispFormActionsGroup = 'Ribbon.ListForm.Display.ActionsGroup';
    SP.Ribbon.WikiPageComponent.$O = false;
    SP.Ribbon.WikiPageComponent.$Z = null;
    SP.Ribbon.WikiPageComponent.$3 = null;
    SP.Ribbon.WikiPageComponent.$T = null;
    SP.Ribbon.WikiPageComponent.$10 = null;
    SP.Ribbon.WikiPageComponent.$1r = false;
    SP.Ribbon.DocLibAspxPageComponent.$3 = null;
    SP.Ribbon.DocLibAspxPageComponent.$T = null;
    SP.Ribbon.WebPartComponent.$3 = null;
    SP.Ribbon.WebPartComponent.$5t = [];
    SP.Ribbon.WebPartComponent.$T = ['approveWebpartPage', 'EditInDesigner', 'EditMobileSharedPage', 'EditMobilePersonalPage', 'EditMobilePageMenuOpen', 'insertExistingList', 'insertImageWebPart', 'insertTextWebPart', 'insertWebPart', 'makeHomePage', 'MSOMenu_Close', 'MSOMenu_Delete', 'MSOMenu_Edit', 'MSOMenu_Minimize', 'MSOMenu_Restore', 'rejectWebpartPage', 'Ribbon.WebPartInsert.Tab', 'Ribbon.WebPartOption', 'Ribbon.WebPartPage', 'webPartCommands', 'WebPartContextualGroup', 'WebPartInsertContextualGroup', 'webPartInsertMedia', 'webPartInserts', 'webPartInsertText', 'webPartPageActions', 'webPartPageApproval', 'webPartPageDelete', 'webPartPageEdit', 'webPartPageEditConsole', 'webPartPageEditMenuOpen', 'webPartPageEditQuery', 'webPartPageManage', 'webPartPageStartEdit', 'webPartPageStopEdit', 'webPartProperties', 'RelatedDataToListViewGroup', 'InsertRelatedWebPartToListViewMenuAnchor', 'InsertRelatedWebPartToListView', 'GetRelatedFieldsToListViewMenuXml', 'RelatedDataToListFormGroup', 'InsertRelatedWebPartToListFormMenuAnchor', 'InsertRelatedWebPartToListForm', 'GetRelatedFieldsToListFormMenuXml', 'CommandContextChanged'];
    SP.Ribbon.PageManager.$q = null;
    SP.Ribbon.UsageReportPageComponent.$1q = new SP.Ribbon.UsageReportPageComponent();
    SP.Ribbon.HelpCommandNames.requestContextualHelp = 'RequestContextualHelp';
    SP.Ribbon.HelpPageComponent.$N = false;
    SP.Ribbon.HelpPageComponent.$3 = null;
    SP.Ribbon.SaveConflictHandler.$13 = null;
    SP.Ribbon.SaveConflictHandler.$11 = null;
    SP.Ribbon.SaveConflictHandler.$12 = null;
    SP.Ribbon.TrackTabPageComponent.$3 = null;
    SP.Ribbon.TrackTabPageComponent.$1p = null;
    SP.Ribbon.UserInterfacePageComponent.$N = false;
    SP.Ribbon.UserInterfacePageComponent.$3 = null;
    SP.Ribbon.EMailLink.$1l = null;
    SP.Ribbon.EMailLink.$1f = null;
    SP.Ribbon.EMailLink.$1h = null;
    SP.Ribbon.DesignBuilderPageComponent.$3 = null;
    SP.Ribbon.DesignBuilderPageComponent.$N = false;
    SP.Ribbon.PageState.PageStateStrings.itemIsWebPartPageStateName = 'ItemIsWebPartPage';
    SP.Ribbon.PageState.PageStateStrings.itemIsWikiPageStateName = 'ItemIsWikiPage';
    SP.Ribbon.PageState.PageStateStrings.itemIsFormsPageStateName = 'ItemIsFormsPage';
    SP.Ribbon.PageState.PageStateStrings.itemIsInLibraryStateName = 'ItemIsInLibrary';
    SP.Ribbon.PageState.PageStateStrings.itemIsMajorVersionStateName = 'ItemIsMajorVersion';
    SP.Ribbon.PageState.PageStateStrings.itemIsMinorVersionStateName = 'ItemIsMinorVersion';
    SP.Ribbon.PageState.PageStateStrings.itemHasCheckedInVersionStateName = 'ItemHasCheckedInVersion';
    SP.Ribbon.PageState.PageStateStrings.itemIsCheckedOutToCurrentUserStateName = 'ItemIsCheckedOutToCurrentUser';
    SP.Ribbon.PageState.PageStateStrings.itemIsCheckedOutToOtherUserStateName = 'ItemIsCheckedOutToOtherUser';
    SP.Ribbon.PageState.PageStateStrings.itemIsCheckedOutToSystemUserStateName = 'ItemIsCheckedOutToSystemUser';
    SP.Ribbon.PageState.PageStateStrings.itemIsRejectedStateName = 'ItemIsRejected';
    SP.Ribbon.PageState.PageStateStrings.itemHasWorkflowRunningStateName = 'ItemHasWorkflowRunning';
    SP.Ribbon.PageState.PageStateStrings.itemIsPendingApprovalStateName = 'ItemIsPendingApproval';
    SP.Ribbon.PageState.PageStateStrings.itemIsScheduledStateName = 'ItemIsScheduled';
    SP.Ribbon.PageState.PageStateStrings.itemIsInPersonalViewStateName = 'ItemIsInPersonalView';
    SP.Ribbon.PageState.PageStateStrings.itemIsInSharedViewStateName = 'ItemIsInSharedView';
    SP.Ribbon.PageState.PageStateStrings.itemIsDefaultPageStateName = 'ItemIsDefaultPage';
    SP.Ribbon.PageState.PageStateStrings.itemIsMasterPageGalleryFileStateName = 'ItemIsMasterPageGalleryFile';
    SP.Ribbon.PageState.PageStateStrings.itemCancelWorkflowEnabledStateName = 'ItemCancelWorkflowEnabled';
    SP.Ribbon.PageState.PageStateStrings.itemHasFieldControlsStateName = 'ItemHasFieldControls';
    SP.Ribbon.PageState.PageStateStrings.itemHasPersonalizableZonesStateName = 'ItemHasPersonalizableZones';
    SP.Ribbon.PageState.PageStateStrings.itemHasCustomizableZonesStateName = 'ItemHasCustomizableZones';
    SP.Ribbon.PageState.PageStateStrings.userHasContributorRightsStateName = 'UserHasContributorRights';
    SP.Ribbon.PageState.PageStateStrings.userHasOverrideCheckoutRightsStateName = 'UserHasOverrideCheckoutRights';
    SP.Ribbon.PageState.PageStateStrings.userHasApproverRightsStateName = 'UserHasApproverRights';
    SP.Ribbon.PageState.PageStateStrings.userHasDeleteRightsStateName = 'UserHasDeleteRights';
    SP.Ribbon.PageState.PageStateStrings.docLibVersioningEnabledStateName = 'DocLibVersioningEnabled';
    SP.Ribbon.PageState.PageStateStrings.docLibCheckoutRequiredStateName = 'DocLibCheckoutRequired';
    SP.Ribbon.PageState.PageStateStrings.docLibMinorVersionsEnabledStateName = 'DocLibMinorVersionsEnabled';
    SP.Ribbon.PageState.PageStateStrings.docLibApprovalEnabledStateName = 'DocLibApprovalEnabled';
    SP.Ribbon.PageState.PageStateStrings.docLibWorkflowEnabledStateName = 'DocLibWorkflowEnabled';
    SP.Ribbon.PageState.PageStateStrings.viewModeIsEditStateName = 'ViewModeIsEdit';
    SP.Ribbon.PageState.PageStateStrings.viewModeHasSaveConflictStateName = 'ViewModeHasSaveConflict';
    SP.Ribbon.PageState.PageStateStrings.viewModeIsWebPartDesignStateName = 'ViewModeIsWebPartDesign';
    SP.Ribbon.PageState.PageStateStrings.forceShowStatus = 'ForceShowStatus';
    SP.Ribbon.PageState.PageStateStrings.forceHideStatus = 'ForceHideStatus';
    SP.Ribbon.PageState.PageStateStrings.save = 'Save';
    SP.Ribbon.PageState.PageStateStrings.edit = 'Edit';
    SP.Ribbon.PageState.PageStateStrings.saveAndStop = 'SaveAndStop';
    SP.Ribbon.PageState.PageStateStrings.overrideCheckout = 'OverrideCheckout';
    SP.Ribbon.PageState.PageStateStrings.checkout = 'Checkout';
    SP.Ribbon.PageState.PageStateStrings.checkin = 'Checkin';
    SP.Ribbon.PageState.PageStateStrings.publish = 'Publish';
    SP.Ribbon.PageState.PageStateStrings.unpublish = 'Unpublish';
    SP.Ribbon.PageState.PageStateStrings.submit = 'SubmitForApproval';
    SP.Ribbon.PageState.PageStateStrings.cancelApproval = 'CancelApproval';
    SP.Ribbon.PageState.PageStateCommands.pageStateGroupReject = 'PageStateGroupReject';
    SP.Ribbon.PageState.PageStateCommands.pageStateGroupApprove = 'PageStateGroupApprove';
    SP.Ribbon.PageState.PageStateCommands.pageStateGroupCancelApproval = 'PageStateGroupCancelApproval';
    SP.Ribbon.PageState.PageStateCommands.pageStateGroupSubmitForApproval = 'PageStateGroupSubmitForApproval';
    SP.Ribbon.PageState.PageStateCommands.pageStateGroupUnpublish = 'PageStateGroupUnpublish';
    SP.Ribbon.PageState.PageStateCommands.pageStateGroupPublish = 'PageStateGroupPublish';
    SP.Ribbon.PageState.PageStateCommands.pageStateGroupOverrideCheckout = 'PageStateGroupOverrideCheckout';
    SP.Ribbon.PageState.PageStateCommands.pageStateGroupDiscardCheckout = 'PageStateGroupDiscardCheckout';
    SP.Ribbon.PageState.PageStateCommands.pageStateGroupCheckout = 'PageStateGroupCheckout';
    SP.Ribbon.PageState.PageStateCommands.pageStateGroupCheckin = 'PageStateGroupCheckin';
    SP.Ribbon.PageState.PageStateCommands.pageStateGroupDontSaveAndStop = 'PageStateGroupDontSaveAndStop';
    SP.Ribbon.PageState.PageStateCommands.pageStateGroupEdit = 'PageStateGroupEdit';
    SP.Ribbon.PageState.PageStateCommands.pageStateGroupSaveAndStop = 'PageStateGroupSaveAndStop';
    SP.Ribbon.PageState.PageStateCommands.pageStateGroupSaveAndPublish = 'PageStateGroupSaveAndPublish';
    SP.Ribbon.PageState.PageStateCommands.pageStateGroupSave = 'PageStateGroupSave';
    SP.Ribbon.PageState.PageStateCommands.pageStateGroupStopEditing = 'PageStateGroupStopEditing';
    SP.Ribbon.PageState.PageStateHandler.$16 = {
        PageStateGroupSaveSplit: ['PageStateGroupSave', 'PageStateGroupSaveAndStop', 'PageStateGroupEdit', 'PageStateGroupDontSaveAndStop', 'PageStateGroupStopEditing'],
        PageStateGroupCheckinSplit: ['PageStateGroupCheckin', 'PageStateGroupCheckout', 'PageStateGroupDiscardCheckout', 'PageStateGroupOverrideCheckout'],
        PageStateGroupPublishSplit: ['PageStateGroupPublish', 'PageStateGroupUnpublish', 'PageStateGroupSubmitForApproval', 'PageStateGroupCancelApproval'],
        PageStateGroupPagePublishSplit: ['PageStateGroupPublish', 'PageStateGroupSubmitForApproval', 'PageStateGroupCancelApproval']
    };
    SP.Ribbon.PageState.PageStateHandler.$g = null;
    SP.Ribbon.PageState.PageStateHandler.$1b = true;
    SP.Ribbon.PageState.PageStateHandler.$B = [];
    SP.Ribbon.PageState.PageStateHandler.$2Q = SP.Ribbon.PageState.PageStateHandler.saveBeforeNavigate;
    SP.Ribbon.PageState.PageStateHandler.$2P = SP.Ribbon.PageState.PageStateHandler.$5l;
    SP.Ribbon.PageState.PageStateHandler.$1K = false;
    SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload = false;
    SP.Ribbon.PageState.PageStateHandler.saveCallbackError = null;
    SP.Ribbon.PageState.Handlers.$1t = new Array(0);
    SP.Ribbon.PageState.Handlers.$M = null;
    SP.Ribbon.PageState.Handlers.$2T = null;
    SP.Ribbon.PageState.Handlers.$1u = null;
    SP.Ribbon.PageState.Handlers.$1s = null;
    SP.Ribbon.PageState.Handlers.$2U = null;
    SP.Ribbon.PageState.Handlers.$V = null;
    SP.Ribbon.TenantAdmin.TenantAdminPageComponent.$1q = new SP.Ribbon.TenantAdmin.TenantAdminPageComponent();
}
;
sp_ribbon_initialize();
RegisterBeginEndFunctions("sp.ribbon.js", "sp.ribbon.js", sp_ribbon_initialize, function() {
    SP.Ribbon.TrackTabPageComponent.registerWithPageManager();
}, null);
SP.Ribbon.NativeUtility = function SP_Ribbon_nativeUtility() {
};
SP.Ribbon.NativeUtility.getCtxForView = function SP_Ribbon__nativeUtility$GetCtxForView(id) {
    var ctx = g_ViewIdToViewCounterMap[id];

    if (typeof ctx != "undefined" && ctx != null)
        return window["ctx" + ctx];
    return null;
};
SP.Ribbon.NativeUtility.executeClickScript = function SP_Ribbon__nativeUtility$executeClickScript(script, viewId) {
    script = script.replace(/javascript:return false/g, '');
    script = script.replace(/return false/g, '');
    var currentCtxId = g_ViewIdToViewCounterMap[viewId];
    var strCode = "var event = new Object(); event.fromRibbon=true; ";

    if (!SP.ScriptUtility.isNullOrUndefined(currentCtxId))
        strCode += "event.currentCtx = eval('ctx' + currentCtxId); ";
    eval(strCode + script + ";");
};
SP.Ribbon.NativeUtility.executeClickScriptSimple = function SP_Ribbon__nativeUtility$executeClickScriptSimple(script) {
    script = script.replace(/javascript:return false/g, '');
    script = script.replace(/return false/g, '');
    eval(script);
};
SP.Ribbon.NativeUtility.createXMLDocFromString = CUI.NativeUtility.createXMLDocFromString;
SP.Ribbon.NativeUtility.createXMLDocFromStringCore = CUI.NativeUtility.createXMLDocFromStringCore;
SP.Ribbon.NativeUtility.getWSA = function SP_Ribbon__nativeUtility$GetWSA() {
    return GetWSA();
};
SP.Ribbon.NativeUtility.addCommandStreamToWSA = function SP_Ribbon__nativeUtility$AddCommandStreamToWSA(commandInfo, startTime, duration) {
    if (typeof commandInfo == "undefined" || !commandInfo)
        return;
    if (!WSAEnabled() && !WSAQoSEnabled())
        return;
    var thewsa = GetWSA();

    if (!thewsa)
        return;
    var dwCommand = 0;

    if (commandInfo.CommandId)
        dwCommand = SP.BWsaClient.calcActionId(commandInfo.CommandId);
    else
        return;
    var dwTabId = 0;

    if (commandInfo.TabId)
        dwTabId = SP.BWsaClient.calcActionId(commandInfo.TabId);
    var uiLocation = SP.BWsaClient.getSQMLocationFromCUICommandInfo(commandInfo);

    if (uiLocation == 0)
        return;
    var dwComponentType = 0;
    var dwComponentId = 0;

    if (g_wsaListTemplateId) {
        dwComponentType = 1;
        dwComponentId = g_wsaListTemplateId;
    }
    var dwCommandInfo = (0 << 0) + (0 << 5) + (uiLocation << 9) + (dwComponentType << 16);

    thewsa.addToStreamDw(8327, dwCommandInfo, dwTabId, dwCommand, dwComponentId, startTime, duration, 0, 0);
};
SP.Ribbon.NativeUtility.ffClick = function SP_Ribbon__nativeUtility$FFClick(elm) {
    var evt = document.createEvent("MouseEvents");

    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    elm.dispatchEvent(evt);
};
SP.Ribbon.NativeUtility.executeECBCommand = function SP_Ribbon__nativeUtility$executeECBCommand(code, myctx) {
    eval("var event = new Object();event.fromRibbon = true; event.currentCtx = myctx;" + code + ";");
};
SP.Ribbon.NativeUtility.updateStatus = function SP_Ribbon__nativeUtility$UpdateStatus(listitemselected, newStatus, stateDetails) {
    EnsureScriptParams('accessrequestscontrol.js', '_UpdateStatus', listitemselected, newStatus, stateDetails);
};
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
function DeselectWpWz() {
    var instance = SP.Ribbon.WebPartComponent.get_instance();

    if (instance) {
        instance.deselectWebPartAndZone(null, null);
    }
}
function SelectWp(p) {
    var instance = SP.Ribbon.WebPartComponent.get_instance();

    if (instance) {
        instance.selectWebPart(p, true);
    }
}
function SelectWz(p, zid) {
    var instance = SP.Ribbon.WebPartComponent.get_instance();

    if (instance) {
        instance.selectWebPartZone(p, zid);
    }
}
function ChangeWikiPageMode(editMode) {
    var instance = SP.Ribbon.WikiPageComponent.get_instance();

    if (instance) {
        instance.changeWikiPageMode(editMode);
    }
}
function showSaveConflictDialogRibbon(lastModifiedUserId, continueStatusHtml, mergeChangesUrl, mergeChangesStatusHtml, discardScript, overwriteScript) {
    var ret = SP.Ribbon.SaveConflictHandler.showSaveConflictDialog(lastModifiedUserId, continueStatusHtml, mergeChangesUrl, mergeChangesStatusHtml, discardScript, overwriteScript);

    return ret;
}
var ribbon = {
    SelectWp: SelectWp,
    SelectWz: SelectWz,
    DeselectWpWz: DeselectWpWz,
    ChangeWikiPageMode: ChangeWikiPageMode,
    showSaveConflictDialog: showSaveConflictDialogRibbon
};

if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
    NotifyScriptLoadedAndExecuteWaitingJobs("sp.ribbon.js");
}
SP.Ribbon.TrackTabPageComponent.registerWithPageManager();
