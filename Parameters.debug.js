function ULSpVC(){var o=new Object;o.ULSTeamName="PerformancePoint Monitoring Service";o.ULSFileName="Parameters.debug.js";return o;}
// Parameters.js
//


Type.registerNamespace('PPSMA');

PPSMA.ParameterGetRemainingResultRecord = function PPSMA_ParameterGetRemainingResultRecord() {}


PPSMA.ParameterSearchRequest = function PPSMA_ParameterSearchRequest() {
}


PPSMA.ParameterSearchResultNode = function PPSMA_ParameterSearchResultNode() {}


PPSMA.ParameterSearchResultRecord = function PPSMA_ParameterSearchResultRecord() {}


PPSMA._xRef = function PPSMA__xRef(index, parentindex) {ULSpVC:;
    this.idx = index;
    this.parentidx = parentindex;
}


PPSMA.TreeViewDataRecord = function PPSMA_TreeViewDataRecord() {}


PPSMA.TreeViewDataMemberRecord = function PPSMA_TreeViewDataMemberRecord() {}


PPSMA.ParameterControlManager = function PPSMA_ParameterControlManager(parameterLocation, webPartId, resourceUrl) {ULSpVC:;
    this.$$d__onGetRemainingRequestCompleted$p$0 = Function.createDelegate(this, this._onGetRemainingRequestCompleted$p$0);
    this.$$d__onGetRemainingRequestCancelled$p$0 = Function.createDelegate(this, this._onGetRemainingRequestCancelled$p$0);
    this._parameterLocation$0 = parameterLocation;
    this._webPartId$0 = webPartId;
    this._resourceUrl$0 = resourceUrl;
    this._getRemainingResultCallback$0 = null;
    this._getRemainingCancelledCallback$0 = null;
}
PPSMA.ParameterControlManager.prototype = {
    _parameterLocation$0: null,
    _webPartId$0: null,
    _webRequest$0: null,
    _getRemainingResultCallback$0: null,
    _getRemainingCancelledCallback$0: null,
    _resourceUrl$0: null,
    
    setGetRemainingResultCallback: function PPSMA_ParameterControlManager$setGetRemainingResultCallback(getRemainingResultCallback) {ULSpVC:;
        this._getRemainingResultCallback$0 = getRemainingResultCallback;
    },
    
    setGetRemainingCancelledCallback: function PPSMA_ParameterControlManager$setGetRemainingCancelledCallback(getRemainingCancelledCallback) {ULSpVC:;
        this._getRemainingCancelledCallback$0 = getRemainingCancelledCallback;
    },
    
    _getServiceUrl$p$0: function PPSMA_ParameterControlManager$_getServiceUrl$p$0() {ULSpVC:;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$0);
        return viewState[PPSMA.ParameterControlManager._vS_ServiceUrl$i];
    },
    
    getRemainingParameterDisplayData: function PPSMA_ParameterControlManager$getRemainingParameterDisplayData(targetElement) {ULSpVC:;
        if (!isNullOrUndefined(this._webRequest$0)) {
            this._webRequest$0.dispose();
            this._webRequest$0 = null;
        }
        if (isNullOrUndefined(targetElement)) {
            return;
        }
        var clientWebPart = PPSMA.ClientConnectionManager.get_instance().findClientWebPart(this._webPartId$0);
        this._webRequest$0 = new PPSMA.CancellableWebRequest(targetElement, PPSMA.RenderWebRequest.msgtypE_LOADING, clientWebPart.waitImageUri, targetElement.id, PPSMA.RenderWebRequest.ProgressIndicatorPositioning.MiddleCenter);
        this._webRequest$0.add_onCancelled(this.$$d__onGetRemainingRequestCancelled$p$0);
        var clientConsumerRecord = PPSMA.ClientConnectionManager.get_instance().createConsumerRecord(clientWebPart);
        var bodyDictionary = { parameterLocationString: this._parameterLocation$0, clientConsumerRecord: clientConsumerRecord };
        var details = new PPSMA.WebRequestDetails(this._getServiceUrl$p$0(), Sys.Serialization.JavaScriptSerializer.serialize(bodyDictionary), 'POST', 'application/json; charset=utf-8', this.$$d__onGetRemainingRequestCompleted$p$0);
        this._webRequest$0.submit(details);
    },
    
    _onGetRemainingRequestCancelled$p$0: function PPSMA_ParameterControlManager$_onGetRemainingRequestCancelled$p$0(request) {ULSpVC:;
        if (!isNullOrUndefined(this._getRemainingCancelledCallback$0)) {
            this._getRemainingCancelledCallback$0();
        }
    },
    
    _onGetRemainingRequestCompleted$p$0: function PPSMA_ParameterControlManager$_onGetRemainingRequestCompleted$p$0(executor) {ULSpVC:;
        if (executor.get_aborted()) {
            return;
        }
        if (executor.get_statusCode() === 200) {
            var result = PPSMA.WebRequestExecuterEx.simpleResult(executor, 'ParameterGetRemainingResultRecord');
            if (!isNullOrUndefined(result)) {
                if (!isNullOrUndefined(this._getRemainingResultCallback$0)) {
                    var recs = Sys.Serialization.JavaScriptSerializer.deserialize(result.Members);
                    this._getRemainingResultCallback$0(recs);
                }
            }
        }
        this._webRequest$0.hide();
    },
    
    hideWebRequestThrobber: function PPSMA_ParameterControlManager$hideWebRequestThrobber() {ULSpVC:;
        this._webRequest$0.hide();
    }
}


PPSMA.ParameterSearchController = function PPSMA_ParameterSearchController(parameterLocation, webPartId, resourceUrl) {ULSpVC:;
    this.$$d__onSearchRequestCompleted$p$0 = Function.createDelegate(this, this._onSearchRequestCompleted$p$0);
    this.$$d__onSearchRequestCancelled$p$0 = Function.createDelegate(this, this._onSearchRequestCancelled$p$0);
    this._parameterLocation$0 = parameterLocation;
    this._webPartId$0 = webPartId;
    this._resourceUrl$0 = resourceUrl;
    this._searchResultCallback$0 = null;
    this._searchCancelledCallback$0 = null;
}
PPSMA.ParameterSearchController.prototype = {
    _parameterLocation$0: null,
    _webPartId$0: null,
    _resourceUrl$0: null,
    _webRequest$0: null,
    _searchResultCallback$0: null,
    _searchCancelledCallback$0: null,
    
    setSearchResultCallback: function PPSMA_ParameterSearchController$setSearchResultCallback(searchResultCallback) {ULSpVC:;
        this._searchResultCallback$0 = searchResultCallback;
    },
    
    setSearchCancelledCallback: function PPSMA_ParameterSearchController$setSearchCancelledCallback(searchCancelledCallback) {ULSpVC:;
        this._searchCancelledCallback$0 = searchCancelledCallback;
    },
    
    _getServiceUrl$p$0: function PPSMA_ParameterSearchController$_getServiceUrl$p$0(getRemainingNodes) {ULSpVC:;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$0);
        return (getRemainingNodes) ? viewState[PPSMA.ParameterSearchController._vS_RemainingServiceUrl$i] : viewState[PPSMA.ParameterSearchController._vS_HeadServiceUrl$i];
    },
    
    searchParameterDisplayData: function PPSMA_ParameterSearchController$searchParameterDisplayData(searchTerm, targetElement, getRemainingNodes) {ULSpVC:;
        if (!isNullOrUndefined(this._webRequest$0)) {
            this._webRequest$0.dispose();
            this._webRequest$0 = null;
        }
        if (isNullOrUndefined(targetElement)) {
            return;
        }
        var parameterSearchRequest = new PPSMA.ParameterSearchRequest();
        parameterSearchRequest.ParameterLocation = this._parameterLocation$0;
        var clientWebPart = PPSMA.ClientConnectionManager.get_instance().findClientWebPart(this._webPartId$0);
        this._webRequest$0 = new PPSMA.CancellableWebRequest(targetElement, PPSMA.RenderWebRequest.msgtypE_SEARCHING, clientWebPart.waitImageUri, targetElement.parentNode.id, PPSMA.RenderWebRequest.ProgressIndicatorPositioning.MiddleCenter);
        this._webRequest$0.add_onCancelled(this.$$d__onSearchRequestCancelled$p$0);
        var clientConsumerRecord = PPSMA.ClientConnectionManager.get_instance().createConsumerRecord(clientWebPart);
        parameterSearchRequest.SearchTerm = encodeURIComponent(searchTerm);
        var bodyDictionary = { parameterSearchRequest: parameterSearchRequest, clientConsumerRecord: clientConsumerRecord };
        var details = new PPSMA.WebRequestDetails(this._getServiceUrl$p$0(getRemainingNodes), Sys.Serialization.JavaScriptSerializer.serialize(bodyDictionary), 'POST', 'application/json; charset=utf-8', this.$$d__onSearchRequestCompleted$p$0);
        this._webRequest$0.submit(details);
    },
    
    _onSearchRequestCancelled$p$0: function PPSMA_ParameterSearchController$_onSearchRequestCancelled$p$0(request) {ULSpVC:;
        if (!isNullOrUndefined(this._searchCancelledCallback$0)) {
            this._searchCancelledCallback$0();
        }
    },
    
    _onSearchRequestCompleted$p$0: function PPSMA_ParameterSearchController$_onSearchRequestCompleted$p$0(executor) {ULSpVC:;
        var viewState = PPSMA.ClientConnectionManager.get_instance().getViewState(this._webPartId$0);
        var getRemainingNodes = executor.get_webRequest().get_url().endsWith(viewState[PPSMA.ParameterSearchController._vS_RemainingServiceUrl$i]);
        if (executor.get_aborted()) {
            return;
        }
        if (executor.get_statusCode() === 200) {
            var result = PPSMA.WebRequestExecuterEx.simpleResult(executor, 'ParameterSearchResultRecord');
            if (!isNullOrUndefined(result)) {
                if (!isNullOrUndefined(this._searchResultCallback$0)) {
                    var resultNodes = Sys.Serialization.JavaScriptSerializer.deserialize(result.ResultNodes);
                    var ancestors = Sys.Serialization.JavaScriptSerializer.deserialize(result.Ancestors);
                    this._searchResultCallback$0(resultNodes, ancestors);
                }
            }
        }
        this._webRequest$0.hide();
    },
    
    hideWebRequestThrobber: function PPSMA_ParameterSearchController$hideWebRequestThrobber() {ULSpVC:;
        this._webRequest$0.hide();
    }
}


PPSMA.ParameterTree = function PPSMA_ParameterTree() {ULSpVC:;
    this.$$d__selector_post$p$0 = Function.createDelegate(this, this._selector_post$p$0);
    this.$$d__selectorsearch_post$p$0 = Function.createDelegate(this, this._selectorsearch_post$p$0);
    this.$$d_expandAll = Function.createDelegate(this, this.expandAll);
    this.$$d_cancel_post = Function.createDelegate(this, this.cancel_post);
    this.$$d_expandAllCancelHandler = Function.createDelegate(this, this.expandAllCancelHandler);
    this.$$d_onLoad_GetRemaining = Function.createDelegate(this, this.onLoad_GetRemaining);
    this.$$d_getRemainingCancelledHandler = Function.createDelegate(this, this.getRemainingCancelledHandler);
    this.$$d__onLoad_DynamicSearch_e$p$0 = Function.createDelegate(this, this._onLoad_DynamicSearch_e$p$0);
    this.$$d_onLoad_DynamicSearch = Function.createDelegate(this, this.onLoad_DynamicSearch);
    this.$$d_searchCancelledHandler = Function.createDelegate(this, this.searchCancelledHandler);
    this.$$d__expandBody$p$0 = Function.createDelegate(this, this._expandBody$p$0);
    this.$$d__onLoad_DynamicSearch3$p$0 = Function.createDelegate(this, this._onLoad_DynamicSearch3$p$0);
    this.$$d_showParameterTreeSearchResultContextMenu = Function.createDelegate(this, this.showParameterTreeSearchResultContextMenu);
    this.$$d__onLoad_DynamicSearch2$p$0 = Function.createDelegate(this, this._onLoad_DynamicSearch2$p$0);
    this.$$d__searchResultContextMenuHandler$p$0 = Function.createDelegate(this, this._searchResultContextMenuHandler$p$0);
    this.$$d_clickChildrenFalse = Function.createDelegate(this, this.clickChildrenFalse);
    this.$$d_clickChildrenTrue = Function.createDelegate(this, this.clickChildrenTrue);
    this.$$d_expandChildren = Function.createDelegate(this, this.expandChildren);
    this.$$d_showParameterTreeContextMenu = Function.createDelegate(this, this.showParameterTreeContextMenu);
    this.$$d_check_e = Function.createDelegate(this, this.check_e);
    this.$$d_parentcheck = Function.createDelegate(this, this.parentcheck);
    this.$$d_check_e_search = Function.createDelegate(this, this.check_e_search);
    this.$$d_parentcheck_search = Function.createDelegate(this, this.parentcheck_search);
    this.$$d_nodetextclick = Function.createDelegate(this, this.nodetextclick);
    this.$$d_expand = Function.createDelegate(this, this.expand);
    this.$$d_repaintSearchInputElement = Function.createDelegate(this, this.repaintSearchInputElement);
    this.$$d__tree_keyup$p$0 = Function.createDelegate(this, this._tree_keyup$p$0);
    this.$$d__tree_keydown$p$0 = Function.createDelegate(this, this._tree_keydown$p$0);
    this.$$d__body_keydown$p$0 = Function.createDelegate(this, this._body_keydown$p$0);
    this.$$d__body_click$p$0 = Function.createDelegate(this, this._body_click$p$0);
    this.$$d__tree_MouseDown$p$0 = Function.createDelegate(this, this._tree_MouseDown$p$0);
    this.$$d_searchImageOnBlur = Function.createDelegate(this, this.searchImageOnBlur);
    this.$$d_searchImageOnFocus = Function.createDelegate(this, this.searchImageOnFocus);
    this.$$d_searchInputOnBlur = Function.createDelegate(this, this.searchInputOnBlur);
    this.$$d_searchInputOnFocus = Function.createDelegate(this, this.searchInputOnFocus);
    this.$$d__searchImageClick$p$0 = Function.createDelegate(this, this._searchImageClick$p$0);
    this.$$d_cancel_e = Function.createDelegate(this, this.cancel_e);
    this.$$d_treeGetAll = Function.createDelegate(this, this.treeGetAll);
    this.$$d_searchGetAll = Function.createDelegate(this, this.searchGetAll);
    this.$$d_selectorText = Function.createDelegate(this, this.selectorText);
    this.$$d_set_focus = Function.createDelegate(this, this.set_focus);
    this.$$d_selector = Function.createDelegate(this, this.selector);
    this.$$d_handleContextMenu = Function.createDelegate(this, this.handleContextMenu);
    this.$$d_genericclick = Function.createDelegate(this, this.genericclick);
    this.$$d_labelclick = Function.createDelegate(this, this.labelclick);
    this.$$d_showtree = Function.createDelegate(this, this.showtree);
    this.$$d_getMoreNodes = Function.createDelegate(this, this.getMoreNodes);
    this.$$d_getMoreNodesSearch = Function.createDelegate(this, this.getMoreNodesSearch);
}
PPSMA.ParameterTree._getContextMenuParentElement$p = function PPSMA_ParameterTree$_getContextMenuParentElement$p(e) {ULSpVC:;
    var targetElem = e.target;
    if (Sys.UI.DomElement.containsCssClass(targetElem, PPSMA.ParameterTree._pT_L2_CN$p) || Sys.UI.DomElement.containsCssClass(targetElem, PPSMA.ParameterTree._pT_L3_CN$p) || Sys.UI.DomElement.containsCssClass(targetElem, PPSMA.ParameterTree._pT_L2S_CN$p) || Sys.UI.DomElement.containsCssClass(targetElem, PPSMA.ParameterTree._pT_L3S_CN$p)) {
        return targetElem;
    }
    while (!Sys.UI.DomElement.containsCssClass(targetElem, PPSMA.ParameterTree._ppS_TREE_ITEM_DETAIL$p)) {
        targetElem = targetElem.parentNode;
    }
    return targetElem;
}
PPSMA.ParameterTree.prototype = {
    _treeViewDataRecord$0: null,
    _tVDRMembers$0: null,
    _tVDRMembersXRef$0: null,
    _currentSelections$0: null,
    _currentSelectionsEdit$0: null,
    _singleSelectParents$0: null,
    _currentSelectionsSearch$0: null,
    _originalSelections$0: null,
    _treeElement$0: null,
    _iFrame$0: null,
    _outerElement$0: null,
    _searchElement$0: null,
    _searchController$0: null,
    _pcm$0: null,
    _searchInputElementValueOnFocus$0: null,
    _singleSelBackgroundColor$0: null,
    _singleUnSelBackgroundColor$0: null,
    _singleSelSearchSelection$0: null,
    _searchInputElement$0: null,
    _searchImageAnchor$0: null,
    _searchImageElement$0: null,
    _labelElement$0: null,
    _layer2$0: null,
    _layer2search$0: null,
    _searchAncestors$0: null,
    _searchResultNodes$0: null,
    _pps_tree_item_detail_height$0: 0,
    _treeMaxHeight$0: 0,
    _cancelling$0: false,
    _expandingAll$0: false,
    _expanding$0: false,
    _expandAllThrobbing$0: false,
    _expandAllCancel$0: false,
    _getAllThrobbing$0: false,
    _isMultiSelect$0: false,
    _isRightToLeft$0: false,
    _applyElementDisabledState$0: true,
    _stoppingProcess$0: false,
    _separatorCharacter$0: null,
    _ellipsisCharacter$0: null,
    _labelTextElement$0: null,
    _dropDownImage$0: null,
    _exceededElement$0: null,
    _exceededSearchElement$0: null,
    _selectorElement$0: null,
    _selectorElementState$0: false,
    _selectorElementStateForSearch$0: false,
    _selectorTextElement$0: null,
    _applyElement$0: null,
    _cancelElement$0: null,
    _searchGetAll$0: null,
    _treeGetAll$0: null,
    _treeGetAllComplete$0: false,
    _membersChanged$0: false,
    _tempElement$0: null,
    _tempTargetElement$0: null,
    _cancelButtons$0: null,
    _tempObjects$0: null,
    _initialClientWidth$0: 0,
    _nextRootNodeToRender$0: 0,
    _nextRootNodeToRenderSearch$0: 0,
    _pps_MaxNodes_Page$0: 0,
    _pps_Tree_Plus$0: 'ms-bitree-plus',
    _pps_Tree_Plus_Hidden$0: 'ms-bitree-plus-hidden',
    _pps_Tree_Minus$0: 'ms-bitree-minus',
    _pps_Tree_Selector$0: 'ms-bitree-selector',
    _pps_Checkbox_Input$0: 'pps-checkbox-input',
    _pps_Tree_Search_Header$0: 'ms-bitree-searchheader',
    _pps_Tree_Search_Header_NoFocus$0: 'ms-bitree-searchheader-nofocus',
    _pps_Tree_Search_Header_Focus$0: 'ms-bitree-searchheader-focus',
    _pps_Tree_Search_Input$0: 'ms-bitree-searchinput',
    _pps_Tree_Search_Input_NoFocus$0: 'ms-InlineSearch-SearchBox-EmptyUnfocused',
    _pps_Tree_Search_Input_Focus$0: 'ms-textSmall',
    _pps_Tree_Footer$0: 'ms-bitree-footer',
    _pps_Tree_Footer_Normal$0: 'ms-bitree-footer-normal',
    _pps_Tree_Footer_Search$0: 'ms-bitree-footer-search',
    _pps_Tree_Item_Checked$0: null,
    _contextMenuSrcElement$0: null,
    _contextId$0: null,
    _resourceUrl$0: null,
    _imageUrl$0: null,
    _searchTxDecoded$0: null,
    _bodyClickHandler$0: null,
    _treeMouseDownHandler$0: null,
    _bodyKeyDownHandler$0: null,
    _treeKeyDownHandler$0: null,
    _treeKeyUpHandler$0: null,
    _name$0: null,
    
    get_Name: function PPSMA_ParameterTree$get_Name() {ULSpVC:;
        return this._name$0;
    },
    set_Name: function PPSMA_ParameterTree$set_Name(value) {ULSpVC:;
        this._name$0 = value;
        return value;
    },
    
    get_IsMultiSelect: function PPSMA_ParameterTree$get_IsMultiSelect() {ULSpVC:;
        return this._isMultiSelect$0;
    },
    set_IsMultiSelect: function PPSMA_ParameterTree$set_IsMultiSelect(value) {ULSpVC:;
        this._isMultiSelect$0 = value;
        return value;
    },
    
    set_focus: function PPSMA_ParameterTree$set_focus(e) {ULSpVC:;
        if (this._treeElement$0.style.visibility === 'visible') {
            this.displayfocus(e.target);
        }
    },
    
    displayfocus: function PPSMA_ParameterTree$displayfocus(uiElement) {ULSpVC:;
        uiElement.focus();
        uiElement.style.borderStyle = uiElement.style.borderStyle;
    },
    
    getMoreNodes: function PPSMA_ParameterTree$getMoreNodes() {ULSpVC:;
        var uiElement = this._tempElement$0;
        var idx = parseInt(uiElement.getAttribute('idx'));
        var uippElement = uiElement.parentNode.parentNode;
        if (this._isMultiSelect$0) {
            uiElement.parentNode.previousSibling.children[0].children[1].focus();
        }
        else {
            uiElement.parentNode.previousSibling.children[0].children[2].focus();
        }
        uippElement.removeChild(uiElement.parentNode);
        if (this._tVDRMembers$0[idx].Lv > 0) {
            this.onLoad_Dynamic(uippElement.previousSibling.firstChild, idx);
        }
        else {
            this._nextRootNodeToRender$0 = idx;
            this.onLoad_DynamicRoot();
        }
        this.heightwidth_reset();
    },
    
    getMoreNodesSearch: function PPSMA_ParameterTree$getMoreNodesSearch() {ULSpVC:;
        var uiElement = this._tempElement$0;
        var idx = parseInt(uiElement.getAttribute('idx'));
        var uippElement = uiElement.parentNode.parentNode;
        if (this._isMultiSelect$0) {
            uiElement.parentNode.previousSibling.children[0].children[1].focus();
        }
        else {
            uiElement.parentNode.previousSibling.children[0].children[2].focus();
        }
        uippElement.removeChild(uiElement.parentNode);
        this.onLoad_DynamicSearch(this._searchResultNodes$0, this._searchAncestors$0);
    },
    
    check_search: function PPSMA_ParameterTree$check_search(uiElement) {ULSpVC:;
        var more = (uiElement.parentNode.getAttribute('more') === 'true');
        if (more) {
            this._tempElement$0 = uiElement.parentNode;
            this._tempTargetElement$0 = this._tempElement$0.lastChild.previousSibling;
            this._tempElement$0.style.cursor = 'wait';
            this._tempTargetElement$0.style.cursor = 'wait';
            window.setTimeout(this.$$d_getMoreNodesSearch, 10);
            return;
        }
        if (uiElement.nextSibling.getAttribute('class').toString().indexOf(PPSMA.ParameterTree._ppS_TREE_NODE_TEXT_NOTFOUND$p) > -1) {
            return;
        }
        var uippElement = uiElement.parentNode.parentNode;
        this._membersChanged$0 = true;
        this._applyButtonDisable$p$0(false);
        var memberID = uiElement.parentNode.getAttribute('memberid');
        if (Sys.UI.DomElement.containsCssClass(uippElement, this._pps_Tree_Item_Checked$0)) {
            if (this._isMultiSelect$0) {
                if (this._currentSelectionsSearch$0[memberID]) {
                    delete this._currentSelectionsSearch$0[memberID];
                }
                uiElement.checked = false;
                uippElement.className = PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p;
                this._selectorElement$0.checked = false;
            }
        }
        else {
            if (!this._isMultiSelect$0) {
                this._currentSelectionsSearch$0 = {};
            }
            if (!this._currentSelectionsSearch$0[memberID]) {
                this._currentSelectionsSearch$0[memberID] = uippElement.innerText;
            }
            uiElement.checked = true;
            uippElement.className = this._pps_Tree_Item_Checked$0;
            var i = 0;
            var $$dict_5 = this._currentSelectionsSearch$0;
            for (var $$key_6 in $$dict_5) {
                var d = { key: $$key_6, value: $$dict_5[$$key_6] };
                ++i;
            }
            if (i === this._searchResultNodes$0.length) {
                this._selectorElement$0.checked = true;
            }
            else {
                this._selectorElement$0.checked = false;
            }
        }
        if (!this._isMultiSelect$0) {
            this.apply();
        }
    },
    
    check_e: function PPSMA_ParameterTree$check_e(e) {ULSpVC:;
        var uiElement = e.target;
        this.check(uiElement);
        e.stopPropagation();
    },
    
    check_e_search: function PPSMA_ParameterTree$check_e_search(e) {ULSpVC:;
        var uiElement = e.target;
        this.check_search(uiElement);
        e.stopPropagation();
    },
    
    check: function PPSMA_ParameterTree$check(uiElement) {ULSpVC:;
        var more = (uiElement.parentNode.getAttribute('more') === 'true');
        if (more) {
            this._tempElement$0 = uiElement.parentNode;
            this._tempTargetElement$0 = this._tempElement$0.lastChild.previousSibling;
            this._tempElement$0.style.cursor = 'wait';
            this._tempTargetElement$0.style.cursor = 'wait';
            window.setTimeout(this.$$d_getMoreNodes, 10);
            return;
        }
        var uippElement = uiElement.parentNode.parentNode;
        this._membersChanged$0 = true;
        this._applyButtonDisable$p$0(false);
        var idx = uiElement.parentNode.getAttribute('idx');
        var resetTreeWidth = false;
        if (Sys.UI.DomElement.containsCssClass(uippElement, this._pps_Tree_Item_Checked$0)) {
            if (this._isMultiSelect$0) {
                if (this._currentSelectionsEdit$0[idx]) {
                    delete this._currentSelectionsEdit$0[idx];
                }
                uiElement.checked = false;
                uippElement.className = PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p;
                if (!Sys.UI.DomElement.containsCssClass(uiElement.nextSibling, PPSMA.ParameterTree._ppS_TREE_NODE_TEXT_BOLD$p)) {
                    resetTreeWidth = this.setParentageDisplay(uippElement.parentNode, false);
                }
                this._selectorElement$0.checked = false;
            }
        }
        else {
            if (!this._currentSelectionsEdit$0[idx]) {
                this._currentSelectionsEdit$0[idx] = this._treeViewDataRecord$0.Members[parseInt(idx)].Id;
            }
            uiElement.checked = true;
            uippElement.className = this._pps_Tree_Item_Checked$0;
            if (!Sys.UI.DomElement.containsCssClass(uiElement.nextSibling, PPSMA.ParameterTree._ppS_TREE_NODE_TEXT_BOLD$p) && this.get_IsMultiSelect()) {
                resetTreeWidth = this.setParentageDisplay(uippElement.parentNode, true);
            }
            var i = 0;
            var $$dict_6 = this._currentSelectionsEdit$0;
            for (var $$key_7 in $$dict_6) {
                var d = { key: $$key_7, value: $$dict_6[$$key_7] };
                ++i;
            }
            if (i === this._tVDRMembers$0.length) {
                this._selectorElement$0.checked = true;
            }
            else {
                this._selectorElement$0.checked = false;
            }
        }
        if (!this._isMultiSelect$0) {
            var $$dict_9 = this._currentSelectionsEdit$0;
            for (var $$key_A in $$dict_9) {
                var de = { key: $$key_A, value: $$dict_9[$$key_A] };
                var el = $get(this._treeViewDataRecord$0.TreeId + this.zeroFill(parseInt(de.key)));
                if (!el) {
                    delete this._currentSelectionsEdit$0[de.key];
                    var $$dict_D = this._singleSelectParents$0;
                    for (var $$key_E in $$dict_D) {
                        var sn = { key: $$key_E, value: $$dict_D[$$key_E] };
                        var snEl = $get(this._treeViewDataRecord$0.TreeId + this.zeroFill(parseInt(sn.key)));
                        if (snEl) {
                            snEl.childNodes[2].className = PPSMA.ParameterTree._ppS_TREE_NODE_TEXT$p;
                        }
                    }
                    break;
                }
                var checkboxElement = el.firstChild.nextSibling;
                if (checkboxElement.id !== uiElement.id) {
                    var cbElemIdx = checkboxElement.parentNode.getAttribute('idx');
                    if (this._currentSelectionsEdit$0[cbElemIdx]) {
                        delete this._currentSelectionsEdit$0[cbElemIdx];
                    }
                    checkboxElement.checked = false;
                    checkboxElement.parentNode.parentNode.className = PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p;
                    if (this.setParentageDisplay(checkboxElement.parentNode.parentNode.parentNode, false)) {
                        resetTreeWidth = true;
                    }
                    break;
                }
            }
            if (this.setParentageDisplay(uippElement.parentNode, true)) {
                resetTreeWidth = true;
            }
        }
        if (resetTreeWidth) {
            this.width_reset();
        }
        if (!this._isMultiSelect$0) {
            this.updateLabel();
            this.apply();
        }
    },
    
    setParentageDisplay: function PPSMA_ParameterTree$setParentageDisplay(uiElement, forceBold) {ULSpVC:;
        if (Sys.UI.DomElement.containsCssClass(uiElement, PPSMA.ParameterTree._ppS_TREE_LAYER3$p)) {
            return false;
        }
        var idx = uiElement.previousSibling.childNodes[0].getAttribute('idx');
        var e = uiElement.previousSibling.childNodes[0].childNodes[2];
        var lastChild = uiElement.childNodes.length;
        var parentIsBold = (Sys.UI.DomElement.containsCssClass(e, PPSMA.ParameterTree._ppS_TREE_NODE_TEXT_BOLD$p));
        if (forceBold) {
            if (parentIsBold) {
                return false;
            }
            else {
                e.className = PPSMA.ParameterTree._ppS_TREE_NODE_TEXT_BOLD$p;
                this.setParentageDisplay(uiElement.parentNode, true);
                return true;
            }
        }
        for (var i = 0; i < lastChild; ++i) {
            if ((Sys.UI.DomElement.containsCssClass(uiElement.childNodes[i], this._pps_Tree_Item_Checked$0))) {
                if (parentIsBold || Sys.UI.DomElement.containsCssClass(uiElement.childNodes[i].childNodes[0].childNodes[2], PPSMA.ParameterTree._ppS_TREE_NODE_TEXT_BOLD$p)) {
                    return false;
                }
                else {
                    e.className = PPSMA.ParameterTree._ppS_TREE_NODE_TEXT_BOLD$p;
                    this.setParentageDisplay(uiElement.parentNode, true);
                    return true;
                }
            }
            else if ((Sys.UI.DomElement.containsCssClass(uiElement.childNodes[i], PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p))) {
                if (Sys.UI.DomElement.containsCssClass(uiElement.childNodes[i].childNodes[0].childNodes[2], PPSMA.ParameterTree._ppS_TREE_NODE_TEXT_BOLD$p)) {
                    e.className = PPSMA.ParameterTree._ppS_TREE_NODE_TEXT_BOLD$p;
                    this.setParentageDisplay(uiElement.parentNode, true);
                    return true;
                }
            }
        }
        if (parentIsBold) {
            e.className = PPSMA.ParameterTree._ppS_TREE_NODE_TEXT$p;
            this.setParentageDisplay(uiElement.parentNode, false);
            return true;
        }
        return false;
    },
    
    genericclick: function PPSMA_ParameterTree$genericclick(e) {ULSpVC:;
        e.stopPropagation();
        e.preventDefault();
    },
    
    labelclick: function PPSMA_ParameterTree$labelclick(e) {ULSpVC:;
        if (!this._cancelButtons$0) {
            var cancelButtons = document.getElementsByTagName('button');
            this._cancelButtons$0 = {};
            for (var i = 0, j = 0; i < cancelButtons.length; ++i) {
                var el = cancelButtons[i];
                if ((Sys.UI.DomElement.containsCssClass(el, PPSMA.ParameterTree._ppS_TREE_CANCEL$p)) && (el.id !== ('pps-tree-cancel-' + this._outerElement$0.id))) {
                    this._cancelButtons$0[j.toString()] = el.id;
                    ++j;
                }
            }
        }
        var $$dict_5 = this._cancelButtons$0;
        for (var $$key_6 in $$dict_5) {
            var de = { key: $$key_6, value: $$dict_5[$$key_6] };
            var el = $get(de.value.toString());
            if (el) {
                if (el.parentNode.parentNode.childNodes[2].style.visibility === 'visible') {
                    el.click();
                }
                if (el.parentNode.parentNode.style.visibility === 'visible') {
                    el.click();
                }
            }
        }
        if (this._treeElement$0.style.visibility === 'visible' && !this._applyElement$0.disabled) {
            this.apply();
        }
        else {
            this._labelTextElement$0.style.cursor = 'wait';
            this._dropDownImage$0.style.cursor = 'wait';
            window.setTimeout(this.$$d_showtree, 10);
        }
        e.stopPropagation();
        e.preventDefault();
    },
    
    showtree: function PPSMA_ParameterTree$showtree() {ULSpVC:;
        var showTreeStartTime = new Date().getTime();
        if (this._treeElement$0.style.visibility === 'visible') {
            if (this.searchIsOpen()) {
                this.hideSearchPanel();
                return;
            }
            this._hide$p$0(this._treeElement$0);
        }
        else {
            var interimTime = new Date().getTime();
            if (!this._initialClientWidth$0) {
                this._onLoad_post$p$0();
            }
            this._applyButtonDisable$p$0(true);
            this._membersChanged$0 = false;
            var container = this._outerElement$0.parentNode;
            container.style.overflow = 'visible';
            if (container.parentNode.tagName !== 'TD') {
                container.parentNode.style.overflow = 'visible';
            }
            this._currentSelectionsEdit$0 = {};
            var $$dict_3 = this._currentSelections$0;
            for (var $$key_4 in $$dict_3) {
                var de = { key: $$key_4, value: $$dict_3[$$key_4] };
                var id = de.value;
                this._currentSelectionsEdit$0[de.key] = id;
            }
            this._iFrame$0.style.zIndex = 8;
            this._treeElement$0.style.zIndex = 9;
            this._iFrame$0.style.left = this._treeElement$0.currentStyle.left;
            this._iFrame$0.style.top = this._treeElement$0.currentStyle.top;
            this._show$p$0(this._treeElement$0);
            this._iFrame$0.style.height = this._treeElement$0.offsetHeight + 'px';
            this._iFrame$0.style.width = this._treeElement$0.offsetWidth + 'px';
            this._selectorElementState$0 = this._selectorElement$0.checked;
            if (!this._initialClientWidth$0) {
                if (this._treeViewDataRecord$0.MaxExceeded.length > 0) {
                    this._applyElement$0.parentNode.style.height = (parseInt(this._applyElement$0.parentNode.currentStyle.height) + PPSMA.ParameterTree._ppstreE_INFO_FOOTER_HEIGHT_ADJ$p).toString() + 'px';
                }
                this.onLoad_DynamicRoot();
                this.heightwidth_reset();
                this._initialClientWidth$0 = this._layer2$0.clientWidth;
            }
        }
        this._labelTextElement$0.style.cursor = 'default';
        this._dropDownImage$0.style.cursor = 'default';
        var elapsedTime = new Date().getTime() - showTreeStartTime;
        PPSMA.PerformanceLogger.logGeneric(this._treeViewDataRecord$0.TreeId + ':showtree', elapsedTime);
    },
    
    _hide$p$0: function PPSMA_ParameterTree$_hide$p$0(domElement) {ULSpVC:;
        domElement.style.display = 'none';
        domElement.style.visibility = 'hidden';
        this._iFrame$0.style.display = 'none';
        this._iFrame$0.style.visibility = 'hidden';
    },
    
    _show$p$0: function PPSMA_ParameterTree$_show$p$0(domElement) {ULSpVC:;
        domElement.style.display = 'block';
        domElement.style.visibility = 'visible';
        if (Sys.Browser.agent === Sys.Browser.Safari) {
            this._iFrame$0.style.display = 'none';
            this._iFrame$0.style.visibility = 'hidden';
        }
        else {
            this._iFrame$0.style.display = 'block';
            this._iFrame$0.style.visibility = 'visible';
        }
    },
    
    height_reset: function PPSMA_ParameterTree$height_reset() {ULSpVC:;
        var footerHeight = parseInt(this._applyElement$0.parentNode.currentStyle.height);
        var searchHeight = parseInt(this._searchElement$0.currentStyle.height);
        var layer2 = (this.searchIsOpen()) ? this._layer2search$0 : this._layer2$0;
        if (!this._treeViewDataRecord$0.IsSearchEnabled) {
            this._searchElement$0.style.display = 'none';
            searchHeight = 0;
            this._treeElement$0.style.borderTopColor = this._treeElement$0.currentStyle.borderBottomColor;
            this._treeElement$0.style.borderTopStyle = this._treeElement$0.currentStyle.borderBottomStyle;
            this._treeElement$0.style.borderTopWidth = this._treeElement$0.currentStyle.borderBottomWidth;
        }
        var maxrows = (this._treeMaxHeight$0 - footerHeight - searchHeight) / this._pps_tree_item_detail_height$0;
        var rowsForDisplay = 0;
        var layer3 = layer2.childNodes[0];
        rowsForDisplay = this.countRowsForDisplay(maxrows, rowsForDisplay, layer3);
        var newHeight = (rowsForDisplay * (this._pps_tree_item_detail_height$0 + PPSMA.ParameterTree._ppstreE_ROWHEIGHT_SHIM$p)) + PPSMA.ParameterTree._ppstreE_HEIGHT_SHIM$p;
        if (newHeight < PPSMA.ParameterTree._ppstreE_MIN_HEIGHT$p - footerHeight - searchHeight) {
            newHeight = PPSMA.ParameterTree._ppstreE_MIN_HEIGHT$p - footerHeight - searchHeight;
        }
        else if (newHeight > this._treeMaxHeight$0 - footerHeight - searchHeight) {
            newHeight = this._treeMaxHeight$0 - footerHeight - searchHeight;
        }
        layer2.style.height = newHeight.toString() + 'px';
        this._treeElement$0.style.height = 'auto';
        this._treeElement$0.style.height = this._treeElement$0.clientHeight + 'px';
        this._iFrame$0.style.height = this._treeElement$0.currentStyle.height;
    },
    
    countRowsForDisplay: function PPSMA_ParameterTree$countRowsForDisplay(maxrows, rowsForDisplay, parent) {ULSpVC:;
        for (var i = 0; i < parent.children.length; ++i) {
            if (Sys.UI.DomElement.containsCssClass(parent.childNodes[i], PPSMA.ParameterTree._ppS_TREE_EXPANDED$p)) {
                rowsForDisplay = this.countRowsForDisplay(maxrows, rowsForDisplay, parent.childNodes[i]);
            }
            else if (!Sys.UI.DomElement.containsCssClass(parent.childNodes[i], PPSMA.ParameterTree._ppS_TREE_COLLAPSED$p)) {
                ++rowsForDisplay;
            }
            if (rowsForDisplay >= maxrows) {
                rowsForDisplay = maxrows;
                break;
            }
        }
        return rowsForDisplay;
    },
    
    heightwidth_reset: function PPSMA_ParameterTree$heightwidth_reset() {ULSpVC:;
        this.width_reset();
        this.height_reset();
    },
    
    width_reset: function PPSMA_ParameterTree$width_reset() {ULSpVC:;
        var layer2 = (this.searchIsOpen()) ? this._layer2search$0 : this._layer2$0;
        this._searchElement$0.firstChild.style.width = 'auto';
        this._searchElement$0.style.width = 'auto';
        this._treeElement$0.style.width = 'auto';
        var scrollWidth = (layer2.scrollWidth > this._applyElement$0.parentNode.scrollWidth) ? layer2.scrollWidth : this._applyElement$0.parentNode.scrollWidth;
        if ("ontouchstart" in window){;
        this._treeElement$0.style.width = scrollWidth + 'px';
        }else{;
        this._treeElement$0.style.width = scrollWidth + PPSMA.ParameterTree._ppstreE_VERTSCROLLBAR_WIDTH$p + 'px';
        };
        this._iFrame$0.style.width = this._treeElement$0.offsetWidth + 'px';
        if (this._treeElement$0.offsetWidth - PPSMA.ParameterTree._ppstreE_SEARCHOFFSET_WIDTH_ADJ$p >= 0) {
            this._searchElement$0.firstChild.style.width = this._treeElement$0.offsetWidth - PPSMA.ParameterTree._ppstreE_OFFSET_WIDTH_ADJ$p + 'px';
            this._searchElement$0.style.width = this._treeElement$0.offsetWidth - PPSMA.ParameterTree._ppstreE_SEARCHOFFSET_WIDTH_ADJ$p + 'px';
        }
        if (this.searchIsOpen()) {
            this._layer2search$0.style.width = this._searchElement$0.currentStyle.width;
        }
    },
    
    onLoad: function PPSMA_ParameterTree$onLoad(uiElement, treeViewDataRecord, selfContextName, resourcePath, imagePath) {ULSpVC:;
        this._contextId$0 = selfContextName;
        this._resourceUrl$0 = resourcePath;
        this._imageUrl$0 = imagePath;
        this._iFrame$0 = uiElement;
        this._treeViewDataRecord$0 = treeViewDataRecord;
        this._tVDRMembers$0 = this._treeViewDataRecord$0.Members;
        this._outerElement$0 = $get(this._treeViewDataRecord$0.TreeId);
        this._labelElement$0 = this._outerElement$0.firstChild;
        this._labelElement$0.style.visibility = 'visible';
        $addHandler(this._labelElement$0, 'click', this.$$d_labelclick);
        this._treeElement$0 = this._outerElement$0.nextSibling;
        $addHandler(this._treeElement$0, 'click', this.$$d_genericclick);
        this._treeMaxHeight$0 = parseInt(this._treeElement$0.currentStyle.height);
        this._layer2$0 = this._treeElement$0.childNodes[1];
        this._layer2search$0 = this._treeElement$0.childNodes[2];
        $addHandler(this._layer2$0, 'contextmenu', this.$$d_handleContextMenu);
        this._isMultiSelect$0 = this._treeViewDataRecord$0.Multi;
        this._isFlat$0 = this._treeViewDataRecord$0.Flat;
        this._pps_MaxNodes_Page$0 = this._treeViewDataRecord$0.More;
        this._pps_Tree_Item_Checked$0 = (this._isMultiSelect$0) ? PPSMA.ParameterTree._ppS_TREE_ITEM_CHECKED$p : PPSMA.ParameterTree._ppS_TREE_ITEM_CHECKED_SINGLESEL$p;
        this._separatorCharacter$0 = this._treeViewDataRecord$0.Separator;
        this._ellipsisCharacter$0 = this._treeViewDataRecord$0.Ellipsis;
        this._labelTextElement$0 = $get('pps-tree-label-text-' + this._outerElement$0.id);
        if (null !== this._labelTextElement$0) {
            $addHandler(this._labelTextElement$0, 'click', this.$$d_labelclick);
        }
        this._dropDownImage$0 = $get('pps-tree-label-down-' + this._outerElement$0.id);
        $addHandler(this._dropDownImage$0, 'click', this.$$d_labelclick);
        this._hide$p$0(this._treeElement$0);
        this._currentSelections$0 = {};
        this._currentSelectionsEdit$0 = {};
        if (!this._isMultiSelect$0) {
            this._singleSelectParents$0 = {};
        }
        var selections = this._treeViewDataRecord$0.Selections;
        for (var i = 0; i < selections.length; ++i) {
            this._currentSelections$0[selections[i].toString()] = this._tVDRMembers$0[selections[i]].Id;
            this._currentSelectionsEdit$0[selections[i].toString()] = this._tVDRMembers$0[selections[i]].Id;
        }
        this.updateLabel();
        this._membersChanged$0 = true;
        this._labelTextElement$0.style.cursor = 'default';
        this._dropDownImage$0.style.cursor = 'default';
    },
    
    _onLoad_post$p$0: function PPSMA_ParameterTree$_onLoad_post$p$0() {ULSpVC:;
        this._selectorElement$0 = $get('pps-tree-selector-' + this._outerElement$0.id);
        if (null !== this._selectorElement$0) {
            $addHandler(this._selectorElement$0, 'click', this.$$d_selector);
            $addHandler(this._selectorElement$0, 'focus', this.$$d_set_focus);
        }
        if (this._treeViewDataRecord$0.Selections.length === this._tVDRMembers$0.length) {
            this._selectorElement$0.checked = true;
        }
        this._selectorTextElement$0 = $get('pps-tree-selector-text-' + this._outerElement$0.id);
        if (null !== this._selectorTextElement$0) {
            $addHandler(this._selectorTextElement$0, 'click', this.$$d_selectorText);
        }
        this._applyElement$0 = $get('pps-tree-apply-' + this._outerElement$0.id);
        this._cancelElement$0 = $get('pps-tree-cancel-' + this._outerElement$0.id);
        this._exceededElement$0 = $get('pps-tree-exceeded-' + this._outerElement$0.id);
        this._exceededSearchElement$0 = $get('pps-tree-exceededsearch-' + this._outerElement$0.id);
        if (this._treeViewDataRecord$0.MaxExceeded.length > 0) {
            this._exceededElement$0.style.display = 'block';
            this._exceededElement$0.nextSibling.style.display = 'inline-block';
        }
        else {
            this._exceededElement$0.style.display = 'none';
            this._exceededElement$0.nextSibling.style.display = 'none';
        }
        this._exceededSearchElement$0.style.display = 'none';
        this._exceededSearchElement$0.nextSibling.style.display = 'none';
        this._searchElement$0 = this._treeElement$0.childNodes[0];
        this._searchInputElement$0 = this._searchElement$0.childNodes[0];
        this._searchImageAnchor$0 = this._searchElement$0.childNodes[1];
        this._searchImageElement$0 = this._searchImageAnchor$0.childNodes[0];
        var d = document.createElement('div');
        d.innerHTML = '<div display=\"none\" title=\"' + this._treeViewDataRecord$0.SearchTx + '\"></div>';
        this._labelElement$0.appendChild(d.childNodes[0]);
        this._searchTxDecoded$0 = this._labelElement$0.lastChild.title;
        this._labelElement$0.removeChild(this._labelElement$0.lastChild);
        this._searchInputElement$0.value = this._searchTxDecoded$0;
        this._searchGetAll$0 = $get('pps-tree-node-text-PPSMessagesearch-GetAll-' + this._outerElement$0.id);
        $addHandler(this._searchGetAll$0, 'click', this.$$d_searchGetAll);
        this._treeGetAll$0 = $get('pps-tree-node-text-PPSMessage-GetAll-' + this._outerElement$0.id);
        $addHandler(this._treeGetAll$0, 'click', this.$$d_treeGetAll);
        $addHandler(this._cancelElement$0, 'click', this.$$d_cancel_e);
        $addHandler(this._applyElement$0, 'focus', this.$$d_set_focus);
        $addHandler(this._cancelElement$0, 'focus', this.$$d_set_focus);
        $addHandler(this._exceededElement$0.children[2], 'focus', this.$$d_set_focus);
        $addHandler(this._exceededSearchElement$0.children[2], 'focus', this.$$d_set_focus);
        $addHandler(this._searchImageAnchor$0, 'click', this.$$d__searchImageClick$p$0);
        $addHandler(this._searchInputElement$0, 'focus', this.$$d_searchInputOnFocus);
        $addHandler(this._searchInputElement$0, 'blur', this.$$d_searchInputOnBlur);
        $addHandler(this._searchImageAnchor$0, 'focus', this.$$d_searchImageOnFocus);
        $addHandler(this._searchImageAnchor$0, 'blur', this.$$d_searchImageOnBlur);
        if (!this._isMultiSelect$0) {
            if (null !== this._selectorElement$0) {
                this._selectorElement$0.style.display = 'none';
            }
            if (null !== this._selectorTextElement$0) {
                this._selectorTextElement$0.style.display = 'none';
            }
            if (null !== this._selectorTextElement$0) {
                this._applyElement$0.style.display = 'none';
            }
        }
        if (!this._treeMouseDownHandler$0) {
            this._treeMouseDownHandler$0 = this.$$d__tree_MouseDown$p$0;
            $addHandler(this._treeElement$0, 'mousedown', this._treeMouseDownHandler$0);
        }
        if (!this._bodyClickHandler$0) {
            this._bodyClickHandler$0 = this.$$d__body_click$p$0;
            $addHandler(document.body, 'click', this._bodyClickHandler$0);
        }
        if (!this._bodyKeyDownHandler$0) {
            this._bodyKeyDownHandler$0 = this.$$d__body_keydown$p$0;
            $addHandler(document.body, 'keydown', this._bodyKeyDownHandler$0);
        }
        if (!this._treeKeyDownHandler$0) {
            this._treeKeyDownHandler$0 = this.$$d__tree_keydown$p$0;
            $addHandler(this._treeElement$0, 'keydown', this._treeKeyDownHandler$0);
        }
        if (!this._treeKeyUpHandler$0) {
            this._treeKeyUpHandler$0 = this.$$d__tree_keyup$p$0;
            $addHandler(this._treeElement$0, 'keyup', this._treeKeyUpHandler$0);
        }
        this._originalSelections$0 = {};
        var originalSelections = this._treeViewDataRecord$0.OriginalSelections;
        var howManyToUse;
        if (this.get_IsMultiSelect()) {
            howManyToUse = originalSelections.length;
        }
        else {
            if (originalSelections.length > 0) {
                howManyToUse = 1;
            }
            else {
                howManyToUse = 0;
            }
        }
        for (var i = 0; i < howManyToUse; ++i) {
            this._originalSelections$0[originalSelections[i].toString()] = this._tVDRMembers$0[originalSelections[i]].Id;
        }
        var buildxrefTime = new Date().getTime();
        this._buildXRef$p$0();
        var elapsedTime = new Date().getTime() - buildxrefTime;
        PPSMA.PerformanceLogger.logGeneric(this._treeViewDataRecord$0.TreeId + ':buildxref', elapsedTime);
    },
    
    repaintSearchInputElement: function PPSMA_ParameterTree$repaintSearchInputElement() {ULSpVC:;
        this._searchInputElement$0.value = this._searchInputElement$0.value;
    },
    
    searchInputOnFocus: function PPSMA_ParameterTree$searchInputOnFocus(e) {ULSpVC:;
        this._handleSearchAttributes$p$0();
        if (this._searchInputElement$0.value === this._searchTxDecoded$0) {
            this._searchInputElement$0.value = '';
            window.setTimeout(this.$$d_repaintSearchInputElement, 10);
        }
        this._searchInputElementValueOnFocus$0 = this._searchInputElement$0.value;
    },
    
    _applyButtonDisable$p$0: function PPSMA_ParameterTree$_applyButtonDisable$p$0(state) {ULSpVC:;
        if (state) {
            this._applyElement$0.disabled = true;
            this._applyElement$0.className = 'ms-bitree-apply' + ' ' + 'ms-bifilter-disabledbutton';
        }
        else {
            this._applyElement$0.disabled = false;
            this._applyElement$0.className = 'ms-bitree-apply';
        }
    },
    
    _handleSearchAttributes$p$0: function PPSMA_ParameterTree$_handleSearchAttributes$p$0() {ULSpVC:;
        if (document.activeElement === this._searchInputElement$0 || document.activeElement === this._searchImageAnchor$0 || document.activeElement === this._searchImageElement$0) {
            this._searchElement$0.className = this._pps_Tree_Search_Header$0 + ' ' + this._pps_Tree_Search_Header_Focus$0;
        }
        else {
            this._searchElement$0.className = this._pps_Tree_Search_Header$0 + ' ' + this._pps_Tree_Search_Header_NoFocus$0;
        }
        if (document.activeElement === this._searchInputElement$0) {
            this._searchInputElement$0.className = this._pps_Tree_Search_Input$0 + ' ' + this._pps_Tree_Search_Input_Focus$0;
        }
        else {
            this._searchInputElement$0.className = this._pps_Tree_Search_Input$0 + ' ' + this._pps_Tree_Search_Input_NoFocus$0;
            if (!this._searchInputElement$0.value.length) {
                this._searchInputElement$0.value = this._searchTxDecoded$0;
            }
        }
    },
    
    searchInputOnBlur: function PPSMA_ParameterTree$searchInputOnBlur(e) {ULSpVC:;
        this._handleSearchAttributes$p$0();
    },
    
    searchImageOnFocus: function PPSMA_ParameterTree$searchImageOnFocus(e) {ULSpVC:;
        this._handleSearchAttributes$p$0();
    },
    
    searchImageOnBlur: function PPSMA_ParameterTree$searchImageOnBlur(e) {ULSpVC:;
        this._handleSearchAttributes$p$0();
    },
    
    onload_DynamicPostSearch: function PPSMA_ParameterTree$onload_DynamicPostSearch(element, startIdx) {ULSpVC:;
        var startTime = new Date().getTime();
        var parentElem = (!startIdx) ? element.firstChild : element.childNodes[startIdx];
        this._singleSelSearchSelection$0 = null;
        while (parentElem) {
            var el = parentElem.firstChild;
            if (!this._pps_tree_item_detail_height$0) {
                this._pps_tree_item_detail_height$0 = parseInt(el.currentStyle.height);
            }
            var idx = parseInt(el.getAttribute('idx'));
            if (idx === PPSMA.ParameterTree._msG_IDX_MAX_EXCEEDED$p) {
                break;
            }
            var more = (el.getAttribute('more') === 'true');
            var divEl = el.firstChild;
            var inputEl = divEl.nextSibling;
            var nodeTextEl = inputEl.nextSibling;
            if (Sys.UI.DomElement.containsCssClass(parentElem, PPSMA.ParameterTree._ppS_TREE_ITEM_CHECKED_SINGLESEL$p) && !more) {
                this._singleSelSearchSelection$0 = parentElem;
            }
            $addHandler(divEl, 'click', this.$$d_expand);
            $addHandler(divEl, 'focus', this.$$d_set_focus);
            if ((!this._isMultiSelect$0 && idx !== PPSMA.ParameterTree._msG_IDX_NOT_FOUND$p) || more) {
                $addHandler(nodeTextEl, 'click', this.$$d_nodetextclick);
                $addHandler(nodeTextEl, 'focus', this.$$d_set_focus);
            }
            $addHandler(el, 'click', this.$$d_parentcheck_search);
            var offsetTotal = 0;
            if ((idx === PPSMA.ParameterTree._msG_IDX_NOT_FOUND$p && this._isMultiSelect$0) || more) {
                offsetTotal += PPSMA.ParameterTree._ppstreE_MORE_INDENT$p;
            }
            if (!this._isRightToLeft$0) {
                el.style.paddingLeft = offsetTotal + 'px';
            }
            else {
                el.style.paddingRight = offsetTotal + 'px';
            }
            if ((!this._isMultiSelect$0 || idx === PPSMA.ParameterTree._msG_IDX_NOT_FOUND$p) || more) {
                inputEl.style.display = 'none';
            }
            else {
                $addHandler(inputEl, 'click', this.$$d_check_e_search);
                $addHandler(inputEl, 'focus', this.$$d_set_focus);
            }
            parentElem = parentElem.nextSibling;
            if ((parentElem) && (Sys.UI.DomElement.containsCssClass(parentElem, PPSMA.ParameterTree._ppS_TREE_COLLAPSED$p))) {
                parentElem = parentElem.nextSibling;
            }
        }
        var elapsedTime = new Date().getTime() - startTime;
        PPSMA.PerformanceLogger.logGeneric(this._treeViewDataRecord$0.TreeId + ':onLoad_DynamicPostSearch', elapsedTime);
    },
    
    onload_DynamicPost: function PPSMA_ParameterTree$onload_DynamicPost(element, startIdx) {ULSpVC:;
        var offset = 16;
        var parentElem = (!startIdx) ? element.firstChild : element.childNodes[startIdx];
        while (parentElem) {
            var el = parentElem.firstChild;
            if (!this._pps_tree_item_detail_height$0) {
                this._pps_tree_item_detail_height$0 = parseInt(el.currentStyle.height);
            }
            var idx = parseInt(el.getAttribute('idx'));
            if (idx < 0) {
                break;
            }
            var more = (el.getAttribute('more') === 'true');
            var divEl = el.firstChild;
            var inputEl = divEl.nextSibling;
            var nodeTextEl = inputEl.nextSibling;
            if (!this.get_IsMultiSelect() && !more && Sys.UI.DomElement.containsCssClass(nodeTextEl, PPSMA.ParameterTree._ppS_TREE_NODE_TEXT_BOLD$p)) {
                this._singleSelectParents$0[idx.toString()] = this._tVDRMembers$0[idx].Id;
            }
            $addHandler(divEl, 'click', this.$$d_expand);
            $addHandler(divEl, 'focus', this.$$d_set_focus);
            if (!this._isMultiSelect$0 || more) {
                $addHandler(nodeTextEl, 'click', this.$$d_nodetextclick);
                $addHandler(nodeTextEl, 'focus', this.$$d_set_focus);
            }
            $addHandler(el, 'click', this.$$d_parentcheck);
            var offsetTotal = this._tVDRMembers$0[idx].Lv * offset;
            if (more && this._isMultiSelect$0) {
                offsetTotal += PPSMA.ParameterTree._ppstreE_MORE_INDENT$p;
            }
            if (!this._isRightToLeft$0) {
                el.style.paddingLeft = offsetTotal + 'px';
            }
            else {
                el.style.paddingRight = offsetTotal + 'px';
            }
            if (!this._isMultiSelect$0 || more) {
                inputEl.style.display = 'none';
            }
            else {
                $addHandler(inputEl, 'click', this.$$d_check_e);
                $addHandler(inputEl, 'focus', this.$$d_set_focus);
            }
            parentElem = parentElem.nextSibling;
            if ((parentElem) && (Sys.UI.DomElement.containsCssClass(parentElem, PPSMA.ParameterTree._ppS_TREE_COLLAPSED$p))) {
                parentElem = parentElem.nextSibling;
            }
        }
    },
    
    _getContextMenuOffset$p$0: function PPSMA_ParameterTree$_getContextMenuOffset$p$0(e) {ULSpVC:;
        if (e.target) {
            if (PPSMA.DomElementEx.tagsMatch(e.target.tagName, 'a') || PPSMA.DomElementEx.tagsMatch(e.target.tagName, 'input') || PPSMA.DomElementEx.tagsMatch(e.target.tagName, 'img')) {
                var point = PPSMA.EventsEx.getEventOffset(e.rawEvent);
                if (this._treeViewDataRecord$0.RTL) {
                    return [ 0, 0 ];
                }
                return [ e.target.offsetLeft + point.x, point.y ];
            }
        }
        var currElem = PPSMA.EventsEx.getCurrentElement(e.rawEvent);
        var currEvent = PPSMA.EventsEx.getEvent(e.rawEvent);
        if (Sys.UI.DomElement.containsCssClass(currElem, PPSMA.ParameterTree._pT_SEARCHHIGHLIGHT$p)) {
            return [ currElem.offsetLeft, currElem.parentNode.offsetHeight - currElem.offsetHeight ];
        }
        var x = 0;
        var y = 0;
        if (isNullOrUndefined(currEvent.offsetX)) {
            x = PPSMA.SizeEx.getXOffset(currEvent, currElem);
            y = PPSMA.SizeEx.getYOffset(currEvent, currElem);
        }
        else {
            x = currEvent.offsetX;
            y = currEvent.offsetY;
        }
        if (Sys.UI.DomElement.containsCssClass(currElem, PPSMA.ParameterTree._pT_L2_CN$p) || Sys.UI.DomElement.containsCssClass(currElem, PPSMA.ParameterTree._pT_L3_CN$p) || Sys.UI.DomElement.containsCssClass(currElem, PPSMA.ParameterTree._pT_L2S_CN$p) || Sys.UI.DomElement.containsCssClass(currElem, PPSMA.ParameterTree._pT_L3S_CN$p)) {
            return [ x, y ];
        }
        while (!Sys.UI.DomElement.containsCssClass(currElem, PPSMA.ParameterTree._ppS_TREE_ITEM_DETAIL$p)) {
            if (this._treeViewDataRecord$0.RTL) {
            }
            else {
                x += currElem.offsetLeft;
                y += currElem.offsetTop;
            }
            currElem = currElem.parentNode;
        }
        return [ x, y ];
    },
    
    handleContextMenu: function PPSMA_ParameterTree$handleContextMenu(e) {ULSpVC:;
        var parentDiv = PPSMA.ParameterTree._getContextMenuParentElement$p(e);
        if (parentDiv) {
            var x;
            var y;
            if (e.keyCode === 93 || (e.shiftKey && e.keyCode === 121)) {
                x = 0;
                y = 0;
            }
            else {
                var xy = this._getContextMenuOffset$p$0(e);
                x = xy[0];
                y = xy[1];
            }
            PPSMA.ContextMenu.neutralizeBrowserMenu(e);
            PPSMA.ContextMenu.createForParameterTree(parentDiv, this.$$d_showParameterTreeContextMenu, x, y);
        }
        return;
    },
    
    showParameterTreeContextMenu: function PPSMA_ParameterTree$showParameterTreeContextMenu(m, s) {ULSpVC:;
        var expandAllGraphic = this._resourceUrl$0 + 'ExpandAll.png';
        var collapseAllGraphic = this._resourceUrl$0 + 'CollapseAll.png';
        var selectAllGraphic = this._resourceUrl$0 + 'SelectAll.png';
        var clearAllGraphic = this._resourceUrl$0 + 'ClearAll.png';
        var selectChildrenGraphic = this._resourceUrl$0 + 'SelectChildren.png';
        var clearChildrenGraphic = this._resourceUrl$0 + 'ClearChildren.png';
        var resetDefaultSelectionsGraphic = this._resourceUrl$0 + 'ResetToDefaults.png';
        var rtdsDesc;
        try {
            this._contextMenuSrcElement$0 = s;
            if (!this.get_IsMultiSelect()) {
                rtdsDesc = PPSMA.SR.ParameterTreeContextMenu_ResetToDefaultSelection;
            }
            else {
                rtdsDesc = PPSMA.SR.ParameterTreeContextMenu_ResetToDefaultSelections;
            }
            if (this.get_isFlat()) {
                if (this.get_IsMultiSelect()) {
                    PPSMA.ContextMenu.addMenuOption(m, PPSMA.SR.ParameterTreeContextMenu_SelectAll, this._contextId$0 + '.handleSelectAll();', selectAllGraphic, PPSMA.SR.ParameterTreeContextMenu_SelectAll, false, false);
                    PPSMA.ContextMenu.addMenuOption(m, PPSMA.SR.ParameterTreeContextMenu_ClearAll, this._contextId$0 + '.handleClearAll();', clearAllGraphic, PPSMA.SR.ParameterTreeContextMenu_ClearAll, false, false);
                    PPSMA.ContextMenu.addMenuSeparator(m);
                }
                PPSMA.ContextMenu.addMenuOption(m, rtdsDesc, this._contextId$0 + '.handleResetToDefaultSelections();', resetDefaultSelectionsGraphic, PPSMA.SR.ParameterTreeContextMenu_ResetToDefaultSelections, false, false);
            }
            else {
                PPSMA.ContextMenu.addMenuOption(m, PPSMA.SR.ParameterTreeContextMenu_ExpandAll, this._contextId$0 + '.handleExpandAll();', expandAllGraphic, PPSMA.SR.ParameterTreeContextMenu_ExpandAll, false, false);
                PPSMA.ContextMenu.addMenuOption(m, PPSMA.SR.ParameterTreeContextMenu_CollapseAll, this._contextId$0 + '.handleCollapseAll();', collapseAllGraphic, PPSMA.SR.ParameterTreeContextMenu_CollapseAll, false, false);
                PPSMA.ContextMenu.addMenuSeparator(m);
                if (this.get_IsMultiSelect()) {
                    PPSMA.ContextMenu.addMenuOption(m, PPSMA.SR.ParameterTreeContextMenu_SelectAll, this._contextId$0 + '.handleSelectAll();', selectAllGraphic, PPSMA.SR.ParameterTreeContextMenu_SelectAll, false, false);
                    PPSMA.ContextMenu.addMenuOption(m, PPSMA.SR.ParameterTreeContextMenu_ClearAll, this._contextId$0 + '.handleClearAll();', clearAllGraphic, PPSMA.SR.ParameterTreeContextMenu_ClearAll, false, false);
                    PPSMA.ContextMenu.addMenuSeparator(m);
                    if (!(Sys.UI.DomElement.containsCssClass(this._contextMenuSrcElement$0, PPSMA.ParameterTree._pT_L2_CN$p) || Sys.UI.DomElement.containsCssClass(this._contextMenuSrcElement$0, PPSMA.ParameterTree._pT_L3_CN$p))) {
                        if (!Sys.UI.DomElement.containsCssClass(s.firstChild, this._pps_Tree_Plus_Hidden$0)) {
                            PPSMA.ContextMenu.addMenuOption(m, PPSMA.SR.ParameterTreeContextMenu_SelectChildren, this._contextId$0 + '.handleSelectChildren();', selectChildrenGraphic, PPSMA.SR.ParameterTreeContextMenu_SelectChildren, false, false);
                            PPSMA.ContextMenu.addMenuOption(m, PPSMA.SR.ParameterTreeContextMenu_ClearChildren, this._contextId$0 + '.handleClearChildren();', clearChildrenGraphic, PPSMA.SR.ParameterTreeContextMenu_ClearChildren, false, false);
                        }
                        else {
                            PPSMA.ContextMenu.addDisabledMenuOption(m, PPSMA.SR.ParameterTreeContextMenu_SelectChildren, this._contextId$0 + '.handleSelectChildren();', selectChildrenGraphic, false);
                            PPSMA.ContextMenu.addDisabledMenuOption(m, PPSMA.SR.ParameterTreeContextMenu_ClearChildren, this._contextId$0 + '.handleClearChildren();', clearChildrenGraphic, false);
                        }
                        PPSMA.ContextMenu.addMenuSeparator(m);
                    }
                }
                PPSMA.ContextMenu.addMenuOption(m, rtdsDesc, this._contextId$0 + '.handleResetToDefaultSelections();', resetDefaultSelectionsGraphic, PPSMA.SR.ParameterTreeContextMenu_ResetToDefaultSelections, false, false);
            }
        }
        catch ($$e_A) {
            return false;
        }
        return true;
    },
    
    showParameterTreeSearchResultContextMenu: function PPSMA_ParameterTree$showParameterTreeSearchResultContextMenu(m, s) {ULSpVC:;
        var selectAllGraphic = this._resourceUrl$0 + 'SelectAll.png';
        var clearAllGraphic = this._resourceUrl$0 + 'ClearAll.png';
        try {
            this._contextMenuSrcElement$0 = s;
            PPSMA.ContextMenu.addMenuOption(m, PPSMA.SR.ParameterTreeContextMenu_SelectAll, this._contextId$0 + '.handleSelectAllSearchResults();', selectAllGraphic, PPSMA.SR.ParameterTreeContextMenu_SelectAll, false, false);
            PPSMA.ContextMenu.addMenuOption(m, PPSMA.SR.ParameterTreeContextMenu_ClearAll, this._contextId$0 + '.handleClearAllSearchResults();', clearAllGraphic, PPSMA.SR.ParameterTreeContextMenu_ClearAll, false, false);
        }
        catch ($$e_4) {
            return false;
        }
        return true;
    },
    
    handleSelectAll: function PPSMA_ParameterTree$handleSelectAll() {ULSpVC:;
        var cbe = this._selectorElement$0;
        if (cbe.checked) {
            cbe.checked = false;
            cbe.click();
        }
        else {
            cbe.click();
        }
        this._contextMenuSrcElement$0 = null;
        return;
    },
    
    handleClearAll: function PPSMA_ParameterTree$handleClearAll() {ULSpVC:;
        var cbe = this._selectorElement$0;
        cbe.checked = false;
        this._selector_post$p$0();
        this._contextMenuSrcElement$0 = null;
        return;
    },
    
    handleSelectAllSearchResults: function PPSMA_ParameterTree$handleSelectAllSearchResults() {ULSpVC:;
        this._selectOrDeselectAllSearchResults$p$0(PPSMA.ParameterTree._sO_SELECTALL$p);
        return;
    },
    
    handleClearAllSearchResults: function PPSMA_ParameterTree$handleClearAllSearchResults() {ULSpVC:;
        this._selectOrDeselectAllSearchResults$p$0(PPSMA.ParameterTree._sO_CLEARALL$p);
        return;
    },
    
    _selectOrDeselectAllSearchResults$p$0: function PPSMA_ParameterTree$_selectOrDeselectAllSearchResults$p$0(selectionOperation) {ULSpVC:;
        var layer3Search = this._layer2search$0.firstChild;
        var divs = layer3Search.childNodes;
        for (var i = 0; i < divs.length; i++) {
            var listItem = divs[i];
            var toClickOrNotToClick = listItem.firstChild.firstChild.nextSibling;
            if (PPSMA.ParameterTree._sO_SELECTALL$p === selectionOperation) {
                if (!toClickOrNotToClick.checked) {
                    toClickOrNotToClick.click();
                }
            }
            if (PPSMA.ParameterTree._sO_CLEARALL$p === selectionOperation) {
                if (toClickOrNotToClick.checked) {
                    toClickOrNotToClick.click();
                }
            }
        }
        this._contextMenuSrcElement$0 = null;
    },
    
    handleExpandAll: function PPSMA_ParameterTree$handleExpandAll() {ULSpVC:;
        this._expandingAll$0 = true;
        this.expandAll();
        this._contextMenuSrcElement$0 = null;
        return;
    },
    
    handleCollapseAll: function PPSMA_ParameterTree$handleCollapseAll() {ULSpVC:;
        this._expandingAll$0 = false;
        this.expandAll();
        this._contextMenuSrcElement$0 = null;
        return;
    },
    
    _collapseUnder$p$0: function PPSMA_ParameterTree$_collapseUnder$p$0(root) {ULSpVC:;
        var element;
        for (var i = 0; i < root.childNodes.length; i++) {
            element = root.childNodes[i];
            this._collapseUnder$p$0(element);
            if (element.nodeType !== 3 && (Sys.UI.DomElement.containsCssClass(element, this._pps_Tree_Item_Checked$0) || Sys.UI.DomElement.containsCssClass(element, PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p)) && (element.firstChild && Sys.UI.DomElement.containsCssClass(element.firstChild, PPSMA.ParameterTree._ppS_TREE_ITEM_DETAIL$p)) && (element.firstChild.firstChild && Sys.UI.DomElement.containsCssClass(element.firstChild.firstChild, this._pps_Tree_Minus$0))) {
                this._tempElement$0 = element.firstChild.firstChild;
                this._expandBody$p$0();
            }
        }
    },
    
    _selectChildrenParent$0: null,
    
    handleSelectChildren: function PPSMA_ParameterTree$handleSelectChildren() {ULSpVC:;
        this._selectChildrenParent$0 = this._contextMenuSrcElement$0;
        window.setTimeout(this.$$d_expandChildren, 10);
        window.setTimeout(this.$$d_clickChildrenTrue, 100);
        this._contextMenuSrcElement$0 = null;
        return;
    },
    
    handleClearChildren: function PPSMA_ParameterTree$handleClearChildren() {ULSpVC:;
        this._selectChildrenParent$0 = this._contextMenuSrcElement$0;
        window.setTimeout(this.$$d_expandChildren, 10);
        window.setTimeout(this.$$d_clickChildrenFalse, 100);
        this._contextMenuSrcElement$0 = null;
        return;
    },
    
    expandChildren: function PPSMA_ParameterTree$expandChildren() {ULSpVC:;
        var parent = this._selectChildrenParent$0;
        var excoAnchor = parent.firstChild;
        if (Sys.UI.DomElement.containsCssClass(excoAnchor, this._pps_Tree_Plus$0)) {
            this._expanding$0 = true;
            excoAnchor.click();
        }
    },
    
    clickChildrenTrue: function PPSMA_ParameterTree$clickChildrenTrue() {ULSpVC:;
        if (this._expanding$0) {
            window.setTimeout(this.$$d_clickChildrenTrue, 100);
            return;
        }
        this.clickChildren(this._selectChildrenParent$0, true);
    },
    
    clickChildrenFalse: function PPSMA_ParameterTree$clickChildrenFalse() {ULSpVC:;
        if (this._expanding$0) {
            window.setTimeout(this.$$d_clickChildrenFalse, 100);
            return;
        }
        this.clickChildren(this._selectChildrenParent$0, false);
    },
    
    clickChildren: function PPSMA_ParameterTree$clickChildren(parent, check) {ULSpVC:;
        var ptiCheckedOrUncheckedDiv = parent.parentNode;
        if (ptiCheckedOrUncheckedDiv) {
            var childTreeDiv = ptiCheckedOrUncheckedDiv.nextSibling;
            if (childTreeDiv) {
                for (var i = 0; i < childTreeDiv.childNodes.length; i++) {
                    var treeOrItemDiv = childTreeDiv.childNodes[i];
                    if (Sys.UI.DomElement.containsCssClass(treeOrItemDiv, PPSMA.ParameterTree._ppS_TREE_ITEM_CHECKED$p) || Sys.UI.DomElement.containsCssClass(treeOrItemDiv, PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p)) {
                        var ptiDetailDiv = treeOrItemDiv.firstChild;
                        var excoAnchor = ptiDetailDiv.firstChild;
                        var cbe = excoAnchor.nextSibling;
                        if ((check && !cbe.checked) || (!check && cbe.checked)) {
                            cbe.click();
                        }
                    }
                }
            }
        }
    },
    
    handleResetToDefaultSelections: function PPSMA_ParameterTree$handleResetToDefaultSelections() {ULSpVC:;
        var chkEl = null;
        this._membersChanged$0 = true;
        this._applyButtonDisable$p$0(false);
        var originalSelectionExists = false;
        var $$dict_2 = this._currentSelectionsEdit$0;
        for (var $$key_3 in $$dict_2) {
            var de = { key: $$key_3, value: $$dict_2[$$key_3] };
            var key = parseInt(de.key);
            var parentidx = ((this._tVDRMembersXRef$0[this._tVDRMembers$0[key].Id])).parentidx;
            this.selectByIndex(key, false, this._currentSelectionsEdit$0, false);
        }
        this._currentSelectionsEdit$0 = {};
        if (this._originalSelections$0) {
            var $$dict_7 = this._originalSelections$0;
            for (var $$key_8 in $$dict_7) {
                var de = { key: $$key_8, value: $$dict_7[$$key_8] };
                var el = $get(this._treeViewDataRecord$0.TreeId + this.zeroFill(parseInt(de.key)));
                if (el) {
                    chkEl = el.firstChild.nextSibling;
                    this.check(chkEl);
                }
                else {
                    this.selectByIndex(parseInt(de.key), true, this._currentSelectionsEdit$0, false);
                    this._currentSelectionsEdit$0[de.key] = de.value;
                }
                if (!originalSelectionExists) {
                    originalSelectionExists = true;
                }
            }
        }
        if (!originalSelectionExists) {
            if (this._treeElement$0) {
                var cinputs = this._treeElement$0.getElementsByTagName('input');
                chkEl = cinputs[1];
                this.check(chkEl);
            }
        }
        if (!this._isMultiSelect$0 && !chkEl) {
            this._applyButtonDisable$p$0(false);
            this.apply();
        }
        this._contextMenuSrcElement$0 = null;
        return;
    },
    
    format_ChildNodeHtml: function PPSMA_ParameterTree$format_ChildNodeHtml(idx) {ULSpVC:;
        var sID = this.zeroFill(idx);
        var expand = String.format(this._treeViewDataRecord$0.ExpandFormat, this._tVDRMembers$0[idx].Tx);
        var collapse = String.format(this._treeViewDataRecord$0.CollapseFormat, this._tVDRMembers$0[idx].Tx);
        var haschildren = this.hasChildren(idx);
        var flat = this._treeViewDataRecord$0.Flat;
        var selected = !!this._currentSelectionsEdit$0[idx.toString()];
        var s = '<div class=' + ((selected) ? this._pps_Tree_Item_Checked$0 : PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p);
        s += '><div id=' + this._treeViewDataRecord$0.TreeId + sID;
        s += ' class=' + PPSMA.ParameterTree._ppS_TREE_ITEM_DETAIL$p + ' more=false idx=' + idx + '><a id=pps-tree-expandcollapse-' + sID;
        s += ' class=' + ((haschildren) ? this._pps_Tree_Plus$0 : this._pps_Tree_Plus_Hidden$0) + ((!haschildren && flat) ? ' display=\"none\" ' : '');
        s += ' href=\"javascript://\"><img class=expand title=\"' + expand + '\" alt=\"' + expand;
        s += '\" src=\"' + this._imageUrl$0 + 'mdncollapsed.png' + '\"><img class=collapse title=\"' + collapse;
        s += '\" alt=\"' + collapse + '\" src=\"' + this._imageUrl$0 + 'mdnexpanded.png' + '\"></a><input';
        s += ' id=pps-checkbox-input-' + sID + ' class=' + this._pps_Checkbox_Input$0 + ' title=\"' + this._tVDRMembers$0[idx].Tx + '\" ';
        s += ((selected) ? ' CHECKED ' : '');
        s += ' type=checkbox><a id=pps-tree-node-text-' + sID + ((!this._isMultiSelect$0) ? ' href=\"javascript://\" ' : '');
        s += ' class=' + PPSMA.ParameterTree._ppS_TREE_NODE_TEXT$p + ((this.hasChildrenSelected(idx, this._currentSelectionsEdit$0)) ? '-bold' : '') + ((!this._isMultiSelect$0 && flat) ? PPSMA.ParameterTree._nO_EX_SUFFIX$p : '') + ' title=\"';
        s += this._tVDRMembers$0[idx].Tx + '\">' + this._tVDRMembers$0[idx].Tx + '</a> </div></div>';
        if (haschildren) {
            s = s + '<div class=ms-bitree-collapsed idx=' + idx + '></div>';
        }
        return s;
    },
    
    format_ancestry: function PPSMA_ParameterTree$format_ancestry(idx, membersToRender) {ULSpVC:;
        var s = '';
        var upperIndex = membersToRender[idx].An.length - 1;
        for (var i = upperIndex; i >= 0; --i) {
            if (i < upperIndex) {
                s += '/';
            }
            s += this._searchAncestors$0[membersToRender[idx].An[i]];
        }
        return s;
    },
    
    format_MoreNodeHtmlSearch: function PPSMA_ParameterTree$format_MoreNodeHtmlSearch(idx, membersToRender) {ULSpVC:;
        var sID = this.zeroFill(idx);
        var flat = this._treeViewDataRecord$0.Flat;
        var selected = !!this._currentSelectionsSearch$0[membersToRender[idx].Id];
        var s = '<div class=\"' + ((selected) ? this._pps_Tree_Item_Checked$0 : PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p);
        s += ' ' + PPSMA.ParameterTree._ppS_TREE_0001$p + '\" ';
        s += ' ><div id=' + this._treeViewDataRecord$0.TreeId + sID;
        s += ' class=' + PPSMA.ParameterTree._ppS_TREE_ITEM_DETAIL$p + ' more=true memberid=' + membersToRender[idx].Id + '><a id=pps-tree-expandcollapse-' + sID;
        s += ' class=' + this._pps_Tree_Plus_Hidden$0 + ' display=\"none\" ';
        s += ' href=\"javascript://\"><img class=expand ';
        s += ' src=\"' + this._imageUrl$0 + 'mdncollapsed.png' + '\"><img class=collapse ';
        s += ' src=\"' + this._imageUrl$0 + 'mdnexpanded.png' + '\"></a><input';
        s += ' id=pps-checkbox-input-' + sID + ' class=' + this._pps_Checkbox_Input$0 + ' title=\"' + this._treeViewDataRecord$0.MoreTx + '\" ';
        s += ((selected) ? ' CHECKED ' : '');
        s += ' type=checkbox><a id=pps-tree-node-text-' + sID + ' href=\"javascript://\" ';
        s += ' class=ms-bitree-node-text-more' + ((!this._isMultiSelect$0 && flat) ? PPSMA.ParameterTree._nO_EX_SUFFIX$p : '') + ' title=\"';
        s += this._treeViewDataRecord$0.MoreTx + '\">' + this._treeViewDataRecord$0.MoreTx + '</a> </div></div>';
        return s;
    },
    
    format_ChildNodeHtmlSearch: function PPSMA_ParameterTree$format_ChildNodeHtmlSearch(idx, membersToRender) {ULSpVC:;
        var sID = 'search' + this.zeroFill(idx);
        var title = this.format_ancestry(idx, membersToRender);
        var selected = !!this._currentSelectionsSearch$0[membersToRender[idx].Id];
        var s = '<div class=' + ((selected) ? this._pps_Tree_Item_Checked$0 : PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p);
        s += '><div id=' + this._treeViewDataRecord$0.TreeId + sID;
        s += ' class=' + PPSMA.ParameterTree._ppS_TREE_ITEM_DETAIL$p + ' more=false memberid=' + membersToRender[idx].Id + '><a id=pps-tree-expandcollapse-' + sID;
        s += ' class=' + this._pps_Tree_Plus_Hidden$0 + ' display=\"none\" ';
        s += ' href=\"javascript://\"><img class=expand ';
        s += ' src=\"' + this._imageUrl$0 + 'mdncollapsed.png' + '\"><img class=collapse ';
        s += ' src=\"' + this._imageUrl$0 + 'mdnexpanded.png' + '\"></a><input';
        s += ' id=pps-checkbox-input-' + sID + ' class=' + this._pps_Checkbox_Input$0 + ' title=\"' + title + '\" ';
        s += ((selected) ? ' CHECKED ' : '');
        s += ' type=checkbox><a id=pps-tree-node-text-' + sID + ((!this._isMultiSelect$0) ? ' href=\"javascript://\" ' : '');
        s += ' class=' + PPSMA.ParameterTree._ppS_TREE_NODE_TEXT$p + ((!this._isMultiSelect$0) ? PPSMA.ParameterTree._nO_EX_SUFFIX$p : '') + ' title=\"';
        s += title + '\">' + membersToRender[idx].Tx + '</a> </div></div>';
        return s;
    },
    
    format_MoreNodeHtml: function PPSMA_ParameterTree$format_MoreNodeHtml(idx) {ULSpVC:;
        var sID = this.zeroFill(idx);
        var expand = String.format(this._treeViewDataRecord$0.ExpandFormat, this._tVDRMembers$0[idx].Tx);
        var collapse = String.format(this._treeViewDataRecord$0.CollapseFormat, this._tVDRMembers$0[idx].Tx);
        var haschildren = this.hasChildren(idx);
        var flat = this._treeViewDataRecord$0.Flat;
        var selected = this._tVDRMembers$0[idx].Sl && !!this._currentSelections$0[idx.toString()];
        var s = '<div class=\"' + ((selected) ? this._pps_Tree_Item_Checked$0 : PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p);
        s += ' ' + PPSMA.ParameterTree._ppS_TREE_0001$p + '\" ';
        s += ' ><div id=' + this._treeViewDataRecord$0.TreeId + sID;
        s += ' class=' + PPSMA.ParameterTree._ppS_TREE_ITEM_DETAIL$p + ' more=true idx=' + idx + '><a id=pps-tree-expandcollapse-' + sID;
        s += ' class=' + ((haschildren) ? this._pps_Tree_Plus$0 : this._pps_Tree_Plus_Hidden$0) + ((!haschildren && flat) ? ' display=\"none\" ' : '');
        s += ' href=\"javascript://\"><img class=expand title=\"' + expand + '\" alt=\"' + expand;
        s += '\" src=\"' + this._imageUrl$0 + 'mdncollapsed.png' + '\"><img class=collapse title=\"' + collapse;
        s += '\" alt=\"' + collapse + '\" src=\"' + this._imageUrl$0 + 'mdnexpanded.png' + '\"></a><input';
        s += ' id=pps-checkbox-input-' + sID + ' class=' + this._pps_Checkbox_Input$0 + ' title=\"' + this._treeViewDataRecord$0.MoreTx + '\" ';
        s += ((selected) ? ' CHECKED ' : '');
        s += ' type=checkbox><a id=pps-tree-node-text-' + sID + ' href=\"javascript://\" ';
        s += ' class=ms-bitree-node-text-more' + ((!this._isMultiSelect$0 && flat) ? PPSMA.ParameterTree._nO_EX_SUFFIX$p : '') + ' title=\"';
        s += this._treeViewDataRecord$0.MoreTx + '\">' + this._treeViewDataRecord$0.MoreTx + '</a> </div></div>';
        return s;
    },
    
    format_SearchNotFound: function PPSMA_ParameterTree$format_SearchNotFound() {ULSpVC:;
        var sID = 'notfound';
        var expand = '';
        var collapse = '';
        var haschildren = false;
        var flat = false;
        var selected = false;
        var s = '<div class=\"' + ((selected) ? this._pps_Tree_Item_Checked$0 : PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p);
        s += ' ' + PPSMA.ParameterTree._ppS_TREE_0001$p + '\" ';
        s += ' ><div id=' + this._treeViewDataRecord$0.TreeId + sID;
        s += ' class=\"' + PPSMA.ParameterTree._ppS_TREE_ITEM_DETAIL$p + ' ' + PPSMA.ParameterTree._ppS_TREE_0002$p + '\" more=false idx=-2' + '><a id=pps-tree-expandcollapse-' + sID;
        s += ' class=' + this._pps_Tree_Plus_Hidden$0 + ((!haschildren && flat) ? ' display=\"none\" ' : '');
        s += ' ><img class=expand title=\"' + expand + '\" alt=\"' + expand;
        s += '\" src=\"' + this._imageUrl$0 + 'mdncollapsed.png' + '\"><img class=collapse title=\"' + collapse;
        s += '\" alt=\"' + collapse + '\" src=\"' + this._imageUrl$0 + 'mdnexpanded.png' + '\"></a><input';
        s += ' id=pps-checkbox-input-' + sID + ' class=pps-checkbox-input title=\"' + PPSMA.SR.ParameterTreeText_SearchNotFound + '\" ';
        s += ((selected) ? ' CHECKED ' : '');
        s += ' type=checkbox><a id=pps-tree-node-text-' + sID;
        s += ' class=' + PPSMA.ParameterTree._ppS_TREE_NODE_TEXT_NOTFOUND$p + ((!this._isMultiSelect$0 && flat) ? PPSMA.ParameterTree._nO_EX_SUFFIX$p : '') + ' title=\"';
        s += PPSMA.SR.ParameterTreeText_SearchNotFound + '\">' + PPSMA.SR.ParameterTreeText_SearchNotFound + '</a> </div></DIV>';
        return s;
    },
    
    hasChildren: function PPSMA_ParameterTree$hasChildren(idx) {ULSpVC:;
        if ((idx >= this._tVDRMembers$0.length - 1) || (this._tVDRMembers$0[idx + 1].Lv <= this._tVDRMembers$0[idx].Lv)) {
            return false;
        }
        return true;
    },
    
    hasChildrenSelected: function PPSMA_ParameterTree$hasChildrenSelected(idx, selectionsDict) {ULSpVC:;
        var ret = false;
        for (var i = idx + 1; i < this._tVDRMembers$0.length; ++i) {
            if (this._tVDRMembers$0[i].Lv <= this._tVDRMembers$0[idx].Lv) {
                break;
            }
            if (selectionsDict[i.toString()]) {
                ret = true;
                break;
            }
        }
        return ret;
    },
    
    removeThrobber: function PPSMA_ParameterTree$removeThrobber() {ULSpVC:;
        var tid = PPSMA.ParameterTree._pT_THROBBER_DIV_ID$p + this._outerElement$0.id;
        var td = $get(tid);
        if (td) {
            td.parentNode.removeChild(td);
        }
    },
    
    onLoad_DynamicSearch: function PPSMA_ParameterTree$onLoad_DynamicSearch(resultNodes, ancestors) {ULSpVC:;
        if (this._stoppingProcess$0 || this._cancelling$0) {
            return;
        }
        var more = (resultNodes === this._searchResultNodes$0) ? true : false;
        var startTime = new Date().getTime();
        if (!this._currentSelectionsSearch$0) {
            this._currentSelectionsSearch$0 = {};
        }
        this.removeThrobber();
        this._show$p$0(this._layer2search$0.firstChild);
        var dStart = new Date().getTime();
        $addHandler(this._layer2search$0, 'contextmenu', this.$$d__searchResultContextMenuHandler$p$0);
        var L3 = this._layer2search$0.firstChild;
        var lastChildIdx = L3.childNodes.length;
        if (!more) {
            if (!lastChildIdx) {
                this._searchAncestors$0 = ancestors;
                this._searchResultNodes$0 = resultNodes;
            }
            else {
                for (var i = 0; i < resultNodes.length; ++i) {
                    this._searchResultNodes$0[this._searchResultNodes$0.length] = resultNodes[i];
                    for (var j = 0; j < resultNodes[i].An.length; ++j) {
                        resultNodes[i].An[j] += this._searchAncestors$0.length;
                    }
                }
                for (var i = 0; i < ancestors.length; ++i) {
                    this._searchAncestors$0[this._searchAncestors$0.length] = ancestors[i];
                }
            }
        }
        var s = '';
        if (!this._searchResultNodes$0.length && !lastChildIdx) {
            s = this.format_SearchNotFound();
            this._applyButtonDisable$p$0(true);
        }
        else {
            if (!(L3.lastChild && L3.lastChild.firstChild && L3.lastChild.firstChild.getAttribute('more') === 'true')) {
                for (var i = this._nextRootNodeToRenderSearch$0, j = 0; i < resultNodes.length; ++i) {
                    if (j >= this._pps_MaxNodes_Page$0) {
                        s += this.format_MoreNodeHtmlSearch(i, resultNodes);
                        this._nextRootNodeToRenderSearch$0 = i;
                        break;
                    }
                    s += this.format_ChildNodeHtmlSearch(i, resultNodes);
                    j++;
                }
            }
        }
        this._tempObjects$0 = {};
        this._tempObjects$0['lastChildIdx'] = lastChildIdx;
        this._tempObjects$0['L3'] = L3;
        this._tempObjects$0['resultNodes'] = resultNodes;
        this._tempObjects$0['s'] = s;
        var elapsedTime = new Date().getTime() - startTime;
        PPSMA.PerformanceLogger.logGeneric(this._treeViewDataRecord$0.TreeId + ':onLoad_DynamicSearch', elapsedTime);
        window.setTimeout(this.$$d__onLoad_DynamicSearch2$p$0, 10);
    },
    
    _searchResultContextMenuHandler$p$0: function PPSMA_ParameterTree$_searchResultContextMenuHandler$p$0(e) {ULSpVC:;
        if (this.get_IsMultiSelect()) {
            var parentDiv = PPSMA.ParameterTree._getContextMenuParentElement$p(e);
            if (parentDiv) {
                var x;
                var y;
                if (e.keyCode === 93 || (e.shiftKey && e.keyCode === 121)) {
                    x = 0;
                    y = 0;
                }
                else {
                    var xy = this._getContextMenuOffset$p$0(e);
                    x = xy[0];
                    y = xy[1];
                }
                PPSMA.ContextMenu.neutralizeBrowserMenu(e);
                PPSMA.ContextMenu.createForParameterTree(parentDiv, this.$$d_showParameterTreeSearchResultContextMenu, x, y);
            }
        }
        return;
    },
    
    _onLoad_DynamicSearch2$p$0: function PPSMA_ParameterTree$_onLoad_DynamicSearch2$p$0() {ULSpVC:;
        var startTime = new Date().getTime();
        var lastChildIdx = this._tempObjects$0['lastChildIdx'];
        var L3 = this._tempObjects$0['L3'];
        var resultNodes = this._tempObjects$0['resultNodes'];
        var s = this._tempObjects$0['s'];
        if (lastChildIdx > 0) {
            var tempElement = document.createElement('div');
            tempElement.innerHTML = s;
            var k = tempElement.childNodes.length;
            for (var i = 0; i < k; ++i) {
                L3.appendChild(tempElement.childNodes[0]);
            }
        }
        else {
            L3.innerHTML = s;
        }
        var elapsedTime = new Date().getTime() - startTime;
        PPSMA.PerformanceLogger.logGeneric(this._treeViewDataRecord$0.TreeId + ':onLoad_DynamicSearch2', elapsedTime);
        window.setTimeout(this.$$d__onLoad_DynamicSearch3$p$0, 10);
    },
    
    _onLoad_DynamicSearch3$p$0: function PPSMA_ParameterTree$_onLoad_DynamicSearch3$p$0() {ULSpVC:;
        var startTime = new Date().getTime();
        var lastChildIdx = this._tempObjects$0['lastChildIdx'];
        var L3 = this._tempObjects$0['L3'];
        var resultNodes = this._tempObjects$0['resultNodes'];
        this.onload_DynamicPostSearch(L3, lastChildIdx);
        if (resultNodes.length >= this._treeViewDataRecord$0.MaxNumSearchResults && !lastChildIdx && this.searchIsOpen()) {
            this._applyElement$0.parentNode.style.height = (parseInt(this._applyElement$0.parentNode.currentStyle.height) + PPSMA.ParameterTree._ppstreE_INFO_FOOTER_HEIGHT_ADJ$p).toString() + 'px';
            this._exceededSearchElement$0.style.display = 'block';
            this._exceededSearchElement$0.nextSibling.style.display = 'inline-block';
        }
        this.heightwidth_reset();
        this._searchInputElement$0.style.cursor = 'text';
        this._searchImageAnchor$0.style.cursor = 'default';
        this._searchImageElement$0.style.cursor = 'default';
        var elapsedTime = new Date().getTime() - startTime;
        PPSMA.PerformanceLogger.logGeneric(this._treeViewDataRecord$0.TreeId + ':onLoad_DynamicSearch3', elapsedTime);
    },
    
    onLoad_DynamicRoot: function PPSMA_ParameterTree$onLoad_DynamicRoot() {ULSpVC:;
        var dStart = new Date().getTime();
        var L3 = this._layer2$0.firstChild;
        var childCount = L3.childNodes.length;
        if ((childCount > 0) && (L3.childNodes[childCount - 1].firstChild) && (L3.childNodes[childCount - 1].firstChild.getAttribute('more') === 'true')) {
            return;
        }
        var s = '';
        for (var i = this._nextRootNodeToRender$0, j = 0; i < this._treeViewDataRecord$0.FirstLevelMembers.length; ++i) {
            if (!this._treeGetAllComplete$0 && this._treeViewDataRecord$0.FirstLevelMembers[i] >= this._treeViewDataRecord$0.MaxNumRenderRecords) {
                break;
            }
            if (j >= this._pps_MaxNodes_Page$0) {
                s += this.format_MoreNodeHtml(this._treeViewDataRecord$0.FirstLevelMembers[i]);
                this._nextRootNodeToRender$0 = i;
                break;
            }
            s += this.format_ChildNodeHtml(this._treeViewDataRecord$0.FirstLevelMembers[i]);
            j++;
        }
        if (childCount > 0) {
            var tempElement = document.createElement('div');
            tempElement.innerHTML = s;
            var k = tempElement.childNodes.length;
            for (var i = 0; i < k; ++i) {
                L3.appendChild(tempElement.childNodes[0]);
            }
        }
        else {
            L3.innerHTML = s;
        }
        this.onload_DynamicPost(L3, childCount);
        if ((this._treeViewDataRecord$0.FirstLevelMembers.length === 1) && (this._tempElement$0 = L3.firstChild) && (this._tempElement$0 = this._tempElement$0.firstChild) && (this._tempElement$0 = this._tempElement$0.firstChild)) {
            if (this._tempElement$0.className === this._pps_Tree_Plus$0) {
                this._tempTargetElement$0 = this._tempElement$0;
                this._tempTargetElement$0.style.cursor = 'wait';
                window.setTimeout(this.$$d__expandBody$p$0, 10);
            }
        }
    },
    
    onLoad_Dynamic: function PPSMA_ParameterTree$onLoad_Dynamic(element, startIdx) {ULSpVC:;
        var idx = parseInt(element.getAttribute('idx'));
        var elemParent = element.parentNode.nextSibling;
        var lastChildIdx = elemParent.childNodes.length;
        var s = '';
        for (var i = (startIdx > 0) ? startIdx : idx + 1, j = 0; i < this._tVDRMembers$0.length; ++i) {
            if (this._tVDRMembers$0[i].Lv <= this._tVDRMembers$0[idx].Lv) {
                break;
            }
            else if (this._tVDRMembers$0[i].Lv > this._tVDRMembers$0[idx].Lv + 1) {
                continue;
            }
            else if (j >= this._pps_MaxNodes_Page$0) {
                s += this.format_MoreNodeHtml(i);
                break;
            }
            s += this.format_ChildNodeHtml(i);
            j++;
        }
        if (startIdx > 0) {
            var tempElement = document.createElement('div');
            tempElement.innerHTML = s;
            var k = tempElement.childNodes.length;
            for (var i = 0; i < k; ++i) {
                elemParent.appendChild(tempElement.childNodes[0]);
            }
        }
        else {
            elemParent.innerHTML = s;
        }
        this.onload_DynamicPost(elemParent, lastChildIdx);
    },
    
    dispose: function PPSMA_ParameterTree$dispose() {ULSpVC:;
        if (this._treeMouseDownHandler$0) {
            $removeHandler(this._treeElement$0, 'mousedown', this._treeMouseDownHandler$0);
            this._treeMouseDownHandler$0 = null;
        }
        if (this._bodyClickHandler$0) {
            $removeHandler(document.body, 'click', this._bodyClickHandler$0);
            this._bodyClickHandler$0 = null;
        }
        if (this._bodyKeyDownHandler$0) {
            $removeHandler(document.body, 'keydown', this._bodyKeyDownHandler$0);
            this._bodyKeyDownHandler$0 = null;
        }
        if (this._treeKeyDownHandler$0) {
            $removeHandler(this._treeElement$0, 'keydown', this._treeKeyDownHandler$0);
            this._treeKeyDownHandler$0 = null;
        }
        if (this._treeKeyUpHandler$0) {
            $removeHandler(this._treeElement$0, 'keyup', this._treeKeyUpHandler$0);
            this._treeKeyUpHandler$0 = null;
        }
    },
    
    _body_click$p$0: function PPSMA_ParameterTree$_body_click$p$0(e) {ULSpVC:;
        if (this._treeElement$0.style.visibility !== 'visible') {
            return;
        }
        else {
            e.stopPropagation();
            if (this.searchIsOpen()) {
                this.cancel(this._treeElement$0);
            }
            this.cancel(this._treeElement$0);
        }
    },
    
    _tree_MouseDown$p$0: function PPSMA_ParameterTree$_tree_MouseDown$p$0(e) {ULSpVC:;
        if (this.get_IsMultiSelect() || e.button) {
            return;
        }
        var element = null;
        if (Sys.UI.DomElement.containsCssClass(e.target, PPSMA.ParameterTree._ppS_TREE_ITEM_DETAIL$p)) {
            element = e.target.parentNode;
        }
        else if (Sys.UI.DomElement.containsCssClass(e.target, (PPSMA.ParameterTree._ppS_TREE_NODE_TEXT$p + PPSMA.ParameterTree._nO_EX_SUFFIX$p)) || Sys.UI.DomElement.containsCssClass(e.target, PPSMA.ParameterTree._ppS_TREE_NODE_TEXT$p) || Sys.UI.DomElement.containsCssClass(e.target, (PPSMA.ParameterTree._ppS_TREE_NODE_TEXT_BOLD$p + PPSMA.ParameterTree._nO_EX_SUFFIX$p)) || Sys.UI.DomElement.containsCssClass(e.target, PPSMA.ParameterTree._ppS_TREE_NODE_TEXT_BOLD$p)) {
            element = e.target.parentNode.parentNode;
        }
        if (!element) {
            return;
        }
        if (!this._singleSelBackgroundColor$0) {
            var d = document.createElement('div');
            d.innerHTML = '<div display=\"none\" class=\"' + PPSMA.ParameterTree._ppS_TREE_ITEM_CHECKED_SINGLESEL$p + '\"></div>';
            this._labelElement$0.appendChild(d.childNodes[0]);
            this._singleSelBackgroundColor$0 = this._labelElement$0.lastChild.currentStyle.backgroundColor;
            this._labelElement$0.removeChild(this._labelElement$0.lastChild);
        }
        if (!this._singleUnSelBackgroundColor$0) {
            var d = document.createElement('div');
            d.innerHTML = '<div display=\"none\" class=\"' + PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p + '\"></div>';
            this._labelElement$0.appendChild(d.childNodes[0]);
            this._singleUnSelBackgroundColor$0 = this._labelElement$0.lastChild.currentStyle.backgroundColor;
            this._labelElement$0.removeChild(this._labelElement$0.lastChild);
        }
        if (this.searchIsOpen()) {
            if (this._singleSelSearchSelection$0) {
                this._singleSelSearchSelection$0.style.backgroundColor = '';
            }
        }
        else {
            var $$dict_4 = this._currentSelectionsEdit$0;
            for (var $$key_5 in $$dict_4) {
                var de = { key: $$key_5, value: $$dict_4[$$key_5] };
                var el = $get(this._treeViewDataRecord$0.TreeId + this.zeroFill(parseInt(de.key)));
                if (el) {
                    el.parentNode.style.backgroundColor = this._singleUnSelBackgroundColor$0;
                }
                break;
            }
            this._applyElementDisabledState$0 = this._applyElement$0.disabled;
            this._selectorElementStateForSearch$0 = this._selectorElement$0.checked;
            this._applyButtonDisable$p$0(true);
        }
        element.style.backgroundColor = this._singleSelBackgroundColor$0;
    },
    
    _searchImageClick$p$0: function PPSMA_ParameterTree$_searchImageClick$p$0(e) {ULSpVC:;
        if (this._searchInputElement$0.value === '' || this._searchInputElement$0.value === this._searchTxDecoded$0) {
            this._searchInputElement$0.value = '';
            this._searchInputElement$0.focus();
            return;
        }
        if (this._searchImageElement$0.src.indexOf('searchxblue.png') === -1) {
            this._searchnow$p$0(null);
        }
        else {
            this.cancel(this._treeElement$0);
        }
        e.stopPropagation();
    },
    
    _searchnow$p$0: function PPSMA_ParameterTree$_searchnow$p$0(e) {ULSpVC:;
        var searchToken = this._searchInputElement$0.value.trim();
        if (searchToken === '' || searchToken === this._searchTxDecoded$0) {
            return;
        }
        this._nextRootNodeToRenderSearch$0 = 0;
        var mustResetHeight = false;
        if (this._exceededElement$0.style.display === 'block') {
            mustResetHeight = true;
            this._exceededElement$0.style.display = 'none';
            this._exceededElement$0.nextSibling.style.display = 'none';
            this._applyElement$0.parentNode.style.height = (parseInt(this._applyElement$0.parentNode.currentStyle.height) - PPSMA.ParameterTree._ppstreE_INFO_FOOTER_HEIGHT_ADJ$p).toString() + 'px';
        }
        if (this._exceededSearchElement$0.style.display === 'block') {
            mustResetHeight = true;
            this._applyElement$0.parentNode.style.height = (parseInt(this._applyElement$0.parentNode.currentStyle.height) - PPSMA.ParameterTree._ppstreE_INFO_FOOTER_HEIGHT_ADJ$p).toString() + 'px';
            this._exceededSearchElement$0.style.display = 'none';
            this._exceededSearchElement$0.nextSibling.style.display = 'none';
        }
        if (mustResetHeight) {
            this.height_reset();
        }
        if (!this._currentSelectionsSearch$0) {
            this._currentSelectionsSearch$0 = {};
            var $$dict_3 = this._currentSelectionsEdit$0;
            for (var $$key_4 in $$dict_3) {
                var de = { key: $$key_4, value: $$dict_3[$$key_4] };
                var id = de.value;
                this._currentSelectionsSearch$0[id] = this._tVDRMembers$0[parseInt(de.key)].Tx;
            }
            this._applyElementDisabledState$0 = this._applyElement$0.disabled;
            this._selectorElementStateForSearch$0 = this._selectorElement$0.checked;
            this._applyButtonDisable$p$0(true);
        }
        this._stoppingProcess$0 = false;
        autoCompleteSaveForm(this._searchInputElement$0.form);
        this._searchInputElement$0.style.cursor = 'wait';
        this._searchImageAnchor$0.style.cursor = 'wait';
        this._searchImageElement$0.style.cursor = 'wait';
        this._searchImageElement$0.src = this._resourceUrl$0 + 'searchxblue.png';
        this._searchImageElement$0.title = PPSMA.SR.ParameterTreeText_CancelToolTip;
        this._applyElement$0.parentNode.className = this._pps_Tree_Footer$0 + ' ' + this._pps_Tree_Footer_Search$0;
        var L3 = this._layer2search$0.firstChild;
        L3.innerHTML = '';
        if (this._layer2$0.style.visibility === 'visible' || this._layer2$0.style.visibility === '') {
            this._layer2search$0.style.height = this._layer2$0.offsetHeight + 'px';
            this._layer2$0.style.visibility = 'hidden';
            this._layer2$0.style.display = 'none';
            this._layer2search$0.style.visibility = 'visible';
            this._layer2search$0.style.display = 'block';
            L3.style.visibility = 'visible';
            L3.style.display = 'block';
        }
        if (!this._searchController$0) {
            this._searchController$0 = new PPSMA.ParameterSearchController(this._treeViewDataRecord$0.ParameterLocation, this._treeViewDataRecord$0.WebPartId, this._resourceUrl$0);
            this._searchController$0.setSearchCancelledCallback(this.$$d_searchCancelledHandler);
            this._searchController$0.setSearchResultCallback(this.$$d_onLoad_DynamicSearch);
        }
        window.setTimeout(this.$$d__onLoad_DynamicSearch_e$p$0, 100);
    },
    
    _onLoad_DynamicSearch_e$p$0: function PPSMA_ParameterTree$_onLoad_DynamicSearch_e$p$0() {ULSpVC:;
        this._layer2search$0.style.width = '100%';
        var throbberDiv = this._uniqueThrobberOuterDivFactory$p$0(this._layer2search$0.offsetWidth, this._layer2search$0.offsetHeight);
        this._hide$p$0(this._layer2search$0.firstChild);
        this._layer2search$0.appendChild(throbberDiv);
        this._searchController$0.searchParameterDisplayData(this._searchInputElement$0.value.trim(), throbberDiv, false);
    },
    
    _uniqueThrobberOuterDivFactory$p$0: function PPSMA_ParameterTree$_uniqueThrobberOuterDivFactory$p$0(ow, oh) {ULSpVC:;
        var tid = PPSMA.ParameterTree._pT_THROBBER_DIV_ID$p + this._outerElement$0.id;
        var throbberDiv = $get(tid);
        if (!isNullUndefinedOrEmpty(throbberDiv)) {
            throbberDiv.parentNode.removeChild(throbberDiv);
        }
        throbberDiv = document.createElement('div');
        throbberDiv.id = tid;
        throbberDiv.style.height = (oh - PPSMA.ParameterTree._throbbeR_PADDING$p) + 'px';
        throbberDiv.style.width = (ow - PPSMA.ParameterTree._throbbeR_PADDING$p) + 'px';
        return throbberDiv;
    },
    
    treeGetAll: function PPSMA_ParameterTree$treeGetAll(e) {ULSpVC:;
        this._stoppingProcess$0 = false;
        if (this._exceededElement$0.style.display === 'block') {
            this._exceededElement$0.style.display = 'none';
            this._exceededElement$0.nextSibling.style.display = 'none';
            this._applyElement$0.parentNode.style.height = (parseInt(this._applyElement$0.parentNode.currentStyle.height) - PPSMA.ParameterTree._ppstreE_INFO_FOOTER_HEIGHT_ADJ$p).toString() + 'px';
            this.height_reset();
        }
        if (!this._pcm$0) {
            this._pcm$0 = new PPSMA.ParameterControlManager(this._treeViewDataRecord$0.ParameterLocation, this._treeViewDataRecord$0.WebPartId, this._resourceUrl$0);
            this._pcm$0.setGetRemainingCancelledCallback(this.$$d_getRemainingCancelledHandler);
            this._pcm$0.setGetRemainingResultCallback(this.$$d_onLoad_GetRemaining);
        }
        var throbberDiv = this._uniqueThrobberOuterDivFactory$p$0(this._layer2$0.offsetWidth, this._layer2$0.offsetHeight);
        this._hide$p$0(this._layer2$0.firstChild);
        this._layer2$0.appendChild(throbberDiv);
        this._getAllThrobbing$0 = true;
        this._pcm$0.getRemainingParameterDisplayData(throbberDiv);
    },
    
    _buildXRef$p$0: function PPSMA_ParameterTree$_buildXRef$p$0() {ULSpVC:;
        this._tVDRMembersXRef$0 = {};
        var parents = {};
        var x = -1;
        var previousLevel = -1;
        parents[x.toString()] = -1;
        for (x = 0; x < this._tVDRMembers$0.length; ++x) {
            if (this._tVDRMembers$0[x].Lv !== previousLevel) {
                previousLevel = this._tVDRMembers$0[x].Lv;
                parents[previousLevel.toString()] = x;
            }
            this._tVDRMembersXRef$0[this._tVDRMembers$0[x].Id] = new PPSMA._xRef(x, parents[(this._tVDRMembers$0[x].Lv - 1).toString()]);
        }
    },
    
    _onLoad_GetRemaining_e$p$0: function PPSMA_ParameterTree$_onLoad_GetRemaining_e$p$0() {ULSpVC:;
        this._pcm$0.getRemainingParameterDisplayData(this._outerElement$0);
    },
    
    onLoad_GetRemaining: function PPSMA_ParameterTree$onLoad_GetRemaining(resultNodes) {ULSpVC:;
        var startTime = new Date().getTime();
        if (this._stoppingProcess$0 || this._cancelling$0) {
            return;
        }
        this._treeGetAllComplete$0 = true;
        var firstLevel0 = true;
        for (var i = 0; i < resultNodes.length; ++i) {
            this._tVDRMembers$0[i + this._treeViewDataRecord$0.MaxNumRenderRecords] = resultNodes[i];
            if (!this._tVDRMembers$0[i + this._treeViewDataRecord$0.MaxNumRenderRecords].Lv) {
                this._treeViewDataRecord$0.FirstLevelMembers[this._treeViewDataRecord$0.FirstLevelMembers.length] = i + this._treeViewDataRecord$0.MaxNumRenderRecords;
                if (firstLevel0) {
                    firstLevel0 = false;
                    this._nextRootNodeToRender$0 = this._treeViewDataRecord$0.FirstLevelMembers.length - 1;
                }
            }
        }
        this._buildXRef$p$0();
        var $$dict_4 = this._currentSelectionsEdit$0;
        for (var $$key_5 in $$dict_4) {
            var de = { key: $$key_5, value: $$dict_4[$$key_5] };
            if (parseInt(de.key) >= this._treeViewDataRecord$0.MaxNumRenderRecords) {
                var memberId = de.value;
                delete this._currentSelectionsEdit$0[de.key];
                var xr = this._tVDRMembersXRef$0[memberId];
                if (xr) {
                    this._currentSelectionsEdit$0[xr.idx.toString()] = memberId;
                }
            }
        }
        var $$dict_9 = this._currentSelections$0;
        for (var $$key_A in $$dict_9) {
            var de = { key: $$key_A, value: $$dict_9[$$key_A] };
            if (parseInt(de.key) >= this._treeViewDataRecord$0.MaxNumRenderRecords) {
                var memberId = de.value;
                delete this._currentSelections$0[de.key];
                var xr = this._tVDRMembersXRef$0[memberId];
                if (xr) {
                    this._currentSelections$0[xr.idx.toString()] = memberId;
                }
            }
        }
        var nextidx = (this._tVDRMembersXRef$0[this._tVDRMembers$0[this._treeViewDataRecord$0.MaxNumRenderRecords].Id]).parentidx;
        var tmpElement;
        while (nextidx >= 0) {
            if ((tmpElement = $get(this._treeViewDataRecord$0.TreeId + this.zeroFill(nextidx)))) {
                this.setParentageDisplay(tmpElement.parentNode.nextSibling, this.hasChildrenSelected(nextidx, this._currentSelectionsEdit$0));
            }
            nextidx = (this._tVDRMembersXRef$0[this._tVDRMembers$0[nextidx].Id]).parentidx;
        }
        var currentLevel = this._tVDRMembers$0[this._treeViewDataRecord$0.MaxNumRenderRecords].Lv + 1;
        for (var i = this._treeViewDataRecord$0.MaxNumRenderRecords; i < this._tVDRMembers$0.length; ++i) {
            if (this._tVDRMembers$0[i].Lv >= currentLevel) {
                continue;
            }
            currentLevel = this._tVDRMembers$0[i].Lv;
            if (currentLevel > 0) {
                var parentidx = ((this._tVDRMembersXRef$0[this._tVDRMembers$0[i].Id])).parentidx;
                if ((parentidx >= 0) && (parentidx < this._treeViewDataRecord$0.MaxNumRenderRecords)) {
                    var elParent = $get(this._treeViewDataRecord$0.TreeId + this.zeroFill(parentidx));
                    if (elParent) {
                        if (elParent.parentNode.nextSibling && elParent.parentNode.nextSibling.hasChildNodes()) {
                            tmpElement = elParent.parentNode.nextSibling.lastChild;
                            if (tmpElement) {
                                if ((tmpElement.firstChild && tmpElement.firstChild.getAttribute('more') !== 'true') || !tmpElement.firstChild) {
                                    this.onLoad_Dynamic(elParent, i);
                                }
                            }
                        }
                    }
                }
            }
            else {
                this.onLoad_DynamicRoot();
                break;
            }
        }
        this.removeThrobber();
        this._getAllThrobbing$0 = false;
        this._show$p$0(this._layer2$0.firstChild);
        this.heightwidth_reset();
        var elapsedTime = new Date().getTime() - startTime;
        PPSMA.PerformanceLogger.logGeneric(this._treeViewDataRecord$0.TreeId + 'onLoad_GetRemaining', elapsedTime);
    },
    
    _body_keydown$p$0: function PPSMA_ParameterTree$_body_keydown$p$0(e) {ULSpVC:;
        if (this._treeElement$0.style.visibility !== 'visible') {
            return;
        }
        if (e.keyCode === 27) {
            e.stopPropagation();
            this.cancel(this._treeElement$0);
        }
    },
    
    _tree_keydown$p$0: function PPSMA_ParameterTree$_tree_keydown$p$0(e) {ULSpVC:;
        if (this._treeElement$0.style.visibility !== 'visible') {
            return;
        }
        if (Sys.UI.DomElement.containsCssClass(e.target, this._pps_Tree_Search_Input_Focus$0)) {
            if (e.keyCode === 13) {
                this._searchnow$p$0(null);
                e.stopPropagation();
                e.preventDefault();
                return;
            }
        }
    },
    
    _tree_keyup$p$0: function PPSMA_ParameterTree$_tree_keyup$p$0(e) {ULSpVC:;
        if (this._treeElement$0.style.visibility !== 'visible') {
            return;
        }
        if (Sys.UI.DomElement.containsCssClass(e.target, this._pps_Tree_Search_Input_Focus$0)) {
            if (this._searchInputElementValueOnFocus$0 !== this._searchInputElement$0.value) {
                this._searchImageElement$0.src = this._resourceUrl$0 + 'searchmagnifyingglassblue.png';
                this._searchImageElement$0.title = PPSMA.SR.ParameterTreeText_SearchToolTip;
                this._searchInputElementValueOnFocus$0 = this._searchInputElement$0.value;
            }
            else if (e.keyCode === 93 || (e.shiftKey && e.keyCode === 121)) {
                this.handleContextMenu(e);
                return;
            }
        }
    },
    
    cancel_e: function PPSMA_ParameterTree$cancel_e(e) {ULSpVC:;
        e.stopPropagation();
        e.preventDefault();
        this.cancel(e.target);
    },
    
    searchGetAll: function PPSMA_ParameterTree$searchGetAll(e) {ULSpVC:;
        var throbberDiv = this._uniqueThrobberOuterDivFactory$p$0(this._layer2search$0.offsetWidth, this._layer2search$0.offsetHeight);
        this._stoppingProcess$0 = false;
        this._nextRootNodeToRenderSearch$0 = 0;
        this._hide$p$0(this._layer2search$0.firstChild);
        var mustResetHeight = false;
        if (this._exceededSearchElement$0.style.display === 'block') {
            mustResetHeight = true;
            this._applyElement$0.parentNode.style.height = (parseInt(this._applyElement$0.parentNode.currentStyle.height) - PPSMA.ParameterTree._ppstreE_INFO_FOOTER_HEIGHT_ADJ$p).toString() + 'px';
            this._exceededSearchElement$0.style.display = 'none';
            this._exceededSearchElement$0.nextSibling.style.display = 'none';
        }
        if (mustResetHeight) {
            this.height_reset();
        }
        this._layer2search$0.appendChild(throbberDiv);
        this._searchController$0.searchParameterDisplayData(this._searchInputElement$0.value, throbberDiv, true);
    },
    
    _removeExpandAllWaitIndicator$p$0: function PPSMA_ParameterTree$_removeExpandAllWaitIndicator$p$0() {ULSpVC:;
        var waitDiv = $get(PPSMA.ParameterTree._pT_THROBBER_DIV_ID$p + this._outerElement$0.id);
        if (waitDiv) {
            waitDiv.parentNode.removeChild(waitDiv);
        }
    },
    
    _getExpandAllWaitIndicator$p$0: function PPSMA_ParameterTree$_getExpandAllWaitIndicator$p$0() {ULSpVC:;
        var clientWebPart = PPSMA.ClientConnectionManager.get_instance().findClientWebPart(this._treeViewDataRecord$0.WebPartId);
        var waitDiv = document.createElement('div');
        waitDiv.id = PPSMA.ParameterTree._pT_THROBBER_DIV_ID$p + this._outerElement$0.id;
        waitDiv.className = PPSMA.ParameterTree._pT_EXALL_WAIT$p;
        var waitInnerDiv = document.createElement('div');
        waitInnerDiv.className = PPSMA.ParameterTree._pT_EXALL_WAIT_LAYOUT$p;
        waitDiv.appendChild(waitInnerDiv);
        var img = document.createElement('img');
        img.src = clientWebPart.waitImageUri;
        img.className = PPSMA.ParameterTree._pT_EXALL_WAIT_IMG$p;
        waitInnerDiv.appendChild(img);
        var msg = document.createTextNode((this._expandingAll$0) ? PPSMA.SR.ParameterTreeText_Expanding : PPSMA.SR.ParameterTreeText_Collapsing);
        waitInnerDiv.appendChild(msg);
        var cancel = document.createElement('a');
        cancel.className = PPSMA.ParameterTree._pT_EXALL_WAIT_STOP$p;
        cancel.innerText = PPSMA.SR.Dashboard_WebRequest_Stop;
        cancel.href = '#';
        $addHandler(cancel, 'click', this.$$d_expandAllCancelHandler);
        waitInnerDiv.appendChild(cancel);
        return waitDiv;
    },
    
    expandAllCancelHandler: function PPSMA_ParameterTree$expandAllCancelHandler(e) {ULSpVC:;
        this.genericclick(e);
        this._expandAllCancel$0 = true;
    },
    
    hideSearchPanel: function PPSMA_ParameterTree$hideSearchPanel() {ULSpVC:;
        this._searchImageElement$0.src = this._resourceUrl$0 + 'searchmagnifyingglassblue.png';
        this._searchImageElement$0.title = PPSMA.SR.ParameterTreeText_SearchToolTip;
        this._applyElement$0.parentNode.className = this._pps_Tree_Footer$0 + ' ' + this._pps_Tree_Footer_Normal$0;
        if (document.activeElement !== this._searchInputElement$0) {
            this._searchInputElement$0.value = this._searchTxDecoded$0;
        }
        var L3 = this._layer2search$0.firstChild;
        L3.innerHTML = '';
        this._layer2search$0.style.visibility = 'hidden';
        L3.style.visibility = 'hidden';
        this._layer2search$0.style.display = 'none';
        L3.style.display = 'none';
        this._layer2$0.style.visibility = 'visible';
        this._layer2$0.style.display = 'block';
        if (this._exceededSearchElement$0.style.display === 'block') {
            this._applyElement$0.parentNode.style.height = (parseInt(this._applyElement$0.parentNode.currentStyle.height) - PPSMA.ParameterTree._ppstreE_INFO_FOOTER_HEIGHT_ADJ$p).toString() + 'px';
            this._exceededSearchElement$0.style.display = 'none';
            this._exceededSearchElement$0.nextSibling.style.display = 'none';
        }
        if (this._treeViewDataRecord$0.MaxExceeded.length > 0 && this._exceededElement$0.style.display === 'none' && !this._treeGetAllComplete$0) {
            this._applyElement$0.parentNode.style.height = (parseInt(this._applyElement$0.parentNode.currentStyle.height) + PPSMA.ParameterTree._ppstreE_INFO_FOOTER_HEIGHT_ADJ$p).toString() + 'px';
            this._exceededElement$0.style.display = 'block';
            this._exceededElement$0.nextSibling.style.display = 'inline-block';
        }
        this.heightwidth_reset();
        return;
    },
    
    cancel: function PPSMA_ParameterTree$cancel(uiElement) {ULSpVC:;
        if (this._cancelling$0) {
            return;
        }
        this._cancelling$0 = true;
        if (this._expandAllThrobbing$0) {
            this._expandAllCancel$0 = true;
            return;
        }
        if (this._getAllThrobbing$0) {
            this.getRemainingCancelledHandler();
            return;
        }
        if (this.searchIsOpen()) {
            this._searchController$0.hideWebRequestThrobber();
            this.removeThrobber();
            this.hideSearchPanel();
            this._currentSelectionsSearch$0 = null;
            this._applyButtonDisable$p$0(this._applyElementDisabledState$0);
            this._selectorElement$0.checked = this._selectorElementStateForSearch$0;
            this._searchInputElement$0.style.cursor = 'text';
            this._searchImageAnchor$0.style.cursor = 'default';
            this._searchImageElement$0.style.cursor = 'default';
            this._cancelling$0 = false;
            return;
        }
        if (!this._membersChanged$0) {
            this.showtree();
            this._cancelling$0 = false;
            return;
        }
        this._cancelElement$0.style.cursor = 'wait';
        window.setTimeout(this.$$d_cancel_post, 10);
    },
    
    selectByIndex: function PPSMA_ParameterTree$selectByIndex(idx, selected, checkSelectionsDict, skipUnRendered) {ULSpVC:;
        var el = $get(this._treeViewDataRecord$0.TreeId + this.zeroFill(idx));
        if (el) {
            var checkboxElement = el.firstChild.nextSibling;
            checkboxElement.checked = selected;
            checkboxElement.parentNode.parentNode.style.backgroundColor = '';
            checkboxElement.parentNode.parentNode.className = (selected) ? this._pps_Tree_Item_Checked$0 : PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p;
            this.setParentageDisplay(checkboxElement.parentNode.parentNode.parentNode, selected);
        }
        else if (!skipUnRendered) {
            var currentLevel = this._tVDRMembers$0[idx].Lv;
            var currentIdx = idx;
            while (currentLevel > 0) {
                var parentidx = ((this._tVDRMembersXRef$0[this._tVDRMembers$0[currentIdx].Id])).parentidx;
                if (parentidx >= 0) {
                    var elParent = $get(this._treeViewDataRecord$0.TreeId + this.zeroFill(parentidx));
                    if (elParent) {
                        if (selected) {
                            this.setParentageDisplay(elParent.parentNode.nextSibling, selected);
                        }
                        else {
                            this.setParentageDisplay(elParent.parentNode.nextSibling, this.hasChildrenSelected(parentidx, checkSelectionsDict));
                        }
                        break;
                    }
                    else {
                        currentIdx = parentidx;
                    }
                }
                --currentLevel;
            }
        }
    },
    
    cancel_post: function PPSMA_ParameterTree$cancel_post() {ULSpVC:;
        var cancelTime = new Date().getTime();
        var interimTime = cancelTime;
        var lastparentidx = -1;
        var $$dict_3 = this._currentSelectionsEdit$0;
        for (var $$key_4 in $$dict_3) {
            var de = { key: $$key_4, value: $$dict_3[$$key_4] };
            if (!this._currentSelections$0[de.key]) {
                var parentidx = ((this._tVDRMembersXRef$0[this._tVDRMembers$0[parseInt(de.key)].Id])).parentidx;
                if (lastparentidx === parentidx) {
                    this.selectByIndex(parseInt(de.key), false, this._currentSelections$0, true);
                }
                else {
                    lastparentidx = parentidx;
                    this.selectByIndex(parseInt(de.key), false, this._currentSelections$0, false);
                }
            }
        }
        var elapsedTime = new Date().getTime() - interimTime;
        PPSMA.PerformanceLogger.logGeneric(this._treeViewDataRecord$0.TreeId + ':cancel_post:deselect', elapsedTime);
        interimTime = new Date().getTime();
        lastparentidx = -1;
        var $$dict_8 = this._currentSelections$0;
        for (var $$key_9 in $$dict_8) {
            var de = { key: $$key_9, value: $$dict_8[$$key_9] };
            var parentidx = ((this._tVDRMembersXRef$0[this._tVDRMembers$0[parseInt(de.key)].Id])).parentidx;
            if (!this._currentSelectionsEdit$0[de.key]) {
                if (lastparentidx === parentidx) {
                    this.selectByIndex(parseInt(de.key), true, this._currentSelections$0, true);
                }
                else {
                    lastparentidx = parentidx;
                    this.selectByIndex(parseInt(de.key), true, this._currentSelections$0, false);
                }
            }
        }
        elapsedTime = new Date().getTime() - interimTime;
        PPSMA.PerformanceLogger.logGeneric(this._treeViewDataRecord$0.TreeId + ':cancel_post:reselect', elapsedTime);
        this.heightwidth_reset();
        this.showtree();
        this._selectorElement$0.checked = this._selectorElementState$0;
        this._cancelElement$0.style.cursor = 'pointer';
        this._cancelling$0 = false;
        elapsedTime = new Date().getTime() - cancelTime;
        PPSMA.PerformanceLogger.logGeneric(this._treeViewDataRecord$0.TreeId + ':cancel_post:total', elapsedTime);
    },
    
    expandAll: function PPSMA_ParameterTree$expandAll() {ULSpVC:;
        var gotOne = false;
        var counter = 0;
        var className = (this._expandingAll$0) ? this._pps_Tree_Plus$0 : this._pps_Tree_Minus$0;
        while (true) {
            gotOne = false;
            var collection = this._layer2$0.firstChild.getElementsByTagName('A');
            for (var i = 0; i < collection.length; ++i) {
                if (this._expandAllCancel$0) {
                    break;
                }
                var el = collection[i];
                if (Sys.UI.DomElement.containsCssClass(el, className)) {
                    gotOne = true;
                    ++counter;
                    if (counter > PPSMA.ParameterTree._ppstreE_EXPANDALLCOUNT_TILL_THROBBER$p) {
                        if (!this._expandAllThrobbing$0) {
                            this._hide$p$0(this._layer2$0.firstChild);
                            this._layer2$0.appendChild(this._getExpandAllWaitIndicator$p$0());
                            this._expandAllThrobbing$0 = true;
                        }
                        window.setTimeout(this.$$d_expandAll, 100);
                        return;
                    }
                    this._tempElement$0 = el;
                    this._tempTargetElement$0 = el;
                    this.expandBodyExpandAll(this._expandingAll$0);
                }
            }
            if (!gotOne || this._expandAllCancel$0) {
                break;
            }
        }
        if (this._expandAllThrobbing$0) {
            this._removeExpandAllWaitIndicator$p$0();
            this._show$p$0(this._layer2$0.firstChild);
            this.heightwidth_reset();
            this._expandAllThrobbing$0 = false;
        }
        this._expandAllCancel$0 = false;
        if (this._cancelling$0) {
            this._cancelling$0 = false;
            this.cancel(this._treeElement$0);
        }
    },
    
    expandBodyExpandAll: function PPSMA_ParameterTree$expandBodyExpandAll(expanding) {ULSpVC:;
        var uiElement = this._tempElement$0;
        var uippnsElement = uiElement.parentNode.parentNode.nextSibling;
        if (!uippnsElement.firstChild && expanding) {
            this.onLoad_Dynamic(uiElement.parentNode, 0);
        }
        if (expanding) {
            uiElement.className = this._pps_Tree_Minus$0;
            if (Sys.UI.DomElement.containsCssClass(uippnsElement, PPSMA.ParameterTree._ppS_TREE_EXPANDED$p) || Sys.UI.DomElement.containsCssClass(uippnsElement, PPSMA.ParameterTree._ppS_TREE_COLLAPSED$p) || Sys.UI.DomElement.containsCssClass(uippnsElement, PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p)) {
                uippnsElement.className = PPSMA.ParameterTree._ppS_TREE_EXPANDED$p;
            }
        }
        else {
            uiElement.className = this._pps_Tree_Plus$0;
            if (Sys.UI.DomElement.containsCssClass(uippnsElement, PPSMA.ParameterTree._ppS_TREE_EXPANDED$p) || Sys.UI.DomElement.containsCssClass(uippnsElement, PPSMA.ParameterTree._ppS_TREE_COLLAPSED$p) || Sys.UI.DomElement.containsCssClass(uippnsElement, PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p)) {
                uippnsElement.className = PPSMA.ParameterTree._ppS_TREE_COLLAPSED$p;
            }
        }
    },
    
    expand: function PPSMA_ParameterTree$expand(e) {ULSpVC:;
        e.stopPropagation();
        var uiElement = e.target;
        if (!Sys.UI.DomElement.containsCssClass(uiElement, this._pps_Tree_Plus$0) && !Sys.UI.DomElement.containsCssClass(uiElement, this._pps_Tree_Minus$0)) {
            uiElement = e.target.parentNode;
        }
        if (Sys.UI.DomElement.containsCssClass(uiElement, this._pps_Tree_Plus$0) || Sys.UI.DomElement.containsCssClass(uiElement, this._pps_Tree_Minus$0)) {
            this._tempElement$0 = uiElement;
            this._tempTargetElement$0 = e.target;
            this._tempTargetElement$0.style.cursor = 'wait';
            window.setTimeout(this.$$d__expandBody$p$0, 10);
        }
        e.preventDefault();
    },
    
    _expandBody$p$0: function PPSMA_ParameterTree$_expandBody$p$0() {ULSpVC:;
        this._expanding$0 = true;
        var uiElement = this._tempElement$0;
        var uippnsElement = uiElement.parentNode.parentNode.nextSibling;
        if (!uippnsElement.firstChild) {
            this.onLoad_Dynamic(uiElement.parentNode, 0);
        }
        if (Sys.UI.DomElement.containsCssClass(uiElement, this._pps_Tree_Minus$0)) {
            uiElement.className = this._pps_Tree_Plus$0;
            if (Sys.UI.DomElement.containsCssClass(uippnsElement, PPSMA.ParameterTree._ppS_TREE_EXPANDED$p) || Sys.UI.DomElement.containsCssClass(uippnsElement, PPSMA.ParameterTree._ppS_TREE_COLLAPSED$p) || Sys.UI.DomElement.containsCssClass(uippnsElement, PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p)) {
                uippnsElement.className = PPSMA.ParameterTree._ppS_TREE_COLLAPSED$p;
            }
        }
        else {
            uiElement.className = this._pps_Tree_Minus$0;
            if (Sys.UI.DomElement.containsCssClass(uippnsElement, PPSMA.ParameterTree._ppS_TREE_EXPANDED$p) || Sys.UI.DomElement.containsCssClass(uippnsElement, PPSMA.ParameterTree._ppS_TREE_COLLAPSED$p) || Sys.UI.DomElement.containsCssClass(uippnsElement, PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p)) {
                uippnsElement.className = PPSMA.ParameterTree._ppS_TREE_EXPANDED$p;
            }
        }
        this.heightwidth_reset();
        this._tempTargetElement$0.style.cursor = 'default';
        this._expanding$0 = false;
    },
    
    nodetextclick: function PPSMA_ParameterTree$nodetextclick(e) {ULSpVC:;
        var uiElement = e.target.parentNode.parentNode;
        var collection = uiElement.getElementsByTagName('input');
        if (this.searchIsOpen()) {
            this.check_search(collection[0]);
        }
        else {
            this.check(collection[0]);
        }
        e.stopPropagation();
        e.preventDefault();
    },
    
    parentcheck: function PPSMA_ParameterTree$parentcheck(e) {ULSpVC:;
        var uiElement = e.target.parentNode;
        var collection = uiElement.getElementsByTagName('input');
        this.check(collection[0]);
        e.preventDefault();
    },
    
    parentcheck_search: function PPSMA_ParameterTree$parentcheck_search(e) {ULSpVC:;
        var uiElement = e.target.parentNode;
        if (Sys.UI.DomElement.containsCssClass(uiElement, PPSMA.ParameterTree._ppS_TREE_NODE_TEXT$p)) {
            uiElement = uiElement.parentNode;
        }
        var collection = uiElement.getElementsByTagName('input');
        this.check_search(collection[0]);
        e.preventDefault();
    },
    
    updateLabel_u: function PPSMA_ParameterTree$updateLabel_u() {ULSpVC:;
        if (null !== this._iFrame$0) {
            this.updateLabel();
        }
    },
    
    updateLabel: function PPSMA_ParameterTree$updateLabel() {ULSpVC:;
        var sbLabel = new Sys.StringBuilder();
        var $$dict_1 = this._currentSelections$0;
        for (var $$key_2 in $$dict_1) {
            var de = { key: $$key_2, value: $$dict_1[$$key_2] };
            sbLabel.append(this._tVDRMembers$0[parseInt(de.key)].Tx + this._separatorCharacter$0 + ' ');
        }
        this._labelTextElement$0.style.width = '0px';
        var s = sbLabel.toString();
        s = s.substring(0, s.length - (this._separatorCharacter$0.length + 1));
        var title = s;
        var ellipsisNeeded = false;
        var maxWidth = (parseInt(this._labelTextElement$0.parentNode.currentStyle.maxWidth) > 0) ? parseInt(this._labelTextElement$0.parentNode.currentStyle.maxWidth) : 275;
        this._labelTextElement$0.innerText = s;
        while ((this._labelTextElement$0.offsetWidth > maxWidth - PPSMA.ParameterTree._ppstreE_LABELPADDINGRESERVED$p) && (s.length > PPSMA.ParameterTree._ppstreE_CHARS_TO_REMOVE_AND_RETRY$p)) {
            s = s.substring(0, s.length - PPSMA.ParameterTree._ppstreE_CHARS_TO_REMOVE_AND_RETRY$p);
            this._labelTextElement$0.innerText = s;
            ellipsisNeeded = true;
        }
        if (ellipsisNeeded) {
            s = s.substring(0, s.length - this._ellipsisCharacter$0.length) + this._ellipsisCharacter$0;
        }
        var d = document.createElement('DIV');
        d.innerHTML = '<DIV display=none title=\"' + title + '\">' + s + '</DIV>';
        this._labelElement$0.appendChild(d.childNodes[0]);
        this._labelTextElement$0.title = this._labelElement$0.lastChild.title;
        this._labelTextElement$0.innerText = this._labelElement$0.lastChild.innerText;
        this._labelElement$0.removeChild(this._labelElement$0.lastChild);
    },
    
    selectorText: function PPSMA_ParameterTree$selectorText(e) {ULSpVC:;
        this._selectorElement$0.checked = !this._selectorElement$0.checked;
        this._selector_transition$p$0(e);
    },
    
    selector: function PPSMA_ParameterTree$selector(e) {ULSpVC:;
        this._selector_transition$p$0(e);
    },
    
    _selector_transition$p$0: function PPSMA_ParameterTree$_selector_transition$p$0(e) {ULSpVC:;
        e.stopPropagation();
        this._selectorElement$0.style.cursor = 'wait';
        this._selectorTextElement$0.style.cursor = 'wait';
        if (this.searchIsOpen()) {
            window.setTimeout(this.$$d__selectorsearch_post$p$0, 10);
        }
        else {
            window.setTimeout(this.$$d__selector_post$p$0, 10);
        }
    },
    
    _selectorsearch_post$p$0: function PPSMA_ParameterTree$_selectorsearch_post$p$0() {ULSpVC:;
        var collection = this._layer2search$0.firstChild.getElementsByTagName('input');
        if (collection.length === 1 && (Sys.UI.DomElement.containsCssClass(collection[0].nextSibling, PPSMA.ParameterTree._ppS_TREE_NODE_TEXT_NOTFOUND$p) || Sys.UI.DomElement.containsCssClass(collection[0].nextSibling, PPSMA.ParameterTree._ppS_TREE_NODE_TEXT_NOTFOUND$p + PPSMA.ParameterTree._nO_EX_SUFFIX$p))) {
            this._applyButtonDisable$p$0(true);
            this._selectorElement$0.style.cursor = 'default';
            this._selectorTextElement$0.style.cursor = 'default';
            return;
        }
        this._applyButtonDisable$p$0(false);
        if (!this._selectorElement$0.checked) {
            for (var i = 0; i < collection.length; ++i) {
                var el = collection[i];
                el.checked = false;
                el.parentNode.parentNode.className = PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p;
            }
            for (var i = 0; i < this._searchResultNodes$0.length; ++i) {
                if (this._currentSelectionsSearch$0[this._searchResultNodes$0[i].Id]) {
                    delete this._currentSelectionsSearch$0[this._searchResultNodes$0[i].Id];
                }
            }
        }
        else {
            for (var i = 0; i < collection.length; ++i) {
                var el = collection[i];
                var memberId = el.parentNode.getAttribute('memberid');
                if (!this._currentSelectionsSearch$0[memberId]) {
                    this._currentSelectionsSearch$0[memberId] = el.parentNode.innerText;
                }
                el.checked = true;
                el.parentNode.parentNode.className = PPSMA.ParameterTree._ppS_TREE_ITEM_CHECKED$p;
            }
            for (var i = 0; i < this._searchResultNodes$0.length; ++i) {
                if (!this._currentSelectionsSearch$0[this._searchResultNodes$0[i].Id]) {
                    this._currentSelectionsSearch$0[this._searchResultNodes$0[i].Id] = this._searchResultNodes$0[i].Tx;
                }
            }
        }
        this._selectorElement$0.style.cursor = 'default';
        this._selectorTextElement$0.style.cursor = 'default';
    },
    
    _selector_post$p$0: function PPSMA_ParameterTree$_selector_post$p$0() {ULSpVC:;
        this._membersChanged$0 = true;
        this._applyButtonDisable$p$0(false);
        var collection = this._treeElement$0.getElementsByTagName('input');
        if (!this._selectorElement$0.checked) {
            for (var i = 0; i < collection.length; ++i) {
                var el = collection[i];
                var idx = el.parentNode.getAttribute('idx');
                if (el.checked && (!Sys.UI.DomElement.containsCssClass(el, this._pps_Tree_Selector$0)) && (!Sys.UI.DomElement.containsCssClass(el, this._pps_Tree_Search_Input$0))) {
                    var eparent = el.parentNode;
                    if (eparent.getAttribute('more') === 'true') {
                        continue;
                    }
                    var level = this._tVDRMembers$0[parseInt(idx)].Lv;
                    if (level) {
                        eparent = eparent.parentNode.parentNode;
                        el.checked = false;
                        el.parentNode.parentNode.className = PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p;
                    }
                    else {
                        el.checked = false;
                        el.parentNode.parentNode.className = PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p;
                    }
                }
                if ((!Sys.UI.DomElement.containsCssClass(el, this._pps_Tree_Selector$0)) && (!Sys.UI.DomElement.containsCssClass(el, this._pps_Tree_Search_Input$0)) && (this.hasChildren(parseInt(idx)))) {
                    el.nextSibling.className = PPSMA.ParameterTree._ppS_TREE_NODE_TEXT$p;
                }
            }
            this._currentSelectionsEdit$0 = {};
        }
        else {
            for (var i = 0; i < collection.length; ++i) {
                var el = collection[i];
                var idx = el.parentNode.getAttribute('idx');
                if ((!el.checked) && (!Sys.UI.DomElement.containsCssClass(el, this._pps_Tree_Selector$0)) && (!Sys.UI.DomElement.containsCssClass(el, this._pps_Tree_Search_Input$0))) {
                    var eparent = el.parentNode;
                    if (eparent.getAttribute('more') === 'true') {
                        continue;
                    }
                    var level = this._tVDRMembers$0[parseInt(idx)].Lv;
                    if (level) {
                        eparent = eparent.parentNode.parentNode;
                        if (!this._currentSelectionsEdit$0[idx]) {
                            this._currentSelectionsEdit$0[idx] = this._tVDRMembers$0[parseInt(idx)].Id;
                        }
                        el.checked = true;
                        el.parentNode.parentNode.className = this._pps_Tree_Item_Checked$0;
                    }
                    else {
                        if (!this._currentSelectionsEdit$0[idx]) {
                            this._currentSelectionsEdit$0[idx] = this._tVDRMembers$0[parseInt(idx)].Id;
                        }
                        el.checked = true;
                        el.parentNode.parentNode.className = this._pps_Tree_Item_Checked$0;
                    }
                }
                if ((!Sys.UI.DomElement.containsCssClass(el, this._pps_Tree_Selector$0)) && (!Sys.UI.DomElement.containsCssClass(el, this._pps_Tree_Search_Input$0)) && (this.hasChildren(parseInt(idx)))) {
                    el.nextSibling.className = PPSMA.ParameterTree._ppS_TREE_NODE_TEXT_BOLD$p;
                }
            }
            for (var i = 0; i < this._tVDRMembers$0.length; ++i) {
                var s = i.toString();
                if (!this._currentSelectionsEdit$0[s]) {
                    this._currentSelectionsEdit$0[s] = this._tVDRMembers$0[i].Id;
                }
            }
        }
        this.width_reset();
        this._selectorElement$0.style.cursor = 'default';
        this._selectorTextElement$0.style.cursor = 'default';
    },
    
    apply: function PPSMA_ParameterTree$apply() {ULSpVC:;
        if (this._applyElement$0) {
            this._applyElement$0.click();
        }
    },
    
    zeroFill: function PPSMA_ParameterTree$zeroFill(val) {ULSpVC:;
        var s = '0000000';
        var sval = val.toString();
        return s.substring(0, 7 - sval.length) + sval;
    },
    
    integrateSearchIntoTree: function PPSMA_ParameterTree$integrateSearchIntoTree() {ULSpVC:;
        this._membersChanged$0 = true;
        var $$dict_0 = this._currentSelectionsEdit$0;
        for (var $$key_1 in $$dict_0) {
            var de = { key: $$key_1, value: $$dict_0[$$key_1] };
            if (!this._currentSelectionsSearch$0[de.value.toString()]) {
                delete this._currentSelectionsEdit$0[de.key];
                this.selectByIndex(parseInt(de.key), false, this._currentSelectionsEdit$0, false);
            }
        }
        var $$dict_3 = this._currentSelectionsSearch$0;
        for (var $$key_4 in $$dict_3) {
            var de = { key: $$key_4, value: $$dict_3[$$key_4] };
            var xref = this._tVDRMembersXRef$0[de.key];
            if (xref) {
                var idx = xref.idx.toString();
                if (!this._currentSelectionsEdit$0[idx]) {
                    this._currentSelectionsEdit$0[idx] = de.key;
                    this.selectByIndex(xref.idx, true, this._currentSelectionsEdit$0, false);
                }
            }
            else {
                var t = new PPSMA.TreeViewDataMemberRecord();
                t.Id = de.key;
                t.Lv = 0;
                t.Sl = false;
                t.Tx = de.value.toString();
                var idx = this._tVDRMembers$0.length;
                this._tVDRMembers$0[idx] = t;
                this._tVDRMembersXRef$0[t.Id] = new PPSMA._xRef(idx, -1);
                this._currentSelectionsEdit$0[idx.toString()] = t.Id;
            }
        }
        this._currentSelectionsSearch$0 = null;
        if (this._exceededSearchElement$0.style.display === 'block') {
            this._applyElement$0.parentNode.style.height = (parseInt(this._applyElement$0.parentNode.currentStyle.height) - PPSMA.ParameterTree._ppstreE_INFO_FOOTER_HEIGHT_ADJ$p).toString() + 'px';
            this._exceededSearchElement$0.style.display = 'none';
            this._exceededSearchElement$0.nextSibling.style.display = 'none';
        }
        if (this._treeViewDataRecord$0.MaxExceeded.length > 0 && this._exceededElement$0.style.display === 'none' && !this._treeGetAllComplete$0) {
            this._applyElement$0.parentNode.style.height = (parseInt(this._applyElement$0.parentNode.currentStyle.height) + PPSMA.ParameterTree._ppstreE_INFO_FOOTER_HEIGHT_ADJ$p).toString() + 'px';
            this._exceededElement$0.style.display = 'block';
            this._exceededElement$0.nextSibling.style.display = 'inline-block';
        }
        this._applyButtonDisable$p$0(false);
        var i = 0;
        var $$dict_B = this._currentSelectionsEdit$0;
        for (var $$key_C in $$dict_B) {
            var d = { key: $$key_C, value: $$dict_B[$$key_C] };
            ++i;
        }
        if (i === this._tVDRMembers$0.length) {
            this._selectorElement$0.checked = true;
        }
        else {
            this._selectorElement$0.checked = false;
        }
        return;
    },
    
    searchIsOpen: function PPSMA_ParameterTree$searchIsOpen() {ULSpVC:;
        if (this._layer2search$0.style.visibility === 'visible') {
            return true;
        }
        return false;
    },
    
    getSelectedValues: function PPSMA_ParameterTree$getSelectedValues(treeId) {ULSpVC:;
        var selected = [];
        if (this.searchIsOpen()) {
            this.integrateSearchIntoTree();
            if (this.get_IsMultiSelect()) {
                return selected;
            }
            else {
                this.hideSearchPanel();
            }
        }
        if ((this._currentSelections$0) && !this._membersChanged$0) {
            return selected;
        }
        var sortArray = [];
        var $$dict_3 = this._currentSelectionsEdit$0;
        for (var $$key_4 in $$dict_3) {
            var de = { key: $$key_4, value: $$dict_3[$$key_4] };
            Array.add(sortArray, this.zeroFill(parseInt(de.key)));
        }
        sortArray.sort();
        this._currentSelections$0 = {};
        for (var x = 0; x < sortArray.length; x++) {
            var idx = parseInt(sortArray[x].toString(), 10);
            var idxStr = idx.toString();
            var id = this._currentSelectionsEdit$0[idxStr];
            this._currentSelections$0[idxStr] = id;
            Array.add(selected, id);
        }
        this.updateLabel();
        if (!selected.length) {
            var originalSelectionExists = false;
            if (this._originalSelections$0) {
                this._currentSelectionsEdit$0 = {};
                var lastparentidx = -1;
                var $$dict_C = this._originalSelections$0;
                for (var $$key_D in $$dict_C) {
                    var de = { key: $$key_D, value: $$dict_C[$$key_D] };
                    this._currentSelectionsEdit$0[de.key] = de.value;
                    var parentidx = ((this._tVDRMembersXRef$0[this._tVDRMembers$0[parseInt(de.key)].Id])).parentidx;
                    if (lastparentidx === parentidx) {
                        this.selectByIndex(parseInt(de.key), true, this._currentSelectionsEdit$0, true);
                    }
                    else {
                        lastparentidx = parentidx;
                        this.selectByIndex(parseInt(de.key), true, this._currentSelectionsEdit$0, false);
                    }
                    if (!originalSelectionExists) {
                        originalSelectionExists = true;
                    }
                }
            }
            if (!originalSelectionExists) {
                var sID = 'pps-tree-layer1-' + treeId;
                var ppsTree = $get(sID);
                var cinputs = ppsTree.getElementsByTagName('input');
                var chkEl = cinputs[1];
                if (this._treeElement$0) {
                    this.check(chkEl);
                }
                else {
                    if (this._currentSelections$0) {
                        var idx = chkEl.parentNode.getAttribute('idx');
                        if (!this._currentSelections$0[idx]) {
                            this._currentSelections$0[idx] = this._tVDRMembers$0[parseInt(idx)].Id;
                        }
                    }
                    chkEl.checked = true;
                    chkEl.parentNode.parentNode.className = this._pps_Tree_Item_Checked$0;
                }
            }
            return (this.getSelectedValues(treeId));
        }
        return selected;
    },
    
    searchCancelledHandler: function PPSMA_ParameterTree$searchCancelledHandler() {ULSpVC:;
        this._stoppingProcess$0 = true;
        this._searchInputElement$0.style.cursor = 'text';
        this._searchImageAnchor$0.style.cursor = 'default';
        this._searchImageElement$0.style.cursor = 'default';
        this._searchController$0.hideWebRequestThrobber();
        this.removeThrobber();
    },
    
    getRemainingCancelledHandler: function PPSMA_ParameterTree$getRemainingCancelledHandler() {ULSpVC:;
        this._stoppingProcess$0 = true;
        this._pcm$0.hideWebRequestThrobber();
        this.removeThrobber();
        this._show$p$0(this._layer2$0.firstChild);
        if (this._exceededElement$0.style.display === 'none') {
            this._applyElement$0.parentNode.style.height = (parseInt(this._applyElement$0.parentNode.style.height) + PPSMA.ParameterTree._ppstreE_INFO_FOOTER_HEIGHT_ADJ$p).toString() + 'px';
            this._exceededElement$0.style.display = 'block';
            this._exceededElement$0.nextSibling.style.display = 'inline-block';
            this.height_reset();
        }
        this._getAllThrobbing$0 = false;
        if (this._cancelling$0) {
            this._cancelling$0 = false;
            this.cancel(this._treeElement$0);
        }
    },
    
    _isFlat$0: false,
    
    get_isFlat: function PPSMA_ParameterTree$get_isFlat() {ULSpVC:;
        return this._isFlat$0;
    },
    set_isFlat: function PPSMA_ParameterTree$set_isFlat(value) {ULSpVC:;
        this._isFlat$0 = value;
        return value;
    }
}


PPSMA.ParameterGetRemainingResultRecord.registerClass('PPSMA.ParameterGetRemainingResultRecord');
PPSMA.ParameterSearchRequest.registerClass('PPSMA.ParameterSearchRequest');
PPSMA.ParameterSearchResultNode.registerClass('PPSMA.ParameterSearchResultNode');
PPSMA.ParameterSearchResultRecord.registerClass('PPSMA.ParameterSearchResultRecord');
PPSMA._xRef.registerClass('PPSMA._xRef');
PPSMA.TreeViewDataRecord.registerClass('PPSMA.TreeViewDataRecord');
PPSMA.TreeViewDataMemberRecord.registerClass('PPSMA.TreeViewDataMemberRecord');
PPSMA.ParameterControlManager.registerClass('PPSMA.ParameterControlManager');
PPSMA.ParameterSearchController.registerClass('PPSMA.ParameterSearchController');
PPSMA.ParameterTree.registerClass('PPSMA.ParameterTree', null, Sys.IDisposable);
PPSMA.ParameterControlManager._vS_ServiceUrl$i = 'ServiceUrl';
PPSMA.ParameterSearchController._vS_HeadServiceUrl$i = 'HeadServiceUrl';
PPSMA.ParameterSearchController._vS_RemainingServiceUrl$i = 'RemainingServiceUrl';
PPSMA.ParameterTree._nO_EX_SUFFIX$p = '-no-expand';
PPSMA.ParameterTree._ppstreE_MAXCHARS_BEFORE_TRUNCATION$p = 100;
PPSMA.ParameterTree._ppstreE_EXPANDALLCOUNT_TILL_THROBBER$p = 5;
PPSMA.ParameterTree._ppstreE_LABELPADDINGRESERVED$p = 20;
PPSMA.ParameterTree._ppstreE_CHARS_TO_REMOVE_AND_RETRY$p = 4;
PPSMA.ParameterTree._ppstreE_OFFSET_WIDTH_ADJ$p = 41;
PPSMA.ParameterTree._ppstreE_SEARCHOFFSET_WIDTH_ADJ$p = 4;
PPSMA.ParameterTree._ppstreE_MORE_INDENT$p = 20;
PPSMA.ParameterTree._ppstreE_MIN_HEIGHT$p = 220;
PPSMA.ParameterTree._ppstreE_ROWHEIGHT_SHIM$p = 2;
PPSMA.ParameterTree._ppstreE_HEIGHT_SHIM$p = 8;
PPSMA.ParameterTree._ppstreE_INFO_FOOTER_HEIGHT_ADJ$p = 32;
PPSMA.ParameterTree._msG_IDX_MAX_EXCEEDED$p = -1;
PPSMA.ParameterTree._msG_IDX_NOT_FOUND$p = -2;
PPSMA.ParameterTree._throbbeR_PADDING$p = 8;
PPSMA.ParameterTree._ppstreE_VERTSCROLLBAR_WIDTH$p = 30;
PPSMA.ParameterTree._ppS_TREE_ITEM_UNCHECKED$p = 'ms-bitree-item-unchecked';
PPSMA.ParameterTree._ppS_TREE_CANCEL$p = 'ms-bitree-cancel';
PPSMA.ParameterTree._ppS_TREE_ITEM_CHECKED$p = 'ms-bitree-item-checked';
PPSMA.ParameterTree._ppS_TREE_ITEM_CHECKED_SINGLESEL$p = 'ms-bitree-item-checked-singlesel';
PPSMA.ParameterTree._ppS_TREE_EXPANDED$p = 'ms-bitree-expanded';
PPSMA.ParameterTree._ppS_TREE_COLLAPSED$p = 'ms-bitree-collapsed';
PPSMA.ParameterTree._ppS_TREE_NODE_TEXT$p = 'ms-bitree-node-text';
PPSMA.ParameterTree._ppS_TREE_NODE_TEXT_BOLD$p = 'ms-bitree-node-text-bold';
PPSMA.ParameterTree._ppS_TREE_LAYER3$p = 'ms-bitree-layer3';
PPSMA.ParameterTree._ppS_TREE_ITEM_DETAIL$p = 'ms-bitree-item-detail';
PPSMA.ParameterTree._ppS_TREE_0001$p = 'ms-bitree-0001';
PPSMA.ParameterTree._ppS_TREE_0002$p = 'ms-bitree-0002';
PPSMA.ParameterTree._pT_THROBBER_DIV_ID$p = 'ptSearchThrobber';
PPSMA.ParameterTree._pT_SEARCHHIGHLIGHT$p = 'ms-bitree-searchhighlight';
PPSMA.ParameterTree._ppS_TREE_NODE_TEXT_NOTFOUND$p = 'ms-bitree-node-text-notfound';
PPSMA.ParameterTree._pT_L2_CN$p = 'ms-bitree-layer2';
PPSMA.ParameterTree._pT_L3_CN$p = 'ms-bitree-layer3';
PPSMA.ParameterTree._pT_L2S_CN$p = 'ms-bitree-layer2search';
PPSMA.ParameterTree._pT_EXALL_WAIT$p = 'ms-bifilter-expallwait';
PPSMA.ParameterTree._pT_EXALL_WAIT_LAYOUT$p = 'ms-bifilter-expallwaitinner';
PPSMA.ParameterTree._pT_EXALL_WAIT_IMG$p = 'ms-bifilter-expallwaitimage';
PPSMA.ParameterTree._pT_EXALL_WAIT_STOP$p = 'ms-bifilter-expallwaitstop';
PPSMA.ParameterTree._pT_L3S_CN$p = 'ms-bitree-layer3search';
PPSMA.ParameterTree._sO_SELECTALL$p = 1;
PPSMA.ParameterTree._sO_CLEARALL$p = 2;

function pps_TI_calendar_initialize ( srcID, targetControlId, proxyID, parameterUniqueName, strSelectedDate, strActiveDate )
{ULSpVC:;
	var ccD;
	ccD  =	"<div id=\"" + srcID + "_Header\"><span>&nbsp;</span></div>";
	ccD +=	"<div id=\"" + srcID + "_Calendar\" style=\"visibility: hidden; display: block;float:left;position: fixed;\"></div>";
	ccD +=	"<div id=\"" + srcID + "_Years\" style=\"visibility: hidden; display: block;float:left;position: fixed;\"></div>";
	
	var control = document.getElementById( srcID );
	control.innerHTML = ccD;

	var state = pps_TI_calendar_loadState( srcID );

	state[0] = srcID; // srcID
	state[1] = targetControlId; // targetControlId
	state[2] = proxyID; // proxyID
	state[3] = parameterUniqueName; // parameterUniqueName
	state[4] = null; // reserved
	state[5] = null; // activeDate
	state[6] = null; // selectedDate
	state[7] = 0; // visibility

	pps_TI_calendar_saveState( srcID, state );
	var selectedDate = pps_TI_calendar_parseShortDate( strSelectedDate );
	var activeDate = pps_TI_calendar_parseShortDate( strActiveDate );
	pps_TI_calendar_render( srcID, selectedDate, activeDate );
}
function pps_TI_calendar_render ( srcID, selectedDate, activeDate )
{ULSpVC:;
    var i; var j; var C; var k = 0;

    if (window.event)
        window.event.cancelBubble = true;
	
	var state = pps_TI_calendar_loadState( srcID );
		
	var oWD = new pps_TI_calendar_oWeekDays();

	// Active Date (date currently displayed)
	if ( activeDate == "" || !activeDate )
	{
		activeDate = new Date();

	} else {
		activeDate = new Date( activeDate );
	}
	
	var oAM = new pps_TI_calendar_oActiveMonth( activeDate );
	var oRD = new Date( oAM.refDate );
	oRD.setDate( 1 );

	var sCDS = ( oAM.refYear );

	// Selected Date
	if ( selectedDate == "" || !selectedDate )
	{
		selectedDate = new Date();
	} else {
		selectedDate = new Date( selectedDate );
	}

	C = "<table id=\"" + srcID + "_CalendarTable\" border=\"0\" class=\"ms-bicalendarTable\"";
	C += " cellpadding=\"1\" cellspacing=\"0\">";
	C += "<tr><td align=\"center\">";
	C += "&nbsp;<a ";
	C += "href=\"javascript:pps_TI_calendar_render('";
	C += ( srcID + "','" + selectedDate + "','" + pps_TI_calendar_incMonth( oRD , -1 ) );
	C += "');pps_TI_calendar_toggle('" + srcID + "');\">&#x25C4;</a></td><td colspan=\"5\" align=\"center\" valign=\"bottom\">";

	C += "<span>";
	if (pps_TI_calendar_isYearFirst()) {
	    C += "<a ";
	    C += "href=\"javascript:pps_TI_calendar_browseYear('";
	    C += (srcID + "','" + selectedDate);
	    C += "');pps_TI_calendar_toggle('" + srcID + "',2);\">";
	    C += oAM.refYear + "</a>" + "&nbsp;";
	    C += (oAM.monthName);	    	
	}
	else {
	    C += (oAM.monthName + "&nbsp;");
	    C += "<a ";
	    C += "href=\"javascript:pps_TI_calendar_browseYear('";
	    C += (srcID + "','" + selectedDate);
	    C += "');pps_TI_calendar_toggle('" + srcID + "',2);\">";
	    C += oAM.refYear + "</a>";
	}

	C += "</span></td><td align=\"center\">";
	C += "<a ";
	C += "href=\"javascript:pps_TI_calendar_render('";
	C += ( srcID + "','" + selectedDate + "','" + pps_TI_calendar_incMonth( oRD , 1 ) );
	C += "');pps_TI_calendar_toggle('" + srcID + "');\">&#x25BA;</a>&nbsp;";
	C += "</td></tr>";
	C += "<tr>";
	for ( i = 0; i < 7; i++ )
	{
		C += "<td align=\"center\">";
		C += "<span>";
		C += oWD.weekDay[i].dayLetter;
		C += "</span></td>";
	}
	C += "</tr>";

	var bEnd = 0; 
	var currentDate = new Date();

	for ( i = 0; i < 6 && 0 == bEnd; i++ ){
		C += "<tr>";
		for ( j = 0; j < 7; j++ ){
			k = (j + (i * 7));
			C += "<td align=\"center\" valign=\"middle\"";

			var sD = ( (k - oAM.startDay) + 1 );
			if( oAM.startDay <= k && k - oAM.startDay < oAM.monthDayCount )
			{
				if( pps_TI_calendar_getShortDate( pps_TI_calendar_setDate( oAM.refDate, sD ) ) != pps_TI_calendar_getShortDate( selectedDate ) )
				{
					C += "class=\"ms-bicalendarDateCell\"";
					C += " onmouseover=\"this.className='ms-bicalendarDateCellOver';\" onmouseout=\"this.className='ms-bicalendarDateCell';\" ";
				} else {
					C += "class=\"ms-bicalendarDateCellSelected\"";
					C += " onmouseover=\"this.className='ms-bicalendarDateCellSelectedOver';\" onmouseout=\"this.className='ms-bicalendarDateCellSelected';\" ";
				}					
				
				C += "onclick=\"pps_TI_calendar_render('";
				C += ( srcID + "','" + pps_TI_calendar_setDate( oAM.refDate, sD ) + "','" + pps_TI_calendar_setDate( oAM.refDate, sD ) );
				C += "');\">";
				if ( pps_TI_calendar_getShortDate( currentDate ) == pps_TI_calendar_getShortDate( pps_TI_calendar_setDate( activeDate, sD ) ) ) 
				{
				    C += "<span>";
				} else {
				    C += "<span>";
                }
				C += "<a href=\"javascript:pps_TI_calendar_render('";
				C += (srcID + "','" + pps_TI_calendar_setDate(oAM.refDate, sD) + "','" + pps_TI_calendar_setDate(oAM.refDate, sD));
				C += "');pps_TI_calendar_toggle('" + srcID + "');\">";
				C += sD;
				C += "</a>";
                C += "</span>";				
				if (k + 1 == oAM.monthDayCount + oAM.startDay) bEnd = 1;
			} else { C += "class=\"ms-bicalendarDateCellDisabled\">"; }
			C += "</td>";
		}
		C += "</tr>";
	}
	C += "<tr><td valign=\"middle\" align=\"center\" colspan=\"7\" ";
	C += ">";

	C += "<a ";
	C += " href=\"javascript:pps_TI_calendar_render('";
	C += ( srcID + "','" + currentDate + "','" + currentDate );
	C += "');\">";
	C += oWD.today.dayName;
	C += "</a>&nbsp;</td></tr></table>";

	var calendar = document.getElementById( srcID + "_Calendar" );
	calendar.innerHTML = C; 

	var CC;
	CC = "<table id=\"" + srcID + "_CalendarHeader\" border=\"0\"";
	CC += " cellpadding=\"1\" cellspacing=\"0\"\>";
	CC += "<tr><td>";
	CC += "<a href=\"javascript://\" onclick=\"pps_TI_calendar_toggle_onclick('" + srcID + "',event);\">";
	
	CC += "<span>"; 
	CC += pps_TI_calendar_getFormattedDate( selectedDate );
	CC += "</span></a></td>";
	CC += "<td id=\"" + srcID + "_Toggle\" align=\"right\"  class=\"ms-bicalendarToggleDown\" onclick=\"pps_TI_calendar_toggle_onclick('" + srcID + "',event);\"></td>";
	CC += "</td></tr></table>";
	CC += "<iframe id=\"" + srcID + "_CalendarIFrame\" src=\"javascript:false\" style=\"display:none;width:0;height:0;position:fixed;left:0;top:0;filter:'progid:DXImageTransform.Microsoft.Alpha(style=0, opacity=0)'z-index:9\" scrolling=\"no\" frameBorder=\"0\" ></iframe>";

	var header = document.getElementById( srcID + "_Header" );
	header.innerHTML = CC;

	var previousSelectedDate = state[6];
	state[5] = activeDate;
	state[6] = selectedDate;
	pps_TI_calendar_saveState( srcID, state );

	if( !previousSelectedDate || 
		pps_TI_calendar_getShortDate( previousSelectedDate ) != pps_TI_calendar_getShortDate( selectedDate ) ) 
	{
	    if (previousSelectedDate == null)
	    {
	        pps_TI_calendar_setCurrentSelection( srcID );
	    }
	    else
	    {
		    pps_TI_calendar_selectionChanged( srcID );
		}
	}
	if(!window.pps_TI_calendar_event) {	
		window.pps_TI_calendar_event = Function.createDelegate(this,pps_TI_calendar_body_click);
        Sys.UI.DomEvent.addHandler(document.body, 'click', window.pps_TI_calendar_event);
	}	
}
function pps_TI_calendar_toggle_onclick(srcID,e)
{ULSpVC:;
    pps_TI_calendar_toggle(srcID);

	if (window.event)
	    window.event.cancelBubble = true;
	else if (e.stopPropagation) 
	    e.stopPropagation();
}
function pps_TI_calendar_body_click(e)
{ULSpVC:;
    var srcID;
    if(window.pps_TI_calendar_state) {
        for (srcID in window.pps_TI_calendar_state) {
	        var state = pps_TI_calendar_loadState( srcID );
            if (state[7] == 1) {
                pps_TI_calendar_toggle(state[0]);   
            } 
        }
    }
}
function pps_TI_calendar_toggle ( srcID, status )
{ULSpVC:;
	var state = pps_TI_calendar_loadState( srcID );
	var calendar = document.getElementById( srcID + "_Calendar" );
	var years = document.getElementById( srcID + "_Years" );
	var toggle = document.getElementById(srcID + "_Toggle");
	var iframe = document.getElementById(srcID + "_CalendarIFrame");
	if (!status) { var status = (-1); }

	if ( status == 1 ) {
	    iframe.style.display = "block";
	    iframe.style.width = calendar.offsetWidth + 2 + "px"; //Frame width must equal calendar element plus shadow
	    iframe.style.height = calendar.offsetHeight + 2 + "px"; //Frame height must equal calendar element plus shadow
	    iframe.style.left = getStyle(calendar, "left");
	    iframe.style.top = getStyle(calendar, "top");
	    iframe.style.zIndex = "8";
	    calendar.style.visibility = "visible";
		calendar.style.zIndex = "9";
		years.style.visibility = "hidden";
		years.style.zIndex = "0";
		state[7] = 1;
		pps_TI_calendar_saveState( srcID, state );
    } else if (status == 2) {
	    iframe.style.display = "block";
	    iframe.style.width = years.offsetWidth + 2 + "px"; //Frame width must equal years element plus shadow
	    iframe.style.height = years.offsetHeight + 2 + "px"; //Frame height must equal years element plus shadow
	    iframe.style.left = getStyle(years, "left");
	    iframe.style.top = getStyle(years, "top");
	    iframe.style.zIndex = "8";
		calendar.style.visibility = "hidden";
		calendar.style.zIndex = "0";
		years.style.visibility = "visible";
		years.style.zIndex = "9";
		state[7] = 1;
		pps_TI_calendar_saveState( srcID, state );
	} else if ( state[7] > 0 ) {
	    iframe.style.display = "none";
	    calendar.style.visibility = "hidden";
		calendar.style.zIndex = "0";
		years.style.visibility = "hidden";
		years.style.zIndex = "0";
		state[7] = 0;
		pps_TI_calendar_saveState( srcID, state );
	} else {
	    iframe.style.display = "block";
	    iframe.style.width = calendar.offsetWidth + 2 + "px"; //Frame width must equal calendar element plus shadow
	    iframe.style.height = calendar.offsetHeight + 2 + "px"; //Frame height must equal calendar element plus shadow
	    iframe.style.left = getStyle(calendar, "left");
	    iframe.style.top = getStyle(calendar, "top");
	    iframe.style.zIndex = "8";
	    calendar.style.visibility = "visible";
		calendar.style.zIndex = "9";
		years.style.visibility = "hidden";
		years.style.zIndex = "0";
		state[7] = 1;
		pps_TI_calendar_saveState( srcID, state );
	}
}

function pps_TI_calendar_browseYear ( srcID, selectedDate )
{ULSpVC:;
	var sD = new Date( selectedDate );
	
	var state = pps_TI_calendar_loadState( srcID );
	var calendar = document.getElementById( srcID + "_Calendar" );
	var years = document.getElementById( srcID + "_Years" );
	var oAM = new pps_TI_calendar_oActiveMonth( selectedDate );

	var YL;
	YL  = "<div id=\"" + srcID + "_CalendarYears\">";
	YL += "<table class=\"ms-bicalendarYears\" cellpadding=\"1\" cellspacing=\"0\">";
	YL += "<tr><td align=\"center\" valign=\"bottom\">";
	YL += "<span>";
	if (pps_TI_calendar_isYearFirst()) {
	    YL += "<a ";
	    YL += "href=\"javascript:pps_TI_calendar_toggle('" + srcID + "',1);\">";
	    YL += oAM.refYear + "</a>" + "&nbsp;";
	    YL += (oAM.monthName);
	}
	else {
	    YL += (oAM.monthName + "&nbsp;");
	    YL += "<a ";
	    YL += "href=\"javascript:pps_TI_calendar_toggle('" + srcID + "',1);\">";
	    YL += oAM.refYear + "</a>";
	}
	
	YL += "</span></td></tr>";

	var cY =  pps_TI_calendar_getYear( sD );
	var vY = ( pps_TI_calendar_getYear( sD ) - 3 );
	var maxY = ( pps_TI_calendar_getYear( sD ) + 3 );

	for ( vY; vY <= maxY; vY++ )
	{
		YL += "<tr><td";
		YL += " class=\"ms-bicalendarYearCell\"";
		YL += " onmouseover=\"this.className='ms-bicalendarYearCellOver';\" onmouseout=\"this.className='ms-bicalendarYearCell';\"";
		YL += " onclick=\"pps_TI_calendar_render('";
		YL += ( srcID + "','" + pps_TI_calendar_incMonth( selectedDate, (vY - cY) * 12) + "','" + pps_TI_calendar_incMonth( selectedDate, (vY - cY) * 12 ) );
		YL += "');pps_TI_calendar_toggle('" + srcID + "',0);\">";

		if (vY != cY)
		{
			YL += "<span>";
		} else {
			YL += "<span>";

        }
        YL += "<a ";
        YL += "href=\"javascript:pps_TI_calendar_render('";
        YL += (srcID + "','" + pps_TI_calendar_incMonth(selectedDate, (vY - cY) * 12) + "','" + pps_TI_calendar_incMonth(selectedDate, (vY - cY) * 12));
        YL += "');\">";
        YL += vY;           
        YL += "</a></span><br/>";
		YL += "</td></tr>";
	}
	YL += "</table></div>";

	var calendar = document.getElementById( srcID + "_Calendar" );
	years.innerHTML = YL; 
}
function pps_TI_calendar_selectionChanged ( srcID )
{ULSpVC:;
	var state = pps_TI_calendar_loadState( srcID );
	var strDate = pps_TI_calendar_getShortDate(state[6]);
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	if (minutes < 10)
	    minutes = "0" + minutes;
	strDate = strDate + " " + hours + ":" + minutes;
	var selections = [];
	Array.add(selections, strDate);
	PPSMA.ClientConnectionManager.get_instance().userUpdateFilter({ 'ClientId': state[1], 'Name': state[3], 'Selections': selections });
}
function pps_TI_calendar_setCurrentSelection ( srcID )
{ULSpVC:;
	var state = pps_TI_calendar_loadState( srcID );
	var strDate = pps_TI_calendar_getShortDate(state[6]);	
}
function pps_TI_calendar_loadState ( srcID )
{ULSpVC:;
	if(!window.pps_TI_calendar_state) {
		window.pps_TI_calendar_state = new Array();
	}
	if(!window.pps_TI_calendar_state[srcID]) {
		window.pps_TI_calendar_state[srcID] = new Array();
	}
	return window.pps_TI_calendar_state[srcID];
}
function pps_TI_calendar_saveState ( srcID, state )
{ULSpVC:;
	if(!window.pps_TI_calendar_state) {
		window.pps_TI_calendar_state = new Array();
	}
	window.pps_TI_calendar_state[srcID] = state;
}
function pps_TI_calendar_setDate ( oDate, strDay )
{ULSpVC:;
	var xD = new Date( oDate );
	xD.setDate( strDay );
	return xD.toString();
}
function pps_TI_calendar_getMonthDayCount( oDate )
{ULSpVC:;
	var oD = new Date( oDate ); 
	var max = 2;
	do 
	{
		oD.setDate( max );
		if ( 1 == oD.getDate().valueOf() )
		{
			break;
		} else {
			max++;
		}
	}
	while ( max < 36 )
	return max - 1;
}
function pps_TI_calendar_incMonth ( oDate, inc )
{ULSpVC:;
	var oI = new Date( oDate );var cM = oI.getMonth();var cD = oI.getDate();
	oI.setMonth( (cM + inc), cD );
	return oI;
}
function pps_TI_calendar_oActiveMonth ( strRefDate )
{ULSpVC:;
	this.refDate = new Date( strRefDate );
	
	var oYM = new pps_TI_calendar_oYearMonths();

	this.refYear = this.refDate.getFullYear().valueOf();
	this.refMonthNumber = this.refDate.getMonth().valueOf();
	this.monthName = oYM.yearMonth[this.refMonthNumber].monthName;
	this.monthAbv = oYM.yearMonth[this.refMonthNumber].monthAbv;

	var cM = new Date();
	cM.setDate( 1 );
	cM.setMonth(this.refMonthNumber);
	cM.setFullYear(this.refYear);

	this.fullDate = ( this.monthAbv + "&nbsp;" + this.refDate.getDate() + ",&nbsp;" + this.refYear );
	this.startDay = cM.getDay() - pps_TI_calendar_iFirstDayOfWeek();
	if (this.startDay < 0)
	    this.startDay += 7;
	this.monthDayCount = pps_TI_calendar_getMonthDayCount( cM.toString() );
}
function pps_TI_calendar_getFormattedDate( oDate )
{ULSpVC:;
	var fD = new Date( oDate );
	var oYM = new pps_TI_calendar_oYearMonths();
	return pps_TI_calendar_formatShortDate(fD, pps_TI_calendar_getShortDatePattern());
}
function pps_TI_calendar_getYear( oDate )
{ULSpVC:;
	var fD = new Date( oDate );
	
	return fD.getFullYear();
}
function pps_TI_calendar_getShortDate ( oDate )
{ULSpVC:;
	var sD = new Date( oDate );
	var month = (sD.getMonth() + 1);
	return sD.getFullYear() + "/" + month + "/" + sD.getDate();
}
function pps_TI_calendar_parseShortDate( sDate )
{ULSpVC:;
	try
	{
		sDate = sDate.split(" ")[0];
		var oDateParts = sDate.split("/");
		if (oDateParts.length != 3)
		{
		    throw new Error();
		}
		return new Date(oDateParts[0], oDateParts[1] - 1, oDateParts[2], 0, 0, 0, 0);
	}
	catch (e)
	{
	    throw new Error("Invalid short date: " + sDate);
	}
}
function pps_TI_calendar_oDay (vDayID, vDayName, vDayAbv, vDayLetter)
{ULSpVC:;
	this.dayNumber = vDayID;
	this.dayName = vDayName;
	this.dayAbv = vDayAbv;
	this.dayLetter = vDayLetter;
}
function pps_TI_calendar_oMonth (vMonthID, vMonthName, vMonthAbv)
{ULSpVC:;
	this.monthNumber = vMonthID;
	this.monthName = vMonthName;
	this.monthAbv = vMonthAbv;
}

function pps_TI_calendar_leadingZero(x) 
{ULSpVC:;
    return (x < 0 || x > 9 ? "" : "0") + x;
}
function pps_TI_calendar_isYearFirst() {ULSpVC:;
    var shortDateFormat = pps_TI_calendar_getShortDatePattern();
    var i = 0;
    var c = "";
    while (i < shortDateFormat.length) 
    {
        c = shortDateFormat.charAt(i);
        if (c == "y")
            return true;
        else if ((c == "M") || (c == "d"))
            break;
    }
    return false;    
}
function pps_TI_calendar_formatShortDate(date, format) 
{ULSpVC:;
    var shortDateFormat = format + "";
    var returnValue = "";
    var y = date.getYear() + "";
    var M = date.getMonth() + 1;
    var d = date.getDate();
    var yyyy, yy, MMM, MM, dd;
    var segments = new Object();
    if (y.length < 4) { y = "" + (y - 0 + 1900); }
    segments["y"] = "" + y;
    segments["yyyy"] = y;
    segments["yy"] = y.substring(2, 4);
    segments["M"] = M;
    segments["MM"] = pps_TI_calendar_leadingZero(M);
    segments["d"] = d;
    segments["dd"] = pps_TI_calendar_leadingZero(d);
    
    var i = 0;
    var segment = "";
    var c = "";    
    while (i < shortDateFormat.length) {
        c = shortDateFormat.charAt(i);
        segment = "";
        while ((shortDateFormat.charAt(i) == c) && (i < shortDateFormat.length)) {
            segment += shortDateFormat.charAt(i++);
        }
        if (segments[segment] != null) 
        {
            returnValue = returnValue + segments[segment]; 
        }
        else 
        {
            returnValue = returnValue + segment; 
        }
    }
    return returnValue;
}

function isNullOrUndefined(o) 
{ULSpVC:;
    return (o === null) || (o === undefined);
}

function isNullOrEmpty(o) 
{ULSpVC:;
    return !o || !o.length;
}

function isNullUndefinedOrEmpty(o) 
{ULSpVC:;
    return (o === null) || (o === undefined) || (!o.length);
}

function isStandardsMode()
{ULSpVC:;
	return (document.compatMode == "CSS1Compat");
}

function isIE()
{ULSpVC:;
	return (navigator.appName == "Microsoft Internet Explorer");
}

function isChrome()
{ULSpVC:;
	return (navigator.userAgent.toLowerCase().indexOf('chrome') > -1);
}

function innerText(o)
{ULSpVC:;
	if (o.innerText != undefined)
		return o.innerText;
	else
		return o.textContent;
}

function autoCompleteSaveForm(theForm)
{ULSpVC:;
	if(!isIE())
		return;
	if (theForm)
		window.external.AutoCompleteSaveForm(theForm);
}

if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
if (typeof NotifyScriptLoadedAndExecuteWaitingJobs != "undefined")
    NotifyScriptLoadedAndExecuteWaitingJobs("parameters.js");
