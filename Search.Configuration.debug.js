
Type.registerNamespace('Search.Configuration');

Search.Configuration.QueryBuilderMode = function() {}
Search.Configuration.QueryBuilderMode.prototype = {
    full: 0, 
    predefinedCBS: 1, 
    resultSource: 2, 
    subStrateQueryRule: 3, 
    resultBlockQueryRule: 4, 
    resultScriptWebPart: 5
}
Search.Configuration.QueryBuilderMode.registerEnum('Search.Configuration.QueryBuilderMode', false);


Search.Configuration.CatalogItemPicker = function Search_Configuration_CatalogItemPicker() {
}
Search.Configuration.CatalogItemPicker.get_$o = function Search_Configuration_CatalogItemPicker$get_$o() {
    if (!Search.Configuration.CatalogItemPicker.$1x) {
        var $v_0 = previewCBS;
        if (!Srch.U.n($v_0)) {
            Search.Configuration.CatalogItemPicker.$1x = $v_0.control;
        }
    }
    return Search.Configuration.CatalogItemPicker.$1x;
}
Search.Configuration.CatalogItemPicker.get_$H = function Search_Configuration_CatalogItemPicker$get_$H() {
    if (!Search.Configuration.CatalogItemPicker.$5) {
        var $v_0 = qbConfigData;
        var $v_1 = $v_0.value;
        if (!Srch.U.e($v_1)) {
            Search.Configuration.CatalogItemPicker.$5 = Sys.Serialization.JavaScriptSerializer.deserialize($v_1);
        }
    }
    return Search.Configuration.CatalogItemPicker.$5;
}
Search.Configuration.CatalogItemPicker.launchCatalogPicker = function Search_Configuration_CatalogItemPicker$launchCatalogPicker(itemTemplate, callback, catalogUrl, itemUrl) {
    var $v_0 = new SP.UI.DialogOptions();
    $v_0.width = 900;
    $v_0.height = 600;
    $v_0.autoSize = true;
    $v_0.dialogReturnValueCallback = callback;
    var $v_1 = {};
    var $v_2 = {};
    $v_2[Search.Configuration.CatalogItemPicker.ConfigKeys.$1B] = catalogUrl;
    $v_2[Search.Configuration.CatalogItemPicker.ConfigKeys.$1A] = itemUrl;
    var $v_3 = new Search.Configuration.CatalogItemPicker.ItemPickerState();
    $v_3.QueryType = 'CatalogItemQuery';
    $v_3.PDQueryData = $v_2;
    $v_1['CatalogPickerStateKey'] = $v_3;
    $v_1['QueryBuilderCustomLoad'] = 'Search.Configuration.CatalogItemPicker.catalogPickerLoader();';
    $v_0.title = Srch.Res.qb_CatalogPicker_Title;
    $v_0.url = SP.Utilities.VersionUtility.getLayoutsPageUrl('CatalogItemPicker.aspx');
    $v_0.url += (SP.ScriptUtility.isNullOrEmptyString(itemTemplate)) ? '' : '?tplt=' + itemTemplate;
    var $v_4 = window.location.search.substring(1, window.location.search.length);
    if (!SP.ScriptUtility.isNullOrEmptyString($v_4)) {
        $v_0.url += '&' + $v_4;
    }
    $v_0.args = $v_1;
    var $v_5 = SP.UI.ModalDialog.showModalDialog($v_0);
}
Search.Configuration.CatalogItemPicker.onPickerOKButtonClicked = function Search_Configuration_CatalogItemPicker$onPickerOKButtonClicked() {
    var $v_0 = new Search.Configuration.CatalogItemPicker.ItemPickerReturnType();
    $v_0.queryTemplate = Search.Configuration.CatalogItemPicker.getCatalogItemQuery();
    Search.Configuration.CatalogItemPicker.$I.QueryType = 'CatalogItemQuery';
    Search.Configuration.CatalogItemPicker.$I.ClientType = 'CatalogItemReuseQuery';
    $v_0.pickerState = Search.Configuration.CatalogItemPicker.$I;
    SP.UI.ModalDialog.get_childDialog().set_returnValue($v_0);
    SP.UI.ModalDialog.get_childDialog().close(1);
}
Search.Configuration.CatalogItemPicker.catalogPickerLoader = function Search_Configuration_CatalogItemPicker$catalogPickerLoader() {
    var $v_0 = SP.UI.ModalDialog.get_childDialog().get_args();
    if (!Srch.U.n($v_0['CatalogPickerStateKey'])) {
        Search.Configuration.CatalogItemPicker.$I = $v_0['CatalogPickerStateKey'];
    }
    else {
        Search.Configuration.CatalogItemPicker.$I = new Search.Configuration.CatalogItemPicker.ItemPickerState();
        Search.Configuration.CatalogItemPicker.$I.QueryType = 'Latest';
        Search.Configuration.CatalogItemPicker.$I.Sorts = [ new Srch.ResultSort('LastModifiedTime', 1) ];
        Search.Configuration.CatalogItemPicker.$I.PDQueryData['PathType'] = 'PathSite';
    }
    Search.Configuration.CatalogItemPicker.createCatalogItemControl();
    Search.Configuration.CatalogItemPicker.previewPickerResults();
}
Search.Configuration.CatalogItemPicker.previewPickerResults = function Search_Configuration_CatalogItemPicker$previewPickerResults() {
    Search.Configuration.CatalogItemPicker.get_$o().set_showAdvancedLink(false);
    Search.Configuration.CatalogItemPicker.get_$o().set_showLanguageOptions(false);
    Search.Configuration.CatalogItemPicker.get_$o().set_showPreferencesLink(false);
    Search.Configuration.CatalogItemPicker.get_$o().set_showPaging(true);
    Search.Configuration.CatalogItemPicker.get_$o().clearLastQueryState();
    var $v_0 = Search.Configuration.CatalogItemPicker.getCatalogItemQuery();
    Search.Configuration.CatalogItemPicker.$4k($v_0);
}
Search.Configuration.CatalogItemPicker.cancelDialog = function Search_Configuration_CatalogItemPicker$cancelDialog() {
    var $v_0 = SP.UI.ModalDialog.get_childDialog();
    if ($v_0) {
        $v_0.close(0);
    }
}
Search.Configuration.CatalogItemPicker.$4k = function Search_Configuration_CatalogItemPicker$$4k($p0) {
    if (Srch.U.w($p0)) {
        Srch.U.trace(null, 'RefreshCatalogPickerResults', 'queryText is null');
        return;
    }
    if ($p0.length >= 2048) {
        $p0 = $p0.substring(0, 2048);
    }
    var $v_0 = Search.Configuration.CatalogItemPicker.get_$o().getDataProvider();
    var $v_1 = new Srch.QueryState();
    $v_1.k = $p0;
    var $v_2 = Search.Configuration.CatalogItemPicker.$I.PDQueryData[Search.Configuration.CatalogItemPicker.ConfigKeys.$2M];
    if (!Srch.U.w($v_2) && SP.Guid.isValid($v_2)) {
        $v_0.set_sourceID($v_2);
    }
    else {
        $v_0.set_sourceID('8413cd39-2156-4e00-b54d-11efd9abdb89');
    }
    $v_0.set_selectedRefiners([ 'ManagedProperties(filter=100/0/*)' ]);
    $v_0.get_properties()[Search.Configuration.CatalogItemPicker.ConfigKeys.$W] = 'True';
    Search.Configuration.CatalogItemPicker.get_$o().refresh($v_1);
}
Search.Configuration.CatalogItemPicker.createCatalogItemControl = function Search_Configuration_CatalogItemPicker$createCatalogItemControl() {
    Search.Configuration.CatalogItemPicker.$4Z();
    Search.Configuration.CatalogItemPicker.$U = $get('PathItem');
    Search.Configuration.CatalogItemPicker.$y = $get('CatalogItemFilter');
    var $v_0 = Search.Configuration.CatalogItemPicker.$I.PDQueryData;
    if (!Srch.U.e($v_0[Search.Configuration.CatalogItemPicker.ConfigKeys.$1A])) {
        Search.Configuration.CatalogItemPicker.$U.value = $v_0[Search.Configuration.CatalogItemPicker.ConfigKeys.$1A];
    }
    if (!Srch.U.e($v_0[Search.Configuration.CatalogItemPicker.ConfigKeys.$1B])) {
        Search.Configuration.CatalogItemPicker.$9.value = $v_0[Search.Configuration.CatalogItemPicker.ConfigKeys.$1B];
    }
    else {
        Search.Configuration.CatalogItemPicker.$9.selectedIndex = Search.Configuration.CatalogItemPicker.$45(Search.Configuration.CatalogItemPicker.$U.value);
    }
}
Search.Configuration.CatalogItemPicker.$4Z = function Search_Configuration_CatalogItemPicker$$4Z() {
    Search.Configuration.CatalogItemPicker.$9 = $get('CatalogListSelection');
    if (Srch.U.n(Search.Configuration.CatalogItemPicker.$9)) {
        return;
    }
    var $v_0 = Search.Configuration.CatalogItemPicker.get_$H();
    if (($v_0) && ($v_0.CatalogConfigInfo)) {
        var $v_1 = $v_0.CatalogConfigInfo.length;
        if ($v_1 > 0) {
            for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
                var $v_3 = $v_0.CatalogConfigInfo[$v_2];
                Search.Configuration.CatalogItemPicker.$9.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue($v_3.CatalogUrl, $v_3.CatalogName));
            }
        }
    }
}
Search.Configuration.CatalogItemPicker.$45 = function Search_Configuration_CatalogItemPicker$$45($p0) {
    if (Srch.U.n(Search.Configuration.CatalogItemPicker.$9)) {
        return -1;
    }
    var $v_0 = 0;
    if (!Srch.U.e($p0)) {
        for (var $v_1 = 0; $v_1 < Search.Configuration.CatalogItemPicker.$9.options.length; $v_1++) {
            var $v_2 = Search.Configuration.CatalogItemPicker.$9.options[$v_1];
            var $v_3 = $v_2.value + '/';
            if (!$p0.indexOf($v_3)) {
                return $v_1;
            }
        }
    }
    return $v_0;
}
Search.Configuration.CatalogItemPicker.getCatalogItemQuery = function Search_Configuration_CatalogItemPicker$getCatalogItemQuery() {
    var $v_0 = {};
    var $v_1 = '';
    if (!SP.ScriptUtility.isNullOrUndefined(Search.Configuration.CatalogItemPicker.$9)) {
        var $v_2 = Search.Configuration.CatalogItemPicker.$9.selectedIndex;
        var $v_3 = '';
        if ($v_2 >= 0) {
            $v_0[Search.Configuration.CatalogItemPicker.ConfigKeys.$2M] = Search.Configuration.CatalogItemPicker.get_$H().CatalogConfigInfo[$v_2].CatalogResultSource;
        }
        if (Srch.U.n($v_0[Search.Configuration.CatalogItemPicker.ConfigKeys.$2M])) {
            $v_3 = ' path:' + Search.Configuration.CatalogItemPicker.$9.value;
        }
        $v_1 = 'contentclass:sts_ListItem' + $v_3;
        $v_0[Search.Configuration.CatalogItemPicker.ConfigKeys.$1B] = Search.Configuration.CatalogItemPicker.$9.value;
    }
    if (!Srch.U.n(Search.Configuration.CatalogItemPicker.$y) && !Srch.U.e(Search.Configuration.CatalogItemPicker.$y.value)) {
        $v_1 += ' ' + Search.Configuration.CatalogItemPicker.$y.value;
    }
    if (!Srch.U.n(Search.Configuration.CatalogItemPicker.$U) && !Srch.U.e(Search.Configuration.CatalogItemPicker.$U.value)) {
        $v_0[Search.Configuration.CatalogItemPicker.ConfigKeys.$1A] = Search.Configuration.CatalogItemPicker.$U.value;
    }
    Search.Configuration.CatalogItemPicker.$I.PDQueryData = $v_0;
    return $v_1;
}
Search.Configuration.CatalogItemPicker.setCatalogItemPath = function Search_Configuration_CatalogItemPicker$setCatalogItemPath(itemPath) {
    if (!Srch.U.n(Search.Configuration.CatalogItemPicker.$U) && itemPath) {
        Search.Configuration.CatalogItemPicker.$U.value = itemPath;
    }
}


Search.Configuration.CatalogItemPicker.ItemPickerReturnType = function Search_Configuration_CatalogItemPicker_ItemPickerReturnType() {
}
Search.Configuration.CatalogItemPicker.ItemPickerReturnType.prototype = {
    queryTemplate: null,
    pickerState: null
}


Search.Configuration.CatalogItemPicker.ItemPickerState = function Search_Configuration_CatalogItemPicker_ItemPickerState() {
}
Search.Configuration.CatalogItemPicker.ItemPickerState.prototype = {
    QueryType: null,
    PDQueryData: null,
    Sorts: null,
    ClientType: null
}


Search.Configuration.CatalogItemPicker.CatalogItemPickerConfigData = function Search_Configuration_CatalogItemPicker_CatalogItemPickerConfigData() {
}
Search.Configuration.CatalogItemPicker.CatalogItemPickerConfigData.prototype = {
    CatalogConfigInfo: null
}


Search.Configuration.CatalogItemPicker.CatalogItemPickerCatalogData = function Search_Configuration_CatalogItemPicker_CatalogItemPickerCatalogData() {
}
Search.Configuration.CatalogItemPicker.CatalogItemPickerCatalogData.prototype = {
    CatalogName: null,
    CatalogFilters: null,
    CatalogUrl: null,
    CatalogResultSource: null,
    CatalogSelectedProperties: null
}


Search.Configuration.CatalogItemPicker.ConfigKeys = function Search_Configuration_CatalogItemPicker_ConfigKeys() {
}


Search.Configuration.ContentBySearch = function Search_Configuration_ContentBySearch() {
}
Search.Configuration.ContentBySearch.changeDisplayTemplate = function Search_Configuration_ContentBySearch$changeDisplayTemplate(targetCBSId, controlTemplateDDId, itemTemplateDDId) {
    if (!Srch.U.e(targetCBSId)) {
        var $v_0 = $get(targetCBSId + '_csr');
        var $v_1 = $get(itemTemplateDDId);
        var $v_2 = $get(controlTemplateDDId);
        var $v_3 = templatePropMappings;
        if (!Srch.U.n($v_0) && !Srch.U.n($v_1) && !Srch.U.n($v_2) && !Srch.U.n($v_3)) {
            var $v_4 = $v_0.control;
            if (!Srch.U.n($v_4)) {
                $v_4.set_renderTemplateId($v_2.value);
                var $v_5 = $v_1.value;
                $v_4.getDataProvider().set_bypassResultTypes(!!$v_5);
                $v_4.set_itemTemplateId($v_5);
                var $v_6 = $v_1.options[$v_1.selectedIndex];
                var $v_7 = $v_3[$v_4.get_itemTemplateId()];
                var $v_8 = Srch.Result.parsePropertyMappingsString($v_7);
                var $v_9 = Srch.Result.getSelectedPropertiesFromMappingDictionary($v_8);
                var $v_A = $v_4.getDataProvider();
                for (var $$arr_E = $v_9, $$len_F = $$arr_E.length, $$idx_G = 0; $$idx_G < $$len_F; ++$$idx_G) {
                    var $v_B = $$arr_E[$$idx_G];
                    Srch.U.appendArray($v_A.get_selectedProperties(), $v_B);
                }
                $v_4.refresh(new Srch.QueryState());
            }
        }
    }
}


Search.Configuration.QueryBuilderUtility = function Search_Configuration_QueryBuilderUtility() {
}
Search.Configuration.QueryBuilderUtility.removeAllChildren = function Search_Configuration_QueryBuilderUtility$removeAllChildren(element) {
    if (!SP.ScriptUtility.isNullOrUndefined(element)) {
        if (element.hasChildNodes()) {
            while (element.childNodes.length > 0) {
                element.removeChild(element.firstChild);
            }
        }
    }
}
Search.Configuration.QueryBuilderUtility.hide = function Search_Configuration_QueryBuilderUtility$hide(obj) {
    if (obj && obj.style) {
        Sys.UI.DomElement.addCssClass(obj, 'display-none');
    }
}
Search.Configuration.QueryBuilderUtility.show = function Search_Configuration_QueryBuilderUtility$show(obj) {
    if (obj && obj.style) {
        Sys.UI.DomElement.removeCssClass(obj, 'display-none');
    }
}
Search.Configuration.QueryBuilderUtility.isHidden = function Search_Configuration_QueryBuilderUtility$isHidden(obj) {
    if (obj && obj.style) {
        if (Sys.UI.DomElement.containsCssClass(obj, 'display-none') || obj.style.display === 'none') {
            return true;
        }
    }
    return false;
}
Search.Configuration.QueryBuilderUtility.showHide = function Search_Configuration_QueryBuilderUtility$showHide(obj) {
    if (Search.Configuration.QueryBuilderUtility.isHidden(obj)) {
        Search.Configuration.QueryBuilderUtility.show(obj);
    }
    else {
        Search.Configuration.QueryBuilderUtility.hide(obj);
    }
}
Search.Configuration.QueryBuilderUtility.enable = function Search_Configuration_QueryBuilderUtility$enable(obj) {
    if (!Srch.U.n(obj)) {
        obj.removeAttribute('disabled');
        var $v_0 = obj.firstChild;
        while ($v_0) {
            if ($v_0.nodeType === 1) {
                Search.Configuration.QueryBuilderUtility.enable($v_0);
            }
            $v_0 = $v_0.nextSibling;
        }
    }
}
Search.Configuration.QueryBuilderUtility.disable = function Search_Configuration_QueryBuilderUtility$disable(obj) {
    if (!Srch.U.n(obj)) {
        obj.setAttribute('disabled', 'disabled');
        var $v_0 = obj.firstChild;
        while ($v_0) {
            if ($v_0.nodeType === 1) {
                Search.Configuration.QueryBuilderUtility.disable($v_0);
            }
            $v_0 = $v_0.nextSibling;
        }
    }
}
Search.Configuration.QueryBuilderUtility.$31 = function Search_Configuration_QueryBuilderUtility$$31($p0) {
    if (!$p0 || typeof($p0) !== 'object') {
        return $p0;
    }
    if (Srch.U.isArray($p0)) {
        var $v_0 = $p0;
        var $v_1 = [];
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            Srch.U.appendArray($v_1, Search.Configuration.QueryBuilderUtility.$31($v_0[$v_2]));
        }
        return $v_1;
    }
    else {
        var $v_3 = {};
        var $$dict_5 = $p0;
        for (var $$key_6 in $$dict_5) {
            var $v_4 = { key: $$key_6, value: $$dict_5[$$key_6] };
            $v_3[$v_4.key] = Search.Configuration.QueryBuilderUtility.$31($v_4.value);
        }
        return $v_3;
    }
}
Search.Configuration.QueryBuilderUtility.$6 = function Search_Configuration_QueryBuilderUtility$$6($p0, $p1) {
    if (Srch.U.n($p0)) {
        Srch.U.trace(null, 'SetInnerText', 'elem is null');
    }
    if (Srch.U.n(document.body.innerText)) {
        $p0.textContent = $p1;
    }
    else {
        $p0.innerText = $p1;
    }
}
Search.Configuration.QueryBuilderUtility.$47 = function Search_Configuration_QueryBuilderUtility$$47($p0) {
    if (Srch.U.n($p0)) {
        Srch.U.trace(null, 'GetInnerText', 'elem is null');
    }
    if (Srch.U.n(document.body.innerText)) {
        return $p0.textContent;
    }
    return $p0.innerText;
}
Search.Configuration.QueryBuilderUtility.getNextElement = function Search_Configuration_QueryBuilderUtility$getNextElement(elem) {
    if (Srch.U.n(elem)) {
        return null;
    }
    else {
        var $v_0 = elem.nextSibling;
        while (!Srch.U.n($v_0) && $v_0.nodeType !== 1) {
            $v_0 = $v_0.nextSibling;
        }
        return $v_0;
    }
}
Search.Configuration.QueryBuilderUtility.getFirstChild = function Search_Configuration_QueryBuilderUtility$getFirstChild(elem) {
    if (Srch.U.n(elem)) {
        return null;
    }
    else {
        var $v_0 = elem.firstChild;
        while ($v_0 && $v_0.nodeType !== 1) {
            $v_0 = $v_0.nextSibling;
        }
        return $v_0;
    }
}
Search.Configuration.QueryBuilderUtility.stringify = function Search_Configuration_QueryBuilderUtility$stringify(obj) {
    return JSON.stringify(obj);
}
Search.Configuration.QueryBuilderUtility.parse = function Search_Configuration_QueryBuilderUtility$parse(json) {
    return JSON.parse(json);
}
Search.Configuration.QueryBuilderUtility.getClientElementById = function Search_Configuration_QueryBuilderUtility$getClientElementById(postfix) {
    return $get(Search.Configuration.QueryBuilder.get_$F() + postfix);
}
Search.Configuration.QueryBuilderUtility.addDynamicValue = function Search_Configuration_QueryBuilderUtility$addDynamicValue(value, name) {
    var $v_0 = document.createElement('OPTION');
    if ($v_0) {
        $v_0.innerHTML = name;
        $v_0.value = value;
    }
    return $v_0;
}


Search.Configuration.CustomTab = function Search_Configuration_CustomTab(name, e, tabid) {
    this.$$d_$4X_2 = Function.createDelegate(this, this.$4X_2);
    this.$$d_onTabClick = Function.createDelegate(this, this.onTabClick);
    Search.Configuration.CustomTab.initializeBase(this, [ e ]);
    this.$1D_2 = document.createElement('li');
    this.$2N_2 = document.createElement('h2');
    this.$8_2 = document.createElement('a');
    this.$8_2.tabIndex = 0;
    this.$8_2.href = 'javascript:void(0);';
    Search.Configuration.QueryBuilderUtility.$6(this.$8_2, name);
    this.$1D_2.setAttribute(Search.Configuration.CustomTab.$1K, Search.Configuration.CustomTab.$3I + ' qb-marginbottom3');
    this.$1D_2.setAttribute('id', tabid);
    this.$2N_2.setAttribute(Search.Configuration.CustomTab.$1K, Search.Configuration.CustomTab.$38);
    this.$8_2.setAttribute(Search.Configuration.CustomTab.$1K, Search.Configuration.CustomTab.$3H);
    Srch.U.addHandler(this.$8_2, 'click', this.$$d_onTabClick);
    Srch.U.addHandler(this.$8_2, 'keypress', this.$$d_$4X_2);
    this.$1D_2.appendChild(this.$2N_2);
    this.$2N_2.appendChild(this.$8_2);
    Search.Configuration.QueryBuilder.$3p(this.$1D_2);
}
Search.Configuration.CustomTab.prototype = {
    
    get_tabName: function Search_Configuration_CustomTab$get_tabName() {
        if (this.$8_2) {
            return Search.Configuration.QueryBuilderUtility.$47(this.$8_2);
        }
        else {
            return '';
        }
    },
    
    get_tabLink: function Search_Configuration_CustomTab$get_tabLink() {
        return this.$8_2;
    },
    
    $1D_2: null,
    $2N_2: null,
    $8_2: null,
    
    onTabClick: function Search_Configuration_CustomTab$onTabClick(e) {
        if (Search.Configuration.CustomTab.$13) {
            Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.CustomTab.$13.get_element());
            Sys.UI.DomElement.removeCssClass(Search.Configuration.CustomTab.$13.$8_2, Search.Configuration.CustomTab.$2q);
        }
        this.onTabLoad();
        Search.Configuration.QueryBuilderUtility.show(this.get_element());
        Search.Configuration.CustomTab.$13 = this;
        Sys.UI.DomElement.addCssClass(this.$8_2, Search.Configuration.CustomTab.$2q);
    },
    
    $4X_2: function Search_Configuration_CustomTab$$4X_2($p0) {
        if ($p0.charCode === 13) {
            this.onTabClick($p0);
        }
    },
    
    onTabLoad: function Search_Configuration_CustomTab$onTabLoad() {
    }
}


Search.Configuration.RefinerTab = function Search_Configuration_RefinerTab(name, e, tabid) {
    Search.Configuration.RefinerTab.initializeBase(this, [ name, e, tabid ]);
    Search.Configuration.RefinerTab.get_$18().add_resultRendered(Search.Configuration.RefinerTab.ensureRefiners);
    var $v_0 = Search.Configuration.QueryBuilder.$0.Filters;
    if (!Srch.U.n($v_0)) {
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            for (var $v_3 = 0; $v_3 < $v_2.t.length; $v_3++) {
                Search.Configuration.RefinerTab.$2w($v_2.n, $v_2.t[$v_3].toString(), $v_2.t[$v_3].toString(), false);
            }
        }
    }
}
Search.Configuration.RefinerTab.get_$18 = function Search_Configuration_RefinerTab$get_$18() {
    if (!Search.Configuration.RefinerTab.$29) {
        var $v_0 = filter;
        if (!Srch.U.n($v_0)) {
            Search.Configuration.RefinerTab.$29 = $v_0.control;
        }
    }
    return Search.Configuration.RefinerTab.$29;
}
Search.Configuration.RefinerTab.get_$1Q = function Search_Configuration_RefinerTab$get_$1Q() {
    if (!Search.Configuration.RefinerTab.$1P) {
        Search.Configuration.RefinerTab.$1P = $get('qb-collapselist2');
    }
    return Search.Configuration.RefinerTab.$1P;
}
Search.Configuration.RefinerTab.get_$V = function Search_Configuration_RefinerTab$get_$V() {
    if (!Search.Configuration.RefinerTab.$1M) {
        Search.Configuration.RefinerTab.$1M = Search.Configuration.QueryBuilderUtility.getClientElementById('collapsableProperties1');
    }
    return Search.Configuration.RefinerTab.$1M;
}
Search.Configuration.RefinerTab.get_$E = function Search_Configuration_RefinerTab$get_$E() {
    if (!Search.Configuration.RefinerTab.$2A) {
        Search.Configuration.RefinerTab.$2A = $get('refinementSpecificDropDown1');
    }
    return Search.Configuration.RefinerTab.$2A;
}
Search.Configuration.RefinerTab.get_$j = function Search_Configuration_RefinerTab$get_$j() {
    if (!Search.Configuration.RefinerTab.$1N) {
        Search.Configuration.RefinerTab.$1N = Search.Configuration.QueryBuilderUtility.getClientElementById('collapsableProperties2');
    }
    return Search.Configuration.RefinerTab.$1N;
}
Search.Configuration.RefinerTab.get_$L = function Search_Configuration_RefinerTab$get_$L() {
    if (!Search.Configuration.RefinerTab.$2B) {
        Search.Configuration.RefinerTab.$2B = $get('refinementSpecificDropDown2');
    }
    return Search.Configuration.RefinerTab.$2B;
}
Search.Configuration.RefinerTab.get_$3K = function Search_Configuration_RefinerTab$get_$3K() {
    if (!Search.Configuration.RefinerTab.$1r) {
        Search.Configuration.RefinerTab.$1r = Search.Configuration.QueryBuilderUtility.getClientElementById('numCollapsableResultsDropDown1');
    }
    return Search.Configuration.RefinerTab.$1r;
}
Search.Configuration.RefinerTab.get_$3L = function Search_Configuration_RefinerTab$get_$3L() {
    if (!Search.Configuration.RefinerTab.$1s) {
        Search.Configuration.RefinerTab.$1s = Search.Configuration.QueryBuilderUtility.getClientElementById('numCollapsableResultsDropDown2');
    }
    return Search.Configuration.RefinerTab.$1s;
}
Search.Configuration.RefinerTab.get_$1C = function Search_Configuration_RefinerTab$get_$1C() {
    if (!Search.Configuration.RefinerTab.$2E) {
        Search.Configuration.RefinerTab.$2E = $get('selectedRefiners');
    }
    return Search.Configuration.RefinerTab.$2E;
}
Search.Configuration.RefinerTab.get_$2e = function Search_Configuration_RefinerTab$get_$2e() {
    if (!Search.Configuration.RefinerTab.$1J) {
        Search.Configuration.RefinerTab.$1J = $get('availableRefiners');
    }
    return Search.Configuration.RefinerTab.$1J;
}
Search.Configuration.RefinerTab.get_$3S = function Search_Configuration_RefinerTab$get_$3S() {
    if (!Search.Configuration.RefinerTab.$2C) {
        Search.Configuration.RefinerTab.$2C = $get('RefineTabShowMore');
    }
    return Search.Configuration.RefinerTab.$2C;
}
Search.Configuration.RefinerTab.get_$1S = function Search_Configuration_RefinerTab$get_$1S() {
    if (!Search.Configuration.RefinerTab.$1R) {
        Search.Configuration.RefinerTab.$1R = $get('collapseDiv');
    }
    return Search.Configuration.RefinerTab.$1R;
}
Search.Configuration.RefinerTab.$2u = function Search_Configuration_RefinerTab$$2u($p0) {
    if (!$p0) {
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.RefinerTab.get_$1Q());
    }
    else {
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.RefinerTab.get_$1Q());
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.RefinerTab.get_$L());
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.RefinerTab.get_$j());
    }
    Search.Configuration.RefinerTab.updateCollapseSpecification();
}
Search.Configuration.RefinerTab.$3h = function Search_Configuration_RefinerTab$$3h($p0, $p1, $p2) {
    if ($p0.value === Search.Configuration.RefinerTab.$v) {
        Search.Configuration.RefinerTab.$3k($p1, $p2);
        Search.Configuration.QueryBuilderUtility.show($p1);
        Search.Configuration.QueryBuilderUtility.hide($p0);
        return true;
    }
    return false;
}
Search.Configuration.RefinerTab.$3X = function Search_Configuration_RefinerTab$$3X($p0, $p1, $p2, $p3) {
    if (Search.Configuration.RefinerTab.$4h($p0, $p1)) {
        Search.Configuration.RefinerTab.$3W($p1, $p2, $p0);
        Search.Configuration.QueryBuilderUtility.show($p1);
        Search.Configuration.QueryBuilderUtility.hide($p3);
    }
    else {
        Search.Configuration.RefinerTab.$3W($p3, $p2, $p0);
        Search.Configuration.QueryBuilderUtility.show($p3);
        Search.Configuration.QueryBuilderUtility.hide($p1);
    }
}
Search.Configuration.RefinerTab.$4h = function Search_Configuration_RefinerTab$$4h($p0, $p1) {
    var $v_0 = $p1.getElementsByTagName('option');
    var $v_1 = $v_0.length;
    for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
        var $v_3 = $v_0[$v_2];
        if ($v_3.value === $p0) {
            return true;
        }
    }
    return false;
}
Search.Configuration.RefinerTab.$3W = function Search_Configuration_RefinerTab$$3W($p0, $p1, $p2) {
    var $v_0 = $p2.split(':');
    $p0.value = $v_0[0];
    $p1.value = $v_0[1];
}
Search.Configuration.RefinerTab.$3M = function Search_Configuration_RefinerTab$$3M($p0, $p1) {
    var $v_0 = $p0.value;
    $p0.innerHTML = '';
    $p0.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue(Search.Configuration.RefinerTab.$h, Search.Configuration.RefinerTab.$h));
    var $$dict_3 = $p1;
    for (var $$key_4 in $$dict_3) {
        var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
        var $v_2 = Search.Configuration.QueryBuilderUtility.addDynamicValue($v_1.key, $v_1.value);
        $p0.appendChild($v_2);
    }
    $p0.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue(Search.Configuration.RefinerTab.$v, Search.Configuration.RefinerTab.$v));
    if (!SP.ScriptUtility.isUndefined($v_0) && !SP.ScriptUtility.isNullOrEmptyString($v_0)) {
        $p0.value = $v_0;
    }
}
Search.Configuration.RefinerTab.$4E = function Search_Configuration_RefinerTab$$4E($p0) {
    var $v_0 = {};
    for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        var $v_2 = $p0[$v_1]['RefinerName'];
        $v_0[$v_2] = $v_2;
    }
    return $v_0;
}
Search.Configuration.RefinerTab.$16 = function Search_Configuration_RefinerTab$$16($p0) {
    $p0.innerHTML = '';
    $p0.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue(Search.Configuration.RefinerTab.$h, Search.Configuration.RefinerTab.$h));
    $p0.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue(Search.Configuration.RefinerTab.$v, Search.Configuration.RefinerTab.$v));
}
Search.Configuration.RefinerTab.$35 = function Search_Configuration_RefinerTab$$35($p0, $p1, $p2) {
    if ($p0.value === Search.Configuration.RefinerTab.$3c) {
        Search.Configuration.RefinerTab.$3k($p1, $p2);
        Search.Configuration.QueryBuilderUtility.show($p1);
        Search.Configuration.QueryBuilderUtility.hide($p0);
        return true;
    }
    return false;
}
Search.Configuration.RefinerTab.$3k = function Search_Configuration_RefinerTab$$3k($p0, $p1) {
    var $v_0 = $p0.getElementsByTagName('option');
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1];
        if ($v_2.value === $p1) {
            $p0.value = $p1;
            return;
        }
    }
    $p0.value = Search.Configuration.RefinerTab.$h;
}
Search.Configuration.RefinerTab.$1m = function Search_Configuration_RefinerTab$$1m($p0) {
    if (!Srch.U.e(Search.Configuration.QueryBuilder.$0.CollapseSpecification)) {
        var $v_0 = Search.Configuration.QueryBuilder.$0.CollapseSpecification;
        if (SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            return Search.Configuration.RefinerTab.$h;
        }
        var $v_1 = $v_0.trim().split(' ');
        if ($v_1.length >= $p0) {
            var $v_2 = $v_1[$p0 - 1];
            var $v_3 = $v_2.split(':');
            return $v_3[0];
        }
    }
    return Search.Configuration.RefinerTab.$h;
}
Search.Configuration.RefinerTab.onSelectCollapsing = function Search_Configuration_RefinerTab$onSelectCollapsing() {
    var $v_0 = Search.Configuration.RefinerTab.$1m(1);
    var $v_1 = Search.Configuration.RefinerTab.$35(Search.Configuration.RefinerTab.get_$V(), Search.Configuration.RefinerTab.get_$E(), $v_0);
    if ($v_1 && !Search.Configuration.RefinerTab.get_$E().selectedIndex) {
        Search.Configuration.RefinerTab.$2u(Search.Configuration.RefinerTab.get_$E().selectedIndex);
    }
    if (!$v_1) {
        Search.Configuration.RefinerTab.$2u(Search.Configuration.RefinerTab.get_$V().selectedIndex);
    }
}
Search.Configuration.RefinerTab.addRefiner = function Search_Configuration_RefinerTab$addRefiner() {
    if (Search.Configuration.RefinerTab.get_$2e().options.length > 0) {
        var $v_0 = Search.Configuration.RefinerTab.get_$2e().options[Search.Configuration.RefinerTab.get_$2e().selectedIndex];
        if (!Srch.U.n($v_0)) {
            var $v_1 = $v_0.parentNode;
            if (!Srch.U.n($v_1)) {
                var $v_2 = STSHtmlDecode($v_1.getAttribute('label'));
                if (!Srch.U.n($v_2)) {
                    Search.Configuration.RefinerTab.$2w($v_2, STSHtmlDecode($v_0.value), $v_0.text, true);
                }
            }
        }
    }
}
Search.Configuration.RefinerTab.$2w = function Search_Configuration_RefinerTab$$2w($p0, $p1, $p2, $p3) {
    var $v_0 = document.createElement('OPTION');
    $v_0.value = $p1;
    $v_0.text = $p2;
    $v_0.setAttribute('data-refinername', $p0);
    if (!Search.Configuration.RefinerTab.get_$18().hasRefinementFilter($p0, $p1) && $p3) {
        Search.Configuration.RefinerTab.get_$18().addRefinementFilter($p0, $p1);
    }
}
Search.Configuration.RefinerTab.removeRefiner = function Search_Configuration_RefinerTab$removeRefiner() {
    var $v_0 = Search.Configuration.RefinerTab.get_$1C().options[Search.Configuration.RefinerTab.get_$1C().selectedIndex];
    if (!Srch.U.n($v_0)) {
        Search.Configuration.RefinerTab.get_$1C().removeChild($v_0);
        Search.Configuration.RefinerTab.get_$18().removeRefinementFilter(($v_0.getAttribute('data-refinername')), STSHtmlDecode($v_0.value));
    }
}
Search.Configuration.RefinerTab.onSelectCollapsing2 = function Search_Configuration_RefinerTab$onSelectCollapsing2() {
    var $v_0 = Search.Configuration.RefinerTab.$1m(2);
    var $v_1 = Search.Configuration.RefinerTab.$35(Search.Configuration.RefinerTab.get_$j(), Search.Configuration.RefinerTab.get_$L(), $v_0);
    if (!$v_1 || !Search.Configuration.RefinerTab.get_$L().selectedIndex) {
        Search.Configuration.RefinerTab.updateCollapseSpecification();
    }
}
Search.Configuration.RefinerTab.updateCollapseSpecification = function Search_Configuration_RefinerTab$updateCollapseSpecification() {
    var $v_0 = Search.Configuration.RefinerTab.$3F(Search.Configuration.RefinerTab.get_$E(), Search.Configuration.RefinerTab.get_$V());
    var $v_1 = Search.Configuration.RefinerTab.$3F(Search.Configuration.RefinerTab.get_$L(), Search.Configuration.RefinerTab.get_$j());
    if (Search.Configuration.RefinerTab.$2k($v_0)) {
        Search.Configuration.QueryBuilder.$0.CollapseSpecification = '';
        Search.Configuration.RefinerTab.$16(Search.Configuration.RefinerTab.get_$E());
        Search.Configuration.RefinerTab.$16(Search.Configuration.RefinerTab.get_$L());
    }
    else {
        var $v_2 = $v_0.value;
        var $v_3 = Search.Configuration.RefinerTab.get_$3K();
        var $v_4 = $v_2 + ':' + $v_3.value;
        if (!Search.Configuration.RefinerTab.$2k($v_1)) {
            var $v_5 = $v_1.value;
            var $v_6 = Search.Configuration.RefinerTab.get_$3L();
            $v_4 += ' ' + $v_5 + ':' + $v_6.value;
        }
        Search.Configuration.QueryBuilder.$0.CollapseSpecification = $v_4;
    }
    if (Search.Configuration.RefinerTab.$2k($v_1)) {
        Search.Configuration.RefinerTab.$16(Search.Configuration.RefinerTab.get_$L());
    }
    Search.Configuration.QueryBuilder.updateResult();
}
Search.Configuration.RefinerTab.updateRefinementSpecificCollapse1 = function Search_Configuration_RefinerTab$updateRefinementSpecificCollapse1() {
    var $v_0 = Search.Configuration.RefinerTab.$1m(1);
    var $v_1 = Search.Configuration.RefinerTab.$3h(Search.Configuration.RefinerTab.get_$E(), Search.Configuration.RefinerTab.get_$V(), $v_0);
    if (!$v_1) {
        Search.Configuration.RefinerTab.$2u(Search.Configuration.RefinerTab.get_$E().selectedIndex);
    }
}
Search.Configuration.RefinerTab.updateRefinementSpecificCollapse2 = function Search_Configuration_RefinerTab$updateRefinementSpecificCollapse2() {
    var $v_0 = Search.Configuration.RefinerTab.$1m(2);
    var $v_1 = Search.Configuration.RefinerTab.$3h(Search.Configuration.RefinerTab.get_$L(), Search.Configuration.RefinerTab.get_$j(), $v_0);
    if (!$v_1) {
        Search.Configuration.RefinerTab.updateCollapseSpecification();
    }
}
Search.Configuration.RefinerTab.ensureRefiners = function Search_Configuration_RefinerTab$ensureRefiners(sender, e) {
    var $v_0 = Search.Configuration.QueryBuilder.get_$C().get_dataProvider().get_currentQueryState().r;
    var $v_1 = Search.Configuration.RefinerTab.get_$1C().options;
    if (!Srch.U.n($v_0) && $v_0.length > 0) {
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2];
            var $v_4 = $v_3.t;
            if (!Srch.U.n($v_4) && $v_4.length > 0) {
                for (var $v_5 = 0; $v_5 < $v_4.length; $v_5++) {
                    var $v_6 = $v_4[$v_5];
                    var $v_7 = false;
                    for (var $v_8 = 0; $v_8 < $v_1.length; $v_8++) {
                        var $v_9 = $v_1[$v_8];
                        if (STSHtmlDecode($v_9.value) === $v_6) {
                            $v_7 = true;
                            break;
                        }
                    }
                    if (!$v_7) {
                        var $v_A = document.createElement('OPTION');
                        $v_A.value = SP.Utilities.HttpUtility.htmlEncode($v_6);
                        $v_A.innerHTML = SP.Utilities.HttpUtility.htmlEncode($v_6);
                        $v_A.title = $v_6;
                        $v_A.setAttribute('data-refinername', $v_3.n);
                        Search.Configuration.RefinerTab.get_$1C().appendChild($v_A);
                    }
                }
            }
        }
    }
}
Search.Configuration.RefinerTab.updateCollapseSpecificationOnResultReady = function Search_Configuration_RefinerTab$updateCollapseSpecificationOnResultReady(sender, e) {
    var $v_0 = e;
    var $v_1 = $v_0.result;
    var $v_2 = null;
    if (!Srch.U.n($v_1)) {
        $v_2 = $v_1.ResultTables;
    }
    if (!Srch.U.n($v_2) && $v_2.length > 0) {
        var $v_3 = null;
        for (var $v_4 = 0; $v_4 < $v_2.length; $v_4++) {
            var $v_5 = $v_2[$v_4];
            if (Srch.U.isTableTypeof($v_5, Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.refinementResults)) {
                $v_3 = $v_5;
            }
        }
        if (!Srch.U.n($v_3)) {
            var $v_6 = $v_3['ResultRows'];
            var $v_7 = Search.Configuration.RefinerTab.$4E($v_6);
            Search.Configuration.RefinerTab.$3M(Search.Configuration.RefinerTab.get_$E(), $v_7);
            Search.Configuration.RefinerTab.$3M(Search.Configuration.RefinerTab.get_$L(), $v_7);
            return;
        }
    }
    Search.Configuration.RefinerTab.$16(Search.Configuration.RefinerTab.get_$E());
    Search.Configuration.RefinerTab.$16(Search.Configuration.RefinerTab.get_$L());
}
Search.Configuration.RefinerTab.$2k = function Search_Configuration_RefinerTab$$2k($p0) {
    return (!$p0.selectedIndex || $p0.selectedIndex === $p0.options.length - 1);
}
Search.Configuration.RefinerTab.$3F = function Search_Configuration_RefinerTab$$3F($p0, $p1) {
    if (!Search.Configuration.QueryBuilderUtility.isHidden($p0)) {
        return $p0;
    }
    if (!Search.Configuration.QueryBuilderUtility.isHidden($p1)) {
        return $p1;
    }
    return null;
}
Search.Configuration.RefinerTab.switchAdvanced = function Search_Configuration_RefinerTab$switchAdvanced() {
    if (Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.RefinerTab.get_$1S())) {
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.RefinerTab.get_$1S());
        Search.Configuration.QueryBuilderUtility.$6(Search.Configuration.RefinerTab.get_$3S(), Srch.Res.qb_TestQueryTab_HideAdvanced);
    }
    else {
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.RefinerTab.get_$1S());
        Search.Configuration.QueryBuilderUtility.$6(Search.Configuration.RefinerTab.get_$3S(), Srch.Res.qb_TestQueryTab_ShowAdvanced);
    }
}
Search.Configuration.RefinerTab.prototype = {
    
    onTabLoad: function Search_Configuration_RefinerTab$onTabLoad() {
        Search.Configuration.CustomTab.prototype.onTabLoad.call(this);
        Search.Configuration.QueryBuilder.updateResult();
        var $v_0 = Search.Configuration.QueryBuilder.$0.CollapseSpecification;
        if (!Srch.U.e($v_0) && !SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            var $v_1 = $v_0.trim().split(' ');
            Search.Configuration.RefinerTab.$3X($v_1[0], Search.Configuration.RefinerTab.get_$E(), Search.Configuration.RefinerTab.get_$3K(), Search.Configuration.RefinerTab.get_$V());
            if ($v_1.length === 2) {
                Search.Configuration.RefinerTab.$3X($v_1[1], Search.Configuration.RefinerTab.get_$L(), Search.Configuration.RefinerTab.get_$3L(), Search.Configuration.RefinerTab.get_$j());
            }
            else {
                Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.RefinerTab.get_$j());
                Search.Configuration.QueryBuilderUtility.show(Search.Configuration.RefinerTab.get_$L());
            }
            if (Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.RefinerTab.get_$1S()) && Search.Configuration.RefinerTab.get_$V().selectedIndex) {
                Search.Configuration.RefinerTab.switchAdvanced();
            }
        }
        else {
            if (Search.Configuration.RefinerTab.get_$V().selectedIndex) {
                Search.Configuration.QueryBuilderUtility.show(Search.Configuration.RefinerTab.get_$V());
                Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.RefinerTab.get_$E());
                Search.Configuration.QueryBuilderUtility.show(Search.Configuration.RefinerTab.get_$1Q());
                Search.Configuration.QueryBuilderUtility.show(Search.Configuration.RefinerTab.get_$L());
                Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.RefinerTab.get_$j());
            }
            else {
                Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.RefinerTab.get_$V());
                Search.Configuration.QueryBuilderUtility.show(Search.Configuration.RefinerTab.get_$E());
                if (!Search.Configuration.RefinerTab.get_$E().selectedIndex) {
                    Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.RefinerTab.get_$1Q());
                }
            }
        }
    }
}


Search.Configuration.QueryBuilder = function Search_Configuration_QueryBuilder() {
}
Search.Configuration.QueryBuilder.get_$C = function Search_Configuration_QueryBuilder$get_$C() {
    if (!Search.Configuration.QueryBuilder.$1y) {
        var $v_0 = previewResult;
        if (!Srch.U.n($v_0)) {
            Search.Configuration.QueryBuilder.$1y = $v_0.control;
        }
    }
    return Search.Configuration.QueryBuilder.$1y;
}
Search.Configuration.QueryBuilder.get_$H = function Search_Configuration_QueryBuilder$get_$H() {
    if (!Search.Configuration.QueryBuilder.$5) {
        var $v_0 = qbConfigData;
        var $v_1 = $v_0.value;
        if (!Srch.U.e($v_1)) {
            Search.Configuration.QueryBuilder.$5 = Sys.Serialization.JavaScriptSerializer.deserialize($v_1);
        }
    }
    return Search.Configuration.QueryBuilder.$5;
}
Search.Configuration.QueryBuilder.get_$R = function Search_Configuration_QueryBuilder$get_$R() {
    if (!Search.Configuration.QueryBuilder.$19) {
        var $v_0 = Search.Configuration.QueryBuilder.get_$H();
        var $v_1 = $v_0.ResultSourceData;
        if (!Srch.U.n($v_1)) {
            Search.Configuration.QueryBuilder.$19 = {};
            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];
                Search.Configuration.QueryBuilder.$19[$v_3.Id.toLowerCase()] = $v_3;
            }
        }
    }
    return Search.Configuration.QueryBuilder.$19;
}
Search.Configuration.QueryBuilder.get_$F = function Search_Configuration_QueryBuilder$get_$F() {
    if (!Search.Configuration.QueryBuilder.$1L) {
        Search.Configuration.QueryBuilder.$1L = GetClientIdPrefix();
    }
    return Search.Configuration.QueryBuilder.$1L;
}
Search.Configuration.QueryBuilder.get_$T = function Search_Configuration_QueryBuilder$get_$T() {
    if (!Search.Configuration.QueryBuilder.$2a) {
        Search.Configuration.QueryBuilder.$2a = $get('createownquerycontrolblock');
    }
    return Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.QueryBuilder.$2a);
}
Search.Configuration.QueryBuilder.get_$1V = function Search_Configuration_QueryBuilder$get_$1V() {
    if (!Search.Configuration.QueryBuilder.$23) {
        Search.Configuration.QueryBuilder.$23 = $get('QueryBox');
    }
    return (Search.Configuration.QueryBuilder.$23).value;
}
Search.Configuration.QueryBuilder.get_$34 = function Search_Configuration_QueryBuilder$get_$34() {
    var $v_0 = Search.Configuration.QueryBuilder.get_$R();
    return $v_0[Search.Configuration.QueryHelperTab.getCurrentResultSourceId()];
}
Search.Configuration.QueryBuilder.get_$4c = function Search_Configuration_QueryBuilder$get_$4c() {
    if (Search.Configuration.QueryBuilder.get_$T() && !Search.Configuration.QueryBuilderUtility.isHidden($get('filtercontrolblock'))) {
        return ($get('filterId')).value;
    }
    return '';
}
Search.Configuration.QueryBuilder.get_$2m = function Search_Configuration_QueryBuilder$get_$2m() {
    if (!Search.Configuration.QueryBuilder.$1w) {
        Search.Configuration.QueryBuilder.$1w = $get('preview');
    }
    return Search.Configuration.QueryBuilder.$1w;
}
Search.Configuration.QueryBuilder.get_$2n = function Search_Configuration_QueryBuilder$get_$2n() {
    if (!Search.Configuration.QueryBuilder.$1z) {
        Search.Configuration.QueryBuilder.$1z = $get('preview-waiting');
    }
    return Search.Configuration.QueryBuilder.$1z;
}
Search.Configuration.QueryBuilder.get_$2g = function Search_Configuration_QueryBuilder$get_$2g() {
    if (!Search.Configuration.QueryBuilder.$1j) {
        Search.Configuration.QueryBuilder.$1j = $get('filter-div');
    }
    return Search.Configuration.QueryBuilder.$1j;
}
Search.Configuration.QueryBuilder.get_$2h = function Search_Configuration_QueryBuilder$get_$2h() {
    if (!Search.Configuration.QueryBuilder.$1k) {
        Search.Configuration.QueryBuilder.$1k = $get('filter-waiting');
    }
    return Search.Configuration.QueryBuilder.$1k;
}
Search.Configuration.QueryBuilder.get_$n = function Search_Configuration_QueryBuilder$get_$n() {
    if (!Search.Configuration.QueryBuilder.$1p) {
        Search.Configuration.QueryBuilder.$1p = $get('invalidSourceMessage');
    }
    return Search.Configuration.QueryBuilder.$1p;
}
Search.Configuration.QueryBuilder.launchQueryBuilder = function Search_Configuration_QueryBuilder$launchQueryBuilder(rawUrl, listId, itemId, numOfItems, termId, termSetId, termStoreId, mode, inputFieldName) {
    var $v_0 = Search.Configuration.QueryBuilder.$3D();
    $v_0.url = SP.Utilities.HttpUtility.urlPathEncode(SP.Utilities.VersionUtility.getLayoutsPageUrl('QueryBuilder.aspx'));
    $v_0.dialogReturnValueCallback = function($p1_0, $p1_1) {
        Search.Configuration.QueryBuilder.onQueryBuilderReturn($p1_0, $p1_1, inputFieldName);
    };
    var $v_1 = {};
    var $v_2 = $get(inputFieldName);
    var $v_3 = Search.Configuration.QueryBuilderUtility.parse($v_2.value);
    $v_1['QueryBuilderState'] = $v_3;
    $v_1['QueryBuilderMode'] = mode;
    $v_0.url += '?ListId=' + listId + '&ID=' + itemId + '&RawUrl=' + rawUrl;
    if (!Srch.U.e(termId) && !Srch.U.e(termSetId) && !Srch.U.e(termStoreId)) {
        $v_0.url += '&termId=' + termId + '&termSetId=' + termSetId + '&termStoreId=' + termStoreId;
    }
    var $v_4 = window.location.search.substring(1, window.location.search.length);
    if (!SP.ScriptUtility.isNullOrEmptyString($v_4)) {
        $v_0.url += '&' + $v_4;
    }
    $v_0.args = $v_1;
    var $v_5 = SP.UI.ModalDialog.showModalDialog($v_0);
}
Search.Configuration.QueryBuilder.launchResultSourceQueryBuilder = function Search_Configuration_QueryBuilder$launchResultSourceQueryBuilder(state, level) {
    Search.Configuration.QueryBuilder.launchCustomQueryBuilder(state, null, Search.Configuration.QueryBuilderMode.toString(2), level);
}
Search.Configuration.QueryBuilder.launchQueryRuleSubstrateQueryBuilder = function Search_Configuration_QueryBuilder$launchQueryRuleSubstrateQueryBuilder(state, additionalFilters, level) {
    if (Srch.U.e(state.QueryTemplate)) {
        state.QueryTemplate = '{searchTerms}';
    }
    Search.Configuration.QueryBuilder.launchCustomQueryBuilder(state, additionalFilters, Search.Configuration.QueryBuilderMode.toString(3), level);
}
Search.Configuration.QueryBuilder.launchQueryRuleResultBlockQueryBuilder = function Search_Configuration_QueryBuilder$launchQueryRuleResultBlockQueryBuilder(state, additionalFilters, level) {
    Search.Configuration.QueryBuilder.launchCustomQueryBuilder(state, additionalFilters, Search.Configuration.QueryBuilderMode.toString(4), level);
}
Search.Configuration.QueryBuilder.launchCustomQueryBuilder = function Search_Configuration_QueryBuilder$launchCustomQueryBuilder(state, additionalFilters, mode, level) {
    if (Srch.U.n(state)) {
        state = new Search.Configuration.QueryBuilderState();
    }
    var $v_0 = {};
    $v_0['QueryBuilderState'] = state;
    $v_0['QueryBuilderMode'] = mode;
    if (!Srch.U.n(additionalFilters)) {
        $v_0['QueryBuilderAdditionalFilters'] = additionalFilters;
    }
    var $v_1 = Search.Configuration.QueryBuilder.$3D();
    $v_1.url = SP.Utilities.VersionUtility.getLayoutsPageUrl('QueryBuilder.aspx');
    if (!Srch.U.n(level) && level.length > 0) {
        $v_1.url += '?level=' + level;
    }
    $v_1.dialogReturnValueCallback = Search.Configuration.QueryBuilder.onCreateMyOwnQueryBuilderReturn;
    $v_1.args = $v_0;
    var $v_2 = SP.UI.ModalDialog.showModalDialog($v_1);
}
Search.Configuration.QueryBuilder.cancelDialog = function Search_Configuration_QueryBuilder$cancelDialog() {
    var $v_0 = SP.UI.ModalDialog.get_childDialog();
    if ($v_0) {
        $v_0.close(0);
    }
}
Search.Configuration.QueryBuilder.onQueryBuilderReturn = function Search_Configuration_QueryBuilder$onQueryBuilderReturn(dialogResult, returnObject, inputFieldName) {
    if (dialogResult === 1) {
        var $v_0 = returnObject;
        var $v_1 = $get(inputFieldName);
        $v_1.value = Search.Configuration.QueryBuilderUtility.stringify($v_0);
    }
}
Search.Configuration.QueryBuilder.onCreateMyOwnQueryBuilderReturn = function Search_Configuration_QueryBuilder$onCreateMyOwnQueryBuilderReturn(dialogResult, returnObject) {
    if (dialogResult === 1) {
        var $v_0 = returnObject;
        ParseQueryBuilderResult($v_0);;
    }
}
Search.Configuration.QueryBuilder.onOKButtonClicked = function Search_Configuration_QueryBuilder$onOKButtonClicked() {
    Search.Configuration.QueryBuilder.$0.QueryTemplate = Search.Configuration.QueryHelperTab.getQueryTemplate();
    Search.Configuration.QueryBuilder.$0.Filters = Search.Configuration.QueryBuilder.get_$C().get_dataProvider().get_currentQueryState().r;
    Search.Configuration.QueryBuilder.$4q();
    if (Search.Configuration.QueryHelperTab.getCurrentResultSourceId().toLowerCase() !== '0'.toLowerCase()) {
        var $v_0 = Search.Configuration.QueryHelperTab.getCurrentResultSourceData();
        Search.Configuration.QueryBuilder.$0.SourceId = $v_0.Id;
        Search.Configuration.QueryBuilder.$0.SourceName = $v_0.Name;
        Search.Configuration.QueryBuilder.$0.SourceLevel = $v_0.Level;
    }
    if (Search.Configuration.QueryBuilder.get_$T()) {
        Search.Configuration.QueryBuilder.$0.Sorts = null;
        Search.Configuration.QueryBuilder.$0.RankModelId = null;
    }
    SP.UI.ModalDialog.get_childDialog().set_returnValue(Search.Configuration.QueryBuilder.$0);
    SP.UI.ModalDialog.get_childDialog().close(1);
}
Search.Configuration.QueryBuilder.$4q = function Search_Configuration_QueryBuilder$$4q() {
    var $$dict_0 = Search.Configuration.QueryHelperTab.getBoundVariableValues();
    for (var $$key_1 in $$dict_0) {
        var $v_0 = { key: $$key_1, value: $$dict_0[$$key_1] };
        var $$dict_3 = Search.Configuration.QueryBuilder.$0.Properties;
        for (var $$key_4 in $$dict_3) {
            var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
            if ($v_1.key.toLowerCase() === $v_0.key.toLowerCase()) {
                delete Search.Configuration.QueryBuilder.$0.Properties[$v_1.key];
            }
        }
        if ($v_0.value) {
            Search.Configuration.QueryBuilder.$0.Properties[$v_0.key] = $v_0.value;
        }
    }
}
Search.Configuration.QueryBuilder.onLoad = function Search_Configuration_QueryBuilder$onLoad() {
    EnsureScript('SP.UI.Dialog.js', TypeofFullName('SP.UI.ModalDialog'), Search.Configuration.QueryBuilder.onLoadInternal);
}
Search.Configuration.QueryBuilder.onLoadInternal = function Search_Configuration_QueryBuilder$onLoadInternal() {
    if (SP.ScriptUtility.isNullOrUndefined(SP.UI.ModalDialog.get_childDialog())) {
        return;
    }
    var $v_0 = SP.UI.ModalDialog.get_childDialog().get_args();
    if ($v_0) {
        if (!Srch.U.n($v_0['QueryBuilderCustomLoad'])) {
            eval($v_0['QueryBuilderCustomLoad']);
            return;
        }
        var $v_2 = $get('OkButton');
        var $v_3 = $get('CancelButton');
        var $v_4 = $get('cancelcontainer');
        var $v_5 = $get('okcontainer');
        if (Search.Configuration.QueryBuilder.get_$H().Error) {
            Search.Configuration.QueryBuilderUtility.show($v_4);
            $v_3.value = $v_2.value;
            return;
        }
        Search.Configuration.QueryBuilderUtility.show($v_4);
        Search.Configuration.QueryBuilderUtility.show($v_5);
        if (!Srch.U.n($v_0['QueryBuilderMode'])) {
            Search.Configuration.QueryBuilder.$1 = $v_0['QueryBuilderMode'];
        }
        else {
            Search.Configuration.QueryBuilder.$1 = Search.Configuration.QueryBuilderMode.toString(0);
        }
        Search.Configuration.QueryBuilder.$1 = Search.Configuration.QueryBuilder.$1.toLowerCase();
        if (Search.Configuration.QueryBuilder.$1.toLowerCase() !== Search.Configuration.QueryBuilderMode.toString(0).toLowerCase()) {
            Search.Configuration.QueryBuilderUtility.hide($get('contextualHelpLink'));
        }
        if (Search.Configuration.QueryBuilder.$1.toLowerCase() !== Search.Configuration.QueryBuilderMode.toString(3).toLowerCase() && Search.Configuration.QueryBuilder.$1.toLowerCase() !== Search.Configuration.QueryBuilderMode.toString(4).toLowerCase()) {
            var $v_8 = Search.Configuration.QueryBuilderUtility.getClientElementById('searchSourceDropDown');
            $v_8.remove(0);
        }
        if (!Srch.U.n($v_0['QueryBuilderAdditionalFilters'])) {
            Search.Configuration.QueryBuilder.$q = $v_0['QueryBuilderAdditionalFilters'];
        }
        if (Srch.U.n($v_0['QueryBuilderState'])) {
            SP.UI.ModalDialog.get_childDialog().close(-1);
            return;
        }
        Search.Configuration.QueryBuilder.$0 = $v_0['QueryBuilderState'];
        if (Srch.U.n(Search.Configuration.QueryBuilder.$0.Properties)) {
            Search.Configuration.QueryBuilder.$0.Properties = {};
        }
        Search.Configuration.QueryBuilder.$4I();
        Search.Configuration.QueryBuilder.$4u();
        var $v_6 = $get('QueryHelperTab');
        if (!Srch.U.n($v_6)) {
            Search.Configuration.QueryBuilder.$3O = new Search.Configuration.QueryHelperTab(Srch.Res.qb_Tab_QueryHelper, Search.Configuration.QueryBuilder.$0, $v_6, 'BASICS');
            if (Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(0).toLowerCase() || Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(1).toLowerCase() || Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(5).toLowerCase()) {
                var $v_A = $get('RefinerByTab');
                var $v_B = new Search.Configuration.RefinerTab(Srch.Res.qb_Tab_FilterBy, $v_A, 'REFINERS');
            }
            if (Search.Configuration.QueryBuilder.$1.toLowerCase() !== Search.Configuration.QueryBuilderMode.toString(1).toLowerCase()) {
                var $v_C = $get('SortByTab');
                Search.Configuration.QueryBuilder.$3g = new Search.Configuration.SortTab(Srch.Res.qb_Tab_SortBy, $v_C, 'SORTING');
                Search.Configuration.QueryBuilder.$b = $get('SORTING');
                if (Search.Configuration.QueryHelperTab.isPredefinedControlsVisible()) {
                    Search.Configuration.QueryBuilder.$2j(Search.Configuration.QueryBuilder.$b);
                }
            }
            Search.Configuration.QueryBuilderUtility.show($get('querytypeselection'));
            var $v_9 = Search.Configuration.QueryBuilderUtility.getClientElementById('resultSourceWithQTDropDown');
            if (!Srch.U.e(Search.Configuration.QueryBuilder.$0.SourceId)) {
                if (!Srch.U.n(Search.Configuration.QueryBuilder.$0.Properties['FillIn']) && Search.Configuration.QueryBuilder.$0.Properties['FillIn'].toString().toLowerCase() === 'true') {
                    if (Search.Configuration.QueryBuilder.$0.Properties['RecsSourceId']) {
                        $v_9.value = Search.Configuration.QueryBuilder.$0.Properties['RecsSourceId'];
                    }
                    else {
                        $v_9.value = 'ec675252-14fa-4fbe-84dd-8d098ed74181';
                    }
                }
                else {
                    $v_9.value = Search.Configuration.QueryBuilder.$0.SourceId;
                }
            }
            if (Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(1).toLowerCase() || Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(2).toLowerCase()) {
                var $v_D = $get('querytypeselection');
                Srch.U.ensureCSSClassNameNotExist($v_D, 'form');
                Search.Configuration.QueryBuilderUtility.hide($v_D);
            }
            if (Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(3).toLowerCase() || Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(4).toLowerCase() || Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(2).toLowerCase()) {
                var $v_E = $get('pdQueryListDiv');
                Srch.U.ensureCSSClassNameNotExist($v_E, 'form');
                Search.Configuration.QueryBuilderUtility.hide($v_E);
            }
            if (Search.Configuration.QueryBuilder.$1.toLowerCase() !== Search.Configuration.QueryBuilderMode.toString(2).toLowerCase() && Search.Configuration.QueryBuilder.$1.toLowerCase() !== Search.Configuration.QueryBuilderMode.toString(3).toLowerCase() && Search.Configuration.QueryBuilder.$1.toLowerCase() !== Search.Configuration.QueryBuilderMode.toString(4).toLowerCase()) {
                var $v_F = $get('SettingsTab');
                Search.Configuration.QueryBuilder.$3Z = new Search.Configuration.SettingsTab(Srch.Res.qb_Tab_Settings, $v_F, 'SETTINGS');
            }
        }
        var $v_7 = $get('TestQueryTab');
        Search.Configuration.QueryBuilder.$3j = new Search.Configuration.TestQueryTab(Srch.Res.qb_Tab_TestQuery, $v_7, 'TEST');
    }
    Search.Configuration.QueryBuilder.get_$C().get_dataProvider().add_queryIssuing(Search.Configuration.QueryBuilder.$4f);
    Search.Configuration.QueryBuilder.get_$C().get_dataProvider().add_queryIssuing(Search.Configuration.TestQueryTab.queryIssuing);
    Search.Configuration.QueryBuilder.get_$C().get_dataProvider().add_resultReady(Search.Configuration.RefinerTab.updateCollapseSpecificationOnResultReady);
    Search.Configuration.QueryBuilder.get_$C().get_dataProvider().add_resultReady(Search.Configuration.TestQueryTab.resultReady);
    Search.Configuration.QueryBuilder.get_$C().add_resultRendered(Search.Configuration.QueryBuilder.$4d);
    Search.Configuration.RefinerTab.get_$18().add_resultRendered(Search.Configuration.QueryBuilder.$4i);
    if (Search.Configuration.QueryBuilder.get_$T()) {
        Search.Configuration.QueryBuilder.$3u();
    }
    var $v_1 = Search.Configuration.QueryBuilder.$33();
    Search.Configuration.QueryBuilder.get_$C().get_dataProvider().set_initialQueryState($v_1);
    Search.Configuration.TestQueryTab.refreshTemplateVariables(null);
}
Search.Configuration.QueryBuilder.$4u = function Search_Configuration_QueryBuilder$$4u() {
    if (!Srch.U.n(Search.Configuration.QueryBuilder.$0.SourceId)) {
        Search.Configuration.QueryBuilder.$0.SourceId = Search.Configuration.QueryBuilder.$0.SourceId.toLowerCase();
    }
    if (Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(0).toLowerCase() || Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(5).toLowerCase()) {
        Search.Configuration.QueryBuilder.$3B();
        if (Srch.U.n(Search.Configuration.QueryBuilder.$0.SourceId)) {
            Search.Configuration.QueryBuilder.$0.SourceId = Search.Configuration.QueryBuilder.get_$H().DefaultResultSourceId;
        }
        if (!Search.Configuration.QueryBuilder.get_$R()[Search.Configuration.QueryBuilder.$0.SourceId]) {
            Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryBuilder.get_$n());
            Search.Configuration.QueryBuilder.$0.SourceId = '8413cd39-2156-4e00-b54d-11efd9abdb89';
        }
    }
    else if (Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(1).toLowerCase()) {
        if (Srch.U.n(Search.Configuration.QueryBuilder.$0.SourceId) || !Search.Configuration.QueryBuilder.get_$R()[Search.Configuration.QueryBuilder.$0.SourceId]) {
            Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryBuilder.get_$n());
            Search.Configuration.QueryBuilder.$0.SourceId = '8413cd39-2156-4e00-b54d-11efd9abdb89';
        }
    }
    else if (Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(4).toLowerCase() || Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(3).toLowerCase()) {
        Search.Configuration.QueryBuilder.$3B();
        if (Srch.U.e(Search.Configuration.QueryBuilder.$0.SourceId)) {
            Search.Configuration.QueryBuilder.$0.SourceId = '0';
        }
        if (Search.Configuration.QueryBuilder.$0.SourceId.toLowerCase() !== '0'.toLowerCase() && !Search.Configuration.QueryBuilder.get_$R()[Search.Configuration.QueryBuilder.$0.SourceId]) {
            Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryBuilder.get_$n());
            Search.Configuration.QueryBuilder.$0.SourceId = '0';
        }
    }
    else if (Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(2).toLowerCase()) {
        if (Srch.U.n(Search.Configuration.QueryBuilder.$0.SourceId) || !Search.Configuration.QueryBuilder.get_$R()[Search.Configuration.QueryBuilder.$0.SourceId]) {
            Search.Configuration.QueryBuilder.$0.SourceId = '8413cd39-2156-4e00-b54d-11efd9abdb89';
        }
    }
}
Search.Configuration.QueryBuilder.$4I = function Search_Configuration_QueryBuilder$$4I() {
    var $v_0 = [];
    var $$dict_1 = Search.Configuration.QueryBuilder.$0.Properties;
    for (var $$key_2 in $$dict_1) {
        var $v_1 = { key: $$key_2, value: $$dict_1[$$key_2] };
        if (Srch.U.isInArray($v_0, $v_1.key.toLowerCase())) {
            delete Search.Configuration.QueryBuilder.$0.Properties[$v_1.key];
        }
        else {
            Srch.U.appendArray($v_0, $v_1.key.toLowerCase());
        }
    }
}
Search.Configuration.QueryBuilder.$4G = function Search_Configuration_QueryBuilder$$4G($p0) {
    if ($p0.toLowerCase() === 'tag' || $p0.toLowerCase() === 'recsurl' || $p0.toLowerCase() === 'contenttypeid' || $p0.toLowerCase() === 'scope') {
        return true;
    }
    return false;
}
Search.Configuration.QueryBuilder.$3u = function Search_Configuration_QueryBuilder$$3u() {
    var $v_0 = Search.Configuration.QueryHelperTab.getBoundVariableValues();
    var $v_1 = [];
    var $$dict_2 = $v_0;
    for (var $$key_3 in $$dict_2) {
        var $v_2 = { key: $$key_3, value: $$dict_2[$$key_3] };
        if (!Srch.U.n($v_2.value)) {
            var $v_3 = new Search.Configuration.QueryTemplateProperty();
            $v_3.Name = $v_2.key;
            $v_3.Value = $v_2.value.toString();
            Srch.U.appendArray($v_1, $v_3);
        }
    }
    Search.Configuration.TestQueryTab.updateTemplateVariables($v_1, null);
}
Search.Configuration.QueryBuilder.$3B = function Search_Configuration_QueryBuilder$$3B() {
    var $v_0 = Search.Configuration.QueryBuilder.$0;
    var $v_1 = Search.Configuration.QueryBuilder.get_$R();
    if (!(($v_0.SourceId) in $v_1)) {
        if (Srch.U.n($v_0.SourceName) || Srch.U.n($v_0.SourceLevel)) {
            return;
        }
        var $$dict_2 = $v_1;
        for (var $$key_3 in $$dict_2) {
            var $v_2 = { key: $$key_3, value: $$dict_2[$$key_3] };
            var $v_3 = $v_1[$v_2.key];
            if ($v_3.Name.toLowerCase() === $v_0.SourceName.toLowerCase() && $v_3.Level.toLowerCase() === $v_0.SourceLevel.toLowerCase()) {
                $v_0.SourceId = $v_3.Id;
                break;
            }
        }
    }
}
Search.Configuration.QueryBuilder.$3D = function Search_Configuration_QueryBuilder$$3D() {
    var $v_0 = new SP.UI.DialogOptions();
    $v_0.width = 1024;
    $v_0.height = 700;
    $v_0.autoSize = false;
    $v_0.showClose = false;
    return $v_0;
}
Search.Configuration.QueryBuilder.$3p = function Search_Configuration_QueryBuilder$$3p($p0) {
    if (Search.Configuration.QueryBuilder.get_$3i() && $p0) {
        Search.Configuration.QueryBuilder.get_$3i().appendChild($p0);
    }
}
Search.Configuration.QueryBuilder.$2j = function Search_Configuration_QueryBuilder$$2j($p0) {
    if ($p0 && $p0.style) {
        Search.Configuration.QueryBuilderUtility.hide($p0);
        Sys.UI.DomElement.removeCssClass($p0, 'ms-srchnav-item');
    }
}
Search.Configuration.QueryBuilder.$4m = function Search_Configuration_QueryBuilder$$4m($p0) {
    if ($p0 && $p0.style) {
        Search.Configuration.QueryBuilderUtility.show($p0);
        Sys.UI.DomElement.addCssClass($p0, 'ms-srchnav-item');
    }
}
Search.Configuration.QueryBuilder.get_$3i = function Search_Configuration_QueryBuilder$get_$3i() {
    if (!Search.Configuration.QueryBuilder.$2O) {
        Search.Configuration.QueryBuilder.$2O = $get('Tabs');
    }
    return Search.Configuration.QueryBuilder.$2O;
}
Search.Configuration.QueryBuilder.$4f = function Search_Configuration_QueryBuilder$$4f($p0, $p1) {
    Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryBuilder.get_$2m());
    Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryBuilder.get_$2n());
    Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryBuilder.get_$2g());
    Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryBuilder.get_$2h());
}
Search.Configuration.QueryBuilder.$4d = function Search_Configuration_QueryBuilder$$4d($p0, $p1) {
    Srch.U.hideElement(previewResult);
    Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryBuilder.get_$2n());
    Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryBuilder.get_$2m());
    Srch.U.animateResults(Search.Configuration.QueryBuilder.get_$C(), Search.Configuration.QueryBuilder.get_$C().get_dataProvider().get_userAction());
}
Search.Configuration.QueryBuilder.$4i = function Search_Configuration_QueryBuilder$$4i($p0, $p1) {
    Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryBuilder.get_$2h());
    Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryBuilder.get_$2g());
}
Search.Configuration.QueryBuilder.updateResult = function Search_Configuration_QueryBuilder$updateResult() {
    Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryBuilder.get_$2m());
    Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryBuilder.get_$2n());
    Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryBuilder.get_$2g());
    Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryBuilder.get_$2h());
    Search.Configuration.TestQueryTab.clear();
    Search.Configuration.TestQueryTab.refreshTemplateVariables(Search.Configuration.QueryBuilder.refreshPreview);
}
Search.Configuration.QueryBuilder.updateResultEvent = function Search_Configuration_QueryBuilder$updateResultEvent(e) {
    Search.Configuration.QueryBuilder.updateResult();
}
Search.Configuration.QueryBuilder.refreshPreview = function Search_Configuration_QueryBuilder$refreshPreview() {
    var $v_0 = Search.Configuration.QueryBuilder.$33();
    Search.Configuration.QueryBuilder.get_$C().refresh($v_0);
}
Search.Configuration.QueryBuilder.$33 = function Search_Configuration_QueryBuilder$$33() {
    var $v_0 = Search.Configuration.QueryBuilder.get_$C().get_dataProvider();
    $v_0.set_queryTemplate(Search.Configuration.QueryHelperTab.getQueryTemplate());
    $v_0.set_properties({});
    var $v_1 = Search.Configuration.TestQueryTab.getTemplateVariables();
    var $v_2 = '';
    var $$dict_3 = $v_1;
    for (var $$key_4 in $$dict_3) {
        var $v_6 = { key: $$key_4, value: $$dict_3[$$key_4] };
        if ($v_6.key.toLowerCase() === 'SearchTerms'.toLowerCase() || $v_6.key.toLowerCase() === 'SearchBoxQuery'.toLowerCase()) {
            if ($v_2 !== '') {
                $v_2 += ' ';
            }
            $v_2 += $v_6.value;
            delete $v_1[$v_6.key];
        }
    }
    if ($v_2 && $v_2.length >= 2048) {
        $v_2 = $v_2.substring(0, 2048);
    }
    if ($v_2.trim() === '') {
        $v_2 = null;
    }
    var $$dict_6 = $v_1;
    for (var $$key_7 in $$dict_6) {
        var $v_7 = { key: $$key_7, value: $$dict_6[$$key_7] };
        var $v_8 = false;
        var $$dict_A = $v_0.get_properties();
        for (var $$key_B in $$dict_A) {
            var $v_9 = { key: $$key_B, value: $$dict_A[$$key_B] };
            if ($v_9.key.toLowerCase() === $v_7.key.toLowerCase()) {
                $v_0.get_properties()[$v_9.key] = $v_7.value;
                $v_8 = true;
            }
        }
        if (!$v_8) {
            $v_0.get_properties()[$v_7.key] = $v_7.value;
        }
    }
    var $v_3 = Search.Configuration.TestQueryTab.$4F();
    if ($v_3 && $v_3.length > 0) {
        $v_0.get_properties()['UserSegmentTerms'] = $v_3;
    }
    $v_0.get_properties()['FillIn'] = (Search.Configuration.QueryHelperTab.get_useFillIn()) ? 'true' : 'false';
    if (Search.Configuration.QueryBuilder.$1.toUpperCase() !== Search.Configuration.QueryBuilderMode.toString(5).toUpperCase()) {
        $v_0.get_properties()['EnableStacking'] = true;
        $v_0.set_enableInterleaving(false);
    }
    if (Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(3).toLowerCase() || Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(4).toLowerCase() || Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(2).toLowerCase()) {
        $v_0.set_enableQueryRules(false);
    }
    else {
        $v_0.set_enableQueryRules(Search.Configuration.QueryBuilder.$0.EnableQueryRules);
    }
    $v_0.get_properties()['TryCache'] = true;
    if (!Srch.U.n(Search.Configuration.QueryBuilder.$5.TokenExpansionData.ListId)) {
        $v_0.get_properties()['ListId'] = Search.Configuration.QueryBuilder.$5.TokenExpansionData.ListId;
    }
    if (!Srch.U.n(Search.Configuration.QueryBuilder.$5.TokenExpansionData.ListItemId)) {
        $v_0.get_properties()['ListItemId'] = Search.Configuration.QueryBuilder.$5.TokenExpansionData.ListItemId;
    }
    if (!Srch.U.n(Search.Configuration.QueryBuilder.$5.TokenExpansionData.TermId)) {
        $v_0.get_properties()['TermId'] = Search.Configuration.QueryBuilder.$5.TokenExpansionData.TermId;
    }
    if (!Srch.U.n(Search.Configuration.QueryBuilder.$5.TokenExpansionData.TermSetId)) {
        $v_0.get_properties()['TermSetId'] = Search.Configuration.QueryBuilder.$5.TokenExpansionData.TermSetId;
    }
    if (!Srch.U.n(Search.Configuration.QueryBuilder.$5.TokenExpansionData.TermStoreId)) {
        $v_0.get_properties()['TermStoreId'] = Search.Configuration.QueryBuilder.$5.TokenExpansionData.TermStoreId;
    }
    $v_0.get_properties()['OverrideExpandedTokens'] = true;
    $v_0.set_resultsUrl(Search.Configuration.QueryBuilder.get_$H().TokenExpansionData.Url);
    if (Search.Configuration.QueryBuilder.$0.Properties[Search.Configuration.SettingsTab.$W]) {
        $v_0.get_properties()[Search.Configuration.SettingsTab.$W] = true;
    }
    if (!Srch.U.n(Search.Configuration.QueryBuilder.$0.TrimDuplicates)) {
        $v_0.set_trimDuplicates(Search.Configuration.QueryBuilder.$0.TrimDuplicates);
    }
    else {
        $v_0.set_trimDuplicates(false);
    }
    if (Search.Configuration.QueryBuilder.get_$T()) {
        Search.Configuration.QueryBuilder.$0.Sorts = null;
    }
    $v_0.set_fallbackSort(Search.Configuration.QueryBuilder.$0.Sorts);
    $v_0.set_rankRules(Search.Configuration.QueryBuilder.$0.RankRules);
    var $v_4 = Search.Configuration.QueryHelperTab.getCurrentResultSourceId();
    if (!Srch.U.e($v_4) && SP.Guid.isValid($v_4.toLowerCase())) {
        $v_0.set_sourceID($v_4);
    }
    else {
        $v_0.set_sourceID('8413cd39-2156-4e00-b54d-11efd9abdb89');
    }
    if (!Srch.U.n(Search.Configuration.QueryBuilder.$0.CollapseSpecification)) {
        $v_0.set_collapseSpecification(Search.Configuration.QueryBuilder.$0.CollapseSpecification);
    }
    if (Search.Configuration.QueryBuilder.get_$T()) {
        Search.Configuration.QueryBuilder.$0.RankModelId = null;
    }
    if (!SP.ScriptUtility.isNullOrUndefined(Search.Configuration.QueryBuilder.$0.RankModelId)) {
        $v_0.set_fallbackRankingModelID(Search.Configuration.QueryBuilder.$0.RankModelId);
    }
    var $v_5 = new Srch.QueryState();
    $v_5.k = $v_2;
    $v_5.o = Search.Configuration.QueryBuilder.$0.Sorts;
    if (Search.Configuration.QueryBuilder.$0.Filters) {
        $v_5.r = Search.Configuration.QueryBuilderUtility.parse(Search.Configuration.QueryBuilderUtility.stringify(Search.Configuration.QueryBuilder.$0.Filters));
        Search.Configuration.QueryBuilder.$0.Filters = null;
    }
    return $v_5;
}




Search.Configuration.TokenExpansionData = function Search_Configuration_TokenExpansionData() {
}
Search.Configuration.TokenExpansionData.prototype = {
    ListId: null,
    ListItemId: 0,
    TermId: null,
    TermSetId: null,
    TermStoreId: null,
    Url: null
}


Search.Configuration.QueryTemplateProperty = function Search_Configuration_QueryTemplateProperty() {
}
Search.Configuration.QueryTemplateProperty.prototype = {
    Name: null,
    Value: null,
    NotApplicable: false,
    IsComplex: false
}


Search.Configuration.QueryBuilderResultSourceData = function Search_Configuration_QueryBuilderResultSourceData() {
}
Search.Configuration.QueryBuilderResultSourceData.prototype = {
    Id: null,
    Name: null,
    Level: null,
    QueryTemplate: null,
    QueryTemplateProperties: null
}


Search.Configuration.QueryBuilderConfigData = function Search_Configuration_QueryBuilderConfigData() {
}
Search.Configuration.QueryBuilderConfigData.prototype = {
    ResultSourceData: null,
    DefaultResultSourceId: null,
    QueryRules: null,
    Error: false,
    IsSPFSKU: false,
    UserHasAdminRights: false,
    TokenExpansionData: null
}


Search.Configuration.QueryBuilderState = function Search_Configuration_QueryBuilderState() {
}
Search.Configuration.QueryBuilderState.prototype = {
    Filters: null,
    SourceId: null,
    SourceName: null,
    SourceLevel: null,
    Async: false,
    RankModelId: null,
    ClientType: null,
    Sorts: null,
    Properties: null,
    CollapseSpecification: null,
    RankRules: null,
    QueryTemplate: null,
    EnableQueryRules: false,
    TrimDuplicates: false
}


Search.Configuration.QueryHelperTab = function Search_Configuration_QueryHelperTab(name, state, e, tabid) {
    Search.Configuration.QueryHelperTab.initializeBase(this, [ name, e, tabid ]);
    Search.Configuration.QueryHelperTab.$X = true;
    this.onTabClick(null);
    Search.Configuration.QueryHelperTab.$3v();
    Search.Configuration.QueryHelperTab.$X = false;
    this.$8_2.focus();
}
Search.Configuration.QueryHelperTab.get_$3J = function Search_Configuration_QueryHelperTab$get_$3J() {
    if (!Search.Configuration.QueryHelperTab.$1q) {
        Search.Configuration.QueryHelperTab.$1q = $get('noFillin');
    }
    return Search.Configuration.QueryHelperTab.$1q;
}
Search.Configuration.QueryHelperTab.get_$10 = function Search_Configuration_QueryHelperTab$get_$10() {
    if (!Search.Configuration.QueryHelperTab.$1h) {
        Search.Configuration.QueryHelperTab.$1h = $get('fillInId');
    }
    return Search.Configuration.QueryHelperTab.$1h;
}
Search.Configuration.QueryHelperTab.get_$l = function Search_Configuration_QueryHelperTab$get_$l() {
    if (!Search.Configuration.QueryHelperTab.$1i) {
        Search.Configuration.QueryHelperTab.$1i = Search.Configuration.QueryBuilderUtility.getClientElementById('fillInSourceDropDown');
    }
    return Search.Configuration.QueryHelperTab.$1i;
}
Search.Configuration.QueryHelperTab.get_$K = function Search_Configuration_QueryHelperTab$get_$K() {
    if (!Search.Configuration.QueryHelperTab.$1u) {
        Search.Configuration.QueryHelperTab.$1u = $get('PathSelectionList');
    }
    return Search.Configuration.QueryHelperTab.$1u;
}
Search.Configuration.QueryHelperTab.get_$3m = function Search_Configuration_QueryHelperTab$get_$3m() {
    if (!Search.Configuration.QueryHelperTab.$2Y) {
        Search.Configuration.QueryHelperTab.$2Y = $get('useTag');
    }
    return Search.Configuration.QueryHelperTab.$2Y;
}
Search.Configuration.QueryHelperTab.get_$3n = function Search_Configuration_QueryHelperTab$get_$3n() {
    if (!Search.Configuration.QueryHelperTab.$2Z) {
        Search.Configuration.QueryHelperTab.$2Z = $get('useTopic');
    }
    return Search.Configuration.QueryHelperTab.$2Z;
}
Search.Configuration.QueryHelperTab.get_$3l = function Search_Configuration_QueryHelperTab$get_$3l() {
    if (!Search.Configuration.QueryHelperTab.$2X) {
        Search.Configuration.QueryHelperTab.$2X = $get('useSubTopic');
    }
    return Search.Configuration.QueryHelperTab.$2X;
}
Search.Configuration.QueryHelperTab.get_$4e = function Search_Configuration_QueryHelperTab$get_$4e() {
    if (!Search.Configuration.QueryHelperTab.$22) {
        Search.Configuration.QueryHelperTab.$22 = propertyValueId;
    }
    return Search.Configuration.QueryHelperTab.$22;
}
Search.Configuration.QueryHelperTab.get_$7 = function Search_Configuration_QueryHelperTab$get_$7() {
    if (!Search.Configuration.QueryHelperTab.$20) {
        Search.Configuration.QueryHelperTab.$20 = propertyAllContentTypeList ;
    }
    return Search.Configuration.QueryHelperTab.$20;
}
Search.Configuration.QueryHelperTab.get_$4 = function Search_Configuration_QueryHelperTab$get_$4() {
    if (!Search.Configuration.QueryHelperTab.$21) {
        Search.Configuration.QueryHelperTab.$21 = propertyCommonContentTypeList;
    }
    return Search.Configuration.QueryHelperTab.$21;
}
Search.Configuration.QueryHelperTab.get_$2f = function Search_Configuration_QueryHelperTab$get_$2f() {
    if (!Search.Configuration.QueryHelperTab.$1W) {
        Search.Configuration.QueryHelperTab.$1W = $get('customQueryLink');
    }
    return Search.Configuration.QueryHelperTab.$1W;
}
Search.Configuration.QueryHelperTab.get_$2l = function Search_Configuration_QueryHelperTab$get_$2l() {
    if (!Search.Configuration.QueryHelperTab.$1v) {
        Search.Configuration.QueryHelperTab.$1v = $get('predefinedLink');
    }
    return Search.Configuration.QueryHelperTab.$1v;
}
Search.Configuration.QueryHelperTab.changePredefinedQueryResultSource = function Search_Configuration_QueryHelperTab$changePredefinedQueryResultSource() {
    if (!Search.Configuration.QueryHelperTab.$X) {
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryBuilder.get_$n());
    }
    Search.Configuration.QueryHelperTab.$2v(Search.Configuration.QueryBuilder.$0);
    Search.Configuration.QueryHelperTab.$1o();
    Search.Configuration.QueryHelperTab.$3a();
    Search.Configuration.QueryHelperTab.$1F();
}
Search.Configuration.QueryHelperTab.changeCYOQueryResultSource = function Search_Configuration_QueryHelperTab$changeCYOQueryResultSource() {
    if (!Search.Configuration.QueryHelperTab.$X) {
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryBuilder.get_$n());
    }
}
Search.Configuration.QueryHelperTab.onSelectPredefinedQuery = function Search_Configuration_QueryHelperTab$onSelectPredefinedQuery() {
    if (!Search.Configuration.QueryHelperTab.$X) {
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryBuilder.get_$n());
    }
    Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.get_$2l());
    Search.Configuration.QueryBuilderUtility.hide($get('SORTING'));
    Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryHelperTab.get_$2f());
    if (!Srch.U.n(Search.Configuration.QueryBuilder.$b)) {
        Search.Configuration.QueryBuilder.$2j(Search.Configuration.QueryBuilder.$b);
    }
    Search.Configuration.QueryHelperTab.$1o();
    Search.Configuration.QueryHelperTab.$3G();
    Search.Configuration.QueryHelperTab.$3a();
    Search.Configuration.QueryBuilder.$0.RankRules = null;
    Search.Configuration.QueryHelperTab.$2v(Search.Configuration.QueryBuilder.$0);
    Search.Configuration.QueryHelperTab.$1F();
}
Search.Configuration.QueryHelperTab.onSelectCustomQuery = function Search_Configuration_QueryHelperTab$onSelectCustomQuery() {
    if (!Search.Configuration.QueryHelperTab.$X) {
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryBuilder.get_$n());
    }
    if (!Srch.U.n(Search.Configuration.QueryBuilder.$b)) {
        Search.Configuration.QueryBuilder.$4m(Search.Configuration.QueryBuilder.$b);
    }
    Search.Configuration.QueryHelperTab.$1o();
    Search.Configuration.QueryBuilderUtility.hide($get('fullquery'));
    Search.Configuration.QueryBuilderUtility.hide($get('searchSourceQTDiv'));
    Search.Configuration.QueryBuilderUtility.show($get('createownquerycontrolblock'));
    if (Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(3).toLowerCase() || Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(4).toLowerCase()) {
        Search.Configuration.QueryBuilderUtility.hide($get('searchSourceDiv'));
        Search.Configuration.QueryBuilderUtility.show($get('queryRulesSearchSourceDiv'));
    }
    else {
        Search.Configuration.QueryBuilderUtility.hide($get('queryRulesSearchSourceDiv'));
        Search.Configuration.QueryBuilderUtility.show($get('searchSourceDiv'));
    }
    Search.Configuration.QueryHelperTab.$2v(Search.Configuration.QueryBuilder.$0);
    Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryHelperTab.get_$2l());
    Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.get_$2f());
    Search.Configuration.SortTab.setSortByAvailable();
    if (!Search.Configuration.QueryHelperTab.$X) {
        Search.Configuration.SortTab.setSortsOnQBState();
        Search.Configuration.SortTab.refreshXRank();
        ($get('QueryBox')).value = Search.Configuration.TestQueryTab.get_$2p().value;
    }
    Search.Configuration.QueryHelperTab.$1F();
}
Search.Configuration.QueryHelperTab.$1F = function Search_Configuration_QueryHelperTab$$1F() {
    if (!Search.Configuration.QueryHelperTab.$X) {
        Search.Configuration.QueryBuilder.updateResult();
    }
}
Search.Configuration.QueryHelperTab.$4a = function Search_Configuration_QueryHelperTab$$4a() {
    Search.Configuration.QueryHelperTab.$N = $get('QueryBox');
    if (!Srch.U.n(Search.Configuration.QueryBuilder.$0.QueryTemplate)) {
        Search.Configuration.QueryHelperTab.$N.value = Search.Configuration.QueryBuilder.$0.QueryTemplate;
    }
    Search.Configuration.QueryHelperTab.$J = $get('manualtextinput');
    Search.Configuration.QueryHelperTab.$M = Search.Configuration.QueryHelperTab.get_$4e();
    Search.Configuration.QueryHelperTab.$M.selectedIndex = 0;
    Search.Configuration.QueryHelperTab.$M.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue(Search.Configuration.QueryHelperTab.$2G, Search.Configuration.QueryHelperTab.$2G));
    Srch.U.addHandler(Search.Configuration.QueryHelperTab.$M, 'change', Search.Configuration.QueryHelperTab.$4W);
    Search.Configuration.QueryHelperTab.$d = Search.Configuration.QueryBuilderUtility.getClientElementById('allqueryable');
    Srch.U.addHandler(Search.Configuration.QueryHelperTab.$d, 'change', Search.Configuration.QueryHelperTab.$4K);
    Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.$d);
    var $v_0 = ':';
    Search.Configuration.QueryHelperTab.$B = $get('operatorValueId');
    Search.Configuration.QueryHelperTab.$B.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('=', Srch.Res.qb_token_Equals));
    Search.Configuration.QueryHelperTab.$B.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('=...*', Srch.Res.qb_token_StartsWith));
    Search.Configuration.QueryHelperTab.$B.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue($v_0, Srch.Res.qb_token_Contains));
    Search.Configuration.QueryHelperTab.$B.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue(':...*', Srch.Res.qb_token_ContainsStartsWith));
    Search.Configuration.QueryHelperTab.$B.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('<', Srch.Res.qb_token_LessThan));
    Search.Configuration.QueryHelperTab.$B.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('>', Srch.Res.qb_token_GreaterThan));
    Search.Configuration.QueryHelperTab.$B.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('<>', Srch.Res.qb_token_NotEquals));
    Search.Configuration.QueryHelperTab.$B.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('-VALUE' + $v_0, Srch.Res.qb_token_NotContains));
    Search.Configuration.QueryHelperTab.$B.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('-VALUE=...*', Srch.Res.qb_token_NotStartsWith));
    Search.Configuration.QueryHelperTab.$B.value = $v_0;
    Search.Configuration.QueryHelperTab.$3 = $get('dynamicValueId');
    Search.Configuration.QueryHelperTab.$3.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue(Search.Configuration.QueryHelperTab.$2F, Search.Configuration.QueryHelperTab.$2F));
    Search.Configuration.QueryHelperTab.$3.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue(Search.Configuration.QueryHelperTab.$s, Search.Configuration.QueryHelperTab.$s));
    if (!Srch.U.n(Search.Configuration.QueryBuilder.$q)) {
        var $$dict_1 = Search.Configuration.QueryBuilder.$q;
        for (var $$key_2 in $$dict_1) {
            var $v_1 = { key: $$key_2, value: $$dict_1[$$key_2] };
            if (!Srch.U.n($v_1.key) && !Srch.U.n($v_1.value)) {
                Search.Configuration.QueryHelperTab.$3.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{' + $v_1.key.toString() + '}', $v_1.value.toString()));
            }
        }
    }
    Search.Configuration.QueryHelperTab.$3.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{SiteCollection.URL}', Srch.Res.qb_token_SiteColletion));
    Search.Configuration.QueryHelperTab.$3.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{Site.URL}', Srch.Res.qb_token_Site));
    Search.Configuration.QueryHelperTab.$3.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{Page.URL}', Srch.Res.qb_token_Page));
    Search.Configuration.QueryHelperTab.$3.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{Term.Id}', Srch.Res.qb_token_Topic));
    Search.Configuration.QueryHelperTab.$3.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{Term.IdWithChildren}', Srch.Res.qb_token_TopicIdWithChildren));
    Search.Configuration.QueryHelperTab.$3.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{User.Name}', Srch.Res.qb_token_UserName));
    Search.Configuration.QueryHelperTab.$3.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{User.PreferredContentLanguage}', Srch.Res.qb_token_PreferredContentLanguage));
    Search.Configuration.QueryHelperTab.$3.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{Today-5}', Srch.Res.qb_token_Date));
    Search.Configuration.QueryHelperTab.$3.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{QueryString.MyParameter1}', Srch.Res.qb_token_QueryString));
    Search.Configuration.QueryHelperTab.$3.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{URLToken.1}', Srch.Res.qb_token_URLToken));
    Search.Configuration.QueryHelperTab.$3.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{Page.MyField1}', Srch.Res.qb_token_PageField));
    Search.Configuration.QueryHelperTab.$3.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{Site.Locale}', Srch.Res.qb_token_SiteLocale));
    Search.Configuration.QueryHelperTab.$3.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{CurrentDisplayLanguage}', Srch.Res.qb_token_DisplayLanguage));
    Srch.U.addHandler(Search.Configuration.QueryHelperTab.$3, 'change', Search.Configuration.QueryHelperTab.$15);
    Search.Configuration.QueryHelperTab.$15(null);
    Srch.U.addHandler(Search.Configuration.QueryHelperTab.get_$4(), 'change', Search.Configuration.QueryHelperTab.$1t);
    Srch.U.addHandler(Search.Configuration.QueryHelperTab.get_$7(), 'change', Search.Configuration.QueryHelperTab.$1t);
    Search.Configuration.QueryHelperTab.$A = $get('dynamicKeywordValueId');
    if (!Srch.U.n(Search.Configuration.QueryBuilder.$q)) {
        var $$dict_4 = Search.Configuration.QueryBuilder.$q;
        for (var $$key_5 in $$dict_4) {
            var $v_2 = { key: $$key_5, value: $$dict_4[$$key_5] };
            if (!Srch.U.n($v_2.key) && !Srch.U.n($v_2.value)) {
                Search.Configuration.QueryHelperTab.$A.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{' + $v_2.key.toString() + '}', $v_2.value.toString()));
            }
        }
    }
    if (Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(3).toLowerCase() || Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(4).toLowerCase() || Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(2).toLowerCase()) {
        Search.Configuration.QueryHelperTab.$A.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{searchTerms}', Srch.Res.qb_token_SearchTerms));
    }
    Search.Configuration.QueryHelperTab.$A.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{SearchBoxQuery}', Srch.Res.qb_token_SearchBoxQuery));
    Search.Configuration.QueryHelperTab.$A.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{User.Name}', Srch.Res.qb_token_UserName));
    Search.Configuration.QueryHelperTab.$A.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{QueryString.MyParameter1}', Srch.Res.qb_token_QueryString));
    Search.Configuration.QueryHelperTab.$A.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{URLToken.1}', Srch.Res.qb_token_URLToken));
    Search.Configuration.QueryHelperTab.$A.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('{Page.MyField1}', Srch.Res.qb_token_PageField));
    Search.Configuration.QueryHelperTab.$A.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('contentclass:STS_Web', Srch.Res.qb_token_OnlySites));
    Search.Configuration.QueryHelperTab.$A.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('(contentclass:STS_List OR contentclass:STS_List_DocumentLibrary)', Srch.Res.qb_token_OnlyLists));
    Search.Configuration.QueryHelperTab.$A.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('(contentclass:STS_ListItem OR IsDocument:True)', Srch.Res.qb_token_OnlyListItems));
}
Search.Configuration.QueryHelperTab.$3v = function Search_Configuration_QueryHelperTab$$3v() {
    Search.Configuration.QueryHelperTab.createPathControl();
    Search.Configuration.QueryHelperTab.createRecommendationPathControl();
    Search.Configuration.QueryHelperTab.createContentTypeControl();
    Search.Configuration.QueryHelperTab.$3w();
    Search.Configuration.QueryHelperTab.$4a();
    Search.Configuration.QueryHelperTab.$1o();
    Search.Configuration.QueryHelperTab.$3G();
    var $v_0 = Search.Configuration.QueryBuilder.$0.SourceId;
    if (!Srch.U.n(Search.Configuration.QueryBuilder.$0.Properties['FillIn']) && Search.Configuration.QueryBuilder.$0.Properties['FillIn'].toString().toLowerCase() === 'true') {
        if (!Srch.U.n(Search.Configuration.QueryBuilder.$0.Properties['RecsSourceId'])) {
            $v_0 = Search.Configuration.QueryBuilder.$0.Properties['RecsSourceId'];
        }
        else {
            $v_0 = 'ec675252-14fa-4fbe-84dd-8d098ed74181';
        }
    }
    Search.Configuration.QueryHelperTab.$3b(Search.Configuration.QueryBuilder.get_$R()[$v_0]);
    if (Search.Configuration.QueryHelperTab.isPredefinedControlsVisible()) {
        var $v_1 = Search.Configuration.QueryBuilderUtility.getClientElementById('resultSourceWithQTDropDown');
        $v_1.value = $v_0;
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryHelperTab.get_$2f());
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.get_$2l());
        if (!Srch.U.n(Search.Configuration.QueryBuilder.$b)) {
            Search.Configuration.QueryBuilder.$2j(Search.Configuration.QueryBuilder.$b);
        }
        Search.Configuration.QueryHelperTab.$1F();
    }
    else {
        var $v_2;
        if (Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(3).toLowerCase() || Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(4).toLowerCase()) {
            $v_2 = Search.Configuration.QueryBuilderUtility.getClientElementById('queryRulesSearchSourceDropDown');
        }
        else {
            $v_2 = Search.Configuration.QueryBuilderUtility.getClientElementById('searchSourceDropDown');
        }
        $v_2.value = $v_0;
        Search.Configuration.QueryHelperTab.onSelectCustomQuery();
    }
}
Search.Configuration.QueryHelperTab.$3a = function Search_Configuration_QueryHelperTab$$3a() {
    var $v_0 = Search.Configuration.QueryHelperTab.getCurrentResultSourceData();
    Search.Configuration.QueryHelperTab.$3b($v_0);
}
Search.Configuration.QueryHelperTab.$1o = function Search_Configuration_QueryHelperTab$$1o() {
    Search.Configuration.QueryBuilderUtility.hide($get('recscontrolblock'));
    Search.Configuration.QueryBuilderUtility.hide($get('fillincontrolblock'));
    Search.Configuration.QueryBuilderUtility.hide($get('tagcontrolblock'));
    Search.Configuration.QueryBuilderUtility.hide($get('pathcontrolblock'));
    Search.Configuration.QueryBuilderUtility.hide($get('contentcontrolblock'));
    Search.Configuration.QueryBuilderUtility.hide($get('filtercontrolblock'));
}
Search.Configuration.QueryHelperTab.$3G = function Search_Configuration_QueryHelperTab$$3G() {
    Search.Configuration.QueryBuilderUtility.hide($get('createownquerycontrolblock'));
    Search.Configuration.QueryBuilderUtility.hide($get('searchSourceDiv'));
    Search.Configuration.QueryBuilderUtility.hide($get('queryRulesSearchSourceDiv'));
    Search.Configuration.QueryBuilderUtility.show($get('fullquery'));
    Search.Configuration.QueryBuilderUtility.show($get('searchSourceQTDiv'));
}
Search.Configuration.QueryHelperTab.$3b = function Search_Configuration_QueryHelperTab$$3b($p0) {
    if (Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(3).toLowerCase() || Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(4).toLowerCase()) {
        return;
    }
    if ($p0 && !Srch.U.n($p0.QueryTemplateProperties)) {
        var $v_0 = $p0.QueryTemplateProperties;
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            var $v_3 = $v_2.Name;
            if ($v_3.toLowerCase() === 'RecsURL'.toLowerCase()) {
                Search.Configuration.QueryBuilderUtility.show($get('recscontrolblock'));
                if (Search.Configuration.QueryBuilder.$1.toLowerCase() !== Search.Configuration.QueryBuilderMode.toString(2).toLowerCase() && Search.Configuration.QueryBuilder.$1.toLowerCase() !== Search.Configuration.QueryBuilderMode.toString(3).toLowerCase() && Search.Configuration.QueryBuilder.$1.toLowerCase() !== Search.Configuration.QueryBuilderMode.toString(4).toLowerCase()) {
                    Search.Configuration.QueryBuilderUtility.show($get('fillincontrolblock'));
                }
            }
            else if ($v_3.toLowerCase() === 'Tag'.toLowerCase()) {
                if (!Search.Configuration.QueryBuilder.get_$H().IsSPFSKU) {
                    Search.Configuration.QueryBuilderUtility.show($get('tagcontrolblock'));
                }
            }
            else if ($v_3.toLowerCase() === 'Scope'.toLowerCase()) {
                Search.Configuration.QueryBuilderUtility.show($get('pathcontrolblock'));
            }
            else if ($v_3.toLowerCase() === 'ContentTypeId'.toLowerCase()) {
                Search.Configuration.QueryBuilderUtility.show($get('contentcontrolblock'));
            }
            else if ($v_3.toLowerCase() === 'searchTerms'.toLowerCase()) {
                Search.Configuration.QueryBuilderUtility.show($get('filtercontrolblock'));
            }
        }
    }
}
Search.Configuration.QueryHelperTab.isPredefinedControlsVisible = function Search_Configuration_QueryHelperTab$isPredefinedControlsVisible() {
    if (!Search.Configuration.QueryBuilderUtility.isHidden($get('recscontrolblock')) || !Search.Configuration.QueryBuilderUtility.isHidden($get('tagcontrolblock')) || !Search.Configuration.QueryBuilderUtility.isHidden($get('pathcontrolblock')) || !Search.Configuration.QueryBuilderUtility.isHidden($get('contentcontrolblock'))) {
        return true;
    }
    return false;
}
Search.Configuration.QueryHelperTab.getCurrentResultSourceId = function Search_Configuration_QueryHelperTab$getCurrentResultSourceId() {
    if (Search.Configuration.QueryHelperTab.get_$10().checked && !Search.Configuration.QueryBuilderUtility.isHidden($get('recscontrolblock'))) {
        return Search.Configuration.QueryHelperTab.get_$l().value;
    }
    else {
        var $v_0;
        if (Search.Configuration.QueryBuilder.get_$T()) {
            $v_0 = Search.Configuration.QueryBuilderUtility.getClientElementById('resultSourceWithQTDropDown');
        }
        else {
            if (Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(3).toLowerCase() || Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(4).toLowerCase()) {
                $v_0 = Search.Configuration.QueryBuilderUtility.getClientElementById('queryRulesSearchSourceDropDown');
            }
            else {
                $v_0 = Search.Configuration.QueryBuilderUtility.getClientElementById('searchSourceDropDown');
            }
        }
        if ($v_0.selectedIndex === -1) {
            $v_0.selectedIndex = 0;
        }
        return $v_0.value;
    }
}
Search.Configuration.QueryHelperTab.getCurrentResultSourceData = function Search_Configuration_QueryHelperTab$getCurrentResultSourceData() {
    var $v_0 = Search.Configuration.QueryBuilder.get_$R();
    var $v_1 = Search.Configuration.QueryHelperTab.getCurrentResultSourceId();
    if ($v_1.toLowerCase() === '0'.toLowerCase()) {
        $v_1 = '8413cd39-2156-4e00-b54d-11efd9abdb89';
    }
    return $v_0[$v_1];
}
Search.Configuration.QueryHelperTab.$2v = function Search_Configuration_QueryHelperTab$$2v($p0) {
    var $v_0 = Search.Configuration.QueryHelperTab.getCurrentResultSourceData();
    $p0.SourceId = $v_0.Id;
    $p0.SourceName = $v_0.Name;
    $p0.SourceLevel = $v_0.Level;
}
Search.Configuration.QueryHelperTab.createRecommendationPathControl = function Search_Configuration_QueryHelperTab$createRecommendationPathControl() {
    var $v_0 = Search.Configuration.QueryBuilder.$0.Properties;
    Search.Configuration.QueryHelperTab.$4b();
    Search.Configuration.QueryHelperTab.$D = $get('RecsSelectionList');
    Search.Configuration.QueryHelperTab.$D.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('RecsPage', Srch.Res.qb_path_Page));
    Search.Configuration.QueryHelperTab.$D.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('RecsURLToken', Srch.Res.qb_path_URL_token));
    Search.Configuration.QueryHelperTab.$D.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('RecsURL', Srch.Res.qb_path_URL));
    Srch.U.addHandler(Search.Configuration.QueryHelperTab.$D, 'change', Search.Configuration.QueryHelperTab.$3V);
    if (Srch.U.n($v_0) || Srch.U.n($v_0['RecsURL'])) {
        Search.Configuration.QueryHelperTab.$D.value = 'RecsURL';
    }
    if (!Srch.U.n($v_0)) {
        if (!Srch.U.n($v_0['RecsURL'])) {
            var $v_1 = $v_0['RecsURL'];
            if ($v_1.toLowerCase() === '{page}') {
                Search.Configuration.QueryHelperTab.$D.value = 'RecsPage';
            }
            else if ($v_1.toLowerCase().startsWith('{urltoken.')) {
                Search.Configuration.QueryHelperTab.$D.value = 'RecsURLToken';
                Search.Configuration.QueryHelperTab.$u.value = $v_1;
            }
            else {
                Search.Configuration.QueryHelperTab.$D.value = 'RecsURL';
                var $v_2 = $get(Search.Configuration.QueryHelperTab.$D.value);
                var $v_3 = Search.Configuration.QueryBuilderUtility.getFirstChild($v_2);
                if (!SP.ScriptUtility.isNullOrUndefined($v_3.value)) {
                    $v_3.value = $v_1;
                }
            }
        }
        Srch.U.addHandler(Search.Configuration.QueryHelperTab.get_$3J(), 'click', Search.Configuration.QueryHelperTab.onFillInOptionChanged);
        Srch.U.addHandler(Search.Configuration.QueryHelperTab.get_$10(), 'click', Search.Configuration.QueryHelperTab.onFillInOptionChanged);
        if (!Srch.U.n(Search.Configuration.QueryBuilder.$0.Properties['FillIn']) && Search.Configuration.QueryBuilder.$0.Properties['FillIn'].toString().toLowerCase() === 'true') {
            Search.Configuration.QueryHelperTab.get_$10().checked = true;
            Search.Configuration.QueryHelperTab.get_$l().value = Search.Configuration.QueryBuilder.$0.SourceId;
            Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryHelperTab.get_$l());
        }
        else {
            Search.Configuration.QueryHelperTab.get_$3J().checked = true;
            Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.get_$l());
            Search.Configuration.QueryHelperTab.get_$l().value = '97c71db1-58ce-4891-8b64-585bc2326c12';
        }
    }
    Search.Configuration.QueryHelperTab.$3V(null);
}
Search.Configuration.QueryHelperTab.onFillInOptionChanged = function Search_Configuration_QueryHelperTab$onFillInOptionChanged(e) {
    if (Search.Configuration.QueryHelperTab.get_$10().checked) {
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryHelperTab.get_$l());
    }
    else {
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.get_$l());
    }
}
Search.Configuration.QueryHelperTab.$3V = function Search_Configuration_QueryHelperTab$$3V($p0) {
    if (Search.Configuration.QueryHelperTab.$12) {
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.$12);
    }
    var $v_0 = $get(Search.Configuration.QueryHelperTab.$D.value);
    if ($v_0) {
        Search.Configuration.QueryBuilderUtility.show($v_0);
        Search.Configuration.QueryHelperTab.$12 = $v_0;
    }
}
Search.Configuration.QueryHelperTab.$4b = function Search_Configuration_QueryHelperTab$$4b() {
    var $v_0 = '{URLToken.';
    var $v_1 = '} (';
    Search.Configuration.QueryHelperTab.$u = $get('RecsURLTokenSelection');
    var $v_2 = '';
    var $v_3 = window.location.search.substring(1, window.location.search.length).split('&');
    for (var $v_7 = 0; $v_7 < $v_3.length; $v_7++) {
        var $v_8 = $v_3[$v_7].split('=');
        if ($v_8[0].toLowerCase() === 'rawurl') {
            $v_2 = $v_8[1];
        }
    }
    var $v_4 = decodeURIComponent($v_2);
    var $v_5 = $v_4.split('/');
    var $v_6 = 1;
    for (var $v_9 = $v_5.length - 1; $v_9 >= 0; $v_9--) {
        var $v_A = $v_5[$v_9];
        if ($v_A.indexOf('?') > -1) {
            $v_A = $v_A.substring(0, $v_A.indexOf('?'));
        }
        if (!SP.ScriptUtility.isNullOrEmptyString($v_A)) {
            var $v_B = $v_0 + $v_6 + '}';
            Search.Configuration.QueryHelperTab.$u.appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue($v_B, $v_0 + $v_6++ + $v_1 + $v_A + ')'));
        }
    }
}
Search.Configuration.QueryHelperTab.getValueFromRecommendationControl = function Search_Configuration_QueryHelperTab$getValueFromRecommendationControl() {
    var $v_0 = {};
    var $v_1 = '';
    var $v_2 = Search.Configuration.QueryHelperTab.$D.value;
    if ($v_2 === 'RecsPage') {
        $v_1 = '{Page}';
    }
    else if ($v_2 === 'RecsURL' && !Srch.U.n(Search.Configuration.QueryHelperTab.$12)) {
        var $v_3 = $get('RecsURLInput');
        if (!SP.ScriptUtility.isNullOrUndefined($v_3.value)) {
            $v_1 = $v_3.value;
            if (!Srch.U.n($v_1)) {
                $v_1 = $v_1.trim();
                if (!Srch.U.e($v_1)) {
                    if (!$v_1.startsWith('\"')) {
                        $v_1 = '\"' + $v_1;
                    }
                    if (!$v_1.endsWith('\"')) {
                        $v_1 = $v_1 + '\"';
                    }
                }
            }
        }
    }
    else if ($v_2 === 'RecsURLToken') {
        if (!SP.ScriptUtility.isNullOrUndefined(Search.Configuration.QueryHelperTab.$u.value)) {
            $v_1 = Search.Configuration.QueryHelperTab.$u.value;
        }
    }
    return $v_1;
}
Search.Configuration.QueryHelperTab.getBoundVariableValues = function Search_Configuration_QueryHelperTab$getBoundVariableValues() {
    var $v_0 = {};
    if (Search.Configuration.QueryBuilder.get_$T()) {
        $v_0['RecsURL'] = null;
        $v_0['RecsSourceId'] = null;
        $v_0['FillIn'] = 'false';
        $v_0['Tag'] = null;
        $v_0['Scope'] = null;
        $v_0['ContentTypeId'] = null;
        if (!Search.Configuration.QueryBuilderUtility.isHidden($get('recscontrolblock'))) {
            var $v_1 = Search.Configuration.QueryHelperTab.getValueFromRecommendationControl();
            if (!Srch.U.n($v_1)) {
                $v_0['RecsURL'] = $v_1;
            }
        }
        if (!Search.Configuration.QueryBuilderUtility.isHidden($get('fillincontrolblock'))) {
            if (Search.Configuration.QueryHelperTab.get_useFillIn()) {
                $v_0['FillIn'] = 'true';
                var $v_2 = Search.Configuration.QueryBuilderUtility.getClientElementById('resultSourceWithQTDropDown');
                $v_0['RecsSourceId'] = $v_2.value;
            }
        }
        if (!Search.Configuration.QueryBuilderUtility.isHidden($get('tagcontrolblock'))) {
            var $v_3 = Search.Configuration.QueryHelperTab.getValueFromTagControl();
            if (!Srch.U.n($v_3)) {
                $v_0['Tag'] = $v_3;
            }
        }
        if (!Search.Configuration.QueryBuilderUtility.isHidden($get('pathcontrolblock'))) {
            var $v_4 = Search.Configuration.QueryHelperTab.getValueFromPathControl();
            if (!Srch.U.n($v_4)) {
                $v_0['Scope'] = $v_4;
            }
        }
        if (!Search.Configuration.QueryBuilderUtility.isHidden($get('contentcontrolblock'))) {
            var $v_5 = '';
            if (Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.QueryHelperTab.get_$G())) {
                $v_5 = Search.Configuration.QueryHelperTab.get_$x().value;
            }
            else {
                $v_5 = Search.Configuration.QueryHelperTab.get_$G().value;
            }
            if (!Srch.U.w($v_5)) {
                $v_0['ContentTypeId'] = $v_5;
            }
        }
    }
    return $v_0;
}
Search.Configuration.QueryHelperTab.getQueryTemplate = function Search_Configuration_QueryHelperTab$getQueryTemplate() {
    if (Search.Configuration.QueryBuilder.get_$T()) {
        if (!Search.Configuration.QueryBuilderUtility.isHidden($get('filtercontrolblock'))) {
            return Search.Configuration.QueryBuilder.get_$4c();
        }
    }
    else {
        return Search.Configuration.QueryBuilder.get_$1V();
    }
    return null;
}
Search.Configuration.QueryHelperTab.get_useFillIn = function Search_Configuration_QueryHelperTab$get_useFillIn() {
    if (Search.Configuration.QueryHelperTab.get_$10().checked && !Search.Configuration.QueryBuilderUtility.isHidden($get('fillincontrolblock'))) {
        return true;
    }
    return false;
}
Search.Configuration.QueryHelperTab.$3w = function Search_Configuration_QueryHelperTab$$3w() {
    var $v_0 = $get('filterId');
    $v_0.value = Search.Configuration.QueryBuilder.$0.QueryTemplate;
}
Search.Configuration.QueryHelperTab.createPathControl = function Search_Configuration_QueryHelperTab$createPathControl() {
    Search.Configuration.QueryHelperTab.get_$K().appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('PathSiteCollection', Srch.Res.qb_path_SiteCollection));
    Search.Configuration.QueryHelperTab.get_$K().appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('PathSite', Srch.Res.qb_path_Site));
    Search.Configuration.QueryHelperTab.get_$K().appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('PathURL', Srch.Res.qb_path_URL));
    Search.Configuration.QueryHelperTab.get_$K().appendChild(Search.Configuration.QueryBuilderUtility.addDynamicValue('PathNone', Srch.Res.qb_path_None));
    Srch.U.addHandler(Search.Configuration.QueryHelperTab.get_$K(), 'change', Search.Configuration.QueryHelperTab.$3T);
    Search.Configuration.QueryHelperTab.get_$K().value = 'PathNone';
    var $v_0 = Search.Configuration.QueryBuilder.$0.Properties;
    if (!Srch.U.n($v_0)) {
        var $v_1 = $v_0['Scope'];
        if (!Srch.U.n($v_1)) {
            if ($v_1.toLowerCase() === '{sitecollection.url}') {
                Search.Configuration.QueryHelperTab.get_$K().value = 'PathSiteCollection';
            }
            else if ($v_1.toLowerCase() === '{site.url}') {
                Search.Configuration.QueryHelperTab.get_$K().value = 'PathSite';
            }
            else {
                Search.Configuration.QueryHelperTab.get_$K().value = 'PathURL';
                var $v_2 = $get(Search.Configuration.QueryHelperTab.get_$K().value);
                var $v_3 = Search.Configuration.QueryBuilderUtility.getFirstChild($v_2);
                if (!SP.ScriptUtility.isNullOrUndefined($v_3.value)) {
                    $v_3.value = $v_1;
                }
            }
        }
        if (!Search.Configuration.QueryBuilder.get_$H().IsSPFSKU) {
            var $v_4 = $v_0['Tag'];
            if (!Srch.U.n($v_4)) {
                if ($v_4.toLowerCase() === '{term}') {
                    Search.Configuration.QueryHelperTab.get_$3n().checked = true;
                }
                else if ($v_4.toLowerCase() === '{term.idwithchildren}') {
                    Search.Configuration.QueryHelperTab.get_$3l().checked = true;
                }
                else {
                    Search.Configuration.QueryHelperTab.get_$3m().checked = true;
                }
            }
            var $v_5 = $get('keywordControl');
            if ($v_5) {
                $v_5.Lcid = SP.PageContextInfo.get_currentLanguage();
                $v_5.InputFieldId = 'keywordControlHiddenInput';
                $v_5.TermSetId = '00000000-0000-0000-0000-000000000000';
                $v_5.AnchorId = '00000000-0000-0000-0000-000000000000';
                $v_5.FieldName = 'Tags';
                $v_5.SspId = '00000000-0000-0000-0000-000000000000';
                $v_5.IsMulti = false;
                $v_5.IsSpanTermSets = true;
                $v_5.IsSpanTermStores = true;
                $v_5.IsAddTerms = false;
                $v_5.IsIgnoreFormatting = false;
                $v_5.IsIncludeDeprecated = true;
                $v_5.IsIncludePathData = false;
                $v_5.IsIncludeUnavailable = true;
                $v_5.IsUseCommaAsDelimiter = false;
                $v_5.IsIncludeTermSetName = false;
                $v_5.ExcludeKeyword = false;
                var $v_6 = Srch.ScriptApplicationManager.get_clientRuntimeContext();
                var $v_7 = $v_6.get_url();
                if (!$v_7.endsWith('/')) {
                    $v_7 += '/';
                }
                $v_7 += '_vti_bin/TaxonomyInternalService.json';
                $v_5.WebServiceUrl = $v_7;
                RegisterSodDep('ScriptForWebTaggingUI.js', 'sp.js');
                RegisterSodDep('ScriptForWebTaggingUI.js', 'sp.ui.rte.js');
                EnsureScript('ScriptForWebTaggingUI.js', TypeofFullName('Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI'), function() {
                    Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.onLoad('keywordControl');
                    Search.Configuration.QueryHelperTab.$w = new Microsoft.SharePoint.Taxonomy.ControlObject($v_5);
                    if (!Srch.U.n($v_4) && $v_4.toLowerCase() !== '{term}' && $v_4.toLowerCase() !== '{term.idwithchildren}') {
                        Search.Configuration.QueryHelperTab.$3o($v_4);
                    }
                });
            }
        }
    }
    Search.Configuration.QueryHelperTab.$3T(null);
}
Search.Configuration.QueryHelperTab.$3T = function Search_Configuration_QueryHelperTab$$3T($p0) {
    if (Search.Configuration.QueryHelperTab.$14) {
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.$14);
    }
    var $v_0 = $get(Search.Configuration.QueryHelperTab.get_$K().value);
    if ($v_0) {
        Search.Configuration.QueryBuilderUtility.show($v_0);
        Search.Configuration.QueryHelperTab.$14 = $v_0;
    }
    else {
        Search.Configuration.QueryHelperTab.$1F();
    }
}
Search.Configuration.QueryHelperTab.getValueFromPathControl = function Search_Configuration_QueryHelperTab$getValueFromPathControl() {
    var $v_0 = null;
    var $v_1 = Search.Configuration.QueryHelperTab.get_$K().value;
    if ($v_1 === 'PathSiteCollection') {
        $v_0 = '{SiteCollection.URL}';
    }
    else if ($v_1 === 'PathSite') {
        $v_0 = '{Site.URL}';
    }
    else if ($v_1 === 'PathURL' && !Srch.U.n(Search.Configuration.QueryHelperTab.$14)) {
        var $v_2 = $get('PathURLInput');
        if (!SP.ScriptUtility.isNullOrUndefined($v_2.value)) {
            $v_0 = $v_2.value;
            if (!$v_0.startsWith('\"')) {
                $v_0 = '\"' + $v_0;
            }
            if (!$v_0.endsWith('\"')) {
                $v_0 = $v_0 + '\"';
            }
        }
    }
    return $v_0;
}
Search.Configuration.QueryHelperTab.getValueFromTagControl = function Search_Configuration_QueryHelperTab$getValueFromTagControl() {
    if (Search.Configuration.QueryHelperTab.get_$3m().checked) {
        var $v_0 = null;
        if (Srch.U.n(Search.Configuration.QueryHelperTab.$w)) {
            return Search.Configuration.QueryBuilder.$0.Properties['Tag'];
        }
        $v_0 = Search.Configuration.QueryHelperTab.$w.getRawText();
        if (!$v_0) {
            return null;
        }
        var $v_1 = $v_0.substring($v_0.lastIndexOf('|') + 1, $v_0.length);
        if ($v_1 === SP.Guid.get_empty().toString()) {
            return null;
        }
        $v_0 = '#0' + $v_0.substring($v_0.lastIndexOf('|') + 1, $v_0.length + 1) + '*';
        return $v_0;
    }
    else if (Search.Configuration.QueryHelperTab.get_$3n().checked) {
        return '{Term}';
    }
    else if (Search.Configuration.QueryHelperTab.get_$3l().checked) {
        return '{Term.IDWithChildren}';
    }
    else {
        return null;
    }
}
Search.Configuration.QueryHelperTab.$3o = function Search_Configuration_QueryHelperTab$$3o($p0) {
    if ($p0.startsWith('#0')) {
        $p0 = $p0.substr(2);
    }
    if ($p0.endsWith('*')) {
        $p0 = $p0.substr(0, $p0.length - 1);
    }
    Search.Configuration.QueryHelperTab.$w.addTerm($p0, $p0);
    Search.Configuration.QueryHelperTab.$w.startupValidation();
}
Search.Configuration.QueryHelperTab.get_$G = function Search_Configuration_QueryHelperTab$get_$G() {
    if (!Search.Configuration.QueryHelperTab.$1T) {
        Search.Configuration.QueryHelperTab.$1T = commonContentTypesSelect;
    }
    return Search.Configuration.QueryHelperTab.$1T;
}
Search.Configuration.QueryHelperTab.get_$x = function Search_Configuration_QueryHelperTab$get_$x() {
    if (!Search.Configuration.QueryHelperTab.$1I) {
        Search.Configuration.QueryHelperTab.$1I = allContentTypesSelect;
    }
    return Search.Configuration.QueryHelperTab.$1I;
}
Search.Configuration.QueryHelperTab.createContentTypeControl = function Search_Configuration_QueryHelperTab$createContentTypeControl() {
    Srch.U.addHandler(Search.Configuration.QueryHelperTab.get_$G(), 'change', Search.Configuration.QueryBuilder.updateResultEvent);
    Srch.U.addHandler(Search.Configuration.QueryHelperTab.get_$x(), 'change', Search.Configuration.QueryBuilder.updateResultEvent);
    Srch.U.addHandler(Search.Configuration.QueryHelperTab.get_$G(), 'change', Search.Configuration.QueryHelperTab.contentTypeShowHide);
    var $v_0 = Search.Configuration.QueryBuilder.$0.Properties;
    if (!Srch.U.n($v_0)) {
        var $v_1 = $v_0['ContentTypeId'];
        if (!Srch.U.n($v_1)) {
            var $v_2 = false;
            for (var $v_3 = 0; $v_3 < Search.Configuration.QueryHelperTab.get_$G().children.length; $v_3++) {
                if ($v_1.toLowerCase() === (Search.Configuration.QueryHelperTab.get_$G().children[$v_3]).value.toLowerCase()) {
                    $v_2 = true;
                }
            }
            if ($v_2) {
                Search.Configuration.QueryHelperTab.get_$G().value = $v_1;
            }
            else {
                Search.Configuration.QueryHelperTab.get_$G().selectedIndex = Search.Configuration.QueryHelperTab.get_$G().children.length - 1;
                Search.Configuration.QueryHelperTab.contentTypeShowHide(null);
                Search.Configuration.QueryHelperTab.get_$x().value = $v_1;
            }
        }
    }
}
Search.Configuration.QueryHelperTab.$4W = function Search_Configuration_QueryHelperTab$$4W($p0) {
    if (Search.Configuration.QueryHelperTab.$M.value === Search.Configuration.QueryHelperTab.$2G) {
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.$M);
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryHelperTab.$d);
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.get_$4());
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.get_$7());
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryHelperTab.$3);
        Search.Configuration.QueryHelperTab.$15(null);
    }
    else if (Search.Configuration.QueryHelperTab.$M.value === Search.Configuration.QueryHelperTab.$2r) {
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.$3);
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.get_$7());
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryHelperTab.get_$4());
        Search.Configuration.QueryHelperTab.$1t(null);
    }
    else if (!Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.QueryHelperTab.get_$4()) || !Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.QueryHelperTab.get_$7())) {
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.get_$4());
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.get_$7());
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryHelperTab.$M);
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryHelperTab.$3);
        Search.Configuration.QueryHelperTab.$15(null);
    }
}
Search.Configuration.QueryHelperTab.$4K = function Search_Configuration_QueryHelperTab$$4K($p0) {
    if (Search.Configuration.QueryHelperTab.$d.value === Search.Configuration.QueryHelperTab.$2r) {
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.$3);
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.get_$7());
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryHelperTab.get_$4());
        Search.Configuration.QueryHelperTab.$1t(null);
    }
    else {
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.get_$4());
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.get_$7());
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryHelperTab.$3);
        Search.Configuration.QueryHelperTab.$15(null);
    }
}
Search.Configuration.QueryHelperTab.$15 = function Search_Configuration_QueryHelperTab$$15($p0) {
    if (Search.Configuration.QueryHelperTab.$3.value === Search.Configuration.QueryHelperTab.$s) {
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryHelperTab.$J);
    }
    else {
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.$J);
    }
}
Search.Configuration.QueryHelperTab.$1t = function Search_Configuration_QueryHelperTab$$1t($p0) {
    Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.$J);
    if ((!Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.QueryHelperTab.get_$4()) && Search.Configuration.QueryHelperTab.get_$4().selectedIndex === 1) || (!Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.QueryHelperTab.get_$7()) && Search.Configuration.QueryHelperTab.get_$7().selectedIndex === 1)) {
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryHelperTab.$J);
    }
    else if (Search.Configuration.QueryHelperTab.get_$4().selectedIndex === Search.Configuration.QueryHelperTab.get_$4().children.length - 1) {
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.get_$4());
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryHelperTab.get_$7());
    }
}
Search.Configuration.QueryHelperTab.$3Y = function Search_Configuration_QueryHelperTab$$3Y($p0) {
    if (!Srch.U.n($p0.createTextRange)) {
        var $v_0 = $p0.createTextRange();
        $v_0.moveStart('character', $p0.value.length);
        $v_0.collapse(true);
        $v_0.select();
    }
    else {
        $p0.focus();
    }
}
Search.Configuration.QueryHelperTab.addValueToQuery = function Search_Configuration_QueryHelperTab$addValueToQuery() {
    if (Search.Configuration.QueryHelperTab.$M.value === Search.Configuration.QueryHelperTab.$3U || (!Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.QueryHelperTab.$3) && Search.Configuration.QueryHelperTab.$3.value === Search.Configuration.QueryHelperTab.$2F) || (!Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.QueryHelperTab.$3) && Search.Configuration.QueryHelperTab.$3.value === Search.Configuration.QueryHelperTab.$s && Search.Configuration.QueryHelperTab.$J.value.trim() === '') || (!Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.QueryHelperTab.get_$4()) && !Search.Configuration.QueryHelperTab.get_$4().selectedIndex) || (!Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.QueryHelperTab.get_$4()) && Search.Configuration.QueryHelperTab.get_$4().selectedIndex === 1 && Search.Configuration.QueryHelperTab.$J.value.trim() === '') || (!Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.QueryHelperTab.get_$7()) && !Search.Configuration.QueryHelperTab.get_$7().selectedIndex) || (!Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.QueryHelperTab.get_$7()) && Search.Configuration.QueryHelperTab.get_$7().selectedIndex === 1 && Search.Configuration.QueryHelperTab.$J.value.trim() === '')) {
        return;
    }
    var $v_0 = (Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.QueryHelperTab.$d)) ? Search.Configuration.QueryHelperTab.$M.value : Search.Configuration.QueryHelperTab.$d.value;
    var $v_1 = Search.Configuration.QueryHelperTab.$B.value;
    var $v_2 = Search.Configuration.QueryHelperTab.$49();
    var $v_3 = '';
    var $v_4 = '';
    if ($v_2.toLowerCase() === '{actionterms.termid}' || $v_2.toLowerCase() === '{subjectterms.termid}') {
        $v_3 = '{?{|';
        $v_4 = '}}';
    }
    else if ($v_2.toLowerCase() === '{actionterms}' || $v_2.toLowerCase() === '{subjectterms}' || $v_2.toLowerCase() === '{searchterms}' || $v_2.toLowerCase() === '{searchboxquery}') {
        $v_3 = '{?';
        $v_4 = '}';
    }
    var $v_5 = '';
    if ($v_1.indexOf('VALUE') > -1) {
        $v_1 = $v_1.replace('VALUE', $v_0);
    }
    else {
        $v_5 += $v_0;
    }
    if ($v_1.indexOf('...') > -1) {
        $v_5 += $v_1.replace('...', $v_2);
    }
    else {
        $v_5 += $v_1 + $v_2;
    }
    if (Search.Configuration.QueryHelperTab.$N.value !== '') {
        Search.Configuration.QueryHelperTab.$N.value += ' ';
    }
    Search.Configuration.QueryHelperTab.$N.value += $v_3 + $v_5 + $v_4;
    Search.Configuration.QueryHelperTab.$3Y(Search.Configuration.QueryHelperTab.$N);
}
Search.Configuration.QueryHelperTab.$49 = function Search_Configuration_QueryHelperTab$$49() {
    if (!Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.QueryHelperTab.$3)) {
        return (Search.Configuration.QueryHelperTab.$3.value === Search.Configuration.QueryHelperTab.$s) ? Search.Configuration.QueryHelperTab.$J.value : Search.Configuration.QueryHelperTab.$3.value;
    }
    else if (!Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.QueryHelperTab.get_$4())) {
        return (Search.Configuration.QueryHelperTab.get_$4().selectedIndex === 1) ? Search.Configuration.QueryHelperTab.$J.value : Search.Configuration.QueryHelperTab.get_$4().value;
    }
    return (Search.Configuration.QueryHelperTab.get_$7().selectedIndex === 1) ? Search.Configuration.QueryHelperTab.$J.value : Search.Configuration.QueryHelperTab.get_$7().value;
}
Search.Configuration.QueryHelperTab.addKeywordValueToQuery = function Search_Configuration_QueryHelperTab$addKeywordValueToQuery() {
    var $v_0 = Search.Configuration.QueryHelperTab.$A.value;
    if ($v_0.toLowerCase() === '{actionterms.termid}' || $v_0.toLowerCase() === '{subjectterms.termid}') {
        $v_0 = '{?{|' + $v_0 + '}}';
    }
    if (Search.Configuration.QueryHelperTab.$N.value !== '') {
        Search.Configuration.QueryHelperTab.$N.value += ' ';
    }
    Search.Configuration.QueryHelperTab.$N.value += $v_0;
    Search.Configuration.QueryHelperTab.$3Y(Search.Configuration.QueryHelperTab.$N);
}
Search.Configuration.QueryHelperTab.contentTypeShowHide = function Search_Configuration_QueryHelperTab$contentTypeShowHide(e) {
    if (Search.Configuration.QueryHelperTab.get_$G().selectedIndex === Search.Configuration.QueryHelperTab.get_$G().options.length - 1) {
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.QueryHelperTab.get_$G());
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.QueryHelperTab.get_$x());
        Search.Configuration.QueryHelperTab.get_$x().selectedIndex = 0;
    }
}
Search.Configuration.QueryHelperTab.prototype = {
    
    onTabLoad: function Search_Configuration_QueryHelperTab$onTabLoad() {
        Search.Configuration.CustomTab.prototype.onTabLoad.call(this);
    }
}


Search.Configuration.Refinement = function Search_Configuration_Refinement() {
}
Search.Configuration.Refinement.launchConfigDialog = function Search_Configuration_Refinement$launchConfigDialog(queryGroupName, webPartTitle, configTextBoxId, jsonContextDataProviderState) {
    var $v_0 = new SP.UI.DialogOptions();
    $v_0.autoSize = true;
    $v_0.dialogReturnValueCallback = Search.Configuration.Refinement.onConfigDialogReturn;
    var $v_1 = $get(configTextBoxId);
    if ($v_1) {
        Search.Configuration.Refinement.$k = $v_1;
        var $v_3 = null;
        var $v_4 = null;
        if (!Srch.U.e(Search.Configuration.Refinement.$k.value)) {
            var $v_6 = false;
            try {
                $v_3 = Sys.Serialization.JavaScriptSerializer.deserialize(Search.Configuration.Refinement.$k.value);
            }
            catch ($v_7) {
                $v_6 = true;
            }
            $v_6 = !!($v_6 | (!$v_3 || !$v_3.refinerConfigurations));
            if ($v_6) {
                var $v_8 = null;
                try {
                    $v_8 = Sys.Serialization.JavaScriptSerializer.deserialize(Search.Configuration.Refinement.$k.value);
                }
                catch ($v_9) {
                    $v_4 = Srch.U.loadResource('refconf_Error_FailedToRestoreConfiguration');
                }
                if ($v_8 && $v_8.length > 0) {
                    var $v_A = new Array($v_8.length);
                    for (var $v_B = 0; $v_B < $v_8.length; $v_B++) {
                        var $v_C = $v_8[$v_B];
                        var $v_D = new Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration($v_C.propertyName);
                        $v_D.refinerSpecStringOverride = $v_C.spec;
                        $v_D.displayTemplate = $v_C.renderTemplateId;
                        $v_D.useDefaultDateIntervals = $v_C.useDefaultDateIntervals;
                        $v_A[$v_B] = $v_D;
                    }
                    $v_3 = new Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration($v_A);
                }
            }
        }
        if (!$v_3) {
            $v_3 = new Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration(new Array(0));
        }
        var $v_5 = new Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialogArgs($v_3, null, $v_4);
        if (!Srch.U.e(jsonContextDataProviderState)) {
            $v_5.contextDataProviderState = Sys.Serialization.JavaScriptSerializer.deserialize(jsonContextDataProviderState);
            var $v_E = Srch.ScriptApplicationManager.get_current();
            if ($v_E) {
                var $v_F = $v_E.queryGroups[queryGroupName];
                if ($v_F) {
                    var $v_G = new Srch.QueryState();
                    $v_G.copyFrom($v_F.dataProvider.get_currentQueryState(), 0);
                    $v_5.contextDataProviderState.InitialQueryState = $v_G;
                }
            }
        }
        $v_0.args = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialogArgs.toJSON($v_5);
    }
    $v_0.title = String.format(Srch.U.loadResource('refconf_FNT_DCR_RefinementConfigurationDialogTitle'), webPartTitle);
    $v_0.url = SP.Utilities.VersionUtility.getLayoutsPageUrl('RefinementConfigurationDialog.aspx');
    var $v_2 = SP.UI.ModalDialog.showModalDialog($v_0);
    return false;
}
Search.Configuration.Refinement.onConfigDialogReturn = function Search_Configuration_Refinement$onConfigDialogReturn(dialogResult, returnObject) {
    if (Srch.U.n(returnObject)) {
        return;
    }
    var $v_0 = returnObject;
    if ($v_0 && null !== Search.Configuration.Refinement.$k) {
        var $v_1 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration.fromJSON($v_0);
        var $v_2 = Sys.Serialization.JavaScriptSerializer.serialize($v_1);
        Search.Configuration.Refinement.$k.value = $v_2;
    }
}


Search.Configuration.SettingsTab = function Search_Configuration_SettingsTab(name, e, tabid) {
    this.$$d_$4M_3 = Function.createDelegate(this, this.$4M_3);
    this.$$d_$4R_3 = Function.createDelegate(this, this.$4R_3);
    this.$$d_$4N_3 = Function.createDelegate(this, this.$4N_3);
    this.$$d_$4S_3 = Function.createDelegate(this, this.$4S_3);
    this.$$d_$4L_3 = Function.createDelegate(this, this.$4L_3);
    this.$$d_$4Q_3 = Function.createDelegate(this, this.$4Q_3);
    this.$$d_$4O_3 = Function.createDelegate(this, this.$4O_3);
    this.$$d_$4P_3 = Function.createDelegate(this, this.$4P_3);
    this.$$d_$4U_3 = Function.createDelegate(this, this.$4U_3);
    this.$$d_$4V_3 = Function.createDelegate(this, this.$4V_3);
    this.$$d_$4T_3 = Function.createDelegate(this, this.$4T_3);
    Search.Configuration.SettingsTab.initializeBase(this, [ name, e, tabid ]);
}
Search.Configuration.SettingsTab.get_$2S = function Search_Configuration_SettingsTab$get_$2S() {
    if (!Search.Configuration.SettingsTab.$2R) {
        Search.Configuration.SettingsTab.$2R = $get(Search.Configuration.QueryBuilder.get_$F() + 'throttlehigh');
    }
    return Search.Configuration.SettingsTab.$2R;
}
Search.Configuration.SettingsTab.get_$2W = function Search_Configuration_SettingsTab$get_$2W() {
    if (!Search.Configuration.SettingsTab.$2V) {
        Search.Configuration.SettingsTab.$2V = $get(Search.Configuration.QueryBuilder.get_$F() + 'throttleregular');
    }
    return Search.Configuration.SettingsTab.$2V;
}
Search.Configuration.SettingsTab.get_$2U = function Search_Configuration_SettingsTab$get_$2U() {
    if (!Search.Configuration.SettingsTab.$2T) {
        Search.Configuration.SettingsTab.$2T = $get(Search.Configuration.QueryBuilder.get_$F() + 'throttlelow');
    }
    return Search.Configuration.SettingsTab.$2T;
}
Search.Configuration.SettingsTab.get_$3Q = function Search_Configuration_SettingsTab$get_$3Q() {
    if (!Search.Configuration.SettingsTab.$25) {
        Search.Configuration.SettingsTab.$25 = $get(Search.Configuration.QueryBuilder.get_$F() + 'queryRuleUse');
    }
    return Search.Configuration.SettingsTab.$25;
}
Search.Configuration.SettingsTab.get_$3P = function Search_Configuration_SettingsTab$get_$3P() {
    if (!Search.Configuration.SettingsTab.$24) {
        Search.Configuration.SettingsTab.$24 = $get(Search.Configuration.QueryBuilder.get_$F() + 'queryRuleNotUse');
    }
    return Search.Configuration.SettingsTab.$24;
}
Search.Configuration.SettingsTab.get_$39 = function Search_Configuration_SettingsTab$get_$39() {
    if (!Search.Configuration.SettingsTab.$1b) {
        Search.Configuration.SettingsTab.$1b = $get(Search.Configuration.QueryBuilder.get_$F() + 'displaySync');
    }
    return Search.Configuration.SettingsTab.$1b;
}
Search.Configuration.SettingsTab.get_$37 = function Search_Configuration_SettingsTab$get_$37() {
    if (!Search.Configuration.SettingsTab.$1a) {
        Search.Configuration.SettingsTab.$1a = $get(Search.Configuration.QueryBuilder.get_$F() + 'displayAsync');
    }
    return Search.Configuration.SettingsTab.$1a;
}
Search.Configuration.SettingsTab.get_$3A = function Search_Configuration_SettingsTab$get_$3A() {
    if (!Search.Configuration.SettingsTab.$1e) {
        Search.Configuration.SettingsTab.$1e = $get(Search.Configuration.QueryBuilder.get_$F() + 'enableUrlRewrite');
    }
    return Search.Configuration.SettingsTab.$1e;
}
Search.Configuration.SettingsTab.get_$36 = function Search_Configuration_SettingsTab$get_$36() {
    if (!Search.Configuration.SettingsTab.$1Z) {
        Search.Configuration.SettingsTab.$1Z = $get(Search.Configuration.QueryBuilder.get_$F() + 'disableUrlRewrite');
    }
    return Search.Configuration.SettingsTab.$1Z;
}
Search.Configuration.SettingsTab.get_$1d = function Search_Configuration_SettingsTab$get_$1d() {
    if (!Search.Configuration.SettingsTab.$1c) {
        Search.Configuration.SettingsTab.$1c = $get(Search.Configuration.QueryBuilder.get_$F() + 'enableTrimDuplicates');
    }
    return Search.Configuration.SettingsTab.$1c;
}
Search.Configuration.SettingsTab.get_$1Y = function Search_Configuration_SettingsTab$get_$1Y() {
    if (!Search.Configuration.SettingsTab.$1X) {
        Search.Configuration.SettingsTab.$1X = $get(Search.Configuration.QueryBuilder.get_$F() + 'disableTrimDuplicates');
    }
    return Search.Configuration.SettingsTab.$1X;
}
Search.Configuration.SettingsTab.prototype = {
    
    onTabLoad: function Search_Configuration_SettingsTab$onTabLoad() {
        Search.Configuration.CustomTab.prototype.onTabLoad.call(this);
        if (!Srch.U.n(Search.Configuration.SettingsTab.get_$2S()) && !Srch.U.n(Search.Configuration.SettingsTab.get_$2W()) && !Srch.U.n(Search.Configuration.SettingsTab.get_$2U())) {
            if (Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(5).toLowerCase()) {
                var $v_3 = $get('priorityDiv');
                Search.Configuration.QueryBuilderUtility.hide($v_3);
            }
            else {
                var $v_4 = Search.Configuration.QueryBuilder.$0.ClientType;
                if (!Srch.U.e($v_4)) {
                    if ($v_4 === 'ContentSearchHigh') {
                        Search.Configuration.SettingsTab.get_$2S().checked = true;
                    }
                    else if ($v_4 === 'ContentSearchRegular') {
                        Search.Configuration.SettingsTab.get_$2W().checked = true;
                    }
                    else {
                        Search.Configuration.SettingsTab.get_$2U().checked = true;
                    }
                }
            }
        }
        var $v_0 = $get('trimDuplicatesDiv');
        if (!Srch.U.n($v_0)) {
            if (Search.Configuration.QueryBuilder.$1.toLowerCase() !== Search.Configuration.QueryBuilderMode.toString(5).toLowerCase()) {
                Search.Configuration.QueryBuilderUtility.hide($v_0);
            }
            else {
                Search.Configuration.QueryBuilderUtility.show($v_0);
            }
        }
        Srch.U.addHandler(Search.Configuration.SettingsTab.get_$2S(), 'click', this.$$d_$4T_3);
        Srch.U.addHandler(Search.Configuration.SettingsTab.get_$2W(), 'click', this.$$d_$4V_3);
        Srch.U.addHandler(Search.Configuration.SettingsTab.get_$2U(), 'click', this.$$d_$4U_3);
        Srch.U.addHandler(Search.Configuration.SettingsTab.get_$39(), 'click', this.$$d_$4P_3);
        Srch.U.addHandler(Search.Configuration.SettingsTab.get_$37(), 'click', this.$$d_$4O_3);
        Srch.U.addHandler(Search.Configuration.SettingsTab.get_$3Q(), 'click', this.$$d_$4Q_3);
        Srch.U.addHandler(Search.Configuration.SettingsTab.get_$3P(), 'click', this.$$d_$4L_3);
        Srch.U.addHandler(Search.Configuration.SettingsTab.get_$3A(), 'click', this.$$d_$4S_3);
        Srch.U.addHandler(Search.Configuration.SettingsTab.get_$36(), 'click', this.$$d_$4N_3);
        if (!Srch.U.n(Search.Configuration.SettingsTab.get_$1d())) {
            Srch.U.addHandler(Search.Configuration.SettingsTab.get_$1d(), 'click', this.$$d_$4R_3);
        }
        if (!Srch.U.n(Search.Configuration.SettingsTab.get_$1Y())) {
            Srch.U.addHandler(Search.Configuration.SettingsTab.get_$1Y(), 'click', this.$$d_$4M_3);
        }
        if (Search.Configuration.QueryBuilder.$0.Async) {
            Search.Configuration.SettingsTab.get_$37().checked = true;
        }
        else {
            Search.Configuration.SettingsTab.get_$39().checked = true;
        }
        if (Search.Configuration.QueryBuilder.$0.EnableQueryRules) {
            Search.Configuration.SettingsTab.get_$3Q().checked = true;
        }
        else {
            Search.Configuration.SettingsTab.get_$3P().checked = true;
        }
        var $v_1 = Search.Configuration.QueryBuilder.$0.Properties[Search.Configuration.SettingsTab.$W];
        if ($v_1) {
            Search.Configuration.SettingsTab.get_$36().checked = true;
        }
        else {
            Search.Configuration.SettingsTab.get_$3A().checked = true;
        }
        var $v_2 = Search.Configuration.QueryBuilder.$0.ClientType;
        if ($v_2 === 'ContentSearchHigh') {
            Search.Configuration.SettingsTab.get_$2S().checked = true;
        }
        else if ($v_2 === 'ContentSearchLow') {
            Search.Configuration.SettingsTab.get_$2U().checked = true;
        }
        else {
            Search.Configuration.SettingsTab.get_$2W().checked = true;
        }
        if (!Srch.U.n(Search.Configuration.QueryBuilder.$0.TrimDuplicates)) {
            if (Search.Configuration.QueryBuilder.$0.TrimDuplicates) {
                if (!Srch.U.n(Search.Configuration.SettingsTab.get_$1d())) {
                    Search.Configuration.SettingsTab.get_$1d().checked = true;
                }
            }
            else {
                if (!Srch.U.n(Search.Configuration.SettingsTab.get_$1Y())) {
                    Search.Configuration.SettingsTab.get_$1Y().checked = true;
                }
            }
        }
    },
    
    $4T_3: function Search_Configuration_SettingsTab$$4T_3($p0) {
        Search.Configuration.QueryBuilder.$0.ClientType = 'ContentSearchHigh';
    },
    
    $4V_3: function Search_Configuration_SettingsTab$$4V_3($p0) {
        Search.Configuration.QueryBuilder.$0.ClientType = 'ContentSearchRegular';
    },
    
    $4U_3: function Search_Configuration_SettingsTab$$4U_3($p0) {
        Search.Configuration.QueryBuilder.$0.ClientType = 'ContentSearchLow';
    },
    
    $4O_3: function Search_Configuration_SettingsTab$$4O_3($p0) {
        Search.Configuration.QueryBuilder.$0.Async = true;
    },
    
    $4P_3: function Search_Configuration_SettingsTab$$4P_3($p0) {
        Search.Configuration.QueryBuilder.$0.Async = false;
    },
    
    $4Q_3: function Search_Configuration_SettingsTab$$4Q_3($p0) {
        Search.Configuration.QueryBuilder.$0.EnableQueryRules = true;
    },
    
    $4L_3: function Search_Configuration_SettingsTab$$4L_3($p0) {
        Search.Configuration.QueryBuilder.$0.EnableQueryRules = false;
    },
    
    $4S_3: function Search_Configuration_SettingsTab$$4S_3($p0) {
        if (Search.Configuration.QueryBuilder.$0.Properties[Search.Configuration.SettingsTab.$W]) {
            delete Search.Configuration.QueryBuilder.$0.Properties[Search.Configuration.SettingsTab.$W];
        }
    },
    
    $4N_3: function Search_Configuration_SettingsTab$$4N_3($p0) {
        Search.Configuration.QueryBuilder.$0.Properties[Search.Configuration.SettingsTab.$W] = true;
    },
    
    $4R_3: function Search_Configuration_SettingsTab$$4R_3($p0) {
        Search.Configuration.QueryBuilder.$0.TrimDuplicates = true;
    },
    
    $4M_3: function Search_Configuration_SettingsTab$$4M_3($p0) {
        Search.Configuration.QueryBuilder.$0.TrimDuplicates = false;
    }
}


Search.Configuration.SortTab = function Search_Configuration_SortTab(name, e, tabid) {
    Search.Configuration.SortTab.initializeBase(this, [ name, e, tabid ]);
    if (Search.Configuration.QueryBuilder.get_$H().IsSPFSKU) {
        Search.Configuration.QueryBuilderUtility.hide($get('xrankSection'));
        Search.Configuration.QueryBuilderUtility.hide($get('rankmodelSection'));
    }
}
Search.Configuration.SortTab.get_$3e = function Search_Configuration_SortTab$get_$3e() {
    if (!Search.Configuration.SortTab.$2I) {
        Search.Configuration.SortTab.$2I = $get('SortByAvailable');
    }
    return Search.Configuration.SortTab.$2I;
}
Search.Configuration.SortTab.get_$3f = function Search_Configuration_SortTab$get_$3f() {
    if (!Search.Configuration.SortTab.$2J) {
        Search.Configuration.SortTab.$2J = $get('SortByUnavailable');
    }
    return Search.Configuration.SortTab.$2J;
}
Search.Configuration.SortTab.get_$O = function Search_Configuration_SortTab$get_$O() {
    if (!Search.Configuration.SortTab.$2L) {
        Search.Configuration.SortTab.$2L = $get('SortList');
    }
    return Search.Configuration.SortTab.$2L;
}
Search.Configuration.SortTab.get_$4o = function Search_Configuration_SortTab$get_$4o() {
    if (!Search.Configuration.SortTab.$2K) {
        Search.Configuration.SortTab.$2K = Search.Configuration.SortTab.$3x($get('SortItem'));
    }
    return Search.Configuration.SortTab.$2K;
}
Search.Configuration.SortTab.get_$p = function Search_Configuration_SortTab$get_$p() {
    if (!Search.Configuration.SortTab.$2c) {
        Search.Configuration.SortTab.$2c = $get('XRankList');
    }
    return Search.Configuration.SortTab.$2c;
}
Search.Configuration.SortTab.get_$4v = function Search_Configuration_SortTab$get_$4v() {
    if (!Search.Configuration.SortTab.$2b) {
        Search.Configuration.SortTab.$2b = Search.Configuration.SortTab.$3z($get('XRankItem'));
    }
    return Search.Configuration.SortTab.$2b;
}
Search.Configuration.SortTab.get_$2y = function Search_Configuration_SortTab$get_$2y() {
    if (!Search.Configuration.SortTab.$1H) {
        Search.Configuration.SortTab.$1H = Search.Configuration.QueryBuilderUtility.getFirstChild($get('addRankRuleDiv'));
    }
    return Search.Configuration.SortTab.$1H;
}
Search.Configuration.SortTab.get_$17 = function Search_Configuration_SortTab$get_$17() {
    if (!Search.Configuration.SortTab.$27) {
        Search.Configuration.SortTab.$27 = Search.Configuration.QueryBuilderUtility.getClientElementById('rankModelDropDown');
    }
    return Search.Configuration.SortTab.$27;
}
Search.Configuration.SortTab.get_$2z = function Search_Configuration_SortTab$get_$2z() {
    return 10;
}
Search.Configuration.SortTab.setSortByUnavailable = function Search_Configuration_SortTab$setSortByUnavailable() {
    Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.get_$3e());
    Search.Configuration.QueryBuilderUtility.show(Search.Configuration.SortTab.get_$3f());
}
Search.Configuration.SortTab.setSortByAvailable = function Search_Configuration_SortTab$setSortByAvailable() {
    Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.get_$3f());
    Search.Configuration.QueryBuilderUtility.show(Search.Configuration.SortTab.get_$3e());
}
Search.Configuration.SortTab.addSort = function Search_Configuration_SortTab$addSort(e) {
    Search.Configuration.SortTab.$2x();
    Search.Configuration.SortTab.setSortsOnQBState();
}
Search.Configuration.SortTab.$2x = function Search_Configuration_SortTab$$2x() {
    if (Search.Configuration.SortTab.$t < 5) {
        Search.Configuration.SortTab.$t++;
        var $v_0 = Search.Configuration.SortTab.get_$4o().cloneNode(true);
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.SortTab.$3E($v_0));
        Search.Configuration.SortTab.get_$O().appendChild($v_0);
        Search.Configuration.SortTab.$z();
        var $v_1 = Search.Configuration.SortTab.$Z($v_0);
        var $v_2 = $v_1.getElementsByTagName('option');
        var $v_3 = Search.Configuration.SortTab.get_$O().getElementsByTagName('select');
        $v_1.selectedIndex = 0;
        for (var $v_4 = 0; $v_4 < $v_2.length - 1; $v_4++) {
            if (($v_2[$v_4]).value.toUpperCase() === 'Rank'.toUpperCase()) {
                $v_2[$v_4].parentNode.removeChild($v_2[$v_4]);
                break;
            }
        }
        if (Search.Configuration.SortTab.$t === 5) {
            Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.$c);
        }
        Search.Configuration.SortTab.$z();
        Search.Configuration.SortTab.$r();
        Search.Configuration.SortTab.$2H($v_0);
    }
}
Search.Configuration.SortTab.deleteSort = function Search_Configuration_SortTab$deleteSort(e) {
    var $v_0 = null;
    $v_0 = Search.Configuration.SortTab.$2i(e);
    $v_0.parentNode.removeChild($v_0);
    Search.Configuration.SortTab.$t--;
    Search.Configuration.QueryBuilderUtility.show(Search.Configuration.SortTab.$c);
    Search.Configuration.SortTab.$z();
    Search.Configuration.SortTab.setSortsOnQBState();
}
Search.Configuration.SortTab.selectSortPropety = function Search_Configuration_SortTab$selectSortPropety(e) {
    var $v_0 = Search.Configuration.SortTab.$2i(e);
    Search.Configuration.SortTab.$2H($v_0);
    Search.Configuration.SortTab.$z();
    Search.Configuration.SortTab.$r();
    Search.Configuration.SortTab.setSortsOnQBState();
}
Search.Configuration.SortTab.refreshXRank = function Search_Configuration_SortTab$refreshXRank() {
    Search.Configuration.QueryBuilder.$0.RankRules = Search.Configuration.SortTab.$46();
}
Search.Configuration.SortTab.$3s = function Search_Configuration_SortTab$$3s() {
    var $v_0 = Search.Configuration.QueryBuilderUtility.getNextElement(Search.Configuration.QueryBuilderUtility.getFirstChild(Search.Configuration.SortTab.get_$O()));
    var $v_1 = null;
    while (!Srch.U.n($v_0) && $v_0 !== Search.Configuration.SortTab.$c) {
        $v_1 = $v_0;
        $v_0 = $v_0.nextSibling;
        Search.Configuration.SortTab.get_$O().removeChild($v_1);
    }
    Search.Configuration.SortTab.$t = 1;
}
Search.Configuration.SortTab.$3t = function Search_Configuration_SortTab$$3t() {
    var $v_0 = Search.Configuration.SortTab.$P(Search.Configuration.SortTab.$Y(Search.Configuration.SortTab.get_$p()));
    var $v_1 = null;
    while (!Srch.U.n($v_0)) {
        $v_1 = $v_0;
        $v_0 = Search.Configuration.SortTab.$P($v_0);
        Search.Configuration.SortTab.get_$p().removeChild($v_1);
    }
    Search.Configuration.SortTab.$i = 0;
}
Search.Configuration.SortTab.$4n = function Search_Configuration_SortTab$$4n($p0) {
    var $v_0 = $get('XRankFixSortSec');
    if ($p0) {
        Search.Configuration.QueryBuilderUtility.show($v_0);
    }
    else {
        Search.Configuration.QueryBuilderUtility.hide($v_0);
    }
}
Search.Configuration.SortTab.$r = function Search_Configuration_SortTab$$r() {
    var $v_0 = false;
    var $v_1 = Search.Configuration.SortTab.$Y(Search.Configuration.SortTab.get_$O());
    var $v_2 = Search.Configuration.SortTab.$Z($v_1);
    if ($v_2.value.toUpperCase() === 'Rank'.toUpperCase()) {
        $v_0 = true;
    }
    var $v_3 = Search.Configuration.SortTab.$Y(Search.Configuration.SortTab.get_$p());
    var $v_4 = Search.Configuration.SortTab.$P($v_3);
    if (Search.Configuration.SortTab.$Q && $v_0) {
        Search.Configuration.QueryBuilder.$0.RankRules = Search.Configuration.SortTab.$Q;
        Search.Configuration.SortTab.$Q = null;
    }
    else if (!Search.Configuration.SortTab.$Q && !$v_0) {
        Search.Configuration.SortTab.$Q = Search.Configuration.QueryBuilder.$0.RankRules;
        Search.Configuration.QueryBuilder.$0.RankRules = null;
    }
    while (!Srch.U.n($v_4)) {
        var $v_5 = Search.Configuration.SortTab.$1E[Search.Configuration.SortTab.$a($v_4).id];
        $v_5.enableControl($v_0);
        if ($v_0) {
            Search.Configuration.QueryBuilderUtility.enable($v_4);
        }
        else {
            Search.Configuration.QueryBuilderUtility.disable($v_4);
        }
        $v_4 = Search.Configuration.SortTab.$P($v_4);
    }
    if ($v_0) {
        Search.Configuration.QueryBuilderUtility.enable($get('rankModelDiv'));
        Search.Configuration.QueryBuilderUtility.enable($get('addRankRuleDiv'));
    }
    else {
        Search.Configuration.QueryBuilderUtility.disable($get('rankModelDiv'));
        Search.Configuration.QueryBuilderUtility.disable($get('addRankRuleDiv'));
    }
    Search.Configuration.SortTab.$4n(!$v_0);
}
Search.Configuration.SortTab.updateRankModel = function Search_Configuration_SortTab$updateRankModel() {
    Search.Configuration.QueryBuilder.$0.RankModelId = Search.Configuration.SortTab.$4A();
}
Search.Configuration.SortTab.$4A = function Search_Configuration_SortTab$$4A() {
    if (!Search.Configuration.SortTab.get_$17().selectedIndex) {
        return null;
    }
    return Search.Configuration.SortTab.get_$17().value;
}
Search.Configuration.SortTab.setFirstSortToRelevance = function Search_Configuration_SortTab$setFirstSortToRelevance() {
    var $v_0 = Search.Configuration.SortTab.$Y(Search.Configuration.SortTab.get_$O());
    var $v_1 = Search.Configuration.SortTab.$Z($v_0);
    $v_1.selectedIndex = 1;
    Search.Configuration.SortTab.$z();
    var $v_2 = Search.Configuration.SortTab.$e($v_0);
    $v_2.selectedIndex = 1;
    Search.Configuration.SortTab.$2H($v_0);
    Search.Configuration.SortTab.setSortsOnQBState();
    Search.Configuration.SortTab.$r();
}
Search.Configuration.SortTab.$4l = function Search_Configuration_SortTab$$4l() {
    var $v_0 = Search.Configuration.SortTab.$Y(Search.Configuration.SortTab.get_$O());
    while ($v_0) {
        Search.Configuration.SortTab.$2H($v_0);
        $v_0 = Search.Configuration.SortTab.$P($v_0);
    }
}
Search.Configuration.SortTab.$2H = function Search_Configuration_SortTab$$2H($p0) {
    if ((Search.Configuration.SortTab.$Z($p0)).value === 'Rank') {
        var $v_0 = Search.Configuration.SortTab.$e($p0);
        $v_0.selectedIndex = 1;
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.$e($p0));
    }
    else if (!(Search.Configuration.SortTab.$Z($p0)).selectedIndex) {
        Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.$e($p0));
    }
    else {
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.SortTab.$e($p0));
    }
}
Search.Configuration.SortTab.$z = function Search_Configuration_SortTab$$z() {
    var $v_0 = Search.Configuration.SortTab.$Y(Search.Configuration.SortTab.get_$O());
    while ($v_0) {
        Search.Configuration.SortTab.$41(Search.Configuration.SortTab.$Z($v_0));
        $v_0 = Search.Configuration.SortTab.$P($v_0);
    }
}
Search.Configuration.SortTab.$41 = function Search_Configuration_SortTab$$41($p0) {
    var $v_0 = Search.Configuration.SortTab.get_$O().getElementsByTagName('select');
    var $v_1 = $p0.getElementsByTagName('option');
    for (var $v_2 = 1; $v_2 < $v_1.length; $v_2++) {
        var $v_3 = $v_1[$v_2];
        if (Search.Configuration.SortTab.$4H($v_3, $v_0)) {
            Search.Configuration.QueryBuilderUtility.hide($v_3);
        }
        else {
            Search.Configuration.QueryBuilderUtility.show($v_3);
        }
    }
}
Search.Configuration.SortTab.$4H = function Search_Configuration_SortTab$$4H($p0, $p1) {
    for (var $v_0 = 0; $v_0 < $p1.length; $v_0++) {
        var $v_1 = $p1[$v_0];
        if ($v_1.className.indexOf('qb-sortProperty') !== -1) {
            var $v_2 = $v_1.selectedIndex;
            var $v_3 = $v_1.getElementsByTagName('option');
            var $v_4 = ($v_3[$v_2]);
            if ($v_4.value === ($p0).value && $v_4 !== $p0) {
                return true;
            }
        }
    }
    return false;
}
Search.Configuration.SortTab.$4r = function Search_Configuration_SortTab$$4r() {
    var $v_0 = Search.Configuration.QueryBuilder.$0.Sorts;
    if (!Srch.U.n($v_0)) {
        var $v_1 = Search.Configuration.QueryBuilderUtility.getFirstChild(Search.Configuration.SortTab.get_$O());
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            if ($v_2) {
                Search.Configuration.SortTab.$2x();
                $v_1 = Search.Configuration.QueryBuilderUtility.getNextElement($v_1);
            }
            var $v_3 = Search.Configuration.SortTab.$Z($v_1);
            $v_3.value = $v_0[$v_2].p;
            var $v_4 = Search.Configuration.SortTab.$e($v_1);
            $v_4.selectedIndex = $v_0[$v_2].d;
        }
        if ($v_0.length < 5) {
            Search.Configuration.QueryBuilderUtility.show(Search.Configuration.SortTab.$c);
        }
        else {
            Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.$c);
        }
    }
}
Search.Configuration.SortTab.setSortsOnQBState = function Search_Configuration_SortTab$setSortsOnQBState() {
    var $v_0 = [];
    var $v_1 = {};
    var $v_2 = Search.Configuration.SortTab.$Y(Search.Configuration.SortTab.get_$O());
    while (!Srch.U.n($v_2)) {
        var $v_3 = Search.Configuration.SortTab.$Z($v_2);
        var $v_4 = Search.Configuration.SortTab.$e($v_2);
        var $v_5 = $v_3.value;
        if (Srch.U.n($v_1[$v_5]) && $v_3.selectedIndex) {
            var $v_6 = new Srch.ResultSort($v_3.value, parseInt($v_4.value));
            Srch.U.appendArray($v_0, $v_6);
            $v_1[$v_5] = true;
        }
        $v_2 = Search.Configuration.SortTab.$P($v_2);
    }
    Search.Configuration.QueryBuilder.$0.Sorts = $v_0;
}
Search.Configuration.SortTab.addXRank = function Search_Configuration_SortTab$addXRank(e) {
    if (Search.Configuration.SortTab.$i < 5) {
        Search.Configuration.SortTab.$i++;
        var $v_0 = Search.Configuration.SortTab.get_$4v().cloneNode(true);
        var $v_1 = Search.Configuration.SortTab.$1l($v_0);
        if (Search.Configuration.SortTab.$i === 1) {
            Search.Configuration.QueryBuilderUtility.$6($v_1, Srch.Res.qb_SortTab_ChangeRankingWhen);
        }
        else {
            Search.Configuration.QueryBuilderUtility.$6($v_1, Srch.Res.qb_SortTab_OrWhen);
        }
        Srch.U.addHandler(Search.Configuration.SortTab.$g($v_0), 'change', Search.Configuration.SortTab.showAllContentTypesDropDown);
        Srch.U.addHandler(Search.Configuration.SortTab.$1n($v_0), 'change', Search.Configuration.SortTab.showHideContentTypeDropDowns);
        var $v_2 = Search.Configuration.SortTab.$11($v_0);
        var $v_3 = Search.Configuration.SortTab.$a($v_0);
        $v_2.setAttribute('id', 'tagginginput_' + Search.Configuration.SortTab.$1U);
        $v_3.setAttribute('id', 'taggingdiv_' + Search.Configuration.SortTab.$1U);
        Search.Configuration.SortTab.$1U++;
        if (Search.Configuration.SortTab.$i === 5) {
            Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.get_$2y());
        }
        Search.Configuration.SortTab.get_$p().appendChild($v_0);
        Search.Configuration.SortTab.loadXRankTagControl($v_0);
        Search.Configuration.SortTab.$r();
    }
}
Search.Configuration.SortTab.loadXRankTagControl = function Search_Configuration_SortTab$loadXRankTagControl(listItem) {
    var $v_0 = Search.Configuration.SortTab.$a(listItem);
    var $v_1 = Search.Configuration.SortTab.$11(listItem);
    if ($v_0) {
        $v_0.Lcid = SP.PageContextInfo.get_currentLanguage();
        $v_0.InputFieldId = $v_1.id;
        $v_0.TermSetId = '00000000-0000-0000-0000-000000000000';
        $v_0.AnchorId = '00000000-0000-0000-0000-000000000000';
        $v_0.FieldName = 'Tags';
        $v_0.SspId = '00000000-0000-0000-0000-000000000000';
        $v_0.IsMulti = false;
        $v_0.IsSpanTermSets = true;
        $v_0.IsSpanTermStores = true;
        $v_0.IsAddTerms = false;
        $v_0.IsIgnoreFormatting = false;
        $v_0.IsIncludeDeprecated = true;
        $v_0.IsIncludePathData = false;
        $v_0.IsIncludeUnavailable = true;
        $v_0.IsUseCommaAsDelimiter = false;
        $v_0.IsIncludeTermSetName = false;
        $v_0.ExcludeKeyword = false;
        var $v_2 = Srch.ScriptApplicationManager.get_clientRuntimeContext();
        var $v_3 = $v_2.get_url();
        if (!$v_3.endsWith('/')) {
            $v_3 += '/';
        }
        $v_3 += '_vti_bin/TaxonomyInternalService.json';
        $v_0.WebServiceUrl = $v_3;
        RegisterSodDep('ScriptForWebTaggingUI.js', 'sp.js');
        RegisterSodDep('ScriptForWebTaggingUI.js', 'sp.ui.rte.js');
        EnsureScript('ScriptForWebTaggingUI.js', TypeofFullName('Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI'), function() {
            Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.onLoad($v_0.id);
            var $v_4 = new Microsoft.SharePoint.Taxonomy.ControlObject($v_0);
            Search.Configuration.SortTab.$1E[$v_0.id] = $v_4;
        });
    }
}
Search.Configuration.SortTab.showHideContentTypeDropDowns = function Search_Configuration_SortTab$showHideContentTypeDropDowns(e) {
    if (e.target) {
        var $v_0 = e.target;
        if ($v_0.value === '5') {
            var $v_1 = Search.Configuration.SortTab.$g($v_0.parentNode);
            $v_1.selectedIndex = 0;
            Search.Configuration.QueryBuilderUtility.show($v_1);
            Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.$f($v_0.parentNode));
            Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.$a($v_0.parentNode));
            Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.$11($v_0.parentNode));
        }
        else if ($v_0.value === '7') {
            Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.$g($v_0.parentNode));
            Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.$m($v_0.parentNode));
            Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.$f($v_0.parentNode));
            Search.Configuration.QueryBuilderUtility.show(Search.Configuration.SortTab.$a($v_0.parentNode));
        }
        else {
            Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.$g($v_0.parentNode));
            Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.$m($v_0.parentNode));
            Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.$a($v_0.parentNode));
            Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.$11($v_0.parentNode));
            Search.Configuration.QueryBuilderUtility.show(Search.Configuration.SortTab.$f($v_0.parentNode));
        }
        Search.Configuration.SortTab.refreshXRank();
    }
}
Search.Configuration.SortTab.showAllContentTypesDropDown = function Search_Configuration_SortTab$showAllContentTypesDropDown(e) {
    if (e.target) {
        var $v_0 = e.target;
        if ($v_0.selectedIndex === $v_0.options.length - 1) {
            var $v_1 = Search.Configuration.SortTab.$m($v_0.parentNode);
            $v_1.selectedIndex = 0;
            Search.Configuration.QueryBuilderUtility.show($v_1);
            Search.Configuration.QueryBuilderUtility.hide($v_0);
        }
    }
}
Search.Configuration.SortTab.deleteXRank = function Search_Configuration_SortTab$deleteXRank(e) {
    var $v_0 = Search.Configuration.SortTab.$2i(e);
    if (Search.Configuration.SortTab.$i === 5) {
        Search.Configuration.QueryBuilderUtility.show(Search.Configuration.SortTab.get_$2y());
    }
    $v_0.parentNode.removeChild($v_0);
    Search.Configuration.SortTab.$i--;
    var $v_1 = Search.Configuration.SortTab.$1l(Search.Configuration.QueryBuilderUtility.getNextElement(Search.Configuration.SortTab.$Y(Search.Configuration.SortTab.get_$p())));
    if ($v_1) {
        Search.Configuration.QueryBuilderUtility.$6($v_1, Srch.Res.qb_SortTab_ChangeRankingWhen);
    }
    Search.Configuration.SortTab.refreshXRank();
}
Search.Configuration.SortTab.$46 = function Search_Configuration_SortTab$$46() {
    var $v_0 = [];
    if (!Srch.U.n(Search.Configuration.SortTab.$Q)) {
        return $v_0;
    }
    var $v_1 = {};
    var $v_2 = Search.Configuration.SortTab.$P(Search.Configuration.SortTab.$Y(Search.Configuration.SortTab.get_$p()));
    while (!Srch.U.n($v_2)) {
        var $v_3 = Search.Configuration.SortTab.$1n($v_2);
        var $v_4 = Search.Configuration.SortTab.$f($v_2);
        var $v_5 = $v_4.value;
        var $v_6 = Search.Configuration.SortTab.$3C($v_2);
        var $v_7 = parseInt($v_6.value);
        if ($v_3.value === '5') {
            if (!Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.SortTab.$g($v_2))) {
                $v_4 = (Search.Configuration.SortTab.$g($v_2));
                $v_5 = $v_4.value;
            }
            else if (!Search.Configuration.QueryBuilderUtility.isHidden(Search.Configuration.SortTab.$m($v_2))) {
                $v_4 = (Search.Configuration.SortTab.$m($v_2));
                $v_5 = $v_4.value;
            }
        }
        else if ($v_3.value === '7') {
            var $v_9 = Search.Configuration.SortTab.$1E[Search.Configuration.SortTab.$a($v_2).id];
            var $v_A = $v_9.getRawText();
            $v_5 = $v_A.substring($v_A.lastIndexOf('|') + 1, $v_A.length);
            if ($v_5 === SP.Guid.get_empty().toString()) {
                $v_2 = Search.Configuration.SortTab.$P($v_2);
                continue;
            }
        }
        var $v_8 = $v_3.value + $v_5 + $v_7.toString();
        if (Srch.U.n($v_1[$v_8])) {
            var $v_B = new Srch.RankRule(parseInt($v_3.value), $v_5, $v_7);
            Srch.U.appendArray($v_0, $v_B);
            $v_1[$v_8] = true;
        }
        $v_2 = Search.Configuration.SortTab.$P($v_2);
    }
    return $v_0;
}
Search.Configuration.SortTab.$4s = function Search_Configuration_SortTab$$4s() {
    Search.Configuration.SortTab.$3t();
    var $v_0 = Search.Configuration.SortTab.$Q;
    if (!Srch.U.n($v_0) && $v_0.length > 0) {
        Search.Configuration.QueryBuilder.$0.RankRules = Search.Configuration.SortTab.$Q;
        Search.Configuration.SortTab.$Q = null;
    }
    $v_0 = Search.Configuration.QueryBuilder.$0.RankRules;
    if (!Srch.U.n($v_0)) {
        var $v_1 = Search.Configuration.QueryBuilderUtility.getFirstChild(Search.Configuration.SortTab.get_$p());
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            Search.Configuration.SortTab.addXRank(null);
            $v_1 = Search.Configuration.QueryBuilderUtility.getNextElement($v_1);
            var $v_3 = Search.Configuration.SortTab.$1l($v_1);
            if ($v_2 > 1) {
                Search.Configuration.QueryBuilderUtility.show($v_3);
            }
            var $v_4 = Search.Configuration.SortTab.$1n($v_1);
            $v_4.selectedIndex = $v_0[$v_2].matchType;
            if ($v_4.selectedIndex === 5) {
                Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.$f($v_1));
                var $v_7 = false;
                var $v_8 = Search.Configuration.SortTab.$g($v_1);
                for (var $v_9 = 0; $v_9 < $v_8.options.length; $v_9++) {
                    if (($v_8.options[$v_9]).value === $v_0[$v_2].matchValue) {
                        $v_8.selectedIndex = $v_9;
                        Search.Configuration.QueryBuilderUtility.show($v_8);
                        $v_7 = true;
                        break;
                    }
                }
                if (!$v_7) {
                    var $v_A = Search.Configuration.SortTab.$m($v_1);
                    for (var $v_B = 0; $v_B < $v_A.options.length; $v_B++) {
                        if (($v_A.options[$v_B]).value === $v_0[$v_2].matchValue) {
                            $v_A.selectedIndex = $v_B;
                            Search.Configuration.QueryBuilderUtility.show($v_A);
                            break;
                        }
                    }
                }
            }
            else if ($v_4.selectedIndex === 7) {
                var $v_C = Search.Configuration.SortTab.$a($v_1);
                var $v_D = Search.Configuration.SortTab.$1E[$v_C.id];
                if ($v_D && $v_0[$v_2].matchValue !== '') {
                    $v_D.addTerm($v_0[$v_2].matchValue, $v_0[$v_2].matchValue);
                    $v_D.startupValidation();
                }
                Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.SortTab.$f($v_1));
                Search.Configuration.QueryBuilderUtility.show($v_C);
            }
            else {
                var $v_E = Search.Configuration.SortTab.$f($v_1);
                $v_E.value = $v_0[$v_2].matchValue;
            }
            var $v_5 = Search.Configuration.SortTab.$3C($v_1);
            var $v_6 = $v_0[$v_2].boost;
            if ($v_6 > Search.Configuration.SortTab.get_$2z()) {
                $v_5.selectedIndex = 0;
            }
            else if ($v_6 < -Search.Configuration.SortTab.get_$2z()) {
                $v_5.selectedIndex = $v_5.options.length - 1;
            }
            else {
                $v_5.value = $v_6.toString();
            }
        }
    }
    Search.Configuration.SortTab.$r();
}
Search.Configuration.SortTab.$3x = function Search_Configuration_SortTab$$3x($p0) {
    var $v_0 = $p0.cloneNode(true);
    var $v_1 = Search.Configuration.SortTab.$4B($v_0);
    Search.Configuration.QueryBuilderUtility.$6($v_1, Srch.Res.qb_SortTab_ThenBy);
    var $v_2 = Search.Configuration.SortTab.$3E($v_0);
    Search.Configuration.QueryBuilderUtility.show($v_2);
    return $v_0;
}
Search.Configuration.SortTab.$3z = function Search_Configuration_SortTab$$3z($p0) {
    var $v_0 = $p0.cloneNode(true);
    Search.Configuration.QueryBuilderUtility.show($v_0);
    return $v_0;
}
Search.Configuration.SortTab.$2i = function Search_Configuration_SortTab$$2i($p0) {
    if (!Srch.U.n($p0.target)) {
        return $p0.target.parentNode;
    }
    return ($p0.srcElement).parentNode;
}
Search.Configuration.SortTab.$Z = function Search_Configuration_SortTab$$Z($p0) {
    var $v_0 = Search.Configuration.QueryBuilderUtility.getFirstChild($p0);
    return Search.Configuration.QueryBuilderUtility.getNextElement($v_0);
}
Search.Configuration.SortTab.$e = function Search_Configuration_SortTab$$e($p0) {
    var $v_0 = Search.Configuration.SortTab.$Z($p0);
    return Search.Configuration.QueryBuilderUtility.getNextElement($v_0);
}
Search.Configuration.SortTab.$3E = function Search_Configuration_SortTab$$3E($p0) {
    var $v_0 = Search.Configuration.SortTab.$e($p0);
    return Search.Configuration.QueryBuilderUtility.getNextElement($v_0);
}
Search.Configuration.SortTab.$4B = function Search_Configuration_SortTab$$4B($p0) {
    return Search.Configuration.QueryBuilderUtility.getFirstChild(Search.Configuration.QueryBuilderUtility.getFirstChild($p0));
}
Search.Configuration.SortTab.$1l = function Search_Configuration_SortTab$$1l($p0) {
    return Search.Configuration.QueryBuilderUtility.getFirstChild($p0);
}
Search.Configuration.SortTab.$1n = function Search_Configuration_SortTab$$1n($p0) {
    return Search.Configuration.QueryBuilderUtility.getNextElement(Search.Configuration.SortTab.$1l($p0));
}
Search.Configuration.SortTab.$f = function Search_Configuration_SortTab$$f($p0) {
    return Search.Configuration.QueryBuilderUtility.getNextElement(Search.Configuration.SortTab.$1n($p0));
}
Search.Configuration.SortTab.$g = function Search_Configuration_SortTab$$g($p0) {
    return Search.Configuration.QueryBuilderUtility.getNextElement(Search.Configuration.SortTab.$f($p0));
}
Search.Configuration.SortTab.$m = function Search_Configuration_SortTab$$m($p0) {
    return Search.Configuration.QueryBuilderUtility.getNextElement(Search.Configuration.SortTab.$g($p0));
}
Search.Configuration.SortTab.$11 = function Search_Configuration_SortTab$$11($p0) {
    return Search.Configuration.QueryBuilderUtility.getNextElement(Search.Configuration.SortTab.$m($p0));
}
Search.Configuration.SortTab.$a = function Search_Configuration_SortTab$$a($p0) {
    return Search.Configuration.QueryBuilderUtility.getNextElement(Search.Configuration.SortTab.$11($p0));
}
Search.Configuration.SortTab.$48 = function Search_Configuration_SortTab$$48($p0) {
    return Search.Configuration.QueryBuilderUtility.getNextElement(Search.Configuration.SortTab.$a($p0));
}
Search.Configuration.SortTab.$3C = function Search_Configuration_SortTab$$3C($p0) {
    return Search.Configuration.QueryBuilderUtility.getNextElement(Search.Configuration.SortTab.$48($p0));
}
Search.Configuration.SortTab.$Y = function Search_Configuration_SortTab$$Y($p0) {
    return Search.Configuration.QueryBuilderUtility.getFirstChild($p0);
}
Search.Configuration.SortTab.$P = function Search_Configuration_SortTab$$P($p0) {
    return Search.Configuration.QueryBuilderUtility.getNextElement($p0);
}
Search.Configuration.SortTab.prototype = {
    
    onTabLoad: function Search_Configuration_SortTab$onTabLoad() {
        Search.Configuration.CustomTab.prototype.onTabLoad.call(this);
        if (!Search.Configuration.SortTab.$c) {
            Search.Configuration.SortTab.$c = $get('AddSortButton');
        }
        var $v_0 = Search.Configuration.QueryBuilder.$0.Sorts;
        if (!Srch.U.n($v_0)) {
            Search.Configuration.SortTab.$3s();
            Search.Configuration.SortTab.$4r();
            var $v_2 = $v_0[0];
            if ($v_2) {
                if ($v_2.p === '') {
                    Search.Configuration.SortTab.setFirstSortToRelevance();
                }
            }
            else {
                Search.Configuration.SortTab.setFirstSortToRelevance();
            }
        }
        var $v_1 = Search.Configuration.QueryBuilder.$0.RankRules;
        if (!Srch.U.n($v_1)) {
            Search.Configuration.SortTab.$4s();
        }
        Search.Configuration.SortTab.$4l();
        Search.Configuration.SortTab.$r();
        if (!Srch.U.e(Search.Configuration.QueryBuilder.$0.RankModelId)) {
            for (var $v_3 = 0; $v_3 < Search.Configuration.SortTab.get_$17().options.length; $v_3++) {
                if ((Search.Configuration.SortTab.get_$17().options[$v_3]).value.toLowerCase() === Search.Configuration.QueryBuilder.$0.RankModelId.toLowerCase()) {
                    Search.Configuration.SortTab.get_$17().selectedIndex = $v_3;
                    break;
                }
            }
        }
    }
}


Search.Configuration.TestQueryTab = function Search_Configuration_TestQueryTab(name, e, tabid) {
    Search.Configuration.TestQueryTab.initializeBase(this, [ name, e, tabid ]);
    if (!Search.Configuration.QueryBuilder.get_$H().UserHasAdminRights) {
        Search.Configuration.QueryBuilderUtility.hide($get('UserSegmentVariablesDiv'));
    }
    if (Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(2).toLowerCase() || Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(3).toLowerCase() || Search.Configuration.QueryBuilder.$1.toLowerCase() === Search.Configuration.QueryBuilderMode.toString(4).toLowerCase()) {
        Search.Configuration.QueryBuilderUtility.hide($get('RefinedBy'));
        Search.Configuration.QueryBuilderUtility.hide($get('CollapsedBy'));
        Search.Configuration.QueryBuilderUtility.hide($get('UserSegmentVariablesDiv'));
        Search.Configuration.QueryBuilderUtility.hide($get('QueryRulesApplied'));
    }
    if (Search.Configuration.QueryBuilder.get_$H().IsSPFSKU) {
        Search.Configuration.QueryBuilderUtility.hide($get('UserSegmentVariablesDiv'));
    }
}
Search.Configuration.TestQueryTab.get_$3R = function Search_Configuration_TestQueryTab$get_$3R() {
    if (!Search.Configuration.TestQueryTab.$26) {
        Search.Configuration.TestQueryTab.$26 = $get('QueryTemplateView');
    }
    return Search.Configuration.TestQueryTab.$26;
}
Search.Configuration.TestQueryTab.get_$2o = function Search_Configuration_TestQueryTab$get_$2o() {
    if (!Search.Configuration.TestQueryTab.$28) {
        Search.Configuration.TestQueryTab.$28 = $get('QueryRefinedBy');
    }
    return Search.Configuration.TestQueryTab.$28;
}
Search.Configuration.TestQueryTab.get_$32 = function Search_Configuration_TestQueryTab$get_$32() {
    if (!Search.Configuration.TestQueryTab.$1O) {
        Search.Configuration.TestQueryTab.$1O = $get('QueryCollapsedBy');
    }
    return Search.Configuration.TestQueryTab.$1O;
}
Search.Configuration.TestQueryTab.get_$S = function Search_Configuration_TestQueryTab$get_$S() {
    if (!Search.Configuration.TestQueryTab.$2P) {
        Search.Configuration.TestQueryTab.$2P = $get('TemplateVariablesView');
    }
    return Search.Configuration.TestQueryTab.$2P;
}
Search.Configuration.TestQueryTab.get_$2s = function Search_Configuration_TestQueryTab$get_$2s() {
    if (!Search.Configuration.TestQueryTab.$2Q) {
        Search.Configuration.TestQueryTab.$2Q = $get('TemplateVariablesViewLoading');
    }
    return Search.Configuration.TestQueryTab.$2Q;
}
Search.Configuration.TestQueryTab.get_$2p = function Search_Configuration_TestQueryTab$get_$2p() {
    if (!Search.Configuration.TestQueryTab.$2D) {
        Search.Configuration.TestQueryTab.$2D = $get('ResolvedQueryView');
    }
    return Search.Configuration.TestQueryTab.$2D;
}
Search.Configuration.TestQueryTab.get_$1g = function Search_Configuration_TestQueryTab$get_$1g() {
    if (!Search.Configuration.TestQueryTab.$1f) {
        Search.Configuration.TestQueryTab.$1f = $get('ExecutedQueryRules');
    }
    return Search.Configuration.TestQueryTab.$1f;
}
Search.Configuration.TestQueryTab.get_$4t = function Search_Configuration_TestQueryTab$get_$4t() {
    if (!Search.Configuration.TestQueryTab.$1G) {
        Search.Configuration.TestQueryTab.$1G = $get('UserSegmentTerms');
    }
    return Search.Configuration.TestQueryTab.$1G;
}
Search.Configuration.TestQueryTab.clear = function Search_Configuration_TestQueryTab$clear() {
    Search.Configuration.TestQueryTab.get_$2o().value = '';
    Search.Configuration.TestQueryTab.get_$32().value = '';
    (Search.Configuration.TestQueryTab.get_$2p()).value = '';
    Search.Configuration.TestQueryTab.get_$1g().value = '';
}
Search.Configuration.TestQueryTab.queryIssuing = function Search_Configuration_TestQueryTab$queryIssuing(sender, args) {
    Search.Configuration.TestQueryTab.clear();
    var $v_0 = (args).queryState;
    if ($v_0.r) {
        Search.Configuration.TestQueryTab.get_$2o().value = $v_0.r.toString();
    }
    else {
        Search.Configuration.TestQueryTab.get_$2o().value = '';
    }
    var $v_1 = Search.Configuration.QueryBuilder.get_$C().get_dataProvider();
    if ($v_1) {
        Search.Configuration.TestQueryTab.get_$32().value = $v_1.get_collapseSpecification();
    }
}
Search.Configuration.TestQueryTab.resultReady = function Search_Configuration_TestQueryTab$resultReady(sender, args) {
    var $v_0 = args;
    var $v_1 = $v_0.result;
    if (!Srch.U.n($v_1)) {
        var $v_2 = $v_1['QueryId'];
        var $v_3 = $v_1.ResultTables;
        if ($v_3) {
            for (var $v_5 = 0; $v_5 < $v_3.length; $v_5++) {
                if ($v_3[$v_5]['QueryId'] === $v_2) {
                    var $v_6 = $v_3[$v_5]['Properties'];
                    Search.Configuration.TestQueryTab.get_$2p().value = $v_6['QueryModification'];
                }
            }
        }
        var $v_4 = $v_1['TriggeredRules'];
        if ($v_4) {
            for (var $v_7 = 0; $v_7 < $v_4.length; $v_7++) {
                var $v_8 = $v_4[$v_7].toString();
                var $v_9 = Search.Configuration.QueryBuilder.get_$H().QueryRules[$v_8];
                if (Search.Configuration.TestQueryTab.get_$1g().value !== '') {
                    Search.Configuration.TestQueryTab.get_$1g().value += ', ';
                }
                Search.Configuration.TestQueryTab.get_$1g().value += $v_9 || $v_8;
            }
        }
    }
}
Search.Configuration.TestQueryTab.onAddUserSegment = function Search_Configuration_TestQueryTab$onAddUserSegment() {
    var $v_0 = new SP.UI.DialogOptions();
    $v_0.width = 700;
    $v_0.height = 350;
    $v_0.url = SP.Utilities.HttpUtility.urlPathEncode(SP.Utilities.VersionUtility.getLayoutsPageUrl('QueryRuleTaxonomy.aspx?level=site'));
    $v_0.dialogReturnValueCallback = Search.Configuration.TestQueryTab.$4Y;
    var $v_1 = SP.UI.ModalDialog.showModalDialog($v_0);
}
Search.Configuration.TestQueryTab.onRemoveUserSegment = function Search_Configuration_TestQueryTab$onRemoveUserSegment(id) {
    var $v_0 = $get(id);
    if ($v_0) {
        $v_0.parentNode.removeChild($v_0);
    }
}
Search.Configuration.TestQueryTab.$3y = function Search_Configuration_TestQueryTab$$3y($p0) {
    var $v_0 = document.createElement('li');
    var $v_1 = document.createElement('span');
    var $v_2 = document.createTextNode($p0.DisplayName);
    $v_1.setAttribute('class', 'qb-variableLabel qb-marginright10');
    $v_1.appendChild($v_2);
    var $v_3 = $p0.DictData;
    $v_3 = $v_3.substr($v_3.lastIndexOf(';') + 1);
    $v_0.setAttribute(Search.Configuration.TestQueryTab.$2t, $v_3);
    $v_0.id = $v_3;
    var $v_4 = document.createElement('a');
    $v_4.href = 'javascript:void(0)';
    $v_4.setAttribute('onclick', 'javascript:Search.Configuration.TestQueryTab.onRemoveUserSegment(\'' + $v_0.id + '\'); return false;');
    Search.Configuration.QueryBuilderUtility.$6($v_4, Srch.Res.qb_Remove);
    $v_0.appendChild($v_1);
    $v_0.appendChild($v_4);
    return $v_0;
}
Search.Configuration.TestQueryTab.$4F = function Search_Configuration_TestQueryTab$$4F() {
    var $v_0 = [];
    var $v_1 = Search.Configuration.QueryBuilderUtility.getFirstChild(Search.Configuration.TestQueryTab.$1G);
    while ($v_1) {
        var $v_2 = $v_1.getAttributeNode(Search.Configuration.TestQueryTab.$2t);
        Srch.U.appendArray($v_0, $v_2.value);
        $v_1 = Search.Configuration.QueryBuilderUtility.getNextElement($v_1);
    }
    return $v_0;
}
Search.Configuration.TestQueryTab.$4Y = function Search_Configuration_TestQueryTab$$4Y($p0, $p1) {
    if ($p0 === 1) {
        var $v_0 = $p1;
        Search.Configuration.TestQueryTab.get_$4t().appendChild(Search.Configuration.TestQueryTab.$3y($v_0));
    }
}
Search.Configuration.TestQueryTab.getTemplateVariables = function Search_Configuration_TestQueryTab$getTemplateVariables() {
    var $v_0 = {};
    var $v_1 = Search.Configuration.QueryBuilderUtility.getFirstChild(Search.Configuration.TestQueryTab.get_$S());
    var $v_2 = Search.Configuration.QueryBuilderUtility.getFirstChild($v_1);
    while (!Srch.U.n($v_2)) {
        var $v_3 = Search.Configuration.QueryBuilderUtility.getFirstChild($v_2);
        var $v_4 = Search.Configuration.QueryBuilderUtility.getNextElement($v_3);
        var $v_5 = Search.Configuration.QueryBuilderUtility.getNextElement($v_4);
        var $v_6 = $v_3.getAttribute('title');
        if (!($v_5.getAttribute('data-notapplicable'))) {
            $v_0[$v_6] = $v_5.value;
        }
        $v_2 = Search.Configuration.QueryBuilderUtility.getNextElement($v_2);
    }
    return $v_0;
}
Search.Configuration.TestQueryTab.$3N = function Search_Configuration_TestQueryTab$$3N($p0, $p1, $p2, $p3) {
    var $v_0 = new Sys.Net.WebRequest();
    $v_0.set_url('QueryBuilder.aspx/' + $p0 + window.location.search);
    $v_0.set_httpVerb('POST');
    $v_0.get_headers()['Content-Type'] = 'application/json';
    $v_0.set_body($p1);
    $v_0.set_userContext($p3);
    $v_0.add_completed($p2);
    $v_0.invoke();
}
Search.Configuration.TestQueryTab.refreshTemplateVariables = function Search_Configuration_TestQueryTab$refreshTemplateVariables(refreshTemplateVariablesCallback) {
    Search.Configuration.QueryBuilderUtility.removeAllChildren(Search.Configuration.TestQueryTab.get_$S());
    Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.TestQueryTab.get_$S());
    Search.Configuration.QueryBuilderUtility.show(Search.Configuration.TestQueryTab.get_$2s());
    if (Search.Configuration.QueryBuilder.get_$T()) {
        var $v_0 = (Search.Configuration.QueryHelperTab.get_useFillIn()) ? Search.Configuration.QueryBuilder.get_$R()['ec675252-14fa-4fbe-84dd-8d098ed74181'] : Search.Configuration.QueryBuilder.get_$34();
        Search.Configuration.QueryBuilderUtility.$6(Search.Configuration.TestQueryTab.get_$3R(), $v_0.QueryTemplate);
        var $v_1 = Search.Configuration.QueryHelperTab.getBoundVariableValues();
        var $v_2 = new Search.Configuration.TestQueryTab.ExpandTokensBody();
        $v_2.tokens = $v_1;
        Search.Configuration.TestQueryTab.$3N('ExpandTokens', Sys.Serialization.JavaScriptSerializer.serialize($v_2), Search.Configuration.TestQueryTab.$43, refreshTemplateVariablesCallback);
    }
    else {
        Search.Configuration.QueryBuilderUtility.$6(Search.Configuration.TestQueryTab.get_$3R(), Search.Configuration.QueryBuilder.get_$1V());
        if (Srch.U.e(Search.Configuration.QueryBuilder.get_$1V())) {
            Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.TestQueryTab.get_$2s());
            Search.Configuration.QueryBuilderUtility.show(Search.Configuration.TestQueryTab.get_$S());
            if (refreshTemplateVariablesCallback) {
                refreshTemplateVariablesCallback();
            }
        }
        else {
            var $v_3 = new Search.Configuration.TestQueryTab.GetTemplateParametersBody();
            $v_3.template = Search.Configuration.QueryBuilder.get_$1V();
            Search.Configuration.TestQueryTab.$3N('GetTemplateParameters', Sys.Serialization.JavaScriptSerializer.serialize($v_3), Search.Configuration.TestQueryTab.$4D, refreshTemplateVariablesCallback);
        }
    }
}
Search.Configuration.TestQueryTab.$4D = function Search_Configuration_TestQueryTab$$4D($p0) {
    var $v_0 = $p0.get_responseData();
    var $v_1 = null;
    $v_1 = Sys.Serialization.JavaScriptSerializer.deserialize($v_0).d;;
    Search.Configuration.TestQueryTab.updateTemplateVariables($v_1, $p0.get_webRequest().get_userContext());
}
Search.Configuration.TestQueryTab.$43 = function Search_Configuration_TestQueryTab$$43($p0) {
    var $v_0 = $p0.get_responseData();
    if ($p0.get_statusCode() === 200) {
        var $v_1 = null;
        $v_1 = Sys.Serialization.JavaScriptSerializer.deserialize($v_0).d;;
        var $v_2 = (Search.Configuration.QueryHelperTab.get_useFillIn()) ? Search.Configuration.QueryBuilder.get_$R()['ec675252-14fa-4fbe-84dd-8d098ed74181'] : Search.Configuration.QueryBuilder.get_$34();
        var $v_3 = null;
        if ($v_2.QueryTemplateProperties && $v_2.QueryTemplateProperties.length) {
            $v_3 = new Array($v_2.QueryTemplateProperties.length);
            for (var $v_4 = 0; $v_4 < $v_2.QueryTemplateProperties.length; $v_4++) {
                var $v_5 = $v_2.QueryTemplateProperties[$v_4];
                var $v_6 = new Search.Configuration.QueryTemplateProperty();
                $v_6.Name = $v_5.Name;
                if (Search.Configuration.QueryBuilder.$4G($v_5.Name)) {
                    if (!Srch.U.n($v_1[$v_5.Name])) {
                        $v_6.Value = $v_1[$v_5.Name];
                    }
                    else {
                        $v_6.NotApplicable = true;
                    }
                }
                else {
                    $v_6.Value = $v_5.Value;
                }
                $v_3[$v_4] = $v_6;
            }
        }
        Search.Configuration.TestQueryTab.updateTemplateVariables($v_3, $p0.get_webRequest().get_userContext());
    }
    else {
        Srch.U.traceFormatted(null, 'ExpandTokenCallback', 'request failed. status code:{0}, text:{1}', $p0.get_statusCode(), $p0.get_statusText());
        Search.Configuration.TestQueryTab.$3d();
        Search.Configuration.TestQueryTab.$30();
        Search.Configuration.QueryBuilderUtility.$6(Search.Configuration.TestQueryTab.get_$S(), Srch.Res.qb_PreviewResult_CouldNotResolveTemplateVariables);
    }
}
Search.Configuration.TestQueryTab.$3d = function Search_Configuration_TestQueryTab$$3d() {
    Search.Configuration.QueryBuilderUtility.hide(Search.Configuration.TestQueryTab.get_$2s());
    Search.Configuration.QueryBuilderUtility.show(Search.Configuration.TestQueryTab.get_$S());
}
Search.Configuration.TestQueryTab.$30 = function Search_Configuration_TestQueryTab$$30() {
    Search.Configuration.QueryBuilderUtility.removeAllChildren(Search.Configuration.TestQueryTab.get_$S());
    Search.Configuration.QueryBuilderUtility.$6(Search.Configuration.TestQueryTab.get_$S(), '');
}
Search.Configuration.TestQueryTab.updateTemplateVariables = function Search_Configuration_TestQueryTab$updateTemplateVariables(templateVariables, refreshTemplateVariablesCallback) {
    Search.Configuration.TestQueryTab.$3d();
    Search.Configuration.TestQueryTab.$30();
    if (!templateVariables || !templateVariables.length) {
        Search.Configuration.QueryBuilderUtility.$6(Search.Configuration.TestQueryTab.get_$S(), Srch.Res.qb_PreviewResult_NoTemplateVariables);
    }
    else {
        var $v_0 = document.createElement('ul');
        $v_0.setAttribute('class', 'ms-noList');
        var $v_1 = [];
        for (var $v_2 = 0; $v_2 < templateVariables.length; $v_2++) {
            var $v_3 = templateVariables[$v_2];
            if (Srch.U.isInArray($v_1, $v_3.Name.toLowerCase())) {
                continue;
            }
            Search.Configuration.TestQueryTab.$3q($v_3, $v_0);
            Srch.U.appendArray($v_1, $v_3.Name.toLowerCase());
        }
        Search.Configuration.TestQueryTab.get_$S().appendChild($v_0);
    }
    if (refreshTemplateVariablesCallback) {
        refreshTemplateVariablesCallback();
    }
}
Search.Configuration.TestQueryTab.$3q = function Search_Configuration_TestQueryTab$$3q($p0, $p1) {
    var $v_0 = document.createElement('span');
    var $v_1 = Srch.U.getTrimmedString($p0.Name, 20);
    Search.Configuration.QueryBuilderUtility.$6($v_0, '{' + $v_1 + '}');
    $v_0.setAttribute('class', 'qb-variableLabel qb-marginright3');
    $v_0.setAttribute('title', $p0.Name);
    var $v_2 = document.createElement('span');
    Search.Configuration.QueryBuilderUtility.$6($v_2, ':');
    $v_2.setAttribute('class', 'qb-marginright3 ms-floatLeft');
    var $v_3 = document.createElement('input');
    $v_3.setAttribute('type', 'text');
    $v_3.setAttribute('value', (!$p0.Value) ? '' : $p0.Value);
    $v_3.setAttribute('class', 'qb-control');
    if ($p0.NotApplicable) {
        $v_3.setAttribute('value', Srch.Res.qb_NotApplicable);
        Search.Configuration.QueryBuilderUtility.disable($v_3);
        $v_3.setAttribute('data-notapplicable', true);
    }
    else if ($p0.IsComplex) {
        $v_3.setAttribute('value', Srch.Res.qb_ComplexObject);
        Search.Configuration.QueryBuilderUtility.disable($v_3);
        $v_3.setAttribute('data-notapplicable', true);
    }
    var $v_4 = document.createElement('LI');
    $v_4.appendChild($v_0);
    $v_4.appendChild($v_2);
    $v_4.appendChild($v_3);
    $p1.appendChild($v_4);
}
Search.Configuration.TestQueryTab.switchAdvanced = function Search_Configuration_TestQueryTab$switchAdvanced() {
    var $v_0 = $get('QueryTemplateDiv');
    var $v_1 = $get('QueryVariablesDiv');
    var $v_2 = $get('RefreshResultsDiv');
    var $v_3 = $get('showAdvancedLink');
    if (Search.Configuration.QueryBuilderUtility.isHidden($v_0)) {
        Search.Configuration.QueryBuilderUtility.show($v_0);
        Search.Configuration.QueryBuilderUtility.show($v_1);
        Search.Configuration.QueryBuilderUtility.show($v_2);
        Search.Configuration.QueryBuilderUtility.$6($v_3, Srch.Res.qb_TestQueryTab_HideAdvanced);
    }
    else {
        Search.Configuration.QueryBuilderUtility.hide($v_0);
        Search.Configuration.QueryBuilderUtility.hide($v_1);
        Search.Configuration.QueryBuilderUtility.hide($v_2);
        Search.Configuration.QueryBuilderUtility.$6($v_3, Srch.Res.qb_TestQueryTab_ShowAdvanced);
    }
}
Search.Configuration.TestQueryTab.prototype = {
    
    onTabLoad: function Search_Configuration_TestQueryTab$onTabLoad() {
        if (!Search.Configuration.QueryBuilder.get_$T()) {
            Search.Configuration.QueryBuilder.updateResult();
        }
    }
}


Search.Configuration.TestQueryTab.ExpandTokensBody = function Search_Configuration_TestQueryTab_ExpandTokensBody() {
}
Search.Configuration.TestQueryTab.ExpandTokensBody.prototype = {
    tokens: null
}


Search.Configuration.TestQueryTab.GetTemplateParametersBody = function Search_Configuration_TestQueryTab_GetTemplateParametersBody() {
}
Search.Configuration.TestQueryTab.GetTemplateParametersBody.prototype = {
    template: null
}


Search.Configuration.TestQueryTab.TaxonomyItem = function Search_Configuration_TestQueryTab_TaxonomyItem() {
}
Search.Configuration.TestQueryTab.TaxonomyItem.prototype = {
    DisplayName: null,
    DictData: null
}


Search.Configuration.CatalogItemPicker.registerClass('Search.Configuration.CatalogItemPicker');
Search.Configuration.CatalogItemPicker.ItemPickerReturnType.registerClass('Search.Configuration.CatalogItemPicker.ItemPickerReturnType');
Search.Configuration.CatalogItemPicker.ItemPickerState.registerClass('Search.Configuration.CatalogItemPicker.ItemPickerState');
Search.Configuration.CatalogItemPicker.CatalogItemPickerConfigData.registerClass('Search.Configuration.CatalogItemPicker.CatalogItemPickerConfigData');
Search.Configuration.CatalogItemPicker.CatalogItemPickerCatalogData.registerClass('Search.Configuration.CatalogItemPicker.CatalogItemPickerCatalogData');
Search.Configuration.CatalogItemPicker.ConfigKeys.registerClass('Search.Configuration.CatalogItemPicker.ConfigKeys');
Search.Configuration.ContentBySearch.registerClass('Search.Configuration.ContentBySearch');
Search.Configuration.QueryBuilderUtility.registerClass('Search.Configuration.QueryBuilderUtility');
Search.Configuration.CustomTab.registerClass('Search.Configuration.CustomTab', Sys.UI.Control);
Search.Configuration.RefinerTab.registerClass('Search.Configuration.RefinerTab', Search.Configuration.CustomTab);
Search.Configuration.QueryBuilder.registerClass('Search.Configuration.QueryBuilder');
Search.Configuration.TokenExpansionData.registerClass('Search.Configuration.TokenExpansionData');
Search.Configuration.QueryTemplateProperty.registerClass('Search.Configuration.QueryTemplateProperty');
Search.Configuration.QueryBuilderResultSourceData.registerClass('Search.Configuration.QueryBuilderResultSourceData');
Search.Configuration.QueryBuilderConfigData.registerClass('Search.Configuration.QueryBuilderConfigData');
Search.Configuration.QueryBuilderState.registerClass('Search.Configuration.QueryBuilderState');
Search.Configuration.QueryHelperTab.registerClass('Search.Configuration.QueryHelperTab', Search.Configuration.CustomTab);
Search.Configuration.Refinement.registerClass('Search.Configuration.Refinement');
Search.Configuration.SettingsTab.registerClass('Search.Configuration.SettingsTab', Search.Configuration.CustomTab);
Search.Configuration.SortTab.registerClass('Search.Configuration.SortTab', Search.Configuration.CustomTab);
Search.Configuration.TestQueryTab.registerClass('Search.Configuration.TestQueryTab', Search.Configuration.CustomTab);
Search.Configuration.TestQueryTab.ExpandTokensBody.registerClass('Search.Configuration.TestQueryTab.ExpandTokensBody');
Search.Configuration.TestQueryTab.GetTemplateParametersBody.registerClass('Search.Configuration.TestQueryTab.GetTemplateParametersBody');
Search.Configuration.TestQueryTab.TaxonomyItem.registerClass('Search.Configuration.TestQueryTab.TaxonomyItem');
Search.Configuration.CatalogItemPicker.$9 = null;
Search.Configuration.CatalogItemPicker.$U = null;
Search.Configuration.CatalogItemPicker.$y = null;
Search.Configuration.CatalogItemPicker.$3r = null;
Search.Configuration.CatalogItemPicker.$1x = null;
Search.Configuration.CatalogItemPicker.$I = null;
Search.Configuration.CatalogItemPicker.$5 = null;
Search.Configuration.CatalogItemPicker.ConfigKeys.$1A = 'CatalogItemValue';
Search.Configuration.CatalogItemPicker.ConfigKeys.$1B = 'CatalogValue';
Search.Configuration.CatalogItemPicker.ConfigKeys.$4g = 'QueryText';
Search.Configuration.CatalogItemPicker.ConfigKeys.$2M = 'QuerySourceId';
Search.Configuration.CatalogItemPicker.ConfigKeys.$W = 'DoNotOverwriteCatalogPath';
Search.Configuration.CustomTab.$1K = 'class';
Search.Configuration.CustomTab.$38 = 'ms-displayInline';
Search.Configuration.CustomTab.$3I = 'ms-srchnav-item';
Search.Configuration.CustomTab.$3H = 'ms-srchnav-link';
Search.Configuration.CustomTab.$2q = 'ms-srchnav-link-selected';
Search.Configuration.CustomTab.$13 = null;
Search.Configuration.RefinerTab.$h = Srch.Res.qb_NoCollapseString;
Search.Configuration.RefinerTab.$v = Srch.Res.qb_ShowAllCollapseString;
Search.Configuration.RefinerTab.$3c = Srch.Res.qb_ShowRefinersOnly;
Search.Configuration.RefinerTab.$29 = null;
Search.Configuration.RefinerTab.$1P = null;
Search.Configuration.RefinerTab.$1M = null;
Search.Configuration.RefinerTab.$2A = null;
Search.Configuration.RefinerTab.$1N = null;
Search.Configuration.RefinerTab.$2B = null;
Search.Configuration.RefinerTab.$1r = null;
Search.Configuration.RefinerTab.$1s = null;
Search.Configuration.RefinerTab.$2E = null;
Search.Configuration.RefinerTab.$1J = null;
Search.Configuration.RefinerTab.$2C = null;
Search.Configuration.RefinerTab.$1R = null;
Search.Configuration.QueryBuilder.$1y = null;
Search.Configuration.QueryBuilder.$5 = null;
Search.Configuration.QueryBuilder.$19 = null;
Search.Configuration.QueryBuilder.$0 = null;
Search.Configuration.QueryBuilder.$1 = null;
Search.Configuration.QueryBuilder.$q = null;
Search.Configuration.QueryBuilder.$2a = null;
Search.Configuration.QueryBuilder.$23 = null;
Search.Configuration.QueryBuilder.$1w = null;
Search.Configuration.QueryBuilder.$1z = null;
Search.Configuration.QueryBuilder.$1j = null;
Search.Configuration.QueryBuilder.$1k = null;
Search.Configuration.QueryBuilder.$1p = null;
Search.Configuration.QueryBuilder.$1L = null;
Search.Configuration.QueryBuilder.$3O = null;
Search.Configuration.QueryBuilder.$3Z = null;
Search.Configuration.QueryBuilder.$3g = null;
Search.Configuration.QueryBuilder.$b = null;
Search.Configuration.QueryBuilder.$44 = null;
Search.Configuration.QueryBuilder.$3j = null;
Search.Configuration.QueryBuilder.$2O = null;
Search.Configuration.QueryHelperTab.$1q = null;
Search.Configuration.QueryHelperTab.$1h = null;
Search.Configuration.QueryHelperTab.$1i = null;
Search.Configuration.QueryHelperTab.$1u = null;
Search.Configuration.QueryHelperTab.$4J = null;
Search.Configuration.QueryHelperTab.$2Y = null;
Search.Configuration.QueryHelperTab.$2Z = null;
Search.Configuration.QueryHelperTab.$2X = null;
Search.Configuration.QueryHelperTab.$4p = null;
Search.Configuration.QueryHelperTab.$1v = null;
Search.Configuration.QueryHelperTab.$1W = null;
Search.Configuration.QueryHelperTab.$J = null;
Search.Configuration.QueryHelperTab.$3 = null;
Search.Configuration.QueryHelperTab.$B = null;
Search.Configuration.QueryHelperTab.$M = null;
Search.Configuration.QueryHelperTab.$A = null;
Search.Configuration.QueryHelperTab.$d = null;
Search.Configuration.QueryHelperTab.$D = null;
Search.Configuration.QueryHelperTab.$u = null;
Search.Configuration.QueryHelperTab.$N = null;
Search.Configuration.QueryHelperTab.$14 = null;
Search.Configuration.QueryHelperTab.$22 = null;
Search.Configuration.QueryHelperTab.$20 = null;
Search.Configuration.QueryHelperTab.$21 = null;
Search.Configuration.QueryHelperTab.$X = false;
Search.Configuration.QueryHelperTab.$w = null;
Search.Configuration.QueryHelperTab.$2G = Srch.Res.qb_UserQuery_ShowAllProperties;
Search.Configuration.QueryHelperTab.$s = Srch.Res.qb_UserQuery_ManualValue;
Search.Configuration.QueryHelperTab.$3U = Srch.Res.qb_UserQuery_SelectProperty;
Search.Configuration.QueryHelperTab.$2F = Srch.Res.qb_UserQuery_SelectValue;
Search.Configuration.QueryHelperTab.$40 = Srch.Res.qb_UseDefinedSort;
Search.Configuration.QueryHelperTab.$2r = 'ContentType';
Search.Configuration.QueryHelperTab.$12 = null;
Search.Configuration.QueryHelperTab.$1T = null;
Search.Configuration.QueryHelperTab.$1I = null;
Search.Configuration.Refinement.$k = null;
Search.Configuration.SettingsTab.$W = 'DoNotOverwriteCatalogPath';
Search.Configuration.SettingsTab.$2R = null;
Search.Configuration.SettingsTab.$2V = null;
Search.Configuration.SettingsTab.$2T = null;
Search.Configuration.SettingsTab.$25 = null;
Search.Configuration.SettingsTab.$24 = null;
Search.Configuration.SettingsTab.$1b = null;
Search.Configuration.SettingsTab.$1a = null;
Search.Configuration.SettingsTab.$1e = null;
Search.Configuration.SettingsTab.$1Z = null;
Search.Configuration.SettingsTab.$1c = null;
Search.Configuration.SettingsTab.$1X = null;
Search.Configuration.SortTab.$2I = null;
Search.Configuration.SortTab.$2J = null;
Search.Configuration.SortTab.$2L = null;
Search.Configuration.SortTab.$2K = null;
Search.Configuration.SortTab.$c = null;
Search.Configuration.SortTab.$2c = null;
Search.Configuration.SortTab.$2b = null;
Search.Configuration.SortTab.$1H = null;
Search.Configuration.SortTab.$27 = null;
Search.Configuration.SortTab.$Q = null;
Search.Configuration.SortTab.$1E = {};
Search.Configuration.SortTab.$t = 1;
Search.Configuration.SortTab.$i = 0;
Search.Configuration.SortTab.$1U = 0;
Search.Configuration.TestQueryTab.$26 = null;
Search.Configuration.TestQueryTab.$28 = null;
Search.Configuration.TestQueryTab.$1O = null;
Search.Configuration.TestQueryTab.$2P = null;
Search.Configuration.TestQueryTab.$2Q = null;
Search.Configuration.TestQueryTab.$2D = null;
Search.Configuration.TestQueryTab.$1f = null;
Search.Configuration.TestQueryTab.$4j = null;
Search.Configuration.TestQueryTab.$2t = 'data-termid';
Search.Configuration.TestQueryTab.$1G = null;

Sys.Application.add_load(Search.Configuration.QueryBuilder.onLoad ) 

/* Temporary location for slot mapping JS code */
function mso_getSlotUIElements(slotCount)
{
    mso_ensureSlotsUIData();

    if($isNull(templateSlotsUIData.slotElements[slotCount])) {
        var elementsForSlot = {
            label: document.getElementById(templateSlotsUIData.slotLabelIdPrefix + slotCount),
            textBox: document.getElementById(templateSlotsUIData.slotTextBoxIdPrefix + slotCount),
            slotDiv: document.getElementById(templateSlotsUIData.slotDivIdPrefix + slotCount)
        };
        templateSlotsUIData.slotElements[slotCount] = elementsForSlot;
    }

    return templateSlotsUIData.slotElements[slotCount];
}

function mso_updateSlotsForTemplateId(templateId, isOverride)
{
    mso_ensureSlotsUIData();

    if(!$isNull(templatePropMappings) && !$isNull(templatePropMappings[templateId])) {

        templateSlotsUIData.currentlySelectedTemplate = templateId;
        mso_updateSlots(templatePropMappings[templateId], isOverride);
    }

}

function mso_resetCurrentSlots()
{
    if($isNull(templateSlotsUIData.resetting) || !templateSlotsUIData.resetting)
    {
        templateSlotsUIData.resetting = true;
        mso_ensureSlotsUIData();
        mso_updateSlotsForTemplateId(templateSlotsUIData.currentlySelectedTemplate, false);
        templateSlotsUIData.resetting = false;
    }
}

function mso_updateSlots(slotMappings, isOverride)
{
    mso_ensureSlotsUIData();

    if($isNull(slotMappings)) slotMappings = "";

    var checkBox = templateSlotsUIData.checkBox;
    checkBox.checked = isOverride;
    mso_togglePropertyMappings();

    var mappingDict = Srch.Result.parsePropertyMappingWithSlotDisplayNames(slotMappings);

    var slotCount = 0;
    var slotNames = "";
    var isNotFirst = false;

    for (var slotName in mappingDict) {
        var slot = { name: slotName, mappings: mappingDict[slotName] };

        if(slotCount >= templateSlotsUIData.maxSlots)
        {
            break;
        }
        var slotElements = mso_getSlotUIElements(slotCount);
        var label =  slotElements.label;
        var textBox = slotElements.textBox;
        var slotDiv = slotElements.slotDiv;

        // display localized slot name
        var slotDisplayName = slot.name;
        var slotNameRegex = /([^{]+)({(.+)})?/g;
        var captures = slotNameRegex.exec(slotDisplayName);
        // js regex does not support named capture, catpure 1 is always the whole match
        // here capture 3 is the content inside the {}
        if (captures != null && captures.length === 4 && !Srch.U.e(captures[3]))
        {
            slotDisplayName = captures[3];
        }
        label.innerHTML = $htmlEncode(slotDisplayName);
        if( isNotFirst )
        {
            //slotNames += templateSlotsUIData.slotSeparator;
            slotNames +=  "#:#";
        }
        // slot names do not include display name
        slotNames += slot.name;
        if(!$isNull(slot.mappings) && Srch.U.isArray(slot.mappings))
        {
            textBox.value = slot.mappings.join(";");
            slotDiv.style.display="";
        }
        else
        {
            // This is a selected property for which no slot mapping is shown in the UI
            textBox.value = templateSlotsUIData.nonSlotMappedPropertyToken;
            slotDiv.style.display="none";
        }

        slotCount++;
        isNotFirst = true;
    }

    var slotCountField = templateSlotsUIData.slotCountField;
    slotCountField.value = slotCount;
    var slotNamesField = templateSlotsUIData.slotNamesField;
    slotNamesField.value = slotNames;
    // Use the selected slot values to override the selected properties for the to override
    var selectedPropsField = templateSlotsUIData.selectedPropsField;
    var newSelectedProps = Srch.Result.getSelectedPropertiesFromMappingDictionary(mappingDict)
    selectedPropsField.value = Sys.Serialization.JavaScriptSerializer.serialize(newSelectedProps);

    for( var j=slotCount; j < templateSlotsUIData.maxSlots; j++)
    {
        var slotElements = mso_getSlotUIElements(j);
        var slotDiv = slotElements.slotDiv;
        slotDiv.style.display="none";

    }
}


if( typeof(Sys) != "undefined" && Sys && Sys.Application )
{
   Sys.Application.notifyScriptLoaded();
}
if (typeof(NotifyScriptLoadedAndExecuteWaitingJobs) != "undefined")
{
    NotifyScriptLoadedAndExecuteWaitingJobs("search.configuration.js");
}
