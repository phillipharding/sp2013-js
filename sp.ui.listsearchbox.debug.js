// JScript File


Type.registerNamespace('Microsoft.SharePoint.Portal');

Microsoft.SharePoint.Portal.ListSearchBox = function Microsoft_SharePoint_Portal_ListSearchBox(context, elem) {
    this.$$d_onDataRefreshCompleted = Function.createDelegate(this, this.onDataRefreshCompleted);
    this.$$d_$1W_3 = Function.createDelegate(this, this.$1W_3);
    this.$$d_$1M_3 = Function.createDelegate(this, this.$1M_3);
    this.$$d_$1J_3 = Function.createDelegate(this, this.$1J_3);
    this.$$d_$1I_3 = Function.createDelegate(this, this.$1I_3);
    this.$$d_$1K_3 = Function.createDelegate(this, this.$1K_3);
    this.$$d_$1L_3 = Function.createDelegate(this, this.$1L_3);
    this.$$d_$1G_3 = Function.createDelegate(this, this.$1G_3);
    this.$$d_$1H_3 = Function.createDelegate(this, this.$1H_3);
    this.$$d_$1S_3 = Function.createDelegate(this, this.$1S_3);
    this.$$d_$1R_3 = Function.createDelegate(this, this.$1R_3);
    this.$$d_$1O_3 = Function.createDelegate(this, this.$1O_3);
    this.$$d_$1N_3 = Function.createDelegate(this, this.$1N_3);
    this.$$d_$1P_3 = Function.createDelegate(this, this.$1P_3);
    this.$$d_$1Q_3 = Function.createDelegate(this, this.$1Q_3);
    this.$$d_onSearchBoxKeyUp = Function.createDelegate(this, this.onSearchBoxKeyUp);
    this.$$d_onSearchBoxKeyPress = Function.createDelegate(this, this.onSearchBoxKeyPress);
    this.$$d_$1C_3 = Function.createDelegate(this, this.$1C_3);
    Microsoft.SharePoint.Portal.ListSearchBox.initializeBase(this, [ elem ]);
    this.$1_3 = context;
    this.$V_3 = false;
}
Microsoft.SharePoint.Portal.ListSearchBox.$y = function Microsoft_SharePoint_Portal_ListSearchBox$$y($p0, $p1) {
    var $v_0 = 0;
    switch ($p0) {
        case 0:
            switch ($p1) {
                case 0:
                    $v_0 = 1;
                    break;
                case 1:
                    break;
                case 2:
                    $v_0 = 1;
                    break;
                default:
                    break;
            }
            break;
        case 1:
            switch ($p1) {
                case 0:
                    $v_0 = 1;
                    break;
                case 1:
                    $v_0 = 0;
                    break;
                case 2:
                    $v_0 = 2;
                    break;
                default:
                    break;
            }
            break;
        case 2:
            switch ($p1) {
                case 0:
                    $v_0 = 2;
                    break;
                case 1:
                    $v_0 = 0;
                    break;
                case 2:
                    $v_0 = 3;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    return $v_0;
}
Microsoft.SharePoint.Portal.ListSearchBox.$v = function Microsoft_SharePoint_Portal_ListSearchBox$$v($p0, $p1) {
    var $v_0 = ($p0) ? $p0.toLowerCase() : null;
    var $v_1 = ($p1) ? $p1.toLowerCase() : null;
    return ($v_0 === $v_1);
}
Microsoft.SharePoint.Portal.ListSearchBox.isNullOrWhiteSpace = function Microsoft_SharePoint_Portal_ListSearchBox$isNullOrWhiteSpace(first) {
    return ((!first) || (!first.trim().length));
}
Microsoft.SharePoint.Portal.ListSearchBox.prototype = {
    $V_3: false,
    $0_3: null,
    
    get_searchBox: function Microsoft_SharePoint_Portal_ListSearchBox$get_searchBox() {
        return this.$0_3;
    },
    set_searchBox: function Microsoft_SharePoint_Portal_ListSearchBox$set_searchBox(value) {
        this.$0_3 = value;
        return value;
    },
    
    $2_3: null,
    
    get_searchImg: function Microsoft_SharePoint_Portal_ListSearchBox$get_searchImg() {
        return this.$2_3;
    },
    set_searchImg: function Microsoft_SharePoint_Portal_ListSearchBox$set_searchImg(value) {
        this.$2_3 = value;
        return value;
    },
    
    $D_3: null,
    
    get_searchImgSpan: function Microsoft_SharePoint_Portal_ListSearchBox$get_searchImgSpan() {
        return this.$D_3;
    },
    set_searchImgSpan: function Microsoft_SharePoint_Portal_ListSearchBox$set_searchImgSpan(value) {
        this.$D_3 = value;
        return value;
    },
    
    $3_3: null,
    
    get_parentDiv: function Microsoft_SharePoint_Portal_ListSearchBox$get_parentDiv() {
        return this.$3_3;
    },
    set_parentDiv: function Microsoft_SharePoint_Portal_ListSearchBox$set_parentDiv(value) {
        this.$3_3 = value;
        return value;
    },
    
    $T_3: null,
    
    get_searchStatus: function Microsoft_SharePoint_Portal_ListSearchBox$get_searchStatus() {
        return this.$T_3;
    },
    set_searchStatus: function Microsoft_SharePoint_Portal_ListSearchBox$set_searchStatus(value) {
        this.$T_3 = value;
        return value;
    },
    
    $E_3: null,
    
    get_searchProgress: function Microsoft_SharePoint_Portal_ListSearchBox$get_searchProgress() {
        return this.$E_3;
    },
    set_searchProgress: function Microsoft_SharePoint_Portal_ListSearchBox$set_searchProgress(value) {
        this.$E_3 = value;
        return value;
    },
    
    $F_3: null,
    
    get_searchUpscopeLink: function Microsoft_SharePoint_Portal_ListSearchBox$get_searchUpscopeLink() {
        return this.$F_3;
    },
    set_searchUpscopeLink: function Microsoft_SharePoint_Portal_ListSearchBox$set_searchUpscopeLink(value) {
        this.$F_3 = value;
        return value;
    },
    
    $1_3: null,
    
    get_context: function Microsoft_SharePoint_Portal_ListSearchBox$get_context() {
        return this.$1_3;
    },
    set_context: function Microsoft_SharePoint_Portal_ListSearchBox$set_context(value) {
        this.$1_3 = value;
        return value;
    },
    
    $Z_3: null,
    $7_3: 0,
    
    get_focusedElement: function Microsoft_SharePoint_Portal_ListSearchBox$get_focusedElement() {
        return this.$7_3;
    },
    set_focusedElement: function Microsoft_SharePoint_Portal_ListSearchBox$set_focusedElement(value) {
        this.$7_3 = value;
        return value;
    },
    
    $H_3: false,
    
    get_isGoImgHovering: function Microsoft_SharePoint_Portal_ListSearchBox$get_isGoImgHovering() {
        return this.$H_3;
    },
    set_isGoImgHovering: function Microsoft_SharePoint_Portal_ListSearchBox$set_isGoImgHovering(value) {
        this.$H_3 = value;
        return value;
    },
    
    $M_3: false,
    
    get_isParentDivHovering: function Microsoft_SharePoint_Portal_ListSearchBox$get_isParentDivHovering() {
        return this.$M_3;
    },
    set_isParentDivHovering: function Microsoft_SharePoint_Portal_ListSearchBox$set_isParentDivHovering(value) {
        this.$M_3 = value;
        return value;
    },
    
    $6_3: false,
    
    get_isEmpty: function Microsoft_SharePoint_Portal_ListSearchBox$get_isEmpty() {
        return this.$6_3;
    },
    set_isEmpty: function Microsoft_SharePoint_Portal_ListSearchBox$set_isEmpty(value) {
        this.$6_3 = value;
        return value;
    },
    
    $9_3: false,
    
    get_isDirty: function Microsoft_SharePoint_Portal_ListSearchBox$get_isDirty() {
        return this.$9_3;
    },
    set_isDirty: function Microsoft_SharePoint_Portal_ListSearchBox$set_isDirty(value) {
        this.$9_3 = value;
        return value;
    },
    
    $B_3: 0,
    $S_3: 0,
    $O_3: 0,
    $C_3: null,
    $A_3: false,
    
    get_searchButtonShouldCancel: function Microsoft_SharePoint_Portal_ListSearchBox$get_searchButtonShouldCancel() {
        return this.$A_3;
    },
    set_searchButtonShouldCancel: function Microsoft_SharePoint_Portal_ListSearchBox$set_searchButtonShouldCancel(value) {
        this.$A_3 = value;
        return value;
    },
    
    $8_3: false,
    
    get_showingGhostedText: function Microsoft_SharePoint_Portal_ListSearchBox$get_showingGhostedText() {
        return this.$8_3;
    },
    set_showingGhostedText: function Microsoft_SharePoint_Portal_ListSearchBox$set_showingGhostedText(value) {
        this.$8_3 = value;
        return value;
    },
    
    $4_3: false,
    
    get_requestSent: function Microsoft_SharePoint_Portal_ListSearchBox$get_requestSent() {
        return this.$4_3;
    },
    set_requestSent: function Microsoft_SharePoint_Portal_ListSearchBox$set_requestSent(value) {
        this.$4_3 = value;
        return value;
    },
    
    $G_3: false,
    
    get_showProgress: function Microsoft_SharePoint_Portal_ListSearchBox$get_showProgress() {
        return this.$G_3;
    },
    set_showProgress: function Microsoft_SharePoint_Portal_ListSearchBox$set_showProgress(value) {
        this.$G_3 = value;
        return value;
    },
    
    $m_3: null,
    $n_3: null,
    $l_3: null,
    $k_3: null,
    $i_3: null,
    $j_3: null,
    $o_3: null,
    $q_3: null,
    $Y_3: null,
    $X_3: null,
    $e_3: null,
    $d_3: null,
    $b_3: null,
    $c_3: null,
    $f_3: null,
    $Q_3: false,
    $J_3: null,
    
    get_ghostedText: function Microsoft_SharePoint_Portal_ListSearchBox$get_ghostedText() {
        return this.$J_3;
    },
    set_ghostedText: function Microsoft_SharePoint_Portal_ListSearchBox$set_ghostedText(value) {
        this.$J_3 = value;
        return value;
    },
    
    $K_3: null,
    
    get_hiddenItems: function Microsoft_SharePoint_Portal_ListSearchBox$get_hiddenItems() {
        return this.$K_3;
    },
    set_hiddenItems: function Microsoft_SharePoint_Portal_ListSearchBox$set_hiddenItems(value) {
        this.$K_3 = value;
        return value;
    },
    
    $U_3: null,
    
    get_siteHiddenItems: function Microsoft_SharePoint_Portal_ListSearchBox$get_siteHiddenItems() {
        return this.$U_3;
    },
    set_siteHiddenItems: function Microsoft_SharePoint_Portal_ListSearchBox$set_siteHiddenItems(value) {
        this.$U_3 = value;
        return value;
    },
    
    $L_3: null,
    
    get_hiddenItemsTitle: function Microsoft_SharePoint_Portal_ListSearchBox$get_hiddenItemsTitle() {
        return this.$L_3;
    },
    set_hiddenItemsTitle: function Microsoft_SharePoint_Portal_ListSearchBox$set_hiddenItemsTitle(value) {
        this.$L_3 = value;
        return value;
    },
    
    $N_3: null,
    
    get_searchBoxInstructions: function Microsoft_SharePoint_Portal_ListSearchBox$get_searchBoxInstructions() {
        return this.$N_3;
    },
    set_searchBoxInstructions: function Microsoft_SharePoint_Portal_ListSearchBox$set_searchBoxInstructions(value) {
        this.$N_3 = value;
        return value;
    },
    
    $R_3: null,
    $s_3: null,
    $w_3: null,
    $17_3: null,
    
    get_$5_3: function Microsoft_SharePoint_Portal_ListSearchBox$get_$5_3() {
        var $v_0 = null;
        if (this.$1_3) {
            $v_0 = this.$1_3.completedSearchTerm;
        }
        return $v_0;
    },
    set_$5_3: function Microsoft_SharePoint_Portal_ListSearchBox$set_$5_3($p0) {
        if (this.$1_3) {
            this.$1_3.completedSearchTerm = $p0;
        }
        return $p0;
    },
    
    get_$I_3: function Microsoft_SharePoint_Portal_ListSearchBox$get_$I_3() {
        var $v_0 = null;
        if (this.$1_3) {
            $v_0 = this.$1_3.searchTerm;
        }
        return $v_0;
    },
    set_$I_3: function Microsoft_SharePoint_Portal_ListSearchBox$set_$I_3($p0) {
        if (this.$1_3) {
            this.$1_3.searchTerm = $p0;
        }
        return $p0;
    },
    
    $19_3: function Microsoft_SharePoint_Portal_ListSearchBox$$19_3($p0) {
        if (this.$1_3) {
            this.$1_3.fullListSearch = $p0;
        }
    },
    
    $13_3: '',
    
    get_searchIconUrl: function Microsoft_SharePoint_Portal_ListSearchBox$get_searchIconUrl() {
        return this.$13_3;
    },
    set_searchIconUrl: function Microsoft_SharePoint_Portal_ListSearchBox$set_searchIconUrl(value) {
        this.$13_3 = value;
        return value;
    },
    
    $12_3: '',
    
    get_searchHoverIconUrl: function Microsoft_SharePoint_Portal_ListSearchBox$get_searchHoverIconUrl() {
        return this.$12_3;
    },
    set_searchHoverIconUrl: function Microsoft_SharePoint_Portal_ListSearchBox$set_searchHoverIconUrl(value) {
        this.$12_3 = value;
        return value;
    },
    
    $u_3: '',
    
    get_cancelIconUrl: function Microsoft_SharePoint_Portal_ListSearchBox$get_cancelIconUrl() {
        return this.$u_3;
    },
    set_cancelIconUrl: function Microsoft_SharePoint_Portal_ListSearchBox$set_cancelIconUrl(value) {
        this.$u_3 = value;
        return value;
    },
    
    $t_3: '',
    
    get_cancelHoverIconUrl: function Microsoft_SharePoint_Portal_ListSearchBox$get_cancelHoverIconUrl() {
        return this.$t_3;
    },
    set_cancelHoverIconUrl: function Microsoft_SharePoint_Portal_ListSearchBox$set_cancelHoverIconUrl(value) {
        this.$t_3 = value;
        return value;
    },
    
    $W_3: '',
    
    get_fullSearchSiteUrl: function Microsoft_SharePoint_Portal_ListSearchBox$get_fullSearchSiteUrl() {
        return this.$W_3;
    },
    set_fullSearchSiteUrl: function Microsoft_SharePoint_Portal_ListSearchBox$set_fullSearchSiteUrl(value) {
        this.$W_3 = value;
        return value;
    },
    
    $18_3: '',
    
    get_searchUrl: function Microsoft_SharePoint_Portal_ListSearchBox$get_searchUrl() {
        return this.$18_3;
    },
    set_searchUrl: function Microsoft_SharePoint_Portal_ListSearchBox$set_searchUrl(value) {
        this.$18_3 = value;
        return value;
    },
    
    dispose: function Microsoft_SharePoint_Portal_ListSearchBox$dispose() {
        if (!this.$V_3) {
            Srch.ClientControl.prototype.dispose.call(this);
            this.$V_3 = true;
        }
    },
    
    initialize: function Microsoft_SharePoint_Portal_ListSearchBox$initialize() {
        Srch.ClientControl.prototype.initialize.call(this);
        this.$C_3 = '';
        this.$8_3 = false;
        this.$6_3 = true;
        this.$9_3 = false;
        this.alternateRenderer = this.$$d_$1C_3;
        this.$S_3 = 0;
        this.$O_3 = 0;
        this.$A_3 = false;
        this.$1F_3();
        this.initializeStrings();
    },
    
    get_$11_3: function Microsoft_SharePoint_Portal_ListSearchBox$get_$11_3() {
        return (this.get_id() + '_lsinput');
    },
    
    get_$14_3: function Microsoft_SharePoint_Portal_ListSearchBox$get_$14_3() {
        return (this.get_id() + '_lsimg');
    },
    
    get_$15_3: function Microsoft_SharePoint_Portal_ListSearchBox$get_$15_3() {
        return (this.get_id() + '_lsimgspan');
    },
    
    get_$1V_3: function Microsoft_SharePoint_Portal_ListSearchBox$get_$1V_3() {
        return (this.get_id() + '_lsstatus');
    },
    
    get_$p_3: function Microsoft_SharePoint_Portal_ListSearchBox$get_$p_3() {
        return (this.get_id() + '_lsupscope');
    },
    
    get_$16_3: function Microsoft_SharePoint_Portal_ListSearchBox$get_$16_3() {
        return (this.get_id() + '_lsprogress');
    },
    
    get_$10_3: function Microsoft_SharePoint_Portal_ListSearchBox$get_$10_3() {
        return (this.get_id() + '_lsparent');
    },
    
    $1F_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1F_3() {
        this.$m_3 = this.$$d_onSearchBoxKeyPress;
        this.$n_3 = this.$$d_onSearchBoxKeyUp;
        this.$l_3 = this.$$d_$1Q_3;
        this.$k_3 = this.$$d_$1P_3;
        this.$i_3 = this.$$d_$1N_3;
        this.$j_3 = this.$$d_$1O_3;
        this.$o_3 = this.$$d_$1R_3;
        this.$q_3 = this.$$d_$1S_3;
        this.$Y_3 = this.$$d_$1H_3;
        this.$X_3 = this.$$d_$1G_3;
        this.$e_3 = this.$$d_$1L_3;
        this.$d_3 = this.$$d_$1K_3;
        this.$b_3 = this.$$d_$1I_3;
        this.$c_3 = this.$$d_$1J_3;
        this.$f_3 = this.$$d_$1M_3;
        this.$B_3 = 0;
    },
    
    initializeStrings: function Microsoft_SharePoint_Portal_ListSearchBox$initializeStrings() {
        if (this.$1_3.listBaseType === 1) {
            this.$J_3 = SpsClient.ScriptResources.ip_FileGhostedText;
            this.$N_3 = SpsClient.ScriptResources.ip_LibrarySearchInstructions;
            this.$K_3 = SpsClient.ScriptResources.ip_LibraryHiddenItems;
        }
        else {
            this.$J_3 = SpsClient.ScriptResources.ip_ItemGhostedText;
            this.$N_3 = SpsClient.ScriptResources.ip_ListSearchInstructions;
            this.$K_3 = SpsClient.ScriptResources.ip_ListHiddenItems;
        }
        this.$U_3 = SpsClient.ScriptResources.ip_SiteHiddenItems;
        this.$L_3 = SpsClient.ScriptResources.ip_HiddenItemsTitle;
        this.$R_3 = SpsClient.ScriptResources.ip_SearchButtonInstructions;
        this.$s_3 = SpsClient.ScriptResources.ip_CancelButtonInstructions;
        this.$w_3 = SpsClient.ScriptResources.ip_ClearButtonInstructions;
        this.$17_3 = SpsClient.ScriptResources.ip_SearchProgress;
    },
    
    $1B_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1B_3($p0) {
        this.$B_3 |= $p0;
    },
    
    $1T_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1T_3($p0) {
        this.$B_3 &= (3 - $p0);
    },
    
    $1D_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1D_3($p0) {
        this.$x_3($p0);
        if (($p0 === 1) || ($p0 === 3)) {
            $addHandler(this.$0_3, 'keypress', this.$m_3);
            $addHandler(this.$0_3, 'keyup', this.$n_3);
            $addHandler(this.$0_3, 'input', this.$l_3);
            $addHandler(this.$0_3, 'focus', this.$k_3);
            $addHandler(this.$0_3, 'blur', this.$i_3);
            $addHandler(this.$0_3, 'click', this.$j_3);
            $addHandler(this.$2_3, 'mouseover', this.$Y_3);
            $addHandler(this.$2_3, 'mouseout', this.$X_3);
            $addHandler(this.$2_3, 'click', this.$o_3);
            $addHandler(this.$3_3, 'mouseover', this.$e_3);
            $addHandler(this.$3_3, 'mouseout', this.$d_3);
            $addHandler(this.$3_3, 'click', this.$b_3);
            $addHandler(this.$3_3, 'keypress', this.$c_3);
        }
        if (($p0 === 2) || ($p0 === 3)) {
            if (this.$F_3) {
                $addHandler(this.$F_3, 'click', this.$q_3);
            }
        }
        this.$1B_3($p0);
    },
    
    $x_3: function Microsoft_SharePoint_Portal_ListSearchBox$$x_3($p0) {
        if ((($p0 === 1) || ($p0 === 3)) && ((this.$B_3 === 1) || (this.$B_3 === 3))) {
            $removeHandler(this.$0_3, 'keypress', this.$m_3);
            $removeHandler(this.$0_3, 'keyup', this.$n_3);
            $removeHandler(this.$0_3, 'input', this.$l_3);
            $removeHandler(this.$0_3, 'focus', this.$k_3);
            $removeHandler(this.$0_3, 'blur', this.$i_3);
            $removeHandler(this.$0_3, 'click', this.$j_3);
            $removeHandler(this.$2_3, 'mouseover', this.$Y_3);
            $removeHandler(this.$2_3, 'mouseout', this.$X_3);
            $removeHandler(this.$2_3, 'click', this.$o_3);
            $removeHandler(this.$3_3, 'mouseover', this.$e_3);
            $removeHandler(this.$3_3, 'mouseout', this.$d_3);
            $removeHandler(this.$3_3, 'click', this.$b_3);
            $removeHandler(this.$3_3, 'keypress', this.$c_3);
        }
        if ((($p0 === 2) || ($p0 === 3)) && ((this.$B_3 === 2) || (this.$B_3 === 3))) {
            if (this.$F_3) {
                $removeHandler(this.$F_3, 'click', this.$q_3);
            }
        }
        this.$1T_3($p0);
    },
    
    $1E_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1E_3($p0) {
        if (($p0 === 1) || ($p0 === 3)) {
            this.$0_3 = ($get(this.get_$11_3()));
            this.$2_3 = ($get(this.get_$14_3()));
            this.$D_3 = ($get(this.get_$15_3()));
            this.$T_3 = ($get(this.get_$1V_3()));
            this.$E_3 = ($get(this.get_$16_3()));
            this.$3_3 = ($get(this.get_$10_3()));
        }
        if (($p0 === 2) || ($p0 === 3)) {
            this.$F_3 = ($get(this.get_$p_3()));
        }
    },
    
    $h_3: function Microsoft_SharePoint_Portal_ListSearchBox$$h_3($p0) {
        this.$x_3($p0);
        this.$1E_3($p0);
        this.$1D_3($p0);
    },
    
    $1H_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1H_3($p0) {
        $p0.preventDefault();
        this.$H_3 = true;
        this.updateVisuals();
    },
    
    $1G_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1G_3($p0) {
        $p0.preventDefault();
        this.$H_3 = false;
        this.updateVisuals();
    },
    
    $1L_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1L_3($p0) {
        $p0.preventDefault();
        this.$M_3 = true;
        this.updateVisuals();
    },
    
    $1K_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1K_3($p0) {
        $p0.preventDefault();
        this.$M_3 = false;
        this.updateVisuals();
    },
    
    $1I_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1I_3($p0) {
        $p0.preventDefault();
        this.$P_3();
        this.updateVisuals();
    },
    
    $1J_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1J_3($p0) {
        var $v_0 = $p0.charCode;
        if (Srch.U.isEnterKey(String.fromCharCode($v_0))) {
            $p0.preventDefault();
            $p0.stopPropagation();
            if (this.$4_3) {
                this.$A_3 = true;
                this.searchCancelOrClear();
                this.$P_3();
                this.updateVisuals();
            }
        }
        else if ($v_0 === 27) {
            $p0.preventDefault();
            $p0.stopPropagation();
        }
    },
    
    onSearchBoxKeyPress: function Microsoft_SharePoint_Portal_ListSearchBox$onSearchBoxKeyPress(evt) {
        if (!evt) {
            return;
        }
        var $v_0 = evt.charCode;
        if (Srch.U.isEnterKey(String.fromCharCode($v_0))) {
            evt.preventDefault();
            evt.stopPropagation();
            this.$A_3 = (this.$6_3 && !Srch.U.e(this.get_$5_3()));
            this.searchCancelOrClear();
            this.updateVisuals();
        }
        else if ($v_0 === 27) {
            evt.preventDefault();
            evt.stopPropagation();
        }
    },
    
    $a_3: function Microsoft_SharePoint_Portal_ListSearchBox$$a_3() {
        this.$C_3 = '';
        this.set_$I_3(null);
        this.$4_3 = false;
        this.$G_3 = false;
        this.$0_3.disabled = false;
        this.updateVisuals();
    },
    
    $1R_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1R_3($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
        this.searchCancelOrClear();
        this.updateVisuals();
    },
    
    searchCancelOrClear: function Microsoft_SharePoint_Portal_ListSearchBox$searchCancelOrClear() {
        var $v_0 = this.$0_3.value;
        if (this.$4_3) {
            this.set_$I_3(null);
            this.$19_3(false);
            inplview.RefreshInplViewUrlByContext(this.$1_3);
            inplview.CancelRefreshViewByContext(this.$1_3);
            this.$a_3();
        }
        else {
            if (this.$A_3) {
                this.clearSearch();
            }
            else {
                if (!Microsoft.SharePoint.Portal.ListSearchBox.isNullOrWhiteSpace($v_0)) {
                    this.$1U_3($v_0);
                }
            }
        }
        this.$1A_3();
    },
    
    $1S_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1S_3($p0) {
        $p0.preventDefault();
        this.$1X_3();
    },
    
    onSearchBoxKeyUp: function Microsoft_SharePoint_Portal_ListSearchBox$onSearchBoxKeyUp(evt) {
        if (!evt) {
            return;
        }
        evt.preventDefault();
        this.$z_3();
    },
    
    $1Q_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1Q_3($p0) {
        $p0.preventDefault();
        this.$z_3();
    },
    
    $z_3: function Microsoft_SharePoint_Portal_ListSearchBox$$z_3() {
        var $v_0 = this.$0_3.value;
        if (!Microsoft.SharePoint.Portal.ListSearchBox.$v(this.$Z_3, $v_0)) {
            this.$9_3 = true;
            this.$Z_3 = $v_0;
        }
        this.$6_3 = (Microsoft.SharePoint.Portal.ListSearchBox.isNullOrWhiteSpace($v_0));
        this.updateVisuals();
    },
    
    $1P_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1P_3($p0) {
        $p0.preventDefault();
        this.$7_3 = 1;
        this.updateVisuals();
    },
    
    $1N_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1N_3($p0) {
        $p0.preventDefault();
        this.$7_3 = 0;
        this.updateVisuals();
    },
    
    $1O_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1O_3($p0) {
        $p0.stopPropagation();
    },
    
    $1M_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1M_3($p0) {
        $p0.stopPropagation();
        this.$G_3 = false;
        this.updateVisuals();
    },
    
    onDataRefreshCompleted: function Microsoft_SharePoint_Portal_ListSearchBox$onDataRefreshCompleted(completionContext) {
        if (this.$4_3) {
            this.$C_3 = '';
            this.$8_3 = false;
            this.set_$5_3(this.get_$I_3());
            this.$0_3.value = ((!Srch.U.e(this.get_$5_3())) ? this.get_$5_3() : '');
            this.$6_3 = Microsoft.SharePoint.Portal.ListSearchBox.isNullOrWhiteSpace(this.$0_3.value);
            this.$S_3 = this.$O_3;
            this.$a_3();
            if (this.$6_3) {
                this.$P_3();
                this.$r_3();
            }
            this.$9_3 = false;
            this.$Z_3 = '';
            this.$4_3 = false;
            this.$G_3 = false;
            this.$Q_3 = false;
            this.$0_3.disabled = false;
        }
        this.updateVisuals();
        this.$1A_3();
    },
    
    updateVisuals: function Microsoft_SharePoint_Portal_ListSearchBox$updateVisuals() {
        if ((this.$9_3 && (!Microsoft.SharePoint.Portal.ListSearchBox.$v(this.$0_3.value, this.get_$5_3())) && (!this.$6_3)) && (!this.$4_3)) {
            this.showSearchIcon();
            this.$2_3.title = this.$R_3;
        }
        else if ((!this.$9_3 || (this.$9_3 && Srch.U.e(this.get_$5_3()))) && this.$6_3) {
            this.showSearchIcon();
            this.$2_3.title = this.$R_3;
        }
        else {
            this.showCancelIcon();
            if (this.$4_3) {
                this.$2_3.title = this.$s_3;
            }
            else {
                this.$2_3.title = this.$w_3;
            }
        }
        this.styleParentDiv(((this.$7_3 === 1) || (this.$7_3 === 2)), this.$M_3);
        this.styleTextBox(this.$6_3, this.$7_3 === 1);
        this.$0_3.disabled = this.$4_3;
        if (this.$G_3) {
            this.$E_3.style.visibility = 'visible';
            $addHandler(this.$E_3, 'click', this.$f_3);
            this.$Q_3 = true;
        }
        else {
            this.$E_3.style.visibility = 'hidden';
            if (this.$Q_3) {
                $removeHandler(this.$E_3, 'click', this.$f_3);
                this.$Q_3 = false;
            }
        }
    },
    
    showSearchIcon: function Microsoft_SharePoint_Portal_ListSearchBox$showSearchIcon() {
        this.$A_3 = false;
        if (this.$H_3) {
            this.$2_3.setAttribute('class', 'ms-inlineSearch-searchImgHover ms-inlineSearch-imgHoverHighlight');
            this.$D_3.setAttribute('class', 'ms-inlineSearch-searchImgSpanBase ms-inlineSearch-searchImgSpanHoverHighlight');
        }
        else {
            this.$2_3.setAttribute('class', 'ms-inlineSearch-searchImg');
            this.$D_3.setAttribute('class', 'ms-inlineSearch-searchImgSpanBase ms-inlineSearch-searchImgSpanStandard');
        }
    },
    
    showCancelIcon: function Microsoft_SharePoint_Portal_ListSearchBox$showCancelIcon() {
        this.$A_3 = true;
        if (this.$H_3) {
            this.$2_3.setAttribute('class', 'ms-inlineSearch-cancelImgHover ms-inlineSearch-imgHoverHighlight');
            this.$D_3.setAttribute('class', 'ms-inlineSearch-searchImgSpanBase ms-inlineSearch-searchImgSpanHoverHighlight');
        }
        else {
            this.$2_3.setAttribute('class', 'ms-inlineSearch-cancelImg');
            this.$D_3.setAttribute('class', 'ms-inlineSearch-searchImgSpanBase ms-inlineSearch-searchImgSpanStandard');
        }
    },
    
    $P_3: function Microsoft_SharePoint_Portal_ListSearchBox$$P_3() {
        this.$7_3 = 1;
        this.$0_3.select();
        if (!this.$0_3.disabled) {
            this.$0_3.focus();
        }
    },
    
    $r_3: function Microsoft_SharePoint_Portal_ListSearchBox$$r_3() {
        this.$7_3 = 0;
        if (!this.$0_3.disabled) {
            this.$0_3.blur();
        }
    },
    
    styleParentDiv: function Microsoft_SharePoint_Portal_ListSearchBox$styleParentDiv(parentDivIsFocused, isHovering) {
        if (parentDivIsFocused) {
            this.$3_3.setAttribute('class', 'ms-InlineSearch-Outline-Baseline ms-InlineSearch-Outline-Focused');
        }
        else if (isHovering) {
            this.$3_3.setAttribute('class', 'ms-InlineSearch-Outline-Baseline ms-InlineSearch-Outline-Filled');
        }
        else {
            this.$3_3.setAttribute('class', 'ms-InlineSearch-Outline-Baseline ms-InlineSearch-Outline-Empty');
        }
    },
    
    styleTextBox: function Microsoft_SharePoint_Portal_ListSearchBox$styleTextBox(textBoxIsEmpty, textBoxIsFocused) {
        if (textBoxIsEmpty) {
            if (textBoxIsFocused) {
                if (this.$8_3) {
                    this.$0_3.value = this.$C_3;
                    this.$C_3 = '';
                    this.$8_3 = false;
                }
                this.$0_3.setAttribute('class', 'ms-helperText ms-textSmall ms-InlineSearch-SearchBox-Baseline ms-InlineSearch-SearchBox-EmptyFocused');
            }
            else {
                if (!this.$8_3) {
                    this.$C_3 = ((Microsoft.SharePoint.Portal.ListSearchBox.isNullOrWhiteSpace(this.$0_3.value)) ? this.$0_3.value : '');
                    this.$0_3.value = this.$J_3;
                    this.$8_3 = true;
                }
                this.$0_3.setAttribute('class', 'ms-helperText ms-textSmall ms-InlineSearch-SearchBox-Baseline ms-InlineSearch-SearchBox-EmptyUnfocused');
            }
        }
        else {
            this.$C_3 = '';
            this.$8_3 = false;
            this.$0_3.setAttribute('class', 'ms-helperText ms-textSmall ms-InlineSearch-SearchBox-Baseline ms-InlineSearch-SearchBox-Filled');
        }
    },
    
    $1C_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1C_3($p0, $p1) {
        var $v_0 = '<div id=\'{0}\' class=\'ms-InlineSearch-Outline-Baseline ms-InlineSearch-Outline-Empty\'><input id=\'{1}\' title=\'{2}\' class=\'ms-core-form-helper ms-InlineSearch-SearchBox-Baseline ms-InlineSearch-SearchBox-Empty\' type=\'text\' value=\'{3}\' maxlength=\'2048\'/><span id=\'{4}\' class=\'{5}\'><img id=\'{6}\' class=\'{7}\' src=\'{8}\' title=\'{9}\'/></span></div><div id=\'{10}\' class=\'ms-InlineSearch-SearchProgress\'><img src=\'{11}\' title=\'{12}\' style=\'vertical-align:middle;\'/></div>';
        var $v_1 = String.format($v_0, SP.Utilities.HttpUtility.htmlEncode(this.get_$10_3()), SP.Utilities.HttpUtility.htmlEncode(this.get_$11_3()), SP.Utilities.HttpUtility.htmlEncode(this.$N_3), SP.Utilities.HttpUtility.htmlEncode(this.get_$5_3()), SP.Utilities.HttpUtility.htmlEncode(this.get_$15_3()), 'ms-inlineSearch-searchImgSpanBase ms-inlineSearch-searchImgSpanStandard', SP.Utilities.HttpUtility.htmlEncode(this.get_$14_3()), 'ms-inlineSearch-searchImg', GetThemedImageUrl('spcommon.png'), SP.Utilities.HttpUtility.htmlEncode(this.$R_3), SP.Utilities.HttpUtility.htmlEncode(this.get_$16_3()), SP.Utilities.HttpUtility.htmlEncode(this.$1_3.imagesPath + 'loadingcirclests16.gif'), SP.Utilities.HttpUtility.htmlEncode(this.$17_3));
        $p0.innerHTML = $v_1;
    },
    
    $1A_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1A_3() {
        var $v_0 = Microsoft.SharePoint.Portal.ListSearchBox.$y(this.$S_3, 2);
        var $v_1;
        switch ($v_0) {
            case 0:
                $v_1 = '';
                break;
            case 1:
                $v_1 = '';
                break;
            case 2:
                var $v_2 = String.format(this.$K_3, ' <a href=\'#\' id=\'' + this.get_$p_3() + '\' title=\'' + this.$L_3 + '\'>', '</a>');
                $v_1 = '<div class=\'ms-InlineSearch-SearchStatus\'>' + $v_2 + '</div>';
                break;
            case 3:
                var $v_3 = String.format(this.$U_3, ' <a href=\'#\' id=\'' + this.get_$p_3() + '\' title=\'' + this.$L_3 + '\'>', '</a>');
                $v_1 = '<div class=\'ms-InlineSearch-SearchStatus\'>' + $v_3 + '</div>';
                break;
            default:
                $v_1 = '';
                break;
        }
        this.$h_3(1);
        this.$T_3.innerHTML = $v_1;
        this.$h_3(2);
    },
    
    $1W_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1W_3() {
        this.$G_3 = this.$4_3;
        this.updateVisuals();
    },
    
    $1U_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1U_3($p0) {
        if (!this.$6_3) {
            this.set_$I_3($p0);
            this.$g_3(0, $p0);
        }
    },
    
    clearSearch: function Microsoft_SharePoint_Portal_ListSearchBox$clearSearch() {
        if (Srch.U.e(this.get_$5_3())) {
            this.$0_3.value = '';
            this.$P_3();
        }
        this.$a_3();
        if (!Srch.U.e(this.get_$5_3())) {
            this.$g_3(1, null);
        }
    },
    
    $1X_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1X_3() {
        this.$g_3(2, this.get_$5_3());
    },
    
    $1Y_3: function Microsoft_SharePoint_Portal_ListSearchBox$$1Y_3() {
        var $v_0 = String.format('{0}?u={1}&k={2}', SP.Utilities.UrlBuilder.urlCombine(this.$1_3.HttpRoot, SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl() + 'osssearchresults.aspx'), SP.Utilities.HttpUtility.urlKeyValueEncode(this.$W_3), SP.Utilities.HttpUtility.urlKeyValueEncode(this.get_$5_3()));
        STSNavigate($v_0);
    },
    
    $g_3: function Microsoft_SharePoint_Portal_ListSearchBox$$g_3($p0, $p1) {
        this.$O_3 = Microsoft.SharePoint.Portal.ListSearchBox.$y(this.$S_3, $p0);
        this.$19_3(this.$O_3 === 2);
        this.set_$I_3($p1);
        if (this.$O_3 !== 3) {
            this.$r_3();
            this.$0_3.disabled = true;
            this.$7_3 = 2;
            this.$3_3.focus();
            this.$4_3 = true;
            window.setTimeout(this.$$d_$1W_3, 300);
            this.$1_3.onDataRefreshCompleted = this.$$d_onDataRefreshCompleted;
            inplview.RefreshInplViewUrlByContext(this.$1_3);
            inplview.HandleRefreshViewByContext(this.$1_3);
            this.updateVisuals();
        }
        else {
            this.$1Y_3();
        }
    },
    
    bootstrapRendering: function Microsoft_SharePoint_Portal_ListSearchBox$bootstrapRendering() {
        this.renderControl(null, null);
        this.$h_3(3);
        this.updateVisuals();
    }
}


Microsoft.SharePoint.Portal.ListSearchBox.SearchScopeType = function() {}
Microsoft.SharePoint.Portal.ListSearchBox.SearchScopeType.prototype = {
    none: 0, 
    optimistic: 1, 
    list: 2, 
    site: 3
}
Microsoft.SharePoint.Portal.ListSearchBox.SearchScopeType.registerEnum('Microsoft.SharePoint.Portal.ListSearchBox.SearchScopeType', false);


Microsoft.SharePoint.Portal.ListSearchBox.SearchActionType = function() {}
Microsoft.SharePoint.Portal.ListSearchBox.SearchActionType.prototype = {
    search: 0, 
    cancel: 1, 
    upscope: 2
}
Microsoft.SharePoint.Portal.ListSearchBox.SearchActionType.registerEnum('Microsoft.SharePoint.Portal.ListSearchBox.SearchActionType', false);


Microsoft.SharePoint.Portal.ListSearchBox.FocusedElementType = function() {}
Microsoft.SharePoint.Portal.ListSearchBox.FocusedElementType.prototype = {
    none: 0, 
    searchBox: 1, 
    parentDiv: 2
}
Microsoft.SharePoint.Portal.ListSearchBox.FocusedElementType.registerEnum('Microsoft.SharePoint.Portal.ListSearchBox.FocusedElementType', false);


Microsoft.SharePoint.Portal.ListSearchBox.registerClass('Microsoft.SharePoint.Portal.ListSearchBox', Srch.ClientControl);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}

NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.ListSearchBox.js");

_spApplicationPagesScriptLoaded = true;
