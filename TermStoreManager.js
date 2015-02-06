function ULSkCf(){var o=new Object;o.ULSTeamName="Office Server";o.ULSFileName="TermStoreManager.js";return o;}

Type.registerNamespace('Microsoft.SharePoint.Taxonomy');

Microsoft.SharePoint.Taxonomy.CustomDictionaryHelper = function Microsoft_SharePoint_Taxonomy_CustomDictionaryHelper() {
}
Microsoft.SharePoint.Taxonomy.CustomDictionaryHelper.isCustomDictionaryTermSet = function Microsoft_SharePoint_Taxonomy_CustomDictionaryHelper$isCustomDictionaryTermSet($p0) {
    return 'c866ca65-f095-4a16-9249-028d500f7703' === $p0 || 'd41a92ec-33dc-4720-bd03-3a00287653e4' === $p0 || '22035077-2e30-450f-99ac-889a3bec24d8' === $p0 || '190a2c19-cb43-4b06-b5bb-db50945aefbf' === $p0;
}


Microsoft.SharePoint.Taxonomy.CustomPropertyEditor = function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor(isLocal) {ULSkCf:;
    this.$$d_$53_0 = Function.createDelegate(this, this.$53_0);
    this.$$d_$4w_0 = Function.createDelegate(this, this.$4w_0);
    this.$$d_onTextChanged = Function.createDelegate(this, this.onTextChanged);
    this.$$d_$4f_0 = Function.createDelegate(this, this.$4f_0);
    this.$$d_$4i_0 = Function.createDelegate(this, this.$4i_0);
    this.$v_0 = isLocal;
    this.$2U_0 = this.$$d_$4i_0;
    this.$2N_0 = this.$$d_$4f_0;
    this.$s_0 = this.$$d_onTextChanged;
    this.$2m_0 = this.$$d_$4w_0;
    this.$3G_0 = this.$$d_$53_0;
    Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.get_$12_0(), 'click', this.$2N_0);
}
Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$3F = function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$$3F($p0, $p1, $p2) {
    var $v_0 = Microsoft.SharePoint.Taxonomy.ClientValidator.validateName($p0);
    if (!$v_0 && $p1 && $p1[$p0]) {
        $v_0 = Microsoft.SharePoint.Taxonomy.ScriptResources.errorDuplicateName;
    }
    Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$3t($p2, $v_0);
    return (!$v_0);
}
Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$4F = function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$$4F($p0, $p1) {
    var $v_0 = Microsoft.SharePoint.Taxonomy.ClientValidator.validatePropertyValue($p0);
    Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$3t($p1, $v_0);
    return (!$v_0);
}
Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$3t = function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$$3t($p0, $p1) {
    Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$57($p0);
    if ($p1) {
        Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$4R($p0, $p1);
    }
}
Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$4R = function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$$4R($p0, $p1) {
    if ($p0) {
        var $v_0 = document.createElement('span');
        $v_0.innerHTML = $p1;
        $v_0.className = 'tmt-error';
        $p0.appendChild($v_0);
    }
}
Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$57 = function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$$57($p0) {
    if ($p0) {
        var $v_0 = $p0.childNodes.length;
        if ($v_0 > 1) {
            for (var $v_1 = 0; $v_1 < $v_0 - 1; $v_1++) {
                $p0.removeChild($p0.lastChild);
            }
        }
    }
}
Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$3J = function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$$3J($p0) {
    return (Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.get_$40() || !$p0.startsWith('_Sys_'));
}
Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.serializeProperties = function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$serializeProperties(properties) {ULSkCf:;
    var $v_0 = Sys.Serialization.JavaScriptSerializer.serialize(properties);
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.deserializeProperties = function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$deserializeProperties(serializedProperties) {ULSkCf:;
    var $v_0 = null;
    if (SP.ScriptUtility.isNullOrEmptyString(serializedProperties)) {
        $v_0 = {};
    }
    else {
        $v_0 = Microsoft.SharePoint.Taxonomy.ParseJSONUtil.parseObjectFromJsonString(serializedProperties);
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.saveProperties = function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$saveProperties(source, propertyName) {ULSkCf:;
    if (source && !SP.ScriptUtility.isNullOrEmptyString(propertyName)) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy[propertyName] = source.value;
        source.value = null;
    }
}
Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.getBooleanProperty = function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$getBooleanProperty(properties, propertyName) {ULSkCf:;
    var $v_0 = properties[propertyName];
    if ($v_0) {
        return ($v_0.toLowerCase() === 'true');
    }
    return false;
}
Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.setBooleanProperty = function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$setBooleanProperty(properties, propertyName, value) {ULSkCf:;
    if (value) {
        properties[propertyName] = 'True';
    }
    else {
        delete properties[propertyName];
    }
}
Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.getStringProperty = function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$getStringProperty(properties, propertyName) {ULSkCf:;
    return properties[propertyName];
}
Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.setStringProperty = function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$setStringProperty(properties, propertyName, value) {ULSkCf:;
    if (!SP.ScriptUtility.isNullOrUndefined(value)) {
        properties[propertyName] = value;
    }
    else {
        delete properties[propertyName];
    }
}
Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.get_$40 = function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$get_$40() {ULSkCf:;
    if (Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$2C === -1) {
        var $v_0 = GetUrlKeyValue('ShowSysProps', true, ajaxNavigate.get_href(), true);
        var $v_1 = (!SP.ScriptUtility.isNullOrEmptyString($v_0) && $v_0 === '1');
        Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$2C = ($v_1) ? 1 : 0;
    }
    return (Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$2C === 1);
}
Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.prototype = {
    
    dispose: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$dispose() {ULSkCf:;
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.get_$12_0(), 'click', this.$2N_0);
    },
    
    resetEditor: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$resetEditor() {ULSkCf:;
        if (!this.get_$t_0()) {
            return;
        }
        var $v_0 = this.get_$t_0().rows.length;
        if ($v_0 > 0) {
            for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
                this.get_$t_0().removeChild(this.get_$t_0().lastChild);
            }
        }
        Microsoft.SharePoint.Taxonomy.TermStoreManager.isCustomPropertyChanged = false;
        this.$14_0 = this.$47_0;
    },
    
    loadEditor: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$loadEditor(focusNode) {ULSkCf:;
        if (!focusNode || !focusNode.get_data()) {
            return;
        }
        var $v_0 = this.$4Z_0(focusNode);
        if (!this.$v_0 && focusNode.get_data().Ir && !focusNode.get_data().Sw) {
            $v_0 = true;
        }
        this.get_$12_0().disabled = $v_0;
        if ($v_0) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.get_$12_0().parentNode);
        }
        else {
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.get_$12_0().parentNode);
        }
        if (Sys.Browser.agent !== Sys.Browser.InternetExplorer) {
            this.get_$12_0().style.color = ($v_0) ? '#C6C6C6' : '';
        }
        var $v_1 = null;
        if (focusNode.get_nodeType() === 4 || (focusNode.get_nodeType() === 3 && !this.$v_0)) {
            $v_1 = ((this.$v_0) ? Microsoft.SharePoint.Taxonomy.TermStoreManager.get_localCustomPropertiesData().value : Microsoft.SharePoint.Taxonomy.TermStoreManager.get_customPropertiesData().value);
        }
        if (!SP.ScriptUtility.isNullOrEmptyString($v_1)) {
            var $v_2 = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.deserializeProperties($v_1);
            var $$dict_4 = $v_2;
            for (var $$key_5 in $$dict_4) {
                var $v_3 = { key: $$key_5, value: $$dict_4[$$key_5] };
                if (Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$3J($v_3.key)) {
                    this.$3I_0($v_3.key, $v_3.value, $v_0);
                }
            }
        }
    },
    
    setTabIndexStart: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$setTabIndexStart(value) {ULSkCf:;
        this.$47_0 = value;
    },
    
    onPreSubmit: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$onPreSubmit() {ULSkCf:;
        var $v_0 = true;
        var $v_1 = {};
        var $v_2 = this.get_$t_0().rows.length;
        for (var $v_3 = 0; $v_3 < $v_2; $v_3++) {
            var $v_4 = this.get_$t_0().rows[$v_3];
            if ($v_4 && $v_4.childNodes.length >= 2) {
                var $v_5 = $v_4.childNodes[0];
                var $v_6 = $v_4.childNodes[1];
                var $v_7 = null;
                var $v_8 = null;
                if ($v_5 && $v_5.childNodes.length >= 1) {
                    $v_7 = $v_5.childNodes[0];
                }
                if ($v_6 && $v_6.childNodes.length >= 1) {
                    $v_8 = $v_6.childNodes[0];
                }
                if ($v_7 && $v_8) {
                    if (!SP.ScriptUtility.isNullOrEmptyString($v_7.value)) {
                        $v_0 = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$3F($v_7.value, $v_1, $v_5) && $v_0;
                        $v_0 = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$4F($v_8.value, $v_6) && $v_0;
                        if ($v_0) {
                            if (!$v_8.value) {
                                $v_1[$v_7.value] = '';
                            }
                            else {
                                $v_1[$v_7.value] = $v_8.value;
                            }
                        }
                    }
                    else if (!SP.ScriptUtility.isNullOrEmptyString($v_8.value)) {
                        $v_0 = false;
                        Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$3F($v_7.value, $v_1, $v_5);
                    }
                }
            }
        }
        if ($v_0 && Microsoft.SharePoint.Taxonomy.TermStoreManager.isCustomPropertyChanged) {
            var $v_9 = (this.$v_0) ? Microsoft.SharePoint.Taxonomy.TermStoreManager.get_localCustomPropertiesData() : Microsoft.SharePoint.Taxonomy.TermStoreManager.get_customPropertiesData();
            var $v_A = $v_9.value;
            if (!Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.get_$40()) {
                var $v_C = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.deserializeProperties($v_A);
                var $$dict_C = $v_C;
                for (var $$key_D in $$dict_C) {
                    var $v_D = { key: $$key_D, value: $$dict_C[$$key_D] };
                    if (!Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$3J($v_D.key) && !$v_1[$v_D.key]) {
                        $v_1[$v_D.key] = $v_D.value;
                    }
                }
            }
            var $v_B = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.serializeProperties($v_1);
            if ($v_B !== $v_A) {
                $v_9.value = $v_B;
            }
        }
        return $v_0;
    },
    
    $4Z_0: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$$4Z_0($p0) {
        var $v_0 = $p0.get_disabled() || !Microsoft.SharePoint.Taxonomy.TermStoreManager.doesUserHaveWritePermission($p0);
        if ($p0.get_nodeType() === 4) {
            if (!this.$v_0 && $p0.get_isPinned()) {
                $v_0 = $v_0 || $p0.get_isPinned();
            }
        }
        return $v_0;
    },
    
    get_isHidden: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$get_isHidden() {ULSkCf:;
        return this.$17_0;
    },
    set_isHidden: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$set_isHidden(value) {ULSkCf:;
        this.$17_0 = value;
        return value;
    },
    
    $3I_0: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$$3I_0($p0, $p1, $p2) {
        var $v_0 = document.createElement('tr');
        var $v_1 = document.createElement('td');
        $v_1.style.width = '370px';
        var $v_2 = document.createElement('input');
        $v_2.value = $p0;
        $v_2.setAttribute('tabIndex', this.$14_0);
        $v_2.className = 'tmt-ctrl ms-long';
        $v_2.disabled = $p2;
        if (!$p2) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler($v_2, 'change', this.$s_0);
            Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler($v_2, 'keypress', this.$s_0);
            Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler($v_2, 'blur', this.$2m_0);
        }
        $v_1.appendChild($v_2);
        this.$14_0++;
        var $v_3 = document.createElement('td');
        $v_3.style.width = '370px';
        var $v_4 = document.createElement('input');
        $v_4.value = $p1;
        $v_4.setAttribute('tabIndex', this.$14_0);
        $v_4.className = 'tmt-ctrl ms-long';
        $v_4.disabled = $p2;
        if (!$p2) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler($v_4, 'change', this.$s_0);
            Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler($v_4, 'keypress', this.$s_0);
            Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler($v_4, 'blur', this.$3G_0);
        }
        $v_3.appendChild($v_4);
        this.$14_0++;
        var $v_5 = document.createElement('td');
        $v_5.className = 'tmt-icon';
        $v_5.style.width = '38px';
        if (!$p2) {
            var $v_6 = document.createElement('img');
            $v_6.src = SP.Utilities.Utility.get_layoutsLatestVersionUrl() + 'images/delete.gif';
            $v_6.setAttribute('tabIndex', this.$14_0);
            $v_6.title = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipDelete;
            $v_6.alt = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipDelete;
            Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler($v_6, 'click', this.$2U_0);
            $v_5.appendChild($v_6);
        }
        this.$14_0++;
        $v_0.appendChild($v_1);
        $v_0.appendChild($v_3);
        $v_0.appendChild($v_5);
        this.get_$t_0().appendChild($v_0);
        return $v_2;
    },
    
    $4i_0: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$$4i_0($p0) {
        if ($p0 && $p0.target && $p0.target.parentNode && $p0.target.parentNode.parentNode) {
            var $v_0 = $p0.target.parentNode.parentNode;
            if ($v_0) {
                Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler($p0.target, 'click', this.$2U_0);
                if ($v_0.childNodes.length >= 2) {
                    var $v_1 = $v_0.childNodes[0];
                    if ($v_1 && $v_1.childNodes.length >= 1) {
                        var $v_3 = $v_1.childNodes[0];
                        if ($v_3) {
                            Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler($v_3, 'keypress', this.$s_0);
                            Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler($v_3, 'change', this.$s_0);
                            Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler($v_3, 'blur', this.$2m_0);
                        }
                    }
                    var $v_2 = $v_0.childNodes[1];
                    if ($v_2 && $v_2.childNodes.length >= 1) {
                        var $v_4 = $v_2.childNodes[0];
                        if ($v_4) {
                            Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler($v_4, 'keypress', this.$s_0);
                            Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler($v_4, 'change', this.$s_0);
                            Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler($v_4, 'blur', this.$3G_0);
                        }
                    }
                }
                $v_0.parentNode.removeChild($v_0);
                Microsoft.SharePoint.Taxonomy.TermStoreManager.isCustomPropertyChanged = true;
                Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
            }
        }
    },
    
    $4f_0: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$$4f_0($p0) {
        if (this.get_$12_0().disabled) {
            $p0.preventDefault();
            return;
        }
        var $v_0 = this.$3I_0('', '', false);
        $v_0.focus();
        var $v_1 = this.get_$t_0().parentNode.parentNode.parentNode;
        var $v_2 = $v_1.scrollHeight - $v_1.clientHeight;
        $v_1.scrollTop = ($v_2 > 0) ? $v_2 : 0;
    },
    
    onTextChanged: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$onTextChanged(e) {ULSkCf:;
        if (e) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.isCustomPropertyChanged = true;
            Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
        }
    },
    
    $4w_0: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$$4w_0($p0) {
        if (!!(!!(!!$p0 & !!$p0.target) & !!$p0.target.parentNode)) {
            var $v_0 = $p0.target;
            var $v_1 = $p0.target.parentNode;
            Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$3F($v_0.value, null, $v_1);
        }
    },
    
    $53_0: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$$53_0($p0) {
        if (!!(!!(!!$p0 & !!$p0.target) & !!$p0.target.parentNode)) {
            var $v_0 = $p0.target;
            var $v_1 = $p0.target.parentNode;
            Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$4F($v_0.value, $v_1);
        }
    },
    
    get_$48_0: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$get_$48_0() {ULSkCf:;
        if (this.$v_0) {
            return 'LocalCustomPropertyTable';
        }
        else {
            return 'CustomPropertyTable';
        }
    },
    
    get_$t_0: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$get_$t_0() {ULSkCf:;
        if (!this.$1N_0) {
            this.$1N_0 = $get(this.get_$48_0());
        }
        if (!this.$1N_0) {
            throw Error.argumentNull(this.get_$48_0());
        }
        return this.$1N_0;
    },
    set_$t_0: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$set_$t_0($p0) {
        this.$1N_0 = $p0;
        return $p0;
    },
    
    $1N_0: null,
    $2U_0: null,
    
    get_$3r_0: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$get_$3r_0() {ULSkCf:;
        if (this.$v_0) {
            return 'LocalCustomPropertyAddLink';
        }
        else {
            return 'CustomPropertyAddLink';
        }
    },
    
    get_$12_0: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$get_$12_0() {ULSkCf:;
        if (!this.$1M_0) {
            this.$1M_0 = $get(this.get_$3r_0());
        }
        if (!this.$1M_0) {
            throw Error.argumentNull(this.get_$3r_0());
        }
        return this.$1M_0;
    },
    set_$12_0: function Microsoft_SharePoint_Taxonomy_CustomPropertyEditor$set_$12_0($p0) {
        this.$1M_0 = $p0;
        return $p0;
    },
    
    $1M_0: null,
    $2N_0: null,
    $s_0: null,
    $2m_0: null,
    $3G_0: null,
    $v_0: false,
    $17_0: false,
    $47_0: 0,
    $14_0: 0
}


Microsoft.SharePoint.Taxonomy.CustomPropertyTab = function Microsoft_SharePoint_Taxonomy_CustomPropertyTab(node, tabId) {ULSkCf:;
    this.$$d_onMouseOut = Function.createDelegate(this, this.onMouseOut);
    this.$$d_onMouseOver = Function.createDelegate(this, this.onMouseOver);
    this.$$d_$51_2 = Function.createDelegate(this, this.$51_2);
    this.$$d_onOptionClicked = Function.createDelegate(this, this.onOptionClicked);
    this.$$d_onTextChanged = Function.createDelegate(this, this.onTextChanged);
    Microsoft.SharePoint.Taxonomy.CustomPropertyTab.initializeBase(this, [ node ]);
    this.rootNode = node;
    this.set_tabNameId(tabId + 'Name');
    this.textChangedHandler = this.$$d_onTextChanged;
    this.$13_2 = this.$$d_onOptionClicked;
    this.$4P_2 = {};
}
Microsoft.SharePoint.Taxonomy.CustomPropertyTab.getLocalCustomProperties = function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$getLocalCustomProperties(node) {ULSkCf:;
    var $v_0 = node.get_data().LCP;
    if ($v_0) {
        var $v_1 = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.deserializeProperties($v_0);
        return $v_1;
    }
    return {};
}
Microsoft.SharePoint.Taxonomy.CustomPropertyTab.getCustomProperties = function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$getCustomProperties(node) {ULSkCf:;
    var $v_0 = node.get_data().SCP;
    if ($v_0) {
        var $v_1 = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.deserializeProperties($v_0);
        return $v_1;
    }
    return {};
}
Microsoft.SharePoint.Taxonomy.CustomPropertyTab.validateNonEmptyPropertyValue = function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$validateNonEmptyPropertyValue(value, parentNodeForError) {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.ClientValidator.validateName(value);
    if (!SP.ScriptUtility.isNullOrEmptyString($v_0)) {
        Microsoft.SharePoint.Taxonomy.CustomPropertyTab.appendErrorMessage(parentNodeForError, $v_0);
        return false;
    }
    return true;
}
Microsoft.SharePoint.Taxonomy.CustomPropertyTab.validatePropertyValue = function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$validatePropertyValue(value, parentNodeForError) {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.ClientValidator.validatePropertyValue(value);
    if (!SP.ScriptUtility.isNullOrEmptyString($v_0)) {
        Microsoft.SharePoint.Taxonomy.CustomPropertyTab.appendErrorMessage(parentNodeForError, $v_0);
        return false;
    }
    return true;
}
Microsoft.SharePoint.Taxonomy.CustomPropertyTab.appendErrorMessage = function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$appendErrorMessage(parentNode, message) {ULSkCf:;
    if (parentNode && message) {
        var $v_0 = document.createElement('span');
        $v_0.className = 'tmt-error';
        $v_0.appendChild(document.createTextNode(message));
        parentNode.appendChild($v_0);
    }
}
Microsoft.SharePoint.Taxonomy.CustomPropertyTab.removeErrorMessage = function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$removeErrorMessage(parentNode) {ULSkCf:;
    if (parentNode) {
        var $v_0 = parentNode.getElementsByTagName('span');
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            if (Sys.UI.DomElement.containsCssClass($v_2, 'tmt-error')) {
                parentNode.removeChild($v_2);
                break;
            }
        }
    }
}
Microsoft.SharePoint.Taxonomy.CustomPropertyTab.resetErrorMessage = function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$resetErrorMessage(parentNode, scope) {ULSkCf:;
    Microsoft.SharePoint.Taxonomy.CustomPropertyTab.removeErrorMessage(parentNode);
    if (scope && scope.get_hasException()) {
        Microsoft.SharePoint.Taxonomy.CustomPropertyTab.appendErrorMessage(parentNode, scope.get_errorMessage());
    }
}
Microsoft.SharePoint.Taxonomy.CustomPropertyTab.$4Q = function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$$4Q() {ULSkCf:;
    var $v_0 = new Microsoft.SharePoint.Taxonomy.SampleTab('SampleTab');
    Microsoft.SharePoint.Taxonomy.TermStoreManager.addCustomPropertyTab($v_0);
    var $v_1 = new Microsoft.SharePoint.Taxonomy.TermSetRolesTab('TermSetRolesTab');
    Microsoft.SharePoint.Taxonomy.TermStoreManager.addCustomPropertyTab($v_1);
    var $v_2 = new Microsoft.SharePoint.Taxonomy.CustomSortTab('CustomSortTab');
    Microsoft.SharePoint.Taxonomy.TermStoreManager.addCustomPropertyTab($v_2);
    var $v_3 = new Microsoft.SharePoint.Taxonomy.ItemCustomPropertiesTab('ItemCustomPropertiesTab');
    Microsoft.SharePoint.Taxonomy.TermStoreManager.addCustomPropertyTab($v_3);
    var $v_4 = new Microsoft.SharePoint.Taxonomy.DictionaryTermPropertiesTab('DictionaryTermPropertiesTab');
    Microsoft.SharePoint.Taxonomy.TermStoreManager.addCustomPropertyTab($v_4);
}
Microsoft.SharePoint.Taxonomy.CustomPropertyTab.prototype = {
    
    dispose: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$dispose() {ULSkCf:;
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.$8_2, 'click', this.$5I_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.$8_2, 'focus', this.$36_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.$8_2, 'mouseover', this.$38_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.$8_2, 'mouseout', this.$37_2);
        Sys.UI.Behavior.prototype.dispose.call(this);
    },
    
    rootNode: null,
    $8_2: null,
    $5I_2: null,
    $36_2: null,
    $38_2: null,
    $37_2: null,
    textChangedHandler: null,
    $13_2: null,
    
    get_treeFocusNode: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$get_treeFocusNode() {ULSkCf:;
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree) {
            return Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
        }
        else {
            return null;
        }
    },
    
    get_tabNameId: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$get_tabNameId() {ULSkCf:;
        if (this.$8_2) {
            return this.$8_2.id;
        }
        else {
            return null;
        }
    },
    set_tabNameId: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$set_tabNameId(value) {ULSkCf:;
        this.$8_2 = $get(value);
        this.$36_2 = this.$$d_$51_2;
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.$8_2, 'focus', this.$36_2);
        this.$38_2 = this.$$d_onMouseOver;
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.$8_2, 'mouseover', this.$38_2);
        this.$37_2 = this.$$d_onMouseOut;
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.$8_2, 'mouseout', this.$37_2);
        return value;
    },
    
    $4P_2: null,
    
    $51_2: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$$51_2($p0) {
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$18()) {
            if (!confirm(Microsoft.SharePoint.Taxonomy.ScriptResources.msgExitWOSaving)) {
                return;
            }
            else {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.$4J();
                Microsoft.SharePoint.Taxonomy.TermStoreManager.disableSubmitButton();
            }
        }
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$3h();
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$3g();
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$3B(false);
        this.onTabLoad();
        Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$2c());
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$Z = this.get_$3_2();
        Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.get_$3_2());
        Sys.UI.DomElement.removeCssClass(this.$8_2, 'tmt-tab-hover');
        Sys.UI.DomElement.addCssClass(this.$8_2, 'tmt-tab-selected');
    },
    
    onMouseOver: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$onMouseOver(e) {ULSkCf:;
        Sys.UI.DomElement.addCssClass(this.$8_2, 'tmt-tab-hover');
    },
    
    onMouseOut: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$onMouseOut(e) {ULSkCf:;
        Sys.UI.DomElement.removeCssClass(this.$8_2, 'tmt-tab-hover');
    },
    
    get_$3_2: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$get_$3_2() {ULSkCf:;
        return this.get_element();
    },
    
    isActive: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$isActive() {ULSkCf:;
        return (this.get_$3_2() === Microsoft.SharePoint.Taxonomy.TermStoreManager.$Z);
    },
    
    onTabLoad: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$onTabLoad() {
    },
    
    onPreSubmit: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$onPreSubmit() {ULSkCf:;
        return true;
    },
    
    onSaveCompleted: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$onSaveCompleted() {
    },
    
    hasPropertyChanged: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$hasPropertyChanged() {ULSkCf:;
        return false;
    },
    
    get_domIdPrefix: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$get_domIdPrefix() {ULSkCf:;
        if (!this.aspNetPrefix) {
            this.aspNetPrefix = Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix();
        }
        return this.aspNetPrefix;
    },
    
    aspNetPrefix: null,
    
    getChildElementByAuthoringId: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$getChildElementByAuthoringId(authoringId) {ULSkCf:;
        var $v_0 = this.get_domIdPrefix() + authoringId;
        return Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, $v_0);
    },
    
    addChangedHandler: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$addChangedHandler(element) {ULSkCf:;
        if (element && this.textChangedHandler) {
            $addHandler(element, 'change', this.textChangedHandler);
            $addHandler(element, 'keypress', this.textChangedHandler);
        }
    },
    
    addClickedHandler: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$addClickedHandler(element) {ULSkCf:;
        if (element && this.$13_2) {
            $addHandler(element, 'click', this.$13_2);
        }
    },
    
    removeClickedHandler: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$removeClickedHandler(element) {ULSkCf:;
        if (element && this.$13_2) {
            $removeHandler(element, 'click', this.$13_2);
        }
    },
    
    removeAllHandlers: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$removeAllHandlers(element) {ULSkCf:;
        if (element) {
            $clearHandlers(element);
        }
    },
    
    onTextChanged: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$onTextChanged(e) {ULSkCf:;
        if (e) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
        }
    },
    
    onOptionClicked: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$onOptionClicked(e) {ULSkCf:;
        if (e) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
        }
    },
    
    hideAllButtons: function Microsoft_SharePoint_Taxonomy_CustomPropertyTab$hideAllButtons() {ULSkCf:;
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$3B(true);
    }
}


Microsoft.SharePoint.Taxonomy.CustomSortTab = function Microsoft_SharePoint_Taxonomy_CustomSortTab(tabId) {ULSkCf:;
    this.$$d_$4o_3 = Function.createDelegate(this, this.$4o_3);
    this.$$d_$4D_3 = Function.createDelegate(this, this.$4D_3);
    this.$$d_$5Q_3 = Function.createDelegate(this, this.$5Q_3);
    Microsoft.SharePoint.Taxonomy.CustomSortTab.initializeBase(this, [ $get(tabId), tabId ]);
    this.set_sortOptionDefaultId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'UseDefaultSort');
    this.set_sortOptionCustomId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'UseCustomSort');
}
Microsoft.SharePoint.Taxonomy.CustomSortTab.$4W = function Microsoft_SharePoint_Taxonomy_CustomSortTab$$4W($p0) {
    if (SP.ScriptUtility.isNullOrEmptyString(Microsoft.SharePoint.Taxonomy.CustomSortTab.$1V)) {
        var $v_0 = new Sys.StringBuilder();
        for (var $v_1 = 0; $v_1 < $p0; $v_1++) {
            $v_0.append('<option>');
            $v_0.append(($v_1 + 1).toString());
            $v_0.append('</option>');
        }
        Microsoft.SharePoint.Taxonomy.CustomSortTab.$1V = $v_0.toString();
    }
    return Microsoft.SharePoint.Taxonomy.CustomSortTab.$1V;
}
Microsoft.SharePoint.Taxonomy.CustomSortTab.prototype = {
    
    get_sortOptionDefaultId: function Microsoft_SharePoint_Taxonomy_CustomSortTab$get_sortOptionDefaultId() {ULSkCf:;
        return this.$1F_3.id;
    },
    set_sortOptionDefaultId: function Microsoft_SharePoint_Taxonomy_CustomSortTab$set_sortOptionDefaultId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('SortOptionDefaultId');
        }
        this.$1F_3 = $get(value);
        this.$3N_3 = this.$$d_$5Q_3;
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.$1F_3, 'click', this.$3N_3);
        return value;
    },
    
    $1F_3: null,
    $3N_3: null,
    
    get_sortOptionCustomId: function Microsoft_SharePoint_Taxonomy_CustomSortTab$get_sortOptionCustomId() {ULSkCf:;
        return this.$2E_3.id;
    },
    set_sortOptionCustomId: function Microsoft_SharePoint_Taxonomy_CustomSortTab$set_sortOptionCustomId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('SortOptionCustomId');
        }
        this.$2E_3 = $get(value);
        this.$3M_3 = this.$$d_$4D_3;
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.$2E_3, 'click', this.$3M_3);
        return value;
    },
    
    $2E_3: null,
    $3M_3: null,
    
    get_childOrderingPanelId: function Microsoft_SharePoint_Taxonomy_CustomSortTab$get_childOrderingPanelId() {ULSkCf:;
        return this.$3L_3.id;
    },
    set_childOrderingPanelId: function Microsoft_SharePoint_Taxonomy_CustomSortTab$set_childOrderingPanelId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('ChildOrderingPanelId');
        }
        this.$3L_3 = $get(value);
        return value;
    },
    
    $3L_3: null,
    
    get_$3V_3: function Microsoft_SharePoint_Taxonomy_CustomSortTab$get_$3V_3() {ULSkCf:;
        if (!this.$2V_3) {
            this.$2V_3 = $get('descriptionForTerm');
        }
        return this.$2V_3;
    },
    
    $2V_3: null,
    
    get_$3W_3: function Microsoft_SharePoint_Taxonomy_CustomSortTab$get_$3W_3() {ULSkCf:;
        if (!this.$2W_3) {
            this.$2W_3 = $get('descriptionForTermSet');
        }
        return this.$2W_3;
    },
    
    $2W_3: null,
    
    get_$1Z_3: function Microsoft_SharePoint_Taxonomy_CustomSortTab$get_$1Z_3() {ULSkCf:;
        if (!this.$1Y_3) {
            this.$1Y_3 = $get('SortOrderTable');
        }
        if (!this.$1Y_3) {
            throw Error.argumentNull('SortOrderTable');
        }
        return this.$1Y_3;
    },
    set_$1Z_3: function Microsoft_SharePoint_Taxonomy_CustomSortTab$set_$1Z_3($p0) {
        this.$1Y_3 = $p0;
        return $p0;
    },
    
    $1Y_3: null,
    
    get_$2G_3: function Microsoft_SharePoint_Taxonomy_CustomSortTab$get_$2G_3() {ULSkCf:;
        if (!this.$2F_3) {
            this.$2F_3 = $get('SortOrderSection');
        }
        if (!this.$2F_3) {
            throw Error.argumentNull('SortOrderTable');
        }
        return this.$2F_3;
    },
    
    $2F_3: null,
    
    isApplicableType: function Microsoft_SharePoint_Taxonomy_CustomSortTab$isApplicableType(type) {ULSkCf:;
        var $v_0 = false;
        if (type === 3) {
            $v_0 = !Microsoft.SharePoint.Taxonomy.CustomDictionaryHelper.isCustomDictionaryTermSet(this.get_treeFocusNode().get_id()) && (Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(this.get_treeFocusNode()) !== Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.hashTagTermSetId);
        }
        else if (type === 4 && !this.get_treeFocusNode().get_isLeaf()) {
            $v_0 = true;
        }
        if ($v_0 && !Microsoft.SharePoint.Taxonomy.TermStoreManager.isSortOrderChange) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$16().value = 'unchanged';
        }
        return $v_0;
    },
    
    onTabLoad: function Microsoft_SharePoint_Taxonomy_CustomSortTab$onTabLoad() {ULSkCf:;
        if (!this.get_treeFocusNode() || !this.get_treeFocusNode().get_data()) {
            return;
        }
        if (this.get_treeFocusNode().get_nodeType() === 3) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.get_$3V_3());
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.get_$3W_3());
        }
        else {
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.get_$3W_3());
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.get_$3V_3());
        }
        if (SP.ScriptUtility.isNullOrUndefined(this.get_treeFocusNode().get_data().So) || !(this.get_treeFocusNode().get_data().So)) {
            this.$1F_3.checked = true;
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.get_$2G_3());
        }
        else {
            this.$2E_3.checked = true;
            this.$4D_3(null);
        }
    },
    
    onSaveCompleted: function Microsoft_SharePoint_Taxonomy_CustomSortTab$onSaveCompleted() {ULSkCf:;
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.isSortOrderChange) {
            if (this.$1F_3.checked) {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.So = false;
            }
            else {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.So = true;
            }
            this.get_treeFocusNode().refresh();
            this.get_treeFocusNode().loadChildren();
        }
    },
    
    onPreSubmit: function Microsoft_SharePoint_Taxonomy_CustomSortTab$onPreSubmit() {ULSkCf:;
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.isSortOrderChange) {
            this.$5E_3();
        }
        else {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$16().value = 'unchanged';
        }
        return true;
    },
    
    $5Q_3: function Microsoft_SharePoint_Taxonomy_CustomSortTab$$5Q_3($p0) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.isSortOrderChange = true;
        Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.get_$2G_3());
        Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$16().value = '';
        Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
    },
    
    $4D_3: function Microsoft_SharePoint_Taxonomy_CustomSortTab$$4D_3($p0) {
        if ($p0) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.isSortOrderChange = true;
            Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
        }
        var $v_0 = this.get_treeFocusNode().get_dataSource();
        if ($v_0) {
            if (this.get_treeFocusNode().get_nodeType() === 3) {
                $v_0.getCustomSortList(this.get_treeFocusNode().get_id(), Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.emptyGuid, this.$$d_$4o_3);
            }
            else if (this.get_treeFocusNode().get_nodeType() === 4) {
                $v_0.getCustomSortList(Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(this.get_treeFocusNode()), this.get_treeFocusNode().get_id(), this.$$d_$4o_3);
            }
        }
    },
    
    $4o_3: function Microsoft_SharePoint_Taxonomy_CustomSortTab$$4o_3($p0, $p1, $p2) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0.Error)) {
            var $v_0 = $p0.Content;
            var $v_1 = $v_0.split('|');
            if ($v_1.length === 2) {
                this.$58_3($v_1[0], $v_1[1]);
            }
            else {
            }
        }
        else {
            Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError($p0.Error);
        }
    },
    
    $58_3: function Microsoft_SharePoint_Taxonomy_CustomSortTab$$58_3($p0, $p1) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0) || SP.ScriptUtility.isNullOrEmptyString($p1)) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.get_$2G_3());
            return;
        }
        var $v_0 = $p0.split(':');
        var $v_1 = $p1.split(';');
        if ($v_0.length !== $v_1.length) {
            return;
        }
        var $v_2 = document.createElement('TBODY');
        var $v_3 = $v_0.length;
        Microsoft.SharePoint.Taxonomy.CustomSortTab.$1V = '';
        for (var $v_4 = 0; $v_4 < $v_3; $v_4++) {
            var $v_5 = document.createElement('TR');
            var $v_6 = document.createElement('TD');
            $v_6.innerHTML = $v_1[$v_4];
            $v_5.appendChild($v_6);
            var $v_7 = document.createElement('TD');
            $v_7.innerHTML = $v_0[$v_4];
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide($v_7);
            $v_5.appendChild($v_7);
            var $v_8 = document.createElement('TD');
            $v_8.innerHTML = '<select name=\'Position' + $v_4 + '\' onchange=\'Reorder(this,' + $v_4 + ',' + $v_3 + ');Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();\r\n                    Microsoft.SharePoint.Taxonomy.TermStoreManager.isSortOrderChange=true;\'>' + Microsoft.SharePoint.Taxonomy.CustomSortTab.$4W($v_3) + '</select>';
            $v_5.appendChild($v_8);
            if ($v_8.childNodes) {
                ($v_8.childNodes[0]).selectedIndex = $v_4;
            }
            if ($v_4 % 2) {
                Sys.UI.DomElement.addCssClass($v_5, 'ms-alternating');
            }
            $v_2.appendChild($v_5);
        }
        this.get_$1Z_3().parentNode.replaceChild($v_2, this.get_$1Z_3());
        this.set_$1Z_3($v_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.get_$2G_3());
    },
    
    $5E_3: function Microsoft_SharePoint_Taxonomy_CustomSortTab$$5E_3() {ULSkCf:;
        if (!this.get_$1Z_3().childNodes) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$16().value = '';
            return;
        }
        else if (this.$1F_3.checked) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$16().value = '';
            return;
        }
        var $v_0 = [];
        var $v_1 = this.get_$1Z_3().firstChild;
        while ($v_1) {
            if ($v_1.childNodes && $v_1.childNodes.length >= 3) {
                var $v_3 = $v_1.childNodes[1].innerHTML;
                var $v_4 = ($v_1.childNodes[2].childNodes[0]);
                $v_0[$v_4.selectedIndex] = $v_3;
            }
            $v_1 = $v_1.nextSibling;
        }
        var $v_2 = new Sys.StringBuilder();
        for (var $v_5 = 0; $v_5 < $v_0.length; $v_5++) {
            if ($v_5) {
                $v_2.append(':');
            }
            $v_2.append($v_0[$v_5]);
        }
        Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$16().value = $v_2.toString();
    }
}


Microsoft.SharePoint.Taxonomy.DictionaryTermPropertiesTab = function Microsoft_SharePoint_Taxonomy_DictionaryTermPropertiesTab(tabId) {ULSkCf:;
    Microsoft.SharePoint.Taxonomy.DictionaryTermPropertiesTab.initializeBase(this, [ $get(tabId), tabId ]);
    this.$13_3 = Microsoft.SharePoint.Taxonomy.DictionaryTermPropertiesTab.$4j;
    this.$1J_3 = this.getChildElementByAuthoringId('availableForDictionariesCheckBox');
}
Microsoft.SharePoint.Taxonomy.DictionaryTermPropertiesTab.$4j = function Microsoft_SharePoint_Taxonomy_DictionaryTermPropertiesTab$$4j($p0) {
    if ($p0) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
    }
}
Microsoft.SharePoint.Taxonomy.DictionaryTermPropertiesTab.prototype = {
    
    dispose: function Microsoft_SharePoint_Taxonomy_DictionaryTermPropertiesTab$dispose() {ULSkCf:;
        $clearHandlers(this.$1J_3);
        Microsoft.SharePoint.Taxonomy.CustomPropertyTab.prototype.dispose.call(this);
    },
    
    $1J_3: null,
    $13_3: null,
    
    isApplicableType: function Microsoft_SharePoint_Taxonomy_DictionaryTermPropertiesTab$isApplicableType(type) {ULSkCf:;
        var $v_0 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(this.get_treeFocusNode());
        return type === 4 && Microsoft.SharePoint.Taxonomy.CustomDictionaryHelper.isCustomDictionaryTermSet($v_0);
    },
    
    onTabLoad: function Microsoft_SharePoint_Taxonomy_DictionaryTermPropertiesTab$onTabLoad() {ULSkCf:;
        if (this.get_treeFocusNode() && this.get_treeFocusNode().get_data()) {
            var $v_0 = this.get_treeFocusNode().get_data().SCP;
            var $v_1 = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.deserializeProperties($v_0);
            var $v_2 = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.getStringProperty($v_1, 'AvailableForDictionaries');
            this.$1J_3.checked = $v_2 !== 'false';
        }
        $addHandler(this.$1J_3, 'click', this.$13_3);
    },
    
    onSaveCompleted: function Microsoft_SharePoint_Taxonomy_DictionaryTermPropertiesTab$onSaveCompleted() {ULSkCf:;
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.get_customPropertiesData();
        if ($v_0) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.SCP = $v_0.value;
            $v_0.value = null;
        }
    },
    
    onPreSubmit: function Microsoft_SharePoint_Taxonomy_DictionaryTermPropertiesTab$onPreSubmit() {ULSkCf:;
        var $v_0 = this.get_treeFocusNode().get_data().SCP;
        var $v_1 = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.deserializeProperties($v_0);
        $v_1['AvailableForDictionaries'] = (this.$1J_3.checked) ? 'true' : 'false';
        var $v_2 = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.serializeProperties($v_1);
        var $v_3 = Microsoft.SharePoint.Taxonomy.TermStoreManager.get_customPropertiesData();
        $v_3.value = $v_2;
        return true;
    }
}


Microsoft.SharePoint.Taxonomy.FrameResizer = function Microsoft_SharePoint_Taxonomy_FrameResizer(e) {ULSkCf:;
    this.$$d_$4v_2 = Function.createDelegate(this, this.$4v_2);
    this.$$d_$4t_2 = Function.createDelegate(this, this.$4t_2);
    this.$$d_$4s_2 = Function.createDelegate(this, this.$4s_2);
    Microsoft.SharePoint.Taxonomy.FrameResizer.initializeBase(this, [ e ]);
}
Microsoft.SharePoint.Taxonomy.FrameResizer.prototype = {
    $2j_2: null,
    $2l_2: null,
    $2k_2: null,
    $2a_2: false,
    $3C_2: 0,
    $3n_2: null,
    $3i_2: false,
    
    initialize: function Microsoft_SharePoint_Taxonomy_FrameResizer$initialize() {ULSkCf:;
        Sys.UI.Behavior.prototype.initialize.call(this);
        this.$2j_2 = this.$$d_$4s_2;
        this.$2R_2(this.get_element(), 'mousedown', this.$2j_2);
    },
    
    dispose: function Microsoft_SharePoint_Taxonomy_FrameResizer$dispose() {ULSkCf:;
        this.$2X_2(this.get_element(), 'mousedown', this.$2j_2);
        Sys.UI.Behavior.prototype.dispose.call(this);
    },
    
    $4s_2: function Microsoft_SharePoint_Taxonomy_FrameResizer$$4s_2($p0) {
        this.$2k_2 = this.$$d_$4t_2;
        this.$2R_2(document.documentElement, 'mousemove', this.$2k_2);
        this.$2l_2 = this.$$d_$4v_2;
        this.$2R_2(document.documentElement, 'mouseup', this.$2l_2);
        this.$2a_2 = true;
        this.$3n_2 = this.$4C_2($p0);
        var $v_0 = this.$3c_2();
        if ($v_0) {
            this.$3C_2 = $v_0.clientWidth;
        }
        if (!this.$3i_2) {
            var $v_1 = getKeywordControlId();
            var $v_2 = $get($v_1 + 'editableRegion');
            if ($v_2) {
                var $v_3 = $v_2.parentNode;
                var $v_4 = $v_3.parentNode.parentNode;
                $v_4.IsPercentWidth = true;
                $v_3.style.width = '';
                this.$3i_2 = true;
            }
        }
        $p0.preventDefault();
    },
    
    $4t_2: function Microsoft_SharePoint_Taxonomy_FrameResizer$$4t_2($p0) {
        if (this.$2a_2) {
            $p0.preventDefault();
            var $v_0 = this.$4C_2($p0);
            this.$5D_2($v_0);
            Microsoft.SharePoint.Taxonomy.TermStoreManager.adjustMasterPageLayout();
        }
    },
    
    $4v_2: function Microsoft_SharePoint_Taxonomy_FrameResizer$$4v_2($p0) {
        this.$2a_2 = false;
        this.$2X_2(document.documentElement, 'mousemove', this.$2k_2);
        this.$2X_2(document.documentElement, 'mouseup', this.$2l_2);
    },
    
    $5D_2: function Microsoft_SharePoint_Taxonomy_FrameResizer$$5D_2($p0) {
        var $v_0 = this.$3c_2();
        if ($v_0) {
            var $v_1 = $p0.x - this.$3n_2.x;
            var $v_2 = (document.documentElement.dir === 'rtl') ? this.$3C_2 - $v_1 : this.$3C_2 + $v_1;
            if ($v_2 < 250) {
                $v_2 = 250;
            }
            var $v_3 = $v_2 + 'px';
            $v_0.style.width = $v_3;
            Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$3D().style.width = $v_3;
            var $v_4 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$6.get_panel().parentNode;
            if ($v_4.offsetWidth < 300) {
                $v_4.style.width = '300px';
            }
        }
    },
    
    $3c_2: function Microsoft_SharePoint_Taxonomy_FrameResizer$$3c_2() {ULSkCf:;
        var $v_0 = this.get_element().previousSibling;
        while ($v_0 && $v_0.nodeType !== 1) {
            $v_0 = $v_0.previousSibling;
        }
        return $v_0;
    },
    
    $4C_2: function Microsoft_SharePoint_Taxonomy_FrameResizer$$4C_2($p0) {
        var $v_0 = parseInt($p0.clientX + document.body.scrollLeft - (document.body.offsetWidth - document.body.clientWidth) / 2);
        var $v_1 = parseInt($p0.clientY + document.body.offsetTop - (document.body.offsetHeight - document.body.clientHeight) / 2);
        var $v_2 = new Sys.UI.Point($v_0, $v_1);
        return $v_2;
    },
    
    $2R_2: function Microsoft_SharePoint_Taxonomy_FrameResizer$$2R_2($p0, $p1, $p2) {
        if ($p2) {
            $addHandler($p0, $p1, $p2);
        }
    },
    
    $2X_2: function Microsoft_SharePoint_Taxonomy_FrameResizer$$2X_2($p0, $p1, $p2) {
        if ($p2) {
            $removeHandler($p0, $p1, $p2);
            $p2 = null;
        }
    }
}


Microsoft.SharePoint.Taxonomy.GroupProperties = function Microsoft_SharePoint_Taxonomy_GroupProperties(e) {ULSkCf:;
    Microsoft.SharePoint.Taxonomy.GroupProperties.initializeBase(this, [ e ]);
}
Microsoft.SharePoint.Taxonomy.GroupProperties.prototype = {
    
    dispose: function Microsoft_SharePoint_Taxonomy_GroupProperties$dispose() {ULSkCf:;
        Sys.UI.Behavior.prototype.dispose.call(this);
    },
    
    get_disable: function Microsoft_SharePoint_Taxonomy_GroupProperties$get_disable() {ULSkCf:;
        return this.$Q_2;
    },
    set_disable: function Microsoft_SharePoint_Taxonomy_GroupProperties$set_disable(value) {ULSkCf:;
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
        if (($v_0.get_right() & 8) === 8 || ($v_0.get_right() & 64) === 64) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.get_$3O_2());
        }
        else {
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.get_$3O_2());
        }
        if (($v_0.get_right() & 16) === 16 || ($v_0.get_right() & 128) === 128) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.get_$3d_2());
            var $v_1 = $v_0.get_data().Iro;
            var $v_2 = $v_0.get_data().Iscg;
            if ($v_2 && !$v_1) {
                Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.get_$1X_2());
            }
            else {
                Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.get_$1X_2());
            }
        }
        else {
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.get_$3d_2());
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.get_$1X_2());
        }
        this.$m_2.disabled = value;
        if (value !== this.$Q_2) {
            if (!value && this.$H_2) {
                if (($v_0.get_right() & 8) === 8) {
                    this.$H_2.disabled = false;
                    this.$k_2.disabled = false;
                    Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.$1j_2);
                    Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.$1k_2);
                }
                else {
                    this.$H_2.disabled = true;
                    this.$k_2.disabled = true;
                    Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$1j_2);
                    Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$1k_2);
                }
                if (($v_0.get_right() & 16) === 16) {
                    this.$a_2.disabled = false;
                    this.$w_2.disabled = false;
                    Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.$1o_2);
                    Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.$1p_2);
                }
                else {
                    this.$a_2.disabled = true;
                    this.$w_2.disabled = true;
                    Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$1o_2);
                    Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$1p_2);
                }
            }
            this.$Q_2 = value;
        }
        if (value && this.$H_2) {
            this.$H_2.disabled = true;
            this.$k_2.disabled = true;
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$1j_2);
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$1k_2);
            this.$a_2.disabled = true;
            this.$w_2.disabled = true;
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$1o_2);
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$1p_2);
        }
        if ($v_0 && $v_0.get_isReadOnly()) {
            this.$h_2.disabled = true;
            this.$X_2.disabled = true;
        }
        else {
            this.$h_2.disabled = value;
            this.$X_2.disabled = value;
        }
        return value;
    },
    
    $Q_2: true,
    
    get_groupNameId: function Microsoft_SharePoint_Taxonomy_GroupProperties$get_groupNameId() {ULSkCf:;
        if (this.$h_2) {
            return this.$h_2.id;
        }
        else {
            return null;
        }
    },
    set_groupNameId: function Microsoft_SharePoint_Taxonomy_GroupProperties$set_groupNameId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('groupNameId');
        }
        this.$h_2 = $get(value);
        if (!this.$h_2) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        return value;
    },
    
    $h_2: null,
    
    get_groupDescriptionId: function Microsoft_SharePoint_Taxonomy_GroupProperties$get_groupDescriptionId() {ULSkCf:;
        if (this.$m_2) {
            return this.$m_2.id;
        }
        else {
            return null;
        }
    },
    set_groupDescriptionId: function Microsoft_SharePoint_Taxonomy_GroupProperties$set_groupDescriptionId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('groupDescriptionId');
        }
        this.$m_2 = $get(value);
        if (!this.$m_2) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        return value;
    },
    
    $m_2: null,
    
    get_groupManagerId: function Microsoft_SharePoint_Taxonomy_GroupProperties$get_groupManagerId() {ULSkCf:;
        return this.$3f_2;
    },
    set_groupManagerId: function Microsoft_SharePoint_Taxonomy_GroupProperties$set_groupManagerId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('groupManagerId');
        }
        this.$3f_2 = value;
        this.$a_2 = $get(value + '_upLevelDiv');
        this.$w_2 = $get(value + '_downlevelTextBox');
        this.$1p_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_panel(), value + '_checkNames');
        this.$1o_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_panel(), value + '_browse');
        this.$3e_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_panel(), value + '_errorLabel');
        return value;
    },
    
    $w_2: null,
    $a_2: null,
    $1p_2: null,
    $1o_2: null,
    $3e_2: null,
    $3f_2: null,
    
    get_contributorId: function Microsoft_SharePoint_Taxonomy_GroupProperties$get_contributorId() {ULSkCf:;
        return this.$3Q_2;
    },
    set_contributorId: function Microsoft_SharePoint_Taxonomy_GroupProperties$set_contributorId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('contributorId');
        }
        this.$3Q_2 = value;
        this.$k_2 = $get(value + '_downlevelTextBox');
        this.$H_2 = $get(value + '_upLevelDiv');
        this.$1k_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_panel(), value + '_checkNames');
        this.$1j_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_panel(), value + '_browse');
        this.$3P_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_panel(), value + '_errorLabel');
        return value;
    },
    
    $k_2: null,
    $H_2: null,
    $1k_2: null,
    $1j_2: null,
    $3P_2: null,
    $3Q_2: null,
    
    get_$1X_2: function Microsoft_SharePoint_Taxonomy_GroupProperties$get_$1X_2() {ULSkCf:;
        if (!this.$2D_2) {
            this.$2D_2 = $get('SiteCollectionAccessDiv');
            if (!this.$2D_2) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return this.$2D_2;
    },
    
    $2D_2: null,
    
    get_siteCollectionListId: function Microsoft_SharePoint_Taxonomy_GroupProperties$get_siteCollectionListId() {ULSkCf:;
        if (this.$X_2) {
            return this.$X_2.id;
        }
        else {
            return null;
        }
    },
    set_siteCollectionListId: function Microsoft_SharePoint_Taxonomy_GroupProperties$set_siteCollectionListId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('siteCollectionUrlList');
        }
        this.$X_2 = $get(value);
        if (!this.$X_2) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        return value;
    },
    
    $X_2: null,
    
    get_$3d_2: function Microsoft_SharePoint_Taxonomy_GroupProperties$get_$3d_2() {ULSkCf:;
        if (!this.$1q_2) {
            this.$1q_2 = $get('GroupManagerDiv');
            if (!this.$1q_2) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return this.$1q_2;
    },
    
    $1q_2: null,
    
    get_$3O_2: function Microsoft_SharePoint_Taxonomy_GroupProperties$get_$3O_2() {ULSkCf:;
        if (!this.$1l_2) {
            this.$1l_2 = $get('ContributorDiv');
            if (!this.$1l_2) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return this.$1l_2;
    },
    
    $1l_2: null,
    
    get_panel: function Microsoft_SharePoint_Taxonomy_GroupProperties$get_panel() {ULSkCf:;
        return this.get_element();
    },
    
    $1I_2: function Microsoft_SharePoint_Taxonomy_GroupProperties$$1I_2($p0) {
        if (!$p0 || !$p0.get_data()) {
            return;
        }
        if (this.$h_2) {
            this.$h_2.value = $p0.get_text();
        }
        var $v_0 = $p0.get_data().Ds;
        if (!$v_0) {
            this.$m_2.value = '';
        }
        else {
            this.$m_2.value = $v_0;
        }
        if (this.$a_2) {
            var $v_1 = $p0.get_data().Gm;
            if (!$v_1) {
                this.$w_2.value = '';
                this.$a_2.innerHTML = '';
            }
            else {
                this.$w_2.value = $v_1;
                this.$a_2.innerHTML = $v_1;
            }
        }
        if (this.$H_2) {
            var $v_2 = $p0.get_data().Cb;
            if (!$v_2) {
                this.$k_2.value = '';
                this.$H_2.innerHTML = '';
            }
            else {
                this.$k_2.value = $v_2;
                this.$H_2.innerHTML = $v_2;
            }
        }
        if (this.$X_2) {
            if ($p0.get_data().Iscg && !$p0.get_data().Iro) {
                var $v_3 = $p0.get_data().Scu;
                if (!$v_3) {
                    this.$X_2.value = '';
                }
                else {
                    this.$X_2.value = $v_3;
                }
            }
            else {
                this.$X_2.value = '';
            }
        }
    },
    
    $1H_2: function Microsoft_SharePoint_Taxonomy_GroupProperties$$1H_2() {ULSkCf:;
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
        if ($v_0) {
            var $v_1 = $v_0.get_data().Iro;
            if ($v_1) {
                this.set_disable(true);
            }
            else {
                this.set_disable(!Microsoft.SharePoint.Taxonomy.TermStoreManager.doesUserHaveWritePermission($v_0));
                if ($v_0.get_data().Iscg) {
                    Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.get_$1X_2());
                }
                else {
                    Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.get_$1X_2());
                }
            }
        }
    },
    
    $1W_2: function Microsoft_SharePoint_Taxonomy_GroupProperties$$1W_2() {ULSkCf:;
        Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeNameCopy = this.$h_2.value;
        Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Ds = this.$m_2.value;
        if (this.$a_2 && (Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Gm !== this.$a_2.innerHTML)) {
            if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Gm = this.$a_2.innerHTML;
            }
            else {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Gm = this.$w_2.value;
            }
        }
        if (this.$H_2 && Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Cb !== this.$H_2.innerHTML) {
            if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Cb = this.$H_2.innerHTML;
            }
            else {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Cb = this.$k_2.value;
            }
        }
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Iscg && !Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Iro) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Scu = this.$X_2.value;
        }
    },
    
    $1r_2: function Microsoft_SharePoint_Taxonomy_GroupProperties$$1r_2() {ULSkCf:;
        var $v_0 = false;
        var $v_1 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
        if (!$v_1 || $v_1.get_disabled() || !$v_1.get_data()) {
            $v_0 = false;
        }
        else if (this.$h_2.value !== $v_1.get_text()) {
            $v_0 = true;
        }
        else if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$R(this.$m_2.value, $v_1.get_data().Ds)) {
            $v_0 = true;
        }
        else if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$4a(this.$X_2.value, $v_1.get_data().Scu)) {
            $v_0 = true;
        }
        else if (Sys.Browser.agent === Sys.Browser.InternetExplorer && this.$H_2) {
            if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$R(this.$a_2.innerHTML, $v_1.get_data().Gm)) {
                $v_0 = true;
            }
            else if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$R(this.$H_2.innerHTML, $v_1.get_data().Cb)) {
                $v_0 = true;
            }
        }
        else if (this.$k_2) {
            if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$R(this.$w_2.value, $v_1.get_data().Gm)) {
                $v_0 = true;
            }
            else if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$R(this.$k_2.value, $v_1.get_data().Cb)) {
                $v_0 = true;
            }
        }
        return $v_0;
    },
    
    $2p_2: function Microsoft_SharePoint_Taxonomy_GroupProperties$$2p_2() {ULSkCf:;
        this.set_disable(true);
    },
    
    $28_2: function Microsoft_SharePoint_Taxonomy_GroupProperties$$28_2() {ULSkCf:;
        this.$3e_2.innerHTML = '';
        this.$3P_2.innerHTML = '';
    }
}


Microsoft.SharePoint.Taxonomy.ItemCustomPropertiesTab = function Microsoft_SharePoint_Taxonomy_ItemCustomPropertiesTab(tabId) {ULSkCf:;
    Microsoft.SharePoint.Taxonomy.ItemCustomPropertiesTab.initializeBase(this, [ $get(tabId), tabId ]);
}
Microsoft.SharePoint.Taxonomy.ItemCustomPropertiesTab.prototype = {
    
    dispose: function Microsoft_SharePoint_Taxonomy_ItemCustomPropertiesTab$dispose() {ULSkCf:;
        if (this.get_$1C_3()) {
            this.get_$1C_3().dispose();
        }
        if (this.get_$o_3()) {
            this.get_$o_3().dispose();
        }
        Microsoft.SharePoint.Taxonomy.CustomPropertyTab.prototype.dispose.call(this);
    },
    
    isApplicableType: function Microsoft_SharePoint_Taxonomy_ItemCustomPropertiesTab$isApplicableType(type) {ULSkCf:;
        switch (type) {
            case 12:
                return false;
            case 3:
                if (Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.isHashtag(this.get_treeFocusNode())) {
                    return false;
                }
                return true;
            case 4:
                var $v_0 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(this.get_treeFocusNode());
                return !Microsoft.SharePoint.Taxonomy.CustomDictionaryHelper.isCustomDictionaryTermSet($v_0);
            default:
                return false;
        }
    },
    
    onTabLoad: function Microsoft_SharePoint_Taxonomy_ItemCustomPropertiesTab$onTabLoad() {ULSkCf:;
        this.$5C_3();
        this.$4d_3(this.get_treeFocusNode());
    },
    
    onPreSubmit: function Microsoft_SharePoint_Taxonomy_ItemCustomPropertiesTab$onPreSubmit() {ULSkCf:;
        var $v_0 = this.get_$1C_3().onPreSubmit();
        if (!this.get_$o_3().$17_0) {
            $v_0 = this.get_$o_3().onPreSubmit() && $v_0;
        }
        return $v_0;
    },
    
    onSaveCompleted: function Microsoft_SharePoint_Taxonomy_ItemCustomPropertiesTab$onSaveCompleted() {ULSkCf:;
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.isCustomPropertyChanged) {
            Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.saveProperties(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_customPropertiesData(), 'SCP');
            if (!this.get_$o_3().$17_0) {
                Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.saveProperties(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_localCustomPropertiesData(), 'LCP');
            }
            Microsoft.SharePoint.Taxonomy.TermStoreManager.isCustomPropertyChanged = false;
        }
    },
    
    $5C_3: function Microsoft_SharePoint_Taxonomy_ItemCustomPropertiesTab$$5C_3() {ULSkCf:;
        this.get_$1C_3().resetEditor();
        this.get_$o_3().resetEditor();
    },
    
    $4d_3: function Microsoft_SharePoint_Taxonomy_ItemCustomPropertiesTab$$4d_3($p0) {
        if (!$p0 || !$p0.get_data()) {
            return;
        }
        if ($p0.get_nodeType() === 3) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.get_$3S_3());
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.get_$3T_3());
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.get_$3y_3());
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.get_$3l_3());
            this.get_$o_3().$17_0 = true;
        }
        else if ($p0.get_nodeType() === 4) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.get_$3T_3());
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.get_$3S_3());
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.get_$3y_3());
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.get_$3l_3());
            this.get_$o_3().$17_0 = false;
            this.get_$o_3().loadEditor($p0);
        }
        this.get_$1C_3().loadEditor($p0);
    },
    
    get_$3S_3: function Microsoft_SharePoint_Taxonomy_ItemCustomPropertiesTab$get_$3S_3() {ULSkCf:;
        if (!this.$2S_3) {
            this.$2S_3 = $get('customPropDescriptionForTerm');
        }
        return this.$2S_3;
    },
    
    $2S_3: null,
    
    get_$3T_3: function Microsoft_SharePoint_Taxonomy_ItemCustomPropertiesTab$get_$3T_3() {ULSkCf:;
        if (!this.$2T_3) {
            this.$2T_3 = $get('customPropDescriptionForTermSet');
        }
        return this.$2T_3;
    },
    
    $2T_3: null,
    
    get_$3l_3: function Microsoft_SharePoint_Taxonomy_ItemCustomPropertiesTab$get_$3l_3() {ULSkCf:;
        if (!this.$2i_3) {
            this.$2i_3 = $get('localCustomPropDiv');
        }
        return this.$2i_3;
    },
    
    $2i_3: null,
    
    get_$3y_3: function Microsoft_SharePoint_Taxonomy_ItemCustomPropertiesTab$get_$3y_3() {ULSkCf:;
        if (!this.$33_3) {
            this.$33_3 = $get('sharedPropTableTitleSection');
        }
        return this.$33_3;
    },
    
    $33_3: null,
    
    get_$1C_3: function Microsoft_SharePoint_Taxonomy_ItemCustomPropertiesTab$get_$1C_3() {ULSkCf:;
        if (!this.$2t_3) {
            this.$2t_3 = new Microsoft.SharePoint.Taxonomy.CustomPropertyEditor(false);
            this.get_$1C_3().setTabIndexStart(100);
        }
        return this.$2t_3;
    },
    
    $2t_3: null,
    
    get_$o_3: function Microsoft_SharePoint_Taxonomy_ItemCustomPropertiesTab$get_$o_3() {ULSkCf:;
        if (!this.$1z_3) {
            this.$1z_3 = new Microsoft.SharePoint.Taxonomy.CustomPropertyEditor(true);
            this.$1z_3.setTabIndexStart(1000);
        }
        return this.$1z_3;
    },
    
    $1z_3: null
}


Microsoft.SharePoint.Taxonomy.KeywordProperties = function Microsoft_SharePoint_Taxonomy_KeywordProperties(e) {ULSkCf:;
    this.$$d_$4c_2 = Function.createDelegate(this, this.$4c_2);
    Microsoft.SharePoint.Taxonomy.KeywordProperties.initializeBase(this, [ e ]);
}
Microsoft.SharePoint.Taxonomy.KeywordProperties.prototype = {
    
    dispose: function Microsoft_SharePoint_Taxonomy_KeywordProperties$dispose() {ULSkCf:;
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.$b_2, 'click', this.$2f_2);
        Sys.UI.Behavior.prototype.dispose.call(this);
    },
    
    get_disable: function Microsoft_SharePoint_Taxonomy_KeywordProperties$get_disable() {ULSkCf:;
        return this.$Q_2;
    },
    set_disable: function Microsoft_SharePoint_Taxonomy_KeywordProperties$set_disable(value) {ULSkCf:;
        if (value !== this.$Q_2) {
            this.$b_2.disabled = true;
            this.$Q_2 = value;
        }
        return value;
    },
    
    $Q_2: false,
    
    get_keywordAvailableForTaggingId: function Microsoft_SharePoint_Taxonomy_KeywordProperties$get_keywordAvailableForTaggingId() {ULSkCf:;
        if (this.$b_2) {
            return this.$b_2.id;
        }
        else {
            return null;
        }
    },
    set_keywordAvailableForTaggingId: function Microsoft_SharePoint_Taxonomy_KeywordProperties$set_keywordAvailableForTaggingId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('keywordAvailableForTagging');
        }
        this.$b_2 = $get(value);
        this.$2f_2 = this.$$d_$4c_2;
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.$b_2, 'click', this.$2f_2);
        return value;
    },
    
    $b_2: null,
    $2f_2: null,
    
    $4c_2: function Microsoft_SharePoint_Taxonomy_KeywordProperties$$4c_2($p0) {
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.It !== this.$b_2.checked) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.It = this.$b_2.checked;
            Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
        }
    },
    
    get_$3_2: function Microsoft_SharePoint_Taxonomy_KeywordProperties$get_$3_2() {ULSkCf:;
        return this.get_element();
    },
    
    $1I_2: function Microsoft_SharePoint_Taxonomy_KeywordProperties$$1I_2($p0) {
        if (!$p0) {
            return;
        }
        if ($p0.get_data()) {
            if (this.$b_2) {
                this.$b_2.checked = $p0.get_data().It;
            }
        }
    },
    
    $1H_2: function Microsoft_SharePoint_Taxonomy_KeywordProperties$$1H_2() {ULSkCf:;
        var $v_0 = !Microsoft.SharePoint.Taxonomy.TermStoreManager.doesUserHaveWritePermission(Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode());
        this.set_disable($v_0);
    },
    
    $1W_2: function Microsoft_SharePoint_Taxonomy_KeywordProperties$$1W_2() {ULSkCf:;
        Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.It = this.$b_2.checked;
    }
}


Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker = function Microsoft_SharePoint_Taxonomy_TaxonomyTreePicker() {
}
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$5M = function Microsoft_SharePoint_Taxonomy_TaxonomyTreePicker$get_$5M() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1d) {
        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1d = $get('MetadataTreeControlPicker');
        if (!Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1d) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
    }
    return Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1d;
}
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$3j = function Microsoft_SharePoint_Taxonomy_TaxonomyTreePicker$get_$3j() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1S) {
        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1S = $get('KeywordBlockingArea');
        if (!Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1S) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
    }
    return Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1S;
}
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$1x = function Microsoft_SharePoint_Taxonomy_TaxonomyTreePicker$get_$1x() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1w) {
        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1w = $get('isBlockingKeyword');
    }
    return Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1w;
}
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$1g = function Microsoft_SharePoint_Taxonomy_TaxonomyTreePicker$get_$1g() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$D) {
        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$D = $get('CancelButton');
        if (!Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$D) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
    }
    return Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$D;
}
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$21 = function Microsoft_SharePoint_Taxonomy_TaxonomyTreePicker$get_$21() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1U) {
        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1U = $get('ctl00_OkButton');
        if (!Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1U) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
    }
    return Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1U;
}
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.loadTaxonomyPicker = function Microsoft_SharePoint_Taxonomy_TaxonomyTreePicker$loadTaxonomyPicker() {ULSkCf:;
    Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$A = new Microsoft.SharePoint.Taxonomy.Tree(Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$5M());
    var $v_0 = new Microsoft.SharePoint.Taxonomy.TaxonomyDataSource();
    var $v_1 = SP.UI.ModalDialog.get_childDialog().get_args();
    var $v_2 = false;
    if ($v_1) {
        var $v_3 = $v_1['excludeGuidList'];
        var $v_4 = $v_1['requirePermission'];
        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$d = $v_1['operation'];
        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$c = $v_1['nodeType'];
        if (!SP.ScriptUtility.isNullOrEmptyString($v_3)) {
            var $v_7 = $v_3.split(':');
            for (var $v_8 = 0; $v_8 < $v_7.length; $v_8++) {
                if (!SP.ScriptUtility.isNullOrEmptyString($v_7[$v_8])) {
                    Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$A.get_filter().add(1, null, $v_7[$v_8]);
                }
            }
            Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$A.set_enableFiltering(true);
        }
        if ($v_4) {
            Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$A.get_filter().add(2, null, 'true');
            Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$A.set_enableFiltering(true);
        }
        if (Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$d === Microsoft.SharePoint.Taxonomy.TreeUtility.moveOperation && (Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$c === 3 || Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$c === 12)) {
            Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$A.get_filter().add(3, null, Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$c);
            Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$A.set_enableFiltering(true);
        }
        if (Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$c === 4 || Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$c === 7) {
            if (Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$d === Microsoft.SharePoint.Taxonomy.TreeUtility.moveOperation || Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$d === Microsoft.SharePoint.Taxonomy.TreeUtility.mergeOperation) {
                Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$A.get_filter().add(4, null, true);
                Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$A.get_filter().add(5, null, true);
            }
        }
        if (Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$c === 7) {
            $v_2 = true;
        }
        $v_0.set_sspId($v_1['sspId']);
        var $v_5 = $v_1['webId'];
        if (!SP.ScriptUtility.isNullOrEmptyString($v_5) && $v_5 !== Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.emptyGuid) {
            $v_0.set_webId($v_5);
        }
        var $v_6 = $v_1['listId'];
        if (!SP.ScriptUtility.isNullOrEmptyString($v_6) && $v_6 !== Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.emptyGuid) {
            $v_0.set_listId($v_6);
        }
        if (Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$d !== Microsoft.SharePoint.Taxonomy.TreeUtility.reuseOperation && Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$d !== Microsoft.SharePoint.Taxonomy.TreeUtility.reusePinOperation) {
            var $v_9 = $v_1['termSetId'];
            if (!SP.ScriptUtility.isNullOrEmptyString($v_9) && $v_9 !== Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.emptyGuid) {
                $v_0.set_rootNodeType(3);
                $v_0.set_rootGuids($v_9);
            }
        }
        $v_0.set_initialNodeSelected($v_1['focusNodePath']);
        if (SP.ScriptUtility.isNullOrUndefined($v_1['lcid'])) {
            Error.create('Please set a Lcid for the picker dialog');
        }
        $v_0.set_displayLcid($v_1['lcid']);
        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$A.set_clientDataSource($v_0);
        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$A.set_readOnly(true);
        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$A.add_propertyChanged(Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$4z);
        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$A.initialize();
        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1h = Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.onCancel;
        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$1g().onclick = 'return false;';
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$1g(), 'click', Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1h);
        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$11 = Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$3o;
        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$F = new Microsoft.SharePoint.Taxonomy.ControlObject($get(getKeywordControlId()));
        if (!Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$F) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$F.setSspId($v_0.get_sspId());
        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$F.addAllTermValidHandler(Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$11);
    }
    if (!$v_2) {
        Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$3j());
    }
    else {
        Microsoft.SharePoint.Taxonomy.TreeUtility.show(Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$3j());
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$1x(), 'click', Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.onCheckboxClick);
    }
    Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$F.addAllTermValidHandler(Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$11);
    Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$1g().focus();
}
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.onCancel = function Microsoft_SharePoint_Taxonomy_TaxonomyTreePicker$onCancel(e) {ULSkCf:;
    Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$1g(), 'click', Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1h);
    SP.UI.ModalDialog.get_childDialog().close(0);
}
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.onCheckboxClick = function Microsoft_SharePoint_Taxonomy_TaxonomyTreePicker$onCheckboxClick(e) {ULSkCf:;
    var $v_0 = null;
    if (!SP.UI.ModalDialog.get_childDialog().get_returnValue()) {
        $v_0 = new Microsoft.SharePoint.Taxonomy.PickerReturnType();
        SP.UI.ModalDialog.get_childDialog().set_returnValue($v_0);
    }
    else {
        $v_0 = SP.UI.ModalDialog.get_childDialog().get_returnValue();
    }
    $v_0.isKeywordBlocking = Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$1x().checked;
}
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$3o = function Microsoft_SharePoint_Taxonomy_TaxonomyTreePicker$$3o($p0, $p1) {
    if (Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$F.get_allTermsValid()) {
        var $v_0 = new Microsoft.SharePoint.Taxonomy.Term(Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$F.getRawText());
        if ($v_0.get_guid() !== Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.emptyGuid) {
            Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$A.expandToNodeWithPaging(Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.taxonomyTreeRootId + '|' + $v_0.get_path());
        }
    }
}
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$4z = function Microsoft_SharePoint_Taxonomy_TaxonomyTreePicker$$4z($p0, $p1) {
    if ($p1.get_propertyName() === 'focusNode') {
        var $v_0 = Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$A.get_focusNode();
        if (SP.UI.ModalDialog.get_childDialog() && $v_0) {
            var $v_1 = null;
            if (!SP.UI.ModalDialog.get_childDialog().get_returnValue()) {
                $v_1 = new Microsoft.SharePoint.Taxonomy.PickerReturnType();
                SP.UI.ModalDialog.get_childDialog().set_returnValue($v_1);
            }
            else {
                $v_1 = SP.UI.ModalDialog.get_childDialog().get_returnValue();
            }
            $v_1.type = $v_0.get_nodeType();
            $v_1.guid = $v_0.get_id() + ':' + Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId($v_0);
            if (Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$1x()) {
                $v_1.isKeywordBlocking = Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$1x().checked;
            }
            if (Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$d === Microsoft.SharePoint.Taxonomy.TreeUtility.reuseOperation || Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$d === Microsoft.SharePoint.Taxonomy.TreeUtility.reusePinOperation) {
                if ($v_0.get_nodeType() === 4 && !$v_0.get_isDeprecated()) {
                    Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$u(true);
                }
                else {
                    Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$u(false);
                }
            }
            else if (Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$d === Microsoft.SharePoint.Taxonomy.TreeUtility.moveOperation) {
                if (Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$c === 4 || Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$c === 7) {
                    if ($v_0.get_nodeType() === 4 || $v_0.get_nodeType() === 3 || $v_0.get_nodeType() === 12) {
                        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$u(true);
                    }
                    else {
                        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$u(false);
                    }
                }
                else if (Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$c === 3) {
                    if ($v_0.get_nodeType() === 1 || $v_0.get_nodeType() === 8 || $v_0.get_nodeType() === 2) {
                        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$u(true);
                    }
                    else {
                        Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$u(false);
                    }
                }
                else {
                }
            }
            else if (Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$d === Microsoft.SharePoint.Taxonomy.TreeUtility.mergeOperation) {
                if ($v_0.get_nodeType() === 4) {
                    Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$u(true);
                }
                else {
                    Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$u(false);
                }
            }
        }
    }
}
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.onOKButtonClicked = function Microsoft_SharePoint_Taxonomy_TaxonomyTreePicker$onOKButtonClicked() {ULSkCf:;
    SP.UI.ModalDialog.get_childDialog().close(1);
}
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.onCancelButtonClicked = function Microsoft_SharePoint_Taxonomy_TaxonomyTreePicker$onCancelButtonClicked() {ULSkCf:;
    SP.UI.ModalDialog.get_childDialog().close(0);
}
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$u = function Microsoft_SharePoint_Taxonomy_TaxonomyTreePicker$$u($p0) {
    if ($p0) {
        if (Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$21().disabled) {
            Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$21().disabled = false;
        }
    }
    else {
        if (!Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$21().disabled) {
            Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.get_$21().disabled = true;
        }
    }
}


Microsoft.SharePoint.Taxonomy.TermProperties = function Microsoft_SharePoint_Taxonomy_TermProperties(e) {ULSkCf:;
    this.$$d_validateLabels = Function.createDelegate(this, this.validateLabels);
    this.$$d_$4r_2 = Function.createDelegate(this, this.$4r_2);
    this.$$d_$5K_2 = Function.createDelegate(this, this.$5K_2);
    this.$l_2 = Microsoft.SharePoint.Taxonomy.TermProperties.$x;
    this.$2I_2 = Microsoft.SharePoint.Taxonomy.TermProperties.$x;
    Microsoft.SharePoint.Taxonomy.TermProperties.initializeBase(this, [ e ]);
}
Microsoft.SharePoint.Taxonomy.TermProperties.createANewLabel = function Microsoft_SharePoint_Taxonomy_TermProperties$createANewLabel(text) {ULSkCf:;
    var $v_0 = document.createElement('LI');
    var $v_1 = document.createElement('INPUT');
    Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler($v_1, 'blur', Microsoft.SharePoint.Taxonomy.TermProperties.$2H);
    if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.get_sharedPropertiesDisabled()) {
        $v_1.disabled = true;
    }
    $v_1.type = 'Text';
    $v_1.value = text;
    $v_1.title = Microsoft.SharePoint.Taxonomy.ScriptResources.tsmt_termproperty_otherlabels;
    Sys.UI.DomElement.addCssClass($v_1, 'ms-long');
    $v_0.appendChild($v_1);
    Sys.UI.DomElement.addCssClass($v_0, 'tmt-term-lbl');
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TermProperties.prototype = {
    
    dispose: function Microsoft_SharePoint_Taxonomy_TermProperties$dispose() {ULSkCf:;
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.$j_2, 'click', this.$3A_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.$4_2, 'change', this.$1b_2);
    },
    
    get_disable: function Microsoft_SharePoint_Taxonomy_TermProperties$get_disable() {ULSkCf:;
        return this.get_sharedPropertiesDisabled() && this.get_localPropertiesDisabled();
    },
    set_disable: function Microsoft_SharePoint_Taxonomy_TermProperties$set_disable(value) {ULSkCf:;
        this.set_sharedPropertiesDisabled(value);
        this.set_localPropertiesDisabled(value);
        return value;
    },
    
    get_sharedPropertiesDisabled: function Microsoft_SharePoint_Taxonomy_TermProperties$get_sharedPropertiesDisabled() {ULSkCf:;
        return this.$3z_2;
    },
    set_sharedPropertiesDisabled: function Microsoft_SharePoint_Taxonomy_TermProperties$set_sharedPropertiesDisabled(value) {ULSkCf:;
        this.$4_2.disabled = false;
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
        if ($v_0.get_data().Ir && !$v_0.get_data().Sw) {
            this.$1_2.disabled = true;
            this.$1P_2(true);
            this.$r_2.disabled = true;
            this.$L_2.disabled = true;
        }
        else {
            this.$1_2.disabled = value;
            this.$1P_2(value);
            this.$r_2.disabled = value;
            this.$L_2.disabled = value;
        }
        this.$3z_2 = value;
        return value;
    },
    
    $3z_2: true,
    
    get_localPropertiesDisabled: function Microsoft_SharePoint_Taxonomy_TermProperties$get_localPropertiesDisabled() {ULSkCf:;
        return this.$3m_2;
    },
    set_localPropertiesDisabled: function Microsoft_SharePoint_Taxonomy_TermProperties$set_localPropertiesDisabled(value) {ULSkCf:;
        this.$j_2.disabled = value;
        this.$3m_2 = value;
        return value;
    },
    
    $3m_2: true,
    sourceTermChanged: false,
    
    get_termAvailableForTaggingId: function Microsoft_SharePoint_Taxonomy_TermProperties$get_termAvailableForTaggingId() {ULSkCf:;
        if (this.$j_2) {
            return this.$j_2.id;
        }
        else {
            return null;
        }
    },
    set_termAvailableForTaggingId: function Microsoft_SharePoint_Taxonomy_TermProperties$set_termAvailableForTaggingId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('termAvailableForTaggingId');
        }
        this.$j_2 = $get(value);
        this.$3A_2 = this.$$d_$5K_2;
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.$j_2, 'click', this.$3A_2);
        return value;
    },
    
    $j_2: null,
    $3A_2: null,
    
    $5K_2: function Microsoft_SharePoint_Taxonomy_TermProperties$$5K_2($p0) {
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.It !== this.$j_2.checked) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.It = this.$j_2.checked;
            Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
        }
    },
    
    get_termLangId: function Microsoft_SharePoint_Taxonomy_TermProperties$get_termLangId() {ULSkCf:;
        if (this.$4_2) {
            return this.$4_2.id;
        }
        else {
            return null;
        }
    },
    set_termLangId: function Microsoft_SharePoint_Taxonomy_TermProperties$set_termLangId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('termLangId');
        }
        this.$4_2 = $get(value);
        this.$1b_2 = this.$$d_$4r_2;
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.$4_2, 'change', this.$1b_2);
        return value;
    },
    
    $4_2: null,
    $1b_2: null,
    $4S_2: null,
    $3R_2: null,
    
    $4r_2: function Microsoft_SharePoint_Taxonomy_TermProperties$$4r_2($p0) {
        this.$30_2(this.$l_2);
        this.$46_2(this.$4_2.selectedIndex);
        this.$l_2 = this.$4_2.selectedIndex;
    },
    
    $3X_2: function Microsoft_SharePoint_Taxonomy_TermProperties$$3X_2() {ULSkCf:;
        if (this.get_sharedPropertiesDisabled()) {
            this.$1_2.disabled = true;
            this.$1P_2(true);
            return;
        }
        if (SP.ScriptUtility.isNullOrEmptyString(this.$L_2.value)) {
            if (!this.$1_2.disabled) {
                this.$1_2.disabled = true;
                this.$1P_2(true);
            }
        }
        else {
            var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
            if (this.$1_2.disabled && (!$v_0.get_data().Ir || $v_0.get_data().Sw)) {
                this.$1_2.disabled = false;
                this.$1P_2(false);
            }
        }
    },
    
    $1P_2: function Microsoft_SharePoint_Taxonomy_TermProperties$$1P_2($p0) {
        if (this.$1_2 && this.$1_2.lastChild && this.$1_2.lastChild.firstChild) {
            var $v_0 = this.$1_2.lastChild.firstChild;
            $v_0.disabled = $p0;
        }
    },
    
    $30_2: function Microsoft_SharePoint_Taxonomy_TermProperties$$30_2($p0) {
        if ($p0 < 0 || $p0 > this.$4_2.options.length) {
            throw Error.argumentOutOfRange('selectedIdx');
        }
        var $v_0 = (this.$4_2.options[$p0]).value;
        var $v_1 = this.$1n_2($v_0);
        if ($v_1 === Microsoft.SharePoint.Taxonomy.TermProperties.$x) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorInvalidTermStoreLcid);
        }
        var $v_2 = this.$2Y_2($v_0);
        var $v_3 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_data().Lb;
        if (($v_3[$v_1].Ds !== $v_2.Ds) || ($v_3[$v_1].Ln !== $v_2.Ln)) {
            this.$V_2[$v_1] = $v_2;
            Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
        }
    },
    
    $2Y_2: function Microsoft_SharePoint_Taxonomy_TermProperties$$2Y_2($p0) {
        var $v_0 = {};
        $v_0.Ds = this.$r_2.value;
        $v_0.Lc = $p0;
        var $v_1 = this.$1_2.childNodes.length;
        if (this.$1_2.lastChild && this.$1_2.lastChild.firstChild) {
            var $v_3 = this.$1_2.lastChild.firstChild;
            if (Sys.UI.DomElement.containsCssClass($v_3, 'font-gray')) {
                $v_1--;
            }
        }
        var $v_2 = new Sys.StringBuilder();
        $v_2.append(this.$L_2.value);
        for (var $v_4 = 0; $v_4 < $v_1; $v_4++) {
            var $v_5 = this.$3Z_2(this.$1_2.childNodes[$v_4]);
            if (!SP.ScriptUtility.isNullOrEmptyString($v_5)) {
                $v_2.append('|');
                $v_2.append($v_5);
            }
        }
        $v_0.Ln = $v_2.toString();
        return $v_0;
    },
    
    $3Z_2: function Microsoft_SharePoint_Taxonomy_TermProperties$$3Z_2($p0) {
        if (!$p0) {
            throw Error.argumentNull('labelEntry');
        }
        var $v_0 = $p0.firstChild;
        if ($v_0) {
            return ($v_0).value;
        }
        else {
            return '';
        }
    },
    
    get_termDescriptionId: function Microsoft_SharePoint_Taxonomy_TermProperties$get_termDescriptionId() {ULSkCf:;
        if (this.$r_2) {
            return this.$r_2.id;
        }
        else {
            return null;
        }
    },
    set_termDescriptionId: function Microsoft_SharePoint_Taxonomy_TermProperties$set_termDescriptionId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('termDescriptionId');
        }
        this.$r_2 = $get(value);
        this.$r_2.disabled = true;
        return value;
    },
    
    $r_2: null,
    
    get_termDefaultLabelId: function Microsoft_SharePoint_Taxonomy_TermProperties$get_termDefaultLabelId() {ULSkCf:;
        if (this.$L_2) {
            return this.$L_2.id;
        }
        else {
            return null;
        }
    },
    set_termDefaultLabelId: function Microsoft_SharePoint_Taxonomy_TermProperties$set_termDefaultLabelId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('termDefaultLabelId');
        }
        this.$L_2 = $get(value);
        this.$L_2.disabled = true;
        return value;
    },
    
    $L_2: null,
    
    get_termLabelsListId: function Microsoft_SharePoint_Taxonomy_TermProperties$get_termLabelsListId() {ULSkCf:;
        if (this.$1_2) {
            return this.$1_2.id;
        }
        else {
            return null;
        }
    },
    set_termLabelsListId: function Microsoft_SharePoint_Taxonomy_TermProperties$set_termLabelsListId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('termLabelsListId');
        }
        this.$1_2 = $get(value);
        if (!this.$1_2) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        while (this.$1_2.firstChild) {
            this.$1_2.removeChild(this.$1_2.firstChild);
        }
        this.$1_2.disabled = true;
        Microsoft.SharePoint.Taxonomy.TermProperties.$2H = this.$$d_validateLabels;
        return value;
    },
    
    $1_2: null,
    
    validateLabels: function Microsoft_SharePoint_Taxonomy_TermProperties$validateLabels(e) {ULSkCf:;
        var $v_0 = this.$1_2.firstChild;
        while ($v_0 && $v_0.nodeType === 1 && $v_0 !== this.$1_2.lastChild) {
            var $v_1 = $v_0.firstChild;
            if ($v_1 && !SP.ScriptUtility.isNullOrEmptyString($v_1.value)) {
                var $v_2 = Microsoft.SharePoint.Taxonomy.ClientValidator.validateName($v_1.value);
                if ($v_2) {
                    this.get_$3k_2().innerHTML = $v_2;
                    Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.get_$3k_2());
                    Microsoft.SharePoint.Taxonomy.TermProperties.isAllLabelsValid = false;
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.disableSubmitButton();
                    Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$1_2.lastChild);
                    break;
                }
            }
            $v_0 = $v_0.nextSibling;
        }
        if (!$v_0 || $v_0 === this.$1_2.lastChild) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$1T_2);
            Microsoft.SharePoint.Taxonomy.TermProperties.isAllLabelsValid = true;
            this.$30_2(this.$l_2);
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.$1_2.lastChild);
        }
    },
    
    get_$3k_2: function Microsoft_SharePoint_Taxonomy_TermProperties$get_$3k_2() {ULSkCf:;
        if (!this.$1T_2) {
            this.$1T_2 = $get('LabelErrorMsg');
            if (!this.$1T_2) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return this.$1T_2;
    },
    
    $1T_2: null,
    
    get_$3_2: function Microsoft_SharePoint_Taxonomy_TermProperties$get_$3_2() {ULSkCf:;
        return this.get_element();
    },
    
    $1I_2: function Microsoft_SharePoint_Taxonomy_TermProperties$$1I_2($p0) {
        if (!$p0) {
            return;
        }
        if ($p0.get_data()) {
            if (this.$j_2) {
                this.$j_2.checked = $p0.get_data().It;
            }
            this.$V_2 = Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Lb;
            if (!Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.isHashtag($p0)) {
                Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.$4_2.parentNode.parentNode.parentNode);
                Microsoft.SharePoint.Taxonomy.TreeUtility.show(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_alsoMemOfList().parentNode.parentNode.parentNode);
                Microsoft.SharePoint.Taxonomy.TreeUtility.show(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_otherLabelDescriptionDiv());
                Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_otherHashTagDescriptionDiv());
            }
            else {
                Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$4_2.parentNode.parentNode.parentNode);
                Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_alsoMemOfList().parentNode.parentNode.parentNode);
                Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_otherLabelDescriptionDiv());
                Microsoft.SharePoint.Taxonomy.TreeUtility.show(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_otherHashTagDescriptionDiv());
            }
            if (this.$2I_2 === Microsoft.SharePoint.Taxonomy.TermProperties.$x) {
                this.$1W_2();
            }
            this.$l_2 = this.$2I_2;
            if (Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList.selectedIndex === -1) {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.updateRootNode($p0);
            }
            if (Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList.selectedIndex > -1) {
                this.$4_2.selectedIndex = Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList.selectedIndex;
                this.$46_2(this.$4_2.selectedIndex);
            }
            if ($p0.get_dataSource() && Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.sourceTermChanged) {
                ($p0.get_dataSource()).getTermAlsoMemOfList($p0, $p0.get_id(), Microsoft.SharePoint.Taxonomy.TermStoreManager.onGetTermAlsoMemOfListComplete);
            }
        }
    },
    
    $V_2: null,
    $1a_2: 0,
    
    $4L_2: function Microsoft_SharePoint_Taxonomy_TermProperties$$4L_2($p0, $p1, $p2) {
        if ($p0 > this.$V_2.length) {
            throw Error.argumentOutOfRange('lcidIndex');
        }
        if (!$p1) {
            throw Error.argumentNull('newLabelObject');
        }
        if (!$p2) {
            throw Error.argumentNull('oldLabelObject');
        }
        var $v_0 = new Sys.StringBuilder();
        var $v_1 = 0;
        var $v_2 = ($p2.Ln).split('|');
        var $v_3 = ($p1.Ln).split('|');
        if ($v_2[0] !== $v_3[0]) {
            $v_1 |= 1;
        }
        if ($v_2.length !== $v_3.length) {
            $v_1 |= 16;
        }
        else {
            for (var $v_5 = 1; $v_5 < $v_2.length; $v_5++) {
                if ($v_2[$v_5] !== $v_3[$v_5]) {
                    $v_1 |= 16;
                    break;
                }
            }
        }
        var $v_4 = $p1.Ds;
        if ($v_4 !== $p2.Ds) {
            $v_1 |= 256;
        }
        if ($v_1) {
            $v_0.append($v_1.toString());
            $v_0.append('|');
            $v_0.append($p1.Lc);
            $v_0.append('|');
            $v_0.append($v_3.length.toString());
            $v_0.append('|');
            $v_0.append($p1.Ln);
            $v_0.append('|');
            if (($v_1 & 256)) {
                $v_0.append($v_4.length.toString());
                $v_0.append('|');
                $v_0.append($v_4);
            }
        }
        return $v_0.toString();
    },
    
    $1n_2: function Microsoft_SharePoint_Taxonomy_TermProperties$$1n_2($p0) {
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermProperties.$x;
        if (this.$V_2) {
            for (var $v_1 = 0; $v_1 < this.$V_2.length; $v_1++) {
                if (this.$V_2[$v_1].Lc === $p0) {
                    $v_0 = $v_1;
                    break;
                }
            }
        }
        return $v_0;
    },
    
    checkLabelsBeforeSubmit: function Microsoft_SharePoint_Taxonomy_TermProperties$checkLabelsBeforeSubmit() {ULSkCf:;
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_data();
        this.$30_2(this.$4_2.selectedIndex);
        if (this.$V_2 && $v_0) {
            var $v_1 = new Sys.StringBuilder();
            var $v_2 = $v_0.Lb;
            for (var $v_3 = 0; $v_3 < this.$V_2.length; $v_3++) {
                $v_1.append(this.$4L_2($v_3, this.$V_2[$v_3], $v_2[$v_3]));
            }
            Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$2q().value = $v_1.toString();
        }
    },
    
    $46_2: function Microsoft_SharePoint_Taxonomy_TermProperties$$46_2($p0) {
        if ($p0 > (this.$V_2.length - 1) || $p0 < 0) {
            throw Error.argumentOutOfRange('selectedLangIdx');
        }
        var $v_0 = (this.$4_2.options[$p0]).value;
        var $v_1 = this.$1n_2($v_0);
        var $v_2 = this.$V_2[$v_1];
        this.$r_2.value = $v_2.Ds;
        var $v_3 = ($v_2.Ln).split('|');
        if ($v_0 === Microsoft.SharePoint.Taxonomy.TermStoreManager.get_currentDisplayLcid()) {
            if (!SP.ScriptUtility.isNullOrEmptyString($v_3[0])) {
                this.$L_2.value = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_text();
            }
            else {
                this.$L_2.value = '';
            }
        }
        else {
            this.$L_2.value = $v_3[0];
        }
        this.$3R_2 = this.$L_2.value;
        this.$4N_2();
        for (var $v_4 = 1; $v_4 < $v_3.length; $v_4++) {
            if (!SP.ScriptUtility.isNullOrEmptyString($v_3[$v_4])) {
                this.$2O_2($v_3[$v_4]);
            }
        }
        this.$l_2 = $p0;
        this.$3R_2 = this.$L_2.value;
        this.$4S_2 = this.$r_2.value;
    },
    
    $4N_2: function Microsoft_SharePoint_Taxonomy_TermProperties$$4N_2() {ULSkCf:;
        if (!this.$1_2) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        while (this.$1_2.firstChild) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.$1_2.firstChild.firstChild, 'blur', Microsoft.SharePoint.Taxonomy.TermProperties.$2H);
            this.$1_2.removeChild(this.$1_2.firstChild);
        }
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermProperties.createANewLabel('');
        var $v_1 = new Microsoft.SharePoint.Taxonomy.AddNewLabel($v_0);
        ($v_0.firstChild).disabled = this.$1_2.disabled;
        this.$1_2.appendChild($v_0);
    },
    
    $2O_2: function Microsoft_SharePoint_Taxonomy_TermProperties$$2O_2($p0) {
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermProperties.createANewLabel($p0);
        if (this.$1_2) {
            this.$1_2.insertBefore($v_0, this.$1_2.lastChild);
        }
    },
    
    $1W_2: function Microsoft_SharePoint_Taxonomy_TermProperties$$1W_2() {ULSkCf:;
        this.$2I_2 = this.$4_2.selectedIndex;
    },
    
    $28_2: function Microsoft_SharePoint_Taxonomy_TermProperties$$28_2() {ULSkCf:;
        this.checkLabelsBeforeSubmit();
        this.validateLabels(null);
        Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$41().value = '';
        this.sourceTermChanged = false;
    },
    
    $1H_2: function Microsoft_SharePoint_Taxonomy_TermProperties$$1H_2() {ULSkCf:;
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
        var $v_1 = !Microsoft.SharePoint.Taxonomy.TermStoreManager.doesUserHaveWritePermission($v_0) || $v_0.get_isOrphan();
        this.set_localPropertiesDisabled($v_1);
        this.set_sharedPropertiesDisabled($v_1 || $v_0.get_isPinned());
    },
    
    $1r_2: function Microsoft_SharePoint_Taxonomy_TermProperties$$1r_2() {ULSkCf:;
        var $v_0 = false;
        var $v_1 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
        if (!$v_1 || $v_1.get_disabled() || !$v_1.get_data() || this.$l_2 <= Microsoft.SharePoint.Taxonomy.TermProperties.$x || this.$l_2 >= this.$4_2.options.length) {
            $v_0 = false;
        }
        else {
            this.$3X_2();
            var $v_2 = (this.$4_2.options[this.$l_2]).value;
            var $v_3 = this.$1n_2($v_2);
            if ($v_3 === Microsoft.SharePoint.Taxonomy.TermProperties.$x) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorInvalidTermStoreLcid);
            }
            var $v_4 = $v_1.get_data().Lb;
            var $v_5 = this.$2Y_2($v_2);
            if (($v_4[$v_3].Ds !== $v_5.Ds) || ($v_4[$v_3].Ln !== $v_5.Ln)) {
                $v_0 = true;
            }
            else if (!Sys.UI.DomElement.containsCssClass(Microsoft.SharePoint.Taxonomy.TreeUtility.firstChildDOMElement(this.$1_2.lastChild), 'font-gray') && this.$3Z_2(this.$1_2.lastChild) !== '') {
                $v_0 = true;
            }
        }
        return $v_0;
    }
}


Microsoft.SharePoint.Taxonomy.AddNewLabel = function Microsoft_SharePoint_Taxonomy_AddNewLabel(e) {ULSkCf:;
    this.$$d_$4l_2 = Function.createDelegate(this, this.$4l_2);
    this.$$d_$4g_2 = Function.createDelegate(this, this.$4g_2);
    this.$$d_$4p_2 = Function.createDelegate(this, this.$4p_2);
    Microsoft.SharePoint.Taxonomy.AddNewLabel.initializeBase(this, [ e ]);
    this.initialize();
}
Microsoft.SharePoint.Taxonomy.AddNewLabel.prototype = {
    
    initialize: function Microsoft_SharePoint_Taxonomy_AddNewLabel$initialize() {ULSkCf:;
        Sys.UI.Behavior.prototype.initialize.call(this);
        this.$2d_2 = this.$$d_$4p_2;
        this.$2n_2 = this.$$d_$4g_2;
        this.$2o_2 = this.$$d_$4l_2;
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.get_$J_2(), 'keypress', this.$2d_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.get_$J_2(), 'blur', this.$2n_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.get_$J_2(), 'focus', this.$2o_2);
        Sys.UI.DomElement.addCssClass(this.get_$J_2(), 'font-gray');
        Microsoft.SharePoint.Taxonomy.AddNewLabel.$1f = Microsoft.SharePoint.Taxonomy.ScriptResources.tsmt_termproperty_addnewlabel;
        this.set_$1y_2(Microsoft.SharePoint.Taxonomy.AddNewLabel.$1f);
    },
    
    dispose: function Microsoft_SharePoint_Taxonomy_AddNewLabel$dispose() {ULSkCf:;
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.get_$J_2(), 'keypress', this.$2d_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.get_$J_2(), 'blur', this.$2n_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.get_$J_2(), 'focus', this.$2o_2);
        Sys.UI.Behavior.prototype.dispose.call(this);
    },
    
    $2d_2: null,
    $2n_2: null,
    $2o_2: null,
    
    get_$1y_2: function Microsoft_SharePoint_Taxonomy_AddNewLabel$get_$1y_2() {ULSkCf:;
        return this.get_$J_2().value;
    },
    set_$1y_2: function Microsoft_SharePoint_Taxonomy_AddNewLabel$set_$1y_2($p0) {
        this.get_$J_2().value = $p0;
        return $p0;
    },
    
    get_$J_2: function Microsoft_SharePoint_Taxonomy_AddNewLabel$get_$J_2() {ULSkCf:;
        if (this.get_element() && this.get_element().firstChild) {
            return this.get_element().firstChild;
        }
        else {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorControlNotInitialized);
        }
    },
    
    $4p_2: function Microsoft_SharePoint_Taxonomy_AddNewLabel$$4p_2($p0) {
        if ($p0.charCode === 13) {
            this.$2O_2();
            this.set_$1y_2('');
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.validateLabels($p0);
            $p0.preventDefault();
        }
    },
    
    $4l_2: function Microsoft_SharePoint_Taxonomy_AddNewLabel$$4l_2($p0) {
        Sys.UI.DomElement.removeCssClass(this.get_$J_2(), 'font-gray');
        Sys.UI.DomElement.addCssClass(this.get_$J_2(), 'font-black');
        this.set_$1y_2('');
    },
    
    $4g_2: function Microsoft_SharePoint_Taxonomy_AddNewLabel$$4g_2($p0) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$1a_2++;
    },
    
    $2O_2: function Microsoft_SharePoint_Taxonomy_AddNewLabel$$2O_2() {ULSkCf:;
        if (Sys.UI.DomElement.containsCssClass(this.get_$J_2(), 'font-gray')) {
            return;
        }
        var $v_0 = this.get_$1y_2();
        if (!SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            var $v_1 = Microsoft.SharePoint.Taxonomy.TermProperties.createANewLabel($v_0);
            Sys.UI.DomElement.addCssClass($v_1, 'tmt-term-lbl');
            if (!this.get_element().parentNode) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
            this.get_element().parentNode.insertBefore($v_1, this.get_element());
        }
        else {
            Sys.UI.DomElement.removeCssClass(this.get_$J_2(), 'font-black');
            Sys.UI.DomElement.addCssClass(this.get_$J_2(), 'font-gray');
        }
    }
}


Microsoft.SharePoint.Taxonomy.TermSetProperties = function Microsoft_SharePoint_Taxonomy_TermSetProperties(e) {ULSkCf:;
    this.$$d_$3K_2 = Function.createDelegate(this, this.$3K_2);
    Microsoft.SharePoint.Taxonomy.TermSetProperties.initializeBase(this, [ e ]);
}
Microsoft.SharePoint.Taxonomy.TermSetProperties.prototype = {
    
    dispose: function Microsoft_SharePoint_Taxonomy_TermSetProperties$dispose() {ULSkCf:;
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.$S_2, 'click', this.$2r_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.$M_2, 'click', this.$2s_2);
        Sys.UI.Behavior.prototype.dispose.call(this);
    },
    
    get_disable: function Microsoft_SharePoint_Taxonomy_TermSetProperties$get_disable() {ULSkCf:;
        return this.$Q_2;
    },
    set_disable: function Microsoft_SharePoint_Taxonomy_TermSetProperties$set_disable(value) {ULSkCf:;
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
        if (!$v_0) {
            return value;
        }
        var $v_1 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId($v_0);
        if ($v_0.get_nodeType() === 9) {
            this.$f_2.disabled = true;
            this.$e_2.disabled = true;
            if (this.$W_2) {
                this.$y_2.disabled = true;
                this.$W_2.disabled = true;
            }
            this.$S_2.disabled = true;
            this.$M_2.disabled = true;
            this.$Y_2.disabled = true;
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$25_2);
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$24_2);
        }
        else {
            if ($v_0.get_nodeType() === 6 || Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.isHashtag($v_0)) {
                this.$f_2.disabled = true;
                this.$S_2.disabled = true;
                this.$M_2.disabled = true;
                this.$Y_2.disabled = true;
            }
            else {
                if ($v_0.get_nodeType() === 12) {
                    this.$S_2.checked = true;
                    this.$f_2.disabled = true;
                    this.$S_2.disabled = true;
                    this.$M_2.disabled = true;
                }
                else {
                    this.$f_2.disabled = value;
                    this.$S_2.disabled = value;
                    this.$M_2.disabled = value;
                }
                this.$Y_2.disabled = value;
            }
            this.$e_2.disabled = value;
            if (this.$W_2) {
                this.$y_2.disabled = value;
                this.$W_2.disabled = value;
                this.$1G_2.disabled = value;
                this.$10_2.disabled = value;
            }
            if (value) {
                Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$25_2);
                Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$24_2);
            }
            else {
                Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.$25_2);
                Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.$24_2);
            }
        }
        if (value) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$35_2);
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$34_2);
        }
        else {
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.$35_2);
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.$34_2);
        }
        this.$Q_2 = value;
        return value;
    },
    
    $Q_2: false,
    
    get_termSetNameId: function Microsoft_SharePoint_Taxonomy_TermSetProperties$get_termSetNameId() {ULSkCf:;
        if (this.$f_2) {
            return this.$f_2.id;
        }
        else {
            return null;
        }
    },
    set_termSetNameId: function Microsoft_SharePoint_Taxonomy_TermSetProperties$set_termSetNameId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('termsetNameId');
        }
        this.$f_2 = $get(value);
        if (!this.$f_2) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        return value;
    },
    
    $f_2: null,
    
    get_termSetDescriptionId: function Microsoft_SharePoint_Taxonomy_TermSetProperties$get_termSetDescriptionId() {ULSkCf:;
        if (this.$e_2) {
            return this.$e_2.id;
        }
        else {
            return null;
        }
    },
    set_termSetDescriptionId: function Microsoft_SharePoint_Taxonomy_TermSetProperties$set_termSetDescriptionId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('termSetDescriptionId');
        }
        this.$e_2 = $get(value);
        if (!this.$e_2) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        return value;
    },
    
    $e_2: null,
    
    get_termSetContactId: function Microsoft_SharePoint_Taxonomy_TermSetProperties$get_termSetContactId() {ULSkCf:;
        if (this.$Y_2) {
            return this.$Y_2.id;
        }
        else {
            return null;
        }
    },
    set_termSetContactId: function Microsoft_SharePoint_Taxonomy_TermSetProperties$set_termSetContactId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('termSetContactId');
        }
        this.$Y_2 = $get(value);
        if (!this.$Y_2) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        return value;
    },
    
    $Y_2: null,
    
    get_ownerPickerId: function Microsoft_SharePoint_Taxonomy_TermSetProperties$get_ownerPickerId() {ULSkCf:;
        return this.$3q_2;
    },
    set_ownerPickerId: function Microsoft_SharePoint_Taxonomy_TermSetProperties$set_ownerPickerId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('ownerPickerId');
        }
        this.$3q_2 = value;
        this.$y_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_$3_2(), value + '_downlevelTextBox');
        this.$W_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_$3_2(), value + '_upLevelDiv');
        this.$25_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_$3_2(), value + '_checkNames');
        this.$24_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_$3_2(), value + '_browse');
        this.$3p_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_$3_2(), value + '_errorLabel');
        return value;
    },
    
    $y_2: null,
    $W_2: null,
    $25_2: null,
    $24_2: null,
    $3p_2: null,
    $3q_2: null,
    
    get_stakeholderPickerId: function Microsoft_SharePoint_Taxonomy_TermSetProperties$get_stakeholderPickerId() {ULSkCf:;
        return this.$44_2;
    },
    set_stakeholderPickerId: function Microsoft_SharePoint_Taxonomy_TermSetProperties$set_stakeholderPickerId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('stakeholderPickerId');
        }
        this.$44_2 = value;
        this.$1G_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_$3_2(), value + '_downlevelTextBox');
        this.$10_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_$3_2(), value + '_upLevelDiv');
        this.$35_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_$3_2(), value + '_checkNames');
        this.$34_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_$3_2(), value + '_browse');
        this.$43_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_$3_2(), value + '_errorLabel');
        return value;
    },
    
    $1G_2: null,
    $10_2: null,
    $35_2: null,
    $34_2: null,
    $43_2: null,
    $44_2: null,
    
    get_termSetPolicyClosedId: function Microsoft_SharePoint_Taxonomy_TermSetProperties$get_termSetPolicyClosedId() {ULSkCf:;
        return this.$S_2.id;
    },
    set_termSetPolicyClosedId: function Microsoft_SharePoint_Taxonomy_TermSetProperties$set_termSetPolicyClosedId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('termSetPolicyClosed');
        }
        this.$S_2 = $get(value);
        if (!this.$S_2) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        this.$2r_2 = this.$$d_$3K_2;
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.$S_2, 'click', this.$2r_2);
        return value;
    },
    
    $S_2: null,
    $2r_2: null,
    
    get_termSetPolicyOpenId: function Microsoft_SharePoint_Taxonomy_TermSetProperties$get_termSetPolicyOpenId() {ULSkCf:;
        return this.$M_2.id;
    },
    set_termSetPolicyOpenId: function Microsoft_SharePoint_Taxonomy_TermSetProperties$set_termSetPolicyOpenId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('termSetPolicyOpen');
        }
        this.$M_2 = $get(value);
        if (!this.$M_2) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        this.$2s_2 = this.$$d_$3K_2;
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.$M_2, 'click', this.$2s_2);
        return value;
    },
    
    $M_2: null,
    $2s_2: null,
    
    get_$3_2: function Microsoft_SharePoint_Taxonomy_TermSetProperties$get_$3_2() {ULSkCf:;
        return this.get_element();
    },
    
    $1I_2: function Microsoft_SharePoint_Taxonomy_TermSetProperties$$1I_2($p0) {
        if (!$p0) {
            return;
        }
        if (this.$f_2) {
            this.$f_2.value = $p0.get_text();
        }
        if ($p0.get_data()) {
            if (this.$e_2) {
                var $v_0 = $p0.get_data().Ds;
                if (!$v_0) {
                    this.$e_2.value = '';
                }
                else {
                    this.$e_2.value = $v_0;
                }
            }
            if (this.$Y_2) {
                var $v_1 = $p0.get_data().Mt;
                if (!$v_1) {
                    this.$Y_2.value = '';
                }
                else {
                    this.$Y_2.value = $v_1;
                }
            }
            if (this.$W_2) {
                var $v_2 = $p0.get_data().Ow;
                if (!$v_2) {
                    this.$y_2.value = '';
                    this.$W_2.innerHTML = '';
                }
                else {
                    this.$y_2.value = $v_2;
                    this.$W_2.innerHTML = $v_2;
                }
            }
            if (this.$10_2) {
                var $v_3 = $p0.get_data().Sh;
                if (!$v_3) {
                    this.$1G_2.value = '';
                    this.$10_2.innerHTML = '';
                }
                else {
                    this.$1G_2.value = $v_3;
                    this.$10_2.innerHTML = $v_3;
                }
            }
            if (this.$S_2 && this.$M_2) {
                var $v_4 = $p0.get_data().Io;
                if ($v_4) {
                    this.$M_2.checked = true;
                }
                else {
                    this.$S_2.checked = true;
                }
            }
        }
    },
    
    $1H_2: function Microsoft_SharePoint_Taxonomy_TermSetProperties$$1H_2() {ULSkCf:;
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
        this.set_disable(!Microsoft.SharePoint.Taxonomy.TermStoreManager.doesUserHaveWritePermission($v_0));
    },
    
    $1W_2: function Microsoft_SharePoint_Taxonomy_TermSetProperties$$1W_2() {ULSkCf:;
        Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Ds = this.$e_2.value;
        Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Mt = this.$Y_2.value;
        if ((Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Ow !== this.$W_2.innerHTML)) {
            if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Ow = this.$W_2.innerHTML;
            }
            else {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Ow = this.$y_2.value;
            }
        }
        if ((Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Sh !== this.$10_2.innerHTML)) {
            if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Sh = this.$10_2.innerHTML;
            }
            else {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Sh = this.$1G_2.value;
            }
        }
        var $v_0 = this.$M_2.checked;
        Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Io = $v_0;
    },
    
    $3K_2: function Microsoft_SharePoint_Taxonomy_TermSetProperties$$3K_2($p0) {
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$18()) {
            return;
        }
        if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError('focus node not set');
            return;
        }
        if (this.$S_2 && this.$M_2) {
            var $v_0 = this.$M_2.checked;
            if ($v_0 !== Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Io) {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Io = $v_0;
                Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
                return;
            }
        }
    },
    
    $1r_2: function Microsoft_SharePoint_Taxonomy_TermSetProperties$$1r_2() {ULSkCf:;
        var $v_0 = false;
        var $v_1 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
        if (!$v_1 || $v_1.get_disabled() || !$v_1.get_data()) {
            $v_0 = false;
        }
        else if (this.$f_2.value !== $v_1.get_text()) {
            $v_0 = true;
        }
        else if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$R(this.$e_2.value, $v_1.get_data().Ds)) {
            $v_0 = true;
        }
        else if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$R(this.$Y_2.value, $v_1.get_data().Mt)) {
            $v_0 = true;
        }
        else if (Sys.Browser.agent === Sys.Browser.InternetExplorer && this.$W_2) {
            if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$R(this.$W_2.innerHTML, $v_1.get_data().Ow)) {
                $v_0 = true;
            }
            else if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$R(this.$10_2.innerHTML, $v_1.get_data().Sh)) {
                $v_0 = true;
            }
        }
        else if (this.$y_2) {
            if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$R(this.$y_2.value, $v_1.get_data().Ow)) {
                $v_0 = true;
            }
            else if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$R(this.$1G_2.value, $v_1.get_data().Sh)) {
                $v_0 = true;
            }
        }
        return $v_0;
    },
    
    $2p_2: function Microsoft_SharePoint_Taxonomy_TermSetProperties$$2p_2() {ULSkCf:;
        this.set_disable(true);
        return true;
    },
    
    $28_2: function Microsoft_SharePoint_Taxonomy_TermSetProperties$$28_2() {ULSkCf:;
        this.$3p_2.innerHTML = '';
        this.$43_2.innerHTML = '';
    }
}


Microsoft.SharePoint.Taxonomy.TermSetRolePropertyNames = function Microsoft_SharePoint_Taxonomy_TermSetRolePropertyNames() {
}


Microsoft.SharePoint.Taxonomy.TermSetRolesTab = function Microsoft_SharePoint_Taxonomy_TermSetRolesTab(tabId) {ULSkCf:;
    this.$$d_$4h_3 = Function.createDelegate(this, this.$4h_3);
    Microsoft.SharePoint.Taxonomy.TermSetRolesTab.initializeBase(this, [ $get(tabId), tabId ]);
    this.$1i_3 = this.$$d_$4h_3;
    this.availableForTaggingCheckBox = this.getChildElementByAuthoringId('termsetAvailableForTaggingCheckBox');
    this.useForSiteNavigationCheckBox = this.getChildElementByAuthoringId('termSetUseForSiteNavigationCheckBox');
    this.useForFacetedNavigationCheckBox = this.getChildElementByAuthoringId('termSetUseForFacetedNavigationCheckBox');
    if (Microsoft.SharePoint.Taxonomy.TermStoreManager.hideFacetedNavigationTab()) {
        $get('termSetUseForFacetedNavigation').style.display = 'none';
    }
    $addHandler(this.availableForTaggingCheckBox, 'click', this.$1i_3);
    $addHandler(this.useForSiteNavigationCheckBox, 'click', this.$1i_3);
    $addHandler(this.useForFacetedNavigationCheckBox, 'click', this.$1i_3);
}
Microsoft.SharePoint.Taxonomy.TermSetRolesTab.prototype = {
    
    dispose: function Microsoft_SharePoint_Taxonomy_TermSetRolesTab$dispose() {ULSkCf:;
        Microsoft.SharePoint.Taxonomy.CustomPropertyTab.prototype.dispose.call(this);
    },
    
    $1i_3: null,
    availableForTaggingCheckBox: null,
    useForSiteNavigationCheckBox: null,
    useForFacetedNavigationCheckBox: null,
    
    $4h_3: function Microsoft_SharePoint_Taxonomy_TermSetRolesTab$$4h_3($p0) {
        if ($p0) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
        }
    },
    
    onTabLoad: function Microsoft_SharePoint_Taxonomy_TermSetRolesTab$onTabLoad() {ULSkCf:;
        this.$5B_3();
        var $v_0 = !(this.get_treeFocusNode().get_right() & 2);
        if (this.availableForTaggingCheckBox) {
            var $v_1 = this.get_treeFocusNode().get_data().It;
            this.availableForTaggingCheckBox.checked = $v_1;
            this.availableForTaggingCheckBox.disabled = $v_0;
        }
        if (this.get_treeFocusNode() && this.get_treeFocusNode().get_data()) {
            var $v_2 = this.get_treeFocusNode().get_data().SCP;
            var $v_3 = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.deserializeProperties($v_2);
            this.useForSiteNavigationCheckBox.checked = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.getBooleanProperty($v_3, '_Sys_Nav_IsNavigationTermSet');
            this.useForSiteNavigationCheckBox.disabled = $v_0;
            this.useForFacetedNavigationCheckBox.checked = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.getBooleanProperty($v_3, '_Sys_Facet_IsFacetedTermSet');
            this.useForFacetedNavigationCheckBox.disabled = $v_0;
        }
    },
    
    onPreSubmit: function Microsoft_SharePoint_Taxonomy_TermSetRolesTab$onPreSubmit() {ULSkCf:;
        var $v_0 = true;
        var $v_1 = this.get_treeFocusNode().get_data().SCP;
        var $v_2 = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.deserializeProperties($v_1);
        Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.setBooleanProperty($v_2, '_Sys_Nav_IsNavigationTermSet', this.useForSiteNavigationCheckBox.checked);
        Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.setBooleanProperty($v_2, '_Sys_Facet_IsFacetedTermSet', this.useForFacetedNavigationCheckBox.checked);
        var $v_3 = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.serializeProperties($v_2);
        var $v_4 = Microsoft.SharePoint.Taxonomy.TermStoreManager.get_customPropertiesData();
        if ($v_3 !== $v_4.value) {
            $v_4.value = $v_3;
        }
        return $v_0;
    },
    
    onSaveCompleted: function Microsoft_SharePoint_Taxonomy_TermSetRolesTab$onSaveCompleted() {ULSkCf:;
        Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.It = this.availableForTaggingCheckBox.checked;
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.get_customPropertiesData();
        if ($v_0) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.SCP = $v_0.value;
            $v_0.value = null;
        }
    },
    
    isApplicableType: function Microsoft_SharePoint_Taxonomy_TermSetRolesTab$isApplicableType(type) {ULSkCf:;
        if (type === 3) {
            return !Microsoft.SharePoint.Taxonomy.CustomDictionaryHelper.isCustomDictionaryTermSet(this.get_treeFocusNode().get_id()) && (Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(this.get_treeFocusNode()) !== Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.hashTagTermSetId);
        }
        return false;
    },
    
    $5B_3: function Microsoft_SharePoint_Taxonomy_TermSetRolesTab$$5B_3() {ULSkCf:;
        this.availableForTaggingCheckBox.checked = true;
        this.useForSiteNavigationCheckBox.checked = false;
        this.useForFacetedNavigationCheckBox.checked = false;
    }
}


Microsoft.SharePoint.Taxonomy.TermStoreManager = function Microsoft_SharePoint_Taxonomy_TermStoreManager() {ULSkCf:;
    this.$$d_onDisplayLangChange = Function.createDelegate(this, this.onDisplayLangChange);
    this.$$d_$3K_1 = Function.createDelegate(this, this.$3K_1);
    this.$$d_$59_1 = Function.createDelegate(this, this.$59_1);
    this.$$d_$5A_1 = Function.createDelegate(this, this.$5A_1);
    this.$$d_$4x_1 = Function.createDelegate(this, this.$4x_1);
    this.$$d_$4M_1 = Function.createDelegate(this, this.$4M_1);
    this.$$d_$52_1 = Function.createDelegate(this, this.$52_1);
    this.$$d_$4y_1 = Function.createDelegate(this, this.$4y_1);
    this.$$d_$4k_1 = Function.createDelegate(this, this.$4k_1);
    this.$$d_$50_1 = Function.createDelegate(this, this.$50_1);
    this.$$d_$5H_1 = Function.createDelegate(this, this.$5H_1);
    Microsoft.SharePoint.Taxonomy.TermStoreManager.initializeBase(this);
    Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$3w().value = (0).toString();
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.initialization = function Microsoft_SharePoint_Taxonomy_TermStoreManager$initialization() {ULSkCf:;
    Microsoft.SharePoint.Taxonomy.TermStoreManager.adjustMasterPageLayout();
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$4I();
    var $v_0 = new Microsoft.SharePoint.Taxonomy.FrameResizer(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$4V());
    $v_0.initialize();
    var $v_1 = new Microsoft.SharePoint.Taxonomy.TermStoreManager();
    $v_1.$4e_1();
    var $v_2 = new Microsoft.SharePoint.Taxonomy.RootProperties($get('RootProperty'));
    $v_2.initialize();
    var $v_3 = new Microsoft.SharePoint.Taxonomy.GroupProperties($get('GroupProperty'));
    $v_3.set_groupNameId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'groupName');
    $v_3.set_groupDescriptionId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'groupDescription');
    $v_3.set_groupManagerId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'groupMgrPicker');
    $v_3.set_contributorId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'contributorPicker');
    $v_3.set_siteCollectionListId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'siteCollectionUrlList');
    var $v_4 = new Microsoft.SharePoint.Taxonomy.TermSetProperties($get('TermSetProperty'));
    $v_4.set_termSetNameId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'termsetName');
    $v_4.set_termSetDescriptionId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'termsetDescription');
    $v_4.set_ownerPickerId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'ownerPicker');
    $v_4.set_stakeholderPickerId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'stakeholderPicker');
    $v_4.set_termSetPolicyClosedId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'termsetPolicyClosed');
    $v_4.set_termSetPolicyOpenId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'termsetPolicyOpen');
    $v_4.set_termSetContactId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'termsetContact');
    var $v_5 = new Microsoft.SharePoint.Taxonomy.TermProperties($get('TermProperty'));
    $v_5.set_termAvailableForTaggingId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'termAvailableForTaggingCheckBox');
    $v_5.set_termLangId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'termLangDropDown');
    $v_5.set_termDescriptionId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'termDescription');
    $v_5.set_termDefaultLabelId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'termDefaultLabel');
    $v_5.set_termLabelsListId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'termLabelsList');
    var $v_6 = new Microsoft.SharePoint.Taxonomy.KeywordProperties($get('KeywordProperty'));
    $v_6.set_keywordAvailableForTaggingId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'keywordAvailableForTaggingCheckBox');
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$I = $v_3;
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$6 = $v_2;
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$N = $v_4;
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$0 = $v_5;
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$n = $v_6;
    $v_1.set_displayLangListId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'displayLangList');
    $v_1.set_sharedAppSelectorId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'sharedAppSelector');
    $v_1.set_submitButtonId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'submitProperties');
    $v_1.set_cancelButtonId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'cancelProperties');
    Microsoft.SharePoint.Taxonomy.CustomPropertyTab.$4Q();
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$F = new Microsoft.SharePoint.Taxonomy.ControlObject($get(getKeywordControlId()));
    if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$F) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
    }
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$11 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$3o;
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$F.addAllTermValidHandler(Microsoft.SharePoint.Taxonomy.TermStoreManager.$11);
    $v_1.$4H_1();
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$4I = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$4I() {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$4B().parentNode;
    while ($v_0 && !SP.ScriptUtility.isNullOrUndefined($v_0.tagName) && $v_0.tagName.toUpperCase() !== 'TABLE') {
        $v_0 = $v_0.parentNode;
    }
    if ($v_0 && !SP.ScriptUtility.isNullOrUndefined($v_0.tagName) && $v_0.tagName === 'TABLE') {
        $v_0.style.height = '100%';
    }
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
    }
    else {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$3D().style.minHeight = Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$3D().parentNode.offsetHeight + 'px';
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.adjustMasterPageLayout = function Microsoft_SharePoint_Taxonomy_TermStoreManager$adjustMasterPageLayout() {ULSkCf:;
    var $v_0 = $get('TitleAreaImageCell');
    if ($v_0) {
        $v_0.style.display = 'none';
    }
    var $v_1 = $get('TitleAreaFrameClass');
    if ($v_0) {
        $v_0.style.display = 'none';
    }
    var $v_2 = $get('LeftNavigationAreaCell');
    if ($v_2) {
        $v_2.style.display = 'none';
    }
    var $v_3 = $get('onetidMainBodyPadding');
    if ($v_3) {
        $v_3.style.display = 'none';
    }
    var $v_4 = $get('s4-leftpanel');
    if ($v_4) {
        Microsoft.SharePoint.Taxonomy.TreeUtility.hide($v_4);
    }
    var $v_5 = $get('MSO_ContentTable');
    if ($v_5) {
        $v_5.style.marginLeft = '0px';
    }
    var $v_6 = Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$4B().parentNode;
    if ($v_6) {
        $v_6 = $v_6.parentNode;
        Sys.UI.DomElement.addCssClass($v_6, 'tmt-tr');
    }
    var $v_7 = $get('sideNavBox');
    if ($v_7) {
        $v_7.style.display = 'none';
    }
    var $v_8 = $get('contentBox');
    if ($v_8) {
        $v_8.style.marginLeft = '40px';
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.disableProperty = function Microsoft_SharePoint_Taxonomy_TermStoreManager$disableProperty(property, toDisable) {ULSkCf:;
    if (!property || property.nodeType !== 1 || Sys.UI.DomElement.containsCssClass(property, 'display-none')) {
        return;
    }
    if (property && property.tagName) {
        if (property.tagName.toUpperCase() === 'SELECT' || property.tagName.toUpperCase() === 'INPUT' || property.tagName.toUpperCase() === 'TEXTAREA') {
            property.disabled = toDisable;
        }
        else if (property.tagName.toUpperCase() === 'IMG') {
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(property);
        }
        else if (property.childNodes) {
            for (var $v_0 = 0; $v_0 < property.childNodes.length; $v_0++) {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.disableProperty(property.childNodes[$v_0], toDisable);
            }
        }
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton = function Microsoft_SharePoint_Taxonomy_TermStoreManager$enableSubmitButton() {ULSkCf:;
    var $v_0 = Page_ClientValidate();
    if (Microsoft.SharePoint.Taxonomy.TermProperties.isAllLabelsValid && $v_0 && Microsoft.SharePoint.Taxonomy.TermStoreManager.$7.disabled && (!Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_disabled() || Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_nodeType() === 0)) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$7.disabled = false;
    }
    else if ((!Microsoft.SharePoint.Taxonomy.TermProperties.isAllLabelsValid || !$v_0) && !Microsoft.SharePoint.Taxonomy.TermStoreManager.$7.disabled) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$7.disabled = true;
    }
    Microsoft.SharePoint.Taxonomy.TermStoreManager.enableCancelButton(true);
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.addCustomPropertyTab = function Microsoft_SharePoint_Taxonomy_TermStoreManager$addCustomPropertyTab(tab) {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$5) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$5 = [];
    }
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
    if ($v_0 && $v_0.get_nodeType() === 3) {
        var $v_1 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId($v_0);
        if (Microsoft.SharePoint.Taxonomy.CustomDictionaryHelper.isCustomDictionaryTermSet($v_1)) {
            return;
        }
    }
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$5[Microsoft.SharePoint.Taxonomy.TermStoreManager.$5.length] = tab;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.disableSubmitButton = function Microsoft_SharePoint_Taxonomy_TermStoreManager$disableSubmitButton() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$7.disabled) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$7.disabled = true;
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.enableCancelButton = function Microsoft_SharePoint_Taxonomy_TermStoreManager$enableCancelButton(enable) {ULSkCf:;
    if (enable && Microsoft.SharePoint.Taxonomy.TermStoreManager.$D.disabled || !enable && !Microsoft.SharePoint.Taxonomy.TermStoreManager.$D.disabled) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$D.disabled = !enable;
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$R = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$R($p0, $p1) {
    var $v_0 = true;
    if ($p0 === $p1) {
    }
    else if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
        if (!SP.ScriptUtility.isNullOrEmptyString($p1)) {
            $v_0 = false;
        }
    }
    else {
        var $v_1 = trimPeoplePicker($p0);
        var $v_2 = trimPeoplePicker($p1);
        if ($v_1 !== $v_2) {
            $v_0 = false;
        }
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$4a = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$4a($p0, $p1) {
    var $v_0 = true;
    if ($p0 === $p1) {
    }
    else if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
        if (!SP.ScriptUtility.isNullOrEmptyString($p1)) {
            $v_0 = false;
        }
    }
    else {
        if (SP.ScriptUtility.isNullOrEmptyString($p1)) {
            $v_0 = false;
        }
        else {
            var $v_1 = $p0.trim();
            var $v_2 = $p1.trim();
            if ($v_1 !== $v_2) {
                $v_0 = false;
            }
        }
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.onPreSubmit = function Microsoft_SharePoint_Taxonomy_TermStoreManager$onPreSubmit() {ULSkCf:;
    if (!Page_ClientValidate()) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.disableSubmitButton();
        return false;
    }
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
    if (!$v_0) {
        Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError('Focus node is null');
        return false;
    }
    var $v_1 = true;
    var $v_2 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_nodeType();
    switch ($v_2) {
        case 0:
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$6.$2p_2();
            break;
        case 1:
        case 8:
        case 2:
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$I.$2p_2();
            break;
        case 3:
        case 6:
        case 9:
        case 12:
            $v_1 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$N.$2p_2();
            break;
        case 4:
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.checkLabelsBeforeSubmit();
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.set_disable(true);
            break;
    }
    if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$5) {
        for (var $v_3 = 0; $v_1 && $v_3 < Microsoft.SharePoint.Taxonomy.TermStoreManager.$5.length; $v_3++) {
            var $v_4 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$5[$v_3];
            if ($v_4.isApplicableType($v_2) && $v_4.isActive()) {
                $v_1 = $v_4.onPreSubmit();
            }
        }
    }
    if ($v_1) {
        Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.$7);
        Microsoft.SharePoint.Taxonomy.TreeUtility.show(Microsoft.SharePoint.Taxonomy.TermStoreManager.$g);
        document.body.style.cursor = 'wait';
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$1E = 1;
    }
    return $v_1;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.onCancel = function Microsoft_SharePoint_Taxonomy_TermStoreManager$onCancel() {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_nodeType();
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$1L();
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$z($v_0);
    if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$p || Microsoft.SharePoint.Taxonomy.TermStoreManager.$p.get_nodeType() === 0) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$6.$28_2();
    }
    else {
        switch ($v_0) {
            case 1:
            case 8:
                Microsoft.SharePoint.Taxonomy.TermStoreManager.$I.$28_2();
                break;
            case 3:
            case 6:
            case 12:
                Microsoft.SharePoint.Taxonomy.TermStoreManager.$N.$28_2();
                break;
            case 4:
                Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$28_2();
                break;
        }
    }
    Microsoft.SharePoint.Taxonomy.TermStoreManager.disableSubmitButton();
    Microsoft.SharePoint.Taxonomy.TermStoreManager.enableCancelButton(false);
    Page_ClientValidate();
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.changeServiceApp = function Microsoft_SharePoint_Taxonomy_TermStoreManager$changeServiceApp() {ULSkCf:;
    window.location.href = window.location.href.split('?')[0] + '?tsid=' + Microsoft.SharePoint.Taxonomy.TermStoreManager.sharedAppSelector.value;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.changeSourceTerm = function Microsoft_SharePoint_Taxonomy_TermStoreManager$changeSourceTerm(sourceRadioButton) {ULSkCf:;
    if (sourceRadioButton) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
        Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$41().value = sourceRadioButton.value;
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.sourceTermChanged = true;
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.generateButtonClick = function Microsoft_SharePoint_Taxonomy_TermStoreManager$generateButtonClick(button) {ULSkCf:;
    if (!button) {
        throw Error.argumentNull('button');
    }
    button.click();
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.simulateClick = function Microsoft_SharePoint_Taxonomy_TermStoreManager$simulateClick(element) {ULSkCf:;
    if (element) {
        if (window.document.createEvent) {
            var $v_0 = window.document.createEvent('MouseEvents');
            $v_0.initMouseEvent('click', true, true, window.self, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            element.dispatchEvent($v_0);
        }
        else {
            element.click();
        }
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_currentDisplayLcid = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_currentDisplayLcid() {ULSkCf:;
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$1m;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.set_currentDisplayLcid = function Microsoft_SharePoint_Taxonomy_TermStoreManager$set_currentDisplayLcid(value) {ULSkCf:;
    if (value !== Microsoft.SharePoint.Taxonomy.TermStoreManager.$1m) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$1m = value;
        Microsoft.SharePoint.Taxonomy.TermStoreManager.get_workingLanguage().value = value;
        if (Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.isInstanceOfType(Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_dataSource())) {
            var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_dataSource();
            $v_0.set_displayLcid(parseInt(value));
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$F.setLcid($v_0.get_displayLcid());
        }
    }
    return value;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_groupPropertyPanel = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_groupPropertyPanel() {ULSkCf:;
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$I;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.set_groupPropertyPanel = function Microsoft_SharePoint_Taxonomy_TermStoreManager$set_groupPropertyPanel(value) {ULSkCf:;
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$I = value;
    return value;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_rootPropertyPanel = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_rootPropertyPanel() {ULSkCf:;
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$6;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.set_rootPropertyPanel = function Microsoft_SharePoint_Taxonomy_TermStoreManager$set_rootPropertyPanel(value) {ULSkCf:;
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$6 = value;
    return value;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_termSetPropertyPanel = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_termSetPropertyPanel() {ULSkCf:;
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$N;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.set_termSetPropertyPanel = function Microsoft_SharePoint_Taxonomy_TermStoreManager$set_termSetPropertyPanel(value) {ULSkCf:;
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$N = value;
    return value;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_termPropertyPanel = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_termPropertyPanel() {ULSkCf:;
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$0;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.set_termPropertyPanel = function Microsoft_SharePoint_Taxonomy_TermStoreManager$set_termPropertyPanel(value) {ULSkCf:;
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$0 = value;
    return value;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_keywordPropertyPanel = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_keywordPropertyPanel() {ULSkCf:;
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$n;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.set_keywordPropertyPanel = function Microsoft_SharePoint_Taxonomy_TermStoreManager$set_keywordPropertyPanel(value) {ULSkCf:;
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$n = value;
    return value;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$3o = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$3o($p0, $p1) {
    if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$F.get_allTermsValid()) {
        var $v_0 = new Microsoft.SharePoint.Taxonomy.Term(Microsoft.SharePoint.Taxonomy.TermStoreManager.$F.getRawText());
        if ($v_0.get_guid() !== Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.emptyGuid && !SP.ScriptUtility.isNullOrEmptyString($v_0.get_path()) && Microsoft.SharePoint.Taxonomy.TermStoreManager.$2g !== $v_0.get_path()) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.expandToNodeWithPaging(Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.taxonomyTreeRootId + '|' + $v_0.get_path());
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$2g = $v_0.get_path();
        }
    }
    else {
        alert(Microsoft.SharePoint.Taxonomy.ScriptResources.tsmt_search_noresult);
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$4J = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$4J() {ULSkCf:;
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$1L();
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$3E(Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode());
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$18 = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$18() {ULSkCf:;
    if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$7 && !Microsoft.SharePoint.Taxonomy.TermStoreManager.$7.disabled) {
        return true;
    }
    else {
        return false;
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$54 = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$54() {ULSkCf:;
    window.location.reload(true);
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$z = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$z($p0) {
    if ($p0 <= -1 || $p0 >= 17 && $p0 !== Microsoft.SharePoint.Taxonomy.TreeNode.typeUnassigned) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorUnknownNodeType);
    }
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
    if (!$v_0) {
        return;
    }
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$3g();
    if ($v_0.get_dataSource()) {
        var $v_2 = $v_0.get_dataSource();
        if ($v_2.get_sspId() === Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.emptyGuid || $v_2.get_sspId() === Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.unauthorizedAccessGuid) {
            $p0 = 0;
            var $v_3 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$3b();
            var $v_4 = $get('RootPanelControls');
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide($v_4);
            var $v_5 = null;
            if ($v_3 === 'no connection') {
                $v_5 = $get('ErrorNoAssociation');
            }
            else if ($v_2.get_sspId() === Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.unauthorizedAccessGuid) {
                $v_5 = $get('ErrorServiceUnauthorized');
            }
            else {
                $v_5 = $get('ErrorServiceNotAvailable');
            }
            Microsoft.SharePoint.Taxonomy.TreeUtility.show($v_5);
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_okCancelSection());
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(Microsoft.SharePoint.Taxonomy.TermStoreManager.$6.get_panel());
            Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$1R().innerHTML = '';
            Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList.innerHTML = '';
            Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.clear();
            Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$2b().innerHTML = '';
            return;
        }
        else {
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_okCancelSection());
        }
    }
    Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$1R().innerHTML = $v_0.get_text();
    Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$3w().value = $p0.toString();
    Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$5F().value = $v_0.get_id();
    if ($p0 === 4 || $p0 === 10) {
        var $v_6 = $v_0.get_parentNode();
        while ($v_6 && $v_6.get_nodeType() !== 3 && $v_6.get_nodeType() !== 9 && $v_6.get_nodeType() !== 12) {
            $v_6 = $v_6.get_parentNode();
        }
        if ($v_6) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$3x().value = $v_6.get_id();
        }
    }
    if ($p0 === 0) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$2b().innerHTML = Microsoft.SharePoint.Taxonomy.TermStoreManager.get_sharedAppId();
    }
    else {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$2b().innerHTML = $v_0.get_id();
    }
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$3E($v_0);
    var $v_1 = null;
    if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$5) {
        for (var $v_7 = 0; $v_7 < Microsoft.SharePoint.Taxonomy.TermStoreManager.$5.length; $v_7++) {
            var $v_8 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$5[$v_7];
            if ($v_8.isApplicableType($p0)) {
                Microsoft.SharePoint.Taxonomy.TreeUtility.show($v_8.$8_2);
                if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$Z === $v_8.get_$3_2()) {
                    $v_1 = $v_8;
                }
            }
            else {
                Microsoft.SharePoint.Taxonomy.TreeUtility.hide($v_8.$8_2);
            }
        }
    }
    if ($v_1) {
        $v_1.onTabLoad();
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$Z = $v_1.get_$3_2();
    }
    else {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.showProperty();
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.showProperty = function Microsoft_SharePoint_Taxonomy_TermStoreManager$showProperty() {ULSkCf:;
    if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$18()) {
        if (!confirm(Microsoft.SharePoint.Taxonomy.ScriptResources.msgExitWOSaving)) {
            return;
        }
        else {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.disableSubmitButton();
        }
    }
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$3h();
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$3B(false);
    Sys.UI.DomElement.removeCssClass(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$1D(), 'tmt-tab-hover');
    Sys.UI.DomElement.addCssClass(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$1D(), 'tmt-tab-selected');
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$5G(Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode());
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$3E(Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode());
    Microsoft.SharePoint.Taxonomy.TreeUtility.show(Microsoft.SharePoint.Taxonomy.TermStoreManager.$Z);
    Microsoft.SharePoint.Taxonomy.TreeUtility.show(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$2c());
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$4Y();
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$4Y = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$4Y() {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
    if (!$v_0) {
        return;
    }
    var $v_1 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId($v_0);
    if ($v_0.get_nodeType() === 4 && Microsoft.SharePoint.Taxonomy.CustomDictionaryHelper.isCustomDictionaryTermSet($v_1)) {
        Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.get_$3_2());
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$3E = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$3E($p0) {
    var $v_0 = $p0.get_nodeType();
    if ($v_0 === 0) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$6.$1H_2();
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$6.$1I_2($p0);
    }
    if ($v_0 === 1 || $v_0 === 8) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$I.$1H_2();
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$I.$1I_2($p0);
    }
    if ($v_0 === 3 || $v_0 === 6 || $v_0 === 12 || $v_0 === 9) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$N.$1H_2();
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$N.$1I_2($p0);
        if ((Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_clientDataSource()).get_rootNodeType() === 3 && (Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_clientDataSource()).get_rootGuids() === $p0.get_id()) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$6.updateLanguagePicker($p0);
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$6.$31_2();
        }
    }
    if ($v_0 === 4 || $v_0 === 10) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$1H_2();
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$1I_2($p0);
    }
    if ($v_0 === 7) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$n.$1H_2();
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$n.$1I_2($p0);
    }
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$5P($p0);
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$5G = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$5G($p0) {
    var $v_0 = $p0.get_nodeType();
    if ($v_0 === 0) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$Z = Microsoft.SharePoint.Taxonomy.TermStoreManager.$6.get_panel();
    }
    if ($v_0 === 1 || $v_0 === 8) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$Z = Microsoft.SharePoint.Taxonomy.TermStoreManager.$I.get_panel();
    }
    if ($v_0 === 3 || $v_0 === 6 || $v_0 === 12 || $v_0 === 9) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$Z = Microsoft.SharePoint.Taxonomy.TermStoreManager.$N.get_$3_2();
    }
    if ($v_0 === 4 || $v_0 === 10) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$Z = Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.get_$3_2();
    }
    if ($v_0 === 7) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$Z = Microsoft.SharePoint.Taxonomy.TermStoreManager.$n.get_$3_2();
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.onMouseOver = function Microsoft_SharePoint_Taxonomy_TermStoreManager$onMouseOver() {ULSkCf:;
    Sys.UI.DomElement.addCssClass(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$1D(), 'tmt-tab-hover');
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.onMouseOut = function Microsoft_SharePoint_Taxonomy_TermStoreManager$onMouseOut() {ULSkCf:;
    Sys.UI.DomElement.removeCssClass(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$1D(), 'tmt-tab-hover');
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.doesUserHaveWritePermission = function Microsoft_SharePoint_Taxonomy_TermStoreManager$doesUserHaveWritePermission(node) {ULSkCf:;
    if (!node) {
        throw Error.argumentNull('node');
    }
    var $v_0 = !node.get_disabled();
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.updateNodeData = function Microsoft_SharePoint_Taxonomy_TermStoreManager$updateNodeData(node) {ULSkCf:;
    node.set_data(Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy);
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$1L();
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$z(node.get_nodeType());
    node.setDisplayIcon();
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$1L = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$1L() {ULSkCf:;
    if (Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode()) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeNameCopy = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_text();
        var $v_0 = Sys.Serialization.JavaScriptSerializer.serialize(Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_data());
        Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy = Microsoft.SharePoint.Taxonomy.ParseJSONUtil.parseObjectFromJsonString($v_0);
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$3b = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$3b() {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_okCancelSection(), Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'errorMessage');
    var $v_1 = SP.ScriptUtility.emptyString;
    if ($v_0) {
        $v_1 = $v_0.value;
        $v_0.value = SP.ScriptUtility.emptyString;
    }
    return $v_1;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$3h = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$3h() {ULSkCf:;
    if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$5) {
        Sys.UI.DomElement.removeCssClass(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$1D(), 'tmt-tab-selected');
        Sys.UI.DomElement.removeCssClass(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$1D(), 'tmt-tab-hover');
        for (var $v_0 = 0; $v_0 < Microsoft.SharePoint.Taxonomy.TermStoreManager.$5.length; $v_0++) {
            var $v_1 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$5[$v_0];
            if ($v_1) {
                Microsoft.SharePoint.Taxonomy.TreeUtility.hide($v_1.get_$3_2());
                Sys.UI.DomElement.removeCssClass($v_1.$8_2, 'tmt-tab-selected');
                Sys.UI.DomElement.removeCssClass($v_1.$8_2, 'tmt-tab-hover');
            }
        }
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$3g = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$3g() {ULSkCf:;
    Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.$6.get_panel());
    Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.$I.get_panel());
    Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.$N.get_$3_2());
    Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.get_$3_2());
    Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.$n.get_$3_2());
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$3B = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$3B($p0) {
    if ($p0) {
        Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.$7);
        Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.$D);
    }
    else {
        Microsoft.SharePoint.Taxonomy.TreeUtility.show(Microsoft.SharePoint.Taxonomy.TermStoreManager.$7);
        Microsoft.SharePoint.Taxonomy.TreeUtility.show(Microsoft.SharePoint.Taxonomy.TermStoreManager.$D);
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$3w = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_$3w() {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$U('selectedTaxItemType');
    if (!$v_0) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$5F = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_$5F() {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$U('selectedTaxItemGuid');
    if (!$v_0) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$3x = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_$3x() {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$U('selectedTermSetGuid');
    if (!$v_0) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$32 = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_$32() {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$U('selectedTaxItemName');
    if (!$v_0) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_selectedItemModifiedTime = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_selectedItemModifiedTime() {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$U('selectedItemModifiedTime');
    if (!$v_0) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_sharedAppId = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_sharedAppId() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$2B) {
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.getElementByAuthoringId('sharedAppId');
        if (!$v_0) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$2B = $v_0.value;
    }
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$2B;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_workingLanguage = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_workingLanguage() {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$U('workingLanguage');
    if (!$v_0) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$41 = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_$41() {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$U('sourceTermGuid');
    if (!$v_0) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$2q = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_$2q() {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$U('otherSubmitData');
    if (!$v_0) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$16 = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_$16() {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$U('customSortData');
    if (!$v_0) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_customPropertiesData = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_customPropertiesData() {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$U('customProperties');
    if (!$v_0) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_localCustomPropertiesData = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_localCustomPropertiesData() {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$U('localCustomProperties');
    if (!$v_0) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$3D = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_$3D() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$2L) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$2L = $get('TreeContainer');
    }
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$2L;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$4V = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_$4V() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$1Q) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$1Q = $get('FrameResizer');
    }
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$1Q;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$4B = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_$4B() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$2K) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$2K = $get('TmtContentTable');
    }
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$2K;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$1R = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_$1R() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$1v) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$1v = $get('ItemName');
    }
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$1v;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$2b = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_$2b() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$1t) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$1t = $get('ItemId');
    }
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$1t;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$2c = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_$2c() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$1u) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$1u = $get('ItemIdContainer');
    }
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$1u;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$1D = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_$1D() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$27) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$27 = $get('PropertyTab');
    }
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$27;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_masterPagePrefix() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$20) {
        var $v_0 = $get('testinput');
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$20 = $v_0.value.substr(0, $v_0.value.indexOf('testdiv'));
    }
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$20;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_okCancelSection = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_okCancelSection() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$22) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$22 = $get('OKCancelSection');
    }
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$22;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.getChildElementByAuthoringId = function Microsoft_SharePoint_Taxonomy_TermStoreManager$getChildElementByAuthoringId(parent, authoringId) {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + authoringId;
    return Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(parent, $v_0);
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.getElementByAuthoringId = function Microsoft_SharePoint_Taxonomy_TermStoreManager$getElementByAuthoringId(authoringId) {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + authoringId;
    return $get($v_0);
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$U = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$U($p0) {
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.getChildElementByAuthoringId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_okCancelSection(), $p0);
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.hideFacetedNavigationTab = function Microsoft_SharePoint_Taxonomy_TermStoreManager$hideFacetedNavigationTab() {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$U('hideFacetedNavigationTab');
    return $v_0.value === 'true';
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_alsoMemOfList = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_alsoMemOfList() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$15) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$15 = $get('alsoMemOfListBody');
        if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$15) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
    }
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$15;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.set_alsoMemOfList = function Microsoft_SharePoint_Taxonomy_TermStoreManager$set_alsoMemOfList(value) {ULSkCf:;
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$15 = value;
    return value;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_otherLabelDescriptionDiv = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_otherLabelDescriptionDiv() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$1B) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$1B = $get('termLabelDescription');
        if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$1B) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
    }
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$1B;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.set_otherLabelDescriptionDiv = function Microsoft_SharePoint_Taxonomy_TermStoreManager$set_otherLabelDescriptionDiv(value) {ULSkCf:;
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$1B = value;
    return value;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.get_otherHashTagDescriptionDiv = function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_otherHashTagDescriptionDiv() {ULSkCf:;
    if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$1A) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$1A = $get('hashtagLabelDescription');
        if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$1A) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
    }
    return Microsoft.SharePoint.Taxonomy.TermStoreManager.$1A;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.set_otherHashTagDescriptionDiv = function Microsoft_SharePoint_Taxonomy_TermStoreManager$set_otherHashTagDescriptionDiv(value) {ULSkCf:;
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$1A = value;
    return value;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$2M = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$2M() {ULSkCf:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$2q().value.split('&&');
    try {
        for (var $v_1 = 0; $v_1 < $v_0.length - 1; $v_1 += 2) {
            EntityEditorHandleCheckNameResult($v_0[$v_1 + 1], $v_0[$v_1]);
        }
    }
    catch ($$e_2) {
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.updateRootNode = function Microsoft_SharePoint_Taxonomy_TermStoreManager$updateRootNode(currentNode) {ULSkCf:;
    var $v_0 = currentNode;
    while ($v_0.get_nodeType() !== 0 && $v_0.get_parentNode()) {
        $v_0 = $v_0.get_parentNode();
    }
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$6.$1I_2($v_0);
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.onGetTermAlsoMemOfListComplete = function Microsoft_SharePoint_Taxonomy_TermStoreManager$onGetTermAlsoMemOfListComplete(result, userContext, methodName) {ULSkCf:;
    if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$4E(result)) {
        var $v_0 = result.Content;
        var $v_1 = $v_0.split(';|;');
        var $v_2 = document.createElement('TBODY');
        var $v_3 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
        var $v_4 = null;
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.sourceTermChanged) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.sourceTermChanged = false;
            $v_4 = $v_3.get_dataSource();
        }
        var $v_5 = false;
        if ($v_1.length === 1 || $v_3.get_disabled() || ($v_3.get_data().Ir && !$v_3.get_data().Sw)) {
            $v_5 = true;
        }
        if ($v_1) {
            for (var $v_6 = 0; $v_6 < $v_1.length; $v_6++) {
                var $v_7 = $v_5;
                var $v_8 = $v_1[$v_6].split(';');
                if ($v_8) {
                    if ($v_8[$v_8.length - 3] === 'True') {
                        $v_7 = true;
                    }
                    var $v_9 = document.createElement('TR');
                    for (var $v_A = 0; $v_A < $v_8.length - 3; $v_A++) {
                        var $v_B = document.createElement('TD');
                        if ($v_A === $v_8.length - 6) {
                            $v_B.innerHTML = '<input type=\'radio\' name=\'source\'value=\'' + $v_8[$v_8.length - 1] + '\' ' + (($v_7) ? 'DISABLED' : '') + ' onclick=\'Microsoft.SharePoint.Taxonomy.TermStoreManager.changeSourceTerm(this)\' ' + (($v_8[$v_A] === 'True') ? 'CHECKED' : '') + '>';
                            if ($v_4) {
                                $v_4.updateReusedTermSource($v_3, $v_8[$v_8.length - 2], ($v_8[$v_A] === 'True'), '|'.charAt(0));
                            }
                        }
                        else if ($v_A === ($v_8.length - 4)) {
                            if ($v_8[$v_A] === 'True') {
                                $v_B.innerHTML = '<img src=\'/_layouts/images/check.gif\' />';
                            }
                            else {
                                $v_B.innerHTML = '';
                            }
                        }
                        else {
                            $v_B.innerHTML = SP.Utilities.HttpUtility.htmlEncode($v_8[$v_A]);
                        }
                        $v_9.appendChild($v_B);
                    }
                    if ($v_6 % 2) {
                        Sys.UI.DomElement.addCssClass($v_9, 'ms-alternating');
                    }
                    $v_2.appendChild($v_9);
                }
            }
        }
        Microsoft.SharePoint.Taxonomy.TermStoreManager.get_alsoMemOfList().parentNode.replaceChild($v_2, Microsoft.SharePoint.Taxonomy.TermStoreManager.get_alsoMemOfList());
        Microsoft.SharePoint.Taxonomy.TermStoreManager.set_alsoMemOfList($v_2);
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$4n = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$4n($p0, $p1, $p2) {
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
    if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$4E($p0)) {
        var $v_1 = $p0.Content;
        var $v_2 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.objectToArray($v_1);
        if ($v_2 && $v_2.length === 2) {
            $v_0.get_data().SCP = $v_2[0];
            $v_0.get_data().LCP = $v_2[1];
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$1L();
        }
    }
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$z($v_0.get_nodeType());
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$4m = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$4m($p0, $p1, $p2) {
    if (!$p0) {
        throw Error.argumentNull('error');
    }
    Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError($p0.get_message());
    Microsoft.SharePoint.Taxonomy.TermStoreManager.$z(Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_nodeType());
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$5P = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$5P($p0) {
    if (!SP.ScriptUtility.isNullOrUndefined($p0) && ($p0.get_nodeType() === 4 || $p0.get_nodeType() === 3)) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.get_customPropertiesData().value = Microsoft.SharePoint.Taxonomy.TermStoreManager.$3Y($p0.get_data(), 'SCP');
        Microsoft.SharePoint.Taxonomy.TermStoreManager.get_localCustomPropertiesData().value = ($p0.get_nodeType() === 4) ? Microsoft.SharePoint.Taxonomy.TermStoreManager.$3Y($p0.get_data(), 'LCP') : null;
    }
    else {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.get_customPropertiesData().value = null;
        Microsoft.SharePoint.Taxonomy.TermStoreManager.get_localCustomPropertiesData().value = null;
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$3Y = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$3Y($p0, $p1) {
    var $v_0 = $p0[$p1];
    return (SP.ScriptUtility.isNullOrUndefined($v_0)) ? null : $v_0;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$4E = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$4E($p0) {
    if (SP.ScriptUtility.isNullOrUndefined($p0)) {
        throw Error.argumentNull('result');
    }
    var $v_0 = $p0.Error;
    if (SP.ScriptUtility.isNullOrEmptyString($v_0)) {
        return true;
    }
    else {
        return false;
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$4u = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$4u($p0) {
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_hoverNode();
    var $v_1 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$3a(Microsoft.SharePoint.Taxonomy.TermStoreManager.$1Q).x;
    var $v_2 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$3a($v_0.textLabel);
    var $v_3 = $v_0.downArrowImage.style;
    $v_3.top = '';
    if (isRTL() && $v_1 > $v_2.x) {
        $v_3.position = 'absolute';
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            $v_3.left = ($v_1 + 10) + 'px';
            $v_3.top = ($v_0.downArrowImage.offsetTop - Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_roots().get_firstChild().get_domNode().offsetTop + 3) + 'px';
        }
        else {
            $v_3.left = ($v_1 + 10) + 'px';
        }
    }
    else if (!isRTL() && $v_1 <= ($v_2.x + $v_0.textLabel.offsetWidth + 5)) {
        $v_3.position = 'absolute';
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            $v_3.left = ($v_1 - 35) + 'px';
            $v_3.top = ($v_0.downArrowImage.offsetTop - Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_roots().get_firstChild().get_domNode().offsetTop + 3) + 'px';
        }
        else {
            $v_3.left = ($v_1 - 10) + 'px';
        }
    }
    else {
        $v_3.left = '';
        $v_3.position = 'relative';
    }
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.$3a = function Microsoft_SharePoint_Taxonomy_TermStoreManager$$3a($p0) {
    var $v_0 = new Sys.UI.Point(0, 0);
    while ($p0) {
        $v_0.x += $p0.offsetLeft;
        $v_0.y += $p0.offsetTop;
        $p0 = $p0.offsetParent;
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TermStoreManager.prototype = {
    
    dispose: function Microsoft_SharePoint_Taxonomy_TermStoreManager$dispose() {ULSkCf:;
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.onDisplayLangChangeHandler) {
            $removeHandler(Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList, 'change', Microsoft.SharePoint.Taxonomy.TermStoreManager.onDisplayLangChangeHandler);
        }
    },
    
    $4x_1: function Microsoft_SharePoint_Taxonomy_TermStoreManager$$4x_1($p0) {
        if ($p0 && !$p0.get_ignoreKeyUp()) {
            if (!$p0.suggestions) {
                var $v_0 = document.createElement('DIV');
                $v_0 = $p0.get_mainContainer().appendChild($v_0);
                $p0.suggestions = new Microsoft.SharePoint.Taxonomy.SuggestionContainer($v_0);
                $p0.suggestions.hidePanel();
                $p0.suggestions.setWidth($p0.textInput.clientWidth + 36);
                $p0.set_keyUpDelegate(this.get_onNodeKeyUp());
                $p0.suggestions.add_selectionMade(this.$$d_$5H_1);
            }
            if (Sys.Browser.agent === Sys.Browser.InternetExplorer && (Sys.Browser.version > 7 || document.documentMode === 8)) {
                var $v_1 = GetPosition($p0.get_mainContainer());
                if ($v_1 && !SP.ScriptUtility.isNullOrUndefined($v_1.top)) {
                    var $v_2 = 0;
                    var $v_3 = 0;
                    if (this.get_$2z_1()) {
                        $v_2 = this.get_$2z_1().scrollTop;
                        $v_3 = this.get_$2z_1().scrollLeft;
                    }
                    $p0.suggestions.setPosition(($v_1.top) - 42 + $v_2, ($v_1.left) + 15 + $v_3);
                }
            }
        }
    },
    
    get_$2z_1: function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_$2z_1() {ULSkCf:;
        if (!this.$2y_1) {
            this.$2y_1 = $get('s4-workspace');
        }
        return this.$2y_1;
    },
    
    $2y_1: null,
    
    $4y_1: function Microsoft_SharePoint_Taxonomy_TermStoreManager$$4y_1($p0, $p1) {
        if ($p0 && !$p0.get_ignoreKeyUp()) {
            if ($p1.keyCode === 38 || $p1.keyCode === 40) {
                $p0.suggestions.toggleHighlight($p1.keyCode === 38);
            }
            else if ($p1.keyCode === 13 && !Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_isImeActive()) {
                if ($p0.suggestions.get_isShowing()) {
                    var $v_0 = $p0.suggestions.getHighlightedSuggestion();
                    var $v_1 = null;
                    if ($v_0) {
                        $v_1 = $v_0.get_suggestValue();
                    }
                    if ($v_1) {
                        $p1.stopPropagation();
                        $p1.preventDefault();
                        $p1.rawEvent.returnValue = false;
                        $p1.rawEvent.cancelBubble = true;
                        this.$42_1($p0, $v_1);
                        return;
                    }
                }
                $p0.textEdited();
                $p0.suggestions.hidePanel();
            }
            else {
                var $v_2 = ($p1.target).value;
                if ($v_2 && $v_2.length > 0) {
                    var $v_3 = {};
                    $v_3['node'] = $p0;
                    $v_3['startsWith'] = $v_2;
                    var $v_4 = {};
                    $v_4['start'] = $v_2;
                    $v_4['lcid'] = Microsoft.SharePoint.Taxonomy.TermStoreManager.get_currentDisplayLcid();
                    $v_4['sspList'] = (Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_clientDataSource()).get_sspId();
                    $v_4['termSetList'] = Microsoft.SharePoint.Taxonomy.Term.invalidGuid;
                    $v_4['anchorId'] = Microsoft.SharePoint.Taxonomy.Term.invalidGuid;
                    $v_4['isSpanTermStores'] = false;
                    $v_4['isSpanTermSets'] = true;
                    $v_4['isIncludeUnavailable'] = true;
                    $v_4['isIncludeDeprecated'] = true;
                    $v_4['isAddTerms'] = false;
                    $v_4['isIncludePathData'] = false;
                    $v_4['excludeKeyword'] = true;
                    var $v_5 = $p0.get_parentNode();
                    while ($v_5) {
                        if ($v_5.get_nodeType() === 3) {
                            $v_4['excludedTermset'] = $v_5.get_id();
                            break;
                        }
                        $v_5 = $v_5.get_parentNode();
                    }
                    if (!$v_5) {
                        $v_4['excludedTermset'] = Microsoft.SharePoint.Taxonomy.Term.invalidGuid;
                    }
                    Sys.Net.WebServiceProxy.invoke((Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_clientDataSource()).get_webServiceUrl(), 'GetSuggestions', false, $v_4, this.$$d_$50_1, this.$$d_$4k_1, $v_3, Sys.Net.WebRequestManager.get_defaultTimeout(), false, null);
                }
                else {
                    if ($p0.suggestions) {
                        $p0.suggestions.hidePanel();
                    }
                }
            }
        }
    },
    
    $4k_1: function Microsoft_SharePoint_Taxonomy_TermStoreManager$$4k_1($p0, $p1, $p2) {
    },
    
    $50_1: function Microsoft_SharePoint_Taxonomy_TermStoreManager$$50_1($p0, $p1, $p2) {
        var $v_0 = $p1;
        var $v_1 = {};
        var $v_2 = $v_0['node'];
        var $v_3 = $v_2.textInput.value;
        $v_2.suggestions.updateSuggestionsWithTaxonomyResult($p0, $v_3, $v_0['startsWith'], $v_1, false);
    },
    
    $5H_1: function Microsoft_SharePoint_Taxonomy_TermStoreManager$$5H_1($p0, $p1) {
        this.$42_1(Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode(), $p1.results);
    },
    
    $42_1: function Microsoft_SharePoint_Taxonomy_TermStoreManager$$42_1($p0, $p1) {
        var $v_0 = $p1.split('|');
        if ($v_0.length === 2) {
            this.$4X_1($p0, $v_0[1]);
        }
    },
    
    $4X_1: function Microsoft_SharePoint_Taxonomy_TermStoreManager$$4X_1($p0, $p1) {
        if ($p0) {
            if ($p0.suggestions) {
                $p0.suggestions.hidePanel();
            }
            ($p0.get_dataSource()).reuseTerm($p0.get_parentNode(), $p1);
            $p0.set_text('');
            $p0.textInput.blur();
            $p0.set_nodeType(Microsoft.SharePoint.Taxonomy.TreeNode.typeUnassigned);
            $p0.uiDelete();
        }
    },
    
    get_onNodeKeyUp: function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_onNodeKeyUp() {ULSkCf:;
        if (!this.$23_1) {
            this.$23_1 = this.$$d_$4y_1;
        }
        return this.$23_1;
    },
    set_onNodeKeyUp: function Microsoft_SharePoint_Taxonomy_TermStoreManager$set_onNodeKeyUp(value) {ULSkCf:;
        this.$23_1 = value;
        return value;
    },
    
    $23_1: null,
    
    $4e_1: function Microsoft_SharePoint_Taxonomy_TermStoreManager$$4e_1() {ULSkCf:;
        var $v_0 = new Microsoft.SharePoint.Taxonomy.TaxonomyDataSource();
        $v_0.set_rootECBMenu(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'rootECBMenu');
        $v_0.set_groupECBMenu(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'groupECBMenu');
        $v_0.set_groupNoDeleteECBMenu(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'groupNoDeleteECBMenu');
        $v_0.set_dictionaryGroupECBMenu(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'dictionaryGroupECBMenu');
        $v_0.set_termSetECBMenu(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'termSetECBMenu');
        $v_0.set_dictionaryECBMenu(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'dictionaryECBMenu');
        $v_0.set_termECBMenu(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'termECBMenu');
        $v_0.set_dictionaryTermECBMenu(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'dictionaryTermECBMenu');
        $v_0.set_leafTermECBMenuID(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'leafTermECBMenu');
        $v_0.set_keywordSetECBMenu(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'keywordSetECBMenu');
        $v_0.set_hashtagSetECBMenu(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'hashtagSetECBMenu');
        $v_0.set_keywordECBMenu(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'keywordECBMenu');
        $v_0.set_hashtagECBMenu(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'hashtagECBMenu');
        $v_0.set_deprecatedTermECBMenuID(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'deprecatedTermECBMenu');
        $v_0.set_reusedTermNoSourceAccessECBMenuID(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'reusedTermNoSourceAccessECBMenu');
        $v_0.set_reusedLeafNoSourceAccessECBMenuID(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'reusedLeafNoSourceAccessECBMenu');
        $v_0.set_reusedNoSourceAccessDeprecatedECBMenuID(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'reusedNoSourceAccessDeprecatedECBMenu');
        $v_0.set_reusedTermECBMenuID(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'reusedTermECBMenu');
        $v_0.set_reusedLeafECBMenuID(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'reusedLeafECBMenu');
        $v_0.set_pinnedRootECBMenuID(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'pinnedRootTermECBMenu');
        $v_0.set_webId(getWebId());
        $v_0.set_listId(getListId());
        $v_0.set_sspId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_sharedAppId());
        var $v_1 = window.location.search.substring(1, window.location.search.length);
        var $v_2 = null;
        if (!SP.ScriptUtility.isNullOrEmptyString($v_1) && $v_1.indexOf('termPath') !== -1) {
            $v_2 = $v_1.substr($v_1.indexOf('termPath'));
            $v_2 = $v_2.substr($v_1.indexOf('=') + 1);
            if ($v_2.indexOf('&') !== -1) {
                $v_2 = $v_2.substring(0, $v_2.indexOf('&'));
            }
            if (!SP.ScriptUtility.isNullOrEmptyString($v_2)) {
                $v_0.set_initialNodeSelected(Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.taxonomyTreeRootId + '|' + $v_2);
            }
        }
        var $v_3 = $get(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'initialFocusNode');
        if (SP.ScriptUtility.isNullOrEmptyString($v_2) && $v_3 && !SP.ScriptUtility.isNullOrEmptyString($v_3.value)) {
            $v_0.set_initialNodeSelected(Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.taxonomyTreeRootId + '|' + $v_3.value);
        }
        if (getTermSetId() !== Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.emptyGuid) {
            $v_0.set_rootGuids(getTermSetId());
            $v_0.set_rootNodeType(3);
            $v_0.set_termSetECBMenu(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'termSetBoundECBMenu');
        }
        Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree = new Microsoft.SharePoint.Taxonomy.Tree($get('MetadataTreeControlTree'));
        Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.set_clientDataSource($v_0);
        Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.add_propertyChanged(this.$$d_$52_1);
        Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.set_preECBMenuCheck(this.$$d_$4M_1);
        Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.set_mouseOverDelegate(Microsoft.SharePoint.Taxonomy.TermStoreManager.$4u);
        Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.initialize();
        Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.set_nodeEditDelegate(this.$$d_$4x_1);
    },
    
    $4H_1: function Microsoft_SharePoint_Taxonomy_TermStoreManager$$4H_1() {ULSkCf:;
        var $v_0 = Sys.WebForms.PageRequestManager.getInstance();
        if (!$v_0.get_isInAsyncPostBack()) {
            $v_0.add_pageLoaded(this.$$d_$5A_1);
            $v_0.add_endRequest(this.$$d_$59_1);
        }
        window.setInterval(this.$$d_$3K_1, 1000);
    },
    
    $5A_1: function Microsoft_SharePoint_Taxonomy_TermStoreManager$$5A_1($p0, $p1) {
        var $v_0 = $p1.get_panelsUpdated();
        if ($v_0 && $v_0.length > 0) {
            if ($v_0[0].id === Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'submitPanel' && !this.$4K_1()) {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.disableSubmitButton();
                Microsoft.SharePoint.Taxonomy.TermStoreManager.enableCancelButton(false);
                var $v_1 = Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$32().value;
                var $v_2 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
                if ($v_2 && $v_2.get_nodeType() === 10) {
                    if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.sourceTermChanged) {
                        $v_2.get_dataSource().changeItemName($v_2, $v_2.get_text());
                    }
                }
                else if ($v_2 && !SP.ScriptUtility.isNullOrEmptyString($v_1)) {
                    if ($v_2.get_nodeType() === 4 || $v_2.get_nodeType() === 3) {
                        $v_2.set_text($v_1);
                        $v_2.get_dataSource().changeItemName($v_2, $v_1);
                    }
                    else if ($v_2.get_text() !== $v_1) {
                        $v_2.set_text($v_1);
                    }
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$1R().innerHTML = $v_1;
                }
                this.$5O_1();
            }
        }
    },
    
    $59_1: function Microsoft_SharePoint_Taxonomy_TermStoreManager$$59_1($p0, $p1) {
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$1E = 0;
        Microsoft.SharePoint.Taxonomy.TreeUtility.dismissWaitScreen();
        this.$4U_1();
    },
    
    get_submitButtonId: function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_submitButtonId() {ULSkCf:;
        return this.$45_1;
    },
    set_submitButtonId: function Microsoft_SharePoint_Taxonomy_TermStoreManager$set_submitButtonId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('submitButtonId');
        }
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$7 = $get(value);
        if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$7) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$g = document.createElement('INPUT');
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$g.value = Microsoft.SharePoint.Taxonomy.ScriptResources.saveButtonText;
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$g.type = 'button';
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$g.className = 'ms-ButtonHeightWidth';
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$g.disabled = true;
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$7.parentNode.insertBefore(Microsoft.SharePoint.Taxonomy.TermStoreManager.$g, Microsoft.SharePoint.Taxonomy.TermStoreManager.$7);
        Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.$g);
        this.$45_1 = value;
        return value;
    },
    
    $45_1: null,
    
    get_cancelButtonId: function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_cancelButtonId() {ULSkCf:;
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$D) {
            return Microsoft.SharePoint.Taxonomy.TermStoreManager.$D.id;
        }
        else {
            return null;
        }
    },
    set_cancelButtonId: function Microsoft_SharePoint_Taxonomy_TermStoreManager$set_cancelButtonId(value) {ULSkCf:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$D = $get(value);
            if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$D) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    get_keywordControlId: function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_keywordControlId() {ULSkCf:;
        return Microsoft.SharePoint.Taxonomy.TermStoreManager.$2e;
    },
    set_keywordControlId: function Microsoft_SharePoint_Taxonomy_TermStoreManager$set_keywordControlId(value) {ULSkCf:;
        Microsoft.SharePoint.Taxonomy.TermStoreManager.$2e = value;
        return value;
    },
    
    get_displayLangListId: function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_displayLangListId() {ULSkCf:;
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList) {
            return Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList.id;
        }
        else {
            return null;
        }
    },
    set_displayLangListId: function Microsoft_SharePoint_Taxonomy_TermStoreManager$set_displayLangListId(value) {ULSkCf:;
        Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList = $get(value);
        if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        Microsoft.SharePoint.Taxonomy.TermStoreManager.onDisplayLangChangeHandler = this.$$d_onDisplayLangChange;
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList, 'change', Microsoft.SharePoint.Taxonomy.TermStoreManager.onDisplayLangChangeHandler);
        return value;
    },
    
    onDisplayLangChange: function Microsoft_SharePoint_Taxonomy_TermStoreManager$onDisplayLangChange(e) {ULSkCf:;
        Microsoft.SharePoint.Taxonomy.TermStoreManager.set_currentDisplayLcid((Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList.options[Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList.selectedIndex]).value);
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_roots() && Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_roots().get_firstChild()) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_roots().get_firstChild().refresh();
            Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_roots().get_firstChild().loadChildren();
            Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_roots().get_firstChild().setFocus();
        }
    },
    
    get_sharedAppSelectorId: function Microsoft_SharePoint_Taxonomy_TermStoreManager$get_sharedAppSelectorId() {ULSkCf:;
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.sharedAppSelector) {
            return Microsoft.SharePoint.Taxonomy.TermStoreManager.sharedAppSelector.id;
        }
        else {
            return null;
        }
    },
    set_sharedAppSelectorId: function Microsoft_SharePoint_Taxonomy_TermStoreManager$set_sharedAppSelectorId(value) {ULSkCf:;
        Microsoft.SharePoint.Taxonomy.TermStoreManager.sharedAppSelector = $get(value);
        if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.sharedAppSelector) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        return value;
    },
    
    $52_1: function Microsoft_SharePoint_Taxonomy_TermStoreManager$$52_1($p0, $p1) {
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
        if ($p1.get_propertyName() === 'focusNode' && $v_0) {
            if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$18() || !Microsoft.SharePoint.Taxonomy.TermProperties.isAllLabelsValid || !IsPageValid()) {
                if (this.$1s_1) {
                    this.$1s_1 = false;
                }
                else {
                    if (!Microsoft.SharePoint.Taxonomy.TermProperties.isAllLabelsValid || !IsPageValid()) {
                        alert(Microsoft.SharePoint.Taxonomy.ScriptResources.msgInvalidNoExit);
                        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$p) {
                            this.$1s_1 = true;
                            Microsoft.SharePoint.Taxonomy.TermStoreManager.$p.setFocus();
                        }
                    }
                    else if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$18()) {
                        if (confirm(Microsoft.SharePoint.Taxonomy.ScriptResources.msgExitWOSaving)) {
                            Microsoft.SharePoint.Taxonomy.TermStoreManager.onCancel();
                            Microsoft.SharePoint.Taxonomy.TermStoreManager.$p = $v_0;
                        }
                        else {
                            if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$p) {
                                this.$1s_1 = true;
                                Microsoft.SharePoint.Taxonomy.TermStoreManager.$p.setFocus();
                            }
                        }
                    }
                }
            }
            else if ($v_0.get_isNewNodeTemplate() || $v_0.get_nodeType() === Microsoft.SharePoint.Taxonomy.TreeNode.typeUnassigned) {
                Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_okCancelSection());
                Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$1R());
                Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.$6.get_panel());
                Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.$N.get_$3_2());
                Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.$I.get_panel());
                Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.get_$3_2());
                Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$2c());
            }
            else {
                Microsoft.SharePoint.Taxonomy.TreeUtility.show(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_okCancelSection());
                Microsoft.SharePoint.Taxonomy.TreeUtility.show(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$1R());
                Microsoft.SharePoint.Taxonomy.TermStoreManager.$p = $v_0;
                Microsoft.SharePoint.Taxonomy.TermStoreManager.$1L();
                if ($v_0.get_data()) {
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.get_selectedItemModifiedTime().value = $v_0.get_data().Lm;
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$32().value = $v_0.get_data().Nm;
                }
                if (($v_0.get_nodeType() === 4) && SP.ScriptUtility.isNullOrUndefined($v_0.get_data().SCP)) {
                    ($v_0.get_dataSource()).getCustomProperties($v_0, Microsoft.SharePoint.Taxonomy.TermStoreManager.$4n, Microsoft.SharePoint.Taxonomy.TermStoreManager.$4m);
                }
                else {
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.$z($v_0.get_nodeType());
                }
                if ($v_0.get_nodeType() === 4 || $v_0.get_nodeType() === 10) {
                    ($v_0.get_dataSource()).getTermAlsoMemOfList($v_0, $v_0.get_id(), Microsoft.SharePoint.Taxonomy.TermStoreManager.onGetTermAlsoMemOfListComplete);
                }
            }
        }
        else if ($p1.get_propertyName() === 'isContentChanged' && $v_0) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$z($v_0.get_nodeType());
            if ($v_0.get_nodeType() === 4 || $v_0.get_nodeType() === 10) {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$L_2.value = $v_0.get_text();
                var $v_1 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$1n_2(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_currentDisplayLcid());
                Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$V_2[$v_1] = Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$2Y_2(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_currentDisplayLcid());
                var $v_2 = Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.Lb;
                if ($v_0.get_data().Lb !== $v_2) {
                    $v_2 = Sys.Serialization.JavaScriptSerializer.serialize($v_2);
                    $v_0.get_data().Lb = Microsoft.SharePoint.Taxonomy.ParseJSONUtil.parseObjectFromJsonString($v_2);
                }
            }
        }
        else if ($p1.get_propertyName() === 'nodeMoved' && $v_0) {
            var $v_3 = $v_0;
            while ($v_3 && $v_3.get_nodeType() !== 3) {
                $v_3 = $v_3.get_parentNode();
            }
            if ($v_3) {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$3x().value = $v_3.get_id();
            }
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$z($v_0.get_nodeType());
        }
        else if ($p1.get_propertyName() === 'updateModifiedTime') {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.get_selectedItemModifiedTime().value = '';
            Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$32().value = '';
        }
    },
    
    $5O_1: function Microsoft_SharePoint_Taxonomy_TermStoreManager$$5O_1() {ULSkCf:;
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
        var $v_1 = $v_0.get_nodeType();
        if (!$v_0 || $v_1 === 0) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$2M();
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$6.$31_2();
        }
        else {
            switch ($v_1) {
                case 4:
                case 10:
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$1W_2();
                    if ($v_0.get_dataSource() && Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.sourceTermChanged) {
                        if ($v_1 !== 10) {
                            ($v_0.get_dataSource()).getTermAlsoMemOfList($v_0, $v_0.get_id(), Microsoft.SharePoint.Taxonomy.TermStoreManager.onGetTermAlsoMemOfListComplete);
                        }
                        $v_0.get_dataSource().updateOrphanTermSet();
                    }
                    break;
                case 1:
                case 2:
                case 8:
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.$2M();
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.$I.$1W_2();
                    break;
                case 3:
                case 6:
                case 12:
                case 9:
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.$2M();
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.$N.$1W_2();
                    break;
                case 7:
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.$n.$1W_2();
                    break;
                default:
                    throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorUnknownNodeType);
            }
            if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$5) {
                for (var $v_2 = 0; $v_2 < Microsoft.SharePoint.Taxonomy.TermStoreManager.$5.length; $v_2++) {
                    var $v_3 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$5[$v_2];
                    if ($v_3.isApplicableType($v_1) && $v_3.isActive()) {
                        $v_3.onSaveCompleted();
                    }
                }
            }
            if ($v_1 !== 10) {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.updateNodeData($v_0);
            }
            else {
                $v_0.uiDelete();
            }
        }
    },
    
    $4M_1: function Microsoft_SharePoint_Taxonomy_TermStoreManager$$4M_1($p0) {
        var $v_0 = true;
        if (!Microsoft.SharePoint.Taxonomy.TermProperties.isAllLabelsValid || !IsPageValid()) {
            alert(Microsoft.SharePoint.Taxonomy.ScriptResources.msgInvalidNoExit);
            $v_0 = false;
        }
        else if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$18()) {
            if (confirm(Microsoft.SharePoint.Taxonomy.ScriptResources.msgExitWOSaving)) {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.onCancel();
            }
            else {
                $v_0 = false;
            }
        }
        return $v_0;
    },
    
    $1s_1: false,
    
    $4K_1: function Microsoft_SharePoint_Taxonomy_TermStoreManager$$4K_1() {ULSkCf:;
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$3b();
        if (SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            return false;
        }
        else {
            if ($v_0 === Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.termStoreChanged) {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.refresh();
            }
            else if ($v_0 === Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.invalidTermStoreId) {
                var $v_1 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_dataSource();
                $v_1.set_sspId(Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.emptyGuid);
                Microsoft.SharePoint.Taxonomy.TermStoreManager.$z(0);
            }
            else if ($v_0 === 'Error') {
                Microsoft.SharePoint.Taxonomy.TermStoreManager.$2M();
            }
            else if ($v_0 === Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.saveConflict) {
                if (confirm(Microsoft.SharePoint.Taxonomy.ScriptResources.saveConflict)) {
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.get_selectedItemModifiedTime().value = '';
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.generateButtonClick(Microsoft.SharePoint.Taxonomy.TermStoreManager.$7);
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.disableSubmitButton();
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.enableCancelButton(false);
                }
            }
            else {
                alert($v_0);
            }
            return true;
        }
    },
    
    $3K_1: function Microsoft_SharePoint_Taxonomy_TermStoreManager$$3K_1() {ULSkCf:;
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$1E > 0) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$1E++;
            if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$1E === 4) {
                Microsoft.SharePoint.Taxonomy.TreeUtility.popupWaitScreen(Microsoft.SharePoint.Taxonomy.ScriptResources.saveLRODialogTitle, Microsoft.SharePoint.Taxonomy.ScriptResources.saveLRODialogBody);
            }
        }
        else if (Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode()) {
            var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_nodeType();
            switch ($v_0) {
                case 0:
                    if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$6.$1r_2()) {
                        Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
                    }
                    break;
                case 1:
                case 8:
                case 2:
                    if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$I.$1r_2()) {
                        Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
                    }
                    break;
                case 3:
                case 6:
                case 12:
                case 9:
                    if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$N.$1r_2()) {
                        Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
                    }
                    break;
                case 4:
                    if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$1r_2()) {
                        Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
                    }
                    break;
            }
        }
        else if (Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode() && (Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_nodeType() === 4)) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$3X_2();
        }
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$1a_2 > 0) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$1a_2++;
        }
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$1a_2 >= 2) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$1a_2 = 0;
            if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$1_2.lastChild && Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$1_2.lastChild.firstChild) {
                var $v_1 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$1_2.lastChild.firstChild;
                if (!Sys.UI.DomElement.containsCssClass($v_1, 'font-gray') && !SP.ScriptUtility.isNullOrEmptyString($v_1.value)) {
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$2O_2($v_1.value);
                }
                Sys.UI.DomElement.removeCssClass($v_1, 'font-black');
                Sys.UI.DomElement.addCssClass($v_1, 'font-gray');
                $v_1.value = Microsoft.SharePoint.Taxonomy.AddNewLabel.$1f;
            }
        }
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$5) {
            for (var $v_2 = 0; $v_2 < Microsoft.SharePoint.Taxonomy.TermStoreManager.$5.length; $v_2++) {
                var $v_3 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$5[$v_2];
                if ($v_3.isActive() && $v_3.hasPropertyChanged()) {
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
                }
            }
        }
    },
    
    $4U_1: function Microsoft_SharePoint_Taxonomy_TermStoreManager$$4U_1() {ULSkCf:;
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode()) {
            var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_nodeType();
            switch ($v_0) {
                case 0:
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.$6.$1H_2();
                    break;
                case 1:
                case 8:
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.$I.set_disable(false);
                    break;
                case 3:
                case 6:
                case 12:
                case 9:
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.$N.set_disable(false);
                    break;
                case 4:
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.set_disable(false);
                    break;
            }
            document.body.style.cursor = 'default';
            Microsoft.SharePoint.Taxonomy.TermStoreManager.disableSubmitButton();
            Microsoft.SharePoint.Taxonomy.TermStoreManager.enableCancelButton(false);
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(Microsoft.SharePoint.Taxonomy.TermStoreManager.$g);
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(Microsoft.SharePoint.Taxonomy.TermStoreManager.$7);
        }
    }
}


Microsoft.SharePoint.Taxonomy.RootProperties = function Microsoft_SharePoint_Taxonomy_RootProperties(e) {ULSkCf:;
    this.$$d_$4T_2 = Function.createDelegate(this, this.$4T_2);
    this.$$d_$4q_2 = Function.createDelegate(this, this.$4q_2);
    this.$$d_$56_2 = Function.createDelegate(this, this.$56_2);
    this.$$d_$4G_2 = Function.createDelegate(this, this.$4G_2);
    Microsoft.SharePoint.Taxonomy.RootProperties.initializeBase(this, [ e ]);
}
Microsoft.SharePoint.Taxonomy.RootProperties.$1K = function Microsoft_SharePoint_Taxonomy_RootProperties$$1K($p0) {
    var $v_0 = $p0.childNodes.length;
    for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
        $p0.removeChild($p0.childNodes[0]);
    }
}
Microsoft.SharePoint.Taxonomy.RootProperties.$26 = function Microsoft_SharePoint_Taxonomy_RootProperties$$26($p0, $p1, $p2, $p3) {
    if (!SP.ScriptUtility.isNullOrEmptyString($p1)) {
        var $v_0 = null;
        if ($p3) {
            $v_0 = $p0.get_data().Dl;
            Microsoft.SharePoint.Taxonomy.TermStoreManager.set_currentDisplayLcid($p0.get_data().Di);
        }
        var $v_1 = $p1.split('|');
        if ($v_1) {
            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2].split(';');
                if ($v_3 && $v_3.length >= 2) {
                    var $v_4 = document.createElement('Option');
                    $v_4.value = $v_3[0];
                    $v_4.innerHTML = $v_3[1];
                    $p2.appendChild($v_4);
                    if ($p3) {
                        $p3.appendChild($v_4.cloneNode(true));
                        var $v_5 = $p3.childNodes.length - 1;
                        if ($v_0 === $v_3[0]) {
                            $p3.selectedIndex = $v_5;
                        }
                        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.get_currentDisplayLcid() === $v_3[0]) {
                            Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList.selectedIndex = $v_5;
                        }
                    }
                }
            }
        }
    }
}
Microsoft.SharePoint.Taxonomy.RootProperties.prototype = {
    $2A_2: 0,
    $3U_2: null,
    $3H_2: null,
    $39_2: null,
    $1c_2: null,
    
    initialize: function Microsoft_SharePoint_Taxonomy_RootProperties$initialize() {ULSkCf:;
        Sys.UI.Behavior.prototype.initialize.call(this);
        this.set_rootAdminId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'adminPicker');
        this.set_defaultLangId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'defaultLangList');
        this.set_workLangId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'workingLangList');
        this.set_termStoreLangId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'termstoreLangList');
        this.set_otherWorkLangId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'otherWorkingLangList');
        this.set_otherTermStoreLangId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'otherTermstoreLangList');
        this.set_worklangSourceId(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'worklangsource');
        if (this.get_$C_2()) {
            this.get_$C_2().value = Microsoft.SharePoint.Taxonomy.ScriptResources.tsmt_rootpanel_addlang;
            this.$2P_2 = this.$$d_$4G_2;
            Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.get_$C_2(), 'click', this.$2P_2);
            if (!this.get_$E_2().options.length) {
                this.get_$C_2().disabled = true;
            }
        }
        if (this.get_$G_2()) {
            this.get_$G_2().value = Microsoft.SharePoint.Taxonomy.ScriptResources.tsmt_rootpanel_removelang;
            this.$2v_2 = this.$$d_$56_2;
            Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.get_$G_2(), 'click', this.$2v_2);
            if (!this.get_$P_2().options.length) {
                this.get_$G_2().disabled = true;
            }
        }
        if (this.$T_2) {
            this.$T_2.selectedIndex = 0;
            Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.$T_2, 'change', this.$$d_$4q_2);
        }
        Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$9_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$K_2);
    },
    
    $19_2: 0,
    
    $4A_2: function Microsoft_SharePoint_Taxonomy_RootProperties$$4A_2($p0) {
        if (this.$i_2) {
            if (!$p0) {
                this.$q_2.value = '';
                this.$i_2.innerHTML = '';
            }
            else {
                this.$q_2.value = $p0;
                this.$i_2.innerHTML = $p0;
            }
        }
    },
    
    dispose: function Microsoft_SharePoint_Taxonomy_RootProperties$dispose() {ULSkCf:;
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.get_$C_2(), 'click', this.$2P_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.get_$G_2(), 'click', this.$2v_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.$2_2, 'change', this.$1O_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.$T_2, 'change', this.$$d_$4q_2);
        Sys.UI.Behavior.prototype.dispose.call(this);
    },
    
    $4T_2: function Microsoft_SharePoint_Taxonomy_RootProperties$$4T_2($p0) {
        if (confirm(Microsoft.SharePoint.Taxonomy.ScriptResources.msgConfirmDefaultLanguageChange)) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
        }
        else {
            this.$2_2.selectedIndex = this.$2A_2;
        }
    },
    
    $4G_2: function Microsoft_SharePoint_Taxonomy_RootProperties$$4G_2($p0) {
        if (this.get_$E_2() && this.get_$E_2().selectedIndex >= 0) {
            this.$19_2 = this.get_$E_2().offsetWidth;
            var $v_0 = this.$2_2.offsetWidth;
            var $v_1 = this.get_$E_2().options[this.get_$E_2().selectedIndex];
            this.$2Q_2($v_1, this.get_$P_2());
            if (!this.get_$E_2().options.length) {
                this.get_$C_2().disabled = true;
            }
            if (this.get_$P_2().options.length >= 1) {
                this.get_$G_2().disabled = false;
            }
            var $v_2 = $v_1.cloneNode(true);
            this.$2Q_2($v_2, this.$2_2);
            Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
            this.get_$E_2().style.width = this.$19_2 + 'px';
            this.get_$P_2().style.width = this.$19_2 + 'px';
            this.$2_2.style.width = $v_0 + 'px';
        }
        $p0.preventDefault();
    },
    
    $56_2: function Microsoft_SharePoint_Taxonomy_RootProperties$$56_2($p0) {
        if (this.get_$P_2() && this.get_$P_2().selectedIndex >= 0) {
            this.$19_2 = this.get_$E_2().offsetWidth;
            var $v_0 = this.$2_2.offsetWidth;
            var $v_1 = this.get_$P_2().options[this.get_$P_2().selectedIndex];
            if (($v_1).value === this.$2_2.value) {
                Microsoft.SharePoint.Taxonomy.TreeUtility.showError(Microsoft.SharePoint.Taxonomy.ScriptResources.msgCannotDeleteDefaultLang);
                return;
            }
            this.$2Q_2($v_1, this.get_$E_2());
            if (!this.get_$P_2().options.length) {
                this.get_$G_2().disabled = true;
            }
            if (this.get_$E_2().options.length === 1) {
                this.get_$C_2().disabled = false;
            }
            for (var $v_2 = 0; $v_2 < this.$2_2.childNodes.length; $v_2++) {
                if ($v_1.innerHTML === this.$2_2.childNodes[$v_2].innerHTML) {
                    this.$2_2.removeChild(this.$2_2.childNodes[$v_2]);
                    break;
                }
            }
            Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
            this.get_$E_2().style.width = this.$19_2 + 'px';
            this.get_$P_2().style.width = this.$19_2 + 'px';
            this.$2_2.style.width = $v_0 + 'px';
        }
        $p0.preventDefault();
    },
    
    $4q_2: function Microsoft_SharePoint_Taxonomy_RootProperties$$4q_2($p0) {
        if (!this.$T_2) {
            return;
        }
        if (!this.$T_2.selectedIndex) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.$B_2);
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$9_2);
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.$O_2);
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$K_2);
            this.get_$C_2().disabled = (!this.$O_2.options.length);
            this.get_$G_2().disabled = (!this.$B_2.options.length);
        }
        else {
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$B_2);
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.$9_2);
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$O_2);
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.$K_2);
            this.get_$C_2().disabled = (!this.$K_2.options.length);
            this.get_$G_2().disabled = (!this.$9_2.options.length);
        }
    },
    
    $2Q_2: function Microsoft_SharePoint_Taxonomy_RootProperties$$2Q_2($p0, $p1) {
        if (!$p0) {
            throw Error.argumentNull('newLang');
        }
        if (!$p1 || !$p1.options) {
            throw Error.argumentNull('langList');
        }
        var $v_0 = false;
        for (var $v_1 = 0; $v_1 < $p1.options.length; $v_1++) {
            if (this.$4O_2(($p1.options[$v_1]).innerHTML, $p0.innerHTML) > 0) {
                $p1.insertBefore($p0, $p1.options[$v_1]);
                $v_0 = true;
                break;
            }
        }
        if (!$v_0) {
            $p1.appendChild($p0);
        }
    },
    
    $4O_2: function Microsoft_SharePoint_Taxonomy_RootProperties$$4O_2($p0, $p1) {
        if (!$p0) {
            throw Error.argumentNull('str1');
        }
        if (!$p1) {
            throw Error.argumentNull('str2');
        }
        var $v_0 = $p0.length;
        var $v_1 = $p1.length;
        var $v_2 = ($v_0 > $v_1) ? $v_1 : $v_0;
        var $v_3 = 0;
        for (var $v_4 = 0; $v_4 < $v_2; $v_4++) {
            if ($p0.charAt($v_4) > $p1.charAt($v_4)) {
                $v_3 = 1;
                break;
            }
            else if ($p0.charAt($v_4) < $p1.charAt($v_4)) {
                $v_3 = Microsoft.SharePoint.Taxonomy.RootProperties.$2h;
                break;
            }
        }
        if (!$v_3) {
            if ($v_0 > $v_1) {
                $v_3 = 1;
            }
            else if ($v_0 < $v_1) {
                $v_3 = Microsoft.SharePoint.Taxonomy.RootProperties.$2h;
            }
        }
        return $v_3;
    },
    
    get_disable: function Microsoft_SharePoint_Taxonomy_RootProperties$get_disable() {ULSkCf:;
        return this.$Q_2;
    },
    set_disable: function Microsoft_SharePoint_Taxonomy_RootProperties$set_disable(value) {ULSkCf:;
        if (this.$Q_2 !== value) {
            this.$2_2.disabled = value;
            this.$O_2.disabled = value;
            this.$B_2.disabled = value;
            this.$K_2.disabled = value;
            this.$9_2.disabled = value;
            if (!this.get_$E_2().options.length) {
                this.get_$C_2().disabled = true;
            }
            else {
                this.get_$C_2().disabled = value;
            }
            if (this.get_$P_2().options.length === 1) {
                this.get_$G_2().disabled = true;
            }
            else {
                this.get_$G_2().disabled = value;
            }
            this.$Q_2 = value;
        }
        if ((Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_right() & 32) === 32 || (Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_right() & 256) === 256) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.get_$49_2());
            if ((!value && Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_right() !== 256) || ((Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_right() & 32) === 32)) {
                Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.$2x_2);
                Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.$2w_2);
                this.$i_2.disabled = false;
                this.$q_2.disabled = false;
            }
            else {
                Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$2x_2);
                Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.$2w_2);
                this.$i_2.disabled = true;
                this.$q_2.disabled = true;
            }
        }
        else {
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.get_$49_2());
        }
        return value;
    },
    
    $Q_2: true,
    
    get_rootAdminId: function Microsoft_SharePoint_Taxonomy_RootProperties$get_rootAdminId() {ULSkCf:;
        return this.$3v_2;
    },
    set_rootAdminId: function Microsoft_SharePoint_Taxonomy_RootProperties$set_rootAdminId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('rootAdminId');
        }
        this.$3v_2 = value;
        this.$q_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_panel(), value + '_downlevelTextBox');
        this.$i_2 = $get(value + '_upLevelDiv');
        this.$2x_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_panel(), value + '_checkNames');
        this.$2w_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_panel(), value + '_browse');
        this.$3u_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.get_panel(), value + '_errorLabel');
        return value;
    },
    
    $q_2: null,
    $i_2: null,
    $2x_2: null,
    $2w_2: null,
    $3u_2: null,
    $3v_2: null,
    
    get_defaultLangId: function Microsoft_SharePoint_Taxonomy_RootProperties$get_defaultLangId() {ULSkCf:;
        return this.$2_2.id;
    },
    set_defaultLangId: function Microsoft_SharePoint_Taxonomy_RootProperties$set_defaultLangId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('DefaultLangId');
        }
        this.$2_2 = $get(value);
        if (!this.$2_2) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        this.$2_2.disabled = true;
        this.$1O_2 = this.$$d_$4T_2;
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.$2_2, 'change', this.$1O_2);
        return value;
    },
    
    $2_2: null,
    $1O_2: null,
    
    get_workLangId: function Microsoft_SharePoint_Taxonomy_RootProperties$get_workLangId() {ULSkCf:;
        return this.$O_2.id;
    },
    set_workLangId: function Microsoft_SharePoint_Taxonomy_RootProperties$set_workLangId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('WorkLangId');
        }
        this.$O_2 = $get(value);
        if (!this.$O_2) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        this.$O_2.disabled = true;
        return value;
    },
    
    $O_2: null,
    
    get_otherWorkLangId: function Microsoft_SharePoint_Taxonomy_RootProperties$get_otherWorkLangId() {ULSkCf:;
        return this.$K_2.id;
    },
    set_otherWorkLangId: function Microsoft_SharePoint_Taxonomy_RootProperties$set_otherWorkLangId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('WorkLangId');
        }
        this.$K_2 = $get(value);
        if (!this.$K_2) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        this.$K_2.disabled = true;
        return value;
    },
    
    $K_2: null,
    
    get_$E_2: function Microsoft_SharePoint_Taxonomy_RootProperties$get_$E_2() {ULSkCf:;
        if (!this.$T_2.selectedIndex) {
            return this.$O_2;
        }
        else {
            return this.$K_2;
        }
    },
    
    get_termStoreLangId: function Microsoft_SharePoint_Taxonomy_RootProperties$get_termStoreLangId() {ULSkCf:;
        return this.$B_2.id;
    },
    set_termStoreLangId: function Microsoft_SharePoint_Taxonomy_RootProperties$set_termStoreLangId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('TermStoreLangId');
        }
        this.$B_2 = $get(value);
        if (!this.$B_2) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        this.$B_2.disabled = true;
        return value;
    },
    
    $B_2: null,
    
    get_otherTermStoreLangId: function Microsoft_SharePoint_Taxonomy_RootProperties$get_otherTermStoreLangId() {ULSkCf:;
        return this.$9_2.id;
    },
    set_otherTermStoreLangId: function Microsoft_SharePoint_Taxonomy_RootProperties$set_otherTermStoreLangId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('TermStoreLangId');
        }
        this.$9_2 = $get(value);
        if (!this.$9_2) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        this.$9_2.disabled = true;
        return value;
    },
    
    $9_2: null,
    
    get_$P_2: function Microsoft_SharePoint_Taxonomy_RootProperties$get_$P_2() {ULSkCf:;
        if (!this.$T_2.selectedIndex) {
            return this.$B_2;
        }
        else {
            return this.$9_2;
        }
    },
    
    get_worklangSourceId: function Microsoft_SharePoint_Taxonomy_RootProperties$get_worklangSourceId() {ULSkCf:;
        return this.$T_2.id;
    },
    set_worklangSourceId: function Microsoft_SharePoint_Taxonomy_RootProperties$set_worklangSourceId(value) {ULSkCf:;
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            throw Error.argumentNull('TermStoreLangId');
        }
        this.$T_2 = $get(value);
        if (!this.$T_2) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        return value;
    },
    
    $T_2: null,
    
    get_panel: function Microsoft_SharePoint_Taxonomy_RootProperties$get_panel() {ULSkCf:;
        return this.get_element();
    },
    
    get_$C_2: function Microsoft_SharePoint_Taxonomy_RootProperties$get_$C_2() {ULSkCf:;
        if (!this.$1e_2) {
            this.$1e_2 = $get(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'addLangButton');
            this.$1e_2.disabled = true;
        }
        return this.$1e_2;
    },
    
    $1e_2: null,
    $2P_2: null,
    
    get_$G_2: function Microsoft_SharePoint_Taxonomy_RootProperties$get_$G_2() {ULSkCf:;
        if (!this.$29_2) {
            this.$29_2 = $get(Microsoft.SharePoint.Taxonomy.TermStoreManager.get_masterPagePrefix() + 'removeLangButton');
            this.$29_2.disabled = true;
        }
        return this.$29_2;
    },
    
    $29_2: null,
    $2v_2: null,
    
    get_$49_2: function Microsoft_SharePoint_Taxonomy_RootProperties$get_$49_2() {ULSkCf:;
        if (!this.$2J_2) {
            this.$2J_2 = $get('TermStoreAdminDiv');
            if (!this.$2J_2) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return this.$2J_2;
    },
    
    $2J_2: null,
    
    updateLanguagePicker: function Microsoft_SharePoint_Taxonomy_RootProperties$updateLanguagePicker(node) {ULSkCf:;
        Microsoft.SharePoint.Taxonomy.RootProperties.$1K(this.$B_2);
        Microsoft.SharePoint.Taxonomy.RootProperties.$1K(this.$2_2);
        Microsoft.SharePoint.Taxonomy.RootProperties.$1K(this.$O_2);
        Microsoft.SharePoint.Taxonomy.RootProperties.$1K(this.$9_2);
        Microsoft.SharePoint.Taxonomy.RootProperties.$1K(this.$K_2);
        var $v_0 = node.get_data().La;
        Microsoft.SharePoint.Taxonomy.RootProperties.$26(node, $v_0, this.$B_2, this.$2_2);
        var $v_1 = node.get_data().Sh;
        Microsoft.SharePoint.Taxonomy.RootProperties.$26(node, $v_1, this.$O_2, null);
        var $v_2 = node.get_data().OLa;
        Microsoft.SharePoint.Taxonomy.RootProperties.$26(node, $v_2, this.$9_2, this.$2_2);
        var $v_3 = node.get_data().OWL;
        Microsoft.SharePoint.Taxonomy.RootProperties.$26(node, $v_3, this.$K_2, null);
    },
    
    $5N_2: function Microsoft_SharePoint_Taxonomy_RootProperties$$5N_2($p0) {
        if (!$p0) {
            return;
        }
        if (!this.get_$E_2().options.length) {
            this.get_$C_2().disabled = true;
        }
        else if (!$p0.get_disabled()) {
            this.get_$C_2().disabled = false;
        }
        if (this.get_$P_2().options.length <= 1) {
            this.get_$G_2().disabled = true;
        }
        else if (!$p0.get_disabled()) {
            this.get_$G_2().disabled = false;
        }
    },
    
    $1I_2: function Microsoft_SharePoint_Taxonomy_RootProperties$$1I_2($p0) {
        if (!$p0 || !$p0.get_data()) {
            return;
        }
        this.$4A_2($p0.get_data().Gm);
        this.$T_2.selectedIndex = 0;
        if (!SP.ScriptUtility.isNullOrEmptyString(this.$3U_2)) {
            this.$3s_2();
        }
        else {
            this.updateLanguagePicker($p0);
        }
        this.$5N_2($p0);
        this.$31_2();
    },
    
    $1H_2: function Microsoft_SharePoint_Taxonomy_RootProperties$$1H_2() {ULSkCf:;
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
        if (!$v_0 || !$v_0.get_data()) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorTreeNoFocus);
        }
        this.set_disable($v_0.get_disabled());
    },
    
    $28_2: function Microsoft_SharePoint_Taxonomy_RootProperties$$28_2() {ULSkCf:;
        if (this.$3H_2 && this.$39_2) {
            this.$3s_2();
            if (Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode()) {
                this.$4A_2(Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_data().Gm);
                this.$3u_2.innerHTML = '';
            }
            if (!this.get_$E_2().options.length) {
                this.get_$C_2().disabled = true;
            }
            else if (!this.$Q_2) {
                this.get_$C_2().disabled = false;
            }
            if (!this.get_$P_2().options.length) {
                this.get_$G_2().disabled = true;
            }
            else if (!this.$Q_2) {
                this.get_$G_2().disabled = false;
            }
            this.$T_2.selectedIndex = 0;
        }
    },
    
    $31_2: function Microsoft_SharePoint_Taxonomy_RootProperties$$31_2() {ULSkCf:;
        if (this.$2Z_2) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$54();
            return;
        }
        this.$3U_2 = this.$2_2.parentNode.innerHTML;
        this.$3H_2 = this.$O_2.parentNode.innerHTML;
        this.$39_2 = this.$B_2.parentNode.innerHTML;
        this.$2A_2 = this.$2_2.selectedIndex;
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer && this.$i_2) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_data().Gm = this.$i_2.innerHTML;
        }
        else if (this.$q_2) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode().get_data().Gm = this.$q_2.value;
        }
        var $v_0 = this.$1c_2;
        this.$1c_2 = (this.$2_2.parentNode).innerHTML;
        if (Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$4_2) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$4_2, 'change', Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$1b_2);
            var $v_1 = Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$4_2.parentNode;
            $v_1.innerHTML = this.$2_2.parentNode.innerHTML;
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$4_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.firstChildDOMElement($v_1);
            Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$4_2.selectedIndex = this.$2A_2;
            Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$4_2, 'change', Microsoft.SharePoint.Taxonomy.TermStoreManager.$0.$1b_2);
        }
        if ($v_0 !== this.$1c_2) {
            var $v_2 = Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList.parentNode;
            Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList, 'change', Microsoft.SharePoint.Taxonomy.TermStoreManager.onDisplayLangChangeHandler);
            $v_2.innerHTML = this.$1c_2;
            Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList = Microsoft.SharePoint.Taxonomy.TreeUtility.firstChildDOMElement($v_2);
            for (var $v_3 = 0; $v_3 < Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList.options.length; $v_3++) {
                if ((Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList.options[$v_3]).value === Microsoft.SharePoint.Taxonomy.TermStoreManager.get_currentDisplayLcid()) {
                    Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList.selectedIndex = $v_3;
                    break;
                }
            }
            Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList, 'change', Microsoft.SharePoint.Taxonomy.TermStoreManager.onDisplayLangChangeHandler);
            Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList.className = 'tmt-displang';
            Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList.disabled = false;
        }
    },
    
    $2p_2: function Microsoft_SharePoint_Taxonomy_RootProperties$$2p_2() {ULSkCf:;
        var $v_0 = new Sys.StringBuilder();
        $v_0.append(this.$2_2.value);
        $v_0.append('|');
        for (var $v_1 = 0; $v_1 < this.$B_2.options.length; $v_1++) {
            $v_0.append((this.$B_2.options[$v_1]).value);
            $v_0.append(';');
        }
        for (var $v_2 = 0; $v_2 < this.$9_2.options.length; $v_2++) {
            $v_0.append((this.$9_2.options[$v_2]).value);
            $v_0.append(';');
        }
        Microsoft.SharePoint.Taxonomy.TermStoreManager.get_$2q().value = $v_0.toString();
        this.set_disable(true);
    },
    
    $1r_2: function Microsoft_SharePoint_Taxonomy_RootProperties$$1r_2() {ULSkCf:;
        var $v_0 = false;
        var $v_1 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.get_focusNode();
        if (!$v_1 || !$v_1.get_data()) {
            $v_0 = false;
        }
        else if (Sys.Browser.agent === Sys.Browser.InternetExplorer && this.$i_2) {
            if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$R(this.$i_2.innerHTML, $v_1.get_data().Gm)) {
                $v_0 = true;
                this.$2Z_2 = true;
            }
        }
        else if (this.$q_2) {
            if (!Microsoft.SharePoint.Taxonomy.TermStoreManager.$R(this.$q_2.value, $v_1.get_data().Gm)) {
                $v_0 = true;
                this.$2Z_2 = true;
            }
        }
        return $v_0;
    },
    
    $2Z_2: false,
    
    $3s_2: function Microsoft_SharePoint_Taxonomy_RootProperties$$3s_2() {ULSkCf:;
        var $v_0 = null;
        $v_0 = this.$2u_2(this.$O_2, this.$K_2, this.$3H_2);
        this.$O_2 = $v_0[0];
        this.$K_2 = $v_0[1];
        $v_0 = this.$2u_2(this.$B_2, this.$9_2, this.$39_2);
        this.$B_2 = $v_0[0];
        this.$9_2 = $v_0[1];
        $v_0 = this.$2u_2(this.$2_2, null, this.$1c_2);
        this.$2_2 = $v_0[0];
        this.$2_2.selectedIndex = this.$2A_2;
        this.$1O_2 = this.$$d_$4T_2;
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.$2_2, 'change', this.$1O_2);
    },
    
    $2u_2: function Microsoft_SharePoint_Taxonomy_RootProperties$$2u_2($p0, $p1, $p2) {
        var $v_0 = null;
        if ($p0 && !SP.ScriptUtility.isNullOrEmptyString($p2)) {
            var $v_2 = $p0.parentNode;
            if ($v_2) {
                $v_2.innerHTML = $p2;
                $v_2.firstChild.disabled = $p0.disabled;
                $p0 = Microsoft.SharePoint.Taxonomy.TreeUtility.firstChildDOMElement($v_2);
                if ($p1) {
                    $v_0 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById($v_2, $p1.id);
                    if ($v_0) {
                        $v_0.disabled = $p1.disabled;
                    }
                }
            }
        }
        var $v_1 = [];
        $v_1[0] = $p0;
        $v_1[1] = $v_0;
        return $v_1;
    }
}


Microsoft.SharePoint.Taxonomy.SampleTab = function Microsoft_SharePoint_Taxonomy_SampleTab(tabId) {ULSkCf:;
    Microsoft.SharePoint.Taxonomy.SampleTab.initializeBase(this, [ $get(tabId), tabId ]);
}
Microsoft.SharePoint.Taxonomy.SampleTab.prototype = {
    
    isApplicableType: function Microsoft_SharePoint_Taxonomy_SampleTab$isApplicableType(type) {ULSkCf:;
        return false;
    },
    
    onTabLoad: function Microsoft_SharePoint_Taxonomy_SampleTab$onTabLoad() {
    },
    
    onSaveCompleted: function Microsoft_SharePoint_Taxonomy_SampleTab$onSaveCompleted() {
    },
    
    onPreSubmit: function Microsoft_SharePoint_Taxonomy_SampleTab$onPreSubmit() {ULSkCf:;
        return true;
    }
}


Microsoft.SharePoint.Taxonomy.CustomDictionaryHelper.registerClass('Microsoft.SharePoint.Taxonomy.CustomDictionaryHelper');
Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.registerClass('Microsoft.SharePoint.Taxonomy.CustomPropertyEditor');
Microsoft.SharePoint.Taxonomy.CustomPropertyTab.registerClass('Microsoft.SharePoint.Taxonomy.CustomPropertyTab', Sys.UI.Behavior);
Microsoft.SharePoint.Taxonomy.CustomSortTab.registerClass('Microsoft.SharePoint.Taxonomy.CustomSortTab', Microsoft.SharePoint.Taxonomy.CustomPropertyTab);
Microsoft.SharePoint.Taxonomy.DictionaryTermPropertiesTab.registerClass('Microsoft.SharePoint.Taxonomy.DictionaryTermPropertiesTab', Microsoft.SharePoint.Taxonomy.CustomPropertyTab);
Microsoft.SharePoint.Taxonomy.FrameResizer.registerClass('Microsoft.SharePoint.Taxonomy.FrameResizer', Sys.UI.Behavior);
Microsoft.SharePoint.Taxonomy.GroupProperties.registerClass('Microsoft.SharePoint.Taxonomy.GroupProperties', Sys.UI.Behavior);
Microsoft.SharePoint.Taxonomy.ItemCustomPropertiesTab.registerClass('Microsoft.SharePoint.Taxonomy.ItemCustomPropertiesTab', Microsoft.SharePoint.Taxonomy.CustomPropertyTab);
Microsoft.SharePoint.Taxonomy.KeywordProperties.registerClass('Microsoft.SharePoint.Taxonomy.KeywordProperties', Sys.UI.Behavior);
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.registerClass('Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker');
Microsoft.SharePoint.Taxonomy.TermProperties.registerClass('Microsoft.SharePoint.Taxonomy.TermProperties', Sys.UI.Behavior);
Microsoft.SharePoint.Taxonomy.AddNewLabel.registerClass('Microsoft.SharePoint.Taxonomy.AddNewLabel', Sys.UI.Behavior);
Microsoft.SharePoint.Taxonomy.TermSetProperties.registerClass('Microsoft.SharePoint.Taxonomy.TermSetProperties', Sys.UI.Behavior);
Microsoft.SharePoint.Taxonomy.TermSetRolePropertyNames.registerClass('Microsoft.SharePoint.Taxonomy.TermSetRolePropertyNames');
Microsoft.SharePoint.Taxonomy.TermSetRolesTab.registerClass('Microsoft.SharePoint.Taxonomy.TermSetRolesTab', Microsoft.SharePoint.Taxonomy.CustomPropertyTab);
Microsoft.SharePoint.Taxonomy.TermStoreManager.registerClass('Microsoft.SharePoint.Taxonomy.TermStoreManager', Sys.Component);
Microsoft.SharePoint.Taxonomy.RootProperties.registerClass('Microsoft.SharePoint.Taxonomy.RootProperties', Sys.UI.Behavior);
Microsoft.SharePoint.Taxonomy.SampleTab.registerClass('Microsoft.SharePoint.Taxonomy.SampleTab', Microsoft.SharePoint.Taxonomy.CustomPropertyTab);
function termstoremanager_initialize() {ULSkCf:;
Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.$2C = -1;
Microsoft.SharePoint.Taxonomy.CustomSortTab.colonSeparator = ':';
Microsoft.SharePoint.Taxonomy.CustomSortTab.semicolonDelimiter = ';';
Microsoft.SharePoint.Taxonomy.CustomSortTab.pipeDelimiter = '|';
Microsoft.SharePoint.Taxonomy.CustomSortTab.$1V = '';
Microsoft.SharePoint.Taxonomy.DictionaryTermPropertiesTab.availableForDictionaries = 'AvailableForDictionaries';
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$A = null;
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1d = null;
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1S = null;
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1w = null;
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$D = null;
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1h = null;
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$1U = null;
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$d = -1;
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$c = Microsoft.SharePoint.Taxonomy.TreeNode.typeUnassigned;
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$F = null;
Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.$11 = null;
Microsoft.SharePoint.Taxonomy.TermProperties.$x = -1;
Microsoft.SharePoint.Taxonomy.TermProperties.$2H = null;
Microsoft.SharePoint.Taxonomy.TermProperties.isAllLabelsValid = true;
Microsoft.SharePoint.Taxonomy.AddNewLabel.$1f = null;
Microsoft.SharePoint.Taxonomy.TermSetRolePropertyNames.useForSiteNavigation = '_Sys_Nav_IsNavigationTermSet';
Microsoft.SharePoint.Taxonomy.TermSetRolePropertyNames.useForFacetedNavigation = '_Sys_Facet_IsFacetedTermSet';
Microsoft.SharePoint.Taxonomy.TermStoreManager.$F = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$5 = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$1m = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$7 = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$g = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$D = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$2e = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.peopleEditorFireFox = '_downlevelTextBox';
Microsoft.SharePoint.Taxonomy.TermStoreManager.peopleEditorIE = '_upLevelDiv';
Microsoft.SharePoint.Taxonomy.TermStoreManager.peopleEditorButton = '_checkNames';
Microsoft.SharePoint.Taxonomy.TermStoreManager.peopleEditorBrowse = '_browse';
Microsoft.SharePoint.Taxonomy.TermStoreManager.peopleEditorError = '_errorLabel';
Microsoft.SharePoint.Taxonomy.TermStoreManager.itemSeparator = '|';
Microsoft.SharePoint.Taxonomy.TermStoreManager.subItemSeparator = ';';
Microsoft.SharePoint.Taxonomy.TermStoreManager.membershipSeparator = ';|;';
Microsoft.SharePoint.Taxonomy.TermStoreManager.peoplePickerSeparator = '&&';
Microsoft.SharePoint.Taxonomy.TermStoreManager.$I = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$6 = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$N = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$0 = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$n = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.displayLangList = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.onDisplayLangChangeHandler = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.sharedAppSelector = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$11 = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$2g = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeNameCopy = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.isSortOrderChange = false;
Microsoft.SharePoint.Taxonomy.TermStoreManager.isCustomPropertyChanged = false;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$Z = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$2B = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$2L = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$55 = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$1Q = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$2K = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$4b = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$5L = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$5J = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$1v = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$1t = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$1u = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$27 = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$p = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$20 = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$22 = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$15 = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$1B = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$1A = null;
Microsoft.SharePoint.Taxonomy.TermStoreManager.$1E = 0;
Microsoft.SharePoint.Taxonomy.RootProperties.$2h = -1;
};
termstoremanager_initialize();

RegisterModuleInit("TermStoreManager.js", termstoremanager_initialize);

if (typeof(pageType) != "undefined")
{
    if (typeof(_spBodyOnLoadCalled) == 'undefined' || _spBodyOnLoadCalled)
    {
	if (pageType == "TermStoreManager")
		Microsoft.SharePoint.Taxonomy.TermStoreManager.initialization();
	else if (pageType == "TaxonomyTreePicker")
		window.setTimeout( Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.loadTaxonomyPicker, 0);
    }
    else
    {
	if (pageType == "TermStoreManager")
		Microsoft.SharePoint.Taxonomy.TermStoreManager.initialization();
	else if (pageType == "TaxonomyTreePicker")
		_spBodyOnLoadFunctionNames.push("Microsoft.SharePoint.Taxonomy.TaxonomyTreePicker.loadTaxonomyPicker");
    }  
}

if( typeof(Sys) != "undefined" && Sys && Sys.Application )
{
   Sys.Application.notifyScriptLoaded();
}
if (typeof(NotifyScriptLoadedAndExecuteWaitingJobs) != "undefined")
{
    NotifyScriptLoadedAndExecuteWaitingJobs("TermStoreManager.js");
}
