function ULSPOJ(){var o=new Object;o.ULSTeamName="Work Management";o.ULSFileName="WMA.UI.TaskList.debug.js";return o;}
Type.registerNamespace('CUI');
Type.registerNamespace('CUI.Page');
if (typeof(CUI.Page.PageComponent) == "undefined")
{
  CUI.Page.ICommandHandler=function(){};
  CUI.Page.ICommandHandler.registerInterface('CUI.Page.ICommandHandler');
  CUI.Page.PageComponent=function(){};
  CUI.Page.PageComponent.prototype={init:function(){},getGlobalCommands:function(){ULSPOJ:;return null;},getFocusedCommands:function(){ULSPOJ:;return null;},handleCommand:function(commandId,properties,sequence){ULSPOJ:;return false;},canHandleCommand:function(commandId){ULSPOJ:;return false;},isFocusable:function(){ULSPOJ:;return false;},receiveFocus:function(){ULSPOJ:;return false;},yieldFocus:function(){ULSPOJ:;return true;},getId:function(){ULSPOJ:;return'PageComponent';}};
  CUI.Page.PageComponent.registerClass('CUI.Page.PageComponent',null,CUI.Page.ICommandHandler);
}


Type.registerNamespace('SP.UI');

SP.UI.ISessionBuilderContext = function() {}
SP.UI.ISessionBuilderContext.registerInterface('SP.UI.ISessionBuilderContext');


SP.UI.ITaskQueryBuilderContext = function() {}
SP.UI.ITaskQueryBuilderContext.registerInterface('SP.UI.ITaskQueryBuilderContext');


SP.UI.IAsyncJob = function() {}
SP.UI.IAsyncJob.registerInterface('SP.UI.IAsyncJob');


SP.UI.IAsyncJobWithCallback = function() {}
SP.UI.IAsyncJobWithCallback.registerInterface('SP.UI.IAsyncJobWithCallback');


SP.UI.IInlineEditableTaskRow = function() {}
SP.UI.IInlineEditableTaskRow.registerInterface('SP.UI.IInlineEditableTaskRow');


SP.UI.ILocationRow = function() {}
SP.UI.ILocationRow.registerInterface('SP.UI.ILocationRow');


SP.UI.IInlineEditControl = function() {}
SP.UI.IInlineEditControl.registerInterface('SP.UI.IInlineEditControl');


SP.UI.MoveDirection = function() {}
SP.UI.MoveDirection.prototype = {
    up: 0, 
    down: 1
}
SP.UI.MoveDirection.registerEnum('SP.UI.MoveDirection', false);


SP.UI.TabDirection = function() {}
SP.UI.TabDirection.prototype = {
    none: 0, 
    forward: 1, 
    backward: 2
}
SP.UI.TabDirection.registerEnum('SP.UI.TabDirection', false);


SP.UI.IGroupingControlFactory = function() {}
SP.UI.IGroupingControlFactory.$$ = function SP_UI_IGroupingControlFactory$$$(TRowData) {ULSPOJ:;
    var $$cn = 'IGroupingControlFactory' + '$1' + '$' + TRowData.getName().replace(/\./g, '_');
    if (!SP.UI[$$cn]) {
        var $$ccr = SP.UI[$$cn] = function() {
        };
        $$ccr.registerInterface('SP.UI.' + $$cn);
    }
    return SP.UI[$$cn];
}
SP.UI.IGroupingControlFactory.registerInterface('SP.UI.IGroupingControlFactory');


SP.UI.IRowControlFactory = function() {}
SP.UI.IRowControlFactory.$$ = function SP_UI_IRowControlFactory$$$(TRowData) {ULSPOJ:;
    var $$cn = 'IRowControlFactory' + '$1' + '$' + TRowData.getName().replace(/\./g, '_');
    if (!SP.UI[$$cn]) {
        var $$ccr = SP.UI[$$cn] = function() {
        };
        $$ccr.registerInterface('SP.UI.' + $$cn);
    }
    return SP.UI[$$cn];
}
SP.UI.IRowControlFactory.registerInterface('SP.UI.IRowControlFactory');


SP.UI.IRefreshManager = function() {}
SP.UI.IRefreshManager.registerInterface('SP.UI.IRefreshManager');


SP.UI.AnimationStrategy = function() {}
SP.UI.AnimationStrategy.prototype = {
    none: 0, 
    list: 1, 
    sort: 2
}
SP.UI.AnimationStrategy.registerEnum('SP.UI.AnimationStrategy', false);


SP.UI.IPostAnimation = function() {}
SP.UI.IPostAnimation.registerInterface('SP.UI.IPostAnimation');


SP.UI.INotifyTaskUpdate = function() {}
SP.UI.INotifyTaskUpdate.registerInterface('SP.UI.INotifyTaskUpdate');


SP.UI.TaskTableColumn = function() {}
SP.UI.TaskTableColumn.prototype = {
    completed: 0, 
    taskName: 1, 
    callout: 2, 
    dueDate: 3, 
    pinned: 4, 
    serverOperation: 5, 
    serverError: 6, 
    personalTask: 7, 
    selection: 8, 
    selectionBorder: 9
}
SP.UI.TaskTableColumn.registerEnum('SP.UI.TaskTableColumn', false);


SP.UI.ITaskListServiceProvider = function() {}
SP.UI.ITaskListServiceProvider.registerInterface('SP.UI.ITaskListServiceProvider');


SP.UI.WidgetEnabledMode = function() {}
SP.UI.WidgetEnabledMode.prototype = {
    none: 0, 
    alwaysEnabled: 1, 
    onlyEnabledOnSelection: 2, 
    onlyEnabledOnDistinctSelection: 3
}
SP.UI.WidgetEnabledMode.registerEnum('SP.UI.WidgetEnabledMode', false);


SP.UI.WidgetVisibilityModes = function() {}
SP.UI.WidgetVisibilityModes.prototype = {
    none: 0, 
    alwaysVisible: 1, 
    mouseHover: 2, 
    keyboardFocus: 4, 
    custom: 8
}
SP.UI.WidgetVisibilityModes.registerEnum('SP.UI.WidgetVisibilityModes', true);


SP.UI.IUserOrderedSession = function() {}
SP.UI.IUserOrderedSession.registerInterface('SP.UI.IUserOrderedSession');


SP.UI.ILocationOrientedSession = function() {}
SP.UI.ILocationOrientedSession.registerInterface('SP.UI.ILocationOrientedSession');


SP.UI.SessionType = function() {}
SP.UI.SessionType.prototype = {
    noValue: 0, 
    userOrderedFlatList: 1, 
    userOrderedLocations: 2, 
    sortedFlatList: 3, 
    sortedLocations: 4
}
SP.UI.SessionType.registerEnum('SP.UI.SessionType', false);


SP.UI.IDraggable = function() {}
SP.UI.IDraggable.registerInterface('SP.UI.IDraggable');


SP.UI.IDragInfo = function() {}
SP.UI.IDragInfo.registerInterface('SP.UI.IDragInfo');


SP.UI.IDropTarget = function() {}
SP.UI.IDropTarget.registerInterface('SP.UI.IDropTarget');


SP.UI.IDashboardExtension = function() {}
SP.UI.IDashboardExtension.registerInterface('SP.UI.IDashboardExtension');


SP.UI.IKeyboardEventHandler = function() {}
SP.UI.IKeyboardEventHandler.registerInterface('SP.UI.IKeyboardEventHandler');


SP.UI.IMouseEventHandler = function() {}
SP.UI.IMouseEventHandler.registerInterface('SP.UI.IMouseEventHandler');


SP.UI.TimelineToolTipContents = function SP_UI_TimelineToolTipContents() {}


SP.UI.INotifyTask = function() {}
SP.UI.INotifyTask.registerInterface('SP.UI.INotifyTask');


SP.UI.ISelectable = function() {}
SP.UI.ISelectable.registerInterface('SP.UI.ISelectable');


SP.UI.ConstantsImage = function SP_UI_ConstantsImage() {
}


SP.UI.PathConstants = function SP_UI_PathConstants() {
}


SP.UI.SessionBuilder = function SP_UI_SessionBuilder() {
}
SP.UI.SessionBuilder.$1J = function SP_UI_SessionBuilder$$1J($p0, $p1, $p2) {
    var $v_0;
    if ($p1) {
        var $v_1 = $p2.createSortableSessionManager();
        if ($p0) {
            $v_0 = $v_1.createLocationOrientedSession();
        }
        else {
            $v_0 = $v_1.createSession();
        }
    }
    else {
        var $v_2 = $p2.createUserOrderedSessionManager();
        if ($p0) {
            $v_0 = $v_2.createLocationOrientedSession();
        }
        else {
            $v_0 = $v_2.createSession();
        }
    }
    return new SP.UI.WrappedSession($v_0);
}


SP.UI.CustomRedirectViewKey = function SP_UI_CustomRedirectViewKey() {
}
SP.UI.CustomRedirectViewKey.$8y = function SP_UI_CustomRedirectViewKey$$8y($p0) {
    switch ($p0) {
        case 0:
            return 'Tasks_All';
        case 4:
            return 'Tasks_Highlights';
        case 1:
            return 'Tasks_Completed';
        case 5:
            return 'Tasks_New';
    }
    return null;
}


SP.UI.TaskQueryBuilder = function SP_UI_TaskQueryBuilder($p0) {
    this.$2I_0 = $p0;
    this.$9K_0(this.$2I_0);
}
SP.UI.TaskQueryBuilder.$At = function SP_UI_TaskQueryBuilder$$At($p0, $p1, $p2) {
    if (!SP.UI.TaskQueryBuilder.$1K($p0.get_oldTasksLimit())) {
        var $v_0 = SP.UI.TaskQueryBuilder.$96(-SP.UI.TaskQueryBuilder.$2w($p0.get_oldTasksLimit()));
        if (!$p2.get_fieldFilter()) {
            $p2.set_fieldFilter($p1.createNewTaskFilter());
        }
        $p2.set_lastModifiedDateRangeFilter($p1.createNewDateRangeCriterion());
        $p2.get_lastModifiedDateRangeFilter().set_rangeStartValue($v_0);
    }
}
SP.UI.TaskQueryBuilder.$Aq = function SP_UI_TaskQueryBuilder$$Aq($p0, $p1, $p2) {
    $p2.set_pinnedFilter(2);
    $p2.set_fieldFilter($p1.createNewTaskFilter());
    if (!SP.UI.TaskQueryBuilder.$1K($p0.get_lateTasksLimit()) || !SP.UI.TaskQueryBuilder.$1K($p0.get_upcomingTasksLimit())) {
        $p2.get_fieldFilter().set_dueDateRangeCriterion($p1.createNewDateRangeCriterion());
        if (!SP.UI.TaskQueryBuilder.$1K($p0.get_lateTasksLimit())) {
            var $v_0 = SP.UI.TaskQueryBuilder.$3r(-SP.UI.TaskQueryBuilder.$2w($p0.get_lateTasksLimit()));
            $p2.get_fieldFilter().get_dueDateRangeCriterion().set_rangeStartValue($v_0);
        }
        if (!SP.UI.TaskQueryBuilder.$1K($p0.get_upcomingTasksLimit())) {
            var $v_1 = SP.UI.TaskQueryBuilder.$3r(SP.UI.TaskQueryBuilder.$2w($p0.get_upcomingTasksLimit()));
            $p2.get_fieldFilter().get_dueDateRangeCriterion().set_rangeEndValue($v_1);
        }
    }
    $p2.get_fieldFilter().set_completedCriterion($p1.createNewBooleanCriterion());
    $p2.get_fieldFilter().get_completedCriterion().set_compareType(2);
}
SP.UI.TaskQueryBuilder.$Az = function SP_UI_TaskQueryBuilder$$Az($p0, $p1, $p2) {
    $p2.set_fieldFilter($p1.createNewTaskFilter());
    if (!(SP.UI.TaskQueryBuilder.$1K($p0.get_daysBeforeCurrentDateTimelineStarts()) && SP.UI.TaskQueryBuilder.$1K($p0.get_daysAfterCurrentDateTimelineEnds()))) {
        $p2.get_fieldFilter().set_criterionConcatType(2);
        $p2.get_fieldFilter().set_startDateRangeCriterion($p1.createNewDateRangeCriterion());
        $p2.get_fieldFilter().set_dueDateRangeCriterion($p1.createNewDateRangeCriterion());
        if (!SP.UI.TaskQueryBuilder.$1K($p0.get_daysBeforeCurrentDateTimelineStarts())) {
            var $v_0 = SP.UI.TaskQueryBuilder.$3r(-SP.UI.TaskQueryBuilder.$2w($p0.get_daysBeforeCurrentDateTimelineStarts()));
            $p2.get_fieldFilter().get_startDateRangeCriterion().set_rangeStartValue($v_0);
            $p2.get_fieldFilter().get_dueDateRangeCriterion().set_rangeStartValue($v_0);
        }
        if (!SP.UI.TaskQueryBuilder.$1K($p0.get_daysAfterCurrentDateTimelineEnds())) {
            var $v_1 = SP.UI.TaskQueryBuilder.$3r(SP.UI.TaskQueryBuilder.$2w($p0.get_daysAfterCurrentDateTimelineEnds()));
            $p2.get_fieldFilter().get_startDateRangeCriterion().set_rangeEndValue($v_1);
            $p2.get_fieldFilter().get_dueDateRangeCriterion().set_rangeEndValue($v_1);
        }
    }
}
SP.UI.TaskQueryBuilder.$Ar = function SP_UI_TaskQueryBuilder$$Ar($p0, $p1, $p2) {
    if ($p0 && $p0.length > 0) {
        $p2.set_locationFilter($p1.createNewLocationFilter());
        var $v_0 = 0;
        var $v_1 = new (SP.UI.List.$$(Number))();
        for (var $v_2 = 0; $v_2 < $p0.length; $v_2++) {
            if ($p0[$v_2] === SP.UI.TaskQueryBuilder.$6q) {
                $v_0++;
            }
            else {
                $v_1.add($p0[$v_2]);
            }
        }
        if ($v_0 > 0) {
            $p2.get_locationFilter().set_locationKeys($v_1.toArray());
            $p2.get_locationFilter().set_includeUncategorizedTasks(true);
        }
        else {
            $p2.get_locationFilter().set_locationKeys($p0);
            $p2.get_locationFilter().set_includeUncategorizedTasks(false);
        }
    }
}
SP.UI.TaskQueryBuilder.$91 = function SP_UI_TaskQueryBuilder$$91($p0) {
    if (!$p0) {
        return 0;
    }
    switch ($p0.get_value()) {
        case 2:
            return 5;
        case 1:
            return 21;
        case 3:
            return 2;
        case 4:
            return 17;
        default:
            return 0;
    }
}
SP.UI.TaskQueryBuilder.$1K = function SP_UI_TaskQueryBuilder$$1K($p0) {
    return SP.UI.Utilities.isNullOrNoValue($p0);
}
SP.UI.TaskQueryBuilder.$3r = function SP_UI_TaskQueryBuilder$$3r($p0) {
    var $v_0 = SP.DateTimeUtil.IntlDate.get_utcNow();
    $v_0.addDays($p0);
    return $v_0.toJsDate();
}
SP.UI.TaskQueryBuilder.$96 = function SP_UI_TaskQueryBuilder$$96($p0) {
    var $v_0 = SP.DateTimeUtil.IntlDate.get_utcNow();
    $v_0.addMonths($p0);
    return $v_0.toJsDate();
}
SP.UI.TaskQueryBuilder.$2w = function SP_UI_TaskQueryBuilder$$2w($p0) {
    return $p0;
}
SP.UI.TaskQueryBuilder.prototype = {
    $2I_0: 0,
    $O_0: null,
    $c_0: null,
    
    get_$6k_0: function SP_UI_TaskQueryBuilder$get_$6k_0() {ULSPOJ:;
        if (!this.$O_0 || !this.$O_0.get_hasValue()) {
            return false;
        }
        else {
            return true;
        }
    },
    
    $7a_0: function SP_UI_TaskQueryBuilder$$7a_0($p0, $p1, $p2, $p3) {
        var $v_0 = $p3.createNewTaskQuery();
        SP.UI.TaskQueryBuilder.$Ar($p1, $p3, $v_0);
        $v_0.set_keywordFilter($p2);
        switch (this.$2I_0) {
            case 0:
                break;
            case 6:
                $v_0.set_fieldFilter($p3.createNewTaskFilter());
                $v_0.get_fieldFilter().set_completedCriterion($p3.createNewBooleanCriterion());
                $v_0.get_fieldFilter().get_completedCriterion().set_compareType(2);
                break;
            case 5:
                $v_0.set_fieldFilter($p3.createNewTaskFilter());
                $v_0.get_fieldFilter().set_completedCriterion($p3.createNewBooleanCriterion());
                $v_0.get_fieldFilter().get_completedCriterion().set_compareType(1);
                break;
            case 1:
                $v_0.set_pinnedFilter(1);
                $v_0.set_fieldFilter($p3.createNewTaskFilter());
                $v_0.get_fieldFilter().set_completedCriterion($p3.createNewBooleanCriterion());
                $v_0.get_fieldFilter().get_completedCriterion().set_compareType(2);
                break;
            case 2:
                SP.UI.TaskQueryBuilder.$Aq($p0, $p3, $v_0);
                break;
            case 7:
                break;
            case 8:
                break;
            case 3:
                $v_0.set_fieldFilter($p3.createNewTaskFilter());
                $v_0.get_fieldFilter().set_completedCriterion($p3.createNewBooleanCriterion());
                $v_0.get_fieldFilter().get_completedCriterion().set_compareType(2);
                $v_0.get_fieldFilter().set_isNewCriterion($p3.createNewBooleanCriterion());
                $v_0.get_fieldFilter().get_isNewCriterion().set_compareType(1);
                break;
            case 9:
                SP.UI.TaskQueryBuilder.$Az($p0, $p3, $v_0);
                break;
            default:
                break;
        }
        SP.UI.TaskQueryBuilder.$At($p0, $p3, $v_0);
        return this.$Ax_0($p3, $v_0);
    },
    
    $Ax_0: function SP_UI_TaskQueryBuilder$$Ax_0($p0, $p1) {
        if (this.get_$6k_0()) {
            var $v_0 = $p0.createNewSortableTaskQuery();
            $v_0.set_coreQuery($p1);
            var $v_1 = $p0.createNewOrderInfo();
            $v_1.set_field(SP.UI.TaskQueryBuilder.$91(this.$O_0));
            $v_1.set_isDescending(this.$c_0.get_value() === 2);
            $v_0.set_order($v_1);
            return $v_0;
        }
        else {
            return $p1;
        }
    },
    
    $9K_0: function SP_UI_TaskQueryBuilder$$9K_0($p0) {
        switch ($p0) {
            case 2:
                this.$O_0 = new (SP.UI.Nullable.$$(SP.WorkManagement.OM.TaskListSortField))(2);
                this.$c_0 = new (SP.UI.Nullable.$$(SP.WorkManagement.OM.TaskListSortOrder))(1);
                break;
            case 3:
                this.$O_0 = new (SP.UI.Nullable.$$(SP.WorkManagement.OM.TaskListSortField))(3);
                this.$c_0 = new (SP.UI.Nullable.$$(SP.WorkManagement.OM.TaskListSortOrder))(2);
                break;
            case 5:
                this.$O_0 = new (SP.UI.Nullable.$$(SP.WorkManagement.OM.TaskListSortField))(4);
                this.$c_0 = new (SP.UI.Nullable.$$(SP.WorkManagement.OM.TaskListSortOrder))(2);
                break;
            default:
                this.$O_0 = SP.UI.Nullable.$$(SP.WorkManagement.OM.TaskListSortField).getNullValue();
                this.$c_0 = SP.UI.Nullable.$$(SP.WorkManagement.OM.TaskListSortOrder).getNullValue();
                break;
        }
    }
}


SP.UI.WrappedSession = function SP_UI_WrappedSession($p0) {
    this.$1G_0 = $p0;
}
SP.UI.WrappedSession.$BO = function SP_UI_WrappedSession$$BO($p0, $p1) {
    if (!($p0.isInstanceOfType($p1))) {
        var $v_0 = 'Query was not of expected type. Query type: ' + Object.getType($p1) + ' Expected type: ' + $p0.toString();
        throw Error.argument('query', $v_0);
    }
    return $p1;
}
SP.UI.WrappedSession.prototype = {
    $1G_0: null,
    
    $AK_0: function SP_UI_WrappedSession$$AK_0($p0) {
        var $v_0 = null;
        if (SP.WorkManagement.OM.UserOrderedSession.isInstanceOfType(this.$1G_0)) {
            $v_0 = (this.$1G_0).readTasks(SP.UI.WrappedSession.$BO(SP.WorkManagement.OM.TaskQuery, $p0));
        }
        else if (SP.WorkManagement.OM.LocationOrientedUserOrderedSession.isInstanceOfType(this.$1G_0)) {
            $v_0 = (this.$1G_0).readTasks(SP.UI.WrappedSession.$BO(SP.WorkManagement.OM.TaskQuery, $p0));
        }
        else if (SP.WorkManagement.OM.SortableSession.isInstanceOfType(this.$1G_0)) {
            $v_0 = (this.$1G_0).readTasks(SP.UI.WrappedSession.$BO(SP.WorkManagement.OM.SortableTaskQuery, $p0));
        }
        else if (SP.WorkManagement.OM.LocationOrientedSortableSession.isInstanceOfType(this.$1G_0)) {
            $v_0 = (this.$1G_0).readTasks(SP.UI.WrappedSession.$BO(SP.WorkManagement.OM.SortableTaskQuery, $p0));
        }
        else {
            throw Error.invalidOperation('Unrecognized session type');
        }
        $v_0.retrieveItems().retrieve();
        $v_0.retrieve();
        return $v_0;
    }
}


SP.UI.MyTasksDashboardImpl = function SP_UI_MyTasksDashboardImpl(isExchangeSyncOnline) {ULSPOJ:;
    this.$$d_$9T_0 = Function.createDelegate(this, this.$9T_0);
    this.get_CurrentView = this.get_currentView;
    this.get_IsGrouped = this.get_isGrouped;
    this.NewTask = this.newTask;
    this.SwitchView = this.switchView;
    this.GetTaskList = this.getTaskList;
    this.GetLocationKeys = this.getLocationKeys;
    this.SetLocationFilter = this.setLocationFilter;
    this.RefreshAllLists = this.refreshAllLists;
    this.RefreshTimeline = this.refreshTimeline;
    this.RefreshAllListsExcept = this.refreshAllListsExcept;
    this.SetSearchString = this.setSearchString;
    this.SetGrouping = this.setGrouping;
    this.ShowExchangeSyncSettingsDialog = this.showExchangeSyncSettingsDialog;
    this.$3P_0 = isExchangeSyncOnline;
    SP.WorkManagement.OM.MyTasksDashboard.WrapImplementationInApiAndMarkInitComplete(this);
    SP.WorkManagement.OM.JsApiUtils.addListener(this.$$d_$9T_0);
}
SP.UI.MyTasksDashboardImpl.$5A = function SP_UI_MyTasksDashboardImpl$$5A($p0, $p1) {
    SP.UI.CsomUtilities.ensureSharePointScriptAndClientContextAreLoaded(function() {ULSPOJ:;
        var $v_0 = SP.UI.MyTasksDashboardImpl.$8r($p1);
        if ($v_0.length > 0) {
            var $v_1 = new SP.UI.TaskDataProvider();
            SP.UI.SharedComponentManager.$5.$1C_0.$7W_0($v_1);
            var $v_2 = SP.WorkManagement.OM.JsApiUtils.createCallbackAggregator($p0, $v_0.length);
            for (var $v_3 = 0; $v_3 < $v_0.length; $v_3++) {
                var $v_4 = ($v_0[$v_3]).get_Impl();
                $v_4.batchRefreshOnDataProvider($v_1, $v_2);
            }
            $v_1.executeQuery(null);
        }
        else {
            SP.UI.Utilities.callIfNotNull($p0, true);
        }
    });
}
SP.UI.MyTasksDashboardImpl.$8r = function SP_UI_MyTasksDashboardImpl$$8r($p0) {
    var $v_0 = SP.UI.ApiManager.get_instance().getAllApisOfType(Object, 4);
    var $v_1 = new Array(0);
    if (!$v_0) {
        return $v_1;
    }
    for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
        if ($p0($v_0[$v_2])) {
            Array.add($v_1, $v_0[$v_2]);
        }
    }
    return $v_1;
}
SP.UI.MyTasksDashboardImpl.$9X = function SP_UI_MyTasksDashboardImpl$$9X($p0, $p1) {
    if (!SP.ScriptUtility.isNullOrEmptyString($p1)) {
        var $v_0 = '';
        var $$dict_3 = $p0;
        for (var $$key_4 in $$dict_3) {
            var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
            $v_0 += '&' + $v_1.key + '=' + $v_1.value;
        }
        if ($v_0) {
            $v_0 = '?' + $v_0.substr(1);
        }
        window.location.href = $p1 + $v_0;
    }
}
SP.UI.MyTasksDashboardImpl.prototype = {
    $3P_0: false,
    
    get_currentView: function SP_UI_MyTasksDashboardImpl$get_currentView() {ULSPOJ:;
        return SP.UI.SharedComponentManager.$5.get_viewType();
    },
    
    get_isGrouped: function SP_UI_MyTasksDashboardImpl$get_isGrouped() {ULSPOJ:;
        return SP.UI.SharedComponentManager.$5.get_isGrouped();
    },
    
    refreshAllListsExcept: function SP_UI_MyTasksDashboardImpl$refreshAllListsExcept(taskListType, fnCallback) {ULSPOJ:;
        var $$t_3 = this;
        SP.UI.MyTasksDashboardImpl.$5A(fnCallback, function($p1_0) {
            return $p1_0.get_TaskListType() !== taskListType;
        });
    },
    
    get_isExchangeSyncOnline: function SP_UI_MyTasksDashboardImpl$get_isExchangeSyncOnline() {ULSPOJ:;
        return this.$3P_0;
    },
    
    refreshAllLists: function SP_UI_MyTasksDashboardImpl$refreshAllLists(callback) {ULSPOJ:;
        var $$t_2 = this;
        SP.UI.MyTasksDashboardImpl.$5A(callback, function($p1_0) {
            return true;
        });
    },
    
    refreshTimeline: function SP_UI_MyTasksDashboardImpl$refreshTimeline(fnCallback) {ULSPOJ:;
        var $$t_2 = this;
        SP.UI.MyTasksDashboardImpl.$5A(fnCallback, function($p1_0) {
            return $p1_0.get_TaskListType() === 9;
        });
    },
    
    newTask: function SP_UI_MyTasksDashboardImpl$newTask() {ULSPOJ:;
        SP.UI.Utilities.showNewTaskDialog();
    },
    
    getLocationKeys: function SP_UI_MyTasksDashboardImpl$getLocationKeys() {ULSPOJ:;
        return SP.UI.SharedComponentManager.$5.get_locations();
    },
    
    setSearchString: function SP_UI_MyTasksDashboardImpl$setSearchString(searchValue, callback) {ULSPOJ:;
        SP.UI.SharedComponentManager.$5.$2i_0 = searchValue;
        this.refreshAllLists(callback);
    },
    
    setLocationFilter: function SP_UI_MyTasksDashboardImpl$setLocationFilter(locations, callback) {ULSPOJ:;
        var $$t_8 = this;
        var $v_0 = new SP.UI.AsyncJobWithCallback(function($p1_0) {
            SP.UI.SharedComponentManager.$5.$Y_0.$q_1.set_filteredLocationIds(locations);
            SP.UI.SharedComponentManager.$5.$Y_0.savePersistedProperties($p1_0);
        });
        var $$t_9 = this;
        var $v_1 = new SP.UI.AsyncJobWithCallback(function($p1_0) {
            $$t_9.refreshAllLists(function($p2_0) {
                $p1_0();
            });
        });
        var $v_2 = new SP.UI.ChainedAsyncJob([ $v_0, $v_1 ]);
        var $$t_A = this;
        $v_2.execute(function() {ULSPOJ:;
            SP.UI.Utilities.callIfNotNull(callback, true);
        });
    },
    
    switchView: function SP_UI_MyTasksDashboardImpl$switchView(view, callback) {ULSPOJ:;
        var $v_0 = {};
        if (window.location.search) {
            var $v_2 = window.location.search.substr(1).split('&');
            for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                var $v_4 = $v_2[$v_3].split('=');
                if ($v_4[0]) {
                    $v_0[$v_4[0]] = $v_4[1];
                }
            }
        }
        var $$t_8 = this;
        SP.UI.RibbonUtilities.doActionWhenRibbonScriptsAreLoaded(function() {ULSPOJ:;
            if (SP.Ribbon.PageManager.get_instance().get_ribbon()) {
                var $v_5 = SP.Ribbon.PageManager.get_instance().get_ribbon().get_selectedTabId();
                if ($v_5) {
                    $v_0['showTaskTab'] = '1';
                }
            }
        });
        var $v_1 = '';
        switch (view) {
            case 0:
                $v_1 = 'AllTasks.aspx';
                break;
            case 1:
                $v_1 = 'CompletedTasks.aspx';
                break;
            case 4:
                $v_1 = 'Highlights.aspx';
                break;
            case 5:
                $v_1 = 'RecentlyAssigned.aspx';
                break;
            default:
                break;
        }
        SP.UI.SharedComponentManager.$5.$Y_0.$q_1.set_quickLaunchLandingPage($v_1);
        SP.UI.SharedComponentManager.$5.$Y_0.savePersistedProperties(null);
        SP.UI.MyTasksDashboardImpl.$9X($v_0, $v_1);
        SP.UI.Utilities.callIfNotNull(callback, true);
    },
    
    getTaskList: function SP_UI_MyTasksDashboardImpl$getTaskList(type) {ULSPOJ:;
        var $v_0 = SP.UI.ApiManager.get_instance().getAllApisOfType(SP.WorkManagement.OM.TaskList, 4);
        if ($v_0) {
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                if ($v_0[$v_1].get_TaskListType() === type) {
                    return $v_0[$v_1];
                }
            }
        }
        return null;
    },
    
    setGrouping: function SP_UI_MyTasksDashboardImpl$setGrouping(groupingEnabled, fnCallback) {ULSPOJ:;
        SP.UI.SharedComponentManager.$5.set_isGrouped(groupingEnabled);
        SP.UI.SharedComponentManager.$5.$Y_0.savePersistedProperties(null);
        this.refreshAllLists(fnCallback);
    },
    
    showExchangeSyncSettingsDialog: function SP_UI_MyTasksDashboardImpl$showExchangeSyncSettingsDialog() {ULSPOJ:;
        var $v_0 = new SP.UI.DialogOptions();
        SP.UI.ModalDialog.commonModalDialogOpen(SP.Utilities.Utility.getLayoutsPageUrl('ExchangeSyncSettings.aspx'), $v_0, null, null);
    },
    
    $9T_0: function SP_UI_MyTasksDashboardImpl$$9T_0($p0, $p1) {
        if ($p1) {
            if ($p0.get_ApiType() === 4) {
                SP.WorkManagement.OM.JsApiUtils.notifyStateUpdated(this);
            }
        }
    }
}


SP.UI.ApiManager = function SP_UI_ApiManager() {ULSPOJ:;
    this.$$d_$AR_0 = Function.createDelegate(this, this.$AR_0);
    this.$2O_0 = {};
    SP.WorkManagement.OM.JsApiUtils.addListener(this.$$d_$AR_0);
}
SP.UI.ApiManager.get_instance = function SP_UI_ApiManager$get_instance() {ULSPOJ:;
    if (!SP.UI.ApiManager.$S) {
        SP.UI.ApiManager.$S = new SP.UI.ApiManager();
    }
    return SP.UI.ApiManager.$S;
}
SP.UI.ApiManager.$6T = function SP_UI_ApiManager$$6T($p0) {
    return ($p0).toString();
}
SP.UI.ApiManager.prototype = {
    $2O_0: null,
    
    getAllApisOfType: function SP_UI_ApiManager$getAllApisOfType(T, api) {ULSPOJ:;
        var $v_0 = this.$2O_0[SP.UI.ApiManager.$6T(api)];
        return $v_0;
    },
    
    getFirstApiOfType: function SP_UI_ApiManager$getFirstApiOfType(T, api) {ULSPOJ:;
        var $v_0 = this.getAllApisOfType(T, api);
        if (!$v_0 || !$v_0.length) {
            return ((T === Number || Type.isEnum(T)) ? 0 : (T === Boolean) ? false : null);
        }
        else {
            return $v_0[0];
        }
    },
    
    $AR_0: function SP_UI_ApiManager$$AR_0($p0, $p1) {
        if ($p1) {
            var $v_0 = SP.UI.ApiManager.$6T($p0.get_ApiType());
            if (!SP.UI.DictionaryUtilities.containKey(this.$2O_0, $v_0)) {
                this.$2O_0[$v_0] = [];
            }
            var $v_1 = this.$2O_0[$v_0];
            Array.add($v_1, $p0);
        }
    }
}


SP.UI.CompletionComponent = function SP_UI_CompletionComponent(serviceProvider) {ULSPOJ:;
    this.$$d_$7e_1 = Function.createDelegate(this, this.$7e_1);
    this.$2o_1 = {};
    this.$w_1 = new (SP.UI.List.$$(SP.UI.CompletionComponent.ExpirationInfo))();
    this.$2R_1 = new (SP.UI.List.$$(String))();
    this.$2q_1 = new (SP.UI.List.$$(String))();
    this.$1D_1 = new (SP.UI.List.$$(Function))();
    SP.UI.CompletionComponent.initializeBase(this);
    this.$3_1 = serviceProvider;
    this.$3G_1 = new SP.UI.IntervalManager(this.$$d_$7e_1);
    this.$3G_1.$1H_0 = 250;
}
SP.UI.CompletionComponent.prototype = {
    $3_1: null,
    $3G_1: null,
    $4h_1: 0,
    
    register: function SP_UI_CompletionComponent$register(taskControl, callback) {ULSPOJ:;
        taskControl.showPendingServerOperation();
        var $v_0 = null;
        if (!SP.UI.DictionaryUtilities.containKey(this.$2o_1, taskControl.get_rowKey())) {
            $v_0 = new SP.UI.CompletionComponent.ExpirationInfo();
            $v_0.taskControl = taskControl;
            this.$2o_1[taskControl.get_rowKey()] = $v_0;
            this.$w_1.add($v_0);
        }
        else {
            $v_0 = this.$2o_1[taskControl.get_rowKey()];
        }
        $v_0.timeout = 3000;
        if (callback) {
            $v_0.callbacks.add(callback);
        }
        if (!this.$3G_1.get_operationInProgress()) {
            this.$3G_1.start();
        }
    },
    
    dispose: function SP_UI_CompletionComponent$dispose() {ULSPOJ:;
        this.$w_1.clear();
        this.$w_1 = null;
        this.$3_1 = null;
        Sys.Component.prototype.dispose.call(this);
    },
    
    $7e_1: function SP_UI_CompletionComponent$$7e_1() {ULSPOJ:;
        var $v_0 = new (SP.UI.List.$$(SP.UI.CompletionComponent.ExpirationInfo))();
        for (var $v_1 = 0; $v_1 < this.$w_1.get_length(); $v_1++) {
            this.$w_1.get_item($v_1).timeout -= 250;
            if (this.$w_1.get_item($v_1).timeout < 0) {
                $v_0.add(this.$w_1.get_item($v_1));
            }
        }
        SP.UI.DebugConsole.log('CheckIfCompletionToggleWindowHasExpired: ' + $v_0.get_length().toString() + ' ' + this.$w_1.get_length().toString());
        this.$AH_1($v_0.toArray());
        for (var $v_2 = 0; $v_2 < $v_0.get_length(); $v_2++) {
            this.$w_1.remove($v_0.get_item($v_2));
            delete this.$2o_1[$v_0.get_item($v_2).taskControl.get_rowKey()];
        }
        return this.$w_1.get_length() > 0;
    },
    
    $AH_1: function SP_UI_CompletionComponent$$AH_1($p0) {
        var $v_0 = new (SP.UI.List.$$(SP.UI.ClientCompletionInfo))();
        var $v_1 = new (SP.UI.List.$$(Number))();
        for (var $v_2 = 0; $v_2 < $p0.length; $v_2++) {
            var $v_3 = $p0[$v_2];
            var $v_4 = $p0[$v_2].taskControl;
            if ($v_4.get_isCompleted() !== $v_4.$2_2.get_isCompleted()) {
                var $v_5 = new SP.UI.ClientCompletionInfo($v_4.$2_2.get_id(), ($v_4.get_isCompleted()) ? 0 : 1);
                $v_0.add($v_5);
                var $v_6 = ($v_4.$2_2.get_name()) ? $v_4.$2_2.get_name() : '';
                if ($v_4.get_isCompleted()) {
                    this.$2R_1.add($v_6);
                    $v_1.add($v_4.$2_2.get_id());
                }
                else {
                    this.$2q_1.add($v_6);
                    $v_1.add($v_4.$2_2.get_id());
                }
                for (var $v_7 = 0; $v_7 < $v_3.callbacks.get_length(); $v_7++) {
                    this.$1D_1.add($v_3.callbacks.get_item($v_7));
                }
            }
            else {
                for (var $v_8 = 0; $v_8 < $v_3.callbacks.get_length(); $v_8++) {
                    SP.UI.Utilities.callIfNotNull($v_3.callbacks.get_item($v_8), true);
                }
                $v_4.hidePendingServerOperation();
            }
        }
        if ($v_0.get_length() > 0) {
            this.$4h_1++;
            var $v_9 = this.$3_1.createDataProvider();
            for (var $v_A = 0; $v_A < $v_0.get_length(); $v_A++) {
                $v_0.get_item($v_A).execute($v_9);
            }
            var $$t_E = this;
            $v_9.appendAdditionalNotification(function($p1_0, $p1_1) {
                if (!$p1_0) {
                    $$t_E.$99_1($v_1, $p1_1);
                }
                $$t_E.$9D_1($v_1, $p1_0);
            });
            $v_9.executeQuery(null);
        }
    },
    
    $99_1: function SP_UI_CompletionComponent$$99_1($p0, $p1) {
        for (var $v_0 = 0; $v_0 < $p0.get_length(); $v_0++) {
            var $v_1 = $p0.get_item($v_0).toString();
            var $v_2 = this.$3_1.get_taskListTable().getControlFromKey($p0.get_item($v_0).toString());
            this.$3_1.get_taskListTable().showRow($v_2);
            $v_2.showServerError($p1[0]);
        }
    },
    
    $9D_1: function SP_UI_CompletionComponent$$9D_1($p0, $p1) {
        this.$4h_1--;
        for (var $v_0 = 0; $v_0 < $p0.get_length(); $v_0++) {
            this.$3_1.get_taskListTable().removeRow(this.$3_1.get_taskListTable().getControlFromKey($p0.get_item($v_0).toString()), true);
        }
        if (this.$4h_1 <= 0) {
            if ($p1) {
                if (this.$2R_1.get_length() > 0) {
                    SP.UI.NotificationComponent.showCompletedNotification(this.$2R_1.toArray());
                }
                if (this.$2q_1.get_length() > 0) {
                    SP.UI.NotificationComponent.showUncompletedNotification(this.$2q_1.toArray());
                }
            }
            for (var $v_1 = 0; $v_1 < this.$1D_1.get_length(); $v_1++) {
                SP.UI.Utilities.callIfNotNull(this.$1D_1.get_item($v_1), $p1);
            }
            this.$2R_1 = new (SP.UI.List.$$(String))();
            this.$2q_1 = new (SP.UI.List.$$(String))();
            this.$1D_1 = new (SP.UI.List.$$(Function))();
        }
    }
}


SP.UI.CompletionComponent.ExpirationInfo = function SP_UI_CompletionComponent_ExpirationInfo() {ULSPOJ:;
    this.callbacks = new (SP.UI.List.$$(Function))();
}
SP.UI.CompletionComponent.ExpirationInfo.prototype = {
    taskControl: null,
    timeout: 0
}


SP.UI.FriendlyDateComponent = function SP_UI_FriendlyDateComponent(calendarType) {ULSPOJ:;
    this.$$d_$BH_1 = Function.createDelegate(this, this.$BH_1);
    this.$28_1 = new (SP.UI.List.$$(SP.UI.FriendlyDateControl))();
    SP.UI.FriendlyDateComponent.initializeBase(this);
    this.$a_1 = new SP.UI.IntervalManager(this.$$d_$BH_1);
    this.$a_1.$1H_0 = 120000;
    this.$1i_1 = calendarType;
}
SP.UI.FriendlyDateComponent.prototype = {
    $a_1: null,
    $42_1: 0,
    $1i_1: 0,
    
    getFriendlyDateControl: function SP_UI_FriendlyDateComponent$getFriendlyDateControl(date, includeTime) {ULSPOJ:;
        var $v_0 = new SP.UI.FriendlyDateControl(date, includeTime, this.$1i_1);
        this.$28_1.add($v_0);
        if (!this.$a_1.get_operationInProgress()) {
            this.$a_1.start();
        }
        return $v_0;
    },
    
    dispose: function SP_UI_FriendlyDateComponent$dispose() {ULSPOJ:;
        if (this.$a_1.get_operationInProgress()) {
            this.$a_1.stop();
        }
        this.$28_1 = null;
        Sys.Component.prototype.dispose.call(this);
    },
    
    $BH_1: function SP_UI_FriendlyDateComponent$$BH_1() {ULSPOJ:;
        var $v_0 = Math.min(10, this.$28_1.get_length());
        for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
            if (this.$42_1 >= this.$28_1.get_length()) {
                this.$42_1 = 0;
            }
            this.$28_1.get_item(this.$42_1).update();
        }
        return false;
    }
}


SP.UI.NotificationComponent = function SP_UI_NotificationComponent() {ULSPOJ:;
    SP.UI.NotificationComponent.initializeBase(this);
}
SP.UI.NotificationComponent.showImportantAndUpcomingViewNotification = function SP_UI_NotificationComponent$showImportantAndUpcomingViewNotification() {ULSPOJ:;
    SP.UI.NotificationComponent.$6L(function() {ULSPOJ:;
        var $v_0 = String.format(WorkManagement.Res.TaskList_Notification_ImportantViewBody, '<a href=\'javascript:;\'>', '</a>');
        var $v_1 = new SP.UI.Notify.Notification(1, WorkManagement.Res.TaskList_Notification_ImportantViewHeader, true, null, function() {ULSPOJ:;
            SP.UI.ApiManager.get_instance().getFirstApiOfType(SP.WorkManagement.OM.MyTasksDashboard, 2).SwitchView(4, null);
        }, { txt: '<p>' + $v_0 + '</p>', dt: null, img: null });
        $v_1.Show(false);
        SP.UI.SharedComponentManager.$5.$Y_0.$q_1.set_hasShownTaskListTooLongNotification(true);
        SP.UI.SharedComponentManager.$5.$Y_0.savePersistedProperties(null);
    });
}
SP.UI.NotificationComponent.showCompletedNotification = function SP_UI_NotificationComponent$showCompletedNotification(taskNames) {ULSPOJ:;
    SP.UI.NotificationComponent.$74(WorkManagement.Res.TaskListCompleteOneTask, WorkManagement.Res.TaskListCompleteMultipleTasks, WorkManagement.Res.TaskListCompleteTaskNotificationSubtext, 1, taskNames);
}
SP.UI.NotificationComponent.showUncompletedNotification = function SP_UI_NotificationComponent$showUncompletedNotification(taskNames) {ULSPOJ:;
    SP.UI.NotificationComponent.$74(WorkManagement.Res.TaskListUncompleteOneTask, WorkManagement.Res.TaskListUncompleteMultipleTasks, WorkManagement.Res.TaskListUncompleteTaskNotificationSubtext, 0, taskNames);
}
SP.UI.NotificationComponent.showNewTaskAlert = function SP_UI_NotificationComponent$showNewTaskAlert(numberOfNewTasks) {ULSPOJ:;
    var $v_0 = String.format(SP.Utilities.LocUtility.getLocalizedCountValue(WorkManagement.Res.TaskList_NewTasks_Message, WorkManagement.Res.TaskList_NewTasks_Message_Interval, numberOfNewTasks), numberOfNewTasks);
    SP.UI.NotificationComponent.showGenericAlert($v_0, WorkManagement.Res.TaskList_NewTasks_Message_Subtext, function() {ULSPOJ:;
        SP.UI.ApiManager.get_instance().getFirstApiOfType(SP.WorkManagement.OM.MyTasksDashboard, 2).SwitchView(5, null);
    }, null);
}
SP.UI.NotificationComponent.showGenericAlert = function SP_UI_NotificationComponent$showGenericAlert(header, message, clickCallback, image) {ULSPOJ:;
    SP.UI.NotificationComponent.$6L(function() {ULSPOJ:;
        if (!message) {
            message = '';
        }
        var $v_0 = new SP.UI.Notify.Notification(1, header, false, null, clickCallback, { txt: '', dt: message, img: image });
        $v_0.Show(false);
    });
}
SP.UI.NotificationComponent.$74 = function SP_UI_NotificationComponent$$74($p0, $p1, $p2, $p3, $p4) {
    if ($p4 && $p4.length > 0) {
        var $v_0 = '';
        var $v_1 = '';
        if ($p4.length === 1) {
            $v_0 = String.format($p0, STSHtmlEncode($p4[0]));
            $v_1 += String.format('<div>{0}</div>', $p2);
        }
        else {
            $v_0 = String.format($p1, $p4.length);
            for (var $v_2 = 0; $v_2 < $p4.length; $v_2++) {
                $v_1 += '<div> ' + STSHtmlEncode($p4[$v_2]) + '</div>';
            }
        }
        SP.UI.NotificationComponent.showGenericAlert($v_0, $v_1, function() {ULSPOJ:;
            SP.UI.ApiManager.get_instance().getFirstApiOfType(SP.WorkManagement.OM.MyTasksDashboard, 2).SwitchView($p3, null);
        }, null);
    }
}
SP.UI.NotificationComponent.$6L = function SP_UI_NotificationComponent$$6L($p0) {
    EnsureScriptFunc('core.js', 'SP.UI.Notify', $p0);
}


SP.UI.PersistedPropertiesComponent = function SP_UI_PersistedPropertiesComponent(properties) {ULSPOJ:;
    SP.UI.PersistedPropertiesComponent.initializeBase(this);
    this.$q_1 = properties;
}
SP.UI.PersistedPropertiesComponent.prototype = {
    $q_1: null,
    
    get_properties: function SP_UI_PersistedPropertiesComponent$get_properties() {ULSPOJ:;
        return this.$q_1;
    },
    
    savePersistedProperties: function SP_UI_PersistedPropertiesComponent$savePersistedProperties(fnComplete) {ULSPOJ:;
        var $v_0 = new SP.UI.TaskDataProvider();
        $v_0.setPersistedProperties(this.$7n_1(this.$q_1, $v_0.$n_0));
        var $$t_4 = this;
        $v_0.executeQuery(function($p1_0, $p1_1) {
            if (fnComplete) {
                fnComplete();
            }
        });
    },
    
    $7n_1: function SP_UI_PersistedPropertiesComponent$$7n_1($p0, $p1) {
        var $v_0 = SP.WorkManagement.OM.PersistedProperties.newObject($p1);
        $v_0.set_filteredLocationIds($p0.get_filteredLocationIds());
        $v_0.set_hasShownTaskListTooLongNotification($p0.get_hasShownTaskListTooLongNotification());
        $v_0.set_hasShownMarkAsImportantCallout($p0.get_hasShownMarkAsImportantCallout());
        $v_0.set_groupByProjects($p0.get_groupByProjects());
        if ($p0.isPropertyAvailable('QuickLaunchLandingPage')) {
            $v_0.set_quickLaunchLandingPage($p0.get_quickLaunchLandingPage());
        }
        return $v_0;
    }
}


SP.UI.TaskListConstants = function SP_UI_TaskListConstants() {
}
SP.UI.TaskListConstants.get_sharePointCommonThemedImage = function SP_UI_TaskListConstants$get_sharePointCommonThemedImage() {ULSPOJ:;
    if (!SP.UI.TaskListConstants.$3c) {
        SP.UI.TaskListConstants.$3c = GetThemedImageUrl(SP.UI.ConstantsImage.spCommonImage);
    }
    return SP.UI.TaskListConstants.$3c;
}


SP.UI.UpdateTimelineAsyncJob = function SP_UI_UpdateTimelineAsyncJob(taskUpdated, taskRemoved, timelineDataSource, services) {ULSPOJ:;
    this.$5y_0 = taskUpdated;
    this.$5x_0 = taskRemoved;
    this.$1e_0 = timelineDataSource;
    this.$N_0 = services;
}
SP.UI.UpdateTimelineAsyncJob.$68 = function SP_UI_UpdateTimelineAsyncJob$$68($p0) {
    return ((!SP.UI.DateTimeUtilities.isDefaultDate($p0)) ? $p0 : null);
}
SP.UI.UpdateTimelineAsyncJob.prototype = {
    $5y_0: null,
    $5x_0: null,
    $N_0: null,
    $1e_0: null,
    
    execute: function SP_UI_UpdateTimelineAsyncJob$execute() {ULSPOJ:;
        this.$1e_0.Update(this.$77_0(this.$5y_0), this.$77_0(this.$5x_0));
    },
    
    $77_0: function SP_UI_UpdateTimelineAsyncJob$$77_0($p0) {
        var $v_0 = [];
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            var $v_2 = $p0[$v_1];
            if ($v_2.get_id() > SP.UI.TaskListConstants.noValue) {
                var $$t_5 = this;
                Array.add($v_0, this.$1e_0.GenerateItemInfo($v_2.get_id().toString(), $v_2.get_name(), SP.UI.Utilities.$6Q($v_2.get_editUrl(), $v_2.get_id()), function($p1_0) {
                    GoToPage($p1_0);
                }, ($v_2.get_locationId() !== SP.UI.TaskListConstants.noValue) ? $v_2.get_locationId().toString() : null, SP.UI.UpdateTimelineAsyncJob.$68($v_2.get_startDate()), SP.UI.UpdateTimelineAsyncJob.$68($v_2.get_dueDate()), this.$8b_0($v_2, this.$N_0)));
            }
        }
        return $v_0;
    },
    
    $8b_0: function SP_UI_UpdateTimelineAsyncJob$$8b_0($p0, $p1) {
        var $$t_5 = this;
        return function($p1_0, $p1_1) {
            var $v_0 = SP.UI.TaskControl.$6B($p0, $p1, $p1_0);
            if ($v_0) {
                $v_0.$A4_0($p1_0, $p1_1);
            }
        };
    }
}


SP.UI.AnimationAsyncJob = function SP_UI_AnimationAsyncJob(animationId, delay) {ULSPOJ:;
    this.$2U_0 = new (SP.UI.List.$$(Object))();
    this.$3f_0 = new (SP.UI.List.$$(Object))();
    this.$5L_0 = animationId;
    this.$5U_0 = delay;
}
SP.UI.AnimationAsyncJob.prototype = {
    $5L_0: 0,
    $5U_0: 0,
    
    get_count: function SP_UI_AnimationAsyncJob$get_count() {ULSPOJ:;
        return this.$2U_0.get_length();
    },
    
    execute: function SP_UI_AnimationAsyncJob$execute(onComplete) {ULSPOJ:;
        if (this.$2U_0.get_length() > 0 && this.$3f_0.get_length() > 0) {
            var $v_0 = new SPAnimation.Object(this.$5L_0, this.$5U_0, this.$2U_0.toArray(), this.$3f_0.toArray(), onComplete, null);
            $v_0.RunAnimation();
        }
        else {
            if (onComplete) {
                onComplete();
            }
        }
    },
    
    addAnimation: function SP_UI_AnimationAsyncJob$addAnimation(element, state) {ULSPOJ:;
        this.$2U_0.add(element);
        this.$3f_0.add(state);
    }
}


SP.UI.AsyncJobManager = function SP_UI_AsyncJobManager() {ULSPOJ:;
    this.$$d_$AI_0 = Function.createDelegate(this, this.$AI_0);
    this.$1Y_0 = new (SP.UI.List.$$(SP.UI.IAsyncJob))();
    this.$6_0 = new Sys.EventHandlerList();
    this.$a_0 = new SP.UI.IntervalManager(this.$$d_$AI_0);
}
SP.UI.AsyncJobManager.prototype = {
    $3Z_0: 1,
    $a_0: null,
    
    get_rowsToBatch: function SP_UI_AsyncJobManager$get_rowsToBatch() {ULSPOJ:;
        return this.$3Z_0;
    },
    set_rowsToBatch: function SP_UI_AsyncJobManager$set_rowsToBatch(value) {ULSPOJ:;
        this.$3Z_0 = value;
        return value;
    },
    
    get_rowsRemaining: function SP_UI_AsyncJobManager$get_rowsRemaining() {ULSPOJ:;
        return this.$1Y_0.get_length();
    },
    
    get_intervalTime: function SP_UI_AsyncJobManager$get_intervalTime() {ULSPOJ:;
        return this.$a_0.$1H_0;
    },
    set_intervalTime: function SP_UI_AsyncJobManager$set_intervalTime(value) {ULSPOJ:;
        this.$a_0.$1H_0 = value;
        return value;
    },
    
    add_jobsCompleted: function SP_UI_AsyncJobManager$add_jobsCompleted(value) {ULSPOJ:;
        this.$6_0.addHandler('JobsCompletedEvent', value);
    },
    remove_jobsCompleted: function SP_UI_AsyncJobManager$remove_jobsCompleted(value) {ULSPOJ:;
        this.$6_0.removeHandler('JobsCompletedEvent', value);
    },
    
    addAsyncJob: function SP_UI_AsyncJobManager$addAsyncJob(task) {ULSPOJ:;
        this.$1Y_0.add(task);
        if (!this.$a_0.get_operationInProgress()) {
            this.$a_0.start();
        }
    },
    
    clearJobs: function SP_UI_AsyncJobManager$clearJobs() {ULSPOJ:;
        this.$1Y_0.clear();
        if (this.$a_0.get_operationInProgress()) {
            this.$a_0.stop();
        }
    },
    
    $AI_0: function SP_UI_AsyncJobManager$$AI_0() {ULSPOJ:;
        var $v_0 = 0;
        while (this.$1Y_0.get_length() > 0 && $v_0 < this.$3Z_0) {
            var $v_1 = this.$1Y_0.get_item(0);
            $v_1.execute();
            $v_0++;
            this.$1Y_0.remove($v_1);
        }
        if (!this.$1Y_0.get_length()) {
            SP.UI.EventUtilities.raiseEvent(Sys.EventArgs, this.$6_0, 'JobsCompletedEvent', this, null);
            return false;
        }
        else {
            return true;
        }
    },
    
    dispose: function SP_UI_AsyncJobManager$dispose() {ULSPOJ:;
        this.clearJobs();
        this.$a_0.dispose();
    }
}


SP.UI.AsyncJobWithCallback = function SP_UI_AsyncJobWithCallback(asyncFunction) {ULSPOJ:;
    this.$5M_0 = asyncFunction;
}
SP.UI.AsyncJobWithCallback.prototype = {
    $5M_0: null,
    
    execute: function SP_UI_AsyncJobWithCallback$execute(onComplete) {ULSPOJ:;
        this.$5M_0(onComplete);
    }
}


SP.UI.CallbackAsyncJob = function SP_UI_CallbackAsyncJob(callback) {ULSPOJ:;
    this.$5N_0 = callback;
}
SP.UI.CallbackAsyncJob.prototype = {
    $5N_0: null,
    
    execute: function SP_UI_CallbackAsyncJob$execute() {ULSPOJ:;
        this.$5N_0();
    }
}


SP.UI.ChainedAsyncJob = function SP_UI_ChainedAsyncJob(asyncJobs) {ULSPOJ:;
    this.$23_0 = asyncJobs;
}
SP.UI.ChainedAsyncJob.prototype = {
    $23_0: null,
    $3y_0: 0,
    
    execute: function SP_UI_ChainedAsyncJob$execute(onComplete) {ULSPOJ:;
        if (!this.$23_0 || !this.$23_0.length) {
            if (onComplete) {
                onComplete();
            }
        }
        else {
            this.$3y_0 = 0;
            for (var $v_0 = 0; $v_0 < this.$23_0.length; $v_0++) {
                var $$t_2 = this;
                this.$23_0[$v_0].execute(function() {ULSPOJ:;
                    $$t_2.$AG_0(onComplete);
                });
            }
        }
    },
    
    $AG_0: function SP_UI_ChainedAsyncJob$$AG_0($p0) {
        this.$3y_0++;
        if (this.$3y_0 >= this.$23_0.length) {
            if ($p0) {
                $p0();
            }
        }
    }
}


SP.UI.DeferredRenderManager = function SP_UI_DeferredRenderManager(parentElement) {ULSPOJ:;
    this.$$d_$9w_1 = Function.createDelegate(this, this.$9w_1);
    this.$$d_$BJ_1 = Function.createDelegate(this, this.$BJ_1);
    this.$$d_$9p_1 = Function.createDelegate(this, this.$9p_1);
    this.$8_1 = new (SP.UI.List.$$(SP.UI.DeferredRenderRegion))();
    this.$2K_1 = new (SP.UI.List.$$(SP.UI.DeferredRenderRegion))();
    this.$1a_1 = new SP.UI.AsyncJobManager();
    this.$2Q_1 = new (SP.UI.List.$$(Object))();
    SP.UI.DeferredRenderManager.initializeBase(this);
    this.$1a_1.set_intervalTime(1);
    this.$1a_1.$3Z_0 = 1;
    this.$1a_1.add_jobsCompleted(this.$$d_$9p_1);
    this.$3a_1 = new SP.UI.IntervalManager(this.$$d_$BJ_1);
    this.$3a_1.$1H_0 = 200;
    this.$3a_1.start();
    this.$1r_1 = parentElement;
    this.$1_1 = document.createElement('div');
    $addHandler(this.$1r_1, 'scroll', this.$$d_$9w_1);
}
SP.UI.DeferredRenderManager.prototype = {
    $1r_1: null,
    $1_1: null,
    $3a_1: null,
    $4e_1: false,
    
    get_element: function SP_UI_DeferredRenderManager$get_element() {ULSPOJ:;
        return this.$1_1;
    },
    
    register: function SP_UI_DeferredRenderManager$register(control) {ULSPOJ:;
        this.$8_1.add(control);
        this.$1_1.appendChild(control.$1_0);
    },
    
    unregister: function SP_UI_DeferredRenderManager$unregister(control) {ULSPOJ:;
        this.$8_1.remove(control);
        this.$1_1.removeChild(control.$1_0);
    },
    
    update: function SP_UI_DeferredRenderManager$update(drawsCompleted) {ULSPOJ:;
        this.$1a_1.clearJobs();
        var $v_0 = new (SP.UI.List.$$(SP.UI.DeferredRenderRegion))();
        var $v_1 = XUI.Capture.GetLocation(this.$1r_1).y;
        var $v_2 = XUI.Capture.GetLocation(this.$1_1.parentNode).y;
        var $v_3 = $v_2 - $v_1;
        var $v_4 = this.$1r_1.clientHeight;
        var $v_5 = 0;
        for (var $v_6 = 0; $v_6 < this.$8_1.get_length(); $v_6++) {
            this.$8_1.get_item($v_6).$1h_0 = false;
            if (this.$6e_1($v_5, this.$8_1.get_item($v_6).$R_0, $v_3, $v_4, true)) {
                $v_0.add(this.$8_1.get_item($v_6));
                this.$8_1.get_item($v_6).$1h_0 = this.$6e_1($v_5, this.$8_1.get_item($v_6).$R_0, $v_3, $v_4, false);
            }
            $v_5 += this.$8_1.get_item($v_6).$R_0;
        }
        for (var $v_7 = 0; $v_7 < this.$2K_1.get_length(); $v_7++) {
            if (!$v_0.contains(this.$2K_1.get_item($v_7))) {
                SP.UI.DebugConsole.logCategory('DeferredRender', 'leaving view: ' + this.$2K_1.get_item($v_7).$1_0.id.toString());
                this.$2K_1.get_item($v_7).leaveView();
            }
        }
        for (var $v_8 = 0; $v_8 < $v_0.get_length(); $v_8++) {
            SP.UI.DebugConsole.logCategory('DeferredRender', 'entering view: ' + $v_0.get_item($v_8).$1_0.id.toString());
            $v_0.get_item($v_8).enterView(this.$1a_1);
        }
        if (drawsCompleted) {
            if (!this.$1a_1.get_rowsRemaining()) {
                drawsCompleted();
            }
            else {
                this.$2Q_1.add(drawsCompleted);
            }
        }
        this.$2K_1 = $v_0;
    },
    
    dispose: function SP_UI_DeferredRenderManager$dispose() {ULSPOJ:;
        this.$8_1.clear();
        this.$8_1 = null;
        this.$1a_1.dispose();
        this.$3a_1.dispose();
        $removeHandler(this.$1r_1, 'scroll', this.$$d_$9w_1);
        Sys.Component.prototype.dispose.call(this);
    },
    
    $9w_1: function SP_UI_DeferredRenderManager$$9w_1($p0) {
        this.$4e_1 = true;
    },
    
    $BJ_1: function SP_UI_DeferredRenderManager$$BJ_1() {ULSPOJ:;
        if (this.$4e_1) {
            this.$4e_1 = false;
            this.update(null);
        }
        return true;
    },
    
    $6e_1: function SP_UI_DeferredRenderManager$$6e_1($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = ($p4) ? 0.5 : 0;
        var $v_1 = -$p3 * $v_0;
        var $v_2 = $p3 * ($v_0 + 1);
        var $v_3 = $p0 + $p2;
        var $v_4 = $v_3 + $p1;
        if (($v_3 >= $v_1 && $v_3 <= $v_2) || ($v_4 >= $v_1 && $v_4 <= $v_2) || ($v_3 < $v_1 && $v_4 > $v_2)) {
            return true;
        }
        else {
            return false;
        }
    },
    
    $9p_1: function SP_UI_DeferredRenderManager$$9p_1($p0, $p1) {
        for (var $v_0 = 0; $v_0 < this.$2Q_1.get_length(); $v_0++) {
            (this.$2Q_1.get_item($v_0))();
        }
        this.$2Q_1.clear();
    }
}


SP.UI.DeferredRenderRegion = function SP_UI_DeferredRenderRegion() {ULSPOJ:;
    this.$$d_$6m_0 = Function.createDelegate(this, this.$6m_0);
    this.$$d_$Ag_0 = Function.createDelegate(this, this.$Ag_0);
    this.$5j_0 = new SP.UI.InsertAnimation();
    this.$4F_0 = new SP.UI.HideAnimation();
    this.$1V_0 = new (SP.UI.List.$$(Number))();
    SP.UI.DeferredRenderRegion.$50++;
    this.$1_0 = document.createElement('div');
    this.$1_0.id = 'DeferredRenderRegion' + SP.UI.DeferredRenderRegion.$50.toString();
    if (SP.UI.DeferredRenderRegion.$25) {
        this.$1_0.style.border = '1px solid black';
    }
}
SP.UI.DeferredRenderRegion.get_debugRegions = function SP_UI_DeferredRenderRegion$get_debugRegions() {ULSPOJ:;
    return SP.UI.DeferredRenderRegion.$25;
}
SP.UI.DeferredRenderRegion.set_debugRegions = function SP_UI_DeferredRenderRegion$set_debugRegions(value) {ULSPOJ:;
    SP.UI.DeferredRenderRegion.$25 = value;
    return value;
}
SP.UI.DeferredRenderRegion.prototype = {
    $1_0: null,
    $9_0: null,
    $3U_0: false,
    $1B_0: false,
    $R_0: 0,
    $1h_0: false,
    $44_0: false,
    $o_0: null,
    $2F_0: null,
    
    get_rows: function SP_UI_DeferredRenderRegion$get_rows() {ULSPOJ:;
        return this.$9_0;
    },
    
    get_animate: function SP_UI_DeferredRenderRegion$get_animate() {ULSPOJ:;
        return this.$1h_0;
    },
    set_animate: function SP_UI_DeferredRenderRegion$set_animate(value) {ULSPOJ:;
        this.$1h_0 = value;
        return value;
    },
    
    get_measured: function SP_UI_DeferredRenderRegion$get_measured() {ULSPOJ:;
        return this.$3U_0;
    },
    
    get_height: function SP_UI_DeferredRenderRegion$get_height() {ULSPOJ:;
        return this.$R_0;
    },
    
    get_inView: function SP_UI_DeferredRenderRegion$get_inView() {ULSPOJ:;
        return this.$1B_0;
    },
    
    get_element: function SP_UI_DeferredRenderRegion$get_element() {ULSPOJ:;
        return this.$1_0;
    },
    
    get_containerElement: function SP_UI_DeferredRenderRegion$get_containerElement() {ULSPOJ:;
        return this.$o_0;
    },
    
    get_postAnimation: function SP_UI_DeferredRenderRegion$get_postAnimation() {ULSPOJ:;
        return this.$2F_0;
    },
    set_postAnimation: function SP_UI_DeferredRenderRegion$set_postAnimation(value) {ULSPOJ:;
        this.$2F_0 = value;
        return value;
    },
    
    addRow: function SP_UI_DeferredRenderRegion$addRow(rowControl, indexToInsertAfter, tryToAnimate) {ULSPOJ:;
        var $v_0 = this.$9_0[indexToInsertAfter];
        if (!rowControl.$1_0) {
            rowControl.render();
        }
        Array.insert(this.$9_0, indexToInsertAfter + 1, rowControl);
        var $v_1 = (!$v_0) ? null : $v_0.$1_0;
        if (tryToAnimate && SP.UI.AnimationUtilities.isAnimationEnabled()) {
            var $$t_6 = this;
            this.$5j_0.animate(rowControl.$1_0, $v_1, this.$o_0, function() {ULSPOJ:;
                $$t_6.$2M_0(null);
            });
        }
        else {
            var $v_2 = (!$v_1.nextSibling) ? null : $v_1.nextSibling;
            if (!$v_2) {
                this.$o_0.appendChild(rowControl.$1_0);
            }
            else {
                this.$o_0.insertBefore(rowControl.$1_0, $v_2);
            }
            this.$2M_0(null);
        }
    },
    
    removeRow: function SP_UI_DeferredRenderRegion$removeRow(rc, tryToAnimate, measureComplete) {ULSPOJ:;
        var $$t_5 = this;
        var $v_0 = function() {ULSPOJ:;
            var $v_1 = $$t_5.$8n_0(rc);
            if ($$t_5.$1V_0.contains($v_1)) {
                $$t_5.$1V_0.remove($v_1);
            }
            Array.remove($$t_5.$9_0, rc);
            $$t_5.$o_0.removeChild(rc.$1_0);
            $$t_5.$2M_0(measureComplete);
        };
        if (SP.UI.AnimationUtilities.isAnimationEnabled() && tryToAnimate) {
            this.$4F_0.animate(rc.$1_0, this.$o_0, $v_0);
        }
        else {
            $v_0();
        }
    },
    
    hideRow: function SP_UI_DeferredRenderRegion$hideRow(index, tryToAnimate, measureComplete) {ULSPOJ:;
        var $v_0 = this.$9_0[index];
        if (!this.$1V_0.contains(index)) {
            this.$1V_0.add(index);
        }
        if (SP.UI.AnimationUtilities.isAnimationEnabled() && tryToAnimate) {
            $v_0.set_visible(true);
            var $$t_4 = this;
            this.$4F_0.animate($v_0.$1_0, this.$o_0, function() {ULSPOJ:;
                $v_0.set_visible(false);
                $$t_4.$2M_0(measureComplete);
            });
        }
        else {
            $v_0.set_visible(false);
            this.$2M_0(measureComplete);
        }
    },
    
    showRow: function SP_UI_DeferredRenderRegion$showRow(index) {ULSPOJ:;
        if (this.$1V_0.contains(index)) {
            this.$1V_0.remove(index);
        }
        var $v_0 = this.$9_0[index];
        $v_0.set_visible(true);
        this.$2M_0(null);
    },
    
    getIndexFromRow: function SP_UI_DeferredRenderRegion$getIndexFromRow(row) {ULSPOJ:;
        var $v_0 = -1;
        for (var $v_1 = 0; $v_1 < this.$9_0.length; $v_1++) {
            if (this.$9_0[$v_1] === row) {
                $v_0 = $v_1;
                break;
            }
        }
        return $v_0;
    },
    
    updateRowData: function SP_UI_DeferredRenderRegion$updateRowData(newRows) {ULSPOJ:;
        this.$44_0 = true;
        this.$9_0 = newRows;
        if (!this.$1B_0) {
            this.$R_0 = this.$6N_0();
            this.$1_0.style.height = this.$R_0.toString() + 'px';
        }
    },
    
    enterView: function SP_UI_DeferredRenderRegion$enterView(jobManager) {ULSPOJ:;
        if (!this.$9_0) {
        }
        if (SP.UI.DeferredRenderRegion.$25) {
            this.$1_0.style.border = '1px solid green';
        }
        if (!this.$1B_0 || this.$44_0) {
            jobManager.addAsyncJob(new SP.UI.CallbackAsyncJob(this.$$d_$Ag_0));
            jobManager.addAsyncJob(new SP.UI.CallbackAsyncJob(this.$$d_$6m_0));
        }
    },
    
    leaveView: function SP_UI_DeferredRenderRegion$leaveView() {ULSPOJ:;
        if (SP.UI.DeferredRenderRegion.$25) {
            this.$1_0.style.border = '1px solid red';
        }
        if (this.$1B_0) {
            this.$1B_0 = false;
            for (var $v_0 = 0; $v_0 < this.$9_0.length; $v_0++) {
                this.$9_0[$v_0].onLeaveView();
            }
            this.$66_0();
            this.$1_0.style.height = this.$R_0.toString() + 'px';
        }
    },
    
    $Ag_0: function SP_UI_DeferredRenderRegion$$Ag_0() {ULSPOJ:;
        SP.UI.DebugConsole.logCategory('DeferredRenderRegion', 'Rendering region: ' + this.$1_0.id.toString());
        this.$1B_0 = true;
        this.$44_0 = false;
        var $v_0 = document.createElement('div');
        for (var $v_1 = 0; $v_1 < this.$9_0.length; $v_1++) {
            var $v_2 = this.$9_0[$v_1];
            if (!$v_2.$4E_0) {
                $v_2.render();
            }
            $v_2.onEnterView();
            $v_2.$1_0.style.position = '';
            XUI.Html.SetOpacity($v_2.$1_0, 1);
            $v_0.appendChild($v_2.$1_0);
        }
        if (this.$2F_0) {
            this.$2F_0.animate(this);
            this.$2F_0 = null;
        }
        this.$66_0();
        this.$o_0 = $v_0;
        this.$1_0.appendChild(this.$o_0);
        this.$1_0.style.height = '';
    },
    
    $66_0: function SP_UI_DeferredRenderRegion$$66_0() {ULSPOJ:;
        if (this.$o_0) {
            if (this.$1_0.contains(this.$o_0)) {
                this.$1_0.removeChild(this.$o_0);
            }
        }
    },
    
    $2M_0: function SP_UI_DeferredRenderRegion$$2M_0($p0) {
        this.$3U_0 = false;
        var $$t_1 = this;
        SP.UI.TimeoutWrapper.setTimeout(function() {ULSPOJ:;
            if (!$$t_1.$3U_0) {
                $$t_1.$6m_0();
                if ($p0) {
                    $p0();
                }
            }
        }, 0);
    },
    
    $6m_0: function SP_UI_DeferredRenderRegion$$6m_0() {ULSPOJ:;
        this.$3U_0 = true;
        if (this.$1B_0) {
            this.$R_0 = this.$1_0.offsetHeight;
        }
        else {
            this.$R_0 = this.$6N_0();
        }
    },
    
    $6N_0: function SP_UI_DeferredRenderRegion$$6N_0() {ULSPOJ:;
        var $v_0 = (!this.$9_0) ? 0 : this.$9_0.length;
        return ($v_0 - this.$1V_0.get_length()) * 31;
    },
    
    $8n_0: function SP_UI_DeferredRenderRegion$$8n_0($p0) {
        var $v_0 = -1;
        for (var $v_1 = 0; $v_1 < this.$9_0.length; $v_1++) {
            if (this.$9_0[$v_1] === $p0) {
                $v_0 = $v_1;
                break;
            }
        }
        return $v_0;
    }
}


SP.UI.IntervalManager = function SP_UI_IntervalManager(intervalFunction) {ULSPOJ:;
    this.$$d_$A8_0 = Function.createDelegate(this, this.$A8_0);
    this.$1n_0 = SP.UI.IntervalManager.$2L;
    this.$5k_0 = intervalFunction;
}
SP.UI.IntervalManager.prototype = {
    $5k_0: null,
    $1H_0: 1,
    
    get_intervalTime: function SP_UI_IntervalManager$get_intervalTime() {ULSPOJ:;
        return this.$1H_0;
    },
    set_intervalTime: function SP_UI_IntervalManager$set_intervalTime(value) {ULSPOJ:;
        this.$1H_0 = value;
        return value;
    },
    
    get_operationInProgress: function SP_UI_IntervalManager$get_operationInProgress() {ULSPOJ:;
        return this.$1n_0 !== SP.UI.IntervalManager.$2L;
    },
    
    start: function SP_UI_IntervalManager$start() {ULSPOJ:;
        if (this.$1n_0 !== SP.UI.IntervalManager.$2L) {
        }
        else {
            this.$1n_0 = window.setInterval(this.$$d_$A8_0, this.$1H_0);
        }
    },
    
    stop: function SP_UI_IntervalManager$stop() {ULSPOJ:;
        if (this.$1n_0 === SP.UI.IntervalManager.$2L) {
        }
        else {
            window.clearInterval(this.$1n_0);
            this.$1n_0 = SP.UI.IntervalManager.$2L;
        }
    },
    
    dispose: function SP_UI_IntervalManager$dispose() {ULSPOJ:;
        if (this.get_operationInProgress()) {
            this.stop();
        }
    },
    
    $A8_0: function SP_UI_IntervalManager$$A8_0() {ULSPOJ:;
        if (!this.$5k_0()) {
            this.stop();
        }
    }
}


SP.UI.ActiveAttractModeControl = function SP_UI_ActiveAttractModeControl(addTask) {ULSPOJ:;
    SP.UI.ActiveAttractModeControl.initializeBase(this);
    this.$35_3 = addTask;
}
SP.UI.ActiveAttractModeControl.prototype = {
    $35_3: null,
    
    get_imageSource: function SP_UI_ActiveAttractModeControl$get_imageSource() {ULSPOJ:;
        return SP.UI.ConstantsImage.activeTasksAttractMode;
    },
    
    createTextDOMElement: function SP_UI_ActiveAttractModeControl$createTextDOMElement(container) {ULSPOJ:;
        container.appendChild(this.$Q_2.createDivElementWithActions(WorkManagement.Res.TaskList_AttractMode_ClickToAdd, [ this.$35_3 ]));
    }
}


SP.UI.AwiopAttractModeControl = function SP_UI_AwiopAttractModeControl() {ULSPOJ:;
    this.$Q_2 = new SP.UI.EmbeddedActionManager();
    SP.UI.AwiopAttractModeControl.initializeBase(this, [ document.createElement('div') ]);
    this.get_element().style.zIndex = 2;
    Sys.UI.DomElement.addCssClass(this.get_element(), 'ms-awiop-AttractMode');
    this.set_visible(false);
}
SP.UI.AwiopAttractModeControl.prototype = {
    $H_2: null,
    
    get_actionManager: function SP_UI_AwiopAttractModeControl$get_actionManager() {ULSPOJ:;
        return this.$Q_2;
    },
    
    get_imageSource: function SP_UI_AwiopAttractModeControl$get_imageSource() {ULSPOJ:;
        return null;
    },
    
    hide: function SP_UI_AwiopAttractModeControl$hide(fnHideComplete) {ULSPOJ:;
        var $$t_1 = this;
        SPAnimationUtility.BasicAnimator.FadeOut(this.get_element(), function() {ULSPOJ:;
            $$t_1.set_visible(false);
            if (fnHideComplete) {
                fnHideComplete();
            }
        }, null);
    },
    
    show: function SP_UI_AwiopAttractModeControl$show(fnShowComplete) {ULSPOJ:;
        this.set_visible(true);
        if (!this.$Q_2.$1l_0) {
            this.$2x_2();
        }
        var $$t_1 = this;
        SP.UI.AnimationUtilities.fadeIn(this.get_element(), function() {ULSPOJ:;
            if (fnShowComplete) {
                fnShowComplete();
            }
        });
    },
    
    dispose: function SP_UI_AwiopAttractModeControl$dispose() {ULSPOJ:;
        if (this.$H_2) {
            this.$H_2.dispose();
            this.$H_2 = null;
        }
        if (this.$Q_2) {
            this.$Q_2.dispose();
            this.$Q_2 = null;
        }
        Sys.Component.prototype.dispose.call(this);
    },
    
    $2x_2: function SP_UI_AwiopAttractModeControl$$2x_2() {ULSPOJ:;
        var $$t_0 = this;
        SP.UI.CsomUtilities.ensureSharePointScriptAndClientContextAreLoaded(function() {ULSPOJ:;
            $$t_0.$H_2 = new SP.UI.AttractModeControl();
            $$t_0.get_element().appendChild($$t_0.$H_2.get_element());
            $$t_0.createTextDOMElement($$t_0.$H_2.get_textElement());
            if ($$t_0.get_imageSource()) {
                $$t_0.$H_2.get_imageElement().src = $$t_0.get_imageSource();
            }
            $$t_0.$Q_2.attachEvents();
        });
    }
}


SP.UI.ImportantAttractModeControl = function SP_UI_ImportantAttractModeControl(navigateToAllTasks, addTask) {ULSPOJ:;
    SP.UI.ImportantAttractModeControl.initializeBase(this);
    this.$5p_3 = navigateToAllTasks;
    this.$35_3 = addTask;
}
SP.UI.ImportantAttractModeControl.prototype = {
    $5p_3: null,
    $35_3: null,
    
    get_imageSource: function SP_UI_ImportantAttractModeControl$get_imageSource() {ULSPOJ:;
        return SP.UI.ConstantsImage.importantTasksAttractMode;
    },
    
    createTextDOMElement: function SP_UI_ImportantAttractModeControl$createTextDOMElement(container) {ULSPOJ:;
        container.appendChild(this.$Q_2.createDivElementWithActions(WorkManagement.Res.TaskList_AttractMode_Important, [ this.$5p_3, this.$35_3 ]));
    }
}


SP.UI.ClientCompletionInfo = function SP_UI_ClientCompletionInfo(taskId, isCompleted) {ULSPOJ:;
    this.$1d_0 = taskId;
    this.$y_0 = isCompleted;
}
SP.UI.ClientCompletionInfo.prototype = {
    $1d_0: 0,
    $y_0: 0,
    
    get_taskId: function SP_UI_ClientCompletionInfo$get_taskId() {ULSPOJ:;
        return this.$1d_0;
    },
    
    get_completedState: function SP_UI_ClientCompletionInfo$get_completedState() {ULSPOJ:;
        return this.$y_0;
    },
    
    execute: function SP_UI_ClientCompletionInfo$execute(provider) {ULSPOJ:;
        provider.updateTaskInfo(this.$1d_0, 13, (!this.$y_0) ? '1' : '0');
    }
}


SP.UI.ClientCreatedTaskControl = function SP_UI_ClientCreatedTaskControl(services, task) {ULSPOJ:;
    SP.UI.ClientCreatedTaskControl.initializeBase(this, [ services, task ]);
    this.$1F_3 = task.get_id().toString();
    SP.UI.DebugConsole.log('ClientCreatedTaskControl: Created with task id - ' + task.get_id().toString());
    this.$4z_3();
}
SP.UI.ClientCreatedTaskControl.prototype = {
    $1F_3: null,
    
    get_rowKey: function SP_UI_ClientCreatedTaskControl$get_rowKey() {ULSPOJ:;
        return this.$1F_3;
    },
    
    renderRow: function SP_UI_ClientCreatedTaskControl$renderRow() {ULSPOJ:;
        SP.UI.TaskControl.prototype.renderRow.call(this);
        this.showPendingServerOperation();
    },
    
    commitValues: function SP_UI_ClientCreatedTaskControl$commitValues(taskName, dueDate, shouldTryToAnimate) {ULSPOJ:;
        if (!this.$2_2.isPropertyAvailable('Id') || this.$2_2.get_id() < 0) {
            this.$2_2.set_dueDate(SP.UI.DateTimeUtilities.castToDateWithoutValidation(dueDate));
            this.$2_2.set_name(taskName);
            this.clearServerError();
            this.$4z_3();
            return false;
        }
        else {
            return SP.UI.TaskControl.prototype.commitValues.call(this, taskName, dueDate, shouldTryToAnimate);
        }
    },
    
    updateTask: function SP_UI_ClientCreatedTaskControl$updateTask(task) {ULSPOJ:;
        var $v_0 = task.get_id().toString();
        if ($v_0 !== this.$1F_3) {
            SP.UI.DebugConsole.log('ClientCreatedTaskControl.UpdateTask - task ID is: ' + $v_0);
            this.hidePendingServerOperation();
            var $v_1 = this.get_isSelected();
            if ($v_1) {
                this.$3_0.get_selectionManager().removeFromSelection(this.$1F_3);
            }
            this.$3_0.get_taskListTable().updateRowKeyAndData(this.$1F_3, $v_0, task);
            this.$1F_3 = $v_0;
            if ($v_1) {
                this.$3_0.get_selectionManager().select(this.$1F_3);
            }
        }
        SP.UI.TaskControl.prototype.updateTask.call(this, task);
    },
    
    $4z_3: function SP_UI_ClientCreatedTaskControl$$4z_3() {ULSPOJ:;
        var $v_0 = this.$3_0.createDataProvider();
        var $v_1 = $v_0.createTask(this.$2_2.get_name(), this.$2_2.get_description(), null, SP.UI.DateTimeUtilities.createDateString(this.$2_2.get_dueDate()), this.$2_2.get_isCompleted(), this.$2_2.get_pinAge() === 1, this.$2_2.get_locationId());
        $v_1.retrieve();
        $v_1.get_result().retrieve();
        var $$t_4 = this;
        $v_0.appendAdditionalNotification(function($p1_0, $p1_1) {
            if ($p1_0) {
                if ($v_1.get_error()) {
                    $$t_4.showServerError($v_1.get_errorMessage());
                }
                else {
                    $$t_4.updateTask($v_1.get_result());
                    $$t_4.hidePendingServerOperation();
                }
            }
            else {
                $$t_4.showServerError($p1_1[0]);
            }
        });
        $v_0.executeQueryAndRefreshAll(this.$3_0.get_TaskListType(), null);
    }
}


SP.UI.DatePickerControl = function SP_UI_DatePickerControl(id) {ULSPOJ:;
    this.$$d_$3w_2 = Function.createDelegate(this, this.$3w_2);
    this.$$d_$A3_2 = Function.createDelegate(this, this.$A3_2);
    this.$$d_$A2_2 = Function.createDelegate(this, this.$A2_2);
    this.$$d_$9i_2 = Function.createDelegate(this, this.$9i_2);
    SP.UI.DatePickerControl.initializeBase(this, [ document.createElement('div') ]);
    this.$1m_2 = id;
    this.$2x_2(this.get_element());
}
SP.UI.DatePickerControl.$6c = function SP_UI_DatePickerControl$$6c($p0) {
    return !$p0.shiftKey && !$p0.ctrlKey && $p0.altKey && $p0.keyCode === 40;
}
SP.UI.DatePickerControl.prototype = {
    $1m_2: null,
    $G_2: null,
    $B_2: null,
    $1A_2: null,
    $h_2: true,
    $s_2: null,
    $1T_2: false,
    
    add_datePickerDropped: function SP_UI_DatePickerControl$add_datePickerDropped(value) {ULSPOJ:;
        this.get_events().addHandler('DatePickerDroppedEvent', value);
    },
    remove_datePickerDropped: function SP_UI_DatePickerControl$remove_datePickerDropped(value) {ULSPOJ:;
        this.get_events().removeHandler('DatePickerDroppedEvent', value);
    },
    
    add_datePickerClosed: function SP_UI_DatePickerControl$add_datePickerClosed(value) {ULSPOJ:;
        this.get_events().addHandler('DatePickerClosedEvent', value);
    },
    remove_datePickerClosed: function SP_UI_DatePickerControl$remove_datePickerClosed(value) {ULSPOJ:;
        this.get_events().removeHandler('DatePickerClosedEvent', value);
    },
    
    add_datePickerSelected: function SP_UI_DatePickerControl$add_datePickerSelected(value) {ULSPOJ:;
        this.get_events().addHandler('DatePickerSelectedEvent', value);
    },
    remove_datePickerSelected: function SP_UI_DatePickerControl$remove_datePickerSelected(value) {ULSPOJ:;
        this.get_events().removeHandler('DatePickerSelectedEvent', value);
    },
    
    get_id: function SP_UI_DatePickerControl$get_id() {ULSPOJ:;
        return this.$1m_2;
    },
    set_id: function SP_UI_DatePickerControl$set_id(value) {ULSPOJ:;
        this.$1m_2 = value;
        return value;
    },
    
    get_value: function SP_UI_DatePickerControl$get_value() {ULSPOJ:;
        return (this.$B_2.value) ? this.$B_2.value.trim() : null;
    },
    set_value: function SP_UI_DatePickerControl$set_value(value) {ULSPOJ:;
        this.$B_2.value = value;
        return value;
    },
    
    get_focusableElements: function SP_UI_DatePickerControl$get_focusableElements() {ULSPOJ:;
        return [ this.$B_2, this.$G_2 ];
    },
    
    get_textBoxElement: function SP_UI_DatePickerControl$get_textBoxElement() {ULSPOJ:;
        return this.$B_2;
    },
    
    get_dropDownElement: function SP_UI_DatePickerControl$get_dropDownElement() {ULSPOJ:;
        return this.$1A_2;
    },
    
    get_imageAnchorElement: function SP_UI_DatePickerControl$get_imageAnchorElement() {ULSPOJ:;
        return this.$G_2;
    },
    
    get_isDatePickerDropped: function SP_UI_DatePickerControl$get_isDatePickerDropped() {ULSPOJ:;
        return this.$1T_2;
    },
    
    dispose: function SP_UI_DatePickerControl$dispose() {ULSPOJ:;
        if (this.$B_2) {
            $clearHandlers(this.$B_2);
            this.$B_2 = null;
        }
        if (this.$G_2) {
            $clearHandlers(this.$G_2);
            this.$G_2 = null;
        }
        if (this.$s_2) {
            this.$s_2 = null;
        }
        Sys.Component.prototype.dispose.call(this);
    },
    
    $2x_2: function SP_UI_DatePickerControl$$2x_2($p0) {
        $p0.style.width = '100%';
        $p0.style.height = '100%';
        var $v_0 = this.$8L_2();
        $p0.appendChild($v_0);
        var $v_1 = this.$87_2();
        $p0.appendChild($v_1);
        this.$1A_2 = document.createElement('div');
        this.$1A_2.style.height = '0px';
        this.$1A_2.style.width = '200px';
        this.$1A_2.id = this.$1m_2 + 'DatePickerImage';
        $p0.appendChild(this.$1A_2);
        this.$s_2 = document.createElement('iframe');
        this.$s_2.id = this.$1m_2 + 'DatePickerFrame';
        this.$s_2.frameBorder = '0';
        this.$s_2.scrolling = 'no';
        this.$s_2.style.width = '200px';
        this.$s_2.style.display = 'none';
        this.$s_2.style.position = 'absolute';
        this.$s_2.style.zIndex = 101;
        this.$1A_2.style.position = 'relative';
        this.$1A_2.appendChild(this.$s_2);
        var $v_2 = this.$$d_$9i_2;
        this.$B_2.onvaluesetfrompicker = $v_2;;
        $addHandler(this.$B_2, 'focus', this.$$d_$A2_2);
        $addHandler(this.$B_2, 'keydown', this.$$d_$A3_2);
        $addHandler(this.$G_2, 'click', this.$$d_$3w_2);
        var $$t_5 = this;
        $addHandler(this.$G_2, 'keydown', function($p1_0) {
            if (!$p1_0.altKey && !$p1_0.ctrlKey && !$p1_0.shiftKey) {
                if ($p1_0.keyCode === 13) {
                    $$t_5.$3w_2($p1_0);
                    $p1_0.stopPropagation();
                    $p1_0.preventDefault();
                }
            }
            else if (SP.UI.DatePickerControl.$6c($p1_0)) {
                if (!$$t_5.$1T_2) {
                    $$t_5.$3w_2($p1_0);
                }
                $p1_0.stopPropagation();
                $p1_0.preventDefault();
            }
        });
    },
    
    $8L_2: function SP_UI_DatePickerControl$$8L_2() {ULSPOJ:;
        this.$B_2 = document.createElement('input');
        this.$B_2.id = this.$1m_2;
        this.$B_2.style.width = '100%';
        this.$B_2.style.maxWidth = '150px';
        this.$B_2.className = 'ms-vb';
        this.$B_2.style.verticalAlign = 'middle';
        this.$B_2.type = 'text';
        return this.$B_2;
    },
    
    $87_2: function SP_UI_DatePickerControl$$87_2() {ULSPOJ:;
        var $v_0 = document.createElement('div');
        $v_0.style.display = 'inline-block';
        $v_0.style.height = '100%';
        this.$G_2 = document.createElement('a');
        this.$G_2.href = 'javascript:;';
        this.$G_2.title = WorkManagement.Res.TaskListSelectFromDatePickerTooltip;
        this.$G_2.style.verticalAlign = 'middle';
        var $v_1 = document.createElement('img');
        $v_1.style.border = '0';
        $v_1.style.display = 'block';
        this.$G_2.appendChild($v_1);
        $v_0.appendChild(this.$G_2);
        $v_1.alt = WorkManagement.Res.TaskListSelectFromDatePickerTooltip;
        $v_1.src = SP.UI.ConstantsImage.calendarImage;
        $v_0.style.width = '16px';
        $v_0.style.paddingLeft = '4px';
        $v_0.style.paddingRight = '4px';
        return $v_0;
    },
    
    $9i_2: function SP_UI_DatePickerControl$$9i_2() {ULSPOJ:;
        this.$1T_2 = false;
        SP.UI.EventUtilities.raiseEvent(Sys.EventArgs, this.get_events(), 'DatePickerClosedEvent', this, null);
        SP.UI.EventUtilities.raiseEvent(Sys.EventArgs, this.get_events(), 'DatePickerSelectedEvent', this, null);
    },
    
    $A2_2: function SP_UI_DatePickerControl$$A2_2($p0) {
        if (this.$1T_2) {
            this.$1T_2 = false;
            SP.UI.EventUtilities.raiseEvent(Sys.EventArgs, this.get_events(), 'DatePickerClosedEvent', this, null);
        }
    },
    
    $A3_2: function SP_UI_DatePickerControl$$A3_2($p0) {
        if (!$p0.shiftKey && !$p0.ctrlKey && !$p0.altKey) {
            if ($p0.keyCode === 127) {
                $p0.stopPropagation();
            }
        }
        else if (SP.UI.DatePickerControl.$6c($p0)) {
            if (!this.$1T_2) {
                this.$3w_2($p0);
            }
            $p0.stopPropagation();
            $p0.preventDefault();
        }
    },
    
    showAndGetFocus: function SP_UI_DatePickerControl$showAndGetFocus() {ULSPOJ:;
        this.set_visible(true);
        this.$G_2.focus();
    },
    
    disable: function SP_UI_DatePickerControl$disable() {ULSPOJ:;
        this.$B_2.disabled = true;
        this.$h_2 = false;
    },
    
    enable: function SP_UI_DatePickerControl$enable() {ULSPOJ:;
        this.$h_2 = true;
        this.$B_2.disabled = false;
    },
    
    $3w_2: function SP_UI_DatePickerControl$$3w_2($p0) {
        if (this.$h_2) {
            taskDatePickerOpen(this.$1m_2,this.$B_2.value,$p0.rawEvent);;
        }
        SP.UI.EventUtilities.raiseEvent(Sys.EventArgs, this.get_events(), 'DatePickerDroppedEvent', this, null);
        this.$1T_2 = true;
        $p0.stopPropagation();
    }
}


SP.UI.FriendlyDateControl = function SP_UI_FriendlyDateControl(date, includeTime, calendarType) {ULSPOJ:;
    SP.UI.FriendlyDateControl.initializeBase(this, [ document.createElement('span') ]);
    this.$1S_2 = date;
    this.$5i_2 = includeTime;
    this.$1i_2 = calendarType;
    this.update();
}
SP.UI.FriendlyDateControl.prototype = {
    $1S_2: null,
    $5i_2: false,
    $1i_2: 0,
    
    get_date: function SP_UI_FriendlyDateControl$get_date() {ULSPOJ:;
        return this.$1S_2;
    },
    set_date: function SP_UI_FriendlyDateControl$set_date(value) {ULSPOJ:;
        this.$1S_2 = value;
        this.update();
        return value;
    },
    
    update: function SP_UI_FriendlyDateControl$update() {ULSPOJ:;
        XUI.Html.SetText(this.get_element(), this.$7w_2());
    },
    
    $7w_2: function SP_UI_FriendlyDateControl$$7w_2() {ULSPOJ:;
        var $v_0 = '';
        if (this.$1S_2) {
            if (Object.getType(this.$1S_2) === Date) {
                if (!SP.UI.DateTimeUtilities.isDefaultDate(this.$1S_2)) {
                    $v_0 = SP.DateTimeUtil.SPRelativeDateTime.getRelativeDateTimeString(this.$1S_2, this.$5i_2, this.$1i_2, false);
                }
            }
            else {
                $v_0 = this.$1S_2.toString();
            }
        }
        return $v_0;
    }
}


SP.UI.HierarchyControl = function SP_UI_HierarchyControl(headerText, hierarchy) {ULSPOJ:;
    this.$$d_$9e_2 = Function.createDelegate(this, this.$9e_2);
    SP.UI.HierarchyControl.initializeBase(this, [ document.createElement('div') ]);
    this.$5g_2 = headerText;
    this.get_element().appendChild(this.$86_2(!!hierarchy && hierarchy.length > 1));
    this.get_element().appendChild(this.$7q_2(hierarchy));
}
SP.UI.HierarchyControl.prototype = {
    $5g_2: null,
    $1U_2: null,
    $j_2: null,
    $2V_2: false,
    
    $86_2: function SP_UI_HierarchyControl$$86_2($p0) {
        var $v_0 = document.createElement('h3');
        var $v_1 = document.createElement('span');
        $v_1.className = 'ms-soften';
        SP.UI.DomUtilities.setText($v_1, this.$5g_2);
        $v_0.appendChild($v_1);
        if ($p0) {
            this.$1U_2 = new SP.UI.ImageControl(SP.UI.ConstantsImage.maximizeHeaderImage);
            this.$1U_2.get_element().style.width = '5px';
            this.$1U_2.get_element().style.height = '3px';
            $v_0.appendChild(this.$1U_2.get_element());
            $addHandler($v_0, 'click', this.$$d_$9e_2);
        }
        return $v_0;
    },
    
    $7q_2: function SP_UI_HierarchyControl$$7q_2($p0) {
        var $v_0 = document.createElement('div');
        this.$j_2 = new Array($p0.length);
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            this.$j_2[$v_1] = new SP.UI.HierarchyControl.HierarchyRowControl($p0[$v_1]);
            $v_0.appendChild(this.$j_2[$v_1].get_element());
        }
        this.$6Y_2();
        return $v_0;
    },
    
    $9e_2: function SP_UI_HierarchyControl$$9e_2($p0) {
        if (this.$2V_2) {
            this.$6Y_2();
        }
        else {
            this.$B3_2();
        }
    },
    
    $B3_2: function SP_UI_HierarchyControl$$B3_2() {ULSPOJ:;
        for (var $v_0 = 0; $v_0 < this.$j_2.length; $v_0++) {
            this.$j_2[$v_0].set_visible(true);
            SP.UI.DomUtilities.setMarginLeftIntl(this.$j_2[$v_0].get_element(), ($v_0 * 10).toString() + 'px');
            if ($v_0 > 0) {
                this.$j_2[$v_0].showHierarchy();
            }
        }
        if (this.$1U_2) {
            this.$1U_2.set_src(SP.UI.ConstantsImage.minimizeHeaderImage);
        }
        this.$2V_2 = true;
    },
    
    $6Y_2: function SP_UI_HierarchyControl$$6Y_2() {ULSPOJ:;
        for (var $v_0 = 0; $v_0 < this.$j_2.length; $v_0++) {
            this.$j_2[$v_0].get_element().style.margin = '0px';
            this.$j_2[$v_0].hideHierarchy();
            if ($v_0 < this.$j_2.length - 1) {
                this.$j_2[$v_0].set_visible(false);
            }
            else {
                this.$j_2[$v_0].set_visible(true);
            }
        }
        if (this.$1U_2) {
            this.$1U_2.set_src(SP.UI.ConstantsImage.maximizeHeaderImage);
        }
        this.$2V_2 = false;
    }
}


SP.UI.HierarchyControl.HierarchyRowControl = function SP_UI_HierarchyControl_HierarchyRowControl($p0) {
    SP.UI.HierarchyControl.HierarchyRowControl.initializeBase(this, [ document.createElement('div') ]);
    this.$X_2 = document.createElement('span');
    this.$X_2.setAttribute('style', SP.UI.ConstantsImage.hierarchyLevelConnectorSpanStyle);
    this.$3O_2 = document.createElement('img');
    this.$3O_2.setAttribute('style', (SP.UI.DomUtilities.isLtr()) ? SP.UI.ConstantsImage.hierarchyLevelConnectorImageStyle : SP.UI.ConstantsImage.hierarchyLevelConnectorRtlImageStyle);
    this.$3O_2.src = SP.UI.TaskListConstants.get_sharePointCommonThemedImage();
    this.$X_2.appendChild(this.$3O_2);
    this.$X_2.style.display = 'inline-block';
    this.$X_2.style.marginTop = '-2px';
    this.get_element().appendChild(this.$X_2);
    var $v_0 = document.createElement('span');
    SP.UI.DomUtilities.setText($v_0, $p0);
    $v_0.style.marginLeft = $v_0.style.marginRight = '3px';
    this.get_element().appendChild($v_0);
}
SP.UI.HierarchyControl.HierarchyRowControl.prototype = {
    $3O_2: null,
    $X_2: null,
    
    showHierarchy: function SP_UI_HierarchyControl_HierarchyRowControl$showHierarchy() {ULSPOJ:;
        this.$X_2.style.display = 'inline-block';
    },
    
    hideHierarchy: function SP_UI_HierarchyControl_HierarchyRowControl$hideHierarchy() {ULSPOJ:;
        this.$X_2.style.display = 'none';
    }
}


SP.UI.ImageControl = function SP_UI_ImageControl(path) {ULSPOJ:;
    SP.UI.ImageControl.initializeBase(this, [ document.createElement('img') ]);
    this.$2x_2();
    this.set_src(path);
}
SP.UI.ImageControl.prototype = {
    
    get_src: function SP_UI_ImageControl$get_src() {ULSPOJ:;
        return this.get_imageElement().src;
    },
    set_src: function SP_UI_ImageControl$set_src(value) {ULSPOJ:;
        this.get_imageElement().src = value;
        return value;
    },
    
    get_opacity: function SP_UI_ImageControl$get_opacity() {ULSPOJ:;
        return XUI.Html.GetOpacity(this.get_imageElement());
    },
    set_opacity: function SP_UI_ImageControl$set_opacity(value) {ULSPOJ:;
        XUI.Html.SetOpacity(this.get_imageElement(), value);
        return value;
    },
    
    get_tooltip: function SP_UI_ImageControl$get_tooltip() {ULSPOJ:;
        return this.get_imageElement().title;
    },
    set_tooltip: function SP_UI_ImageControl$set_tooltip(value) {ULSPOJ:;
        this.get_imageElement().title = value;
        return value;
    },
    
    get_imageStyle: function SP_UI_ImageControl$get_imageStyle() {ULSPOJ:;
        return this.get_imageElement().getAttribute('style').toString();
    },
    set_imageStyle: function SP_UI_ImageControl$set_imageStyle(value) {ULSPOJ:;
        this.get_imageElement().setAttribute('style', value);
        return value;
    },
    
    get_imageElement: function SP_UI_ImageControl$get_imageElement() {ULSPOJ:;
        return this.get_element();
    },
    
    $2x_2: function SP_UI_ImageControl$$2x_2() {ULSPOJ:;
        XUI.Html.SetOpacity(this.get_imageElement(), 1);
    }
}


SP.UI.TextBoxEventArgs = function SP_UI_TextBoxEventArgs(textBoxValue) {ULSPOJ:;
    SP.UI.TextBoxEventArgs.initializeBase(this);
    this.$4r_1 = textBoxValue;
}
SP.UI.TextBoxEventArgs.prototype = {
    $4r_1: null,
    
    get_textBoxValue: function SP_UI_TextBoxEventArgs$get_textBoxValue() {ULSPOJ:;
        return this.$4r_1;
    },
    set_textBoxValue: function SP_UI_TextBoxEventArgs$set_textBoxValue(value) {ULSPOJ:;
        this.$4r_1 = value;
        return value;
    }
}


SP.UI.TextBox = function SP_UI_TextBox() {ULSPOJ:;
    SP.UI.TextBox.initializeBase(this, [ document.createElement('input') ]);
    this.$2x_2();
}
SP.UI.TextBox.$6i = function SP_UI_TextBox$$6i($p0) {
    return $p0.ctrlKey || $p0.shiftKey || $p0.altKey;
}
SP.UI.TextBox.$8Z = function SP_UI_TextBox$$8Z($p0) {
    $p0.className = SP.UI.TaskListConstants.cssTaskListTextBox;
    $p0.style.verticalAlign = 'middle';
}
SP.UI.TextBox.prototype = {
    $1y_2: null,
    $3m_2: true,
    $5s_2: null,
    
    add_textBoxChanged: function SP_UI_TextBox$add_textBoxChanged(value) {ULSPOJ:;
        this.get_events().addHandler('TextboxChangedEvent', value);
    },
    remove_textBoxChanged: function SP_UI_TextBox$remove_textBoxChanged(value) {ULSPOJ:;
        this.get_events().removeHandler('TextboxChangedEvent', value);
    },
    
    add_textBoxCommitted: function SP_UI_TextBox$add_textBoxCommitted(value) {ULSPOJ:;
        this.get_events().addHandler('TextboxCommitEvent', value);
    },
    remove_textBoxCommitted: function SP_UI_TextBox$remove_textBoxCommitted(value) {ULSPOJ:;
        this.get_events().removeHandler('TextboxCommitEvent', value);
    },
    
    add_textBoxBlur: function SP_UI_TextBox$add_textBoxBlur(value) {ULSPOJ:;
        this.get_events().addHandler('TextboxBlurEvent', value);
    },
    remove_textBoxBlur: function SP_UI_TextBox$remove_textBoxBlur(value) {ULSPOJ:;
        this.get_events().removeHandler('TextboxBlurEvent', value);
    },
    
    add_textBoxFocus: function SP_UI_TextBox$add_textBoxFocus(value) {ULSPOJ:;
        this.get_events().addHandler('TextboxFocusEvent', value);
    },
    remove_textBoxFocus: function SP_UI_TextBox$remove_textBoxFocus(value) {ULSPOJ:;
        this.get_events().removeHandler('TextboxFocusEvent', value);
    },
    
    get_value: function SP_UI_TextBox$get_value() {ULSPOJ:;
        if (this.$3m_2) {
            return this.$5s_2;
        }
        else {
            return this.get_$1z_2();
        }
    },
    set_value: function SP_UI_TextBox$set_value(value) {ULSPOJ:;
        if (this.$3m_2) {
            this.hideWatermark();
        }
        this.set_$1z_2(value);
        return value;
    },
    
    get_watermarkText: function SP_UI_TextBox$get_watermarkText() {ULSPOJ:;
        return this.$1y_2;
    },
    set_watermarkText: function SP_UI_TextBox$set_watermarkText(value) {ULSPOJ:;
        this.$1y_2 = value;
        if (this.$3m_2 && this.get_element()) {
            this.set_$1z_2(this.$1y_2);
        }
        return value;
    },
    
    get_$1z_2: function SP_UI_TextBox$get_$1z_2() {ULSPOJ:;
        return (this.get_element()).value;
    },
    set_$1z_2: function SP_UI_TextBox$set_$1z_2($p0) {
        (this.get_element()).value = $p0;
        return $p0;
    },
    
    showWatermark: function SP_UI_TextBox$showWatermark() {ULSPOJ:;
        this.$5s_2 = this.get_$1z_2();
        if (this.$1y_2) {
            this.set_$1z_2(this.$1y_2);
        }
        Sys.UI.DomElement.addCssClass(this.get_element(), SP.UI.TaskListConstants.cssInlineSearchWaterMark);
    },
    
    hideWatermark: function SP_UI_TextBox$hideWatermark() {ULSPOJ:;
        if (this.get_$1z_2() === this.$1y_2 && this.$1y_2) {
            this.set_$1z_2('');
        }
        Sys.UI.DomElement.removeCssClass(this.get_element(), SP.UI.TaskListConstants.cssInlineSearchWaterMark);
        this.$3m_2 = false;
    },
    
    blur: function SP_UI_TextBox$blur() {ULSPOJ:;
        try {
            this.get_element().blur();
        }
        catch ($$e_0) {
            SP.UI.DebugConsole.log('TextBox.Blur : Exception was thrown when attempting to blur.');
        }
    },
    
    focus: function SP_UI_TextBox$focus() {ULSPOJ:;
        try {
            this.get_element().focus();
        }
        catch ($$e_0) {
            SP.UI.DebugConsole.log('TextBox.Focus : Exception was thrown when attempting to focus.');
        }
    },
    
    hide: function SP_UI_TextBox$hide() {ULSPOJ:;
        SP.UI.DomUtilities.hide(this.get_element());
    },
    
    show: function SP_UI_TextBox$show() {ULSPOJ:;
        SP.UI.DomUtilities.show(this.get_element());
    },
    
    $2x_2: function SP_UI_TextBox$$2x_2() {ULSPOJ:;
        var $$t_5 = this;
        $addHandler(this.get_element(), 'focus', function($p1_0) {
            SP.UI.EventUtilities.raiseEvent(Sys.EventArgs, $$t_5.get_events(), 'TextboxFocusEvent', $$t_5, null);
        });
        var $$t_6 = this;
        $addHandler(this.get_element(), 'blur', function($p1_0) {
            SP.UI.EventUtilities.raiseEvent(Sys.EventArgs, $$t_6.get_events(), 'TextboxBlurEvent', $$t_6, null);
        });
        var $$t_7 = this;
        $addHandler(this.get_element(), 'keydown', function($p1_0) {
            var $v_0 = 'TextboxChangedEvent';
            if ($p1_0.keyCode === 13) {
                if (!SP.UI.TextBox.$6i($p1_0)) {
                    $v_0 = 'TextboxCommitEvent';
                }
                $p1_0.preventDefault();
            }
            else if ($p1_0.keyCode === 127 && !SP.UI.TextBox.$6i($p1_0)) {
                $p1_0.stopPropagation();
            }
            var $v_1 = new SP.UI.TextBoxEventArgs($$t_7.get_value());
            SP.UI.EventUtilities.raiseEvent(Sys.EventArgs, $$t_7.get_events(), $v_0, $$t_7, $v_1);
        });
        SP.UI.TextBox.$8Z(this.get_element());
        this.showWatermark();
    },
    
    dispose: function SP_UI_TextBox$dispose() {ULSPOJ:;
        Sys.Component.prototype.dispose.call(this);
    }
}


SP.UI.InlineEditManager = function SP_UI_InlineEditManager(columnManager) {ULSPOJ:;
    this.$$d_$9B_0 = Function.createDelegate(this, this.$9B_0);
    this.$$d_$9A_0 = Function.createDelegate(this, this.$9A_0);
    this.$6_0 = new Sys.EventHandlerList();
    this.$t_0 = columnManager;
}
SP.UI.InlineEditManager.prototype = {
    $V_0: null,
    $t_0: null,
    $g_0: null,
    
    get_editingRow: function SP_UI_InlineEditManager$get_editingRow() {ULSPOJ:;
        return this.$g_0;
    },
    
    get_isEditing: function SP_UI_InlineEditManager$get_isEditing() {ULSPOJ:;
        return !!this.$V_0;
    },
    
    add_lostFocus: function SP_UI_InlineEditManager$add_lostFocus(value) {ULSPOJ:;
        this.$6_0.addHandler('InlineEditLostFocus', value);
    },
    remove_lostFocus: function SP_UI_InlineEditManager$remove_lostFocus(value) {ULSPOJ:;
        this.$6_0.removeHandler('InlineEditLostFocus', value);
    },
    
    beginEditing: function SP_UI_InlineEditManager$beginEditing(editControl, row) {ULSPOJ:;
        if (this.get_isEditing()) {
            this.endEditing(false);
        }
        SP.UI.DragAndDropManager.get_instance().$h_0 = false;
        this.$V_0 = editControl;
        this.$V_0.set_inlineEditManager(this);
        this.$g_0 = row;
        this.$AF_0(editControl, row);
        $addHandler(editControl.get_element(), 'keydown', this.$$d_$9A_0);
        $addHandler(editControl.get_element(), 'click', this.$$d_$9B_0);
        editControl.onBeginEditing();
        SP.UI.DomUtilities.show(editControl.get_element());
    },
    
    endEditing: function SP_UI_InlineEditManager$endEditing(canceled) {ULSPOJ:;
        if (this.$V_0) {
            this.$V_0.onEndEditing(canceled);
            $removeHandler(this.$V_0.get_element(), 'keydown', this.$$d_$9A_0);
            $removeHandler(this.$V_0.get_element(), 'click', this.$$d_$9B_0);
            SP.UI.DragAndDropManager.get_instance().$h_0 = true;
            SP.UI.DomUtilities.hide(this.$V_0.get_element());
            this.$V_0.set_inlineEditManager(null);
            this.$V_0 = null;
            SP.UI.DomUtilities.focus(this.$g_0.get_focusElement());
            this.$g_0 = null;
        }
        else {
        }
    },
    
    $9B_0: function SP_UI_InlineEditManager$$9B_0($p0) {
        $p0.stopPropagation();
    },
    
    $9A_0: function SP_UI_InlineEditManager$$9A_0($p0) {
        if (!this.$V_0.handleKeyEvent($p0)) {
            if ($p0.keyCode === 27) {
                this.endEditing(true);
            }
            else if ($p0.keyCode === 40) {
                this.$3u_0(1, 0);
                $p0.stopPropagation();
                $p0.preventDefault();
            }
            else if ($p0.keyCode === 38) {
                this.$3u_0(0, 0);
                $p0.stopPropagation();
                $p0.preventDefault();
            }
            else if ($p0.keyCode === 9) {
                var $v_0 = this.$8o_0();
                if ($p0.shiftKey) {
                    $v_0--;
                }
                else {
                    $v_0++;
                }
                if ($v_0 < 0) {
                    this.$3u_0(0, 2);
                }
                else if ($v_0 >= this.$V_0.get_focusableElements().length) {
                    this.$3u_0(1, 1);
                }
                else {
                    SP.UI.DomUtilities.focus(this.$V_0.get_focusableElements()[$v_0]);
                }
                $p0.stopPropagation();
                $p0.preventDefault();
            }
        }
    },
    
    $3u_0: function SP_UI_InlineEditManager$$3u_0($p0, $p1) {
        var $v_0 = new SP.UI.LostFocusEventArgs();
        $v_0.$2b_1 = $p0;
        $v_0.$2m_1 = $p1;
        SP.UI.EventUtilities.raiseEvent(SP.UI.LostFocusEventArgs, this.$6_0, 'InlineEditLostFocus', this, $v_0);
    },
    
    $8o_0: function SP_UI_InlineEditManager$$8o_0() {ULSPOJ:;
        for (var $v_0 = 0; $v_0 < this.$V_0.get_focusableElements().length; $v_0++) {
            if (document.activeElement === this.$V_0.get_focusableElements()[$v_0]) {
                return $v_0;
            }
        }
        return -1;
    },
    
    $AF_0: function SP_UI_InlineEditManager$$AF_0($p0, $p1) {
        $p0.onResize(this.$t_0);
        var $v_0 = $p1.$1_0.offsetTop;
        $p0.get_element().style.top = $v_0.toString() + 'px';
    }
}


SP.UI.LostFocusEventArgs = function SP_UI_LostFocusEventArgs() {ULSPOJ:;
    SP.UI.LostFocusEventArgs.initializeBase(this);
}
SP.UI.LostFocusEventArgs.prototype = {
    $2b_1: 0,
    $2m_1: 0,
    
    get_moveDirection: function SP_UI_LostFocusEventArgs$get_moveDirection() {ULSPOJ:;
        return this.$2b_1;
    },
    set_moveDirection: function SP_UI_LostFocusEventArgs$set_moveDirection(value) {ULSPOJ:;
        this.$2b_1 = value;
        return value;
    },
    
    get_tabDirection: function SP_UI_LostFocusEventArgs$get_tabDirection() {ULSPOJ:;
        return this.$2m_1;
    },
    set_tabDirection: function SP_UI_LostFocusEventArgs$set_tabDirection(value) {ULSPOJ:;
        this.$2m_1 = value;
        return value;
    }
}


SP.UI.TaskInlineEditControl = function SP_UI_TaskInlineEditControl(serviceProvider) {ULSPOJ:;
    this.$$d_$9j_1 = Function.createDelegate(this, this.$9j_1);
    this.$$d_$B9_1 = Function.createDelegate(this, this.$B9_1);
    SP.UI.TaskInlineEditControl.initializeBase(this, [ serviceProvider ]);
    this.$61_1 = SP.UI.TaskInlineEditControl.$55;
    SP.UI.TaskInlineEditControl.$55++;
}
SP.UI.TaskInlineEditControl.$AU = function SP_UI_TaskInlineEditControl$$AU($p0) {
    $p0.$1_0.style.width = '';
    $p0.$1_0.style.height = '';
}
SP.UI.TaskInlineEditControl.$8z = function SP_UI_TaskInlineEditControl$$8z($p0) {
    if (!$p0) {
        return 0;
    }
    var $v_0 = parseInt($p0.style.right);
    var $v_1 = (isNaN($v_0)) ? 0 : $v_0;
    while ($p0.offsetParent) {
        $p0 = $p0.offsetParent;
        if (($p0.style.position === 'absolute' || $p0.style.position === 'relative') && !((browseris.firefox) && $p0.tagName.toUpperCase() === 'TD')) {
            break;
        }
        $v_0 = parseInt($p0.style.right);
        $v_1 += (isNaN($v_0)) ? 0 : $v_0;
    }
    return $v_1;
}
SP.UI.TaskInlineEditControl.prototype = {
    $C_1: null,
    $A_1: null,
    $F_1: null,
    $4q_1: 0,
    $3E_1: 0,
    $1x_1: 0,
    $R_1: 0,
    $4t_1: false,
    $4k_1: false,
    $4X_1: null,
    $4W_1: null,
    $7_1: null,
    $3Q_1: true,
    $4p_1: false,
    $2N_1: true,
    $61_1: 0,
    
    get_focusableElements: function SP_UI_TaskInlineEditControl$get_focusableElements() {ULSPOJ:;
        var $v_0 = new Array(0);
        Array.add($v_0, this.$C_1.$Z_1.get_element());
        Array.add($v_0, this.$A_1.$Z_1.get_element());
        Array.add($v_0, this.$F_1.$G_2);
        return $v_0;
    },
    
    get_animationEnabled: function SP_UI_TaskInlineEditControl$get_animationEnabled() {ULSPOJ:;
        return this.$2N_1;
    },
    set_animationEnabled: function SP_UI_TaskInlineEditControl$set_animationEnabled(value) {ULSPOJ:;
        this.$2N_1 = value;
        return value;
    },
    
    get_nameWidget: function SP_UI_TaskInlineEditControl$get_nameWidget() {ULSPOJ:;
        return this.$C_1;
    },
    
    get_dueDateWidget: function SP_UI_TaskInlineEditControl$get_dueDateWidget() {ULSPOJ:;
        return this.$A_1;
    },
    
    get_rowKey: function SP_UI_TaskInlineEditControl$get_rowKey() {ULSPOJ:;
        return 'EntryControl';
    },
    
    get_inlineEditManager: function SP_UI_TaskInlineEditControl$get_inlineEditManager() {ULSPOJ:;
        return this.$7_1;
    },
    set_inlineEditManager: function SP_UI_TaskInlineEditControl$set_inlineEditManager(value) {ULSPOJ:;
        this.$7_1 = value;
        return value;
    },
    
    renderRow: function SP_UI_TaskInlineEditControl$renderRow() {ULSPOJ:;
        SP.UI.RowControl.prototype.renderRow.call(this);
        this.$1_0.style.height = '0px';
        this.$1_0.style.display = 'none';
        if (this.$1_0.addEventListener) {
            this.$1_0.addEventListener('focus', this.$$d_$B9_1, true);
        }
        else {
            $addHandler(this.$1_0, 'focusin', this.$$d_$B9_1);
        }
        this.$8N_1();
        this.$7v_1();
    },
    
    setTaskNameActive: function SP_UI_TaskInlineEditControl$setTaskNameActive(isTaskNameActive) {ULSPOJ:;
        this.$3Q_1 = isTaskNameActive;
    },
    
    onResize: function SP_UI_TaskInlineEditControl$onResize(columnManager) {ULSPOJ:;
        SP.UI.RowControl.prototype.onResize.call(this, columnManager);
        this.$6l_1();
    },
    
    onBeginEditing: function SP_UI_TaskInlineEditControl$onBeginEditing() {ULSPOJ:;
        var $v_0 = this.$7_1.$g_0;
        if (SP.UI.IInlineEditableTaskRow.isInstanceOfType($v_0)) {
            var $v_1 = $v_0;
            this.$R_1 = $v_0.$1_0.offsetHeight - 4;
            if (SP.UI.TaskControl.isInstanceOfType($v_1)) {
                this.$9L_1();
            }
            else {
                this.$9M_1();
            }
            var $v_2 = this.$8f_1($v_1);
            var $v_3 = (SP.ScriptUtility.isNullOrEmptyString($v_1.get_task().get_name())) ? '' : $v_1.get_task().get_name();
            this.$4p_1 = true;
            if (!browseris.chrome7up) {
                this.$C_1.set_value($v_3);
                this.$A_1.set_value($v_2);
                this.$F_1.set_value($v_2);
            }
            this.$73_1();
            this.$8Y_1();
            var $$t_4 = this;
            SP.UI.TimeoutWrapper.setTimeout(function() {ULSPOJ:;
                $$t_4.$C_1.set_value($v_3);
                $$t_4.$A_1.set_value($v_2);
                $$t_4.$F_1.set_value($v_2);
                $$t_4.$4X_1 = $$t_4.$C_1.get_value();
                $$t_4.$4W_1 = $$t_4.$A_1.get_value();
            }, 0);
        }
        else {
        }
    },
    
    $8f_1: function SP_UI_TaskInlineEditControl$$8f_1($p0) {
        return SP.UI.DateTimeUtilities.createDateString($p0.get_task().get_dueDate());
    },
    
    $8Y_1: function SP_UI_TaskInlineEditControl$$8Y_1() {ULSPOJ:;
        if (this.$20_1()) {
            SP.UI.DomUtilities.focus(this.$C_1.get_focusableElement());
        }
        else {
            SP.UI.DomUtilities.focus(this.$A_1.get_focusableElement());
        }
    },
    
    onEndEditing: function SP_UI_TaskInlineEditControl$onEndEditing(canceled) {ULSPOJ:;
        if (!canceled) {
            this.$67_1();
        }
    },
    
    handleKeyEvent: function SP_UI_TaskInlineEditControl$handleKeyEvent(domEvent) {ULSPOJ:;
        if (this.$F_1.$1T_2) {
            return true;
        }
        if (domEvent.keyCode === 9) {
            if (SP.UI.IInlineEditableTaskRow.isInstanceOfType(this.$7_1.$g_0)) {
                var $v_0 = this.$7_1.$g_0;
                if (this.$4X_1 !== this.$C_1.get_value() || this.$4W_1 !== this.$A_1.get_value()) {
                    $v_0.updateLabels(this.$C_1.get_value(), this.$A_1.get_value());
                }
            }
        }
        if (!domEvent.ctrlKey && !domEvent.altKey && !domEvent.shiftKey && domEvent.keyCode === 13) {
            var $v_1 = this.$67_1();
            if ($v_1) {
                this.$C_1.set_value('');
                this.$A_1.set_value('');
                this.$F_1.set_value('');
                SP.UI.DomUtilities.focus(this.$C_1.get_focusableElement());
            }
            else {
                this.$7_1.endEditing(true);
            }
            return true;
        }
        else {
            return false;
        }
    },
    
    $8N_1: function SP_UI_TaskInlineEditControl$$8N_1() {ULSPOJ:;
        this.$C_1 = new SP.UI.TextWidget(this.$3_0);
        this.$6b_1(this.$C_1);
        this.$A_1 = new SP.UI.TextWidget(this.$3_0);
        this.$6b_1(this.$A_1);
        this.$A_1.$Z_1.get_element().style.maxWidth = SP.UI.TaskListConstants.dateFieldTextWidth.toString() + 'px';
    },
    
    $9M_1: function SP_UI_TaskInlineEditControl$$9M_1() {ULSPOJ:;
        this.$4t_1 = true;
        this.$4k_1 = true;
    },
    
    $9L_1: function SP_UI_TaskInlineEditControl$$9L_1() {ULSPOJ:;
        this.$4t_1 = false;
        this.$4k_1 = false;
    },
    
    $67_1: function SP_UI_TaskInlineEditControl$$67_1() {ULSPOJ:;
        if (SP.UI.IInlineEditableTaskRow.isInstanceOfType(this.$7_1.$g_0)) {
            var $v_0 = this.$7_1.$g_0;
            if (this.$4W_1 !== this.$A_1.get_value() || this.$4X_1 !== this.$C_1.get_value()) {
                return $v_0.commitValues(this.$C_1.get_value(), this.$A_1.get_value(), this.$2N_1);
            }
        }
        return false;
    },
    
    $6b_1: function SP_UI_TaskInlineEditControl$$6b_1($p0) {
        SP.UI.TaskInlineEditControl.$AU($p0);
        $p0.draw();
        $p0.$1_0.className = SP.UI.TaskListConstants.cssNewTaskEntryControl;
        $p0.$Z_1.get_element().className = SP.UI.TaskListConstants.cssTaskListTextBox;
        SP.UI.TableRenderUtilities.setBoundControl($p0.$1_0, $p0);
        this.$1_0.appendChild($p0.$1_0);
    },
    
    $AL_1: function SP_UI_TaskInlineEditControl$$AL_1($p0) {
        this.$3E_1 = 0;
        this.$1x_1 = 0;
        var $v_0 = false;
        for (var $$arr_2 = $p0.get_columns(), $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            if ($v_0) {
                break;
            }
            var $v_2 = $p0.getColumnWidth($v_1.$J_0);
            if ($v_1.$J_0 === 3) {
                $v_0 = true;
            }
            if (!$v_0) {
                this.$3E_1 += $v_2;
            }
            this.$1x_1 += $v_2;
        }
        if (this.$7_1 && SP.UI.TaskControl.isInstanceOfType(this.$7_1.$g_0)) {
            var $v_3 = this.$7_1.$g_0;
            this.$4q_1 = (SP.UI.DomUtilities.isLtr()) ? SPAnimationUtility.BasicAnimator.GetLeftOffset($v_3.get_taskNameElement()) : SP.UI.TaskInlineEditControl.$8z($v_3.get_taskNameElement());
        }
        else {
            this.$4q_1 = 0;
        }
    },
    
    $B9_1: function SP_UI_TaskInlineEditControl$$B9_1($p0) {
        if ($p0.target === this.$C_1.$Z_1.get_element()) {
            this.$3Q_1 = true;
        }
        else {
            this.$3Q_1 = false;
        }
        if (!this.$4p_1) {
            this.$73_1();
        }
        else {
            this.$4p_1 = false;
        }
    },
    
    $20_1: function SP_UI_TaskInlineEditControl$$20_1() {ULSPOJ:;
        return this.$3Q_1;
    },
    
    $73_1: function SP_UI_TaskInlineEditControl$$73_1() {ULSPOJ:;
        this.$1_0.style.display = '';
        this.$6l_1();
        if (!this.$20_1()) {
            XUI.Html.SetOpacity(this.$A_1.$1_0, 1);
            this.$F_1.get_element().style.visibility = '';
            this.$A_1.$1_0.className = SP.UI.TaskListConstants.cssEntryCellActive;
            this.$C_1.$1_0.className = SP.UI.TaskListConstants.cssEntryCellInActive;
            SP.UI.DomUtilities.setBorderWidthLeftIntl(this.$A_1.$1_0, '');
            SP.UI.DomUtilities.setBorderWidthRightIntl(this.$C_1.$1_0, '0px');
            this.$72_1(this.$C_1);
        }
        else {
            XUI.Html.SetOpacity(this.$C_1.$1_0, 1);
            this.$C_1.$1_0.className = SP.UI.TaskListConstants.cssEntryCellActive;
            this.$A_1.$1_0.className = SP.UI.TaskListConstants.cssEntryCellInActive;
            SP.UI.DomUtilities.setBorderWidthRightIntl(this.$C_1.$1_0, '');
            SP.UI.DomUtilities.setBorderWidthLeftIntl(this.$A_1.$1_0, '0px');
            this.$F_1.get_element().style.visibility = 'hidden';
            this.$72_1(this.$A_1);
        }
    },
    
    $72_1: function SP_UI_TaskInlineEditControl$$72_1($p0) {
        if (!this.$4k_1) {
            XUI.Html.SetOpacity($p0.$1_0, 0);
        }
        else {
            XUI.Html.SetOpacity($p0.$1_0, 1);
        }
    },
    
    $6l_1: function SP_UI_TaskInlineEditControl$$6l_1() {ULSPOJ:;
        if (!this.$C_1 || !this.$C_1.$1_0 || !this.$A_1 || !this.$A_1.$1_0) {
            return;
        }
        this.$AL_1(this.$3_0.get_columnManager());
        var $v_0 = (this.$4t_1) ? 0 : this.$4q_1;
        var $v_1 = $v_0;
        var $v_2 = this.$3E_1;
        var $v_3 = this.$1x_1 - this.$3E_1;
        var $v_4 = Math.abs($v_2 - $v_1);
        var $v_5 = (this.$20_1()) ? this.$R_1 : this.$R_1 + 2;
        var $v_6 = (!this.$20_1()) ? this.$R_1 : this.$R_1 + 2;
        var $v_7 = (this.$20_1()) ? $v_4 - 3 : $v_4;
        var $v_8 = (!this.$20_1()) ? $v_3 - 3 : $v_3;
        SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(this.$C_1.$1_0, 0, $v_1, $v_5, $v_7);
        SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(this.$A_1.$1_0, 0, $v_2, $v_6, $v_8);
        this.$AD_1($v_2, $v_3, $v_8);
        var $v_9 = (this.$20_1()) ? 1 : 0;
        this.$C_1.$1_0.style.zIndex = $v_9;
        this.$A_1.$1_0.style.zIndex = (1 - $v_9);
        this.$F_1.$G_2.style.zIndex = 2;
    },
    
    $7v_1: function SP_UI_TaskInlineEditControl$$7v_1() {ULSPOJ:;
        this.$F_1 = new SP.UI.DatePickerControl(SP.UI.TaskInlineEditControl.$6G + this.$61_1.toString());
        this.$F_1.$B_2.style.position = 'absolute';
        this.$F_1.$B_2.style.left = '-1000px';
        var $$t_1 = this;
        $addHandler(this.$F_1.$B_2, 'focus', function($p1_0) {
            SP.UI.DomUtilities.focus($$t_1.$A_1.get_focusableElement());
        });
        this.$F_1.$G_2.style.position = 'absolute';
        this.$F_1.add_datePickerSelected(this.$$d_$9j_1);
        this.$1_0.appendChild(this.$F_1.get_element());
    },
    
    $AD_1: function SP_UI_TaskInlineEditControl$$AD_1($p0, $p1, $p2) {
        this.$F_1.$G_2.style.top = Math.round(((this.$R_1 / 2 + 1) - this.$F_1.$G_2.offsetHeight / 2)).toString() + 'px';
        var $v_0 = (($p0 + $p1) - (SP.UI.TaskListConstants.datePickerPadding + this.$F_1.$G_2.offsetWidth)).toString() + 'px';
        if (SP.UI.DomUtilities.isLtr()) {
            this.$F_1.$G_2.style.left = $v_0;
        }
        else {
            this.$F_1.$G_2.style.right = $v_0;
        }
        SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(this.$F_1.$1A_2, this.$R_1, $p0, 1, $p2);
    },
    
    $9j_1: function SP_UI_TaskInlineEditControl$$9j_1($p0, $p1) {
        this.$A_1.set_value(this.$F_1.get_value());
    }
}


SP.UI.EmbeddedActionManager = function SP_UI_EmbeddedActionManager() {ULSPOJ:;
    this.$1M_0 = new (SP.UI.List.$$(SP.UI.EmbeddedActionManager.ActionElement))();
}
SP.UI.EmbeddedActionManager.$8a = function SP_UI_EmbeddedActionManager$$8a($p0, $p1) {
    var $v_0 = [];
    Array.add($v_0, $p0);
    for (var $v_1 = 0; $v_1 < $p1.length; $v_1++) {
        Array.add($v_0, $p1[$v_1]);
    }
    return String.format.apply(this, $v_0);
}
SP.UI.EmbeddedActionManager.$7Z = function SP_UI_EmbeddedActionManager$$7Z($p0) {
    return String.format('<a href=\'javascript:;\' class=\'ms-heroCommandLink\' id=\'{0}\'>', $p0);
}
SP.UI.EmbeddedActionManager.prototype = {
    $1l_0: false,
    
    get_eventsAttached: function SP_UI_EmbeddedActionManager$get_eventsAttached() {ULSPOJ:;
        return this.$1l_0;
    },
    
    attachEvents: function SP_UI_EmbeddedActionManager$attachEvents() {ULSPOJ:;
        if (this.$1l_0) {
            throw Error.invalidOperation('Can\'t call AttachEvents() multiple times.');
        }
        else {
            this.$7Y_0();
            this.$1l_0 = true;
        }
    },
    
    createDivElementWithActions: function SP_UI_EmbeddedActionManager$createDivElementWithActions(token, actions) {ULSPOJ:;
        if (this.$1l_0) {
            throw Error.invalidOperation('Can\'t call CreateActionElement if events are already attached');
        }
        else {
            var $v_0 = document.createElement('div');
            var $v_1 = new (SP.UI.List.$$(String))();
            for (var $v_2 = 0; $v_2 < actions.length; $v_2++) {
                var $v_3 = this.$8u_0();
                var $v_4 = new SP.UI.EmbeddedActionManager.ActionElement();
                $v_4.action = actions[$v_2];
                $v_4.id = $v_3;
                this.$1M_0.add($v_4);
                $v_1.add(SP.UI.EmbeddedActionManager.$7Z($v_3));
                $v_1.add('</a>');
            }
            $v_0.innerHTML = SP.UI.EmbeddedActionManager.$8a(token, $v_1.toArray());
            return $v_0;
        }
    },
    
    dispose: function SP_UI_EmbeddedActionManager$dispose() {ULSPOJ:;
        for (var $v_0 = 0; $v_0 < this.$1M_0.get_length(); $v_0++) {
            this.$1M_0.get_item($v_0).dispose();
        }
        this.$1M_0.clear();
        this.$1M_0 = null;
        this.$1l_0 = false;
    },
    
    $7Y_0: function SP_UI_EmbeddedActionManager$$7Y_0() {ULSPOJ:;
        for (var $v_0 = 0; $v_0 < this.$1M_0.get_length(); $v_0++) {
            this.$1M_0.get_item($v_0).attachActionToElement();
        }
    },
    
    $8u_0: function SP_UI_EmbeddedActionManager$$8u_0() {ULSPOJ:;
        SP.UI.EmbeddedActionManager.$31 = SP.UI.EmbeddedActionManager.$31 + 1;
        return 'EmbeddedAction' + SP.UI.EmbeddedActionManager.$31.toString();
    }
}


SP.UI.EmbeddedActionManager.ActionElement = function SP_UI_EmbeddedActionManager_ActionElement() {
}
SP.UI.EmbeddedActionManager.ActionElement.prototype = {
    id: null,
    action: null,
    
    attachActionToElement: function SP_UI_EmbeddedActionManager_ActionElement$attachActionToElement() {ULSPOJ:;
        var $v_0 = $get(this.id);
        var $$t_2 = this;
        $addHandler($v_0, 'click', function($p1_0) {
            $$t_2.action();
            $p1_0.stopPropagation();
        });
    },
    
    dispose: function SP_UI_EmbeddedActionManager_ActionElement$dispose() {ULSPOJ:;
        var $v_0 = $get(this.id);
        if ($v_0) {
            $clearHandlers($v_0);
        }
        $v_0 = null;
        this.action = null;
    }
}


SP.UI.TaskControlFactory = function SP_UI_TaskControlFactory(services) {ULSPOJ:;
    this.$N_0 = services;
}
SP.UI.TaskControlFactory.prototype = {
    $N_0: null,
    
    createRowControl: function SP_UI_TaskControlFactory$createRowControl(data) {ULSPOJ:;
        if (data.get_id() >= 0) {
            return new SP.UI.TaskControl(this.$N_0, data);
        }
        else {
            return new SP.UI.ClientCreatedTaskControl(this.$N_0, data);
        }
    }
}


SP.UI.TaskGroupFactory = function SP_UI_TaskGroupFactory(services) {ULSPOJ:;
    this.$N_0 = services;
}
SP.UI.TaskGroupFactory.prototype = {
    $2k_0: false,
    $N_0: null,
    $3j_0: false,
    
    get_showAddControl: function SP_UI_TaskGroupFactory$get_showAddControl() {ULSPOJ:;
        return this.$2k_0;
    },
    set_showAddControl: function SP_UI_TaskGroupFactory$set_showAddControl(value) {ULSPOJ:;
        this.$2k_0 = value;
        return value;
    },
    
    get_useLargeTextForNewRowControl: function SP_UI_TaskGroupFactory$get_useLargeTextForNewRowControl() {ULSPOJ:;
        return this.$3j_0;
    },
    set_useLargeTextForNewRowControl: function SP_UI_TaskGroupFactory$set_useLargeTextForNewRowControl(value) {ULSPOJ:;
        this.$3j_0 = value;
        return value;
    },
    
    createGroupingHeaderControl: function SP_UI_TaskGroupFactory$createGroupingHeaderControl(groupingData) {ULSPOJ:;
        var $v_0 = new SP.UI.TaskGroupingHeaderControl(this.$N_0, groupingData);
        $v_0.$32_1 = !this.$2k_0;
        return $v_0;
    },
    
    createGroupingFooterControl: function SP_UI_TaskGroupFactory$createGroupingFooterControl(groupingData) {ULSPOJ:;
        return new SP.UI.TaskGroupingFooterControl(this.$N_0, groupingData);
    },
    
    createEntryRowControl: function SP_UI_TaskGroupFactory$createEntryRowControl(groupingData) {ULSPOJ:;
        if (this.$2k_0) {
            var $v_0 = new SP.UI.NewTaskControl(groupingData, this.$N_0);
            $v_0.$3T_1 = groupingData.get_location();
            $v_0.$4u_1 = this.$3j_0;
            $v_0.$33_1 = !this.$N_0.get_IsGrouped();
            return $v_0;
        }
        else {
            return null;
        }
    }
}


SP.UI.FilterControl = function SP_UI_FilterControl() {ULSPOJ:;
    this.$$d_$9f_2 = Function.createDelegate(this, this.$9f_2);
    this.$$d_$59_2 = Function.createDelegate(this, this.$59_2);
    this.$$d_$9a_2 = Function.createDelegate(this, this.$9a_2);
    this.$$d_$9n_2 = Function.createDelegate(this, this.$9n_2);
    SP.UI.FilterControl.initializeBase(this, [ document.createElement('div') ]);
    this.$8S_2();
    this.$7V_2();
    this.$5F_2();
}
SP.UI.FilterControl.$8K = function SP_UI_FilterControl$$8K() {ULSPOJ:;
    return document.createElement('input');
}
SP.UI.FilterControl.$8E = function SP_UI_FilterControl$$8E() {ULSPOJ:;
    var $v_0 = document.createElement('div');
    $v_0.className = 'ms-InlineSearch-SearchProgress';
    var $v_1 = document.createElement('img');
    $v_1.src = SP.UI.ConstantsImage.loadingCircleImage16;
    $v_1.style.verticalAlign = 'middle';
    $v_0.appendChild($v_1);
    return $v_0;
}
SP.UI.FilterControl.$8D = function SP_UI_FilterControl$$8D() {ULSPOJ:;
    var $v_0 = new SP.UI.ImageControl(SP.UI.TaskListConstants.get_sharePointCommonThemedImage());
    $v_0.get_element().className = 'ms-inlineSearch-searchImg';
    return $v_0;
}
SP.UI.FilterControl.prototype = {
    $1t_2: null,
    $2h_2: null,
    $W_2: null,
    $I_2: null,
    $4l_2: true,
    $2g_2: false,
    $4D_2: false,
    $4U_2: false,
    
    dispose: function SP_UI_FilterControl$dispose() {ULSPOJ:;
        $clearHandlers(this.$W_2);
        $clearHandlers(this.$I_2.get_element());
        this.$I_2.dispose();
    },
    
    $8S_2: function SP_UI_FilterControl$$8S_2() {ULSPOJ:;
        this.$1t_2 = document.createElement('div');
        this.$W_2 = SP.UI.FilterControl.$8K();
        this.$W_2.title = WorkManagement.Res.TaskList_Filter_Description;
        this.$I_2 = SP.UI.FilterControl.$8D();
        this.$1t_2.appendChild(this.$W_2);
        var $v_0 = document.createElement('span');
        $v_0.className = 'ms-inlineSearch-searchImgSpanBase ms-inlineSearch-searchImgSpanStandard';
        $v_0.appendChild(this.$I_2.get_element());
        this.$1t_2.appendChild($v_0);
        this.$2h_2 = SP.UI.FilterControl.$8E();
        SP.UI.DomUtilities.hide(this.$2h_2);
        this.get_element().appendChild(this.$1t_2);
        this.get_element().appendChild(this.$2h_2);
        this.$1t_2.className = 'ms-InlineSearch-Outline-Baseline ms-InlineSearch-Outline-Empty';
        this.get_element().className = 'ms-displayInlineBlock ms-verticalAlignMiddle ms-awiop-Filter ms-InlineSearch-DivBaseline';
    },
    
    $7V_2: function SP_UI_FilterControl$$7V_2() {ULSPOJ:;
        $addHandler(this.$W_2, 'focus', this.$$d_$9n_2);
        $addHandler(this.$W_2, 'blur', this.$$d_$9a_2);
        $addHandler(this.$W_2, 'keydown', this.$$d_$59_2);
        var $$t_4 = this;
        $addHandler(this.get_element(), 'mouseover', function($p1_0) {
            $$t_4.$4U_2 = true;
            $$t_4.$3x_2();
        });
        var $$t_5 = this;
        $addHandler(this.get_element(), 'mouseout', function($p1_0) {
            $$t_5.$4U_2 = false;
            $$t_5.$3x_2();
        });
        var $$t_6 = this;
        $addHandler(this.$I_2.get_element(), 'mouseover', function($p1_0) {
            $$t_6.$5J_2(true);
        });
        var $$t_7 = this;
        $addHandler(this.$I_2.get_element(), 'mouseout', function($p1_0) {
            $$t_7.$5J_2(false);
        });
        $addHandler(this.$I_2.get_element(), 'click', this.$$d_$9f_2);
    },
    
    $9f_2: function SP_UI_FilterControl$$9f_2($p0) {
        if (this.$2g_2) {
            this.$3t_2(null);
            this.$5F_2();
        }
        else {
            this.$3t_2(this.$W_2.value);
        }
    },
    
    $59_2: function SP_UI_FilterControl$$59_2($p0) {
        if (!$p0.ctrlKey && !$p0.altKey && !$p0.shiftKey) {
            if ($p0.keyCode === 13) {
                this.$3t_2(this.$W_2.value);
            }
            else if ($p0.keyCode === 27) {
                this.$3t_2(null);
            }
        }
    },
    
    $9a_2: function SP_UI_FilterControl$$9a_2($p0) {
        this.$4D_2 = false;
        if ((!this.$W_2.value || !this.$W_2.value.length) && !this.$2g_2) {
            this.$5F_2();
        }
        this.$3x_2();
    },
    
    $9n_2: function SP_UI_FilterControl$$9n_2($p0) {
        this.$4D_2 = true;
        if (this.$4l_2) {
            this.$9H_2();
        }
        this.$3x_2();
    },
    
    $3x_2: function SP_UI_FilterControl$$3x_2() {ULSPOJ:;
        if (this.$4D_2 || this.$4U_2) {
            this.$B6_2();
        }
        else {
            this.$9G_2();
        }
    },
    
    $9G_2: function SP_UI_FilterControl$$9G_2() {ULSPOJ:;
        this.$1t_2.className = 'ms-InlineSearch-Outline-Baseline ms-InlineSearch-Outline-Empty';
    },
    
    $B6_2: function SP_UI_FilterControl$$B6_2() {ULSPOJ:;
        this.$1t_2.className = 'ms-InlineSearch-Outline-Baseline ms-InlineSearch-Outline-Focused';
    },
    
    $5F_2: function SP_UI_FilterControl$$5F_2() {ULSPOJ:;
        this.$W_2.value = WorkManagement.Res.TaskList_Filter_Watermark;
        this.$W_2.className = 'ms-InlineSearch-SearchBox-Baseline ms-InlineSearch-SearchBox-EmptyUnfocused ms-awiop-InlineSearchBox';
        this.$4l_2 = true;
    },
    
    $9H_2: function SP_UI_FilterControl$$9H_2() {ULSPOJ:;
        this.$W_2.value = '';
        this.$W_2.className = 'ms-InlineSearch-SearchBox-Baseline ms-awiop-InlineSearchBox';
        this.$4l_2 = false;
    },
    
    $5J_2: function SP_UI_FilterControl$$5J_2($p0) {
        if (this.$2g_2) {
            if ($p0) {
                this.$I_2.get_element().className = 'ms-inlineSearch-cancelImgHover';
            }
            else {
                this.$I_2.get_element().className = 'ms-inlineSearch-cancelImg';
            }
        }
        else {
            if ($p0) {
                this.$I_2.get_element().className = 'ms-inlineSearch-searchImgHover';
            }
            else {
                this.$I_2.get_element().className = 'ms-inlineSearch-searchImg';
            }
        }
        if ($p0) {
            Sys.UI.DomElement.addCssClass(this.$I_2.get_element(), 'ms-inlineSearch-imgHoverHighlight');
        }
    },
    
    $3t_2: function SP_UI_FilterControl$$3t_2($p0) {
        if (!$p0 || !$p0.length) {
            $p0 = null;
            this.$2g_2 = false;
        }
        else {
            this.$2g_2 = true;
        }
        SP.UI.AnimationUtilities.fadeIn(this.$2h_2, null);
        var $$t_2 = this;
        SP.UI.ApiManager.get_instance().getFirstApiOfType(SP.WorkManagement.OM.MyTasksDashboard, 2).SetSearchString($p0, function($p1_0) {
            $$t_2.$9x_2();
        });
        this.$5J_2(false);
    },
    
    $9x_2: function SP_UI_FilterControl$$9x_2() {ULSPOJ:;
        SP.UI.AnimationUtilities.fadeOut(this.$2h_2, null);
    }
}


SP.UI.ListNotificationControl = function SP_UI_ListNotificationControl() {ULSPOJ:;
    this.$$d_$9g_2 = Function.createDelegate(this, this.$9g_2);
    this.$Q_2 = new SP.UI.EmbeddedActionManager();
    SP.UI.ListNotificationControl.initializeBase(this, [ document.createElement('div') ]);
}
SP.UI.ListNotificationControl.prototype = {
    $1_2: null,
    $2s_2: null,
    $45_2: null,
    $3B_2: false,
    $4M_2: false,
    
    get_displayText: function SP_UI_ListNotificationControl$get_displayText() {ULSPOJ:;
        return this.$45_2;
    },
    set_displayText: function SP_UI_ListNotificationControl$set_displayText(value) {ULSPOJ:;
        this.$45_2 = value;
        SP.UI.DomUtilities.setText(this.$1_2, this.$45_2);
        return value;
    },
    
    get_visible: function SP_UI_ListNotificationControl$get_visible() {ULSPOJ:;
        return !this.$4M_2 && Sys.UI.Control.prototype.get_visible.call(this);
    },
    set_visible: function SP_UI_ListNotificationControl$set_visible(value) {ULSPOJ:;
        Sys.UI.Control.prototype.set_visible.call(this, value);
        return value;
    },
    
    get_displayViewAllTasksFooter: function SP_UI_ListNotificationControl$get_displayViewAllTasksFooter() {ULSPOJ:;
        return this.$3B_2;
    },
    set_displayViewAllTasksFooter: function SP_UI_ListNotificationControl$set_displayViewAllTasksFooter(value) {ULSPOJ:;
        if (this.$3B_2 !== value) {
            this.$3B_2 = value;
            if (this.$3B_2) {
                SP.UI.DomUtilities.show(this.$2s_2);
            }
            else {
                SP.UI.DomUtilities.hide(this.$2s_2);
            }
        }
        return value;
    },
    
    show: function SP_UI_ListNotificationControl$show() {ULSPOJ:;
        this.set_visible(true);
        if (!this.$Q_2.$1l_0) {
            this.$2x_2();
        }
        XUI.Html.SetOpacity(this.get_element(), 0);
        SP.UI.AnimationUtilities.fadeIn(this.get_element(), null);
    },
    
    hide: function SP_UI_ListNotificationControl$hide() {ULSPOJ:;
        this.$4M_2 = true;
        var $$t_0 = this;
        SP.UI.AnimationUtilities.fadeOut(this.get_element(), function() {ULSPOJ:;
            $$t_0.$4M_2 = false;
            $$t_0.set_visible(false);
        });
    },
    
    dispose: function SP_UI_ListNotificationControl$dispose() {ULSPOJ:;
        if (this.$Q_2) {
            this.$Q_2.dispose();
            this.$Q_2 = null;
        }
        Sys.Component.prototype.dispose.call(this);
    },
    
    $2x_2: function SP_UI_ListNotificationControl$$2x_2() {ULSPOJ:;
        this.get_element().className = 'ms-awiop-Notification';
        this.$8A_2();
        this.$8M_2();
        this.$Q_2.attachEvents();
    },
    
    $8M_2: function SP_UI_ListNotificationControl$$8M_2() {ULSPOJ:;
        this.$2s_2 = this.$Q_2.createDivElementWithActions(WorkManagement.Res.TaskList_Msg_ViewAllTasks, [ this.$$d_$9g_2 ]);
        this.$2s_2.className = 'ms-textLarge ms-link ms-soften';
        this.get_element().appendChild(this.$2s_2);
    },
    
    $8A_2: function SP_UI_ListNotificationControl$$8A_2() {ULSPOJ:;
        this.$1_2 = document.createElement('div');
        this.$1_2.className = 'ms-attractMode';
        this.get_element().appendChild(this.$1_2);
    },
    
    $9g_2: function SP_UI_ListNotificationControl$$9g_2() {ULSPOJ:;
        SP.UI.ApiManager.get_instance().getFirstApiOfType(SP.WorkManagement.OM.MyTasksDashboard, 2).SwitchView(0, null);
    }
}


SP.UI.LocalLocationGroup = function SP_UI_LocalLocationGroup() {
}
SP.UI.LocalLocationGroup.$85 = function SP_UI_LocalLocationGroup$$85($p0) {
    var $v_0 = new (SP.UI.List.$$(SP.UI.LocalLocationGroup))();
    var $v_1 = null;
    for (var $v_2 = 0; $v_2 < $p0.length; $v_2++) {
        var $v_3 = $p0[$v_2];
        if (!$v_1 || $v_1.$m_0.get_id() !== $v_3.get_locationId()) {
            $v_1 = new SP.UI.LocalLocationGroup();
            $v_1.$3v_0($v_3.get_locationId());
            $v_1.$16_0 = [ $v_3 ];
            $v_0.add($v_1);
        }
        else {
            Array.add($v_1.$16_0, $v_3);
        }
    }
    return $v_0.toArray();
}
SP.UI.LocalLocationGroup.prototype = {
    $m_0: null,
    $16_0: null,
    
    $3v_0: function SP_UI_LocalLocationGroup$$3v_0($p0) {
        this.$m_0 = SP.UI.SharedComponentManager.$5.$1C_0.$53_0($p0);
        if (!this.$m_0) {
            this.$m_0 = SP.WorkManagement.OM.Location.newObject(SP.ClientContext.get_current());
            this.$m_0.set_id($p0);
            this.$m_0.set_name('');
            this.$m_0.set_color('');
        }
    },
    
    $Ay_0: function SP_UI_LocalLocationGroup$$Ay_0($p0) {
        this.$16_0 = $p0;
    }
}


SP.UI.NewTaskControl = function SP_UI_NewTaskControl(groupInfo, serviceProvider) {ULSPOJ:;
    SP.UI.NewTaskControl.initializeBase(this, [ serviceProvider ]);
    this.$3K_1 = groupInfo;
}
SP.UI.NewTaskControl.prototype = {
    $4u_1: false,
    $3T_1: null,
    $U_1: null,
    $3K_1: null,
    $26_1: null,
    $33_1: false,
    
    get_task: function SP_UI_NewTaskControl$get_task() {ULSPOJ:;
        if (!this.$26_1) {
            this.$26_1 = SP.WorkManagement.OM.Task.newObject(SP.UI.CsomUtilities.createDefaultClientRuntimeContext());
            this.$26_1.set_name('');
            this.$26_1.set_dueDate(SP.UI.DateTimeUtilities.castToDateWithoutValidation(''));
            this.$26_1.set_locationId(this.$3K_1.get_location().get_id());
        }
        return this.$26_1;
    },
    
    get_addExtraSpace: function SP_UI_NewTaskControl$get_addExtraSpace() {ULSPOJ:;
        return this.$33_1;
    },
    set_addExtraSpace: function SP_UI_NewTaskControl$set_addExtraSpace(value) {ULSPOJ:;
        this.$33_1 = value;
        return value;
    },
    
    get_locationId: function SP_UI_NewTaskControl$get_locationId() {ULSPOJ:;
        return this.$3K_1.get_location().get_id();
    },
    
    get_focusElement: function SP_UI_NewTaskControl$get_focusElement() {ULSPOJ:;
        return this.$U_1;
    },
    
    commitValues: function SP_UI_NewTaskControl$commitValues(taskName, dueDate, shouldTryToAnimate) {ULSPOJ:;
        this.$4z_1(taskName, dueDate, shouldTryToAnimate);
        return true;
    },
    
    updateLabels: function SP_UI_NewTaskControl$updateLabels(taskName, dueDate) {
    },
    
    get_isDraggable: function SP_UI_NewTaskControl$get_isDraggable() {ULSPOJ:;
        return false;
    },
    
    get_location: function SP_UI_NewTaskControl$get_location() {ULSPOJ:;
        return this.$3T_1;
    },
    set_location: function SP_UI_NewTaskControl$set_location(value) {ULSPOJ:;
        this.$3T_1 = value;
        return value;
    },
    
    get_useLargeText: function SP_UI_NewTaskControl$get_useLargeText() {ULSPOJ:;
        return this.$4u_1;
    },
    set_useLargeText: function SP_UI_NewTaskControl$set_useLargeText(value) {ULSPOJ:;
        this.$4u_1 = value;
        return value;
    },
    
    get_rowKey: function SP_UI_NewTaskControl$get_rowKey() {ULSPOJ:;
        return SP.UI.Table.$$(SP.WorkManagement.OM.Task).$BQ(this.$3K_1);
    },
    
    renderRow: function SP_UI_NewTaskControl$renderRow() {ULSPOJ:;
        this.$7o_1();
        var $v_0 = document.createElement('div');
        $v_0.className = 'ms-awiop-HeroWrapper';
        $v_0.appendChild(this.$U_1);
        this.$1_0.appendChild($v_0);
        Sys.UI.DomElement.addCssClass(this.$1_0, 'ms-awiop-HeroRow');
        if (this.$33_1) {
            Sys.UI.DomElement.addCssClass(this.$1_0, 'ms-awiop-extraMargin');
        }
        SP.UI.RowControl.prototype.renderRow.call(this);
    },
    
    $7o_1: function SP_UI_NewTaskControl$$7o_1() {ULSPOJ:;
        var $v_0 = document.createElement('span');
        XUI.Html.SetText($v_0, WorkManagement.Res.TaskList_Hero_AddNew);
        var $v_1 = document.createElement('span');
        $v_1.className = 'ms-list-addnew-imgSpan16';
        var $v_2 = document.createElement('img');
        $v_2.src = SP.UI.TaskListConstants.get_sharePointCommonThemedImage();
        $v_2.className = 'ms-list-addnew-img16';
        $v_1.appendChild($v_2);
        this.$U_1 = document.createElement('a');
        this.$U_1.className = 'ms-heroCommandLink ms-textLarge';
        this.$U_1.href = 'javascript:;';
        this.$U_1.appendChild($v_1);
        this.$U_1.appendChild($v_0);
    },
    
    handleFocusKeyDown: function SP_UI_NewTaskControl$handleFocusKeyDown(key, shiftPressed, ctrlPressed, altPressed) {ULSPOJ:;
        if (key === 13) {
            this.openNewTask();
            return true;
        }
        else {
            return SP.UI.RowControl.prototype.handleFocusKeyDown.call(this, key, shiftPressed, ctrlPressed, altPressed);
        }
    },
    
    onClick: function SP_UI_NewTaskControl$onClick(targetElement) {ULSPOJ:;
        this.openNewTask();
        return true;
    },
    
    openNewTask: function SP_UI_NewTaskControl$openNewTask() {ULSPOJ:;
        if (!this.$3_0.get_taskListTable().$7_5.get_isEditing() || this.$3_0.get_taskListTable().$7_5.$g_0 !== this) {
            this.$3_0.get_taskListTable().openInlineEditing(this, true);
        }
    },
    
    $4z_1: function SP_UI_NewTaskControl$$4z_1($p0, $p1, $p2) {
        if (!$p0) {
            return;
        }
        var $v_0 = SP.UI.LocationUtilities.getIdFromLocation(this.$3T_1);
        var $v_1 = this.$8J_1($p0, $p1, $v_0);
        var $v_2 = new SP.UI.ClientCreatedTaskControl(this.$3_0, $v_1);
        $v_2.render();
        this.$3_0.get_taskListTable().insertRowAfter($v_2, this, $p2);
    },
    
    $8J_1: function SP_UI_NewTaskControl$$8J_1($p0, $p1, $p2) {
        var $v_0 = SP.WorkManagement.OM.Task.newObject(SP.ClientContext.get_current());
        $v_0.set_id(SP.UI.NewTaskControl.$3s);
        SP.UI.NewTaskControl.$3s = SP.UI.NewTaskControl.$3s - 1;
        $v_0.set_name($p0);
        if (!SP.ScriptUtility.isNullOrEmptyString($p1)) {
            $v_0.set_dueDate(SP.UI.DateTimeUtilities.castToDateWithoutValidation($p1));
        }
        else {
            $v_0.set_dueDate(SP.UI.TaskListConstants.defaultDate);
        }
        $v_0.set_isCompleted(false);
        $v_0.set_description(null);
        $v_0.set_pinAge((this.$3_0.get_TaskListType() === 1) ? 1 : 0);
        $v_0.set_isPersonal(true);
        $v_0.set_locationId($p2);
        $v_0.set_editUrl('EditTask.aspx');
        return $v_0;
    }
}


SP.UI.PivotControlCallbackManager = function SP_UI_PivotControlCallbackManager() {
}
SP.UI.PivotControlCallbackManager.$5B = function SP_UI_PivotControlCallbackManager$$5B($p0) {
    SP.UI.PivotControlCallbackManager.$3p++;
    SP.UI.PivotControlCallbackManager.$47[SP.UI.PivotControlCallbackManager.$3p.toString()] = $p0;
    return 'SP.UI.PivotControlCallbackManager.HandleCallback(' + SP.UI.PivotControlCallbackManager.$3p.toString() + ');';
}
SP.UI.PivotControlCallbackManager.HandleCallback = function SP_UI_PivotControlCallbackManager$HandleCallback(id) {ULSPOJ:;
    (SP.UI.PivotControlCallbackManager.$47[id.toString()])();
}


SP.UI.QueryResultProcessor = function SP_UI_QueryResultProcessor() {
}
SP.UI.QueryResultProcessor.prototype = {
    
    $8e_0: function SP_UI_QueryResultProcessor$$8e_0($p0) {
        return $p0.length;
    },
    
    createNullLocationGroup: function SP_UI_QueryResultProcessor$createNullLocationGroup() {ULSPOJ:;
        var $v_0 = new SP.UI.LocalLocationGroup();
        $v_0.$3v_0(SP.UI.TaskListConstants.noValue);
        return $v_0;
    }
}


SP.UI.FlatQueryResultProcessor = function SP_UI_FlatQueryResultProcessor($p0) {
    SP.UI.FlatQueryResultProcessor.initializeBase(this);
    this.$5b_1 = $p0;
}
SP.UI.FlatQueryResultProcessor.prototype = {
    $5b_1: false,
    
    $6S_0: function SP_UI_FlatQueryResultProcessor$$6S_0($p0) {
        return [ this.$89_1($p0, this.$5b_1) ];
    },
    
    $89_1: function SP_UI_FlatQueryResultProcessor$$89_1($p0, $p1) {
        var $v_0 = this.createNullLocationGroup();
        $v_0.$Ay_0($p0);
        if ($p1) {
            $v_0.$3v_0(SP.UI.SharedComponentManager.$5.get_locations()[0]);
        }
        return $v_0;
    }
}


SP.UI.GroupedQueryResultProcessor = function SP_UI_GroupedQueryResultProcessor() {ULSPOJ:;
    SP.UI.GroupedQueryResultProcessor.initializeBase(this);
}
SP.UI.GroupedQueryResultProcessor.prototype = {
    
    $6S_0: function SP_UI_GroupedQueryResultProcessor$$6S_0($p0) {
        return this.$88_1($p0);
    },
    
    $88_1: function SP_UI_GroupedQueryResultProcessor$$88_1($p0) {
        var $v_0 = SP.UI.LocalLocationGroup.$85($p0);
        var $v_1 = new Array(0);
        if (!this.$7j_1($v_0) && this.$7U_1()) {
            Array.add($v_1, this.createNullLocationGroup());
        }
        if ($v_0) {
            Array.addRange($v_1, $v_0);
        }
        return $v_1;
    },
    
    $7U_1: function SP_UI_GroupedQueryResultProcessor$$7U_1() {ULSPOJ:;
        if (!SP.UI.SharedComponentManager.$5.get_locations() || !SP.UI.SharedComponentManager.$5.get_locations().length || Array.contains(SP.UI.SharedComponentManager.$5.get_locations(), SP.UI.TaskListConstants.noValue)) {
            return true;
        }
        return false;
    },
    
    $7j_1: function SP_UI_GroupedQueryResultProcessor$$7j_1($p0) {
        if (!$p0) {
            return false;
        }
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            if (SP.UI.LocationUtilities.isPersonalLocation($p0[$v_0].$m_0)) {
                return true;
            }
        }
        return false;
    }
}


SP.UI.RefreshEventArgs = function SP_UI_RefreshEventArgs() {ULSPOJ:;
    SP.UI.RefreshEventArgs.initializeBase(this);
}
SP.UI.RefreshEventArgs.prototype = {
    $1E_1: 0,
    $4Z_1: null,
    
    get_aggregatorRefreshState: function SP_UI_RefreshEventArgs$get_aggregatorRefreshState() {ULSPOJ:;
        return this.$1E_1;
    },
    set_aggregatorRefreshState: function SP_UI_RefreshEventArgs$set_aggregatorRefreshState(value) {ULSPOJ:;
        this.$1E_1 = value;
        return value;
    },
    
    get_providerStatuses: function SP_UI_RefreshEventArgs$get_providerStatuses() {ULSPOJ:;
        return this.$4Z_1;
    },
    set_providerStatuses: function SP_UI_RefreshEventArgs$set_providerStatuses(value) {ULSPOJ:;
        this.$4Z_1 = value;
        return value;
    }
}


SP.UI.RefreshHistoryControl = function SP_UI_RefreshHistoryControl(refreshManager, lastUpdatedDate) {ULSPOJ:;
    this.$$d_$9t_2 = Function.createDelegate(this, this.$9t_2);
    SP.UI.RefreshHistoryControl.initializeBase(this, [ document.createElement('div') ]);
    this.get_element().className = 'ms-metadata';
    var $v_0 = document.createElement('span');
    $v_0.className = 'ms-verticalAlignMiddle';
    if (!SP.ScriptUtility.isNullOrEmptyString(lastUpdatedDate)) {
        XUI.Html.SetText($v_0, String.format(WorkManagement.Res.TaskListRefreshStatus, SP.UI.DateTimeUtilities.formatDate(SP.UI.SerializationUtilities.deserializeDate(lastUpdatedDate), 'g')));
    }
    else {
        XUI.Html.SetText($v_0, WorkManagement.Res.TaskListRefreshFirstTime);
    }
    this.get_element().appendChild($v_0);
    this.$8F_2();
    refreshManager.add_refreshComplete(this.$$d_$9t_2);
}
SP.UI.RefreshHistoryControl.$7s = function SP_UI_RefreshHistoryControl$$7s($p0) {
    var $v_0 = new CalloutOptions();
    $v_0.ID = 'callout' + SP.UI.RefreshHistoryControl.$4x.toString();
    SP.UI.RefreshHistoryControl.$4x += 1;
    $v_0.launchPoint = $p0;
    return $v_0;
}
SP.UI.RefreshHistoryControl.$81 = function SP_UI_RefreshHistoryControl$$81($p0) {
    var $v_0 = document.createElement('div');
    XUI.Html.SetText($v_0, WorkManagement.Res.TaskListRefreshFailure);
    $p0.appendChild($v_0);
}
SP.UI.RefreshHistoryControl.$AB = function SP_UI_RefreshHistoryControl$$AB($p0, $p1) {
    if ($p0) {
        var $v_0 = document.createElement('ul');
        $p1.appendChild($v_0);
        for (var $v_1 = 0; $v_1 < $p0.get_count(); $v_1++) {
            var $v_2 = SP.UI.RefreshHistoryControl.$8C($p0.get_item($v_1));
            $v_0.appendChild($v_2);
        }
    }
}
SP.UI.RefreshHistoryControl.$AA = function SP_UI_RefreshHistoryControl$$AA($p0) {
    var $v_0 = document.createElement('div');
    XUI.Html.SetText($v_0, WorkManagement.Res.TaskListRefreshFailureGeneric);
    $v_0.className = 'ms-awiop-calloutSection';
    $p0.appendChild($v_0);
}
SP.UI.RefreshHistoryControl.$80 = function SP_UI_RefreshHistoryControl$$80($p0) {
    var $v_0 = document.createElement('div');
    XUI.Html.SetText($v_0, WorkManagement.Res.TaskListRefreshFailureFooter);
    $p0.appendChild($v_0);
}
SP.UI.RefreshHistoryControl.$8C = function SP_UI_RefreshHistoryControl$$8C($p0) {
    var $v_0 = document.createElement('li');
    var $v_1 = document.createElement('div');
    XUI.Html.SetText($v_1, SP.UI.RefreshHistoryControl.$8x($p0));
    $v_0.appendChild($v_1);
    var $v_2 = document.createElement('div');
    XUI.Html.SetText($v_2, SP.UI.RefreshHistoryControl.$8d($p0));
    $v_0.appendChild($v_2);
    return $v_0;
}
SP.UI.RefreshHistoryControl.$8x = function SP_UI_RefreshHistoryControl$$8x($p0) {
    if (SP.UI.Utilities.isNullOrNoValue($p0.get_lastSuccessfulRefresh())) {
        return $p0.get_localizedName();
    }
    else {
        return String.format(WorkManagement.Res.TaskListRefreshFailureProviderInfo, $p0.get_localizedName(), SP.UI.DateTimeUtilities.formatDate($p0.get_lastSuccessfulRefresh(), 'g'));
    }
}
SP.UI.RefreshHistoryControl.$8d = function SP_UI_RefreshHistoryControl$$8d($p0) {
    return String.format(WorkManagement.Res.TaskListRefreshFailureProviderDetailedInfo, $p0.get_correlationId());
}
SP.UI.RefreshHistoryControl.prototype = {
    $2l_2: null,
    $4K_2: false,
    
    $9t_2: function SP_UI_RefreshHistoryControl$$9t_2($p0, $p1) {
        this.$2l_2.style.visibility = 'hidden';
        if ($p1.$1E_1 !== 2) {
            this.$4K_2 = $p1.$1E_1 === 4;
            var $v_0 = new SP.UI.TaskDataProvider();
            var $v_1 = $v_0.getRefreshHealthInfo();
            var $$t_6 = this;
            $v_0.executeQuery(function($p1_0, $p1_1) {
                if ($p1_0) {
                    if ($v_1.get_newTasks() > 0) {
                        SP.UI.NotificationComponent.showNewTaskAlert($v_1.get_newTasks());
                    }
                    $$t_6.$BD_2($v_1);
                    if ($p1.$1E_1 === 3) {
                        SP.UI.ApiManager.get_instance().getFirstApiOfType(SP.WorkManagement.OM.MyTasksDashboard, 2).RefreshAllLists(null);
                    }
                }
                else {
                    XUI.Html.SetText($$t_6.get_element(), WorkManagement.Res.TaskListRefreshFailureGeneric);
                }
            });
        }
    },
    
    $8F_2: function SP_UI_RefreshHistoryControl$$8F_2() {ULSPOJ:;
        this.$2l_2 = document.createElement('img');
        this.$2l_2.src = SP.UI.ConstantsImage.loadingCircleImage16;
        this.$2l_2.className = 'ms-verticalAlignMiddle ms-awiop-Spinner';
        this.get_element().appendChild(this.$2l_2);
    },
    
    $BD_2: function SP_UI_RefreshHistoryControl$$BD_2($p0) {
        if (SP.UI.Utilities.isNullOrNoValue($p0.get_latestRefreshTime())) {
            XUI.Html.SetText(this.get_element(), WorkManagement.Res.TaskListRefreshFailureGeneric);
        }
        else {
            XUI.Html.SetText(this.get_element(), String.format(WorkManagement.Res.TaskListRefreshStatus, SP.UI.DateTimeUtilities.formatDate($p0.get_latestRefreshTime(), 'g')));
            if (!$p0.get_succeeded() || this.$4K_2) {
                var $v_0 = document.createElement('img');
                $v_0.src = SP.UI.ConstantsImage.refreshErrorImage;
                this.get_element().appendChild($v_0);
                var $$t_2 = this;
                EnsureScriptFunc(SP.UI.TaskListConstants.calloutJavaScript, 'CalloutManager', function() {ULSPOJ:;
                    $$t_2.$7z_2($v_0, $p0);
                });
            }
        }
    },
    
    $7z_2: function SP_UI_RefreshHistoryControl$$7z_2($p0, $p1) {
        var $v_0 = SP.UI.RefreshHistoryControl.$7s($p0);
        var $v_1 = document.createElement('div');
        if (this.$4K_2) {
            SP.UI.RefreshHistoryControl.$AA($v_1);
        }
        else {
            SP.UI.RefreshHistoryControl.$81($v_1);
            SP.UI.RefreshHistoryControl.$AB($p1.get_providerErrors(), $v_1);
        }
        SP.UI.RefreshHistoryControl.$80($v_1);
        $v_0.content = XUI.Html.GetOuterHTML($v_1);
        CalloutManager.createNew($v_0);
    }
}


SP.UI.RefreshManager = function SP_UI_RefreshManager() {ULSPOJ:;
    this.$$d_$A9_1 = Function.createDelegate(this, this.$A9_1);
    this.$1R_1 = -1;
    this.$1I_1 = -1;
    SP.UI.RefreshManager.initializeBase(this);
    this.$19_1 = new SP.UI.TaskDataProvider();
}
SP.UI.RefreshManager.$82 = function SP_UI_RefreshManager$$82($p0) {
    var $v_0 = new SP.UI.RefreshEventArgs();
    if (!$p0) {
        $v_0.$1E_1 = 2;
    }
    else {
        $v_0.$1E_1 = $p0.get_aggregatorRefreshState();
        $v_0.$4Z_1 = $p0.get_providerStatuses();
    }
    return $v_0;
}
SP.UI.RefreshManager.$9E = function SP_UI_RefreshManager$$9E($p0) {
    var $v_0 = false;
    try {
        var $v_1 = $p0.get_currentJobId();
        $v_0 = $v_1 !== SP.UI.TaskListConstants.noValue;
    }
    catch ($$e_3) {
    }
    return $v_0;
}
SP.UI.RefreshManager.prototype = {
    $19_1: null,
    $3X_1: false,
    $3e_1: false,
    
    add_refreshComplete: function SP_UI_RefreshManager$add_refreshComplete(value) {ULSPOJ:;
        this.get_events().addHandler('RefreshCompleteEvent', value);
    },
    remove_refreshComplete: function SP_UI_RefreshManager$remove_refreshComplete(value) {ULSPOJ:;
        this.get_events().removeHandler('RefreshCompleteEvent', value);
    },
    
    get_isRefreshPending: function SP_UI_RefreshManager$get_isRefreshPending() {ULSPOJ:;
        return this.$1R_1 >= 0;
    },
    
    beginRefresh: function SP_UI_RefreshManager$beginRefresh() {ULSPOJ:;
        if (!this.$3X_1) {
            var $v_0 = this.$19_1.beginRefreshCache();
            var $$t_3 = this;
            this.$19_1.executeQuery(function($p1_0, $p1_1) {
                if (!$v_0 || $v_0.get_serverObjectIsNull()) {
                    $$t_3.$6X_1('Unable to create refresh job');
                }
                else {
                    if ($p1_0 && !$v_0.get_encounteredError()) {
                        if ($v_0.get_createdJob()) {
                            SP.UI.DebugConsole.log('RefreshManager.BeginRefresh: Created refresh job: ' + $v_0.get_currentJobId().toString());
                        }
                        else {
                            SP.UI.DebugConsole.log('RefreshManager.BeginRefresh: Existing refresh job: ' + $v_0.get_currentJobId().toString());
                        }
                        if (SP.UI.RefreshManager.$9E($v_0)) {
                            $$t_3.$1R_1 = $v_0.get_currentJobId();
                            $$t_3.$BM_1();
                        }
                        else {
                            SP.UI.DebugConsole.log('Null job id was returned. This indicates that an ignored refresh happened.');
                            $$t_3.$2v_1(true, null);
                        }
                    }
                    else {
                        $$t_3.$6X_1($p1_1[0]);
                    }
                }
            });
        }
        else {
            SP.UI.DebugConsole.log('RefreshManager.BeginRefresh: Tried to begin refresh while another refresh is pending.');
        }
    },
    
    dispose: function SP_UI_RefreshManager$dispose() {ULSPOJ:;
        if (this.$1I_1 >= 0) {
            window.clearInterval(this.$1I_1);
            this.$1I_1 = -1;
        }
        Sys.Component.prototype.dispose.call(this);
    },
    
    $BM_1: function SP_UI_RefreshManager$$BM_1() {ULSPOJ:;
        this.$3X_1 = true;
        if (this.$1I_1 < 0) {
            this.$1I_1 = window.setInterval(this.$$d_$A9_1, 2500);
        }
    },
    
    $A9_1: function SP_UI_RefreshManager$$A9_1() {ULSPOJ:;
        if (!this.$3e_1) {
            var $v_0 = this.$19_1.getRefreshStatus(this.$1R_1);
            SP.UI.DebugConsole.log('RefreshManager.PingServer - pinging....');
            var $$t_3 = this;
            this.$19_1.executeQuery(function($p1_0, $p1_1) {
                if ($p1_0) {
                    if ($v_0.get_aggregatorRefreshState() === 3) {
                        SP.UI.DebugConsole.log('RefreshManager.PingServer - refresh succeeded for job ID: ' + $$t_3.$1R_1.toString());
                        $$t_3.$2v_1(true, $v_0);
                    }
                    else if ($v_0.get_aggregatorRefreshState() === 2) {
                        SP.UI.DebugConsole.log('RefreshManager.PingServer - refresh ignored for job ID: ' + $$t_3.$1R_1.toString());
                        $$t_3.$2v_1(true, $v_0);
                    }
                    else if ($v_0.get_aggregatorRefreshState() === 4) {
                        SP.UI.DebugConsole.log('RefreshManager.PingServer - refresh failed for job ID: ' + $$t_3.$1R_1.toString());
                        $$t_3.$2v_1(true, $v_0);
                    }
                    else {
                        SP.UI.DebugConsole.log('RefreshManager.PingServer - pending.');
                        $$t_3.$3e_1 = false;
                    }
                }
                else {
                    SP.UI.DebugConsole.log('RefreshManager.PingServer - GetRefreshStatus failed with error: ' + $p1_1[0]);
                    $$t_3.$2v_1(false, null);
                }
            });
            this.$3e_1 = true;
        }
        else {
            SP.UI.DebugConsole.log('RefreshManager.PingServer - skipping pinging because there is still a server request.');
        }
    },
    
    $2v_1: function SP_UI_RefreshManager$$2v_1($p0, $p1) {
        this.$3e_1 = false;
        if (this.$1I_1 !== -1) {
            window.clearInterval(this.$1I_1);
            this.$1I_1 = -1;
        }
        this.$3X_1 = false;
        this.$1R_1 = -1;
        if ($p0) {
            SP.UI.EventUtilities.raiseEvent(Sys.EventArgs, this.get_events(), 'RefreshCompleteEvent', this, SP.UI.RefreshManager.$82($p1));
        }
        else {
            this.$6y_1();
        }
    },
    
    $6X_1: function SP_UI_RefreshManager$$6X_1($p0) {
        this.$3X_1 = false;
        this.$6y_1();
    },
    
    $6y_1: function SP_UI_RefreshManager$$6y_1() {ULSPOJ:;
        var $v_0 = new SP.UI.RefreshEventArgs();
        $v_0.$1E_1 = 4;
        SP.UI.EventUtilities.raiseEvent(Sys.EventArgs, this.get_events(), 'RefreshCompleteEvent', this, $v_0);
    }
}


SP.UI.SingleTaskRefreshManager = function SP_UI_SingleTaskRefreshManager(taskId) {ULSPOJ:;
    this.$6_0 = new Sys.EventHandlerList();
    this.$1d_0 = taskId;
}
SP.UI.SingleTaskRefreshManager.prototype = {
    $1d_0: 0,
    
    add_refreshComplete: function SP_UI_SingleTaskRefreshManager$add_refreshComplete(value) {ULSPOJ:;
        this.$6_0.addHandler('RefreshCompleteEvent', value);
    },
    remove_refreshComplete: function SP_UI_SingleTaskRefreshManager$remove_refreshComplete(value) {ULSPOJ:;
        this.$6_0.removeHandler('RefreshCompleteEvent', value);
    },
    
    beginRefresh: function SP_UI_SingleTaskRefreshManager$beginRefresh() {ULSPOJ:;
        SP.UI.DebugConsole.log('RefreshManager.BeginRefresh(' + this.$1d_0.toString() + ')');
        var $v_0 = new SP.UI.TaskDataProvider();
        var $v_1 = $v_0.refreshSingleTask(this.$1d_0);
        var $$t_4 = this;
        $v_0.executeQuery(function($p1_0, $p1_1) {
            if ($v_1 && $p1_0) {
                SP.UI.DebugConsole.log('RefreshManager.BeginRefresh(' + $$t_4.$1d_0.toString() + ') succeeded.');
            }
            else {
                SP.UI.DebugConsole.log('RefreshManager.BeginRefresh(' + $$t_4.$1d_0.toString() + ') failed.');
            }
            $$t_4.$8X_0($v_1);
        });
    },
    
    $8X_0: function SP_UI_SingleTaskRefreshManager$$8X_0($p0) {
        var $v_0 = new SP.UI.RefreshEventArgs();
        $v_0.$1E_1 = $p0.get_refreshState();
        SP.UI.EventUtilities.raiseEvent(Sys.EventArgs, this.$6_0, 'RefreshCompleteEvent', this, $v_0);
    }
}


SP.UI.TaskListRefreshControl = function SP_UI_TaskListRefreshControl(currentDate, refreshSingleTaskId) {ULSPOJ:;
    SP.UI.TaskListRefreshControl.initializeBase(this, [ document.createElement('div') ]);
    var $$t_3 = this;
    SP.UI.CsomUtilities.ensureSharePointScriptAndClientContextAreLoaded(function() {ULSPOJ:;
        if (refreshSingleTaskId) {
            $$t_3.$3W_2 = new SP.UI.SingleTaskRefreshManager(refreshSingleTaskId);
        }
        else {
            $$t_3.$3W_2 = new SP.UI.RefreshManager();
        }
        $$t_3.$3W_2.beginRefresh();
        $$t_3.get_element().className = 'ms-awiop-refresh';
        var $v_0 = new SP.UI.RefreshHistoryControl($$t_3.$3W_2, currentDate);
        Sys.UI.DomElement.addCssClass($v_0.get_element(), 'ms-awiop-RefreshHistoryLabel');
        $$t_3.get_element().appendChild($v_0.get_element());
    });
}
SP.UI.TaskListRefreshControl.prototype = {
    $3W_2: null
}


SP.UI.AnimationFactory = function SP_UI_AnimationFactory() {
}
SP.UI.AnimationFactory.createPostAnimationFromStrategy = function SP_UI_AnimationFactory$createPostAnimationFromStrategy(strategy) {ULSPOJ:;
    if (!SP.UI.AnimationFactory.get_isAnimationEnabled()) {
        return null;
    }
    else if (strategy === 2) {
        return new SP.UI.FadeInAnimationContext();
    }
    else {
        return null;
    }
}
SP.UI.AnimationFactory.get_isAnimationEnabled = function SP_UI_AnimationFactory$get_isAnimationEnabled() {ULSPOJ:;
    return SP.UI.AnimationUtilities.isAnimationEnabled();
}


SP.UI.FadeInAnimationContext = function SP_UI_FadeInAnimationContext() {
}
SP.UI.FadeInAnimationContext.prototype = {
    $43_0: 100,
    
    animate: function SP_UI_FadeInAnimationContext$animate(region) {ULSPOJ:;
        for (var $v_0 = 0; $v_0 < region.$9_0.length; $v_0++) {
            if (SP.UI.TaskControl.isInstanceOfType(region.$9_0[$v_0])) {
                XUI.Html.SetOpacity(region.$9_0[$v_0].$1_0, 0);
                this.$8W_0(region.$9_0[$v_0].$1_0, this.$43_0);
                this.$43_0 = this.$43_0 + 15;
            }
            else {
                XUI.Html.SetOpacity(region.$9_0[$v_0].$1_0, 1);
            }
        }
    },
    
    $8W_0: function SP_UI_FadeInAnimationContext$$8W_0($p0, $p1) {
        var $v_0 = new SP.UI.AnimationAsyncJob(15, $p1);
        var $v_1 = new SPAnimation.State();
        $v_1.SetAttribute(5, 1);
        $v_0.addAnimation($p0, $v_1);
        $v_0.execute(null);
    }
}


SP.UI.HideAnimation = function SP_UI_HideAnimation() {
}
SP.UI.HideAnimation.prototype = {
    
    animate: function SP_UI_HideAnimation$animate(elementToHide, containerElement, fnAnimationComplete) {ULSPOJ:;
        XUI.Html.SetOpacity(elementToHide, 1);
        var $$t_6 = this;
        SPAnimationUtility.BasicAnimator.FadeOut(elementToHide, function() {ULSPOJ:;
            var $v_0 = elementToHide.offsetHeight;
            var $v_1 = elementToHide.offsetWidth;
            elementToHide.style.display = 'none';
            var $v_2 = document.createElement('div');
            $v_2.style.height = $v_0.toString() + 'px';
            $v_2.style.width = $v_1.toString() + 'px';
            containerElement.insertBefore($v_2, elementToHide);
            SPAnimationUtility.BasicAnimator.QuickResize($v_2, 0, $v_1, function() {ULSPOJ:;
                containerElement.removeChild($v_2);
                if (fnAnimationComplete) {
                    fnAnimationComplete();
                }
            }, null);
        }, null);
    }
}


SP.UI.InsertAnimation = function SP_UI_InsertAnimation() {
}
SP.UI.InsertAnimation.prototype = {
    
    animate: function SP_UI_InsertAnimation$animate(elementToInsert, elementToInsertAfter, containerElement, fnAnimationComplete) {ULSPOJ:;
        elementToInsert.style.position = 'absolute';
        elementToInsert.style.visibility = 'hidden';
        if (elementToInsertAfter.nextSibling) {
            containerElement.insertBefore(elementToInsert, elementToInsertAfter.nextSibling);
        }
        else {
            containerElement.appendChild(elementToInsert);
        }
        var $v_0 = document.createElement('div');
        $v_0.style.width = '0px';
        $v_0.style.height = '0px';
        containerElement.insertBefore($v_0, elementToInsert);
        var $$t_5 = this;
        window.setTimeout(function() {ULSPOJ:;
            SPAnimationUtility.BasicAnimator.QuickResize($v_0, elementToInsert.offsetHeight, elementToInsert.offsetWidth, function() {ULSPOJ:;
                XUI.Html.SetOpacity(elementToInsert, 0);
                elementToInsert.style.position = '';
                elementToInsert.style.visibility = '';
                containerElement.removeChild($v_0);
                SPAnimationUtility.BasicAnimator.FadeIn(elementToInsert, null, fnAnimationComplete);
            }, null);
        }, 0);
    }
}


SP.UI.ColumnInfo = function SP_UI_ColumnInfo(localizedName, dataValue) {ULSPOJ:;
    this.$1W_0 = localizedName;
    this.$J_0 = dataValue;
}
SP.UI.ColumnInfo.prototype = {
    $1W_0: null,
    $J_0: null,
    
    get_localizedName: function SP_UI_ColumnInfo$get_localizedName() {ULSPOJ:;
        return this.$1W_0;
    },
    set_localizedName: function SP_UI_ColumnInfo$set_localizedName(value) {ULSPOJ:;
        this.$1W_0 = value;
        return value;
    },
    
    get_dataValue: function SP_UI_ColumnInfo$get_dataValue() {ULSPOJ:;
        return this.$J_0;
    },
    set_dataValue: function SP_UI_ColumnInfo$set_dataValue(value) {ULSPOJ:;
        this.$J_0 = value;
        return value;
    }
}


SP.UI.FixedWidthColumnInfo = function SP_UI_FixedWidthColumnInfo(fixedPixelWidth, localizedName, dataValue) {ULSPOJ:;
    SP.UI.FixedWidthColumnInfo.initializeBase(this, [ localizedName, dataValue ]);
    this.$3H_1 = fixedPixelWidth;
}
SP.UI.FixedWidthColumnInfo.prototype = {
    $3H_1: 0,
    
    get_fixedPixelWidth: function SP_UI_FixedWidthColumnInfo$get_fixedPixelWidth() {ULSPOJ:;
        return this.$3H_1;
    }
}


SP.UI.VariableWidthColumnInfo = function SP_UI_VariableWidthColumnInfo(minWidth, maxWidth, desiredPercent, localizedName, dataValue) {ULSPOJ:;
    SP.UI.VariableWidthColumnInfo.initializeBase(this, [ localizedName, dataValue ]);
    this.$1p_1 = minWidth;
    this.$2a_1 = maxWidth;
    this.$3A_1 = desiredPercent;
}
SP.UI.VariableWidthColumnInfo.prototype = {
    $1p_1: 0,
    $2a_1: 0,
    $3A_1: 0,
    
    get_minWidth: function SP_UI_VariableWidthColumnInfo$get_minWidth() {ULSPOJ:;
        return this.$1p_1;
    },
    
    get_maxWidth: function SP_UI_VariableWidthColumnInfo$get_maxWidth() {ULSPOJ:;
        return this.$2a_1;
    },
    
    get_desiredPercent: function SP_UI_VariableWidthColumnInfo$get_desiredPercent() {ULSPOJ:;
        return this.$3A_1;
    }
}


SP.UI.ColumnManager = function SP_UI_ColumnManager() {ULSPOJ:;
    this.$4v_0 = new (SP.UI.List.$$(SP.UI.VariableWidthColumnInfo))();
    this.$39_0 = {};
    this.$40_0 = new (SP.UI.List.$$(SP.UI.ColumnInfo))();
}
SP.UI.ColumnManager.$95 = function SP_UI_ColumnManager$$95($p0) {
    var $v_0 = 0;
    for (var $v_1 = 0; $v_1 < $p0.get_length(); $v_1++) {
        $v_0 += $p0.get_item($v_1).$3A_1;
    }
    return $v_0;
}
SP.UI.ColumnManager.prototype = {
    $3I_0: 0,
    $1x_0: 0,
    
    get_columns: function SP_UI_ColumnManager$get_columns() {ULSPOJ:;
        return this.$40_0.toArray();
    },
    
    get_totalWidth: function SP_UI_ColumnManager$get_totalWidth() {ULSPOJ:;
        return this.$1x_0;
    },
    
    addColumn: function SP_UI_ColumnManager$addColumn(ci) {ULSPOJ:;
        this.$40_0.add(ci);
        if (SP.UI.FixedWidthColumnInfo.isInstanceOfType(ci)) {
            this.$7I_0(ci);
        }
        else if (SP.UI.VariableWidthColumnInfo.isInstanceOfType(ci)) {
            this.$7M_0(ci);
        }
        else {
        }
    },
    
    distributeAvailableWidth: function SP_UI_ColumnManager$distributeAvailableWidth(width) {ULSPOJ:;
        SP.UI.DebugConsole.log('ColumnManager.DistributeAvailableWidth: ' + width.toString());
        var $v_0 = this.$4v_0.clone();
        var $v_1 = width - this.$3I_0;
        this.$1x_0 = this.$3I_0;
        while ($v_0.get_length() > 0) {
            var $v_2 = $v_0.get_item(0);
            var $v_3 = SP.UI.ColumnManager.$95($v_0);
            var $v_4 = $v_2.$3A_1 / $v_3;
            var $v_5 = ($v_4 * $v_1);
            if ($v_2.$2a_1 > $v_2.$1p_1 && $v_5 > $v_2.$2a_1 - $v_2.$1p_1) {
                $v_5 = $v_2.$2a_1 - $v_2.$1p_1;
            }
            $v_1 -= $v_5;
            this.$39_0[$v_2.$J_0.toString()] = $v_2.$1p_1 + $v_5;
            SP.UI.DebugConsole.log('-[' + $v_2.$J_0.toString() + ']: ' + $v_5.toString());
            this.$1x_0 += $v_5;
            $v_0.remove($v_2);
        }
    },
    
    getColumnWidth: function SP_UI_ColumnManager$getColumnWidth(dataValue) {ULSPOJ:;
        var $v_0 = this.$39_0[dataValue.toString()];
        return ($v_0 > 0) ? $v_0 : 0;
    },
    
    getColumnWidthInPixels: function SP_UI_ColumnManager$getColumnWidthInPixels(dataValue) {ULSPOJ:;
        return this.getColumnWidth(dataValue).toString() + 'px';
    },
    
    $7I_0: function SP_UI_ColumnManager$$7I_0($p0) {
        this.$39_0[$p0.$J_0.toString()] = $p0.$3H_1;
        this.$3I_0 += $p0.$3H_1;
    },
    
    $7M_0: function SP_UI_ColumnManager$$7M_0($p0) {
        this.$4v_0.add($p0);
        this.$3I_0 += $p0.$1p_1;
    }
}


SP.UI.DragAndDropTable = function SP_UI_DragAndDropTable(parentElement, headerControl, groupingControlFactory, rowControlFactory, columnManager, notifyObject) {ULSPOJ:;
    this.$v_4 = -1;
    SP.UI.DragAndDropTable.$$(this.$$gta['SP.UI.DragAndDropTable']['T']).initializeBase(this, [ parentElement, headerControl, groupingControlFactory, rowControlFactory, columnManager, notifyObject ]);
    SP.UI.DragAndDropManager.get_instance().registerElementForDrag(this.get_bodyElement(), this);
    SP.UI.DragAndDropManager.get_instance().registerDropTarget(this);
    this.$14_4 = document.createElement('div');
    this.$14_4.className = 'ms-awiop-DragCursor';
    this.$6a_4();
}
SP.UI.DragAndDropTable.$$ = function SP_UI_DragAndDropTable$$$(T) {ULSPOJ:;
    var $$cn = 'DragAndDropTable' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!SP.UI[$$cn]) {
        var $$ccr = SP.UI[$$cn] = function() {ULSPOJ:;
            (this.$$gta = this.$$gta || {})['SP.UI.DragAndDropTable'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            SP.UI.DragAndDropTable.apply(this, $v_0);
        };
        $$ccr.registerClass('SP.UI.' + $$cn, SP.UI.SelectableTable.$$(T), SP.UI.IDraggable, SP.UI.IDropTarget);
        var $$dict_5 = SP.UI.DragAndDropTable.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
        $$ccr.$8U = 'DropEventHandler';
        $$ccr.$8R = 400;
    }
    return SP.UI[$$cn];
}
SP.UI.DragAndDropTable.prototype = {
    $14_4: null,
    $2S_4: null,
    $4j_4: true,
    
    get_currentControlOver: function SP_UI_DragAndDropTable$get_currentControlOver() {ULSPOJ:;
        if (this.$v_4 === -1) {
            return null;
        }
        else {
            return this.get_rowData().get_item(this.$v_4);
        }
    },
    
    get_currentGroupOver: function SP_UI_DragAndDropTable$get_currentGroupOver() {ULSPOJ:;
        return this.$2S_4;
    },
    
    get_showDragLine: function SP_UI_DragAndDropTable$get_showDragLine() {ULSPOJ:;
        return this.$4j_4;
    },
    set_showDragLine: function SP_UI_DragAndDropTable$set_showDragLine(value) {ULSPOJ:;
        this.$4j_4 = value;
        return value;
    },
    
    add_dragComplete: function SP_UI_DragAndDropTable$add_dragComplete(value) {ULSPOJ:;
        this.get_events().addHandler('DropEventHandler', value);
    },
    remove_dragComplete: function SP_UI_DragAndDropTable$remove_dragComplete(value) {ULSPOJ:;
        this.get_events().removeHandler('DropEventHandler', value);
    },
    
    startDrag: function SP_UI_DragAndDropTable$startDrag(mouseLocation, targetElement) {ULSPOJ:;
        this.$2S_4 = null;
        var $v_0 = this.getRowControlFromElement(targetElement);
        if ($v_0) {
            if (!this.get_selectionManager().isSelected($v_0.get_rowKey())) {
                this.get_selectionManager().clearSelection();
                this.get_selectionManager().select($v_0.get_rowKey());
            }
        }
        return new SP.UI.DragInfo(this.$6V_4(), this.get_parentContainerElement());
    },
    
    endDrag: function SP_UI_DragAndDropTable$endDrag() {ULSPOJ:;
        SP.UI.DebugConsole.log('EndDrag');
    },
    
    dragOver: function SP_UI_DragAndDropTable$dragOver(mouseLocation, dragInfo, source, overElement) {ULSPOJ:;
        var $v_0 = true;
        if (source !== this) {
            $v_0 = false;
        }
        else {
            this.$BI_4(overElement);
            this.$BC_4();
            $v_0 = this.onDragOver(mouseLocation, dragInfo, source);
        }
        if ($v_0) {
            if (this.$4j_4) {
                this.$6r_4(this.get_currentControlOver());
            }
        }
        else {
            this.$6r_4(null);
        }
    },
    
    onDragOver: function SP_UI_DragAndDropTable$onDragOver(mouseLocation, dragInfo, source) {ULSPOJ:;
        return true;
    },
    
    dragEnter: function SP_UI_DragAndDropTable$dragEnter(dragInfo, source) {ULSPOJ:;
        SP.UI.DebugConsole.log('DragEnter');
        this.onDragEnter(dragInfo, source);
    },
    
    onDragEnter: function SP_UI_DragAndDropTable$onDragEnter(dragInfo, source) {
    },
    
    dragLeave: function SP_UI_DragAndDropTable$dragLeave(dragInfo, source) {ULSPOJ:;
        this.$6a_4();
        document.body.style.cursor = 'auto';
        this.onDragLeave(dragInfo, source);
    },
    
    onDragLeave: function SP_UI_DragAndDropTable$onDragLeave(dragInfo, source) {
    },
    
    dragDrop: function SP_UI_DragAndDropTable$dragDrop(dragInfo, source, overElement) {ULSPOJ:;
        this.dragLeave(dragInfo, source);
        if (source === this) {
            var $v_0 = null;
            if (this.$v_4 >= 0 && this.$v_4 < this.get_rowData().get_length()) {
                $v_0 = this.get_rowData().get_item(this.$v_4).get_rowKey();
            }
            var $v_1 = new (SP.UI.DragAndDropTableEventArgs.$$(this.$$gta['SP.UI.DragAndDropTable']['T']))($v_0, dragInfo.get_data());
            SP.UI.EventUtilities.raiseEvent(SP.UI.DragAndDropTableEventArgs.$$(this.$$gta['SP.UI.DragAndDropTable']['T']), this.get_events(), 'DropEventHandler', this, $v_1);
        }
    },
    
    isInBounds: function SP_UI_DragAndDropTable$isInBounds(p) {ULSPOJ:;
        return XUI.Capture.PointInDomElem(p.x, p.y, this.get_bodyElement(), null);
    },
    
    handleFocusKeyDown: function SP_UI_DragAndDropTable$handleFocusKeyDown(key, shiftPressed, ctrlPressed, altPressed) {ULSPOJ:;
        if (this.get_selectionManager().getSelectedItems().length > 0) {
            if (shiftPressed && altPressed && !ctrlPressed) {
                if (key === 38) {
                    this.$6n_4(-1);
                    return true;
                }
                else if (key === 40) {
                    this.$6n_4(1);
                    return true;
                }
            }
        }
        return SP.UI.SelectableTable.prototype.handleFocusKeyDown.call(this, key, shiftPressed, ctrlPressed, altPressed);
    },
    
    $6n_4: function SP_UI_DragAndDropTable$$6n_4($p0) {
        var $v_0 = this.$6U_4();
        var $v_1 = ($p0 < 0) ? $v_0[0] : $v_0[$v_0.length - 1];
        var $v_2 = $v_1;
        if ($p0 < 0) {
            $v_2 = Math.max(0, $v_2 - 2);
        }
        else {
            $v_2 = Math.min(this.get_rowData().get_length() - 1, $v_2 + 1);
        }
        if ($v_2 < 0) {
            $v_2 = 0;
        }
        var $v_3 = new (SP.UI.DragAndDropTableEventArgs.$$(this.$$gta['SP.UI.DragAndDropTable']['T']))(this.get_rowData().get_item($v_2).get_rowKey(), this.$6V_4());
        SP.UI.EventUtilities.raiseEvent(SP.UI.DragAndDropTableEventArgs.$$(this.$$gta['SP.UI.DragAndDropTable']['T']), this.get_events(), 'DropEventHandler', this, $v_3);
    },
    
    $6V_4: function SP_UI_DragAndDropTable$$6V_4() {ULSPOJ:;
        var $v_0 = this.$6U_4();
        var $v_1 = new (SP.UI.List.$$(String))();
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            $v_1.add(this.getControlByIndex($v_0[$v_2]).get_rowKey());
        }
        return $v_1.toArray();
    },
    
    $6U_4: function SP_UI_DragAndDropTable$$6U_4() {ULSPOJ:;
        var $v_0 = this.get_selectionManager().getSelectedItems();
        var $v_1 = new (SP.UI.List.$$(Number))();
        for (var $$arr_2 = $v_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_2 = $$arr_2[$$idx_4];
            var $v_3 = this.getIndexByKey($v_2);
            if ($v_3 >= 0) {
                $v_1.add($v_3);
            }
        }
        return $v_1.toArray();
    },
    
    onDrawUpdatesCompleted: function SP_UI_DragAndDropTable$onDrawUpdatesCompleted() {ULSPOJ:;
        SP.UI.Table.prototype.onDrawUpdatesCompleted.call(this);
        this.get_bodyElement().appendChild(this.$14_4);
    },
    
    $6a_4: function SP_UI_DragAndDropTable$$6a_4() {ULSPOJ:;
        SP.UI.DomUtilities.hide(this.$14_4);
    },
    
    $BC_4: function SP_UI_DragAndDropTable$$BC_4() {ULSPOJ:;
        if (this.$v_4 < 0 || this.$v_4 >= this.get_rowData().get_length()) {
            this.$2S_4 = null;
            return;
        }
        var $v_0 = this.get_rowData().get_item(this.$v_4);
        if (!$v_0) {
            this.$2S_4 = null;
            return;
        }
        else {
            if (SP.UI.IInlineEditableTaskRow.isInstanceOfType($v_0)) {
                var $v_1 = $v_0;
                this.$2S_4 = this.$8k_4($v_1.get_task().get_locationId());
            }
        }
    },
    
    $BI_4: function SP_UI_DragAndDropTable$$BI_4($p0) {
        var $v_0 = this.$8w_4($p0);
        if ($v_0 !== this.$v_4) {
            this.$v_4 = $v_0;
        }
    },
    
    $8w_4: function SP_UI_DragAndDropTable$$8w_4($p0) {
        var $v_0 = this.getRowControlFromElement($p0);
        if (!$v_0) {
            return -1;
        }
        else {
            return this.getIndexByKey($v_0.get_rowKey());
        }
    },
    
    $6r_4: function SP_UI_DragAndDropTable$$6r_4($p0) {
        if (!$p0) {
            SP.UI.DomUtilities.hide(this.$14_4);
        }
        else {
            SP.UI.DomUtilities.show(this.$14_4);
            this.$14_4.style.top = (SPAnimationUtility.BasicAnimator.GetTopOffset($p0.$1_0) + $p0.$1_0.offsetHeight).toString() + 'px';
            this.$14_4.style.width = '400px';
            if (SP.UI.DomUtilities.isLtr()) {
                this.$14_4.style.left = '4px';
            }
            else {
                this.$14_4.style.left = (this.get_bodyElement().offsetWidth - 400).toString() + 'px';
            }
        }
    },
    
    $8k_4: function SP_UI_DragAndDropTable$$8k_4($p0) {
        for (var $v_0 = 0; $v_0 < this.get_groups().length; $v_0++) {
            if ($p0 === this.get_groups()[$v_0].groupInfo.get_location().get_id()) {
                return this.get_groups()[$v_0];
            }
        }
        return null;
    }
}


SP.UI.DragAndDropTableEventArgs = function SP_UI_DragAndDropTableEventArgs(rowKey, data) {ULSPOJ:;
    SP.UI.DragAndDropTableEventArgs.$$(this.$$gta['SP.UI.DragAndDropTableEventArgs']['T']).initializeBase(this);
    this.$1F_1 = rowKey;
    this.$5S_1 = data;
}
SP.UI.DragAndDropTableEventArgs.$$ = function SP_UI_DragAndDropTableEventArgs$$$(T) {ULSPOJ:;
    var $$cn = 'DragAndDropTableEventArgs' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!SP.UI[$$cn]) {
        var $$ccr = SP.UI[$$cn] = function() {ULSPOJ:;
            (this.$$gta = this.$$gta || {})['SP.UI.DragAndDropTableEventArgs'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            SP.UI.DragAndDropTableEventArgs.apply(this, $v_0);
        };
        $$ccr.registerClass('SP.UI.' + $$cn, Sys.EventArgs);
        var $$dict_5 = SP.UI.DragAndDropTableEventArgs.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return SP.UI[$$cn];
}
SP.UI.DragAndDropTableEventArgs.prototype = {
    $5S_1: null,
    $1F_1: null,
    
    get_rowKey: function SP_UI_DragAndDropTableEventArgs$get_rowKey() {ULSPOJ:;
        return this.$1F_1;
    },
    
    get_data: function SP_UI_DragAndDropTableEventArgs$get_data() {ULSPOJ:;
        return this.$5S_1;
    }
}


SP.UI.DragInfo = function SP_UI_DragInfo(rowKeys, dragSurface) {ULSPOJ:;
    this.$5V_0 = document.createElement('span');
    this.$5W_0 = dragSurface;
    this.$5n_0 = rowKeys;
}
SP.UI.DragInfo.prototype = {
    $5V_0: null,
    $5n_0: null,
    $5W_0: null,
    
    get_dragGlyph: function SP_UI_DragInfo$get_dragGlyph() {ULSPOJ:;
        return this.$5V_0;
    },
    
    get_dragOffset: function SP_UI_DragInfo$get_dragOffset() {ULSPOJ:;
        return SP.UI.DragInfo.$6J;
    },
    
    get_data: function SP_UI_DragInfo$get_data() {ULSPOJ:;
        return this.$5n_0;
    },
    
    get_dragSurface: function SP_UI_DragInfo$get_dragSurface() {ULSPOJ:;
        return this.$5W_0;
    }
}


SP.UI.GroupInfo = function SP_UI_GroupInfo() {
}
SP.UI.GroupInfo.$$ = function SP_UI_GroupInfo$$$(T) {ULSPOJ:;
    var $$cn = 'GroupInfo' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!SP.UI[$$cn]) {
        var $$ccr = SP.UI[$$cn] = function() {ULSPOJ:;
            (this.$$gta = this.$$gta || {})['SP.UI.GroupInfo'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            SP.UI.GroupInfo.apply(this, $v_0);
        };
        $$ccr.registerClass('SP.UI.' + $$cn);
        var $$dict_5 = SP.UI.GroupInfo.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return SP.UI[$$cn];
}
SP.UI.GroupInfo.prototype = {
    $5d_0: null,
    $5O_0: null,
    $2V_0: false,
    $m_0: null,
    $5v_0: true,
    $5e_0: false,
    
    get_shouldDraw: function SP_UI_GroupInfo$get_shouldDraw() {ULSPOJ:;
        return this.$5v_0;
    },
    set_shouldDraw: function SP_UI_GroupInfo$set_shouldDraw(value) {ULSPOJ:;
        this.$5v_0 = value;
        return value;
    },
    
    get_hasEntryRow: function SP_UI_GroupInfo$get_hasEntryRow() {ULSPOJ:;
        return this.$5e_0;
    },
    set_hasEntryRow: function SP_UI_GroupInfo$set_hasEntryRow(value) {ULSPOJ:;
        this.$5e_0 = value;
        return value;
    },
    
    get_groupName: function SP_UI_GroupInfo$get_groupName() {ULSPOJ:;
        return this.$5d_0;
    },
    set_groupName: function SP_UI_GroupInfo$set_groupName(value) {ULSPOJ:;
        this.$5d_0 = value;
        return value;
    },
    
    get_children: function SP_UI_GroupInfo$get_children() {ULSPOJ:;
        return this.$5O_0;
    },
    set_children: function SP_UI_GroupInfo$set_children(value) {ULSPOJ:;
        this.$5O_0 = value;
        return value;
    },
    
    get_expanded: function SP_UI_GroupInfo$get_expanded() {ULSPOJ:;
        return this.$2V_0;
    },
    set_expanded: function SP_UI_GroupInfo$set_expanded(value) {ULSPOJ:;
        this.$2V_0 = value;
        return value;
    },
    
    get_location: function SP_UI_GroupInfo$get_location() {ULSPOJ:;
        return this.$m_0;
    },
    set_location: function SP_UI_GroupInfo$set_location(value) {ULSPOJ:;
        this.$m_0 = value;
        return value;
    }
}


SP.UI.HeightCache = function SP_UI_HeightCache() {ULSPOJ:;
    this.$3N_0 = {};
}
SP.UI.HeightCache.prototype = {
    
    setHeight: function SP_UI_HeightCache$setHeight(key, height) {ULSPOJ:;
        this.$3N_0[key] = height;
    },
    
    getHeight: function SP_UI_HeightCache$getHeight(rowKey) {ULSPOJ:;
        if (!SP.UI.DictionaryUtilities.containKey(this.$3N_0, rowKey)) {
            SP.UI.DebugConsole.log('HeightCache: No measurement was available for RowKey - ' + rowKey);
            return 31;
        }
        else {
            return this.$3N_0[rowKey];
        }
    }
}


SP.UI.ResizeManager = function SP_UI_ResizeManager() {ULSPOJ:;
    this.$$d_$6p_0 = Function.createDelegate(this, this.$6p_0);
    this.$3F_0 = new Sys.EventHandlerList();
    $addHandler(window, 'resize', this.$$d_$6p_0);
}
SP.UI.ResizeManager.prototype = {
    
    add_resize: function SP_UI_ResizeManager$add_resize(value) {ULSPOJ:;
        this.$3F_0.addHandler('ResizeEvent', value);
    },
    remove_resize: function SP_UI_ResizeManager$remove_resize(value) {ULSPOJ:;
        this.$3F_0.removeHandler('ResizeEvent', value);
    },
    
    forceResize: function SP_UI_ResizeManager$forceResize() {ULSPOJ:;
        this.$6p_0(null);
    },
    
    dispose: function SP_UI_ResizeManager$dispose() {ULSPOJ:;
        $removeHandler(window, 'resize', this.$$d_$6p_0);
    },
    
    onResize: function SP_UI_ResizeManager$onResize() {
    },
    
    $6p_0: function SP_UI_ResizeManager$$6p_0($p0) {
        var $$t_1 = this;
        window.setTimeout(function() {ULSPOJ:;
            $$t_1.onResize();
            SP.UI.EventUtilities.raiseEvent(Sys.EventArgs, $$t_1.$3F_0, 'ResizeEvent', $$t_1, null);
        }, 0);
    }
}


SP.UI.RowControl = function SP_UI_RowControl(serviceProvider) {ULSPOJ:;
    this.$3_0 = serviceProvider;
    this.$1_0 = document.createElement('div');
    SP.UI.RowControl.$58++;
    this.$1_0.id = 'DeferredRender' + SP.UI.RowControl.$58.toString();
}
SP.UI.RowControl.prototype = {
    $3_0: null,
    $4f_0: false,
    $1_0: null,
    $1f_0: true,
    $4E_0: false,
    
    get_isDraggable: function SP_UI_RowControl$get_isDraggable() {ULSPOJ:;
        return false;
    },
    
    get_enabled: function SP_UI_RowControl$get_enabled() {ULSPOJ:;
        return true;
    },
    
    get_serviceProvider: function SP_UI_RowControl$get_serviceProvider() {ULSPOJ:;
        return this.$3_0;
    },
    
    get_element: function SP_UI_RowControl$get_element() {ULSPOJ:;
        return this.$1_0;
    },
    
    get_focusElement: function SP_UI_RowControl$get_focusElement() {ULSPOJ:;
        return null;
    },
    
    get_hasRendered: function SP_UI_RowControl$get_hasRendered() {ULSPOJ:;
        return this.$4E_0;
    },
    
    get_visible: function SP_UI_RowControl$get_visible() {ULSPOJ:;
        return this.$1f_0;
    },
    set_visible: function SP_UI_RowControl$set_visible(value) {ULSPOJ:;
        if (this.$1f_0 !== value) {
            this.$1f_0 = value;
            if (this.$1f_0) {
                this.$1_0.style.display = '';
                XUI.Html.SetOpacity(this.$1_0, 1);
            }
            else {
                this.$1_0.style.display = 'none';
            }
        }
        return value;
    },
    
    render: function SP_UI_RowControl$render() {ULSPOJ:;
        this.renderRow();
        SP.UI.TableRenderUtilities.setBoundControl(this.$1_0, this);
        this.$4E_0 = true;
    },
    
    onEnterView: function SP_UI_RowControl$onEnterView() {
    },
    
    onLeaveView: function SP_UI_RowControl$onLeaveView() {
    },
    
    renderRow: function SP_UI_RowControl$renderRow() {ULSPOJ:;
        this.$1_0.style.position = 'relative';
        this.$1_0.style.border = '0px';
    },
    
    onFocus: function SP_UI_RowControl$onFocus() {ULSPOJ:;
        SP.UI.DebugConsole.log('RowControl.StartFocus');
    },
    
    handleFocusKeyDown: function SP_UI_RowControl$handleFocusKeyDown(key, shiftPressed, ctrlPressed, altPressed) {ULSPOJ:;
        return false;
    },
    
    onClick: function SP_UI_RowControl$onClick(targetElement) {ULSPOJ:;
        return false;
    },
    
    onDoubleClick: function SP_UI_RowControl$onDoubleClick(targetElement) {ULSPOJ:;
        return false;
    },
    
    onResize: function SP_UI_RowControl$onResize(columnManager) {ULSPOJ:;
        if (this.$1_0) {
            this.$1_0.style.width = columnManager.$1x_0.toString() + 'px';
        }
    },
    
    onMouseOver: function SP_UI_RowControl$onMouseOver() {
    },
    
    onMouseOut: function SP_UI_RowControl$onMouseOut() {
    },
    
    get_isSelected: function SP_UI_RowControl$get_isSelected() {ULSPOJ:;
        return this.$4f_0;
    },
    set_isSelected: function SP_UI_RowControl$set_isSelected(value) {ULSPOJ:;
        this.$4f_0 = value;
        if (this.$4f_0) {
            SP.UI.AriaUtilities.setAriaSelected(this.$1_0, true);
            this.onSelected();
        }
        else {
            SP.UI.AriaUtilities.setAriaSelected(this.$1_0, false);
            this.onUnselected();
        }
        return value;
    },
    
    dispose: function SP_UI_RowControl$dispose() {ULSPOJ:;
        if (this.$1_0) {
            this.$1_0 = null;
            SP.UI.TableRenderUtilities.disposeBoundControl(this.$1_0);
        }
    },
    
    onSelected: function SP_UI_RowControl$onSelected() {
    },
    
    onUnselected: function SP_UI_RowControl$onUnselected() {
    }
}


SP.UI.SelectableTable = function SP_UI_SelectableTable(parentElement, headerControl, groupingControlFactory, rowControlFactory, columnManager, notificationObject) {ULSPOJ:;
    this.$$d_$9C_3 = Function.createDelegate(this, this.$9C_3);
    this.$$d_$98_3 = Function.createDelegate(this, this.$98_3);
    this.$$d_$59_3 = Function.createDelegate(this, this.$59_3);
    this.$$d_$9r_3 = Function.createDelegate(this, this.$9r_3);
    this.$$d_$9s_3 = Function.createDelegate(this, this.$9s_3);
    this.$$d_$9k_3 = Function.createDelegate(this, this.$9k_3);
    this.$$d_$6o_3 = Function.createDelegate(this, this.$6o_3);
    this.$13_3 = -1;
    this.$2E_3 = -1;
    SP.UI.SelectableTable.$$(this.$$gta['SP.UI.SelectableTable']['T']).initializeBase(this, [ parentElement, headerControl, groupingControlFactory, rowControlFactory, columnManager ]);
    this.$P_3 = new (SP.UI.SelectionManager.$$(String))(notificationObject);
    var $$t_7 = this;
    $addHandler(this.get_parentContainerElement(), 'click', function($p1_0) {
        if (!$$t_7.$4T_3) {
            $$t_7.$P_3.clearSelection();
            $$t_7.onTableLostFocus();
            $$t_7.setFocusedIndex(SP.UI.TaskListConstants.noValue);
        }
    });
    $addHandler(this.get_bodyElement(), 'click', this.$$d_$6o_3);
    $addHandler(this.get_bodyElement(), 'dblclick', this.$$d_$9k_3);
    $addHandler(this.get_bodyElement(), 'mousedown', SP.UI.SelectableTable.$$(this.$$gta['SP.UI.SelectableTable']['T']).$9h);
    $addHandler(this.get_bodyElement(), 'mouseover', this.$$d_$9s_3);
    $addHandler(this.get_bodyElement(), 'mouseout', this.$$d_$9r_3);
    $addHandler(this.get_bodyElement(), 'keydown', this.$$d_$59_3);
    this.$P_3.add_selectionAdded(this.$$d_$98_3);
    this.$P_3.add_selectionRemoved(this.$$d_$9C_3);
    SP.UI.TableRenderUtilities.setBoundControl(this.get_bodyElement(), this);
}
SP.UI.SelectableTable.$$ = function SP_UI_SelectableTable$$$(T) {ULSPOJ:;
    var $$cn = 'SelectableTable' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!SP.UI[$$cn]) {
        var $$ccr = SP.UI[$$cn] = function() {ULSPOJ:;
            (this.$$gta = this.$$gta || {})['SP.UI.SelectableTable'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            SP.UI.SelectableTable.apply(this, $v_0);
        };
        $$ccr.registerClass('SP.UI.' + $$cn, SP.UI.Table.$$(T), SP.UI.IKeyboardEventHandler);
        var $$dict_5 = SP.UI.SelectableTable.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
        $$ccr.$9h = function SP_UI_SelectableTable$$9h($p0_0) {
            if ($p0_0.ctrlKey || $p0_0.shiftKey) {
                $p0_0.preventDefault();
            }
        };
    }
    return SP.UI[$$cn];
}
SP.UI.SelectableTable.prototype = {
    $P_3: null,
    $4T_3: false,
    $2G_3: null,
    
    get_canReassignFocus: function SP_UI_SelectableTable$get_canReassignFocus() {ULSPOJ:;
        return true;
    },
    
    get_focusedControl: function SP_UI_SelectableTable$get_focusedControl() {ULSPOJ:;
        return this.getControlByIndex(this.$13_3);
    },
    
    get_selectionManager: function SP_UI_SelectableTable$get_selectionManager() {ULSPOJ:;
        return this.$P_3;
    },
    
    $98_3: function SP_UI_SelectableTable$$98_3($p0, $p1) {
        this.$Am_3($p1.get_items());
    },
    
    $Am_3: function SP_UI_SelectableTable$$Am_3($p0) {
        var $v_0 = this.getIndexByKey($p0[0]);
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            var $v_2 = this.getControlFromKey($p0[$v_1]);
            if ($v_2) {
                if (!$v_2.get_isSelected()) {
                    $v_2.set_isSelected(true);
                    this.setFocusedIndex(this.getIndexByKey($v_2.get_rowKey()));
                }
            }
        }
    },
    
    $9C_3: function SP_UI_SelectableTable$$9C_3($p0, $p1) {
        for (var $v_0 = 0; $v_0 < $p1.get_items().length; $v_0++) {
            var $v_1 = this.getControlFromKey($p1.get_items()[$v_0]);
            this.$78_3($v_1);
        }
    },
    
    $78_3: function SP_UI_SelectableTable$$78_3($p0) {
        if ($p0) {
            if ($p0.get_isSelected()) {
                $p0.set_isSelected(false);
            }
        }
    },
    
    $9s_3: function SP_UI_SelectableTable$$9s_3($p0) {
        this.$4T_3 = true;
        if (SP.UI.DragAndDropManager.get_instance().get_isDragging()) {
            return;
        }
        var $v_0 = $p0.target;
        var $v_1 = this.getRowControlFromElement($v_0);
        if ($v_1) {
            this.$71_3(this.getIndexByKey($v_1.get_rowKey()));
        }
    },
    
    $9r_3: function SP_UI_SelectableTable$$9r_3($p0) {
        this.$4T_3 = false;
        this.$71_3(-1);
    },
    
    $9k_3: function SP_UI_SelectableTable$$9k_3($p0) {
        var $v_0 = $p0.target;
        var $$t_4 = this;
        this.$BS_3(SP.UI.IMouseEventHandler, $p0.target, $p0, function($p1_0, $p1_1) {
            return $p1_0.onDoubleClick($p1_1.target);
        }, true);
    },
    
    onPreClick: function SP_UI_SelectableTable$onPreClick(domEvent) {
    },
    
    $6o_3: function SP_UI_SelectableTable$$6o_3($p0) {
        this.onPreClick($p0);
        var $v_0 = $p0.target;
        var $$t_6 = this;
        var $v_1 = this.$BS_3(SP.UI.IMouseEventHandler, $p0.target, $p0, function($p1_0, $p1_1) {
            return $p1_0.onClick($p0.target);
        }, false);
        var $v_2 = this.getRowControlFromElement($p0.target);
        if ($v_2 && !$v_1) {
            this.onMouseClick($p0, $v_2);
        }
    },
    
    $59_3: function SP_UI_SelectableTable$$59_3($p0) {
        var $$t_4 = this;
        var $v_0 = this.$BS_3(SP.UI.IKeyboardEventHandler, $p0.target, $p0, function($p1_0, $p1_1) {
            return $p1_0.handleFocusKeyDown($p1_1.keyCode, $p1_1.shiftKey, $p1_1.ctrlKey, $p1_1.altKey);
        }, true);
    },
    
    $BS_3: function SP_UI_SelectableTable$$BS_3($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = false;
        var $v_1 = $p1;
        while ($v_1) {
            var $v_2 = SP.UI.TableRenderUtilities.getBoundControl($v_1);
            if ($p0.isInstanceOfType($v_2)) {
                var $v_3 = $v_2;
                if ($p3($v_3, $p2)) {
                    if ($p4) {
                        $p2.stopPropagation();
                        $p2.preventDefault();
                    }
                    $v_0 = true;
                    break;
                }
            }
            $v_1 = $v_1.parentNode;
            if ($v_1 === this.get_bodyElement().parentNode) {
                break;
            }
        }
        return $v_0;
    },
    
    getRowControlFromElement: function SP_UI_SelectableTable$getRowControlFromElement(element) {ULSPOJ:;
        var $v_0 = element;
        while ($v_0) {
            var $v_1 = SP.UI.TableRenderUtilities.getBoundControl($v_0);
            if (SP.UI.RowControl.isInstanceOfType($v_1)) {
                return $v_1;
            }
            $v_0 = $v_0.parentNode;
            if ($v_0 === this.get_bodyElement().parentNode) {
                break;
            }
        }
        return null;
    },
    
    onMouseClick: function SP_UI_SelectableTable$onMouseClick(domEvent, clickedRow) {ULSPOJ:;
        this.$An_3(domEvent, clickedRow);
    },
    
    handleFocusKeyDown: function SP_UI_SelectableTable$handleFocusKeyDown(key, shiftPressed, ctrlPressed, altPressed) {ULSPOJ:;
        if (!this.get_rowData().get_length()) {
            return false;
        }
        switch (key) {
            case 40:
                return this.moveFocus(1, shiftPressed, ctrlPressed);
            case 38:
                return this.moveFocus(-1, shiftPressed, ctrlPressed);
        }
        return false;
    },
    
    setFocusedIndex: function SP_UI_SelectableTable$setFocusedIndex(index) {ULSPOJ:;
        if (this.$13_3 !== index) {
            this.$13_3 = index;
            if (this.get_focusedControl() && this.get_focusedControl().get_focusElement() && this.get_canReassignFocus()) {
                SP.UI.DomUtilities.focus(this.get_focusedControl().get_focusElement());
            }
            this.onFocusChanged();
        }
    },
    
    onFocusChanged: function SP_UI_SelectableTable$onFocusChanged() {
    },
    
    moveFocus: function SP_UI_SelectableTable$moveFocus(increment, shiftPressed, ctrlPressed) {ULSPOJ:;
        var $v_0 = this.$13_3;
        var $v_1 = this.$8t_3($v_0, increment);
        if ($v_1 === $v_0) {
            this.setFocusedIndex($v_0);
            return false;
        }
        else {
            if (!shiftPressed && !ctrlPressed) {
                this.$P_3.clearSelection();
            }
            else if ($v_0 !== -1) {
                var $v_3 = this.getControlByIndex($v_0);
                var $v_4 = this.getControlByIndex($v_1);
                if ($v_4.get_isSelected()) {
                    this.$P_3.removeFromSelection($v_3.get_rowKey());
                }
            }
            var $v_2 = this.getControlByIndex($v_1);
            this.$P_3.select($v_2.get_rowKey());
            this.setFocusedIndex($v_1);
            return true;
        }
    },
    
    getPointInElementSpace: function SP_UI_SelectableTable$getPointInElementSpace(point) {ULSPOJ:;
        var $v_0 = XUI.Capture.GetLocation(this.get_bodyElement());
        var $v_1 = point.x - $v_0.x;
        var $v_2 = point.y - $v_0.y;
        return new Sys.UI.Point($v_1, $v_2);
    },
    
    $8t_3: function SP_UI_SelectableTable$$8t_3($p0, $p1) {
        if (!$p1) {
            throw Error.argument('increment', 'Increment cannot be 0');
        }
        var $v_0 = $p0;
        var $v_1 = $p0;
        while (true) {
            $v_1 += $p1;
            if ($v_1 < 0 || $v_1 > this.get_rowData().get_length() - 1) {
                break;
            }
            if (this.get_rowData().get_item($v_1).get_visible() && this.get_rowData().get_item($v_1).get_enabled()) {
                $v_0 = $v_1;
                break;
            }
        }
        return $v_0;
    },
    
    $71_3: function SP_UI_SelectableTable$$71_3($p0) {
        if (this.$2E_3 !== -1) {
            if (this.$2E_3 < this.get_rowData().get_length()) {
                this.get_rowData().get_item(this.$2E_3).onMouseOut();
            }
        }
        if ($p0 >= 0 && $p0 < this.get_rowData().get_length()) {
            this.get_rowData().get_item($p0).onMouseOver();
            this.$2E_3 = $p0;
        }
        else {
            this.$2E_3 = -1;
        }
    },
    
    $An_3: function SP_UI_SelectableTable$$An_3($p0, $p1) {
        var $v_0 = $p1.get_isSelected();
        if (!$p0.ctrlKey && !$p0.shiftKey) {
            for (var $$arr_3 = this.$P_3.getSelectedItems(), $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
                var $v_3 = $$arr_3[$$idx_5];
                if ($v_3 !== $p1.get_rowKey()) {
                    this.$P_3.removeFromSelection($v_3);
                }
            }
        }
        var $v_1 = this.getIndexByKey($p1.get_rowKey());
        var $v_2 = (this.$13_3 !== -1 && $p0.shiftKey);
        if ($v_2) {
            this.$P_3.clearSelection();
            var $v_4, $v_5;
            if (this.$13_3 > $v_1) {
                $v_4 = $v_1;
                $v_5 = this.$13_3;
            }
            else {
                $v_4 = this.$13_3;
                $v_5 = $v_1;
            }
            var $v_6 = this.$13_3;
            for (var $v_7 = $v_4; $v_7 <= $v_5; $v_7++) {
                var $v_8 = this.getControlByIndex($v_7);
                this.$P_3.select($v_8.get_rowKey());
            }
            this.$P_3.select(this.getControlByIndex($v_6).get_rowKey());
            this.setFocusedIndex($v_5);
        }
        else {
            if ($p0.ctrlKey && $v_0) {
                this.setFocusedIndex($v_1);
                this.$P_3.removeFromSelection($p1.get_rowKey());
            }
            else if (!$v_0) {
                this.setFocusedIndex($v_1);
                this.$P_3.select($p1.get_rowKey());
            }
            if ($p0.ctrlKey || $p0.shiftKey) {
                $p0.preventDefault();
                $p0.stopPropagation();
            }
        }
    },
    
    onTableLostFocus: function SP_UI_SelectableTable$onTableLostFocus() {
    },
    
    onPreDraw: function SP_UI_SelectableTable$onPreDraw() {ULSPOJ:;
        this.$2G_3 = new (SP.UI.List.$$(SP.UI.RowControl))();
        var $v_0 = this.$P_3.getSelectedItems();
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = this.getControlFromKey($v_0[$v_1]);
            if ($v_2) {
                this.$2G_3.add($v_2);
            }
        }
        SP.UI.Table.prototype.onPreDraw.call(this);
    },
    
    onSynchronousRenderCompleted: function SP_UI_SelectableTable$onSynchronousRenderCompleted() {ULSPOJ:;
        for (var $v_0 = 0; $v_0 < this.$2G_3.get_length(); $v_0++) {
            if (!this.getControlFromKey(this.$2G_3.get_item($v_0).get_rowKey())) {
                this.$78_3(this.$2G_3.get_item($v_0));
                this.$P_3.removeFromSelection(this.$2G_3.get_item($v_0).get_rowKey());
            }
        }
        SP.UI.Table.prototype.onSynchronousRenderCompleted.call(this);
    }
}


SP.UI.Table = function SP_UI_Table(parentElement, headerControl, groupingControlFactory, rowControlFactory, columnManager) {ULSPOJ:;
    this.$$d_onDrawUpdatesCompleted = Function.createDelegate(this, this.onDrawUpdatesCompleted);
    this.$$d_$9v_2 = Function.createDelegate(this, this.$9v_2);
    this.$12_2 = new (SP.UI.List.$$(SP.UI.RowControl))();
    this.$8_2 = new (SP.UI.List.$$(SP.UI.DeferredRenderRegion))();
    this.$3M_2 = new (SP.UI.List.$$(SP.UI.GroupRenderData.$$(this.$$gta['SP.UI.Table']['T'])))();
    this.$z_2 = {};
    this.$3Y_2 = {};
    this.$10_2 = {};
    this.$4c_2 = {};
    this.$4b_2 = {};
    SP.UI.Table.$$(this.$$gta['SP.UI.Table']['T']).initializeBase(this, [ parentElement ]);
    this.$1r_2 = parentElement;
    this.$4d_2 = new SP.UI.TableResizeManager(parentElement, columnManager);
    this.$4d_2.add_resize(this.$$d_$9v_2);
    this.$5X_2 = new (SP.UI.TableDrawThrottle.$$(this.$$gta['SP.UI.Table']['T']))(this);
    this.$3h_2 = document.createElement('div');
    this.$x_2 = document.createElement('div');
    this.$1N_2 = document.createElement('div');
    this.$1N_2.style.position = 'relative';
    this.$3h_2.appendChild(this.$x_2);
    this.$3h_2.appendChild(this.$1N_2);
    parentElement.appendChild(this.$3h_2);
    this.$2C_2 = headerControl;
    this.$5t_2 = rowControlFactory;
    this.$3L_2 = groupingControlFactory;
    this.$t_2 = columnManager;
    this.$2f_2 = $get('s4-workspace');
    if (!this.$2f_2) {
        this.$2f_2 = document.body;
    }
    this.$1j_2 = new SP.UI.DeferredRenderManager(this.$2f_2);
    this.$1N_2.appendChild(this.$1j_2.$1_1);
}
SP.UI.Table.$$ = function SP_UI_Table$$$(T) {ULSPOJ:;
    var $$cn = 'Table' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!SP.UI[$$cn]) {
        var $$ccr = SP.UI[$$cn] = function() {ULSPOJ:;
            (this.$$gta = this.$$gta || {})['SP.UI.Table'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            SP.UI.Table.apply(this, $v_0);
        };
        $$ccr.registerClass('SP.UI.' + $$cn, Sys.UI.Control);
        var $$dict_5 = SP.UI.Table.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
        $$ccr.$3q = function SP_UI_Table$$3q($p0_0) {
            if ($p0_0.get_location()) {
                return 'gp_' + $p0_0.get_location().get_id();
            }
            else {
                return 'gp_' + $p0_0.get_groupName();
            }
        };
        $$ccr.$BQ = function SP_UI_Table$$BQ($p0_0) {
            return $$ccr.$3q($p0_0) + '_entry';
        };
        $$ccr.$BR = function SP_UI_Table$$BR($p0_0) {
            return $$ccr.$3q($p0_0) + '_footer';
        };
        $$ccr.$BB = function SP_UI_Table$$BB($p0_0) {
            var $v_0 = {};
            for (var $v_1 = 0; $v_1 < $p0_0.get_length(); $v_1++) {
                $v_0[$p0_0.get_item($v_1).get_rowKey()] = $v_1;
            }
            return $v_0;
        };
        $$ccr.$7k = 20;
    }
    return SP.UI[$$cn];
}
SP.UI.Table.prototype = {
    $3h_2: null,
    $x_2: null,
    $1N_2: null,
    $1r_2: null,
    $2f_2: null,
    $3L_2: null,
    $5t_2: null,
    $2C_2: null,
    $t_2: null,
    $4d_2: null,
    $2Y_2: null,
    $4N_2: true,
    $4a_2: false,
    $1j_2: null,
    $5X_2: null,
    $3C_2: null,
    $2W_2: false,
    
    get_redrawInProgress: function SP_UI_Table$get_redrawInProgress() {ULSPOJ:;
        return this.$4a_2;
    },
    
    get_hidden: function SP_UI_Table$get_hidden() {ULSPOJ:;
        return this.$2W_2;
    },
    set_hidden: function SP_UI_Table$set_hidden(value) {ULSPOJ:;
        this.$2W_2 = value;
        return value;
    },
    
    get_bodyElement: function SP_UI_Table$get_bodyElement() {ULSPOJ:;
        return this.$1N_2;
    },
    
    get_rowData: function SP_UI_Table$get_rowData() {ULSPOJ:;
        return this.$12_2;
    },
    
    get_groups: function SP_UI_Table$get_groups() {ULSPOJ:;
        return this.$3M_2.toArray();
    },
    
    get_parentContainerElement: function SP_UI_Table$get_parentContainerElement() {ULSPOJ:;
        return this.$2f_2;
    },
    
    getControlFromKey: function SP_UI_Table$getControlFromKey(key) {ULSPOJ:;
        var $v_0 = this.getIndexByKey(key);
        if ($v_0 === -1) {
            return null;
        }
        return this.$12_2.get_item(this.getIndexByKey(key));
    },
    
    getDataFromKey: function SP_UI_Table$getDataFromKey(key) {ULSPOJ:;
        return this.$2Y_2[key];
    },
    
    getIndexByKey: function SP_UI_Table$getIndexByKey(key) {ULSPOJ:;
        if (!SP.UI.DictionaryUtilities.containKey(this.$z_2, key)) {
            return -1;
        }
        else {
            return this.$z_2[key];
        }
    },
    
    getControlByIndex: function SP_UI_Table$getControlByIndex(index) {ULSPOJ:;
        if (index < 0 || index >= this.$12_2.get_length()) {
            return null;
        }
        else {
            return this.$12_2.get_item(index);
        }
    },
    
    resize: function SP_UI_Table$resize() {ULSPOJ:;
        this.$4d_2.forceResize();
    },
    
    hideRow: function SP_UI_Table$hideRow(row, tryToAnimate) {ULSPOJ:;
        var $v_0 = this.$10_2[row.get_rowKey()];
        var $v_1 = $v_0.getIndexFromRow(row);
        var $$t_4 = this;
        $v_0.hideRow($v_1, tryToAnimate, function() {ULSPOJ:;
            $$t_4.$1j_2.update(null);
        });
    },
    
    showRow: function SP_UI_Table$showRow(row) {ULSPOJ:;
        var $v_0 = this.$10_2[row.get_rowKey()];
        var $v_1 = $v_0.getIndexFromRow(row);
        $v_0.showRow($v_1);
    },
    
    removeRow: function SP_UI_Table$removeRow(rowToRemove, tryToAnimate) {ULSPOJ:;
        var $v_0 = rowToRemove.get_rowKey();
        var $v_1 = this.$10_2[$v_0];
        var $v_2 = this.$z_2[$v_0];
        var $v_3 = $v_1.getIndexFromRow(rowToRemove);
        var $$t_6 = this;
        $v_1.removeRow(rowToRemove, tryToAnimate, function() {ULSPOJ:;
            $$t_6.$1j_2.update(null);
        });
        this.$12_2.remove(rowToRemove);
        this.$7B_2($v_2);
        SP.UI.DictionaryUtilities.deleteKey(this.$10_2, $v_0);
        SP.UI.DictionaryUtilities.deleteKey(this.$z_2, $v_0);
    },
    
    moveRow: function SP_UI_Table$moveRow(rowToMove, referenceRow) {ULSPOJ:;
        var $v_0 = document.activeElement;
        if (rowToMove === referenceRow) {
            return;
        }
        this.removeRow(rowToMove, false);
        this.insertRowAfter(rowToMove, referenceRow, false);
        SP.UI.DomUtilities.focus($v_0);
    },
    
    insertRowAfter: function SP_UI_Table$insertRowAfter(rowToInsert, referenceRow, tryToAnimate) {ULSPOJ:;
        var $v_0 = referenceRow.get_rowKey();
        var $v_1 = this.$10_2[$v_0];
        var $v_2 = $v_1.getIndexFromRow(referenceRow);
        $v_1.addRow(rowToInsert, $v_2, tryToAnimate);
        var $v_3 = this.$z_2[$v_0];
        this.$12_2.insert(rowToInsert, $v_3 + 1);
        this.$7B_2($v_3);
        this.$10_2[rowToInsert.get_rowKey()] = $v_1;
    },
    
    $7B_2: function SP_UI_Table$$7B_2($p0) {
        for (var $v_0 = $p0; $v_0 < this.$12_2.get_length(); $v_0++) {
            var $v_1 = this.$12_2.get_item($v_0);
            this.$z_2[$v_1.get_rowKey()] = $v_0;
        }
    },
    
    updateRowKeyAndData: function SP_UI_Table$updateRowKeyAndData(oldKey, newKey, data) {ULSPOJ:;
        var $v_0 = this.$z_2[oldKey];
        var $v_1 = this.$10_2[oldKey];
        this.$z_2[newKey] = $v_0;
        this.$10_2[newKey] = $v_1;
        this.$2Y_2[newKey] = data;
        SP.UI.DictionaryUtilities.deleteKey(this.$z_2, oldKey);
        SP.UI.DictionaryUtilities.deleteKey(this.$10_2, oldKey);
    },
    
    updateData: function SP_UI_Table$updateData(key, data) {ULSPOJ:;
        this.$2Y_2[key] = data;
    },
    
    draw: function SP_UI_Table$draw(data, strategy, drawUpdatesCompletedCallback) {ULSPOJ:;
        this.$5X_2.draw(data, strategy, drawUpdatesCompletedCallback);
    },
    
    $BP_2: function SP_UI_Table$$BP_2($p0, $p1, $p2) {
        if ($p1 === 2) {
            this.$1N_2.style.height = this.$1N_2.offsetHeight.toString() + 'px';
        }
        this.$3C_2 = $p2;
        this.$4a_2 = true;
        this.onPreDraw();
        this.$t_2.distributeAvailableWidth(this.$1r_2.offsetWidth);
        if (this.$4N_2) {
            this.$8T_2();
        }
        this.$3M_2.clear();
        this.$2Y_2 = {};
        var $v_0 = new (SP.UI.List.$$(SP.UI.RowControl))();
        this.$4c_2 = {};
        this.$4b_2 = {};
        this.$Ac_2($p0, $v_0);
        this.$BG_2($v_0);
        var $v_1 = SP.UI.Table.$$(this.$$gta['SP.UI.Table']['T']).$BB($v_0);
        this.$A7_2($p1);
        this.$Aj_2($v_0, $v_1);
        this.$4N_2 = false;
        this.onSynchronousRenderCompleted();
    },
    
    $A7_2: function SP_UI_Table$$A7_2($p0) {
        var $v_0 = SP.UI.AnimationFactory.createPostAnimationFromStrategy($p0);
        this.$7S_2($v_0);
        this.$AM_2();
    },
    
    $7S_2: function SP_UI_Table$$7S_2($p0) {
        for (var $v_0 = 0; $v_0 < this.$8_2.get_length(); $v_0++) {
            if (this.$8_2.get_item($v_0).$1B_0 && this.$8_2.get_item($v_0).$1h_0) {
                if ($p0) {
                    this.$8_2.get_item($v_0).$2F_0 = $p0;
                }
            }
        }
    },
    
    onPreDraw: function SP_UI_Table$onPreDraw() {
    },
    
    onDrawUpdatesCompleted: function SP_UI_Table$onDrawUpdatesCompleted() {ULSPOJ:;
        this.$1N_2.style.height = '';
        this.$4a_2 = false;
        if (this.$3C_2) {
            this.$3C_2();
            this.$3C_2 = null;
        }
    },
    
    onSynchronousRenderCompleted: function SP_UI_Table$onSynchronousRenderCompleted() {
    },
    
    getOffsetForRowKey: function SP_UI_Table$getOffsetForRowKey(rowKey) {ULSPOJ:;
        var $v_0 = this.getControlFromKey(rowKey);
        return SPAnimationUtility.BasicAnimator.GetTopOffset($v_0.$1_0);
    },
    
    $Ac_2: function SP_UI_Table$$Ac_2($p0, $p1) {
        for (var $$arr_2 = $p0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_0 = $$arr_2[$$idx_4];
            var $v_1 = new (SP.UI.GroupRenderData.$$(this.$$gta['SP.UI.Table']['T']))();
            $v_1.groupInfo = $v_0;
            this.$Ab_2($v_1, $p1);
            this.$3M_2.add($v_1);
        }
    },
    
    $9v_2: function SP_UI_Table$$9v_2($p0, $p1) {
        if (this.$4N_2) {
            return;
        }
        if (this.$2C_2) {
            this.$2C_2.onResize(this.$t_2);
        }
        for (var $v_0 = 0; $v_0 < this.$8_2.get_length(); $v_0++) {
            if (this.$8_2.get_item($v_0).$1B_0) {
                var $v_1 = this.$8_2.get_item($v_0);
                for (var $v_2 = 0; $v_2 < $v_1.$9_0.length; $v_2++) {
                    var $v_3 = $v_1.$9_0[$v_2];
                    $v_3.onResize(this.$t_2);
                }
            }
        }
    },
    
    $Ab_2: function SP_UI_Table$$Ab_2($p0, $p1) {
        var $v_0 = $p0.groupInfo;
        SP.UI.DebugConsole.log('Rendering group: ' + $v_0.get_groupName());
        if ($v_0.get_shouldDraw()) {
            this.$3n_2(this.$3L_2.createGroupingHeaderControl($v_0), $p1);
        }
        if ($v_0.get_expanded()) {
            this.$3n_2(this.$3L_2.createEntryRowControl($v_0), $p1);
            for (var $v_1 = 0; $v_1 < $v_0.get_children().length; $v_1++) {
                var $v_2 = $v_0.get_children()[$v_1];
                var $v_3 = this.$5t_2.createRowControl($v_2);
                this.$2Y_2[$v_3.get_rowKey()] = $v_2;
                this.$3n_2($v_3, $p1);
            }
            if ($v_0.get_shouldDraw()) {
                this.$3n_2(this.$3L_2.createGroupingFooterControl($v_0), $p1);
            }
        }
    },
    
    $3n_2: function SP_UI_Table$$3n_2($p0, $p1) {
        if ($p0) {
            if (SP.UI.DictionaryUtilities.containKey(this.$3Y_2, $p0.get_rowKey())) {
                SP.UI.DebugConsole.log('Re-using row: ' + $p0.get_rowKey());
                $p0 = this.$3Y_2[$p0.get_rowKey()];
            }
            else {
                SP.UI.DebugConsole.log('Rendering new row: ' + $p0.get_rowKey());
                this.$3Y_2[$p0.get_rowKey()] = $p0;
            }
            $p1.add($p0);
        }
    },
    
    $Aj_2: function SP_UI_Table$$Aj_2($p0, $p1) {
        this.$12_2 = $p0;
        this.$z_2 = $p1;
    },
    
    $8T_2: function SP_UI_Table$$8T_2() {ULSPOJ:;
        if (this.$2C_2) {
            this.$2C_2.render();
            this.$x_2.appendChild(this.$2C_2.$1_0);
        }
    },
    
    $AM_2: function SP_UI_Table$$AM_2() {ULSPOJ:;
        if (this.$2W_2) {
            this.onDrawUpdatesCompleted();
        }
        else {
            this.$1j_2.update(this.$$d_onDrawUpdatesCompleted);
        }
    },
    
    $BG_2: function SP_UI_Table$$BG_2($p0) {
        var $v_0 = 0;
        var $v_1 = 0;
        var $v_2 = this.$6O_2($p0, $v_0);
        while ($v_2) {
            if ($v_1 >= this.$8_2.get_length()) {
                var $v_4 = new SP.UI.DeferredRenderRegion();
                this.$8_2.add($v_4);
                this.$1j_2.register($v_4);
                if ($v_1 > 0) {
                    $v_4.$1h_0 = this.$8_2.get_item($v_1 - 1).$1h_0;
                }
            }
            var $v_3 = this.$8_2.get_item($v_1);
            this.$4c_2[$v_1.toString()] = $v_3.$9_0;
            this.$4b_2[$v_1.toString()] = $v_2;
            $v_3.updateRowData($v_2);
            for (var $v_5 = 0; $v_5 < $v_2.length; $v_5++) {
                this.$10_2[$v_2[$v_5].get_rowKey()] = $v_3;
            }
            $v_1++;
            $v_0 += $v_2.length;
            $v_2 = this.$6O_2($p0, $v_0);
        }
        while (this.$8_2.get_length() > $v_1) {
            this.$AV_2();
        }
    },
    
    $AV_2: function SP_UI_Table$$AV_2() {ULSPOJ:;
        var $v_0 = this.$8_2.get_item(this.$8_2.get_length() - 1);
        this.$1j_2.unregister($v_0);
        this.$8_2.remove($v_0);
    },
    
    $6O_2: function SP_UI_Table$$6O_2($p0, $p1) {
        if ($p1 >= $p0.get_length()) {
            return null;
        }
        var $v_0 = Math.min($p0.get_length() - $p1, 20);
        var $v_1 = new Array($v_0);
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            $v_1[$v_2] = $p0.get_item($p1 + $v_2);
        }
        return $v_1;
    }
}


SP.UI.GroupRenderData = function SP_UI_GroupRenderData() {
}
SP.UI.GroupRenderData.$$ = function SP_UI_GroupRenderData$$$(T) {ULSPOJ:;
    var $$cn = 'GroupRenderData' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!SP.UI[$$cn]) {
        var $$ccr = SP.UI[$$cn] = function() {ULSPOJ:;
            (this.$$gta = this.$$gta || {})['SP.UI.GroupRenderData'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            SP.UI.GroupRenderData.apply(this, $v_0);
        };
        $$ccr.registerClass('SP.UI.' + $$cn);
        var $$dict_5 = SP.UI.GroupRenderData.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return SP.UI[$$cn];
}
SP.UI.GroupRenderData.prototype = {
    groupInfo: null
}


SP.UI.TableDrawThrottle = function SP_UI_TableDrawThrottle($p0) {
    this.$$d_$A1_0 = Function.createDelegate(this, this.$A1_0);
    this.$24_0 = [];
    this.$1D_0 = [];
    this.$3g_0 = $p0;
}
SP.UI.TableDrawThrottle.$$ = function SP_UI_TableDrawThrottle$$$($p0) {
    var $$cn = 'TableDrawThrottle' + '$1' + '$' + $p0.getName().replace(/\./g, '_');
    if (!SP.UI[$$cn]) {
        var $$ccr = SP.UI[$$cn] = function() {ULSPOJ:;
            (this.$$gta = this.$$gta || {})['SP.UI.TableDrawThrottle'] = {'T': $p0};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            SP.UI.TableDrawThrottle.apply(this, $v_0);
        };
        $$ccr.registerClass('SP.UI.' + $$cn);
        var $$dict_5 = SP.UI.TableDrawThrottle.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return SP.UI[$$cn];
}
SP.UI.TableDrawThrottle.prototype = {
    $2c_0: null,
    $3g_0: null,
    $4o_0: 0,
    
    draw: function SP_UI_TableDrawThrottle$draw($p0, $p1, $p2) {
        if (!this.$3g_0.get_redrawInProgress()) {
            this.$2c_0 = null;
            this.$24_0 = [];
            Array.add(this.$24_0, $p2);
            this.$3g_0.$BP_2($p0, $p1, this.$$d_$A1_0);
        }
        else {
            if ($p1) {
                this.$4o_0 = $p1;
            }
            this.$2c_0 = $p0;
            Array.add(this.$1D_0, $p2);
        }
    },
    
    $A1_0: function SP_UI_TableDrawThrottle$$A1_0() {ULSPOJ:;
        for (var $v_0 = 0; $v_0 < this.$24_0.length; $v_0++) {
            var $v_1 = this.$24_0[$v_0];
            $v_1();
        }
        if (this.$2c_0) {
            this.$24_0 = this.$1D_0;
            this.$1D_0 = [];
            this.$3g_0.$BP_2(this.$2c_0, this.$4o_0, this.$$d_$A1_0);
            this.$4o_0 = 0;
            this.$2c_0 = null;
        }
    }
}


SP.UI.TableRenderUtilities = function SP_UI_TableRenderUtilities() {
}
SP.UI.TableRenderUtilities.getBoundControl = function SP_UI_TableRenderUtilities$getBoundControl(element) {ULSPOJ:;
    if (!element) {
        return null;
    }
    return SP.UI.Utilities.getNamedProperty(SP.UI.TaskControl, element, 'boundControl');
}
SP.UI.TableRenderUtilities.setBoundControl = function SP_UI_TableRenderUtilities$setBoundControl(element, control) {ULSPOJ:;
    SP.UI.Utilities.setNamedProperty(element, 'boundControl', control);
}
SP.UI.TableRenderUtilities.disposeBoundControl = function SP_UI_TableRenderUtilities$disposeBoundControl(element) {ULSPOJ:;
    delete element.boundControl;
}


SP.UI.TableResizeManager = function SP_UI_TableResizeManager(containerElement, columnSizer) {ULSPOJ:;
    SP.UI.TableResizeManager.initializeBase(this);
    this.$D_1 = containerElement;
    this.$5Q_1 = columnSizer;
}
SP.UI.TableResizeManager.prototype = {
    $D_1: null,
    $5Q_1: null,
    
    onResize: function SP_UI_TableResizeManager$onResize() {ULSPOJ:;
        var $v_0 = this.$D_1.offsetWidth;
        if ($v_0 > 0) {
            this.$5Q_1.distributeAvailableWidth($v_0);
            SP.UI.DebugConsole.log('TableResizeManager.OnResize : Available width ' + $v_0.toString());
        }
    }
}


SP.UI.TaskListTable = function SP_UI_TaskListTable(parentElement, headerControl, groupingControlFactory, rowControlFactory, columnManager, notifyObject, allowGrouping) {ULSPOJ:;
    this.$$d_$9o_5 = Function.createDelegate(this, this.$9o_5);
    SP.UI.TaskListTable.initializeBase(this, [ parentElement, headerControl, groupingControlFactory, rowControlFactory, columnManager, notifyObject ]);
    this.$36_5 = allowGrouping;
    this.$t_5 = columnManager;
    this.$i_5 = new SP.UI.TaskInlineEditControl(notifyObject);
    this.$i_5.render();
    this.$i_5.$1_0.style.position = 'absolute';
    SP.UI.DomUtilities.hide(this.$i_5.$1_0);
    this.get_bodyElement().appendChild(this.$i_5.$1_0);
    this.$N_5 = notifyObject;
    this.$7_5 = new SP.UI.InlineEditManager(this.$t_5);
    this.$7_5.add_lostFocus(this.$$d_$9o_5);
}
SP.UI.TaskListTable.prototype = {
    $1k_5: null,
    $2I_5: 0,
    $5m_5: false,
    $36_5: false,
    $t_5: null,
    $i_5: null,
    $N_5: null,
    $7_5: null,
    $2D_5: null,
    
    get_isSorted: function SP_UI_TaskListTable$get_isSorted() {ULSPOJ:;
        return this.$5m_5;
    },
    set_isSorted: function SP_UI_TaskListTable$set_isSorted(value) {ULSPOJ:;
        this.$5m_5 = value;
        this.$A0_5();
        return value;
    },
    
    get_taskListType: function SP_UI_TaskListTable$get_taskListType() {ULSPOJ:;
        return this.$2I_5;
    },
    set_taskListType: function SP_UI_TaskListTable$set_taskListType(value) {ULSPOJ:;
        this.$2I_5 = value;
        return value;
    },
    
    get_isGrouped: function SP_UI_TaskListTable$get_isGrouped() {ULSPOJ:;
        return this.$36_5 && SP.UI.SharedComponentManager.$5.get_isGrouped();
    },
    
    get_entryControl: function SP_UI_TaskListTable$get_entryControl() {ULSPOJ:;
        return this.$i_5;
    },
    
    get_editManager: function SP_UI_TaskListTable$get_editManager() {ULSPOJ:;
        return this.$7_5;
    },
    
    get_canReassignFocus: function SP_UI_TaskListTable$get_canReassignFocus() {ULSPOJ:;
        return !this.$7_5.get_isEditing();
    },
    
    $9o_5: function SP_UI_TaskListTable$$9o_5($p0, $p1) {
        this.$i_5.$2N_1 = !$p1.$2b_1;
        this.$7_5.endEditing(false);
        this.$i_5.$2N_1 = true;
        var $v_0 = this.get_focusedControl();
        var $v_1 = ($p1.$2b_1 === 1) ? 1 : -1;
        this.moveFocus($v_1, false, false);
        if ($v_0 !== this.get_focusedControl() && this.$65_5(this.get_focusedControl())) {
            if ($p1.$2m_1) {
                this.$i_5.setTaskNameActive($p1.$2m_1 === 1);
            }
            this.$7_5.beginEditing(this.$i_5, this.get_focusedControl());
        }
    },
    
    onPreClick: function SP_UI_TaskListTable$onPreClick(domEvent) {ULSPOJ:;
        SP.UI.SelectableTable.prototype.onPreClick.call(this, domEvent);
        if (this.$7_5.get_isEditing()) {
            this.$7_5.endEditing(false);
        }
    },
    
    onFocusChanged: function SP_UI_TaskListTable$onFocusChanged() {ULSPOJ:;
        SP.UI.SelectableTable.prototype.onFocusChanged.call(this);
        if (this.$7_5.get_isEditing() && this.$7_5.$g_0 !== this.get_focusedControl()) {
            this.$7_5.endEditing(false);
            if (this.$65_5(this.get_focusedControl())) {
                this.$7_5.beginEditing(this.$i_5, this.get_focusedControl());
            }
            else if (this.get_focusedControl()) {
                SP.UI.DomUtilities.focus(this.get_focusedControl().get_focusElement());
            }
        }
    },
    
    openInlineEditing: function SP_UI_TaskListTable$openInlineEditing(controlToOverlay, taskNameActive) {ULSPOJ:;
        this.$i_5.setTaskNameActive(taskNameActive);
        this.$7_5.beginEditing(this.$i_5, controlToOverlay);
    },
    
    handleFocusKeyDown: function SP_UI_TaskListTable$handleFocusKeyDown(key, shiftPressed, ctrlPressed, altPressed) {ULSPOJ:;
        if (key === 127) {
            if (!shiftPressed && !ctrlPressed && !altPressed) {
                var $v_0 = -1;
                var $v_1 = this.$N_5.getSelectedTasks();
                if (!$v_1.length) {
                    return true;
                }
                var $v_2 = new Array($v_1.length);
                for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
                    $v_2[$v_3] = $v_1[$v_3].id;
                    var $v_4 = this.getIndexByKey($v_1[$v_3].id.toString());
                    if ($v_4 > $v_0) {
                        $v_0 = $v_4;
                    }
                }
                this.$N_5.deleteTasks($v_2, null);
                this.moveFocus(1, false, false);
                if (this.get_focusedControl()) {
                    this.get_selectionManager().select(this.get_focusedControl().get_rowKey());
                }
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return SP.UI.DragAndDropTable.prototype.handleFocusKeyDown.call(this, key, shiftPressed, ctrlPressed, altPressed);
        }
    },
    
    onDragEnter: function SP_UI_TaskListTable$onDragEnter(dragInfo, source) {ULSPOJ:;
        SP.UI.DragAndDropTable.prototype.onDragEnter.call(this, dragInfo, source);
        if (source === this) {
            this.$1k_5 = document.createElement('div');
            this.$1k_5.className = 'ms-awiop-DragDropText';
            dragInfo.get_dragGlyph().appendChild(this.$1k_5);
        }
    },
    
    onDragOver: function SP_UI_TaskListTable$onDragOver(mouseLocation, dragInfo, source) {ULSPOJ:;
        SP.UI.DomUtilities.hide(this.$1k_5);
        if (!this.get_isSorted() && !this.get_isGrouped()) {
            return true;
        }
        if (this.get_isSorted() && !this.get_isGrouped()) {
            return false;
        }
        var $v_0 = false;
        if (this.get_currentGroupOver() && dragInfo) {
            var $v_1 = dragInfo.get_data();
            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = this.getControlFromKey($v_1[$v_2].toString());
                if (SP.UI.TaskControl.isInstanceOfType($v_3)) {
                    var $v_4 = $v_3;
                    var $v_5 = $v_4.$2_2;
                    if (this.get_isGrouped() && !$v_5.get_isPersonal() && $v_5.get_locationId() !== this.get_currentGroupOver().groupInfo.get_location().get_id()) {
                        SP.UI.DomUtilities.show(this.$1k_5);
                        XUI.Html.SetText(this.$1k_5, WorkManagement.Res.TaskList_DragAndDrop_ProjectTasksCannotBeMoved);
                    }
                    if ($v_5.get_isPersonal() || (!this.get_isSorted() && !this.get_isGrouped())) {
                        $v_0 = true;
                    }
                    else if (this.get_isGrouped() && !this.get_isSorted() && !$v_5.get_isPersonal() && $v_5.get_locationId() === this.get_currentGroupOver().groupInfo.get_location().get_id()) {
                        $v_0 = true;
                    }
                }
            }
        }
        return $v_0;
    },
    
    showImportantTasksHelperCallout: function SP_UI_TaskListTable$showImportantTasksHelperCallout(taskControl) {ULSPOJ:;
        if (!this.$2D_5) {
            this.$2D_5 = document.createElement('div');
            this.get_bodyElement().appendChild(this.$2D_5);
            var $v_0 = new SP.UI.EmbeddedActionManager();
            var $$t_7 = this;
            EnsureScriptFunc('callout.js', 'CalloutManager', function() {ULSPOJ:;
                $$t_7.$AE_5(taskControl);
                var $v_1 = new CalloutOptions();
                $v_1.launchPoint = $$t_7.$2D_5;
                $v_1.contentElement = $$t_7.$8p_5($v_0);
                $v_1.beakOrientation = 'leftRight';
                $v_1.ID = 'ImportantTasksHelperCallout';
                $v_1.contentWidth = 240;
                $v_1.positionAlgorithm = function($p2_0) {
                    if (SP.UI.DomUtilities.isLtr()) {
                        $p2_0.moveDownAndLeft();
                    }
                    else {
                        $p2_0.moveDownAndRight();
                    }
                };
                $v_1.onOpenedCallback = function($p2_0) {
                    $v_0.attachEvents();
                };
                $v_1.onClosingCallback = function($p2_0) {
                    SP.UI.SharedComponentManager.$5.$Y_0.$q_1.set_hasShownMarkAsImportantCallout(true);
                    SP.UI.SharedComponentManager.$5.$Y_0.savePersistedProperties(null);
                };
                var $v_2 = CalloutManager.createNew($v_1);
                $v_2.open();
            });
        }
    },
    
    $AE_5: function SP_UI_TaskListTable$$AE_5($p0) {
        var $v_0 = 10;
        var $v_1 = $p0.$1_0.offsetTop + $p0.$1_0.offsetHeight / 2;
        var $v_2 = (SP.UI.DomUtilities.isLtr()) ? SPAnimationUtility.BasicAnimator.GetLeftOffset($p0.$1_0) : SPAnimationUtility.BasicAnimator.GetRightOffset($p0.$1_0);
        var $v_3 = $v_2 + $p0.get_pinnedWidgetOffset() + $v_0;
        this.$2D_5.style.position = 'absolute';
        SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(this.$2D_5, $v_1, $v_3);
    },
    
    $8p_5: function SP_UI_TaskListTable$$8p_5($p0) {
        var $v_0 = document.createElement('div');
        var $v_1 = document.createElement('p');
        XUI.Html.SetText($v_1, WorkManagement.Res.TaskListImportantTooltip);
        var $v_2 = document.createElement('p');
        var $$t_4 = this;
        $v_2.appendChild($p0.createDivElementWithActions(WorkManagement.Res.TaskList_Notification_ImportantViewBody, [ function() {ULSPOJ:;
            SP.UI.ApiManager.get_instance().getFirstApiOfType(SP.WorkManagement.OM.MyTasksDashboard, 2).SwitchView(4, null);
        } ]));
        $v_0.appendChild($v_1);
        $v_0.appendChild($v_2);
        return $v_0;
    },
    
    onTableLostFocus: function SP_UI_TaskListTable$onTableLostFocus() {ULSPOJ:;
        SP.UI.SelectableTable.prototype.onTableLostFocus.call(this);
        if (this.$7_5.get_isEditing()) {
            this.$7_5.endEditing(false);
        }
    },
    
    onDragLeave: function SP_UI_TaskListTable$onDragLeave(dragInfo, source) {ULSPOJ:;
        SP.UI.DragAndDropTable.prototype.onDragLeave.call(this, dragInfo, source);
        dragInfo.get_dragGlyph().innerHTML = '';
        this.$1k_5 = null;
    },
    
    $65_5: function SP_UI_TaskListTable$$65_5($p0) {
        return SP.UI.IInlineEditableTaskRow.isInstanceOfType($p0);
    },
    
    $A0_5: function SP_UI_TaskListTable$$A0_5() {ULSPOJ:;
        if (this.get_isSorted()) {
            Sys.UI.DomElement.removeCssClass(this.get_element(), 'ms-awiop-reorderEnabled');
        }
        else {
            Sys.UI.DomElement.addCssClass(this.get_element(), 'ms-awiop-reorderEnabled');
        }
    }
}


SP.UI.TaskControl = function SP_UI_TaskControl(services, task) {ULSPOJ:;
    SP.UI.TaskControl.initializeBase(this, [ services ]);
    this.$2_2 = task;
}
SP.UI.TaskControl.isTaskPinned = function SP_UI_TaskControl$isTaskPinned(task) {ULSPOJ:;
    return (!!task.get_pinAge());
}
SP.UI.TaskControl.isTaskOnTimeline = function SP_UI_TaskControl$isTaskOnTimeline(task) {ULSPOJ:;
    if (task.get_isCompleted()) {
        return false;
    }
    if (task.isPropertyAvailable('CustomAttributes') && task.get_customAttributes() && task.get_customAttributes().length > 0) {
        for (var $v_0 = 0; $v_0 < task.get_customAttributes().length; $v_0++) {
            if (task.get_customAttributes()[$v_0] === SP.UI.TaskListConstants.removeFromTimelineAttribute) {
                return false;
            }
        }
    }
    return true;
}
SP.UI.TaskControl.$6B = function SP_UI_TaskControl$$6B($p0, $p1, $p2) {
    return new SP.UI.DefaultCalloutRenderer($p0, $p1, $p2);
}
SP.UI.TaskControl.deserializeCustomDataForClient = function SP_UI_TaskControl$deserializeCustomDataForClient(T, task) {ULSPOJ:;
    var $v_0 = SP.UI.DashboardExtensibilityManager.get_instance().getDashboardExtension(task);
    if ($v_0) {
        return $v_0.deserializeCustomDataForClient(T, task);
    }
    else {
        return SP.UI.SerializationUtilities.tryToDeserialize(T, task.get_serializedCustomDataForClient());
    }
}
SP.UI.TaskControl.prototype = {
    $2_2: null,
    $1b_2: null,
    $1v_2: null,
    $2n_2: null,
    $1Z_2: null,
    $3z_2: null,
    $11_2: null,
    $4g_2: null,
    
    get_rowKey: function SP_UI_TaskControl$get_rowKey() {ULSPOJ:;
        return this.$2_2.get_id().toString();
    },
    
    get_task: function SP_UI_TaskControl$get_task() {ULSPOJ:;
        return this.$2_2;
    },
    
    get_locationId: function SP_UI_TaskControl$get_locationId() {ULSPOJ:;
        return this.$2_2.get_locationId();
    },
    
    commitValues: function SP_UI_TaskControl$commitValues(taskName, dueDate, shouldTryToAnimate) {ULSPOJ:;
        var $v_0 = false;
        var $v_1 = false;
        if (taskName !== this.$2_2.get_name()) {
            this.$1v_2.setTaskLabel(taskName);
            this.$2_2.set_name(taskName);
            $v_0 = true;
        }
        var $v_2 = SP.UI.DateTimeUtilities.createDateString(this.$2_2.get_dueDate());
        if (dueDate !== $v_2) {
            this.$2n_2.updateDate(SP.UI.DateTimeUtilities.castToDateWithoutValidation(dueDate));
            this.$2_2.set_dueDate(SP.UI.DateTimeUtilities.castToDateWithoutValidation(dueDate));
            $v_1 = true;
        }
        var $v_3 = [ this.$2_2.get_id() ];
        if ($v_0 && $v_1) {
            this.$3_0.SetTaskNameAndDueDate([ this.$2_2.get_id() ], taskName, dueDate, null);
        }
        else if ($v_0) {
            this.$3_0.SetTaskName($v_3, taskName, null);
        }
        else if ($v_1) {
            this.$3_0.SetDueDate($v_3, SP.UI.DateTimeUtilities.castToDateWithoutValidation(dueDate), null);
        }
        return false;
    },
    
    updateLabels: function SP_UI_TaskControl$updateLabels(taskName, dueDate) {ULSPOJ:;
        if (taskName !== this.$2_2.get_name()) {
            this.$1v_2.setTaskLabel(taskName);
        }
        if (dueDate !== SP.UI.DateTimeUtilities.createDateString(this.$2_2.get_dueDate())) {
            this.$2n_2.updateDate(SP.UI.DateTimeUtilities.castToDateWithoutValidation(dueDate));
        }
    },
    
    get_focusElement: function SP_UI_TaskControl$get_focusElement() {ULSPOJ:;
        return this.$4g_2.get_focusableElement();
    },
    
    get_isCompleted: function SP_UI_TaskControl$get_isCompleted() {ULSPOJ:;
        return this.$11_2.get_isCompleted();
    },
    set_isCompleted: function SP_UI_TaskControl$set_isCompleted(value) {ULSPOJ:;
        if (value !== this.$11_2.get_isCompleted()) {
            this.$11_2.set_isCompleted(value);
            if (!this.$11_2.get_isAnimating()) {
                var $v_0 = SP.UI.ApiManager.get_instance().getFirstApiOfType(SP.WorkManagement.OM.MyTasksDashboard, 2);
                if (this.$11_2.get_isCompleted() && $v_0.get_CurrentView() !== 1) {
                    var $$t_2 = this;
                    this.animateStrikethrough(function() {ULSPOJ:;
                        if (!$$t_2.$11_2.get_isCompleted()) {
                            $$t_2.removeStrikethrough();
                        }
                    });
                }
                else {
                    this.removeStrikethrough();
                }
            }
        }
        return value;
    },
    
    get_isPinned: function SP_UI_TaskControl$get_isPinned() {ULSPOJ:;
        return this.$1Z_2.get_pinAge() === 1 || this.$1Z_2.get_pinAge() === 2;
    },
    set_isPinned: function SP_UI_TaskControl$set_isPinned(value) {ULSPOJ:;
        this.$1Z_2.set_pinAge((value) ? 1 : 0);
        this.$2_2.set_pinAge(this.$1Z_2.get_pinAge());
        return value;
    },
    
    get_taskNameElement: function SP_UI_TaskControl$get_taskNameElement() {ULSPOJ:;
        return this.$1v_2.$1_0;
    },
    
    get_pinnedWidgetOffset: function SP_UI_TaskControl$get_pinnedWidgetOffset() {ULSPOJ:;
        return Math.abs(SPAnimationUtility.BasicAnimator.GetLeftOffset(this.$1Z_2.$1_0) - SPAnimationUtility.BasicAnimator.GetLeftOffset(this.$1_0));
    },
    
    onSelected: function SP_UI_TaskControl$onSelected() {ULSPOJ:;
        SP.UI.RowControl.prototype.onSelected.call(this);
        var $$t_0 = this;
        SP.UI.RibbonUtilities.doActionWhenRibbonScriptsAreLoaded(function() {ULSPOJ:;
            if (SP.Ribbon.PageManager.get_instance().get_ribbon()) {
                SP.Ribbon.PageManager.get_instance().get_ribbon().selectTabById('Ribbon.AWIOP.Tasks');
                SP.Ribbon.PageManager.get_instance().get_ribbon().refresh();
            }
        });
        Sys.UI.DomElement.addCssClass(this.$1_0, SP.UI.TaskListConstants.cssTaskRowSelected);
    },
    
    onUnselected: function SP_UI_TaskControl$onUnselected() {ULSPOJ:;
        SP.UI.RowControl.prototype.onUnselected.call(this);
        Sys.UI.DomElement.removeCssClass(this.$1_0, SP.UI.TaskListConstants.cssTaskRowSelected);
    },
    
    handleFocusKeyDown: function SP_UI_TaskControl$handleFocusKeyDown(key, shiftPressed, ctrlPressed, altPressed) {ULSPOJ:;
        if (this.$3z_2.get_isCalloutOpen()) {
            return false;
        }
        if (SP.UI.RowControl.prototype.handleFocusKeyDown.call(this, key, shiftPressed, ctrlPressed, altPressed)) {
            return true;
        }
        else {
            switch (key) {
                case 113:
                    if (document.activeElement === this.$2n_2.get_focusableElement()) {
                        this.inlineEditDate();
                    }
                    else {
                        this.inlineEditName();
                    }
                    return true;
                case 45:
                    this.$1Z_2.onClick(null);
                    return true;
                case 13:
                    this.showDialog();
                    return true;
                default:
                    return false;
            }
        }
    },
    
    createWidgetForColumn: function SP_UI_TaskControl$createWidgetForColumn(info) {ULSPOJ:;
        var $v_0 = info.$J_0;
        switch ($v_0) {
            case 0:
                this.$11_2 = this.$7t_2();
                return this.$11_2;
            case 1:
                this.$1v_2 = new SP.UI.TaskNameWidget(this.$2_2, this.$3_0);
                return this.$1v_2;
            case 7:
                return new SP.UI.PersonalTaskWidget(this.$2_2, this.$3_0);
            case 3:
                this.$2n_2 = new SP.UI.TaskDueDateWidget(this.$2_2, this.$3_0);
                return this.$2n_2;
            case 4:
                this.$1Z_2 = new SP.UI.PinnedWidget(this.$2_2, this.$3_0);
                return this.$1Z_2;
            case 2:
                this.$3z_2 = new SP.UI.CalloutWidget(this.$2_2, this.$3_0);
                return this.$3z_2;
            case 5:
                this.$1b_2 = new SP.UI.ServerOperationWidget(this.$3_0);
                this.$1b_2.set_$30_2(0);
                return this.$1b_2;
            case 8:
                this.$4g_2 = new SP.UI.SelectionImageWidget(this.$3_0, this);
                return this.$4g_2;
            case 9:
                return new SP.UI.SelectionWidget(this.$3_0, this);
            default:
                return null;
        }
    },
    
    $7t_2: function SP_UI_TaskControl$$7t_2() {ULSPOJ:;
        var $v_0 = SP.UI.DashboardExtensibilityManager.get_instance().getDashboardExtension(this.$2_2);
        if ($v_0) {
            return $v_0.createCheckBoxWidget(this.$2_2, this.$3_0);
        }
        else {
            return new SP.UI.CheckBoxWidget(this.$2_2, this.$3_0);
        }
    },
    
    updateTask: function SP_UI_TaskControl$updateTask(task) {ULSPOJ:;
        this.$2_2 = task;
        this.$3_0.get_taskListTable().updateData(task.get_id().toString(), task);
        for (var $$arr_1 = this.get_widgets(), $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if (SP.UI.INotifyTaskUpdate.isInstanceOfType($v_0)) {
                var $v_1 = $v_0;
                $v_1.onTaskUpdate(task);
            }
        }
    },
    
    showDialog: function SP_UI_TaskControl$showDialog() {ULSPOJ:;
        SP.UI.Utilities.showTaskDetailsDialog(this.$2_2.get_editUrl(), this.$2_2.get_id());
    },
    
    inlineEditName: function SP_UI_TaskControl$inlineEditName() {ULSPOJ:;
        this.$3_0.get_taskListTable().openInlineEditing(this, true);
    },
    
    inlineEditDate: function SP_UI_TaskControl$inlineEditDate() {ULSPOJ:;
        this.$3_0.get_taskListTable().openInlineEditing(this, false);
    },
    
    get_isDraggable: function SP_UI_TaskControl$get_isDraggable() {ULSPOJ:;
        return true;
    },
    
    renderRow: function SP_UI_TaskControl$renderRow() {ULSPOJ:;
        SP.UI.WidgetRowControl.prototype.renderRow.call(this);
        Sys.UI.DomElement.addCssClass(this.$1_0, SP.UI.TaskListConstants.cssItmHover);
        this.$1_0.style.cursor = 'inherit';
    },
    
    showPendingServerOperation: function SP_UI_TaskControl$showPendingServerOperation() {ULSPOJ:;
        this.$1b_2.set_$30_2(1);
    },
    
    hidePendingServerOperation: function SP_UI_TaskControl$hidePendingServerOperation() {ULSPOJ:;
        this.$1b_2.set_$30_2(0);
    },
    
    showServerError: function SP_UI_TaskControl$showServerError(errorText) {ULSPOJ:;
        this.$1b_2.set_$30_2(2);
        this.$1b_2.set_toolTip(errorText);
    },
    
    clearServerError: function SP_UI_TaskControl$clearServerError() {ULSPOJ:;
        this.$1b_2.set_$30_2(0);
    },
    
    animateStrikethrough: function SP_UI_TaskControl$animateStrikethrough(fnComplete) {ULSPOJ:;
        this.$11_2.set_isAnimating(true);
        var $$t_1 = this;
        this.$1v_2.animateStrikethrough(function() {ULSPOJ:;
            $$t_1.$11_2.set_isAnimating(false);
            if (fnComplete) {
                fnComplete();
            }
        });
    },
    
    removeStrikethrough: function SP_UI_TaskControl$removeStrikethrough() {ULSPOJ:;
        this.$1v_2.removeStrikethrough();
    }
}


SP.UI.TaskGroupingFooterControl = function SP_UI_TaskGroupingFooterControl(services, taskGroupInfo) {ULSPOJ:;
    SP.UI.TaskGroupingFooterControl.initializeBase(this, [ services ]);
    this.$K_1 = taskGroupInfo;
}
SP.UI.TaskGroupingFooterControl.prototype = {
    $K_1: null,
    
    get_enabled: function SP_UI_TaskGroupingFooterControl$get_enabled() {ULSPOJ:;
        return false;
    },
    
    get_rowKey: function SP_UI_TaskGroupingFooterControl$get_rowKey() {ULSPOJ:;
        return SP.UI.Table.$$(SP.WorkManagement.OM.Task).$BR(this.$K_1);
    },
    
    get_locationId: function SP_UI_TaskGroupingFooterControl$get_locationId() {ULSPOJ:;
        return this.$K_1.get_location().get_id();
    },
    
    renderRow: function SP_UI_TaskGroupingFooterControl$renderRow() {ULSPOJ:;
        SP.UI.RowControl.prototype.renderRow.call(this);
        Sys.UI.DomElement.addCssClass(this.$1_0, 'ms-awiop-groupFooter');
    }
}


SP.UI.TaskGroupingHeaderControl = function SP_UI_TaskGroupingHeaderControl(services, taskGroupInfo) {ULSPOJ:;
    SP.UI.TaskGroupingHeaderControl.initializeBase(this, [ services ]);
    this.$K_1 = taskGroupInfo;
}
SP.UI.TaskGroupingHeaderControl.prototype = {
    $K_1: null,
    $2A_1: null,
    $4C_1: null,
    $X_1: null,
    $U_1: null,
    $32_1: false,
    
    get_rowKey: function SP_UI_TaskGroupingHeaderControl$get_rowKey() {ULSPOJ:;
        return SP.UI.Table.$$(SP.WorkManagement.OM.Task).$3q(this.$K_1);
    },
    
    get_locationId: function SP_UI_TaskGroupingHeaderControl$get_locationId() {ULSPOJ:;
        return this.$K_1.get_location().get_id();
    },
    
    get_focusElement: function SP_UI_TaskGroupingHeaderControl$get_focusElement() {ULSPOJ:;
        return this.$X_1;
    },
    
    get_addExtraPadding: function SP_UI_TaskGroupingHeaderControl$get_addExtraPadding() {ULSPOJ:;
        return this.$32_1;
    },
    set_addExtraPadding: function SP_UI_TaskGroupingHeaderControl$set_addExtraPadding(value) {ULSPOJ:;
        this.$32_1 = value;
        return value;
    },
    
    onClick: function SP_UI_TaskGroupingHeaderControl$onClick(targetElement) {ULSPOJ:;
        if (targetElement !== this.$U_1) {
            this.$5G_1();
        }
        return true;
    },
    
    handleFocusKeyDown: function SP_UI_TaskGroupingHeaderControl$handleFocusKeyDown(key, shiftPressed, ctrlPressed, altPressed) {ULSPOJ:;
        if (!shiftPressed && !ctrlPressed && !altPressed) {
            if ((key === 37 && this.$K_1.get_expanded()) || (key === 39 && !this.$K_1.get_expanded())) {
                this.$5G_1();
                return true;
            }
            else if (key === 13) {
                if (document.activeElement === this.$X_1) {
                    this.$5G_1();
                    return true;
                }
                else if (document.activeElement === this.$U_1) {
                    this.$U_1.click();
                    return true;
                }
                else {
                }
            }
        }
        return SP.UI.RowControl.prototype.handleFocusKeyDown.call(this, key, shiftPressed, ctrlPressed, altPressed);
    },
    
    renderRow: function SP_UI_TaskGroupingHeaderControl$renderRow() {ULSPOJ:;
        SP.UI.AriaUtilities.setAriaExpanded(this.$1_0, true);
        this.$4C_1 = new SP.UI.ImageControl(SP.UI.TaskListConstants.get_sharePointCommonThemedImage());
        this.$2A_1 = document.createElement('div');
        var $v_0 = this.$83_1();
        this.$2A_1.appendChild($v_0);
        var $v_1 = this.$84_1();
        this.$2A_1.appendChild($v_1);
        this.$2A_1.className = 'ms-awiop-groupContents';
        this.$1_0.className = 'ms-awiop-groupHeader';
        this.$1_0.appendChild(this.$2A_1);
        if (this.$32_1) {
            Sys.UI.DomElement.addCssClass(this.$1_0, 'ms-awiop-extraMargin');
        }
        this.$7A_1(this.$K_1.get_expanded());
        SP.UI.RowControl.prototype.renderRow.call(this);
    },
    
    $83_1: function SP_UI_TaskGroupingHeaderControl$$83_1() {ULSPOJ:;
        this.$X_1 = document.createElement('span');
        this.$X_1.appendChild(this.$4C_1.get_element());
        this.$X_1.setAttribute('style', SP.UI.ConstantsImage.groupingStyle);
        this.$X_1.tabIndex = 0;
        return this.$X_1;
    },
    
    $84_1: function SP_UI_TaskGroupingHeaderControl$$84_1() {ULSPOJ:;
        var $v_0 = document.createElement('span');
        $v_0.className = 'ms-textLarge';
        if (this.$K_1.get_location() && this.$K_1.get_location().isPropertyAvailable('Url') && !SP.ScriptUtility.isNullOrEmptyString(this.$K_1.get_location().get_url())) {
            this.$U_1 = document.createElement('a');
            SP.UI.DomUtilities.setText(this.$U_1, this.$K_1.get_groupName());
            this.$U_1.href = this.$K_1.get_location().get_url();
            this.$U_1.className = 'ms-awiop-GroupHeaderLink';
            $v_0.appendChild(this.$U_1);
        }
        else {
            SP.UI.DomUtilities.setText($v_0, this.$K_1.get_groupName());
            Sys.UI.DomElement.addCssClass($v_0, 'ms-awiop-GroupHeaderNoLink');
        }
        SP.UI.DomUtilities.setMarginLeftIntl($v_0, SP.UI.TaskListConstants.expandRowMargin);
        return $v_0;
    },
    
    $5G_1: function SP_UI_TaskGroupingHeaderControl$$5G_1() {ULSPOJ:;
        SP.UI.DebugConsole.log('TaskGroupingHeaderControl.ToggleExpanded');
        var $v_0 = !this.$K_1.get_expanded();
        if ($v_0) {
            this.$3_0.ExpandGroup(this.$K_1.get_groupName(), null);
        }
        else {
            this.$3_0.CollapseGroup(this.$K_1.get_groupName(), null);
        }
        this.$7A_1($v_0);
    },
    
    $7A_1: function SP_UI_TaskGroupingHeaderControl$$7A_1($p0) {
        this.$K_1.set_expanded($p0);
        this.$4C_1.set_imageStyle(this.$8l_1($p0));
        SP.UI.AriaUtilities.setAriaExpanded(this.$2A_1, $p0);
    },
    
    $8l_1: function SP_UI_TaskGroupingHeaderControl$$8l_1($p0) {
        if (SP.UI.DomUtilities.isLtr()) {
            return ($p0) ? SP.UI.ConstantsImage.groupingCollapse : SP.UI.ConstantsImage.groupingExpand;
        }
        else {
            return ($p0) ? SP.UI.ConstantsImage.groupingCollapseRtl : SP.UI.ConstantsImage.groupingExpandRtl;
        }
    }
}


SP.UI.SortingEventArgs = function SP_UI_SortingEventArgs() {ULSPOJ:;
    SP.UI.SortingEventArgs.initializeBase(this);
}
SP.UI.SortingEventArgs.prototype = {
    $O_1: 0,
    $c_1: 0,
    
    get_sortField: function SP_UI_SortingEventArgs$get_sortField() {ULSPOJ:;
        return this.$O_1;
    },
    set_sortField: function SP_UI_SortingEventArgs$set_sortField(value) {ULSPOJ:;
        this.$O_1 = value;
        return value;
    },
    
    get_sortOrder: function SP_UI_SortingEventArgs$get_sortOrder() {ULSPOJ:;
        return this.$c_1;
    },
    set_sortOrder: function SP_UI_SortingEventArgs$set_sortOrder(value) {ULSPOJ:;
        this.$c_1 = value;
        return value;
    }
}


SP.UI.TaskListControl = function SP_UI_TaskListControl(type, timelineDataSource, allowGrouping, initialPopulationJson, hidden) {ULSPOJ:;
    this.$$d_$9l_0 = Function.createDelegate(this, this.$9l_0);
    this.$$d_$8O_0 = Function.createDelegate(this, this.$8O_0);
    this.$$d_$9Y_0 = Function.createDelegate(this, this.$9Y_0);
    this.$$d_$9Z_0 = Function.createDelegate(this, this.$9Z_0);
    this.$3J_0 = {};
    this.$3S_0 = {};
    this.$1w_0 = new (SP.UI.List.$$(SP.WorkManagement.OM.Task))();
    this.$5T_0 = new SP.UI.AsyncJobManager();
    this.$6_0 = new Sys.EventHandlerList();
    this.$5c_0 = new SP.UI.FriendlyDateComponent(SP.UI.SharedComponentManager.$5.$1i_0);
    this.$21_0 = 0;
    this.get_Name = this.get_name;
    this.get_TaskListType = this.get_taskListType;
    this.get_IsCreateNewTaskAllowed = this.get_isCreateNewTaskAllowed;
    this.get_IsGrouped = this.get_isGrouped;
    this.get_IsSorted = this.get_isSorted;
    this.get_SortField = this.get_sortField;
    this.get_SortOrder = this.get_sortOrder;
    this.CollapseGroup = this.collapseGroup;
    this.ExpandGroup = this.expandGroup;
    this.GetTasksInView = this.getTasksInView;
    this.GetGroupsInView = this.getGroupsInView;
    this.GetSelectedTasks = this.getSelectedTasks;
    this.DragTasks = this.dragTasks;
    this.SetSelectedTasks = this.setSelectedTasks;
    this.SetCompleted = this.setCompleted;
    this.SetTaskName = this.setTaskName;
    this.SetTaskNameAndDueDate = this.setTaskNameAndDueDate;
    this.SetPinned = this.setPinned;
    this.AddToTimeline = this.addToTimeline;
    this.RemoveFromTimeline = this.removeFromTimeline;
    this.IsOnTimeline = this.isOnTimeline;
    this.SetDueDate = this.setDueDate;
    this.OpenPersonalTaskDialog = this.openPersonalTaskDialog;
    this.DeleteTasks = this.deleteTasks;
    this.GetCompleted = this.getCompleted;
    this.GetTaskName = this.getTaskName;
    this.GetPinned = this.getPinned;
    this.GetDueDate = this.getDueDate;
    this.InlineEditName = this.inlineEditName;
    this.SetSorting = this.setSorting;
    this.$T_0 = type;
    this.$1e_0 = timelineDataSource;
    this.$1s_0 = new SP.UI.TaskQueryBuilder(type);
    this.$5K_0 = this.$T_0 !== 2 && this.$T_0 !== 5;
    this.$36_0 = allowGrouping;
    this.$4J_0 = initialPopulationJson;
    this.$5R_0 = new SP.UI.CompletionComponent(this);
    this.$2W_0 = hidden;
    Sys.Application.registerDisposableObject(this);
}
SP.UI.TaskListControl.get_$9P = function SP_UI_TaskListControl$get_$9P() {ULSPOJ:;
    var $v_0 = SP.UI.SharedComponentManager.$5.get_locations();
    return !!$v_0 && $v_0.length === 1;
}
SP.UI.TaskListControl.$4y = function SP_UI_TaskListControl$$4y($p0) {
    var $v_0 = new SP.WorkManagement.OM.TaskInfo();
    $v_0.id = $p0.get_id();
    $v_0.editUrl = $p0.get_editUrl();
    $v_0.name = $p0.get_name();
    $v_0.pinned = SP.UI.TaskControl.isTaskPinned($p0);
    $v_0.completed = $p0.get_isCompleted();
    $v_0.dueDate = $p0.get_dueDate();
    $v_0.addToTimeline = SP.UI.TaskControl.isTaskOnTimeline($p0);
    return $v_0;
}
SP.UI.TaskListControl.$9R = function SP_UI_TaskListControl$$9R($p0, $p1) {
    return $p0 === $p1.get_locationId();
}
SP.UI.TaskListControl.copyTask = function SP_UI_TaskListControl$copyTask(sourceTask, destTask) {ULSPOJ:;
    destTask.set_description(sourceTask.get_description());
    destTask.set_dueDate(sourceTask.get_dueDate());
    destTask.set_startDate(sourceTask.get_startDate());
    destTask.set_customAttributes(sourceTask.get_customAttributes());
    destTask.set_editUrl(sourceTask.get_editUrl());
    destTask.set_id(sourceTask.get_id());
    destTask.set_isCompleted(sourceTask.get_isCompleted());
    destTask.set_lastModified(sourceTask.get_lastModified());
    destTask.set_isReadOnly(sourceTask.get_isReadOnly());
    destTask.set_isPersonal(sourceTask.get_isPersonal());
    destTask.set_locationId(sourceTask.get_locationId());
    destTask.set_name(sourceTask.get_name());
    destTask.set_pinAge(sourceTask.get_pinAge());
    destTask.set_serializedCustomDataForClient(sourceTask.get_serializedCustomDataForClient());
}
SP.UI.TaskListControl.prototype = {
    $d_0: null,
    $H_0: null,
    $1X_0: null,
    $4_0: null,
    $5f_0: false,
    $5K_0: false,
    $T_0: 0,
    $r_0: null,
    $2P_0: null,
    $1s_0: null,
    $1e_0: null,
    $49_0: true,
    $5R_0: null,
    $t_0: null,
    $36_0: false,
    $4J_0: null,
    $2W_0: false,
    
    get_$6z_0: function SP_UI_TaskListControl$get_$6z_0() {ULSPOJ:;
        var $v_0 = 0;
        if (this.get_isGrouped() && this.get_isSorted()) {
            $v_0 = 4;
        }
        else if (!this.get_isGrouped() && this.get_isSorted()) {
            $v_0 = 3;
        }
        else if (this.get_isGrouped() && !this.get_isSorted()) {
            $v_0 = 2;
        }
        else if (!this.get_isGrouped() && !this.get_isSorted()) {
            $v_0 = 1;
        }
        return $v_0;
    },
    
    render: function SP_UI_TaskListControl$render() {ULSPOJ:;
        var $v_0 = document.createElement('div');
        this.$d_0 = document.createElement('div');
        this.$d_0.style.height = '100%';
        this.$d_0.style.position = 'relative';
        $v_0.appendChild(this.$d_0);
        this.$8G_0();
        this.$7p_0(this.$d_0);
        this.$d_0.appendChild(this.$4_0.get_element());
        this.$8B_0();
        this.$d_0.style.width = '100%';
        this.$d_0.parentNode.style.maxWidth = SP.UI.TaskListConstants.taskListMaxWidth;
        var $$t_1 = this;
        SP.UI.TimeoutWrapper.setTimeout(function() {ULSPOJ:;
            $$t_1.$9N_0();
        }, 0);
        return $v_0;
    },
    
    $8B_0: function SP_UI_TaskListControl$$8B_0() {ULSPOJ:;
        this.$1X_0 = new SP.UI.ListNotificationControl();
        this.$d_0.appendChild(this.$1X_0.get_element());
        this.$1X_0.set_visible(false);
    },
    
    $7p_0: function SP_UI_TaskListControl$$7p_0($p0) {
        switch (this.$T_0) {
            case 1:
                this.$H_0 = new SP.UI.ImportantAttractModeControl(this.$$d_$9Z_0, this.$$d_$9Y_0);
                break;
            case 6:
                this.$H_0 = new SP.UI.ActiveAttractModeControl(this.$$d_$9Y_0);
                break;
        }
        if (this.$H_0) {
            $p0.appendChild(this.$H_0.get_element());
            this.$H_0.set_visible(false);
        }
    },
    
    $B4_0: function SP_UI_TaskListControl$$B4_0() {ULSPOJ:;
        if (this.$H_0 && !this.$H_0.get_visible()) {
            this.$H_0.show(null);
            this.$4_0.set_visible(false);
        }
    },
    
    $6Z_0: function SP_UI_TaskListControl$$6Z_0() {ULSPOJ:;
        if (this.$H_0 && this.$H_0.get_visible()) {
            this.$4_0.set_visible(true);
            var $$t_0 = this;
            SP.UI.AnimationUtilities.ensureAnimationScriptsAreLoaded(function() {ULSPOJ:;
                SPAnimationUtility.BasicAnimator.FadeIn($$t_0.$4_0.get_element(), null, null);
                $$t_0.$4_0.resize();
                $$t_0.$H_0.hide(function() {ULSPOJ:;
                    SPAnimationUtility.BasicAnimator.Resize($$t_0.$d_0, $$t_0.$4_0.get_element().offsetHeight, null, function() {ULSPOJ:;
                        $$t_0.$d_0.style.height = '';
                    }, null);
                });
            });
        }
    },
    
    $9Z_0: function SP_UI_TaskListControl$$9Z_0() {ULSPOJ:;
        SP.UI.ApiManager.get_instance().getFirstApiOfType(SP.WorkManagement.OM.MyTasksDashboard, 2).SwitchView(0, null);
    },
    
    $9Y_0: function SP_UI_TaskListControl$$9Y_0() {ULSPOJ:;
        this.$6Z_0();
        for (var $v_0 = 0; $v_0 < this.$4_0.get_rowData().get_length(); $v_0++) {
            var $v_1 = this.$4_0.get_rowData().get_item($v_0);
            if (SP.UI.NewTaskControl.isInstanceOfType($v_1)) {
                var $v_2 = $v_1;
                $v_2.openNewTask();
                break;
            }
        }
    },
    
    get_name: function SP_UI_TaskListControl$get_name() {ULSPOJ:;
        return null;
    },
    
    get_taskListType: function SP_UI_TaskListControl$get_taskListType() {ULSPOJ:;
        return this.$T_0;
    },
    
    get_isCreateNewTaskAllowed: function SP_UI_TaskListControl$get_isCreateNewTaskAllowed() {ULSPOJ:;
        return this.$5K_0;
    },
    
    get_isGrouped: function SP_UI_TaskListControl$get_isGrouped() {ULSPOJ:;
        return this.$4_0.get_isGrouped();
    },
    
    get_showAddControl: function SP_UI_TaskListControl$get_showAddControl() {ULSPOJ:;
        return this.$T_0 !== 2 && this.$T_0 !== 9 && this.$T_0 !== 5;
    },
    
    get_isSorted: function SP_UI_TaskListControl$get_isSorted() {ULSPOJ:;
        return this.$1s_0.get_$6k_0();
    },
    
    get_animationStrategy: function SP_UI_TaskListControl$get_animationStrategy() {ULSPOJ:;
        return this.$21_0;
    },
    set_animationStrategy: function SP_UI_TaskListControl$set_animationStrategy(value) {ULSPOJ:;
        this.$21_0 = value;
        return value;
    },
    
    $9N_0: function SP_UI_TaskListControl$$9N_0() {ULSPOJ:;
        var $v_0 = this.$6E_0();
        var $v_1 = this.$AC_0();
        var $v_2 = $v_0.$6S_0($v_1);
        this.$6v_0($v_2, null);
        if (this.$1e_0) {
            this.$7D_0(new Array(0), this.$6W_0());
        }
    },
    
    $AC_0: function SP_UI_TaskListControl$$AC_0() {ULSPOJ:;
        var $v_0 = new Array(this.$4J_0.length);
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            $v_0[$v_1] = SP.WorkManagement.OM.Task.newObject(SP.UI.CsomUtilities.createDefaultClientRuntimeContext());
            $v_0[$v_1].fromJson(this.$4J_0[$v_1]);
            if ($v_0[$v_1].get_startDate()) {
                $v_0[$v_1].set_startDate(SP.UI.SerializationUtilities.deserializeDate($v_0[$v_1].get_startDate().toString()));
            }
            if ($v_0[$v_1].get_dueDate()) {
                $v_0[$v_1].set_dueDate(SP.UI.SerializationUtilities.deserializeDate($v_0[$v_1].get_dueDate().toString()));
            }
            if (SP.UI.Utilities.isNullOrNoValue($v_0[$v_1].get_locationId())) {
                $v_0[$v_1].set_locationId(SP.UI.TaskListConstants.noValue);
            }
        }
        return $v_0;
    },
    
    batchRefreshOnDataProvider: function SP_UI_TaskListControl$batchRefreshOnDataProvider(dp, callback) {ULSPOJ:;
        var $v_0 = null;
        if (this.$1e_0) {
            $v_0 = this.$52_0();
        }
        var $v_1 = this.$1s_0.$7a_0(SP.UI.SharedComponentManager.$5.$2r_0, SP.UI.SharedComponentManager.$5.get_locations(), SP.UI.SharedComponentManager.$5.$2i_0, dp.$92_0());
        var $v_2 = SP.UI.SessionBuilder.$1J(this.get_isGrouped(), this.get_isSorted(), dp.$90_0());
        var $v_3 = $v_2.$AK_0($v_1);
        var $$t_8 = this;
        dp.appendAdditionalNotification(function($p1_0, $p1_1) {
            if ($p1_0) {
                $$t_8.$AP_0($$t_8.$7l_0($v_3), callback);
                if ($$t_8.$1e_0) {
                    $$t_8.$7D_0($v_0, $$t_8.$6W_0());
                }
            }
            else {
                $$t_8.$AO_0($p1_1[0]);
            }
            SP.WorkManagement.OM.JsApiUtils.notifyStateUpdated($$t_8);
        });
    },
    
    $7l_0: function SP_UI_TaskListControl$$7l_0($p0) {
        var $v_0 = new Array($p0.get_count());
        for (var $v_1 = 0; $v_1 < $p0.get_count(); $v_1++) {
            $v_0[$v_1] = ($p0).get_item($v_1);
        }
        return $v_0;
    },
    
    $AP_0: function SP_UI_TaskListControl$$AP_0($p0, $p1) {
        var $v_0 = this.$6E_0();
        SP.UI.BWSAManager.updateDataPointForTaskList(this.$T_0, $v_0.$8e_0($p0));
        this.$6v_0($v_0.$6S_0($p0), $p1);
    },
    
    $6E_0: function SP_UI_TaskListControl$$6E_0() {ULSPOJ:;
        if (this.get_isGrouped()) {
            return new SP.UI.GroupedQueryResultProcessor();
        }
        else {
            return new SP.UI.FlatQueryResultProcessor(SP.UI.TaskListControl.get_$9P());
        }
    },
    
    $7D_0: function SP_UI_TaskListControl$$7D_0($p0, $p1) {
        var $v_0 = [];
        for (var $v_2 = 0; $v_2 < $p0.length; $v_2++) {
            var $v_3 = $p0[$v_2];
            if (!SP.UI.DictionaryUtilities.containKey($p1, $v_3.get_id().toString())) {
                Array.add($v_0, $v_3);
            }
        }
        var $v_1 = new SP.UI.UpdateTimelineAsyncJob(SP.UI.DictionaryUtilities.toArray(SP.WorkManagement.OM.Task, $p1), $v_0, this.$1e_0, this);
        this.$5T_0.addAsyncJob($v_1);
    },
    
    inlineEditName: function SP_UI_TaskListControl$inlineEditName(taskId) {ULSPOJ:;
        var $v_0 = this.$4_0.getControlFromKey(taskId.toString());
        this.$4_0.get_selectionManager().clearSelection();
        this.$4_0.get_selectionManager().select($v_0.get_rowKey());
        $v_0.inlineEditName();
    },
    
    getTasksInView: function SP_UI_TaskListControl$getTasksInView() {ULSPOJ:;
        var $v_0 = this.$52_0();
        var $v_1 = [];
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            Array.add($v_1, SP.UI.TaskListControl.$4y($v_0[$v_2]));
        }
        return $v_1;
    },
    
    $52_0: function SP_UI_TaskListControl$$52_0() {ULSPOJ:;
        var $v_0 = [];
        for (var $v_1 = 0; $v_1 < this.$4_0.get_rowData().get_length(); $v_1++) {
            var $v_2 = this.$4_0.get_rowData().get_item($v_1).get_rowKey();
            var $v_3 = this.$4_0.getDataFromKey($v_2);
            if ($v_3) {
                Array.add($v_0, $v_3);
            }
        }
        return $v_0;
    },
    
    $6W_0: function SP_UI_TaskListControl$$6W_0() {ULSPOJ:;
        var $v_0 = {};
        var $v_1 = this.$52_0();
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            if (SP.UI.TaskControl.isTaskOnTimeline($v_1[$v_2])) {
                $v_0[$v_1[$v_2].get_id().toString()] = $v_1[$v_2];
            }
        }
        return $v_0;
    },
    
    getSelectedTasks: function SP_UI_TaskListControl$getSelectedTasks() {ULSPOJ:;
        var $v_0 = [];
        var $v_1 = this.$4_0.get_selectionManager().getSelectedItems();
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = this.$4_0.getControlFromKey($v_1[$v_2]);
            if (SP.UI.TaskControl.isInstanceOfType($v_3)) {
                var $v_4 = $v_3;
                var $v_5 = SP.UI.TaskListControl.$4y($v_4.$2_2);
                Array.add($v_0, $v_5);
            }
        }
        return $v_0;
    },
    
    getTaskById: function SP_UI_TaskListControl$getTaskById(taskId) {ULSPOJ:;
        return this.$4_0.getDataFromKey(taskId.toString());
    },
    
    $54_0: function SP_UI_TaskListControl$$54_0($p0) {
        return this.$4_0.getControlFromKey($p0.toString());
    },
    
    getPinned: function SP_UI_TaskListControl$getPinned(taskId) {ULSPOJ:;
        var $v_0 = this.getTaskById(taskId);
        return (SP.UI.TaskControl.isTaskPinned($v_0)) ? 0 : 1;
    },
    
    setSelectedTasks: function SP_UI_TaskListControl$setSelectedTasks(taskIds) {ULSPOJ:;
        this.$4_0.get_selectionManager().clearSelection();
        for (var $v_0 = 0; $v_0 < taskIds.length; $v_0++) {
            var $v_1 = taskIds[$v_0];
            this.$4_0.get_selectionManager().select($v_1.toString());
        }
    },
    
    setCompleted: function SP_UI_TaskListControl$setCompleted(taskIds, completed, callback) {ULSPOJ:;
        for (var $v_0 = 0; $v_0 < taskIds.length; $v_0++) {
            var $v_1 = this.$4_0.getControlFromKey(taskIds[$v_0].toString());
            if ($v_1) {
                $v_1.set_isCompleted((!completed) ? true : false);
                this.$5R_0.register($v_1, callback);
            }
        }
    },
    
    setTaskNameAndDueDate: function SP_UI_TaskListControl$setTaskNameAndDueDate(taskIds, name, dueDate, fnCallback) {ULSPOJ:;
        var $$t_9 = this;
        this.$1L_0(taskIds, fnCallback, function($p1_0, $p1_1, $p1_2) {
            var $v_0 = $p1_1.updateTaskInfo($p1_0, 21, name);
            var $v_1 = $p1_1.updateTaskInfo($p1_0, 5, dueDate);
            $p1_2[$p1_0.toString()] = [ $v_0, $v_1 ];
        }, null);
    },
    
    setTaskName: function SP_UI_TaskListControl$setTaskName(taskIds, name, callback) {ULSPOJ:;
        var $$t_7 = this;
        this.$1L_0(taskIds, callback, function($p1_0, $p1_1, $p1_2) {
            var $v_0 = $p1_1.updateTaskInfo($p1_0, 21, name);
            $p1_2[$p1_0.toString()] = $v_0;
        }, null);
    },
    
    setPinned: function SP_UI_TaskListControl$setPinned(taskIds, pinned, callback) {ULSPOJ:;
        var $$t_7 = this;
        this.$1L_0(taskIds, callback, function($p1_0, $p1_1, $p1_2) {
            var $v_0 = $$t_7.$4_0.getControlFromKey($p1_0.toString());
            if ($v_0) {
                $v_0.set_isPinned(!pinned);
            }
            if (!pinned) {
                $p1_1.pinTask($p1_0);
                $p1_1.addToTimeline($p1_0);
            }
            else {
                $p1_1.unPinTask($p1_0);
            }
        }, null);
    },
    
    $AJ_0: function SP_UI_TaskListControl$$AJ_0($p0, $p1, $p2, $p3, $p4, $p5) {
        for (var $v_0 = 0; $v_0 < $p2.length; $v_0++) {
            var $v_1 = $p2[$v_0];
            var $v_2 = this.$94_0($p3, $v_1);
            if (!$p5) {
                this.$6H_0($v_1, $v_2, $p0, $p1);
            }
            else {
                $p5($v_1, $v_2, $p0, $p1);
            }
        }
        SP.UI.Utilities.callIfNotNull($p4, $p0);
    },
    
    $94_0: function SP_UI_TaskListControl$$94_0($p0, $p1) {
        var $v_0 = $p0[$p1.toString()];
        var $v_1 = null;
        if (SP.WorkManagement.OM.TaskWriteResult.isInstanceOfType($v_0)) {
            $v_1 = $v_0;
        }
        else if (Array.isInstanceOfType($v_0)) {
            var $v_2 = $v_0;
            for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                if (!$v_2[$v_3].get_error()) {
                    $v_1 = $v_2[$v_3];
                }
            }
            if (!$v_1 && $v_2.length > 0) {
                $v_1 = $v_2[0];
            }
        }
        else if ($v_0) {
        }
        return $v_1;
    },
    
    $8O_0: function SP_UI_TaskListControl$$8O_0($p0, $p1, $p2, $p3) {
        var $v_0 = this.$54_0($p0);
        var $v_1 = !!$p1 && !!$p1.get_error();
        if ($v_0) {
            if (!$p2 || $v_1) {
                this.$6H_0($p0, $p1, $p2, [ $p1.get_errorMessage() ]);
            }
            else {
                this.$4_0.removeRow($v_0, true);
            }
        }
    },
    
    $6H_0: function SP_UI_TaskListControl$$6H_0($p0, $p1, $p2, $p3) {
        var $v_0 = this.$54_0($p0);
        if ($v_0) {
            if ($p2) {
                if (!$p1 || !$p1.get_error()) {
                    $v_0.clearServerError();
                    if ($p1 && $p1.get_result() && !$p1.get_result().get_serverObjectIsNull()) {
                        $v_0.updateTask($p1.get_result());
                    }
                }
                else {
                    $v_0.showServerError($p1.get_errorMessage());
                }
            }
            else {
                if ($p3 && $p3.length > 0) {
                    $v_0.showServerError($p3[0]);
                }
                else {
                    $v_0.showServerError(WorkManagement.Res.TaskListUpdateTaskError);
                }
            }
        }
    },
    
    setDueDate: function SP_UI_TaskListControl$setDueDate(taskIds, dueDate, callback) {ULSPOJ:;
        var $v_0 = SP.UI.DateTimeUtilities.createDateString(dueDate);
        var $$t_8 = this;
        this.$1L_0(taskIds, callback, function($p1_0, $p1_1, $p1_2) {
            var $v_1 = $p1_1.updateTaskInfo($p1_0, 5, $v_0);
            $p1_2[$p1_0.toString()] = $v_1;
        }, null);
    },
    
    deleteTasks: function SP_UI_TaskListControl$deleteTasks(taskIds, callback) {ULSPOJ:;
        var $$t_6 = this;
        this.$1L_0(taskIds, callback, function($p1_0, $p1_1, $p1_2) {
            var $v_0 = $p1_1.deleteTask($p1_0);
            $p1_2[$p1_0.toString()] = $v_0;
        }, this.$$d_$8O_0);
        this.$4_0.get_selectionManager().clearSelection();
    },
    
    moveTasksAfterTask: function SP_UI_TaskListControl$moveTasksAfterTask(taskIdsToMove, taskIdToMoveAfter, fnCallback) {ULSPOJ:;
        var $$t_6 = this;
        this.$1L_0(taskIdsToMove, fnCallback, function($p1_0, $p1_1, $p1_2) {
            $p1_1.reorderTask($p1_0, taskIdToMoveAfter, !$$t_6.get_isGrouped());
        }, null);
    },
    
    moveTasksToLocation: function SP_UI_TaskListControl$moveTasksToLocation(taskIds, locationId, fnCallback) {ULSPOJ:;
        var $$t_6 = this;
        this.$1L_0(taskIds, fnCallback, function($p1_0, $p1_1, $p1_2) {
            $p1_1.moveTaskToLocation($p1_0, locationId);
        }, null);
    },
    
    getCompleted: function SP_UI_TaskListControl$getCompleted(taskId) {ULSPOJ:;
        return (this.getTaskById(taskId).get_isCompleted()) ? 0 : 1;
    },
    
    getTaskName: function SP_UI_TaskListControl$getTaskName(taskId) {ULSPOJ:;
        return this.getTaskById(taskId).get_name();
    },
    
    getDueDate: function SP_UI_TaskListControl$getDueDate(taskId) {ULSPOJ:;
        return this.getTaskById(taskId).get_dueDate();
    },
    
    $1L_0: function SP_UI_TaskListControl$$1L_0($p0, $p1, $p2, $p3) {
        var $v_0 = this.$2P_0;
        if (!$v_0) {
            $v_0 = new SP.UI.BatchedTaskOperation(this.createDataProvider(), this.$4_0);
        }
        var $v_1 = {};
        $v_0.performBulkOperation($p0, $p2, $v_1);
        if (!this.$2P_0) {
            var $$t_8 = this;
            $v_0.execute(function($p1_0, $p1_1) {
                $$t_8.$AJ_0($p1_0, $p1_1, $p0, $v_1, $p1, $p3);
                SP.WorkManagement.OM.JsApiUtils.notifyStateUpdated($$t_8);
            });
        }
    },
    
    collapseGroup: function SP_UI_TaskListControl$collapseGroup(groupName, fnCallback) {ULSPOJ:;
        this.$70_0(groupName, false, fnCallback);
    },
    
    expandGroup: function SP_UI_TaskListControl$expandGroup(groupName, fnCallback) {ULSPOJ:;
        this.$70_0(groupName, true, fnCallback);
    },
    
    $70_0: function SP_UI_TaskListControl$$70_0($p0, $p1, $p2) {
        var $v_0 = null;
        for (var $v_1 = 0; $v_1 < this.$r_0.length; $v_1++) {
            if (SP.UI.GroupInfo.$$(SP.WorkManagement.OM.Task).isInstanceOfType(this.$r_0[$v_1])) {
                $v_0 = this.$r_0[$v_1];
                if ($v_0.get_groupName() === $p0) {
                    $v_0.set_expanded($p1);
                    break;
                }
            }
        }
        this.$7T_0($p1, $v_0);
        SP.UI.Utilities.callIfNotNull($p2, true);
    },
    
    $7T_0: function SP_UI_TaskListControl$$7T_0($p0, $p1) {
        if ($p1) {
            for (var $v_0 = 0; $v_0 < this.$4_0.get_rowData().get_length(); $v_0++) {
                var $v_1 = this.$4_0.get_rowData().get_item($v_0);
                if (SP.UI.TaskGroupingHeaderControl.isInstanceOfType($v_1)) {
                    continue;
                }
                var $v_2 = $v_1;
                if ($v_2.get_locationId() === $p1.get_location().get_id()) {
                    if ($p0) {
                        this.$4_0.showRow($v_1);
                    }
                    else {
                        this.$4_0.hideRow($v_1, false);
                    }
                }
            }
        }
    },
    
    getGroupsInView: function SP_UI_TaskListControl$getGroupsInView() {ULSPOJ:;
        var $v_0 = new (SP.UI.List.$$(SP.WorkManagement.OM.GroupInfo))();
        for (var $v_1 = 0; $v_1 < this.$r_0.length; $v_1++) {
            if (SP.UI.GroupInfo.$$(SP.WorkManagement.OM.Task).isInstanceOfType(this.$r_0[$v_1])) {
                var $v_2 = this.$r_0[$v_1];
                var $v_3 = new SP.WorkManagement.OM.GroupInfo();
                $v_3.expanded = $v_2.get_expanded();
                $v_3.name = $v_2.get_groupName();
                $v_3.tasks = new Array($v_2.get_children().length);
                if ($v_2.get_location()) {
                    $v_3.locationId = $v_2.get_location().get_id();
                }
                var $v_4 = new (SP.UI.List.$$(SP.WorkManagement.OM.TaskInfo))();
                for (var $v_5 = 0; $v_5 < $v_2.get_children().length; $v_5++) {
                    var $v_6 = SP.UI.TaskListControl.$4y($v_2.get_children()[$v_5]);
                    $v_4.add($v_6);
                }
                $v_3.tasks = $v_4.toArray();
                $v_0.add($v_3);
            }
        }
        return $v_0.toArray();
    },
    
    openPersonalTaskDialog: function SP_UI_TaskListControl$openPersonalTaskDialog(taskId) {ULSPOJ:;
        var $v_0 = this.$4_0.getControlFromKey(taskId.toString());
        SP.UI.Utilities.showTaskDetailsDialog($v_0.$2_2.get_editUrl(), $v_0.$2_2.get_id());
    },
    
    get_sortField: function SP_UI_TaskListControl$get_sortField() {ULSPOJ:;
        return this.$1s_0.$O_0.get_value();
    },
    
    get_sortOrder: function SP_UI_TaskListControl$get_sortOrder() {ULSPOJ:;
        return this.$1s_0.$c_0.get_value();
    },
    
    setSorting: function SP_UI_TaskListControl$setSorting(sortField, sortOrder, fnCallback) {ULSPOJ:;
        if (!sortOrder) {
            sortField = 0;
        }
        this.$1s_0.$O_0 = (!sortField) ? SP.UI.Nullable.$$(SP.WorkManagement.OM.TaskListSortField).getNullValue() : new (SP.UI.Nullable.$$(SP.WorkManagement.OM.TaskListSortField))(sortField);
        this.$1s_0.$c_0 = (!sortOrder) ? SP.UI.Nullable.$$(SP.WorkManagement.OM.TaskListSortOrder).getNullValue() : new (SP.UI.Nullable.$$(SP.WorkManagement.OM.TaskListSortOrder))(sortOrder);
        var $v_0 = new SP.UI.SortingEventArgs();
        $v_0.$O_1 = sortField;
        $v_0.$c_1 = sortOrder;
        this.$4_0.set_showDragLine(!this.get_isSorted());
        this.$4_0.set_isSorted(this.get_isSorted());
        SP.UI.EventUtilities.raiseEvent(SP.UI.SortingEventArgs, this.$6_0, 'SortingChangedEvent', this, $v_0);
        this.$21_0 = 2;
        SP.UI.ApiManager.get_instance().getFirstApiOfType(SP.WorkManagement.OM.MyTasksDashboard, 2).RefreshAllLists(fnCallback);
    },
    
    addToTimeline: function SP_UI_TaskListControl$addToTimeline(taskIds, fnCallback) {ULSPOJ:;
        var $$t_8 = this;
        this.$1L_0(taskIds, fnCallback, function($p1_0, $p1_1, $p1_2) {
            var $v_0 = $$t_8.getTaskById($p1_0);
            Array.remove($v_0.get_customAttributes(), SP.UI.TaskListConstants.removeFromTimelineAttribute);
            var $v_1 = $$t_8.$4_0.getControlFromKey($p1_0.toString());
            $v_1.updateTask($v_0);
            var $v_2 = $p1_1.addToTimeline($p1_0);
            $p1_2[$p1_0.toString()] = $v_2;
        }, null);
    },
    
    removeFromTimeline: function SP_UI_TaskListControl$removeFromTimeline(taskIds, fnCallback) {ULSPOJ:;
        var $$t_8 = this;
        this.$1L_0(taskIds, fnCallback, function($p1_0, $p1_1, $p1_2) {
            var $v_0 = $$t_8.getTaskById($p1_0);
            Array.add($v_0.get_customAttributes(), SP.UI.TaskListConstants.removeFromTimelineAttribute);
            var $v_1 = $$t_8.$4_0.getControlFromKey($p1_0.toString());
            $v_1.updateTask($v_0);
            var $v_2 = $p1_1.removeItemFromTimeline($p1_0);
            $p1_2[$p1_0.toString()] = $v_2;
        }, null);
    },
    
    isOnTimeline: function SP_UI_TaskListControl$isOnTimeline(taskId) {ULSPOJ:;
        var $v_0 = this.getTaskById(taskId);
        return (!!$v_0 && SP.UI.TaskControl.isTaskOnTimeline($v_0));
    },
    
    dragTasks: function SP_UI_TaskListControl$dragTasks(taskIdsToMove, rowIdToMoveAfter, fnCallback) {ULSPOJ:;
        var $v_0 = 1;
        if (!taskIdsToMove.length) {
            if (fnCallback) {
                fnCallback(false, $v_0);
            }
            return;
        }
        this.$2P_0 = new SP.UI.BatchedTaskOperation(this.createDataProvider(), this.$4_0);
        var $v_1 = true;
        var $v_2 = SP.UI.TaskListConstants.invalidDragLocation;
        if (this.get_isGrouped()) {
            $v_2 = this.$3v_0(rowIdToMoveAfter, taskIdsToMove);
            if ($v_2 !== SP.UI.TaskListConstants.invalidDragLocation) {
                if ($v_2 !== SP.UI.TaskListConstants.sameDragGroup) {
                    $v_0 = 2;
                }
            }
            else {
                $v_1 = false;
            }
        }
        if (!this.get_isSorted() && $v_1) {
            this.$Au_0(taskIdsToMove, rowIdToMoveAfter);
            if ($v_0 === 2) {
                $v_0 = 4;
            }
            else {
                $v_0 = 3;
            }
        }
        if ($v_0 !== 1) {
            this.$2P_0.execute(this.$8i_0(taskIdsToMove, $v_2, $v_0, fnCallback));
        }
        else {
            if (fnCallback) {
                fnCallback(false, $v_0);
            }
        }
        this.$2P_0 = null;
    },
    
    get_selectionManager: function SP_UI_TaskListControl$get_selectionManager() {ULSPOJ:;
        return this.$4_0.get_selectionManager();
    },
    
    createDataProvider: function SP_UI_TaskListControl$createDataProvider() {ULSPOJ:;
        return new SP.UI.TaskDataProvider();
    },
    
    get_friendlyDateComponent: function SP_UI_TaskListControl$get_friendlyDateComponent() {ULSPOJ:;
        return this.$5c_0;
    },
    
    add_sortChanged: function SP_UI_TaskListControl$add_sortChanged(value) {ULSPOJ:;
        this.$6_0.addHandler('SortingChangedEvent', value);
    },
    remove_sortChanged: function SP_UI_TaskListControl$remove_sortChanged(value) {ULSPOJ:;
        this.$6_0.removeHandler('SortingChangedEvent', value);
    },
    
    get_columnManager: function SP_UI_TaskListControl$get_columnManager() {ULSPOJ:;
        return this.$t_0;
    },
    
    get_taskListTable: function SP_UI_TaskListControl$get_taskListTable() {ULSPOJ:;
        return this.$4_0;
    },
    
    redraw: function SP_UI_TaskListControl$redraw(callback) {ULSPOJ:;
        var $v_0 = new (SP.UI.List.$$(SP.UI.GroupInfo.$$(SP.WorkManagement.OM.Task)))();
        for (var $v_1 = 0; $v_1 < this.$r_0.length; $v_1++) {
            if (this.$B2_0(this.$r_0[$v_1])) {
                $v_0.add(this.$r_0[$v_1]);
            }
        }
        var $$t_3 = this;
        this.$4_0.draw($v_0.toArray(), this.$21_0, function() {ULSPOJ:;
            $$t_3.$21_0 = 0;
            $$t_3.$9u_0();
            SP.UI.Utilities.callIfNotNull(callback, true);
        });
    },
    
    dispose: function SP_UI_TaskListControl$dispose() {ULSPOJ:;
        this.$4_0.dispose();
    },
    
    RemoveItemFromTimeline: function SP_UI_TaskListControl$RemoveItemFromTimeline(uid) {ULSPOJ:;
        var $v_0 = this.createDataProvider();
        $v_0.removeItemFromTimeline(uid);
        $v_0.executeQueryAndRefreshAll(this.$T_0, null);
    },
    
    $9l_0: function SP_UI_TaskListControl$$9l_0($p0, $p1) {
        var $v_0 = $p1.get_data();
        var $v_1 = this.$97_0($v_0);
        this.dragTasks($v_1, $p1.get_rowKey(), null);
    },
    
    $8i_0: function SP_UI_TaskListControl$$8i_0($p0, $p1, $p2, $p3) {
        var $$t_6 = this;
        return function($p1_0, $p1_1) {
            if ($p1_0) {
                if ($p1 !== SP.UI.TaskListConstants.noValue) {
                    $$t_6.$As_0($p0, $p1);
                }
            }
            if ($p3) {
                $p3($p1_0, $p2);
            }
        };
    },
    
    $As_0: function SP_UI_TaskListControl$$As_0($p0, $p1) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = this.getTaskById($p0[$v_0]);
            $v_1.set_locationId($p1);
        }
    },
    
    $97_0: function SP_UI_TaskListControl$$97_0($p0) {
        var $v_0 = new (SP.UI.List.$$(Number))();
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            var $v_2 = this.$4_0.getControlFromKey($p0[$v_1]);
            if (SP.UI.TaskControl.isInstanceOfType($v_2)) {
                var $v_3 = $v_2;
                $v_0.add($v_3.$2_2.get_id());
            }
        }
        return $v_0.toArray();
    },
    
    $3v_0: function SP_UI_TaskListControl$$3v_0($p0, $p1) {
        var $v_0 = [];
        var $v_1 = SP.UI.TaskListConstants.sameDragGroup;
        var $v_2 = this.$8s_0($p0);
        var $v_3 = false;
        for (var $v_4 = 0; $v_4 < $p1.length; $v_4++) {
            var $v_5 = $p1[$v_4];
            var $v_6 = this.getTaskById($v_5);
            if ($v_6) {
                if (!SP.UI.TaskListControl.$9R($v_2, $v_6)) {
                    if (!$v_6.get_isPersonal()) {
                        $v_3 = true;
                    }
                    else {
                        Array.add($v_0, $v_5);
                    }
                }
            }
        }
        if ($v_3) {
            SP.UI.NotificationComponent.showGenericAlert(WorkManagement.Res.TaskList_DragAndDrop_ProjectTasksCannotBeMoved, null, null, null);
            $v_1 = SP.UI.TaskListConstants.invalidDragLocation;
        }
        else {
            this.moveTasksToLocation($v_0, $v_2, null);
            $v_1 = $v_2;
        }
        return $v_1;
    },
    
    $8s_0: function SP_UI_TaskListControl$$8s_0($p0) {
        var $v_0 = this.$4_0.getControlFromKey($p0);
        var $v_1 = SP.UI.TaskListConstants.noValue;
        if (SP.UI.ILocationRow.isInstanceOfType($v_0)) {
            var $v_2 = $v_0;
            $v_1 = $v_2.get_locationId();
        }
        return $v_1;
    },
    
    $Au_0: function SP_UI_TaskListControl$$Au_0($p0, $p1) {
        $p0 = SP.UI.Utilities.reverse(Number, $p0);
        if (this.get_$6z_0() === 1 || this.get_$6z_0() === 2) {
            var $v_0 = SP.UI.TaskListConstants.noPreviousTask;
            var $v_1 = this.$4_0.getControlFromKey($p1);
            if (SP.UI.TaskControl.isInstanceOfType($v_1)) {
                var $v_3 = $v_1;
                $v_0 = $v_3.$2_2.get_id();
            }
            this.moveTasksAfterTask($p0, $v_0, null);
            var $v_2 = this.$4_0.getControlFromKey($p1.toString());
            for (var $v_4 = 0; $v_4 < $p0.length; $v_4++) {
                var $v_5 = this.$4_0.getControlFromKey($p0[$v_4].toString());
                this.$4_0.moveRow($v_5, $v_2);
            }
        }
    },
    
    $8G_0: function SP_UI_TaskListControl$$8G_0() {ULSPOJ:;
        this.$t_0 = this.$7u_0();
        var $v_0 = (SP.UI.SharedComponentManager.$5.get_viewType() === 4) ? null : new SP.UI.TaskListHeaderControl(this);
        var $v_1 = new SP.UI.TaskGroupFactory(this);
        var $v_2 = new SP.UI.TaskControlFactory(this);
        $v_1.$2k_0 = this.get_showAddControl();
        $v_1.$3j_0 = this.$T_0 === 1;
        this.$4_0 = new SP.UI.TaskListTable(document.createElement('div'), $v_0, $v_1, $v_2, this.$t_0, this, this.$36_0);
        this.$4_0.set_hidden(this.$2W_0);
        this.$4_0.set_showDragLine(!this.get_isSorted());
        this.$4_0.add_dragComplete(this.$$d_$9l_0);
        this.$4_0.set_isSorted(this.get_isSorted());
        this.$4_0.$2I_5 = this.$T_0;
        this.$4_0.get_element().style.zIndex = 0;
    },
    
    $7u_0: function SP_UI_TaskListControl$$7u_0() {ULSPOJ:;
        var $v_0 = new SP.UI.FixedWidthColumnInfo(SP.UI.TaskListConstants.selectionFieldWidth, null, 8);
        var $v_1 = new SP.UI.FixedWidthColumnInfo(SP.UI.TaskListConstants.selectionBorderWidth, null, 9);
        var $v_2 = new SP.UI.FixedWidthColumnInfo(SP.UI.TaskListConstants.smallImageFieldWidth, null, 0);
        var $v_3 = new SP.UI.FixedWidthColumnInfo(SP.UI.TaskListConstants.smallImageFieldWidth, null, 4);
        var $v_4 = new SP.UI.FixedWidthColumnInfo(SP.UI.TaskListConstants.smallImageFieldWidth, null, 2);
        var $v_5 = new SP.UI.FixedWidthColumnInfo(SP.UI.TaskListConstants.largeImageFieldWidth, null, 5);
        var $v_6 = new SP.UI.FixedWidthColumnInfo(SP.UI.TaskListConstants.smallImageFieldWidth, null, 7);
        var $v_7 = new SP.UI.VariableWidthColumnInfo(SP.UI.TaskListConstants.minTextFieldWidth, SP.UI.TaskListConstants.noMaxWidth, 2.5, WorkManagement.Res.TaskList_Header_Title, 1);
        var $v_8 = new SP.UI.FixedWidthColumnInfo(SP.UI.TaskListConstants.dateFieldWidth, WorkManagement.Res.TaskList_Header_DueDate, 3);
        var $v_9 = new SP.UI.ColumnManager();
        $v_9.addColumn($v_0);
        $v_9.addColumn($v_1);
        $v_9.addColumn($v_3);
        $v_9.addColumn($v_2);
        $v_9.addColumn($v_7);
        $v_9.addColumn($v_4);
        $v_9.addColumn($v_6);
        $v_9.addColumn($v_8);
        $v_9.addColumn($v_5);
        $v_9.distributeAvailableWidth(this.$d_0.offsetWidth);
        return $v_9;
    },
    
    $6v_0: function SP_UI_TaskListControl$$6v_0($p0, $p1) {
        var $v_0 = [];
        if ($p0) {
            for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
                var $v_2 = $p0[$v_1];
                var $v_3 = this.$8m_0($v_2);
                Array.add($v_0, $v_3);
                $v_3.set_children([]);
                this.$7K_0($v_3.get_children(), $v_2.$16_0);
                $v_3.set_shouldDraw(this.get_isGrouped());
            }
        }
        this.$r_0 = $v_0;
        this.redraw($p1);
    },
    
    $8m_0: function SP_UI_TaskListControl$$8m_0($p0) {
        var $v_0 = $p0.$m_0.get_id().toString();
        if (!this.$3J_0[$v_0]) {
            var $v_2 = new (SP.UI.GroupInfo.$$(SP.WorkManagement.OM.Task))();
            $v_2.set_groupName($p0.$m_0.get_name());
            $v_2.set_children([]);
            $v_2.set_location($p0.$m_0);
            $v_2.set_expanded(true);
            this.$3J_0[$v_0] = $v_2;
        }
        var $v_1 = this.$3J_0[$v_0];
        return $v_1;
    },
    
    $9u_0: function SP_UI_TaskListControl$$9u_0() {ULSPOJ:;
        this.$BF_0();
        this.$Av_0();
        if (this.$49_0) {
            this.$8Q_0();
            this.$49_0 = false;
        }
        else {
            for (var $v_0 = 0; $v_0 < this.$1w_0.get_length(); $v_0++) {
                var $v_1 = this.$4_0.getControlFromKey(this.$1w_0.get_item($v_0).get_id().toString());
                if ($v_1) {
                    $v_1.updateTask(this.$1w_0.get_item($v_0));
                }
            }
            if (this.$1w_0.get_length() > 0) {
                SP.WorkManagement.OM.JsApiUtils.notifyStateUpdated(this);
            }
            this.$1w_0.clear();
        }
    },
    
    $8Q_0: function SP_UI_TaskListControl$$8Q_0() {ULSPOJ:;
        this.$5f_0 = true;
        SP.WorkManagement.OM.TaskList.WrapImplementationInApiAndMarkInitComplete(this);
    },
    
    $BF_0: function SP_UI_TaskListControl$$BF_0() {ULSPOJ:;
        var $v_0 = false;
        for (var $v_1 = 0; $v_1 < this.$r_0.length; $v_1++) {
            var $v_2 = this.$r_0[$v_1];
            if ($v_2.get_children() && $v_2.get_children().length > 0) {
                $v_0 = true;
                break;
            }
        }
        if (!$v_0) {
            if (!SP.ScriptUtility.isNullOrEmptyString(SP.UI.SharedComponentManager.$5.$2i_0)) {
                this.$2z_0(WorkManagement.Res.TaskList_Msg_NoSearchTasks, false);
            }
            else if (this.$H_0 && this.$49_0) {
                this.$B4_0();
            }
            else {
                if (this.$T_0 === 3) {
                    this.$2z_0(WorkManagement.Res.TaskList_Msg_NoNewTasks, true);
                }
                else if (this.$T_0 === 5) {
                    this.$2z_0(WorkManagement.Res.TaskList_Msg_NoCompletedTasks, true);
                }
                else if (this.$T_0 === 2) {
                    this.$2z_0(WorkManagement.Res.TaskList_Msg_NoUpcomingTasks, true);
                }
            }
        }
        else {
            this.$6Z_0();
            this.$9F_0();
            this.$B5_0();
        }
    },
    
    $Av_0: function SP_UI_TaskListControl$$Av_0() {ULSPOJ:;
        if (this.$H_0 && this.$H_0.get_visible()) {
            this.$Aw_0();
        }
        else {
            this.$d_0.style.height = '';
        }
    },
    
    $Aw_0: function SP_UI_TaskListControl$$Aw_0() {ULSPOJ:;
        this.$d_0.style.height = SP.UI.TaskListConstants.taskListAttractModeHeight;
    },
    
    $B2_0: function SP_UI_TaskListControl$$B2_0($p0) {
        return ($p0.get_children().length > 0 || !this.get_isGrouped() || (SP.UI.LocationUtilities.isPersonalLocation($p0.get_location()) && this.get_showAddControl()));
    },
    
    $7K_0: function SP_UI_TaskListControl$$7K_0($p0, $p1) {
        if (!$p1) {
            return;
        }
        else {
            for (var $v_0 = 0; $v_0 < $p1.length; $v_0++) {
                Array.add($p0, $p1[$v_0]);
                this.$BA_0($p1[$v_0]);
            }
        }
    },
    
    $BA_0: function SP_UI_TaskListControl$$BA_0($p0) {
        if (SP.UI.DictionaryUtilities.containKey(this.$3S_0, $p0.get_id().toString())) {
            if (this.$3S_0[$p0.get_id().toString()].toString() !== $p0.get_lastModified().toString()) {
                SP.UI.DebugConsole.log('TaskListControl.AddTasksToArrayList: Adding task: ' + $p0.get_name() + ' to update list.');
                this.$1w_0.add($p0);
            }
        }
        this.$3S_0[$p0.get_id().toString()] = $p0.get_lastModified();
    },
    
    $2z_0: function SP_UI_TaskListControl$$2z_0($p0, $p1) {
        if (!this.$1X_0.get_visible()) {
            this.$1X_0.show();
        }
        this.$1X_0.set_displayText($p0);
        this.$1X_0.set_displayViewAllTasksFooter($p1);
    },
    
    $9F_0: function SP_UI_TaskListControl$$9F_0() {ULSPOJ:;
        this.$1X_0.hide();
    },
    
    $B5_0: function SP_UI_TaskListControl$$B5_0() {ULSPOJ:;
        var $v_0 = SP.UI.SharedComponentManager.$5.$Y_0.$q_1;
        if (this.$T_0 !== 6 || ($v_0.get_hasShownMarkAsImportantCallout() && $v_0.get_hasShownTaskListTooLongNotification())) {
            return;
        }
        var $v_1 = this.getTasksInView();
        if (!$v_1 || !$v_1.length) {
            return;
        }
        var $v_2 = this.$7P_0($v_1);
        if ($v_1.length >= 10 && !$v_2 && !$v_0.get_hasShownMarkAsImportantCallout()) {
            var $v_3 = this.$54_0($v_1[Math.min(2, $v_1.length - 1)].id);
            this.$4_0.showImportantTasksHelperCallout($v_3);
        }
        if ($v_1.length > 20 && ($v_2 || this.$7R_0($v_1)) && !$v_0.get_hasShownTaskListTooLongNotification()) {
            SP.UI.NotificationComponent.showImportantAndUpcomingViewNotification();
        }
    },
    
    $7R_0: function SP_UI_TaskListControl$$7R_0($p0) {
        var $v_0 = SP.UI.DateTimeUtilities.getLocalTimeOffsetByDays(SP.UI.SharedComponentManager.$5.$2r_0.get_upcomingTasksLimit());
        var $v_1 = SP.UI.DateTimeUtilities.getLocalTimeOffsetByDays(-SP.UI.SharedComponentManager.$5.$2r_0.get_lateTasksLimit());
        for (var $v_2 = 0; $v_2 < $p0.length; $v_2++) {
            if ($p0[$v_2].dueDate >= $v_1 && $p0[$v_2].dueDate <= $v_0) {
                return true;
            }
        }
        return false;
    },
    
    $7P_0: function SP_UI_TaskListControl$$7P_0($p0) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            if ($p0[$v_0].pinned) {
                return true;
            }
        }
        return false;
    },
    
    $AO_0: function SP_UI_TaskListControl$$AO_0($p0) {
        if (!this.$5f_0) {
            this.$2z_0(WorkManagement.Res.TaskListReadFailure, false);
        }
    }
}


SP.UI.TaskListHeaderControl = function SP_UI_TaskListHeaderControl(services) {ULSPOJ:;
    this.$$d_$59_2 = Function.createDelegate(this, this.$59_2);
    this.$$d_$9y_2 = Function.createDelegate(this, this.$9y_2);
    this.$$d_$9z_2 = Function.createDelegate(this, this.$9z_2);
    SP.UI.TaskListHeaderControl.initializeBase(this, [ services ]);
    this.$3_0.add_sortChanged(this.$$d_$9z_2);
}
SP.UI.TaskListHeaderControl.$93 = function SP_UI_TaskListHeaderControl$$93($p0) {
    switch ($p0) {
        case 1:
            return 1;
        case 3:
            return 2;
        default:
            return 0;
    }
}
SP.UI.TaskListHeaderControl.prototype = {
    
    get_rowKey: function SP_UI_TaskListHeaderControl$get_rowKey() {ULSPOJ:;
        return 'TaskListHeaderControl';
    },
    
    createWidgetForColumn: function SP_UI_TaskListHeaderControl$createWidgetForColumn(info) {ULSPOJ:;
        var $v_0 = null;
        if ((info.$J_0) === 8) {
            var $v_1 = new SP.UI.HeaderImageClusterWidget(SP.UI.TaskListConstants.get_sharePointCommonThemedImage(), SP.UI.ConstantsImage.selectionCheckmarkSpanStyle, SP.UI.ConstantsImage.selectionCheckmarkImageStyle, this.$3_0);
            $addHandler($v_1.$1_0, 'click', this.$$d_$9y_2);
            $addHandler($v_1.$1_0, 'keydown', this.$$d_$59_2);
            $v_0 = $v_1;
        }
        else if ((info.$J_0) === 9) {
            var $v_2 = new SP.UI.Widget(this.$3_0);
            $v_0 = $v_2;
        }
        else if (!(info.$J_0)) {
            $v_0 = new SP.UI.HeaderImageClusterWidget(SP.UI.TaskListConstants.get_sharePointCommonThemedImage(), SP.UI.ConstantsImage.checkMarkSpanStyle, SP.UI.ConstantsImage.checkMarkNotCompleted, this.$3_0);
        }
        else if ((info.$J_0) === 4) {
            $v_0 = new SP.UI.HeaderImageClusterWidget(SP.UI.TaskListConstants.get_sharePointCommonThemedImage(), SP.UI.ConstantsImage.exclamationColumnHeaderSpanStyle, SP.UI.ConstantsImage.exclamationColumnHeaderImageStyle, this.$3_0);
        }
        else {
            $v_0 = this.$7x_2(info);
        }
        return $v_0;
    },
    
    $7x_2: function SP_UI_TaskListHeaderControl$$7x_2($p0) {
        var $v_0 = new SP.UI.HeaderWidget($p0.$1W_0, this.$3_0);
        $v_0.$O_1 = SP.UI.TaskListHeaderControl.$93($p0.$J_0);
        $v_0.set_sortOrder(0);
        return $v_0;
    },
    
    $59_2: function SP_UI_TaskListHeaderControl$$59_2($p0) {
        if ($p0.keyCode === 32 || $p0.keyCode === 13) {
            this.$76_2();
            $p0.stopPropagation();
            $p0.preventDefault();
        }
    },
    
    $76_2: function SP_UI_TaskListHeaderControl$$76_2() {ULSPOJ:;
        var $v_0 = this.$3_0.GetSelectedTasks();
        var $v_1 = this.$3_0.GetTasksInView();
        if ($v_0.length === $v_1.length) {
            this.$3_0.get_selectionManager().clearSelection();
        }
        else {
            var $v_2 = new (SP.UI.List.$$(String))();
            for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
                $v_2.add($v_1[$v_3].id.toString());
            }
            this.$3_0.get_selectionManager().selectBulk($v_2.toArray());
        }
    },
    
    $9y_2: function SP_UI_TaskListHeaderControl$$9y_2($p0) {
        this.$76_2();
        $p0.stopPropagation();
    },
    
    $9z_2: function SP_UI_TaskListHeaderControl$$9z_2($p0, $p1) {
        this.$7C_2();
    },
    
    $7C_2: function SP_UI_TaskListHeaderControl$$7C_2() {ULSPOJ:;
        for (var $$arr_0 = this.get_widgets(), $$len_1 = $$arr_0.length, $$idx_2 = 0; $$idx_2 < $$len_1; ++$$idx_2) {
            var $v_0 = $$arr_0[$$idx_2];
            if (SP.UI.HeaderWidget.isInstanceOfType($v_0)) {
                var $v_1 = $v_0;
                if ($v_1.$O_1 === this.$3_0.get_SortField()) {
                    $v_1.set_sortOrder(this.$3_0.get_SortOrder());
                }
                else {
                    $v_1.set_sortOrder(0);
                }
            }
        }
    },
    
    renderRow: function SP_UI_TaskListHeaderControl$renderRow() {ULSPOJ:;
        SP.UI.WidgetRowControl.prototype.renderRow.call(this);
        this.$7C_2();
        Sys.UI.DomElement.addCssClass(this.$1_0, 'ms-awiop-headerRow');
        this.$1_0.style.border = '';
    }
}


SP.UI.CalloutRenderer = function SP_UI_CalloutRenderer(task, services, launchPoint) {ULSPOJ:;
    this.$$d_$9b_0 = Function.createDelegate(this, this.$9b_0);
    this.$$d_$9c_0 = Function.createDelegate(this, this.$9c_0);
    this.$$d_$9d_0 = Function.createDelegate(this, this.$9d_0);
    this.$5o_0 = launchPoint;
    this.$2_0 = task;
    this.$N_0 = services;
}
SP.UI.CalloutRenderer.renderCalloutSectionContainer = function SP_UI_CalloutRenderer$renderCalloutSectionContainer() {ULSPOJ:;
    var $v_0 = document.createElement('div');
    $v_0.style.marginTop = '20px';
    return $v_0;
}
SP.UI.CalloutRenderer.renderCalloutSectionHeader = function SP_UI_CalloutRenderer$renderCalloutSectionHeader(title) {ULSPOJ:;
    var $v_0 = document.createElement('h3');
    $v_0.className = 'ms-soften';
    $v_0.style.marginTop = '9px';
    SP.UI.DomUtilities.setText($v_0, title);
    return $v_0;
}
SP.UI.CalloutRenderer.renderCalloutSectionElement = function SP_UI_CalloutRenderer$renderCalloutSectionElement(text) {ULSPOJ:;
    var $v_0 = document.createElement('div');
    SP.UI.DomUtilities.setText($v_0, text);
    return $v_0;
}
SP.UI.CalloutRenderer.$8g = function SP_UI_CalloutRenderer$$8g($p0) {
    var $v_0 = $p0 >= 0;
    return String.format(SP.Utilities.LocUtility.getLocalizedCountValue(($v_0) ? Strings.STS.L_DaysLabelForCallout : Strings.STS.L_DaysAgoLabelForCallout, ($v_0) ? Strings.STS.L_DaysLabelForCalloutIntervals : Strings.STS.L_DaysAgoLabelForCalloutIntervals, Math.abs($p0)), '');
}
SP.UI.CalloutRenderer.prototype = {
    $5o_0: null,
    $2_0: null,
    $N_0: null,
    $1P_0: null,
    $f_0: null,
    $5Y_0: null,
    $4s_0: null,
    $4O_0: false,
    $2X_0: false,
    
    get_isOpen: function SP_UI_CalloutRenderer$get_isOpen() {ULSPOJ:;
        return this.$2X_0;
    },
    
    onTaskUpdate: function SP_UI_CalloutRenderer$onTaskUpdate(task) {ULSPOJ:;
        this.$2_0 = task;
        if (this.$f_0) {
            var $v_0 = this.$8I_0();
            $v_0.contentWidth = Math.max(this.$f_0.getActionMenu().calculateActionWidth(), 300);
            this.$f_0.set($v_0);
            this.$4s_0.set(this.$6F_0(SP.UI.TaskControl.isTaskOnTimeline(this.$2_0)));
        }
    },
    
    get_isInitialized: function SP_UI_CalloutRenderer$get_isInitialized() {ULSPOJ:;
        return this.$4O_0;
    },
    
    $A5_0: function SP_UI_CalloutRenderer$$A5_0() {ULSPOJ:;
        var $$t_2 = this;
        EnsureScriptFunc('callout.js', 'CalloutManager', function() {ULSPOJ:;
            if (!$$t_2.$4O_0) {
                $$t_2.$4O_0 = true;
                $$t_2.$f_0 = CalloutManager.createNew($$t_2.$8H_0());
                $$t_2.$5Y_0 = new CalloutAction($$t_2.$7y_0());
                $$t_2.$f_0.addAction($$t_2.$5Y_0);
                var $v_0 = SP.UI.TaskControl.isTaskOnTimeline($$t_2.$2_0);
                $$t_2.$4s_0 = new CalloutAction($$t_2.$6F_0($v_0));
                $$t_2.$f_0.addAction($$t_2.$4s_0);
                var $v_1 = {};
                $v_1['contentWidth'] = Math.max($$t_2.$f_0.getActionMenu().calculateActionWidth(), 300);
                $$t_2.$f_0.set($v_1);
            }
            $$t_2.$f_0.open();
        });
    },
    
    closeCalloutIfOpen: function SP_UI_CalloutRenderer$closeCalloutIfOpen() {ULSPOJ:;
        if (typeof(CalloutManager) !== 'undefined' && CalloutManager.isAtLeastOneCalloutOpen()) {
            CalloutManager.closeAll();
        }
    },
    
    renderLocationLinkWithCustomUrl: function SP_UI_CalloutRenderer$renderLocationLinkWithCustomUrl(contentElement, title, url, directLinkTitle, directLinkUrl) {ULSPOJ:;
        var $v_0 = SP.UI.SharedComponentManager.$5.$1C_0.$53_0(this.$2_0.get_locationId());
        if (url) {
            var $v_1 = document.createElement('div');
            $v_1.className = 'ms-metadata';
            $v_1.style.marginTop = '6px';
            var $v_2 = document.createElement('a');
            $v_2.href = url;
            XUI.Html.SetText($v_2, title || $v_0.get_name());
            var $v_3 = null;
            var $v_4 = null;
            if (directLinkUrl) {
                $v_3 = document.createElement('img');
                $v_3.src = (SP.UI.DomUtilities.isLtr()) ? SP.UI.ConstantsImage.rightArrowImage : SP.UI.ConstantsImage.leftArrowImage;
                $v_3.style.marginTop = '3px';
                $v_4 = document.createElement('a');
                $v_4.href = directLinkUrl;
                SP.UI.DomUtilities.setText($v_4, directLinkTitle);
            }
            $v_1.innerHTML = String.format((this.$2_0.get_isPersonal()) ? WorkManagement.Res.TaskList_Callout_SharePointWebRelated : WorkManagement.Res.TaskList_Callout_SharePointWeb, XUI.Html.GetOuterHTML($v_2), ($v_3) ? XUI.Html.GetOuterHTML($v_3) : '', ($v_4) ? XUI.Html.GetOuterHTML($v_4) : '');
            contentElement.parentNode.insertBefore($v_1, contentElement);
        }
    },
    
    showCalloutError: function SP_UI_CalloutRenderer$showCalloutError(errorText) {ULSPOJ:;
        this.clearCalloutContent();
        var $v_0 = SP.UI.CalloutRenderer.renderCalloutSectionContainer();
        var $v_1 = SP.UI.CalloutRenderer.renderCalloutSectionElement(errorText);
        $v_0.appendChild($v_1);
        var $v_2 = $get(this.$1P_0);
        $v_2.appendChild($v_0);
    },
    
    clearCalloutContent: function SP_UI_CalloutRenderer$clearCalloutContent() {ULSPOJ:;
        var $v_0 = $get(this.$1P_0);
        while ($v_0.hasChildNodes()) {
            $v_0.removeChild($v_0.firstChild);
        }
    },
    
    drawLoadingGlyphForCallout: function SP_UI_CalloutRenderer$drawLoadingGlyphForCallout() {ULSPOJ:;
        this.clearCalloutContent();
        var $v_0 = SP.UI.CalloutRenderer.renderCalloutSectionContainer();
        $v_0.style.width = '100%';
        var $v_1 = document.createElement('img');
        $v_1.src = SP.UI.ConstantsImage.loadingCircleImage;
        $v_1.style.marginLeft = 'auto';
        $v_1.style.marginRight = 'auto';
        $v_0.appendChild($v_1);
        var $v_2 = $get(this.$1P_0);
        $v_2.appendChild($v_0);
    },
    
    $BL_0: function SP_UI_CalloutRenderer$$BL_0($p0) {
        if ($p0) {
            this.$N_0.AddToTimeline([ this.$2_0.get_id() ], null);
        }
        else {
            this.$N_0.RemoveFromTimeline([ this.$2_0.get_id() ], null);
        }
    },
    
    $8I_0: function SP_UI_CalloutRenderer$$8I_0() {ULSPOJ:;
        return this.$6D_0();
    },
    
    $6D_0: function SP_UI_CalloutRenderer$$6D_0() {ULSPOJ:;
        var $v_0 = new CalloutOptions();
        if (this.$f_0) {
            $v_0.ID = this.$f_0.getID();
        }
        else {
            $v_0.ID = SP.UI.CalloutRenderer.$37.toString();
        }
        $v_0.launchPoint = this.$5o_0;
        $v_0.title = SP.Utilities.HttpUtility.htmlEncode(this.$2_0.get_name());
        $v_0.openOptions = new CalloutOpenOptions();
        $v_0.openOptions.closeCalloutOnBlur = true;
        $v_0.openOptions.showCloseButton = true;
        $v_0.beakOrientation = 'leftRight';
        $v_0.content = this.$6C_0();
        $v_0.boundingBox = $get('s4-bodyContainer');
        return $v_0;
    },
    
    $8H_0: function SP_UI_CalloutRenderer$$8H_0() {ULSPOJ:;
        var $v_0 = this.$6D_0();
        $v_0.onOpeningCallback = this.$$d_$9d_0;
        $v_0.onClosingCallback = this.$$d_$9c_0;
        $v_0.onClosedCallback = this.$$d_$9b_0;
        return $v_0;
    },
    
    $6s_0: false,
    
    $9d_0: function SP_UI_CalloutRenderer$$9d_0($p0) {
        var $v_0 = $get(this.$1P_0);
        this.$6s_0 = SP.UI.DragAndDropManager.get_instance().$h_0;
        SP.UI.DragAndDropManager.get_instance().$h_0 = false;
        this.onOpening($v_0, null);
        this.$2X_0 = true;
    },
    
    $9c_0: function SP_UI_CalloutRenderer$$9c_0($p0) {
        this.onClosing();
    },
    
    $9b_0: function SP_UI_CalloutRenderer$$9b_0($p0) {
        SP.UI.DragAndDropManager.get_instance().$h_0 = this.$6s_0;
        this.$2X_0 = false;
    },
    
    $A4_0: function SP_UI_CalloutRenderer$$A4_0($p0, $p1) {
        if (!this.$1P_0) {
            $p0.innerHTML = this.$6C_0();
        }
        var $v_0 = $get(this.$1P_0);
        this.onOpening($v_0, $p1);
    },
    
    onOpening: function SP_UI_CalloutRenderer$onOpening(contentElement, fnUpdateCalloutContents) {ULSPOJ:;
        if (fnUpdateCalloutContents) {
            fnUpdateCalloutContents();
        }
    },
    
    onClosing: function SP_UI_CalloutRenderer$onClosing() {
    },
    
    $7y_0: function SP_UI_CalloutRenderer$$7y_0() {ULSPOJ:;
        var $$t_0 = this;
        return this.$6A_0(WorkManagement.Res.TaskList_CalloutAction_Edit, function() {ULSPOJ:;
            SP.UI.Utilities.showTaskDetailsDialog($$t_0.$2_0.get_editUrl(), $$t_0.$2_0.get_id());
            $$t_0.$f_0.close();
        });
    },
    
    $6F_0: function SP_UI_CalloutRenderer$$6F_0($p0) {
        var $v_0 = ($p0) ? WorkManagement.Res.TaskList_CalloutAction_RemoveFromTimeline : WorkManagement.Res.TaskList_CalloutAction_AddToTimeline;
        var $$t_2 = this;
        return this.$6A_0($v_0, function() {ULSPOJ:;
            $$t_2.$BL_0(!$p0);
        });
    },
    
    $6A_0: function SP_UI_CalloutRenderer$$6A_0($p0, $p1) {
        var $v_0 = new CalloutActionOptions();
        $v_0.text = $p0;
        $v_0.tooltip = $p0;
        var $$t_5 = this;
        $v_0.onClickCallback = function($p1_0, $p1_1) {
            $$t_5.$f_0.close();
            $p1();
        };
        return $v_0;
    },
    
    $6C_0: function SP_UI_CalloutRenderer$$6C_0() {ULSPOJ:;
        var $v_0 = '<div style=\'overflow-y:auto; max-height: 400px\'>';
        $v_0 += this.$AX_0();
        $v_0 += this.$AZ_0();
        $v_0 += this.$Ai_0();
        $v_0 += '</div>';
        SP.UI.CalloutRenderer.$37++;
        return $v_0;
    },
    
    $AX_0: function SP_UI_CalloutRenderer$$AX_0() {ULSPOJ:;
        this.$1P_0 = 'AwiopCalloutContent' + SP.UI.CalloutRenderer.$37.toString();
        return '<div id=\'' + this.$1P_0 + '\'></div>';
    },
    
    $AZ_0: function SP_UI_CalloutRenderer$$AZ_0() {ULSPOJ:;
        if (!SP.UI.DateTimeUtilities.isDefaultDate(this.$2_0.get_dueDate())) {
            return this.$AY_0();
        }
        return '';
    },
    
    $Ai_0: function SP_UI_CalloutRenderer$$Ai_0() {ULSPOJ:;
        if (this.$2_0.get_editUrl()) {
            return this.$Ah_0();
        }
        return '';
    },
    
    $Ah_0: function SP_UI_CalloutRenderer$$Ah_0() {ULSPOJ:;
        return String.format('\r\n                <div class=\'js-callout-bodySection\'><input value=\'{0}\' class=\'js-callout-location\' /></div>', SP.Utilities.HttpUtility.htmlEncode(this.$2_0.get_editUrl()));
    },
    
    $AY_0: function SP_UI_CalloutRenderer$$AY_0() {ULSPOJ:;
        var $v_0 = SP.UI.DateTimeUtilities.getDaysBetweenDates(this.$2_0.get_dueDate(), new Date());
        var $v_1 = String.format(WorkManagement.Res.TaskList_Callout_DueDate, SP.UI.DateTimeUtilities.formatDate(this.$2_0.get_dueDate(), 'd'));
        var $v_2 = null;
        if ($v_0 < 0) {
            $v_2 = 'color:red';
        }
        var $v_3 = String.format('\r\n                    <div class=\'ms-taskdate-daysvalue\' style=\'{3};float:{4};{5}:14px\'>{0}</div>\r\n                    <div class=\'ms-taskdate-daysunit\' style=\'{3};margin-top:0.75em\'>{1}</div>\r\n                    <div class=\'ms-metadata\'>{2}</div>', Math.abs($v_0).toString(), SP.UI.CalloutRenderer.$8g($v_0), $v_1, $v_2, (XUI.Html.GetDirection() === 'rtl') ? 'right' : 'left', (XUI.Html.GetDirection() === 'rtl') ? 'margin-left' : 'margin-right');
        return $v_3;
    }
}


SP.UI.CalloutWidget = function SP_UI_CalloutWidget(task, services) {ULSPOJ:;
    SP.UI.CalloutWidget.initializeBase(this, [ SP.UI.ConstantsImage.sharepointCommonImage, services ]);
    this.$1O_2 = SP.UI.TaskControl.$6B(task, this.$3_0, this.$1_0);
}
SP.UI.CalloutWidget.prototype = {
    $1O_2: null,
    
    get_isCalloutOpen: function SP_UI_CalloutWidget$get_isCalloutOpen() {ULSPOJ:;
        return this.$1O_2.$2X_0;
    },
    
    onTaskUpdate: function SP_UI_CalloutWidget$onTaskUpdate(task) {ULSPOJ:;
        if (this.$1O_2) {
            this.$1O_2.onTaskUpdate(task);
        }
    },
    
    onLeaveView: function SP_UI_CalloutWidget$onLeaveView() {ULSPOJ:;
        this.$1O_2.closeCalloutIfOpen();
        SP.UI.Widget.prototype.onLeaveView.call(this);
    },
    
    onClick: function SP_UI_CalloutWidget$onClick(targetElement) {ULSPOJ:;
        if ((targetElement === this.$E_1.get_element() || targetElement === this.$E_1.get_element().parentNode || targetElement === this.$E_1.get_element().parentNode.parentNode) && !this.$1O_2.$2X_0) {
            this.$1O_2.closeCalloutIfOpen();
            this.$1O_2.$A5_0();
        }
        return false;
    },
    
    handleFocusKeyDown: function SP_UI_CalloutWidget$handleFocusKeyDown(key, shiftPressed, ctrlPressed, altPressed) {ULSPOJ:;
        return SP.UI.ImageWidget.prototype.handleFocusKeyDown.call(this, key, shiftPressed, ctrlPressed, altPressed) || key === 13;
    },
    
    postProcessOuterElement: function SP_UI_CalloutWidget$postProcessOuterElement(outerElement) {ULSPOJ:;
        SP.UI.ImageWidget.prototype.postProcessOuterElement.call(this, outerElement);
        Sys.UI.DomElement.addCssClass(outerElement, 'ms-awiop-ClickableWidget ms-awiop-calloutLink');
    },
    
    render: function SP_UI_CalloutWidget$render(containerElement) {ULSPOJ:;
        SP.UI.ImageWidget.prototype.render.call(this, containerElement);
        containerElement.className = 'ms-ellipsis-a';
        this.$E_1.get_element().className = 'ms-ellipsis-icon';
    }
}


SP.UI.DefaultCalloutRenderer = function SP_UI_DefaultCalloutRenderer(task, services, launchPoint) {ULSPOJ:;
    SP.UI.DefaultCalloutRenderer.initializeBase(this, [ task, services, launchPoint ]);
    this.$2_1 = task;
    this.$N_1 = services;
}
SP.UI.DefaultCalloutRenderer.prototype = {
    $2_1: null,
    $N_1: null,
    
    onOpening: function SP_UI_DefaultCalloutRenderer$onOpening(contentElement, fnUpdateCalloutContents) {ULSPOJ:;
        this.$Aa_1(contentElement);
        if (this.$2_1.get_locationId() !== SP.UI.TaskListConstants.noValue) {
            this.drawLoadingGlyphForCallout();
            var $v_0 = this.$N_1.createDataProvider();
            var $v_1 = $v_0.getCalloutInfo(this.$2_1.get_id());
            var $$t_6 = this;
            $v_0.executeQuery(function($p1_0, $p1_1) {
                if ($p1_0) {
                    $$t_6.clearCalloutContent();
                    $$t_6.renderLocationLinkWithCustomUrl(contentElement, $v_1.get_title(), $v_1.get_url(), $v_1.get_directLinkTitle(), $v_1.get_directLinkUrl());
                    $$t_6.$5C_1(contentElement, WorkManagement.Res.TaskList_Callout_AlsoAssignedTo, $v_1.get_contacts());
                    $$t_6.$Ae_1(contentElement, $v_1.get_hierarchy());
                    $$t_6.$5C_1(contentElement, WorkManagement.Res.TaskList_Callout_Predecessors, $v_1.get_predecessors());
                    $$t_6.$5C_1(contentElement, WorkManagement.Res.TaskList_Callout_Successors, $v_1.get_successors());
                }
                else {
                    $$t_6.showCalloutError($p1_1[0]);
                }
                if (fnUpdateCalloutContents) {
                    fnUpdateCalloutContents();
                }
            });
        }
        else {
            if (fnUpdateCalloutContents) {
                fnUpdateCalloutContents();
            }
        }
    },
    
    $Ae_1: function SP_UI_DefaultCalloutRenderer$$Ae_1($p0, $p1) {
        if ($p1 && $p1.length > 0) {
            var $v_0 = SP.UI.CalloutRenderer.renderCalloutSectionContainer();
            var $v_1 = new SP.UI.HierarchyControl(WorkManagement.Res.TaskList_Callout_Hierarchy, $p1);
            $v_0.appendChild($v_1.get_element());
            $p0.appendChild($v_0);
        }
    },
    
    $5C_1: function SP_UI_DefaultCalloutRenderer$$5C_1($p0, $p1, $p2) {
        if ($p2 && $p2.length > 0) {
            var $v_0 = SP.UI.CalloutRenderer.renderCalloutSectionContainer();
            $v_0.appendChild(SP.UI.CalloutRenderer.renderCalloutSectionHeader($p1));
            $v_0.appendChild(SP.UI.CalloutRenderer.renderCalloutSectionElement($p2.join()));
            $p0.appendChild($v_0);
        }
    },
    
    $Aa_1: function SP_UI_DefaultCalloutRenderer$$Aa_1($p0) {
        if (!SP.ScriptUtility.isNullOrEmptyString(this.$2_1.get_description())) {
            var $v_0 = SP.UI.CalloutRenderer.renderCalloutSectionContainer();
            $v_0.appendChild(SP.UI.CalloutRenderer.renderCalloutSectionHeader(WorkManagement.Res.MyTasksDashboard_Desc_Title));
            $v_0.appendChild(SP.UI.CalloutRenderer.renderCalloutSectionElement(this.$2_1.get_description()));
            $p0.appendChild($v_0);
        }
    }
}


SP.UI.CheckBoxWidget = function SP_UI_CheckBoxWidget(task, services) {ULSPOJ:;
    SP.UI.CheckBoxWidget.initializeBase(this, [ SP.UI.TaskListConstants.get_sharePointCommonThemedImage(), SP.UI.ConstantsImage.checkMarkSpanStyle, SP.UI.ConstantsImage.checkMarkNotCompleted, services ]);
    this.$2_3 = task;
    this.$y_3 = this.$2_3.get_isCompleted();
}
SP.UI.CheckBoxWidget.prototype = {
    $2_3: null,
    $5l_3: false,
    $y_3: false,
    
    get_isAnimating: function SP_UI_CheckBoxWidget$get_isAnimating() {ULSPOJ:;
        return this.$5l_3;
    },
    set_isAnimating: function SP_UI_CheckBoxWidget$set_isAnimating(value) {ULSPOJ:;
        this.$5l_3 = value;
        SP.UI.DebugConsole.log('IsAnimating: ' + value.toString());
        return value;
    },
    
    get_isCompleted: function SP_UI_CheckBoxWidget$get_isCompleted() {ULSPOJ:;
        return this.$y_3;
    },
    set_isCompleted: function SP_UI_CheckBoxWidget$set_isCompleted(value) {ULSPOJ:;
        this.$y_3 = value;
        this.$5H_3(this.$y_3);
        return value;
    },
    
    onTaskUpdate: function SP_UI_CheckBoxWidget$onTaskUpdate(task) {ULSPOJ:;
        this.$2_3 = task;
        this.$y_3 = this.$2_3.get_isCompleted();
        this.$5H_3(this.$y_3);
    },
    
    render: function SP_UI_CheckBoxWidget$render(containerElement) {ULSPOJ:;
        SP.UI.InlineEditImageClusterWidget.prototype.render.call(this, containerElement);
        this.$5H_3(this.$y_3);
    },
    
    postProcessOuterElement: function SP_UI_CheckBoxWidget$postProcessOuterElement(outerElement) {ULSPOJ:;
        SP.UI.Widget.prototype.postProcessOuterElement.call(this, outerElement);
        Sys.UI.DomElement.addCssClass(outerElement, 'ms-awiop-ClickableWidget');
    },
    
    $B7_3: function SP_UI_CheckBoxWidget$$B7_3() {ULSPOJ:;
        var $v_0 = (!this.$y_3) ? 0 : 1;
        this.$3_0.SetCompleted([ this.$2_3.get_id() ], $v_0, null);
    },
    
    onClick: function SP_UI_CheckBoxWidget$onClick(targetElement) {ULSPOJ:;
        this.$B7_3();
        return true;
    },
    
    onDoubleClick: function SP_UI_CheckBoxWidget$onDoubleClick(targetElement) {ULSPOJ:;
        return true;
    },
    
    $5H_3: function SP_UI_CheckBoxWidget$$5H_3($p0) {
        if ($p0) {
            this.set_imageStyle(SP.UI.ConstantsImage.checkMarkCompleted);
            this.$M_1.get_element().title = Strings.STS.L_CheckMarkComplete_Tooltip;
        }
        else {
            this.set_imageStyle(SP.UI.ConstantsImage.checkMarkNotCompleted);
            this.$M_1.get_element().title = Strings.STS.L_CheckMarkNotComplete_Tooltip;
        }
    }
}


SP.UI.HeaderWidget = function SP_UI_HeaderWidget(text, services) {ULSPOJ:;
    this.$$d_$6o_1 = Function.createDelegate(this, this.$6o_1);
    this.$O_1 = 0;
    this.$c_1 = 0;
    SP.UI.HeaderWidget.initializeBase(this, [ services ]);
    this.$3i_1 = text;
}
SP.UI.HeaderWidget.prototype = {
    $x_1: null,
    $2B_1: null,
    $3i_1: null,
    $1c_1: null,
    
    get_sortField: function SP_UI_HeaderWidget$get_sortField() {ULSPOJ:;
        return this.$O_1;
    },
    set_sortField: function SP_UI_HeaderWidget$set_sortField(value) {ULSPOJ:;
        this.$O_1 = value;
        return value;
    },
    
    get_sortOrder: function SP_UI_HeaderWidget$get_sortOrder() {ULSPOJ:;
        return this.$c_1;
    },
    set_sortOrder: function SP_UI_HeaderWidget$set_sortOrder(value) {ULSPOJ:;
        this.$c_1 = value;
        this.$BK_1();
        return value;
    },
    
    get_focusableElement: function SP_UI_HeaderWidget$get_focusableElement() {ULSPOJ:;
        if (!this.$3i_1) {
            return null;
        }
        else {
            return this.$2B_1;
        }
    },
    
    render: function SP_UI_HeaderWidget$render(containerElement) {ULSPOJ:;
        this.$x_1 = document.createElement('div');
        this.$x_1.style.paddingLeft = '0px';
        this.$x_1.className = 'ms-vh-div';
        this.$Ad_1();
        containerElement.appendChild(this.$x_1);
        SP.UI.Widget.prototype.render.call(this, containerElement);
    },
    
    postProcessOuterElement: function SP_UI_HeaderWidget$postProcessOuterElement(outerElement) {ULSPOJ:;
        SP.UI.Widget.prototype.postProcessOuterElement.call(this, outerElement);
        outerElement.className = 'ms-tableCell ms-headerCellStyleNormal ms-vh2';
    },
    
    $Ad_1: function SP_UI_HeaderWidget$$Ad_1() {ULSPOJ:;
        if (!SP.ScriptUtility.isNullOrEmptyString(this.$3i_1)) {
            this.$2B_1 = document.createElement('a');
            this.$2B_1.href = 'javascript:;';
            $addHandler(this.$2B_1, 'click', this.$$d_$6o_1);
            SP.UI.DomUtilities.setText(this.$2B_1, this.$3i_1);
            this.$x_1.appendChild(this.$2B_1);
            this.$1c_1 = document.createElement('img');
            this.$1c_1.src = '/_layouts/15/images/sort.gif';
            this.$1c_1.style.border = '0';
            this.$x_1.appendChild(this.$1c_1);
        }
        else {
            var $v_0 = document.createElement('img');
            $v_0.src = SP.UI.ConstantsImage.blankImage;
            this.$x_1.appendChild($v_0);
        }
    },
    
    $6o_1: function SP_UI_HeaderWidget$$6o_1($p0) {
        this.$9J_1();
        this.$3_0.SetSorting(this.$O_1, this.$c_1, null);
    },
    
    $9J_1: function SP_UI_HeaderWidget$$9J_1() {ULSPOJ:;
        if (this.get_sortOrder() === 1) {
            this.set_sortOrder(2);
        }
        else if (this.get_sortOrder() === 2) {
            this.set_sortOrder(0);
        }
        else {
            this.set_sortOrder(1);
        }
    },
    
    $BK_1: function SP_UI_HeaderWidget$$BK_1() {ULSPOJ:;
        if (!this.$1c_1) {
            return;
        }
        if (!this.get_sortOrder()) {
            SP.UI.DomUtilities.hide(this.$1c_1);
        }
        else {
            SP.UI.DomUtilities.show(this.$1c_1);
            this.$1c_1.src = (this.get_sortOrder() === 1) ? '/_layouts/15/images/sort.gif' : '/_layouts/15/images/rsort.gif';
        }
    },
    
    dispose: function SP_UI_HeaderWidget$dispose() {ULSPOJ:;
        this.$x_1 = null;
        SP.UI.Widget.prototype.dispose.call(this);
    }
}


SP.UI.ImageWidget = function SP_UI_ImageWidget(path, services) {ULSPOJ:;
    SP.UI.ImageWidget.initializeBase(this, [ services ]);
    this.$5r_1 = path;
}
SP.UI.ImageWidget.prototype = {
    $E_1: null,
    $5r_1: null,
    $2p_1: null,
    
    get_focusableElement: function SP_UI_ImageWidget$get_focusableElement() {ULSPOJ:;
        return this.$1_0;
    },
    
    get_toolTip: function SP_UI_ImageWidget$get_toolTip() {ULSPOJ:;
        return this.$2p_1;
    },
    set_toolTip: function SP_UI_ImageWidget$set_toolTip(value) {ULSPOJ:;
        this.$2p_1 = value;
        if (this.$E_1) {
            this.$E_1.set_tooltip(this.$2p_1);
        }
        return value;
    },
    
    get_image: function SP_UI_ImageWidget$get_image() {ULSPOJ:;
        return this.$E_1;
    },
    
    render: function SP_UI_ImageWidget$render(containerElement) {ULSPOJ:;
        this.$E_1 = new SP.UI.ImageControl(null);
        this.$E_1.set_src(this.$5r_1);
        this.$E_1.get_element().tabIndex = -1;
        this.$E_1.get_element().style.verticalAlign = 'middle';
        if (!SP.ScriptUtility.isNullOrEmptyString(this.$2p_1)) {
            this.$E_1.set_tooltip(this.$2p_1);
        }
        containerElement.appendChild(this.$E_1.get_element());
        SP.UI.Widget.prototype.render.call(this, containerElement);
    },
    
    postProcessOuterElement: function SP_UI_ImageWidget$postProcessOuterElement(outerElement) {ULSPOJ:;
        SP.UI.Widget.prototype.postProcessOuterElement.call(this, outerElement);
        Sys.UI.DomElement.addCssClass(outerElement, 'ms-alignCenter');
    },
    
    handleFocusKeyDown: function SP_UI_ImageWidget$handleFocusKeyDown(key, shiftPressed, ctrlPressed, altPressed) {ULSPOJ:;
        if (key === 13 || key === 32 && !shiftPressed && !ctrlPressed && !altPressed) {
            this.onPress(this.$E_1.get_element());
            return true;
        }
        return SP.UI.Widget.prototype.handleFocusKeyDown.call(this, key, shiftPressed, ctrlPressed, altPressed);
    },
    
    onPress: function SP_UI_ImageWidget$onPress(target) {ULSPOJ:;
        this.onClick(target);
    },
    
    dispose: function SP_UI_ImageWidget$dispose() {ULSPOJ:;
        if (this.$E_1) {
            this.$E_1.dispose();
            this.$E_1 = null;
        }
        SP.UI.Widget.prototype.dispose.call(this);
    }
}


SP.UI.ImageClusterWidget = function SP_UI_ImageClusterWidget(imageMapPath, spanStyle, initialImageStyle, services) {ULSPOJ:;
    SP.UI.ImageClusterWidget.initializeBase(this, [ services ]);
    this.$5h_1 = imageMapPath;
    this.$4m_1 = spanStyle;
    this.$4H_1 = initialImageStyle;
}
SP.UI.ImageClusterWidget.$5D = function SP_UI_ImageClusterWidget$$5D($p0, $p1) {
    $p0.setAttribute('style', $p1);
}
SP.UI.ImageClusterWidget.$6R = function SP_UI_ImageClusterWidget$$6R($p0) {
    return $p0.getAttribute('style').toString();
}
SP.UI.ImageClusterWidget.prototype = {
    $M_1: null,
    $18_1: null,
    $5h_1: null,
    $4m_1: null,
    $4H_1: null,
    
    get_imageControl: function SP_UI_ImageClusterWidget$get_imageControl() {ULSPOJ:;
        return this.$M_1;
    },
    
    get_focusableElement: function SP_UI_ImageClusterWidget$get_focusableElement() {ULSPOJ:;
        return this.$18_1;
    },
    
    get_imageStyle: function SP_UI_ImageClusterWidget$get_imageStyle() {ULSPOJ:;
        return SP.UI.ImageClusterWidget.$6R(this.$M_1.get_element());
    },
    set_imageStyle: function SP_UI_ImageClusterWidget$set_imageStyle(value) {ULSPOJ:;
        if (!this.$M_1.get_element()) {
            this.$4H_1 = value;
        }
        else {
            SP.UI.ImageClusterWidget.$5D(this.$M_1.get_element(), value);
        }
        return value;
    },
    
    get_spanStyle: function SP_UI_ImageClusterWidget$get_spanStyle() {ULSPOJ:;
        return SP.UI.ImageClusterWidget.$6R(this.$18_1);
    },
    set_spanStyle: function SP_UI_ImageClusterWidget$set_spanStyle(value) {ULSPOJ:;
        if (!this.$18_1) {
            this.$4m_1 = value;
        }
        else {
            SP.UI.ImageClusterWidget.$5D(this.$18_1, value);
        }
        return value;
    },
    
    handleFocusKeyDown: function SP_UI_ImageClusterWidget$handleFocusKeyDown(key, shiftPressed, ctrlPressed, altPressed) {ULSPOJ:;
        if (key === 13 || key === 32 && !shiftPressed && !ctrlPressed && !altPressed) {
            this.onPress(this.$M_1.get_element());
            return true;
        }
        return SP.UI.Widget.prototype.handleFocusKeyDown.call(this, key, shiftPressed, ctrlPressed, altPressed);
    },
    
    onPress: function SP_UI_ImageClusterWidget$onPress(target) {ULSPOJ:;
        this.onClick(target);
    },
    
    dispose: function SP_UI_ImageClusterWidget$dispose() {ULSPOJ:;
        if (this.$M_1) {
            this.$M_1.dispose();
            this.$M_1 = null;
        }
        this.$18_1 = null;
        SP.UI.Widget.prototype.dispose.call(this);
    },
    
    render: function SP_UI_ImageClusterWidget$render(containerElement) {ULSPOJ:;
        SP.UI.Widget.prototype.render.call(this, containerElement);
        this.$M_1 = new SP.UI.ImageControl(this.$5h_1);
        this.$M_1.get_element().tabIndex = -1;
        this.set_imageStyle(this.$4H_1);
        this.$18_1 = document.createElement('span');
        SP.UI.ImageClusterWidget.$5D(this.$18_1, this.$4m_1);
        this.$18_1.style.verticalAlign = 'middle';
        this.$18_1.appendChild(this.$M_1.get_element());
        Sys.UI.DomElement.addCssClass(containerElement, 'ms-alignCenter');
        containerElement.appendChild(this.$18_1);
    }
}


SP.UI.InlineEditImageClusterWidget = function SP_UI_InlineEditImageClusterWidget(imageMapPath, spanStyle, initialImageStyle, services) {ULSPOJ:;
    SP.UI.InlineEditImageClusterWidget.initializeBase(this, [ imageMapPath, spanStyle, initialImageStyle, services ]);
}
SP.UI.InlineEditImageClusterWidget.prototype = {
    
    render: function SP_UI_InlineEditImageClusterWidget$render(containerElement) {ULSPOJ:;
        SP.UI.ImageClusterWidget.prototype.render.call(this, containerElement);
        containerElement.style.marginBottom = '3px';
    }
}


SP.UI.HeaderImageClusterWidget = function SP_UI_HeaderImageClusterWidget(imageMapPath, spanStyle, initialImageStyle, services) {ULSPOJ:;
    SP.UI.HeaderImageClusterWidget.initializeBase(this, [ imageMapPath, spanStyle, initialImageStyle, services ]);
}
SP.UI.HeaderImageClusterWidget.prototype = {
    
    postProcessOuterElement: function SP_UI_HeaderImageClusterWidget$postProcessOuterElement(outerElement) {ULSPOJ:;
        SP.UI.Widget.prototype.postProcessOuterElement.call(this, outerElement);
        Sys.UI.DomElement.removeCssClass(outerElement, 'ms-verticalAlignMiddle');
    }
}


SP.UI.LabelWrapperWidget = function SP_UI_LabelWrapperWidget(services) {ULSPOJ:;
    SP.UI.LabelWrapperWidget.initializeBase(this, [ services ]);
}
SP.UI.LabelWrapperWidget.prototype = {
    $k_1: null,
    
    get_focusableElement: function SP_UI_LabelWrapperWidget$get_focusableElement() {ULSPOJ:;
        return this.$k_1;
    },
    
    get_boundElement: function SP_UI_LabelWrapperWidget$get_boundElement() {ULSPOJ:;
        return this.$1_0;
    },
    
    get_labelElement: function SP_UI_LabelWrapperWidget$get_labelElement() {ULSPOJ:;
        return this.$k_1;
    },
    
    onClick: function SP_UI_LabelWrapperWidget$onClick(targetElement) {ULSPOJ:;
        if (targetElement === this.$k_1 || this.$k_1.contains(targetElement)) {
            this.onClickLabel();
            return true;
        }
        else if (this.$1q_0.get_isSelected()) {
            this.beginInlineEditing();
            return true;
        }
        else {
            return false;
        }
    },
    
    onClickLabel: function SP_UI_LabelWrapperWidget$onClickLabel() {
    },
    
    render: function SP_UI_LabelWrapperWidget$render(containerElement) {ULSPOJ:;
        this.$k_1 = this.renderLabel();
        Sys.UI.DomElement.addCssClass(containerElement, 'ms-awiop-InlineEditControl ms-awiop-LabelParent ms-awiop-WordBreak');
        containerElement.appendChild(this.$k_1);
        SP.UI.Widget.prototype.render.call(this, containerElement);
    },
    
    setLabelText: function SP_UI_LabelWrapperWidget$setLabelText(value) {ULSPOJ:;
        SP.UI.DomUtilities.setText(this.$k_1, value);
    }
}


SP.UI.PersonalTaskWidget = function SP_UI_PersonalTaskWidget(task, services) {ULSPOJ:;
    SP.UI.PersonalTaskWidget.initializeBase(this, [ services ]);
    this.$2_1 = task;
}
SP.UI.PersonalTaskWidget.prototype = {
    $2_1: null,
    
    get_focusableElement: function SP_UI_PersonalTaskWidget$get_focusableElement() {ULSPOJ:;
        return null;
    },
    
    render: function SP_UI_PersonalTaskWidget$render(containerElement) {ULSPOJ:;
        SP.UI.Widget.prototype.render.call(this, containerElement);
        if (this.$2_1.get_isPersonal()) {
            var $v_0 = document.createElement('span');
            $v_0.className = 'js-sharingHint-iconContainer';
            containerElement.appendChild($v_0);
            var $v_1 = document.createElement('img');
            $v_1.title = WorkManagement.Res.TaskList_PersonalTask_ToolTip;
            $v_1.src = SP.UI.TaskListConstants.get_sharePointCommonThemedImage();
            $v_1.className = 'js-sharingHint-unshared';
            $v_0.appendChild($v_1);
            Sys.UI.DomElement.addCssClass(containerElement, 'ms-alignCenter');
        }
    },
    
    postProcessOuterElement: function SP_UI_PersonalTaskWidget$postProcessOuterElement(outerElement) {ULSPOJ:;
        SP.UI.Widget.prototype.postProcessOuterElement.call(this, outerElement);
        Sys.UI.DomElement.addCssClass(outerElement, 'ms-awiop-HoverWidget');
    }
}


SP.UI.PinnedWidget = function SP_UI_PinnedWidget(task, services) {ULSPOJ:;
    SP.UI.PinnedWidget.initializeBase(this, [ SP.UI.TaskListConstants.get_sharePointCommonThemedImage(), SP.UI.ConstantsImage.exclamationSolidSpanStyle, SP.UI.ConstantsImage.exclamationSolidImageStyle, services ]);
    this.$2_3 = task;
    this.$2d_3 = this.$2_3.get_pinAge();
}
SP.UI.PinnedWidget.prototype = {
    $2_3: null,
    $2d_3: 0,
    
    get_pinAge: function SP_UI_PinnedWidget$get_pinAge() {ULSPOJ:;
        return this.$2d_3;
    },
    set_pinAge: function SP_UI_PinnedWidget$set_pinAge(value) {ULSPOJ:;
        this.$2d_3 = value;
        this.$5I_3();
        return value;
    },
    
    onTaskUpdate: function SP_UI_PinnedWidget$onTaskUpdate(task) {ULSPOJ:;
        this.$2_3 = task;
        if (this.$M_1) {
            this.$2d_3 = this.$2_3.get_pinAge();
            this.$5I_3();
        }
    },
    
    render: function SP_UI_PinnedWidget$render(containerElement) {ULSPOJ:;
        SP.UI.InlineEditImageClusterWidget.prototype.render.call(this, containerElement);
        containerElement.style.marginBottom = '0px';
        this.$M_1.set_tooltip(WorkManagement.Res.TaskListImportantTooltip);
        this.$5I_3();
    },
    
    postProcessOuterElement: function SP_UI_PinnedWidget$postProcessOuterElement(outerElement) {ULSPOJ:;
        SP.UI.Widget.prototype.postProcessOuterElement.call(this, outerElement);
        Sys.UI.DomElement.addCssClass(outerElement, 'ms-awiop-ClickableWidget');
    },
    
    handleFocusKeyDown: function SP_UI_PinnedWidget$handleFocusKeyDown(key, shiftPressed, ctrlPressed, altPressed) {ULSPOJ:;
        if (key === 13) {
            this.$75_3();
            return true;
        }
        else {
            return SP.UI.ImageClusterWidget.prototype.handleFocusKeyDown.call(this, key, shiftPressed, ctrlPressed, altPressed);
        }
    },
    
    onClick: function SP_UI_PinnedWidget$onClick(targetElement) {ULSPOJ:;
        this.$75_3();
        return true;
    },
    
    $75_3: function SP_UI_PinnedWidget$$75_3() {ULSPOJ:;
        var $v_0 = this.get_pinAge();
        var $v_1 = (!this.get_pinAge()) ? 0 : 1;
        var $$t_3 = this;
        this.$3_0.SetPinned([ this.$2_3.get_id() ], $v_1, function($p1_0) {
            if (!$p1_0) {
                $$t_3.set_pinAge($v_0);
            }
        });
    },
    
    $5I_3: function SP_UI_PinnedWidget$$5I_3() {ULSPOJ:;
        switch (this.$2d_3) {
            case 1:
                this.set_spanStyle(SP.UI.ConstantsImage.exclamationSolidSpanStyle);
                this.set_imageStyle(SP.UI.ConstantsImage.exclamationSolidImageStyle);
                this.$M_1.set_opacity(1);
                break;
            case 2:
                this.set_spanStyle(SP.UI.ConstantsImage.exclamationSolidSpanStyle);
                this.set_imageStyle(SP.UI.ConstantsImage.exclamationSolidImageStyle);
                this.$M_1.set_opacity(0.4);
                break;
            case 0:
            default:
                this.set_spanStyle(SP.UI.ConstantsImage.exclamationHollowSpanStyle);
                this.set_imageStyle(SP.UI.ConstantsImage.exclamationHollowImageStyle);
                this.$M_1.set_opacity(1);
                break;
        }
    }
}


SP.UI.TextWidget = function SP_UI_TextWidget(services) {ULSPOJ:;
    SP.UI.TextWidget.initializeBase(this, [ services ]);
}
SP.UI.TextWidget.prototype = {
    $Z_1: null,
    
    get_value: function SP_UI_TextWidget$get_value() {ULSPOJ:;
        return this.$Z_1.get_value();
    },
    set_value: function SP_UI_TextWidget$set_value(value) {ULSPOJ:;
        this.$Z_1.set_value(value);
        return value;
    },
    
    get_focusableElement: function SP_UI_TextWidget$get_focusableElement() {ULSPOJ:;
        return this.$Z_1.get_element();
    },
    
    get_textBox: function SP_UI_TextWidget$get_textBox() {ULSPOJ:;
        return this.$Z_1;
    },
    
    onClick: function SP_UI_TextWidget$onClick(targetElement) {ULSPOJ:;
        return true;
    },
    
    render: function SP_UI_TextWidget$render(containerElement) {ULSPOJ:;
        this.$Z_1 = new SP.UI.TextBox();
        this.$Z_1.hideWatermark();
        this.$Z_1.addCssClass('ms-fullWidth');
        containerElement.appendChild(this.$Z_1.get_element());
    },
    
    dispose: function SP_UI_TextWidget$dispose() {ULSPOJ:;
        if (this.$Z_1) {
            this.$Z_1.dispose();
        }
        SP.UI.Widget.prototype.dispose.call(this);
    },
    
    indent: function SP_UI_TextWidget$indent() {ULSPOJ:;
        SP.UI.DomUtilities.setMarginLeftIntl(this.$1_0, SP.UI.TaskListConstants.indentationMargin);
    }
}


SP.UI.SelectionWidget = function SP_UI_SelectionWidget(services, parentControl) {ULSPOJ:;
    SP.UI.SelectionWidget.initializeBase(this, [ services ]);
    this.$3V_1 = parentControl;
}
SP.UI.SelectionWidget.prototype = {
    $3V_1: null,
    
    get_focusableElement: function SP_UI_SelectionWidget$get_focusableElement() {ULSPOJ:;
        return null;
    },
    
    handleFocusKeyDown: function SP_UI_SelectionWidget$handleFocusKeyDown(key, shiftPressed, ctrlPressed, altPressed) {ULSPOJ:;
        if (key === 13 || key === 32 && !altPressed) {
            this.$6x_1();
            return true;
        }
        else {
            return SP.UI.Widget.prototype.handleFocusKeyDown.call(this, key, shiftPressed, ctrlPressed, altPressed);
        }
    },
    
    onClick: function SP_UI_SelectionWidget$onClick(targetElement) {ULSPOJ:;
        this.$6x_1();
        return true;
    },
    
    $6x_1: function SP_UI_SelectionWidget$$6x_1() {ULSPOJ:;
        if (this.$3V_1.get_isSelected()) {
            this.$3_0.get_selectionManager().removeFromSelection(this.$3V_1.$2_2.get_id().toString());
        }
        else {
            this.$3_0.get_selectionManager().select(this.$3V_1.$2_2.get_id().toString());
        }
    },
    
    postProcessOuterElement: function SP_UI_SelectionWidget$postProcessOuterElement(outerElement) {ULSPOJ:;
        SP.UI.Widget.prototype.postProcessOuterElement.call(this, outerElement);
        Sys.UI.DomElement.addCssClass(outerElement, 'ms-awiop-ClickableWidget');
    }
}


SP.UI.SelectionImageWidget = function SP_UI_SelectionImageWidget(services, parentControl) {ULSPOJ:;
    SP.UI.SelectionImageWidget.initializeBase(this, [ services, parentControl ]);
}
SP.UI.SelectionImageWidget.prototype = {
    $5q_2: null,
    
    get_focusableElement: function SP_UI_SelectionImageWidget$get_focusableElement() {ULSPOJ:;
        return this.$5q_2;
    },
    
    render: function SP_UI_SelectionImageWidget$render(containerElement) {ULSPOJ:;
        SP.UI.Widget.prototype.render.call(this, containerElement);
        var $v_0 = document.createElement('div');
        $v_0.style.width = SP.UI.TaskListConstants.selectionFieldWidth.toString() + 'px';
        var $v_1 = document.createElement('span');
        $v_1.className = 'ms-selectitem-span';
        var $v_2 = document.createElement('img');
        $v_2.src = SP.UI.ConstantsImage.sharepointCommonImage;
        $v_2.className = 'ms-awiop-selectitem-icon';
        $v_1.appendChild($v_2);
        $v_0.appendChild($v_1);
        containerElement.appendChild($v_0);
    },
    
    postProcessOuterElement: function SP_UI_SelectionImageWidget$postProcessOuterElement(outerElement) {ULSPOJ:;
        this.$5q_2 = outerElement;
        SP.UI.SelectionWidget.prototype.postProcessOuterElement.call(this, outerElement);
        Sys.UI.DomElement.addCssClass(outerElement, 'ms-awiop-selectitem ms-awiop-draggable');
        outerElement.style.textAlign = 'center';
    }
}


SP.UI.ServerOperationWidget = function SP_UI_ServerOperationWidget(services) {ULSPOJ:;
    SP.UI.ServerOperationWidget.initializeBase(this, [ SP.UI.ServerOperationWidget.$57, services ]);
}
SP.UI.ServerOperationWidget.prototype = {
    $4n_2: 0,
    
    get_$30_2: function SP_UI_ServerOperationWidget$get_$30_2() {ULSPOJ:;
        return this.$4n_2;
    },
    set_$30_2: function SP_UI_ServerOperationWidget$set_$30_2($p0) {
        this.$4n_2 = $p0;
        switch (this.$4n_2) {
            case 0:
                this.set_visible(false);
                break;
            case 1:
                this.set_visible(true);
                this.$E_1.set_src(SP.UI.ServerOperationWidget.$57);
                break;
            case 2:
                this.set_visible(true);
                this.$E_1.set_src(SP.UI.ServerOperationWidget.$6M);
                break;
            default:
                throw Error.invalidOperation();
        }
        return $p0;
    },
    
    render: function SP_UI_ServerOperationWidget$render(containerElement) {ULSPOJ:;
        SP.UI.ImageWidget.prototype.render.call(this, containerElement);
        this.$E_1.get_imageElement().style.marginBottom = '2px';
        this.$E_1.get_imageElement().style.position = 'relative';
        if (XUI.Html.GetDirection() === 'rtl') {
            this.$E_1.get_imageElement().style.left = '4px';
        }
        else {
            this.$E_1.get_imageElement().style.right = '4px';
        }
    }
}


SP.UI.TaskDueDateWidget = function SP_UI_TaskDueDateWidget(task, services) {ULSPOJ:;
    SP.UI.TaskDueDateWidget.initializeBase(this, [ services ]);
    this.$2_2 = task;
}
SP.UI.TaskDueDateWidget.$9O = function SP_UI_TaskDueDateWidget$$9O($p0) {
    if (SP.UI.DateTimeUtilities.isValidDate($p0)) {
        var $v_0 = new Date();
        return $v_0.getTime() > $p0.getTime();
    }
    return false;
}
SP.UI.TaskDueDateWidget.prototype = {
    $2_2: null,
    $4A_2: null,
    
    onTaskUpdate: function SP_UI_TaskDueDateWidget$onTaskUpdate(task) {ULSPOJ:;
        this.$2_2 = task;
        this.updateDate(this.$2_2.get_dueDate());
    },
    
    updateDate: function SP_UI_TaskDueDateWidget$updateDate(date) {ULSPOJ:;
        this.$4A_2.set_date(date);
        if (SP.UI.TaskDueDateWidget.$9O(date)) {
            Sys.UI.DomElement.addCssClass(this.$k_1, 'ms-awiop-TaskOverDue');
        }
        else {
            Sys.UI.DomElement.removeCssClass(this.$k_1, 'ms-awiop-TaskOverDue');
        }
    },
    
    onClickLabel: function SP_UI_TaskDueDateWidget$onClickLabel() {ULSPOJ:;
        var $v_0 = this.$1q_0;
        if ($v_0.get_isSelected()) {
            this.beginInlineEditing();
        }
    },
    
    beginInlineEditing: function SP_UI_TaskDueDateWidget$beginInlineEditing() {ULSPOJ:;
        var $v_0 = this.$1q_0;
        $v_0.inlineEditDate();
    },
    
    render: function SP_UI_TaskDueDateWidget$render(containerElement) {ULSPOJ:;
        SP.UI.LabelWrapperWidget.prototype.render.call(this, containerElement);
        this.$4A_2 = this.$3_0.get_friendlyDateComponent().getFriendlyDateControl(this.$2_2.get_dueDate(), false);
        this.setLabelText('');
        this.$k_1.appendChild(this.$4A_2.get_element());
        this.updateDate(this.$2_2.get_dueDate());
    },
    
    renderLabel: function SP_UI_TaskDueDateWidget$renderLabel() {ULSPOJ:;
        var $v_0 = document.createElement('span');
        $v_0.className = 'ms-awiop-Label';
        return $v_0;
    }
}


SP.UI.TaskNameWidget = function SP_UI_TaskNameWidget(task, services) {ULSPOJ:;
    SP.UI.TaskNameWidget.initializeBase(this, [ services ]);
    this.$2_2 = task;
}
SP.UI.TaskNameWidget.prototype = {
    $2_2: null,
    
    onTaskUpdate: function SP_UI_TaskNameWidget$onTaskUpdate(task) {ULSPOJ:;
        this.$2_2 = task;
        this.setTaskLabel(this.$2_2.get_name());
    },
    
    animateStrikethrough: function SP_UI_TaskNameWidget$animateStrikethrough(fnComplete) {ULSPOJ:;
        var $$t_1 = this;
        SP.UI.AnimationUtilities.ensureAnimationScriptsAreLoaded(function() {ULSPOJ:;
            SPAnimationUtility.BasicAnimator.StrikeThrough($$t_1.$1_0, $$t_1.$k_1.offsetWidth, fnComplete, null);
        });
    },
    
    removeStrikethrough: function SP_UI_TaskNameWidget$removeStrikethrough() {ULSPOJ:;
        this.$1_0.style.textDecoration = '';
    },
    
    renderLabel: function SP_UI_TaskNameWidget$renderLabel() {ULSPOJ:;
        var $v_0 = document.createElement('a');
        $v_0.href = 'javascript:;';
        $v_0.className = 'ms-verticalAlignTop ms-awiop-WordBreak ms-awiop-TaskName ms-listlink';
        $v_0.style['word-break'] = 'break-word';
        return $v_0;
    },
    
    onClickLabel: function SP_UI_TaskNameWidget$onClickLabel() {ULSPOJ:;
        SP.UI.LabelWrapperWidget.prototype.onClickLabel.call(this);
        SP.UI.Utilities.showTaskDetailsDialog(this.$2_2.get_editUrl(), this.$2_2.get_id());
    },
    
    beginInlineEditing: function SP_UI_TaskNameWidget$beginInlineEditing() {ULSPOJ:;
        var $v_0 = this.$1q_0;
        $v_0.inlineEditName();
    },
    
    render: function SP_UI_TaskNameWidget$render(containerElement) {ULSPOJ:;
        SP.UI.LabelWrapperWidget.prototype.render.call(this, containerElement);
        this.setTaskLabel(this.$2_2.get_name());
        Sys.UI.DomElement.addCssClass(containerElement, 'ms-awiop-Label');
    },
    
    setTaskLabel: function SP_UI_TaskNameWidget$setTaskLabel(name) {ULSPOJ:;
        if (SP.ScriptUtility.isNullOrEmptyString(name)) {
            this.setLabelText(WorkManagement.Res.TaskList_Empty_TaskName);
            Sys.UI.DomElement.addCssClass(this.$k_1, SP.UI.TaskListConstants.cssHelperText);
        }
        else {
            this.setLabelText(name);
            Sys.UI.DomElement.removeCssClass(this.$k_1, SP.UI.TaskListConstants.cssHelperText);
        }
    }
}


SP.UI.Widget = function SP_UI_Widget(services) {ULSPOJ:;
    this.$6_0 = new Sys.EventHandlerList();
    this.$1_0 = document.createElement('div');
    this.$3_0 = services;
}
SP.UI.Widget.prototype = {
    $3_0: null,
    $1_0: null,
    $1f_0: true,
    $46_0: false,
    $1q_0: null,
    
    get_focusableElement: function SP_UI_Widget$get_focusableElement() {ULSPOJ:;
        return this.$1_0;
    },
    
    get_boundElement: function SP_UI_Widget$get_boundElement() {ULSPOJ:;
        return this.get_focusableElement();
    },
    
    get_parent: function SP_UI_Widget$get_parent() {ULSPOJ:;
        return this.$1q_0;
    },
    set_parent: function SP_UI_Widget$set_parent(value) {ULSPOJ:;
        this.$1q_0 = value;
        return value;
    },
    
    get_services: function SP_UI_Widget$get_services() {ULSPOJ:;
        return this.$3_0;
    },
    
    get_events: function SP_UI_Widget$get_events() {ULSPOJ:;
        return this.$6_0;
    },
    
    get_element: function SP_UI_Widget$get_element() {ULSPOJ:;
        return this.$1_0;
    },
    
    get_visible: function SP_UI_Widget$get_visible() {ULSPOJ:;
        return this.$1f_0;
    },
    set_visible: function SP_UI_Widget$set_visible(value) {ULSPOJ:;
        if (value) {
            if (!this.$46_0) {
                this.draw();
            }
        }
        if (value !== this.$1f_0) {
            this.$1f_0 = value;
            if (this.$1f_0) {
                this.$1_0.style.visibility = '';
            }
            else {
                this.$1_0.style.visibility = 'hidden';
            }
        }
        return value;
    },
    
    onClick: function SP_UI_Widget$onClick(targetElement) {ULSPOJ:;
        return false;
    },
    
    onDoubleClick: function SP_UI_Widget$onDoubleClick(targetElement) {ULSPOJ:;
        return false;
    },
    
    onEnterView: function SP_UI_Widget$onEnterView() {
    },
    
    onLeaveView: function SP_UI_Widget$onLeaveView() {
    },
    
    onGotFocus: function SP_UI_Widget$onGotFocus() {
    },
    
    onLeaveFocus: function SP_UI_Widget$onLeaveFocus() {
    },
    
    handleFocusKeyDown: function SP_UI_Widget$handleFocusKeyDown(key, shiftPressed, ctrlPressed, altPressed) {ULSPOJ:;
        return false;
    },
    
    draw: function SP_UI_Widget$draw() {ULSPOJ:;
        if (!this.$46_0) {
            this.$46_0 = true;
            this.render(this.$1_0);
            this.bindWidgetElement();
        }
    },
    
    dispose: function SP_UI_Widget$dispose() {ULSPOJ:;
        if (this.$1_0) {
            SP.UI.TableRenderUtilities.disposeBoundControl(this.$1_0);
        }
    },
    
    render: function SP_UI_Widget$render(containerElement) {
    },
    
    bindWidgetElement: function SP_UI_Widget$bindWidgetElement() {ULSPOJ:;
        if (this.get_focusableElement()) {
            this.get_focusableElement().tabIndex = 0;
            SP.UI.TableRenderUtilities.setBoundControl(this.get_boundElement(), this);
        }
    },
    
    postProcessOuterElement: function SP_UI_Widget$postProcessOuterElement(outerElement) {
    }
}


SP.UI.WidgetRowControl = function SP_UI_WidgetRowControl(serviceProvider) {ULSPOJ:;
    this.$17_1 = new (SP.UI.List.$$(SP.UI.Widget))();
    this.$41_1 = {};
    SP.UI.WidgetRowControl.initializeBase(this, [ serviceProvider ]);
}
SP.UI.WidgetRowControl.prototype = {
    
    get_widgets: function SP_UI_WidgetRowControl$get_widgets() {ULSPOJ:;
        return this.$17_1.toArray();
    },
    
    onEnterView: function SP_UI_WidgetRowControl$onEnterView() {ULSPOJ:;
        for (var $v_0 = 0; $v_0 < this.$17_1.get_length(); $v_0++) {
            this.$17_1.get_item($v_0).onEnterView();
        }
        SP.UI.RowControl.prototype.onEnterView.call(this);
    },
    
    onLeaveView: function SP_UI_WidgetRowControl$onLeaveView() {ULSPOJ:;
        for (var $v_0 = 0; $v_0 < this.$17_1.get_length(); $v_0++) {
            this.$17_1.get_item($v_0).onLeaveView();
        }
        SP.UI.RowControl.prototype.onLeaveView.call(this);
    },
    
    renderRow: function SP_UI_WidgetRowControl$renderRow() {ULSPOJ:;
        for (var $$arr_0 = this.$3_0.get_columnManager().get_columns(), $$len_1 = $$arr_0.length, $$idx_2 = 0; $$idx_2 < $$len_1; ++$$idx_2) {
            var $v_0 = $$arr_0[$$idx_2];
            var $v_1 = this.$3_0.get_columnManager().getColumnWidthInPixels($v_0.$J_0);
            var $v_2 = document.createElement('div');
            $v_2.className = 'ms-tableCell ms-verticalAlignMiddle ms-awiop-Widget';
            $v_2.style.width = $v_1;
            var $v_3 = this.$Af_1($v_0);
            if ($v_3 && $v_3.$1_0) {
                $v_2.appendChild($v_3.$1_0);
                $v_3.postProcessOuterElement($v_2);
                $v_3.draw();
            }
            this.$41_1[$v_0.$J_0.toString()] = $v_2;
            this.$1_0.appendChild($v_2);
        }
        SP.UI.RowControl.prototype.renderRow.call(this);
        this.onResize(this.$3_0.get_columnManager());
    },
    
    $Af_1: function SP_UI_WidgetRowControl$$Af_1($p0) {
        var $v_0 = this.createWidgetForColumn($p0);
        if ($v_0) {
            this.$7O_1($v_0);
        }
        return $v_0;
    },
    
    $7O_1: function SP_UI_WidgetRowControl$$7O_1($p0) {
        this.$17_1.add($p0);
        $p0.$1q_0 = this;
    },
    
    onResize: function SP_UI_WidgetRowControl$onResize(columnManager) {ULSPOJ:;
        var $v_0 = 0;
        var $v_1 = columnManager.get_columns();
        for (var $$arr_3 = $v_1, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_2 = $$arr_3[$$idx_5];
            var $v_3 = this.$41_1[$v_2.$J_0.toString()];
            if ($v_3) {
                var $v_4 = $v_0.toString() + 'px';
                if (SP.UI.DomUtilities.isLtr()) {
                    $v_3.style.left = $v_4;
                }
                else {
                    $v_3.style.right = $v_4;
                }
                $v_3.style.width = columnManager.getColumnWidthInPixels($v_2.$J_0);
            }
            $v_0 += columnManager.getColumnWidth($v_2.$J_0);
        }
        SP.UI.RowControl.prototype.onResize.call(this, columnManager);
    },
    
    dispose: function SP_UI_WidgetRowControl$dispose() {ULSPOJ:;
        for (var $v_0 = 0; $v_0 < this.$17_1.get_length(); $v_0++) {
            $clearHandlers(this.$17_1.get_item($v_0).$1_0);
            this.$17_1.get_item($v_0).dispose();
        }
        SP.UI.RowControl.prototype.dispose.call(this);
    },
    
    createWidgetForColumn: function SP_UI_WidgetRowControl$createWidgetForColumn(info) {ULSPOJ:;
        return null;
    },
    
    onWidgetFocused: function SP_UI_WidgetRowControl$onWidgetFocused(widget) {
    }
}


SP.UI.ViewSelector = function SP_UI_ViewSelector(viewsInfo) {ULSPOJ:;
    this.$$d_$A6_0 = Function.createDelegate(this, this.$A6_0);
    this.$$d_$9q_0 = Function.createDelegate(this, this.$9q_0);
    this.$2J_0 = new (SP.UI.List.$$(SP.UI.ViewExtension))();
    this.$1o_0 = new (SP.UI.List.$$(SP.WorkManagement.OM.ViewSelectionInfo))();
    this.$4R_0 = {};
    this.$60_0 = SP.UI.ViewSelector.$7m(viewsInfo);
    SP.UI.ViewSelector.$3l++;
    this.$4Y_0 = 'pivotControlText' + SP.UI.ViewSelector.$3l.toString();
    this.$4S_0 = 'pivotMenu' + SP.UI.ViewSelector.$3l.toString();
    this.$6u_0(this.$69_0(SP.UI.SharedComponentManager.$5.$1C_0.get_allLocations()));
    this.$5a_0 = new SP.UI.FilterControl();
    SP.UI.SharedComponentManager.$5.$1C_0.add_$9U_0(this.$$d_$9q_0);
}
SP.UI.ViewSelector.$7m = function SP_UI_ViewSelector$$7m($p0) {
    var $v_0 = new Array($p0.length);
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        $v_0[$v_1] = SP.WorkManagement.OM.ViewSelectionInfo.newObject(SP.UI.CsomUtilities.createDefaultClientRuntimeContext());
        $v_0[$v_1].fromJson($p0[$v_1]);
    }
    return $v_0;
}
SP.UI.ViewSelector.prototype = {
    $b_0: null,
    $5a_0: null,
    $5u_0: 0,
    $60_0: null,
    $4Y_0: null,
    $4S_0: null,
    $I_0: null,
    
    $9q_0: function SP_UI_ViewSelector$$9q_0($p0, $p1) {
        var $v_0 = SP.UI.SharedComponentManager.$5.$1C_0.get_allLocations();
        var $v_1 = this.$69_0($v_0);
        this.$6u_0($v_1);
    },
    
    $6u_0: function SP_UI_ViewSelector$$6u_0($p0) {
        if (!this.$9Q_0()) {
            var $$t_1 = this;
            EnsureScriptFunc(SP.UI.TaskListConstants.pivotControlJavaScript, 'ClientPivotControl', function() {ULSPOJ:;
                $$t_1.$b_0 = new ClientPivotControl();
                $$t_1.$b_0.ShowMenuCheckboxes = true;
                $$t_1.$b_0.ShowMenuClose = $p0.length > 0;
                $$t_1.$b_0.ShowMenuIcons = true;
                $$t_1.$b_0.PivotParentId = $$t_1.$4Y_0;
                $$t_1.$b_0.OverflowMenuId = $$t_1.$4S_0;
                $$t_1.$2J_0.clear();
                $$t_1.$AS_0($$t_1.$60_0);
                $$t_1.$AT_0();
                $$t_1.$7N_0();
                if ($p0.length > 0) {
                    $$t_1.$b_0.AddMenuSeparator();
                    $$t_1.$7H_0();
                    $$t_1.$7J_0($p0);
                }
                window.setTimeout(function() {ULSPOJ:;
                    $$t_1.$b_0.Render();
                }, 0);
            });
        }
    },
    
    $69_0: function SP_UI_ViewSelector$$69_0($p0) {
        var $v_0 = new (SP.UI.List.$$(SP.WorkManagement.OM.ViewSelectionInfo))();
        for (var $v_1 = 0; $v_1 < $p0.get_length(); $v_1++) {
            if ($p0.get_item($v_1).get_important()) {
                var $v_2 = SP.WorkManagement.OM.ViewSelectionInfo.newObject(SP.UI.CsomUtilities.createDefaultClientRuntimeContext());
                $v_2.set_id($p0.get_item($v_1).get_id());
                $v_2.set_name($p0.get_item($v_1).get_name());
                $v_0.add($v_2);
            }
        }
        return $v_0.toArray();
    },
    
    $AS_0: function SP_UI_ViewSelector$$AS_0($p0) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = $p0[$v_0].get_id();
            if ($v_1 === SP.UI.SharedComponentManager.$5.get_viewType()) {
                this.$5u_0 = $v_0;
            }
            var $v_2 = new SP.UI.ViewSelector.BuiltInView(this, $v_1);
            $v_2.$1W_0 = $p0[$v_0].get_name();
            $v_2.$4G_0 = $p0[$v_0].get_image();
            this.$63_0($v_2);
        }
    },
    
    $AT_0: function SP_UI_ViewSelector$$AT_0() {ULSPOJ:;
        var $v_0 = SP.UI.DashboardExtensibilityManager.get_instance().getAllRegisteredExtensions();
        for (var $$arr_1 = $v_0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_1 = $$arr_1[$$idx_3];
            var $v_2 = $v_1.get_customViews();
            if (!$v_2) {
                continue;
            }
            for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                this.$63_0($v_2[$v_3]);
            }
        }
    },
    
    $7N_0: function SP_UI_ViewSelector$$7N_0() {ULSPOJ:;
        for (var $v_0 = 0; $v_0 < this.$2J_0.get_length(); $v_0++) {
            var $v_1 = this.$2J_0.get_item($v_0);
            var $v_2 = new ClientPivotControlMenuOption();
            $v_2.DisplayText = $v_1.$1W_0;
            $v_2.OnClickAction = SP.UI.PivotControlCallbackManager.$5B($v_1.$38_0);
            this.$b_0.AddMenuOption($v_2);
            $v_2.SelectedOption = $v_0 === this.$5u_0;
        }
    },
    
    $63_0: function SP_UI_ViewSelector$$63_0($p0) {
        $p0.$7G_0 = this.$2J_0.get_length();
        this.$2J_0.add($p0);
    },
    
    $Ao_0: function SP_UI_ViewSelector$$Ao_0($p0) {
        this.$79_0(false);
        var $v_0 = SP.UI.ApiManager.get_instance().getFirstApiOfType(SP.WorkManagement.OM.MyTasksDashboard, 2);
        if ($v_0.get_CurrentView() !== $p0) {
            $v_0.SwitchView($p0, null);
        }
    },
    
    $7H_0: function SP_UI_ViewSelector$$7H_0() {ULSPOJ:;
        var $v_0 = new ClientPivotControlMenuOption();
        $v_0.DisplayText = WorkManagement.Res.TaskListClearFilter;
        $v_0.Description = WorkManagement.Res.TaskListClearFilter;
        var $$t_1 = this;
        $v_0.OnClickAction = SP.UI.PivotControlCallbackManager.$5B(function() {ULSPOJ:;
            $$t_1.$7h_0();
            $$t_1.$b_0.ShowOverflowMenu();
        });
        $v_0.ImageAltText = WorkManagement.Res.TaskListClearFilter;
        $v_0.ImageUrl = SP.UI.ConstantsImage.filterClearImage;
        this.$b_0.AddMenuOption($v_0);
    },
    
    $7J_0: function SP_UI_ViewSelector$$7J_0($p0) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = new ClientPivotControlMenuCheckOption();
            $v_1.DisplayText = $p0[$v_0].get_name();
            $v_1.OnClickAction = SP.UI.PivotControlCallbackManager.$5B(this.$7r_0($v_1));
            if (SP.UI.SharedComponentManager.$5.get_locations()) {
                if (Array.contains(SP.UI.SharedComponentManager.$5.get_locations(), $p0[$v_0].get_id())) {
                    $v_1.Checked = true;
                }
            }
            this.$1o_0.add($p0[$v_0]);
            this.$4R_0[$p0[$v_0].get_id().toString()] = $v_1;
            this.$b_0.AddMenuOption($v_1);
        }
    },
    
    $7r_0: function SP_UI_ViewSelector$$7r_0($p0) {
        var $$t_1 = this;
        return function() {ULSPOJ:;
            $p0.Checked = !$p0.Checked;
            $$t_1.$79_0(true);
            $$t_1.$b_0.ShowOverflowMenu();
        };
    },
    
    $7h_0: function SP_UI_ViewSelector$$7h_0() {ULSPOJ:;
        var $v_0 = SP.UI.ApiManager.get_instance().getFirstApiOfType(SP.WorkManagement.OM.MyTasksDashboard, 2);
        $v_0.SetLocationFilter(null, null);
        for (var $v_1 = 0; $v_1 < this.$1o_0.get_length(); $v_1++) {
            var $v_2 = this.$6P_0(this.$1o_0.get_item($v_1));
            $v_2.Checked = false;
        }
        SP.UI.DomUtilities.hide(this.$I_0);
    },
    
    $79_0: function SP_UI_ViewSelector$$79_0($p0) {
        var $v_0 = new (SP.UI.List.$$(Number))();
        for (var $v_1 = 0; $v_1 < this.$1o_0.get_length(); $v_1++) {
            var $v_2 = this.$6P_0(this.$1o_0.get_item($v_1));
            if ($v_2.Checked) {
                $v_0.add(this.$1o_0.get_item($v_1).get_id());
            }
        }
        if ($v_0.get_length() > 0) {
            SP.UI.DomUtilities.show(this.$I_0);
        }
        else {
            SP.UI.DomUtilities.hide(this.$I_0);
        }
        if ($p0) {
            SP.UI.ApiManager.get_instance().getFirstApiOfType(SP.WorkManagement.OM.MyTasksDashboard, 2).SetLocationFilter($v_0.toArray(), null);
        }
    },
    
    $6P_0: function SP_UI_ViewSelector$$6P_0($p0) {
        return this.$4R_0[$p0.get_id().toString()];
    },
    
    Render: function SP_UI_ViewSelector$Render() {ULSPOJ:;
        var $v_0 = document.createElement('div');
        var $v_1 = document.createElement('div');
        $v_0.appendChild($v_1);
        $v_1.id = this.$4Y_0;
        $v_1.style.display = 'inline-block';
        this.$I_0 = document.createElement('img');
        this.$I_0.src = SP.UI.ConstantsImage.menuFilterImage;
        this.$I_0.style.verticalAlign = 'middle';
        $addHandler(this.$I_0, 'click', this.$$d_$A6_0);
        $v_0.appendChild(this.$I_0);
        if (!SP.UI.SharedComponentManager.$5.get_locations() || !SP.UI.SharedComponentManager.$5.get_locations().length) {
            SP.UI.DomUtilities.hide(this.$I_0);
        }
        var $v_2 = this.$5a_0.get_element();
        $v_0.appendChild($v_2);
        return $v_0;
    },
    
    $A6_0: function SP_UI_ViewSelector$$A6_0($p0) {
        var $$t_1 = this.$b_0;
        window.setTimeout(($$t_1.$$d_ShowOverflowMenu || ($$t_1.$$d_ShowOverflowMenu = Function.createDelegate($$t_1, $$t_1.ShowOverflowMenu))), 0);
    },
    
    $9Q_0: function SP_UI_ViewSelector$$9Q_0() {ULSPOJ:;
        var $v_0 = $get(this.$4S_0);
        if (!$v_0) {
            return false;
        }
        if ($v_0.style.display === 'none') {
            return false;
        }
        return true;
    }
}


SP.UI.ViewSelector.BuiltInView = function SP_UI_ViewSelector_BuiltInView($p0, $p1) {
    SP.UI.ViewSelector.BuiltInView.initializeBase(this);
    var $$t_2 = this;
    this.$38_0 = function() {ULSPOJ:;
        $p0.$Ao_0($p1);
    };
    this.set_enabled(true);
}


SP.UI.BatchedTaskOperation = function SP_UI_BatchedTaskOperation(dataProvider, taskTable) {ULSPOJ:;
    this.$16_0 = new (SP.UI.List.$$(SP.UI.TaskControl))();
    this.$19_0 = dataProvider;
    this.$5z_0 = taskTable;
}
SP.UI.BatchedTaskOperation.prototype = {
    $19_0: null,
    $5z_0: null,
    
    performBulkOperation: function SP_UI_BatchedTaskOperation$performBulkOperation(taskIds, fnIterator, writeTaskResults) {ULSPOJ:;
        this.$16_0.clear();
        var $$t_6 = this;
        this.$19_0.reuseSessions(function() {ULSPOJ:;
            for (var $v_0 = 0; $v_0 < taskIds.length; $v_0++) {
                var $v_1 = taskIds[$v_0];
                fnIterator($v_1, $$t_6.$19_0, writeTaskResults);
                var $v_2 = $$t_6.$5z_0.getControlFromKey(taskIds[$v_0].toString());
                if ($v_2) {
                    $$t_6.$16_0.add($v_2);
                    $v_2.showPendingServerOperation();
                }
            }
        });
    },
    
    execute: function SP_UI_BatchedTaskOperation$execute(callback) {ULSPOJ:;
        var $$t_3 = this;
        this.$19_0.executeQueryAndRefreshTimeline(function($p1_0, $p1_1) {
            $$t_3.$7i_0();
            if (callback) {
                callback($p1_0, $p1_1);
            }
        });
    },
    
    $7i_0: function SP_UI_BatchedTaskOperation$$7i_0() {ULSPOJ:;
        for (var $v_0 = 0; $v_0 < this.$16_0.get_length(); $v_0++) {
            if (this.$16_0.get_item($v_0)) {
                this.$16_0.get_item($v_0).hidePendingServerOperation();
            }
        }
    }
}


SP.UI.ScriptSessionBuilderContext = function SP_UI_ScriptSessionBuilderContext($p0) {
    this.$u_0 = $p0;
}
SP.UI.ScriptSessionBuilderContext.prototype = {
    $u_0: null,
    
    createSortableSessionManager: function SP_UI_ScriptSessionBuilderContext$createSortableSessionManager() {ULSPOJ:;
        return SP.WorkManagement.OM.SortableSessionManager.newObject(this.$u_0);
    },
    
    createUserOrderedSessionManager: function SP_UI_ScriptSessionBuilderContext$createUserOrderedSessionManager() {ULSPOJ:;
        return SP.WorkManagement.OM.UserOrderedSessionManager.newObject(this.$u_0);
    }
}


SP.UI.ScriptTaskQueryBuilderContext = function SP_UI_ScriptTaskQueryBuilderContext($p0) {
    this.$u_0 = $p0;
}
SP.UI.ScriptTaskQueryBuilderContext.prototype = {
    $u_0: null,
    
    createNewTaskQuery: function SP_UI_ScriptTaskQueryBuilderContext$createNewTaskQuery() {ULSPOJ:;
        return SP.WorkManagement.OM.TaskQuery.newObject(this.$u_0);
    },
    
    createNewTaskFilter: function SP_UI_ScriptTaskQueryBuilderContext$createNewTaskFilter() {ULSPOJ:;
        return SP.WorkManagement.OM.TaskFilter.newObject(this.$u_0);
    },
    
    createNewLocationFilter: function SP_UI_ScriptTaskQueryBuilderContext$createNewLocationFilter() {ULSPOJ:;
        return SP.WorkManagement.OM.LocationFilter.newObject(this.$u_0);
    },
    
    createNewDateRangeCriterion: function SP_UI_ScriptTaskQueryBuilderContext$createNewDateRangeCriterion() {ULSPOJ:;
        return SP.WorkManagement.OM.DateRangeCriterion.newObject(this.$u_0);
    },
    
    createNewBooleanCriterion: function SP_UI_ScriptTaskQueryBuilderContext$createNewBooleanCriterion() {ULSPOJ:;
        return SP.WorkManagement.OM.BooleanCriterion.newObject(this.$u_0);
    },
    
    createNewSortableTaskQuery: function SP_UI_ScriptTaskQueryBuilderContext$createNewSortableTaskQuery() {ULSPOJ:;
        return SP.WorkManagement.OM.SortableTaskQuery.newObject(this.$u_0);
    },
    
    createNewOrderInfo: function SP_UI_ScriptTaskQueryBuilderContext$createNewOrderInfo() {ULSPOJ:;
        return SP.WorkManagement.OM.OrderInfo.newObject(this.$u_0);
    }
}


SP.UI.TaskDataProvider = function SP_UI_TaskDataProvider() {ULSPOJ:;
    this.$34_0 = new (SP.UI.List.$$(Object))();
    this.$n_0 = new SP.ClientContext(SP.ClientContext.get_current().get_url());
}
SP.UI.TaskDataProvider.$6w = function SP_UI_TaskDataProvider$$6w($p0, $p1, $p2) {
    for (var $v_0 = 0; $v_0 < $p0.get_length(); $v_0++) {
        ($p0.get_item($v_0))($p1, $p2);
    }
}
SP.UI.TaskDataProvider.$AN = function SP_UI_TaskDataProvider$$AN($p0, $p1) {
    SP.UI.ApiManager.get_instance().getFirstApiOfType(SP.WorkManagement.OM.MyTasksDashboard, 2).RefreshAllListsExcept($p0, $p1);
}
SP.UI.TaskDataProvider.$AQ = function SP_UI_TaskDataProvider$$AQ($p0) {
    SP.UI.ApiManager.get_instance().getFirstApiOfType(SP.WorkManagement.OM.MyTasksDashboard, 2).RefreshTimeline($p0);
}
SP.UI.TaskDataProvider.$2y = function SP_UI_TaskDataProvider$$2y($p0) {
    $p0.retrieve();
    $p0.get_result().retrieve();
    return $p0;
}
SP.UI.TaskDataProvider.prototype = {
    $n_0: null,
    $3d_0: false,
    $2j_0: null,
    
    get_context: function SP_UI_TaskDataProvider$get_context() {ULSPOJ:;
        return this.$n_0;
    },
    
    reuseSessions: function SP_UI_TaskDataProvider$reuseSessions(action) {ULSPOJ:;
        this.$3d_0 = true;
        this.$2j_0 = [];
        try {
            action();
        }
        finally {
            this.$3d_0 = false;
            this.$2j_0 = null;
        }
    },
    
    $e_0: function SP_UI_TaskDataProvider$$e_0() {ULSPOJ:;
        return this.$1J_0(1);
    },
    
    $1J_0: function SP_UI_TaskDataProvider$$1J_0($p0) {
        if (this.$3d_0) {
            if (this.$2j_0[$p0]) {
                return this.$2j_0[$p0];
            }
        }
        var $v_0 = null;
        switch ($p0) {
            case 0:
            case 3:
                $v_0 = SP.WorkManagement.OM.SortableSessionManager.newObject(this.$n_0).createSession();
                break;
            case 4:
                $v_0 = SP.WorkManagement.OM.SortableSessionManager.newObject(this.$n_0).createLocationOrientedSession();
                break;
            case 1:
                $v_0 = SP.WorkManagement.OM.UserOrderedSessionManager.newObject(this.$n_0).createSession();
                break;
            case 2:
                $v_0 = SP.WorkManagement.OM.UserOrderedSessionManager.newObject(this.$n_0).createLocationOrientedSession();
                break;
            default:
                break;
        }
        $v_0.retrieve();
        if (this.$3d_0) {
            this.$2j_0[$p0] = $v_0;
        }
        return $v_0;
    },
    
    $90_0: function SP_UI_TaskDataProvider$$90_0() {ULSPOJ:;
        return new SP.UI.ScriptSessionBuilderContext(this.$n_0);
    },
    
    $92_0: function SP_UI_TaskDataProvider$$92_0() {ULSPOJ:;
        return new SP.UI.ScriptTaskQueryBuilderContext(this.$n_0);
    },
    
    executeQuery: function SP_UI_TaskDataProvider$executeQuery(callback) {ULSPOJ:;
        var $v_0 = this.$34_0;
        this.$34_0 = new (SP.UI.List.$$(Object))();
        var $$t_6 = this, $$t_7 = this;
        this.$n_0.executeQueryAsync(function($p1_0, $p1_1) {
            if (callback) {
                callback(true, []);
            }
            SP.UI.TaskDataProvider.$6w($v_0, true, []);
        }, function($p1_0, $p1_1) {
            if (callback) {
                callback(false, [ $p1_1.get_message() ]);
            }
            SP.UI.TaskDataProvider.$6w($v_0, false, [ $p1_1.get_message() ]);
        });
    },
    
    executeQueryAndRefreshAll: function SP_UI_TaskDataProvider$executeQueryAndRefreshAll(taskListTypeToExempt, callback) {ULSPOJ:;
        var $$t_5 = this;
        this.executeQuery(function($p1_0, $p1_1) {
            if ($p1_0) {
                SP.UI.TaskDataProvider.$AN(taskListTypeToExempt, function($p2_0) {
                    if (callback) {
                        callback($p1_0 && $p2_0, $p1_1);
                    }
                });
            }
            else {
                if (callback) {
                    callback(false, $p1_1);
                }
            }
        });
    },
    
    executeQueryAndRefreshTimeline: function SP_UI_TaskDataProvider$executeQueryAndRefreshTimeline(callback) {ULSPOJ:;
        var $$t_3 = this;
        this.executeQuery(function($p1_0, $p1_1) {
            if ($p1_0) {
                SP.UI.TaskDataProvider.$AQ(null);
            }
            if (callback) {
                callback($p1_0, $p1_1);
            }
        });
    },
    
    appendAdditionalNotification: function SP_UI_TaskDataProvider$appendAdditionalNotification(callback) {ULSPOJ:;
        this.$34_0.add(callback);
    },
    
    updateTaskInfo: function SP_UI_TaskDataProvider$updateTaskInfo(taskId, field, newValue) {ULSPOJ:;
        var $v_0 = this.$e_0().updateTaskWithLocalizedValue(taskId, field, (!newValue) ? null : newValue.toString());
        $v_0.retrieve();
        $v_0.get_result().retrieve();
        return $v_0;
    },
    
    promoteToPublic: function SP_UI_TaskDataProvider$promoteToPublic(taskId, locationId) {ULSPOJ:;
        var $v_0 = this.$e_0().promotePersonalTaskToProviderTaskInLocation(taskId, locationId);
        $v_0.retrieve();
        $v_0.get_result().retrieve();
        return $v_0;
    },
    
    createTask: function SP_UI_TaskDataProvider$createTask(taskName, description, startDate, dueDate, completed, pinned, locationKey) {ULSPOJ:;
        return SP.UI.TaskDataProvider.$2y(this.$e_0().createTask(taskName, description, startDate, dueDate, completed, pinned, locationKey, null));
    },
    
    createPersonalTaskAndPromoteToProviderTask: function SP_UI_TaskDataProvider$createPersonalTaskAndPromoteToProviderTask(taskName, description, startDate, dueDate, completed, pinned, locationKey) {ULSPOJ:;
        return SP.UI.TaskDataProvider.$2y(this.$e_0().createPersonalTaskAndPromoteToProviderTask(taskName, description, startDate, dueDate, completed, pinned, locationKey));
    },
    
    pinTask: function SP_UI_TaskDataProvider$pinTask(taskId) {ULSPOJ:;
        this.$e_0().pinTask(taskId);
    },
    
    deleteTask: function SP_UI_TaskDataProvider$deleteTask(taskId) {ULSPOJ:;
        return SP.UI.TaskDataProvider.$2y(this.$e_0().deleteTask(taskId));
    },
    
    getCalloutInfo: function SP_UI_TaskDataProvider$getCalloutInfo(taskId) {ULSPOJ:;
        var $v_0 = this.$e_0().getCalloutInfo(taskId);
        $v_0.retrieve();
        return $v_0;
    },
    
    unPinTask: function SP_UI_TaskDataProvider$unPinTask(taskId) {ULSPOJ:;
        this.$e_0().removePinOnTask(taskId);
    },
    
    addToTimeline: function SP_UI_TaskDataProvider$addToTimeline(fieldKey) {ULSPOJ:;
        return SP.UI.TaskDataProvider.$2y(this.$e_0().removeAttributeFromTask(fieldKey, SP.UI.TaskListConstants.removeFromTimelineAttribute));
    },
    
    removeItemFromTimeline: function SP_UI_TaskDataProvider$removeItemFromTimeline(fieldKey) {ULSPOJ:;
        return SP.UI.TaskDataProvider.$2y(this.$e_0().addAttributeToTask(fieldKey, SP.UI.TaskListConstants.removeFromTimelineAttribute));
    },
    
    getRefreshStatus: function SP_UI_TaskDataProvider$getRefreshStatus(jobId) {ULSPOJ:;
        var $v_0 = this.$e_0().getRefreshStatus(jobId);
        $v_0.get_taskChangesByLocation().retrieveItems().retrieve();
        $v_0.get_providerStatuses().retrieveItems().retrieve();
        $v_0.retrieve();
        return $v_0;
    },
    
    reorderTask: function SP_UI_TaskDataProvider$reorderTask(taskId, newAfterTaskIndex, flatList) {ULSPOJ:;
        var $v_0 = null;
        if (flatList) {
            $v_0 = this.$1J_0(1);
        }
        else {
            $v_0 = this.$1J_0(2);
        }
        $v_0.reorderTask(taskId, newAfterTaskIndex);
    },
    
    moveTaskToLocation: function SP_UI_TaskDataProvider$moveTaskToLocation(taskId, locationId) {ULSPOJ:;
        return (this.$1J_0(2)).movePersonalTaskToLocation(taskId, locationId);
    },
    
    readTasksSorted: function SP_UI_TaskDataProvider$readTasksSorted(wrappedQuery) {ULSPOJ:;
        var $v_0 = this.$1J_0(3);
        var $v_1 = $v_0.readTasks(wrappedQuery);
        $v_1.retrieveItems().retrieve();
        $v_1.retrieve();
        return $v_1;
    },
    
    readTasks: function SP_UI_TaskDataProvider$readTasks(query) {ULSPOJ:;
        var $v_0 = this.$1J_0(1);
        var $v_1 = $v_0.readTasks(query);
        $v_1.retrieveItems().retrieve();
        $v_1.retrieve();
        return $v_1;
    },
    
    readTasksSortedByLocation: function SP_UI_TaskDataProvider$readTasksSortedByLocation(wrappedQuery) {ULSPOJ:;
        var $v_0 = this.$1J_0(4);
        var $v_1 = $v_0.readTasks(wrappedQuery);
        $v_1.retrieveItems().retrieve();
        $v_1.retrieve();
        return $v_1;
    },
    
    readTasksByLocation: function SP_UI_TaskDataProvider$readTasksByLocation(query) {ULSPOJ:;
        var $v_0 = this.$1J_0(2);
        var $v_1 = $v_0.readTasks(query);
        $v_1.retrieveItems().retrieve();
        $v_1.retrieve();
        return $v_1;
    },
    
    getRefreshHealthInfo: function SP_UI_TaskDataProvider$getRefreshHealthInfo() {ULSPOJ:;
        var $v_0 = this.$e_0().getRefreshHealthInfo();
        $v_0.retrieve();
        $v_0.get_providerErrors().retrieveItems().retrieve();
        $v_0.get_providerErrors().retrieve();
        return $v_0;
    },
    
    beginRefreshCache: function SP_UI_TaskDataProvider$beginRefreshCache() {ULSPOJ:;
        var $v_0 = this.$e_0().beginCacheRefresh();
        $v_0.retrieve();
        return $v_0;
    },
    
    refreshSingleTask: function SP_UI_TaskDataProvider$refreshSingleTask(taskId) {ULSPOJ:;
        var $v_0 = this.$e_0().refreshSingleTask(taskId);
        $v_0.retrieve();
        $v_0.get_result().retrieve();
        return $v_0;
    },
    
    $8c_0: function SP_UI_TaskDataProvider$$8c_0() {ULSPOJ:;
        var $v_0 = SP.WorkManagement.OM.UserSettingsManager.newObject(this.$n_0);
        var $v_1 = $v_0.getAllLocations();
        $v_1.retrieveItems().retrieve();
        return $v_1;
    },
    
    setPersistedProperties: function SP_UI_TaskDataProvider$setPersistedProperties(properties) {ULSPOJ:;
        var $v_0 = SP.WorkManagement.OM.UserSettingsManager.newObject(this.$n_0);
        $v_0.setPersistedProperties(properties);
    }
}


SP.UI.DragAndDropManager = function SP_UI_DragAndDropManager() {ULSPOJ:;
    this.$$d_$9m_0 = Function.createDelegate(this, this.$9m_0);
    this.$6_0 = new Sys.EventHandlerList();
    this.$3D_0 = new (SP.UI.List.$$(SP.UI.IDropTarget))();
    this.$3b_0 = new SP.UI.ScrollManager();
}
SP.UI.DragAndDropManager.get_instance = function SP_UI_DragAndDropManager$get_instance() {ULSPOJ:;
    if (!SP.UI.DragAndDropManager.$S) {
        SP.UI.DragAndDropManager.$S = new SP.UI.DragAndDropManager();
    }
    return SP.UI.DragAndDropManager.$S;
}
SP.UI.DragAndDropManager.$7E = function SP_UI_DragAndDropManager$$7E($p0) {
    if (!$p0 || $p0 === document.body) {
        return false;
    }
    if (Sys.UI.DomElement.containsCssClass($p0, 'ms-awiop-draggable')) {
        return true;
    }
    else {
        return SP.UI.DragAndDropManager.$7E($p0.parentNode);
    }
}
SP.UI.DragAndDropManager.$8v = function SP_UI_DragAndDropManager$$8v($p0) {
    var $v_0;
    if (browseris.ie8standardUp) {
        $v_0 = window.event.srcElement;
    }
    else {
        $v_0 = $p0.target;
    }
    return $v_0;
}
SP.UI.DragAndDropManager.$8h = function SP_UI_DragAndDropManager$$8h($p0, $p1) {
    var $v_0 = $p0.x - $p1.x;
    var $v_1 = $p0.y - $p1.y;
    return Math.sqrt($v_0 * $v_0 + $v_1 * $v_1);
}
SP.UI.DragAndDropManager.prototype = {
    $7F_0: 20,
    $3R_0: null,
    $L_0: null,
    $1Q_0: null,
    $p_0: null,
    $h_0: true,
    $5w_0: null,
    
    get_isDragging: function SP_UI_DragAndDropManager$get_isDragging() {ULSPOJ:;
        return !!this.$L_0;
    },
    
    get_enabled: function SP_UI_DragAndDropManager$get_enabled() {ULSPOJ:;
        return this.$h_0;
    },
    set_enabled: function SP_UI_DragAndDropManager$set_enabled(value) {ULSPOJ:;
        this.$h_0 = value;
        return value;
    },
    
    add_dragStart: function SP_UI_DragAndDropManager$add_dragStart(value) {ULSPOJ:;
        this.$6_0.addHandler('BeginDrag_', value);
    },
    remove_dragStart: function SP_UI_DragAndDropManager$remove_dragStart(value) {ULSPOJ:;
        this.$6_0.removeHandler('BeginDrag_', value);
    },
    
    add_dragEnd: function SP_UI_DragAndDropManager$add_dragEnd(value) {ULSPOJ:;
        this.$6_0.addHandler('EndDrag_', value);
    },
    remove_dragEnd: function SP_UI_DragAndDropManager$remove_dragEnd(value) {ULSPOJ:;
        this.$6_0.removeHandler('EndDrag_', value);
    },
    
    registerElementForDrag: function SP_UI_DragAndDropManager$registerElementForDrag(element, draggable) {ULSPOJ:;
        var $$t_3 = this;
        $addHandler(element, 'mousedown', function($p1_0) {
            $$t_3.$9W_0($p1_0, draggable);
        });
    },
    
    registerDropTarget: function SP_UI_DragAndDropManager$registerDropTarget(dropTarget) {ULSPOJ:;
        this.$3D_0.add(dropTarget);
    },
    
    $BN_0: function SP_UI_DragAndDropManager$$BN_0($p0, $p1, $p2) {
        var $v_0 = this.$6_0.getHandler($p1);
        if ($v_0) {
            $v_0(this, $p2);
        }
    },
    
    $9m_0: function SP_UI_DragAndDropManager$$9m_0($p0) {
        if ($p0.keyCode === 27) {
            if (this.$p_0) {
                this.$p_0.dragLeave(this.$L_0, this.$1Q_0);
            }
            this.$6K_0(true);
            $p0.preventDefault();
            $p0.stopPropagation();
        }
    },
    
    $9W_0: function SP_UI_DragAndDropManager$$9W_0($p0, $p1) {
        if (this.$h_0) {
            this.$3R_0 = XUI.Capture.GetEventLocation($p0);
            this.$5w_0 = $p0.target;
            var $$t_4 = this, $$t_5 = this;
            XUI.Capture.SetCapture($p0.target, function($p1_0) {
                $$t_4.$7c_0($p1, $p1_0);
            }, function($p1_0) {
                $$t_5.$7d_0();
            });
            $p0.preventDefault();
        }
    },
    
    $7c_0: function SP_UI_DragAndDropManager$$7c_0($p0, $p1) {
        if (this.$3R_0) {
            var $v_0 = XUI.Capture.GetEventLocation($p1);
            var $v_1 = SP.UI.DragAndDropManager.$8h(this.$3R_0, $v_0) > this.$7F_0;
            if (!this.$L_0 && $v_1) {
                if (SP.UI.DragAndDropManager.$7E($p1.target)) {
                    this.$BN_0(Sys.EventArgs, 'BeginDrag_', null);
                    this.$7X_0($p0, $v_0);
                }
            }
            if (this.$L_0) {
                SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(this.$L_0.get_dragGlyph(), $v_0.y + this.$L_0.get_dragOffset().y, $v_0.x + this.$L_0.get_dragOffset().x);
                var $v_2 = this.$p_0;
                this.$p_0 = this.$8j_0($v_0);
                if (this.$p_0 && !$v_2) {
                    this.$p_0.dragEnter(this.$L_0, this.$1Q_0);
                    SP.UI.DebugConsole.log('Drag entered a drop target.');
                }
                if (this.$p_0) {
                    var $v_3 = SP.UI.DragAndDropManager.$8v($p1);
                    this.$p_0.dragOver($v_0, this.$L_0, this.$1Q_0, $v_3);
                }
                if (!this.$p_0 && $v_2) {
                    $v_2.dragLeave(this.$L_0, this.$1Q_0);
                    SP.UI.DebugConsole.log('Drag left a drop target.');
                }
                this.$3b_0.update($v_0);
            }
        }
    },
    
    $7d_0: function SP_UI_DragAndDropManager$$7d_0() {ULSPOJ:;
        this.$6K_0(false);
    },
    
    $7X_0: function SP_UI_DragAndDropManager$$7X_0($p0, $p1) {
        SP.UI.DebugConsole.log('Beginning drag.');
        $addHandler(document.body, 'keydown', this.$$d_$9m_0);
        this.$L_0 = $p0.startDrag($p1, this.$5w_0);
        this.$1Q_0 = $p0;
        if (this.$L_0.get_dragGlyph()) {
            document.body.appendChild(this.$L_0.get_dragGlyph());
        }
        this.$3b_0.$D_0 = this.$L_0.get_dragSurface();
        this.$BN_0(Sys.EventArgs, 'BeginDrag_', null);
    },
    
    $6K_0: function SP_UI_DragAndDropManager$$6K_0($p0) {
        if (this.$L_0) {
            if (this.$p_0 && !$p0) {
                this.$p_0.dragDrop(this.$L_0, this.$1Q_0, null);
            }
            this.$1Q_0.endDrag();
            this.$BN_0(Sys.EventArgs, 'EndDrag_', null);
            this.$7g_0();
        }
    },
    
    $7g_0: function SP_UI_DragAndDropManager$$7g_0() {ULSPOJ:;
        XUI.Capture.ReleaseCapture();
        document.body.removeChild(this.$L_0.get_dragGlyph());
        document.body.style.cursor = 'auto';
        $removeHandler(document.body, 'keydown', this.$$d_$9m_0);
        this.$1Q_0 = null;
        this.$L_0 = null;
        this.$p_0 = null;
        this.$3R_0 = null;
        this.$3b_0.stopTracking();
    },
    
    $8j_0: function SP_UI_DragAndDropManager$$8j_0($p0) {
        for (var $v_0 = 0; $v_0 < this.$3D_0.get_length(); $v_0++) {
            var $v_1 = this.$3D_0.get_item($v_0);
            if ($v_1.isInBounds($p0)) {
                return $v_1;
            }
        }
        return null;
    }
}


SP.UI.ScrollManager = function SP_UI_ScrollManager() {ULSPOJ:;
    this.$$d_$7f_0 = Function.createDelegate(this, this.$7f_0);
    this.$2H_0 = new SP.UI.IntervalManager(this.$$d_$7f_0);
    this.$2H_0.$1H_0 = 100;
}
SP.UI.ScrollManager.prototype = {
    $2T_0: null,
    $2H_0: null,
    $D_0: null,
    
    get_scrollElement: function SP_UI_ScrollManager$get_scrollElement() {ULSPOJ:;
        return this.$D_0;
    },
    set_scrollElement: function SP_UI_ScrollManager$set_scrollElement(value) {ULSPOJ:;
        this.$D_0 = value;
        return value;
    },
    
    update: function SP_UI_ScrollManager$update(mousePosition) {ULSPOJ:;
        this.$2T_0 = mousePosition;
        if (this.$6j_0() && !this.$2H_0.get_operationInProgress()) {
            this.$2H_0.start();
        }
    },
    
    stopTracking: function SP_UI_ScrollManager$stopTracking() {ULSPOJ:;
        if (this.$2H_0.get_operationInProgress()) {
            this.$2H_0.stop();
        }
    },
    
    $7f_0: function SP_UI_ScrollManager$$7f_0() {ULSPOJ:;
        if (!this.$D_0) {
            return false;
        }
        var $v_0 = XUI.Capture.GetLocation(this.$D_0);
        if (this.$6h_0($v_0) && this.$D_0.scrollTop > 0) {
            this.$D_0.scrollTop -= 25;
        }
        if (this.$6d_0($v_0) && this.$D_0.scrollTop < this.$D_0.scrollHeight - this.$D_0.scrollTop) {
            this.$D_0.scrollTop += 25;
        }
        if (this.$6f_0($v_0) && this.$D_0.scrollLeft > 0) {
            this.$D_0.scrollLeft -= 25;
        }
        if (this.$6g_0($v_0) && this.$D_0.scrollLeft < this.$D_0.scrollWidth - this.$D_0.scrollLeft) {
            this.$D_0.scrollLeft += 25;
        }
        return this.$6j_0();
    },
    
    $6j_0: function SP_UI_ScrollManager$$6j_0() {ULSPOJ:;
        if (!this.$D_0) {
            return false;
        }
        var $v_0 = XUI.Capture.GetLocation(this.$D_0);
        if (this.$6f_0($v_0) || this.$6g_0($v_0) || this.$6h_0($v_0) || this.$6d_0($v_0)) {
            return true;
        }
        else {
            return false;
        }
    },
    
    $6d_0: function SP_UI_ScrollManager$$6d_0($p0) {
        return this.$2T_0.y > $p0.y + this.$D_0.clientHeight - 20;
    },
    
    $6h_0: function SP_UI_ScrollManager$$6h_0($p0) {
        return this.$2T_0.y < $p0.y + 20;
    },
    
    $6g_0: function SP_UI_ScrollManager$$6g_0($p0) {
        return this.$2T_0.x > $p0.x + this.$D_0.clientWidth - 20;
    },
    
    $6f_0: function SP_UI_ScrollManager$$6f_0($p0) {
        return this.$2T_0.x < $p0.x + 20;
    }
}


SP.UI.EditManager = function SP_UI_EditManager() {
}
SP.UI.EditManager.get_instance = function SP_UI_EditManager$get_instance() {ULSPOJ:;
    if (!SP.UI.EditManager.$S) {
        SP.UI.EditManager.$S = new SP.UI.EditManager();
    }
    return SP.UI.EditManager.$S;
}
SP.UI.EditManager.prototype = {
    $4L_0: false,
    
    get_isEditing: function SP_UI_EditManager$get_isEditing() {ULSPOJ:;
        return this.$4L_0;
    },
    
    beginEditing: function SP_UI_EditManager$beginEditing() {ULSPOJ:;
        SP.UI.DebugConsole.log('EditManager.BeginEditing');
        this.$4L_0 = true;
    },
    
    endEditing: function SP_UI_EditManager$endEditing() {ULSPOJ:;
        SP.UI.DebugConsole.log('EditManager.EndEditing');
        this.$4L_0 = false;
    }
}


SP.UI.DashboardExtensibilityManager = function SP_UI_DashboardExtensibilityManager() {ULSPOJ:;
    this.$2e_0 = {};
    this.$48_0 = new (SP.UI.List.$$(SP.UI.IDashboardExtension))();
}
SP.UI.DashboardExtensibilityManager.get_instance = function SP_UI_DashboardExtensibilityManager$get_instance() {ULSPOJ:;
    if (!SP.UI.DashboardExtensibilityManager.$S) {
        SP.UI.DashboardExtensibilityManager.$S = new SP.UI.DashboardExtensibilityManager();
    }
    return SP.UI.DashboardExtensibilityManager.$S;
}
SP.UI.DashboardExtensibilityManager.prototype = {
    
    registerDashboardExtension: function SP_UI_DashboardExtensibilityManager$registerDashboardExtension(providerId, extension) {ULSPOJ:;
        if (!SP.UI.DictionaryUtilities.containKey(this.$2e_0, providerId)) {
            this.$2e_0[providerId] = extension;
            this.$48_0.add(extension);
            SP.UI.DebugConsole.logCategory(SP.UI.TaskListConstants.logCategoryExtensibility, 'Registered extension for provider: ' + providerId);
        }
    },
    
    getDashboardExtension: function SP_UI_DashboardExtensibilityManager$getDashboardExtension(task) {ULSPOJ:;
        if (task.get_locationId() === SP.UI.TaskListConstants.noValue || task.get_isPersonal()) {
            return null;
        }
        var $v_0 = SP.UI.SharedComponentManager.$5.$1C_0.$53_0(task.get_locationId());
        if (!SP.UI.DictionaryUtilities.containKey(this.$2e_0, $v_0.get_rootProviderKey())) {
            return null;
        }
        return this.$2e_0[$v_0.get_rootProviderKey()];
    },
    
    getAllRegisteredExtensions: function SP_UI_DashboardExtensibilityManager$getAllRegisteredExtensions() {ULSPOJ:;
        return this.$48_0.toArray();
    }
}


SP.UI.SharePointCheckBoxWidget = function SP_UI_SharePointCheckBoxWidget(task, services) {ULSPOJ:;
    SP.UI.SharePointCheckBoxWidget.initializeBase(this, [ task, services ]);
    this.$2_4 = task;
}
SP.UI.SharePointCheckBoxWidget.prototype = {
    $2_4: null,
    
    onClick: function SP_UI_SharePointCheckBoxWidget$onClick(targetElement) {ULSPOJ:;
        var $v_0 = SP.UI.TaskControl.deserializeCustomDataForClient(SP.WorkManagement.SharePointProvider.OM.SharePointProviderTaskData, this.$2_4);
        if ($v_0.isWorkflowTask) {
            SP.UI.Utilities.showTaskDetailsDialog(this.$2_4.get_editUrl(), this.$2_4.get_id());
            return true;
        }
        else {
            return SP.UI.CheckBoxWidget.prototype.onClick.call(this, targetElement);
        }
    }
}


SP.UI.SharePointExtension = function SP_UI_SharePointExtension() {
}
SP.UI.SharePointExtension.prototype = {
    
    get_customViews: function SP_UI_SharePointExtension$get_customViews() {ULSPOJ:;
        return null;
    },
    
    createCheckBoxWidget: function SP_UI_SharePointExtension$createCheckBoxWidget(task, services) {ULSPOJ:;
        return new SP.UI.SharePointCheckBoxWidget(task, services);
    },
    
    deserializeCustomDataForClient: function SP_UI_SharePointExtension$deserializeCustomDataForClient(T, task) {ULSPOJ:;
        return SP.UI.SerializationUtilities.tryToDeserialize(T, task.get_serializedCustomDataForClient());
    }
}


SP.UI.ViewExtension = function SP_UI_ViewExtension() {
}
SP.UI.ViewExtension.prototype = {
    $1W_0: null,
    $4G_0: null,
    $38_0: null,
    $5Z_0: null,
    $h_0: false,
    $7G_0: 0,
    
    get_localizedName: function SP_UI_ViewExtension$get_localizedName() {ULSPOJ:;
        return this.$1W_0;
    },
    set_localizedName: function SP_UI_ViewExtension$set_localizedName(value) {ULSPOJ:;
        this.$1W_0 = value;
        return value;
    },
    
    get_clickHandler: function SP_UI_ViewExtension$get_clickHandler() {ULSPOJ:;
        return this.$38_0;
    },
    set_clickHandler: function SP_UI_ViewExtension$set_clickHandler(value) {ULSPOJ:;
        this.$38_0 = value;
        return value;
    },
    
    get_enabled: function SP_UI_ViewExtension$get_enabled() {ULSPOJ:;
        return this.$h_0;
    },
    set_enabled: function SP_UI_ViewExtension$set_enabled(value) {ULSPOJ:;
        this.$h_0 = value;
        if (this.$5Z_0) {
            this.$5Z_0();
        }
        return value;
    },
    
    get_imagePath: function SP_UI_ViewExtension$get_imagePath() {ULSPOJ:;
        return this.$4G_0;
    },
    set_imagePath: function SP_UI_ViewExtension$set_imagePath(value) {ULSPOJ:;
        this.$4G_0 = value;
        return value;
    }
}


SP.UI.StatusColors = function SP_UI_StatusColors() {
}


SP.UI.List = function SP_UI_List() {ULSPOJ:;
    this.$l_0 = [];
}
SP.UI.List.$$ = function SP_UI_List$$$(T) {ULSPOJ:;
    var $$cn = 'List' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!SP.UI[$$cn]) {
        var $$ccr = SP.UI[$$cn] = function() {ULSPOJ:;
            (this.$$gta = this.$$gta || {})['SP.UI.List'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            SP.UI.List.apply(this, $v_0);
        };
        $$ccr.registerClass('SP.UI.' + $$cn);
        var $$dict_5 = SP.UI.List.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return SP.UI[$$cn];
}
SP.UI.List.prototype = {
    
    get_length: function SP_UI_List$get_length() {ULSPOJ:;
        return this.$l_0.length;
    },
    
    get_item: function SP_UI_List$get_item(index) {ULSPOJ:;
        return this.$l_0[index];
    },
    
    add: function SP_UI_List$add(itemToAdd) {ULSPOJ:;
        Array.add(this.$l_0, itemToAdd);
    },
    
    insert: function SP_UI_List$insert(itemToInsert, indexToInsert) {ULSPOJ:;
        Array.insert(this.$l_0, indexToInsert, itemToInsert);
    },
    
    clear: function SP_UI_List$clear() {ULSPOJ:;
        Array.clear(this.$l_0);
    },
    
    contains: function SP_UI_List$contains(item) {ULSPOJ:;
        return Array.contains(this.$l_0, item);
    },
    
    remove: function SP_UI_List$remove(itemToDelete) {ULSPOJ:;
        Array.remove(this.$l_0, itemToDelete);
    },
    
    clone: function SP_UI_List$clone() {ULSPOJ:;
        var $v_0 = new (SP.UI.List.$$(this.$$gta['SP.UI.List']['T']))();
        $v_0.$l_0 = Array.clone(this.$l_0);
        return $v_0;
    },
    
    toArray: function SP_UI_List$toArray() {ULSPOJ:;
        return Array.clone(this.$l_0);
    },
    
    castToArray: function SP_UI_List$castToArray(TOutType) {ULSPOJ:;
        return Array.clone(this.$l_0);
    },
    
    sort: function SP_UI_List$sort(sortingFunc) {ULSPOJ:;
        this.$l_0.sort(sortingFunc);
    }
}


SP.UI.LocationManager = function SP_UI_LocationManager($p0) {
    this.$6_0 = new Sys.EventHandlerList();
    this.$1g_0 = {};
    var $v_0 = SP.WorkManagement.OM.Location.newObject(SP.UI.CsomUtilities.createDefaultClientRuntimeContext());
    $v_0.set_id(SP.UI.TaskListConstants.noValue);
    $v_0.set_name(WorkManagement.Res.TaskList_PersonalTask_GroupingHeader);
    $v_0.set_important(true);
    this.$1g_0[SP.UI.TaskListConstants.noValue.toString()] = $v_0;
    for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        var $v_2 = SP.WorkManagement.OM.Location.newObject(SP.UI.CsomUtilities.createDefaultClientRuntimeContext());
        $v_2.fromJson($p0[$v_1]);
        this.$1g_0[$v_2.get_id().toString()] = $v_2;
    }
    SP.UI.BWSAManager.updateFilterCountDataPoint($p0.length);
}
SP.UI.LocationManager.prototype = {
    $1g_0: null,
    
    add_$9U_0: function SP_UI_LocationManager$add_$9U_0($p0) {
        this.$6_0.addHandler('LocationUpdateEvent', $p0);
    },
    remove_$9U_0: function SP_UI_LocationManager$remove_$9U_0($p0) {
        this.$6_0.removeHandler('LocationUpdateEvent', $p0);
    },
    
    get_allLocations: function SP_UI_LocationManager$get_allLocations() {ULSPOJ:;
        var $v_0 = new (SP.UI.List.$$(SP.WorkManagement.OM.Location))();
        var $$dict_1 = this.$1g_0;
        for (var $$key_2 in $$dict_1) {
            var $v_1 = { key: $$key_2, value: $$dict_1[$$key_2] };
            $v_0.add($v_1.value);
        }
        return $v_0;
    },
    
    get_visibleLocations: function SP_UI_LocationManager$get_visibleLocations() {ULSPOJ:;
        var $v_0 = new (SP.UI.List.$$(SP.WorkManagement.OM.Location))();
        var $$dict_1 = this.$1g_0;
        for (var $$key_2 in $$dict_1) {
            var $v_1 = { key: $$key_2, value: $$dict_1[$$key_2] };
            var $v_2 = $v_1.value;
            if ($v_2.get_important()) {
                $v_0.add($v_2);
            }
        }
        return $v_0;
    },
    
    $53_0: function SP_UI_LocationManager$$53_0($p0) {
        var $v_0 = this.$1g_0[$p0.toString()];
        return $v_0;
    },
    
    $7W_0: function SP_UI_LocationManager$$7W_0($p0) {
        var $v_0 = $p0.$8c_0();
        var $$t_4 = this;
        $p0.appendAdditionalNotification(function($p1_0, $p1_1) {
            if ($p1_0) {
                $$t_4.$BE_0($v_0);
            }
        });
    },
    
    $BE_0: function SP_UI_LocationManager$$BE_0($p0) {
        for (var $v_0 = 0; $v_0 < $p0.get_count(); $v_0++) {
            this.$1g_0[$p0.get_item($v_0).get_id().toString()] = $p0.get_item($v_0);
        }
        SP.UI.EventUtilities.raiseEvent(Sys.EventArgs, this.$6_0, 'LocationUpdateEvent', this, null);
    }
}


SP.UI.Nullable = function SP_UI_Nullable(nullableValue) {ULSPOJ:;
    this.$3k_0 = ((this.$$gta['SP.UI.Nullable']['T'] === Number || Type.isEnum(this.$$gta['SP.UI.Nullable']['T'])) ? 0 : (this.$$gta['SP.UI.Nullable']['T'] === Boolean) ? false : null);
    this.$3k_0 = nullableValue;
}
SP.UI.Nullable.$$ = function SP_UI_Nullable$$$(T) {ULSPOJ:;
    var $$cn = 'Nullable' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!SP.UI[$$cn]) {
        var $$ccr = SP.UI[$$cn] = function() {ULSPOJ:;
            (this.$$gta = this.$$gta || {})['SP.UI.Nullable'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            SP.UI.Nullable.apply(this, $v_0);
        };
        $$ccr.registerClass('SP.UI.' + $$cn);
        var $$dict_5 = SP.UI.Nullable.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
        $$ccr.getNullValue = function SP_UI_Nullable$getNullValue() {ULSPOJ:;
            var $v_0 = new ($$ccr)(((T === Number || Type.isEnum(T)) ? 0 : (T === Boolean) ? false : null));
            $v_0.$4P_0 = true;
            return $v_0;
        };
    }
    return SP.UI[$$cn];
}
SP.UI.Nullable.prototype = {
    $4P_0: false,
    
    get_hasValue: function SP_UI_Nullable$get_hasValue() {ULSPOJ:;
        return !(SP.UI.Utilities.isNullOrNoValue(this.$3k_0) || this.$4P_0);
    },
    
    get_value: function SP_UI_Nullable$get_value() {ULSPOJ:;
        return this.$3k_0;
    }
}


SP.UI.TimeoutWrapper = function SP_UI_TimeoutWrapper() {
}
SP.UI.TimeoutWrapper.setTimeout = function SP_UI_TimeoutWrapper$setTimeout(code, time) {ULSPOJ:;
    window.setTimeout(function() {ULSPOJ:;
        code();
    }, time);
}


SP.UI.SelectionEventArgs = function SP_UI_SelectionEventArgs(items) {ULSPOJ:;
    SP.UI.SelectionEventArgs.$$(this.$$gta['SP.UI.SelectionEventArgs']['T']).initializeBase(this);
    this.$4Q_1 = items;
}
SP.UI.SelectionEventArgs.$$ = function SP_UI_SelectionEventArgs$$$(T) {ULSPOJ:;
    var $$cn = 'SelectionEventArgs' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!SP.UI[$$cn]) {
        var $$ccr = SP.UI[$$cn] = function() {ULSPOJ:;
            (this.$$gta = this.$$gta || {})['SP.UI.SelectionEventArgs'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            SP.UI.SelectionEventArgs.apply(this, $v_0);
        };
        $$ccr.registerClass('SP.UI.' + $$cn, Sys.EventArgs);
        var $$dict_5 = SP.UI.SelectionEventArgs.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return SP.UI[$$cn];
}
SP.UI.SelectionEventArgs.prototype = {
    $4Q_1: null,
    
    get_items: function SP_UI_SelectionEventArgs$get_items() {ULSPOJ:;
        return this.$4Q_1;
    },
    set_items: function SP_UI_SelectionEventArgs$set_items(value) {ULSPOJ:;
        this.$4Q_1 = value;
        return value;
    }
}


SP.UI.SelectionManager = function SP_UI_SelectionManager(notifyObject) {ULSPOJ:;
    this.$1u_0 = new (SP.UI.List.$$(this.$$gta['SP.UI.SelectionManager']['T']))();
    this.$27_0 = new Sys.EventHandlerList();
    this.$4V_0 = notifyObject;
}
SP.UI.SelectionManager.$$ = function SP_UI_SelectionManager$$$(T) {ULSPOJ:;
    var $$cn = 'SelectionManager' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!SP.UI[$$cn]) {
        var $$ccr = SP.UI[$$cn] = function() {ULSPOJ:;
            (this.$$gta = this.$$gta || {})['SP.UI.SelectionManager'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            SP.UI.SelectionManager.apply(this, $v_0);
        };
        $$ccr.registerClass('SP.UI.' + $$cn);
        var $$dict_5 = SP.UI.SelectionManager.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
        $$ccr.$Ak = 'SelectionAdded_';
        $$ccr.$Al = 'SelectionRemoved_';
    }
    return SP.UI[$$cn];
}
SP.UI.SelectionManager.prototype = {
    $4V_0: null,
    
    add_selectionAdded: function SP_UI_SelectionManager$add_selectionAdded(value) {ULSPOJ:;
        this.$27_0.addHandler('SelectionAdded_', value);
    },
    remove_selectionAdded: function SP_UI_SelectionManager$remove_selectionAdded(value) {ULSPOJ:;
        this.$27_0.removeHandler('SelectionAdded_', value);
    },
    
    add_selectionRemoved: function SP_UI_SelectionManager$add_selectionRemoved(value) {ULSPOJ:;
        this.$27_0.addHandler('SelectionRemoved_', value);
    },
    remove_selectionRemoved: function SP_UI_SelectionManager$remove_selectionRemoved(value) {ULSPOJ:;
        this.$27_0.removeHandler('SelectionRemoved_', value);
    },
    
    clearSelection: function SP_UI_SelectionManager$clearSelection() {ULSPOJ:;
        this.$6I_0(this.$1u_0.toArray());
    },
    
    clearSelectionArray: function SP_UI_SelectionManager$clearSelectionArray() {ULSPOJ:;
        this.$1u_0.clear();
    },
    
    removeFromSelection: function SP_UI_SelectionManager$removeFromSelection(obj) {ULSPOJ:;
        if (this.isSelected(obj)) {
            this.$6I_0([ obj ]);
        }
    },
    
    isSelected: function SP_UI_SelectionManager$isSelected(key) {ULSPOJ:;
        return this.$1u_0.contains(key);
    },
    
    $6t_0: function SP_UI_SelectionManager$$6t_0($p0, $p1) {
        var $v_0 = this.$27_0.getHandler($p0);
        if ($v_0) {
            $v_0(this, $p1);
        }
    },
    
    getSelectedItems: function SP_UI_SelectionManager$getSelectedItems() {ULSPOJ:;
        return this.$1u_0.toArray();
    },
    
    select: function SP_UI_SelectionManager$select(item) {ULSPOJ:;
        this.selectBulk([ item ]);
    },
    
    selectBulk: function SP_UI_SelectionManager$selectBulk(items) {ULSPOJ:;
        var $v_0 = new (SP.UI.List.$$(this.$$gta['SP.UI.SelectionManager']['T']))();
        for (var $v_1 = 0; $v_1 < items.length; $v_1++) {
            if (!this.isSelected(items[$v_1])) {
                this.$1u_0.add(items[$v_1]);
                $v_0.add(items[$v_1]);
            }
        }
        if ($v_0.get_length() > 0) {
            this.$6t_0('SelectionAdded_', new (SP.UI.SelectionEventArgs.$$(this.$$gta['SP.UI.SelectionManager']['T']))($v_0.toArray()));
            SP.WorkManagement.OM.JsApiUtils.notifyStateUpdated(this.$4V_0);
        }
    },
    
    $6I_0: function SP_UI_SelectionManager$$6I_0($p0) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            this.$1u_0.remove($p0[$v_0]);
        }
        this.$6t_0('SelectionRemoved_', new (SP.UI.SelectionEventArgs.$$(this.$$gta['SP.UI.SelectionManager']['T']))($p0));
        SP.WorkManagement.OM.JsApiUtils.notifyStateUpdated(this.$4V_0);
    }
}


SP.UI.SharedComponentManager = function SP_UI_SharedComponentManager($p0, $p1, $p2, $p3, $p4) {
    this.$Y_0 = new SP.UI.PersistedPropertiesComponent($p0);
    this.$1C_0 = new SP.UI.LocationManager($p3);
    this.$4w_0 = $p1;
    this.$2r_0 = $p2;
    this.$1i_0 = $p4;
    this.$4B_0 = this.$Y_0.$q_1.get_groupByProjects();
}
SP.UI.SharedComponentManager.initializeSharedComponents = function SP_UI_SharedComponentManager$initializeSharedComponents(persistedPropertiesJson, viewType, userSettingsInfo, allLocations, calendarType) {ULSPOJ:;
    if (!SP.UI.SharedComponentManager.$4I) {
        var $v_0 = SP.WorkManagement.OM.PersistedProperties.newObject(SP.UI.CsomUtilities.createDefaultClientRuntimeContext());
        $v_0.fromJson(persistedPropertiesJson);
        var $v_1 = SP.WorkManagement.OM.UserSettings.newObject(SP.UI.CsomUtilities.createDefaultClientRuntimeContext());
        $v_1.fromJson(userSettingsInfo);
        SP.UI.SharedComponentManager.$5 = new SP.UI.SharedComponentManager($v_0, viewType, $v_1, allLocations, calendarType);
        SP.UI.SharedComponentManager.$4I = true;
    }
}
SP.UI.SharedComponentManager.get_instance = function SP_UI_SharedComponentManager$get_instance() {ULSPOJ:;
    return SP.UI.SharedComponentManager.$5;
}
SP.UI.SharedComponentManager.prototype = {
    $2i_0: null,
    $4w_0: 0,
    $2r_0: null,
    $4B_0: false,
    $1i_0: 0,
    $1C_0: null,
    $Y_0: null,
    
    get_locationManager: function SP_UI_SharedComponentManager$get_locationManager() {ULSPOJ:;
        return this.$1C_0;
    },
    
    get_locations: function SP_UI_SharedComponentManager$get_locations() {ULSPOJ:;
        return this.$Y_0.$q_1.get_filteredLocationIds();
    },
    set_locations: function SP_UI_SharedComponentManager$set_locations(value) {ULSPOJ:;
        this.$Y_0.$q_1.set_filteredLocationIds(value);
        return value;
    },
    
    get_isGrouped: function SP_UI_SharedComponentManager$get_isGrouped() {ULSPOJ:;
        return this.$4B_0;
    },
    set_isGrouped: function SP_UI_SharedComponentManager$set_isGrouped(value) {ULSPOJ:;
        this.$4B_0 = value;
        this.$Y_0.$q_1.set_groupByProjects(value);
        return value;
    },
    
    get_viewType: function SP_UI_SharedComponentManager$get_viewType() {ULSPOJ:;
        return this.$4w_0;
    },
    set_viewType: function SP_UI_SharedComponentManager$set_viewType(value) {ULSPOJ:;
        this.$4w_0 = value;
        return value;
    },
    
    get_searchString: function SP_UI_SharedComponentManager$get_searchString() {ULSPOJ:;
        return this.$2i_0;
    },
    set_searchString: function SP_UI_SharedComponentManager$set_searchString(value) {ULSPOJ:;
        this.$2i_0 = value;
        return value;
    },
    
    get_settings: function SP_UI_SharedComponentManager$get_settings() {ULSPOJ:;
        return this.$2r_0;
    },
    
    get_calendarType: function SP_UI_SharedComponentManager$get_calendarType() {ULSPOJ:;
        return this.$1i_0;
    }
}


SP.UI.BWSAManager = function SP_UI_BWSAManager() {
}
SP.UI.BWSAManager.updateDataPointForTaskList = function SP_UI_BWSAManager$updateDataPointForTaskList($p0, $p1) {
    var $v_0 = 0;
    switch ($p0) {
        case 5:
            $v_0 = 10142;
            break;
        case 1:
            $v_0 = 10144;
            break;
        case 2:
            $v_0 = 10145;
            break;
        case 4:
            $v_0 = 10146;
            break;
    }
    if ($v_0 > 0) {
        EnsureScriptFunc('SP.Ribbon.js', 'GetWSA', function() {ULSPOJ:;
            var $v_1 = GetWSA();
            if ($v_1) {
                $v_1.addToAverage($v_0, $p1);
            }
        });
    }
}
SP.UI.BWSAManager.updateFilterCountDataPoint = function SP_UI_BWSAManager$updateFilterCountDataPoint($p0) {
    EnsureScriptFunc('SP.Ribbon.js', 'GetWSA', function() {ULSPOJ:;
        var $v_0 = GetWSA();
        if ($v_0) {
            $v_0.addToAverage(10143, $p0);
        }
    });
}


SP.UI.AnimationUtilities = function SP_UI_AnimationUtilities() {
}
SP.UI.AnimationUtilities.ensureAnimationScriptsAreLoaded = function SP_UI_AnimationUtilities$ensureAnimationScriptsAreLoaded(callback) {ULSPOJ:;
    EnsureScriptFunc('core.js', 'SPAnimation', callback);
}
SP.UI.AnimationUtilities.isAnimationEnabled = function SP_UI_AnimationUtilities$isAnimationEnabled() {ULSPOJ:;
    return SP.UI.AnimationUtilities.$56() && SPAnimation.Settings.IsAnimationEnabled() && !browseris.ie8standard;
}
SP.UI.AnimationUtilities.$56 = function SP_UI_AnimationUtilities$$56() {ULSPOJ:;
    return window.SPAnimation;
}
SP.UI.AnimationUtilities.fadeOut = function SP_UI_AnimationUtilities$fadeOut(element, callback) {ULSPOJ:;
    if (!SP.UI.AnimationUtilities.$56()) {
        XUI.Html.SetOpacity(element, 0);
        if (callback) {
            callback();
        }
    }
    else {
        SPAnimationUtility.BasicAnimator.FadeOut(element, callback, null);
    }
}
SP.UI.AnimationUtilities.fadeIn = function SP_UI_AnimationUtilities$fadeIn(element, callback) {ULSPOJ:;
    if (!SP.UI.AnimationUtilities.$56()) {
        XUI.Html.SetOpacity(element, 1);
        if (callback) {
            callback();
        }
    }
    else {
        SPAnimationUtility.BasicAnimator.FadeIn(element, callback, null);
    }
}


SP.UI.CsomUtilities = function SP_UI_CsomUtilities() {
}
SP.UI.CsomUtilities.createDefaultClientRuntimeContext = function SP_UI_CsomUtilities$createDefaultClientRuntimeContext() {ULSPOJ:;
    return new SP.ClientRuntimeContext(_spPageContextInfo.webServerRelativeUrl);
}
SP.UI.CsomUtilities.ensureSharePointScriptAndClientContextAreLoaded = function SP_UI_CsomUtilities$ensureSharePointScriptAndClientContextAreLoaded(callback) {ULSPOJ:;
    RegisterSod('sp.js', null);
    EnsureScriptFunc('sp.js', 'SP.ClientContext', callback);
}


SP.UI.DebugConsole = function SP_UI_DebugConsole() {
}
SP.UI.DebugConsole.$$cctor = function SP_UI_DebugConsole$$$cctor() {ULSPOJ:;
    if (window.location.href.indexOf('DebugConsole=1') >= 0) {
        SP.UI.DebugConsole.$4i = true;
    }
}
SP.UI.DebugConsole.logCategory = function SP_UI_DebugConsole$logCategory(category, message) {ULSPOJ:;
    SP.UI.DebugConsole.log('[' + category + ']: ' + message);
}
SP.UI.DebugConsole.log = function SP_UI_DebugConsole$log(message) {ULSPOJ:;
    if (SP.UI.DebugConsole.$4i) {
    }
}


SP.UI.DictionaryUtilities = function SP_UI_DictionaryUtilities() {
}
SP.UI.DictionaryUtilities.containKey = function SP_UI_DictionaryUtilities$containKey($p0, $p1) {
    return $p1 in $p0;
}
SP.UI.DictionaryUtilities.deleteKey = function SP_UI_DictionaryUtilities$deleteKey($p0, $p1) {
    delete $p0[$p1];
}
SP.UI.DictionaryUtilities.loop = function SP_UI_DictionaryUtilities$loop($p0, $p1, $p2) {
    for (var objLoop in $p1) { $p2($p1[objLoop]) };
}
SP.UI.DictionaryUtilities.toArray = function SP_UI_DictionaryUtilities$toArray($p0, $p1) {
    var $v_0 = [];
    SP.UI.DictionaryUtilities.loop($p0, $p1, function($p1_0) {
        Array.add($v_0, $p1_0);
    });
    return $v_0;
}




SP.UI.DomUtilities = function SP_UI_DomUtilities() {
}
SP.UI.DomUtilities.$$cctor = function SP_UI_DomUtilities$$$cctor() {ULSPOJ:;
    var $$dict_0 = SP.UI.DomUtilities.$2Z;
    for (var $$key_1 in $$dict_0) {
        var $v_0 = { key: $$key_1, value: $$dict_0[$$key_1] };
        SP.UI.DomUtilities.$2Z[$v_0.value] = $v_0.key;
    }
}
SP.UI.DomUtilities.focus = function SP_UI_DomUtilities$focus(element) {ULSPOJ:;
    window.setTimeout(function() {ULSPOJ:;
        if (element) {
            try {
                element.focus();
            }
            catch ($$e_1) {
            }
        }
    }, 0);
}
SP.UI.DomUtilities.setText = function SP_UI_DomUtilities$setText(elem, text) {ULSPOJ:;
    XUI.Html.SetText(elem, text);
}
SP.UI.DomUtilities.hide = function SP_UI_DomUtilities$hide(elem) {ULSPOJ:;
    elem.style.display = 'none';
}
SP.UI.DomUtilities.show = function SP_UI_DomUtilities$show(elem) {ULSPOJ:;
    elem.style.display = '';
}
SP.UI.DomUtilities.isLtr = function SP_UI_DomUtilities$isLtr() {ULSPOJ:;
    return XUI.Html.GetDirection() === 'ltr';
}
SP.UI.DomUtilities.setBorderWidthLeftIntl = function SP_UI_DomUtilities$setBorderWidthLeftIntl(element, borderWidth) {ULSPOJ:;
    SP.UI.DomUtilities.$5E(element, 'borderLeftWidth', borderWidth);
}
SP.UI.DomUtilities.setBorderWidthRightIntl = function SP_UI_DomUtilities$setBorderWidthRightIntl(element, borderWidth) {ULSPOJ:;
    SP.UI.DomUtilities.$5E(element, 'borderRightWidth', borderWidth);
}
SP.UI.DomUtilities.setMarginLeftIntl = function SP_UI_DomUtilities$setMarginLeftIntl(element, marginValue) {ULSPOJ:;
    SP.UI.DomUtilities.$5E(element, 'marginLeft', marginValue);
}
SP.UI.DomUtilities.clearChildren = function SP_UI_DomUtilities$clearChildren(element) {ULSPOJ:;
    element.innerHTML = '';
}
SP.UI.DomUtilities.$5E = function SP_UI_DomUtilities$$5E($p0, $p1, $p2) {
    var $v_0 = SP.UI.DomUtilities.$8q($p1);
    $p0.style[$v_0]=$p2;
}
SP.UI.DomUtilities.$8q = function SP_UI_DomUtilities$$8q($p0) {
    if (!SP.UI.DictionaryUtilities.containKey(SP.UI.DomUtilities.$2Z, $p0)) {
        throw Error.argument($p0, 'No RTL entry found for this property.');
    }
    if (SP.UI.DomUtilities.isLtr()) {
        return $p0;
    }
    else {
        return SP.UI.DomUtilities.$2Z[$p0];
    }
}


SP.UI.RibbonUtilities = function SP_UI_RibbonUtilities() {
}
SP.UI.RibbonUtilities.doActionWhenRibbonScriptsAreLoaded = function SP_UI_RibbonUtilities$doActionWhenRibbonScriptsAreLoaded(callback) {ULSPOJ:;
    RegisterSod('ribbon', null);
    RegisterSod('cui.js', null);
    EnsureScriptFunc('cui.js', 'CUI.Page.PageManager', function() {ULSPOJ:;
        EnsureScriptFunc('ribbon', 'SP.Ribbon.PageManager', callback);
    });
}
SP.UI.RibbonUtilities.doActionIfRibbonObjectIsAvailable = function SP_UI_RibbonUtilities$doActionIfRibbonObjectIsAvailable(callback) {ULSPOJ:;
    SP.UI.RibbonUtilities.doActionWhenRibbonScriptsAreLoaded(function() {ULSPOJ:;
        if (SP.Ribbon.PageManager.get_instance().get_ribbon()) {
            callback();
        }
    });
}
SP.UI.RibbonUtilities.refreshRibbon = function SP_UI_RibbonUtilities$refreshRibbon() {ULSPOJ:;
    SP.UI.RibbonUtilities.doActionIfRibbonObjectIsAvailable(function() {ULSPOJ:;
        SP.Ribbon.PageManager.get_instance().get_ribbon().refresh();
    });
}


SP.UI.AriaUtilities = function SP_UI_AriaUtilities() {
}
SP.UI.AriaUtilities.setAriaRole = function SP_UI_AriaUtilities$setAriaRole(element, role) {ULSPOJ:;
    SP.UI.Utilities.setNamedProperty(element, 'role', role);
}
SP.UI.AriaUtilities.setAriaSelected = function SP_UI_AriaUtilities$setAriaSelected(element, selected) {ULSPOJ:;
    SP.UI.Utilities.setNamedProperty(element, 'aria-selected', selected);
}
SP.UI.AriaUtilities.setAriaExpanded = function SP_UI_AriaUtilities$setAriaExpanded(element, expanded) {ULSPOJ:;
    SP.UI.Utilities.setNamedProperty(element, 'aria-expanded', expanded);
}
SP.UI.AriaUtilities.setAriaLevel = function SP_UI_AriaUtilities$setAriaLevel(element, level) {ULSPOJ:;
    SP.UI.Utilities.setNamedProperty(element, 'aria-level', level);
}


SP.UI.DateTimeUtilities = function SP_UI_DateTimeUtilities() {
}
SP.UI.DateTimeUtilities.isValidDate = function SP_UI_DateTimeUtilities$isValidDate(date) {ULSPOJ:;
    if (!date) {
        return false;
    }
    if (Object.getType(date) === Date) {
        if (!SP.UI.DateTimeUtilities.isDefaultDate(date)) {
            return true;
        }
    }
    return false;
}
SP.UI.DateTimeUtilities.isDefaultDate = function SP_UI_DateTimeUtilities$isDefaultDate(dateTime) {ULSPOJ:;
    return !dateTime || (dateTime.getDate() === 1 && !dateTime.getMonth() && dateTime.getFullYear() === 1901);
}
SP.UI.DateTimeUtilities.castToDateWithoutValidation = function SP_UI_DateTimeUtilities$castToDateWithoutValidation(date) {ULSPOJ:;
    return (date);
}
SP.UI.DateTimeUtilities.formatDate = function SP_UI_DateTimeUtilities$formatDate(dateTime, format) {ULSPOJ:;
    var $v_0 = SP.DateTimeUtil.IntlDate.createFromJsLocalDate(dateTime, _spRegionalSettings.calendarType);
    return $v_0.format(format, Sys.CultureInfo.CurrentCulture.name);
}
SP.UI.DateTimeUtilities.createDateString = function SP_UI_DateTimeUtilities$createDateString(date) {ULSPOJ:;
    return SP.UI.DateTimeUtilities.createDateStringWithCustomFormat(date, 'd');
}
SP.UI.DateTimeUtilities.createDateStringWithCustomFormat = function SP_UI_DateTimeUtilities$createDateStringWithCustomFormat(date, format) {ULSPOJ:;
    var $v_0 = '';
    if (date) {
        if (Object.getType(date) === Date) {
            if (!SP.UI.DateTimeUtilities.isDefaultDate(date)) {
                $v_0 = SP.UI.DateTimeUtilities.formatDate(date, format);
            }
        }
        else {
            $v_0 = date.toString();
        }
    }
    return $v_0;
}
SP.UI.DateTimeUtilities.getDaysBetweenDates = function SP_UI_DateTimeUtilities$getDaysBetweenDates(dueDate, currentDate) {ULSPOJ:;
    var $v_0 = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    var $v_1 = dueDate.getTime();
    var $v_2 = $v_0.getTime();
    var $v_3 = $v_1 - $v_2;
    return Math.floor($v_3 / 86400000);
}
SP.UI.DateTimeUtilities.getLocalTimeOffsetByDays = function SP_UI_DateTimeUtilities$getLocalTimeOffsetByDays(daysOffset) {ULSPOJ:;
    var $v_0 = SP.DateTimeUtil.IntlDate.get_utcNow();
    $v_0.addDays(daysOffset);
    return $v_0.toJsDate();
}


SP.UI.Utilities = function SP_UI_Utilities() {
}
SP.UI.Utilities.callIfNotNull = function SP_UI_Utilities$callIfNotNull(fnCallback, returnValue) {ULSPOJ:;
    if (fnCallback) {
        fnCallback(returnValue);
    }
}
SP.UI.Utilities.setNamedProperty = function SP_UI_Utilities$setNamedProperty(element, property, value) {ULSPOJ:;
    element[property] = value;
}
SP.UI.Utilities.getNamedProperty = function SP_UI_Utilities$getNamedProperty(T, element, property) {ULSPOJ:;
    return element[property];
}
SP.UI.Utilities.showTaskDetailsDialog = function SP_UI_Utilities$showTaskDetailsDialog(editUrl, id) {ULSPOJ:;
    GoToPage(SP.UI.Utilities.$6Q(editUrl, id));
}
SP.UI.Utilities.$6Q = function SP_UI_Utilities$$6Q($p0, $p1) {
    if (!$p0) {
        $p0 = 'EditTask.aspx?taskId=' + $p1.toString();
    }
    else {
        $p0 += ($p0.indexOf('?') < 0) ? '?' : '&';
        $p0 += 'aggregatorKey=' + $p1.toString();
        $p0 += '&CustomRedirect=' + SP.UI.CustomRedirectViewKey.$8y(SP.UI.SharedComponentManager.$5.get_viewType());
    }
    return $p0;
}
SP.UI.Utilities.showNewTaskDialog = function SP_UI_Utilities$showNewTaskDialog() {ULSPOJ:;
    GoToPage('EditTask.aspx', false);
}
SP.UI.Utilities.setOpacity = function SP_UI_Utilities$setOpacity(element, opacity) {ULSPOJ:;
    XUI.Html.SetOpacity(element, opacity);
}
SP.UI.Utilities.isNullOrNoValue = function SP_UI_Utilities$isNullOrNoValue(toCompare) {ULSPOJ:;
    return (toCompare) === SP.UI.TaskListConstants.noValue || (toCompare == null);
}
SP.UI.Utilities.reverse = function SP_UI_Utilities$reverse(T, array) {ULSPOJ:;
    return array.reverse();
}
SP.UI.Utilities.join = function SP_UI_Utilities$join(T, array, separator) {ULSPOJ:;
    return array.join(separator);
}


SP.UI.SerializationUtilities = function SP_UI_SerializationUtilities() {
}
SP.UI.SerializationUtilities.tryToDeserialize = function SP_UI_SerializationUtilities$tryToDeserialize(T, jsonValue) {ULSPOJ:;
    var $v_0 = false;
    var $v_1 = ((T === Number || Type.isEnum(T)) ? 0 : (T === Boolean) ? false : null);
    try {
        $v_1 = JSON.parse(jsonValue);;
        $v_0 = true;
    }
    catch ($$e_4) {
    }
    if ($v_0) {
        return $v_1;
    }
    else {
        return ((T === Number || Type.isEnum(T)) ? 0 : (T === Boolean) ? false : null);
    }
}
SP.UI.SerializationUtilities.deserializeDate = function SP_UI_SerializationUtilities$deserializeDate(date) {ULSPOJ:;
    var $v_0 = date.replace('/Date(', '');
    $v_0 = $v_0.replace(')/', '');
    var $v_1 = parseInt($v_0, 10);
    return new Date($v_1);
}


SP.UI.LocationUtilities = function SP_UI_LocationUtilities() {
}
SP.UI.LocationUtilities.getIdFromLocation = function SP_UI_LocationUtilities$getIdFromLocation(location) {ULSPOJ:;
    return (location) ? location.get_id() : SP.UI.TaskListConstants.noValue;
}
SP.UI.LocationUtilities.isPersonalLocation = function SP_UI_LocationUtilities$isPersonalLocation(location) {ULSPOJ:;
    return location.get_id() === SP.UI.TaskListConstants.noValue;
}


SP.UI.EventUtilities = function SP_UI_EventUtilities() {
}
SP.UI.EventUtilities.raiseEvent = function SP_UI_EventUtilities$raiseEvent(T, eventList, eventId, sender, eventArgs) {ULSPOJ:;
    SP.UI.DebugConsole.log('Raising event: ' + eventId);
    var $v_0 = eventList.getHandler(eventId);
    if ($v_0) {
        $v_0(sender, eventArgs);
    }
}


Type.registerNamespace('SP.WorkManagement.OM');

SP.WorkManagement.OM.IJsApiImpl = function() {}
SP.WorkManagement.OM.IJsApiImpl.registerInterface('SP.WorkManagement.OM.IJsApiImpl');


SP.WorkManagement.OM.IJsApi = function() {}
SP.WorkManagement.OM.IJsApi.registerInterface('SP.WorkManagement.OM.IJsApi');


SP.WorkManagement.OM.IEditTaskImpl = function() {}
SP.WorkManagement.OM.IEditTaskImpl.registerInterface('SP.WorkManagement.OM.IEditTaskImpl');


SP.WorkManagement.OM.IEditTask = function() {}
SP.WorkManagement.OM.IEditTask.registerInterface('SP.WorkManagement.OM.IEditTask');


SP.WorkManagement.OM.IMyTasksDashboardImpl = function() {}
SP.WorkManagement.OM.IMyTasksDashboardImpl.registerInterface('SP.WorkManagement.OM.IMyTasksDashboardImpl');


SP.WorkManagement.OM.IMyTasksDashboard = function() {}
SP.WorkManagement.OM.IMyTasksDashboard.registerInterface('SP.WorkManagement.OM.IMyTasksDashboard');


SP.WorkManagement.OM.ISettingsPageImpl = function() {}
SP.WorkManagement.OM.ISettingsPageImpl.registerInterface('SP.WorkManagement.OM.ISettingsPageImpl');


SP.WorkManagement.OM.ISettingsPage = function() {}
SP.WorkManagement.OM.ISettingsPage.registerInterface('SP.WorkManagement.OM.ISettingsPage');


SP.WorkManagement.OM.ITaskListImpl = function() {}
SP.WorkManagement.OM.ITaskListImpl.registerInterface('SP.WorkManagement.OM.ITaskListImpl');


SP.WorkManagement.OM.ITaskList = function() {}
SP.WorkManagement.OM.ITaskList.registerInterface('SP.WorkManagement.OM.ITaskList');


SP.WorkManagement.OM.JsApiUtils = function SP_WorkManagement_OM_JsApiUtils() {
}
SP.WorkManagement.OM.JsApiUtils.executeWithJsApiLoaded = function SP_WorkManagement_OM_JsApiUtils$executeWithJsApiLoaded(toCallback) {ULSPOJ:;
    SP.WorkManagement.OM.ExecuteWithJsApiLoaded(function() {ULSPOJ:; toCallback(); } );;
}
SP.WorkManagement.OM.JsApiUtils.notifyStateUpdated = function SP_WorkManagement_OM_JsApiUtils$notifyStateUpdated(underlyingObject) {ULSPOJ:;
    window.JsApi != null && window.JsApi.ExtensibilityManager != null && JsApi.ExtensibilityManager.NotifyStateUpdated(underlyingObject);;
}
SP.WorkManagement.OM.JsApiUtils.addListener = function SP_WorkManagement_OM_JsApiUtils$addListener(fnListener) {ULSPOJ:;
    var $v_0 = function() {ULSPOJ:;
        JsApi.ExtensibilityManager.AddListener('SP.WorkManagement.OM', fnListener);;
    };
    SP.WorkManagement.OM.JsApiUtils.executeWithJsApiLoaded($v_0);
}
SP.WorkManagement.OM.JsApiUtils.createCallbackAggregator = function SP_WorkManagement_OM_JsApiUtils$createCallbackAggregator(baseCallback, expectedCallbackCount) {ULSPOJ:;
    var $v_0 = null;
    if (baseCallback) {
        var $v_1 = 0;
        var $v_2 = true;
        $v_0 = function($p1_0) {
            $v_2 = $v_2 && $p1_0;
            $v_1++;
            if ($v_1 === expectedCallbackCount) {
                baseCallback($v_2);
            }
        };
    }
    return $v_0;
}


Type.registerNamespace('SP.WorkManagement.SharePointProvider.OM');

SP.WorkManagement.SharePointProvider.OM.SharePointProviderTaskData = function SP_WorkManagement_SharePointProvider_OM_SharePointProviderTaskData() {
}
SP.WorkManagement.SharePointProvider.OM.SharePointProviderTaskData.prototype = {
    webPath: null,
    webName: null,
    listViewPath: null,
    listName: null,
    id: 0,
    isWorkflowTask: false
}


Type.registerNamespace('SP.UI.PageComponents');

SP.UI.PageComponents.AwiopBasePageComponent = function SP_UI_PageComponents_AwiopBasePageComponent(associatedApi) {ULSPOJ:;
    this.$$d_$64_1 = Function.createDelegate(this, this.$64_1);
    SP.UI.PageComponents.AwiopBasePageComponent.initializeBase(this);
    this.$5P_1 = associatedApi;
    var $$t_3 = this;
    SP.WorkManagement.OM.JsApiUtils.addListener(function($p1_0, $p1_1) {
        if ($p1_0.get_ApiType() === $$t_3.$5P_1) {
            if (!$$t_3.$22_1) {
                $$t_3.$22_1 = $p1_0;
                $$t_3.$22_1.RegisterStateUpdatedListenerForApi($$t_3.$$d_$64_1);
                SP.UI.RibbonUtilities.refreshRibbon();
            }
        }
    });
}
SP.UI.PageComponents.AwiopBasePageComponent.addPageComponent = function SP_UI_PageComponents_AwiopBasePageComponent$addPageComponent(component, onScriptLoaded) {ULSPOJ:;
    SP.UI.RibbonUtilities.doActionWhenRibbonScriptsAreLoaded(function() {ULSPOJ:;
        SP.Ribbon.PageManager.get_instance().addPageComponent(component);
        if (onScriptLoaded) {
            onScriptLoaded();
        }
    });
}
SP.UI.PageComponents.AwiopBasePageComponent.prototype = {
    $5P_1: 0,
    $22_1: null,
    
    get_rawApi: function SP_UI_PageComponents_AwiopBasePageComponent$get_rawApi() {ULSPOJ:;
        return this.$22_1;
    },
    
    $64_1: function SP_UI_PageComponents_AwiopBasePageComponent$$64_1($p0, $p1) {
        if ($p0 === this.$22_1) {
            SP.UI.RibbonUtilities.refreshRibbon();
        }
    },
    
    isFocusable: function SP_UI_PageComponents_AwiopBasePageComponent$isFocusable() {ULSPOJ:;
        return true;
    },
    
    receiveFocus: function SP_UI_PageComponents_AwiopBasePageComponent$receiveFocus() {ULSPOJ:;
        return true;
    },
    
    yieldFocus: function SP_UI_PageComponents_AwiopBasePageComponent$yieldFocus() {ULSPOJ:;
        return true;
    },
    
    canHandleCommand: function SP_UI_PageComponents_AwiopBasePageComponent$canHandleCommand(commandId) {ULSPOJ:;
        return false;
    },
    
    handleCommand: function SP_UI_PageComponents_AwiopBasePageComponent$handleCommand(commandId, properties, sequence) {ULSPOJ:;
        return false;
    }
}


SP.UI.PageComponents.MyTasksDashboardRibbonCommands = function SP_UI_PageComponents_MyTasksDashboardRibbonCommands() {
}


SP.UI.PageComponents.MyTasksDashboardPageComponent = function SP_UI_PageComponents_MyTasksDashboardPageComponent($p0) {
    SP.UI.PageComponents.MyTasksDashboardPageComponent.initializeBase(this, [ 2 ]);
    this.$3P_2 = $p0;
}
SP.UI.PageComponents.MyTasksDashboardPageComponent.initialize = function SP_UI_PageComponents_MyTasksDashboardPageComponent$initialize(isExchangeSyncOnline) {ULSPOJ:;
    var $v_0 = new SP.UI.PageComponents.MyTasksDashboardPageComponent(isExchangeSyncOnline);
    SP.UI.PageComponents.AwiopBasePageComponent.addPageComponent($v_0, null);
}
SP.UI.PageComponents.MyTasksDashboardPageComponent.$9S = function SP_UI_PageComponents_MyTasksDashboardPageComponent$$9S() {ULSPOJ:;
    var $v_0 = SP.UI.ApiManager.get_instance().getAllApisOfType(SP.WorkManagement.OM.TaskList, 4);
    if (!$v_0) {
        return false;
    }
    for (var $$arr_1 = $v_0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
        var $v_1 = $$arr_1[$$idx_3];
        if ($v_1.get_TaskListType() !== 1) {
            return true;
        }
    }
    return false;
}
SP.UI.PageComponents.MyTasksDashboardPageComponent.prototype = {
    $29_2: null,
    $3P_2: false,
    
    get_dashboard: function SP_UI_PageComponents_MyTasksDashboardPageComponent$get_dashboard() {ULSPOJ:;
        return this.$22_1;
    },
    
    getId: function SP_UI_PageComponents_MyTasksDashboardPageComponent$getId() {ULSPOJ:;
        return 'MyTasksDashboardPageComponent';
    },
    
    init: function SP_UI_PageComponents_MyTasksDashboardPageComponent$init() {ULSPOJ:;
        this.$29_2 = [ 'cxtTasks', 'NewGroup', 'NewTask', 'TasksTab', 'ViewsGroup', 'Settings', 'Manage', 'Grouping', 'QueryGrouping', 'ExchangeSyncSettings' ];
    },
    
    getFocusedCommands: function SP_UI_PageComponents_MyTasksDashboardPageComponent$getFocusedCommands() {ULSPOJ:;
        return this.$29_2;
    },
    
    getGlobalCommands: function SP_UI_PageComponents_MyTasksDashboardPageComponent$getGlobalCommands() {ULSPOJ:;
        return this.$29_2;
    },
    
    canHandleCommand: function SP_UI_PageComponents_MyTasksDashboardPageComponent$canHandleCommand(commandId) {ULSPOJ:;
        switch (commandId) {
            case 'cxtTasks':
            case 'NewGroup':
            case 'NewTask':
            case 'TasksTab':
            case 'ViewsGroup':
            case 'Settings':
                return true;
            case 'ExchangeSyncSettings':
                return this.$3P_2;
            case 'Manage':
            case 'Grouping':
            case 'QueryGrouping':
                return SP.UI.PageComponents.MyTasksDashboardPageComponent.$9S();
            default:
                return false;
        }
    },
    
    handleCommand: function SP_UI_PageComponents_MyTasksDashboardPageComponent$handleCommand(commandId, properties, sequence) {ULSPOJ:;
        switch (commandId) {
            case 'NewTask':
                this.get_dashboard().NewTask();
                return true;
            case 'Settings':
                GoToPage('Settings.aspx');
                return true;
            case 'QueryGrouping':
                properties[CUI.Controls.ToggleButtonCommandProperties.On] = this.get_dashboard().get_IsGrouped();
                return true;
            case 'Grouping':
                this.get_dashboard().SetGrouping(properties[CUI.Controls.ToggleButtonCommandProperties.On], null);
                return true;
            case 'ExchangeSyncSettings':
                this.get_dashboard().ShowExchangeSyncSettingsDialog();
                return true;
            default:
                return true;
        }
    }
}


SP.UI.PageComponents.TaskListCommands = function SP_UI_PageComponents_TaskListCommands() {
}


SP.UI.PageComponents.TaskListPageComponent = function SP_UI_PageComponents_TaskListPageComponent() {ULSPOJ:;
    this.$$d_$64_1 = Function.createDelegate(this, this.$64_1);
    this.$15_1 = [];
    SP.UI.PageComponents.TaskListPageComponent.initializeBase(this);
    var $$t_2 = this;
    SP.WorkManagement.OM.JsApiUtils.addListener(function($p1_0, $p1_1) {
        if ($p1_0.get_ApiType() === 4) {
            if (!Array.contains($$t_2.$15_1, $p1_0)) {
                Array.add($$t_2.$15_1, $p1_0);
                $p1_0.RegisterStateUpdatedListenerForApi($$t_2.$$d_$64_1);
            }
        }
    });
}
SP.UI.PageComponents.TaskListPageComponent.initialize = function SP_UI_PageComponents_TaskListPageComponent$initialize() {ULSPOJ:;
    var $v_0 = new SP.UI.PageComponents.TaskListPageComponent();
    SP.UI.PageComponents.AwiopBasePageComponent.addPageComponent($v_0, null);
}
SP.UI.PageComponents.TaskListPageComponent.$2t = function SP_UI_PageComponents_TaskListPageComponent$$2t($p0) {
    var $v_0 = new Array($p0.length);
    for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        $v_0[$v_1] = $p0[$v_1].id;
    }
    return $v_0;
}
SP.UI.PageComponents.TaskListPageComponent.prototype = {
    $29_1: null,
    
    getId: function SP_UI_PageComponents_TaskListPageComponent$getId() {ULSPOJ:;
        return 'TaskListPageComponent';
    },
    
    $64_1: function SP_UI_PageComponents_TaskListPageComponent$$64_1($p0, $p1) {
        if (Array.contains(this.$15_1, $p0)) {
            SP.UI.RibbonUtilities.refreshRibbon();
        }
    },
    
    $7Q_1: function SP_UI_PageComponents_TaskListPageComponent$$7Q_1() {ULSPOJ:;
        for (var $v_0 = 0; $v_0 < this.$15_1.length; $v_0++) {
            var $v_1 = this.$15_1[$v_0];
            if ($v_1.GetSelectedTasks().length > 0) {
                return true;
            }
        }
        return false;
    },
    
    init: function SP_UI_PageComponents_TaskListPageComponent$init() {ULSPOJ:;
        this.$29_1 = [ 'Delete', 'EditTask', 'ItemGroup', 'TagsGroup', 'MarkComplete', 'QueryMarkComplete', 'Rename', 'QueryTrackTask', 'TrackTask', 'QueryAddToTimeline', 'AddToTimeline' ];
    },
    
    getFocusedCommands: function SP_UI_PageComponents_TaskListPageComponent$getFocusedCommands() {ULSPOJ:;
        return this.$29_1;
    },
    
    getGlobalCommands: function SP_UI_PageComponents_TaskListPageComponent$getGlobalCommands() {ULSPOJ:;
        return this.$29_1;
    },
    
    isFocusable: function SP_UI_PageComponents_TaskListPageComponent$isFocusable() {ULSPOJ:;
        return true;
    },
    
    receiveFocus: function SP_UI_PageComponents_TaskListPageComponent$receiveFocus() {ULSPOJ:;
        return true;
    },
    
    yieldFocus: function SP_UI_PageComponents_TaskListPageComponent$yieldFocus() {ULSPOJ:;
        return true;
    },
    
    canHandleCommand: function SP_UI_PageComponents_TaskListPageComponent$canHandleCommand(commandId) {ULSPOJ:;
        switch (commandId) {
            case 'ItemGroup':
            case 'TagsGroup':
                return true;
            case 'Delete':
            case 'EditTask':
            case 'MarkComplete':
            case 'Rename':
            case 'TrackTask':
            case 'QueryTrackTask':
            case 'AddToTimeline':
            case 'QueryMarkComplete':
            case 'QueryAddToTimeline':
                return this.$7Q_1();
            default:
                return false;
        }
    },
    
    handleCommand: function SP_UI_PageComponents_TaskListPageComponent$handleCommand(commandId, properties, sequence) {ULSPOJ:;
        switch (commandId) {
            case 'EditTask':
                this.$8V_1();
                return true;
            case 'Delete':
                this.$8P_1();
                return true;
            case 'QueryMarkComplete':
                properties[CUI.Controls.ToggleButtonCommandProperties.On] = this.$9V_1();
                return true;
            case 'MarkComplete':
                this.$Ap_1(properties[CUI.Controls.ToggleButtonCommandProperties.On]);
                return true;
            case 'QueryTrackTask':
                properties[CUI.Controls.ToggleButtonCommandProperties.On] = this.$B8_1();
                return true;
            case 'TrackTask':
                this.$B1_1(properties[CUI.Controls.ToggleButtonCommandProperties.On]);
                return true;
            case 'Rename':
                this.$AW_1();
                return true;
            case 'QueryAddToTimeline':
                properties[CUI.Controls.ToggleButtonCommandProperties.On] = this.$7L_1();
                return true;
            case 'AddToTimeline':
                this.$B0_1(properties[CUI.Controls.ToggleButtonCommandProperties.On]);
                return true;
            default:
                return false;
        }
    },
    
    $7L_1: function SP_UI_PageComponents_TaskListPageComponent$$7L_1() {ULSPOJ:;
        var $v_0 = false;
        var $$t_3 = this;
        this.$2u_1(function($p1_0, $p1_1) {
            if (!$p1_0.addToTimeline) {
                $v_0 = true;
                return false;
            }
            else {
                return true;
            }
        });
        return !$v_0;
    },
    
    $9V_1: function SP_UI_PageComponents_TaskListPageComponent$$9V_1() {ULSPOJ:;
        var $v_0 = false;
        var $$t_3 = this;
        this.$2u_1(function($p1_0, $p1_1) {
            if (!$p1_0.completed) {
                $v_0 = true;
                return false;
            }
            else {
                return true;
            }
        });
        return !$v_0;
    },
    
    $B8_1: function SP_UI_PageComponents_TaskListPageComponent$$B8_1() {ULSPOJ:;
        var $v_0 = false;
        var $$t_3 = this;
        this.$2u_1(function($p1_0, $p1_1) {
            if (!$p1_0.pinned) {
                $v_0 = true;
                return false;
            }
            else {
                return true;
            }
        });
        return !$v_0;
    },
    
    $B0_1: function SP_UI_PageComponents_TaskListPageComponent$$B0_1($p0) {
        var $$t_3 = this;
        this.$3o_1(function($p1_0) {
            var $v_0 = $p1_0.GetSelectedTasks();
            if ($v_0 && $v_0.length > 0) {
                if ($p0) {
                    $p1_0.AddToTimeline(SP.UI.PageComponents.TaskListPageComponent.$2t($v_0), null);
                }
                else {
                    $p1_0.RemoveFromTimeline(SP.UI.PageComponents.TaskListPageComponent.$2t($v_0), null);
                }
            }
            return true;
        });
    },
    
    $3o_1: function SP_UI_PageComponents_TaskListPageComponent$$3o_1($p0) {
        for (var $v_0 = 0; $v_0 < this.$15_1.length; $v_0++) {
            var $v_1 = this.$15_1[$v_0];
            if (!$p0($v_1)) {
                return;
            }
        }
    },
    
    $2u_1: function SP_UI_PageComponents_TaskListPageComponent$$2u_1($p0) {
        for (var $v_0 = 0; $v_0 < this.$15_1.length; $v_0++) {
            var $v_1 = this.$15_1[$v_0];
            var $v_2 = $v_1.GetSelectedTasks();
            for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                if (!$p0($v_2[$v_3], $v_1)) {
                    return;
                }
            }
        }
    },
    
    $8V_1: function SP_UI_PageComponents_TaskListPageComponent$$8V_1() {ULSPOJ:;
        var $$t_2 = this;
        this.$2u_1(function($p1_0, $p1_1) {
            SP.UI.Utilities.showTaskDetailsDialog($p1_0.editUrl, $p1_0.id);
            return false;
        });
    },
    
    $AW_1: function SP_UI_PageComponents_TaskListPageComponent$$AW_1() {ULSPOJ:;
        var $$t_2 = this;
        this.$2u_1(function($p1_0, $p1_1) {
            $p1_1.InlineEditName($p1_0.id);
            return false;
        });
    },
    
    $8P_1: function SP_UI_PageComponents_TaskListPageComponent$$8P_1() {ULSPOJ:;
        var $$t_2 = this;
        this.$3o_1(function($p1_0) {
            var $v_0 = $p1_0.GetSelectedTasks();
            if ($v_0 && $v_0.length > 0) {
                $p1_0.DeleteTasks(SP.UI.PageComponents.TaskListPageComponent.$2t($v_0), null);
            }
            return true;
        });
    },
    
    $Ap_1: function SP_UI_PageComponents_TaskListPageComponent$$Ap_1($p0) {
        var $$t_3 = this;
        this.$3o_1(function($p1_0) {
            var $v_0 = $p1_0.GetSelectedTasks();
            if ($v_0 && $v_0.length > 0) {
                $p1_0.SetCompleted(SP.UI.PageComponents.TaskListPageComponent.$2t($v_0), ($p0) ? 0 : 1, null);
            }
            return true;
        });
    },
    
    $B1_1: function SP_UI_PageComponents_TaskListPageComponent$$B1_1($p0) {
        var $$t_3 = this;
        this.$3o_1(function($p1_0) {
            var $v_0 = $p1_0.GetSelectedTasks();
            if ($v_0 && $v_0.length > 0) {
                $p1_0.SetPinned(SP.UI.PageComponents.TaskListPageComponent.$2t($v_0), ($p0) ? 0 : 1, null);
            }
            return true;
        });
    }
}






SP.UI.TimelineToolTipContents.registerClass('SP.UI.TimelineToolTipContents');
SP.UI.ConstantsImage.registerClass('SP.UI.ConstantsImage');
SP.UI.PathConstants.registerClass('SP.UI.PathConstants');
SP.UI.SessionBuilder.registerClass('SP.UI.SessionBuilder');
SP.UI.CustomRedirectViewKey.registerClass('SP.UI.CustomRedirectViewKey');
SP.UI.TaskQueryBuilder.registerClass('SP.UI.TaskQueryBuilder');
SP.UI.WrappedSession.registerClass('SP.UI.WrappedSession');
SP.UI.MyTasksDashboardImpl.registerClass('SP.UI.MyTasksDashboardImpl', null, SP.WorkManagement.OM.IMyTasksDashboardImpl, SP.WorkManagement.OM.IMyTasksDashboard, SP.WorkManagement.OM.IJsApiImpl);
SP.UI.ApiManager.registerClass('SP.UI.ApiManager');
SP.UI.CompletionComponent.registerClass('SP.UI.CompletionComponent', Sys.Component);
SP.UI.CompletionComponent.ExpirationInfo.registerClass('SP.UI.CompletionComponent.ExpirationInfo');
SP.UI.FriendlyDateComponent.registerClass('SP.UI.FriendlyDateComponent', Sys.Component);
SP.UI.NotificationComponent.registerClass('SP.UI.NotificationComponent', Sys.Component);
SP.UI.PersistedPropertiesComponent.registerClass('SP.UI.PersistedPropertiesComponent', Sys.Component);
SP.UI.TaskListConstants.registerClass('SP.UI.TaskListConstants');
SP.UI.UpdateTimelineAsyncJob.registerClass('SP.UI.UpdateTimelineAsyncJob', null, SP.UI.IAsyncJob);
SP.UI.AnimationAsyncJob.registerClass('SP.UI.AnimationAsyncJob', null, SP.UI.IAsyncJobWithCallback);
SP.UI.AsyncJobManager.registerClass('SP.UI.AsyncJobManager', null, Sys.IDisposable);
SP.UI.AsyncJobWithCallback.registerClass('SP.UI.AsyncJobWithCallback', null, SP.UI.IAsyncJobWithCallback);
SP.UI.CallbackAsyncJob.registerClass('SP.UI.CallbackAsyncJob', null, SP.UI.IAsyncJob);
SP.UI.ChainedAsyncJob.registerClass('SP.UI.ChainedAsyncJob', null, SP.UI.IAsyncJobWithCallback);
SP.UI.DeferredRenderManager.registerClass('SP.UI.DeferredRenderManager', Sys.Component);
SP.UI.DeferredRenderRegion.registerClass('SP.UI.DeferredRenderRegion');
SP.UI.IntervalManager.registerClass('SP.UI.IntervalManager');
SP.UI.AwiopAttractModeControl.registerClass('SP.UI.AwiopAttractModeControl', Sys.UI.Control, Sys.IDisposable);
SP.UI.ActiveAttractModeControl.registerClass('SP.UI.ActiveAttractModeControl', SP.UI.AwiopAttractModeControl);
SP.UI.ImportantAttractModeControl.registerClass('SP.UI.ImportantAttractModeControl', SP.UI.AwiopAttractModeControl);
SP.UI.ClientCompletionInfo.registerClass('SP.UI.ClientCompletionInfo');
SP.UI.RowControl.registerClass('SP.UI.RowControl', null, SP.UI.ISelectable, SP.UI.IKeyboardEventHandler, SP.UI.IMouseEventHandler, Sys.IDisposable);
SP.UI.WidgetRowControl.registerClass('SP.UI.WidgetRowControl', SP.UI.RowControl);
SP.UI.TaskControl.registerClass('SP.UI.TaskControl', SP.UI.WidgetRowControl, SP.UI.IInlineEditableTaskRow, SP.UI.ILocationRow);
SP.UI.ClientCreatedTaskControl.registerClass('SP.UI.ClientCreatedTaskControl', SP.UI.TaskControl);
SP.UI.DatePickerControl.registerClass('SP.UI.DatePickerControl', Sys.UI.Control);
SP.UI.FriendlyDateControl.registerClass('SP.UI.FriendlyDateControl', Sys.UI.Control);
SP.UI.HierarchyControl.registerClass('SP.UI.HierarchyControl', Sys.UI.Control);
SP.UI.HierarchyControl.HierarchyRowControl.registerClass('SP.UI.HierarchyControl.HierarchyRowControl', Sys.UI.Control);
SP.UI.ImageControl.registerClass('SP.UI.ImageControl', Sys.UI.Control);
SP.UI.TextBoxEventArgs.registerClass('SP.UI.TextBoxEventArgs', Sys.EventArgs);
SP.UI.TextBox.registerClass('SP.UI.TextBox', Sys.UI.Control);
SP.UI.InlineEditManager.registerClass('SP.UI.InlineEditManager');
SP.UI.LostFocusEventArgs.registerClass('SP.UI.LostFocusEventArgs', Sys.EventArgs);
SP.UI.TaskInlineEditControl.registerClass('SP.UI.TaskInlineEditControl', SP.UI.RowControl, SP.UI.IInlineEditControl);
SP.UI.EmbeddedActionManager.registerClass('SP.UI.EmbeddedActionManager', null, Sys.IDisposable);
SP.UI.EmbeddedActionManager.ActionElement.registerClass('SP.UI.EmbeddedActionManager.ActionElement');
SP.UI.TaskControlFactory.registerClass('SP.UI.TaskControlFactory');
SP.UI.TaskGroupFactory.registerClass('SP.UI.TaskGroupFactory');
SP.UI.FilterControl.registerClass('SP.UI.FilterControl', Sys.UI.Control);
SP.UI.ListNotificationControl.registerClass('SP.UI.ListNotificationControl', Sys.UI.Control, Sys.IDisposable);
SP.UI.LocalLocationGroup.registerClass('SP.UI.LocalLocationGroup');
SP.UI.NewTaskControl.registerClass('SP.UI.NewTaskControl', SP.UI.RowControl, SP.UI.IInlineEditableTaskRow, SP.UI.ILocationRow);
SP.UI.PivotControlCallbackManager.registerClass('SP.UI.PivotControlCallbackManager');
SP.UI.QueryResultProcessor.registerClass('SP.UI.QueryResultProcessor');
SP.UI.FlatQueryResultProcessor.registerClass('SP.UI.FlatQueryResultProcessor', SP.UI.QueryResultProcessor);
SP.UI.GroupedQueryResultProcessor.registerClass('SP.UI.GroupedQueryResultProcessor', SP.UI.QueryResultProcessor);
SP.UI.RefreshEventArgs.registerClass('SP.UI.RefreshEventArgs', Sys.EventArgs);
SP.UI.RefreshHistoryControl.registerClass('SP.UI.RefreshHistoryControl', Sys.UI.Control);
SP.UI.RefreshManager.registerClass('SP.UI.RefreshManager', Sys.Component, SP.UI.IRefreshManager);
SP.UI.SingleTaskRefreshManager.registerClass('SP.UI.SingleTaskRefreshManager', null, SP.UI.IRefreshManager);
SP.UI.TaskListRefreshControl.registerClass('SP.UI.TaskListRefreshControl', Sys.UI.Control);
SP.UI.AnimationFactory.registerClass('SP.UI.AnimationFactory');
SP.UI.FadeInAnimationContext.registerClass('SP.UI.FadeInAnimationContext', null, SP.UI.IPostAnimation);
SP.UI.HideAnimation.registerClass('SP.UI.HideAnimation');
SP.UI.InsertAnimation.registerClass('SP.UI.InsertAnimation');
SP.UI.ColumnInfo.registerClass('SP.UI.ColumnInfo');
SP.UI.FixedWidthColumnInfo.registerClass('SP.UI.FixedWidthColumnInfo', SP.UI.ColumnInfo);
SP.UI.VariableWidthColumnInfo.registerClass('SP.UI.VariableWidthColumnInfo', SP.UI.ColumnInfo);
SP.UI.ColumnManager.registerClass('SP.UI.ColumnManager');
SP.UI.DragInfo.registerClass('SP.UI.DragInfo', null, SP.UI.IDragInfo);
SP.UI.HeightCache.registerClass('SP.UI.HeightCache');
SP.UI.ResizeManager.registerClass('SP.UI.ResizeManager', null, Sys.IDisposable);
SP.UI.TableRenderUtilities.registerClass('SP.UI.TableRenderUtilities');
SP.UI.TableResizeManager.registerClass('SP.UI.TableResizeManager', SP.UI.ResizeManager);
SP.UI.TaskListTable.registerClass('SP.UI.TaskListTable', SP.UI.DragAndDropTable.$$(SP.WorkManagement.OM.Task));
SP.UI.TaskGroupingFooterControl.registerClass('SP.UI.TaskGroupingFooterControl', SP.UI.RowControl, SP.UI.ILocationRow);
SP.UI.TaskGroupingHeaderControl.registerClass('SP.UI.TaskGroupingHeaderControl', SP.UI.RowControl, SP.UI.ILocationRow);
SP.UI.SortingEventArgs.registerClass('SP.UI.SortingEventArgs', Sys.EventArgs);
SP.UI.TaskListControl.registerClass('SP.UI.TaskListControl', null, SP.WorkManagement.OM.ITaskListImpl, SP.WorkManagement.OM.ITaskList, SP.WorkManagement.OM.IJsApiImpl, SP.UI.ITaskListServiceProvider, Sys.IDisposable);
SP.UI.TaskListHeaderControl.registerClass('SP.UI.TaskListHeaderControl', SP.UI.WidgetRowControl);
SP.UI.CalloutRenderer.registerClass('SP.UI.CalloutRenderer');
SP.UI.Widget.registerClass('SP.UI.Widget', null, SP.UI.IKeyboardEventHandler, SP.UI.IMouseEventHandler);
SP.UI.ImageWidget.registerClass('SP.UI.ImageWidget', SP.UI.Widget);
SP.UI.CalloutWidget.registerClass('SP.UI.CalloutWidget', SP.UI.ImageWidget, SP.UI.INotifyTaskUpdate);
SP.UI.DefaultCalloutRenderer.registerClass('SP.UI.DefaultCalloutRenderer', SP.UI.CalloutRenderer);
SP.UI.ImageClusterWidget.registerClass('SP.UI.ImageClusterWidget', SP.UI.Widget);
SP.UI.InlineEditImageClusterWidget.registerClass('SP.UI.InlineEditImageClusterWidget', SP.UI.ImageClusterWidget);
SP.UI.CheckBoxWidget.registerClass('SP.UI.CheckBoxWidget', SP.UI.InlineEditImageClusterWidget, SP.UI.INotifyTaskUpdate);
SP.UI.HeaderWidget.registerClass('SP.UI.HeaderWidget', SP.UI.Widget);
SP.UI.HeaderImageClusterWidget.registerClass('SP.UI.HeaderImageClusterWidget', SP.UI.ImageClusterWidget);
SP.UI.LabelWrapperWidget.registerClass('SP.UI.LabelWrapperWidget', SP.UI.Widget);
SP.UI.PersonalTaskWidget.registerClass('SP.UI.PersonalTaskWidget', SP.UI.Widget);
SP.UI.PinnedWidget.registerClass('SP.UI.PinnedWidget', SP.UI.InlineEditImageClusterWidget, SP.UI.INotifyTaskUpdate);
SP.UI.TextWidget.registerClass('SP.UI.TextWidget', SP.UI.Widget);
SP.UI.SelectionWidget.registerClass('SP.UI.SelectionWidget', SP.UI.Widget);
SP.UI.SelectionImageWidget.registerClass('SP.UI.SelectionImageWidget', SP.UI.SelectionWidget);
SP.UI.ServerOperationWidget.registerClass('SP.UI.ServerOperationWidget', SP.UI.ImageWidget);
SP.UI.TaskDueDateWidget.registerClass('SP.UI.TaskDueDateWidget', SP.UI.LabelWrapperWidget, SP.UI.INotifyTaskUpdate);
SP.UI.TaskNameWidget.registerClass('SP.UI.TaskNameWidget', SP.UI.LabelWrapperWidget, SP.UI.INotifyTaskUpdate);
SP.UI.ViewSelector.registerClass('SP.UI.ViewSelector');
SP.UI.ViewExtension.registerClass('SP.UI.ViewExtension');
SP.UI.ViewSelector.BuiltInView.registerClass('SP.UI.ViewSelector.BuiltInView', SP.UI.ViewExtension);
SP.UI.BatchedTaskOperation.registerClass('SP.UI.BatchedTaskOperation');
SP.UI.ScriptSessionBuilderContext.registerClass('SP.UI.ScriptSessionBuilderContext', null, SP.UI.ISessionBuilderContext);
SP.UI.ScriptTaskQueryBuilderContext.registerClass('SP.UI.ScriptTaskQueryBuilderContext', null, SP.UI.ITaskQueryBuilderContext);
SP.UI.TaskDataProvider.registerClass('SP.UI.TaskDataProvider');
SP.UI.DragAndDropManager.registerClass('SP.UI.DragAndDropManager');
SP.UI.ScrollManager.registerClass('SP.UI.ScrollManager');
SP.UI.EditManager.registerClass('SP.UI.EditManager');
SP.UI.DashboardExtensibilityManager.registerClass('SP.UI.DashboardExtensibilityManager');
SP.UI.SharePointCheckBoxWidget.registerClass('SP.UI.SharePointCheckBoxWidget', SP.UI.CheckBoxWidget);
SP.UI.SharePointExtension.registerClass('SP.UI.SharePointExtension', null, SP.UI.IDashboardExtension);
SP.UI.StatusColors.registerClass('SP.UI.StatusColors');
SP.UI.LocationManager.registerClass('SP.UI.LocationManager');
SP.UI.TimeoutWrapper.registerClass('SP.UI.TimeoutWrapper');
SP.UI.SharedComponentManager.registerClass('SP.UI.SharedComponentManager');
SP.UI.BWSAManager.registerClass('SP.UI.BWSAManager');
SP.UI.AnimationUtilities.registerClass('SP.UI.AnimationUtilities');
SP.UI.CsomUtilities.registerClass('SP.UI.CsomUtilities');
SP.UI.DebugConsole.registerClass('SP.UI.DebugConsole');
SP.UI.DictionaryUtilities.registerClass('SP.UI.DictionaryUtilities');
SP.UI.DomUtilities.registerClass('SP.UI.DomUtilities');
SP.UI.RibbonUtilities.registerClass('SP.UI.RibbonUtilities');
SP.UI.AriaUtilities.registerClass('SP.UI.AriaUtilities');
SP.UI.DateTimeUtilities.registerClass('SP.UI.DateTimeUtilities');
SP.UI.Utilities.registerClass('SP.UI.Utilities');
SP.UI.SerializationUtilities.registerClass('SP.UI.SerializationUtilities');
SP.UI.LocationUtilities.registerClass('SP.UI.LocationUtilities');
SP.UI.EventUtilities.registerClass('SP.UI.EventUtilities');
SP.WorkManagement.OM.JsApiUtils.registerClass('SP.WorkManagement.OM.JsApiUtils');
SP.WorkManagement.SharePointProvider.OM.SharePointProviderTaskData.registerClass('SP.WorkManagement.SharePointProvider.OM.SharePointProviderTaskData');
SP.UI.PageComponents.AwiopBasePageComponent.registerClass('SP.UI.PageComponents.AwiopBasePageComponent', CUI.Page.PageComponent);
SP.UI.PageComponents.MyTasksDashboardRibbonCommands.registerClass('SP.UI.PageComponents.MyTasksDashboardRibbonCommands');
SP.UI.PageComponents.MyTasksDashboardPageComponent.registerClass('SP.UI.PageComponents.MyTasksDashboardPageComponent', SP.UI.PageComponents.AwiopBasePageComponent);
SP.UI.PageComponents.TaskListCommands.registerClass('SP.UI.PageComponents.TaskListCommands');
SP.UI.PageComponents.TaskListPageComponent.registerClass('SP.UI.PageComponents.TaskListPageComponent', CUI.Page.PageComponent);
function sp_ui_tasklist_initialize() {ULSPOJ:;
SP.UI.ConstantsImage.spCommonImage = 'spcommon.png';
SP.UI.ConstantsImage.exclamationSolidSpanStyle = 'height:13px;width:13px;position:relative;display:inline-block;overflow:hidden;';
SP.UI.ConstantsImage.exclamationSolidImageStyle = 'left:-252px !important;top:-227px !important;position:absolute;';
SP.UI.ConstantsImage.exclamationHollowSpanStyle = 'height:13px;width:13px;position:relative;display:inline-block;overflow:hidden;';
SP.UI.ConstantsImage.exclamationHollowImageStyle = 'left:-250px !important;top:-131px !important;position:absolute;';
SP.UI.ConstantsImage.exclamationColumnHeaderSpanStyle = 'height:13px;width:13px;position:relative;display:inline-block;overflow:hidden;';
SP.UI.ConstantsImage.exclamationColumnHeaderImageStyle = 'left:-252px !important;top:-213px !important;position:absolute;';
SP.UI.ConstantsImage.checkMarkSpanStyle = 'height:17px;width:17px;position:relative;display:inline-block;overflow:hidden;';
SP.UI.ConstantsImage.checkMarkCompleted = 'left:-253px !important;top:-65px !important;position:absolute;';
SP.UI.ConstantsImage.checkMarkNotCompleted = 'left:-88px !important;top:-177px !important;position:absolute;';
SP.UI.ConstantsImage.selectionCheckmarkSpanStyle = 'height:11px;width:11px;position:relative;display:inline-block;overflow:hidden;';
SP.UI.ConstantsImage.selectionCheckmarkImageStyle = 'left:-31px !important;top:-255px !important;position:absolute;';
SP.UI.ConstantsImage.groupingStyle = 'height:13px;width:13px;position:relative;display:inline-block;overflow:hidden;';
SP.UI.ConstantsImage.groupingExpand = 'left:-252px !important;top:-185px !important;position:absolute;';
SP.UI.ConstantsImage.groupingCollapse = 'left:-250px !important;top:-145px !important;position:absolute;';
SP.UI.ConstantsImage.groupingExpandRtl = 'left:-250px !important;top:-117px !important;position:absolute;';
SP.UI.ConstantsImage.groupingCollapseRtl = 'left:-250px !important;top:-159px !important;position:absolute;';
SP.UI.ConstantsImage.hierarchyLevelConnectorSpanStyle = 'height:9px;width:9px;position:relative;display:inline-block;overflow:hidden;';
SP.UI.ConstantsImage.hierarchyLevelConnectorImageStyle = 'left:-75px !important;top:-255px !important;position:absolute;';
SP.UI.ConstantsImage.hierarchyLevelConnectorRtlImageStyle = 'left:-65px !important;top:-255px !important;position:absolute;';
SP.UI.ConstantsImage.blankImage = '/_layouts/15/images/blank.gif?rev=23';
SP.UI.ConstantsImage.calendarImage = '/_layouts/15/images/calendar.gif?rev=23';
SP.UI.ConstantsImage.loadingCircleImage = '/_layouts/15/images/progress-circle-24.gif?rev=23';
SP.UI.ConstantsImage.loadingCircleImage16 = '/_layouts/15/images/loadingcirclests16.gif?rev=23';
SP.UI.ConstantsImage.serverErrorImage = '/_layouts/15/images/cell-error.png?rev=23';
SP.UI.ConstantsImage.filterImage = '/_layouts/15/images/inplSearch.png?rev=23';
SP.UI.ConstantsImage.filterImageHover = '/_layouts/15/images/inplSearchHover.png?rev=23';
SP.UI.ConstantsImage.filterCancelImage = '/_layouts/15/images/inplCancel.png?rev=23';
SP.UI.ConstantsImage.filterCancelImageHover = '/_layouts/15/images/inplCancelHover.png?rev=23';
SP.UI.ConstantsImage.filterClearImage = '/_layouts/15/images/filteroff.gif?rev=23';
SP.UI.ConstantsImage.rightArrowImage = '/_layouts/15/images/BLK_RGT.gif?rev=23';
SP.UI.ConstantsImage.leftArrowImage = '/_layouts/15/images/BLK_LEFT.gif?rev=23';
SP.UI.ConstantsImage.minimizeHeaderImage = '/_layouts/15/images/arwup.gif?rev=23';
SP.UI.ConstantsImage.maximizeHeaderImage = '/_layouts/15/images/arwdown.gif?rev=23';
SP.UI.ConstantsImage.menuFilterImage = '/_layouts/15/images/filter.gif?rev=23';
SP.UI.ConstantsImage.refreshErrorImage = '/_layouts/15/images/deployreportwarning.gif?rev=23';
SP.UI.ConstantsImage.sharepointCommonImage = '/_layouts/15/images/spcommon.png?rev=23';
SP.UI.ConstantsImage.importantTasksAttractMode = '/_layouts/15/images/importanttasksattractmode.png?rev=23';
SP.UI.ConstantsImage.activeTasksAttractMode = '/_layouts/15/images/tasksattractmode.png?rev=23';
SP.UI.PathConstants.wmaApiShimScriptPath = '/_layouts/15/WmaApiShim.generated.js';
SP.UI.TaskQueryBuilder.$6q = -1;
SP.UI.ApiManager.$S = null;
SP.UI.CompletionComponent.delayTime = 3000;
SP.UI.CompletionComponent.intervalTime = 250;
SP.UI.TaskListConstants.calloutJavaScript = 'callout.js';
SP.UI.TaskListConstants.pivotControlJavaScript = 'pivotcontrol.js';
SP.UI.TaskListConstants.$3c = null;
SP.UI.TaskListConstants.fullOpacity = 1;
SP.UI.TaskListConstants.partialOpacity = 0.4;
SP.UI.TaskListConstants.expandRowMargin = '8px';
SP.UI.TaskListConstants.indentationMargin = '20px';
SP.UI.TaskListConstants.removeFromTimelineAttribute = 'AWIOP_RemoveFromTimeline';
SP.UI.TaskListConstants.taskListZIndex = 0;
SP.UI.TaskListConstants.attractModeZIndex = 2;
SP.UI.TaskListConstants.noValue = -1;
SP.UI.TaskListConstants.invalidDragLocation = -2;
SP.UI.TaskListConstants.sameDragGroup = -3;
SP.UI.TaskListConstants.noPreviousTask = -1;
SP.UI.TaskListConstants.defaultDate = new Date(1901, 0, 1);
SP.UI.TaskListConstants.logCategoryExtensibility = 'EXTENSIBILITY';
SP.UI.TaskListConstants.logCategoryDelete = 'DELETE';
SP.UI.TaskListConstants.logCategoryUpdate = 'UPDATE';
SP.UI.TaskListConstants.millisecondsInADay = 86400000;
SP.UI.TaskListConstants.cssHelperText = 'ms-helperText';
SP.UI.TaskListConstants.cssInlineSearchWaterMark = 'ms-InlineSearch-SearchBox-EmptyUnfocused';
SP.UI.TaskListConstants.cssItmHover = 'ms-itmhover ms-itmHoverEnabled';
SP.UI.TaskListConstants.cssTaskRowSelected = 's4-itm-selected';
SP.UI.TaskListConstants.cssTaskListTextBox = 'ms-vb ms-awiop-TextBox ms-fullWidth';
SP.UI.TaskListConstants.cssNewTaskEntryControl = 'ms-awiop-NewTaskEntryControl';
SP.UI.TaskListConstants.cssEntryCellActive = 'ms-awiop-EntryCellActive';
SP.UI.TaskListConstants.cssEntryCellInActive = 'ms-awiop-EntryCellInActive';
SP.UI.TaskListConstants.taskListMaxWidthValue = 800;
SP.UI.TaskListConstants.taskListMaxWidth = SP.UI.TaskListConstants.taskListMaxWidthValue.toString() + 'px';
SP.UI.TaskListConstants.taskListAttractModeHeightValue = 234;
SP.UI.TaskListConstants.taskListAttractModeHeight = SP.UI.TaskListConstants.taskListAttractModeHeightValue.toString() + 'px';
SP.UI.TaskListConstants.selectionFieldWidth = 20;
SP.UI.TaskListConstants.selectionBorderWidth = 10;
SP.UI.TaskListConstants.smallImageFieldWidth = 30;
SP.UI.TaskListConstants.largeImageFieldWidth = 45;
SP.UI.TaskListConstants.minTextFieldWidth = 250;
SP.UI.TaskListConstants.dateFieldWidth = 150;
SP.UI.TaskListConstants.dateFieldTextWidth = 120;
SP.UI.TaskListConstants.datePickerPadding = 4;
SP.UI.TaskListConstants.noMaxWidth = -1;
SP.UI.AsyncJobManager.jobsCompletedEvent = 'JobsCompletedEvent';
SP.UI.DeferredRenderRegion.$50 = 0;
SP.UI.DeferredRenderRegion.$25 = false;
SP.UI.DeferredRenderRegion.estimatedRowHeight = 31;
SP.UI.IntervalManager.$2L = -1;
SP.UI.HierarchyControl.indentationPixels = 10;
SP.UI.TaskInlineEditControl.$55 = 0;
SP.UI.TaskInlineEditControl.$6G = 'TaskInlineEditControlDatePicker';
SP.UI.EmbeddedActionManager.$31 = 0;
SP.UI.NewTaskControl.$3s = -1;
SP.UI.PivotControlCallbackManager.$3p = 0;
SP.UI.PivotControlCallbackManager.$47 = {};
SP.UI.RefreshHistoryControl.$4x = 0;
SP.UI.DragInfo.$6J = new Sys.UI.Point(15, 15);
SP.UI.RowControl.$58 = 0;
SP.UI.CalloutRenderer.$37 = 0;
SP.UI.ServerOperationWidget.$57 = SP.UI.ConstantsImage.loadingCircleImage16;
SP.UI.ServerOperationWidget.$6M = SP.UI.ConstantsImage.serverErrorImage;
SP.UI.ViewSelector.$3l = 0;
SP.UI.DragAndDropManager.$S = null;
SP.UI.EditManager.$S = null;
SP.UI.DashboardExtensibilityManager.$S = null;
SP.UI.StatusColors.blue = 'blue';
SP.UI.StatusColors.green = 'green';
SP.UI.StatusColors.yellow = 'yellow';
SP.UI.StatusColors.red = 'red';
SP.UI.SharedComponentManager.$5 = null;
SP.UI.SharedComponentManager.$4I = false;
SP.UI.DebugConsole.$4i = false;
SP.UI.DebugConsole.$$cctor();
SP.UI.DomUtilities.$2Z = { left: 'right', borderLeft: 'borderRight', borderLeftWidth: 'borderRightWidth', marginLeft: 'marginRight' };
SP.UI.DomUtilities.$$cctor();
SP.UI.PageComponents.MyTasksDashboardRibbonCommands.cxtTasks = 'cxtTasks';
SP.UI.PageComponents.MyTasksDashboardRibbonCommands.tasksTab = 'TasksTab';
SP.UI.PageComponents.MyTasksDashboardRibbonCommands.newGroup = 'NewGroup';
SP.UI.PageComponents.MyTasksDashboardRibbonCommands.viewsGroup = 'ViewsGroup';
SP.UI.PageComponents.MyTasksDashboardRibbonCommands.manageGroup = 'Manage';
SP.UI.PageComponents.MyTasksDashboardRibbonCommands.newTaskBtn = 'NewTask';
SP.UI.PageComponents.MyTasksDashboardRibbonCommands.settings = 'Settings';
SP.UI.PageComponents.MyTasksDashboardRibbonCommands.manageGroupingBtn = 'Grouping';
SP.UI.PageComponents.MyTasksDashboardRibbonCommands.queryManageGroupingBtn = 'QueryGrouping';
SP.UI.PageComponents.MyTasksDashboardRibbonCommands.exchangeSyncSettings = 'ExchangeSyncSettings';
SP.UI.PageComponents.TaskListCommands.editTaskBtn = 'EditTask';
SP.UI.PageComponents.TaskListCommands.renameBtn = 'Rename';
SP.UI.PageComponents.TaskListCommands.deleteBtn = 'Delete';
SP.UI.PageComponents.TaskListCommands.markCompleteBtn = 'MarkComplete';
SP.UI.PageComponents.TaskListCommands.queryMarkCompleteBtn = 'QueryMarkComplete';
SP.UI.PageComponents.TaskListCommands.trackTaskBtn = 'TrackTask';
SP.UI.PageComponents.TaskListCommands.queryTrackTaskBtn = 'QueryTrackTask';
SP.UI.PageComponents.TaskListCommands.addToTimeline = 'AddToTimeline';
SP.UI.PageComponents.TaskListCommands.queryAddToTimeline = 'QueryAddToTimeline';
SP.UI.PageComponents.TaskListCommands.itemGroup = 'ItemGroup';
SP.UI.PageComponents.TaskListCommands.tagsGroup = 'TagsGroup';
};
sp_ui_tasklist_initialize();

RegisterModuleInit("wma.ui.tasklist.js", sp_ui_tasklist_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("wma.ui.tasklist.js");
