// JScript File


Type.registerNamespace('Microsoft.SharePoint.Search.FacetedNavigation');

Microsoft.SharePoint.Search.FacetedNavigation.TermInfo = function Microsoft_SharePoint_Search_FacetedNavigation_TermInfo() {
}
Microsoft.SharePoint.Search.FacetedNavigation.TermInfo.prototype = {
    Name: null,
    Path: null,
    TermId: null,
    TermSetId: null
}


Microsoft.SharePoint.Search.FacetedNavigation.TermDescendantsInfo = function Microsoft_SharePoint_Search_FacetedNavigation_TermDescendantsInfo() {
}
Microsoft.SharePoint.Search.FacetedNavigation.TermDescendantsInfo.prototype = {
    TotalNumberOfDescendants: 0,
    TotalNumberOfInheritingDescendants: 0,
    DescendantsStoppingInheritance: null
}


Microsoft.SharePoint.Search.FacetedNavigation.TermRefinementInfo = function Microsoft_SharePoint_Search_FacetedNavigation_TermRefinementInfo() {
}
Microsoft.SharePoint.Search.FacetedNavigation.TermRefinementInfo.prototype = {
    RefinementConfiguration: null,
    InheritanceMode: 0,
    ConfigurationSource: null
}


Microsoft.SharePoint.Search.FacetedNavigation.TermRefinementInfoWebServiceResult = function Microsoft_SharePoint_Search_FacetedNavigation_TermRefinementInfoWebServiceResult() {
}
Microsoft.SharePoint.Search.FacetedNavigation.TermRefinementInfoWebServiceResult.prototype = {
    Error: null,
    TermRefinementInfo: null
}


Microsoft.SharePoint.Search.FacetedNavigation.TermDescendantsInfoWebServiceResult = function Microsoft_SharePoint_Search_FacetedNavigation_TermDescendantsInfoWebServiceResult() {
}
Microsoft.SharePoint.Search.FacetedNavigation.TermDescendantsInfoWebServiceResult.prototype = {
    Error: null,
    DescendantsInfo: null
}


Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab = function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab(tabId) {
    this.$$d_$1R_3 = Function.createDelegate(this, this.$1R_3);
    this.$$d_$1J_3 = Function.createDelegate(this, this.$1J_3);
    this.$$d_$1M_3 = Function.createDelegate(this, this.$1M_3);
    this.$$d_$1H_3 = Function.createDelegate(this, this.$1H_3);
    this.$$d_$1E_3 = Function.createDelegate(this, this.$1E_3);
    this.$$d_$1F_3 = Function.createDelegate(this, this.$1F_3);
    this.$$d_$1K_3 = Function.createDelegate(this, this.$1K_3);
    this.$$d_$1L_3 = Function.createDelegate(this, this.$1L_3);
    this.$$d_$1N_3 = Function.createDelegate(this, this.$1N_3);
    this.$$d_$1I_3 = Function.createDelegate(this, this.$1I_3);
    this.$$d_$1Q_3 = Function.createDelegate(this, this.$1Q_3);
    this.$$d_$1G_3 = Function.createDelegate(this, this.$1G_3);
    this.$$d_$1O_3 = Function.createDelegate(this, this.$1O_3);
    Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.initializeBase(this, [ $get(tabId), tabId ]);
    this.$1_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'selectedRefinersListBox');
    this.$1_3.tabIndex = 3;
    this.$W_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'InheritanceModeDescriptionLabel');
    this.$Y_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'refinerDisplayTemplateLabel');
    this.$d_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'refinerTypeLabel');
    this.$b_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'refinerSortByLabel');
    this.$c_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'refinerSortOrderLabel');
    this.$Z_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'refinerMaxNumOptionsLabel');
    this.$R_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'divPinnedTermWarning');
    this.$S_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'divReadonlyTermWarning');
    this.$4_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'divTermAncestorsInfo');
    this.$3_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'divTermDescendantsInfo');
    this.$G_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'divTermDescendantsInfoWaiting');
    this.$8_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'divTermDescendantsInfoError');
    this.$F_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'btnStopInheritance');
    this.$D_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'btnInherit');
    this.$C_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'btnCustomizeRefiners');
    this.$E_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'btnPreviewRefiners');
    this.$o_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'divStopInheritance');
    this.$n_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'divInherit');
    this.$U_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'divUnknownInheritance');
    this.$T_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'divTextRefinerProperties');
    this.$Q_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'divNumericRefinerProperties');
    this.$P_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'divDateRefinerProperties');
    this.$V_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'divUnsupportedProperties');
    this.$O_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'divCommonRefinerProperties');
    this.$t_3 = [ this.$T_3, this.$Q_3, this.$P_3, this.$V_3 ];
    this.$a_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'refinerNumericManualIntervals');
    this.$x_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'refinerNumericSchemaIntervals');
    this.$v_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'refinerDateDefaultIntervals');
    this.$w_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'refinerDateSchemaIntervals');
    this.$N_3 = $get('ddlDisplayTemplateSelector');
    this.$u_3 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.rootNode, 'refinerAliasesLabel');
    $addHandler(this.$1_3, 'change', this.$$d_$1O_3);
    $addHandler(this.$1_3, 'click', this.$$d_$1O_3);
    $addHandler(this.$C_3, 'click', this.$$d_$1G_3);
    $addHandler(this.$F_3, 'click', this.$$d_$1Q_3);
    $addHandler(this.$D_3, 'click', this.$$d_$1I_3);
    $addHandler(this.$E_3, 'click', this.$$d_$1N_3);
}
Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$k = function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$k($p0, $p1) {
    return String.format('<a href=\'javascript:;\' id=\'{1}\' >{0}</a>', SP.Utilities.HttpUtility.htmlEncode($p1), SP.Utilities.HttpUtility.htmlEncode($p0));
}
Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$14 = function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$14($p0, $p1) {
    var $v_0 = false;
    if ($p0 && !SP.ScriptUtility.isNullOrEmptyString($p1)) {
        var $v_1 = Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$11($p0, 3);
        if ($v_1) {
            var $v_2 = $v_1.get_data().SCP;
            if (!SP.ScriptUtility.isNullOrEmptyString($v_2)) {
                var $v_3 = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.deserializeProperties($v_2);
                $v_0 = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.getBooleanProperty($v_3, $p1);
            }
        }
    }
    return $v_0;
}
Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$11 = function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$11($p0, $p1) {
    var $v_0 = $p0;
    if ($v_0) {
        while ($v_0.get_nodeType() === 4 && $v_0.get_parentNode()) {
            $v_0 = $v_0.get_parentNode();
        }
        if ($v_0.get_nodeType() === $p1) {
            return $v_0;
        }
    }
    return null;
}
Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$1A = function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1A($p0) {
    if (!$p0.get_parentNode()) {
        return true;
    }
    if ($p0.get_parentNode().get_nodeType() !== 4) {
        return true;
    }
    return false;
}
Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0 = function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$0($p0, $p1) {
    $p0.style.display = ($p1) ? '' : 'none';
}
Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$1P = function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1P($p0, $p1) {
    Srch.U.trace(null, 'OnShowDescendantsStoppingInheritancePopupReturn', 'OnShowDescendantsStoppingInheritancePopupReturn');
}
Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$16 = function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$16() {
    return '<div class=\'ms-error\'>' + SP.Utilities.HttpUtility.htmlEncode(Srch.U.loadResource('refconf_FNT_ConfigurationLoadWarningNullResponse')) + '</div>';
}
Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.prototype = {
    $2_3: null,
    $6_3: 0,
    $H_3: false,
    $1_3: null,
    $Y_3: null,
    $d_3: null,
    $b_3: null,
    $c_3: null,
    $Z_3: null,
    $W_3: null,
    $R_3: null,
    $S_3: null,
    $4_3: null,
    $3_3: null,
    $G_3: null,
    $8_3: null,
    $F_3: null,
    $D_3: null,
    $C_3: null,
    $E_3: null,
    $o_3: null,
    $n_3: null,
    $U_3: null,
    $T_3: null,
    $Q_3: null,
    $P_3: null,
    $V_3: null,
    $O_3: null,
    $t_3: null,
    $a_3: null,
    $x_3: null,
    $v_3: null,
    $w_3: null,
    $N_3: null,
    $u_3: null,
    $7_3: null,
    $l_3: null,
    $m_3: null,
    $X_3: null,
    $I_3: null,
    $J_3: null,
    
    $g_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$g_3($p0) {
        var $v_0 = {};
        $v_0['termId'] = $p0.termId;
        $v_0['termSetId'] = this.$9_3();
        $v_0['termStoreId'] = this.$q_3();
        this.$X_3 = $p0;
        var $v_1 = SP.ClientContext.get_current();
        Sys.Net.WebServiceProxy.invoke(encodeURI($v_1.get_url()) + '/_vti_bin/termrefinementinfointernalservice.json', 'GetTermRefinementInfo', false, $v_0, this.$$d_$1L_3, this.$$d_$1K_3, $p0, Sys.Net.WebRequestManager.get_defaultTimeout(), false, null);
        if ($p0.overrideInheritanceInfo) {
            var $v_2 = new Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.DescendantsComputeContext($p0.termId);
            this.$I_3 = $v_2;
            Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0(this.$3_3, false);
            Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0(this.$G_3, true);
            Sys.Net.WebServiceProxy.invoke(encodeURI($v_1.get_url()) + '/_vti_bin/termrefinementinfointernalservice.json', 'ComputeTermDescendantsInfo', false, $v_0, this.$$d_$1F_3, this.$$d_$1E_3, $v_2, Sys.Net.WebRequestManager.get_defaultTimeout(), false, null);
        }
    },
    
    $f_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$f_3($p0, $p1) {
        this.$j_3();
        this.$J_3 = SP.UI.Status.addStatus('', $p0, true);
        SP.UI.Status.setStatusPriColor(this.$J_3, $p1);
    },
    
    $j_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$j_3() {
        if (this.$J_3) {
            SP.UI.Status.removeStatus(this.$J_3);
        }
    },
    
    $p_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$p_3() {
        this.$15_3();
        this.$H_3 = false;
        this.$X_3 = null;
    },
    
    $1L_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1L_3($p0, $p1, $p2) {
        Srch.U.trace(null, 'OnLoadingConfigurationSucceeded', 'Entering method');
        var $v_0 = $p1;
        if ($v_0 !== this.$X_3) {
            Srch.U.trace(null, 'OnLoadingConfigurationSucceeded', 'Configuration context in response is not current - ignoring response');
            return;
        }
        this.$H_3 = true;
        try {
            var $v_1 = $p0;
            if (!$v_1 || $v_1.Error) {
                var $v_5 = (!$v_1) ? Srch.U.loadResource('refconf_FNT_ConfigurationLoadWarningNullResponse') : String.format(Srch.U.loadResource('refconf_FNT_ConfigurationLoadWarning'), $v_1.Error);
                Srch.U.traceFormatted(null, 'OnLoadingConfigurationSucceeded', 'Error in response:{0}', $v_5);
                this.$f_3($v_5, 'yellow');
            }
            else {
                this.$j_3();
            }
            var $v_2;
            var $v_3;
            var $v_4 = null;
            if (!$v_1 || !$v_1.TermRefinementInfo) {
                Srch.U.trace(null, 'OnLoadingConfigurationSucceeded', 'Null response');
                $v_2 = new Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration([]);
                $v_3 = 1;
            }
            else {
                $v_3 = $v_1.TermRefinementInfo.InheritanceMode;
                $v_2 = $v_1.TermRefinementInfo.RefinementConfiguration;
                if (!$v_2) {
                    Srch.U.trace(null, 'OnLoadingConfigurationSucceeded', 'Null refinement configuration');
                    $v_2 = new Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration([]);
                }
                $v_4 = $v_1.TermRefinementInfo.ConfigurationSource;
            }
            if ($v_0.overrideInheritanceInfo) {
                this.$1D_3($v_3);
            }
            if ($v_0.overrideRefinementConfiguration) {
                this.$e_3($v_2);
            }
            this.$1B_3($v_4);
        }
        finally {
            this.$p_3();
        }
        Srch.U.trace(null, 'OnLoadingConfigurationSucceeded', 'Leaving method');
    },
    
    $1B_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1B_3($p0) {
        this.$4_3.innerHTML = '';
        if (this.$6_3 === 1) {
            this.$4_3.innerHTML = Srch.U.loadResource('refconf_FNT_DCR_CustomRefiners');
        }
        else {
            if ($p0) {
                var $v_0 = this.$9_3() === $p0.TermSetId;
                var $v_1 = SP.Guid.newGuid().toString();
                var $v_2 = Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$k($v_1, $p0.Name);
                var $v_3 = ($v_0) ? Srch.U.loadResource('refconf_FNT_InheritModeTermInfoSingularFormatString') : Srch.U.loadResource('refconf_FNT_DCR_InheritModeAnotherTermset');
                this.$4_3.innerHTML = String.format($v_3, $v_2);
                var $v_4 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.$4_3, $v_1);
                $addHandler($v_4, 'click', new Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.FocusTermHandler(this, $p0).$$d_focusTerm);
            }
            else {
                Srch.U.trace(null, 'OnLoadingConfigurationSucceeded', 'No configuration source from server');
                this.$4_3.innerHTML = Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$16();
            }
        }
    },
    
    $1D_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1D_3($p0) {
        this.$6_3 = $p0;
        this.$h_3();
    },
    
    $1C_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1C_3($p0) {
        this.$3_3.innerHTML = '';
        if ($p0) {
            if ($p0.TotalNumberOfDescendants > 0) {
                this.$L_3(String.format(Srch.U.loadResource('refconf_FNT_DCR_DescendantInfo_ChildTermsTotal'), $p0.TotalNumberOfDescendants));
                this.$L_3(String.format(Srch.U.loadResource('refconf_FNT_DCR_DescendantInfo_ChildTermsNotInheriting'), $p0.TotalNumberOfDescendants - $p0.TotalNumberOfInheritingDescendants));
            }
            if ($p0.DescendantsStoppingInheritance.length > 0) {
                var $v_0 = SP.Guid.newGuid().toString();
                var $v_1 = Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$k($v_0, Srch.U.loadResource('refconf_FNT_DCR_DescendantInfo_ChildTermsStoppingInheritingLinkAnchor'));
                this.$L_3(String.format(Srch.U.loadResource('refconf_FNT_DCR_DescendantInfo_ChildTermsStoppingInheriting'), $p0.DescendantsStoppingInheritance.length, $v_1));
                var $v_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(this.$3_3, $v_0);
                $addHandler($v_2, 'click', new Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.ShowDescendantsHandler(this, $p0).$$d_showDescendantsStoppingInheritance);
            }
        }
        else {
            Srch.U.trace(null, 'OnLoadingConfigurationSucceeded', 'No TermDescendantInfo from server for the node');
        }
    },
    
    $L_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$L_3($p0) {
        var $v_0 = this.$12_3();
        $v_0.innerHTML = $p0;
    },
    
    $12_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$12_3() {
        var $v_0 = document.createElement('div');
        $v_0.className = 'ms-srch-facnav-descendants-info-entry-container';
        this.$3_3.appendChild($v_0);
        return $v_0;
    },
    
    $1K_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1K_3($p0, $p1, $p2) {
        Srch.U.trace(null, 'OnLoadingConfigurationFailed', 'Entering method');
        this.$H_3 = true;
        try {
            Srch.U.traceFormatted(null, 'OnLoadingConfigurationFailed', 'Web service error:{0}', $p0.get_message());
            this.$f_3(String.format(Srch.U.loadResource('refconf_FNT_ConfigurationLoadFailure'), $p0.get_message()), 'red');
        }
        finally {
            this.$p_3();
        }
        this.$e_3(new Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration(new Array(0)));
        this.$C_3.disabled = true;
        this.$E_3.disabled = true;
        this.$F_3.disabled = true;
        this.$D_3.disabled = true;
        this.$4_3.innerHTML = '';
        this.$3_3.innerHTML = '';
        Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0(this.$U_3, true);
        Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0(this.$R_3, false);
        Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0(this.$S_3, false);
        Srch.U.trace(null, 'OnLoadingConfigurationFailed', 'Leaving method');
    },
    
    $1E_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1E_3($p0, $p1, $p2) {
        Srch.U.trace(null, 'OnComputingDescendantsFailed', 'Entering method');
        Srch.U.traceFormatted(null, 'OnComputingDescendantsFailed', 'Web service error:{0}', $p0.get_message());
        try {
            this.$3_3.innerHTML = $p0.get_message();
            Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0(this.$3_3, false);
            Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0(this.$G_3, false);
            Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0(this.$8_3, true);
        }
        finally {
            this.$I_3 = null;
        }
        Srch.U.trace(null, 'OnComputingDescendantsFailed', 'Leaving method');
    },
    
    $1F_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1F_3($p0, $p1, $p2) {
        Srch.U.trace(null, 'OnComputingDescendantsSucceeded', 'Entering method');
        var $v_0 = $p1;
        if ($v_0 !== this.$I_3) {
            Srch.U.trace(null, 'OnComputingDescendantsSucceeded', 'Configuration context in response is not current - ignoring response');
            return;
        }
        try {
            Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0(this.$3_3, true);
            Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0(this.$G_3, false);
            var $v_1 = $p0;
            if (!$v_1 || !$v_1.DescendantsInfo || $v_1.Error) {
                var $v_2 = (!$v_1) ? Srch.U.loadResource('refconf_FNT_ConfigurationLoadWarningNullResponse') : String.format(Srch.U.loadResource('refconf_FNT_ConfigurationLoadWarning'), $v_1.Error);
                Srch.U.traceFormatted(null, 'OnComputingDescendantsSucceeded', 'Error in response:{0}', $v_2);
                this.$f_3($v_2, 'yellow');
                this.$8_3.innerHTML = $v_2;
                Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0(this.$8_3, true);
            }
            else {
                Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0(this.$8_3, false);
            }
            if ($v_1 && $v_1.DescendantsInfo) {
                this.$1C_3($v_1.DescendantsInfo);
            }
        }
        finally {
            this.$I_3 = null;
        }
        Srch.U.trace(null, 'OnComputingDescendantsSucceeded', 'Leaving method');
    },
    
    $1U_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1U_3($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = new SP.UI.DialogOptions();
        $v_0.args = $p5;
        if ($p0 > 0) {
            $v_0.height = $p0;
        }
        if ($p1 > 0) {
            $v_0.width = $p1;
        }
        $v_0.autoSize = true;
        $v_0.dialogReturnValueCallback = $p6;
        $v_0.title = $p4;
        var $v_1 = SP.Utilities.Utility.getLayoutsPageUrl($p2);
        if (!SP.ScriptUtility.isNullOrEmptyString($p3)) {
            $v_1 += '?' + $p3;
        }
        $v_0.url = $v_1;
        var $v_2 = SP.UI.ModalDialog.showModalDialog($v_0);
    },
    
    $i_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$i_3($p0) {
        if (this.$6_3 !== $p0) {
            this.$6_3 = $p0;
            this.$h_3();
            if ($p0 === 1) {
                if (this.$W_3) {
                    this.$W_3.innerHTML = '';
                }
                this.$s_3();
                this.$g_3(new Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.ConfigurationLoadContext(this.get_treeFocusNode().get_id(), false, false));
            }
            else {
                this.$g_3(new Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.ConfigurationLoadContext(this.get_treeFocusNode().get_parentNode().get_id(), false, true));
            }
            Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
        }
    },
    
    $1G_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1G_3($p0) {
        if ($p0) {
            this.$1U_3(-1, -1, 'RefinementConfigurationDialog.aspx', String.format('TermId={0}', this.get_treeFocusNode().get_id()), String.format(Srch.U.loadResource('refconf_FNT_DCR_RefinementConfigurationDialogTitle'), this.get_treeFocusNode().get_text()), Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialogArgs.toJSON(new Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialogArgs(this.$2_3, this.get_treeFocusNode().get_id(), null)), this.$$d_$1H_3);
            $p0.preventDefault();
        }
    },
    
    $1H_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1H_3($p0, $p1) {
        if ($p0 === 1 && $p1) {
            var $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration.fromJSON($p1);
            this.$1_3.innerHTML = '';
            this.$Y_3.innerHTML = '';
            this.$d_3.innerHTML = '';
            this.$b_3.innerHTML = '';
            this.$c_3.innerHTML = '';
            this.$Z_3.innerHTML = '';
            this.$e_3($v_0);
            Microsoft.SharePoint.Taxonomy.TermStoreManager.enableSubmitButton();
        }
    },
    
    $e_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$e_3($p0) {
        this.$2_3 = $p0;
        this.$E_3.disabled = !$p0.refinerConfigurations || !$p0.refinerConfigurations.length;
        if (this.$2_3.refinerConfigurations) {
            this.$s_3();
        }
    },
    
    $1O_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1O_3($p0) {
        if ($p0) {
            this.$r_3(this.$1_3.selectedIndex);
            $p0.preventDefault();
        }
    },
    
    $1M_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1M_3($p0) {
        if ($p0.keyCode === 27) {
            SP.UI.ModalDialog.commonModalDialogClose(0, null);
        }
    },
    
    $y_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$y_3($p0, $p1, $p2, $p3) {
        var $v_0 = document.createElement('div');
        $v_0.innerHTML = $get($p0).innerHTML;
        var $v_1 = new SP.UI.DialogOptions();
        $v_1.html = $v_0;
        $v_1.title = Srch.U.loadResource($p1);
        $v_1.allowMaximize = false;
        $v_1.autoSize = true;
        $v_1.dialogReturnValueCallback = $p3;
        SP.UI.ModalDialog.showModalDialog($v_1);
        var $v_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById($v_0, $p2);
        $v_2.focus();
        $addHandler($v_0, 'keyup', this.$$d_$1M_3);
    },
    
    $1I_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1I_3($p0) {
        this.$y_3('divInheritPopup', 'refconf_FNT_DCR_InheritPopupTitle', 'btnCancelInheritPopup', this.$$d_$1J_3);
    },
    
    $1Q_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1Q_3($p0) {
        this.$y_3('divStopInheritingPopup', 'refconf_FNT_DCR_StopInheritingPopupTitle', 'btnCancelStopInheritingPopup', this.$$d_$1R_3);
    },
    
    $1J_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1J_3($p0, $p1) {
        if ($p0 === 1) {
            this.$i_3(0);
        }
    },
    
    $1R_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1R_3($p0, $p1) {
        if ($p0 === 1) {
            this.$i_3(1);
        }
    },
    
    $1V_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1V_3($p0) {
        Srch.U.trace(null, 'ShowWaitScreen', 'Enter');
        if (!this.$7_3) {
            this.$7_3 = SP.UI.ModalDialog.showWaitScreenWithNoClose(Srch.U.loadResource('refconf_DCR_FacetedNavigationProgressTitle'), $p0, 100, 300);
        }
        Srch.U.trace(null, 'ShowWaitScreen', 'Leave');
    },
    
    $15_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$15_3() {
        Srch.U.trace(null, 'CloseWaitScreen', 'Enter');
        if (this.$7_3) {
            Srch.U.trace(null, 'CloseWaitScreen', 'Before closing');
            this.$7_3.close(1);
            this.$7_3 = null;
            Srch.U.trace(null, 'CloseWaitScreen', 'After closing');
        }
        Srch.U.trace(null, 'CloseWaitScreen', 'Leave');
    },
    
    onTabLoad: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$onTabLoad() {
        Srch.U.trace(null, 'OnTabLoad', 'Enter');
        if (!this.get_treeFocusNode() || !this.get_treeFocusNode().get_data()) {
            Srch.U.trace(null, 'OnTabLoad', 'Leave, empty node');
            return;
        }
        if (this.get_treeFocusNode().get_id() === this.$l_3 && this.$9_3() === this.$m_3) {
            Srch.U.trace(null, 'OnTabLoad', 'Leave, same node as current');
            return;
        }
        if (this.$H_3) {
            Srch.U.trace(null, 'OnTabLoad', 'Leave, re-entered');
            return;
        }
        this.$l_3 = this.get_treeFocusNode().get_id();
        this.$m_3 = this.$9_3();
        this.$1V_3(Srch.U.loadResource('refconf_FNT_DCR_LoadingConfiguration'));
        this.$g_3(new Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.ConfigurationLoadContext(this.get_treeFocusNode().get_id(), true, true));
        Srch.U.trace(null, 'OnTabLoad', 'Leave');
    },
    
    onPreSubmit: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$onPreSubmit() {
        Srch.U.trace(null, 'OnPreSubmit', 'Enter');
        Srch.U.trace(null, 'OnPreSubmit', 'Saving');
        var $v_0 = Microsoft.SharePoint.Taxonomy.CustomPropertyTab.getCustomProperties(this.get_treeFocusNode());
        var $$dict_1 = $v_0;
        for (var $$key_2 in $$dict_1) {
            var $v_3 = { key: $$key_2, value: $$dict_1[$$key_2] };
            if ($v_3.key.startsWith('_Sys_Facet_RefinerConfig')) {
                Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.setStringProperty($v_0, $v_3.key, null);
            }
        }
        Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.setStringProperty($v_0, '_Sys_Facet_TermRefinementConfig', null);
        if (this.$6_3 === 1) {
            var $v_4 = new Array(this.$2_3.refinerConfigurations.length);
            var $v_5 = new Array(this.$2_3.refinerConfigurations.length);
            for (var $v_6 = 0; $v_6 < this.$2_3.refinerConfigurations.length; $v_6++) {
                var $v_7 = this.$2_3.refinerConfigurations[$v_6];
                $v_5[$v_6] = $v_7.propertyName + Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.generateRefinerSpecStringForObject($v_7);
                var $v_8 = '_Sys_Facet_RefinerConfig' + $v_6.toString();
                $v_4[$v_6] = $v_8;
                Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.setStringProperty($v_0, $v_8, Sys.Serialization.JavaScriptSerializer.serialize($v_7));
            }
            Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.setStringProperty($v_0, '_Sys_Facet_FullRefinementString', $v_5.join(','));
            Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.setStringProperty($v_0, '_Sys_Facet_RefinementConfig', Sys.Serialization.JavaScriptSerializer.serialize($v_4));
        }
        else {
            Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.setStringProperty($v_0, '_Sys_Facet_FullRefinementString', null);
            Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.setStringProperty($v_0, '_Sys_Facet_RefinementConfig', null);
        }
        var $v_1 = Microsoft.SharePoint.Taxonomy.CustomPropertyEditor.serializeProperties($v_0);
        var $v_2 = Microsoft.SharePoint.Taxonomy.TermStoreManager.get_customPropertiesData();
        if ($v_1 !== $v_2.value) {
            $v_2.value = $v_1;
        }
        Srch.U.trace(null, 'OnPreSubmit', 'Leave');
        return true;
    },
    
    onSaveCompleted: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$onSaveCompleted() {
        Srch.U.trace(null, 'OnSaveCompleted', 'Enter');
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.get_customPropertiesData();
        if ($v_0) {
            Microsoft.SharePoint.Taxonomy.TermStoreManager.focusNodeDataCopy.SCP = $v_0.value;
            $v_0.value = null;
        }
        Srch.U.trace(null, 'OnSaveCompleted', 'Leave');
    },
    
    get_domIdPrefix: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$get_domIdPrefix() {
        if (!this.aspNetPrefix) {
            this.aspNetPrefix = FacetedNavigationTab_GetAspNetPrefix();
        }
        return this.aspNetPrefix;
    },
    
    isApplicableType: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$isApplicableType(type) {
        var $v_0 = false;
        if (type === 4) {
            $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$14(this.get_treeFocusNode(), Microsoft.SharePoint.Taxonomy.TermSetRolePropertyNames.useForFacetedNavigation);
            if (Microsoft.SharePoint.Taxonomy.TermStoreManager.hideFacetedNavigationTab()) {
                $v_0 = false;
            }
        }
        return $v_0;
    },
    
    $h_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$h_3() {
        var $v_0 = this.$6_3;
        var $v_1 = this.get_treeFocusNode().get_isPinned();
        var $v_2 = $v_1 || this.get_treeFocusNode().get_isReadOnly();
        this.$R_3.style.display = ($v_1) ? '' : 'none';
        this.$S_3.style.display = (this.get_treeFocusNode().get_isReadOnly()) ? '' : 'none';
        Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0(this.$U_3, false);
        Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0(this.$n_3, $v_0 === 1);
        Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0(this.$o_3, !$v_0);
        this.$D_3.disabled = $v_2 || !$v_0 || Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$1A(this.get_treeFocusNode());
        this.$F_3.disabled = $v_2 || $v_0 === 1;
        this.$C_3.disabled = $v_2 || !$v_0;
    },
    
    $18_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$18_3($p0) {
        for (var $$arr_1 = this.$2_3.refinerConfigurations, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if ($v_0.propertyName === $p0) {
                return $v_0;
            }
        }
        return null;
    },
    
    $s_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$s_3() {
        if (this.$1_3) {
            this.$1_3.innerHTML = '';
        }
        for (var $$arr_0 = this.$2_3.refinerConfigurations, $$len_1 = $$arr_0.length, $$idx_2 = 0; $$idx_2 < $$len_1; ++$$idx_2) {
            var $v_0 = $$arr_0[$$idx_2];
            this.$13_3($v_0, false);
        }
        if (this.$1_3.options.length > 0) {
            this.$1_3.selectedIndex = 0;
            this.$1_3.focus();
            this.$r_3(0);
        }
        else {
            Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0(this.$O_3, false);
            this.$A_3(null);
        }
    },
    
    $13_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$13_3($p0, $p1) {
        var $v_0 = document.createElement('option');
        $v_0.innerHTML = $p0.propertyName + (($p1) ? '*' : '');
        $v_0.title = $p0.propertyName + (($p1) ? '*' : '');
        $v_0.value = $p0.propertyName;
        this.$1_3.appendChild($v_0);
    },
    
    $A_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$A_3($p0) {
        for (var $$arr_1 = this.$t_3, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0($v_0, $v_0 === $p0);
        }
    },
    
    $5_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$5_3($p0, $p1) {
        $p1 = SP.Utilities.HttpUtility.htmlEncode($p1);
        $p0.innerHTML = $p1;
        $p0.title = $p1;
    },
    
    $K_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$K_3($p0, $p1) {
        Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0($p0, $p1);
        $p0.title = ($p1) ? $p0.innerHTML.trim() : '';
    },
    
    $r_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$r_3($p0) {
        if ((this.$1_3.options.length - 1) < $p0) {
            return;
        }
        var $v_0 = this.$1_3.options[$p0];
        var $v_1 = $v_0.value;
        var $v_2 = this.$18_3($v_1);
        Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$0(this.$O_3, true);
        this.$5_3(this.$d_3, FacetedNavigationTab_GetFriendlyManagedTypeName($v_2.type));
        this.$5_3(this.$u_3, Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.getAliasesString($v_2.aliases));
        var $v_3;
        var $v_4;
        var $$t_8, $$t_9;
        if ((($$t_9 = Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialog.findOptionByValue(this.$N_3, $v_2.displayTemplate, ($$t_8 = {'val': $v_4}))), $v_4 = $$t_8.val, $$t_9)) {
            $v_3 = (this.$N_3.options[$v_4]).text;
        }
        else {
            $v_3 = $v_2.displayTemplate;
        }
        this.$5_3(this.$Y_3, $v_3);
        switch ($v_2.type) {
            case Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeText:
                this.$A_3(this.$T_3);
                this.$5_3(this.$b_3, Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.getSortByString($v_2.sortBy));
                this.$5_3(this.$c_3, Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.getSortOrderString($v_2.sortOrder));
                this.$5_3(this.$Z_3, $v_2.maxNumberRefinementOptions.toString());
                break;
            case Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeDateTime:
                this.$A_3(this.$P_3);
                this.$K_3(this.$v_3, $v_2.useDefaultDateIntervals);
                this.$K_3(this.$w_3, !$v_2.useDefaultDateIntervals);
                break;
            case Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeDecimal:
            case Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeInteger:
            case Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeDouble:
                this.$A_3(this.$Q_3);
                var $v_5 = Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.getNumberIntervalStringFrom($v_2);
                var $v_6 = Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.isValidNumberIntervalsString($v_5);
                this.$5_3(this.$a_3, ($v_6) ? String.format(Srch.U.loadResource('refconf_FNT_DCR_UseManualIntervals'), $v_5) : '');
                this.$K_3(this.$a_3, $v_6);
                this.$K_3(this.$x_3, !$v_6);
                break;
            default:
                this.$A_3(this.$V_3);
                break;
        }
    },
    
    $9_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$9_3() {
        var $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$11(this.get_treeFocusNode(), 3);
        if ($v_0) {
            return $v_0.get_id();
        }
        return null;
    },
    
    $q_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$q_3() {
        var $v_0 = Microsoft.SharePoint.Taxonomy.TermStoreManager.getElementByAuthoringId('sharedAppId');
        if ($v_0) {
            return $v_0.value;
        }
        return null;
    },
    
    $1T_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1T_3($p0, $p1, $p2) {
        Srch.U.trace(null, 'ShowDescendantsStoppingInheritance', 'Enter');
        var $v_0 = $get('divTermsStoppingInheritance');
        $v_0.innerHTML = '';
        for (var $$arr_4 = $p2, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
            var $v_3 = $$arr_4[$$idx_6];
            var $v_4 = document.createElement('div');
            $v_4.className = 'ms-srch-facnav-terms-stopping-item';
            var $v_5 = document.createElement('span');
            var $v_6 = document.createElement('a');
            $v_6.innerHTML = $v_3.Name;
            $v_6.href = String.format('{0}?TermStoreID={1}&TermSetID={2}&TermID={3}', SP.Utilities.Utility.getLayoutsPageUrl('termstoremanager.aspx'), $p0, $p1, $v_3.TermId);
            $v_5.appendChild($v_6);
            $v_4.appendChild($v_5);
            $v_0.appendChild($v_4);
        }
        var $v_1 = document.createElement('div');
        $v_1.innerHTML = $get('divDescendantsStoppingInheritancePopup').innerHTML;
        var $v_2 = new SP.UI.DialogOptions();
        $v_2.html = $v_1;
        $v_2.title = Srch.U.loadResource('refconf_FNT_DCR_DescendantStoppingInheritancePopupTitle');
        $v_2.allowMaximize = false;
        $v_2.autoSize = true;
        $v_2.dialogReturnValueCallback = Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.$1P;
        SP.UI.ModalDialog.showModalDialog($v_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById($v_1, 'btnCancelTermsStoppingInheritancePopup').focus();
        Srch.U.trace(null, 'ShowDescendantsStoppingInheritance', 'Leave');
        $addHandler($v_1, 'keyup', this.$$d_$1M_3);
    },
    
    $1N_3: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab$$1N_3($p0) {
        Srch.U.trace(null, 'OnPreviewRefinersClicked', 'Enter');
        Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopup.show(new Microsoft.SharePoint.Search.FacetedNavigation.RefinementPreviewPopupDialogArgs(this.$2_3, String.format('\"#{0}\"', this.get_treeFocusNode().get_id())));
        Srch.U.trace(null, 'OnPreviewRefinersClicked', 'Leave');
    }
}


Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.ShowDescendantsHandler = function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab_ShowDescendantsHandler($p0, $p1) {
    this.$$d_showDescendantsStoppingInheritance = Function.createDelegate(this, this.showDescendantsStoppingInheritance);
    this.$B_0 = $p0;
    this.$z_0 = $p1;
}
Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.ShowDescendantsHandler.prototype = {
    $B_0: null,
    $z_0: null,
    
    showDescendantsStoppingInheritance: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab_ShowDescendantsHandler$showDescendantsStoppingInheritance($p0) {
        this.$B_0.$1T_3(this.$B_0.$q_3(), this.$B_0.$9_3(), this.$z_0.DescendantsStoppingInheritance);
    }
}


Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.FocusTermHandler = function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab_FocusTermHandler($p0, $p1) {
    this.$$d_focusTerm = Function.createDelegate(this, this.focusTerm);
    this.$B_0 = $p0;
    this.$10_0 = $p1;
}
Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.FocusTermHandler.prototype = {
    $B_0: null,
    $10_0: null,
    
    focusTerm: function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab_FocusTermHandler$focusTerm($p0) {
        var $v_0 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.taxonomyTreeRootId + '|' + this.$10_0.Path;
        Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.expandAndLoadToNode($v_0);
        var $v_1 = Microsoft.SharePoint.Taxonomy.TermStoreManager.taxonomyTree.locateLoadedNodeByPath($v_0, '|');
        if ($v_1) {
            $v_1.setFocus();
        }
        else {
            Srch.U.traceFormatted(null, 'FocusTerm', 'Failed to locate term with path: {0}', $v_0);
        }
    }
}


Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.DescendantsComputeContext = function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab_DescendantsComputeContext($p0) {
    this.termId = $p0;
}
Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.DescendantsComputeContext.prototype = {
    termId: null
}


Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.ConfigurationLoadContext = function Microsoft_SharePoint_Search_FacetedNavigation_FacetedNavigationTab_ConfigurationLoadContext($p0, $p1, $p2) {
    this.termId = $p0;
    this.overrideInheritanceInfo = $p1;
    this.overrideRefinementConfiguration = $p2;
}
Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.ConfigurationLoadContext.prototype = {
    termId: null,
    overrideInheritanceInfo: false,
    overrideRefinementConfiguration: false
}


Microsoft.SharePoint.Search.FacetedNavigation.TermInfo.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.TermInfo');
Microsoft.SharePoint.Search.FacetedNavigation.TermDescendantsInfo.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.TermDescendantsInfo');
Microsoft.SharePoint.Search.FacetedNavigation.TermRefinementInfo.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.TermRefinementInfo');
Microsoft.SharePoint.Search.FacetedNavigation.TermRefinementInfoWebServiceResult.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.TermRefinementInfoWebServiceResult');
Microsoft.SharePoint.Search.FacetedNavigation.TermDescendantsInfoWebServiceResult.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.TermDescendantsInfoWebServiceResult');
Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab', Microsoft.SharePoint.Taxonomy.CustomPropertyTab);
Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.ShowDescendantsHandler.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.ShowDescendantsHandler');
Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.FocusTermHandler.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.FocusTermHandler');
Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.DescendantsComputeContext.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.DescendantsComputeContext');
Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.ConfigurationLoadContext.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.FacetedNavigationTab.ConfigurationLoadContext');

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("search.facetednavigationtab.js");
