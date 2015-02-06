function ULScP6(){var o=new Object;o.ULSTeamName="Office Server";o.ULSFileName="SP.UI.Taxonomy.js";return o;}

Type.registerNamespace('SP.UI.Taxonomy');

SP.UI.Taxonomy.IEditControl = function() {}
SP.UI.Taxonomy.IEditControl.registerInterface('SP.UI.Taxonomy.IEditControl');


SP.UI.Taxonomy.IWidgetControl = function() {}
SP.UI.Taxonomy.IWidgetControl.registerInterface('SP.UI.Taxonomy.IWidgetControl');


SP.UI.Taxonomy.IPropertyType = function() {}
SP.UI.Taxonomy.IPropertyType.registerInterface('SP.UI.Taxonomy.IPropertyType');


SP.UI.Taxonomy.Constants = function SP_UI_Taxonomy_Constants() {
}


SP.UI.Taxonomy.Utility = function SP_UI_Taxonomy_Utility() {
}
SP.UI.Taxonomy.Utility.$y = function SP_UI_Taxonomy_Utility$$y($p0) {
    return typeof($p0) === 'undefined';
}
SP.UI.Taxonomy.Utility.$X = function SP_UI_Taxonomy_Utility$$X($p0) {
    return typeof($p0) === 'object';
}
SP.UI.Taxonomy.Utility.$j = function SP_UI_Taxonomy_Utility$$j($p0) {
    return typeof($p0) === 'string';
}
SP.UI.Taxonomy.Utility.$A = function SP_UI_Taxonomy_Utility$$A($p0) {
    var $v_0 = null;
    return $p0 === $v_0 || SP.UI.Taxonomy.Utility.$y($p0);
}
SP.UI.Taxonomy.Utility.$G = function SP_UI_Taxonomy_Utility$$G($p0) {
    return (SP.UI.Taxonomy.Utility.$A($p0) || $p0 === '');
}
SP.UI.Taxonomy.Utility.$L = function SP_UI_Taxonomy_Utility$$L($p0) {
    return !SP.UI.Taxonomy.Utility.$A($p0) && SP.UI.Taxonomy.Utility.$X($p0);
}
SP.UI.Taxonomy.Utility.$g = function SP_UI_Taxonomy_Utility$$g($p0) {
    return $p0 + '_$input';
}
SP.UI.Taxonomy.Utility.$e = function SP_UI_Taxonomy_Utility$$e($p0) {
    return $p0 + '_$container';
}
SP.UI.Taxonomy.Utility.$M = function SP_UI_Taxonomy_Utility$$M($p0) {
    return $p0.replace(SP.UI.Taxonomy.Constants.$i, '').toLowerCase();
}
SP.UI.Taxonomy.Utility.$H = function SP_UI_Taxonomy_Utility$$H($p0) {
    if ($p0.stopPropagation) {
        $p0.stopPropagation();
    }
    if ($p0.preventDefault) {
        $p0.preventDefault();
    }
}
SP.UI.Taxonomy.Utility.$S = function SP_UI_Taxonomy_Utility$$S($p0, $p1) {
    if (!$p0) {
        return;
    }
    if (!$p1) {
        return;
    }
    $p0.SspId = $p1.SspId;
    $p0.TermSetId = $p1.TermSetId;
    $p0.AnchorId = $p1.AnchorId;
    $p0.WidthCSS = $p1.WidthCSS;
    $p0.WebServiceUrl = $p1.WebServiceUrl;
    $p0.FieldName = $p1.Title;
    $p0.FieldId = $p1.Id;
    $p0.IsMulti = $p1.AllowMultipleValues;
    $p0.AllowFillIn = $p1.AllowFillIn;
    $p0.IsSpanTermSets = $p1.IsSpanTermSets;
    $p0.IsSpanTermStores = $p1.IsSpanTermStores;
    $p0.IsAddTerms = $p1.IsAddTerms;
    $p0.IsUseCommaAsDelimiter = $p1.IsUseCommaAsDelimiter;
    $p0.Disable = $p1.Disable;
    $p0.IsIgnoreFormatting = false;
    $p0.IsIncludeDeprecated = false;
    $p0.IsIncludeUnavailable = false;
    $p0.IsIncludeTermSetName = false;
    $p0.IsIncludePathData = false;
    $p0.ExcludeKeyword = false;
    $p0.DisplayPickerButton = true;
    $p0.Lcid = $p1.Lcid;
}
SP.UI.Taxonomy.Utility.$b = function SP_UI_Taxonomy_Utility$$b($p0) {
    if (!$p0) {
        return;
    }
    $p0.SspId = '';
    $p0.TermSetId = '';
    $p0.AnchorId = '';
    $p0.WidthCSS = '';
    $p0.WebServiceUrl = '';
    $p0.FieldName = '';
    $p0.FieldId = '';
    $p0.IsMulti = false;
    $p0.AllowFillIn = false;
    $p0.IsSpanTermSets = false;
    $p0.IsSpanTermStores = false;
    $p0.IsAddTerms = false;
    $p0.IsUseCommaAsDelimiter = false;
    $p0.Disable = false;
    $p0.Lcid = 0;
}
SP.UI.Taxonomy.Utility.$u = function SP_UI_Taxonomy_Utility$$u($p0) {
    var $v_0 = $get($p0);
    Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.assertNotNull('containerId', $p0);
    var $v_1 = new Microsoft.SharePoint.Taxonomy.ControlObject($v_0);
    return $v_1.getRawText();
}


SP.UI.Taxonomy.ControlRegistration = function SP_UI_Taxonomy_ControlRegistration() {
}
SP.UI.Taxonomy.ControlRegistration.RegisterGridControls = function SP_UI_Taxonomy_ControlRegistration$RegisterGridControls(parent, customFieldInfo, useCsrDependentControls) {ULScP6:;
    SP.JsGrid.PropertyType.Utils.RegisterEditControl('EDIT_TAXONOMY', function($p1_0) {
        return new SP.UI.Taxonomy.TaxonomyGridControl($p1_0);
    }, []);
    SP.JsGrid.PropertyType.Utils.RegisterWidgetControl('WIDGET_BULKTAGGING', function($p1_0) {
        return new SP.UI.Taxonomy.BulkTaggingWidget($p1_0);
    }, []);
    SP.JsGrid.PropertyType.RegisterNewCustomPropType(new SP.UI.Taxonomy.TaxonomyFieldPropertyType(customFieldInfo), '', (useCsrDependentControls) ? 'EDIT_TAXONOMY' : '', (useCsrDependentControls) ? [ 'WIDGET_BULKTAGGING' ] : []);
    parent.RegisterGridValueToSPListValueConverter('TaxonomyField', SP.UI.Taxonomy.DataConverters.$h);
    parent.RegisterSPListValueToGridValueConverter('TaxonomyField', SP.UI.Taxonomy.DataConverters.$19);
    parent.RegisterGridValueToSPListValueConverter('TaxonomyField_MultiValue', SP.UI.Taxonomy.DataConverters.$h);
    parent.RegisterSPListValueToGridValueConverter('TaxonomyField_MultiValue', SP.UI.Taxonomy.DataConverters.$18);
}


SP.UI.Taxonomy.BulkTaggingWidget = function SP_UI_Taxonomy_BulkTaggingWidget(gridContext) {ULScP6:;
    this.$$d_$15_0 = Function.createDelegate(this, this.$15_0);
    this.$$d_$12_0 = Function.createDelegate(this, this.$12_0);
    this.$$d_$10_0 = Function.createDelegate(this, this.$10_0);
    this.$$d_$13_0 = Function.createDelegate(this, this.$13_0);
    this.$$d_$14_0 = Function.createDelegate(this, this.$14_0);
    this.$$d_$m_0 = Function.createDelegate(this, this.$m_0);
    this.$$d_$k_0 = Function.createDelegate(this, this.$k_0);
    this.$$d_$l_0 = Function.createDelegate(this, this.$l_0);
    this.$$d_$n_0 = Function.createDelegate(this, this.$n_0);
    this.SupportedReadMode = null;
    this.SupportedWriteMode = null;
    this.$3_0 = gridContext;
    this.$c_0();
}
SP.UI.Taxonomy.BulkTaggingWidget.$1D = function SP_UI_Taxonomy_BulkTaggingWidget$$1D($p0, $p1, $p2, $p3) {
    var $v_0 = 0;
    if ($p3 !== 3) {
        if ($p3 === 2 || !SP.UI.Taxonomy.Utility.$L($p0)) {
            $p2.push($p1[0]);
            ++$v_0;
        }
    }
    else {
        for (var $v_1 = 0; $v_1 < $p1.length; $v_1++) {
            if (SP.UI.Taxonomy.JsonTerm.$t($p0, $p1[$v_1])) {
                ++$v_0;
                break;
            }
        }
    }
    return $v_0;
}
SP.UI.Taxonomy.BulkTaggingWidget.$1B = function SP_UI_Taxonomy_BulkTaggingWidget$$1B($p0, $p1, $p2, $p3) {
    var $v_0 = {};
    var $v_1 = 0;
    for (var $v_2 = 0; $v_2 < $p0.length; $v_2++) {
        var $v_3 = $p0[$v_2];
        var $v_4 = SP.UI.Taxonomy.Utility.$M($v_3.TermID);
        var $v_5 = $p1[$v_4];
        if (!$v_5 || $p3 === 3) {
            if ($p3 === 1 || (!$v_5 && $p3 === 3)) {
                $p2.push($v_3);
            }
            else {
                ++$v_1;
            }
        }
        else {
            $p2.push($v_3);
            $v_0[$v_5.TermID] = $v_5;
        }
    }
    if ($p3 !== 3) {
        var $$dict_A = $p1;
        for (var $$key_B in $$dict_A) {
            var $v_6 = { key: $$key_B, value: $$dict_A[$$key_B] };
            var $v_7 = $v_6.value;
            if (!$v_0[$v_7.TermID]) {
                $p2.push($v_6.value);
                ++$v_1;
            }
        }
    }
    return $v_1;
}
SP.UI.Taxonomy.BulkTaggingWidget.prototype = {
    $3_0: null,
    $1_0: null,
    $N_0: null,
    $K_0: false,
    $Q_0: 0,
    $Z_0: false,
    $4_0: null,
    $Y_0: null,
    $T_0: null,
    $6_0: null,
    $8_0: null,
    $B_0: null,
    $C_0: null,
    $2_0: null,
    $0_0: null,
    
    $c_0: function SP_UI_Taxonomy_BulkTaggingWidget$$c_0() {ULScP6:;
        var $v_0 = this.$3_0.parentNode.id + '_$bulktagging';
        this.$4_0 = document.createElement('div');
        this.$4_0.id = $v_0 + 'main';
        this.$4_0.style.cssText = 'z-index:1; visibility:hidden; position:absolute; top:0px; left:0px; background-color:white; border:solid 1px #53A9FF; direction:' + this.$3_0.RTL.ltr + ';';
        var $v_1 = document.createElement('div');
        $v_1.style.margin = '3px 10px 0px 10px';
        $v_1.style.textAlign = this.$3_0.RTL.Right;
        var $v_2 = document.createElement('img');
        $v_2.src = '_layouts/15/images/closexon.png';
        $v_2.alt = SP.JsGrid.Res.close;
        $v_2.title = SP.JsGrid.Res.close;
        $v_2.id = $v_0 + 'cancel';
        $v_2.tabIndex = -1;
        $v_2.style.cursor = 'pointer';
        $v_1.appendChild($v_2);
        this.$4_0.appendChild($v_1);
        var $v_3 = document.createElement('div');
        $v_3.style.padding = '3px 10px 3px 10px';
        this.$6_0 = document.createElement('input');
        this.$6_0.type = 'radio';
        this.$6_0.name = 'action';
        this.$6_0.value = 'set';
        this.$6_0.id = $v_0 + 'bulkset';
        this.$6_0.checked = true;
        $v_3.appendChild(this.$6_0);
        var $v_4 = document.createElement('label');
        $v_4.setAttribute('for', this.$6_0.id);
        $v_4.appendChild(document.createTextNode(Microsoft.SharePoint.Taxonomy.ScriptResources.bulkTaggingSetTerms));
        $v_3.appendChild($v_4);
        $v_3.appendChild(document.createElement('br'));
        this.$8_0 = document.createElement('input');
        this.$8_0.type = 'radio';
        this.$8_0.name = 'action';
        this.$8_0.value = 'add';
        this.$8_0.id = $v_0 + 'bulkadd';
        $v_3.appendChild(this.$8_0);
        var $v_5 = document.createElement('label');
        $v_5.setAttribute('for', this.$8_0.id);
        $v_5.appendChild(document.createTextNode(Microsoft.SharePoint.Taxonomy.ScriptResources.bulkTaggingAddTerms));
        $v_3.appendChild($v_5);
        $v_3.appendChild(document.createElement('br'));
        this.$B_0 = document.createElement('input');
        this.$B_0.type = 'radio';
        this.$B_0.name = 'action';
        this.$B_0.value = 'remove';
        this.$B_0.id = $v_0 + 'bulkremove';
        $v_3.appendChild(this.$B_0);
        var $v_6 = document.createElement('label');
        $v_6.setAttribute('for', this.$B_0.id);
        $v_6.appendChild(document.createTextNode(Microsoft.SharePoint.Taxonomy.ScriptResources.bulkTaggingRemoveTerms));
        $v_3.appendChild($v_6);
        this.$4_0.appendChild($v_3);
        var $v_7 = document.createElement('div');
        $v_7.id = $v_0 + '_webTaggingUI';
        $v_7.style.padding = '3px 10px 10px 10px';
        var $$t_A, $$t_B;
        SP.UI.Taxonomy.TaxonomyGridControl.$R(($$t_A = {'val': this.$C_0}), ($$t_B = {'val': this.$2_0}), $v_7), this.$C_0 = $$t_A.val, this.$2_0 = $$t_B.val;
        this.$2_0.InGridMode = false;
        this.$2_0.DisplayPickerButton = true;
        this.$4_0.appendChild($v_7);
        var $v_8 = document.createElement('div');
        $v_8.style.cssText = String.format('padding:3px 10px 3px 10px; background-color: #53A9FF; text-align:{0}', this.$3_0.RTL.Right);
        var $v_9 = document.createElement('a');
        $v_9.href = 'javascript:;';
        $v_9.title = SP.JsGrid.Res.ok;
        $v_9.id = $v_0 + 'ok';
        $v_9.style.fontWeight = 'bold';
        $v_9.style.color = '#F7F7F7';
        $v_9.appendChild(document.createTextNode(SP.JsGrid.Res.ok));
        $v_8.appendChild($v_9);
        this.$4_0.appendChild($v_8);
        this.$3_0.parentNode.appendChild(this.$4_0);
        this.$0_0 = new Microsoft.SharePoint.Taxonomy.ControlObject(this.$2_0);
        this.$0_0.set_allTermsValid(true);
        this.$Q_0 = this.$4_0.offsetHeight;
        this.$T_0 = $get($v_0 + 'cancel');
        this.$Y_0 = $get($v_0 + 'ok');
    },
    
    $O_0: function SP_UI_Taxonomy_BulkTaggingWidget$$O_0($p0) {
        if ($p0) {
            RTE.CanvasEvents.registerListener(RTE.CanvasEvents.editableRegionChangedEvent, this.$$d_$n_0);
            $addHandler(this.$0_0.get_editableRegion(), 'keypress', this.$$d_$l_0);
            $addHandler(this.$0_0.get_editableRegion(), 'keydown', this.$$d_$k_0);
            $addHandler(this.$0_0.get_editableRegion(), 'mousedown', this.$$d_$m_0);
            $addHandler(this.$4_0, 'mousedown', this.$$d_$14_0);
            $addHandler(this.$4_0, 'click', this.$$d_$13_0);
            $addHandler(this.$T_0, 'click', this.$$d_$10_0);
            $addHandler(this.$Y_0, 'click', this.$$d_$12_0);
        }
        else {
            RTE.CanvasEvents.unRegisterListener(RTE.CanvasEvents.editableRegionChangedEvent, this.$$d_$n_0);
            $clearHandlers(this.$0_0.get_editableRegion());
            $clearHandlers(this.$4_0);
            $clearHandlers(this.$T_0);
            $clearHandlers(this.$Y_0);
        }
    },
    
    $13_0: function SP_UI_Taxonomy_BulkTaggingWidget$$13_0($p0) {
        if (!this.$Z_0) {
            var $$t_1 = this;
            window.setTimeout(function() {ULScP6:;
                $$t_1.$d_0();
            }, 0);
            $p0.stopPropagation();
        }
        this.$Z_0 = false;
    },
    
    $14_0: function SP_UI_Taxonomy_BulkTaggingWidget$$14_0($p0) {
        this.$Z_0 = true;
        $p0.stopPropagation();
    },
    
    $10_0: function SP_UI_Taxonomy_BulkTaggingWidget$$10_0($p0) {
        this.$1_0.NotifyEditComplete(true);
    },
    
    $12_0: function SP_UI_Taxonomy_BulkTaggingWidget$$12_0($p0) {
        if (this.$0_0.get_allTermsValid()) {
            var $v_0 = (this.$6_0.checked) ? 2 : (this.$8_0.checked) ? 1 : 3;
            var $v_1 = this.$0_0.getRawText();
            var $v_2 = SP.UI.Taxonomy.Utility.$G($v_1);
            if (!$v_2) {
                $v_2 = this.$s_0($v_0, $v_1);
            }
            if ($v_2) {
                this.$1_0.NotifyEditComplete(false);
            }
        }
        SP.UI.Taxonomy.Utility.$H($p0);
    },
    
    $n_0: function SP_UI_Taxonomy_BulkTaggingWidget$$n_0($p0, $p1) {
        this.$0_0.validateOnTextChanged();
    },
    
    $k_0: function SP_UI_Taxonomy_BulkTaggingWidget$$k_0($p0) {
        var $v_0 = Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.handleKeyDown($p0, this.$0_0);
        if (!$v_0) {
            switch ($p0.keyCode) {
                case 27:
                    this.$1_0.NotifyEditComplete(true);
                    SP.UI.Taxonomy.Utility.$H($p0);
                    break;
            }
        }
    },
    
    $l_0: function SP_UI_Taxonomy_BulkTaggingWidget$$l_0($p0) {
        Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.handleKeyPress($p0, this.$0_0);
    },
    
    $m_0: function SP_UI_Taxonomy_BulkTaggingWidget$$m_0($p0) {
        if (this.$K_0) {
            SP.UI.Taxonomy.Utility.$H($p0);
        }
    },
    
    $d_0: function SP_UI_Taxonomy_BulkTaggingWidget$$d_0() {ULScP6:;
        this.$0_0.get_editableRegion().focus();
        this.$0_0.focus(true);
        this.$0_0.restoreCursor();
    },
    
    Dispose: function SP_UI_Taxonomy_BulkTaggingWidget$Dispose() {ULScP6:;
        this.$3_0.parentNode.removeChild(this.$4_0);
    },
    
    BindToCell: function SP_UI_Taxonomy_BulkTaggingWidget$BindToCell(newCellContext) {ULScP6:;
        this.$1_0 = newCellContext;
        var $v_0 = this.$1_0.field.GetSingleValuePropType();
        var $v_1 = $v_0.$f_0(this.$1_0.fieldKey);
        SP.UI.Taxonomy.Utility.$S(this.$2_0, $v_1);
    },
    
    Unbind: function SP_UI_Taxonomy_BulkTaggingWidget$Unbind() {ULScP6:;
        this.$C_0.value = '';
        this.$0_0.retrieveTerms();
        SP.UI.Taxonomy.Utility.$b(this.$2_0);
        this.$1_0 = null;
    },
    
    GetIcon: function SP_UI_Taxonomy_BulkTaggingWidget$GetIcon() {ULScP6:;
        var $v_0 = Microsoft.SharePoint.Taxonomy.ScriptResources.bulkTaggingTooltip;
        return new SP.JsGrid.Image('_layouts/15/images/EMMBulkEdit.png').Render($v_0);
    },
    
    Expand: function SP_UI_Taxonomy_BulkTaggingWidget$Expand() {ULScP6:;
        var $v_0 = this.$3_0.jsGridObj;
        var $v_1 = this.$1_0.fieldKey;
        this.$N_0 = SP.UI.Taxonomy.TaxonomyGridControl.$x($v_0, $v_1);
        if (this.$N_0.length > 0) {
            var $v_2 = this.$1_0.cellRect;
            var $v_3 = (this.$1_0.cellExpandSpace.bottom > this.$Q_0 || this.$1_0.cellExpandSpace.top < this.$Q_0) ? ($v_2.y + $v_2.height + 3) : ($v_2.y - this.$Q_0 - 3);
            var $v_4 = this.$4_0.offsetWidth - $v_2.width;
            var $v_5 = (this.$3_0.RTL.bEnabled) ? ((this.$1_0.cellExpandSpace.left >= $v_4) ? $v_2.x - $v_4 : $v_2.x) : ((this.$1_0.cellExpandSpace.right >= $v_4) ? $v_2.x : $v_2.x - $v_4);
            this.$4_0.style.top = $v_3 + 'px';
            this.$4_0.style.left = $v_5 + 'px';
            this.$0_0.clearHeight();
            this.$0_0.updateFieldEditorProperties();
            this.$0_0.updateSuggestionsProperties();
            this.$0_0.setDisplayPickerButton(true);
            this.$0_0.setRawText('');
            this.$0_0.retrieveTerms();
            this.$1_0.NotifyExpandWidget();
            this.$4_0.style.visibility = '';
            this.$K_0 = true;
            var $$t_6 = this;
            window.setTimeout(function() {ULScP6:;
                $$t_6.$d_0();
                $$t_6.$O_0(true);
            }, 0);
        }
        else {
            alert(Microsoft.SharePoint.Taxonomy.ScriptResources.bulkTaggingErrorMultipleColumnsSelected);
        }
    },
    
    Collapse: function SP_UI_Taxonomy_BulkTaggingWidget$Collapse() {ULScP6:;
        if (this.$K_0) {
            this.$O_0(false);
            this.$0_0.focus(false);
            this.$0_0.setRawText('');
            this.$0_0.retrieveTerms();
            this.$K_0 = false;
            this.$4_0.style.visibility = 'hidden';
            this.$1_0.NotifyCollapseWidget();
        }
    },
    
    OnValueChanged: function SP_UI_Taxonomy_BulkTaggingWidget$OnValueChanged(newValue) {
    },
    
    $s_0: function SP_UI_Taxonomy_BulkTaggingWidget$$s_0($p0, $p1) {
        var $v_0 = SP.UI.Taxonomy.DataConverters.$E($p1, true);
        var $v_1 = this.$1_0.field.GetIsMultiValue();
        if (($p0 !== 3) && !$v_1 && $v_0.length > 1) {
            alert(Microsoft.SharePoint.Taxonomy.ScriptResources.bulkTaggingErrorColumnIsSingleValued);
            return false;
        }
        var $v_2 = null;
        if ($v_1) {
            $v_2 = {};
            for (var $v_6 = 0; $v_6 < $v_0.length; $v_6++) {
                var $v_7 = SP.UI.Taxonomy.Utility.$M($v_0[$v_6].TermID);
                $v_2[$v_7] = $v_0[$v_6];
            }
        }
        var $v_3 = this.$3_0.jsGridObj;
        var $v_4 = $v_3._GetPaneManager().GetGridPane();
        var $v_5 = this.$1_0.fieldKey;
        for (var $v_8 = 0; $v_8 < this.$N_0.length; $v_8++) {
            var $v_9 = this.$N_0[$v_8];
            var $v_A = $v_3.GetRecord($v_9.key);
            if ($v_A) {
                var $v_B = $v_A.GetDataValue($v_5);
                if ($p0 !== 3 || SP.UI.Taxonomy.Utility.$L($v_B)) {
                    var $v_C = 0;
                    var $v_D = [];
                    if ($v_1) {
                        $v_C = SP.UI.Taxonomy.BulkTaggingWidget.$1B($v_B, $v_2, $v_D, $p0);
                    }
                    else {
                        $v_C = SP.UI.Taxonomy.BulkTaggingWidget.$1D($v_B, $v_0, $v_D, $p0);
                    }
                    if ($v_C > 0) {
                        var $v_E = SP.UI.Taxonomy.DataConverters.DataValueToInputValue($v_D, true);
                        SP.UI.Taxonomy.TaxonomyGridControl.$1C($v_4, $v_A, $v_5, $v_9, $v_E, this.$$d_$15_0);
                    }
                }
            }
        }
        return true;
    },
    
    $15_0: function SP_UI_Taxonomy_BulkTaggingWidget$$15_0($p0) {
    }
}


SP.UI.Taxonomy.DataConverters = function SP_UI_Taxonomy_DataConverters() {
}
SP.UI.Taxonomy.DataConverters.DataValueToInputValue = function SP_UI_Taxonomy_DataConverters$DataValueToInputValue(dataValue, isMulti) {ULScP6:;
    var $v_0 = '';
    if (SP.UI.Taxonomy.Utility.$L(dataValue)) {
        if (isMulti) {
            var $v_1 = dataValue;
            var $v_2 = new Sys.StringBuilder();
            for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
                if ($v_3 > 0) {
                    $v_2.append(';');
                }
                SP.UI.Taxonomy.JsonTerm.$r($v_2, $v_1[$v_3]);
            }
            $v_0 = $v_2.toString();
        }
        else {
            $v_0 = SP.UI.Taxonomy.JsonTerm.$w(dataValue);
        }
    }
    return $v_0;
}
SP.UI.Taxonomy.DataConverters.$E = function SP_UI_Taxonomy_DataConverters$$E($p0, $p1) {
    var $v_0 = null;
    if (!SP.UI.Taxonomy.Utility.$G($p0)) {
        if ($p1) {
            var $v_1 = $p0.split(';');
            var $v_2 = new Array($v_1.length);
            for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
                $v_2[$v_3] = SP.UI.Taxonomy.JsonTerm.$o($v_1[$v_3]);
            }
            $v_0 = $v_2;
        }
        else {
            $v_0 = SP.UI.Taxonomy.JsonTerm.$o($p0);
        }
    }
    return $v_0;
}
SP.UI.Taxonomy.DataConverters.$19 = function SP_UI_Taxonomy_DataConverters$$19($p0, $p1, $p2) {
    if (SP.UI.Taxonomy.Utility.$A($p0)) {
        return null;
    }
    var $v_0 = $p0;
    var $v_1 = SP.UI.Taxonomy.JsonTerm.$U($v_0.get_label(), $v_0.get_termGuid());
    var $v_2 = SP.UI.Taxonomy.DataConverters.DataValueToInputValue($v_1, false);
    return SP.UI.Taxonomy.DataConverters.$V($v_1, $v_2);
}
SP.UI.Taxonomy.DataConverters.$18 = function SP_UI_Taxonomy_DataConverters$$18($p0, $p1, $p2) {
    var $v_0 = [];
    var $v_1 = $p0;
    var $v_2 = $v_1.get_count();
    for (var $v_4 = 0; $v_4 < $v_2; $v_4++) {
        var $v_5 = SP.UI.Taxonomy.JsonTerm.$16($v_1.itemAt($v_4));
        $v_0.push($v_5);
    }
    var $v_3 = SP.UI.Taxonomy.DataConverters.DataValueToInputValue($v_0, true);
    return SP.UI.Taxonomy.DataConverters.$V($v_0, $v_3);
}
SP.UI.Taxonomy.DataConverters.$h = function SP_UI_Taxonomy_DataConverters$$h($p0) {
    if (!SP.UI.Taxonomy.Utility.$X($p0.data)) {
        $p0.data = null;
    }
    if (!SP.UI.Taxonomy.Utility.$j($p0.localized)) {
        var $v_0 = null;
        $p0.localized = '';
    }
    return $p0.localized;
}
SP.UI.Taxonomy.DataConverters.$V = function SP_UI_Taxonomy_DataConverters$$V($p0, $p1) {
    if (!SP.UI.Taxonomy.Utility.$X($p0)) {
        $p0 = null;
    }
    if (!SP.UI.Taxonomy.Utility.$j($p1)) {
        var $v_0 = null;
        $p1 = '';
    }
    return { data: $p0, localized: $p1 };
}


SP.UI.Taxonomy.JsonTerm = function SP_UI_Taxonomy_JsonTerm() {
}
SP.UI.Taxonomy.JsonTerm.$U = function SP_UI_Taxonomy_JsonTerm$$U($p0, $p1) {
    var $v_0 = {};
    $v_0.Label = $p0;
    $v_0.TermID = $p1;
    return $v_0;
}
SP.UI.Taxonomy.JsonTerm.$t = function SP_UI_Taxonomy_JsonTerm$$t($p0, $p1) {
    return (SP.UI.Taxonomy.Utility.$M($p0.TermID) === SP.UI.Taxonomy.Utility.$M($p1.TermID));
}
SP.UI.Taxonomy.JsonTerm.$w = function SP_UI_Taxonomy_JsonTerm$$w($p0) {
    return $p0.Label + '|' + $p0.TermID;
}
SP.UI.Taxonomy.JsonTerm.$r = function SP_UI_Taxonomy_JsonTerm$$r($p0, $p1) {
    $p0.append($p1.Label);
    $p0.append('|');
    $p0.append($p1.TermID);
}
SP.UI.Taxonomy.JsonTerm.$o = function SP_UI_Taxonomy_JsonTerm$$o($p0) {
    var $v_0 = $p0.split('|');
    return SP.UI.Taxonomy.JsonTerm.$U($v_0[0], $v_0[1]);
}
SP.UI.Taxonomy.JsonTerm.$16 = function SP_UI_Taxonomy_JsonTerm$$16($p0) {
    return SP.UI.Taxonomy.JsonTerm.$U($p0.get_label(), $p0.get_termGuid());
}
SP.UI.Taxonomy.JsonTerm.$a = function SP_UI_Taxonomy_JsonTerm$$a($p0) {
    var $v_0 = new Sys.StringBuilder();
    if ($p0) {
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            $v_0.append($p0[$v_1].Label);
            $v_0.append('; ');
        }
    }
    return $v_0.toString();
}
SP.UI.Taxonomy.JsonTerm.prototype = {
    Label: null,
    TermID: null
}


SP.UI.Taxonomy.TaxonomyFieldTemplate = function SP_UI_Taxonomy_TaxonomyFieldTemplate() {
}
SP.UI.Taxonomy.TaxonomyFieldTemplate.$$cctor = function SP_UI_Taxonomy_TaxonomyFieldTemplate$$$cctor() {ULScP6:;
    SP.SOD.executeFunc('ScriptForWebTaggingUI.js', 'Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI', null);
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(SP.UI.Taxonomy.TaxonomyFieldTemplate.createRenderContextOverride());
}
SP.UI.Taxonomy.TaxonomyFieldTemplate.createRenderContextOverride = function SP_UI_Taxonomy_TaxonomyFieldTemplate$createRenderContextOverride() {ULScP6:;
    var $v_0 = {};
    $v_0.Templates = {};
    $v_0.Templates['Fields'] = { TaxonomyFieldType: { View: SP.UI.Taxonomy.TaxonomyFieldTemplate.renderViewControl, NewForm: SP.UI.Taxonomy.TaxonomyFieldTemplate.renderFormControl, EditForm: SP.UI.Taxonomy.TaxonomyFieldTemplate.renderFormControl, DisplayForm: SP.UI.Taxonomy.TaxonomyFieldTemplate.renderDisplayControl }, TaxonomyFieldTypeMulti: { View: SP.UI.Taxonomy.TaxonomyFieldTemplate.renderViewControl, NewForm: SP.UI.Taxonomy.TaxonomyFieldTemplate.renderFormControl, EditForm: SP.UI.Taxonomy.TaxonomyFieldTemplate.renderFormControl, DisplayForm: SP.UI.Taxonomy.TaxonomyFieldTemplate.renderDisplayControl } };
    $v_0.OnPreRender = SP.UI.Taxonomy.TaxonomyFieldTemplate.onPreRender;
    $v_0.OnPostRender = SP.UI.Taxonomy.TaxonomyFieldTemplate.onPostRender;
    return $v_0;
}
SP.UI.Taxonomy.TaxonomyFieldTemplate.onPreRender = function SP_UI_Taxonomy_TaxonomyFieldTemplate$onPreRender(renderContext) {ULScP6:;
    SP.SOD.executeFunc('SP.js', 'SP.PageContextInfo', function() {ULScP6:;
        registerCssLink('/_layouts/15/' + SP.PageContextInfo.get_currentLanguage() + '/styles/WebTaggingUI.css');
    });
}
SP.UI.Taxonomy.TaxonomyFieldTemplate.renderViewControl = function SP_UI_Taxonomy_TaxonomyFieldTemplate$renderViewControl(renderContext, fieldSchema, currentItem, listSchema) {ULScP6:;
    var $v_0 = '';
    if (renderContext && fieldSchema && currentItem) {
        var $v_1 = currentItem[fieldSchema.Name];
        if (SP.UI.Taxonomy.Utility.$L($v_1)) {
            if (fieldSchema.AllowMultipleValues) {
                $v_0 = SP.UI.Taxonomy.JsonTerm.$a($v_1);
            }
            else {
                var $v_2 = $v_1;
                if (!SP.UI.Taxonomy.Utility.$A($v_2)) {
                    $v_0 = $v_2.Label;
                }
            }
        }
    }
    return $v_0;
}
SP.UI.Taxonomy.TaxonomyFieldTemplate.renderDisplayControl = function SP_UI_Taxonomy_TaxonomyFieldTemplate$renderDisplayControl(renderContext) {ULScP6:;
    var $v_0 = '';
    if (renderContext) {
        var $v_1 = renderContext.CurrentFieldValue;
        if (!SP.UI.Taxonomy.Utility.$G($v_1)) {
            var $v_2 = renderContext.CurrentFieldSchema;
            if ($v_2.AllowMultipleValues) {
                var $v_3 = SP.UI.Taxonomy.DataConverters.$E($v_1, true);
                $v_0 = SP.UI.Taxonomy.JsonTerm.$a($v_3);
            }
            else {
                var $v_4 = SP.UI.Taxonomy.DataConverters.$E($v_1, false);
                if (!SP.UI.Taxonomy.Utility.$A($v_4)) {
                    $v_0 = $v_4.Label;
                }
            }
        }
    }
    return $v_0;
}
SP.UI.Taxonomy.TaxonomyFieldTemplate.renderFormControl = function SP_UI_Taxonomy_TaxonomyFieldTemplate$renderFormControl(renderContext) {ULScP6:;
    var $v_0 = '';
    if (renderContext) {
        var $v_1 = SPClientTemplates.Utility.GetFormContextForCurrentField(renderContext);
        if (!SP.UI.Taxonomy.Utility.$A($v_1)) {
            var $v_2 = $v_1.fieldSchema;
            if (!SP.UI.Taxonomy.Utility.$A($v_2)) {
                var $v_3 = $v_1.fieldName;
                var $v_4 = $v_1.fieldValue || '';
                var $v_5 = SP.UI.Taxonomy.Utility.$g($v_3);
                var $v_6 = SP.UI.Taxonomy.Utility.$e($v_3);
                SP.UI.Taxonomy.TaxonomyFieldTemplate.$J = $v_5;
                SP.UI.Taxonomy.TaxonomyFieldTemplate.$I = $v_6;
                SP.UI.Taxonomy.TaxonomyFieldTemplate.$F = $v_2;
                SP.UI.Taxonomy.TaxonomyFieldTemplate.$17($v_1, $v_6);
                var $v_7 = new Sys.StringBuilder();
                SP.UI.Taxonomy.TaxonomyFieldTemplate.$R($v_7, $v_5, $v_4, $v_6);
                $v_0 = $v_7.toString();
                $v_1.updateControlValue($v_3, $v_4);
            }
        }
    }
    return $v_0;
}
SP.UI.Taxonomy.TaxonomyFieldTemplate.onPostRender = function SP_UI_Taxonomy_TaxonomyFieldTemplate$onPostRender(renderContext) {ULScP6:;
    if (SP.UI.Taxonomy.TaxonomyFieldTemplate.$F) {
        var $v_0 = $get(SP.UI.Taxonomy.TaxonomyFieldTemplate.$I);
        $v_0.InputFieldId = SP.UI.Taxonomy.TaxonomyFieldTemplate.$J;
        SP.UI.Taxonomy.Utility.$S($v_0, SP.UI.Taxonomy.TaxonomyFieldTemplate.$F);
        $v_0.className = 'ms-taxonomy ms-taxonomy-height ms-long';
        SP.SOD.executeFunc('ScriptForWebTaggingUI.js', 'Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.onLoad', function() {ULScP6:;
            Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.onLoad($v_0.id);
        });
        SP.UI.Taxonomy.TaxonomyFieldTemplate.$J = null;
        SP.UI.Taxonomy.TaxonomyFieldTemplate.$I = null;
        SP.UI.Taxonomy.TaxonomyFieldTemplate.$F = null;
    }
}
SP.UI.Taxonomy.TaxonomyFieldTemplate.$R = function SP_UI_Taxonomy_TaxonomyFieldTemplate$$R($p0, $p1, $p2, $p3) {
    $p0.append('<input type=\"hidden\" id=\"');
    $p0.append($p1);
    $p0.append('\" value=\"');
    $p0.append($p2);
    $p0.appendLine('\"/>');
    $p0.append('<div id=\"');
    $p0.append($p3);
    $p0.appendLine('\">');
    $p0.appendLine('</div>');
}
SP.UI.Taxonomy.TaxonomyFieldTemplate.$17 = function SP_UI_Taxonomy_TaxonomyFieldTemplate$$17($p0, $p1) {
    var $v_0 = $p0.fieldName;
    var $v_1 = new SPClientForms.ClientValidation.ValidatorSet();
    if ($p0.fieldSchema.Required) {
        $v_1.RegisterValidator(new SPClientForms.ClientValidation.RequiredValidator());
    }
    $v_1.RegisterValidator(new SP.UI.Taxonomy.TaxonomyFieldValidator());
    $p0.registerClientValidator($v_0, $v_1);
    $p0.registerGetValueCallback($v_0, function() {ULScP6:;
        var $v_2 = SP.UI.Taxonomy.Utility.$u($p1);
        return $v_2;
    });
    $p0.registerValidationErrorCallback($v_0, function($p1_0) {
        SPFormControl_AppendValidationErrorMessage($p1, $p1_0);
    });
}


SP.UI.Taxonomy.Validator = function SP_UI_Taxonomy_Validator() {
}
SP.UI.Taxonomy.Validator.prototype = {
    
    Validate: function SP_UI_Taxonomy_Validator$Validate(value) {ULScP6:;
        return null;
    }
}


SP.UI.Taxonomy.TaxonomyFieldValidator = function SP_UI_Taxonomy_TaxonomyFieldValidator() {ULScP6:;
    SP.UI.Taxonomy.TaxonomyFieldValidator.initializeBase(this);
}
SP.UI.Taxonomy.TaxonomyFieldValidator.prototype = {
    
    Validate: function SP_UI_Taxonomy_TaxonomyFieldValidator$Validate($p0) {
        var $v_0 = new SPClientForms.ClientValidation.ValidationResult(false, '');
        return $v_0;
    }
}


SP.UI.Taxonomy.TaxonomyGridControl = function SP_UI_Taxonomy_TaxonomyGridControl($p0) {
    this.$$d_$m_0 = Function.createDelegate(this, this.$m_0);
    this.$$d_$k_0 = Function.createDelegate(this, this.$k_0);
    this.$$d_$l_0 = Function.createDelegate(this, this.$l_0);
    this.$$d_$11_0 = Function.createDelegate(this, this.$11_0);
    this.$$d_$z_0 = Function.createDelegate(this, this.$z_0);
    this.$$d_$n_0 = Function.createDelegate(this, this.$n_0);
    this.SupportedReadMode = null;
    this.SupportedWriteMode = null;
    this.$3_0 = $p0;
    this.$c_0();
}
SP.UI.Taxonomy.TaxonomyGridControl.$R = function SP_UI_Taxonomy_TaxonomyGridControl$$R($p0, $p1, $p2) {
    $p0.val = document.createElement('input');
    $p0.val.type = 'hidden';
    $p0.val.id = SP.UI.Taxonomy.Utility.$g($p2.id);
    $p1.val = document.createElement('div');
    $p1.val.id = SP.UI.Taxonomy.Utility.$e($p2.id);
    $p1.val.InputFieldId = $p0.val.id;
    $p1.val.className = 'ms-taxonomy ms-taxonomy-height ms-long';
    $p2.appendChild($p0.val);
    $p2.appendChild($p1.val);
}
SP.UI.Taxonomy.TaxonomyGridControl.$1A = function SP_UI_Taxonomy_TaxonomyGridControl$$1A($p0, $p1) {
    var $v_0 = $p0.field.GetIsMultiValue();
    var $v_1 = SP.UI.Taxonomy.DataConverters.$E($p1, $v_0);
    var $v_2 = SP.UI.Taxonomy.DataConverters.$V($v_1, $p1);
    SP.UI.Taxonomy.TaxonomyGridControl.$q($p0, $v_2);
}
SP.UI.Taxonomy.TaxonomyGridControl.$q = function SP_UI_Taxonomy_TaxonomyGridControl$$q($p0, $p1) {
    var $v_0 = $p0.fieldKey;
    var $v_1 = $p0.record;
    if ($v_1.bIsNewRow && SP.UI.Taxonomy.Utility.$A($v_1.fieldRawDataMap.csrInfo)) {
        $v_1.fieldRawDataMap.csrInfo = {};
    }
    $v_1.fieldRawDataMap.csrInfo[$v_0] = $p1.data;
    $p0.SetCurrentValue($p1);
}
SP.UI.Taxonomy.TaxonomyGridControl.$v = function SP_UI_Taxonomy_TaxonomyGridControl$$v($p0) {
    var $v_0 = '';
    var $v_1 = $p0.record;
    var $v_2 = $p0.fieldKey;
    if ($v_1.HasDataValue($v_2)) {
        var $v_3 = $v_1.GetDataValue($v_2);
        var $v_4 = $p0.field.GetIsMultiValue();
        $v_0 = SP.UI.Taxonomy.DataConverters.DataValueToInputValue($v_3, $v_4);
    }
    return $v_0;
}
SP.UI.Taxonomy.TaxonomyGridControl.$x = function SP_UI_Taxonomy_TaxonomyGridControl$$x($p0, $p1) {
    var $v_0 = true;
    var $v_1 = [];
    var $v_2 = $p0.GetSelectedCellRanges();
    if (!$v_2.length) {
        var $v_3 = $p0.GetSelectedColumnRanges();
        if ($v_3.length === 1) {
            var $v_4 = $v_3[0];
            if ($v_4.begin === $v_4.end && $v_4.keys[0] === $p1) {
                var $v_5 = $p0.GetSelectedRecordKeys(false);
                for (var $v_6 = 0; $v_6 < $v_5.length; $v_6++) {
                    $v_1.push({ key: $v_5[$v_6], row: $v_6, col: $v_4.begin });
                }
            }
            else {
            }
        }
    }
    else {
        for (var $v_7 = 0; $v_7 < $v_2.length; $v_7++) {
            var $v_8 = $v_2[$v_7];
            var $v_9 = $v_8.colRange;
            if ($v_9.begin === $v_9.end && $v_9.keys[0] === $p1) {
                var $v_A = $v_8.rowRange.begin;
                var $v_B = $v_8.rowRange.keys;
                for (var $v_C = 0; $v_C < $v_B.length; $v_C++) {
                    var $v_D = $v_A + $v_C;
                    $v_1.push({ key: $v_B[$v_C], row: $v_D, col: $v_9.begin });
                }
            }
            else {
                $v_0 = false;
                break;
            }
        }
    }
    return (($v_0) ? $v_1 : []);
}
SP.UI.Taxonomy.TaxonomyGridControl.$1C = function SP_UI_Taxonomy_TaxonomyGridControl$$1C($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = [];
    var $v_1 = [];
    $v_1.push($p4);
    $v_0.push($v_1);
    var $v_2 = { matrix: $v_0, width: 1, height: 1 };
    var $v_3 = $p1.key();
    var $v_4 = {};
    $v_4[$v_3] = $p1;
    var $v_5 = new SP.Utilities.Range($p3.row, $p3.row);
    var $v_6 = new SP.Utilities.Range($p3.col, $p3.col);
    var $v_7 = false;
    $p0.PutData($v_2, $v_4, 'User bulk tagging', 'TL', $v_5, $v_6, $p5, $v_7);
}
SP.UI.Taxonomy.TaxonomyGridControl.prototype = {
    $3_0: null,
    $1_0: null,
    $0_0: null,
    $5_0: null,
    $C_0: null,
    $2_0: null,
    $D_0: false,
    $9_0: '',
    
    $c_0: function SP_UI_Taxonomy_TaxonomyGridControl$$c_0() {ULScP6:;
        this.$5_0 = document.createElement('span');
        this.$5_0.id = 'jsgrid_taxonomygridcontrol';
        this.$5_0.style.visibility = 'hidden';
        var $$t_0, $$t_1;
        SP.UI.Taxonomy.TaxonomyGridControl.$R(($$t_0 = {'val': this.$C_0}), ($$t_1 = {'val': this.$2_0}), this.$5_0), this.$C_0 = $$t_0.val, this.$2_0 = $$t_1.val;
        this.$2_0.DisplayPickerButton = false;
        this.$2_0.InGridMode = true;
        this.$3_0.parentNode.appendChild(this.$5_0);
        this.$0_0 = new Microsoft.SharePoint.Taxonomy.ControlObject(this.$2_0);
    },
    
    $p_0: function SP_UI_Taxonomy_TaxonomyGridControl$$p_0() {ULScP6:;
        var $v_0 = this.$1_0.cellWidth + 'px';
        var $v_1 = this.$1_0.cellHeight + 'px';
        this.$5_0.style.minWidth = $v_0;
        this.$5_0.style.minHeight = '17px';
        this.$5_0.style.width = $v_0;
        this.$5_0.style.height = $v_1;
        this.$2_0.style.minWidth = $v_0;
        this.$2_0.style.minHeight = '17px';
        this.$2_0.style.width = $v_0;
        this.$2_0.style.height = $v_1;
    },
    
    $O_0: function SP_UI_Taxonomy_TaxonomyGridControl$$O_0($p0) {
        if ($p0) {
            RTE.CanvasEvents.registerListener(RTE.CanvasEvents.editableRegionChangedEvent, this.$$d_$n_0);
            RTE.CanvasEvents.registerListener(RTE.CanvasEvents.editableRegionBlurEvent, this.$$d_$z_0);
            RTE.CanvasEvents.registerListener(RTE.CanvasEvents.editableRegionFocusEvent, this.$$d_$11_0);
            $addHandler(this.$0_0.get_editableRegion(), 'keypress', this.$$d_$l_0);
            $addHandler(this.$0_0.get_editableRegion(), 'keydown', this.$$d_$k_0);
            $addHandler(this.$0_0.get_editableRegion(), 'mousedown', this.$$d_$m_0);
        }
        else {
            RTE.CanvasEvents.unRegisterListener(RTE.CanvasEvents.editableRegionChangedEvent, this.$$d_$n_0);
            RTE.CanvasEvents.unRegisterListener(RTE.CanvasEvents.editableRegionBlurEvent, this.$$d_$z_0);
            RTE.CanvasEvents.unRegisterListener(RTE.CanvasEvents.editableRegionFocusEvent, this.$$d_$11_0);
            $clearHandlers(this.$0_0.get_editableRegion());
        }
    },
    
    $n_0: function SP_UI_Taxonomy_TaxonomyGridControl$$n_0($p0, $p1) {
        this.$0_0.validateOnTextChanged();
    },
    
    $z_0: function SP_UI_Taxonomy_TaxonomyGridControl$$z_0($p0, $p1) {
        var $v_0 = ($p1).oldEditableRegion;
        if ($v_0.parentNode.parentNode.parentNode.id === this.$2_0.id) {
            this.$3_0.OnDeactivateActor();
        }
    },
    
    $11_0: function SP_UI_Taxonomy_TaxonomyGridControl$$11_0($p0, $p1) {
        if (!this.$D_0) {
            var $v_0 = ($p1).newEditableRegion;
            if ($v_0.parentNode.parentNode.parentNode.id === this.$2_0.id) {
                this.$3_0.OnActivateActor();
            }
        }
    },
    
    $k_0: function SP_UI_Taxonomy_TaxonomyGridControl$$k_0($p0) {
        var $v_0 = Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.handleKeyDown($p0, this.$0_0);
        if (!$v_0) {
            switch ($p0.keyCode) {
                case 27:
                    this.$0_0.setRawText(this.$9_0);
                    this.$0_0.retrieveTerms();
                    this.$3_0.OnKeyDown($p0);
                    break;
                case 9:
                    this.$3_0.OnKeyDown($p0);
                    break;
            }
        }
    },
    
    $l_0: function SP_UI_Taxonomy_TaxonomyGridControl$$l_0($p0) {
        var $v_0 = Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.handleKeyPress($p0, this.$0_0);
        if (!$v_0) {
            switch ($p0.charCode) {
                case 13:
                    this.$3_0.OnKeyDown($p0);
                    break;
            }
        }
    },
    
    $m_0: function SP_UI_Taxonomy_TaxonomyGridControl$$m_0($p0) {
        if (this.$D_0) {
            SP.UI.Taxonomy.Utility.$H($p0);
        }
    },
    
    Dispose: function SP_UI_Taxonomy_TaxonomyGridControl$Dispose() {ULScP6:;
        this.$3_0.parentNode.removeChild(this.$5_0);
    },
    
    Focus: function SP_UI_Taxonomy_TaxonomyGridControl$Focus(domEvent) {ULScP6:;
        this.$0_0.focus(true);
        if (domEvent && domEvent.type === 'keypress' && SP.JsGrid.Utility.IsChar(domEvent)) {
            var $v_0 = String.fromCharCode(domEvent.charCode);
            this.$0_0.setRawText($v_0);
            this.$0_0.setTextAndCursor($v_0, true);
            this.$0_0.validateOnTextChanged();
        }
        else {
            this.$0_0.setRawText(this.$9_0);
            this.$0_0.retrieveTerms();
            if (!SP.UI.Taxonomy.Utility.$G(this.$9_0)) {
                this.$0_0.startupValidation();
            }
            this.$0_0.restoreCursor();
        }
    },
    
    BindToCell: function SP_UI_Taxonomy_TaxonomyGridControl$BindToCell(newCellContext) {ULScP6:;
        this.$1_0 = newCellContext;
        if (this.$1_0.originalValue && SP.UI.Taxonomy.Utility.$G(this.$1_0.originalValue.localized)) {
            this.$1_0.originalValue.data = null;
        }
        var $v_0 = this.$1_0.field.GetSingleValuePropType();
        var $v_1 = $v_0.$f_0(this.$1_0.fieldKey);
        SP.UI.Taxonomy.Utility.$S(this.$2_0, $v_1);
        this.$9_0 = SP.UI.Taxonomy.TaxonomyGridControl.$v(this.$1_0);
        this.$0_0.setRawText(this.$9_0);
    },
    
    Unbind: function SP_UI_Taxonomy_TaxonomyGridControl$Unbind() {ULScP6:;
        this.$C_0.value = '';
        this.$0_0.setRawText('');
        this.$0_0.retrieveTerms();
        SP.UI.Taxonomy.Utility.$b(this.$2_0);
        this.$1_0 = null;
    },
    
    OnBeginEdit: function SP_UI_Taxonomy_TaxonomyGridControl$OnBeginEdit(domEvent) {ULScP6:;
        this.$0_0.updateFieldEditorProperties();
        this.$0_0.updateSuggestionsProperties();
        this.$p_0();
        this.$1_0.Show(this.$5_0);
        this.$D_0 = true;
        this.$O_0(true);
        this.Focus(domEvent);
        SP.UI.Taxonomy.Utility.$H(domEvent);
    },
    
    OnEndEdit: function SP_UI_Taxonomy_TaxonomyGridControl$OnEndEdit() {ULScP6:;
        this.$O_0(false);
        this.$0_0.focus(false);
        var $v_0 = this.$0_0.getRawText();
        if ($v_0 !== this.$9_0) {
            SP.UI.Taxonomy.TaxonomyGridControl.$1A(this.$1_0, $v_0);
        }
        this.$D_0 = false;
        this.$1_0.Hide(this.$5_0);
    },
    
    OnCellMove: function SP_UI_Taxonomy_TaxonomyGridControl$OnCellMove() {ULScP6:;
        this.$p_0();
        if (this.$D_0) {
            this.$1_0.Show(this.$5_0);
        }
    },
    
    OnValueChanged: function SP_UI_Taxonomy_TaxonomyGridControl$OnValueChanged(newValue) {ULScP6:;
        if (newValue.localized !== this.$9_0) {
            this.$9_0 = newValue.localized;
            SP.UI.Taxonomy.TaxonomyGridControl.$q(this.$1_0, newValue);
            if (this.$D_0) {
                this.$0_0.setRawText(newValue.localized);
                this.$0_0.retrieveTerms();
            }
        }
    }
}


SP.UI.Taxonomy.TaxonomyFieldPropertyType = function SP_UI_Taxonomy_TaxonomyFieldPropertyType(customFieldInfo) {ULScP6:;
    this.ID = 'TaxonomyField';
    this.$W_0 = customFieldInfo;
}
SP.UI.Taxonomy.TaxonomyFieldPropertyType.prototype = {
    ID: null,
    $W_0: null,
    
    LocalizedValueToCSRValue: function SP_UI_Taxonomy_TaxonomyFieldPropertyType$LocalizedValueToCSRValue(localizedValue) {ULScP6:;
        return SP.UI.Taxonomy.DataConverters.$E(localizedValue, false);
    },
    
    BeginValidateNormalizeConvert: function SP_UI_Taxonomy_TaxonomyFieldPropertyType$BeginValidateNormalizeConvert(recordKey, fieldKey, newValue, isLocalized, successCallback, errorCallback) {ULScP6:;
        var $v_0 = ({});
        if (isLocalized) {
            $v_0.normalizedLocValue = newValue;
            $v_0.dataValue = SP.UI.Taxonomy.DataConverters.$E($v_0.normalizedLocValue, false);
        }
        else {
            $v_0.dataValue = newValue;
            $v_0.normalizedLocValue = SP.UI.Taxonomy.DataConverters.DataValueToInputValue($v_0.dataValue, false);
        }
        $v_0.isValid = true;
        if (successCallback) {
            successCallback($v_0);
        }
    },
    
    $f_0: function SP_UI_Taxonomy_TaxonomyFieldPropertyType$$f_0($p0) {
        return (this.$W_0) ? this.$W_0[$p0] : null;
    }
}


SP.UI.Taxonomy.Constants.registerClass('SP.UI.Taxonomy.Constants');
SP.UI.Taxonomy.Utility.registerClass('SP.UI.Taxonomy.Utility');
SP.UI.Taxonomy.ControlRegistration.registerClass('SP.UI.Taxonomy.ControlRegistration');
SP.UI.Taxonomy.BulkTaggingWidget.registerClass('SP.UI.Taxonomy.BulkTaggingWidget', null, SP.UI.Taxonomy.IWidgetControl);
SP.UI.Taxonomy.DataConverters.registerClass('SP.UI.Taxonomy.DataConverters');
SP.UI.Taxonomy.JsonTerm.registerClass('SP.UI.Taxonomy.JsonTerm');
SP.UI.Taxonomy.TaxonomyFieldTemplate.registerClass('SP.UI.Taxonomy.TaxonomyFieldTemplate');
SP.UI.Taxonomy.Validator.registerClass('SP.UI.Taxonomy.Validator');
SP.UI.Taxonomy.TaxonomyFieldValidator.registerClass('SP.UI.Taxonomy.TaxonomyFieldValidator', SP.UI.Taxonomy.Validator);
SP.UI.Taxonomy.TaxonomyGridControl.registerClass('SP.UI.Taxonomy.TaxonomyGridControl', null, SP.UI.Taxonomy.IEditControl);
SP.UI.Taxonomy.TaxonomyFieldPropertyType.registerClass('SP.UI.Taxonomy.TaxonomyFieldPropertyType', null, SP.UI.Taxonomy.IPropertyType);
function sp_ui_taxonomy_initialize() {ULScP6:;
SP.UI.Taxonomy.Constants.$i = new RegExp('-', 'ig');
SP.UI.Taxonomy.BulkTaggingWidget.TypeID = 'WIDGET_BULKTAGGING';
SP.UI.Taxonomy.TaxonomyFieldTemplate.$J = null;
SP.UI.Taxonomy.TaxonomyFieldTemplate.$I = null;
SP.UI.Taxonomy.TaxonomyFieldTemplate.$F = null;
SP.UI.Taxonomy.TaxonomyFieldTemplate.$$cctor();
SP.UI.Taxonomy.TaxonomyGridControl.TypeID = 'EDIT_TAXONOMY';
};
sp_ui_taxonomy_initialize();

RegisterModuleInit("SP.UI.Taxonomy.js", sp_ui_taxonomy_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.Taxonomy.js");
