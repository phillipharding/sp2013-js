function ULSpEN(){var o=new Object;o.ULSTeamName="Windows SharePoint Services 4";o.ULSFileName="CUI.debug.js";return o;}
if (typeof(IEnumerator) == "undefined") {
  var IEnumerator = function() {};
  IEnumerator.prototype = {get_current: null, moveNext: null, reset: null};
  IEnumerator.registerInterface("IEnumerator");
}

if (typeof(IEnumerable) == "undefined") {
  var IEnumerable = function() {};
  IEnumerable.prototype = {getEnumerator: null};
  IEnumerable.registerInterface("IEnumerable");
}

Type.registerNamespace('CUI');
Type.registerNamespace('CUI.Page');
if (typeof(CUI.Page.PageComponent) == "undefined")
{
  CUI.Page.ICommandHandler=function(){};
  CUI.Page.ICommandHandler.registerInterface('CUI.Page.ICommandHandler');
  CUI.Page.PageComponent=function(){};
  CUI.Page.PageComponent.prototype={init:function(){},getGlobalCommands:function(){ULSpEN:;return null;},getFocusedCommands:function(){ULSpEN:;return null;},handleCommand:function(commandId,properties,sequence){ULSpEN:;return false;},canHandleCommand:function(commandId){ULSpEN:;return false;},isFocusable:function(){ULSpEN:;return false;},receiveFocus:function(){ULSpEN:;return false;},yieldFocus:function(){ULSpEN:;return true;},getId:function(){ULSpEN:;return'PageComponent';}};
  CUI.Page.PageComponent.registerClass('CUI.Page.PageComponent',null,CUI.Page.ICommandHandler);
}


Type.registerNamespace('CUI');

CUI.IRootBuildClient = function() {}
CUI.IRootBuildClient.registerInterface('CUI.IRootBuildClient');


CUI.CommandType = function() {}
CUI.CommandType.prototype = {
    general: 1, 
    tabSelection: 2, 
    optionSelection: 3, 
    menuCreation: 4, 
    preview: 5, 
    previewRevert: 6, 
    optionPreview: 7, 
    optionPreviewRevert: 8, 
    ignoredByMenu: 9, 
    menuClose: 10, 
    rootEvent: 11
}
CUI.CommandType.registerEnum('CUI.CommandType', false);


CUI.ISelectableControl = function() {}
CUI.ISelectableControl.registerInterface('CUI.ISelectableControl');


CUI.QueryRecord = function CUI_QueryRecord() {}


CUI.DataQueryType = function() {}
CUI.DataQueryType.prototype = {
    none: 0, 
    all: 1, 
    ribbonVisibleTabDeep: 2, 
    ribbonShallow: 3, 
    ribbonTab: 4, 
    root: 5
}
CUI.DataQueryType.registerEnum('CUI.DataQueryType', false);


CUI.IDataSource = function() {}
CUI.IDataSource.registerInterface('CUI.IDataSource');


CUI.GalleryElementDimensions = function() {}
CUI.GalleryElementDimensions.prototype = {
    size16by16: 1, 
    size32by32: 2, 
    size48by48: 3, 
    size64by48: 4, 
    size72by96: 5, 
    size96by72: 6, 
    size96by96: 7, 
    size128by128: 8, 
    size190by30: 9, 
    size190by40: 10, 
    size190by50: 11, 
    size190by60: 12, 
    sizeCustom: 13
}
CUI.GalleryElementDimensions.registerEnum('CUI.GalleryElementDimensions', false);


CUI.IMenuItem = function() {}
CUI.IMenuItem.registerInterface('CUI.IMenuItem');


CUI.ContextualColor = function() {}
CUI.ContextualColor.prototype = {
    none: 0, 
    darkBlue: 1, 
    lightBlue: 2, 
    teal: 3, 
    orange: 4, 
    green: 5, 
    magenta: 6, 
    yellow: 7, 
    purple: 8
}
CUI.ContextualColor.registerEnum('CUI.ContextualColor', false);


CUI.DeclarativeTemplateBuildContext = function CUI_DeclarativeTemplateBuildContext() {}


CUI.IRootUser = function() {}
CUI.IRootUser.registerInterface('CUI.IRootUser');


CUI.CommandInformation = function CUI_CommandInformation() {ULSpEN:;
    this.CommandId = null;
    this.RootId = null;
    this.TabId = null;
    this.RootType = null;
    this.RootLocation = null;
}


CUI.IModalController = function() {}
CUI.IModalController.registerInterface('CUI.IModalController');


CUI.Direction = function() {}
CUI.Direction.prototype = {
    LTR: 0, 
    RTL: 1
}
CUI.Direction.registerEnum('CUI.Direction', false);


CUI.DisabledCommandInfoProperties = function CUI_DisabledCommandInfoProperties() {ULSpEN:;
    this.Description = null;
    this.Title = null;
    this.Icon = null;
    this.IconClass = null;
    this.IconTop = null;
    this.IconLeft = null;
    this.HelpKeyWord = null;
}


CUI.ImgContainerType = function() {}
CUI.ImgContainerType.prototype = {
    div: 1, 
    span: 2, 
    anchor: 3
}
CUI.ImgContainerType.registerEnum('CUI.ImgContainerType', false);


CUI.ImgContainerSize = function() {}
CUI.ImgContainerSize.prototype = {
    none: 0, 
    size5by3: 1, 
    size13by13: 2, 
    size16by16: 3, 
    size32by32: 4, 
    size48by48: 5, 
    size64by48: 6, 
    size72by96: 7, 
    size96by72: 8, 
    size96by96: 9, 
    size56by24: 10, 
    size2by16: 11
}
CUI.ImgContainerSize.registerEnum('CUI.ImgContainerSize', false);


CUI.PMarker = function() {}
CUI.PMarker.prototype = {
    beginSession: 1, 
    endSession: 2, 
    perfCUIRibbonInitStart: 7103, 
    perfCUIRibbonInitPercvdEnd: 7104, 
    perfCUIRibbonTabSwitchWarmStart: 7105, 
    perfCUIRibbonTabSwitchWarmPercvdEnd: 7106, 
    perfCUIRibbonTabSwitchWarmEnd: 7107, 
    perfCUIRibbonCompleteConstruction: 7108, 
    perfCUIRibbonQueryDataStart: 7109, 
    perfCUIRibbonQueryDataEnd: 7110, 
    perfWSSWikiUpdatePanelStart: 7111, 
    perfWSSWikiUpdatePanelEnd: 7112, 
    perfWSSWebPartComponentMouseClickStart: 7186, 
    perfWSSWebPartComponentMouseClickEnd: 7187, 
    perfCUIAddAndPositionBackFrameStart: 7188, 
    perfCUIAddAndPositionBackFrameEnd: 7189, 
    perfCUIFlyoutAnchorOnClickStart: 7190, 
    perfCUIFlyoutAnchorOnClickEnd: 7191, 
    perfCUIDropDownOnArrowButtonClickStart: 7192, 
    perfCUIDropDownOnArrowButtonClickEnd: 7193, 
    perfWSSBreadcrumbStart: 7386, 
    perfWSSBreadcrumbEnd: 7387, 
    perfWSSSelectOrDeselectAllStart: 7388, 
    perfWSSSelectOrDeselectAllEnd: 7389, 
    perfWSSSelectItemStart: 7390, 
    perfWSSSelectItemEnd: 7391, 
    perfWSSFilterSortStart: 7392, 
    perfWSSFilterSortEnd: 7393, 
    perfWSSMMUOpenStart: 7394, 
    perfWSSMMUOpenEnd: 7395, 
    perfWSSECBClickStart: 7396, 
    perfWSSECBClickEnd: 7397, 
    perfSPSSaveStatusNoteBegin: 7634, 
    perfSPSSaveStatusNoteEnd: 7635, 
    perfWSSCalendarRenderStart: 7644, 
    perfWSSCalendarRenderEnd: 7645, 
    perfPLTxInstrumentStart: 7698, 
    perfPLTxInstrumentEnd: 7699, 
    perfCUIRibbonButtonOnClickStart: 7700, 
    perfCUIRibbonButtonOnClickEnd: 7701, 
    perfCUIRibbonInsertTableOnClickStart: 7702, 
    perfCUIRibbonInsertTableOnClickEnd: 7703, 
    perfCUIRibbonToggleButtonOnClickStart: 7704, 
    perfCUIRibbonToggleButtonOnClickEnd: 7705, 
    perfWSSDialogShow: 7706, 
    perfWSSDialogClosed: 7707, 
    perfWSSRTEDialogOnLoadEnd: 7708, 
    perfWSSRTEDialogOnOkButtonClickStart: 7709, 
    perfWSSRTEAutoCompleteSetResultsStart: 7710, 
    perfWSSRTEAutoCompleteSetResultsEnd: 7711, 
    perfCUIRibbonEditWikiPageStart: 7735, 
    perfCUIRibbonEditWikiPageEnd: 7736, 
    perfSPCalloutOpenStart: 7901, 
    perfSPCalloutOpenEnd: 7902, 
    perfSPCalloutCloseStart: 7903, 
    perfSPCalloutCloseEnd: 7904, 
    perfSPCreateAjaxMenuForCalloutStart: 7905, 
    perfSPCreateAjaxMenuForCalloutEnd: 7906, 
    perfSPCreateAjaxMenuForCalloutCallbackStart: 7907, 
    perfSPCreateAjaxMenuForCalloutCallbackEnd: 7908, 
    perfSPMyDocsExpCollHeadersStart: 7909, 
    perfSPMyDocsExpCollHeadersEnd: 7910, 
    perfSPMyDocsOnOpenedCallbackStart: 7911, 
    perfSPMyDocsOnOpenedCallbackEnd: 7912, 
    perfSPMyDocsRenderSharedWithStart: 7913, 
    perfSPMyDocsRenderSharedWithEnd: 7914, 
    perfDocMoveIsValidDestinationStart: 8507, 
    perfDocMoveIsValidDestinationEnd: 8508, 
    perfDocMoveGetDocumentUrlsStart: 8509, 
    perfDocMoveGetDocumentUrlsEnd: 8510, 
    perfDocMoveMoveDocumentStart: 8511, 
    perfDocMoveMoveDocumentEnd: 8512, 
    perfDocMoveCopyDocumentStart: 8513, 
    perfDocMoveCopyDocumentEnd: 8514, 
    perfDocMoveVerifyDestinationAsyncBegin: 8515, 
    perfDocMoveVerifyDestinationAsyncEnd: 8516, 
    perfDocMoveGetDocumentUrlsAsyncBegin: 8517, 
    perfDocMoveGetDocumentUrlsAsyncEnd: 8518, 
    perfDocMoveMoveDocumentAsyncBegin: 8519, 
    perfDocMoveMoveDocumentAsyncEnd: 8520, 
    perfDocMoveMoveSelectedDocsAsyncBegin: 8521, 
    perfDocMoveMoveSelectedDocsAsyncEnd: 8522, 
    perfSPMyDocsSharedWithMeRefreshViewStart: 9007, 
    perfSPMyDocsSharedWithMeRefreshViewEnd: 9008, 
    perfSPMyDocsSharingHintRefreshStart: 9009, 
    perfSPMyDocsSharingHintRefreshEnd: 9010, 
    perfDocMoveCreateDocumentFoldersAsyncBegin: 9096, 
    perfDocMoveCreateDocumentFoldersAsyncEnd: 9097, 
    perfDocMoveGetDocumentFoldersAsyncBegin: 9098, 
    perfDocMoveGetDocumentFoldersAsyncEnd: 9099, 
    perfSPFollowContentBegin: 9206, 
    perfSPFollowDocEnd: 9207, 
    perfSPFollowSiteEnd: 9208, 
    perfSPStopFollowContentBegin: 9209, 
    perfSPStopFollowContentEnd: 9210, 
    perfSPMPUpdateUIStart: 10467, 
    perfSPMPUpdateUIEnd: 10468, 
    perfSPMPUpdateViewToMatchStateEnd: 10469, 
    perfSPMPUpdateViewToMatchStateStart: 10470, 
    perfSPMPListItemSelectionChangedStart: 10471, 
    perfSPMPListItemSelectionChangedEnd: 10472, 
    perfSPMPStartWithDefault: 10473, 
    perfSPMPUpdateUIAndStateStart: 10474, 
    perfSPMPUpdateUIAndStateEnd: 10475
}
CUI.PMarker.registerEnum('CUI.PMarker', false);


CUI.BuildOptions = function CUI_BuildOptions() {
}
CUI.BuildOptions.prototype = {
    lazyMenuInit: false,
    trimmedIds: null,
    attachToDOM: false,
    validateServerRendering: false,
    fixedPositioningEnabled: false,
    dataExtensions: null,
    clientID: null,
    percentPositivePattern: 0,
    decimalSeparator: '.'
}


CUI.BuildContext = function CUI_BuildContext() {
}


CUI.DataNodeWrapper = function CUI_DataNodeWrapper($p0) {
    this.$d_0 = $p0;
}
CUI.DataNodeWrapper.getFirstChildNodeWithName = function CUI_DataNodeWrapper$getFirstChildNodeWithName($p0, $p1) {
    var $v_0 = CUI.DataNodeWrapper.getNodeChildren($p0);
    var $v_1 = $v_0.length;
    var $v_2 = null;
    for (var $v_3 = 0; $v_3 < $v_1; $v_3++) {
        $v_2 = $v_0[$v_3];
        var $v_4 = $v_2.name;
        if ($v_4 === $p1) {
            return $v_2;
        }
    }
    return null;
}
CUI.DataNodeWrapper.getNodeName = function CUI_DataNodeWrapper$getNodeName($p0) {
    return $p0.name;
}
CUI.DataNodeWrapper.getNodeChildren = function CUI_DataNodeWrapper$getNodeChildren($p0) {
    var $v_0 = $p0.children;
    if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
        return CUI.DataNodeWrapper.get_$B7();
    }
    return $v_0;
}
CUI.DataNodeWrapper.get_$B7 = function CUI_DataNodeWrapper$get_$B7() {ULSpEN:;
    if (CUI.ScriptUtility.isNullOrUndefined(CUI.DataNodeWrapper.$5j)) {
        CUI.DataNodeWrapper.$5j = [];
    }
    return CUI.DataNodeWrapper.$5j;
}
CUI.DataNodeWrapper.getNodeAttributes = function CUI_DataNodeWrapper$getNodeAttributes($p0) {
    return $p0.attrs;
}
CUI.DataNodeWrapper.getNodeAttribute = function CUI_DataNodeWrapper$getNodeAttribute($p0, $p1) {
    var $v_0 = $p0.attrs;
    return $v_0[$p1];
}
CUI.DataNodeWrapper.prototype = {
    $d_0: null,
    
    get_node: function CUI_DataNodeWrapper$get_node() {ULSpEN:;
        return this.$d_0;
    },
    set_node: function CUI_DataNodeWrapper$set_node($p0) {
        this.$d_0 = $p0;
        return $p0;
    },
    
    get_name: function CUI_DataNodeWrapper$get_name() {ULSpEN:;
        return CUI.DataNodeWrapper.getNodeName(this.$d_0);
    },
    
    get_children: function CUI_DataNodeWrapper$get_children() {ULSpEN:;
        return CUI.DataNodeWrapper.getNodeChildren(this.$d_0);
    },
    
    get_attributes: function CUI_DataNodeWrapper$get_attributes() {ULSpEN:;
        return CUI.DataNodeWrapper.getNodeAttributes(this.$d_0);
    },
    
    get_hasChildren: function CUI_DataNodeWrapper$get_hasChildren() {ULSpEN:;
        return CUI.DataNodeWrapper.getNodeChildren(this.$d_0).length > 0;
    }
}


CUI.Builder = function CUI_Builder(options, elmPlaceholder, rootBuildClient) {ULSpEN:;
    this.$$d_$B1_0 = Function.createDelegate(this, this.$B1_0);
    this.$$d_$7N_0 = Function.createDelegate(this, this.$7N_0);
    this.$z_0 = options;
    if (CUI.ScriptUtility.isNullOrUndefined(this.$z_0.trimmedIds)) {
        this.$z_0.trimmedIds = {};
    }
    this._elmPlaceholder = elmPlaceholder;
    this.$24_0 = rootBuildClient;
    this.$22_0 = this.$$d_$7N_0;
    $addHandler(window, 'unload', this.$22_0);
}
CUI.Builder.$8Z = function CUI_Builder$$8Z($p0) {
    var $v_0 = CUI.NativeUtility.createXMLDocFromString($p0);
    if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
        return null;
    }
    return CUI.Builder.$Am($v_0);
}
CUI.Builder.$Am = function CUI_Builder$$Am($p0) {
    return eval('(' + CUI.Builder.convertNodeToJSON($p0.documentElement) + ')');
}
CUI.Builder.convertNodeToJSON = function CUI_Builder$convertNodeToJSON(node) {ULSpEN:;
    var $v_0;
    $v_0 = '{';
    $v_0 += '\"name\" : \"';
    $v_0 += CUI.NativeUtility.ecmaScriptStringLiteralEncode(node.nodeName);
    $v_0 += '\",';
    $v_0 += '\"attrs\": {';
    var $v_1 = node.attributes;
    if (!CUI.ScriptUtility.isNullOrUndefined(node.attributes)) {
        var $v_3 = $v_1.length;
        if ($v_3 > 0) {
            var $v_4 = true;
            for (var $v_5 = 0; $v_5 < $v_3; $v_5++) {
                var $v_6 = $v_1.item($v_5);
                if ($v_4) {
                    $v_4 = false;
                }
                else {
                    $v_0 += ',';
                }
                $v_0 += '\"';
                $v_0 += CUI.NativeUtility.ecmaScriptStringLiteralEncode($v_6.name);
                $v_0 += '\"';
                $v_0 += ':\"';
                $v_0 += CUI.NativeUtility.ecmaScriptStringLiteralEncode($v_6.value);
                $v_0 += '\"';
            }
        }
    }
    $v_0 += '}';
    var $v_2 = node.childNodes;
    if ($v_2) {
        var $v_7 = $v_2.length;
        if ($v_7 > 0) {
            $v_0 += ',';
            $v_0 += 'children:[';
            var $v_8 = true;
            for (var $v_9 = 0; $v_9 < $v_7; $v_9++) {
                var $v_A = $v_2[$v_9];
                if ($v_A.nodeName === '#text') {
                    continue;
                }
                if ($v_8) {
                    $v_8 = false;
                }
                else {
                    $v_0 += ',';
                }
                $v_0 += CUI.Builder.convertNodeToJSON($v_A);
            }
            $v_0 += ']';
        }
    }
    $v_0 += '}';
    return $v_0;
}
CUI.Builder.applyDataNodeExtensions = function CUI_Builder$applyDataNodeExtensions(data, extensions) {ULSpEN:;
    var $v_0 = data.attrs;
    if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
        return data;
    }
    var $v_1 = $v_0['Id'];
    var $v_2 = extensions[$v_1];
    if (!CUI.ScriptUtility.isNullOrUndefined($v_2)) {
        var $v_9 = null;
        var $v_A = Number.MAX_VALUE;
        var $v_B = $v_2.length;
        for (var $v_C = 0; $v_C < $v_B; $v_C++) {
            var $v_D = $v_2[$v_C];
            if (!$v_D) {
                return null;
            }
            var $v_E = CUI.DataNodeWrapper.getNodeAttribute($v_D, 'Sequence');
            if (CUI.ScriptUtility.isNullOrUndefined($v_E)) {
                if (CUI.ScriptUtility.isNullOrUndefined($v_9)) {
                    $v_9 = $v_D;
                }
                continue;
            }
            var $v_F = parseInt($v_E);
            if ($v_F < $v_A) {
                $v_9 = $v_D;
                $v_A = $v_F;
            }
        }
        if (!CUI.ScriptUtility.isNullOrUndefined($v_9)) {
            data = $v_9;
        }
    }
    var $v_3 = (data)['children'];
    if (CUI.ScriptUtility.isNullOrUndefined($v_3)) {
        $v_3 = [];
        (data)['children'] = $v_3;
    }
    var $v_4 = [];
    var $v_5 = $v_3.length;
    for (var $v_G = 0; $v_G < $v_5; $v_G++) {
        Array.add($v_4, $v_3[$v_G]);
    }
    var $v_6 = extensions[$v_1 + '._children'];
    if (!CUI.ScriptUtility.isNullOrUndefined($v_6)) {
        var $v_H = $v_6.length;
        for (var $v_I = 0; $v_I < $v_H; $v_I++) {
            Array.add($v_4, $v_6[$v_I]);
        }
        ($v_4).sort(CUI.Builder.$Aj);
    }
    var $v_7 = [];
    var $v_8 = $v_4.length;
    for (var $v_J = 0; $v_J < $v_8; $v_J++) {
        var $v_K = CUI.Builder.applyDataNodeExtensions($v_4[$v_J], extensions);
        if (!CUI.ScriptUtility.isNullOrUndefined($v_K)) {
            Array.add($v_7, $v_K);
        }
    }
    (data)['children'] = $v_7;
    return data;
}
CUI.Builder.$Aj = function CUI_Builder$$Aj($p0, $p1) {
    var $v_0 = CUI.DataNodeWrapper.getNodeAttribute($p0, 'Sequence');
    var $v_1 = CUI.DataNodeWrapper.getNodeAttribute($p1, 'Sequence');
    if (CUI.ScriptUtility.isNullOrUndefined($v_1) && (CUI.ScriptUtility.isNullOrUndefined($v_0))) {
        return 0;
    }
    if (CUI.ScriptUtility.isNullOrUndefined($v_1)) {
        return -1;
    }
    if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
        return 1;
    }
    var $v_2 = parseInt($v_0);
    var $v_3 = parseInt($v_1);
    if ($v_2 < $v_3) {
        return -1;
    }
    else if ($v_2 > $v_3) {
        return 1;
    }
    return 0;
}
CUI.Builder.prototype = {
    $24_0: null,
    $22_0: null,
    
    $7N_0: function CUI_Builder$$7N_0($p0) {
        this.dispose();
    },
    
    $7O_0: function CUI_Builder$$7O_0($p0) {
        $p0.$31_1 = this.$z_0.fixedPositioningEnabled;
    },
    
    dispose: function CUI_Builder$dispose() {ULSpEN:;
        this.$0_0 = null;
        this.$z_0 = null;
        this._elmPlaceholder = null;
        this.$24_0 = null;
        this.$11_0 = null;
        $removeHandler(window, 'unload', this.$22_0);
        this.$22_0 = null;
    },
    
    $0_0: null,
    
    get_root: function CUI_Builder$get_root() {ULSpEN:;
        return this.$0_0;
    },
    set_root: function CUI_Builder$set_root(value) {ULSpEN:;
        this.$0_0 = value;
        return value;
    },
    
    $2Z_0: false,
    
    get_inQuery: function CUI_Builder$get_inQuery() {ULSpEN:;
        return this.$2Z_0;
    },
    set_inQuery: function CUI_Builder$set_inQuery(value) {ULSpEN:;
        this.$2Z_0 = value;
        return value;
    },
    
    $11_0: null,
    
    get_dataSource: function CUI_Builder$get_dataSource() {ULSpEN:;
        return this.$11_0;
    },
    set_dataSource: function CUI_Builder$set_dataSource(value) {ULSpEN:;
        this.$11_0 = value;
        return value;
    },
    
    _elmPlaceholder: null,
    
    get_placeholder: function CUI_Builder$get_placeholder() {ULSpEN:;
        return this._elmPlaceholder;
    },
    
    $z_0: null,
    
    isIdTrimmed: function CUI_Builder$isIdTrimmed(id) {ULSpEN:;
        return this.$z_0.trimmedIds[id];
    },
    
    isNodeTrimmed: function CUI_Builder$isNodeTrimmed(dataNode) {ULSpEN:;
        var $v_0 = CUI.DataNodeWrapper.getNodeAttribute(dataNode, 'Id');
        return this.$z_0.trimmedIds[$v_0];
    },
    
    $4Z_0: function CUI_Builder$$4Z_0($p0, $p1) {
        var $v_0 = null;
        var $v_1 = $p0.name;
        switch ($v_1) {
            case 'ToggleButton':
                $v_0 = this.$Ag_0($p0, $p1);
                break;
            case 'ComboBox':
                $v_0 = this.$AN_0($p0, $p1);
                break;
            case 'DropDown':
                $v_0 = this.$AO_0($p0, $p1);
                break;
            case 'Button':
                $v_0 = this.$AK_0($p0, $p1);
                break;
            case 'SplitButton':
                $v_0 = this.$Ad_0($p0, $p1);
                break;
            case 'FlyoutAnchor':
                $v_0 = this.$AP_0($p0, $p1);
                break;
            case 'GalleryButton':
                $v_0 = this.$8T_0($p0, $p1, null);
                break;
            case 'InsertTable':
                $v_0 = this.$AS_0($p0, $p1);
                break;
            case 'Label':
                $v_0 = this.$AV_0($p0, $p1);
                break;
            case 'MRUSplitButton':
                $v_0 = this.$AX_0($p0, $p1);
                break;
            case 'Spinner':
                $v_0 = this.$Ab_0($p0, $p1);
                break;
            case 'TextBox':
                $v_0 = this.$Af_0($p0, $p1);
                break;
            case 'ColorPicker':
                $v_0 = this.$AM_0($p0, $p1);
                break;
            case 'CheckBox':
                $v_0 = this.$AL_0($p0, $p1);
                break;
            case 'Separator':
                $v_0 = this.$Aa_0($p0, $p1);
                break;
            default:
                var $v_2 = $p0.attrs;
                var $v_3 = $v_2['Classname'];
                if (CUI.ScriptUtility.isNullOrUndefined($v_3)) {
                    throw Error.create('Unable to create Control with tagname: ' + $v_1);
                }
                break;
        }
        return $v_0;
    },
    
    $3B_0: function CUI_Builder$$3B_0($p0, $p1, $p2) {
        var $v_0 = $p0.attrs;
        var $v_1 = this.$0_0.$8f_1($v_0['Id'], $v_0['Title'], $v_0['Description'], $v_0['MaxWidth']);
        if (this.$z_0.lazyMenuInit && $p2) {
            $v_1.$7Z_0(this.$$d_$B1_0, $p0, $p1);
            return $v_1;
        }
        this.$8n_0($v_1, $p0, $p1);
        return $v_1;
    },
    
    $8n_0: function CUI_Builder$$8n_0($p0, $p1, $p2) {
        var $v_0 = CUI.DataNodeWrapper.getNodeChildren($p1);
        var $v_1 = $v_0.length;
        var $v_2 = null;
        for (var $v_3 = 0; $v_3 < $v_1; $v_3++) {
            $v_2 = $v_0[$v_3];
            var $v_4 = $v_2.name;
            if ($v_4 !== 'MenuSection') {
                throw Error.create('Tags with the name: ' + $v_4 + ' cannot be children of Menu tags.');
            }
            if (this.isNodeTrimmed($v_2)) {
                continue;
            }
            var $v_5 = this.$AW_0($v_2, $p2);
            $p0.addChild($v_5);
        }
    },
    
    $B1_0: function CUI_Builder$$B1_0($p0, $p1, $p2) {
        var $v_0 = $p0;
        this.$8n_0($v_0, $p1, $p2);
        $v_0.$7M_0(true);
        return $v_0;
    },
    
    $AW_0: function CUI_Builder$$AW_0($p0, $p1) {
        var $v_0 = $p0.attrs;
        var $v_1 = $v_0['DisplayMode'];
        if (CUI.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = 'Menu';
        }
        var $v_2 = this.$0_0.$8g_1($v_0['Id'], $v_0['Title'], $v_0['Description'], ($v_0['Scrollable']) === 'true', $v_0['MaxHeight'], $v_1);
        var $v_3 = CUI.DataNodeWrapper.getNodeName((CUI.DataNodeWrapper.getNodeChildren($p0))[0]);
        if ($v_3 === 'Controls') {
            var $v_4 = CUI.DataNodeWrapper.getNodeChildren((CUI.DataNodeWrapper.getNodeChildren($p0))[0]);
            var $v_5 = $v_4.length;
            var $v_6 = null;
            for (var $v_7 = 0; $v_7 < $v_5; $v_7++) {
                $v_6 = $v_4[$v_7];
                if (this.isNodeTrimmed($v_6)) {
                    continue;
                }
                var $v_8 = this.$4Z_0($v_6, $p1);
                $v_2.addChild($v_8.createComponentForDisplayMode($v_1));
            }
        }
        else if ($v_3 === 'Gallery') {
            var $v_9 = this.$AQ_0((CUI.DataNodeWrapper.getNodeChildren($p0))[0], $p1, true);
            $v_2.addChild($v_9);
        }
        return $v_2;
    },
    
    $AQ_0: function CUI_Builder$$AQ_0($p0, $p1, $p2) {
        var $v_0 = $p0.attrs;
        var $v_1 = $p0.attrs;
        var $v_2 = this.$0_0.$As_1($v_1.Id, $v_0['Title'], $v_0['Description'], $v_1);
        var $v_3 = ($p2) ? 'Menu' : 'Default';
        var $v_4 = CUI.DataNodeWrapper.getNodeChildren($p0);
        var $v_5 = $v_4.length;
        var $v_6 = null;
        for (var $v_7 = 0; $v_7 < $v_5; $v_7++) {
            $v_6 = $v_4[$v_7];
            if (this.isNodeTrimmed($v_6)) {
                continue;
            }
            var $v_8;
            switch (CUI.DataNodeWrapper.getNodeName($v_6)) {
                case 'GalleryButton':
                    $v_8 = this.$8T_0($v_6, $p1, $v_1.ElementDimensions);
                    break;
                default:
                    $v_8 = this.$4Z_0($v_6, $p1);
                    break;
            }
            $v_2.addChild($v_8.createComponentForDisplayMode($v_3));
        }
        return $v_2;
    },
    
    $8T_0: function CUI_Builder$$8T_0($p0, $p1, $p2) {
        var $v_0;
        if (CUI.ScriptUtility.isNullOrEmptyString($p2)) {
            var $v_3 = $p0.attrs;
            $p2 = $v_3['ElementDimensions'];
        }
        if (CUI.ScriptUtility.isNullOrEmptyString($p2)) {
            $v_0 = 2;
        }
        else {
            $v_0 = CUI.Gallery.$8Y($p2);
        }
        var $v_1 = $p0.attrs;
        var $v_2 = new CUI.Controls.GalleryButton(this.$0_0, $v_1.Id, $v_1, $v_0);
        return $v_2;
    },
    
    $Ag_0: function CUI_Builder$$Ag_0($p0, $p1) {
        var $v_0 = $p0.attrs;
        var $v_1 = new CUI.Controls.ToggleButton(this.$0_0, $v_0.Id, $v_0);
        return $v_1;
    },
    
    $AL_0: function CUI_Builder$$AL_0($p0, $p1) {
        var $v_0 = $p0.attrs;
        var $v_1 = new CUI.Controls.CheckBox(this.$0_0, $v_0.Id, $v_0);
        return $v_1;
    },
    
    $AM_0: function CUI_Builder$$AM_0($p0, $p1) {
        var $v_0 = $p0.attrs;
        var $v_1 = CUI.DataNodeWrapper.getNodeChildren(CUI.DataNodeWrapper.getFirstChildNodeWithName($p0, 'Colors'));
        var $v_2 = new Array($v_1.length);
        var $v_3 = $v_1.length;
        for (var $v_5 = 0; $v_5 < $v_3; $v_5++) {
            var $v_6 = new CUI.Controls.ColorStyle();
            var $v_7 = CUI.DataNodeWrapper.getNodeAttributes($v_1[$v_5]);
            var $v_8 = $v_7['Title'];
            $v_6.Title = (CUI.ScriptUtility.isNullOrUndefined($v_8)) ? $v_7['Alt'] : $v_8;
            $v_6.Color = $v_7['Color'];
            $v_6.DisplayColor = $v_7['DisplayColor'];
            $v_6.Style = $v_7['Style'];
            $v_2[$v_5] = $v_6;
        }
        var $v_4 = new CUI.Controls.ColorPicker(this.$0_0, $v_0.Id, $v_0, $v_2);
        return $v_4;
    },
    
    $AN_0: function CUI_Builder$$AN_0($p0, $p1) {
        var $v_0 = $p0.attrs;
        var $v_1 = CUI.DataNodeWrapper.getNodeChildren($p0);
        var $v_2 = null;
        var $v_3 = $p0.attrs;
        var $v_4 = null;
        if (!CUI.Utility.$o($v_3.PopulateDynamically)) {
            $v_2 = this.$3B_0($v_1[0], $p1, false);
            $v_4 = {};
            var $v_6 = CUI.DataNodeWrapper.getNodeChildren($v_1[0]);
            var $v_7 = $v_6.length;
            for (var $v_8 = 0; $v_8 < $v_7; $v_8++) {
                var $v_9 = CUI.DataNodeWrapper.getNodeChildren($v_6[$v_8]);
                var $v_A = CUI.DataNodeWrapper.getNodeChildren($v_9[0]);
                var $v_B = $v_A.length;
                for (var $v_C = 0; $v_C < $v_B; $v_C++) {
                    var $v_D = $v_A[$v_C].attrs;
                    var $v_E = $v_D['LabelText'];
                    var $v_F = $v_D['MenuItemId'];
                    $v_4[$v_E] = $v_F;
                }
            }
        }
        var $v_5 = new CUI.Controls.ComboBox(this.$0_0, $v_0.Id, $v_0, $v_2);
        $v_5.set_menuItems($v_4);
        return $v_5;
    },
    
    $AO_0: function CUI_Builder$$AO_0($p0, $p1) {
        var $v_0 = $p0.attrs;
        var $v_1 = CUI.DataNodeWrapper.getNodeChildren($p0);
        var $v_2 = null;
        var $v_3 = $p0.attrs;
        if (!CUI.Utility.$o($v_3.PopulateDynamically)) {
            $v_2 = this.$3B_0($v_1[0], $p1, false);
        }
        var $v_4 = new CUI.Controls.DropDown(this.$0_0, $v_0.Id, $v_0, $v_2);
        return $v_4;
    },
    
    $AK_0: function CUI_Builder$$AK_0($p0, $p1) {
        var $v_0 = $p0.attrs;
        var $v_1 = new CUI.Controls.Button(this.$0_0, $v_0.Id, $v_0);
        return $v_1;
    },
    
    $Ad_0: function CUI_Builder$$Ad_0($p0, $p1) {
        var $v_0 = $p0.attrs;
        var $v_1 = CUI.DataNodeWrapper.getNodeChildren($p0);
        var $v_2 = null;
        if (!CUI.Utility.$o($v_0.PopulateDynamically)) {
            $v_2 = this.$3B_0($v_1[0], $p1, true);
        }
        var $v_3 = new CUI.Controls.SplitButton(this.$0_0, $v_0.Id, $v_0, $v_2);
        return $v_3;
    },
    
    $AP_0: function CUI_Builder$$AP_0($p0, $p1) {
        var $v_0 = $p0.attrs;
        var $v_1 = CUI.DataNodeWrapper.getNodeChildren($p0);
        var $v_2 = null;
        var $v_3 = $p0.attrs;
        if (!CUI.Utility.$o($v_3.PopulateDynamically)) {
            $v_2 = this.$3B_0($v_1[0], $p1, true);
        }
        var $v_4 = new CUI.Controls.FlyoutAnchor(this.$0_0, $v_0.Id, $v_0, $v_2);
        return $v_4;
    },
    
    $AS_0: function CUI_Builder$$AS_0($p0, $p1) {
        var $v_0 = $p0.attrs;
        var $v_1 = new CUI.Controls.InsertTable(this.$0_0, $v_0.Id, $v_0);
        return $v_1;
    },
    
    $AV_0: function CUI_Builder$$AV_0($p0, $p1) {
        var $v_0 = $p0.attrs;
        var $v_1 = new CUI.Controls.Label(this.$0_0, $v_0.Id, $v_0);
        return $v_1;
    },
    
    $AX_0: function CUI_Builder$$AX_0($p0, $p1) {
        var $v_0 = $p0.attrs;
        var $v_1 = CUI.DataNodeWrapper.getNodeChildren($p0);
        var $v_2 = null;
        var $v_3 = $p0.attrs;
        if (!CUI.Utility.$o($v_3.PopulateDynamically)) {
            $v_2 = this.$3B_0($v_1[0], $p1, false);
        }
        var $v_4 = new CUI.Controls.MRUSplitButton(this.$0_0, $v_0.Id, $v_0, $v_2);
        return $v_4;
    },
    
    $Aa_0: function CUI_Builder$$Aa_0($p0, $p1) {
        var $v_0 = $p0.attrs;
        var $v_1 = new CUI.Controls.Separator(this.$0_0, $v_0.Id, $v_0);
        return $v_1;
    },
    
    $Ab_0: function CUI_Builder$$Ab_0($p0, $p1) {
        var $v_0 = $p0.attrs;
        var $v_1 = this.$Ac_0($p0);
        var $v_2 = new CUI.Controls.Spinner(this.$0_0, $v_0.Id, $v_0, $v_1.units, $v_1.allowedStrings);
        return $v_2;
    },
    
    $Af_0: function CUI_Builder$$Af_0($p0, $p1) {
        var $v_0 = $p0.attrs;
        var $v_1 = new CUI.Controls.TextBox(this.$0_0, $v_0.Id, $v_0);
        return $v_1;
    },
    
    $6v_0: function CUI_Builder$$6v_0($p0) {
        if (typeof($p0) === 'string') {
            return parseFloat($p0);
        }
        return $p0;
    },
    
    $Al_0: function CUI_Builder$$Al_0($p0) {
        if (typeof($p0) === 'string') {
            return parseInt($p0);
        }
        return $p0;
    },
    
    $Ac_0: function CUI_Builder$$Ac_0($p0) {
        var $v_0 = CUI.DataNodeWrapper.getNodeChildren($p0);
        var $v_1 = [];
        var $v_2 = [];
        var $v_3 = $v_0.length;
        for (var $v_4 = 0; $v_4 < $v_3; $v_4++) {
            var $v_5 = $v_0[$v_4];
            var $v_6 = CUI.DataNodeWrapper.getNodeName($v_5);
            var $v_7 = CUI.DataNodeWrapper.getNodeAttributes($v_5);
            if ($v_6 === 'Unit') {
                Array.add($v_1, CUI.Controls.Spinner.createUnit($v_7['Name'], this.$Ah_0(CUI.DataNodeWrapper.getNodeChildren($v_5)), this.$6v_0($v_7['MinimumValue']), this.$6v_0($v_7['MaximumValue']), this.$Al_0($v_7['DecimalDigits']), this.$6v_0($v_7['Interval'])));
            }
            else if ($v_6 === 'AllowedText') {
                Array.add($v_2, $v_7['Value']);
            }
        }
        return new CUI.Builder.SpinnerChildren($v_1, $v_2);
    },
    
    $Ah_0: function CUI_Builder$$Ah_0($p0) {
        var $v_0 = new Array($p0.length);
        var $v_1 = $p0.length;
        for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
            var $v_3 = $p0[$v_2];
            var $v_4 = CUI.DataNodeWrapper.getNodeAttributes($v_3);
            $v_0[$v_2] = $v_4['Value'];
        }
        return $v_0;
    },
    
    applyDataExtensions: function CUI_Builder$applyDataExtensions(data) {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$z_0.dataExtensions)) {
            return CUI.Builder.applyDataNodeExtensions(data, this.$z_0.dataExtensions);
        }
        else {
            return data;
        }
    }
}


CUI.Builder.SpinnerChildren = function CUI_Builder_SpinnerChildren($p0, $p1) {
    this.units = $p0;
    this.allowedStrings = $p1;
}
CUI.Builder.SpinnerChildren.prototype = {
    units: null,
    allowedStrings: null
}


CUI.CommandEventArgs = function CUI_CommandEventArgs($p0, $p1, $p2, $p3) {
    CUI.CommandEventArgs.initializeBase(this);
    this.$4_1 = $p0;
    this.$34_1 = $p3;
    this.$36_1 = $p2;
    this.$G_1 = $p1;
}
CUI.CommandEventArgs.prototype = {
    $4_1: null,
    $6g_1: 0,
    $34_1: null,
    $36_1: null,
    $G_1: 0,
    $5s_1: null,
    
    get_id: function CUI_CommandEventArgs$get_id() {ULSpEN:;
        return this.$4_1;
    },
    
    get_parameters: function CUI_CommandEventArgs$get_parameters() {ULSpEN:;
        return this.$34_1;
    },
    
    get_sequenceNumber: function CUI_CommandEventArgs$get_sequenceNumber() {ULSpEN:;
        return this.$6g_1;
    },
    set_sequenceNumber: function CUI_CommandEventArgs$set_sequenceNumber($p0) {
        this.$6g_1 = $p0;
        return $p0;
    },
    
    get_source: function CUI_CommandEventArgs$get_source() {ULSpEN:;
        return this.$36_1;
    },
    
    get_sourceControl: function CUI_CommandEventArgs$get_sourceControl() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$36_1) && CUI.ControlComponent.isInstanceOfType(this.$36_1)) {
            return (this.$36_1).$L_1;
        }
        return null;
    },
    
    get_type: function CUI_CommandEventArgs$get_type() {ULSpEN:;
        return this.$G_1;
    },
    
    get_properties: function CUI_CommandEventArgs$get_properties() {ULSpEN:;
        return this.$34_1;
    },
    
    get_commandInfo: function CUI_CommandEventArgs$get_commandInfo() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$5s_1)) {
            this.$5s_1 = new CUI.CommandInformation();
        }
        return this.$5s_1;
    }
}


CUI.Component = function CUI_Component(root, id, title, description) {ULSpEN:;
    this._componentWidth = -1;
    this._componentHeight = -1;
    this._componentTopPosition = -1;
    this._componentLeftPosition = -1;
    this.$4_0 = id;
    this.$0_0 = root;
    this.$1W_0 = title;
    this.$5y_0 = description;
    this.createChildArray();
}
CUI.Component.prototype = {
    $4_0: null,
    $2s_0: null,
    $K_0: null,
    $0_0: null,
    $6_0: null,
    $j_0: true,
    $39_0: true,
    $1K_0: true,
    $59_0: false,
    $5y_0: null,
    $1W_0: null,
    
    createChildArray: function CUI_Component$createChildArray() {ULSpEN:;
        this.$6y_0();
    },
    
    $6y_0: function CUI_Component$$6y_0() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$6_0)) {
            this.$6_0 = new CUI.List();
        }
    },
    
    get_id: function CUI_Component$get_id() {ULSpEN:;
        return this.$4_0;
    },
    set_id: function CUI_Component$set_id(value) {ULSpEN:;
        this.$4_0 = value;
        return value;
    },
    
    get_$3_0: function CUI_Component$get_$3_0() {ULSpEN:;
        return this.$2s_0;
    },
    set_$3_0: function CUI_Component$set_$3_0($p0) {
        this.$2s_0 = $p0;
        return $p0;
    },
    
    get_root: function CUI_Component$get_root() {ULSpEN:;
        return this.$0_0;
    },
    
    get_parent: function CUI_Component$get_parent() {ULSpEN:;
        return this.$K_0;
    },
    set_parent: function CUI_Component$set_parent(value) {ULSpEN:;
        this.$K_0 = value;
        return value;
    },
    
    $y_0: function CUI_Component$$y_0() {
    },
    
    $5T_0: function CUI_Component$$5T_0() {ULSpEN:;
        return false;
    },
    
    $5S_0: function CUI_Component$$5S_0() {ULSpEN:;
        return false;
    },
    
    $76_0: function CUI_Component$$76_0() {
    },
    
    $78_0: function CUI_Component$$78_0() {
    },
    
    $77_0: function CUI_Component$$77_0($p0) {
        return false;
    },
    
    $8v_0: function CUI_Component$$8v_0($p0) {
        var $$enum_1 = this.$6_0.getEnumerator();
        while ($$enum_1.moveNext()) {
            var $v_0 = $$enum_1.get_current();
            if ($v_0.$4_0 === $p0) {
                return $v_0;
            }
        }
        return null;
    },
    
    getChild: function CUI_Component$getChild(id) {ULSpEN:;
        return this.$8v_0(id);
    },
    
    getChildByTitle: function CUI_Component$getChildByTitle(title) {ULSpEN:;
        var $$enum_1 = this.$6_0.getEnumerator();
        while ($$enum_1.moveNext()) {
            var $v_0 = $$enum_1.get_current();
            if ($v_0.get_title() === title) {
                return $v_0;
            }
        }
        return null;
    },
    
    addChild: function CUI_Component$addChild(child) {ULSpEN:;
        this.$3A_0(child, true);
    },
    
    $3A_0: function CUI_Component$$3A_0($p0, $p1) {
        this.$8K_0($p0, -1, $p1);
    },
    
    addChildAtIndex: function CUI_Component$addChildAtIndex(child, index) {ULSpEN:;
        this.$8K_0(child, index, true);
    },
    
    $8K_0: function CUI_Component$$8K_0($p0, $p1, $p2) {
        if ($p2) {
            this.ensureCorrectChildType($p0);
        }
        if (!CUI.ScriptUtility.isNullOrUndefined($p0.$K_0)) {
            throw Error.create('This child cannot be added because it has already been added \n to another Component in the hierarchy.  \n You must first call child.Parent.RemoveChild(child)');
        }
        if ($p1 === -1) {
            this.$6_0.add($p0);
        }
        else {
            this.$6_0.insert($p1, $p0);
        }
        $p0.$K_0 = this;
        this.$p_0();
    },
    
    removeChild: function CUI_Component$removeChild(id) {ULSpEN:;
        var $v_0 = this.$8v_0(id);
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            throw Error.create('The child with id: ' + id + ' is not as child of this Component');
        }
        this.$6_0.remove($v_0);
        $v_0.$K_0 = null;
        this.$p_0();
    },
    
    removeChildren: function CUI_Component$removeChildren() {ULSpEN:;
        var $$enum_0 = this.$6_0.getEnumerator();
        while ($$enum_0.moveNext()) {
            var $v_0 = $$enum_0.get_current();
            if ($v_0) {
                $v_0.$K_0 = null;
            }
        }
        this.$6_0.clear();
        this.$p_0();
    },
    
    ensureCorrectChildType: function CUI_Component$ensureCorrectChildType(child) {ULSpEN:;
        return;
    },
    
    initRootMember: function CUI_Component$initRootMember(root) {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$0_0)) {
            throw Error.create('Root member has already been set for this Component.');
        }
        this.$0_0 = root;
    },
    
    get_visible: function CUI_Component$get_visible() {ULSpEN:;
        return this.$39_0;
    },
    set_visible: function CUI_Component$set_visible(value) {ULSpEN:;
        this.set_$5n_0(value);
        return value;
    },
    
    get_$5n_0: function CUI_Component$get_$5n_0() {ULSpEN:;
        return this.get_visible();
    },
    set_$5n_0: function CUI_Component$set_$5n_0($p0) {
        var $v_0 = this.$39_0;
        this.$39_0 = $p0;
        if ($v_0 !== this.$39_0) {
            this.$p_0();
        }
        return $p0;
    },
    
    get_enabled: function CUI_Component$get_enabled() {ULSpEN:;
        return this.$1K_0;
    },
    set_enabled: function CUI_Component$set_enabled(value) {ULSpEN:;
        if (this.$1K_0 === value && this.$59_0) {
            return value;
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$K_0) && !this.$K_0.get_enabled() && value) {
            throw Error.create('This Component with id: ' + this.$4_0 + ' cannot be Enabled because its parent is Disabled');
        }
        this.$1K_0 = value;
        this.$59_0 = true;
        var $$enum_1 = this.$6_0.getEnumerator();
        while ($$enum_1.moveNext()) {
            var $v_0 = $$enum_1.get_current();
            $v_0.set_enabled(value);
        }
        this.onEnabledChanged(value);
        return value;
    },
    
    onEnabledChanged: function CUI_Component$onEnabledChanged(enabled) {
    },
    
    $Ch_0: function CUI_Component$$Ch_0($p0) {
        var $v_0 = this.$1K_0 !== $p0;
        this.$1K_0 = $p0;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$6_0)) {
            var $$enum_2 = this.$6_0.getEnumerator();
            while ($$enum_2.moveNext()) {
                var $v_1 = $$enum_2.get_current();
                $v_1.$Ch_0($p0);
            }
        }
        if ($v_0) {
            this.onEnabledChanged($p0);
        }
    },
    
    get_title: function CUI_Component$get_title() {ULSpEN:;
        return this.$1W_0;
    },
    set_title: function CUI_Component$set_title(value) {ULSpEN:;
        this.$1W_0 = value;
        this.$p_0();
        return value;
    },
    
    get_description: function CUI_Component$get_description() {ULSpEN:;
        return this.$5y_0;
    },
    set_description: function CUI_Component$set_description(value) {ULSpEN:;
        this.$5y_0 = value;
        this.$p_0();
        return value;
    },
    
    _lastWidthUpdate: 0,
    _lastHeightUpdate: 0,
    
    get_$Ak_0: function CUI_Component$get_$Ak_0() {ULSpEN:;
        return this._componentHeight;
    },
    
    _lastTopUpdate: 0,
    
    get_$8W_0: function CUI_Component$get_$8W_0() {ULSpEN:;
        return this._componentTopPosition;
    },
    
    _lastLeftUpdate: 0,
    
    valueIsDirty: function CUI_Component$valueIsDirty(lastUpdate) {ULSpEN:;
        if (CUI.Ribbon.isInstanceOfType(this.$0_0)) {
            var $v_0 = this.$0_0;
            return lastUpdate < $v_0.get_$Bk_3();
        }
        return false;
    },
    
    $7a_0: function CUI_Component$$7a_0($p0) {
        this.$j_0 = $p0;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$6_0)) {
            return;
        }
        var $$enum_1 = this.$6_0.getEnumerator();
        while ($$enum_1.moveNext()) {
            var $v_0 = $$enum_1.get_current();
            $v_0.$7a_0($p0);
        }
    },
    
    $p_0: function CUI_Component$$p_0() {ULSpEN:;
        if (this.$j_0 || this.$4J_0) {
            return;
        }
        this.$j_0 = true;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$K_0)) {
            this.$K_0.$p_0();
        }
    },
    
    $4J_0: false,
    
    $1q_0: function CUI_Component$$1q_0() {ULSpEN:;
        this.$j_0 = false;
    },
    
    $2i_0: function CUI_Component$$2i_0() {ULSpEN:;
        if (this.$j_0) {
            this.$1q_0();
        }
    },
    
    $3p_0: function CUI_Component$$3p_0($p0) {
        this.$5Q_0();
        this.$P_0();
        this.$j_0 = false;
        if ($p0) {
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$6_0)) {
                var $$enum_1 = this.$6_0.getEnumerator();
                while ($$enum_1.moveNext()) {
                    var $v_0 = $$enum_1.get_current();
                    $v_0.$3p_0($p0);
                }
            }
        }
    },
    
    $5Q_0: function CUI_Component$$5Q_0() {ULSpEN:;
        var $v_0 = $get(this.$4_0);
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            this.set_$3_0($v_0);
        }
        else {
            throw Error.create('Attempting to attach to Id: ' + this.$4_0 + ' but this id is not present in the DOM');
        }
    },
    
    $P_0: function CUI_Component$$P_0() {
    },
    
    $1X_0: function CUI_Component$$1X_0() {ULSpEN:;
        if (!this.$2s_0) {
            this.$2s_0 = CUI.Utility.$2(this.get_domElementTagName());
            this.$2s_0.className = this.get_cssClass();
            this.$2s_0.id = this.$4_0;
        }
    },
    
    get_domElementTagName: function CUI_Component$get_domElementTagName() {ULSpEN:;
        return 'span';
    },
    
    get_cssClass: function CUI_Component$get_cssClass() {ULSpEN:;
        return '';
    },
    
    get_visibleInDOM: function CUI_Component$get_visibleInDOM() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$K_0)) {
            return false;
        }
        return this.$K_0.get_visibleInDOM();
    },
    
    $7e_0: function CUI_Component$$7e_0() {ULSpEN:;
        if (!this.get_visible()) {
            return false;
        }
        var $$enum_0 = this.$6_0.getEnumerator();
        while ($$enum_0.moveNext()) {
            var $v_0 = $$enum_0.get_current();
            if ($v_0.$7e_0()) {
                return true;
            }
        }
        return false;
    },
    
    ensureDOMElementAndEmpty: function CUI_Component$ensureDOMElementAndEmpty() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) {
            this.$1X_0();
        }
        else {
            this.set_$3_0(CUI.Utility.removeChildNodes(this.get_$3_0()));
        }
    },
    
    appendChildrenToElement: function CUI_Component$appendChildrenToElement(elm) {ULSpEN:;
        var $v_0 = document.createDocumentFragment();
        var $$enum_2 = this.$6_0.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_1 = $$enum_2.get_current();
            $v_1.$1X_0();
            $v_0.appendChild($v_1.get_$3_0());
            $v_1.$2i_0();
        }
        elm.appendChild($v_0);
    },
    
    raiseCommandEvent: function CUI_Component$raiseCommandEvent(commandId, type, properties) {ULSpEN:;
        var $v_0 = this.$0_0.$Ap_1(commandId, type, this, properties);
        this.$9c_0($v_0);
    },
    
    $9c_0: function CUI_Component$$9c_0($p0) {
        if (this.$2j_0($p0) && !CUI.ScriptUtility.isNullOrUndefined(this.$K_0)) {
            this.$K_0.$9c_0($p0);
        }
        this.$9U_0($p0);
    },
    
    $2j_0: function CUI_Component$$2j_0($p0) {
        return true;
    },
    
    $9U_0: function CUI_Component$$9U_0($p0) {
    },
    
    getTextValue: function CUI_Component$getTextValue() {ULSpEN:;
        return null;
    },
    
    receiveFocus: function CUI_Component$receiveFocus() {
    },
    
    onMenuClosed: function CUI_Component$onMenuClosed() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$6_0)) {
            return;
        }
        var $$enum_0 = this.$6_0.getEnumerator();
        while ($$enum_0.moveNext()) {
            var $v_0 = $$enum_0.get_current();
            $v_0.onMenuClosed();
        }
    },
    
    $3O_0: null,
    $4t_0: null,
    $4u_0: null,
    
    $7Z_0: function CUI_Component$$7Z_0($p0, $p1, $p2) {
        this.$3O_0 = $p0;
        this.$4t_0 = $p1;
        this.$4u_0 = $p2;
    },
    
    $5x_0: false,
    
    doDelayedInit: function CUI_Component$doDelayedInit() {ULSpEN:;
        if (this.$5x_0) {
            return;
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$3O_0)) {
            throw Error.create('No delayedinit handler present in this component: ' + this.$4_0);
        }
        this.$5x_0 = true;
        this.$3O_0(this, this.$4t_0, this.$4u_0);
    },
    
    $7M_0: function CUI_Component$$7M_0($p0) {
        if ($p0) {
            this.$3O_0 = null;
            this.$4t_0 = null;
            this.$4u_0 = null;
            this.$p_0();
        }
        this.$5x_0 = false;
    },
    
    get_needsDelayIniting: function CUI_Component$get_needsDelayIniting() {ULSpEN:;
        return !CUI.ScriptUtility.isNullOrUndefined(this.$3O_0);
    },
    
    $3x_0: function CUI_Component$$3x_0() {ULSpEN:;
        var $$enum_0 = this.$6_0.getEnumerator();
        while ($$enum_0.moveNext()) {
            var $v_0 = $$enum_0.get_current();
            $v_0.$3x_0();
        }
    },
    
    $4L_0: null,
    
    get_$3v_0: function CUI_Component$get_$3v_0() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$4L_0)) {
            this.$4L_0 = new Date();
            this.$4L_0.setTime(0);
        }
        return this.$4L_0;
    },
    set_$3v_0: function CUI_Component$set_$3v_0($p0) {
        this.$4L_0 = $p0;
        return $p0;
    },
    
    get_$9e_0: function CUI_Component$get_$9e_0() {ULSpEN:;
        return this.get_$3v_0().getTime() < this.$0_0.get_$3v_0().getTime();
    },
    
    $9a_0: function CUI_Component$$9a_0() {ULSpEN:;
        if (this.get_$9e_0()) {
            this.$3x_0();
        }
    },
    
    dispose: function CUI_Component$dispose() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$6_0)) {
            var $$enum_0 = this.$6_0.getEnumerator();
            while ($$enum_0.moveNext()) {
                var $v_0 = $$enum_0.get_current();
                $v_0.dispose();
            }
            this.$6_0 = null;
        }
        this.$K_0 = null;
        this.$0_0 = null;
        this.$4t_0 = null;
        this.$3O_0 = null;
        this.$4u_0 = null;
        this.$2s_0 = null;
    }
}


CUI.ContextMenu = function CUI_ContextMenu($p0, $p1, $p2, $p3, $p4) {
    CUI.ContextMenu.initializeBase(this, [ $p0, $p1, $p2, $p3, $p4 ]);
}
CUI.ContextMenu.prototype = {
    
    $1q_0: function CUI_ContextMenu$$1q_0() {ULSpEN:;
        if (this.get_needsDelayIniting()) {
            this.doDelayedInit();
        }
        this.ensureDOMElementAndEmpty();
        if (CUI.ScriptUtility.isNullOrUndefined(this.$N_1)) {
            this.$N_1 = CUI.Utility.$2('div');
            this.$N_1.className = 'ms-cui-contextmenu-inner';
        }
        this.get_$3_0().appendChild(this.$N_1);
        this.appendChildrenToElement(this.$N_1);
        CUI.Menu.prototype.$1q_0.call(this);
    },
    
    get_cssClass: function CUI_ContextMenu$get_cssClass() {ULSpEN:;
        return 'ms-cui-contextmenu';
    }
}


CUI.ContextMenuLauncher = function CUI_ContextMenuLauncher($p0, $p1, $p2, $p3) {
    CUI.ContextMenuLauncher.initializeBase(this, [ $p0, $p1, $p2, $p3 ]);
}
CUI.ContextMenuLauncher.prototype = {
    $5C_2: null,
    $6n_2: null,
    $8I_2: 0,
    $8J_2: 0,
    
    $Bl_2: function CUI_ContextMenuLauncher$$Bl_2($p0, $p1) {
        this.$6n_2 = $p1;
        this.$5C_2 = this.getMenuPosition($p0, null);
        if (this.launchMenu(null)) {
            this.$9d_2();
            this.$B_1.$76_0();
        }
        return true;
    },
    
    launchContextMenuAt: function CUI_ContextMenuLauncher$launchContextMenuAt($p0, $p1, $p2) {
        this.$8I_2 = $p1;
        this.$8J_2 = $p2;
        this.$6n_2 = $p0;
        if (this.launchMenu(null)) {
            this.$9d_2();
            this.$B_1.$76_0();
        }
        return true;
    },
    
    positionMenu: function CUI_ContextMenuLauncher$positionMenu($p0, $p1) {
        if (this.$5C_2) {
            this.$B_1.get_$3_0().style.top = this.$5C_2.y + 'px';
            this.$B_1.get_$3_0().style.left = this.$5C_2.x + 'px';
            this.$B_1.get_$3_0().style.position = 'absolute';
        }
        else {
            $p0.style.top = '0px';
            $p0.style.left = '0px';
            var $v_0 = this.$0_0.$79_1($p0, this.$6n_2);
            $v_0['launcherLeft'] = this.$8I_2;
            $v_0['launcherTop'] = this.$8J_2;
            $v_0['launcherWidth'] = 0;
            $v_0['launcherHeight'] = 0;
            this.$0_0.$7b_1($p0, $v_0, this.get_menuDirection());
        }
    },
    
    getMenuPosition: function CUI_ContextMenuLauncher$getMenuPosition($p0, $p1) {
        var $v_0 = new Sys.UI.Bounds(0, 0, 0, 0);
        if (!$p0) {
            $p0 = window.event;
        }
        $v_0.y = $p0.clientY;
        $v_0.x = $p0.clientX;
        return $v_0;
    },
    
    $9d_2: function CUI_ContextMenuLauncher$$9d_2() {ULSpEN:;
        if (this.$5_0.Command) {
            this.get_displayedComponent().raiseCommandEvent(this.$5_0.Command, 4, null);
        }
    }
}


CUI.ContextMenuRootProperties = function CUI_ContextMenuRootProperties() {ULSpEN:;
    CUI.ContextMenuRootProperties.initializeBase(this);
}
CUI.ContextMenuRootProperties.prototype = {
    CommandMenuOpen: null,
    CommandMenuClose: null
}


CUI.ContextMenuRoot = function CUI_ContextMenuRoot(id, properties) {ULSpEN:;
    CUI.ContextMenuRoot.initializeBase(this, [ id, properties ]);
}
CUI.ContextMenuRoot.prototype = {
    
    refresh: function CUI_ContextMenuRoot$refresh() {ULSpEN:;
        this.$1q_0();
        CUI.Root.prototype.$1q_0.call(this);
    },
    
    $1q_0: function CUI_ContextMenuRoot$$1q_0() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) {
            this.$1X_0();
        }
        this.set_$3_0(CUI.Utility.removeChildNodes(this.get_$3_0()));
        this.appendChildrenToElement(this.get_$3_0());
        this.$j_0 = false;
    },
    
    get_rootType: function CUI_ContextMenuRoot$get_rootType() {ULSpEN:;
        return 'ContextMenu';
    },
    
    get_contextMenuRootProperties: function CUI_ContextMenuRoot$get_contextMenuRootProperties() {ULSpEN:;
        return this.$5_1;
    },
    
    ensureCorrectChildType: function CUI_ContextMenuRoot$ensureCorrectChildType(child) {ULSpEN:;
        if (!CUI.StandaloneDock.isInstanceOfType(child)) {
            throw Error.create('Only children of type StandaloneDock can be added to a ContextMenuRoot');
        }
    },
    
    createContextMenu: function CUI_ContextMenuRoot$createContextMenu(props, id, title, description, maxWidth) {ULSpEN:;
        var $v_0 = new CUI.ContextMenu(this, id, title, description, null);
        if (!props) {
            props = new CUI.Controls.ContextMenuControlProperties();
        }
        props.CommandMenuOpen = this.get_contextMenuRootProperties().CommandMenuOpen;
        props.CommandMenuClose = this.get_contextMenuRootProperties().CommandMenuClose;
        var $v_1 = new CUI.Controls.ContextMenuControl(this, id + 'Launcher', props, $v_0);
        this.$1t_2[id] = $v_1;
        var $v_2 = new CUI.StandaloneDock(this, 'dock' + id);
        $v_2.addChild($v_1.createComponentForDisplayMode('Menu'));
        this.addChild($v_2);
        this.refresh();
    },
    
    showContextMenuAt: function CUI_ContextMenuRoot$showContextMenuAt(id, elmHadFocus, x, y) {ULSpEN:;
        var $v_0 = this.$1t_2[id];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            throw Error.create('The context menu \"' + id + '\" does not exist');
        }
        $v_0.launchContextMenuAt(elmHadFocus, x, y);
    }
}


CUI.ControlProperties = function CUI_ControlProperties() {
}
CUI.ControlProperties.prototype = {
    Command: null,
    Id: null,
    TemplateAlias: null,
    ToolTipDescription: null,
    ToolTipHelpKeyWord: null,
    ToolTipImage32by32: null,
    ToolTipImage32by32Class: null,
    ToolTipImage32by32Top: null,
    ToolTipImage32by32Left: null,
    ToolTipSelectedItemTitle: null,
    ToolTipShortcutKey: null,
    ToolTipTitle: null,
    LabelCss: null
}


CUI.Control = function CUI_Control($p0, $p1, $p2) {
    this.$$d_onDblClick = Function.createDelegate(this, this.onDblClick);
    this.$$d_onHelpKeyPress = Function.createDelegate(this, this.onHelpKeyPress);
    this.$$d_$Y_0 = Function.createDelegate(this, this.$Y_0);
    this.$$d_launchToolTip = Function.createDelegate(this, this.launchToolTip);
    this.$0_0 = $p0;
    this.$4_0 = $p1;
    this.$5_0 = $p2;
    this.$Z_0 = [];
    this.$43_0 = ',';
    this.$2l_0 = {};
    $p0.$CV_1(this);
}
CUI.Control.createStandardControlDOMElement = function CUI_Control$createStandardControlDOMElement($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0;
    var $v_1;
    var $$t_8, $$t_9, $$t_A;
    return (($$t_A = CUI.Control.createStandardControlDOMElement_OutParameters($p0, $p1, $p2, $p3, $p4, $p5, ($$t_8 = {'val': $v_0}), ($$t_9 = {'val': $v_1}))), $v_0 = $$t_8.val, $v_1 = $$t_9.val, $$t_A);
}
CUI.Control.createStandardControlDOMElement_OutParameters = function CUI_Control$createStandardControlDOMElement_OutParameters($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7) {
    var $v_0 = $p3;
    return CUI.Control.createStandardControlDOMElementCore($p0, $p1, $p2, $v_0.Id, $v_0.Image32by32, $v_0.Image32by32Class, $v_0.Image32by32Top, $v_0.Image32by32Left, $v_0.Image16by16, $v_0.Image16by16Class, $v_0.Image16by16Top, $v_0.Image16by16Left, $v_0.LabelText, $v_0.LabelCss, $v_0.Alt, $v_0.Description, $v_0.ToolTipTitle, $p4, $p5, $p6, $p7);
}
CUI.Control.createStandardControlDOMElementCore = function CUI_Control$createStandardControlDOMElementCore($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9, $p10, $p11, $p12, $p13, $p14, $p15, $p16, $p17, $p18, $p19, $p20) {
    if (CUI.ScriptUtility.isNullOrUndefined($p12)) {
        $p12 = '';
    }
    var $v_0 = false;
    var $v_1 = true;
    var $v_2 = CUI.Utility.$4c();
    var $v_3 = null;
    if ($p2 === 'Large') {
        $v_3 = 'ms-cui-ctl-large';
    }
    else if ($p2 === 'Medium') {
        $v_3 = 'ms-cui-ctl-medium';
    }
    else if ($p2 === 'Menu16' || $p2 === 'Menu') {
        $v_3 = 'ms-cui-ctl-menu';
        $v_0 = true;
    }
    else if ($p2 === 'Menu32') {
        $v_3 = 'ms-cui-ctl-menu ms-cui-ctl-menu32';
        $v_0 = true;
    }
    else {
        $v_3 = 'ms-cui-ctl';
    }
    CUI.Utility.ensureCSSClassOnElement($v_2, $v_3);
    if ($p2 === 'Menu') {
        CUI.Utility.ensureCSSClassOnElement($v_2, 'ms-cui-textmenuitem');
    }
    if (!CUI.ScriptUtility.isNullOrUndefined($p16)) {
        $v_2.setAttribute('aria-describedby', $p3 + '_ToolTip');
    }
    $v_2.setAttribute('mscui:controltype', $p0.get_$8X_0());
    var $v_4 = CUI.Utility.$2('img');
    var $v_5 = null;
    var $v_6 = null;
    var $v_7 = null;
    var $v_8 = null;
    var $v_9 = 0;
    $v_4.alt = '';
    $p14 = (CUI.ScriptUtility.isNullOrEmptyString($p14)) ? $p12 : $p14;
    $v_2.setAttribute('role', $p0.get_$2N_0());
    if (CUI.Controls.FlyoutAnchor.isInstanceOfType($p0)) {
        $v_2.setAttribute('aria-haspopup', 'true');
    }
    if (CUI.ScriptUtility.isNullOrEmptyString($p16)) {
        if ($p2 === 'Small') {
            $v_2.title = $p14;
        }
        $v_4.alt = $p14;
        $v_1 = false;
    }
    if ($p2 === 'Large' || $p2 === 'Menu32') {
        $v_5 = $p4;
        $v_6 = $p5;
        $v_7 = $p6;
        $v_8 = $p7;
        $v_9 = 4;
    }
    else {
        $v_5 = $p8;
        $v_6 = $p9;
        $v_7 = $p10;
        $v_8 = $p11;
        $v_9 = 3;
    }
    var $v_A = CUI.Utility.$h(2, $v_9, $v_5, $v_6, $v_4, true, false, $v_7, $v_8);
    var $v_B = CUI.Utility.$2('span');
    $v_B.className = ($p2 === 'Large') ? 'ms-cui-ctl-largeIconContainer' : 'ms-cui-ctl-iconContainer';
    $v_B.appendChild($v_A);
    var $v_C = null;
    var $v_D = null;
    if ($v_1) {
        $v_D = CUI.Utility.$28($p14);
    }
    if ($p2 !== 'Small' || $p18) {
        $v_C = CUI.Utility.$2('span');
        if ($p2 !== 'Small') {
            if ($p2 === 'Large') {
                CUI.Utility.ensureCSSClassOnElement($v_C, 'ms-cui-ctl-largelabel');
                $v_C.innerHTML = CUI.Utility.$75($p12, $p18);
            }
            else {
                var $v_I = $p12;
                if ($p18) {
                    $v_I = $v_I + ' ';
                }
                CUI.Utility.ensureCSSClassOnElement($v_C, 'ms-cui-ctl-mediumlabel');
                CUI.UIUtility.setInnerText($v_C, $v_I);
            }
            if (!CUI.ScriptUtility.isNullOrEmptyString($p13)) {
                $v_C.style.cssText = $p13;
            }
            if (!CUI.ScriptUtility.isNullOrUndefined($p1.get_$1G_1())) {
                $v_C.style.color = $p1.get_$1G_1();
            }
        }
        else {
            CUI.Utility.ensureCSSClassOnElement($v_C, 'ms-cui-ctl-smalllabel');
            CUI.UIUtility.setInnerText($v_C, ' ');
            $v_C = CUI.Utility.$28($p14);
        }
    }
    else if ($v_1) {
        $v_C = CUI.Utility.$28($p14);
    }
    var $v_E = null;
    if ($p18) {
        var $v_J = CUI.Utility.$2('img');
        $v_J.alt = '';
        if (CUI.ScriptUtility.isNullOrEmptyString($p16)) {
            $v_J.alt = $p14;
        }
        $v_E = CUI.Utility.$h(2, 1, $p1.$5_1.ImageDownArrow, $p1.$5_1.ImageDownArrowClass, $v_J, true, false, $p1.$5_1.ImageDownArrowTop, $p1.$5_1.ImageDownArrowLeft);
    }
    var $v_F = null;
    var $v_G = null;
    var $v_H = null;
    if ($p2 === 'Menu32') {
        $v_F = CUI.Utility.$2('span');
        $v_F.className = 'ms-cui-ctl-menulabel';
        CUI.Utility.ensureCSSClassOnElement($v_C, 'ms-cui-btn-title');
        $v_F.appendChild($v_C);
        if (!CUI.ScriptUtility.isNullOrUndefined($p15)) {
            $v_G = CUI.Utility.$2('span');
            if (!CUI.ScriptUtility.isNullOrUndefined($p1.get_$1G_1())) {
                $v_G.style.color = $p1.get_$1G_1();
            }
            CUI.Utility.ensureCSSClassOnElement($v_G, 'ms-cui-btn-menu-description');
            CUI.Utility.$1r($v_G, $p15);
            $v_G.style.display = 'block';
            $v_F.appendChild($v_G);
        }
        $v_H = CUI.Utility.$2('span');
        $v_H.className = 'ms-cui-ctl-menu32clear';
        $v_H.innerHTML = '&nbsp;';
    }
    $v_2.appendChild($v_B);
    if (!CUI.ScriptUtility.isNullOrUndefined($v_C)) {
        if (!CUI.ScriptUtility.isNullOrUndefined($v_F)) {
            $v_2.appendChild($v_F);
            $v_2.appendChild($v_H);
        }
        else {
            $v_2.appendChild($v_C);
            if ($p2 === 'Small' && $p18 && $v_1) {
                $v_2.appendChild($v_D);
            }
        }
        if (!CUI.ScriptUtility.isNullOrUndefined($v_E)) {
            $v_C.appendChild($v_E);
        }
    }
    if ($v_0) {
        var $v_K = CUI.Utility.$8c();
        $v_2.appendChild($v_K);
    }
    $p19.val = $v_C;
    $p20.val = $v_4;
    return $v_2;
}
CUI.Control.createTwoAnchorControlDOMElementCore = function CUI_Control$createTwoAnchorControlDOMElementCore($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9, $p10, $p11, $p12, $p13, $p14, $p15) {
    var $v_0 = true;
    if (CUI.ScriptUtility.isNullOrUndefined($p12)) {
        $p12 = '';
    }
    var $v_1 = CUI.Utility.$2('span');
    if ($p2 === 'Large') {
        $v_1.className = 'ms-cui-ctl-large';
    }
    else if ($p2 === 'Medium') {
        $v_1.className = 'ms-cui-ctl ms-cui-ctl-medium';
    }
    else {
        $v_1.className = 'ms-cui-ctl ms-cui-ctl-small';
    }
    if (!CUI.ScriptUtility.isNullOrUndefined($p14)) {
        $v_1.setAttribute('aria-describedby', $p3 + '_ToolTip');
    }
    $v_1.setAttribute('mscui:controltype', $p0.get_$8X_0());
    var $v_2 = CUI.Utility.$4c();
    var $v_3 = CUI.Utility.$4c();
    $v_2.className = 'ms-cui-ctl-a1';
    $v_3.className = 'ms-cui-ctl-a2';
    $p13 = (CUI.ScriptUtility.isNullOrEmptyString($p13)) ? $p12 : $p13;
    $v_2.setAttribute('role', $p0.get_$2N_0());
    $v_3.setAttribute('role', $p0.get_$2N_0());
    $v_3.setAttribute('aria-haspopup', 'true');
    var $v_4 = CUI.Utility.$2('span');
    $v_4.className = 'ms-cui-ctl-a1Internal';
    var $v_5 = CUI.Utility.$2('img');
    var $v_6 = null;
    var $v_7 = null;
    var $v_8 = null;
    var $v_9 = null;
    var $v_A = 0;
    $v_5.alt = '';
    if (CUI.ScriptUtility.isNullOrEmptyString($p14)) {
        if ($p2 === 'Small') {
            $v_2.title = $p13;
            $v_3.title = $p13;
        }
        $v_5.alt = $p13;
        $v_0 = false;
    }
    if ($p2 === 'Large' || $p2 === 'Menu32') {
        $v_6 = $p4;
        $v_7 = $p5;
        $v_8 = $p6;
        $v_9 = $p7;
        $v_A = 4;
    }
    else {
        $v_6 = $p8;
        $v_7 = $p9;
        $v_8 = $p10;
        $v_9 = $p11;
        $v_A = 3;
    }
    var $v_B = CUI.Utility.$h(2, $v_A, $v_6, $v_7, $v_5, true, false, $v_8, $v_9);
    var $v_C = null;
    var $v_D = null;
    if ($v_0) {
        $v_C = CUI.Utility.$28($p13);
        $v_D = CUI.Utility.$28($p13);
    }
    var $v_E = null;
    if ($p2 !== 'Small' || $p15) {
        $v_E = CUI.Utility.$2('span');
        if ($p2 !== 'Small') {
            if ($p2 === 'Large') {
                CUI.Utility.ensureCSSClassOnElement($v_E, 'ms-cui-ctl-largelabel');
                $v_E.innerHTML = CUI.Utility.$75($p12, $p15);
            }
            else if ($p2 === 'Medium') {
                CUI.Utility.ensureCSSClassOnElement($v_E, 'ms-cui-ctl-mediumlabel');
                CUI.UIUtility.setInnerText($v_E, $p12);
            }
            if (!CUI.ScriptUtility.isNullOrUndefined($p1.get_$1G_1())) {
                $v_E.style.color = $p1.get_$1G_1();
            }
        }
    }
    var $v_F = null;
    if ($p15) {
        var $v_G = CUI.Utility.$2('img');
        if (CUI.ScriptUtility.isNullOrEmptyString($p14)) {
            $v_G.alt = $p13;
        }
        $v_F = CUI.Utility.$h(2, 1, $p1.$5_1.ImageDownArrow, $p1.$5_1.ImageDownArrowClass, $v_G, true, false, $p1.$5_1.ImageDownArrowTop, $p1.$5_1.ImageDownArrowLeft);
    }
    $v_1.appendChild($v_2);
    $v_1.appendChild($v_3);
    $v_2.appendChild($v_4);
    $v_4.appendChild($v_B);
    if (!CUI.ScriptUtility.isNullOrUndefined($v_E)) {
        if ($p2 === 'Large') {
            $v_3.appendChild($v_E);
            if ($v_0) {
                $v_2.appendChild($v_C);
            }
        }
        else {
            $v_4.appendChild($v_E);
            if ($v_0) {
                $v_3.appendChild($v_D);
            }
        }
        if ($p2 === 'Small' && $v_0) {
            $v_2.appendChild($v_C);
        }
    }
    if (!CUI.ScriptUtility.isNullOrUndefined($v_F)) {
        if ($p2 === 'Large') {
            $v_E.appendChild($v_F);
        }
        else {
            $v_3.appendChild($v_F);
        }
    }
    return $v_1;
}
CUI.Control.prototype = {
    $0_0: null,
    $4_0: null,
    $Z_0: null,
    $5_0: null,
    $43_0: null,
    $2l_0: null,
    $1L_0: null,
    $5O_0: false,
    $6p_0: null,
    $6o_0: null,
    $1K_0: false,
    $59_0: false,
    $39_0: true,
    
    get_controlProperties: function CUI_Control$get_controlProperties() {ULSpEN:;
        return this.$5_0;
    },
    
    $6k_0: null,
    
    get_stateProperties: function CUI_Control$get_stateProperties() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$6k_0)) {
            this.$6k_0 = {};
        }
        return this.$6k_0;
    },
    
    $5t_0: null,
    
    get_commandProperties: function CUI_Control$get_commandProperties() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$5t_0)) {
            this.$5t_0 = {};
        }
        return this.$5t_0;
    },
    
    get_templateAlias: function CUI_Control$get_templateAlias() {ULSpEN:;
        return this.$5_0.TemplateAlias;
    },
    
    get_$8X_0: function CUI_Control$get_$8X_0() {ULSpEN:;
        return 'Control';
    },
    
    get_$2N_0: function CUI_Control$get_$2N_0() {ULSpEN:;
        return 'button';
    },
    
    ensureValidDisplayMode: function CUI_Control$ensureValidDisplayMode($p0) {
        if (this.$43_0.indexOf(',' + $p0 + ',') !== -1) {
            return;
        }
        throw Error.create('The display mode with name: ' + $p0 + ' is not valid for this control with id: ' + this.$4_0);
    },
    
    refreshDOMElements: function CUI_Control$refreshDOMElements() {ULSpEN:;
        this.onStateChanged();
        if (!this.get_enabled()) {
            this.onEnabledChanged(false);
        }
    },
    
    onStateChanged: function CUI_Control$onStateChanged() {
    },
    
    $5u_0: null,
    
    getDOMElementForDisplayMode: function CUI_Control$getDOMElementForDisplayMode($p0) {
        this.ensureValidDisplayMode($p0);
        var $v_0 = this.$2l_0[$p0];
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        this.$5u_0 = $p0;
        $v_0 = this.createDOMElementForDisplayMode($p0);
        this.$5u_0 = null;
        if (CUI.ScriptUtility.isNullOrEmptyString($v_0.id)) {
            $v_0.id = this.$4_0 + '-' + $p0;
        }
        this.storeElementForDisplayMode($v_0, $p0);
        this.refreshDOMElements();
        return $v_0;
    },
    
    storeElementForDisplayMode: function CUI_Control$storeElementForDisplayMode($p0, $p1) {
        this.$2l_0[$p1] = $p0;
    },
    
    $AG_0: function CUI_Control$$AG_0($p0) {
        var $v_0 = $get(this.$4_0 + '-' + $p0);
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            this.storeElementForDisplayMode($v_0, $p0);
        }
    },
    
    $AH_0: function CUI_Control$$AH_0($p0) {
    },
    
    createComponentForDisplayMode: function CUI_Control$createComponentForDisplayMode($p0) {
        var $v_0 = this.createComponentForDisplayModeInternal($p0);
        Array.add(this.$Z_0, $v_0);
        return $v_0;
    },
    
    get_components: function CUI_Control$get_components() {ULSpEN:;
        return this.$Z_0;
    },
    
    createComponentForDisplayModeInternal: function CUI_Control$createComponentForDisplayModeInternal($p0) {
        var $v_0 = this.$0_0.$Ar_1(this.$4_0 + '-' + $p0 + this.$0_0.$2A_1(), $p0, this);
        return $v_0;
    },
    
    dispose: function CUI_Control$dispose() {ULSpEN:;
        this.releaseEventHandlers();
        this.$0_0 = null;
        this.$Z_0 = null;
        this.$43_0 = null;
        var $$dict_0 = this.$2l_0;
        for (var $$key_1 in $$dict_0) {
            var $v_0 = { key: $$key_1, value: $$dict_0[$$key_1] };
            delete this.$2l_0[$v_0.key];
        }
        this.$2l_0 = null;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$1L_0)) {
            this.$1L_0.dispose();
        }
    },
    
    releaseEventHandlers: function CUI_Control$releaseEventHandlers() {ULSpEN:;
        var $$dict_0 = this.$2l_0;
        for (var $$key_1 in $$dict_0) {
            var $v_0 = { key: $$key_1, value: $$dict_0[$$key_1] };
            CUI.Utility.$7S($v_0.value);
        }
    },
    
    get_id: function CUI_Control$get_id() {ULSpEN:;
        return this.$4_0;
    },
    
    get_root: function CUI_Control$get_root() {ULSpEN:;
        return this.$0_0;
    },
    
    addDisplayMode: function CUI_Control$addDisplayMode($p0) {
        if (this.$43_0.indexOf(',' + $p0 + ',') !== -1) {
            return;
        }
        this.$43_0 += $p0 + ',';
    },
    
    ensureCorrectChildType: function CUI_Control$ensureCorrectChildType($p0) {
        if (!(CUI.ToolTip.isInstanceOfType($p0))) {
            throw Error.create('Child Components may not be added to this type of ControlComponent.');
        }
    },
    
    get_displayedComponent: function CUI_Control$get_displayedComponent() {ULSpEN:;
        var $v_0 = this.$Z_0.length;
        for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
            var $v_2 = this.$Z_0[$v_1];
            if ($v_2.get_visibleInDOM()) {
                return $v_2;
            }
        }
        return null;
    },
    
    $2j_0: function CUI_Control$$2j_0($p0) {
        return true;
    },
    
    $9U_0: function CUI_Control$$9U_0($p0) {
    },
    
    $CN_0: function CUI_Control$$CN_0($p0) {
        var $v_0 = this.$Z_0.length;
        for (var $v_1 = 0; $v_1 < $v_0; ++$v_1) {
            var $v_2 = this.$Z_0[$v_1];
            $v_2.$p_0();
        }
    },
    
    onMenuClosed: function CUI_Control$onMenuClosed() {
    },
    
    onClick: function CUI_Control$onClick($p0) {
        $p0.preventDefault();
    },
    
    onDblClick: function CUI_Control$onDblClick($p0) {
        $p0.preventDefault();
        if (!this.get_enabled()) {
            return;
        }
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            this.onClick($p0);
        }
    },
    
    onBeginFocus: function CUI_Control$onBeginFocus() {ULSpEN:;
        window.clearInterval(this.$0_0.$2f_1);
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$0_0.$38_1)) {
            if (this.$0_0.$38_1.$4_0 === this.$4_0) {
                this.launchToolTip();
                return;
            }
            else {
                this.$0_0.$2O_1();
                this.$0_0.$2f_1 = window.setTimeout(this.$$d_launchToolTip, 500);
            }
        }
        else {
            this.$0_0.$2f_1 = window.setTimeout(this.$$d_launchToolTip, 500);
        }
    },
    
    onEndFocus: function CUI_Control$onEndFocus() {ULSpEN:;
        window.clearInterval(this.$0_0.$2f_1);
        if (this.$5O_0) {
            this.$0_0.$2f_1 = window.setTimeout(this.$$d_$Y_0, 100);
        }
    },
    
    onToolTipOpenned: function CUI_Control$onToolTipOpenned() {ULSpEN:;
        this.$6p_0 = this.$$d_onHelpKeyPress;
        this.$6o_0 = this.$1L_0.$$d_$Bp_1;
        $addHandler(document, 'keydown', this.$6p_0);
        $addHandler(document, 'click', this.$6o_0);
    },
    
    onToolTipClosed: function CUI_Control$onToolTipClosed() {ULSpEN:;
        $removeHandler(document, 'keydown', this.$6p_0);
        $removeHandler(document, 'click', this.$6o_0);
    },
    
    onHelpKeyPress: function CUI_Control$onHelpKeyPress($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$1L_0)) {
            this.$1L_0.$9Q_1($p0);
        }
    },
    
    launchToolTip: function CUI_Control$launchToolTip() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$0_0)) {
            return;
        }
        window.clearInterval(this.$0_0.$2f_1);
        if (this.$5O_0) {
            return;
        }
        if ((!CUI.ScriptUtility.isNullOrUndefined(this.$0_0.$38_1)) && (this.$0_0.$38_1.$4_0 !== this.$4_0)) {
            this.$0_0.$2O_1();
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$5_0.ToolTipTitle)) {
            return;
        }
        this.$1L_0 = new CUI.ToolTip(this.$0_0, this.$4_0 + '_ToolTip', this.$5_0.ToolTipTitle, this.$5_0.ToolTipDescription, this.$5_0);
        if (!this.get_enabled()) {
            var $v_1 = new CUI.DisabledCommandInfoProperties();
            $v_1.Icon = this.$0_0.$5_1.ToolTipDisabledCommandImage16by16;
            $v_1.IconClass = this.$0_0.$5_1.ToolTipDisabledCommandImage16by16Class;
            $v_1.IconTop = this.$0_0.$5_1.ToolTipDisabledCommandImage16by16Top;
            $v_1.IconLeft = this.$0_0.$5_1.ToolTipDisabledCommandImage16by16Left;
            $v_1.Title = this.$0_0.$5_1.ToolTipDisabledCommandTitle;
            $v_1.Description = this.$0_0.$5_1.ToolTipDisabledCommandDescription;
            $v_1.HelpKeyWord = this.$0_0.$5_1.ToolTipDisabledCommandHelpKey;
            this.$1L_0.$16_1 = $v_1;
        }
        var $v_0 = this.get_displayedComponent();
        $v_0.$6y_0();
        $v_0.addChild(this.$1L_0);
        this.$1L_0.$B3_1();
        this.$5O_0 = true;
        this.$0_0.$38_1 = this;
        this.onToolTipOpenned();
    },
    
    $Y_0: function CUI_Control$$Y_0() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$0_0)) {
            window.clearInterval(this.$0_0.$2f_1);
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$1L_0)) {
            this.$1L_0.$98_1();
            this.$5O_0 = false;
            this.onToolTipClosed();
            CUI.UIUtility.removeNode(this.$1L_0.get_$3_0());
            this.$1L_0 = null;
        }
    },
    
    get_enabled: function CUI_Control$get_enabled() {ULSpEN:;
        return this.$1K_0;
    },
    set_enabled: function CUI_Control$set_enabled($p0) {
        if (this.$1K_0 === $p0 && this.$59_0) {
            return $p0;
        }
        this.$1K_0 = $p0;
        this.$59_0 = true;
        this.onEnabledChanged($p0);
        return $p0;
    },
    
    get_$5m_0: function CUI_Control$get_$5m_0() {ULSpEN:;
        return this.$39_0;
    },
    set_$5m_0: function CUI_Control$set_$5m_0($p0) {
        var $v_0 = $p0;
        if (!$v_0 && !this.$0_0.get_$9s_1()) {
            throw Error.create('This root does not support dynamically showing or hiding controls.');
        }
        if ($v_0 !== this.$39_0) {
            this.$39_0 = $v_0;
            this.$CN_0($v_0);
        }
        return $p0;
    },
    
    get_enabledInternal: function CUI_Control$get_enabledInternal() {ULSpEN:;
        return this.$1K_0;
    },
    set_enabledInternal: function CUI_Control$set_enabledInternal($p0) {
        this.$1K_0 = $p0;
        return $p0;
    },
    
    $9l_0: function CUI_Control$$9l_0($p0) {
        this.$1K_0 = $p0;
        this.onEnabledChanged($p0);
    },
    
    $9Z_0: function CUI_Control$$9Z_0() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$5_0.Command)) {
            this.pollForStateAndUpdateInternal(this.$5_0.Command, null, null, false);
        }
    },
    
    pollForStateAndUpdateInternal: function CUI_Control$pollForStateAndUpdateInternal($p0, $p1, $p2, $p3) {
        var $v_0 = this.$0_0.$3H_1($p0, $p1, $p2, $p3);
        this.set_enabled(($v_0 & 1) > 0);
        return $v_0;
    },
    
    getTextValue: function CUI_Control$getTextValue() {ULSpEN:;
        return '';
    },
    
    receiveFocus: function CUI_Control$receiveFocus() {
    },
    
    $5S_0: function CUI_Control$$5S_0() {ULSpEN:;
        return this.$8q_0();
    },
    
    $5T_0: function CUI_Control$$5T_0() {ULSpEN:;
        return this.$8q_0();
    },
    
    $8q_0: function CUI_Control$$8q_0() {ULSpEN:;
        var $v_0 = this.get_displayedComponent();
        if (!CUI.MenuItem.isInstanceOfType($v_0)) {
            return false;
        }
        if (!($v_0).get_$1A_2()) {
            (this).receiveFocus();
            return true;
        }
        return false;
    },
    
    $Ai_0: function CUI_Control$$Ai_0() {
    },
    
    $5V_0: function CUI_Control$$5V_0() {ULSpEN:;
        var $v_0 = this.get_displayedComponent();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return null;
        }
        return $v_0.get_$3_0();
    },
    
    $7d_0: function CUI_Control$$7d_0() {ULSpEN:;
        return false;
    }
}


CUI.ControlComponent = function CUI_ControlComponent($p0, $p1, $p2, $p3) {
    CUI.ControlComponent.initializeBase(this, [ $p0, $p1, $p2, '' ]);
    this.$L_1 = $p3;
    this.set_visible(this.$L_1.get_$5m_0());
}
CUI.ControlComponent.prototype = {
    $L_1: null,
    
    get_displayMode: function CUI_ControlComponent$get_displayMode() {ULSpEN:;
        return this.get_title();
    },
    
    createChildArray: function CUI_ControlComponent$createChildArray() {
    },
    
    $1q_0: function CUI_ControlComponent$$1q_0() {ULSpEN:;
        this.$j_0 = false;
    },
    
    $5Q_0: function CUI_ControlComponent$$5Q_0() {ULSpEN:;
        this.$L_1.$AG_0(this.get_displayMode());
    },
    
    $P_0: function CUI_ControlComponent$$P_0() {ULSpEN:;
        this.$L_1.$AH_0(this.get_displayMode());
    },
    
    get_$3_0: function CUI_ControlComponent$get_$3_0() {ULSpEN:;
        return this.$L_1.getDOMElementForDisplayMode(this.get_title());
    },
    set_$3_0: function CUI_ControlComponent$set_$3_0($p0) {
        throw Error.create('Cannot set the DOM Element of ControlComponents.  They get their DOM Elements from the Control.');
        return $p0;
    },
    
    get_componentElement: function CUI_ControlComponent$get_componentElement() {ULSpEN:;
        return CUI.Component.prototype.get_$3_0.call(this);
    },
    
    get_enabled: function CUI_ControlComponent$get_enabled() {ULSpEN:;
        return this.$L_1.get_enabled();
    },
    set_enabled: function CUI_ControlComponent$set_enabled($p0) {
        this.$L_1.set_enabled($p0);
        return $p0;
    },
    
    get_visible: function CUI_ControlComponent$get_visible() {ULSpEN:;
        if (this.$0_0.get_$9s_1() && !this.$L_1.get_$5m_0()) {
            return false;
        }
        return CUI.Component.prototype.get_visible.call(this);
    },
    set_visible: function CUI_ControlComponent$set_visible($p0) {
        CUI.Component.prototype.set_visible.call(this, $p0);
        return $p0;
    },
    
    get_$Ak_0: function CUI_ControlComponent$get_$Ak_0() {ULSpEN:;
        if ((this._componentHeight === -1 || this.valueIsDirty(this._lastHeightUpdate)) && !CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) {
            this._componentHeight = this.get_$3_0().offsetHeight;
        }
        return this._componentHeight;
    },
    
    get_$8W_0: function CUI_ControlComponent$get_$8W_0() {ULSpEN:;
        if ((this._componentTopPosition === -1 || this.valueIsDirty(this._lastTopUpdate)) && !CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) {
            this._componentTopPosition = CUI.UIUtility.calculateOffsetTop(this.get_$3_0());
        }
        return this._componentTopPosition;
    },
    
    $Ch_0: function CUI_ControlComponent$$Ch_0($p0) {
        this.$L_1.$9l_0($p0);
    },
    
    $4a_1: function CUI_ControlComponent$$4a_1($p0) {
        return this.$L_1.createComponentForDisplayMode(this.get_displayMode());
    },
    
    onEnabledChanged: function CUI_ControlComponent$onEnabledChanged($p0) {
        this.$L_1.onEnabledChanged($p0);
    },
    
    ensureCorrectChildType: function CUI_ControlComponent$ensureCorrectChildType($p0) {
        this.$L_1.ensureCorrectChildType($p0);
    },
    
    $2j_0: function CUI_ControlComponent$$2j_0($p0) {
        return this.$L_1.$2j_0($p0);
    },
    
    $9U_0: function CUI_ControlComponent$$9U_0($p0) {
        this.$L_1.$9U_0($p0);
    },
    
    get_textValue: function CUI_ControlComponent$get_textValue() {ULSpEN:;
        return (this.$L_1).getTextValue();
    },
    
    $3x_0: function CUI_ControlComponent$$3x_0() {ULSpEN:;
        this.$L_1.$9Z_0();
    },
    
    receiveFocus: function CUI_ControlComponent$receiveFocus() {ULSpEN:;
        (this.$L_1).receiveFocus();
    },
    
    onMenuClosed: function CUI_ControlComponent$onMenuClosed() {ULSpEN:;
        (this.$L_1).onMenuClosed();
    },
    
    $7e_0: function CUI_ControlComponent$$7e_0() {ULSpEN:;
        return this.$L_1.$7d_0();
    },
    
    dispose: function CUI_ControlComponent$dispose() {ULSpEN:;
        this.$L_1.dispose();
        this.$L_1 = null;
        CUI.Component.prototype.dispose.call(this);
    }
}


CUI.DataQueryResult = function CUI_DataQueryResult() {
}
CUI.DataQueryResult.prototype = {
    success: false,
    id: null,
    queryData: null,
    contextData: null
}


CUI.DataQuery = function CUI_DataQuery() {
}
CUI.DataQuery.prototype = {
    dataUrl: null,
    version: null,
    lcid: null,
    id: null,
    queryType: 0,
    handler: null,
    data: null
}


CUI.DataSource = function CUI_DataSource(dataUrl, version, lcid) {ULSpEN:;
    this.$$d_onDataReturned = Function.createDelegate(this, this.onDataReturned);
    this.$5v_0 = dataUrl;
    this.$6q_0 = version;
    this.$6Q_0 = lcid;
    this.$A6_0 = {};
}
CUI.DataSource.prototype = {
    $5v_0: null,
    $A6_0: null,
    $6q_0: null,
    $6Q_0: null,
    
    get_dataUrl: function CUI_DataSource$get_dataUrl() {ULSpEN:;
        return this.$5v_0;
    },
    
    get_version: function CUI_DataSource$get_version() {ULSpEN:;
        return this.$6q_0;
    },
    
    get_lcid: function CUI_DataSource$get_lcid() {ULSpEN:;
        return this.$6Q_0;
    },
    
    runQuery: function CUI_DataSource$runQuery(query) {ULSpEN:;
        var $v_0 = this.$6q_0;
        if (!CUI.ScriptUtility.isNullOrUndefined(query.version)) {
            $v_0 = query.version;
        }
        var $v_1 = this.$6Q_0;
        if (!CUI.ScriptUtility.isNullOrUndefined(query.lcid)) {
            $v_1 = query.lcid;
        }
        var $v_2 = this.$5v_0;
        if (!CUI.ScriptUtility.isNullOrUndefined(query.dataUrl)) {
            $v_2 = query.dataUrl;
        }
        var $v_3;
        var $v_4 = null;
        if ($v_2.indexOf('?') === -1) {
            $v_3 = $v_2 + '?ver=';
        }
        else {
            $v_3 = $v_2 + '&ver=';
        }
        $v_3 = $v_3 + $v_0 + '&id=' + query.id + '&lcid=' + $v_1 + '&qt=';
        switch (query.queryType) {
            case 1:
                $v_4 = 'all';
                break;
            case 4:
                $v_4 = 'ribbontab';
                break;
            case 3:
                $v_4 = 'ribbonshallow';
                break;
            case 5:
                $v_4 = 'root';
                break;
            case 2:
                $v_4 = 'ribbonvisibletabdeep';
                break;
        }
        $v_3 += $v_4;
        CUI.PMetrics.perfMark(7109);
        var $v_5 = new Sys.Net.WebRequest();
        $v_5.set_httpVerb('POST');
        $v_5.set_url($v_3);
        var $v_6 = new CUI.QueryRecord();
        $v_6.id = query.id;
        $v_6.queryType = query.queryType;
        $v_6.data = query.data;
        $v_6.handler = query.handler;
        $v_5.set_userContext($v_6);
        $v_5.add_completed(this.$$d_onDataReturned);
        $v_5.invoke();
    },
    
    onDataReturned: function CUI_DataSource$onDataReturned(executor) {ULSpEN:;
        CUI.PMetrics.perfMark(7110);
        var $v_0 = executor.get_webRequest().get_userContext();
        var $v_1 = new CUI.DataQueryResult();
        $v_1.contextData = $v_0.data;
        $v_1.id = $v_0.id;
        if (executor.get_responseAvailable()) {
            $v_1.success = true;
            $v_1.queryData = executor.get_object();
            $v_0.handler($v_1);
        }
        else {
            $v_1.success = false;
            $v_0.handler($v_1);
        }
    }
}


CUI.Gallery = function CUI_Gallery($p0, $p1, $p2, $p3, $p4) {
    this.$7_1 = -1;
    CUI.Gallery.initializeBase(this, [ $p0, $p1, $p2, $p3 ]);
    this.$3J_1 = $p4;
    this.$4Y_1 = parseInt(this.$3J_1.Width);
    this.$4y_1 = CUI.Gallery.$8Y(this.$3J_1.ElementDimensions);
}
CUI.Gallery.$8Y = function CUI_Gallery$$8Y($p0) {
    switch ($p0) {
        case 'Size16by16':
            return 1;
        case 'Size32by32':
            return 2;
        case 'Size48by48':
            return 3;
        case 'Size64by48':
            return 4;
        case 'Size72by96':
            return 5;
        case 'Size96by72':
            return 6;
        case 'Size96by96':
            return 7;
        case 'Size128by128':
            return 8;
        case 'Size190by30':
            return 9;
        case 'Size190by40':
            return 10;
        case 'Size190by50':
            return 11;
        case 'Size190by60':
            return 12;
        case 'SizeCustom':
            return 13;
        default:
            throw Error.argument('s', 'The parameter s is not a valid GalleryElementDimension');
    }
}
CUI.Gallery.prototype = {
    $3J_1: null,
    $4y_1: 0,
    $4Y_1: 0,
    $6f_1: null,
    
    get_domElementTagName: function CUI_Gallery$get_domElementTagName() {ULSpEN:;
        return 'table';
    },
    
    get_cssClass: function CUI_Gallery$get_cssClass() {ULSpEN:;
        return 'ms-cui-gallery';
    },
    
    $1q_0: function CUI_Gallery$$1q_0() {ULSpEN:;
        this.ensureDOMElementAndEmpty();
        var $v_0 = CUI.Utility.$2('tbody');
        this.get_$3_0().appendChild($v_0);
        this.appendChildrenToElement($v_0);
    },
    
    appendChildrenToElement: function CUI_Gallery$appendChildrenToElement($p0) {
        var $v_0 = Math.ceil(this.$6_0.$M_0 / this.$4Y_1);
        var $v_1;
        var $v_2;
        var $v_3;
        var $v_4 = 0;
        for (var $v_5 = 0; $v_5 < $v_0; $v_5++) {
            $v_1 = CUI.Utility.$2('tr');
            for (var $v_6 = 0; $v_6 < this.$4Y_1; $v_6++) {
                $v_2 = CUI.Utility.$2('td');
                $v_2.className = 'ms-cui-gallery-td ms-cui-gallery-element-' + CUI.GalleryElementDimensions.toString(this.$4y_1);
                if ($v_4 < this.$6_0.$M_0) {
                    $v_3 = this.$6_0.get_item($v_4++);
                    $v_3.$1X_0();
                    $v_2.appendChild($v_3.get_$3_0());
                    $v_3.$2i_0();
                }
                $v_1.appendChild($v_2);
            }
            $p0.appendChild($v_1);
        }
    },
    
    $6b_1: false,
    
    $2j_0: function CUI_Gallery$$2j_0($p0) {
        if (this.$6b_1) {
            return true;
        }
        if ($p0.$G_1 === 3) {
            var $v_0 = $p0.$36_1;
            if (!(CUI.ISelectableControl.isInstanceOfType($v_0.$L_1))) {
                return CUI.Component.prototype.$2j_0.call(this, $p0);
            }
            var $v_1 = $v_0.$L_1;
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$6f_1)) {
                this.$6f_1.deselect();
            }
            this.$6f_1 = $v_1;
        }
        if ($p0.$G_1 === 3 || $p0.$G_1 === 7 || $p0.$G_1 === 8) {
            var $v_2;
            switch ($p0.$G_1) {
                case 3:
                    $v_2 = this.$3J_1.Command;
                    break;
                case 7:
                    $v_2 = this.$3J_1.CommandPreview;
                    break;
                case 8:
                    $v_2 = this.$3J_1.CommandRevert;
                    break;
                default:
                    $v_2 = this.$3J_1.Command;
                    break;
            }
            $v_2 = $v_2 || $p0.$4_1;
            this.$6b_1 = true;
            this.raiseCommandEvent($v_2, $p0.$G_1, $p0.$34_1);
            this.$6b_1 = false;
            CUI.Component.prototype.$2j_0.call(this, $p0);
            return false;
        }
        return CUI.Component.prototype.$2j_0.call(this, $p0);
    },
    
    $y_0: function CUI_Gallery$$y_0() {ULSpEN:;
        if (!this.$6_0.$M_0) {
            return;
        }
        this.$7_1 = 0;
        var $$enum_0 = this.$6_0.getEnumerator();
        while ($$enum_0.moveNext()) {
            var $v_0 = $$enum_0.get_current();
            $v_0.$y_0();
        }
    },
    
    $76_0: function CUI_Gallery$$76_0() {ULSpEN:;
        if (!this.$6_0.$M_0) {
            return;
        }
        if (this.$7_1 > -1) {
            (this.$6_0.get_item(this.$7_1)).$y_0();
        }
        this.$7_1 = 0;
        (this.$6_0.get_item(this.$7_1)).$76_0();
    },
    
    $78_0: function CUI_Gallery$$78_0() {ULSpEN:;
        var $v_0 = this.$6_0.$M_0;
        if (!$v_0) {
            return;
        }
        if (this.$7_1 > -1) {
            (this.$6_0.get_item(this.$7_1)).$y_0();
        }
        this.$7_1 = $v_0 - 1;
        (this.$6_0.get_item(this.$7_1)).$78_0();
    },
    
    $77_0: function CUI_Gallery$$77_0($p0) {
        if (!this.$6_0.$M_0) {
            return false;
        }
        var $v_0 = 0;
        var $$enum_2 = this.$6_0.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_1 = $$enum_2.get_current();
            if ($v_1.$77_0($p0)) {
                if (this.$7_1 > -1) {
                    (this.$6_0.get_item(this.$7_1)).$y_0();
                }
                this.$7_1 = $v_0;
                return true;
            }
            $v_0++;
        }
        return false;
    },
    
    $5T_0: function CUI_Gallery$$5T_0() {ULSpEN:;
        if (this.$7_1 === -1) {
            this.$7_1 = this.$6_0.$M_0 - 1;
        }
        var $v_0 = this.$7_1;
        var $v_1 = this.$6_0.getEnumeratorAtPos($v_0);
        while ($v_1.movePrevious()) {
            if (($v_1.get_current()).$5T_0()) {
                if ($v_0 !== this.$7_1) {
                    (this.$6_0.get_item(this.$7_1)).$y_0();
                    this.$7_1 = $v_0;
                }
                return true;
            }
            $v_0--;
        }
        (this.$6_0.get_item(this.$7_1)).$y_0();
        this.$7_1 = -1;
        return false;
    },
    
    $5S_0: function CUI_Gallery$$5S_0() {ULSpEN:;
        if (this.$7_1 === -1) {
            this.$7_1 = 0;
        }
        var $v_0 = this.$7_1;
        var $v_1 = this.$6_0.getEnumeratorAtPos($v_0);
        while ($v_1.moveNext()) {
            if (($v_1.get_current()).$5S_0()) {
                if ($v_0 !== this.$7_1) {
                    (this.$6_0.get_item(this.$7_1)).$y_0();
                    this.$7_1 = $v_0;
                }
                return true;
            }
            $v_0++;
        }
        (this.$6_0.get_item(this.$7_1)).$y_0();
        this.$7_1 = -1;
        return false;
    },
    
    ensureCorrectChildType: function CUI_Gallery$ensureCorrectChildType($p0) {
        if (!CUI.ControlComponent.isInstanceOfType($p0)) {
            throw Error.create('Galleries can only have children controls of type GalleryButton');
        }
        var $v_0 = $p0;
        if (!CUI.Controls.GalleryButton.isInstanceOfType($v_0.$L_1)) {
            throw Error.create('Galleries can only have children of type GalleryButton');
        }
    },
    
    get_elementDimensions: function CUI_Gallery$get_elementDimensions() {ULSpEN:;
        return this.$4y_1;
    },
    set_elementDimensions: function CUI_Gallery$set_elementDimensions($p0) {
        this.$4y_1 = $p0;
        return $p0;
    },
    
    get_width: function CUI_Gallery$get_width() {ULSpEN:;
        return this.$4Y_1;
    },
    set_width: function CUI_Gallery$set_width($p0) {
        this.$4Y_1 = $p0;
        return $p0;
    }
}


CUI.Jewel = function CUI_Jewel($p0, $p1) {
    CUI.Jewel.initializeBase(this, [ $p0, $p1 ]);
}
CUI.Jewel.prototype = {
    $A4_2: null,
    
    refresh: function CUI_Jewel$refresh() {ULSpEN:;
        this.$1q_0();
        CUI.Root.prototype.refresh.call(this);
    },
    
    $1q_0: function CUI_Jewel$$1q_0() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) {
            this.$1X_0();
        }
        this.set_$3_0(CUI.Utility.removeChildNodes(this.get_$3_0()));
        this.appendChildrenToElement(this.get_$3_0());
        this.$j_0 = false;
    },
    
    ensureCorrectChildType: function CUI_Jewel$ensureCorrectChildType(child) {ULSpEN:;
        if (!CUI.ControlComponent.isInstanceOfType(child)) {
            throw Error.create('The child \"' + child.$4_0 + '\" is not a ControlComponent');
        }
        if (!CUI.Controls.JewelMenuLauncher.isInstanceOfType((child).$L_1)) {
            throw Error.create('Only children of type JewelMenuLauncher can be added to a Jewel');
        }
    },
    
    get_cssClass: function CUI_Jewel$get_cssClass() {ULSpEN:;
        return 'ms-cui-jewel ' + CUI.Root.prototype.get_cssClass.call(this);
    },
    
    get_rootType: function CUI_Jewel$get_rootType() {ULSpEN:;
        return 'Jewel';
    },
    
    get_visibleInDOM: function CUI_Jewel$get_visibleInDOM() {ULSpEN:;
        return true;
    },
    
    get_$Bj_2: function CUI_Jewel$get_$Bj_2() {ULSpEN:;
        return this.get_$19_1();
    },
    set_$Bj_2: function CUI_Jewel$set_$Bj_2($p0) {
        this.set_$19_1($p0);
        return $p0;
    }
}


CUI.JewelBuildContext = function CUI_JewelBuildContext() {ULSpEN:;
    CUI.JewelBuildContext.initializeBase(this);
}
CUI.JewelBuildContext.prototype = {
    jewel: null,
    jewelId: null
}


CUI.JewelBuildOptions = function CUI_JewelBuildOptions() {ULSpEN:;
    CUI.JewelBuildOptions.initializeBase(this);
}


CUI.JewelBuilder = function CUI_JewelBuilder(options, elmPlaceholder, rootBuildClient) {ULSpEN:;
    this.$$d_$CB_1 = Function.createDelegate(this, this.$CB_1);
    CUI.JewelBuilder.initializeBase(this, [ options, elmPlaceholder, rootBuildClient ]);
    if (CUI.ScriptUtility.isNullOrUndefined(elmPlaceholder)) {
        throw Error.create('Jewel placeholder DOM element is null or undefined.');
    }
}
CUI.JewelBuilder.prototype = {
    
    get_jewel: function CUI_JewelBuilder$get_jewel() {ULSpEN:;
        return this.$0_0;
    },
    set_jewel: function CUI_JewelBuilder$set_jewel(value) {ULSpEN:;
        this.$0_0 = value;
        return value;
    },
    
    buildJewel: function CUI_JewelBuilder$buildJewel(jewelId) {ULSpEN:;
        if (this.$2Z_0) {
            return false;
        }
        if (this.isIdTrimmed(jewelId)) {
            return true;
        }
        var $v_0 = new CUI.JewelBuildContext();
        $v_0.jewelId = jewelId;
        this.$2Z_0 = true;
        var $v_1 = new CUI.DataQuery();
        $v_1.id = $v_0.jewelId;
        $v_1.queryType = 5;
        $v_1.handler = this.$$d_$CB_1;
        $v_1.data = $v_0;
        this.$11_0.runQuery($v_1);
        return true;
    },
    
    $CB_1: function CUI_JewelBuilder$$CB_1($p0) {
        var $v_0 = $p0.contextData;
        $p0.queryData = this.applyDataExtensions($p0.queryData);
        var $v_1 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p0.queryData, 'Jewel');
        this.set_jewel(this.$AT_1($v_1, $v_0));
        this.get_jewel().set_$Bj_2(this);
        this.get_jewel()._decimalSeparator = this.get_$9F_1().decimalSeparator;
        this.$24_0.onComponentCreated(this.get_jewel(), this.get_jewel().$4_0);
        if (this.get_$9F_1().attachToDOM) {
            this.get_jewel().$3p_0(true);
        }
        else {
            this.get_jewel().$1q_0();
            this._elmPlaceholder.appendChild(this.get_jewel().get_$3_0());
            CUI.Utility.ensureCSSClassOnElement(this._elmPlaceholder, 'loaded');
        }
        this.$7O_0(this.get_jewel());
        this.$24_0.onComponentBuilt(this.get_jewel(), this.get_jewel().$4_0);
    },
    
    $AT_1: function CUI_JewelBuilder$$AT_1($p0, $p1) {
        if (CUI.ScriptUtility.isNullOrUndefined($p0)) {
            throw Error.create('No Jewel element was present in the data');
        }
        var $v_0 = new CUI.DataNodeWrapper($p0);
        this.set_jewel(new CUI.Jewel($v_0.get_attributes()['Id'], $v_0.get_attributes()));
        var $v_1 = this.$AU_1($p0, $p1);
        this.get_jewel().addChild($v_1.createComponentForDisplayMode('Default'));
        this.get_jewel().$A4_2 = $v_1;
        return this.get_jewel();
    },
    
    $AU_1: function CUI_JewelBuilder$$AU_1($p0, $p1) {
        var $v_0 = $p0.attrs;
        var $v_1 = CUI.DataNodeWrapper.getNodeChildren($p0);
        var $v_2 = null;
        var $v_3 = $p0.attrs;
        if (!CUI.Utility.$o($v_3.PopulateDynamically)) {
            $v_2 = this.$3B_0($v_1[0], $p1, false);
        }
        var $v_4 = new CUI.Controls.JewelMenuLauncher(this.get_jewel(), $v_0.Id, $v_0, $v_2);
        return $v_4;
    },
    
    get_$9F_1: function CUI_JewelBuilder$get_$9F_1() {ULSpEN:;
        return this.$z_0;
    }
}


CUI.Menu = function CUI_Menu($p0, $p1, $p2, $p3, $p4) {
    this.$7_1 = -1;
    CUI.Menu.initializeBase(this, [ $p0, $p1, $p2, $p3 ]);
    this.$6R_1 = $p4;
}
CUI.Menu.prototype = {
    $N_1: null,
    $A3_1: null,
    $9z_1: null,
    $3k_1: null,
    $6R_1: null,
    
    $1q_0: function CUI_Menu$$1q_0() {ULSpEN:;
        if (this.get_needsDelayIniting()) {
            this.doDelayedInit();
        }
        this.ensureDOMElementAndEmpty();
        var $v_0 = this.$0_0._textDirection;
        var $v_1 = this.get_$3_0();
        var $v_2 = this.$N_1;
        if (!$v_0) {
            $v_1.style.direction = 'ltr';
        }
        else if ($v_0 === 1) {
            CUI.Utility.ensureCSSClassOnElement($v_1, 'ms-cui-rtl');
            $v_1.style.direction = 'rtl';
        }
        if (CUI.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = CUI.Utility.$2('div');
            $v_2.className = 'ms-cui-smenu-inner';
        }
        $v_1.setAttribute('role', 'menu');
        $v_1.appendChild($v_2);
        if (!CUI.ScriptUtility.isNullOrEmptyString(this.$6R_1)) {
            $v_1.style.maxWidth = this.$6R_1;
        }
        this.appendChildrenToElement($v_2);
        CUI.Component.prototype.$1q_0.call(this);
        $addHandler($v_1, 'contextmenu', CUI.UIUtility.cancelEvent);
    },
    
    $1X_0: function CUI_Menu$$1X_0() {ULSpEN:;
        CUI.Component.prototype.$1X_0.call(this);
        var $v_0 = this.get_$3_0();
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$0_0.get_$3q_1()) && !CUI.ScriptUtility.isNullOrUndefined(this.$0_0.get_$1G_1())) {
            $v_0.style.backgroundColor = this.$0_0.get_$3q_1();
            $v_0.style.color = this.$0_0.get_$1G_1();
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$0_0.get_$9u_1())) {
            CUI.Utility.ensureCSSClassOnElement($v_0, this.$0_0.get_$9u_1());
        }
        if (CUI.Utility.$5a()) {
            CUI.Utility.ensureCSSClassOnElement($v_0, 'ms-cui-needIEFilter');
        }
    },
    
    get_cssClass: function CUI_Menu$get_cssClass() {ULSpEN:;
        return 'ms-cui-menu';
    },
    
    get_domElementTagName: function CUI_Menu$get_domElementTagName() {ULSpEN:;
        return 'div';
    },
    
    ensureCorrectChildType: function CUI_Menu$ensureCorrectChildType($p0) {
        if (!CUI.MenuSection.isInstanceOfType($p0)) {
            throw Error.create('Only MenuSection Components can be added to Menu Components.');
        }
    },
    
    get_innerDiv: function CUI_Menu$get_innerDiv() {ULSpEN:;
        return this.$N_1;
    },
    set_innerDiv: function CUI_Menu$set_innerDiv($p0) {
        this.$N_1 = $p0;
        return $p0;
    },
    
    $5G_1: null,
    
    get_$9Y_1: function CUI_Menu$get_$9Y_1() {ULSpEN:;
        return this.$5G_1;
    },
    set_$9Y_1: function CUI_Menu$set_$9Y_1($p0) {
        if ($p0 && !CUI.ScriptUtility.isNullOrUndefined(this.$5G_1)) {
            this.$0_0.$2g_1(this.$5G_1);
        }
        this.$5G_1 = $p0;
        return $p0;
    },
    
    get_$Ak_0: function CUI_Menu$get_$Ak_0() {ULSpEN:;
        if (this._componentHeight === -1 && !CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) {
            this._componentHeight = this.get_$3_0().offsetHeight;
        }
        return this._componentHeight;
    },
    
    get_$8W_0: function CUI_Menu$get_$8W_0() {ULSpEN:;
        if (this._componentTopPosition === -1 && !CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) {
            this._componentTopPosition = CUI.UIUtility.calculateOffsetTop(this.get_$3_0());
        }
        return this._componentTopPosition;
    },
    
    $Bg_1: function CUI_Menu$$Bg_1() {ULSpEN:;
        this._componentWidth = -1;
        this._componentHeight = -1;
        this._componentTopPosition = -1;
        this._componentLeftPosition = -1;
    },
    
    $3x_0: function CUI_Menu$$3x_0() {ULSpEN:;
        this.set_$3v_0(new Date());
        CUI.Component.prototype.$3x_0.call(this);
    },
    
    $y_0: function CUI_Menu$$y_0() {ULSpEN:;
        if (!this.$6_0.$M_0) {
            return;
        }
        this.$7_1 = 0;
        var $$enum_0 = this.$6_0.getEnumerator();
        while ($$enum_0.moveNext()) {
            var $v_0 = $$enum_0.get_current();
            $v_0.$y_0();
        }
    },
    
    $76_0: function CUI_Menu$$76_0() {ULSpEN:;
        if (!this.$6_0.$M_0) {
            return;
        }
        this.$7_1 = 0;
        (this.$6_0.get_item(0)).$76_0();
        this.$5S_0();
    },
    
    $78_0: function CUI_Menu$$78_0() {ULSpEN:;
        var $v_0 = this.$6_0.$M_0;
        if (!$v_0) {
            return;
        }
        this.$7_1 = $v_0 - 1;
        (this.$6_0.get_item(this.$7_1)).$78_0();
        this.$5T_0();
    },
    
    $77_0: function CUI_Menu$$77_0($p0) {
        if (!this.$6_0.$M_0) {
            return false;
        }
        this.$7_1 = 0;
        var $v_0 = 0;
        var $$enum_2 = this.$6_0.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_1 = $$enum_2.get_current();
            if ($v_1.$77_0($p0)) {
                this.$7_1 = $v_0;
                return true;
            }
            $v_0++;
        }
        return false;
    },
    
    $5T_0: function CUI_Menu$$5T_0() {ULSpEN:;
        if (this.$7_1 === -1) {
            this.$7_1 = this.$6_0.$M_0 - 1;
        }
        var $v_0 = this.$6_0.getEnumeratorAtPos(this.$7_1);
        var $v_1 = this.$7_1;
        while ($v_0.movePrevious()) {
            if (($v_0.get_current()).$5T_0()) {
                this.$7_1 = $v_1;
                return true;
            }
            $v_1--;
        }
        this.$7_1 = -1;
        return false;
    },
    
    $5S_0: function CUI_Menu$$5S_0() {ULSpEN:;
        if (this.$7_1 === -1) {
            this.$7_1 = 0;
        }
        var $v_0 = this.$6_0.getEnumeratorAtPos(this.$7_1);
        var $v_1 = this.$7_1;
        while ($v_0.moveNext()) {
            if (($v_0.get_current()).$5S_0()) {
                this.$7_1 = $v_1;
                return true;
            }
            $v_1++;
        }
        this.$7_1 = -1;
        return false;
    },
    
    $8z_1: function CUI_Menu$$8z_1($p0) {
        return this.$90_1(this, $p0);
    },
    
    $90_1: function CUI_Menu$$90_1($p0, $p1) {
        var $v_0;
        if (CUI.ControlComponent.isInstanceOfType($p0)) {
            var $v_2 = $p0;
            if (CUI.ISelectableControl.isInstanceOfType($v_2.$L_1)) {
                var $v_3 = $v_2.$L_1;
                if ($v_3.getMenuItemId() === $p1) {
                    return $v_3;
                }
            }
        }
        var $v_1 = $p0.$6_0;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1)) {
            var $$enum_6 = $v_1.getEnumerator();
            while ($$enum_6.moveNext()) {
                var $v_4 = $$enum_6.get_current();
                $v_0 = this.$90_1($v_4, $p1);
                if ($v_0) {
                    return $v_0;
                }
            }
        }
        return null;
    },
    
    $Bc_1: function CUI_Menu$$Bc_1() {ULSpEN:;
        var $$enum_0 = this.$6_0.getEnumerator();
        while ($$enum_0.moveNext()) {
            var $v_0 = $$enum_0.get_current();
            var $$enum_2 = $v_0.$6_0.getEnumerator();
            while ($$enum_2.moveNext()) {
                var $v_1 = $$enum_2.get_current();
                if ($v_1.get_visible()) {
                    return true;
                }
            }
        }
        return false;
    },
    
    get_visibleInDOM: function CUI_Menu$get_visibleInDOM() {ULSpEN:;
        return this.$6P_1;
    },
    
    $6P_1: false,
    
    dispose: function CUI_Menu$dispose() {ULSpEN:;
        CUI.Component.prototype.dispose.call(this);
        this.$N_1 = null;
        this.$A3_1 = null;
        this.$9z_1 = null;
        this.$3k_1 = null;
        try {
            $removeHandler(this.get_$3_0(), 'contextmenu', CUI.Utility.get_returnFalseHandler());
        }
        catch ($$e_0) {
        }
    }
}


CUI.MenuItem = function CUI_MenuItem($p0, $p1, $p2, $p3) {
    CUI.MenuItem.initializeBase(this, [ $p0, $p1, $p2, $p3 ]);
}
CUI.MenuItem.prototype = {
    $7t_2: false,
    
    get_$1A_2: function CUI_MenuItem$get_$1A_2() {ULSpEN:;
        return this.$7t_2;
    },
    set_$1A_2: function CUI_MenuItem$set_$1A_2($p0) {
        this.$7t_2 = $p0;
        return $p0;
    },
    
    $77_0: function CUI_MenuItem$$77_0($p0) {
        if (CUI.ISelectableControl.isInstanceOfType(this.$L_1)) {
            var $v_0 = this.$L_1;
            if ($v_0.getMenuItemId() === $p0) {
                if (this.get_visible() && this.get_enabled()) {
                    this.receiveFocus();
                    this.set_$1A_2(true);
                    return true;
                }
            }
        }
        return false;
    },
    
    $5T_0: function CUI_MenuItem$$5T_0() {ULSpEN:;
        if (!this.get_visible()) {
            return false;
        }
        this.set_$1A_2(this.$L_1.$5T_0());
        return this.get_$1A_2();
    },
    
    $5S_0: function CUI_MenuItem$$5S_0() {ULSpEN:;
        if (!this.get_visible()) {
            return false;
        }
        this.set_$1A_2(this.$L_1.$5S_0());
        return this.get_$1A_2();
    },
    
    $y_0: function CUI_MenuItem$$y_0() {ULSpEN:;
        this.set_$1A_2(false);
    }
}


CUI.MenuLauncherControlProperties = function CUI_MenuLauncherControlProperties() {ULSpEN:;
    CUI.MenuLauncherControlProperties.initializeBase(this);
}
CUI.MenuLauncherControlProperties.prototype = {
    CacheMenuVersions: null,
    CommandMenuOpen: null,
    CommandMenuClose: null,
    CommandValueId: null,
    PopulateDynamically: null,
    PopulateOnlyOnce: null,
    PopulateQueryCommand: null
}


CUI.BrowserUtility = function CUI_BrowserUtility() {
}
CUI.BrowserUtility.$Bh = function CUI_BrowserUtility$$Bh() {ULSpEN:;
    return Sys.Browser.agent === Sys.Browser.Firefox || Sys.Browser.name.toLowerCase().indexOf('firefox') !== -1 || (navigator.userAgent).toLowerCase().indexOf('gecko') !== -1;
}


CUI.MenuLauncher = function CUI_MenuLauncher($p0, $p1, $p2, $p3) {
    this.$$d_$CK_1 = Function.createDelegate(this, this.$CK_1);
    this.$$d_addAndPositionBackFrameInternal = Function.createDelegate(this, this.addAndPositionBackFrameInternal);
    this.$5H_1 = -1;
    CUI.MenuLauncher.initializeBase(this, [ $p0, $p1, $p2 ]);
    this.$B_1 = $p3;
}
CUI.MenuLauncher.dictToInt = function CUI_MenuLauncher$dictToInt($p0, $p1) {
    return $p0[$p1];
}
CUI.MenuLauncher.prototype = {
    $g_1: false,
    _selectedControl: null,
    
    get_menuLaunched: function CUI_MenuLauncher$get_menuLaunched() {ULSpEN:;
        return this.$g_1;
    },
    
    $B_1: null,
    
    get_launcherComponent: function CUI_MenuLauncher$get_launcherComponent() {ULSpEN:;
        return this.get_displayedComponent();
    },
    
    get_$Bm_1: function CUI_MenuLauncher$get_$Bm_1() {ULSpEN:;
        if (CUI.Group.isInstanceOfType(this.get_launcherComponent())) {
            var $v_0 = this.get_launcherComponent();
            return $v_0.$a_2;
        }
        return this.get_displayedComponent().get_$3_0();
    },
    
    get_menuDirection: function CUI_MenuLauncher$get_menuDirection() {ULSpEN:;
        return 2;
    },
    
    $17_1: false,
    
    get_launchedByKeyboard: function CUI_MenuLauncher$get_launchedByKeyboard() {ULSpEN:;
        return this.$17_1;
    },
    set_launchedByKeyboard: function CUI_MenuLauncher$set_launchedByKeyboard($p0) {
        this.$17_1 = $p0;
        return $p0;
    },
    
    $2U_1: null,
    
    get_elmHadFocus: function CUI_MenuLauncher$get_elmHadFocus() {ULSpEN:;
        return this.$2U_1;
    },
    set_elmHadFocus: function CUI_MenuLauncher$set_elmHadFocus($p0) {
        this.$2U_1 = $p0;
        return $p0;
    },
    
    $3S_1: null,
    
    get_$8Q_1: function CUI_MenuLauncher$get_$8Q_1() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$3S_1)) {
            this.$3S_1 = CUI.Utility.$8d();
        }
        return this.$3S_1;
    },
    
    launchMenu: function CUI_MenuLauncher$launchMenu($p0, $p1) {
        if (this.$g_1) {
            return false;
        }
        this.$2U_1 = $p0;
        if (CUI.Utility.$o(this.get_$1_1().PopulateDynamically)) {
            this.pollForDynamicMenu(true, $p1);
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$B_1)) {
            return false;
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$4Q_1)) {
            this.$4Q_1();
            this.$4Q_1 = null;
        }
        this.$B_1.$2i_0();
        if (!this.$B_1.$Bc_1()) {
            return false;
        }
        var $v_0 = this.get_displayedComponent();
        $v_0.$6y_0();
        $v_0.$4J_0 = true;
        $v_0.addChild(this.$B_1);
        $v_0.$4J_0 = false;
        this.$B_1.$9a_0();
        this.$B_1.$Bg_1();
        var $v_1 = CUI.ScalableRoot.isInstanceOfType(this.$0_0);
        var $v_2 = null;
        var $v_3 = false;
        if ($v_1) {
            $v_2 = this.$0_0;
            $v_3 = $v_2.get_$4k_2();
            $v_2.set_$4k_2(false);
        }
        var $v_4 = this.$B_1.get_$3_0();
        $v_4.style.visibility = 'hidden';
        $v_4.style.position = 'absolute';
        $v_4.style.top = '0px';
        $v_4.style.left = '0px';
        $v_4.style.zIndex = 1001;
        $v_4.style.maxHeight = '100px';
        $v_4.style.overflowY = 'scroll';
        document.body.appendChild($v_4);
        if (CUI.Utility.$3F() && this.$0_0._textDirection === 1) {
            var $v_5 = $v_4.offsetWidth;
            $v_5 = ($v_5 >= 18) ? $v_5 - 18 : 0;
            var $v_6 = $v_5 + 'px';
            var $v_7 = this.$B_1.$6_0;
            var $$enum_A = $v_7.getEnumerator();
            while ($$enum_A.moveNext()) {
                var $v_8 = $$enum_A.get_current();
                var $v_9 = $v_8.$6_0;
                var $$enum_D = $v_9.getEnumerator();
                while ($$enum_D.moveNext()) {
                    var $v_A = $$enum_D.get_current();
                    if (CUI.MenuItem.isInstanceOfType($v_A)) {
                        $v_A.get_$3_0().style.width = $v_6;
                    }
                }
            }
        }
        this.positionMenu($v_4, this.get_$Bm_1());
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            this.addAndPositionBackFrame();
        }
        this.$0_0.$AJ_1(this, this.$2U_1);
        this.$0_0.$AB_1(this);
        $v_4.style.visibility = 'visible';
        this.$g_1 = true;
        this.$B_1.$6P_1 = true;
        this.$BR_1();
        if ($v_1) {
            $v_2.set_$4k_2($v_3);
        }
        return true;
    },
    
    $BR_1: function CUI_MenuLauncher$$BR_1() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$B_1.$3k_1) && !CUI.ScriptUtility.isNullOrUndefined(this._selectedControl)) {
            var $v_0 = this._selectedControl;
            var $v_1 = $v_0.get_displayedComponent();
            if (CUI.MenuItem.isInstanceOfType($v_1)) {
                this.$B_1.$3k_1 = $v_1;
            }
        }
        if (this.$17_1) {
            this.$B_1.$76_0();
        }
        else {
            var $v_2 = this.$B_1.$3k_1;
            if (!CUI.ScriptUtility.isNullOrUndefined($v_2)) {
                var $v_3 = $v_2.$L_1;
                if (CUI.Controls.ToggleButton.isInstanceOfType($v_3) && CUI.ISelectableControl.isInstanceOfType($v_3)) {
                    var $v_4 = $v_3;
                    if (!this.$B_1.$77_0($v_4.getMenuItemId())) {
                        this.$B_1.$76_0();
                    }
                }
            }
        }
    },
    
    addAndPositionBackFrame: function CUI_MenuLauncher$addAndPositionBackFrame() {ULSpEN:;
        if (this.$5H_1 !== -1) {
            window.clearTimeout(this.$5H_1);
        }
        this.$5H_1 = window.setTimeout(this.$$d_addAndPositionBackFrameInternal, 50);
    },
    
    addAndPositionBackFrameInternal: function CUI_MenuLauncher$addAndPositionBackFrameInternal() {ULSpEN:;
        CUI.PMetrics.perfMark(7188);
        document.body.appendChild(this.get_$8Q_1());
        CUI.Utility.$9b(this.get_$8Q_1(), this.$B_1.get_$3_0());
        CUI.PMetrics.perfMark(7189);
    },
    
    onModalBodyClick: function CUI_MenuLauncher$onModalBodyClick($p0) {
        $p0.stopPropagation();
        this.$17_1 = false;
        this.$0_0.$2g_1(this);
    },
    
    onModalBodyMouseOver: function CUI_MenuLauncher$onModalBodyMouseOver($p0) {
    },
    
    onModalBodyMouseOut: function CUI_MenuLauncher$onModalBodyMouseOut($p0) {
    },
    
    onModalContextMenu: function CUI_MenuLauncher$onModalContextMenu($p0) {
        $p0.preventDefault();
        this.$17_1 = false;
        this.$0_0.$2g_1(this);
    },
    
    onModalKeyPress: function CUI_MenuLauncher$onModalKeyPress($p0) {
        if ($p0) {
            if ($p0.rawEvent) {
                var $v_0 = $p0.rawEvent;
                if ($v_0.keyCode === 27) {
                    $p0.stopPropagation();
                    this.$17_1 = true;
                    this.$0_0.$2g_1(this);
                }
                if ($v_0.keyCode === 9) {
                    if ($p0.shiftKey) {
                        if (!this.$B_1.$5T_0()) {
                            this.$B_1.$78_0();
                        }
                        $p0.preventDefault();
                    }
                    else {
                        if (!this.$B_1.$5S_0()) {
                            this.$B_1.$76_0();
                        }
                        $p0.preventDefault();
                    }
                }
                if ($v_0.keyCode === 40) {
                    if (!this.$B_1.$5S_0()) {
                        this.$B_1.$76_0();
                    }
                    $p0.stopPropagation();
                }
                if ($v_0.keyCode === 38) {
                    if (!this.$B_1.$5T_0()) {
                        this.$B_1.$78_0();
                    }
                    $p0.stopPropagation();
                }
                if (CUI.Controls.FlyoutAnchor.isInstanceOfType(this)) {
                    if (($v_0.keyCode === 39 && !this.$0_0._textDirection) || ($v_0.keyCode === 37 && this.$0_0._textDirection === 1)) {
                        if (!this.$B_1.$5S_0()) {
                            this.$B_1.$76_0();
                        }
                        $p0.stopPropagation();
                    }
                    if (($v_0.keyCode === 37 && !this.$0_0._textDirection) || ($v_0.keyCode === 39 && this.$0_0._textDirection === 1)) {
                        if (!this.$B_1.$5T_0()) {
                            this.$B_1.$78_0();
                        }
                        $p0.stopPropagation();
                    }
                }
            }
        }
    },
    
    positionMenu: function CUI_MenuLauncher$positionMenu($p0, $p1) {
        if (CUI.ScriptUtility.isNullOrUndefined($p0) || CUI.ScriptUtility.isNullOrUndefined($p1)) {
            return;
        }
        $p0.style.top = '0px';
        $p0.style.left = '0px';
        var $v_0 = this.$0_0.$79_1($p0, $p1);
        if (CUI.Group.isInstanceOfType(this.get_launcherComponent())) {
            $v_0['launcherHeight'] = 0;
        }
        this.$0_0.$7b_1($p0, $v_0, this.get_menuDirection());
    },
    
    $4b_1: function CUI_MenuLauncher$$4b_1() {ULSpEN:;
        if (!this.$g_1) {
            return;
        }
        $clearHandlers(this.$B_1.get_$3_0());
        CUI.UIUtility.removeNode(this.$B_1.get_$3_0());
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$3S_1)) {
            CUI.UIUtility.removeNode(this.$3S_1);
        }
        this.$B_1.onMenuClosed();
        var $v_0 = this.$B_1.$K_0;
        $v_0.$4J_0 = true;
        $v_0.removeChild(this.$B_1.$4_0);
        $v_0.$4J_0 = false;
        this.$g_1 = false;
        this.$B_1.$6P_1 = false;
        this.$0_0.$B9_1(this);
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$2U_1) && this.$17_1) {
            this.$2U_1.focus();
        }
        this.$2U_1 = null;
        this.$17_1 = false;
        this.onLaunchedMenuClosed();
    },
    
    onMenuClosed: function CUI_MenuLauncher$onMenuClosed() {
    },
    
    onLaunchedMenuClosed: function CUI_MenuLauncher$onLaunchedMenuClosed() {ULSpEN:;
        this.$B_1.$y_0();
    },
    
    ensureCorrectChildType: function CUI_MenuLauncher$ensureCorrectChildType($p0) {
        if ((!CUI.Menu.isInstanceOfType($p0)) && (!(CUI.ToolTip.isInstanceOfType($p0)))) {
            throw Error.create('This Component can only have Menu and ToolTip Components as children.');
        }
    },
    
    $2j_0: function CUI_MenuLauncher$$2j_0($p0) {
        if (this.$g_1 && $p0.$G_1 !== 4 && $p0.$G_1 !== 5 && $p0.$G_1 !== 6 && $p0.$G_1 !== 7 && $p0.$G_1 !== 8 && $p0.$G_1 !== 9 && $p0.$G_1 !== 10) {
            if (!CUI.ScriptUtility.isNullOrUndefined($p0.get_sourceControl())) {
                var $v_0 = $p0.get_sourceControl().get_displayedComponent();
                this.$B_1.$3k_1 = $v_0;
            }
            this.$0_0.$2g_1(this);
        }
        return true;
    },
    
    $86_1: false,
    $4Q_1: null,
    
    pollForDynamicMenu: function CUI_MenuLauncher$pollForDynamicMenu($p0, $p1) {
        if (this.$86_1 && CUI.Utility.$o(this.get_$1_1().PopulateOnlyOnce)) {
            return;
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_1().PopulateQueryCommand)) {
            return;
        }
        var $v_0 = ({});
        var $v_1;
        if (CUI.Utility.$o(this.get_$1_1().CacheMenuVersions)) {
            $v_1 = {};
            var $$dict_4 = this.$3M_1;
            for (var $$key_5 in $$dict_4) {
                var $v_3 = { key: $$key_5, value: $$dict_4[$$key_5] };
                $v_1[$v_3.key] = true;
            }
            $v_0.CachedVersions = $v_1;
        }
        var $v_2 = this.$0_0.$3H_1(this.get_$1_1().PopulateQueryCommand, this.get_$1_1().PopulateQueryCommand, $v_0, false);
        if (($v_2 & 1) > 0) {
            var $v_4 = null;
            var $v_5 = null;
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0.PopulationJSON)) {
                $v_5 = $v_0.PopulationJSON;
            }
            else if (!CUI.ScriptUtility.isNullOrUndefined($v_0.PopulationXML)) {
                $v_5 = CUI.Builder.$8Z($v_0.PopulationXML);
            }
            if (!CUI.ScriptUtility.isNullOrUndefined($v_5)) {
                $v_4 = this.$0_0.get_$19_1().$3B_0($v_5, new CUI.BuildContext(), false);
                if (!CUI.ScriptUtility.isNullOrUndefined($v_4)) {
                    this.$86_1 = true;
                    if (CUI.Utility.$o(this.get_$1_1().CacheMenuVersions) && !CUI.ScriptUtility.isNullOrUndefined($v_0.PopulationVersion)) {
                        this.get_cachedMenuVersions()[$v_0.PopulationVersion] = $v_4;
                    }
                }
            }
            else if (!CUI.ScriptUtility.isNullOrUndefined($v_0.PopulationVersion)) {
                $v_4 = this.get_cachedMenuVersions()[$v_0.PopulationVersion];
            }
            else if ($p0 && -1 !== $v_0.PollAgainInterval) {
                this.$4Q_1 = $p1;
                window.setTimeout(this.$$d_$CK_1, $v_0.PollAgainInterval);
                this.$B_1 = null;
            }
            if (!CUI.ScriptUtility.isNullOrUndefined($v_4)) {
                this.$B_1 = $v_4;
                this.onDynamicMenuPopulated();
            }
        }
    },
    
    $CK_1: function CUI_MenuLauncher$$CK_1() {ULSpEN:;
        this.launchMenu(this.$2U_1, this.$4Q_1);
    },
    
    onDynamicMenuPopulated: function CUI_MenuLauncher$onDynamicMenuPopulated() {
    },
    
    get_$1_1: function CUI_MenuLauncher$get_$1_1() {ULSpEN:;
        return this.$5_0;
    },
    
    $3M_1: null,
    
    get_cachedMenuVersions: function CUI_MenuLauncher$get_cachedMenuVersions() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$3M_1)) {
            this.$3M_1 = {};
        }
        return this.$3M_1;
    },
    
    dispose: function CUI_MenuLauncher$dispose() {ULSpEN:;
        CUI.Control.prototype.dispose.call(this);
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$B_1)) {
            this.$B_1.dispose();
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$3M_1)) {
            var $$dict_0 = this.$3M_1;
            for (var $$key_1 in $$dict_0) {
                var $v_0 = { key: $$key_1, value: $$dict_0[$$key_1] };
                var $v_1 = $v_0.value;
                $v_1.dispose();
            }
        }
        this._selectedControl = null;
        this.$B_1 = null;
        this.$3S_1 = null;
    }
}


CUI.MenuSection = function CUI_MenuSection($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    this.$7_1 = -1;
    CUI.MenuSection.initializeBase(this, [ $p0, $p1, $p2, $p3 ]);
    this.$89_1 = $p4;
    this.$5E_1 = $p5;
    this.$5z_1 = $p6;
}
CUI.MenuSection.prototype = {
    $89_1: false,
    $5E_1: null,
    $5z_1: null,
    $30_1: null,
    $D_1: null,
    $1a_1: null,
    
    $1q_0: function CUI_MenuSection$$1q_0() {ULSpEN:;
        this.ensureDOMElementAndEmpty();
        this.$30_1 = CUI.Utility.$2('div');
        this.$30_1.className = 'ms-cui-menusection';
        this.get_$3_0().appendChild(this.$30_1);
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_title())) {
            this.$D_1 = CUI.Utility.$2('div');
            CUI.UIUtility.setInnerText(this.$D_1, this.get_title());
            this.$D_1.className = 'ms-cui-menusection-title';
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$0_0.get_$3q_1()) && !CUI.ScriptUtility.isNullOrUndefined(this.$0_0.get_$1G_1())) {
                this.$D_1.style.backgroundColor = this.$0_0.get_$3q_1();
                this.$D_1.style.color = this.$0_0.get_$1G_1();
            }
            this.$30_1.appendChild(this.$D_1);
        }
        this.$1a_1 = CUI.Utility.$2('ul');
        this.$1a_1.className = 'ms-cui-menusection-items';
        var $v_0;
        if (this.$5z_1 === 'Menu32') {
            if (!this.$0_0._textDirection) {
                $v_0 = 'ms-cui-menusection-items32';
            }
            else {
                $v_0 = 'ms-cui-menusection-items32rtl';
            }
            var $v_1 = this.$K_0;
            if (CUI.Menu.isInstanceOfType($v_1)) {
                CUI.Utility.ensureCSSClassOnElement($v_1.get_$3_0(), 'ms-cui-menu32');
            }
        }
        else if (this.$5z_1 === 'Menu16') {
            if (!this.$0_0._textDirection) {
                $v_0 = 'ms-cui-menusection-items16';
            }
            else {
                $v_0 = 'ms-cui-menusection-items16rtl';
            }
        }
        else {
            $v_0 = '';
        }
        if ($v_0 !== '') {
            CUI.Utility.ensureCSSClassOnElement(this.$1a_1, $v_0);
        }
        if (this.$89_1) {
            this.$1a_1.style.overflowY = 'auto';
            this.$1a_1.style.position = 'relative';
        }
        if (!CUI.ScriptUtility.isNullOrEmptyString(this.$5E_1)) {
            var $v_2 = parseInt(this.$5E_1) + 2;
            this.$1a_1.style.maxHeight = this.$5E_1;
            this.$30_1.style.maxHeight = $v_2 + 'px';
        }
        this.$30_1.appendChild(this.$1a_1);
        this.appendChildrenToElement(this.$1a_1);
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$0_0.get_$3q_1()) && !CUI.ScriptUtility.isNullOrUndefined(this.$0_0.get_$1G_1())) {
            this.$1a_1.style.backgroundColor = this.$0_0.get_$3q_1();
            this.$1a_1.style.color = this.$0_0.get_$1G_1();
        }
    },
    
    get_domElementTagName: function CUI_MenuSection$get_domElementTagName() {ULSpEN:;
        return 'div';
    },
    
    appendChildrenToElement: function CUI_MenuSection$appendChildrenToElement($p0) {
        var $v_0;
        var $$enum_2 = this.$6_0.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_1 = $$enum_2.get_current();
            $v_0 = CUI.Utility.$2('li');
            $v_0.className = 'ms-cui-menusection-items';
            $v_1.$1X_0();
            $v_0.appendChild($v_1.get_$3_0());
            $p0.appendChild($v_0);
            $v_1.$2i_0();
        }
    },
    
    $y_0: function CUI_MenuSection$$y_0() {ULSpEN:;
        if (!this.$6_0.$M_0) {
            return;
        }
        this.$7_1 = 0;
        var $$enum_0 = this.$6_0.getEnumerator();
        while ($$enum_0.moveNext()) {
            var $v_0 = $$enum_0.get_current();
            $v_0.$y_0();
        }
    },
    
    $76_0: function CUI_MenuSection$$76_0() {ULSpEN:;
        if (!this.$6_0.$M_0) {
            return;
        }
        if (this.$7_1 > -1) {
            (this.$6_0.get_item(this.$7_1)).$y_0();
        }
        this.$7_1 = 0;
        (this.$6_0.get_item(this.$7_1)).$76_0();
    },
    
    $78_0: function CUI_MenuSection$$78_0() {ULSpEN:;
        var $v_0 = this.$6_0.$M_0;
        if (!$v_0) {
            return;
        }
        if (this.$7_1 > -1) {
            (this.$6_0.get_item(this.$7_1)).$y_0();
        }
        this.$7_1 = $v_0 - 1;
        (this.$6_0.get_item(this.$7_1)).$78_0();
    },
    
    $77_0: function CUI_MenuSection$$77_0($p0) {
        if (!this.$6_0.$M_0) {
            return false;
        }
        var $v_0 = 0;
        var $$enum_2 = this.$6_0.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_1 = $$enum_2.get_current();
            if ($v_1.$77_0($p0)) {
                if (this.$7_1 > -1) {
                    (this.$6_0.get_item(this.$7_1)).$y_0();
                }
                this.$7_1 = $v_0;
                return true;
            }
            $v_0++;
        }
        return false;
    },
    
    $5T_0: function CUI_MenuSection$$5T_0() {ULSpEN:;
        var $v_0 = this.$6_0.$M_0;
        if (this.$7_1 === -1) {
            this.$7_1 = $v_0 - 1;
        }
        var $v_1 = this.$7_1;
        var $v_2 = this.$6_0.getEnumeratorAtPos($v_1);
        while ($v_2.movePrevious()) {
            if (($v_2.get_current()).$5T_0()) {
                if ($v_1 !== this.$7_1) {
                    (this.$6_0.get_item(this.$7_1)).$y_0();
                    this.$7_1 = $v_1;
                }
                return true;
            }
            $v_1--;
        }
        if ($v_0 > 0) {
            (this.$6_0.get_item(this.$7_1)).$y_0();
        }
        this.$7_1 = -1;
        return false;
    },
    
    $5S_0: function CUI_MenuSection$$5S_0() {ULSpEN:;
        if (this.$7_1 === -1) {
            this.$7_1 = 0;
        }
        var $v_0 = this.$6_0.getEnumeratorAtPos(this.$7_1);
        var $v_1 = this.$7_1;
        while ($v_0.moveNext()) {
            if (($v_0.get_current()).$5S_0()) {
                if ($v_1 !== this.$7_1) {
                    if (!CUI.ScriptUtility.isNullOrUndefined(this.$6_0.get_item(this.$7_1))) {
                        (this.$6_0.get_item(this.$7_1)).$y_0();
                    }
                    this.$7_1 = $v_1;
                }
                return true;
            }
            $v_1++;
        }
        if (this.$6_0.$M_0 > 0) {
            (this.$6_0.get_item(this.$7_1)).$y_0();
        }
        this.$7_1 = -1;
        return false;
    },
    
    ensureCorrectChildType: function CUI_MenuSection$ensureCorrectChildType($p0) {
        if (!CUI.MenuItem.isInstanceOfType($p0) && !CUI.Gallery.isInstanceOfType($p0) && !CUI.GroupPopup.isInstanceOfType($p0)) {
            throw Error.create('MenuSections can only have children of type MenuItem, Gallery or GroupPopup.');
        }
    },
    
    $9q_1: function CUI_MenuSection$$9q_1($p0) {
        this.$1W_0 = $p0;
        CUI.UIUtility.setInnerText(this.$D_1, $p0);
    },
    
    dispose: function CUI_MenuSection$dispose() {ULSpEN:;
        CUI.Component.prototype.dispose.call(this);
        this.$1a_1 = null;
        this.$D_1 = null;
        this.$30_1 = null;
    }
}


CUI.StandaloneDock = function CUI_StandaloneDock($p0, $p1) {
    CUI.StandaloneDock.initializeBase(this, [ $p0, $p1, '', '' ]);
}
CUI.StandaloneDock.prototype = {
    
    $1q_0: function CUI_StandaloneDock$$1q_0() {ULSpEN:;
        this.ensureDOMElementAndEmpty();
        this.appendChildrenToElement(this.get_$3_0());
        CUI.Component.prototype.$1q_0.call(this);
    },
    
    ensureCorrectChildType: function CUI_StandaloneDock$ensureCorrectChildType($p0) {
        if (!CUI.ControlComponent.isInstanceOfType($p0)) {
            throw Error.create('Only children of type Control can be added to StandaloneDocks.');
        }
    },
    
    get_visibleInDOM: function CUI_StandaloneDock$get_visibleInDOM() {ULSpEN:;
        return true;
    }
}


CUI.StandaloneRootProperties = function CUI_StandaloneRootProperties() {ULSpEN:;
    CUI.StandaloneRootProperties.initializeBase(this);
}


CUI.StandaloneRoot = function CUI_StandaloneRoot(id, properties) {ULSpEN:;
    this.$1t_2 = {};
    CUI.StandaloneRoot.initializeBase(this, [ id, properties ]);
}
CUI.StandaloneRoot.prototype = {
    
    get_createdControls: function CUI_StandaloneRoot$get_createdControls() {ULSpEN:;
        return this.$1t_2;
    },
    
    get_rootType: function CUI_StandaloneRoot$get_rootType() {ULSpEN:;
        return 'Standalone';
    },
    
    get_$19_1: function CUI_StandaloneRoot$get_$19_1() {ULSpEN:;
        if (!CUI.Root.prototype.get_$19_1.call(this)) {
            var $v_0 = new CUI.BuildOptions();
            $v_0.lazyMenuInit = false;
            CUI.Root.prototype.set_$19_1.call(this, new CUI.Builder($v_0, null, null));
            CUI.Root.prototype.get_$19_1.call(this).$0_0 = this;
        }
        return CUI.Root.prototype.get_$19_1.call(this);
    },
    set_$19_1: function CUI_StandaloneRoot$set_$19_1($p0) {
        CUI.Root.prototype.set_$19_1.call(this, $p0);
        return $p0;
    },
    
    setBuilder: function CUI_StandaloneRoot$setBuilder(builder) {ULSpEN:;
        this.set_$19_1(builder);
        builder.$0_0 = this;
    },
    
    get_standaloneRootProperties: function CUI_StandaloneRoot$get_standaloneRootProperties() {ULSpEN:;
        return this.$5_1;
    },
    
    addControl: function CUI_StandaloneRoot$addControl(id, controlXml) {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$1t_2[id])) {
            throw Error.create(String.format('Control id {0} already exists in this root.', id));
        }
        var $v_0 = CUI.Builder.$8Z(controlXml);
        var $v_1 = this.get_$19_1().$4Z_0($v_0, new CUI.BuildContext());
        $v_1.$9l_0(true);
        this.$1t_2[id] = $v_1;
    },
    
    removeControl: function CUI_StandaloneRoot$removeControl(id) {ULSpEN:;
        var $v_0 = this.$1t_2[id];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            throw Error.create(String.format('Control with id \'{0}\' not found in root.', id));
        }
        var $v_1 = this.$BW_2(id);
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            this.removeChild($v_1[$v_2]);
        }
        this.$1t_2[id] = null;
    },
    
    getDOMElementForControlDisplayMode: function CUI_StandaloneRoot$getDOMElementForControlDisplayMode(id, displayMode) {ULSpEN:;
        var $v_0 = this.$1t_2[id];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            throw Error.create(String.format('Control with id \'{0}\' not found in root.', id));
        }
        var $v_1 = this.$BV_2(id, displayMode);
        var $v_2 = this.getChild($v_1);
        if (CUI.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = new CUI.StandaloneDock(this, $v_1);
            this.addChild($v_2);
        }
        if (CUI.ScriptUtility.isNullOrUndefined($v_2.getChild(id))) {
            $v_2.addChild($v_0.createComponentForDisplayMode(displayMode));
        }
        return $v_0.getDOMElementForDisplayMode(displayMode);
    },
    
    pollForControlState: function CUI_StandaloneRoot$pollForControlState(id) {ULSpEN:;
        var $v_0 = this.$1t_2[id];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            throw Error.create(String.format('Control with id \'{0}\' not found in root.', id));
        }
        $v_0.$9Z_0();
    },
    
    $BV_2: function CUI_StandaloneRoot$$BV_2($p0, $p1) {
        return String.format('dock_{0}-{1}', $p0, $p1);
    },
    
    $BW_2: function CUI_StandaloneRoot$$BW_2($p0) {
        var $v_0 = [];
        var $$enum_2 = this.$6_0.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_1 = $$enum_2.get_current();
            if ($v_1.$4_0.startsWith('dock_' + $p0)) {
                Array.add($v_0, $v_1.$4_0);
            }
        }
        return $v_0;
    }
}


CUI.QAT = function CUI_QAT($p0, $p1) {
    CUI.QAT.initializeBase(this, [ $p0, $p1 ]);
}
CUI.QAT.prototype = {
    
    refresh: function CUI_QAT$refresh() {ULSpEN:;
        this.$1q_0();
        CUI.Root.prototype.refresh.call(this);
    },
    
    $1q_0: function CUI_QAT$$1q_0() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) {
            this.$1X_0();
        }
        this.set_$3_0(CUI.Utility.removeChildNodes(this.get_$3_0()));
        this.appendChildrenToElement(this.get_$3_0());
        this.$j_0 = false;
    },
    
    ensureCorrectChildType: function CUI_QAT$ensureCorrectChildType(child) {ULSpEN:;
        if (!CUI.ControlComponent.isInstanceOfType(child)) {
            throw Error.create('Only children of type ControlComponent can be added to a QAT');
        }
    },
    
    get_cssClass: function CUI_QAT$get_cssClass() {ULSpEN:;
        return 'ms-cui-QAT ' + CUI.Root.prototype.get_cssClass.call(this);
    },
    
    get_rootType: function CUI_QAT$get_rootType() {ULSpEN:;
        return 'QAT';
    },
    
    get_visibleInDOM: function CUI_QAT$get_visibleInDOM() {ULSpEN:;
        return true;
    },
    
    get_$CU_2: function CUI_QAT$get_$CU_2() {ULSpEN:;
        return this.get_$19_1();
    },
    set_$CU_2: function CUI_QAT$set_$CU_2($p0) {
        this.set_$19_1($p0);
        return $p0;
    }
}


CUI.QATBuildContext = function CUI_QATBuildContext() {ULSpEN:;
    CUI.QATBuildContext.initializeBase(this);
}
CUI.QATBuildContext.prototype = {
    QAT: null,
    qatId: null
}


CUI.QATBuildOptions = function CUI_QATBuildOptions() {ULSpEN:;
    CUI.QATBuildOptions.initializeBase(this);
}


CUI.QATBuilder = function CUI_QATBuilder(options, elmPlaceholder, rootBuildClient) {ULSpEN:;
    this.$$d_$CC_1 = Function.createDelegate(this, this.$CC_1);
    CUI.QATBuilder.initializeBase(this, [ options, elmPlaceholder, rootBuildClient ]);
    if (CUI.ScriptUtility.isNullOrUndefined(elmPlaceholder)) {
        throw Error.create('QAT placeholder DOM element is null or undefined.');
    }
}
CUI.QATBuilder.prototype = {
    
    get_QAT: function CUI_QATBuilder$get_QAT() {ULSpEN:;
        return this.$0_0;
    },
    set_QAT: function CUI_QATBuilder$set_QAT(value) {ULSpEN:;
        this.$0_0 = value;
        return value;
    },
    
    buildQAT: function CUI_QATBuilder$buildQAT(qatId) {ULSpEN:;
        if (this.$2Z_0) {
            return false;
        }
        if (this.isIdTrimmed(qatId)) {
            return true;
        }
        var $v_0 = new CUI.QATBuildContext();
        $v_0.qatId = qatId;
        this.$2Z_0 = true;
        var $v_1 = new CUI.DataQuery();
        $v_1.id = $v_0.qatId;
        $v_1.queryType = 5;
        $v_1.handler = this.$$d_$CC_1;
        $v_1.data = $v_0;
        this.$11_0.runQuery($v_1);
        return true;
    },
    
    $CC_1: function CUI_QATBuilder$$CC_1($p0) {
        var $v_0 = $p0.contextData;
        $p0.queryData = this.applyDataExtensions($p0.queryData);
        this.set_QAT(this.$AY_1(CUI.DataNodeWrapper.getFirstChildNodeWithName($p0.queryData, 'QAT'), $v_0));
        this.get_QAT().set_$CU_2(this);
        this.get_QAT()._percentPositivePattern = this.get_$7R_1().percentPositivePattern;
        this.get_QAT()._decimalSeparator = this.get_$7R_1().decimalSeparator;
        this.$24_0.onComponentCreated(this.get_QAT(), this.get_QAT().$4_0);
        if (this.get_$7R_1().attachToDOM) {
            this.get_QAT().$3p_0(true);
        }
        else {
            this.get_QAT().$1q_0();
            this._elmPlaceholder.appendChild(this.get_QAT().get_$3_0());
            CUI.Utility.ensureCSSClassOnElement(this._elmPlaceholder, 'loaded');
        }
        this.$7O_0(this.get_QAT());
        this.$24_0.onComponentBuilt(this.get_QAT(), this.get_QAT().$4_0);
    },
    
    $AY_1: function CUI_QATBuilder$$AY_1($p0, $p1) {
        if (CUI.ScriptUtility.isNullOrUndefined($p0)) {
            throw Error.create('No QAT element was present in the data');
        }
        var $v_0 = new CUI.DataNodeWrapper($p0);
        this.set_QAT(new CUI.QAT($v_0.get_attributes()['Id'], $v_0.get_attributes()));
        var $v_1 = CUI.DataNodeWrapper.getNodeChildren(CUI.DataNodeWrapper.getFirstChildNodeWithName($v_0.$d_0, 'Controls'));
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            if (!this.isNodeTrimmed($v_1[$v_2])) {
                var $v_3 = this.$4Z_0($v_1[$v_2], $p1);
                this.get_QAT().addChild($v_3.createComponentForDisplayMode('Small'));
            }
        }
        return this.get_QAT();
    },
    
    get_$7R_1: function CUI_QATBuilder$get_$7R_1() {ULSpEN:;
        return this.$z_0;
    }
}


CUI.RibbonPeripheralSection = function CUI_RibbonPeripheralSection() {
}


CUI.ContextualGroup = function CUI_ContextualGroup($p0, $p1, $p2, $p3) {
    this.$4_0 = $p0;
    this.$1W_0 = $p1;
    this.$2n_0 = $p2;
    this.$m_0 = $p3;
}
CUI.ContextualGroup.$4f = function CUI_ContextualGroup$$4f($p0) {
    switch ($p0) {
        case 1:
            return 'db';
        case 2:
            return 'lb';
        case 3:
            return 'tl';
        case 4:
            return 'or';
        case 5:
            return 'gr';
        case 6:
            return 'mg';
        case 7:
            return 'yl';
        case 8:
            return 'pp';
        default:
            return '';
    }
}
CUI.ContextualGroup.prototype = {
    $4_0: null,
    $1W_0: null,
    $2n_0: 0,
    $m_0: null,
    $2d_0: 0,
    
    get_id: function CUI_ContextualGroup$get_id() {ULSpEN:;
        return this.$4_0;
    },
    
    get_count: function CUI_ContextualGroup$get_count() {ULSpEN:;
        return this.$2d_0;
    },
    
    get_title: function CUI_ContextualGroup$get_title() {ULSpEN:;
        return this.$1W_0;
    },
    
    get_color: function CUI_ContextualGroup$get_color() {ULSpEN:;
        return this.$2n_0;
    },
    
    get_command: function CUI_ContextualGroup$get_command() {ULSpEN:;
        return this.$m_0;
    },
    
    $1S_0: null,
    $D_0: null,
    $1i_0: null,
    
    get_$3_0: function CUI_ContextualGroup$get_$3_0() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$1S_0)) {
            this.$1S_0 = CUI.Utility.$2('li');
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$4_0)) {
                this.$1S_0.id = this.$4_0;
            }
            this.$1S_0.className = 'ms-cui-cg';
            var $v_0 = CUI.ContextualGroup.$4f(this.$2n_0);
            if ($v_0 !== '') {
                CUI.Utility.ensureCSSClassOnElement(this.$1S_0, 'ms-cui-cg-' + $v_0);
            }
            var $v_1 = CUI.Utility.$2('div');
            $v_1.className = 'ms-cui-cg-i';
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$4_0)) {
                $v_1.id = this.$4_0 + '_upper';
            }
            this.$1S_0.appendChild($v_1);
            this.$D_0 = CUI.Utility.$2('div');
            this.$D_0.className = 'ms-cui-cg-t';
            $v_1.appendChild(this.$D_0);
            var $v_2 = CUI.Utility.$2('span');
            $v_2.className = 'ms-cui-cg-t-i';
            CUI.UIUtility.setInnerText($v_2, this.$1W_0);
            this.$D_0.appendChild($v_2);
            this.$1i_0 = CUI.Utility.$2('ul');
            this.$1i_0.className = 'ms-cui-ct-ul';
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$4_0)) {
                this.$1i_0.id = this.$4_0 + '_lower';
            }
            this.$1S_0.appendChild(this.$1i_0);
            this.$2d_0 = 0;
        }
        return this.$1S_0;
    },
    
    $AI_0: function CUI_ContextualGroup$$AI_0() {ULSpEN:;
        var $v_0 = $get(this.$4_0);
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            this.$1S_0 = $v_0;
            this.$D_0 = this.$1S_0.childNodes[0].childNodes[0];
            this.$1i_0 = this.$1S_0.childNodes[1];
        }
    },
    
    $AD_0: function CUI_ContextualGroup$$AD_0($p0) {
        this.$1i_0.appendChild($p0);
        this.$2d_0++;
        if (this.$2d_0 === 1) {
            CUI.Utility.ensureCSSClassOnElement(this.$1i_0, 'ms-cui-oneCtxTab');
        }
        else if (this.$2d_0 === 2) {
            CUI.Utility.removeCSSClassFromElement(this.$1i_0, 'ms-cui-oneCtxTab');
        }
    },
    
    $BH_0: function CUI_ContextualGroup$$BH_0() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$1i_0)) {
            CUI.Utility.removeChildNodesSlow(this.$1i_0);
        }
        this.$2d_0 = 0;
    },
    
    dispose: function CUI_ContextualGroup$dispose() {ULSpEN:;
        this.$1S_0 = null;
        this.$D_0 = null;
        this.$1i_0 = null;
        this.$2d_0 = 0;
    }
}


CUI.DeclarativeTemplate = function CUI_DeclarativeTemplate($p0) {
    this.$$d_$B0_1 = Function.createDelegate(this, this.$B0_1);
    CUI.DeclarativeTemplate.initializeBase(this);
    this.$11_1 = new CUI.DataNodeWrapper($p0);
}
CUI.DeclarativeTemplate.prototype = {
    $11_1: null,
    
    createGroup: function CUI_DeclarativeTemplate$createGroup($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7) {
        var $v_0 = new CUI.DeclarativeTemplateBuildContext();
        $v_0.ribbon = $p0;
        $v_0.controls = $p6;
        $v_0.parameters = $p7;
        var $v_1 = $p0.$At_3($p1, $p2, $p3, $p4, $p5);
        for (var $v_2 = 0; $v_2 < this.$11_1.get_children().length; $v_2++) {
            var $v_3 = this.$Aw_1(this.$11_1.get_children()[$v_2], $v_1, $v_0);
            if (!CUI.ScriptUtility.isNullOrUndefined($v_3)) {
                $v_1.addChild($v_3);
            }
        }
        return $v_1;
    },
    
    $Aw_1: function CUI_DeclarativeTemplate$$Aw_1($p0, $p1, $p2) {
        var $v_0 = $p0.attrs.Title;
        if ($v_0 === 'Popup') {
            var $v_2 = $p0.attrs.LayoutTitle;
            $p1.set_popupLayoutTitle($v_2);
            return null;
        }
        var $v_1 = $p2.ribbon.$8e_3($p1.$4_0 + '-' + $v_0, $v_0);
        $v_1.$7Z_0(this.$$d_$B0_1, $p0, $p2);
        return $v_1;
    },
    
    $B0_1: function CUI_DeclarativeTemplate$$B0_1($p0, $p1, $p2) {
        var $v_0 = $p0;
        var $v_1 = $p2;
        this.$BN_1($p1, $v_0, $v_1);
        $v_0.$7M_0(true);
        return $v_0;
    },
    
    $BN_1: function CUI_DeclarativeTemplate$$BN_1($p0, $p1, $p2) {
        var $v_0 = $p0.children;
        var $v_1 = 0;
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2].name;
            if ($v_3 === 'Section') {
                var $v_4 = this.$Ax_1($v_0[$v_2], $p2, $p1, $v_1++);
                $p1.addChild($v_4);
            }
            else {
                $v_1 = this.$7F_1($v_0[$v_2], $p2, $p1, $v_1);
            }
        }
    },
    
    $Ax_1: function CUI_DeclarativeTemplate$$Ax_1($p0, $p1, $p2, $p3) {
        var $v_0;
        var $v_1 = $p0.attrs.Type;
        var $v_2 = $p0.attrs.Alignment;
        switch ($v_1) {
            case 'OneRow':
                $v_0 = 2;
                break;
            case 'TwoRow':
                $v_0 = 3;
                break;
            case 'ThreeRow':
                $v_0 = 4;
                break;
            case 'Divider':
                $v_0 = 1;
                break;
            default:
                throw Error.create('Invalid Section attribute \"Type\" found in XML: ' + $v_1);
        }
        var $v_3 = 1;
        if ($v_2 === 'Middle') {
            $v_3 = 2;
        }
        var $v_4 = $p1.ribbon.$29_3($p2.$4_0 + '-' + $p3, $v_0, $v_3);
        if ($v_0 !== 1) {
            this.$7G_1($v_4.getRow(1), ((($p0.children))[0]), $p1);
            if ($v_4.$G_2 === 3 || $v_4.$G_2 === 4) {
                this.$7G_1($v_4.getRow(2), ((($p0.children))[1]), $p1);
            }
            if ($v_4.$G_2 === 4) {
                this.$7G_1($v_4.getRow(3), ((($p0.children))[2]), $p1);
            }
        }
        return $v_4;
    },
    
    $7G_1: function CUI_DeclarativeTemplate$$7G_1($p0, $p1, $p2) {
        var $v_0 = $p1.children;
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1].name;
            var $v_3 = null;
            if ($v_2 === 'ControlRef') {
                $v_3 = this.$8a_1($v_0[$v_1], $p2);
            }
            else if ($v_2 === 'OverflowArea') {
                this.$7F_1($v_0[$v_1], $p2, $p0, $v_1);
            }
            else {
                $v_3 = this.$Ay_1($v_0[$v_1], $p2, $p0, $v_1);
            }
            if (!CUI.ScriptUtility.isNullOrUndefined($v_3)) {
                $p0.addChild($v_3);
            }
        }
    },
    
    $Ay_1: function CUI_DeclarativeTemplate$$Ay_1($p0, $p1, $p2, $p3) {
        var $v_0 = $p0.children;
        var $v_1 = $p1.ribbon.$8h_3($p2.$4_0 + '-' + $p3);
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = CUI.DataNodeWrapper.getNodeName($v_0[$v_2]);
            if ($v_3 === 'ControlRef') {
                var $v_4 = this.$8a_1($v_0[$v_2], $p1);
                if (!CUI.ScriptUtility.isNullOrUndefined($v_4)) {
                    $v_1.addChild($v_4);
                }
            }
            else {
                this.$7F_1($v_0[$v_2], $p1, $v_1, $v_2);
            }
        }
        if (!$v_1.$6_0.$M_0) {
            return null;
        }
        return $v_1;
    },
    
    $8a_1: function CUI_DeclarativeTemplate$$8a_1($p0, $p1) {
        var $v_0 = $p0.attrs;
        var $v_1 = $v_0['TemplateAlias'];
        var $v_2 = $v_0['DisplayMode'];
        var $v_3 = $p1.controls[$v_1];
        var $v_4 = null;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_3) && CUI.Control.isInstanceOfType($v_3)) {
            $v_4 = $v_3.createComponentForDisplayMode($v_2);
        }
        return $v_4;
    },
    
    $7F_1: function CUI_DeclarativeTemplate$$7F_1($p0, $p1, $p2, $p3) {
        var $v_0 = CUI.DataNodeWrapper.getNodeAttributes($p0);
        var $v_1 = $v_0['TemplateAlias'];
        var $v_2 = CUI.DataNodeWrapper.getNodeName($p0);
        var $v_3 = $p1.controls[$v_1];
        if (CUI.ScriptUtility.isNullOrUndefined($v_3)) {
            return $p3;
        }
        var $v_4 = false;
        var $v_5 = false;
        var $v_6 = 2;
        if ($v_2 === 'OverflowSection') {
            $v_4 = CUI.Utility.$o($v_0['DividerBefore']);
            $v_5 = CUI.Utility.$o($v_0['DividerAfter']);
            if ($v_4) {
                var $v_9 = $p1.ribbon.$29_3($p2.$4_0 + '-' + $p3++, 1, 1);
                $p2.addChild($v_9);
            }
            var $v_8 = $v_0['Type'];
            switch ($v_8) {
                case 'OneRow':
                    $v_6 = 2;
                    break;
                case 'TwoRow':
                    $v_6 = 3;
                    break;
                case 'ThreeRow':
                    $v_6 = 4;
                    break;
                default:
                    throw Error.create('Invalid Section attribute \"Type\" found in XML: ' + $v_8);
            }
        }
        var $v_7 = $v_0['DisplayMode'];
        if (Array.isInstanceOfType($v_3)) {
            var $v_A = $v_3;
            var $v_B = null;
            for (var $v_C = 0; $v_C < $v_A.length; $v_C++) {
                var $v_D = $v_A[$v_C];
                if ($v_2 === 'OverflowSection') {
                    if ($v_6 === 2) {
                        if (CUI.ScriptUtility.isNullOrUndefined($v_B)) {
                            $v_B = $p1.ribbon.$29_3($p2.$4_0 + '-' + $p3++, 2, 1);
                            $p2.addChild($v_B);
                        }
                        $v_B.getRow(1).addChild($v_D.createComponentForDisplayMode($v_7));
                    }
                    else if ($v_6 === 4) {
                        if (CUI.ScriptUtility.isNullOrUndefined($v_B)) {
                            $v_B = $p1.ribbon.$29_3($p2.$4_0 + '-' + $p3++, 4, 1);
                            $p2.addChild($v_B);
                        }
                        $v_B.getRow(($v_C % 3) + 1).addChild($v_D.createComponentForDisplayMode($v_7));
                        if ($v_C % 3 === 2) {
                            $v_B = null;
                        }
                    }
                    else {
                        if (CUI.ScriptUtility.isNullOrUndefined($v_B)) {
                            $v_B = $p1.ribbon.$29_3($p2.$4_0 + '-' + $p3++, 3, 1);
                            $p2.addChild($v_B);
                        }
                        $v_B.getRow(($v_C % 2) + 1).addChild($v_D.createComponentForDisplayMode($v_7));
                        if ($v_C % 2 === 1) {
                            $v_B = null;
                        }
                    }
                }
                else {
                    $p2.addChild($v_D.createComponentForDisplayMode($v_7));
                }
            }
        }
        else {
            var $v_E = $v_3;
            if ($v_2 === 'OverflowSection') {
                var $v_F;
                if ($v_6 === 2) {
                    $v_F = $p1.ribbon.$29_3($p2.$4_0 + '-' + $p3++, 2, 1);
                    $v_F.getRow(1).addChild($v_E.createComponentForDisplayMode($v_7));
                }
                else if ($v_6 === 4) {
                    $v_F = $p1.ribbon.$29_3($p2.$4_0 + '-' + $p3++, 4, 1);
                    $v_F.getRow(1).addChild($v_E.createComponentForDisplayMode($v_7));
                }
                else {
                    $v_F = $p1.ribbon.$29_3($p2.$4_0 + '-' + $p3++, 3, 1);
                    $v_F.getRow(1).addChild($v_E.createComponentForDisplayMode($v_7));
                }
                $p2.addChild($v_F);
            }
            else {
                $p2.addChild($v_E.createComponentForDisplayMode($v_7));
            }
        }
        if ($v_5) {
            var $v_G = $p1.ribbon.$29_3($p2.$4_0 + '-' + $p3++, 1, 1);
            $p2.addChild($v_G);
        }
        return $p3;
    }
}


CUI.Group = function CUI_Group($p0, $p1, $p2, $p3, $p4, $p5) {
    CUI.Group.initializeBase(this, [ $p0, $p1, $p2, $p3 ]);
    this.$m_2 = $p4;
    this.$5_2 = $p5;
}
CUI.Group.prototype = {
    $a_2: null,
    $D_2: null,
    $3X_2: null,
    $T_2: null,
    $5_2: null,
    
    $1q_0: function CUI_Group$$1q_0() {ULSpEN:;
        this.ensureDOMElementAndEmpty();
        if (CUI.ScriptUtility.isNullOrUndefined(this.$D_2)) {
            this.$D_2 = CUI.Utility.$2('span');
            this.$D_2.className = 'ms-cui-groupTitle';
        }
        else {
            this.$D_2 = CUI.Utility.removeChildNodes(this.$D_2);
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$a_2)) {
            this.$a_2 = CUI.Utility.$2('span');
            this.$a_2.className = 'ms-cui-groupBody';
        }
        else {
            this.$a_2 = CUI.Utility.removeChildNodes(this.$a_2);
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$3X_2)) {
            this.$3X_2 = CUI.Utility.$2('span');
            this.$3X_2.className = 'ms-cui-groupSeparator';
        }
        var $v_0 = this.get_title();
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            CUI.UIUtility.setInnerText(this.$D_2, $v_0);
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$T_2) && CUI.GroupPopupLayout.isInstanceOfType(this.$T_2)) {
            this.$T_2.$1X_0();
            this.get_$3_0().appendChild(this.$T_2.get_$3_0());
            this.get_$3_0().appendChild(this.$3X_2);
            this.$T_2.$2i_0();
        }
        else {
            var $v_1 = CUI.Utility.$2('span');
            $v_1.className = 'ms-cui-groupContainer';
            $v_1.appendChild(this.$a_2);
            $v_1.appendChild(this.$D_2);
            this.get_$3_0().appendChild($v_1);
            this.get_$3_0().appendChild(this.$3X_2);
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$T_2)) {
                this.$T_2.$1X_0();
                this.$a_2.appendChild(this.$T_2.get_$3_0());
                this.$T_2.$2i_0();
            }
        }
        CUI.Component.prototype.$1q_0.call(this);
    },
    
    $5Q_0: function CUI_Group$$5Q_0() {ULSpEN:;
        CUI.Component.prototype.$5Q_0.call(this);
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$T_2) && !CUI.GroupPopupLayout.isInstanceOfType(this.$T_2)) {
            var $v_0 = this.get_$3_0().childNodes[0];
            this.$3X_2 = this.get_$3_0().childNodes[1];
            this.$a_2 = $v_0.childNodes[0];
            this.$D_2 = $v_0.childNodes[1];
        }
    },
    
    $3p_0: function CUI_Group$$3p_0($p0) {
        this.$5Q_0();
        this.$P_0();
        this.$j_0 = false;
        if ($p0 && !CUI.ScriptUtility.isNullOrUndefined(this.$T_2)) {
            this.$T_2.$3p_0(true);
        }
    },
    
    $1X_0: function CUI_Group$$1X_0() {ULSpEN:;
        var $v_0 = this.get_$3_0();
        CUI.Component.prototype.$1X_0.call(this);
    },
    
    get_cssClass: function CUI_Group$get_cssClass() {ULSpEN:;
        return 'ms-cui-group';
    },
    
    get_domElementTagName: function CUI_Group$get_domElementTagName() {ULSpEN:;
        return 'li';
    },
    
    unselectLayout: function CUI_Group$unselectLayout() {ULSpEN:;
        this.selectLayout(null, null);
    },
    
    selectLayout: function CUI_Group$selectLayout($p0, $p1) {
        var $v_0 = null;
        if ($p0 !== 'Popup') {
            $v_0 = (CUI.ScriptUtility.isNullOrUndefined($p0)) ? null : this.getChildByTitle($p0);
        }
        else {
            if (!CUI.ScriptUtility.isNullOrUndefined($p1)) {
                this.set_popupLayoutTitle($p1);
            }
            this.$BE_2();
            $v_0 = this.$4U_2;
        }
        if ($v_0 === this.$T_2 || CUI.ScriptUtility.isNullOrUndefined($v_0) && CUI.ScriptUtility.isNullOrUndefined(this.$T_2)) {
            return;
        }
        this.$T_2 = (!CUI.ScriptUtility.isNullOrUndefined($v_0)) ? $v_0 : null;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0.$7a_0(true);
            if ($p0 === 'Popup') {
                this.$5J_2.$7a_0(true);
            }
        }
        this.$p_0();
    },
    
    get_selectedLayout: function CUI_Group$get_selectedLayout() {ULSpEN:;
        return this.$T_2;
    },
    
    ensureCorrectChildType: function CUI_Group$ensureCorrectChildType($p0) {
        if (!CUI.Layout.isInstanceOfType($p0) && !CUI.GroupPopupLayout.isInstanceOfType($p0)) {
            throw Error.create('Only children of type Layout can be added to Groups');
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.getChildByTitle($p0.get_title()))) {
            throw Error.create('A Layout with title ' + $p0.get_title() + ' already exists in this Group.');
        }
    },
    
    get_$7P_2: function CUI_Group$get_$7P_2() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$T_2) || CUI.ScriptUtility.isNullOrUndefined(this.$T_2.get_$3_0())) {
            return false;
        }
        return this.get_$3_0().offsetHeight < this.$T_2.get_$3_0().offsetHeight || this.get_$3_0().offsetWidth < this.$T_2.get_$3_0().offsetWidth;
    },
    
    $m_2: null,
    
    get_command: function CUI_Group$get_command() {ULSpEN:;
        return this.$m_2;
    },
    
    $6Y_2: null,
    
    get_popupLayoutTitle: function CUI_Group$get_popupLayoutTitle() {ULSpEN:;
        return this.$6Y_2;
    },
    set_popupLayoutTitle: function CUI_Group$set_popupLayoutTitle($p0) {
        if ($p0 === 'Popup') {
            throw Error.create('PopupLayoutTitle cannot be set to \'Popup\'');
        }
        var $v_0 = (CUI.ScriptUtility.isNullOrUndefined($p0)) ? null : this.getChildByTitle($p0);
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            throw Error.create('This Group does not have a Layout with Title: ' + $p0);
        }
        if (this.$6Y_2 === $p0) {
            return $p0;
        }
        this.$6Y_2 = $p0;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$4T_2)) {
            this.$4T_2.set_layoutTitle($p0);
        }
        return $p0;
    },
    
    $4U_2: null,
    $3i_2: null,
    $4T_2: null,
    $5J_2: null,
    $6Z_2: null,
    
    $BE_2: function CUI_Group$$BE_2() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$4U_2)) {
            return;
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_popupLayoutTitle())) {
            throw Error.create('No PopupLayoutTitle has been set.');
        }
        this.$4U_2 = this.get_ribbon().$Av_3(this.$4_0 + '-Popup', this);
        this.$5J_2 = this.get_ribbon().$8f_1(this.$4_0 + '-popupMenu', null, null, null);
        this.$6Z_2 = this.get_ribbon().$8g_1(this.$4_0 + '-popupMenuSection', null, null, false, null, null);
        var $v_0 = ({});
        $v_0.LabelText = this.get_title();
        var $v_1 = this.get_ribbon().get_ribbonProperties();
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$5_2.Image32by32Popup)) {
            $v_0.Image32by32 = this.$5_2.Image32by32Popup;
            $v_0.Image32by32Class = this.$5_2.Image32by32PopupClass;
            $v_0.Image32by32Top = this.$5_2.Image32by32PopupTop;
            $v_0.Image32by32Left = this.$5_2.Image32by32PopupLeft;
        }
        else {
            $v_0.Image32by32 = $v_1.Image32by32GroupPopupDefault;
            $v_0.Image32by32Class = $v_1.Image32by32GroupPopupDefaultClass;
            $v_0.Image32by32Left = $v_1.Image32by32GroupPopupDefaultLeft;
            $v_0.Image32by32Top = $v_1.Image32by32GroupPopupDefaultTop;
        }
        $v_0.Command = this.$m_2;
        this.$3i_2 = new CUI.Controls.FlyoutAnchor(this.get_ribbon(), this.$4_0 + '-PopupAnchor', $v_0, this.$5J_2);
        this.$3i_2.$6C_2 = true;
        this.$3i_2.set_enabled(this.get_enabled());
        this.$4T_2 = this.get_ribbon().$Au_3(this.$4_0 + '-popupMenuItem', this);
        this.$4U_2.addChild(this.$3i_2.createComponentForDisplayMode('Large'));
        this.$5J_2.addChild(this.$6Z_2);
        this.$6Z_2.addChild(this.$4T_2);
        this.$4T_2.set_layoutTitle(this.get_popupLayoutTitle());
        this.addChild(this.$4U_2);
    },
    
    $3x_0: function CUI_Group$$3x_0() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$m_2)) {
            this.set_enabled(true);
        }
        else {
            var $v_0 = this.get_ribbon().$3H_1(this.$m_2, null, null, false);
            this.set_enabled(($v_0 & 1) > 0);
        }
        if (!this.get_enabled() || CUI.ScriptUtility.isNullOrUndefined(this.$T_2)) {
            return;
        }
        this.$T_2.$3x_0();
    },
    
    onEnabledChanged: function CUI_Group$onEnabledChanged($p0) {
        CUI.Component.prototype.onEnabledChanged.call(this, $p0);
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$3i_2)) {
            this.$3i_2.set_enabled($p0);
        }
    },
    
    $7e_0: function CUI_Group$$7e_0() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$T_2) && CUI.GroupPopupLayout.isInstanceOfType(this.$T_2)) {
            this.$T_2.get_$3_0().getElementsByTagName('A')[0].focus();
            return true;
        }
        return CUI.Component.prototype.$7e_0.call(this);
    }
}


CUI.GroupPopup = function CUI_GroupPopup($p0, $p1, $p2) {
    this.$$d_$Br_1 = Function.createDelegate(this, this.$Br_1);
    CUI.GroupPopup.initializeBase(this, [ $p0, $p1, '', '' ]);
    this.$4I_1 = $p2;
}
CUI.GroupPopup.prototype = {
    $4I_1: null,
    $D_1: null,
    $a_1: null,
    
    $1q_0: function CUI_GroupPopup$$1q_0() {ULSpEN:;
        this.ensureDOMElementAndEmpty();
        if (CUI.ScriptUtility.isNullOrUndefined(this.$D_1)) {
            this.$D_1 = CUI.Utility.$2('div');
            this.$D_1.className = 'ms-cui-groupTitle';
        }
        else {
            this.$D_1 = CUI.Utility.removeChildNodes(this.$D_1);
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$a_1)) {
            this.$a_1 = CUI.Utility.$2('div');
            this.$a_1.className = 'ms-cui-groupBody';
        }
        else {
            this.$a_1 = CUI.Utility.removeChildNodes(this.$a_1);
        }
        CUI.UIUtility.setInnerText(this.$D_1, this.$4I_1.get_title());
        this.get_$3_0().appendChild(this.$a_1);
        this.get_$3_0().appendChild(this.$D_1);
        var $v_0 = this.$4I_1.getChildByTitle(this.$4M_1);
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            throw Error.create('Cannot find Layout with title: ' + this.$4M_1 + ' for this GroupPopup to use from the Group with id: ' + this.$4I_1.$4_0);
        }
        var $v_1 = $v_0.$4a_2(true);
        this.removeChildren();
        this.addChild($v_1);
        this.appendChildrenToElement(this.$a_1);
        CUI.Component.prototype.$1q_0.call(this);
    },
    
    $4M_1: null,
    
    get_layoutTitle: function CUI_GroupPopup$get_layoutTitle() {ULSpEN:;
        return this.$4M_1;
    },
    set_layoutTitle: function CUI_GroupPopup$set_layoutTitle($p0) {
        if (this.$4M_1 === $p0) {
            return $p0;
        }
        this.$4M_1 = $p0;
        this.$p_0();
        return $p0;
    },
    
    get_cssClass: function CUI_GroupPopup$get_cssClass() {ULSpEN:;
        return 'ms-cui-groupPopup';
    },
    
    $42_1: null,
    
    $2j_0: function CUI_GroupPopup$$2j_0($p0) {
        if ($p0.$G_1 === 4) {
            var $v_0 = $p0.get_sourceControl();
            if (this.$42_1) {
                return CUI.Component.prototype.$2j_0.call(this, $p0);
            }
            this.$42_1 = $v_0;
            this.$Cq_1();
        }
        else if ($p0.$G_1 === 10) {
            this.$Bd_1();
            this.$42_1 = null;
        }
        return CUI.Component.prototype.$2j_0.call(this, $p0);
    },
    
    $3V_1: null,
    $5A_1: false,
    
    $Cq_1: function CUI_GroupPopup$$Cq_1() {ULSpEN:;
        if (this.$5A_1) {
            return;
        }
        if (!this.$3V_1) {
            this.$3V_1 = CUI.Utility.$8c();
            $addHandler(this.$3V_1, 'click', this.$$d_$Br_1);
            this.get_$3_0().appendChild(this.$3V_1);
        }
        this.$3V_1.style.display = '';
        this.$5A_1 = true;
    },
    
    $Bd_1: function CUI_GroupPopup$$Bd_1() {ULSpEN:;
        if (!this.$5A_1) {
            return;
        }
        this.$3V_1.style.display = 'none';
        this.$5A_1 = false;
    },
    
    $Br_1: function CUI_GroupPopup$$Br_1($p0) {
        if (this.$42_1) {
            this.$42_1.$4b_1();
        }
    }
}


CUI.GroupPopupLayout = function CUI_GroupPopupLayout($p0, $p1, $p2) {
    CUI.GroupPopupLayout.initializeBase(this, [ $p0, $p1, 'Popup' ]);
    this.$4I_3 = $p2;
}
CUI.GroupPopupLayout.prototype = {
    $4I_3: null,
    
    $1q_0: function CUI_GroupPopupLayout$$1q_0() {ULSpEN:;
        CUI.Layout.prototype.$1q_0.call(this);
    },
    
    get_cssClass: function CUI_GroupPopupLayout$get_cssClass() {ULSpEN:;
        return null;
    },
    
    ensureCorrectChildType: function CUI_GroupPopupLayout$ensureCorrectChildType($p0) {
        if (!CUI.ControlComponent.isInstanceOfType($p0)) {
            throw Error.create('Only ControlComponents can be added to GroupPopupLayout.');
        }
        if (this.$6_0.$M_0 > 0) {
            throw Error.create('GroupPopupLayouts can only have one child');
        }
    }
}


CUI.Layout = function CUI_Layout($p0, $p1, $p2) {
    CUI.Layout.initializeBase(this, [ $p0, $p1, $p2, '' ]);
}
CUI.Layout.prototype = {
    
    $1q_0: function CUI_Layout$$1q_0() {ULSpEN:;
        if (this.get_needsDelayIniting()) {
            this.doDelayedInit();
        }
        this.ensureDOMElementAndEmpty();
        this.appendChildrenToElement(this.get_$3_0());
        CUI.Component.prototype.$1q_0.call(this);
    },
    
    $5Q_0: function CUI_Layout$$5Q_0() {ULSpEN:;
        if (this.get_needsDelayIniting()) {
            this.doDelayedInit();
        }
        this.set_$3_0($get(this.$K_0.$4_0 + '-' + this.get_title()));
    },
    
    ensureCorrectChildType: function CUI_Layout$ensureCorrectChildType($p0) {
        if (!CUI.Section.isInstanceOfType($p0)) {
            throw Error.create('Only children of Section can be added to a Layout');
        }
    },
    
    get_cssClass: function CUI_Layout$get_cssClass() {ULSpEN:;
        return 'ms-cui-layout';
    },
    
    $4a_2: function CUI_Layout$$4a_2($p0) {
        if (this.get_needsDelayIniting()) {
            this.doDelayedInit();
        }
        var $v_0 = this.get_ribbon().$8e_3('clonedLayout-' + this.get_ribbon().$2A_1(), this.get_title());
        if (!$p0) {
            return $v_0;
        }
        var $$enum_2 = this.$6_0.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_1 = $$enum_2.get_current();
            var $v_2 = $v_1.$4a_2($p0);
            $v_0.addChild($v_2);
        }
        return $v_0;
    },
    
    get_visibleInDOM: function CUI_Layout$get_visibleInDOM() {ULSpEN:;
        if (CUI.Group.isInstanceOfType(this.$K_0)) {
            var $v_0 = this.$K_0;
            return $v_0.$T_2 === this;
        }
        else if (CUI.GroupPopup.isInstanceOfType(this.$K_0)) {
            return true;
        }
        else {
            return false;
        }
    }
}


CUI.RibbonEventCommandProperties = function CUI_RibbonEventCommandProperties() {ULSpEN:;
    CUI.RibbonEventCommandProperties.initializeBase(this);
}
CUI.RibbonEventCommandProperties.prototype = {
    Minimized: false,
    Maximized: false,
    Cancelable: false,
    CancelAction: false,
    ContextualGroupId: null
}


CUI.CommandContextSwitchCommandProperties = function CUI_CommandContextSwitchCommandProperties() {
}
CUI.CommandContextSwitchCommandProperties.prototype = {
    OldContextId: null,
    OldContextCommand: null,
    NewContextId: null,
    NewContextCommand: null,
    ChangedByUser: false
}


CUI.Ribbon = function CUI_Ribbon($p0, $p1) {
    this.$$d_$Bw_3 = Function.createDelegate(this, this.$Bw_3);
    this.$$d_$CE_3 = Function.createDelegate(this, this.$CE_3);
    this.$$d_$Bx_3 = Function.createDelegate(this, this.$Bx_3);
    this.$6M_3 = new Date(0);
    CUI.Ribbon.initializeBase(this, [ $p0, $p1 ]);
    this.$u_3 = {};
    this.$7y_3 = $p1.ShortcutKeyJumpToRibbon_Ctrl + $p1.ShortcutKeyJumpToRibbon_Alt + $p1.ShortcutKeyJumpToRibbon_Shift + $p1.ShortcutKeyJumpToRibbon_AccessKey;
    this.$7x_3 = $p1.ShortcutKeyJumpToFirstControl_Ctrl + $p1.ShortcutKeyJumpToFirstControl_Alt + $p1.ShortcutKeyJumpToFirstControl_Shift + $p1.ShortcutKeyJumpToFirstControl_AccessKey;
}
CUI.Ribbon.prototype = {
    $9_3: null,
    $1m_3: null,
    $1e_3: null,
    $w_3: null,
    $W_3: null,
    $k_3: null,
    $9y_3: null,
    $1R_3: null,
    $2G_3: null,
    $f_3: null,
    $2x_3: null,
    $82_3: null,
    $1g_3: null,
    $1f_3: null,
    $1h_3: null,
    $1c_3: null,
    $1b_3: null,
    $1d_3: null,
    $35_3: false,
    $2z_3: null,
    $4K_3: null,
    $7x_3: null,
    $7y_3: null,
    $84_3: null,
    $85_3: null,
    $83_3: null,
    $7s_3: false,
    $6T_3: null,
    
    get_storedFocus: function CUI_Ribbon$get_storedFocus() {ULSpEN:;
        return this.$2z_3;
    },
    set_storedFocus: function CUI_Ribbon$set_storedFocus(value) {ULSpEN:;
        this.$2z_3 = value;
        return value;
    },
    
    $7i_3: function CUI_Ribbon$$7i_3($p0) {
        if (CUI.ScriptUtility.isNullOrUndefined($p0)) {
            return false;
        }
        else if (!CUI.ScriptUtility.isNullOrUndefined($p0.id) && $p0.id === 'Ribbon') {
            return false;
        }
        else if ($p0.tagName === 'BODY') {
            return true;
        }
        else {
            return this.$7i_3($p0.parentNode);
        }
    },
    
    refresh: function CUI_Ribbon$refresh() {ULSpEN:;
        this.$1q_0();
        CUI.Root.prototype.refresh.call(this);
        this.$Cc_2();
    },
    
    $1q_0: function CUI_Ribbon$$1q_0() {ULSpEN:;
        CUI.Root.prototype.$1q_0.call(this);
        this.$1X_0();
        this.$Bb_3();
        var $v_0 = null;
        var $v_1 = null, $v_2 = null;
        var $v_3 = null;
        var $v_4 = null;
        CUI.Utility.removeChildNodesSlow(this.$k_3);
        var $$dict_5 = this.$u_3;
        for (var $$key_6 in $$dict_5) {
            var $v_B = { key: $$key_6, value: $$dict_5[$$key_6] };
            var $v_C = $v_B.value;
            $v_C.$BH_0();
        }
        var $v_5 = 0;
        var $v_6 = new CUI.List();
        var $$enum_B = this.$6_0.getEnumerator();
        while ($$enum_B.moveNext()) {
            var $v_D = $$enum_B.get_current();
            if ($v_D.get_visible()) {
                $v_6.add($v_D);
                $v_5++;
            }
        }
        var $v_7 = 0;
        var $v_8 = $v_6.$M_0;
        var $v_9 = !(CUI.ScriptUtility.isNullOrEmptyString(this.get_ribbonProperties().ATTabPositionText) || CUI.ScriptUtility.isNullOrEmptyString(this.get_ribbonProperties().ATContextualTabText));
        var $$enum_G = $v_6.getEnumerator();
        while ($$enum_G.moveNext()) {
            var $v_E = $$enum_G.get_current();
            $v_E.$71_2();
            if (CUI.ScriptUtility.isNullOrUndefined($v_1)) {
                $v_1 = $v_E;
                this.$4K_3 = $v_1.$4_0;
            }
            $v_E.$CZ_2();
            if ($v_E.$10_2) {
                if (!$v_3 || $v_E.$q_2 !== $v_3) {
                    if ($v_E.$q_2 !== $v_3) {
                        if (!CUI.ScriptUtility.isNullOrUndefined($v_2) && $v_2.$10_2) {
                            CUI.Utility.ensureCSSClassOnElement($v_2.$D_2, 'ms-cui-ct-last');
                        }
                    }
                    $v_3 = $v_E.$q_2;
                    $v_4 = this.$u_3[$v_E.$q_2];
                    CUI.Utility.removeCSSClassFromElement($v_4.get_$3_0(), 'ms-cui-cg-s');
                    this.$7Y_3(0);
                    this.$k_3.appendChild($v_4.get_$3_0());
                    CUI.Utility.ensureCSSClassOnElement($v_E.$D_2, 'ms-cui-ct-first');
                }
                $v_4.$AD_0($v_E.$D_2);
            }
            else {
                if ($v_3) {
                    CUI.Utility.ensureCSSClassOnElement($v_2.$D_2, 'ms-cui-ct-last');
                    $v_3 = null;
                    $v_4 = null;
                }
                if ($v_9) {
                    $v_7++;
                    $v_E.$9k_2(this.get_ribbonProperties().ATTabPositionText, null, null, $v_7, $v_8);
                }
                this.$k_3.appendChild($v_E.$D_2);
            }
            if ($v_E === this.$9_3) {
                $v_0 = $v_E;
            }
            $v_2 = $v_E;
        }
        if ($v_3) {
            CUI.Utility.ensureCSSClassOnElement($v_2.$D_2, 'ms-cui-ct-last');
            $v_2 = null;
            $v_3 = null;
            $v_4 = null;
        }
        var $v_A = 1;
        if ($v_9) {
            for (var $v_F = 0; $v_F < $v_5; $v_F++) {
                var $v_G = $v_6.get_item($v_F);
                if ($v_G.$10_2) {
                    if ($v_G.$q_2 !== $v_3) {
                        $v_3 = $v_G.$q_2;
                        $v_4 = this.$u_3[$v_G.$q_2];
                        $v_A = 1;
                    }
                    $v_G.$8k_2();
                    $v_G.$9k_2(this.get_ribbonProperties().ATTabPositionText, this.get_ribbonProperties().ATContextualTabText, $v_4.$1W_0, $v_A, $v_4.$2d_0);
                    $v_A++;
                }
            }
        }
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            if ($v_0.$10_2) {
                var $v_H = this.$5U_3($v_0.$q_2);
                CUI.Utility.ensureCSSClassOnElement($v_H.get_$3_0(), 'ms-cui-cg-s');
                this.$7Y_3($v_H.$2n_0);
            }
            else {
                if (!CUI.ScriptUtility.isNullOrUndefined(this.$4s_3)) {
                    CUI.Utility.removeCSSClassFromElement(this.$W_3, this.$4s_3);
                    this.$4s_3 = null;
                }
                var $v_I = $v_0.$7m_2;
                if (!CUI.ScriptUtility.isNullOrEmptyString($v_I)) {
                    CUI.Utility.ensureCSSClassOnElement(this.$W_3, $v_I);
                    this.$4s_3 = $v_I;
                }
            }
        }
        if (CUI.ScriptUtility.isNullOrUndefined($v_0) && !this.$21_3) {
            $v_0 = (!CUI.ScriptUtility.isNullOrUndefined(this.$6O_3)) ? this.$6O_3 : $v_1;
            this.$5c_3($v_0);
        }
        if (this.$21_3) {
            $v_0 = null;
        }
        this.$Ca_3();
        this.$Cw_3();
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            if ($v_0.get_$9e_0()) {
                CUI.Utility.disableElement(this.$f_3);
            }
            var $v_J = this.$f_3.className.indexOf('ms-cui-disabled') !== -1;
            this.$f_3.className = $v_0.$BU_2() + (($v_J) ? ' ms-cui-disabled' : '');
        }
        this.$P_0();
        this.$j_0 = false;
        if (this.$6S_3 && !CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonProperties().RootEventCommand)) {
            var $v_K = new CUI.RibbonEventCommandProperties();
            $v_K.RootId = this.$4_0;
            $v_K.RootType = 'Ribbon';
            $v_K.Minimized = this.get_minimized();
            $v_K.Maximized = !this.get_minimized();
            this.raiseCommandEvent(this.get_ribbonProperties().RootEventCommand, 11, $v_K);
            this.$6S_3 = false;
        }
    },
    
    $Ca_3: function CUI_Ribbon$$Ca_3() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonProperties().PreTabSwitchCommand)) {
            var $v_0 = new CUI.CommandContextSwitchCommandProperties();
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$1m_3) && this.$1m_3 !== this.$9_3) {
                $v_0.OldContextId = this.$1m_3.$4_0;
                $v_0.OldContextCommand = this.$1m_3.$m_2;
            }
            else {
                $v_0.OldContextId = null;
                $v_0.OldContextCommand = null;
            }
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$9_3)) {
                $v_0.NewContextId = this.$9_3.$4_0;
                $v_0.NewContextCommand = this.$9_3.$m_2;
                $v_0.ChangedByUser = this.$9_3.$4V_2;
                this.raiseCommandEvent(this.get_ribbonProperties().PreTabSwitchCommand, 2, $v_0);
            }
        }
    },
    
    $3p_0: function CUI_Ribbon$$3p_0($p0) {
        this.$5Q_0();
        this.$P_0();
        this.$j_0 = false;
        var $v_0 = this.$6_0;
        if ($p0) {
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
                var $$enum_2 = $v_0.getEnumerator();
                while ($$enum_2.moveNext()) {
                    var $v_1 = $$enum_2.get_current();
                    if (!$v_1.get_visible()) {
                        continue;
                    }
                    if (!CUI.ScriptUtility.isNullOrUndefined(this.$9_3) && this.$9_3 === $v_1) {
                        this.$9_3.$3p_0($p0);
                    }
                    else {
                        $v_1.$8O_2();
                        $v_1.$8P_2();
                    }
                }
            }
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$u_3)) {
            var $$dict_4 = this.$u_3;
            for (var $$key_5 in $$dict_4) {
                var $v_2 = { key: $$key_5, value: $$dict_4[$$key_5] };
                ($v_2.value).$AI_0();
            }
        }
    },
    
    $5Q_0: function CUI_Ribbon$$5Q_0() {ULSpEN:;
        CUI.Component.prototype.$5Q_0.call(this);
        if (!CUI.Utility.$5a()) {
            CUI.Utility.removeCSSClassFromElement(this.get_$3_0(), 'ms-cui-needIEFilter');
        }
        var $v_0 = this.get_$3_0().childNodes;
        this.$9y_3 = $get('cui-' + this.$4_0 + '-scrollCurtain');
        this.$2x_3 = $v_0[0];
        this.$1e_3 = $v_0[1];
        this.$w_3 = this.$1e_3.childNodes[0];
        this.$W_3 = this.$1e_3.childNodes[1];
        this.$1R_3 = this.$W_3.childNodes[0];
        if ($v_0.length > 2) {
            this.$f_3 = $v_0[2];
        }
        this.$2G_3 = CUI.Utility.$5W(this.$w_3, 'ms-cui-qat-container');
        this.$k_3 = CUI.Utility.$5W(this.$W_3, 'ms-cui-tts');
        if (CUI.ScriptUtility.isNullOrUndefined(this.$k_3)) {
            this.$k_3 = CUI.Utility.$5W(this.$W_3, 'ms-cui-tts-scale-1');
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$k_3)) {
            this.$k_3 = CUI.Utility.$5W(this.$W_3, 'ms-cui-tts-scale-2');
        }
    },
    
    $P_0: function CUI_Ribbon$$P_0() {ULSpEN:;
        this.$84_3 = this.$$d_$Bx_3;
        this.$85_3 = this.$$d_$CE_3;
        this.$83_3 = this.$$d_$Bw_3;
        $addHandler(this.get_$3_0(), 'keydown', this.$85_3);
        if (!this.$7s_3) {
            $addHandler(document, 'keydown', this.$84_3);
            $addHandler(this.$f_3, 'keydown', this.$83_3);
            this.$7s_3 = true;
        }
        CUI.ScalableRoot.prototype.$P_0.call(this);
    },
    
    $Bx_3: function CUI_Ribbon$$Bx_3($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined($p0) && !CUI.ScriptUtility.isNullOrUndefined($p0.rawEvent)) {
            var $v_0 = ($p0.rawEvent).keyCode;
            var $v_1 = ($p0.ctrlKey) ? 't' : 'f';
            $v_1 += ($p0.altKey) ? 't' : 'f';
            $v_1 += ($p0.shiftKey) ? 't' : 'f';
            try {
                $v_1 += String.fromCharCode(_processKeyCodes($v_0));
            }
            catch ($$e_3) {
                return;
            }
            var $v_2 = $p0.target;
            if ($v_1 === this.$7x_3) {
                this.$8V_3();
                this.jumpToLastFocused($v_2);
            }
            else if ($v_1 === this.$7y_3) {
                this.$8V_3();
                this.jumpToRibbonTab($v_2);
            }
        }
    },
    
    $8V_3: function CUI_Ribbon$$8V_3() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(document.selection) && document.selection.type === 'Control') {
            var $v_0 = document.selection.createRange();
            for (var $v_1 = $v_0.length; $v_1 > 0; $v_1--) {
                $v_0.remove($v_1 - 1);
            }
            $v_0.select();
        }
    },
    
    jumpToLastFocused: function CUI_Ribbon$jumpToLastFocused(currentElement) {ULSpEN:;
        if (this.$1l_1) {
            this.$0_0.$3r_1();
        }
        if (this.$7i_3(currentElement)) {
            this.$2z_3 = currentElement;
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$l_1())) {
            try {
                this.setFocus();
            }
            catch ($$e_1) {
            }
            return;
        }
        this.setFocusOnRibbon();
    },
    
    jumpToRibbonTab: function CUI_Ribbon$jumpToRibbonTab(currentElement) {ULSpEN:;
        if (this.$7i_3(currentElement)) {
            this.$2z_3 = currentElement;
        }
        if (this.$1l_1) {
            this.$0_0.$3r_1();
        }
        if (!CUI.ScriptUtility.isNullOrEmptyString(this.$4K_3)) {
            var $v_0 = $get(this.$4K_3 + '-title');
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
                $v_0.firstChild.focus();
            }
        }
    },
    
    setFocusOnTabTitle: function CUI_Ribbon$setFocusOnTabTitle() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrEmptyString(this.$4K_3)) {
            var $v_0 = $get(this.$4K_3 + '-title');
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
                $v_0.firstChild.focus();
            }
        }
    },
    
    $Bw_3: function CUI_Ribbon$$Bw_3($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined($p0) && !CUI.ScriptUtility.isNullOrUndefined($p0.rawEvent)) {
            var $v_0 = ($p0.rawEvent).keyCode;
            if ((($p0.ctrlKey || $p0.shiftKey) && ($v_0 === 39 && !this.$0_0._textDirection) || ($v_0 === 37 && this.$0_0._textDirection === 1))) {
                $p0.preventDefault();
                $p0.stopPropagation();
                this.$9_3.$9K_2(true);
            }
            else if ((($p0.ctrlKey || $p0.shiftKey) && ($v_0 === 37 && !this.$0_0._textDirection) || ($v_0 === 39 && this.$0_0._textDirection === 1))) {
                $p0.preventDefault();
                $p0.stopPropagation();
                this.$9_3.$9K_2(false);
            }
        }
    },
    
    setFocusOnRibbon: function CUI_Ribbon$setFocusOnRibbon() {ULSpEN:;
        if (this.$21_3) {
            this.setFocusOnTabTitle();
        }
        else {
            this.$9_3.$9n_2();
        }
    },
    
    setFocusOnCurrentTab: function CUI_Ribbon$setFocusOnCurrentTab() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$9_3)) {
            this.$9_3.$Ci_2();
        }
        else {
            this.setFocusOnRibbon();
        }
    },
    
    setFocus: function CUI_Ribbon$setFocus() {ULSpEN:;
        if (this.$21_3 || !CUI.Root.prototype.setFocus.call(this)) {
            this.setFocusOnTabTitle();
        }
        return true;
    },
    
    $CE_3: function CUI_Ribbon$$CE_3($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined($p0) && !CUI.ScriptUtility.isNullOrUndefined($p0.rawEvent) && !this.$1l_1) {
            if (($p0.rawEvent).keyCode === 27 && !CUI.ScriptUtility.isNullOrUndefined(this.$2z_3)) {
                $p0.stopPropagation();
                $p0.preventDefault();
                try {
                    this.$2z_3.focus();
                }
                catch ($$e_1) {
                }
                this.$2z_3 = null;
            }
        }
    },
    
    $u_3: null,
    
    addContextualGroup: function CUI_Ribbon$addContextualGroup(id, title, color, command) {ULSpEN:;
        var $v_0 = this.$u_3[id];
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            throw Error.create('A contextual group with id: ' + id + ' has already been added to this ribbon.');
        }
        $v_0 = new CUI.ContextualGroup(id, title, color, command);
        this.$u_3[id] = $v_0;
    },
    
    get_contextualGroupIds: function CUI_Ribbon$get_contextualGroupIds() {ULSpEN:;
        var $v_0 = [];
        var $$dict_1 = this.$u_3;
        for (var $$key_2 in $$dict_1) {
            var $v_1 = { key: $$key_2, value: $$dict_1[$$key_2] };
            Array.add($v_0, $v_1.key);
        }
        return $v_0;
    },
    
    removeContextualGroup: function CUI_Ribbon$removeContextualGroup(id) {ULSpEN:;
        var $v_0 = this.$u_3[id];
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            var $$enum_2 = this.$6_0.getEnumerator();
            while ($$enum_2.moveNext()) {
                var $v_1 = $$enum_2.get_current();
                if ($v_1.$10_2 && $v_1.$q_2 === id) {
                    throw Error.create('You cannot remove a contextual group when there are Tabs that refer to it.');
                }
            }
            delete this.$u_3[id];
        }
    },
    
    showContextualGroup: function CUI_Ribbon$showContextualGroup(id) {ULSpEN:;
        this.$7h_3(id, true);
    },
    
    hideContextualGroup: function CUI_Ribbon$hideContextualGroup(id) {ULSpEN:;
        this.$7h_3(id, false);
    },
    
    $7h_3: function CUI_Ribbon$$7h_3($p0, $p1) {
        var $v_0 = this.$u_3[$p0];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            throw Error.create('This ribbon does not contain a contextual group with id: ' + $p0);
        }
        var $v_1 = false;
        var $$enum_4 = this.$6_0.getEnumerator();
        while ($$enum_4.moveNext()) {
            var $v_2 = $$enum_4.get_current();
            if ($v_2.$q_2 === $p0) {
                if ($v_2.get_visible() !== $p1) {
                    $v_1 = true;
                }
                $v_2.set_$5n_0($p1);
            }
        }
        if ($v_1) {
            this.$p_0();
            if ($p1) {
                return $p0;
            }
        }
        return null;
    },
    
    $Cb_3: function CUI_Ribbon$$Cb_3($p0) {
        var $v_0 = this.get_ribbonProperties().ShowContextualGroupCommand;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            var $v_1 = new CUI.RibbonEventCommandProperties();
            $v_1.ContextualGroupId = $p0;
            this.raiseCommandEvent($v_0, 1, $v_1);
        }
    },
    
    $5U_3: function CUI_Ribbon$$5U_3($p0) {
        return this.$u_3[$p0];
    },
    
    addChildAtIndex: function CUI_Ribbon$addChildAtIndex(child, index) {ULSpEN:;
        this.ensureCorrectChildType(child);
        var $v_0 = child;
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            throw Error.create('child must not be null or undefined.');
        }
        if ($v_0.$10_2) {
            var $v_1 = this.$u_3[$v_0.$q_2];
            if (CUI.ScriptUtility.isNullOrUndefined($v_1)) {
                throw Error.create('A contextual tab with contextual group id: ' + $v_0.$q_2 + ' cannot be added because ' + ' the ribbon does not have a contextual group with this id.');
            }
        }
        CUI.Component.prototype.addChildAtIndex.call(this, child, index);
    },
    
    ensureCorrectChildType: function CUI_Ribbon$ensureCorrectChildType(child) {ULSpEN:;
        if (!CUI.Tab.isInstanceOfType(child)) {
            throw Error.create('Only children of type Tab can be added to a Ribbon');
        }
    },
    
    get_cssClass: function CUI_Ribbon$get_cssClass() {ULSpEN:;
        return 'ms-cui-ribbon';
    },
    
    get_rootType: function CUI_Ribbon$get_rootType() {ULSpEN:;
        return 'Ribbon';
    },
    
    $8l_3: function CUI_Ribbon$$8l_3() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$1R_3)) {
            this.$1R_3 = CUI.Utility.$2('div');
            this.$1R_3.id = 'jewelcontainer';
            this.$1R_3.className = 'ms-cui-jewel-container';
            this.$1R_3.style.display = 'none';
            this.$W_3.appendChild(this.$1R_3);
        }
    },
    
    $BF_3: function CUI_Ribbon$$BF_3() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$2G_3)) {
            this.$2G_3 = CUI.Utility.$2('span');
            this.$2G_3.className = 'ms-cui-qat-container';
            this.$w_3.appendChild(this.$2G_3);
        }
    },
    
    $8S_3: function CUI_Ribbon$$8S_3($p0, $p1, $p2) {
        var $v_0 = new CUI.QATBuildOptions();
        $v_0.attachToDOM = $p1;
        $v_0.trimmedIds = this.get_$2P_3().$z_0.trimmedIds;
        var $v_1 = new CUI.QATBuilder($v_0, this.$2G_3, this.get_$2P_3().$24_0);
        $v_1.$11_0 = $p2;
        if (!$v_1.buildQAT($p0)) {
            throw Error.create('QAT could not be built');
        }
        this._qat = $v_1.get_QAT();
        this.$w_3.style.display = 'block';
    },
    
    $8R_3: function CUI_Ribbon$$8R_3($p0, $p1, $p2) {
        this.$1R_3.style.display = 'block';
        var $v_0 = new CUI.JewelBuildOptions();
        $v_0.attachToDOM = $p1;
        $v_0.trimmedIds = this.get_$2P_3().$z_0.trimmedIds;
        var $v_1 = new CUI.JewelBuilder($v_0, this.$1R_3, this.get_$2P_3().$24_0);
        $v_1.$11_0 = $p2;
        if (!$v_1.buildJewel($p0)) {
            throw Error.create('Jewel could not be built');
        }
        this._jewel = $v_1.get_jewel();
    },
    
    _qat: null,
    
    get_QAT: function CUI_Ribbon$get_QAT() {ULSpEN:;
        return this._qat;
    },
    set_QAT: function CUI_Ribbon$set_QAT(value) {ULSpEN:;
        this._qat = value;
        return value;
    },
    
    _jewel: null,
    
    get_jewel: function CUI_Ribbon$get_jewel() {ULSpEN:;
        return this._jewel;
    },
    set_jewel: function CUI_Ribbon$set_jewel(value) {ULSpEN:;
        this._jewel = value;
        return value;
    },
    
    $Az_3: function CUI_Ribbon$$Az_3($p0, $p1, $p2, $p3, $p4, $p5) {
        return new CUI.Tab(this, $p0, $p1, $p2, $p3, false, null, $p4, $p5);
    },
    
    $Aq_3: function CUI_Ribbon$$Aq_3($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        return new CUI.Tab(this, $p0, $p1, $p2, $p3, true, $p4, $p5, $p6);
    },
    
    $At_3: function CUI_Ribbon$$At_3($p0, $p1, $p2, $p3, $p4) {
        return new CUI.Group(this, $p0, $p2, $p3, $p4, $p1);
    },
    
    $Au_3: function CUI_Ribbon$$Au_3($p0, $p1) {
        return new CUI.GroupPopup(this, $p0, $p1);
    },
    
    $Av_3: function CUI_Ribbon$$Av_3($p0, $p1) {
        return new CUI.GroupPopupLayout(this, $p0, $p1);
    },
    
    $8e_3: function CUI_Ribbon$$8e_3($p0, $p1) {
        return new CUI.Layout(this, $p0, $p1);
    },
    
    $29_3: function CUI_Ribbon$$29_3($p0, $p1, $p2) {
        return new CUI.Section(this, $p0, $p1, $p2);
    },
    
    $8h_3: function CUI_Ribbon$$8h_3($p0) {
        return new CUI.Strip(this, $p0);
    },
    
    $6O_3: null,
    
    $Cw_3: function CUI_Ribbon$$Cw_3() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$9_3)) {
            this.$9_3.$1X_0();
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$9_3) && !this.$9_3.$10_2) {
            this.$6O_3 = this.$9_3;
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$9_3) || !this.$9_3.$6_0.$M_0) {
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0()) && !CUI.ScriptUtility.isNullOrUndefined(this.$f_3) && this.get_$3_0().lastChild === this.$f_3) {
                this.get_$3_0().removeChild(this.$f_3);
            }
        }
        else if (!CUI.ScriptUtility.isNullOrUndefined(this.$f_3)) {
            this.get_$3_0().appendChild(this.$f_3);
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$9_3)) {
            return;
        }
        var $v_0 = this.$9_3.$j_0;
        this.$9_3.$2i_0();
        if (this.$9_3.$6_0.$M_0 > 0 && !CUI.ScriptUtility.isNullOrUndefined(this.$f_3)) {
            var $v_1 = false;
            if (this.$f_3.hasChildNodes()) {
                $v_1 = this.$f_3.firstChild === this.$9_3.get_$3_0();
                if (!$v_1) {
                    this.$f_3.removeChild(this.$f_3.firstChild);
                }
            }
            if (!$v_1) {
                this.$f_3.appendChild(this.$9_3.get_$3_0());
            }
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonProperties().TabSwitchCommand) && (this.$1m_3 !== this.$9_3)) {
            var $v_2 = new CUI.CommandContextSwitchCommandProperties();
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$1m_3) && this.$1m_3 !== this.$9_3) {
                $v_2.OldContextId = this.$1m_3.$4_0;
                $v_2.OldContextCommand = this.$1m_3.$m_2;
            }
            else {
                $v_2.OldContextId = null;
                $v_2.OldContextCommand = null;
            }
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$9_3)) {
                $v_2.NewContextId = this.$9_3.$4_0;
                $v_2.NewContextCommand = this.$9_3.$m_2;
                $v_2.ChangedByUser = this.$9_3.$4V_2;
            }
            this.raiseCommandEvent(this.get_ribbonProperties().TabSwitchCommand, 2, $v_2);
            this.$Cy_3(this.$9_3);
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$9_3)) {
            this.$9_3.$4V_2 = false;
            if (this.$9_3.$17_2) {
                this.$9_3.$9n_2();
            }
        }
    },
    
    $5c_3: function CUI_Ribbon$$5c_3($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined($p0)) {
            this.$p_0();
            $p0.$7g_2(true, false);
            if (this.$9_3 && this.$9_3.$10_2) {
                var $v_0 = this.$5U_3(this.$9_3.$q_2);
                var $v_1 = CUI.ContextualGroup.$4f($v_0.$2n_0);
                if ($v_1 !== '') {
                    this.$2p_3 = 'ms-cui-ct-topBar-' + $v_1;
                }
            }
            if (!$p0.$10_2) {
                this.$7Y_3(0);
            }
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$9_3) && this.$9_3 !== $p0) {
                this.$9_3.$7g_2(false, false);
            }
            this.$9_3 = $p0;
            this.set_$3G_3(false);
        }
        this.set_$l_1(null);
    },
    
    $Cy_3: function CUI_Ribbon$$Cy_3($p0) {
        this.$1m_3 = $p0;
    },
    
    selectTabById: function CUI_Ribbon$selectTabById(tabId) {ULSpEN:;
        var $v_0 = this.getChild(tabId);
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            if ($v_0.get_selected() && $v_0.get_visible()) {
                return true;
            }
            if ($v_0.$10_2 && !$v_0.get_visible()) {
                this.showContextualGroup($v_0.$q_2);
            }
            if ($v_0.get_visible()) {
                $v_0.set_selected(true);
                return true;
            }
        }
        return false;
    },
    
    selectTabByCommand: function CUI_Ribbon$selectTabByCommand(tabCommand) {ULSpEN:;
        if (this.get_selectedTabCommand() === tabCommand) {
            return true;
        }
        var $$enum_1 = this.$6_0.getEnumerator();
        while ($$enum_1.moveNext()) {
            var $v_0 = $$enum_1.get_current();
            if ($v_0.$m_2 === tabCommand) {
                return this.selectTabById($v_0.$4_0);
            }
        }
        return false;
    },
    
    $7Y_3: function CUI_Ribbon$$7Y_3($p0) {
        var $v_0 = CUI.ContextualGroup.$4f($p0);
        if ($v_0 === '') {
            CUI.Utility.removeCSSClassFromElement(this.$W_3, this.$2p_3);
            this.$2p_3 = null;
        }
        else {
            if (this.$2p_3) {
                CUI.Utility.removeCSSClassFromElement(this.$W_3, this.$2p_3);
            }
            this.$2p_3 = 'ms-cui-ct-topBar-' + $v_0;
            CUI.Utility.ensureCSSClassOnElement(this.$W_3, this.$2p_3);
        }
    },
    
    $2p_3: null,
    $4s_3: null,
    
    get_selectedTabCommand: function CUI_Ribbon$get_selectedTabCommand() {ULSpEN:;
        return (this.$9_3) ? this.$9_3.$m_2 : null;
    },
    
    get_selectedTabId: function CUI_Ribbon$get_selectedTabId() {ULSpEN:;
        return (this.$9_3) ? this.$9_3.$4_0 : null;
    },
    
    $94_3: function CUI_Ribbon$$94_3() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$9_3)) {
            return 0;
        }
        return this.$f_3.offsetHeight - this.$9_3.get_$3_0().offsetHeight;
    },
    
    $5X_3: function CUI_Ribbon$$5X_3() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$9_3)) {
            return 0;
        }
        return this.$f_3.offsetWidth - this.$9_3.$BY_2();
    },
    
    $7D_3: function CUI_Ribbon$$7D_3() {ULSpEN:;
        return this.get_$3_0().offsetWidth;
    },
    
    $91_3: function CUI_Ribbon$$91_3() {ULSpEN:;
        return 100;
    },
    
    $98_3: function CUI_Ribbon$$98_3() {ULSpEN:;
        this.$82_3 = this.get_$3_0().style.display;
        this.get_$3_0().style.display = 'none';
        return;
    },
    
    $Cp_3: function CUI_Ribbon$$Cp_3() {ULSpEN:;
        this.get_$3_0().style.display = this.$82_3;
        if (this.$7D_3() < this.$91_3()) {
            this.get_$3_0().style.display = 'none';
            return;
        }
    },
    
    $Ce_3: function CUI_Ribbon$$Ce_3($p0) {
        var $v_0 = 20;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) {
            return false;
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$9_3) && !this.$9_3.$6e_2) {
            var $v_6 = null;
            if (this.$4X_1) {
                $v_6 = this.getDataCookieValue(this.$9_3.$4_0);
            }
            var $v_7 = this._lastWindowResizeWidthHeight;
            if (!CUI.ScriptUtility.isNullOrUndefined($v_6) && $v_6.startsWith($v_7)) {
                var $v_8 = $v_6.split('|');
                if (!CUI.ScriptUtility.isNullOrUndefined($v_8) && $v_8.length === 4) {
                    var $v_9 = parseInt($v_8[1]);
                    var $v_A = parseInt($v_8[2]);
                    var $v_B = $v_8[3];
                    $v_0 = ($v_A > $v_0) ? $v_A : $v_0;
                    if (!isNaN($v_9) && $v_9 >= 0) {
                        if ($v_9 >= 0 && $v_9 < this.$9_3.get_scaling().$1o_0.length) {
                            this.$9_3.scaleIndex($v_9);
                            this.$9_3.$6e_2 = true;
                            this.$1q_0();
                            if ($v_B === (this.get_$19_1()).get_ribbonBuildOptions().scalingHint) {
                                this.$9_3.$6N_2 = this._lastWindowResizeWidthHeight;
                                return true;
                            }
                        }
                    }
                }
            }
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$9_3)) {
            return false;
        }
        if (this.$9_3.$j_0) {
            this.$1q_0();
        }
        if ($p0 && this.$7D_3() > 0) {
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) {
                if (this.get_$3_0().style.display !== 'none' && this.$7D_3() < this.$91_3()) {
                    this.$98_3();
                }
                else if (this.get_$3_0().style.display === 'none') {
                    this.$Cp_3();
                }
            }
        }
        var $v_1 = 0;
        var $v_2 = false;
        while ((this.$5X_3() < 0 || this.$94_3() < 0 || this.$9_3.get_$7P_2()) && $v_1 < 25) {
            if (!this.$9_3.scaleDown()) {
                $v_2 = true;
                break;
            }
            this.$1q_0();
            $v_1++;
        }
        if ($v_2) {
        }
        var $v_3 = 0;
        var $v_4 = 0;
        if ($v_1 <= 0) {
            while (this.$5X_3() > $v_0 && $v_3 < 25) {
                if (!this.$9_3.scaleUp()) {
                    break;
                }
                this.$1q_0();
                $v_3++;
                if (this.$5X_3() <= 0 || this.$94_3() < 0 || this.$9_3.get_$7P_2()) {
                    this.$9_3.scaleDown();
                    this.$1q_0();
                    $v_4++;
                    break;
                }
            }
        }
        if (this.$4X_1 && this.$9_3.$1E_2 >= -1) {
            this.$Cu_3();
            this.$9_3.$6e_2 = true;
        }
        this.$9_3.$6N_2 = this._lastWindowResizeWidthHeight;
        this.$7V_3();
        var $v_5 = ($v_1 > 0 || $v_3 - $v_4 > 0);
        if ($v_5) {
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonProperties().ScaleCommand)) {
                this.raiseCommandEvent(this.get_ribbonProperties().ScaleCommand, 1, null);
            }
        }
        return $v_5;
    },
    
    $Cn_3: function CUI_Ribbon$$Cn_3() {ULSpEN:;
        return ((this.$0_0._textDirection === 1) && CUI.Utility.$3F());
    },
    
    $Cj_3: function CUI_Ribbon$$Cj_3() {ULSpEN:;
        this.$k_3.style.width = 'auto';
        var $v_0 = this.$8U_3(this.$k_3);
        this.$k_3.style.width = $v_0 + 'px';
        this.$k_3.setAttribute('_widthAdded', true);
    },
    
    $8U_3: function CUI_Ribbon$$8U_3($p0) {
        var $v_0 = 0;
        var $v_1 = $p0.children;
        var $v_2 = $v_1.length;
        for (var $v_3 = 0; $v_3 < $v_2; $v_3++) {
            var $v_4 = $v_1[$v_3];
            if (!CUI.ScriptUtility.isNullOrUndefined($v_4) && $v_4.nodeName === 'LI' && $v_4.offsetWidth > 0) {
                var $v_5 = $v_4.childNodes[1];
                if (!CUI.ScriptUtility.isNullOrUndefined($v_5) && $v_5.nodeName === 'UL') {
                    $v_5.style.width = 'auto';
                    var $v_6 = this.$8U_3($v_5);
                    $v_5.style.width = $v_6 + 'px';
                    $v_0 = $v_0 + $v_6 + 4;
                }
                else {
                    $v_0 = $v_0 + $v_4.offsetWidth + 2;
                }
            }
        }
        return $v_0;
    },
    
    get_$8M_3: function CUI_Ribbon$get_$8M_3() {ULSpEN:;
        var $v_0 = this.get_$19_1();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return true;
        }
        var $v_1 = $v_0.get_ribbonBuildOptions();
        if (CUI.ScriptUtility.isNullOrUndefined($v_1)) {
            return true;
        }
        return $v_1.lazyTabInit && this.get_headerScalingEnabled();
    },
    
    $7V_3: function CUI_Ribbon$$7V_3() {ULSpEN:;
        if (this.$Cn_3()) {
            this.$Cj_3();
        }
        this.scaleHeaderInternal(this.$1e_3);
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$k_3)) {
            var $v_0 = this.$k_3.className;
            var $v_1 = 0;
            if ($v_0.indexOf('ms-cui-tts-scale-1') !== -1) {
                $v_1 = 1;
            }
            else if ($v_0.indexOf('ms-cui-tts-scale-2') !== -1) {
                $v_1 = 2;
            }
            var $$enum_2 = this.$6_0.getEnumerator();
            while ($$enum_2.moveNext()) {
                var $v_2 = $$enum_2.get_current();
                $v_2.onTitleScale($v_1);
            }
        }
    },
    
    $Cc_2: function CUI_Ribbon$$Cc_2() {ULSpEN:;
        if (this.$21_3) {
            this.$7V_3();
            return false;
        }
        var $v_0 = this.$Ce_3(false);
        this.$6M_3 = new Date();
        return $v_0;
    },
    
    $Cd_3: function CUI_Ribbon$$Cd_3($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$9_3)) {
            this.$9_3.$9g_2($p0);
        }
    },
    
    get_$Bk_3: function CUI_Ribbon$get_$Bk_3() {ULSpEN:;
        return this.$6M_3.getTime();
    },
    
    $Cu_3: function CUI_Ribbon$$Cu_3() {ULSpEN:;
        this.storeDataCookie(this.$9_3.$4_0, CUI.Utility.$3C().toString() + CUI.Utility.$3t().toString() + '|' + this.$9_3.$1E_2.toString() + '|' + this.$5X_3().toString() + '|' + (this.get_$19_1()).get_ribbonBuildOptions().scalingHint.toString());
    },
    
    $21_3: false,
    $A5_3: false,
    $6S_3: false,
    
    get_minimized: function CUI_Ribbon$get_minimized() {ULSpEN:;
        return this.$21_3;
    },
    set_minimized: function CUI_Ribbon$set_minimized(value) {ULSpEN:;
        if (this.$21_3 !== value) {
            this.set_$3G_3(value);
            if (!value && this.get_$4i_1()) {
                this.pollForStateAndUpdate();
            }
        }
        return value;
    },
    
    $80_3: false,
    
    get_$3G_3: function CUI_Ribbon$get_$3G_3() {ULSpEN:;
        return this.$21_3;
    },
    set_$3G_3: function CUI_Ribbon$set_$3G_3($p0) {
        if (this.$21_3 !== $p0 || !this.$80_3) {
            this.$p_0();
            this.$A5_3 = !$p0;
            this.$6S_3 = true;
            this.$21_3 = $p0;
            this.$80_3 = true;
            if (!$p0) {
                CUI.Utility.ensureCSSClassOnElement(this.$W_3, 'ms-cui-topBarMaximized');
            }
            else {
                CUI.Utility.removeCSSClassFromElement(this.$W_3, 'ms-cui-topBarMaximized');
            }
            if ($p0 && !CUI.ScriptUtility.isNullOrUndefined(this.$9_3)) {
                this.$9_3.$7g_2(false, false);
                this.$9_3 = null;
            }
        }
        return $p0;
    },
    
    $3x_0: function CUI_Ribbon$$3x_0() {ULSpEN:;
        this.set_$3v_0(new Date());
        this.$2C_1 = false;
        var $v_0 = {};
        var $v_1 = [];
        var $$dict_2 = this.$u_3;
        for (var $$key_3 in $$dict_2) {
            var $v_2 = { key: $$key_3, value: $$dict_2[$$key_3] };
            var $v_3 = $v_2.value;
            var $v_4 = false;
            if (!CUI.ScriptUtility.isNullOrUndefined($v_3.$m_0)) {
                $v_4 = this.get_rootUser().isRootCommandEnabled($v_3.$m_0, this);
            }
            if ($v_4) {
                $v_0[$v_2.key] = true;
            }
            var $v_5 = this.$7h_3($v_2.key, $v_4);
            if ($v_5) {
                Array.add($v_1, $v_5);
            }
        }
        if (this._qat) {
            this._qat.pollForStateAndUpdate();
        }
        if (this._jewel) {
            this._jewel.pollForStateAndUpdate();
        }
        if (this.$j_0) {
            this.$1q_0();
            this.$7V_3();
            for (var $v_6 = 0; $v_6 < $v_1.length; $v_6++) {
                this.$Cb_3($v_1[$v_6]);
            }
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$9_3)) {
            this.$9_3.$3x_0();
        }
        if (this.$2C_1) {
            this.$Cc_2();
            this.$2C_1 = false;
        }
        this.ensureGlobalDisablingRemoved();
    },
    
    $2j_0: function CUI_Ribbon$$2j_0($p0) {
        if ($p0.$G_1 !== 11) {
            $p0.get_commandInfo().RootLocation = ($p0.$G_1 === 2) ? 'UpperRibbon' : 'LowerRibbon';
            if ($p0.$G_1 === 2) {
                var $v_0 = $p0.$34_1;
                $p0.get_commandInfo().TabId = $v_0.NewContextId;
            }
        }
        return CUI.Root.prototype.$2j_0.call(this, $p0);
    },
    
    get_jewelElement: function CUI_Ribbon$get_jewelElement() {ULSpEN:;
        return this.$1R_3;
    },
    set_jewelElement: function CUI_Ribbon$set_jewelElement(value) {ULSpEN:;
        this.$1R_3 = value;
        return value;
    },
    
    get_ribbonProperties: function CUI_Ribbon$get_ribbonProperties() {ULSpEN:;
        return this.$5_1;
    },
    
    get_$2P_3: function CUI_Ribbon$get_$2P_3() {ULSpEN:;
        return this.get_$19_1();
    },
    set_$2P_3: function CUI_Ribbon$set_$2P_3($p0) {
        this.set_$19_1($p0);
        return $p0;
    },
    
    $A0_3: null,
    
    get_domElementTagName: function CUI_Ribbon$get_domElementTagName() {ULSpEN:;
        return 'div';
    },
    
    $1X_0: function CUI_Ribbon$$1X_0() {ULSpEN:;
        CUI.Root.prototype.$1X_0.call(this);
        this.get_$3_0().setAttribute('aria-describedby', 'ribboninstructions');
        this.get_$3_0().setAttribute('role', 'toolbar');
        this.$BJ_3();
        this.$BK_3();
        this.$BF_3();
        this.$8l_3();
        this.$BG_3();
        this.$BD_3();
        this.$8l_3();
    },
    
    $BK_3: function CUI_Ribbon$$BK_3() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$w_3)) {
            this.$w_3 = CUI.Utility.$2('div');
            this.$w_3.className = 'ms-cui-topBar1';
            this.$w_3.style.display = 'none';
            this.$1e_3.appendChild(this.$w_3);
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$W_3)) {
            this.$W_3 = CUI.Utility.$2('div');
            this.$W_3.className = 'ms-cui-topBar2';
            if (!this.get_minimized()) {
                this.$W_3.className = 'ms-cui-topBar2 ms-cui-topBarMaximized';
            }
            this.$1e_3.appendChild(this.$W_3);
        }
    },
    
    $BJ_3: function CUI_Ribbon$$BJ_3() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$2x_3)) {
            this.$2x_3 = CUI.Utility.$2('span');
            this.$2x_3.className = 'ms-cui-hidden';
            this.$2x_3.id = 'ribboninstruction';
            CUI.Utility.$1r(this.$2x_3, (this.$5_1).NavigationHelpText);
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$1e_3)) {
            this.$1e_3 = CUI.Utility.$2('div');
            this.$1e_3.className = 'ms-cui-ribbonTopBars';
            this.get_$3_0().appendChild(this.$2x_3);
            this.get_$3_0().appendChild(this.$1e_3);
        }
    },
    
    $BG_3: function CUI_Ribbon$$BG_3() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$f_3)) {
            this.$f_3 = CUI.Utility.$2('div');
            CUI.Utility.disableElement(this.$f_3);
        }
    },
    
    $BD_3: function CUI_Ribbon$$BD_3() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$1b_3)) {
            this.$1b_3 = $get(this.$2m_1 + '-' + 'QATRowCenter');
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$1d_3)) {
            this.$1d_3 = $get(this.$2m_1 + '-' + 'QATRowRight');
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$1c_3)) {
            this.$1c_3 = $get(this.$2m_1 + '-' + 'QATRowLeft');
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$1g_3)) {
            this.$1g_3 = $get(this.$2m_1 + '-' + 'TabRowLeft');
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$1f_3)) {
            this.$1f_3 = $get(this.$2m_1 + '-' + 'TabRowInline');
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$1h_3)) {
            this.$1h_3 = $get(this.$2m_1 + '-' + 'TabRowRight');
        }
    },
    
    $Bb_3: function CUI_Ribbon$$Bb_3() {ULSpEN:;
        if (!this.$35_3 && !CUI.ScriptUtility.isNullOrUndefined(this.$1b_3) && this.$1b_3.parentNode !== this.$w_3) {
            if (this.$1b_3.parentNode) {
                this.$1b_3.parentNode.removeChild(this.$1b_3);
            }
            this.$w_3.appendChild(this.$1b_3);
            this.$1b_3.style.display = 'inline-block';
            this.$w_3.style.display = 'block';
            CUI.Utility.$1s(this.$1b_3, true, false);
        }
        if (!this.$35_3 && !CUI.ScriptUtility.isNullOrUndefined(this.$1d_3) && this.$1d_3.parentNode !== this.$w_3) {
            if (this.$1d_3.parentNode) {
                this.$1d_3.parentNode.removeChild(this.$1d_3);
            }
            this.$w_3.appendChild(this.$1d_3);
            this.$1d_3.style.display = 'inline-block';
            this.$w_3.style.display = 'block';
            CUI.Utility.$1s(this.$1d_3, true, false);
        }
        if (!this.$35_3 && !CUI.ScriptUtility.isNullOrUndefined(this.$1c_3) && this.$1c_3.parentNode !== this.$2G_3) {
            if (this.$1c_3.parentNode) {
                this.$1c_3.parentNode.removeChild(this.$1c_3);
            }
            this.$2G_3.appendChild(this.$1c_3);
            this.$1c_3.style.display = 'inline-block';
            this.$w_3.style.display = 'block';
            CUI.Utility.$1s(this.$1c_3, true, false);
        }
        if (!this.$35_3 && !CUI.ScriptUtility.isNullOrUndefined(this.$1g_3) && this.$1g_3.parentNode !== this.$W_3) {
            if (this.$1g_3.parentNode) {
                this.$1g_3.parentNode.removeChild(this.$1g_3);
            }
            this.$W_3.appendChild(this.$1g_3);
            this.$1g_3.style.display = 'block';
            CUI.Utility.$1s(this.$1g_3, true, false);
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$k_3)) {
            this.$k_3 = CUI.Utility.$2('ul');
            this.$k_3.setAttribute('role', 'tablist');
            this.$k_3.className = 'ms-cui-tts';
            this.$W_3.appendChild(this.$k_3);
        }
        if (!this.$35_3 && !CUI.ScriptUtility.isNullOrUndefined(this.$1f_3) && this.$1f_3.parentNode !== this.$W_3) {
            if (this.$1f_3.parentNode) {
                this.$1f_3.parentNode.removeChild(this.$1f_3);
            }
            this.$W_3.appendChild(this.$1f_3);
            this.$1f_3.style.display = 'inline-block';
            CUI.Utility.$1s(this.$1f_3, true, false);
        }
        if (!this.$35_3 && !CUI.ScriptUtility.isNullOrUndefined(this.$1h_3) && this.$1h_3.parentNode !== this.$W_3) {
            if (this.$1h_3.parentNode) {
                this.$1h_3.parentNode.removeChild(this.$1h_3);
            }
            this.$W_3.appendChild(this.$1h_3);
            this.$1h_3.style.display = 'block';
            CUI.Utility.$1s(this.$1h_3, true, false);
        }
        this.$35_3 = true;
    },
    
    ensureGlobalDisablingRemoved: function CUI_Ribbon$ensureGlobalDisablingRemoved() {ULSpEN:;
        CUI.Utility.enableElement(this.$k_3);
        this.$8m_3();
        if (this._jewel) {
            this._jewel.set_enabled(true);
        }
        if (this._qat) {
            this._qat.pollForStateAndUpdate();
        }
    },
    
    $8m_3: function CUI_Ribbon$$8m_3() {ULSpEN:;
        CUI.Utility.enableElement(this.$f_3);
    },
    
    get_rootUser: function CUI_Ribbon$get_rootUser() {ULSpEN:;
        return CUI.Root.prototype.get_rootUser.call(this);
    },
    set_rootUser: function CUI_Ribbon$set_rootUser(value) {ULSpEN:;
        CUI.Root.prototype.set_rootUser.call(this, value);
        if (!CUI.ScriptUtility.isNullOrUndefined(this._qat)) {
            this._qat.set_rootUser(value);
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this._jewel)) {
            this._jewel.set_rootUser(value);
        }
        return value;
    },
    
    dispose: function CUI_Ribbon$dispose() {ULSpEN:;
        this.set_$B4_1(true);
        var $v_0 = this.$0_0;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.$2f_1;
            if (!CUI.ScriptUtility.isNullOrUndefined($v_1)) {
                window.clearTimeout($v_1);
            }
            $v_0.$2O_1();
        }
        if (this.$6T_3) {
            $removeHandler(this.get_$3_0(), 'contextmenu', this.$6T_3);
            this.$6T_3 = null;
        }
        CUI.ScalableRoot.prototype.dispose.call(this);
        this.$1m_3 = null;
        this.$9_3 = null;
        this.$1e_3 = null;
        this.$k_3 = null;
        this.$1R_3 = null;
        this.$f_3 = null;
        this.$1g_3 = null;
        this.$1f_3 = null;
        this.$1h_3 = null;
        this.$2G_3 = null;
        this.$1c_3 = null;
        this.$1b_3 = null;
        this.$1d_3 = null;
        this.$w_3 = null;
        this.$W_3 = null;
        var $$dict_2 = this.$u_3;
        for (var $$key_3 in $$dict_2) {
            var $v_2 = { key: $$key_3, value: $$dict_2[$$key_3] };
            var $v_3 = $v_2.value;
            $v_3.dispose();
        }
        this.$u_3 = null;
    }
}


CUI.RibbonCommand = function CUI_RibbonCommand() {
}
CUI.RibbonCommand.$92 = function CUI_RibbonCommand$$92($p0) {
    var $v_0 = window._v_rg_spbutton;
    if ($v_0) {
        var $v_1 = $v_0[$p0];
        if ($v_1) {
            var $v_2 = $get($v_1);
            return $v_2;
        }
    }
    return null;
}
CUI.RibbonCommand.serverButton = function CUI_RibbonCommand$serverButton(srcId, menuItemId) {ULSpEN:;
    var $v_0 = CUI.RibbonCommand.$92(srcId);
    if ($v_0) {
        var $v_1 = $v_0;
        if (CUI.BrowserUtility.$Bh()) {
            if ($v_0.tagName !== 'A') {
                CUI.NativeUtility.ffClick($v_0);
            }
            else {
                window.location.href = $v_1.href;
            }
        }
        else {
            $v_0.click();
        }
    }
}
CUI.RibbonCommand.serverQueryButton = function CUI_RibbonCommand$serverQueryButton(srcId) {ULSpEN:;
    var $v_0 = CUI.RibbonCommand.$92(srcId);
    return !!$v_0;
}
CUI.RibbonCommand.serverControlLabel = function CUI_RibbonCommand$serverControlLabel(ribbonCommand) {ULSpEN:;
    var $v_0 = window._v_rg_spbutton;
    if ($v_0) {
        var $v_1 = ($v_0[ribbonCommand]);
        if ($v_1) {
            var $v_2 = $get($v_1);
            return ($v_2.value);
        }
    }
    return null;
}


CUI.RibbonBuildContext = function CUI_RibbonBuildContext() {ULSpEN:;
    CUI.RibbonBuildContext.initializeBase(this);
}
CUI.RibbonBuildContext.prototype = {
    
    clone: function CUI_RibbonBuildContext$clone() {ULSpEN:;
        var $v_0 = new CUI.RibbonBuildContext();
        $v_0.initializedTab = this.initializedTab;
        $v_0.initialScalingIndex = this.initialScalingIndex;
        $v_0.initialTabId = this.initialTabId;
        $v_0.ribbon = this.ribbon;
        return $v_0;
    },
    
    initializedTab: null,
    initialTabId: null,
    initialScalingIndex: 0,
    ribbon: null
}


CUI.RibbonBuildOptions = function CUI_RibbonBuildOptions() {ULSpEN:;
    this.initialScalingIndex = -1;
    CUI.RibbonBuildOptions.initializeBase(this);
}
CUI.RibbonBuildOptions.prototype = {
    lazyTabInit: false,
    shallowTabs: false,
    showQATId: null,
    showJewelId: null,
    minimized: false,
    shownTabs: null,
    shownContextualGroups: null,
    initiallyVisibleContextualGroups: null,
    normalizedContextualGroups: null,
    trimEmptyGroups: false,
    initialTabSelectedByUser: false,
    launchedByKeyboard: false,
    scalingHint: '0'
}


CUI.RibbonBuilder = function CUI_RibbonBuilder(options, elmPlaceholder, rootBuildClient) {ULSpEN:;
    this.$$d_$CD_1 = Function.createDelegate(this, this.$CD_1);
    this.$$d_$B2_1 = Function.createDelegate(this, this.$B2_1);
    this.$$d_$9V_1 = Function.createDelegate(this, this.$9V_1);
    CUI.RibbonBuilder.initializeBase(this, [ options, elmPlaceholder, rootBuildClient ]);
    if (CUI.ScriptUtility.isNullOrUndefined(elmPlaceholder)) {
        throw Error.create('Ribbon placeholder DOM element is null or undefined.');
    }
}
CUI.RibbonBuilder.prototype = {
    
    get_ribbon: function CUI_RibbonBuilder$get_ribbon() {ULSpEN:;
        return this.$0_0;
    },
    set_ribbon: function CUI_RibbonBuilder$set_ribbon(value) {ULSpEN:;
        this.$0_0 = value;
        return value;
    },
    
    get_ribbonBuildOptions: function CUI_RibbonBuilder$get_ribbonBuildOptions() {ULSpEN:;
        return this.$z_0;
    },
    
    fetchAndProcessRibbonData: function CUI_RibbonBuilder$fetchAndProcessRibbonData(initialTabId, handler) {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(initialTabId)) {
            throw Error.create('Initial tab for ribbon is null or undefined');
        }
        if (this.$2Z_0) {
            return false;
        }
        var $v_0 = new CUI.RibbonBuildContext();
        $v_0.initialTabId = initialTabId;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonBuildOptions().attachToDOM) && this.get_ribbonBuildOptions().attachToDOM) {
            $v_0.initialScalingIndex = this.get_ribbonBuildOptions().initialScalingIndex;
        }
        this.$2Z_0 = true;
        var $v_1 = new CUI.DataQuery();
        $v_1.id = $v_0.initialTabId;
        $v_1.queryType = 2;
        $v_1.handler = handler;
        $v_1.data = $v_0;
        this.$11_0.runQuery($v_1);
        return true;
    },
    
    buildRibbonAndInitialTab: function CUI_RibbonBuilder$buildRibbonAndInitialTab(initialTabId) {ULSpEN:;
        return this.fetchAndProcessRibbonData(initialTabId, this.$$d_$9V_1);
    },
    
    buildRibbonFromData: function CUI_RibbonBuilder$buildRibbonFromData(dataNode, initialTabId) {ULSpEN:;
        var $v_0 = new CUI.RibbonBuildContext();
        $v_0.initialTabId = initialTabId;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonBuildOptions().attachToDOM) && this.get_ribbonBuildOptions().attachToDOM) {
            $v_0.initialScalingIndex = this.get_ribbonBuildOptions().initialScalingIndex;
        }
        var $v_1 = new CUI.DataQueryResult();
        $v_1.success = true;
        $v_1.queryData = dataNode;
        $v_1.contextData = $v_0;
        this.$9V_1($v_1);
    },
    
    $9V_1: function CUI_RibbonBuilder$$9V_1($p0) {
        var $v_0 = $p0.contextData;
        $p0.queryData = this.applyDataExtensions($p0.queryData);
        CUI.Utility.ensureCSSClassOnElement(this._elmPlaceholder, 'loaded');
        var $v_1 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p0.queryData, 'Templates');
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1)) {
            CUI.TemplateManager.get_instance().loadTemplates($v_1);
        }
        this.set_ribbon(this.$AZ_1($p0.queryData, $v_0));
        this.get_ribbon().set_$2P_3(this);
        this.get_ribbon()._decimalSeparator = this.get_ribbonBuildOptions().decimalSeparator;
        this.$24_0.onComponentCreated(this.get_ribbon(), this.get_ribbon().$4_0);
        this.get_ribbon()._percentPositivePattern = this.get_ribbonBuildOptions().percentPositivePattern;
        if (this.get_ribbonBuildOptions().minimized) {
            this.get_ribbon().set_$3G_3(true);
        }
        else {
            this.get_ribbon().set_$3G_3(false);
            var $v_3 = this.get_ribbon().getChild($v_0.initialTabId);
            if (!CUI.ScriptUtility.isNullOrUndefined($v_3)) {
                $v_3.$4V_2 = this.get_ribbonBuildOptions().initialTabSelectedByUser;
                this.get_ribbon().$5c_3($v_3);
                this.get_ribbon().$A0_3 = $v_3;
            }
        }
        this.get_ribbon().$2m_1 = this.get_ribbonBuildOptions().clientID;
        var $v_2 = !this.get_ribbonBuildOptions().minimized && this.get_ribbonBuildOptions().attachToDOM;
        if ($v_2) {
            if (!(this.$z_0).minimized) {
                this.get_ribbon().$Cd_3($v_0.initialScalingIndex - 1);
            }
            this.get_ribbon().$3p_0(true);
            if (!CUI.ScriptUtility.isNullOrEmptyString(this.get_ribbonBuildOptions().showQATId)) {
                this.get_ribbon().$8S_3(this.get_ribbonBuildOptions().showQATId, true, this.$11_0);
            }
            if (!CUI.ScriptUtility.isNullOrEmptyString(this.get_ribbonBuildOptions().showJewelId)) {
                this.get_ribbon().$8R_3(this.get_ribbonBuildOptions().showJewelId, true, this.$11_0);
            }
        }
        else {
            this.get_ribbon().$1X_0();
            if (!CUI.ScriptUtility.isNullOrEmptyString(this.get_ribbonBuildOptions().showQATId)) {
                this.get_ribbon().$8S_3(this.get_ribbonBuildOptions().showQATId, false, this.$11_0);
            }
            if (!CUI.ScriptUtility.isNullOrEmptyString(this.get_ribbonBuildOptions().showJewelId)) {
                this.get_ribbon().$8R_3(this.get_ribbonBuildOptions().showJewelId, false, this.$11_0);
            }
            CUI.Utility.removeChildNodesSlow(this._elmPlaceholder);
            this._elmPlaceholder.appendChild(this.get_ribbon().get_$3_0());
        }
        this.get_ribbon().$Cc_2();
        this.$7O_0(this.get_ribbon());
        this.$24_0.onComponentBuilt(this.get_ribbon(), this.get_ribbon().$4_0);
        if (this.get_ribbonBuildOptions().launchedByKeyboard) {
            this.get_ribbon().setFocusOnRibbon();
        }
        CUI.PMetrics.perfMark(7104);
    },
    
    $CD_1: function CUI_RibbonBuilder$$CD_1($p0) {
        var $v_0 = $p0.contextData;
        if ($p0.success) {
            var $v_1 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p0.queryData, 'Ribbon');
            var $v_2 = CUI.DataNodeWrapper.getFirstChildNodeWithName($v_1, 'Tabs');
            var $v_3 = null;
            if (CUI.ScriptUtility.isNullOrUndefined($v_2) || !CUI.DataNodeWrapper.getNodeChildren($v_2).length) {
                var $v_6 = CUI.DataNodeWrapper.getFirstChildNodeWithName($v_1, 'ContextualTabs');
                var $v_7 = CUI.DataNodeWrapper.getNodeChildren($v_6);
                for (var $v_8 = 0; $v_8 < $v_7.length; $v_8++) {
                    var $v_9 = $v_7[$v_8];
                    $v_3 = CUI.DataNodeWrapper.getNodeChildren($v_9);
                    if ($v_3.length > 0) {
                        break;
                    }
                }
            }
            else {
                $v_3 = CUI.DataNodeWrapper.getNodeChildren($v_2);
            }
            var $v_4 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p0.queryData, 'Templates');
            $v_4 = this.applyDataExtensions($v_4);
            CUI.TemplateManager.get_instance().loadTemplates($v_4);
            var $v_5 = this.applyDataExtensions($v_3[0]);
            this.$73_1($v_0.initializedTab, $v_5, $v_0);
            $v_0.initializedTab.get_ribbon().$5c_3($v_0.initializedTab);
            $v_0.initializedTab.$7M_0(true);
        }
        CUI.PMetrics.perfMark(7106);
    },
    
    $AZ_1: function CUI_RibbonBuilder$$AZ_1($p0, $p1) {
        var $v_0 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p0, 'Ribbon');
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            throw Error.create('No ribbon element was present in the data');
        }
        var $v_1 = new CUI.DataNodeWrapper($v_0);
        this.set_ribbon(new CUI.Ribbon($v_1.get_attributes()['Id'], $v_1.get_attributes()));
        this.get_ribbon().$4X_1 = true;
        var $v_2 = CUI.DataNodeWrapper.getNodeChildren(CUI.DataNodeWrapper.getFirstChildNodeWithName($v_1.$d_0, 'Tabs'));
        this.$8L_1($v_2, null, $p1);
        var $v_3 = CUI.DataNodeWrapper.getFirstChildNodeWithName($v_1.$d_0, 'ContextualTabs');
        if (!CUI.ScriptUtility.isNullOrUndefined($v_3)) {
            var $v_4 = CUI.DataNodeWrapper.getNodeChildren($v_3);
            var $v_5 = !CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonBuildOptions().shownContextualGroups);
            for (var $v_6 = 0; $v_6 < $v_4.length; $v_6++) {
                if ($v_5) {
                    var $v_7 = CUI.DataNodeWrapper.getNodeAttributes($v_4[$v_6])['Id'];
                    if (!CUI.ScriptUtility.isNullOrUndefined($v_7)) {
                        if (CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonBuildOptions().shownContextualGroups[$v_7])) {
                            continue;
                        }
                    }
                }
                this.$AA_1($v_4[$v_6], $p1);
            }
        }
        return this.get_ribbon();
    },
    
    $AA_1: function CUI_RibbonBuilder$$AA_1($p0, $p1) {
        var $v_0 = CUI.DataNodeWrapper.getNodeAttributes($p0);
        var $v_1 = 0;
        var $v_2 = $v_0['Id'];
        var $v_3 = !CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonBuildOptions().normalizedContextualGroups) && !CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonBuildOptions().normalizedContextualGroups[$v_2]) && this.get_ribbonBuildOptions().normalizedContextualGroups[$v_2];
        if (!$v_3) {
            switch ($v_0['Color']) {
                case 'DarkBlue':
                    $v_1 = 1;
                    break;
                case 'LightBlue':
                    $v_1 = 2;
                    break;
                case 'Magenta':
                    $v_1 = 6;
                    break;
                case 'Green':
                    $v_1 = 5;
                    break;
                case 'Orange':
                    $v_1 = 4;
                    break;
                case 'Purple':
                    $v_1 = 8;
                    break;
                case 'Teal':
                    $v_1 = 3;
                    break;
                case 'Yellow':
                    $v_1 = 7;
                    break;
                default:
                    $v_1 = 0;
                    break;
            }
            this.get_ribbon().addContextualGroup($v_2, $v_0['Title'], $v_1, $v_0['Command']);
        }
        var $v_4 = CUI.DataNodeWrapper.getNodeChildren($p0);
        if (!$v_3) {
            for (var $v_5 = 0; $v_5 < $v_4.length; $v_5++) {
                var $v_6 = CUI.DataNodeWrapper.getNodeAttribute($v_4[$v_5], 'Id');
                if ($v_6 === $p1.initialTabId) {
                    if (CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonBuildOptions().initiallyVisibleContextualGroups)) {
                        this.get_ribbonBuildOptions().initiallyVisibleContextualGroups = {};
                    }
                    this.get_ribbonBuildOptions().initiallyVisibleContextualGroups[$v_2] = true;
                    break;
                }
            }
        }
        this.$8L_1($v_4, ($v_3) ? null : $v_0['Id'], $p1);
    },
    
    $8L_1: function CUI_RibbonBuilder$$8L_1($p0, $p1, $p2) {
        var $v_0 = !CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonBuildOptions().shownTabs);
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            if ($v_0) {
                var $v_3 = CUI.DataNodeWrapper.getNodeAttributes($p0[$v_1])['Id'];
                if (!CUI.ScriptUtility.isNullOrUndefined($v_3)) {
                    if (CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonBuildOptions().shownTabs[$v_3])) {
                        continue;
                    }
                }
            }
            var $v_2 = this.$Ae_1($p0[$v_1], $p2, $p1);
            this.get_ribbon().addChild($v_2);
        }
    },
    
    $Ae_1: function CUI_RibbonBuilder$$Ae_1($p0, $p1, $p2) {
        var $v_0 = new CUI.DataNodeWrapper($p0);
        var $v_1;
        if (CUI.ScriptUtility.isNullOrUndefined($p2)) {
            $v_1 = this.get_ribbon().$Az_3($v_0.get_attributes()['Id'], $v_0.get_attributes()['Title'], $v_0.get_attributes()['Description'], $v_0.get_attributes()['Command'], $v_0.get_attributes()['CssClass'], $v_0.get_attributes()['ContainerCssClass']);
        }
        else {
            $v_1 = this.get_ribbon().$Aq_3($v_0.get_attributes()['Id'], $v_0.get_attributes()['Title'], $v_0.get_attributes()['Description'], $v_0.get_attributes()['Command'], $p2, $v_0.get_attributes()['CssClass'], $v_0.get_attributes()['ContainerCssClass']);
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonBuildOptions().initiallyVisibleContextualGroups) && this.get_ribbonBuildOptions().initiallyVisibleContextualGroups[$p2]) {
                $v_1.set_$5n_0(true);
            }
        }
        if (!$v_0.get_children().length) {
            $v_1.$7Z_0(this.$$d_$B2_1, $v_0.$d_0, $p1.clone());
        }
        else {
            this.$73_1($v_1, $p0, $p1);
        }
        return $v_1;
    },
    
    $73_1: function CUI_RibbonBuilder$$73_1($p0, $p1, $p2) {
        var $v_0 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p1, 'Groups');
        var $v_1 = CUI.DataNodeWrapper.getNodeChildren($v_0);
        var $v_2 = {};
        for (var $v_7 = 0; $v_7 < $v_1.length; $v_7++) {
            if (this.isNodeTrimmed($v_1[$v_7])) {
                continue;
            }
            var $v_8 = this.$AR_1($v_1[$v_7], $p2);
            if (!CUI.ScriptUtility.isNullOrUndefined($v_8)) {
                $p0.addChild($v_8);
            }
            else {
                var $v_9 = CUI.DataNodeWrapper.getNodeAttribute($v_1[$v_7], 'Id');
                if (!CUI.ScriptUtility.isNullOrUndefined($v_9)) {
                    $v_2[$v_9] = $v_9;
                }
            }
        }
        var $v_3 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p1, 'Scaling');
        var $v_4 = CUI.DataNodeWrapper.getNodeChildren($v_3);
        var $v_5 = null;
        var $v_6 = false;
        for (var $v_A = 0; $v_A < $v_4.length; $v_A++) {
            var $v_B = CUI.DataNodeWrapper.getNodeName($v_4[$v_A]);
            var $v_C = CUI.DataNodeWrapper.getNodeAttributes($v_4[$v_A]);
            var $v_D = $v_C['GroupId'];
            if ($v_B === 'MaxSize') {
                if (this.isIdTrimmed($v_D) || !CUI.ScriptUtility.isNullOrUndefined($v_2[$v_D])) {
                    continue;
                }
                $p0.get_scaling().setGroupMaxSize($v_D, $v_C['Size']);
            }
            else if ($v_B === 'Scale') {
                if (this.isIdTrimmed($v_D) || !CUI.ScriptUtility.isNullOrUndefined($v_2[$v_D])) {
                    continue;
                }
                $p0.get_scaling().addScalingStep(new CUI.ScalingStep($v_D, $v_C['Size'], $v_C['PopupSize'], $v_5, $v_6));
                $v_5 = null;
                $v_6 = false;
            }
            else if ($v_B === 'LowScaleWarning') {
                $v_5 = $v_C['Message'];
                $v_6 = true;
            }
            else {
                throw Error.create('Was expecting a node with name MaxSize or Scale.');
            }
        }
        $p0.scaleMax();
    },
    
    $B2_1: function CUI_RibbonBuilder$$B2_1($p0, $p1, $p2) {
        var $v_0 = $p2;
        var $v_1 = $p0;
        var $v_2 = new CUI.DataNodeWrapper($p1);
        $v_0.initializedTab = $p0;
        if (!$v_2.get_hasChildren()) {
            var $v_3 = new CUI.DataQuery();
            $v_3.id = $v_0.initializedTab.$4_0;
            $v_3.queryType = 4;
            $v_3.handler = this.$$d_$CD_1;
            $v_3.data = $v_0;
            this.$11_0.runQuery($v_3);
            return null;
        }
        this.$73_1($v_1, $p1, $v_0);
        $v_1.$7M_0(true);
        this.get_ribbon().refresh();
        return $v_1;
    },
    
    $AR_1: function CUI_RibbonBuilder$$AR_1($p0, $p1) {
        var $v_0 = new CUI.DataNodeWrapper($p0);
        var $v_1 = $v_0.get_attributes()['Template'];
        var $v_2 = CUI.TemplateManager.get_instance().getTemplate($v_1);
        if (CUI.ScriptUtility.isNullOrUndefined($v_2)) {
            throw Error.create('A template with name: ' + $v_1 + ' could not be loaded.');
        }
        var $v_3 = {};
        var $v_4 = null;
        for (var $v_8 = 0; $v_8 < $v_0.get_children().length; $v_8++) {
            if (($v_0.get_children()[$v_8].name) === 'Controls') {
                $v_4 = $v_0.get_children()[$v_8];
                break;
            }
        }
        if (CUI.ScriptUtility.isNullOrUndefined($v_4)) {
            throw Error.create('No Controls node found in this Group tag.');
        }
        var $v_5 = CUI.DataNodeWrapper.getNodeChildren($v_4);
        var $v_6 = true;
        for (var $v_9 = 0; $v_9 < $v_5.length; $v_9++) {
            if (this.isNodeTrimmed($v_5[$v_9])) {
                continue;
            }
            $v_6 = false;
            var $v_A = this.$4Z_0($v_5[$v_9], $p1);
            var $v_B = $v_3[$v_A.get_templateAlias()];
            if (CUI.ScriptUtility.isNullOrUndefined($v_B)) {
                $v_3[$v_A.get_templateAlias()] = $v_A;
            }
            else if (Array.isInstanceOfType($v_B)) {
                Array.add($v_B, $v_A);
            }
            else {
                var $v_C = [];
                Array.add($v_C, $v_B);
                Array.add($v_C, $v_A);
                $v_3[$v_A.get_templateAlias()] = $v_C;
            }
        }
        if (this.get_ribbonBuildOptions().trimEmptyGroups && $v_6) {
            return null;
        }
        var $v_7 = $v_2.createGroup(this.get_ribbon(), $v_0.get_attributes()['Id'], $v_0.get_attributes(), $v_0.get_attributes()['Title'], $v_0.get_attributes()['Description'], $v_0.get_attributes()['Command'], $v_3, null);
        return $v_7;
    }
}


CUI.RibbonComponent = function CUI_RibbonComponent($p0, $p1, $p2, $p3) {
    CUI.RibbonComponent.initializeBase(this, [ $p0, $p1, $p2, $p3 ]);
}
CUI.RibbonComponent.prototype = {
    
    get_ribbon: function CUI_RibbonComponent$get_ribbon() {ULSpEN:;
        return this.$0_0;
    }
}


CUI.Row = function CUI_Row($p0, $p1) {
    CUI.Row.initializeBase(this, [ $p0, $p1, '', '' ]);
}
CUI.Row.prototype = {
    
    $1q_0: function CUI_Row$$1q_0() {ULSpEN:;
        this.ensureDOMElementAndEmpty();
        CUI.Component.prototype.appendChildrenToElement.call(this, this.get_$3_0());
        CUI.Component.prototype.$1q_0.call(this);
    },
    
    $5Q_0: function CUI_Row$$5Q_0() {ULSpEN:;
        this.set_$3_0($get(this.$K_0.$4_0 + '-' + this.$K_0.$6_0.indexOf(this)));
    },
    
    ensureCorrectChildType: function CUI_Row$ensureCorrectChildType($p0) {
        if (!CUI.Strip.isInstanceOfType($p0) && !CUI.ControlComponent.isInstanceOfType($p0)) {
            throw Error.create('Only children of type Strip and ControlComponent can be added to Row Components.');
        }
    },
    
    get_domElementTagName: function CUI_Row$get_domElementTagName() {ULSpEN:;
        return 'span';
    },
    
    get_cssClass: function CUI_Row$get_cssClass() {ULSpEN:;
        var $v_0 = (this.$K_0).$G_2;
        if ($v_0 === 2) {
            return 'ms-cui-row-onerow';
        }
        else {
            return 'ms-cui-row';
        }
    }
}


CUI.ScalingStep = function CUI_ScalingStep($p0, $p1, $p2, $p3, $p4) {
    if ((CUI.ScriptUtility.isNullOrUndefined($p0) || CUI.ScriptUtility.isNullOrUndefined($p1))) {
        throw Error.create('groupId, layoutName and message cannot be undefined or null');
    }
    this.$2H_0 = $p0;
    this.$5D_0 = $p1;
    this.$6a_0 = $p2;
    this.$88_0 = $p3;
    this.$8H_0 = $p4;
}
CUI.ScalingStep.prototype = {
    $2H_0: null,
    $5D_0: null,
    $6a_0: null,
    $88_0: null,
    $8H_0: false,
    $1n_0: null,
    
    $9m_0: function CUI_ScalingStep$$9m_0($p0) {
        this.$1n_0 = $p0;
    },
    
    get_groupId: function CUI_ScalingStep$get_groupId() {ULSpEN:;
        return this.$2H_0;
    },
    
    get_layoutName: function CUI_ScalingStep$get_layoutName() {ULSpEN:;
        return this.$5D_0;
    },
    
    get_popupSize: function CUI_ScalingStep$get_popupSize() {ULSpEN:;
        return this.$6a_0;
    },
    
    get_scaleWarningMessage: function CUI_ScalingStep$get_scaleWarningMessage() {ULSpEN:;
        return this.$88_0;
    },
    
    get_hasScaleWarning: function CUI_ScalingStep$get_hasScaleWarning() {ULSpEN:;
        return this.$8H_0;
    },
    
    get_previousLayoutName: function CUI_ScalingStep$get_previousLayoutName() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$1n_0)) {
            return null;
        }
        var $v_0 = this.$1n_0.getGroupMaxSize(this.$2H_0);
        var $v_1 = this.$1n_0.$1o_0;
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2];
            if ($v_3 === this) {
                break;
            }
            if ($v_3.$2H_0 === this.$2H_0) {
                $v_0 = $v_3.$5D_0;
            }
        }
        return $v_0;
    }
}


CUI.Scaling = function CUI_Scaling() {ULSpEN:;
    this.$4O_0 = {};
    this.$1o_0 = [];
}
CUI.Scaling.prototype = {
    $4O_0: null,
    $1o_0: null,
    
    setGroupMaxSize: function CUI_Scaling$setGroupMaxSize($p0, $p1) {
        this.$4O_0[$p0] = $p1;
        this.$j_0 = true;
    },
    
    removeGroupMaxSize: function CUI_Scaling$removeGroupMaxSize($p0) {
        delete this.$4O_0[$p0];
        this.$j_0 = true;
    },
    
    getGroupMaxSize: function CUI_Scaling$getGroupMaxSize($p0) {
        return this.$4O_0[$p0];
    },
    
    addScalingStep: function CUI_Scaling$addScalingStep($p0) {
        if (CUI.ScriptUtility.isNullOrUndefined($p0)) {
            throw Error.create('step must be definined and not null');
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$4O_0[$p0.$2H_0])) {
            throw Error.create('You must set the GroupMaxSize of Group: ' + $p0.$2H_0 + ' before you add ScalingSteps for it');
        }
        this.addScalingStepAtIndex($p0, this.$1o_0.length);
    },
    
    addScalingStepAtIndex: function CUI_Scaling$addScalingStepAtIndex($p0, $p1) {
        if (Array.contains(this.$1o_0, $p0)) {
            throw Error.create('This ScalingInfo already contains this ScaleStep');
        }
        Array.insert(this.$1o_0, $p1, $p0);
        $p0.$9m_0(this);
        this.$j_0 = true;
    },
    
    removeScalingStep: function CUI_Scaling$removeScalingStep($p0) {
        Array.remove(this.$1o_0, $p0);
        $p0.$9m_0(null);
        this.$j_0 = true;
    },
    
    get_steps: function CUI_Scaling$get_steps() {ULSpEN:;
        return Array.clone(this.$1o_0);
    },
    
    get_stepsInternal: function CUI_Scaling$get_stepsInternal() {ULSpEN:;
        return this.$1o_0;
    },
    
    $j_0: true
}


CUI.Section = function CUI_Section($p0, $p1, $p2, $p3) {
    CUI.Section.initializeBase(this, [ $p0, $p1, '', '' ]);
    this.$G_2 = $p2;
    this.$4n_2 = $p3;
    switch ($p2) {
        case 4:
            this.$3A_0(new CUI.Row($p0, $p1 + '-0'), false);
            this.$3A_0(new CUI.Row($p0, $p1 + '-1'), false);
            this.$3A_0(new CUI.Row($p0, $p1 + '-2'), false);
            break;
        case 3:
            this.$3A_0(new CUI.Row($p0, $p1 + '-0'), false);
            this.$3A_0(new CUI.Row($p0, $p1 + '-1'), false);
            break;
        case 2:
            this.$3A_0(new CUI.Row($p0, $p1 + '-0'), false);
            break;
        case 1:
            break;
        default:
            throw Error.create('Invalid SectionType');
    }
}
CUI.Section.prototype = {
    $G_2: 0,
    $4n_2: 0,
    
    $1q_0: function CUI_Section$$1q_0() {ULSpEN:;
        this.ensureDOMElementAndEmpty();
        this.appendChildrenToElement(this.get_$3_0());
        this.$1X_0();
        if (this.$G_2 !== 1) {
            var $v_0 = this.$6_0;
            this.$6s_2($v_0, 1);
            if (this.$G_2 === 3 || this.$G_2 === 4) {
                this.$6s_2($v_0, 2);
            }
            if (this.$G_2 === 4) {
                this.$6s_2($v_0, 3);
            }
        }
        this.$j_0 = false;
    },
    
    $5Q_0: function CUI_Section$$5Q_0() {ULSpEN:;
        this.set_$3_0($get(this.$K_0.$4_0 + '-' + this.$K_0.$6_0.indexOf(this).toString()));
    },
    
    $6s_2: function CUI_Section$$6s_2($p0, $p1) {
        var $v_0 = $p0.get_item($p1 - 1);
        $v_0.$1X_0();
        if (this.$G_2 === 3) {
            $v_0.get_$3_0().className = 'ms-cui-row-tworow';
        }
        this.get_$3_0().appendChild($v_0.get_$3_0());
        $v_0.$2i_0();
    },
    
    get_cssClass: function CUI_Section$get_cssClass() {ULSpEN:;
        if (this.$4n_2 === 2) {
            return 'ms-cui-section-alignmiddle';
        }
        else {
            return 'ms-cui-section';
        }
    },
    
    get_type: function CUI_Section$get_type() {ULSpEN:;
        return this.$G_2;
    },
    
    get_alignment: function CUI_Section$get_alignment() {ULSpEN:;
        return this.$4n_2;
    },
    
    removeChild: function CUI_Section$removeChild($p0) {
        throw Error.create('Cannot directly add and remove children from Section Components');
    },
    
    addChildAtIndex: function CUI_Section$addChildAtIndex($p0, $p1) {
        throw Error.create('Cannot directly add and remove children from Section Components');
    },
    
    getRow: function CUI_Section$getRow($p0) {
        switch (this.$G_2) {
            case 4:
                if ($p0 < 1 || $p0 > 3) {
                    throw Error.create('This Section type only has Row numbers 1, 2 and 3.');
                }
                break;
            case 3:
                if ($p0 < 1 || $p0 > 2) {
                    throw Error.create('This Section type only has Row numbers 1 and 2');
                }
                break;
            case 2:
                if ($p0 !== 1) {
                    throw Error.create('This Section type only has Row number 1.');
                }
                break;
            default:
                throw Error.create('This Section type does not have any rows');
        }
        return this.$6_0.get_item($p0 - 1);
    },
    
    $1X_0: function CUI_Section$$1X_0() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) {
            return;
        }
        if (this.$G_2 === 1) {
            var $v_0 = CUI.Utility.$2('span');
            $v_0.className = 'ms-cui-section-divider';
            this.set_$3_0($v_0);
            return;
        }
        CUI.Component.prototype.$1X_0.call(this);
    },
    
    ensureCorrectChildType: function CUI_Section$ensureCorrectChildType($p0) {
        var $v_0 = this.$6_0.$M_0;
        if ((this.$G_2 === 2 && $v_0 > 0) || (this.$G_2 === 3 && $v_0 > 1) || (this.$G_2 === 4 && $v_0 > 2)) {
            throw Error.create('No more children can be added to a Section of this type.');
        }
        if (this.$G_2 === 1) {
            throw Error.create('Cannot add child components to Divider Section types.');
        }
        if (!CUI.Row.isInstanceOfType($p0)) {
            throw Error.create('Only children of type Row can be added to Section Components.');
        }
    },
    
    $4a_2: function CUI_Section$$4a_2($p0) {
        var $v_0 = this.get_ribbon().$29_3('clonedSection-' + this.get_ribbon().$2A_1(), this.$G_2, this.$4n_2);
        if (!$p0) {
            return $v_0;
        }
        var $v_1 = 0;
        var $$enum_3 = this.$6_0.getEnumerator();
        while ($$enum_3.moveNext()) {
            var $v_2 = $$enum_3.get_current();
            var $$enum_5 = $v_2.$6_0.getEnumerator();
            while ($$enum_5.moveNext()) {
                var $v_3 = $$enum_5.get_current();
                var $v_4 = null;
                if (CUI.ControlComponent.isInstanceOfType($v_3)) {
                    var $v_5 = $v_3;
                    $v_4 = $v_5.$4a_1($p0);
                }
                else if (CUI.Strip.isInstanceOfType($v_3)) {
                    $v_4 = ($v_3).$4a_2($p0);
                }
                else {
                }
                $v_0.getRow($v_1 + 1).addChild($v_4);
            }
            $v_1++;
        }
        return $v_0;
    },
    
    get_domElementTagName: function CUI_Section$get_domElementTagName() {ULSpEN:;
        return 'span';
    }
}


CUI.Strip = function CUI_Strip($p0, $p1) {
    CUI.Strip.initializeBase(this, [ $p0, $p1, '', '' ]);
}
CUI.Strip.prototype = {
    
    $1q_0: function CUI_Strip$$1q_0() {ULSpEN:;
        this.ensureDOMElementAndEmpty();
        this.appendChildrenToElement(this.get_$3_0());
        CUI.Component.prototype.$1q_0.call(this);
    },
    
    $5Q_0: function CUI_Strip$$5Q_0() {ULSpEN:;
        this.set_$3_0($get(this.$K_0.$4_0 + '-' + this.$K_0.$6_0.indexOf(this)));
    },
    
    ensureCorrectChildType: function CUI_Strip$ensureCorrectChildType($p0) {
        if (!CUI.ControlComponent.isInstanceOfType($p0)) {
            throw Error.create('Only children of type Control can be added to Strips.');
        }
    },
    
    get_cssClass: function CUI_Strip$get_cssClass() {ULSpEN:;
        return 'ms-cui-strip';
    },
    
    $4a_2: function CUI_Strip$$4a_2($p0) {
        var $v_0 = this.get_ribbon().$8h_3('clonedStrip-' + this.get_ribbon().$2A_1());
        if (!$p0) {
            return $v_0;
        }
        var $$enum_2 = this.$6_0.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_1 = $$enum_2.get_current();
            $v_0.addChild($v_1.$4a_1($p0));
        }
        return $v_0;
    }
}


CUI.Tab = function CUI_Tab($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    this.$$d_$9t_2 = Function.createDelegate(this, this.$9t_2);
    this.$$d_$CJ_2 = Function.createDelegate(this, this.$CJ_2);
    this.$$d_$9X_2 = Function.createDelegate(this, this.$9X_2);
    this.$$d_$CI_2 = Function.createDelegate(this, this.$CI_2);
    CUI.Tab.initializeBase(this, [ $p0, $p1, $p2, $p3 ]);
    this.$1E_2 = -1;
    this.$1n_2 = new CUI.Scaling();
    this.$10_2 = $p5;
    this.$q_2 = $p6;
    this.$m_2 = $p4;
    this.$7o_2 = (CUI.ScriptUtility.isNullOrUndefined($p7)) ? '' : $p7;
    this.$7m_2 = (CUI.ScriptUtility.isNullOrUndefined($p8)) ? '' : $p8;
    if ($p5) {
        this.set_$5n_0(false);
    }
}
CUI.Tab.prototype = {
    $5L_2: false,
    $D_2: null,
    $r_2: null,
    $3a_2: null,
    $2T_2: null,
    $1E_2: 0,
    $7o_2: null,
    $7m_2: null,
    $10_2: false,
    $q_2: null,
    
    $1q_0: function CUI_Tab$$1q_0() {ULSpEN:;
        this.ensureDOMElementAndEmpty();
        this.$71_2();
        this.appendChildrenToElement(this.get_$3_0());
        CUI.Component.prototype.$1q_0.call(this);
    },
    
    $8O_2: function CUI_Tab$$8O_2() {ULSpEN:;
        this.$D_2 = $get(this.$4_0 + '-title');
        this.$r_2 = this.$D_2.childNodes[0];
        this.$3a_2 = this.$r_2.childNodes[0];
        this.$2T_2 = this.$r_2.childNodes[1];
    },
    
    $8P_2: function CUI_Tab$$8P_2() {ULSpEN:;
        $addHandler(this.$r_2, 'dblclick', this.$$d_$CI_2);
        $addHandler(this.$r_2, 'click', this.$$d_$9X_2);
        $addHandler(this.$r_2, 'keydown', this.$$d_$CJ_2);
    },
    
    $5Q_0: function CUI_Tab$$5Q_0() {ULSpEN:;
        CUI.Component.prototype.$5Q_0.call(this);
        this.$8O_2();
    },
    
    $P_0: function CUI_Tab$$P_0() {ULSpEN:;
        CUI.Component.prototype.$P_0.call(this);
        this.$8P_2();
    },
    
    $1X_0: function CUI_Tab$$1X_0() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) {
            return;
        }
        CUI.Component.prototype.$1X_0.call(this);
        this.get_$3_0().setAttribute('role', 'tabpanel');
        this.get_$3_0().setAttribute('aria-labelledby', this.$4_0 + '-title');
    },
    
    get_domElementTagName: function CUI_Tab$get_domElementTagName() {ULSpEN:;
        return 'ul';
    },
    
    $BI_2: function CUI_Tab$$BI_2() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$D_2)) {
            this.$D_2 = CUI.Utility.$2('li');
        }
    },
    
    $8k_2: function CUI_Tab$$8k_2() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$2T_2)) {
            this.$2T_2 = CUI.Utility.$2('span');
        }
    },
    
    onTitleScale: function CUI_Tab$onTitleScale($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$D_2) && !this.get_ribbon().get_$8M_3()) {
            this.$D_2.title = ($p0 >= 2) ? this.get_title() : '';
        }
    },
    
    $71_2: function CUI_Tab$$71_2() {ULSpEN:;
        var $v_0 = ' ';
        if (CUI.ScriptUtility.isNullOrUndefined(this.$r_2)) {
            this.$BI_2();
            this.$r_2 = CUI.Utility.$2('a');
            CUI.Utility.$1p(this.$r_2);
            this.$r_2.className = 'ms-cui-tt-a';
            this.$3a_2 = CUI.Utility.$2('span');
            this.$3a_2.className = 'ms-cui-tt-span';
            this.$D_2.appendChild(this.$r_2);
            this.$r_2.appendChild(this.$3a_2);
            this.$P_0();
        }
        else {
            $v_0 += (this.$D_2.className.indexOf('ms-cui-ct-first') > -1) ? 'ms-cui-ct-first ' : '';
            $v_0 += (this.$D_2.className.indexOf('ms-cui-ct-last') > -1) ? 'ms-cui-ct-last' : '';
            $v_0 = $v_0.trimEnd();
        }
        this.$D_2.className = this.$93_2() + $v_0;
        this.$D_2.id = this.$4_0 + '-title';
        this.$D_2.setAttribute('role', 'tab');
        this.$D_2.setAttribute('aria-selected', this.$5L_2);
        CUI.UIUtility.setInnerText(this.$3a_2, this.get_title());
        if (this.get_ribbon().get_$8M_3()) {
            this.$D_2.title = this.get_title();
        }
        if (!CUI.ScriptUtility.isNullOrEmptyString(this.get_description())) {
            this.$r_2.setAttribute('title', this.get_description());
        }
    },
    
    $9k_2: function CUI_Tab$$9k_2($p0, $p1, $p2, $p3, $p4) {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$2T_2)) {
            this.$8k_2();
        }
        if (this.$10_2) {
            $p1 = String.format($p1, $p2, $p3, $p4);
        }
        else {
            $p1 = String.format($p0, $p3, $p4);
        }
        CUI.UIUtility.setInnerText(this.$2T_2, $p1);
        CUI.Utility.ensureCSSClassOnElement(this.$2T_2, 'ms-cui-hidden');
        this.$r_2.appendChild(this.$2T_2);
    },
    
    $CZ_2: function CUI_Tab$$CZ_2() {ULSpEN:;
        this.$D_2.className = this.$93_2();
    },
    
    get_cssClass: function CUI_Tab$get_cssClass() {ULSpEN:;
        return this.$BS_2();
    },
    
    get_selected: function CUI_Tab$get_selected() {ULSpEN:;
        return this.$5L_2;
    },
    set_selected: function CUI_Tab$set_selected($p0) {
        if (!this.get_visible()) {
            throw Error.create('Tabs must be visible and enabled in order to be selected.');
        }
        if ($p0) {
            if (this.get_needsDelayIniting()) {
                this.doDelayedInit();
                return $p0;
            }
            this.get_ribbon().$5c_3(this);
            this.get_ribbon().set_$3G_3(false);
            this.get_ribbon().$1q_0();
            if (this.$6N_2 !== this.get_ribbon()._lastWindowResizeWidthHeight) {
                this.get_ribbon().$Cc_2();
            }
            this.$9a_0();
            this.$17_2 = false;
        }
        else {
            throw Error.create('Selected cannot be set to false explicitly.\nSelecting another Tab will do this implicitly.');
        }
        return $p0;
    },
    
    $CW_2: function CUI_Tab$$CW_2() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_ribbon().get_$2P_3()) && !CUI.ScriptUtility.isNullOrUndefined(this.get_ribbon().get_$2P_3().get_ribbonBuildOptions()) && !CUI.ScriptUtility.isNullOrEmptyString(this.get_ribbon().get_$2P_3().get_ribbonBuildOptions().clientID)) {
            var $v_0 = $get(this.get_ribbon().get_$2P_3().get_ribbonBuildOptions().clientID + '_activeTabId');
            if ($v_0) {
                $v_0.value = this.$4_0;
            }
        }
    },
    
    $7g_2: function CUI_Tab$$7g_2($p0, $p1) {
        if ($p0) {
            this.$CW_2();
        }
        this.$5L_2 = $p0;
        this.$p_0();
        if ($p1) {
            this.$71_2();
        }
    },
    
    $7M_0: function CUI_Tab$$7M_0($p0) {
        CUI.Component.prototype.$7M_0.call(this, $p0);
        this.get_ribbon().$Cc_2();
        this.get_ribbon().pollForStateAndUpdate();
    },
    
    ensureCorrectChildType: function CUI_Tab$ensureCorrectChildType($p0) {
        if (!CUI.Group.isInstanceOfType($p0)) {
            throw Error.create('Only children of type Group can be added to Tab Components');
        }
    },
    
    $1n_2: null,
    
    get_scaling: function CUI_Tab$get_scaling() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$1n_2)) {
            this.$1n_2 = new CUI.Scaling();
        }
        return this.$1n_2;
    },
    
    get_currentScalingIndex: function CUI_Tab$get_currentScalingIndex() {ULSpEN:;
        return this.$1E_2;
    },
    
    $6N_2: null,
    
    scaleMax: function CUI_Tab$scaleMax() {ULSpEN:;
        this.$7W_2();
        this.$p_0();
    },
    
    $7W_2: function CUI_Tab$$7W_2() {ULSpEN:;
        var $$enum_0 = this.$6_0.getEnumerator();
        while ($$enum_0.moveNext()) {
            var $v_0 = $$enum_0.get_current();
            var $v_1 = this.$1n_2.getGroupMaxSize($v_0.$4_0);
            if (!CUI.ScriptUtility.isNullOrUndefined($v_1)) {
                $v_0.selectLayout($v_1, null);
            }
        }
        this.$1E_2 = -1;
    },
    
    scaleIndex: function CUI_Tab$scaleIndex($p0) {
        this.$9g_2($p0);
        this.$p_0();
    },
    
    $9g_2: function CUI_Tab$$9g_2($p0) {
        this.$7W_2();
        while ($p0 > this.$1E_2) {
            if (!this.$9f_2()) {
                break;
            }
        }
    },
    
    $Cf_2: function CUI_Tab$$Cf_2() {ULSpEN:;
        if (this.$1E_2 === -2) {
            this.$7W_2();
            return true;
        }
        if (this.$1E_2 === -1) {
            return false;
        }
        var $v_0 = this.$1n_2.$1o_0;
        var $v_1 = $v_0[this.$1E_2];
        var $v_2 = this.getChild($v_1.$2H_0);
        $v_2.selectLayout($v_1.get_previousLayoutName(), null);
        this.$1E_2--;
        return true;
    },
    
    scaleUp: function CUI_Tab$scaleUp() {ULSpEN:;
        var $v_0 = this.$Cf_2();
        if ($v_0) {
            this.$p_0();
        }
        return $v_0;
    },
    
    $9f_2: function CUI_Tab$$9f_2() {ULSpEN:;
        if (this.$1E_2 === -2) {
            this.scaleMax();
            return true;
        }
        var $v_0 = this.$1n_2.$1o_0;
        if ($v_0.length <= this.$1E_2 + 1) {
            return false;
        }
        this.$1E_2++;
        var $v_1 = $v_0[this.$1E_2];
        var $v_2 = this.getChild($v_1.$2H_0);
        $v_2.selectLayout($v_1.$5D_0, $v_1.$6a_0);
        return true;
    },
    
    scaleDown: function CUI_Tab$scaleDown() {ULSpEN:;
        var $v_0 = this.$9f_2();
        if ($v_0) {
            this.$p_0();
        }
        return $v_0;
    },
    
    $6e_2: false,
    
    $BY_2: function CUI_Tab$$BY_2() {ULSpEN:;
        var $v_0 = 0;
        var $v_1 = this.get_$3_0().childNodes;
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            $v_0 += $v_1[$v_2].offsetWidth;
        }
        return $v_0;
    },
    
    get_contextual: function CUI_Tab$get_contextual() {ULSpEN:;
        return this.$10_2;
    },
    
    get_contextualGroupId: function CUI_Tab$get_contextualGroupId() {ULSpEN:;
        return this.$q_2;
    },
    
    $4V_2: false,
    $17_2: false,
    
    $CJ_2: function CUI_Tab$$CJ_2($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined($p0) && !CUI.ScriptUtility.isNullOrUndefined($p0.rawEvent)) {
            var $v_0 = ($p0.rawEvent).keyCode;
            if ($v_0 === 13) {
                this.$17_2 = true;
                $p0.stopPropagation();
                this.$9X_2($p0);
            }
        }
    },
    
    $9X_2: function CUI_Tab$$9X_2($p0) {
        CUI.PMetrics.perfMark(7105);
        $p0.preventDefault();
        this.$6h_2 = true;
        if (this.get_selected()) {
            window.setTimeout(this.$$d_$9t_2, 500);
        }
        else {
            this.$9t_2();
        }
    },
    
    $6h_2: true,
    
    $9t_2: function CUI_Tab$$9t_2() {ULSpEN:;
        if (!this.$6h_2) {
            return;
        }
        this.$4V_2 = true;
        this.get_ribbon().$8j_1();
        this.set_selected(true);
        this.get_ribbon().$2O_1();
        this.get_ribbon().set_$l_1(null);
        CUI.PMetrics.perfMark(7107);
    },
    
    $9K_2: function CUI_Tab$$9K_2($p0) {
        var $v_0 = document.activeElement;
        var $v_1 = this.$8o_2($v_0);
        var $v_2 = this.$6_0.$M_0;
        var $v_3;
        var $v_4 = 0;
        var $$enum_6 = this.$6_0.getEnumerator();
        while ($$enum_6.moveNext()) {
            var $v_6 = $$enum_6.get_current();
            if ($v_6.$4_0 === $v_1) {
                break;
            }
            $v_4++;
        }
        var $v_5;
        if ($p0) {
            $v_5 = ($v_4 + 1) % $v_2;
        }
        else {
            $v_5 = $v_4 - 1;
        }
        if ($v_5 < 0) {
            $v_5 = $v_2 + $v_5;
        }
        while ($v_5 !== $v_4) {
            $v_3 = this.$6_0.get_item($v_5);
            if ($v_3.$7e_0()) {
                return;
            }
            if ($p0) {
                $v_5 = ($v_5 + 1) % $v_2;
            }
            else {
                $v_5 = $v_5 - 1;
            }
            if ($v_5 < 0) {
                $v_5 = $v_2 + $v_5;
            }
        }
    },
    
    $8o_2: function CUI_Tab$$8o_2($p0) {
        if ($p0.nodeName === 'LI') {
            return $p0.id;
        }
        else {
            return this.$8o_2($p0.parentNode);
        }
    },
    
    $9n_2: function CUI_Tab$$9n_2() {ULSpEN:;
        var $v_0 = false;
        var $$enum_1 = this.$6_0.getEnumerator();
        while ($$enum_1.moveNext()) {
            var $v_1 = $$enum_1.get_current();
            if ($v_1.$7e_0()) {
                $v_0 = true;
                return;
            }
        }
        if (!$v_0) {
            this.$r_2.focus();
        }
    },
    
    $Ci_2: function CUI_Tab$$Ci_2() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$r_2)) {
            this.$r_2.focus();
        }
    },
    
    $CI_2: function CUI_Tab$$CI_2($p0) {
        this.$6h_2 = false;
        $p0.preventDefault();
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_ribbon().get_ribbonProperties().PreToggleMinimizedCommand)) {
            var $v_0 = new CUI.RibbonEventCommandProperties();
            $v_0.RootId = this.get_ribbon().$4_0;
            $v_0.RootType = 'Ribbon';
            $v_0.Minimized = !this.get_ribbon().get_$3G_3();
            $v_0.Maximized = !$v_0.Minimized;
            $v_0.Cancelable = true;
            $v_0.CancelAction = false;
            this.raiseCommandEvent(this.get_ribbon().get_ribbonProperties().PreToggleMinimizedCommand, 11, $v_0);
            if ($v_0.CancelAction) {
                return;
            }
        }
        this.get_ribbon().set_$3G_3(true);
        this.get_ribbon().$1q_0();
    },
    
    get_$7P_2: function CUI_Tab$get_$7P_2() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0()) && !CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0().lastChild)) {
            var $v_0 = CUI.Utility.$8x(this.get_$3_0().lastChild);
            if (this.$0_0._textDirection !== 1 && CUI.Utility.$3C() <= $v_0.width + $v_0.x) {
                return true;
            }
        }
        var $$enum_1 = this.$6_0.getEnumerator();
        while ($$enum_1.moveNext()) {
            var $v_1 = $$enum_1.get_current();
            if ($v_1.get_$7P_2()) {
                return true;
            }
        }
        return false;
    },
    
    $93_2: function CUI_Tab$$93_2() {ULSpEN:;
        var $v_0 = 'ms-cui-tt ' + this.$7o_2;
        if (this.$5L_2) {
            $v_0 += ' ms-cui-tt-s';
        }
        return $v_0;
    },
    
    $BS_2: function CUI_Tab$$BS_2() {ULSpEN:;
        var $v_0 = 'ms-cui-tabBody';
        if (this.$10_2) {
            $v_0 += ' ms-cui-tabBody-' + CUI.ContextualGroup.$4f(this.get_ribbon().$5U_3(this.$q_2).$2n_0);
        }
        return $v_0;
    },
    
    $BU_2: function CUI_Tab$$BU_2() {ULSpEN:;
        var $v_0 = 'ms-cui-tabContainer';
        if (this.$10_2) {
            $v_0 += ' ms-cui-tabContainer-' + CUI.ContextualGroup.$4f(this.get_ribbon().$5U_3(this.$q_2).$2n_0);
        }
        return $v_0;
    },
    
    get_visible: function CUI_Tab$get_visible() {ULSpEN:;
        return CUI.Component.prototype.get_visible.call(this);
    },
    set_visible: function CUI_Tab$set_visible($p0) {
        if (this.$10_2) {
            throw Error.create('Visibility of Contextual Tabs cannot be set explicitly.');
        }
        CUI.Component.prototype.set_visible.call(this, $p0);
        return $p0;
    },
    
    $m_2: null,
    
    get_command: function CUI_Tab$get_command() {ULSpEN:;
        return this.$m_2;
    },
    
    $2j_0: function CUI_Tab$$2j_0($p0) {
        $p0.get_commandInfo().TabId = this.$4_0;
        return CUI.Component.prototype.$2j_0.call(this, $p0);
    },
    
    $3x_0: function CUI_Tab$$3x_0() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$m_2)) {
            this.set_enabled(true);
        }
        else {
            var $v_0 = this.get_ribbon().$3H_1(this.$m_2, null, null, false);
            this.set_enabled(($v_0 & 1) > 0);
        }
        if (this.get_enabled()) {
            this.set_$3v_0(new Date());
            CUI.Component.prototype.$3x_0.call(this);
        }
        this.get_ribbon().$8m_3();
    },
    
    dispose: function CUI_Tab$dispose() {ULSpEN:;
        CUI.Component.prototype.dispose.call(this);
        CUI.Utility.$7S(this.$D_2);
        this.$2T_2 = null;
        this.$D_2 = null;
        this.$r_2 = null;
        this.$3a_2 = null;
    }
}


CUI.Template = function CUI_Template() {
}


CUI.TemplateManager = function CUI_TemplateManager() {ULSpEN:;
    this.$3l_0 = {};
}
CUI.TemplateManager.get_instance = function CUI_TemplateManager$get_instance() {ULSpEN:;
    if (CUI.ScriptUtility.isNullOrUndefined(CUI.TemplateManager.$5B)) {
        CUI.TemplateManager.$5B = new CUI.TemplateManager();
    }
    return CUI.TemplateManager.$5B;
}
CUI.TemplateManager.prototype = {
    $3l_0: null,
    
    addTemplate: function CUI_TemplateManager$addTemplate($p0, $p1) {
        this.$3l_0[$p1] = $p0;
    },
    
    removeTemplate: function CUI_TemplateManager$removeTemplate($p0) {
        this.$3l_0[$p0] = null;
    },
    
    getTemplate: function CUI_TemplateManager$getTemplate($p0) {
        return this.$3l_0[$p0];
    },
    
    loadTemplates: function CUI_TemplateManager$loadTemplates($p0) {
        var $v_0 = new CUI.DataNodeWrapper($p0);
        var $v_1 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p0, 'RibbonTemplates');
        var $v_2 = CUI.DataNodeWrapper.getNodeChildren($v_1);
        for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
            this.$Bn_0($v_2[$v_3]);
        }
    },
    
    $Bn_0: function CUI_TemplateManager$$Bn_0($p0) {
        var $v_0 = new CUI.DataNodeWrapper($p0);
        var $v_1 = $v_0.get_attributes()['Id'];
        var $v_2 = $v_0.get_attributes()['Classname'];
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$3l_0[$v_1])) {
            return;
        }
        if (CUI.ScriptUtility.isNullOrUndefined($v_2)) {
            this.$3l_0[$v_1] = new CUI.DeclarativeTemplate($p0);
        }
        else {
        }
    }
}


CUI.RootUser = function CUI_RootUser() {
}


CUI.RootProperties = function CUI_RootProperties() {
}
CUI.RootProperties.prototype = {
    CssClass: null,
    Culture: null,
    RootEventCommand: null,
    ImageDownArrow: null,
    ImageDownArrowClass: null,
    ImageDownArrowTop: null,
    ImageDownArrowLeft: null,
    ImageSideArrow: null,
    ImageSideArrowClass: null,
    ImageSideArrowTop: null,
    ImageSideArrowLeft: null,
    ImageUpArrow: null,
    ImageUpArrowClass: null,
    ImageUpArrowTop: null,
    ImageUpArrowLeft: null,
    TextDirection: null,
    ToolTipFooterText: null,
    ToolTipFooterImage16by16: null,
    ToolTipFooterImage16by16Class: null,
    ToolTipFooterImage16by16Top: null,
    ToolTipFooterImage16by16Left: null,
    ToolTipDisabledCommandImage16by16: null,
    ToolTipDisabledCommandImage16by16Class: null,
    ToolTipDisabledCommandImage16by16Top: null,
    ToolTipDisabledCommandImage16by16Left: null,
    ToolTipDisabledCommandDescription: null,
    ToolTipDisabledCommandTitle: null,
    ToolTipDisabledCommandHelpKey: null,
    ToolTipHelpCommand: null,
    ToolTipSelectedItemTitlePrefix: null
}


CUI.RootEventCommandProperties = function CUI_RootEventCommandProperties() {
}
CUI.RootEventCommandProperties.prototype = {
    RootId: null,
    RootType: null
}


CUI.Root = function CUI_Root($p0, $p1) {
    this.$$d_$C2_1 = Function.createDelegate(this, this.$C2_1);
    this.$$d_$C5_1 = Function.createDelegate(this, this.$C5_1);
    this.$$d_$C6_1 = Function.createDelegate(this, this.$C6_1);
    this.$$d_$C4_1 = Function.createDelegate(this, this.$C4_1);
    this.$$d_onWindowScroll = Function.createDelegate(this, this.onWindowScroll);
    this.$$d_$7N_1 = Function.createDelegate(this, this.$7N_1);
    this.$$d_$C3_1 = Function.createDelegate(this, this.$C3_1);
    this.$2b_1 = -1;
    this.$3h_1 = -1;
    CUI.Root.initializeBase(this, [ null, $p0, null, null ]);
    this.initRootMember(this);
    this.$5_1 = $p1;
    this.$Z_1 = {};
    this.$7n_1 = {};
    this.$7l_1 = 0;
    this.$8F_1 = 0;
    if (!CUI.ScriptUtility.isNullOrUndefined($p1.TextDirection)) {
        this._textDirection = ($p1.TextDirection.toLowerCase() === 'rtl') ? 1 : 0;
    }
    if (!CUI.ScriptUtility.isNullOrEmptyString($p1.Culture)) {
        this._culture = $p1.Culture.toLowerCase();
    }
    else {
        this._culture = 'en-us';
    }
    this.$6X_1 = this.$$d_$C3_1;
    this.$22_1 = this.$$d_$7N_1;
    $addHandler(document, 'keydown', this.$6X_1);
    $addHandler(window, 'unload', this.$22_1);
}
CUI.Root.$1F = function CUI_Root$$1F($p0, $p1) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0)) {
        return 0;
    }
    return $p0[$p1];
}
CUI.Root.prototype = {
    $Z_1: null,
    $7n_1: null,
    $7l_1: 0,
    $8F_1: 0,
    $87_1: false,
    $6L_1: null,
    $7z_1: null,
    _textDirection: 0,
    _culture: null,
    _percentPositivePattern: 0,
    _decimalSeparator: null,
    $2m_1: null,
    $7u_1: true,
    
    get_initializing: function CUI_Root$get_initializing() {ULSpEN:;
        return this.$7u_1;
    },
    
    get_$l_1: function CUI_Root$get_$l_1() {ULSpEN:;
        return this.$6L_1;
    },
    set_$l_1: function CUI_Root$set_$l_1($p0) {
        if (!this.$1l_1) {
            this.$6L_1 = $p0;
        }
        return $p0;
    },
    
    get_$3u_1: function CUI_Root$get_$3u_1() {ULSpEN:;
        return this.$7z_1;
    },
    set_$3u_1: function CUI_Root$set_$3u_1($p0) {
        if (!this.$1l_1) {
            this.$7z_1 = $p0;
            this.$6L_1 = $p0;
        }
        return $p0;
    },
    
    $8j_1: function CUI_Root$$8j_1() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$l_1())) {
            this.get_$l_1().$Ai_0();
        }
    },
    
    get_$9s_1: function CUI_Root$get_$9s_1() {ULSpEN:;
        return false;
    },
    
    get_$3q_1: function CUI_Root$get_$3q_1() {ULSpEN:;
        return null;
    },
    
    get_$1G_1: function CUI_Root$get_$1G_1() {ULSpEN:;
        return null;
    },
    
    get_$9u_1: function CUI_Root$get_$9u_1() {ULSpEN:;
        return this.$5_1.CssClass;
    },
    
    $CV_1: function CUI_Root$$CV_1($p0) {
        this.$7n_1[$p0.$4_0] = $p0;
    },
    
    $1q_0: function CUI_Root$$1q_0() {ULSpEN:;
        CUI.Component.prototype.$1q_0.call(this);
        this.$7u_1 = false;
        if (!this.$87_1) {
            $addHandler(window, 'scroll', this.$$d_onWindowScroll);
            this.$87_1 = true;
        }
    },
    
    $1X_0: function CUI_Root$$1X_0() {ULSpEN:;
        CUI.Component.prototype.$1X_0.call(this);
        if (this._textDirection === 1) {
            CUI.Utility.ensureCSSClassOnElement(this.get_$3_0(), 'ms-cui-rtl');
        }
        if (CUI.Utility.$5a()) {
            CUI.Utility.ensureCSSClassOnElement(this.get_$3_0(), 'ms-cui-needIEFilter');
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$5_1.CssClass)) {
            CUI.Utility.ensureCSSClassOnElement(this.get_$3_0(), this.$5_1.CssClass);
        }
    },
    
    setFocus: function CUI_Root$setFocus() {ULSpEN:;
        var $v_0 = this.get_$l_1();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return false;
        }
        return $v_0.$7d_0();
    },
    
    restoreFocus: function CUI_Root$restoreFocus() {ULSpEN:;
        var $v_0 = this.get_$3u_1();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return false;
        }
        return $v_0.$7d_0();
    },
    
    $9w_1: false,
    
    refresh: function CUI_Root$refresh() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$25_1)) {
            this.$25_1.onRootRefreshed(this);
        }
    },
    
    attach: function CUI_Root$attach() {ULSpEN:;
        this.$3p_0(true);
    },
    
    $2C_1: false,
    
    get_needScaling: function CUI_Root$get_needScaling() {ULSpEN:;
        return this.$2C_1;
    },
    set_needScaling: function CUI_Root$set_needScaling(value) {ULSpEN:;
        this.$2C_1 = value;
        return value;
    },
    
    $25_1: null,
    
    get_rootUser: function CUI_Root$get_rootUser() {ULSpEN:;
        return this.$25_1;
    },
    set_rootUser: function CUI_Root$set_rootUser(value) {ULSpEN:;
        this.$25_1 = value;
        return value;
    },
    
    $5p_1: null,
    
    get_$19_1: function CUI_Root$get_$19_1() {ULSpEN:;
        return this.$5p_1;
    },
    set_$19_1: function CUI_Root$set_$19_1($p0) {
        this.$5p_1 = $p0;
        return $p0;
    },
    
    get_$4i_1: function CUI_Root$get_$4i_1() {ULSpEN:;
        return !CUI.ScriptUtility.isNullOrUndefined(this.$25_1);
    },
    
    $3H_1: function CUI_Root$$3H_1($p0, $p1, $p2, $p3) {
        var $v_0 = 0;
        var $v_1 = this.$25_1.isRootCommandEnabled($p0, this);
        if ($v_1) {
            $v_0 |= 1;
        }
        if (CUI.ScriptUtility.isNullOrUndefined($p1) || (!$p3 && !$v_1)) {
            return $v_0;
        }
        if (this.$25_1.executeRootCommand($p1, $p2, null, this)) {
            $v_0 |= 2;
        }
        return $v_0;
    },
    
    pollForStateAndUpdate: function CUI_Root$pollForStateAndUpdate() {ULSpEN:;
        this.$3x_0();
    },
    
    $3x_0: function CUI_Root$$3x_0() {ULSpEN:;
        this.set_$3v_0(new Date());
        CUI.Component.prototype.$3x_0.call(this);
        this.ensureGlobalDisablingRemoved();
    },
    
    ensureGlobalDisablingRemoved: function CUI_Root$ensureGlobalDisablingRemoved() {ULSpEN:;
        CUI.Utility.enableElement(this.get_$3_0());
    },
    
    get_element: function CUI_Root$get_element() {ULSpEN:;
        return this.get_$3_0();
    },
    
    get_cssClass: function CUI_Root$get_cssClass() {ULSpEN:;
        return 'ms-cui-disabled';
    },
    
    get_textDirection: function CUI_Root$get_textDirection() {ULSpEN:;
        return this._textDirection;
    },
    
    $2A_1: function CUI_Root$$2A_1() {ULSpEN:;
        return this.$8F_1++;
    },
    
    $8g_1: function CUI_Root$$8g_1($p0, $p1, $p2, $p3, $p4, $p5) {
        return new CUI.MenuSection(this, $p0, $p1, $p2, $p3, $p4, $p5);
    },
    
    $8f_1: function CUI_Root$$8f_1($p0, $p1, $p2, $p3) {
        return new CUI.Menu(this, $p0, $p1, $p2, $p3);
    },
    
    $As_1: function CUI_Root$$As_1($p0, $p1, $p2, $p3) {
        return new CUI.Gallery(this, $p0, $p1, $p2, $p3);
    },
    
    $Ar_1: function CUI_Root$$Ar_1($p0, $p1, $p2) {
        return new CUI.ControlComponent(this, $p0, $p1, $p2);
    },
    
    $3s_1: function CUI_Root$$3s_1($p0, $p1, $p2) {
        return new CUI.MenuItem(this, $p0, $p1, $p2);
    },
    
    $Ap_1: function CUI_Root$$Ap_1($p0, $p1, $p2, $p3) {
        return new CUI.CommandEventArgs($p0, $p1, $p2, $p3);
    },
    
    $BL_1: function CUI_Root$$BL_1($p0) {
        if (CUI.ScriptUtility.isNullOrUndefined($p0.$4_1)) {
            return;
        }
        $p0.$6g_1 = this.$BZ_1();
        var $v_0 = $p0.get_commandInfo();
        $v_0.CommandId = $p0.$4_1;
        $v_0.RootId = this.$4_0;
        $v_0.RootType = this.get_rootType();
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$25_1)) {
            this.$25_1.executeRootCommand($p0.$4_1, $p0.$34_1, $v_0, this);
        }
    },
    
    $2j_0: function CUI_Root$$2j_0($p0) {
        this.$BL_1($p0);
        return true;
    },
    
    get_rootType: function CUI_Root$get_rootType() {ULSpEN:;
        return 'Root';
    },
    
    $BZ_1: function CUI_Root$$BZ_1() {ULSpEN:;
        return this.$7l_1++;
    },
    
    $X_1: null,
    
    $AB_1: function CUI_Root$$AB_1($p0) {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$X_1)) {
            this.$X_1 = [];
        }
        Array.add(this.$X_1, $p0);
    },
    
    $5q_1: false,
    
    $2g_1: function CUI_Root$$2g_1($p0) {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$X_1)) {
            return;
        }
        this.$5q_1 = true;
        var $v_0 = Array.indexOf(this.$X_1, $p0);
        for (var $v_1 = this.$X_1.length - 1; $v_1 >= $v_0; $v_1--) {
            (this.$X_1[$v_1]).$4b_1();
            Array.removeAt(this.$X_1, $v_1);
        }
        this.$5q_1 = false;
    },
    
    $3r_1: function CUI_Root$$3r_1() {ULSpEN:;
        if (this.$5q_1 || CUI.ScriptUtility.isNullOrUndefined(this.$X_1)) {
            return;
        }
        for (var $v_0 = this.$X_1.length - 1; $v_0 >= 0; $v_0--) {
            (this.$X_1[$v_0]).$4b_1();
            Array.removeAt(this.$X_1, $v_0);
        }
    },
    
    $38_1: null,
    
    $2O_1: function CUI_Root$$2O_1() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$38_1)) {
            return;
        }
        this.$38_1.$Y_0();
    },
    
    $2f_1: 0,
    $3n_1: null,
    
    get_$7j_1: function CUI_Root$get_$7j_1() {ULSpEN:;
        if ((Sys.Browser.agent === Sys.Browser.InternetExplorer) && (CUI.ScriptUtility.isNullOrUndefined(this.$3n_1))) {
            this.$3n_1 = CUI.Utility.$8d();
            this.$3n_1.className = 'ms-cui-tooltip-backFrame';
            this.$3n_1.style.visibility = 'hidden';
            document.body.appendChild(this.$3n_1);
        }
        return this.$3n_1;
    },
    
    $1l_1: false,
    $12_1: null,
    $2J_1: null,
    $15_1: null,
    
    $AJ_1: function CUI_Root$$AJ_1($p0, $p1) {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$2J_1)) {
            this.$2J_1 = [];
        }
        Array.add(this.$2J_1, $p0);
        this.$15_1 = $p0;
        if (this.$1l_1) {
            return false;
        }
        var $v_0 = this.get_$9J_1();
        $v_0.style.visibility = 'hidden';
        document.body.appendChild($v_0);
        $v_0.style.visibility = 'visible';
        this.$1l_1 = true;
        return true;
    },
    
    $B9_1: function CUI_Root$$B9_1($p0) {
        if ($p0 !== this.$15_1) {
            return;
        }
        if (!this.$1l_1) {
            throw Error.create('Cannot end modal mode because the Ribbon is not in Modal Mode');
        }
        Array.removeAt(this.$2J_1, this.$2J_1.length - 1);
        this.$15_1 = null;
        if (this.$2J_1.length > 0) {
            this.$15_1 = this.$2J_1[this.$2J_1.length - 1];
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$15_1)) {
            this.$BB_1();
        }
    },
    
    $BB_1: function CUI_Root$$BB_1() {ULSpEN:;
        if (!this.$1l_1) {
            return;
        }
        if (!this.$2J_1.length) {
            document.body.removeChild(this.get_$9J_1());
            this.$1l_1 = false;
            if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
                $clearHandlers(this.$12_1);
                this.$12_1 = null;
            }
        }
    },
    
    get_$9J_1: function CUI_Root$get_$9J_1() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$12_1)) {
            this.$12_1 = CUI.Utility.$2('div');
            if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
                this.$12_1.className = 'ms-cui-modalDiv-ie';
            }
            else {
                this.$12_1.className = 'ms-cui-modalDiv-ff';
            }
            if (CUI.Utility.$5a()) {
                CUI.Utility.ensureCSSClassOnElement(this.$12_1, 'ms-cui-modalDiv-ie8');
            }
            CUI.Utility.$1s(this.$12_1, true, false);
            $addHandler(this.$12_1, 'click', this.$$d_$C4_1);
            $addHandler(this.$12_1, 'mouseover', this.$$d_$C6_1);
            $addHandler(this.$12_1, 'mouseout', this.$$d_$C5_1);
            $addHandler(this.$12_1, 'contextmenu', this.$$d_$C2_1);
        }
        return this.$12_1;
    },
    
    $6X_1: null,
    $22_1: null,
    
    $C2_1: function CUI_Root$$C2_1($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$15_1)) {
            this.$15_1.onModalContextMenu($p0);
        }
    },
    
    $C4_1: function CUI_Root$$C4_1($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$15_1)) {
            this.$15_1.onModalBodyClick($p0);
        }
    },
    
    $C6_1: function CUI_Root$$C6_1($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$15_1)) {
            this.$15_1.onModalBodyMouseOver($p0);
        }
    },
    
    $C5_1: function CUI_Root$$C5_1($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$15_1)) {
            this.$15_1.onModalBodyMouseOut($p0);
        }
    },
    
    $C3_1: function CUI_Root$$C3_1($p0) {
        if (!this.$1l_1) {
            return;
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$15_1)) {
            this.$15_1.onModalKeyPress($p0);
        }
    },
    
    onWindowScroll: function CUI_Root$onWindowScroll(evt) {ULSpEN:;
        this.$3r_1();
        this.$2O_1();
    },
    
    $BQ_1: function CUI_Root$$BQ_1() {ULSpEN:;
        this.$8j_1();
    },
    
    $7N_1: function CUI_Root$$7N_1($p0) {
        this.$3r_1();
        this.$2O_1();
        this.dispose();
    },
    
    dispose: function CUI_Root$dispose() {ULSpEN:;
        if (this.$3Q_1) {
            return;
        }
        this.$3Q_1 = true;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0()) && this.$9w_1) {
            $removeHandler(this.get_$3_0(), 'contextmenu', CUI.Utility.get_returnFalseHandler());
        }
        try {
            $removeHandler(document, 'keydown', this.$6X_1);
        }
        catch ($$e_0) {
        }
        $removeHandler(window, 'unload', this.$22_1);
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$12_1)) {
            $clearHandlers(this.$12_1);
        }
        this.$12_1 = null;
        this.$25_1 = null;
        this.$5p_1 = null;
        CUI.Component.prototype.dispose.call(this);
    },
    
    $3Q_1: false,
    
    get_$B4_1: function CUI_Root$get_$B4_1() {ULSpEN:;
        return this.$3Q_1;
    },
    set_$B4_1: function CUI_Root$set_$B4_1($p0) {
        this.$3Q_1 = $p0;
        return $p0;
    },
    
    get_$Ak_0: function CUI_Root$get_$Ak_0() {ULSpEN:;
        if (this._componentHeight === -1 && !CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) {
            this._componentHeight = this.get_$3_0().offsetHeight;
        }
        return this._componentHeight;
    },
    
    get_$8W_0: function CUI_Root$get_$8W_0() {ULSpEN:;
        if (this._componentTopPosition === -1 && !CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) {
            this._componentTopPosition = CUI.UIUtility.calculateOffsetTop(this.get_$3_0());
        }
        return this._componentTopPosition;
    },
    
    $4r_1: '',
    
    get_cookieDataVersion: function CUI_Root$get_cookieDataVersion() {ULSpEN:;
        return this.$4r_1;
    },
    set_cookieDataVersion: function CUI_Root$set_cookieDataVersion(value) {ULSpEN:;
        this.$4r_1 = value;
        return value;
    },
    
    $4X_1: false,
    
    get_useDataCookie: function CUI_Root$get_useDataCookie() {ULSpEN:;
        return this.$4X_1;
    },
    set_useDataCookie: function CUI_Root$set_useDataCookie(value) {ULSpEN:;
        this.$4X_1 = value;
        return value;
    },
    
    storeDataCookie: function CUI_Root$storeDataCookie(name, value) {ULSpEN:;
        var $v_0 = new Date();
        $v_0.setTime($v_0.getTime() + 604800000);
        document.cookie = name + '=' + this.$4r_1 + value + '; expires=' + $v_0.toDateString() + '; path=/';
    },
    
    getDataCookieValue: function CUI_Root$getDataCookieValue(name) {ULSpEN:;
        name = this.$4r_1 + name;
        var $v_0 = document.cookie.split(';');
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1].trimStart();
            if ($v_2.startsWith(name)) {
                if ($v_2.startsWith(name + '=')) {
                    return $v_2.substring(name.length + 1, $v_2.length);
                }
            }
        }
        return null;
    },
    
    $5_1: null,
    $31_1: false,
    
    $7b_1: function CUI_Root$$7b_1($p0, $p1, $p2) {
        var $v_0 = false;
        if (CUI.ScriptUtility.isNullOrUndefined($p0) || CUI.ScriptUtility.isNullOrUndefined($p1)) {
            return;
        }
        var $v_1;
        var $v_2;
        var $v_3 = CUI.Root.$1F($p1, 'launcherLeft');
        var $v_4 = CUI.Root.$1F($p1, 'launcherTop');
        var $v_5 = CUI.Root.$1F($p1, 'launcherWidth');
        var $v_6 = CUI.Root.$1F($p1, 'launcherHeight');
        var $v_7 = CUI.Root.$1F($p1, 'flyOutWidth');
        var $v_8 = CUI.Root.$1F($p1, 'flyOutHeight');
        var $v_9 = CUI.Root.$1F($p1, 'flyOutRealHeight');
        var $v_A = CUI.Root.$1F($p1, 'viewportWidth');
        var $v_B = CUI.Root.$1F($p1, 'viewportHeight');
        var $v_C = CUI.Root.$1F($p1, 'viewableLeft');
        var $v_D = CUI.Root.$1F($p1, 'viewableTop');
        var $v_E = !this.$0_0._textDirection;
        var $v_F = false, $v_G = false;
        var $v_H = ($p2 === 1);
        $p0.style.maxHeight = 'none';
        $p0.style.top = '0px';
        $p0.style.overflowY = 'visible';
        $p0.style.width = 'auto';
        $v_7 = $p0.offsetWidth;
        if ($v_H) {
            if ($v_E) {
                $v_1 = $v_3 + $v_5;
                $v_1 += 2;
            }
            else {
                $v_1 = $v_3 - $v_7;
            }
            $v_2 = $v_4;
        }
        else {
            if ($v_E) {
                $v_1 = $v_3;
            }
            else {
                $v_1 = $v_3 + $v_5 - $v_7;
            }
            $v_2 = $v_4 + $v_6;
            var $v_I = ($v_5 >= 2) ? $v_5 - 2 : $v_5;
            if ($v_I > $v_7) {
                $v_7 = $v_I;
            }
            $p0.style.minWidth = $v_I + 'px';
        }
        if (this.$31_1) {
            $v_2 += $v_D;
            $v_1 += $v_C;
        }
        $p0.style.top = $v_2 + 'px';
        $p0.style.left = $v_1 + 'px';
        if ($v_7 <= $v_A) {
            if ($v_1 + $v_7 > $v_C + $v_A) {
                if ($v_H && $v_E && ($v_3 - $v_7) > $v_C) {
                    $v_1 = $v_3 - $v_7;
                }
                else {
                    $v_1 = $v_C + $v_A - $v_7 - 5;
                    $v_F = true;
                }
                $v_0 = true;
            }
            else if ($v_1 < $v_C) {
                if ($v_H && !$v_E && ($v_3 + $v_5 + $v_7) < ($v_C + $v_A)) {
                    $v_1 = $v_3 + $v_5;
                }
                else {
                    $v_1 = $v_C + 5;
                    $v_G = true;
                }
                $v_0 = true;
            }
            else {
                $v_0 = false;
            }
        }
        else {
            if ($v_E) {
                $v_1 = $v_C;
                $v_0 = true;
            }
            else {
                $v_1 = $v_C + $v_A - $v_7;
                $v_0 = true;
            }
        }
        if ($v_0) {
            $p0.style.left = $v_1 + 'px';
            $v_0 = false;
        }
        if ($v_2 + $v_9 > $v_D + $v_B) {
            var $v_J = $v_2;
            var $v_K = $v_D + $v_B - $v_2;
            $v_2 = $v_4 - $v_9;
            if (this.$31_1) {
                $v_2 += $v_D;
            }
            if ($v_2 < 0) {
                $v_2 = $v_D;
            }
            var $v_L = $v_4;
            if (!this.$31_1) {
                $v_L -= $v_D;
            }
            $v_0 = true;
            if ($v_L < $v_9) {
                if ($v_L < $v_K) {
                    $v_2 = $v_J;
                    $p0.style.maxHeight = $v_K + 'px';
                    $v_0 = false;
                }
                else {
                    $p0.style.maxHeight = $v_L + 'px';
                }
                var $v_M;
                var $$t_Q;
                this.$BC_1($p0, ($$t_Q = {'val': $v_M})), $v_M = $$t_Q.val;
                if (($v_E && $v_F) || (!$v_E && !$v_G)) {
                    $v_1 -= $v_M;
                    $p0.style.left = $v_1 + 'px';
                }
            }
            else {
                if ($v_H) {
                    $v_2 = ($v_B - $p0.offsetHeight);
                    $v_0 = true;
                }
            }
        }
        else {
            $v_0 = false;
        }
        if ($v_0) {
            $p0.style.top = $v_2 + 'px';
            $v_0 = false;
        }
        $p0.style.overflowY = 'auto';
    },
    
    $BC_1: function CUI_Root$$BC_1($p0, $p1) {
        var $v_0 = $p0.offsetWidth;
        $p0.style.overflowY = 'scroll';
        $p0.style.width = 'auto';
        var $v_1 = $p0.offsetWidth;
        $p1.val = $v_1 - $v_0;
    },
    
    $79_1: function CUI_Root$$79_1($p0, $p1) {
        var $v_0 = {};
        if (CUI.ScriptUtility.isNullOrUndefined($p0) || CUI.ScriptUtility.isNullOrUndefined($p1)) {
            return $v_0;
        }
        $v_0['launcherWidth'] = $p1.offsetWidth;
        $v_0['launcherHeight'] = $p1.offsetHeight;
        var $v_1 = $p1.offsetTop, $v_2 = $p1.offsetLeft;
        if (!CUI.ScriptUtility.isNullOrUndefined($p1.offsetParent)) {
            var $v_4 = $p1.offsetParent;
            for (; !CUI.ScriptUtility.isNullOrUndefined($v_4); $v_4 = $v_4.offsetParent) {
                $v_1 += $v_4.offsetTop;
                $v_2 += $v_4.offsetLeft;
            }
        }
        else {
            $v_1 = $p1.offsetTop;
            $v_2 = $p1.offsetLeft;
        }
        if (!CUI.ScriptUtility.isNullOrUndefined($p1.parentNode)) {
            var $v_5 = 0;
            var $v_6 = 0;
            var $v_7 = $p1.parentNode;
            for (; !CUI.ScriptUtility.isNullOrUndefined($v_7); $v_7 = $v_7.parentNode) {
                if ($v_7.scrollTop > 0) {
                    $v_5 += $v_7.scrollTop;
                }
                if ($v_7.scrollLeft > 0) {
                    if (($v_7 === document.documentElement) && (CUI.Utility.$3F()) && (this.$0_0._textDirection === 1)) {
                        $v_6 += document.body.scrollLeft;
                    }
                    else {
                        $v_6 += $v_7.scrollLeft;
                    }
                }
            }
            if ($v_1 >= $v_5) {
                $v_1 -= $v_5;
            }
            if ($v_2 >= $v_6) {
                $v_2 -= $v_6;
            }
        }
        $v_0['launcherTop'] = $v_1;
        $v_0['launcherLeft'] = $v_2;
        $v_0['viewportWidth'] = CUI.Utility.$3C();
        $v_0['viewportHeight'] = CUI.Utility.$3t();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0['viewportWidth'])) {
            $v_0['viewportWidth'] = document.documentElement.clientWidth;
            $v_0['viewportHeight'] = document.documentElement.clientHeight;
        }
        if (CUI.ScriptUtility.isNullOrUndefined($v_0['viewportWidth'])) {
            $v_0['viewportWidth'] = document.body.clientWidth;
            $v_0['viewportHeight'] = document.body.clientHeight;
        }
        $v_0['viewableTop'] = document.documentElement.scrollTop;
        $v_0['viewableLeft'] = document.documentElement.scrollLeft;
        if (CUI.ScriptUtility.isNullOrUndefined($v_0['viewableTop'])) {
            $v_0['viewableTop'] = window.pageYOffset;
            $v_0['viewableLeft'] = window.pageXOffset;
        }
        if (CUI.ScriptUtility.isNullOrUndefined($v_0['viewableTop'])) {
            $v_0['viewableTop'] = document.body.scrollTop;
            $v_0['viewableLeft'] = document.body.scrollLeft;
        }
        if ((CUI.Utility.$3F()) && (this.$0_0._textDirection === 1)) {
            $v_0['viewableLeft'] = document.body.scrollLeft;
        }
        $v_0['flyOutHeight'] = $p0.offsetHeight;
        $v_0['flyOutRealHeight'] = $p0.scrollHeight;
        var $v_3 = $p0.style.overflowY;
        $p0.style.overflowY = 'visible';
        $v_0['flyOutWidth'] = $p0.offsetWidth;
        $p0.style.overflowY = $v_3;
        return $v_0;
    }
}


CUI.ScalableRoot = function CUI_ScalableRoot($p0, $p1) {
    this.$$d_$CO_2 = Function.createDelegate(this, this.$CO_2);
    this._viewPortWidth = CUI.Utility.$3C();
    this._viewPortHeight = CUI.Utility.$3t();
    CUI.ScalableRoot.initializeBase(this, [ $p0, $p1 ]);
    this._lastWindowResizeWidthHeight = this.$95_2();
}
CUI.ScalableRoot.prototype = {
    $6r_2: false,
    $4R_2: null,
    $6B_2: false,
    _lastWindowResizeWidthHeight: null,
    $9x_2: true,
    
    get_$4k_2: function CUI_ScalableRoot$get_$4k_2() {ULSpEN:;
        return this.$6r_2;
    },
    set_$4k_2: function CUI_ScalableRoot$set_$4k_2($p0) {
        if ($p0 === this.$6r_2) {
            return $p0;
        }
        if ($p0) {
            $addHandler(window, 'resize', this.$4R_2);
        }
        else {
            try {
                $removeHandler(window, 'resize', this.$4R_2);
            }
            catch ($$e_1) {
            }
        }
        this.$6r_2 = $p0;
        return $p0;
    },
    
    $P_0: function CUI_ScalableRoot$$P_0() {ULSpEN:;
        this.$4R_2 = this.$$d_$CO_2;
        this.set_$4k_2(true);
        CUI.Component.prototype.$P_0.call(this);
    },
    
    $95_2: function CUI_ScalableRoot$$95_2() {ULSpEN:;
        return CUI.Utility.$3C().toString() + CUI.Utility.$3t().toString();
    },
    
    $D2_2: function CUI_ScalableRoot$$D2_2() {ULSpEN:;
        return (this._viewPortWidth !== CUI.Utility.$3C()) || (this._viewPortHeight !== CUI.Utility.$3t());
    },
    
    $CY_2: function CUI_ScalableRoot$$CY_2() {ULSpEN:;
        this._viewPortWidth = CUI.Utility.$3C();
        this._viewPortHeight = CUI.Utility.$3t();
    },
    
    $CO_2: function CUI_ScalableRoot$$CO_2($p0) {
        var $v_0 = this.$95_2();
        if (this._lastWindowResizeWidthHeight === $v_0) {
            return;
        }
        this._lastWindowResizeWidthHeight = $v_0;
        if (!this.$6B_2 && this.$9x_2 && this.$D2_2()) {
            this.$CY_2();
            this.$6B_2 = true;
            this._componentWidth = this._componentHeight = -1;
            this.$3r_1();
            this.$2O_1();
            var $v_1 = this.$Cc_2();
            if ($v_1) {
                this.pollForStateAndUpdate();
            }
            this.$6B_2 = false;
        }
    },
    
    get_headerScalingEnabled: function CUI_ScalableRoot$get_headerScalingEnabled() {ULSpEN:;
        return !CUI.ScriptUtility.isNullOrUndefined(window._ribbonScaleHeader);
    },
    
    scaleHeaderInternal: function CUI_ScalableRoot$scaleHeaderInternal(elmTopBars) {ULSpEN:;
        if (this.get_headerScalingEnabled()) {
            window._ribbonScaleHeader(elmTopBars, this.$0_0._textDirection === 1);
        }
    },
    
    dispose: function CUI_ScalableRoot$dispose() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$4R_2)) {
            this.set_$4k_2(false);
            this.$4R_2 = null;
        }
        CUI.Root.prototype.dispose.call(this);
    }
}


CUI.ToolTip = function CUI_ToolTip($p0, $p1, $p2, $p3, $p4) {
    this.$$d_$Bp_1 = Function.createDelegate(this, this.$Bp_1);
    CUI.ToolTip.initializeBase(this, [ $p0, $p1, $p2, $p3 ]);
    this.$5_1 = $p4;
    if (!CUI.ScriptUtility.isNullOrEmptyString($p4.ToolTipShortcutKey)) {
        if (!this.$0_0._textDirection) {
            this.$1W_0 = String.format('{0} ({1})', this.get_title(), this.$5_1.ToolTipShortcutKey);
        }
        else {
            this.$1W_0 = String.format('({1}) {0}', this.get_title(), this.$5_1.ToolTipShortcutKey);
        }
    }
}
CUI.ToolTip.prototype = {
    $a_1: null,
    $N_1: null,
    $D_1: null,
    $1P_1: null,
    $4x_1: null,
    $46_1: null,
    $58_1: null,
    $2r_1: null,
    $60_1: null,
    $61_1: null,
    $3U_1: null,
    $4z_1: null,
    $2t_1: null,
    $63_1: null,
    $50_1: null,
    $51_1: null,
    $6i_1: null,
    $6j_1: null,
    $8C_1: null,
    $8D_1: null,
    $8E_1: null,
    $5_1: null,
    $16_1: null,
    
    $1q_0: function CUI_ToolTip$$1q_0() {ULSpEN:;
        if (this.get_needsDelayIniting()) {
            this.doDelayedInit();
        }
        this.ensureDOMElementAndEmpty();
        this.get_$3_0().setAttribute('role', 'tooltip');
        this.get_$3_0().setAttribute('aria-hidden', 'true');
        if (CUI.ScriptUtility.isNullOrUndefined(this.$a_1)) {
            this.$a_1 = CUI.Utility.$2('div');
            this.$a_1.className = 'ms-cui-tooltip-body';
        }
        else {
            this.$a_1 = CUI.Utility.removeChildNodes(this.$a_1);
        }
        this.get_$3_0().appendChild(this.$a_1);
        if (CUI.ScriptUtility.isNullOrUndefined(this.$N_1)) {
            this.$N_1 = CUI.Utility.$2('div');
            this.$N_1.className = 'ms-cui-tooltip-glow';
            this.$a_1.appendChild(this.$N_1);
        }
        else {
            this.$N_1 = CUI.Utility.removeChildNodes(this.$N_1);
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$D_1)) {
            this.$D_1 = CUI.Utility.$2('h1');
            if (this.$1W_0.length > 100) {
                CUI.UIUtility.setInnerText(this.$D_1, this.$1W_0.substr(0, 100));
            }
            else {
                CUI.UIUtility.setInnerText(this.$D_1, this.get_title());
            }
            this.$N_1.appendChild(this.$D_1);
        }
        if ((CUI.ScriptUtility.isNullOrUndefined(this.$4x_1)) && (!CUI.ScriptUtility.isNullOrEmptyString(this.$5_1.ToolTipImage32by32))) {
            this.$4x_1 = CUI.Utility.$2('img');
            this.$46_1 = CUI.Utility.$h(2, 4, this.$5_1.ToolTipImage32by32, this.$5_1.ToolTipImage32by32Class, this.$4x_1, true, false, this.$5_1.ToolTipImage32by32Top, this.$5_1.ToolTipImage32by32Left);
            this.$46_1.className = this.$46_1.className + ' ms-cui-tooltip-bitmap ';
            this.$N_1.appendChild(this.$46_1);
        }
        var $v_0 = this.$5_1.ToolTipSelectedItemTitle;
        var $v_1 = this.get_description();
        if ((CUI.ScriptUtility.isNullOrUndefined(this.$1P_1)) && ((!CUI.ScriptUtility.isNullOrEmptyString($v_1)) || (!CUI.ScriptUtility.isNullOrEmptyString($v_0)))) {
            this.$1P_1 = CUI.Utility.$2('div');
            this.$1P_1.className = 'ms-cui-tooltip-description';
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$5_1.ToolTipImage32by32)) {
                this.$1P_1.style.width = '80%';
            }
            this.$N_1.appendChild(this.$1P_1);
            var $v_2 = this.$0_0.$5_1.ToolTipSelectedItemTitlePrefix;
            if (!CUI.ScriptUtility.isNullOrEmptyString($v_0) && (!CUI.ScriptUtility.isNullOrEmptyString($v_2))) {
                var $v_3 = String.format($v_2, $v_0);
                this.$58_1 = CUI.Utility.$2('p');
                CUI.Utility.$1r(this.$58_1, $v_3);
                this.$1P_1.appendChild(this.$58_1);
                this.$8E_1 = CUI.Utility.$2('br');
                this.$1P_1.appendChild(this.$8E_1);
            }
            if (!CUI.ScriptUtility.isNullOrEmptyString($v_1)) {
                if ($v_1.length > 512) {
                    this.$1P_1.innerHTML = this.$1P_1.innerHTML + CUI.Utility.$9B($v_1.substr(0, 512), true);
                }
                else {
                    this.$1P_1.innerHTML = this.$1P_1.innerHTML + CUI.Utility.$9B($v_1, true);
                }
            }
        }
        if ((CUI.ScriptUtility.isNullOrUndefined(this.$2r_1)) && (!CUI.ScriptUtility.isNullOrUndefined(this.$16_1)) && (!CUI.ScriptUtility.isNullOrEmptyString(this.$16_1.Title))) {
            this.$6i_1 = CUI.Utility.$2('div');
            this.$6i_1.className = 'ms-cui-tooltip-clear';
            this.$N_1.appendChild(this.$6i_1);
            this.$8C_1 = CUI.Utility.$2('hr');
            this.$N_1.appendChild(this.$8C_1);
            this.$3U_1 = CUI.Utility.$2('div');
            this.$3U_1.className = 'ms-cui-tooltip-footer';
            this.$N_1.appendChild(this.$3U_1);
            this.$4z_1 = CUI.Utility.$2('span');
            CUI.Utility.$1r(this.$4z_1, this.$16_1.Title);
            this.$60_1 = CUI.Utility.$2('img');
            this.$61_1 = CUI.Utility.$h(2, 3, this.$16_1.Icon, this.$16_1.IconClass, this.$60_1, true, false, this.$16_1.IconTop, this.$16_1.IconLeft);
            this.$61_1.style.verticalAlign = 'top';
            this.$3U_1.appendChild(this.$61_1);
            this.$3U_1.appendChild(this.$4z_1);
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$16_1.Description)) {
                this.$2r_1 = CUI.Utility.$2('div');
                this.$2r_1.className = 'ms-cui-tooltip-description';
                this.$2r_1.style.width = '90%';
                CUI.Utility.$1r(this.$2r_1, this.$16_1.Description);
                this.$N_1.appendChild(this.$2r_1);
            }
        }
        if ((CUI.ScriptUtility.isNullOrUndefined(this.$2t_1)) && (!CUI.ScriptUtility.isNullOrUndefined(this.$0_0.$5_1.ToolTipFooterImage16by16)) && (!CUI.ScriptUtility.isNullOrUndefined(this.$0_0.$5_1.ToolTipFooterText)) && (((!CUI.ScriptUtility.isNullOrUndefined(this.$16_1)) && (!CUI.ScriptUtility.isNullOrEmptyString(this.$16_1.HelpKeyWord))) || (!CUI.ScriptUtility.isNullOrEmptyString(this.$5_1.ToolTipHelpKeyWord)))) {
            this.$6j_1 = CUI.Utility.$2('div');
            this.$6j_1.className = 'ms-cui-tooltip-clear';
            this.$N_1.appendChild(this.$6j_1);
            this.$8D_1 = CUI.Utility.$2('hr');
            this.$N_1.appendChild(this.$8D_1);
            this.$2t_1 = CUI.Utility.$2('div');
            this.$2t_1.className = 'ms-cui-tooltip-footer';
            this.$N_1.appendChild(this.$2t_1);
            this.$51_1 = CUI.Utility.$2('span');
            CUI.Utility.$1r(this.$51_1, this.$0_0.$5_1.ToolTipFooterText);
            this.$63_1 = CUI.Utility.$2('img');
            this.$50_1 = CUI.Utility.$h(2, 3, this.$0_0.$5_1.ToolTipFooterImage16by16, this.$0_0.$5_1.ToolTipFooterImage16by16Class, this.$63_1, true, false, this.$0_0.$5_1.ToolTipFooterImage16by16Top, this.$0_0.$5_1.ToolTipFooterImage16by16Left);
            this.$50_1.style.verticalAlign = 'top';
            this.$2t_1.appendChild(this.$50_1);
            this.$2t_1.appendChild(this.$51_1);
        }
        this.appendChildrenToElement(this.$a_1);
        CUI.Component.prototype.$1q_0.call(this);
    },
    
    $B3_1: function CUI_ToolTip$$B3_1() {ULSpEN:;
        this.$1q_0();
        this.get_$3_0().style.visibility = 'hidden';
        this.get_$3_0().style.position = 'absolute';
        this.get_$3_0().style.top = '0px';
        this.get_$3_0().style.left = '0px';
        document.body.appendChild(this.get_$3_0());
        this.$CR_1();
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            CUI.Utility.$9b(this.$0_0.get_$7j_1(), this.get_$3_0());
            this.$0_0.get_$7j_1().style.visibility = 'visible';
        }
        this.get_$3_0().style.visibility = 'visible';
        this.set_visible(true);
        this.get_$3_0().setAttribute('aria-hidden', 'false');
        return true;
    },
    
    $98_1: function CUI_ToolTip$$98_1() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) {
            this.get_$3_0().style.visibility = 'hidden';
            this.get_$3_0().setAttribute('aria-hidden', 'true');
        }
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            this.$0_0.get_$7j_1().style.visibility = 'hidden';
        }
        this.set_visible(false);
    },
    
    get_cssClass: function CUI_ToolTip$get_cssClass() {ULSpEN:;
        return 'ms-cui-tooltip';
    },
    
    get_innerDiv: function CUI_ToolTip$get_innerDiv() {ULSpEN:;
        return this.$N_1;
    },
    set_innerDiv: function CUI_ToolTip$set_innerDiv($p0) {
        this.$N_1 = $p0;
        return $p0;
    },
    
    $CR_1: function CUI_ToolTip$$CR_1() {ULSpEN:;
        var $v_0 = this.get_$3_0();
        var $v_1 = this.$K_0.get_$3_0();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0) || CUI.ScriptUtility.isNullOrUndefined($v_1)) {
            return;
        }
        $v_0.style.top = '0px';
        $v_0.style.left = '0px';
        var $v_2 = this.$0_0.$79_1($v_0, $v_1);
        var $v_3 = CUI.Root.$1F($v_2, 'flyOutWidth');
        if ((this.$K_0.get_$8W_0() > this.$0_0.get_$8W_0()) && ((this.$K_0.get_$8W_0() + this.$K_0.get_$Ak_0()) < (this.$0_0.get_$8W_0() + this.$0_0.get_$Ak_0()))) {
            $v_2['launcherTop'] = this.$0_0.get_$8W_0();
            $v_2['launcherHeight'] = this.$0_0.get_$Ak_0();
        }
        else {
            var $v_4 = CUI.Root.$1F($v_2, 'launcherLeft');
            var $v_5 = CUI.Root.$1F($v_2, 'launcherTop');
            $v_4 += 30;
            $v_5 += 10;
            $v_2['launcherLeft'] = $v_4;
            $v_2['launcherTop'] = $v_5;
        }
        this.$0_0.$7b_1($v_0, $v_2, 2);
        $v_0.style.minWidth = $v_3 + 'px';
    },
    
    $Bp_1: function CUI_ToolTip$$Bp_1($p0) {
        if (this.$0_0) {
            this.$0_0.$2O_1();
        }
    },
    
    $9Q_1: function CUI_ToolTip$$9Q_1($p0) {
        if ($p0) {
            if ($p0.rawEvent) {
                var $v_0 = 113;
                var $v_1 = 123;
                var $v_2 = ($p0.rawEvent).keyCode;
                if ((($v_2 === $v_0) || ($v_2 === $v_1))) {
                    var $v_3 = null;
                    if (!CUI.ScriptUtility.isNullOrUndefined(this.$5_1.ToolTipHelpKeyWord)) {
                        $v_3 = this.$5_1.ToolTipHelpKeyWord;
                    }
                    if ((!CUI.ScriptUtility.isNullOrUndefined(this.$16_1)) && (!CUI.ScriptUtility.isNullOrEmptyString(this.$16_1.HelpKeyWord))) {
                        $v_3 = this.$16_1.HelpKeyWord;
                    }
                    if (!CUI.ScriptUtility.isNullOrUndefined($v_3)) {
                        var $v_4 = {};
                        $v_4['HelpKeyword'] = $v_3;
                        if (!CUI.ScriptUtility.isNullOrUndefined(this.$0_0.$5_1.ToolTipHelpCommand)) {
                            this.raiseCommandEvent(this.$0_0.$5_1.ToolTipHelpCommand, 1, $v_4);
                        }
                    }
                    $p0.preventDefault();
                    $p0.stopPropagation();
                    $p0.rawEvent.cancelBubble = true;
                    $p0.rawEvent.returnValue = false;
                }
                else {
                    this.$0_0.$2O_1();
                }
            }
        }
    },
    
    dispose: function CUI_ToolTip$dispose() {ULSpEN:;
        CUI.Component.prototype.dispose.call(this);
        this.$a_1 = null;
        this.$1P_1 = null;
        this.$4x_1 = null;
        this.$46_1 = null;
        this.$2r_1 = null;
        this.$60_1 = null;
        this.$3U_1 = null;
        this.$4z_1 = null;
        this.$2t_1 = null;
        this.$63_1 = null;
        this.$50_1 = null;
        this.$51_1 = null;
        this.$N_1 = null;
        this.$D_1 = null;
        this.$58_1 = null;
    }
}


CUI.Unit = function CUI_Unit($p0, $p1, $p2, $p3, $p4, $p5) {
    this.$5F_0 = $p0;
    this.$4l_0 = $p1;
    this.$4P_0 = $p2;
    this.$4N_0 = $p3;
    this.$5w_0 = $p4;
    this.$6l_0 = $p5;
}
CUI.Unit.prototype = {
    $5F_0: null,
    $4l_0: null,
    $4P_0: 0,
    $4N_0: 0,
    $5w_0: 0,
    $6l_0: 0,
    
    $6u_0: function CUI_Unit$$6u_0($p0) {
        if (!$p0) {
            return false;
        }
        for (var $v_0 = 0; $v_0 < this.$4l_0.length; $v_0++) {
            if (this.$4l_0[$v_0].toLowerCase() === $p0.toLowerCase()) {
                return true;
            }
        }
        return false;
    },
    
    $D0_0: function CUI_Unit$$D0_0($p0) {
        if (typeof($p0) !== 'number') {
            return CUI.Unit.$7I;
        }
        if ($p0 < this.$4P_0) {
            return 2;
        }
        if ($p0 > this.$4N_0) {
            return 3;
        }
        var $v_0 = $p0.toString();
        var $v_1 = $v_0.indexOf('.');
        if ($v_1 > -1) {
            var $v_2 = $v_0.substr($v_1 + 1);
            if ($v_2.length > this.$5w_0) {
                return 1;
            }
        }
        return 0;
    },
    
    get_$5R_0: function CUI_Unit$get_$5R_0() {ULSpEN:;
        return this.$4l_0[0];
    }
}


CUI.Utility = function CUI_Utility() {
}
CUI.Utility.removeChildNodes = function CUI_Utility$removeChildNodes($p0) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0)) {
        return null;
    }
    var $v_0 = $p0.parentNode;
    if ($v_0) {
        var $v_1 = $p0.cloneNode(false);
        $v_0.replaceChild($v_1, $p0);
        return $v_1;
    }
    else {
        var $v_2 = $p0.firstChild;
        var $v_3;
        while ($v_2) {
            $v_3 = $v_2.nextSibling;
            $p0.removeChild($v_2);
            $v_2 = $v_3;
        }
        return $p0;
    }
}
CUI.Utility.removeChildNodesSlow = function CUI_Utility$removeChildNodesSlow($p0) {
    while ($p0.hasChildNodes()) {
        $p0.removeChild($p0.firstChild);
    }
}
CUI.Utility.toggleCSSClassOnElement = function CUI_Utility$toggleCSSClassOnElement($p0, $p1, $p2) {
    if (!CUI.ScriptUtility.isNullOrUndefined($p0)) {
        if ($p2) {
            CUI.Utility.ensureCSSClassOnElement($p0, $p1);
        }
        else {
            CUI.Utility.removeCSSClassFromElement($p0, $p1);
        }
    }
}
CUI.Utility.ensureCSSClassOnElement = function CUI_Utility$ensureCSSClassOnElement($p0, $p1) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0)) {
        return;
    }
    var $v_0 = $p0.className;
    if (!CUI.ScriptUtility.isNullOrUndefined($v_0) && $v_0.indexOf($p1) !== -1) {
        return;
    }
    var $v_1 = ($v_0.trim() + ' ' + $p1);
    $v_1 = $v_1.trim();
    $p0.className = $v_1;
}
CUI.Utility.isDescendantOf = function CUI_Utility$isDescendantOf($p0, $p1) {
    while (!CUI.ScriptUtility.isNullOrUndefined($p1)) {
        try {
            if ($p1.nodeName.toLowerCase() === 'body') {
                break;
            }
        }
        catch ($$e_2) {
            if ($p1 === $p0) {
                return true;
            }
            break;
        }
        if ($p1 === $p0) {
            return true;
        }
        $p1 = $p1.parentNode;
    }
    return false;
}
CUI.Utility.removeCSSClassFromElement = function CUI_Utility$removeCSSClassFromElement($p0, $p1) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0) || CUI.ScriptUtility.isNullOrUndefined($p1) || CUI.ScriptUtility.isNullOrUndefined($p0.className)) {
        return;
    }
    var $v_0 = $p0.className;
    if ($v_0 !== $v_0.replace($p1, '')) {
        $p0.className = $v_0.replace($p1, '');
    }
}
CUI.Utility.setEnabledOnElement = function CUI_Utility$setEnabledOnElement($p0, $p1) {
    if ($p1) {
        CUI.Utility.enableElement($p0);
    }
    else {
        CUI.Utility.disableElement($p0);
    }
}
CUI.Utility.enableElement = function CUI_Utility$enableElement($p0) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0)) {
        return;
    }
    CUI.Utility.removeCSSClassFromElement($p0, 'ms-cui-disabled');
    $p0.removeAttribute('aria-disabled');
}
CUI.Utility.disableElement = function CUI_Utility$disableElement($p0) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0)) {
        return;
    }
    CUI.Utility.ensureCSSClassOnElement($p0, 'ms-cui-disabled');
    $p0.setAttribute('aria-disabled', 'true');
}
CUI.Utility.setDisabledAttribute = function CUI_Utility$setDisabledAttribute($p0, $p1) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0)) {
        return;
    }
    $p0.disabled = $p1;
}
CUI.Utility.$1p = function CUI_Utility$$1p($p0) {
    $p0.setAttribute('href', 'javascript:;');
    $p0.setAttribute('onclick', 'return false;');
}
CUI.Utility.$4c = function CUI_Utility$$4c() {ULSpEN:;
    var $v_0 = CUI.Utility.$2('a');
    $v_0.href = 'javascript:;';
    $v_0.setAttribute('onclick', 'return false;');
    return $v_0;
}
CUI.Utility.$8x = function CUI_Utility$$8x($p0) {
    var $v_0 = $p0;
    var $v_1 = 0;
    var $v_2 = 0;
    var $v_3 = $p0.offsetWidth;
    var $v_4 = $p0.offsetHeight;
    while (!CUI.ScriptUtility.isNullOrUndefined($v_0) && !CUI.ScriptUtility.isNullOrUndefined($v_0.nodeName) && $v_0.nodeName.toLowerCase() !== 'body') {
        var $v_5 = $v_0.clientLeft;
        if (CUI.ScriptUtility.isNullOrUndefined($v_5)) {
            $v_5 = 0;
        }
        var $v_6 = $v_0.clientTop;
        if (CUI.ScriptUtility.isNullOrUndefined($v_6)) {
            $v_6 = 0;
        }
        $v_1 += $v_0.offsetLeft + $v_5;
        $v_2 += $v_0.offsetTop + $v_6;
        $v_0 = $v_0.offsetParent;
    }
    return new Sys.UI.Bounds($v_1, $v_2, $v_3, $v_4);
}
CUI.Utility.$1r = function CUI_Utility$$1r($p0, $p1) {
    CUI.UIUtility.setInnerText($p0, $p1);
}
CUI.Utility.$9B = function CUI_Utility$$9B($p0, $p1) {
    var $v_0 = new Sys.StringBuilder();
    if (CUI.ScriptUtility.isNullOrEmptyString($p0) || 0 === $p0.length) {
        return null;
    }
    var $v_1 = false;
    var $v_2 = 0;
    var $v_3 = 0;
    var $v_4 = 0;
    var $v_5 = $p0.length;
    while ($v_4 < $v_5) {
        var $v_6;
        var $v_7 = $p0.charCodeAt($v_4);
        if ($v_7 < 63) {
            $v_6 = CUI.Utility.$9A[$v_7];
        }
        else if ($v_7 >= 160 && $v_7 <= 255) {
            $v_6 = -2;
        }
        else {
            $v_6 = 0;
        }
        if ($v_6) {
            if ($v_3 > 0) {
                $v_0.append($p0.substring($v_2, $v_2 + $v_3));
                $v_3 = 0;
            }
            $v_2 = $v_4 + 1;
            if ($v_6 === -2) {
                $v_0.append('&#');
                $v_0.append($v_7.toString());
                $v_0.append(';');
            }
            else if ($v_6 === 8) {
                var $v_8 = $p0.charAt($v_4 + 1);
                if (($v_8 === ' ') || $v_1) {
                    $v_0.append(CUI.Utility.$14[$v_6]);
                }
                else {
                    $v_0.append(' ');
                }
            }
            else {
                if ($v_6 === 2 && $p1) {
                    if ($v_4 + 5 < $v_5 && $p0.charAt($v_4 + 1) === 'n' && $p0.charAt($v_4 + 2) === 'b' && $p0.charAt($v_4 + 3) === 's' && $p0.charAt($v_4 + 4) === 'p' && $p0.charAt($v_4 + 5) === ';') {
                        $v_0.append(CUI.Utility.$14[8]);
                        $v_4 += 6;
                        $v_2 += 5;
                        continue;
                    }
                    if ($v_4 + 5 < $v_5 && $p0.charAt($v_4 + 1) === '#' && $p0.charAt($v_4 + 2) === '1' && $p0.charAt($v_4 + 3) === '6' && $p0.charAt($v_4 + 4) === '0' && $p0.charAt($v_4 + 5) === ';') {
                        $v_0.append(CUI.Utility.$14[8]);
                        $v_4 += 6;
                        $v_2 += 5;
                        continue;
                    }
                }
                else if ($v_6 === 4 && $p1) {
                    var $v_9, $v_A, $v_B;
                    $v_9 = $p0.charAt($v_4 + 1);
                    if ('b' === $v_9 || 'B' === $v_9) {
                        $v_A = $p0.charAt($v_4 + 2);
                        if ('>' === $v_A) {
                            $v_0.append(CUI.Utility.$14[9]);
                            $v_4 += 3;
                            $v_2 += 2;
                            continue;
                        }
                        else if ('r' === $v_A || 'R' === $v_A) {
                            $v_B = $p0.charAt($v_4 + 3);
                            if ('>' === $v_B) {
                                $v_0.append(CUI.Utility.$14[7]);
                                $v_4 += 4;
                                $v_2 += 3;
                                continue;
                            }
                            if ('/' === $v_B) {
                                var $v_C = $p0.charAt($v_4 + 4);
                                if ($v_C === '>') {
                                    $v_0.append(CUI.Utility.$14[7]);
                                    $v_4 += 5;
                                    $v_2 += 4;
                                    continue;
                                }
                            }
                            if (' ' === $v_B) {
                                var $v_D = $p0.charAt($v_4 + 4);
                                var $v_E = $p0.charAt($v_4 + 5);
                                if ($v_D === '/' && $v_E === '>') {
                                    $v_0.append(CUI.Utility.$14[7]);
                                    $v_4 += 6;
                                    $v_2 += 5;
                                    continue;
                                }
                            }
                        }
                    }
                    else if ('i' === $v_9 || 'I' === $v_9) {
                        $v_A = $p0.charAt($v_4 + 2);
                        if ('>' === $v_A) {
                            $v_0.append(CUI.Utility.$14[10]);
                            $v_4 += 3;
                            $v_2 += 2;
                            continue;
                        }
                    }
                    else if ('p' === $v_9 || 'P' === $v_9) {
                        $v_A = $p0.charAt($v_4 + 2);
                        if ('>' === $v_A) {
                            $v_0.append(CUI.Utility.$14[11]);
                            $v_4 += 3;
                            $v_2 += 2;
                            continue;
                        }
                    }
                    else if ('u' === $v_9 || 'U' === $v_9) {
                        $v_A = $p0.charAt($v_4 + 2);
                        if ('>' === $v_A) {
                            $v_0.append(CUI.Utility.$14[12]);
                            $v_4 += 3;
                            $v_2 += 2;
                            continue;
                        }
                    }
                    else if ('/' === $v_9) {
                        $v_B = $p0.charAt($v_4 + 3);
                        if ('>' === $v_B) {
                            $v_A = $p0.charAt($v_4 + 2);
                            if ('b' === $v_A || 'B' === $v_A) {
                                $v_0.append(CUI.Utility.$14[13]);
                                $v_4 += 4;
                                $v_2 += 3;
                                continue;
                            }
                            else if ('i' === $v_A || 'I' === $v_A) {
                                $v_0.append(CUI.Utility.$14[14]);
                                $v_4 += 4;
                                $v_2 += 3;
                                continue;
                            }
                            else if ('p' === $v_A || 'P' === $v_A) {
                                $v_0.append(CUI.Utility.$14[15]);
                                $v_4 += 4;
                                $v_2 += 3;
                                continue;
                            }
                            else if ('u' === $v_A || 'U' === $v_A) {
                                $v_0.append(CUI.Utility.$14[16]);
                                $v_4 += 4;
                                $v_2 += 3;
                                continue;
                            }
                        }
                    }
                }
                else if ($v_6 === 7) {
                    $v_1 = true;
                }
                else {
                    $v_1 = false;
                }
                $v_0.append(CUI.Utility.$14[$v_6]);
            }
        }
        else {
            $v_1 = false;
            $v_3++;
        }
        $v_4++;
    }
    if ($v_2 < $v_5) {
        $v_0.append($p0.substring($v_2, $v_5));
    }
    return $v_0.toString();
}
CUI.Utility.$2k = function CUI_Utility$$2k($p0, $p1) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0)) {
        $p0 = $p1;
        if (CUI.ScriptUtility.isNullOrUndefined($p0)) {
            $p0 = '';
        }
    }
    return $p0;
}
CUI.Utility.$27 = function CUI_Utility$$27($p0, $p1) {
    if (!CUI.ScriptUtility.isNullOrUndefined($p0) && !CUI.ScriptUtility.isNullOrUndefined($p1) && ($p0.className !== $p1)) {
        $p0.className = $p1;
    }
}
CUI.Utility.$1s = function CUI_Utility$$1s($p0, $p1, $p2) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0) || ($p0.nodeName === '#text')) {
        return;
    }
    if ($p1) {
        $p0.setAttribute('unselectable', 'on');
    }
    else {
        $p0.setAttribute('unselectable', 'off');
    }
    if ($p2) {
        var $v_0 = $p0.firstChild;
        while ($v_0) {
            CUI.Utility.$1s($v_0, $p1, true);
            $v_0 = $v_0.nextSibling;
        }
    }
}
CUI.Utility.$h = function CUI_Utility$$h($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    var $v_0 = null;
    if ($p0 === 1) {
        $v_0 = CUI.Utility.$2('div');
    }
    else if ($p0 === 3) {
        $v_0 = ($p6) ? CUI.Utility.$An() : CUI.Utility.$2('a');
    }
    else {
        $v_0 = ($p6) ? CUI.Utility.$Ao() : CUI.Utility.$2('span');
    }
    var $v_1 = '';
    var $v_2 = {};
    $v_1 = CUI.Utility.$9C[$p1];
    var $v_3 = !CUI.ScriptUtility.isNullOrUndefined($p7);
    var $v_4 = !CUI.ScriptUtility.isNullOrUndefined($p8);
    var $v_5 = !CUI.ScriptUtility.isNullOrUndefined($p3);
    if ($p5) {
        $v_1 += ' ms-cui-img-cont-float';
    }
    else {
        $v_1 += ' ms-cui-img-container';
    }
    if ($v_5) {
        $p4.className = $p3;
    }
    $v_0.className += ' ' + $v_1;
    if (!CUI.ScriptUtility.isNullOrEmptyString($p2)) {
        $v_0.appendChild($p4);
        $p4.src = $p2;
        if ($v_3) {
            $p4.style.top = $p7 + 'px';
        }
        if ($v_4) {
            $p4.style.left = $p8 + 'px';
        }
        else if (!$v_5) {
            $p4.style.left = '0px';
        }
    }
    return $v_0;
}
CUI.Utility.$1Y = function CUI_Utility$$1Y($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    $p0.style.display = 'inline-block';
    if (!CUI.ScriptUtility.isNullOrUndefined($p2)) {
        $p0.className = $p2;
    }
    if (!CUI.ScriptUtility.isNullOrEmptyString($p6)) {
        $p0.style.height = $p6 + 'px';
    }
    if (!CUI.ScriptUtility.isNullOrEmptyString($p5)) {
        $p0.style.width = $p5 + 'px';
    }
    if (!CUI.ScriptUtility.isNullOrEmptyString($p1)) {
        $p0.style.backgroundImage = 'url(' + $p1 + ')';
    }
    var $v_0 = '0px', $v_1 = '0px';
    var $v_2 = false;
    if (!CUI.ScriptUtility.isNullOrEmptyString($p4)) {
        $v_0 = $p4 + 'px';
        $v_2 = true;
    }
    if (!CUI.ScriptUtility.isNullOrEmptyString($p3)) {
        $v_1 = $p3 + 'px';
        $v_2 = true;
    }
    if ($v_2) {
        $p0.style.backgroundPosition = $v_0 + ' ' + $v_1;
    }
}
CUI.Utility.$8d = function CUI_Utility$$8d() {ULSpEN:;
    var $v_0 = CUI.Utility.$2('iframe');
    $v_0.style.position = 'absolute';
    $v_0.style.visibility = 'hidden';
    $v_0.style.borderWidth = '0px';
    return $v_0;
}
CUI.Utility.$8c = function CUI_Utility$$8c() {ULSpEN:;
    var $v_0 = CUI.Utility.$2('span');
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
        $v_0.className = 'ms-cui-glass-ie';
    }
    else {
        $v_0.className = 'ms-cui-glass-ff';
    }
    return $v_0;
}
CUI.Utility.$9b = function CUI_Utility$$9b($p0, $p1) {
    $p0.style.position = 'absolute';
    $p0.style.visibility = 'hidden';
    $p0.style.left = $p1.style.left;
    $p0.style.top = $p1.style.top;
    var $v_0 = $p1.offsetWidth;
    var $v_1 = $p1.offsetHeight;
    if (CUI.Utility.$Bi()) {
        $v_0 -= 4;
        $v_1 -= 4;
    }
    $p0.style.width = $v_0.toString() + 'px';
    $p0.style.height = $v_1.toString() + 'px';
    $p0.style.visibility = 'visible';
}
CUI.Utility.$1Z = function CUI_Utility$$1Z($p0, $p1) {
    if ((CUI.ScriptUtility.isNullOrUndefined($p1)) || (CUI.ScriptUtility.isNullOrUndefined($p0)) || (CUI.ScriptUtility.isNullOrUndefined($p0.ToolTipTitle))) {
        return;
    }
    $p1.setAttribute('aria-describedby', $p0.Id + '_ToolTip');
}
CUI.Utility.$75 = function CUI_Utility$$75($p0, $p1) {
    var $v_0;
    var $v_1 = '<br />';
    var $v_2 = $p0.lastIndexOf('\u200b\u200b');
    var $v_3 = $p0.lastIndexOf(' ');
    if ($v_2 !== -1) {
        $v_0 = CUI.Utility.$3E($p0.substr(0, $v_2)) + $v_1;
        if ($v_2 < $p0.length) {
            $v_0 += CUI.Utility.$3E($p0.substr($v_2 + 2));
        }
    }
    else if ($v_3 !== -1) {
        $v_0 = CUI.Utility.$3E($p0.substr(0, $v_3)) + $v_1;
        if ($v_3 < $p0.length) {
            $v_0 += CUI.Utility.$3E($p0.substr($v_3 + 1));
        }
        if ($p1) {
            $v_0 += ' ';
        }
    }
    else if ($v_3 === -1 && $p1) {
        $v_0 = CUI.Utility.$3E($p0) + $v_1;
    }
    else {
        $v_0 = CUI.Utility.$3E($p0);
    }
    return $v_0;
}
CUI.Utility.$3E = function CUI_Utility$$3E($p0) {
    if (CUI.ScriptUtility.isNullOrEmptyString($p0)) {
        return '';
    }
    var $v_0 = new Sys.StringBuilder();
    var $v_1 = $p0.length;
    for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
        var $v_3 = $p0.charAt($v_2);
        switch ($v_3) {
            case '<':
                $v_0.append('&lt;');
                break;
            case '>':
                $v_0.append('&gt;');
                break;
            case '&':
                $v_0.append('&amp;');
                break;
            case '\"':
                $v_0.append('&quot;');
                break;
            case '\'':
                $v_0.append('&#39;');
                break;
            default:
                $v_0.append($v_3);
                break;
        }
    }
    return $v_0.toString();
}
CUI.Utility.$7S = function CUI_Utility$$7S($p0) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0)) {
        return;
    }
    $clearHandlers($p0);
    if (!CUI.ScriptUtility.isNullOrUndefined($p0.childNodes)) {
        for (var $v_0 = 0; $v_0 < $p0.childNodes.length; $v_0++) {
            CUI.Utility.$7S($p0.childNodes[$v_0]);
        }
    }
}
CUI.Utility.$Ao = function CUI_Utility$$Ao() {ULSpEN:;
    var $v_0 = CUI.Utility.$2('span');
    $v_0.className = 'ms-cui-block';
    return $v_0;
}
CUI.Utility.$An = function CUI_Utility$$An() {ULSpEN:;
    var $v_0 = CUI.Utility.$2('a');
    $v_0.className = 'ms-cui-block';
    return $v_0;
}
CUI.Utility.$o = function CUI_Utility$$o($p0) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0)) {
        return false;
    }
    return $p0 === 'True' || $p0 === 'true';
}
CUI.Utility.$3C = function CUI_Utility$$3C() {ULSpEN:;
    var $v_0 = window.innerWidth;
    if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.documentElement.clientWidth;
    }
    if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.body.clientWidth;
    }
    return $v_0;
}
CUI.Utility.$3t = function CUI_Utility$$3t() {ULSpEN:;
    var $v_0 = window.innerHeight;
    if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.documentElement.clientHeight;
    }
    if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.body.clientHeight;
    }
    return $v_0;
}
CUI.Utility.$5W = function CUI_Utility$$5W($p0, $p1) {
    var $v_0 = CUI.Utility.$BT($p0, $p1, true);
    return ($v_0 && $v_0.length > 0) ? $v_0[0] : null;
}
CUI.Utility.$BT = function CUI_Utility$$BT($p0, $p1, $p2) {
    if (!CUI.ScriptUtility.isNullOrUndefined($p0.getElementsByClassName)) {
        var $v_0 = $p0.getElementsByClassName($p1);
        if ($p2) {
            if (CUI.ScriptUtility.isNullOrUndefined($v_0) || $v_0.length <= 1) {
                return $v_0;
            }
            var $v_1 = [];
            $v_1[0] = $v_0[0];
            return $v_1;
        }
        return $v_0;
    }
    if (!CUI.ScriptUtility.isNullOrUndefined($p0.querySelectorAll)) {
        if ($p2) {
            var $v_2 = $p0.querySelector('.' + $p1);
            var $v_3 = [];
            if (!CUI.ScriptUtility.isNullOrUndefined($v_2)) {
                $v_3[0] = $v_2;
            }
            return $v_3;
        }
        return $p0.querySelectorAll('.' + $p1);
    }
    else {
        return CUI.Utility.$8u($p0, $p1, $p2);
    }
}
CUI.Utility.$8u = function CUI_Utility$$8u($p0, $p1, $p2) {
    var $v_0 = [];
    var $v_1 = 0;
    var $v_2;
    for (var $v_3 = 0; $v_3 < $p0.childNodes.length; $v_3++) {
        $v_2 = $p0.childNodes[$v_3];
        if (!CUI.ScriptUtility.isNullOrUndefined($v_2.className) && $v_2.className.indexOf($p1) >= 0) {
            $v_0[$v_1++] = $v_2;
            if ($p2) {
                break;
            }
        }
        $v_0 = $v_0.concat(CUI.Utility.$8u($v_2, $p1, $p2));
        if ($v_0.length > 0 && $p2) {
            break;
        }
    }
    return $v_0;
}
CUI.Utility.$7X = function CUI_Utility$$7X($p0) {
    if (!CUI.ScriptUtility.isNullOrUndefined($p0.select)) {
        $p0.select();
    }
    else if (CUI.Utility.$5Z()) {
        var $v_0 = $p0.createTextRange();
        $v_0.moveStart('character', 0);
        $v_0.moveEnd('character', $p0.value.length);
        $v_0.select();
    }
    else {
        $p0.setSelectionRange(0, $p0.value.length);
    }
}
CUI.Utility.$5Z = function CUI_Utility$$5Z() {ULSpEN:;
    if (!CUI.Utility.$6G) {
        CUI.Utility.$6H = (Sys.Browser.agent === Sys.Browser.InternetExplorer);
        CUI.Utility.$6G = true;
    }
    return CUI.Utility.$6H;
}
CUI.Utility.$3F = function CUI_Utility$$3F() {ULSpEN:;
    if (!CUI.Utility.$6D) {
        if (CUI.Utility.$5Z() && !window.document.documentMode) {
            CUI.Utility.$6I = true;
        }
        CUI.Utility.$6D = true;
    }
    return CUI.Utility.$6I;
}
CUI.Utility.$5a = function CUI_Utility$$5a() {ULSpEN:;
    if (!CUI.Utility.$6E) {
        var $v_0 = window.document.documentMode;
        if (CUI.Utility.$5Z() && (!$v_0 || $v_0 <= 8)) {
            CUI.Utility.$6J = true;
        }
        CUI.Utility.$6E = true;
    }
    return CUI.Utility.$6J;
}
CUI.Utility.$Bi = function CUI_Utility$$Bi() {ULSpEN:;
    if (!CUI.Utility.$6F) {
        var $v_0 = window.document.documentMode;
        if (CUI.Utility.$5Z() && $v_0 && $v_0 >= 9) {
            CUI.Utility.$6K = true;
        }
        CUI.Utility.$6F = true;
    }
    return CUI.Utility.$6K;
}
CUI.Utility.$7B = function CUI_Utility$$7B($p0, $p1) {
    return CUI.Utility.$BX($p0, [ $p1 ]);
}
CUI.Utility.$BX = function CUI_Utility$$BX($p0, $p1) {
    var $v_0 = $p1.length;
    if (!$p0) {
        return null;
    }
    for (var $v_2 = 0; $v_2 < $v_0; $v_2++) {
        if ($p0.tagName.toLowerCase() === $p1[$v_2].toLowerCase()) {
            return $p0;
        }
    }
    var $v_1 = $p0.parentNode;
    while ($v_1) {
        for (var $v_3 = 0; $v_3 < $v_0; $v_3++) {
            if ($v_1.tagName.toLowerCase() === $p1[$v_3].toLowerCase()) {
                return $v_1;
            }
        }
        $v_1 = $v_1.parentNode;
    }
    return null;
}
CUI.Utility.$2 = function CUI_Utility$$2($p0) {
    var $v_0 = document.createElement($p0);
    $v_0.setAttribute('unselectable', 'on');
    return $v_0;
}
CUI.Utility.$28 = function CUI_Utility$$28($p0) {
    var $v_0 = document.createElement('label');
    $v_0.setAttribute('unselectable', 'on');
    $v_0.className = 'ms-cui-hidden';
    CUI.UIUtility.setInnerText($v_0, $p0);
    return $v_0;
}
CUI.Utility.$6w = function CUI_Utility$$6w($p0) {
    return document.createElement($p0);
}
CUI.Utility.$7f = function CUI_Utility$$7f($p0, $p1) {
    if (CUI.ScriptUtility.isNullOrUndefined($p1)) {
        return;
    }
    $p0.style.imeMode = (CUI.Utility.$o($p1)) ? 'auto' : 'disabled';
}
CUI.Utility.get_returnFalseHandler = function CUI_Utility$get_returnFalseHandler() {ULSpEN:;
    if (CUI.ScriptUtility.isNullOrUndefined(CUI.Utility.$5K)) {
        CUI.Utility.$5K = CUI.NativeUtility.returnFalse;
    }
    return CUI.Utility.$5K;
}
CUI.Utility.$Co = function CUI_Utility$$Co($p0) {
    return $p0 > 1;
}
CUI.Utility.$Cm = function CUI_Utility$$Cm($p0) {
    return !$p0 || $p0 === 3;
}


CUI.ScriptUtility = function CUI_ScriptUtility() {
}
CUI.ScriptUtility.isNullOrEmptyString = function CUI_ScriptUtility$isNullOrEmptyString($p0) {
    var $v_0 = null;
    return $p0 === $v_0 || typeof($p0) === 'undefined' || !$p0.length;
}
CUI.ScriptUtility.isNullOrUndefined = function CUI_ScriptUtility$isNullOrUndefined($p0) {
    var $v_0 = null;
    return $p0 === $v_0 || typeof($p0) === 'undefined';
}
CUI.ScriptUtility.isUndefined = function CUI_ScriptUtility$isUndefined($p0) {
    return typeof($p0) === 'undefined';
}


CUI.UIUtility = function CUI_UIUtility() {
}
CUI.UIUtility.generateRandomElementId = function CUI_UIUtility$generateRandomElementId() {ULSpEN:;
    var $v_0 = null;
    var $v_1 = null;
    do {
        var $v_2 = Math.random();
        $v_2 = $v_2 * 100000;
        $v_2 = Math.round($v_2);
        $v_0 = 'rnd' + $v_2.toString();
        $v_1 = $get($v_0);
    } while ($v_1);
    return $v_0;
}
CUI.UIUtility.cancelEvent = function CUI_UIUtility$cancelEvent($p0) {
    if ($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
    }
}
CUI.UIUtility.insertBefore = function CUI_UIUtility$insertBefore($p0, $p1) {
    var $v_0 = $p1.parentNode;
    $v_0.insertBefore($p0, $p1);
}
CUI.UIUtility.insertAfter = function CUI_UIUtility$insertAfter($p0, $p1) {
    var $v_0 = $p1.parentNode;
    if ($v_0.lastChild === $p1) {
        $v_0.appendChild($p0);
    }
    else {
        $v_0.insertBefore($p0, $p1.nextSibling);
    }
}
CUI.UIUtility.removeNode = function CUI_UIUtility$removeNode($p0) {
    if ($p0.parentNode) {
        $p0.parentNode.removeChild($p0);
    }
}
CUI.UIUtility.calculateOffsetLeft = function CUI_UIUtility$calculateOffsetLeft($p0) {
    var $v_0 = 0;
    while ($p0) {
        $v_0 += $p0.offsetLeft;
        $p0 = $p0.offsetParent;
    }
    return $v_0;
}
CUI.UIUtility.calculateOffsetTop = function CUI_UIUtility$calculateOffsetTop($p0) {
    var $v_0 = 0;
    while ($p0) {
        $v_0 += $p0.offsetTop;
        $p0 = $p0.offsetParent;
    }
    return $v_0;
}
CUI.UIUtility.setInnerText = function CUI_UIUtility$setInnerText($p0, $p1) {
    CUI.NativeUtility.setInnerText($p0, $p1);
}
CUI.UIUtility.isTextNode = function CUI_UIUtility$isTextNode($p0) {
    return $p0.nodeType === 3 || $p0.nodeType === 4;
}
CUI.UIUtility.isNodeOfType = function CUI_UIUtility$isNodeOfType($p0, $p1) {
    for (var $v_0 = 0; $v_0 < $p1.length; $v_0++) {
        if ($p0.tagName === $p1[$v_0]) {
            return true;
        }
    }
    return false;
}


CUI.ListNode = function CUI_ListNode($p0, $p1, $p2) {
    this.next = $p2;
    this.previous = $p1;
    this.data = $p0;
}
CUI.ListNode.prototype = {
    next: null,
    previous: null,
    data: null
}


CUI.List = function CUI_List() {
}
CUI.List.prototype = {
    $1j_0: null,
    $37_0: null,
    $M_0: 0,
    
    add: function CUI_List$add($p0) {
        if (!this.$1j_0) {
            this.$1j_0 = this.$37_0 = new CUI.ListNode($p0, null, null);
        }
        else {
            this.$37_0 = this.$37_0.next = new CUI.ListNode($p0, this.$37_0, null);
        }
        this.$M_0++;
    },
    
    insert: function CUI_List$insert($p0, $p1) {
        if ($p0 > this.$M_0 || 0 > $p0) {
            throw Error.argumentOutOfRange('pos');
        }
        if ($p0 === this.$M_0) {
            this.add($p1);
            return;
        }
        var $v_0 = this.$1j_0;
        while (0 !== $p0--) {
            $v_0 = $v_0.next;
        }
        var $v_1 = new CUI.ListNode($p1, $v_0.previous, $v_0);
        if (!$v_0.previous) {
            this.$1j_0 = $v_1;
        }
        else {
            $v_0.previous.next = $v_1;
        }
        if (!$v_0.next) {
            this.$37_0 = $v_1;
        }
        else {
            $v_0.next.previous = $v_1;
        }
    },
    
    remove: function CUI_List$remove($p0) {
        var $v_0 = this.$1j_0;
        while ($v_0) {
            if ($v_0.data === $p0) {
                break;
            }
            $v_0 = $v_0.next;
        }
        if (!$v_0) {
            return false;
        }
        if (!$v_0.previous) {
            this.$1j_0 = $v_0.next;
        }
        else {
            $v_0.previous.next = $v_0.next;
        }
        if (!$v_0.next) {
            this.$37_0 = $v_0.previous;
        }
        else {
            $v_0.next.previous = $v_0.previous;
        }
        return true;
    },
    
    clear: function CUI_List$clear() {ULSpEN:;
        var $v_0 = this.$1j_0, $v_1;
        this.$1j_0 = null;
        this.$37_0 = null;
        while ($v_0) {
            $v_1 = $v_0.next;
            $v_0.previous = null;
            $v_0.next = null;
            $v_0 = $v_1;
        }
    },
    
    indexOf: function CUI_List$indexOf($p0) {
        var $v_0 = this.$1j_0;
        var $v_1 = 0;
        while ($v_0) {
            if ($v_0.data === $p0) {
                break;
            }
            $v_0 = $v_0.next;
            $v_1++;
        }
        if (!$v_0) {
            return -1;
        }
        return $v_1;
    },
    
    get_item: function CUI_List$get_item($p0) {
        var $v_0 = this.$8N_0($p0);
        return $v_0.data;
    },
    
    get_count: function CUI_List$get_count() {ULSpEN:;
        return this.$M_0;
    },
    
    getEnumerator: function CUI_List$getEnumerator() {ULSpEN:;
        return new CUI.ListEnumerator(this.$1j_0);
    },
    
    getEnumeratorAtPos: function CUI_List$getEnumeratorAtPos($p0) {
        var $v_0 = this.$8N_0($p0);
        return new CUI.ListEnumerator($v_0);
    },
    
    toArray: function CUI_List$toArray() {ULSpEN:;
        var $v_0 = new Array(this.$M_0);
        var $v_1 = 0;
        var $$enum_2 = this.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_2 = $$enum_2.get_current();
            $v_0[$v_1] = $v_2;
            $v_1++;
        }
        return $v_0;
    },
    
    $8N_0: function CUI_List$$8N_0($p0) {
        var $v_0 = this.$1j_0;
        var $v_1 = 0;
        while ($v_1 !== $p0) {
            if (!$v_0) {
                throw Error.argumentOutOfRange('pos');
            }
            $v_0 = $v_0.next;
            $v_1++;
        }
        return $v_0;
    }
}


CUI.ListEnumerator = function CUI_ListEnumerator($p0) {
    this.$3b_0 = $p0;
}
CUI.ListEnumerator.prototype = {
    $3b_0: null,
    $d_0: null,
    
    get_current: function CUI_ListEnumerator$get_current() {ULSpEN:;
        if (!this.$d_0) {
            throw Error.argumentOutOfRange();
        }
        return this.$d_0.data;
    },
    
    moveNext: function CUI_ListEnumerator$moveNext() {ULSpEN:;
        if (!this.$d_0) {
            this.$d_0 = this.$3b_0;
            return !!this.$3b_0;
        }
        if (!this.$d_0.next) {
            return false;
        }
        this.$d_0 = this.$d_0.next;
        return true;
    },
    
    movePrevious: function CUI_ListEnumerator$movePrevious() {ULSpEN:;
        if (!this.$d_0) {
            this.$d_0 = this.$3b_0;
            return !!this.$3b_0;
        }
        if (!this.$d_0.previous) {
            return false;
        }
        this.$d_0 = this.$d_0.previous;
        return true;
    },
    
    reset: function CUI_ListEnumerator$reset() {ULSpEN:;
        this.$d_0 = this.$3b_0;
    }
}


CUI.JsonXmlElement = function CUI_JsonXmlElement(name, attrs) {ULSpEN:;
    this.name = name;
    if (!attrs) {
        attrs = {};
    }
    this.attrs = attrs;
}
CUI.JsonXmlElement.prototype = {
    
    get_name: function CUI_JsonXmlElement$get_name() {ULSpEN:;
        return this.name;
    },
    
    get_attributes: function CUI_JsonXmlElement$get_attributes() {ULSpEN:;
        return this.attrs;
    },
    
    appendChild: function CUI_JsonXmlElement$appendChild(name, attrs) {ULSpEN:;
        var $v_0 = new CUI.JsonXmlElement(name, attrs);
        return this.appendChildNode($v_0);
    },
    
    appendChildNode: function CUI_JsonXmlElement$appendChildNode(node) {ULSpEN:;
        var $v_0 = this.children;
        if (!$v_0) {
            $v_0 = [];
            this.children = $v_0;
        }
        Array.add($v_0, node);
        return node;
    },
    
    get_childNodes: function CUI_JsonXmlElement$get_childNodes() {ULSpEN:;
        return this.children;
    }
}


Type.registerNamespace('CUI.Controls');

CUI.Controls.ColorStyle = function CUI_Controls_ColorStyle() {ULSpEN:;
    this.Title = null;
    this.Color = null;
    this.Style = null;
    this.DisplayColor = null;
}


CUI.Controls.ColorPickerResult = function CUI_Controls_ColorPickerResult() {}


CUI.Controls.ContextMenuControlProperties = function CUI_Controls_ContextMenuControlProperties() {ULSpEN:;
    CUI.Controls.ContextMenuControlProperties.initializeBase(this);
}


CUI.Controls.ContextMenuControl = function CUI_Controls_ContextMenuControl($p0, $p1, $p2, $p3) {
    CUI.Controls.ContextMenuControl.initializeBase(this, [ $p0, $p1, $p2, $p3 ]);
    this.addDisplayMode('Menu');
}
CUI.Controls.ContextMenuControl.prototype = {
    $9I_3: null,
    
    createDOMElementForDisplayMode: function CUI_Controls_ContextMenuControl$createDOMElementForDisplayMode($p0) {
        switch ($p0) {
            case 'Menu':
                this.$9I_3 = CUI.Utility.$2('span');
                return this.$9I_3;
            default:
                this.ensureValidDisplayMode($p0);
                return null;
        }
    },
    
    onEnabledChanged: function CUI_Controls_ContextMenuControl$onEnabledChanged($p0) {
    },
    
    onMenuButtonClick: function CUI_Controls_ContextMenuControl$onMenuButtonClick($p0) {
        if (!this.get_enabled()) {
            return;
        }
        this.$Bl_2($p0, null);
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_3().CommandMenuOpen, 4, null);
    },
    
    onLaunchedMenuClosed: function CUI_Controls_ContextMenuControl$onLaunchedMenuClosed() {ULSpEN:;
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_3().CommandMenuClose, 10, null);
    },
    
    get_$1_3: function CUI_Controls_ContextMenuControl$get_$1_3() {ULSpEN:;
        return this.$5_0;
    }
}


CUI.Controls.ButtonCommandProperties = function CUI_Controls_ButtonCommandProperties() {
}


CUI.Controls.Button = function CUI_Controls_Button($p0, $p1, $p2) {
    this.$$d_handleTabBlur = Function.createDelegate(this, this.handleTabBlur);
    this.$$d_handleTabFocus = Function.createDelegate(this, this.handleTabFocus);
    this.$$d_handleMouseBlur = Function.createDelegate(this, this.handleMouseBlur);
    this.$$d_handleMouseFocus = Function.createDelegate(this, this.handleMouseFocus);
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    CUI.Controls.Button.initializeBase(this, [ $p0, $p1, $p2 ]);
    this.addDisplayMode('Small');
    this.addDisplayMode('Medium');
    this.addDisplayMode('Large');
    this.addDisplayMode('Menu');
    this.addDisplayMode('Menu16');
    this.addDisplayMode('Menu32');
    this.$1k_1 = this.get_$1_1().LabelText;
    this.get_stateProperties()['LabelText'] = this.$1k_1;
}
CUI.Controls.Button.prototype = {
    $E_1: null,
    $2V_1: null,
    $2F_1: null,
    $8_1: null,
    $2W_1: null,
    $n_1: null,
    $A_1: null,
    $2X_1: null,
    $R_1: null,
    $4B_1: null,
    $54_1: null,
    $c_1: null,
    $4C_1: null,
    $55_1: null,
    $20_1: null,
    $t_1: null,
    $64_1: null,
    $65_1: null,
    $66_1: null,
    $1v_1: null,
    $1Q_1: null,
    $1k_1: null,
    
    createComponentForDisplayModeInternal: function CUI_Controls_Button$createComponentForDisplayModeInternal($p0) {
        var $v_0;
        if ($p0.startsWith('Menu')) {
            $v_0 = this.$0_0.$3s_1(this.$4_0 + '-' + $p0 + this.$0_0.$2A_1(), $p0, this);
            this.$20_1 = this.get_$1_1().MenuItemId;
            this.$t_1 = this.get_$1_1().CommandValueId;
            if (CUI.ScriptUtility.isNullOrEmptyString(this.$t_1)) {
                this.$t_1 = this.$20_1;
            }
        }
        else {
            $v_0 = CUI.Control.prototype.createComponentForDisplayModeInternal.call(this, $p0);
        }
        return $v_0;
    },
    
    createDOMElementForDisplayMode: function CUI_Controls_Button$createDOMElementForDisplayMode($p0) {
        return this.$2h_1($p0, true);
    },
    
    $2h_1: function CUI_Controls_Button$$2h_1($p0, $p1) {
        var $v_0 = (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_1().Alt)) ? this.getTextValue() : this.get_$1_1().Alt;
        var $v_1;
        switch ($p0) {
            case 'Large':
                var $$t_4, $$t_5, $$t_6;
                this.$E_1 = (($$t_6 = CUI.Control.createStandardControlDOMElement_OutParameters(this, this.$0_0, 'Large', this.get_$1_1(), false, false, ($$t_4 = {'val': this.$2F_1}), ($$t_5 = {'val': this.$2V_1}))), this.$2F_1 = $$t_4.val, this.$2V_1 = $$t_5.val, $$t_6);
                if ($p1) {
                    this.$AH_0('Large');
                }
                return this.$E_1;
            case 'Medium':
                var $$t_7, $$t_8, $$t_9;
                this.$8_1 = (($$t_9 = CUI.Control.createStandardControlDOMElement_OutParameters(this, this.$0_0, 'Medium', this.get_$1_1(), false, false, ($$t_7 = {'val': this.$n_1}), ($$t_8 = {'val': this.$2W_1}))), this.$n_1 = $$t_7.val, this.$2W_1 = $$t_8.val, $$t_9);
                if ($p1) {
                    this.$AH_0('Medium');
                }
                return this.$8_1;
            case 'Small':
                var $$t_A, $$t_B, $$t_C;
                this.$A_1 = (($$t_C = CUI.Control.createStandardControlDOMElement_OutParameters(this, this.$0_0, 'Small', this.get_$1_1(), false, false, ($$t_A = {'val': $v_1}), ($$t_B = {'val': this.$2X_1}))), $v_1 = $$t_A.val, this.$2X_1 = $$t_B.val, $$t_C);
                if ($p1) {
                    this.$AH_0('Small');
                }
                return this.$A_1;
            case 'Menu':
            case 'Menu16':
                var $$t_D, $$t_E, $$t_F;
                this.$R_1 = (($$t_F = CUI.Control.createStandardControlDOMElement_OutParameters(this, this.$0_0, 'Menu16', this.get_$1_1(), true, false, ($$t_D = {'val': this.$4B_1}), ($$t_E = {'val': this.$54_1}))), this.$4B_1 = $$t_D.val, this.$54_1 = $$t_E.val, $$t_F);
                if ($p1) {
                    this.$AH_0('Menu16');
                }
                return this.$R_1;
            case 'Menu32':
                var $$t_G, $$t_H, $$t_I;
                this.$c_1 = (($$t_I = CUI.Control.createStandardControlDOMElement_OutParameters(this, this.$0_0, 'Menu32', this.get_$1_1(), true, false, ($$t_G = {'val': this.$4C_1}), ($$t_H = {'val': this.$55_1}))), this.$4C_1 = $$t_G.val, this.$55_1 = $$t_H.val, $$t_I);
                if ($p1) {
                    this.$AH_0('Menu32');
                }
                return this.$c_1;
            default:
                this.ensureValidDisplayMode($p0);
                return null;
        }
    },
    
    $AG_0: function CUI_Controls_Button$$AG_0($p0) {
        var $v_0 = $get(this.$4_0 + '-' + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return;
        }
        var $v_1 = $v_0;
        for (var $v_4 = 0; $v_4 < 3; $v_4++) {
            $v_1 = $v_1.firstChild;
            if (CUI.ScriptUtility.isNullOrUndefined($v_1)) {
                return;
            }
        }
        var $v_2 = $v_1;
        var $v_3 = null;
        if ($p0 !== 'Small') {
            $v_3 = $v_0.childNodes[1];
            if (CUI.ScriptUtility.isNullOrUndefined($v_3)) {
                return;
            }
        }
        switch ($p0) {
            case 'Large':
                this.$E_1 = $v_0;
                this.$2V_1 = $v_2;
                this.$2F_1 = $v_3;
                break;
            case 'Medium':
                this.$8_1 = $v_0;
                this.$2W_1 = $v_2;
                this.$n_1 = $v_3;
                break;
            case 'Small':
                this.$A_1 = $v_0;
                this.$2X_1 = $v_2;
                break;
        }
    },
    
    $AH_0: function CUI_Controls_Button$$AH_0($p0) {
        switch ($p0) {
            case 'Large':
                this.$P_1(this.$E_1, true);
                break;
            case 'Medium':
                this.$P_1(this.$8_1, true);
                break;
            case 'Small':
                this.$P_1(this.$A_1, true);
                break;
            case 'Menu32':
                this.$P_1(this.$c_1, false);
                break;
            case 'Menu16':
                this.$P_1(this.$R_1, false);
                break;
            case 'Menu':
                this.$P_1(this.$R_1, false);
                break;
        }
    },
    
    $P_1: function CUI_Controls_Button$$P_1($p0, $p1) {
        $addHandler($p0, 'click', this.$$d_onClick);
        if ($p1) {
            $addHandler($p0, 'dblclick', this.$$d_onDblClick);
        }
        $addHandler($p0, 'mouseover', this.$$d_handleMouseFocus);
        $addHandler($p0, 'mouseout', this.$$d_handleMouseBlur);
        $addHandler($p0, 'focus', this.$$d_handleTabFocus);
        $addHandler($p0, 'blur', this.$$d_handleTabBlur);
    },
    
    onEnabledChanged: function CUI_Controls_Button$onEnabledChanged($p0) {
        CUI.Utility.setEnabledOnElement(this.$E_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$8_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$A_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$R_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$c_1, $p0);
        if (!$p0) {
            this.$1N_1();
        }
    },
    
    get_$8X_0: function CUI_Controls_Button$get_$8X_0() {ULSpEN:;
        return 'Button';
    },
    
    $9Z_0: function CUI_Controls_Button$$9Z_0() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$5_0.Command)) {
            var $v_0 = this.pollForStateAndUpdateInternal(this.get_$1_1().Command, this.get_$1_1().QueryCommand, this.get_stateProperties(), true);
            if (($v_0 & 2) > 0) {
                var $v_1 = this.get_stateProperties()['LabelText'];
                if (CUI.ScriptUtility.isNullOrUndefined($v_1)) {
                    $v_1 = this.get_$1_1().LabelText;
                    this.get_stateProperties()['LabelText'] = this.get_$1_1().LabelText;
                }
                if (this.$1k_1 !== $v_1) {
                    if (!CUI.ScriptUtility.isNullOrUndefined(this.$2F_1)) {
                        this.$2F_1.innerHTML = CUI.Utility.$75($v_1, false);
                    }
                    if (!CUI.ScriptUtility.isNullOrUndefined(this.$n_1)) {
                        CUI.Utility.$1r(this.$n_1, $v_1);
                    }
                    if (!CUI.ScriptUtility.isNullOrUndefined(this.$4B_1)) {
                        CUI.Utility.$1r(this.$4B_1, $v_1);
                    }
                    if (!CUI.ScriptUtility.isNullOrUndefined(this.$4C_1)) {
                        CUI.Utility.$1r(this.$4C_1, $v_1);
                    }
                    this.$0_0.$2C_1 = true;
                    this.$1k_1 = $v_1;
                }
                var $v_2 = CUI.Utility.$2k(this.get_stateProperties()['Image32by32Class'], this.get_$1_1().Image32by32Class);
                var $v_3 = CUI.Utility.$2k(this.get_stateProperties()['Image16by16Class'], this.get_$1_1().Image16by16Class);
                CUI.Utility.$27(this.$2V_1, $v_2);
                CUI.Utility.$27(this.$2W_1, $v_3);
                CUI.Utility.$27(this.$2X_1, $v_3);
                CUI.Utility.$27(this.$54_1, $v_3);
                CUI.Utility.$27(this.$55_1, $v_2);
            }
        }
    },
    
    getTextValue: function CUI_Controls_Button$getTextValue() {ULSpEN:;
        return this.$1k_1;
    },
    
    receiveFocus: function CUI_Controls_Button$receiveFocus() {ULSpEN:;
        this.onBeginFocus();
        var $v_0 = this.get_displayedComponent();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return;
        }
        ($v_0).set_$1A_2(true);
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$R_1)) {
            this.$R_1.focus();
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$c_1)) {
            this.$c_1.focus();
        }
    },
    
    getDropDownDOMElementForDisplayMode: function CUI_Controls_Button$getDropDownDOMElementForDisplayMode($p0) {
        var $v_0;
        switch ($p0) {
            case 'Large':
                $v_0 = this.$64_1;
                break;
            case 'Medium':
                $v_0 = this.$65_1;
                break;
            case 'Small':
                $v_0 = this.$66_1;
                break;
            case 'Menu':
                $v_0 = this.$1v_1;
                break;
            case 'Text':
                $v_0 = this.$1Q_1;
                break;
            default:
                $v_0 = CUI.Utility.$2('span');
                break;
        }
        if ($v_0) {
            return $v_0;
        }
        return this.$8b_1($p0);
    },
    
    $8b_1: function CUI_Controls_Button$$8b_1($p0) {
        var $v_0;
        switch ($p0) {
            case 'Large':
                $v_0 = this.$2h_1($p0, false).cloneNode(true);
                this.$E_1 = null;
                $v_0.style.height = 'auto';
                $v_0.childNodes[1].style.height = 'auto';
                this.$64_1 = $v_0;
                break;
            case 'Medium':
                $v_0 = this.$2h_1($p0, false).cloneNode(true);
                this.$8_1 = null;
                this.$65_1 = $v_0;
                break;
            case 'Small':
                $v_0 = this.$2h_1($p0, false).cloneNode(true);
                this.$A_1 = null;
                this.$66_1 = $v_0;
                break;
            case 'Menu':
                this.$1v_1 = this.$2h_1('Menu', false).cloneNode(true);
                this.$R_1 = null;
                return this.$1v_1;
            case 'Text':
                var $v_1 = CUI.Utility.$2('a');
                CUI.Utility.$1p($v_1);
                this.$1Q_1 = CUI.Utility.$2('span');
                this.$1Q_1.className = 'ms-cui-textmenuitem';
                CUI.UIUtility.setInnerText($v_1, this.get_$1_1().LabelText);
                this.$1Q_1.appendChild($v_1);
                return this.$1Q_1;
            default:
                this.ensureValidDisplayMode($p0);
                return null;
        }
        return $v_0;
    },
    
    deselect: function CUI_Controls_Button$deselect() {
    },
    
    getMenuItemId: function CUI_Controls_Button$getMenuItemId() {ULSpEN:;
        return this.$20_1;
    },
    
    getCommandValueId: function CUI_Controls_Button$getCommandValueId() {ULSpEN:;
        return this.$t_1;
    },
    
    $7d_0: function CUI_Controls_Button$$7d_0() {ULSpEN:;
        if (!this.get_enabled() || !this.get_$5m_0()) {
            return false;
        }
        this.get_displayedComponent().get_$3_0().focus();
        return true;
    },
    
    focusOnDisplayedComponent: function CUI_Controls_Button$focusOnDisplayedComponent() {ULSpEN:;
        this.receiveFocus();
    },
    
    onClick: function CUI_Controls_Button$onClick($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(CUI.PMetrics)) {
            CUI.PMetrics.perfMark(7700);
        }
        $p0.preventDefault();
        $p0.stopPropagation();
        this.$Y_0();
        if (!this.get_enabled()) {
            return;
        }
        this.$0_0.set_$3u_1(this);
        var $v_0 = 1;
        var $v_1 = this.get_stateProperties();
        var $v_2 = this.get_$1_1().CommandType;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_2) && $v_2 === 'OptionSelection') {
            $v_0 = 3;
        }
        $v_1['CommandValueId'] = this.$t_1;
        $v_1['MenuItemId'] = this.$20_1;
        $v_1['SourceControlId'] = this.$4_0;
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_1().Command, $v_0, $v_1);
        if (!CUI.ScriptUtility.isNullOrUndefined(CUI.PMetrics)) {
            CUI.PMetrics.perfMark(7701);
        }
    },
    
    handleMouseFocus: function CUI_Controls_Button$handleMouseFocus($p0) {
        this.onBeginFocus();
        if (!this.get_enabled()) {
            return;
        }
        var $v_0 = this.get_displayedComponent();
        if (CUI.MenuItem.isInstanceOfType($v_0)) {
            ($v_0).set_$1A_2(true);
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_1().CommandPreview)) {
            return;
        }
        var $v_1 = this.get_stateProperties();
        $v_1['CommandValueId'] = this.$t_1;
        $v_1['MenuItemId'] = this.$20_1;
        var $v_2 = 5;
        var $v_3 = this.get_$1_1().CommandType;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_3) && $v_3 === 'OptionSelection') {
            $v_2 = 7;
        }
        $v_0.raiseCommandEvent(this.get_$1_1().CommandPreview, $v_2, $v_1);
    },
    
    handleMouseBlur: function CUI_Controls_Button$handleMouseBlur($p0) {
        this.$1N_1();
        this.onEndFocus();
        if (!this.get_enabled()) {
            return;
        }
        var $v_0 = this.get_displayedComponent();
        if (CUI.MenuItem.isInstanceOfType($v_0)) {
            ($v_0).set_$1A_2(false);
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_1().CommandRevert)) {
            return;
        }
        var $v_1 = 6;
        var $v_2 = this.get_stateProperties();
        $v_2['CommandValueId'] = this.$t_1;
        $v_2['MenuItemId'] = this.$20_1;
        var $v_3 = this.get_$1_1().CommandType;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_3) && $v_3 === 'OptionSelection') {
            $v_1 = 8;
        }
        $v_0.raiseCommandEvent(this.get_$1_1().CommandRevert, $v_1, $v_2);
    },
    
    handleTabFocus: function CUI_Controls_Button$handleTabFocus($p0) {
        this.onBeginFocus();
        var $v_0 = this.get_displayedComponent();
        if (CUI.MenuItem.isInstanceOfType($v_0)) {
            ($v_0).set_$1A_2(true);
            this.$3D_1(this.get_enabled());
        }
        else if (this.get_enabled()) {
            this.$0_0.set_$l_1(this);
        }
    },
    
    handleTabBlur: function CUI_Controls_Button$handleTabBlur($p0) {
        this.$1N_1();
        this.onEndFocus();
        if (!this.get_enabled()) {
            return;
        }
        var $v_0 = this.get_displayedComponent();
        if (CUI.MenuItem.isInstanceOfType($v_0)) {
            ($v_0).set_$1A_2(false);
        }
    },
    
    onMenuClosed: function CUI_Controls_Button$onMenuClosed() {ULSpEN:;
        this.$1N_1();
        this.$Y_0();
    },
    
    $1N_1: function CUI_Controls_Button$$1N_1() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$E_1)) {
            CUI.Utility.removeCSSClassFromElement(this.$E_1, 'ms-cui-ctl-hoveredOver');
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$8_1)) {
            CUI.Utility.removeCSSClassFromElement(this.$8_1, 'ms-cui-ctl-hoveredOver');
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$A_1)) {
            CUI.Utility.removeCSSClassFromElement(this.$A_1, 'ms-cui-ctl-hoveredOver');
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$R_1)) {
            CUI.Utility.removeCSSClassFromElement(this.$R_1, 'ms-cui-ctl-hoveredOver');
            CUI.Utility.removeCSSClassFromElement(this.$R_1, 'ms-cui-ctl-disabledHoveredOver');
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$c_1)) {
            CUI.Utility.removeCSSClassFromElement(this.$c_1, 'ms-cui-ctl-hoveredOver');
            CUI.Utility.removeCSSClassFromElement(this.$c_1, 'ms-cui-ctl-disabledHoveredOver');
        }
    },
    
    $3D_1: function CUI_Controls_Button$$3D_1($p0) {
        var $v_0 = 'ms-cui-ctl-hoveredOver';
        if (!$p0) {
            $v_0 = 'ms-cui-ctl-disabledHoveredOver';
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$R_1)) {
                CUI.Utility.ensureCSSClassOnElement(this.$R_1, $v_0);
            }
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$c_1)) {
                CUI.Utility.ensureCSSClassOnElement(this.$c_1, $v_0);
            }
        }
        else {
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$E_1)) {
                CUI.Utility.ensureCSSClassOnElement(this.$E_1, $v_0);
            }
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$8_1)) {
                CUI.Utility.ensureCSSClassOnElement(this.$8_1, $v_0);
            }
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$A_1)) {
                CUI.Utility.ensureCSSClassOnElement(this.$A_1, $v_0);
            }
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$R_1)) {
                CUI.Utility.ensureCSSClassOnElement(this.$R_1, $v_0);
            }
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$c_1)) {
                CUI.Utility.ensureCSSClassOnElement(this.$c_1, $v_0);
            }
        }
    },
    
    dispose: function CUI_Controls_Button$dispose() {ULSpEN:;
        CUI.Control.prototype.dispose.call(this);
        this.$E_1 = null;
        this.$2F_1 = null;
        this.$2V_1 = null;
        this.$8_1 = null;
        this.$n_1 = null;
        this.$2W_1 = null;
        this.$A_1 = null;
        this.$2X_1 = null;
        this.$R_1 = null;
        this.$4B_1 = null;
        this.$54_1 = null;
        this.$c_1 = null;
        this.$4C_1 = null;
        this.$55_1 = null;
        this.$20_1 = null;
        this.$t_1 = null;
        this.$64_1 = null;
        this.$65_1 = null;
        this.$66_1 = null;
        this.$1v_1 = null;
        this.$1Q_1 = null;
        this.$1k_1 = null;
    },
    
    get_$1_1: function CUI_Controls_Button$get_$1_1() {ULSpEN:;
        return this.$5_0;
    }
}


CUI.Controls.CheckBoxCommandProperties = function CUI_Controls_CheckBoxCommandProperties() {
}


CUI.Controls.CheckBox = function CUI_Controls_CheckBox($p0, $p1, $p2) {
    this.$$d_$9R_2 = Function.createDelegate(this, this.$9R_2);
    this.$$d_$9O_2 = Function.createDelegate(this, this.$9O_2);
    this.$$d_$5e_2 = Function.createDelegate(this, this.$5e_2);
    this.$$d_$5f_2 = Function.createDelegate(this, this.$5f_2);
    this.$$d_$4h_2 = Function.createDelegate(this, this.$4h_2);
    this.$$d_$3w_2 = Function.createDelegate(this, this.$3w_2);
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    CUI.Controls.CheckBox.initializeBase(this, [ $p0, $p1, $p2 ]);
}
CUI.Controls.CheckBox.prototype = {
    $A_2: null,
    $13_2: null,
    $8_2: null,
    $v_2: null,
    $n_2: null,
    
    createDOMElementForDisplayMode: function CUI_Controls_CheckBox$createDOMElementForDisplayMode($p0) {
        var $v_0 = (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_2().Alt)) ? this.get_$1_2().LabelText : this.get_$1_2().Alt;
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = '';
        }
        switch ($p0) {
            case 'Small':
                this.$A_2 = CUI.Utility.$2('span');
                this.$A_2.className = 'ms-cui-cbx';
                this.$A_2.setAttribute('mscui:controltype', this.get_$8X_0());
                this.$13_2 = CUI.Utility.$2('input');
                this.$13_2.type = 'checkbox';
                this.$13_2.className = 'ms-cui-cbx-input';
                this.$13_2.id = this._id + '-Small-checkbox';
                if (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_2().ToolTipTitle)) {
                    this.$13_2.title = $v_0;
                }
                this.$13_2.setAttribute('role', this.get_$2N_0());
                CUI.Utility.$1Z(this.get_$1_2(), this.$13_2);
                this.$P_2(this.$13_2, null);
                this.$A_2.appendChild(this.$13_2);
                return this.$A_2;
            case 'Medium':
                this.$8_2 = CUI.Utility.$2('span');
                this.$8_2.className = 'ms-cui-cbx';
                this.$8_2.setAttribute('mscui:controltype', this.get_$8X_0());
                this.$v_2 = CUI.Utility.$2('input');
                this.$v_2.type = 'checkbox';
                this.$v_2.className = 'ms-cui-cbx-input';
                this.$v_2.id = this._id + '-Medium-checkbox';
                if (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_2().ToolTipTitle)) {
                    this.$v_2.title = $v_0;
                }
                this.$v_2.setAttribute('role', this.get_$2N_0());
                CUI.Utility.$1Z(this.get_$1_2(), this.$v_2);
                var $v_1 = false;
                if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$1_2().LabelText)) {
                    this.$n_2 = CUI.Utility.$2('label');
                    if (CUI.Utility.$3F()) {
                        this.$n_2.setAttribute('htmlFor', this._id + '-Medium-checkbox');
                    }
                    else {
                        this.$n_2.setAttribute('for', this._id + '-Medium-checkbox');
                    }
                    CUI.Utility.$1r(this.$n_2, this.get_$1_2().LabelText);
                    $v_1 = true;
                }
                this.$P_2(this.$v_2, this.$n_2);
                this.$8_2.appendChild(this.$v_2);
                if ($v_1) {
                    this.$8_2.appendChild(this.$n_2);
                }
                return this.$8_2;
            default:
                this.ensureValidDisplayMode($p0);
                return null;
        }
    },
    
    $AG_0: function CUI_Controls_CheckBox$$AG_0($p0) {
        var $v_0 = $get(this.$4_0 + '-' + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
            case 'Medium':
                this.$8_2 = $v_0;
                this.$v_2 = $v_0.firstChild;
                this.$n_2 = $v_0.childNodes[1];
                break;
            case 'Small':
                this.$A_2 = $v_0;
                this.$13_2 = $v_0.firstChild;
                break;
        }
    },
    
    $AH_0: function CUI_Controls_CheckBox$$AH_0($p0) {
        switch ($p0) {
            case 'Medium':
                this.$P_2(this.$v_2, this.$n_2);
                break;
            case 'Small':
                this.$P_2(this.$13_2, null);
                break;
        }
    },
    
    $P_2: function CUI_Controls_CheckBox$$P_2($p0, $p1) {
        $addHandler($p0, 'click', this.$$d_onClick);
        $addHandler($p0, 'focus', this.$$d_$3w_2);
        $addHandler($p0, 'blur', this.$$d_$4h_2);
        $addHandler($p0, 'mouseover', this.$$d_$5f_2);
        $addHandler($p0, 'mouseout', this.$$d_$5e_2);
        $addHandler($p0, 'keydown', this.$$d_$9O_2);
        if (!CUI.ScriptUtility.isNullOrUndefined($p1)) {
            $addHandler($p1, 'click', this.$$d_$9R_2);
            $addHandler($p1, 'keydown', this.$$d_$9O_2);
            $addHandler($p1, 'mouseover', this.$$d_$5f_2);
            $addHandler($p1, 'mouseout', this.$$d_$5e_2);
        }
    },
    
    onEnabledChanged: function CUI_Controls_CheckBox$onEnabledChanged($p0) {
        if ($p0) {
            CUI.Utility.enableElement(this.$A_2);
            CUI.Utility.enableElement(this.$8_2);
        }
        else {
            CUI.Utility.disableElement(this.$A_2);
            CUI.Utility.disableElement(this.$8_2);
        }
        CUI.Utility.setDisabledAttribute(this.$13_2, !$p0);
        CUI.Utility.setDisabledAttribute(this.$v_2, !$p0);
    },
    
    get_$8X_0: function CUI_Controls_CheckBox$get_$8X_0() {ULSpEN:;
        return 'CheckBox';
    },
    
    get_$2N_0: function CUI_Controls_CheckBox$get_$2N_0() {ULSpEN:;
        return 'checkbox';
    },
    
    onClick: function CUI_Controls_CheckBox$onClick($p0) {
        this.$Y_0();
        if (!this.get_enabled()) {
            return;
        }
        var $v_0 = 9;
        var $v_1 = this.get_displayedComponent();
        switch ($v_1.get_displayMode()) {
            case 'Small':
                this.get_stateProperties()['On'] = this.$13_2.checked;
                break;
            case 'Medium':
                this.get_stateProperties()['On'] = this.$v_2.checked;
                break;
            default:
                this.ensureValidDisplayMode($v_1.get_displayMode());
                return;
        }
        $v_1.raiseCommandEvent(this.get_$1_2().Command, $v_0, this.get_stateProperties());
        if (this.$0_0.get_$4i_1()) {
            this.$9Z_0();
        }
        else {
            this.setState(this.get_stateProperties()['On']);
        }
    },
    
    $3w_2: function CUI_Controls_CheckBox$$3w_2($p0) {
        this.onBeginFocus();
        if (!this.get_enabled()) {
            return;
        }
        this.$0_0.set_$l_1(this);
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_2().CommandPreview)) {
            return;
        }
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_2().CommandPreview, 5, this.get_stateProperties());
    },
    
    $9O_2: function CUI_Controls_CheckBox$$9O_2($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined($p0)) {
            if ($p0.keyCode === 13) {
                this.$9R_2($p0);
            }
        }
    },
    
    $5f_2: function CUI_Controls_CheckBox$$5f_2($p0) {
        this.onBeginFocus();
        if (!this.get_enabled()) {
            return;
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_2().CommandPreview)) {
            return;
        }
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_2().CommandPreview, 5, this.get_stateProperties());
    },
    
    $4h_2: function CUI_Controls_CheckBox$$4h_2($p0) {
        this.onEndFocus();
        if (!this.get_enabled()) {
            return;
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_2().CommandRevert)) {
            return;
        }
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_2().CommandRevert, 6, this.get_stateProperties());
    },
    
    $5e_2: function CUI_Controls_CheckBox$$5e_2($p0) {
        this.onEndFocus();
        if (!this.get_enabled()) {
            return;
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_2().CommandRevert)) {
            return;
        }
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_2().CommandRevert, 6, this.get_stateProperties());
    },
    
    $9R_2: function CUI_Controls_CheckBox$$9R_2($p0) {
        $p0.preventDefault();
        this.$Y_0();
        if (!this.get_enabled()) {
            return;
        }
        this.$0_0.set_$l_1(this);
        this.setState(!this.$v_2.checked);
        this.onClick($p0);
    },
    
    setState: function CUI_Controls_CheckBox$setState($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$13_2)) {
            this.$13_2.checked = $p0;
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$v_2)) {
            this.$v_2.checked = $p0;
        }
    },
    
    $9Z_0: function CUI_Controls_CheckBox$$9Z_0() {ULSpEN:;
        var $v_0 = this.pollForStateAndUpdateInternal(this.get_$1_2().Command, this.get_$1_2().QueryCommand, this.get_stateProperties(), true);
        if (($v_0 & 2) > 0) {
            this.setState(this.get_stateProperties()['On']);
        }
    },
    
    addDisplayModes: function CUI_Controls_CheckBox$addDisplayModes() {ULSpEN:;
        this.addDisplayMode('Small');
        this.addDisplayMode('Medium');
    },
    
    $7d_0: function CUI_Controls_CheckBox$$7d_0() {ULSpEN:;
        if (!this.get_enabled()) {
            return false;
        }
        var $v_0 = this.get_displayedComponent().get_$3_0();
        $v_0.firstChild.focus();
        return true;
    },
    
    dispose: function CUI_Controls_CheckBox$dispose() {ULSpEN:;
        CUI.Controls.ToggleButton.prototype.dispose.call(this);
        this.$8_2 = null;
        this.$v_2 = null;
        this.$n_2 = null;
        this.$A_2 = null;
        this.$13_2 = null;
    },
    
    get_$1_2: function CUI_Controls_CheckBox$get_$1_2() {ULSpEN:;
        return this.$5_0;
    }
}


CUI.Controls.ColorPickerCommandProperties = function CUI_Controls_ColorPickerCommandProperties() {
}


CUI.Controls.ColorPicker = function CUI_Controls_ColorPicker($p0, $p1, $p2, $p3) {
    this.$$d_$9L_1 = Function.createDelegate(this, this.$9L_1);
    this.$$d_$Bo_1 = Function.createDelegate(this, this.$Bo_1);
    this.$$d_$9N_1 = Function.createDelegate(this, this.$9N_1);
    this.$$d_$9M_1 = Function.createDelegate(this, this.$9M_1);
    CUI.Controls.ColorPicker.initializeBase(this, [ $p0, $p1, $p2 ]);
    this.addDisplayMode('Menu');
    this.$7k_1 = $p3;
}
CUI.Controls.ColorPicker.prototype = {
    $7k_1: null,
    
    createComponentForDisplayModeInternal: function CUI_Controls_ColorPicker$createComponentForDisplayModeInternal($p0) {
        if (this.$Z_0.length > 0) {
            throw Error.create('Only one ControlComponent can be created for each ColorPicker Control');
        }
        var $v_0;
        $v_0 = this.$0_0.$3s_1(this.$4_0 + '-' + $p0 + this.$0_0.$2A_1(), $p0, this);
        return $v_0;
    },
    
    get_$8X_0: function CUI_Controls_ColorPicker$get_$8X_0() {ULSpEN:;
        return 'ColorPicker';
    },
    
    $2S_1: null,
    
    $A9_1: function CUI_Controls_ColorPicker$$A9_1($p0, $p1) {
        var $v_0 = null;
        var $v_1 = $p0.ownerDocument;
        var $v_2 = 0;
        var $v_3 = $p1.length / 10;
        for (var $v_4 = 0; $v_4 < $p1.length; $v_4++) {
            if (!($v_4 % 10)) {
                $v_0 = $v_1.createElement('tr');
                $p0.appendChild($v_0);
                $v_2++;
            }
            var $v_5 = $v_1.createElement('td');
            $v_5.className = 'ms-cui-colorpicker-cell';
            $v_5.setAttribute('arrayPosition', $v_4);
            if ($v_2 === 1) {
                $v_5.style.padding = '2px';
                $v_5.style.height = '16px';
            }
            $v_0.appendChild($v_5);
            var $v_6 = $v_1.createElement('a');
            $v_6.href = 'javascript:';
            var $v_7 = $p1[$v_4].Title;
            $v_6.title = $v_7;
            $v_6.className = 'ms-cui-colorpicker-cell-a';
            $addHandler($v_6, 'focus', this.$$d_$9M_1);
            var $v_8 = $v_1.createElement('div');
            var $v_9 = $p1[$v_4].DisplayColor;
            $v_8.style.backgroundColor = $v_9;
            $v_8.className = 'ms-cui-colorpicker-celldiv';
            var $v_A = 13;
            if ($v_2 === 1 || $v_2 === 2) {
                $v_8.style.borderTopWidth = '1px';
                $v_A--;
            }
            if ($v_2 === 1 || $v_2 === $v_3) {
                $v_8.style.borderBottomWidth = '1px';
                $v_A--;
            }
            if ($v_A !== 13) {
                $v_8.style.height = $v_A + 'px';
            }
            var $v_B = $v_1.createElement('div');
            $v_B.className = 'ms-cui-colorpicker-cellinternaldiv';
            $addHandler($v_6, 'mouseover', this.$$d_$9N_1);
            $addHandler($v_6, 'mouseout', this.$$d_$Bo_1);
            $addHandler($v_6, 'click', this.$$d_$9L_1);
            $v_5.appendChild($v_6);
            $v_6.appendChild($v_8);
            $v_8.appendChild($v_B);
            $v_5.colorPickerCssClass = $p1[$v_4];
            Array.add(this.$2S_1, $v_5);
        }
    },
    
    createDOMElementForDisplayMode: function CUI_Controls_ColorPicker$createDOMElementForDisplayMode($p0) {
        switch ($p0) {
            case 'Menu':
                var $v_0 = this.$0_0.get_element().ownerDocument;
                var $v_1 = $v_0.createElement('table');
                if (this.$0_0._textDirection === 1) {
                    $v_1.dir = 'rtl';
                }
                else {
                    $v_1.dir = 'ltr';
                }
                $v_1.className = 'ms-cui-smenu-inner';
                $v_1.setAttribute('cellSpacing', '0');
                $v_1.setAttribute('cellPadding', '0');
                $v_1.setAttribute('mscui:controltype', this.get_$8X_0());
                this.$2S_1 = [];
                var $v_2 = $v_0.createElement('tbody');
                this.$A9_1($v_2, this.$7k_1);
                $v_1.appendChild($v_2);
                CUI.Utility.$1s($v_1, true, true);
                return $v_1;
            default:
                this.ensureValidDisplayMode($p0);
                break;
        }
        return null;
    },
    
    onEnabledChanged: function CUI_Controls_ColorPicker$onEnabledChanged($p0) {
    },
    
    $9L_1: function CUI_Controls_ColorPicker$$9L_1($p0) {
        $p0.preventDefault();
        if (!this.get_enabled()) {
            return;
        }
        var $v_0 = $p0.target;
        var $v_1 = CUI.Utility.$7B($v_0, 'td');
        var $v_2 = this.$8w_1($v_1);
        this.$6t_1();
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_1().Command, 1, $v_2);
    },
    
    $8w_1: function CUI_Controls_ColorPicker$$8w_1($p0) {
        var $v_0 = $p0.colorPickerCssClass;
        var $v_1 = new CUI.Controls.ColorPickerResult();
        $v_1.Color = $v_0.Color;
        $v_1.Style = $v_0.Style;
        return $v_1;
    },
    
    $9N_1: function CUI_Controls_ColorPicker$$9N_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        var $v_0 = CUI.Utility.$7B($p0.target, 'td');
        this.$7E_1($v_0, false);
    },
    
    $9M_1: function CUI_Controls_ColorPicker$$9M_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        var $v_0 = CUI.Utility.$7B($p0.target, 'td');
        this.$7E_1($v_0, false);
    },
    
    $Bo_1: function CUI_Controls_ColorPicker$$Bo_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        this.$5h_1();
        CUI.Controls.ColorPicker.$7 = -10;
    },
    
    $3I_1: false,
    $7Q_1: null,
    
    $7E_1: function CUI_Controls_ColorPicker$$7E_1($p0, $p1) {
        var $v_0 = parseInt($p0.getAttribute('arrayPosition'));
        if (CUI.Controls.ColorPicker.$7 === $v_0) {
            return;
        }
        CUI.Controls.ColorPicker.$7 = $v_0;
        this.$9h_1($p0);
        this.$AE_1($p0, $p1);
    },
    
    $AE_1: function CUI_Controls_ColorPicker$$AE_1($p0, $p1) {
        this.$5h_1();
        Sys.UI.DomElement.addCssClass($p0, 'ms-cui-colorpicker-hoveredOver');
        this.$7H_1 = $p0;
        if ($p1 && $p0.firstChild) {
            $p0.firstChild.focus();
        }
    },
    
    $7H_1: null,
    
    $5h_1: function CUI_Controls_ColorPicker$$5h_1() {ULSpEN:;
        if (this.$7H_1) {
            this.$7H_1.className = 'ms-cui-colorpicker-cell';
        }
    },
    
    receiveFocus: function CUI_Controls_ColorPicker$receiveFocus() {ULSpEN:;
        this.$7c_1(0);
    },
    
    $7c_1: function CUI_Controls_ColorPicker$$7c_1($p0) {
        if (this.$2S_1 && this.$2S_1.length > $p0) {
            var $v_0 = this.$2S_1[$p0];
            this.$7E_1($v_0, true);
        }
    },
    
    $6t_1: function CUI_Controls_ColorPicker$$6t_1() {ULSpEN:;
        this.$3I_1 = false;
        this.$7Q_1 = null;
    },
    
    $6z_1: function CUI_Controls_ColorPicker$$6z_1() {ULSpEN:;
        if (this.$3I_1 && !CUI.ScriptUtility.isNullOrEmptyString(this.get_$1_1().CommandRevert)) {
            this.get_displayedComponent().raiseCommandEvent(this.get_$1_1().CommandRevert, 6, this.$7Q_1);
        }
    },
    
    $9h_1: function CUI_Controls_ColorPicker$$9h_1($p0) {
        if (!CUI.ScriptUtility.isNullOrEmptyString(this.get_$1_1().CommandPreview)) {
            this.$3I_1 = true;
            var $v_0 = this.$8w_1($p0);
            this.$7Q_1 = $v_0;
            this.get_displayedComponent().raiseCommandEvent(this.get_$1_1().CommandPreview, 5, $v_0);
        }
    },
    
    get_$1_1: function CUI_Controls_ColorPicker$get_$1_1() {ULSpEN:;
        return this.$5_0;
    },
    
    onMenuClosed: function CUI_Controls_ColorPicker$onMenuClosed() {ULSpEN:;
        this.$6z_1();
    },
    
    $5T_0: function CUI_Controls_ColorPicker$$5T_0() {ULSpEN:;
        var $v_0 = 1;
        var $v_1 = window.event;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1) && ($v_1).keyCode === 38) {
            $v_0 = 10;
        }
        if (CUI.Controls.ColorPicker.$7 < 0) {
            CUI.Controls.ColorPicker.$7 += this.$2S_1.length + $v_0;
        }
        if (CUI.Controls.ColorPicker.$7 >= $v_0) {
            this.$7c_1(CUI.Controls.ColorPicker.$7 - $v_0);
            return true;
        }
        this.$5h_1();
        CUI.Controls.ColorPicker.$7 -= $v_0;
        return false;
    },
    
    $5S_0: function CUI_Controls_ColorPicker$$5S_0() {ULSpEN:;
        var $v_0 = 1;
        var $v_1 = window.event;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1) && ($v_1).keyCode === 40) {
            $v_0 = 10;
        }
        if (CUI.Controls.ColorPicker.$7 + $v_0 < 0) {
            CUI.Controls.ColorPicker.$7 = -1;
            $v_0 = 1;
        }
        if (CUI.Controls.ColorPicker.$7 + $v_0 < this.$2S_1.length) {
            this.$7c_1(CUI.Controls.ColorPicker.$7 + $v_0);
            return true;
        }
        this.$5h_1();
        CUI.Controls.ColorPicker.$7 -= this.$2S_1.length;
        return false;
    }
}


CUI.Controls.ComboBoxCommandProperties = function CUI_Controls_ComboBoxCommandProperties() {
}


CUI.Controls.ComboBox = function CUI_Controls_ComboBox($p0, $p1, $p2, $p3) {
    this.$$d_executeAutoComplete = Function.createDelegate(this, this.executeAutoComplete);
    this.$$d_onInputKeyDown = Function.createDelegate(this, this.onInputKeyDown);
    this.$$d_onInputBlur = Function.createDelegate(this, this.onInputBlur);
    this.$$d_onInputFocus = Function.createDelegate(this, this.onInputFocus);
    this.$4p_3 = 100;
    this.$3g_3 = -1;
    CUI.Controls.ComboBox.initializeBase(this, [ $p0, $p1, $p2, $p3 ]);
    if (CUI.ScriptUtility.isNullOrUndefined(this.get_cbProperties().AllowFreeForm)) {
        this.$5o_3 = false;
    }
    else {
        this.$5o_3 = this.get_cbProperties().AllowFreeForm.toLowerCase() === 'true';
    }
    if (CUI.ScriptUtility.isNullOrEmptyString(this.get_cbProperties().AutoComplete)) {
        this.get_cbProperties().AutoComplete = 'true';
    }
    if (!CUI.ScriptUtility.isNullOrEmptyString(this.get_cbProperties().AutoCompleteDelay)) {
        try {
            this.$4p_3 = parseInt(this.get_cbProperties().AutoCompleteDelay);
        }
        catch ($$e_4) {
            this.$4p_3 = 100;
        }
    }
}
CUI.Controls.ComboBox.prototype = {
    $8_3: null,
    $H_3: null,
    $I_3: null,
    $1x_3: null,
    $1y_3: null,
    $5o_3: false,
    
    createDOMElementForDisplayMode: function CUI_Controls_ComboBox$createDOMElementForDisplayMode($p0) {
        switch ($p0) {
            case 'Medium':
                var $v_0 = (CUI.ScriptUtility.isNullOrUndefined(this.get_cbProperties().Alt)) ? '' : this.get_cbProperties().Alt;
                var $v_1 = (CUI.ScriptUtility.isNullOrUndefined(this.get_cbProperties().AltArrow)) ? $v_0 : this.get_cbProperties().AltArrow;
                this.$8_3 = CUI.Utility.$2('span');
                this.$8_3.className = 'ms-cui-cb';
                this.$8_3.setAttribute('mscui:controltype', this.get_$8X_0());
                this.$H_3 = CUI.Utility.$6w('input');
                this.$H_3.setAttribute('name', this.get_cbProperties().Command);
                this.$H_3.type = 'text';
                this.$H_3.style.width = this.get_cbProperties().Width;
                this.$H_3.className = 'ms-cui-cb-input';
                this.$H_3.setAttribute('autocomplete', 'off');
                this.$H_3.id = this.get_cbProperties().Id;
                if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().ToolTipTitle)) {
                    this.$H_3.title = $v_0;
                }
                CUI.Utility.$7f(this.$H_3, (this.get_properties()).ImeEnabled);
                var $v_2 = this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.SelectedItemId];
                if (CUI.ScriptUtility.isNullOrUndefined($v_2)) {
                    $v_2 = this.get_cbProperties().InitialItem;
                }
                if (!CUI.ScriptUtility.isNullOrUndefined($v_2)) {
                    this.$2Q_2($v_2);
                }
                CUI.Utility.$1Z(this.get_properties(), this.$H_3);
                this.$I_3 = CUI.Utility.$2('a');
                CUI.Utility.ensureCSSClassOnElement(this.$I_3, 'ms-cui-dd-arrow-button');
                CUI.Utility.$1p(this.$I_3);
                this.$I_3.tabIndex = -1;
                this.$I_3.setAttribute('aria-haspopup', true);
                this.$1x_3 = CUI.Utility.$2('img');
                this.$1y_3 = CUI.Utility.$h(2, 1, this.$0_0.$5_1.ImageDownArrow, this.$0_0.$5_1.ImageDownArrowClass, this.$1x_3, true, false, this.$0_0.$5_1.ImageDownArrowTop, this.$0_0.$5_1.ImageDownArrowLeft);
                if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().ToolTipTitle)) {
                    this.$1x_3.alt = $v_1;
                    this.$I_3.title = $v_1;
                }
                this.$AH_0('Medium');
                this.$8_3.appendChild(this.$H_3);
                this.$8_3.appendChild(this.$I_3);
                this.$I_3.appendChild(this.$1y_3);
                return this.$8_3;
            default:
                this.ensureValidDisplayMode($p0);
                return null;
        }
    },
    
    $AG_0: function CUI_Controls_ComboBox$$AG_0($p0) {
        var $v_0 = $get(this.$4_0 + '-' + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId] = null;
        switch ($p0) {
            case 'Medium':
                this.$8_3 = $v_0;
                this.$H_3 = $v_0.childNodes[0];
                this.$I_3 = $v_0.childNodes[1];
                this.$1y_3 = this.$I_3.childNodes[0];
                this.$1x_3 = this.$1y_3.childNodes[0];
                CUI.Utility.$1s(this.$H_3, false, false);
                break;
        }
    },
    
    $AH_0: function CUI_Controls_ComboBox$$AH_0($p0) {
        switch ($p0) {
            case 'Medium':
                this.$P_3();
                break;
        }
    },
    
    $P_3: function CUI_Controls_ComboBox$$P_3() {ULSpEN:;
        $addHandler(this.$H_3, 'focus', this.$$d_onInputFocus);
        $addHandler(this.$H_3, 'blur', this.$$d_onInputBlur);
        $addHandler(this.$H_3, 'keydown', this.$$d_onInputKeyDown);
        $addHandler(this.$H_3, 'mouseup', CUI.Utility.get_returnFalseHandler());
        $addHandler(this.$I_3, 'mouseover', this.$$d_onArrowButtonFocus);
        $addHandler(this.$I_3, 'mouseout', this.$$d_onArrowButtonBlur);
        $addHandler(this.$I_3, 'click', this.$$d_onArrowButtonClick);
        $addHandler(this.$I_3, 'focus', this.$$d_onArrowButtonFocus);
        $addHandler(this.$I_3, 'blur', this.$$d_onArrowButtonBlur);
        $addHandler(this.$I_3, 'keypress', this.$$d_onArrowButtonKeyPress);
    },
    
    onEnabledChanged: function CUI_Controls_ComboBox$onEnabledChanged($p0) {
        if ($p0) {
            CUI.Utility.enableElement(this.$H_3);
            this.$H_3.disabled = false;
            CUI.Utility.enableElement(this.$8_3);
        }
        else {
            CUI.Utility.disableElement(this.$H_3);
            this.$H_3.disabled = true;
            CUI.Utility.disableElement(this.$8_3);
        }
        CUI.Controls.DropDown.prototype.onEnabledChanged.call(this, $p0);
    },
    
    get_$8X_0: function CUI_Controls_ComboBox$get_$8X_0() {ULSpEN:;
        return 'ComboBox';
    },
    
    get_$2N_0: function CUI_Controls_ComboBox$get_$2N_0() {ULSpEN:;
        return 'combobox';
    },
    
    $3e_3: null,
    
    get_menuItems: function CUI_Controls_ComboBox$get_menuItems() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$3e_3)) {
            this.$3e_3 = {};
        }
        return this.$3e_3;
    },
    set_menuItems: function CUI_Controls_ComboBox$set_menuItems($p0) {
        this.$3e_3 = $p0;
        return $p0;
    },
    
    getFirstMenuItemThatBeginsWith: function CUI_Controls_ComboBox$getFirstMenuItemThatBeginsWith($p0) {
        var $$dict_1 = this.$3e_3;
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            if ($v_0.key.toLowerCase().startsWith($p0.toLowerCase())) {
                return $v_0;
            }
        }
        return null;
    },
    
    $5I_3: null,
    
    onInputKeyDown: function CUI_Controls_ComboBox$onInputKeyDown($p0) {
        this.clearPendingAutoComplete();
        var $v_0 = this.$H_3.value;
        this.$Y_0();
        if ($p0 && $p0.rawEvent) {
            if (($p0.rawEvent).keyCode === 40 && $p0.altKey) {
                this.launchMenuInternal();
                return;
            }
        }
        if (CUI.ScriptUtility.isNullOrEmptyString($v_0)) {
            return;
        }
        if ($p0 && $p0.rawEvent) {
            var $v_1 = ($p0.rawEvent).keyCode;
            switch ($v_1) {
                case 13:
                    this.clearPendingAutoComplete();
                    $p0.preventDefault();
                    this.validateAndSave();
                    return;
                case 27:
                    this.clearPendingAutoComplete();
                    if (!this.$g_1) {
                        this.resetToPreviousValue();
                    }
                    return;
                case 38:
                    break;
                case 40:
                    if ($p0.altKey) {
                        this.launchMenuInternal();
                        return;
                    }
                    else {
                    }
                    break;
                case 8:
                case 127:
                case 46:
                    this.clearPendingAutoComplete();
                    this.$5I_3 = null;
                    return;
                case 36:
                case 35:
                case 33:
                case 34:
                case 37:
                case 39:
                case 16:
                case 18:
                case 17:
                case 20:
                    return;
            }
        }
        if (CUI.Utility.$o(this.get_cbProperties().AutoComplete)) {
            this.clearPendingAutoComplete();
            this.$3g_3 = window.setTimeout(this.$$d_executeAutoComplete, this.$4p_3);
        }
    },
    
    executeAutoComplete: function CUI_Controls_ComboBox$executeAutoComplete() {ULSpEN:;
        this.$3g_3 = -1;
        var $v_0 = this.$H_3.value;
        var $v_1 = this.getFirstMenuItemThatBeginsWith($v_0);
        if (!$v_1) {
            this.$5I_3 = null;
            return;
        }
        this.$H_3.value = $v_1.key;
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            var $v_2 = this.$H_3.createTextRange();
            $v_2.moveStart('character', $v_0.length);
            $v_2.moveEnd('character', this.$H_3.value.length);
            $v_2.select();
        }
        else {
            this.$H_3.setSelectionRange($v_0.length, this.$H_3.value.length);
        }
        this.$5I_3 = $v_1.value;
    },
    
    clearPendingAutoComplete: function CUI_Controls_ComboBox$clearPendingAutoComplete() {ULSpEN:;
        if (this.$3g_3 !== -1) {
            window.clearTimeout(this.$3g_3);
        }
        this.$3g_3 = -1;
    },
    
    $7d_0: function CUI_Controls_ComboBox$$7d_0() {ULSpEN:;
        if (!this.get_enabled()) {
            return false;
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$H_3)) {
            this.$H_3.focus();
            return true;
        }
        return false;
    },
    
    onInputFocus: function CUI_Controls_ComboBox$onInputFocus($p0) {
        this.$0_0.set_$l_1(this);
        this.onArrowButtonFocus($p0);
        if (CUI.Utility.$o(this.get_cbProperties().PopulateDynamically)) {
            this.pollForDynamicMenu(false);
        }
        CUI.Utility.$7X(this.$H_3);
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$B_1)) {
            this.$B_1.$1q_0();
        }
    },
    
    onInputBlur: function CUI_Controls_ComboBox$onInputBlur($p0) {
        this.clearPendingAutoComplete();
        this.onArrowButtonBlur($p0);
    },
    
    get_$5Y_3: function CUI_Controls_ComboBox$get_$5Y_3() {ULSpEN:;
        return this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.IsFreeForm];
    },
    set_$5Y_3: function CUI_Controls_ComboBox$set_$5Y_3($p0) {
        this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.IsFreeForm] = $p0;
        return $p0;
    },
    
    validateAndSave: function CUI_Controls_ComboBox$validateAndSave() {ULSpEN:;
        if (!this.$2Q_2(this.$5I_3)) {
            var $v_0 = this.get_displayedComponent();
            if (!CUI.Utility.$o(this.get_cbProperties().AutoComplete)) {
                var $v_1 = this.$3e_3[this.$H_3.value];
                if (!CUI.ScriptUtility.isNullOrEmptyString($v_1) && this.$2Q_2($v_1)) {
                    this.set_$5Y_3(false);
                    $v_0.raiseCommandEvent(this.get_cbProperties().Command, 3, { IsFreeForm: false, CommandValueId: this._selectedControl.getCommandValueId(), MenuItemId: $v_1 });
                    return;
                }
            }
            if (this.$5o_3) {
                this.set_$5Y_3(true);
                this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.Value] = this.$H_3.value;
                $v_0.raiseCommandEvent(this.get_cbProperties().Command, 3, { IsFreeForm: true, Value: this.$H_3.value });
            }
            else {
                this.resetToPreviousValue();
                return;
            }
        }
        else {
            this.set_$5Y_3(false);
            this.get_displayedComponent().raiseCommandEvent(this.get_cbProperties().Command, 3, { IsFreeForm: false, CommandValueId: this._selectedControl.getCommandValueId(), MenuItemId: this._selectedControl.getMenuItemId() });
        }
    },
    
    resetToPreviousValue: function CUI_Controls_ComboBox$resetToPreviousValue() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this._selectedControl)) {
            this.$H_3.value = (this._selectedControl).getTextValue();
        }
        else {
            this.$H_3.value = '';
        }
    },
    
    selectMenuItem: function CUI_Controls_ComboBox$selectMenuItem($p0) {
        if (this._selectedControl === $p0) {
            return;
        }
        this._selectedControl = $p0;
        this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.SelectedItemId] = $p0.getMenuItemId();
        var $v_0 = $p0;
        this.$H_3.value = $v_0.getTextValue();
    },
    
    $9Z_0: function CUI_Controls_ComboBox$$9Z_0() {ULSpEN:;
        var $v_0 = this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.SelectedItemId];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.SelectedItemId] = this.get_cbProperties().InitialItem;
        }
        var $v_1 = this.pollForStateAndUpdateInternal(this.get_cbProperties().Command, this.get_cbProperties().QueryCommand, this.get_stateProperties(), false);
        var $v_2 = this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.SelectedItemId];
        if (($v_1 & 2) > 0) {
            if (this.get_$5Y_3()) {
                this.$H_3.value = this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.Value];
                this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.SelectedItemId] = null;
            }
            else {
                if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
                    if ($v_0 !== $v_2 || !this._itemEverSelected) {
                        if (!this.$2Q_2($v_2)) {
                            throw Error.create('The menu item id requested via polling does not exist');
                        }
                    }
                }
                else {
                    if (!CUI.ScriptUtility.isNullOrUndefined(this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.Value])) {
                        this.$H_3.value = this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.Value];
                    }
                }
            }
        }
    },
    
    onDynamicMenuPopulated: function CUI_Controls_ComboBox$onDynamicMenuPopulated() {ULSpEN:;
        var $v_0 = null;
        var $v_1 = null;
        var $v_2 = null;
        var $v_3 = null;
        var $v_4 = null;
        var $v_5 = null;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$B_1)) {
            return;
        }
        var $$enum_6 = this.$B_1.$6_0.getEnumerator();
        while ($$enum_6.moveNext()) {
            var $v_6 = $$enum_6.get_current();
            var $$enum_8 = $v_6.$6_0.getEnumerator();
            while ($$enum_8.moveNext()) {
                var $v_7 = $$enum_8.get_current();
                if (CUI.MenuItem.isInstanceOfType($v_7)) {
                    $v_0 = $v_7;
                    $v_1 = $v_0.$L_1;
                    if (CUI.ISelectableControl.isInstanceOfType($v_1)) {
                        $v_2 = $v_1;
                        $v_4 = $v_2.getMenuItemId();
                    }
                    if (CUI.IMenuItem.isInstanceOfType($v_1)) {
                        $v_3 = $v_1;
                        $v_5 = $v_3.getTextValue();
                    }
                    if (!(CUI.ScriptUtility.isNullOrUndefined($v_4) || CUI.ScriptUtility.isNullOrUndefined($v_5))) {
                        this.get_menuItems()[$v_5] = $v_4;
                        $v_5 = null;
                        $v_4 = null;
                    }
                }
            }
        }
    },
    
    launchMenuInternal: function CUI_Controls_ComboBox$launchMenuInternal() {ULSpEN:;
        if (this.launchMenu(this.$H_3, this.$$d_sendMenuCreationCommandEvent)) {
            this.sendMenuCreationCommandEvent();
        }
    },
    
    dispose: function CUI_Controls_ComboBox$dispose() {ULSpEN:;
        CUI.Controls.DropDown.prototype.dispose.call(this);
        this.$8_3 = null;
        this.$1x_3 = null;
        this.$1y_3 = null;
        this.$I_3 = null;
        this.$H_3 = null;
    },
    
    get_cbProperties: function CUI_Controls_ComboBox$get_cbProperties() {ULSpEN:;
        return this.$5_0;
    }
}


CUI.Controls.DropDownCommandProperties = function CUI_Controls_DropDownCommandProperties() {
}


CUI.Controls.DropDown = function CUI_Controls_DropDown($p0, $p1, $p2, $p3) {
    this.$$d_onArrowButtonKeyboardFocus = Function.createDelegate(this, this.onArrowButtonKeyboardFocus);
    this.$$d_sendMenuCreationCommandEvent = Function.createDelegate(this, this.sendMenuCreationCommandEvent);
    this.$$d_onArrowButtonKeyPress = Function.createDelegate(this, this.onArrowButtonKeyPress);
    this.$$d_onArrowButtonClick = Function.createDelegate(this, this.onArrowButtonClick);
    this.$$d_onArrowButtonBlur = Function.createDelegate(this, this.onArrowButtonBlur);
    this.$$d_onArrowButtonFocus = Function.createDelegate(this, this.onArrowButtonFocus);
    CUI.Controls.DropDown.initializeBase(this, [ $p0, $p1, $p2, $p3 ]);
    this.addDisplayModes();
    this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId] = null;
    this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.Value] = null;
}
CUI.Controls.DropDown.prototype = {
    $8_2: null,
    $b_2: null,
    $I_2: null,
    $1x_2: null,
    $1y_2: null,
    
    $7d_0: function CUI_Controls_DropDown$$7d_0() {ULSpEN:;
        if (!this.get_enabled()) {
            return false;
        }
        this.$I_2.focus();
        return true;
    },
    
    createDOMElementForDisplayMode: function CUI_Controls_DropDown$createDOMElementForDisplayMode($p0) {
        var $v_0 = (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().Alt)) ? '' : this.get_properties().Alt;
        var $v_1 = (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().AltArrow)) ? $v_0 : this.get_properties().AltArrow;
        var $v_2 = true;
        if (CUI.ScriptUtility.isNullOrEmptyString($v_1) && !CUI.ScriptUtility.isNullOrUndefined(this.get_properties().ToolTipTitle)) {
            $v_1 = this.get_properties().ToolTipTitle;
        }
        var $v_3 = null;
        switch ($p0) {
            case 'Text':
            case 'Medium':
                this.$8_2 = CUI.Utility.$2('span');
                this.$8_2.className = 'ms-cui-dd';
                this.$8_2.setAttribute('mscui:controltype', this.get_$8X_0());
                this.$b_2 = CUI.Utility.$2('span');
                this.$b_2.className = 'ms-cui-dd-text';
                this.$b_2.style.width = this.get_properties().Width;
                var $v_4 = this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId];
                if (CUI.ScriptUtility.isNullOrUndefined($v_4)) {
                    $v_4 = this.get_properties().InitialItem;
                }
                if (!CUI.ScriptUtility.isNullOrUndefined($v_4)) {
                    this.$2Q_2($v_4);
                }
                this.$I_2 = CUI.Utility.$2('a');
                this.$I_2.setAttribute('role', this.get_$2N_0());
                this.$I_2.setAttribute('aria-haspopup', true);
                CUI.Utility.ensureCSSClassOnElement(this.$I_2, 'ms-cui-dd-arrow-button');
                CUI.Utility.$1Z(this.get_properties(), this.$I_2);
                CUI.Utility.$1p(this.$I_2);
                this.$I_2.id = this.$4_0;
                this.$1x_2 = CUI.Utility.$2('img');
                this.$1y_2 = CUI.Utility.$h(2, 1, this.$0_0.$5_1.ImageDownArrow, this.$0_0.$5_1.ImageDownArrowClass, this.$1x_2, true, false, this.$0_0.$5_1.ImageDownArrowTop, this.$0_0.$5_1.ImageDownArrowLeft);
                if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().ToolTipTitle)) {
                    this.$I_2.setAttribute('title', $v_1);
                    this.$b_2.title = $v_0;
                    this.$1x_2.alt = $v_1;
                    $v_2 = false;
                }
                this.$AH_0('Medium');
                this.$8_2.appendChild(this.$b_2);
                this.$8_2.appendChild(this.$I_2);
                this.$I_2.appendChild(this.$1y_2);
                if ($v_2) {
                    $v_3 = CUI.Utility.$28($v_1);
                    this.$I_2.appendChild($v_3);
                }
                return this.$8_2;
            default:
                this.ensureValidDisplayMode($p0);
                return null;
        }
    },
    
    $AG_0: function CUI_Controls_DropDown$$AG_0($p0) {
        var $v_0 = $get(this.$4_0 + '-' + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
            case 'Text':
            case 'Medium':
                this.$8_2 = $v_0;
                this.$b_2 = $v_0.childNodes[0];
                this.$I_2 = $v_0.childNodes[1];
                this.$1y_2 = this.$I_2.childNodes[0];
                this.$1x_2 = this.$1y_2.childNodes[0];
                break;
        }
    },
    
    $AH_0: function CUI_Controls_DropDown$$AH_0($p0) {
        switch ($p0) {
            case 'Text':
            case 'Medium':
                this.$P_2();
                break;
        }
    },
    
    $P_2: function CUI_Controls_DropDown$$P_2() {ULSpEN:;
        $addHandler(this.$8_2, 'click', this.$$d_onArrowButtonClick);
        $addHandler(this.$8_2, 'keypress', this.$$d_onArrowButtonKeyPress);
        $addHandler(this.$I_2, 'mouseover', this.$$d_onArrowButtonFocus);
        $addHandler(this.$I_2, 'mouseout', this.$$d_onArrowButtonBlur);
        $addHandler(this.$I_2, 'focus', this.$$d_onArrowButtonKeyboardFocus);
        $addHandler(this.$I_2, 'blur', this.$$d_onArrowButtonBlur);
    },
    
    onEnabledChanged: function CUI_Controls_DropDown$onEnabledChanged($p0) {
        if ($p0) {
            CUI.Utility.enableElement(this.$8_2);
        }
        else {
            CUI.Utility.disableElement(this.$8_2);
        }
    },
    
    get_$8X_0: function CUI_Controls_DropDown$get_$8X_0() {ULSpEN:;
        return 'DropDown';
    },
    
    $2j_0: function CUI_Controls_DropDown$$2j_0($p0) {
        if ($p0.$G_1 === 3) {
            var $v_0 = $p0.$36_1;
            if (!(CUI.ISelectableControl.isInstanceOfType($v_0.$L_1))) {
                return CUI.MenuLauncher.prototype.$2j_0.call(this, $p0);
            }
            var $v_1 = $v_0.$L_1;
            if (!CUI.ScriptUtility.isNullOrUndefined(this._selectedControl)) {
                this._selectedControl.deselect();
            }
            this.selectMenuItem($v_1);
        }
        if ($p0.$G_1 === 3 || $p0.$G_1 === 7 || $p0.$G_1 === 8) {
            var $v_2;
            var $v_3;
            switch ($p0.$G_1) {
                case 3:
                    $v_2 = this.get_properties().Command;
                    $v_3 = 1;
                    break;
                case 7:
                    $v_2 = this.get_properties().CommandPreview;
                    $v_3 = 5;
                    break;
                case 8:
                    $v_2 = this.get_properties().CommandRevert;
                    $v_3 = 6;
                    break;
                default:
                    $v_2 = this.get_properties().Command;
                    $v_3 = 1;
                    break;
            }
            this.get_displayedComponent().raiseCommandEvent($v_2, $v_3, $p0.$34_1);
            CUI.MenuLauncher.prototype.$2j_0.call(this, $p0);
            return false;
        }
        return CUI.MenuLauncher.prototype.$2j_0.call(this, $p0);
    },
    
    selectMenuItem: function CUI_Controls_DropDown$selectMenuItem($p0) {
        if (this._selectedControl === $p0) {
            return;
        }
        this._selectedControl = $p0;
        this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $p0.getMenuItemId();
        var $v_0;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().SelectedItemDisplayMode)) {
            $v_0 = 'Text';
        }
        else {
            $v_0 = this.get_properties().SelectedItemDisplayMode;
        }
        var $v_1;
        if ($v_0 === 'Text') {
            var $v_2 = $p0.getTextValue();
            $v_1 = CUI.Utility.$2('a');
            CUI.UIUtility.setInnerText($v_1, $v_2);
        }
        else {
            $v_1 = this._selectedControl.getDropDownDOMElementForDisplayMode($v_0);
        }
        if (this.$b_2.hasChildNodes()) {
            var $v_3 = this.$b_2.firstChild;
            this.$b_2.replaceChild($v_1, $v_3);
        }
        else {
            this.$b_2.appendChild($v_1);
        }
    },
    
    _itemEverSelected: false,
    
    $2Q_2: function CUI_Controls_DropDown$$2Q_2($p0) {
        if (CUI.ScriptUtility.isNullOrUndefined($p0) || CUI.ScriptUtility.isNullOrUndefined(this.$B_1)) {
            return false;
        }
        var $v_0 = this.$B_1.$8z_1($p0);
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return false;
        }
        this.selectMenuItem($v_0);
        this._itemEverSelected = true;
        return true;
    },
    
    addDisplayModes: function CUI_Controls_DropDown$addDisplayModes() {ULSpEN:;
        this.addDisplayMode('Medium');
        this.addDisplayMode('Text');
    },
    
    onArrowButtonClick: function CUI_Controls_DropDown$onArrowButtonClick($p0) {
        var $v_0 = this.get_enabled();
        if ($v_0) {
            CUI.PMetrics.perfMark(7192);
        }
        this.$Y_0();
        $p0.preventDefault();
        if (!$v_0) {
            return;
        }
        this.$0_0.set_$l_1(this);
        this.launchMenuInternal($p0);
        CUI.PMetrics.perfMark(7193);
    },
    
    launchMenuInternal: function CUI_Controls_DropDown$launchMenuInternal($p0) {
        if (this.launchMenu(this.$I_2, this.$$d_sendMenuCreationCommandEvent)) {
            this.sendMenuCreationCommandEvent();
        }
    },
    
    sendMenuCreationCommandEvent: function CUI_Controls_DropDown$sendMenuCreationCommandEvent() {ULSpEN:;
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().CommandMenuOpen, 4, null);
    },
    
    onBeginFocus: function CUI_Controls_DropDown$onBeginFocus() {ULSpEN:;
        var $v_0 = this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.Value];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            var $v_1 = this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId];
            if (CUI.ScriptUtility.isNullOrUndefined($v_1)) {
                $v_1 = this.get_properties().InitialItem;
            }
            if ((!CUI.ScriptUtility.isNullOrUndefined($v_1)) && (!CUI.ScriptUtility.isNullOrUndefined(this.$B_1))) {
                var $v_2 = this.$B_1.$8z_1($v_1);
                if (!CUI.ScriptUtility.isNullOrUndefined($v_2)) {
                    $v_0 = $v_2.getTextValue();
                }
            }
        }
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            this.get_properties().ToolTipSelectedItemTitle = $v_0;
        }
        CUI.Control.prototype.onBeginFocus.call(this);
    },
    
    onArrowButtonKeyboardFocus: function CUI_Controls_DropDown$onArrowButtonKeyboardFocus($p0) {
        this.$0_0.set_$l_1(this);
        this.onArrowButtonFocus($p0);
    },
    
    onArrowButtonFocus: function CUI_Controls_DropDown$onArrowButtonFocus($p0) {
        this.onBeginFocus();
        if (!this.get_enabled()) {
            return;
        }
        this.highlight();
    },
    
    onArrowButtonBlur: function CUI_Controls_DropDown$onArrowButtonBlur($p0) {
        this.onEndFocus();
        if (!this.get_enabled() || this.$g_1) {
            return;
        }
        this.removeHighlight();
    },
    
    onArrowButtonKeyPress: function CUI_Controls_DropDown$onArrowButtonKeyPress($p0) {
        this.$Y_0();
        if (!this.get_enabled()) {
            return;
        }
        var $v_0 = ($p0.rawEvent).keyCode;
        if ($v_0 === 13 || $v_0 === 32 || $v_0 === 40) {
            this.$17_1 = true;
            this.launchMenuInternal($p0);
        }
    },
    
    highlight: function CUI_Controls_DropDown$highlight() {ULSpEN:;
        CUI.Utility.ensureCSSClassOnElement(this.$I_2, 'ms-cui-ctl-light-hoveredOver');
    },
    
    removeHighlight: function CUI_Controls_DropDown$removeHighlight() {ULSpEN:;
        CUI.Utility.removeCSSClassFromElement(this.$I_2, 'ms-cui-ctl-light-hoveredOver');
    },
    
    onLaunchedMenuClosed: function CUI_Controls_DropDown$onLaunchedMenuClosed() {ULSpEN:;
        this.$Y_0();
        this.removeHighlight();
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().CommandMenuClose, 10, null);
        CUI.MenuLauncher.prototype.onLaunchedMenuClosed.call(this);
    },
    
    $9Z_0: function CUI_Controls_DropDown$$9Z_0() {ULSpEN:;
        var $v_0 = this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId] = this.get_properties().InitialItem;
        }
        this.pollForStateAndUpdateInternal(this.get_properties().Command, this.get_properties().QueryCommand, this.get_stateProperties(), false);
        var $v_1 = this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId];
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1)) {
            if ($v_0 !== $v_1 || !this._itemEverSelected) {
                if (!this.$2Q_2($v_1)) {
                    throw Error.create('The menu item id requested via polling does not exist');
                }
            }
        }
        else {
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.Value])) {
                var $v_2 = this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.Value];
                this.$b_2.innerHTML = '<a>' + CUI.Utility.$3E($v_2) + '</a>';
            }
        }
    },
    
    dispose: function CUI_Controls_DropDown$dispose() {ULSpEN:;
        CUI.MenuLauncher.prototype.dispose.call(this);
        this.$8_2 = null;
        this.$1x_2 = null;
        this.$1y_2 = null;
        this.$I_2 = null;
        this.$b_2 = null;
    },
    
    get_properties: function CUI_Controls_DropDown$get_properties() {ULSpEN:;
        return this.$5_0;
    }
}


CUI.Controls.FlyoutAnchorCommandProperties = function CUI_Controls_FlyoutAnchorCommandProperties() {
}


CUI.Controls.FlyoutAnchor = function CUI_Controls_FlyoutAnchor($p0, $p1, $p2, $p3) {
    this.$$d_$C0_2 = Function.createDelegate(this, this.$C0_2);
    this.$$d_$Bz_2 = Function.createDelegate(this, this.$Bz_2);
    this.$$d_$C1_2 = Function.createDelegate(this, this.$C1_2);
    this.$$d_$2g_2 = Function.createDelegate(this, this.$2g_2);
    this.$$d_$5e_2 = Function.createDelegate(this, this.$5e_2);
    this.$$d_$5f_2 = Function.createDelegate(this, this.$5f_2);
    this.$$d_$3w_2 = Function.createDelegate(this, this.$3w_2);
    this.$$d_$CA_2 = Function.createDelegate(this, this.$CA_2);
    this.$$d_$C9_2 = Function.createDelegate(this, this.$C9_2);
    this.$$d_$CH_2 = Function.createDelegate(this, this.$CH_2);
    this.$$d_$9Q_2 = Function.createDelegate(this, this.$9Q_2);
    this.$$d_$4h_2 = Function.createDelegate(this, this.$4h_2);
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    CUI.Controls.FlyoutAnchor.initializeBase(this, [ $p0, $p1, $p2, $p3 ]);
    this.addDisplayMode('Menu');
    this.addDisplayMode('Menu16');
    this.addDisplayMode('Menu32');
    this.addDisplayMode('Small');
    this.addDisplayMode('Medium');
    this.addDisplayMode('Large');
    this.addDisplayMode('Thin');
    this.$1k_2 = this.get_$1_2().LabelText;
    this.get_stateProperties()['LabelText'] = this.$1k_2;
}
CUI.Controls.FlyoutAnchor.prototype = {
    $56_2: null,
    $57_2: null,
    $3W_2: null,
    $4D_2: null,
    $67_2: null,
    $4E_2: null,
    $68_2: null,
    $e_2: null,
    $R_2: null,
    $c_2: null,
    $E_2: null,
    $7p_2: null,
    $2v_2: null,
    $2F_2: null,
    $8_2: null,
    $7q_2: null,
    $2w_2: null,
    $n_2: null,
    $A_2: null,
    $7r_2: null,
    $2y_2: null,
    $1J_2: null,
    $3Z_2: null,
    $4H_2: null,
    $1k_2: null,
    
    createDOMElementForDisplayMode: function CUI_Controls_FlyoutAnchor$createDOMElementForDisplayMode($p0) {
        var $v_0;
        var $v_1 = (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_2().Alt)) ? this.get_$1_2().LabelText : this.get_$1_2().Alt;
        switch ($p0) {
            case 'Menu':
                this.$e_2 = this.createMenuDOMElement('Menu', 'ms-cui-textmenuitem ms-cui-fa-menuitem ms-cui-ctl-menu', $v_1, null, null, null, null);
                this.$AH_0($p0);
                this.$e_2.setAttribute('aria-haspopup', true);
                return this.$e_2;
            case 'Menu16':
                this.$R_2 = this.createMenuDOMElement('Menu16', 'ms-cui-fa-menuitem ms-cui-ctl-menu', $v_1, this.get_$1_2().Image16by16, this.get_$1_2().Image16by16Class, this.get_$1_2().Image16by16Top, this.get_$1_2().Image16by16Left);
                this.$AH_0($p0);
                this.$R_2.setAttribute('aria-haspopup', true);
                return this.$R_2;
            case 'Menu32':
                this.$c_2 = this.createMenuDOMElement('Menu32', 'ms-cui-fa-menuitem ms-cui-ctl-menu', $v_1, this.get_$1_2().Image32by32, this.get_$1_2().Image32by32Class, this.get_$1_2().Image32by32Top, this.get_$1_2().Image32by32Left);
                this.$c_2.setAttribute('aria-haspopup', true);
                this.$AH_0($p0);
                return this.$c_2;
            case 'Large':
                var $$t_4, $$t_5, $$t_6;
                this.$E_2 = (($$t_6 = CUI.Control.createStandardControlDOMElement_OutParameters(this, this.$0_0, 'Large', this.get_$1_2(), false, true, ($$t_4 = {'val': this.$2F_2}), ($$t_5 = {'val': $v_0}))), this.$2F_2 = $$t_4.val, $v_0 = $$t_5.val, $$t_6);
                this.$E_2.setAttribute('aria-haspopup', true);
                if (this.$6C_2) {
                    CUI.Utility.ensureCSSClassOnElement(this.$E_2, 'ms-cui-ctl-large-groupPopup');
                }
                this.$AH_0('Large');
                return this.$E_2;
            case 'Medium':
                var $$t_7, $$t_8, $$t_9;
                this.$8_2 = (($$t_9 = CUI.Control.createStandardControlDOMElement_OutParameters(this, this.$0_0, 'Medium', this.get_$1_2(), false, true, ($$t_7 = {'val': this.$n_2}), ($$t_8 = {'val': $v_0}))), this.$n_2 = $$t_7.val, $v_0 = $$t_8.val, $$t_9);
                this.$AH_0('Medium');
                this.$8_2.setAttribute('aria-haspopup', true);
                return this.$8_2;
            case 'Small':
                this.$A_2 = CUI.Control.createStandardControlDOMElement(this, this.$0_0, 'Small', this.get_$1_2(), false, true);
                this.$AH_0('Small');
                this.$A_2.setAttribute('aria-haspopup', true);
                return this.$A_2;
            case 'Thin':
                this.$1J_2 = CUI.Utility.$4c();
                this.$1J_2.className = 'ms-cui-ctl-thin';
                this.$3Z_2 = CUI.Utility.$2('img');
                this.$3Z_2.alt = '';
                if (CUI.ScriptUtility.isNullOrEmptyString(this.get_$1_2().ToolTipTitle)) {
                    this.$1J_2.title = $v_1;
                    this.$3Z_2.alt = $v_1;
                }
                var $v_2 = this.$0_0;
                this.$4H_2 = CUI.Utility.$h(2, 1, $v_2.$5_1.ImageDownArrow, $v_2.$5_1.ImageDownArrowClass, this.$3Z_2, true, false, $v_2.$5_1.ImageDownArrowTop, $v_2.$5_1.ImageDownArrowLeft);
                this.$1J_2.appendChild(this.$4H_2);
                this.$1J_2.appendChild(CUI.Utility.$28($v_1));
                this.$AH_0('Thin');
                this.$1J_2.setAttribute('aria-haspopup', true);
                return this.$1J_2;
            default:
                this.ensureValidDisplayMode($p0);
                break;
        }
        return null;
    },
    
    $AG_0: function CUI_Controls_FlyoutAnchor$$AG_0($p0) {
        var $v_0 = $get(this.$4_0 + '-' + $p0);
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            this.storeElementForDisplayMode($v_0, $p0);
        }
        switch ($p0) {
            case 'Large':
                if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
                    this.$E_2 = $v_0;
                }
                this.$7p_2 = this.$E_2.childNodes[0].childNodes[0];
                this.$2v_2 = this.$E_2.lastChild.lastChild.childNodes[0];
                break;
            case 'Medium':
                if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
                    this.$8_2 = $v_0;
                }
                this.$7q_2 = this.$8_2.childNodes[0].childNodes[0];
                this.$2w_2 = this.$8_2.lastChild.lastChild.childNodes[0];
                break;
            case 'Small':
                if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
                    this.$A_2 = $v_0;
                }
                this.$7r_2 = this.$A_2.childNodes[0].childNodes[0];
                this.$2y_2 = this.$A_2.childNodes[1].lastChild.childNodes[0];
                break;
            case 'Thin':
                this.$1J_2 = $v_0;
                this.$4H_2 = $v_0.firstChild;
                this.$3Z_2 = this.$4H_2.firstChild;
                break;
        }
    },
    
    get_$8X_0: function CUI_Controls_FlyoutAnchor$get_$8X_0() {ULSpEN:;
        return 'FlyoutAnchor';
    },
    
    $9Z_0: function CUI_Controls_FlyoutAnchor$$9Z_0() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$5_0.Command)) {
            var $v_0 = this.pollForStateAndUpdateInternal(this.get_$1_2().Command, this.get_$1_2().QueryCommand, this.get_stateProperties(), true);
            if (($v_0 & 2) > 0) {
                var $v_1 = this.get_stateProperties()[CUI.Controls.FlyoutAnchorCommandProperties.LabelText];
                if (CUI.ScriptUtility.isNullOrUndefined($v_1)) {
                    $v_1 = this.get_$1_2().LabelText;
                    this.get_stateProperties()[CUI.Controls.FlyoutAnchorCommandProperties.LabelText] = this.get_$1_2().LabelText;
                }
                if (this.$1k_2 !== $v_1) {
                    if (!CUI.ScriptUtility.isNullOrUndefined(this.$n_2)) {
                        this.$Cx_2(this.$n_2, $v_1);
                    }
                    if (!CUI.ScriptUtility.isNullOrUndefined(this.$2F_2)) {
                    }
                    this.$0_0.$2C_1 = true;
                }
                this.$1k_2 = $v_1;
            }
        }
    },
    
    $Cx_2: function CUI_Controls_FlyoutAnchor$$Cx_2($p0, $p1) {
        $p0.firstChild.nodeValue = $p1 + ' ';
    },
    
    createMenuDOMElement: function CUI_Controls_FlyoutAnchor$createMenuDOMElement($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = CUI.Utility.$4c();
        $v_0.setAttribute('role', this.get_$2N_0());
        $v_0.className = $p1;
        $v_0.setAttribute('mscui:controltype', this.get_$8X_0());
        CUI.Utility.$1Z(this.get_$1_2(), $v_0);
        var $v_1 = null;
        switch ($p0) {
            case 'Menu16':
                if (CUI.ScriptUtility.isNullOrUndefined(this.$4D_2)) {
                    this.$4D_2 = CUI.Utility.$2('img');
                    this.$67_2 = CUI.Utility.$h(2, 3, $p3, $p4, this.$4D_2, true, true, $p5, $p6);
                    this.$4D_2.alt = $p2;
                    $v_1 = this.$67_2;
                }
                break;
            case 'Menu32':
                if (CUI.ScriptUtility.isNullOrUndefined(this.$4E_2)) {
                    this.$4E_2 = CUI.Utility.$2('img');
                    this.$68_2 = CUI.Utility.$h(2, 4, $p3, $p4, this.$4E_2, true, true, $p5, $p6);
                    this.$4E_2.alt = $p2;
                    $v_1 = this.$68_2;
                }
                break;
        }
        this.createMenuLabelDOMElementIfNeeded($p0);
        if (CUI.ScriptUtility.isNullOrUndefined(this.$56_2)) {
            this.$56_2 = CUI.Utility.$2('img');
            this.$57_2 = CUI.Utility.$h(2, 2, this.$0_0.$5_1.ImageSideArrow, this.$0_0.$5_1.ImageSideArrowClass, this.$56_2, false, true, this.$0_0.$5_1.ImageSideArrowTop, this.$0_0.$5_1.ImageSideArrowLeft);
            CUI.Utility.ensureCSSClassOnElement(this.$57_2, 'ms-cui-fa-menu-arrow');
        }
        if ($v_1) {
            var $v_2 = CUI.Utility.$2('span');
            $v_2.className = 'ms-cui-ctl-iconContainer';
            $v_2.appendChild($v_1);
            $v_0.appendChild($v_2);
        }
        $v_0.appendChild(this.$3W_2);
        $v_0.appendChild(this.$57_2);
        return $v_0;
    },
    
    createMenuLabelDOMElementIfNeeded: function CUI_Controls_FlyoutAnchor$createMenuLabelDOMElementIfNeeded($p0) {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$3W_2)) {
            this.$3W_2 = CUI.Utility.$2('span');
            this.$3W_2.className = 'ms-cui-ctl-mediumlabel';
            CUI.UIUtility.setInnerText(this.$3W_2, this.get_$1_2().LabelText);
        }
    },
    
    $AH_0: function CUI_Controls_FlyoutAnchor$$AH_0($p0) {
        var $v_0 = this.getDisplayedDOMElement($p0);
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return;
        }
        var $v_1 = { click: this.$$d_onClick, blur: this.$$d_$4h_2, keypress: this.$$d_$9Q_2, focus: this.$$d_$CH_2 };
        var $v_2;
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            if ($p0.startsWith('Menu')) {
                $v_2 = { mouseenter: this.$$d_$C9_2, mouseleave: this.$$d_$CA_2 };
            }
            else {
                $v_2 = { mouseenter: this.$$d_$3w_2, mouseleave: this.$$d_$4h_2 };
            }
        }
        else {
            if ($p0.startsWith('Menu')) {
                $v_2 = { mouseover: this.$$d_$5f_2, mouseout: this.$$d_$5e_2 };
            }
            else {
                $v_2 = { mouseover: this.$$d_$3w_2, mouseout: this.$$d_$4h_2 };
            }
        }
        $addHandlers($v_0, $v_1);
        $addHandlers($v_0, $v_2);
    },
    
    onEnabledChanged: function CUI_Controls_FlyoutAnchor$onEnabledChanged($p0) {
        CUI.Utility.setEnabledOnElement(this.$e_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$R_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$c_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$E_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$8_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$A_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$1J_2, $p0);
    },
    
    get_menuDirection: function CUI_Controls_FlyoutAnchor$get_menuDirection() {ULSpEN:;
        return (this.get_displayedComponent().get_displayMode().startsWith('Menu')) ? 1 : 2;
    },
    
    createComponentForDisplayModeInternal: function CUI_Controls_FlyoutAnchor$createComponentForDisplayModeInternal($p0) {
        var $v_0;
        if ($p0.startsWith('Menu')) {
            $v_0 = this.$0_0.$3s_1(this.$4_0 + '-' + $p0 + this.$0_0.$2A_1(), $p0, this);
        }
        else {
            $v_0 = CUI.Control.prototype.createComponentForDisplayModeInternal.call(this, $p0);
        }
        return $v_0;
    },
    
    getDisplayedDOMElement: function CUI_Controls_FlyoutAnchor$getDisplayedDOMElement($p0) {
        switch ($p0) {
            case 'Menu':
                return this.$e_2;
            case 'Menu16':
                return this.$R_2;
            case 'Menu32':
                return this.$c_2;
            case 'Large':
                return this.$E_2;
            case 'Medium':
                return this.$8_2;
            case 'Small':
                return this.$A_2;
            case 'Thin':
                return this.$1J_2;
            default:
                this.ensureValidDisplayMode($p0);
                return null;
        }
    },
    
    onClick: function CUI_Controls_FlyoutAnchor$onClick($p0) {
        var $v_0 = this.get_enabled();
        if ($v_0 && !this.$g_1) {
            CUI.PMetrics.perfMark(7190);
        }
        this.$Y_0();
        $p0.preventDefault();
        if (!$v_0 || this.$g_1) {
            return;
        }
        this.$0_0.set_$3u_1(this);
        var $v_1 = this.get_displayedComponent();
        var $v_2 = $v_1.get_$3_0();
        this.$5b_2($v_2);
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$1_2().Command)) {
            $v_1.raiseCommandEvent(this.get_$1_2().Command, 4, null);
        }
        CUI.PMetrics.perfMark(7191);
    },
    
    $3w_2: function CUI_Controls_FlyoutAnchor$$3w_2($p0) {
        this.onBeginFocus();
        if (!this.get_enabled()) {
            return;
        }
    },
    
    $C9_2: function CUI_Controls_FlyoutAnchor$$C9_2($p0) {
        this.onBeginFocus();
        if (!this.get_enabled() || this.$g_1) {
            return;
        }
        var $v_0 = this.get_displayedComponent();
        var $v_1 = $v_0.get_$3_0();
        this.$5b_2($v_1);
        var $v_2 = this.get_$1_2().Command;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_0.raiseCommandEvent($v_2, 4, null);
        }
    },
    
    $5f_2: function CUI_Controls_FlyoutAnchor$$5f_2($p0) {
        this.onBeginFocus();
        if (!this.get_enabled() || this.$g_1) {
            return;
        }
        var $v_0 = $p0.target;
        var $v_1 = $p0.rawEvent.relatedTarget;
        if (!($v_0 === this.$e_2 || $v_0 === this.$R_2 || $v_0 === this.$c_2)) {
            return;
        }
        while ($v_1 !== $v_0) {
            try {
                if ($v_1.nodeName.toLowerCase() === 'body') {
                    break;
                }
            }
            catch ($$e_3) {
                break;
            }
            $v_1 = $v_1.parentNode;
        }
        if ($v_1 === $v_0) {
            return;
        }
        var $v_2 = this.get_displayedComponent();
        var $v_3 = $v_2.get_$3_0();
        this.$5b_2($v_3);
        var $v_4 = this.get_$1_2().Command;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_4)) {
            $v_2.raiseCommandEvent($v_4, 4, null);
        }
    },
    
    $C1_2: function CUI_Controls_FlyoutAnchor$$C1_2($p0) {
        var $v_0 = Array.indexOf(this.$0_0.$X_1, this);
        var $v_1 = this.$0_0.$2b_1;
        if ($v_1 !== -1 && $v_0 >= this.$0_0.$3h_1) {
            window.clearTimeout($v_1);
            this.$0_0.$2b_1 = -1;
            this.$0_0.$3h_1 = -1;
        }
    },
    
    $CH_2: function CUI_Controls_FlyoutAnchor$$CH_2($p0) {
        this.onBeginFocus();
        if (this.get_displayedComponent().get_displayMode().startsWith('Menu')) {
            this.$3D_2(this.get_enabled());
        }
        if (this.get_enabled()) {
            this.$0_0.set_$l_1(this);
        }
    },
    
    $4h_2: function CUI_Controls_FlyoutAnchor$$4h_2($p0) {
        this.onEndFocus();
        if (this.$g_1) {
            return;
        }
        this.$1N_2();
    },
    
    $CA_2: function CUI_Controls_FlyoutAnchor$$CA_2($p0) {
        this.onEndFocus();
        if (!this.get_enabled()) {
            return;
        }
        if (this.$g_1) {
            var $v_0 = Array.indexOf(this.$0_0.$X_1, this);
            for (var $v_1 = $v_0; $v_1 < this.$0_0.$X_1.length; $v_1++) {
                if (CUI.Utility.isDescendantOf((this.$0_0.$X_1[$v_1]).$B_1.get_$3_0(), ($p0.rawEvent).toElement)) {
                    return;
                }
            }
            this.$5k_2();
        }
    },
    
    $Bz_2: function CUI_Controls_FlyoutAnchor$$Bz_2($p0) {
        this.onEndFocus();
        if (CUI.Utility.isDescendantOf(this.get_displayedComponent().get_$3_0(), ($p0.rawEvent).toElement)) {
            return;
        }
        if (this.$g_1) {
            var $v_0 = Array.indexOf(this.$0_0.$X_1, this);
            for (var $v_1 = $v_0; $v_1 < this.$0_0.$X_1.length; $v_1++) {
                if (CUI.Utility.isDescendantOf((this.$0_0.$X_1[$v_1]).$B_1.get_$3_0(), ($p0.rawEvent).toElement)) {
                    return;
                }
            }
            this.$5k_2();
        }
    },
    
    $5e_2: function CUI_Controls_FlyoutAnchor$$5e_2($p0) {
        this.onEndFocus();
        if (!this.get_enabled() || CUI.ScriptUtility.isNullOrUndefined(this.get_displayedComponent()) || CUI.Utility.isDescendantOf(this.get_displayedComponent().get_$3_0(), $p0.rawEvent.relatedTarget)) {
            return;
        }
        if (this.$g_1) {
            var $v_0 = Array.indexOf(this.$0_0.$X_1, this);
            for (var $v_1 = $v_0; $v_1 < this.$0_0.$X_1.length; $v_1++) {
                if (CUI.Utility.isDescendantOf((this.$0_0.$X_1[$v_1]).$B_1.get_$3_0(), $p0.rawEvent.relatedTarget)) {
                    return;
                }
            }
            this.$5k_2();
        }
    },
    
    $C0_2: function CUI_Controls_FlyoutAnchor$$C0_2($p0) {
        this.onEndFocus();
        if (CUI.Utility.isDescendantOf(this.get_displayedComponent().get_$3_0(), $p0.rawEvent.relatedTarget)) {
            return;
        }
        if (this.$g_1) {
            var $v_0 = Array.indexOf(this.$0_0.$X_1, this);
            for (var $v_1 = $v_0; $v_1 < this.$0_0.$X_1.length; $v_1++) {
                if (CUI.Utility.isDescendantOf((this.$0_0.$X_1[$v_1]).$B_1.get_$3_0(), $p0.rawEvent.relatedTarget)) {
                    return;
                }
            }
            this.$5k_2();
        }
        this.$1N_2();
    },
    
    $9Q_2: function CUI_Controls_FlyoutAnchor$$9Q_2($p0) {
        this.$Y_0();
        if (!this.get_enabled()) {
            return;
        }
        var $v_0 = ($p0.rawEvent).keyCode;
        if (this.$g_1) {
            if ((!this.$0_0._textDirection && $v_0 === 39) || (this.$0_0._textDirection === 1 && $v_0 === 37)) {
                this.$B_1.$76_0();
            }
        }
        else {
            if ($v_0 === 13 || $v_0 === 32 || (((!this.$0_0._textDirection && $v_0 === 39) || (this.$0_0._textDirection === 1 && $v_0 === 37)) && (!$p0.ctrlKey || !$p0.shiftKey))) {
                this.$17_1 = true;
                var $v_1 = this.get_displayedComponent();
                var $v_2 = $v_1.get_$3_0();
                var $v_3 = this.get_$1_2().Command;
                if (!CUI.ScriptUtility.isNullOrUndefined($v_3)) {
                    $v_1.raiseCommandEvent($v_3, 4, null);
                }
                this.$5b_2($v_2);
            }
        }
    },
    
    $6A_2: false,
    
    onModalKeyPress: function CUI_Controls_FlyoutAnchor$onModalKeyPress($p0) {
        if ($p0) {
            if ($p0.rawEvent) {
                var $v_0 = $p0.rawEvent;
                if ((((!this.$0_0._textDirection && $v_0.keyCode === 37) || (this.$0_0._textDirection === 1 && $v_0.keyCode === 39)) && this.get_displayedComponent().get_displayMode().startsWith('Menu')) || $v_0.keyCode === 27) {
                    this.$0_0.$2g_1(this);
                    return;
                }
            }
        }
        if (this.$6C_2) {
            if (this.$6A_2) {
                return;
            }
            if (this.$B_1.$7e_0()) {
                this.$6A_2 = true;
            }
            $p0.preventDefault();
        }
        else {
            CUI.MenuLauncher.prototype.onModalKeyPress.call(this, $p0);
        }
    },
    
    onModalBodyClick: function CUI_Controls_FlyoutAnchor$onModalBodyClick($p0) {
        this.$0_0.$3r_1();
    },
    
    onLaunchedMenuClosed: function CUI_Controls_FlyoutAnchor$onLaunchedMenuClosed() {ULSpEN:;
        var $v_0 = this.$0_0.$2b_1;
        if ($v_0 !== -1) {
            window.clearTimeout($v_0);
        }
        this.$0_0.$2b_1 = -1;
        this.$0_0.$3h_1 = -1;
        this.$1N_2();
        this.$Y_0();
        var $v_1 = this.get_displayedComponent();
        if ($v_1.get_displayMode().startsWith('Menu')) {
            var $v_2 = $v_1.$K_0.$K_0;
            $v_2.set_$9Y_1(null);
        }
        $v_1.raiseCommandEvent(this.get_$1_2().CommandMenuClose, 10, null);
        CUI.MenuLauncher.prototype.onLaunchedMenuClosed.call(this);
    },
    
    $5k_2: function CUI_Controls_FlyoutAnchor$$5k_2() {ULSpEN:;
        var $v_0 = this.$0_0.$2b_1;
        if ($v_0 !== -1) {
            window.clearTimeout($v_0);
        }
        if (null === this.$5r_2) {
            this.$5r_2 = this.$$d_$2g_2;
        }
        this.$0_0.$3h_1 = Array.indexOf(this.$0_0.$X_1, this);
        this.$0_0.$2b_1 = window.setTimeout(this.$5r_2, 500);
    },
    
    $5r_2: null,
    
    $2g_2: function CUI_Controls_FlyoutAnchor$$2g_2() {ULSpEN:;
        this.$0_0.$2g_1(this);
        this.$0_0.$2b_1 = -1;
        this.$0_0.$3h_1 = -1;
    },
    
    get_launcherComponent: function CUI_Controls_FlyoutAnchor$get_launcherComponent() {ULSpEN:;
        var $v_0 = this.get_displayedComponent();
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0) && (($v_0).get_displayMode() === 'Thin')) {
            while (($v_0) && !(CUI.Group.isInstanceOfType($v_0))) {
                $v_0 = $v_0.$K_0;
            }
            if (!$v_0) {
                $v_0 = this.get_displayedComponent();
            }
        }
        return $v_0;
    },
    
    $6W_2: null,
    $6U_2: null,
    $6V_2: null,
    
    $5b_2: function CUI_Controls_FlyoutAnchor$$5b_2($p0) {
        this.$Y_0();
        this.$3D_2(true);
        this.$0_0.$31_1 = false;
        this.$6A_2 = false;
        var $v_0 = this.get_displayedComponent();
        var $v_1 = $v_0.get_displayMode().startsWith('Menu');
        if ($v_1) {
            var $v_2 = $v_0.$K_0.$K_0;
            $v_2.set_$9Y_1(this);
        }
        this.launchMenu($p0);
        if (!$v_1) {
            return;
        }
        if (null === this.$6W_2) {
            this.$6W_2 = this.$$d_$C1_2;
        }
        $addHandler(this.$B_1.get_$3_0(), 'mouseover', this.$6W_2);
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            if (null === this.$6U_2) {
                this.$6U_2 = this.$$d_$Bz_2;
            }
            $addHandler(this.$B_1.get_$3_0(), 'mouseleave', this.$6U_2);
        }
        else {
            if (null === this.$6V_2) {
                this.$6V_2 = this.$$d_$C0_2;
            }
            $addHandler(this.$B_1.get_$3_0(), 'mouseout', this.$6V_2);
        }
    },
    
    $1N_2: function CUI_Controls_FlyoutAnchor$$1N_2() {ULSpEN:;
        var $v_0 = 'ms-cui-ctl-disabledHoveredOver';
        var $v_1 = 'ms-cui-ctl-hoveredOver';
        CUI.Utility.removeCSSClassFromElement(this.$e_2, $v_1);
        CUI.Utility.removeCSSClassFromElement(this.$R_2, $v_1);
        CUI.Utility.removeCSSClassFromElement(this.$c_2, $v_1);
        CUI.Utility.removeCSSClassFromElement(this.$E_2, $v_1);
        CUI.Utility.removeCSSClassFromElement(this.$8_2, $v_1);
        CUI.Utility.removeCSSClassFromElement(this.$A_2, $v_1);
        CUI.Utility.removeCSSClassFromElement(this.$1J_2, $v_1);
        CUI.Utility.removeCSSClassFromElement(this.$e_2, $v_0);
        CUI.Utility.removeCSSClassFromElement(this.$R_2, $v_0);
        CUI.Utility.removeCSSClassFromElement(this.$c_2, $v_0);
    },
    
    $3D_2: function CUI_Controls_FlyoutAnchor$$3D_2($p0) {
        var $v_0 = 'ms-cui-ctl-hoveredOver';
        if (!$p0) {
            $v_0 = 'ms-cui-ctl-disabledHoveredOver';
            CUI.Utility.ensureCSSClassOnElement(this.$e_2, $v_0);
            CUI.Utility.ensureCSSClassOnElement(this.$R_2, $v_0);
            CUI.Utility.ensureCSSClassOnElement(this.$c_2, $v_0);
        }
        else {
            CUI.Utility.ensureCSSClassOnElement(this.$e_2, $v_0);
            CUI.Utility.ensureCSSClassOnElement(this.$R_2, $v_0);
            CUI.Utility.ensureCSSClassOnElement(this.$c_2, $v_0);
            CUI.Utility.ensureCSSClassOnElement(this.$E_2, $v_0);
            CUI.Utility.ensureCSSClassOnElement(this.$8_2, $v_0);
            CUI.Utility.ensureCSSClassOnElement(this.$A_2, $v_0);
            CUI.Utility.ensureCSSClassOnElement(this.$1J_2, $v_0);
        }
    },
    
    $6C_2: false,
    
    getTextValue: function CUI_Controls_FlyoutAnchor$getTextValue() {ULSpEN:;
        return this.$1k_2;
    },
    
    $7d_0: function CUI_Controls_FlyoutAnchor$$7d_0() {ULSpEN:;
        if (!this.get_enabled() || !this.get_$5m_0()) {
            return false;
        }
        this.receiveFocus();
        return true;
    },
    
    receiveFocus: function CUI_Controls_FlyoutAnchor$receiveFocus() {ULSpEN:;
        var $v_0 = this.get_displayedComponent().get_$3_0();
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0.focus();
        }
    },
    
    onMenuClosed: function CUI_Controls_FlyoutAnchor$onMenuClosed() {ULSpEN:;
        this.$1N_2();
    },
    
    dispose: function CUI_Controls_FlyoutAnchor$dispose() {ULSpEN:;
        CUI.MenuLauncher.prototype.dispose.call(this);
        this.$1J_2 = null;
        this.$3Z_2 = null;
        this.$4H_2 = null;
        this.$E_2 = null;
        this.$2v_2 = null;
        this.$7p_2 = null;
        this.$8_2 = null;
        this.$2w_2 = null;
        this.$7q_2 = null;
        this.$e_2 = null;
        this.$R_2 = null;
        this.$c_2 = null;
        this.$56_2 = null;
        this.$57_2 = null;
        this.$4D_2 = null;
        this.$67_2 = null;
        this.$4E_2 = null;
        this.$68_2 = null;
        this.$3W_2 = null;
        this.$A_2 = null;
        this.$2y_2 = null;
        this.$7r_2 = null;
    },
    
    get_$1_2: function CUI_Controls_FlyoutAnchor$get_$1_2() {ULSpEN:;
        return this.$5_0;
    }
}


CUI.Controls.GalleryButtonCommandProperties = function CUI_Controls_GalleryButtonCommandProperties() {
}


CUI.Controls.GalleryButton = function CUI_Controls_GalleryButton($p0, $p1, $p2, $p3) {
    this.$$d_$9O_1 = Function.createDelegate(this, this.$9O_1);
    this.$$d_onBlur = Function.createDelegate(this, this.onBlur);
    this.$$d_onFocus = Function.createDelegate(this, this.onFocus);
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    CUI.Controls.GalleryButton.initializeBase(this, [ $p0, $p1, $p2 ]);
    this.addDisplayMode('Large');
    this.addDisplayMode('Menu');
    this.$3P_1 = $p3;
}
CUI.Controls.GalleryButton.prototype = {
    $F_1: null,
    $J_1: null,
    $4v_1: null,
    $3T_1: null,
    $3P_1: 0,
    
    createComponentForDisplayModeInternal: function CUI_Controls_GalleryButton$createComponentForDisplayModeInternal($p0) {
        var $v_0;
        if ($p0 === 'Menu') {
            $v_0 = this.$0_0.$3s_1(this.$4_0 + '-' + $p0 + this.$0_0.$2A_1(), $p0, this);
            if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().CommandValueId)) {
                this.get_properties().CommandValueId = this.get_properties().MenuItemId;
            }
        }
        else {
            $v_0 = CUI.Control.prototype.createComponentForDisplayModeInternal.call(this, $p0);
        }
        return $v_0;
    },
    
    createDOMElementForDisplayMode: function CUI_Controls_GalleryButton$createDOMElementForDisplayMode($p0) {
        var $$t_1, $$t_2, $$t_3, $$t_4;
        this.$F_1 = (($$t_4 = this.createDOMElementForDisplayModeCore($p0, false, ($$t_1 = {'val': this.$J_1}), ($$t_2 = {'val': this.$4v_1}), ($$t_3 = {'val': this.$3T_1}))), this.$J_1 = $$t_1.val, this.$4v_1 = $$t_2.val, this.$3T_1 = $$t_3.val, $$t_4);
        this.$AH_0($p0);
        return this.$F_1;
    },
    
    createDOMElementForDisplayModeCore: function CUI_Controls_GalleryButton$createDOMElementForDisplayModeCore($p0, $p1, $p2, $p3, $p4) {
        switch ($p0) {
            case 'Large':
            case 'Menu':
                var $v_0 = (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().Alt)) ? '' : this.get_properties().Alt;
                var $v_1 = !CUI.ScriptUtility.isNullOrUndefined(this.get_properties().InnerHTML);
                var $v_2 = CUI.Utility.$2(($v_1 && !$p1) ? 'div' : 'span');
                $v_2.setAttribute('mscui:controltype', this.get_$8X_0());
                $v_2.className = 'ms-cui-gallerybutton ms-cui-gallerybutton-' + CUI.Utility.$8r[this.$3P_1];
                $p2.val = CUI.Utility.$2(($v_1) ? (($p1) ? 'span' : 'div') : 'a');
                $p2.val.title = $v_0;
                $p2.val.className = 'ms-cui-gallerybutton-a';
                $p2.val.setAttribute('role', this.get_$2N_0());
                if (!$v_1) {
                    CUI.Utility.$1p($p2.val);
                }
                else {
                    $p2.val.tabIndex = 0;
                }
                CUI.Utility.$1Z(this.get_properties(), $p2.val);
                $v_2.appendChild($p2.val);
                if ($v_1) {
                    $p2.val.innerHTML = this.get_properties().InnerHTML;
                    CUI.Utility.$1s($p2.val, true, true);
                }
                else {
                    if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().Image)) {
                        throw Error.create('InnerHTML or Image must be defined for this GalleryButton');
                    }
                    var $v_3 = 4;
                    switch (this.$3P_1) {
                        case 1:
                            $v_3 = 3;
                            break;
                        case 2:
                            $v_3 = 4;
                            break;
                        case 3:
                            $v_3 = 5;
                            break;
                        case 4:
                            $v_3 = 6;
                            break;
                        case 5:
                            $v_3 = 7;
                            break;
                        case 6:
                            $v_3 = 8;
                            break;
                        case 7:
                            $v_3 = 9;
                            break;
                    }
                    $p3.val = CUI.Utility.$2('img');
                    $p4.val = CUI.Utility.$h(2, $v_3, this.get_properties().Image, this.get_properties().ImageClass, $p3.val, true, false, this.get_properties().ImageTop, this.get_properties().ImageLeft);
                    $p3.val.alt = $v_0;
                    $p2.val.appendChild($p4.val);
                }
                return $v_2;
            default:
                this.ensureValidDisplayMode($p0);
                return null;
        }
    },
    
    $AG_0: function CUI_Controls_GalleryButton$$AG_0($p0) {
        var $v_0 = $get(this.$4_0 + '-' + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
            case 'Large':
            case 'Menu':
                this.$F_1 = $v_0;
                this.$J_1 = this.$F_1.childNodes[0];
                this.$3T_1 = this.$J_1.childNodes[0];
                this.$4v_1 = (this.$3T_1) ? this.$3T_1.childNodes[0] : null;
                break;
        }
    },
    
    $AH_0: function CUI_Controls_GalleryButton$$AH_0($p0) {
        switch ($p0) {
            case 'Large':
            case 'Menu':
                this.$P_1();
                break;
        }
    },
    
    $P_1: function CUI_Controls_GalleryButton$$P_1() {ULSpEN:;
        $addHandler(this.$J_1, 'click', this.$$d_onClick);
        $addHandler(this.$J_1, 'focus', this.$$d_onFocus);
        $addHandler(this.$J_1, 'blur', this.$$d_onBlur);
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            $addHandler(this.$J_1, 'mouseenter', this.$$d_onFocus);
            $addHandler(this.$J_1, 'mouseleave', this.$$d_onBlur);
        }
        else {
            $addHandler(this.$J_1, 'mouseover', this.$$d_onFocus);
            $addHandler(this.$J_1, 'mouseout', this.$$d_onBlur);
        }
        if (this.$J_1.tagName !== 'A') {
            $addHandler(this.$J_1, 'keydown', this.$$d_$9O_1);
        }
    },
    
    get_$8X_0: function CUI_Controls_GalleryButton$get_$8X_0() {ULSpEN:;
        return 'GalleryButton';
    },
    
    onEnabledChanged: function CUI_Controls_GalleryButton$onEnabledChanged($p0) {
        if ($p0) {
            CUI.Utility.enableElement(this.$J_1);
        }
        else {
            CUI.Utility.disableElement(this.$J_1);
        }
    },
    
    $9O_1: function CUI_Controls_GalleryButton$$9O_1($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined($p0)) {
            if ($p0.keyCode === 13) {
                this.onClick($p0);
            }
        }
    },
    
    onClick: function CUI_Controls_GalleryButton$onClick($p0) {
        this.$Y_0();
        $p0.preventDefault();
        if (!this.get_enabled()) {
            return;
        }
        this.toggle();
        var $v_0 = 1;
        var $v_1 = this.get_properties().CommandType;
        var $v_2 = this.get_stateProperties();
        $v_2[CUI.Controls.GalleryButtonCommandProperties.CommandValueId] = this.get_properties().CommandValueId;
        $v_2['MenuItemId'] = this.get_properties().MenuItemId;
        $v_2['SourceControlId'] = this.get_properties().Id;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1) && $v_1 === 'OptionSelection') {
            $v_0 = 3;
        }
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().Command, $v_0, $v_2);
        if (this.$0_0.get_$4i_1()) {
            this.$9Z_0();
        }
        else {
            this.$2R_1(this.get_stateProperties()[CUI.Controls.GalleryButtonCommandProperties.On]);
        }
    },
    
    onFocus: function CUI_Controls_GalleryButton$onFocus($p0) {
        this.onBeginFocus();
        if (!this.get_enabled()) {
            return;
        }
        this.$0_0.set_$l_1(this);
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().CommandPreview)) {
            return;
        }
        var $v_0 = 5;
        var $v_1 = this.get_properties().CommandType;
        this.get_stateProperties()[CUI.Controls.GalleryButtonCommandProperties.CommandValueId] = this.get_properties().CommandValueId;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1) && $v_1 === 'OptionSelection') {
            $v_0 = 7;
        }
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().CommandPreview, $v_0, this.get_stateProperties());
    },
    
    onBlur: function CUI_Controls_GalleryButton$onBlur($p0) {
        this.onEndFocus();
        if (!this.get_enabled()) {
            return;
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().CommandRevert)) {
            return;
        }
        var $v_0 = 6;
        var $v_1 = this.get_properties().CommandType;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1) && $v_1 === 'OptionSelection') {
            $v_0 = 8;
            this.get_stateProperties()[CUI.Controls.GalleryButtonCommandProperties.CommandValueId] = this.get_properties().CommandValueId;
        }
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().CommandRevert, $v_0, this.get_stateProperties());
    },
    
    $62_1: null,
    
    getDropDownDOMElementForDisplayMode: function CUI_Controls_GalleryButton$getDropDownDOMElementForDisplayMode($p0) {
        if (this.$3P_1 === 13) {
            if (!this.$62_1) {
                var $v_0 = null, $v_1 = null;
                var $v_2 = null;
                var $$t_4, $$t_5, $$t_6, $$t_7;
                this.$62_1 = (($$t_7 = this.createDOMElementForDisplayModeCore($p0, true, ($$t_4 = {'val': $v_0}), ($$t_5 = {'val': $v_2}), ($$t_6 = {'val': $v_1}))), $v_0 = $$t_4.val, $v_2 = $$t_5.val, $v_1 = $$t_6.val, $$t_7);
            }
            return this.$62_1;
        }
        else {
            return CUI.Utility.$2('span');
        }
    },
    
    deselect: function CUI_Controls_GalleryButton$deselect() {ULSpEN:;
        this.set_selected(false);
    },
    
    getMenuItemId: function CUI_Controls_GalleryButton$getMenuItemId() {ULSpEN:;
        return this.get_properties().MenuItemId;
    },
    
    getCommandValueId: function CUI_Controls_GalleryButton$getCommandValueId() {ULSpEN:;
        return this.get_properties().CommandValueId;
    },
    
    focusOnDisplayedComponent: function CUI_Controls_GalleryButton$focusOnDisplayedComponent() {ULSpEN:;
        this.receiveFocus();
    },
    
    getTextValue: function CUI_Controls_GalleryButton$getTextValue() {ULSpEN:;
        return this.get_properties().Alt;
    },
    
    receiveFocus: function CUI_Controls_GalleryButton$receiveFocus() {ULSpEN:;
        this.$J_1.focus();
    },
    
    onMenuClosed: function CUI_Controls_GalleryButton$onMenuClosed() {ULSpEN:;
        CUI.Control.prototype.onMenuClosed.call(this);
    },
    
    $3D_1: function CUI_Controls_GalleryButton$$3D_1() {ULSpEN:;
        CUI.Utility.ensureCSSClassOnElement(this.$F_1, 'ms-cui-gallerybutton-highlighted');
    },
    
    $1N_1: function CUI_Controls_GalleryButton$$1N_1() {ULSpEN:;
        CUI.Utility.removeCSSClassFromElement(this.$F_1, 'ms-cui-gallerybutton-highlighted');
    },
    
    toggle: function CUI_Controls_GalleryButton$toggle() {ULSpEN:;
        var $v_0 = !this.get_stateProperties()[CUI.Controls.GalleryButtonCommandProperties.On];
        this.get_stateProperties()[CUI.Controls.GalleryButtonCommandProperties.On] = $v_0;
        this.$2R_1($v_0);
    },
    
    $2R_1: function CUI_Controls_GalleryButton$$2R_1($p0) {
        if ($p0) {
            this.$3D_1();
        }
        else {
            this.$1N_1();
        }
    },
    
    $9Z_0: function CUI_Controls_GalleryButton$$9Z_0() {ULSpEN:;
        var $v_0 = this.get_stateProperties();
        $v_0[CUI.Controls.GalleryButtonCommandProperties.CommandValueId] = this.get_properties().CommandValueId;
        $v_0['MenuItemId'] = this.get_properties().MenuItemId;
        $v_0['SourceControlId'] = this.get_properties().Id;
        var $v_1 = this.pollForStateAndUpdateInternal(this.get_properties().Command, this.get_properties().QueryCommand, $v_0, false);
        if (($v_1 & 2) > 0) {
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$J_1) && !CUI.ScriptUtility.isNullOrUndefined(this.get_stateProperties()[CUI.Controls.GalleryButtonCommandProperties.InnerHTML])) {
                var $v_2 = CUI.Utility.$2k(this.get_stateProperties()[CUI.Controls.GalleryButtonCommandProperties.InnerHTML], this.get_properties().InnerHTML);
                if (this.$J_1.innerHTML !== $v_2) {
                    this.$J_1.innerHTML = $v_2;
                }
            }
            this.$2R_1(this.get_stateProperties()[CUI.Controls.GalleryButtonCommandProperties.On]);
        }
    },
    
    get_selected: function CUI_Controls_GalleryButton$get_selected() {ULSpEN:;
        return this.get_stateProperties()[CUI.Controls.GalleryButtonCommandProperties.On];
    },
    set_selected: function CUI_Controls_GalleryButton$set_selected($p0) {
        this.get_stateProperties()[CUI.Controls.GalleryButtonCommandProperties.On] = $p0;
        if ($p0) {
            this.$3D_1();
        }
        else {
            this.$1N_1();
        }
        return $p0;
    },
    
    get_elementDimensions: function CUI_Controls_GalleryButton$get_elementDimensions() {ULSpEN:;
        return this.$3P_1;
    },
    set_elementDimensions: function CUI_Controls_GalleryButton$set_elementDimensions($p0) {
        this.$3P_1 = $p0;
        return $p0;
    },
    
    dispose: function CUI_Controls_GalleryButton$dispose() {ULSpEN:;
        CUI.Control.prototype.dispose.call(this);
        this.$F_1 = null;
        this.$J_1 = null;
        this.$4v_1 = null;
        this.$3T_1 = null;
    },
    
    get_properties: function CUI_Controls_GalleryButton$get_properties() {ULSpEN:;
        return this.$5_0;
    }
}


CUI.Controls.InsertTableCommandProperties = function CUI_Controls_InsertTableCommandProperties() {
}


CUI.Controls.InsertTable = function CUI_Controls_InsertTable($p0, $p1, $p2) {
    this.$$d_$9L_1 = Function.createDelegate(this, this.$9L_1);
    this.$$d_$9N_1 = Function.createDelegate(this, this.$9N_1);
    this.$$d_$9M_1 = Function.createDelegate(this, this.$9M_1);
    this.$$d_$Bq_1 = Function.createDelegate(this, this.$Bq_1);
    this.$1V_1 = -1;
    this.$3y_1 = -1;
    this.$3z_1 = -1;
    CUI.Controls.InsertTable.initializeBase(this, [ $p0, $p1, $p2 ]);
    this.addDisplayMode('Menu');
}
CUI.Controls.InsertTable.prototype = {
    $2I_1: null,
    $4S_1: null,
    
    createComponentForDisplayModeInternal: function CUI_Controls_InsertTable$createComponentForDisplayModeInternal($p0) {
        if (this.$Z_0.length > 0) {
            throw Error.create('Only one ControlComponent can be created for each InsertTable Control');
        }
        var $v_0;
        $v_0 = this.$0_0.$3s_1(this.$4_0 + '-' + $p0 + this.$0_0.$2A_1(), $p0, this);
        return $v_0;
    },
    
    $F_1: null,
    $2q_1: null,
    
    createDOMElementForDisplayMode: function CUI_Controls_InsertTable$createDOMElementForDisplayMode($p0) {
        switch ($p0) {
            case 'Menu':
                this.$F_1 = CUI.Utility.$2('table');
                this.$F_1.setAttribute('mscui:controltype', this.get_$8X_0());
                this.$2q_1 = CUI.Utility.$2('tbody');
                this.$2q_1.className = 'ms-cui-it';
                this.$F_1.setAttribute('cellspacing', '0');
                this.$F_1.setAttribute('cellpadding', '0');
                this.$2q_1.setAttribute('cellspacing', '0');
                this.$2q_1.setAttribute('cellpadding', '0');
                $addHandler(this.$F_1, 'mouseout', this.$$d_$Bq_1);
                this.$BA_1();
                var $v_0;
                var $v_1;
                var $v_2;
                var $v_3;
                var $v_4;
                var $v_5 = 0;
                for (var $v_6 = 0; $v_6 < 10; $v_6++) {
                    $v_0 = CUI.Utility.$2('tr');
                    this.$2q_1.appendChild($v_0);
                    for (var $v_7 = 0; $v_7 < 10; $v_7++) {
                        $v_1 = CUI.Utility.$2('td');
                        $v_1.style.padding = '0px';
                        $v_0.appendChild($v_1);
                        $v_2 = CUI.Utility.$2('a');
                        CUI.Utility.$1p($v_2);
                        CUI.Utility.$1Z(this.get_$1_1(), $v_2);
                        $addHandler($v_2, 'focus', this.$$d_$9M_1);
                        $v_3 = CUI.Utility.$2('div');
                        $v_3.className = 'ms-cui-it-inactiveCell';
                        $v_4 = CUI.Utility.$2('div');
                        $v_4.id = this.$4_0 + '-' + $v_5;
                        $v_4.className = 'ms-cui-it-inactiveCellOuter';
                        $addHandler($v_1, 'mouseover', this.$$d_$9N_1);
                        $addHandler($v_1, 'click', this.$$d_$9L_1);
                        $v_1.appendChild($v_4);
                        $v_4.appendChild($v_3);
                        $v_3.appendChild($v_2);
                        this.$2I_1[$v_5] = $v_3;
                        this.$4S_1[$v_5] = $v_4;
                        $v_5++;
                    }
                }
                this.$F_1.appendChild(this.$2q_1);
                return this.$F_1;
            default:
                this.ensureValidDisplayMode($p0);
                break;
        }
        return null;
    },
    
    onEnabledChanged: function CUI_Controls_InsertTable$onEnabledChanged($p0) {
    },
    
    get_$8X_0: function CUI_Controls_InsertTable$get_$8X_0() {ULSpEN:;
        return 'InsertTable';
    },
    
    $9L_1: function CUI_Controls_InsertTable$$9L_1($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(CUI.PMetrics)) {
            CUI.PMetrics.perfMark(7702);
        }
        $p0.preventDefault();
        if (!this.get_enabled()) {
            return;
        }
        var $v_0 = this.$7C_1($p0.target);
        var $v_1 = this.$7A_1($v_0);
        var $v_2 = this.$4e_1($v_1);
        var $v_3 = this.$4g_1($v_1);
        this.$6t_1();
        this.get_commandProperties()['Rows'] = $v_3 + 1;
        this.get_commandProperties()['Columns'] = $v_2 + 1;
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_1().Command, 1, this.get_commandProperties());
        if (!CUI.ScriptUtility.isNullOrUndefined(CUI.PMetrics)) {
            CUI.PMetrics.perfMark(7703);
        }
    },
    
    $7C_1: function CUI_Controls_InsertTable$$7C_1($p0) {
        while ($p0.hasChildNodes()) {
            $p0 = $p0.childNodes[0];
        }
        return $p0.parentNode.parentNode;
    },
    
    $9r_1: function CUI_Controls_InsertTable$$9r_1($p0) {
        var $v_0 = $p0.childNodes[0].childNodes[0];
        var $v_1 = this.$7A_1($p0);
        $v_0.title = this.$8t_1(this.$4g_1($v_1) + 1, this.$4e_1($v_1) + 1);
    },
    
    $8t_1: function CUI_Controls_InsertTable$$8t_1($p0, $p1) {
        var $v_0 = this.get_$1_1().Alt;
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = this.get_$1_1().MenuSectionTitle;
        }
        $v_0 = String.format($v_0, $p1.toString(), $p0.toString());
        return $v_0;
    },
    
    $9N_1: function CUI_Controls_InsertTable$$9N_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        var $v_0 = this.$7C_1($p0.target);
        this.$9r_1($v_0);
        this.$96_1($v_0);
    },
    
    $9M_1: function CUI_Controls_InsertTable$$9M_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        var $v_0 = this.$7C_1($p0.target);
        this.$9r_1($v_0);
        this.$96_1($v_0);
    },
    
    $Bq_1: function CUI_Controls_InsertTable$$Bq_1($p0) {
        var $v_0 = CUI.Utility.$8x(this.$F_1);
        if ($p0.clientX <= $v_0.x || $p0.clientX >= $v_0.x + $v_0.width || $p0.clientY <= $v_0.y || $p0.clientY >= $v_0.y + $v_0.height) {
            this.$5i_1();
        }
    },
    
    $5i_1: function CUI_Controls_InsertTable$$5i_1() {ULSpEN:;
        this.$Cv_1();
        this.$6z_1();
        this.$3y_1 = -1;
        this.$3z_1 = -1;
        this.$3I_1 = false;
    },
    
    $7A_1: function CUI_Controls_InsertTable$$7A_1($p0) {
        return parseInt($p0.id.substr(this.$4_0.length + 1));
    },
    
    $3I_1: false,
    
    $96_1: function CUI_Controls_InsertTable$$96_1($p0) {
        var $v_0 = this.$7A_1($p0);
        if (this.$1V_1 === $v_0) {
            return;
        }
        this.$Ba_1($v_0);
    },
    
    $Ba_1: function CUI_Controls_InsertTable$$Ba_1($p0) {
        this.$AF_1($p0);
        this.$1V_1 = $p0;
        this.$6z_1();
        this.$9h_1($p0);
    },
    
    $4g_1: function CUI_Controls_InsertTable$$4g_1($p0) {
        return Math.floor($p0 / 10);
    },
    
    $4e_1: function CUI_Controls_InsertTable$$4e_1($p0) {
        return $p0 % 10;
    },
    
    $AF_1: function CUI_Controls_InsertTable$$AF_1($p0) {
        var $v_0 = this.$4e_1($p0);
        var $v_1 = this.$4g_1($p0);
        var $v_2 = -1;
        var $v_3 = -1;
        if (this.$1V_1 !== -1) {
            $v_2 = this.$4g_1(this.$1V_1);
            $v_3 = this.$4e_1(this.$1V_1);
        }
        while ($v_2 !== $v_1 || $v_3 !== $v_0) {
            if ($v_2 < $v_1) {
                this.$9o_1(++$v_2, $v_3, true);
            }
            else if ($v_2 > $v_1) {
                this.$9o_1($v_2, $v_3, false);
                $v_2--;
            }
            else if ($v_3 < $v_0) {
                this.$9j_1(++$v_3, $v_2, true);
            }
            else if ($v_3 > $v_0) {
                this.$9j_1($v_3, $v_2, false);
                $v_3--;
            }
        }
        this.get_$99_1().$9q_1(this.$8t_1($v_1 + 1, $v_0 + 1));
    },
    
    $9o_1: function CUI_Controls_InsertTable$$9o_1($p0, $p1, $p2) {
        for (var $v_0 = 0; $v_0 <= $p1; $v_0++) {
            this.$9i_1($p0, $v_0, $p2);
        }
    },
    
    $9j_1: function CUI_Controls_InsertTable$$9j_1($p0, $p1, $p2) {
        for (var $v_0 = 0; $v_0 <= $p1; $v_0++) {
            this.$9i_1($v_0, $p0, $p2);
        }
    },
    
    $9i_1: function CUI_Controls_InsertTable$$9i_1($p0, $p1, $p2) {
        var $v_0 = $p0 * 10 + $p1;
        var $v_1 = this.$2I_1[$v_0];
        var $v_2 = this.$4S_1[$v_0];
        if ($p2) {
            $v_1.className = 'ms-cui-it-activeCell';
            $v_2.className = 'ms-cui-it-activeCellOuter';
        }
        else {
            $v_1.className = 'ms-cui-it-inactiveCell';
            $v_2.className = 'ms-cui-it-inactiveCellOuter';
        }
    },
    
    $Cv_1: function CUI_Controls_InsertTable$$Cv_1() {ULSpEN:;
        for (var $v_1 = 0; $v_1 < 100; $v_1++) {
            this.$2I_1[$v_1].className = 'ms-cui-it-inactiveCell';
            this.$4S_1[$v_1].className = 'ms-cui-it-inactiveCellOuter';
        }
        this.$1V_1 = -1;
        var $v_0 = this.get_$1_1().MenuSectionInitialTitle;
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = '';
        }
        this.get_$99_1().$9q_1($v_0);
    },
    
    $BA_1: function CUI_Controls_InsertTable$$BA_1() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$2I_1)) {
            this.$2I_1 = new Array(100);
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$4S_1)) {
            this.$4S_1 = new Array(100);
        }
    },
    
    receiveFocus: function CUI_Controls_InsertTable$receiveFocus() {ULSpEN:;
        var $v_0 = this.$2I_1[0];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return;
        }
        $v_0.firstChild.focus();
    },
    
    $6t_1: function CUI_Controls_InsertTable$$6t_1() {ULSpEN:;
        this.$3y_1 = -1;
        this.$3z_1 = -1;
        this.$3I_1 = false;
    },
    
    $6z_1: function CUI_Controls_InsertTable$$6z_1() {ULSpEN:;
        if (this.$3I_1) {
            var $v_0 = this.get_$1_1().CommandRevert;
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
                this.get_commandProperties()['Rows'] = this.$3z_1 + 1;
                this.get_commandProperties()['Columns'] = this.$3y_1 + 1;
                this.get_displayedComponent().raiseCommandEvent($v_0, 6, this.get_commandProperties());
            }
            this.$6t_1();
        }
    },
    
    $9h_1: function CUI_Controls_InsertTable$$9h_1($p0) {
        this.$3y_1 = this.$4e_1($p0);
        this.$3z_1 = this.$4g_1($p0);
        this.$3I_1 = true;
        var $v_0 = this.get_$1_1().CommandPreview;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            this.get_commandProperties()['Rows'] = this.$3z_1 + 1;
            this.get_commandProperties()['Columns'] = this.$3y_1 + 1;
            this.get_displayedComponent().raiseCommandEvent($v_0, 5, this.get_commandProperties());
        }
    },
    
    get_$99_1: function CUI_Controls_InsertTable$get_$99_1() {ULSpEN:;
        var $v_0 = this.get_displayedComponent().$K_0;
        if (!CUI.MenuSection.isInstanceOfType($v_0)) {
            throw Error.create('InsertTable must live inside of a MenuSection.');
        }
        return $v_0;
    },
    
    onMenuClosed: function CUI_Controls_InsertTable$onMenuClosed() {ULSpEN:;
        this.$5i_1();
    },
    
    $5S_0: function CUI_Controls_InsertTable$$5S_0() {ULSpEN:;
        if (this.$1V_1 === 99) {
            this.$5i_1();
            return false;
        }
        this.$2I_1[this.$1V_1 + 1].firstChild.focus();
        return true;
    },
    
    $5T_0: function CUI_Controls_InsertTable$$5T_0() {ULSpEN:;
        if (!this.$1V_1) {
            this.$5i_1();
            return false;
        }
        else if (this.$1V_1 === -1) {
            this.$2I_1[99].firstChild.focus();
        }
        else {
            this.$2I_1[this.$1V_1 - 1].firstChild.focus();
        }
        return true;
    },
    
    dispose: function CUI_Controls_InsertTable$dispose() {ULSpEN:;
        CUI.Control.prototype.dispose.call(this);
        this.$F_1 = null;
        this.$2q_1 = null;
    },
    
    get_$1_1: function CUI_Controls_InsertTable$get_$1_1() {ULSpEN:;
        return this.$5_0;
    }
}


CUI.Controls.LabelCommandProperties = function CUI_Controls_LabelCommandProperties() {
}


CUI.Controls.Label = function CUI_Controls_Label($p0, $p1, $p2) {
    CUI.Controls.Label.initializeBase(this, [ $p0, $p1, $p2 ]);
    this.addDisplayMode('Medium');
    this.addDisplayMode('Small');
}
CUI.Controls.Label.prototype = {
    $F_1: null,
    $45_1: null,
    $2E_1: null,
    $A_1: null,
    $3Y_1: null,
    $6m_1: '',
    
    createDOMElementForDisplayMode: function CUI_Controls_Label$createDOMElementForDisplayMode($p0) {
        var $v_0 = this.get_$1_1().ForId;
        var $v_1 = this.get_$1_1().LabelText;
        switch ($p0) {
            case 'Medium':
                if ($v_0) {
                    this.$F_1 = CUI.Utility.$2('label');
                    if (CUI.Utility.$3F()) {
                        this.$F_1.setAttribute('htmlFor', $v_0);
                    }
                    else {
                        this.$F_1.setAttribute('for', $v_0);
                    }
                }
                else {
                    this.$F_1 = CUI.Utility.$2('span');
                }
                this.$F_1.setAttribute('mscui:controltype', this.get_$8X_0());
                this.$F_1.className = 'ms-cui-ctl-small ms-cui-fslb';
                if (!CUI.ScriptUtility.isNullOrEmptyString(this.get_$1_1().Image16by16)) {
                    this.$45_1 = CUI.Utility.$2('img');
                    var $v_4 = CUI.Utility.$h(2, 3, this.get_$1_1().Image16by16, this.get_$1_1().Image16by16Class, this.$45_1, true, false, this.get_$1_1().Image16by16Top, this.get_$1_1().Image16by16Left);
                    var $v_5 = CUI.Utility.$2('span');
                    $v_5.className = 'ms-cui-ctl-iconContainer';
                    $v_5.appendChild($v_4);
                    this.$F_1.appendChild($v_5);
                }
                this.$2E_1 = CUI.Utility.$2('span');
                this.$2E_1.className = 'ms-cui-ctl-mediumlabel';
                if (!CUI.ScriptUtility.isNullOrUndefined(this.$0_0.get_$1G_1())) {
                    this.$2E_1.style.color = this.$0_0.get_$1G_1();
                }
                if (!CUI.ScriptUtility.isNullOrUndefined($v_1)) {
                    CUI.UIUtility.setInnerText(this.$2E_1, $v_1);
                }
                this.$F_1.appendChild(this.$2E_1);
                return this.$F_1;
            case 'Small':
                if ($v_0) {
                    this.$A_1 = CUI.Utility.$2('label');
                    if (CUI.Utility.$3F()) {
                        this.$A_1.setAttribute('htmlFor', $v_0);
                    }
                    else {
                        this.$A_1.setAttribute('for', $v_0);
                    }
                }
                else {
                    this.$A_1 = CUI.Utility.$2('span');
                }
                this.$A_1.setAttribute('mscui:controltype', this.get_$8X_0());
                this.$A_1.className = 'ms-cui-ctl-small ms-cui-fslb';
                if (CUI.ScriptUtility.isNullOrEmptyString(this.get_$1_1().Image16by16)) {
                    throw Error.argumentNull('Image16by16', 'Small display mode must have an icon set');
                }
                this.$3Y_1 = CUI.Utility.$2('img');
                var $v_2 = CUI.Utility.$h(2, 3, this.get_$1_1().Image16by16, this.get_$1_1().Image16by16Class, this.$3Y_1, true, false, this.get_$1_1().Image16by16Top, this.get_$1_1().Image16by16Left);
                if (!CUI.ScriptUtility.isNullOrUndefined($v_1)) {
                    this.$3Y_1.alt = $v_1;
                }
                var $v_3 = CUI.Utility.$2('span');
                $v_3.className = 'ms-cui-ctl-iconContainer';
                $v_3.appendChild($v_2);
                this.$A_1.appendChild($v_3);
                return this.$A_1;
            default:
                this.ensureValidDisplayMode($p0);
                break;
        }
        return null;
    },
    
    $AG_0: function CUI_Controls_Label$$AG_0($p0) {
        var $v_0 = $get(this.$4_0 + '-' + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
            case 'Medium':
                this.$F_1 = $v_0;
                if (!CUI.ScriptUtility.isNullOrEmptyString(this.get_$1_1().Image16by16)) {
                    this.$45_1 = this.$F_1.firstChild.firstChild.firstChild;
                    this.$2E_1 = this.$F_1.childNodes[1];
                }
                else {
                    this.$2E_1 = this.$F_1.firstChild;
                }
                break;
            case 'Small':
                this.$A_1 = $v_0;
                this.$3Y_1 = this.$A_1.firstChild.firstChild.firstChild;
                break;
        }
    },
    
    onEnabledChanged: function CUI_Controls_Label$onEnabledChanged($p0) {
        CUI.Utility.setEnabledOnElement(this.$F_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$A_1, $p0);
    },
    
    get_$8X_0: function CUI_Controls_Label$get_$8X_0() {ULSpEN:;
        return 'Label';
    },
    
    pollForStateAndUpdateInternal: function CUI_Controls_Label$pollForStateAndUpdateInternal($p0, $p1, $p2, $p3) {
        var $v_0 = this.$0_0.$3H_1($p0, $p1, $p2, $p3);
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$1_1().Command)) {
            this.set_enabled(($v_0 & 1) > 0);
        }
        return $v_0;
    },
    
    $9Z_0: function CUI_Controls_Label$$9Z_0() {ULSpEN:;
        var $v_0 = this.pollForStateAndUpdateInternal(this.get_$1_1().Command, this.get_$1_1().QueryCommand, this.get_stateProperties(), true);
        if (($v_0 & 2) > 0) {
            var $v_1 = this.$6m_1;
            var $v_2 = this.get_stateProperties()['Value'];
            if (CUI.ScriptUtility.isNullOrUndefined($v_2)) {
                $v_2 = this.get_$1_1().LabelText;
                if (CUI.ScriptUtility.isNullOrUndefined($v_2)) {
                    $v_2 = '';
                }
            }
            if ($v_2 !== $v_1) {
                this.$6m_1 = $v_2;
                CUI.UIUtility.setInnerText(this.$2E_1, this.$6m_1);
                this.$0_0.$2C_1 = true;
            }
            var $v_3 = CUI.Utility.$2k(this.get_stateProperties()['Image16by16Class'], this.get_$1_1().Image16by16Class);
            CUI.Utility.$27(this.$45_1, $v_3);
            CUI.Utility.$27(this.$3Y_1, $v_3);
        }
    },
    
    dispose: function CUI_Controls_Label$dispose() {ULSpEN:;
        CUI.Control.prototype.dispose.call(this);
        this.$F_1 = null;
        this.$45_1 = null;
        this.$2E_1 = null;
        this.$A_1 = null;
        this.$3Y_1 = null;
    },
    
    get_$1_1: function CUI_Controls_Label$get_$1_1() {ULSpEN:;
        return this.$5_0;
    }
}


CUI.Controls.MRUSplitButton = function CUI_Controls_MRUSplitButton($p0, $p1, $p2, $p3) {
    this.$$d_onDblClick = Function.createDelegate(this, this.onDblClick);
    this.$$d_$9W_3 = Function.createDelegate(this, this.$9W_3);
    this.$$d_$CF_3 = Function.createDelegate(this, this.$CF_3);
    this.$$d_$CG_3 = Function.createDelegate(this, this.$CG_3);
    CUI.Controls.MRUSplitButton.initializeBase(this, [ $p0, $p1, $p2, $p3 ]);
}
CUI.Controls.MRUSplitButton.prototype = {
    $E_3: null,
    $1B_3: null,
    $O_3: null,
    $2v_3: null,
    $8_3: null,
    $b_3: null,
    $Q_3: null,
    $2w_3: null,
    $A_3: null,
    $1I_3: null,
    $S_3: null,
    $2y_3: null,
    $1O_3: false,
    $3L_3: false,
    
    $7d_0: function CUI_Controls_MRUSplitButton$$7d_0() {ULSpEN:;
        if (!this.get_enabled()) {
            return false;
        }
        if (this.$1O_3) {
            this.get_displayedComponent().get_$3_0().firstChild.firstChild.focus();
            return true;
        }
        return false;
    },
    
    createDOMElementForDisplayMode: function CUI_Controls_MRUSplitButton$createDOMElementForDisplayMode($p0) {
        var $v_0 = true;
        var $v_1 = (CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().Alt)) ? '' : this.get_properties().Alt;
        var $v_2 = ($p0 === 'Medium' && !CUI.ScriptUtility.isNullOrUndefined(this.get_properties().Width)) ? this.get_properties().Width : 'auto';
        var $v_3 = null;
        var $v_4 = this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId];
        if (CUI.ScriptUtility.isNullOrUndefined($v_4)) {
            $v_4 = this.get_properties().InitialItem;
        }
        this.$3L_3 = true;
        switch ($p0) {
            case 'Large':
                this.$E_3 = CUI.Utility.$2('span');
                this.$E_3.setAttribute('mscui:controltype', this.get_$8X_0());
                CUI.Utility.ensureCSSClassOnElement(this.$E_3, 'ms-cui-ctl-large');
                this.$1B_3 = CUI.Utility.$2('span');
                this.$1B_3.className = 'ms-cui-mrusb-selecteditem';
                if (!this.$2Q_2($v_4)) {
                    if (!CUI.Utility.$o(this.get_properties().PopulateDynamically)) {
                        throw Error.create('No menu item with id \'' + this.get_properties().InitialItem + '\' exists in this control\'s menu');
                    }
                    else {
                        this.$1B_3.style.width = '32px';
                        this.$1B_3.style.height = '32px';
                    }
                }
                this.$O_3 = CUI.Utility.$2('a');
                this.$O_3.className = 'ms-cui-ctl-a2';
                this.$O_3.style.display = 'block';
                this.$O_3.setAttribute('role', this.get_$2N_0());
                this.$O_3.setAttribute('aria-haspopup', true);
                CUI.Utility.$1p(this.$O_3);
                CUI.Utility.$1Z(this.get_properties(), this.$O_3);
                this.$2v_3 = CUI.Utility.$2('img');
                var $v_5 = CUI.Utility.$h(2, 1, this.$0_0.$5_1.ImageDownArrow, this.$0_0.$5_1.ImageDownArrowClass, this.$2v_3, true, false, this.$0_0.$5_1.ImageDownArrowTop, this.$0_0.$5_1.ImageDownArrowLeft);
                if (CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().ToolTipTitle)) {
                    $v_0 = false;
                    this.$O_3.title = $v_1;
                    this.$2v_3.alt = $v_1;
                }
                this.$AH_0($p0);
                this.$O_3.appendChild($v_5);
                if ($v_0) {
                    $v_3 = CUI.Utility.$28($v_1);
                    this.$O_3.appendChild($v_3);
                }
                this.$E_3.appendChild(this.$1B_3);
                this.$E_3.appendChild(this.$O_3);
                this.$3L_3 = false;
                return this.$E_3;
            case 'Medium':
                this.$8_3 = CUI.Utility.$2('span');
                this.$8_3.setAttribute('mscui:controltype', this.get_$8X_0());
                this.$8_3.className = 'ms-cui-ctl-medium ms-cui-ctl';
                this.$b_3 = CUI.Utility.$2('span');
                this.$b_3.className = 'ms-cui-mrusb-selecteditem';
                this.$b_3.style.width = $v_2;
                if (!this.$2Q_2($v_4)) {
                    throw Error.create('No menu item with id \'' + this.get_properties().InitialItem + '\' exists in this control\'s menu');
                }
                this.$Q_3 = CUI.Utility.$2('a');
                CUI.Utility.$1p(this.$Q_3);
                CUI.Utility.$1Z(this.get_properties(), this.$Q_3);
                this.$Q_3.className = 'ms-cui-ctl';
                this.$Q_3.setAttribute('role', this.get_$2N_0());
                this.$Q_3.setAttribute('aria-haspopup', true);
                this.$2w_3 = CUI.Utility.$2('img');
                if (CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().ToolTipTitle)) {
                    $v_0 = false;
                    this.$Q_3.title = $v_1;
                    this.$2w_3.alt = $v_1;
                }
                var $v_6 = CUI.Utility.$h(2, 1, this.$0_0.$5_1.ImageDownArrow, this.$0_0.$5_1.ImageDownArrowClass, this.$2w_3, true, false, this.$0_0.$5_1.ImageDownArrowTop, this.$0_0.$5_1.ImageDownArrowLeft);
                this.$AH_0($p0);
                this.$Q_3.appendChild($v_6);
                if ($v_0) {
                    $v_3 = CUI.Utility.$28($v_1);
                    this.$Q_3.appendChild($v_3);
                }
                this.$8_3.appendChild(this.$b_3);
                this.$8_3.appendChild(this.$Q_3);
                this.$3L_3 = false;
                return this.$8_3;
            case 'Small':
                this.$A_3 = CUI.Utility.$2('span');
                this.$A_3.setAttribute('mscui:controltype', this.get_$8X_0());
                this.$A_3.className = 'ms-cui-ctl-medium ms-cui-ctl';
                this.$1I_3 = CUI.Utility.$2('span');
                this.$1I_3.className = 'ms-cui-mrusb-selecteditem';
                this.$1I_3.style.width = $v_2;
                if (!this.$2Q_2($v_4)) {
                    throw Error.create('No menu item with id \'' + this.get_properties().InitialItem + '\' exists in this control\'s menu');
                }
                this.$S_3 = CUI.Utility.$2('a');
                CUI.Utility.$1p(this.$S_3);
                CUI.Utility.$1Z(this.get_properties(), this.$S_3);
                this.$S_3.setAttribute('role', this.get_$2N_0());
                this.$S_3.setAttribute('aria-haspopup', true);
                this.$S_3.className = 'ms-cui-ctl ms-cui-mrusb-arwbtn';
                this.$2y_3 = CUI.Utility.$2('img');
                if (CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().ToolTipTitle)) {
                    this.$S_3.title = $v_1;
                    this.$2y_3.alt = $v_1;
                    $v_0 = false;
                }
                var $v_7 = CUI.Utility.$h(2, 1, this.$0_0.$5_1.ImageDownArrow, this.$0_0.$5_1.ImageDownArrowClass, this.$2y_3, true, false, this.$0_0.$5_1.ImageDownArrowTop, this.$0_0.$5_1.ImageDownArrowLeft);
                this.$AH_0($p0);
                this.$S_3.appendChild($v_7);
                if ($v_0) {
                    $v_3 = CUI.Utility.$28($v_1);
                    this.$S_3.appendChild($v_3);
                }
                this.$A_3.appendChild(this.$1I_3);
                this.$A_3.appendChild(this.$S_3);
                this.$3L_3 = false;
                return this.$A_3;
            default:
                this.$3L_3 = false;
                this.ensureValidDisplayMode($p0);
                return null;
        }
    },
    
    $AG_0: function CUI_Controls_MRUSplitButton$$AG_0($p0) {
        var $v_0 = $get(this.$4_0 + '-' + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
            case 'Large':
                this.$E_3 = $v_0;
                this.$1B_3 = this.$E_3.childNodes[0];
                this.$O_3 = this.$E_3.childNodes[1];
                this.$2v_3 = this.$O_3.childNodes[0].childNodes[0];
                break;
            case 'Medium':
                this.$8_3 = $v_0;
                this.$b_3 = this.$8_3.childNodes[0];
                this.$Q_3 = this.$8_3.childNodes[1];
                this.$2w_3 = this.$Q_3.childNodes[0].childNodes[0];
                break;
            case 'Small':
                this.$A_3 = $v_0;
                this.$1I_3 = this.$A_3.childNodes[0];
                this.$S_3 = this.$A_3.childNodes[1];
                this.$2y_3 = this.$S_3.childNodes[0].childNodes[0];
                break;
        }
    },
    
    $AH_0: function CUI_Controls_MRUSplitButton$$AH_0($p0) {
        this.$P_3($p0);
    },
    
    $P_3: function CUI_Controls_MRUSplitButton$$P_3($p0) {
        switch ($p0) {
            case 'Large':
                $addHandler(this.$O_3, 'click', this.$$d_onArrowButtonClick);
                $addHandler(this.$1B_3, 'mouseover', this.$$d_$CG_3);
                $addHandler(this.$1B_3, 'mouseout', this.$$d_$CF_3);
                $addHandler(this.$O_3, 'mouseover', this.$$d_onArrowButtonFocus);
                $addHandler(this.$O_3, 'mouseout', this.$$d_onArrowButtonBlur);
                $addHandler(this.$O_3, 'focus', this.$$d_onArrowButtonKeyboardFocus);
                $addHandler(this.$O_3, 'blur', this.$$d_onArrowButtonBlur);
                $addHandler(this.$O_3, 'keypress', this.$$d_onArrowButtonKeyPress);
                break;
            case 'Medium':
                $addHandler(this.$Q_3, 'click', this.$$d_onArrowButtonClick);
                $addHandler(this.$b_3, 'mouseover', this.$$d_$CG_3);
                $addHandler(this.$b_3, 'mouseout', this.$$d_$CF_3);
                $addHandler(this.$Q_3, 'mouseover', this.$$d_onArrowButtonFocus);
                $addHandler(this.$Q_3, 'mouseout', this.$$d_onArrowButtonBlur);
                $addHandler(this.$Q_3, 'focus', this.$$d_onArrowButtonKeyboardFocus);
                $addHandler(this.$Q_3, 'blur', this.$$d_onArrowButtonBlur);
                $addHandler(this.$Q_3, 'keypress', this.$$d_onArrowButtonKeyPress);
                break;
            case 'Small':
                $addHandler(this.$S_3, 'click', this.$$d_onArrowButtonClick);
                $addHandler(this.$1I_3, 'mouseover', this.$$d_$CG_3);
                $addHandler(this.$1I_3, 'mouseout', this.$$d_$CF_3);
                $addHandler(this.$S_3, 'mouseover', this.$$d_onArrowButtonFocus);
                $addHandler(this.$S_3, 'mouseout', this.$$d_onArrowButtonBlur);
                $addHandler(this.$S_3, 'focus', this.$$d_onArrowButtonKeyboardFocus);
                $addHandler(this.$S_3, 'blur', this.$$d_onArrowButtonBlur);
                $addHandler(this.$S_3, 'keypress', this.$$d_onArrowButtonKeyPress);
                break;
        }
    },
    
    get_$8X_0: function CUI_Controls_MRUSplitButton$get_$8X_0() {ULSpEN:;
        return 'MRUSplitButton';
    },
    
    selectMenuItem: function CUI_Controls_MRUSplitButton$selectMenuItem($p0) {
        if (this._selectedControl === $p0 && !this.$3L_3) {
            return;
        }
        var $v_0 = (!CUI.ScriptUtility.isNullOrUndefined(this.get_displayedComponent())) ? this.get_displayedComponent().get_title() : this.$5u_0;
        var $v_1;
        switch ($v_0) {
            case 'Large':
                $v_1 = this.$1B_3;
                break;
            case 'Medium':
                $v_1 = this.$b_3;
                break;
            case 'Small':
                $v_1 = this.$1I_3;
                break;
            default:
                throw Error.create('Invalid display mode on split button while selecting a menu item');
        }
        this._selectedControl = $p0;
        this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $p0.getMenuItemId();
        var $v_2 = $p0;
        if (CUI.MenuItem.isInstanceOfType($v_2.get_displayedComponent())) {
            this.$B_1.$3k_1 = $v_2.get_displayedComponent();
        }
        var $v_3 = this._selectedControl.getDropDownDOMElementForDisplayMode($v_0);
        if ($v_3.childNodes.length > 1) {
            var $v_4 = $v_3.childNodes[1];
            if ($v_4.childNodes.length > 1) {
                if ($v_4.childNodes[1].tagName.toLowerCase() === 'br') {
                    var $v_5 = CUI.Utility.$2('span');
                    CUI.Utility.$1r($v_5, ' ');
                    $v_4.replaceChild($v_5, $v_4.childNodes[1]);
                }
            }
        }
        $v_3.id = this.$4_0 + '-SelectedItem';
        if ($v_1.hasChildNodes()) {
            var $v_6 = $v_1.firstChild;
            $v_1.replaceChild($v_3, $v_6);
            $clearHandlers($v_6);
        }
        else {
            $v_1.appendChild($v_3);
        }
        this.$0_0.$2C_1 = true;
        $addHandler($v_3, 'click', this.$$d_$9W_3);
        $addHandler($v_3, 'dblclick', this.$$d_onDblClick);
    },
    
    addDisplayModes: function CUI_Controls_MRUSplitButton$addDisplayModes() {ULSpEN:;
        this.addDisplayMode('Large');
        this.addDisplayMode('Medium');
        this.addDisplayMode('Small');
    },
    
    launchMenuInternal: function CUI_Controls_MRUSplitButton$launchMenuInternal($p0) {
        var $v_0 = false;
        this.$0_0.$31_1 = false;
        switch (this.get_displayedComponent().get_title()) {
            case 'Large':
                $v_0 = this.launchMenu(this.$O_3, this.$$d_sendMenuCreationCommandEvent);
                break;
            case 'Medium':
                $v_0 = this.launchMenu(this.$Q_3, this.$$d_sendMenuCreationCommandEvent);
                break;
            case 'Small':
                $v_0 = this.launchMenu(this.$S_3, this.$$d_sendMenuCreationCommandEvent);
                break;
        }
        if ($v_0) {
            this.sendMenuCreationCommandEvent();
        }
    },
    
    onEnabledChanged: function CUI_Controls_MRUSplitButton$onEnabledChanged($p0) {
        CUI.Controls.DropDown.prototype.onEnabledChanged.call(this, $p0);
        var $v_0 = 'ms-cui-disabled';
        this.$1O_3 = $p0;
        if ($p0) {
            CUI.Utility.removeCSSClassFromElement(this.$E_3, $v_0);
            CUI.Utility.enableElement(this.$O_3);
            CUI.Utility.removeCSSClassFromElement(this.$8_3, $v_0);
            CUI.Utility.enableElement(this.$Q_3);
            CUI.Utility.removeCSSClassFromElement(this.$A_3, $v_0);
            CUI.Utility.enableElement(this.$S_3);
        }
        else {
            CUI.Utility.ensureCSSClassOnElement(this.$E_3, $v_0);
            CUI.Utility.disableElement(this.$O_3);
            CUI.Utility.ensureCSSClassOnElement(this.$8_3, $v_0);
            CUI.Utility.disableElement(this.$Q_3);
            CUI.Utility.ensureCSSClassOnElement(this.$A_3, $v_0);
            CUI.Utility.disableElement(this.$S_3);
        }
        CUI.Utility.setEnabledOnElement(this.$O_3, $p0);
        CUI.Utility.setEnabledOnElement(this.$Q_3, $p0);
        CUI.Utility.setEnabledOnElement(this.$S_3, $p0);
    },
    
    onDblClick: function CUI_Controls_MRUSplitButton$onDblClick($p0) {
        this.$Y_0();
        $p0.preventDefault();
        if (!this.get_enabled()) {
            return;
        }
        this.$9W_3($p0);
    },
    
    $9W_3: function CUI_Controls_MRUSplitButton$$9W_3($p0) {
        CUI.PMetrics.perfMark(7735);
        this.$Y_0();
        $p0.preventDefault();
        if (!this.get_enabled()) {
            return;
        }
        var $v_0 = 3;
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().Command, $v_0, { CommandValueId: this._selectedControl.getCommandValueId() });
    },
    
    $CG_3: function CUI_Controls_MRUSplitButton$$CG_3($p0) {
        this.onBeginFocus();
        if (!this.get_enabled()) {
            return;
        }
        switch (this.get_displayedComponent().get_title()) {
            case 'Large':
                CUI.Utility.ensureCSSClassOnElement(this.$1B_3, 'ms-cui-ctl-light-hoveredOver');
                CUI.Utility.ensureCSSClassOnElement(this.$O_3, 'ms-cui-ctl-split-hover');
                break;
            case 'Medium':
                CUI.Utility.ensureCSSClassOnElement(this.$b_3, 'ms-cui-ctl-light-hoveredOver');
                CUI.Utility.ensureCSSClassOnElement(this.$Q_3, 'ms-cui-ctl-split-hover');
                break;
            case 'Small':
                CUI.Utility.ensureCSSClassOnElement(this.$1I_3, 'ms-cui-ctl-light-hoveredOver');
                CUI.Utility.ensureCSSClassOnElement(this.$S_3, 'ms-cui-ctl-split-hover');
                break;
        }
        if (CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().CommandPreview)) {
            return;
        }
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().CommandPreview, 5, { CommandValueId: this._selectedControl.getCommandValueId() });
    },
    
    $CF_3: function CUI_Controls_MRUSplitButton$$CF_3($p0) {
        this.onEndFocus();
        if (!this.get_enabled()) {
            return;
        }
        switch (this.get_displayedComponent().get_title()) {
            case 'Large':
                CUI.Utility.removeCSSClassFromElement(this.$1B_3, 'ms-cui-ctl-light-hoveredOver');
                CUI.Utility.removeCSSClassFromElement(this.$O_3, 'ms-cui-ctl-split-hover');
                break;
            case 'Medium':
                CUI.Utility.removeCSSClassFromElement(this.$b_3, 'ms-cui-ctl-light-hoveredOver');
                CUI.Utility.removeCSSClassFromElement(this.$Q_3, 'ms-cui-ctl-split-hover');
                break;
            case 'Small':
                CUI.Utility.removeCSSClassFromElement(this.$1I_3, 'ms-cui-ctl-light-hoveredOver');
                CUI.Utility.removeCSSClassFromElement(this.$S_3, 'ms-cui-ctl-split-hover');
                break;
        }
        if (CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().CommandRevert)) {
            return;
        }
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().CommandRevert, 6, { CommandValueId: this._selectedControl.getCommandValueId() });
    },
    
    highlight: function CUI_Controls_MRUSplitButton$highlight() {ULSpEN:;
        switch (this.get_displayedComponent().get_title()) {
            case 'Large':
                CUI.Utility.ensureCSSClassOnElement(this.$1B_3, 'ms-cui-ctl-split-hover');
                CUI.Utility.ensureCSSClassOnElement(this.$O_3, 'ms-cui-ctl-light-hoveredOver');
                break;
            case 'Medium':
                CUI.Utility.ensureCSSClassOnElement(this.$b_3, 'ms-cui-ctl-split-hover');
                CUI.Utility.ensureCSSClassOnElement(this.$Q_3, 'ms-cui-ctl-light-hoveredOver');
                break;
            case 'Small':
                CUI.Utility.ensureCSSClassOnElement(this.$1I_3, 'ms-cui-ctl-split-hover');
                CUI.Utility.ensureCSSClassOnElement(this.$S_3, 'ms-cui-ctl-light-hoveredOver');
                break;
        }
    },
    
    removeHighlight: function CUI_Controls_MRUSplitButton$removeHighlight() {ULSpEN:;
        switch (this.get_displayedComponent().get_title()) {
            case 'Large':
                CUI.Utility.removeCSSClassFromElement(this.$1B_3, 'ms-cui-ctl-split-hover');
                CUI.Utility.removeCSSClassFromElement(this.$O_3, 'ms-cui-ctl-light-hoveredOver');
                break;
            case 'Medium':
                CUI.Utility.removeCSSClassFromElement(this.$b_3, 'ms-cui-ctl-split-hover');
                CUI.Utility.removeCSSClassFromElement(this.$Q_3, 'ms-cui-ctl-light-hoveredOver');
                break;
            case 'Small':
                CUI.Utility.removeCSSClassFromElement(this.$1I_3, 'ms-cui-ctl-split-hover');
                CUI.Utility.removeCSSClassFromElement(this.$S_3, 'ms-cui-ctl-light-hoveredOver');
                break;
        }
    },
    
    dispose: function CUI_Controls_MRUSplitButton$dispose() {ULSpEN:;
        CUI.Controls.DropDown.prototype.dispose.call(this);
        this.$E_3 = null;
        this.$2v_3 = null;
        this.$O_3 = null;
        this.$1B_3 = null;
        this.$8_3 = null;
        this.$2w_3 = null;
        this.$Q_3 = null;
        this.$b_3 = null;
        this.$A_3 = null;
        this.$2y_3 = null;
        this.$S_3 = null;
        this.$1I_3 = null;
    }
}


CUI.Controls.Separator = function CUI_Controls_Separator($p0, $p1, $p2) {
    CUI.Controls.Separator.initializeBase(this, [ $p0, $p1, $p2 ]);
    this.addDisplayMode('Small');
}
CUI.Controls.Separator.prototype = {
    $52_1: null,
    $53_1: null,
    $A_1: null,
    
    createDOMElementForDisplayMode: function CUI_Controls_Separator$createDOMElementForDisplayMode($p0) {
        switch ($p0) {
            case 'Small':
                this.$52_1 = CUI.Utility.$2('img');
                this.$52_1.style.cursor = 'default';
                this.$53_1 = CUI.Utility.$h(2, 11, this.get_$1_1().Image, this.get_$1_1().ImageClass, this.$52_1, true, false, this.get_$1_1().ImageTop, this.get_$1_1().ImageLeft);
                this.$A_1 = CUI.Utility.$2('span');
                this.$A_1.className = 'ms-cui-ctl ms-cui-ctl-small ms-cui-separator';
                this.$A_1.appendChild(this.$53_1);
                return this.$A_1;
            default:
                this.ensureValidDisplayMode($p0);
                break;
        }
        return null;
    },
    
    $AG_0: function CUI_Controls_Separator$$AG_0($p0) {
        var $v_0 = $get(this.$4_0 + '-' + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
            case 'Small':
                this.$53_1 = $v_0;
                break;
        }
    },
    
    onEnabledChanged: function CUI_Controls_Separator$onEnabledChanged($p0) {
    },
    
    get_$8X_0: function CUI_Controls_Separator$get_$8X_0() {ULSpEN:;
        return 'Separator';
    },
    
    $9Z_0: function CUI_Controls_Separator$$9Z_0() {
    },
    
    dispose: function CUI_Controls_Separator$dispose() {ULSpEN:;
        CUI.Control.prototype.dispose.call(this);
        this.$52_1 = null;
        this.$53_1 = null;
        this.$A_1 = null;
    },
    
    get_$1_1: function CUI_Controls_Separator$get_$1_1() {ULSpEN:;
        return this.$5_0;
    }
}


CUI.Controls.SpinnerCommandProperties = function CUI_Controls_SpinnerCommandProperties() {
}


CUI.Controls.Spinner = function CUI_Controls_Spinner($p0, $p1, $p2, $p3, $p4) {
    this.$$d_$A7_1 = Function.createDelegate(this, this.$A7_1);
    this.$$d_$A8_1 = Function.createDelegate(this, this.$A8_1);
    this.$$d_$Cs_1 = Function.createDelegate(this, this.$Cs_1);
    this.$$d_$Ct_1 = Function.createDelegate(this, this.$Ct_1);
    this.$$d_$9S_1 = Function.createDelegate(this, this.$9S_1);
    this.$$d_$C7_1 = Function.createDelegate(this, this.$C7_1);
    this.$$d_$CL_1 = Function.createDelegate(this, this.$CL_1);
    this.$$d_$Bs_1 = Function.createDelegate(this, this.$Bs_1);
    this.$$d_$9T_1 = Function.createDelegate(this, this.$9T_1);
    this.$$d_$C8_1 = Function.createDelegate(this, this.$C8_1);
    this.$$d_$CM_1 = Function.createDelegate(this, this.$CM_1);
    this.$$d_$Bt_1 = Function.createDelegate(this, this.$Bt_1);
    this.$$d_$By_1 = Function.createDelegate(this, this.$By_1);
    this.$$d_$Bv_1 = Function.createDelegate(this, this.$Bv_1);
    this.$$d_$9P_1 = Function.createDelegate(this, this.$9P_1);
    this.$$d_$5g_1 = Function.createDelegate(this, this.$5g_1);
    this.$$d_$5d_1 = Function.createDelegate(this, this.$5d_1);
    this.$$d_$7L_1 = Function.createDelegate(this, this.$7L_1);
    this.$$d_$4h_1 = Function.createDelegate(this, this.$4h_1);
    this.$$d_$3w_1 = Function.createDelegate(this, this.$3w_1);
    CUI.Controls.Spinner.initializeBase(this, [ $p0, $p1, $p2 ]);
    this.addDisplayMode('Medium');
    this.$41_1 = 0;
    this.$3f_1 = 1;
    this.$2M_1 = $p3;
    this.$4o_1 = $p4;
    this.$1M_1 = parseFloat(this.get_$1_1().DefaultValue);
    this.get_stateProperties()['Value'] = this.$1M_1;
    this.$2e_1 = null;
    this.get_stateProperties()['Text'] = null;
    this.$i_1 = this.$8p_1(this.get_$1_1().DefaultUnit);
    if (CUI.ScriptUtility.isNullOrUndefined(this.$i_1)) {
        throw Error.create('The default unit is not in the list of valid units');
    }
    this.get_stateProperties()['Unit'] = this.$i_1.$5F_0;
}
CUI.Controls.Spinner.createUnit = function CUI_Controls_Spinner$createUnit($p0, $p1, $p2, $p3, $p4, $p5) {
    return new CUI.Unit($p0, $p1, $p2, $p3, $p4, $p5);
}
CUI.Controls.Spinner.$BP = function CUI_Controls_Spinner$$BP($p0, $p1) {
    var $v_0 = Math.pow(10, $p1.$5w_0);
    return Math.round($p0 * $v_0) / $v_0;
}
CUI.Controls.Spinner.prototype = {
    $F_1: null,
    $C_1: null,
    $2D_1: null,
    $V_1: null,
    $U_1: null,
    $4W_1: null,
    $3o_1: null,
    $44_1: null,
    $3R_1: null,
    $i_1: null,
    $2M_1: null,
    $1M_1: 0,
    $2e_1: null,
    $8G_1: false,
    $41_1: 0,
    $4m_1: 0,
    $81_1: 0,
    $3f_1: 0,
    $2a_1: 0,
    $3m_1: 0,
    $4q_1: null,
    $3N_1: false,
    $4o_1: null,
    
    createDOMElementForDisplayMode: function CUI_Controls_Spinner$createDOMElementForDisplayMode($p0) {
        switch ($p0) {
            case 'Medium':
                this.$F_1 = CUI.Utility.$2('span');
                this.$F_1.className = 'ms-cui-spn';
                this.$F_1.setAttribute('mscui:controltype', this.get_$8X_0());
                this.$C_1 = CUI.Utility.$6w('input');
                this.$C_1.className = 'ms-cui-spn-txtbx';
                this.$C_1.id = this.$4_0;
                this.$C_1.setAttribute('role', 'textbox');
                CUI.Utility.$1Z(this.get_$1_1(), this.$C_1);
                CUI.Utility.$7f(this.$C_1, (this.get_$1_1()).ImeEnabled);
                this.$2D_1 = CUI.Utility.$2('span');
                this.$2D_1.className = 'ms-cui-spn-arwbx';
                this.$V_1 = CUI.Utility.$2('a');
                this.$V_1.className = 'ms-cui-spn-btnup';
                this.$V_1.setAttribute('role', 'spinbutton');
                this.$U_1 = CUI.Utility.$2('a');
                this.$U_1.className = 'ms-cui-spn-btndown';
                this.$U_1.setAttribute('role', 'spinbutton');
                this.$4W_1 = CUI.Utility.$2('img');
                this.$4W_1.alt = '';
                this.$3o_1 = CUI.Utility.$h(2, 1, this.$0_0.$5_1.ImageUpArrow, this.$0_0.$5_1.ImageUpArrowClass, this.$4W_1, true, false, this.$0_0.$5_1.ImageUpArrowTop, this.$0_0.$5_1.ImageUpArrowLeft);
                CUI.Utility.ensureCSSClassOnElement(this.$3o_1, 'ms-cui-spn-imgcnt');
                if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$1_1().AltUpArrow)) {
                    this.$V_1.title = this.get_$1_1().AltUpArrow;
                }
                this.$44_1 = CUI.Utility.$2('img');
                this.$44_1.alt = '';
                this.$3R_1 = CUI.Utility.$h(2, 1, this.$0_0.$5_1.ImageDownArrow, this.$0_0.$5_1.ImageDownArrowClass, this.$44_1, true, false, this.$0_0.$5_1.ImageDownArrowTop, this.$0_0.$5_1.ImageDownArrowLeft);
                CUI.Utility.ensureCSSClassOnElement(this.$3R_1, 'ms-cui-spn-imgcnt');
                if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$1_1().AltDownArrow)) {
                    this.$U_1.title = this.get_$1_1().AltDownArrow;
                }
                this.$AH_0($p0);
                this.$F_1.appendChild(this.$C_1);
                this.$F_1.appendChild(this.$2D_1);
                this.$2D_1.appendChild(this.$V_1);
                this.$2D_1.appendChild(this.$U_1);
                this.$V_1.appendChild(this.$3o_1);
                this.$U_1.appendChild(this.$3R_1);
                return this.$F_1;
            default:
                this.ensureValidDisplayMode($p0);
                return null;
        }
    },
    
    $Cg_1: function CUI_Controls_Spinner$$Cg_1() {ULSpEN:;
        this.$Cl_1(parseFloat(this.get_$1_1().DefaultValue));
        this.$4m_1 = parseInt(this.get_$1_1().AccelerationInterval);
        this.$81_1 = parseInt(this.get_$1_1().MultiplierInterval);
        this.$4q_1 = this.get_$1_1().Command;
    },
    
    $AG_0: function CUI_Controls_Spinner$$AG_0($p0) {
        var $v_0 = $get(this.$4_0 + '-' + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
            case 'Medium':
                this.$F_1 = $v_0;
                this.$C_1 = this.$F_1.childNodes[0];
                this.$2D_1 = this.$F_1.childNodes[1];
                this.$V_1 = this.$2D_1.childNodes[0];
                this.$U_1 = this.$2D_1.childNodes[1];
                this.$3o_1 = this.$V_1.childNodes[0];
                this.$3R_1 = this.$U_1.childNodes[0];
                this.$4W_1 = this.$3o_1.childNodes[0];
                this.$44_1 = this.$3R_1.childNodes[0];
                break;
        }
    },
    
    $AH_0: function CUI_Controls_Spinner$$AH_0($p0) {
        switch ($p0) {
            case 'Medium':
                this.$P_1();
                this.$Cg_1();
                break;
        }
    },
    
    $P_1: function CUI_Controls_Spinner$$P_1() {ULSpEN:;
        $addHandler(this.$C_1, 'focus', this.$$d_$3w_1);
        $addHandler(this.$C_1, 'blur', this.$$d_$4h_1);
        $addHandler(this.$C_1, 'change', this.$$d_$7L_1);
        $addHandler(this.$C_1, 'mouseover', this.$$d_$5d_1);
        $addHandler(this.$C_1, 'mouseout', this.$$d_$5g_1);
        $addHandler(this.$C_1, 'keypress', this.$$d_$9P_1);
        $addHandler(this.$C_1, 'keydown', this.$$d_$Bv_1);
        $addHandler(this.$C_1, 'keyup', this.$$d_$By_1);
        $addHandler(this.$V_1, 'mouseover', this.$$d_$Bt_1);
        $addHandler(this.$V_1, 'mouseout', this.$$d_$CM_1);
        $addHandler(this.$V_1, 'mousedown', this.$$d_$C8_1);
        $addHandler(this.$V_1, 'mouseup', this.$$d_$9T_1);
        $addHandler(this.$U_1, 'mouseover', this.$$d_$Bs_1);
        $addHandler(this.$U_1, 'mouseout', this.$$d_$CL_1);
        $addHandler(this.$U_1, 'mousedown', this.$$d_$C7_1);
        $addHandler(this.$U_1, 'mouseup', this.$$d_$9S_1);
    },
    
    get_$8X_0: function CUI_Controls_Spinner$get_$8X_0() {ULSpEN:;
        return 'Spinner';
    },
    
    onEnabledChanged: function CUI_Controls_Spinner$onEnabledChanged($p0) {
        CUI.Utility.setEnabledOnElement(this.$C_1, $p0);
    },
    
    $7d_0: function CUI_Controls_Spinner$$7d_0() {ULSpEN:;
        if (!this.get_enabled()) {
            return false;
        }
        this.$C_1.focus();
        return true;
    },
    
    $3w_1: function CUI_Controls_Spinner$$3w_1($p0) {
        this.onBeginFocus();
        if (!this.get_enabled()) {
            return;
        }
        this.$0_0.set_$l_1(this);
        this.$9H_1($p0);
        CUI.Utility.$7X(this.$C_1);
    },
    
    $4h_1: function CUI_Controls_Spinner$$4h_1($p0) {
        this.onEndFocus();
        if (!this.get_enabled()) {
            return;
        }
        if (this.$33_1) {
            this.$40_1();
        }
        this.$9H_1($p0);
    },
    
    $3d_1: false,
    
    $9H_1: function CUI_Controls_Spinner$$9H_1($p0) {
        this.$3d_1 = !this.$3d_1;
        if (this.$3d_1) {
            this.$5d_1($p0);
        }
        else {
            this.$5g_1($p0);
        }
    },
    
    $7L_1: function CUI_Controls_Spinner$$7L_1($p0) {
        this.$Y_0();
        if (!this.get_enabled()) {
            return;
        }
        if (!this.$Cz_1()) {
            this.$4j_1();
            return;
        }
        var $v_0 = 1;
        this.get_stateProperties()['ChangeType'] = 'manual';
        this.get_stateProperties()['ChangedByMouse'] = false;
        this.get_displayedComponent().raiseCommandEvent(this.$4q_1, $v_0, this.get_stateProperties());
    },
    
    $Ai_0: function CUI_Controls_Spinner$$Ai_0() {ULSpEN:;
        this.$7L_1(null);
    },
    
    $5d_1: function CUI_Controls_Spinner$$5d_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        CUI.Utility.ensureCSSClassOnElement(this.$C_1, 'ms-cui-spn-txtbx-hover');
        CUI.Utility.ensureCSSClassOnElement(this.$V_1, 'ms-cui-spn-btnup-ctl-hover');
        CUI.Utility.ensureCSSClassOnElement(this.$U_1, 'ms-cui-spn-btndown-ctl-hover');
    },
    
    $5g_1: function CUI_Controls_Spinner$$5g_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        if (!this.$3d_1) {
            CUI.Utility.removeCSSClassFromElement(this.$C_1, 'ms-cui-spn-txtbx-hover');
            CUI.Utility.removeCSSClassFromElement(this.$V_1, 'ms-cui-spn-btnup-ctl-hover');
            CUI.Utility.removeCSSClassFromElement(this.$U_1, 'ms-cui-spn-btndown-ctl-hover');
            CUI.Utility.removeCSSClassFromElement(this.$V_1, 'ms-cui-spn-btnup-down');
            CUI.Utility.removeCSSClassFromElement(this.$U_1, 'ms-cui-spn-btndown-down');
        }
    },
    
    $Bt_1: function CUI_Controls_Spinner$$Bt_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        this.$5d_1($p0);
        CUI.Utility.removeCSSClassFromElement(this.$V_1, 'ms-cui-spn-btnup-ctl-hover');
        CUI.Utility.ensureCSSClassOnElement(this.$V_1, 'ms-cui-spn-btnup-hover');
    },
    
    $CM_1: function CUI_Controls_Spinner$$CM_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        if (!this.$33_1) {
            this.$9T_1($p0);
        }
        this.$5g_1($p0);
        if (this.$3d_1) {
            CUI.Utility.ensureCSSClassOnElement(this.$V_1, 'ms-cui-spn-btnup-ctl-hover');
        }
        CUI.Utility.removeCSSClassFromElement(this.$V_1, 'ms-cui-spn-btnup-hover');
    },
    
    $C8_1: function CUI_Controls_Spinner$$C8_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        this.$3N_1 = true;
        if ($p0.button) {
            this.$40_1();
            return;
        }
        this.$5l_1(1);
        CUI.Utility.ensureCSSClassOnElement(this.$V_1, 'ms-cui-spn-btnup-down');
    },
    
    $9T_1: function CUI_Controls_Spinner$$9T_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        this.$40_1();
        this.$0_0.set_$l_1(this);
        CUI.Utility.removeCSSClassFromElement(this.$V_1, 'ms-cui-spn-btnup-down');
    },
    
    $9D_1: function CUI_Controls_Spinner$$9D_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$2e_1)) {
            if (!this.$3K_1(this.$i_1, this.$1M_1 + $p0 * this.$i_1.$6l_0)) {
                if (this.$1M_1 < this.$i_1.$4N_0) {
                    this.$3K_1(this.$i_1, this.$i_1.$4N_0);
                }
                else {
                    this.$4j_1();
                    return;
                }
            }
        }
        var $v_0 = 9;
        this.get_stateProperties()['ChangeType'] = 'increase';
        this.get_stateProperties()['ChangedByMouse'] = this.$3N_1;
        this.get_displayedComponent().raiseCommandEvent(this.$4q_1, $v_0, this.get_stateProperties());
    },
    
    $Bs_1: function CUI_Controls_Spinner$$Bs_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        this.$5d_1($p0);
        CUI.Utility.removeCSSClassFromElement(this.$U_1, 'ms-cui-spn-btndown-ctl-hover');
        CUI.Utility.ensureCSSClassOnElement(this.$U_1, 'ms-cui-spn-btndown-hover');
    },
    
    $CL_1: function CUI_Controls_Spinner$$CL_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        if (!this.$33_1) {
            this.$9S_1($p0);
        }
        this.$5g_1($p0);
        if (this.$3d_1) {
            CUI.Utility.ensureCSSClassOnElement(this.$U_1, 'ms-cui-spn-btndown-ctl-hover');
        }
        CUI.Utility.removeCSSClassFromElement(this.$U_1, 'ms-cui-spn-btndown-hover');
    },
    
    $C7_1: function CUI_Controls_Spinner$$C7_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        this.$3N_1 = true;
        if ($p0.button) {
            this.$40_1();
            return;
        }
        this.$5l_1(CUI.Controls.Spinner.$6x);
        CUI.Utility.ensureCSSClassOnElement(this.$U_1, 'ms-cui-spn-btndown-down');
    },
    
    $9S_1: function CUI_Controls_Spinner$$9S_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        this.$40_1();
        this.$0_0.set_$l_1(this);
        CUI.Utility.removeCSSClassFromElement(this.$U_1, 'ms-cui-spn-btndown-down');
    },
    
    $8i_1: function CUI_Controls_Spinner$$8i_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$2e_1)) {
            if (!this.$3K_1(this.$i_1, this.$1M_1 - $p0 * this.$i_1.$6l_0)) {
                if (this.$1M_1 > this.$i_1.$4P_0) {
                    this.$3K_1(this.$i_1, this.$i_1.$4P_0);
                }
                else {
                    this.$4j_1();
                    return;
                }
            }
        }
        var $v_0 = 9;
        this.get_stateProperties()['ChangeType'] = 'decrease';
        this.get_stateProperties()['ChangedByMouse'] = this.$3N_1;
        this.get_displayedComponent().raiseCommandEvent(this.$4q_1, $v_0, this.get_stateProperties());
    },
    
    $9P_1: function CUI_Controls_Spinner$$9P_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        this.$3N_1 = false;
        var $v_0 = ($p0.rawEvent).keyCode;
        if ($v_0 === 27) {
            this.$4j_1();
        }
        else if ($v_0 === 13) {
            this.$7L_1($p0);
            $p0.preventDefault();
        }
        else {
            return;
        }
    },
    
    $33_1: false,
    
    $Bv_1: function CUI_Controls_Spinner$$Bv_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        if (this.$33_1) {
            return;
        }
        this.$3N_1 = false;
        var $v_0 = ($p0.rawEvent).keyCode;
        if ($v_0 === 38) {
            this.$5l_1(1);
            CUI.Utility.ensureCSSClassOnElement(this.$V_1, 'ms-cui-spn-btnup-down');
        }
        else if ($v_0 === 40) {
            this.$5l_1(CUI.Controls.Spinner.$6x);
            CUI.Utility.ensureCSSClassOnElement(this.$U_1, 'ms-cui-spn-btndown-down');
        }
        else {
            return;
        }
        this.$33_1 = true;
    },
    
    $By_1: function CUI_Controls_Spinner$$By_1($p0) {
        if (!this.get_enabled()) {
            return;
        }
        if (!this.$33_1) {
            return;
        }
        this.$40_1();
        CUI.Utility.removeCSSClassFromElement(this.$V_1, 'ms-cui-spn-btnup-down');
        CUI.Utility.removeCSSClassFromElement(this.$U_1, 'ms-cui-spn-btndown-down');
        this.$33_1 = false;
    },
    
    $A8_1: function CUI_Controls_Spinner$$A8_1() {ULSpEN:;
        this.$41_1++;
        this.$9D_1(this.$8s_1());
    },
    
    $A7_1: function CUI_Controls_Spinner$$A7_1() {ULSpEN:;
        this.$41_1++;
        this.$8i_1(this.$8s_1());
    },
    
    $5l_1: function CUI_Controls_Spinner$$5l_1($p0) {
        if (this.$2a_1 > -1 || this.$3m_1 > -1) {
            return;
        }
        if ($p0 === 1) {
            this.$9D_1(1);
        }
        else {
            this.$8i_1(1);
        }
        if ($p0 === 1) {
            this.$3m_1 = window.setTimeout(this.$$d_$Ct_1, 500);
        }
        else {
            this.$3m_1 = window.setTimeout(this.$$d_$Cs_1, 500);
        }
    },
    
    $40_1: function CUI_Controls_Spinner$$40_1() {ULSpEN:;
        if (this.$3m_1 > -1) {
            window.clearTimeout(this.$3m_1);
            this.$3m_1 = -1;
        }
        if (this.$2a_1 > -1) {
            window.clearInterval(this.$2a_1);
            this.$2a_1 = -1;
            this.$3f_1 = 1;
            this.$41_1 = 0;
        }
    },
    
    $Ct_1: function CUI_Controls_Spinner$$Ct_1() {ULSpEN:;
        if (this.$2a_1 !== -1) {
            return;
        }
        this.$2a_1 = window.setInterval(this.$$d_$A8_1, this.$4m_1);
    },
    
    $Cs_1: function CUI_Controls_Spinner$$Cs_1() {ULSpEN:;
        if (this.$2a_1 !== -1) {
            return;
        }
        this.$2a_1 = window.setInterval(this.$$d_$A7_1, this.$4m_1);
    },
    
    $8s_1: function CUI_Controls_Spinner$$8s_1() {ULSpEN:;
        var $v_0 = this.$41_1 * this.$4m_1;
        if ($v_0 >= this.$3f_1 * this.$81_1 && this.$3f_1 <= 3) {
            this.$3f_1++;
        }
        return this.$3f_1;
    },
    
    $Cl_1: function CUI_Controls_Spinner$$Cl_1($p0) {
        this.$1M_1 = $p0;
        this.$2e_1 = null;
        this.$C_1.value = this.$74_1($p0, this.$i_1.get_$5R_0());
        this.get_stateProperties()['Value'] = this.$1M_1;
        this.get_stateProperties()['Text'] = null;
    },
    
    $9p_1: function CUI_Controls_Spinner$$9p_1($p0) {
        if ($p0 !== this.$2e_1) {
            this.$2e_1 = $p0;
            this.$C_1.value = $p0;
            this.get_stateProperties()['Text'] = $p0;
        }
    },
    
    get_value: function CUI_Controls_Spinner$get_value() {ULSpEN:;
        return this.$1M_1;
    },
    set_value: function CUI_Controls_Spinner$set_value($p0) {
        if (!this.$3K_1(this.$i_1, $p0)) {
            throw Error.create('Invalid value');
        }
        return $p0;
    },
    
    get_unitString: function CUI_Controls_Spinner$get_unitString() {ULSpEN:;
        return this.$i_1.get_$5R_0();
    },
    set_unitString: function CUI_Controls_Spinner$set_unitString($p0) {
        if (!this.$9v_1(this.$1M_1.toString() + $p0)) {
            this.$4j_1();
            throw Error.create('Invalid unit');
        }
        return $p0;
    },
    
    $7w_1: false,
    $7v_1: false,
    
    get_$7J_1: function CUI_Controls_Spinner$get_$7J_1() {ULSpEN:;
        if (!this.$7w_1) {
            this.$7v_1 = this.$0_0._decimalSeparator === ',';
            this.$7w_1 = true;
        }
        return this.$7v_1;
    },
    
    $Cz_1: function CUI_Controls_Spinner$$Cz_1() {ULSpEN:;
        var $v_0 = this.$C_1.value;
        return this.$9v_1($v_0);
    },
    
    $9v_1: function CUI_Controls_Spinner$$9v_1($p0) {
        if (this.$D1_1($p0)) {
            return true;
        }
        var $v_0 = '(\\-)?[0-9]*[\\.,]?[0-9]+';
        var $v_1 = new RegExp($v_0);
        $p0 = $p0.trim();
        if ($p0.search($v_1) < 0) {
            return false;
        }
        var $v_2 = $p0.replace($v_1, '');
        var $v_3 = $p0.replace($v_2, '');
        var $v_4 = $v_2.trim();
        var $v_5;
        var $v_6;
        var $v_7 = false;
        if (this.get_$7J_1()) {
            $v_3 = $v_3.replace('.', '');
            if ($v_3.indexOf(',') > -1) {
                $v_7 = true;
                $v_3 = $v_3.replace(',', '.');
            }
        }
        else {
            $v_3 = $v_3.replace(',', '');
        }
        $v_6 = parseFloat($v_3);
        if (!CUI.ScriptUtility.isNullOrEmptyString($v_4)) {
            if (this.$i_1.$6u_0($v_4)) {
                $v_5 = this.$i_1;
            }
            else {
                $v_5 = this.$BO_1($v_4);
            }
        }
        else {
            $v_5 = this.$i_1;
        }
        return this.$3K_1($v_5, $v_6, $v_7);
    },
    
    $D1_1: function CUI_Controls_Spinner$$D1_1($p0) {
        if (!CUI.Utility.$o(this.get_$1_1().TextEnabled)) {
            return false;
        }
        var $v_0 = -1;
        for (var $v_1 = 0; $v_1 < this.$4o_1.length; $v_1++) {
            if (this.$4o_1[$v_1].toLowerCase() === $p0.toLowerCase()) {
                $v_0 = $v_1;
                break;
            }
        }
        if ($v_0 !== -1) {
            this.$9p_1(this.$4o_1[$v_0]);
            return true;
        }
        return false;
    },
    
    $3K_1: function CUI_Controls_Spinner$$3K_1($p0, $p1, $p2) {
        if (!$p0) {
            return false;
        }
        var $v_0 = $p0.$D0_0($p1);
        if ($v_0 === CUI.Unit.$7I) {
            return false;
        }
        else if ($v_0 === 1) {
            $p1 = CUI.Controls.Spinner.$BP($p1, $p0);
        }
        else if ($v_0 === 2) {
            $p1 = $p0.$4P_0;
        }
        else if ($v_0 === 3) {
            $p1 = $p0.$4N_0;
        }
        if (arguments.length < 3) {
            $p2 = this.get_$7J_1();
        }
        this.$8G_1 = $p2;
        if (($p1 !== this.$1M_1) || ($p0 !== this.$i_1)) {
            this.$C_1.value = this.$74_1($p1, $p0.get_$5R_0(), $p2);
            this.$i_1 = $p0;
            this.get_stateProperties()['Unit'] = $p0.$5F_0;
            this.$1M_1 = $p1;
            this.get_stateProperties()['Value'] = $p1;
        }
        this.$2e_1 = null;
        this.get_stateProperties()['Text'] = null;
        return true;
    },
    
    $4j_1: function CUI_Controls_Spinner$$4j_1() {ULSpEN:;
        this.$C_1.value = this.$2e_1 || this.$74_1(this.$1M_1, this.$i_1.get_$5R_0(), this.$8G_1);
    },
    
    $8A_1: false,
    $8B_1: false,
    $5N_1: false,
    
    $74_1: function CUI_Controls_Spinner$$74_1($p0, $p1, $p2) {
        if (arguments.length < 3) {
            $p2 = this.get_$7J_1();
        }
        var $v_0 = $p0.toString();
        if ($p2) {
            $v_0 = $v_0.replace('.', ',');
        }
        var $v_1;
        if (!this.$8B_1) {
            this.$8A_1 = CUI.Utility.$Co(this.$0_0._percentPositivePattern);
            this.$8B_1 = true;
            this.$5N_1 = CUI.Utility.$Cm(this.$0_0._percentPositivePattern);
        }
        if ($p1 === '%') {
            if (this.$8A_1) {
                if (this.$5N_1) {
                    $v_1 = $p1 + $v_0;
                }
                else {
                    $v_1 = $p1 + ' ' + $v_0;
                }
            }
            else {
                if (this.$5N_1) {
                    $v_1 = $v_0 + $p1;
                }
                else {
                    $v_1 = $v_0 + ' ' + $p1;
                }
            }
        }
        else if ($p1 === '%') {
            if (this.$5N_1) {
                $v_1 = $v_0 + ' ' + $p1;
            }
            else {
                $v_1 = $v_0 + $p1;
            }
        }
        else {
            $v_1 = $v_0 + ' ' + $p1;
        }
        return $v_1;
    },
    
    $BO_1: function CUI_Controls_Spinner$$BO_1($p0) {
        for (var $v_0 = 0; $v_0 < this.$2M_1.length; $v_0++) {
            if (this.$2M_1[$v_0].$6u_0($p0)) {
                return this.$2M_1[$v_0];
            }
        }
        return null;
    },
    
    $8p_1: function CUI_Controls_Spinner$$8p_1($p0) {
        for (var $v_0 = 0; $v_0 < this.$2M_1.length; $v_0++) {
            if (this.$2M_1[$v_0].$5F_0 === $p0) {
                return this.$2M_1[$v_0];
            }
            if (this.$2M_1[$v_0].$6u_0($p0)) {
                return this.$2M_1[$v_0];
            }
        }
        return null;
    },
    
    $9Z_0: function CUI_Controls_Spinner$$9Z_0() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$F_1)) {
            return;
        }
        var $v_0 = this.pollForStateAndUpdateInternal(this.get_$1_1().Command, this.get_$1_1().QueryCommand, this.get_stateProperties(), true);
        if (($v_0 & 2) > 0) {
            var $v_1 = !CUI.ScriptUtility.isNullOrUndefined(this.get_stateProperties()['Text']);
            if ($v_1) {
                var $v_6 = this.get_stateProperties()['Text'];
                this.$9p_1($v_6);
            }
            else {
                var $v_7 = this.$8p_1(this.get_stateProperties()['Unit']);
                if (!this.$3K_1($v_7, this.get_stateProperties()['Value'])) {
                    throw Error.create('Invalid value and/or unit returned when polling');
                }
            }
            var $v_2 = this.$V_1.title;
            var $v_3 = CUI.Utility.$2k(this.get_stateProperties()['AltUpArrow'], this.get_$1_1().AltUpArrow);
            if ($v_3 !== $v_2) {
                this.$V_1.title = $v_3;
            }
            var $v_4 = this.$U_1.title;
            var $v_5 = CUI.Utility.$2k(this.get_stateProperties()['AltDownArrow'], this.get_$1_1().AltDownArrow);
            if ($v_5 !== $v_4) {
                this.$U_1.title = $v_5;
            }
        }
    },
    
    dispose: function CUI_Controls_Spinner$dispose() {ULSpEN:;
        CUI.Control.prototype.dispose.call(this);
        this.$44_1 = null;
        this.$3R_1 = null;
        this.$4W_1 = null;
        this.$3o_1 = null;
        this.$F_1 = null;
        this.$2D_1 = null;
        this.$U_1 = null;
        this.$C_1 = null;
        this.$V_1 = null;
    },
    
    get_$1_1: function CUI_Controls_Spinner$get_$1_1() {ULSpEN:;
        return this.$5_0;
    }
}


CUI.Controls.SplitButtonCommandProperties = function CUI_Controls_SplitButtonCommandProperties() {
}


CUI.Controls.SplitButton = function CUI_Controls_SplitButton($p0, $p1, $p2, $p3) {
    this.$$d_onMenuButtonKeyPress = Function.createDelegate(this, this.onMenuButtonKeyPress);
    this.$$d_onMenuButtonABlur = Function.createDelegate(this, this.onMenuButtonABlur);
    this.$$d_onMenuButtonKeyboardFocus = Function.createDelegate(this, this.onMenuButtonKeyboardFocus);
    this.$$d_onMenuButtonBlur = Function.createDelegate(this, this.onMenuButtonBlur);
    this.$$d_onMenuButtonFocus = Function.createDelegate(this, this.onMenuButtonFocus);
    this.$$d_onMenuButtonClick = Function.createDelegate(this, this.onMenuButtonClick);
    this.$$d_onButtonKeyboardFocus = Function.createDelegate(this, this.onButtonKeyboardFocus);
    this.$$d_onButtonBlur = Function.createDelegate(this, this.onButtonBlur);
    this.$$d_onButtonFocus = Function.createDelegate(this, this.onButtonFocus);
    this.$$d_onMouseOut = Function.createDelegate(this, this.onMouseOut);
    this.$$d_onMouseOver = Function.createDelegate(this, this.onMouseOver);
    this.$$d_onDblClick = Function.createDelegate(this, this.onDblClick);
    this.$$d_onButtonClick = Function.createDelegate(this, this.onButtonClick);
    CUI.Controls.SplitButton.initializeBase(this, [ $p0, $p1, $p2, $p3 ]);
    this.addDisplayMode('Large');
    this.addDisplayMode('Medium');
    this.addDisplayMode('Small');
    this.set_on(false);
}
CUI.Controls.SplitButton.prototype = {
    $E_2: null,
    $47_2: null,
    $2V_2: null,
    $48_2: null,
    $8_2: null,
    $49_2: null,
    $2W_2: null,
    $4A_2: null,
    $A_2: null,
    $4F_2: null,
    $2X_2: null,
    $4G_2: null,
    
    createDOMElementForDisplayMode: function CUI_Controls_SplitButton$createDOMElementForDisplayMode($p0) {
        var $v_0 = (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_2().Alt)) ? this.get_$1_2().LabelText : this.get_$1_2().Alt;
        var $v_1 = (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_2().MenuAlt)) ? $v_0 : this.get_$1_2().MenuAlt;
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = '';
        }
        if (CUI.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = '';
        }
        switch ($p0) {
            case 'Large':
                this.$E_2 = CUI.Control.createTwoAnchorControlDOMElementCore(this, this.$0_0, 'Large', this.get_$1_2().Id, this.get_$1_2().Image32by32, this.get_$1_2().Image32by32Class, this.get_$1_2().Image32by32Top, this.get_$1_2().Image32by32Left, this.get_$1_2().Image16by16, this.get_$1_2().Image16by16Class, this.get_$1_2().Image16by16Top, this.get_$1_2().Image16by16Left, this.get_$1_2().LabelText, this.get_$1_2().Alt, this.get_$1_2().ToolTipTitle, true);
                this.$AG_0('Large');
                this.$AH_0($p0);
                return this.$E_2;
            case 'Medium':
                this.$8_2 = CUI.Control.createTwoAnchorControlDOMElementCore(this, this.$0_0, 'Medium', this.get_$1_2().Id, this.get_$1_2().Image32by32, this.get_$1_2().Image32by32Class, this.get_$1_2().Image32by32Top, this.get_$1_2().Image32by32Left, this.get_$1_2().Image16by16, this.get_$1_2().Image16by16Class, this.get_$1_2().Image16by16Top, this.get_$1_2().Image16by16Left, this.get_$1_2().LabelText, this.get_$1_2().Alt, this.get_$1_2().ToolTipTitle, true);
                this.$AG_0('Medium');
                this.$AH_0($p0);
                return this.$8_2;
            case 'Small':
                this.$A_2 = CUI.Control.createTwoAnchorControlDOMElementCore(this, this.$0_0, 'Small', this.get_$1_2().Id, this.get_$1_2().Image32by32, this.get_$1_2().Image32by32Class, this.get_$1_2().Image32by32Top, this.get_$1_2().Image32by32Left, this.get_$1_2().Image16by16, this.get_$1_2().Image16by16Class, this.get_$1_2().Image16by16Top, this.get_$1_2().Image16by16Left, this.get_$1_2().LabelText, this.get_$1_2().Alt, this.get_$1_2().ToolTipTitle, true);
                this.$AG_0('Small');
                this.$AH_0($p0);
                return this.$A_2;
            default:
                this.ensureValidDisplayMode($p0);
                return null;
        }
    },
    
    $AG_0: function CUI_Controls_SplitButton$$AG_0($p0) {
        var $v_0 = $get(this.$4_0 + '-' + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            switch ($p0) {
                case 'Large':
                    $v_0 = this.$E_2;
                    break;
                case 'Medium':
                    $v_0 = this.$8_2;
                    break;
                case 'Small':
                    $v_0 = this.$A_2;
                    break;
            }
        }
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return;
        }
        var $v_1 = $v_0.firstChild;
        if (CUI.ScriptUtility.isNullOrUndefined($v_1)) {
            return;
        }
        var $v_2 = $v_1;
        for (var $v_5 = 0; $v_5 < 3; $v_5++) {
            $v_2 = $v_2.firstChild;
            if (CUI.ScriptUtility.isNullOrUndefined($v_2)) {
                return;
            }
        }
        var $v_3 = $v_2;
        var $v_4 = $v_0.childNodes[1];
        if (CUI.ScriptUtility.isNullOrUndefined($v_4)) {
            return;
        }
        switch ($p0) {
            case 'Large':
                this.$E_2 = $v_0;
                this.$47_2 = $v_1;
                this.$2V_2 = $v_3;
                this.$48_2 = $v_4;
                break;
            case 'Medium':
                this.$8_2 = $v_0;
                this.$49_2 = $v_1;
                this.$2W_2 = $v_3;
                this.$4A_2 = $v_4;
                break;
            case 'Small':
                this.$A_2 = $v_0;
                this.$4F_2 = $v_1;
                this.$2X_2 = $v_3;
                this.$4G_2 = $v_4;
                break;
        }
    },
    
    $AH_0: function CUI_Controls_SplitButton$$AH_0($p0) {
        this.$P_2($p0);
    },
    
    $P_2: function CUI_Controls_SplitButton$$P_2($p0) {
        var $v_0 = null;
        var $v_1 = null;
        switch ($p0) {
            case 'Large':
                $v_0 = this.$47_2;
                $v_1 = this.$48_2;
                break;
            case 'Medium':
                $v_0 = this.$49_2;
                $v_1 = this.$4A_2;
                break;
            case 'Small':
                $v_0 = this.$4F_2;
                $v_1 = this.$4G_2;
                break;
        }
        $addHandler($v_0, 'click', this.$$d_onButtonClick);
        $addHandler($v_0, 'dblclick', this.$$d_onDblClick);
        $addHandler($v_0, 'mouseover', this.$$d_onMouseOver);
        $addHandler($v_0, 'mouseout', this.$$d_onMouseOut);
        $addHandler($v_0, 'mouseover', this.$$d_onButtonFocus);
        $addHandler($v_0, 'mouseout', this.$$d_onButtonBlur);
        $addHandler($v_0, 'focus', this.$$d_onButtonKeyboardFocus);
        $addHandler($v_0, 'blur', this.$$d_onButtonBlur);
        $addHandler($v_1, 'click', this.$$d_onMenuButtonClick);
        $addHandler($v_1, 'mouseover', this.$$d_onMenuButtonFocus);
        $addHandler($v_1, 'mouseout', this.$$d_onMenuButtonBlur);
        $addHandler($v_1, 'focus', this.$$d_onMenuButtonKeyboardFocus);
        $addHandler($v_1, 'blur', this.$$d_onMenuButtonABlur);
        $addHandler($v_1, 'keypress', this.$$d_onMenuButtonKeyPress);
    },
    
    $4d_2: false,
    
    $7d_0: function CUI_Controls_SplitButton$$7d_0() {ULSpEN:;
        if (!this.get_enabled()) {
            return false;
        }
        var $v_0 = this.get_displayedComponent().get_$3_0();
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            if (this.$4d_2 || !this.$1O_2) {
                $v_0 = $v_0.childNodes[1];
            }
            else {
                $v_0 = $v_0.childNodes[0];
            }
            $v_0.focus();
            return true;
        }
        return false;
    },
    
    onEnabledChanged: function CUI_Controls_SplitButton$onEnabledChanged($p0) {
        this.onEnabledChangedForControl($p0);
        this.onEnabledChangedForButton($p0);
        this.onEnabledChangedForMenu($p0);
        this.$2R_2(this.get_on() && $p0);
    },
    
    onStateChanged: function CUI_Controls_SplitButton$onStateChanged() {ULSpEN:;
        this.$2R_2(this.get_on() && this.get_enabled());
    },
    
    get_$8X_0: function CUI_Controls_SplitButton$get_$8X_0() {ULSpEN:;
        return 'SplitButton';
    },
    
    get_on: function CUI_Controls_SplitButton$get_on() {ULSpEN:;
        return (this.get_stateProperties()['On'] && this.get_$1_2().ToggleButtonState);
    },
    set_on: function CUI_Controls_SplitButton$set_on($p0) {
        this.get_stateProperties()['On'] = $p0 && this.get_$1_2().ToggleButtonState;
        this.$2R_2($p0 && this.get_enabled() && this.get_$1_2().ToggleButtonState);
        return $p0;
    },
    
    $2R_2: function CUI_Controls_SplitButton$$2R_2($p0) {
        CUI.Utility.toggleCSSClassOnElement(this.$47_2, 'ms-cui-ctl-on', $p0);
        CUI.Utility.toggleCSSClassOnElement(this.$49_2, 'ms-cui-ctl-on', $p0);
        CUI.Utility.toggleCSSClassOnElement(this.$4F_2, 'ms-cui-ctl-on', $p0);
    },
    
    onEnabledChangedForControl: function CUI_Controls_SplitButton$onEnabledChangedForControl($p0) {
        if ($p0) {
            CUI.Utility.removeCSSClassFromElement(this.$E_2, 'ms-cui-disabled');
            CUI.Utility.removeCSSClassFromElement(this.$8_2, 'ms-cui-disabled');
            CUI.Utility.removeCSSClassFromElement(this.$A_2, 'ms-cui-disabled');
        }
        else {
            CUI.Utility.ensureCSSClassOnElement(this.$E_2, 'ms-cui-disabled');
            CUI.Utility.ensureCSSClassOnElement(this.$8_2, 'ms-cui-disabled');
            CUI.Utility.ensureCSSClassOnElement(this.$A_2, 'ms-cui-disabled');
        }
    },
    
    $1z_2: true,
    
    onEnabledChangedForMenu: function CUI_Controls_SplitButton$onEnabledChangedForMenu($p0) {
        CUI.Utility.setEnabledOnElement(this.$48_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$4A_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$4G_2, $p0);
        this.$7U_2();
        this.$1z_2 = $p0;
    },
    
    $Ck_2: function CUI_Controls_SplitButton$$Ck_2($p0) {
        CUI.Utility.setEnabledOnElement(this.$48_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$4A_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$4G_2, $p0);
    },
    
    $1O_2: false,
    
    onEnabledChangedForButton: function CUI_Controls_SplitButton$onEnabledChangedForButton($p0) {
        CUI.Utility.setEnabledOnElement(this.$47_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$49_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$4F_2, $p0);
        this.$7T_2();
        this.$1O_2 = $p0;
    },
    
    onButtonClick: function CUI_Controls_SplitButton$onButtonClick($p0) {
        $p0.preventDefault();
        this.$Y_0();
        if (!this.get_enabled() || !this.$1O_2) {
            return;
        }
        this.$0_0.set_$3u_1(this);
        this.$4d_2 = false;
        this.set_on(!this.get_on());
        var $v_0 = this.get_stateProperties();
        $v_0['CommandValueId'] = this.get_$1_2().CommandValueId;
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_2().Command, 1, $v_0);
    },
    
    onDblClick: function CUI_Controls_SplitButton$onDblClick($p0) {
        $p0.preventDefault();
        this.$Y_0();
        if (!this.get_enabled()) {
            return;
        }
        this.onButtonClick($p0);
    },
    
    onMouseOver: function CUI_Controls_SplitButton$onMouseOver($p0) {
        this.onBeginFocus();
        if (!this.get_enabled() || !this.$1O_2) {
            return;
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_2().CommandPreview)) {
            return;
        }
        var $v_0 = this.get_stateProperties();
        $v_0['CommandValueId'] = this.get_$1_2().CommandValueId;
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_2().CommandPreview, 5, $v_0);
    },
    
    onButtonKeyboardFocus: function CUI_Controls_SplitButton$onButtonKeyboardFocus($p0) {
        this.$0_0.set_$l_1(this);
        this.$4d_2 = false;
        this.onButtonFocus($p0);
    },
    
    onButtonFocus: function CUI_Controls_SplitButton$onButtonFocus($p0) {
        this.onBeginFocus();
        if (!this.get_enabled() || !this.$1O_2) {
            return;
        }
        this.$Be_2();
    },
    
    onMouseOut: function CUI_Controls_SplitButton$onMouseOut($p0) {
        this.onEndFocus();
        if (!this.get_enabled()) {
            return;
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_2().CommandRevert)) {
            return;
        }
        var $v_0 = this.get_stateProperties();
        $v_0['CommandValueId'] = this.get_$1_2().CommandValueId;
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_2().CommandRevert, 6, $v_0);
    },
    
    onButtonBlur: function CUI_Controls_SplitButton$onButtonBlur($p0) {
        this.onEndFocus();
        if (!this.get_enabled() || !this.$1O_2) {
            return;
        }
        this.$7T_2();
    },
    
    onMenuButtonClick: function CUI_Controls_SplitButton$onMenuButtonClick($p0) {
        $p0.preventDefault();
        this.$Y_0();
        if (!this.get_enabled() || !this.$1z_2) {
            return;
        }
        this.$0_0.$31_1 = false;
        this.$0_0.set_$3u_1(this);
        this.$4d_2 = true;
        var $v_0 = $p0.target;
        this.launchMenu($v_0);
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_2().CommandMenuOpen, 4, null);
    },
    
    onMenuButtonKeyboardFocus: function CUI_Controls_SplitButton$onMenuButtonKeyboardFocus($p0) {
        this.onMenuButtonFocus($p0);
        this.$4d_2 = true;
        this.$0_0.set_$l_1(this);
    },
    
    onMenuButtonFocus: function CUI_Controls_SplitButton$onMenuButtonFocus($p0) {
        this.onBeginFocus();
        if (!this.get_enabled() || !this.$1z_2) {
            return;
        }
        this.$Bf_2();
    },
    
    onMenuButtonBlur: function CUI_Controls_SplitButton$onMenuButtonBlur($p0) {
        this.onEndFocus();
        if (!this.get_enabled() || this.$g_1 || !this.$1z_2) {
            return;
        }
        this.$7U_2();
    },
    
    onMenuButtonABlur: function CUI_Controls_SplitButton$onMenuButtonABlur($p0) {
        this.onEndFocus();
        if (!this.get_enabled() || !this.$1z_2) {
            return;
        }
        this.onMenuButtonBlur($p0);
    },
    
    onMenuButtonKeyPress: function CUI_Controls_SplitButton$onMenuButtonKeyPress($p0) {
        this.$Y_0();
        if (!this.get_enabled() || !this.$1z_2) {
            return;
        }
        if (($p0.rawEvent).keyCode === 13) {
            this.$17_1 = true;
        }
    },
    
    onLaunchedMenuClosed: function CUI_Controls_SplitButton$onLaunchedMenuClosed() {ULSpEN:;
        this.$Y_0();
        this.$1N_2();
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_2().CommandMenuClose, 10, null);
        CUI.MenuLauncher.prototype.onLaunchedMenuClosed.call(this);
    },
    
    $1N_2: function CUI_Controls_SplitButton$$1N_2() {ULSpEN:;
        this.$7T_2();
        this.$7U_2();
    },
    
    $7T_2: function CUI_Controls_SplitButton$$7T_2() {ULSpEN:;
        var $v_0 = this.$5V_0();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return;
        }
        CUI.Utility.removeCSSClassFromElement($v_0.childNodes[0], 'ms-cui-ctl-light-hoveredOver');
        CUI.Utility.removeCSSClassFromElement($v_0.childNodes[1], 'ms-cui-ctl-split-hover');
    },
    
    $Be_2: function CUI_Controls_SplitButton$$Be_2() {ULSpEN:;
        var $v_0 = this.$5V_0();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return;
        }
        CUI.Utility.ensureCSSClassOnElement($v_0.childNodes[0], 'ms-cui-ctl-light-hoveredOver');
        CUI.Utility.ensureCSSClassOnElement($v_0.childNodes[1], 'ms-cui-ctl-split-hover');
    },
    
    $7U_2: function CUI_Controls_SplitButton$$7U_2() {ULSpEN:;
        var $v_0 = this.$5V_0();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return;
        }
        CUI.Utility.removeCSSClassFromElement($v_0.childNodes[0], 'ms-cui-ctl-split-hover');
        CUI.Utility.removeCSSClassFromElement($v_0.childNodes[1], 'ms-cui-ctl-light-hoveredOver');
    },
    
    $Bf_2: function CUI_Controls_SplitButton$$Bf_2() {ULSpEN:;
        var $v_0 = this.$5V_0();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return;
        }
        CUI.Utility.ensureCSSClassOnElement($v_0.childNodes[0], 'ms-cui-ctl-split-hover');
        CUI.Utility.ensureCSSClassOnElement($v_0.childNodes[1], 'ms-cui-ctl-light-hoveredOver');
    },
    
    $9Z_0: function CUI_Controls_SplitButton$$9Z_0() {ULSpEN:;
        var $v_0 = this.$0_0.$3H_1(this.get_$1_2().Command, this.get_$1_2().QueryCommand, this.get_stateProperties(), true);
        var $v_1 = ($v_0 & 1) > 0;
        var $v_2 = true;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$1_2().CommandMenuOpen)) {
            var $v_3 = this.$0_0.$3H_1(this.get_$1_2().CommandMenuOpen, null, null, false);
            $v_2 = ($v_3 & 1) > 0;
        }
        else {
            $v_2 = $v_1;
        }
        if ($v_2 !== this.$1z_2 || $v_1 !== this.$1O_2) {
            this.$1K_0 = $v_2 || $v_1;
            var $v_4 = this.$1z_2 && this.$1O_2;
            var $v_5 = $v_2 && $v_1;
            if ($v_4 !== $v_5) {
                this.onEnabledChangedForControl($v_5);
            }
            this.$Ck_2(this.$1K_0);
            if ($v_1 !== this.$1O_2) {
                this.onEnabledChangedForButton($v_1);
            }
            if ($v_2 !== this.$1z_2) {
                this.onEnabledChangedForMenu($v_2);
            }
            this.$1z_2 = $v_2;
            this.$1O_2 = $v_1;
        }
        if (($v_0 & 2) > 0) {
            var $v_6 = CUI.Utility.$2k(this.get_stateProperties()['Image32by32Class'], this.get_$1_2().Image32by32Class);
            var $v_7 = CUI.Utility.$2k(this.get_stateProperties()['Image16by16Class'], this.get_$1_2().Image16by16Class);
            CUI.Utility.$27(this.$2V_2, $v_6);
            CUI.Utility.$27(this.$2W_2, $v_7);
            CUI.Utility.$27(this.$2X_2, $v_7);
        }
        this.$2R_2(this.get_on() && $v_1);
    },
    
    dispose: function CUI_Controls_SplitButton$dispose() {ULSpEN:;
        CUI.MenuLauncher.prototype.dispose.call(this);
        this.$E_2 = null;
        this.$47_2 = null;
        this.$2V_2 = null;
        this.$48_2 = null;
        this.$8_2 = null;
        this.$49_2 = null;
        this.$2W_2 = null;
        this.$4A_2 = null;
        this.$A_2 = null;
        this.$4F_2 = null;
        this.$2X_2 = null;
        this.$4G_2 = null;
    },
    
    get_$1_2: function CUI_Controls_SplitButton$get_$1_2() {ULSpEN:;
        return this.$5_0;
    }
}


CUI.Controls.TextBoxCommandProperties = function CUI_Controls_TextBoxCommandProperties() {
}


CUI.Controls.TextBox = function CUI_Controls_TextBox($p0, $p1, $p2) {
    this.$$d_$9P_1 = Function.createDelegate(this, this.$9P_1);
    this.$$d_$5e_1 = Function.createDelegate(this, this.$5e_1);
    this.$$d_$5f_1 = Function.createDelegate(this, this.$5f_1);
    this.$$d_$4h_1 = Function.createDelegate(this, this.$4h_1);
    this.$$d_$3w_1 = Function.createDelegate(this, this.$3w_1);
    this.$$d_$7K_1 = Function.createDelegate(this, this.$7K_1);
    CUI.Controls.TextBox.initializeBase(this, [ $p0, $p1, $p2 ]);
    this.addDisplayMode('Medium');
}
CUI.Controls.TextBox.prototype = {
    $C_1: null,
    
    get_value: function CUI_Controls_TextBox$get_value() {ULSpEN:;
        this.$70_1();
        return this.$C_1.value;
    },
    set_value: function CUI_Controls_TextBox$set_value($p0) {
        this.$70_1();
        if ($p0) {
            this.$C_1.value = $p0;
        }
        else {
            this.$C_1.value = '';
        }
        return $p0;
    },
    
    $70_1: function CUI_Controls_TextBox$$70_1() {ULSpEN:;
        if (!this.$C_1) {
            this.$C_1 = CUI.Utility.$6w('input');
            this.$C_1.type = 'text';
            CUI.Utility.$7f(this.$C_1, (this.get_$1_1()).ImeEnabled);
        }
    },
    
    createDOMElementForDisplayMode: function CUI_Controls_TextBox$createDOMElementForDisplayMode($p0) {
        switch ($p0) {
            case 'Medium':
                this.$70_1();
                this.$C_1.id = this.$4_0;
                this.$C_1.setAttribute('mscui:controltype', this.get_$8X_0());
                this.$C_1.setAttribute('role', this.get_$2N_0());
                CUI.Utility.$1Z(this.get_$1_1(), this.$C_1);
                this.$C_1.className = 'ms-cui-tb';
                if (!CUI.ScriptUtility.isNullOrEmptyString(this.get_$1_1().MaxLength)) {
                    var $v_0 = parseInt(this.get_$1_1().MaxLength);
                    if ($v_0 !== Number.NaN) {
                        this.$C_1.setAttribute('maxlength', $v_0);
                    }
                }
                if (CUI.Utility.$o(this.get_$1_1().ShowAsLabel)) {
                    CUI.Utility.ensureCSSClassOnElement(this.$C_1, 'ms-cui-tb-labelmode');
                    this.$C_1.disabled = true;
                }
                if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$1_1().Width)) {
                    this.$C_1.style.width = this.get_$1_1().Width;
                }
                this.$P_1();
                return this.$C_1;
            default:
                this.ensureValidDisplayMode($p0);
                return null;
        }
    },
    
    $AG_0: function CUI_Controls_TextBox$$AG_0($p0) {
        var $v_0 = $get(this.$4_0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
            case 'Medium':
                this.$C_1 = $v_0;
                break;
        }
    },
    
    $AH_0: function CUI_Controls_TextBox$$AH_0($p0) {
        this.$P_1();
    },
    
    $P_1: function CUI_Controls_TextBox$$P_1() {ULSpEN:;
        $addHandler(this.$C_1, 'change', this.$$d_$7K_1);
        $addHandler(this.$C_1, 'focus', this.$$d_$3w_1);
        $addHandler(this.$C_1, 'blur', this.$$d_$4h_1);
        $addHandler(this.$C_1, 'mouseup', CUI.Utility.get_returnFalseHandler());
        $addHandler(this.$C_1, 'mouseover', this.$$d_$5f_1);
        $addHandler(this.$C_1, 'mouseout', this.$$d_$5e_1);
        $addHandler(this.$C_1, 'keypress', this.$$d_$9P_1);
    },
    
    onEnabledChanged: function CUI_Controls_TextBox$onEnabledChanged($p0) {
        if ($p0) {
            CUI.Utility.enableElement(this.$C_1);
        }
        else {
            CUI.Utility.disableElement(this.$C_1);
        }
    },
    
    get_$8X_0: function CUI_Controls_TextBox$get_$8X_0() {ULSpEN:;
        return 'TextBox';
    },
    
    get_$2N_0: function CUI_Controls_TextBox$get_$2N_0() {ULSpEN:;
        return 'textbox';
    },
    
    $7K_1: function CUI_Controls_TextBox$$7K_1($p0) {
        this.$Y_0();
        if (!this.get_enabled()) {
            return;
        }
        this.get_stateProperties()['Value'] = this.get_value();
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_1().Command, 1, this.get_stateProperties());
        if (this.$0_0.get_$4i_1()) {
            this.$9Z_0();
        }
        else {
            this.$2R_1(null);
        }
    },
    
    $Ai_0: function CUI_Controls_TextBox$$Ai_0() {ULSpEN:;
        this.$7K_1(null);
    },
    
    $2R_1: function CUI_Controls_TextBox$$2R_1($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$C_1)) {
            if (!CUI.ScriptUtility.isNullOrUndefined($p0)) {
                this.set_value($p0);
            }
        }
    },
    
    $7d_0: function CUI_Controls_TextBox$$7d_0() {ULSpEN:;
        if (!this.get_enabled()) {
            return false;
        }
        this.$C_1.focus();
        return true;
    },
    
    $3w_1: function CUI_Controls_TextBox$$3w_1($p0) {
        this.onBeginFocus();
        if (!this.get_enabled()) {
            return;
        }
        CUI.Utility.$7X(this.$C_1);
        this.$0_0.set_$l_1(this);
    },
    
    $4h_1: function CUI_Controls_TextBox$$4h_1($p0) {
        this.onEndFocus();
        if (!this.get_enabled()) {
            return;
        }
    },
    
    $5f_1: function CUI_Controls_TextBox$$5f_1($p0) {
        this.onBeginFocus();
        if (!this.get_enabled()) {
            return;
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_1().CommandPreview)) {
            return;
        }
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_1().CommandPreview, 5, this.get_stateProperties());
    },
    
    $5e_1: function CUI_Controls_TextBox$$5e_1($p0) {
        this.onEndFocus();
        if (!this.get_enabled()) {
            return;
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_1().CommandRevert)) {
            return;
        }
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_1().CommandRevert, 6, this.get_stateProperties());
    },
    
    $9P_1: function CUI_Controls_TextBox$$9P_1($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined($p0) && !CUI.ScriptUtility.isNullOrUndefined($p0.rawEvent)) {
            var $v_0 = ($p0.rawEvent).keyCode;
            if (!this.get_enabled() && $v_0 !== 9) {
                $p0.preventDefault();
                return;
            }
            if ($v_0 === 13) {
                this.$7K_1($p0);
                $p0.preventDefault();
            }
        }
    },
    
    $9Z_0: function CUI_Controls_TextBox$$9Z_0() {ULSpEN:;
        var $v_0 = this.pollForStateAndUpdateInternal(this.get_$1_1().Command, this.get_$1_1().QueryCommand, this.get_stateProperties(), false);
        if (($v_0 & 2) > 0) {
            this.$2R_1(this.get_stateProperties()['Value']);
        }
    },
    
    dispose: function CUI_Controls_TextBox$dispose() {ULSpEN:;
        CUI.Control.prototype.dispose.call(this);
        this.$C_1 = null;
    },
    
    get_$1_1: function CUI_Controls_TextBox$get_$1_1() {ULSpEN:;
        return this.$5_0;
    }
}


CUI.Controls.ToggleButtonCommandProperties = function CUI_Controls_ToggleButtonCommandProperties() {
}


CUI.Controls.ToggleButton = function CUI_Controls_ToggleButton($p0, $p1, $p2) {
    this.$$d_$Bu_1 = Function.createDelegate(this, this.$Bu_1);
    this.$$d_$5e_1 = Function.createDelegate(this, this.$5e_1);
    this.$$d_$5f_1 = Function.createDelegate(this, this.$5f_1);
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    this.$$d_$4h_1 = Function.createDelegate(this, this.$4h_1);
    this.$$d_$3w_1 = Function.createDelegate(this, this.$3w_1);
    CUI.Controls.ToggleButton.initializeBase(this, [ $p0, $p1, $p2 ]);
    this._id = $p1;
    this.addDisplayModes();
    this.get_stateProperties()['On'] = false;
}
CUI.Controls.ToggleButton.prototype = {
    _id: null,
    $E_1: null,
    $20_1: null,
    $t_1: null,
    $A_1: null,
    $8_1: null,
    $e_1: null,
    $1U_1: null,
    $1w_1: null,
    $1v_1: null,
    $1Q_1: null,
    
    get_on: function CUI_Controls_ToggleButton$get_on() {ULSpEN:;
        return this.get_stateProperties()['On'];
    },
    set_on: function CUI_Controls_ToggleButton$set_on($p0) {
        this.get_stateProperties()['On'] = $p0;
        this.setState($p0);
        return $p0;
    },
    
    createComponentForDisplayModeInternal: function CUI_Controls_ToggleButton$createComponentForDisplayModeInternal($p0) {
        var $v_0;
        if ($p0.startsWith('Menu')) {
            $v_0 = this.$0_0.$3s_1(this.$4_0 + '-' + $p0 + this.$0_0.$2A_1(), $p0, this);
            this.$20_1 = this.get_$1_1().MenuItemId;
            this.$t_1 = this.get_$1_1().CommandValueId;
            if (CUI.ScriptUtility.isNullOrEmptyString(this.$t_1)) {
                this.$t_1 = this.$20_1;
            }
        }
        else {
            $v_0 = CUI.Control.prototype.createComponentForDisplayModeInternal.call(this, $p0);
        }
        return $v_0;
    },
    
    createDOMElementForDisplayMode: function CUI_Controls_ToggleButton$createDOMElementForDisplayMode($p0) {
        return this.$2h_1($p0, true);
    },
    
    $2h_1: function CUI_Controls_ToggleButton$$2h_1($p0, $p1) {
        switch ($p0) {
            case 'Large':
                this.$E_1 = CUI.Control.createStandardControlDOMElement(this, this.$0_0, 'Large', this.get_$1_1(), false, false);
                this.$AG_0('Large');
                if ($p1) {
                    this.$AH_0('Large');
                }
                return this.$E_1;
            case 'Medium':
                this.$8_1 = CUI.Control.createStandardControlDOMElement(this, this.$0_0, 'Medium', this.get_$1_1(), false, false);
                this.$AG_0('Medium');
                if ($p1) {
                    this.$AH_0('Medium');
                }
                return this.$8_1;
            case 'Small':
                this.$A_1 = CUI.Control.createStandardControlDOMElement(this, this.$0_0, 'Small', this.get_$1_1(), false, false);
                this.$AG_0('Small');
                if ($p1) {
                    this.$AH_0('Small');
                }
                return this.$A_1;
            case 'Menu':
                this.$e_1 = CUI.Control.createStandardControlDOMElement(this, this.$0_0, 'Menu', this.get_$1_1(), true, false);
                if ($p1) {
                    this.$AH_0('Menu');
                }
                return this.$e_1;
            case 'Menu16':
                this.$1U_1 = CUI.Control.createStandardControlDOMElement(this, this.$0_0, 'Menu16', this.get_$1_1(), true, false);
                if ($p1) {
                    this.$AH_0('Menu16');
                }
                return this.$1U_1;
            case 'Menu32':
                this.$1w_1 = CUI.Control.createStandardControlDOMElement(this, this.$0_0, 'Menu32', this.get_$1_1(), true, false);
                if ($p1) {
                    this.$AH_0('Menu32');
                }
                return this.$1w_1;
            default:
                this.ensureValidDisplayMode($p0);
                return null;
        }
    },
    
    $AG_0: function CUI_Controls_ToggleButton$$AG_0($p0) {
        var $v_0 = $get(this.$4_0 + '-' + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
            case 'Large':
                if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
                    this.$E_1 = $v_0;
                }
                break;
            case 'Medium':
                if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
                    this.$8_1 = $v_0;
                }
                break;
            case 'Small':
                if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
                    this.$A_1 = $v_0;
                }
                break;
        }
    },
    
    $AH_0: function CUI_Controls_ToggleButton$$AH_0($p0) {
        switch ($p0) {
            case 'Large':
                this.$P_1(this.$E_1, true);
                break;
            case 'Medium':
                this.$P_1(this.$8_1, true);
                break;
            case 'Small':
                this.$P_1(this.$A_1, true);
                break;
            case 'Menu32':
                this.$P_1(this.$1w_1, false);
                break;
            case 'Menu16':
                this.$P_1(this.$1U_1, false);
                break;
            case 'Menu':
                this.$P_1(this.$e_1, false);
                break;
        }
    },
    
    $P_1: function CUI_Controls_ToggleButton$$P_1($p0, $p1) {
        if ($p1) {
            $addHandler($p0, 'mouseover', this.$$d_$3w_1);
            $addHandler($p0, 'mouseout', this.$$d_$4h_1);
        }
        $addHandler($p0, 'click', this.$$d_onClick);
        $addHandler($p0, 'mouseover', this.$$d_$5f_1);
        $addHandler($p0, 'mouseout', this.$$d_$5e_1);
        $addHandler($p0, 'focus', this.$$d_$Bu_1);
        $addHandler($p0, 'blur', this.$$d_$4h_1);
    },
    
    $7d_0: function CUI_Controls_ToggleButton$$7d_0() {ULSpEN:;
        if (!this.get_enabled()) {
            return false;
        }
        var $v_0 = this.get_displayedComponent().get_$3_0();
        $v_0.focus();
        return true;
    },
    
    onEnabledChanged: function CUI_Controls_ToggleButton$onEnabledChanged($p0) {
        CUI.Utility.setEnabledOnElement(this.$A_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$8_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$E_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$e_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$1U_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$1w_1, $p0);
        if (this.get_on()) {
            if ($p0) {
                this.setState(true);
            }
            else {
                this.setState(false);
            }
        }
    },
    
    get_$8X_0: function CUI_Controls_ToggleButton$get_$8X_0() {ULSpEN:;
        return 'ToggleButton';
    },
    
    onStateChanged: function CUI_Controls_ToggleButton$onStateChanged() {ULSpEN:;
        this.setState(this.get_stateProperties()['On']);
    },
    
    getDropDownDOMElementForDisplayMode: function CUI_Controls_ToggleButton$getDropDownDOMElementForDisplayMode($p0) {
        var $v_0;
        switch ($p0) {
            case 'Menu16':
                $v_0 = this.$1v_1;
                break;
            case 'Text':
                $v_0 = this.$1Q_1;
                break;
            default:
                $v_0 = CUI.Utility.$2('span');
                break;
        }
        if ($v_0) {
            return $v_0;
        }
        return this.$8b_1($p0);
    },
    
    $8b_1: function CUI_Controls_ToggleButton$$8b_1($p0) {
        switch ($p0) {
            case 'Menu':
                this.$1v_1 = this.$2h_1('Menu', false).cloneNode(true);
                return this.$1v_1;
            case 'Menu16':
                this.$1v_1 = this.$2h_1('Menu16', false).cloneNode(true);
                return this.$1v_1;
            case 'Text':
                var $v_0 = CUI.Utility.$2('a');
                CUI.Utility.$1p($v_0);
                this.$1Q_1 = CUI.Utility.$2('span');
                this.$1Q_1.className = 'ms-cui-textmenuitem';
                CUI.UIUtility.setInnerText($v_0, this.get_$1_1().LabelText);
                this.$1Q_1.appendChild($v_0);
                return this.$1Q_1;
            default:
                return CUI.Utility.$2('span');
        }
    },
    
    deselect: function CUI_Controls_ToggleButton$deselect() {
    },
    
    getMenuItemId: function CUI_Controls_ToggleButton$getMenuItemId() {ULSpEN:;
        return this.$20_1;
    },
    
    getCommandValueId: function CUI_Controls_ToggleButton$getCommandValueId() {ULSpEN:;
        return this.$t_1;
    },
    
    focusOnDisplayedComponent: function CUI_Controls_ToggleButton$focusOnDisplayedComponent() {ULSpEN:;
        this.receiveFocus();
    },
    
    getTextValue: function CUI_Controls_ToggleButton$getTextValue() {ULSpEN:;
        return this.get_$1_1().LabelText;
    },
    
    receiveFocus: function CUI_Controls_ToggleButton$receiveFocus() {ULSpEN:;
        this.onBeginFocus();
        var $v_0 = this.get_displayedComponent();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return;
        }
        ($v_0).set_$1A_2(true);
        if (!(CUI.ScriptUtility.isNullOrUndefined(this.$e_1))) {
            this.$e_1.focus();
        }
        if (!(CUI.ScriptUtility.isNullOrUndefined(this.$1U_1))) {
            this.$1U_1.focus();
        }
    },
    
    onMenuClosed: function CUI_Controls_ToggleButton$onMenuClosed() {ULSpEN:;
        this.$Y_0();
    },
    
    onClick: function CUI_Controls_ToggleButton$onClick($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(CUI.PMetrics)) {
            CUI.PMetrics.perfMark(7704);
        }
        this.$Y_0();
        $p0.preventDefault();
        if (!this.get_enabled()) {
            return;
        }
        this.$0_0.set_$3u_1(this);
        var $v_0 = 1;
        var $v_1 = this.get_$1_1().CommandType;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1) && $v_1 === 'OptionSelection') {
            $v_0 = 3;
            this.get_stateProperties()['CommandValueId'] = this.$t_1;
        }
        this.get_stateProperties()['On'] = !this.get_stateProperties()['On'];
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_1().Command, $v_0, this.get_stateProperties());
        if (this.$0_0.get_$4i_1()) {
            this.$9Z_0();
        }
        else {
            this.setState(this.get_stateProperties()['On']);
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(CUI.PMetrics)) {
            CUI.PMetrics.perfMark(7705);
        }
    },
    
    setState: function CUI_Controls_ToggleButton$setState($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$A_1)) {
            if ($p0) {
                CUI.Utility.ensureCSSClassOnElement(this.$A_1, 'ms-cui-ctl-on');
            }
            else {
                CUI.Utility.removeCSSClassFromElement(this.$A_1, 'ms-cui-ctl-on');
            }
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$8_1)) {
            if ($p0) {
                CUI.Utility.ensureCSSClassOnElement(this.$8_1, 'ms-cui-ctl-on');
            }
            else {
                CUI.Utility.removeCSSClassFromElement(this.$8_1, 'ms-cui-ctl-on');
            }
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$E_1)) {
            if ($p0) {
                CUI.Utility.ensureCSSClassOnElement(this.$E_1, 'ms-cui-ctl-on');
            }
            else {
                CUI.Utility.removeCSSClassFromElement(this.$E_1, 'ms-cui-ctl-on');
            }
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$1w_1)) {
            if ($p0) {
                CUI.Utility.ensureCSSClassOnElement(this.$1w_1, 'ms-cui-ctl-on');
            }
            else {
                CUI.Utility.removeCSSClassFromElement(this.$1w_1, 'ms-cui-ctl-on');
            }
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$e_1)) {
            if ($p0) {
                CUI.Utility.ensureCSSClassOnElement(this.$e_1, 'ms-cui-ctl-on');
            }
            else {
                CUI.Utility.removeCSSClassFromElement(this.$e_1, 'ms-cui-ctl-on');
            }
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$1U_1)) {
            if ($p0) {
                CUI.Utility.ensureCSSClassOnElement(this.$1U_1, 'ms-cui-ctl-on');
            }
            else {
                CUI.Utility.removeCSSClassFromElement(this.$1U_1, 'ms-cui-ctl-on');
            }
        }
    },
    
    $3D_1: function CUI_Controls_ToggleButton$$3D_1() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$1w_1)) {
            CUI.Utility.removeCSSClassFromElement(this.$1w_1, 'ms-cui-ctl-disabledHoveredOver');
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$e_1)) {
            CUI.Utility.removeCSSClassFromElement(this.$e_1, 'ms-cui-ctl-disabledHoveredOver');
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$1U_1)) {
            CUI.Utility.removeCSSClassFromElement(this.$1U_1, 'ms-cui-ctl-disabledHoveredOver');
        }
    },
    
    $Bu_1: function CUI_Controls_ToggleButton$$Bu_1($p0) {
        this.$0_0.set_$l_1(this);
        this.$3w_1($p0);
    },
    
    $3w_1: function CUI_Controls_ToggleButton$$3w_1($p0) {
        this.onBeginFocus();
        if (!this.get_enabled()) {
            this.$3D_1();
            return;
        }
        var $v_0 = this.get_displayedComponent();
        if (CUI.MenuItem.isInstanceOfType($v_0)) {
            ($v_0).set_$1A_2(true);
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_1().CommandPreview)) {
            return;
        }
        var $v_1 = 5;
        var $v_2 = this.get_$1_1().CommandType;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_2) && $v_2 === 'OptionSelection') {
            $v_1 = 7;
            this.get_stateProperties()['CommandValueId'] = this.$t_1;
        }
        $v_0.raiseCommandEvent(this.get_$1_1().CommandPreview, $v_1, this.get_stateProperties());
    },
    
    $5f_1: function CUI_Controls_ToggleButton$$5f_1($p0) {
        this.onBeginFocus();
        if (!this.get_enabled()) {
            return;
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_1().CommandPreview)) {
            return;
        }
        var $v_0 = 5;
        var $v_1 = this.get_$1_1().CommandType;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1) && $v_1 === 'OptionSelection') {
            $v_0 = 7;
            this.get_stateProperties()['CommandValueId'] = this.$t_1;
        }
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_1().CommandPreview, $v_0, this.get_stateProperties());
    },
    
    $4h_1: function CUI_Controls_ToggleButton$$4h_1($p0) {
        this.onEndFocus();
        if (!this.get_enabled()) {
            return;
        }
        var $v_0 = this.get_displayedComponent();
        if (CUI.MenuItem.isInstanceOfType($v_0)) {
            ($v_0).set_$1A_2(false);
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_1().CommandRevert)) {
            return;
        }
        var $v_1 = 6;
        var $v_2 = this.get_$1_1().CommandType;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_2) && $v_2 === 'OptionSelection') {
            $v_1 = 8;
            this.get_stateProperties()['CommandValueId'] = this.$t_1;
        }
        $v_0.raiseCommandEvent(this.get_$1_1().CommandRevert, $v_1, this.get_stateProperties());
    },
    
    $5e_1: function CUI_Controls_ToggleButton$$5e_1($p0) {
        this.onEndFocus();
        if (!this.get_enabled()) {
            return;
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$1_1().CommandRevert)) {
            return;
        }
        var $v_0 = 6;
        var $v_1 = this.get_$1_1().CommandType;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1) && $v_1 === 'OptionSelection') {
            $v_0 = 8;
            this.get_stateProperties()['CommandValueId'] = this.$t_1;
        }
        this.get_displayedComponent().raiseCommandEvent(this.get_$1_1().CommandRevert, $v_0, this.get_stateProperties());
    },
    
    $9Z_0: function CUI_Controls_ToggleButton$$9Z_0() {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$1_1().MenuItemId)) {
            this.get_stateProperties()['MenuItemId'] = this.get_$1_1().MenuItemId;
        }
        var $v_0 = this.pollForStateAndUpdateInternal(this.get_$1_1().Command, this.get_$1_1().QueryCommand, this.get_stateProperties(), false);
        if (($v_0 & 2) > 0) {
            this.setState(this.get_stateProperties()['On']);
        }
    },
    
    addDisplayModes: function CUI_Controls_ToggleButton$addDisplayModes() {ULSpEN:;
        this.addDisplayMode('Small');
        this.addDisplayMode('Medium');
        this.addDisplayMode('Large');
        this.addDisplayMode('Menu');
        this.addDisplayMode('Menu16');
        this.addDisplayMode('Menu32');
    },
    
    dispose: function CUI_Controls_ToggleButton$dispose() {ULSpEN:;
        CUI.Control.prototype.dispose.call(this);
        this.$A_1 = null;
        this.$8_1 = null;
        this.$e_1 = null;
        this.$1U_1 = null;
        this.$1w_1 = null;
        this.$1v_1 = null;
        this.$1Q_1 = null;
    },
    
    get_$1_1: function CUI_Controls_ToggleButton$get_$1_1() {ULSpEN:;
        return this.$5_0;
    }
}


CUI.Controls.JewelMenuLauncher = function CUI_Controls_JewelMenuLauncher($p0, $p1, $p2, $p3) {
    this.$$d_onContextMenu = Function.createDelegate(this, this.onContextMenu);
    this.$$d_onKeyPress = Function.createDelegate(this, this.onKeyPress);
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    this.$$d_onBlur = Function.createDelegate(this, this.onBlur);
    this.$$d_onFocus = Function.createDelegate(this, this.onFocus);
    CUI.Controls.JewelMenuLauncher.initializeBase(this, [ $p0, $p1, $p2, $p3 ]);
    this.addDisplayMode('Default');
}
CUI.Controls.JewelMenuLauncher.prototype = {
    $F_2: null,
    $J_2: null,
    $1u_2: null,
    $4w_2: null,
    $1C_2: null,
    $1T_2: null,
    $1D_2: null,
    $2u_2: null,
    $32_2: false,
    
    createDOMElementForDisplayMode: function CUI_Controls_JewelMenuLauncher$createDOMElementForDisplayMode($p0) {
        if ($p0 !== 'Default') {
            this.ensureValidDisplayMode($p0);
            return null;
        }
        var $v_0 = (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().Alt)) ? '' : this.get_properties().Alt;
        this.$F_2 = CUI.Utility.$2('span');
        this.$F_2.id = this.get_properties().Id + '-Default';
        this.$F_2.className = 'ms-cui-jewel-jewelMenuLauncher';
        this.$J_2 = CUI.Utility.$2('a');
        CUI.Utility.$1p(this.$J_2);
        this.$32_2 = !CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().LabelText);
        if (!this.$32_2) {
            this.$1u_2 = CUI.Utility.$2('img');
            this.$4w_2 = CUI.Utility.$h(2, 10, this.get_properties().Image, this.get_properties().ImageClass, this.$1u_2, true, false, this.get_properties().ImageTop, this.get_properties().ImageLeft);
            this.$1u_2.alt = $v_0;
            this.$J_2.appendChild(this.$4w_2);
        }
        else {
            var $v_1 = !CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().ImageLeftSide);
            var $v_2 = !CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().ImageRightSide);
            if ($v_1) {
                this.$1C_2 = CUI.Utility.$2('span');
                this.$1C_2.className = 'ms-cui-jewel-left';
                this.$1C_2.id = this.get_properties().Id + '-Default-left';
                CUI.Utility.$1Y(this.$1C_2, this.get_properties().ImageLeftSide, this.get_properties().ImageLeftSideClass, this.get_properties().ImageLeftSideTop, this.get_properties().ImageLeftSideLeft, null, this.get_properties().Height);
                this.$1C_2.style.width = this.get_properties().ImageLeftSideWidth + 'px';
                this.$1C_2.style.height = this.get_properties().Height + 'px';
                this.$J_2.appendChild(this.$1C_2);
            }
            this.$1T_2 = CUI.Utility.$2('span');
            this.$1T_2.className = 'ms-cui-jewel-middle';
            this.$1T_2.id = this.get_properties().Id + '-Default-middle';
            CUI.Utility.$1Y(this.$1T_2, this.get_properties().Image, this.get_properties().ImageClass, this.get_properties().ImageTop, this.get_properties().ImageLeft, null, this.get_properties().Height);
            this.$2u_2 = CUI.Utility.$2('span');
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_properties().LabelCss)) {
                this.$2u_2.style.cssText = this.get_properties().LabelCss;
            }
            this.$2u_2.className = 'ms-cui-jewel-label';
            if (!CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().Height)) {
                this.$2u_2.style.marginTop = (Math.floor(parseInt(this.get_properties().Height) - 16) / 2) + 'px';
            }
            CUI.UIUtility.setInnerText(this.$2u_2, this.get_properties().LabelText);
            this.$1T_2.appendChild(this.$2u_2);
            this.$J_2.appendChild(this.$1T_2);
            if ($v_2) {
                this.$1D_2 = CUI.Utility.$2('span');
                this.$1D_2.className = 'ms-cui-jewel-right';
                this.$1D_2.id = this.get_properties().Id + '-Default-right';
                CUI.Utility.$1Y(this.$1D_2, this.get_properties().ImageRightSide, this.get_properties().ImageRightSideClass, this.get_properties().ImageRightSideTop, this.get_properties().ImageRightSideLeft, null, this.get_properties().Height);
                this.$1D_2.style.width = this.get_properties().ImageRightSideWidth + 'px';
                this.$1D_2.style.height = this.get_properties().Height + 'px';
                this.$J_2.appendChild(this.$1D_2);
            }
        }
        this.$AH_0($p0);
        this.$F_2.appendChild(this.$J_2);
        return this.$F_2;
    },
    
    $AG_0: function CUI_Controls_JewelMenuLauncher$$AG_0($p0) {
        this.ensureValidDisplayMode($p0);
        var $v_0 = $get(this.$4_0 + '-' + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        var $v_1 = $v_0.childNodes[0];
        this.$F_2 = $v_0;
        this.$J_2 = $v_1;
        this.$32_2 = !CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().LabelText);
        if (!this.$32_2) {
            this.$4w_2 = this.$J_2.childNodes[0];
            this.$1u_2 = this.$4w_2.childNodes[0];
        }
        else {
            this.$1C_2 = $get(this.$4_0 + '-' + $p0 + '-left');
            this.$1T_2 = $get(this.$4_0 + '-' + $p0 + '-middle');
            if (this.$1T_2) {
                this.$2u_2 = this.$1T_2.firstChild;
            }
            this.$1D_2 = $get(this.$4_0 + '-' + $p0 + '-right');
        }
    },
    
    $AH_0: function CUI_Controls_JewelMenuLauncher$$AH_0($p0) {
        this.ensureValidDisplayMode($p0);
        $addHandler(this.$J_2, 'mouseover', this.$$d_onFocus);
        $addHandler(this.$J_2, 'focus', this.$$d_onFocus);
        $addHandler(this.$J_2, 'mouseout', this.$$d_onBlur);
        $addHandler(this.$J_2, 'blur', this.$$d_onBlur);
        $addHandler(this.$J_2, 'click', this.$$d_onClick);
        $addHandler(this.$J_2, 'keypress', this.$$d_onKeyPress);
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            $addHandler(this.$J_2, 'contextmenu', this.$$d_onContextMenu);
        }
    },
    
    onEnabledChanged: function CUI_Controls_JewelMenuLauncher$onEnabledChanged($p0) {
        CUI.Utility.setEnabledOnElement(this.$J_2, $p0);
    },
    
    onFocus: function CUI_Controls_JewelMenuLauncher$onFocus($p0) {
        if (!this.get_enabled() || this.$g_1) {
            return;
        }
        this.$3D_2();
    },
    
    onBlur: function CUI_Controls_JewelMenuLauncher$onBlur($p0) {
        if (!this.get_enabled() || this.$g_1) {
            return;
        }
        this.$1N_2();
    },
    
    onClick: function CUI_Controls_JewelMenuLauncher$onClick($p0) {
        $p0.preventDefault();
        if (!this.get_enabled() || CUI.ScriptUtility.isNullOrUndefined($p0) || $p0.button) {
            return;
        }
        if (this.$g_1) {
            this.$4b_1();
            return;
        }
        this.$9G_2();
    },
    
    onKeyPress: function CUI_Controls_JewelMenuLauncher$onKeyPress($p0) {
        if (!this.get_enabled()) {
            return;
        }
        if (!$p0 || !$p0.rawEvent) {
            return;
        }
        var $v_0 = ($p0.rawEvent).keyCode;
        if ($v_0 === 13 || $v_0 === 32 || $v_0 === 40) {
            this.$17_1 = true;
            if (this.$g_1) {
                this.$4b_1();
            }
            else {
                this.$9G_2();
            }
            $p0.preventDefault();
        }
    },
    
    onContextMenu: function CUI_Controls_JewelMenuLauncher$onContextMenu($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined($p0)) {
            $p0.preventDefault();
        }
    },
    
    $9G_2: function CUI_Controls_JewelMenuLauncher$$9G_2() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().ImageDown)) {
            return;
        }
        if (!this.$32_2) {
            this.$1u_2.src = this.get_properties().ImageDown;
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_properties().ImageDownClass)) {
                this.$1u_2.className = this.get_properties().ImageDownClass;
            }
        }
        else {
            if (this.$1C_2) {
                CUI.Utility.$1Y(this.$1C_2, this.get_properties().ImageLeftSideDown, this.get_properties().ImageLeftSideDownClass, this.get_properties().ImageLeftSideDownTop, this.get_properties().ImageLeftSideDownLeft, null, this.get_properties().Height);
            }
            CUI.Utility.$1Y(this.$1T_2, this.get_properties().ImageDown, this.get_properties().ImageDownClass, this.get_properties().ImageDownTop, this.get_properties().ImageDownLeft, null, this.get_properties().Height);
            if (this.$1D_2) {
                CUI.Utility.$1Y(this.$1D_2, this.get_properties().ImageRightSideDown, this.get_properties().ImageRightSideDownClass, this.get_properties().ImageRightSideDownTop, this.get_properties().ImageRightSideDownLeft, null, this.get_properties().Height);
            }
        }
        this.launchMenuInternal(this.$J_2);
    },
    
    onLaunchedMenuClosed: function CUI_Controls_JewelMenuLauncher$onLaunchedMenuClosed() {ULSpEN:;
        this.$1N_2();
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().CommandMenuClose, 10, null);
    },
    
    launchMenuInternal: function CUI_Controls_JewelMenuLauncher$launchMenuInternal($p0) {
        this.launchMenu($p0);
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().CommandMenuOpen, 4, null);
    },
    
    $3D_2: function CUI_Controls_JewelMenuLauncher$$3D_2() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().ImageHover)) {
            return;
        }
        if (!this.$32_2) {
            this.$1u_2.src = this.get_properties().ImageHover;
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_properties().ImageHoverClass)) {
                this.$1u_2.className = this.get_properties().ImageHoverClass;
            }
        }
        else {
            if (this.$1C_2) {
                CUI.Utility.$1Y(this.$1C_2, this.get_properties().ImageLeftSideHover, this.get_properties().ImageLeftSideHoverClass, this.get_properties().ImageLeftSideHoverTop, this.get_properties().ImageLeftSideHoverLeft, null, this.get_properties().Height);
            }
            CUI.Utility.$1Y(this.$1T_2, this.get_properties().ImageHover, this.get_properties().ImageHoverClass, this.get_properties().ImageHoverTop, this.get_properties().ImageHoverLeft, null, this.get_properties().Height);
            if (this.$1D_2) {
                CUI.Utility.$1Y(this.$1D_2, this.get_properties().ImageRightSideHover, this.get_properties().ImageRightSideHoverClass, this.get_properties().ImageRightSideHoverTop, this.get_properties().ImageRightSideHoverLeft, null, this.get_properties().Height);
            }
        }
    },
    
    $1N_2: function CUI_Controls_JewelMenuLauncher$$1N_2() {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().ImageHover)) {
            return;
        }
        if (!this.$32_2) {
            this.$1u_2.src = this.get_properties().Image;
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_properties().ImageClass)) {
                this.$1u_2.className = this.get_properties().ImageClass;
            }
        }
        else {
            if (this.$1C_2) {
                CUI.Utility.$1Y(this.$1C_2, this.get_properties().ImageLeftSide, this.get_properties().ImageLeftSideClass, this.get_properties().ImageLeftSideTop, this.get_properties().ImageLeftSideLeft, null, this.get_properties().Height);
            }
            CUI.Utility.$1Y(this.$1T_2, this.get_properties().Image, this.get_properties().ImageClass, this.get_properties().ImageTop, this.get_properties().ImageLeft, null, this.get_properties().Height);
            if (this.$1D_2) {
                CUI.Utility.$1Y(this.$1D_2, this.get_properties().ImageRightSide, this.get_properties().ImageRightSideClass, this.get_properties().ImageRightSideTop, this.get_properties().ImageRightSideLeft, null, this.get_properties().Height);
            }
        }
    },
    
    get_properties: function CUI_Controls_JewelMenuLauncher$get_properties() {ULSpEN:;
        return this.$5_0;
    }
}


Type.registerNamespace('CUI.Page');

CUI.Page.CommandDispatcher = function CUI_Page_CommandDispatcher() {ULSpEN:;
    this.$2K_0 = {};
}
CUI.Page.CommandDispatcher.prototype = {
    $2K_0: null,
    
    $9E_0: function CUI_Page_CommandDispatcher$$9E_0() {
    },
    
    $5M_0: 0,
    
    getNextSequenceNumber: function CUI_Page_CommandDispatcher$getNextSequenceNumber() {ULSpEN:;
        if (this.$5M_0 + 1 < 0) {
            throw Error.create('Command Dispatcher sequence numbers overflowed into negative numbers.');
        }
        return ++this.$5M_0;
    },
    
    peekNextSequenceNumber: function CUI_Page_CommandDispatcher$peekNextSequenceNumber() {ULSpEN:;
        return this.$5M_0 + 1;
    },
    
    getLastSequenceNumber: function CUI_Page_CommandDispatcher$getLastSequenceNumber() {ULSpEN:;
        return this.$5M_0;
    },
    
    executeCommand: function CUI_Page_CommandDispatcher$executeCommand(commandId, properties) {ULSpEN:;
        return this.$BM_0(commandId, properties, this.getNextSequenceNumber());
    },
    
    $BM_0: function CUI_Page_CommandDispatcher$$BM_0($p0, $p1, $p2) {
        var $v_0 = this.$2K_0[$p0];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return false;
        }
        else if (Array.isInstanceOfType($v_0)) {
            var $v_1 = $v_0;
            var $v_2 = false;
            for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
                var $v_4 = $v_1[$v_3];
                if (this.callCommandHandler($v_4, $p0, $p1, $p2)) {
                    $v_2 = true;
                }
            }
            return $v_2;
        }
        else {
            return this.callCommandHandler($v_0, $p0, $p1, $p2);
        }
    },
    
    isCommandEnabled: function CUI_Page_CommandDispatcher$isCommandEnabled(commandId) {ULSpEN:;
        var $v_0 = this.$2K_0[commandId];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return false;
        }
        else if (Array.isInstanceOfType($v_0)) {
            var $v_1 = $v_0;
            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];
                if (this.callCommandHandlerForEnabled($v_3, commandId)) {
                    return true;
                }
            }
            return false;
        }
        else {
            return this.callCommandHandlerForEnabled($v_0, commandId);
        }
    },
    
    $8y_0: function CUI_Page_CommandDispatcher$$8y_0($p0) {
        return this.$2K_0[$p0];
    },
    
    registerCommandHandler: function CUI_Page_CommandDispatcher$registerCommandHandler(commandId, handler) {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(commandId) || CUI.ScriptUtility.isNullOrUndefined(handler)) {
            throw Error.create('commandId and handler may not be null or undefined');
        }
        var $v_0 = this.$2K_0[commandId];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            this.$2K_0[commandId] = handler;
        }
        else if (Array.isInstanceOfType($v_0)) {
            if (!Array.contains($v_0, handler)) {
                Array.add($v_0, handler);
            }
        }
        else {
            if ($v_0 === handler) {
                return;
            }
            var $v_1 = [];
            Array.add($v_1, $v_0);
            Array.add($v_1, handler);
            this.$2K_0[commandId] = $v_1;
        }
    },
    
    unregisterCommandHandler: function CUI_Page_CommandDispatcher$unregisterCommandHandler(commandId, handler) {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(commandId) || CUI.ScriptUtility.isNullOrUndefined(handler)) {
            throw Error.create('commandId and handler may not be null or undefined');
        }
        var $v_0 = this.$2K_0[commandId];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return;
        }
        else if (Array.isInstanceOfType($v_0)) {
            Array.remove($v_0, handler);
        }
        else {
            if ($v_0 === handler) {
                this.$2K_0[commandId] = null;
            }
        }
    },
    
    registerMultipleCommandHandler: function CUI_Page_CommandDispatcher$registerMultipleCommandHandler(component, commands) {ULSpEN:;
        for (var $v_0 = 0; $v_0 < commands.length; $v_0++) {
            this.registerCommandHandler(commands[$v_0], component);
        }
    },
    
    unregisterMultipleCommandHandler: function CUI_Page_CommandDispatcher$unregisterMultipleCommandHandler(component, commands) {ULSpEN:;
        for (var $v_0 = 0; $v_0 < commands.length; $v_0++) {
            this.unregisterCommandHandler(commands[$v_0], component);
        }
    },
    
    callCommandHandler: function CUI_Page_CommandDispatcher$callCommandHandler(handler, commandId, properties, sequenceNumber) {ULSpEN:;
        return handler.handleCommand(commandId, properties, sequenceNumber);
    },
    
    callCommandHandlerForEnabled: function CUI_Page_CommandDispatcher$callCommandHandlerForEnabled(handler, commandId) {ULSpEN:;
        return handler.canHandleCommand(commandId);
    }
}


CUI.Page.FocusManager = function CUI_Page_FocusManager($p0) {
    CUI.Page.FocusManager.initializeBase(this);
    this.$23_1 = $p0;
    this.$Z_1 = [];
    this.$2c_1 = {};
    this.$1H_1 = [];
    this.$2Y_1 = {};
}
CUI.Page.FocusManager.prototype = {
    $1H_1: null,
    $2c_1: null,
    $23_1: null,
    $2Y_1: null,
    
    $9E_0: function CUI_Page_FocusManager$$9E_0() {
    },
    
    $97_1: function CUI_Page_FocusManager$$97_1() {ULSpEN:;
        this.$2Y_1 = {};
        var $v_0 = this.$1H_1.length;
        for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
            var $v_2 = this.$1H_1[$v_1];
            this.$2Y_1[($v_2)] = $v_2;
        }
    },
    
    requestFocusForComponent: function CUI_Page_FocusManager$requestFocusForComponent(component) {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(component)) {
            return false;
        }
        if (Array.contains(this.$1H_1, component)) {
            return true;
        }
        Array.add(this.$1H_1, component);
        this.$97_1();
        component.receiveFocus();
        return true;
    },
    
    releaseFocusFromComponent: function CUI_Page_FocusManager$releaseFocusFromComponent(component) {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(component)) {
            return false;
        }
        if (!Array.contains(this.$1H_1, component)) {
            return true;
        }
        Array.remove(this.$1H_1, component);
        this.$97_1();
        component.yieldFocus();
        return true;
    },
    
    releaseAllFoci: function CUI_Page_FocusManager$releaseAllFoci() {ULSpEN:;
        this.$2Y_1 = {};
        var $v_0 = this.$1H_1.length;
        for (var $v_1 = $v_0 - 1; $v_1 >= 0; $v_1--) {
            var $v_2 = this.$1H_1[$v_1];
            Array.remove(this.$1H_1, $v_2);
            $v_2.yieldFocus();
        }
        return true;
    },
    
    getFocusedComponents: function CUI_Page_FocusManager$getFocusedComponents() {ULSpEN:;
        return Array.clone(this.$1H_1);
    },
    
    handleCommand: function CUI_Page_FocusManager$handleCommand(commandId, properties, sequenceNumber) {ULSpEN:;
        var $v_0 = this.$8y_0(commandId);
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return false;
        }
        else if (Array.isInstanceOfType($v_0)) {
            var $v_1 = $v_0;
            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];
                if (CUI.ScriptUtility.isNullOrUndefined(this.$2Y_1[$v_3])) {
                    continue;
                }
                if (this.callCommandHandler($v_3, commandId, properties, sequenceNumber)) {
                    return true;
                }
            }
            return false;
        }
        else {
            if (CUI.ScriptUtility.isNullOrUndefined(this.$2Y_1[$v_0])) {
                return false;
            }
            return this.callCommandHandler($v_0, commandId, properties, sequenceNumber);
        }
    },
    
    canHandleCommand: function CUI_Page_FocusManager$canHandleCommand(commandId) {ULSpEN:;
        var $v_0 = this.$8y_0(commandId);
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            return false;
        }
        else if (Array.isInstanceOfType($v_0)) {
            var $v_1 = $v_0;
            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];
                if (CUI.ScriptUtility.isNullOrUndefined(this.$2Y_1[$v_3])) {
                    continue;
                }
                if (this.callCommandHandlerForEnabled($v_3, commandId)) {
                    return true;
                }
            }
            return false;
        }
        else {
            if (CUI.ScriptUtility.isNullOrUndefined(this.$2Y_1[$v_0])) {
                return false;
            }
            return this.callCommandHandlerForEnabled($v_0, commandId);
        }
    },
    
    $Z_1: null,
    
    $AC_1: function CUI_Page_FocusManager$$AC_1($p0) {
        if (Array.contains(this.$Z_1, $p0)) {
            return;
        }
        this.registerMultipleCommandHandler($p0, $p0.getFocusedCommands());
        Array.add(this.$Z_1, $p0);
    },
    
    $CX_1: function CUI_Page_FocusManager$$CX_1($p0) {
        if (!Array.contains(this.$Z_1, $p0)) {
            return;
        }
        this.unregisterMultipleCommandHandler($p0, $p0.getFocusedCommands());
        this.releaseFocusFromComponent($p0);
        Array.remove(this.$Z_1, $p0);
    },
    
    executeCommand: function CUI_Page_FocusManager$executeCommand(commandId, properties) {ULSpEN:;
        throw Error.create('ExecuteCommand should not be called on the main CommandDispatcher of the page, not the FocusManager');
    },
    
    registerCommandHandler: function CUI_Page_FocusManager$registerCommandHandler(commandId, handler) {ULSpEN:;
        CUI.Page.CommandDispatcher.prototype.registerCommandHandler.call(this, commandId, handler);
        if (CUI.ScriptUtility.isNullOrUndefined(this.$2c_1[commandId])) {
            this.$23_1.$s_1.registerCommandHandler(commandId, this);
            this.$2c_1[commandId] = 0;
        }
        var $v_0 = this.$2c_1[commandId];
        this.$2c_1[commandId] = $v_0 + 1;
    },
    
    unregisterCommandHandler: function CUI_Page_FocusManager$unregisterCommandHandler(commandId, handler) {ULSpEN:;
        CUI.Page.CommandDispatcher.prototype.unregisterCommandHandler.call(this, commandId, handler);
        var $v_0 = this.$2c_1[commandId];
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0) && $v_0 > 0) {
            this.$2c_1[commandId] = --$v_0;
            if ($v_0 <= 0) {
                this.$23_1.$s_1.unregisterCommandHandler(commandId, this);
                delete this.$2c_1[commandId];
            }
        }
    },
    
    getNextSequenceNumber: function CUI_Page_FocusManager$getNextSequenceNumber() {ULSpEN:;
        throw Error.create('The FocusManager does not issue command sequence numbers.  This is only done by the main CommandDispatcher of the page.');
    },
    
    peekNextSequenceNumber: function CUI_Page_FocusManager$peekNextSequenceNumber() {ULSpEN:;
        throw Error.create('The FocusManager does not issue command sequence numbers.  This is only done by the main CommandDispatcher of the page.');
    },
    
    getLastSequenceNumber: function CUI_Page_FocusManager$getLastSequenceNumber() {ULSpEN:;
        throw Error.create('The FocusManager does not issue command sequence numbers.  This is only done by the main CommandDispatcher of the page.');
    },
    
    callCommandHandler: function CUI_Page_FocusManager$callCommandHandler(handler, commandId, properties, sequenceNumber) {ULSpEN:;
        if (!Array.contains(this.$1H_1, handler)) {
            return false;
        }
        return handler.handleCommand(commandId, properties, sequenceNumber);
    },
    
    callCommandHandlerForEnabled: function CUI_Page_FocusManager$callCommandHandlerForEnabled(handler, commandId) {ULSpEN:;
        if (!Array.contains(this.$1H_1, handler)) {
            return false;
        }
        return handler.canHandleCommand(commandId);
    }
}


CUI.Page.PageManager = function CUI_Page_PageManager() {ULSpEN:;
    this.$$d_$7N_1 = Function.createDelegate(this, this.$7N_1);
    CUI.Page.PageManager.initializeBase(this);
    this.$Z_1 = [];
    this.$2o_1 = {};
    this.$s_1 = new CUI.Page.CommandDispatcher();
    this.$3c_1 = new CUI.Page.FocusManager(this);
    this.$5P_1 = new CUI.Page.UndoManager(this);
    this.$2L_1 = [];
    this.$22_1 = this.$$d_$7N_1;
    $addHandler(window, 'unload', this.$22_1);
}
CUI.Page.PageManager.initialize = function CUI_Page_PageManager$initialize() {ULSpEN:;
    if (!CUI.ScriptUtility.isNullOrUndefined(CUI.Page.PageManager._instance)) {
        return;
    }
    CUI.Page.PageManager._instance = CUI.Page.PageManager.createPageManager();
    CUI.Page.PageManager._instance.initializeInternal();
}
CUI.Page.PageManager.createPageManager = function CUI_Page_PageManager$createPageManager() {ULSpEN:;
    return new CUI.Page.PageManager();
}
CUI.Page.PageManager.get_instance = function CUI_Page_PageManager$get_instance() {ULSpEN:;
    if (!CUI.Page.PageManager._instance) {
        CUI.Page.PageManager.initialize();
    }
    return CUI.Page.PageManager._instance;
}
CUI.Page.PageManager.prototype = {
    $22_1: null,
    
    initializeInternal: function CUI_Page_PageManager$initializeInternal() {ULSpEN:;
        this.$s_1.$9E_0();
        this.$5P_1.$9E_0();
        this.$3c_1.$9E_0();
        this.$s_1.registerCommandHandler('appstatechanged', this);
    },
    
    $7N_1: function CUI_Page_PageManager$$7N_1($p0) {
        this.dispose();
    },
    
    $3Q_1: false,
    
    dispose: function CUI_Page_PageManager$dispose() {ULSpEN:;
        if (this.$3Q_1) {
            return;
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_ribbon())) {
            this.get_ribbon().$BQ_1();
        }
        this.set_ribbon(null);
        this.$3c_1 = null;
        this.$5P_1 = null;
        this.$s_1 = null;
        this.$2L_1 = null;
        this.$Z_1 = null;
        $removeHandler(window, 'unload', this.$22_1);
        CUI.Page.PageManager._instance = null;
        this.$3Q_1 = true;
    },
    
    resetComponents: function CUI_Page_PageManager$resetComponents() {ULSpEN:;
        var $$dict_0 = this.$2o_1;
        for (var $$key_1 in $$dict_0) {
            var $v_0 = { key: $$key_1, value: $$dict_0[$$key_1] };
            this.removePageComponent($v_0.value);
        }
        this.$2o_1 = {};
        this.$Z_1 = [];
    },
    
    $s_1: null,
    
    get_commandDispatcher: function CUI_Page_PageManager$get_commandDispatcher() {ULSpEN:;
        return this.$s_1;
    },
    
    $3c_1: null,
    
    get_focusManager: function CUI_Page_PageManager$get_focusManager() {ULSpEN:;
        return this.$3c_1;
    },
    
    $5P_1: null,
    
    get_undoManager: function CUI_Page_PageManager$get_undoManager() {ULSpEN:;
        return this.$5P_1;
    },
    
    $69_1: null,
    
    get_$72_1: function CUI_Page_PageManager$get_$72_1() {ULSpEN:;
        if (!this.$69_1) {
            this.$69_1 = new Sys.EventHandlerList();
        }
        return this.$69_1;
    },
    
    $3j_1: null,
    
    get_ribbon: function CUI_Page_PageManager$get_ribbon() {ULSpEN:;
        return this.$3j_1;
    },
    set_ribbon: function CUI_Page_PageManager$set_ribbon(value) {ULSpEN:;
        if (value === this.$3j_1) {
            return value;
        }
        if (CUI.ScriptUtility.isNullOrUndefined(value) && !CUI.ScriptUtility.isNullOrUndefined(this.$3j_1)) {
            this.removeRoot(this.$3j_1);
            this.$3j_1 = null;
        }
        else if (!Array.contains(this.$2L_1, value)) {
            this.addRoot(value);
            this.$3j_1 = value;
        }
        return value;
    },
    
    add_ribbonInited: function CUI_Page_PageManager$add_ribbonInited(value) {ULSpEN:;
        this.get_$72_1().addHandler('RibbonInited', value);
    },
    remove_ribbonInited: function CUI_Page_PageManager$remove_ribbonInited(value) {ULSpEN:;
        this.get_$72_1().removeHandler('RibbonInited', value);
    },
    
    onComponentBuilt: function CUI_Page_PageManager$onComponentBuilt(root, componentId) {ULSpEN:;
        this.pollRootState(root);
        if (CUI.Ribbon.isInstanceOfType(root)) {
            var $v_0 = this.get_$72_1().getHandler('RibbonInited');
            if ($v_0) {
                $v_0(this, Sys.EventArgs.Empty);
            }
        }
    },
    
    onComponentCreated: function CUI_Page_PageManager$onComponentCreated(root, componentId) {ULSpEN:;
        if (CUI.Ribbon.isInstanceOfType(root) && CUI.ScriptUtility.isNullOrUndefined(this.get_ribbon())) {
            this.set_ribbon(root);
        }
        else {
            this.addRoot(root);
        }
    },
    
    $2L_1: null,
    
    addRoot: function CUI_Page_PageManager$addRoot(root) {ULSpEN:;
        if (Array.contains(this.$2L_1, root)) {
            throw Error.create('This Root has already been added to the PageManager');
        }
        Array.add(this.$2L_1, root);
        root.set_rootUser(this);
    },
    
    removeRoot: function CUI_Page_PageManager$removeRoot(root) {ULSpEN:;
        if (!Array.contains(this.$2L_1, root)) {
            throw Error.create('This Root has not been added to the PageManager.');
        }
        Array.remove(this.$2L_1, root);
        root.set_rootUser(null);
    },
    
    $Z_1: null,
    $2o_1: null,
    
    getPageComponentById: function CUI_Page_PageManager$getPageComponentById(id) {ULSpEN:;
        return this.$2o_1[id];
    },
    
    addPageComponent: function CUI_Page_PageManager$addPageComponent(component) {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$2o_1[component.getId()])) {
            Error.create('A PageComponent with id: ' + component.getId() + ' has already been added to the PageManger.');
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$Z_1) && !Array.contains(this.$Z_1, component)) {
            this.$2o_1[component.getId()] = component;
            component.init();
            this.$s_1.registerMultipleCommandHandler(component, component.getGlobalCommands());
            Array.add(this.$Z_1, component);
            if (component.isFocusable()) {
                this.$3c_1.$AC_1(component);
            }
        }
    },
    
    removePageComponent: function CUI_Page_PageManager$removePageComponent(component) {ULSpEN:;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$Z_1) || !Array.contains(this.$Z_1, component)) {
            return;
        }
        this.$s_1.unregisterMultipleCommandHandler(component, component.getGlobalCommands());
        Array.remove(this.$Z_1, component);
        if (component.isFocusable()) {
            this.$3c_1.$CX_1(component);
        }
        this.$2o_1[component.getId()] = null;
    },
    
    executeRootCommand: function CUI_Page_PageManager$executeRootCommand(commandId, properties, commandInfo, root) {ULSpEN:;
        return this.$s_1.executeCommand(commandId, properties);
    },
    
    isRootCommandEnabled: function CUI_Page_PageManager$isRootCommandEnabled(commandId, root) {ULSpEN:;
        return this.$s_1.isCommandEnabled(commandId);
    },
    
    onRootRefreshed: function CUI_Page_PageManager$onRootRefreshed(root) {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(root)) {
            this.pollRootState(root);
        }
    },
    
    handleCommand: function CUI_Page_PageManager$handleCommand(commandId, properties, sequenceNumber) {ULSpEN:;
        if (commandId === 'appstatechanged') {
            for (var $v_0 = 0; $v_0 < this.$2L_1.length; $v_0++) {
                var $v_1 = this.$2L_1[$v_0];
                this.pollRootState($v_1);
                if ($v_1.$j_0) {
                    $v_1.$1q_0();
                }
            }
            return true;
        }
        return false;
    },
    
    $6d_1: false,
    
    get_rootPollingInProgress: function CUI_Page_PageManager$get_rootPollingInProgress() {ULSpEN:;
        return this.$6d_1;
    },
    
    pollRootState: function CUI_Page_PageManager$pollRootState(root) {ULSpEN:;
        try {
            this.$6d_1 = true;
            root.pollForStateAndUpdate();
        }
        finally {
            this.$6d_1 = false;
        }
    },
    
    changeCommandContext: function CUI_Page_PageManager$changeCommandContext(commandContextId) {ULSpEN:;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_ribbon())) {
            return this.get_ribbon().selectTabByCommand(commandContextId);
        }
        return false;
    },
    
    canHandleCommand: function CUI_Page_PageManager$canHandleCommand(commandId) {ULSpEN:;
        return commandId === 'appstatechanged';
    },
    
    restoreFocusToRibbon: function CUI_Page_PageManager$restoreFocusToRibbon() {ULSpEN:;
        if (!this.get_ribbon().restoreFocus()) {
            this.get_ribbon().setFocus();
        }
    }
}


CUI.Page.UndoManager = function CUI_Page_UndoManager($p0) {
    this.$6c_0 = CUI.Page.UndoManager.$2B;
    this.$23_0 = $p0;
    this.$18_0 = [];
    this.$x_0 = [];
    this.$26_0 = {};
}
CUI.Page.UndoManager.prototype = {
    $23_0: null,
    $26_0: null,
    $18_0: null,
    $x_0: null,
    
    $9E_0: function CUI_Page_UndoManager$$9E_0() {ULSpEN:;
        this.$23_0.$s_1.registerCommandHandler('GlobalUndo', this);
        this.$23_0.$s_1.registerCommandHandler('GlobalRedo', this);
        this.$23_0.$s_1.registerCommandHandler('grpedit', this);
    },
    
    addUndoSequenceNumber: function CUI_Page_UndoManager$addUndoSequenceNumber(sequenceNumber) {ULSpEN:;
        this.$CT_0(sequenceNumber);
        if (sequenceNumber !== this.$6c_0) {
            this.$B8_0();
        }
    },
    
    addRedoSequenceNumber: function CUI_Page_UndoManager$addRedoSequenceNumber(sequenceNumber) {ULSpEN:;
        this.$CS_0(sequenceNumber);
    },
    
    get_oldestSequenceNumber: function CUI_Page_UndoManager$get_oldestSequenceNumber() {ULSpEN:;
        if (!this.$18_0.length) {
            return CUI.Page.UndoManager.$2B;
        }
        var $v_0 = CUI.Page.UndoManager.$2B;
        var $v_1 = CUI.Page.UndoManager.$2B;
        if (this.$18_0.length > 0) {
            $v_0 = this.$18_0[this.$18_0.length - 1];
        }
        if (this.$x_0.length > 0) {
            $v_1 = this.$x_0[0];
        }
        if ($v_0 === CUI.Page.UndoManager.$2B) {
            return $v_0;
        }
        else {
            return $v_0;
        }
    },
    
    $B6_0: function CUI_Page_UndoManager$$B6_0() {ULSpEN:;
        var $v_0 = this.$CQ_0();
        if ($v_0 === CUI.Page.UndoManager.$2B) {
            return;
        }
        var $v_1 = {};
        $v_1['SequenceNumber'] = $v_0;
        this.$23_0.$s_1.executeCommand('Undo', $v_1);
    },
    
    $B5_0: function CUI_Page_UndoManager$$B5_0() {ULSpEN:;
        var $v_0 = this.$CP_0();
        if ($v_0 === CUI.Page.UndoManager.$2B) {
            return;
        }
        var $v_1 = {};
        $v_1['SequenceNumber'] = $v_0;
        this.$6c_0 = this.$23_0.$s_1.peekNextSequenceNumber();
        this.$23_0.$s_1.executeCommand('Redo', $v_1);
    },
    
    $CP_0: function CUI_Page_UndoManager$$CP_0() {ULSpEN:;
        if (!this.$x_0.length) {
            return CUI.Page.UndoManager.$2B;
        }
        var $v_0 = this.$x_0[0];
        Array.removeAt(this.$x_0, 0);
        this.$26_0[$v_0.toString()] = null;
        return $v_0;
    },
    
    $CS_0: function CUI_Page_UndoManager$$CS_0($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$26_0[$p0.toString()])) {
            if (this.$18_0[0] !== $p0) {
                throw Error.create('This command sequence number is already on the undo or the redo stack but it is not ontop of the redo stack.  Pushing it would result in out of sequence redo and undo stacks.');
            }
            return;
        }
        Array.insert(this.$x_0, 0, $p0);
        this.$26_0[$p0.toString()] = $p0;
    },
    
    $CQ_0: function CUI_Page_UndoManager$$CQ_0() {ULSpEN:;
        if (!this.$18_0.length) {
            return CUI.Page.UndoManager.$2B;
        }
        var $v_0 = this.$18_0[0];
        Array.removeAt(this.$18_0, 0);
        this.$26_0[$v_0.toString()] = null;
        return $v_0;
    },
    
    $CT_0: function CUI_Page_UndoManager$$CT_0($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$26_0[$p0.toString()])) {
            if (this.$18_0[0] !== $p0) {
                throw Error.create('This command sequence number is already on the stack and not on top.  Pushing it would result in an out of sequence undo stack.');
            }
            return;
        }
        Array.insert(this.$18_0, 0, $p0);
        this.$26_0[$p0.toString()] = $p0;
    },
    
    $B8_0: function CUI_Page_UndoManager$$B8_0() {ULSpEN:;
        for (var $v_0 = 0; $v_0 < this.$x_0.length; $v_0++) {
            this.$26_0[(this.$x_0[$v_0]).toString()] = null;
            Array.remove(this.$x_0, this.$x_0[$v_0]);
        }
        Array.clear(this.$x_0);
    },
    
    invalidateUndoSequenceNumber: function CUI_Page_UndoManager$invalidateUndoSequenceNumber(sequenceNumber) {ULSpEN:;
        for (var $v_0 = this.$18_0.length - 1; $v_0 > -1; $v_0--) {
            var $v_1 = this.$18_0[$v_0];
            if ($v_1 <= sequenceNumber) {
                Array.removeAt(this.$18_0, $v_0);
                this.$26_0[$v_1.toString()] = null;
            }
        }
        while (this.$x_0.length > 0 && this.$x_0[0] <= sequenceNumber) {
            this.$26_0[(this.$x_0[0]).toString()] = null;
            Array.removeAt(this.$x_0, 0);
        }
    },
    
    canHandleCommand: function CUI_Page_UndoManager$canHandleCommand(commandId) {ULSpEN:;
        if (commandId === 'GlobalUndo') {
            return this.$18_0.length > 0;
        }
        else if (commandId === 'GlobalRedo') {
            return this.$x_0.length > 0;
        }
        else if (commandId === 'grpedit') {
            return true;
        }
        return false;
    },
    
    handleCommand: function CUI_Page_UndoManager$handleCommand(commandId, properties, sequenceNumber) {ULSpEN:;
        switch (commandId) {
            case 'GlobalUndo':
                this.$B6_0();
                return true;
            case 'GlobalRedo':
                this.$B5_0();
                return true;
        }
        return false;
    }
}


Type.registerNamespace('Commands');

Commands.CommandIds = function Commands_CommandIds() {
}


Commands.GlobalRedoProperties = function Commands_GlobalRedoProperties() {
}


Commands.RedoProperties = function Commands_RedoProperties() {
}


Commands.GlobalUndoProperties = function Commands_GlobalUndoProperties() {
}


Commands.UndoProperties = function Commands_UndoProperties() {
}


CUI.QueryRecord.registerClass('CUI.QueryRecord');
CUI.DeclarativeTemplateBuildContext.registerClass('CUI.DeclarativeTemplateBuildContext');
CUI.CommandInformation.registerClass('CUI.CommandInformation');
CUI.DisabledCommandInfoProperties.registerClass('CUI.DisabledCommandInfoProperties');
CUI.BuildOptions.registerClass('CUI.BuildOptions');
CUI.BuildContext.registerClass('CUI.BuildContext');
CUI.DataNodeWrapper.registerClass('CUI.DataNodeWrapper');
CUI.Builder.registerClass('CUI.Builder', null, Sys.IDisposable);
CUI.Builder.SpinnerChildren.registerClass('CUI.Builder.SpinnerChildren');
CUI.CommandEventArgs.registerClass('CUI.CommandEventArgs', Sys.EventArgs);
CUI.Component.registerClass('CUI.Component', null, CUI.IMenuItem, Sys.IDisposable);
CUI.Menu.registerClass('CUI.Menu', CUI.Component);
CUI.ContextMenu.registerClass('CUI.ContextMenu', CUI.Menu);
CUI.Control.registerClass('CUI.Control', null, Sys.IDisposable, CUI.IMenuItem);
CUI.MenuLauncher.registerClass('CUI.MenuLauncher', CUI.Control, CUI.IModalController);
CUI.ContextMenuLauncher.registerClass('CUI.ContextMenuLauncher', CUI.MenuLauncher);
CUI.RootProperties.registerClass('CUI.RootProperties');
CUI.StandaloneRootProperties.registerClass('CUI.StandaloneRootProperties', CUI.RootProperties);
CUI.ContextMenuRootProperties.registerClass('CUI.ContextMenuRootProperties', CUI.StandaloneRootProperties);
CUI.Root.registerClass('CUI.Root', CUI.Component, Sys.IDisposable);
CUI.StandaloneRoot.registerClass('CUI.StandaloneRoot', CUI.Root);
CUI.ContextMenuRoot.registerClass('CUI.ContextMenuRoot', CUI.StandaloneRoot);
CUI.ControlProperties.registerClass('CUI.ControlProperties');
CUI.ControlComponent.registerClass('CUI.ControlComponent', CUI.Component);
CUI.DataQueryResult.registerClass('CUI.DataQueryResult');
CUI.DataQuery.registerClass('CUI.DataQuery');
CUI.DataSource.registerClass('CUI.DataSource', null, CUI.IDataSource);
CUI.Gallery.registerClass('CUI.Gallery', CUI.Component);
CUI.Jewel.registerClass('CUI.Jewel', CUI.Root);
CUI.JewelBuildContext.registerClass('CUI.JewelBuildContext', CUI.BuildContext);
CUI.JewelBuildOptions.registerClass('CUI.JewelBuildOptions', CUI.BuildOptions);
CUI.JewelBuilder.registerClass('CUI.JewelBuilder', CUI.Builder);
CUI.MenuItem.registerClass('CUI.MenuItem', CUI.ControlComponent);
CUI.MenuLauncherControlProperties.registerClass('CUI.MenuLauncherControlProperties', CUI.ControlProperties);
CUI.BrowserUtility.registerClass('CUI.BrowserUtility');
CUI.MenuSection.registerClass('CUI.MenuSection', CUI.Component);
CUI.StandaloneDock.registerClass('CUI.StandaloneDock', CUI.Component);
CUI.QAT.registerClass('CUI.QAT', CUI.Root);
CUI.QATBuildContext.registerClass('CUI.QATBuildContext', CUI.BuildContext);
CUI.QATBuildOptions.registerClass('CUI.QATBuildOptions', CUI.BuildOptions);
CUI.QATBuilder.registerClass('CUI.QATBuilder', CUI.Builder);
CUI.RibbonPeripheralSection.registerClass('CUI.RibbonPeripheralSection');
CUI.ContextualGroup.registerClass('CUI.ContextualGroup', null, Sys.IDisposable);
CUI.Template.registerClass('CUI.Template');
CUI.DeclarativeTemplate.registerClass('CUI.DeclarativeTemplate', CUI.Template);
CUI.RibbonComponent.registerClass('CUI.RibbonComponent', CUI.Component);
CUI.Group.registerClass('CUI.Group', CUI.RibbonComponent);
CUI.GroupPopup.registerClass('CUI.GroupPopup', CUI.Component);
CUI.Layout.registerClass('CUI.Layout', CUI.RibbonComponent);
CUI.GroupPopupLayout.registerClass('CUI.GroupPopupLayout', CUI.Layout);
CUI.RootEventCommandProperties.registerClass('CUI.RootEventCommandProperties');
CUI.RibbonEventCommandProperties.registerClass('CUI.RibbonEventCommandProperties', CUI.RootEventCommandProperties);
CUI.CommandContextSwitchCommandProperties.registerClass('CUI.CommandContextSwitchCommandProperties');
CUI.ScalableRoot.registerClass('CUI.ScalableRoot', CUI.Root);
CUI.Ribbon.registerClass('CUI.Ribbon', CUI.ScalableRoot);
CUI.RibbonCommand.registerClass('CUI.RibbonCommand');
CUI.RibbonBuildContext.registerClass('CUI.RibbonBuildContext', CUI.BuildContext);
CUI.RibbonBuildOptions.registerClass('CUI.RibbonBuildOptions', CUI.BuildOptions);
CUI.RibbonBuilder.registerClass('CUI.RibbonBuilder', CUI.Builder);
CUI.Row.registerClass('CUI.Row', CUI.Component);
CUI.ScalingStep.registerClass('CUI.ScalingStep');
CUI.Scaling.registerClass('CUI.Scaling');
CUI.Section.registerClass('CUI.Section', CUI.RibbonComponent);
CUI.Strip.registerClass('CUI.Strip', CUI.RibbonComponent);
CUI.Tab.registerClass('CUI.Tab', CUI.RibbonComponent);
CUI.TemplateManager.registerClass('CUI.TemplateManager');
CUI.RootUser.registerClass('CUI.RootUser', null, CUI.IRootUser);
CUI.ToolTip.registerClass('CUI.ToolTip', CUI.Component);
CUI.Unit.registerClass('CUI.Unit');
CUI.Utility.registerClass('CUI.Utility');
CUI.ScriptUtility.registerClass('CUI.ScriptUtility');
CUI.UIUtility.registerClass('CUI.UIUtility');
CUI.ListNode.registerClass('CUI.ListNode');
CUI.List.registerClass('CUI.List', null, IEnumerable);
CUI.ListEnumerator.registerClass('CUI.ListEnumerator', null, IEnumerator);
CUI.JsonXmlElement.registerClass('CUI.JsonXmlElement');
CUI.Controls.ColorStyle.registerClass('CUI.Controls.ColorStyle');
CUI.Controls.ColorPickerResult.registerClass('CUI.Controls.ColorPickerResult');
CUI.Controls.ContextMenuControlProperties.registerClass('CUI.Controls.ContextMenuControlProperties', CUI.MenuLauncherControlProperties);
CUI.Controls.ContextMenuControl.registerClass('CUI.Controls.ContextMenuControl', CUI.ContextMenuLauncher);
CUI.Controls.ButtonCommandProperties.registerClass('CUI.Controls.ButtonCommandProperties');
CUI.Controls.Button.registerClass('CUI.Controls.Button', CUI.Control, CUI.IMenuItem, CUI.ISelectableControl);
CUI.Controls.CheckBoxCommandProperties.registerClass('CUI.Controls.CheckBoxCommandProperties');
CUI.Controls.ToggleButton.registerClass('CUI.Controls.ToggleButton', CUI.Control, CUI.IMenuItem, CUI.ISelectableControl);
CUI.Controls.CheckBox.registerClass('CUI.Controls.CheckBox', CUI.Controls.ToggleButton);
CUI.Controls.ColorPickerCommandProperties.registerClass('CUI.Controls.ColorPickerCommandProperties');
CUI.Controls.ColorPicker.registerClass('CUI.Controls.ColorPicker', CUI.Control, CUI.IMenuItem);
CUI.Controls.ComboBoxCommandProperties.registerClass('CUI.Controls.ComboBoxCommandProperties');
CUI.Controls.DropDown.registerClass('CUI.Controls.DropDown', CUI.MenuLauncher);
CUI.Controls.ComboBox.registerClass('CUI.Controls.ComboBox', CUI.Controls.DropDown);
CUI.Controls.DropDownCommandProperties.registerClass('CUI.Controls.DropDownCommandProperties');
CUI.Controls.FlyoutAnchorCommandProperties.registerClass('CUI.Controls.FlyoutAnchorCommandProperties');
CUI.Controls.FlyoutAnchor.registerClass('CUI.Controls.FlyoutAnchor', CUI.MenuLauncher);
CUI.Controls.GalleryButtonCommandProperties.registerClass('CUI.Controls.GalleryButtonCommandProperties');
CUI.Controls.GalleryButton.registerClass('CUI.Controls.GalleryButton', CUI.Control, CUI.ISelectableControl);
CUI.Controls.InsertTableCommandProperties.registerClass('CUI.Controls.InsertTableCommandProperties');
CUI.Controls.InsertTable.registerClass('CUI.Controls.InsertTable', CUI.Control);
CUI.Controls.LabelCommandProperties.registerClass('CUI.Controls.LabelCommandProperties');
CUI.Controls.Label.registerClass('CUI.Controls.Label', CUI.Control);
CUI.Controls.MRUSplitButton.registerClass('CUI.Controls.MRUSplitButton', CUI.Controls.DropDown);
CUI.Controls.Separator.registerClass('CUI.Controls.Separator', CUI.Control);
CUI.Controls.SpinnerCommandProperties.registerClass('CUI.Controls.SpinnerCommandProperties');
CUI.Controls.Spinner.registerClass('CUI.Controls.Spinner', CUI.Control);
CUI.Controls.SplitButtonCommandProperties.registerClass('CUI.Controls.SplitButtonCommandProperties');
CUI.Controls.SplitButton.registerClass('CUI.Controls.SplitButton', CUI.MenuLauncher);
CUI.Controls.TextBoxCommandProperties.registerClass('CUI.Controls.TextBoxCommandProperties');
CUI.Controls.TextBox.registerClass('CUI.Controls.TextBox', CUI.Control);
CUI.Controls.ToggleButtonCommandProperties.registerClass('CUI.Controls.ToggleButtonCommandProperties');
CUI.Controls.JewelMenuLauncher.registerClass('CUI.Controls.JewelMenuLauncher', CUI.MenuLauncher);
CUI.Page.CommandDispatcher.registerClass('CUI.Page.CommandDispatcher');
CUI.Page.FocusManager.registerClass('CUI.Page.FocusManager', CUI.Page.CommandDispatcher, CUI.Page.ICommandHandler);
CUI.Page.PageManager.registerClass('CUI.Page.PageManager', CUI.RootUser, CUI.Page.ICommandHandler, CUI.IRootBuildClient);
CUI.Page.UndoManager.registerClass('CUI.Page.UndoManager', null, CUI.Page.ICommandHandler);
Commands.CommandIds.registerClass('Commands.CommandIds');
Commands.GlobalRedoProperties.registerClass('Commands.GlobalRedoProperties');
Commands.RedoProperties.registerClass('Commands.RedoProperties');
Commands.GlobalUndoProperties.registerClass('Commands.GlobalUndoProperties');
Commands.UndoProperties.registerClass('Commands.UndoProperties');
function cui_initialize() {ULSpEN:;
CUI.DataNodeWrapper.ATTRIBUTES = 'attrs';
CUI.DataNodeWrapper.CHILDREN = 'children';
CUI.DataNodeWrapper.NAME = 'name';
CUI.DataNodeWrapper.ALIGNMENT = 'Alignment';
CUI.DataNodeWrapper.ALT = 'Alt';
CUI.DataNodeWrapper.CLASSNAME = 'Classname';
CUI.DataNodeWrapper.COLOR = 'Color';
CUI.DataNodeWrapper.COMMAND = 'Command';
CUI.DataNodeWrapper.CONTAINERCSSCLASS = 'ContainerCssClass';
CUI.DataNodeWrapper.CONTEXTUALGROUPID = 'ContextualGroupId';
CUI.DataNodeWrapper.CSSCLASS = 'CssClass';
CUI.DataNodeWrapper.DARKBLUE = 'DarkBlue';
CUI.DataNodeWrapper.DECIMALDIGITS = 'DecimalDigits';
CUI.DataNodeWrapper.DESCRIPTION = 'Description';
CUI.DataNodeWrapper.DISPLAYCOLOR = 'DisplayColor';
CUI.DataNodeWrapper.DISPLAYMODE = 'DisplayMode';
CUI.DataNodeWrapper.DIVIDER = 'Divider';
CUI.DataNodeWrapper.ELEMENTDIMENSIONS = 'ElementDimensions';
CUI.DataNodeWrapper.GREEN = 'Green';
CUI.DataNodeWrapper.GROUPID = 'GroupId';
CUI.DataNodeWrapper.id = 'Id';
CUI.DataNodeWrapper.INDEX = 'Index';
CUI.DataNodeWrapper.INTERVAL = 'Interval';
CUI.DataNodeWrapper.LABELTEXT = 'LabelText';
CUI.DataNodeWrapper.LAYOUTTITLE = 'LayoutTitle';
CUI.DataNodeWrapper.LIGHTBLUE = 'LightBlue';
CUI.DataNodeWrapper.LOWSCALEWARNING = 'LowScaleWarning';
CUI.DataNodeWrapper.MAGENTA = 'Magenta';
CUI.DataNodeWrapper.MAXHEIGHT = 'MaxHeight';
CUI.DataNodeWrapper.MAXIMUMVALUE = 'MaximumValue';
CUI.DataNodeWrapper.MAXWIDTH = 'MaxWidth';
CUI.DataNodeWrapper.MENUITEMID = 'MenuItemId';
CUI.DataNodeWrapper.MESSAGE = 'Message';
CUI.DataNodeWrapper.MINIMUMVALUE = 'MinimumValue';
CUI.DataNodeWrapper.namE_CAPS = 'Name';
CUI.DataNodeWrapper.ONEROW = 'OneRow';
CUI.DataNodeWrapper.ORANGE = 'Orange';
CUI.DataNodeWrapper.POPUP = 'Popup';
CUI.DataNodeWrapper.POPUPSIZE = 'PopupSize';
CUI.DataNodeWrapper.PURPLE = 'Purple';
CUI.DataNodeWrapper.SCROLLABLE = 'Scrollable';
CUI.DataNodeWrapper.SEQUENCE = 'Sequence';
CUI.DataNodeWrapper.SIZE = 'Size';
CUI.DataNodeWrapper.STYLE = 'Style';
CUI.DataNodeWrapper.TEAL = 'Teal';
CUI.DataNodeWrapper.TEMPLATEALIAS = 'TemplateAlias';
CUI.DataNodeWrapper.THREEROW = 'ThreeRow';
CUI.DataNodeWrapper.TITLE = 'Title';
CUI.DataNodeWrapper.TWOROW = 'TwoRow';
CUI.DataNodeWrapper.TYPE = 'Type';
CUI.DataNodeWrapper.VALUE = 'Value';
CUI.DataNodeWrapper.YELLOW = 'Yellow';
CUI.DataNodeWrapper.RIBBON = 'Ribbon';
CUI.DataNodeWrapper.QAT = 'QAT';
CUI.DataNodeWrapper.JEWEL = 'Jewel';
CUI.DataNodeWrapper.TABS = 'Tabs';
CUI.DataNodeWrapper.CONTEXTUALTABS = 'ContextualTabs';
CUI.DataNodeWrapper.CONTEXTUALGROUP = 'ContextualGroup';
CUI.DataNodeWrapper.TAB = 'Tab';
CUI.DataNodeWrapper.SCALING = 'Scaling';
CUI.DataNodeWrapper.MAXSIZE = 'MaxSize';
CUI.DataNodeWrapper.SCALE = 'Scale';
CUI.DataNodeWrapper.GROUP = 'Group';
CUI.DataNodeWrapper.GROUPS = 'Groups';
CUI.DataNodeWrapper.LAYOUT = 'Layout';
CUI.DataNodeWrapper.SECTION = 'Section';
CUI.DataNodeWrapper.OVERFLOWSECTION = 'OverflowSection';
CUI.DataNodeWrapper.ROW = 'Row';
CUI.DataNodeWrapper.CONTROL = 'ControlRef';
CUI.DataNodeWrapper.OVERFLOWAREA = 'OverflowArea';
CUI.DataNodeWrapper.STRIP = 'Strip';
CUI.DataNodeWrapper.CONTROLS = 'Controls';
CUI.DataNodeWrapper.MENU = 'Menu';
CUI.DataNodeWrapper.MENUSECTION = 'MenuSection';
CUI.DataNodeWrapper.TEMPLATE = 'Template';
CUI.DataNodeWrapper.TEMPLATES = 'Templates';
CUI.DataNodeWrapper.RIBBONTEMPLATES = 'RibbonTemplates';
CUI.DataNodeWrapper.GROUPTEMPLATE = 'GroupTemplate';
CUI.DataNodeWrapper.GALLERY = 'Gallery';
CUI.DataNodeWrapper.UNIT = 'Unit';
CUI.DataNodeWrapper.ALLOWEDTEXT = 'AllowedText';
CUI.DataNodeWrapper.colors = 'Colors';
CUI.DataNodeWrapper.color = 'Color';
CUI.DataNodeWrapper.toggleButton = 'ToggleButton';
CUI.DataNodeWrapper.comboBox = 'ComboBox';
CUI.DataNodeWrapper.dropDown = 'DropDown';
CUI.DataNodeWrapper.button = 'Button';
CUI.DataNodeWrapper.splitButton = 'SplitButton';
CUI.DataNodeWrapper.flyoutAnchor = 'FlyoutAnchor';
CUI.DataNodeWrapper.galleryButton = 'GalleryButton';
CUI.DataNodeWrapper.insertTable = 'InsertTable';
CUI.DataNodeWrapper.label = 'Label';
CUI.DataNodeWrapper.mruSplitButton = 'MRUSplitButton';
CUI.DataNodeWrapper.spinner = 'Spinner';
CUI.DataNodeWrapper.textBox = 'TextBox';
CUI.DataNodeWrapper.checkBox = 'CheckBox';
CUI.DataNodeWrapper.colorPicker = 'ColorPicker';
CUI.DataNodeWrapper.separator = 'Separator';
CUI.DataNodeWrapper.jewelMenuLauncher = 'JewelMenuLauncher';
CUI.DataNodeWrapper.BUTTONDOCK = 'ButtonDock';
CUI.DataNodeWrapper.BUTTONDOCKS = 'ButtonDocks';
CUI.DataNodeWrapper.CENTERALIGN = 'Center';
CUI.DataNodeWrapper.LEFTALIGN = 'Left';
CUI.DataNodeWrapper.RIGHTALIGN = 'Right';
CUI.DataNodeWrapper.TOOLBAR = 'Toolbar';
CUI.DataNodeWrapper.LARGE = 'Large';
CUI.DataNodeWrapper.MEDIUM = 'Medium';
CUI.DataNodeWrapper.SMALL = 'Small';
CUI.DataNodeWrapper.DIVIDERAFTER = 'DividerAfter';
CUI.DataNodeWrapper.DIVIDERBEFORE = 'DividerBefore';
CUI.DataNodeWrapper.$5j = null;
CUI.RibbonPeripheralSection.tabRowLeft = 'TabRowLeft';
CUI.RibbonPeripheralSection.tabRowInline = 'TabRowInline';
CUI.RibbonPeripheralSection.tabRowRight = 'TabRowRight';
CUI.RibbonPeripheralSection.qatRowLeft = 'QATRowLeft';
CUI.RibbonPeripheralSection.qatRowCenter = 'QATRowCenter';
CUI.RibbonPeripheralSection.qatRowRight = 'QATRowRight';
CUI.TemplateManager.$5B = null;
CUI.Unit.$7I = -1;
CUI.Utility.$9C = [ '', 'ms-cui-img-5by3', 'ms-cui-img-13by13', 'ms-cui-img-16by16', 'ms-cui-img-32by32', 'ms-cui-img-48by48', 'ms-cui-img-64by48', 'ms-cui-img-72by96', 'ms-cui-img-96by72', 'ms-cui-img-96by96', 'ms-cui-img-56by24', 'ms-cui-img-2by16' ];
CUI.Utility.$8r = [ '', 'Size16by16', 'Size32by32', 'Size48by48', 'Size64by48', 'Size72by96', 'Size96by72', 'Size96by96', 'Size128by128', 'Size190by30', 'Size190by40', 'Size190by50', 'Size190by60', 'SizeCustom' ];
CUI.Utility.$9A = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 1, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 5, 0 ];
CUI.Utility.$14 = [ '', '&quot;', '&amp;', '&#39;', '&lt;', '&gt;', ' ', '<br>', '&nbsp;', '<b>', '<i>', '<p>', '<u>', '</b>', '</i>', '</p>', '</u>' ];
CUI.Utility.$A2 = false;
CUI.Utility.$A1 = false;
CUI.Utility.$6H = false;
CUI.Utility.$6G = false;
CUI.Utility.$6I = false;
CUI.Utility.$6D = false;
CUI.Utility.$6J = false;
CUI.Utility.$6E = false;
CUI.Utility.$6K = false;
CUI.Utility.$6F = false;
CUI.Utility.$5K = null;
CUI.ScriptUtility.emptyString = '';
CUI.Controls.ButtonCommandProperties.LabelText = 'LabelText';
CUI.Controls.ButtonCommandProperties.Image16by16Class = 'Image16by16Class';
CUI.Controls.ButtonCommandProperties.Image32by32Class = 'Image32by32Class';
CUI.Controls.CheckBoxCommandProperties.On = 'On';
CUI.Controls.CheckBoxCommandProperties.CommandValueId = 'CommandValueId';
CUI.Controls.ColorPickerCommandProperties.Color = 'Color';
CUI.Controls.ColorPickerCommandProperties.Style = 'Style';
CUI.Controls.ColorPicker.$7 = -10;
CUI.Controls.ComboBoxCommandProperties.SelectedItemId = 'SelectedItemId';
CUI.Controls.ComboBoxCommandProperties.IsFreeForm = 'IsFreeForm';
CUI.Controls.ComboBoxCommandProperties.Value = 'Value';
CUI.Controls.DropDownCommandProperties.SelectedItemId = 'SelectedItemId';
CUI.Controls.DropDownCommandProperties.Value = 'Value';
CUI.Controls.FlyoutAnchorCommandProperties.LabelText = 'LabelText';
CUI.Controls.GalleryButtonCommandProperties.On = 'On';
CUI.Controls.GalleryButtonCommandProperties.CommandValueId = 'CommandValueId';
CUI.Controls.GalleryButtonCommandProperties.InnerHTML = 'InnerHTML';
CUI.Controls.InsertTableCommandProperties.Rows = 'Rows';
CUI.Controls.InsertTableCommandProperties.Columns = 'Columns';
CUI.Controls.LabelCommandProperties.Value = 'Value';
CUI.Controls.LabelCommandProperties.Image16by16Class = 'Image16by16Class';
CUI.Controls.SpinnerCommandProperties.AltDownArrow = 'AltDownArrow';
CUI.Controls.SpinnerCommandProperties.AltUpArrow = 'AltUpArrow';
CUI.Controls.SpinnerCommandProperties.ChangedByMouse = 'ChangedByMouse';
CUI.Controls.SpinnerCommandProperties.ChangeType = 'ChangeType';
CUI.Controls.SpinnerCommandProperties.Value = 'Value';
CUI.Controls.SpinnerCommandProperties.Unit = 'Unit';
CUI.Controls.SpinnerCommandProperties.Text = 'Text';
CUI.Controls.Spinner.$6x = -1;
CUI.Controls.SplitButtonCommandProperties.Image16by16Class = 'Image16by16Class';
CUI.Controls.SplitButtonCommandProperties.Image32by32Class = 'Image32by32Class';
CUI.Controls.SplitButtonCommandProperties.On = 'On';
CUI.Controls.TextBoxCommandProperties.Value = 'Value';
CUI.Controls.ToggleButtonCommandProperties.On = 'On';
CUI.Controls.ToggleButtonCommandProperties.CommandValueId = 'CommandValueId';
CUI.Page.PageManager._instance = null;
CUI.Page.UndoManager.$2B = -1;
Commands.CommandIds.ApplicationStateChanged = 'appstatechanged';
Commands.CommandIds.GlobalRedo = 'GlobalRedo';
Commands.CommandIds.Redo = 'Redo';
Commands.CommandIds.GlobalUndo = 'GlobalUndo';
Commands.CommandIds.Undo = 'Undo';
Commands.GlobalRedoProperties.SequenceNumber = 'SequenceNumber';
Commands.RedoProperties.SequenceNumber = 'SequenceNumber';
Commands.GlobalUndoProperties.SequenceNumber = 'SequenceNumber';
Commands.UndoProperties.SequenceNumber = 'SequenceNumber';
};
cui_initialize();

if (typeof(RegisterModuleInit) != 'undefined')
{
    RegisterModuleInit("cui"+".js", cui_initialize);
}

var g_cuiXMLDOMDocument = null;
var g_cuiXMLParser = null;

CUI.NativeUtility = function CUI_NativeUtility()
{};

CUI.NativeUtility.createXMLDocFromString = function (xml)
{ULSpEN:;
    return CUI.NativeUtility.createXMLDocFromStringCore(xml, false);
}

CUI.NativeUtility.createXMLDocFromStringCore = function (xml, newObj)
{ULSpEN:;
    function GetActiveXObject(progIDs)
    {ULSpEN:;
        for (var i = 0; i < progIDs.length; i++)
        {
            try
            {
                var xmlDoc = new ActiveXObject(progIDs[i]);
                return xmlDoc;
            }
            catch (ex)
            {

            }
        }
        return null;
    }

    if (window.ActiveXObject) 
    {
        var msxmlDomDoc = newObj ? null : g_cuiXMLDOMDocument;
        if (!msxmlDomDoc) {
            try
            {
                msxmlDomDoc = GetActiveXObject(['Msxml2.DOMDocument.6.0', 'Msxml2.DOMDocument']);
                if (!newObj) 
                    g_cuiXMLDOMDocument = msxmlDomDoc;
            }
            catch(e)
            {

            }
        }
        if(msxmlDomDoc != null)
            msxmlDomDoc.loadXML(xml);
        return msxmlDomDoc;
    }
    else if (DOMParser) 
    {
        var domParser = newObj ? null : g_cuiXMLParser;
        if (!domParser) {
            domParser = new DOMParser();
            if (!newObj) 
                g_cuiXMLParser = domParser;
        }
        return domParser.parseFromString(xml, "text/xml");
    }
    else if (window.XMLHttpRequest) 
    {

        var request = new XMLHttpRequest();

        request.open("GET", "data:text/xml;charset=utf-8," + xml, false);
        request.send(null);
        return request.responseXML();
    }

    return null;
}

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}

CUI.NativeUtility.setInnerText = function (elem, text)
{ULSpEN:;
    var doc = elem.ownerDocument;
    if (doc.createTextNode)
    {
        var textNode = doc.createTextNode(text);
        elem.innerHTML = '';
        elem.appendChild(textNode);        
    }
    else
    {
        elem.innerText = text;
    }
};

CUI.NativeUtility.ecmaScriptStringLiteralEncode = function (str)
{ULSpEN:;
    if(null == str || typeof(str) == 'undefined')
        return "";
    var strIn = new String(str);
    var strOut = new Array();
    var ix = 0;
    var max = strIn.length;

    for (ix = 0; ix < max; ix++)
    {
        var charCode = strIn.charCodeAt(ix);
        if (charCode > 0x0fff)
        {

            strOut.push("\\u" + charCode.toString(16).toUpperCase());
        }
        else if (charCode > 0x00ff)
        {

            strOut.push("\\u0" + charCode.toString(16).toUpperCase());
        }
        else if (charCode > 0x007f)
        {

            strOut.push("\\u00" + charCode.toString(16).toUpperCase());
        }
        else
        {
            var c = strIn.charAt(ix);
            switch (c)
            {
            case '\n':
                strOut.push("\\n");
                break;
            case '\r':
                strOut.push("\\r");
                break;
            case '\"':
                strOut.push("\\u0022");
                break;
            case '%':
                strOut.push("\\u0025");
                break;
            case '&':
                strOut.push("\\u0026");
                break;
            case '\'':
                strOut.push("\\u0027");
                break;
            case '(':
                strOut.push("\\u0028");
                break;
            case ')':
                strOut.push("\\u0029");
                break;
            case '+':
                strOut.push("\\u002b");
                break;
            case '/':
                strOut.push("\\u002f");
                break;
            case '<':
                strOut.push("\\u003c");
                break;
            case '>':
                strOut.push("\\u003e");
                break;
            case '\\':
                strOut.push("\\\\");
                break;
            default:
                strOut.push(c);
            };
        }
    }
    return strOut.join('');
};

CUI.NativeUtility.ffClick = function SP_Ribbon__nativeUtility$FFClick(elm) {ULSpEN:;
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); elm.dispatchEvent(evt);
};

CUI.NativeUtility.getAttribute = function SP_Ribbon__nativeUtility$GetAttribute(attributes, index) {ULSpEN:;
  return attributes[index];
};

CUI.NativeUtility.returnFalse = function SP_Ribbon__nativeUtility$ReturnFalse() {ULSpEN:;
  return false;
};

var g_records = new Array();
CUI.PMetrics = function(){};
CUI.PMetrics.perfMark = function(marker) {ULSpEN:;

    if(typeof msWriteProfilerMark !== 'undefined' && msWriteProfilerMark !== null)
    {
       window.msWriteProfilerMark("perfMark: " + marker);
    }

    var r = new Object();
    r.m = marker;
    r.mt = new Date();
    if(g_records) {
        if(g_records.length == 1000)
            g_records = new Array();
        g_records.push(r);
    }
}
CUI.PMetrics.perfReport = function(){ULSpEN:;
    if(!g_records)
        return;
    var l = g_records.length;
    if (l>0) {
        var _elmResults = document.getElementById("perf-markers");
        if (!_elmResults) {
            _elmResults = document.createElement('div');
            _elmResults.id = 'perf-markers';
            _elmResults.style.display = 'none';
        }
        var r;
        var rstr = "";
        for(i=0;i<l;i++) {
            r = g_records[i];
            if(r)
                rstr += '<p><span class=\'time\'>' + r.mt.format('MM/dd/yyyy HH:mm:ss.fffffff') + '</span>' + '<span class=\'marker\'>' + r.m + '</span>'+ '<var class=\'milliseconds\'>' + r.mt.getTime() + '</var></p>';
        }
        _elmResults.innerHTML += rstr;
        document.body.appendChild(_elmResults);
        g_records = new Array();
    }
}
CUI.PMetrics.perfClear = function(){ULSpEN:;
    g_records = new Array();
}

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
if (typeof(NotifyScriptLoadedAndExecuteWaitingJobs ) != "undefined")
    NotifyScriptLoadedAndExecuteWaitingJobs("CUI.js");
