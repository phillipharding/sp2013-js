function ULS01W(){var o=new Object;o.ULSTeamName="PerformancePoint Monitoring Service";o.ULSFileName="Scorecard.debug.js";return o;}
// Scorecard.js
//


Type.registerNamespace('PPSMA');

PPSMA.CssRule = function PPSMA_CssRule() {
}


PPSMA.ScorecardAjaxRenderResult = function PPSMA_ScorecardAjaxRenderResult() {
}


PPSMA.ScorecardAjaxCommentRequest = function PPSMA_ScorecardAjaxCommentRequest() {
}


PPSMA.ScorecardAjaxCommentResult = function PPSMA_ScorecardAjaxCommentResult() {
}


PPSMA.ScorecardCommentRecord = function PPSMA_ScorecardCommentRecord() {}


PPSMA.ExpandDrillTransform = function PPSMA_ExpandDrillTransform() {
}


PPSMA.CellDisplayRecord = function PPSMA_CellDisplayRecord() {
}


PPSMA.SortFilter = function PPSMA_SortFilter() {ULS01W:;
    this.ValueFilter = new Array(2);
}


PPSMA.StatusFilter = function PPSMA_StatusFilter() {
}


PPSMA.CssClasses = function PPSMA_CssClasses() {
}


PPSMA._cssEx = function PPSMA__cssEx() {
}
PPSMA._cssEx.get__instance$p = function PPSMA__cssEx$get__instance$p() {ULS01W:;
    if (!PPSMA._cssEx._instance$p) {
        PPSMA._cssEx._instance$p = new PPSMA._css();
    }
    return PPSMA._cssEx._instance$p;
}
PPSMA._cssEx._addCssRule$i = function PPSMA__cssEx$_addCssRule$i(rule, webPartId) {ULS01W:;
    PPSMA._cssEx.get__instance$p().addRule(rule, webPartId);
}
PPSMA._cssEx._loadCss$i = function PPSMA__cssEx$_loadCss$i(webPartId) {ULS01W:;
    var ele = $get('scctrl' + webPartId + '_tv_css');
    var styles;
    if (!isNullOrUndefined(ele)) {
        styles = Sys.Serialization.JavaScriptSerializer.deserialize(ele.value);
        ele.value = '';
    }
    else {
        styles = [];
    }
    for (var i = 0; i < styles.length; i++) {
        var rule = styles[i];
        PPSMA._cssEx._addCssRule$i(rule, webPartId);
    }
}


PPSMA._css = function PPSMA__css() {ULS01W:;
    this._initCss$p$0();
}
PPSMA._css._getCssText$p = function PPSMA__css$_getCssText$p(rule) {ULS01W:;
    var pattern = '{0}:  {1};';
    var str = new Sys.StringBuilder();
    var $$dict_3 = rule.Style;
    for (var $$key_4 in $$dict_3) {
        var entry = { key: $$key_4, value: $$dict_3[$$key_4] };
        str.appendLine(String.format(pattern, entry.key, entry.value));
    }
    return str.toString();
}
PPSMA._css.prototype = {
    _styleElement$p$0: null,
    _cssRules$p$0: null,
    _rulesIndex$p$0: null,
    
    get__cssRules$p$0: function PPSMA__css$get__cssRules$p$0() {ULS01W:;
        return this._cssRules$p$0;
    },
    
    get__styleElement$p$0: function PPSMA__css$get__styleElement$p$0() {ULS01W:;
        return this._styleElement$p$0;
    },
    
    _initCss$p$0: function PPSMA__css$_initCss$p$0() {ULS01W:;
        if (isNullOrUndefined(this._styleElement$p$0)) {
            var styleSheets = document.styleSheets;
            for (var i = 0; i < styleSheets.length; i++) {
                var href = styleSheets[i].href;
                if (!isNullOrEmpty(href) && (href.indexOf(PPSMA._css._cssFile$p) !== -1)) {
                    this._styleElement$p$0 = styleSheets[i];
                }
            }
        }
        if (!isNullOrUndefined(this._styleElement$p$0) && isNullOrUndefined(this._cssRules$p$0)) {
            this._cssRules$p$0 = [];
            if (this._styleElement$p$0.cssRules) {
                this._cssRules$p$0 = this._styleElement$p$0.cssRules;
            }
            else if (this._styleElement$p$0.rules) {
                this._cssRules$p$0 = this._styleElement$p$0.rules;
            }
            this._rulesIndex$p$0 = {};
            for (var i = 0; i < this._cssRules$p$0.length; i++) {
                var selectorText = this._cssRules$p$0[i].selectorText;
                this._rulesIndex$p$0[selectorText] = i;
            }
        }
    },
    
    addRule: function PPSMA__css$addRule(rule, webPartId) {ULS01W:;
        if (!isNullOrUndefined(rule)) {
            var pattern = 'div#{0} .{1}';
            var selectorText = String.format(pattern, webPartId, rule.SelectorText);
            var index = this._rulesIndex$p$0[selectorText];
            if (!isNullOrUndefined(index)) {
                if (this.get__styleElement$p$0().removeRule) {
                    this.get__styleElement$p$0().removeRule(index);
                }
                else if (this.get__styleElement$p$0().deleteRule) {
                    this.get__styleElement$p$0().deleteRule(index);
                }
            }
            else {
                index = this.get__cssRules$p$0().length;
                this._rulesIndex$p$0[selectorText] = index;
            }
            if (this.get__styleElement$p$0().addRule) {
                this.get__styleElement$p$0().addRule(selectorText, PPSMA._css._getCssText$p(rule), index);
            }
            else if (this.get__styleElement$p$0().insertRule) {
                this.get__styleElement$p$0().insertRule(selectorText + '{ ' + PPSMA._css._getCssText$p(rule) + ' }', index);
            }
        }
    }
}


PPSMA._scorecardConstants = function PPSMA__scorecardConstants() {
}


PPSMA.Scorecard = function PPSMA_Scorecard() {
}
PPSMA.Scorecard._getFilterElement$i = function PPSMA_Scorecard$_getFilterElement$i(columnName, webPartId) {ULS01W:;
    var webpart = $get(webPartId);
    var trs = webpart.getElementsByTagName('tr');
    for (var i = 0; i < trs.length; i++) {
        if (PPSMA.ScorecardRow.acceptsElement(trs[i])) {
            var tds = trs[i].getElementsByTagName('th');
            for (var j = 0; j < tds.length; j++) {
                if (PPSMA.ScorecardFilter.acceptsElement(tds[j])) {
                    var filter = new PPSMA.ScorecardFilter(tds[j]);
                    if (filter.get_sortFilterColumn() === columnName) {
                        return filter;
                    }
                }
            }
        }
    }
    return null;
}
PPSMA.Scorecard._getScorecardTable$i = function PPSMA_Scorecard$_getScorecardTable$i(webPartId) {ULS01W:;
    var view = $get(webPartId);
    var tables = view.getElementsByTagName('table');
    for (var i = 0; i < tables.length; i++) {
        if (tables[i].className === PPSMA._scorecardConstants.scorecardTableClass) {
            return tables[i];
        }
    }
    return null;
}
PPSMA.Scorecard._getPlusMinusImage$i = function PPSMA_Scorecard$_getPlusMinusImage$i(src) {ULS01W:;
    if (src) {
        var imgs = src.getElementsByTagName('img');
        if (imgs && imgs.length > 0) {
            if (PPSMA.PlusMinusImage.acceptsElement(imgs[0])) {
                return new PPSMA.PlusMinusImage(imgs[0]);
            }
        }
    }
    return null;
}
PPSMA.Scorecard._performAction$i = function PPSMA_Scorecard$_performAction$i(cell, webPartId) {ULS01W:;
    var anchor = PPSMA.Scorecard._getAnchorElement$i(cell);
    if (anchor) {
        var action = anchor.get_element().getAttribute(PPSMA._scorecardConstants.cellAction);
        var updates = Sys.Serialization.JavaScriptSerializer.deserialize(action);
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(webPartId);
        for (var i = 0; i < updates.length; ++i) {
            var update = updates[i];
            update.ClientId = webPartId;
            update.Name = viewState[update.Name];
            update.Selections[update.Selections.length] = viewState[PPSMA.ScorecardControlManager._vS_CacheKey$i];
            if (cell.get_forceParameterRefresh()) {
                update.Selections[update.Selections.length] = (new Date().toUTCString()).toString();
            }
        }
        var serializedUpdates = Sys.Serialization.JavaScriptSerializer.serialize(updates);
        if (isNullOrUndefined(viewState[PPSMA.ScorecardControlManager._vS_SelectedCellRecord$i]) || viewState[PPSMA.ScorecardControlManager._vS_SelectedCellRecord$i] !== serializedUpdates) {
            viewState[PPSMA.ScorecardControlManager._vS_SelectedCellRecord$i] = serializedUpdates;
            PPSMA.ClientConnectionManager.get_instance().setViewState(webPartId, viewState);
            var wp = PPSMA.ClientConnectionManager.get_instance().findClientWebPart(webPartId);
            if (wp.get_renderAction() === PPSMA.WebPartRenderAction.wireframe) {
                wp.set_renderAction(0);
            }
            PPSMA.ClientConnectionManager.get_instance().updateParameters(updates);
        }
        return true;
    }
    return false;
}
PPSMA.Scorecard._getAnchorElement$i = function PPSMA_Scorecard$_getAnchorElement$i(cell) {ULS01W:;
    if (cell) {
        var anchors = cell.get_element().getElementsByTagName('A');
        if (anchors) {
            for (var i = 0; i < anchors.length; i++) {
                var link = new PPSMA.ScorecardLink(anchors[i]);
                if (link.get_value() && link.get_value() === 'bsmval') {
                    return link;
                }
            }
        }
    }
    return null;
}
PPSMA.Scorecard._getCellElementFromEvent$i = function PPSMA_Scorecard$_getCellElementFromEvent$i(evntEle) {ULS01W:;
    var cellEle = null;
    if (!evntEle) {
        return cellEle;
    }
    while (evntEle) {
        if (!isNullOrEmpty(evntEle.tagName) && (evntEle.tagName.toUpperCase() === 'TD' || evntEle.tagName.toUpperCase() === 'TH') && PPSMA.ScorecardCell.acceptsElement(evntEle)) {
            cellEle = evntEle;
            break;
        }
        evntEle = evntEle.parentNode;
    }
    return cellEle;
}
PPSMA.Scorecard._getFirstVisibleCell$i = function PPSMA_Scorecard$_getFirstVisibleCell$i(scElementId) {ULS01W:;
    var tableElement = $get(scElementId);
    var trs = tableElement.getElementsByTagName('tr');
    for (var i = 0; i < trs.length; i++) {
        var row = new PPSMA.ScorecardDataRow(trs[i]);
        if (PPSMA.ScorecardDataRow.acceptsElement(trs[i]) && row.get_isCollapsed() === 'false') {
            return new PPSMA.ScorecardDataCell(row.get_element().childNodes[0]);
        }
    }
    return null;
}
PPSMA.Scorecard._getScorecardCell$i = function PPSMA_Scorecard$_getScorecardCell$i(viewId, rowId, cellId) {ULS01W:;
    var view = $get(viewId);
    var trs = view.getElementsByTagName('tr');
    for (var i = 0; i < trs.length; i++) {
        var eleTr = trs[i];
        if (PPSMA.ScorecardRow.acceptsElement(eleTr) && new PPSMA.ScorecardRow(eleTr).get_rowId() === rowId) {
            var tag = (cellId === '0' || rowId.startsWith('ch')) ? 'th' : 'td';
            var tds = eleTr.getElementsByTagName(tag);
            for (var j = 0; j < tds.length; j++) {
                if (PPSMA.ScorecardCell.acceptsElement(tds[j])) {
                    var cell = new PPSMA.ScorecardCell(tds[j]);
                    if (cell.get_cellId() === cellId) {
                        return cell;
                    }
                }
            }
        }
    }
    return null;
}
PPSMA.Scorecard._indexOf$i = function PPSMA_Scorecard$_indexOf$i(col, ele) {ULS01W:;
    if (!isNullOrUndefined(col) && !isNullOrUndefined(ele)) {
        for (var i = 0; i < col.length; i++) {
            if (col[i] === ele) {
                return i;
            }
        }
    }
    return -1;
}
PPSMA.Scorecard._fixScorecardAlignment$i = function PPSMA_Scorecard$_fixScorecardAlignment$i(webPartId) {ULS01W:;
    if (!isNullOrEmpty(webPartId)) {
        PPSMA.Scorecard._fixIndicatorAlignment$p(webPartId);
        PPSMA.Scorecard._fixScorecardWidth$p(webPartId);
    }
}
PPSMA.Scorecard._fixScorecardWidth$p = function PPSMA_Scorecard$_fixScorecardWidth$p(webPartId) {ULS01W:;
    var scTable = PPSMA.Scorecard._getScorecardTable$i(webPartId);
    if (!isNullOrUndefined(scTable)) {
        if (scTable.offsetWidth < PPSMA.Scorecard._scorecardMinimumWidth$p) {
            scTable.style.width = PPSMA.Scorecard._scorecardMinimumWidth$p + 'px';
        }
        var toolbar = PPSMA.ScorecardToolbarHandler._getToolbar$i(webPartId);
        if (!isNullOrUndefined(toolbar)) {
            toolbar.style.width = scTable.offsetWidth + 'px';
        }
    }
}
PPSMA.Scorecard._applyTextWrapping$p = function PPSMA_Scorecard$_applyTextWrapping$p(webPartId, columSizes) {ULS01W:;
    if (isNullOrEmpty(webPartId)) {
        return;
    }
    var scTable = PPSMA.Scorecard._getScorecardTable$i(webPartId);
    if (isNullOrUndefined(scTable)) {
        return;
    }
    var tableRows = scTable.getElementsByTagName('tr');
    if (isNullOrEmpty(tableRows)) {
        return;
    }
    for (var rowIndex = tableRows.length - 1; rowIndex >= 0; rowIndex--) {
        var row = tableRows[rowIndex];
        var scRow = new PPSMA.ScorecardRow(tableRows[rowIndex]);
        if (scRow.get_rowId().startsWith('ch')) {
            PPSMA.Scorecard._applyTextWrapToTheColumnHeaderRows$p(row, columSizes);
        }
        else {
            PPSMA.Scorecard._applyTextWrapToHeaderCellsInDataRow$p(row);
        }
    }
}
PPSMA.Scorecard._applyTextWrapToTheColumnHeaderRows$p = function PPSMA_Scorecard$_applyTextWrapToTheColumnHeaderRows$p(row, columnSizes) {ULS01W:;
    for (var columnIndex = 0; columnIndex < row.children.length; columnIndex++) {
        var cell = new PPSMA.ScorecardCell(row.children[columnIndex]);
        var cellSpans = cell.get_element().getElementsByTagName('span');
        if (cellSpans.length >= 1 && cellSpans[0].offsetWidth > PPSMA._scorecardConstants.textWrappingThreashold) {
            var firstChild = PPSMA.Scorecard._findFirstChildOnNextRow$p(row, cell.getCellId());
            var firstChildElem = (isNullOrUndefined(firstChild)) ? null : firstChild.get_element();
            var widthOfChildren = 0;
            var widthOfCell = cellSpans[0].offsetWidth;
            for (var i = 0; !isNullOrUndefined(firstChildElem) && i < (cell.get_element()).colSpan; i++) {
                var childCellSpans = firstChildElem.getElementsByTagName('span');
                if (!isNullOrUndefined(childCellSpans) && childCellSpans.length > 0) {
                    widthOfChildren = widthOfChildren + childCellSpans[0].offsetWidth;
                }
                firstChildElem = firstChild.get_element().nextSibling;
            }
            if (!widthOfChildren) {
                PPSMA.Scorecard._applyTextWrappingToLeafHeaders$p(cell.getCellId(), cellSpans[0], widthOfCell, columnSizes);
            }
            else {
                PPSMA.Scorecard._wrapTextInSpan$p(cellSpans[0], widthOfChildren);
            }
        }
    }
}
PPSMA.Scorecard._applyTextWrappingToLeafHeaders$p = function PPSMA_Scorecard$_applyTextWrappingToLeafHeaders$p(columnIndex, cellSpan, widthOfCell, columnSizes) {ULS01W:;
    if (widthOfCell <= PPSMA._scorecardConstants.textWrappingThreashold) {
        return;
    }
    if (isNullOrUndefined(columnSizes)) {
        cellSpan.style.whiteSpace = 'normal';
        return;
    }
    if (isNullOrUndefined(columnSizes[columnIndex.toString()])) {
        cellSpan.style.whiteSpace = 'normal';
        return;
    }
    var elemWidthSum = 0;
    var elemCount = 0;
    var $$dict_6 = columnSizes[columnIndex.toString()];
    for (var $$key_7 in $$dict_6) {
        var entry = { key: $$key_7, value: $$dict_6[$$key_7] };
        elemWidthSum += entry.value;
        elemCount++;
    }
    if (elemCount < 2) {
        PPSMA.Scorecard._wrapTextInSpan$p(cellSpan, PPSMA._scorecardConstants.textWrappingThreashold);
        return;
    }
    if (elemWidthSum > PPSMA._scorecardConstants.textWrappingThreashold) {
        PPSMA.Scorecard._wrapTextInSpan$p(cellSpan, elemWidthSum);
    }
    else {
        PPSMA.Scorecard._wrapTextInSpan$p(cellSpan, PPSMA._scorecardConstants.textWrappingThreashold);
    }
}
PPSMA.Scorecard._findFirstChildOnNextRow$p = function PPSMA_Scorecard$_findFirstChildOnNextRow$p(row, cellId) {ULS01W:;
    if (isNullOrUndefined(row)) {
        return null;
    }
    row = row.nextSibling;
    if (PPSMA.ScorecardRow.acceptsElement(row)) {
        var rowId = new PPSMA.ScorecardRow(row).get_rowId();
        if (!cellId || !rowId.startsWith('ch')) {
            return null;
        }
        var ths = row.getElementsByTagName('th');
        for (var i = 0; i < ths.length; i++) {
            var result = new PPSMA.ScorecardHeaderCell(ths[i]);
            var id = result.getCellId();
            if (id === cellId) {
                return result;
            }
        }
    }
    return null;
}
PPSMA.Scorecard._wrapTextInSpan$p = function PPSMA_Scorecard$_wrapTextInSpan$p(spanElem, size) {ULS01W:;
    if (isNullOrUndefined(spanElem)) {
        return;
    }
    if (!isNaN(size) && size > 0) {
        spanElem.style.width = size + 'px';
    }
    spanElem.style.whiteSpace = 'normal';
    spanElem.style.display = 'inline-block';
}
PPSMA.Scorecard._applyTextWrapToHeaderCellsInDataRow$p = function PPSMA_Scorecard$_applyTextWrapToHeaderCellsInDataRow$p(row) {ULS01W:;
    if (!isNullOrUndefined(row) && !isNullOrEmpty(row.children)) {
        var spans = row.children[0].getElementsByTagName('span');
        if (!isNullOrEmpty(spans)) {
            if (spans[0].offsetWidth > PPSMA._scorecardConstants.textWrappingThreashold) {
                PPSMA.Scorecard._wrapTextInSpan$p(spans[0], PPSMA._scorecardConstants.textWrappingThreashold);
            }
        }
    }
}
PPSMA.Scorecard._fixIndicatorAlignment$p = function PPSMA_Scorecard$_fixIndicatorAlignment$p(webPartId) {ULS01W:;
    var columnSizes = {};
    var row = PPSMA.Scorecard._getFirstNonHeaderRow$i(webPartId);
    if (!isNullOrUndefined(row)) {
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(webPartId);
        var textWrappingEnabled = Boolean.parse(viewState[PPSMA.ScorecardControlManager._vS_EnableTextWrapping$i].toString());
        PPSMA.Scorecard._fillColumnSizesDictionary$p(columnSizes, row, textWrappingEnabled);
        PPSMA.Scorecard._collectColumnElementWidths$p(columnSizes, row);
        PPSMA.Scorecard._applyBiggestColumnElementWidth$p(columnSizes, row);
        if (textWrappingEnabled) {
            PPSMA.Scorecard._applyTextWrapping$p(webPartId, columnSizes);
        }
    }
}
PPSMA.Scorecard._applyBiggestColumnElementWidth$p = function PPSMA_Scorecard$_applyBiggestColumnElementWidth$p(columnSizes, row) {ULS01W:;
    var nextRow = row.get_element();
    while (!isNullOrUndefined(nextRow) && PPSMA.ScorecardRow.acceptsElement(nextRow)) {
        var hiddenRow = nextRow.style.display.trim() === 'none';
        if (hiddenRow) {
            nextRow.style.display = 'block';
        }
        var $$dict_4 = columnSizes;
        for (var $$key_5 in $$dict_4) {
            var entry = { key: $$key_5, value: $$dict_4[$$key_5] };
            var index = parseInt(entry.key);
            var cell = nextRow.cells[index];
            if (!isNullOrUndefined(cell)) {
                var values = entry.value;
                var col = cell.getElementsByTagName('span');
                for (var i = 0; i < col.length; i++) {
                    if (col[i].className === PPSMA.Scorecard._displayElementClassName$p) {
                        var w = parseInt(values[i.toString()].toString());
                        if (!isNaN(w) && w > 0) {
                            col[i].style.width = w + 'px';
                        }
                        col[i].style.display = 'inline-block';
                    }
                }
            }
        }
        if (hiddenRow) {
            nextRow.style.display = 'none';
        }
        nextRow = nextRow.nextSibling;
    }
}
PPSMA.Scorecard._fillColumnSizesDictionary$p = function PPSMA_Scorecard$_fillColumnSizesDictionary$p(columnSizes, row, textWrappingEnabled) {ULS01W:;
    var col = row.get_element().getElementsByTagName('td');
    for (var i = 0; i < col.length; i++) {
        if (PPSMA.ScorecardDataCell.acceptsElement(col[i]) && col[i].style.display !== 'none') {
            var cell = new PPSMA.ScorecardCell(col[i]);
            var div = cell.get_element().getElementsByTagName('div');
            if (div.length > 0 && div[0].children.length > 0 && isNullUndefinedOrEmpty(div[0].children[0].style.width)) {
                var condition;
                if (!textWrappingEnabled) {
                    condition = div[0].children.length > 1;
                }
                else {
                    condition = true;
                }
                if (condition) {
                    if (PPSMA.ScorecardRow.acceptsElement(row.get_element().previousSibling)) {
                        columnSizes[(i + 1).toString()] = {};
                    }
                    else {
                        columnSizes[i.toString()] = {};
                    }
                }
            }
        }
    }
}
PPSMA.Scorecard._collectColumnElementWidths$p = function PPSMA_Scorecard$_collectColumnElementWidths$p(columnSizes, row) {ULS01W:;
    var nextRow = row.get_element();
    while (!isNullOrUndefined(nextRow) && PPSMA.ScorecardRow.acceptsElement(nextRow)) {
        var hiddenRow = nextRow.style.display.trim() === 'none';
        if (hiddenRow) {
            nextRow.style.display = 'block';
        }
        var $$dict_4 = columnSizes;
        for (var $$key_5 in $$dict_4) {
            var entry = { key: $$key_5, value: $$dict_4[$$key_5] };
            var index = parseInt(entry.key);
            var cell = nextRow.cells[index];
            if (!isNullOrUndefined(cell)) {
                var values = entry.value;
                PPSMA.Scorecard._updateElementWidths$p(values, cell);
            }
        }
        if (hiddenRow) {
            nextRow.style.display = 'none';
        }
        nextRow = nextRow.nextSibling;
    }
}
PPSMA.Scorecard._updateElementWidths$p = function PPSMA_Scorecard$_updateElementWidths$p(values, cell) {ULS01W:;
    var col = cell.getElementsByTagName('span');
    for (var i = 0; i < col.length; i++) {
        if (col[i].className === PPSMA.Scorecard._displayElementClassName$p) {
            if (!i && !isNullOrUndefined(col[0]) && col.length === 1 && col[0].offsetWidth > PPSMA._scorecardConstants.textWrappingThreashold) {
                PPSMA.Scorecard._wrapTextInSpan$p(col[0], PPSMA._scorecardConstants.textWrappingThreashold);
            }
            var width = col[i].offsetWidth;
            var currentWidth = values[i.toString()];
            if (isNullOrUndefined(values[i.toString()]) || width > currentWidth) {
                values[i.toString()] = width;
            }
        }
    }
}
PPSMA.Scorecard._getFirstNonHeaderRow$i = function PPSMA_Scorecard$_getFirstNonHeaderRow$i(webPartId) {ULS01W:;
    var ele = $get(webPartId);
    var rows = ele.getElementsByTagName('tr');
    var lastRow = null;
    for (var i = 0; i < rows.length; i++) {
        if (PPSMA.ScorecardRow.acceptsElement(rows[i]) && rows[i].style.display !== 'none') {
            var row = new PPSMA.ScorecardRow(rows[i]);
            if (!row.get_rowId().startsWith('ch')) {
                lastRow = row;
                break;
            }
        }
    }
    return lastRow;
}
PPSMA.Scorecard.ensureHeightByElementId = function PPSMA_Scorecard$ensureHeightByElementId(elementId) {ULS01W:;
    var ele = $get(elementId);
    PPSMA.Scorecard.ensureHeight(ele);
}
PPSMA.Scorecard.ensureHeight = function PPSMA_Scorecard$ensureHeight(ele) {ULS01W:;
    if (!isNullOrUndefined(ele)) {
        var maxHeightStyle = getStyle(ele, 'maxHeight');
        if (!isNullOrEmpty(maxHeightStyle) && maxHeightStyle !== 'none') {
            var height = ele.style.height;
            ele.style.height = maxHeightStyle;
            var maxHeight = ele.style.pixelHeight;
            ele.style.height = height;
            if (maxHeight < ele.scrollHeight) {
                ele.style.height = maxHeight + 'px';
            }
        }
        var children = ele.getElementsByTagName('DIV');
        for (var i = 0; i < children.length; i++) {
            PPSMA.Scorecard.ensureHeight(children[i]);
        }
    }
}
PPSMA.Scorecard.getPrevVisibleCell = function PPSMA_Scorecard$getPrevVisibleCell(currCell) {ULS01W:;
    var prevRow = currCell.get_element().parentNode.previousSibling;
    return PPSMA.Scorecard.getCellFromRow(prevRow, currCell.getCellId(), true);
}
PPSMA.Scorecard.getNextVisibleCell = function PPSMA_Scorecard$getNextVisibleCell(currCell) {ULS01W:;
    if (!isNullOrUndefined(currCell) && !isNullOrUndefined(currCell.get_element()) && !isNullOrUndefined(currCell.get_element().parentNode)) {
        var nextRow = currCell.get_element().parentNode.nextSibling;
        var cellId = (currCell.getCellId() !== -1) ? currCell.getCellId() : 0;
        return PPSMA.Scorecard.getCellFromRow(nextRow, cellId, false);
    }
    return null;
}
PPSMA.Scorecard.getCellFromRow = function PPSMA_Scorecard$getCellFromRow(row, cellId, navigatingUp) {ULS01W:;
    while (!isNullOrUndefined(row) && (!PPSMA.ScorecardRow.acceptsElement(row) || row.style.display === 'none')) {
        row = (navigatingUp) ? row.previousSibling : row.nextSibling;
    }
    if (PPSMA.ScorecardRow.acceptsElement(row)) {
        var rowId = new PPSMA.ScorecardRow(row).get_rowId();
        if (!cellId && !rowId.startsWith('ch')) {
            if (PPSMA.DomElementEx.tagsMatch(row.childNodes[0].tagName, 'td') || PPSMA.DomElementEx.tagsMatch(row.childNodes[0].tagName, 'th')) {
                return new PPSMA.ScorecardCell(row.childNodes[0]);
            }
            else {
                var secondChance = row.childNodes[1];
                if (secondChance && PPSMA.DomElementEx.tagsMatch(secondChance.tagName, 'td') || PPSMA.DomElementEx.tagsMatch(secondChance.tagName, 'th')) {
                    return new PPSMA.ScorecardCell(secondChance);
                }
            }
        }
        var tag = (!cellId || rowId.startsWith('ch')) ? 'th' : 'td';
        var tds = row.getElementsByTagName(tag);
        var lastCellId = (PPSMA.ScorecardCell.acceptsElement(tds[tds.length - 1])) ? new PPSMA.ScorecardCell(tds[tds.length - 1]).getCellId() : -1;
        if (lastCellId >= 0 && cellId > lastCellId) {
            var nextRow = (navigatingUp) ? row.previousSibling : row.nextSibling;
            return PPSMA.Scorecard.getCellFromRow(nextRow, cellId, navigatingUp);
        }
        for (var i = 0; i < tds.length; i++) {
            var result = new PPSMA.ScorecardDataCell(tds[i]);
            var id = result.getCellId();
            if (id >= cellId) {
                if (!i && id > cellId) {
                    var nextRow = (navigatingUp) ? row.previousSibling : row.nextSibling;
                    return PPSMA.Scorecard.getCellFromRow(nextRow, cellId, navigatingUp);
                }
                else {
                    result = (id === cellId) ? result : new PPSMA.ScorecardCell(tds[i - 1]);
                    return result;
                }
            }
        }
        return new PPSMA.ScorecardCell(tds[tds.length - 1]);
    }
    return null;
}
PPSMA.Scorecard.showDetails = function PPSMA_Scorecard$showDetails(reportId, tupleXml, uniqueId) {ULS01W:;
    if (!PPSMA.NewWindow.isInMoreAccessibleMode()) {
        if (!isNullUndefinedOrEmpty(tupleXml)) {
            tupleXml = PPSMA.EncodeEx.xmlDecode(tupleXml);
        }
    }
    else {
        tupleXml = tupleXml.replace(new RegExp('&', 'g'), '&amp;');
    }
    PPSMA.NewWindow.popupShowDetails(reportId, uniqueId, tupleXml, '', getDrillThroughPage(), getResFolder(), true);
}
PPSMA.Scorecard.analyzeInDecompositionTree = function PPSMA_Scorecard$analyzeInDecompositionTree(reportId, tupleXml, decompViewState) {ULS01W:;
    if (!PPSMA.NewWindow.isInMoreAccessibleMode()) {
        if (!isNullUndefinedOrEmpty(tupleXml)) {
            tupleXml = PPSMA.EncodeEx.xmlDecode(tupleXml);
        }
        if (!isNullUndefinedOrEmpty(decompViewState)) {
            decompViewState = PPSMA.EncodeEx.xmlDecode(decodeURI(decompViewState));
        }
    }
    else {
        tupleXml = tupleXml.replace(new RegExp('&', 'g'), '&amp;');
        decompViewState = tupleXml.replace(new RegExp('&', 'g'), '&amp;');
    }
    var analyzeInDecompHelper = new PPSMA.AnalyzeInDecompHelper();
    analyzeInDecompHelper.launchAnalyzeRequestFromScorecard(reportId, tupleXml, decompViewState, getDecompTreePage(), getResFolder());
}
PPSMA.Scorecard.setAnnotationElementVisibility = function PPSMA_Scorecard$setAnnotationElementVisibility(visible, cell) {ULS01W:;
    if (!isNullOrUndefined(cell)) {
        if (cell.get_isAnnotated() === 'True' && visible) {
            Sys.UI.DomElement.removeCssClass(cell.get_element(), 'ms-bisc-annotationoff');
            Sys.UI.DomElement.addCssClass(cell.get_element(), 'ms-bisc-annotationon');
        }
        else {
            Sys.UI.DomElement.removeCssClass(cell.get_element(), 'ms-bisc-annotationon');
            Sys.UI.DomElement.addCssClass(cell.get_element(), 'ms-bisc-annotationoff');
        }
    }
}
PPSMA.Scorecard._cloneClientViewState$i = function PPSMA_Scorecard$_cloneClientViewState$i(viewState) {ULS01W:;
    var serializedDict = Sys.Serialization.JavaScriptSerializer.serialize(viewState);
    return Sys.Serialization.JavaScriptSerializer.deserialize(serializedDict);
}
PPSMA.Scorecard._cancelEvent$i = function PPSMA_Scorecard$_cancelEvent$i(e) {ULS01W:;
    PPSMA.ContextMenu.neutralizeBrowserMenu(new Sys.UI.DomEvent(e));
}


PPSMA.ScorecardElement = function PPSMA_ScorecardElement(ele) {ULS01W:;
    this.set_element(ele);
}
PPSMA.ScorecardElement.prototype = {
    _element$p$0: null,
    
    get_element: function PPSMA_ScorecardElement$get_element() {ULS01W:;
        return this._element$p$0;
    },
    set_element: function PPSMA_ScorecardElement$set_element(value) {ULS01W:;
        if (isNullOrUndefined(value) || isNullOrUndefined(value.getAttribute)) {
            this._element$p$0 = PPSMA.ScorecardElement._emptyElement$p;
        }
        else {
            this._element$p$0 = value;
        }
        return value;
    }
}


PPSMA.ScorecardFilter = function PPSMA_ScorecardFilter(ele) {ULS01W:;
    PPSMA.ScorecardFilter.initializeBase(this, [ ele ]);
}
PPSMA.ScorecardFilter.acceptsElement = function PPSMA_ScorecardFilter$acceptsElement(element) {ULS01W:;
    if (isNullOrUndefined(element)) {
        return false;
    }
    PPSMA.ScorecardFilter._verificationElement$p.set_element(element);
    return (!isNullOrEmpty(PPSMA.ScorecardFilter._verificationElement$p.get_sortFilterColumn()));
}
PPSMA.ScorecardFilter.prototype = {
    
    get_sortFilterColumn: function PPSMA_ScorecardFilter$get_sortFilterColumn() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.sortFilterColumn);
    },
    
    get_aligned: function PPSMA_ScorecardFilter$get_aligned() {ULS01W:;
        return !isNullOrUndefined(this.get_element().getAttribute(PPSMA._scorecardConstants.aligned));
    },
    set_aligned: function PPSMA_ScorecardFilter$set_aligned(value) {ULS01W:;
        if (value) {
            this.get_element().setAttribute(PPSMA._scorecardConstants.aligned, '1');
        }
        else if (this.get_aligned()) {
            this.get_element().removeAttribute(PPSMA._scorecardConstants.aligned);
        }
        return value;
    },
    
    get_columnType: function PPSMA_ScorecardFilter$get_columnType() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.columnType);
    },
    
    get_headerType: function PPSMA_ScorecardFilter$get_headerType() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.headerType);
    },
    
    get_showSecondValue: function PPSMA_ScorecardFilter$get_showSecondValue() {ULS01W:;
        var value = this.get_element().getAttribute(PPSMA._scorecardConstants.showSecondValue);
        return !isNullOrEmpty(value) && value === 'True';
    },
    
    get_columnType2: function PPSMA_ScorecardFilter$get_columnType2() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.columnType2);
    },
    
    get_targetElements: function PPSMA_ScorecardFilter$get_targetElements() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.targetElements);
    }
}


PPSMA.ScorecardRow = function PPSMA_ScorecardRow(ele) {ULS01W:;
    PPSMA.ScorecardRow.initializeBase(this, [ ele ]);
}
PPSMA.ScorecardRow.acceptsElement = function PPSMA_ScorecardRow$acceptsElement(element) {ULS01W:;
    if (isNullOrUndefined(element)) {
        return false;
    }
    PPSMA.ScorecardRow._verificationElement$p.set_element(element);
    return (!isNullOrEmpty(PPSMA.ScorecardRow._verificationElement$p.get_rowId()));
}
PPSMA.ScorecardRow.prototype = {
    
    get_rowId: function PPSMA_ScorecardRow$get_rowId() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.rowId);
    }
}


PPSMA.ScorecardDataRow = function PPSMA_ScorecardDataRow(ele) {ULS01W:;
    PPSMA.ScorecardDataRow.initializeBase(this, [ ele ]);
}
PPSMA.ScorecardDataRow.acceptsElement = function PPSMA_ScorecardDataRow$acceptsElement(element) {ULS01W:;
    if (isNullOrUndefined(element)) {
        return false;
    }
    PPSMA.ScorecardDataRow._verificationElement$p.set_element(element);
    return (PPSMA.ScorecardRow.acceptsElement(element) && !isNullOrEmpty(PPSMA.ScorecardDataRow._verificationElement$p.get_parentId()));
}
PPSMA.ScorecardDataRow.prototype = {
    
    get_parentId: function PPSMA_ScorecardDataRow$get_parentId() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.parentId);
    },
    
    get_groupId: function PPSMA_ScorecardDataRow$get_groupId() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.groupId);
    },
    
    get_isCollapsed: function PPSMA_ScorecardDataRow$get_isCollapsed() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.isCollapsed);
    },
    set_isCollapsed: function PPSMA_ScorecardDataRow$set_isCollapsed(value) {ULS01W:;
        this.get_element().setAttribute(PPSMA._scorecardConstants.isCollapsed, value);
        return value;
    },
    
    get_isCellExpansionEnabled: function PPSMA_ScorecardDataRow$get_isCellExpansionEnabled() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.isCellExpansionEnabled);
    },
    
    get_isHiddenBasedOnFilterStatus: function PPSMA_ScorecardDataRow$get_isHiddenBasedOnFilterStatus() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.isHiddenBasedOnFilterStatus);
    },
    
    get_isDynamicallyExpandedRow: function PPSMA_ScorecardDataRow$get_isDynamicallyExpandedRow() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.isDynamicallyExpandedHeader);
    },
    
    get_cellPath: function PPSMA_ScorecardDataRow$get_cellPath() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.cellPath);
    }
}


PPSMA.ScorecardCell = function PPSMA_ScorecardCell(ele) {ULS01W:;
    PPSMA.ScorecardCell.initializeBase(this, [ ele ]);
}
PPSMA.ScorecardCell.acceptsElement = function PPSMA_ScorecardCell$acceptsElement(element) {ULS01W:;
    if (isNullOrUndefined(element)) {
        return false;
    }
    PPSMA.ScorecardCell._verificationElement$p.set_element(element);
    return (PPSMA.ScorecardCell._verificationElement$p.getCellId() !== -1);
}
PPSMA.ScorecardCell.prototype = {
    
    get_forceParameterRefresh: function PPSMA_ScorecardCell$get_forceParameterRefresh() {ULS01W:;
        var result = this.get_element().getAttribute('refresh');
        return !isNullOrUndefined(result) && result === 'true';
    },
    set_forceParameterRefresh: function PPSMA_ScorecardCell$set_forceParameterRefresh(value) {ULS01W:;
        this.get_element().setAttribute('refresh', value.toString());
        return value;
    },
    
    get_cellId: function PPSMA_ScorecardCell$get_cellId() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.columnId);
    },
    
    get_cellPath: function PPSMA_ScorecardCell$get_cellPath() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.cellPath);
    },
    
    get_rowId: function PPSMA_ScorecardCell$get_rowId() {ULS01W:;
        var ele = this.get_element().parentNode;
        while (!PPSMA.ScorecardRow.acceptsElement(ele)) {
            ele = ele.parentNode;
        }
        if (PPSMA.ScorecardRow.acceptsElement(ele)) {
            var row = new PPSMA.ScorecardRow(ele);
            return row.get_rowId();
        }
        return null;
    },
    
    get_cellText: function PPSMA_ScorecardCell$get_cellText() {ULS01W:;
        if (!isNullOrUndefined(this.get_element()) && PPSMA.ScorecardCell.acceptsElement(this.get_element())) {
            if (getBrowserIs().ie55up) {
                return this.get_element().innerText.trim();
            }
            else {
                return (this.get_element().textContent).trim();
            }
        }
        return '';
    },
    
    getCellId: function PPSMA_ScorecardCell$getCellId() {ULS01W:;
        var cellId = -1;
        if (this.get_cellId()) {
            cellId = parseInt(this.get_cellId());
            if (cellId >= 0) {
                return cellId;
            }
        }
        return cellId;
    },
    
    focus: function PPSMA_ScorecardCell$focus() {ULS01W:;
        if (!isNullOrUndefined(this.get_element()) && PPSMA.ScorecardCell.acceptsElement(this.get_element())) {
            this.get_element().focus();
        }
    }
}


PPSMA.ScorecardHeaderCell = function PPSMA_ScorecardHeaderCell(ele) {ULS01W:;
    PPSMA.ScorecardHeaderCell.initializeBase(this, [ ele ]);
}
PPSMA.ScorecardHeaderCell.acceptsElement = function PPSMA_ScorecardHeaderCell$acceptsElement(element) {ULS01W:;
    if (isNullOrUndefined(element)) {
        return false;
    }
    PPSMA.ScorecardHeaderCell._verificationElement$p.set_element(element);
    return (PPSMA.ScorecardHeaderCell._verificationElement$p.getCellId() !== -1 && !isNullOrEmpty(PPSMA.ScorecardHeaderCell._verificationElement$p.get_headerType()));
}
PPSMA.ScorecardHeaderCell.prototype = {
    
    get_isCellExpansionEnabled: function PPSMA_ScorecardHeaderCell$get_isCellExpansionEnabled() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.isCellExpansionEnabled);
    },
    
    get_groupId: function PPSMA_ScorecardHeaderCell$get_groupId() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.groupId);
    },
    
    get_cellType: function PPSMA_ScorecardHeaderCell$get_cellType() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.cellTypeAttribute);
    },
    
    get_headerType: function PPSMA_ScorecardHeaderCell$get_headerType() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.headerType);
    },
    
    get_isDrillEnabled: function PPSMA_ScorecardHeaderCell$get_isDrillEnabled() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.isDrillEnabled);
    },
    
    get_isDrillUpEnabled: function PPSMA_ScorecardHeaderCell$get_isDrillUpEnabled() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.isDrillUpEnabled);
    },
    
    get_isDrillDownEnabled: function PPSMA_ScorecardHeaderCell$get_isDrillDownEnabled() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.isDrillDownEnabled);
    }
}


PPSMA.ScorecardDataCell = function PPSMA_ScorecardDataCell(ele) {ULS01W:;
    PPSMA.ScorecardDataCell.initializeBase(this, [ ele ]);
}
PPSMA.ScorecardDataCell.acceptsElement = function PPSMA_ScorecardDataCell$acceptsElement(element) {ULS01W:;
    return (PPSMA.ScorecardCell.acceptsElement(element) && element.tagName.toLowerCase() === 'td');
}
PPSMA.ScorecardDataCell.prototype = {
    
    get_annnotationAction: function PPSMA_ScorecardDataCell$get_annnotationAction() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.annotationAction);
    },
    
    get_showDetailsEnabled: function PPSMA_ScorecardDataCell$get_showDetailsEnabled() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.showDetailsEnabled);
    },
    
    get_analyzeInDecompEnabled: function PPSMA_ScorecardDataCell$get_analyzeInDecompEnabled() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.analyzeInDecompEnabled);
    },
    
    get_detailsTupleXml: function PPSMA_ScorecardDataCell$get_detailsTupleXml() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.detailsTupleXml);
    },
    
    get_isAnnotated: function PPSMA_ScorecardDataCell$get_isAnnotated() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.annotated);
    },
    set_isAnnotated: function PPSMA_ScorecardDataCell$set_isAnnotated(value) {ULS01W:;
        this.get_element().setAttribute(PPSMA._scorecardConstants.annotated, value);
        return value;
    },
    
    get_cellValue: function PPSMA_ScorecardDataCell$get_cellValue() {ULS01W:;
        var cellValue = '';
        var scItemCells = this.get_element().getElementsByTagName('span');
        var bFoundValCell = false;
        if (scItemCells) {
            for (var i = 0; i < scItemCells.length && !bFoundValCell; i++) {
                var val = scItemCells[i].getAttribute(PPSMA._scorecardConstants.valueElement);
                if (!isNullUndefinedOrEmpty(val)) {
                    var value = scItemCells[i].innerHTML.trim();
                    cellValue = value;
                    if (value.length > 25) {
                        cellValue = value.substr(0, 25);
                        cellValue = cellValue + '...';
                    }
                    bFoundValCell = !isNullOrEmpty(cellValue);
                }
            }
        }
        return cellValue;
    }
}


PPSMA.TooltipCell = function PPSMA_TooltipCell(ele) {ULS01W:;
    PPSMA.TooltipCell.initializeBase(this, [ ele ]);
}
PPSMA.TooltipCell.prototype = {
    
    get_type: function PPSMA_TooltipCell$get_type() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.toolTipType);
    },
    
    get_description: function PPSMA_TooltipCell$get_description() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.toolTipDescription);
    },
    
    get_value: function PPSMA_TooltipCell$get_value() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.toolTipValue);
    }
}


PPSMA.ScorecardToolbarCell = function PPSMA_ScorecardToolbarCell(ele) {ULS01W:;
    PPSMA.ScorecardToolbarCell.initializeBase(this, [ ele ]);
}
PPSMA.ScorecardToolbarCell.acceptsElement = function PPSMA_ScorecardToolbarCell$acceptsElement(element) {ULS01W:;
    if (isNullOrUndefined(element)) {
        return false;
    }
    PPSMA.ScorecardToolbarCell._verificationElement$p.set_element(element);
    return !isNullUndefinedOrEmpty(PPSMA.ScorecardToolbarCell._verificationElement$p.get_buttonId());
}
PPSMA.ScorecardToolbarCell.prototype = {
    _toggled$p$1: false,
    
    get_buttonId: function PPSMA_ScorecardToolbarCell$get_buttonId() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.buttonId);
    },
    
    get_isToggle: function PPSMA_ScorecardToolbarCell$get_isToggle() {ULS01W:;
        return !isNullOrEmpty(this.get_element().getAttribute(PPSMA._scorecardConstants.isToggle));
    },
    
    get_toggled: function PPSMA_ScorecardToolbarCell$get_toggled() {ULS01W:;
        return this._toggled$p$1;
    },
    set_toggled: function PPSMA_ScorecardToolbarCell$set_toggled(value) {ULS01W:;
        this._toggled$p$1 = value;
        return value;
    },
    
    setIconSrc: function PPSMA_ScorecardToolbarCell$setIconSrc(icon) {ULS01W:;
        this._getIcon$p$1().src = icon;
    },
    
    setTitle: function PPSMA_ScorecardToolbarCell$setTitle(title) {ULS01W:;
        this._getIcon$p$1().title = title;
    },
    
    _getIcon$p$1: function PPSMA_ScorecardToolbarCell$_getIcon$p$1() {ULS01W:;
        if (!isNullOrUndefined(this.get_element())) {
            var col = this.get_element().getElementsByTagName('img');
            return col[0];
        }
        return null;
    }
}


PPSMA.ScorecardLink = function PPSMA_ScorecardLink(ele) {ULS01W:;
    PPSMA.ScorecardLink.initializeBase(this, [ ele ]);
}
PPSMA.ScorecardLink.prototype = {
    
    get_value: function PPSMA_ScorecardLink$get_value() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.valueElement);
    }
}


PPSMA.PlusMinusImage = function PPSMA_PlusMinusImage(ele) {ULS01W:;
    PPSMA.PlusMinusImage.initializeBase(this, [ ele ]);
}
PPSMA.PlusMinusImage.acceptsElement = function PPSMA_PlusMinusImage$acceptsElement(img) {ULS01W:;
    if (isNullOrUndefined(img)) {
        return false;
    }
    PPSMA.PlusMinusImage._verificationElement$p.set_element(img);
    return (!!PPSMA.PlusMinusImage._verificationElement$p.get_type() && PPSMA.PlusMinusImage._verificationElement$p.get_type() === PPSMA._scorecardConstants.plusMinusImgType);
}
PPSMA.PlusMinusImage.prototype = {
    
    get_src: function PPSMA_PlusMinusImage$get_src() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.imgSource);
    },
    set_src: function PPSMA_PlusMinusImage$set_src(value) {ULS01W:;
        this.get_element().setAttribute(PPSMA._scorecardConstants.imgSource, value);
        return value;
    },
    
    get_state: function PPSMA_PlusMinusImage$get_state() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.plusMinusState);
    },
    set_state: function PPSMA_PlusMinusImage$set_state(value) {ULS01W:;
        this.get_element().setAttribute(PPSMA._scorecardConstants.plusMinusState, value);
        return value;
    },
    
    get_type: function PPSMA_PlusMinusImage$get_type() {ULS01W:;
        return this.get_element().getAttribute(PPSMA._scorecardConstants.plusMinusType);
    }
}


PPSMA.ScorecardAjaxRenderRequest = function PPSMA_ScorecardAjaxRenderRequest() {
}
PPSMA.ScorecardAjaxRenderRequest.prototype = {
    ScorecardLocation: null,
    RenderTargetId: null,
    ResourcePath: null,
    ScorecardControlId: null,
    ScorecardControlType: null,
    RenderRequestRecord: null
}


PPSMA.ScorecardContextMenuHandler = function PPSMA_ScorecardContextMenuHandler(webPartId, scorecardLocation, selections, filters, render, statusFilterCallback) {ULS01W:;
    this._webPartId$p$0 = webPartId;
    this._scorecardLocation$p$0 = scorecardLocation;
    this._selections$p$0 = selections;
    this._filtersHandler$p$0 = filters;
    this._render$p$0 = render;
    this._statusFilterCallback$p$0 = statusFilterCallback;
    this._menu$p$0 = new PPSMA.ScorecardMenu(true);
    this._menu$p$0.setWebPartIdId(webPartId);
}
PPSMA.ScorecardContextMenuHandler.prototype = {
    _webPartId$p$0: null,
    _scorecardLocation$p$0: null,
    _selections$p$0: null,
    _filtersHandler$p$0: null,
    _render$p$0: null,
    _menu$p$0: null,
    _statusFilterCallback$p$0: null,
    _isAnnotationEnabled$p$0: false,
    _isDetailsEnabled$p$0: false,
    _allowFilters$p$0: false,
    _allowSort$p$0: false,
    _allowStatusFilter$p$0: false,
    _isInFilterMode$p$0: false,
    
    _canHandleEvent$i$0: function PPSMA_ScorecardContextMenuHandler$_canHandleEvent$i$0(e) {ULS01W:;
        var currEvent = PPSMA.EventsEx.getEvent(e);
        return (e.type === 'contextmenu' || (currEvent).button === 2 || (currEvent).keyCode === PPSMA._scorecardKeyboardNavigation._keyContextmenu$i || ((currEvent).keyCode === PPSMA._scorecardKeyboardNavigation._keyEnter$i && IsAccessibilityFeatureEnabled()));
    },
    
    createContextMenu: function PPSMA_ScorecardContextMenuHandler$createContextMenu(e, isTouch) {ULS01W:;
        this.loadFromViewState();
        var canHandleEvent = (isTouch) ? true : this._canHandleEvent$i$0(e);
        if (canHandleEvent) {
            var currElement = PPSMA.EventsEx.getCurrentElement(e);
            currElement = PPSMA.Scorecard._getCellElementFromEvent$i(currElement);
            if (PPSMA.ScorecardCell.acceptsElement(currElement)) {
                this._selections$p$0.selectCell(currElement);
            }
            this._menu$p$0.clearMenuItems();
            var showMenu = false;
            if (PPSMA.ScorecardDataCell.acceptsElement(currElement)) {
                var currCell = new PPSMA.ScorecardDataCell(currElement);
                if (this._canShowDataCellContextMenu$p$0(currCell)) {
                    this._initMenuActions$p$0(currCell);
                    showMenu = true;
                }
            }
            else if (PPSMA.ScorecardFilter.acceptsElement(currElement)) {
                var filter = new PPSMA.ScorecardFilter(currElement);
                this._initColumnMenuActions$p$0(filter);
                showMenu = true;
            }
            if (!showMenu && PPSMA.ScorecardHeaderCell.acceptsElement(currElement)) {
                var currCell = new PPSMA.ScorecardHeaderCell(currElement);
                if ((currCell.get_headerType() === 'Member') && (currCell.get_isDrillEnabled() === 'true')) {
                    this._initDrillActions$p$0(currCell);
                    showMenu = true;
                }
            }
            if (showMenu && !this._menu$p$0.isEmpty()) {
                this._menu$p$0.setElement(currElement);
                this._menu$p$0.registerContextMenu(e);
                this._menu$p$0.openMenu(new Sys.UI.DomEvent(e));
                if (IsAccessibilityFeatureEnabled()) {
                    PPSMA.ContextMenu.neutralizeBrowserMenu(new Sys.UI.DomEvent(e));
                }
            }
        }
    },
    
    _initDrillActions$p$0: function PPSMA_ScorecardContextMenuHandler$_initDrillActions$p$0(cell) {ULS01W:;
        this._addDrillUpMenuItem$p$0(cell);
        this._addDrillDownMenuItem$p$0(cell);
    },
    
    _addDrillUpMenuItem$p$0: function PPSMA_ScorecardContextMenuHandler$_addDrillUpMenuItem$p$0(cell) {ULS01W:;
        this._menu$p$0.addMenuSeparator();
        var item = new PPSMA.ScorecardMenuItem();
        item.set_caption(PPSMA.SR.OlapContextMenu_DrillUp);
        if ((cell.get_isDrillUpEnabled() === 'true') && !this._isInFilterMode$p$0) {
            item.set_action(String.format('scm_{0}.drillItemClicked(\'{1}\', \'{2}\', \'{3}\', \'{4}\');', this._webPartId$p$0, cell.get_cellPath(), cell.get_groupId(), cell.get_cellType(), 'DrillUp'));
        }
        else {
            item.set_isEnabled(false);
            item.set_action('');
        }
        item.set_iconPath(getPPSWebParts() + 'DrillUp.gif');
        item.set_altText(null);
        this._menu$p$0.addMenuItem(item);
    },
    
    _addDrillDownMenuItem$p$0: function PPSMA_ScorecardContextMenuHandler$_addDrillDownMenuItem$p$0(cell) {ULS01W:;
        this._menu$p$0.addMenuSeparator();
        var item = new PPSMA.ScorecardMenuItem();
        item.set_caption(PPSMA.SR.OlapContextMenu_DrillDown);
        if ((cell.get_isDrillDownEnabled() === 'true') && !this._isInFilterMode$p$0) {
            item.set_action(String.format('scm_{0}.drillItemClicked(\'{1}\', \'{2}\', \'{3}\', \'{4}\');', this._webPartId$p$0, cell.get_cellPath(), cell.get_groupId(), cell.get_cellType(), 'DrillDown'));
        }
        else {
            item.set_isEnabled(false);
            item.set_action('');
        }
        item.set_iconPath(getPPSWebParts() + 'DrillDown.gif');
        item.set_altText(null);
        this._menu$p$0.addMenuItem(item);
    },
    
    _initColumnMenuActions$p$0: function PPSMA_ScorecardContextMenuHandler$_initColumnMenuActions$p$0(filter) {ULS01W:;
        this._addSortingMenuItems$p$0(filter);
        this._addFilterMenuItems$p$0(filter);
        if (filter.get_sortFilterColumn() === 'RowHeaderText') {
            this._addStatusFilterMenuItems$p$0();
        }
    },
    
    _addStatusFilterMenuItems$p$0: function PPSMA_ScorecardContextMenuHandler$_addStatusFilterMenuItems$p$0() {ULS01W:;
        if (this._allowStatusFilter$p$0) {
            if (this._allowSort$p$0 || this._allowFilters$p$0) {
                this._menu$p$0.addMenuSeparator();
            }
            PPSMA.StatusFilterMenu._addStatusFilterMenuOptions$i(this._menu$p$0, this._webPartId$p$0, this._render$p$0, this._statusFilterCallback$p$0);
        }
    },
    
    _addSortingMenuItems$p$0: function PPSMA_ScorecardContextMenuHandler$_addSortingMenuItems$p$0(filter) {ULS01W:;
        if (this._allowSort$p$0) {
            this._menu$p$0.addMenuItem(this._createSortDescMenuItem$p$0(filter));
            this._menu$p$0.addMenuItem(this._createSortAscMenuItem$p$0(filter));
            this._menu$p$0.addMenuItem(this._createDontSortMenuItem$p$0(filter));
        }
    },
    
    _addFilterMenuItems$p$0: function PPSMA_ScorecardContextMenuHandler$_addFilterMenuItems$p$0(filter) {ULS01W:;
        if (this._allowFilters$p$0) {
            if (this._allowSort$p$0) {
                this._menu$p$0.addMenuSeparator();
            }
            this._menu$p$0.addMenuItem(this._createClearFilterMenuItem$p$0(filter));
            this._menu$p$0.addMenuItem(this._createValueFiltersMenuItem$p$0(filter));
            if (filter.get_sortFilterColumn() !== 'RowHeaderText' && (filter.get_columnType() !== 'System.String') || (filter.get_showSecondValue() && filter.get_columnType2() !== 'System.String')) {
                this._menu$p$0.addMenuItem(this._createTop10MenuItem$p$0(filter));
            }
        }
    },
    
    _createClearFilterMenuItem$p$0: function PPSMA_ScorecardContextMenuHandler$_createClearFilterMenuItem$p$0(filter) {ULS01W:;
        var enabled = this._filtersHandler$p$0._isValueFilterInUse$i$0(filter.get_sortFilterColumn()) || this._filtersHandler$p$0._isTop10FilterInUse$i$0(filter.get_sortFilterColumn());
        var icon = 'ClearFilterD.gif';
        if (enabled) {
            icon = 'ClearFilter.gif';
        }
        var item = new PPSMA.ScorecardMenuItem();
        item.set_action(String.format(PPSMA.ScorecardContextMenuHandler._sortFilterMenuActionTemplate$p, this._webPartId$p$0, PPSMA.EncodeEx.jsQuoteEncode(filter.get_sortFilterColumn()), PPSMA._scorecardSortAndFilterHandler.clearFilters));
        item.set_iconPath(getPPSWebParts() + icon);
        item.set_caption(PPSMA.SR.OlapContextMenu_ClearFilter);
        item.set_altText(PPSMA.SR.OlapContextMenu_ClearFilter);
        item.set_isEnabled(enabled);
        return item;
    },
    
    _createValueFiltersMenuItem$p$0: function PPSMA_ScorecardContextMenuHandler$_createValueFiltersMenuItem$p$0(filter) {ULS01W:;
        var enabled = this._filtersHandler$p$0._isValueFilterInUse$i$0(filter.get_sortFilterColumn());
        var item = new PPSMA.ScorecardMenuItem();
        item.set_action(String.format(PPSMA.ScorecardContextMenuHandler._sortFilterMenuActionTemplate$p, this._webPartId$p$0, PPSMA.EncodeEx.jsQuoteEncode(filter.get_sortFilterColumn()), PPSMA._scorecardSortAndFilterHandler.valueFilters));
        item.set_caption(PPSMA.SR.OlapContextMenu_ValueFilter);
        item.set_altText(PPSMA.SR.OlapContextMenu_ValueFilter);
        if (enabled) {
            item.set_iconPath(getPPSWebParts() + 'Check.gif');
        }
        return item;
    },
    
    _createTop10MenuItem$p$0: function PPSMA_ScorecardContextMenuHandler$_createTop10MenuItem$p$0(filter) {ULS01W:;
        var inUse = this._filtersHandler$p$0._isTop10FilterInUse$i$0(filter.get_sortFilterColumn());
        var item = new PPSMA.ScorecardMenuItem();
        item.set_action(String.format(PPSMA.ScorecardContextMenuHandler._sortFilterMenuActionTemplate$p, this._webPartId$p$0, PPSMA.EncodeEx.jsQuoteEncode(filter.get_sortFilterColumn()), PPSMA._scorecardSortAndFilterHandler.top10));
        item.set_caption(PPSMA.SR.OlapContextMenu_TopFilter);
        item.set_altText(PPSMA.SR.OlapContextMenu_TopFilter);
        item.set_isEnabled(filter.get_columnType() === 'System.Decimal' || (filter.get_showSecondValue() && filter.get_columnType2() === 'System.Decimal'));
        if (inUse) {
            item.set_iconPath(getPPSWebParts() + 'Check.gif');
        }
        return item;
    },
    
    _createSortDescMenuItem$p$0: function PPSMA_ScorecardContextMenuHandler$_createSortDescMenuItem$p$0(filter) {ULS01W:;
        var icon = 'SortAscNum.gif';
        var caption = PPSMA.SR.OlapContextMenu_LargeToSmall;
        if (filter.get_columnType() === 'System.String') {
            icon = 'SortDescStr.gif';
            caption = PPSMA.SR.ScorecardSorting_Descending;
        }
        var item = new PPSMA.ScorecardMenuItem();
        item.set_action(String.format(PPSMA.ScorecardContextMenuHandler._sortFilterMenuActionTemplate$p, this._webPartId$p$0, PPSMA.EncodeEx.jsQuoteEncode(filter.get_sortFilterColumn()), PPSMA._scorecardSortAndFilterHandler.sortDesc));
        item.set_iconPath(getPPSWebParts() + icon);
        item.set_caption(caption);
        item.set_altText(caption);
        item.set_isToggleItem(true);
        item.set_isSelected(this._filtersHandler$p$0._getPreviousSortValue$i$0(filter.get_sortFilterColumn()) === 'DESC');
        return item;
    },
    
    _createSortAscMenuItem$p$0: function PPSMA_ScorecardContextMenuHandler$_createSortAscMenuItem$p$0(filter) {ULS01W:;
        var icon = 'SortDescNum.gif';
        var caption = PPSMA.SR.OlapContextMenu_SmallToLarge;
        if (filter.get_columnType() === 'System.String') {
            icon = 'SortAscStr.gif';
            caption = PPSMA.SR.ScorecardSorting_Ascending;
        }
        var item = new PPSMA.ScorecardMenuItem();
        item.set_action(String.format(PPSMA.ScorecardContextMenuHandler._sortFilterMenuActionTemplate$p, this._webPartId$p$0, PPSMA.EncodeEx.jsQuoteEncode(filter.get_sortFilterColumn()), PPSMA._scorecardSortAndFilterHandler.sortAsc));
        item.set_iconPath(getPPSWebParts() + icon);
        item.set_caption(caption);
        item.set_altText(caption);
        item.set_isToggleItem(true);
        item.set_isSelected(this._filtersHandler$p$0._getPreviousSortValue$i$0(filter.get_sortFilterColumn()) === 'ASC');
        return item;
    },
    
    _createDontSortMenuItem$p$0: function PPSMA_ScorecardContextMenuHandler$_createDontSortMenuItem$p$0(filter) {ULS01W:;
        var item = new PPSMA.ScorecardMenuItem();
        item.set_action(String.format(PPSMA.ScorecardContextMenuHandler._sortFilterMenuActionTemplate$p, this._webPartId$p$0, PPSMA.EncodeEx.jsQuoteEncode(filter.get_sortFilterColumn()), PPSMA._scorecardSortAndFilterHandler.dontSort));
        item.set_caption(PPSMA.SR.OlapContextMenu_NoSort);
        item.set_altText(PPSMA.SR.OlapContextMenu_NoSort);
        item.set_isEnabled(!isNullOrEmpty(this._filtersHandler$p$0._getPreviousSortValue$i$0(filter.get_sortFilterColumn())));
        return item;
    },
    
    _initMenuActions$p$0: function PPSMA_ScorecardContextMenuHandler$_initMenuActions$p$0(cell) {ULS01W:;
        this._addCommentMenuItem$p$0(cell);
        this._addLinkMenuItems$p$0(cell);
        this._addShowDetailsMenuItem$p$0(cell);
        this._addAnalyzeInDecompositionTreeMenuItem$p$0(cell);
        this._addCustomMenuItems$p$0(cell);
    },
    
    _addCustomMenuItems$p$0: function PPSMA_ScorecardContextMenuHandler$_addCustomMenuItems$p$0(cell) {ULS01W:;
        try {
            var list = GetCustomMenuItems(cell);
            for (var i = 0; i < list.length; i++) {
                if (Object.getType(list[i]) === PPSMA.ScorecardMenuItem) {
                    this._menu$p$0.addMenuItem(list[i]);
                }
            }
        }
        catch ($$e_3) {
        }
    },
    
    _addCommentMenuItem$p$0: function PPSMA_ScorecardContextMenuHandler$_addCommentMenuItem$p$0(cell) {ULS01W:;
        if (this._isAnnotationEnabled$p$0) {
            var result = new Sys.StringBuilder();
            result.append('scm_');
            result.append(this._webPartId$p$0);
            result.append('.showComments(\'');
            result.append(cell.get_rowId());
            result.append('\',\'');
            result.append(cell.get_cellId());
            result.append('\');');
            var item = new PPSMA.ScorecardMenuItem();
            item.set_caption(getAnnotationText());
            item.set_action(result.toString());
            item.set_iconPath(getPPSWebParts() + 'annIcon.gif');
            item.set_altText(getAnnotationText());
            item.set_isEnabled(!isNullOrEmpty(cell.get_cellPath()));
            this._menu$p$0.addMenuItem(item);
        }
    },
    
    _addLinkMenuItems$p$0: function PPSMA_ScorecardContextMenuHandler$_addLinkMenuItems$p$0(cell) {ULS01W:;
        if (this._isAnnotationEnabled$p$0 && !isNullUndefinedOrEmpty(cell.get_annnotationAction())) {
            this._menu$p$0.addMenuSeparator();
            var linkActionsList = cell.get_annnotationAction().split(PPSMA.ScorecardContextMenuHandler._separator$p);
            for (var i = 0; i < linkActionsList.length; i++) {
                if (!isNullOrEmpty(linkActionsList[i])) {
                    var linkActionsString = linkActionsList[i].split('$$');
                    if (linkActionsString.length >= 2) {
                        var item = new PPSMA.ScorecardMenuItem();
                        item.set_caption(decodeURI(linkActionsString[0]));
                        item.set_action(String.format('window.open(\'{0}\')', linkActionsString[1]));
                        item.set_iconPath(getPPSWebParts() + 'Link.gif');
                        item.set_altText(null);
                        this._menu$p$0.addMenuItem(item);
                    }
                }
            }
        }
    },
    
    _addAnalyzeInDecompositionTreeMenuItem$p$0: function PPSMA_ScorecardContextMenuHandler$_addAnalyzeInDecompositionTreeMenuItem$p$0(cell) {ULS01W:;
        if (this._isDetailsEnabled$p$0) {
            this._menu$p$0.addMenuSeparator();
            var enabled = cell.get_analyzeInDecompEnabled();
            var item = new PPSMA.ScorecardMenuItem();
            item.set_caption(getAnalyzeInDecompText());
            var tupleXml = '';
            if ((cell.get_detailsTupleXml()) && (cell.get_detailsTupleXml() !== '')) {
                tupleXml = PPSMA.EncodeEx.xmlDecode(cell.get_detailsTupleXml());
            }
            var tupleHasKpiMultMemberFilters = this.checkTupleForKpiMultipleMemberFilters(tupleXml);
            if (enabled === 'True' && !tupleHasKpiMultMemberFilters && isSilverlightInstalled('3.0.40624')) {
                var clientViewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
                var gvInputsXml = clientViewState['GV_Inputs'];
                var viewStateXml = this.decompViewStateXml(gvInputsXml, tupleXml);
                viewStateXml = viewStateXml.replace(new RegExp('\n', 'g'), '');
                viewStateXml = viewStateXml.replace(new RegExp('\r', 'g'), '');
                viewStateXml = viewStateXml.replace(new RegExp('\t', 'g'), '');
                if (PPSMA.NewWindow.isInMoreAccessibleMode()) {
                    var detailsTupleXml = PPSMA.EncodeEx.xmlDecode(cell.get_detailsTupleXml());
                    detailsTupleXml = detailsTupleXml.replace(new RegExp('\"', 'g'), '\\\'');
                    viewStateXml = viewStateXml.replace(new RegExp('\"', 'g'), '\\\'');
                    item.set_action(String.format('PPSMA.Scorecard.analyzeInDecompositionTree(\'{0}\', \'{1}\', \'{2}\')', this._scorecardLocation$p$0, detailsTupleXml, viewStateXml));
                }
                else {
                    item.set_action(String.format('PPSMA.Scorecard.analyzeInDecompositionTree(\'{0}\', \'{1}\', \'{2}\')', this._scorecardLocation$p$0, cell.get_detailsTupleXml(), PPSMA.EncodeEx.xmlEncode(encodeURI(viewStateXml))));
                }
            }
            else {
                item.set_isEnabled(false);
                item.set_action('');
            }
            item.set_iconPath('');
            item.set_altText(null);
            this._menu$p$0.addMenuItem(item);
        }
    },
    
    checkTupleForKpiMultipleMemberFilters: function PPSMA_ScorecardContextMenuHandler$checkTupleForKpiMultipleMemberFilters(tupleXml) {ULS01W:;
        if ((tupleXml) && (tupleXml !== '')) {
            var xtupleXmlDoc = PPSMA.XmlEx.loadXml(tupleXml);
            var rowElements = xtupleXmlDoc.getElementsByTagName('RowMembers');
            if (rowElements.length === 1) {
                var val = rowElements[0].getAttribute('kpiMultMembers');
                if ((val) && (val === 'yes')) {
                    return true;
                }
            }
            var colElements = xtupleXmlDoc.getElementsByTagName('ColumnMembers');
            if (colElements.length === 1) {
                var val = colElements[0].getAttribute('kpiMultMembers');
                if ((val) && (val === 'yes')) {
                    return true;
                }
            }
        }
        return false;
    },
    
    decompViewStateXml: function PPSMA_ScorecardContextMenuHandler$decompViewStateXml(gvInputsXml, tupleXml) {ULS01W:;
        var xdoc = PPSMA.XmlEx.loadXml('<ViewState/>');
        var xdoc2 = PPSMA.XmlEx.loadXml(gvInputsXml);
        var gvInputsElem = xdoc2.documentElement;
        var cloneElem = gvInputsElem.cloneNode(true);
        xdoc.documentElement.appendChild(cloneElem);
        var kpiTimeFiltersElem = xdoc.createElement('TimeFilters');
        xdoc.documentElement.appendChild(kpiTimeFiltersElem);
        var kpiDataSourceLocationElem = xdoc.createElement('KpiDataSource');
        xdoc.documentElement.appendChild(kpiDataSourceLocationElem);
        var xtupleXmlDoc = PPSMA.XmlEx.loadXml(tupleXml);
        var rowElements = xtupleXmlDoc.getElementsByTagName('RowMembers');
        if (rowElements.length === 1) {
            var val = rowElements[0].getAttribute('timeFilter');
            if ((val) && (val !== '')) {
                var formulaValueElem = xdoc.createElement('Formula');
                formulaValueElem.setAttribute('name', val);
                kpiTimeFiltersElem.appendChild(formulaValueElem);
            }
            val = rowElements[0].getAttribute('kpiLocation');
            if ((val) && (val !== '')) {
                kpiDataSourceLocationElem.setAttribute('location', val);
            }
        }
        var colElements = xtupleXmlDoc.getElementsByTagName('ColumnMembers');
        if (colElements.length === 1) {
            var val = colElements[0].getAttribute('timeFilter');
            if ((val) && (val !== '')) {
                var formulaValueElem = xdoc.createElement('Formula');
                formulaValueElem.setAttribute('name', val);
                kpiTimeFiltersElem.appendChild(formulaValueElem);
            }
            val = colElements[0].getAttribute('kpiLocation');
            if ((val) && (val !== '')) {
                kpiDataSourceLocationElem.setAttribute('location', val);
            }
        }
        return PPSMA.XmlEx.getXml(xdoc.documentElement);
    },
    
    _addShowDetailsMenuItem$p$0: function PPSMA_ScorecardContextMenuHandler$_addShowDetailsMenuItem$p$0(cell) {ULS01W:;
        if (this._isDetailsEnabled$p$0) {
            this._menu$p$0.addMenuSeparator();
            var enabled = cell.get_showDetailsEnabled();
            var item = new PPSMA.ScorecardMenuItem();
            item.set_caption(getShowDetailsText());
            if (enabled === 'True') {
                if (!PPSMA.NewWindow.isInMoreAccessibleMode()) {
                    item.set_action(String.format('PPSMA.Scorecard.showDetails(\'{0}\', \'{1}\', \'{2}\')', this._scorecardLocation$p$0, cell.get_detailsTupleXml(), this._webPartId$p$0));
                }
                else {
                    var detailsTupleXml = PPSMA.EncodeEx.xmlDecode(cell.get_detailsTupleXml());
                    detailsTupleXml = detailsTupleXml.replace(new RegExp('\"', 'g'), '\\\'');
                    item.set_action(String.format('PPSMA.Scorecard.showDetails(\'{0}\', \'{1}\', \'{2}\')', this._scorecardLocation$p$0, detailsTupleXml, this._webPartId$p$0));
                }
            }
            else {
                item.set_isEnabled(false);
                item.set_action('');
            }
            item.set_iconPath('');
            item.set_altText(null);
            this._menu$p$0.addMenuItem(item);
        }
    },
    
    loadFromViewState: function PPSMA_ScorecardContextMenuHandler$loadFromViewState() {ULS01W:;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        this._isAnnotationEnabled$p$0 = this._convertToBool$p$0(viewState[PPSMA.ScorecardControlManager._vS_ShowAnnotations$i]);
        this._isDetailsEnabled$p$0 = this._convertToBool$p$0(viewState[PPSMA.ScorecardControlManager._vS_ShowDetails$i]);
        this._allowFilters$p$0 = this._convertToBool$p$0(viewState[PPSMA.ScorecardControlManager._vS_AllowFilter$i]);
        this._allowSort$p$0 = this._convertToBool$p$0(viewState[PPSMA.ScorecardControlManager._vS_AllowSort$i]);
        this._allowStatusFilter$p$0 = this._convertToBool$p$0(viewState[PPSMA.ScorecardControlManager._vS_AllowStatusFilter$i]);
        this._isInFilterMode$p$0 = this._convertToBool$p$0(viewState[PPSMA.ScorecardControlManager._vS_FilterMode$i]);
    },
    
    _canShowDataCellContextMenu$p$0: function PPSMA_ScorecardContextMenuHandler$_canShowDataCellContextMenu$p$0(currCell) {ULS01W:;
        return ((this._isAnnotationEnabled$p$0 || this._isDetailsEnabled$p$0) && currCell.getCellId() > 0);
    },
    
    _convertToBool$p$0: function PPSMA_ScorecardContextMenuHandler$_convertToBool$p$0(value) {ULS01W:;
        var result = false;
        if (value === 'true') {
            result = true;
        }
        return result;
    }
}


PPSMA._scorecardExpandDrillHandler = function PPSMA__scorecardExpandDrillHandler() {
}
PPSMA._scorecardExpandDrillHandler.addExpandDrillTransform = function PPSMA__scorecardExpandDrillHandler$addExpandDrillTransform(expandDrillTransform, webPartId) {ULS01W:;
    var expandDrillTransforms = [];
    if (null !== PPSMA._scorecardExpandDrillHandler._getExpandDrillTransforms$p(webPartId)) {
        Array.addRange(expandDrillTransforms, PPSMA._scorecardExpandDrillHandler._getExpandDrillTransforms$p(webPartId));
    }
    Array.add(expandDrillTransforms, expandDrillTransform);
    PPSMA._scorecardExpandDrillHandler._saveExpandDrillTransforms$p(expandDrillTransforms, webPartId);
}
PPSMA._scorecardExpandDrillHandler.removeExpandTransform = function PPSMA__scorecardExpandDrillHandler$removeExpandTransform(groupId, cellPath, webPartId) {ULS01W:;
    var expandDrillTransforms = [];
    var expandDrillTransform;
    var renderPage = false;
    if (null !== PPSMA._scorecardExpandDrillHandler._getExpandDrillTransforms$p(webPartId)) {
        Array.addRange(expandDrillTransforms, PPSMA._scorecardExpandDrillHandler._getExpandDrillTransforms$p(webPartId));
        for (var i = 0; i < expandDrillTransforms.length; i++) {
            expandDrillTransform = expandDrillTransforms[i];
            if ((groupId === expandDrillTransform.GroupId) && (cellPath === expandDrillTransform.CellPath) && ('Expand' === expandDrillTransform.Operation)) {
                Array.remove(expandDrillTransforms, expandDrillTransform);
                renderPage = true;
            }
        }
        PPSMA._scorecardExpandDrillHandler._saveExpandDrillTransforms$p(expandDrillTransforms, webPartId);
    }
    return renderPage;
}
PPSMA._scorecardExpandDrillHandler._getExpandDrillTransforms$p = function PPSMA__scorecardExpandDrillHandler$_getExpandDrillTransforms$p(webPartId) {ULS01W:;
    var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(webPartId);
    if (viewState[PPSMA.ScorecardControlManager._vS_ExpandDrillTransforms$i]) {
        var expandDrillTransforms = Sys.Serialization.JavaScriptSerializer.deserialize(viewState[PPSMA.ScorecardControlManager._vS_ExpandDrillTransforms$i]);
        return expandDrillTransforms;
    }
    return null;
}
PPSMA._scorecardExpandDrillHandler._saveExpandDrillTransforms$p = function PPSMA__scorecardExpandDrillHandler$_saveExpandDrillTransforms$p(expandDrillTransforms, webPartId) {ULS01W:;
    var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(webPartId);
    viewState[PPSMA.ScorecardControlManager._vS_ExpandDrillTransforms$i] = Sys.Serialization.JavaScriptSerializer.serialize(expandDrillTransforms);
    PPSMA.ClientConnectionManager.get_instance().setViewState(webPartId, viewState);
}


PPSMA.ScorecardComments = function PPSMA_ScorecardComments(webPartId, scorecardLocation) {ULS01W:;
    this.$$d_callAjaxMethodCompleted = Function.createDelegate(this, this.callAjaxMethodCompleted);
    this._webPartId$p$0 = webPartId;
    this._scorecardLocation$p$0 = scorecardLocation;
}
PPSMA.ScorecardComments.prototype = {
    _webPartId$p$0: null,
    _scorecardLocation$p$0: null,
    _webRequest$p$0: null,
    _callBack$p$0: null,
    
    get_callBack: function PPSMA_ScorecardComments$get_callBack() {ULS01W:;
        return this._callBack$p$0;
    },
    set_callBack: function PPSMA_ScorecardComments$set_callBack(value) {ULS01W:;
        this._callBack$p$0 = value;
        return value;
    },
    
    get_webPartId: function PPSMA_ScorecardComments$get_webPartId() {ULS01W:;
        return this._webPartId$p$0;
    },
    
    getAnnotations: function PPSMA_ScorecardComments$getAnnotations(cellPath) {ULS01W:;
        this._callAjaxMethod$p$0(PPSMA.ScorecardComments._methodGet$p, cellPath, null);
    },
    
    updateAnnotation: function PPSMA_ScorecardComments$updateAnnotation(cellPath, comment) {ULS01W:;
        this._callAjaxMethod$p$0(PPSMA.ScorecardComments._methodUpdate$p, cellPath, comment);
    },
    
    _callAjaxMethod$p$0: function PPSMA_ScorecardComments$_callAjaxMethod$p$0(method, cellPath, comment) {ULS01W:;
        this._cancelCallAjaxMethod$p$0();
        this._webRequest$p$0 = new Sys.Net.WebRequest();
        var renderRequest = new PPSMA.ScorecardAjaxCommentRequest();
        renderRequest.ScorecardLocation = this._scorecardLocation$p$0;
        renderRequest.CellPath = cellPath;
        renderRequest.PageFilters = this.getPageFilters();
        renderRequest.Method = method;
        renderRequest.ConfiguredViewId = this.getConfiguredViewId();
        renderRequest.Comment = comment;
        var bodyDictionary = { request: renderRequest };
        this._webRequest$p$0.set_url(this.getCommentsUrl());
        this._webRequest$p$0.set_body(Sys.Serialization.JavaScriptSerializer.serialize(bodyDictionary));
        this._webRequest$p$0.set_httpVerb('POST');
        this._webRequest$p$0.get_headers()['Content-Type'] = 'application/json; charset=utf-8';
        this._webRequest$p$0.add_completed(this.$$d_callAjaxMethodCompleted);
        this._webRequest$p$0.invoke();
    },
    
    _cancelCallAjaxMethod$p$0: function PPSMA_ScorecardComments$_cancelCallAjaxMethod$p$0() {ULS01W:;
        if (isNullOrUndefined(this._webRequest$p$0) || isNullOrUndefined(this._webRequest$p$0.get_executor()) || this._webRequest$p$0.get_executor().get_aborted()) {
            return;
        }
        this._webRequest$p$0.get_executor().abort();
        this._webRequest$p$0 = null;
    },
    
    callAjaxMethodCompleted: function PPSMA_ScorecardComments$callAjaxMethodCompleted(executor) {ULS01W:;
        if (executor.get_aborted()) {
            return;
        }
        if (executor.get_statusCode() === 200) {
            var result;
            result = PPSMA.WebRequestExecuterEx.simpleResult(executor, 'ScorecardAjaxCommentResult');
            if (!isNullOrUndefined(result)) {
                if (!isNullUndefinedOrEmpty(result.ErrorMessage)) {
                    alert(result.ErrorMessage);
                }
                else {
                    if (!isNullOrUndefined(this.get_callBack())) {
                        var recs = null;
                        var addAnnotation = false;
                        if (!isNullUndefinedOrEmpty(result.Comments)) {
                            recs = Sys.Serialization.JavaScriptSerializer.deserialize(result.Comments);
                        }
                        if (!compareStrings(result.Method, PPSMA.ScorecardComments._methodGet$p)) {
                            if (!isNullUndefinedOrEmpty(recs)) {
                                addAnnotation = true;
                            }
                            else {
                                addAnnotation = false;
                            }
                        }
                        else if (!compareStrings(result.Method, PPSMA.ScorecardComments._methodUpdate$p)) {
                            addAnnotation = true;
                        }
                        this.get_callBack()(recs, result.UserName, addAnnotation);
                    }
                }
            }
        }
    },
    
    getCommentsUrl: function PPSMA_ScorecardComments$getCommentsUrl() {ULS01W:;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        return viewState[PPSMA.ScorecardControlManager._vS_CommentsUrl$i];
    },
    
    getConfiguredViewId: function PPSMA_ScorecardComments$getConfiguredViewId() {ULS01W:;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        return viewState[PPSMA.ScorecardControlManager._vS_ConfiguredViewId$i];
    },
    
    getPageFilters: function PPSMA_ScorecardComments$getPageFilters() {ULS01W:;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        return viewState[PPSMA.ScorecardControlManager._vS_PageFilters$i];
    }
}


PPSMA.ScorecardControlManager = function PPSMA_ScorecardControlManager(scorecardLocation, webPartId, resourcePath, currencySeparator, decimalSeparator, dateFormatString) {ULS01W:;
    this.$$d__renderAjaxControlCompleted$p$0 = Function.createDelegate(this, this._renderAjaxControlCompleted$p$0);
    this.$$d__renderAjaxControlCancelled$p$0 = Function.createDelegate(this, this._renderAjaxControlCancelled$p$0);
    this.$$d_doShowContextMenu = Function.createDelegate(this, this.doShowContextMenu);
    this.$$d__statusFilterMenuClosed$p$0 = Function.createDelegate(this, this._statusFilterMenuClosed$p$0);
    this.$$d__render$p$0 = Function.createDelegate(this, this._render$p$0);
    this.$$d__updateSortAndFilterSelectionCompleted$p$0 = Function.createDelegate(this, this._updateSortAndFilterSelectionCompleted$p$0);
    this._scorecardLocation$p$0 = scorecardLocation;
    this._webPartId$p$0 = webPartId;
    this._resourcePath$p$0 = resourcePath;
    this._scorecardSelections$p$0 = new PPSMA._scorecardCellSelection(webPartId);
    this._scorecardExpandCollapseState$p$0 = new PPSMA.ScorecardExpandCollapseState(webPartId);
    this._sortAndFilterHandler$p$0 = new PPSMA._scorecardSortAndFilterHandler(this.$$d__updateSortAndFilterSelectionCompleted$p$0, webPartId, currencySeparator, decimalSeparator);
    this._scorecardNavigation$p$0 = new PPSMA._scorecardKeyboardNavigation(webPartId, this._scorecardSelections$p$0);
    this._menuHandler$p$0 = new PPSMA.ScorecardContextMenuHandler(webPartId, this._scorecardLocation$p$0, this._scorecardSelections$p$0, this._sortAndFilterHandler$p$0, this.$$d__render$p$0, this.$$d__statusFilterMenuClosed$p$0);
    this._toolbarHandler$p$0 = new PPSMA.ScorecardToolbarHandler(webPartId, this.$$d__render$p$0, this._scorecardExpandCollapseState$p$0);
    this._loadedIndicatorImages$p$0 = 0;
    this._dateFormatString$p$0 = dateFormatString;
    var $$t_7 = this;
    $addHandler(document.body, 'touchstart', function(e) {
    });
}
PPSMA.ScorecardControlManager.getControlId = function PPSMA_ScorecardControlManager$getControlId(webPartId) {ULS01W:;
    var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(webPartId);
    return String.format('scctrl{0}_{1}', webPartId, viewState[PPSMA.ScorecardControlManager._vS_TableId$i]);
}
PPSMA.ScorecardControlManager.prototype = {
    _scorecardLocation$p$0: null,
    _webPartId$p$0: null,
    _resourcePath$p$0: null,
    _webRequest$p$0: null,
    _scorecardSelections$p$0: null,
    _scorecardExpandCollapseState$p$0: null,
    _sortAndFilterHandler$p$0: null,
    _scorecardNavigation$p$0: null,
    _menuHandler$p$0: null,
    _toolbarHandler$p$0: null,
    _lastFocusedElement$p$0: null,
    _lastSavedClientViewState$p$0: null,
    _screenTouchPositionX$p$0: 0,
    _screenTouchPositionY$p$0: 0,
    _lastTimeout$p$0: 0,
    _lastTouchEvent$p$0: null,
    _loadedIndicatorImages$p$0: 0,
    _totalIndicatorImages$p$0: 0,
    _dateFormatString$p$0: null,
    
    initializeManager: function PPSMA_ScorecardControlManager$initializeManager() {ULS01W:;
        this.saveCurrentViewState();
        this.loadFromViewState();
        var divElement = null;
        divElement = $get(this._webPartId$p$0);
        divElement.style.position = 'static';
        this._totalIndicatorImages$p$0 = this._getScorecardTableIndicatorImageCount$p$0(this._webPartId$p$0);
        if (!this._totalIndicatorImages$p$0) {
            PPSMA.Scorecard._fixScorecardAlignment$i(this._webPartId$p$0);
        }
    },
    
    get_toolbarHandler: function PPSMA_ScorecardControlManager$get_toolbarHandler() {ULS01W:;
        return this._toolbarHandler$p$0;
    },
    
    get_menuHandler: function PPSMA_ScorecardControlManager$get_menuHandler() {ULS01W:;
        return this._menuHandler$p$0;
    },
    
    loadFromViewState: function PPSMA_ScorecardControlManager$loadFromViewState() {ULS01W:;
        PPSMA._cssEx._loadCss$i(this._webPartId$p$0);
        this._scorecardSelections$p$0.loadFromViewState();
        if (!isNullOrUndefined(this._lastFocusedElement$p$0)) {
            this._lastFocusedElement$p$0.focus();
            this._lastFocusedElement$p$0 = null;
        }
        this._sortAndFilterHandler$p$0.loadFromViewState();
        this._toolbarHandler$p$0.loadFromClientViewState();
        this._scorecardExpandCollapseState$p$0.loadRowsFromViewState();
        this._scorecardExpandCollapseState$p$0.loadColumnsFromViewState();
    },
    
    saveToViewState: function PPSMA_ScorecardControlManager$saveToViewState() {ULS01W:;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        viewState[PPSMA.ScorecardControlManager._vS_AccessibilityMode$i] = IsAccessibilityFeatureEnabled().toString();
    },
    
    saveCurrentViewState: function PPSMA_ScorecardControlManager$saveCurrentViewState() {ULS01W:;
        this._lastSavedClientViewState$p$0 = PPSMA.Scorecard._cloneClientViewState$i(PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0));
    },
    
    restoreSavedClientViewState: function PPSMA_ScorecardControlManager$restoreSavedClientViewState() {ULS01W:;
        var currentViewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        this._lastSavedClientViewState$p$0[PPSMA.ScorecardControlManager._vS_CollapsedColumns$i] = currentViewState[PPSMA.ScorecardControlManager._vS_CollapsedColumns$i];
        this._lastSavedClientViewState$p$0[PPSMA.ScorecardControlManager._vS_CollapsedRows$i] = currentViewState[PPSMA.ScorecardControlManager._vS_CollapsedRows$i];
        this._lastSavedClientViewState$p$0[PPSMA.ScorecardControlManager._vS_SelectedCell$i] = currentViewState[PPSMA.ScorecardControlManager._vS_SelectedCell$i];
        PPSMA.ClientConnectionManager.get_instance().setViewState(this._webPartId$p$0, this._lastSavedClientViewState$p$0);
    },
    
    showComments: function PPSMA_ScorecardControlManager$showComments(rowId, cellId) {ULS01W:;
        var cell = PPSMA.Scorecard._getScorecardCell$i(this._webPartId$p$0, rowId, cellId);
        if (!isNullOrUndefined(cell) && PPSMA.ScorecardDataCell.acceptsElement(cell.get_element())) {
            var cellData = new PPSMA.ScorecardDataCell(cell.get_element());
            var comments = new PPSMA.CommentsDialog(cellData, new PPSMA.ScorecardComments(this._webPartId$p$0, this._scorecardLocation$p$0), this._dateFormatString$p$0);
            comments.set_allowMaximize(true);
            comments.show();
        }
    },
    
    showStatusFiltersMenu: function PPSMA_ScorecardControlManager$showStatusFiltersMenu(e) {ULS01W:;
        var anchor = PPSMA.EventsEx.getCurrentElement(e);
        var menu = PPSMA.StatusFilterMenu._getStatusFilterMenu$i(this._webPartId$p$0, anchor, this.$$d__render$p$0, this.$$d__statusFilterMenuClosed$p$0);
        menu.registerContextMenu(e);
    },
    
    _statusFilterMenuClosed$p$0: function PPSMA_ScorecardControlManager$_statusFilterMenuClosed$p$0(filterItems) {ULS01W:;
        if (!PPSMA.StatusFilterMenu.isAnyFilterSelected(filterItems)) {
            this._toolbarHandler$p$0.setButtonToggled(PPSMA.ScorecardToolbarHandler._buttonFilterStatus$i, false);
        }
        else {
            this._toolbarHandler$p$0.setButtonToggled(PPSMA.ScorecardToolbarHandler._buttonFilterStatus$i, true);
        }
    },
    
    sortFilterItemClicked: function PPSMA_ScorecardControlManager$sortFilterItemClicked(column, itemClicked) {ULS01W:;
        this._sortAndFilterHandler$p$0._menuItemClicked$i$0(column, itemClicked);
    },
    
    _updateSortAndFilterSelectionCompleted$p$0: function PPSMA_ScorecardControlManager$_updateSortAndFilterSelectionCompleted$p$0(treeMode) {ULS01W:;
        this._toolbarHandler$p$0.setTreeMode(treeMode);
        this._toolbarHandler$p$0.setButtonToggled(PPSMA.ScorecardToolbarHandler._buttonTreeMode$i, treeMode);
        this._render$p$0();
    },
    
    drillItemClicked: function PPSMA_ScorecardControlManager$drillItemClicked(cellPath, groupId, cellType, operation) {ULS01W:;
        var drillTransform = new PPSMA.ExpandDrillTransform();
        drillTransform.CellPath = cellPath;
        drillTransform.GroupId = groupId;
        drillTransform.Type = cellType;
        drillTransform.Operation = operation;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        if (cellType === 'Column') {
            viewState[PPSMA.ScorecardControlManager._vS_CollapsedColumns$i] = 'DrillOperation';
        }
        else {
            if (operation === 'DrillUp') {
                viewState[PPSMA.ScorecardControlManager._vS_CollapsedRows$i] = 'DrillOperation';
            }
        }
        PPSMA.ClientConnectionManager.get_instance().setViewState(this._webPartId$p$0, viewState);
        PPSMA._scorecardExpandDrillHandler.addExpandDrillTransform(drillTransform, this._webPartId$p$0);
        this._render$p$0();
    },
    
    handleTableViewKeyboardNavigation: function PPSMA_ScorecardControlManager$handleTableViewKeyboardNavigation(e) {ULS01W:;
        var key = e.keyCode;
        switch (key) {
            case PPSMA._scorecardKeyboardNavigation._keyTab$i:
            case PPSMA._scorecardKeyboardNavigation._keyLeft$i:
            case PPSMA._scorecardKeyboardNavigation._keyUp$i:
            case PPSMA._scorecardKeyboardNavigation._keyRight$i:
            case PPSMA._scorecardKeyboardNavigation._keyDown$i:
            case PPSMA._scorecardKeyboardNavigation._keySpace$i:
            case PPSMA._scorecardKeyboardNavigation._keyEnter$i:
                var currElement = PPSMA.EventsEx.getCurrentElement(e);
                currElement = PPSMA.Scorecard._getCellElementFromEvent$i(currElement);
                if (!currElement) {
                    return false;
                }
                if (!IsAccessibilityFeatureEnabled()) {
                    PPSMA.ContextMenu.neutralizeBrowserMenu(new Sys.UI.DomEvent(e));
                }
                else {
                    e.cancelBubble = true;
                }
                if ((PPSMA.ScorecardCell.acceptsElement(currElement) || PPSMA.ScorecardFilter.acceptsElement(currElement)) && this._menuHandler$p$0._canHandleEvent$i$0(e)) {
                    this._menuHandler$p$0.createContextMenu(e, false);
                    PPSMA.Scorecard._cancelEvent$i(e);
                }
                else {
                    this._scorecardNavigation$p$0.navigate(e);
                }
                return false;
            default:
                return true;
        }
    },
    
    handleToolbarKeyboardNavigation: function PPSMA_ScorecardControlManager$handleToolbarKeyboardNavigation(e) {ULS01W:;
        this._lastFocusedElement$p$0 = null;
        var currEvent = PPSMA.EventsEx.getEvent(e);
        var currToolbarItem = PPSMA.EventsEx.getCurrentElement(e);
        if (!currToolbarItem) {
            return;
        }
        var keyPressed = currEvent.keyCode;
        currToolbarItem.focus();
        if (keyPressed === PPSMA._scorecardKeyboardNavigation._keyEnter$i) {
            this._lastFocusedElement$p$0 = currToolbarItem;
            currToolbarItem.click();
            currEvent.cancelBubble = true;
        }
    },
    
    expandCollapseChildrenInRow: function PPSMA_ScorecardControlManager$expandCollapseChildrenInRow(rowId) {ULS01W:;
        if (this._scorecardExpandCollapseState$p$0.expandCollapseChildrenInRow(rowId)) {
            this._render$p$0();
        }
    },
    
    expandCollapseChildrenInColumn: function PPSMA_ScorecardControlManager$expandCollapseChildrenInColumn(rowId, cellId) {ULS01W:;
        if (this._scorecardExpandCollapseState$p$0.expandCollapseChildrenInColumn(rowId, cellId)) {
            this._render$p$0();
        }
        else {
            PPSMA.Scorecard._fixScorecardAlignment$i(this._webPartId$p$0);
        }
    },
    
    doShowContextMenu: function PPSMA_ScorecardControlManager$doShowContextMenu() {ULS01W:;
        this._menuHandler$p$0.createContextMenu(this._lastTouchEvent$p$0, true);
    },
    
    handleTouchStart: function PPSMA_ScorecardControlManager$handleTouchStart(e) {ULS01W:;
        if (e.touches != undefined && e.touches.length == 1){;
        this._lastTouchEvent$p$0 = e;
        this._lastTimeout$p$0 = window.setTimeout(this.$$d_doShowContextMenu, 1500);
        if(e.touches[0] != undefined){ this._screenTouchPositionX = e.touches[0].screenX; this._screenTouchPositionY = e.touches[0].screenY; };
        }else{;
        window.clearTimeout(this._lastTimeout$p$0);
        };
    },
    
    handleTouchMove: function PPSMA_ScorecardControlManager$handleTouchMove(e) {ULS01W:;
        if(e.targetTouches != undefined && e.targetTouches[0] != undefined){if (Math.abs(e.targetTouches[0].screenX - this._screenTouchPositionX) >= PPSMA.ScorecardControlManager._contextCancelDeltaX || Math.abs(e.targetTouches[0].screenY - this._screenTouchPositionY) >= PPSMA.ScorecardControlManager._contextCancelDeltaX){window.clearTimeout(this.lastTimeout);}};
    },
    
    handleTouchEnd: function PPSMA_ScorecardControlManager$handleTouchEnd(e) {ULS01W:;
        window.clearTimeout(this._lastTimeout$p$0);
    },
    
    handleTouchCancel: function PPSMA_ScorecardControlManager$handleTouchCancel(e) {ULS01W:;
        window.clearTimeout(this._lastTimeout$p$0);
    },
    
    _getScorecardTableIndicatorImageCount$p$0: function PPSMA_ScorecardControlManager$_getScorecardTableIndicatorImageCount$p$0(webPartId) {ULS01W:;
        var imageCount = 0;
        var ele = $get(webPartId);
        var table = ele.getElementsByTagName('tbody');
        if (!isNullOrUndefined(table)) {
            for (var i = 0; i < table.length; i++) {
                var imageCollection = table[i].getElementsByTagName('img');
                for (var j = 0; j < imageCollection.length; j++) {
                    if (Sys.UI.DomElement.containsCssClass(imageCollection[j], 'sci')) {
                        imageCount++;
                    }
                }
            }
        }
        return imageCount;
    },
    
    indicatorImageOnLoad: function PPSMA_ScorecardControlManager$indicatorImageOnLoad() {ULS01W:;
        this._loadedIndicatorImages$p$0++;
        if (this._totalIndicatorImages$p$0 === this._loadedIndicatorImages$p$0) {
            PPSMA.Scorecard._fixScorecardAlignment$i(this._webPartId$p$0);
            this._loadedIndicatorImages$p$0 = 0;
        }
    },
    
    selectScorecardCell: function PPSMA_ScorecardControlManager$selectScorecardCell(e) {ULS01W:;
        var currElement = PPSMA.EventsEx.getCurrentElement(e);
        currElement = PPSMA.Scorecard._getCellElementFromEvent$i(currElement);
        if (!currElement) {
            return;
        }
        if (!PPSMA.ScorecardCell.acceptsElement(currElement)) {
            return;
        }
        this._scorecardSelections$p$0.selectCell(currElement);
        this._scorecardNavigation$p$0.set_tabShouldSkip(true);
    },
    
    getControlType: function PPSMA_ScorecardControlManager$getControlType() {ULS01W:;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        var filterMode = viewState[PPSMA.ScorecardControlManager._vS_FilterMode$i];
        if (filterMode === 'true') {
            return viewState[PPSMA.ScorecardControlManager._vS_SortFilterType$i];
        }
        else {
            return viewState[PPSMA.ScorecardControlManager._vS_ViewTableType$i];
        }
    },
    
    getServiceUrl: function PPSMA_ScorecardControlManager$getServiceUrl() {ULS01W:;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        return viewState[PPSMA.ScorecardControlManager._vS_ServiceUrl$i];
    },
    
    _render$p$0: function PPSMA_ScorecardControlManager$_render$p$0() {ULS01W:;
        this.saveToViewState();
        if (!isNullOrUndefined(this._webRequest$p$0)) {
            this._webRequest$p$0.dispose();
            this._webRequest$p$0 = null;
        }
        var divElement = this._getAndSizeElementToLoad$p$0();
        if (isNullOrUndefined(divElement)) {
            return;
        }
        var webPart = PPSMA.ClientConnectionManager.get_instance().findClientWebPart(this._webPartId$p$0);
        this._webRequest$p$0 = new PPSMA.CancellableWebRequest(divElement, PPSMA.RenderWebRequest.msgtypE_LOADING, webPart.waitImageUri, divElement.id, PPSMA.RenderWebRequest.ProgressIndicatorPositioning.ZeroZero);
        this._webRequest$p$0.add_onCancelled(this.$$d__renderAjaxControlCancelled$p$0);
        var renderRequest = new PPSMA.ScorecardAjaxRenderRequest();
        renderRequest.ScorecardLocation = this._scorecardLocation$p$0;
        renderRequest.RenderTargetId = this._webPartId$p$0;
        renderRequest.ResourcePath = this._resourcePath$p$0;
        renderRequest.ScorecardControlId = PPSMA.ScorecardControlManager.getControlId(this._webPartId$p$0);
        renderRequest.ScorecardControlType = this.getControlType();
        renderRequest.RenderRequestRecord = PPSMA.ClientConnectionManager.get_instance().createRenderRequestRecord(webPart);
        var bodyDictionary = { request: renderRequest };
        var details = new PPSMA.WebRequestDetails(this.getServiceUrl(), Sys.Serialization.JavaScriptSerializer.serialize(bodyDictionary), 'POST', 'application/json; charset=utf-8', this.$$d__renderAjaxControlCompleted$p$0);
        this._webRequest$p$0.submit(details);
    },
    
    _getAndSizeElementToLoad$p$0: function PPSMA_ScorecardControlManager$_getAndSizeElementToLoad$p$0() {ULS01W:;
        var divElement = null;
        divElement = $get(this._webPartId$p$0);
        divElement.style.position = 'relative';
        return divElement;
    },
    
    _renderAjaxControlCompleted$p$0: function PPSMA_ScorecardControlManager$_renderAjaxControlCompleted$p$0(executor) {ULS01W:;
        if (executor.get_aborted()) {
            return;
        }
        var error = true;
        if (executor.get_statusCode() === 200) {
            var result;
            result = PPSMA.WebRequestExecuterEx.simpleResult(executor, 'ScorecardAjaxRenderResult');
            if (!isNullOrUndefined(result)) {
                var viewState = Sys.Serialization.JavaScriptSerializer.deserialize(result.ClientViewState);
                PPSMA.ClientConnectionManager.get_instance().setViewState(this._webPartId$p$0, viewState);
                var targetElement = $get(result.ScorecardControlId);
                if (null !== targetElement) {
                    targetElement.innerHTML = result.Html;
                    error = false;
                }
            }
        }
        if (!error) {
            this.initializeManager();
            NotifyBrowserOfAsyncUpdate();
        }
        else {
            this.restoreSavedClientViewState();
            this.loadFromViewState();
        }
        this._webRequest$p$0.hide();
    },
    
    _renderAjaxControlCancelled$p$0: function PPSMA_ScorecardControlManager$_renderAjaxControlCancelled$p$0(request) {ULS01W:;
        this.restoreSavedClientViewState();
        this.loadFromViewState();
    }
}


PPSMA._scorecardCellSelection = function PPSMA__scorecardCellSelection(webPartId) {ULS01W:;
    this._webPartId$p$0 = webPartId;
}
PPSMA._scorecardCellSelection.prototype = {
    _webPartId$p$0: null,
    _lastCell$p$0: null,
    _lastToolbarCell$p$0: null,
    
    clearSelection: function PPSMA__scorecardCellSelection$clearSelection() {ULS01W:;
        this.clearToolbarCell();
        this.clearScorecardCell();
    },
    
    selectCell: function PPSMA__scorecardCellSelection$selectCell(currCell) {ULS01W:;
        if (PPSMA.ScorecardToolbarCell.acceptsElement(currCell)) {
            this._selectToolbarCell$p$0(currCell);
        }
        else if (PPSMA.ScorecardCell.acceptsElement(currCell)) {
            this.clearToolbarCell();
            this._selectScorecardCell$p$0(new PPSMA.ScorecardCell(currCell));
        }
    },
    
    getCurrentScorecardCell: function PPSMA__scorecardCellSelection$getCurrentScorecardCell() {ULS01W:;
        return this._lastCell$p$0;
    },
    
    clearToolbarCell: function PPSMA__scorecardCellSelection$clearToolbarCell() {ULS01W:;
        if (this._lastToolbarCell$p$0) {
            this._lastToolbarCell$p$0.className = 'bsm-toolbarCell';
        }
        this._lastToolbarCell$p$0 = null;
    },
    
    _selectToolbarCell$p$0: function PPSMA__scorecardCellSelection$_selectToolbarCell$p$0(currCell) {ULS01W:;
        if (this._lastToolbarCell$p$0 === currCell) {
            return;
        }
        this.clearToolbarCell();
        currCell.className = 'bsm-UserToolbarItemSelected';
        this._lastToolbarCell$p$0 = currCell;
    },
    
    clearScorecardCell: function PPSMA__scorecardCellSelection$clearScorecardCell() {ULS01W:;
        if (this._lastCell$p$0 && this._lastCell$p$0.get_element()) {
            Sys.UI.DomElement.removeCssClass(this._lastCell$p$0.get_element(), PPSMA._scorecardConstants.cellSelectionClass);
        }
        this._lastCell$p$0 = null;
        this.saveToViewState();
    },
    
    _selectScorecardCell$p$0: function PPSMA__scorecardCellSelection$_selectScorecardCell$p$0(currCell) {ULS01W:;
        if ((currCell.get_element().style.display !== 'none') && (currCell.get_element().parentNode) && (currCell.get_element().parentNode.style.display !== 'none')) {
            if (!isNullOrUndefined(this._lastCell$p$0)) {
                var lastCellElement = this._lastCell$p$0.get_element();
                if (lastCellElement === currCell.get_element()) {
                    return;
                }
                var lastCellAnnotated = Sys.UI.DomElement.containsCssClass(lastCellElement, 'ms-bisc-annotationon');
                this.clearScorecardCell();
                if (lastCellAnnotated) {
                    Sys.UI.DomElement.addCssClass(lastCellElement, 'ms-bisc-annotationon');
                }
            }
            Sys.UI.DomElement.addCssClass(currCell.get_element(), PPSMA._scorecardConstants.cellSelectionClass);
            this._lastCell$p$0 = currCell;
            currCell.focus();
            this.saveToViewState();
            PPSMA.Scorecard._performAction$i(currCell, this._webPartId$p$0);
        }
    },
    
    saveToViewState: function PPSMA__scorecardCellSelection$saveToViewState() {ULS01W:;
        var cellInfo = null;
        if (!isNullOrUndefined(this._lastCell$p$0)) {
            var parent = this._lastCell$p$0.get_element().parentNode;
            while (!PPSMA.ScorecardRow.acceptsElement(parent)) {
                parent = parent.parentNode;
            }
            var row = new PPSMA.ScorecardRow(parent);
            cellInfo = row.get_rowId() + ':' + this._lastCell$p$0.get_cellId();
        }
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        if (isNullUndefinedOrEmpty(cellInfo)) {
            delete viewState[PPSMA.ScorecardControlManager._vS_SelectedCell$i];
        }
        else {
            viewState[PPSMA.ScorecardControlManager._vS_SelectedCell$i] = cellInfo;
        }
        PPSMA.ClientConnectionManager.get_instance().setViewState(this._webPartId$p$0, viewState);
    },
    
    loadFromViewState: function PPSMA__scorecardCellSelection$loadFromViewState() {ULS01W:;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        var cellId = viewState[PPSMA.ScorecardControlManager._vS_SelectedCell$i];
        this.clearScorecardCell();
        if (!isNullUndefinedOrEmpty(cellId)) {
            var ids = cellId.split(':');
            var cell = PPSMA.Scorecard._getScorecardCell$i(PPSMA.ScorecardControlManager.getControlId(this._webPartId$p$0), ids[0], ids[1]);
            if (!isNullOrUndefined(cell)) {
                this._selectScorecardCell$p$0(cell);
                cell.set_forceParameterRefresh(true);
            }
        }
    }
}


PPSMA.ScorecardExpandCollapseState = function PPSMA_ScorecardExpandCollapseState(webPartId) {ULS01W:;
    this._webPartId$p$0 = webPartId;
}
PPSMA.ScorecardExpandCollapseState.prototype = {
    _webPartId$p$0: null,
    _collapsedRows$p$0: null,
    _collapsedColumns$p$0: null,
    _visibleDisplayMode$p$0: '',
    
    get__collapsedRows$p$0: function PPSMA_ScorecardExpandCollapseState$get__collapsedRows$p$0() {ULS01W:;
        if (!this._collapsedRows$p$0) {
            this.loadRowsFromViewState();
        }
        return this._collapsedRows$p$0;
    },
    
    get__collapsedColumns$p$0: function PPSMA_ScorecardExpandCollapseState$get__collapsedColumns$p$0() {ULS01W:;
        if (!this._collapsedColumns$p$0) {
            this.loadColumnsFromViewState();
        }
        return this._collapsedColumns$p$0;
    },
    
    collapseAllRows: function PPSMA_ScorecardExpandCollapseState$collapseAllRows(e) {ULS01W:;
        var viewId = this._getViewId$p$0();
        var tableElement = $get(viewId);
        var trs = tableElement.getElementsByTagName('tr');
        for (var i = 0; i < trs.length; i++) {
            if (PPSMA.ScorecardDataRow.acceptsElement(trs[i])) {
                var row = new PPSMA.ScorecardDataRow(trs[i]);
                var expanded = true;
                row.set_isCollapsed('true');
                if (this._isRowHidden$p$0(viewId, row, false)) {
                    row.get_element().style.display = 'none';
                    expanded = false;
                }
                else {
                    row.get_element().style.display = this._visibleDisplayMode$p$0;
                }
                this._updateRow$p$0(row.get_cellPath(), expanded);
                var plusMinusImage = PPSMA.Scorecard._getPlusMinusImage$i(row.get_element());
                if (null !== plusMinusImage) {
                    plusMinusImage.set_src(getResFolder() + 'MDNCollapsed.png');
                    plusMinusImage.set_state('collapsed');
                    plusMinusImage.get_element().title = getCollapsedText();
                    plusMinusImage.get_element().setAttribute(PPSMA._scorecardConstants.alt, getCollapsedText());
                }
            }
        }
        this.saveRowsToViewState();
        PPSMA.Scorecard._fixScorecardAlignment$i(this._webPartId$p$0);
    },
    
    expandAllRows: function PPSMA_ScorecardExpandCollapseState$expandAllRows(e) {ULS01W:;
        var viewId = this._getViewId$p$0();
        var tableElement = $get(viewId);
        var trs = tableElement.getElementsByTagName('tr');
        for (var i = 0; i < trs.length; i++) {
            if (PPSMA.ScorecardDataRow.acceptsElement(trs[i])) {
                var row = new PPSMA.ScorecardDataRow(trs[i]);
                var expanded = false;
                if (row.get_isHiddenBasedOnFilterStatus() === 'false') {
                    if (this._isRowHidden$p$0(viewId, row, true)) {
                        row.get_element().style.display = 'none';
                    }
                    else {
                        row.get_element().style.display = this._visibleDisplayMode$p$0;
                        expanded = true;
                    }
                    var plusMinusImage = PPSMA.Scorecard._getPlusMinusImage$i(row.get_element());
                    var childrenOfRow = this._getRowChildrenHierarchy$p$0(viewId, row.get_rowId());
                    if ((null !== plusMinusImage) && (row.get_isCellExpansionEnabled() === 'false' || (!this._expandRowHeaderDynamically$p$0(row.get_groupId(), childrenOfRow)))) {
                        row.set_isCollapsed('false');
                        plusMinusImage.set_src(getResFolder() + 'MDNExpanded.png');
                        plusMinusImage.set_state('expanded');
                        plusMinusImage.get_element().title = getExpandedText();
                        plusMinusImage.get_element().setAttribute(PPSMA._scorecardConstants.alt, getExpandedText());
                    }
                    this._updateRow$p$0(row.get_cellPath(), expanded);
                }
            }
        }
        this.saveRowsToViewState();
        PPSMA.Scorecard._fixScorecardAlignment$i(this._webPartId$p$0);
    },
    
    expandCollapseChildrenInRow: function PPSMA_ScorecardExpandCollapseState$expandCollapseChildrenInRow(rowId) {ULS01W:;
        var viewId = this._getViewId$p$0();
        var row = this._getRowFromId$p$0(viewId, rowId);
        var plusMinusImage = PPSMA.Scorecard._getPlusMinusImage$i(row.get_element());
        var renderPage = false;
        if (null !== plusMinusImage) {
            if (plusMinusImage.get_state() === 'expanded') {
                renderPage = this._collapseAllChildrenInRow$p$0(rowId, viewId);
                plusMinusImage.set_state('collapsed');
            }
            else {
                renderPage = this._expandAllChildrenInRow$p$0(rowId, viewId);
                plusMinusImage.set_state('expanded');
            }
        }
        this.saveRowsToViewState();
        return renderPage;
    },
    
    _collapseAllChildrenInRow$p$0: function PPSMA_ScorecardExpandCollapseState$_collapseAllChildrenInRow$p$0(rowId, viewId) {ULS01W:;
        var clickedRow = this._getRowFromId$p$0(viewId, rowId);
        var childrenOfRow = this._getRowChildrenHierarchy$p$0(viewId, rowId);
        if (childrenOfRow.length <= 0) {
            return false;
        }
        var plusMinusImage = PPSMA.Scorecard._getPlusMinusImage$i(clickedRow.get_element());
        if (plusMinusImage) {
            plusMinusImage.set_src(getResFolder() + 'MDNCollapsed.png');
            plusMinusImage.set_state('collapsed');
            plusMinusImage.get_element().title = getCollapsedText();
            plusMinusImage.get_element().setAttribute(PPSMA._scorecardConstants.alt, getCollapsedText());
            this._updateRow$p$0(clickedRow.get_cellPath(), true);
        }
        var renderPage = PPSMA._scorecardExpandDrillHandler.removeExpandTransform(clickedRow.get_groupId(), clickedRow.get_cellPath(), this._webPartId$p$0);
        if (!renderPage) {
            for (var i = 0; i < childrenOfRow.length; i++) {
                var row = childrenOfRow[i];
                var parentRow = this._getRowFromId$p$0(viewId, row.get_parentId());
                var expanded = true;
                var isParentExpanded = false;
                plusMinusImage = PPSMA.Scorecard._getPlusMinusImage$i(parentRow.get_element());
                if (null !== plusMinusImage) {
                    isParentExpanded = (plusMinusImage.get_state() === 'expanded');
                }
                if (this._isRowHidden$p$0(viewId, row, isParentExpanded)) {
                    row.get_element().style.display = 'none';
                    expanded = false;
                }
                else {
                    row.get_element().style.display = this._visibleDisplayMode$p$0;
                }
                this._updateRow$p$0(row.get_cellPath(), expanded);
            }
        }
        this.saveRowsToViewState();
        return renderPage;
    },
    
    _expandRowHeaderDynamically$p$0: function PPSMA_ScorecardExpandCollapseState$_expandRowHeaderDynamically$p$0(groupId, childrenOfRow) {ULS01W:;
        if (parseInt(groupId, 10) <= 0) {
            return false;
        }
        for (var i = 0; i < childrenOfRow.length; i++) {
            var row = childrenOfRow[i];
            if (row.get_groupId() === groupId) {
                return false;
            }
        }
        return true;
    },
    
    _expandAllChildrenInRow$p$0: function PPSMA_ScorecardExpandCollapseState$_expandAllChildrenInRow$p$0(rowId, viewId) {ULS01W:;
        var expanded = false;
        var renderPage = false;
        var clickedRow = this._getRowFromId$p$0(viewId, rowId);
        var plusMinusImage = PPSMA.Scorecard._getPlusMinusImage$i(clickedRow.get_element());
        if (plusMinusImage) {
            plusMinusImage.set_src(getResFolder() + 'MDNExpanded.png');
            plusMinusImage.set_state('expanded');
            plusMinusImage.get_element().title = getExpandedText();
            plusMinusImage.get_element().setAttribute(PPSMA._scorecardConstants.alt, getExpandedText());
            expanded = true;
        }
        this._updateRow$p$0(clickedRow.get_cellPath(), expanded);
        var childrenOfRow = this._getRowChildrenHierarchy$p$0(viewId, rowId);
        if ((clickedRow.get_isCellExpansionEnabled() === 'true') && this._expandRowHeaderDynamically$p$0(clickedRow.get_groupId(), childrenOfRow)) {
            var expandDrillTransform = new PPSMA.ExpandDrillTransform();
            expandDrillTransform.CellPath = clickedRow.get_cellPath();
            expandDrillTransform.GroupId = clickedRow.get_groupId();
            expandDrillTransform.Type = 'Row';
            expandDrillTransform.Operation = 'Expand';
            PPSMA._scorecardExpandDrillHandler.addExpandDrillTransform(expandDrillTransform, this._webPartId$p$0);
            renderPage = true;
        }
        else {
            for (var i = 0; i < childrenOfRow.length; i++) {
                var row = childrenOfRow[i];
                var parentRow = this._getRowFromId$p$0(viewId, row.get_parentId());
                expanded = true;
                var isParentExpanded = true;
                plusMinusImage = PPSMA.Scorecard._getPlusMinusImage$i(parentRow.get_element());
                if (null !== plusMinusImage) {
                    isParentExpanded = (plusMinusImage.get_state() === 'expanded');
                }
                if (this._isRowHidden$p$0(viewId, row, isParentExpanded)) {
                    row.get_element().style.display = 'none';
                    row.get_element().style.borderStyle = 'none';
                    expanded = false;
                }
                else {
                    row.get_element().style.display = this._visibleDisplayMode$p$0;
                }
                this._updateRow$p$0(row.get_cellPath(), expanded);
            }
        }
        this.saveRowsToViewState();
        return renderPage;
    },
    
    expandCollapseChildrenInColumn: function PPSMA_ScorecardExpandCollapseState$expandCollapseChildrenInColumn(rowId, cellId) {ULS01W:;
        var index = 0;
        var nextCellId = 0;
        var renderPage = false;
        var viewId = this._getViewId$p$0();
        var tableElement = $get(viewId);
        var rowColl = tableElement.getElementsByTagName('tr');
        var cellColl = rowColl[parseInt(rowId, 10) - 1].getElementsByTagName('th');
        while (index < cellColl.length) {
            if (PPSMA.ScorecardCell.acceptsElement(cellColl[index])) {
                var cell = new PPSMA.ScorecardHeaderCell(cellColl[index]);
                if (cell.get_cellId() === cellId) {
                    if ((++index) < cellColl.length) {
                        if (PPSMA.ScorecardCell.acceptsElement(cellColl[index])) {
                            var nextCell = new PPSMA.ScorecardHeaderCell(cellColl[index]);
                            nextCellId = nextCell.getCellId();
                        }
                    }
                    else {
                        nextCellId = -1;
                    }
                    var plusMinusImage = PPSMA.Scorecard._getPlusMinusImage$i(cell.get_element());
                    if (null !== plusMinusImage) {
                        if (plusMinusImage.get_state() === 'expanded') {
                            renderPage = this._collapseAllChildrenInColumn$p$0(rowId, viewId, cell, nextCellId);
                            plusMinusImage.set_state('collapsed');
                        }
                        else {
                            renderPage = this._expandAllChildrenInColumn$p$0(rowId, viewId, cell, nextCellId);
                            plusMinusImage.set_state('expanded');
                        }
                    }
                    this.saveColumnsToViewState();
                    break;
                }
            }
            index++;
        }
        return renderPage;
    },
    
    _collapseAllChildrenInColumn$p$0: function PPSMA_ScorecardExpandCollapseState$_collapseAllChildrenInColumn$p$0(rowId, viewId, cell, nextCellId) {ULS01W:;
        var headerCell = false;
        var diffSpan = 0;
        var cellId = cell.getCellId();
        var tempHeaderCell = cell;
        var cell1GroupId = PPSMA.ScorecardExpandCollapseState._emptY_GROUP_ID$i;
        var renderPage = false;
        var displayCell = [];
        var tableElement = $get(viewId);
        var trs = tableElement.getElementsByTagName('tr');
        var rec;
        if (cell.get_isDrillDownEnabled() === 'false') {
            return false;
        }
        renderPage = PPSMA._scorecardExpandDrillHandler.removeExpandTransform(cell.get_groupId(), cell.get_cellPath(), this._webPartId$p$0);
        if (!renderPage) {
            var nextRow = PPSMA.Scorecard._getFirstNonHeaderRow$i(this._webPartId$p$0).get_element();
            this._createDisplayRecord$p$0(displayCell, cellId, nextRow.cells.length, cell.get_groupId(), false);
            var plusMinusImage = PPSMA.Scorecard._getPlusMinusImage$i(cell.get_element());
            if (plusMinusImage) {
                plusMinusImage.set_src(getResFolder() + 'MDNCollapsed.png');
                plusMinusImage.set_state('collapsed');
                plusMinusImage.get_element().title = getCollapsedText();
                plusMinusImage.get_element().setAttribute(PPSMA._scorecardConstants.alt, getCollapsedText());
            }
            for (var i = parseInt(rowId, 10); i < trs.length; i++) {
                var cellColl = trs[i].getElementsByTagName('td');
                headerCell = false;
                if (!cellColl.length) {
                    headerCell = true;
                    cellColl = trs[i].getElementsByTagName('th');
                }
                for (var j = 0; j < cellColl.length; j++) {
                    if (PPSMA.ScorecardCell.acceptsElement(cellColl[j])) {
                        var cell1 = new PPSMA.ScorecardCell(cellColl[j]);
                        var cell1Id = cell1.getCellId();
                        if (headerCell) {
                            tempHeaderCell = new PPSMA.ScorecardHeaderCell(cellColl[j]);
                            cell1GroupId = tempHeaderCell.get_groupId();
                        }
                        if ((cell1Id >= cellId) && ((cell1Id < nextCellId) || (nextCellId === -1))) {
                            rec = displayCell[cell1Id - cellId];
                            if (!rec.DisplayCell) {
                                if (headerCell && (rec.GroupId !== cell1GroupId) && rec.GroupId !== PPSMA.ScorecardExpandCollapseState._emptY_GROUP_ID$i) {
                                    plusMinusImage = PPSMA.Scorecard._getPlusMinusImage$i(cell1.get_element());
                                    var expandedState = !((plusMinusImage) && (plusMinusImage.get_state() === 'collapsed'));
                                    this._setDisplayRecords$p$0(cellId, displayCell, expandedState, tempHeaderCell.get_groupId(), cellColl, j, cell1Id, false);
                                    var tbe = cell1.get_element();
                                    diffSpan -= tbe.colSpan;
                                    cell1.get_element().style.display = this._visibleDisplayMode$p$0;
                                    this._updateColumn$p$0(cell1.get_cellPath(), true);
                                }
                                else {
                                    if ((i === parseInt(rowId, 10)) && (rec.GroupId === cell1GroupId)) {
                                        var tbe = cell1.get_element();
                                        diffSpan += tbe.colSpan;
                                    }
                                    this._setDisplayRecords$p$0(cellId, displayCell, false, PPSMA.ScorecardExpandCollapseState._emptY_GROUP_ID$i, cellColl, j, cell1Id, false);
                                    cell1.get_element().style.display = 'none';
                                    this._updateColumn$p$0(cell1.get_cellPath(), false);
                                }
                            }
                            else if (!headerCell || (rec.GroupId === cell1GroupId) || (rec.GroupId === PPSMA.ScorecardExpandCollapseState._emptY_GROUP_ID$i)) {
                                if (headerCell) {
                                    plusMinusImage = PPSMA.Scorecard._getPlusMinusImage$i(cell1.get_element());
                                    var expandedState = ((!!plusMinusImage) && (plusMinusImage.get_state() === 'expanded'));
                                    this._setDisplayRecords$p$0(cellId, displayCell, expandedState, tempHeaderCell.get_groupId(), cellColl, j, cell1Id, false);
                                }
                                cell1.get_element().style.display = this._visibleDisplayMode$p$0;
                                this._updateColumn$p$0(cell1.get_cellPath(), true);
                            }
                            else {
                                this._setDisplayRecords$p$0(cellId, displayCell, false, PPSMA.ScorecardExpandCollapseState._emptY_GROUP_ID$i, cellColl, j, cell1Id, false);
                                cell1.get_element().style.display = 'none';
                                this._updateColumn$p$0(cell1.get_cellPath(), false);
                            }
                        }
                    }
                }
            }
            if (diffSpan > 0) {
                this._setColumnSpan$p$0(parseInt(rowId, 10), trs, cellId, diffSpan, false);
            }
        }
        this.saveColumnsToViewState();
        return renderPage;
    },
    
    _expandColumnHeaderDynamically$p$0: function PPSMA_ScorecardExpandCollapseState$_expandColumnHeaderDynamically$p$0(viewId, groupId, rowId, cellId, nextCellId) {ULS01W:;
        if (parseInt(groupId, 10) <= 0) {
            return false;
        }
        var tableElement = $get(viewId);
        var trs = tableElement.getElementsByTagName('tr');
        var i = parseInt(rowId, 10);
        var cellColl = trs[i].getElementsByTagName('th');
        if (!cellColl.length) {
            return true;
        }
        for (var j = 0; j < cellColl.length; j++) {
            if (PPSMA.ScorecardCell.acceptsElement(cellColl[j])) {
                var cell1 = new PPSMA.ScorecardHeaderCell(cellColl[j]);
                var cell1Id = cell1.getCellId();
                if ((cell1Id >= cellId) && ((cell1Id < nextCellId) || (nextCellId === -1))) {
                    if (cell1.get_groupId() === groupId) {
                        return false;
                    }
                }
            }
        }
        return true;
    },
    
    _expandAllChildrenInColumn$p$0: function PPSMA_ScorecardExpandCollapseState$_expandAllChildrenInColumn$p$0(rowId, viewId, cell, nextCellId) {ULS01W:;
        var diffSpan = 0;
        var cellId = cell.getCellId();
        var headerCell = false;
        var tempHeaderCell = cell;
        var tempNextHeaderCell;
        var cell1GroupId = PPSMA.ScorecardExpandCollapseState._emptY_GROUP_ID$i;
        var nextCell1GroupId = PPSMA.ScorecardExpandCollapseState._emptY_GROUP_ID$i;
        var renderPage = false;
        var displayCell = [];
        var rec;
        var tableElement = $get(viewId);
        var trs = tableElement.getElementsByTagName('tr');
        var plusMinusImage = PPSMA.Scorecard._getPlusMinusImage$i(cell.get_element());
        if (plusMinusImage) {
            plusMinusImage.set_src(getResFolder() + 'MDNExpanded.png');
            plusMinusImage.set_state('expanded');
            plusMinusImage.get_element().title = getExpandedText();
            plusMinusImage.get_element().setAttribute(PPSMA._scorecardConstants.alt, getExpandedText());
        }
        if ((cell.get_isCellExpansionEnabled() === 'true') && this._expandColumnHeaderDynamically$p$0(viewId, cell.get_groupId(), rowId, cellId, nextCellId)) {
            var expandDrillTransform = new PPSMA.ExpandDrillTransform();
            expandDrillTransform.CellPath = cell.get_cellPath();
            expandDrillTransform.GroupId = cell.get_groupId();
            expandDrillTransform.Type = 'Column';
            expandDrillTransform.Operation = 'Expand';
            PPSMA._scorecardExpandDrillHandler.addExpandDrillTransform(expandDrillTransform, this._webPartId$p$0);
            renderPage = true;
        }
        else {
            var nextRow = PPSMA.Scorecard._getFirstNonHeaderRow$i(this._webPartId$p$0).get_element();
            this._createDisplayRecord$p$0(displayCell, cellId, nextRow.cells.length, PPSMA.ScorecardExpandCollapseState._emptY_GROUP_ID$i, true);
            for (var i = parseInt(rowId, 10); i < trs.length; i++) {
                var cellColl = trs[i].getElementsByTagName('td');
                headerCell = false;
                if (!cellColl.length) {
                    headerCell = true;
                    cellColl = trs[i].getElementsByTagName('th');
                }
                for (var j = 0; j < cellColl.length; j++) {
                    if (PPSMA.ScorecardCell.acceptsElement(cellColl[j])) {
                        var cell1 = new PPSMA.ScorecardCell(cellColl[j]);
                        var cell1Id = cell1.getCellId();
                        var nextCell1Id = -1;
                        if (headerCell) {
                            tempHeaderCell = new PPSMA.ScorecardHeaderCell(cellColl[j]);
                            cell1GroupId = tempHeaderCell.get_groupId();
                        }
                        if ((cell1Id >= cellId) && ((cell1Id < nextCellId) || (nextCellId === -1))) {
                            if (headerCell && (cell1GroupId !== cell.get_groupId()) && (i === parseInt(rowId, 10))) {
                                this._setDisplayRecords$p$0(cellId, displayCell, false, PPSMA.ScorecardExpandCollapseState._emptY_GROUP_ID$i, cellColl, j, cell1Id, false);
                                var tbe = cell1.get_element();
                                diffSpan -= tbe.colSpan;
                            }
                            rec = displayCell[cell1Id - cellId];
                            if (rec.DisplayCell) {
                                if ((i === parseInt(rowId, 10)) && (cell1Id !== cellId)) {
                                    var tbe = cell1.get_element();
                                    diffSpan += tbe.colSpan;
                                }
                                plusMinusImage = PPSMA.Scorecard._getPlusMinusImage$i(cell1.get_element());
                                var containsPlusMinus = (null !== plusMinusImage);
                                if (containsPlusMinus && (plusMinusImage.get_state() === 'collapsed')) {
                                    rec = displayCell[cell1Id - cellId];
                                    this._setDisplayRecords$p$0(cellId, displayCell, false, tempHeaderCell.get_groupId(), cellColl, j, cell1Id, false);
                                    cell1.get_element().style.display = this._visibleDisplayMode$p$0;
                                    this._updateColumn$p$0(cell1.get_cellPath(), true);
                                }
                                else if ((rec.GroupId === cell1GroupId) || (rec.GroupId === PPSMA.ScorecardExpandCollapseState._emptY_GROUP_ID$i) || !headerCell) {
                                    if ((j + 1) < cellColl.length) {
                                        this._setDisplayRecordsByImage$p$0(cellId, displayCell, true, cell1GroupId, cellColl, j, cell1Id, containsPlusMinus);
                                        if (headerCell) {
                                            var nextCell1 = new PPSMA.ScorecardCell(cellColl[j + 1]);
                                            nextCell1Id = nextCell1.getCellId();
                                            tempNextHeaderCell = new PPSMA.ScorecardHeaderCell(cellColl[j + 1]);
                                            nextCell1GroupId = tempNextHeaderCell.get_groupId();
                                            rec = displayCell[nextCell1Id - cellId];
                                            if ((cell1GroupId === nextCell1GroupId || ((parseInt(cell1GroupId, 10) < 0) && (parseInt(nextCell1GroupId, 10) < 0))) && (rec.GroupId === PPSMA.ScorecardExpandCollapseState._emptY_GROUP_ID$i)) {
                                                rec.DisplayCell = true;
                                                rec.GroupId = nextCell1GroupId;
                                            }
                                        }
                                    }
                                    else {
                                        this._setAllDisplayRecordsByImage$p$0(displayCell, true, cell1GroupId, cell1Id - cellId, containsPlusMinus);
                                    }
                                    cell1.get_element().style.display = this._visibleDisplayMode$p$0;
                                    this._updateColumn$p$0(cell1.get_cellPath(), true);
                                }
                                else {
                                    if ((j + 1) < cellColl.length) {
                                        this._setDisplayRecordsByImage$p$0(cellId, displayCell, false, cell1GroupId, cellColl, j, cell1Id, containsPlusMinus);
                                    }
                                    else {
                                        this._setAllDisplayRecordsByImage$p$0(displayCell, false, cell1GroupId, cell1Id - cellId, containsPlusMinus);
                                    }
                                    cell1.get_element().style.display = 'none';
                                    this._updateColumn$p$0(cell1.get_cellPath(), false);
                                }
                            }
                            else {
                                rec = displayCell[cell1Id - cellId];
                                if (headerCell && (rec.GroupId !== tempHeaderCell.get_groupId()) && (rec.GroupId !== PPSMA.ScorecardExpandCollapseState._emptY_GROUP_ID$i)) {
                                    plusMinusImage = PPSMA.Scorecard._getPlusMinusImage$i(cell1.get_element());
                                    var expandedState = !(null !== plusMinusImage && (plusMinusImage.get_state() === 'collapsed'));
                                    this._setDisplayRecords$p$0(cellId, displayCell, expandedState, cell1GroupId, cellColl, j, cell1Id, expandedState);
                                    cell1.get_element().style.display = this._visibleDisplayMode$p$0;
                                    this._updateColumn$p$0(cell1.get_cellPath(), true);
                                }
                                else {
                                    plusMinusImage = PPSMA.Scorecard._getPlusMinusImage$i(cell1.get_element());
                                    if ((null !== plusMinusImage) || (parseInt(cell1GroupId, 10) > 0)) {
                                        this._setDisplayRecords$p$0(cellId, displayCell, false, PPSMA.ScorecardExpandCollapseState._emptY_GROUP_ID$i, cellColl, j, cell1Id, false);
                                    }
                                    cell1.get_element().style.display = 'none';
                                    this._updateColumn$p$0(cell1.get_cellPath(), false);
                                }
                            }
                        }
                    }
                }
            }
            if (diffSpan > 0) {
                this._setColumnSpan$p$0(parseInt(rowId, 10), trs, cellId, diffSpan, true);
            }
        }
        this.saveColumnsToViewState();
        return renderPage;
    },
    
    _setDisplayRecords$p$0: function PPSMA_ScorecardExpandCollapseState$_setDisplayRecords$p$0(cellId, displayCell, display, groupId, cellColl, cellIndex, index, onlyNonEmptyGroups) {ULS01W:;
        var nextCell1Id;
        var rec;
        if ((cellIndex + 1) < cellColl.length) {
            var nextCell1 = new PPSMA.ScorecardCell(cellColl[cellIndex + 1]);
            nextCell1Id = nextCell1.getCellId();
            while (index < nextCell1Id) {
                rec = displayCell[index - cellId];
                if (!onlyNonEmptyGroups || rec.GroupId !== PPSMA.ScorecardExpandCollapseState._emptY_GROUP_ID$i) {
                    rec.DisplayCell = display;
                    rec.GroupId = groupId;
                }
                index++;
            }
        }
        else {
            while ((index - cellId) < displayCell.length) {
                rec = displayCell[index - cellId];
                if (!onlyNonEmptyGroups || rec.GroupId !== PPSMA.ScorecardExpandCollapseState._emptY_GROUP_ID$i) {
                    rec.DisplayCell = display;
                    rec.GroupId = groupId;
                }
                index++;
            }
        }
    },
    
    _setAllDisplayRecordsByImage$p$0: function PPSMA_ScorecardExpandCollapseState$_setAllDisplayRecordsByImage$p$0(displayCell, display, groupId, index, containsPlusMinus) {ULS01W:;
        var rec;
        while (index < displayCell.length) {
            rec = displayCell[index];
            rec.DisplayCell = display;
            if (containsPlusMinus) {
                rec.GroupId = groupId;
            }
            else {
                rec.GroupId = PPSMA.ScorecardExpandCollapseState._emptY_GROUP_ID$i;
            }
            index++;
        }
    },
    
    _setDisplayRecordsByImage$p$0: function PPSMA_ScorecardExpandCollapseState$_setDisplayRecordsByImage$p$0(cellId, displayCell, display, groupId, cellColl, cellIndex, index, containsPlusMinus) {ULS01W:;
        var nextCell1 = new PPSMA.ScorecardCell(cellColl[cellIndex + 1]);
        var nextCell1Id = nextCell1.getCellId();
        var rec;
        while (index < nextCell1Id) {
            rec = displayCell[index - cellId];
            rec.DisplayCell = display;
            if (containsPlusMinus) {
                rec.GroupId = groupId;
            }
            else {
                rec.GroupId = PPSMA.ScorecardExpandCollapseState._emptY_GROUP_ID$i;
            }
            index++;
        }
    },
    
    _createDisplayRecord$p$0: function PPSMA_ScorecardExpandCollapseState$_createDisplayRecord$p$0(displayCell, index, limit, groupId, isExpand) {ULS01W:;
        var rec;
        while (index <= limit) {
            rec = new PPSMA.CellDisplayRecord();
            rec.DisplayCell = isExpand;
            rec.GroupId = groupId;
            Array.add(displayCell, rec);
            index++;
        }
    },
    
    _setColumnSpan$p$0: function PPSMA_ScorecardExpandCollapseState$_setColumnSpan$p$0(rowId, trs, cellId, diffSpan, isExpand) {ULS01W:;
        var limit;
        for (var i = 0; i < rowId; i++) {
            var cellColl = trs[i].getElementsByTagName('th');
            if (isExpand) {
                limit = cellColl.length;
            }
            else {
                limit = cellColl.length - 1;
            }
            for (var j = 0; j < limit; j++) {
                if (PPSMA.ScorecardCell.acceptsElement(cellColl[j])) {
                    var cell1 = new PPSMA.ScorecardCell(cellColl[j]);
                    var cell1Id = cell1.getCellId();
                    var nextCellId = -1;
                    if (j < cellColl.length - 1) {
                        var nextCell = new PPSMA.ScorecardCell(cellColl[j + 1]);
                        nextCellId = nextCell.getCellId();
                    }
                    var tbe = cell1.get_element();
                    if (cellId >= cell1Id && (cellId < nextCellId || nextCellId === -1)) {
                        if (isExpand) {
                            tbe.colSpan += diffSpan;
                        }
                        else {
                            tbe.colSpan -= diffSpan;
                        }
                    }
                }
            }
        }
    },
    
    _updateRow$p$0: function PPSMA_ScorecardExpandCollapseState$_updateRow$p$0(cellPath, expanded) {ULS01W:;
        if (expanded) {
            delete this.get__collapsedRows$p$0()[cellPath];
        }
        else {
            this.get__collapsedRows$p$0()[cellPath] = PPSMA.ScorecardExpandCollapseState._COLLAPSED$i;
        }
    },
    
    _updateColumn$p$0: function PPSMA_ScorecardExpandCollapseState$_updateColumn$p$0(cellPath, expanded) {ULS01W:;
        if (expanded) {
            delete this.get__collapsedColumns$p$0()[cellPath];
        }
        else {
            this.get__collapsedColumns$p$0()[cellPath] = PPSMA.ScorecardExpandCollapseState._COLLAPSED$i;
        }
    },
    
    saveRowsToViewState: function PPSMA_ScorecardExpandCollapseState$saveRowsToViewState() {ULS01W:;
        var result = new Sys.StringBuilder();
        var $$dict_1 = this.get__collapsedRows$p$0();
        for (var $$key_2 in $$dict_1) {
            var pair = { key: $$key_2, value: $$dict_1[$$key_2] };
            if (!result.isEmpty()) {
                result.append(':');
            }
            result.append(pair.key);
        }
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        viewState[PPSMA.ScorecardControlManager._vS_CollapsedRows$i] = result.toString();
        PPSMA.ClientConnectionManager.get_instance().setViewState(this._webPartId$p$0, viewState);
    },
    
    saveColumnsToViewState: function PPSMA_ScorecardExpandCollapseState$saveColumnsToViewState() {ULS01W:;
        var result = new Sys.StringBuilder();
        var $$dict_1 = this.get__collapsedColumns$p$0();
        for (var $$key_2 in $$dict_1) {
            var pair = { key: $$key_2, value: $$dict_1[$$key_2] };
            if (!result.isEmpty()) {
                result.append(':');
            }
            result.append(pair.key);
        }
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        viewState[PPSMA.ScorecardControlManager._vS_CollapsedColumns$i] = result.toString();
        PPSMA.ClientConnectionManager.get_instance().setViewState(this._webPartId$p$0, viewState);
    },
    
    loadRowsFromViewState: function PPSMA_ScorecardExpandCollapseState$loadRowsFromViewState() {ULS01W:;
        this._collapsedRows$p$0 = {};
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        var stateValue = viewState[PPSMA.ScorecardControlManager._vS_CollapsedRows$i];
        if (!isNullOrEmpty(stateValue)) {
            var array = stateValue.split(':');
            for (var i = 0; i < array.length; i++) {
                this._collapsedRows$p$0[array[i]] = PPSMA.ScorecardExpandCollapseState._COLLAPSED$i;
            }
        }
    },
    
    loadColumnsFromViewState: function PPSMA_ScorecardExpandCollapseState$loadColumnsFromViewState() {ULS01W:;
        this._collapsedColumns$p$0 = {};
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        var stateValue = viewState[PPSMA.ScorecardControlManager._vS_CollapsedColumns$i];
        if (!isNullOrEmpty(stateValue)) {
            var array = stateValue.split(':');
            for (var i = 0; i < array.length; i++) {
                this._collapsedColumns$p$0[array[i]] = PPSMA.ScorecardExpandCollapseState._COLLAPSED$i;
            }
        }
    },
    
    _getRowChildrenHierarchy$p$0: function PPSMA_ScorecardExpandCollapseState$_getRowChildrenHierarchy$p$0(viewId, rowId) {ULS01W:;
        var tableElement = $get(viewId);
        var trs = tableElement.getElementsByTagName('tr');
        var childtrs = [];
        var j = 0;
        var clickedRowId = parseInt(rowId, 10);
        for (var i = 0; i < trs.length; i++) {
            if (!PPSMA.ScorecardDataRow.acceptsElement(trs[i])) {
                continue;
            }
            var row = new PPSMA.ScorecardDataRow(trs[i]);
            var currentRowId = parseInt(row.get_rowId(), 10);
            var currentRowParentId = parseInt(row.get_parentId(), 10);
            if (currentRowId === clickedRowId) {
                continue;
            }
            if (currentRowId > clickedRowId && currentRowParentId < clickedRowId) {
                break;
            }
            if (currentRowId > clickedRowId) {
                Array.add(childtrs, row);
                j++;
            }
        }
        return childtrs;
    },
    
    _getRowFromId$p$0: function PPSMA_ScorecardExpandCollapseState$_getRowFromId$p$0(viewId, rowId) {ULS01W:;
        if ((!viewId) || (!rowId)) {
            return null;
        }
        var augRowId = viewId + '_' + rowId;
        var row = new PPSMA.ScorecardDataRow($get(augRowId));
        return row;
    },
    
    _getViewId$p$0: function PPSMA_ScorecardExpandCollapseState$_getViewId$p$0() {ULS01W:;
        return PPSMA.ScorecardControlManager.getControlId(this._webPartId$p$0);
    },
    
    _isRowHidden$p$0: function PPSMA_ScorecardExpandCollapseState$_isRowHidden$p$0(viewId, row, expand) {ULS01W:;
        var parentRow = this._getRowFromId$p$0(viewId, row.get_parentId());
        var siblingsOfRow = this._getRowChildrenHierarchy$p$0(viewId, row.get_parentId());
        if (parseInt(row.get_parentId(), 10) <= 0) {
            return false;
        }
        if (parentRow.get_element().style.display === 'none') {
            return true;
        }
        var isDifferentGroupUnderDimension = (parseInt(parentRow.get_groupId(), 10) > 0 && parentRow.get_groupId() !== row.get_groupId() && parentRow.get_isCellExpansionEnabled() === 'true');
        if (expand) {
            if (isDifferentGroupUnderDimension) {
                for (var i = 0; i < siblingsOfRow.length; i++) {
                    if (siblingsOfRow[i].get_groupId() === parentRow.get_groupId()) {
                        return true;
                    }
                }
            }
            return false;
        }
        return (!isDifferentGroupUnderDimension);
    }
}


PPSMA._scorecardKeyboardNavigation = function PPSMA__scorecardKeyboardNavigation(webPartId, selections) {ULS01W:;
    this._webPartId$p$0 = webPartId;
    this._selections$p$0 = selections;
}
PPSMA._scorecardKeyboardNavigation.prototype = {
    _webPartId$p$0: null,
    _selections$p$0: null,
    _tabShouldSkip$p$0: false,
    
    get_tabShouldSkip: function PPSMA__scorecardKeyboardNavigation$get_tabShouldSkip() {ULS01W:;
        return this._tabShouldSkip$p$0;
    },
    set_tabShouldSkip: function PPSMA__scorecardKeyboardNavigation$set_tabShouldSkip(value) {ULS01W:;
        this._tabShouldSkip$p$0 = value;
        return value;
    },
    
    navigate: function PPSMA__scorecardKeyboardNavigation$navigate(e) {ULS01W:;
        var currCell = null;
        var currElement = PPSMA.EventsEx.getCurrentElement(e);
        currElement = PPSMA.Scorecard._getCellElementFromEvent$i(currElement);
        if (PPSMA.ScorecardCell.acceptsElement(currElement)) {
            currCell = new PPSMA.ScorecardCell(currElement);
        }
        else {
            currCell = this._selections$p$0.getCurrentScorecardCell();
        }
        return this._navigateInternal$p$0(currCell, (e).keyCode, (e).shiftKey);
    },
    
    _navigateInternal$p$0: function PPSMA__scorecardKeyboardNavigation$_navigateInternal$p$0(currCell, keyPressed, shiftKey) {ULS01W:;
        var handled = false;
        switch (keyPressed) {
            case PPSMA._scorecardKeyboardNavigation._keyTab$i:
                handled = this._navigateTab$p$0(currCell, shiftKey);
                break;
            case PPSMA._scorecardKeyboardNavigation._keyLeft$i:
                handled = this._navigateLeft$p$0(currCell, false);
                this._tabShouldSkip$p$0 = handled;
                break;
            case PPSMA._scorecardKeyboardNavigation._keyUp$i:
                handled = this._navigateUp$p$0(currCell);
                this._tabShouldSkip$p$0 = handled;
                break;
            case PPSMA._scorecardKeyboardNavigation._keyRight$i:
                handled = this._navigateRight$p$0(currCell, false);
                this._tabShouldSkip$p$0 = handled;
                break;
            case PPSMA._scorecardKeyboardNavigation._keyDown$i:
                handled = this._navigateDown$p$0(currCell);
                this._tabShouldSkip$p$0 = handled;
                break;
            case PPSMA._scorecardKeyboardNavigation._keySpace$i:
                var img = PPSMA.Scorecard._getPlusMinusImage$i(currCell.get_element());
                if (img) {
                    img.get_element().click();
                    handled = true;
                }
                break;
        }
        return handled;
    },
    
    _navigateTab$p$0: function PPSMA__scorecardKeyboardNavigation$_navigateTab$p$0(currCell, shiftKey) {ULS01W:;
        if (!IsAccessibilityFeatureEnabled()) {
            if (this._tabShouldSkip$p$0) {
                var anchorSuffix = '';
                if (shiftKey) {
                    anchorSuffix = 'begin';
                }
                else {
                    anchorSuffix = 'end';
                }
                var anchor = document.getElementsByName(this._webPartId$p$0 + anchorSuffix);
                if (anchor.length > 0) {
                    anchor[0].focus();
                    this._tabShouldSkip$p$0 = false;
                    return true;
                }
            }
            else {
                this._tabShouldSkip$p$0 = true;
            }
        }
        return false;
    },
    
    _navigateDown$p$0: function PPSMA__scorecardKeyboardNavigation$_navigateDown$p$0(currCell) {ULS01W:;
        if (currCell.get_element().parentNode.nextSibling) {
            currCell = PPSMA.Scorecard.getNextVisibleCell(currCell);
            if (currCell) {
                this._navigateTo$p$0(currCell);
                return true;
            }
        }
        return false;
    },
    
    _navigateRight$p$0: function PPSMA__scorecardKeyboardNavigation$_navigateRight$p$0(currCell, wrap) {ULS01W:;
        if (currCell.get_element().nextSibling) {
            currCell = new PPSMA.ScorecardCell(currCell.get_element().nextSibling);
            this._navigateTo$p$0(currCell);
            return true;
        }
        else if (wrap && currCell.get_element().parentNode.nextSibling) {
            var nextRow = currCell.get_element().parentNode.nextSibling;
            var cell = nextRow.childNodes[0];
            if (PPSMA.ScorecardCell.acceptsElement(cell)) {
                this._navigateTo$p$0(new PPSMA.ScorecardCell(cell));
                return true;
            }
        }
        return false;
    },
    
    _navigateUp$p$0: function PPSMA__scorecardKeyboardNavigation$_navigateUp$p$0(currCell) {ULS01W:;
        if (currCell.get_element().parentNode.previousSibling) {
            currCell = PPSMA.Scorecard.getPrevVisibleCell(currCell);
            if (currCell) {
                this._navigateTo$p$0(currCell);
                return true;
            }
        }
        return false;
    },
    
    _navigateLeft$p$0: function PPSMA__scorecardKeyboardNavigation$_navigateLeft$p$0(currCell, wrap) {ULS01W:;
        if (currCell.get_element().previousSibling) {
            currCell = new PPSMA.ScorecardCell(currCell.get_element().previousSibling);
            this._navigateTo$p$0(currCell);
            return true;
        }
        else if (currCell.get_element().parentNode) {
            var newCell = PPSMA.Scorecard.getCellFromRow(currCell.get_element().parentNode, currCell.getCellId() - 1, true);
            if (newCell) {
                if (wrap && !PPSMA.ScorecardCell.acceptsElement(newCell.get_element())) {
                    var cells = currCell.get_element().parentNode.previousSibling.childNodes;
                    var cell = cells[cells.length - 1];
                    this._navigateTo$p$0(new PPSMA.ScorecardCell(cell));
                    return true;
                }
                else {
                    this._navigateTo$p$0(newCell);
                    return true;
                }
            }
        }
        return false;
    },
    
    _navigateTo$p$0: function PPSMA__scorecardKeyboardNavigation$_navigateTo$p$0(cell) {ULS01W:;
        this._tabShouldSkip$p$0 = !this._isLastCell$p$0(cell);
        this._selections$p$0.selectCell(cell.get_element());
    },
    
    _isLastCell$p$0: function PPSMA__scorecardKeyboardNavigation$_isLastCell$p$0(cell) {ULS01W:;
        return !cell.get_element().nextSibling && (!cell.get_element().parentNode || !cell.get_element().parentNode.nextSibling);
    }
}


PPSMA.ScorecardMenu = function PPSMA_ScorecardMenu(isContextMenu) {ULS01W:;
    this.$$d_closeMenu = Function.createDelegate(this, this.closeMenu);
    this.$$d_openMenu = Function.createDelegate(this, this.openMenu);
    this._menuItems$p$0 = [];
    this._isContextMenu$p$0 = isContextMenu;
    this._openHandler$p$0 = this.$$d_openMenu;
    this._closeHandler$p$0 = this.$$d_closeMenu;
}
PPSMA.ScorecardMenu._getContextMenuOffset$p = function PPSMA_ScorecardMenu$_getContextMenuOffset$p(e) {ULS01W:;
    var src = e.srcElement;
    if (src) {
        if (PPSMA.DomElementEx.tagsMatch(src.tagName, 'a') || PPSMA.DomElementEx.tagsMatch(src.tagName, 'td') || PPSMA.DomElementEx.tagsMatch(src.tagName, 'img') || PPSMA.DomElementEx.tagsMatch(src.tagName, 'span') || PPSMA.DomElementEx.tagsMatch(src.tagName, 'div')) {
            var point = PPSMA.EventsEx.getEventOffset(e);
            return [ point.x, point.y ];
        }
    }
    return [ 0, 0 ];
}
PPSMA.ScorecardMenu._getCellFromElement$p = function PPSMA_ScorecardMenu$_getCellFromElement$p(elem) {ULS01W:;
    while (!PPSMA.DomElementEx.tagsMatch(elem.tagName, 'td') && !PPSMA.DomElementEx.tagsMatch(elem.tagName, 'th')) {
        elem = elem.parentNode;
    }
    return elem;
}
PPSMA.ScorecardMenu.prototype = {
    _openHandler$p$0: null,
    _closeHandler$p$0: null,
    _menuElement$p$0: null,
    _isContextMenu$p$0: true,
    _webPartId$p$0: null,
    
    addMenuItem: function PPSMA_ScorecardMenu$addMenuItem(item) {ULS01W:;
        Array.add(this._menuItems$p$0, item);
    },
    
    isEmpty: function PPSMA_ScorecardMenu$isEmpty() {ULS01W:;
        return !this._menuItems$p$0.length;
    },
    
    clearMenuItems: function PPSMA_ScorecardMenu$clearMenuItems() {ULS01W:;
        Array.clear(this._menuItems$p$0);
    },
    
    setElement: function PPSMA_ScorecardMenu$setElement(element) {ULS01W:;
        this.closeMenu(null);
        this._menuElement$p$0 = element;
    },
    
    setWebPartIdId: function PPSMA_ScorecardMenu$setWebPartIdId(wpId) {ULS01W:;
        this._webPartId$p$0 = wpId;
    },
    
    addPrimaryMenuItems: function PPSMA_ScorecardMenu$addPrimaryMenuItems(m) {ULS01W:;
        if (isNullUndefinedOrEmpty(this._menuItems$p$0)) {
            return true;
        }
        for (var i = 0; i < this._menuItems$p$0.length; i++) {
            var item = this._menuItems$p$0[i];
            if (item.get_isSeparator()) {
                PPSMA.ContextMenu.addMenuSeparator(m);
            }
            else if (!item.get_isEnabled()) {
                PPSMA.ContextMenu.addDisabledMenuOption(m, item.get_caption(), item.get_action(), item.get_iconPath(), item.get_indent());
            }
            else if (item.get_isToggleItem()) {
                PPSMA.ContextMenu.addToggleMenuOption(m, item.get_caption(), item.get_action(), item.get_iconPath(), item.get_altText(), item.get_isSelected(), item.get_indent());
            }
            else {
                PPSMA.ContextMenu.addMenuOption(m, item.get_caption(), item.get_action(), item.get_iconPath(), item.get_altText(), item.get_isSelected(), item.get_indent());
            }
        }
        return true;
    },
    
    hideViewInfoBarCtxMenu: function PPSMA_ScorecardMenu$hideViewInfoBarCtxMenu(e) {
    },
    
    get_cubeMetadata: function PPSMA_ScorecardMenu$get_cubeMetadata() {ULS01W:;
        return null;
    },
    set_cubeMetadata: function PPSMA_ScorecardMenu$set_cubeMetadata(value) {ULS01W:;
        return value;
    },
    
    assignFocus: function PPSMA_ScorecardMenu$assignFocus() {
    },
    
    addMenuSeparator: function PPSMA_ScorecardMenu$addMenuSeparator() {ULS01W:;
        var item = new PPSMA.ScorecardMenuItem();
        item.set_isSeparator(true);
        Array.add(this._menuItems$p$0, item);
    },
    
    registerContextMenu: function PPSMA_ScorecardMenu$registerContextMenu(e) {ULS01W:;
        if (!isNullOrUndefined(this._menuElement$p$0)) {
            $addHandler(this._menuElement$p$0, 'mouseout', this._closeHandler$p$0);
            if (IsAccessibilityFeatureEnabled() || !this._isContextMenu$p$0) {
                this._openHandler$p$0(new Sys.UI.DomEvent(e));
            }
        }
    },
    
    openMenu: function PPSMA_ScorecardMenu$openMenu(e) {ULS01W:;
        if (!isNullOrUndefined(this._menuElement$p$0)) {
            var currEvent = PPSMA.EventsEx.getEvent(e.rawEvent);
            var currElement = PPSMA.EventsEx.getCurrentElement(e.rawEvent);
            var currCell = PPSMA.ScorecardMenu._getCellFromElement$p(currElement);
            var x = 0;
            var y = 0;
            if (this._isContextMenu$p$0) {
                if (e.keyCode === 93 || (e.shiftKey && e.keyCode === 121)) {
                    x = 0;
                    y = 0;
                }
                else {
                    var pnt = PPSMA.ScorecardMenu._getContextMenuOffset$p(e.rawEvent);
                    if (PPSMA.DomElementEx.tagsMatch(currElement.tagName, 'a')) {
                        x = currElement.offsetLeft;
                        y = currElement.offsetTop;
                    }
                    else if (PPSMA.DomElementEx.tagsMatch(currElement.tagName, 'th') && (Sys.UI.DomElement.containsCssClass(currElement, 'scp'))) {
                        x = e.rawEvent.x;
                        y = e.rawEvent.y;
                    }
                    else if (PPSMA.DomElementEx.tagsMatch(currElement.tagName, 'th')) {
                        x = e.rawEvent.x - currElement.offsetLeft;
                        y = e.rawEvent.y - currElement.offsetTop;
                    }
                    else {
                        x = pnt[0] + currElement.offsetLeft;
                        y = pnt[1] + currElement.offsetTop;
                    }
                    if (x > currCell.offsetWidth || isNullOrUndefined(x)) {
                        x = currEvent.offsetX;
                    }
                    if (y > currCell.offsetHeight || isNullOrUndefined(y)) {
                        y = currEvent.offsetY;
                    }
                    try {
                        var maybespan = e.rawEvent.srcElement;
                        if (PPSMA.DomElementEx.tagsMatch(maybespan.tagName, 'span')) {
                            if (x > currCell.offsetWidth) {
                                x = maybespan.offsetLeft + (maybespan.offsetWidth / 2);
                            }
                            if (y > currCell.offsetHeight) {
                                y = maybespan.offsetTop + (maybespan.offsetHeight / 2);
                            }
                        }
                    }
                    catch ($$e_8) {
                    }
                    if (x > currCell.offsetWidth || x < 0) {
                        x = currCell.offsetWidth / 2;
                    }
                    if (y > currCell.offsetHeight || y < 0) {
                        y = currCell.offsetHeight / 2;
                    }
                }
            }
            PPSMA.ContextMenu.neutralizeBrowserMenu(e);
            PPSMA.ContextMenu.createForReportsNScorecards(currCell, this, x, y, false);
        }
    },
    
    closeMenu: function PPSMA_ScorecardMenu$closeMenu(e) {ULS01W:;
        if (!isNullOrUndefined(this._menuElement$p$0)) {
            this._removeHandler$p$0(this._menuElement$p$0, 'mouseout', this._closeHandler$p$0);
            if (e) {
                try {
                    this._menuElement$p$0.focus();
                }
                catch ($$e_1) {
                }
            }
        }
    },
    
    _removeHandler$p$0: function PPSMA_ScorecardMenu$_removeHandler$p$0(element, eventName, handler) {ULS01W:;
        try {
            $removeHandler(element, eventName, handler);
        }
        catch ($$e_3) {
        }
    }
}


PPSMA.ScorecardMenuItem = function PPSMA_ScorecardMenuItem() {
}
PPSMA.ScorecardMenuItem.prototype = {
    _caption$p$0: null,
    _action$p$0: null,
    _iconPath$p$0: null,
    _altText$p$0: null,
    _isSelected$p$0: false,
    _isToggleItem$p$0: false,
    _isEnabled$p$0: true,
    _indent$p$0: false,
    _isSeparator$p$0: false,
    
    get_caption: function PPSMA_ScorecardMenuItem$get_caption() {ULS01W:;
        return this._caption$p$0;
    },
    set_caption: function PPSMA_ScorecardMenuItem$set_caption(value) {ULS01W:;
        this._caption$p$0 = value;
        return value;
    },
    
    get_action: function PPSMA_ScorecardMenuItem$get_action() {ULS01W:;
        return this._action$p$0;
    },
    set_action: function PPSMA_ScorecardMenuItem$set_action(value) {ULS01W:;
        this._action$p$0 = value;
        return value;
    },
    
    get_iconPath: function PPSMA_ScorecardMenuItem$get_iconPath() {ULS01W:;
        return this._iconPath$p$0;
    },
    set_iconPath: function PPSMA_ScorecardMenuItem$set_iconPath(value) {ULS01W:;
        this._iconPath$p$0 = value;
        return value;
    },
    
    get_altText: function PPSMA_ScorecardMenuItem$get_altText() {ULS01W:;
        return this._altText$p$0;
    },
    set_altText: function PPSMA_ScorecardMenuItem$set_altText(value) {ULS01W:;
        this._altText$p$0 = value;
        return value;
    },
    
    get_isSelected: function PPSMA_ScorecardMenuItem$get_isSelected() {ULS01W:;
        return this._isSelected$p$0;
    },
    set_isSelected: function PPSMA_ScorecardMenuItem$set_isSelected(value) {ULS01W:;
        this._isSelected$p$0 = value;
        return value;
    },
    
    get_isToggleItem: function PPSMA_ScorecardMenuItem$get_isToggleItem() {ULS01W:;
        return this._isToggleItem$p$0;
    },
    set_isToggleItem: function PPSMA_ScorecardMenuItem$set_isToggleItem(value) {ULS01W:;
        this._isToggleItem$p$0 = value;
        return value;
    },
    
    get_isEnabled: function PPSMA_ScorecardMenuItem$get_isEnabled() {ULS01W:;
        return this._isEnabled$p$0;
    },
    set_isEnabled: function PPSMA_ScorecardMenuItem$set_isEnabled(value) {ULS01W:;
        this._isEnabled$p$0 = value;
        return value;
    },
    
    get_indent: function PPSMA_ScorecardMenuItem$get_indent() {ULS01W:;
        return this._indent$p$0;
    },
    set_indent: function PPSMA_ScorecardMenuItem$set_indent(value) {ULS01W:;
        this._indent$p$0 = value;
        return value;
    },
    
    get_isSeparator: function PPSMA_ScorecardMenuItem$get_isSeparator() {ULS01W:;
        return this._isSeparator$p$0;
    },
    set_isSeparator: function PPSMA_ScorecardMenuItem$set_isSeparator(value) {ULS01W:;
        this._isSeparator$p$0 = value;
        return value;
    }
}


PPSMA._scorecardSortAndFilterHandler = function PPSMA__scorecardSortAndFilterHandler(callBack, webPartId, currencySeparator, decimalSeparator) {ULS01W:;
    this.$$d__filterCompleted$p$0 = Function.createDelegate(this, this._filterCompleted$p$0);
    this._webPartId$p$0 = webPartId;
    this._sortFilterValues$p$0 = {};
    this._callBack$p$0 = callBack;
    this._currencySeparator$p$0 = currencySeparator;
    this._decimalSeparator$p$0 = decimalSeparator;
}
PPSMA._scorecardSortAndFilterHandler.prototype = {
    _webPartId$p$0: null,
    _sortFilterValues$p$0: null,
    _callBack$p$0: null,
    _currencySeparator$p$0: null,
    _decimalSeparator$p$0: null,
    
    _menuItemClicked$i$0: function PPSMA__scorecardSortAndFilterHandler$_menuItemClicked$i$0(column, option) {ULS01W:;
        var needsUpdate = false;
        if (!isNullOrUndefined(column)) {
            var filterElement = PPSMA.Scorecard._getFilterElement$i(column, this._webPartId$p$0);
            if (!isNullOrUndefined(filterElement)) {
                var filter = this._sortFilterValues$p$0[column];
                if (isNullOrUndefined(filter)) {
                    filter = new PPSMA.SortFilter();
                    filter.ColumnName = column;
                    filter.ColumnType = filterElement.get_columnType();
                    this._sortFilterValues$p$0[column] = filter;
                }
                switch (option) {
                    case PPSMA._scorecardSortAndFilterHandler.dontSort:
                        filter.SortValue = null;
                        needsUpdate = true;
                        break;
                    case PPSMA._scorecardSortAndFilterHandler.sortAsc:
                        this._setSortingValue$p$0(filter, 'ASC');
                        needsUpdate = true;
                        break;
                    case PPSMA._scorecardSortAndFilterHandler.sortDesc:
                        this._setSortingValue$p$0(filter, 'DESC');
                        needsUpdate = true;
                        break;
                    case PPSMA._scorecardSortAndFilterHandler.clearFilters:
                        filter.ValueFilter = null;
                        filter.Top10Filter = null;
                        needsUpdate = true;
                        break;
                    case PPSMA._scorecardSortAndFilterHandler.top10:
                        this._showTop10Dialog$p$0(filter, filterElement);
                        break;
                    case PPSMA._scorecardSortAndFilterHandler.valueFilters:
                        this._showCustomDialog$p$0(filter, filterElement);
                        break;
                }
            }
        }
        if (needsUpdate) {
            this.saveToViewState();
            if (this._isAnyColumnFilterOrSorted$p$0()) {
                this._setToSortFilterMode$p$0();
                this._callBack$p$0(false);
            }
            else {
                this._setToTreeMode$p$0();
                this._callBack$p$0(true);
            }
        }
    },
    
    saveToViewState: function PPSMA__scorecardSortAndFilterHandler$saveToViewState() {ULS01W:;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        viewState[PPSMA.ScorecardControlManager._vS_SortAndFilters$i] = Sys.Serialization.JavaScriptSerializer.serialize(this._sortFilterValues$p$0);
        PPSMA.ClientConnectionManager.get_instance().setViewState(this._webPartId$p$0, viewState);
    },
    
    loadFromViewState: function PPSMA__scorecardSortAndFilterHandler$loadFromViewState() {ULS01W:;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        var value = viewState[PPSMA.ScorecardControlManager._vS_SortAndFilters$i];
        if (!isNullUndefinedOrEmpty(value)) {
            this._sortFilterValues$p$0 = Sys.Serialization.JavaScriptSerializer.deserialize(value);
        }
        else {
            this._sortFilterValues$p$0 = {};
        }
    },
    
    _isAnyColumnFilterOrSorted$p$0: function PPSMA__scorecardSortAndFilterHandler$_isAnyColumnFilterOrSorted$p$0() {ULS01W:;
        var $$dict_0 = this._sortFilterValues$p$0;
        for (var $$key_1 in $$dict_0) {
            var entry = { key: $$key_1, value: $$dict_0[$$key_1] };
            var filter = entry.value;
            if (!isNullOrEmpty(this._getPreviousSortValue$i$0(filter.ColumnName)) || this._isTop10FilterInUse$i$0(filter.ColumnName) || this._isValueFilterInUse$i$0(filter.ColumnName)) {
                return true;
            }
        }
        return false;
    },
    
    _setSortingValue$p$0: function PPSMA__scorecardSortAndFilterHandler$_setSortingValue$p$0(filter, filterValue) {ULS01W:;
        var previousFilter = this._getSortedColumn$p$0();
        if (!isNullOrUndefined(previousFilter)) {
            previousFilter.SortValue = null;
        }
        filter.SortValue = filterValue;
    },
    
    _getSortedColumn$p$0: function PPSMA__scorecardSortAndFilterHandler$_getSortedColumn$p$0() {ULS01W:;
        var $$dict_0 = this._sortFilterValues$p$0;
        for (var $$key_1 in $$dict_0) {
            var entry = { key: $$key_1, value: $$dict_0[$$key_1] };
            var sf = entry.value;
            if (!isNullOrEmpty(sf.SortValue)) {
                return sf;
            }
        }
        return null;
    },
    
    _setToSortFilterMode$p$0: function PPSMA__scorecardSortAndFilterHandler$_setToSortFilterMode$p$0() {ULS01W:;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        viewState[PPSMA.ScorecardControlManager._vS_FilterMode$i] = 'true';
        PPSMA.ClientConnectionManager.get_instance().setViewState(this._webPartId$p$0, viewState);
    },
    
    _setToTreeMode$p$0: function PPSMA__scorecardSortAndFilterHandler$_setToTreeMode$p$0() {ULS01W:;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        viewState[PPSMA.ScorecardControlManager._vS_FilterMode$i] = 'false';
        PPSMA.ClientConnectionManager.get_instance().setViewState(this._webPartId$p$0, viewState);
    },
    
    _getPreviousSortValue$i$0: function PPSMA__scorecardSortAndFilterHandler$_getPreviousSortValue$i$0(columnName) {ULS01W:;
        var sortFilter = this._sortFilterValues$p$0[columnName];
        if (!isNullOrUndefined(sortFilter)) {
            return sortFilter.SortValue;
        }
        else {
            return '';
        }
    },
    
    _isValueFilterInUse$i$0: function PPSMA__scorecardSortAndFilterHandler$_isValueFilterInUse$i$0(columnName) {ULS01W:;
        var sortFilter = this._sortFilterValues$p$0[columnName];
        return !isNullOrUndefined(sortFilter) && !isNullOrUndefined(sortFilter.ValueFilter) && sortFilter.ValueFilter.length > 0 && !isNullOrEmpty(sortFilter.ValueFilter[0]);
    },
    
    _isTop10FilterInUse$i$0: function PPSMA__scorecardSortAndFilterHandler$_isTop10FilterInUse$i$0(columnName) {ULS01W:;
        var sortFilter = this._sortFilterValues$p$0[columnName];
        return !isNullOrUndefined(sortFilter) && !isNullOrEmpty(sortFilter.Top10Filter);
    },
    
    _showCustomDialog$p$0: function PPSMA__scorecardSortAndFilterHandler$_showCustomDialog$p$0(filter, filterElement) {ULS01W:;
        var dialog = new PPSMA.ValuesFilterDialog(this.$$d__filterCompleted$p$0, filterElement, filter, this._currencySeparator$p$0, this._decimalSeparator$p$0);
        dialog.show();
    },
    
    _showTop10Dialog$p$0: function PPSMA__scorecardSortAndFilterHandler$_showTop10Dialog$p$0(filter, filterElement) {ULS01W:;
        var dialog = new PPSMA.Top10FilterDialog(this.$$d__filterCompleted$p$0, filterElement, filter, this._currencySeparator$p$0, this._decimalSeparator$p$0);
        dialog.show();
    },
    
    _filterCompleted$p$0: function PPSMA__scorecardSortAndFilterHandler$_filterCompleted$p$0(filterChanged, newFilter, filterElement) {ULS01W:;
        if (filterChanged) {
            this._sortFilterValues$p$0[newFilter.ColumnName] = newFilter;
            this.saveToViewState();
            if (this._isAnyColumnFilterOrSorted$p$0()) {
                this._setToSortFilterMode$p$0();
                this._callBack$p$0(false);
            }
            else {
                this._setToTreeMode$p$0();
                this._callBack$p$0(true);
            }
        }
        else {
            filterElement.get_element().focus();
        }
    }
}


PPSMA.ScorecardToolbarHandler = function PPSMA_ScorecardToolbarHandler(webPartId, render, scorecardExpandCollapseState) {ULS01W:;
    this.$$d__statusFilterChanged$p$0 = Function.createDelegate(this, this._statusFilterChanged$p$0);
    this._webPartId$p$0 = webPartId;
    this._render$p$0 = render;
    this._scorecardExpandCollapseState$p$0 = scorecardExpandCollapseState;
}
PPSMA.ScorecardToolbarHandler._getToolbar$i = function PPSMA_ScorecardToolbarHandler$_getToolbar$i(webPartId) {ULS01W:;
    var scorecard = $get(webPartId);
    var tags = scorecard.getElementsByTagName('ul');
    for (var i = 0; i < tags.length; i++) {
        if (tags[i].className === PPSMA.ScorecardToolbarHandler._toolbarClass$p) {
            return tags[i];
        }
    }
    return null;
}
PPSMA.ScorecardToolbarHandler.prototype = {
    _webPartId$p$0: null,
    _buttons$p$0: null,
    _render$p$0: null,
    _scorecardExpandCollapseState$p$0: null,
    
    get__buttons$p$0: function PPSMA_ScorecardToolbarHandler$get__buttons$p$0() {ULS01W:;
        if (isNullOrUndefined(this._buttons$p$0)) {
            this._init$p$0();
        }
        return this._buttons$p$0;
    },
    
    _init$p$0: function PPSMA_ScorecardToolbarHandler$_init$p$0() {ULS01W:;
        this._buttons$p$0 = {};
        var toolbar = PPSMA.ScorecardToolbarHandler._getToolbar$i(this._webPartId$p$0);
        if (!isNullOrUndefined(toolbar)) {
            var lis = toolbar.getElementsByTagName('li');
            for (var i = 0; i < lis.length; i++) {
                if (PPSMA.ScorecardToolbarCell.acceptsElement(lis[i])) {
                    var button = new PPSMA.ScorecardToolbarCell(lis[i]);
                    button.set_toggled(button.get_isToggle() && button.get_element().className === PPSMA.ScorecardToolbarHandler._buttonSelectedClass$p);
                    this._buttons$p$0[button.get_buttonId()] = button;
                }
            }
        }
    },
    
    setButtonToggled: function PPSMA_ScorecardToolbarHandler$setButtonToggled(id, toggled) {ULS01W:;
        var button = this.get__buttons$p$0()[id];
        if (!isNullOrUndefined(button)) {
            if (toggled) {
                button.get_element().className = PPSMA.ScorecardToolbarHandler._buttonSelectedClass$p;
                button.set_toggled(true);
            }
            else {
                button.get_element().className = PPSMA.ScorecardToolbarHandler._buttonClass$p;
                button.set_toggled(false);
            }
        }
    },
    
    buttonPressed: function PPSMA_ScorecardToolbarHandler$buttonPressed(e) {ULS01W:;
        var button = this._getButtonFromEvent$p$0(e);
        if (!isNullOrUndefined(button)) {
            PPSMA.Scorecard._cancelEvent$i(e);
            switch (button.get_buttonId()) {
                case PPSMA.ScorecardToolbarHandler._buttonFilterStatus$i:
                    this._fitlerStatusPressed$p$0(e);
                    break;
                case PPSMA.ScorecardToolbarHandler._buttonAverageRollup$i:
                    this._updateRollupType$p$0(PPSMA.ScorecardToolbarHandler._rollupAverage$p);
                    break;
                case PPSMA.ScorecardToolbarHandler._buttonWorstChildRollup$i:
                    this._updateRollupType$p$0(PPSMA.ScorecardToolbarHandler._rollupWorstChild$p);
                    break;
                case PPSMA.ScorecardToolbarHandler._buttonIndicatorRollup$i:
                    this._updateRollupType$p$0(PPSMA.ScorecardToolbarHandler._rollupIndicatorCount$p);
                    break;
                case PPSMA.ScorecardToolbarHandler._buttonTreeMode$i:
                    this.treeModePressed();
                    break;
                case PPSMA.ScorecardToolbarHandler._buttonExpandAllRows$i:
                    this._scorecardExpandCollapseState$p$0.expandAllRows(e);
                    break;
                case PPSMA.ScorecardToolbarHandler._buttonCollapseAllRows$i:
                    this._scorecardExpandCollapseState$p$0.collapseAllRows(e);
                    break;
                case PPSMA.ScorecardToolbarHandler._buttonShowInlineText$i:
                    this._showInlineTextPressed$p$0();
                    break;
            }
        }
    },
    
    mouseEnter: function PPSMA_ScorecardToolbarHandler$mouseEnter(e) {ULS01W:;
        var button = this._getButtonFromEvent$p$0(e);
        if (!isNullOrUndefined(button)) {
            PPSMA.Scorecard._cancelEvent$i(e);
            button.get_element().className = PPSMA.ScorecardToolbarHandler._buttonSelectedClass$p;
        }
    },
    
    mouseLeave: function PPSMA_ScorecardToolbarHandler$mouseLeave(e) {ULS01W:;
        var button = this._getButtonFromEvent$p$0(e);
        if (!isNullOrUndefined(button)) {
            PPSMA.Scorecard._cancelEvent$i(e);
            if (!button.get_isToggle() || !button.get_toggled()) {
                button.get_element().className = PPSMA.ScorecardToolbarHandler._buttonClass$p;
            }
        }
    },
    
    treeModePressed: function PPSMA_ScorecardToolbarHandler$treeModePressed() {ULS01W:;
        var button = this.get__buttons$p$0()[PPSMA.ScorecardToolbarHandler._buttonTreeMode$i];
        if (!isNullOrUndefined(button)) {
            this._toggleButtonPressed$p$0(button);
            this.setTreeMode(button.get_toggled());
            this._render$p$0();
        }
    },
    
    _fitlerStatusPressed$p$0: function PPSMA_ScorecardToolbarHandler$_fitlerStatusPressed$p$0(e) {ULS01W:;
        var button = this.get__buttons$p$0()[PPSMA.ScorecardToolbarHandler._buttonFilterStatus$i];
        if (!isNullOrUndefined(button)) {
            var menu = PPSMA.StatusFilterMenu._getStatusFilterMenu$i(this._webPartId$p$0, button.get_element(), this._render$p$0, this.$$d__statusFilterChanged$p$0);
            menu.registerContextMenu(e);
        }
    },
    
    _showInlineTextPressed$p$0: function PPSMA_ScorecardToolbarHandler$_showInlineTextPressed$p$0() {ULS01W:;
        var button = this.get__buttons$p$0()[PPSMA.ScorecardToolbarHandler._buttonShowInlineText$i];
        if (!isNullOrUndefined(button)) {
            this._toggleButtonPressed$p$0(button);
            var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
            viewState[PPSMA.ScorecardControlManager._vS_ShowInlineText$i] = button.get_toggled().toString();
            PPSMA.ClientConnectionManager.get_instance().setViewState(this._webPartId$p$0, viewState);
            this._render$p$0();
        }
    },
    
    setTreeMode: function PPSMA_ScorecardToolbarHandler$setTreeMode(on) {ULS01W:;
        if (on) {
            this._show$p$0(PPSMA.ScorecardToolbarHandler._buttonExpandAllRows$i);
            this._show$p$0(PPSMA.ScorecardToolbarHandler._buttonCollapseAllRows$i);
            this._hide$p$0(PPSMA.ScorecardToolbarHandler._buttonShowInlineText$i);
        }
        else {
            this._hide$p$0(PPSMA.ScorecardToolbarHandler._buttonExpandAllRows$i);
            this._hide$p$0(PPSMA.ScorecardToolbarHandler._buttonCollapseAllRows$i);
            this._show$p$0(PPSMA.ScorecardToolbarHandler._buttonShowInlineText$i);
        }
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        viewState[PPSMA.ScorecardControlManager._vS_FilterMode$i] = (!on).toString();
        PPSMA.ClientConnectionManager.get_instance().setViewState(this._webPartId$p$0, viewState);
    },
    
    _getButtonFromEvent$p$0: function PPSMA_ScorecardToolbarHandler$_getButtonFromEvent$p$0(e) {ULS01W:;
        var srcElement = PPSMA.EventsEx.getCurrentElement(e);
        if (!isNullOrUndefined(srcElement)) {
            var currentElement = srcElement;
            while (!isNullOrUndefined(currentElement) && !PPSMA.ScorecardToolbarCell.acceptsElement(currentElement)) {
                currentElement = currentElement.parentNode;
            }
            if (PPSMA.ScorecardToolbarCell.acceptsElement(currentElement)) {
                return this.get__buttons$p$0()[new PPSMA.ScorecardToolbarCell(currentElement).get_buttonId()];
            }
        }
        return null;
    },
    
    _statusFilterChanged$p$0: function PPSMA_ScorecardToolbarHandler$_statusFilterChanged$p$0(filters) {ULS01W:;
        var button = this.get__buttons$p$0()[PPSMA.ScorecardToolbarHandler._buttonFilterStatus$i];
        button.get_element().className = PPSMA.ScorecardToolbarHandler._buttonClass$p;
        button.set_toggled(false);
        var newLabel = PPSMA.SR.ScorecardStatusFilter_TooltipLabel;
        if (this._isAnyFilterInUse$p$0(filters)) {
            newLabel = String.format('{0}: {1}', newLabel, this._getFiltersDescription$p$0(filters));
            button.get_element().className = PPSMA.ScorecardToolbarHandler._buttonSelectedClass$p;
            button.set_toggled(true);
        }
        button.setTitle(newLabel);
    },
    
    _getFiltersDescription$p$0: function PPSMA_ScorecardToolbarHandler$_getFiltersDescription$p$0(filters) {ULS01W:;
        var str = new Sys.StringBuilder();
        if (filters) {
            for (var i = 0; i < filters.length; i++) {
                if (filters[i].IsSelected) {
                    if (!str.isEmpty()) {
                        str.append(', ');
                    }
                    str.append(filters[i].DisplayName);
                }
            }
        }
        return str.toString();
    },
    
    _isAnyFilterInUse$p$0: function PPSMA_ScorecardToolbarHandler$_isAnyFilterInUse$p$0(filters) {ULS01W:;
        for (var i = 0; i < filters.length; i++) {
            if (filters[i].IsSelected) {
                return true;
            }
        }
        return false;
    },
    
    _updateRollupType$p$0: function PPSMA_ScorecardToolbarHandler$_updateRollupType$p$0(type) {ULS01W:;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        viewState[PPSMA.ScorecardControlManager._vS_RollupType$i] = type;
        PPSMA.ClientConnectionManager.get_instance().setViewState(this._webPartId$p$0, viewState);
        this._render$p$0();
    },
    
    _toggleButtonPressed$p$0: function PPSMA_ScorecardToolbarHandler$_toggleButtonPressed$p$0(button) {ULS01W:;
        if (!isNullOrUndefined(button)) {
            this.setButtonToggled(button.get_buttonId(), !button.get_toggled());
        }
    },
    
    _hide$p$0: function PPSMA_ScorecardToolbarHandler$_hide$p$0(id) {ULS01W:;
        var cell = this.get__buttons$p$0()[id];
        if (!isNullOrUndefined(cell)) {
            cell.get_element().className = PPSMA.ScorecardToolbarHandler._buttonHiddenClass$p;
        }
    },
    
    _show$p$0: function PPSMA_ScorecardToolbarHandler$_show$p$0(id) {ULS01W:;
        var cell = this.get__buttons$p$0()[id];
        if (!isNullOrUndefined(cell)) {
            var css = (cell.get_isToggle() && cell.get_toggled()) ? PPSMA.ScorecardToolbarHandler._buttonSelectedClass$p : PPSMA.ScorecardToolbarHandler._buttonClass$p;
            cell.get_element().className = css;
        }
    },
    
    loadFromClientViewState: function PPSMA_ScorecardToolbarHandler$loadFromClientViewState() {ULS01W:;
        this._init$p$0();
    }
}


PPSMA.StatusFilterMenu = function PPSMA_StatusFilterMenu() {ULS01W:;
    this._statusFilterMenu$p$0 = new PPSMA.ScorecardMenu(false);
}
PPSMA.StatusFilterMenu.getInstance = function PPSMA_StatusFilterMenu$getInstance() {ULS01W:;
    if (isNullOrUndefined(PPSMA.StatusFilterMenu._instance$p)) {
        PPSMA.StatusFilterMenu._instance$p = new PPSMA.StatusFilterMenu();
    }
    return PPSMA.StatusFilterMenu._instance$p;
}
PPSMA.StatusFilterMenu._getStatusFilterMenu$i = function PPSMA_StatusFilterMenu$_getStatusFilterMenu$i(webPartId, relativeTo, render, changedEvent) {ULS01W:;
    var sfm = PPSMA.StatusFilterMenu.getInstance();
    sfm._initialize$p$0(webPartId, relativeTo, render, changedEvent);
    return sfm.get__menu$p$0();
}
PPSMA.StatusFilterMenu._addStatusFilterMenuOptions$i = function PPSMA_StatusFilterMenu$_addStatusFilterMenuOptions$i(menu, webPartId, render, changedEvent) {ULS01W:;
    var sfm = PPSMA.StatusFilterMenu.getInstance();
    sfm._initializeExternalMenu$p$0(menu, webPartId, render, changedEvent);
}
PPSMA.StatusFilterMenu.isAnyFilterSelected = function PPSMA_StatusFilterMenu$isAnyFilterSelected(items) {ULS01W:;
    for (var i = 0; i < items.length; i++) {
        if (items[i].IsSelected) {
            return true;
        }
    }
    return false;
}
PPSMA.StatusFilterMenu.prototype = {
    _webPartId$p$0: null,
    _render$p$0: null,
    _changedEvent$p$0: null,
    
    get__menu$p$0: function PPSMA_StatusFilterMenu$get__menu$p$0() {ULS01W:;
        return this._statusFilterMenu$p$0;
    },
    
    _initializeExternalMenu$p$0: function PPSMA_StatusFilterMenu$_initializeExternalMenu$p$0(menu, webPartId, render, changedEvent) {ULS01W:;
        this._webPartId$p$0 = webPartId;
        this._render$p$0 = render;
        this._changedEvent$p$0 = changedEvent;
        var filterItems = this._getFilters$p$0(webPartId);
        this._addClearOption$p$0(menu, PPSMA.StatusFilterMenu.isAnyFilterSelected(filterItems));
        this._addStatusFilterOptions$p$0(menu, filterItems);
    },
    
    _initialize$p$0: function PPSMA_StatusFilterMenu$_initialize$p$0(webPartId, relativeTo, render, changedEvent) {ULS01W:;
        this._statusFilterMenu$p$0.setWebPartIdId(webPartId);
        this._webPartId$p$0 = webPartId;
        this._render$p$0 = render;
        this._changedEvent$p$0 = changedEvent;
        this._statusFilterMenu$p$0.clearMenuItems();
        this._statusFilterMenu$p$0.setElement(relativeTo);
        var filterItems = this._getFilters$p$0(webPartId);
        this._addClearOption$p$0(this._statusFilterMenu$p$0, PPSMA.StatusFilterMenu.isAnyFilterSelected(filterItems));
        this._statusFilterMenu$p$0.addMenuSeparator();
        this._addStatusFilterOptions$p$0(this._statusFilterMenu$p$0, filterItems);
    },
    
    _getFilters$p$0: function PPSMA_StatusFilterMenu$_getFilters$p$0(webPartId) {ULS01W:;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(webPartId);
        var filters = Sys.Serialization.JavaScriptSerializer.deserialize(viewState[PPSMA.ScorecardControlManager._vS_StatusFilters$i]);
        return filters;
    },
    
    _saveFilters$p$0: function PPSMA_StatusFilterMenu$_saveFilters$p$0(filters) {ULS01W:;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$p$0);
        viewState[PPSMA.ScorecardControlManager._vS_StatusFilters$i] = Sys.Serialization.JavaScriptSerializer.serialize(filters);
        PPSMA.ClientConnectionManager.get_instance().setViewState(this._webPartId$p$0, viewState);
        if (!isNullOrUndefined(this._changedEvent$p$0)) {
            this._changedEvent$p$0(filters);
        }
        if (!isNullOrUndefined(this._render$p$0)) {
            this._render$p$0();
        }
    },
    
    _addClearOption$p$0: function PPSMA_StatusFilterMenu$_addClearOption$p$0(menu, enabled) {ULS01W:;
        var clearItem = new PPSMA.ScorecardMenuItem();
        clearItem.set_caption(PPSMA.SR.ScorecardStatusFilter_Clear);
        clearItem.set_altText(PPSMA.SR.ScorecardStatusFilter_Clear);
        clearItem.set_action('PPSMA.StatusFilterMenu.getInstance().clearFilters()');
        if (enabled) {
            clearItem.set_iconPath(getPPSWebParts() + 'ClearFilter.gif');
        }
        else {
            clearItem.set_iconPath(getPPSWebParts() + 'ClearFilterD.gif');
            clearItem.set_isEnabled(false);
        }
        menu.addMenuItem(clearItem);
    },
    
    _addStatusFilterOptions$p$0: function PPSMA_StatusFilterMenu$_addStatusFilterOptions$p$0(menu, filters) {ULS01W:;
        var usedNames = [];
        for (var i = 0; i < filters.length; i++) {
            if (!Array.contains(usedNames, filters[i].DisplayName)) {
                var item = new PPSMA.ScorecardMenuItem();
                item.set_caption(filters[i].DisplayName);
                item.set_altText(filters[i].DisplayName);
                item.set_action(String.format('PPSMA.StatusFilterMenu.getInstance().menuClicked(\'{0}\')', filters[i].GroupId));
                if (filters[i].IsSelected) {
                    item.set_iconPath(getPPSWebParts() + 'Check.gif');
                }
                menu.addMenuItem(item);
                Array.add(usedNames, filters[i].DisplayName);
            }
        }
    },
    
    clearFilters: function PPSMA_StatusFilterMenu$clearFilters() {ULS01W:;
        var filters = this._getFilters$p$0(this._webPartId$p$0);
        for (var i = 0; i < filters.length; i++) {
            filters[i].IsSelected = false;
        }
        this._saveFilters$p$0(filters);
    },
    
    menuClicked: function PPSMA_StatusFilterMenu$menuClicked(groupId) {ULS01W:;
        var filters = this._getFilters$p$0(this._webPartId$p$0);
        for (var i = 0; i < filters.length; i++) {
            if (filters[i].GroupId === groupId) {
                this._setSelectedFiltersWithSameName$p$0(filters, filters[i].DisplayName, !filters[i].IsSelected);
                break;
            }
        }
        this._saveFilters$p$0(filters);
    },
    
    _setSelectedFiltersWithSameName$p$0: function PPSMA_StatusFilterMenu$_setSelectedFiltersWithSameName$p$0(filters, name, selected) {ULS01W:;
        for (var i = 0; i < filters.length; i++) {
            if (filters[i].DisplayName === name) {
                filters[i].IsSelected = selected;
            }
        }
    }
}


PPSMA.CommentsDialog = function PPSMA_CommentsDialog(cell, handler, dateFormat) {ULS01W:;
    this.$$d__enforceCommentBodyLength$p$1 = Function.createDelegate(this, this._enforceCommentBodyLength$p$1);
    this.$$d__validate$p$1 = Function.createDelegate(this, this._validate$p$1);
    this.$$d_addComment = Function.createDelegate(this, this.addComment);
    this.$$d_cancel = Function.createDelegate(this, this.cancel);
    this.$$d_save = Function.createDelegate(this, this.save);
    this.$$d_close = Function.createDelegate(this, this.close);
    this.$$d__setComments$p$1 = Function.createDelegate(this, this._setComments$p$1);
    PPSMA.CommentsDialog.initializeBase(this);
    this._cell$p$1 = cell;
    this._commentsHandler$p$1 = handler;
    this.set_height(400);
    this.set_width(500);
    this._init$p$1();
    this._dateFormatString$p$1 = dateFormat;
}
PPSMA.CommentsDialog.prototype = {
    _cell$p$1: null,
    _commentsHandler$p$1: null,
    _userName$p$1: null,
    _btnClose$p$1: null,
    _btnCancel$p$1: null,
    _btnSave$p$1: null,
    _txtTitle$p$1: null,
    _txaComment$p$1: null,
    _commentsSection$p$1: null,
    _commentsForm$p$1: null,
    _spanAddComment$p$1: null,
    _records$p$1: null,
    _commentsCompletedCallback$p$1: null,
    _dateFormatString$p$1: null,
    
    get_commentsCompleted: function PPSMA_CommentsDialog$get_commentsCompleted() {ULS01W:;
        return this._commentsCompletedCallback$p$1;
    },
    set_commentsCompleted: function PPSMA_CommentsDialog$set_commentsCompleted(value) {ULS01W:;
        this._commentsCompletedCallback$p$1 = value;
        return value;
    },
    
    get_id: function PPSMA_CommentsDialog$get_id() {ULS01W:;
        return this._cell$p$1.get_cellId();
    },
    
    _init$p$1: function PPSMA_CommentsDialog$_init$p$1() {ULS01W:;
        this._commentsHandler$p$1.set_callBack(this.$$d__setComments$p$1);
        this._commentsHandler$p$1.getAnnotations(this._cell$p$1.get_cellPath());
    },
    
    _setComments$p$1: function PPSMA_CommentsDialog$_setComments$p$1(recs, newUserName, addAnnotation) {ULS01W:;
        if (!isNullUndefinedOrEmpty(recs)) {
            if (isNullOrUndefined(this._commentsSection$p$1)) {
                this._records$p$1 = recs;
            }
            else {
                this._updateComments$p$1(recs);
            }
        }
        this._userName$p$1 = newUserName;
        this._setAnnotationElementVisibility$p$1(addAnnotation);
    },
    
    _updateComments$p$1: function PPSMA_CommentsDialog$_updateComments$p$1(recs) {ULS01W:;
        for (var i = 0; i < recs.length; i++) {
            var rec = recs[i];
            this._addCommentToSection$p$1(rec);
        }
    },
    
    addEvents: function PPSMA_CommentsDialog$addEvents() {ULS01W:;
        $addHandler(this._btnClose$p$1, 'click', this.$$d_close);
        $addHandler(this._btnSave$p$1, 'click', this.$$d_save);
        $addHandler(this._btnCancel$p$1, 'click', this.$$d_cancel);
        $addHandler(this._spanAddComment$p$1, 'click', this.$$d_addComment);
        $addHandler(this._txaComment$p$1, 'keyup', this.$$d__validate$p$1);
        $addHandler(this._txaComment$p$1, 'change', this.$$d__validate$p$1);
        $addHandler(this._txaComment$p$1, 'cut', this.$$d__validate$p$1);
        $addHandler(this._txaComment$p$1, 'paste', this.$$d__validate$p$1);
        $addHandler(this._txtTitle$p$1, 'keyup', this.$$d__validate$p$1);
        $addHandler(this._txtTitle$p$1, 'change', this.$$d__validate$p$1);
        $addHandler(this._txtTitle$p$1, 'cut', this.$$d__validate$p$1);
        $addHandler(this._txtTitle$p$1, 'paste', this.$$d__validate$p$1);
    },
    
    getContents: function PPSMA_CommentsDialog$getContents() {ULS01W:;
        var dialogContents = this._createParentBorder$p$1(PPSMA.CommentsDialog._commentsDialogId$p);
        var contentSection = this._createContentsSection$p$1();
        dialogContents.appendChild(contentSection);
        var footerDiv = this._createFooterSection$p$1(PPSMA.CommentsDialog._commentsDialogId$p);
        dialogContents.appendChild(footerDiv);
        this.addEvents();
        return dialogContents;
    },
    
    getTitle: function PPSMA_CommentsDialog$getTitle() {ULS01W:;
        if (isNaN(parseInt(this._cell$p$1.get_cellValue())) && isNaN(parseFloat(this._cell$p$1.get_cellValue()))) {
            return String.format(PPSMA.SR.ScorecardComments_CommentsRegarding, PPSMA.EncodeEx.xmlDecode(this._cell$p$1.get_cellValue()));
        }
        return String.format(PPSMA.SR.ScorecardComments_CommentsRegarding, this._cell$p$1.get_cellValue().trim());
    },
    
    setInitialFocus: function PPSMA_CommentsDialog$setInitialFocus() {ULS01W:;
        if (!isNullOrUndefined(this._spanAddComment$p$1)) {
            var anchors = this._spanAddComment$p$1.getElementsByTagName('a');
            if (anchors.length > 0) {
                anchors[0].focus();
            }
        }
    },
    
    notifyClosing: function PPSMA_CommentsDialog$notifyClosing(result, param) {ULS01W:;
        if (!isNullOrUndefined(this._cell$p$1)) {
            this._cell$p$1.focus();
        }
    },
    
    addComment: function PPSMA_CommentsDialog$addComment(e) {ULS01W:;
        this._spanAddComment$p$1.className = PPSMA.CommentsDialog._classItemHidden$p;
        this._commentsForm$p$1.className = PPSMA.CssClasses.scorecardCommentsFormDivOpen;
        this._commentsSection$p$1.className = PPSMA.CommentsDialog._classCommentsCommentListClosed$p;
        this._txtTitle$p$1.value = '';
        this._txtTitle$p$1.focus();
        this._txaComment$p$1.value = '';
        this._btnSave$p$1.disabled = true;
    },
    
    save: function PPSMA_CommentsDialog$save(e) {ULS01W:;
        var valid = true;
        if (isNullOrEmpty(this._txaComment$p$1.value) || !this._txaComment$p$1.value.trim().length) {
            valid = false;
            this._txaComment$p$1.focus();
        }
        if (isNullOrEmpty(this._txtTitle$p$1.value) || !this._txtTitle$p$1.value.trim().length) {
            valid = false;
            this._txtTitle$p$1.focus();
        }
        if (valid) {
            this._spanAddComment$p$1.className = PPSMA.CssClasses.scorecardCommentsAdd;
            this._commentsForm$p$1.className = PPSMA.CommentsDialog._classCommentsFormDivClosed$p;
            this._commentsSection$p$1.className = PPSMA.CommentsDialog._classCommentsCommentListOpen$p;
            var rec = new PPSMA.ScorecardCommentRecord();
            rec.Title = this._txtTitle$p$1.value;
            rec.Comment = this._txaComment$p$1.value;
            rec.CreatedDate = new Date().format(this._dateFormatString$p$1);
            rec.CreatedBy = this._userName$p$1;
            this._commentsHandler$p$1.updateAnnotation(this._cell$p$1.get_cellPath(), rec);
            this._addCommentToSection$p$1(rec);
            this._btnClose$p$1.focus();
            this._cell$p$1.set_forceParameterRefresh(true);
            PPSMA.Scorecard._performAction$i(this._cell$p$1, this._commentsHandler$p$1.get_webPartId());
            this._txtTitle$p$1.value = '';
            this._txaComment$p$1.value = '';
        }
        else {
            this._btnSave$p$1.disabled = true;
        }
    },
    
    cancel: function PPSMA_CommentsDialog$cancel(e) {ULS01W:;
        this._spanAddComment$p$1.className = PPSMA.CssClasses.scorecardCommentsAdd;
        this._commentsForm$p$1.className = PPSMA.CommentsDialog._classCommentsFormDivClosed$p;
        this._commentsSection$p$1.className = PPSMA.CommentsDialog._classCommentsCommentListOpen$p;
        this._txtTitle$p$1.value = '';
        this._txaComment$p$1.value = '';
    },
    
    close: function PPSMA_CommentsDialog$close(e) {ULS01W:;
        this.get_dialog().close(SP.UI.DialogResult.OK);
    },
    
    _validate$p$1: function PPSMA_CommentsDialog$_validate$p$1(e) {ULS01W:;
        this._btnSave$p$1.disabled = isNullOrEmpty(this._txaComment$p$1.value) || !this._txaComment$p$1.value.trim().length || isNullOrEmpty(this._txtTitle$p$1.value) || !this._txtTitle$p$1.value.trim().length;
    },
    
    _createContentsSection$p$1: function PPSMA_CommentsDialog$_createContentsSection$p$1() {ULS01W:;
        var container = document.createElement('div');
        container.className = PPSMA.CssClasses.scorecardDialogContents;
        this._addNewCommentForm$p$1(container);
        this._addCommentsList$p$1(container);
        return container;
    },
    
    _addNewCommentForm$p$1: function PPSMA_CommentsDialog$_addNewCommentForm$p$1(container) {ULS01W:;
        this._commentsForm$p$1 = document.createElement('div');
        this._commentsForm$p$1.className = PPSMA.CommentsDialog._classCommentsFormDivClosed$p;
        this._addTitle$p$1(this._commentsForm$p$1);
        this._addCommentInput$p$1(this._commentsForm$p$1);
        this._addSaveCancel$p$1(this._commentsForm$p$1);
        container.appendChild(this._commentsForm$p$1);
    },
    
    _addTitle$p$1: function PPSMA_CommentsDialog$_addTitle$p$1(container) {ULS01W:;
        var titleLabel = document.createElement('label');
        titleLabel.className = PPSMA.CssClasses.scorecardCommentsLabel;
        titleLabel.setAttribute('for', PPSMA.CommentsDialog._titleId$p);
        PPSMA._dialogsUtil.setElementText(titleLabel, PPSMA.SR.ScorecardComments_Title);
        this._txtTitle$p$1 = document.createElement('input');
        this._txtTitle$p$1.className = PPSMA.CommentsDialog._classCommentsTitleInput$p;
        this._txtTitle$p$1.type = 'text';
        this._txtTitle$p$1.setAttribute('maxlength', '250');
        this._txtTitle$p$1.id = PPSMA.CommentsDialog._titleId$p;
        var titleLabelDiv = document.createElement('div');
        titleLabelDiv.className = PPSMA.CssClasses.scorecardCommentsLabelDiv;
        titleLabelDiv.appendChild(titleLabel);
        titleLabelDiv.appendChild(this._txtTitle$p$1);
        container.appendChild(titleLabelDiv);
    },
    
    _addCommentInput$p$1: function PPSMA_CommentsDialog$_addCommentInput$p$1(container) {ULS01W:;
        var commentLabel = document.createElement('label');
        commentLabel.className = PPSMA.CommentsDialog._classCommentsCommentDiv$p;
        commentLabel.setAttribute('for', PPSMA.CommentsDialog._commentId$p);
        PPSMA._dialogsUtil.setElementText(commentLabel, PPSMA.SR.ScorecardComments_Comment);
        this._txaComment$p$1 = document.createElement('textarea');
        this._txaComment$p$1.id = PPSMA.CommentsDialog._commentId$p;
        this._txaComment$p$1.className = PPSMA.CommentsDialog._classCommentsCommentTextArea$p;
        this._txaComment$p$1.rows = 5;
        this._txaComment$p$1.cols = 19;
        $addHandler(this._txaComment$p$1, 'change', this.$$d__enforceCommentBodyLength$p$1);
        var commentLabelDiv = document.createElement('div');
        commentLabelDiv.appendChild(commentLabel);
        commentLabelDiv.appendChild(this._txaComment$p$1);
        container.appendChild(commentLabelDiv);
    },
    
    _enforceCommentBodyLength$p$1: function PPSMA_CommentsDialog$_enforceCommentBodyLength$p$1(e) {ULS01W:;
        var txaComment = $get(PPSMA.CommentsDialog._commentId$p);
        if (txaComment.value.length > PPSMA.CommentsDialog._maX_COMMENT_BODY_LENGTH$p) {
            txaComment.value = txaComment.value.substr(0, PPSMA.CommentsDialog._maX_COMMENT_BODY_LENGTH$p);
        }
    },
    
    _addSaveCancel$p$1: function PPSMA_CommentsDialog$_addSaveCancel$p$1(container) {ULS01W:;
        this._btnCancel$p$1 = document.createElement('input');
        this._btnCancel$p$1.id = PPSMA.CommentsDialog._cancelCommentButtonId$p;
        this._btnCancel$p$1.type = 'button';
        this._btnCancel$p$1.value = PPSMA.SR.OlapChangeMeasure_Cancel;
        Sys.UI.DomElement.addCssClass(this._btnCancel$p$1, PPSMA.CssClasses.scorecardCommentBtn);
        this._btnSave$p$1 = document.createElement('input');
        this._btnSave$p$1.id = PPSMA.CommentsDialog._saveCommentButtonId$p;
        this._btnSave$p$1.type = 'button';
        this._btnSave$p$1.value = PPSMA.SR.ScorecardComments_Save;
        Sys.UI.DomElement.addCssClass(this._btnSave$p$1, PPSMA.CssClasses.scorecardCommentBtn);
        this._btnSave$p$1.disabled = true;
        var footerDiv = document.createElement('div');
        footerDiv.className = PPSMA.CommentsDialog._classCommentsSaveCancelDiv$p;
        footerDiv.appendChild(this._btnSave$p$1);
        footerDiv.appendChild(this._btnCancel$p$1);
        container.appendChild(footerDiv);
    },
    
    _addCommentsList$p$1: function PPSMA_CommentsDialog$_addCommentsList$p$1(container) {ULS01W:;
        this._commentsSection$p$1 = document.createElement('div');
        this._commentsSection$p$1.className = PPSMA.CommentsDialog._classCommentsCommentListOpen$p;
        container.appendChild(this._commentsSection$p$1);
        if (!isNullUndefinedOrEmpty(this._records$p$1)) {
            this._updateComments$p$1(this._records$p$1);
        }
    },
    
    _addCommentToSection$p$1: function PPSMA_CommentsDialog$_addCommentToSection$p$1(rec) {ULS01W:;
        var spanTitle = document.createElement('span');
        spanTitle.className = PPSMA.CommentsDialog._classCommentsTitleHeaderSpan$p;
        PPSMA._dialogsUtil.setElementText(spanTitle, rec.Title);
        var titleDiv = document.createElement('div');
        titleDiv.className = PPSMA.CommentsDialog._classCommentsTitleHeaderDiv$p;
        titleDiv.appendChild(spanTitle);
        var spanOwner = document.createElement('span');
        spanOwner.className = PPSMA.CommentsDialog._classCommentsOwnerHeader$p;
        PPSMA._dialogsUtil.setElementText(spanOwner, rec.CreatedBy);
        var spanCreatedDate = document.createElement('span');
        spanCreatedDate.className = PPSMA.CommentsDialog._classCommentsCreatedByHeader$p;
        PPSMA._dialogsUtil.setElementText(spanCreatedDate, rec.CreatedDate);
        var ownerCreateDiv = document.createElement('div');
        ownerCreateDiv.className = PPSMA.CommentsDialog._classCommentsOwnerCreatedByDiv$p;
        ownerCreateDiv.appendChild(spanOwner);
        ownerCreateDiv.appendChild(spanCreatedDate);
        var spanBody = document.createElement('span');
        spanBody.className = PPSMA.CommentsDialog._classCommentsCommentBody$p;
        PPSMA._dialogsUtil.setElementText(spanBody, rec.Comment);
        var commentBodyDiv = document.createElement('div');
        commentBodyDiv.className = PPSMA.CommentsDialog._classCommentsCommentBodyDiv$p;
        commentBodyDiv.appendChild(spanBody);
        var commentDiv = document.createElement('div');
        commentDiv.appendChild(titleDiv);
        commentDiv.appendChild(ownerCreateDiv);
        commentDiv.appendChild(commentBodyDiv);
        this._commentsSection$p$1.appendChild(commentDiv);
    },
    
    _createParentBorder$p$1: function PPSMA_CommentsDialog$_createParentBorder$p$1(filterID) {ULS01W:;
        var mainDialog = document.createElement('div');
        mainDialog.id = this.get_id() + filterID;
        mainDialog.className = PPSMA.CssClasses.scorecardFilterParentBorder;
        return mainDialog;
    },
    
    _createFooterSection$p$1: function PPSMA_CommentsDialog$_createFooterSection$p$1(filterID) {ULS01W:;
        var footerDiv = document.createElement('div');
        footerDiv.id = this.get_id() + PPSMA.FilterDialog.idFilterFooter;
        footerDiv.className = PPSMA.CssClasses.scorecardDialogFooter;
        var addCommentImg = document.createElement('img');
        addCommentImg.className = PPSMA.CommentsDialog._classCommentsHeaderImage$p;
        addCommentImg.src = getPPSWebParts() + 'addAnnIcon.gif';
        var addCommentText = document.createElement('span');
        PPSMA._dialogsUtil.setElementText(addCommentText, PPSMA.SR.ScorecardComments_AddComment);
        var addCommentAnchor = document.createElement('a');
        addCommentAnchor.href = '#';
        addCommentAnchor.target = '_self';
        addCommentAnchor.appendChild(addCommentImg);
        addCommentAnchor.appendChild(addCommentText);
        this._spanAddComment$p$1 = document.createElement('span');
        this._spanAddComment$p$1.className = PPSMA.CssClasses.scorecardCommentsAdd;
        this._spanAddComment$p$1.appendChild(addCommentAnchor);
        this._btnClose$p$1 = document.createElement('input');
        this._btnClose$p$1.id = this.get_id() + PPSMA.CommentsDialog._cancelDialogId$p + filterID;
        this._btnClose$p$1.type = 'button';
        this._btnClose$p$1.value = PPSMA.SR.ScorecardComments_Close;
        Sys.UI.DomElement.addCssClass(this._btnClose$p$1, PPSMA.CssClasses.scorecardCommentBtn);
        footerDiv.appendChild(this._spanAddComment$p$1);
        footerDiv.appendChild(this._btnClose$p$1);
        return footerDiv;
    },
    
    _setAnnotationElementVisibility$p$1: function PPSMA_CommentsDialog$_setAnnotationElementVisibility$p$1(visible) {ULS01W:;
        if (!isNullOrUndefined(this._cell$p$1)) {
            this._cell$p$1.set_isAnnotated((visible) ? 'True' : 'False');
            PPSMA.Scorecard.setAnnotationElementVisibility(visible, this._cell$p$1);
        }
    }
}


PPSMA._dialogsUtil = function PPSMA__dialogsUtil() {
}
PPSMA._dialogsUtil.isValidNumber = function PPSMA__dialogsUtil$isValidNumber(value, allowDecimal, allowNegative) {ULS01W:;
    if (value === '' || !value) {
        return 4;
    }
    var errorCode = 0;
    var valid;
    while (value.indexOf(PPSMA._dialogsUtil.thousandSeparator) >= 0) {
        value = value.replace(PPSMA._dialogsUtil.thousandSeparator, '');
    }
    if (allowNegative && !value.trim().indexOf('-')) {
        value = value.replace('-', '');
    }
    var valueSplit = value.split(PPSMA._dialogsUtil.decimalPoint);
    var splitLimit = ((allowDecimal) ? 2 : 1);
    valid = valueSplit.length <= splitLimit;
    if (!valid) {
        errorCode = 3;
    }
    if (valid) {
        value = value.replace(PPSMA._dialogsUtil.decimalPoint, '');
        var rgx = new RegExp('(\\D+)');
        valid = !rgx.test(value);
        if (!valid) {
            errorCode = 1;
        }
    }
    if (valid && !allowNegative) {
        valid = value.indexOf('-') < 0;
        if (!valid) {
            errorCode = 2;
        }
    }
    return errorCode;
}
PPSMA._dialogsUtil.formatValue = function PPSMA__dialogsUtil$formatValue(number, noDecimal, allowEmpty) {ULS01W:;
    if (allowEmpty && isNullOrEmpty(number)) {
        return number;
    }
    var clear0s = new RegExp('^[0]+');
    number = number.replace(clear0s, '');
    if (!number || number === '') {
        number = '0';
    }
    while (number.indexOf(PPSMA._dialogsUtil.thousandSeparator) >= 0) {
        number = number.replace(PPSMA._dialogsUtil.thousandSeparator, '');
    }
    var snumSplit = number.split(PPSMA._dialogsUtil.decimalPoint);
    var wholeNum = snumSplit[0];
    var fraction = (snumSplit.length > 1) ? PPSMA._dialogsUtil.decimalPoint + snumSplit[1] : '';
    var rgx = new RegExp('(\\d+)(\\d{3})');
    while (rgx.test(wholeNum)) {
        wholeNum = wholeNum.replace(rgx, '$1' + PPSMA._dialogsUtil.thousandSeparator + '$2');
    }
    return wholeNum + ((noDecimal) ? '' : fraction);
}
PPSMA._dialogsUtil.addLabel = function PPSMA__dialogsUtil$addLabel(dialog, text, id, hidden, className) {ULS01W:;
    var label = document.createElement('div');
    if (id) {
        label.id = id;
    }
    label.className = ((hidden) ? PPSMA._dialogsUtil.classItemHidden : className);
    Sys.UI.DomElement.addCssClass(label, PPSMA._dialogsUtil.classvalueFilterInputAlternateMargin);
    PPSMA._dialogsUtil.setElementText(label, text);
    dialog.appendChild(label);
    return label;
}
PPSMA._dialogsUtil.createFilterOption = function PPSMA__dialogsUtil$createFilterOption(value, displayText, selected) {ULS01W:;
    var option = document.createElement('option');
    option.value = value;
    option.title = displayText;
    PPSMA._dialogsUtil.setElementText(option, displayText);
    option.selected = selected;
    return option;
}
PPSMA._dialogsUtil.formatValueInput = function PPSMA__dialogsUtil$formatValueInput(value, noDecimal, allowEmpty) {ULS01W:;
    if (value) {
        var snum = PPSMA._dialogsUtil.getTrimmedInputValue(value);
        if (!isNullOrEmpty(snum)) {
            PPSMA._dialogsUtil.setInputValue(value, PPSMA._dialogsUtil.formatValue(snum, noDecimal, allowEmpty));
        }
    }
}
PPSMA._dialogsUtil.getInputValue = function PPSMA__dialogsUtil$getInputValue(input) {ULS01W:;
    if (!input) {
        return '';
    }
    var value = input.value;
    if (isNullOrUndefined(value)) {
        value = '';
    }
    return value;
}
PPSMA._dialogsUtil.getTrimmedInputValue = function PPSMA__dialogsUtil$getTrimmedInputValue(input) {ULS01W:;
    var value = PPSMA._dialogsUtil.getInputValue(input);
    if (!isNullOrEmpty(value)) {
        value = value.trimStart().trimEnd();
    }
    return value;
}
PPSMA._dialogsUtil.setInputValue = function PPSMA__dialogsUtil$setInputValue(input, value) {ULS01W:;
    if (!input) {
        return;
    }
    input.value = value;
}
PPSMA._dialogsUtil.getSelectedValue = function PPSMA__dialogsUtil$getSelectedValue(options) {ULS01W:;
    var selectedOption = 0;
    if (options) {
        selectedOption = options.selectedIndex;
    }
    return selectedOption;
}
PPSMA._dialogsUtil.setElementText = function PPSMA__dialogsUtil$setElementText(element, text) {ULS01W:;
    if (!isNullOrUndefined(element) && !isNullOrUndefined(text)) {
        if (getBrowserIs().ie55up) {
            element.innerText = text;
        }
        else {
            element.textContent = text;
        }
    }
}


PPSMA.ScorecardDialog = function PPSMA_ScorecardDialog() {ULS01W:;
    this.$$d_closeDialog = Function.createDelegate(this, this.closeDialog);
    this._dialogWidth$0 = 520;
    this._dialogHeight$0 = 125;
}
PPSMA.ScorecardDialog.prototype = {
    _dialogWidth$0: 0,
    _dialogHeight$0: 0,
    _dialog$0: null,
    _maximizable$0: false,
    _closing$p$0: false,
    
    get_height: function PPSMA_ScorecardDialog$get_height() {ULS01W:;
        return this._dialogHeight$0;
    },
    set_height: function PPSMA_ScorecardDialog$set_height(value) {ULS01W:;
        this._dialogHeight$0 = value;
        return value;
    },
    
    get_width: function PPSMA_ScorecardDialog$get_width() {ULS01W:;
        return this._dialogWidth$0;
    },
    set_width: function PPSMA_ScorecardDialog$set_width(value) {ULS01W:;
        this._dialogWidth$0 = value;
        return value;
    },
    
    get_dialog: function PPSMA_ScorecardDialog$get_dialog() {ULS01W:;
        return this._dialog$0;
    },
    
    get_isClosing: function PPSMA_ScorecardDialog$get_isClosing() {ULS01W:;
        return this._closing$p$0;
    },
    set_isClosing: function PPSMA_ScorecardDialog$set_isClosing(value) {ULS01W:;
        this._closing$p$0 = value;
        return value;
    },
    
    get_allowMaximize: function PPSMA_ScorecardDialog$get_allowMaximize() {ULS01W:;
        return this._maximizable$0;
    },
    set_allowMaximize: function PPSMA_ScorecardDialog$set_allowMaximize(value) {ULS01W:;
        this._maximizable$0 = value;
        return value;
    },
    
    _getDialogOptions$p$0: function PPSMA_ScorecardDialog$_getDialogOptions$p$0() {ULS01W:;
        var pt = PPSMA.SizeEx.getCenterXandY(this._dialogWidth$0, this._dialogHeight$0);
        var opts = new SP.UI.DialogOptions();
        opts.height = this._dialogHeight$0;
        opts.width = this._dialogWidth$0;
        opts.title = this.getTitle();
        opts.allowMaximize = this.get_allowMaximize();
        opts.html = this.getContents();
        opts.x = pt.x;
        opts.y = pt.y;
        opts.dialogReturnValueCallback = this.$$d_closeDialog;
        return opts;
    },
    
    show: function PPSMA_ScorecardDialog$show() {ULS01W:;
        var opt = this._getDialogOptions$p$0();
        this._dialog$0 = SP.UI.ModalDialog.showModalDialog(opt);
        this.setInitialFocus();
    },
    
    closeDialog: function PPSMA_ScorecardDialog$closeDialog(result, param) {ULS01W:;
        if (!this.get_isClosing()) {
            this.set_isClosing(true);
            this.notifyClosing(result, param);
        }
    }
}


PPSMA.ScorecardFilterDialog = function PPSMA_ScorecardFilterDialog(callBack, filterElement, currentFilter, currencyGroupSeparator, currencyDecimalSeparator) {ULS01W:;
    this.$$d_cancel = Function.createDelegate(this, this.cancel);
    this.$$d_apply = Function.createDelegate(this, this.apply);
    this.$$d_clear = Function.createDelegate(this, this.clear);
    PPSMA.ScorecardFilterDialog.initializeBase(this);
    this._filterElement$p$1 = filterElement;
    this._callBack$p$1 = callBack;
    this._filter$p$1 = currentFilter;
    this._currencyDecimalSeparator$p$1 = currencyDecimalSeparator;
    this._currencyGroupSeparator$p$1 = currencyGroupSeparator;
    this.init();
}
PPSMA.ScorecardFilterDialog.getPathToRoot = function PPSMA_ScorecardFilterDialog$getPathToRoot(cell, str) {ULS01W:;
    var topCell = PPSMA.Scorecard.getPrevVisibleCell(cell);
    if (!isNullOrUndefined(topCell)) {
        PPSMA.ScorecardFilterDialog.getPathToRoot(topCell, str);
    }
    if (!isNullOrEmpty(cell.get_cellText().trim())) {
        if (!str.isEmpty()) {
            str.append(', ');
        }
        str.append(cell.get_cellText());
    }
}
PPSMA.ScorecardFilterDialog.prototype = {
    _filterElement$p$1: null,
    _filter$p$1: null,
    _callBack$p$1: null,
    _warningDiv$p$1: null,
    _btnApply$p$1: null,
    _btnCancel$p$1: null,
    _spanClear$p$1: null,
    _cmbTargetElement$p$1: null,
    _okDisabled$p$1: true,
    _currencyGroupSeparator$p$1: null,
    _currencyDecimalSeparator$p$1: null,
    
    get_isOkDisabled: function PPSMA_ScorecardFilterDialog$get_isOkDisabled() {ULS01W:;
        return this._okDisabled$p$1;
    },
    set_isOkDisabled: function PPSMA_ScorecardFilterDialog$set_isOkDisabled(value) {ULS01W:;
        this._okDisabled$p$1 = value;
        return value;
    },
    
    get_showSecondValue: function PPSMA_ScorecardFilterDialog$get_showSecondValue() {ULS01W:;
        return this._filterElement$p$1.get_showSecondValue();
    },
    
    get_id: function PPSMA_ScorecardFilterDialog$get_id() {ULS01W:;
        return this._filterElement$p$1.get_element().id;
    },
    
    get_columnName: function PPSMA_ScorecardFilterDialog$get_columnName() {ULS01W:;
        var column = this._filterElement$p$1.get_sortFilterColumn();
        return (this.get_showSecondValue() && this.get_isSecondValue()) ? column + '$' : column;
    },
    
    get_isCurrentValueNumeric: function PPSMA_ScorecardFilterDialog$get_isCurrentValueNumeric() {ULS01W:;
        var isSecondValue = !isNullOrUndefined(this._cmbTargetElement$p$1) && this._cmbTargetElement$p$1.selectedIndex === 1;
        return (isSecondValue) ? this.get_isSecondValueNumeric() : this.get_isFirstValueNumeric();
    },
    
    get_isFirstValueNumeric: function PPSMA_ScorecardFilterDialog$get_isFirstValueNumeric() {ULS01W:;
        return this._filterElement$p$1.get_columnType() === 'System.Decimal';
    },
    
    get_isSecondValueNumeric: function PPSMA_ScorecardFilterDialog$get_isSecondValueNumeric() {ULS01W:;
        return this._filterElement$p$1.get_columnType2() === 'System.Decimal';
    },
    
    get_callBack: function PPSMA_ScorecardFilterDialog$get_callBack() {ULS01W:;
        return this._callBack$p$1;
    },
    
    get_filter: function PPSMA_ScorecardFilterDialog$get_filter() {ULS01W:;
        return this._filter$p$1;
    },
    
    get_isSecondValue: function PPSMA_ScorecardFilterDialog$get_isSecondValue() {ULS01W:;
        return !isNullOrUndefined(this.get_filter()) && this.get_filter().IsSecondValue;
    },
    
    get_targetElementLabels: function PPSMA_ScorecardFilterDialog$get_targetElementLabels() {ULS01W:;
        if (!isNullOrEmpty(this._filterElement$p$1.get_targetElements())) {
            return this._filterElement$p$1.get_targetElements().split('|');
        }
        return [ '', '' ];
    },
    
    get_cmbTargetElement: function PPSMA_ScorecardFilterDialog$get_cmbTargetElement() {ULS01W:;
        return this._cmbTargetElement$p$1;
    },
    
    addEvents: function PPSMA_ScorecardFilterDialog$addEvents() {ULS01W:;
        $addHandler(this._spanClear$p$1, 'click', this.$$d_clear);
        $addHandler(this._btnApply$p$1, 'click', this.$$d_apply);
        $addHandler(this._btnCancel$p$1, 'click', this.$$d_cancel);
    },
    
    collectValues: function PPSMA_ScorecardFilterDialog$collectValues() {ULS01W:;
        if (isNullOrUndefined(this.get_filter())) {
            this._filter$p$1 = new PPSMA.SortFilter();
        }
        this.get_filter().IsSecondValue = !isNullOrUndefined(this._cmbTargetElement$p$1) && this._cmbTargetElement$p$1.selectedIndex === 1;
    },
    
    notifyClosing: function PPSMA_ScorecardFilterDialog$notifyClosing(result, param) {ULS01W:;
        this._callBack$p$1(false, null, this._filterElement$p$1);
    },
    
    getContents: function PPSMA_ScorecardFilterDialog$getContents() {ULS01W:;
        var dialogContents = this._createParentBorder$p$1(PPSMA.FilterDialog.idTopFilterDialog);
        var contentSection = this.createFilterSection();
        dialogContents.appendChild(contentSection);
        var footerDiv = this._createFooterSection$p$1(PPSMA.FilterDialog.idTopFilterDialog);
        dialogContents.appendChild(footerDiv);
        this.addEvents();
        return dialogContents;
    },
    
    setApplyEnabled: function PPSMA_ScorecardFilterDialog$setApplyEnabled(enabled) {ULS01W:;
        if (!isNullOrUndefined(this._btnApply$p$1)) {
            this._btnApply$p$1.disabled = !enabled;
        }
        if (enabled) {
            this.clearWarnings();
        }
    },
    
    _createParentBorder$p$1: function PPSMA_ScorecardFilterDialog$_createParentBorder$p$1(filterID) {ULS01W:;
        var mainDialog = document.createElement('div');
        mainDialog.id = this.get_id() + filterID;
        mainDialog.className = PPSMA.CssClasses.scorecardFilterParentBorder;
        mainDialog.style.overflow = 'hidden';
        return mainDialog;
    },
    
    _createFooterSection$p$1: function PPSMA_ScorecardFilterDialog$_createFooterSection$p$1(filterID) {ULS01W:;
        var footerDiv = document.createElement('div');
        footerDiv.id = this.get_id() + PPSMA.FilterDialog.idFilterFooter;
        footerDiv.className = PPSMA.CssClasses.scorecardFilterFooter;
        var clearImage = document.createElement('img');
        clearImage.id = this.get_id() + PPSMA.FilterDialog.idClearFilterBtnImage;
        clearImage.className = PPSMA.ScorecardFilterDialog._classClearFilterImage$p;
        clearImage.src = getPPSWebParts() + 'ClearFilter.gif';
        var clearText = document.createElement('span');
        clearText.id = this.get_id() + PPSMA.FilterDialog.idClearFilterText;
        PPSMA._dialogsUtil.setElementText(clearText, PPSMA.SR.OlapFilter_Clear);
        var clear = document.createElement('a');
        clear.id = this.get_id() + PPSMA.FilterDialog.idClearFilterBtn + filterID + '_Anchor';
        clear.href = '#';
        clear.target = '_self';
        clear.appendChild(clearImage);
        clear.appendChild(clearText);
        this._spanClear$p$1 = document.createElement('span');
        this._spanClear$p$1.id = this.get_id() + PPSMA.FilterDialog.idClearFilterBtn + filterID;
        this._spanClear$p$1.className = ((this.isFilterInUse()) ? PPSMA.CssClasses.scorecardFilterClear : PPSMA.FilterDialog.classFilterItemHidden);
        this._spanClear$p$1.appendChild(clear);
        this._btnApply$p$1 = document.createElement('input');
        this._btnApply$p$1.id = this.get_id() + PPSMA.FilterDialog.idFilterApply + filterID;
        this._btnApply$p$1.type = 'button';
        Sys.UI.DomElement.addCssClass(this._btnApply$p$1, PPSMA.CssClasses.scorecardFilterButtons);
        this._btnApply$p$1.value = PPSMA.SR.OlapChangeMeasure_Ok;
        this._btnApply$p$1.disabled = this.get_isOkDisabled();
        this._btnCancel$p$1 = document.createElement('input');
        this._btnCancel$p$1.id = this.get_id() + PPSMA.FilterDialog.idFilterCancel + filterID;
        Sys.UI.DomElement.addCssClass(this._btnCancel$p$1, PPSMA.CssClasses.scorecardFilterButtons);
        this._btnCancel$p$1.type = 'button';
        this._btnCancel$p$1.value = PPSMA.SR.OlapChangeMeasure_Cancel;
        footerDiv.appendChild(this._spanClear$p$1);
        footerDiv.appendChild(this._btnApply$p$1);
        footerDiv.appendChild(this._btnCancel$p$1);
        return footerDiv;
    },
    
    createFilterContents: function PPSMA_ScorecardFilterDialog$createFilterContents(contentLabel) {ULS01W:;
        var contentDiv = document.createElement('div');
        contentDiv.id = this.get_id() + PPSMA.FilterDialog.idFilterDialogContents;
        contentDiv.className = PPSMA.FilterDialog.classFilterDialogContents;
        var textMsgDiv = document.createElement('div');
        textMsgDiv.className = PPSMA.FilterDialog.classFilterLabelDiv;
        var textMsg = document.createElement('span');
        textMsg.className = PPSMA.FilterDialog.classFilterLabel;
        PPSMA._dialogsUtil.setElementText(textMsg, contentLabel);
        textMsgDiv.appendChild(textMsg);
        contentDiv.appendChild(textMsgDiv);
        return contentDiv;
    },
    
    createNumericValidationWarning: function PPSMA_ScorecardFilterDialog$createNumericValidationWarning(forParentId) {ULS01W:;
        var warning = document.createElement('div');
        warning.id = this.get_id() + PPSMA.FilterDialog.idNumericValidationWarning + forParentId;
        warning.className = PPSMA.CssClasses.scorecardNumericValidationWarningDiv;
        var span = document.createElement('span');
        Sys.UI.DomElement.addCssClass(span, PPSMA.CssClasses.scorecardFilterWarningLabel);
        Sys.UI.DomElement.addCssClass(span, PPSMA.CssClasses.msFormValidation);
        var msgDiv = document.createElement('div');
        msgDiv.style.visibility = 'hidden';
        msgDiv.appendChild(span);
        warning.appendChild(msgDiv);
        this._warningDiv$p$1 = warning;
        return warning;
    },
    
    addTargetElementOptions: function PPSMA_ScorecardFilterDialog$addTargetElementOptions(container, className) {ULS01W:;
        var filterTopVar = document.createElement('select');
        filterTopVar.id = this.get_id() + PPSMA.ScorecardFilterDialog._idTargetVarianceOptionsDropdown$p;
        filterTopVar.className = className;
        filterTopVar.setAttribute('name', PPSMA.ScorecardFilterDialog._idTargetVarianceOptionsDropdown$p);
        var isSecondValue = this.get_filter().IsSecondValue;
        var optionItems = PPSMA._dialogsUtil.createFilterOption('0', this.get_targetElementLabels()[0], !isSecondValue);
        filterTopVar.appendChild(optionItems);
        var optionPercent = PPSMA._dialogsUtil.createFilterOption('1', this.get_targetElementLabels()[1], isSecondValue);
        filterTopVar.appendChild(optionPercent);
        container.appendChild(filterTopVar);
        this._cmbTargetElement$p$1 = filterTopVar;
    },
    
    cancel: function PPSMA_ScorecardFilterDialog$cancel(e) {ULS01W:;
        this.get_dialog().close(SP.UI.DialogResult.OK);
    },
    
    clear: function PPSMA_ScorecardFilterDialog$clear(e) {ULS01W:;
        if (!this.get_isClosing()) {
            this.set_isClosing(true);
            this._callBack$p$1(true, this.get_filter(), this._filterElement$p$1);
        }
        if (!isNullOrUndefined(this._cmbTargetElement$p$1)) {
            this._cmbTargetElement$p$1.selectedIndex = 0;
        }
        this.get_dialog().close(SP.UI.DialogResult.OK);
    },
    
    apply: function PPSMA_ScorecardFilterDialog$apply(e) {ULS01W:;
        if (!this.get_isClosing()) {
            this.set_isClosing(true);
            this.collectValues();
            this._callBack$p$1(true, this.get_filter(), this._filterElement$p$1);
        }
        this.get_dialog().close(SP.UI.DialogResult.OK);
    },
    
    numericValidation: function PPSMA_ScorecardFilterDialog$numericValidation(input, pos, allowNegative, floatAccepted, limitFrom, limitTo, percentType, errorMsg) {ULS01W:;
        if (!input) {
            return false;
        }
        var valid = true;
        var value = PPSMA._dialogsUtil.getTrimmedInputValue(input);
        if (!value || value === '') {
            return false;
        }
        if (percentType && value.length > 1 && value.endsWith('%')) {
            value = value.substring(0, value.length - 1);
        }
        var errorCode = PPSMA._dialogsUtil.isValidNumber(value, floatAccepted, allowNegative);
        if (errorCode > 0) {
            valid = false;
        }
        else {
            while (value.indexOf(this._currencyGroupSeparator$p$1) >= 0) {
                value = value.replace(this._currencyGroupSeparator$p$1, '');
            }
            if (value.length >= 29) {
                valid = false;
            }
            else {
                var numValue = 0;
                if (floatAccepted) {
                    numValue = parseFloat(value);
                }
                else {
                    numValue = parseInt(value);
                }
                if (isNaN(numValue) || (!allowNegative && numValue < limitFrom) || (limitTo > 0 && numValue > limitTo) || (percentType && !numValue)) {
                    valid = false;
                }
            }
        }
        var divs = this._warningDiv$p$1.getElementsByTagName('div');
        var msgDiv = divs[pos - 1];
        if (isNullOrUndefined(msgDiv) && divs.length > 0) {
            msgDiv = divs[0];
        }
        var noErrorDisplay = (errorCode === 4 || errorCode === 3);
        if (!valid && !noErrorDisplay) {
            msgDiv.style.visibility = 'visible';
            var span = msgDiv.firstChild;
            PPSMA._dialogsUtil.setElementText(span, errorMsg);
        }
        else {
            if (msgDiv) {
                msgDiv.style.visibility = 'hidden';
            }
        }
        return valid;
    },
    
    clearWarnings: function PPSMA_ScorecardFilterDialog$clearWarnings() {ULS01W:;
        var divs = this._warningDiv$p$1.getElementsByTagName('div');
        for (var i = 0; i < divs.length; i++) {
            divs[i].style.visibility = 'hidden';
        }
    },
    
    getTitlePath: function PPSMA_ScorecardFilterDialog$getTitlePath() {ULS01W:;
        var str = new Sys.StringBuilder();
        if (PPSMA.ScorecardCell.acceptsElement(this._filterElement$p$1.get_element())) {
            var cell = new PPSMA.ScorecardCell(this._filterElement$p$1.get_element());
            PPSMA.ScorecardFilterDialog.getPathToRoot(cell, str);
        }
        return String.format('({0})', str.toString());
    }
}


PPSMA.Top10FilterDialog = function PPSMA_Top10FilterDialog(callBack, filterElement, currentFilter, currencySeparator, decimalSeparator) {ULS01W:;
    this.$$d__validateTopFilterInput$p$2 = Function.createDelegate(this, this._validateTopFilterInput$p$2);
    this.$$d__topVarOptionChanged$p$2 = Function.createDelegate(this, this._topVarOptionChanged$p$2);
    PPSMA.Top10FilterDialog.initializeBase(this, [ callBack, filterElement, currentFilter, currencySeparator, decimalSeparator ]);
    this.set_width(580);
    if (this.get_showSecondValue()) {
        this.set_height(225);
    }
    PPSMA._dialogsUtil.decimalPoint = decimalSeparator;
    PPSMA._dialogsUtil.thousandSeparator = currencySeparator;
    this._currencySeparator$p$2 = currencySeparator;
    this._decimalSeparator$p$2 = decimalSeparator;
}
PPSMA.Top10FilterDialog.prototype = {
    _txtNumber$p$2: null,
    _cmbTopBottom$p$2: null,
    _cmbCountPercent$p$2: null,
    _currencySeparator$p$2: null,
    _decimalSeparator$p$2: null,
    
    isFilterInUse: function PPSMA_Top10FilterDialog$isFilterInUse() {ULS01W:;
        return !isNullOrUndefined(this.get_filter()) && !isNullOrEmpty(this.get_filter().Top10Filter);
    },
    
    getTitle: function PPSMA_Top10FilterDialog$getTitle() {ULS01W:;
        return String.format('{0} {1}', PPSMA.SR.OlapFilter_TopFilterHeader, this.getTitlePath());
    },
    
    setInitialFocus: function PPSMA_Top10FilterDialog$setInitialFocus() {ULS01W:;
        if (!isNullOrUndefined(this._cmbTopBottom$p$2)) {
            this._cmbTopBottom$p$2.focus();
        }
    },
    
    init: function PPSMA_Top10FilterDialog$init() {ULS01W:;
        this.set_isOkDisabled(this._isValidTopFilter$p$2());
    },
    
    collectValues: function PPSMA_Top10FilterDialog$collectValues() {ULS01W:;
        PPSMA.ScorecardFilterDialog.prototype.collectValues.call(this);
        this.get_filter().IsBottom = this._cmbTopBottom$p$2.selectedIndex === 1;
        this.get_filter().IsPercent = this._cmbCountPercent$p$2.selectedIndex === 1;
        this.get_filter().Top10Filter = PPSMA._dialogsUtil.getTrimmedInputValue(this._txtNumber$p$2);
    },
    
    addEvents: function PPSMA_Top10FilterDialog$addEvents() {ULS01W:;
        PPSMA.ScorecardFilterDialog.prototype.addEvents.call(this);
        $addHandler(this._cmbCountPercent$p$2, 'change', this.$$d__topVarOptionChanged$p$2);
        $addHandler(this._txtNumber$p$2, 'keyup', this.$$d__validateTopFilterInput$p$2);
        $addHandler(this._txtNumber$p$2, 'change', this.$$d__validateTopFilterInput$p$2);
        $addHandler(this._txtNumber$p$2, 'paste', this.$$d__validateTopFilterInput$p$2);
        $addHandler(this._txtNumber$p$2, 'cut', this.$$d__validateTopFilterInput$p$2);
    },
    
    createFilterSection: function PPSMA_Top10FilterDialog$createFilterSection() {ULS01W:;
        var filterContents = this.createFilterContents(PPSMA.SR.OlapFilter_TopFilterText);
        var inputFields = this._createTopFilterInputFieldsDiv$p$2();
        filterContents.appendChild(inputFields);
        if (this.get_showSecondValue()) {
            PPSMA._dialogsUtil.addLabel(filterContents, PPSMA.SR.OlapFilter_ByLabel, null, false, PPSMA.Top10FilterDialog.classFilterLabel);
            if (!this.get_isFirstValueNumeric() && this.get_isSecondValueNumeric()) {
                this.get_filter().IsSecondValue = true;
            }
            var targetVarianceDiv = document.createElement('div');
            targetVarianceDiv.className = PPSMA.Top10FilterDialog.classFilterTargetVarianceDropdownDiv;
            filterContents.appendChild(targetVarianceDiv);
            this.addTargetElementOptions(targetVarianceDiv, PPSMA.Top10FilterDialog.classFilterTopVarDropdown);
            this.get_cmbTargetElement().disabled = !this.get_isFirstValueNumeric() || !this.get_isSecondValueNumeric();
        }
        filterContents.appendChild(this.createNumericValidationWarning(PPSMA.Top10FilterDialog.idScorecardTopFilterDialog));
        return filterContents;
    },
    
    _createTopFilterInputFieldsDiv$p$2: function PPSMA_Top10FilterDialog$_createTopFilterInputFieldsDiv$p$2() {ULS01W:;
        var inputFields = document.createElement('div');
        inputFields.id = this.get_id() + PPSMA.FilterDialog.idTopFilterInputDiv;
        inputFields.className = PPSMA.Top10FilterDialog.classFilterInputDiv;
        this._addTopBottomOptions$p$2(inputFields);
        this._addNumber$p$2(inputFields);
        this._addCountPercentOptions$p$2(inputFields);
        return inputFields;
    },
    
    _addTopBottomOptions$p$2: function PPSMA_Top10FilterDialog$_addTopBottomOptions$p$2(container) {ULS01W:;
        var filterTopOptionsDiv = document.createElement('div');
        filterTopOptionsDiv.className = PPSMA.Top10FilterDialog.classFilterTopOptionsDropdownSizer;
        var filterTopOptions = document.createElement('select');
        filterTopOptions.id = this.get_id() + PPSMA.FilterDialog.idTopFilterOptionsDropdown;
        filterTopOptions.className = PPSMA.Top10FilterDialog.classFilterTopOptionsDropdown;
        filterTopOptions.name = PPSMA.FilterDialog.idTopFilterOptionsDropdown;
        var isBottom = this.isFilterInUse() && this.get_filter().IsBottom;
        var optionTop = PPSMA._dialogsUtil.createFilterOption('0', PPSMA.SR.OlapFilter_Top, !isBottom);
        filterTopOptions.appendChild(optionTop);
        var optionBot = PPSMA._dialogsUtil.createFilterOption('1', PPSMA.SR.OlapFilter_Bottom, isBottom);
        filterTopOptions.appendChild(optionBot);
        filterTopOptionsDiv.appendChild(filterTopOptions);
        container.appendChild(filterTopOptionsDiv);
        this._cmbTopBottom$p$2 = filterTopOptions;
    },
    
    _addCountPercentOptions$p$2: function PPSMA_Top10FilterDialog$_addCountPercentOptions$p$2(container) {ULS01W:;
        var filterTopVarDiv = document.createElement('div');
        filterTopVarDiv.className = PPSMA.Top10FilterDialog.classFilterTopVarDropdownDiv;
        var filterTopVar = document.createElement('select');
        filterTopVar.id = this.get_id() + PPSMA.FilterDialog.idTopVarOptionsDropdown;
        filterTopVar.className = PPSMA.Top10FilterDialog.classFilterTopVarDropdown;
        filterTopVar.setAttribute('name', PPSMA.FilterDialog.idTopVarOptionsDropdown);
        var isPercentage = this.isFilterInUse() && this.get_filter().IsPercent;
        var optionItems = PPSMA._dialogsUtil.createFilterOption('0', PPSMA.SR.OlapFilter_Count, !isPercentage);
        filterTopVar.appendChild(optionItems);
        var optionPercent = PPSMA._dialogsUtil.createFilterOption('1', PPSMA.SR.OlapFilter_Percent, isPercentage);
        filterTopVar.appendChild(optionPercent);
        filterTopVarDiv.appendChild(filterTopVar);
        container.appendChild(filterTopVarDiv);
        this._cmbCountPercent$p$2 = filterTopVar;
    },
    
    _addNumber$p$2: function PPSMA_Top10FilterDialog$_addNumber$p$2(container) {ULS01W:;
        var number = '10';
        if (this.isFilterInUse()) {
            number = this.get_filter().Top10Filter;
        }
        var filterInputDiv = document.createElement('div');
        filterInputDiv.className = PPSMA.Top10FilterDialog.classTopFilterInputDiv;
        var filterInput = document.createElement('input');
        filterInput.id = this.get_id() + PPSMA.FilterDialog.idTopFilterInput;
        filterInput.className = PPSMA.Top10FilterDialog.classTopFilterInput;
        filterInput.type = 'text';
        filterInput.setAttribute('maxlength', 100);
        filterInput.value = number;
        PPSMA._dialogsUtil.formatValueInput(filterInput, true, false);
        filterInputDiv.appendChild(filterInput);
        container.appendChild(filterInputDiv);
        this._txtNumber$p$2 = filterInput;
    },
    
    clear: function PPSMA_Top10FilterDialog$clear(e) {ULS01W:;
        if (this.isFilterInUse()) {
            this.get_filter().Top10Filter = null;
        }
        this._cmbCountPercent$p$2.selectedIndex = 0;
        this._cmbTopBottom$p$2.selectedIndex = 0;
        PPSMA._dialogsUtil.setInputValue(this._txtNumber$p$2, '10');
        PPSMA.ScorecardFilterDialog.prototype.clear.call(this, e);
    },
    
    apply: function PPSMA_Top10FilterDialog$apply(e) {ULS01W:;
        var valid = this._isValidTopFilter$p$2();
        if (valid) {
            PPSMA.ScorecardFilterDialog.prototype.apply.call(this, e);
        }
        else {
            this.setApplyEnabled(false);
        }
    },
    
    _topVarOptionChanged$p$2: function PPSMA_Top10FilterDialog$_topVarOptionChanged$p$2(e) {ULS01W:;
        this._validateTopFilterInput$p$2(e);
    },
    
    _validateTopFilterInput$p$2: function PPSMA_Top10FilterDialog$_validateTopFilterInput$p$2(e) {ULS01W:;
        var valid = this._isValidTopFilter$p$2();
        this.setApplyEnabled(valid);
    },
    
    _isValidTopFilter$p$2: function PPSMA_Top10FilterDialog$_isValidTopFilter$p$2() {ULS01W:;
        var countPercentOption = PPSMA._dialogsUtil.getSelectedValue(this._cmbCountPercent$p$2);
        var limitFrom = 0;
        var limitTo = 0;
        var percentType = false;
        var defaultErrorMsg = '';
        switch (countPercentOption) {
            case 0:
                limitFrom = 1;
                limitTo = 2000000000;
                defaultErrorMsg = String.format(PPSMA.SR.OlapFilter_NumberOnly);
                break;
            case 1:
                limitTo = 100;
                percentType = true;
                defaultErrorMsg = String.format(PPSMA.SR.OlapFilter_NumberLimit, limitFrom.toString(), limitTo.toString());
                break;
        }
        return this.numericValidation(this._txtNumber$p$2, 1, false, percentType, limitFrom, limitTo, percentType, defaultErrorMsg);
    }
}


PPSMA.ValuesFilterDialog = function PPSMA_ValuesFilterDialog(callBack, filterElement, currentFilter, currencySeparator, decimalSeparator) {ULS01W:;
    this.$$d__ensureCorrectSelectOptions$p$2 = Function.createDelegate(this, this._ensureCorrectSelectOptions$p$2);
    this.$$d__enableDisableSecondFilter$p$2 = Function.createDelegate(this, this._enableDisableSecondFilter$p$2);
    this.$$d__validateValueFilterInput2$p$2 = Function.createDelegate(this, this._validateValueFilterInput2$p$2);
    this.$$d__formatValueFilterInput2$p$2 = Function.createDelegate(this, this._formatValueFilterInput2$p$2);
    this.$$d__validateValueFilterInput1$p$2 = Function.createDelegate(this, this._validateValueFilterInput1$p$2);
    this.$$d__formatValueFilterInput1$p$2 = Function.createDelegate(this, this._formatValueFilterInput1$p$2);
    this._andOrValue$p$2 = PPSMA.ValuesFilterDialog._anD_OR_BLANK$p;
    this._value$p$2 = [ '', '' ];
    this._cmbOperand$p$2 = new Array(2);
    this._txtValue$p$2 = new Array(2);
    PPSMA.ValuesFilterDialog.initializeBase(this, [ callBack, filterElement, currentFilter, currencySeparator, decimalSeparator ]);
    this.set_width(PPSMA.ValuesFilterDialog._dialogWidth$p);
    if (isNullOrUndefined(this._operand$p$2)) {
        if (this.get_isCurrentValueNumeric()) {
            this._operand$p$2 = [ PPSMA.ValuesFilterDialog._valuE_GREATER_THAN$p, PPSMA.ValuesFilterDialog._valuE_GREATER_THAN$p ];
        }
        else {
            this._operand$p$2 = [ PPSMA.ValuesFilterDialog._stR_CONTAIN$p, PPSMA.ValuesFilterDialog._stR_CONTAIN$p ];
        }
    }
    if (filterElement.get_headerType() === PPSMA.Scorecard.targetHeaderType) {
        this.set_height(PPSMA.ValuesFilterDialog._dialogHeightForTarget$p);
        this.kpiType = PPSMA.ValuesFilterDialog.ColumnTypes.kpiTarget;
    }
    else {
        this.set_height(PPSMA.ValuesFilterDialog._dialogHeight$p);
        this.kpiType = 0;
    }
    PPSMA._dialogsUtil.decimalPoint = decimalSeparator;
    PPSMA._dialogsUtil.thousandSeparator = currencySeparator;
    this._currencySeparator$p$2 = currencySeparator;
    this._decimalSeparator$p$2 = decimalSeparator;
}
PPSMA.ValuesFilterDialog.prototype = {
    _operand$p$2: null,
    _cmbAndOr$p$2: null,
    _byLabel$p$2: null,
    kpiType: 0,
    _currencySeparator$p$2: null,
    _decimalSeparator$p$2: null,
    
    createFilterSection: function PPSMA_ValuesFilterDialog$createFilterSection() {ULS01W:;
        var label = (this.get_isCurrentValueNumeric()) ? PPSMA.SR.ScorecardFilter_NumericFilterText : PPSMA.SR.ScorecardFilter_StringFilterText;
        var filterContents = this.createFilterContents(label);
        var inputFields = this._createValueFilterInputFieldsDiv$p$2();
        filterContents.appendChild(inputFields);
        return filterContents;
    },
    
    collectValues: function PPSMA_ValuesFilterDialog$collectValues() {ULS01W:;
        PPSMA.ScorecardFilterDialog.prototype.collectValues.call(this);
        this._andOrValue$p$2 = PPSMA._dialogsUtil.getInputValue(this._cmbAndOr$p$2.options[PPSMA._dialogsUtil.getSelectedValue(this._cmbAndOr$p$2)]);
        var ops = (this.get_isCurrentValueNumeric()) ? PPSMA.ValuesFilterDialog._OPERANDS$p : PPSMA.ValuesFilterDialog._stR_OPERANDS$p;
        for (var i = 0; i < this._txtValue$p$2.length; i++) {
            var valueStr = (this.get_isCurrentValueNumeric()) ? PPSMA._dialogsUtil.getTrimmedInputValue(this._txtValue$p$2[i]) : PPSMA._dialogsUtil.getInputValue(this._txtValue$p$2[i]);
            this._value$p$2[i] = (ops[i] === PPSMA.ValuesFilterDialog._valuE_EQUALS$p || ops[i] === PPSMA.ValuesFilterDialog._valuE_NOT_EQUAL$p) ? valueStr : this._clearThousandSeparator$p$2(valueStr);
            this._operand$p$2[i] = ops[PPSMA._dialogsUtil.getSelectedValue(this._cmbOperand$p$2[i])];
        }
        this.get_filter().ValueFilter = this._value$p$2;
        this.get_filter().ValueFilterOperator = this._operand$p$2;
        this.get_filter().AndOrValue = this._andOrValue$p$2;
        this.get_filter().ColumnType = (this.get_isCurrentValueNumeric()) ? 'System.Decimal' : 'System.String';
    },
    
    isFilterInUse: function PPSMA_ValuesFilterDialog$isFilterInUse() {ULS01W:;
        return !isNullOrUndefined(this.get_filter()) && !isNullOrEmpty(this.get_filter().ValueFilter) && !isNullOrEmpty(this.get_filter().ValueFilter[0]);
    },
    
    getTitle: function PPSMA_ValuesFilterDialog$getTitle() {ULS01W:;
        return String.format('{0} {1}', PPSMA.SR.OlapFilter_ValueFilterHeader, this.getTitlePath());
    },
    
    setInitialFocus: function PPSMA_ValuesFilterDialog$setInitialFocus() {ULS01W:;
        if (!isNullOrUndefined(this._cmbOperand$p$2[0])) {
            this._cmbOperand$p$2[0].focus();
        }
        Sys.UI.DomElement.addCssClass(this.get_cmbTargetElement(), PPSMA.ValuesFilterDialog._classValueFilterTargetVarianceDropDown$p);
    },
    
    init: function PPSMA_ValuesFilterDialog$init() {ULS01W:;
        if (this.isFilterInUse()) {
            this._value$p$2 = this.get_filter().ValueFilter;
            this._operand$p$2 = this.get_filter().ValueFilterOperator;
            this._andOrValue$p$2 = this.get_filter().AndOrValue;
            this.set_isOkDisabled(isNullOrEmpty(this._value$p$2[0]));
        }
        else {
            this.set_isOkDisabled(true);
        }
    },
    
    addEvents: function PPSMA_ValuesFilterDialog$addEvents() {ULS01W:;
        PPSMA.ScorecardFilterDialog.prototype.addEvents.call(this);
        $addHandler(this._txtValue$p$2[0], 'change', this.$$d__formatValueFilterInput1$p$2);
        $addHandler(this._txtValue$p$2[0], 'keyup', this.$$d__validateValueFilterInput1$p$2);
        $addHandler(this._txtValue$p$2[0], 'cut', this.$$d__validateValueFilterInput1$p$2);
        $addHandler(this._txtValue$p$2[0], 'paste', this.$$d__validateValueFilterInput1$p$2);
        $addHandler(this._txtValue$p$2[1], 'change', this.$$d__formatValueFilterInput2$p$2);
        $addHandler(this._txtValue$p$2[1], 'keyup', this.$$d__validateValueFilterInput2$p$2);
        $addHandler(this._txtValue$p$2[1], 'cut', this.$$d__validateValueFilterInput2$p$2);
        $addHandler(this._txtValue$p$2[1], 'paste', this.$$d__validateValueFilterInput2$p$2);
        $addHandler(this._cmbAndOr$p$2, 'change', this.$$d__enableDisableSecondFilter$p$2);
        $addHandler(this._cmbOperand$p$2[0], 'change', this.$$d__validateValueFilterInput1$p$2);
        $addHandler(this._cmbOperand$p$2[1], 'change', this.$$d__validateValueFilterInput2$p$2);
        if (!isNullOrUndefined(this.get_cmbTargetElement())) {
            $addHandler(this.get_cmbTargetElement(), 'change', this.$$d__ensureCorrectSelectOptions$p$2);
        }
    },
    
    clear: function PPSMA_ValuesFilterDialog$clear(e) {ULS01W:;
        if (this.isFilterInUse()) {
            this.get_filter().ValueFilter = null;
        }
        PPSMA.ScorecardFilterDialog.prototype.clear.call(this, e);
    },
    
    apply: function PPSMA_ValuesFilterDialog$apply(e) {ULS01W:;
        var valid = this._validateInputs$p$2(0, 1, true);
        if (valid) {
            PPSMA.ScorecardFilterDialog.prototype.apply.call(this, e);
        }
    },
    
    _enableDisableSecondFilter$p$2: function PPSMA_ValuesFilterDialog$_enableDisableSecondFilter$p$2(e) {ULS01W:;
        var i = PPSMA._dialogsUtil.getSelectedValue(this._cmbAndOr$p$2);
        var disabled = !i;
        this._cmbOperand$p$2[1].disabled = disabled;
        this._txtValue$p$2[1].disabled = disabled;
        if (disabled) {
            this._validateValueFilterInput1$p$2(e);
        }
        else {
            this._validateValueFilterInput2$p$2(e);
        }
    },
    
    _ensureCorrectSelectOptions$p$2: function PPSMA_ValuesFilterDialog$_ensureCorrectSelectOptions$p$2(e) {ULS01W:;
        var needsUpdate = this.get_isSecondValueNumeric() !== this.get_isFirstValueNumeric();
        if (needsUpdate) {
            var length = this._cmbOperand$p$2[0].options.length;
            for (var i = 0; i < length; i++) {
                this._cmbOperand$p$2[0].remove(0);
                this._cmbOperand$p$2[1].remove(0);
            }
            if (this.get_isCurrentValueNumeric()) {
                this._addNumericFilterOptions$p$2(this._cmbOperand$p$2[0], PPSMA.ValuesFilterDialog._valuE_GREATER_THAN$p);
                this._addNumericFilterOptions$p$2(this._cmbOperand$p$2[1], PPSMA.ValuesFilterDialog._valuE_GREATER_THAN$p);
            }
            else {
                this._addStringFilterOptions$p$2(this._cmbOperand$p$2[0], PPSMA.ValuesFilterDialog._stR_CONTAIN$p);
                this._addStringFilterOptions$p$2(this._cmbOperand$p$2[1], PPSMA.ValuesFilterDialog._stR_CONTAIN$p);
            }
            this._validateValueFilterInput1$p$2(e);
            if (!this._txtValue$p$2[1].disabled) {
                this._validateValueFilterInput2$p$2(e);
            }
        }
    },
    
    _formatValueFilterInput1$p$2: function PPSMA_ValuesFilterDialog$_formatValueFilterInput1$p$2(e) {ULS01W:;
        if (this.get_isCurrentValueNumeric() && !this._isNumberTreatedAsString$p$2(this._cmbOperand$p$2[0])) {
            PPSMA._dialogsUtil.formatValueInput(this._txtValue$p$2[0], false, false);
        }
        this._validateValueFilterInput1$p$2(e);
    },
    
    _formatValueFilterInput2$p$2: function PPSMA_ValuesFilterDialog$_formatValueFilterInput2$p$2(e) {ULS01W:;
        if (this.get_isCurrentValueNumeric() && !this._isNumberTreatedAsString$p$2(this._cmbOperand$p$2[1])) {
            PPSMA._dialogsUtil.formatValueInput(this._txtValue$p$2[1], false, false);
        }
        this._validateValueFilterInput2$p$2(e);
    },
    
    _validateValueFilterInput1$p$2: function PPSMA_ValuesFilterDialog$_validateValueFilterInput1$p$2(e) {ULS01W:;
        this._validateInputs$p$2(0, 1, false);
    },
    
    _validateValueFilterInput2$p$2: function PPSMA_ValuesFilterDialog$_validateValueFilterInput2$p$2(e) {ULS01W:;
        this._validateInputs$p$2(1, 0, false);
    },
    
    _createValueFilterInputFieldsDiv$p$2: function PPSMA_ValuesFilterDialog$_createValueFilterInputFieldsDiv$p$2() {ULS01W:;
        var firstLine = document.createElement('div');
        Sys.UI.DomElement.addCssClass(firstLine, PPSMA.ValuesFilterDialog._classValueFilterLine1$p);
        this._addSpacerForAndOrOptions$p$2(firstLine);
        var inputElementSizer1 = document.createElement('div');
        if (!this.get_showSecondValue()) {
            Sys.UI.DomElement.addCssClass(inputElementSizer1, PPSMA.ValuesFilterDialog._classValueFilterInputSizer$p);
        }
        else {
            if (this.kpiType !== PPSMA.ValuesFilterDialog.ColumnTypes.kpiTarget) {
                Sys.UI.DomElement.addCssClass(inputElementSizer1, PPSMA.ValuesFilterDialog._classValueFilterInputAlternateSizer$p);
            }
            else {
                Sys.UI.DomElement.addCssClass(inputElementSizer1, PPSMA.ValuesFilterDialog._classValueFilterInputAlternateTargetSizer$p);
            }
        }
        this._cmbOperand$p$2[0] = this._addValueFilterOptions$p$2(firstLine, this._operand$p$2[0]);
        this._cmbOperand$p$2[0].id = this._cmbOperand$p$2[0].id + '_1';
        if (!this.get_showSecondValue()) {
            firstLine.appendChild(inputElementSizer1);
        }
        this._txtValue$p$2[0] = this._addInput$p$2(inputElementSizer1, this._value$p$2[0], this.get_id() + PPSMA.FilterDialog.idValueFilterInput1, this.get_isFirstValueNumeric(), this._cmbOperand$p$2[0]);
        var secondLine = document.createElement('div');
        var inputElementSizer2 = document.createElement('div');
        Sys.UI.DomElement.addCssClass(inputElementSizer2, PPSMA.ValuesFilterDialog._classValueFilterInputSizer$p);
        Sys.UI.DomElement.addCssClass(secondLine, PPSMA.ValuesFilterDialog._classValueFilterLine2$p);
        this._addAndOrOptions$p$2(secondLine);
        var i = PPSMA._dialogsUtil.getSelectedValue(this._cmbAndOr$p$2);
        var disabled = !i;
        this._cmbOperand$p$2[1] = this._addValueFilterOptions$p$2(secondLine, this._operand$p$2[1]);
        this._cmbOperand$p$2[1].id = this._cmbOperand$p$2[1].id + '_2';
        this._cmbOperand$p$2[1].disabled = disabled;
        secondLine.appendChild(inputElementSizer2);
        this._txtValue$p$2[1] = this._addInput$p$2(inputElementSizer2, this._value$p$2[1], this.get_id() + PPSMA.FilterDialog.idValueFilterInput2, this.get_isSecondValueNumeric(), this._cmbOperand$p$2[1]);
        this._txtValue$p$2[1].disabled = disabled;
        if (this.get_showSecondValue()) {
            Sys.UI.DomElement.addCssClass(this._txtValue$p$2[0], PPSMA.ValuesFilterDialog._classvalueFilterInputAlternateMargin$p);
            if (this.kpiType !== PPSMA.ValuesFilterDialog.ColumnTypes.kpiTarget) {
                this._byLabel$p$2 = PPSMA._dialogsUtil.addLabel(firstLine, PPSMA.SR.OlapFilter_ByLabel, null, false, PPSMA.ValuesFilterDialog._classFilterByLabelCentered$p);
                this.addTargetElementOptions(firstLine, PPSMA.ValuesFilterDialog._classFilterTargetVarianceCenteredDropdown$p);
            }
            firstLine.appendChild(inputElementSizer1);
        }
        var inputFields = document.createElement('div');
        inputFields.id = this.get_id() + PPSMA.FilterDialog.idValueFilterInputDiv;
        inputFields.className = PPSMA.ValuesFilterDialog._classFilterInputDiv$p;
        inputFields.appendChild(firstLine);
        inputFields.appendChild(secondLine);
        if (this.kpiType === PPSMA.ValuesFilterDialog.ColumnTypes.kpiTarget) {
            var thirdLine = document.createElement('div');
            this._byLabel$p$2 = PPSMA._dialogsUtil.addLabel(thirdLine, PPSMA.SR.OlapFilter_ByLabel, null, false, PPSMA.ValuesFilterDialog._classFilterByLabelCentered$p);
            this.addTargetElementOptions(thirdLine, PPSMA.ValuesFilterDialog._classFilterTargetVarianceCenteredDropdown$p);
            Sys.UI.DomElement.addCssClass(thirdLine, PPSMA.ValuesFilterDialog._classValueFilterLine3$p);
            inputFields.appendChild(thirdLine);
        }
        inputFields.appendChild(this.createNumericValidationWarning(PPSMA.ValuesFilterDialog.idScorecardValueFilterDialog));
        return inputFields;
    },
    
    _addValueFilterOptions$p$2: function PPSMA_ValuesFilterDialog$_addValueFilterOptions$p$2(container, currentSelection) {ULS01W:;
        var options = document.createElement('select');
        options.id = this.get_id() + PPSMA.FilterDialog.idValueFilterOptionsDropdown;
        options.className = PPSMA.ValuesFilterDialog._classFilterValueOptionsDropdown$p;
        if ((this.get_filter().IsSecondValue && this.get_isSecondValueNumeric()) || (!this.get_filter().IsSecondValue && this.get_isFirstValueNumeric())) {
            this._addNumericFilterOptions$p$2(options, currentSelection);
        }
        else {
            this._addStringFilterOptions$p$2(options, currentSelection);
        }
        container.appendChild(options);
        return options;
    },
    
    _addNumericFilterOptions$p$2: function PPSMA_ValuesFilterDialog$_addNumericFilterOptions$p$2(options, currentSelection) {ULS01W:;
        while (options.size > 0) {
            options.remove(0);
        }
        options.appendChild(PPSMA._dialogsUtil.createFilterOption(PPSMA.ValuesFilterDialog._valuE_EQUALS$p, PPSMA.SR.ScorecardFilter_NumericEqual, currentSelection === PPSMA.ValuesFilterDialog._valuE_EQUALS$p));
        options.appendChild(PPSMA._dialogsUtil.createFilterOption(PPSMA.ValuesFilterDialog._valuE_NOT_EQUAL$p, PPSMA.SR.ScorecardFilter_NumericNotEqual, currentSelection === PPSMA.ValuesFilterDialog._valuE_NOT_EQUAL$p));
        options.appendChild(PPSMA._dialogsUtil.createFilterOption(PPSMA.ValuesFilterDialog._valuE_GREATER_THAN$p, PPSMA.SR.OlapFilter_GreaterThan, currentSelection === PPSMA.ValuesFilterDialog._valuE_GREATER_THAN$p));
        options.appendChild(PPSMA._dialogsUtil.createFilterOption(PPSMA.ValuesFilterDialog._valuE_LESS_THAN$p, PPSMA.SR.OlapFilter_LessThan, currentSelection === PPSMA.ValuesFilterDialog._valuE_LESS_THAN$p));
    },
    
    _addStringFilterOptions$p$2: function PPSMA_ValuesFilterDialog$_addStringFilterOptions$p$2(options, currentSelection) {ULS01W:;
        while (options.size > 0) {
            options.remove(0);
        }
        options.appendChild(PPSMA._dialogsUtil.createFilterOption(PPSMA.ValuesFilterDialog._stR_EQUAL$p, PPSMA.SR.ScorecardFilter_Equal, currentSelection === PPSMA.ValuesFilterDialog._stR_EQUAL$p));
        options.appendChild(PPSMA._dialogsUtil.createFilterOption(PPSMA.ValuesFilterDialog._stR_CONTAIN$p, PPSMA.SR.ScorecardFilter_Contain, currentSelection === PPSMA.ValuesFilterDialog._stR_CONTAIN$p));
        options.appendChild(PPSMA._dialogsUtil.createFilterOption(PPSMA.ValuesFilterDialog._stR_STARTS_WITH$p, PPSMA.SR.ScorecardFilter_StartsWith, currentSelection === PPSMA.ValuesFilterDialog._stR_STARTS_WITH$p));
        options.appendChild(PPSMA._dialogsUtil.createFilterOption(PPSMA.ValuesFilterDialog._stR_ENDS_WITH$p, PPSMA.SR.ScorecardFilter_EndsWith, currentSelection === PPSMA.ValuesFilterDialog._stR_ENDS_WITH$p));
    },
    
    _addAndOrOptions$p$2: function PPSMA_ValuesFilterDialog$_addAndOrOptions$p$2(container) {ULS01W:;
        var options = document.createElement('select');
        options.id = this.get_id() + PPSMA.FilterDialog.idValueFilterOptionsDropdown;
        options.className = PPSMA.ValuesFilterDialog._classFilterValueAndOrDropdown$p;
        var optionBlank = PPSMA._dialogsUtil.createFilterOption(PPSMA.ValuesFilterDialog._anD_OR_BLANK$p, '', this._andOrValue$p$2 === PPSMA.ValuesFilterDialog._anD_OR_BLANK$p);
        options.appendChild(optionBlank);
        var optionAnd = PPSMA._dialogsUtil.createFilterOption(PPSMA.ValuesFilterDialog._AND$p, PPSMA.SR.ScorecardFilter_And, this._andOrValue$p$2 === PPSMA.ValuesFilterDialog._AND$p);
        options.appendChild(optionAnd);
        var optionOr = PPSMA._dialogsUtil.createFilterOption(PPSMA.ValuesFilterDialog._OR$p, PPSMA.SR.ScorecardFilter_Or, this._andOrValue$p$2 === PPSMA.ValuesFilterDialog._OR$p);
        options.appendChild(optionOr);
        container.appendChild(options);
        this._cmbAndOr$p$2 = options;
    },
    
    _addSpacerForAndOrOptions$p$2: function PPSMA_ValuesFilterDialog$_addSpacerForAndOrOptions$p$2(container) {ULS01W:;
        var options = document.createElement('select');
        options.id = this.get_id() + PPSMA.FilterDialog.idValueFilterOptionsDropdown;
        options.className = PPSMA.ValuesFilterDialog._classFilterValueAndOrDropdown$p;
        options.style.visibility = 'hidden';
        container.appendChild(options);
    },
    
    _addInput$p$2: function PPSMA_ValuesFilterDialog$_addInput$p$2(filterDialog, value, id, isNumeric, operand) {ULS01W:;
        var filterInput = document.createElement('input');
        filterInput.id = id;
        Sys.UI.DomElement.addCssClass(filterInput, PPSMA.CssClasses.scorecardValueFilterInput);
        Sys.UI.DomElement.addCssClass(filterInput, PPSMA.CssClasses.boxSizingBorderBox);
        filterInput.type = 'text';
        filterInput.setAttribute('maxlength', 100);
        PPSMA._dialogsUtil.setInputValue(filterInput, value);
        if (isNumeric && !this._isNumberTreatedAsString$p$2(operand)) {
            PPSMA._dialogsUtil.formatValueInput(filterInput, false, true);
        }
        filterDialog.appendChild(filterInput);
        return filterInput;
    },
    
    _validateInputs$p$2: function PPSMA_ValuesFilterDialog$_validateInputs$p$2(primaryIndex, secondaryIndex, changeFocus) {ULS01W:;
        var valid;
        if (this.get_isCurrentValueNumeric()) {
            valid = this._validateNumericFilter$p$2(primaryIndex, secondaryIndex, changeFocus);
        }
        else {
            valid = this._validateStringFilter$p$2(this._txtValue$p$2[primaryIndex], this._txtValue$p$2[secondaryIndex], changeFocus);
        }
        this.setApplyEnabled(valid);
        return valid;
    },
    
    _clearThousandSeparator$p$2: function PPSMA_ValuesFilterDialog$_clearThousandSeparator$p$2(val) {ULS01W:;
        if (!isNullOrUndefined(val)) {
            var clear = new RegExp('[' + this._currencySeparator$p$2 + ']+');
            while (val.indexOf(this._currencySeparator$p$2) > 0) {
                val = val.replace(clear, '');
            }
        }
        return val;
    },
    
    _validateNumericFilter$p$2: function PPSMA_ValuesFilterDialog$_validateNumericFilter$p$2(primaryIndex, secondaryIndex, changeFocus) {ULS01W:;
        var txtPrimary = this._txtValue$p$2[primaryIndex];
        var txtSecondary = this._txtValue$p$2[secondaryIndex];
        var defaultErrorMsg = String.format(PPSMA.SR.OlapFilter_Number, '0');
        var valid = false;
        if (this._isNumberTreatedAsString$p$2(this._cmbOperand$p$2[primaryIndex])) {
            var inputValue = PPSMA._dialogsUtil.getInputValue(txtPrimary);
            valid = !!inputValue && !isNullOrEmpty(inputValue.trim());
        }
        else {
            valid = this.numericValidation(txtPrimary, primaryIndex + 1, true, true, PPSMA.ValuesFilterDialog._miN_DECIMAL$p, PPSMA.ValuesFilterDialog._maX_DECIMAL$p, false, defaultErrorMsg);
        }
        if (valid) {
            if (!isNullOrUndefined(txtSecondary) && !txtSecondary.disabled) {
                var inputValue = PPSMA._dialogsUtil.getTrimmedInputValue(txtSecondary);
                if (!isNullOrEmpty(inputValue)) {
                    if (this._isNumberTreatedAsString$p$2(this._cmbOperand$p$2[secondaryIndex])) {
                        valid = !!inputValue && !isNullOrEmpty(inputValue.trim());
                    }
                    else {
                        var errorCode = PPSMA._dialogsUtil.isValidNumber(inputValue, true, true);
                        if (errorCode > 0) {
                            valid = false;
                        }
                    }
                    if (!valid && changeFocus) {
                        txtSecondary.focus();
                    }
                }
                else {
                    valid = false;
                }
            }
        }
        else {
            if (changeFocus) {
                txtPrimary.focus();
            }
        }
        return valid;
    },
    
    _isNumberTreatedAsString$p$2: function PPSMA_ValuesFilterDialog$_isNumberTreatedAsString$p$2(element) {ULS01W:;
        return !isNullOrUndefined(element) && (element.selectedIndex === Array.indexOf(PPSMA.ValuesFilterDialog._OPERANDS$p, PPSMA.ValuesFilterDialog._valuE_EQUALS$p) || element.selectedIndex === Array.indexOf(PPSMA.ValuesFilterDialog._OPERANDS$p, PPSMA.ValuesFilterDialog._valuE_NOT_EQUAL$p));
    },
    
    _validateStringFilter$p$2: function PPSMA_ValuesFilterDialog$_validateStringFilter$p$2(txtPrimary, txtSecondary, changeFocus) {ULS01W:;
        var inputValue = PPSMA._dialogsUtil.getInputValue(txtPrimary);
        var valid = !!inputValue && !isNullOrEmpty(inputValue.trim());
        if (valid) {
            if (!isNullOrUndefined(txtSecondary) && !txtSecondary.disabled) {
                inputValue = PPSMA._dialogsUtil.getInputValue(txtSecondary);
                valid = !!inputValue && !isNullOrEmpty(inputValue.trim());
                if (!valid && changeFocus) {
                    txtSecondary.focus();
                }
            }
        }
        else {
            if (changeFocus) {
                txtPrimary.focus();
            }
        }
        return valid;
    }
}


PPSMA.ValuesFilterDialog.ColumnTypes = function() {}
PPSMA.ValuesFilterDialog.ColumnTypes.prototype = {
    kpiActual: 0, 
    kpiTarget: 1
}
PPSMA.ValuesFilterDialog.ColumnTypes.registerEnum('PPSMA.ValuesFilterDialog.ColumnTypes', false);


PPSMA.CssRule.registerClass('PPSMA.CssRule');
PPSMA.ScorecardAjaxRenderResult.registerClass('PPSMA.ScorecardAjaxRenderResult');
PPSMA.ScorecardAjaxCommentRequest.registerClass('PPSMA.ScorecardAjaxCommentRequest');
PPSMA.ScorecardAjaxCommentResult.registerClass('PPSMA.ScorecardAjaxCommentResult');
PPSMA.ScorecardCommentRecord.registerClass('PPSMA.ScorecardCommentRecord');
PPSMA.ExpandDrillTransform.registerClass('PPSMA.ExpandDrillTransform');
PPSMA.CellDisplayRecord.registerClass('PPSMA.CellDisplayRecord');
PPSMA.SortFilter.registerClass('PPSMA.SortFilter');
PPSMA.StatusFilter.registerClass('PPSMA.StatusFilter');
PPSMA.CssClasses.registerClass('PPSMA.CssClasses');
PPSMA._cssEx.registerClass('PPSMA._cssEx');
PPSMA._css.registerClass('PPSMA._css');
PPSMA._scorecardConstants.registerClass('PPSMA._scorecardConstants');
PPSMA.Scorecard.registerClass('PPSMA.Scorecard');
PPSMA.ScorecardElement.registerClass('PPSMA.ScorecardElement');
PPSMA.ScorecardFilter.registerClass('PPSMA.ScorecardFilter', PPSMA.ScorecardElement);
PPSMA.ScorecardRow.registerClass('PPSMA.ScorecardRow', PPSMA.ScorecardElement);
PPSMA.ScorecardDataRow.registerClass('PPSMA.ScorecardDataRow', PPSMA.ScorecardRow);
PPSMA.ScorecardCell.registerClass('PPSMA.ScorecardCell', PPSMA.ScorecardElement);
PPSMA.ScorecardHeaderCell.registerClass('PPSMA.ScorecardHeaderCell', PPSMA.ScorecardCell);
PPSMA.ScorecardDataCell.registerClass('PPSMA.ScorecardDataCell', PPSMA.ScorecardCell);
PPSMA.TooltipCell.registerClass('PPSMA.TooltipCell', PPSMA.ScorecardElement);
PPSMA.ScorecardToolbarCell.registerClass('PPSMA.ScorecardToolbarCell', PPSMA.ScorecardElement);
PPSMA.ScorecardLink.registerClass('PPSMA.ScorecardLink', PPSMA.ScorecardElement);
PPSMA.PlusMinusImage.registerClass('PPSMA.PlusMinusImage', PPSMA.ScorecardElement);
PPSMA.ScorecardAjaxRenderRequest.registerClass('PPSMA.ScorecardAjaxRenderRequest');
PPSMA.ScorecardContextMenuHandler.registerClass('PPSMA.ScorecardContextMenuHandler');
PPSMA._scorecardExpandDrillHandler.registerClass('PPSMA._scorecardExpandDrillHandler');
PPSMA.ScorecardComments.registerClass('PPSMA.ScorecardComments');
PPSMA.ScorecardControlManager.registerClass('PPSMA.ScorecardControlManager');
PPSMA._scorecardCellSelection.registerClass('PPSMA._scorecardCellSelection');
PPSMA.ScorecardExpandCollapseState.registerClass('PPSMA.ScorecardExpandCollapseState');
PPSMA._scorecardKeyboardNavigation.registerClass('PPSMA._scorecardKeyboardNavigation');
PPSMA.ScorecardMenu.registerClass('PPSMA.ScorecardMenu', null, PPSMA.OlapView);
PPSMA.ScorecardMenuItem.registerClass('PPSMA.ScorecardMenuItem');
PPSMA._scorecardSortAndFilterHandler.registerClass('PPSMA._scorecardSortAndFilterHandler');
PPSMA.ScorecardToolbarHandler.registerClass('PPSMA.ScorecardToolbarHandler');
PPSMA.StatusFilterMenu.registerClass('PPSMA.StatusFilterMenu');
PPSMA.ScorecardDialog.registerClass('PPSMA.ScorecardDialog');
PPSMA.CommentsDialog.registerClass('PPSMA.CommentsDialog', PPSMA.ScorecardDialog);
PPSMA._dialogsUtil.registerClass('PPSMA._dialogsUtil');
PPSMA.ScorecardFilterDialog.registerClass('PPSMA.ScorecardFilterDialog', PPSMA.ScorecardDialog);
PPSMA.Top10FilterDialog.registerClass('PPSMA.Top10FilterDialog', PPSMA.ScorecardFilterDialog);
PPSMA.ValuesFilterDialog.registerClass('PPSMA.ValuesFilterDialog', PPSMA.ScorecardFilterDialog);
PPSMA.CssClasses.scorecardFilterParentBorder = 'ms-biscfilter-parentborder';
PPSMA.CssClasses.scorecardDialogContents = 'ms-biscfilter-dialogcontents';
PPSMA.CssClasses.scorecardDialogFooter = 'ms-bisdialog-footer';
PPSMA.CssClasses.scorecardCommentsLabelDiv = 'ms-biscomment-labeldiv';
PPSMA.CssClasses.scorecardCommentsLabel = 'ms-biscomment-label';
PPSMA.CssClasses.scorecardCommentsAdd = 'ms-biscomment-add';
PPSMA.CssClasses.scorecardCommentBtn = 'ms-bicomment-scorecard-btn';
PPSMA.CssClasses.scorecardCommentsFormDivOpen = 'commentsformdivopen';
PPSMA.CssClasses.scorecardFilterClear = 'ms-bisfilter-clear';
PPSMA.CssClasses.scorecardNumericValidationWarningDiv = 'ms-bisfilter-numericvalidationwarningdiv';
PPSMA.CssClasses.scorecardFilterWarningLabel = 'ms-bisfilter-warninglabel';
PPSMA.CssClasses.scorecardClearFilterImage = 'ms-bisfilter-clearimage';
PPSMA.CssClasses.scorecardValueFilterInput = 'ms-bisvfilter-valuefilterinput';
PPSMA.CssClasses.scorecardFilterButtons = 'ms-bisfilter-button';
PPSMA.CssClasses.scorecardFilterFooter = 'ms-bisfilter-footer';
PPSMA.CssClasses.boxSizingBorderBox = 'ms-biinput-boxsizingbb';
PPSMA.CssClasses.msFormValidation = 'ms-formvalidation';
PPSMA._cssEx._instance$p = null;
PPSMA._css._cssFile$p = 'ppsDashboard.css';
PPSMA._scorecardConstants.cellSelectionClass = 'scs';
PPSMA._scorecardConstants.scorecardTableClass = 'sctb';
PPSMA._scorecardConstants.textWrappingThreashold = 210;
PPSMA._scorecardConstants.sortFilterColumn = 'sc1';
PPSMA._scorecardConstants.headerType = 'sc2';
PPSMA._scorecardConstants.showSecondValue = 'sc3';
PPSMA._scorecardConstants.columnType2 = 'sc4';
PPSMA._scorecardConstants.targetElements = 'sc5';
PPSMA._scorecardConstants.columnType = 'sc6';
PPSMA._scorecardConstants.rowId = 'sc7';
PPSMA._scorecardConstants.columnId = 'sc8';
PPSMA._scorecardConstants.parentId = 'sc9';
PPSMA._scorecardConstants.groupId = 'sc10';
PPSMA._scorecardConstants.isCollapsed = 'sc11';
PPSMA._scorecardConstants.isCellExpansionEnabled = 'sc12';
PPSMA._scorecardConstants.isHiddenBasedOnFilterStatus = 'sc13';
PPSMA._scorecardConstants.isDynamicallyExpandedHeader = 'sc14';
PPSMA._scorecardConstants.cellPath = 'sc15';
PPSMA._scorecardConstants.cellTypeAttribute = 'sc16';
PPSMA._scorecardConstants.isDrillEnabled = 'sc17';
PPSMA._scorecardConstants.isDrillUpEnabled = 'sc18';
PPSMA._scorecardConstants.isDrillDownEnabled = 'sc19';
PPSMA._scorecardConstants.annotationAction = 'sc20';
PPSMA._scorecardConstants.showDetailsEnabled = 'sc21';
PPSMA._scorecardConstants.analyzeInDecompEnabled = 'sc22';
PPSMA._scorecardConstants.detailsTupleXml = 'sc23';
PPSMA._scorecardConstants.annotated = 'sc24';
PPSMA._scorecardConstants.toolTipType = 'sc25';
PPSMA._scorecardConstants.toolTipDescription = 'sc26';
PPSMA._scorecardConstants.toolTipValue = 'sc27';
PPSMA._scorecardConstants.plusMinusState = 'sc30';
PPSMA._scorecardConstants.plusMinusType = 'sc32';
PPSMA._scorecardConstants.valueElement = 'sc33';
PPSMA._scorecardConstants.imgSource = 'src';
PPSMA._scorecardConstants.cellAction = 'act';
PPSMA._scorecardConstants.buttonId = 'tb1';
PPSMA._scorecardConstants.isToggle = 'tb2';
PPSMA._scorecardConstants.aligned = 'alg';
PPSMA._scorecardConstants.alt = 'alt';
PPSMA._scorecardConstants.plusMinusImgType = 'plusminusimg';
PPSMA.Scorecard._scorecardMinimumWidth$p = 200;
PPSMA.Scorecard.targetHeaderType = 'KpiTarget';
PPSMA.Scorecard._actualHeaderType$p = 'KpiActual';
PPSMA.Scorecard._displayElementClassName$p = 'scdci';
PPSMA.ScorecardElement._emptyElement$p = document.createElement('br');
PPSMA.ScorecardFilter._verificationElement$p = new PPSMA.ScorecardFilter(null);
PPSMA.ScorecardRow._verificationElement$p = new PPSMA.ScorecardRow(null);
PPSMA.ScorecardDataRow._verificationElement$p = new PPSMA.ScorecardDataRow(null);
PPSMA.ScorecardCell._verificationElement$p = new PPSMA.ScorecardCell(null);
PPSMA.ScorecardHeaderCell._verificationElement$p = new PPSMA.ScorecardHeaderCell(null);
PPSMA.ScorecardToolbarCell._verificationElement$p = new PPSMA.ScorecardToolbarCell(null);
PPSMA.PlusMinusImage._verificationElement$p = new PPSMA.PlusMinusImage(null);
PPSMA.ScorecardContextMenuHandler._separator$p = '~';
PPSMA.ScorecardContextMenuHandler._sortFilterMenuActionTemplate$p = 'scm_{0}.sortFilterItemClicked(\'{1}\', \'{2}\');';
PPSMA.ScorecardComments._methodGet$p = 'GET';
PPSMA.ScorecardComments._methodUpdate$p = 'UPDATE';
PPSMA.ScorecardControlManager._vS_ToolBarId$i = 'ToolBarId';
PPSMA.ScorecardControlManager._vS_ToolBarType$i = 'ToolBarType';
PPSMA.ScorecardControlManager._vS_TableId$i = 'TableId';
PPSMA.ScorecardControlManager._vS_ViewTableType$i = 'ViewTableType';
PPSMA.ScorecardControlManager._vS_SortFilterType$i = 'SortFilterType';
PPSMA.ScorecardControlManager._vS_ServiceUrl$i = 'ServiceUrl';
PPSMA.ScorecardControlManager._vS_CommentsUrl$i = 'CommentsUrl';
PPSMA.ScorecardControlManager._vS_FilterMode$i = 'FilterMode';
PPSMA.ScorecardControlManager._vS_RollupType$i = 'RollupType';
PPSMA.ScorecardControlManager._vS_StatusFilters$i = 'StatusFilters';
PPSMA.ScorecardControlManager._vS_SortAndFilters$i = 'SortAndFilters';
PPSMA.ScorecardControlManager._vS_SelectedCell$i = 'SelectedCell';
PPSMA.ScorecardControlManager._vS_SelectedCellRecord$i = 'SelectedCellRec';
PPSMA.ScorecardControlManager._vS_CollapsedRows$i = 'CollapsedRows';
PPSMA.ScorecardControlManager._vS_CollapsedColumns$i = 'CollapsedColumns';
PPSMA.ScorecardControlManager._vS_ShowInlineText$i = 'ShowInlineText';
PPSMA.ScorecardControlManager._vS_ShowIndicatorFilter$i = 'ShowIndicatorFilter';
PPSMA.ScorecardControlManager._vS_ExpandDrillTransforms$i = 'ExpandDrillTransforms';
PPSMA.ScorecardControlManager._vS_DynamicCss$i = 'DynamicCss';
PPSMA.ScorecardControlManager._vS_CacheKey$i = 'CacheKey';
PPSMA.ScorecardControlManager._vS_AllowFilter$i = 'AllowFilter';
PPSMA.ScorecardControlManager._vS_AllowSort$i = 'AllowSort';
PPSMA.ScorecardControlManager._vS_AllowStatusFilter$i = 'AllowStatusFilter';
PPSMA.ScorecardControlManager._vS_EnableTextWrapping$i = 'EnableTextWrapping';
PPSMA.ScorecardControlManager._vS_ShowAnnotations$i = 'ShowAnnotations';
PPSMA.ScorecardControlManager._vS_ShowDetails$i = 'ShowDetails';
PPSMA.ScorecardControlManager._vS_ScorecardId$i = 'ScorecardId';
PPSMA.ScorecardControlManager._vS_ConfiguredViewId$i = 'ConfiguredViewId';
PPSMA.ScorecardControlManager._vS_PageFilters$i = 'PageFilters';
PPSMA.ScorecardControlManager._vS_AccessibilityMode$i = 'AccessibilityMode';
PPSMA.ScorecardControlManager._contextCancelDeltaX$p = 40;
PPSMA.ScorecardControlManager._contextCancelDeltaY$p = 40;
PPSMA.ScorecardExpandCollapseState._emptY_GROUP_ID$i = '0';
PPSMA.ScorecardExpandCollapseState._COLLAPSED$i = 'C';
PPSMA._scorecardKeyboardNavigation._keyLeft$i = 37;
PPSMA._scorecardKeyboardNavigation._keyRight$i = 39;
PPSMA._scorecardKeyboardNavigation._keyUp$i = 38;
PPSMA._scorecardKeyboardNavigation._keyDown$i = 40;
PPSMA._scorecardKeyboardNavigation._keySpace$i = 32;
PPSMA._scorecardKeyboardNavigation._keyContextmenu$i = 93;
PPSMA._scorecardKeyboardNavigation._keyEnter$i = 13;
PPSMA._scorecardKeyboardNavigation._keyTab$i = 9;
PPSMA._scorecardSortAndFilterHandler.sortDesc = 'SortDesc';
PPSMA._scorecardSortAndFilterHandler.sortAsc = 'SortAsc';
PPSMA._scorecardSortAndFilterHandler.dontSort = 'DontSort';
PPSMA._scorecardSortAndFilterHandler.clearFilters = 'ClearFilters';
PPSMA._scorecardSortAndFilterHandler.valueFilters = 'ValueFilters';
PPSMA._scorecardSortAndFilterHandler.top10 = 'Top10';
PPSMA.ScorecardToolbarHandler._buttonFilterStatus$i = 'FilterStatus';
PPSMA.ScorecardToolbarHandler._buttonAverageRollup$i = 'AverageRollup';
PPSMA.ScorecardToolbarHandler._buttonWorstChildRollup$i = 'WorstChildRollup';
PPSMA.ScorecardToolbarHandler._buttonIndicatorRollup$i = 'IndicatorsRollup';
PPSMA.ScorecardToolbarHandler._buttonTreeMode$i = 'TreeMode';
PPSMA.ScorecardToolbarHandler._buttonExpandAllRows$i = 'ExpandAllRows';
PPSMA.ScorecardToolbarHandler._buttonCollapseAllRows$i = 'CollapseAllRows';
PPSMA.ScorecardToolbarHandler._buttonShowInlineText$i = 'ShowInlineText';
PPSMA.ScorecardToolbarHandler._toolbarClass$p = 'sc-tb';
PPSMA.ScorecardToolbarHandler._buttonClass$p = 'sc-tbc';
PPSMA.ScorecardToolbarHandler._buttonSelectedClass$p = 'sc-tbc sc-tbcs';
PPSMA.ScorecardToolbarHandler._buttonHiddenClass$p = 'sc-tbc sc-tbch';
PPSMA.ScorecardToolbarHandler._rollupAverage$p = 'ShowDefaultRollup';
PPSMA.ScorecardToolbarHandler._rollupWorstChild$p = 'ShowWorstChild';
PPSMA.ScorecardToolbarHandler._rollupIndicatorCount$p = 'ShowIndicatorCount';
PPSMA.StatusFilterMenu._instance$p = null;
PPSMA.CommentsDialog._classCommentsSaveCancelDiv$p = 'commentssavecanceldiv';
PPSMA.CommentsDialog._classCommentsTitleInput$p = 'commentstitleinput';
PPSMA.CommentsDialog._classCommentsCommentTextArea$p = 'commentscommenttextarea';
PPSMA.CommentsDialog._classCommentsCommentDiv$p = 'commentscommentdiv';
PPSMA.CommentsDialog._classCommentsFormDivClosed$p = 'commentsformdivclosed';
PPSMA.CommentsDialog._classCommentsCommentListOpen$p = 'commentscommentlistopen';
PPSMA.CommentsDialog._classCommentsCommentListClosed$p = 'commentscommentlistclosed';
PPSMA.CommentsDialog._classCommentsTitleHeaderDiv$p = 'commentstitleheaderdiv';
PPSMA.CommentsDialog._classCommentsTitleHeaderSpan$p = 'commentstitleheaderspan';
PPSMA.CommentsDialog._classCommentsOwnerCreatedByDiv$p = 'commentsownercreatedbydiv';
PPSMA.CommentsDialog._classCommentsOwnerHeader$p = 'commentsownerheader';
PPSMA.CommentsDialog._classCommentsCreatedByHeader$p = 'commentscreatedbyheader';
PPSMA.CommentsDialog._classCommentsCommentBody$p = 'commentscommentbody';
PPSMA.CommentsDialog._classCommentsCommentBodyDiv$p = 'commentscommentbodydiv';
PPSMA.CommentsDialog._classCommentsHeaderImage$p = 'ms-biscomment-dialogheaderimage';
PPSMA.CommentsDialog._classItemHidden$p = 'ms-bisc-itemhidden';
PPSMA.CommentsDialog._commentsDialogId$p = 'IDScorecardCommentsDialog';
PPSMA.CommentsDialog._titleId$p = 'CommentTitleId';
PPSMA.CommentsDialog._commentId$p = 'CommentBodyId';
PPSMA.CommentsDialog._saveCommentButtonId$p = 'CommentSaveButtonId';
PPSMA.CommentsDialog._cancelCommentButtonId$p = 'CommentCancelButtonId';
PPSMA.CommentsDialog._cancelDialogId$p = 'IDDialogCancel';
PPSMA.CommentsDialog._maX_COMMENT_BODY_LENGTH$p = 4000;
PPSMA._dialogsUtil.thousandSeparator = ',';
PPSMA._dialogsUtil.decimalPoint = '.';
PPSMA._dialogsUtil.classvalueFilterInputAlternateMargin = 'ms-bifilter-valueinput-alternatemargin';
PPSMA._dialogsUtil.classItemHidden = 'ms-bisd-itemhidden';
PPSMA.ScorecardFilterDialog._idTargetVarianceOptionsDropdown$p = 'IDTargetVarianceOptionsDropdown';
PPSMA.ScorecardFilterDialog._classClearFilterImage$p = 'ms-bisfilter-clearimage';
PPSMA.Top10FilterDialog.idScorecardTopFilterDialog = 'IDScorecardTopFilterDialog';
PPSMA.Top10FilterDialog.classFilterTopOptionsDropdown = 'ms-biscfilter-topoptionsdropdown';
PPSMA.Top10FilterDialog.classFilterTopOptionsDropdownSizer = 'ms-biscfilter-topoptionsdropdownsizer';
PPSMA.Top10FilterDialog.classFilterTopVarDropdown = 'ms-biscfilter-topvardropdown';
PPSMA.Top10FilterDialog.classFilterTargetVarianceDropdownDiv = 'ms-bistfilter-targetvariancesizer';
PPSMA.Top10FilterDialog.classFilterTopVarDropdownDiv = 'ms-biscfilter-topvardropdownsizer';
PPSMA.Top10FilterDialog.classFilterInputDiv = 'ms-bistfilter-inputsdiv';
PPSMA.Top10FilterDialog.classFilterLabel = 'ms-bistfilter-label';
PPSMA.Top10FilterDialog.classTopFilterInput = 'ms-bistfilter-input';
PPSMA.Top10FilterDialog.classTopFilterInputDiv = 'ms-bistfilter-inputsizer';
PPSMA.ValuesFilterDialog.idScorecardValueFilterDialog = 'IDScorecardValueFilterDialog';
PPSMA.ValuesFilterDialog._classFilterTargetVarianceCenteredDropdown$p = 'ms-bisfilter-targetvariancedropdown';
PPSMA.ValuesFilterDialog._classFilterByLabelCentered$p = 'ms-bisfilter-bylabel';
PPSMA.ValuesFilterDialog._classFilterValueAndOrDropdown$p = 'ms-bisfilter-valueandordropdown';
PPSMA.ValuesFilterDialog._classFilterValueOptionsDropdown$p = 'ms-bisfilter-valueoptionsdropdown';
PPSMA.ValuesFilterDialog._classFilterInputDiv$p = 'ms-bisvfilter-inputsdiv';
PPSMA.ValuesFilterDialog._classFilterTargetInputDiv$p = 'ms-bistvfilter-inputsdiv';
PPSMA.ValuesFilterDialog._classvalueFilterInputAlternateMargin$p = 'ms-bisfilter-valueinput-alternatemargin';
PPSMA.ValuesFilterDialog._classValueFilterInputSizer$p = 'ms-bisvfilter-inputsizer';
PPSMA.ValuesFilterDialog._classValueFilterInputAlternateSizer$p = 'ms-bisvfilter-inputalternatesizer';
PPSMA.ValuesFilterDialog._classValueFilterInputAlternateTargetSizer$p = 'ms-bisvfilter-inputalternatetargetsizer';
PPSMA.ValuesFilterDialog._classValueFilterLine1$p = 'ms-bisvfilter-line1';
PPSMA.ValuesFilterDialog._classValueFilterLine2$p = 'ms-bisvfilter-line2';
PPSMA.ValuesFilterDialog._classValueFilterLine3$p = 'ms-bisvfilter-line3';
PPSMA.ValuesFilterDialog._classValueFilterTargetVarianceDropDown$p = 'ms-bisvfilter-targetvariancedropdown';
PPSMA.ValuesFilterDialog._maX_DECIMAL$p = 7.92281625142643E+28;
PPSMA.ValuesFilterDialog._miN_DECIMAL$p = -7.92281625142643E+28;
PPSMA.ValuesFilterDialog._OPERANDS$p = [ '=', '<>', '>', '<' ];
PPSMA.ValuesFilterDialog._valuE_EQUALS$p = PPSMA.ValuesFilterDialog._OPERANDS$p[0];
PPSMA.ValuesFilterDialog._valuE_NOT_EQUAL$p = PPSMA.ValuesFilterDialog._OPERANDS$p[1];
PPSMA.ValuesFilterDialog._valuE_GREATER_THAN$p = PPSMA.ValuesFilterDialog._OPERANDS$p[2];
PPSMA.ValuesFilterDialog._valuE_LESS_THAN$p = PPSMA.ValuesFilterDialog._OPERANDS$p[3];
PPSMA.ValuesFilterDialog._stR_OPERANDS$p = [ '=', 'LIKE', 'ST', 'END' ];
PPSMA.ValuesFilterDialog._stR_EQUAL$p = '=';
PPSMA.ValuesFilterDialog._stR_CONTAIN$p = 'LIKE';
PPSMA.ValuesFilterDialog._stR_STARTS_WITH$p = 'ST';
PPSMA.ValuesFilterDialog._stR_ENDS_WITH$p = 'END';
PPSMA.ValuesFilterDialog._anD_OR_BLANK$p = 'BLANK';
PPSMA.ValuesFilterDialog._AND$p = 'AND';
PPSMA.ValuesFilterDialog._OR$p = 'OR';
PPSMA.ValuesFilterDialog._dialogWidth$p = 695;
PPSMA.ValuesFilterDialog._dialogHeight$p = 154;
PPSMA.ValuesFilterDialog._dialogHeightForTarget$p = 220;

function getResFolder() {ULS01W:; return g_resFolder; }
function getPPSWebParts() {ULS01W:; return g_ppsWebParts; }
function getDecompTreePage() {ULS01W:; return g_decompTreePage; }
function getDrillThroughPage() {ULS01W:; return g_drillThroughPage; }
function getAnnotationText() {ULS01W:; return g_Annotation_Text; }
function getEnableAnnotationTooltip() {ULS01W:; return g_EnableAnnotation_Tooltip; }
function getDisableAnnotationTooltip() {ULS01W:; return g_DisableAnnotation_Tooltip; }
function getShowDetailsText() {ULS01W:; return g_ShowDetails_Text; }
function getAnalyzeInDecompText() {ULS01W:; return g_AnalyzeInDecomp_Text; }
function getEnableInlineText() {ULS01W:; return g_EnableInline_Text; }
function getDisableInlineText() {ULS01W:; return g_DisableInline_Text; }
function getCollapsedText() {ULS01W:; return g_Collapsed_Text; }
function getExpandedText() {ULS01W:; return g_Expanded_Text; }
function isSilverlightInstalled(version){ULS01W:;return Silverlight.isInstalled(version);}

if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
if (typeof NotifyScriptLoadedAndExecuteWaitingJobs != "undefined")
    NotifyScriptLoadedAndExecuteWaitingJobs("scorecard.js");
