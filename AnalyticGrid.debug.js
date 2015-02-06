function ULS0Fz(){var o=new Object;o.ULSTeamName="PerformancePoint Monitoring Service";o.ULSFileName="AnalyticGrid.debug.js";return o;}
// AnalyticGrid.js
//


Type.registerNamespace('PPSMA');

PPSMA.ReportLayoutEnum = function() {}
PPSMA.ReportLayoutEnum.prototype = {
    TabularForm: 0, 
    CompactForm: 1
}
PPSMA.ReportLayoutEnum.registerEnum('PPSMA.ReportLayoutEnum', false);


PPSMA.OlapGrid = function PPSMA_OlapGrid(gridCtxName, olapViewContext, isDefaultGridStyle) {ULS0Fz:;
    this.$$d_processFilterDialogResult = Function.createDelegate(this, this.processFilterDialogResult);
    this.$$d_handleOlapGridCallback = Function.createDelegate(this, this.handleOlapGridCallback);
    this.$$d_doShowContextMenu = Function.createDelegate(this, this.doShowContextMenu);
    this.$$d__handleOuterTagPropertyChange$p$0 = Function.createDelegate(this, this._handleOuterTagPropertyChange$p$0);
    this._gridCtxName$0 = gridCtxName;
    this._lastCell$0 = null;
    this._olapViewContext$0 = olapViewContext;
    this._subMenus$0 = [];
    this._isInPulpit$0 = false;
    this._viewInfoBar$0 = false;
    this._viewInfoBarDiv$0 = null;
    this._reportLayout$0 = PPSMA.ReportLayoutEnum.CompactForm;
    this._showProperties = new PPSMA.ShowProperties(this._gridCtxName$0, this._olapViewContext$0);
    this._changeMeasure = new PPSMA.ChangeMeasure(this._olapViewContext$0);
    this._valueFilter = new PPSMA.FilterDialog(this._olapViewContext$0, this._gridCtxName$0);
    this._isDefaultGridStyle$0 = isDefaultGridStyle;
    if (this._olapViewContext$0) {
        var outerTagDiv = $get(this._olapViewContext$0.get_outerTargetId());
        $clearHandlers(outerTagDiv);
        this._setSortAndFilterStatus$p$0(null, this._olapViewContext$0);
        outerTagDiv.attachEvent('onpropertychange', this.$$d__handleOuterTagPropertyChange$p$0);
    }
    var $$t_5 = this;
    $addHandler(document.body, 'touchstart', function(e) {
    });
}
PPSMA.OlapGrid._getTableColumnPosition$p = function PPSMA_OlapGrid$_getTableColumnPosition$p(currRow, cellIndex) {ULS0Fz:;
    var tableIndex = 0;
    var spanCount = 0;
    var currCell = currRow.firstChild;
    while (currCell && spanCount < cellIndex) {
        var colspan = currCell.getAttribute('colspan');
        if (!colspan) {
            colspan = '1';
        }
        spanCount += parseInt(colspan);
        if (spanCount <= cellIndex) {
            tableIndex++;
        }
        currCell = currCell.nextSibling;
    }
    return tableIndex;
}
PPSMA.OlapGrid._getCellFromElement$p = function PPSMA_OlapGrid$_getCellFromElement$p(elem) {ULS0Fz:;
    if ((elem) && (elem.tagName)) {
        if (PPSMA.DomElementEx.tagsMatch(elem.tagName, 'table')) {
            return elem;
        }
        if (PPSMA.DomElementEx.tagsMatch(elem.tagName, 'td')) {
            return elem;
        }
        if (PPSMA.DomElementEx.tagsMatch(elem.tagName, 'a') && PPSMA.DomElementEx.tagsMatch(elem.parentNode.tagName, 'td')) {
            return elem.parentNode;
        }
        if (PPSMA.DomElementEx.tagsMatch(elem.tagName, 'img') && PPSMA.DomElementEx.tagsMatch(elem.parentNode.tagName, 'a') && PPSMA.DomElementEx.tagsMatch(elem.parentNode.parentNode.tagName, 'td')) {
            return elem.parentNode.parentNode;
        }
        else {
            return null;
        }
    }
    return null;
}
PPSMA.OlapGrid._supportsRulesStandard$p = function PPSMA_OlapGrid$_supportsRulesStandard$p() {ULS0Fz:;
    var sheets = window.document.styleSheets;
    var isStandard = true;
    var rules = sheets[0].cssRules;
    if (isNullOrUndefined(rules)) {
        isStandard = false;
    }
    return isStandard;
}
PPSMA.OlapGrid._getSheet$p = function PPSMA_OlapGrid$_getSheet$p(sheetName) {ULS0Fz:;
    var sheets = window.document.styleSheets;
    var sheetCount = sheets.length;
    for (var i = 0; i < sheetCount; i++) {
        var href = sheets[i].href;
        if (!isNullUndefinedOrEmpty(href) && (href.toUpperCase().indexOf(sheetName.toUpperCase()) >= 0)) {
            return sheets[i];
        }
    }
    return null;
}
PPSMA.OlapGrid._replaceStyle$p = function PPSMA_OlapGrid$_replaceStyle$p(sheet, ruleName, ruleDef) {ULS0Fz:;
    var isStandard = PPSMA.OlapGrid._supportsRulesStandard$p();
    var rules;
    if (isStandard) {
        rules = sheet.cssRules;
    }
    else {
        rules = sheet.rules;
    }
    for (var i = 0; i < rules.length; i++) {
        if ((rules[i].selectorText).toLowerCase() === ruleName.toLowerCase()) {
            if (isStandard) {
                sheet.deleteRule(i);
                rules = sheet.cssRules;
            }
            else {
                sheet.removeRule(i);
            }
            break;
        }
    }
    if (isStandard) {
        var temp = ruleName + ' {';
        temp += ruleDef;
        temp += '}';
        sheet.insertRule(temp, rules.length);
    }
    else {
        sheet.addRule(ruleName, ruleDef);
    }
}
PPSMA.OlapGrid.prototype = {
    _gridCtxName$0: null,
    _lastCell$0: null,
    _olapViewContext$0: null,
    _subMenus$0: null,
    _isInPulpit$0: false,
    _viewInfoBar$0: false,
    _viewInfoBarDiv$0: null,
    _reportLayout$0: 0,
    _showProperties: null,
    _changeMeasure: null,
    _valueFilter: null,
    _isDefaultGridStyle$0: false,
    _screenTouchPositionX$p$0: 0,
    _screenTouchPositionY$p$0: 0,
    _lastTimeout$p$0: 0,
    _lastTouchEvent$p$0: null,
    
    _handleOuterTagPropertyChange$p$0: function PPSMA_OlapGrid$_handleOuterTagPropertyChange$p$0() {ULS0Fz:;
        var code = 'window.event.propertyName';
        var propertyName = eval(code);
        switch (propertyName) {
            case 'executeValueFilterRow':
                this.handleValueFilterMenuClick();
                break;
            case 'executeTopFilterRow':
                this.handleTopFilterMenuClick();
                break;
            case 'clearFilterRow':
                this.handleClearFilterMenuClick();
                break;
            case 'filterEmptyRows':
                this._filterEmptyRow$p$0();
                break;
            case 'filterEmptyCols':
                this._filterEmptyCol$p$0();
                break;
            case 'sortAscRow':
                this.handleSortMenuClick('asc');
                break;
            case 'sortDescRow':
                this.handleSortMenuClick('desc');
                break;
            case 'noSortRow':
                this.handleSortMenuClick('nosort');
                break;
            case 'MeasureGroupName':
                this.handleMeasureGroupNameChange();
                break;
        }
    },
    
    get_isDefaultGridStyle: function PPSMA_OlapGrid$get_isDefaultGridStyle() {ULS0Fz:;
        return this._isDefaultGridStyle$0;
    },
    
    get_reportLayout: function PPSMA_OlapGrid$get_reportLayout() {ULS0Fz:;
        return this._reportLayout$0;
    },
    set_reportLayout: function PPSMA_OlapGrid$set_reportLayout(value) {ULS0Fz:;
        this._reportLayout$0 = value;
        return value;
    },
    
    get_cubeMetadata: function PPSMA_OlapGrid$get_cubeMetadata() {ULS0Fz:;
        return null;
    },
    set_cubeMetadata: function PPSMA_OlapGrid$set_cubeMetadata(value) {ULS0Fz:;
        return value;
    },
    
    get__canNavigate$p$0: function PPSMA_OlapGrid$get__canNavigate$p$0() {ULS0Fz:;
        return this._olapViewContext$0.get_results().get_canNavigate();
    },
    
    get__isDesigner$p$0: function PPSMA_OlapGrid$get__isDesigner$p$0() {ULS0Fz:;
        return this._olapViewContext$0.get_results().get_isDesigner();
    },
    
    _getHeaderCellMember$p$0: function PPSMA_OlapGrid$_getHeaderCellMember$p$0(currCell) {ULS0Fz:;
        var member = null;
        if (currCell) {
            var rowPos = PPSMA.ReportsCommon.getCellRowPosition(currCell);
            var colPos = PPSMA.ReportsCommon.getCellColumnPosition(currCell);
            if ((rowPos !== -1) && (colPos !== -1)) {
                var cellTypeId = PPSMA.ReportsCommon.getCellTypeId(currCell);
                switch (cellTypeId) {
                    case 'R':
                        var rowMembers = this._olapViewContext$0.get_results().get_rowMembers();
                        member = rowMembers[rowPos][colPos];
                        break;
                    case 'C':
                        var colMembers = this._olapViewContext$0.get_results().get_columnMembers();
                        member = colMembers[colPos][rowPos];
                        break;
                    case 'D':
                    case 'P':
                        break;
                }
            }
        }
        return member;
    },
    
    _getHeaderTupleFormatDimMember$p$0: function PPSMA_OlapGrid$_getHeaderTupleFormatDimMember$p$0(currCell) {ULS0Fz:;
        var member = null;
        if (currCell) {
            var rowPos = PPSMA.ReportsCommon.getCellRowPosition(currCell);
            var colPos = PPSMA.ReportsCommon.getCellColumnPosition(currCell);
            if ((rowPos !== -1) && (colPos !== -1)) {
                var ndx;
                var cellTypeId = PPSMA.ReportsCommon.getCellTypeId(currCell);
                switch (cellTypeId) {
                    case 'R':
                        ndx = this._findHierarchy$p$0(this._olapViewContext$0.get_results().get_rowHierarchies(), this._olapViewContext$0.get_formatDimHierarchyName());
                        if (ndx >= 0) {
                            var rowMembers = this._olapViewContext$0.get_results().get_rowMembers();
                            member = rowMembers[rowPos][ndx];
                        }
                        break;
                    case 'C':
                        ndx = this._findHierarchy$p$0(this._olapViewContext$0.get_results().get_columnHierarchies(), this._olapViewContext$0.get_formatDimHierarchyName());
                        if (ndx >= 0) {
                            var colMembers = this._olapViewContext$0.get_results().get_columnMembers();
                            member = colMembers[colPos][ndx];
                        }
                        break;
                    case 'D':
                        ndx = this._findHierarchy$p$0(this._olapViewContext$0.get_results().get_columnHierarchies(), this._olapViewContext$0.get_formatDimHierarchyName());
                        if (ndx >= 0) {
                            var colMembers = this._olapViewContext$0.get_results().get_columnMembers();
                            member = colMembers[colPos][ndx];
                        }
                        else {
                            ndx = this._findHierarchy$p$0(this._olapViewContext$0.get_results().get_rowHierarchies(), this._olapViewContext$0.get_formatDimHierarchyName());
                            if (ndx >= 0) {
                                var rowMembers = this._olapViewContext$0.get_results().get_rowMembers();
                                member = rowMembers[rowPos][ndx];
                            }
                        }
                        break;
                    case 'P':
                        break;
                }
            }
        }
        return member;
    },
    
    _findHierarchy$p$0: function PPSMA_OlapGrid$_findHierarchy$p$0(searchHiers, targetHierName) {ULS0Fz:;
        var res = -1;
        for (var i = 0; i < searchHiers.length; i++) {
            var hier = searchHiers[i];
            if (hier.get_name() === targetHierName) {
                res = i;
                break;
            }
        }
        return res;
    },
    
    _setSelectedFormatDimMember$p$0: function PPSMA_OlapGrid$_setSelectedFormatDimMember$p$0(currCell) {ULS0Fz:;
        if (currCell) {
            var member = this._getHeaderTupleFormatDimMember$p$0(currCell);
            if (member) {
                this._olapViewContext$0.setOuterTagAttribute('selectedFormatMember', member.get_name());
            }
        }
    },
    
    _selectCell$p$0: function PPSMA_OlapGrid$_selectCell$p$0(currCell) {ULS0Fz:;
        if (this._lastCell$0) {
            Sys.UI.DomElement.removeCssClass(this._lastCell$0, PPSMA.OlapGrid._classSelected$p);
        }
        if (currCell) {
            if (!isNullUndefinedOrEmpty(currCell.tagName)) {
                if (PPSMA.DomElementEx.tagsMatch(currCell.tagName, 'div') || PPSMA.DomElementEx.tagsMatch(currCell.tagName, 'a')) {
                    currCell = currCell.parentNode;
                }
                else if (PPSMA.DomElementEx.tagsMatch(currCell.tagName, 'img')) {
                    currCell = currCell.parentNode.parentNode;
                }
            }
            else {
                if (PPSMA.DomElementEx.tagsMatch(currCell.parentNode.tagName, 'div')) {
                    currCell = currCell.parentNode.parentNode;
                }
                else if (PPSMA.DomElementEx.tagsMatch(currCell.parentNode.tagName, 'td')) {
                    currCell = currCell.parentNode;
                }
            }
            Sys.UI.DomElement.addCssClass(currCell, PPSMA.OlapGrid._classSelected$p);
            this._lastCell$0 = currCell;
            this._setSelectedFormatDimMember$p$0(currCell);
            this._setSortAndFilterStatus$p$0(currCell, this._olapViewContext$0);
        }
    },
    
    _setSortAndFilterStatus$p$0: function PPSMA_OlapGrid$_setSortAndFilterStatus$p$0(currCell, context) {ULS0Fz:;
        if (context && context.get_results()) {
            var filterState;
            if (this.get__canNavigate$p$0()) {
                var cellId = 'D';
                filterState = 'row:{0};col:{1};emptyrow:{2};emptycol:{3};sortrow:{4}';
                var filterRow = 'no';
                var filterCol = 'no';
                var filterEmptyRow = 'no';
                var filterEmptyCol = 'no';
                var sortrow = 'nosort';
                if (currCell) {
                    cellId = PPSMA.ReportsCommon.getCellTypeId(currCell);
                }
                else {
                    if (context.get_results().get_sortColIndex() === 1) {
                        sortrow = context.get_results().get_sortTypeRow();
                    }
                }
                if ((cellId === 'D') || (cellId === 'P') || (cellId === 'R')) {
                    if (context.get_results().get_valueFilterRow() === 1) {
                        filterRow = 'value';
                    }
                    if (context.get_results().get_topFilterRow() === 1) {
                        filterRow = 'top';
                    }
                }
                else {
                    filterRow = 'disable';
                    filterCol = 'disable';
                }
                if ((cellId === 'D') || (cellId === 'P') || (cellId === 'R')) {
                    if ((context.get_results().get_filterEmptyAxis() & 2) > 0) {
                        filterEmptyRow = 'yes';
                    }
                }
                else {
                    filterEmptyRow = 'disable';
                }
                if (cellId === 'D' || cellId === 'C') {
                    if ((context.get_results().get_filterEmptyAxis() & 1) > 0) {
                        filterEmptyCol = 'yes';
                    }
                }
                else {
                    filterEmptyCol = 'disable';
                }
                if (currCell && (PPSMA.ReportsCommon.getSortedCellColumnPosition(currCell) === context.get_results().get_sortColIndex())) {
                    sortrow = context.get_results().get_sortTypeRow();
                }
                if (cellId === 'P' || cellId === 'R') {
                    sortrow = 'disablesort';
                }
                filterState = String.format(filterState, filterRow, filterCol, filterEmptyRow, filterEmptyCol, sortrow);
            }
            else {
                filterState = 'disable';
            }
            context.setOuterTagAttribute('arFilterState', filterState);
        }
    },
    
    selectLinkCell: function PPSMA_OlapGrid$selectLinkCell(currCell) {ULS0Fz:;
        if (currCell) {
            this._selectCell$p$0(currCell.parentNode);
            if (currCell.innerHTML !== '' && PPSMA.DomElementEx.tagsMatch(currCell.firstChild.tagName, 'a')) {
                currCell.firstChild.focus();
            }
        }
    },
    
    _selectCellAndSetFocus$p$0: function PPSMA_OlapGrid$_selectCellAndSetFocus$p$0(currCell) {ULS0Fz:;
        if (currCell) {
            currCell.focus();
            this._selectCell$p$0(currCell);
        }
    },
    
    selectOlapReportAndFocus: function PPSMA_OlapGrid$selectOlapReportAndFocus() {ULS0Fz:;
        if (this.get__isDesigner$p$0()) {
            return;
        }
        var olapReport = $get(this._olapViewContext$0.get_ctrlProxyId() + '_ag');
        if (olapReport) {
            olapReport.focus();
        }
    },
    
    handleSingleClick: function PPSMA_OlapGrid$handleSingleClick(e) {ULS0Fz:;
        var currElem = PPSMA.EventsEx.getCurrentElement(e);
        var currCellLinkParent = currElem.parentNode;
        var contextId = this._olapViewContext$0.get_ctrlProxyId();
        var skipReportLink = $get(contextId + '_srlink');
        if (PPSMA.NewWindow.isInMoreAccessibleMode()) {
            if (currElem.tagName !== 'IMG') {
                if (currElem.tagName === 'A') {
                    this._selectCell$p$0(currCellLinkParent);
                    currElem.focus();
                }
                else {
                    this._selectCell$p$0(currElem);
                    if (currElem.firstChild) {
                        currElem.firstChild.focus();
                    }
                }
            }
        }
        else {
            if (PPSMA.DomElementEx.tagsMatch(currElem.tagName, 'img') && PPSMA.DomElementEx.tagsMatch(currElem.parentNode.tagName, 'a') && Sys.UI.DomElement.containsCssClass(currElem.parentNode, PPSMA.OlapGrid._classBubbleLink$p) && PPSMA.DomElementEx.tagsMatch(currElem.parentNode.parentNode.tagName, 'td')) {
                currElem = currElem.parentNode.parentNode;
            }
            if (PPSMA.DomElementEx.tagsMatch(currElem.tagName, 'a') && Sys.UI.DomElement.containsCssClass(currElem, PPSMA.OlapGrid._classBubbleLink$p) && PPSMA.DomElementEx.tagsMatch(currElem.parentNode.tagName, 'td')) {
                currElem = currElem.parentNode;
            }
            this._selectCell$p$0(currElem);
        }
    },
    
    selectLink: function PPSMA_OlapGrid$selectLink(e) {ULS0Fz:;
        var currEvent = PPSMA.EventsEx.getEvent(e);
        var rightClick = (currEvent.button === 2);
        var leftClick = (currEvent.button !== 2);
        if (leftClick || rightClick) {
            var currCell = PPSMA.EventsEx.getCurrentElement(currEvent);
            this.selectLinkCell(currCell);
            this._isInPulpit$0 = (PPSMA.DomElementEx.tagsMatch(currCell.tagName, 'a') && rightClick);
        }
    },
    
    handleContextMenu: function PPSMA_OlapGrid$handleContextMenu(e) {ULS0Fz:;
        Array.clear(this._subMenus$0);
        var currElem = PPSMA.EventsEx.getCurrentElement(e);
        var currCell = PPSMA.OlapGrid._getCellFromElement$p(currElem);
        var x;
        var y;
        if ((e).keyCode === 93 || ((e).shiftKey && (e).keyCode === 121) || !currCell || PPSMA.DomElementEx.tagsMatch(currCell.tagName, 'table')) {
            x = 0;
            y = 0;
        }
        else {
            var xy = this._getContextMenuOffset$p$0(e);
            x = xy[0];
            y = xy[1];
            if (x < 0) {
                x = 0;
            }
            if (y < 0) {
                y = 0;
            }
        }
        PPSMA.ContextMenu.neutralizeBrowserMenu(new Sys.UI.DomEvent(e));
        PPSMA.ContextMenu.createForReportsNScorecards(currCell, this, x, y, this._isInPulpit$0);
    },
    
    _getContextMenuOffset$p$0: function PPSMA_OlapGrid$_getContextMenuOffset$p$0(e) {ULS0Fz:;
        var src = e.srcElement;
        if (src) {
            if (PPSMA.DomElementEx.tagsMatch(src.tagName, 'a') || PPSMA.DomElementEx.tagsMatch(src.tagName, 'td') || PPSMA.DomElementEx.tagsMatch(src.tagName, 'img') || PPSMA.DomElementEx.tagsMatch(src.tagName, 'span') || PPSMA.DomElementEx.tagsMatch(src.tagName, 'div')) {
                if (!isNullOrUndefined(src.id) && src.id.endsWith(PPSMA.OlapGrid._pulpitLinkIdSuffix$p)) {
                    var eox = e.offsetX;
                    var eoy = e.offsetY;
                    var ex = e.x;
                    var ey = e.y;
                    if (isNaN(eox) && isNaN(ex)) {
                        return [ src.offsetLeft, src.offsetTop ];
                    }
                    else if (!isNaN(eox) && !isNaN(ex)) {
                        return [ Math.min.call(null, eox, ex), Math.min.call(null, eoy, ey) ];
                    }
                    else if (!isNaN(eox)) {
                        return [ eox, eoy ];
                    }
                    else if (!isNaN(ex)) {
                        return [ ex, ey ];
                    }
                }
                var point = PPSMA.EventsEx.getEventOffset(e);
                return [ point.x, point.y ];
            }
        }
        return [ 0, 0 ];
    },
    
    hideViewInfoBarCtxMenu: function PPSMA_OlapGrid$hideViewInfoBarCtxMenu(e) {ULS0Fz:;
        var currEvent = PPSMA.EventsEx.getEvent(e);
        if (currEvent.button === 2) {
            this._viewInfoBar$0 = true;
            Array.clear(this._subMenus$0);
            var currElement = PPSMA.EventsEx.getCurrentElement(e);
            this._viewInfoBarDiv$0 = PPSMA.OlapViewContext.getViewInfoDiv(currElement);
            var xy = this._getContextMenuOffset$p$0(e);
            var location;
            if (PPSMA.DomElementEx.tagsMatch(currElement.tagName, 'a')) {
                location = Sys.UI.DomElement.getLocation(currElement);
                xy[0] = location.x;
                xy[1] = location.y;
            }
            else if (PPSMA.DomElementEx.tagsMatch(currElement.tagName, PPSMA.OlapGrid._span$p) && Sys.UI.DomElement.containsCssClass(currElement, PPSMA.OlapGrid._infoBarCloaseIconWrapperDiv$p)) {
                if (e.target) {
                    xy[0] = e.target.offsetLeft;
                    xy[1] = e.target.offsetTop;
                }
                else {
                    xy[0] = currElement.offsetLeft;
                    xy[1] = currElement.offsetTop;
                }
            }
            else if (PPSMA.DomElementEx.tagsMatch(currElement.tagName, PPSMA.OlapGrid._span$p)) {
                location = Sys.UI.DomElement.getLocation(currElement);
                currElement = currElement.parentNode;
                if (!e.target) {
                    xy[0] -= location.x;
                    xy[1] -= location.y;
                }
            }
            PPSMA.ContextMenu.neutralizeBrowserMenu(new Sys.UI.DomEvent(e));
            PPSMA.ContextMenu.createForReportsNScorecards(currElement, this, xy[0], xy[1], false);
        }
    },
    
    handleKeyEvent: function PPSMA_OlapGrid$handleKeyEvent(e) {ULS0Fz:;
        var bubbleEvent = true;
        var currEvent = PPSMA.EventsEx.getEvent(e);
        var contextId = this._olapViewContext$0.get_ctrlProxyId();
        var currElement = PPSMA.EventsEx.getCurrentElement(e);
        var skipReportLink = $get(contextId + '_srlink');
        if (Sys.UI.DomElement.containsCssClass(currElement, PPSMA.OlapGrid._classBubbleLink$p)) {
            return bubbleEvent;
        }
        if (PPSMA.DomElementEx.tagsMatch(currElement.tagName, 'a')) {
            if (skipReportLink) {
                if (currElement.id !== skipReportLink.id) {
                    currElement = currElement.parentNode;
                }
            }
            else {
                currElement = currElement.parentNode;
            }
        }
        var maybeCell = currElement;
        if (maybeCell.nodeType === 3 && PPSMA.DomElementEx.tagsMatch(maybeCell.parentNode.tagName, 'td')) {
            maybeCell = maybeCell.parentNode;
        }
        else if (maybeCell.nodeType === 3 && PPSMA.DomElementEx.tagsMatch(maybeCell.parentNode.tagName, 'a') && PPSMA.DomElementEx.tagsMatch(maybeCell.parentNode.parentNode.tagName, 'td')) {
            maybeCell = maybeCell.parentNode.parentNode;
        }
        else if (PPSMA.DomElementEx.tagsMatch(maybeCell.tagName, 'a') && PPSMA.DomElementEx.tagsMatch(maybeCell.parentNode.tagName, 'td')) {
            maybeCell = maybeCell.parentNode.parentNode;
        }
        else if (PPSMA.DomElementEx.tagsMatch(maybeCell.tagName, 'table')) {
            maybeCell = this._lastCell$0;
        }
        if (!maybeCell || (maybeCell.nodeType === 3 || (maybeCell.nodeType !== 3 && !PPSMA.DomElementEx.tagsMatch(maybeCell.tagName, 'td')))) {
            return bubbleEvent;
        }
        var currCell = maybeCell;
        var cIndex = currCell.cellIndex;
        var keyPressed = (currEvent).keyCode;
        var keyLeft = 37;
        var keyRight = 39;
        var keyUp = 38;
        var keyDown = 40;
        var keySpace = 32;
        var keyEnter = 13;
        var singleHierCount = 1;
        var rowHierCount;
        var rowHiers = this._olapViewContext$0.get_results().get_rowHierarchies();
        rowHierCount = rowHiers.length;
        var pulpitHierCount = 0;
        if (this._reportLayout$0 === PPSMA.ReportLayoutEnum.CompactForm) {
            if (!rowHierCount) {
                pulpitHierCount = 1;
            }
            else {
                pulpitHierCount = 2;
            }
        }
        if (!this._reportLayout$0) {
            pulpitHierCount = singleHierCount + rowHierCount;
        }
        var memberPropertyCount = this._showProperties.getTotalMemberPropertyCount();
        var overallCount = pulpitHierCount + memberPropertyCount;
        switch (keyPressed) {
            case keyLeft:
                if (currCell.previousSibling) {
                    currCell = currCell.previousSibling;
                    currCell.focus();
                    this._selectCell$p$0(currCell);
                    if (currCell.innerHTML !== '') {
                        if (PPSMA.DomElementEx.tagsMatch(currCell.firstChild.tagName, 'a')) {
                            currCell.firstChild.focus();
                        }
                    }
                }
                bubbleEvent = false;
                break;
            case keyUp:
                if (currCell.parentNode.previousSibling) {
                    var colPosition = PPSMA.ReportsCommon.getCellColumnPosition(currCell);
                    var cellId = PPSMA.ReportsCommon.getCellTypeId(this._lastCell$0);
                    if ((cellId === 'C') || (cellId === 'D')) {
                        if (colPosition > 0 && cIndex > 0) {
                            colPosition = colPosition - currCell.colSpan + overallCount;
                            colPosition = PPSMA.OlapGrid._getTableColumnPosition$p(currCell.parentNode.previousSibling, colPosition);
                        }
                        else {
                            colPosition = cIndex;
                        }
                    }
                    else {
                        colPosition = cIndex;
                    }
                    currCell = currCell.parentNode.previousSibling.childNodes[colPosition];
                    currCell.focus();
                    this._selectCell$p$0(currCell);
                    if (currCell.innerHTML !== '') {
                        if (PPSMA.DomElementEx.tagsMatch(currCell.firstChild.tagName, 'a')) {
                            currCell.firstChild.focus();
                        }
                    }
                }
                bubbleEvent = false;
                break;
            case keyRight:
                if (currCell.nextSibling) {
                    currCell = currCell.nextSibling;
                    currCell.focus();
                    this._selectCell$p$0(currCell);
                }
                bubbleEvent = false;
                break;
            case keyDown:
                if (currCell.parentNode.nextSibling) {
                    var colPosition = PPSMA.ReportsCommon.getCellColumnPosition(currCell);
                    var cellId = PPSMA.ReportsCommon.getCellTypeId(this._lastCell$0);
                    if ((cellId === 'C') || (cellId === 'D')) {
                        if (colPosition > 0 && cIndex > 0) {
                            colPosition = colPosition - currCell.colSpan + overallCount;
                            colPosition = PPSMA.OlapGrid._getTableColumnPosition$p(currCell.parentNode.nextSibling, colPosition);
                        }
                        else {
                            colPosition = cIndex;
                        }
                    }
                    else {
                        colPosition = cIndex;
                    }
                    currCell = currCell.parentNode.nextSibling.childNodes[colPosition];
                    currCell.focus();
                    this._selectCell$p$0(currCell);
                }
                bubbleEvent = false;
                break;
            case keyEnter:
                if (skipReportLink) {
                    if (currElement.id === skipReportLink.id) {
                        this.handleSkipReport(e);
                    }
                    else {
                        currCell.focus();
                        this._selectCell$p$0(currCell);
                        this.handleContextMenu(e);
                    }
                }
                else {
                    bubbleEvent = false;
                }
                break;
            case keySpace:
                var currMbr = this._getHeaderCellMember$p$0(this._lastCell$0);
                if (currMbr) {
                    if (currMbr.get_drilledDown()) {
                        this._collapseCell$p$0(this._lastCell$0);
                    }
                    else {
                        this._expandCell$p$0(this._lastCell$0);
                    }
                }
                break;
        }
        return bubbleEvent;
    },
    
    handleTabEvent: function PPSMA_OlapGrid$handleTabEvent(e) {ULS0Fz:;
        var pulpitAnchor = PPSMA.EventsEx.getCurrentElement(e);
        var currCell = pulpitAnchor.parentNode;
        this._selectCell$p$0(currCell);
    },
    
    handleDeselectCell: function PPSMA_OlapGrid$handleDeselectCell(e) {ULS0Fz:;
        var currCell = PPSMA.EventsEx.getCurrentElement(e);
        if (PPSMA.DomElementEx.tagsMatch(currCell.tagName, 'a')) {
            currCell = currCell.parentNode;
        }
        else if (PPSMA.DomElementEx.tagsMatch(currCell.tagName, 'td')) {
            currCell = currCell.parentNode;
        }
        Sys.UI.DomElement.removeCssClass(currCell, PPSMA.OlapGrid._classSelected$p);
    },
    
    handleDoubleClick: function PPSMA_OlapGrid$handleDoubleClick(e) {ULS0Fz:;
        window.document.onselectstart = eval('new Function(\'return false;\')');
        document.selection.empty();
        var currCell = PPSMA.EventsEx.getCurrentElement(e);
        this._drillDownCell$p$0(currCell);
    },
    
    handleExpandClick: function PPSMA_OlapGrid$handleExpandClick(e) {ULS0Fz:;
        var elem = PPSMA.EventsEx.getCurrentElement(e);
        var currCell = null;
        if (elem) {
            if (PPSMA.DomElementEx.tagsMatch(elem.tagName, 'img') && elem.className.toLowerCase().startsWith(PPSMA.OlapGrid._classExcoImg$p.toLowerCase())) {
                currCell = elem.parentNode.parentNode;
            }
            else if (PPSMA.DomElementEx.tagsMatch(elem.tagName, 'a') && elem.className.toLowerCase().startsWith(PPSMA.OlapGrid._classExcoA$p.toLowerCase())) {
                currCell = elem.parentNode;
            }
            if (currCell) {
                this._expandCell$p$0(currCell);
            }
            var evnt = new Sys.UI.DomEvent(e);
            evnt.preventDefault();
            evnt.stopPropagation();
        }
    },
    
    handleCollapseClick: function PPSMA_OlapGrid$handleCollapseClick(e) {ULS0Fz:;
        var elem = PPSMA.EventsEx.getCurrentElement(e);
        var currCell = null;
        if (elem) {
            if (PPSMA.DomElementEx.tagsMatch(elem.tagName, 'img') && elem.className.toLowerCase().startsWith(PPSMA.OlapGrid._classExcoImg$p.toLowerCase())) {
                currCell = elem.parentNode.parentNode;
            }
            else if (PPSMA.DomElementEx.tagsMatch(elem.tagName, 'a') && elem.className.toLowerCase().startsWith(PPSMA.OlapGrid._classExcoA$p.toLowerCase())) {
                currCell = elem.parentNode;
            }
            if (currCell) {
                this._collapseCell$p$0(currCell);
            }
            var evnt = new Sys.UI.DomEvent(e);
            evnt.preventDefault();
            evnt.stopPropagation();
        }
    },
    
    doShowContextMenu: function PPSMA_OlapGrid$doShowContextMenu() {ULS0Fz:;
        this.handleSingleClick(this._lastTouchEvent$p$0);
        this.handleContextMenu(this._lastTouchEvent$p$0);
    },
    
    handleTouchStart: function PPSMA_OlapGrid$handleTouchStart(e) {ULS0Fz:;
        if (e.touches.length == 1){;
        this._lastTouchEvent$p$0 = e;
        this._lastTimeout$p$0 = window.setTimeout(this.$$d_doShowContextMenu, 1500);
        if(e.touches != undefined && e.touches[0] != undefined){ this._screenTouchPositionX = e.touches[0].screenX; this._screenTouchPositionY = e.touches[0].screenY; };
        }else{;
        window.clearTimeout(this._lastTimeout$p$0);
        };
    },
    
    handleTouchMove: function PPSMA_OlapGrid$handleTouchMove(e) {ULS0Fz:;
        if(e.targetTouches != undefined && e.targetTouches[0] != undefined){if (Math.abs(e.targetTouches[0].screenX - this._screenTouchPositionX) >= PPSMA.OlapGrid._contextCancelDeltaX || Math.abs(e.targetTouches[0].screenY - this._screenTouchPositionY) >= PPSMA.OlapGrid._contextCancelDeltaX){window.clearTimeout(this.lastTimeout);}};
    },
    
    handleTouchEnd: function PPSMA_OlapGrid$handleTouchEnd(e) {ULS0Fz:;
        window.clearTimeout(this._lastTimeout$p$0);
    },
    
    handleTouchCancel: function PPSMA_OlapGrid$handleTouchCancel(e) {ULS0Fz:;
        window.clearTimeout(this._lastTimeout$p$0);
    },
    
    addPrimaryMenuItems: function PPSMA_OlapGrid$addPrimaryMenuItems(m) {ULS0Fz:;
        var member = this._getHeaderCellMember$p$0(this._lastCell$0);
        var hierarchy = PPSMA.ReportsCommon.getHeaderCellHierarchy(this._olapViewContext$0, this._lastCell$0);
        var helper = new PPSMA.MenuOptionHelper(member, hierarchy, this.get__canNavigate$p$0(), this._olapViewContext$0);
        if (this._viewInfoBar$0) {
            helper.showHideInfo(m, this._gridCtxName$0 + '.handleShowHideInfoByDiv();', false);
            this._viewInfoBar$0 = false;
            return (helper.get_optionsAdded() > 0);
        }
        var cellId = PPSMA.ReportsCommon.getCellTypeId(this._lastCell$0);
        if ((cellId === 'R') || (cellId === 'C') || (cellId === 'P')) {
            if ((cellId === 'R') || (cellId === 'C')) {
                if (member) {
                    helper.drillDown(m, this._gridCtxName$0 + '.handleDrillDownMenuClick();', false);
                    var drillDownTo = helper.drillDownTo(m, this._gridCtxName$0 + '.fetchCallback(' + this._subMenus$0.length + ')', this._gridCtxName$0 + '.populateCallback(' + this._subMenus$0.length + ')', this._gridCtxName$0 + '.hoverOffCallback(' + this._subMenus$0.length + ')', false);
                    if (drillDownTo) {
                        var ddtSubMenu = new PPSMA.SubMenu(drillDownTo, 0);
                        Array.add(this._subMenus$0, ddtSubMenu);
                    }
                    helper.drillUp(m, this._gridCtxName$0 + '.handleDrillUpMenuClick();', false);
                    if ((this._reportLayout$0 === PPSMA.ReportLayoutEnum.CompactForm) || (cellId === 'C')) {
                        helper.expandCollapse(m, this._gridCtxName$0 + '.handleExpandMenuClick();', this._gridCtxName$0 + '.handleCollapseMenuClick();', false);
                    }
                    helper.showOnly(m, this._gridCtxName$0 + '.handleShowOnlyMenuClick();', false);
                    helper.remove(m, this._gridCtxName$0 + '.handleRemoveMenuClick();', false);
                }
            }
            if (this.get__canNavigate$p$0()) {
                if ((cellId === 'R') && (member)) {
                    helper.showChangeMeasure(m, this._gridCtxName$0 + '.handleShowChangeMeasureMenuClick();', this.get__isDesigner$p$0(), false);
                    PPSMA.ContextMenu.addMenuSeparator(m);
                    helper.showProperties(m, this._gridCtxName$0 + '.handleShowPropertiesMenuClick();', false, this._showProperties.isEnabled(this._lastCell$0));
                    PPSMA.ContextMenu.addMenuSeparator(m);
                }
                if (cellId === 'P') {
                    helper.showChangeMeasure(m, this._gridCtxName$0 + '.handleShowChangeMeasureMenuClick();', this.get__isDesigner$p$0(), false);
                    helper.showProperties(m, this._gridCtxName$0 + '.handleShowPropertiesMenuClick();', false, this._showProperties.isEnabled(this._lastCell$0));
                    PPSMA.ContextMenu.addMenuSeparator(m);
                }
                if (cellId === 'C') {
                    helper.showChangeMeasure(m, this._gridCtxName$0 + '.handleShowChangeMeasureMenuClick();', this.get__isDesigner$p$0(), false);
                    PPSMA.ContextMenu.addMenuSeparator(m);
                    this._addSortSubMenu$p$0(m);
                }
                if (cellId === 'P' || cellId === 'R' || cellId === 'C') {
                    this._addFilterEmptySubMenu$p$0(m, cellId);
                }
                helper.pivot(m, this._gridCtxName$0 + '.handlePivotMenuClick();', false);
            }
        }
        else if (cellId === 'D') {
            if (!this.get__isDesigner$p$0()) {
                var enabled = true;
                if (this._lastCell$0.innerHTML === '') {
                    enabled = false;
                }
                helper.decompositionTree(m, this._gridCtxName$0 + '.handleAnalyzeInDecompMenuClick(\'\');', false, enabled, this.get__isDesigner$p$0());
                var hasAggregatedBGHiers = helper.hasAggregatedBackGroundHierarchies();
                if (hasAggregatedBGHiers) {
                    enabled = false;
                }
                helper.showDetails(m, this._gridCtxName$0 + '.handleShowDetailsMenuClick(\'\');', false, enabled);
                var addActionsEnabled = true;
                var aggregateValue = this._lastCell$0.getAttribute('rt');
                if ((aggregateValue) && (aggregateValue === 'aggr')) {
                    addActionsEnabled = false;
                }
                if (helper.hasAggregatedBackGroundHierarchies()) {
                    addActionsEnabled = false;
                }
                if (addActionsEnabled) {
                    this._olapViewContext$0.set_cellActionData(null);
                }
                var addActions = helper.additionalActions(m, this._gridCtxName$0 + '.fetchCallback(' + this._subMenus$0.length + ')', this._gridCtxName$0 + '.populateCallback(' + this._subMenus$0.length + ')', this._gridCtxName$0 + '.hoverOffCallback(' + this._subMenus$0.length + ')', false, addActionsEnabled);
                if (addActions) {
                    var aaSubMenu = new PPSMA.SubMenu(addActions, PPSMA.SubMenuType.AddActions);
                    Array.add(this._subMenus$0, aaSubMenu);
                }
            }
            if (this.get__canNavigate$p$0()) {
                PPSMA.ContextMenu.addMenuSeparator(m);
                helper.showChangeMeasure(m, this._gridCtxName$0 + '.handleShowChangeMeasureMenuClick();', this.get__isDesigner$p$0(), false);
                PPSMA.ContextMenu.addMenuSeparator(m);
                this._addSortSubMenu$p$0(m);
                this._addFilterEmptySubMenu$p$0(m, cellId);
                helper.pivot(m, this._gridCtxName$0 + '.handlePivotMenuClick();', false);
            }
        }
        else if (((cellId === 'Z') || (cellId === 'Y')) && this.get__canNavigate$p$0()) {
            var enabled = this._showProperties.isEnabled(this._lastCell$0);
            helper.showProperties(m, this._gridCtxName$0 + '.handleShowPropertiesMenuClick();', false, enabled);
            this._addHidePropertiesSubMenu$p$0(m, helper);
            PPSMA.ContextMenu.addMenuSeparator(m);
            helper.pivot(m, this._gridCtxName$0 + '.handlePivotMenuClick();', false);
        }
        if (this.get__canNavigate$p$0()) {
            this._addFormattingSubMenus$p$0(m, helper);
        }
        helper.showHideInfo(m, this._gridCtxName$0 + '.handleShowHideInfoMenuClick();', false);
        return (helper.get_optionsAdded() > 0);
    },
    
    _addFilterEmptySubMenu$p$0: function PPSMA_OlapGrid$_addFilterEmptySubMenu$p$0(parentMenu, cellId) {ULS0Fz:;
        var filterEmptyAxis = this._olapViewContext$0.get_results().get_filterEmptyAxis();
        if (this._olapViewContext$0.get_results().get_filterEmptyAxis() === -1) {
            return;
        }
        var emptyRow = (filterEmptyAxis & 2) > 0;
        var emptyCol = (filterEmptyAxis & 1) > 0;
        var filterEmptyBy = PPSMA.ContextMenu.addSubMenu(parentMenu, PPSMA.SR.OlapContextMenu_Filter, '/_layouts/15/images/filter.gif', false);
        if ((cellId === 'D') || (cellId === 'P') || (cellId === 'R')) {
            var valueFilterSet = (this._olapViewContext$0.get_results().get_valueFilterRow() === 1);
            var topFilterSet = (this._olapViewContext$0.get_results().get_topFilterRow() === 1);
            if (valueFilterSet || topFilterSet) {
                PPSMA.ContextMenu.addMenuOption(filterEmptyBy, PPSMA.SR.OlapContextMenu_ClearFilter, this._gridCtxName$0 + '.handleClearFilterMenuClick();', this._olapViewContext$0.get_resourcePath() + 'ClearFilter.gif', '', false, false);
            }
            else {
                PPSMA.ContextMenu.addDisabledMenuOption(filterEmptyBy, PPSMA.SR.OlapContextMenu_ClearFilter, null, this._olapViewContext$0.get_resourcePath() + 'ClearFilterD.gif', false);
            }
            if (!isNullUndefinedOrEmpty(this._olapViewContext$0.get_results().get_rowMembers()) && this._olapViewContext$0.get_results().get_rowMembers().length > 0) {
                PPSMA.ContextMenu.addMenuOption(filterEmptyBy, PPSMA.SR.OlapContextMenu_ValueFilter, this._gridCtxName$0 + '.handleValueFilterMenuClick();', (valueFilterSet) ? this._olapViewContext$0.get_resourcePath() + 'Check.gif' : '', '', false, false);
                PPSMA.ContextMenu.addMenuOption(filterEmptyBy, PPSMA.SR.OlapContextMenu_TopFilter, this._gridCtxName$0 + '.handleTopFilterMenuClick();', (topFilterSet) ? this._olapViewContext$0.get_resourcePath() + 'Check.gif' : '', '', false, false);
            }
            PPSMA.ContextMenu.addMenuSeparator(filterEmptyBy);
        }
        if ((cellId === 'D') || (cellId === 'P') || (cellId === 'R')) {
            PPSMA.ContextMenu.addToggleMenuOption(filterEmptyBy, PPSMA.SR.OlapContextMenu_EmptyRows, this._gridCtxName$0 + '.handleFilterEmptyRowMenuClick();', this._olapViewContext$0.get_resourcePath() + 'FilterEmpRow.gif', '', emptyRow, false);
        }
        if (cellId === 'D' || cellId === 'C') {
            PPSMA.ContextMenu.addToggleMenuOption(filterEmptyBy, PPSMA.SR.OlapContextMenu_EmptyCols, this._gridCtxName$0 + '.handleFilterEmptyColMenuClick();', this._olapViewContext$0.get_resourcePath() + 'FilterEmpCol.gif', '', emptyCol, false);
        }
    },
    
    _addHidePropertiesSubMenu$p$0: function PPSMA_OlapGrid$_addHidePropertiesSubMenu$p$0(m, helper) {ULS0Fz:;
        var rIndex = PPSMA.ReportsCommon.getCellRowPosition(this._lastCell$0);
        var cIndex = PPSMA.ReportsCommon.getCellColumnPosition(this._lastCell$0);
        var rowHiers = this._olapViewContext$0.get_results().get_rowHierarchies();
        var selectedHier = rowHiers[rIndex];
        var memberProperties = selectedHier.get_memberProperties();
        var memberPropertyCaptions = memberProperties.get_captions();
        var memberPropertyNames = memberProperties.get_names();
        var propertyCaption = memberPropertyCaptions[cIndex];
        if (propertyCaption.length > 20) {
            propertyCaption = propertyCaption.substring(0, 20) + PPSMA.SR.OlapPropertiesDialog_LongStringPadding;
        }
        helper.hideProperty(m, String.format(PPSMA.SR.OlapContextMenu_HideProperty, propertyCaption), this._gridCtxName$0 + '._showProperties.handleHidePropertyMenuClick(\"' + selectedHier.get_name() + '\", \"' + memberPropertyNames[cIndex] + '\");', false);
    },
    
    _addSortSubMenu$p$0: function PPSMA_OlapGrid$_addSortSubMenu$p$0(parentMenu) {ULS0Fz:;
        var enableRowSort = (PPSMA.ReportsCommon.getSortedCellColumnPosition(this._lastCell$0) === this._olapViewContext$0.get_results().get_sortColIndex());
        var sortBy = PPSMA.ContextMenu.addSubMenu(parentMenu, PPSMA.SR.OlapContextMenu_Sort, this._olapViewContext$0.get_resourcePath() + 'Sort.gif', false);
        PPSMA.ContextMenu.addMenuOption(sortBy, PPSMA.SR.OlapContextMenu_LargeToSmall, this._gridCtxName$0 + '.handleSortMenuClick(\'desc\');', this._olapViewContext$0.get_resourcePath() + 'SortAscNum.gif', null, enableRowSort && (this._olapViewContext$0.get_results().get_sortTypeRow() === 'desc'), false);
        PPSMA.ContextMenu.addMenuOption(sortBy, PPSMA.SR.OlapContextMenu_SmallToLarge, this._gridCtxName$0 + '.handleSortMenuClick(\'asc\');', this._olapViewContext$0.get_resourcePath() + 'SortDescNum.gif', null, enableRowSort && (this._olapViewContext$0.get_results().get_sortTypeRow() === 'asc'), false);
        PPSMA.ContextMenu.addMenuOption(sortBy, PPSMA.SR.OlapContextMenu_NoSort, this._gridCtxName$0 + '.handleSortMenuClick(\'nosort\');', null, null, true, false);
    },
    
    _addFormattingSubMenus$p$0: function PPSMA_OlapGrid$_addFormattingSubMenus$p$0(m, helper) {ULS0Fz:;
        PPSMA.ContextMenu.addMenuSeparator(m);
        helper.reportTypeSubMenu(m, this._gridCtxName$0, 0);
        this._addFormatReportSubMenu$p$0(m, helper);
    },
    
    _addFormatReportSubMenu$p$0: function PPSMA_OlapGrid$_addFormatReportSubMenu$p$0(m, helper) {ULS0Fz:;
        var formatSubMenu = helper.formatReportSubMenu(m, false);
        PPSMA.ContextMenu.addMenuOption(formatSubMenu, PPSMA.SR.OlapContextMenu_CompactLayout, this._gridCtxName$0 + '.handleFormatReportMenuClick(1);', this._olapViewContext$0.get_resourcePath() + 'LayoutCompact.gif', null, this._reportLayout$0 === PPSMA.ReportLayoutEnum.CompactForm, false);
        PPSMA.ContextMenu.addMenuOption(formatSubMenu, PPSMA.SR.OlapContextMenu_TabularLayout, this._gridCtxName$0 + '.handleFormatReportMenuClick(0);', this._olapViewContext$0.get_resourcePath() + 'LayoutTabular.gif', null, !this._reportLayout$0, false);
    },
    
    fetchCallback: function PPSMA_OlapGrid$fetchCallback(smIndex) {ULS0Fz:;
        var smProps = this._subMenus$0[smIndex];
        if (smProps) {
            smProps.set_hoverOn(true);
            switch (smProps.get_menuType()) {
                case PPSMA.SubMenuType.AddActions:
                    if (isNullUndefinedOrEmpty(this._olapViewContext$0.get_cellActionData()) && !this._alreadyFetching$0) {
                        this._alreadyFetching$0 = true;
                        var rIndex = PPSMA.ReportsCommon.getCellRowPosition(this._lastCell$0);
                        var cIndex = PPSMA.ReportsCommon.getCellColumnPosition(this._lastCell$0);
                        var detailsHelper = new PPSMA.DetailsHelper(this._olapViewContext$0, this._gridCtxName$0, rIndex, cIndex, '');
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
    
    populateCallback: function PPSMA_OlapGrid$populateCallback(smIndex) {ULS0Fz:;
        var smProps = this._subMenus$0[smIndex];
        if (smProps && smProps.get_hoverOn()) {
            var sm = smProps.get_menu();
            var bPopulated = smProps.get_isPopulated();
            if (!bPopulated) {
                PPSMA.ContextMenu.removeAllButFirst(sm);
                switch (smProps.get_menuType()) {
                    case PPSMA.SubMenuType.AddActions:
                        if (!isNullUndefinedOrEmpty(this._olapViewContext$0.get_cellActionData())) {
                            this._populateAdditionActionsSubMenuItems$p$0(sm);
                            smProps.set_isPopulated(true);
                            this._alreadyFetching$0 = false;
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
    
    hoverOffCallback: function PPSMA_OlapGrid$hoverOffCallback(smIndex) {ULS0Fz:;
        var smProps = this._subMenus$0[smIndex];
        if (smProps) {
            smProps.set_hoverOn(false);
        }
    },
    
    _populateAdditionActionsSubMenuItems$p$0: function PPSMA_OlapGrid$_populateAdditionActionsSubMenuItems$p$0(sm) {ULS0Fz:;
        var xdoc = PPSMA.XmlEx.loadXml(this._olapViewContext$0.get_cellActionData());
        var actionsCount = 0;
        var urlActions = xdoc.getElementsByTagName('UrlAction');
        if ((urlActions) && (urlActions.length > 0)) {
            for (var i = 0; i < urlActions.length; i++) {
                PPSMA.ContextMenu.addMenuOption(sm, urlActions[i].getAttribute('caption'), this._gridCtxName$0 + '.handleShowUrlMenuClick(\'' + urlActions[i].getAttribute('content') + '\');', null, null, false, false);
                ++actionsCount;
            }
        }
        var ddActions = xdoc.getElementsByTagName('DDAction');
        if ((ddActions) && (ddActions.length > 0)) {
            for (var i = 0; i < ddActions.length; i++) {
                PPSMA.ContextMenu.addMenuOption(sm, ddActions[i].getAttribute('caption'), this._gridCtxName$0 + '.handleShowDetailsMenuClick(\'' + ddActions[i].getAttribute('resulttableindex') + '\');', null, null, false, false);
                ++actionsCount;
            }
        }
        if (!actionsCount) {
            var elem = xdoc.getElementsByTagName('AdditionalActions');
            if (elem) {
                PPSMA.ContextMenu.addDisabledMenuOption(sm, elem[0].getAttribute('message'), null, null, false);
            }
        }
    },
    
    _populateDrillDownToSubMenuItems$p$0: function PPSMA_OlapGrid$_populateDrillDownToSubMenuItems$p$0(sm) {ULS0Fz:;
        var drillFromAxisId = PPSMA.ReportsCommon.getCellTypeId(this._lastCell$0);
        var drillFromMember = this._getHeaderCellMember$p$0(this._lastCell$0);
        var drillFromHierarchy = PPSMA.ReportsCommon.getHeaderCellHierarchy(this._olapViewContext$0, this._lastCell$0);
        if ((drillFromMember) && (drillFromHierarchy)) {
            var helper = new PPSMA.DrillDownToHelper(drillFromMember, drillFromHierarchy, drillFromAxisId, this._olapViewContext$0);
            helper.populateSubMenuItems(sm, this._gridCtxName$0 + '.handleDrillDownToMenuClick');
        }
    },
    
    _getXandY$p$0: function PPSMA_OlapGrid$_getXandY$p$0(menuHeight) {ULS0Fz:;
        var yOffset = PPSMA.SizeEx.getAbsoluteTop(this._lastCell$0);
        var xOffset = PPSMA.SizeEx.getAbsoluteLeft(this._lastCell$0);
        var width = this._lastCell$0.offsetWidth;
        var height = this._lastCell$0.offsetHeight;
        var availHeight = PPSMA.SizeEx.getClientHeight();
        if ((yOffset + menuHeight) > availHeight) {
            yOffset -= menuHeight;
            if (yOffset < 0) {
                yOffset = 0;
            }
        }
        var availWidth = PPSMA.SizeEx.getClientWidth();
        if ((xOffset + 225) > availWidth) {
            xOffset = (availWidth - 225);
            if (xOffset < 0) {
                xOffset = 0;
            }
        }
        var scrollLeft = 0;
        var scrollTop = 0;
        var parentDiv = $get(this._olapViewContext$0.get_innerTargetId());
        if (parentDiv) {
            scrollLeft = parentDiv.scrollLeft;
            scrollTop = parentDiv.scrollTop;
        }
        var pt = new Sys.UI.Point(xOffset + width - scrollLeft - 10, yOffset + height - scrollTop - 10);
        return pt;
    },
    
    handleDrillDownMenuClick: function PPSMA_OlapGrid$handleDrillDownMenuClick() {ULS0Fz:;
        this._drillDownCell$p$0(this._lastCell$0);
    },
    
    handleDrillDownToMenuClick: function PPSMA_OlapGrid$handleDrillDownToMenuClick(drillToHierarchyName, drillToMemberName, drillToLevelName) {ULS0Fz:;
        this._drillDownToCell$p$0(this._lastCell$0, unescape(drillToHierarchyName), unescape(drillToMemberName), unescape(drillToLevelName));
    },
    
    handleDrillUpMenuClick: function PPSMA_OlapGrid$handleDrillUpMenuClick() {ULS0Fz:;
        this._drillUpCell$p$0(this._lastCell$0);
    },
    
    handleExpandMenuClick: function PPSMA_OlapGrid$handleExpandMenuClick() {ULS0Fz:;
        this._expandCell$p$0(this._lastCell$0);
    },
    
    handleCollapseMenuClick: function PPSMA_OlapGrid$handleCollapseMenuClick() {ULS0Fz:;
        this._collapseCell$p$0(this._lastCell$0);
    },
    
    handleShowOnlyMenuClick: function PPSMA_OlapGrid$handleShowOnlyMenuClick() {ULS0Fz:;
        this._showOnlyCell$p$0(this._lastCell$0);
    },
    
    handleRemoveMenuClick: function PPSMA_OlapGrid$handleRemoveMenuClick() {ULS0Fz:;
        this._removeCell$p$0(this._lastCell$0);
    },
    
    handleShowPropertiesMenuClick: function PPSMA_OlapGrid$handleShowPropertiesMenuClick() {ULS0Fz:;
        this._olapViewContext$0.set_dimensionData(null);
        this._showProperties.setCallbackMethod(this.$$d_handleOlapGridCallback);
        this._showProperties.show(this._lastCell$0);
    },
    
    handleOlapGridCallback: function PPSMA_OlapGrid$handleOlapGridCallback() {ULS0Fz:;
        if (this._showProperties.get_selectedButton() === '2' || this._changeMeasure.get_selectedButton() === '2') {
            this._selectCellAndSetFocus$p$0(this._lastCell$0);
        }
    },
    
    handlePivotMenuClick: function PPSMA_OlapGrid$handlePivotMenuClick() {ULS0Fz:;
        this._pivot$p$0();
    },
    
    handleFilterEmptyRowMenuClick: function PPSMA_OlapGrid$handleFilterEmptyRowMenuClick() {ULS0Fz:;
        this._filterEmptyRow$p$0();
    },
    
    handleSortMenuClickAsc: function PPSMA_OlapGrid$handleSortMenuClickAsc(colIndex, rowIndex) {ULS0Fz:;
        this._sortByDirectionArrow$p$0('asc', colIndex, rowIndex);
    },
    
    handleClearFilterMenuClick: function PPSMA_OlapGrid$handleClearFilterMenuClick() {ULS0Fz:;
        this._olapViewContext$0.clearFilter('2', false);
    },
    
    handleValueFilterMenuClick: function PPSMA_OlapGrid$handleValueFilterMenuClick() {ULS0Fz:;
        var parameters = null;
        if (this._olapViewContext$0 && this._olapViewContext$0.get_results()) {
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
        this._setSortFilterStatus$p$0('disablefilter', true);
        this._valueFilter.setCallbackMethod(this.$$d_processFilterDialogResult);
        if (ftype > 6 && values) {
            this._valueFilter.set_filterType(ftype);
            this._valueFilter.set_hierarchyName(values[1]);
            var tuple = values[2];
            if (isNullUndefinedOrEmpty(this._valueFilter.get_value1())) {
                this._valueFilter.set_value1(this._valueFilter.getFormattedStringFromInvariantNumber(Number.parseInvariant(values[3]), false));
            }
            if (isNullUndefinedOrEmpty(this._valueFilter.get_value2())) {
                this._valueFilter.set_value2(this._valueFilter.getFormattedStringFromInvariantNumber(Number.parseInvariant(values[4]), false));
            }
            this._valueFilter.set_levelName(values[5]);
            this._valueFilter.loadFilterDialog(values[0], tuple, values[5], this._valueFilter.get_hierarchyName(), this._valueFilter.get_value1(), this._valueFilter.get_value2(), this._lastCell$0, '2');
        }
        else {
            this._valueFilter.set_filterType(9);
            this._valueFilter.set_showClearOption(false);
            this._valueFilter.set_tupleIndex(0);
            if (this._lastCell$0) {
                var cellTypeId = PPSMA.ReportsCommon.getCellTypeId(this._lastCell$0);
                if (cellTypeId !== 'R') {
                    this._valueFilter.set_tupleIndex(PPSMA.ReportsCommon.getCellColumnPosition(this._lastCell$0));
                }
            }
            this._valueFilter.set_value1('0');
            this._valueFilter.set_value2('100');
            this._valueFilter.set_currentCell(this._lastCell$0);
            this._valueFilter.set_axis('2');
            this._valueFilter.set_innerTargetID((this._olapViewContext$0) ? this._olapViewContext$0.get_innerTargetId() : null);
            this._valueFilter.showValueFilterDlg();
        }
    },
    
    processFilterDialogResult: function PPSMA_OlapGrid$processFilterDialogResult() {ULS0Fz:;
        this._removePropertyFromSortFilterStatus$p$0('disablefilter');
        if (this._valueFilter.get_selectedButton() === '1') {
            this._olapViewContext$0.filter(this._valueFilter.get_filterType().toString(), this._valueFilter.get_hierarchyName(), this._valueFilter.get_tupleXML(), this._valueFilter.get_axis(), this._valueFilter.get_levelName(), this._valueFilter.get_value1(), this._valueFilter.get_value2());
        }
        else if (this._valueFilter.get_selectedButton() === '2') {
            this._selectCellAndSetFocus$p$0(this._lastCell$0);
        }
        else if (this._valueFilter.get_selectedButton() === '3') {
            this._olapViewContext$0.clearFilter(this._valueFilter.get_axis(), (this._valueFilter.get_axis() === '2'));
        }
    },
    
    _removePropertyFromSortFilterStatus$p$0: function PPSMA_OlapGrid$_removePropertyFromSortFilterStatus$p$0(status) {ULS0Fz:;
        var filterState = '';
        filterState = this._olapViewContext$0.getOuterTagAttribute('arFilterState');
        filterState = filterState.replace(';' + status, '');
        this._olapViewContext$0.setOuterTagAttribute('arFilterState', filterState);
    },
    
    _setSortFilterStatus$p$0: function PPSMA_OlapGrid$_setSortFilterStatus$p$0(status, append) {ULS0Fz:;
        var filterState = '';
        if (append) {
            filterState = this._olapViewContext$0.getOuterTagAttribute('arFilterState');
            filterState = filterState + ';' + status;
        }
        this._olapViewContext$0.setOuterTagAttribute('arFilterState', filterState);
    },
    
    handleTopFilterMenuClick: function PPSMA_OlapGrid$handleTopFilterMenuClick() {ULS0Fz:;
        var parameters = null;
        if (this._olapViewContext$0 && this._olapViewContext$0.get_results()) {
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
        this._setSortFilterStatus$p$0('disablefilter', true);
        this._valueFilter.setCallbackMethod(this.$$d_processFilterDialogResult);
        if (ftype > 0 && ftype < 7 && values) {
            this._valueFilter.set_filterType(ftype);
            this._valueFilter.set_hierarchyName(values[1]);
            var tuple = values[2];
            this._valueFilter.set_value1(values[3]);
            this._valueFilter.set_value2(values[4]);
            this._valueFilter.set_levelName(values[5]);
            this._valueFilter.loadFilterDialog(values[0], tuple, values[5], this._valueFilter.get_hierarchyName(), this._valueFilter.get_value1(), this._valueFilter.get_value2(), this._lastCell$0, '2');
        }
        else {
            this._valueFilter.set_filterType(1);
            this._valueFilter.set_showClearOption(false);
            this._valueFilter.set_tupleIndex(0);
            if (this._lastCell$0) {
                this._valueFilter.set_tupleIndex(PPSMA.ReportsCommon.getSortedCellColumnPosition(this._lastCell$0));
            }
            this._valueFilter.set_value1('10');
            this._valueFilter.set_currentCell(this._lastCell$0);
            this._valueFilter.set_axis('2');
            this._valueFilter.set_innerTargetID((this._olapViewContext$0) ? this._olapViewContext$0.get_innerTargetId() : null);
            this._valueFilter.showTopFilterDlg();
        }
    },
    
    loadFilterDialog: function PPSMA_OlapGrid$loadFilterDialog(sFilterTypeIndex, hierarchy, tuple, level, value1, value2, axis) {ULS0Fz:;
        this._valueFilter.setCallbackMethod(this.$$d_processFilterDialogResult);
        this._valueFilter.loadFilterDialog(sFilterTypeIndex, tuple, level, hierarchy, value1, value2, this._lastCell$0, axis);
    },
    
    handleSortMenuClickDesc: function PPSMA_OlapGrid$handleSortMenuClickDesc(colIndex, rowIndex) {ULS0Fz:;
        this._sortByDirectionArrow$p$0('desc', colIndex, rowIndex);
    },
    
    handleSortMenuClick: function PPSMA_OlapGrid$handleSortMenuClick(sortType) {ULS0Fz:;
        this._sort$p$0(this._lastCell$0, sortType);
    },
    
    handleFilterEmptyColMenuClick: function PPSMA_OlapGrid$handleFilterEmptyColMenuClick() {ULS0Fz:;
        this._filterEmptyCol$p$0();
    },
    
    handleFormatReportMenuClick: function PPSMA_OlapGrid$handleFormatReportMenuClick(reportLayout) {ULS0Fz:;
        this._changeReportLayout$p$0(reportLayout);
    },
    
    handleShowHideInfoByDiv: function PPSMA_OlapGrid$handleShowHideInfoByDiv() {ULS0Fz:;
        this._olapViewContext$0.toggleViewInfoBar(this._viewInfoBarDiv$0.firstChild);
    },
    
    handleShowHideInfoMenuClick: function PPSMA_OlapGrid$handleShowHideInfoMenuClick() {ULS0Fz:;
        var table = null;
        var p = this._lastCell$0.parentNode;
        while (p) {
            if (PPSMA.DomElementEx.tagsMatch(p.tagName, 'table')) {
                table = p;
                break;
            }
            p = p.parentNode;
        }
        var viewinfodiv = null;
        if (table) {
            var pardiv = table.parentNode.parentNode;
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
    
    handleMeasureGroupNameChange: function PPSMA_OlapGrid$handleMeasureGroupNameChange() {ULS0Fz:;
        var code = 'window.event.srcElement.id';
        var propertyValue = eval(code);
        var srcElem = $get(propertyValue);
        if (srcElem) {
            var measureGroupName = srcElem.getAttribute('MeasureGroupName');
            this._olapViewContext$0.get_measures().set_measureGroupName(measureGroupName);
        }
    },
    
    handleShowChangeMeasureMenuClick: function PPSMA_OlapGrid$handleShowChangeMeasureMenuClick() {ULS0Fz:;
        this._changeMeasure.setCallbackMethod(this.$$d_handleOlapGridCallback);
        this._changeMeasure.show(this._lastCell$0);
    },
    
    handleShowUrlMenuClick: function PPSMA_OlapGrid$handleShowUrlMenuClick(urlContent) {ULS0Fz:;
        PPSMA.NewWindow.openUrl(urlContent);
    },
    
    handleAnalyzeInDecompMenuClick: function PPSMA_OlapGrid$handleAnalyzeInDecompMenuClick(misc) {ULS0Fz:;
        var rIndex = PPSMA.ReportsCommon.getCellRowPosition(this._lastCell$0);
        var cIndex = PPSMA.ReportsCommon.getCellColumnPosition(this._lastCell$0);
        var analyzeInDecompHelper = new PPSMA.AnalyzeInDecompHelper();
        analyzeInDecompHelper.launchAnalyzeRequest(this._olapViewContext$0, this._gridCtxName$0, rIndex, cIndex);
    },
    
    handleShowDetailsMenuClick: function PPSMA_OlapGrid$handleShowDetailsMenuClick(resultTableIndex) {ULS0Fz:;
        this._showDetails$p$0(this._lastCell$0, resultTableIndex);
    },
    
    _drillDownCell$p$0: function PPSMA_OlapGrid$_drillDownCell$p$0(currCell) {ULS0Fz:;
        if (this.get__canNavigate$p$0()) {
            var member = this._getHeaderCellMember$p$0(currCell);
            var hierarchy = PPSMA.ReportsCommon.getHeaderCellHierarchy(this._olapViewContext$0, currCell);
            if ((member) && (hierarchy)) {
                if (member.get_hasChildren()) {
                    this._olapViewContext$0.drillDown(hierarchy.get_name(), member.get_name());
                }
            }
        }
    },
    
    _drillDownToCell$p$0: function PPSMA_OlapGrid$_drillDownToCell$p$0(currCell, drillToHierarchyName, drillToMemberName, drillToLevelName) {ULS0Fz:;
        if (this.get__canNavigate$p$0()) {
            var member = this._getHeaderCellMember$p$0(currCell);
            var memberHierarchy = PPSMA.ReportsCommon.getHeaderCellHierarchy(this._olapViewContext$0, currCell);
            if ((member) && (memberHierarchy)) {
                this._olapViewContext$0.crossDrill(memberHierarchy.get_name(), member.get_name(), drillToHierarchyName, drillToMemberName, drillToLevelName);
            }
        }
    },
    
    _drillUpCell$p$0: function PPSMA_OlapGrid$_drillUpCell$p$0(currCell) {ULS0Fz:;
        if (this.get__canNavigate$p$0()) {
            var member = this._getHeaderCellMember$p$0(currCell);
            var hierarchy = PPSMA.ReportsCommon.getHeaderCellHierarchy(this._olapViewContext$0, currCell);
            if ((member) && (hierarchy)) {
                if (member.get_hasParent()) {
                    this._olapViewContext$0.drillUp(hierarchy.get_name(), member.get_name());
                }
            }
        }
    },
    
    _expandCell$p$0: function PPSMA_OlapGrid$_expandCell$p$0(currCell) {ULS0Fz:;
        if (this.get__canNavigate$p$0()) {
            var member = this._getHeaderCellMember$p$0(currCell);
            var hierarchy = PPSMA.ReportsCommon.getHeaderCellHierarchy(this._olapViewContext$0, currCell);
            if ((member) && (hierarchy)) {
                if (member.get_hasChildren()) {
                    this._olapViewContext$0.expand(hierarchy.get_name(), member.get_name());
                }
            }
        }
    },
    
    _collapseCell$p$0: function PPSMA_OlapGrid$_collapseCell$p$0(currCell) {ULS0Fz:;
        if (this.get__canNavigate$p$0()) {
            var member = this._getHeaderCellMember$p$0(currCell);
            var hierarchy = PPSMA.ReportsCommon.getHeaderCellHierarchy(this._olapViewContext$0, currCell);
            if ((member) && (hierarchy)) {
                if (member.get_drilledDown()) {
                    this._olapViewContext$0.collapse(hierarchy.get_name(), member.get_name());
                }
            }
        }
    },
    
    _showOnlyCell$p$0: function PPSMA_OlapGrid$_showOnlyCell$p$0(currCell) {ULS0Fz:;
        if (this.get__canNavigate$p$0()) {
            var member = this._getHeaderCellMember$p$0(currCell);
            var hierarchy = PPSMA.ReportsCommon.getHeaderCellHierarchy(this._olapViewContext$0, currCell);
            if ((member) && (hierarchy)) {
                if (!hierarchy.get_isSingleton()) {
                    this._olapViewContext$0.showOnly(hierarchy.get_name(), member.get_name());
                }
            }
        }
    },
    
    _removeCell$p$0: function PPSMA_OlapGrid$_removeCell$p$0(currCell) {ULS0Fz:;
        if (this.get__canNavigate$p$0()) {
            var member = this._getHeaderCellMember$p$0(currCell);
            var hierarchy = PPSMA.ReportsCommon.getHeaderCellHierarchy(this._olapViewContext$0, currCell);
            if ((member) && (hierarchy)) {
                if (!hierarchy.get_isSingleton()) {
                    this._olapViewContext$0.hide(hierarchy.get_name(), member.get_name());
                }
            }
        }
    },
    
    _pivot$p$0: function PPSMA_OlapGrid$_pivot$p$0() {ULS0Fz:;
        if (this.get__canNavigate$p$0()) {
            this._olapViewContext$0.pivot();
        }
    },
    
    _filterEmptyRow$p$0: function PPSMA_OlapGrid$_filterEmptyRow$p$0() {ULS0Fz:;
        if (this.get__canNavigate$p$0()) {
            var emptyRow = (this._olapViewContext$0.get_results().get_filterEmptyAxis() & 2) > 0;
            this._olapViewContext$0.filterEmpty('2', !emptyRow);
        }
    },
    
    _filterEmptyCol$p$0: function PPSMA_OlapGrid$_filterEmptyCol$p$0() {ULS0Fz:;
        if (this.get__canNavigate$p$0()) {
            var emptyCol = (this._olapViewContext$0.get_results().get_filterEmptyAxis() & 1) > 0;
            this._olapViewContext$0.filterEmpty('1', !emptyCol);
        }
    },
    
    _sortByDirectionArrow$p$0: function PPSMA_OlapGrid$_sortByDirectionArrow$p$0(sortType, cIndex, rIndex) {ULS0Fz:;
        if (this.get__canNavigate$p$0()) {
            var detailsHelper = new PPSMA.DetailsHelper(this._olapViewContext$0, this._gridCtxName$0, rIndex, cIndex, '');
            var tupleXml = detailsHelper.getCellTupleXml();
            if (tupleXml) {
                this._olapContextSort$p$0(sortType, tupleXml);
            }
        }
    },
    
    _sort$p$0: function PPSMA_OlapGrid$_sort$p$0(currCell, sortType) {ULS0Fz:;
        if (this.get__canNavigate$p$0() && this._olapViewContext$0) {
            var rIndex = 0;
            var cIndex = 0;
            if (currCell) {
                cIndex = PPSMA.ReportsCommon.getSortedCellColumnPosition(currCell);
            }
            var detailsHelper = new PPSMA.DetailsHelper(this._olapViewContext$0, this._gridCtxName$0, rIndex, cIndex, '');
            var tupleXml = detailsHelper.getCellTupleXml();
            if (tupleXml) {
                this._olapContextSort$p$0(sortType, tupleXml);
            }
        }
    },
    
    _olapContextSort$p$0: function PPSMA_OlapGrid$_olapContextSort$p$0(sortType, tupleXml) {ULS0Fz:;
        if (this.get__canNavigate$p$0()) {
            var preservePeerGroup = 'false';
            if (this._reportLayout$0 === PPSMA.ReportLayoutEnum.CompactForm) {
                preservePeerGroup = 'true';
            }
            this._olapViewContext$0.sort('2', tupleXml, sortType, preservePeerGroup);
        }
    },
    
    _changeReportLayout$p$0: function PPSMA_OlapGrid$_changeReportLayout$p$0(reportLayout) {ULS0Fz:;
        this._olapViewContext$0.changeViewConfiguration('ReportLayout', (reportLayout).toString());
    },
    
    switchToGrid: function PPSMA_OlapGrid$switchToGrid() {
    },
    
    switchToColumnChart: function PPSMA_OlapGrid$switchToColumnChart() {ULS0Fz:;
        this._olapViewContext$0.switchOlapReportType(PPSMA.OlapReportType.ColumnChart, null);
    },
    
    switchToColumnChartStacked: function PPSMA_OlapGrid$switchToColumnChartStacked() {ULS0Fz:;
        this._olapViewContext$0.switchOlapReportType(PPSMA.OlapReportType.ColumnChartStacked, null);
    },
    
    switchToColumnChartStacked100: function PPSMA_OlapGrid$switchToColumnChartStacked100() {ULS0Fz:;
        this._olapViewContext$0.switchOlapReportType(PPSMA.OlapReportType.ColumnChartStacked100, null);
    },
    
    switchToLineChart: function PPSMA_OlapGrid$switchToLineChart() {ULS0Fz:;
        this._olapViewContext$0.switchOlapReportType(PPSMA.OlapReportType.LineChart, null);
    },
    
    switchToLineChartWithMarkers: function PPSMA_OlapGrid$switchToLineChartWithMarkers() {ULS0Fz:;
        this._olapViewContext$0.switchOlapReportType(PPSMA.OlapReportType.LineChartWithMarkers, null);
    },
    
    switchToPieChart: function PPSMA_OlapGrid$switchToPieChart() {ULS0Fz:;
        this._olapViewContext$0.switchOlapReportType(PPSMA.OlapReportType.PieChart, null);
    },
    
    _showDetails$p$0: function PPSMA_OlapGrid$_showDetails$p$0(currCell, resultTableIndex) {ULS0Fz:;
        var rIndex = PPSMA.ReportsCommon.getCellRowPosition(currCell);
        var cIndex = PPSMA.ReportsCommon.getCellColumnPosition(currCell);
        var detailsHelper = new PPSMA.DetailsHelper(this._olapViewContext$0, this._gridCtxName$0, rIndex, cIndex, resultTableIndex);
        detailsHelper.showDetails();
    },
    
    addDatasourceFormattingStyle: function PPSMA_OlapGrid$addDatasourceFormattingStyle(sheetName, cssRuleName, cssRuleDef) {ULS0Fz:;
        var cssSheet = PPSMA.OlapGrid._getSheet$p(sheetName);
        if (!cssSheet) {
            return;
        }
        PPSMA.OlapGrid._replaceStyle$p(cssSheet, '.' + cssRuleName, cssRuleDef);
    },
    
    replaceGridStyles: function PPSMA_OlapGrid$replaceGridStyles(sheetName, fontSize, fontName, fontColor, gridBackgroundColor, headerBackgroundColor, fontStyle) {ULS0Fz:;
        if (!this._isDefaultGridStyle$0) {
            var sheet = PPSMA.OlapGrid._getSheet$p(sheetName);
            if (!sheet) {
                return;
            }
            var rh = String.format('font-size:{0}pt !Important; font-family:{1} !Important; color:{2} !Important; background-color:{3}; {4}', fontSize, fontName, fontColor, gridBackgroundColor, fontStyle);
            var oc = String.format('font-size:{0}pt !Important; font-family:{1} !Important; color:{2} !Important; background-color:{3}; {4}', fontSize, fontName, fontColor, gridBackgroundColor, fontStyle);
            var chsa = String.format('font-size:{0}pt !Important; font-family:{1} !Important; color:{2} !Important; {3}', fontSize, fontName, fontColor, fontStyle);
            var ch = String.format('font-size:{0}pt !Important; font-family:{1} !Important; color:{2} !Important; {3}', fontSize, fontName, fontColor, fontStyle);
            var ph = String.format('font-size:{0}pt !Important; font-family:{1} !Important; color:{2} !Important; {4}', fontSize, fontName, fontColor, fontStyle);
            var phLink = String.format('color:{0} !Important; {1}', fontColor, fontStyle);
            var prh = String.format('font-size:{0}pt !Important; font-family:{1} !Important; color:{2} !Important; {4}', fontSize, fontName, fontColor, fontStyle);
            var prv = String.format('font-size:{0}pt !Important; font-family:{1} !Important; color:{2} !Important; background-color:{3}; {4}', fontSize, fontName, fontColor, gridBackgroundColor, fontStyle);
            var amLink = String.format('color:{0} !Important; {1}', fontColor, fontStyle);
            var contextId = this._olapViewContext$0.get_ctrlProxyId();
            PPSMA.OlapGrid._replaceStyle$p(sheet, '.' + contextId + '_ms-bigrid-rowheaders', rh);
            PPSMA.OlapGrid._replaceStyle$p(sheet, '.' + contextId + '_ms-bigrid-oncolumns', oc);
            PPSMA.OlapGrid._replaceStyle$p(sheet, '.' + contextId + '_ms-bigrid-columnheaderspanalignment', chsa);
            PPSMA.OlapGrid._replaceStyle$p(sheet, '.' + contextId + '_ms-bigrid-columnheaders', ch);
            PPSMA.OlapGrid._replaceStyle$p(sheet, '.' + contextId + '_ms-bigrid-pulpitheader', ph);
            PPSMA.OlapGrid._replaceStyle$p(sheet, '.' + contextId + '_ms-bigrid-pulpitheaderlink', phLink);
            PPSMA.OlapGrid._replaceStyle$p(sheet, '.' + contextId + '_ms-bigrid-propertiesrowheaders', prh);
            PPSMA.OlapGrid._replaceStyle$p(sheet, '.' + contextId + '_ms-bigrid-propertiesrowvalues', prv);
            PPSMA.OlapGrid._replaceStyle$p(sheet, '.' + contextId + '_ms-bigrid-accessibilitymodelink', amLink);
        }
    },
    
    handleSkipReport: function PPSMA_OlapGrid$handleSkipReport(e) {ULS0Fz:;
        var grid = $get(this._olapViewContext$0.get_ctrlProxyId() + '_ag');
        var lastGridCellLink = null;
        if (!grid) {
            PPSMA.ReportsCommon.logErrorCondition('can\'t find the grid, bailing');
            return;
        }
        else {
            try {
                lastGridCellLink = grid.lastChild.lastChild.lastChild.lastChild;
            }
            catch ($$e_3) {
                lastGridCellLink = null;
            }
        }
        if (lastGridCellLink && PPSMA.DomElementEx.tagsMatch(lastGridCellLink.tagName, 'a') && lastGridCellLink.className && (Sys.UI.DomElement.containsCssClass(lastGridCellLink, this._olapViewContext$0.get_ctrlProxyId() + '_' + PPSMA.OlapGrid._classAmLink$p) || (Sys.UI.DomElement.containsCssClass(lastGridCellLink, PPSMA.OlapGrid._classAmLink$p)))) {
            lastGridCellLink.focus();
        }
        else {
            PPSMA.ReportsCommon.logErrorCondition('can\'t find the last cell link in the grid, bailing');
        }
    },
    
    assignFocus: function PPSMA_OlapGrid$assignFocus() {ULS0Fz:;
        var contextId = this._olapViewContext$0.get_ctrlProxyId();
        var skipReportLink = $get(contextId + '_srlink');
        var pulpitCellLink = $get(contextId + PPSMA.OlapGrid._pulpitLinkIdSuffix$p).firstChild;
        var pulpitCell = pulpitCellLink.parentNode;
        if (PPSMA.NewWindow.isInMoreAccessibleMode()) {
            skipReportLink.focus();
        }
        else {
            this._selectCell$p$0(pulpitCell);
            pulpitCellLink.focus();
        }
    }
}


PPSMA.OlapGrid.registerClass('PPSMA.OlapGrid', null, PPSMA.OlapView);
PPSMA.OlapGrid._classExcoImg$p = 'ms-bigrid-expandcollapseimage';
PPSMA.OlapGrid._classExcoA$p = 'ms-bigrid-expandcollapseanchor';
PPSMA.OlapGrid._classBubbleLink$p = 'js-bigrid-bubblelink';
PPSMA.OlapGrid._classSelected$p = 'ms-bigrid-selectedcell';
PPSMA.OlapGrid._classAmLink$p = 'ms-bigrid-accessibilitymodelink';
PPSMA.OlapGrid._pulpitLinkIdSuffix$p = '_PrXcYLink';
PPSMA.OlapGrid._contextCancelDeltaX$p = 40;
PPSMA.OlapGrid._contextCancelDeltaY$p = 40;
PPSMA.OlapGrid._infoBarCloaseIconWrapperDiv$p = 'ms-binavigablecontrol-closeinfoicon';
PPSMA.OlapGrid._span$p = 'span';

if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
if (typeof NotifyScriptLoadedAndExecuteWaitingJobs != "undefined")
    NotifyScriptLoadedAndExecuteWaitingJobs("analyticgrid.js");
