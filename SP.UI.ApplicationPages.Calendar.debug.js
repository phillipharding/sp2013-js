Type.registerNamespace('SP.UI.ApplicationPages');
SP.UI.ApplicationPages.MouseEventContext = function SP_UI_ApplicationPages_MouseEventContext() {
};
SP.UI.ApplicationPages.CalendarErrorResponse = function SP_UI_ApplicationPages_CalendarErrorResponse() {
};
SP.UI.ApplicationPages.CalendarResolveResponse = function SP_UI_ApplicationPages_CalendarResolveResponse() {
};
SP.UI.ApplicationPages.Position = function SP_UI_ApplicationPages_Position() {
};
SP.UI.ApplicationPages.CalendarQueryResponse = function SP_UI_ApplicationPages_CalendarQueryResponse() {
};
SP.UI.ApplicationPages.CalendarItemsData = function SP_UI_ApplicationPages_CalendarItemsData() {
};
SP.UI.ApplicationPages.EntityResponse = function SP_UI_ApplicationPages_EntityResponse() {
};
SP.UI.ApplicationPages.CalendarContext = function SP_UI_ApplicationPages_CalendarContext() {
};
SP.UI.ApplicationPages.DataSourceInfo = function SP_UI_ApplicationPages_DataSourceInfo() {
};
SP.UI.ApplicationPages.TimeSlotInfo = function SP_UI_ApplicationPages_TimeSlotInfo() {
};
SP.UI.ApplicationPages.IDragTargetTable = function() {
};
SP.UI.ApplicationPages.IDragTargetTable.registerInterface('SP.UI.ApplicationPages.IDragTargetTable');
SP.UI.ApplicationPages.IDragTargetView = function() {
};
SP.UI.ApplicationPages.IDragTargetView.registerInterface('SP.UI.ApplicationPages.IDragTargetView');
SP.UI.ApplicationPages.LayoutInfo = function SP_UI_ApplicationPages_LayoutInfo($p0, $p1, $p2, $p3) {
    this.$t_0 = $p0;
    this.$e_0 = $p1;
    this.$U_0 = $p2;
    this.$n_0 = $p3;
};
SP.UI.ApplicationPages.CalendarContainerFactory = function SP_UI_ApplicationPages_CalendarContainerFactory() {
};
SP.UI.ApplicationPages.CalendarContainerFactory.create = function SP_UI_ApplicationPages_CalendarContainerFactory$create(elem, cctx, viewType, date, startupData) {
    if (!elem) {
        return;
    }
    var $v_0 = SP.UI.ApplicationPages.ElementUtility.$3f(cctx.ctxId);

    if (!$v_0) {
        return;
    }
    $v_0.style.position = 'relative';
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer && (navigator.userAgent.toLowerCase()).indexOf('trident/4.0') !== -1) {
        var $v_2 = $v_0.style.width === '100%' ? null : $v_0.style.width;
        var $v_3 = $v_0.style.height === '100%' ? null : $v_0.style.height;

        if (!SP.UI.ApplicationPages.SU.$5($v_2) || !SP.UI.ApplicationPages.SU.$5($v_3)) {
            $v_0.style.display = 'none';
            $v_0.style.overflow = 'auto';
            $v_0.style.display = 'block';
        }
    }
    else {
        $v_0.style.display = 'none';
        $v_0.style.overflow = 'auto';
        $v_0.style.display = 'block';
    }
    var $v_1 = new SP.UI.ApplicationPages.CalendarContainer(elem);

    $v_1.$4d_1(cctx);
    SP.UI.ApplicationPages.CalendarInstanceRepository.registerInstance(cctx.ctxId, $v_1);
    $v_1.$AY_1(viewType, date, SP.UI.ApplicationPages.SU.$2(startupData) ? null : startupData[0]);
};
SP.UI.ApplicationPages.CalendarContainer = function SP_UI_ApplicationPages_CalendarContainer($p0) {
    this.$$d_$5w_1 = Function.createDelegate(this, this.$5w_1);
    this.$$d_$AS_1 = Function.createDelegate(this, this.$AS_1);
    this.$$d_$5G_1 = Function.createDelegate(this, this.$5G_1);
    this.$$d_$Ad_1 = Function.createDelegate(this, this.$Ad_1);
    this.$$d_$AD_1 = Function.createDelegate(this, this.$AD_1);
    this.$f_1 = 0;
    SP.UI.ApplicationPages.CalendarContainer.initializeBase(this);
    this.$r_1 = $p0;
};
SP.UI.ApplicationPages.CalendarContainer.prototype = {
    $T_1: null,
    $7_1: null,
    $D_1: null,
    $S_1: null,
    $r_1: null,
    $b_1: null,
    $q_1: null,
    $a_1: null,
    $B_1: null,
    $13_1: null,
    $4v_1: false,
    $18_1: null,
    $s_1: null,
    $5D_1: 0,
    $4d_1: function SP_UI_ApplicationPages_CalendarContainer$$4d_1($p0) {
        this.$S_1 = $p0;
        var $v_0 = this.$S_1.ctxId;

        this.$18_1 = new SP.UI.ApplicationPages.RibbonConnector($v_0);
        this.$r_1.setAttribute('ctxid', $v_0);
        var $v_1 = window['ctx' + $v_0];

        this.$13_1 = new SP.UI.ApplicationPages.CalendarMouseHandler(SP.UI.ApplicationPages.ElementUtility.$3f($v_0));
        this.$q_1 = new SP.UI.ApplicationPages.CalendarHeaderControls($v_0);
        var $v_2 = null;
        var $v_3 = null;
        var $v_4 = null;

        if (!SP.UI.ApplicationPages.SU.$2($v_1)) {
            if (!SP.UI.ApplicationPages.SU.$2($v_1['listName'])) {
                $v_2 = new SP.Guid($v_1['listName']);
            }
            if (!SP.UI.ApplicationPages.SU.$2($v_1['view'])) {
                $v_3 = new SP.Guid($v_1['view']);
            }
            $v_4 = $v_1['newFormUrl'];
        }
        if (!SP.UI.ApplicationPages.RibbonConnector.$d() && (this.$S_1.enablePeople || this.$S_1.enableResource)) {
            SP.UI.ApplicationPages.RibbonCalendarSelector.$4d(this.$S_1);
        }
        this.$B_1 = new SP.UI.ApplicationPages.CalendarNewFormDialog($v_4, this.$S_1.reservationContentTypeId);
        this.$7_1 = new SP.UI.ApplicationPages.CalendarService($p0.serviceUrl, $v_2, $v_3, $p0.dataSources);
        this.$a_1 = new SP.UI.ApplicationPages.EntityPaginator($v_0);
        this.$T_1 = new SP.UI.ApplicationPages.CalendarStateHandler($v_0, this.$7_1, this.$a_1);
        this.$s_1 = new SP.UI.ApplicationPages.ItemUpdater(this.$7_1);
        this.$8m_1(this.$S_1.enablePeople, this.$S_1.enableResource);
    },
    $8m_1: function SP_UI_ApplicationPages_CalendarContainer$$8m_1($p0, $p1) {
        var $v_0 = SP.UI.ApplicationPages.CalendarSelector.instance();

        $v_0.addHandler(this.$S_1.ctxId, $p0, $p1, this.$$d_$AD_1);
        var $$t_8 = this;

        this.$B_1.add_$9Q_1(function($p1_0, $p1_1) {
            $$t_8.refreshItems();
        });
        var $$t_9 = this;

        this.$7_1.add_$At_1(function() {
            $$t_9.refreshItems();
        });
        this.$7_1.add_$7M_1(this.$$d_$Ad_1);
        var $$t_A = this;

        this.$7_1.add_$6e_1(function($p1_0) {
            $$t_A.$6D_1();
            $$t_A.$T_1.onItemsSucceed($p1_0, $$t_A.$S_1.aM12String);
        });
        this.$7_1.add_$8q_1(this.$$d_$5G_1);
        var $$t_B = this;

        this.$T_1.add_$Ab_1(function() {
            $$t_B.$6D_1();
        });
        var $$t_C = this;

        this.$7_1.add_$7w_1(function($p1_0) {
            $$t_C.$a_1.$5I_1($p1_0);
            $$t_C.$2G_1(1);
        });
        var $$t_D = this;

        this.$a_1.add_$9b_1(function() {
            $$t_D.$2G_1(1);
        });
        var $$t_E = this;

        $addHandler(window, 'resize', function($p1_0) {
            if ($$t_E.$f_1) {
                $$t_E.$T_1.parentResized();
            }
        });
        ExecuteOrDelayUntilScriptLoaded(this.$$d_$AS_1, 'navresizer.js');
    },
    $AS_1: function SP_UI_ApplicationPages_CalendarContainer$$AS_1() {
        this.$5D_1 = SP.UI.ApplicationPages.ElementUtility.$3l.offsetWidth;
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            var $$t_1 = this;

            $addHandler(SP.UI.ApplicationPages.ElementUtility.$3l, 'resize', function($p1_0) {
                $$t_1.$5v_1();
            });
        }
        else {
            this.$5w_1();
        }
    },
    $5w_1: function SP_UI_ApplicationPages_CalendarContainer$$5w_1() {
        this.$5v_1();
        window.setTimeout(this.$$d_$5w_1, 1000);
    },
    $5v_1: function SP_UI_ApplicationPages_CalendarContainer$$5v_1() {
        var $v_0 = SP.UI.ApplicationPages.ElementUtility.$3l.offsetWidth;

        if (this.$5D_1 !== $v_0 && this.$f_1) {
            this.$5D_1 = $v_0;
            this.$T_1.parentResized();
        }
    },
    $5G_1: function SP_UI_ApplicationPages_CalendarContainer$$5G_1($p0) {
        this.$T_1.onErrorOccured();
        this.$q_1.$AJ_1($p0);
        this.$T_1.parentResized();
    },
    $Ad_1: function SP_UI_ApplicationPages_CalendarContainer$$Ad_1($p0) {
        this.$7X_1();
        this.$T_1.onTableSucceed($p0);
        if ($p0.Options & 4) {
            this.$q_1.$An_1($p0.Navs[0], $p0.Navs[1], $p0.Navs[2]);
        }
        this.$q_1.$Ar_1();
        if ($p0.Options & 16) {
            this.$q_1.$Ao_1($p0.DatePicker);
        }
    },
    $AD_1: function SP_UI_ApplicationPages_CalendarContainer$$AD_1($p0, $p1) {
        var $v_0 = $p1.get_entities();

        this.$a_1.$2l_1($v_0);
        this.$q_1.$2l_1($v_0);
        this.$B_1.$2l_1($v_0);
        if (!this.$f_1) {
            return;
        }
        if (this.$9O_1($v_0)) {
            this.moveToView(2);
        }
        else {
            this.$2G_1(1);
        }
    },
    $4S_1: function SP_UI_ApplicationPages_CalendarContainer$$4S_1() {
        if (SP.UI.ApplicationPages.ElementUtility.$8I(this.$r_1)) {
            this.$5G_1(SP.Res.calendarDisabledWhileEditing);
            return true;
        }
        return false;
    },
    $2G_1: function SP_UI_ApplicationPages_CalendarContainer$$2G_1($p0) {
        CUI.PMetrics.perfMark(7644);
        this.$7X_1();
        if (this.$4S_1()) {
            return;
        }
        if (this.$q_1.$6S_1()) {
            this.$q_1.$A9_1();
            this.$D_1.$7I_1();
        }
        switch ($p0) {
        case 1:
            this.$T_1.onSelectionUpdated();
            break;
        case 0:
            this.$T_1.start();
            break;
        case 2:
            this.$T_1.dateUpdated();
            break;
        case 3:
            this.$T_1.refreshItems();
            break;
        }
    },
    $96_1: function SP_UI_ApplicationPages_CalendarContainer$$96_1($p0) {
        if (!SP.UI.ApplicationPages.SU.$5(this.$B_1.$19_1)) {
            this.$4C_1(this.$B_1.$19_1);
        }
        this.$9n_1($p0);
        this.$2G_1(0);
    },
    $7X_1: function SP_UI_ApplicationPages_CalendarContainer$$7X_1() {
        this.$13_1.$5P_1();
        this.$18_1.$Aa_0();
        this.$4v_1 = false;
    },
    $6D_1: function SP_UI_ApplicationPages_CalendarContainer$$6D_1() {
        if (this.$q_1.$6S_1()) {
            return;
        }
        if (this.$4v_1) {
            return;
        }
        this.$D_1.$80_1(this.$13_1, this.$B_1);
        if (!this.$3g_1(this.$f_1)) {
            this.$a_1.$9s_1(this.$13_1);
            if (!SP.UI.ApplicationPages.RibbonConnector.$d()) {
                var $v_0 = new SP.UI.ApplicationPages.EntityControlInputHandler(this.$D_1.$0_1, this.$S_1.ctxId, this.$S_1.sharedPickerClientId, this.$$d_$5G_1);

                this.$13_1.$3R_1($v_0);
            }
        }
        if (this.$f_1 === 4 || this.$f_1 === 2 || this.$f_1 === 1) {
            this.$13_1.$3R_1(new SP.UI.ApplicationPages.ScopeChangerHandler(this, this.$r_1));
        }
        if (!SP.UI.ApplicationPages.RibbonConnector.$d()) {
            var $v_1 = new SP.UI.ApplicationPages.ItemDragHandler(SP.UI.ApplicationPages.ElementUtility.$3f(this.$S_1.ctxId), this.$D_1, this.$18_1, this.$s_1);

            this.$D_1.$AI_1($v_1);
            this.$13_1.$3R_1($v_1);
        }
        if (this.$S_1.canUserCreateItem && this.$18_1.get_$Ac_0()) {
            this.$13_1.$3R_1(new SP.UI.ApplicationPages.VirtualItemHandler(this.$D_1.draggableVirtualItem(), this.$B_1));
        }
        this.$4v_1 = true;
    },
    $9n_1: function SP_UI_ApplicationPages_CalendarContainer$$9n_1($p0) {
        this.$7_1.$5s_1(this.$7a_1($p0));
        if (this.$D_1) {
            this.$D_1.dispose();
            this.$D_1 = null;
        }
        this.$f_1 = $p0;
        this.$s_1.$AN_0($p0);
        this.$q_1.$4R_1($p0);
        this.$D_1 = this.$8U_1($p0);
        this.$T_1.initialize(this.$D_1);
    },
    $8U_1: function SP_UI_ApplicationPages_CalendarContainer$$8U_1($p0) {
        switch ($p0) {
        case 1:
            var $v_0 = new SP.UI.ApplicationPages.MonthlyCalendarTable(this.$r_1);

            return new SP.UI.ApplicationPages.MonthlyView($v_0);
        case 3:
            var $v_1 = new SP.UI.ApplicationPages.DailyCalendarTable(this.$r_1);

            return new SP.UI.ApplicationPages.DetailCalendarView($v_1);
        case 4:
            var $v_2 = new SP.UI.ApplicationPages.WeeklyCalendarTable(this.$r_1);

            return new SP.UI.ApplicationPages.DetailCalendarView($v_2);
        case 5:
            var $v_3 = new SP.UI.ApplicationPages.DailyGroupTable(this.$r_1);

            return new SP.UI.ApplicationPages.DailyGroupView($v_3);
        case 2:
            var $v_4 = new SP.UI.ApplicationPages.WeeklyGroupTable(this.$r_1);

            return new SP.UI.ApplicationPages.WeeklyGroupView($v_4);
        }
        return null;
    },
    $3g_1: function SP_UI_ApplicationPages_CalendarContainer$$3g_1($p0) {
        return $p0 === 1 || $p0 === 3 || $p0 === 4;
    },
    $9O_1: function SP_UI_ApplicationPages_CalendarContainer$$9O_1($p0) {
        if (this.$3g_1(this.$f_1)) {
            for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
                var $v_1 = $p0[$v_0];

                if ($v_1.isGroup) {
                    return true;
                }
            }
            return $p0.length > 1;
        }
        return false;
    },
    $4C_1: function SP_UI_ApplicationPages_CalendarContainer$$4C_1($p0) {
        this.$b_1 = $p0;
        this.$B_1.$7h_1($p0);
        this.$7_1.$5r_1($p0);
    },
    $5Z_1: function SP_UI_ApplicationPages_CalendarContainer$$5Z_1($p0) {
        switch ($p0) {
        case 'daygroup':
            return 5;
        case 'weekgroup':
            return 2;
        case 'month':
            return 1;
        case 'day':
            return 3;
        case 'week':
            return 4;
        }
        return 0;
    },
    $7a_1: function SP_UI_ApplicationPages_CalendarContainer$$7a_1($p0) {
        switch ($p0) {
        case 3:
            return 'day';
        case 4:
            return 'week';
        case 1:
            return 'month';
        case 2:
            return 'weekgroup';
        case 5:
            return 'daygroup';
        }
        return '';
    },
    dispose: function SP_UI_ApplicationPages_CalendarContainer$dispose() {
        try {
            if (this.$a_1) {
                this.$a_1.dispose();
                this.$a_1 = null;
            }
            if (this.$B_1) {
                this.$B_1.dispose();
                this.$B_1 = null;
            }
            if (this.$13_1) {
                this.$13_1.dispose();
                this.$13_1 = null;
            }
            if (this.$D_1) {
                this.$D_1.dispose();
                this.$D_1 = null;
            }
            if (this.$7_1) {
                this.$7_1.dispose();
                this.$7_1 = null;
            }
            if (this.$q_1) {
                this.$q_1.dispose();
                this.$q_1 = null;
            }
        }
        finally {
            Sys.Component.prototype.dispose.call(this);
        }
    },
    $AY_1: function SP_UI_ApplicationPages_CalendarContainer$$AY_1($p0, $p1, $p2) {
        this.$4C_1($p1);
        if (!SP.UI.ApplicationPages.SU.$2($p2)) {
            this.$7_1.$AP_1($p2);
        }
        this.$4R_1(this.$5Z_1($p0));
    },
    $4R_1: function SP_UI_ApplicationPages_CalendarContainer$$4R_1($p0) {
        if (this.$f_1 && !this.$3g_1(this.$f_1) && this.$3g_1($p0)) {
            this.$f_1 = 0;
            (SP.UI.ApplicationPages.CalendarSelector.instance()).revertTo(this.$S_1.ctxId, this.$a_1.$8x_1());
        }
        this.$96_1($p0);
    },
    expandAll: function SP_UI_ApplicationPages_CalendarContainer$expandAll() {
        if (!this.$4S_1()) {
            this.$D_1.$8r_1();
        }
    },
    collapseAll: function SP_UI_ApplicationPages_CalendarContainer$collapseAll() {
        if (!this.$4S_1()) {
            this.$D_1.$8Q_1();
        }
    },
    refreshItems: function SP_UI_ApplicationPages_CalendarContainer$refreshItems() {
        this.$2G_1(3);
    },
    getActiveScope: function SP_UI_ApplicationPages_CalendarContainer$getActiveScope() {
        return this.$f_1;
    },
    moveToViewDate: function SP_UI_ApplicationPages_CalendarContainer$moveToViewDate($p0, $p1) {
        this.$4C_1($p1);
        this.moveToView($p0);
    },
    moveToDate: function SP_UI_ApplicationPages_CalendarContainer$moveToDate($p0) {
        if (this.$S_1.usePostBack) {
            MoveToViewDatePostBack($p0, null);
            return;
        }
        if (SP.UI.ApplicationPages.SU.$5($p0)) {
            this.$5G_1(SP.Res.calendarClientDateOutOfSupportedRangeError);
            return;
        }
        this.$4C_1($p0);
        if (!this.$f_1) {
            return;
        }
        this.$2G_1(2);
    },
    moveToViewType: function SP_UI_ApplicationPages_CalendarContainer$moveToViewType($p0) {
        this.moveToView(this.$5Z_1($p0));
    },
    moveToView: function SP_UI_ApplicationPages_CalendarContainer$moveToView($p0) {
        if (this.$S_1.usePostBack) {
            MoveToViewDatePostBack(this.$b_1, this.$7a_1($p0));
        }
        else {
            this.$4R_1($p0);
        }
    },
    newItemDialog: function SP_UI_ApplicationPages_CalendarContainer$newItemDialog($p0) {
        this.$B_1.$AG_1($p0);
        this.$B_1.show();
    },
    deleteItem: function SP_UI_ApplicationPages_CalendarContainer$deleteItem($p0) {
        var $v_0 = window['ctx' + this.$S_1.ctxId];
        var $v_1;
        var $v_2 = $v_0['RecycleBinEnabled'];

        if ($p0.indexOf('.0.') !== -1 || $p0.indexOf('.1.') !== -1) {
            $v_1 = SP.Res.calendarDeleteConfirm;
        }
        else if (!SP.UI.ApplicationPages.SU.$2($v_2) && $v_2 === '1') {
            $v_1 = window.Strings.STS.L_STSRecycleConfirm_Text;
        }
        else {
            $v_1 = window.Strings.STS.L_STSDelConfirm_Text;
        }
        if (!confirm($v_1)) {
            return;
        }
        this.$s_1.$8Z_0($p0);
    }
};
SP.UI.ApplicationPages.RibbonConnector = function SP_UI_ApplicationPages_RibbonConnector($p0) {
    this.$14_0 = -1;
    this.$v_0 = $p0;
    var $v_0 = this.get_$4X_0();

    this.$1q_0 = SP.UI.ApplicationPages.SU.$Y($v_0['ctxId']) || SP.UI.ApplicationPages.RibbonConnector.$d();
    if (!this.$1q_0) {
        this.$4u_0 = '106' === $v_0['listTemplate'];
        if (this.$4u_0) {
            this.$3u_0 = 'Ribbon.Calendar.Events';
        }
        else if (1 === $v_0.listBaseType) {
            this.$3u_0 = 'Ribbon.Document';
        }
        else {
            this.$3u_0 = 'Ribbon.ListItem';
        }
    }
};
SP.UI.ApplicationPages.RibbonConnector.$d = function SP_UI_ApplicationPages_RibbonConnector$$d() {
    return !window._fV4UI;
};
SP.UI.ApplicationPages.RibbonConnector.prototype = {
    $v_0: null,
    $1q_0: false,
    $3u_0: null,
    $4u_0: false,
    $7c_0: function SP_UI_ApplicationPages_RibbonConnector$$7c_0($p0, $p1) {
        if (this.$1q_0) {
            return;
        }
        var $v_0 = {};

        $v_0['id'] = $p0;
        $v_0['fsObjType'] = '0';
        $v_0['Permissions'] = $p1;
        var $v_1 = this.$94_0();

        $v_1[String.format('\'{0}\',{1},0', this.$v_0, $p0)] = $v_0;
        this.$5T_0(true);
    },
    $7Y_0: function SP_UI_ApplicationPages_RibbonConnector$$7Y_0() {
        if (this.$1q_0) {
            return;
        }
        var $v_0 = this.get_$4X_0();

        if (!SP.UI.ApplicationPages.SU.$2($v_0['dictSel'])) {
            $v_0['dictSel'] = {};
        }
        this.$5T_0(false);
    },
    get_$Ac_0: function SP_UI_ApplicationPages_RibbonConnector$get_$Ac_0() {
        return !this.$1q_0 && this.$4u_0;
    },
    $Aa_0: function SP_UI_ApplicationPages_RibbonConnector$$Aa_0() {
        if (this.$1q_0) {
            return;
        }
        this.$5T_0(false);
    },
    get_$4X_0: function SP_UI_ApplicationPages_RibbonConnector$get_$4X_0() {
        return window['ctx' + this.$v_0];
    },
    $6Q_0: function SP_UI_ApplicationPages_RibbonConnector$$6Q_0($p0) {
        if (this.$1q_0) {
            return;
        }
        try {
            var $v_0 = (SP.Ribbon.PageManager.get_instance()).getPageComponentById('WebPart' + this.$v_0);

            if ($v_0) {
                $v_0.handleCommand($p0, {}, 0);
            }
        }
        catch ($$e_2) { }
    },
    $94_0: function SP_UI_ApplicationPages_RibbonConnector$$94_0() {
        var $v_0 = this.get_$4X_0();
        var $v_1 = $v_0['dictSel'];

        if (SP.UI.ApplicationPages.SU.$2($v_1)) {
            $v_1 = {};
            $v_0['dictSel'] = $v_1;
        }
        return $v_1;
    },
    $5T_0: function SP_UI_ApplicationPages_RibbonConnector$$5T_0($p0) {
        if (this.$14_0 !== -1) {
            window.clearTimeout(this.$14_0);
        }
        var $$t_3 = this;

        this.$14_0 = window.setTimeout(function() {
            try {
                if ($p0) {
                    SelectRibbonTab($$t_3.$3u_0, true);
                }
                try {
                    if (!SP.UI.ApplicationPages.SU.$2((SP.Ribbon.PageManager.get_instance()).get_commandDispatcher())) {
                        ((SP.Ribbon.PageManager.get_instance()).get_commandDispatcher()).executeCommand(Commands.CommandIds.ApplicationStateChanged, null);
                    }
                }
                catch ($$e_1) { }
                $$t_3.$14_0 = -1;
            }
            catch ($$e_2) { }
        }, 0);
    }
};
SP.UI.ApplicationPages.ElementUtility = function SP_UI_ApplicationPages_ElementUtility() {
};
SP.UI.ApplicationPages.ElementUtility.$8I = function SP_UI_ApplicationPages_ElementUtility$$8I($p0) {
    if (!SP.UI.ApplicationPages.ElementUtility.$1e || SP.UI.ApplicationPages.RibbonConnector.$d()) {
        return false;
    }
    while ($p0 && SP.UI.ApplicationPages.ElementUtility.$M(SP.UI.ApplicationPages.ElementUtility.$1e, $p0)) {
        $p0 = $p0.parentNode;
        if ($p0 === SP.UI.ApplicationPages.ElementUtility.$1e) {
            return false;
        }
    }
    return true;
};
SP.UI.ApplicationPages.ElementUtility.$4Y = function SP_UI_ApplicationPages_ElementUtility$$4Y($p0) {
    return !!SP.UI.ApplicationPages.ElementUtility.$56 && SP.UI.ApplicationPages.ElementUtility.$M(SP.UI.ApplicationPages.ElementUtility.$56, $p0);
};
SP.UI.ApplicationPages.ElementUtility.$8j = function SP_UI_ApplicationPages_ElementUtility$$8j($p0) {
    return !!SP.UI.ApplicationPages.ElementUtility.$1e && SP.UI.ApplicationPages.ElementUtility.$M(SP.UI.ApplicationPages.ElementUtility.$1e, $p0);
};
SP.UI.ApplicationPages.ElementUtility.$M = function SP_UI_ApplicationPages_ElementUtility$$M($p0, $p1) {
    if (SP.UI.ApplicationPages.SU.$2($p0)) {
        return false;
    }
    if (SP.UI.ApplicationPages.SU.$Y($p0.contains)) {
        var $v_0 = $p0.compareDocumentPosition($p1);

        return !!($v_0 & 16);
    }
    else {
        return $p0.contains($p1);
    }
};
SP.UI.ApplicationPages.ElementUtility.$l = function SP_UI_ApplicationPages_ElementUtility$$l($p0) {
    var $v_0 = $p0.firstChild;

    while ($v_0) {
        if ($v_0.nodeType === 1) {
            break;
        }
        $v_0 = $v_0.nextSibling;
    }
    return $v_0;
};
SP.UI.ApplicationPages.ElementUtility.$V = function SP_UI_ApplicationPages_ElementUtility$$V($p0, $p1) {
    var $v_0 = $p0.getAttributeNode($p1);

    if ($v_0 && $v_0.specified) {
        return $v_0.value;
    }
    else {
        return null;
    }
};
SP.UI.ApplicationPages.ElementUtility.$3b = function SP_UI_ApplicationPages_ElementUtility$$3b($p0) {
    var $v_0 = $p0.childNodes;
    var $v_1 = $v_0.length;

    for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
        if ($v_0[$v_2].nodeName === 'DIV' && $v_0[$v_2].className === 'ms-acal-rootdiv') {
            return $v_0[$v_2];
        }
    }
    return null;
};
SP.UI.ApplicationPages.ElementUtility.$3f = function SP_UI_ApplicationPages_ElementUtility$$3f($p0) {
    return $get('WebPart' + $p0);
};
SP.UI.ApplicationPages.ItemBuilder = function SP_UI_ApplicationPages_ItemBuilder($p0, $p1) {
    this.$6v_0 = String.format(SP.UI.ApplicationPages.ItemBuilder.$4A, SP.Res.oneMore, 'expandbttn');
    this.$6k_0 = String.format(SP.UI.ApplicationPages.ItemBuilder.$4A, SP.Res.collapse, 'collapsebttn');
    this.$7O_0 = String.format(SP.UI.ApplicationPages.ItemBuilder.$5M, SP.Res.calendarRecurrence, 'recur.gif');
    this.$7N_0 = String.format(SP.UI.ApplicationPages.ItemBuilder.$5M, SP.Res.calendarRecurrenceException, 'recurex.gif');
    this.$v_0 = $p1;
    this.$49_0 = $p0;
};
SP.UI.ApplicationPages.ItemBuilder.prototype = {
    $49_0: null,
    $v_0: null,
    $89_0: function SP_UI_ApplicationPages_ItemBuilder$$89_0($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        this.$7p_0($p0, 'expand', $p1, $p3, $p4, $p5, $p6);
        if ($p2 === 1) {
            $p0.append(this.$6v_0);
        }
        else {
            var $v_0 = String.format(SP.Res.twoMore, $p2);

            $p0.append(String.format(SP.UI.ApplicationPages.ItemBuilder.$4A, $v_0, 'expandbttn'));
        }
        $p0.append('</div>');
    },
    $88_0: function SP_UI_ApplicationPages_ItemBuilder$$88_0($p0, $p1, $p2, $p3, $p4, $p5) {
        this.$7p_0($p0, 'collapse', $p1, $p2, $p3, $p4, $p5);
        $p0.append(this.$6k_0);
        $p0.append('</div>');
    },
    $7p_0: function SP_UI_ApplicationPages_ItemBuilder$$7p_0($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        $p0.append('<div class=\"ms-acal-ctrlitem\" _expand=\"');
        $p0.append($p1);
        $p0.append('\" style=\"');
        this.$3j_0($p0, $p3, $p4, $p5, $p6);
        $p0.append('\"');
        this.$4D_0($p0, $p2.$2I_0);
        $p0.append('>');
    },
    $4N_0: function SP_UI_ApplicationPages_ItemBuilder$$4N_0($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7) {
        var $v_0 = $p1.$c_0;

        $p0.append('<div class=\"ms-acal-item');
        if (!$v_0.$N_0.primary) {
            $p0.append(' ms-acal-color');
            $p0.append($v_0.$N_0.color);
        }
        $p0.append('\" style=\"');
        this.$3j_0($p0, $p2, $p3, $p4, $p5);
        $p0.append('border-width:');
        $p0.append($p6);
        $p0.append(';\" title=\"');
        this.$4V_0($p0, $v_0);
        $p0.append('\"');
        this.$4D_0($p0, $p1.$2I_0);
        $p0.append('\">');
        $p0.append('<div class=\"ms-acal-mdiv\">');
        if ($p7) {
            this.$5N_0($p0, $v_0);
        }
        this.$3M_0($p0, $v_0);
        if (!this.$5_0($v_0.$1C_0)) {
            $p0.append(' (');
            $p0.append($v_0.$1C_0);
            $p0.append(')');
        }
        $p0.append('</div></div>');
    },
    $8D_0: function SP_UI_ApplicationPages_ItemBuilder$$8D_0($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = $p1.$c_0;

        $p0.append('<div class=\"ms-acal-item');
        if (!$v_0.$N_0.primary) {
            $p0.append(' ms-acal-color');
            $p0.append($v_0.$N_0.color);
        }
        $p0.append('\" style=\"');
        this.$3j_0($p0, $p2, $p3, $p4, $p5);
        $p0.append('\" title=\"');
        this.$4V_0($p0, $v_0);
        $p0.append('\"');
        this.$4D_0($p0, $p1.$2I_0);
        $p0.append('>');
        $p0.append('<div class=\"ms-acal-sdiv\">');
        if ($p6) {
            if ($v_0.$i_0 > 0) {
                $p0.append($p1.$5X_0 ? this.$49_0 : $v_0.$4E_0);
                $p0.append(' ');
            }
            this.$3M_0($p0, $v_0);
        }
        else {
            var $v_1 = $p1.$5X_0 ? this.$49_0 : $v_0.$4E_0;
            var $v_2 = $p1.$68_0 ? this.$49_0 : $v_0.$3Y_0;

            $p0.append('<div class=\"ms-acal-time\">');
            $p0.append($v_1);
            $p0.append(' - ');
            $p0.append($v_2);
            $p0.append('</div>');
            $p0.append('<div class=\"ms-acal-title\">');
            this.$3M_0($p0, $v_0);
            $p0.append('</div>');
        }
        $p0.append('</div></div>');
    },
    $5n_0: function SP_UI_ApplicationPages_ItemBuilder$$5n_0($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = $p1.$c_0;

        $p0.append('<div class=\"ms-acal-item');
        if (!$v_0.$N_0.primary) {
            $p0.append(' ms-acal-color');
            $p0.append($v_0.$N_0.color);
        }
        $p0.append('\" style=\"');
        this.$3j_0($p0, $p2, $p3, $p4, $p5);
        $p0.append('\" title=\"');
        this.$4V_0($p0, $v_0);
        $p0.append('\"');
        this.$4D_0($p0, $p1.$2I_0);
        $p0.append('><div class=\"ms-acal-ddiv\">');
        if ($p6) {
            this.$5N_0($p0, $v_0);
            this.$3M_0($p0, $v_0);
            if (!this.$5_0($v_0.$1C_0)) {
                $p0.append(' (');
                $p0.append($v_0.$1C_0);
                $p0.append(')');
            }
        }
        else {
            $p0.append('<div class=\"ms-acal-title\">');
            this.$5N_0($p0, $v_0);
            this.$3M_0($p0, $v_0);
            $p0.append('</div>');
            if (!this.$5_0($v_0.$1C_0)) {
                $p0.append('<div class=\"ms-acal-location\">');
                $p0.append($v_0.$1C_0);
                $p0.append('</div>');
            }
        }
        $p0.append('</div></div>');
    },
    $3j_0: function SP_UI_ApplicationPages_ItemBuilder$$3j_0($p0, $p1, $p2, $p3, $p4) {
        $p0.append('position:absolute;left:');
        $p0.append($p1.toString());
        $p0.append('px;top:');
        $p0.append($p2.toString());
        $p0.append('px;width:');
        $p0.append($p3.toString());
        $p0.append('px;height:');
        $p0.append($p4.toString());
        $p0.append('px;');
    },
    $5N_0: function SP_UI_ApplicationPages_ItemBuilder$$5N_0($p0, $p1) {
        if ($p1.$6c_0) {
            $p0.append(this.$7O_0);
        }
        else if ($p1.$6a_0) {
            $p0.append(this.$7N_0);
        }
    },
    $4D_0: function SP_UI_ApplicationPages_ItemBuilder$$4D_0($p0, $p1) {
        $p0.append(' _index=\"');
        $p0.append($p1);
        $p0.append('\"');
    },
    $5_0: function SP_UI_ApplicationPages_ItemBuilder$$5_0($p0) {
        var $v_0 = null;

        return $p0 === $v_0 || typeof $p0 === 'undefined' || !$p0.length;
    },
    $3M_0: function SP_UI_ApplicationPages_ItemBuilder$$3M_0($p0, $p1) {
        var $v_0 = $p1.$6L_0();

        if (this.$5_0($v_0)) {
            $p0.append($p1.$3Q_0);
        }
        else {
            if ($p1.$N_0.primary) {
                $p0.append('<a onclick=\"EditLink2(this,\'');
                $p0.append(this.$v_0);
                $p0.append('\');return false;\" href=\"');
                $p0.append($v_0);
                $p0.append('\">');
                $p0.append($p1.$3Q_0);
                $p0.append('</a>');
            }
            else {
                $p0.append('<a target=\"_blank\" href=\"');
                $p0.append($v_0);
                $p0.append('\">');
                $p0.append($p1.$3Q_0);
                $p0.append('</a>');
            }
        }
    },
    $4V_0: function SP_UI_ApplicationPages_ItemBuilder$$4V_0($p0, $p1) {
        if (!$p1.$N_0.primary) {
            $p0.append($p1.$N_0.name);
            $p0.append('&#13;');
        }
        if ($p1.$o_0()) {
            if ($p1.$G_0 !== $p1.$10_0) {
                $p0.append($p1.$7o_0);
                $p0.append(' - ');
                $p0.append($p1.$65_0);
                $p0.append(' ');
            }
        }
        else if (!$p1.$i_0) {
            $p0.append($p1.$3Y_0);
            $p0.append(' ');
        }
        else {
            $p0.append($p1.$4E_0);
            $p0.append(' - ');
            $p0.append($p1.$3Y_0);
            $p0.append(' ');
        }
        $p0.append($p1.$3Q_0);
        if (!this.$5_0($p1.$1C_0)) {
            $p0.append('&#13;(');
            $p0.append($p1.$1C_0);
            $p0.append(')');
        }
    }
};
SP.UI.ApplicationPages.CalendarItem = function SP_UI_ApplicationPages_CalendarItem($p0, $p1, $p2) {
    var $v_0 = 0;

    this.$11_0 = $p1[$p0[$v_0++]];
    this.$3Q_0 = $p1[$p0[$v_0++]];
    this.$1C_0 = $p1[$p0[$v_0++]];
    this.$G_0 = $p0[$v_0++];
    this.$10_0 = $p0[$v_0++];
    this.$7o_0 = $p1[$p0[$v_0++]];
    this.$65_0 = $p1[$p0[$v_0++]];
    this.$4E_0 = $p1[$p0[$v_0++]];
    this.$3Y_0 = $p1[$p0[$v_0++]];
    this.$1S_0 = $p0[$v_0++];
    this.$1f_0 = $p0[$v_0++];
    this.$i_0 = $p0[$v_0++];
    this.$6Z_0 = $p0[$v_0++] === 1;
    this.$6c_0 = $p0[$v_0++] === 1;
    this.$6a_0 = $p0[$v_0++] === 1;
    this.$6J_0 = $p1[$p0[$v_0++]];
    this.$2A_0 = $p1[$p0[$v_0++]];
    this.$N_0 = $p2;
};
SP.UI.ApplicationPages.CalendarItem.prototype = {
    $11_0: null,
    $3Q_0: null,
    $1C_0: null,
    $4E_0: null,
    $3Y_0: null,
    $7o_0: null,
    $65_0: null,
    $1S_0: 0,
    $1f_0: 0,
    $i_0: 0,
    $G_0: 0,
    $10_0: 0,
    $6Z_0: false,
    $6c_0: false,
    $6a_0: false,
    $6J_0: null,
    $2A_0: null,
    $N_0: null,
    $o_0: function SP_UI_ApplicationPages_CalendarItem$$o_0() {
        return this.$6Z_0 || this.$i_0 > 1440;
    },
    $6L_0: function SP_UI_ApplicationPages_CalendarItem$$6L_0() {
        var $v_0 = this.$6J_0;

        if (this.$5_0(this.$11_0) && this.$5_0($v_0)) {
            return null;
        }
        else if (this.$5_0(this.$11_0)) {
            return $v_0;
        }
        if (!this.$5_0(this.$2A_0)) {
            if (this.$2A_0.length < 4) {
                return null;
            }
            switch ((this.$2A_0.substr(this.$2A_0.length - 4, 1)).toLowerCase()) {
            case '0':
            case '2':
            case '4':
            case '6':
            case '8':
            case 'a':
            case 'c':
            case 'e':
                return null;
            }
        }
        if (this.$5_0($v_0) && this.$N_0 && !this.$5_0(this.$N_0.formUrl)) {
            $v_0 = this.$N_0.formUrl;
        }
        if (this.$5_0($v_0)) {
            return null;
        }
        if ($v_0.indexOf('?') !== -1) {
            return $v_0 + '&ID=' + this.$11_0;
        }
        else {
            return $v_0 + '?ID=' + this.$11_0;
        }
    },
    $5_0: function SP_UI_ApplicationPages_CalendarItem$$5_0($p0) {
        var $v_0 = null;

        return $p0 === $v_0 || typeof $p0 === 'undefined' || !$p0.length;
    }
};
SP.UI.ApplicationPages.ItemUpdater = function SP_UI_ApplicationPages_ItemUpdater($p0) {
    this.$7_0 = $p0;
};
SP.UI.ApplicationPages.ItemUpdater.prototype = {
    $2X_0: 0,
    $7_0: null,
    $AN_0: function SP_UI_ApplicationPages_ItemUpdater$$AN_0($p0) {
        this.$2X_0 = $p0;
    },
    $8Z_0: function SP_UI_ApplicationPages_ItemUpdater$$8Z_0($p0) {
        this.$7d_0($p0, 0, 0, true);
    },
    $AE_0: function SP_UI_ApplicationPages_ItemUpdater$$AE_0($p0, $p1, $p2) {
        this.$7d_0($p0, $p1, $p2, false);
    },
    $9H_0: function SP_UI_ApplicationPages_ItemUpdater$$9H_0($p0, $p1, $p2) {
        switch (this.$2X_0) {
        case 5:
            this.$5g_0($p0, $p2);
            break;
        case 2:
        case 1:
            var $v_0 = 7 * $p1 + $p2;

            this.$5e_0($p0, $v_0);
            break;
        case 4:
        case 3:
            this.$5e_0($p0, $p2);
            this.$5g_0($p0, $p1);
            break;
        }
    },
    $7d_0: function SP_UI_ApplicationPages_ItemUpdater$$7d_0($p0, $p1, $p2, $p3) {
        switch (this.$2X_0) {
        case 5:
            this.$7_0.$4M_1($p0, 0, $p2, $p3);
            break;
        case 2:
        case 1:
            var $v_0 = 7 * $p1 + $p2;

            this.$7_0.$4M_1($p0, $v_0, 0, $p3);
            break;
        case 4:
        case 3:
            this.$7_0.$4M_1($p0, $p2, $p1, $p3);
            break;
        }
    },
    $5e_0: function SP_UI_ApplicationPages_ItemUpdater$$5e_0($p0, $p1) {
        if ($p1) {
            $p0.$G_0 += $p1;
            $p0.$10_0 += $p1;
        }
        return $p0;
    },
    $5g_0: function SP_UI_ApplicationPages_ItemUpdater$$5g_0($p0, $p1) {
        if (!$p1) {
            return $p0;
        }
        var $v_0 = 1440;
        var $v_1 = $p0.$1S_0 * 60 + $p0.$1f_0 + $p1 * 30;

        if ($v_1 < 0) {
            $p0.$G_0--;
            $v_1 += $v_0;
        }
        else if ($v_1 >= $v_0) {
            $p0.$G_0++;
            $v_1 -= $v_0;
        }
        if ($v_1 + $p0.$i_0 >= $v_0) {
            $p0.$10_0 = $p0.$G_0 + 1;
        }
        else {
            $p0.$10_0 = $p0.$G_0;
        }
        $p0.$1S_0 = Math.floor($v_1 / 60);
        $p0.$1f_0 = $v_1 % 60;
        return $p0;
    }
};
SP.UI.ApplicationPages.CalendarMouseHandler = function SP_UI_ApplicationPages_CalendarMouseHandler($p0) {
    this.$$d_$Aw_1 = Function.createDelegate(this, this.$Aw_1);
    this.$$d_$87_1 = Function.createDelegate(this, this.$87_1);
    this.$$d_$8f_1 = Function.createDelegate(this, this.$8f_1);
    this.$$d_$8g_1 = Function.createDelegate(this, this.$8g_1);
    this.$$d_$8i_1 = Function.createDelegate(this, this.$8i_1);
    this.$$d_$8h_1 = Function.createDelegate(this, this.$8h_1);
    this.$$d_$64_1 = Function.createDelegate(this, this.$64_1);
    SP.UI.ApplicationPages.CalendarMouseHandler.initializeBase(this);
    this.$8_1 = $p0;
    this.$9t_1();
    this.$5P_1();
};
SP.UI.ApplicationPages.CalendarMouseHandler.prototype = {
    $3A_1: null,
    $3B_1: null,
    $3D_1: null,
    $20_1: null,
    $31_1: null,
    $30_1: null,
    $3C_1: null,
    $1Z_1: null,
    $1E_1: null,
    $4i_1: null,
    $2c_1: false,
    $8_1: null,
    $9t_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$9t_1() {
        this.$3B_1 = this.$$d_$64_1;
        this.$3D_1 = this.$$d_$8h_1;
        this.$20_1 = this.$$d_$8i_1;
        this.$31_1 = this.$$d_$8g_1;
        this.$30_1 = this.$$d_$8f_1;
        this.$3A_1 = this.$$d_$87_1;
        $addHandler(this.$8_1.ownerDocument, 'dblclick', this.$31_1);
        $addHandler(this.$8_1.ownerDocument, 'click', this.$30_1);
        $addHandler(this.$8_1.ownerDocument, 'mousedown', this.$3B_1);
        $addHandler(this.$8_1.ownerDocument, 'mouseup', this.$20_1);
        $addHandler(this.$8_1.ownerDocument, 'mousemove', this.$3D_1);
        $addHandler(this.get_$4f_1(), 'keydown', this.$3A_1);
        this.$3C_1 = this.$$d_$Aw_1;
        $addHandler(this.$8_1, 'mousedown', this.$3C_1);
    },
    $Aw_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$Aw_1($p0) {
        var $v_0 = SP.UI.ApplicationPages.ElementUtility.$3b(this.$8_1);

        if (SP.UI.ApplicationPages.ElementUtility.$M($v_0, $p0.target)) {
            this.$64_1($p0);
        }
    },
    $y_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$y_1($p0, $p1) {
        this.$4i_1[$p0] = $p1;
    },
    $5P_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$5P_1() {
        var $v_0 = this.$1Z_1;

        while ($v_0) {
            $v_0.$1g_0();
            $v_0 = $v_0.$1I_0;
        }
        this.$1E_1 = null;
        this.$2c_1 = false;
        this.$4i_1 = {};
        this.$1Z_1 = new SP.UI.ApplicationPages.BaseInputHandler();
    },
    $3R_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$3R_1($p0) {
        var $v_0 = this.$1Z_1;

        while ($v_0.$1I_0) {
            $v_0 = $v_0.$1I_0;
        }
        $v_0.$1I_0 = $p0;
        $p0.$9q_0(this);
    },
    get_$4f_1: function SP_UI_ApplicationPages_CalendarMouseHandler$get_$4f_1() {
        if (Sys.Browser.agent === Sys.Browser.Firefox) {
            return window.self.self;
        }
        else {
            return document.body;
        }
    },
    $87_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$87_1($p0) {
        var $v_0 = this.$1Z_1;

        while ($v_0) {
            if ($v_0.$Aj_0($p0)) {
                $p0.preventDefault();
                $p0.stopPropagation();
                break;
            }
            $v_0 = $v_0.$1I_0;
        }
    },
    $8g_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$8g_1($p0) {
        if (SP.UI.ApplicationPages.ElementUtility.$M(this.$8_1, $p0.target)) {
            var $v_0 = this.$4U_1($p0);
            var $v_1 = this.$1Z_1;

            while ($v_1 && $v_0.$2E_0) {
                if ($v_1.$Ai_0($v_0)) {
                    break;
                }
                $v_1 = $v_1.$1I_0;
            }
        }
    },
    $4U_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$4U_1($p0) {
        var $v_0 = new SP.UI.ApplicationPages.MouseEventContext();

        $v_0.$1j_0 = $p0.target;
        $v_0.$1M_0 = this.$3e_1($p0);
        $v_0.$2E_0 = true;
        return $v_0;
    },
    $8f_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$8f_1($p0) {
        var $v_0 = $p0.target;

        if (!SP.UI.ApplicationPages.ElementUtility.$M(this.$8_1, $v_0)) {
            return;
        }
        if ($v_0.parentNode.nodeName === 'A') {
            $v_0 = $v_0.parentNode;
        }
        if ($v_0.nodeName === 'A') {
            var $v_3 = SP.UI.ApplicationPages.ElementUtility.$V($v_0, 'evtid');

            if (SP.UI.ApplicationPages.SU.$5($v_3)) {
                $v_3 = $v_0.id;
            }
            if (SP.UI.ApplicationPages.SU.$5($v_3)) {
                $v_3 = $v_0.parentNode.id;
            }
            var $v_4 = this.$4i_1[$v_3];

            if (!SP.UI.ApplicationPages.SU.$2($v_4)) {
                $v_4($v_0);
                return;
            }
        }
        var $v_1 = this.$4U_1($p0);
        var $v_2 = this.$1Z_1;

        while ($v_2 && $v_1.$2E_0) {
            if ($v_2.$Ah_0($v_1)) {
                break;
            }
            $v_2 = $v_2.$1I_0;
        }
    },
    $64_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$64_1($p0) {
        var $v_0 = $p0.target;

        if (this.$2c_1 || $p0.button || $v_0.nodeName === 'SELECT' || $v_0 === SP.UI.ApplicationPages.ElementUtility.$1e) {
            return;
        }
        if (SP.UI.ApplicationPages.ElementUtility.$M(this.$8_1, $v_0)) {
            var $v_1 = this.$4U_1($p0);
            var $v_2 = this.$1Z_1;

            while ($v_2 && $v_1.$2E_0) {
                if ($v_2.$Ag_0($v_1)) {
                    $p0.preventDefault();
                    $p0.stopPropagation();
                    this.$9u_1();
                    this.$4L_1($v_2, $p0);
                    return;
                }
                $v_2 = $v_2.$1I_0;
            }
            if (!$v_1.$2E_0) {
                return;
            }
        }
        if (SP.UI.ApplicationPages.ElementUtility.$8j($v_0)) {
            this.$7f_1(null);
        }
    },
    $9u_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$9u_1() {
        try {
            if (document.activeElement) {
                if (document.activeElement.nodeName === 'A') {
                    document.activeElement.blur();
                }
            }
            else {
                var $v_0 = document.getElementsByTagName('A');

                for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                    $v_0[$v_1].blur();
                }
            }
        }
        catch ($$e_2) { }
    },
    $4L_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$4L_1($p0, $p1) {
        var $v_0 = this.get_$4f_1();

        if (!SP.UI.ApplicationPages.SU.$Y($v_0.setActive)) {
            $v_0.setActive();
        }
        if (!this.$8_1.ownerDocument.addEventListener) {
            this.$8_1.setCapture();
            $addHandler(this.$8_1, 'losecapture', this.$20_1);
        }
        this.$2c_1 = true;
        this.$7f_1($p0);
    },
    $8h_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$8h_1($p0) {
        var $v_0 = $p0.target;

        if (this.$2c_1) {
            if (!SP.UI.ApplicationPages.SU.$2(this.$1E_1)) {
                this.$1E_1.$3X_0(this.$3e_1($p0), $v_0);
                this.$AA_1($p0.clientX, $p0.clientY);
            }
        }
        else {
            if (!SP.UI.ApplicationPages.ElementUtility.$M(this.$8_1, $p0.target)) {
                return;
            }
            var $v_1 = this.$3e_1($p0);
            var $v_2 = this.$1Z_1;

            while ($v_2) {
                $v_2.$9X_0($v_1, $v_0);
                $v_2 = $v_2.$1I_0;
            }
        }
    },
    $8i_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$8i_1($p0) {
        if ($p0.button) {
            return;
        }
        if (this.$2c_1) {
            if (!this.$8_1.ownerDocument.removeEventListener) {
                $removeHandler(this.$8_1, 'losecapture', this.$20_1);
                this.$8_1.releaseCapture();
            }
            if (!SP.UI.ApplicationPages.SU.$2(this.$1E_1)) {
                this.$1E_1.$5Y_0(this.$3e_1($p0), $p0.target);
            }
            this.$2c_1 = false;
        }
    },
    $3e_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$3e_1($p0) {
        var $v_0 = MenuHtc_GetElementPosition(this.$8_1, null);

        return new Sys.UI.Point($p0.clientX - $v_0.x, $p0.clientY - $v_0.y);
    },
    $2i_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$2i_1($p0, $p1) {
        var $v_0 = SP.UI.ApplicationPages.ElementUtility.$1e;

        if (!$v_0) {
            return;
        }
        $v_0.scrollLeft += $p0;
        $v_0.scrollTop += $p1;
    },
    $AA_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$AA_1($p0, $p1) {
        var $v_0 = 10;
        var $v_1 = document.documentElement.offsetWidth;
        var $v_2 = document.documentElement.offsetHeight;

        if ($p0 < 0 && $p1 < 0) {
            this.$2i_1(-$v_0, -$v_0);
        }
        else if ($p0 < 0) {
            this.$2i_1(-$v_0, 0);
        }
        else if ($p1 < 0) {
            this.$2i_1(0, -$v_0);
        }
        if ($p0 > $v_1 && $p1 > $v_2) {
            this.$2i_1($v_0, $v_0);
        }
        else if ($p0 > $v_1) {
            this.$2i_1($v_0, 0);
        }
        else if ($p1 > $v_2) {
            this.$2i_1(0, $v_0);
        }
    },
    $7f_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$7f_1($p0) {
        if (!SP.UI.ApplicationPages.SU.$2(this.$1E_1) && this.$1E_1 !== $p0) {
            this.$1E_1.$1g_0();
        }
        this.$1E_1 = $p0;
    },
    $Al_1: function SP_UI_ApplicationPages_CalendarMouseHandler$$Al_1() {
        if (this.$3A_1) {
            $removeHandler(this.get_$4f_1(), 'keydown', this.$3A_1);
            this.$3A_1 = null;
        }
        if (this.$20_1) {
            $removeHandler(this.$8_1.ownerDocument, 'mouseup', this.$20_1);
            this.$20_1 = null;
        }
        if (this.$3B_1) {
            $removeHandler(this.$8_1.ownerDocument, 'mousedown', this.$3B_1);
            this.$3B_1 = null;
        }
        if (this.$31_1) {
            $removeHandler(this.$8_1.ownerDocument, 'dblclick', this.$31_1);
            this.$31_1 = null;
        }
        if (this.$30_1) {
            $removeHandler(this.$8_1.ownerDocument, 'click', this.$30_1);
            this.$30_1 = null;
        }
        if (this.$3D_1) {
            $removeHandler(this.$8_1.ownerDocument, 'mousemove', this.$3D_1);
            this.$3D_1 = null;
        }
        if (this.$3C_1) {
            $removeHandler(this.$8_1, 'mousedown', this.$3C_1);
            this.$3C_1 = null;
        }
    },
    dispose: function SP_UI_ApplicationPages_CalendarMouseHandler$dispose() {
        try {
            this.$Al_1();
            this.$5P_1();
        }
        finally {
            Sys.Component.prototype.dispose.call(this);
        }
    }
};
SP.UI.ApplicationPages.CalendarNewFormDialog = function SP_UI_ApplicationPages_CalendarNewFormDialog($p0, $p1) {
    this.$$d_$8c_1 = Function.createDelegate(this, this.$8c_1);
    this.$$d_$9P_1 = Function.createDelegate(this, this.$9P_1);
    SP.UI.ApplicationPages.CalendarNewFormDialog.initializeBase(this);
    this.$4w_1 = $p0;
    this.$6y_1 = $p1;
};
SP.UI.ApplicationPages.CalendarNewFormDialog.prototype = {
    $4w_1: null,
    $B_1: null,
    $3m_1: null,
    $b_1: null,
    $19_1: null,
    $1X_1: null,
    $6y_1: null,
    $3k_1: false,
    $25_1: null,
    $1s_1: null,
    $2O_1: null,
    $4k_1: false,
    show: function SP_UI_ApplicationPages_CalendarNewFormDialog$show() {
        var $v_0 = this.$4w_1;
        var $v_1 = this.$8F_1();

        if (!SP.UI.ApplicationPages.SU.$2($v_1)) {
            $v_0 += '&ContentTypeId=' + $v_1;
        }
        if (this.$3k_1) {
            $v_0 += '&CalendarAllday=true';
        }
        var $v_2 = new SP.UI.DialogOptions();

        $v_2.url = $v_0;
        $v_2.dialogReturnValueCallback = this.$$d_$9P_1;
        this.$B_1 = SP.UI.ModalDialog.showModalDialog($v_2);
        $addHandler(this.$B_1.get_frameElement(), 'load', this.$$d_$8c_1);
        this.$4k_1 = false;
    },
    $8F_1: function SP_UI_ApplicationPages_CalendarNewFormDialog$$8F_1() {
        if (!SP.UI.ApplicationPages.SU.$2(this.$3m_1)) {
            return this.$3m_1;
        }
        if (SP.UI.ApplicationPages.SU.$2(this.$2O_1) || !this.$2O_1.length) {
            return null;
        }
        for (var $v_0 = 0; $v_0 < this.$2O_1.length; $v_0++) {
            var $v_1 = this.$2O_1[$v_0];

            if ($v_1.entityType !== SP.UI.ApplicationPages.ResolveEntity.typE_RESOURCE) {
                return null;
            }
        }
        return this.$6y_1;
    },
    $AG_1: function SP_UI_ApplicationPages_CalendarNewFormDialog$$AG_1($p0) {
        this.$3m_1 = $p0;
    },
    $7h_1: function SP_UI_ApplicationPages_CalendarNewFormDialog$$7h_1($p0) {
        this.$b_1 = $p0;
        this.$16_1();
    },
    get_startDate: function SP_UI_ApplicationPages_CalendarNewFormDialog$get_startDate() {
        return this.$19_1;
    },
    set_startDate: function SP_UI_ApplicationPages_CalendarNewFormDialog$set_startDate($p0) {
        this.$19_1 = $p0;
        return $p0;
    },
    get_endDate: function SP_UI_ApplicationPages_CalendarNewFormDialog$get_endDate() {
        return this.$1X_1;
    },
    set_endDate: function SP_UI_ApplicationPages_CalendarNewFormDialog$set_endDate($p0) {
        this.$1X_1 = $p0;
        return $p0;
    },
    get_startTime: function SP_UI_ApplicationPages_CalendarNewFormDialog$get_startTime() {
        return this.$25_1;
    },
    set_startTime: function SP_UI_ApplicationPages_CalendarNewFormDialog$set_startTime($p0) {
        this.$25_1 = $p0;
        return $p0;
    },
    get_endTime: function SP_UI_ApplicationPages_CalendarNewFormDialog$get_endTime() {
        return this.$1s_1;
    },
    set_endTime: function SP_UI_ApplicationPages_CalendarNewFormDialog$set_endTime($p0) {
        this.$1s_1 = $p0;
        return $p0;
    },
    get_contentWindow: function SP_UI_ApplicationPages_CalendarNewFormDialog$get_contentWindow() {
        return (this.$B_1.get_frameElement()).contentWindow;
    },
    add_$9Q_1: function SP_UI_ApplicationPages_CalendarNewFormDialog$add_$9Q_1($p0) {
        (this.get_events()).addHandler('newitemcreated', $p0);
    },
    remove_$9Q_1: function SP_UI_ApplicationPages_CalendarNewFormDialog$remove_$9Q_1($p0) {
        (this.get_events()).removeHandler('newitemcreated', $p0);
    },
    $8c_1: function SP_UI_ApplicationPages_CalendarNewFormDialog$$8c_1($p0) {
        if (!this.$4k_1 && !SP.UI.ApplicationPages.SU.$2((this.get_contentWindow())._spAttachDateTimeFields)) {
            (this.get_contentWindow())._spAttachDateTimeFields(this.$19_1, this.$25_1, this.$1X_1, this.$1s_1);
            var $v_0 = (this.get_contentWindow())._spFreeBusySetEntities;

            if (!SP.UI.ApplicationPages.SU.$Y($v_0)) {
                (this.get_contentWindow())._spFreeBusySetEntities(this.$2O_1);
            }
            this.$4k_1 = true;
        }
    },
    $9P_1: function SP_UI_ApplicationPages_CalendarNewFormDialog$$9P_1($p0, $p1) {
        if ($p0 === 1) {
            var $v_0 = (this.get_events()).getHandler('newitemcreated');

            if ($v_0) {
                $v_0(this, new Sys.EventArgs());
            }
        }
    },
    $16_1: function SP_UI_ApplicationPages_CalendarNewFormDialog$$16_1() {
        this.$3k_1 = false;
        this.$3m_1 = null;
        this.$25_1 = null;
        this.$19_1 = this.$b_1;
        this.$1s_1 = null;
        this.$1X_1 = this.$b_1;
    },
    dispose: function SP_UI_ApplicationPages_CalendarNewFormDialog$dispose() {
        try {
            if (this.$B_1) {
                if (!this.$B_1.get_closed()) {
                    this.$B_1.close(0);
                }
                this.$B_1 = null;
            }
        }
        finally {
            Sys.Component.prototype.dispose.call(this);
        }
    },
    $2l_1: function SP_UI_ApplicationPages_CalendarNewFormDialog$$2l_1($p0) {
        this.$2O_1 = $p0;
    }
};
SP.UI.ApplicationPages.CalendarService = function SP_UI_ApplicationPages_CalendarService($p0, $p1, $p2, $p3) {
    SP.UI.ApplicationPages.CalendarService.initializeBase(this);
    this.$52_1 = $p1;
    this.$5C_1 = $p2;
    this.$3p_1 = $p3;
    this.$70_1 = $p0;
    var $$t_K = this;

    this.$6q_1 = function($p1_0, $p1_1) {
        var $v_0 = $p1_1.get_errorMessage();

        window.setTimeout(function() {
            var $v_1 = new SP.UI.ApplicationPages.CalendarErrorResponse();

            $v_1.Error = $v_0;
            $$t_K.$4G_1($v_1);
        }, 0);
    };
    var $$t_L = this;

    this.$6w_1 = function($p1_0, $p1_1) {
        var $v_2 = ($p1_1.get_executor()).get_webRequest();
        var $v_3 = eval(($p1_1.get_executor()).get_responseData());

        window.setTimeout(function() {
            $$t_L.$7C_1($v_3[0], $v_2);
        }, 0);
    };
    var $$t_M = this;

    this.$74_1 = function($p1_0, $p1_1) {
        var $v_4 = ($p1_1.get_executor()).get_webRequest();
        var $v_5 = eval(($p1_1.get_executor()).get_responseData());

        window.setTimeout(function() {
            $$t_M.$9W_1($v_5[0], $v_4);
        }, 0);
    };
    var $$t_N = this;

    this.$6x_1 = function($p1_0, $p1_1) {
        var $v_6 = ($p1_1.get_executor()).get_webRequest();
        var $v_7 = eval(($p1_1.get_executor()).get_responseData());

        window.setTimeout(function() {
            $$t_N.$5I_1($v_7[0], $v_6);
        }, 0);
    };
};
SP.UI.ApplicationPages.CalendarService.prototype = {
    $5s_1: function SP_UI_ApplicationPages_CalendarService$$5s_1($p0) {
        this.$6z_1 = $p0;
    },
    $5l_1: function SP_UI_ApplicationPages_CalendarService$$5l_1($p0, $p1) {
        if (!SP.UI.ApplicationPages.SU.$2(this.$47_1)) {
            var $v_1 = this.$47_1;

            this.$47_1 = null;
            this.$7C_1($v_1, null);
            return;
        }
        var $v_0 = {};

        $v_0[this.$5J_1] = this.$8N_1;
        $v_0[this.$7G_1] = this.$52_1.toString();
        $v_0[this.$7H_1] = this.$5C_1.toString();
        $v_0[this.$9d_1] = this.$3p_1[this.$3o_1].id;
        $v_0[this.$9k_1] = this.$6z_1;
        if (!SP.UI.ApplicationPages.SU.$2($p1)) {
            $v_0[this.$9h_1] = $p1;
        }
        $v_0[this.$9j_1] = this.$b_1;
        $v_0[this.$9i_1] = $p0.toString();
        this.$5S_1($v_0, this.$6w_1);
    },
    $A8_1: function SP_UI_ApplicationPages_CalendarService$$A8_1() {
        this.$3o_1 = 0;
    },
    $5J_1: 'cmd',
    $7G_1: 'listName',
    $7H_1: 'viewName',
    $9d_1: 'dataSourceId',
    $9k_1: 'viewType',
    $9h_1: 'entity',
    $9j_1: 'selectedDate',
    $9i_1: 'options',
    $7F_1: 'id',
    $9f_1: 'days',
    $9g_1: 'slots',
    $9e_1: 'delete',
    $8N_1: 'query',
    $8O_1: 'resolve',
    $8P_1: 'update',
    $70_1: null,
    $b_1: null,
    $6z_1: null,
    $3o_1: 0,
    $3p_1: null,
    $52_1: null,
    $5C_1: null,
    $47_1: null,
    $4p_1: null,
    $3n_1: null,
    $6q_1: null,
    $74_1: null,
    $6w_1: null,
    $6x_1: null,
    $9W_1: function SP_UI_ApplicationPages_CalendarService$$9W_1($p0, $p1) {
        var $v_0 = (this.get_events()).getHandler('updatesucceed');

        if (!$v_0 || this.$4G_1($p0) || $p1 !== this.$3n_1) {
            return;
        }
        $v_0();
    },
    $5I_1: function SP_UI_ApplicationPages_CalendarService$$5I_1($p0, $p1) {
        var $v_0 = (this.get_events()).getHandler('userresolved');

        if (!$v_0 || this.$4G_1($p0) || $p1 !== this.$3n_1) {
            return;
        }
        var $v_1 = $p0;
        var $v_2 = $v_1.Entities.length;
        var $v_3 = new Array($v_2);

        for (var $v_4 = 0; $v_4 < $v_1.Entities.length; $v_4++) {
            var $v_5 = $v_1.Entities[$v_4];
            var $v_6 = new SP.UI.ApplicationPages.ResolveEntity();

            $v_6.entityType = SP.UI.ApplicationPages.ResolveEntity.typE_USER;
            $v_6.email = $v_5.Email;
            $v_6.accountName = $v_5.AccountName;
            $v_6.displayName = $v_5.DisplayName;
            $v_6.id = $v_5.Id;
            $v_3[$v_4] = $v_6;
        }
        this.$4p_1.members = $v_3;
        $v_0(this.$4p_1);
    },
    $7C_1: function SP_UI_ApplicationPages_CalendarService$$7C_1($p0, $p1) {
        if (this.$4G_1($p0) || $p1 !== this.$3n_1) {
            return;
        }
        var $v_0 = $p0;
        var $v_1 = $v_0.Options;
        var $v_2 = (this.get_events()).getHandler('queryresponse');

        if ($v_2 && ($v_1 & 2 || $v_1 & 32 || $v_1 & 4 || $v_1 & 8)) {
            $v_2($v_0);
        }
        var $v_3 = (this.get_events()).getHandler('itemsreceived');

        if ($v_3 && $v_1 & 1) {
            $v_3(this.$8b_1($v_0.Items));
        }
    },
    $8b_1: function SP_UI_ApplicationPages_CalendarService$$8b_1($p0) {
        var $v_0 = SP.UI.ApplicationPages.SU.$2($p0.Data) ? 0 : $p0.Data.length;
        var $v_1 = this.get_$8W_1();
        var $v_2 = new Array($v_0);
        var $v_3 = $p0.Data;
        var $v_4 = $p0.Strings;

        for (var $v_5 = 0; $v_5 < $v_0; $v_5++) {
            $v_2[$v_5] = new SP.UI.ApplicationPages.CalendarItem($v_3[$v_5], $v_4, $v_1);
        }
        return $v_2;
    },
    $4G_1: function SP_UI_ApplicationPages_CalendarService$$4G_1($p0) {
        if (SP.UI.ApplicationPages.SU.$2($p0.Error)) {
            return false;
        }
        var $v_0 = (this.get_events()).getHandler('serviceerror');

        if ($v_0) {
            if (!SP.UI.ApplicationPages.SU.$5($p0.CorrelationId)) {
                $v_0(String.format('{0} ({1})', $p0.Error, $p0.CorrelationId));
            }
            else {
                $v_0($p0.Error);
            }
        }
        return true;
    },
    $AP_1: function SP_UI_ApplicationPages_CalendarService$$AP_1($p0) {
        this.$47_1 = $p0;
    },
    get_$8W_1: function SP_UI_ApplicationPages_CalendarService$get_$8W_1() {
        return this.$3p_1[this.$3o_1];
    },
    $9R_1: function SP_UI_ApplicationPages_CalendarService$$9R_1() {
        return ++this.$3o_1 < this.$3p_1.length;
    },
    $5r_1: function SP_UI_ApplicationPages_CalendarService$$5r_1($p0) {
        this.$b_1 = $p0;
    },
    $4M_1: function SP_UI_ApplicationPages_CalendarService$$4M_1($p0, $p1, $p2, $p3) {
        var $v_0 = {};

        $v_0[this.$5J_1] = this.$8P_1;
        $v_0[this.$7G_1] = this.$52_1.toString();
        $v_0[this.$7H_1] = this.$5C_1.toString();
        $v_0[this.$7F_1] = $p0;
        $v_0[this.$9f_1] = $p1.toString();
        $v_0[this.$9g_1] = $p2.toString();
        $v_0[this.$9e_1] = $p3 ? 'true' : 'false';
        this.$5S_1($v_0, this.$74_1);
    },
    beginUserResolve: function SP_UI_ApplicationPages_CalendarService$beginUserResolve($p0) {
        this.$4p_1 = $p0;
        var $v_0 = {};

        $v_0[this.$5J_1] = this.$8O_1;
        $v_0[this.$7F_1] = $p0.id;
        this.$5S_1($v_0, this.$6x_1);
    },
    $5S_1: function SP_UI_ApplicationPages_CalendarService$$5S_1($p0, $p1) {
        var $v_0 = new Sys.StringBuilder();
        var $v_1 = '';
        var $$dict_4 = $p0;

        for (var $$key_5 in $$dict_4) {
            var $v_3 = {
                key: $$key_5,
                value: $$dict_4[$$key_5]
            };

            if (SP.UI.ApplicationPages.SU.$2($v_3.value)) {
                continue;
            }
            $v_0.append($v_1);
            $v_0.append($v_3.key);
            $v_0.append('=');
            $v_0.append($v_3.value);
            $v_1 = '&';
        }
        var $v_2 = new SP.PageRequest();

        $v_2.set_expectedContentType('application/json');
        $v_2.add_succeeded($p1);
        $v_2.add_failed(this.$6q_1);
        $v_2.set_url(this.$70_1);
        $v_2.post($v_0.toString());
        this.$3n_1 = $v_2.get_request();
    },
    add_$7M_1: function SP_UI_ApplicationPages_CalendarService$add_$7M_1($p0) {
        (this.get_events()).addHandler('queryresponse', $p0);
    },
    remove_$7M_1: function SP_UI_ApplicationPages_CalendarService$remove_$7M_1($p0) {
        (this.get_events()).removeHandler('queryresponse', $p0);
    },
    add_$At_1: function SP_UI_ApplicationPages_CalendarService$add_$At_1($p0) {
        (this.get_events()).addHandler('updatesucceed', $p0);
    },
    remove_$At_1: function SP_UI_ApplicationPages_CalendarService$remove_$At_1($p0) {
        (this.get_events()).removeHandler('updatesucceed', $p0);
    },
    add_$6e_1: function SP_UI_ApplicationPages_CalendarService$add_$6e_1($p0) {
        (this.get_events()).addHandler('itemsreceived', $p0);
    },
    remove_$6e_1: function SP_UI_ApplicationPages_CalendarService$remove_$6e_1($p0) {
        (this.get_events()).removeHandler('itemsreceived', $p0);
    },
    add_$8q_1: function SP_UI_ApplicationPages_CalendarService$add_$8q_1($p0) {
        (this.get_events()).addHandler('serviceerror', $p0);
    },
    remove_$8q_1: function SP_UI_ApplicationPages_CalendarService$remove_$8q_1($p0) {
        (this.get_events()).removeHandler('serviceerror', $p0);
    },
    add_$7w_1: function SP_UI_ApplicationPages_CalendarService$add_$7w_1($p0) {
        (this.get_events()).addHandler('userresolved', $p0);
    },
    remove_$7w_1: function SP_UI_ApplicationPages_CalendarService$remove_$7w_1($p0) {
        (this.get_events()).removeHandler('userresolved', $p0);
    }
};
SP.UI.ApplicationPages.DateTimeFields = function SP_UI_ApplicationPages_DateTimeFields() {
    this.$2N_0 = -1;
    var $v_0 = 'SP.UI.ApplicationPages.DateTimeFields.ensureInstance().onChange();';
    var $v_1 = window.g_strDateTimeControlIDs;

    if (SP.UI.ApplicationPages.SU.$2($v_1)) {
        return;
    }
    this.$1Y_0 = $v_1['SPEventDate'];
    this.$1F_0 = $v_1['SPEndDate'];
    this.$1d_0 = $v_1['windowStart'];
    var $v_2;

    if (!SP.UI.ApplicationPages.SU.$2(this.$1d_0)) {
        $v_2 = $get(this.$1d_0);
        $v_2.setAttribute('onvaluesetfrompicker', $v_0);
        this.$1k_0(this.$1d_0);
    }
    else {
        if (!SP.UI.ApplicationPages.SU.$2(this.$1Y_0)) {
            $v_2 = $get(this.$1Y_0);
            $v_2.setAttribute('onvaluesetfrompicker', $v_0);
            this.$1k_0(this.$1Y_0);
        }
        if (!SP.UI.ApplicationPages.SU.$2(this.$1F_0)) {
            $v_2 = $get(this.$1F_0);
            $v_2.setAttribute('onvaluesetfrompicker', $v_0);
            this.$1k_0(this.$1F_0);
        }
    }
    this.$45_0 = this.$1Y_0 + 'Hours';
    this.$46_0 = this.$1Y_0 + 'Minutes';
    this.$33_0 = this.$1F_0 + 'Hours';
    this.$36_0 = this.$1F_0 + 'Minutes';
    this.$1k_0(this.$45_0);
    this.$1k_0(this.$46_0);
    this.$1k_0(this.$33_0);
    this.$1k_0(this.$36_0);
    this.$1A_0();
};
SP.UI.ApplicationPages.DateTimeFields.ensureInstance = function SP_UI_ApplicationPages_DateTimeFields$ensureInstance() {
    if (!SP.UI.ApplicationPages.DateTimeFields.$3t) {
        SP.UI.ApplicationPages.DateTimeFields.$3t = new SP.UI.ApplicationPages.DateTimeFields();
    }
    return SP.UI.ApplicationPages.DateTimeFields.$3t;
};
SP.UI.ApplicationPages.DateTimeFields.init = function SP_UI_ApplicationPages_DateTimeFields$init(startDate, startTime, endDate, endTime) {
    (SP.UI.ApplicationPages.DateTimeFields.ensureInstance()).$AU_0(startDate, startTime, endDate, endTime);
};
SP.UI.ApplicationPages.DateTimeFields.prototype = {
    $1Y_0: null,
    $45_0: null,
    $46_0: null,
    $1F_0: null,
    $33_0: null,
    $36_0: null,
    $1d_0: null,
    $b_0: null,
    $1V_0: false,
    $1b_0: 0,
    $2a_0: 0,
    $35_0: 0,
    $1p_0: 0,
    $6s_0: false,
    onChange: function SP_UI_ApplicationPages_DateTimeFields$onChange() {
        var $v_0 = this.$b_0;
        var $v_1 = this.$1V_0;
        var $v_2 = this.$1b_0;
        var $v_3 = this.$2a_0;
        var $v_4 = this.$1p_0;

        this.$1A_0();
        if (this.$1V_0) {
            if ($v_4 >= 0 && ($v_2 !== this.$1b_0 || $v_3 !== this.$2a_0)) {
                var $v_5 = this.$1b_0 * 60 + this.$2a_0 + $v_4;
                var $v_6 = new Date();

                this.$2N_0 = Math.floor($v_5 / 60) % 24;
                this.$35_0 = $v_5 % 60;
                $v_6.setHours(this.$2N_0);
                $v_6.setMinutes(this.$35_0);
                this.$5V_0(this.$33_0, this.$36_0, $v_6);
                this.$1p_0 = $v_4;
            }
        }
        else if ($v_1 && $v_0 !== this.$b_0) {
            this.$2j_0(this.$1F_0, this.$b_0);
            this.$1V_0 = true;
        }
        if (SP.UI.ApplicationPages.FreeBusyContainer.instance) {
            SP.UI.ApplicationPages.FreeBusyContainer.instance.onDateChangedByPicker();
        }
    },
    $1A_0: function SP_UI_ApplicationPages_DateTimeFields$$1A_0() {
        this.$1V_0 = true;
        this.$1b_0 = this.$7J_0(this.$45_0);
        this.$2a_0 = this.$7K_0(this.$46_0);
        this.$2N_0 = this.$7J_0(this.$33_0);
        this.$35_0 = this.$7K_0(this.$36_0);
        if (!SP.UI.ApplicationPages.SU.$2(this.$1d_0)) {
            this.$b_0 = this.$5K_0(this.$1d_0);
        }
        else {
            this.$b_0 = this.$5K_0(this.$1Y_0);
            if (this.$5K_0(this.$1F_0) !== this.$b_0) {
                this.$1V_0 = false;
            }
        }
        if (this.$1V_0) {
            this.$1p_0 = this.$2N_0 * 60 + this.$35_0 - (this.$1b_0 * 60 + this.$2a_0);
        }
        else {
            this.$1p_0 = 0;
        }
        if (this.$1p_0 < 0) {
            this.$1p_0 += 1440;
        }
    },
    $AU_0: function SP_UI_ApplicationPages_DateTimeFields$$AU_0($p0, $p1, $p2, $p3) {
        this.$5V_0(this.$45_0, this.$46_0, $p1);
        this.$5V_0(this.$33_0, this.$36_0, $p3);
        if (!SP.UI.ApplicationPages.SU.$2(this.$1d_0)) {
            this.$2j_0(this.$1d_0, $p0);
        }
        else {
            this.$2j_0(this.$1Y_0, $p0);
            this.$2j_0(this.$1F_0, $p2);
            this.$1V_0 = $p0 === $p2;
        }
        if (!SP.UI.ApplicationPages.SU.$2($p1) || !SP.UI.ApplicationPages.SU.$2($p3)) {
            this.$6s_0 = true;
            this.$1A_0();
            if (SP.UI.ApplicationPages.FreeBusyContainer.instance) {
                SP.UI.ApplicationPages.FreeBusyContainer.instance.onDateChangedByPicker();
            }
        }
        else if (!this.$6s_0) {
            this.$1p_0 = 60;
            this.$1b_0 = -1;
            this.onChange();
        }
    },
    $2j_0: function SP_UI_ApplicationPages_DateTimeFields$$2j_0($p0, $p1) {
        var $v_0 = $get($p0);

        if (!$v_0 || SP.UI.ApplicationPages.SU.$5($p1)) {
            return;
        }
        $v_0.value = $p1;
    },
    $5V_0: function SP_UI_ApplicationPages_DateTimeFields$$5V_0($p0, $p1, $p2) {
        this.$AK_0($p0, $p2);
        this.$AL_0($p1, $p2);
    },
    $AK_0: function SP_UI_ApplicationPages_DateTimeFields$$AK_0($p0, $p1) {
        var $v_0 = $get($p0);

        if (!$v_0 || SP.UI.ApplicationPages.SU.$2($p1)) {
            return;
        }
        $v_0.selectedIndex = $p1.getHours();
    },
    $AL_0: function SP_UI_ApplicationPages_DateTimeFields$$AL_0($p0, $p1) {
        var $v_0 = $get($p0);

        if (!$v_0 || SP.UI.ApplicationPages.SU.$2($p1)) {
            return;
        }
        var $v_1 = $v_0.options;

        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = parseInt($v_1[$v_2].value);

            if ($v_3 === $p1.getMinutes()) {
                $v_0.selectedIndex = $v_2;
                return;
            }
        }
    },
    $5K_0: function SP_UI_ApplicationPages_DateTimeFields$$5K_0($p0) {
        var $v_0 = $get($p0);

        if (!$v_0) {
            return '';
        }
        else {
            return $v_0.value;
        }
    },
    $7J_0: function SP_UI_ApplicationPages_DateTimeFields$$7J_0($p0) {
        var $v_0 = $get($p0);

        if (!$v_0) {
            return -1;
        }
        else {
            return $v_0.selectedIndex;
        }
    },
    $7K_0: function SP_UI_ApplicationPages_DateTimeFields$$7K_0($p0) {
        var $v_0 = $get($p0);

        if (!$v_0) {
            return 0;
        }
        var $v_1 = $v_0.options[$v_0.selectedIndex];

        return parseInt($v_1.value);
    },
    $1k_0: function SP_UI_ApplicationPages_DateTimeFields$$1k_0($p0) {
        var $v_0 = $get($p0);

        if ($v_0) {
            var $$t_3 = this;

            $addHandler($v_0, 'change', function($p1_0) {
                $$t_3.onChange();
            });
        }
    }
};
SP.UI.ApplicationPages.CalendarInfoGrid = function SP_UI_ApplicationPages_CalendarInfoGrid($p0) {
    this.$$d_$8T_0 = Function.createDelegate(this, this.$8T_0);
    this.$$d_$8S_0 = Function.createDelegate(this, this.$8S_0);
    this.$3E_0 = [];
    this.$3y_0 = [];
    this.$4h_0 = [];
    this.$2W_0 = -1;
    this.$24_0 = -1;
    this.$1r_0 = -1;
    this.$s_0 = $p0;
};
SP.UI.ApplicationPages.CalendarInfoGrid.prototype = {
    $3q_0: 0,
    $3r_0: 0,
    $x_0: null,
    $s_0: null,
    $37_0: false,
    $5f_0: function SP_UI_ApplicationPages_CalendarInfoGrid$$5f_0($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        this.$s_0($p0, $p1, $p2, $p3, $p4, $p5, $p6);
        if (this.$2W_0 !== -1) {
            $p6.$1_0 = this.$2W_0;
        }
        if ($p0) {
            Array.add(this.$2p_0(this.$3y_0, $p2), $p6);
        }
        else {
            this.$As_0($p4, $p5);
            Array.add(this.$2p_0(this.$3E_0, $p2), $p6);
        }
        Array.add(this.$4h_0, $p6);
    },
    get_$75_0: function SP_UI_ApplicationPages_CalendarInfoGrid$get_$75_0() {
        this.$3Z_0();
        return this.$3q_0;
    },
    get_$76_0: function SP_UI_ApplicationPages_CalendarInfoGrid$get_$76_0() {
        this.$3Z_0();
        return this.$3r_0;
    },
    $6K_0: function SP_UI_ApplicationPages_CalendarInfoGrid$$6K_0() {
        return this.$4h_0;
    },
    $3d_0: function SP_UI_ApplicationPages_CalendarInfoGrid$$3d_0($p0) {
        this.$3Z_0();
        var $v_0 = this.$x_0[$p0];

        if (SP.UI.ApplicationPages.SU.$Y($v_0)) {
            $v_0 = new Array(0);
            this.$x_0[$p0] = $v_0;
        }
        return $v_0;
    },
    $4c_0: function SP_UI_ApplicationPages_CalendarInfoGrid$$4c_0($p0) {
        this.$3Z_0();
        return this.$2p_0(this.$3E_0, $p0);
    },
    $2p_0: function SP_UI_ApplicationPages_CalendarInfoGrid$$2p_0($p0, $p1) {
        var $v_0 = $p0[$p1];

        if (!$v_0) {
            $v_0 = [];
            $p0[$p1] = $v_0;
        }
        return $v_0;
    },
    $As_0: function SP_UI_ApplicationPages_CalendarInfoGrid$$As_0($p0, $p1) {
        if (this.$24_0 === -1 && this.$1r_0 === -1) {
            this.$24_0 = $p0;
            this.$1r_0 = $p0 + $p1 - 1;
        }
        else {
            this.$24_0 = Math.min($p0, this.$24_0);
            this.$1r_0 = Math.max($p0 + $p1 - 1, this.$1r_0);
        }
    },
    $8y_0: function SP_UI_ApplicationPages_CalendarInfoGrid$$8y_0($p0) {
        var $v_0 = this.$x_0[$p0];
        var $v_1 = $v_0.length;

        for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
            var $v_3 = $v_0[$v_2];

            if (!$v_3) {
                return $v_2;
            }
        }
        return $v_1;
    },
    $3Z_0: function SP_UI_ApplicationPages_CalendarInfoGrid$$3Z_0() {
        if (this.$x_0) {
            return;
        }
        this.$x_0 = new Array(0);
        var $v_0 = Math.max(this.$3y_0.length, this.$3E_0.length);

        for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
            this.$x_0[$v_1] = [];
        }
        for (var $v_2 = 0; $v_2 < $v_0; $v_2++) {
            var $v_3 = this.$2p_0(this.$3y_0, $v_2);

            if (!$v_3.length) {
                continue;
            }
            $v_3.sort(this.$$d_$8S_0);
            var $v_4 = $v_3;

            for (var $v_5 = 0; $v_5 < $v_4.length; $v_5++) {
                var $v_6 = $v_4[$v_5];
                var $v_7 = this.$8y_0($v_2);

                this.$x_0[$v_2][$v_7] = $v_6;
                this.$3r_0 = Math.max($v_7 + 1, this.$3r_0);
                var $v_8 = $v_6.$Q_0;

                if ($v_8 > 1) {
                    var $v_9 = new SP.UI.ApplicationPages.DivRenderingInfo(2, $v_6.$c_0);

                    for (var $v_A = 1; $v_A < $v_8; $v_A++) {
                        if (SP.UI.ApplicationPages.SU.$Y(this.$x_0[$v_2 + $v_A])) {
                            this.$x_0[$v_2 + $v_A] = [];
                        }
                        this.$x_0[$v_2 + $v_A][$v_7] = $v_9;
                    }
                }
            }
            this.$3q_0 = this.$3r_0;
        }
        for (var $v_B = 0; $v_B < $v_0; $v_B++) {
            var $v_C = this.$2p_0(this.$3E_0, $v_B);

            if (!$v_C.length) {
                continue;
            }
            var $v_D = this.$x_0[$v_B].length;
            var $v_E = $v_C.length;

            if (!SP.UI.ApplicationPages.SU.$Y($v_C) && $v_E > 0) {
                $v_C.sort(this.$$d_$8T_0);
                for (var $v_F = 0; $v_F < $v_E; $v_F++, $v_D++) {
                    this.$x_0[$v_B][$v_D] = $v_C[$v_F];
                }
            }
            this.$3q_0 = Math.max($v_D, this.$3q_0);
        }
    },
    $8S_0: function SP_UI_ApplicationPages_CalendarInfoGrid$$8S_0($p0, $p1) {
        var $v_0 = $p0;
        var $v_1 = $p1;
        var $v_2 = $v_0.$c_0;
        var $v_3 = $v_1.$c_0;

        if ($v_2.$G_0 !== $v_3.$G_0) {
            return $v_2.$G_0 - $v_3.$G_0;
        }
        return $v_3.$i_0 - $v_2.$i_0;
    },
    $8T_0: function SP_UI_ApplicationPages_CalendarInfoGrid$$8T_0($p0, $p1) {
        var $v_0 = $p0;
        var $v_1 = $p1;
        var $v_2 = $v_0.$c_0;
        var $v_3 = $v_1.$c_0;

        if ($v_2.$G_0 !== $v_3.$G_0) {
            return $v_2.$G_0 - $v_3.$G_0;
        }
        var $v_4 = $v_2.$1S_0 * 60 + $v_2.$1f_0;
        var $v_5 = $v_3.$1S_0 * 60 + $v_3.$1f_0;
        var $v_6 = $v_4 - $v_5;

        if (!$v_6) {
            $v_6 = $v_3.$i_0 - $v_2.$i_0;
        }
        return $v_6;
    }
};
SP.UI.ApplicationPages.TimeSlotRenderingGroup = function SP_UI_ApplicationPages_TimeSlotRenderingGroup() {
    this.$2Y_0 = [];
    this.$23_0 = -1;
    this.$2M_0 = -1;
};
SP.UI.ApplicationPages.TimeSlotRenderingGroup.prototype = {
    $9K_0: 30,
    $1z_0: 0,
    $2L_0: 0,
    $M_0: function SP_UI_ApplicationPages_TimeSlotRenderingGroup$$M_0($p0, $p1) {
        if (!this.$2L_0) {
            return true;
        }
        return this.$7Z_0($p0, $p1, this.$23_0, this.$2M_0 - this.$23_0 + 1);
    },
    $5d_0: function SP_UI_ApplicationPages_TimeSlotRenderingGroup$$5d_0($p0, $p1, $p2) {
        if (this.$23_0 === -1 && this.$2M_0 === -1) {
            this.$23_0 = $p0;
            this.$2M_0 = $p0 + $p1 - 1;
        }
        else {
            this.$23_0 = Math.min($p0, this.$23_0);
            this.$2M_0 = Math.max($p0 + $p1 - 1, this.$2M_0);
        }
        var $v_0 = new SP.UI.ApplicationPages.TimeSlotInfo();

        $v_0.$3N_0 = $p0;
        $v_0.$3O_0 = $p1;
        $v_0.$4e_0 = $p2;
        $v_0.$4J_0 = 1;
        var $v_1 = this.$8w_0($p0);

        if ($v_1 === -1) {
            $p2.$R_0 = -1;
            return;
        }
        $v_0.$1M_0 = $v_1;
        this.$2Y_0[this.$2L_0++] = $v_0;
        this.$1z_0 = Math.max(this.$1z_0, $v_1 + 1);
    },
    $8w_0: function SP_UI_ApplicationPages_TimeSlotRenderingGroup$$8w_0($p0) {
        for (var $v_0 = 0; $v_0 < this.$9K_0; $v_0++) {
            if (this.$6d_0($p0, 1, $v_0)) {
                return $v_0;
            }
        }
        return -1;
    },
    $6d_0: function SP_UI_ApplicationPages_TimeSlotRenderingGroup$$6d_0($p0, $p1, $p2) {
        for (var $v_0 = 0; $v_0 < this.$2L_0; $v_0++) {
            var $v_1 = this.$2Y_0[$v_0];

            if ($v_1.$1M_0 !== $p2) {
                continue;
            }
            if (this.$7Z_0($p0, $p1, $v_1.$3N_0, $v_1.$3O_0)) {
                return false;
            }
        }
        return true;
    },
    $7r_0: function SP_UI_ApplicationPages_TimeSlotRenderingGroup$$7r_0() {
        for (var $v_0 = 0; $v_0 < this.$2L_0; $v_0++) {
            var $v_1 = this.$2Y_0[$v_0];

            for (var $v_2 = $v_1.$1M_0 + 1; $v_2 < this.$1z_0; $v_2++) {
                if (this.$6d_0($v_1.$3N_0, $v_1.$3O_0, $v_2)) {
                    $v_1.$4J_0++;
                }
                else {
                    break;
                }
            }
        }
    },
    $7Z_0: function SP_UI_ApplicationPages_TimeSlotRenderingGroup$$7Z_0($p0, $p1, $p2, $p3) {
        return $p0 <= $p2 && $p0 + $p1 > $p2 || $p2 <= $p0 && $p2 + $p3 > $p0;
    },
    $5j_0: function SP_UI_ApplicationPages_TimeSlotRenderingGroup$$5j_0() {
        this.$7r_0();
        for (var $v_0 = 0; $v_0 < this.$2L_0; $v_0++) {
            var $v_1 = this.$2Y_0[$v_0];
            var $v_2 = $v_1.$4e_0;

            $v_2.$1_0 = $v_1.$3N_0;
            $v_2.$1N_0 = $v_1.$3O_0;
            $v_2.$R_0 = $v_1.$1M_0;
            $v_2.$z_0 = $v_1.$4J_0;
            $v_2.$2o_0 = this.$1z_0;
        }
    },
    $81_0: function SP_UI_ApplicationPages_TimeSlotRenderingGroup$$81_0() {
        this.$7r_0();
        for (var $v_0 = 0; $v_0 < this.$2L_0; $v_0++) {
            var $v_1 = this.$2Y_0[$v_0];
            var $v_2 = $v_1.$4e_0;

            $v_2.$J_0 = $v_1.$3N_0;
            $v_2.$Q_0 = $v_1.$3O_0;
            $v_2.$R_0 = $v_1.$1M_0;
            $v_2.$z_0 = $v_1.$4J_0;
            $v_2.$2o_0 = this.$1z_0;
        }
    }
};
SP.UI.ApplicationPages.DatePartitionSorter = function SP_UI_ApplicationPages_DatePartitionSorter($p0, $p1) {
    this.$5F_0 = 1440;
    this.$2Z_0 = $p0;
    this.$4s_0 = $p1;
};
SP.UI.ApplicationPages.DatePartitionSorter.prototype = {
    sort: function SP_UI_ApplicationPages_DatePartitionSorter$sort($p0, $p1) {
        var $v_0 = $p0.length;

        for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
            var $v_2 = $p0[$v_1];

            if (this.$9a_0($v_2)) {
                continue;
            }
            this.$AX_0($p1, $v_2);
        }
    },
    $X_0: 7,
    $AW_0: 2,
    $7m_0: 30,
    $2Z_0: 0,
    $4s_0: 0,
    $AX_0: function SP_UI_ApplicationPages_DatePartitionSorter$$AX_0($p0, $p1) {
        var $v_0 = $p1.$10_0;

        if (this.$9E_0($p1)) {
            $v_0--;
        }
        var $v_1 = null;
        var $v_2 = Math.max($p1.$G_0, this.$2Z_0);
        var $v_3 = Math.min($v_0, this.$4s_0);
        var $v_4 = this.$3i_0($v_2);
        var $v_5 = this.$3i_0($v_3);

        for (var $v_6 = $v_4; $v_6 <= $v_5; $v_6++) {
            var $v_7 = $v_6 * this.$X_0 + this.$2Z_0;
            var $v_8 = $v_7 + (this.$X_0 - 1);
            var $v_9 = $v_2;

            if ($v_6 !== $v_4) {
                $v_9 = $v_7;
            }
            var $v_A = Math.min($v_8, $v_3);

            if ($p1.$o_0()) {
                var $v_B = this.$97_0($p0[$v_6], $p1, $v_0, $v_9, $v_A, $v_7, $v_8);

                if ($v_1) {
                    $v_B.$2B_0 = $v_1;
                    $v_1.$3L_0 = $v_B;
                }
                $v_1 = $v_B;
            }
            else {
                for (var $v_C = $v_9; $v_C <= $v_A; $v_C++) {
                    var $v_D = this.$98_0($p0[$v_6], $p1, $v_C);

                    if ($v_1) {
                        $v_D.$2B_0 = $v_1;
                        $v_1.$3L_0 = $v_D;
                    }
                    $v_1 = $v_D;
                }
            }
        }
    },
    $9E_0: function SP_UI_ApplicationPages_DatePartitionSorter$$9E_0($p0) {
        if ($p0.$10_0 !== $p0.$G_0) {
            var $v_0 = $p0.$1S_0 * 60 + $p0.$1f_0 + $p0.$i_0;

            if (0 === $v_0 % this.$5F_0) {
                return true;
            }
        }
        return false;
    },
    $9M_0: function SP_UI_ApplicationPages_DatePartitionSorter$$9M_0($p0) {
        return Math.max(1, Math.ceil($p0 / this.$7m_0));
    },
    $Ae_0: function SP_UI_ApplicationPages_DatePartitionSorter$$Ae_0($p0) {
        return $p0.$1S_0 * this.$AW_0 + Math.floor($p0.$1f_0 / this.$7m_0);
    },
    $98_0: function SP_UI_ApplicationPages_DatePartitionSorter$$98_0($p0, $p1, $p2) {
        var $v_0 = $p1.$G_0 === $p2;
        var $v_1 = this.$90_0($p1, $v_0);
        var $v_2 = this.$6f_0($p2);
        var $v_3 = this.$3i_0($p2);
        var $v_4;
        var $v_5 = new SP.UI.ApplicationPages.DivRenderingInfo(3, $p1);

        if (!$v_0) {
            $v_4 = 0;
            $v_5.$5X_0 = true;
        }
        else {
            if ($v_1 !== $p1.$i_0) {
                $v_5.$68_0 = true;
            }
            $v_4 = this.$Ae_0($p1);
        }
        $p0.$5f_0(false, $v_3, $v_2, 1, $v_4, this.$9M_0($v_1), $v_5);
        return $v_5;
    },
    $97_0: function SP_UI_ApplicationPages_DatePartitionSorter$$97_0($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = $p4 - $p3 + 1;
        var $v_1 = $p5 > $p1.$G_0;
        var $v_2 = $p6 < $p2;
        var $v_3 = this.$3i_0($p3);
        var $v_4 = this.$6f_0($p3);
        var $v_5 = new SP.UI.ApplicationPages.DivRenderingInfo(1, $p1);

        $p0.$5f_0(true, $v_3, $v_4, $v_0, 0, 0, $v_5);
        return $v_5;
    },
    $90_0: function SP_UI_ApplicationPages_DatePartitionSorter$$90_0($p0, $p1) {
        if ($p0.$G_0 === $p0.$10_0) {
            return $p0.$i_0;
        }
        var $v_0 = $p0.$1S_0 * 60 + $p0.$1f_0;
        var $v_1 = this.$5F_0 - $v_0;

        if ($p1) {
            return $v_1;
        }
        else {
            return $p0.$i_0 - $v_1;
        }
    },
    $9a_0: function SP_UI_ApplicationPages_DatePartitionSorter$$9a_0($p0) {
        return $p0.$G_0 > this.$4s_0 || $p0.$10_0 < this.$2Z_0;
    },
    $3i_0: function SP_UI_ApplicationPages_DatePartitionSorter$$3i_0($p0) {
        var $v_0 = $p0 - this.$2Z_0;

        return Math.floor($v_0 / this.$X_0);
    },
    $6f_0: function SP_UI_ApplicationPages_DatePartitionSorter$$6f_0($p0) {
        var $v_0 = $p0 - this.$2Z_0;

        return $v_0 % this.$X_0;
    }
};
SP.UI.ApplicationPages.MultidayDragTargetTableAdapter = function SP_UI_ApplicationPages_MultidayDragTargetTableAdapter($p0) {
    this.$0_0 = $p0;
    this.$59_0 = this.$0_0.offsetTop(SP.UI.ApplicationPages.DetailCalendarTable.$1L);
};
SP.UI.ApplicationPages.MultidayDragTargetTableAdapter.prototype = {
    $0_0: null,
    $59_0: 0,
    get_rawElement: function SP_UI_ApplicationPages_MultidayDragTargetTableAdapter$get_rawElement() {
        return this.$0_0.get_rawElement();
    },
    offsetLeft: function SP_UI_ApplicationPages_MultidayDragTargetTableAdapter$offsetLeft($p0) {
        return this.$0_0.offsetLeft($p0);
    },
    xPosToCol: function SP_UI_ApplicationPages_MultidayDragTargetTableAdapter$xPosToCol($p0) {
        return this.$0_0.xPosToCol($p0);
    },
    isInside: function SP_UI_ApplicationPages_MultidayDragTargetTableAdapter$isInside($p0) {
        return this.xPosToCol($p0.x) !== -1 && this.yPosToRow($p0.y) !== -1;
    },
    offsetTop: function SP_UI_ApplicationPages_MultidayDragTargetTableAdapter$offsetTop($p0) {
        return this.$59_0;
    },
    yPosToRow: function SP_UI_ApplicationPages_MultidayDragTargetTableAdapter$yPosToRow($p0) {
        if (this.$59_0 > $p0) {
            return -1;
        }
        else if (this.$0_0.offsetTop((this.$0_0.$2u_3()).get_$m_0()) > $p0) {
            return 0;
        }
        else {
            return -1;
        }
    }
};
SP.UI.ApplicationPages.DailyCalendarTable = function SP_UI_ApplicationPages_DailyCalendarTable($p0) {
    SP.UI.ApplicationPages.DailyCalendarTable.initializeBase(this, [$p0]);
};
SP.UI.ApplicationPages.DailyCalendarTable.prototype = {
    get_$2e_2: function SP_UI_ApplicationPages_DailyCalendarTable$get_$2e_2() {
        return 1;
    },
    calcMaxWeekNameWidth: function SP_UI_ApplicationPages_DailyCalendarTable$calcMaxWeekNameWidth() {
        return 0;
    }
};
SP.UI.ApplicationPages.WeeklyCalendarTable = function SP_UI_ApplicationPages_WeeklyCalendarTable($p0) {
    SP.UI.ApplicationPages.WeeklyCalendarTable.initializeBase(this, [$p0]);
};
SP.UI.ApplicationPages.WeeklyCalendarTable.prototype = {
    calcMaxWeekNameWidth: function SP_UI_ApplicationPages_WeeklyCalendarTable$calcMaxWeekNameWidth() {
        var $v_0 = document.createElement('DIV');

        $v_0.className = 'ms-acal-offscreen';
        (this.get_element()).appendChild($v_0);
        var $v_1 = 0;
        var $v_2 = (this.get_rows())[0].getElementsByTagName('NOBR');

        for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
            $v_0.innerHTML = '00 ' + (SP.UI.ApplicationPages.ElementUtility.$l($v_2[$v_3])).innerHTML;
            $v_1 = Math.max($v_1, $v_0.offsetWidth + 16);
        }
        (this.get_element()).removeChild($v_0);
        return $v_1;
    }
};
SP.UI.ApplicationPages.DetailCalendarTable = function SP_UI_ApplicationPages_DetailCalendarTable($p0) {
    this.$2K_3 = -1;
    SP.UI.ApplicationPages.DetailCalendarTable.initializeBase(this, [$p0]);
    this.$6_3 = new SP.UI.ApplicationPages.TimeScale(this.$$d_$1m_2);
    this.$1J_3 = this.$9U_3;
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
        this.m_adjustX = 1;
        this.m_adjustY = 1;
        this.m_endAdjustX = SP.UI.ApplicationPages.RibbonConnector.$d() ? 4 : 1;
    }
    else if (Sys.Browser.agent === Sys.Browser.Firefox) {
        this.m_adjustX = 0;
        this.m_adjustY = 0;
    }
    else if (Sys.Browser.agent === Sys.Browser.Safari) {
        this.m_adjustX = 1;
        this.m_adjustY = 1;
    }
};
SP.UI.ApplicationPages.DetailCalendarTable.prototype = {
    $9U_3: 2,
    $h_3: 48,
    $6_3: null,
    $1J_3: 0,
    $6j_3: 0,
    $6g_3: 0,
    $2u_3: function SP_UI_ApplicationPages_DetailCalendarTable$$2u_3() {
        return this.$6_3;
    },
    $2t_2: function SP_UI_ApplicationPages_DetailCalendarTable$$2t_2($p0) {
        return (this.get_rows())[$p0 + this.$1J_3];
    },
    get_$27_2: function SP_UI_ApplicationPages_DetailCalendarTable$get_$27_2() {
        return this.$h_3;
    },
    yPosToRow: function SP_UI_ApplicationPages_DetailCalendarTable$yPosToRow($p0) {
        var $v_0 = this.$6_3.get_$1B_0();
        var $v_1 = this.$6_3.get_$m_0();

        if (this.offsetTop($v_1) > $p0) {
            return -1;
        }
        for (var $v_2 = $v_1; $v_2 < $v_0 + 1; $v_2++) {
            if (this.offsetTop($v_2 + 1) > $p0) {
                return $v_2;
            }
        }
        return -1;
    },
    offsetTop: function SP_UI_ApplicationPages_DetailCalendarTable$offsetTop($p0) {
        if ($p0 === SP.UI.ApplicationPages.DetailCalendarTable.$1L) {
            return this.get_alldayTop();
        }
        else {
            return SP.UI.ApplicationPages.CalendarTableBase.prototype.offsetTop.call(this, $p0);
        }
    },
    get_alldayTop: function SP_UI_ApplicationPages_DetailCalendarTable$get_alldayTop() {
        if (this.$2K_3 === -1) {
            var $v_0 = (this.get_rows())[this.$1J_3 - 1];

            if ($v_0.style.display !== 'none') {
                this.$2K_3 = this.$26_2 + ($v_0.getElementsByTagName('TD'))[0].offsetTop;
            }
        }
        return this.$2K_3;
    },
    get_$2J_2: function SP_UI_ApplicationPages_DetailCalendarTable$get_$2J_2() {
        return this.$6j_3;
    },
    get_$5i_3: function SP_UI_ApplicationPages_DetailCalendarTable$get_$5i_3() {
        return this.$6g_3 + 2;
    },
    invalidateLocalCache: function SP_UI_ApplicationPages_DetailCalendarTable$invalidateLocalCache() {
        this.$2K_3 = -1;
        this.$6_3.$k_0();
    },
    initTableMetrixInfo: function SP_UI_ApplicationPages_DetailCalendarTable$initTableMetrixInfo() {
        this.$6j_3 = this.$1m_2(this.$6_3.get_$m_0());
        this.$6g_3 = (SP.UI.ApplicationPages.ElementUtility.$l((this.get_rows())[0])).offsetHeight;
    },
    calcOffsetTopArray: function SP_UI_ApplicationPages_DetailCalendarTable$calcOffsetTopArray() {
        var $v_0 = this.get_rows();
        var $v_1 = this.$26_2 + this.m_adjustY;
        var $v_2 = this.$1J_3;
        var $v_3 = new Array(this.$h_3 + 1);
        var $v_4 = -1;

        for (var $v_5 = 0; $v_5 < this.$h_3; $v_5++) {
            var $v_6 = $v_0[$v_5 + $v_2];

            if ($v_6.style.display !== 'none') {
                $v_6 = ($v_6.getElementsByTagName('TD'))[0];
                $v_3[$v_5] = $v_1 + $v_6.offsetTop;
                $v_4 = $v_3[$v_5] + $v_6.offsetHeight;
            }
            else {
                $v_3[$v_5] = $v_4;
            }
        }
        $v_3[this.$h_3] = $v_4;
        this.$2K_3 = -1;
        return $v_3;
    },
    calcOffsetLeftArray: function SP_UI_ApplicationPages_DetailCalendarTable$calcOffsetLeftArray() {
        var $v_0 = new Array(this.get_$2e_2() + 1);
        var $v_1 = this.$8z_3();
        var $v_2 = $v_1.getElementsByTagName('TD');

        if (this.$u_2) {
            var $v_3 = this.$1c_2;

            for (var $v_4 = 0; $v_4 < $v_2.length; $v_4++) {
                $v_0[$v_4 + 1] = $v_3 + $v_2[$v_4].offsetLeft;
            }
            $v_0[0] = $v_0[1] + $v_2[0].offsetWidth;
        }
        else {
            var $v_5 = this.$1c_2 + this.m_adjustX;

            for (var $v_6 = 0; $v_6 < $v_2.length; $v_6++) {
                $v_0[$v_6] = $v_5 + $v_2[$v_6].offsetLeft;
            }
            $v_0[$v_2.length] = $v_0[$v_2.length - 1] + $v_2[$v_2.length - 1].offsetWidth - this.m_endAdjustX;
        }
        return $v_0;
    },
    $8z_3: function SP_UI_ApplicationPages_DetailCalendarTable$$8z_3() {
        var $v_0 = this.get_rows();

        for (var $v_1 = this.$1J_3; $v_1 < $v_0.length; $v_1++) {
            if ($v_0[$v_1].style.display !== 'none') {
                return $v_0[$v_1];
            }
        }
        return null;
    },
    $4Z_3: function SP_UI_ApplicationPages_DetailCalendarTable$$4Z_3($p0, $p1) {
        if ($p0 === -1 || $p1 === -1) {
            return;
        }
        var $v_0 = this.$6_3.get_$m_0();
        var $v_1 = this.$6_3.get_$1B_0();
        var $v_2 = this.$6_3.get_$7z_0();
        var $v_3 = $p0 * 2;

        this.$69_3($v_3);
        $v_3 = Math.min($v_0, $v_3);
        var $v_4 = $p1 * 2 + 1;

        $v_4 = Math.max($v_4, $v_1);
        var $v_5 = this.get_rows();

        for (var $v_6 = $v_3; $v_6 <= $v_4; $v_6++) {
            if ($v_6 < $v_0 || $v_6 > $v_1) {
                $v_5[$v_6 + this.$1J_3].style.display = $v_2;
            }
        }
        this.$1T_2();
        this.$6_3.$k_0();
    },
    $69_3: function SP_UI_ApplicationPages_DetailCalendarTable$$69_3($p0) {
        var $v_0 = this.$6_3.get_$m_0();

        if ($v_0 > $p0) {
            SP.UI.ApplicationPages.TimeScale.$6V((this.get_rows())[this.$1J_3 + $v_0]);
            SP.UI.ApplicationPages.TimeScale.$7k((this.get_rows())[this.$1J_3 + $p0]);
        }
    },
    $A6_3: function SP_UI_ApplicationPages_DetailCalendarTable$$A6_3($p0) {
        var $v_0 = (this.get_rows())[this.$1J_3 + SP.UI.ApplicationPages.DetailCalendarTable.$1L];

        if ($v_0.style.display === 'none') {
            $v_0.style.display = this.$6_3.get_$7z_0();
        }
        var $v_1 = $v_0.getElementsByTagName('TD');

        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            if ($v_1[$v_2].style.display !== 'none') {
                $v_1[$v_2].style.height = $p0 + 'px';
            }
        }
        this.$1T_2();
    }
};
SP.UI.ApplicationPages.DetailCalendarView = function SP_UI_ApplicationPages_DetailCalendarView($p0) {
    SP.UI.ApplicationPages.DetailCalendarView.initializeBase(this);
    this.$0_2 = $p0;
    this.$1x_2 = new SP.UI.ApplicationPages.DetailItemRenderer(this.$0_2);
    this.initializeView(this.$0_2, new SP.UI.ApplicationPages.DetailVirtualItem(this.$0_2, this.$0_2.$2u_3()), this.$1x_2);
};
SP.UI.ApplicationPages.DetailCalendarView.prototype = {
    renderGrids: function SP_UI_ApplicationPages_DetailCalendarView$renderGrids($p0) {
        var $v_0 = $p0[0];

        this.$4Z_2($v_0);
        var $v_1 = new Sys.StringBuilder();
        var $v_2 = $v_0.get_$76_0();

        if ($v_2 > 0) {
            this.$0_2.$A6_3($v_2 * this.$0_2.get_$5i_3());
            this.$1x_2.$A4_1($v_1, $v_0);
        }
        this.$1x_2.$7T_1($v_1, $v_0, this.$0_2.get_$2e_2());
        this.setInnerHtml($v_1.toString());
    },
    $0_2: null,
    $1x_2: null,
    renderDraggingItem: function SP_UI_ApplicationPages_DetailCalendarView$renderDraggingItem($p0, $p1) {
        var $v_0 = this.$0_2.$2u_3();
        var $v_1;
        var $v_2 = $p1.$1_0;

        if ($v_2 === SP.UI.ApplicationPages.DetailCalendarTable.$1L) {
            $v_1 = this.$1x_2.$4O_1($p1.$J_0, 0, $p1.$Q_0);
            $p0.style.borderWidth = this.$1x_2.$2C_0($v_1, $p1);
        }
        else {
            var $v_3 = $p1.$1N_0;

            while ($v_2 < $v_0.get_$m_0()) {
                $v_2++;
                $v_3--;
            }
            while ($v_2 + $v_3 > $v_0.get_$1B_0() + 1) {
                $v_3--;
            }
            if ($v_3 < 1) {
                $p0.style.display = 'none';
                return;
            }
            $v_1 = this.$1x_2.$4P_1($v_2, $p1.$J_0, 0, 1, 1, $v_3, 0);
        }
        this.applyLayout($p0, $v_1);
    },
    draggableItem: function SP_UI_ApplicationPages_DetailCalendarView$draggableItem($p0, $p1) {
        var $v_0;
        var $v_1 = this.getRenderingInfo($p0);

        if ($v_1.$1_0 === SP.UI.ApplicationPages.DetailCalendarTable.$1L) {
            $v_0 = new SP.UI.ApplicationPages.MultidayDragTargetTableAdapter(this.$0_2);
        }
        else {
            $v_0 = this.$0_2;
        }
        var $v_2 = new SP.UI.ApplicationPages.CalendarDraggableItem($p0, $v_0, this, $p1);

        $v_2.$7e_0(this.get_dragAuditor());
        return $v_2;
    },
    get_dragAuditor: function SP_UI_ApplicationPages_DetailCalendarView$get_dragAuditor() {
        var $$t_3 = this;

        return function($p1_0, $p1_1, $p1_2) {
            if (!$p1_0) {
                return true;
            }
            else {
                return !$p1_0.$o_0() || $$t_3.$0_2.get_$2e_2() > 1;
            }
        };
    },
    $80_1: function SP_UI_ApplicationPages_DetailCalendarView$$80_1($p0, $p1) {
        var $$t_3 = this;

        $p0.$y_1('click_time', function($p1_0) {
            SP.UI.ApplicationPages.TimeScale.$7D($p1, SP.UI.ApplicationPages.ElementUtility.$V($p1_0, 'time'));
        });
    },
    $4Z_2: function SP_UI_ApplicationPages_DetailCalendarView$$4Z_2($p0) {
        var $v_0 = $p0.$24_0;
        var $v_1 = $p0.$1r_0;

        if ($v_0 !== -1 && $v_1 !== -1) {
            $v_0 = $v_0 < 2 ? 0 : Math.floor($v_0 / 2) - 1;
            $v_1 = $v_1 > 45 ? 23 : Math.floor($v_1 / 2) + 1;
            if (!(this.$0_2.$2u_3()).$6b_0($v_0, $v_1)) {
                this.$0_2.$4Z_3($v_0, $v_1);
            }
        }
    },
    get_infoUpdater: function SP_UI_ApplicationPages_DetailCalendarView$get_infoUpdater() {
        var $$t_7 = this;

        return function($p1_0, $p1_1, $p1_2, $p1_3, $p1_4, $p1_5, $p1_6) {
            if ($p1_0) {
                $p1_6.$1_0 = SP.UI.ApplicationPages.DetailCalendarTable.$1L;
                $p1_6.$J_0 = $p1_2;
                $p1_6.$Q_0 = $p1_3;
            }
            else {
                $p1_6.$1_0 = $p1_4;
                $p1_6.$1N_0 = $p1_5;
                $p1_6.$J_0 = $p1_2;
            }
        };
    }
};
SP.UI.ApplicationPages.DetailItemRenderer = function SP_UI_ApplicationPages_DetailItemRenderer($p0) {
    SP.UI.ApplicationPages.DetailItemRenderer.initializeBase(this, [$p0]);
};
SP.UI.ApplicationPages.DetailItemRenderer.prototype = {
    $9L_1: 1,
    $6M_0: function SP_UI_ApplicationPages_DetailItemRenderer$$6M_0($p0) {
        var $v_0 = $p0.$1_0;

        if ($v_0 === SP.UI.ApplicationPages.DetailCalendarTable.$1L) {
            return this.$4O_1($p0.$J_0, $p0.$R_0, $p0.$Q_0);
        }
        else {
            return this.$4P_1($v_0, $p0.$J_0, $p0.$R_0, $p0.$z_0, $p0.$2o_0, $p0.$1N_0, 10);
        }
    },
    $A4_1: function SP_UI_ApplicationPages_DetailItemRenderer$$A4_1($p0, $p1) {
        for (var $v_0 = 0; $v_0 < 7; $v_0++) {
            var $v_1 = $p1.$3d_0($v_0);
            var $v_2 = $v_1.length;

            for (var $v_3 = 0; $v_3 < $v_2; $v_3++) {
                var $v_4 = $v_1[$v_3];

                if (SP.UI.ApplicationPages.SU.$2($v_4)) {
                    continue;
                }
                $v_4.$R_0 = $v_3;
                if (!SP.UI.ApplicationPages.SU.$2($v_4) && $v_4.get_$7P_0() && $v_4.$o_0()) {
                    this.$8C_1($p0, $v_0, $v_3, $v_4);
                }
            }
        }
    },
    $7T_1: function SP_UI_ApplicationPages_DetailItemRenderer$$7T_1($p0, $p1, $p2) {
        for (var $v_0 = 0; $v_0 < $p2; $v_0++) {
            var $v_1 = $p1.$4c_0($v_0);
            var $v_2 = $v_1.length;

            if (!$v_2) {
                continue;
            }
            var $v_3 = new SP.UI.ApplicationPages.TimeSlotRenderingGroup();

            for (var $v_4 = 0; $v_4 < $v_2; $v_4++) {
                var $v_5 = $v_1[$v_4];
                var $v_6 = $v_5.$1_0;
                var $v_7 = $v_5.$1N_0;

                if (!$v_3.$M_0($v_6, $v_7)) {
                    $v_3.$5j_0();
                    $v_3 = new SP.UI.ApplicationPages.TimeSlotRenderingGroup();
                }
                $v_3.$5d_0($v_6, $v_7, $v_5);
            }
            $v_3.$5j_0();
            for (var $v_8 = 0; $v_8 < $v_2; $v_8++) {
                this.$5o_1($p0, $v_0, $v_1[$v_8]);
            }
        }
    },
    $5o_1: function SP_UI_ApplicationPages_DetailItemRenderer$$5o_1($p0, $p1, $p2) {
        if ($p2.$R_0 === -1) {
            return;
        }
        this.m_repository.$2g_0(0, $p2);
        var $v_0 = this.$4P_1($p2.$1_0, $p1, $p2.$R_0, $p2.$z_0, $p2.$2o_0, $p2.$1N_0, 10);
        var $v_1 = $p2.$1N_0 === 1;

        this.m_builder.$5n_0($p0, $p2, $v_0.$e_0, $v_0.$t_0, $v_0.$U_0, $v_0.$n_0, $v_1);
    },
    $8C_1: function SP_UI_ApplicationPages_DetailItemRenderer$$8C_1($p0, $p1, $p2, $p3) {
        this.m_repository.$2g_0(0, $p3);
        var $v_0 = this.$4O_1($p1, $p2, $p3.$Q_0);
        var $v_1 = this.$2C_0($v_0, $p3);

        this.m_builder.$4N_0($p0, $p3, $v_0.$e_0, $v_0.$t_0, $v_0.$U_0, $v_0.$n_0, $v_1, true);
    },
    $4O_1: function SP_UI_ApplicationPages_DetailItemRenderer$$4O_1($p0, $p1, $p2) {
        var $v_0 = this.m_table.offsetTop(SP.UI.ApplicationPages.DetailCalendarTable.$1L);
        var $v_1 = this.m_table.get_$5i_3();

        return new SP.UI.ApplicationPages.LayoutInfo($v_0 + $p1 * $v_1 + 1, this.m_table.$3U_2($p0, $p2), this.m_table.$3S_2($p0, $p2) - this.border - 1, $v_1 - this.border - 1);
    },
    $4P_1: function SP_UI_ApplicationPages_DetailItemRenderer$$4P_1($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = this.m_table.$1l_2($p1) - $p6 - this.border;
        var $v_1 = Math.max(this.$9L_1, $v_0 * $p3 / $p4 - ($p4 > 1 ? 5 : 1));
        var $v_2 = $v_0 * $p2 / $p4;
        var $v_3 = this.m_table.offsetTop($p0 + $p5) - this.m_table.offsetTop($p0) - this.border - 1;

        if (this.m_table.$u_2) {
            return new SP.UI.ApplicationPages.LayoutInfo(this.m_table.offsetTop($p0), this.m_table.offsetLeft($p1) + this.m_table.$1l_2($p1) - $v_2 - $v_1 - 3, $v_1, $v_3);
        }
        else {
            return new SP.UI.ApplicationPages.LayoutInfo(this.m_table.offsetTop($p0), this.m_table.offsetLeft($p1) + $v_2, $v_1, $v_3);
        }
    }
};
SP.UI.ApplicationPages.MonthlyView = function SP_UI_ApplicationPages_MonthlyView($p0) {
    SP.UI.ApplicationPages.MonthlyView.initializeBase(this, [$p0, new SP.UI.ApplicationPages.MonthVirtualItem($p0)]);
};
SP.UI.ApplicationPages.MonthlyCalendarTable = function SP_UI_ApplicationPages_MonthlyCalendarTable($p0) {
    SP.UI.ApplicationPages.MonthlyCalendarTable.initializeBase(this, [$p0, 2, 1]);
    this.m_adjustX = 1;
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer && SP.UI.ApplicationPages.RibbonConnector.$d()) {
        this.m_endAdjustX = 3;
    }
};
SP.UI.ApplicationPages.MonthlyCalendarTable.prototype = {
    yPosToRow: function SP_UI_ApplicationPages_MonthlyCalendarTable$yPosToRow($p0) {
        if ($p0 < this.headerIncludedOffsetTop(0)) {
            return -1;
        }
        for (var $v_0 = 0; $v_0 < this.get_$27_2(); $v_0++) {
            if ($p0 < this.headerIncludedOffsetTop($v_0 + 1)) {
                return $v_0;
            }
        }
        return -1;
    },
    headerIncludedOffsetTop: function SP_UI_ApplicationPages_MonthlyCalendarTable$headerIncludedOffsetTop($p0) {
        if (this.get_$27_2() === $p0) {
            return this.offsetTop($p0);
        }
        else {
            return this.offsetTop($p0) - this.get_$2J_2();
        }
    },
    $1m_2: function SP_UI_ApplicationPages_MonthlyCalendarTable$$1m_2($p0) {
        return this.headerIncludedOffsetTop($p0 + 1) - this.offsetTop($p0);
    },
    getDayHeaderRow: function SP_UI_ApplicationPages_MonthlyCalendarTable$getDayHeaderRow() {
        return (this.get_rows())[1];
    }
};
SP.UI.ApplicationPages.CalendarStateHandler = function SP_UI_ApplicationPages_CalendarStateHandler($p0, $p1, $p2) {
    SP.UI.ApplicationPages.CalendarStateHandler.initializeBase(this);
    this.$v_1 = $p0;
    this.$7_1 = $p1;
    this.$a_1 = $p2;
    this.$K_1 = new SP.UI.ApplicationPages.CalendarRenderingStateMachine();
};
SP.UI.ApplicationPages.CalendarStateHandler.prototype = {
    $K_1: null,
    $D_1: null,
    $7_1: null,
    $v_1: null,
    $a_1: null,
    $j_1: 0,
    $39_1: null,
    $3K_1: false,
    $4m_1: null,
    $2b_1: false,
    $53_1: false,
    $41_1: false,
    $3G_1: false,
    $28_1: function SP_UI_ApplicationPages_CalendarStateHandler$$28_1() {
        switch (this.$K_1.$9T_0()) {
        case 4:
            this.$8E_1();
            break;
        case 3:
            this.$85_1();
            break;
        case 1:
            this.$86_1();
            break;
        }
    },
    $86_1: function SP_UI_ApplicationPages_CalendarStateHandler$$86_1() {
        if (!this.$a_1.$42_1) {
            this.$28_1();
        }
        else {
            this.$K_1.$1g_0();
            this.$7_1.beginUserResolve(this.$a_1.$Am_1());
        }
    },
    $85_1: function SP_UI_ApplicationPages_CalendarStateHandler$$85_1() {
        this.$j_1 = 0;
        this.$39_1 = [];
        var $v_0 = this.$a_1.get_$29_1();

        if (!this.$2b_1) {
            this.$D_1.$7B_1($v_0);
        }
        this.$7_1.$A8_1();
        this.$4m_1 = [];
        if (this.$3K_1) {
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                this.$4m_1[$v_1] = this.$D_1.$9A_1($v_1);
            }
            this.$3K_1 = false;
        }
        this.$1h_1();
    },
    $1h_1: function SP_UI_ApplicationPages_CalendarStateHandler$$1h_1() {
        var $v_0 = this.$a_1.get_$29_1();
        var $v_1 = $v_0.length;
        var $v_2 = 0;

        if ($v_1 > 0) {
            $v_2 |= 1;
        }
        if (this.$2b_1) {
            $v_2 |= 8 | 4 | 32 | 2;
            if (SP.UI.ApplicationPages.CalendarHeaderControls.get_$63()) {
                $v_2 |= 16;
            }
        }
        if ($v_1 <= this.$j_1 && !this.$2b_1) {
            this.$j_1 = 0;
            if (!this.$7_1.$9R_1()) {
                this.$28_1();
            }
            else {
                this.$1h_1();
            }
            return;
        }
        if (true === this.$4m_1[this.$j_1]) {
            this.$D_1.$9r_1(this.$j_1);
            this.$j_1++;
            this.$1h_1();
        }
        else {
            this.$7_1.$5l_1($v_2, $v_1 > 0 ? $v_0[this.$j_1].get_key() : null);
            this.$6C_1();
        }
    },
    $8E_1: function SP_UI_ApplicationPages_CalendarStateHandler$$8E_1() {
        var $v_0 = (this.get_events()).getHandler('StateChangeToDone');

        if ($v_0) {
            $v_0();
        }
        this.$3K_1 = true;
        this.$6C_1();
        CUI.PMetrics.perfMark(7645);
    },
    $6C_1: function SP_UI_ApplicationPages_CalendarStateHandler$$6C_1() {
        this.$41_1 = true;
        if (this.$53_1) {
            var $$t_0 = this;

            window.setTimeout(function() {
                $$t_0.parentResized();
            }, 0);
        }
    },
    start: function SP_UI_ApplicationPages_CalendarStateHandler$start() {
        this.$2b_1 = true;
        this.$3K_1 = false;
        this.$K_1.$77_0();
        if (!this.$K_1.$5H_0()) {
            this.$28_1();
        }
    },
    initialize: function SP_UI_ApplicationPages_CalendarStateHandler$initialize($p0) {
        this.$D_1 = $p0;
        this.$K_1.$1g_0();
        this.$3G_1 = true;
    },
    dateUpdated: function SP_UI_ApplicationPages_CalendarStateHandler$dateUpdated() {
        this.start();
    },
    onSelectionUpdated: function SP_UI_ApplicationPages_CalendarStateHandler$onSelectionUpdated() {
        this.$K_1.$77_0();
        if (!this.$K_1.$5H_0()) {
            this.$28_1();
        }
    },
    refreshItems: function SP_UI_ApplicationPages_CalendarStateHandler$refreshItems() {
        this.$K_1.$9N_0();
        if (!this.$K_1.$5H_0()) {
            this.$3G_1 = true;
            this.$3K_1 = false;
            this.$28_1();
        }
    },
    parentResized: function SP_UI_ApplicationPages_CalendarStateHandler$parentResized() {
        if (this.$41_1) {
            this.$D_1.$7I_1();
            this.$53_1 = false;
        }
        else {
            this.$53_1 = true;
        }
    },
    onTableSucceed: function SP_UI_ApplicationPages_CalendarStateHandler$onTableSucceed($p0) {
        this.$D_1.$4T_1();
        this.$3G_1 = false;
        if ($p0.Options & 2) {
            this.$D_1.$7U_1($p0.Table);
        }
        if ($p0.Options & 8 && $p0.Options & 32) {
            this.$D_1.$7i_1($p0.Dates, $p0.RangeJDay);
        }
        this.$D_1.$7B_1(this.$a_1.get_$29_1());
        this.$2b_1 = false;
        if (0 === ($p0.Options & 1)) {
            this.$28_1();
        }
    },
    onItemsSucceed: function SP_UI_ApplicationPages_CalendarStateHandler$onItemsSucceed($p0, $p1) {
        if (this.$K_1.$8G_0()) {
            this.$28_1();
            return;
        }
        this.$41_1 = false;
        if (this.$3G_1) {
            this.$D_1.$4T_1();
            this.$3G_1 = false;
        }
        if (SP.UI.ApplicationPages.SU.$2(this.$39_1[this.$j_1])) {
            this.$39_1[this.$j_1] = [];
        }
        Array.addRange(this.$39_1[this.$j_1], $p0);
        this.$D_1.$7S_1(this.$j_1, this.$v_1, $p1, this.$39_1[this.$j_1]);
        this.$j_1++;
        this.$1h_1();
    },
    onErrorOccured: function SP_UI_ApplicationPages_CalendarStateHandler$onErrorOccured() {
        if (!this.$2b_1 && this.$K_1.$9F_0()) {
            this.$41_1 = false;
            this.$j_1++;
            this.$1h_1();
        }
        else {
            this.$K_1.$1g_0();
        }
    },
    add_$Ab_1: function SP_UI_ApplicationPages_CalendarStateHandler$add_$Ab_1($p0) {
        (this.get_events()).addHandler('StateChangeToDone', $p0);
    },
    remove_$Ab_1: function SP_UI_ApplicationPages_CalendarStateHandler$remove_$Ab_1($p0) {
        (this.get_events()).removeHandler('StateChangeToDone', $p0);
    }
};
SP.UI.ApplicationPages.EntityRowsTable = function SP_UI_ApplicationPages_EntityRowsTable($p0, $p1) {
    SP.UI.ApplicationPages.EntityRowsTable.initializeBase(this, [$p0, 1, $p1]);
};
SP.UI.ApplicationPages.EntityRowsTable.prototype = {
    $6p_4: null,
    postSetupTable: function SP_UI_ApplicationPages_EntityRowsTable$postSetupTable() {
        this.$6p_4 = (this.$2t_2(0)).cloneNode(true);
        if (!SP.UI.ApplicationPages.RibbonConnector.$d()) {
            var $v_0 = (this.get_rows())[(this.get_rows()).length - 1];
            var $v_1 = $v_0.getElementsByTagName('TH');

            this.$5O_3(1, $v_1[0].clientHeight);
        }
        this.$7g_3(1);
    },
    $Aq_4: function SP_UI_ApplicationPages_EntityRowsTable$$Aq_4($p0, $p1, $p2) {
        var $v_0 = $p0.getElementsByTagName('SPAN');

        $v_0[0].innerHTML = $p1;
        $v_0[0].title = EEDecodeSpecialChars($p1);
        $v_0 = $p0.getElementsByTagName('A');
        if ($v_0.length === 1) {
            var $v_1 = $v_0[0];

            $v_1.setAttribute('rowidx', $p2);
            $v_0 = $v_1.getElementsByTagName('SPAN');
            if ($v_0.length === 2) {
                $v_0[1].innerHTML = $p1;
            }
        }
    },
    $AR_2: function SP_UI_ApplicationPages_EntityRowsTable$$AR_2($p0) {
        var $v_0 = (this.get_rawElement()).firstChild;
        var $v_1 = (this.get_rows())[(this.get_rows()).length - 1];
        var $v_2 = SP.UI.ApplicationPages.ElementUtility.$l($v_0);
        var $v_3 = this.get_$27_2();
        var $v_4 = $p0.length;

        for (var $v_5 = 0; $v_5 < $v_4; $v_5++) {
            if ($v_3 === $v_5) {
                var $v_7;

                if (!$v_3) {
                    $v_7 = this.$6p_4.cloneNode(true);
                }
                else {
                    $v_7 = (this.$2t_2(0)).cloneNode(true);
                    this.$8K_4($v_7);
                }
                $v_2.insertBefore($v_7, $v_1);
                $v_3++;
            }
            var $v_6 = this.$2t_2($v_5);

            this.$Aq_4($v_6, $p0[$v_5].displayName, $v_5);
        }
        while ($v_3 > $v_4) {
            $v_2.removeChild(this.$2t_2($v_4));
            $v_3--;
        }
        this.$1T_2();
        this.invalidateLocalCache();
        this.$7g_3($v_4);
    },
    $8K_4: function SP_UI_ApplicationPages_EntityRowsTable$$8K_4($p0) {
        var $v_0 = $p0.getElementsByTagName('div');

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            if ($v_0[$v_1].parentNode.nodeName === 'TD') {
                $v_0[$v_1].style.height = '';
            }
        }
    }
};
SP.UI.ApplicationPages.SummaryCalendarTable = function SP_UI_ApplicationPages_SummaryCalendarTable($p0, $p1, $p2) {
    this.$17_3 = -1;
    SP.UI.ApplicationPages.SummaryCalendarTable.initializeBase(this, [$p0]);
    this.$3z_3 = $p2;
    this.$48_3 = $p1;
};
SP.UI.ApplicationPages.SummaryCalendarTable.prototype = {
    $6n_3: 0,
    $3v_3: 0,
    $48_3: 0,
    $3z_3: 0,
    get_$2J_2: function SP_UI_ApplicationPages_SummaryCalendarTable$get_$2J_2() {
        return this.$6n_3;
    },
    get_$27_2: function SP_UI_ApplicationPages_SummaryCalendarTable$get_$27_2() {
        if (this.$17_3 === -1) {
            this.$17_3 = 0;
            for (var $v_0 = this.$3z_3; $v_0 < (this.get_rows()).length; $v_0 += this.$48_3) {
                this.$17_3++;
            }
        }
        return this.$17_3;
    },
    $7g_3: function SP_UI_ApplicationPages_SummaryCalendarTable$$7g_3($p0) {
        this.$17_3 = $p0;
    },
    invalidateLocalCache: function SP_UI_ApplicationPages_SummaryCalendarTable$invalidateLocalCache() {
        this.$17_3 = -1;
    },
    get_headerCount: function SP_UI_ApplicationPages_SummaryCalendarTable$get_headerCount() {
        return this.$3z_3;
    },
    $2t_2: function SP_UI_ApplicationPages_SummaryCalendarTable$$2t_2($p0) {
        var $v_0 = this.$3z_3 + (this.$48_3 - 1) + this.$48_3 * $p0;
        var $v_1 = this.get_rows();

        if ($v_1 && $v_1.length > $v_0) {
            return $v_1[$v_0];
        }
        else {
            return null;
        }
    },
    initTableMetrixInfo: function SP_UI_ApplicationPages_SummaryCalendarTable$initTableMetrixInfo() {
        var $v_0;

        $v_0 = this.$6H_3(this.getDayHeaderRow());
        this.$6n_3 = $v_0.offsetHeight;
        $v_0 = SP.UI.ApplicationPages.ElementUtility.$l(this.$6H_3(this.$2t_2(0)));
        this.$3v_3 = $v_0.offsetHeight;
    },
    $6H_3: function SP_UI_ApplicationPages_SummaryCalendarTable$$6H_3($p0) {
        var $v_0 = $p0.getElementsByTagName('td');

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            if ($v_0[$v_1].style.display !== 'none') {
                return $v_0[$v_1];
            }
        }
        return null;
    },
    calcMaxWeekNameWidth: function SP_UI_ApplicationPages_SummaryCalendarTable$calcMaxWeekNameWidth() {
        var $v_0 = document.createElement('DIV');

        $v_0.className = 'ms-acal-offscreen';
        (this.get_element()).appendChild($v_0);
        var $v_1 = 0;
        var $v_2 = (this.get_rows())[0].getElementsByTagName('NOBR');

        for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
            $v_0.innerHTML = (SP.UI.ApplicationPages.ElementUtility.$l($v_2[$v_3])).innerHTML;
            $v_1 = Math.max($v_1, $v_0.offsetWidth + 20);
        }
        (this.get_element()).removeChild($v_0);
        return $v_1;
    },
    calcOffsetTopArray: function SP_UI_ApplicationPages_SummaryCalendarTable$calcOffsetTopArray() {
        var $v_0 = this.$26_2 + this.m_adjustY;
        var $v_1 = this.get_$27_2();
        var $v_2 = new Array($v_1 + 1);

        $v_2[$v_1] = -1;
        for (var $v_3 = 0; $v_3 < $v_1; $v_3++) {
            var $v_4 = SP.UI.ApplicationPages.ElementUtility.$l(this.$2t_2($v_3));

            $v_2[$v_3] = $v_0 + $v_4.offsetTop;
            if ($v_3 === $v_1 - 1) {
                $v_4 = SP.UI.ApplicationPages.ElementUtility.$l(this.$2t_2($v_3));
                $v_2[$v_3 + 1] = $v_0 + $v_4.offsetTop + $v_4.offsetHeight;
            }
        }
        return $v_2;
    },
    calcOffsetLeftArray: function SP_UI_ApplicationPages_SummaryCalendarTable$calcOffsetLeftArray() {
        var $v_0 = this.$1c_2 + this.m_adjustX;
        var $v_1 = this.get_$2e_2();
        var $v_2 = new Array($v_1 + 1);
        var $v_3 = (this.getDayHeaderRow()).getElementsByTagName('td');
        var $v_4 = $v_3.length - $v_1;

        if ($v_4 >= 0) {
            if (this.$u_2) {
                for (var $v_5 = $v_4, $v_6 = 0; $v_5 < $v_3.length; $v_5++, $v_6++) {
                    $v_2[$v_6 + 1] = $v_0 + $v_3[$v_5].offsetLeft;
                }
                $v_2[0] = $v_2[1] + $v_3[$v_4].clientWidth;
            }
            else {
                for (var $v_7 = $v_4, $v_8 = 0; $v_7 < $v_3.length; $v_7++, $v_8++) {
                    $v_2[$v_8] = $v_0 + $v_3[$v_7].offsetLeft;
                }
                $v_2[$v_1] = $v_2[$v_1 - 1] + $v_3[$v_3.length - 1].clientWidth - this.m_endAdjustX;
            }
        }
        return $v_2;
    },
    $5O_3: function SP_UI_ApplicationPages_SummaryCalendarTable$$5O_3($p0, $p1) {
        if (this.$3v_3 > $p1) {
            $p1 = this.$3v_3;
        }
        var $v_0 = this.$2t_2($p0);
        var $v_1 = $v_0.getElementsByTagName('div');
        var $v_2 = $v_1[$v_1.length - 1].offsetHeight;

        if ($p1 > $v_2 && $p1 - $v_2 <= 2 || $v_2 === this.$3v_3 && $v_2 === $p1) {
            return;
        }
        for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
            if ($v_1[$v_3].parentNode.nodeName === 'TD') {
                $v_1[$v_3].style.height = $p1 + 'px';
            }
        }
        this.$1T_2();
    }
};
SP.UI.ApplicationPages.SummaryCalendarView = function SP_UI_ApplicationPages_SummaryCalendarView($p0, $p1) {
    this.$$d_$8s_2 = Function.createDelegate(this, this.$8s_2);
    SP.UI.ApplicationPages.SummaryCalendarView.initializeBase(this);
    var $v_0 = new SP.UI.ApplicationPages.DivInfoRepository();

    this.$I_2 = new SP.UI.ApplicationPages.SummaryItemRenderer($p0);
    this.initializeView($p0, $p1, this.$I_2);
};
SP.UI.ApplicationPages.SummaryCalendarView.prototype = {
    renderGrids: function SP_UI_ApplicationPages_SummaryCalendarView$renderGrids($p0) {
        var $v_0 = new Sys.StringBuilder();
        var $v_1 = $p0.length;

        for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
            this.$7V_2($v_2, $p0[$v_2]);
        }
        for (var $v_3 = 0; $v_3 < $v_1; $v_3++) {
            $v_0.append('<div>');
            this.$I_2.$7Q_1($v_0, $p0[$v_3], $v_3);
            $v_0.append(this.emptY_DIV);
            $v_0.append('</div>');
        }
        this.setInnerHtml($v_0.toString());
    },
    $I_2: null,
    $8t_2: function SP_UI_ApplicationPages_SummaryCalendarView$$8t_2($p0) {
        this.$6F_2($p0, true);
    },
    $8R_2: function SP_UI_ApplicationPages_SummaryCalendarView$$8R_2($p0) {
        this.invalidateRootElement();
        this.$6F_2($p0, false);
    },
    $6F_2: function SP_UI_ApplicationPages_SummaryCalendarView$$6F_2($p0, $p1) {
        var $v_0 = this.$E_1;

        $v_0[$p0].$37_0 = $p1;
        this.renderGrids($v_0);
    },
    renderSingleGrid: function SP_UI_ApplicationPages_SummaryCalendarView$renderSingleGrid($p0, $p1) {
        this.$7V_2($p0, $p1);
        var $v_0 = new Sys.StringBuilder();

        this.$I_2.$7Q_1($v_0, $p1, $p0);
        $v_0.append(this.emptY_DIV);
        this.addOrReplaceHtmlFragment($p0, $v_0.toString());
    },
    $7V_2: function SP_UI_ApplicationPages_SummaryCalendarView$$7V_2($p0, $p1) {
        var $v_0 = $p1.get_$75_0();

        if (!$v_0) {
            return;
        }
        else if (true !== $p1.$37_0 && $v_0 > this.$I_2.$2s_1()) {
            $v_0 = this.$I_2.$2s_1();
        }
        var $v_1 = this.$0_1;

        $v_1.$5O_3($p0, ($v_1.get_$2J_2() + 1) * ($v_0 + 1));
    },
    renderDraggingItem: function SP_UI_ApplicationPages_SummaryCalendarView$renderDraggingItem($p0, $p1) {
        var $v_0 = this.$I_2.$2m_1($p1.$1_0, $p1.$J_0, 0, $p1.$z_0, $p1.$Q_0);

        if ($p1.$o_0()) {
            $p0.style.borderWidth = this.$I_2.$2C_0($v_0, $p1);
        }
        this.applyLayout($p0, $v_0);
    },
    $80_1: function SP_UI_ApplicationPages_SummaryCalendarView$$80_1($p0, $p1) {
        $p0.$y_1('expand_collapse', this.$$d_$8s_2);
        var $$t_4 = this;

        $p0.$y_1('ExpandAllId', function($p1_0) {
            $$t_4.$8r_1();
        });
        var $$t_5 = this;

        $p0.$y_1('CollapseAllId', function($p1_0) {
            $$t_5.$8Q_1();
        });
    },
    $8s_2: function SP_UI_ApplicationPages_SummaryCalendarView$$8s_2($p0) {
        var $v_0 = $p0.parentNode;
        var $v_1 = SP.UI.ApplicationPages.ElementUtility.$V($v_0, '_expand');

        if ($v_1 === 'expand') {
            this.$8t_2((this.getRenderingInfo($v_0)).$1_0);
        }
        else if ($v_1 === 'collapse') {
            this.$8R_2((this.getRenderingInfo($v_0)).$1_0);
        }
        this.resetSelection();
    },
    $8r_1: function SP_UI_ApplicationPages_SummaryCalendarView$$8r_1() {
        var $v_0 = this.$E_1;

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            $v_0[$v_1].$37_0 = true;
        }
        this.renderGrids($v_0);
        this.resetSelection();
    },
    $8Q_1: function SP_UI_ApplicationPages_SummaryCalendarView$$8Q_1() {
        this.invalidateRootElement();
        var $v_0 = this.$E_1;

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            $v_0[$v_1].$37_0 = false;
        }
        this.renderGrids($v_0);
        this.resetSelection();
    },
    get_infoUpdater: function SP_UI_ApplicationPages_SummaryCalendarView$get_infoUpdater() {
        var $$t_7 = this;

        return function($p1_0, $p1_1, $p1_2, $p1_3, $p1_4, $p1_5, $p1_6) {
            $p1_6.$J_0 = $p1_2;
            $p1_6.$Q_0 = $p1_3;
            $p1_6.$1_0 = $p1_1;
        };
    }
};
SP.UI.ApplicationPages.SummaryItemRenderer = function SP_UI_ApplicationPages_SummaryItemRenderer($p0) {
    SP.UI.ApplicationPages.SummaryItemRenderer.initializeBase(this, [$p0]);
};
SP.UI.ApplicationPages.SummaryItemRenderer.prototype = {
    $17_1: 0,
    $2s_1: function SP_UI_ApplicationPages_SummaryItemRenderer$$2s_1() {
        if (!this.$17_1) {
            this.$17_1 = Math.floor(this.m_table.$1m_2(0) / (this.m_table.get_$2J_2() + 2)) + 1;
        }
        return this.$17_1;
    },
    $6M_0: function SP_UI_ApplicationPages_SummaryItemRenderer$$6M_0($p0) {
        return this.$2m_1($p0.$1_0, $p0.$J_0, $p0.$R_0, $p0.$z_0, $p0.$Q_0);
    },
    $7Q_1: function SP_UI_ApplicationPages_SummaryItemRenderer$$7Q_1($p0, $p1, $p2) {
        var $v_0 = $p1.$37_0;
        var $v_1 = this.$2s_1();
        var $v_2 = $p1.get_$75_0();

        if (true !== $v_0 && $v_2 > $v_1) {
            $v_2 = $v_1;
        }
        else if ($v_2 < $v_1) {
            $v_2 = $v_1 - 1;
        }
        for (var $v_3 = 0; $v_3 < 7; $v_3++) {
            var $v_4 = 0;
            var $v_5 = $p1.$3d_0($v_3);
            var $v_6 = $v_5.length;
            var $v_7 = $v_6 + ($p1.$4c_0($v_3)).length <= $v_2;
            var $v_8 = 0;
            var $v_9 = 1;

            for (var $v_A = 0; $v_A < $v_6; $v_A++, $v_8 += $v_9) {
                var $v_B = $v_5[$v_A];

                if (!SP.UI.ApplicationPages.SU.$2($v_B)) {
                    if (true !== $v_0 && $v_A >= $v_1) {
                        $v_4++;
                    }
                    else if ($v_B.get_$7P_0()) {
                        if (!$v_B.$o_0() && $v_7) {
                            $v_9 = 2;
                        }
                        this.$9z_1($p0, $p2, $v_3, $v_8, $v_9, $v_B);
                    }
                }
            }
            if ($v_4 > 0) {
                this.$A2_1($p0, $p2, $v_3, $v_4);
            }
            else if ($v_6 > $v_1) {
                this.$A0_1($p0, $p2, $v_3, $v_8);
            }
        }
    },
    $2m_1: function SP_UI_ApplicationPages_SummaryItemRenderer$$2m_1($p0, $p1, $p2, $p3, $p4) {
        return new SP.UI.ApplicationPages.LayoutInfo(this.$6P_1($p0, $p2), this.m_table.$3U_2($p1, $p4), this.m_table.$3S_2($p1, $p4) - 2 - this.border, $p3 * (this.m_table.get_$2J_2() + 1) - this.border - 1);
    },
    $9z_1: function SP_UI_ApplicationPages_SummaryItemRenderer$$9z_1($p0, $p1, $p2, $p3, $p4, $p5) {
        this.m_repository.$2g_0($p1, $p5);
        $p5.$R_0 = $p3;
        $p5.$z_0 = $p4;
        var $v_0 = this.$2m_1($p1, $p2, $p3, $p4, $p5.$Q_0);

        if ($p5.$o_0()) {
            var $v_1 = this.$2C_0($v_0, $p5);

            this.m_builder.$4N_0($p0, $p5, $v_0.$e_0, $v_0.$t_0, $v_0.$U_0, $v_0.$n_0, $v_1, false);
        }
        else {
            this.m_builder.$8D_0($p0, $p5, $v_0.$e_0, $v_0.$t_0, $v_0.$U_0, $v_0.$n_0, $p4 === 1);
        }
    },
    $A2_1: function SP_UI_ApplicationPages_SummaryItemRenderer$$A2_1($p0, $p1, $p2, $p3) {
        var $v_0 = this.$2m_1($p1, $p2, this.$2s_1(), 1, 1);
        var $v_1 = this.$5z_1($p1, $p2, this.$2s_1());

        this.m_builder.$89_0($p0, $v_1, $p3, $v_0.$e_0, $v_0.$t_0, $v_0.$U_0, $v_0.$n_0);
    },
    $A0_1: function SP_UI_ApplicationPages_SummaryItemRenderer$$A0_1($p0, $p1, $p2, $p3) {
        var $v_0 = this.$2m_1($p1, $p2, $p3, 1, 1);
        var $v_1 = this.$5z_1($p1, $p2, $p3);

        this.m_builder.$88_0($p0, $v_1, $v_0.$e_0, $v_0.$t_0, $v_0.$U_0, $v_0.$n_0);
    },
    $5z_1: function SP_UI_ApplicationPages_SummaryItemRenderer$$5z_1($p0, $p1, $p2) {
        var $v_0 = new SP.UI.ApplicationPages.DivRenderingInfo(4, null);

        $v_0.$1_0 = $p0;
        $v_0.$J_0 = $p1;
        $v_0.$R_0 = $p2;
        this.m_repository.$2g_0($p0, $v_0);
        return $v_0;
    },
    $6P_1: function SP_UI_ApplicationPages_SummaryItemRenderer$$6P_1($p0, $p1) {
        return this.m_table.offsetTop($p0) + $p1 * (this.m_table.get_$2J_2() + 1);
    }
};
SP.UI.ApplicationPages.WeeklyGroupView = function SP_UI_ApplicationPages_WeeklyGroupView($p0) {
    SP.UI.ApplicationPages.WeeklyGroupView.initializeBase(this, [$p0, new SP.UI.ApplicationPages.WeekGroupVirtualItem($p0)]);
};
SP.UI.ApplicationPages.WeeklyGroupView.prototype = {
    get_dragAuditor: function SP_UI_ApplicationPages_WeeklyGroupView$get_dragAuditor() {
        var $$t_3 = this;

        return function($p1_0, $p1_1, $p1_2) {
            return !$p1_1;
        };
    },
    isGroupView: function SP_UI_ApplicationPages_WeeklyGroupView$isGroupView() {
        return true;
    }
};
SP.UI.ApplicationPages.WeeklyGroupTable = function SP_UI_ApplicationPages_WeeklyGroupTable($p0) {
    SP.UI.ApplicationPages.WeeklyGroupTable.initializeBase(this, [$p0, 1]);
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
        this.m_adjustX = 1;
        this.m_adjustY = 3;
        this.m_endAdjustX = SP.UI.ApplicationPages.RibbonConnector.$d() ? 2 : -1;
    }
    else if (Sys.Browser.agent === Sys.Browser.Firefox) {
        this.m_adjustX = 0;
        this.m_adjustY = 2;
        this.m_endAdjustX = 0;
    }
    else if (Sys.Browser.agent === Sys.Browser.Safari) {
        this.m_adjustX = 1;
        this.m_adjustY = 3;
        this.m_endAdjustX = -1;
    }
};
SP.UI.ApplicationPages.WeeklyGroupTable.prototype = {
    getDayHeaderRow: function SP_UI_ApplicationPages_WeeklyGroupTable$getDayHeaderRow() {
        return (this.get_rows())[0];
    }
};
SP.UI.ApplicationPages.EntityPaginator = function SP_UI_ApplicationPages_EntityPaginator($p0) {
    this.$4x_1 = {};
    SP.UI.ApplicationPages.EntityPaginator.initializeBase(this);
    this.$1w_1 = $p0;
    if (!SP.UI.ApplicationPages.SU.$Y(window._spUserId)) {
        this.$6u_1 = window._spUserId.toString();
    }
};
SP.UI.ApplicationPages.EntityPaginator.prototype = {
    $2f_1: 50,
    $1w_1: null,
    $Z_1: 0,
    $42_1: false,
    $2V_1: null,
    $1K_1: null,
    $1v_1: null,
    $6u_1: null,
    $5I_1: function SP_UI_ApplicationPages_EntityPaginator$$5I_1($p0) {
        this.$1g_1();
        this.$4x_1[$p0.id] = $p0.members;
        this.$3a_1();
        this.$5b_1();
    },
    $Am_1: function SP_UI_ApplicationPages_EntityPaginator$$Am_1() {
        for (var $v_0 = 0; $v_0 < this.$1K_1.length; $v_0++) {
            var $v_1 = this.$1K_1[$v_0];

            if ($v_1.needResolve) {
                return $v_1;
            }
        }
        return null;
    },
    $9v_1: function SP_UI_ApplicationPages_EntityPaginator$$9v_1($p0) {
        if ((this.get_$29_1()).length > $p0) {
            var $v_0 = this.$2V_1[$p0];

            this.$9w_1($v_0);
            var $v_1 = this.$4a_1(this.$1v_1, $v_0);

            if ($v_1 !== -1) {
                Array.removeAt(this.$1v_1, $v_1);
            }
            if (this.$1v_1.length <= this.$Z_1 * this.$2f_1 && this.$Z_1 > 0) {
                this.$Z_1--;
                this.$5R_1();
            }
            this.$5L_1();
        }
    },
    $9w_1: function SP_UI_ApplicationPages_EntityPaginator$$9w_1($p0) {
        var $v_0 = this.$4a_1(this.$1K_1, $p0);

        if ($v_0 !== -1 && !$p0.isGroup) {
            Array.removeAt(this.$1K_1, $v_0);
            (SP.UI.ApplicationPages.CalendarSelector.instance()).removeEntity(this.$1w_1, $p0);
        }
        for (var $v_1 = 0; $v_1 < this.$1K_1.length; $v_1++) {
            var $v_2 = this.$1K_1[$v_1];

            if ($v_2.isGroup) {
                var $v_3 = $v_2.members;

                for (var $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
                    if ($v_3[$v_4] && $v_3[$v_4].get_key() === $p0.get_key()) {
                        $v_3[$v_4] = null;
                    }
                }
            }
        }
    },
    get_$9c_1: function SP_UI_ApplicationPages_EntityPaginator$get_$9c_1() {
        return $get(this.$1w_1 + '_Pagination');
    },
    $2l_1: function SP_UI_ApplicationPages_EntityPaginator$$2l_1($p0) {
        this.$1g_1();
        this.$1K_1 = $p0;
        this.$3a_1();
        if (!this.$42_1) {
            this.$5b_1();
        }
    },
    $3a_1: function SP_UI_ApplicationPages_EntityPaginator$$3a_1() {
        var $v_0 = [];

        for (var $v_1 = 0; $v_1 < this.$1K_1.length; $v_1++) {
            var $v_2 = this.$1K_1[$v_1];

            if ($v_2.isGroup) {
                if ($v_2.needResolve) {
                    this.$Ak_1($v_2);
                }
                if ($v_2.needResolve) {
                    return;
                }
                for (var $v_3 = 0; $v_3 < $v_2.members.length; $v_3++) {
                    if ($v_2.members[$v_3]) {
                        this.$4F_1($v_0, $v_2.members[$v_3]);
                    }
                }
            }
            else {
                this.$4F_1($v_0, $v_2);
            }
        }
        this.$1v_1 = $v_0;
    },
    $Ak_1: function SP_UI_ApplicationPages_EntityPaginator$$Ak_1($p0) {
        var $v_0 = this.$4x_1[$p0.id];

        if (SP.UI.ApplicationPages.SU.$2($v_0)) {
            this.$42_1 = true;
        }
        else {
            $p0.members = [];
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                $p0.members[$v_1] = $v_0[$v_1];
            }
            $p0.needResolve = false;
        }
    },
    $4F_1: function SP_UI_ApplicationPages_EntityPaginator$$4F_1($p0, $p1) {
        if (this.$4a_1($p0, $p1) !== -1) {
            return;
        }
        if ($p1.entityType === SP.UI.ApplicationPages.ResolveEntity.typE_USER && this.$6u_1 === $p1.id) {
            Array.insert($p0, 0, $p1);
        }
        else {
            Array.add($p0, $p1);
        }
    },
    $4a_1: function SP_UI_ApplicationPages_EntityPaginator$$4a_1($p0, $p1) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = $p0[$v_0];

            if ($v_1.get_key() === $p1.get_key()) {
                return $v_0;
            }
        }
        return -1;
    },
    add_$9b_1: function SP_UI_ApplicationPages_EntityPaginator$add_$9b_1($p0) {
        (this.get_events()).addHandler('pagechanged', $p0);
    },
    remove_$9b_1: function SP_UI_ApplicationPages_EntityPaginator$remove_$9b_1($p0) {
        (this.get_events()).removeHandler('pagechanged', $p0);
    },
    get_$29_1: function SP_UI_ApplicationPages_EntityPaginator$get_$29_1() {
        if (!this.$2V_1) {
            var $v_0 = [];

            for (var $v_1 = 0; $v_1 < this.$2f_1; $v_1++) {
                var $v_2 = this.$2f_1 * this.$Z_1 + $v_1;

                if ($v_2 < this.$1v_1.length) {
                    Array.add($v_0, this.$1v_1[$v_2]);
                }
            }
            this.$2V_1 = $v_0;
        }
        return this.$2V_1;
    },
    get_$6T_1: function SP_UI_ApplicationPages_EntityPaginator$get_$6T_1() {
        return this.$1v_1.length > this.$2f_1 * (this.$Z_1 + 1);
    },
    get_$6U_1: function SP_UI_ApplicationPages_EntityPaginator$get_$6U_1() {
        return this.$Z_1 > 0;
    },
    $9S_1: function SP_UI_ApplicationPages_EntityPaginator$$9S_1() {
        if (this.get_$6T_1()) {
            this.$Z_1++;
            this.$5R_1();
            this.$5L_1();
        }
    },
    $9o_1: function SP_UI_ApplicationPages_EntityPaginator$$9o_1() {
        if (this.get_$6U_1()) {
            this.$Z_1--;
            this.$5R_1();
            this.$5L_1();
        }
    },
    $5L_1: function SP_UI_ApplicationPages_EntityPaginator$$5L_1() {
        this.$2V_1 = null;
        this.$5b_1();
        var $v_0 = (this.get_events()).getHandler('pagechanged');

        if ($v_0) {
            $v_0();
        }
    },
    $5b_1: function SP_UI_ApplicationPages_EntityPaginator$$5b_1() {
        var $v_0 = this.get_$6T_1();
        var $v_1 = this.get_$6U_1();
        var $v_2 = this.get_$9c_1();

        if (!$v_2) {
            return;
        }
        if ($v_0 || $v_1) {
            $v_2.style.display = 'block';
            var $v_3 = $v_2.getElementsByTagName('TD');

            $v_3[0].firstChild.style.display = $v_1 ? 'inline' : 'none';
            $v_3[1].innerHTML = String.format('{0} - {1}', this.$Z_1 * this.$2f_1 + 1, this.$Z_1 * this.$2f_1 + (this.get_$29_1()).length);
            $v_3[2].firstChild.style.display = $v_0 ? 'inline' : 'none';
        }
        else {
            $v_2.style.display = 'none';
        }
    },
    $1g_1: function SP_UI_ApplicationPages_EntityPaginator$$1g_1() {
        this.$2V_1 = null;
        this.$Z_1 = 0;
        this.$42_1 = false;
    },
    $5R_1: function SP_UI_ApplicationPages_EntityPaginator$$5R_1() {
        window.scrollTo(0, 0);
    },
    $9s_1: function SP_UI_ApplicationPages_EntityPaginator$$9s_1($p0) {
        var $$t_5 = this;

        $p0.$y_1('page_next', function($p1_0) {
            $$t_5.$9S_1();
        });
        var $$t_6 = this;

        $p0.$y_1('page_prev', function($p1_0) {
            $$t_6.$9o_1();
        });
        var $$t_7 = this;

        $p0.$y_1('entity_remove', function($p1_0) {
            var $v_0 = SP.UI.ApplicationPages.ElementUtility.$V($p1_0, 'rowidx');

            if ($v_0) {
                $$t_7.$9v_1(Number.parseInvariant($v_0));
            }
        });
    },
    $8x_1: function SP_UI_ApplicationPages_EntityPaginator$$8x_1() {
        return (this.get_$29_1()).length > 0 ? (this.get_$29_1())[0] : null;
    }
};
SP.UI.ApplicationPages.EntityEntryParser = function SP_UI_ApplicationPages_EntityEntryParser() {
};
SP.UI.ApplicationPages.EntityEntryParser.prototype = {
    $Ax_0: '</Key><Value xsi:type=\"xsd:string\">',
    $Au_0: '</Value>',
    $9Z_0: '<Entity ',
    $8M_0: '</Entity>',
    $9l_0: function SP_UI_ApplicationPages_EntityEntryParser$$9l_0($p0) {
        var $v_0 = this.$1R_0($p0, 'Error=\"', '\"');

        if (!SP.UI.ApplicationPages.SU.$5($v_0)) {
            throw Error.create($v_0);
        }
        var $v_1 = new Array(0);
        var $v_2 = 0;

        while (($v_2 = $p0.indexOf(this.$9Z_0, $v_2)) !== -1) {
            var $v_3 = $p0.indexOf(this.$8M_0, $v_2 + 1);

            if ($v_3 === -1) {
                break;
            }
            var $v_4 = $p0.substring($v_2, $v_3);
            var $v_5 = this.$6G_0($v_4);

            $v_1[$v_1.length] = this.$7v_0($v_5, $v_4);
            $v_2 = $v_3;
        }
        return $v_1;
    },
    $6G_0: function SP_UI_ApplicationPages_EntityEntryParser$$6G_0($p0) {
        var $v_0 = new SP.UI.ApplicationPages.ResolveEntity();

        $v_0.entityType = SP.UI.ApplicationPages.ResolveEntity.typE_USER;
        var $v_1 = this.$1R_0($p0, 'DisplayText=\"', '\"');

        if (!$v_1) {
            $v_1 = this.$1R_0($p0, 'displaytext=\"', '\"');
        }
        var $v_2 = this.$1R_0($p0, 'description=\"', '\"');
        var $v_3 = this.$1R_0($p0, 'isresolved=\"', '\"');

        if ($v_3 !== 'False') {
            var $v_4 = this.$1R_0($p0, 'Key=\"', '\"');

            if (!$v_4) {
                $v_4 = this.$1R_0($p0, 'key=\"', '\"');
            }
            if ($v_4 && $v_1) {
                $v_0.displayName = $v_1;
                $v_0.accountName = $v_4;
                return $v_0;
            }
        }
        throw Error.create($v_2);
    },
    $7v_0: function SP_UI_ApplicationPages_EntityEntryParser$$7v_0($p0, $p1) {
        var $v_0 = this.$1Q_0($p1, 'PrincipalType');

        if ($v_0 === 'User') {
            $p0.entityType = SP.UI.ApplicationPages.ResolveEntity.typE_USER;
            $p0.id = this.$1Q_0($p1, 'SPUserID');
            if ($p0.id) {
                $p0.accountName = this.$1Q_0($p1, 'AccountName');
            }
            $p0.email = this.$1Q_0($p1, 'Email');
        }
        else if ($v_0 === 'SharePointGroup') {
            $p0.id = this.$1Q_0($p1, 'SPGroupID');
            $p0.entityType = SP.UI.ApplicationPages.ResolveEntity.typE_USER;
            $p0.isGroup = true;
            $p0.needResolve = true;
        }
        else if ($v_0 === 'Resource') {
            $p0.id = this.$1Q_0($p1, 'SPResourceId');
            $p0.entityType = SP.UI.ApplicationPages.ResolveEntity.typE_RESOURCE;
        }
        else if ($v_0 === 'ResourceGroup') {
            $p0.id = this.$1Q_0($p1, 'SPResourceId');
            $p0.entityType = SP.UI.ApplicationPages.ResolveEntity.typE_RESOURCE;
            $p0.isGroup = true;
            var $v_1 = [];
            var $v_2 = this.$1Q_0($p1, 'ResourceMembers');

            if ($v_2) {
                var $v_3 = $v_2.split(';#');

                for (var $v_4 = 0; $v_4 < $v_3.length; $v_4 += 2) {
                    var $v_5 = new SP.UI.ApplicationPages.ResolveEntity();

                    $v_5.id = $v_3[$v_4];
                    $v_5.displayName = $v_3[$v_4 + 1].replace(';;', ';');
                    $v_5.entityType = SP.UI.ApplicationPages.ResolveEntity.typE_RESOURCE;
                    Array.add($v_1, $v_5);
                }
            }
            $p0.members = $v_1;
        }
        return $p0;
    },
    $1Q_0: function SP_UI_ApplicationPages_EntityEntryParser$$1Q_0($p0, $p1) {
        return this.$1R_0($p0, $p1 + this.$Ax_0, this.$Au_0);
    },
    $1R_0: function SP_UI_ApplicationPages_EntityEntryParser$$1R_0($p0, $p1, $p2) {
        var $v_0 = $p0.indexOf($p1);

        if ($v_0 === -1) {
            return null;
        }
        $v_0 += $p1.length;
        var $v_1 = $p0.indexOf($p2, $v_0);

        if ($v_1 === -1) {
            return null;
        }
        return $p0.substring($v_0, $v_1);
    }
};
SP.UI.ApplicationPages.UserFieldControl = function SP_UI_ApplicationPages_UserFieldControl($p0, $p1) {
    this.$3s_0 = {};
    this.$p_0 = $p0;
    this.$6i_0 = $p1;
    if ((this.get_$4I_0()).style.display !== 'none') {
        var $$t_3 = this;

        $addHandler(this.get_$4I_0(), 'keyup', function($p1_0) {
            if ($p1_0.keyCode === 127 || $p1_0.keyCode === 8) {
                $$t_3.$6i_0();
            }
        });
    }
    this.$3F_0 = new SP.UI.ApplicationPages.EntityEntryParser();
    this.$8A_0();
};
SP.UI.ApplicationPages.UserFieldControl.prototype = {
    $5A_0: null,
    $4q_0: null,
    $p_0: null,
    $3F_0: null,
    $6i_0: null,
    $AQ_0: function SP_UI_ApplicationPages_UserFieldControl$$AQ_0($p0) {
        SP.UI.UIUtility.setInnerText(this.get_$4I_0(), $p0);
        (this.get_$8e_0()).value = $p0;
    },
    $4b_0: function SP_UI_ApplicationPages_UserFieldControl$$4b_0() {
        var $v_0 = [];
        var $v_1 = (this.get_$4I_0()).childNodes;

        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            if ($v_1[$v_2].nodeName !== 'SPAN') {
                continue;
            }
            try {
                var $v_3 = this.$9m_0($v_1[$v_2]);

                if ($v_3) {
                    Array.add($v_0, $v_3);
                }
            }
            catch ($$e_4) { }
        }
        return $v_0;
    },
    $9m_0: function SP_UI_ApplicationPages_UserFieldControl$$9m_0($p0) {
        var $v_0 = $p0.getElementsByTagName('div');
        var $v_1 = this.$3F_0.$6G_0($p0.innerHTML);

        if (!SP.UI.ApplicationPages.SU.$Y(this.$3s_0[$v_1.accountName])) {
            $v_1 = this.$3s_0[$v_1.accountName];
        }
        else {
            this.$3F_0.$7v_0($v_1, ($v_0[1].getAttributeNode('data')).value);
        }
        return $v_1;
    },
    $8A_0: function SP_UI_ApplicationPages_UserFieldControl$$8A_0() {
        var $v_0 = this.$4b_0();

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];

            if ($v_2.entityType === SP.UI.ApplicationPages.ResolveEntity.typE_USER && !$v_2.isGroup) {
                this.$3s_0[$v_2.accountName] = $v_2;
            }
        }
    },
    get_$4I_0: function SP_UI_ApplicationPages_UserFieldControl$get_$4I_0() {
        if (!this.$5A_0) {
            this.$5A_0 = $get(this.$p_0.id + '_upLevelDiv');
        }
        return this.$5A_0;
    },
    get_$8e_0: function SP_UI_ApplicationPages_UserFieldControl$get_$8e_0() {
        if (!this.$4q_0) {
            this.$4q_0 = $get(this.$p_0.id + '_downlevelTextBox');
        }
        return this.$4q_0;
    }
};
SP.UI.ApplicationPages.CalendarHeaderControls = function SP_UI_ApplicationPages_CalendarHeaderControls($p0) {
    SP.UI.ApplicationPages.CalendarHeaderControls.initializeBase(this);
    this.$1w_1 = $p0;
};
SP.UI.ApplicationPages.CalendarHeaderControls.get_$63 = function SP_UI_ApplicationPages_CalendarHeaderControls$get_$63() {
    return $get('DatePickerDiv');
};
SP.UI.ApplicationPages.CalendarHeaderControls.prototype = {
    $1w_1: null,
    $2X_1: 0,
    $P_1: null,
    $4j_1: false,
    $4R_1: function SP_UI_ApplicationPages_CalendarHeaderControls$$4R_1($p0) {
        this.$2X_1 = $p0;
        this.$7t_1();
    },
    $2l_1: function SP_UI_ApplicationPages_CalendarHeaderControls$$2l_1($p0) {
        this.$P_1 = $p0;
        this.$7t_1();
    },
    $7t_1: function SP_UI_ApplicationPages_CalendarHeaderControls$$7t_1() {
        var $v_0 = this.get_$8p_1();

        if (!this.$P_1 || !$v_0) {
            return;
        }
        var $v_1 = '';

        switch (this.$2X_1) {
        case 3:
        case 4:
        case 1:
            if (this.$P_1.length > 0) {
                var $v_2 = this.$P_1[0];

                if ($v_2.entityType !== SP.UI.ApplicationPages.ResolveEntity.typE_EVENT) {
                    $v_1 = $v_2.displayName;
                }
            }
            break;
        }
        $v_0.innerHTML = $v_1;
    },
    $An_1: function SP_UI_ApplicationPages_CalendarHeaderControls$$An_1($p0, $p1, $p2) {
        var $v_0 = 'javascript:MoveToDate(\'{0}\',\'{1}\');';

        (this.get_$7L_1()).setAttribute('href', String.format($v_0, SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode($p0), this.$1w_1));
        (this.get_$79_1()).setAttribute('href', String.format($v_0, SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode($p1), this.$1w_1));
        (this.get_$8X_1()).innerHTML = $p2;
    },
    $Ar_1: function SP_UI_ApplicationPages_CalendarHeaderControls$$Ar_1() {
        var $v_0 = this.$95_1();

        (this.get_$7L_1()).setAttribute('title', $v_0[0]);
        (this.get_$79_1()).setAttribute('title', $v_0[1]);
    },
    $AJ_1: function SP_UI_ApplicationPages_CalendarHeaderControls$$AJ_1($p0) {
        this.$4j_1 = true;
        var $v_0 = this.get_$6E_1();
        var $v_1 = new Sys.StringBuilder(SP.UI.ApplicationPages.CalendarHeaderControls.$6W);

        $v_1.append('<span>');
        $v_1.append($p0);
        $v_1.append('</span>');
        $v_0.innerHTML = $v_1.toString();
        $v_0.style.display = 'block';
    },
    $A9_1: function SP_UI_ApplicationPages_CalendarHeaderControls$$A9_1() {
        this.$4j_1 = false;
        (this.get_$6E_1()).style.display = 'none';
    },
    $6S_1: function SP_UI_ApplicationPages_CalendarHeaderControls$$6S_1() {
        return this.$4j_1;
    },
    $95_1: function SP_UI_ApplicationPages_CalendarHeaderControls$$95_1() {
        switch (this.$2X_1) {
        case 3:
        case 5:
            return [SP.Res.calendarPrevDay, SP.Res.calendarNextDay];
        case 1:
            return [SP.Res.calendarPrevMonth, SP.Res.calendarNextMonth];
        case 2:
        case 4:
            return [SP.Res.calendarPrevWeek, SP.Res.calendarNextWeek];
        }
        return ['', ''];
    },
    $Ao_1: function SP_UI_ApplicationPages_CalendarHeaderControls$$Ao_1($p0) {
        var $v_0 = SP.UI.ApplicationPages.CalendarHeaderControls.get_$63();

        if ($v_0) {
            var $v_1 = document.createElement('DIV');

            $v_1.innerHTML = $p0;
            $v_0.parentNode.replaceChild(SP.UI.ApplicationPages.ElementUtility.$l($v_1), $v_0);
        }
    },
    get_$7L_1: function SP_UI_ApplicationPages_CalendarHeaderControls$get_$7L_1() {
        return this.$2r_1('_nav_prev_a');
    },
    get_$79_1: function SP_UI_ApplicationPages_CalendarHeaderControls$get_$79_1() {
        return this.$2r_1('_nav_next_a');
    },
    get_$8X_1: function SP_UI_ApplicationPages_CalendarHeaderControls$get_$8X_1() {
        return this.$2r_1('_nav_header');
    },
    get_$8p_1: function SP_UI_ApplicationPages_CalendarHeaderControls$get_$8p_1() {
        return this.$2r_1('_entitySpan');
    },
    get_$6E_1: function SP_UI_ApplicationPages_CalendarHeaderControls$get_$6E_1() {
        return this.$2r_1('_err');
    },
    $2r_1: function SP_UI_ApplicationPages_CalendarHeaderControls$$2r_1($p0) {
        return $get(this.$1w_1 + $p0);
    }
};
SP.UI.ApplicationPages.CalendarRenderingStateMachine = function SP_UI_ApplicationPages_CalendarRenderingStateMachine() {
};
SP.UI.ApplicationPages.CalendarRenderingStateMachine.prototype = {
    $O_0: 0,
    $38_0: 0,
    $9T_0: function SP_UI_ApplicationPages_CalendarRenderingStateMachine$$9T_0() {
        this.$O_0 = this.$91_0();
        this.$38_0 = 0;
        return this.$O_0;
    },
    $1g_0: function SP_UI_ApplicationPages_CalendarRenderingStateMachine$$1g_0() {
        this.$38_0 = 0;
        this.$O_0 = 0;
    },
    $5H_0: function SP_UI_ApplicationPages_CalendarRenderingStateMachine$$5H_0() {
        switch (this.$O_0) {
        case 1:
        case 3:
            return true;
        default:
            return false;
        }
    },
    $9F_0: function SP_UI_ApplicationPages_CalendarRenderingStateMachine$$9F_0() {
        return this.$O_0 === 3;
    },
    $8G_0: function SP_UI_ApplicationPages_CalendarRenderingStateMachine$$8G_0() {
        return !!(this.$38_0 & 7);
    },
    $77_0: function SP_UI_ApplicationPages_CalendarRenderingStateMachine$$77_0() {
        switch (this.$O_0) {
        case 0:
            return;
        default:
            this.$38_0 |= 4;
            return;
        }
    },
    $9N_0: function SP_UI_ApplicationPages_CalendarRenderingStateMachine$$9N_0() {
        switch (this.$O_0) {
        case 1:
        case 0:
            return;
        default:
            this.$1g_0();
            return;
        }
    },
    $8H_0: function SP_UI_ApplicationPages_CalendarRenderingStateMachine$$8H_0($p0) {
        return !!(this.$38_0 & $p0);
    },
    $91_0: function SP_UI_ApplicationPages_CalendarRenderingStateMachine$$91_0() {
        if (this.$8H_0(4)) {
            return 1;
        }
        switch (this.$O_0) {
        case 0:
            return 1;
        case 1:
            return 3;
        case 3:
        case 4:
        default:
            return 4;
        }
    }
};
SP.UI.ApplicationPages.TableLocation = function SP_UI_ApplicationPages_TableLocation() {
    this.$2v_0 = -1;
    this.$k_0();
};
SP.UI.ApplicationPages.TableLocation.prototype = {
    $1_0: 0,
    $3_0: 0,
    $2k_0: function SP_UI_ApplicationPages_TableLocation$$2k_0($p0, $p1) {
        this.$1_0 = $p1.yPosToRow($p0.y);
        this.$3_0 = $p1.xPosToCol($p0.x);
    },
    $k_0: function SP_UI_ApplicationPages_TableLocation$$k_0() {
        this.$1_0 = this.$2v_0;
        this.$3_0 = this.$2v_0;
    },
    $2q_0: function SP_UI_ApplicationPages_TableLocation$$2q_0($p0) {
        return $p0.$1_0 === this.$1_0 && $p0.$3_0 === this.$3_0;
    },
    $1U_0: function SP_UI_ApplicationPages_TableLocation$$1U_0() {
        return this.$1_0 === this.$2v_0 || this.$3_0 === this.$2v_0;
    },
    $2F_0: function SP_UI_ApplicationPages_TableLocation$$2F_0($p0) {
        this.$1_0 = $p0.$1_0;
        this.$3_0 = $p0.$3_0;
    }
};
SP.UI.ApplicationPages.BaseInputHandler = function SP_UI_ApplicationPages_BaseInputHandler() {
};
SP.UI.ApplicationPages.BaseInputHandler.prototype = {
    $1I_0: null,
    $Aj_0: function SP_UI_ApplicationPages_BaseInputHandler$$Aj_0($p0) {
        return false;
    },
    $Ag_0: function SP_UI_ApplicationPages_BaseInputHandler$$Ag_0($p0) {
        return false;
    },
    $Ai_0: function SP_UI_ApplicationPages_BaseInputHandler$$Ai_0($p0) {
        return false;
    },
    $Ah_0: function SP_UI_ApplicationPages_BaseInputHandler$$Ah_0($p0) {
        return false;
    },
    $1g_0: function SP_UI_ApplicationPages_BaseInputHandler$$1g_0() {
    },
    $3X_0: function SP_UI_ApplicationPages_BaseInputHandler$$3X_0($p0, $p1) {
    },
    $5Y_0: function SP_UI_ApplicationPages_BaseInputHandler$$5Y_0($p0, $p1) {
    },
    $9X_0: function SP_UI_ApplicationPages_BaseInputHandler$$9X_0($p0, $p1) {
    },
    $9q_0: function SP_UI_ApplicationPages_BaseInputHandler$$9q_0($p0) {
    }
};
SP.UI.ApplicationPages.ItemDragHandler = function SP_UI_ApplicationPages_ItemDragHandler($p0, $p1, $p2, $p3) {
    SP.UI.ApplicationPages.ItemDragHandler.initializeBase(this);
    this.$15_1 = $p0;
    this.$18_1 = $p2;
    this.$F_1 = $p1;
    this.$s_1 = $p3;
};
SP.UI.ApplicationPages.ItemDragHandler.prototype = {
    $H_1: null,
    $F_1: null,
    $s_1: null,
    $18_1: null,
    $32_1: false,
    $15_1: null,
    $1a_1: null,
    $2R_1: null,
    $6t_1: null,
    $r_1: null,
    $2S_1: null,
    $9X_0: function SP_UI_ApplicationPages_ItemDragHandler$$9X_0($p0, $p1) {
        if (this.$6t_1 === $p1) {
            return;
        }
        else {
            this.$6t_1 = $p1;
        }
        if (this.$1a_1) {
            if (SP.UI.ApplicationPages.ElementUtility.$M(this.$1a_1, $p1)) {
                return;
            }
            this.$9x_1();
        }
        if (!this.$r_1 || !SP.UI.ApplicationPages.ElementUtility.$M(this.$15_1, this.$r_1)) {
            this.$r_1 = SP.UI.ApplicationPages.ElementUtility.$3b(this.$15_1);
        }
        if (SP.UI.ApplicationPages.ElementUtility.$M(this.$r_1, $p1)) {
            var $v_0 = this.$3c_1($p1);

            if ($v_0) {
                this.$82_1($v_0);
            }
        }
    },
    $9x_1: function SP_UI_ApplicationPages_ItemDragHandler$$9x_1() {
        Sys.UI.DomElement.removeCssClass(this.$1a_1, this.$2S_1);
        var $v_0 = this.$2R_1.length;

        for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
            Sys.UI.DomElement.removeCssClass(this.$2R_1[$v_1], this.$2S_1);
        }
        this.$1a_1 = null;
        this.$2R_1 = null;
    },
    $82_1: function SP_UI_ApplicationPages_ItemDragHandler$$82_1($p0) {
        var $v_0 = $p0.className;

        if ($v_0.indexOf('ms-acal-color') !== -1) {
            this.$2S_1 = 'ms-acal-item-hover';
        }
        else {
            this.$2S_1 = 'ms-acal-default-hover';
        }
        if ($v_0.indexOf('ms-acal-selected') !== -1) {
            return;
        }
        this.$1a_1 = $p0;
        Sys.UI.DomElement.addCssClass(this.$1a_1, this.$2S_1);
        this.$2R_1 = [];
        var $v_1 = this.$F_1.getRenderingInfo(this.$1a_1);

        while ($v_1.$2B_0) {
            $v_1 = $v_1.$2B_0;
        }
        while ($v_1) {
            var $v_2 = this.$F_1.findElementFromInfo($v_1);

            if ($v_2 && $v_2 !== this.$1a_1) {
                this.$2R_1[this.$2R_1.length] = $v_2;
                Sys.UI.DomElement.addCssClass($v_2, this.$2S_1);
            }
            $v_1 = $v_1.$3L_0;
        }
    },
    $Ah_0: function SP_UI_ApplicationPages_ItemDragHandler$$Ah_0($p0) {
        var $v_0 = this.$3c_1($p0.$1j_0);

        if ($v_0) {
            this.$3W_1();
            this.$H_1 = this.$F_1.draggableItem($v_0, this.$s_1);
            this.$7c_1();
            this.$8o_1($p0.$1j_0);
            return true;
        }
        return false;
    },
    $8o_1: function SP_UI_ApplicationPages_ItemDragHandler$$8o_1($p0) {
        if (SP.UI.ApplicationPages.RibbonConnector.$d()) {
            return;
        }
        var $v_0 = window.ribbon;

        if (SP.UI.ApplicationPages.SU.$2($v_0)) {
            return;
        }
        while ($p0 && (!$p0.className || $p0.className.indexOf('s4-wpcell') < 0)) {
            $p0 = $p0.parentNode;
        }
        if (!SP.UI.ApplicationPages.SU.$2($p0)) {
            $v_0.SelectWp($p0);
        }
    },
    $Aj_0: function SP_UI_ApplicationPages_ItemDragHandler$$Aj_0($p0) {
        if (!this.$H_1) {
            return false;
        }
        switch ($p0.keyCode) {
        case 27:
            if (this.$H_1.$3h_0()) {
                this.$3W_1();
            }
            else if (this.$32_1) {
                this.$H_1.$5q_0();
                this.$H_1 = null;
            }
            return true;
        case 127:
            if (this.$H_1.$3h_0() && !$p0.ctrlKey && !$p0.shiftKey) {
                this.$18_1.$6Q_0('Delete');
                return true;
            }
            break;
        case 13:
            if (this.$H_1.$3h_0() && $p0.target.nodeName !== 'A') {
                this.$7E_1();
                return true;
            }
            break;
        }
        return false;
    },
    $7E_1: function SP_UI_ApplicationPages_ItemDragHandler$$7E_1() {
        var $v_0 = this.$H_1.get_$1O_0();
        var $v_1 = $v_0.$6L_0();

        if (SP.UI.ApplicationPages.SU.$5($v_1)) {
            return;
        }
        if (!$v_0.$N_0.primary) {
            window.open($v_1, '_blank');
        }
        else {
            if (SP.UI.ApplicationPages.RibbonConnector.$d()) {
                STSNavigate($v_1);
            }
            else {
                this.$18_1.$6Q_0('ViewProperties');
            }
        }
    },
    $Ai_0: function SP_UI_ApplicationPages_ItemDragHandler$$Ai_0($p0) {
        var $v_0 = this.$3c_1($p0.$1j_0);

        if ($v_0 && this.$H_1) {
            this.$7E_1();
            return true;
        }
        return false;
    },
    $Ag_0: function SP_UI_ApplicationPages_ItemDragHandler$$Ag_0($p0) {
        if (SP.UI.ApplicationPages.RibbonConnector.$d()) {
            return false;
        }
        var $v_0 = this.$3c_1($p0.$1j_0);

        if ($v_0) {
            this.$3W_1();
            this.$H_1 = this.$F_1.draggableItem($v_0, this.$s_1);
            this.$H_1.$4L_0($p0.$1M_0);
            this.$32_1 = true;
            return true;
        }
        return false;
    },
    $3X_0: function SP_UI_ApplicationPages_ItemDragHandler$$3X_0($p0, $p1) {
        if (this.$32_1 && this.$H_1) {
            this.$H_1.$3X_0($p0, $p1);
        }
    },
    $5Y_0: function SP_UI_ApplicationPages_ItemDragHandler$$5Y_0($p0, $p1) {
        if (this.$32_1 && this.$H_1) {
            this.$32_1 = false;
            this.$H_1.$5Y_0($p0, $p1);
            this.$H_1 = null;
            this.$18_1.$7Y_0();
        }
    },
    $1g_0: function SP_UI_ApplicationPages_ItemDragHandler$$1g_0() {
        if (this.$3W_1()) {
            this.$18_1.$7Y_0();
        }
    },
    $3c_1: function SP_UI_ApplicationPages_ItemDragHandler$$3c_1($p0) {
        while ($p0 && $p0.nodeName !== 'TABLE') {
            if ($p0.tagName === 'DIV' && SP.UI.ApplicationPages.ElementUtility.$V($p0, '_index') && !SP.UI.ApplicationPages.ElementUtility.$V($p0, '_expand')) {
                return $p0;
            }
            else {
                $p0 = $p0.parentNode;
            }
        }
        return null;
    },
    $7c_1: function SP_UI_ApplicationPages_ItemDragHandler$$7c_1() {
        this.$H_1.$AB_0();
        var $v_0 = this.$H_1.get_$1O_0();

        if ($v_0.$N_0.primary) {
            this.$18_1.$7c_0($v_0.$11_0, $v_0.$2A_0);
        }
    },
    $3W_1: function SP_UI_ApplicationPages_ItemDragHandler$$3W_1() {
        if (this.$H_1 && this.$H_1.$3h_0()) {
            this.$H_1.$8a_0();
            this.$H_1 = null;
            return true;
        }
        return false;
    }
};
SP.UI.ApplicationPages.VirtualItemHandler = function SP_UI_ApplicationPages_VirtualItemHandler($p0, $p1) {
    SP.UI.ApplicationPages.VirtualItemHandler.initializeBase(this);
    this.$L_1 = $p0;
    this.$0_1 = this.$L_1.$0_0;
    this.$B_1 = $p1;
};
SP.UI.ApplicationPages.VirtualItemHandler.prototype = {
    $L_1: null,
    $0_1: null,
    $B_1: null,
    $14_1: 0,
    $3w_1: null,
    $Ai_0: function SP_UI_ApplicationPages_VirtualItemHandler$$Ai_0($p0) {
        if (!SP.UI.ApplicationPages.ElementUtility.$M(this.$0_1.get_rawElement(), $p0.$1j_0)) {
            return false;
        }
        if (this.$L_1.$1n_0()) {
            this.$B_1.show();
            return true;
        }
        return false;
    },
    $Aj_0: function SP_UI_ApplicationPages_VirtualItemHandler$$Aj_0($p0) {
        if (!this.$L_1.$1n_0()) {
            return false;
        }
        if ($p0.target && $p0.target.nodeName === 'A') {
            return false;
        }
        switch ($p0.keyCode) {
        case 27:
            this.$1g_0();
            break;
        case 13:
            this.$L_1.$5a_0(this.$B_1);
            this.$B_1.show();
            break;
        default:
            return false;
        }
        return true;
    },
    $Ag_0: function SP_UI_ApplicationPages_VirtualItemHandler$$Ag_0($p0) {
        var $v_0 = $p0.$1j_0;

        if ($v_0.nodeName !== 'A' && $v_0.parentNode && $v_0.parentNode.nodeName === 'A') {
            $v_0 = $v_0.parentNode;
        }
        if ($v_0.nodeName === 'A') {
            if (SP.UI.ApplicationPages.ElementUtility.$V($v_0, 'evtid') === 'new_item') {
                $p0.$2E_0 = false;
            }
            return false;
        }
        if (!this.$0_1.isInside($p0.$1M_0)) {
            return false;
        }
        this.$2D_1();
        this.$4Q_1();
        this.$L_1.$4L_0($p0.$1M_0);
        return true;
    },
    $3X_0: function SP_UI_ApplicationPages_VirtualItemHandler$$3X_0($p0, $p1) {
        this.$L_1.$3X_0($p0, $p1);
    },
    $5Y_0: function SP_UI_ApplicationPages_VirtualItemHandler$$5Y_0($p0, $p1) {
        this.$L_1.$5Y_0($p0, $p1);
        this.$L_1.$5a_0(this.$B_1);
    },
    $1g_0: function SP_UI_ApplicationPages_VirtualItemHandler$$1g_0() {
        this.$4Q_1();
        this.$L_1.$16_0();
        this.$B_1.$16_1();
    },
    $9X_0: function SP_UI_ApplicationPages_VirtualItemHandler$$9X_0($p0, $p1) {
        this.$4Q_1();
        if (this.$3w_1 === $p1) {
            return;
        }
        var $v_0 = this.$0_1.yPosToRow($p0.y);
        var $v_1 = this.$0_1.xPosToCol($p0.x);

        if ($v_0 === -1 || $v_1 === -1) {
            this.$2D_1();
            return;
        }
        if (this.$L_1.$9C_0($v_0, $v_1)) {
            return;
        }
        this.$2D_1();
        if (!this.$0_1.get_rawElement()) {
            return;
        }
        var $v_2 = SP.UI.ApplicationPages.ElementUtility.$l(this.$0_1.get_rawElement());

        if (!$v_2) {
            return;
        }
        if (SP.UI.ApplicationPages.ElementUtility.$M($v_2, $p1) || $p1.nodeName === 'DIV' && SP.UI.ApplicationPages.ElementUtility.$V($p1, '_expand')) {
            var $$t_5 = this;

            this.$14_1 = window.setTimeout(function() {
                if (!$$t_5.$14_1) {
                    return;
                }
                if ($$t_5.$3w_1 !== $p1) {
                    $$t_5.$3w_1 = $p1;
                }
                $$t_5.$L_1.$7l_0($p0);
                $$t_5.$14_1 = 0;
            }, 300);
        }
    },
    $9q_0: function SP_UI_ApplicationPages_VirtualItemHandler$$9q_0($p0) {
        var $$t_2 = this;

        $p0.$y_1('new_item', function($p1_0) {
            $$t_2.$L_1.$9p_0(null);
            $$t_2.$L_1.$5a_0($$t_2.$B_1);
            $$t_2.$B_1.show();
        });
    },
    $4Q_1: function SP_UI_ApplicationPages_VirtualItemHandler$$4Q_1() {
        if (this.$14_1) {
            window.clearTimeout(this.$14_1);
            this.$14_1 = 0;
        }
    },
    $2D_1: function SP_UI_ApplicationPages_VirtualItemHandler$$2D_1() {
        this.$3w_1 = null;
        this.$L_1.$2D_0();
    }
};
SP.UI.ApplicationPages.EntityControlInputHandler = function SP_UI_ApplicationPages_EntityControlInputHandler($p0, $p1, $p2, $p3) {
    SP.UI.ApplicationPages.EntityControlInputHandler.initializeBase(this);
    this.$v_1 = $p1;
    this.$0_1 = $p0;
    this.$54_1 = $p2;
    this.$4t_1 = $p3;
};
SP.UI.ApplicationPages.EntityControlInputHandler.prototype = {
    $0_1: null,
    $54_1: null,
    $v_1: null,
    $4l_1: false,
    $4t_1: null,
    $9q_0: function SP_UI_ApplicationPages_EntityControlInputHandler$$9q_0($p0) {
        var $$t_6 = this;

        $p0.$y_1('add_resource', function($p1_0) {
            __spPickerDialogFunc(1, $$t_6.$v_1, true);
        });
        var $$t_7 = this;

        $p0.$y_1('add_users', function($p1_0) {
            __spPickerDialogFunc(2, $$t_7.$v_1, true);
        });
        var $$t_8 = this;

        $p0.$y_1('resolve_entity', function($p1_0) {
            var $v_0 = $p1_0.parentNode.parentNode;
            var $v_1 = $v_0.getElementsByTagName('INPUT');

            $$t_8.$7q_1($v_1[0]);
        });
    },
    $Aj_0: function SP_UI_ApplicationPages_EntityControlInputHandler$$Aj_0($p0) {
        var $v_0 = $p0.target;

        if ($v_0.nodeName !== 'INPUT' || !SP.UI.ApplicationPages.ElementUtility.$M(this.$0_1.get_rawElement(), $v_0)) {
            return false;
        }
        if (this.$4l_1) {
            return true;
        }
        if (13 === $p0.keyCode && !$p0.ctrlKey && !$p0.altKey && !$p0.shiftKey || $p0.ctrlKey && $p0.keyCode === 75) {
            this.$7q_1($v_0);
            return true;
        }
        return false;
    },
    $7q_1: function SP_UI_ApplicationPages_EntityControlInputHandler$$7q_1($p0) {
        var $$t_7 = this, $$t_8 = this;

        window.WebForm_DoCallback(this.$92_1(), $p0.value, function($p1_0, $p1_1) {
            $$t_7.$67_1($p0);
            try {
                var $v_0 = (SP.UI.ApplicationPages.CalendarSelector.instance()).getSelector(2, $$t_7.$v_1);

                $v_0.selectEntities($p1_0, true);
                $p0.value = '';
            }
            catch ($$e_4) {
                $$t_7.$4t_1(String.format(SP.Res.calendarResolveError, SP.Utilities.HttpUtility.htmlEncode($p0.value)));
            }
        }, this.$54_1, function($p1_0, $p1_1) {
            $$t_8.$67_1($p0);
            $$t_8.$4t_1(SP.Utilities.HttpUtility.htmlEncode($p1_0));
        }, true);
        this.$AZ_1($p0);
    },
    $AZ_1: function SP_UI_ApplicationPages_EntityControlInputHandler$$AZ_1($p0) {
        this.$4l_1 = true;
        var $v_0 = this.$0_1.$2t_2(this.$0_1.get_$27_2());

        $v_0.style.cursor = 'wait';
        $p0.style.cursor = 'wait';
    },
    $67_1: function SP_UI_ApplicationPages_EntityControlInputHandler$$67_1($p0) {
        this.$4l_1 = false;
        var $v_0 = this.$0_1.$2t_2(this.$0_1.get_$27_2());

        if ($v_0) {
            $v_0.style.cursor = '';
        }
        $p0.style.cursor = '';
    },
    $92_1: function SP_UI_ApplicationPages_EntityControlInputHandler$$92_1() {
        var $v_0 = 'WebForm_DoCallback(\'';
        var $v_1 = $v_0.length;
        var $v_2 = $get(this.$54_1 + '_checkNames');
        var $v_3 = SP.UI.ApplicationPages.ElementUtility.$V($v_2, 'onclick');

        if (!SP.UI.ApplicationPages.SU.$5($v_3)) {
            var $v_4 = $v_3.indexOf($v_0);
            var $v_5 = $v_3.indexOf('\'', $v_4 + $v_1);

            if ($v_4 !== -1 && $v_5 !== -1) {
                return $v_3.substr($v_4 + $v_1, $v_5 - $v_4 - $v_1);
            }
        }
        return '';
    }
};
SP.UI.ApplicationPages.ScopeChangerHandler = function SP_UI_ApplicationPages_ScopeChangerHandler($p0, $p1) {
    SP.UI.ApplicationPages.ScopeChangerHandler.initializeBase(this);
    this.$4o_1 = $p0;
    this.$8_1 = $p1;
};
SP.UI.ApplicationPages.ScopeChangerHandler.prototype = {
    $9J_1: 5,
    $4o_1: null,
    $6l_1: null,
    $2Q_1: null,
    $8_1: null,
    $9X_0: function SP_UI_ApplicationPages_ScopeChangerHandler$$9X_0($p0, $p1) {
        if (this.$6l_1 === $p1) {
            return;
        }
        this.$6l_1 = $p1;
        if (this.$2Q_1) {
            if (SP.UI.ApplicationPages.ElementUtility.$M(this.$2Q_1, $p1)) {
                return;
            }
            Sys.UI.DomElement.removeCssClass(this.$2Q_1, 'ms-acal-hover');
            this.$2Q_1 = null;
        }
        if (SP.UI.ApplicationPages.ElementUtility.$M(this.$8_1, $p1)) {
            var $v_0 = this.$6I_1($p1);

            if ($v_0) {
                this.$2Q_1 = $v_0;
                Sys.UI.DomElement.addCssClass(this.$2Q_1, 'ms-acal-hover');
            }
        }
    },
    $Ah_0: function SP_UI_ApplicationPages_ScopeChangerHandler$$Ah_0($p0) {
        var $v_0 = this.$6I_1($p0.$1j_0);

        if (!$v_0) {
            return false;
        }
        var $v_1 = SP.UI.ApplicationPages.ElementUtility.$V($v_0, 'evtid');
        var $v_2 = SP.UI.ApplicationPages.ElementUtility.$V($v_0, 'date');

        this.$4o_1.moveToViewDate(this.$4o_1.$5Z_1($v_1), $v_2);
        return true;
    },
    $6I_1: function SP_UI_ApplicationPages_ScopeChangerHandler$$6I_1($p0) {
        for (var $v_0 = 0; $v_0 < this.$9J_1; $v_0++) {
            if ($p0.nodeName === 'TD' || $p0.nodeName === 'TH') {
                var $v_1 = SP.UI.ApplicationPages.ElementUtility.$V($p0, 'evtid');
                var $v_2 = SP.UI.ApplicationPages.ElementUtility.$V($p0, 'date');

                if (!SP.ScriptUtility.isNullOrEmptyString($v_1) && !SP.ScriptUtility.isNullOrEmptyString($v_1)) {
                    return $p0;
                }
                break;
            }
            $p0 = $p0.parentNode;
        }
        return null;
    }
};
SP.UI.ApplicationPages.CalendarVirtualItem = function SP_UI_ApplicationPages_CalendarVirtualItem($p0) {
    this.$6X_0 = '<table width=\"100%\" height=\"100%\" class=\"ms-acal-vcont\"><tr><td>{0}</td></tr></table>';
    this.$78_0 = '<a evtid=\"new_item\" title=\"{1}\" href=\"javascript:void(0)\"/><span class=\"ms-addcolumn-span\"><img class=\"ms-addcolumn-icon\" border=\"0\" src=\"{2}\"/></span>{0}</a>';
    this.$0_0 = $p0;
    this.$C_0 = new SP.UI.ApplicationPages.TableLocation();
    this.$A_0 = new SP.UI.ApplicationPages.TableLocation();
    this.$g_0 = new SP.UI.ApplicationPages.TableLocation();
};
SP.UI.ApplicationPages.CalendarVirtualItem.prototype = {
    $4W_0: 'ms-acal-vitem',
    $0_0: null,
    $C_0: null,
    $A_0: null,
    $g_0: null,
    $1W_0: null,
    $W_0: null,
    $3X_0: function SP_UI_ApplicationPages_CalendarVirtualItem$$3X_0($p0, $p1) {
        if (this.$C_0.$1U_0()) {
            return;
        }
        var $v_0 = new SP.UI.ApplicationPages.TableLocation();

        $v_0.$2k_0($p0, this.$0_0);
        if (SP.UI.ApplicationPages.ElementUtility.$4Y($p1) || $v_0.$1U_0()) {
            document.body.style.cursor = 'not-allowed';
            this.$9B_0();
            return;
        }
        else if ($v_0.$2q_0(this.$A_0)) {
            return;
        }
        else {
            document.body.style.cursor = 'default';
            this.$A_0.$2F_0($v_0);
        }
        this.$7R_0($p0);
    },
    $7R_0: function SP_UI_ApplicationPages_CalendarVirtualItem$$7R_0($p0) {
        if (!this.$1n_0()) {
            return;
        }
        var $v_0;

        if (this.isUpsideDown(this.$C_0, this.$A_0)) {
            $v_0 = this.findElements(this.$A_0, this.$C_0);
        }
        else {
            $v_0 = this.findElements(this.$C_0, this.$A_0);
        }
        this.$Ap_0($v_0, $p0);
    },
    $Ap_0: function SP_UI_ApplicationPages_CalendarVirtualItem$$Ap_0($p0, $p1) {
        var $v_0 = new Array(0);

        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            var $v_2 = $p0[$v_1];

            Sys.UI.DomElement.addCssClass($v_2.$2H_0, this.$4W_0);
            if (SP.UI.ApplicationPages.SU.$Y($v_0[$v_2.$1i_0])) {
                $v_0[$v_2.$1i_0] = [];
            }
            $v_0[$v_2.$1i_0][$v_2.$2n_0] = true;
        }
        if (this.$1W_0) {
            for (var $v_3 = 0; $v_3 < this.$1W_0.length; $v_3++) {
                var $v_4 = this.$1W_0[$v_3];

                if (SP.UI.ApplicationPages.SU.$Y($v_0[$v_4.$1i_0]) || !$v_0[$v_4.$1i_0][$v_4.$2n_0]) {
                    Sys.UI.DomElement.removeCssClass($v_4.$2H_0, this.$4W_0);
                }
            }
        }
        this.$1W_0 = $p0;
        if ($p1) {
            this.$2D_0();
            this.$7l_0($p1);
        }
    },
    $9B_0: function SP_UI_ApplicationPages_CalendarVirtualItem$$9B_0() {
        this.$A_0.$k_0();
        this.$5y_0();
    },
    $5y_0: function SP_UI_ApplicationPages_CalendarVirtualItem$$5y_0() {
        if (this.$1W_0) {
            for (var $v_0 = 0; $v_0 < this.$1W_0.length; $v_0++) {
                Sys.UI.DomElement.removeCssClass(this.$1W_0[$v_0].$2H_0, this.$4W_0);
            }
            this.$1W_0 = null;
        }
    },
    $5a_0: function SP_UI_ApplicationPages_CalendarVirtualItem$$5a_0($p0) {
        if (!this.$1n_0()) {
            return;
        }
        $p0.$16_1();
        if (this.isUpsideDown(this.$C_0, this.$A_0)) {
            this.updateDateTime($p0, this.$A_0, this.$C_0);
        }
        else {
            this.updateDateTime($p0, this.$C_0, this.$A_0);
        }
    },
    $4L_0: function SP_UI_ApplicationPages_CalendarVirtualItem$$4L_0($p0) {
        this.$A_0.$k_0();
        this.$C_0.$2k_0($p0, this.$0_0);
    },
    $5Y_0: function SP_UI_ApplicationPages_CalendarVirtualItem$$5Y_0($p0, $p1) {
        this.$3X_0($p0, $p1);
        document.body.style.cursor = 'default';
    },
    $16_0: function SP_UI_ApplicationPages_CalendarVirtualItem$$16_0() {
        this.$5y_0();
        this.clearLocalState();
        if (this.$W_0 && this.$W_0.parentNode) {
            this.$W_0.parentNode.removeChild(this.$W_0);
            this.$W_0 = null;
        }
        this.$A_0.$k_0();
        this.$C_0.$k_0();
        this.$g_0.$k_0();
    },
    $1n_0: function SP_UI_ApplicationPages_CalendarVirtualItem$$1n_0() {
        if (this.$C_0.$1U_0() || this.$A_0.$1U_0()) {
            return false;
        }
        else {
            return true;
        }
    },
    clearLocalState: function SP_UI_ApplicationPages_CalendarVirtualItem$clearLocalState() {
    },
    adjustHoverLocation: function SP_UI_ApplicationPages_CalendarVirtualItem$adjustHoverLocation($p0) {
        if (this.$1n_0() && !$p0.$1U_0()) {
            var $v_0 = this.$C_0;
            var $v_1 = this.$A_0;

            if (this.isUpsideDown($v_0, $v_1)) {
                $v_0 = this.$A_0;
                $v_1 = this.$C_0;
            }
            if (this.contains($v_0, $v_1, $p0)) {
                $p0.$2F_0($v_1);
                this.groupViewLocationAdjust($p0);
            }
        }
        return $p0;
    },
    groupViewLocationAdjust: function SP_UI_ApplicationPages_CalendarVirtualItem$groupViewLocationAdjust($p0) {
    },
    $7l_0: function SP_UI_ApplicationPages_CalendarVirtualItem$$7l_0($p0) {
        if (!this.$0_0 || !this.$0_0.get_rawElement()) {
            return;
        }
        this.$8l_0();
        this.$g_0.$2k_0($p0, this.$0_0);
        this.adjustHoverLocation(this.$g_0);
        if (this.$g_0.$1U_0()) {
            return;
        }
        var $v_0;

        if (this.$6Y_0(this.$g_0.$1_0, this.$g_0.$3_0)) {
            if (this.isUpsideDown(this.$C_0, this.$A_0)) {
                $v_0 = this.getHoverLayout(this.$A_0, this.$C_0);
            }
            else {
                $v_0 = this.getHoverLayout(this.$C_0, this.$A_0);
            }
        }
        else {
            $v_0 = this.getHoverLayout(this.$g_0, this.$g_0);
        }
        this.$W_0.style.display = 'block';
        this.$W_0.style.top = $v_0.$t_0 + 'px';
        this.$W_0.style.left = $v_0.$e_0 + 'px';
        this.$W_0.style.width = $v_0.$U_0 + 'px';
        this.$W_0.style.height = $v_0.$n_0 + 'px';
    },
    $8l_0: function SP_UI_ApplicationPages_CalendarVirtualItem$$8l_0() {
        if (this.$W_0) {
            return;
        }
        this.$W_0 = document.createElement('div');
        this.$W_0.className = 'ms-acal-vlink';
        var $v_0 = GetThemedImageUrl('spcommon.png');
        var $v_1 = String.format(this.$78_0, SP.Res.calendarItemNew, SP.Res.calendarItemNew, $v_0);

        this.$W_0.innerHTML = String.format(this.$6X_0, $v_1);
        (this.$0_0.get_rawElement()).appendChild(this.$W_0);
    },
    $2D_0: function SP_UI_ApplicationPages_CalendarVirtualItem$$2D_0() {
        this.$g_0.$k_0();
        if (this.$W_0) {
            this.$W_0.style.display = 'none';
        }
    },
    $9C_0: function SP_UI_ApplicationPages_CalendarVirtualItem$$9C_0($p0, $p1) {
        var $v_0 = new SP.UI.ApplicationPages.TableLocation();

        $v_0.$1_0 = $p0;
        $v_0.$3_0 = $p1;
        $v_0 = this.adjustHoverLocation($v_0);
        return $v_0.$2q_0(this.$g_0);
    },
    $6Y_0: function SP_UI_ApplicationPages_CalendarVirtualItem$$6Y_0($p0, $p1) {
        var $v_0 = new SP.UI.ApplicationPages.TableLocation();

        $v_0.$1_0 = $p0;
        $v_0.$3_0 = $p1;
        if (this.$1n_0()) {
            if (this.isUpsideDown(this.$C_0, this.$A_0)) {
                if (this.contains(this.$A_0, this.$C_0, $v_0)) {
                    return true;
                }
            }
            else {
                if (this.contains(this.$C_0, this.$A_0, $v_0)) {
                    return true;
                }
            }
        }
        return false;
    },
    $9p_0: function SP_UI_ApplicationPages_CalendarVirtualItem$$9p_0($p0) {
        if (!this.$6Y_0(this.$g_0.$1_0, this.$g_0.$3_0) || !this.$1n_0()) {
            this.$C_0.$2F_0(this.$g_0);
            this.$A_0.$2F_0(this.$g_0);
            this.$7R_0($p0);
        }
    }
};
SP.UI.ApplicationPages.VirtualRenderingItem = function SP_UI_ApplicationPages_VirtualRenderingItem() {
};
SP.UI.ApplicationPages.VirtualRenderingItem.prototype = {
    $1i_0: 0,
    $2n_0: 0,
    $2H_0: null
};
SP.UI.ApplicationPages.GroupViewVirtualItem = function SP_UI_ApplicationPages_GroupViewVirtualItem($p0) {
    SP.UI.ApplicationPages.GroupViewVirtualItem.initializeBase(this, [$p0]);
};
SP.UI.ApplicationPages.GroupViewVirtualItem.prototype = {
    isUpsideDown: function SP_UI_ApplicationPages_GroupViewVirtualItem$isUpsideDown($p0, $p1) {
        return $p0.$3_0 > $p1.$3_0;
    },
    findElements: function SP_UI_ApplicationPages_GroupViewVirtualItem$findElements($p0, $p1) {
        var $v_0 = 0;
        var $v_1 = this.$0_0;
        var $v_2 = [];

        for (var $v_3 = 0; $v_3 < $v_1.get_$27_2(); $v_3++) {
            var $v_4 = $v_1.$2t_2($v_3);
            var $v_5 = $v_4.getElementsByTagName('TD');

            for (var $v_6 = $p0.$3_0; $v_6 <= $p1.$3_0; $v_6++) {
                var $v_7 = new SP.UI.ApplicationPages.VirtualRenderingItem();

                $v_7.$1i_0 = $v_3;
                $v_7.$2n_0 = $v_6;
                $v_7.$2H_0 = SP.UI.ApplicationPages.ElementUtility.$l($v_5[$v_6]);
                $v_2[$v_0++] = $v_7;
            }
        }
        return $v_2;
    },
    contains: function SP_UI_ApplicationPages_GroupViewVirtualItem$contains($p0, $p1, $p2) {
        return $p0.$3_0 <= $p2.$3_0 && $p2.$3_0 <= $p1.$3_0;
    },
    groupViewLocationAdjust: function SP_UI_ApplicationPages_GroupViewVirtualItem$groupViewLocationAdjust($p0) {
        $p0.$1_0 = this.$0_0.get_$27_2() - 1;
    },
    getHoverLayout: function SP_UI_ApplicationPages_GroupViewVirtualItem$getHoverLayout($p0, $p1) {
        var $v_0 = this.$0_0.get_$27_2() - 1;

        return new SP.UI.ApplicationPages.LayoutInfo(this.$0_0.offsetTop($v_0), this.$0_0.$3U_2($p0.$3_0, $p1.$3_0 - $p0.$3_0 + 1) + 2, this.$0_0.$3S_2($p0.$3_0, $p1.$3_0 - $p0.$3_0 + 1) - 4, this.$0_0.$1m_2($v_0) - 4);
    }
};
SP.UI.ApplicationPages.DailyGroupVirtualItem = function SP_UI_ApplicationPages_DailyGroupVirtualItem($p0) {
    SP.UI.ApplicationPages.DailyGroupVirtualItem.initializeBase(this, [$p0]);
};
SP.UI.ApplicationPages.DailyGroupVirtualItem.prototype = {
    $h_2: 48,
    updateDateTime: function SP_UI_ApplicationPages_DailyGroupVirtualItem$updateDateTime($p0, $p1, $p2) {
        $p0.$19_1 = this.$0_0.$1P_2(0);
        $p0.$1X_1 = this.$0_0.$1P_2($p2.$3_0 === this.$h_2 - 1 ? 1 : 0);
        $p0.$25_1 = SP.UI.ApplicationPages.TimeScale.$5W($p1.$3_0);
        $p0.$1s_1 = SP.UI.ApplicationPages.TimeScale.$7n($p2.$3_0);
    }
};
SP.UI.ApplicationPages.WeekGroupVirtualItem = function SP_UI_ApplicationPages_WeekGroupVirtualItem($p0) {
    SP.UI.ApplicationPages.WeekGroupVirtualItem.initializeBase(this, [$p0]);
};
SP.UI.ApplicationPages.WeekGroupVirtualItem.prototype = {
    updateDateTime: function SP_UI_ApplicationPages_WeekGroupVirtualItem$updateDateTime($p0, $p1, $p2) {
        $p0.$19_1 = this.$0_0.$1P_2($p1.$3_0);
        $p0.$1X_1 = this.$0_0.$1P_2($p2.$3_0);
        $p0.$3k_1 = $p2.$3_0 - $p1.$3_0 > 0;
    }
};
SP.UI.ApplicationPages.MonthVirtualItem = function SP_UI_ApplicationPages_MonthVirtualItem($p0) {
    SP.UI.ApplicationPages.MonthVirtualItem.initializeBase(this, [$p0]);
};
SP.UI.ApplicationPages.MonthVirtualItem.prototype = {
    $X_1: 7,
    $w_1: null,
    clearLocalState: function SP_UI_ApplicationPages_MonthVirtualItem$clearLocalState() {
        this.$w_1 = null;
    },
    findElements: function SP_UI_ApplicationPages_MonthVirtualItem$findElements($p0, $p1) {
        this.$6A_1();
        var $v_0 = this.$0_0;
        var $v_1 = [];
        var $v_2 = $p0.$1_0 * this.$X_1 + $p0.$3_0;
        var $v_3 = $p1.$1_0 * this.$X_1 + $p1.$3_0;
        var $v_4 = 0;

        for (var $v_5 = $p0.$1_0; $v_5 <= $p1.$1_0; $v_5++) {
            var $v_6 = $v_5 * this.$X_1;
            var $v_7 = ($v_5 + 1) * this.$X_1 - 1;
            var $v_8 = Math.max($v_2, $v_6) % this.$X_1;
            var $v_9 = Math.min($v_3, $v_7) % this.$X_1;

            for (var $v_A = $v_8; $v_A <= $v_9; $v_A++) {
                var $v_B = new SP.UI.ApplicationPages.VirtualRenderingItem();

                $v_B.$1i_0 = $v_5;
                $v_B.$2n_0 = $v_A;
                $v_B.$2H_0 = this.$w_1[$v_5][$v_A];
                $v_1[$v_4++] = $v_B;
            }
        }
        return $v_1;
    },
    $6A_1: function SP_UI_ApplicationPages_MonthVirtualItem$$6A_1() {
        if (this.$w_1) {
            return;
        }
        this.$w_1 = new Array(0);
        var $v_0 = this.$0_0;
        var $v_1 = $v_0.get_$27_2();

        for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
            var $v_3 = new Array(this.$X_1);
            var $v_4 = $v_0.$2t_2($v_2);
            var $v_5 = $v_4.getElementsByTagName('TD');

            for (var $v_6 = 0; $v_6 < $v_5.length; $v_6++) {
                $v_3[$v_6] = SP.UI.ApplicationPages.ElementUtility.$l($v_5[$v_6]);
            }
            this.$w_1[$v_2] = $v_3;
        }
    },
    updateDateTime: function SP_UI_ApplicationPages_MonthVirtualItem$updateDateTime($p0, $p1, $p2) {
        var $v_0 = $p1.$1_0 * this.$X_1 + $p1.$3_0;
        var $v_1 = $p2.$1_0 * this.$X_1 + $p2.$3_0;

        $p0.$19_1 = this.$0_0.$1P_2($v_0);
        $p0.$1X_1 = this.$0_0.$1P_2($v_1);
        $p0.$3k_1 = $v_1 - $v_0 > 0;
    },
    isUpsideDown: function SP_UI_ApplicationPages_MonthVirtualItem$isUpsideDown($p0, $p1) {
        if ($p0.$1_0 > $p1.$1_0 || $p0.$1_0 === $p1.$1_0 && $p0.$3_0 > $p1.$3_0) {
            return true;
        }
        else {
            return false;
        }
    },
    contains: function SP_UI_ApplicationPages_MonthVirtualItem$contains($p0, $p1, $p2) {
        var $v_0 = $p0.$1_0 * this.$X_1 + $p0.$3_0;
        var $v_1 = $p1.$1_0 * this.$X_1 + $p1.$3_0;
        var $v_2 = $p2.$1_0 * this.$X_1 + $p2.$3_0;

        return $v_0 <= $v_2 && $v_2 <= $v_1;
    },
    getHoverLayout: function SP_UI_ApplicationPages_MonthVirtualItem$getHoverLayout($p0, $p1) {
        return new SP.UI.ApplicationPages.LayoutInfo(this.$0_0.offsetTop($p1.$1_0), this.$0_0.offsetLeft($p1.$3_0) + 2, this.$0_0.$1l_2($p1.$3_0) - 4, this.$0_0.$1m_2($p1.$1_0) - 2);
    }
};
SP.UI.ApplicationPages.DetailVirtualItem = function SP_UI_ApplicationPages_DetailVirtualItem($p0, $p1) {
    SP.UI.ApplicationPages.DetailVirtualItem.initializeBase(this, [$p0]);
    this.$6_1 = $p1;
};
SP.UI.ApplicationPages.DetailVirtualItem.prototype = {
    $h_1: 48,
    $w_1: null,
    $6_1: null,
    clearLocalState: function SP_UI_ApplicationPages_DetailVirtualItem$clearLocalState() {
        this.$w_1 = null;
    },
    findElements: function SP_UI_ApplicationPages_DetailVirtualItem$findElements($p0, $p1) {
        this.$6A_1();
        var $v_0 = this.$0_0;
        var $v_1 = [];
        var $v_2 = 0;
        var $v_3 = $p0.$1_0 + $p0.$3_0 * this.$h_1;
        var $v_4 = $p1.$1_0 + $p1.$3_0 * this.$h_1;

        for (var $v_5 = $p0.$3_0; $v_5 <= $p1.$3_0; $v_5++) {
            var $v_6 = $v_5 * this.$h_1 + this.$6_1.get_$m_0();
            var $v_7 = $v_5 * this.$h_1 + this.$6_1.get_$1B_0();
            var $v_8 = Math.max($v_3, $v_6) % this.$h_1;
            var $v_9 = Math.min($v_4, $v_7) % this.$h_1;

            for (var $v_A = $v_8; $v_A <= $v_9; $v_A++) {
                var $v_B = new SP.UI.ApplicationPages.VirtualRenderingItem();

                $v_B.$1i_0 = $v_A;
                $v_B.$2n_0 = $v_5;
                $v_B.$2H_0 = this.$w_1[$v_5][$v_A];
                $v_1[$v_2++] = $v_B;
            }
        }
        return $v_1;
    },
    updateDateTime: function SP_UI_ApplicationPages_DetailVirtualItem$updateDateTime($p0, $p1, $p2) {
        $p0.$19_1 = this.$0_0.$1P_2($p1.$3_0);
        $p0.$1X_1 = this.$0_0.$1P_2($p2.$1_0 === this.$h_1 - 1 ? $p2.$3_0 + 1 : $p2.$3_0);
        $p0.$25_1 = SP.UI.ApplicationPages.TimeScale.$5W($p1.$1_0);
        $p0.$1s_1 = SP.UI.ApplicationPages.TimeScale.$7n($p2.$1_0);
    },
    isUpsideDown: function SP_UI_ApplicationPages_DetailVirtualItem$isUpsideDown($p0, $p1) {
        if ($p0.$3_0 > $p1.$3_0 || $p0.$3_0 === $p1.$3_0 && $p0.$1_0 > $p1.$1_0) {
            return true;
        }
        else {
            return false;
        }
    },
    $6A_1: function SP_UI_ApplicationPages_DetailVirtualItem$$6A_1() {
        if (this.$w_1) {
            return;
        }
        this.$w_1 = new Array(0);
        var $v_0 = this.$0_0;
        var $v_1 = $v_0.get_$27_2();

        for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
            var $v_3 = $v_0.$2t_2($v_2);
            var $v_4 = $v_3.getElementsByTagName('TD');

            for (var $v_5 = 0; $v_5 < $v_4.length; $v_5++) {
                if (SP.UI.ApplicationPages.SU.$2(this.$w_1[$v_5])) {
                    this.$w_1[$v_5] = [];
                }
                this.$w_1[$v_5][$v_2] = $v_4[$v_5];
            }
        }
    },
    contains: function SP_UI_ApplicationPages_DetailVirtualItem$contains($p0, $p1, $p2) {
        var $v_0 = $p0.$3_0 * this.$h_1 + $p0.$1_0;
        var $v_1 = $p1.$3_0 * this.$h_1 + $p1.$1_0;
        var $v_2 = $p2.$3_0 * this.$h_1 + $p2.$1_0;

        return $v_0 <= $v_2 && $v_2 <= $v_1;
    },
    getHoverLayout: function SP_UI_ApplicationPages_DetailVirtualItem$getHoverLayout($p0, $p1) {
        return new SP.UI.ApplicationPages.LayoutInfo(this.$0_0.offsetTop($p1.$1_0), this.$0_0.offsetLeft($p1.$3_0) + 2, this.$0_0.$1l_2($p1.$3_0) - 4, this.$0_0.$1m_2($p1.$1_0) - 2);
    }
};
SP.UI.ApplicationPages.CalendarDraggableItem = function SP_UI_ApplicationPages_CalendarDraggableItem($p0, $p1, $p2, $p3) {
    this.$C_0 = new SP.UI.ApplicationPages.TableLocation();
    this.$A_0 = new SP.UI.ApplicationPages.TableLocation();
    this.$4z_0 = new Array(0);
    this.$9_0 = new Array(0);
    this.$0_0 = $p1;
    this.$F_0 = $p2;
    var $$t_9 = this;

    this.$51_0 = function($p1_0, $p1_1, $p1_2) {
        return true;
    };
    this.$s_0 = $p3;
    this.$8_0 = $p0.parentNode;
    this.$40_0 = this.$F_0.getRenderingInfo($p0);
    var $v_0 = this.$40_0;

    while ($v_0.$2B_0) {
        $v_0 = $v_0.$2B_0;
    }
    this.$2U_0 = 0;
    while ($v_0) {
        var $v_1 = this.$F_0.findElementFromInfo($v_0);

        if ($v_1) {
            this.$4z_0[this.$2U_0] = $v_0;
            this.$9_0[this.$2U_0] = $v_1;
            this.$2U_0++;
        }
        $v_0 = $v_0.$3L_0;
    }
};
SP.UI.ApplicationPages.CalendarDraggableItem.prototype = {
    $61_0: 'ms-acal-selected',
    $62_0: 'ms-acal-selcolor',
    $51_0: null,
    $0_0: null,
    $F_0: null,
    $57_0: false,
    $8_0: null,
    $2U_0: 0,
    $s_0: null,
    $40_0: null,
    $7e_0: function SP_UI_ApplicationPages_CalendarDraggableItem$$7e_0($p0) {
        if ($p0) {
            this.$51_0 = $p0;
        }
    },
    get_$1O_0: function SP_UI_ApplicationPages_CalendarDraggableItem$get_$1O_0() {
        return this.$40_0.$c_0;
    },
    $3X_0: function SP_UI_ApplicationPages_CalendarDraggableItem$$3X_0($p0, $p1) {
        var $v_0 = new SP.UI.ApplicationPages.TableLocation();

        $v_0.$2k_0($p0, this.$0_0);
        var $v_1 = $v_0.$1_0 - this.$C_0.$1_0;
        var $v_2 = $v_0.$3_0 - this.$C_0.$3_0;

        if (SP.UI.ApplicationPages.ElementUtility.$4Y($p1) || $v_0.$1U_0() || !this.$5u_0($v_1, $v_2)) {
            document.body.style.cursor = 'not-allowed';
            this.$5Q_0();
        }
        else {
            document.body.style.cursor = 'move';
            if (this.$C_0.$2q_0($v_0)) {
                this.$A_0.$2F_0($v_0);
                this.$7W_0();
            }
            else if (!this.$A_0.$2q_0($v_0)) {
                this.$A_0.$2F_0($v_0);
                this.$7S_0($v_1, $v_2);
            }
        }
    },
    $5u_0: function SP_UI_ApplicationPages_CalendarDraggableItem$$5u_0($p0, $p1) {
        var $v_0 = this.get_$1O_0();
        var $v_1 = $v_0.$2A_0;

        if (SP.UI.ApplicationPages.SU.$5($v_1)) {
            return false;
        }
        if ($v_0.$N_0.disableDrag) {
            return false;
        }
        $v_1 = $v_1.substr($v_1.length - 1, 1);
        if ((parseInt($v_1, 16) & 4) !== 4) {
            return false;
        }
        return this.$51_0($v_0, $p0, $p1);
    },
    $AB_0: function SP_UI_ApplicationPages_CalendarDraggableItem$$AB_0() {
        this.$57_0 = true;
        this.$83_0();
    },
    $8a_0: function SP_UI_ApplicationPages_CalendarDraggableItem$$8a_0() {
        this.$57_0 = false;
        this.$9y_0();
    },
    $3h_0: function SP_UI_ApplicationPages_CalendarDraggableItem$$3h_0() {
        return this.$57_0;
    },
    $4L_0: function SP_UI_ApplicationPages_CalendarDraggableItem$$4L_0($p0) {
        this.$C_0.$2k_0($p0, this.$0_0);
        this.$A_0.$k_0();
        this.$7j_0(2);
    },
    $5Y_0: function SP_UI_ApplicationPages_CalendarDraggableItem$$5Y_0($p0, $p1) {
        var $v_0 = new SP.UI.ApplicationPages.TableLocation();

        $v_0.$2k_0($p0, this.$0_0);
        if ($v_0.$1U_0()) {
            this.$5q_0();
        }
        else {
            var $v_1 = $v_0.$1_0 - this.$C_0.$1_0;
            var $v_2 = $v_0.$3_0 - this.$C_0.$3_0;

            if ($v_0.$2q_0(this.$C_0) || !this.$s_0 || !this.$5u_0($v_1, $v_2) || SP.UI.ApplicationPages.ElementUtility.$4Y($p1)) {
                this.$5Q_0();
            }
            else {
                this.$s_0.$AE_0((this.get_$1O_0()).$11_0, $v_1, $v_2);
            }
            this.$66_0();
        }
    },
    $5q_0: function SP_UI_ApplicationPages_CalendarDraggableItem$$5q_0() {
        this.$5Q_0();
        this.$66_0();
    },
    $5Q_0: function SP_UI_ApplicationPages_CalendarDraggableItem$$5Q_0() {
        this.$A_0.$k_0();
        this.$7W_0();
    },
    $66_0: function SP_UI_ApplicationPages_CalendarDraggableItem$$66_0() {
        document.body.style.cursor = 'default';
        this.$7j_0(1);
    },
    $8L_0: function SP_UI_ApplicationPages_CalendarDraggableItem$$8L_0($p0) {
        var $v_0 = $p0;
        var $v_1 = {};
        var $v_2 = $v_1;
        var $$dict_4 = $v_0;

        for (var $$key_5 in $$dict_4) {
            var $v_3 = {
                key: $$key_5,
                value: $$dict_4[$$key_5]
            };

            $v_2[$v_3.key] = $v_3.value;
        }
        return $v_1;
    },
    $7S_0: function SP_UI_ApplicationPages_CalendarDraggableItem$$7S_0($p0, $p1) {
        var $v_0;

        if (!$p0 && !$p1) {
            $v_0 = this.$4z_0;
        }
        else {
            var $v_1 = this.$8L_0(this.get_$1O_0());

            this.$s_0.$9H_0($v_1, $p0, $p1);
            $v_0 = this.$F_0.sortItem($v_1, this.$40_0.$1_0);
        }
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            if (SP.UI.ApplicationPages.SU.$2(this.$9_0[$v_2])) {
                var $v_3 = this.$9_0[0].cloneNode(true);

                this.$8_0.appendChild($v_3);
                this.$9_0[$v_2] = $v_3;
            }
            if (this.$9_0[$v_2].style.display === 'none') {
                this.$9_0[$v_2].style.display = 'block';
            }
            this.$F_0.renderDraggingItem(this.$9_0[$v_2], $v_0[$v_2]);
        }
        for (var $v_4 = $v_0.length; $v_4 < this.$9_0.length; $v_4++) {
            if (SP.UI.ApplicationPages.SU.$2(this.$9_0[$v_4])) {
                continue;
            }
            this.$9_0[$v_4].style.display = 'none';
        }
    },
    $7W_0: function SP_UI_ApplicationPages_CalendarDraggableItem$$7W_0() {
        for (var $v_0 = this.$2U_0; $v_0 < this.$9_0.length; $v_0++) {
            if (SP.UI.ApplicationPages.SU.$2(this.$9_0[$v_0])) {
                continue;
            }
            this.$8_0.removeChild(this.$9_0[$v_0]);
            this.$9_0[$v_0] = null;
        }
        for (var $v_1 = 0; $v_1 < this.$2U_0; $v_1++) {
            if (this.$9_0[$v_1].style.display === 'none') {
                this.$9_0[$v_1].style.display = 'block';
            }
            this.$F_0.resetItemLayout(this.$9_0[$v_1]);
        }
    },
    $83_0: function SP_UI_ApplicationPages_CalendarDraggableItem$$83_0() {
        for (var $v_0 = 0; $v_0 < this.$9_0.length; $v_0++) {
            if (SP.UI.ApplicationPages.SU.$2(this.$9_0[$v_0])) {
                continue;
            }
            Sys.UI.DomElement.addCssClass(this.$9_0[$v_0], this.$61_0);
            if (!(this.get_$1O_0()).$N_0.primary) {
                Sys.UI.DomElement.addCssClass(this.$9_0[$v_0], this.$62_0 + (this.get_$1O_0()).$N_0.color);
            }
        }
    },
    $9y_0: function SP_UI_ApplicationPages_CalendarDraggableItem$$9y_0() {
        for (var $v_0 = 0; $v_0 < this.$9_0.length; $v_0++) {
            if (SP.UI.ApplicationPages.SU.$2(this.$9_0[$v_0])) {
                continue;
            }
            Sys.UI.DomElement.removeCssClass(this.$9_0[$v_0], this.$61_0);
            if (!(this.get_$1O_0()).$N_0.primary) {
                Sys.UI.DomElement.removeCssClass(this.$9_0[$v_0], this.$62_0 + (this.get_$1O_0()).$N_0.color);
            }
        }
    },
    $7j_0: function SP_UI_ApplicationPages_CalendarDraggableItem$$7j_0($p0) {
        for (var $v_0 = 0; $v_0 < this.$9_0.length; $v_0++) {
            if (SP.UI.ApplicationPages.SU.$2(this.$9_0[$v_0])) {
                continue;
            }
            this.$9_0[$v_0].style.zIndex = $p0;
        }
    }
};
SP.UI.ApplicationPages.CalendarTableBase = function SP_UI_ApplicationPages_CalendarTableBase($p0) {
    this.$$d_$1l_2 = Function.createDelegate(this, this.$1l_2);
    this.$$d_$1m_2 = Function.createDelegate(this, this.$1m_2);
    SP.UI.ApplicationPages.CalendarTableBase.initializeBase(this, [$p0]);
};
SP.UI.ApplicationPages.CalendarTableBase.prototype = {
    $2x_2: null,
    $2y_2: null,
    m_adjustX: 0,
    m_adjustY: 0,
    m_endAdjustX: 0,
    $44_2: null,
    $6m_2: null,
    $71_2: false,
    $3x_2: 0,
    $u_2: false,
    $5B_2: true,
    $1c_2: 0,
    $26_2: 0,
    $9I_2: 0,
    $72_2: 0,
    get_rawElement: function SP_UI_ApplicationPages_CalendarTableBase$get_rawElement() {
        return this.get_element();
    },
    isInside: function SP_UI_ApplicationPages_CalendarTableBase$isInside($p0) {
        return this.xPosToCol($p0.x) !== -1 && this.yPosToRow($p0.y) !== -1;
    },
    offsetTop: function SP_UI_ApplicationPages_CalendarTableBase$offsetTop($p0) {
        if (!this.$2y_2) {
            this.$2y_2 = this.calcOffsetTopArray();
        }
        return this.$2y_2[$p0];
    },
    offsetLeft: function SP_UI_ApplicationPages_CalendarTableBase$offsetLeft($p0) {
        if (!this.$2x_2) {
            this.$2x_2 = this.calcOffsetLeftArray();
        }
        return this.$u_2 ? this.$2x_2[$p0 + 1] : this.$2x_2[$p0];
    },
    yPosToRow: function SP_UI_ApplicationPages_CalendarTableBase$yPosToRow($p0) {
        if ($p0 < this.offsetTop(0)) {
            return -1;
        }
        for (var $v_0 = 1; $v_0 < this.$2y_2.length; $v_0++) {
            if ($p0 < this.offsetTop($v_0)) {
                return $v_0 - 1;
            }
        }
        return -1;
    },
    xPosToCol: function SP_UI_ApplicationPages_CalendarTableBase$xPosToCol($p0) {
        var $v_0 = this.get_$2e_2();
        var $v_1 = true;

        if (this.$u_2) {
            for (var $v_2 = 0; $v_2 < $v_0; $v_2++) {
                if (this.offsetLeft($v_2 - 1) === -1) {
                    continue;
                }
                if ($v_1 && $p0 > this.offsetLeft($v_2 - 1)) {
                    return -1;
                }
                $v_1 = false;
                if ($p0 > this.offsetLeft($v_2)) {
                    return $v_2;
                }
            }
        }
        else {
            for (var $v_3 = 0; $v_3 < $v_0; $v_3++) {
                if (this.offsetLeft($v_3) === -1) {
                    continue;
                }
                if ($v_1 && $p0 < this.offsetLeft($v_3)) {
                    return -1;
                }
                $v_1 = false;
                if ($p0 < this.offsetLeft($v_3 + 1)) {
                    return $v_3;
                }
            }
        }
        return -1;
    },
    $7i_2: function SP_UI_ApplicationPages_CalendarTableBase$$7i_2($p0) {
        this.$6m_2 = $p0;
        this.$5p_2();
        if (!this.$71_2) {
            this.initTableMetrixInfo();
            this.$8J_2();
            this.$3x_2 = this.calcMaxWeekNameWidth();
            this.$7s_2();
            this.$71_2 = true;
        }
        else {
            this.$5t_2(this.$5B_2);
        }
        this.postSetupTable();
    },
    postSetupTable: function SP_UI_ApplicationPages_CalendarTableBase$postSetupTable() {
    },
    get_$5c_2: function SP_UI_ApplicationPages_CalendarTableBase$get_$5c_2() {
        return SP.UI.ApplicationPages.ElementUtility.$3f(SP.UI.ApplicationPages.ElementUtility.$V(this.get_element(), 'ctxid'));
    },
    $5p_2: function SP_UI_ApplicationPages_CalendarTableBase$$5p_2() {
        this.$26_2 = 0;
        this.$1c_2 = 0;
        var $v_0 = (this.get_element()).firstChild;

        while ($v_0 && SP.UI.ApplicationPages.ElementUtility.$M(this.get_$5c_2(), $v_0.parentNode)) {
            this.$26_2 += $v_0.offsetTop;
            this.$1c_2 += $v_0.offsetLeft;
            $v_0 = $v_0.offsetParent;
        }
        this.$9I_2 = this.$1c_2 + $v_0.offsetWidth;
        this.$72_2 = this.$26_2 + $v_0.offsetHeight;
    },
    $8J_2: function SP_UI_ApplicationPages_CalendarTableBase$$8J_2() {
        var $v_0 = this.get_element();

        while ($v_0) {
            if (!SP.UI.ApplicationPages.SU.$5($v_0.dir)) {
                this.$u_2 = $v_0.dir.toLowerCase() === 'rtl';
                break;
            }
            $v_0 = $v_0.parentNode;
        }
    },
    get_$2e_2: function SP_UI_ApplicationPages_CalendarTableBase$get_$2e_2() {
        return 7;
    },
    $1P_2: function SP_UI_ApplicationPages_CalendarTableBase$$1P_2($p0) {
        return this.$6m_2[$p0];
    },
    $7U_2: function SP_UI_ApplicationPages_CalendarTableBase$$7U_2($p0) {
        this.$44_2 = null;
        this.$1T_2();
        this.invalidateLocalCache();
        (this.get_element()).innerHTML = $p0;
    },
    invalidateLocalCache: function SP_UI_ApplicationPages_CalendarTableBase$invalidateLocalCache() {
    },
    $7s_2: function SP_UI_ApplicationPages_CalendarTableBase$$7s_2() {
        if (this.$3x_2 <= 0) {
            return;
        }
        var $v_0 = false;

        for (var $v_1 = 0; $v_1 < this.get_$2e_2(); $v_1++) {
            if (this.$1l_2($v_1) < this.$3x_2) {
                $v_0 = true;
                break;
            }
        }
        if (this.$5B_2 === $v_0) {
            return;
        }
        this.$5t_2($v_0);
    },
    $5t_2: function SP_UI_ApplicationPages_CalendarTableBase$$5t_2($p0) {
        if (!this.$3x_2) {
            return;
        }
        var $v_0 = (this.get_rows())[0];
        var $v_1 = $v_0.childNodes;

        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            if ($v_1[$v_2].nodeType !== 1) {
                continue;
            }
            var $v_3 = $v_1[$v_2].getElementsByTagName('SPAN');

            if ($v_3.length !== 2) {
                continue;
            }
            if ($p0) {
                $v_3[0].style.display = 'none';
                $v_3[1].style.display = 'inline';
            }
            else {
                $v_3[0].style.display = 'inline';
                $v_3[1].style.display = 'none';
            }
        }
        this.$1T_2();
        this.$5B_2 = $p0;
    },
    $1m_2: function SP_UI_ApplicationPages_CalendarTableBase$$1m_2($p0) {
        var $v_0 = this.offsetTop($p0);

        return $v_0 === -1 ? 0 : this.offsetTop($p0 + 1) - $v_0;
    },
    $1l_2: function SP_UI_ApplicationPages_CalendarTableBase$$1l_2($p0) {
        var $v_0;

        if (this.$u_2) {
            $v_0 = this.offsetLeft($p0 - 1);
            if ($v_0 === -1) {
                return 0;
            }
            return $v_0 - this.offsetLeft($p0);
        }
        else {
            $v_0 = this.offsetLeft($p0);
            if ($v_0 === -1) {
                return 0;
            }
            return this.offsetLeft($p0 + 1) - $v_0;
        }
    },
    $3S_2: function SP_UI_ApplicationPages_CalendarTableBase$$3S_2($p0, $p1) {
        var $v_0 = 0;

        for (var $v_1 = 0; $v_1 < $p1; $v_1++) {
            $v_0 += this.$1l_2($p0 + $v_1);
        }
        return $v_0;
    },
    $3U_2: function SP_UI_ApplicationPages_CalendarTableBase$$3U_2($p0, $p1) {
        return this.$u_2 ? this.offsetLeft($p0 + $p1 - 1) : this.offsetLeft($p0);
    },
    $1T_2: function SP_UI_ApplicationPages_CalendarTableBase$$1T_2() {
        this.$2y_2 = null;
        this.$2x_2 = null;
    },
    $AR_2: function SP_UI_ApplicationPages_CalendarTableBase$$AR_2($p0) {
    },
    get_rows: function SP_UI_ApplicationPages_CalendarTableBase$get_rows() {
        if (!this.$44_2 && this.get_element()) {
            this.$44_2 = (this.get_element()).firstChild.rows;
        }
        return this.$44_2;
    },
    get_tableOffsetTop: function SP_UI_ApplicationPages_CalendarTableBase$get_tableOffsetTop() {
        return this.$26_2;
    },
    get_tableOffsetBottom: function SP_UI_ApplicationPages_CalendarTableBase$get_tableOffsetBottom() {
        return this.$72_2;
    }
};
SP.UI.ApplicationPages.V3ResourceSelector = function SP_UI_ApplicationPages_V3ResourceSelector(elem, key) {
    SP.UI.ApplicationPages.V3ResourceSelector.initializeBase(this, [key, 1]);
    this.$p_1 = elem;
    if (this.$p_1.selectedIndex > 0) {
        var $v_0 = this.$p_1.options[this.$p_1.selectedIndex];
        var $v_1 = $v_0.value;

        if ($v_1.indexOf(';#') !== -1) {
            $v_1 = ($v_1.split(';#'))[0];
        }
        this.$6B_1();
        Array.add(this.get_selectedEntities(), this.$P_1[$v_1]);
    }
};
SP.UI.ApplicationPages.V3ResourceSelector.prototype = {
    $p_1: null,
    $P_1: null,
    onSelectChanged: function SP_UI_ApplicationPages_V3ResourceSelector$onSelectChanged() {
        this.$6B_1();
        var $v_0 = this.get_selectedEntities();

        Array.clear($v_0);
        var $v_1 = this.$p_1.options[this.$p_1.selectedIndex];
        var $v_2 = $v_1.value;

        if (SP.UI.ApplicationPages.SU.$5($v_2)) {
            this.$p_1.selectedIndex = 0;
        }
        else {
            if ($v_2.indexOf(';#') !== -1) {
                $v_2 = ($v_2.split(';#'))[0];
            }
            Array.add($v_0, this.$P_1[$v_2]);
        }
        this.get_callback()(this, new Sys.EventArgs());
    },
    $6B_1: function SP_UI_ApplicationPages_V3ResourceSelector$$6B_1() {
        if (this.$P_1) {
            return;
        }
        var $v_0 = {};
        var $v_1 = this.$p_1.options;

        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2];

            if (SP.UI.ApplicationPages.SU.$5($v_3.value)) {
                continue;
            }
            var $v_4 = new SP.UI.ApplicationPages.ResolveEntity();

            $v_4.displayName = $v_3.text;
            $v_4.id = $v_3.value;
            $v_4.entityType = SP.UI.ApplicationPages.ResolveEntity.typE_RESOURCE;
            if ($v_4.id.indexOf(';#') !== -1) {
                $v_4.isGroup = true;
                $v_4.id = ($v_4.id.split(';#'))[0];
            }
            $v_0[$v_4.id] = $v_4;
        }
        for (var $v_5 = 0; $v_5 < $v_1.length; $v_5++) {
            var $v_6 = $v_1[$v_5];

            if ($v_6.value.indexOf(';#') === -1) {
                continue;
            }
            var $v_7 = $v_6.value.split(';#');

            if ($v_7.length < 2) {
                continue;
            }
            var $v_8 = [];

            for (var $v_A = 1; $v_A < $v_7.length; $v_A++) {
                if (SP.UI.ApplicationPages.SU.$5($v_7[$v_A])) {
                    continue;
                }
                Array.add($v_8, $v_0[$v_7[$v_A]]);
            }
            var $v_9 = $v_0[$v_7[0]];

            $v_9.members = $v_8;
        }
        this.$P_1 = $v_0;
    }
};
SP.UI.ApplicationPages.V3PeopleSelector = function SP_UI_ApplicationPages_V3PeopleSelector(elem, key) {
    this.$$d_onPeopleUpdated = Function.createDelegate(this, this.onPeopleUpdated);
    SP.UI.ApplicationPages.V3PeopleSelector.initializeBase(this, [key, 2]);
    if (!elem) {
        return;
    }
    this.$1o_1 = new SP.UI.ApplicationPages.UserFieldControl(elem, this.$$d_onPeopleUpdated);
    this.$15_1 = elem;
    while (this.$15_1) {
        if (this.$15_1.nodeName === 'DIV' && this.$15_1.id.startsWith('WebPart')) {
            break;
        }
        this.$15_1 = this.$15_1.parentNode;
    }
    this.onPeopleUpdated();
};
SP.UI.ApplicationPages.V3PeopleSelector.prototype = {
    $15_1: null,
    $1o_1: null,
    onPeopleUpdated: function SP_UI_ApplicationPages_V3PeopleSelector$onPeopleUpdated() {
        var $v_0 = this.$1o_1.$4b_0();

        this.set_selectedEntities($v_0);
        this.get_callback()(this, new Sys.EventArgs());
        var $v_1 = false;

        if ($v_0.length === 1) {
            var $v_2 = $v_0[0];

            if ($v_2.entityType === SP.UI.ApplicationPages.ResolveEntity.typE_USER && !$v_2.isGroup && !SP.UI.ApplicationPages.SU.$5($v_2.id)) {
                window.self.offlineBtnUser = $v_2.id;
                this.$8k_1($v_2.displayName);
                $v_1 = true;
            }
        }
        if (!$v_1) {
            this.$8d_1();
        }
    },
    $8k_1: function SP_UI_ApplicationPages_V3PeopleSelector$$8k_1($p0) {
        var $v_0 = this.$6N_1();

        if ($v_0) {
            $v_0.setAttribute('disabled', false);
            var $v_1 = ($v_0.attributes.getNamedItem('onmenuclick')).value;
            var $v_2 = $v_1.split('\',\'');
            var $v_3 = new Sys.StringBuilder($v_2[0]);

            for (var $v_4 = 1; $v_4 < $v_2.length; $v_4++) {
                $v_3.append('\',\'');
                if ($v_4 === 4) {
                    $v_3.append(SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode(EEDecodeSpecialChars($p0)));
                }
                else {
                    $v_3.append($v_2[$v_4]);
                }
            }
            ($v_0.attributes.getNamedItem('onmenuclick')).value = $v_3.toString();
        }
    },
    $8d_1: function SP_UI_ApplicationPages_V3PeopleSelector$$8d_1() {
        var $v_0 = this.$6N_1();

        if ($v_0) {
            $v_0.setAttribute('disabled', true);
        }
    },
    $6N_1: function SP_UI_ApplicationPages_V3PeopleSelector$$6N_1() {
        var $v_0;

        if (!this.$15_1) {
            $v_0 = document.getElementsByTagName('ie:menuitem');
        }
        else {
            $v_0 = this.$15_1.getElementsByTagName('ie:menuitem');
        }
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            if ($v_0[$v_1].id.endsWith('OfflineButton')) {
                return $v_0[$v_1];
            }
        }
        return null;
    }
};
SP.UI.ApplicationPages.RibbonCalendarSelector = function SP_UI_ApplicationPages_RibbonCalendarSelector($p0) {
    SP.UI.ApplicationPages.RibbonCalendarSelector.initializeBase(this, [$p0.ctxId, 3]);
    this.$3F_1 = new SP.UI.ApplicationPages.EntityEntryParser();
    this.$O_1 = $p0.userInfo['current'];
    this.$50_1 = $p0.enableResource && !$p0.enablePeople;
    if (!this.$50_1) {
        if (!SP.UI.ApplicationPages.SU.$Y($p0.userInfo['selected'])) {
            this.$5U_1($p0.userInfo['selected']);
        }
        else if (!SP.UI.ApplicationPages.SU.$Y(this.$O_1)) {
            this.$5U_1(this.$O_1);
        }
    }
};
SP.UI.ApplicationPages.RibbonCalendarSelector.$4d = function SP_UI_ApplicationPages_RibbonCalendarSelector$$4d($p0) {
    var $v_0 = new SP.UI.ApplicationPages.RibbonCalendarSelector($p0);

    (SP.UI.ApplicationPages.CalendarSelector.instance()).registerSelector($v_0);
};
SP.UI.ApplicationPages.RibbonCalendarSelector.prototype = {
    $O_1: null,
    $3F_1: null,
    $50_1: false,
    revertTo: function SP_UI_ApplicationPages_RibbonCalendarSelector$revertTo(ent) {
        if (!SP.UI.ApplicationPages.SU.$2(ent)) {
            SP.UI.ApplicationPages.BaseSelectorComponent.prototype.revertTo.call(this, ent);
        }
        else if (!this.$50_1 && !SP.UI.ApplicationPages.SU.$Y(this.$O_1)) {
            this.$5U_1(this.$O_1);
        }
    },
    $5U_1: function SP_UI_ApplicationPages_RibbonCalendarSelector$$5U_1($p0) {
        var $v_0 = new SP.UI.ApplicationPages.ResolveEntity();

        $v_0.id = $p0['id'];
        $v_0.displayName = SP.Utilities.HttpUtility.htmlEncode($p0['displayName']);
        $v_0.accountName = $p0['loginName'];
        $v_0.entityType = SP.UI.ApplicationPages.ResolveEntity.typE_USER;
        $v_0.email = $p0['email'];
        Array.clear(this.get_selectedEntities());
        Array.add(this.get_selectedEntities(), $v_0);
    },
    selectEntities: function SP_UI_ApplicationPages_RibbonCalendarSelector$selectEntities(result, fAdd) {
        var $v_0 = this.$3F_1.$9l_0(result);
        var $v_1 = this.get_selectedEntities();

        if (!fAdd) {
            Array.clear($v_1);
        }
        var $v_2 = $v_1.length;

        for (var $v_3 = 0; $v_3 < $v_0.length; $v_3++) {
            if (this.$8v_1($v_0[$v_3])) {
                continue;
            }
            else {
                Array.add($v_1, $v_0[$v_3]);
            }
        }
        this.get_callback()(this, new Sys.EventArgs());
    },
    $8v_1: function SP_UI_ApplicationPages_RibbonCalendarSelector$$8v_1($p0) {
        var $v_0 = this.get_selectedEntities();

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];

            if ($v_2.get_key() === $p0.get_key()) {
                if ($v_2.entityType === SP.UI.ApplicationPages.ResolveEntity.typE_RESOURCE && $v_2.isGroup) {
                    $v_2.members = $p0.members;
                }
                else if ($v_2.entityType === SP.UI.ApplicationPages.ResolveEntity.typE_USER && $v_2.isGroup) {
                    $v_2.needResolve = true;
                    $v_2.members = null;
                }
                return true;
            }
        }
        return false;
    }
};
SP.UI.ApplicationPages.CalendarViewBase = function SP_UI_ApplicationPages_CalendarViewBase() {
    this.$$d_$6R_1 = Function.createDelegate(this, this.$6R_1);
    SP.UI.ApplicationPages.CalendarViewBase.initializeBase(this);
};
SP.UI.ApplicationPages.CalendarViewBase.prototype = {
    $7U_1: function SP_UI_ApplicationPages_CalendarViewBase$$7U_1($p0) {
        if (!SP.UI.ApplicationPages.SU.$2($p0)) {
            this.$0_1.$7U_2($p0);
        }
    },
    $60_1: function SP_UI_ApplicationPages_CalendarViewBase$$60_1($p0, $p1, $p2) {
        var $v_0 = [];
        var $v_1 = this.get_infoUpdater();
        var $v_2 = Math.floor(($p1 - $p0) / 7) + 1;

        for (var $v_3 = 0; $v_3 < $v_2; $v_3++) {
            var $v_4 = new SP.UI.ApplicationPages.CalendarInfoGrid($v_1);

            if (this.isGroupView()) {
                $v_4.$2W_0 = $p2;
            }
            $v_0[$v_3] = $v_4;
        }
        return $v_0;
    },
    emptY_DIV: '<div style=\"position:absolute;\"></div>',
    $E_1: null,
    $0_1: null,
    $L_1: null,
    $1y_1: null,
    $21_1: null,
    $I_1: null,
    $58_1: null,
    $Z_1: null,
    $4r_1: null,
    $3I_1: 0,
    $34_1: 0,
    initializeView: function SP_UI_ApplicationPages_CalendarViewBase$initializeView($p0, $p1, $p2) {
        this.$0_1 = $p0;
        this.$L_1 = $p1;
        this.$I_1 = $p2;
        this.$21_1 = new SP.UI.ApplicationPages.DivInfoRepository();
    },
    invalidateRootElement: function SP_UI_ApplicationPages_CalendarViewBase$invalidateRootElement() {
        var $v_0 = this.$0_1.get_$5c_2();
        var $v_1 = SP.UI.ApplicationPages.ElementUtility.$3b($v_0);

        if ($v_1) {
            $v_0.removeChild($v_1);
            this.$1y_1 = null;
        }
    },
    get_$2w_1: function SP_UI_ApplicationPages_CalendarViewBase$get_$2w_1() {
        var $v_0 = this.$0_1.get_$5c_2();

        this.$1y_1 = SP.UI.ApplicationPages.ElementUtility.$3b($v_0);
        if (!this.$1y_1) {
            this.$1y_1 = document.createElement('DIV');
            this.$1y_1.className = 'ms-acal-rootdiv';
            $v_0.appendChild(this.$1y_1);
        }
        return this.$1y_1;
    },
    get_dragAuditor: function SP_UI_ApplicationPages_CalendarViewBase$get_dragAuditor() {
        return null;
    },
    draggableItem: function SP_UI_ApplicationPages_CalendarViewBase$draggableItem($p0, $p1) {
        var $v_0 = new SP.UI.ApplicationPages.CalendarDraggableItem($p0, this.$0_1, this, $p1);

        $v_0.$7e_0(this.get_dragAuditor());
        return $v_0;
    },
    draggableVirtualItem: function SP_UI_ApplicationPages_CalendarViewBase$draggableVirtualItem() {
        return this.$L_1;
    },
    resetItemLayout: function SP_UI_ApplicationPages_CalendarViewBase$resetItemLayout($p0) {
        var $v_0 = this.getRenderingInfo($p0);

        if ($v_0) {
            var $v_1 = this.$I_1.$6M_0($v_0);

            if ($v_0.$o_0()) {
                this.$I_1.$2C_0($v_1, $v_0);
            }
            this.applyLayout($p0, $v_1);
        }
    },
    getRenderingInfo: function SP_UI_ApplicationPages_CalendarViewBase$getRenderingInfo($p0) {
        return this.$21_1.$93_0($p0);
    },
    findElementFromInfo: function SP_UI_ApplicationPages_CalendarViewBase$findElementFromInfo($p0) {
        var $v_0 = $p0.$2I_0;

        if (SP.UI.ApplicationPages.SU.$5($v_0)) {
            return null;
        }
        var $v_1 = (this.get_$2w_1()).getElementsByTagName('DIV');

        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2];
            var $v_4 = SP.UI.ApplicationPages.ElementUtility.$V($v_3, '_index');

            if ($v_4 === $v_0) {
                return $v_3;
            }
        }
        return null;
    },
    sortItem: function SP_UI_ApplicationPages_CalendarViewBase$sortItem($p0, $p1) {
        var $v_0 = this.$60_1(this.$3I_1, this.$34_1, $p1);

        this.$58_1.sort([$p0], $v_0);
        var $v_1 = [];
        var $v_2 = $v_0.length;

        for (var $v_3 = 0; $v_3 < $v_0.length; $v_3++) {
            Array.addRange($v_1, $v_0[$v_3].$6K_0());
        }
        return $v_1;
    },
    getPopupPosition: function SP_UI_ApplicationPages_CalendarViewBase$getPopupPosition($p0) {
        var $v_0 = 50;
        var $v_1 = 180;
        var $v_2 = this.$I_1.$6M_0($p0);
        var $v_3 = $v_2.$U_0 < $v_0 * 2 ? 0 : $v_0;
        var $v_4 = $v_2.$n_0 + 1;
        var $v_5 = document.documentElement.offsetWidth;
        var $v_6 = $get('s4-mainarea');

        if ($v_6) {
            $v_5 = $v_6.offsetWidth;
        }
        var $v_7 = 0;

        if (this.$0_1.$u_2) {
            $v_7 = $v_2.$e_0 + $v_2.$U_0 - $v_1 - $v_3;
            if ($v_7 < 0) {
                $v_7 = 0;
            }
        }
        else {
            $v_7 = $v_2.$e_0 + $v_3;
            if ($v_7 + $v_1 > $v_5) {
                $v_7 = $v_2.$e_0 + $v_2.$U_0 - $v_1 + 2;
            }
        }
        return new Sys.UI.Point(Math.floor($v_7), $v_2.$t_0 + $v_4);
    },
    dispose: function SP_UI_ApplicationPages_CalendarViewBase$dispose() {
        try {
            if (this.$0_1) {
                this.$0_1.dispose();
                this.$0_1 = null;
            }
        }
        finally {
            Sys.Component.prototype.dispose.call(this);
        }
    },
    $7I_1: function SP_UI_ApplicationPages_CalendarViewBase$$7I_1() {
        this.$6R_1();
        SP.UI.Workspace.add_resized(this.$$d_$6R_1);
    },
    $6R_1: function SP_UI_ApplicationPages_CalendarViewBase$$6R_1() {
        SP.UI.Workspace.remove_resized(this.$$d_$6R_1);
        if (SP.UI.ApplicationPages.SU.$2(this.$0_1) || SP.UI.ApplicationPages.SU.$2(this.$0_1.get_rawElement()) || !SP.UI.ApplicationPages.ElementUtility.$M(document.documentElement, this.$0_1.get_rawElement())) {
            return;
        }
        this.$0_1.$5p_2();
        this.$0_1.$1T_2();
        this.$0_1.$7s_2();
        this.relayoutItems();
        if (this.$L_1) {
            this.$L_1.$2D_0();
        }
    },
    relayoutItems: function SP_UI_ApplicationPages_CalendarViewBase$relayoutItems() {
        var $v_0 = (this.get_$2w_1()).getElementsByTagName('DIV');

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];

            this.resetItemLayout($v_2);
        }
    },
    applyLayout: function SP_UI_ApplicationPages_CalendarViewBase$applyLayout($p0, $p1) {
        if (isNaN($p1.$t_0 + $p1.$e_0 + $p1.$U_0 + $p1.$n_0)) {
            $p0.style.display = 'none';
        }
        else {
            $p0.style.top = $p1.$t_0 + 'px';
            $p0.style.left = $p1.$e_0 + 'px';
            $p0.style.width = $p1.$U_0 + 'px';
            $p0.style.height = $p1.$n_0 + 'px';
        }
    },
    $4T_1: function SP_UI_ApplicationPages_CalendarViewBase$$4T_1() {
        this.$L_1.$16_0();
        this.$21_1.$16_0();
        this.invalidateRootElement();
        this.$E_1 = null;
        this.$Z_1 = null;
    },
    $7i_1: function SP_UI_ApplicationPages_CalendarViewBase$$7i_1($p0, $p1) {
        this.$0_1.$7i_2($p0);
        this.$3I_1 = $p1[0];
        this.$34_1 = $p1[1];
    },
    $7B_1: function SP_UI_ApplicationPages_CalendarViewBase$$7B_1($p0) {
        if (!this.isGroupView()) {
            return;
        }
        this.$0_1.$AR_2($p0);
        if (this.$Z_1 && this.$E_1) {
            var $v_0 = this.$Z_1.length;
            var $v_1 = $p0.length;

            if ($v_0 > $v_1) {
                for (var $v_4 = $v_1; $v_4 < $v_0; $v_4++) {
                    this.addOrReplaceHtmlFragment($v_4, this.emptY_DIV);
                    this.$21_1.$5x_0($v_4);
                }
            }
            var $v_2 = {};

            for (var $v_5 = 0; $v_5 < $v_0; $v_5++) {
                var $v_6 = this.$Z_1[$v_5];

                $v_2[$v_6.get_key()] = this.$E_1[$v_5];
            }
            var $v_3 = new Array(0);

            for (var $v_7 = 0; $v_7 < $v_1; $v_7++) {
                var $v_8 = $p0[$v_7];
                var $v_9 = $v_2[$v_8.get_key()];

                if (!SP.UI.ApplicationPages.SU.$2($v_9)) {
                    $v_3[$v_7] = $v_9;
                }
            }
            this.$E_1 = $v_3;
        }
        this.$Z_1 = $p0;
    },
    $7S_1: function SP_UI_ApplicationPages_CalendarViewBase$$7S_1($p0, $p1, $p2, $p3) {
        this.$L_1.$16_0();
        this.resetSelection();
        var $v_0 = new SP.UI.ApplicationPages.ItemBuilder($p2, $p1);

        this.$I_1.$AF_0($v_0);
        this.$I_1.$AM_0(this.$21_1);
        this.$I_1.$7y_0 = this.$3I_1;
        this.$I_1.$7x_0 = this.$34_1;
        this.$58_1 = new SP.UI.ApplicationPages.DatePartitionSorter(this.$3I_1, this.$34_1);
        var $v_1 = this.$60_1(this.$3I_1, this.$34_1, $p0);

        this.$58_1.sort($p3, $v_1);
        if (this.isGroupView()) {
            this.$21_1.$5x_0($p0);
            this.renderSingleGrid($p0, $v_1[0]);
            if (!this.$E_1) {
                this.$E_1 = [];
            }
            this.$E_1[$p0] = $v_1[0];
        }
        else {
            this.$21_1.$16_0();
            this.renderGrids($v_1);
            this.$E_1 = $v_1;
        }
    },
    addOrReplaceHtmlFragment: function SP_UI_ApplicationPages_CalendarViewBase$addOrReplaceHtmlFragment($p0, $p1) {
        var $v_0 = (this.get_$2w_1()).childNodes[$p0];

        if (SP.UI.ApplicationPages.SU.$2($v_0)) {
            $v_0 = document.createElement('DIV');
            $v_0.innerHTML = $p1;
            (this.get_$2w_1()).appendChild($v_0);
        }
        else {
            $v_0.innerHTML = $p1;
        }
    },
    setInnerHtml: function SP_UI_ApplicationPages_CalendarViewBase$setInnerHtml($p0) {
        (this.get_$2w_1()).innerHTML = $p0;
    },
    renderSingleGrid: function SP_UI_ApplicationPages_CalendarViewBase$renderSingleGrid($p0, $p1) {
    },
    renderGrids: function SP_UI_ApplicationPages_CalendarViewBase$renderGrids($p0) {
    },
    get_grids: function SP_UI_ApplicationPages_CalendarViewBase$get_grids() {
        return this.$E_1;
    },
    isGroupView: function SP_UI_ApplicationPages_CalendarViewBase$isGroupView() {
        return false;
    },
    resetSelection: function SP_UI_ApplicationPages_CalendarViewBase$resetSelection() {
        if (this.$4r_1) {
            this.$4r_1.$1g_0();
        }
    },
    $9A_1: function SP_UI_ApplicationPages_CalendarViewBase$$9A_1($p0) {
        return this.isGroupView() && !!this.$E_1 && !SP.UI.ApplicationPages.SU.$2(this.$E_1[$p0]);
    },
    $9r_1: function SP_UI_ApplicationPages_CalendarViewBase$$9r_1($p0) {
        var $v_0 = this.$E_1[$p0];

        if ($v_0.$2W_0 === $p0) {
            return;
        }
        $v_0.$2W_0 = $p0;
        var $v_1 = $v_0.$6K_0();
        var $v_2 = $v_1.length;

        for (var $v_3 = 0; $v_3 < $v_2; $v_3++) {
            $v_1[$v_3].$1_0 = $p0;
        }
        this.renderSingleGrid($p0, $v_0);
    },
    $8r_1: function SP_UI_ApplicationPages_CalendarViewBase$$8r_1() {
    },
    $8Q_1: function SP_UI_ApplicationPages_CalendarViewBase$$8Q_1() {
    },
    $AI_1: function SP_UI_ApplicationPages_CalendarViewBase$$AI_1($p0) {
        this.$4r_1 = $p0;
    }
};
SP.UI.ApplicationPages.ItemRenderer = function SP_UI_ApplicationPages_ItemRenderer($p0) {
    this.m_table = $p0;
    this.$4y_0 = SP.UI.ApplicationPages.RibbonConnector.$d() && Sys.Browser.agent === Sys.Browser.InternetExplorer;
    if (this.$4y_0) {
        this.border = 0;
    }
};
SP.UI.ApplicationPages.ItemRenderer.prototype = {
    border: 2,
    bordeR_ALL: '1px 2px 1px 2px',
    bordeR_OPEN_RIGHT: '1px 0px 1px 2px',
    bordeR_OPEN_LEFT: '1px 2px 1px 0px',
    bordeR_OPEN_BOTH: '1px 0px 1px 0px',
    m_builder: null,
    m_table: null,
    m_repository: null,
    $4y_0: false,
    $7y_0: 0,
    $7x_0: 0,
    $AF_0: function SP_UI_ApplicationPages_ItemRenderer$$AF_0($p0) {
        if ($p0) {
            this.m_builder = $p0;
        }
    },
    $AM_0: function SP_UI_ApplicationPages_ItemRenderer$$AM_0($p0) {
        this.m_repository = $p0;
    },
    $2C_0: function SP_UI_ApplicationPages_ItemRenderer$$2C_0($p0, $p1) {
        var $v_0 = $p1.$c_0;

        if (!$p1.$o_0() && $v_0.$G_0 !== $v_0.$10_0) {
            return this.bordeR_ALL;
        }
        var $v_1 = !!$p1.$2B_0 || $v_0.$G_0 < this.$7y_0;
        var $v_2 = !!$p1.$3L_0 || $v_0.$10_0 > this.$7x_0;

        if (!this.$4y_0) {
            $p0.$U_0 -= 2;
            if ($v_1) {
                $p0.$U_0 += 2;
            }
            if ($v_2) {
                $p0.$U_0 += 2;
            }
        }
        if (!$v_1 && !$v_2) {
            return this.bordeR_ALL;
        }
        else if ($v_1 && $v_2) {
            return this.bordeR_OPEN_BOTH;
        }
        else if ($v_1) {
            return this.m_table.$u_2 ? this.bordeR_OPEN_RIGHT : this.bordeR_OPEN_LEFT;
        }
        else if ($v_2) {
            return this.m_table.$u_2 ? this.bordeR_OPEN_LEFT : this.bordeR_OPEN_RIGHT;
        }
        return this.bordeR_ALL;
    }
};
SP.UI.ApplicationPages.DailyGroupView = function SP_UI_ApplicationPages_DailyGroupView($p0) {
    SP.UI.ApplicationPages.DailyGroupView.initializeBase(this);
    this.$0_2 = $p0;
    this.$6_2 = this.$0_2.$2u_5();
    var $v_0 = new SP.UI.ApplicationPages.DailyGroupVirtualItem(this.$0_2);

    this.$I_2 = new SP.UI.ApplicationPages.DailyGroupItemRenderer(this.$0_2);
    this.initializeView($p0, $v_0, this.$I_2);
};
SP.UI.ApplicationPages.DailyGroupView.prototype = {
    $8Y_2: 3,
    $0_2: null,
    $I_2: null,
    $6_2: null,
    renderDraggingItem: function SP_UI_ApplicationPages_DailyGroupView$renderDraggingItem($p0, $p1) {
        var $v_0 = $p1.$J_0;
        var $v_1 = $p1.$Q_0;

        while ($v_0 < this.$6_2.get_$m_0()) {
            $v_0++;
            $v_1--;
        }
        while ($v_0 + $v_1 > this.$6_2.get_$1B_0() + 1) {
            $v_1--;
        }
        if ($v_1 < 1) {
            $p0.style.display = 'none';
            return;
        }
        var $v_2 = this.$I_2.$3T_1($p1.$1_0, $v_0, $v_1, 0, 0);

        this.applyLayout($p0, $v_2);
    },
    get_dragAuditor: function SP_UI_ApplicationPages_DailyGroupView$get_dragAuditor() {
        var $$t_3 = this;

        return function($p1_0, $p1_1, $p1_2) {
            if (!$p1_0) {
                return !$p1_1;
            }
            else {
                return !$p1_0.$o_0() && !$p1_1;
            }
        };
    },
    renderSingleGrid: function SP_UI_ApplicationPages_DailyGroupView$renderSingleGrid($p0, $p1) {
        this.$8n_2($p1.$24_0, $p1.$1r_0);
        var $v_0 = new Sys.StringBuilder();
        var $v_1 = $p1.$3d_0(0);

        this.$I_2.$A3_1($v_0, $p0, this.$6_2.get_$m_0(), this.$6_2.get_$1B_0(), $v_1);
        var $v_2 = $p1.get_$76_0();
        var $v_3 = $v_2;

        $v_1 = $p1.$4c_0(0);
        var $v_4 = this.$8V_2($v_1);

        if ($v_4.length > 0) {
            var $v_5 = this.$8Y_2 - $v_2;

            for (var $v_6 = 0; $v_6 < $v_4.length; $v_6++) {
                $v_5 = Math.max($v_4[$v_6].$1z_0, $v_5);
            }
            for (var $v_7 = 0; $v_7 < $v_4.length; $v_7++) {
                $v_4[$v_7].$1z_0 = $v_5;
                $v_4[$v_7].$81_0();
            }
            this.$I_2.$7T_1($v_0, $p0, $v_1, $v_2);
            $v_3 += $v_5;
        }
        $v_0.append(this.emptY_DIV);
        this.$0_2.$5O_3($p0, (this.$0_2.get_$2J_2() + 1) * ($v_3 + 1));
        this.addOrReplaceHtmlFragment($p0, $v_0.toString());
    },
    $8V_2: function SP_UI_ApplicationPages_DailyGroupView$$8V_2($p0) {
        var $v_0 = [];
        var $v_1 = $p0.length;

        if (!$v_1) {
            return $v_0;
        }
        var $v_2 = new SP.UI.ApplicationPages.TimeSlotRenderingGroup();

        for (var $v_3 = 0; $v_3 < $v_1; $v_3++) {
            var $v_4 = $p0[$v_3];
            var $v_5 = $v_4.$J_0;
            var $v_6 = $v_4.$Q_0;

            if (!$v_2.$M_0($v_5, $v_6)) {
                $v_0[$v_0.length] = $v_2;
                $v_2 = new SP.UI.ApplicationPages.TimeSlotRenderingGroup();
            }
            $v_2.$5d_0($v_5, $v_6, $v_4);
        }
        $v_0[$v_0.length] = $v_2;
        return $v_0;
    },
    $8n_2: function SP_UI_ApplicationPages_DailyGroupView$$8n_2($p0, $p1) {
        if ($p0 !== -1 && $p1 !== -1) {
            $p0 = $p0 < 2 ? 0 : Math.floor($p0 / 2) - 1;
            $p1 = $p1 > 45 ? 23 : Math.floor($p1 / 2) + 1;
            if (!this.$6_2.$6b_0($p0, $p1)) {
                this.$0_2.$4Z_5($p0, $p1);
                this.$I_2.$AV_1(this.$6_2.get_$m_0(), this.$6_2.get_$1B_0());
                this.relayoutItems();
            }
        }
    },
    get_infoUpdater: function SP_UI_ApplicationPages_DailyGroupView$get_infoUpdater() {
        var $$t_7 = this;

        return function($p1_0, $p1_1, $p1_2, $p1_3, $p1_4, $p1_5, $p1_6) {
            if (!$p1_0) {
                $p1_6.$J_0 = $p1_4;
                $p1_6.$Q_0 = $p1_5;
            }
        };
    },
    isGroupView: function SP_UI_ApplicationPages_DailyGroupView$isGroupView() {
        return true;
    },
    $80_1: function SP_UI_ApplicationPages_DailyGroupView$$80_1($p0, $p1) {
        var $$t_3 = this;

        $p0.$y_1('click_time', function($p1_0) {
            SP.UI.ApplicationPages.TimeScale.$7D($p1, SP.UI.ApplicationPages.ElementUtility.$V($p1_0, 'time'));
        });
    }
};
SP.UI.ApplicationPages.DailyGroupItemRenderer = function SP_UI_ApplicationPages_DailyGroupItemRenderer($p0) {
    SP.UI.ApplicationPages.DailyGroupItemRenderer.initializeBase(this, [$p0]);
};
SP.UI.ApplicationPages.DailyGroupItemRenderer.prototype = {
    $12_1: 0,
    $1H_1: 0,
    $AV_1: function SP_UI_ApplicationPages_DailyGroupItemRenderer$$AV_1($p0, $p1) {
        this.$12_1 = $p0;
        this.$1H_1 = $p1;
    },
    $6M_0: function SP_UI_ApplicationPages_DailyGroupItemRenderer$$6M_0($p0) {
        if ($p0.$o_0()) {
            $p0.$J_0 = this.$12_1;
            $p0.$Q_0 = this.$1H_1 - this.$12_1 + 1;
        }
        return this.$3T_1($p0.$1_0, $p0.$J_0, $p0.$Q_0, $p0.$R_0, $p0.$z_0);
    },
    $A3_1: function SP_UI_ApplicationPages_DailyGroupItemRenderer$$A3_1($p0, $p1, $p2, $p3, $p4) {
        this.$12_1 = $p2;
        this.$1H_1 = $p3;
        var $v_0 = 0;

        for (var $v_1 = 0; $v_1 < $p4.length; $v_1++) {
            var $v_2 = $p4[$v_1];

            if (!$v_2.$o_0()) {
                continue;
            }
            $v_2.$J_0 = this.$12_1;
            $v_2.$Q_0 = this.$1H_1 - this.$12_1 + 1;
            $v_2.$R_0 = $v_0++;
            this.$8B_1($p0, $p1, $p4[$v_1]);
        }
    },
    $7T_1: function SP_UI_ApplicationPages_DailyGroupItemRenderer$$7T_1($p0, $p1, $p2, $p3) {
        var $v_0 = $p2.length;

        for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
            var $v_2 = $p2[$v_1];

            if ($v_2.$R_0) {
                $v_2.$z_0 = 1;
            }
            $v_2.$R_0 += $p3;
            $v_2.$2o_0 += $p3;
            this.$5o_1($p0, $p1, $v_2);
        }
    },
    $8B_1: function SP_UI_ApplicationPages_DailyGroupItemRenderer$$8B_1($p0, $p1, $p2) {
        this.m_repository.$2g_0($p1, $p2);
        var $v_0 = this.$3T_1($p1, $p2.$J_0, $p2.$Q_0, $p2.$R_0, 1);
        var $v_1 = this.$2C_0($v_0, $p2);

        this.m_builder.$4N_0($p0, $p2, $v_0.$e_0, $v_0.$t_0, $v_0.$U_0, $v_0.$n_0, $v_1, true);
    },
    $5o_1: function SP_UI_ApplicationPages_DailyGroupItemRenderer$$5o_1($p0, $p1, $p2) {
        if ($p2.$R_0 === -1) {
            return;
        }
        this.m_repository.$2g_0($p1, $p2);
        var $v_0 = this.$3T_1($p1, $p2.$J_0, $p2.$Q_0, $p2.$R_0, $p2.$z_0);
        var $v_1 = $p2.$z_0 === 1;

        this.m_builder.$5n_0($p0, $p2, $v_0.$e_0, $v_0.$t_0, $v_0.$U_0, $v_0.$n_0, $v_1);
    },
    $3T_1: function SP_UI_ApplicationPages_DailyGroupItemRenderer$$3T_1($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = !$p4 ? this.m_table.$1m_2($p0) - this.m_table.get_$2J_2() : this.m_table.get_$2J_2() * $p4;

        return new SP.UI.ApplicationPages.LayoutInfo(this.$6P_1($p0, $p3), this.m_table.$3U_2($p1, $p2), this.m_table.$3S_2($p1, $p2) - this.border - 1, $v_0 - this.border);
    },
    $6P_1: function SP_UI_ApplicationPages_DailyGroupItemRenderer$$6P_1($p0, $p1) {
        return this.m_table.offsetTop($p0) + $p1 * (this.m_table.get_$2J_2() + 1);
    }
};
SP.UI.ApplicationPages.DailyGroupTable = function SP_UI_ApplicationPages_DailyGroupTable($p0) {
    SP.UI.ApplicationPages.DailyGroupTable.initializeBase(this, [$p0, 2]);
    this.$6_5 = new SP.UI.ApplicationPages.TimeScale(this.$$d_$1l_2);
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
        this.m_adjustX = 1;
        this.m_adjustY = 3;
        this.m_endAdjustX = SP.UI.ApplicationPages.RibbonConnector.$d() ? 2 : -1;
    }
    else if (Sys.Browser.agent === Sys.Browser.Firefox) {
        this.m_adjustX = 0;
        this.m_adjustY = 2;
        this.m_endAdjustX = 0;
    }
    else if (Sys.Browser.agent === Sys.Browser.Safari) {
        this.m_adjustX = 1;
        this.m_adjustY = 3;
        this.m_endAdjustX = -1;
    }
};
SP.UI.ApplicationPages.DailyGroupTable.prototype = {
    $3V_5: 48,
    $6_5: null,
    get_$2J_2: function SP_UI_ApplicationPages_DailyGroupTable$get_$2J_2() {
        return SP.UI.ApplicationPages.SummaryCalendarTable.prototype.get_$2J_2.call(this) + 3;
    },
    $2u_5: function SP_UI_ApplicationPages_DailyGroupTable$$2u_5() {
        return this.$6_5;
    },
    get_$2e_2: function SP_UI_ApplicationPages_DailyGroupTable$get_$2e_2() {
        return this.$3V_5;
    },
    invalidateLocalCache: function SP_UI_ApplicationPages_DailyGroupTable$invalidateLocalCache() {
        SP.UI.ApplicationPages.SummaryCalendarTable.prototype.invalidateLocalCache.call(this);
        this.$6_5.$k_0();
    },
    calcOffsetLeftArray: function SP_UI_ApplicationPages_DailyGroupTable$calcOffsetLeftArray() {
        var $v_0 = this.$2t_2(0);

        if (!$v_0) {
            return [0];
        }
        var $v_1 = new Array(this.$3V_5 + 1);
        var $v_2 = $v_0.getElementsByTagName('td');
        var $v_3 = $v_2.length;

        if (this.$u_2) {
            var $v_4 = this.$1c_2;
            var $v_5 = -1;

            for (var $v_6 = 0; $v_6 < $v_3; $v_6++) {
                if ($v_2[$v_6].style.display === 'none') {
                    $v_1[$v_6] = $v_5;
                }
                else {
                    if ($v_5 === -1) {
                        $v_5 = $v_4 + $v_2[$v_6].offsetLeft;
                        $v_1[$v_6] = $v_5 + $v_2[$v_6].clientWidth;
                    }
                    else {
                        $v_1[$v_6] = $v_5;
                        $v_5 = $v_4 + $v_2[$v_6].offsetLeft;
                    }
                }
            }
            $v_1[this.$3V_5] = $v_5;
        }
        else {
            var $v_7 = this.$1c_2 + this.m_adjustX;
            var $v_8 = -1;

            for (var $v_9 = 0; $v_9 < $v_3; $v_9++) {
                if ($v_2[$v_9].style.display === 'none') {
                    $v_1[$v_9] = $v_8;
                }
                else {
                    $v_1[$v_9] = $v_7 + $v_2[$v_9].offsetLeft;
                    $v_8 = $v_1[$v_9] + $v_2[$v_9].clientWidth - this.m_endAdjustX;
                }
            }
            $v_1[this.$3V_5] = $v_8;
        }
        return $v_1;
    },
    calcMaxWeekNameWidth: function SP_UI_ApplicationPages_DailyGroupTable$calcMaxWeekNameWidth() {
        return 0;
    },
    $4Z_5: function SP_UI_ApplicationPages_DailyGroupTable$$4Z_5($p0, $p1) {
        if ($p0 === -1 || $p1 === -1) {
            return;
        }
        var $v_0 = this.$6_5.get_$Av_0();
        var $v_1 = this.$6_5.get_$m_0();
        var $v_2 = this.$6_5.get_$1B_0();
        var $v_3 = $p0 * 2;

        this.$69_5($v_3);
        $v_3 = Math.min($v_1, $v_3);
        var $v_4 = $p1 * 2 + 1;

        $v_4 = Math.max($v_4, $v_2);
        var $v_5 = this.get_rows();
        var $v_6 = new Array($v_5.length);

        for (var $v_7 = 0; $v_7 < $v_5.length; $v_7++) {
            $v_6[$v_7] = $v_5[$v_7].getElementsByTagName('TD');
        }
        for (var $v_8 = $v_3; $v_8 <= $v_4; $v_8++) {
            if ($v_8 < $v_1 || $v_8 > $v_2) {
                for (var $v_9 = 0; $v_9 < $v_6.length; $v_9++) {
                    var $v_A = !$v_9 ? SP.UI.ApplicationPages.SU.$Af($v_8 / 2) : $v_8;

                    $v_6[$v_9][$v_A].style.display = $v_0;
                }
            }
        }
        this.$1T_2();
        this.$6_5.$k_0();
    },
    $69_5: function SP_UI_ApplicationPages_DailyGroupTable$$69_5($p0) {
        var $v_0 = this.$6_5.get_$m_0();

        if ($v_0 > $p0) {
            var $v_1 = (this.get_rows())[0].getElementsByTagName('TD');

            SP.UI.ApplicationPages.TimeScale.$6V($v_1[$v_0 / 2]);
            SP.UI.ApplicationPages.TimeScale.$7k($v_1[$p0 / 2]);
        }
    },
    getDayHeaderRow: function SP_UI_ApplicationPages_DailyGroupTable$getDayHeaderRow() {
        return (this.get_rows())[0];
    }
};
SP.UI.ApplicationPages.DivRenderingInfo = function SP_UI_ApplicationPages_DivRenderingInfo($p0, $p1) {
    this.$3J_0 = $p0;
    this.$c_0 = $p1;
};
SP.UI.ApplicationPages.DivRenderingInfo.prototype = {
    $3J_0: 0,
    get_$7P_0: function SP_UI_ApplicationPages_DivRenderingInfo$get_$7P_0() {
        return this.$3J_0 === 1 || this.$3J_0 === 3 || this.$3J_0 === 4;
    },
    $o_0: function SP_UI_ApplicationPages_DivRenderingInfo$$o_0() {
        return this.$3J_0 === 1;
    },
    $2B_0: null,
    $3L_0: null,
    $5X_0: false,
    $68_0: false,
    $1_0: 0,
    $J_0: 0,
    $Q_0: 1,
    $1N_0: 0,
    $R_0: 0,
    $2o_0: 1,
    $z_0: 1,
    $c_0: null,
    $2I_0: null
};
SP.UI.ApplicationPages.DivInfoRepository = function SP_UI_ApplicationPages_DivInfoRepository() {
    this.$16_0();
};
SP.UI.ApplicationPages.DivInfoRepository.prototype = {
    $3H_0: null,
    $6O_0: function SP_UI_ApplicationPages_DivInfoRepository$$6O_0($p0) {
        if (SP.UI.ApplicationPages.SU.$Y(this.$3H_0[$p0])) {
            this.$3H_0[$p0] = new Array(0);
        }
        return this.$3H_0[$p0];
    },
    $16_0: function SP_UI_ApplicationPages_DivInfoRepository$$16_0() {
        this.$3H_0 = new Array(0);
    },
    $2g_0: function SP_UI_ApplicationPages_DivInfoRepository$$2g_0($p0, $p1) {
        var $v_0 = this.$6O_0($p0);
        var $v_1 = $v_0.length;

        $v_0[$v_1] = $p1;
        $p1.$2I_0 = $p0.toString() + ',' + $v_1.toString();
    },
    $93_0: function SP_UI_ApplicationPages_DivInfoRepository$$93_0($p0) {
        var $v_0 = SP.UI.ApplicationPages.ElementUtility.$V($p0, '_index');

        if (!$v_0) {
            return null;
        }
        var $v_1 = Number.parseInvariant(($v_0.split(','))[0]);
        var $v_2 = Number.parseInvariant(($v_0.split(','))[1]);

        return (this.$6O_0($v_1))[$v_2];
    },
    $5x_0: function SP_UI_ApplicationPages_DivInfoRepository$$5x_0($p0) {
        this.$3H_0[$p0] = [];
    }
};
SP.UI.ApplicationPages.TimeScale = function SP_UI_ApplicationPages_TimeScale($p0) {
    this.$k_0();
    this.$4n_0 = $p0;
};
SP.UI.ApplicationPages.TimeScale.$5W = function SP_UI_ApplicationPages_TimeScale$$5W($p0) {
    var $v_0 = new Date();

    $v_0.setHours($p0 / 2);
    $v_0.setMinutes($p0 % 2 === 1 ? 30 : 0);
    return $v_0;
};
SP.UI.ApplicationPages.TimeScale.$7n = function SP_UI_ApplicationPages_TimeScale$$7n($p0) {
    var $v_0 = SP.UI.ApplicationPages.TimeScale.$5W($p0);

    $v_0.setTime($v_0.getTime() + 1800000);
    return $v_0;
};
SP.UI.ApplicationPages.TimeScale.$7k = function SP_UI_ApplicationPages_TimeScale$$7k($p0) {
    var $v_0 = $p0.getElementsByTagName('span');

    $v_0[0].style.display = 'none';
    $v_0[1].style.display = 'block';
};
SP.UI.ApplicationPages.TimeScale.$6V = function SP_UI_ApplicationPages_TimeScale$$6V($p0) {
    var $v_0 = $p0.getElementsByTagName('span');

    $v_0[0].style.display = 'block';
    $v_0[1].style.display = 'none';
};
SP.UI.ApplicationPages.TimeScale.$7D = function SP_UI_ApplicationPages_TimeScale$$7D($p0, $p1) {
    if (!$p1) {
        return;
    }
    if (SP.UI.ApplicationPages.RibbonConnector.$d()) {
        ClickTime($p0.$4w_1, $p1 + ':00');
    }
    else {
        var $v_0 = new Date();

        $v_0.setHours(parseInt($p1));
        $v_0.setMinutes(0);
        var $v_1 = new Date($v_0.getTime() + 3600000);

        $p0.$16_1();
        $p0.$25_1 = $v_0;
        $p0.$1s_1 = $v_1;
        $p0.show();
    }
};
SP.UI.ApplicationPages.TimeScale.prototype = {
    $12_0: 0,
    $1H_0: 0,
    $4n_0: null,
    $k_0: function SP_UI_ApplicationPages_TimeScale$$k_0() {
        this.$12_0 = -1;
        this.$1H_0 = -1;
    },
    $6b_0: function SP_UI_ApplicationPages_TimeScale$$6b_0($p0, $p1) {
        if ($p0 === -1 || $p1 === -1) {
            return true;
        }
        var $v_0 = $p0 * 2;
        var $v_1 = $p1 * 2 + 1;

        return $v_0 >= this.get_$m_0() && $v_1 <= this.get_$1B_0();
    },
    get_$m_0: function SP_UI_ApplicationPages_TimeScale$get_$m_0() {
        if (this.$12_0 === -1) {
            for (var $v_0 = 0; $v_0 < 48; $v_0++) {
                if (this.$4n_0($v_0)) {
                    this.$12_0 = $v_0;
                    break;
                }
            }
        }
        return this.$12_0;
    },
    set_$m_0: function SP_UI_ApplicationPages_TimeScale$set_$m_0($p0) {
        this.$12_0 = $p0;
        return $p0;
    },
    get_$1B_0: function SP_UI_ApplicationPages_TimeScale$get_$1B_0() {
        if (this.$1H_0 === -1) {
            for (var $v_0 = 47; $v_0 >= 0; $v_0--) {
                if (this.$4n_0($v_0)) {
                    this.$1H_0 = $v_0;
                    break;
                }
            }
        }
        return this.$1H_0;
    },
    set_$1B_0: function SP_UI_ApplicationPages_TimeScale$set_$1B_0($p0) {
        this.$1H_0 = $p0;
        return $p0;
    },
    get_$7z_0: function SP_UI_ApplicationPages_TimeScale$get_$7z_0() {
        return 'table-row';
    },
    get_$Av_0: function SP_UI_ApplicationPages_TimeScale$get_$Av_0() {
        return 'table-cell';
    }
};
SP.UI.ApplicationPages.FreeBusyContainer = function SP_UI_ApplicationPages_FreeBusyContainer(dict) {
    SP.UI.ApplicationPages.FreeBusyContainer.initializeBase(this);
    if (!SP.UI.ApplicationPages.SU.$2(dict['ParticipantsPicker'])) {
        this.$2d_1 = new SP.UI.ApplicationPages.UserFieldHandler(dict);
    }
    if (!SP.UI.ApplicationPages.SU.$2(dict['SelectResult']) && !SP.UI.ApplicationPages.SU.$2(dict['AddButton']) && !SP.UI.ApplicationPages.SU.$2(dict['RemoveButton']) && !SP.UI.ApplicationPages.SU.$2(dict['SelectCandidate'])) {
        this.$2P_1 = new SP.UI.ApplicationPages.FacilitiesFieldHandler(dict);
    }
    var $v_0 = SP.UI.ApplicationPages.DateTimeFields.ensureInstance();

    this.$F_1 = new SP.UI.ApplicationPages.FreeBusyView(dict['ItemId']);
    this.$T_1 = new SP.UI.ApplicationPages.FreeBusyStateHandler(dict, this.$F_1);
    this.$4B_1();
    this.$7A_1($v_0);
    this.$F_1.$5h_0($v_0.$1b_0);
    this.$T_1.$4d_0();
};
SP.UI.ApplicationPages.FreeBusyContainer.create = function SP_UI_ApplicationPages_FreeBusyContainer$create(dict) {
    SP.UI.ApplicationPages.FreeBusyContainer.instance = new SP.UI.ApplicationPages.FreeBusyContainer(dict);
};
SP.UI.ApplicationPages.FreeBusyContainer.prototype = {
    $F_1: null,
    $T_1: null,
    $2d_1: null,
    $2P_1: null,
    onPeoplePickerUpdated: function SP_UI_ApplicationPages_FreeBusyContainer$onPeoplePickerUpdated() {
        this.$2d_1.$1A_0();
        this.$4B_1();
    },
    onResourcePickerUpdated: function SP_UI_ApplicationPages_FreeBusyContainer$onResourcePickerUpdated() {
        this.$2P_1.$1A_0();
        this.$4B_1();
    },
    onDateChangedByPicker: function SP_UI_ApplicationPages_FreeBusyContainer$onDateChangedByPicker() {
        var $v_0 = SP.UI.ApplicationPages.DateTimeFields.ensureInstance();

        $v_0.$1A_0();
        this.$7A_1($v_0);
    },
    setSelection: function SP_UI_ApplicationPages_FreeBusyContainer$setSelection(ar) {
        if (this.$2P_1) {
            this.$2P_1.$2l_0(ar);
        }
        if (this.$2d_1) {
            this.$2d_1.$2l_0(ar);
        }
        this.$4B_1();
    },
    $4B_1: function SP_UI_ApplicationPages_FreeBusyContainer$$4B_1() {
        var $v_0 = [];

        if (this.$2d_1) {
            Array.addRange($v_0, this.$2d_1.$O_0);
        }
        if (this.$2P_1) {
            Array.addRange($v_0, this.$2P_1.$O_0);
        }
        this.$T_1.$2l_0($v_0);
    },
    $7A_1: function SP_UI_ApplicationPages_FreeBusyContainer$$7A_1($p0) {
        this.$T_1.$7h_0($p0.$b_0);
        this.$T_1.$AO_0($p0.$1b_0, $p0.$2a_0, $p0.$2N_0, $p0.$35_0, $p0.$1V_0);
    }
};
SP.UI.ApplicationPages.FreeBusyStateHandler = function SP_UI_ApplicationPages_FreeBusyStateHandler($p0, $p1) {
    this.$$d_$5I_0 = Function.createDelegate(this, this.$5I_0);
    this.$$d_$9V_0 = Function.createDelegate(this, this.$9V_0);
    this.$$d_$9Y_0 = Function.createDelegate(this, this.$9Y_0);
    this.$K_0 = 9;
    this.$P_0 = [];
    this.$F_0 = $p1;
    this.$AT_0($p0);
};
SP.UI.ApplicationPages.FreeBusyStateHandler.prototype = {
    $7_0: null,
    $F_0: null,
    $P_0: null,
    $1G_0: null,
    $K_0: 0,
    $1u_0: 0,
    $73_0: 0,
    $b_0: null,
    $AT_0: function SP_UI_ApplicationPages_FreeBusyStateHandler$$AT_0($p0) {
        var $v_0 = new SP.Guid($p0['ViewId']);
        var $v_1 = new SP.Guid($p0['ListId']);
        var $v_2 = $p0['ServiceUrl'];
        var $v_3 = new SP.UI.ApplicationPages.DataSourceInfo();

        $v_3.id = (SP.Guid.get_empty()).toString();
        this.$7_0 = new SP.UI.ApplicationPages.CalendarService($v_2, $v_1, $v_0, [$v_3]);
        this.$7_0.add_$7M_1(this.$$d_$9Y_0);
        this.$7_0.add_$6e_1(this.$$d_$9V_0);
        this.$7_0.add_$7w_1(this.$$d_$5I_0);
        this.$7_0.$5s_1('day');
    },
    $2l_0: function SP_UI_ApplicationPages_FreeBusyStateHandler$$2l_0($p0) {
        this.$P_0 = $p0;
        this.$1G_0 = null;
        this.$3P_0();
    },
    $AO_0: function SP_UI_ApplicationPages_FreeBusyStateHandler$$AO_0($p0, $p1, $p2, $p3, $p4) {
        this.$F_0.$4H_0($p0, $p1, $p2, $p3, $p4);
    },
    $7h_0: function SP_UI_ApplicationPages_FreeBusyStateHandler$$7h_0($p0) {
        if ($p0 === this.$b_0) {
            return;
        }
        this.$F_0.$4T_0();
        this.$b_0 = $p0;
        this.$7_0.$5r_1($p0);
        this.$F_0.$2j_0($p0);
        this.$3P_0();
    },
    $4d_0: function SP_UI_ApplicationPages_FreeBusyStateHandler$$4d_0() {
        this.$K_0 = 0;
        this.$3P_0();
    },
    $3P_0: function SP_UI_ApplicationPages_FreeBusyStateHandler$$3P_0() {
        switch (this.$K_0) {
        case 2:
        case 0:
            this.$F_0.$AH_0();
            this.$K_0 = 1;
            this.$5m_0();
            break;
        case 1:
            this.$K_0 = 2;
            break;
        }
    },
    $84_0: function SP_UI_ApplicationPages_FreeBusyStateHandler$$84_0() {
        this.$1u_0 = 0;
        this.$1h_0();
    },
    $1h_0: function SP_UI_ApplicationPages_FreeBusyStateHandler$$1h_0() {
        if (this.$1u_0 >= this.$1G_0.length) {
            this.$F_0.$A7_0();
            this.$F_0.$A5_0();
            this.$K_0 = 0;
            return;
        }
        var $v_0 = this.$1G_0[this.$1u_0];

        if (this.$F_0.$99_0(this.$1u_0)) {
            this.$1u_0++;
            this.$1h_0();
            return;
        }
        var $v_1 = 1 | 32;

        this.$7_0.$5l_1($v_1, $v_0.get_key());
    },
    $9Y_0: function SP_UI_ApplicationPages_FreeBusyStateHandler$$9Y_0($p0) {
        this.$73_0 = $p0.RangeJDay[0];
    },
    $9V_0: function SP_UI_ApplicationPages_FreeBusyStateHandler$$9V_0($p0) {
        if (this.$K_0 === 2) {
            this.$3P_0();
        }
        else {
            this.$F_0.$A1_0(this.$1u_0, this.$73_0, $p0);
            this.$1u_0++;
            this.$1h_0();
        }
    },
    $5m_0: function SP_UI_ApplicationPages_FreeBusyStateHandler$$5m_0() {
        for (var $v_0 = 0; $v_0 < this.$P_0.length; $v_0++) {
            var $v_1 = this.$P_0[$v_0];

            if ($v_1.needResolve) {
                this.$7_0.beginUserResolve($v_1);
                return;
            }
        }
        this.$3a_0();
    },
    $5I_0: function SP_UI_ApplicationPages_FreeBusyStateHandler$$5I_0($p0) {
        if (this.$K_0 === 2) {
            this.$3P_0();
        }
        for (var $v_0 = 0; $v_0 < this.$P_0.length; $v_0++) {
            var $v_1 = this.$P_0[$v_0];

            if ($p0.get_key() === $v_1.get_key() && $v_1.needResolve) {
                $v_1.needResolve = false;
                $v_1.members = $p0.members;
            }
        }
        this.$5m_0();
    },
    $3a_0: function SP_UI_ApplicationPages_FreeBusyStateHandler$$3a_0() {
        if (!this.$1G_0) {
            this.$1G_0 = [];
            for (var $v_0 = 0; $v_0 < this.$P_0.length; $v_0++) {
                var $v_1 = this.$P_0[$v_0];

                if ($v_1.isGroup) {
                    for (var $v_2 = 0; $v_2 < $v_1.members.length; $v_2++) {
                        this.$4F_0($v_1.members[$v_2]);
                    }
                }
                else {
                    this.$4F_0($v_1);
                }
            }
            this.$F_0.$7u_0(this.$1G_0);
        }
        this.$84_0();
    },
    $4F_0: function SP_UI_ApplicationPages_FreeBusyStateHandler$$4F_0($p0) {
        for (var $v_0 = 0; $v_0 < this.$1G_0.length; $v_0++) {
            var $v_1 = this.$1G_0[$v_0];

            if ($p0.get_key() === $v_1.get_key()) {
                return;
            }
        }
        Array.add(this.$1G_0, $p0);
    }
};
SP.UI.ApplicationPages.UserFieldHandler = function SP_UI_ApplicationPages_UserFieldHandler($p0) {
    var $$t_1 = this;

    this.$1o_0 = new SP.UI.ApplicationPages.UserFieldControl($get($p0['ParticipantsPicker']), function() {
        SP.UI.ApplicationPages.FreeBusyContainer.instance.onPeoplePickerUpdated();
    });
    this.$O_0 = [];
    this.$5k_0($p0);
    this.$1A_0();
};
SP.UI.ApplicationPages.UserFieldHandler.prototype = {
    $5E_0: 'SP.UI.ApplicationPages.FreeBusyContainer.instance.onPeoplePickerUpdated();',
    $O_0: null,
    $1o_0: null,
    $1A_0: function SP_UI_ApplicationPages_UserFieldHandler$$1A_0() {
        this.$O_0 = this.$1o_0.$4b_0();
    },
    $5k_0: function SP_UI_ApplicationPages_UserFieldHandler$$5k_0($p0) {
        var $v_0 = $p0['ParticipantsPicker'];

        if (!SP.UI.ApplicationPages.SU.$2($v_0)) {
            var $v_1 = this.$1o_0.$p_0.attributes.getNamedItem('EEAfterCallbackClientScript');

            if ($v_1) {
                $v_1.value = this.$5E_0;
            }
        }
    },
    $2l_0: function SP_UI_ApplicationPages_UserFieldHandler$$2l_0($p0) {
        $p0 = this.$3a_0($p0);
        var $v_0 = new Sys.StringBuilder();

        for (var $v_2 = 0; $v_2 < $p0.length; $v_2++) {
            if ($v_2 > 0) {
                $v_0.append('; ');
            }
            if (!$p0[$v_2].isGroup) {
                $v_0.append($p0[$v_2].accountName);
            }
            else {
                $v_0.append($p0[$v_2].displayName);
            }
        }
        var $v_1 = $v_0.toString();

        this.$1o_0.$AQ_0($v_1);
        if ($v_1.length > 0) {
            var $v_3 = $get(this.$1o_0.$p_0.id + '_checkNames');

            if (!SP.UI.ApplicationPages.SU.$Y($v_3.click)) {
                $v_3.click();
            }
            else {
                window.FFClick($v_3);
            }
        }
    },
    $3a_0: function SP_UI_ApplicationPages_UserFieldHandler$$3a_0($p0) {
        var $v_0 = [];

        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            var $v_2 = $p0[$v_1];

            if ($v_2.entityType !== SP.UI.ApplicationPages.ResolveEntity.typE_USER) {
                continue;
            }
            if (!$v_2.isGroup) {
                $v_0[$v_0.length] = $v_2;
            }
            else {
                if (!this.$9G_0($v_2)) {
                    $v_0[$v_0.length] = $v_2;
                }
                else {
                    var $v_3 = $p0[$v_1].members;

                    for (var $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
                        if (!$v_3[$v_4]) {
                            continue;
                        }
                        $v_0[$v_0.length] = $v_3[$v_4];
                    }
                }
            }
        }
        return $v_0;
    },
    $9G_0: function SP_UI_ApplicationPages_UserFieldHandler$$9G_0($p0) {
        if ($p0.needResolve) {
            return false;
        }
        for (var $v_0 = 0; $v_0 < $p0.members.length; $v_0++) {
            if (!$p0.members[$v_0]) {
                return true;
            }
        }
        return false;
    }
};
SP.UI.ApplicationPages.FacilitiesFieldHandler = function SP_UI_ApplicationPages_FacilitiesFieldHandler($p0) {
    this.$22_0 = $get($p0['SelectResult']);
    this.$2z_0 = $get($p0['SelectCandidate']);
    this.$O_0 = [];
    this.$5k_0($p0);
    this.$1A_0();
};
SP.UI.ApplicationPages.FacilitiesFieldHandler.prototype = {
    $5E_0: 'SP.UI.ApplicationPages.FreeBusyContainer.instance.onResourcePickerUpdated();',
    $22_0: null,
    $2z_0: null,
    $4g_0: null,
    $55_0: null,
    $O_0: null,
    $6r_0: null,
    $5k_0: function SP_UI_ApplicationPages_FacilitiesFieldHandler$$5k_0($p0) {
        var $v_0 = $p0['AddButton'];
        var $v_1 = $p0['RemoveButton'];
        var $v_2 = $p0['SelectResult'];
        var $v_3 = $p0['SelectCandidate'];
        var $v_4 = $p0['MultiLookupPicker'];

        this.$4g_0 = $get($v_0);
        this.$4g_0.setAttribute('onafteradd', this.$5E_0);
        this.$55_0 = $get($v_1);
        this.$55_0.setAttribute('onafterremove', this.$5E_0);
        this.$22_0 = $get($v_2);
        this.$2z_0 = $get($v_3);
        this.$6r_0 = $get($v_4);
    },
    $1A_0: function SP_UI_ApplicationPages_FacilitiesFieldHandler$$1A_0() {
        Array.clear(this.$O_0);
        if (!this.$22_0) {
            return;
        }
        var $v_0 = this.$22_0.options;

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            var $v_3 = new SP.UI.ApplicationPages.ResolveEntity();

            $v_3.displayName = $v_2.text;
            $v_3.id = $v_2.value;
            $v_3.entityType = SP.UI.ApplicationPages.ResolveEntity.typE_RESOURCE;
            Array.add(this.$O_0, $v_3);
        }
    },
    $2l_0: function SP_UI_ApplicationPages_FacilitiesFieldHandler$$2l_0($p0) {
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            var $v_2 = $p0[$v_1];

            if ($v_2.entityType === SP.UI.ApplicationPages.ResolveEntity.typE_RESOURCE) {
                if (!$v_2.isGroup) {
                    this.$7b_0($v_2);
                }
                else {
                    for (var $v_3 = 0; $v_3 < $v_2.members.length; $v_3++) {
                        this.$7b_0($v_2.members[$v_3]);
                    }
                }
            }
        }
        this.$4g_0.disabled = !this.$2z_0.options.length;
        this.$55_0.disabled = !this.$22_0.options.length;
        var $v_0 = {};

        $v_0['resultControl'] = this.$22_0;
        $v_0['selectionField'] = this.$6r_0;
        GipSetHiddenControlValue($v_0);
        this.$1A_0();
    },
    $7b_0: function SP_UI_ApplicationPages_FacilitiesFieldHandler$$7b_0($p0) {
        if (!$p0) {
            return;
        }
        var $v_0 = this.$2z_0.options;

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];

            if ($v_2.value === $p0.id) {
                this.$2z_0.remove($v_1);
                this.$22_0.options.add($v_2);
                return;
            }
        }
    }
};
SP.UI.ApplicationPages.FreeBusyTable = function SP_UI_ApplicationPages_FreeBusyTable($p0, $p1) {
    this.$1t_0 = $p0;
    this.$1D_0 = $p1;
    this.$6o_0 = this.$1t_0.rows[this.$2h_0].cloneNode(true);
    this.$6h_0 = this.$1D_0.rows[this.$2h_0].cloneNode(true);
};
SP.UI.ApplicationPages.FreeBusyTable.prototype = {
    $2h_0: 3,
    $AC_0: 1,
    $8u_0: 20,
    $6o_0: null,
    $6h_0: null,
    $1t_0: null,
    $1D_0: null,
    $7u_0: function SP_UI_ApplicationPages_FreeBusyTable$$7u_0($p0) {
        var $v_0 = SP.UI.ApplicationPages.ElementUtility.$l(this.$1t_0);
        var $v_1 = SP.UI.ApplicationPages.ElementUtility.$l(this.$1D_0);

        while (this.$1t_0.rows.length > this.$2h_0) {
            $v_0.removeChild(this.$1t_0.rows[this.$2h_0]);
            $v_1.removeChild(this.$1D_0.rows[this.$2h_0]);
        }
        for (var $v_3 = 0; $v_3 < $p0.length; $v_3++) {
            var $v_4 = this.$6o_0.cloneNode(true);

            $v_0.appendChild($v_4);
            var $v_5 = this.$6h_0.cloneNode(true);

            $v_1.appendChild($v_5);
            var $v_6 = $v_4.getElementsByTagName('DIV');
            var $v_7 = $p0[$v_3];
            var $v_8 = SP.Utilities.HttpUtility.htmlEncode($v_7.displayName);

            $v_6[0].innerHTML = $v_8;
            $v_6[0].title = EEDecodeSpecialChars($v_8);
        }
        var $v_2 = this.$1t_0.offsetHeight;

        this.$1D_0.parentNode.style.height = ($v_2 + this.$8u_0).toString() + 'px';
    },
    $4H_0: function SP_UI_ApplicationPages_FreeBusyTable$$4H_0($p0, $p1, $p2, $p3) {
        var $v_0 = $p0 * 2 + ($p1 < 30 ? 0 : 1);
        var $v_1 = $p2 * 2;

        if ($p3 > 0) {
            $v_1++;
        }
        if ($p3 > 30) {
            $v_1++;
        }
        var $v_2 = this.$1D_0.rows[this.$AC_0];
        var $v_3 = $v_2.getElementsByTagName('DIV');

        for (var $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
            if ($v_4 >= $v_0 && $v_4 < $v_1) {
                $v_3[$v_4].className = 'ms-fb-selected';
            }
            else {
                $v_3[$v_4].className = '';
            }
        }
    },
    $4K_0: function SP_UI_ApplicationPages_FreeBusyTable$$4K_0($p0, $p1, $p2) {
        if (SP.UI.ApplicationPages.SU.$2($p1)) {
            $p1 = new Array(0);
        }
        var $v_0 = this.$1D_0.rows[this.$2h_0 + $p0];
        var $v_1 = $v_0.getElementsByTagName('DIV');

        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            if ($p1[$v_2]) {
                Sys.UI.DomElement.addCssClass($v_1[$v_2], $p2);
            }
            else {
                Sys.UI.DomElement.removeCssClass($v_1[$v_2], $p2);
            }
        }
    },
    $5h_0: function SP_UI_ApplicationPages_FreeBusyTable$$5h_0($p0) {
        var $v_0 = this.$1D_0.rows[0];
        var $v_1 = $v_0.getElementsByTagName('TH');

        this.$1D_0.parentNode.scrollLeft = $v_1[$p0].offsetLeft + 1;
    },
    $2j_0: function SP_UI_ApplicationPages_FreeBusyTable$$2j_0($p0) {
        var $v_0 = this.$1t_0.rows[0];

        $v_0 = ($v_0.getElementsByTagName('SPAN'))[0];
        if (!SP.UI.ApplicationPages.SU.$2($v_0)) {
            SP.UI.UIUtility.setInnerText($v_0, $p0);
            $v_0.setAttribute('title', $p0);
        }
    }
};
SP.UI.ApplicationPages.FreeBusyView = function SP_UI_ApplicationPages_FreeBusyView($p0) {
    this.$2T_0 = $p0;
    this.$P_0 = [];
    this.$43_0 = $get('FreeBusyRootDiv');
    var $v_0 = this.$43_0.getElementsByTagName('TABLE');

    this.$0_0 = new SP.UI.ApplicationPages.FreeBusyTable($v_0[0], $v_0[1]);
    this.$E_0 = new Array(0);
};
SP.UI.ApplicationPages.FreeBusyView.prototype = {
    $0_0: null,
    $P_0: null,
    $43_0: null,
    $E_0: null,
    $2T_0: null,
    $4H_0: function SP_UI_ApplicationPages_FreeBusyView$$4H_0($p0, $p1, $p2, $p3, $p4) {
        if ($p2 === -1 && $p0 === -1) {
            this.$0_0.$4H_0(0, 0, 24, 0);
        }
        else if ($p4) {
            this.$0_0.$4H_0($p0, $p1, $p2, $p3);
        }
        else {
            this.$0_0.$4H_0(0, 0, 0, 0);
        }
    },
    $5h_0: function SP_UI_ApplicationPages_FreeBusyView$$5h_0($p0) {
        if ($p0 === -1) {
            $p0 = 9;
        }
        else if ($p0 > 12) {
            $p0 = 12;
        }
        else if ($p0 > 9) {
            $p0 = 9;
        }
        this.$0_0.$5h_0($p0);
    },
    $7u_0: function SP_UI_ApplicationPages_FreeBusyView$$7u_0($p0) {
        this.$0_0.$7u_0($p0);
        var $v_0 = new Array(0);

        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            for (var $v_2 = 0; $v_2 < this.$P_0.length; $v_2++) {
                var $v_3 = $p0[$v_1];
                var $v_4 = this.$P_0[$v_2];

                if ($v_3.get_key() === $v_4.get_key()) {
                    this.$0_0.$4K_0($v_1, this.$E_0[$v_2], 'ms-fb-item');
                    $v_0[$v_1] = this.$E_0[$v_2];
                }
            }
        }
        this.$E_0 = $v_0;
        this.$P_0 = $p0;
    },
    $99_0: function SP_UI_ApplicationPages_FreeBusyView$$99_0($p0) {
        return !SP.UI.ApplicationPages.SU.$2(this.$E_0[$p0]);
    },
    $A1_0: function SP_UI_ApplicationPages_FreeBusyView$$A1_0($p0, $p1, $p2) {
        var $v_0 = [];
        var $v_1 = new SP.UI.ApplicationPages.CalendarInfoGrid(this.get_$9D_0());
        var $v_2 = new SP.UI.ApplicationPages.DatePartitionSorter($p1, $p1);

        $v_2.sort($p2, [$v_1]);
        var $v_3 = $v_1.$3d_0(0);
        var $v_4 = $v_3.length;

        for (var $v_5 = 0; $v_5 < $v_4; $v_5++) {
            var $v_6 = $v_3[$v_5];

            if (!SP.UI.ApplicationPages.SU.$5(this.$2T_0) && ($v_6.$c_0.$11_0 === this.$2T_0 || $v_6.$c_0.$11_0.startsWith(this.$2T_0 + '.0.') || $v_6.$c_0.$11_0.endsWith('.1.' + this.$2T_0) || $v_6.$c_0.$11_0.endsWith('.2.' + this.$2T_0))) {
                continue;
            }
            if ($v_6.$o_0()) {
                for (var $v_A = 0; $v_A < 48; $v_A++) {
                    $v_0[$v_A] = true;
                }
                break;
            }
            var $v_7 = $v_6.$c_0;

            if (!$v_7.$i_0) {
                continue;
            }
            var $v_8 = $v_6.$1_0;
            var $v_9 = $v_6.$1N_0;

            for (var $v_B = 0; $v_B < $v_9; $v_B++) {
                $v_0[$v_8 + $v_B] = true;
            }
        }
        this.$0_0.$4K_0($p0, $v_0, 'ms-fb-item');
        this.$E_0[$p0] = $v_0;
    },
    get_$9D_0: function SP_UI_ApplicationPages_FreeBusyView$get_$9D_0() {
        var $$t_7 = this;

        return function($p1_0, $p1_1, $p1_2, $p1_3, $p1_4, $p1_5, $p1_6) {
            if ($p1_0) {
                $p1_6.$1_0 = $p1_1;
                $p1_6.$J_0 = $p1_2;
                $p1_6.$Q_0 = $p1_3;
            }
            else {
                $p1_6.$1_0 = $p1_4;
                $p1_6.$1N_0 = $p1_5;
                $p1_6.$J_0 = $p1_2;
            }
        };
    },
    $A5_0: function SP_UI_ApplicationPages_FreeBusyView$$A5_0() {
        var $v_0 = [];

        for (var $v_1 = 0; $v_1 < this.$E_0.length; $v_1++) {
            if (SP.UI.ApplicationPages.SU.$2(this.$E_0[$v_1])) {
                continue;
            }
            for (var $v_2 = 0; $v_2 < 48; $v_2++) {
                $v_0[$v_2] = !!($v_0[$v_2] | this.$E_0[$v_1][$v_2]);
            }
        }
        this.$0_0.$4K_0(-1, $v_0, 'ms-fb-sumitem');
    },
    $4T_0: function SP_UI_ApplicationPages_FreeBusyView$$4T_0() {
        this.$E_0 = new Array(0);
    },
    $AH_0: function SP_UI_ApplicationPages_FreeBusyView$$AH_0() {
        this.$43_0.style.cursor = 'busy';
    },
    $A7_0: function SP_UI_ApplicationPages_FreeBusyView$$A7_0() {
        this.$43_0.style.cursor = '';
    },
    $2j_0: function SP_UI_ApplicationPages_FreeBusyView$$2j_0($p0) {
        this.$0_0.$2j_0($p0);
    }
};
SP.UI.ApplicationPages.SU = function SP_UI_ApplicationPages_SU() {
};
SP.UI.ApplicationPages.SU.$5 = function SP_UI_ApplicationPages_SU$$5($p0) {
    var $v_0 = null;

    return $p0 === $v_0 || typeof $p0 === 'undefined' || !$p0.length;
};
SP.UI.ApplicationPages.SU.$2 = function SP_UI_ApplicationPages_SU$$2($p0) {
    var $v_0 = null;

    return $p0 === $v_0 || typeof $p0 === 'undefined';
};
SP.UI.ApplicationPages.SU.$Y = function SP_UI_ApplicationPages_SU$$Y($p0) {
    return typeof $p0 === 'undefined';
};
SP.UI.ApplicationPages.SU.$Af = function SP_UI_ApplicationPages_SU$$Af($p0) {
    return $p0 > 0 ? Math.floor($p0) : Math.ceil($p0);
};
SP.UI.ApplicationPages.MouseEventContext.registerClass('SP.UI.ApplicationPages.MouseEventContext');
SP.UI.ApplicationPages.CalendarErrorResponse.registerClass('SP.UI.ApplicationPages.CalendarErrorResponse');
SP.UI.ApplicationPages.CalendarResolveResponse.registerClass('SP.UI.ApplicationPages.CalendarResolveResponse');
SP.UI.ApplicationPages.Position.registerClass('SP.UI.ApplicationPages.Position');
SP.UI.ApplicationPages.CalendarQueryResponse.registerClass('SP.UI.ApplicationPages.CalendarQueryResponse');
SP.UI.ApplicationPages.CalendarItemsData.registerClass('SP.UI.ApplicationPages.CalendarItemsData');
SP.UI.ApplicationPages.EntityResponse.registerClass('SP.UI.ApplicationPages.EntityResponse');
SP.UI.ApplicationPages.CalendarContext.registerClass('SP.UI.ApplicationPages.CalendarContext');
SP.UI.ApplicationPages.DataSourceInfo.registerClass('SP.UI.ApplicationPages.DataSourceInfo');
SP.UI.ApplicationPages.TimeSlotInfo.registerClass('SP.UI.ApplicationPages.TimeSlotInfo');
SP.UI.ApplicationPages.LayoutInfo.registerClass('SP.UI.ApplicationPages.LayoutInfo');
SP.UI.ApplicationPages.CalendarContainerFactory.registerClass('SP.UI.ApplicationPages.CalendarContainerFactory');
SP.UI.ApplicationPages.CalendarContainer.registerClass('SP.UI.ApplicationPages.CalendarContainer', Sys.Component, SP.UI.ApplicationPages.ICalendarController);
SP.UI.ApplicationPages.RibbonConnector.registerClass('SP.UI.ApplicationPages.RibbonConnector');
SP.UI.ApplicationPages.ElementUtility.registerClass('SP.UI.ApplicationPages.ElementUtility');
SP.UI.ApplicationPages.ItemBuilder.registerClass('SP.UI.ApplicationPages.ItemBuilder');
SP.UI.ApplicationPages.CalendarItem.registerClass('SP.UI.ApplicationPages.CalendarItem');
SP.UI.ApplicationPages.ItemUpdater.registerClass('SP.UI.ApplicationPages.ItemUpdater');
SP.UI.ApplicationPages.CalendarMouseHandler.registerClass('SP.UI.ApplicationPages.CalendarMouseHandler', Sys.Component);
SP.UI.ApplicationPages.CalendarNewFormDialog.registerClass('SP.UI.ApplicationPages.CalendarNewFormDialog', Sys.Component);
SP.UI.ApplicationPages.CalendarService.registerClass('SP.UI.ApplicationPages.CalendarService', Sys.Component);
SP.UI.ApplicationPages.DateTimeFields.registerClass('SP.UI.ApplicationPages.DateTimeFields');
SP.UI.ApplicationPages.CalendarInfoGrid.registerClass('SP.UI.ApplicationPages.CalendarInfoGrid');
SP.UI.ApplicationPages.TimeSlotRenderingGroup.registerClass('SP.UI.ApplicationPages.TimeSlotRenderingGroup');
SP.UI.ApplicationPages.DatePartitionSorter.registerClass('SP.UI.ApplicationPages.DatePartitionSorter');
SP.UI.ApplicationPages.MultidayDragTargetTableAdapter.registerClass('SP.UI.ApplicationPages.MultidayDragTargetTableAdapter', null, SP.UI.ApplicationPages.IDragTargetTable);
SP.UI.ApplicationPages.CalendarTableBase.registerClass('SP.UI.ApplicationPages.CalendarTableBase', Sys.UI.Control, SP.UI.ApplicationPages.IDragTargetTable);
SP.UI.ApplicationPages.DetailCalendarTable.registerClass('SP.UI.ApplicationPages.DetailCalendarTable', SP.UI.ApplicationPages.CalendarTableBase);
SP.UI.ApplicationPages.DailyCalendarTable.registerClass('SP.UI.ApplicationPages.DailyCalendarTable', SP.UI.ApplicationPages.DetailCalendarTable);
SP.UI.ApplicationPages.WeeklyCalendarTable.registerClass('SP.UI.ApplicationPages.WeeklyCalendarTable', SP.UI.ApplicationPages.DetailCalendarTable);
SP.UI.ApplicationPages.CalendarViewBase.registerClass('SP.UI.ApplicationPages.CalendarViewBase', Sys.Component, SP.UI.ApplicationPages.IDragTargetView);
SP.UI.ApplicationPages.DetailCalendarView.registerClass('SP.UI.ApplicationPages.DetailCalendarView', SP.UI.ApplicationPages.CalendarViewBase);
SP.UI.ApplicationPages.ItemRenderer.registerClass('SP.UI.ApplicationPages.ItemRenderer');
SP.UI.ApplicationPages.DetailItemRenderer.registerClass('SP.UI.ApplicationPages.DetailItemRenderer', SP.UI.ApplicationPages.ItemRenderer);
SP.UI.ApplicationPages.SummaryCalendarView.registerClass('SP.UI.ApplicationPages.SummaryCalendarView', SP.UI.ApplicationPages.CalendarViewBase);
SP.UI.ApplicationPages.MonthlyView.registerClass('SP.UI.ApplicationPages.MonthlyView', SP.UI.ApplicationPages.SummaryCalendarView);
SP.UI.ApplicationPages.SummaryCalendarTable.registerClass('SP.UI.ApplicationPages.SummaryCalendarTable', SP.UI.ApplicationPages.CalendarTableBase);
SP.UI.ApplicationPages.MonthlyCalendarTable.registerClass('SP.UI.ApplicationPages.MonthlyCalendarTable', SP.UI.ApplicationPages.SummaryCalendarTable);
SP.UI.ApplicationPages.CalendarStateHandler.registerClass('SP.UI.ApplicationPages.CalendarStateHandler', Sys.Component);
SP.UI.ApplicationPages.EntityRowsTable.registerClass('SP.UI.ApplicationPages.EntityRowsTable', SP.UI.ApplicationPages.SummaryCalendarTable);
SP.UI.ApplicationPages.SummaryItemRenderer.registerClass('SP.UI.ApplicationPages.SummaryItemRenderer', SP.UI.ApplicationPages.ItemRenderer);
SP.UI.ApplicationPages.WeeklyGroupView.registerClass('SP.UI.ApplicationPages.WeeklyGroupView', SP.UI.ApplicationPages.SummaryCalendarView);
SP.UI.ApplicationPages.WeeklyGroupTable.registerClass('SP.UI.ApplicationPages.WeeklyGroupTable', SP.UI.ApplicationPages.EntityRowsTable);
SP.UI.ApplicationPages.EntityPaginator.registerClass('SP.UI.ApplicationPages.EntityPaginator', Sys.Component);
SP.UI.ApplicationPages.EntityEntryParser.registerClass('SP.UI.ApplicationPages.EntityEntryParser');
SP.UI.ApplicationPages.UserFieldControl.registerClass('SP.UI.ApplicationPages.UserFieldControl');
SP.UI.ApplicationPages.CalendarHeaderControls.registerClass('SP.UI.ApplicationPages.CalendarHeaderControls', Sys.Component);
SP.UI.ApplicationPages.CalendarRenderingStateMachine.registerClass('SP.UI.ApplicationPages.CalendarRenderingStateMachine');
SP.UI.ApplicationPages.TableLocation.registerClass('SP.UI.ApplicationPages.TableLocation');
SP.UI.ApplicationPages.BaseInputHandler.registerClass('SP.UI.ApplicationPages.BaseInputHandler');
SP.UI.ApplicationPages.ItemDragHandler.registerClass('SP.UI.ApplicationPages.ItemDragHandler', SP.UI.ApplicationPages.BaseInputHandler);
SP.UI.ApplicationPages.VirtualItemHandler.registerClass('SP.UI.ApplicationPages.VirtualItemHandler', SP.UI.ApplicationPages.BaseInputHandler);
SP.UI.ApplicationPages.EntityControlInputHandler.registerClass('SP.UI.ApplicationPages.EntityControlInputHandler', SP.UI.ApplicationPages.BaseInputHandler);
SP.UI.ApplicationPages.ScopeChangerHandler.registerClass('SP.UI.ApplicationPages.ScopeChangerHandler', SP.UI.ApplicationPages.BaseInputHandler);
SP.UI.ApplicationPages.CalendarVirtualItem.registerClass('SP.UI.ApplicationPages.CalendarVirtualItem');
SP.UI.ApplicationPages.VirtualRenderingItem.registerClass('SP.UI.ApplicationPages.VirtualRenderingItem');
SP.UI.ApplicationPages.GroupViewVirtualItem.registerClass('SP.UI.ApplicationPages.GroupViewVirtualItem', SP.UI.ApplicationPages.CalendarVirtualItem);
SP.UI.ApplicationPages.DailyGroupVirtualItem.registerClass('SP.UI.ApplicationPages.DailyGroupVirtualItem', SP.UI.ApplicationPages.GroupViewVirtualItem);
SP.UI.ApplicationPages.WeekGroupVirtualItem.registerClass('SP.UI.ApplicationPages.WeekGroupVirtualItem', SP.UI.ApplicationPages.GroupViewVirtualItem);
SP.UI.ApplicationPages.MonthVirtualItem.registerClass('SP.UI.ApplicationPages.MonthVirtualItem', SP.UI.ApplicationPages.CalendarVirtualItem);
SP.UI.ApplicationPages.DetailVirtualItem.registerClass('SP.UI.ApplicationPages.DetailVirtualItem', SP.UI.ApplicationPages.CalendarVirtualItem);
SP.UI.ApplicationPages.CalendarDraggableItem.registerClass('SP.UI.ApplicationPages.CalendarDraggableItem');
SP.UI.ApplicationPages.V3ResourceSelector.registerClass('SP.UI.ApplicationPages.V3ResourceSelector', SP.UI.ApplicationPages.BaseSelectorComponent);
SP.UI.ApplicationPages.V3PeopleSelector.registerClass('SP.UI.ApplicationPages.V3PeopleSelector', SP.UI.ApplicationPages.BaseSelectorComponent);
SP.UI.ApplicationPages.RibbonCalendarSelector.registerClass('SP.UI.ApplicationPages.RibbonCalendarSelector', SP.UI.ApplicationPages.BaseSelectorComponent);
SP.UI.ApplicationPages.DailyGroupView.registerClass('SP.UI.ApplicationPages.DailyGroupView', SP.UI.ApplicationPages.CalendarViewBase);
SP.UI.ApplicationPages.DailyGroupItemRenderer.registerClass('SP.UI.ApplicationPages.DailyGroupItemRenderer', SP.UI.ApplicationPages.ItemRenderer);
SP.UI.ApplicationPages.DailyGroupTable.registerClass('SP.UI.ApplicationPages.DailyGroupTable', SP.UI.ApplicationPages.EntityRowsTable);
SP.UI.ApplicationPages.DivRenderingInfo.registerClass('SP.UI.ApplicationPages.DivRenderingInfo');
SP.UI.ApplicationPages.DivInfoRepository.registerClass('SP.UI.ApplicationPages.DivInfoRepository');
SP.UI.ApplicationPages.TimeScale.registerClass('SP.UI.ApplicationPages.TimeScale');
SP.UI.ApplicationPages.FreeBusyContainer.registerClass('SP.UI.ApplicationPages.FreeBusyContainer', Sys.Component);
SP.UI.ApplicationPages.FreeBusyStateHandler.registerClass('SP.UI.ApplicationPages.FreeBusyStateHandler');
SP.UI.ApplicationPages.UserFieldHandler.registerClass('SP.UI.ApplicationPages.UserFieldHandler');
SP.UI.ApplicationPages.FacilitiesFieldHandler.registerClass('SP.UI.ApplicationPages.FacilitiesFieldHandler');
SP.UI.ApplicationPages.FreeBusyTable.registerClass('SP.UI.ApplicationPages.FreeBusyTable');
SP.UI.ApplicationPages.FreeBusyView.registerClass('SP.UI.ApplicationPages.FreeBusyView');
SP.UI.ApplicationPages.SU.registerClass('SP.UI.ApplicationPages.SU');
function sp_ui_applicationpages_calendar_initialize() {
    SP.UI.ApplicationPages.ElementUtility.$56 = $get('RibbonContainer');
    SP.UI.ApplicationPages.ElementUtility.$1e = $get('s4-workspace');
    SP.UI.ApplicationPages.ElementUtility.$3l = $get('contentBox');
    SP.UI.ApplicationPages.ItemBuilder.$5M = '<img border=\"0\" align=\"top\" title=\"{0}\" alt=\"{0}\" src=\"' + SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'images/{1}\"/>';
    SP.UI.ApplicationPages.ItemBuilder.$4A = '<a href=\"javascript:void(0);\" class=\"ms-cal-nav\" evtid=\"expand_collapse\"><img border=\"0\" src=\"' + SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'images/{1}.gif\" width=\"9\" height=\"7\" />{0}</a>';
    SP.UI.ApplicationPages.DateTimeFields.$3t = null;
    SP.UI.ApplicationPages.DetailCalendarTable.$1L = -1;
    SP.UI.ApplicationPages.CalendarHeaderControls.$6W = '<img src=\"' + SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'images/error16by16.gif\" align=\"middle\" width=\"16\" height=\"16\" />';
    SP.UI.ApplicationPages.FreeBusyContainer.instance = null;
}
;
sp_ui_applicationpages_calendar_initialize();
RegisterModuleInit("sp.ui.applicationpages.calendar.js", sp_ui_applicationpages_calendar_initialize);
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.applicationpages.calendar.js");
