function ULSX8o(){var o=new Object;o.ULSTeamName="Office Server";o.ULSFileName="ScriptForWebTaggingUI.js";return o;}

Type.registerNamespace('Microsoft.SharePoint.Taxonomy');

Microsoft.SharePoint.Taxonomy.HighlightResult = function() {}
Microsoft.SharePoint.Taxonomy.HighlightResult.prototype = {
    success: 1, 
    notFound: 2, 
    passedBoundary: 3, 
    none: 0
}
Microsoft.SharePoint.Taxonomy.HighlightResult.registerEnum('Microsoft.SharePoint.Taxonomy.HighlightResult', false);


Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI = function Microsoft_SharePoint_Taxonomy_ScriptForWebTaggingUI() {ULSX8o:;
    Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.initializeBase(this);
}
Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.taggingLoad = function Microsoft_SharePoint_Taxonomy_ScriptForWebTaggingUI$taggingLoad() {ULSX8o:;
    if (Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.$12) {
        return;
    }
    else {
        Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.$12 = true;
    }
    if (document.body) {
        Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.attachRteEvent('keypress', Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.$2M);
        Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.attachRteEvent('keydown', Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.$2L);
    }
}
Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.resetEventsRegistered = function Microsoft_SharePoint_Taxonomy_ScriptForWebTaggingUI$resetEventsRegistered() {ULSX8o:;
    Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.$Z = false;
}
Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.attachRteEvent = function Microsoft_SharePoint_Taxonomy_ScriptForWebTaggingUI$attachRteEvent(eventName, handler) {ULSX8o:;
    $addHandler(document.body, eventName, handler);
}
Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.onLoad = function Microsoft_SharePoint_Taxonomy_ScriptForWebTaggingUI$onLoad(webTaggingId) {ULSX8o:;
    Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.assertNotNull('webTaggingId', webTaggingId);
    var $v_0 = $get(webTaggingId);
    var $v_1 = new Microsoft.SharePoint.Taxonomy.ControlObject($v_0);
    $v_1.startupValidation();
    if (!Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.$Z) {
        RTE.CanvasEvents.registerListener(RTE.CanvasEvents.editableRegionChangedEvent, Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.onTextChanged);
        RTE.CanvasEvents.registerListener(RTE.CanvasEvents.editableRegionBlurEvent, Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.onBlur);
        RTE.CanvasEvents.registerListener(RTE.CanvasEvents.editableRegionFocusEvent, Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.onFocus);
        Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.$Z = true;
    }
}
Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.onTextChanged = function Microsoft_SharePoint_Taxonomy_ScriptForWebTaggingUI$onTextChanged(sender, args) {ULSX8o:;
    var $v_0 = args.editableRegion;
    if (Sys.UI.DomElement.containsCssClass($v_0, 'ms-taxonomy-writeableregion')) {
        var $v_1 = new Microsoft.SharePoint.Taxonomy.ControlObject($v_0.parentNode.parentNode.parentNode);
        $v_1.validateOnTextChanged();
    }
}
Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.onBlur = function Microsoft_SharePoint_Taxonomy_ScriptForWebTaggingUI$onBlur(sender, args) {ULSX8o:;
    var $v_0 = args.oldEditableRegion;
    if (Sys.UI.DomElement.containsCssClass($v_0, 'ms-taxonomy-writeableregion')) {
        var $v_1 = new Microsoft.SharePoint.Taxonomy.ControlObject($v_0.parentNode.parentNode.parentNode);
        if (!$v_1.get_isResizing() && $v_1.get_isFocused()) {
            $v_1.validateAll(false);
            $v_1.focus(false);
        }
    }
}
Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.$2M = function Microsoft_SharePoint_Taxonomy_ScriptForWebTaggingUI$$2M($p0) {
    Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.handleKeyPress($p0, null);
}
Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.$2L = function Microsoft_SharePoint_Taxonomy_ScriptForWebTaggingUI$$2L($p0) {
    Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.handleKeyDown($p0, null);
}
Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.onFocus = function Microsoft_SharePoint_Taxonomy_ScriptForWebTaggingUI$onFocus(sender, args) {ULSX8o:;
    var $v_0 = args.newEditableRegion;
    if (Sys.UI.DomElement.containsCssClass($v_0, 'ms-taxonomy-writeableregion')) {
        var $v_1 = new Microsoft.SharePoint.Taxonomy.ControlObject($v_0.parentNode.parentNode.parentNode);
        $v_1.focus(true);
    }
}
Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.assertNotNull = function Microsoft_SharePoint_Taxonomy_ScriptForWebTaggingUI$assertNotNull(name, obj) {ULSX8o:;
    Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.assert(name + ' is null', !!obj);
}
Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.assert = function Microsoft_SharePoint_Taxonomy_ScriptForWebTaggingUI$assert(name, value) {ULSX8o:;
    if (!value) {
        throw Error.create(name);
    }
}
Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.handleKeyPress = function Microsoft_SharePoint_Taxonomy_ScriptForWebTaggingUI$handleKeyPress(evt, control) {ULSX8o:;
    var $v_0 = false;
    if (evt.charCode === 13) {
        var $v_1 = RTE.Canvas.currentEditableRegion();
        if ($v_1) {
            if (Sys.UI.DomElement.containsCssClass($v_1, 'ms-taxonomy-writeableregion')) {
                if (!control) {
                    control = new Microsoft.SharePoint.Taxonomy.ControlObject($v_1.parentNode.parentNode.parentNode);
                }
                control.$1y_2();
                evt.stopPropagation();
                evt.preventDefault();
                $v_0 = true;
            }
        }
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.handleKeyDown = function Microsoft_SharePoint_Taxonomy_ScriptForWebTaggingUI$handleKeyDown(evt, control) {ULSX8o:;
    var $v_0 = false;
    if (evt.keyCode === 38 || evt.keyCode === 40 || evt.keyCode === 9 || evt.keyCode === 229) {
        var $v_1 = RTE.Canvas.currentEditableRegion();
        if ($v_1) {
            if (Sys.UI.DomElement.containsCssClass($v_1, 'ms-taxonomy-writeableregion')) {
                if (!control) {
                    control = new Microsoft.SharePoint.Taxonomy.ControlObject($v_1.parentNode.parentNode.parentNode);
                }
                switch (evt.keyCode) {
                    case 38:
                    case 40:
                        if (control.$1u_2(evt.keyCode === 38)) {
                            evt.stopPropagation();
                            evt.preventDefault();
                            $v_0 = true;
                        }
                        break;
                    case 9:
                        if (control.$2a_2()) {
                            evt.stopPropagation();
                            evt.preventDefault();
                            $v_0 = true;
                        }
                        break;
                    case 229:
                        window.setTimeout(control.$$d_validateOnTextChangedNoDOMUpdate, 0);
                        break;
                }
            }
        }
    }
    return $v_0;
}


Microsoft.SharePoint.Taxonomy.ControlObject = function Microsoft_SharePoint_Taxonomy_ControlObject(container) {ULSX8o:;
    this.$$d_onDialogClose = Function.createDelegate(this, this.onDialogClose);
    this.$$d_onDisambiguateClose = Function.createDelegate(this, this.onDisambiguateClose);
    this.$$d_$2Q_2 = Function.createDelegate(this, this.$2Q_2);
    this.$$d_$2J_2 = Function.createDelegate(this, this.$2J_2);
    this.$$d_$1W_2 = Function.createDelegate(this, this.$1W_2);
    this.$$d_$2I_2 = Function.createDelegate(this, this.$2I_2);
    this.$$d_$2P_2 = Function.createDelegate(this, this.$2P_2);
    this.$$d_$2W_2 = Function.createDelegate(this, this.$2W_2);
    this.$$d_$2R_2 = Function.createDelegate(this, this.$2R_2);
    this.$$d_$2S_2 = Function.createDelegate(this, this.$2S_2);
    this.$$d_$2T_2 = Function.createDelegate(this, this.$2T_2);
    this.$$d_$2K_2 = Function.createDelegate(this, this.$2K_2);
    this.$$d_$2Z_2 = Function.createDelegate(this, this.$2Z_2);
    this.$$d_$2Y_2 = Function.createDelegate(this, this.$2Y_2);
    this.$$d_$2X_2 = Function.createDelegate(this, this.$2X_2);
    this.$$d_$2H_2 = Function.createDelegate(this, this.$2H_2);
    this.$$d_$2G_2 = Function.createDelegate(this, this.$2G_2);
    this.$$d_$2C_2 = Function.createDelegate(this, this.$2C_2);
    this.$$d_validateOnTextChangedNoDOMUpdate = Function.createDelegate(this, this.validateOnTextChangedNoDOMUpdate);
    Microsoft.SharePoint.Taxonomy.ControlObject.initializeBase(this, [ container ]);
    Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.assertNotNull('container', container);
    this.$0_2 = container;
    this.$1_2 = $get(container.id + 'editableRegion');
    if (!this.$1_2) {
        this.setMinimumHeight(15);
        var $v_1;
        if (this.$1G_2()) {
            this.$0_2.title = this.$1G_2();
            var $v_5 = document.createElement('IMG');
            $v_1 = document.createAttribute('src');
            $v_1.value = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'images/attention16by16.gif';
            $v_5.style.position = 'Absolute';
            $v_5.attributes.setNamedItem($v_1);
            container.appendChild($v_5);
        }
        var $v_2 = document.createElement('DIV');
        $v_2.id = container.id + 'controlHolder';
        Sys.UI.DomElement.addCssClass($v_2, 'ms-taxonomy-control-holder');
        if (this.$1N_2()) {
            Sys.UI.DomElement.addCssClass($v_2, this.$1N_2());
        }
        container.appendChild($v_2);
        this.set_id(container.id);
        if (!this.getInGridMode()) {
            var $v_6 = document.createElement('IMG');
            $v_1 = document.createAttribute('src');
            $v_1.value = SP.Utilities.Utility.get_layoutsLatestVersionUrl() + 'images/EMMCopyTerm.png';
            $v_6.attributes.setNamedItem($v_1);
            $v_6.title = Microsoft.SharePoint.Taxonomy.ScriptResources.webTaggingUI_BrowserButton;
            var $v_7 = document.createAttribute('alt');
            $v_7.value = Microsoft.SharePoint.Taxonomy.ScriptResources.webTaggingUI_BrowserButton;
            $v_6.attributes.setNamedItem($v_7);
            $v_6.tabIndex = 0;
            $addHandler($v_6, 'click', this.$$d_$2C_2);
            $addHandler($v_6, 'keypress', this.$$d_$2G_2);
            Sys.UI.DomElement.addCssClass($v_6, 'ms-taxonomy-browser-button');
            $v_2.appendChild($v_6);
        }
        var $v_3 = document.createElement('DIV');
        this.$U_2 = $v_2.appendChild($v_3);
        Sys.UI.DomElement.addCssClass($v_3, 'ms-taxonomy-fieldeditor');
        Sys.UI.DomElement.addCssClass($v_3, (this.getInGridMode()) ? 'ms-taxonomy-fieldeditor-grid' : 'ms-taxonomy-fieldeditor-standard');
        this.updateFieldEditorProperties();
        if (!this.getInGridMode()) {
            this.setDisplayPickerButton(this.$l_2());
        }
        $addHandler(container, 'resize', this.$$d_$2H_2);
        var $v_4 = document.createElement('DIV');
        $v_4.id = container.id + 'editableRegion';
        RTE.Canvas.makeRegionEditable($v_4);
        Sys.UI.DomElement.addCssClass($v_4, 'ms-taxonomy-writeableregion');
        Sys.UI.DomElement.addCssClass($v_4, 'ms-inputBox');
        this.$1_2 = this.$U_2.appendChild($v_4);
        RTE.Canvas.setRestriction(this.$1_2, 'DisableRibbonCommands', true);
        RTE.Canvas.setRestriction(this.$1_2, 'AllowMultiLines', false);
        RTE.Canvas.setRestriction(this.$1_2, 'RestrictPasteToText', true);
        RTE.Canvas.setRedirectOnNode($v_3, this.$1_2.id);
    }
    else {
        this.$U_2 = this.$1_2.parentNode;
    }
    var $v_0 = $get(container.id + 'suggestionsContainer');
    if (!$v_0) {
        $v_0 = document.createElement('DIV');
        $v_0.id = container.id + 'suggestionsContainer';
        $v_0.RteRedirect = this.$1_2.id;
        $v_0 = container.appendChild($v_0);
        this.$8_2 = new Microsoft.SharePoint.Taxonomy.SuggestionContainer($v_0);
        this.updateSuggestionsProperties();
    }
    else {
        this.$8_2 = new Microsoft.SharePoint.Taxonomy.SuggestionContainer($v_0);
    }
    this.$8_2.add_panelResizeBegin(this.$$d_$2X_2);
    this.$8_2.add_panelResizeEnd(this.$$d_$2Y_2);
    this.$8_2.add_selectionMade(this.$$d_$2Z_2);
    Sys.Net.WebRequestManager.add_invokingRequest(this.$$d_$2K_2);
}
Microsoft.SharePoint.Taxonomy.ControlObject.launchDialog = function Microsoft_SharePoint_Taxonomy_ControlObject$launchDialog(webTaggingId) {ULSX8o:;
    Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.assertNotNull('webTaggingId', webTaggingId);
    var $v_0 = $get(webTaggingId);
    var $v_1 = new Microsoft.SharePoint.Taxonomy.ControlObject($v_0);
    if ($v_1.isEnabled()) {
        document.body.style.cursor = 'wait';
        $v_1.focus(false);
        $v_1.enableControl(false);
        $v_1.callFunctionAfterValidation($v_1.$$d_$2S_2);
    }
}
Microsoft.SharePoint.Taxonomy.ControlObject.$10 = function Microsoft_SharePoint_Taxonomy_ControlObject$$10($p0) {
    $p0 = $p0.replace(Microsoft.SharePoint.Taxonomy.ControlObject.$1S, '<').replace(Microsoft.SharePoint.Taxonomy.ControlObject.$1O, '>').replace(Microsoft.SharePoint.Taxonomy.ControlObject.$1Y, '\"').replace(Microsoft.SharePoint.Taxonomy.ControlObject.$1U, ' ').replace(Microsoft.SharePoint.Taxonomy.ControlObject.$1k, '\'').replace(Microsoft.SharePoint.Taxonomy.ControlObject.$14, '&');
    return $p0;
}
Microsoft.SharePoint.Taxonomy.ControlObject.$A = function Microsoft_SharePoint_Taxonomy_ControlObject$$A($p0) {
    return SP.Utilities.HttpUtility.htmlEncode($p0);
}
Microsoft.SharePoint.Taxonomy.ControlObject.$1x = function Microsoft_SharePoint_Taxonomy_ControlObject$$1x($p0) {
    return $p0.replace(Microsoft.SharePoint.Taxonomy.ControlObject.$z, '%P');
}
Microsoft.SharePoint.Taxonomy.ControlObject.encodeForControl = function Microsoft_SharePoint_Taxonomy_ControlObject$encodeForControl(text) {ULSX8o:;
    return text.replace(Microsoft.SharePoint.Taxonomy.ControlObject.$z, '%P').replace(Microsoft.SharePoint.Taxonomy.ControlObject.$1T, '%C').replace(Microsoft.SharePoint.Taxonomy.ControlObject.$17, '%B');
}
Microsoft.SharePoint.Taxonomy.ControlObject.decodeFromControl = function Microsoft_SharePoint_Taxonomy_ControlObject$decodeFromControl(text) {ULSX8o:;
    return text.replace(Microsoft.SharePoint.Taxonomy.ControlObject.$18, '|').replace(Microsoft.SharePoint.Taxonomy.ControlObject.$1e, ';').replace(Microsoft.SharePoint.Taxonomy.ControlObject.$1X, '%');
}
Microsoft.SharePoint.Taxonomy.ControlObject.$S = function Microsoft_SharePoint_Taxonomy_ControlObject$$S($p0) {
    if (!$p0) {
        return '';
    }
    var $v_0 = new RegExp('<SPAN[^>]*>', 'ig');
    var $v_1 = $p0.replace($v_0, '');
    $v_0 = new RegExp('</SPAN>', 'ig');
    $v_1 = $v_1.replace($v_0, '');
    return $v_1;
}
Microsoft.SharePoint.Taxonomy.ControlObject.launch = function Microsoft_SharePoint_Taxonomy_ControlObject$launch(sspIds, termSetIds, anchorGuid, fieldName, tags, isMultiValue, allowFillIn, lcid, webServiceLink, fieldId, isAddTerms, isIgnoreFormatting, isIncludeDeprecated, isIncludePathData, isIncludeTermSetName, isIncludeUnavailable, isSpanTermSets, isSpanTermStores, isUseCommaAsDelimiter, onReturnCallback) {ULSX8o:;
    var $v_0 = new SP.UI.DialogOptions();
    $v_0.autoSize = true;
    $v_0.autoSizeStartWidth = 500;
    var $v_1 = {};
    $v_1['lcid'] = lcid;
    $v_1['sspIds'] = sspIds;
    $v_1['termSetIds'] = termSetIds;
    $v_1['anchorGuid'] = anchorGuid;
    $v_1['fieldName'] = fieldName;
    $v_1['tags'] = tags;
    $v_1['IsMutli'] = isMultiValue;
    $v_1['allowFillIn'] = allowFillIn;
    $v_1['lcid'] = lcid;
    $v_1['webServiceUrl'] = webServiceLink;
    $v_1['fieldId'] = fieldId;
    $v_1['isAddTerms'] = isAddTerms;
    $v_1['isIgnoreFormatting'] = isIgnoreFormatting;
    $v_1['isIncludeDeprecated'] = isIncludeDeprecated;
    $v_1['isIncludePathData'] = isIncludePathData;
    $v_1['isIncludeTermSetName'] = isIncludeTermSetName;
    $v_1['isIncludeUnavailable'] = isIncludeUnavailable;
    $v_1['isSpanTermSets'] = isSpanTermSets;
    $v_1['isSpanTermStores'] = isSpanTermStores;
    $v_1['isUseCommaAsDelimiter'] = isUseCommaAsDelimiter;
    $v_0.args = $v_1;
    var $v_2 = webServiceLink.indexOf('/_vti_bin/TaxonomyInternalService.json');
    $v_0.url = webServiceLink.substring(0, $v_2) + SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'WebTaggingDialog.aspx' + '?Field=' + encodeURIComponent(fieldName);
    if (onReturnCallback) {
        $v_0.dialogReturnValueCallback = onReturnCallback;
    }
    Microsoft.SharePoint.Taxonomy.ControlObject.set_termPickerDialog(SP.UI.ModalDialog.showModalDialog($v_0));
}
Microsoft.SharePoint.Taxonomy.ControlObject.get_termPickerDialog = function Microsoft_SharePoint_Taxonomy_ControlObject$get_termPickerDialog() {ULSX8o:;
    return window.top.termPickerDialog;
}
Microsoft.SharePoint.Taxonomy.ControlObject.set_termPickerDialog = function Microsoft_SharePoint_Taxonomy_ControlObject$set_termPickerDialog(value) {ULSX8o:;
    window.top.termPickerDialog = value;
    return value;
}
Microsoft.SharePoint.Taxonomy.ControlObject.$1J = function Microsoft_SharePoint_Taxonomy_ControlObject$$1J($p0) {
    var $v_0 = $p0.firstChild;
    while ($v_0 && $v_0.nodeType !== 1) {
        $v_0 = $v_0.nextSibling;
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.ControlObject.$1M = function Microsoft_SharePoint_Taxonomy_ControlObject$$1M($p0) {
    var $v_0 = $p0.lastChild;
    while ($v_0 && $v_0.nodeType !== 1) {
        $v_0 = $v_0.previousSibling;
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.ControlObject.prototype = {
    $j_2: false,
    $1_2: null,
    $0_2: null,
    $U_2: null,
    $8_2: null,
    
    updateFieldEditorProperties: function Microsoft_SharePoint_Taxonomy_ControlObject$updateFieldEditorProperties() {ULSX8o:;
        this.$U_2.title = this.$1I_2();
    },
    
    updateSuggestionsProperties: function Microsoft_SharePoint_Taxonomy_ControlObject$updateSuggestionsProperties() {ULSX8o:;
        this.$H_2(false);
        this.$8_2.set_addCreateNewWhileTrimming(this.$d_2());
        this.$8_2.set_isSpanTermSets(this.$V_2());
    },
    
    $2K_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$2K_2($p0, $p1) {
        var $v_0 = $get('__REQUESTDIGEST');
        if ($v_0) {
            $p1.get_webRequest().get_headers()['X-RequestDigest'] = ($v_0).value;
        }
    },
    
    $2H_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$2H_2($p0) {
        if (!this.$0_2.AdjustingHeight && !this.$0_2.IsPercentWidth && $p0 && $p0.target) {
            var $v_0 = $p0.target;
            if ($v_0.clientWidth > 22) {
                for (var $v_1 = 0; $v_1 < $v_0.childNodes.length; $v_1++) {
                    if ($v_0.childNodes[$v_1].id === $v_0.id + 'controlHolder') {
                        var $v_2 = $v_0.childNodes[$v_1];
                        var $v_3 = Microsoft.SharePoint.Taxonomy.ControlObject.$1M($v_2);
                        this.$1f_2($v_3, $v_0.clientWidth);
                    }
                }
            }
        }
    },
    
    $1f_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1f_2($p0, $p1) {
        if ($p0) {
            var $v_0 = $p1 - 2 * $p0.clientLeft;
            var $v_1 = '';
            if ($v_0 > 22) {
                if (this.$l_2()) {
                    $v_0 -= 22;
                }
                $v_1 = $v_0 + 'px';
                this.$0_2.IsPercentWidth = false;
            }
            else {
                $v_1 = (this.$l_2()) ? '85%' : '99%';
                this.$0_2.IsPercentWidth = true;
            }
            if ($p0.style.width !== $v_1) {
                $p0.style.width = $v_1;
            }
            if (this.$1_2) {
                if (this.$1_2.style.minWidth !== '') {
                    this.$1_2.style.minWidth = '';
                }
            }
        }
    },
    
    $2G_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$2G_2($p0) {
        if ($p0.charCode === 13) {
            Microsoft.SharePoint.Taxonomy.ControlObject.launchDialog(this.get_id());
            $p0.preventDefault();
        }
    },
    
    $2C_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$2C_2($p0) {
        if (!this.$1Q_2()) {
            Microsoft.SharePoint.Taxonomy.ControlObject.launchDialog(this.get_id());
        }
    },
    
    $2Y_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$2Y_2($p0, $p1) {
        window.setTimeout(this.$$d_$2T_2, 25);
    },
    
    $2T_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$2T_2() {ULSX8o:;
        RTE.Canvas.setIgnoreClear(false);
        document.documentElement.RteRedirect = null;
    },
    
    $2X_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$2X_2($p0, $p1) {
        RTE.Canvas.setIgnoreClear(true);
    },
    
    $2Z_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$2Z_2($p0, $p1) {
        this.$H_2(false);
        if ($p1) {
            var $v_0 = $p1.results;
            if ($v_0) {
                this.$15_2($v_0);
            }
        }
    },
    
    $15_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$15_2($p0) {
        this.$1g_2(true);
        var $v_0 = new Microsoft.SharePoint.Taxonomy.Term($p0);
        if (this.getIsMulti()) {
            this.replaceCurrentTerm($v_0);
        }
        else {
            this.replaceTerm($v_0);
        }
        this.$W_2(this.$1_2);
        this.$1g_2(false);
    },
    
    $1u_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1u_2($p0) {
        if (this.$8_2.get_isShowing()) {
            this.$8_2.toggleHighlight($p0);
            return true;
        }
        return false;
    },
    
    $1c_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1c_2($p0) {
        if ($p0.startsWith(this.$8_2.getCurrentStartsWith())) {
            var $v_0 = this.$8_2.getHighlightedSuggestion();
            if ($v_0) {
                var $v_1 = $v_0.get_labels().length;
                var $v_2 = this.$1p_2($p0);
                var $v_3;
                for (var $v_4 = 0; $v_4 < $v_1; $v_4++) {
                    $v_3 = $v_0.get_labels()[$v_4];
                    if (this.$1p_2($v_3).startsWith($v_2)) {
                        this.$15_2($v_0.get_suggestValue());
                        this.$H_2(false);
                        return true;
                    }
                }
            }
        }
        this.$H_2(false);
        return false;
    },
    
    $1p_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1p_2($p0) {
        return $p0.toLocaleLowerCase();
    },
    
    $2a_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$2a_2() {ULSX8o:;
        var $v_0 = false;
        if (this.$8_2.get_isShowing()) {
            var $v_1 = this.$O_2();
            var $v_2 = Microsoft.SharePoint.Taxonomy.ControlObject.$10($v_1);
            var $v_3 = this.$k_2($v_2);
            $v_0 = this.$1c_2($v_3);
        }
        return $v_0;
    },
    
    $1y_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1y_2() {ULSX8o:;
        if (!RTE.Cursor.get_range().isValid()) {
            RTE.Cursor.updateRangeToCurrentSelection();
        }
        var $v_0 = this.$O_2();
        var $v_1 = $v_0.replace('@@MARKER@@', '');
        if (SP.ScriptUtility.isNullOrEmptyString($v_1)) {
            this.setRawText('');
            this.retrieveTerms();
            return;
        }
        if (this.$8_2.get_isShowing()) {
            var $v_2 = Microsoft.SharePoint.Taxonomy.ControlObject.$10($v_0);
            var $v_3 = this.$k_2($v_2);
            if (this.$1c_2($v_3)) {
                return;
            }
        }
        if (this.$0_2.timeoutIndex) {
            var $v_4 = this.$0_2.timeoutIndex;
            window.clearTimeout($v_4);
            this.$0_2.timeoutIndex = null;
        }
        this.validateAll(true);
    },
    
    get_isResizing: function Microsoft_SharePoint_Taxonomy_ControlObject$get_isResizing() {ULSX8o:;
        return this.$8_2.get_isResizing();
    },
    
    get_isFocused: function Microsoft_SharePoint_Taxonomy_ControlObject$get_isFocused() {ULSX8o:;
        return Sys.UI.DomElement.containsCssClass(this.$1_2.parentNode, 'ms-taxonomy-writing');
    },
    
    focus: function Microsoft_SharePoint_Taxonomy_ControlObject$focus(value) {ULSX8o:;
        if (this.$1_2) {
            if (value) {
                if (this.$29_2()) {
                    this.validateAll(true);
                }
                Sys.UI.DomElement.addCssClass(this.$1_2.parentNode, 'ms-taxonomy-writing');
            }
            else {
                Sys.UI.DomElement.removeCssClass(this.$1_2.parentNode, 'ms-taxonomy-writing');
                this.$H_2(false);
            }
        }
    },
    
    isEnabled: function Microsoft_SharePoint_Taxonomy_ControlObject$isEnabled() {ULSX8o:;
        var $v_0 = false;
        if (this.$1_2 && this.$1_2.parentNode && !(Sys.UI.DomElement.containsCssClass(this.$1_2.parentNode, 'ms-taxonomy-disabled'))) {
            $v_0 = true;
        }
        return $v_0;
    },
    
    retrieveTerms: function Microsoft_SharePoint_Taxonomy_ControlObject$retrieveTerms() {ULSX8o:;
        var $v_0 = this.$23_2(this.$B_2());
        if ($v_0 === '') {
            $v_0 = Microsoft.SharePoint.Taxonomy.ControlObject.$X;
        }
        this.$1_2.innerHTML = $v_0;
        this.$13_2(this.$1_2.parentNode);
    },
    
    onDialogClose: function Microsoft_SharePoint_Taxonomy_ControlObject$onDialogClose(dialogResult, text) {ULSX8o:;
        Microsoft.SharePoint.Taxonomy.ControlObject.set_termPickerDialog(null);
        this.enableControl(true);
        if (dialogResult === 1) {
            this.setRawText(text);
            this.retrieveTerms();
        }
        this.$W_2(this.$1_2);
        document.body.style.cursor = 'default';
    },
    
    onDisambiguateClose: function Microsoft_SharePoint_Taxonomy_ControlObject$onDisambiguateClose(dialogResult, disambiguationObject) {ULSX8o:;
        this.$1W_2(disambiguationObject, null, '');
    },
    
    addTerm: function Microsoft_SharePoint_Taxonomy_ControlObject$addTerm(id, text) {ULSX8o:;
        var $v_0 = Microsoft.SharePoint.Taxonomy.Term.getTerms(this.$B_2());
        if ($v_0) {
            for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
                var $v_3 = $v_0[$v_2];
                if ($v_3 && $v_3.$7_0 === id && (id !== '22222222-2222-2222-2222-222222222222' || text.toLowerCase() === $v_3.$5_0.toLowerCase())) {
                    return;
                }
            }
            if ($v_0.length && $v_0[$v_0.length - 1].$5_0.trim() === '') {
                $v_0[$v_0.length - 1] = new Microsoft.SharePoint.Taxonomy.Term(text, id);
            }
            else {
                $v_0[$v_0.length] = new Microsoft.SharePoint.Taxonomy.Term(text, id);
            }
        }
        else {
            $v_0 = new Array(0);
            $v_0[0] = new Microsoft.SharePoint.Taxonomy.Term(text, id);
        }
        var $v_1 = this.$19_2();
        this.setRawText(Microsoft.SharePoint.Taxonomy.Term.getStringFromTerms($v_0));
        this.retrieveTerms();
        if ($v_1) {
            this.$W_2(this.$1_2);
        }
        this.$Y_2();
    },
    
    replaceTerm: function Microsoft_SharePoint_Taxonomy_ControlObject$replaceTerm(term) {ULSX8o:;
        this.setRawText(Microsoft.SharePoint.Taxonomy.Term.getStringFromTerms([ term ]));
        this.retrieveTerms();
        this.$Y_2();
    },
    
    replaceCurrentTerm: function Microsoft_SharePoint_Taxonomy_ControlObject$replaceCurrentTerm(term) {ULSX8o:;
        var $v_0 = this.$25_2();
        var $v_1 = this.$27_2($v_0);
        var $v_2 = Microsoft.SharePoint.Taxonomy.Term.getTerms(this.$B_2());
        if ($v_2 && $v_2.length > $v_1) {
            $v_2[$v_1] = term;
        }
        else {
            if ($v_2) {
                $v_2[$v_2.length] = term;
            }
            else {
                $v_2 = new Array(1);
                $v_2[0] = term;
            }
        }
        this.setRawText(Microsoft.SharePoint.Taxonomy.Term.getStringFromTerms($v_2));
        this.retrieveTerms();
        this.$W_2(this.$1_2);
        this.$Y_2();
    },
    
    callFunctionAfterValidation: function Microsoft_SharePoint_Taxonomy_ControlObject$callFunctionAfterValidation(method) {ULSX8o:;
        if (method) {
            var $v_0 = this.$0_2.Validating;
            if ($v_0 || this.get_isFocused()) {
                this.$0_2.ValidationCallback = method;
                window.setTimeout(this.$$d_$2R_2, 50);
            }
            else {
                method();
            }
        }
    },
    
    getFirstInvalidTerm: function Microsoft_SharePoint_Taxonomy_ControlObject$getFirstInvalidTerm() {ULSX8o:;
        var $v_0 = Microsoft.SharePoint.Taxonomy.Term.getTerms(this.$B_2());
        if ($v_0) {
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                if (!$v_0[$v_1].get_isValid()) {
                    return $v_0[$v_1].$5_0;
                }
            }
        }
        return null;
    },
    
    $T_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$T_2($p0) {
        var $v_0 = $p0;
        if (this.$L_2() && !$p0.indexOf('\"') && $p0.lastIndexOf('\"') === ($p0.length - 1)) {
            $v_0 = $p0.substring(1, $p0.length - 2);
        }
        var $v_1 = new RegExp('[<>|]', 'ig');
        return $v_1.test($v_0);
    },
    
    $1w_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1w_2($p0) {
        return ($p0.indexOf('%C') !== -1 || $p0.indexOf('%B') !== -1);
    },
    
    validateAll: function Microsoft_SharePoint_Taxonomy_ControlObject$validateAll(restoreCursor) {ULSX8o:;
        var $v_0 = this.$O_2();
        var $v_1;
        var $v_2 = Microsoft.SharePoint.Taxonomy.ControlObject.$S($v_0);
        if (this.$L_2()) {
            var $v_4 = $v_2.replace(Microsoft.SharePoint.Taxonomy.ControlObject.$y, '$1$11$16');
            while ($v_4 !== $v_2) {
                $v_2 = $v_4;
                $v_4 = $v_2.replace(Microsoft.SharePoint.Taxonomy.ControlObject.$y, '$1$11$16');
            }
            $v_1 = this.$T_2($v_4);
        }
        else {
            $v_1 = this.$T_2($v_2);
        }
        var $v_3 = this.$1q_2($v_0, false, true, true);
        if ($v_1) {
            this.setTextAndCursor($v_3, restoreCursor);
        }
        else {
            this.$2d_2(this.getRawText());
        }
    },
    
    validateOnTextChanged: function Microsoft_SharePoint_Taxonomy_ControlObject$validateOnTextChanged() {ULSX8o:;
        this.$1r_2(true);
    },
    
    validateOnTextChangedNoDOMUpdate: function Microsoft_SharePoint_Taxonomy_ControlObject$validateOnTextChangedNoDOMUpdate() {ULSX8o:;
        this.$1r_2(false);
    },
    
    $1r_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1r_2($p0) {
        if (this.$24_2() || this.$0_2.Validating || this.$0_2.UpdatingCursor) {
            return;
        }
        if ($p0 && !RTE.Cursor.get_range().isValid()) {
            RTE.Cursor.updateRangeToCurrentSelection();
        }
        this.$13_2(this.$1_2.parentNode);
        this.$j_2 = false;
        var $v_0 = this.$O_2();
        var $v_1 = $v_0;
        var $v_2 = $v_1.replace('@@MARKER@@', '');
        if (SP.ScriptUtility.isNullOrEmptyString($v_2)) {
            if ($p0) {
                this.$H_2(false);
                this.setRawText('');
                this.retrieveTerms();
                this.$0_2.suggestionsStart = '';
            }
            return;
        }
        $v_0 = this.$1q_2($v_0, true, false, true);
        var $v_3 = Microsoft.SharePoint.Taxonomy.ControlObject.$10($v_0);
        var $v_4 = $v_3.replace('@@MARKER@@', '');
        $v_2 = $v_2.replace(Microsoft.SharePoint.Taxonomy.ControlObject.$h, '');
        $v_4 = $v_4.replace(Microsoft.SharePoint.Taxonomy.ControlObject.$h, '');
        if ($p0 && ($v_2 !== $v_4 || this.$j_2)) {
            if (!this.$0_2.UpdatingCursor) {
                this.$0_2.UpdatingCursor = true;
                this.$1h_2($v_0, true, false);
                this.$0_2.UpdatingCursor = false;
            }
        }
        var $v_5 = this.$1H_2($v_3, true);
        if ($v_5.length >= 1) {
            if (this.$8_2.get_isShowing()) {
                var $v_6 = this.$0_2.suggestionsStart;
                if ($v_6 !== $v_5) {
                    this.$0_2.suggestionsStart = $v_5;
                    this.$1j_2($v_5);
                }
                else {
                    this.$H_2(true);
                }
            }
            else {
                if (this.$0_2.timeoutIndex) {
                    var $v_8 = this.$0_2.timeoutIndex;
                    window.clearTimeout($v_8);
                }
                this.$0_2.suggestionsStart = $v_5;
                var $v_7 = window.setTimeout(this.$$d_$2W_2, 0);
                this.$0_2.timeoutIndex = $v_7;
            }
        }
        else {
            this.$H_2(false);
        }
    },
    
    $13_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$13_2($p0) {
        this.$0_2.AdjustingHeight = true;
        var $v_0 = $p0.scrollHeight;
        var $v_1 = (!$p0.clientHeight) ? $v_0 : $p0.clientHeight;
        var $v_2 = this.$26_2();
        if ($v_1 !== $v_0 && ($v_0 <= 60 || $v_1 < 60)) {
            var $v_3 = ($v_0 > 60) ? 60 : $v_0;
            if ($v_3 < $v_2) {
                $v_3 = $v_2;
            }
            $p0.style.height = $v_3 + 'px';
        }
        else {
            var $v_4 = (60 > $v_2) ? 60 : $v_2;
            if ($v_1 > $v_4) {
                $p0.style.height = $v_4 + 'px';
            }
        }
        this.$0_2.AdjustingHeight = false;
    },
    
    $2W_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$2W_2() {ULSX8o:;
        if (this.$0_2.Validating) {
            return;
        }
        var $v_0 = this.$0_2.suggestionsStart;
        this.$0_2.timeoutIndex = null;
        this.$1j_2($v_0);
    },
    
    $1j_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1j_2($p0) {
        if (this.$0_2.Validating) {
            return;
        }
        var $v_0 = this.getTermSetId();
        if ($v_0) {
            var $v_1 = {};
            $v_1['start'] = $p0;
            $v_1['lcid'] = this.$b_2();
            $v_1['sspList'] = this.$c_2();
            $v_1['termSetList'] = this.getTermSetId();
            $v_1['anchorId'] = this.$a_2();
            $v_1['isSpanTermStores'] = this.$e_2();
            $v_1['isSpanTermSets'] = this.$V_2();
            $v_1['isIncludeUnavailable'] = this.$t_2();
            $v_1['isIncludeDeprecated'] = this.$r_2();
            $v_1['isAddTerms'] = this.$d_2();
            $v_1['isIncludePathData'] = this.$s_2();
            $v_1['excludeKeyword'] = this.$21_2();
            $v_1['excludedTermset'] = '00000000-0000-0000-0000-000000000000';
            Sys.Net.WebServiceProxy.invoke(this.getWebServicePath(), 'GetSuggestions', false, $v_1, this.$$d_$2P_2, this.$$d_$2I_2, $p0, Sys.Net.WebRequestManager.get_defaultTimeout(), false, null);
        }
    },
    
    enableControl: function Microsoft_SharePoint_Taxonomy_ControlObject$enableControl(value) {ULSX8o:;
        if (this.$1_2 && this.$1_2.parentNode) {
            if (value) {
                Sys.UI.DomElement.removeCssClass(this.$1_2.parentNode, 'ms-taxonomy-disabled');
                if (!Sys.UI.DomElement.containsCssClass(this.$1_2, 'ms-rtestate-write')) {
                    RTE.Canvas.makeRegionEditable(this.$1_2);
                }
            }
            else {
                RTE.Canvas.makeRegionUnEditable(this.$1_2);
                Sys.UI.DomElement.addCssClass(this.$1_2.parentNode, 'ms-taxonomy-disabled');
            }
        }
    },
    
    $W_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$W_2($p0) {
        RTE.Cursor.get_range().moveToEndOfNode($p0);
        RTE.Cursor.update();
        RTE.SnapshotManager.takeSnapshot();
    },
    
    setTextAndCursor: function Microsoft_SharePoint_Taxonomy_ControlObject$setTextAndCursor(text, restoreCursor) {ULSX8o:;
        this.$1h_2(text, restoreCursor, true);
    },
    
    $1h_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1h_2($p0, $p1, $p2) {
        if (!$p1) {
            $p0 = $p0.replace('@@MARKER@@', '');
        }
        else if (Sys.Browser.agent === Sys.Browser.Firefox || Sys.Browser.name.toLowerCase().indexOf('firefox') !== -1) {
            $p0 = $p0.replace('@@MARKER@@', '<MARKER id=\'this-should-be-unique\'></MARKER>');
        }
        else {
            $p0 = $p0.replace('@@MARKER@@', '<MARKER id=\'this-should-be-unique\'></MARKER>');
        }
        var $v_0 = Microsoft.SharePoint.Taxonomy.ControlObject.decodeFromControl($p0);
        if ($v_0 === '') {
            $v_0 = Microsoft.SharePoint.Taxonomy.ControlObject.$X;
        }
        this.$1_2.innerHTML = $v_0;
        if ($p1) {
            this.$1a_2($p2);
        }
    },
    
    $1a_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1a_2($p0) {
        var $v_0 = $get('this-should-be-unique');
        if ($v_0) {
            RTE.Cursor.get_range().moveBeforeNode($v_0);
            $v_0.parentNode.removeChild($v_0);
        }
        else if ($p0 || !this.$1_2.firstChild) {
            this.$1_2.appendChild(RTE.Cursor.get_range().get_startMarker());
            this.$1_2.appendChild(RTE.Cursor.get_range().get_endMarker());
            RTE.Cursor.get_range().resetCacheRange();
        }
        else {
            RTE.Cursor.get_range().moveBeforeNode(this.$1_2.firstChild);
        }
        RTE.Cursor.update();
        RTE.SnapshotManager.takeSnapshot();
    },
    
    restoreCursor: function Microsoft_SharePoint_Taxonomy_ControlObject$restoreCursor() {ULSX8o:;
        this.$1a_2(true);
    },
    
    $2d_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$2d_2($p0) {
        if ($p0) {
            var $v_0 = {};
            $v_0['terms'] = $p0;
            $v_0['lcid'] = this.$b_2();
            $v_0['SSPList'] = this.$c_2();
            $v_0['termSetList'] = this.getTermSetId();
            $v_0['anchorId'] = this.$a_2();
            $v_0['isSpanTermStores'] = this.$e_2();
            $v_0['isSpanTermSets'] = this.$V_2();
            $v_0['isIncludeUnavailable'] = this.$t_2();
            $v_0['isIncludeDeprecated'] = this.$r_2();
            $v_0['isAddTerms'] = this.$d_2();
            $v_0['isIncludeTermSetName'] = this.$1R_2();
            $v_0['isIncludePathData'] = this.$s_2();
            $v_0['isUseCommaAsDelimiter'] = this.$L_2();
            Sys.Net.WebServiceProxy.invoke(this.getWebServicePath(), 'GetMatches', false, $v_0, this.$$d_$1W_2, this.$$d_$2J_2, this, Sys.Net.WebRequestManager.get_defaultTimeout(), false, null);
            this.$0_2.Validating = true;
        }
        return $p0;
    },
    
    startupValidation: function Microsoft_SharePoint_Taxonomy_ControlObject$startupValidation() {ULSX8o:;
        var $v_0 = this.$B_2();
        if (this.$1Q_2()) {
            this.enableControl(false);
            if ($v_0) {
                this.retrieveTerms();
            }
        }
        else {
            if ($v_0) {
                if (!this.$1w_2($v_0)) {
                    var $v_1 = this.getTermSetId();
                    if ($v_1) {
                        var $v_2 = {};
                        $v_2['termData'] = Microsoft.SharePoint.Taxonomy.ControlObject.decodeFromControl($v_0);
                        $v_2['sspId'] = this.$c_2();
                        $v_2['termSetId'] = this.getTermSetId();
                        $v_2['anchorId'] = this.$a_2();
                        $v_2['isSpanTermStores'] = this.$e_2();
                        $v_2['lcid'] = this.$b_2();
                        Sys.Net.WebServiceProxy.invoke(this.getWebServicePath(), 'ValidateTerms', false, $v_2, this.$$d_$2Q_2, this.$$d_$2J_2, this, Sys.Net.WebRequestManager.get_defaultTimeout(), false, null);
                    }
                    else {
                        this.setRawText('');
                        this.retrieveTerms();
                    }
                }
                else {
                    this.retrieveTerms();
                }
            }
            else {
                this.$1_2.innerHTML = Microsoft.SharePoint.Taxonomy.ControlObject.$X;
            }
        }
    },
    
    $2P_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$2P_2($p0, $p1, $p2) {
        var $v_0 = this.$k_2(this.$O_2());
        if ($v_0) {
            var $v_1 = Microsoft.SharePoint.Taxonomy.Term.getTerms(this.$B_2());
            var $v_2 = {};
            for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
                if ($v_1[$v_3].$7_0 !== '00000000-0000-0000-0000-000000000000' && $v_1[$v_3].$7_0 !== '22222222-2222-2222-2222-222222222222') {
                    $v_2[$v_1[$v_3].$7_0] = true;
                }
            }
            this.$8_2.updateSuggestionsWithTaxonomyResult($p0, $v_0, $p1, $v_2, true);
        }
        else {
            this.$8_2.hidePanel();
        }
    },
    
    $H_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$H_2($p0) {
        if ($p0) {
            this.$8_2.showPanel();
        }
        else {
            this.$8_2.hidePanel();
        }
        RTE.Canvas.setIgnoreUpDownArrows($p0);
    },
    
    $2I_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$2I_2($p0, $p1, $p2) {
    },
    
    $2Q_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$2Q_2($p0, $p1, $p2) {
        var $v_0 = $p0;
        this.setRawText(Microsoft.SharePoint.Taxonomy.ControlObject.$1x($v_0));
        this.retrieveTerms();
    },
    
    $1W_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1W_2($p0, $p1, $p2) {
        if ($p0) {
            var $v_0 = '';
            var $v_1 = $p0.Matches;
            var $v_2 = false;
            if ($v_1) {
                for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
                    var $v_4 = $v_1[$v_3].IsAmbiguous;
                    if ($v_4) {
                        var $v_5 = new SP.UI.DialogOptions();
                        $v_5.height = 400;
                        $v_5.width = 550;
                        var $v_6 = this.getWebServicePath().indexOf('/_vti_bin/TaxonomyInternalService.json');
                        if ($v_6 >= 0) {
                            $v_5.url = this.getWebServicePath().substring(0, $v_6) + SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'disambiguation.aspx';
                        }
                        else {
                            $v_5.url = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'disambiguation.aspx';
                        }
                        $v_5.args = $p0;
                        $v_5.title = Microsoft.SharePoint.Taxonomy.ScriptResources.ambiguousEntry + $v_1[$v_3].DefaultLabel;
                        $v_5.dialogReturnValueCallback = this.$$d_onDisambiguateClose;
                        this.focus(false);
                        SP.UI.ModalDialog.showModalDialog($v_5);
                        this.$0_2.Validating = false;
                        $v_2 = true;
                        break;
                    }
                    else {
                        if ($v_3 > 0) {
                            $v_0 += ';';
                        }
                        $v_0 += Microsoft.SharePoint.Taxonomy.ControlObject.encodeForControl($v_1[$v_3].DefaultLabel);
                        $v_0 += '|';
                        $v_0 += $v_1[$v_3].Id;
                    }
                }
            }
            if (!$v_2) {
                var $v_7 = this.$19_2();
                this.setRawText($v_0);
                this.retrieveTerms();
                if ($v_7) {
                    this.$W_2(this.$1_2);
                }
                this.$Y_2();
                this.$0_2.Validating = false;
            }
        }
    },
    
    $Y_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$Y_2() {ULSX8o:;
        var $v_0 = Microsoft.SharePoint.Taxonomy.Term.getTerms(this.$B_2());
        if (!$v_0) {
            this.set_allTermsValid(true);
        }
        else {
            var $v_1 = 0;
            for ($v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                if (!this.getIsMulti() && $v_1 > 0) {
                    this.set_allTermsValid(false);
                    $v_1 = 0;
                    break;
                }
                if (!$v_0[$v_1].get_isValid()) {
                    this.set_allTermsValid(false);
                    break;
                }
            }
            if ($v_1 === $v_0.length) {
                this.set_allTermsValid(true);
            }
        }
    },
    
    addAllTermValidHandler: function Microsoft_SharePoint_Taxonomy_ControlObject$addAllTermValidHandler(handler) {ULSX8o:;
        var $v_0 = this.$1_2.listeners;
        if (!$v_0) {
            $v_0 = new Sys.EventHandlerList();
        }
        $v_0.addHandler('alltermvalid', handler);
        this.$1_2.listeners = $v_0;
    },
    
    removeAllTermValidHandler: function Microsoft_SharePoint_Taxonomy_ControlObject$removeAllTermValidHandler(handler) {ULSX8o:;
        var $v_0 = this.$1_2.listeners;
        if (!$v_0) {
            return;
        }
        $v_0.removeHandler('alltermvalid', handler);
    },
    
    get_allTermsValid: function Microsoft_SharePoint_Taxonomy_ControlObject$get_allTermsValid() {ULSX8o:;
        if (this.$1_2) {
            var $v_0 = this.$1_2.alltermsvalid;
            return $v_0;
        }
        else {
            return false;
        }
    },
    set_allTermsValid: function Microsoft_SharePoint_Taxonomy_ControlObject$set_allTermsValid(value) {ULSX8o:;
        var $v_0 = this.get_allTermsValid();
        if (this.$1_2) {
            this.$1_2.alltermsvalid = value;
        }
        this.$1z_2();
        return value;
    },
    
    $2J_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$2J_2($p0, $p1, $p2) {
        if (!$p0) {
            throw Error.argumentNull('error');
        }
        alert($p0.get_message());
        this.$0_2.Validating = false;
    },
    
    $n_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$n_2($p0, $p1) {
        $p0 = $p0.replace(Microsoft.SharePoint.Taxonomy.ControlObject.$1F, ';');
        if ($p1 && this.$L_2()) {
            $p0 = $p0.replace(Microsoft.SharePoint.Taxonomy.ControlObject.$1E, ',');
        }
        var $v_0 = $p0.split(';');
        var $v_1 = new Array(0);
        var $v_2 = 0;
        var $v_3 = 0;
        for (var $v_4 = 0; $v_4 < $v_0.length; $v_4++) {
            var $v_5 = $v_0[$v_4].trim();
            var $v_6 = ($v_5 === '@@MARKER@@');
            if ($v_5 !== '' && !$v_6) {
                if ($p1 && this.$L_2() && $v_5.indexOf(',') >= 0) {
                    var $v_7 = false;
                    var $v_8 = false;
                    var $v_9 = -1;
                    var $v_A = -1;
                    var $v_B = -1;
                    var $v_C = 0;
                    var $v_D = 0;
                    var $v_E = true;
                    var $v_F = true;
                    for (var $v_H = 0; $v_H < $v_5.length; $v_H++) {
                        var $v_I = $v_5.charAt($v_H);
                        if ($v_I === ',') {
                            if (!$v_7 && !$v_8 || ($v_B > $v_C && !($v_H - $v_C - $v_D))) {
                                var $v_J = $v_5.substring($v_C, $v_H);
                                if ($v_J.trim() !== '') {
                                    if ($v_E) {
                                        $v_E = false;
                                    }
                                    else {
                                        $v_3++;
                                    }
                                    $v_1[$v_4 - $v_2 + $v_3] = $v_J;
                                }
                                $v_C = $v_H + 1;
                                $v_F = true;
                                $v_7 = false;
                                $v_8 = false;
                                $v_D = 0;
                            }
                            else {
                                $v_F = false;
                                if (!$v_7) {
                                    $v_D++;
                                }
                            }
                        }
                        else {
                            if ($v_I === '\"') {
                                if ($v_F || !($v_H - $v_C - $v_D)) {
                                    $v_7 = true;
                                }
                                else if ($v_7) {
                                    $v_7 = false;
                                    $v_B = $v_H;
                                }
                            }
                            else if ($v_I === '<') {
                                if (!$v_8) {
                                    $v_9 = $v_H;
                                }
                                else {
                                    $v_A = $v_H;
                                }
                            }
                            else if ($v_I === '>') {
                                if ($v_9 >= $v_C) {
                                    if (!$v_8) {
                                        var $v_K = $v_5.substring($v_9, $v_H + 1);
                                        if ($v_K.match(Microsoft.SharePoint.Taxonomy.ControlObject.$1n)) {
                                            $v_8 = true;
                                            $v_D += $v_H - $v_9 + 1;
                                        }
                                        else {
                                            $v_9 = -1;
                                        }
                                    }
                                    else if ($v_A > $v_C) {
                                        var $v_L = $v_5.substring($v_A, $v_H + 1);
                                        if ($v_L.match(Microsoft.SharePoint.Taxonomy.ControlObject.$1l)) {
                                            $v_B = $v_H;
                                            $v_8 = false;
                                            $v_D += $v_H - $v_A + 1;
                                        }
                                        else {
                                            $v_A = -1;
                                        }
                                    }
                                }
                            }
                            else if ($v_I === '@' && $v_5.substring($v_H, $v_H + 10) === '@@MARKER@@') {
                                $v_D += 10;
                                $v_H += 9;
                            }
                            if ($v_I !== ' ') {
                                if ($v_F) {
                                    $v_D++;
                                }
                                $v_F = false;
                            }
                        }
                    }
                    var $v_G = $v_5.substring($v_C, $v_5.length);
                    if ($v_G.trim() !== '') {
                        if (!$v_E) {
                            $v_3++;
                        }
                        $v_1[$v_4 - $v_2 + $v_3] = $v_G;
                    }
                }
                else if (this.$L_2() && $v_0[$v_4].endsWith(',@@MARKER@@</span>')) {
                    $v_1[$v_4 - $v_2 + $v_3] = $v_0[$v_4].replace(',@@MARKER@@', '');
                    $v_3++;
                    $v_1[$v_4 - $v_2 + $v_3] = '@@MARKER@@';
                }
                else {
                    $v_1[$v_4 - $v_2 + $v_3] = $v_0[$v_4];
                }
            }
            else {
                if ($v_6) {
                    $v_1[$v_4 - $v_2 + $v_3] = '@@MARKER@@';
                }
                else {
                    $v_2++;
                }
            }
        }
        return $v_1;
    },
    
    $1q_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1q_2($p0, $p1, $p2, $p3) {
        var $v_0 = this.$n_2($p0, $p3);
        var $v_1 = false;
        var $v_2 = '';
        var $v_3 = Microsoft.SharePoint.Taxonomy.Term.getTerms(this.$B_2());
        if ($v_3 && $v_3.length === $v_0.length) {
            for (var $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
                if ($v_4 > 0) {
                    $v_2 += ';';
                }
                var $v_5 = this.$11_2(Microsoft.SharePoint.Taxonomy.ControlObject.$S($v_0[$v_4]));
                var $v_6 = $v_5[0];
                var $v_7 = $v_5[1];
                var $v_8 = $v_5[2];
                var $v_9 = $v_6;
                $v_2 += $v_7;
                $v_6 = $v_6.replace('@@MARKER@@', '');
                if ($p2 && this.$T_2($v_6)) {
                    $v_2 += this.$C_2('invalid-text', Microsoft.SharePoint.Taxonomy.ScriptResources.webTaggingUI_Term_Contains_Illegal_Chars) + Microsoft.SharePoint.Taxonomy.ControlObject.$A($v_6) + this.$J_2();
                }
                else if ($v_6 === $v_3[$v_4].$5_0) {
                    if ($v_4 && !this.getIsMulti()) {
                        $v_3[$v_4].$7_0 = '00000000-0000-0000-0000-000000000000';
                    }
                    $v_2 += this.$I_2($v_3[$v_4], $v_9, $v_0[$v_4]);
                }
                else {
                    if ($v_6.indexOf(',') !== -1 && $v_6.indexOf('\"')) {
                        $v_6 = '\"' + $v_6 + '\"';
                        $v_9 = '\"' + $v_9 + '\"';
                    }
                    $v_3[$v_4].$7_0 = '00000000-0000-0000-0000-000000000000';
                    $v_3[$v_4].$5_0 = $v_6;
                    $v_2 += Microsoft.SharePoint.Taxonomy.ControlObject.$A($v_9);
                }
                $v_2 += $v_8;
                $v_1 = $v_3[$v_4].get_isValid() && ($v_8.trim() !== '@@MARKER@@');
            }
            this.setRawText(Microsoft.SharePoint.Taxonomy.Term.getStringFromTerms($v_3));
        }
        else {
            var $v_A = new Array($v_0.length);
            if ($v_3 && $v_3.length > $v_0.length) {
                var $v_B = 0;
                for (var $v_C = 0; $v_C < $v_0.length; $v_C++) {
                    if ($v_C > 0) {
                        $v_2 += ';';
                    }
                    var $v_D = this.$11_2(Microsoft.SharePoint.Taxonomy.ControlObject.$S($v_0[$v_C]));
                    var $v_E = $v_D[0];
                    var $v_F = $v_D[1];
                    var $v_G = $v_D[2];
                    var $v_H = $v_E;
                    $v_2 += $v_F;
                    if ($v_0[$v_C].indexOf('@@MARKER@@') !== -1) {
                        $v_B = $v_3.length - $v_0.length;
                        var $v_I = $v_E.indexOf('@@MARKER@@');
                        if (!$v_I || $v_I === -1 && $v_F.indexOf('@@MARKER@@') !== -1) {
                            $v_E = $v_E.replace('@@MARKER@@', '');
                            if ($v_E === $v_3[$v_C + $v_B].$5_0) {
                                $v_2 += this.$I_2($v_3[$v_C + $v_B], $v_H, $v_0[$v_C]);
                                $v_A[$v_C] = $v_3[$v_C + $v_B];
                            }
                            else {
                                $v_2 += Microsoft.SharePoint.Taxonomy.ControlObject.$A($v_H);
                                $v_A[$v_C] = new Microsoft.SharePoint.Taxonomy.Term($v_E, '00000000-0000-0000-0000-000000000000');
                            }
                        }
                        else if ($v_I === ($v_E.length - 10) || $v_I === -1 && $v_G.indexOf('@@MARKER@@') !== -1) {
                            $v_E = $v_E.replace('@@MARKER@@', '');
                            if ($v_E === $v_3[$v_C].$5_0) {
                                $v_2 += this.$I_2($v_3[$v_C + $v_B], $v_H, $v_0[$v_C]);
                                $v_A[$v_C] = $v_3[$v_C];
                            }
                            else {
                                $v_2 += Microsoft.SharePoint.Taxonomy.ControlObject.$A($v_H);
                                $v_A[$v_C] = new Microsoft.SharePoint.Taxonomy.Term($v_E, '00000000-0000-0000-0000-000000000000');
                            }
                        }
                        else {
                            $v_2 += Microsoft.SharePoint.Taxonomy.ControlObject.$A($v_H);
                            $v_A[$v_C] = new Microsoft.SharePoint.Taxonomy.Term($v_E, '00000000-0000-0000-0000-000000000000');
                        }
                        $v_B = $v_3.length - $v_0.length;
                    }
                    else {
                        $v_A[$v_C] = $v_3[$v_C + $v_B];
                        $v_2 += this.$I_2($v_A[$v_C], $v_H, $v_0[$v_C]);
                    }
                    $v_2 += $v_G;
                    $v_1 = $v_A[$v_C].get_isValid();
                }
            }
            else {
                var $v_J = 0;
                if ($p1) {
                    $v_J = this.$o_2($v_0);
                }
                var $v_K = 0;
                var $v_L = $v_0.length;
                if ($v_3) {
                    $v_L = $v_0.length - $v_3.length;
                }
                for (var $v_M = 0; $v_M < $v_0.length; $v_M++) {
                    if ($v_M > 0) {
                        $v_2 += ';';
                    }
                    var $v_N = this.$11_2(Microsoft.SharePoint.Taxonomy.ControlObject.$S($v_0[$v_M]));
                    var $v_O = $v_N[0];
                    var $v_P = $v_N[1];
                    var $v_Q = $v_N[2];
                    var $v_R = $v_O;
                    $v_2 += $v_P;
                    $v_O = $v_O.replace('@@MARKER@@', '');
                    if ($v_M <= $v_J && $v_M > $v_J - $v_L) {
                        if ($v_K > 0) {
                            var $v_S = $v_0[$v_M].indexOf('</span>');
                            if ($v_S !== -1) {
                                $v_K--;
                                $v_0[$v_M] = $v_0[$v_M].substring(0, $v_S) + $v_0[$v_M].substring($v_S + 7, $v_0[$v_M].length);
                            }
                        }
                        $v_A[$v_M] = new Microsoft.SharePoint.Taxonomy.Term($v_O, '00000000-0000-0000-0000-000000000000');
                        if ($p2 && this.$T_2($v_O)) {
                            $v_2 += this.$C_2('invalid-text', Microsoft.SharePoint.Taxonomy.ScriptResources.webTaggingUI_Term_Contains_Illegal_Chars) + Microsoft.SharePoint.Taxonomy.ControlObject.$A($v_O) + this.$J_2();
                        }
                        else {
                            $v_2 += this.$I_2($v_A[$v_M], $v_R, $v_0[$v_M]);
                        }
                    }
                    else {
                        if ($v_M >= $v_J) {
                            if ($v_3 && $v_3[$v_M - $v_L] && $v_O === $v_3[$v_M - $v_L].$5_0) {
                                $v_A[$v_M] = $v_3[$v_M - $v_L];
                                $v_2 += this.$I_2($v_A[$v_M], $v_R, $v_0[$v_M]);
                            }
                            else {
                                $v_A[$v_M] = new Microsoft.SharePoint.Taxonomy.Term($v_O, '00000000-0000-0000-0000-000000000000');
                                if ($p2 && this.$T_2($v_O)) {
                                    $v_2 += this.$C_2('invalid-text', Microsoft.SharePoint.Taxonomy.ScriptResources.webTaggingUI_Term_Contains_Illegal_Chars) + Microsoft.SharePoint.Taxonomy.ControlObject.$A($v_O) + this.$J_2();
                                }
                                else {
                                    $v_2 += Microsoft.SharePoint.Taxonomy.ControlObject.$A($v_R);
                                }
                            }
                        }
                        else {
                            var $v_T = new RegExp('<span([^>]*)>', 'i');
                            var $v_U = $v_T.exec($v_0[$v_M]);
                            if ($v_3 && $v_3[$v_M] && $v_O === $v_3[$v_M].$5_0) {
                                $v_A[$v_M] = $v_3[$v_M];
                                if ($v_U) {
                                    var $v_V = $v_0[$v_M].indexOf('</span>');
                                    if ($v_V === -1) {
                                        $v_K++;
                                        $v_2 += this.$I_2($v_A[$v_M], $v_R, $v_0[$v_M]);
                                    }
                                    else {
                                        $v_2 += this.$I_2($v_A[$v_M], $v_R, $v_0[$v_M]);
                                    }
                                }
                                else {
                                    $v_2 += Microsoft.SharePoint.Taxonomy.ControlObject.$A($v_R);
                                }
                            }
                            else {
                                $v_A[$v_M] = new Microsoft.SharePoint.Taxonomy.Term($v_O, '00000000-0000-0000-0000-000000000000');
                                if ($v_U && -1 === $v_0[$v_M].indexOf('</span>')) {
                                    $v_K++;
                                }
                                $v_2 += Microsoft.SharePoint.Taxonomy.ControlObject.$A($v_R);
                            }
                        }
                    }
                    $v_2 += $v_Q;
                    $v_1 = $v_A[$v_M].get_isValid();
                }
            }
            this.setRawText(Microsoft.SharePoint.Taxonomy.Term.getStringFromTerms($v_A));
        }
        if (this.getIsMulti() && $v_1) {
            $v_2 += Microsoft.SharePoint.Taxonomy.ControlObject.$1B;
        }
        return $v_2;
    },
    
    $I_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$I_2($p0, $p1, $p2) {
        if ($p0.$7_0 === '00000000-0000-0000-0000-000000000000') {
            var $v_0 = new RegExp('invalid-text', 'i');
            var $v_1 = $v_0.exec($p2);
            if ($v_1) {
                return this.$C_2('invalid-text', Microsoft.SharePoint.Taxonomy.ScriptResources.webTaggingUI_Tooltip_invalid) + Microsoft.SharePoint.Taxonomy.ControlObject.$A($p1) + this.$J_2();
            }
            else {
                return Microsoft.SharePoint.Taxonomy.ControlObject.$A($p1);
            }
        }
        else {
            return this.$C_2('valid-text', '') + Microsoft.SharePoint.Taxonomy.ControlObject.$A($p1) + this.$J_2();
        }
    },
    
    getRawText: function Microsoft_SharePoint_Taxonomy_ControlObject$getRawText() {ULSX8o:;
        return Microsoft.SharePoint.Taxonomy.ControlObject.decodeFromControl(this.$B_2());
    },
    
    $B_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$B_2() {ULSX8o:;
        var $v_0 = this.$1L_2();
        return $v_0.value;
    },
    
    setRawText: function Microsoft_SharePoint_Taxonomy_ControlObject$setRawText(text) {ULSX8o:;
        var $v_0 = this.$1L_2();
        $v_0.value = text;
        eval(this.$2B_2());
    },
    
    $27_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$27_2($p0) {
        Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.assertNotNull('text', $p0);
        var $v_0 = this.$n_2($p0, false);
        return this.$o_2($v_0);
    },
    
    $o_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$o_2($p0) {
        var $v_0 = 0;
        while ($v_0 < $p0.length && -1 === $p0[$v_0].indexOf('@@MARKER@@')) {
            $v_0++;
        }
        return $v_0;
    },
    
    $11_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$11_2($p0) {
        var $v_0 = '';
        var $v_1 = '';
        var $v_2 = 0;
        while ($v_2 < $p0.length) {
            if ($p0.charAt($v_2) === ' ') {
                $v_0 += ' ';
                $v_2++;
            }
            else if ($p0.charAt($v_2) === '@') {
                var $v_4 = $p0.substring($v_2, $v_2 + 10);
                if ($v_4 === '@@MARKER@@') {
                    $v_0 += '@@MARKER@@';
                    $v_2 += 10;
                }
                else {
                    break;
                }
            }
            else {
                break;
            }
        }
        $p0 = $p0.substring($v_2, $p0.length);
        $v_2 = $p0.length - 1;
        while ($v_2 >= 0) {
            if ($p0.charAt($v_2) === ' ') {
                $v_1 = ' ' + $v_1;
                $v_2--;
            }
            else if ($p0.charAt($v_2) === '@' && $v_2 - 9 >= 0) {
                var $v_5 = $p0.substring($v_2 - 9, $v_2 + 1);
                if ($v_5 === '@@MARKER@@') {
                    $v_1 = '@@MARKER@@' + $v_1;
                    $v_2 -= 10;
                }
                else {
                    break;
                }
            }
            else {
                break;
            }
        }
        var $v_3 = new Array(4);
        $v_3[0] = $p0.substring(0, $v_2 + 1);
        $v_3[1] = $v_0;
        $v_3[2] = $v_1;
        return $v_3;
    },
    
    $k_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$k_2($p0) {
        return this.$1H_2($p0, false);
    },
    
    $1H_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1H_2($p0, $p1) {
        if ($p0) {
            var $v_0 = this.$n_2($p0, false);
            var $v_1 = this.$o_2($v_0);
            if ($v_0.length > $v_1) {
                if ($p1) {
                    var $v_3 = Microsoft.SharePoint.Taxonomy.Term.getTerms(this.$B_2());
                    if ($v_3[$v_1].get_isValid()) {
                        return '';
                    }
                }
                var $v_2 = $v_0[$v_1];
                $v_2 = $v_2.replace('@@MARKER@@', '').trimStart();
                $v_2 = Microsoft.SharePoint.Taxonomy.ControlObject.decodeFromControl($v_2);
                $v_2 = Microsoft.SharePoint.Taxonomy.ControlObject.$S($v_2);
                return $v_2;
            }
        }
        return '';
    },
    
    $O_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$O_2() {ULSX8o:;
        var $v_0 = this.$m_2(this.$1_2);
        var $v_1 = new RegExp(Microsoft.SharePoint.Taxonomy.ControlObject.$f, 'g');
        $v_0 = $v_0.replace($v_1, ' ');
        $v_1 = new RegExp(Microsoft.SharePoint.Taxonomy.ControlObject.$X, 'g');
        $v_0 = $v_0.replace($v_1, '');
        return $v_0;
    },
    
    $m_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$m_2($p0) {
        var $v_0 = '';
        for (var $v_1 = 0; $v_1 < $p0.childNodes.length; $v_1++) {
            var $v_2 = $p0.childNodes[$v_1];
            if (Microsoft.SharePoint.Taxonomy.ControlObject.$1m.test($v_2.nodeName)) {
                var $v_3 = false;
                if (Sys.UI.DomElement.containsCssClass($v_2, 'valid-text')) {
                    $v_0 += this.$C_2('valid-text', '');
                    $v_3 = true;
                }
                else if (Sys.UI.DomElement.containsCssClass($v_2, 'invalid-text')) {
                    $v_0 += this.$C_2('invalid-text', Microsoft.SharePoint.Taxonomy.ScriptResources.webTaggingUI_Tooltip_invalid);
                    $v_3 = true;
                }
                else {
                    if (RTE.Cursor.get_range().isValid() && $v_2 === RTE.Cursor.get_range().get_endMarker()) {
                        $v_0 += '@@MARKER@@';
                    }
                }
                $v_0 += this.$m_2($v_2);
                if ($v_3) {
                    $v_0 += this.$J_2();
                }
            }
            else if (Microsoft.SharePoint.Taxonomy.ControlObject.$1o.test($v_2.nodeName)) {
                if ($v_2.nodeValue !== String.fromCharCode(8203)) {
                    $v_0 += $v_2.nodeValue;
                }
            }
            else {
                this.$j_2 = true;
                $v_0 += this.$m_2($v_2);
            }
        }
        return $v_0;
    },
    
    $19_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$19_2() {ULSX8o:;
        var $v_0 = null;
        if (RTE.Cursor.get_range().isValid()) {
            $v_0 = RTE.Cursor.get_range().get_endMarker().parentNode;
            while ($v_0 && $v_0 !== this.$1_2) {
                $v_0 = $v_0.parentNode;
            }
        }
        return (!!$v_0);
    },
    
    $25_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$25_2() {ULSX8o:;
        var $v_0 = this.$O_2();
        $v_0 = Microsoft.SharePoint.Taxonomy.ControlObject.$S($v_0);
        return $v_0;
    },
    
    $1z_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1z_2() {ULSX8o:;
        var $v_0 = this.$1_2.listeners;
        if ($v_0) {
            var $v_1 = $v_0.getHandler('alltermvalid');
            if ($v_1) {
                $v_1(this, null);
            }
        }
    },
    
    $1L_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1L_2() {ULSX8o:;
        var $v_0 = this.$0_2.InputFieldId;
        Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.assertNotNull('inputFieldId', $v_0);
        var $v_1 = $get($v_0);
        Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.assertNotNull('inputField', $v_1);
        return $v_1;
    },
    
    $2R_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$2R_2() {ULSX8o:;
        var $v_0 = this.$0_2.Validating;
        if ($v_0 || this.get_isFocused()) {
            window.setTimeout(this.$$d_$2R_2, 50);
        }
        else {
            var $v_1 = this.$0_2.ValidationCallback;
            if ($v_1) {
                $v_1();
            }
        }
    },
    
    $2S_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$2S_2() {ULSX8o:;
        Microsoft.SharePoint.Taxonomy.ControlObject.launch(this.$c_2(), this.getTermSetId(), this.$a_2(), this.$1I_2(), this.$B_2(), this.getIsMulti(), this.getAllowFillIn(), this.$b_2(), this.getWebServicePath(), this.$22_2(), this.$d_2(), this.$q_2(), this.$r_2(), this.$s_2(), this.$1R_2(), this.$t_2(), this.$V_2(), this.$e_2(), this.$L_2(), this.$$d_onDialogClose);
    },
    
    $c_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$c_2() {ULSX8o:;
        return this.$0_2.SspId;
    },
    
    setSspId: function Microsoft_SharePoint_Taxonomy_ControlObject$setSspId(value) {ULSX8o:;
        this.$0_2.SspId = value;
    },
    
    getTermSetId: function Microsoft_SharePoint_Taxonomy_ControlObject$getTermSetId() {ULSX8o:;
        return this.$0_2.TermSetId;
    },
    
    setTermSetId: function Microsoft_SharePoint_Taxonomy_ControlObject$setTermSetId(value) {ULSX8o:;
        this.$0_2.TermSetId = value;
    },
    
    setMinimumHeight: function Microsoft_SharePoint_Taxonomy_ControlObject$setMinimumHeight(value) {ULSX8o:;
        if (this.$1_2 && this.$1_2.parentNode && value > 0) {
            this.$1_2.parentNode.style.height = value + 'px';
        }
        this.$0_2.MinimumHeight = value;
    },
    
    clearHeight: function Microsoft_SharePoint_Taxonomy_ControlObject$clearHeight() {ULSX8o:;
        if (this.$1_2 && this.$1_2.parentNode) {
            this.$1_2.parentNode.style.height = '';
        }
    },
    
    $26_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$26_2() {ULSX8o:;
        return this.$0_2.MinimumHeight;
    },
    
    $a_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$a_2() {ULSX8o:;
        return this.$0_2.AnchorId;
    },
    
    setAnchorId: function Microsoft_SharePoint_Taxonomy_ControlObject$setAnchorId(value) {ULSX8o:;
        this.$0_2.AnchorId = value;
    },
    
    $1i_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1i_2($p0) {
        this.$0_2.IsUnvalidated = $p0;
    },
    
    $29_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$29_2() {ULSX8o:;
        return this.$0_2.IsUnvalidated;
    },
    
    getIsMulti: function Microsoft_SharePoint_Taxonomy_ControlObject$getIsMulti() {ULSX8o:;
        return this.$0_2.IsMulti;
    },
    
    setIsMulti: function Microsoft_SharePoint_Taxonomy_ControlObject$setIsMulti(value) {ULSX8o:;
        this.$0_2.IsMulti = value;
    },
    
    getAllowFillIn: function Microsoft_SharePoint_Taxonomy_ControlObject$getAllowFillIn() {ULSX8o:;
        return this.$0_2.AllowFillIn;
    },
    
    $b_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$b_2() {ULSX8o:;
        return this.$0_2.Lcid;
    },
    
    setLcid: function Microsoft_SharePoint_Taxonomy_ControlObject$setLcid(lcid) {ULSX8o:;
        this.$0_2.Lcid = lcid;
    },
    
    setAllowFillIn: function Microsoft_SharePoint_Taxonomy_ControlObject$setAllowFillIn(allowFillIn) {ULSX8o:;
        this.$0_2.AllowFillIn = allowFillIn;
    },
    
    getInGridMode: function Microsoft_SharePoint_Taxonomy_ControlObject$getInGridMode() {ULSX8o:;
        return this.$0_2.InGridMode;
    },
    
    setDisplayPickerButton: function Microsoft_SharePoint_Taxonomy_ControlObject$setDisplayPickerButton(isDisplayPickerButton) {ULSX8o:;
        this.$0_2.DisplayPickerButton = isDisplayPickerButton;
        var $v_0 = Microsoft.SharePoint.Taxonomy.ControlObject.$1J(this.$0_2);
        if ($v_0) {
            var $v_1 = Microsoft.SharePoint.Taxonomy.ControlObject.$1J($v_0);
            if ($v_1) {
                if (!this.$V_2() && isDisplayPickerButton) {
                    Sys.UI.DomElement.removeCssClass($v_1, 'ms-taxonomy-hidden');
                }
                else {
                    Sys.UI.DomElement.addCssClass($v_1, 'ms-taxonomy-hidden');
                }
                this.$1f_2(Microsoft.SharePoint.Taxonomy.ControlObject.$1M($v_0), this.$0_2.clientWidth);
            }
        }
    },
    
    $1N_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1N_2() {ULSX8o:;
        return this.$0_2.WidthCSS;
    },
    
    $21_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$21_2() {ULSX8o:;
        return this.$0_2.ExcludeKeyword;
    },
    
    $L_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$L_2() {ULSX8o:;
        return this.$0_2.IsUseCommaAsDelimiter;
    },
    
    $V_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$V_2() {ULSX8o:;
        return this.$0_2.IsSpanTermSets;
    },
    
    $l_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$l_2() {ULSX8o:;
        return this.$0_2.DisplayPickerButton;
    },
    
    $e_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$e_2() {ULSX8o:;
        return this.$0_2.IsSpanTermStores;
    },
    
    $q_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$q_2() {ULSX8o:;
        return this.$0_2.IsIgnoreFormatting;
    },
    
    $r_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$r_2() {ULSX8o:;
        return this.$0_2.IsIncludeDeprecated;
    },
    
    $2B_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$2B_2() {ULSX8o:;
        return this.$0_2.JavascriptOnValidation;
    },
    
    $t_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$t_2() {ULSX8o:;
        return this.$0_2.IsIncludeUnavailable;
    },
    
    $1R_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1R_2() {ULSX8o:;
        return this.$0_2.IsIncludeTermSetName;
    },
    
    $d_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$d_2() {ULSX8o:;
        return this.$0_2.IsAddTerms;
    },
    
    $s_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$s_2() {ULSX8o:;
        return this.$0_2.IsIncludePathData;
    },
    
    $1Q_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1Q_2() {ULSX8o:;
        return this.$0_2.Disable;
    },
    
    getWebServicePath: function Microsoft_SharePoint_Taxonomy_ControlObject$getWebServicePath() {ULSX8o:;
        if (SP.ScriptUtility.isNullOrEmptyString(this.$N_2)) {
            this.$N_2 = this.$0_2.WebServiceUrl;
            this.$N_2 = decodeURI(this.$N_2);
            this.$N_2 = encodeURI(this.$N_2);
        }
        return this.$N_2;
    },
    
    $N_2: '',
    
    $1I_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1I_2() {ULSX8o:;
        return this.$0_2.FieldName;
    },
    
    $1G_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1G_2() {ULSX8o:;
        return this.$0_2.asteriskErrorMessage;
    },
    
    $22_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$22_2() {ULSX8o:;
        var $v_0 = this.$0_2.FieldId;
        if (!$v_0) {
            $v_0 = '00000000-0000-0000-0000-000000000000';
        }
        return $v_0;
    },
    
    $23_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$23_2($p0) {
        var $v_0 = '';
        this.$1i_2(false);
        if ($p0) {
            var $v_1 = false;
            var $v_2 = Microsoft.SharePoint.Taxonomy.Term.getTerms($p0);
            for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                if ($v_3 > 0) {
                    $v_0 += ';' + Microsoft.SharePoint.Taxonomy.ControlObject.$f;
                }
                if ($v_2[$v_3].get_isValid() && (this.getIsMulti() || !$v_3)) {
                    $v_0 += this.$C_2('valid-text', '') + Microsoft.SharePoint.Taxonomy.ControlObject.$A($v_2[$v_3].$5_0) + this.$J_2();
                    $v_1 = true;
                }
                else {
                    if (!this.getIsMulti() && $v_3 > 0) {
                        $v_0 += this.$C_2('invalid-text', Microsoft.SharePoint.Taxonomy.ScriptResources.webTaggingUI_Tooltip_multi_in_single);
                    }
                    else {
                        $v_0 += this.$C_2('invalid-text', Microsoft.SharePoint.Taxonomy.ScriptResources.webTaggingUI_Tooltip_invalid);
                    }
                    $v_0 += Microsoft.SharePoint.Taxonomy.ControlObject.$A($v_2[$v_3].$5_0) + this.$J_2();
                    if ($v_2[$v_3].get_isUnvalidated()) {
                        this.$1i_2(true);
                    }
                    $v_1 = false;
                }
            }
            if (this.getIsMulti() && $v_1) {
                $v_0 += ';' + Microsoft.SharePoint.Taxonomy.ControlObject.$f;
            }
        }
        return $v_0;
    },
    
    $J_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$J_2() {ULSX8o:;
        if (this.$q_2()) {
            return '';
        }
        else {
            return '</span>';
        }
    },
    
    $C_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$C_2($p0, $p1) {
        if (this.$q_2()) {
            return '';
        }
        else {
            return '<span class=' + $p0 + ' title=\'' + $p1 + '\'>';
        }
    },
    
    $24_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$24_2() {ULSX8o:;
        var $v_0 = this.$0_2.IgnoreUpdate;
        if (!$v_0) {
            return false;
        }
        return $v_0 === 'true';
    },
    
    $1g_2: function Microsoft_SharePoint_Taxonomy_ControlObject$$1g_2($p0) {
        this.$0_2.IgnoreUpdate = $p0.toString();
    },
    
    get_editableRegion: function Microsoft_SharePoint_Taxonomy_ControlObject$get_editableRegion() {ULSX8o:;
        return this.$1_2;
    },
    
    get_fieldEditor: function Microsoft_SharePoint_Taxonomy_ControlObject$get_fieldEditor() {ULSX8o:;
        return this.$U_2;
    }
}


Microsoft.SharePoint.Taxonomy.Term = function Microsoft_SharePoint_Taxonomy_Term(data) {ULSX8o:;
    if (arguments.length === 1) {
        if (data) {
            var $v_0 = data.split('|');
            if ($v_0.length === 2) {
                this.$7_0 = $v_0[1];
                this.$5_0 = Microsoft.SharePoint.Taxonomy.ControlObject.decodeFromControl($v_0[0]);
            }
            else if ($v_0.length >= 3) {
                this.$7_0 = $v_0[$v_0.length - 1];
                this.$5_0 = Microsoft.SharePoint.Taxonomy.ControlObject.decodeFromControl($v_0[0]);
                this.$R_0 = data.substring(this.$5_0.length + 1, data.length);
            }
            else {
                this.$5_0 = Microsoft.SharePoint.Taxonomy.ControlObject.decodeFromControl($v_0[0]);
                this.$7_0 = '00000000-0000-0000-0000-000000000000';
            }
        }
        else {
            this.$7_0 = '00000000-0000-0000-0000-000000000000';
            this.$5_0 = '';
        }
    }
    else if (arguments.length === 2) {
        this.$5_0 = Microsoft.SharePoint.Taxonomy.ControlObject.decodeFromControl(arguments[0]);
        var $v_1 = (arguments[1]).split('|');
        this.$7_0 = $v_1[$v_1.length - 1];
        this.$R_0 = arguments[1];
    }
}
Microsoft.SharePoint.Taxonomy.Term.getTerms = function Microsoft_SharePoint_Taxonomy_Term$getTerms(text) {ULSX8o:;
    var $v_0 = null;
    if (text) {
        $v_0 = new Array(0);
        var $v_1 = text.split(';');
        $v_0 = new Array($v_1.length);
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            $v_0[$v_2] = new Microsoft.SharePoint.Taxonomy.Term($v_1[$v_2]);
        }
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.Term.getStringFromTerms = function Microsoft_SharePoint_Taxonomy_Term$getStringFromTerms(terms) {ULSX8o:;
    var $v_0 = '';
    var $v_1 = false;
    for (var $v_2 = 0; $v_2 < terms.length; $v_2++) {
        if (terms[$v_2] && terms[$v_2].$5_0) {
            if (terms[$v_2].$5_0.trim() !== '') {
                if ($v_1) {
                    $v_0 += ';';
                }
                $v_0 += terms[$v_2].toString();
                $v_1 = true;
            }
        }
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.Term.prototype = {
    
    get_isValid: function Microsoft_SharePoint_Taxonomy_Term$get_isValid() {ULSX8o:;
        return (this.$7_0 !== '00000000-0000-0000-0000-000000000000' && this.$7_0 !== '11111111-1111-1111-1111-111111111111');
    },
    
    get_isUnvalidated: function Microsoft_SharePoint_Taxonomy_Term$get_isUnvalidated() {ULSX8o:;
        return this.$7_0 === '11111111-1111-1111-1111-111111111111';
    },
    
    get_guid: function Microsoft_SharePoint_Taxonomy_Term$get_guid() {ULSX8o:;
        return this.$7_0;
    },
    set_guid: function Microsoft_SharePoint_Taxonomy_Term$set_guid(value) {ULSX8o:;
        this.$7_0 = value;
        return value;
    },
    
    get_text: function Microsoft_SharePoint_Taxonomy_Term$get_text() {ULSX8o:;
        return this.$5_0;
    },
    set_text: function Microsoft_SharePoint_Taxonomy_Term$set_text(value) {ULSX8o:;
        this.$5_0 = value;
        return value;
    },
    
    get_path: function Microsoft_SharePoint_Taxonomy_Term$get_path() {ULSX8o:;
        return this.$R_0;
    },
    set_path: function Microsoft_SharePoint_Taxonomy_Term$set_path(value) {ULSX8o:;
        this.$R_0 = value;
        return value;
    },
    
    toString: function Microsoft_SharePoint_Taxonomy_Term$toString() {ULSX8o:;
        var $v_0 = Microsoft.SharePoint.Taxonomy.ControlObject.encodeForControl(this.$5_0) + '|';
        if (this.$R_0 && this.$7_0 !== '00000000-0000-0000-0000-000000000000') {
            $v_0 += this.$R_0;
        }
        else {
            $v_0 += this.$7_0;
        }
        return $v_0;
    },
    
    $7_0: null,
    $5_0: null,
    $R_0: null
}


Microsoft.SharePoint.Taxonomy.PanelResizer = function Microsoft_SharePoint_Taxonomy_PanelResizer(e) {ULSX8o:;
    this.$$d_$x_2 = Function.createDelegate(this, this.$x_2);
    this.$$d_$w_2 = Function.createDelegate(this, this.$w_2);
    Microsoft.SharePoint.Taxonomy.PanelResizer.initializeBase(this, [ e ]);
}
Microsoft.SharePoint.Taxonomy.PanelResizer.prototype = {
    $v_2: null,
    $E_2: null,
    
    initialize: function Microsoft_SharePoint_Taxonomy_PanelResizer$initialize() {ULSX8o:;
        Sys.UI.Behavior.prototype.initialize.call(this);
        this.$v_2 = this.$$d_$w_2;
        this.$16_2(this.get_element(), 'mousedown', this.$v_2);
    },
    
    dispose: function Microsoft_SharePoint_Taxonomy_PanelResizer$dispose() {ULSX8o:;
        this.$1A_2(this.get_element(), 'mousedown', this.$v_2);
        Sys.UI.Behavior.prototype.dispose.call(this);
    },
    
    $w_2: function Microsoft_SharePoint_Taxonomy_PanelResizer$$w_2($p0) {
        if (this.get_element().offsetWidth - $p0.offsetX < 15 && this.get_element().offsetHeight - $p0.offsetY < 15) {
            this.$1C_2();
            this.$E_2 = this.$$d_$x_2;
            this.$16_2(document.documentElement, 'mouseup', this.$E_2);
            $p0.preventDefault();
            $p0.stopPropagation();
        }
    },
    
    $x_2: function Microsoft_SharePoint_Taxonomy_PanelResizer$$x_2($p0) {
        this.$1A_2(document.documentElement, 'mouseup', this.$E_2);
        var $v_0 = Sys.UI.DomElement.getLocation(this.get_element());
        var $v_1 = $p0.clientX - $v_0.x;
        var $v_2 = $p0.clientY - $v_0.y;
        if ($v_1 < 15) {
            $v_1 = 15;
        }
        if ($v_2 < 15) {
            $v_2 = 15;
        }
        this.get_element().style.width = $v_1 + 'px';
        this.get_element().style.height = $v_2 + 'px';
        $p0.stopPropagation();
        $p0.preventDefault();
        this.$1D_2();
    },
    
    $16_2: function Microsoft_SharePoint_Taxonomy_PanelResizer$$16_2($p0, $p1, $p2) {
        if ($p2) {
            $addHandler($p0, $p1, $p2);
        }
    },
    
    $1A_2: function Microsoft_SharePoint_Taxonomy_PanelResizer$$1A_2($p0, $p1, $p2) {
        if ($p2) {
            $removeHandler($p0, $p1, $p2);
            $p2 = null;
        }
    },
    
    add_panelResizeBegin: function Microsoft_SharePoint_Taxonomy_PanelResizer$add_panelResizeBegin(value) {ULSX8o:;
        this.get_events().addHandler('panelResizeBegin', value);
    },
    remove_panelResizeBegin: function Microsoft_SharePoint_Taxonomy_PanelResizer$remove_panelResizeBegin(value) {ULSX8o:;
        this.get_events().addHandler('panelResizeBegin', value);
    },
    
    add_panelResizeEnd: function Microsoft_SharePoint_Taxonomy_PanelResizer$add_panelResizeEnd(value) {ULSX8o:;
        this.get_events().addHandler('panelResizeEnd', value);
    },
    remove_panelResizeEnd: function Microsoft_SharePoint_Taxonomy_PanelResizer$remove_panelResizeEnd(value) {ULSX8o:;
        this.get_events().addHandler('panelResizeEnd', value);
    },
    
    $1C_2: function Microsoft_SharePoint_Taxonomy_PanelResizer$$1C_2() {ULSX8o:;
        var $v_0 = this.get_events().getHandler('panelResizeBegin');
        if ($v_0) {
            $v_0(this, null);
        }
    },
    
    $1D_2: function Microsoft_SharePoint_Taxonomy_PanelResizer$$1D_2() {ULSX8o:;
        var $v_0 = this.get_events().getHandler('panelResizeEnd');
        if ($v_0) {
            $v_0(this, null);
        }
    }
}


Microsoft.SharePoint.Taxonomy.SelectionMadeEventArgs = function Microsoft_SharePoint_Taxonomy_SelectionMadeEventArgs(result) {ULSX8o:;
    Microsoft.SharePoint.Taxonomy.SelectionMadeEventArgs.initializeBase(this);
    this.results = result;
}
Microsoft.SharePoint.Taxonomy.SelectionMadeEventArgs.prototype = {
    results: null
}


Microsoft.SharePoint.Taxonomy.SuggestionContainer = function Microsoft_SharePoint_Taxonomy_SuggestionContainer(container) {ULSX8o:;
    this.$$d_$1b_2 = Function.createDelegate(this, this.$1b_2);
    this.$$d_$2N_2 = Function.createDelegate(this, this.$2N_2);
    this.$$d_$x_2 = Function.createDelegate(this, this.$x_2);
    this.$$d_$w_2 = Function.createDelegate(this, this.$w_2);
    Microsoft.SharePoint.Taxonomy.SuggestionContainer.initializeBase(this, [ container ]);
    Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.assertNotNull('container', container);
    this.$2_2 = container;
    if (!Sys.UI.DomElement.containsCssClass(this.$2_2, 'ms-taxonomy-suggestion-container')) {
        Sys.UI.DomElement.addCssClass(this.$2_2, 'ms-taxonomy-suggestion-container');
        Sys.UI.DomElement.addCssClass(this.$2_2, 'ms-rtefocus-invalid');
        Microsoft.SharePoint.Taxonomy.SuggestionContainer.$g(this.$2_2);
        var $v_0 = document.createElement('DIV');
        Sys.UI.DomElement.addCssClass($v_0, 'ms-taxonomy-suggestion-holder');
        this.$3_2 = container.appendChild($v_0);
        Microsoft.SharePoint.Taxonomy.SuggestionContainer.$g(this.$3_2);
        var $v_1 = document.createElement('IMG');
        var $v_2 = document.createAttribute('src');
        $v_2.value = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'images/CornerGrip.gif';
        $v_1.attributes.setNamedItem($v_2);
        Microsoft.SharePoint.Taxonomy.SuggestionContainer.$g($v_1);
        Sys.UI.DomElement.addCssClass($v_1, 'ms-taxonomy-panel-resizer');
        this.$1Z_2 = container.appendChild($v_1);
        $addHandler($v_1, 'mousedown', this.$$d_$w_2);
        this.set_$1V_2(false);
    }
    else {
        this.$3_2 = this.$2_2.firstChild;
        this.$1Z_2 = this.$2_2.lastChild;
    }
    this.$M_2 = new Sys.UI.Point(0, 0);
    this.$K_2 = new Sys.UI.Point(0, 0);
    this.$P_2 = (document.documentElement.getAttribute('dir') === 'rtl');
}
Microsoft.SharePoint.Taxonomy.SuggestionContainer.$g = function Microsoft_SharePoint_Taxonomy_SuggestionContainer$$g($p0) {
    var $v_0 = document.createAttribute('unselectable');
    $v_0.value = 'on';
    $p0.attributes.setNamedItem($v_0);
}
Microsoft.SharePoint.Taxonomy.SuggestionContainer.prototype = {
    $2_2: null,
    $3_2: null,
    $1Z_2: null,
    $M_2: null,
    $K_2: null,
    $P_2: false,
    
    $w_2: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$$w_2($p0) {
        this.$1C_2();
        if (this.$E_2) {
            $removeHandler(document.documentElement, 'mouseup', this.$E_2);
        }
        if (this.$Q_2) {
            $removeHandler(document.documentElement, 'mousemove', this.$Q_2);
        }
        this.$M_2.x = $p0.clientX;
        this.$M_2.y = $p0.clientY;
        this.$E_2 = this.$$d_$x_2;
        $addHandler(document.documentElement, 'mouseup', this.$E_2);
        this.$Q_2 = this.$$d_$2N_2;
        $addHandler(document.documentElement, 'mousemove', this.$Q_2);
        $p0.preventDefault();
    },
    
    $2N_2: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$$2N_2($p0) {
        $p0.preventDefault();
        this.$K_2.x = $p0.clientX;
        this.$K_2.y = $p0.clientY;
        var $v_0 = this.$K_2.x - this.$M_2.x;
        if (this.$P_2) {
            $v_0 = -$v_0;
        }
        var $v_1 = this.$K_2.y - this.$M_2.y;
        var $v_2 = this.width() + $v_0;
        var $v_3 = this.height() + $v_1;
        this.$M_2.x = this.$K_2.x;
        this.$M_2.y = this.$K_2.y;
        this.setWidth($v_2);
        this.setHeight($v_3);
    },
    
    $x_2: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$$x_2($p0) {
        $removeHandler(document.documentElement, 'mouseup', this.$E_2);
        $removeHandler(document.documentElement, 'mousemove', this.$Q_2);
        this.$E_2 = null;
        this.$Q_2 = null;
        this.$1D_2();
    },
    
    clear: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$clear() {ULSX8o:;
        var $v_0 = this.$3_2.childNodes.length;
        for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
            this.$3_2.removeChild(this.$3_2.firstChild);
        }
    },
    
    offset: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$offset() {ULSX8o:;
        return ((!this.$2_2.offsetParent) ? 0 : this.$2_2.offsetParent.offsetTop) + this.$2_2.offsetTop;
    },
    
    height: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$height() {ULSX8o:;
        return this.$2_2.clientHeight;
    },
    
    width: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$width() {ULSX8o:;
        return this.$2_2.clientWidth;
    },
    
    resetHeight: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$resetHeight() {ULSX8o:;
        this.$2_2.style.height = '';
        this.$3_2.style.height = '';
    },
    
    setHeight: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$setHeight(height) {ULSX8o:;
        height -= 15;
        if (height < 44) {
            height = 44;
        }
        var $v_0 = height.toString() + 'px';
        this.$2_2.style.height = $v_0;
        this.$3_2.style.height = $v_0;
    },
    
    setWidth: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$setWidth(width) {ULSX8o:;
        if (width < 15) {
            width = 15;
        }
        var $v_0 = width.toString() + 'px';
        this.$2_2.style.width = $v_0;
        this.$3_2.style.width = $v_0;
    },
    
    setPosition: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$setPosition(top, left) {ULSX8o:;
        if (top > 0) {
            var $v_0 = top.toString() + 'px';
            this.$2_2.style.top = $v_0;
        }
        if (left > 0) {
            var $v_1 = left.toString() + 'px';
            this.$2_2.style.left = $v_1;
        }
    },
    
    clearHighlight: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$clearHighlight() {ULSX8o:;
        for (var $v_0 = 0; $v_0 < this.$3_2.childNodes.length; $v_0++) {
            var $v_1 = new Microsoft.SharePoint.Taxonomy.SuggestionGroup(this.$3_2.childNodes[$v_0]);
            if ($v_1.$1v_2()) {
                break;
            }
        }
    },
    
    getHighlightedSuggestion: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$getHighlightedSuggestion() {ULSX8o:;
        var $v_0 = null;
        for (var $v_1 = 0; $v_1 < this.$3_2.childNodes.length; $v_1++) {
            var $v_2 = new Microsoft.SharePoint.Taxonomy.SuggestionGroup(this.$3_2.childNodes[$v_1]);
            $v_0 = $v_2.$1K_2();
            if ($v_0) {
                break;
            }
        }
        return $v_0;
    },
    
    getCurrentStartsWith: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$getCurrentStartsWith() {ULSX8o:;
        var $v_0 = '';
        if (this.$3_2.childNodes.length > 0) {
            var $v_1 = new Microsoft.SharePoint.Taxonomy.SuggestionGroup(this.$3_2.childNodes[0]);
            $v_0 = $v_1.get_startsWith();
        }
        return $v_0;
    },
    
    get_$1V_2: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$get_$1V_2() {ULSX8o:;
        return this.$3_2.needsNewRequest;
    },
    set_$1V_2: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$set_$1V_2($p0) {
        this.$3_2.needsNewRequest = $p0;
        return $p0;
    },
    
    get_addCreateNewWhileTrimming: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$get_addCreateNewWhileTrimming() {ULSX8o:;
        return this.$3_2.addCreateNewWhileTrimming;
    },
    set_addCreateNewWhileTrimming: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$set_addCreateNewWhileTrimming(value) {ULSX8o:;
        this.$3_2.addCreateNewWhileTrimming = value;
        return value;
    },
    
    get_isSpanTermSets: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$get_isSpanTermSets() {ULSX8o:;
        return this.$3_2.isSpanTermSets;
    },
    set_isSpanTermSets: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$set_isSpanTermSets(value) {ULSX8o:;
        this.$3_2.isSpanTermSets = value;
        return value;
    },
    
    toggleHighlight: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$toggleHighlight(up) {ULSX8o:;
        var $v_0 = null;
        var $v_1 = null;
        var $v_2 = false;
        var $v_3 = null;
        for (var $v_4 = 0; $v_4 < this.$3_2.childNodes.length; $v_4++) {
            var $v_5 = new Microsoft.SharePoint.Taxonomy.SuggestionGroup(this.$3_2.childNodes[$v_4]);
            if ($v_2) {
                $v_3 = $v_5.$p_2();
                $v_1 = $v_5;
                $v_2 = false;
                break;
            }
            var $v_6 = $v_5.$2b_2(up);
            if ($v_6 === 1) {
                $v_3 = $v_5.$1K_2();
                $v_1 = $v_5;
                break;
            }
            else if ($v_6 === 3) {
                if (up) {
                    if ($v_0) {
                        $v_3 = $v_0.$1P_2();
                        $v_1 = $v_0;
                        break;
                    }
                    else {
                        var $v_7 = new Microsoft.SharePoint.Taxonomy.SuggestionGroup(this.$3_2.lastChild);
                        $v_3 = $v_7.$1P_2();
                        $v_1 = $v_7;
                        break;
                    }
                }
                else {
                    $v_2 = true;
                }
            }
            $v_0 = $v_5;
        }
        if ($v_2) {
            var $v_8 = new Microsoft.SharePoint.Taxonomy.SuggestionGroup(this.$3_2.firstChild);
            $v_3 = $v_8.$p_2();
            $v_1 = $v_8;
        }
        if ($v_3 && $v_1) {
            this.$2V_2($v_3, $v_1);
        }
        else {
            if (this.$3_2.childNodes.length > 0) {
                var $v_9 = new Microsoft.SharePoint.Taxonomy.SuggestionGroup(this.$3_2.childNodes[0]);
                $v_9.$p_2();
            }
        }
    },
    
    $2V_2: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$$2V_2($p0, $p1) {
        var $v_0 = $p1.$9_2.offsetTop + $p1.$D_2.clientHeight + $p0.$4_2.offsetTop;
        if ($v_0 - this.$2_2.scrollTop < 0) {
            this.$2_2.scrollTop = $v_0;
        }
        else {
            var $v_1 = $v_0 + $p0.$4_2.clientHeight;
            var $v_2 = this.$2_2.scrollTop + this.$2_2.clientHeight;
            if ($v_1 > $v_2) {
                this.$2_2.scrollTop += $v_1 - $v_2;
            }
        }
    },
    
    hidePanel: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$hidePanel() {ULSX8o:;
        if (this.$2_2) {
            if (!Sys.UI.DomElement.containsCssClass(this.$2_2, 'ms-taxonomy-hidden')) {
                Sys.UI.DomElement.addCssClass(this.$2_2, 'ms-taxonomy-hidden');
            }
            this.clear();
        }
    },
    
    updateSuggestionsWithTaxonomyResult: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$updateSuggestionsWithTaxonomyResult(result, currentText, startQuery, usedTerms, initiallyHighlight) {ULSX8o:;
        if (currentText.length > 0) {
            if (result && currentText.startsWith(startQuery)) {
                var $v_0 = this.getCurrentStartsWith();
                if (!$v_0 || currentText.length >= $v_0.length || !currentText.startsWith($v_0)) {
                    this.clear();
                    this.resetHeight();
                    this.set_$1V_2(false);
                    var $v_1 = result.Groups;
                    if ($v_1) {
                        var $v_5 = false;
                        var $v_6 = false;
                        for (var $v_7 = 0; $v_7 < $v_1.length; $v_7++) {
                            var $v_8 = null;
                            var $v_9 = $v_1[$v_7].Suggestions;
                            if ($v_9) {
                                var $v_A = $v_1[$v_7].IsNewKeyword;
                                for (var $v_B = 0; $v_B < $v_9.length; $v_B++) {
                                    if (!usedTerms[$v_9[$v_B].Id]) {
                                        if (!$v_8) {
                                            $v_8 = this.addSuggestionGroup($v_1[$v_7].Header, 1, startQuery, $v_A);
                                        }
                                        var $v_C = $v_9[$v_B].Starts;
                                        var $v_D = $v_9[$v_B].Completions;
                                        var $v_E = $v_9[$v_B].Id;
                                        var $v_F = $v_9[$v_B].Paths;
                                        var $v_G = $v_9[$v_B].DefaultLabel;
                                        var $v_H = $v_9[$v_B].IsSynonym;
                                        var $v_I = $v_9[$v_B].IsKeyword;
                                        var $v_J = $v_9[$v_B].Synonyms;
                                        var $v_K = $v_9[$v_B].Description;
                                        if (($v_I || !($v_A || this.get_isSpanTermSets())) && $v_G.length === currentText.length) {
                                            $v_6 = true;
                                        }
                                        var $v_L;
                                        if ($v_A) {
                                            $v_L = $v_K;
                                        }
                                        else {
                                            $v_L = this.$28_2($v_G, $v_F, $v_K, $v_J);
                                        }
                                        var $v_M = $v_8.addSuggestion($v_C, $v_D, $v_F, $v_G, $v_H, $v_I, $v_E, $v_L);
                                        if (!$v_A && !$v_5) {
                                            if (initiallyHighlight) {
                                                $v_M.highlight(true);
                                            }
                                            $v_5 = true;
                                        }
                                    }
                                }
                            }
                            if ($v_8 && $v_8.get_isNewKeyword()) {
                                if ($v_6) {
                                    $v_8.hide();
                                }
                            }
                        }
                        if ($v_5) {
                            this.showPanel();
                        }
                        else {
                            this.hidePanel();
                        }
                    }
                    var $v_2;
                    if (window.top.location !== window.location) {
                        $v_2 = document.documentElement.scrollHeight;
                    }
                    else {
                        $v_2 = document.body.scrollHeight;
                    }
                    var $v_3 = this.offset();
                    var $v_4 = this.height();
                    if (($v_3 + $v_4) > $v_2) {
                        this.setHeight($v_2 - $v_3);
                    }
                }
            }
        }
        else {
            this.hidePanel();
        }
    },
    
    $28_2: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$$28_2($p0, $p1, $p2, $p3) {
        var $v_0 = new Sys.StringBuilder($p0);
        if (this.$P_2) {
            $v_0.append('\u200f');
        }
        for (var $v_1 = 0; $v_1 < $p1.length; $v_1++) {
            if ($v_1 > 0) {
                $v_0.appendLine();
            }
            $v_0.append($p1[$v_1]);
            if (this.$P_2) {
                $v_0.append('\u200f');
            }
        }
        if ($p2 !== '') {
            $v_0.appendLine();
            $v_0.append('\"');
            $v_0.append($p2);
            $v_0.append('\"');
        }
        if ($p3 !== '') {
            $v_0.appendLine();
            $v_0.append(Microsoft.SharePoint.Taxonomy.ScriptResources.webTaggingUI_Tooltip_Synonyms);
            if (this.$P_2) {
                $v_0.append('\u200f');
            }
            $v_0.append($p3);
            if (this.$P_2) {
                $v_0.append('\u200f');
            }
        }
        return $v_0.toString();
    },
    
    showPanel: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$showPanel() {ULSX8o:;
        if (this.$3_2.childNodes.length > 0) {
            if (Sys.UI.DomElement.containsCssClass(this.$2_2, 'ms-taxonomy-hidden')) {
                var $v_0 = this.$2_2.parentNode;
                var $v_1 = ($v_0.clientWidth) ? $v_0.clientWidth : ($v_0.offsetWidth) ? $v_0.offsetWidth : 15;
                this.setWidth($v_1);
                Sys.UI.DomElement.removeCssClass(this.$2_2, 'ms-taxonomy-hidden');
            }
        }
        else {
            Sys.UI.DomElement.addCssClass(this.$2_2, 'ms-taxonomy-hidden');
        }
    },
    
    addSuggestionGroup: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$addSuggestionGroup(title, columns, startsWith, isNewKeyword) {ULSX8o:;
        var $v_0 = document.createElement('DIV');
        $v_0.id = this.$2_2.id + 'Group' + this.$3_2.childNodes.length;
        $v_0 = this.$3_2.appendChild($v_0);
        var $v_1 = new Microsoft.SharePoint.Taxonomy.SuggestionGroup($v_0, columns);
        $v_1.setTitle(title);
        $v_1.set_startsWith(startsWith);
        $v_1.set_isNewKeyword(isNewKeyword);
        $v_1.add_$1d_2(this.$$d_$1b_2);
        return $v_1;
    },
    
    $1b_2: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$$1b_2($p0, $p1) {
        if ($p1 && $p1.results) {
            this.$i_2($p1.results);
        }
    },
    
    add_panelResizeBegin: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$add_panelResizeBegin(value) {ULSX8o:;
        this.get_events().addHandler('panelResizeBegin', value);
    },
    remove_panelResizeBegin: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$remove_panelResizeBegin(value) {ULSX8o:;
        this.get_events().removeHandler('panelResizeBegin', value);
    },
    
    add_panelResizeEnd: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$add_panelResizeEnd(value) {ULSX8o:;
        this.get_events().addHandler('panelResizeEnd', value);
    },
    remove_panelResizeEnd: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$remove_panelResizeEnd(value) {ULSX8o:;
        this.get_events().removeHandler('panelResizeEnd', value);
    },
    
    add_selectionMade: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$add_selectionMade(value) {ULSX8o:;
        this.get_events().addHandler('selectionMade', value);
    },
    remove_selectionMade: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$remove_selectionMade(value) {ULSX8o:;
        this.get_events().removeHandler('selectionMade', value);
    },
    
    get_isResizing: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$get_isResizing() {ULSX8o:;
        if (this.$2_2.resizing) {
            return this.$2_2.resizing;
        }
        else {
            return false;
        }
    },
    
    get_isShowing: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$get_isShowing() {ULSX8o:;
        return !Sys.UI.DomElement.containsCssClass(this.$2_2, 'ms-taxonomy-hidden');
    },
    
    $1C_2: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$$1C_2() {ULSX8o:;
        var $v_0 = this.get_events().getHandler('panelResizeBegin');
        if ($v_0) {
            $v_0(this, null);
        }
    },
    
    $1D_2: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$$1D_2() {ULSX8o:;
        var $v_0 = this.get_events().getHandler('panelResizeEnd');
        if ($v_0) {
            $v_0(this, null);
        }
    },
    
    $i_2: function Microsoft_SharePoint_Taxonomy_SuggestionContainer$$i_2($p0) {
        var $v_0 = this.get_events().getHandler('selectionMade');
        if ($v_0) {
            var $v_1 = new Microsoft.SharePoint.Taxonomy.SelectionMadeEventArgs($p0);
            $v_0(this, $v_1);
        }
    },
    
    $E_2: null,
    $Q_2: null
}


Microsoft.SharePoint.Taxonomy.SuggestionGroup = function Microsoft_SharePoint_Taxonomy_SuggestionGroup(container, columns) {ULSX8o:;
    this.$$d_$1b_2 = Function.createDelegate(this, this.$1b_2);
    Microsoft.SharePoint.Taxonomy.SuggestionGroup.initializeBase(this, [ container ]);
    if (arguments.length === 1) {
        this.$9_2 = container;
        this.$D_2 = $get(container.id + 'Title');
        this.$6_2 = $get(this.$9_2.id + 'TableBody');
    }
    else {
        Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.assertNotNull('container', container);
        this.$9_2 = container;
        this.$D_2 = $get(container.id + 'Title');
        if (!this.$D_2) {
            this.$D_2 = document.createElement('DIV');
            this.$D_2.id = this.$9_2.id + 'Title';
            this.$D_2 = this.$9_2.appendChild(this.$D_2);
            Sys.UI.DomElement.addCssClass(this.$D_2, 'ms-taxonomy-suggestion-group-title');
        }
        if (!Sys.UI.DomElement.containsCssClass(this.$9_2, 'ms-taxonomy-suggestion-group')) {
            Sys.UI.DomElement.addCssClass(this.$9_2, 'ms-taxonomy-suggestion-group');
        }
        this.$6_2 = $get(this.$9_2.id + 'TableBody');
        if (!this.$6_2) {
            var $v_0 = document.createElement('TABLE');
            Sys.UI.DomElement.addCssClass($v_0, 'ms-taxonomy-table');
            this.$6_2 = document.createElement('TBODY');
            this.$6_2.id = this.$9_2.id + 'TableBody';
            this.$6_2 = $v_0.appendChild(this.$6_2);
            this.$9_2.appendChild($v_0);
        }
        this.set_startsWith('');
        this.$9_2.Columns = columns;
    }
}
Microsoft.SharePoint.Taxonomy.SuggestionGroup.prototype = {
    $9_2: null,
    $D_2: null,
    $6_2: null,
    
    setNewKeywordText: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$setNewKeywordText(text) {ULSX8o:;
        if (this.get_isNewKeyword()) {
            var $v_0 = new Microsoft.SharePoint.Taxonomy.Suggestion(this.$6_2.firstChild);
            $v_0.set_suggestValue(text + '|' + '22222222-2222-2222-2222-222222222222');
        }
    },
    
    hide: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$hide() {ULSX8o:;
        this.$9_2.style.display = 'none';
    },
    
    show: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$show() {ULSX8o:;
        this.$9_2.style.display = '';
    },
    
    $p_2: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$$p_2() {ULSX8o:;
        var $v_0 = new Microsoft.SharePoint.Taxonomy.Suggestion(this.$6_2.firstChild);
        $v_0.highlight(true);
        return $v_0;
    },
    
    $1P_2: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$$1P_2() {ULSX8o:;
        var $v_0 = new Microsoft.SharePoint.Taxonomy.Suggestion(this.$6_2.lastChild);
        $v_0.highlight(true);
        return $v_0;
    },
    
    $1v_2: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$$1v_2() {ULSX8o:;
        for (var $v_0 = 0; $v_0 < this.$6_2.childNodes.length; $v_0++) {
            var $v_1 = new Microsoft.SharePoint.Taxonomy.Suggestion(this.$6_2.childNodes[$v_0]);
            if ($v_1.get_isHighlit()) {
                $v_1.highlight(false);
                return true;
            }
        }
        return false;
    },
    
    $1K_2: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$$1K_2() {ULSX8o:;
        for (var $v_0 = 0; $v_0 < this.$6_2.childNodes.length; $v_0++) {
            var $v_1 = new Microsoft.SharePoint.Taxonomy.Suggestion(this.$6_2.childNodes[$v_0]);
            if ($v_1.get_isHighlit()) {
                return $v_1;
            }
        }
        return null;
    },
    
    $2b_2: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$$2b_2($p0) {
        var $v_0 = false;
        var $v_1 = null;
        for (var $v_2 = 0; $v_2 < this.$6_2.childNodes.length; $v_2++) {
            var $v_3 = new Microsoft.SharePoint.Taxonomy.Suggestion(this.$6_2.childNodes[$v_2]);
            if ($v_0) {
                $v_3.highlight(true);
                return 1;
            }
            if ($v_3.get_isHighlit()) {
                $v_3.highlight(false);
                if ($p0) {
                    if ($v_1) {
                        $v_1.highlight(true);
                        return 1;
                    }
                    else {
                        return 3;
                    }
                }
                else {
                    $v_0 = true;
                }
            }
            $v_1 = $v_3;
        }
        if ($v_0) {
            return 3;
        }
        else {
            return 2;
        }
    },
    
    get_startsWith: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$get_startsWith() {ULSX8o:;
        return this.$9_2.startsWith;
    },
    set_startsWith: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$set_startsWith(value) {ULSX8o:;
        this.$9_2.startsWith = value;
        return value;
    },
    
    get_isNewKeyword: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$get_isNewKeyword() {ULSX8o:;
        return this.$9_2.isNewKeyword;
    },
    set_isNewKeyword: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$set_isNewKeyword(value) {ULSX8o:;
        this.$9_2.isNewKeyword = value;
        return value;
    },
    
    setTitle: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$setTitle(titleText) {ULSX8o:;
        this.$D_2.innerHTML = titleText;
    },
    
    addSuggestion: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$addSuggestion(starts, completions, paths, fullText, isSynonym, isKeyword, id, toolTip) {ULSX8o:;
        var $v_0 = document.createElement('TR');
        $v_0 = this.$6_2.appendChild($v_0);
        var $v_1 = this.get_startsWith();
        if (!isSynonym && !isKeyword && starts && starts.length === 1 && !(starts[0]).length && id === '22222222-2222-2222-2222-222222222222') {
            $v_1 = '';
        }
        var $v_2 = new Microsoft.SharePoint.Taxonomy.Suggestion($v_0, $v_1, starts, completions, paths, fullText, isSynonym, isKeyword, id, toolTip);
        $v_2.add_$1d_2(this.$$d_$1b_2);
        return $v_2;
    },
    
    suggestionCount: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$suggestionCount() {ULSX8o:;
        if (this.$6_2) {
            return this.$6_2.childNodes.length;
        }
        else {
            return 0;
        }
    },
    
    get_hasSuggestions: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$get_hasSuggestions() {ULSX8o:;
        return !!this.$6_2 && this.$6_2.childNodes.length > 0;
    },
    
    $1b_2: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$$1b_2($p0, $p1) {
        if ($p1 && $p1.results) {
            this.$i_2($p1.results);
        }
    },
    
    add_$1d_2: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$add_$1d_2($p0) {
        this.get_events().addHandler('selectionMade', $p0);
    },
    remove_$1d_2: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$remove_$1d_2($p0) {
        this.get_events().removeHandler('selectionMade', $p0);
    },
    
    $i_2: function Microsoft_SharePoint_Taxonomy_SuggestionGroup$$i_2($p0) {
        var $v_0 = this.get_events().getHandler('selectionMade');
        if ($v_0) {
            var $v_1 = new Microsoft.SharePoint.Taxonomy.SelectionMadeEventArgs($p0);
            $v_0(this, $v_1);
        }
    }
}


Microsoft.SharePoint.Taxonomy.Suggestion = function Microsoft_SharePoint_Taxonomy_Suggestion(container, originalStart, starts, completions, paths, fullText, isSynonym, isKeyword, id, tooltip) {ULSX8o:;
    this.$$d_$x_2 = Function.createDelegate(this, this.$x_2);
    this.$$d_$w_2 = Function.createDelegate(this, this.$w_2);
    this.$$d_$2O_2 = Function.createDelegate(this, this.$2O_2);
    Microsoft.SharePoint.Taxonomy.Suggestion.initializeBase(this, [ container ]);
    this.$u_2 = (document.documentElement.dir === 'rtl');
    if (arguments.length === 1) {
        this.$4_2 = container;
        this.$F_2 = this.$4_2.firstChild;
    }
    else {
        Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.assert('Unmatched starts and completions', starts.length === completions.length);
        Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.assertNotNull('container', container);
        this.$4_2 = container;
        this.$4_2.title = tooltip;
        $addHandler(this.$4_2, 'mouseover', this.$$d_$2O_2);
        $addHandler(this.$4_2, 'mousedown', this.$$d_$w_2);
        $addHandler(this.$4_2, 'mouseup', this.$$d_$x_2);
        var $v_0 = new Array(completions.length);
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            $v_0[$v_1] = starts[$v_1] + completions[$v_1];
        }
        this.set_labels($v_0);
        this.set_paths(paths);
        this.set_fullText(fullText);
        this.set_isSynonym(isSynonym);
        this.set_isKeyword(isKeyword);
        this.updateTableHtml(originalStart);
        this.set_suggestValue(fullText + '|' + id);
    }
}
Microsoft.SharePoint.Taxonomy.Suggestion.prototype = {
    $4_2: null,
    $F_2: null,
    $u_2: false,
    
    updateTableHtml: function Microsoft_SharePoint_Taxonomy_Suggestion$updateTableHtml(start) {ULSX8o:;
        var $v_0 = this.$4_2.childNodes.length;
        for (var $v_2 = 0; $v_2 < $v_0; $v_2++) {
            this.$4_2.removeChild(this.$4_2.firstChild);
        }
        var $v_1 = this.getTaxonomySuggestionHtml(start);
        this.$F_2 = document.createElement('td');
        this.$F_2.innerHTML = $v_1;
        Sys.UI.DomElement.addCssClass(this.$F_2, 'ms-taxonomy-column');
        this.$4_2.appendChild(this.$F_2);
    },
    
    highlight: function Microsoft_SharePoint_Taxonomy_Suggestion$highlight(highlight) {ULSX8o:;
        if (highlight) {
            if (!Sys.UI.DomElement.containsCssClass(this.$F_2, 'ms-taxonomy-highlighted')) {
                Sys.UI.DomElement.addCssClass(this.$F_2, 'ms-taxonomy-highlighted');
            }
        }
        else {
            Sys.UI.DomElement.removeCssClass(this.$F_2, 'ms-taxonomy-highlighted');
        }
    },
    
    get_isHighlit: function Microsoft_SharePoint_Taxonomy_Suggestion$get_isHighlit() {ULSX8o:;
        return Sys.UI.DomElement.containsCssClass(this.$F_2, 'ms-taxonomy-highlighted');
    },
    
    getTaxonomySuggestionHtml: function Microsoft_SharePoint_Taxonomy_Suggestion$getTaxonomySuggestionHtml(matchText) {ULSX8o:;
        var $v_0 = new Sys.StringBuilder();
        if (this.$u_2) {
            matchText = '';
        }
        var $v_1 = false;
        matchText = matchText.toLowerCase();
        for (var $v_3 = 0; $v_3 < this.get_labels().length; $v_3++) {
            var $v_4 = this.get_labels()[$v_3];
            var $v_5 = $v_4.substring(0, matchText.length);
            var $v_6 = (this.get_isSynonym() && this.get_fullText() !== $v_4);
            var $v_7 = new Sys.StringBuilder();
            if ($v_6) {
                this.$G_2($v_7, 'suggestion-non-match-text', !$v_1, this.get_fullText());
                $v_7.append(' ');
                this.$G_2($v_7, 'suggestion-non-match-text', true, '(');
                this.$G_2($v_7, 'suggestion-match-text', true, $v_5);
            }
            else if (!SP.ScriptUtility.isNullOrEmptyString(matchText)) {
                this.$G_2($v_7, 'suggestion-match-text', true, this.get_fullText().substring(0, matchText.length));
            }
            this.$G_2($v_7, 'suggestion-non-match-text', true, $v_4.substring(matchText.length, $v_4.length));
            if ($v_6) {
                this.$G_2($v_7, 'suggestion-non-match-text', true, ')');
            }
            var $v_8 = $v_7.toString();
            if ($v_1) {
                $v_0.append('<br />');
            }
            $v_0.append($v_8);
            for (var $v_9 = 0; $v_9 < this.get_paths().length; $v_9++) {
                if ($v_9 > 0) {
                    $v_0.append('<br />');
                    this.$G_2($v_0, null, false, $v_8);
                }
                this.$G_2($v_0, 'suggestion-path', true, this.get_paths()[$v_9]);
            }
            $v_1 = true;
        }
        var $v_2 = $v_0.toString();
        return $v_2;
    },
    
    $G_2: function Microsoft_SharePoint_Taxonomy_Suggestion$$G_2($p0, $p1, $p2, $p3) {
        this.$1t_2($p0, $p1, $p2);
        $p0.append($p3);
        $p0.append('</span>');
    },
    
    $1t_2: function Microsoft_SharePoint_Taxonomy_Suggestion$$1t_2($p0, $p1, $p2) {
        $p0.append('<span');
        if (this.$u_2) {
            $p0.append(' dir=\"rtl\"');
        }
        if (!SP.ScriptUtility.isNullOrEmptyString($p1)) {
            $p0.append(' class=\"');
            $p0.append($p1);
            $p0.append('\"');
        }
        if (!$p2) {
            $p0.append(' style=\"visibility: hidden\"');
        }
        $p0.append(' unselectable=\"on\">');
    },
    
    get_suggestValue: function Microsoft_SharePoint_Taxonomy_Suggestion$get_suggestValue() {ULSX8o:;
        return this.$4_2.suggestValue;
    },
    set_suggestValue: function Microsoft_SharePoint_Taxonomy_Suggestion$set_suggestValue(value) {ULSX8o:;
        this.$4_2.suggestValue = value;
        return value;
    },
    
    get_labels: function Microsoft_SharePoint_Taxonomy_Suggestion$get_labels() {ULSX8o:;
        return this.$4_2.suggestLabels;
    },
    set_labels: function Microsoft_SharePoint_Taxonomy_Suggestion$set_labels(value) {ULSX8o:;
        this.$4_2.suggestLabels = value;
        return value;
    },
    
    get_paths: function Microsoft_SharePoint_Taxonomy_Suggestion$get_paths() {ULSX8o:;
        return this.$4_2.suggestPaths;
    },
    set_paths: function Microsoft_SharePoint_Taxonomy_Suggestion$set_paths(value) {ULSX8o:;
        this.$4_2.suggestPaths = value;
        return value;
    },
    
    get_fullText: function Microsoft_SharePoint_Taxonomy_Suggestion$get_fullText() {ULSX8o:;
        return this.$4_2.suggestFullText;
    },
    set_fullText: function Microsoft_SharePoint_Taxonomy_Suggestion$set_fullText(value) {ULSX8o:;
        this.$4_2.suggestFullText = value;
        return value;
    },
    
    get_isSynonym: function Microsoft_SharePoint_Taxonomy_Suggestion$get_isSynonym() {ULSX8o:;
        return this.$4_2.suggestIsSynonym;
    },
    set_isSynonym: function Microsoft_SharePoint_Taxonomy_Suggestion$set_isSynonym(value) {ULSX8o:;
        this.$4_2.suggestIsSynonym = value;
        return value;
    },
    
    get_isKeyword: function Microsoft_SharePoint_Taxonomy_Suggestion$get_isKeyword() {ULSX8o:;
        return this.$4_2.suggestIsKeyword;
    },
    set_isKeyword: function Microsoft_SharePoint_Taxonomy_Suggestion$set_isKeyword(value) {ULSX8o:;
        this.$4_2.suggestIsKeyword = value;
        return value;
    },
    
    $2O_2: function Microsoft_SharePoint_Taxonomy_Suggestion$$2O_2($p0) {
        if (!this.get_isHighlit()) {
            var $v_0 = new Microsoft.SharePoint.Taxonomy.SuggestionContainer(this.$4_2.parentNode.parentNode.parentNode.parentNode.parentNode);
            $v_0.clearHighlight();
            this.highlight(true);
        }
    },
    
    $w_2: function Microsoft_SharePoint_Taxonomy_Suggestion$$w_2($p0) {
        $p0.stopPropagation();
        $p0.preventDefault();
    },
    
    $x_2: function Microsoft_SharePoint_Taxonomy_Suggestion$$x_2($p0) {
        this.$i_2(this.get_id());
    },
    
    add_$1d_2: function Microsoft_SharePoint_Taxonomy_Suggestion$add_$1d_2($p0) {
        this.get_events().addHandler('selectionMade', $p0);
    },
    remove_$1d_2: function Microsoft_SharePoint_Taxonomy_Suggestion$remove_$1d_2($p0) {
        this.get_events().removeHandler('selectionMade', $p0);
    },
    
    $i_2: function Microsoft_SharePoint_Taxonomy_Suggestion$$i_2($p0) {
        var $v_0 = this.get_events().getHandler('selectionMade');
        if ($v_0) {
            var $v_1 = new Microsoft.SharePoint.Taxonomy.SelectionMadeEventArgs(this.get_suggestValue());
            $v_0(this, $v_1);
        }
    }
}


Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.registerClass('Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI', RTE.Canvas);
Microsoft.SharePoint.Taxonomy.ControlObject.registerClass('Microsoft.SharePoint.Taxonomy.ControlObject', Sys.UI.Behavior);
Microsoft.SharePoint.Taxonomy.Term.registerClass('Microsoft.SharePoint.Taxonomy.Term');
Microsoft.SharePoint.Taxonomy.PanelResizer.registerClass('Microsoft.SharePoint.Taxonomy.PanelResizer', Sys.UI.Behavior);
Microsoft.SharePoint.Taxonomy.SelectionMadeEventArgs.registerClass('Microsoft.SharePoint.Taxonomy.SelectionMadeEventArgs', Sys.EventArgs);
Microsoft.SharePoint.Taxonomy.SuggestionContainer.registerClass('Microsoft.SharePoint.Taxonomy.SuggestionContainer', Sys.UI.Behavior);
Microsoft.SharePoint.Taxonomy.SuggestionGroup.registerClass('Microsoft.SharePoint.Taxonomy.SuggestionGroup', Sys.UI.Behavior);
Microsoft.SharePoint.Taxonomy.Suggestion.registerClass('Microsoft.SharePoint.Taxonomy.Suggestion', Sys.UI.Behavior);
function scriptforwebtaggingui_initialize() {ULSX8o:;
Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.$12 = false;
Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.$Z = false;
Microsoft.SharePoint.Taxonomy.ControlObject.taxonomyMultipleTermDelimiter = ';';
Microsoft.SharePoint.Taxonomy.ControlObject.taxonomyGuidLabelDelimiter = '|';
Microsoft.SharePoint.Taxonomy.ControlObject.$14 = new RegExp('&amp;', 'ig');
Microsoft.SharePoint.Taxonomy.ControlObject.$1S = new RegExp('&lt;', 'ig');
Microsoft.SharePoint.Taxonomy.ControlObject.$1O = new RegExp('&gt;', 'ig');
Microsoft.SharePoint.Taxonomy.ControlObject.$1Y = new RegExp('&quot;', 'ig');
Microsoft.SharePoint.Taxonomy.ControlObject.$1U = new RegExp('&nbsp;', 'ig');
Microsoft.SharePoint.Taxonomy.ControlObject.$1k = new RegExp('&#39;', 'ig');
Microsoft.SharePoint.Taxonomy.ControlObject.$18 = new RegExp('%B', 'ig');
Microsoft.SharePoint.Taxonomy.ControlObject.$1e = new RegExp('%C', 'ig');
Microsoft.SharePoint.Taxonomy.ControlObject.$1X = new RegExp('%P', 'ig');
Microsoft.SharePoint.Taxonomy.ControlObject.$y = new RegExp('(((,|;)(\\s)*(@@MARKER@@)?(\\s)*)|(^(\\s)*(@@MARKER@@)?(\\s)*))\"((.)*?)\"(\\s)*(@@MARKER@@)?(\\s)*(,|;|$)');
Microsoft.SharePoint.Taxonomy.ControlObject.$2D = new RegExp('^(\\s)*(@@MARKER@@)?(\\s)*\"');
Microsoft.SharePoint.Taxonomy.ControlObject.$2c = new RegExp('\"(\\s)*(@@MARKER@@)?(\\s)*$');
Microsoft.SharePoint.Taxonomy.ControlObject.$20 = new RegExp('^(\\s)*<span class=[^>]*>', 'i');
Microsoft.SharePoint.Taxonomy.ControlObject.$1s = new RegExp('&', 'ig');
Microsoft.SharePoint.Taxonomy.ControlObject.$2E = new RegExp('<', 'ig');
Microsoft.SharePoint.Taxonomy.ControlObject.$2A = new RegExp('>', 'ig');
Microsoft.SharePoint.Taxonomy.ControlObject.$2U = new RegExp('\"', 'ig');
Microsoft.SharePoint.Taxonomy.ControlObject.$2F = new RegExp(' ', 'ig');
Microsoft.SharePoint.Taxonomy.ControlObject.$17 = new RegExp('\\|', 'ig');
Microsoft.SharePoint.Taxonomy.ControlObject.$1T = new RegExp(';', 'ig');
Microsoft.SharePoint.Taxonomy.ControlObject.$z = new RegExp('%', 'ig');
Microsoft.SharePoint.Taxonomy.ControlObject.$1n = new RegExp('<SPAN[^>]*>', 'i');
Microsoft.SharePoint.Taxonomy.ControlObject.$1l = new RegExp('</SPAN>', 'i');
Microsoft.SharePoint.Taxonomy.ControlObject.$h = new RegExp('(,|;| )+$', 'i');
Microsoft.SharePoint.Taxonomy.ControlObject.$1m = new RegExp('span', 'i');
Microsoft.SharePoint.Taxonomy.ControlObject.$1o = new RegExp('#text', 'i');
Microsoft.SharePoint.Taxonomy.ControlObject.$1B = '; ';
Microsoft.SharePoint.Taxonomy.ControlObject.$f = String.fromCharCode(160);
Microsoft.SharePoint.Taxonomy.ControlObject.$X = String.fromCharCode(8203);
Microsoft.SharePoint.Taxonomy.ControlObject.$1F = String.fromCharCode(65307);
Microsoft.SharePoint.Taxonomy.ControlObject.$1E = String.fromCharCode(65292);
Microsoft.SharePoint.Taxonomy.Term.invalidGuid = '00000000-0000-0000-0000-000000000000';
Microsoft.SharePoint.Taxonomy.Term.unvalidatedGuid = '11111111-1111-1111-1111-111111111111';
Microsoft.SharePoint.Taxonomy.Term.newTermGuid = '22222222-2222-2222-2222-222222222222';
};
scriptforwebtaggingui_initialize();

RegisterModuleInit("ScriptForWebTaggingUI.js", scriptforwebtaggingui_initialize);

if (typeof(_spBodyOnLoadCalled) == 'undefined' || _spBodyOnLoadCalled)
{
	window.setTimeout(Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.taggingLoad, 0);
}
else
{
	_spBodyOnLoadFunctionNames.push("Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.taggingLoad");
}

if( typeof(Sys) != "undefined" && Sys && Sys.Application )
{
   Sys.Application.notifyScriptLoaded();
}
if (typeof(NotifyScriptLoadedAndExecuteWaitingJobs) != "undefined")
{
    NotifyScriptLoadedAndExecuteWaitingJobs("ScriptForWebTaggingUI.js");
}
