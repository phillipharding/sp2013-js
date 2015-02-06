function $_global_wpadder() {
    WPAdder = null;
    _WPAdder_minimumDescriptionWidth = 320;
    _WPAdder_maximumItemWidth = 200;
    _WPAdder_maximumItemPanes = 3;
    _WPAdder_Zone_InitializePrototype();
    _WPAdder.prototype = {
        _id: undefined,
        _table: undefined,
        _selCat: undefined,
        _selItem: undefined,
        _cats: undefined,
        _itemContainerTemplate: undefined,
        _visibleItemCols: undefined,
        _dummyCols: undefined,
        _firstItem: undefined,
        _lastItem: undefined,
        _firstItemCol: undefined,
        _lastLayoutWidth: undefined,
        _lastLayoutHeight: undefined,
        _layoutHash: undefined,
        _searchTxt: undefined,
        _ribbonMap: undefined,
        _visible: undefined,
        _zones: undefined,
        _widestColumn: undefined,
        _selectedTab: undefined,
        _maxCols: undefined,
        _postbackFunc: undefined,
        _callbackFunc: undefined,
        _onResizeDelegate: undefined,
        _onUnloadDelegate: undefined,
        addSelectedItemToPage: _WPAdder$addSelectedItemToPage,
        addItemToPageByItemIdAndZoneId: _WPAdder$addItemToPageByItemIdAndZoneId,
        addItemToPage: _WPAdder$addItemToPage,
        initialize: _WPAdder$initialize,
        nextPage: _WPAdder$nextPage,
        previousPage: _WPAdder$previousPage,
        searchCategory: _WPAdder$searchCategory,
        searchItem: _WPAdder$searchItem,
        selectCategoryByTitle: _WPAdder$selectCategoryByTitle,
        selectCategory: _WPAdder$selectCategory,
        selectItem: _WPAdder$selectItem,
        selectDescriptionTab: _WPAdder$selectDescriptionTab,
        show: _WPAdder$show,
        hide: _WPAdder$hide,
        showError: _WPAdder$showError,
        _setZone: _WPAdder$_setZone,
        _addItemToPage: _WPAdder$_addItemToPage,
        CreateWebpartPlaceholderMarkup: _WPAdder$CreateWebpartPlaceholderMarkup,
        _createWebpartPlaceholderInRte: _WPAdder$_createWebpartPlaceholderInRte,
        _clearChildren: _WPAdder$_clearChildren,
        _createEventArg: _WPAdder$_createEventArg,
        _createColumn: _WPAdder$_createColumn,
        _delayInitialize: _WPAdder$_delayInitialize,
        _disableUpload: _WPAdder$_disableUpload,
        _fillCachedItems: _WPAdder$_fillCachedItems,
        _fillItems: _WPAdder$_fillItems,
        _finishColumn: _WPAdder$_finishColumn,
        _getAddButton: _WPAdder$_getAddButton,
        _getCategoryContainer: _WPAdder$_getCategoryContainer,
        _getDummyColumn: _WPAdder$_getDummyColumn,
        _getFirstChild: _WPAdder$_getFirstChild,
        _getLastChild: _WPAdder$_getLastChild,
        _getHiddenField: _WPAdder$_getHiddenField,
        _getItemCount: _WPAdder$_getItemCount,
        _getItemContainer: _WPAdder$_getItemContainer,
        _getItemContainerTable: _WPAdder$_getItemContainerTable,
        _getItems: _WPAdder$_getItems,
        _getItemCols: _WPAdder$_getItemCols,
        _getNavigationTable: _WPAdder$_getNavigationTable,
        _getNavigationPrevious: _WPAdder$_getNavigationPrevious,
        _getNavigationNext: _WPAdder$_getNavigationNext,
        _getDescriptionArea: _WPAdder$_getDescriptionArea,
        _getDescriptionTable: _WPAdder$_getDescriptionTable,
        _getSelectedItem: _WPAdder$_getSelectedItem,
        _getUploadDiv: _WPAdder$_getUploadDiv,
        _getZoneSelect: _WPAdder$_getZoneSelect,
        _getNameArea: _WPAdder$_getNameArea,
        _handleCategoryKeydown: _WPAdder$_handleCategoryKeydown,
        _handleCategoryKeypress: _WPAdder$_handleCategoryKeypress,
        _handleItemKeydown: _WPAdder$_handleItemKeydown,
        _handleItemKeypress: _WPAdder$_handleItemKeypress,
        _handleKeypress: _WPAdder$_handleKeypress,
        _handleZoneKeypress: _WPAdder$_handleZoneKeypress,
        _calculateVisibleItemColumns: _WPAdder$_calculateVisibleItemColumns,
        _layout: _WPAdder$_layout,
        _layoutCategoryColumn: _WPAdder$_layoutCategoryColumn,
        _layoutItemColumns: _WPAdder$_layoutItemColumns,
        _moveCategory: _WPAdder$_moveCategory,
        _moveCategoryPage: _WPAdder$_moveCategoryPage,
        _moveItem: _WPAdder$_moveItem,
        _moveItemPage: _WPAdder$_moveItemPage,
        _onResize: _WPAdder$_onResize,
        _removeElement: _WPAdder$_removeElement,
        _removeItemHover: _WPAdder$_removeItemHover,
        _resizeItem: _WPAdder$_resizeItem,
        _resetSearch: _WPAdder$_resetSearch,
        _restoreDescriptionAndLayout: _WPAdder$_restoreDescriptionAndLayout,
        _saveDescriptionForLayout: _WPAdder$_saveDescriptionForLayout,
        _search: _WPAdder$_search,
        _setupNavImage: _WPAdder$_setupNavImage,
        _showItemCols: _WPAdder$_showItemCols,
        _hideUpload: _WPAdder$_hideUpload,
        _showUpload: _WPAdder$_showUpload,
        _makeUploadVisible: _WPAdder$_makeUploadVisible,
        _updateDescription: _WPAdder$_updateDescription,
        _uploadFile: _WPAdder$_uploadFile,
        _zoneChanged: _WPAdder$_zoneChanged,
        _showCategoryColumn: _WPAdder$_showCategoryColumn
    };
    ;
    _WPAdder_category_InitializePrototype();
    _WPAdder_item_InitializePrototype();
    WPAdderClass = {
        load: WPAdderClassLoad
    };
    if (typeof Sys != "undefined" && Sys && null != Sys.Application) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs != "undefined") {
        NotifyScriptLoadedAndExecuteWaitingJobs("wpadder.js");
    }
}
function ULSior() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "wpadder.commentedjs";
    return o;
}
var WPAdder;
var _WPAdder_minimumDescriptionWidth;
var _WPAdder_maximumItemWidth;
var _WPAdder_maximumItemPanes;

function _WPAdder_Zone_InitializePrototype() {
ULSior:
    ;
    _WPAdder_Zone.prototype.id = undefined;
    _WPAdder_Zone.prototype.displayTitle = undefined;
    _WPAdder_Zone.prototype.isInRTE = undefined;
}
function _WPAdder_Zone(id, displayTitle, isInRTE) {
    this.id = id;
    this.displayTitle = displayTitle;
    this.isInRTE = isInRTE;
}
function _WPAdder(id, categories, zones, postbackFunc, callbackFunc, ribbonMap) {
    for (var i = 0; i < categories.length; i++) {
        var cat = categories[i];

        cat.el.index = i;
        var items = cat.items;

        for (var j = 0; j < items.length; j++) {
            cat = items[j];
            cat.el.index = j;
        }
    }
    this._id = id;
    this._cats = categories;
    this._dummyCols = [];
    this._searchTxt = '';
    this._selCat = (this._selItem = -1);
    this._postbackFunc = postbackFunc;
    this._callbackFunc = callbackFunc;
    this._lastLayoutWidth = (this._lastLayoutHeight = -1);
    this._ribbonMap = ribbonMap;
    this._visible = false;
    var zonesArray = [];

    for (i = 0; i < zones.length; i += 3) {
        var oneZone = new _WPAdder_Zone(zones[i], zones[i + 1], zones[i + 2]);

        j = i / 3;
        zonesArray[j] = oneZone;
    }
    this._zones = zonesArray;
    var selfObj = this;

    this._onResizeDelegate = function() {
    ULSior:
        ;
        return selfObj._onResize.apply(selfObj, arguments);
    };
    this._onUnloadDelegate = function() {
    ULSior:
        ;
        if (typeof window.WPAdder != "undefined")
            window.WPAdder = undefined;
    };
}
function _WPAdder$addSelectedItemToPage() {
ULSior:
    ;
    if (this._selItem != -1) {
        var selectedItem = this._getSelectedItem();

        if (typeof selectedItem.onClientAdd != 'undefined' && selectedItem.onClientAdd != null) {
            DeferCall(selectedItem.onClientAdd, selectedItem, (this._getZoneSelect()).value, 0);
        }
        else {
            this._addItemToPage(selectedItem, Number((this._getZoneSelect()).value), 0);
        }
        this.hide();
    }
}
function _WPAdder$addItemToPageByItemIdAndZoneId(itemId, zoneId, zoneIndex, wpid) {
    if (null == zoneIndex)
        zoneIndex = 0;
    if (typeof wpid == "undefined") {
        wpid = "";
    }
    this._postbackFunc(this._createEventArg('addItem', zoneId, zoneIndex, itemId, wpid));
}
function _WPAdder$addItemToPage(item, zoneNum, zoneIndex) {
ULSior:
    ;
    this._addItemToPage(item, zoneNum, zoneIndex);
}
function _WPAdder$initialize(layoutHash, allowUploads) {
    if (null != this._table)
        return;
    this._layoutHash = layoutHash;
    this._table = document.getElementById(this._id + '_tbl');
    var selZone = (this._getHiddenField('selZone')).value, selItem = (this._getHiddenField('selItem')).value, selCat = (this._getHiddenField('selCat')).value, selTab = (this._getHiddenField('selTab')).value, layout = (this._getHiddenField('layout')).value, visible = (this._getHiddenField('visible')).value;
    var zoneSelect = this._getZoneSelect();

    for (var i = 0; i < this._zones.length; i++) {
        var curZone = this._zones[i];
        var newOption = document.createElement("OPTION");

        newOption.text = curZone.displayTitle;
        newOption.value = String(i);
        if (String(i) == selZone) {
            newOption.selected = true;
        }
        zoneSelect.options.add(newOption);
    }
    zoneSelect.onchange = _WPAdder_delegate(this, this._zoneChanged);
    this._itemContainerTemplate = this._getFirstChild(this._getItemContainer());
    this._clearChildren(this._itemContainerTemplate.parentNode);
    (this._getDescriptionArea()).innerHTML = '';
    if (!allowUploads)
        this._disableUpload();
    var layoutData = null;

    if (layoutHash != null && layoutHash.length != 0 && layout != null && layout.length != 0 && layout.substr(0, layoutHash.length + 1) == layoutHash + ';') {
        layoutData = (layout.substr(layoutHash.length + 1)).split(';');
        for (i = 0; i < layoutData.length; i++) {
            layoutData[i] = layoutData[i].split(',');
        }
    }
    this._table.style.display = '';
    this._layout(layoutData);
    for (i = 0; i < this._cats.length; i++) {
        var cat = this._cats[i];

        if (cat.title == selCat) {
            this.selectCategory(i);
            break;
        }
    }
    var items = this._getItems();

    for (i = 0; i < items.length; i++) {
        var item = items[i];

        if (item.title == selItem) {
            this.selectItem(i);
            break;
        }
    }
    this.selectDescriptionTab();
    AttachEvent('resize', this._onResizeDelegate);
    AttachEvent('unload', this._onUnloadDelegate, window);
    NotifyEventAndExecuteWaitingJobs("_spEventWebPartAdderReady");
}
function _WPAdder$nextPage() {
ULSior:
    ;
    if (this._firstItemCol + this._visibleItemCols < (this._getItemCols()).length) {
        this._showItemCols(this._firstItemCol + 1);
    }
}
function _WPAdder$previousPage() {
ULSior:
    ;
    if (this._firstItemCol > 0) {
        this._showItemCols(this._firstItemCol - 1);
    }
}
function _WPAdder$searchCategory(txt) {
    return this._search(txt, this._cats, this._selCat, _WPAdder_delegate(this, this.selectCategory));
}
function _WPAdder$searchItem(txt, forceAdvance) {
    return this._search(txt, this._getItems(), this._selItem, _WPAdder_delegate(this, this.selectItem));
}
function _WPAdder$selectCategoryByTitle(title) {
    var i;

    for (i = 0; i < this._cats.length; i++) {
        var cat = this._cats[i];

        if (cat.title == title)
            break;
    }
    if (i < this._cats.length)
        this.selectCategory(i);
}
function _WPAdder$selectCategory(index) {
ULSior:
    ;
    var cat;

    if (this._selCat != index) {
        if (this._selCat != -1) {
            this.selectItem(-1);
            cat = this._cats[this._selCat];
            cat.deselect();
        }
        cat = this._cats[index];
        cat.select();
        (this._getHiddenField('selCat')).value = cat.title;
        this._selCat = index;
        this._layoutItemColumns();
        this.selectItem(0);
    }
}
function _WPAdder$selectItem(index) {
ULSior:
    ;
    if (this._selItem != index) {
        var items = this._getItems();
        var item;

        if (this._selItem != -1)
            items[this._selItem].deselect();
        if (index != -1) {
            item = items[index];
            item.select();
            if (index < this._firstItem || index >= this._lastItem) {
                this._removeItemHover();
                var showInLeft = index < this._firstItem, itemsSoFar = 0, itemCols = this._getItemCols();

                for (var i = 0; i < itemCols.length; i++) {
                    itemsSoFar += this._getItemCount(itemCols[i]);
                    if (index < itemsSoFar) {
                        this._showItemCols(showInLeft ? i : Math.max(i - this._visibleItemCols + 1, 0));
                        break;
                    }
                }
            }
        }
        (this._getHiddenField('selItem')).value = index == -1 ? '' : items[index].title;
        this._selItem = index;
        if (this._selectedTab == 'error')
            this.selectDescriptionTab();
        this._updateDescription();
    }
}
function _WPAdder$selectDescriptionTab() {
ULSior:
    ;
    (this._getHiddenField('selTab')).value = (this._selectedTab = 'description');
    this._updateDescription();
}
function _WPAdder$show() {
ULSior:
    ;
    if (this._visible)
        return;
    if (null == this._table) {
        setTimeout(_WPAdder_delegate(this, this.show), 50);
        return;
    }
    var wpaupc = document.getElementById('WebPartAdderUpdatePanelContainer');

    if (wpaupc != null) {
        wpaupc.style.display = '';
    }
    (document.getElementById('wpadder_foofoo')).style.display = 'none';
    this._table.style.position = '';
    this._table.style.visibility = '';
    this._table.style.display = '';
    if (!browseris.ie)
        this._layout();
    var v = (this._getHiddenField('catColVisible')).value;

    if (v == "0")
        this._showCategoryColumn(false);
    g_wpadderHeight = this._table.offsetHeight;
    FixRibbonAndWorkspaceDimensions();
    this._visible = true;
    var container = this._getCategoryContainer();

    if (container != null) {
        try {
            container.focus();
        }
        catch (e) { }
    }
}
function _WPAdder$hide() {
ULSior:
    ;
    var wpaupc = document.getElementById('WebPartAdderUpdatePanelContainer');

    if (wpaupc != null) {
        wpaupc.style.display = 'none';
    }
    if (!this._visible)
        return;
    var foo = document.getElementById('wpadder_foofoo');

    if (null != foo) {
        foo.style.display = '';
    }
    if (null != this._table) {
        this._table.style.visibility = 'hidden';
        this._table.style.display = 'none';
        this._table.style.position = 'absolute';
    }
    (this._getHiddenField('visible')).value = '';
    g_wpadderHeight = 0;
    FixRibbonAndWorkspaceDimensions();
    this._visible = false;
}
function _WPAdder$showError(errorHtml) {
ULSior:
    ;
    (this._getHiddenField('selTab')).value = (this._selectedTab = 'error');
    (this._getDescriptionArea()).innerHTML = '<div class="ms-wpadder-description ms-errorcolor">' + errorHtml + '</div>';
    this.show();
}
function _WPAdder$_setZone(zoneId) {
ULSior:
    ;
    for (var i = 0; i < this._zones.length; i++) {
        if (zoneId == this._zones[i].id) {
            (this._getZoneSelect()).selectedIndex = i;
            (this._getHiddenField('selZone')).value = String(i);
            break;
        }
    }
}
function _WPAdder$_addItemToPage(item, zoneNum, zoneIndex) {
    if (null == zoneIndex)
        zoneIndex = 0;
    if (null == zoneNum || isNaN(zoneNum) || zoneNum >= this._zones.length) {
        return;
    }
    var zone = this._zones[zoneNum];
    var wpid = "";

    if (zone.isInRTE) {
        wpid = this._createWebpartPlaceholderInRte();
        if (null == wpid) {
            return;
        }
        if (IsFullNameDefined('SP.UI.ModalDialog.showWaitScreenWithNoClose')) {
            SP.UI.ModalDialog.showWaitScreenWithNoClose(SP.Res.genericLoading, null, null, null);
        }
    }
    this.addItemToPageByItemIdAndZoneId(item.id, zone.id, zoneIndex, wpid);
}
function _WPAdder$CreateWebpartPlaceholderMarkup(wpid) {
    var rgstr = [];

    rgstr.push("<div class=\"ms-rtestate-read ms-rte-wpbox\" contentEditable=\"false\"><div class=\"ms-rtestate-notify ms-rtegenerate-notify ms-rtestate-read ");
    rgstr.push(wpid);
    rgstr.push("\" id=\"div_");
    rgstr.push(wpid);
    rgstr.push("\">");
    rgstr.push(STSHtmlEncode(SP.Res.genericLoading));
    rgstr.push("</div>");
    rgstr.push("<div style='display:none' id='vid_");
    rgstr.push(wpid);
    rgstr.push("'/></div>");
    return rgstr.join("");
}
function _WPAdder$_createWebpartPlaceholderInRte(range) {
    if (null == range) {
        var rteRange = RTE.Cursor.get_range();

        range = rteRange;
    }
    if (null == range) {
        return null;
    }
    var editableRegion = range.getEditableRegion();

    if (editableRegion == null || editableRegion.parentNode == null) {
        return null;
    }
    var guid = SP.Guid.newGuid();
    var wpid = guid.toString("D");

    (document.getElementById("_wpcmWpid")).value = wpid;
    var strPartPlaceHolder = this.CreateWebpartPlaceholderMarkup(wpid);

    range.collapse(false);
    range.replaceHtml(strPartPlaceHolder);
    range.collapse(false);
    RTE.Cursor.update();
    RTE.CanvasEvents.dispatchChanged();
    return wpid;
}
function _WPAdder$_clearChildren(el) {
    while (null != el.lastChild)
        el.removeChild(el.lastChild);
}
function _WPAdder$_createEventArg() {
ULSior:
    ;
    var eventArg = '';

    for (var i = 0; i < arguments.length; i++) {
        if (eventArg != null && eventArg.length != 0)
            eventArg += '&';
        eventArg += escapeProperly(String(arguments[i]));
    }
    return eventArg;
}
function _WPAdder$_createColumn(template, parentElem) {
    var div = template.cloneNode(true);

    if (null != parentElem)
        parentElem.appendChild(div);
    return div;
}
function _WPAdder$_delayInitialize(fn) {
    AttachEvent('domLoad', function() {
    ULSior:
        ;
        setTimeout(fn, 50);
    });
}
function _WPAdder$_disableUpload() {
ULSior:
    ;
    var descriptionContent = this._saveDescriptionForLayout();

    (this._getUploadDiv()).style.display = 'none';
}
function _WPAdder$_fillCachedItems(items, template, data) {
    var columns = [];

    for (var di = 0, ii = 0; di < data.length; di++) {
        var count = parseInt(data[di]);
        var spaceIndex = data[di].indexOf(' ');
        var index = spaceIndex == -1 ? -1 : parseInt(data[di].substr(spaceIndex + 1));
        var div = this._createColumn(template);

        columns.push(div);
        div = this._getFirstChild(div);
        for (var i = 0; i < count && ii < items.length; ii++, i++) {
            var item = items[ii].el;

            if (index == ii) {
                var textNode = _WPAdder_findTextNode(item);

                item.title = _WPAdder_trim(textNode.nodeValue);
                spaceIndex = data[di].indexOf(':', spaceIndex + 2);
                textNode.nodeValue = textNode.nodeValue.substr(0, parseInt(data[di].substr(spaceIndex + 1))) + '...';
                spaceIndex = data[di].indexOf(' ', spaceIndex + 2);
                index = spaceIndex == -1 ? -1 : parseInt(data[di].substr(spaceIndex + 1));
            }
            div.appendChild(item);
        }
    }
    return columns;
}
function _WPAdder$_fillItems(columns, items, parentElem, template, maxWidth) {
    var widestColumn = 0;
    var container = columns[0] = this._createColumn(template, parentElem);
    var div = this._getFirstChild(container);
    var layoutData = '', currentLayoutData = '';
    var originalHeight = -1;

    for (var ii = 0, ti = 1; ii < items.length; ii++) {
        var item = items[ii].el;

        div.appendChild(item);
        if (originalHeight == -1) {
            originalHeight = this._table.offsetHeight;
        }
        var truncateLength = -1;

        if (0 != maxWidth)
            truncateLength = this._resizeItem(item, maxWidth);
        if (this._table.offsetHeight > originalHeight) {
            this._removeElement(item);
            if (div.offsetWidth > widestColumn)
                widestColumn = div.offsetWidth;
            this._removeElement(container);
            if (null != layoutData && layoutData.length > 0)
                layoutData += ',';
            layoutData += String(this._getItemCount(container)) + currentLayoutData;
            currentLayoutData = '';
            container = (columns[ti++] = this._createColumn(template, parentElem));
            div = this._getFirstChild(container);
            div.appendChild(item);
        }
        if (truncateLength != -1)
            currentLayoutData += ' ' + String(ii) + ':' + String(truncateLength);
        item.style.overflow = 'hidden';
    }
    if (div.offsetWidth > widestColumn)
        widestColumn = div.offsetWidth;
    this._removeElement(container);
    if (null != layoutData && layoutData.length > 0)
        layoutData += ',';
    layoutData += String(this._getItemCount(container)) + currentLayoutData;
    return [layoutData, widestColumn];
}
function _WPAdder$_finishColumn(column, widthParam) {
    var div = this._getFirstChild(column);

    div.style.width = String(widthParam) + 'px';
}
function _WPAdder$_getAddButton() {
ULSior:
    ;
    return this._getFirstChild(this._getFirstChild(this._table.rows[2].cells[0]));
}
function _WPAdder$_getCategoryContainer() {
ULSior:
    ;
    return this._getFirstChild(this._table.rows[1].cells[1]);
}
function _WPAdder$_getDummyColumn(n) {
    var div = this._dummyCols[n];

    if (null == div) {
        this._dummyCols[n] = (div = this._createColumn(this._itemContainerTemplate, null));
        div.className = 'ms-wpadder-cell ms-wpadder-itemCell2';
        this._finishColumn(div, this._widestColumn);
    }
    return div;
}
function _WPAdder$_getFirstChild(el) {
    var node = el.firstChild;

    while (null != node && node.nodeType == 3)
        node = node.nextSibling;
    return node;
}
function _WPAdder$_getLastChild(el) {
    var node = el.lastChild;

    while (null != node && node.nodeType == 3)
        node = node.previousSibling;
    return node;
}
function _WPAdder$_getHiddenField(nameSuffix) {
ULSior:
    ;
    return document.forms[0].elements[this._id + '_' + nameSuffix];
}
function _WPAdder$_getItemCount(itemCol) {
ULSior:
    ;
    var div = this._getFirstChild(itemCol);

    return div.childNodes.length;
}
function _WPAdder$_getItemContainer() {
ULSior:
    ;
    return (this._getItemContainerTable()).rows[0];
}
function _WPAdder$_getItemContainerTable() {
ULSior:
    ;
    return this._getFirstChild(this._table.rows[1].cells[3]);
}
function _WPAdder$_getItems() {
ULSior:
    ;
    var cat = this._cats[this._selCat];

    return cat.items;
}
function _WPAdder$_getItemCols() {
ULSior:
    ;
    var cat = this._cats[this._selCat];

    return cat.itemCols;
}
function _WPAdder$_getNavigationTable() {
ULSior:
    ;
    return this._getFirstChild((this._getItemContainerTable()).rows[1].cells[0]);
}
function _WPAdder$_getNavigationPrevious() {
ULSior:
    ;
    return (this._getNavigationTable()).rows[0].cells[0].firstChild;
}
function _WPAdder$_getNavigationNext() {
ULSior:
    ;
    return (this._getNavigationTable()).rows[0].cells[1].firstChild;
}
function _WPAdder$_getDescriptionArea() {
ULSior:
    ;
    return this._getFirstChild(this._getFirstChild((this._getDescriptionTable()).rows[1].cells[0]));
}
function _WPAdder$_getDescriptionTable() {
ULSior:
    ;
    var table = this._table;
    var row = table.rows[1];

    return this._getFirstChild(row.cells[5]);
}
function _WPAdder$_getSelectedItem() {
ULSior:
    ;
    return this._selItem == -1 ? null : (this._getItems())[this._selItem];
}
function _WPAdder$_getUploadDiv() {
ULSior:
    ;
    return this._getLastChild(this._table.rows[1].cells[1]);
}
function _WPAdder$_getZoneSelect() {
ULSior:
    ;
    return this._getFirstChild((this._getDescriptionTable()).rows[2].cells[0]);
}
function _WPAdder$_getNameArea() {
ULSior:
    ;
    return this._getFirstChild((this._getDescriptionTable()).rows[0].cells[0]);
}
function _WPAdder$_handleCategoryKeydown(e) {
    if (null == e)
        e = window.event;
    var key = _WPAdder_getKey(e);

    if (key == 38)
        this._moveCategory(-1);
    else if (key == 40)
        this._moveCategory(1);
    else if (key == 33)
        this._moveCategoryPage(-1);
    else if (key == 34)
        this._moveCategoryPage(1);
    else if (key == 36)
        this.selectCategory(0);
    else if (key == 35)
        this.selectCategory(this._cats.length - 1);
    else if (key == 8) { }
    else
        return true;
    this._resetSearch();
    return _WPAdder_cancelEvent(e);
}
function _WPAdder$_handleCategoryKeypress(e) {
    this._handleKeypress(e, _WPAdder_delegate(this, this.searchCategory));
}
function _WPAdder$_handleItemKeydown(e) {
    if (null == e)
        e = window.event;
    var key = _WPAdder_getKey(e);

    if (key == 38)
        this._moveItem(-1);
    else if (key == 40)
        this._moveItem(1);
    else if (key == 37)
        this._moveItemPage(-1);
    else if (key == 39)
        this._moveItemPage(1);
    else if (key == 33)
        this._moveItemPage(-1);
    else if (key == 34)
        this._moveItemPage(1);
    else if (key == 36)
        this.selectItem(0);
    else if (key == 35)
        this.selectItem((this._getItems()).length - 1);
    else if (key == 13)
        this.addSelectedItemToPage();
    else if (key == 8) { }
    else
        return true;
    this._resetSearch();
    return _WPAdder_cancelEvent(e);
}
function _WPAdder$_handleItemKeypress(e) {
    this._handleKeypress(e, _WPAdder_delegate(this, this.searchItem));
}
function _WPAdder$_handleKeypress(e, search) {
    if (null == e)
        e = window.event;
    var key = null != e.charCode && 0 != e.charCode ? e.charCode : e.keyCode;

    if (key >= 32 && key < 127 && !e.altKey && !e.ctrlKey) {
        var c = String.fromCharCode(key);

        this._searchTxt += c;
        if (search(this._searchTxt)) { }
        else if (this._searchTxt.length > 1 && search(c)) {
            this._searchTxt = c;
        }
        return _WPAdder_cancelEvent(e);
    }
    return true;
}
function _WPAdder$_handleZoneKeypress(e) {
    if (null == e)
        e = window.event;
    if (_WPAdder_getKey(e) == 13)
        this.addSelectedItemToPage();
}
function _WPAdder$_calculateVisibleItemColumns() {
ULSior:
    ;
    var availableForDescription = this._table.clientWidth;
    var cells = this._table.rows[1].cells;

    for (var i = 0; i < cells.length; i++) {
        if (i != 3 && i != 5)
            availableForDescription -= cells[i].offsetWidth;
    }
    this._visibleItemCols = 0;
    var maxPanes = Math.min(this._maxCols, _WPAdder_maximumItemPanes);

    do {
        this._visibleItemCols++;
        availableForDescription -= this._widestColumn;
    } while (this._visibleItemCols < maxPanes && availableForDescription - this._widestColumn >= _WPAdder_minimumDescriptionWidth);
    (this._getNavigationTable()).parentNode.colSpan = this._visibleItemCols;
    if (this._selCat != -1)
        this._layoutItemColumns();
    else
        this.selectCategory(0);
}
function _WPAdder$_layout(layoutData) {
    var descriptionContent = this._saveDescriptionForLayout();
    var container;
    var i;
    var itemCols;
    var cat;

    if (this._lastLayoutWidth == -1) {
        container = this._getCategoryContainer();
        for (i in this._cats) {
            cat = this._cats[i];
            container.appendChild(cat.el);
        }
    }
    if (this._table.clientHeight != this._lastLayoutHeight) {
        if (this._selCat != -1)
            this._removeItemHover();
        this._layoutCategoryColumn();
        (this._getNavigationTable()).parentNode.colSpan = 1;
        var widestColumn = 0, maxCols = 0;
        var testItem = document.createElement('DIV');

        container = this._itemContainerTemplate.cloneNode(true);
        testItem.style.whiteSpace = 'nowrap';
        testItem.style.width = '1px';
        testItem.style.height = '1px';
        testItem.style.overflow = 'auto';
        testItem.innerHTML = 'Quick Brown Fox!<br/>It jumped!';
        (this._getFirstChild(container)).appendChild(testItem);
        (this._getItemContainer()).appendChild(container);
        var textWidth = testItem.scrollWidth, textHeight = testItem.scrollHeight;

        this._removeElement(container);
        if (null != layoutData && (parseInt(layoutData[0][0]) != textWidth || parseInt(layoutData[0][1]) != textHeight || parseInt(layoutData[0][2]) != this._table.clientHeight)) {
            layoutData = null;
        }
        if (null != layoutData) {
            widestColumn = parseInt(layoutData[0][3]);
            for (i = 0; i < this._cats.length; i++) {
                cat = this._cats[i];
                itemCols = this._fillCachedItems(cat.items, this._itemContainerTemplate, layoutData[i + 1]);
                if (itemCols.length > maxCols)
                    maxCols = itemCols.length;
                cat.itemCols = itemCols;
            }
        }
        else {
            layoutData = '';
            for (i in this._cats) {
                itemCols = [];
                cat = this._cats[i];
                var colData = this._fillItems(itemCols, cat.items, this._getItemContainer(), this._itemContainerTemplate, _WPAdder_maximumItemWidth);

                if (colData[1] > widestColumn)
                    widestColumn = colData[1];
                if (itemCols.length > maxCols)
                    maxCols = itemCols.length;
                cat.itemCols = itemCols;
                layoutData += ';' + colData[0];
            }
            layoutData = String(textWidth) + ',' + String(textHeight) + ',' + String(this._table.clientHeight) + ',' + String(widestColumn) + layoutData;
            (this._getHiddenField('layout')).value = this._layoutHash + ';' + layoutData;
        }
        for (i in this._cats) {
            cat = this._cats[i];
            var divs = cat.itemCols;

            for (var j in divs)
                this._finishColumn(divs[j], widestColumn);
        }
        for (i in this._dummyCols)
            this._finishColumn(this._dummyCols[i], widestColumn);
        this._maxCols = maxCols;
        this._widestColumn = widestColumn;
    }
    if (this._table.clientWidth != this._lastLayoutWidth || this._table.clientHeight != this._lastLayoutHeight) {
        this._calculateVisibleItemColumns();
    }
    this._restoreDescriptionAndLayout(descriptionContent);
    this._lastLayoutWidth = this._table.clientWidth;
    this._lastLayoutHeight = this._table.clientHeight;
}
function _WPAdder$_layoutCategoryColumn() {
ULSior:
    ;
    var container = this._getCategoryContainer();

    if (container.className.indexOf("ms-wpadder-categories") < 0) {
        return;
    }
    var parentElem = container.parentNode;

    this._removeElement(container);
    var availableHeight = parentElem.clientHeight - (this._getUploadDiv()).offsetHeight;

    container.style.overflow = 'auto';
    container.style.height = String(availableHeight) + 'px';
    container.style.width = '';
    parentElem.insertBefore(container, this._getFirstChild(parentElem));
    var widthLocal = Math.max(container.scrollWidth, parentElem.clientWidth);

    container.style.width = String(widthLocal) + 'px';
    if (container.scrollWidth > container.clientWidth) {
        container.style.width = String(widthLocal + 16) + 'px';
    }
}
function _WPAdder$_layoutItemColumns() {
ULSior:
    ;
    this._removeItemHover();
    this._firstItemCol = -1;
    this._showItemCols(0);
    var reselectItem = this._selItem != -1 && this._selItem >= this._lastItem;

    if (reselectItem) {
        var index = this._selItem;

        this.selectItem(-1);
        this.selectItem(index);
    }
}
function _WPAdder$_moveCategory(n) {
    var newSelection = this._selCat + n;

    if (newSelection < 0)
        newSelection = 0;
    else if (newSelection >= this._cats.length)
        newSelection = this._cats.length - 1;
    this.selectCategory(newSelection);
}
function _WPAdder$_moveCategoryPage(n) {
    var container = this._getCategoryContainer(), parentElem = container.parentNode;
    var availableHeight = parentElem.clientHeight - (this._getUploadDiv()).offsetHeight;
    var catsPerPage = availableHeight / (this._getFirstChild(container)).offsetHeight - 1;

    if (catsPerPage < 1)
        catsPerPage = 1;
    this._moveCategory(n * catsPerPage);
}
function _WPAdder$_moveItem(n) {
    var newSelection = this._selItem + n, items = this._getItems();

    if (newSelection < 0)
        newSelection = 0;
    else if (newSelection >= items.length)
        newSelection = items.length - 1;
    this.selectItem(newSelection);
}
function _WPAdder$_moveItemPage(n) {
    var cat = this._cats[this._selCat];
    var itemsPerPage = this._getItemCount(cat.itemCols[0]);

    this._moveItem(n * itemsPerPage);
}
function _WPAdder$_onResize() {
ULSior:
    ;
    if (null != this._table.parentNode && 1 == this._table.parentNode.nodeType && this._table.style.display != 'none') {
        this._layout();
    }
}
function _WPAdder$_removeElement(el) {
    if (null != el.parentNode)
        el.parentNode.removeChild(el);
}
function _WPAdder$_removeItemHover() {
ULSior:
    ;
    var items = this._getItems();

    for (var i in items) {
        var item = items[i];

        item.removeHover();
    }
}
function _WPAdder$_resizeItem(item, maxWidth) {
    var isSelected = false;
    var tempClassName = '';
    var isIE7 = browseris.ie && browseris.iever == 7 && !browseris.ie8standard;

    if (isIE7 && item.className.indexOf('ms-wpadder-selected') >= 0) {
        isSelected = true;
        tempClassName = item.className;
        item.className.replace('ms-wpadder-selected', '');
    }
    item.style.width = String(maxWidth) + 'px';
    item.style.overflow = 'auto';
    var len = -1;

    if (item.scrollWidth > item.clientWidth) {
        var textNode = _WPAdder_findTextNode(item), text = textNode.nodeValue;

        len = text.length - 3;
        item.title = _WPAdder_trim(text);
        do {
            textNode.nodeValue = text.substr(0, len) + '...';
            len--;
        } while (len >= 0 && item.scrollWidth > item.clientWidth);
        if (++len < 0)
            len = 0;
    }
    item.style.overflow = '';
    item.style.width = '';
    if (isSelected) {
        item.className = tempClassName;
    }
    return len;
}
function _WPAdder$_resetSearch() {
ULSior:
    ;
    this._searchTxt = '';
}
function _WPAdder$_restoreDescriptionAndLayout(htmlContent) {
    var descriptionArea = this._getDescriptionArea();

    descriptionArea.style.width = String(descriptionArea.parentNode.clientWidth) + 'px';
    descriptionArea.style.height = String(descriptionArea.parentNode.clientHeight) + 'px';
    descriptionArea.innerHTML = htmlContent;
}
function _WPAdder$_saveDescriptionForLayout() {
ULSior:
    ;
    var descriptionArea = this._getDescriptionArea();
    var descriptionContent = descriptionArea.innerHTML;

    descriptionArea.innerHTML = '&nbsp;';
    descriptionArea.style.width = '';
    descriptionArea.style.height = '';
    return descriptionContent;
}
function _WPAdder$_search(txt, items, startParam, select) {
    var i;

    txt = txt.toLowerCase();
    if (txt.length < 2)
        startParam++;
    if (startParam < 0)
        startParam = 0;
    for (i = startParam; i < items.length; i++) {
        if ((items[i].title.toLowerCase()).indexOf(txt) == 0) {
            select(i);
            return true;
        }
    }
    for (i = 0; i < startParam; i++) {
        if ((items[i].title.toLowerCase()).indexOf(txt) == 0) {
            select(i);
            return true;
        }
    }
    return false;
}
function _WPAdder$_setupNavImage(img, enabled) {
    var activeChar = img.src.lastIndexOf('.') - 1;

    if (activeChar > 0)
        img.src = img.src.substring(0, activeChar) + (enabled ? 'A' : 'I') + img.src.substring(activeChar + 1);
    img.className = enabled ? '' : 'ms-wpadder-disabled';
}
function _WPAdder$_showItemCols(firstCol) {
ULSior:
    ;
    var i;
    var j;

    if (this._firstItemCol != firstCol) {
        var itemCols = this._getItemCols();
        var container = this._getItemContainer();

        this._clearChildren(container);
        this._firstItemCol = firstCol;
        this._firstItem = 0;
        for (i = 0; i < firstCol; i++)
            this._firstItem += this._getItemCount(itemCols[i]);
        this._lastItem = this._firstItem;
        for (i = 0, j = 0; i < this._visibleItemCols; i++) {
            var colIndex = firstCol + i;

            if (colIndex < itemCols.length) {
                this._lastItem += this._getItemCount(itemCols[colIndex]);
                itemCols[colIndex].className = 'ms-wpadder-cell ' + (i == 0 ? 'ms-wpadder-itemCell' : 'ms-wpadder-itemCell2');
                container.appendChild(itemCols[colIndex]);
            }
            else {
                container.appendChild(this._getDummyColumn(j++));
            }
        }
        this._setupNavImage(this._getNavigationPrevious(), firstCol > 0);
        this._setupNavImage(this._getNavigationNext(), firstCol + this._visibleItemCols < itemCols.length);
    }
}
function _WPAdder$_hideUpload() {
ULSior:
    ;
    this._makeUploadVisible(false);
}
function _WPAdder$_showUpload() {
ULSior:
    ;
    this._makeUploadVisible(true);
}
function _WPAdder$_makeUploadVisible(visible) {
ULSior:
    ;
    var descriptionContent = this._saveDescriptionForLayout();
    var outerDiv = this._getUploadDiv(), table = this._getFirstChild(outerDiv);
    var arrowSpan = this._getLastChild(table.rows[0].cells[0]);
    var controlDiv = this._getFirstChild(table.rows[1].cells[0]);
    var closeButton = this._getLastChild(table.rows[0].cells[1]);

    arrowSpan.style.display = visible ? 'none' : 'inline';
    closeButton.style.display = (controlDiv.style.display = visible ? 'inline' : 'none');
    this._layoutCategoryColumn();
    this._calculateVisibleItemColumns();
    this._restoreDescriptionAndLayout(descriptionContent);
}
function _WPAdder$_updateDescription() {
ULSior:
    ;
    if (this._selItem == -1) {
        (this._getDescriptionArea()).innerHTML = '&nbsp;';
        (this._getAddButton()).disabled = true;
    }
    else {
        var item = this._getSelectedItem(), descriptionArea = this._getDescriptionArea();
        var div = this._getNameArea();

        if (div.innerText != null)
            div.innerText = item.title;
        else
            div.textContent = item.title;
        if (this._selectedTab == 'description') {
            descriptionArea.innerHTML = '<div class="ms-wpadder-description">' + item.description + '</div>';
        }
        (this._getAddButton()).disabled = false;
    }
}
function _WPAdder$_uploadFile(e) {
ULSior:
    ;
    var input = this._getLastChild(this._getLastChild(this._getUploadDiv())), shouldPost;

    try {
        var trim = _WPAdder_trim(input.value);

        shouldPost = trim != null && trim.length != 0;
    }
    catch (ex) {
        shouldPost = true;
    }
    if (shouldPost) {
        (this._getHiddenField('visible')).value = 'yes';
        document.forms[0].enctype = "multipart/form-data";
        document.forms[0].submit();
    }
    _WPAdder_cancelEvent(e);
}
function _WPAdder$_zoneChanged(e) {
ULSior:
    ;
    var zoneSelect = _WPAdder_getSrcElement(e);

    (this._getHiddenField('selZone')).value = String(zoneSelect.selectedIndex);
}
function _WPAdder$_showCategoryColumn(show) {
ULSior:
    ;
    if (this._table != null) {
        var rows = this._table.rows;

        if (rows != null && rows.length > 1) {
            var row = rows[1];
            var cells = row.cells;

            if (cells != null && cells.length > 1) {
                var td = cells[1];

                if (td.className.indexOf("ms-wpadder-categoryColumn") >= 0) {
                    td.style.display = show ? "" : "none";
                    (this._getHiddenField("catColVisible")).value = show ? "1" : "0";
                    (document.getElementById("wpadder_categorysectionhead")).style.display = show ? "" : "none";
                }
            }
        }
    }
}
function _WPAdder_category_InitializePrototype() {
ULSior:
    ;
    _WPAdder_category.prototype.title = undefined;
    _WPAdder_category.prototype.items = undefined;
    _WPAdder_category.prototype.el = undefined;
    _WPAdder_category.prototype.itemCols = undefined;
    _WPAdder_category.prototype.select = _WPAdder_category$select;
    _WPAdder_category.prototype.deselect = _WPAdder_category$deselect;
    _WPAdder_category.prototype.removeHover = _WPAdder_category$removeHover;
}
function _WPAdder_category(title, icon, items) {
ULSior:
    ;
    this.title = title;
    this.items = items;
    var el = document.createElement('DIV');

    el.onmouseover = _WPAdder_item_mouseOver;
    el.onmouseout = _WPAdder_item_mouseOut;
    el.role = 'button';
    el.setAttribute('title', title);
    el.onclick = _WPAdder_category_click;
    el.style.whiteSpace = 'nowrap';
    el.innerHTML = '<img src="' + icon + '" alt="" align="absmiddle" /> ' + title;
    this.el = el;
}
function _WPAdder_category$select() {
ULSior:
    ;
    this.el.className = 'ms-wpadder-selected';
    var elTop = this.el.offsetTop;
    var parentElem = this.el.parentNode;
    var parentTop = parentElem.scrollTop;

    if (elTop < parentTop)
        parentElem.scrollTop = elTop;
    else {
        var elBtm = elTop + this.el.offsetHeight, parentBtm = parentTop + parentElem.clientHeight;

        if (elBtm > parentBtm)
            parentElem.scrollTop = elBtm - parentElem.clientHeight;
    }
}
function _WPAdder_category$deselect() {
ULSior:
    ;
    this.el.className = '';
}
function _WPAdder_category$removeHover() {
ULSior:
    ;
    _WPAdder_item_removeHover(this.el);
}
function _WPAdder_item_InitializePrototype() {
ULSior:
    ;
    _WPAdder_item.prototype.id = undefined;
    _WPAdder_item.prototype.title = undefined;
    _WPAdder_item.prototype.description = undefined;
    _WPAdder_item.prototype.v3pickerkey = undefined;
    _WPAdder_item.prototype.listTemplate = undefined;
    _WPAdder_item.prototype.onClientAdd = undefined;
    _WPAdder_item.prototype.el = undefined;
    _WPAdder_item.prototype.removeHover = _WPAdder_category$removeHover;
    _WPAdder_item.prototype.deselect = _WPAdder_category$deselect;
    _WPAdder_item.prototype.select = _WPAdder_item$select;
}
function _WPAdder_item(id, title, description, icon, onClientAdd, v3pickerkey, listTemplateParam) {
ULSior:
    ;
    this.id = id;
    this.title = title;
    this.description = description;
    this.v3pickerkey = v3pickerkey;
    this.listTemplate = listTemplateParam;
    this.onClientAdd = onClientAdd;
    var el = document.createElement('DIV');

    el.onmouseover = _WPAdder_item_mouseOver;
    el.onmouseout = _WPAdder_item_mouseOut;
    el.role = 'button';
    el.setAttribute('title', title);
    el.onclick = _WPAdder_item_click;
    el.style.whiteSpace = 'nowrap';
    el.innerHTML = '<img src="' + icon + '" alt="" align="absmiddle" />';
    el.appendChild(document.createTextNode(title));
    this.el = el;
}
function _WPAdder_item$select() {
ULSior:
    ;
    this.el.className = 'ms-wpadder-selected';
}
function _WPAdder_find(el, tag) {
    while (null != el && el.tagName.toUpperCase() != tag)
        el = el.parentNode;
    return el;
}
function _WPAdder_getKey(e) {
    if (null == e)
        e = window.event;
    return null != e.keyCode && 0 != e.keyCode ? e.keyCode : e.which;
}
function _WPAdder_getSrcElement(e) {
    if (null == e)
        e = window.event;
    if (typeof e.srcElement != 'undefined' && null != e.srcElement)
        return e.srcElement;
    else if (typeof e.originalTarget != 'undefined')
        return e.originalTarget;
    return null;
}
function _WPAdder_cancelEvent(e) {
    if (null == e)
        e = window.event;
    e.cancelBubble = true;
    if (typeof e.preventDefault != 'undefined')
        e.preventDefault();
    if (typeof e.stopPropogation != 'undefined')
        e.stopPropogation();
    return false;
}
function _WPAdder_category_click(e) {
    WPAdder._resetSearch();
    WPAdder.selectCategory((_WPAdder_find(_WPAdder_getSrcElement(e), 'DIV')).index);
    return _WPAdder_cancelEvent(e);
}
function _WPAdder_clickOnEnter(e, el) {
    if (_WPAdder_getKey(e) == 13) {
        if (typeof el.onclick != 'undefined') {
            var onclick = el.onclick;

            if (typeof onclick == 'string')
                eval(onclick);
            else
                onclick(e);
        }
        return _WPAdder_cancelEvent(e);
    }
    return true;
}
function _WPAdder_item_click(e) {
    WPAdder._resetSearch();
    WPAdder.selectItem((_WPAdder_find(_WPAdder_getSrcElement(e), 'DIV')).index);
    return _WPAdder_cancelEvent(e);
}
function _WPAdder_item_mouseOver(e) {
    _WPAdder_item_addHover(_WPAdder_find(_WPAdder_getSrcElement(e), 'DIV'));
}
function _WPAdder_item_mouseOut(e) {
    _WPAdder_item_removeHover(_WPAdder_find(_WPAdder_getSrcElement(e), 'DIV'));
}
function _WPAdder_item_addHover(el) {
    el.className += ' ms-wpadder-hover';
}
function _WPAdder_item_removeHover(el) {
    el.className = el.className == null || el.className == 'ms-wpadder-hover' ? '' : el.className.replace(' ms-wpadder-hover', '');
}
function _WPAdder_findTextNode(el) {
    var child = el.firstChild;

    while (null != child && child.nodeType != 3)
        child = child.nextSibling;
    return child;
}
function _WPAdder_trim(text) {
    return text.replace(/^\s+|\s+$/g, '');
}
function _WPAdder_delegate(obj, method) {
ULSior:
    ;
    return function() {
    ULSior:
        ;
        return method.apply(obj, arguments);
    };
}
function WPAdderClassLoad(callback) {
ULSior:
    ;
    callback();
}
var WPAdderClass;

$_global_wpadder();
