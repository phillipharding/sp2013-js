// JScript File


Type.registerNamespace('Microsoft.SharePoint.Search.FacetedNavigation');

Microsoft.SharePoint.Search.FacetedNavigation.ManagedPropertyDescriptor = function Microsoft_SharePoint_Search_FacetedNavigation_ManagedPropertyDescriptor() {
}
Microsoft.SharePoint.Search.FacetedNavigation.ManagedPropertyDescriptor.hasValues = function Microsoft_SharePoint_Search_FacetedNavigation_ManagedPropertyDescriptor$hasValues(managedPropertyDescriptor) {
    return managedPropertyDescriptor.PropertyHitCount > 0;
}
Microsoft.SharePoint.Search.FacetedNavigation.ManagedPropertyDescriptor.prototype = {
    SchemaID: 0,
    ManagedDataType: null,
    FriendlyManagedDataType: null,
    PropertyName: null,
    Description: null,
    RefinementScore: 0,
    TotalHitCount: 0,
    PropertyHitCount: 0,
    Aliases: null
}


Microsoft.SharePoint.Search.FacetedNavigation.RefinementWebPartController = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementWebPartController(queryGroupId, contextDataProviderState, keywordQuery) {
    this.$$d_onRefinementWebPartRendered = Function.createDelegate(this, this.onRefinementWebPartRendered);
    var $v_0 = Srch.ScriptApplicationManager.get_current();
    var $v_1 = $v_0.queryGroups[queryGroupId];
    if ($v_1) {
        for (var $$arr_5 = $v_1.displays, $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
            var $v_3 = $$arr_5[$$idx_7];
            if (Srch.Refinement.isInstanceOfType($v_3)) {
                this.refinementWebPart = $v_3;
                break;
            }
        }
        var $v_2 = $v_1.dataProvider;
        if (contextDataProviderState) {
            $v_2.set_queryTemplate(contextDataProviderState.QueryTemplate);
            $v_2.set_properties(contextDataProviderState.Properties);
            $v_2.set_sourceID(contextDataProviderState.SourceId);
            $v_2.set_rankRules(contextDataProviderState.RankRules);
            $v_2.set_enableQueryRules(contextDataProviderState.EnableQueryRules);
            $v_2.set_clientType(contextDataProviderState.ClientType);
            $v_2.set_fallbackRankingModelID(contextDataProviderState.RankModelId);
            $v_2.set_collapseSpecification(contextDataProviderState.CollapseSpecification);
            $v_2.set_fallbackSort(contextDataProviderState.Sorts);
            $v_2.set_selectedProperties(contextDataProviderState.SelectedProperties);
            $v_2.set_hitHighlightedProperties(contextDataProviderState.HitHighlightedProperties);
            $v_2.set_bypassResultTypes(contextDataProviderState.BypassResultTypes);
            $v_2.set_enableInterleaving(contextDataProviderState.EnableInterleaving);
            $v_2.set_trimDuplicates(contextDataProviderState.TrimDuplicates);
            $v_2.set_availableSorts(contextDataProviderState.AvailableSorts);
            $v_2.set_fallbackSort(contextDataProviderState.FallbackSort);
            if (contextDataProviderState.InitialQueryState) {
                $v_2.set_initialQueryState(contextDataProviderState.InitialQueryState);
            }
        }
        if (!Srch.U.e(keywordQuery)) {
            $v_2.set_queryTemplate(keywordQuery);
        }
    }
    if (this.refinementWebPart) {
        this.refinementWebPart.add_resultRendered(this.$$d_onRefinementWebPartRendered);
    }
    else {
        Srch.U.trace(null, 'RefinementWebPartController', 'Failed to find a refinement web part in client controls');
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementWebPartController.$2D = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementWebPartController$$2D($p0) {
    var $v_0 = new Array(0);
    for (var $$arr_2 = $p0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        Srch.U.appendScriptsToLoad($v_0, $v_1.renderTemplateId);
    }
    Srch.U.loadScripts($v_0, Microsoft.SharePoint.Search.FacetedNavigation.RefinementWebPartController.$2F, Microsoft.SharePoint.Search.FacetedNavigation.RefinementWebPartController.$2E, -1);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementWebPartController.$2E = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementWebPartController$$2E($p0) {
    Srch.U.trace(null, 'RefinementConfigurationDialog', 'Rendering template scripts failed to load');
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementWebPartController.$2F = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementWebPartController$$2F($p0) {
    Srch.U.trace(null, 'RefinementConfigurationDialog', 'Rendering template scripts loaded successfully');
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementWebPartController.createRefinementControlsFromRefinementConfiguration = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementWebPartController$createRefinementControlsFromRefinementConfiguration(refinementConfiguration) {
    var $v_0 = new Array(refinementConfiguration.refinerConfigurations.length);
    for (var $v_1 = 0; $v_1 < refinementConfiguration.refinerConfigurations.length; $v_1++) {
        var $v_2 = refinementConfiguration.refinerConfigurations[$v_1];
        var $v_3 = new Srch.RefinementControl($v_2.propertyName, (!Srch.U.e($v_2.refinerSpecStringOverride)) ? $v_2.refinerSpecStringOverride : Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.generateRefinerSpecStringForObject($v_2), (!Srch.U.e($v_2.displayTemplate)) ? $v_2.displayTemplate : '4');
        $v_3.useDefaultDateIntervals = $v_2.useDefaultDateIntervals;
        $v_3.overrideDisplayName = $v_2.displayName;
        $v_0[$v_1] = $v_3;
    }
    return $v_0;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementWebPartController.prototype = {
    refinementWebPart: null,
    
    onRefinementWebPartRendered: function Microsoft_SharePoint_Search_FacetedNavigation_RefinementWebPartController$onRefinementWebPartRendered(sender, e) {
    },
    
    refresh: function Microsoft_SharePoint_Search_FacetedNavigation_RefinementWebPartController$refresh() {
        Srch.U.trace(null, 'RefinementWebPartController.Refresh', 'Enter');
        if (!this.refinementWebPart) {
            return;
        }
        var $v_0 = this.getRefinementControls();
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementWebPartController.$2D($v_0);
        var $v_1 = new Array($v_0.length);
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2];
            $v_1[$v_2] = $v_3.propertyName + $v_3.spec;
        }
        this.refinementWebPart.get_dataProvider().set_selectedRefiners($v_1);
        this.refinementWebPart.alternateRenderer = null;
        this.refinementWebPart.updateRefinementControls($v_0);
    }
}


Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopupDialogArgs = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementPreviewPopupDialogArgs(refinementConfiguration, query) {
    this.refinementConfiguration = refinementConfiguration;
    this.query = query;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopupDialogArgs.toJSON = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementPreviewPopupDialogArgs$toJSON(args) {
    return Sys.Serialization.JavaScriptSerializer.serialize(args);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopupDialogArgs.fromJSON = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementPreviewPopupDialogArgs$fromJSON(json) {
    return Sys.Serialization.JavaScriptSerializer.deserialize(json);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopupDialogArgs.prototype = {
    refinementConfiguration: null,
    query: null,
    contextDataProviderState: null
}


Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopup = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementPreviewPopup(args, queryGroupId) {
    this.$$d_$2J_1 = Function.createDelegate(this, this.$2J_1);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopup.initializeBase(this, [ queryGroupId, args.contextDataProviderState, args.query ]);
    $addHandler(document.documentElement, 'keyup', Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopup.$1P);
    this.$1u_1 = args.refinementConfiguration;
    $get('btnOK').focus();
    Srch.ScriptApplicationManager.get_current().add_postLoad(this.$$d_$2J_1);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopup.$1P = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementPreviewPopup$$1P($p0) {
    var $v_0 = 27;
    if ($p0.keyCode === $v_0) {
        SP.UI.ModalDialog.commonModalDialogClose(0, null);
        $p0.preventDefault();
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopup.show = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementPreviewPopup$show(refinementPreviewPopupDialogArgs) {
    var $v_0 = new SP.UI.DialogOptions();
    $v_0.autoSize = true;
    $v_0.title = Srch.U.loadResource('refconf_FNT_DCR_RefinementPreviewPopupTitle');
    $v_0.showClose = true;
    $v_0.url = SP.Utilities.Utility.getLayoutsPageUrl('refinementpreview.aspx');
    $v_0.args = Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopupDialogArgs.toJSON(refinementPreviewPopupDialogArgs);
    $v_0.delayAppearance = true;
    SP.UI.ModalDialog.showModalDialog($v_0);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopup.prototype = {
    $1u_1: null,
    $1f_1: false,
    $1e_1: false,
    
    $2J_1: function Microsoft_SharePoint_Search_FacetedNavigation_RefinementPreviewPopup$$2J_1($p0, $p1) {
        this.$1e_1 = true;
        this.refresh();
    },
    
    getRefinementControls: function Microsoft_SharePoint_Search_FacetedNavigation_RefinementPreviewPopup$getRefinementControls() {
        return Microsoft.SharePoint.Search.FacetedNavigation.RefinementWebPartController.createRefinementControlsFromRefinementConfiguration(this.$1u_1);
    },
    
    onRefinementWebPartRendered: function Microsoft_SharePoint_Search_FacetedNavigation_RefinementPreviewPopup$onRefinementWebPartRendered(sender, e) {
        Srch.U.trace(null, 'OnRefinementWebPartRendered', 'Enter');
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementWebPartController.prototype.onRefinementWebPartRendered.call(this, sender, e);
        if (!this.$1e_1) {
            return;
        }
        if (!this.$1f_1) {
            Srch.U.trace(null, 'OnRefinementWebPartRendered', 'MakeVisible');
            window.frameElement.makeVisible(null);
            this.$1f_1 = true;
        }
        Srch.U.trace(null, 'OnRefinementWebPartRendered', 'Leave');
    }
}


Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog() {
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$18 = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$18($p0) {
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$W[$p0.propertyName] = $p0;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2I = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$2I($p0) {
    var $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$s($p0);
    delete Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$W[$p0];
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$s = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$s($p0) {
    return Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$W[$p0];
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.initialize = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$initialize(okButtonClientID, jsonAvailableProperties, jsonRefinementConfiguration) {
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$W = {};
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$P = {};
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1 = $get('lbAvailableRefiners');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0 = $get('lbSelectedRefiners');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$I = $get('btnAddRefiner');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$J = $get('btnRemoveRefiner');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$M = $get('btnMoveUpRefiner');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$L = $get('btnMoveDownRefiner');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$b = $get('btnPreviewRefiners');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$12 = $get('panelConfigurationTextRefiner');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$11 = $get('panelConfigurationNumericRefiner');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$z = $get('panelConfigurationDateRefiner');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$k = $get('panelConfigurationUnsupported');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$V = $get('panelConfigurationAvailable');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$10 = $get('panelConfigurationNoSelection');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$D = $get('ddlSortBySelector');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$E = $get('ddlSortDirectionSelector');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$B = $get('txtMaxNumRefinementOptions');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$A = $get('chkOverrideRefinerSpecString');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$C = $get('txtRefinerSpecString');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$K = $get('rdbNumberUseSearchSchema');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$8 = $get('rdbNumberUseFixedIntervals');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$5 = $get('txtNumericCustomIntervals');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$i = $get('lblNumericCustomIntervalsPreviewError');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$G = $get('rdbDateUseDefaultFixedIntervals');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$X = $get('rdbDateUseSearchSchema');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$h = $get('lblErrorSlidersForNumbersRequireFixedIntervals');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$u = $get('lblErrorSlidersForDatesRequireFixedIntervals');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1J = $get('labelPropsForRefinerValue');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1K = $get('labelTypeValue');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4 = $get('txtDisplayTemplatePath');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$14 = $get('spanMaxNumRefinementOptionsInvalid');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3 = $get('ddlDisplayTemplateSelector');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$N = $get('chkShowOnlyWithValues');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$f = $get('divSampleValuesPlaceholder');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$g = $get('divSampleValuesTitle');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$v = $get('linkShowMoreValues');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$H = $get('txtDisplayName');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1F = $get('divShowOnlyWithValues');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1C = $get('divDisplayTemplateConfiguration');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1A = $get('divCaptionResultsWithValues');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$r = $get('divCaptionTotalResults');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$T = $get('divSampleValuesContainer');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$d = $get('divResultsValues');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1B = $get('divDisplayName');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1E = $get('divShowMoreValuesPopup');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1D = $get('divInvalidRefinerError');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$e = $get('divSampleValuesLoading');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$U = $get('labelAliases');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1L = $get('litSelectedRefiners');
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1U = $get(okButtonClientID);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Z = [ Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$V, Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$10, Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$11, Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$z, Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$12, Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$k ];
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$a = new Array(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.options.length);
    for (var $v_1 = 0; $v_1 < Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.options.length; $v_1++) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$a[$v_1] = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.options[$v_1].cloneNode(true);
    }
    var $v_0 = null;
    if (!Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$7(jsonRefinementConfiguration)) {
        var $v_2 = null;
        try {
            $v_2 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialogArgs.fromJSON(jsonRefinementConfiguration);
        }
        catch ($v_3) {
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$O(Srch.U.loadResource('refconf_Error_FailedToRestoreConfiguration'), true);
        }
        if ($v_2) {
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$17 = $v_2.termId;
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$q = $v_2.contextDataProviderState;
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$13 = new Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.PropertyValuesDisplayHelper(15, Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$q);
            $v_0 = (!$v_2.refinementConfiguration) ? null : $v_2.refinementConfiguration.refinerConfigurations;
            if ($v_2.error) {
                Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$O($v_2.error, true);
            }
        }
    }
    Srch.U.includeLanguageScript(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1G, Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1Y);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2B(jsonAvailableProperties);
    if ($v_0) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2C($v_0);
    }
    if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.get_$t()) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1Q(null);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1B, false);
    }
    else {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$N.checked = false;
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1F, false);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$d, false);
    }
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1T();
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$I, 'click', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1N);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$J, 'click', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1O);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$M, 'click', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1m);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$L, 'click', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1l);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$b, 'click', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1n);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1, 'change', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onAvailableRefinersChange);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1, 'click', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onAvailableRefinersChange);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0, 'change', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onSelectedRefinersChange);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0, 'click', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onSelectedRefinersChange);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$D, 'change', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1s);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$E, 'change', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1t);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3, 'change', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1o);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$B, 'blur', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onMaxNumRefinementOptionsBlur);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$C, 'blur', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1r);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$5, 'blur', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1p);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$8, 'change', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$y);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$K, 'change', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$y);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$G, 'change', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$x);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$X, 'change', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$x);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$H, 'blur', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onDisplayNameBlur);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4, 'blur', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onDisplayTemplatePathBlur);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$A, 'click', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1q);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$N, 'click', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1Q);
    $addHandler(document.documentElement, 'keyup', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1P);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1, 'dblclick', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onAvailableRefinersDoubleClick);
    $addHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0, 'dblclick', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onSelectedRefinersDoubleClick);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.uninitialize = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$uninitialize() {
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$I, 'click', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1N);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$J, 'click', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1O);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$M, 'click', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1m);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$L, 'click', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1l);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$b, 'click', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1n);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1, 'change', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onAvailableRefinersChange);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1, 'click', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onAvailableRefinersChange);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0, 'change', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onSelectedRefinersChange);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0, 'click', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onSelectedRefinersChange);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$D, 'change', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1s);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$E, 'change', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1t);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3, 'change', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1o);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$B, 'blur', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onMaxNumRefinementOptionsBlur);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$C, 'blur', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1r);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$5, 'blur', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1p);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$8, 'change', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$y);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$K, 'change', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$y);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$G, 'change', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$x);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$X, 'change', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$x);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$H, 'blur', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onDisplayNameBlur);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4, 'blur', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onDisplayTemplatePathBlur);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$A, 'click', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1q);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$N, 'click', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1Q);
    $removeHandler(document.documentElement, 'keyup', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1P);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1, 'dblclick', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onAvailableRefinersDoubleClick);
    $removeHandler(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0, 'dblclick', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onSelectedRefinersDoubleClick);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$29 = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$29($p0) {
    return Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1h.test($p0) && parseInt($p0) > 0;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onDisplayNameBlur = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$onDisplayNameBlur(e) {
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$9();
    if (e) {
        e.preventDefault();
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onDisplayTemplatePathBlur = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$onDisplayTemplatePathBlur(e) {
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$9();
    if (e) {
        e.preventDefault();
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onMaxNumRefinementOptionsBlur = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$onMaxNumRefinementOptionsBlur(e) {
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$9();
    if (e) {
        e.preventDefault();
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.getManagedPropertyDescriptor = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$getManagedPropertyDescriptor(propertyName) {
    return Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$P[propertyName];
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1r = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1r($p0) {
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$9();
    $p0.preventDefault();
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1p = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1p($p0) {
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$9();
    $p0.preventDefault();
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1P = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1P($p0) {
    if ($p0.keyCode === 27) {
        SP.UI.ModalDialog.commonModalDialogClose(0, null);
        $p0.preventDefault();
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.getNumberIntervalsFromSpecString = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$getNumberIntervalsFromSpecString(refinerSpecIntervalsString) {
    var $v_0 = '';
    if (!Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$7(refinerSpecIntervalsString) && refinerSpecIntervalsString.startsWith(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1M)) {
        $v_0 = refinerSpecIntervalsString.replace(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1M, '');
        $v_0 = $v_0.replace(new RegExp(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1i, 'g'), Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.numberIntervalUISeparator + ' ');
        $v_0 = $v_0.replace(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1j, '');
    }
    return $v_0;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$9 = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$9() {
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$o(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$14, false);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$i, false);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$h, false);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$u, false);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$m = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$m() {
    if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$F < 0) {
        return true;
    }
    var $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$s(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$6);
    var $v_1 = !$v_0.type || Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$24($v_0.type);
    var $$t_2;
    ($$t_2 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$J).disabled = !!($$t_2.disabled & $v_1);
    var $$t_3;
    ($$t_3 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$M).disabled = !!($$t_3.disabled | !$v_1);
    var $$t_4;
    ($$t_4 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$L).disabled = !!($$t_4.disabled | !$v_1);
    var $$t_5;
    ($$t_5 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$I).disabled = !!($$t_5.disabled | !$v_1);
    if ($v_1) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1z();
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$9();
    }
    return $v_1;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$24 = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$24($p0) {
    var $v_0 = (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4.value === Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1y || Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4.value === Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1x || Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4.value === Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1g);
    switch ($p0) {
        case Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeText:
            var $v_1 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$7(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$B.value) || Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$29(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$B.value);
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$o(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$14, !$v_1);
            return $v_1;
        case Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeDecimal:
        case Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeInteger:
        case Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeDouble:
            if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$8.checked) {
                var $v_2 = Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.isValidNumberIntervalsString(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$5.value);
                Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$i, !$v_2);
                Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$h, false);
                return $v_2;
            }
            else if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$K.checked) {
                Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$i, false);
                Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$h, $v_0);
                return !$v_0;
            }
            else {
                return true;
            }
        case Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeDateTime:
            var $v_3 = !$v_0 || Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$G.checked;
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$u, !$v_3);
            return $v_3;
        default:
            return true;
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1q = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1q($p0) {
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$C.disabled = !Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$A.checked;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1Q = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1Q($p0) {
    var $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1.selectedIndex;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.filterAvailableProperties(function($p1_0) {
        return (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$N.checked) ? Microsoft.SharePoint.Search.FacetedNavigation.ManagedPropertyDescriptor.hasValues($p1_0) : true;
    });
    if ($v_0 >= 0 && Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1.selectedIndex < 0) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1T();
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$y = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$y($p0) {
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$9();
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$5.disabled = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$K.checked;
    if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$8.checked) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$5.focus();
    }
    $p0.preventDefault();
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$x = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$x($p0) {
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$9();
    $p0.preventDefault();
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onEvent = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$onEvent() {
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1z();
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1t = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1t($p0) {
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$9();
    $p0.preventDefault();
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1s = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1s($p0) {
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$9();
    $p0.preventDefault();
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1o = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1o($p0) {
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4.disabled = true;
    if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4.disabled) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4.value = (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.options[Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.selectedIndex]).value;
    }
    else {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4.value = '';
    }
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$9();
    $p0.preventDefault();
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onSelectedRefinersChange = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$onSelectedRefinersChange(e) {
    Srch.U.trace(null, 'OnSelectedRefinersChange', 'Enter');
    if (e) {
        e.preventDefault();
    }
    if (!Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$m()) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.selectedIndex = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$F;
        Srch.U.trace(null, 'OnSelectedRefinersChange', 'Failed validation, restored selected index, leaving');
        return;
    }
    if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.selectedIndex >= 0) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1.selectedIndex = -1;
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.updateConfigurationControls();
    }
    Srch.U.trace(null, 'OnSelectedRefinersChange', 'Leave');
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onAvailableRefinersChange = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$onAvailableRefinersChange(e) {
    Srch.U.trace(null, 'OnAvailableRefinersChange', 'Enter');
    if (e) {
        e.preventDefault();
    }
    if (!Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$m()) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.selectedIndex = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$F;
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1.selectedIndex = -1;
        Srch.U.trace(null, 'OnAvailableRefinersChange', 'Failed validation, restored selected index, leaving');
        return;
    }
    if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1.selectedIndex >= 0) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.selectedIndex = -1;
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.updateConfigurationControls();
    }
    Srch.U.trace(null, 'OnAvailableRefinersChange', 'Leave');
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onAvailableRefinersDoubleClick = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$onAvailableRefinersDoubleClick(e) {
    Srch.U.trace(null, 'OnAvailableRefinersDoubleClick', 'Enter');
    if (e) {
        e.preventDefault();
    }
    if (!Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$I.disabled) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1N(e);
    }
    else {
        Srch.U.trace(null, 'OnAvailableRefinersDoubleClick', 'Ignoring, since Add button is disabled');
    }
    Srch.U.trace(null, 'OnAvailableRefinersDoubleClick', 'Leave');
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.onSelectedRefinersDoubleClick = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$onSelectedRefinersDoubleClick(e) {
    Srch.U.trace(null, 'OnSelectedRefinersDoubleClick', 'Enter');
    if (e) {
        e.preventDefault();
    }
    if (!Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$m()) {
        Srch.U.trace(null, 'OnSelectedRefinersDoubleClick', 'Failed validation, leaving');
        return;
    }
    if (!Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$J.disabled) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1O(e);
    }
    else {
        Srch.U.trace(null, 'OnSelectedRefinersDoubleClick', 'Ignoring, since Remove button is disabled');
    }
    Srch.U.trace(null, 'OnSelectedRefinersDoubleClick', 'Leave');
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1l = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1l($p0) {
    var $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.selectedIndex;
    var $v_1 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.options[$v_0];
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$l(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0, $v_0);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1d(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0, $v_1, $v_0 + 1);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Q(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0, $v_0 + 1);
    $p0.preventDefault();
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1m = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1m($p0) {
    var $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.selectedIndex;
    var $v_1 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.options[$v_0 - 1];
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$l(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0, $v_0 - 1);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1d(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0, $v_1, $v_0);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Q(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0, $v_0 - 1);
    $p0.preventDefault();
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1w = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1w($p0) {
    var $v_0 = $p0.scrollTop;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$l($p0, $p0.selectedIndex);
    $p0.scrollTop = $v_0;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1a = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1a($p0, $p1) {
    for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
        var $v_1 = $p0[$v_0].managedPropertyDescriptor;
        if ($v_1 === $p1) {
            return $p0[$v_0];
        }
    }
    return null;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1b = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1b($p0) {
    var $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1a(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$S, $p0);
    return $v_0 || Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1a(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$R, $p0);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1O = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1O($p0) {
    $p0.preventDefault();
    var $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.selectedIndex;
    if ($v_0 < 0) {
        Srch.U.trace(null, 'OnBtnRemoveRefinerClick', 'Ignoring OnBtnRemoveRefinerClick, as the list has no selection');
        return;
    }
    var $v_1 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.options[$v_0];
    var $v_2 = $v_1.value;
    var $v_3 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$c($v_1.text, $v_1.value, $v_1.title);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1w(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2I($v_2);
    var $v_4;
    var $v_5;
    var $v_6 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$P[$v_2];
    if (!$v_6) {
        Srch.U.trace(null, 'RefinementConfigDialog - OnBtnRemoveClick', 'Removing invalid refiner - property descriptor not found');
    }
    if ($v_6 && (Microsoft.SharePoint.Search.FacetedNavigation.ManagedPropertyDescriptor.hasValues($v_6) || !Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$N.checked)) {
        var $v_7 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1b($v_6);
        var $v_8 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1b($v_6);
        var $$t_E, $$t_F;
        do {
            $v_8 = $v_8.nextPropertyDescriptor;
        } while ($v_8 && !(($$t_F = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.findOptionByValue(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1, $v_8.managedPropertyDescriptor.PropertyName, ($$t_E = {'val': $v_5}))), $v_5 = $$t_E.val, $$t_F));
        var $v_9 = $v_7.parentElement;
        if (!$v_8) {
            $v_9.appendChild($v_3);
        }
        else {
            var $$t_G, $$t_H;
            var $v_C = (($$t_H = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.findOptionByValue(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1, $v_8.managedPropertyDescriptor.PropertyName, ($$t_G = {'val': $v_4}))), $v_4 = $$t_G.val, $$t_H);
            $v_C.parentNode.insertBefore($v_3, $v_C);
        }
        var $v_A;
        var $$t_I, $$t_J;
        var $v_B = (($$t_J = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.findOptionByValue(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1, $v_2, ($$t_I = {'val': $v_A}))), $v_A = $$t_I.val, $$t_J);
        if ($v_0 < Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.options.length) {
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Q(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0, $v_0);
        }
        else {
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Q(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1, $v_A);
        }
    }
    else {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1T();
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1H = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1H($p0) {
    var $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.getManagedPropertyDescriptor($p0);
    if (!$v_0) {
        return null;
    }
    var $v_1 = Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.getAliasesString($v_0.Aliases);
    if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$7($v_1)) {
        return String.format(Srch.U.loadResource('refconf_DCR_RefinementConfigurationDialogManagedPropertyTooltipNoAliases'), $p0);
    }
    else {
        return String.format(Srch.U.loadResource('refconf_DCR_RefinementConfigurationDialogManagedPropertyTooltip'), $p0, $v_1);
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$c = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$c($p0, $p1, $p2) {
    var $v_0 = document.createElement('option');
    $v_0.text = $p0;
    $v_0.value = $p1;
    $v_0.title = $p2;
    $v_0.innerHTML = SP.Utilities.HttpUtility.htmlEncode($p1);
    return $v_0;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$7 = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$7($p0) {
    return SP.ScriptUtility.isNullOrEmptyString($p0);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1X = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1X($p0) {
    var $v_0 = new Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration($p0);
    var $v_1 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$P[$p0];
    if ($v_1) {
        $v_0.type = $v_1.ManagedDataType;
    }
    else {
        var $v_2 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$s($p0);
        if ($v_2) {
            $v_0.type = $v_2.type;
        }
    }
    $v_0.sortOrder = 0;
    $v_0.displayTemplate = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1G;
    return $v_0;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1N = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1N($p0) {
    $p0.preventDefault();
    var $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1.selectedIndex;
    if ($v_0 < 0) {
        Srch.U.trace(null, 'OnBtnAddRefinerClick', 'Ignoring OnBtnAddRefinerClick, as the list has no selection');
        return;
    }
    var $v_1 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1.options[$v_0];
    var $v_2 = $v_1.value;
    var $v_3 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$c($v_1.text, $v_1.value, $v_1.title);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$n(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0, $v_3);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1w(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$18(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1X($v_2));
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Q(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0, Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.options.length - 1);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Q = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$Q($p0, $p1) {
    $p0.selectedIndex = $p1;
    $p0.focus();
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.updateConfigurationControls();
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2 = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$2($p0, $p1) {
    $p0.style.display = ($p1) ? '' : 'none';
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$o = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$o($p0, $p1) {
    $p0.style.visibility = ($p1) ? 'visible' : 'hidden';
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Y = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$Y($p0) {
    var $v_0 = Array.indexOf(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Z, $p0);
    for (var $v_1 = 0; $v_1 < Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Z.length; $v_1++) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Z[$v_1], $v_1 === $v_0);
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1z = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1z() {
    var $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.defaultSortBy;
    if (!Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$D.disabled && Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$D.selectedIndex >= 0) {
        $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$D.selectedIndex;
    }
    var $v_1 = Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.defaultSortOrder;
    if (!Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$E.disabled && Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$E.selectedIndex >= 0) {
        $v_1 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$E.selectedIndex;
    }
    var $v_2 = null;
    if (!Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.disabled && Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.selectedIndex >= 0) {
        $v_2 = (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.options[Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.selectedIndex]).value;
    }
    else if (!Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4.disabled && !Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$7(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4.value)) {
        $v_2 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4.value;
    }
    var $v_3 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$H.value;
    var $v_4 = Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.defaulT_MAX_NUM_REFINEMENT_OPTIONS;
    try {
        $v_4 = parseInt(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$B.value);
    }
    catch ($$e_5) {
    }
    if (!isFinite($v_4)) {
        $v_4 = Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.defaulT_MAX_NUM_REFINEMENT_OPTIONS;
    }
    var $v_5 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1X(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$6);
    $v_5.sortBy = $v_0;
    $v_5.sortOrder = $v_1;
    $v_5.maxNumberRefinementOptions = $v_4;
    $v_5.displayTemplate = $v_2;
    $v_5.displayName = $v_3;
    if ($v_5.type === Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeDateTime) {
        $v_5.useDefaultDateIntervals = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$G.checked;
    }
    else {
        $v_5.useDefaultDateIntervals = false;
    }
    if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$8.checked && !Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$7(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$5.value)) {
        $v_5.intervals = Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.getBoundariesFromNumberIntervalsString(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$5.value);
    }
    if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$A.checked) {
        $v_5.refinerSpecStringOverride = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$C.value;
    }
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$18($v_5);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$27 = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$27($p0) {
    var $v_0 = Srch.Refinement.getRefinementLocalizedTitle($p0);
    if (!Srch.U.w($v_0)) {
        return String.format(Srch.U.loadResource('refconf_FNT_DCR_PropertiesForFriendly'), $p0, $v_0);
    }
    else {
        return String.format(Srch.U.loadResource('refconf_FNT_DCR_PropertiesFor'), $p0);
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.updateConfigurationControls = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$updateConfigurationControls() {
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2K();
    if (!Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$6) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$I.disabled = true;
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$J.disabled = true;
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$L.disabled = true;
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$M.disabled = true;
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Y(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$10);
        return;
    }
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1J.innerHTML = SP.Utilities.HttpUtility.htmlEncode(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$27(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$6));
    if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$13) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$13.notifyCurrentPropertyChanged();
    }
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$b.disabled = !Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.options.length;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$F = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.selectedIndex;
    var $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$F >= 0;
    var $v_1 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$W[Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$6];
    var $v_2 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$P[Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$6];
    var $v_3;
    if ($v_2) {
        $v_3 = $v_2.ManagedDataType;
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1A.innerHTML = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$28($v_2);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$r.innerHTML = String.format(Srch.U.loadResource('refconf_TotalResults'), $v_2.TotalHitCount);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$r.title = Srch.U.loadResource('refconf_FNT_DCR_TotalResultsTooltip');
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$d, Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.get_$t());
        var $v_4 = Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.getAliasesString($v_2.Aliases);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$U.innerHTML = $v_4;
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$U.title = $v_4;
    }
    else {
        $v_3 = ($v_1) ? $v_1.type : '';
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$d, false);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$U.innerHTML = '';
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$U.title = '';
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Y(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$k);
    }
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1K.innerHTML = (!$v_2) ? '' : $v_2.FriendlyManagedDataType;
    switch ($v_3) {
        case Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeText:
        case Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeYesNo:
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Y(($v_0) ? Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$12 : Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$V);
            break;
        case Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeDateTime:
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Y(($v_0) ? Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$z : Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$V);
            break;
        case Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeDecimal:
        case Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeInteger:
        case Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeDouble:
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Y(($v_0) ? Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$11 : Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$V);
            break;
        default:
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Y(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$k);
            break;
    }
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1D, !$v_2);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1C, $v_0);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.disabled = !$v_0;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$H.disabled = !$v_0;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$D.disabled = !$v_0;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$E.disabled = !$v_0;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$B.disabled = !$v_0;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$C.disabled = !$v_0;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$A.disabled = !$v_0;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$5.disabled = !$v_0;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$G.disabled = !$v_0;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$X.disabled = !$v_0;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$8.disabled = !$v_0;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$K.disabled = !$v_0;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$I.disabled = $v_0 || Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.options.length >= Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$j;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$J.disabled = !$v_0;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$M.disabled = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$F <= 0;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$L.disabled = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$F < 0 || Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$F === Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.options.length - 1;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$9();
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$21();
    if ($v_1) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$26($v_1.type);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$D.selectedIndex = Math.max($v_1.sortBy, 0);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$E.selectedIndex = Math.max($v_1.sortOrder, 0);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$G.checked = $v_1.useDefaultDateIntervals;
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$X.checked = !Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$G.checked;
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$8.checked = !!$v_1.intervals && $v_1.intervals.length > 0;
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$K.checked = !Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$8.checked;
        if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$8.checked) {
            var $v_7 = Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.getNumberIntervalStringFrom($v_1);
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$5.value = $v_7;
        }
        else {
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$5.value = '';
        }
        if (!Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$7($v_1.displayName)) {
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$H.value = $v_1.displayName;
        }
        else {
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$H.value = '';
        }
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$C.value = Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.generateRefinerSpecStringForObject($v_1);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$A.checked = !Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$7($v_1.refinerSpecStringOverride);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$B.value = $v_1.maxNumberRefinementOptions.toString();
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4.value = '';
        var $v_5;
        var $v_6 = $v_1.displayTemplate;
        if (!Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$7($v_6)) {
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4.value = SP.Utilities.HttpUtility.htmlEncode($v_6);
            var $$t_8, $$t_9;
            if ((($$t_9 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.findOptionByValue(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3, $v_6, ($$t_8 = {'val': $v_5}))), $v_5 = $$t_8.val, $$t_9)) {
                Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.selectedIndex = $v_5;
            }
            else {
                Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.selectedIndex = 0;
            }
        }
        else {
            if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.options.length > 0) {
                Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.selectedIndex = 0;
                Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4.value = (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.options[0]).value;
            }
        }
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4.disabled = true;
    }
    else {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$A.checked = false;
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$C.value = '';
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$5.value = '';
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$B.value = '';
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$H.value = '';
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4.value = '';
        if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.options.length > 1) {
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.selectedIndex = 1;
        }
    }
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$C.disabled = !Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$A.checked;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$5.disabled = !Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$8.checked;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$26 = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$26($p0) {
    while (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.options.length > 0) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3.remove(0);
    }
    for (var $v_0 = 0; $v_0 < Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$a.length; $v_0++) {
        var $v_1 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$a[$v_0];
        var $v_2 = $v_1.getAttribute('compatiblesearchdatatypes');
        var $v_3 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$7($v_2) || !$p0 || $v_2.indexOf($p0) >= 0;
        if ($v_3) {
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$n(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3, $v_1.cloneNode(true));
        }
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$21 = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$21() {
    if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$16) {
        SP.UI.Status.removeStatus(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$16);
    }
    if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$15) {
        SP.UI.Status.removeStatus(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$15);
    }
    if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.options.length >= Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$j) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$15 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$O(String.format(Srch.U.loadResource('refconf_DCR_RefinementConfigurationDialog_TooManyRefiners_Error'), Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$j), true);
    }
    else if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.options.length >= Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$w) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$16 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$O(String.format(Srch.U.loadResource('refconf_DCR_RefinementConfigurationDialog_TooManyRefiners_Warning'), Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$w), false);
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$O = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$O($p0, $p1) {
    var $v_0 = SP.UI.Status.addStatus('', $p0, false);
    SP.UI.Status.setStatusPriColor($v_0, ($p1) ? 'red' : 'yellow');
    return $v_0;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.get_$t = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$get_$t() {
    return !Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$7(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$17);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$28 = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$28($p0) {
    var $v_0 = ($p0.TotalHitCount > 0) ? ($p0.PropertyHitCount / $p0.TotalHitCount) * 100 : 0;
    return String.format(Srch.U.loadResource('refconf_ResultsWithValues'), $p0.PropertyHitCount, $v_0.toFixed(0));
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2K = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$2K() {
    var $v_0;
    if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.selectedIndex >= 0) {
        $v_0 = (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.options[Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.selectedIndex]);
    }
    else if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1.selectedIndex >= 0) {
        $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1.options[Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1.selectedIndex];
    }
    else {
        $v_0 = null;
    }
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$6 = (!$v_0) ? null : $v_0.value;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1Z = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1Z($p0, $p1) {
    var $v_0 = [];
    for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        var $v_2 = $p0[$v_1];
        var $v_3;
        var $v_4 = $v_2.managedPropertyDescriptor.PropertyName;
        var $$t_A, $$t_B;
        var $v_5 = (($$t_B = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.findOptionByValue(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1, $v_4, ($$t_A = {'val': $v_3}))), $v_3 = $$t_A.val, $$t_B);
        if (!$p1($v_2.managedPropertyDescriptor)) {
            if ($v_3 >= 0) {
                Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$l(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1, $v_3);
            }
        }
        else {
            if ($v_3 >= 0) {
                var $v_6 = $v_2.parentElement;
                Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1W($v_6, $v_0, $v_5);
            }
            else {
                var $v_7;
                var $$t_C, $$t_D;
                if (!(($$t_D = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.findOptionByValue(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0, $v_4, ($$t_C = {'val': $v_7}))), $v_7 = $$t_C.val, $$t_D)) {
                    $v_0.push(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$c($v_4, $v_4, Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1H($v_4)));
                }
            }
        }
    }
    if ($p0.length > 0 && $v_0.length > 0) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1W($p0[0].parentElement, $v_0, null);
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1W = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1W($p0, $p1, $p2) {
    var $v_0 = $p2;
    while ($p1.length > 0) {
        var $v_1 = $p1.pop();
        $p0.insertBefore($v_1, $v_0);
        $v_0 = $v_1;
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.filterAvailableProperties = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$filterAvailableProperties(filter) {
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1Z(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$S, filter);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1Z(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$R, filter);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$19 = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$19($p0, $p1) {
    var $v_0 = document.createElement('optgroup');
    $v_0.setAttribute('label', $p1);
    $p0.appendChild($v_0);
    return $v_0;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2B = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$2B($p0) {
    var $v_0 = [];
    var $v_1 = Sys.Serialization.JavaScriptSerializer.deserialize($p0);
    if ($v_1.QueryingForRefinablePropertiesErrorMessage) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$O($v_1.QueryingForRefinablePropertiesErrorMessage, $v_1.IsQueryingForRefinablePropertiesErrorSevere);
    }
    var $v_2 = false;
    for (var $$arr_4 = $v_1.PropertyDescriptors, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
        var $v_3 = $$arr_4[$$idx_6];
        $v_2 = !!($v_2 | $v_3.PropertyHitCount > 0);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$P[$v_3.PropertyName] = $v_3;
        Array.add($v_0, new Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.LinkedManagedPropertyDescriptor($v_3));
    }
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$S = new Array(0);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$R = new Array(0);
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$w = $v_1.MaxNumRefinersLimitWarning;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$j = $v_1.MaxNumRefinersLimitError;
    if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.get_$t()) {
        $v_0.sort(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$22);
        var $v_4 = [];
        var $v_5 = 5;
        var $v_6 = 0;
        while ($v_0.length > 0 && $v_6 <= $v_5 && ($v_0[0]).managedPropertyDescriptor.RefinementScore > 0) {
            Array.add($v_4, $v_0[0]);
            Array.removeAt($v_0, 0);
            $v_6++;
        }
        $v_0.sort(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1V);
        var $v_7 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$19(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1, Srch.U.loadResource('refconf_Section_SuggestedRefiners'));
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$19(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1, Srch.U.loadResource('refconf_Section_Separator'));
        var $v_8 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$19(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1, Srch.U.loadResource('refconf_Section_OtherRefiners'));
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1S($v_4, $v_7);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1S($v_0, $v_8);
        Array.addRange(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$S, $v_4);
        Array.addRange(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$R, $v_0);
        if (!Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$S.length && !$v_1.QueryingForRefinablePropertiesErrorMessage && !$v_2) {
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$O(Srch.U.loadResource('refconf_DCR_RefinementConfigurationDialog_NoSuggestedRefiners_Warning'), false);
        }
    }
    else {
        $v_0.sort(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1V);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1S($v_0, Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1);
        Array.addRange(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$R, $v_0);
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1S = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1S($p0, $p1) {
    var $v_0 = null;
    for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        var $v_2 = $p0[$v_1];
        var $v_3 = $v_2.managedPropertyDescriptor.PropertyName;
        var $v_4 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$c($v_3, $v_3, Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1H($v_3));
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$n($p1, $v_4);
        $v_2.parentElement = $p1;
        if ($v_0) {
            $v_0.nextPropertyDescriptor = $v_2;
        }
        $v_0 = $v_2;
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$22 = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$22($p0, $p1) {
    var $v_0 = $p0, $v_1 = $p1;
    if ($v_0.managedPropertyDescriptor.RefinementScore > $v_1.managedPropertyDescriptor.RefinementScore) {
        return -1;
    }
    else if ($v_0.managedPropertyDescriptor.RefinementScore === $v_1.managedPropertyDescriptor.RefinementScore) {
        return 0;
    }
    else {
        return 1;
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1V = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1V($p0, $p1) {
    var $v_0 = $p0, $v_1 = $p1;
    return $v_0.managedPropertyDescriptor.PropertyName.toLocaleUpperCase().localeCompare($v_1.managedPropertyDescriptor.PropertyName.toLocaleUpperCase());
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2C = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$2C($p0) {
    for (var $$arr_1 = $p0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
        var $v_0 = $$arr_1[$$idx_3];
        var $v_1 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$c($v_0.propertyName, $v_0.propertyName, Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1H($v_0.propertyName));
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$n(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0, $v_1);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$18($v_0);
        var $v_2;
        var $$t_8, $$t_9;
        var $v_3 = (($$t_9 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.findOptionByValue(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1, $v_1.value, ($$t_8 = {'val': $v_2}))), $v_2 = $$t_8.val, $$t_9);
        if ($v_3) {
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$l(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1, $v_2);
        }
        else {
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$O(String.format(Srch.U.loadResource('refconf_DCR_RefinementConfigurationDialog_InvalidSelectedRefiner_Warning'), $v_0.propertyName, Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1L.innerHTML), false);
        }
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1T = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1T() {
    if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.options.length > 0) {
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Q(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0, 0);
    }
    else {
        if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1.options.length > 0) {
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Q(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1, 0);
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1.scrollTop = 0;
        }
        else {
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1.focus();
            Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.updateConfigurationControls();
        }
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.findOptionByValue = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$findOptionByValue(selectElement, valueToFind, index) {
    for (var $v_0 = 0; $v_0 < selectElement.options.length; $v_0++) {
        var $v_1 = selectElement.options[$v_0];
        if ($v_1.value === valueToFind) {
            index.val = $v_0;
            return $v_1;
        }
    }
    index.val = -1;
    return null;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.getRefinementConfiguration = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$getRefinementConfiguration() {
    var $v_0 = [];
    for (var $v_1 = 0; $v_1 < Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.options.length; $v_1++) {
        var $v_2 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0.options[$v_1];
        var $v_3 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$s($v_2.value);
        if ($v_3) {
            var $v_4 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.getManagedPropertyDescriptor($v_3.propertyName);
            if ($v_4) {
                $v_3.aliases = $v_4.Aliases;
            }
            else {
                Srch.U.traceFormatted(null, 'GetRefinementConfiguration', 'No descriptor for property {0}', $v_3.propertyName);
            }
            Array.add($v_0, $v_3);
        }
        else {
        }
    }
    return new Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration($v_0);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1d = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1d($p0, $p1, $p2) {
    if ($p2 === $p0.options.length) {
        $p0.appendChild($p1);
    }
    else {
        $p0.insertBefore($p1, $p0.options[$p2]);
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$n = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$n($p0, $p1) {
    $p0.appendChild($p1);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$l = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$l($p0, $p1) {
    var $v_0 = $p0.getElementsByTagName('option');
    var $v_1 = $v_0[$p1];
    $v_1.parentNode.removeChild($v_1);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.showMoreSampleValues = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$showMoreSampleValues() {
    if (!Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$6 || !Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.getManagedPropertyDescriptor(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$6)) {
        return;
    }
    var $v_0 = new SP.UI.DialogOptions();
    var $v_1 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1E.cloneNode(true);
    var $v_2 = $v_1.querySelector('#divShowMoreValuesPopupValueContainer');
    $v_2.innerHTML = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$T.innerHTML;
    $v_0.autoSize = true;
    $v_0.title = String.format(Srch.U.loadResource('refconf_SampleValuesDialog_Title'), Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$6);
    $v_0.showClose = true;
    var $v_3 = document.createElement('div');
    $v_3.innerHTML = $v_1.innerHTML;
    $v_0.html = $v_3;
    SP.UI.ModalDialog.showModalDialog($v_0);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.handleOKButton = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$handleOKButton() {
    if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$m()) {
        if (window.frameElement) {
            var $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.getRefinementConfiguration();
            window.frameElement.commitPopup(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration.toJSON($v_0));
        }
    }
    else {
        Srch.U.trace(null, 'HandleOKButton', 'Failed validation');
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1n = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1n($p0) {
    Srch.U.trace(null, 'OnBtnPreviewRefinersClick', 'Enter');
    $p0.preventDefault();
    if (!Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$m()) {
        Srch.U.trace(null, 'OnBtnPreviewRefinersClick', 'Failed validation');
        return;
    }
    var $v_0 = new Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopupDialogArgs(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.getRefinementConfiguration(), Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1c());
    $v_0.contextDataProviderState = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$q;
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopup.show($v_0);
    Srch.U.trace(null, 'OnBtnPreviewRefinersClick', 'Leave');
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1c = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog$$1c() {
    if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.get_$t()) {
        return String.format('\"#{0}\"', Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$17);
    }
    else {
        return null;
    }
}


Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.LinkedManagedPropertyDescriptor = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog_LinkedManagedPropertyDescriptor($p0) {
    this.managedPropertyDescriptor = $p0;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.LinkedManagedPropertyDescriptor.prototype = {
    managedPropertyDescriptor: null,
    parentElement: null,
    nextPropertyDescriptor: null
}


Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.ManagedPropertiesInfo = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog_ManagedPropertiesInfo() {
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.ManagedPropertiesInfo.prototype = {
    PropertyDescriptors: null,
    MaxNumRefinersLimitWarning: 0,
    MaxNumRefinersLimitError: 0,
    QueryingForRefinablePropertiesErrorMessage: null,
    IsQueryingForRefinablePropertiesErrorSevere: false
}




Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.PropertyValuesDisplayHelper = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog_PropertyValuesDisplayHelper($p0, $p1) {
    this.$$d_$25_0 = Function.createDelegate(this, this.$25_0);
    this.$p_0 = -1;
    this.$1k_0 = $p0;
    this.$1v_0 = new Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.PropertyValuesDisplayHelper.PropertyValueRefinementWebPartController(this, 'SampleValuesRendering', $p1);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.PropertyValuesDisplayHelper.prototype = {
    $1v_0: null,
    $1k_0: 0,
    $1I_0: false,
    
    notifyCurrentPropertyChanged: function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog_PropertyValuesDisplayHelper$notifyCurrentPropertyChanged() {
        this.$1I_0 = false;
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$T, false);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$o(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$v, false);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$f, false);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$g, true);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$e, false);
        if (this.$p_0 >= 0) {
            window.clearTimeout(this.$p_0);
        }
        this.$p_0 = window.setTimeout(this.$$d_$25_0, 300);
    },
    
    $25_0: function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog_PropertyValuesDisplayHelper$$25_0() {
        var $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$6;
        if (Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$7($v_0) || !Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.getManagedPropertyDescriptor($v_0)) {
            return;
        }
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$f, true);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$g, false);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$e, true);
        this.$1I_0 = true;
        this.$1v_0.refresh();
    }
}


Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.PropertyValuesDisplayHelper.PropertyValueRefinementWebPartController = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog_PropertyValuesDisplayHelper_PropertyValueRefinementWebPartController($p0, $p1, $p2) {
    Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.PropertyValuesDisplayHelper.PropertyValueRefinementWebPartController.initializeBase(this, [ $p1, $p2, Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1c() ]);
    this.$1R_1 = $p0;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.PropertyValuesDisplayHelper.PropertyValueRefinementWebPartController.prototype = {
    $1R_1: null,
    
    getRefinementControls: function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog_PropertyValuesDisplayHelper_PropertyValueRefinementWebPartController$getRefinementControls() {
        var $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.getManagedPropertyDescriptor(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$6);
        var $v_1 = $v_0.PropertyName;
        var $v_2 = Srch.ValueInfo.isManagedMetadataProperty($v_0.PropertyName);
        if (!$v_2 && !Srch.U.n($v_0.Aliases)) {
            for (var $$arr_3 = $v_0.Aliases, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
                var $v_6 = $$arr_3[$$idx_5];
                if (Srch.ValueInfo.isManagedMetadataProperty($v_6)) {
                    $v_2 = true;
                    Srch.ValueInfo.overrideRenderingForProperty($v_0.PropertyName, $v_6);
                }
            }
        }
        var $v_3 = ($v_2) ? 'L*' : '*';
        var $v_4 = ($v_0.ManagedDataType === 'Text') ? '(filter=' + this.$1R_1.$1k_0 + '/0/' + $v_3 + ')' : '';
        var $v_5 = [ new Srch.RefinementControl($v_1, $v_4, '~sitecollection/_catalogs/masterpage/Display Templates/System/Filter_RefinementPreview.js') ];
        return $v_5;
    },
    
    onRefinementWebPartRendered: function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialog_PropertyValuesDisplayHelper_PropertyValueRefinementWebPartController$onRefinementWebPartRendered($p0, $p1) {
        if (!this.$1R_1.$1I_0) {
            return;
        }
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$f, false);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$g, true);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$e, false);
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$2(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$T, true);
        var $v_0 = !!Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$T.querySelector('#EmptyContainer');
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$o(Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$v, !$v_0);
    }
}


Microsoft.SharePoint.Search.FacetedNavigation.ManagedPropertyDescriptor.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.ManagedPropertyDescriptor');
Microsoft.SharePoint.Search.FacetedNavigation.RefinementWebPartController.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.RefinementWebPartController');
Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopupDialogArgs.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopupDialogArgs');
Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopup.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopup', Microsoft.SharePoint.Search.FacetedNavigation.RefinementWebPartController);
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog');
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.LinkedManagedPropertyDescriptor.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.LinkedManagedPropertyDescriptor');
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.ManagedPropertiesInfo.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.ManagedPropertiesInfo');
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.PropertyValuesDisplayHelper.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.PropertyValuesDisplayHelper');
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.PropertyValuesDisplayHelper.PropertyValueRefinementWebPartController.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.PropertyValuesDisplayHelper.PropertyValueRefinementWebPartController', Microsoft.SharePoint.Search.FacetedNavigation.RefinementWebPartController);
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1 = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$0 = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$I = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$J = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$M = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$L = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$b = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$12 = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$11 = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$z = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$k = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$V = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$10 = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$D = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$E = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$B = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$A = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$C = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$N = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$K = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$8 = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$5 = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$i = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$G = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$X = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$h = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$u = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1J = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1K = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$U = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1L = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$f = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$g = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$14 = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$v = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1U = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$3 = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$H = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$4 = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1F = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1A = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$r = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$T = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$d = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1B = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1E = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1D = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$e = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$W = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$P = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$a = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$13 = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1h = new RegExp('^\\d+$');
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$Z = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1C = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$6 = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$F = -1;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$w = 0;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$j = 0;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$16 = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$15 = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$S = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$R = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$17 = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$q = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$23 = null;
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.csS_STYLE_DISABLED = 'ms-srch-refconfig-disabled';
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1M = '(discretize=manual/';
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1j = ')';
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1i = '/';
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1y = '~sitecollection/_catalogs/masterpage/Display Templates/Filters/Filter_Slider.js';
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1x = '~sitecollection/_catalogs/masterpage/Display Templates/Filters/Filter_SliderBarGraph.js';
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1g = '~sitecollection/_catalogs/masterpage/Display Templates/Filters/Filter_MultiValue.js';
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1G = '~sitecollection/_catalogs/masterpage/Display Templates/Filters/Filter_Default.js';
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.$1Y = '~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js';

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("search.refinementconfigurationdialog.js");
