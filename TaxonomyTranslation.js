// JScript File


Type.registerNamespace('Microsoft.SharePoint.Translation');

Microsoft.SharePoint.Translation.TaxonomyTranslationTab = function Microsoft_SharePoint_Translation_TaxonomyTranslationTab(tabId) {
    this.$$d_$W_3 = Function.createDelegate(this, this.$W_3);
    this.$$d_$S_3 = Function.createDelegate(this, this.$S_3);
    Microsoft.SharePoint.Translation.TaxonomyTranslationTab.initializeBase(this, [ $get(tabId), tabId ]);
    this.$8_3 = this.getChildElementByAuthoringId('translationTermSetIdHiddenField');
    this.$9_3 = this.getChildElementByAuthoringId('translationTermStoreIdHiddenField');
    this.$1_3 = false;
}
Microsoft.SharePoint.Translation.TaxonomyTranslationTab.$P = function Microsoft_SharePoint_Translation_TaxonomyTranslationTab$$P() {
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.getElementByAuthoringId('sharedAppId');
    return $v_0.value;
}
Microsoft.SharePoint.Translation.TaxonomyTranslationTab.$X = function Microsoft_SharePoint_Translation_TaxonomyTranslationTab$$X() {
    var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.getElementByAuthoringId('defaultLangList');
    return $v_0.options.length > 1;
}
Microsoft.SharePoint.Translation.TaxonomyTranslationTab.prototype = {
    $6_3: null,
    $4_3: null,
    $3_3: null,
    $0_3: null,
    $8_3: null,
    $9_3: null,
    $1_3: false,
    
    isApplicableType: function Microsoft_SharePoint_Translation_TaxonomyTranslationTab$isApplicableType(type) {
        return type === 3 && Microsoft.SharePoint.Translation.TaxonomyTranslationTab.$X();
    },
    
    onTabLoad: function Microsoft_SharePoint_Translation_TaxonomyTranslationTab$onTabLoad() {
        this.$H_3();
        this.hideAllButtons();
        var $v_0 = !(this.get_treeFocusNode().get_right() & 2);
        if (!this.$1_3 && !$v_0) {
            this.$M_3();
        }
    },
    
    get_domIdPrefix: function Microsoft_SharePoint_Translation_TaxonomyTranslationTab$get_domIdPrefix() {
        if (!this.aspNetPrefix) {
            this.aspNetPrefix = TaxonomyTranslationTab_getAspNetPrefix();
        }
        return this.aspNetPrefix;
    },
    
    $H_3: function Microsoft_SharePoint_Translation_TaxonomyTranslationTab$$H_3() {
        this.$8_3.value = '';
        this.$9_3.value = '';
        var $v_0 = (this.$1_3) ? this.$4_3 : this.getChildElementByAuthoringId('machineRadioButton');
        var $v_1 = (this.$1_3) ? this.$6_3 : this.getChildElementByAuthoringId('vendorRadioButton');
        var $v_2 = (this.$1_3) ? this.$3_3 : this.getChildElementByAuthoringId('uploadRadioButton');
        var $v_3 = (this.$1_3) ? this.$0_3 : this.getChildElementByAuthoringId('continueButton');
        $v_0.checked = false;
        $v_1.checked = false;
        $v_2.checked = false;
        $v_0.disabled = true;
        $v_1.disabled = true;
        $v_2.disabled = true;
        $v_3.disabled = true;
        if (this.$1_3) {
            this.removeAllHandlers(this.$6_3);
            this.removeAllHandlers(this.$4_3);
            this.removeAllHandlers(this.$3_3);
            this.removeAllHandlers(this.$0_3);
            this.$6_3 = null;
            this.$4_3 = null;
            this.$3_3 = null;
            this.$0_3 = null;
            this.$1_3 = false;
        }
    },
    
    $M_3: function Microsoft_SharePoint_Translation_TaxonomyTranslationTab$$M_3() {
        this.$8_3.value = this.get_treeFocusNode().get_id();
        this.$9_3.value = Microsoft.SharePoint.Translation.TaxonomyTranslationTab.$P();
        this.$6_3 = this.getChildElementByAuthoringId('vendorRadioButton');
        this.$4_3 = this.getChildElementByAuthoringId('machineRadioButton');
        this.$3_3 = this.getChildElementByAuthoringId('uploadRadioButton');
        this.$0_3 = this.getChildElementByAuthoringId('continueButton');
        $addHandler(this.$6_3, 'click', this.$$d_$S_3);
        $addHandler(this.$4_3, 'click', this.$$d_$S_3);
        $addHandler(this.$3_3, 'click', this.$$d_$S_3);
        $addHandler(this.$0_3, 'click', this.$$d_$W_3);
        this.$4_3.disabled = false;
        this.$6_3.disabled = false;
        this.$3_3.disabled = false;
        this.$1_3 = true;
    },
    
    $W_3: function Microsoft_SharePoint_Translation_TaxonomyTranslationTab$$W_3($p0) {
        var $v_0 = -1;
        var $v_1 = null;
        if (this.$4_3.checked) {
            $v_0 = 0;
            $v_1 = (this.getChildElementByAuthoringId('machineDialogTitleHiddenField')).value;
        }
        else if (this.$6_3.checked) {
            $v_0 = 1;
            $v_1 = (this.getChildElementByAuthoringId('exportDialogTitleHiddenField')).value;
        }
        else if (this.$3_3.checked) {
            $v_0 = 2;
            $v_1 = (this.getChildElementByAuthoringId('uploadDialogTitleHiddenField')).value;
        }
        this.$8_3 = this.getChildElementByAuthoringId('translationTermSetIdHiddenField');
        this.$9_3 = this.getChildElementByAuthoringId('translationTermStoreIdHiddenField');
        if ($v_0 > -1) {
            var $v_2 = new SP.UI.DialogOptions();
            $v_2.url = String.format('{0}?{1}={2}&{3}={4}&{5}={6}', 'taxonomytranslationdialog.aspx', 'option', $v_0, 'termSetId', this.$8_3.value, 'termStoreId', this.$9_3.value);
            $v_2.title = $v_1;
            if (this.$3_3.checked) {
                $v_2.width = 400;
            }
            else {
                $v_2.width = 600;
            }
            $v_2.showClose = false;
            SP.UI.ModalDialog.showModalDialog($v_2);
            this.$H_3();
            this.$M_3();
        }
    },
    
    $S_3: function Microsoft_SharePoint_Translation_TaxonomyTranslationTab$$S_3($p0) {
        this.$0_3.disabled = false;
        this.removeAllHandlers(this.$6_3);
        this.removeAllHandlers(this.$4_3);
        this.removeAllHandlers(this.$3_3);
    }
}


Microsoft.SharePoint.Translation.TaxonomyTranslationDialog = function Microsoft_SharePoint_Translation_TaxonomyTranslationDialog() {
    this.$$d_$U_0 = Function.createDelegate(this, this.$U_0);
    this.$$d_$T_0 = Function.createDelegate(this, this.$T_0);
    this.$$d_$E_0 = Function.createDelegate(this, this.$E_0);
}
Microsoft.SharePoint.Translation.TaxonomyTranslationDialog.$A = function Microsoft_SharePoint_Translation_TaxonomyTranslationDialog$$A($p0) {
    if (-1 < $p0.selectedIndex && $p0.selectedIndex < $p0.options.length) {
        var $v_0 = $p0.options[$p0.selectedIndex];
        return parseInt($v_0.value);
    }
    return -1;
}
Microsoft.SharePoint.Translation.TaxonomyTranslationDialog.$V = function Microsoft_SharePoint_Translation_TaxonomyTranslationDialog$$V($p0, $p1) {
    for (var $v_0 = 0; $v_0 < $p0.options.length; $v_0++) {
        var $v_1 = $p0.options[$v_0];
        if (parseInt($v_1.value) === $p1) {
            $p0.removeChild($v_1);
            return $v_1;
        }
    }
    return null;
}
Microsoft.SharePoint.Translation.TaxonomyTranslationDialog.$G = function Microsoft_SharePoint_Translation_TaxonomyTranslationDialog$$G($p0) {
    var $v_0 = $p0.options[0];
    if (parseInt($v_0.value) === -1) {
        $p0.removeChild($v_0);
    }
}
Microsoft.SharePoint.Translation.TaxonomyTranslationDialog.prototype = {
    $C_0: null,
    $2_0: null,
    $5_0: null,
    $D_0: null,
    $0_0: null,
    $B_0: null,
    $F_0: null,
    $I_0: true,
    $J_0: true,
    
    onLoad: function Microsoft_SharePoint_Translation_TaxonomyTranslationDialog$onLoad() {
        this.$C_0 = this.$7_0('radioButtonGroup');
        this.$2_0 = this.$7_0('sourceLanguageSelector');
        this.$5_0 = this.$7_0('targetLanguageSelector');
        this.$D_0 = this.$7_0('uploadFileInput');
        this.$0_0 = this.$7_0('continueButton');
        var $v_0 = this.$Q_0();
        if (!$v_0 || $v_0 === 1) {
            $addHandler(this.$2_0, 'change', this.$$d_$E_0);
            $addHandler(this.$5_0, 'change', this.$$d_$T_0);
            this.$N_0();
            this.$E_0(null);
        }
        else if ($v_0 === 2) {
            $addHandler(this.$D_0, 'change', this.$$d_$U_0);
            this.$L_0();
        }
    },
    
    get_$O_0: function Microsoft_SharePoint_Translation_TaxonomyTranslationDialog$get_$O_0() {
        if (!this.$B_0) {
            this.$B_0 = TaxonomyTranslationDialog_getAspNetPrefix();
        }
        return this.$B_0;
    },
    
    $7_0: function Microsoft_SharePoint_Translation_TaxonomyTranslationDialog$$7_0($p0) {
        var $v_0 = this.get_$O_0() + $p0;
        return $get($v_0);
    },
    
    $Q_0: function Microsoft_SharePoint_Translation_TaxonomyTranslationDialog$$Q_0() {
        var $v_0 = this.$7_0('translationOptionHiddenField');
        return parseInt($v_0.value);
    },
    
    $N_0: function Microsoft_SharePoint_Translation_TaxonomyTranslationDialog$$N_0() {
        var $v_0 = this.$2_0.clientWidth + 15;
        var $v_1 = this.$C_0.clientWidth;
        var $v_2 = window.innerWidth;
        if (typeof($v_2) !== 'number') {
            $v_2 = document.body.clientWidth;
        }
        var $v_3 = ($v_2) / 2;
        var $v_4 = Math.min(Math.max($v_1, Math.max($v_0, 250)), $v_3);
        var $v_5 = String.format('{0}px', $v_4);
        this.$2_0.style.width = $v_5;
        this.$5_0.style.width = $v_5;
        this.$C_0.style.width = $v_5;
    },
    
    $K_0: function Microsoft_SharePoint_Translation_TaxonomyTranslationDialog$$K_0() {
        if (Microsoft.SharePoint.Translation.TaxonomyTranslationDialog.$A(this.$2_0) !== -1 && Microsoft.SharePoint.Translation.TaxonomyTranslationDialog.$A(this.$5_0) !== -1) {
            this.$0_0.disabled = false;
        }
        else {
            this.$0_0.disabled = true;
        }
    },
    
    $L_0: function Microsoft_SharePoint_Translation_TaxonomyTranslationDialog$$L_0() {
        if (!SP.ScriptUtility.isNullOrEmptyString(this.$D_0.value)) {
            this.$0_0.disabled = false;
        }
        else {
            this.$0_0.disabled = true;
        }
    },
    
    $E_0: function Microsoft_SharePoint_Translation_TaxonomyTranslationDialog$$E_0($p0) {
        var $v_0 = Microsoft.SharePoint.Translation.TaxonomyTranslationDialog.$A(this.$2_0);
        if ($v_0 !== -1) {
            if (this.$I_0) {
                Microsoft.SharePoint.Translation.TaxonomyTranslationDialog.$G(this.$2_0);
                this.$I_0 = false;
            }
            this.$R_0(this.$5_0, this.$F_0);
            this.$F_0 = Microsoft.SharePoint.Translation.TaxonomyTranslationDialog.$V(this.$5_0, $v_0);
        }
        this.$K_0();
    },
    
    $T_0: function Microsoft_SharePoint_Translation_TaxonomyTranslationDialog$$T_0($p0) {
        var $v_0 = Microsoft.SharePoint.Translation.TaxonomyTranslationDialog.$A(this.$5_0);
        if ($v_0 !== -1) {
            if (this.$J_0) {
                Microsoft.SharePoint.Translation.TaxonomyTranslationDialog.$G(this.$5_0);
                this.$J_0 = false;
            }
        }
        this.$K_0();
    },
    
    $U_0: function Microsoft_SharePoint_Translation_TaxonomyTranslationDialog$$U_0($p0) {
        this.$L_0();
    },
    
    $R_0: function Microsoft_SharePoint_Translation_TaxonomyTranslationDialog$$R_0($p0, $p1) {
        if (!$p1) {
            return;
        }
        var $v_0 = 0;
        var $v_1 = 0;
        var $v_2 = false;
        while ($v_0 < this.$2_0.options.length && $v_1 < $p0.options.length) {
            var $v_3 = this.$2_0.options[$v_0];
            var $v_4 = $p0.options[$v_1];
            if (!$v_0 && parseInt($v_3.value) === -1) {
                ++$v_0;
                continue;
            }
            if (!$v_1 && parseInt($v_4.value) === -1) {
                ++$v_1;
                continue;
            }
            if ($v_3.value === $p1.value) {
                $p0.insertBefore($p1, $v_4);
                $v_2 = true;
                break;
            }
            ++$v_0;
            if ($v_3.value === $v_4.value) {
                ++$v_1;
            }
        }
        if (!$v_2) {
            $p0.appendChild($p1);
        }
    }
}


Microsoft.SharePoint.Translation.TaxonomyTranslationTab.registerClass('Microsoft.SharePoint.Translation.TaxonomyTranslationTab', Microsoft.SharePoint.Taxonomy.CustomPropertyTab);
Microsoft.SharePoint.Translation.TaxonomyTranslationDialog.registerClass('Microsoft.SharePoint.Translation.TaxonomyTranslationDialog');

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("TaxonomyTranslation.js");
