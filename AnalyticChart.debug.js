function ULSO72(){var o=new Object;o.ULSTeamName="PerformancePoint Monitoring Service";o.ULSFileName="AnalyticChart.debug.js";return o;}
// AnalyticChart.js
//


Type.registerNamespace('PPSMA');

PPSMA.ItemType = function() {}
PPSMA.ItemType.prototype = {
    Series: 0, 
    Points: 1, 
    Category: 2, 
    Background: 3, 
    ViewInfoBar: 4, 
    LegendLocation: 5
}
PPSMA.ItemType.registerEnum('PPSMA.ItemType', false);


PPSMA.LegendLocation = function() {}
PPSMA.LegendLocation.prototype = {
    hide: 0, 
    right: 1, 
    top: 2
}
PPSMA.LegendLocation.registerEnum('PPSMA.LegendLocation', false);


PPSMA.OlapChart = function PPSMA_OlapChart(chartCtxName, olapViewContext, properties) {ULSO72:;
    this.$$d_legendCompleted = Function.createDelegate(this, this.legendCompleted);
    this.$$d_switchReportTypeCompleted = Function.createDelegate(this, this.switchReportTypeCompleted);
    this.$$d_processFilterDialogResult = Function.createDelegate(this, this.processFilterDialogResult);
    this.$$d_doShowContextMenu = Function.createDelegate(this, this.doShowContextMenu);
    this.$$d__handleOuterTagPropertyChange$p$0 = Function.createDelegate(this, this._handleOuterTagPropertyChange$p$0);
    this._chartCtxName$0 = chartCtxName;
    this._olapViewContext$0 = olapViewContext;
    this._propertiesArray$0 = properties;
    this._subMenus$0 = [];
    this._currentMenu$0 = null;
    this._activeSeriesLevel$0 = 0;
    this._activePointsLevel$0 = 0;
    this._ptActiveType$0 = 0;
    this._changeMeasure = new PPSMA.ChangeMeasure(this._olapViewContext$0);
    this._valueFilter = new PPSMA.FilterDialog(olapViewContext, chartCtxName);
    this._touchEndContextMenu$p$0 = false;
    if (this._olapViewContext$0) {
        var outerTagDiv = $get(this._olapViewContext$0.get_outerTargetId());
        this._setFilterStatus$p$0(outerTagDiv);
        $clearHandlers(outerTagDiv);
        this._olapViewContext$0.setOuterTagAttribute('arFilterState', '');
        outerTagDiv.attachEvent('onpropertychange', this.$$d__handleOuterTagPropertyChange$p$0);
    }
    PPSMA.Trace.addFilters([ PPSMA.OlapChart._ChartContextMenu ], false);
    var $$t_5 = this;
    $addHandler(document.body, 'touchstart', function(e) {
    });
}
PPSMA.OlapChart._getContainerDiv$p = function PPSMA_OlapChart$_getContainerDiv$p(elem) {ULSO72:;
    while (elem && !PPSMA.DomElementEx.tagsMatch(elem.tagName, 'div') && !PPSMA.DomElementEx.tagsMatch(elem.tagName, 'body')) {
        elem = elem.parentNode;
    }
    return elem;
}
PPSMA.OlapChart.prototype = {
    _chartCtxName$0: null,
    _olapViewContext$0: null,
    _propertiesArray$0: null,
    _subMenus$0: null,
    _currentMenu$0: null,
    _seriesIndex$0: 0,
    _pointsIndex$0: 0,
    _activeSeriesLevel$0: 0,
    _activePointsLevel$0: 0,
    _arrSeries$0: null,
    _arrPoints$0: null,
    _actionType$0: 0,
    _ptActiveType$0: 0,
    _switchEvent$0: null,
    _focusedArea$0: null,
    _focusedArray$0: null,
    _currentElement$0: null,
    _tempValue$0: null,
    _changeMeasure: null,
    _valueFilter: null,
    _screenTouchPositionX$p$0: 0,
    _screenTouchPositionY$p$0: 0,
    _lastTouchStart$p$0: null,
    _touchEndContextMenu$p$0: false,
    _lastTimeout$p$0: 0,
    _lastTouchEvent$p$0: null,
    
    _setFilterStatus$p$0: function PPSMA_OlapChart$_setFilterStatus$p$0(outerTagDiv) {ULSO72:;
        if (outerTagDiv && this._olapViewContext$0 && this._olapViewContext$0.get_results()) {
            var filterState = 'row:{0};col:{1};emptyrow:{2};emptycol:{3};sortrow:{4};sortcol:{5}';
            var filterRow = 'no';
            var filterCol = 'no';
            var filterEmptyRow = 'no';
            var filterEmptyCol = 'no';
            var sortrow;
            var sortcol;
            if (this._olapViewContext$0.get_results().get_valueFilterRow() === 1) {
                filterRow = 'value';
            }
            if (this._olapViewContext$0.get_results().get_topFilterRow() === 1) {
                filterRow = 'top';
            }
            if (this._olapViewContext$0.get_results().get_valueFilterCol() === 1) {
                filterCol = 'value';
            }
            if (this._olapViewContext$0.get_results().get_topFilterCol() === 1) {
                filterCol = 'top';
            }
            if ((this._olapViewContext$0.get_results().get_filterEmptyAxis() & 2) > 0) {
                filterEmptyRow = 'yes';
            }
            if ((this._olapViewContext$0.get_results().get_filterEmptyAxis() & 1) > 0) {
                filterEmptyCol = 'yes';
            }
            sortrow = this._olapViewContext$0.get_results().get_sortTypeRow();
            sortcol = this._olapViewContext$0.get_results().get_sortTypeCol();
            filterState = String.format(filterState, filterRow, filterCol, filterEmptyRow, filterEmptyCol, sortrow, sortcol);
            this._olapViewContext$0.setOuterTagAttribute('arFilterState', filterState);
        }
    },
    
    _handleOuterTagPropertyChange$p$0: function PPSMA_OlapChart$_handleOuterTagPropertyChange$p$0() {ULSO72:;
        var code = 'window.event.propertyName';
        var propertyName = eval(code);
        switch (propertyName) {
            case 'executeValueFilterRow':
                this.filterByValue('2');
                break;
            case 'executeTopFilterRow':
                this.filterByTopBottom('2');
                break;
            case 'clearFilterRow':
                this._olapViewContext$0.clearFilter('2', false);
                break;
            case 'executeValueFilterCol':
                this.filterByValue('1');
                break;
            case 'executeTopFilterCol':
                this.filterByTopBottom('1');
                break;
            case 'clearFilterCol':
                this._olapViewContext$0.clearFilter('1', true);
                break;
            case 'filterEmptyRows':
                this.filterEmptyRow();
                break;
            case 'filterEmptyCols':
                this.filterEmptyCol();
                break;
            case 'sortAscRow':
                this.sort('2', 'asc');
                break;
            case 'sortDescRow':
                this.sort('2', 'desc');
                break;
            case 'noSortRow':
                this.sort('2', 'nosort');
                break;
            case 'sortAscCol':
                this.sort('1', 'asc');
                break;
            case 'sortDescCol':
                this.sort('1', 'desc');
                break;
            case 'noSortCol':
                this.sort('1', 'nosort');
                break;
            case 'MeasureGroupName':
                this.handleMeasureGroupNameChange();
                break;
        }
    },
    
    onF: function PPSMA_OlapChart$onF(o, a) {ULSO72:;
        this._focusedArea$0 = o;
        this._focusedArray$0 = a;
    },
    
    onKD: function PPSMA_OlapChart$onKD(e) {ULSO72:;
        if (!this._focusedArray$0) {
            return;
        }
        switch ((e).keyCode) {
            case 13:
                this._callEventHandlerForKeyDown$p$0(null);
                break;
            case 93:
                PPSMA.Trace.eventEx([ PPSMA.OlapChart._ChartContextMenu ], e, 'OnKD: context-menu');
                PPSMA.Trace.domElementEx([ PPSMA.OlapChart._ChartContextMenu ], this._focusedArea$0, 'OnKD: Focused Area', 2 | 16 | 32);
                var offsetX;
                var offsetY;
                if (getBrowserIs().ie55up) {
                    var p = Sys.UI.DomElement.getLocation(PPSMA.OlapChart._getContainerDiv$p(this._focusedArea$0));
                    offsetX = p.x;
                    offsetY = p.y;
                }
                else {
                    var coordinates = this._focusedArea$0.coords.split(',');
                    offsetX = parseInt(coordinates[0]);
                    offsetY = parseInt(coordinates[1]);
                }
                var ce = new PPSMA.ChartDomEvent(2, offsetX + 2, offsetY + 2, this._focusedArea$0, this._focusedArea$0);
                this._callEventHandlerForKeyDown$p$0(ce);
                break;
            default:
                return;
        }
    },
    
    sOnTS: function PPSMA_OlapChart$sOnTS(e, a) {ULSO72:;
        if (e.touches != undefined && e.touches.length == 1){;
        this._initialize$p$0(a, 0);
        if (this._actionType$0 === PPSMA.ItemType.Points) {
            this._activeSeriesLevel$0 = 0;
        }
        this._actionType$0 = 0;
        this._currentElement$0 = e.srcElement;
        this._lastTouchEvent$p$0 = e;
        this._lastTimeout$p$0 = window.setTimeout(this.$$d_doShowContextMenu, 1500);
        }else{;
        window.clearTimeout(this._lastTimeout$p$0);
        };
    },
    
    sOnC: function PPSMA_OlapChart$sOnC(e, a) {ULSO72:;
        this._initialize$p$0(a, 0);
        if (this._actionType$0 === PPSMA.ItemType.Points) {
            this._activeSeriesLevel$0 = 0;
        }
        this._actionType$0 = 0;
        if (this._canDrillDownOnClick$p$0(e) && !PPSMA.Menu.IsOpen(this._currentMenu$0)) {
            this.drillDown();
        }
        else if (PPSMA.EventsEx.isRightClick(e)) {
            PPSMA.Trace.eventEx([ PPSMA.OlapChart._ChartContextMenu ], e, 'SOnC: context-menu');
            this._buildCtxMenu$p$0(e);
        }
        else {
            return;
        }
        return;
    },
    
    pOnTS: function PPSMA_OlapChart$pOnTS(e, a) {ULSO72:;
        if (e.touches != undefined && e.touches.length == 1){;
        this._initialize$p$0(a, PPSMA.ItemType.Points);
        this._checkPtActiveTypeState$p$0();
        if (!this._actionType$0) {
            this._activeSeriesLevel$0 = 0;
        }
        this._actionType$0 = PPSMA.ItemType.Points;
        this._lastTouchEvent$p$0 = e;
        this._lastTimeout$p$0 = window.setTimeout(this.$$d_doShowContextMenu, 1500);
        }else{;
        window.clearTimeout(this._lastTimeout$p$0);
        };
    },
    
    pOnC: function PPSMA_OlapChart$pOnC(e, a) {ULSO72:;
        this._initialize$p$0(a, PPSMA.ItemType.Points);
        this._checkPtActiveTypeState$p$0();
        if (!this._actionType$0) {
            this._activeSeriesLevel$0 = 0;
        }
        this._actionType$0 = PPSMA.ItemType.Points;
        if (this._canDrillDownOnClick$p$0(e) && !PPSMA.Menu.IsOpen(this._currentMenu$0)) {
            this.drillDown();
        }
        else if (PPSMA.EventsEx.isRightClick(e)) {
            PPSMA.Trace.eventEx([ PPSMA.OlapChart._ChartContextMenu ], e, 'POnC: context-menu');
            this._buildCtxMenu$p$0(e);
        }
        else {
            return;
        }
        return;
    },
    
    xOnTS: function PPSMA_OlapChart$xOnTS(e, a) {ULSO72:;
        if (e.touches != undefined && e.touches.length == 1){;
        this._initialize$p$0(a, PPSMA.ItemType.Category);
        if (this._actionType$0 === PPSMA.ItemType.Points) {
            this._activeSeriesLevel$0 = 0;
        }
        this._actionType$0 = PPSMA.ItemType.Category;
        this._ptActiveType$0 = PPSMA.ItemType.Category;
        this._currentElement$0 = e.srcElement;
        this._lastTouchEvent$p$0 = e;
        this._lastTimeout$p$0 = window.setTimeout(this.$$d_doShowContextMenu, 1500);
        }else{;
        window.clearTimeout(this._lastTimeout$p$0);
        };
    },
    
    xOnC: function PPSMA_OlapChart$xOnC(e, a) {ULSO72:;
        this._initialize$p$0(a, PPSMA.ItemType.Category);
        if (this._actionType$0 === PPSMA.ItemType.Points) {
            this._activeSeriesLevel$0 = 0;
        }
        this._actionType$0 = PPSMA.ItemType.Category;
        this._ptActiveType$0 = PPSMA.ItemType.Category;
        if (this._canDrillDownOnClick$p$0(e) && !PPSMA.Menu.IsOpen(this._currentMenu$0)) {
            this.drillDown();
        }
        else if (PPSMA.EventsEx.isRightClick(e)) {
            PPSMA.Trace.eventEx([ PPSMA.OlapChart._ChartContextMenu ], e, 'XOnC: context-menu');
            this._buildCtxMenu$p$0(e);
        }
        else {
            return;
        }
    },
    
    bgOnTS: function PPSMA_OlapChart$bgOnTS(e, a) {ULSO72:;
        if (e.touches != undefined && e.touches.length == 1){;
        this._actionType$0 = PPSMA.ItemType.Background;
        this._currentElement$0 = e.srcElement;
        Array.clear(this._subMenus$0);
        this._focusedArray$0 = null;
        this._lastTouchEvent$p$0 = e;
        this._lastTimeout$p$0 = window.setTimeout(this.$$d_doShowContextMenu, 1500);
        }else{;
        window.clearTimeout(this._lastTimeout$p$0);
        };
    },
    
    bgOnC: function PPSMA_OlapChart$bgOnC(e) {ULSO72:;
        if (PPSMA.EventsEx.isRightClick(e)) {
            PPSMA.Trace.eventEx([ PPSMA.OlapChart._ChartContextMenu ], e, 'BGOnC: context-menu');
            if (!this._isProcessChartContextMenu$p$0(e)) {
                return;
            }
            this._actionType$0 = PPSMA.ItemType.Background;
            this._currentElement$0 = e.srcElement;
            Array.clear(this._subMenus$0);
            this._focusedArray$0 = null;
            this._makeCtxMenuFromEvent$p$0(e);
        }
    },
    
    _isProcessChartContextMenu$p$0: function PPSMA_OlapChart$_isProcessChartContextMenu$p$0(e) {ULSO72:;
        var eventType = e.type;
        if (eventType === PPSMA.ChartDomEventTypes.ppsContextMenu || eventType === 'contextmenu') {
            return true;
        }
        return false;
    },
    
    fOnC: function PPSMA_OlapChart$fOnC(e, i, h, t, l, v1, v2, a) {ULSO72:;
        this.loadFilterDialog(i, h, t, l, this._valueFilter.getFormattedStringFromInvariantNumber(Number.parseInvariant(v1), false), this._valueFilter.getFormattedStringFromInvariantNumber(Number.parseInvariant(v2), false), a);
    },
    
    doShowContextMenu: function PPSMA_OlapChart$doShowContextMenu() {ULSO72:;
        this._touchEndContextMenu$p$0 = true;
        this._buildCtxMenu$p$0(this._lastTouchEvent$p$0);
    },
    
    handleTouchMove: function PPSMA_OlapChart$handleTouchMove(e) {ULSO72:;
        if(e.targetTouches != undefined && e.targetTouches[0] != undefined){if (Math.abs(e.targetTouches[0].screenX - this._screenTouchPositionX) >= PPSMA.OlapChart._contextCancelDeltaX || Math.abs(e.targetTouches[0].screenY - this._screenTouchPositionY) >= PPSMA.OlapChart._contextCancelDeltaX){window.clearTimeout(this.lastTimeout);}};
    },
    
    handleTouchEnd: function PPSMA_OlapChart$handleTouchEnd(e) {ULSO72:;
        window.clearTimeout(this._lastTimeout$p$0);
        this._touchEndContextMenu$p$0 = false;
    },
    
    handleTouchCancel: function PPSMA_OlapChart$handleTouchCancel(e) {ULSO72:;
        window.clearTimeout(this._lastTimeout$p$0);
        this._touchEndContextMenu$p$0 = false;
    },
    
    _buildCtxMenu$p$0: function PPSMA_OlapChart$_buildCtxMenu$p$0(e) {ULSO72:;
        if (!this._isProcessChartContextMenu$p$0(e) && !this._touchEndContextMenu$p$0) {
            return;
        }
        this._currentElement$0 = e.srcElement;
        Array.clear(this._subMenus$0);
        this._focusedArray$0 = null;
        if (e.type === PPSMA.ChartDomEventTypes.ppsContextMenu) {
            this._switchEvent$0 = e;
            var ce = e;
            var currElem = PPSMA.EventsEx.getCurrentElement(e);
            var currEvent = PPSMA.EventsEx.getEvent(e);
            var location = Sys.UI.DomElement.getLocation(currElem);
            var offsetElem = currElem;
            if (PPSMA.DomElementEx.tagsMatch(e.srcElement.tagName, 'area')) {
                offsetElem = e.srcElement.parentNode.parentNode;
            }
            if (PPSMA.DomElementEx.tagsMatch(e.srcElement.tagName, 'map')) {
                offsetElem = e.srcElement.parentNode;
            }
            if (!e.srcElement.offsetLeft && !e.srcElement.offsetTop) {
                PPSMA.ContextMenu.createForReportsNScorecards(offsetElem, this, ce.offsetX, ce.offsetY, false);
            }
            else {
                var x;
                var y;
                if (isNullOrUndefined(currEvent.offsetX)) {
                    x = PPSMA.SizeEx.getXOffset(currEvent, currElem);
                    y = PPSMA.SizeEx.getYOffset(currEvent, currElem);
                }
                else {
                    x = currEvent.offsetX;
                    y = currEvent.offsetY;
                }
                if (x !== location.x && y !== location.y) {
                    PPSMA.ContextMenu.createForReportsNScorecards(currElem, this, x, y, false);
                }
                else {
                    PPSMA.ContextMenu.createForReportsNScorecards(offsetElem, this, x, y, false);
                }
            }
            return;
        }
        var offset = PPSMA.EventsEx.getEventOffset(e);
        var container = PPSMA.OlapChart._getContainerDiv$p(e.srcElement);
        this._switchEvent$0 = (new PPSMA.ChartDomEvent((e).button, offset.x, offset.y, this._currentElement$0, container));
        this._makeCtxMenuFromEvent$p$0(e);
    },
    
    addPrimaryMenuItems: function PPSMA_OlapChart$addPrimaryMenuItems(m) {ULSO72:;
        this._currentMenu$0 = m;
        switch (this._actionType$0) {
            case 0:
                return this._addSeriesPrimaryMenuItems$p$0();
            case PPSMA.ItemType.Points:
                return this._addPointsPrimaryMenuItems$p$0();
            case PPSMA.ItemType.Category:
                return this._addCategoryPrimaryMenuItems$p$0();
            case PPSMA.ItemType.Background:
                return this._addBackgroundMenuItems$p$0();
            case PPSMA.ItemType.ViewInfoBar:
                return this._addHideViewInfoBarItems$p$0();
            case PPSMA.ItemType.LegendLocation:
                return this._addLegendLocationMenuItems$p$0(this._currentMenu$0);
            default:
                break;
        }
        return false;
    },
    
    _addSeriesPrimaryMenuItems$p$0: function PPSMA_OlapChart$_addSeriesPrimaryMenuItems$p$0() {ULSO72:;
        var member = this._getSelectedMember$p$0();
        var hierarchy = this._getSelectedMemberHierarchy$p$0();
        var helper = new PPSMA.MenuOptionHelper(member, hierarchy, this.get__canNavigate$p$0(), this._olapViewContext$0);
        var switchable = (this._arrSeries$0.length > 1);
        if (this.get__canNavigate$p$0() && switchable) {
            helper.addDisabledOption(this._currentMenu$0, this._arrSeries$0[this._activeSeriesLevel$0], false);
        }
        helper.drillDown(this._currentMenu$0, this._chartCtxName$0 + '.drillDown()', switchable);
        var drillDownTo = helper.drillDownTo(this._currentMenu$0, this._chartCtxName$0 + '.fetchCallback(' + this._subMenus$0.length + ')', this._chartCtxName$0 + '.populateCallback(' + this._subMenus$0.length + ')', this._chartCtxName$0 + '.hoverOffCallback(' + this._subMenus$0.length + ')', switchable);
        if (drillDownTo) {
            var ddtSubMenu = new PPSMA.SubMenu(drillDownTo, 0);
            Array.add(this._subMenus$0, ddtSubMenu);
        }
        helper.drillUp(this._currentMenu$0, this._chartCtxName$0 + '.drillUp()', switchable);
        helper.showOnly(this._currentMenu$0, this._chartCtxName$0 + '.showOnly()', switchable);
        helper.remove(this._currentMenu$0, this._chartCtxName$0 + '.remove()', switchable);
        if (this.get__canNavigate$p$0()) {
            helper.showChangeMeasure(this._currentMenu$0, this._chartCtxName$0 + '.selectMeasures()', this.get__isDesigner$p$0(), switchable);
        }
        for (var ndx = 0; ndx < this._arrSeries$0.length; ndx++) {
            if (ndx !== this._activeSeriesLevel$0) {
                helper.switchToOption(this._currentMenu$0, this._arrSeries$0[ndx], this._chartCtxName$0 + '.switchTo(' + ndx + ',false);', false);
            }
        }
        PPSMA.ContextMenu.addMenuSeparator(this._currentMenu$0);
        this._addFilterEmptySubMenu$p$0(this.get__canNavigate$p$0(), true, false);
        helper.pivot(this._currentMenu$0, this._chartCtxName$0 + '.pivot()', false);
        PPSMA.ContextMenu.addMenuSeparator(this._currentMenu$0);
        if (this.get__canNavigate$p$0()) {
            helper.reportTypeSubMenu(this._currentMenu$0, this._chartCtxName$0, this._propertiesArray$0[0]);
            var formatReportSubMenu = helper.formatReportSubMenu(this._currentMenu$0, false);
            this._addLegendLocationMenuItems$p$0(formatReportSubMenu);
            PPSMA.ContextMenu.addMenuSeparator(this._currentMenu$0);
        }
        helper.showHideInfo(this._currentMenu$0, this._chartCtxName$0 + '.showHideInfo()', false);
        return (helper.get_optionsAdded() > 0);
    },
    
    _addPointsPrimaryMenuItems$p$0: function PPSMA_OlapChart$_addPointsPrimaryMenuItems$p$0() {ULSO72:;
        var member = this._getSelectedMember$p$0();
        var hierarchy = this._getSelectedMemberHierarchy$p$0();
        var helper = new PPSMA.MenuOptionHelper(member, hierarchy, this.get__canNavigate$p$0(), this._olapViewContext$0);
        if (this.get__canNavigate$p$0()) {
            if (!this._ptActiveType$0) {
                helper.addDisabledOption(this._currentMenu$0, this._arrSeries$0[this._activeSeriesLevel$0], false);
            }
            else {
                helper.addDisabledOption(this._currentMenu$0, this._arrPoints$0[this._activePointsLevel$0], false);
            }
        }
        helper.drillDown(this._currentMenu$0, this._chartCtxName$0 + '.drillDown()', true);
        var drillDownTo = helper.drillDownTo(this._currentMenu$0, this._chartCtxName$0 + '.fetchCallback(' + this._subMenus$0.length + ')', this._chartCtxName$0 + '.populateCallback(' + this._subMenus$0.length + ')', this._chartCtxName$0 + '.hoverOffCallback(' + this._subMenus$0.length + ')', true);
        if (drillDownTo) {
            var ddtSubMenu = new PPSMA.SubMenu(drillDownTo, 0);
            Array.add(this._subMenus$0, ddtSubMenu);
        }
        helper.drillUp(this._currentMenu$0, this._chartCtxName$0 + '.drillUp()', true);
        helper.showOnly(this._currentMenu$0, this._chartCtxName$0 + '.showOnly()', true);
        helper.remove(this._currentMenu$0, this._chartCtxName$0 + '.remove()', true);
        if (this.get__canNavigate$p$0()) {
            helper.showChangeMeasure(this._currentMenu$0, this._chartCtxName$0 + '.selectMeasures()', this.get__isDesigner$p$0(), true);
        }
        for (var ndx = 0; ndx < this._arrSeries$0.length; ndx++) {
            if (ndx !== this._activeSeriesLevel$0 || this._ptActiveType$0 === PPSMA.ItemType.Points) {
                helper.switchToOption(this._currentMenu$0, this._arrSeries$0[ndx], this._chartCtxName$0 + '.switchTo(' + ndx + ',false);', false);
            }
        }
        for (var ndx = 0; ndx < this._arrPoints$0.length; ndx++) {
            if (ndx !== this._activePointsLevel$0 || !this._ptActiveType$0) {
                helper.switchToOption(this._currentMenu$0, this._arrPoints$0[ndx], this._chartCtxName$0 + '.switchTo(' + ndx + ',true);', false);
            }
        }
        if (!this.get__isDesigner$p$0()) {
            PPSMA.ContextMenu.addMenuSeparator(this._currentMenu$0);
            helper.decompositionTree(this._currentMenu$0, this._chartCtxName$0 + '.analyzeInDecompositionTree(\'\');', false, true, this.get__isDesigner$p$0());
            var showDetailsEnabled = true;
            var hasAggregatedBGHiers = helper.hasAggregatedBackGroundHierarchies();
            if (hasAggregatedBGHiers) {
                showDetailsEnabled = false;
            }
            helper.showDetails(this._currentMenu$0, this._chartCtxName$0 + '.showDetails(\'\')', false, showDetailsEnabled);
            var addActionsEnabled = true;
            if (hasAggregatedBGHiers) {
                addActionsEnabled = false;
            }
            this._olapViewContext$0.set_cellActionData(null);
            var addActions = helper.additionalActions(this._currentMenu$0, this._chartCtxName$0 + '.fetchCallback(' + this._subMenus$0.length + ')', this._chartCtxName$0 + '.populateCallback(' + this._subMenus$0.length + ')', this._chartCtxName$0 + '.hoverOffCallback(' + this._subMenus$0.length + ')', false, addActionsEnabled);
            if (addActions) {
                var aaSubMenu = new PPSMA.SubMenu(addActions, PPSMA.SubMenuType.AddActions);
                Array.add(this._subMenus$0, aaSubMenu);
            }
        }
        PPSMA.ContextMenu.addMenuSeparator(this._currentMenu$0);
        this._addSortSubMenu$p$0(this.get__canNavigate$p$0());
        this._addFilterEmptySubMenu$p$0(this.get__canNavigate$p$0(), true, true);
        helper.pivot(this._currentMenu$0, this._chartCtxName$0 + '.pivot()', false);
        PPSMA.ContextMenu.addMenuSeparator(this._currentMenu$0);
        helper.showHideInfo(this._currentMenu$0, this._chartCtxName$0 + '.showHideInfo();', false);
        return (helper.get_optionsAdded() > 0);
    },
    
    _addCategoryPrimaryMenuItems$p$0: function PPSMA_OlapChart$_addCategoryPrimaryMenuItems$p$0() {ULSO72:;
        var member = this._getSelectedMember$p$0();
        var hierarchy = this._getSelectedMemberHierarchy$p$0();
        var helper = new PPSMA.MenuOptionHelper(member, hierarchy, this.get__canNavigate$p$0(), this._olapViewContext$0);
        var switchable = (this._arrPoints$0.length > 1);
        if (this.get__canNavigate$p$0() && switchable) {
            helper.addDisabledOption(this._currentMenu$0, this._arrPoints$0[this._activePointsLevel$0], false);
        }
        helper.drillDown(this._currentMenu$0, this._chartCtxName$0 + '.drillDown()', switchable);
        var drillDownTo = helper.drillDownTo(this._currentMenu$0, this._chartCtxName$0 + '.fetchCallback(' + this._subMenus$0.length + ')', this._chartCtxName$0 + '.populateCallback(' + this._subMenus$0.length + ')', this._chartCtxName$0 + '.hoverOffCallback(' + this._subMenus$0.length + ')', switchable);
        if (drillDownTo) {
            var ddtSubMenu = new PPSMA.SubMenu(drillDownTo, 0);
            Array.add(this._subMenus$0, ddtSubMenu);
        }
        helper.drillUp(this._currentMenu$0, this._chartCtxName$0 + '.drillUp()', switchable);
        helper.showOnly(this._currentMenu$0, this._chartCtxName$0 + '.showOnly()', switchable);
        helper.remove(this._currentMenu$0, this._chartCtxName$0 + '.remove()', switchable);
        if (this.get__canNavigate$p$0()) {
            helper.showChangeMeasure(this._currentMenu$0, this._chartCtxName$0 + '.selectMeasures()', this.get__isDesigner$p$0(), switchable);
        }
        for (var ndx = 0; ndx < this._arrPoints$0.length; ndx++) {
            if (ndx !== this._activePointsLevel$0) {
                helper.switchToOption(this._currentMenu$0, this._arrPoints$0[ndx], this._chartCtxName$0 + '.switchTo(' + ndx + ',true);', false);
            }
        }
        PPSMA.ContextMenu.addMenuSeparator(this._currentMenu$0);
        this._addFilterEmptySubMenu$p$0(this.get__canNavigate$p$0(), false, true);
        helper.pivot(this._currentMenu$0, this._chartCtxName$0 + '.pivot()', false);
        PPSMA.ContextMenu.addMenuSeparator(this._currentMenu$0);
        if (this.get__canNavigate$p$0()) {
            helper.reportTypeSubMenu(this._currentMenu$0, this._chartCtxName$0, this._propertiesArray$0[0]);
            var formatReportSubMenu = helper.formatReportSubMenu(this._currentMenu$0, false);
            this._addLegendLocationMenuItems$p$0(formatReportSubMenu);
            PPSMA.ContextMenu.addMenuSeparator(this._currentMenu$0);
        }
        helper.showHideInfo(this._currentMenu$0, this._chartCtxName$0 + '.showHideInfo()', false);
        return (helper.get_optionsAdded() > 0);
    },
    
    _addBackgroundMenuItems$p$0: function PPSMA_OlapChart$_addBackgroundMenuItems$p$0() {ULSO72:;
        var helper = new PPSMA.MenuOptionHelper(null, null, this.get__canNavigate$p$0(), this._olapViewContext$0);
        if (this.get__canNavigate$p$0()) {
            helper.showChangeMeasure(this._currentMenu$0, this._chartCtxName$0 + '.selectMeasures()', this.get__isDesigner$p$0(), false);
        }
        PPSMA.ContextMenu.addMenuSeparator(this._currentMenu$0);
        this._addFilterEmptySubMenu$p$0(this.get__canNavigate$p$0(), true, true);
        helper.pivot(this._currentMenu$0, this._chartCtxName$0 + '.pivot()', false);
        PPSMA.ContextMenu.addMenuSeparator(this._currentMenu$0);
        helper.reportTypeSubMenu(this._currentMenu$0, this._chartCtxName$0, this._propertiesArray$0[0]);
        if (this.get__canNavigate$p$0()) {
            var formatReportSubMenu = helper.formatReportSubMenu(this._currentMenu$0, false);
            this._addLegendLocationMenuItems$p$0(formatReportSubMenu);
            PPSMA.ContextMenu.addMenuSeparator(this._currentMenu$0);
        }
        helper.showHideInfo(this._currentMenu$0, this._chartCtxName$0 + '.showHideInfo();', false);
        return (helper.get_optionsAdded() > 0);
    },
    
    _addHideViewInfoBarItems$p$0: function PPSMA_OlapChart$_addHideViewInfoBarItems$p$0() {ULSO72:;
        var helper = new PPSMA.MenuOptionHelper(null, null, this.get__canNavigate$p$0(), this._olapViewContext$0);
        helper.showHideInfo(this._currentMenu$0, this._chartCtxName$0 + '.showHideInfoByDiv();', false);
        return (helper.get_optionsAdded() > 0);
    },
    
    _addLegendLocationMenuItems$p$0: function PPSMA_OlapChart$_addLegendLocationMenuItems$p$0(m) {ULSO72:;
        PPSMA.ContextMenu.addMenuOption(m, PPSMA.SR.OlapContextMenu_ChartLegendRight, this._chartCtxName$0 + '.showLegendAtRight()', this._olapViewContext$0.get_resourcePath() + 'LegendRight.gif', null, (this._propertiesArray$0[1] === PPSMA.LegendLocation.right), false);
        PPSMA.ContextMenu.addMenuOption(m, PPSMA.SR.OlapContextMenu_ChartLegendTop, this._chartCtxName$0 + '.showLegendAtTop()', this._olapViewContext$0.get_resourcePath() + 'LegendTop.gif', null, (this._propertiesArray$0[1] === PPSMA.LegendLocation.top), false);
        var hideFn = this._chartCtxName$0 + '.hideLegend()';
        if (!(this._propertiesArray$0[1])) {
            hideFn = '';
        }
        PPSMA.ContextMenu.addMenuOption(m, PPSMA.SR.OlapContextMenu_ChartLegendHide, hideFn, null, null, false, false);
        return true;
    },
    
    _makeCtxMenuFromEvent$p$0: function PPSMA_OlapChart$_makeCtxMenuFromEvent$p$0(e) {ULSO72:;
        var currElem = PPSMA.EventsEx.getCurrentElement(e);
        var currEvent = PPSMA.EventsEx.getEvent(e);
        var x;
        var y;
        if (isNullOrUndefined(currEvent.offsetX)) {
            x = PPSMA.SizeEx.getXOffset(currEvent, currElem);
            y = PPSMA.SizeEx.getYOffset(currEvent, currElem);
        }
        else {
            x = currEvent.offsetX;
            y = currEvent.offsetY;
        }
        if (PPSMA.DomElementEx.tagsMatch(e.srcElement.tagName, 'area')) {
            currElem = e.srcElement.parentNode.parentNode;
        }
        if (PPSMA.DomElementEx.tagsMatch(e.srcElement.tagName, 'map')) {
            currElem = e.srcElement.parentNode;
        }
        var location = Sys.UI.DomElement.getLocation(currElem);
        if (e.target && !e.target.offsetWidth && !e.target.offsetHeight) {
            x -= location.x;
            y -= location.y;
        }
        if (isNaN(x) || isNaN(y)) {
            var offset = PPSMA.EventsEx.getEventOffset(e);
            x = offset.x;
            y = offset.y;
        }
        PPSMA.ContextMenu.createForReportsNScorecards(currElem, this, x, y, false);
        PPSMA.ContextMenu.neutralizeBrowserMenu(new Sys.UI.DomEvent(e));
    },
    
    drillDownTo: function PPSMA_OlapChart$drillDownTo(drillToHierarchyName, drillToMemberName, drillToLevelName) {ULSO72:;
        var drillFromMember = this._getSelectedMember$p$0();
        var drillFromHierarchy = this._getSelectedMemberHierarchy$p$0();
        this._olapViewContext$0.crossDrill(drillFromHierarchy.get_name(), drillFromMember.get_name(), unescape(drillToHierarchyName), unescape(drillToMemberName), unescape(drillToLevelName));
    },
    
    drillDown: function PPSMA_OlapChart$drillDown() {ULSO72:;
        var member = this._getSelectedMember$p$0();
        var hierarchy = this._getSelectedMemberHierarchy$p$0();
        this._olapViewContext$0.drillDown(hierarchy.get_name(), member.get_name());
    },
    
    drillUp: function PPSMA_OlapChart$drillUp() {ULSO72:;
        var member = this._getSelectedMember$p$0();
        var hierarchy = this._getSelectedMemberHierarchy$p$0();
        this._olapViewContext$0.drillUp(hierarchy.get_name(), member.get_name());
    },
    
    showOnly: function PPSMA_OlapChart$showOnly() {ULSO72:;
        var member = this._getSelectedMember$p$0();
        var hierarchy = this._getSelectedMemberHierarchy$p$0();
        this._olapViewContext$0.showOnly(hierarchy.get_name(), member.get_name());
    },
    
    remove: function PPSMA_OlapChart$remove() {ULSO72:;
        var member = this._getSelectedMember$p$0();
        var hierarchy = this._getSelectedMemberHierarchy$p$0();
        this._olapViewContext$0.hide(hierarchy.get_name(), member.get_name());
    },
    
    selectMeasures: function PPSMA_OlapChart$selectMeasures() {ULSO72:;
        this._changeMeasure.show(this._currentElement$0);
    },
    
    sort: function PPSMA_OlapChart$sort(axis, sortType) {ULSO72:;
        var detailsHelper = new PPSMA.DetailsHelper(this._olapViewContext$0, this._chartCtxName$0, this._seriesIndex$0, this._pointsIndex$0, null);
        var tupleXml = detailsHelper.getCellTupleXml();
        if (tupleXml) {
            this._olapViewContext$0.sort(axis, tupleXml, sortType, 'false');
        }
    },
    
    pivot: function PPSMA_OlapChart$pivot() {ULSO72:;
        this._olapViewContext$0.pivot();
    },
    
    handleMeasureGroupNameChange: function PPSMA_OlapChart$handleMeasureGroupNameChange() {ULSO72:;
        var code = 'window.event.srcElement.id';
        var propertyValue = eval(code);
        var srcElem = $get(propertyValue);
        if (srcElem) {
            var measureGroupName = srcElem.getAttribute('MeasureGroupName');
            this._olapViewContext$0.get_measures().set_measureGroupName(measureGroupName);
        }
    },
    
    filterByValue: function PPSMA_OlapChart$filterByValue(axis) {ULSO72:;
        var parameters;
        if (axis === '1') {
            parameters = this._olapViewContext$0.get_results().get_valueFilterParamsCol();
        }
        else {
            parameters = this._olapViewContext$0.get_results().get_valueFilterParamsRow();
        }
        var values = null;
        this._valueFilter.set_selectedButton('2');
        if (parameters && parameters !== '') {
            values = parameters.split(';');
        }
        var ftype = 0;
        if (values && values[0] !== '0') {
            ftype = parseInt(values[0]);
        }
        this._valueFilter.setCallbackMethod(this.$$d_processFilterDialogResult);
        if (ftype > 6 && values) {
            this._valueFilter.set_hierarchyName(values[1]);
            this._valueFilter.set_filterType(ftype);
            if (isNullUndefinedOrEmpty(this._valueFilter.get_value1())) {
                this._valueFilter.set_value1(this._valueFilter.getFormattedStringFromInvariantNumber(Number.parseInvariant(values[3]), false));
            }
            if (isNullUndefinedOrEmpty(this._valueFilter.get_value2())) {
                this._valueFilter.set_value2(this._valueFilter.getFormattedStringFromInvariantNumber(Number.parseInvariant(values[4]), false));
            }
            this._valueFilter.set_currentCell(null);
            this._valueFilter.set_axis(axis);
            var tuple = values[2];
            this._valueFilter.set_levelName(values[5]);
            this._valueFilter.loadFilterDialog(values[0], tuple, values[5], this._valueFilter.get_hierarchyName(), this._valueFilter.get_value1(), this._valueFilter.get_value2(), null, axis);
        }
        else {
            var hierarchy = this._getAxisMemberHierarchy$p$0(axis);
            this._valueFilter.set_hierarchyName(hierarchy.get_name());
            this._valueFilter.set_filterType(9);
            this._valueFilter.set_showClearOption(false);
            this._valueFilter.set_tupleIndex(((axis === '1') ? this._seriesIndex$0 : this._pointsIndex$0));
            this._valueFilter.set_value1('0');
            this._valueFilter.set_value2('100');
            this._valueFilter.set_currentCell(null);
            this._valueFilter.set_axis(axis);
            this._valueFilter.set_innerTargetID(this._olapViewContext$0.get_innerTargetId());
            this._valueFilter.showValueFilterDlg();
        }
    },
    
    processFilterDialogResult: function PPSMA_OlapChart$processFilterDialogResult() {ULSO72:;
        if (this._valueFilter.get_selectedButton() === '1') {
            this._olapViewContext$0.filter(this._valueFilter.get_filterType().toString(), this._valueFilter.get_hierarchyName(), this._valueFilter.get_tupleXML(), this._valueFilter.get_axis(), this._valueFilter.get_levelName(), this._valueFilter.get_value1(), this._valueFilter.get_value2());
        }
        else if (this._valueFilter.get_selectedButton() === '3') {
            this._olapViewContext$0.clearFilter(this._valueFilter.get_axis(), (this._valueFilter.get_axis() === '1'));
        }
    },
    
    filterByTopBottom: function PPSMA_OlapChart$filterByTopBottom(axis) {ULSO72:;
        var parameters;
        if (axis === '1') {
            parameters = this._olapViewContext$0.get_results().get_valueFilterParamsCol();
        }
        else {
            parameters = this._olapViewContext$0.get_results().get_valueFilterParamsRow();
        }
        var values = null;
        this._valueFilter.set_selectedButton('2');
        if (parameters && parameters !== '') {
            values = parameters.split(';');
        }
        var ftype = 0;
        if (values && values[0] !== '0') {
            ftype = parseInt(values[0]);
        }
        this._valueFilter.setCallbackMethod(this.$$d_processFilterDialogResult);
        if (ftype > 0 && ftype < 7 && values) {
            this._valueFilter.set_hierarchyName(values[1]);
            this._valueFilter.set_filterType(ftype);
            this._valueFilter.set_tupleIndex(((axis === '1') ? this._seriesIndex$0 : this._pointsIndex$0));
            this._valueFilter.set_value1(values[3]);
            this._valueFilter.set_value2(values[4]);
            this._valueFilter.set_currentCell(null);
            this._valueFilter.set_axis(axis);
            var tuple = values[2];
            this._valueFilter.set_levelName(values[5]);
            this._valueFilter.loadFilterDialog(values[0], values[5], tuple, this._valueFilter.get_hierarchyName(), this._valueFilter.get_value1(), this._valueFilter.get_value2(), null, axis);
        }
        else {
            var hierarchy = this._getAxisMemberHierarchy$p$0(axis);
            this._valueFilter.set_hierarchyName(hierarchy.get_name());
            this._valueFilter.set_filterType(1);
            this._valueFilter.set_showClearOption(false);
            this._valueFilter.set_tupleIndex(((axis === '1') ? this._seriesIndex$0 : this._pointsIndex$0));
            this._valueFilter.set_value1('10');
            this._valueFilter.set_currentCell(null);
            this._valueFilter.set_axis(axis);
            this._valueFilter.set_innerTargetID(this._olapViewContext$0.get_innerTargetId());
            this._valueFilter.showTopFilterDlg();
        }
    },
    
    loadFilterDialog: function PPSMA_OlapChart$loadFilterDialog(sFilterTypeIndex, hierarchy, tuple, level, value1, value2, axis) {ULSO72:;
        this._valueFilter.setCallbackMethod(this.$$d_processFilterDialogResult);
        this._valueFilter.loadFilterDialog(sFilterTypeIndex, tuple, level, hierarchy, value1, value2, null, axis);
    },
    
    filterEmptyRow: function PPSMA_OlapChart$filterEmptyRow() {ULSO72:;
        var emptyRow = (this._olapViewContext$0.get_results().get_filterEmptyAxis() & 2) > 0;
        this._olapViewContext$0.filterEmpty('2', !emptyRow);
    },
    
    filterEmptyCol: function PPSMA_OlapChart$filterEmptyCol() {ULSO72:;
        var emptyCol = (this._olapViewContext$0.get_results().get_filterEmptyAxis() & 1) > 0;
        this._olapViewContext$0.filterEmpty('1', !emptyCol);
    },
    
    clearSeriesFilter: function PPSMA_OlapChart$clearSeriesFilter() {ULSO72:;
        this._olapViewContext$0.clearFilter('2', false);
    },
    
    clearPointsFilter: function PPSMA_OlapChart$clearPointsFilter() {ULSO72:;
        this._olapViewContext$0.clearFilter('1', true);
    },
    
    switchSeriesEvnt: function PPSMA_OlapChart$switchSeriesEvnt() {ULSO72:;
        this.sOnC(this._switchEvent$0, null);
    },
    
    switchPointsEvnt: function PPSMA_OlapChart$switchPointsEvnt() {ULSO72:;
        this.pOnC(this._switchEvent$0, null);
    },
    
    switchCategoryEvnt: function PPSMA_OlapChart$switchCategoryEvnt() {ULSO72:;
        this.xOnC(this._switchEvent$0, null);
    },
    
    switchTo: function PPSMA_OlapChart$switchTo(ndx, isAxisX) {ULSO72:;
        if (!PPSMA.OlapChart._ptActiveTypes) {
            PPSMA.OlapChart._ptActiveTypes = {};
        }
        switch (this._actionType$0) {
            case 0:
                this._activeSeriesLevel$0 = ndx;
                window.setTimeout(this._chartCtxName$0 + '.switchSeriesEvnt()', 100);
                break;
            case PPSMA.ItemType.Points:
                if (isAxisX) {
                    this._activePointsLevel$0 = ndx;
                    this._ptActiveType$0 = PPSMA.ItemType.Points;
                }
                else {
                    this._activeSeriesLevel$0 = ndx;
                    this._ptActiveType$0 = 0;
                }
                PPSMA.OlapChart._ptActiveTypes[this._chartCtxName$0] = this._ptActiveType$0;
                window.setTimeout(this._chartCtxName$0 + '.switchPointsEvnt()', 100);
                break;
            case PPSMA.ItemType.Category:
                this._activePointsLevel$0 = ndx;
                this._activeSeriesLevel$0 = ndx;
                window.setTimeout(this._chartCtxName$0 + '.switchCategoryEvnt()', 100);
                break;
            default:
                break;
        }
    },
    
    fetchCallback: function PPSMA_OlapChart$fetchCallback(smIndex) {ULSO72:;
        var smProps = this._subMenus$0[smIndex];
        if (smProps) {
            smProps.set_hoverOn(true);
            switch (smProps.get_menuType()) {
                case PPSMA.SubMenuType.AddActions:
                    if (!this._olapViewContext$0.get_cellActionData() && !this._alreadyFetching$0) {
                        this._alreadyFetching$0 = true;
                        var detailsHelper = new PPSMA.DetailsHelper(this._olapViewContext$0, this._chartCtxName$0, this._seriesIndex$0, this._pointsIndex$0, '');
                        var tupleXml = detailsHelper.getCellTupleXml();
                        this._olapViewContext$0.getCellLevelActions(tupleXml);
                    }
                    break;
                case 0:
                    if (!this._olapViewContext$0.get_cubeMetadata()) {
                        this._olapViewContext$0.loadCubeMetadata(this._olapViewContext$0.get_ctrlProxyId());
                    }
                    break;
                default:
                    smProps.set_hoverOn(false);
                    break;
            }
        }
    },
    
    _alreadyFetching$0: false,
    
    populateCallback: function PPSMA_OlapChart$populateCallback(smIndex) {ULSO72:;
        var smProps = this._subMenus$0[smIndex];
        if (smProps && smProps.get_hoverOn()) {
            var sm = smProps.get_menu();
            var bPopulated = smProps.get_isPopulated();
            if (!bPopulated) {
                PPSMA.ContextMenu.removeAllButFirst(sm);
                switch (smProps.get_menuType()) {
                    case PPSMA.SubMenuType.AddActions:
                        if (this._olapViewContext$0.get_cellActionData()) {
                            this._alreadyFetching$0 = false;
                            this._populateAdditionActionsSubMenuItems$p$0(sm);
                            smProps.set_isPopulated(true);
                        }
                        break;
                    case 0:
                        if (this._olapViewContext$0.get_cubeMetadata()) {
                            this._populateDrillDownToSubMenuItems$p$0(sm);
                            smProps.set_isPopulated(true);
                        }
                        break;
                    default:
                        break;
                }
            }
            if (bPopulated) {
                PPSMA.ContextMenu.refreshMenu(sm, false);
            }
            else if (smProps.get_isPopulated()) {
                PPSMA.ContextMenu.refreshMenu(sm, true);
            }
        }
    },
    
    hoverOffCallback: function PPSMA_OlapChart$hoverOffCallback(smIndex) {ULSO72:;
        var smProps = this._subMenus$0[smIndex];
        if (smProps) {
            smProps.set_hoverOn(false);
        }
    },
    
    switchToGrid: function PPSMA_OlapChart$switchToGrid() {ULSO72:;
        this._tempValue$0 = 0;
        this._olapViewContext$0.switchOlapReportType((0), this.$$d_switchReportTypeCompleted);
    },
    
    switchToColumnChart: function PPSMA_OlapChart$switchToColumnChart() {ULSO72:;
        this._tempValue$0 = PPSMA.OlapReportType.ColumnChart;
        this._olapViewContext$0.switchOlapReportType((PPSMA.OlapReportType.ColumnChart), this.$$d_switchReportTypeCompleted);
    },
    
    switchToColumnChartStacked: function PPSMA_OlapChart$switchToColumnChartStacked() {ULSO72:;
        this._tempValue$0 = PPSMA.OlapReportType.ColumnChartStacked;
        this._olapViewContext$0.switchOlapReportType((PPSMA.OlapReportType.ColumnChartStacked), this.$$d_switchReportTypeCompleted);
    },
    
    switchToColumnChartStacked100: function PPSMA_OlapChart$switchToColumnChartStacked100() {ULSO72:;
        this._tempValue$0 = PPSMA.OlapReportType.ColumnChartStacked100;
        this._olapViewContext$0.switchOlapReportType((PPSMA.OlapReportType.ColumnChartStacked100), this.$$d_switchReportTypeCompleted);
    },
    
    switchToLineChart: function PPSMA_OlapChart$switchToLineChart() {ULSO72:;
        this._tempValue$0 = PPSMA.OlapReportType.LineChart;
        this._olapViewContext$0.switchOlapReportType((PPSMA.OlapReportType.LineChart), this.$$d_switchReportTypeCompleted);
    },
    
    switchToLineChartWithMarkers: function PPSMA_OlapChart$switchToLineChartWithMarkers() {ULSO72:;
        this._tempValue$0 = PPSMA.OlapReportType.LineChartWithMarkers;
        this._olapViewContext$0.switchOlapReportType((PPSMA.OlapReportType.LineChartWithMarkers), this.$$d_switchReportTypeCompleted);
    },
    
    switchToPieChart: function PPSMA_OlapChart$switchToPieChart() {ULSO72:;
        this._tempValue$0 = PPSMA.OlapReportType.PieChart;
        this._olapViewContext$0.switchOlapReportType((PPSMA.OlapReportType.PieChart), this.$$d_switchReportTypeCompleted);
    },
    
    switchReportTypeCompleted: function PPSMA_OlapChart$switchReportTypeCompleted(success) {ULSO72:;
        if (success) {
            this._propertiesArray$0[0] = this._tempValue$0;
        }
    },
    
    showLegendLocMenu: function PPSMA_OlapChart$showLegendLocMenu(e) {ULSO72:;
        this._actionType$0 = PPSMA.ItemType.LegendLocation;
        var elem = PPSMA.EventsEx.getCurrentElement(e);
        this._currentElement$0 = elem.parentNode.parentNode;
        this._makeCtxMenuFromEvent$p$0(e);
    },
    
    showLegendAtRight: function PPSMA_OlapChart$showLegendAtRight() {ULSO72:;
        this._tempValue$0 = PPSMA.LegendLocation.right;
        this._olapViewContext$0.changeViewConfigurationWithCallback('LegendLocation', (PPSMA.LegendLocation.right).toString(), this.$$d_legendCompleted);
    },
    
    showLegendAtTop: function PPSMA_OlapChart$showLegendAtTop() {ULSO72:;
        this._tempValue$0 = PPSMA.LegendLocation.top;
        this._olapViewContext$0.changeViewConfigurationWithCallback('LegendLocation', (PPSMA.LegendLocation.top).toString(), this.$$d_legendCompleted);
    },
    
    hideLegend: function PPSMA_OlapChart$hideLegend() {ULSO72:;
        this._tempValue$0 = 0;
        this._olapViewContext$0.changeViewConfigurationWithCallback('LegendLocation', (0).toString(), this.$$d_legendCompleted);
    },
    
    legendCompleted: function PPSMA_OlapChart$legendCompleted(success) {ULSO72:;
        if (success) {
            this._propertiesArray$0[1] = this._tempValue$0;
        }
    },
    
    showHideInfoByDiv: function PPSMA_OlapChart$showHideInfoByDiv() {ULSO72:;
        this._olapViewContext$0.toggleViewInfoBar(this._currentElement$0.firstChild);
    },
    
    hideViewInfoBarCtxMenu: function PPSMA_OlapChart$hideViewInfoBarCtxMenu(e) {ULSO72:;
        var currEvent = PPSMA.EventsEx.getEvent(e);
        var srcElement = PPSMA.EventsEx.getCurrentElement(e);
        if (PPSMA.EventsEx.isRightClick(currEvent)) {
            this._actionType$0 = PPSMA.ItemType.ViewInfoBar;
            this._currentElement$0 = PPSMA.OlapViewContext.getViewInfoDiv(srcElement);
            Array.clear(this._subMenus$0);
            this._focusedArray$0 = null;
            var xOffset;
            var yOffset;
            if (isNullOrUndefined(currEvent.offsetX)) {
                xOffset = PPSMA.SizeEx.getXOffset(currEvent, this._currentElement$0);
                yOffset = PPSMA.SizeEx.getYOffset(currEvent, this._currentElement$0);
            }
            else {
                xOffset = currEvent.offsetX;
                yOffset = currEvent.offsetY;
            }
            PPSMA.ContextMenu.createForReportsNScorecards(srcElement, this, xOffset, yOffset, false);
            PPSMA.ContextMenu.neutralizeBrowserMenu(new Sys.UI.DomEvent(e));
        }
    },
    
    assignFocus: function PPSMA_OlapChart$assignFocus() {ULSO72:;
        var chartDiv = $get(this._olapViewContext$0.get_innerTargetId());
        if (chartDiv) {
            chartDiv.firstChild.firstChild.focus();
        }
    },
    
    showHideInfo: function PPSMA_OlapChart$showHideInfo() {ULSO72:;
        var img = null;
        var p = this._currentElement$0;
        while (p) {
            if (PPSMA.DomElementEx.tagsMatch(p.tagName, 'map')) {
                img = p;
                break;
            }
            p = p.parentNode;
        }
        var viewinfodiv = null;
        if (img) {
            var pardiv = img.parentNode.parentNode;
            p = pardiv.firstChild;
            while (p) {
                if (PPSMA.DomElementEx.tagsMatch(p.tagName, 'div') && (p.id === '_viewInfoId')) {
                    viewinfodiv = p;
                    break;
                }
                p = p.nextSibling;
            }
        }
        if (viewinfodiv) {
            this._olapViewContext$0.toggleViewInfoBar(viewinfodiv.firstChild);
        }
    },
    
    handleShowUrlMenuClick: function PPSMA_OlapChart$handleShowUrlMenuClick(urlContent) {ULSO72:;
        PPSMA.NewWindow.openUrl(urlContent);
    },
    
    showDetails: function PPSMA_OlapChart$showDetails(resultTableIndex) {ULSO72:;
        var detailsHelper = new PPSMA.DetailsHelper(this._olapViewContext$0, this._chartCtxName$0, this._seriesIndex$0, this._pointsIndex$0, resultTableIndex);
        detailsHelper.showDetails();
    },
    
    analyzeInDecompositionTree: function PPSMA_OlapChart$analyzeInDecompositionTree(misc) {ULSO72:;
        var analyzeInDecompHelper = new PPSMA.AnalyzeInDecompHelper();
        analyzeInDecompHelper.launchAnalyzeRequest(this._olapViewContext$0, this._chartCtxName$0, this._seriesIndex$0, this._pointsIndex$0);
    },
    
    get_cubeMetadata: function PPSMA_OlapChart$get_cubeMetadata() {ULSO72:;
        return null;
    },
    set_cubeMetadata: function PPSMA_OlapChart$set_cubeMetadata(value) {ULSO72:;
        return value;
    },
    
    _initialize$p$0: function PPSMA_OlapChart$_initialize$p$0(a, area) {ULSO72:;
        this._setIndices$p$0(a);
        switch (area) {
            case 0:
                this._getRowMembersArray$p$0();
                break;
            case PPSMA.ItemType.Points:
                this._getRowMembersArray$p$0();
                this._getColumnMembersArray$p$0();
                break;
            case PPSMA.ItemType.Category:
                this._getColumnMembersArray$p$0();
                break;
        }
    },
    
    _checkPtActiveTypeState$p$0: function PPSMA_OlapChart$_checkPtActiveTypeState$p$0() {ULSO72:;
        if (PPSMA.OlapChart._ptActiveTypes && PPSMA.OlapChart._ptActiveTypes[this._chartCtxName$0]) {
            this._ptActiveType$0 = PPSMA.OlapChart._ptActiveTypes[this._chartCtxName$0];
        }
    },
    
    _callEventHandlerForKeyDown$p$0: function PPSMA_OlapChart$_callEventHandlerForKeyDown$p$0(e) {ULSO72:;
        switch (this._getFocusedItemType$p$0()) {
            case 0:
                this.sOnC(e, this._focusedArray$0);
                break;
            case PPSMA.ItemType.Points:
                this.pOnC(e, this._focusedArray$0);
                break;
            case PPSMA.ItemType.Category:
                this.xOnC(e, this._focusedArray$0);
                break;
        }
    },
    
    _getFocusedItemType$p$0: function PPSMA_OlapChart$_getFocusedItemType$p$0() {ULSO72:;
        var area;
        if (this._focusedArray$0[0] < 0) {
            area = PPSMA.ItemType.Category;
        }
        else if (this._focusedArray$0[1] < 0) {
            area = 0;
        }
        else {
            area = PPSMA.ItemType.Points;
        }
        return area;
    },
    
    _setIndices$p$0: function PPSMA_OlapChart$_setIndices$p$0(a) {ULSO72:;
        if (a && a.length === 2) {
            this._seriesIndex$0 = a[0];
            this._pointsIndex$0 = a[1];
        }
    },
    
    _getRowMembersArray$p$0: function PPSMA_OlapChart$_getRowMembersArray$p$0() {ULSO72:;
        this._arrSeries$0 = [];
        var members = this._olapViewContext$0.get_results().get_rowMembers()[this._seriesIndex$0];
        for (var ndx = 0; ndx < members.length; ndx++) {
            Array.add(this._arrSeries$0, members[ndx].get_caption());
        }
    },
    
    _getColumnMembersArray$p$0: function PPSMA_OlapChart$_getColumnMembersArray$p$0() {ULSO72:;
        this._arrPoints$0 = [];
        var members = this._olapViewContext$0.get_results().get_columnMembers()[this._pointsIndex$0];
        for (var ndx = 0; ndx < members.length; ndx++) {
            Array.add(this._arrPoints$0, members[ndx].get_caption());
        }
    },
    
    _getSelectedMember$p$0: function PPSMA_OlapChart$_getSelectedMember$p$0() {ULSO72:;
        if (!this._actionType$0 || !this._ptActiveType$0) {
            var rowMembers = this._olapViewContext$0.get_results().get_rowMembers();
            return rowMembers[this._seriesIndex$0][this._activeSeriesLevel$0];
        }
        else if (this._actionType$0 === PPSMA.ItemType.Points) {
            var colMembers = this._olapViewContext$0.get_results().get_columnMembers();
            return colMembers[this._pointsIndex$0][this._activePointsLevel$0];
        }
        else if (this._actionType$0 === PPSMA.ItemType.Category) {
            var colMembers = this._olapViewContext$0.get_results().get_columnMembers();
            return colMembers[this._pointsIndex$0][this._activeSeriesLevel$0];
        }
        return null;
    },
    
    _getSelectedMemberHierarchy$p$0: function PPSMA_OlapChart$_getSelectedMemberHierarchy$p$0() {ULSO72:;
        if (!this._actionType$0 || !this._ptActiveType$0) {
            var rowHiers = this._olapViewContext$0.get_results().get_rowHierarchies();
            return rowHiers[this._activeSeriesLevel$0];
        }
        else if (this._actionType$0 === PPSMA.ItemType.Points) {
            var colHiers = this._olapViewContext$0.get_results().get_columnHierarchies();
            return colHiers[this._activePointsLevel$0];
        }
        else if (this._actionType$0 === PPSMA.ItemType.Category) {
            var colHiers = this._olapViewContext$0.get_results().get_columnHierarchies();
            return colHiers[this._activePointsLevel$0];
        }
        return null;
    },
    
    _getAxisMemberHierarchy$p$0: function PPSMA_OlapChart$_getAxisMemberHierarchy$p$0(axis) {ULSO72:;
        if (axis === '2') {
            var rowHiers = this._olapViewContext$0.get_results().get_rowHierarchies();
            return rowHiers[this._activeSeriesLevel$0];
        }
        else if (axis === '1') {
            var colHiers = this._olapViewContext$0.get_results().get_columnHierarchies();
            return colHiers[this._activePointsLevel$0];
        }
        return null;
    },
    
    _addFilterEmptySubMenu$p$0: function PPSMA_OlapChart$_addFilterEmptySubMenu$p$0(canNavigate, series, point) {ULSO72:;
        if (canNavigate) {
            var filterEmptyAxis = this._olapViewContext$0.get_results().get_filterEmptyAxis();
            var emptyRow = ((filterEmptyAxis & 2) > 0);
            var emptyCol = ((filterEmptyAxis & 1) > 0);
            var filterEmptyBy = PPSMA.ContextMenu.addSubMenu(this._currentMenu$0, PPSMA.SR.OlapContextMenu_Filter, this._olapViewContext$0.get_resourcePath() + 'ImageFilter.gif', false);
            if (series) {
                var valueFilterSet = (this._olapViewContext$0.get_results().get_valueFilterRow() === 1);
                var topFilterSet = (this._olapViewContext$0.get_results().get_topFilterRow() === 1);
                PPSMA.ContextMenu.addDisabledMenuOption(filterEmptyBy, PPSMA.SR.OlapContextMenu_SortSeries, null, this._olapViewContext$0.get_resourcePath() + 'ChartSeriesD.gif', false);
                if (valueFilterSet || topFilterSet) {
                    PPSMA.ContextMenu.addMenuOption(filterEmptyBy, PPSMA.SR.OlapContextMenu_ClearFilter, this._chartCtxName$0 + '.clearSeriesFilter()', this._olapViewContext$0.get_resourcePath() + 'ClearFilter.gif', null, false, true);
                }
                else {
                    PPSMA.ContextMenu.addDisabledMenuOption(filterEmptyBy, PPSMA.SR.OlapContextMenu_ClearFilter, null, this._olapViewContext$0.get_resourcePath() + 'ClearFilterD.gif', true);
                }
                PPSMA.ContextMenu.addMenuOption(filterEmptyBy, PPSMA.SR.OlapContextMenu_ValueFilter, this._chartCtxName$0 + '.filterByValue(\'2\');', ((valueFilterSet) ? this._olapViewContext$0.get_resourcePath() + 'Check.gif' : ''), null, false, true);
                PPSMA.ContextMenu.addMenuOption(filterEmptyBy, PPSMA.SR.OlapContextMenu_TopFilter, this._chartCtxName$0 + '.filterByTopBottom(\'2\');', ((topFilterSet) ? this._olapViewContext$0.get_resourcePath() + 'Check.gif' : ''), null, false, true);
            }
            if (point) {
                var valueFilterSet = (this._olapViewContext$0.get_results().get_valueFilterCol() === 1);
                var topFilterSet = (this._olapViewContext$0.get_results().get_topFilterCol() === 1);
                if (series) {
                    PPSMA.ContextMenu.addMenuSeparator(filterEmptyBy);
                }
                PPSMA.ContextMenu.addDisabledMenuOption(filterEmptyBy, PPSMA.SR.OlapContextMenu_SortPoints, null, this._olapViewContext$0.get_resourcePath() + 'ChartBottomAxisD.gif', false);
                if (valueFilterSet || topFilterSet) {
                    PPSMA.ContextMenu.addMenuOption(filterEmptyBy, PPSMA.SR.OlapContextMenu_ClearFilter, this._chartCtxName$0 + '.clearPointsFilter()', this._olapViewContext$0.get_resourcePath() + 'ClearFilter.gif', null, false, true);
                }
                else {
                    PPSMA.ContextMenu.addDisabledMenuOption(filterEmptyBy, PPSMA.SR.OlapContextMenu_ClearFilter, null, this._olapViewContext$0.get_resourcePath() + 'ClearFilterD.gif', true);
                }
                PPSMA.ContextMenu.addMenuOption(filterEmptyBy, PPSMA.SR.OlapContextMenu_ValueFilter, this._chartCtxName$0 + '.filterByValue(\'1\');', ((valueFilterSet) ? this._olapViewContext$0.get_resourcePath() + 'Check.gif' : ''), null, false, true);
                PPSMA.ContextMenu.addMenuOption(filterEmptyBy, PPSMA.SR.OlapContextMenu_TopFilter, this._chartCtxName$0 + '.filterByTopBottom(\'1\');', ((topFilterSet) ? this._olapViewContext$0.get_resourcePath() + 'Check.gif' : ''), null, false, true);
            }
            PPSMA.ContextMenu.addMenuSeparator(filterEmptyBy);
            if (series) {
                PPSMA.ContextMenu.addToggleMenuOption(filterEmptyBy, PPSMA.SR.OlapContextMenu_EmptySeries, this._chartCtxName$0 + '.filterEmptyRow()', this._olapViewContext$0.get_resourcePath() + 'FilterEmpRowChart.gif', null, emptyRow, false);
            }
            if (point) {
                PPSMA.ContextMenu.addToggleMenuOption(filterEmptyBy, PPSMA.SR.OlapContextMenu_EmptyPoints, this._chartCtxName$0 + '.filterEmptyCol()', this._olapViewContext$0.get_resourcePath() + 'FilterEmpColChart.gif', null, emptyCol, false);
            }
        }
    },
    
    _addSortSubMenu$p$0: function PPSMA_OlapChart$_addSortSubMenu$p$0(canNavigate) {ULSO72:;
        if (canNavigate) {
            var enableSeriesSort = (this._pointsIndex$0 === this._olapViewContext$0.get_results().get_sortColIndex());
            var enableBottomAxisSort = (this._seriesIndex$0 === this._olapViewContext$0.get_results().get_sortRowIndex());
            var sortBy = PPSMA.ContextMenu.addSubMenu(this._currentMenu$0, PPSMA.SR.OlapContextMenu_Sort, this._olapViewContext$0.get_resourcePath() + 'Sort.gif', false);
            PPSMA.ContextMenu.addDisabledMenuOption(sortBy, PPSMA.SR.OlapContextMenu_SortSeries, null, this._olapViewContext$0.get_resourcePath() + 'ChartSeriesD.gif', false);
            PPSMA.ContextMenu.addMenuOption(sortBy, PPSMA.SR.OlapContextMenu_LargeToSmall, this._chartCtxName$0 + '.sort(\'2\',\'desc\')', this._olapViewContext$0.get_resourcePath() + 'SortAscNum.gif', null, enableSeriesSort && (this._olapViewContext$0.get_results().get_sortTypeRow() === 'desc'), true);
            PPSMA.ContextMenu.addMenuOption(sortBy, PPSMA.SR.OlapContextMenu_SmallToLarge, this._chartCtxName$0 + '.sort(\'2\',\'asc\');', this._olapViewContext$0.get_resourcePath() + 'SortDescNum.gif', null, enableSeriesSort && (this._olapViewContext$0.get_results().get_sortTypeRow() === 'asc'), true);
            PPSMA.ContextMenu.addMenuOption(sortBy, PPSMA.SR.OlapContextMenu_NoSort, this._chartCtxName$0 + '.sort(\'2\',\'nosort\');', null, null, false, true);
            PPSMA.ContextMenu.addMenuSeparator(sortBy);
            PPSMA.ContextMenu.addDisabledMenuOption(sortBy, PPSMA.SR.OlapContextMenu_SortPoints, null, this._olapViewContext$0.get_resourcePath() + 'ChartBottomAxisD.gif', false);
            PPSMA.ContextMenu.addMenuOption(sortBy, PPSMA.SR.OlapContextMenu_LargeToSmall, this._chartCtxName$0 + '.sort(\'1\',\'desc\');', this._olapViewContext$0.get_resourcePath() + 'SortAscNum.gif', null, enableBottomAxisSort && (this._olapViewContext$0.get_results().get_sortTypeCol() === 'desc'), true);
            PPSMA.ContextMenu.addMenuOption(sortBy, PPSMA.SR.OlapContextMenu_SmallToLarge, this._chartCtxName$0 + '.sort(\'1\',\'asc\');', this._olapViewContext$0.get_resourcePath() + 'SortDescNum.gif', null, enableBottomAxisSort && (this._olapViewContext$0.get_results().get_sortTypeCol() === 'asc'), true);
            PPSMA.ContextMenu.addMenuOption(sortBy, PPSMA.SR.OlapContextMenu_NoSort, this._chartCtxName$0 + '.sort(\'1\',\'nosort\');', null, null, false, true);
        }
    },
    
    _canDrillDownOnClick$p$0: function PPSMA_OlapChart$_canDrillDownOnClick$p$0(e) {ULSO72:;
        var member = this._getSelectedMember$p$0();
        return ((!e || PPSMA.EventsEx.isLeftClick(e)) && this.get__canNavigate$p$0() && member.get_hasChildren());
    },
    
    _populateAdditionActionsSubMenuItems$p$0: function PPSMA_OlapChart$_populateAdditionActionsSubMenuItems$p$0(sm) {ULSO72:;
        var xdoc = PPSMA.XmlEx.loadXml(this._olapViewContext$0.get_cellActionData());
        var urlActions = xdoc.getElementsByTagName('UrlAction');
        if ((urlActions) && (urlActions.length > 0)) {
            for (var i = 0; i < urlActions.length; i++) {
                PPSMA.ContextMenu.addMenuOption(sm, urlActions[i].getAttribute('caption'), this._chartCtxName$0 + '.handleShowUrlMenuClick(\'' + urlActions[i].getAttribute('content') + '\');', null, null, false, false);
            }
        }
        var ddActions = xdoc.getElementsByTagName('DDAction');
        if ((ddActions) && (ddActions.length > 0)) {
            for (var i = 0; i < ddActions.length; i++) {
                PPSMA.ContextMenu.addMenuOption(sm, ddActions[i].getAttribute('caption'), this._chartCtxName$0 + '.showDetails(\'' + ddActions[i].getAttribute('resulttableindex') + '\');', null, null, false, false);
            }
        }
        else {
            var elem = xdoc.getElementsByTagName('AdditionalActions');
            if (elem) {
                PPSMA.ContextMenu.addDisabledMenuOption(sm, elem[0].getAttribute('message'), null, null, false);
            }
        }
    },
    
    _populateDrillDownToSubMenuItems$p$0: function PPSMA_OlapChart$_populateDrillDownToSubMenuItems$p$0(sm) {ULSO72:;
        var drillFromMember = this._getSelectedMember$p$0();
        var drillFromHierarchy = this._getSelectedMemberHierarchy$p$0();
        if ((drillFromMember) && (drillFromHierarchy)) {
            var drillFromAxisId = 'R';
            if ((this._actionType$0 === PPSMA.ItemType.Points && this._ptActiveType$0 === PPSMA.ItemType.Points) || (this._actionType$0 === PPSMA.ItemType.Category)) {
                drillFromAxisId = 'C';
            }
            var helper = new PPSMA.DrillDownToHelper(drillFromMember, drillFromHierarchy, drillFromAxisId, this._olapViewContext$0);
            helper.populateSubMenuItems(sm, this._chartCtxName$0 + '.drillDownTo');
        }
    },
    
    get__canNavigate$p$0: function PPSMA_OlapChart$get__canNavigate$p$0() {ULSO72:;
        return this._olapViewContext$0.get_results().get_canNavigate();
    },
    
    get__isDesigner$p$0: function PPSMA_OlapChart$get__isDesigner$p$0() {ULSO72:;
        return this._olapViewContext$0.get_results().get_isDesigner();
    }
}


PPSMA.OlapChart.registerClass('PPSMA.OlapChart', null, PPSMA.OlapView);
PPSMA.OlapChart._ChartContextMenu = 'ChartContextMenu';
PPSMA.OlapChart._ptActiveTypes = null;
PPSMA.OlapChart._contextCancelDeltaX$p = 40;
PPSMA.OlapChart._contextCancelDeltaY$p = 40;

if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
if (typeof NotifyScriptLoadedAndExecuteWaitingJobs != "undefined")
    NotifyScriptLoadedAndExecuteWaitingJobs("analyticchart.js");
