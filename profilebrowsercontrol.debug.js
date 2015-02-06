
Type.registerNamespace('SP.UI.Portal');

SP.UI.Portal.NodeData = function SP_UI_Portal_NodeData(childIds, siblingIds, properties) {
    this.Cids = childIds;
    this.Sids = siblingIds;
    this.Pts = properties;
}
SP.UI.Portal.NodeData.prototype = {
    Cids: null,
    Sids: null,
    Pts: null
}


SP.UI.Portal.ProfileData = function SP_UI_Portal_ProfileData(data) {
    var $v_0 = data.Children;
    var $v_1 = data.Siblings;
    var $v_2 = data.Properties;
    for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
        var $v_4 = $v_2[$v_3];
        if ($v_4[0] === 'DisplayName') {
            this.Nm = $v_4[1];
            break;
        }
    }
    this.Ch = [];
    this.Dt = new SP.UI.Portal.NodeData($v_0, $v_1, $v_2);
    this.Pid = data.Parent;
    this.Id = data.ProfileId;
    this.Il = (!$v_0.length);
    this.Tp = data.Type;
}
SP.UI.Portal.ProfileData.prototype = {
    Nm: null,
    Id: null,
    Pid: null,
    Tp: 0,
    Dt: null,
    Ch: null,
    Il: false,
    Ie: false,
    Is: false
}


SP.UI.Portal.ProfileServiceGlobal = function SP_UI_Portal_ProfileServiceGlobal() {
}


SP.UI.Portal.SimpleProfileBrowser = function SP_UI_Portal_SimpleProfileBrowser(initialValue, defaultUserAccount, targetElementId, profileServiceUrl, showSlInstallMsg) {
    this.$$d_$2m_0 = Function.createDelegate(this, this.$2m_0);
    this.$$d_$2l_0 = Function.createDelegate(this, this.$2l_0);
    this.$$d_$1f_0 = Function.createDelegate(this, this.$1f_0);
    this.$$d_$2g_0 = Function.createDelegate(this, this.$2g_0);
    this.$2a_0 = defaultUserAccount;
    this.$U_0 = profileServiceUrl;
    this.$2S_0(initialValue, targetElementId, showSlInstallMsg);
}
SP.UI.Portal.SimpleProfileBrowser.$29 = function SP_UI_Portal_SimpleProfileBrowser$$29($p0, $p1) {
    var $v_0 = $p0;
    var $v_1 = $p1;
    return $v_0.Nm.localeCompare($v_1.Nm);
}
SP.UI.Portal.SimpleProfileBrowser.prototype = {
    $1c_0: null,
    $1d_0: null,
    $2a_0: null,
    $U_0: null,
    $h_0: null,
    $16_0: null,
    $1e_0: null,
    
    get_$N_0: function SP_UI_Portal_SimpleProfileBrowser$get_$N_0() {
        if (!this.$15_0) {
            this.$15_0 = this.$1M_0(this.$16_0);
        }
        return this.$15_0;
    },
    
    $15_0: null,
    
    get_$P_0: function SP_UI_Portal_SimpleProfileBrowser$get_$P_0() {
        if (!this.$17_0) {
            this.$17_0 = this.$1M_0(this.$1e_0);
        }
        return this.$17_0;
    },
    
    $17_0: null,
    
    $1M_0: function SP_UI_Portal_SimpleProfileBrowser$$1M_0($p0) {
        var $v_0 = null;
        if ($p0) {
            Sys.UI.DomElement.addCssClass($p0, 'ms-profileBrowserContent');
            $v_0 = $p0.control;
            if (!$v_0) {
                $v_0 = new SP.UI.Portal.Tree($p0);
            }
            if ($v_0) {
                $v_0.$1t_2 = true;
                $v_0.set_visible(true);
            }
        }
        return $v_0;
    },
    
    $2S_0: function SP_UI_Portal_SimpleProfileBrowser$$2S_0($p0, $p1, $p2) {
        var $v_0 = $get($p1);
        if ($v_0) {
            $v_0.innerHTML = '<DIV></DIV><DIV></DIV><DIV></DIV>';
            this.$h_0 = $v_0.firstChild;
            this.$16_0 = this.$h_0.nextSibling;
            this.$1e_0 = this.$16_0.nextSibling;
        }
        if ($p2) {
            this.$h_0.innerHTML = String.format(SpsClient.ScriptResources.silverlight_Install_Message, '<a href=\'javascript:Silverlight.getSilverlight(\"2.0\");\'>Silverlight</a>');
            Sys.UI.DomElement.addCssClass(this.$h_0, 'ms-profileBrowserHeaderText');
            Sys.UI.DomElement.addCssClass(this.$h_0.firstChild.nextSibling, 'ms-profileBrowserSilverlightLink');
        }
        this.$2V_0($p0);
    },
    
    $2V_0: function SP_UI_Portal_SimpleProfileBrowser$$2V_0($p0) {
        if ($p0 === '' || !$p0) {
            return;
        }
        var $v_0 = {};
        $v_0[SP.UI.Portal.ProfileServiceGlobal.$Z] = [ $p0 ];
        this.$u_0(SP.UI.Portal.ProfileServiceGlobal.$13, $v_0, null);
    },
    
    $u_0: function SP_UI_Portal_SimpleProfileBrowser$$u_0($p0, $p1, $p2) {
        Sys.Net.WebServiceProxy.invoke(this.$U_0 + SP.UI.Portal.ProfileServiceGlobal.$11, $p0, false, $p1, this.$$d_$2g_0, this.$$d_$1f_0, $p2, Sys.Net.WebRequestManager.get_defaultTimeout(), false, null);
    },
    
    $2g_0: function SP_UI_Portal_SimpleProfileBrowser$$2g_0($p0, $p1, $p2) {
        if (!$p0) {
            throw Error.argumentNull('result');
        }
        var $v_0 = [];
        var $v_1 = {};
        var $v_2 = $p0;
        if (!$p1) {
            var $v_3 = [];
            var $v_4 = new SP.UI.Portal.ProfileData($v_2[0]);
            $v_4.Is = true;
            Array.add($v_3, $v_4.Id);
            Array.addRange($v_0, $v_4.Dt.Cids);
            Array.addRange($v_0, $v_4.Dt.Sids);
            if ($v_4.Pid) {
                Array.add($v_0, $v_4.Pid);
                Array.add($v_3, $v_4.Pid);
            }
            $v_1[SP.UI.Portal.ProfileServiceGlobal.$Z] = $v_0;
            if ($v_0.length > 0) {
                var $v_5 = [];
                $v_5[0] = $v_4;
                $v_5[1] = $v_3;
                this.$u_0($p2, $v_1, $v_5);
            }
            else {
                this.$1Y_0($v_4);
            }
        }
        else {
            var $v_6 = $p1;
            var $v_7 = $v_6[0];
            var $v_8 = $v_6[1];
            var $v_9 = null;
            var $v_A = [];
            for (var $v_B = 0; $v_B < $v_2.length; $v_B++) {
                var $v_C = new SP.UI.Portal.ProfileData($v_2[$v_B]);
                if ($v_C.Pid === $v_7.Pid) {
                    Array.add($v_A, $v_C);
                }
                else if ($v_C.Pid === $v_7.Id && !this.$w_0($v_7.Ch, $v_C) && $v_7.Pid !== $v_C.Id) {
                    Array.add($v_7.Ch, $v_C);
                }
                else if ($v_C.Id === $v_7.Pid) {
                    $v_9 = $v_C;
                }
            }
            if ($v_9) {
                if (!this.$w_0($v_9.Ch, $v_7)) {
                    Array.add($v_9.Ch, $v_7);
                }
                for (var $v_D = 0; $v_D < $v_A.length; $v_D++) {
                    if (!this.$w_0($v_9.Ch, $v_A[$v_D])) {
                        Array.add($v_9.Ch, $v_A[$v_D]);
                    }
                }
                $v_9.Ch.sort(SP.UI.Portal.SimpleProfileBrowser.$29);
                $v_9.Ie = true;
            }
            else {
                $v_9 = $v_7;
            }
            if ($v_9.Pid && !Array.contains($v_8, $v_9.Id)) {
                Array.addRange($v_0, $v_9.Dt.Sids);
                Array.add($v_0, $v_9.Pid);
                Array.add($v_A, $v_9.Pid);
                $v_1[SP.UI.Portal.ProfileServiceGlobal.$Z] = $v_0;
                $v_6[0] = $v_9;
                $v_6[1] = $v_A;
                this.$u_0($p2, $v_1, $v_6);
            }
            else {
                this.$1Y_0($v_9);
            }
        }
    },
    
    $1Y_0: function SP_UI_Portal_SimpleProfileBrowser$$1Y_0($p0) {
        if ($p0.Tp === 2) {
            this.$1c_0 = [ $p0 ];
            this.$2T_0();
        }
        else if ($p0.Tp === 1) {
            this.$1d_0 = [ $p0 ];
            this.$2U_0();
        }
    },
    
    $2T_0: function SP_UI_Portal_SimpleProfileBrowser$$2T_0() {
        if (this.get_$N_0()) {
            var $v_0 = new SP.UI.Portal.ProfileBrowserDataSource(this.$U_0);
            if (this.get_$N_0()) {
                this.get_$N_0().$1K_2();
                this.get_$N_0().$9_2 = this.$1c_0;
                this.get_$N_0().$S_2 = $v_0;
                this.get_$N_0().add_propertyChanged(this.$$d_$2l_0);
                this.get_$N_0().initialize();
            }
        }
    },
    
    $2U_0: function SP_UI_Portal_SimpleProfileBrowser$$2U_0() {
        if (this.get_$P_0()) {
            var $v_0 = new SP.UI.Portal.ProfileBrowserDataSource(this.$U_0);
            if (this.get_$P_0()) {
                this.get_$P_0().$1K_2();
                this.get_$P_0().$9_2 = this.$1d_0;
                this.get_$P_0().$S_2 = $v_0;
                this.get_$P_0().add_propertyChanged(this.$$d_$2m_0);
                this.get_$P_0().initialize();
            }
        }
    },
    
    $2l_0: function SP_UI_Portal_SimpleProfileBrowser$$2l_0($p0, $p1) {
    },
    
    $2m_0: function SP_UI_Portal_SimpleProfileBrowser$$2m_0($p0, $p1) {
    },
    
    $1f_0: function SP_UI_Portal_SimpleProfileBrowser$$1f_0($p0, $p1, $p2) {
        if (!$p0) {
            throw Error.argumentNull('error');
        }
        alert($p0.get_message());
    },
    
    $w_0: function SP_UI_Portal_SimpleProfileBrowser$$w_0($p0, $p1) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = $p0[$v_0];
            if ($v_1.Nm === $p1.Nm) {
                return true;
            }
        }
        return false;
    }
}


SP.UI.Portal.ProfileBrowserDataSource = function SP_UI_Portal_ProfileBrowserDataSource($p0) {
    this.$$d_$1f_2 = Function.createDelegate(this, this.$1f_2);
    this.$$d_$2f_2 = Function.createDelegate(this, this.$2f_2);
    SP.UI.Portal.ProfileBrowserDataSource.initializeBase(this);
    this.$U_2 = $p0;
}
SP.UI.Portal.ProfileBrowserDataSource.prototype = {
    
    dispose: function SP_UI_Portal_ProfileBrowserDataSource$dispose() {
        Sys.Component.prototype.dispose.call(this);
    },
    
    $U_2: null,
    
    $2o_1: function SP_UI_Portal_ProfileBrowserDataSource$$2o_1($p0) {
        var $v_0 = $p0.$9_2.Cids;
        var $v_1 = {};
        var $v_2;
        var $v_3;
        if ($p0.$i_2 === 1) {
            $v_2 = SP.UI.Portal.ProfileServiceGlobal.$Z;
            $v_3 = SP.UI.Portal.ProfileServiceGlobal.$13;
        }
        else if ($p0.$i_2 === 2) {
            $v_2 = SP.UI.Portal.ProfileServiceGlobal.$1u;
            $v_3 = SP.UI.Portal.ProfileServiceGlobal.$1S;
        }
        else {
            return;
        }
        $v_1[$v_2] = $v_0;
        Sys.Net.WebServiceProxy.invoke(this.$U_2 + SP.UI.Portal.ProfileServiceGlobal.$11, $v_3, false, $v_1, this.$$d_$2f_2, this.$$d_$1f_2, $p0, Sys.Net.WebRequestManager.get_defaultTimeout(), false, null);
    },
    
    $1s_1: function SP_UI_Portal_ProfileBrowserDataSource$$1s_1($p0) {
    },
    
    $2J_1: function SP_UI_Portal_ProfileBrowserDataSource$$2J_1($p0) {
    },
    
    $2f_2: function SP_UI_Portal_ProfileBrowserDataSource$$2f_2($p0, $p1, $p2) {
        if (!$p0) {
            throw Error.argumentNull('result');
        }
        var $v_0 = $p0;
        var $v_1 = $p1;
        if ($v_0 && $v_1) {
            var $v_2 = SP.UI.Portal.TreeNodeCollection.$x();
            var $v_3 = null;
            for (var $v_4 = 0; $v_4 < $v_0.length; $v_4++) {
                var $v_5 = new SP.UI.Portal.ProfileData($v_0[$v_4]);
                if ($v_5.Pid === $v_1.get_$l_2()) {
                    $v_3 = $v_1.get_$F_2().$y_2($v_5);
                    $v_2.$a_2($v_3);
                }
            }
            $v_1.$2I_2($v_2);
            $v_1.set_$B_2(true);
        }
    },
    
    $1f_2: function SP_UI_Portal_ProfileBrowserDataSource$$1f_2($p0, $p1, $p2) {
        if (!$p0) {
            throw Error.argumentNull('error');
        }
        alert($p0.get_message());
    }
}


SP.UI.Portal.Tree = function SP_UI_Portal_Tree($p0) {
    this.$$d_$2M_2 = Function.createDelegate(this, this.$2M_2);
    this.$$d_$2N_2 = Function.createDelegate(this, this.$2N_2);
    this.$$d_$2L_2 = Function.createDelegate(this, this.$2L_2);
    this.$$d_$2K_2 = Function.createDelegate(this, this.$2K_2);
    SP.UI.Portal.Tree.initializeBase(this, [ $p0 ]);
}
SP.UI.Portal.Tree.prototype = {
    
    get_$f_2: function SP_UI_Portal_Tree$get_$f_2() {
        return this.$1Q_2;
    },
    set_$f_2: function SP_UI_Portal_Tree$set_$f_2($p0) {
        this.$1Q_2 = $p0;
        if (this.get_$M_2().$14_2) {
            this.$1w_2();
        }
        this.raisePropertyChanged('focusNode');
        return $p0;
    },
    
    $1Q_2: null,
    
    get_$2t_2: function SP_UI_Portal_Tree$get_$2t_2() {
        return this.$1E_2;
    },
    set_$2t_2: function SP_UI_Portal_Tree$set_$2t_2($p0) {
        if (this.$1E_2 !== $p0) {
            this.$1E_2 = $p0;
        }
        if (this.get_$M_2().$14_2) {
            this.$1w_2();
        }
        return $p0;
    },
    
    $1E_2: null,
    $9_2: null,
    $1t_2: true,
    $2d_2: null,
    $S_2: null,
    
    get_$Q_2: function SP_UI_Portal_Tree$get_$Q_2() {
        if (!this.$E_2) {
            this.$E_2 = SP.UI.Portal.TreeNodeCollection.$x();
            Sys.UI.DomElement.addCssClass(this.$E_2.get_$2_2(), 'ms-spbTree');
            this.$E_2.set_$l_2(this.get_id() + '_ul');
            this.$E_2.$7_2 = this;
            this.get_element().appendChild(this.$E_2.get_$2_2());
        }
        return this.$E_2;
    },
    set_$Q_2: function SP_UI_Portal_Tree$set_$Q_2($p0) {
        if ($p0 && $p0 !== this.$E_2) {
            this.get_element().appendChild($p0.get_$2_2());
            $p0.get_$2_2().className = 'ms-spbTree';
            $p0.$7_2 = this;
        }
        this.$E_2 = $p0;
        return $p0;
    },
    
    $E_2: null,
    
    $1K_2: function SP_UI_Portal_Tree$$1K_2() {
        if (this.get_$Q_2() && this.get_$Q_2().get_$2_2() && this.get_$Q_2().get_$2_2().parentNode) {
            this.get_$Q_2().get_$2_2().parentNode.removeChild(this.get_$Q_2().get_$2_2());
            this.set_$Q_2(null);
        }
        if (this.get_element()) {
            $clearHandlers(this.get_element());
        }
    },
    
    get_$M_2: function SP_UI_Portal_Tree$get_$M_2() {
        if (!this.$L_2) {
            this.$L_2 = SP.UI.Portal.TreeNode.$1L(false, false, '');
            this.$L_2.set_$l_2(this.get_id() + '_newnodetemplate');
            this.$L_2.set_$1F_2(this.$2d_2);
            this.$L_2.$1Z_2 = true;
            this.$L_2.set_$H_2(true);
        }
        return this.$L_2;
    },
    
    $L_2: null,
    $1y_2: null,
    
    $2F_2: function SP_UI_Portal_Tree$$2F_2($p0) {
        if (this.$1y_2) {
            this.$1y_2($p0);
        }
        else {
            SP.UI.Portal.TreeUtility.$2r($p0);
        }
    },
    
    initialize: function SP_UI_Portal_Tree$initialize() {
        Sys.Component.prototype.initialize.call(this);
        this.$2n_2();
        SP.UI.Portal.TreeUtility.$5(this.get_element(), 'click', this.$$d_$2K_2);
        SP.UI.Portal.TreeUtility.$5(this.get_element(), 'keypress', this.$$d_$2L_2);
        SP.UI.Portal.TreeUtility.$5(this.get_element(), 'mouseover', this.$$d_$2N_2);
        SP.UI.Portal.TreeUtility.$5(this.get_element(), 'mouseout', this.$$d_$2M_2);
    },
    
    $2K_2: function SP_UI_Portal_Tree$$2K_2($p0) {
        var $v_0 = $p0.target;
        var $v_1 = $v_0.id;
        var $v_2 = '';
        if ($v_1.startsWith('TIC_') || $v_1.startsWith('TIE_')) {
            $v_2 = $v_1.substring(4, 7);
            var $v_3 = (SP.UI.Portal.TreeNode.$D[$v_2]);
            if ($v_3) {
                $v_3.$1G_2($p0);
                $p0.rawEvent.returnValue = false;
                $p0.rawEvent.cancelBubble = true;
                $p0.preventDefault();
                return;
            }
        }
        if ($v_1.startsWith('LBL_') || $v_1.startsWith('SLB_')) {
            $v_2 = $v_1.substring(4, 7);
            var $v_4 = (SP.UI.Portal.TreeNode.$D[$v_2]);
            if ($v_4) {
                $v_4.get_$19_2()($p0);
                return;
            }
        }
    },
    
    $1T_2: function SP_UI_Portal_Tree$$1T_2($p0) {
        for (var $v_0 = 0; $v_0 < 5; $v_0++) {
            if ($p0.id.startsWith('TXN_')) {
                return $p0;
            }
            $p0 = $p0.parentNode;
        }
        return null;
    },
    
    $2N_2: function SP_UI_Portal_Tree$$2N_2($p0) {
        var $v_0 = this.$1T_2($p0.target);
        if ($v_0) {
            var $v_1 = $v_0.id;
            var $v_2 = $v_1.substring(4, 7);
            var $v_3 = (SP.UI.Portal.TreeNode.$D[$v_2]);
            if ($v_3) {
                $v_3.get_$1h_2()($p0);
                return;
            }
        }
    },
    
    $2M_2: function SP_UI_Portal_Tree$$2M_2($p0) {
        var $v_0 = this.$1T_2($p0.target);
        if ($v_0) {
            var $v_1 = $v_0.id;
            var $v_2 = $v_1.substring(4, 7);
            var $v_3 = (SP.UI.Portal.TreeNode.$D[$v_2]);
            if ($v_3) {
                $v_3.get_$1g_2()($p0);
                return;
            }
        }
    },
    
    $2L_2: function SP_UI_Portal_Tree$$2L_2($p0) {
        var $v_0 = $p0.target;
        var $v_1 = $v_0.id;
        var $v_2 = '';
        if ($v_1.startsWith('TIC_') || $v_1.startsWith('TIE_')) {
            $v_2 = $v_1.substring(4, 7);
            var $v_3 = (SP.UI.Portal.TreeNode.$D[$v_2]);
            if ($v_3) {
                $v_3.$22_2($p0);
                $p0.rawEvent.returnValue = false;
                $p0.rawEvent.cancelBubble = true;
                $p0.preventDefault();
                return;
            }
        }
        if (($v_1.startsWith('LBL_') || $v_1.startsWith('SLB_')) && $p0.charCode === 13) {
            $v_2 = $v_1.substring(4, 7);
            var $v_4 = (SP.UI.Portal.TreeNode.$D[$v_2]);
            if ($v_4) {
                $v_4.get_$19_2()($p0);
                return;
            }
        }
    },
    
    dispose: function SP_UI_Portal_Tree$dispose() {
        try {
            if (this.get_element()) {
                $clearHandlers(this.get_element());
            }
        }
        finally {
            Sys.Component.prototype.dispose.call(this);
        }
    },
    
    $1w_2: function SP_UI_Portal_Tree$$1w_2() {
        this.get_$M_2().set_$1F_2('');
        var $v_0 = this.get_$M_2().get_$O_2();
        if ($v_0) {
            this.get_$M_2().get_$2_2().parentNode.removeChild(this.get_$M_2().get_$2_2());
            if (!(--$v_0.$j_2) && !$v_0.get_$4_2().get_$J_2()) {
                $v_0.set_$H_2(true);
            }
        }
        this.get_$M_2().$14_2 = false;
    },
    
    $1P_2: function SP_UI_Portal_Tree$$1P_2($p0, $p1) {
        var $v_0 = $p0.Pts;
        var $v_1 = '';
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2];
            if ($v_3[0] === $p1) {
                $v_1 = $v_3[1];
                break;
            }
        }
        return $v_1;
    },
    
    $2n_2: function SP_UI_Portal_Tree$$2n_2() {
        if (this.$9_2) {
            this.$2Y_2();
        }
        else if (this.$S_2) {
            this.$S_2.$2J_1(this);
        }
    },
    
    $2Y_2: function SP_UI_Portal_Tree$$2Y_2() {
        if (!this.$9_2) {
            return;
        }
        var $v_0 = null;
        try {
            $v_0 = this.$9_2;
        }
        catch ($v_1) {
            this.$2F_2($v_1.message);
        }
        if ($v_0) {
            var $v_2 = null;
            for (var $v_3 = 0; $v_3 < $v_0.length; $v_3++) {
                $v_2 = this.$y_2($v_0[$v_3]);
                this.get_$Q_2().$a_2($v_2);
            }
        }
    },
    
    $y_2: function SP_UI_Portal_Tree$$y_2($p0) {
        if (!$p0) {
            return null;
        }
        var $v_0 = $p0.Id;
        var $v_1 = $p0.Nm;
        var $v_2 = $p0.Ir;
        var $v_3 = SP.UI.Portal.TreeNode.$1L(this.$1t_2, $v_2, $v_0);
        $v_3.$2A_2 = $p0.Ct;
        $v_3.set_$l_2($v_0);
        $v_3.set_$1F_2($v_1);
        $v_3.$9_2 = $p0.Dt;
        $v_3.$i_2 = $p0.Tp;
        $v_3.set_$G_2($p0.Ie);
        $v_3.$1a_2 = $v_2;
        var $v_4 = $p0.Il;
        if ($v_4) {
            $v_3.set_$H_2(true);
        }
        else {
            var $v_6 = $p0.Mu;
            var $v_7 = $p0.Ch;
            if ($v_7 && $v_7.length > 0) {
                var $v_8 = null;
                for (var $v_9 = 0; $v_9 < $v_7.length; $v_9++) {
                    $v_8 = this.$y_2($v_7[$v_9]);
                    if ($v_8) {
                        $v_3.$a_2($v_8);
                    }
                }
                $v_3.set_$T_2(true);
                $v_3.set_$B_2(true);
            }
            else if (!this.$S_2) {
                $v_3.set_$H_2(true);
                $v_3.set_$T_2(true);
                $v_3.set_$B_2(true);
            }
            else {
            }
        }
        var $v_5 = $p0.Is;
        if ($v_5) {
            $v_3.$1I_2();
            this.set_$f_2($v_3);
        }
        $v_3.set_$2w_2(this.$1P_2($v_3.$9_2, 'DisplayName_Url'));
        if ($v_3.$i_2 === 1) {
            $v_3.set_$2s_2(this.$1P_2($v_3.$9_2, 'Title'));
        }
        return $v_3;
    }
}


SP.UI.Portal.TreeNode = function SP_UI_Portal_TreeNode($p0, $p1, $p2) {
    this.$$d_$2j_2 = Function.createDelegate(this, this.$2j_2);
    this.$$d_$2i_2 = Function.createDelegate(this, this.$2i_2);
    this.$$d_$2O_2 = Function.createDelegate(this, this.$2O_2);
    this.$$d_$2P_2 = Function.createDelegate(this, this.$2P_2);
    this.$$d_$1U_2 = Function.createDelegate(this, this.$1U_2);
    this.$$d_$1V_2 = Function.createDelegate(this, this.$1V_2);
    this.$$d_$2h_2 = Function.createDelegate(this, this.$2h_2);
    this.$$d_$2e_2 = Function.createDelegate(this, this.$2e_2);
    this.$$d_$22_2 = Function.createDelegate(this, this.$22_2);
    this.$$d_$1G_2 = Function.createDelegate(this, this.$1G_2);
    this.$$d_$2D_2 = Function.createDelegate(this, this.$2D_2);
    this.$$d_$z_2 = Function.createDelegate(this, this.$z_2);
    this.$$d_$10_2 = Function.createDelegate(this, this.$10_2);
    this.$$d_$2k_2 = Function.createDelegate(this, this.$2k_2);
    this.$i_2 = SP.UI.Portal.TreeNode.$23;
    this.$K_2 = -1;
    SP.UI.Portal.TreeNode.initializeBase(this, [ $p0 ]);
    this.$2G_2 = $p2;
    this.$1a_2 = $p1;
    this.initialize();
    this.add_propertyChanged(this.$$d_$2k_2);
}
SP.UI.Portal.TreeNode.$1L = function SP_UI_Portal_TreeNode$$1L($p0, $p1, $p2) {
    var $v_0 = document.createElement('LI');
    var $v_1 = new SP.UI.Portal.TreeNode($v_0, $p1, $p2);
    if ($p0) {
        $v_1.set_$2X_2(true);
    }
    return $v_1;
}
SP.UI.Portal.TreeNode.$2H = function SP_UI_Portal_TreeNode$$2H($p0) {
    var $v_0 = new Sys.StringBuilder();
    $v_0.append('<DIV id=\"_Div');
    $v_0.append($p0);
    $v_0.append('\" class=\"treenodediv\">');
    $v_0.append('<a href=\"javascript:void(0)\"><SPAN id=_ImgContainer><IMG class=ti id=TIE_');
    $v_0.append($p0);
    $v_0.append(' title=\"');
    $v_0.append(SpsClient.ScriptResources.tooltipExpand);
    $v_0.append('\" tabIndex=0 alt=\"');
    $v_0.append(SpsClient.ScriptResources.tooltipExpand);
    $v_0.append('\" src=\"');
    $v_0.append(SP.UI.Portal.Images.get_$d());
    $v_0.append('\"></SPAN></a><SPAN class=tnn id=TXN_');
    $v_0.append($p0);
    $v_0.append('><SPAN class=ms-input id=TXC_');
    $v_0.append($p0);
    $v_0.append('><SPAN class=treenodecontainer><SPAN id=LBL_');
    $v_0.append($p0);
    $v_0.append(' tabIndex=0></SPAN><SPAN id=SLB_');
    $v_0.append($p0);
    $v_0.append('></SPAN><A class=\"display-none\" id=LNK_');
    $v_0.append($p0);
    $v_0.append(' tabIndex=0><IMG class=\"profilelink\" src=\"');
    $v_0.append(SP.UI.Portal.Images.get_$1k());
    $v_0.append('\" title=\"');
    $v_0.append(SpsClient.ScriptResources.tooltipViewProfileLink);
    $v_0.append('\" alt=\"');
    $v_0.append(SpsClient.ScriptResources.tooltipViewProfileLink);
    $v_0.append('\"/></A></SPAN></SPAN></SPAN></DIV>');
    return $v_0.toString();
}
SP.UI.Portal.TreeNode.prototype = {
    
    get_$1F_2: function SP_UI_Portal_TreeNode$get_$1F_2() {
        return this.$20_2;
    },
    set_$1F_2: function SP_UI_Portal_TreeNode$set_$1F_2($p0) {
        if (!this.$3_2) {
            throw Error.create(SpsClient.ScriptResources.errorControlNotInitialized);
        }
        if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
            this.$3_2.innerHTML = '';
        }
        else {
            if ($p0.length > SP.UI.Portal.TreeUtility.$18) {
                this.$3_2.innerHTML = SP.Utilities.HttpUtility.htmlEncode($p0.substr(0, SP.UI.Portal.TreeUtility.$18)) + '...';
            }
            else {
                this.$3_2.innerHTML = SP.Utilities.HttpUtility.htmlEncode($p0);
            }
            this.$3_2.style.width = '100%';
            this.$3_2.style.whiteSpace = 'nowrap';
        }
        this.$20_2 = $p0;
        return $p0;
    },
    
    $20_2: '',
    
    get_$2s_2: function SP_UI_Portal_TreeNode$get_$2s_2() {
        return this.$1z_2;
    },
    set_$2s_2: function SP_UI_Portal_TreeNode$set_$2s_2($p0) {
        if (!this.$X_2) {
            throw Error.create(SpsClient.ScriptResources.errorControlNotInitialized);
        }
        if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
            this.$X_2.innerHTML = '';
        }
        else {
            this.$X_2.innerHTML = SpsClient.ScriptResources.people_Label_Separater + SP.Utilities.HttpUtility.htmlEncode($p0);
            Sys.UI.DomElement.addCssClass(this.$X_2, 'ms-ProfileBrowserTreeNodeSubText');
        }
        this.$1z_2 = $p0;
        return $p0;
    },
    
    $1z_2: '',
    
    get_$l_2: function SP_UI_Portal_TreeNode$get_$l_2() {
        return this.get_element().id;
    },
    set_$l_2: function SP_UI_Portal_TreeNode$set_$l_2($p0) {
        this.get_element().id = $p0;
        return $p0;
    },
    
    $1a_2: false,
    $2G_2: null,
    $9_2: null,
    
    get_$T_2: function SP_UI_Portal_TreeNode$get_$T_2() {
        if (!this.$6_2 && !this.get_$A_2()) {
            this.$6_2 = true;
        }
        else if (!this.get_$H_2()) {
            if (this.get_$4_2().get_$J_2() && !this.$6_2) {
                this.$6_2 = true;
            }
            else if (!this.get_$4_2().get_$J_2() && this.$6_2) {
                this.$6_2 = false;
            }
        }
        else {
            if (!this.$6_2) {
                this.$6_2 = true;
            }
        }
        return this.$6_2;
    },
    set_$T_2: function SP_UI_Portal_TreeNode$set_$T_2($p0) {
        if ($p0 && !this.$6_2) {
            this.raisePropertyChanged('isChildrenLoaded');
        }
        this.$6_2 = $p0;
        return $p0;
    },
    
    $6_2: false,
    
    get_$G_2: function SP_UI_Portal_TreeNode$get_$G_2() {
        if (this.$1_2.firstChild === this.get_$e_2()) {
            return true;
        }
        else {
            return false;
        }
    },
    set_$G_2: function SP_UI_Portal_TreeNode$set_$G_2($p0) {
        if ($p0) {
            if (!this.$1_2.firstChild) {
                this.$1_2.appendChild(this.get_$e_2());
            }
            else if (this.$1_2.firstChild !== this.get_$e_2()) {
                this.$1_2.replaceChild(this.get_$e_2(), this.$1_2.firstChild);
            }
            this.get_$4_2().$1x_2();
        }
        else if (!$p0) {
            if (!this.$1_2.firstChild) {
                this.$1_2.appendChild(this.get_$d_2());
            }
            else if (this.$1_2.firstChild !== this.get_$d_2()) {
                this.$1_2.replaceChild(this.get_$d_2(), this.$1_2.firstChild);
            }
            this.get_$4_2().$1W_2();
        }
        return $p0;
    },
    
    get_$1h_2: function SP_UI_Portal_TreeNode$get_$1h_2() {
        if (!this.$r_2) {
            this.$r_2 = this.$$d_$10_2;
        }
        return this.$r_2;
    },
    set_$1h_2: function SP_UI_Portal_TreeNode$set_$1h_2($p0) {
        this.$r_2 = $p0;
        return $p0;
    },
    
    $r_2: null,
    
    get_$1g_2: function SP_UI_Portal_TreeNode$get_$1g_2() {
        if (!this.$q_2) {
            this.$q_2 = this.$$d_$z_2;
        }
        return this.$q_2;
    },
    set_$1g_2: function SP_UI_Portal_TreeNode$set_$1g_2($p0) {
        this.$q_2 = $p0;
        return $p0;
    },
    
    $q_2: null,
    
    get_$19_2: function SP_UI_Portal_TreeNode$get_$19_2() {
        if (!this.$v_2) {
            this.$v_2 = this.$$d_$2D_2;
        }
        return this.$v_2;
    },
    
    $v_2: null,
    
    get_$2w_2: function SP_UI_Portal_TreeNode$get_$2w_2() {
        return this.$24_2;
    },
    set_$2w_2: function SP_UI_Portal_TreeNode$set_$2w_2($p0) {
        if (!this.$0_2) {
            throw Error.create(SpsClient.ScriptResources.errorControlNotInitialized);
        }
        if (!SP.ScriptUtility.isNullOrEmptyString($p0)) {
            this.$0_2.href = SP.Utilities.HttpUtility.urlPathEncode($p0);
            this.$0_2.target = '_blank';
        }
        this.$24_2 = $p0;
        return $p0;
    },
    
    $24_2: '',
    
    get_$2_2: function SP_UI_Portal_TreeNode$get_$2_2() {
        return this.get_element();
    },
    
    $1Z_2: false,
    
    get_$O_2: function SP_UI_Portal_TreeNode$get_$O_2() {
        if (!this.get_element().parentNode || !this.get_element().parentNode.parentNode || this.get_element().parentNode.parentNode.tagName !== 'LI') {
            return null;
        }
        else {
            return this.get_element().parentNode.parentNode.control;
        }
    },
    
    get_$V_2: function SP_UI_Portal_TreeNode$get_$V_2() {
        if (!this.get_element().parentNode || this.get_element().parentNode.nodeType !== 1) {
            return null;
        }
        this.$s_2 = this.get_element().parentNode.control;
        if (!this.$s_2) {
            this.$s_2 = new SP.UI.Portal.TreeNodeCollection(this.get_element().parentNode);
        }
        return this.$s_2;
    },
    
    $s_2: null,
    
    get_$4_2: function SP_UI_Portal_TreeNode$get_$4_2() {
        if (!this.get_element().lastChild) {
            throw Error.create(SpsClient.ScriptResources.errorControlNotInitialized);
        }
        if (this.get_element().lastChild.tagName.toUpperCase() !== 'UL') {
            this.$c_2 = SP.UI.Portal.TreeNodeCollection.$x();
            this.$c_2.get_$2_2().id = this.get_id() + '_ul';
            this.get_element().appendChild(this.$c_2.get_$2_2());
        }
        else {
            this.$c_2 = this.get_element().lastChild.control;
        }
        return this.$c_2;
    },
    
    $c_2: null,
    $2A_2: 0,
    
    get_$A_2: function SP_UI_Portal_TreeNode$get_$A_2() {
        if (this.get_$F_2()) {
            return this.get_$F_2().$S_2;
        }
        else {
            return null;
        }
    },
    
    get_$F_2: function SP_UI_Portal_TreeNode$get_$F_2() {
        if (!this.$7_2) {
            var $v_0 = this;
            while (($v_0) && ($v_0.get_$V_2()) && (!$v_0.get_$V_2().$7_2)) {
                $v_0 = $v_0.get_$O_2();
            }
            if ((!$v_0) || (!$v_0.get_$V_2())) {
                this.$7_2 = null;
            }
            else {
                this.get_$V_2().$7_2 = $v_0.get_$V_2().$7_2;
                this.$7_2 = this.get_$V_2().$7_2;
            }
        }
        return this.$7_2;
    },
    set_$F_2: function SP_UI_Portal_TreeNode$set_$F_2($p0) {
        this.$7_2 = $p0;
        return $p0;
    },
    
    $7_2: null,
    
    get_$H_2: function SP_UI_Portal_TreeNode$get_$H_2() {
        return (this.$1_2.firstChild === this.get_$b_2());
    },
    set_$H_2: function SP_UI_Portal_TreeNode$set_$H_2($p0) {
        if ($p0 && (this.$1_2.firstChild !== this.get_$b_2())) {
            this.$1_2.replaceChild(this.get_$b_2(), this.$1_2.firstChild);
            this.get_$4_2().$1v_2();
        }
        return $p0;
    },
    
    get_$2X_2: function SP_UI_Portal_TreeNode$get_$2X_2() {
        return this.$o_2;
    },
    set_$2X_2: function SP_UI_Portal_TreeNode$set_$2X_2($p0) {
        if ($p0 && !this.$o_2) {
            this.$o_2 = true;
        }
        return $p0;
    },
    
    $o_2: false,
    
    get_$B_2: function SP_UI_Portal_TreeNode$get_$B_2() {
        if (!this.$n_2 && !this.get_$A_2()) {
            this.$n_2 = true;
        }
        else if (this.get_$A_2() && this.get_$A_2().$2E_1(this)) {
            this.set_$B_2(true);
        }
        return this.$n_2;
    },
    set_$B_2: function SP_UI_Portal_TreeNode$set_$B_2($p0) {
        this.$n_2 = $p0;
        return $p0;
    },
    
    $n_2: false,
    $m_2: false,
    $25_2: false,
    $1H_2: false,
    $1_2: null,
    $0_2: null,
    $21_2: null,
    $Y_2: null,
    $3_2: null,
    $X_2: null,
    
    get_$e_2: function SP_UI_Portal_TreeNode$get_$e_2() {
        if (!this.$C_2) {
            this.$C_2 = document.createElement('IMG');
            this.$C_2.className = 'ti';
            this.$C_2.alt = SpsClient.ScriptResources.tooltipCollpase;
            this.$C_2.title = SpsClient.ScriptResources.tooltipCollpase;
            this.$C_2.src = SP.UI.Portal.Images.get_$e();
            this.$C_2.id = 'TIC_' + this.$I_2.toString();
            this.$C_2.tabIndex = 0;
        }
        return this.$C_2;
    },
    
    $C_2: null,
    
    get_$d_2: function SP_UI_Portal_TreeNode$get_$d_2() {
        if (!this.$8_2) {
            this.$8_2 = document.createElement('IMG');
            this.$8_2.className = 'ti';
            this.$8_2.alt = SpsClient.ScriptResources.tooltipExpand;
            this.$8_2.title = SpsClient.ScriptResources.tooltipExpand;
            this.$8_2.src = SP.UI.Portal.Images.get_$d();
            this.$8_2.id = 'TIE_' + this.$I_2.toString();
            this.$8_2.tabIndex = 0;
        }
        return this.$8_2;
    },
    
    $8_2: null,
    
    get_$b_2: function SP_UI_Portal_TreeNode$get_$b_2() {
        if (!this.$R_2) {
            this.$R_2 = document.createElement('IMG');
            this.$R_2.className = 'ti';
            this.$R_2.src = SP.UI.Portal.Images.$b;
            this.$R_2.tabIndex = -1;
        }
        return this.$R_2;
    },
    
    $R_2: null,
    $2u_2: null,
    $2v_2: null,
    $2c_2: null,
    $2b_2: null,
    $28_2: null,
    $t_2: null,
    $12_2: null,
    $1p_2: null,
    $1o_2: null,
    $1q_2: null,
    $1n_2: null,
    $1j_2: null,
    $1i_2: null,
    
    get_$2Z_2: function SP_UI_Portal_TreeNode$get_$2Z_2() {
        if (!this.$p_2) {
            this.$p_2 = document.createElement('IMG');
            this.$p_2.src = SP.UI.Portal.Images.$1r;
        }
        return this.$p_2;
    },
    
    $p_2: null,
    
    $1O_2: function SP_UI_Portal_TreeNode$$1O_2($p0) {
        if (!SP.ScriptUtility.isNullOrEmptyString($p0)) {
            if (this.get_$T_2()) {
                var $v_0;
                var $v_1;
                var $v_2 = $p0.indexOf('\\');
                if ($v_2 > -1) {
                    $v_0 = $p0.substr(0, $v_2);
                    $v_1 = $p0.substr($v_2 + 1);
                }
                else {
                    $v_0 = $p0;
                    $v_1 = '';
                }
                this.$k_2(true);
                var $v_3 = this.get_$4_2().$1R_2($v_0);
                if ($v_3) {
                    $v_3.$1O_2($v_1);
                }
            }
            else {
                this.$W_2 = $p0;
                this.$K_2 = 1;
                if (this.$W_2.indexOf('\\') > -1) {
                    this.set_$B_2(true);
                }
                this.$k_2(true);
            }
        }
        else {
            this.$1C_2();
        }
    },
    
    initialize: function SP_UI_Portal_TreeNode$initialize() {
        Sys.Component.prototype.initialize.call(this);
        this.$2B_2();
        this.$2u_2 = this.$$d_$1G_2;
        this.$2v_2 = this.$$d_$22_2;
        this.$2c_2 = this.get_$1h_2();
        this.$2b_2 = this.get_$1g_2();
        this.$28_2 = this.get_$19_2();
        this.$t_2 = this.$$d_$2e_2;
        this.$12_2 = this.$$d_$2h_2;
        this.$1p_2 = this.$$d_$1V_2;
        this.$1o_2 = this.$$d_$1U_2;
        this.$1q_2 = this.$$d_$2P_2;
        this.$1n_2 = this.$$d_$2O_2;
        this.$1i_2 = this.$$d_$2i_2;
        this.$1j_2 = this.$$d_$2j_2;
        SP.UI.Portal.TreeUtility.$5(this.$3_2, 'blur', this.$t_2);
        SP.UI.Portal.TreeUtility.$5(this.$3_2, 'focus', this.$12_2);
        SP.UI.Portal.TreeUtility.$5(this.$0_2, 'blur', this.$1i_2);
        SP.UI.Portal.TreeUtility.$5(this.$0_2, 'focus', this.$1j_2);
        SP.UI.Portal.TreeUtility.$5(this.$0_2, 'mouseover', this.$1p_2);
        SP.UI.Portal.TreeUtility.$5(this.$0_2, 'mouseout', this.$1o_2);
        SP.UI.Portal.TreeUtility.$5(this.$0_2, 'mouseup', this.$1q_2);
        SP.UI.Portal.TreeUtility.$5(this.$0_2, 'mousedown', this.$1n_2);
    },
    
    $1V_2: function SP_UI_Portal_TreeNode$$1V_2($p0) {
        var $v_0 = this.$0_2.firstChild.src;
        if ($v_0.endsWith(SP.UI.Portal.Images.get_$1m())) {
            return;
        }
        this.$0_2.firstChild.src = SP.UI.Portal.Images.get_$1l();
    },
    
    $1U_2: function SP_UI_Portal_TreeNode$$1U_2($p0) {
        this.$0_2.firstChild.src = SP.UI.Portal.Images.get_$1k();
    },
    
    $2P_2: function SP_UI_Portal_TreeNode$$2P_2($p0) {
        if ($p0.button) {
            return;
        }
        this.$0_2.firstChild.src = SP.UI.Portal.Images.get_$1l();
    },
    
    $2O_2: function SP_UI_Portal_TreeNode$$2O_2($p0) {
        if ($p0.button) {
            return;
        }
        this.$0_2.firstChild.src = SP.UI.Portal.Images.get_$1m();
    },
    
    $I_2: null,
    
    dispose: function SP_UI_Portal_TreeNode$dispose() {
        try {
            delete SP.UI.Portal.TreeNode.$D[this.$I_2.toString()];
            SP.UI.Portal.TreeUtility.$1N(this.$3_2, 'blur', this.$t_2);
            SP.UI.Portal.TreeUtility.$1N(this.$3_2, 'focus', this.$12_2);
            $clearHandlers(this.$0_2);
        }
        finally {
            Sys.Component.prototype.dispose.call(this);
        }
    },
    
    $2I_2: function SP_UI_Portal_TreeNode$$2I_2($p0) {
        this.get_$4_2().$1v_2();
        if ((!$p0) || (!$p0.get_$J_2())) {
            this.set_$H_2(true);
        }
        else {
            this.get_$4_2().$2q_2($p0);
            if (this.get_$A_2() && !this.get_$B_2()) {
                this.get_$A_2().$1s_1(this);
            }
        }
        this.set_$G_2(true);
        this.set_$T_2(true);
        if (this.get_$O_2() && !this.get_$O_2().get_$B_2()) {
            this.get_$O_2().set_$B_2(true);
        }
    },
    
    $1G_2: function SP_UI_Portal_TreeNode$$1G_2($p0) {
        if (this.get_$G_2()) {
            this.$k_2(false);
        }
        else {
            this.$k_2(true);
        }
        this.$1_2.firstChild.focus();
    },
    
    $22_2: function SP_UI_Portal_TreeNode$$22_2($p0) {
        if ($p0.charCode === 13) {
            this.$1G_2($p0);
        }
    },
    
    $10_2: function SP_UI_Portal_TreeNode$$10_2($p0) {
        Sys.UI.DomElement.addCssClass(this.$3_2, 'CursorStylePointer');
        SP.UI.Portal.TreeUtility.$1x(this.$0_2);
        if (!this.$m_2) {
            this.$Y_2.className = 'treenodehover';
        }
    },
    
    $z_2: function SP_UI_Portal_TreeNode$$z_2($p0) {
        Sys.UI.DomElement.removeCssClass(this.$3_2, 'CursorStylePointer');
        SP.UI.Portal.TreeUtility.$1W(this.$0_2);
        if (!this.$m_2) {
            this.$Y_2.className = 'treenodecontainer';
        }
    },
    
    $2D_2: function SP_UI_Portal_TreeNode$$2D_2($p0) {
        this.$1C_2();
        this.get_$F_2().set_$2t_2(this);
        if (this.$1H_2 && !this.$o_2) {
            if (!this.$25_2) {
                this.$25_2 = true;
            }
        }
        else {
            this.$1H_2 = true;
        }
    },
    
    $2e_2: function SP_UI_Portal_TreeNode$$2e_2($p0) {
        this.$z_2($p0);
    },
    
    $2h_2: function SP_UI_Portal_TreeNode$$2h_2($p0) {
        this.$10_2($p0);
    },
    
    $2i_2: function SP_UI_Portal_TreeNode$$2i_2($p0) {
        this.$z_2($p0);
        this.$1U_2($p0);
    },
    
    $2j_2: function SP_UI_Portal_TreeNode$$2j_2($p0) {
        this.$10_2($p0);
        this.$1V_2($p0);
    },
    
    $2B_2: function SP_UI_Portal_TreeNode$$2B_2() {
        var $v_0 = null;
        if (!this.get_element().firstChild) {
            this.$I_2 = (++SP.UI.Portal.TreeNode.$1X).toString();
            this.get_element().innerHTML = SP.UI.Portal.TreeNode.$2H(this.$I_2);
            this.get_element().firstChild.id = '_Div' + this.$I_2;
            $v_0 = this.get_element().firstChild;
        }
        else {
            $v_0 = this.get_element().firstChild;
            this.$I_2 = $v_0.id.substring(4, 7);
        }
        SP.UI.Portal.TreeNode.$D[this.$I_2.toString()] = this;
        this.$1_2 = $v_0.childNodes[0].childNodes[0];
        this.$8_2 = (this.$1_2.childNodes[0]);
        this.$21_2 = ($v_0.childNodes[1]);
        this.$Y_2 = (this.$21_2.childNodes[0].childNodes[0]);
        this.$3_2 = this.$Y_2.firstChild;
        this.$X_2 = this.$3_2.nextSibling;
        this.$0_2 = this.$X_2.nextSibling;
    },
    
    $1b_2: function SP_UI_Portal_TreeNode$$1b_2() {
        if (!this.get_$T_2()) {
            this.get_$4_2().$27_2(this.get_$2Z_2());
            this.get_$A_2().$2o_1(this);
        }
        else if (!this.get_$B_2()) {
            this.get_$A_2().$1s_1(this);
        }
    },
    
    $a_2: function SP_UI_Portal_TreeNode$$a_2($p0) {
        if ($p0) {
            if ($p0.get_$O_2()) {
                $p0.get_$O_2().$j_2--;
            }
            this.get_$4_2().$a_2($p0);
            this.$j_2++;
        }
    },
    
    $26_2: function SP_UI_Portal_TreeNode$$26_2($p0) {
        if (!$p0) {
            return;
        }
        if (!this.get_$T_2()) {
            this.$K_2 = 0;
            this.$1D_2 = $p0;
            this.$1b_2();
        }
        else {
            this.$a_2($p0);
            this.set_$G_2(true);
            if ($p0.$1Z_2) {
                $p0.$1C_2();
                $p0.$2Q_2();
            }
        }
    },
    
    $1C_2: function SP_UI_Portal_TreeNode$$1C_2() {
        if (!this.get_$F_2()) {
            throw Error.invalidOperation(SpsClient.ScriptResources.errorControlNotTree);
        }
        if (this.get_$F_2().get_$f_2() === this) {
            return;
        }
        if (this.get_$A_2() && this.get_$A_2().$2W_1() && !(this.$9_2.It)) {
            return;
        }
        if (this.get_$F_2().get_$f_2()) {
            this.get_$F_2().get_$f_2().$2p_2();
        }
        this.$1I_2();
        this.get_$F_2().set_$f_2(this);
    },
    
    $1I_2: function SP_UI_Portal_TreeNode$$1I_2() {
        this.$Y_2.className = 'treenodeonfocus';
        this.$m_2 = true;
    },
    
    $2p_2: function SP_UI_Portal_TreeNode$$2p_2() {
        this.$Y_2.className = 'treenodecontainer';
        this.$m_2 = false;
        this.$1H_2 = false;
    },
    
    $2Q_2: function SP_UI_Portal_TreeNode$$2Q_2() {
        Sys.UI.DomElement.addCssClass(this.$3_2, 'highlight');
    },
    
    $k_2: function SP_UI_Portal_TreeNode$$k_2($p0) {
        if ($p0 && !this.get_$G_2()) {
            this.$1b_2();
            this.set_$G_2(true);
            if (!this.get_$4_2().get_$J_2()) {
                this.set_$H_2(true);
            }
        }
        else if (!$p0 && this.get_$G_2()) {
            this.set_$G_2(false);
            if (!this.get_$4_2().get_$J_2()) {
                this.set_$H_2(true);
            }
        }
    },
    
    $j_2: 0,
    $14_2: false,
    $W_2: null,
    $1D_2: null,
    
    $2k_2: function SP_UI_Portal_TreeNode$$2k_2($p0, $p1) {
        if ($p1.get_propertyName() === 'isChildrenLoaded') {
            if (!this.$K_2) {
                this.$26_2(this.$1D_2);
                this.$K_2 = -1;
                this.$1D_2 = null;
            }
            if (this.$K_2 === 1) {
                this.$K_2 = -1;
                var $v_0;
                var $v_1;
                var $v_2 = this.$W_2.indexOf('\\');
                if ($v_2 > -1) {
                    $v_0 = this.$W_2.substr(0, $v_2);
                    $v_1 = this.$W_2.substr($v_2 + 1);
                }
                else {
                    $v_0 = this.$W_2;
                    $v_1 = '';
                }
                var $v_3 = this.get_$4_2().$1R_2($v_0);
                if ($v_3) {
                    $v_3.$1O_2($v_1);
                }
            }
        }
    }
}


SP.UI.Portal.Images = function SP_UI_Portal_Images() {
}
SP.UI.Portal.Images.get_$g = function SP_UI_Portal_Images$get_$g() {
    if (!SP.UI.Portal.Images.$1B) {
        var $v_0 = document.documentElement.dir;
        SP.UI.Portal.Images.$1A = !SP.ScriptUtility.isNullOrEmptyString($v_0) && $v_0.toLowerCase() === 'rtl';
        SP.UI.Portal.Images.$1B = true;
    }
    return SP.UI.Portal.Images.$1A;
}
SP.UI.Portal.Images.get_$d = function SP_UI_Portal_Images$get_$d() {
    if (!SP.UI.Portal.Images.get_$g()) {
        return '/_layouts/Images/PBLK_RGT.png';
    }
    else {
        return '/_layouts/Images/PBLK_RGT_rtl.png';
    }
}
SP.UI.Portal.Images.get_$e = function SP_UI_Portal_Images$get_$e() {
    if (!SP.UI.Portal.Images.get_$g()) {
        return '/_layouts/Images/PBLK_DWN.png';
    }
    else {
        return '/_layouts/Images/PBLK_DWN_rtl.png';
    }
}
SP.UI.Portal.Images.get_$1k = function SP_UI_Portal_Images$get_$1k() {
    if (!SP.UI.Portal.Images.get_$g()) {
        return '/_layouts/Images/ViewProfileButtonDefault.png';
    }
    else {
        return '/_layouts/Images/ViewProfileButtonDefault_rtl.png';
    }
}
SP.UI.Portal.Images.get_$1l = function SP_UI_Portal_Images$get_$1l() {
    if (!SP.UI.Portal.Images.get_$g()) {
        return '/_layouts/Images/ViewProfileButtonHover.png';
    }
    else {
        return '/_layouts/Images/ViewProfileButtonHover_rtl.png';
    }
}
SP.UI.Portal.Images.get_$1m = function SP_UI_Portal_Images$get_$1m() {
    if (!SP.UI.Portal.Images.get_$g()) {
        return '/_layouts/Images/ViewProfileButtonSelect.png';
    }
    else {
        return '/_layouts/Images/ViewProfileButtonSelect_rtl.png';
    }
}


SP.UI.Portal.TreeNodeCollection = function SP_UI_Portal_TreeNodeCollection($p0) {
    SP.UI.Portal.TreeNodeCollection.initializeBase(this, [ $p0 ]);
}
SP.UI.Portal.TreeNodeCollection.$x = function SP_UI_Portal_TreeNodeCollection$$x() {
    var $v_0 = document.createElement('UL');
    return new SP.UI.Portal.TreeNodeCollection($v_0);
}
SP.UI.Portal.TreeNodeCollection.prototype = {
    
    get_$J_2: function SP_UI_Portal_TreeNodeCollection$get_$J_2() {
        return this.get_$1J_2().length;
    },
    
    get_$l_2: function SP_UI_Portal_TreeNodeCollection$get_$l_2() {
        return this.get_element().id;
    },
    set_$l_2: function SP_UI_Portal_TreeNodeCollection$set_$l_2($p0) {
        this.get_element().id = $p0;
        return $p0;
    },
    
    get_$1J_2: function SP_UI_Portal_TreeNodeCollection$get_$1J_2() {
        return this.get_element().childNodes;
    },
    
    $1R_2: function SP_UI_Portal_TreeNodeCollection$$1R_2($p0) {
        var $v_0 = null;
        for (var $v_1 = 0; $v_1 < this.get_$J_2(); $v_1++) {
            if ($p0 === this.get_element().childNodes[$v_1].id) {
                $v_0 = this.get_element().childNodes[$v_1].control;
                break;
            }
        }
        return $v_0;
    },
    
    $a_2: function SP_UI_Portal_TreeNodeCollection$$a_2($p0) {
        if ($p0) {
            this.get_element().appendChild($p0.get_$2_2());
        }
    },
    
    $27_2: function SP_UI_Portal_TreeNodeCollection$$27_2($p0) {
        if ($p0) {
            this.get_element().appendChild($p0);
        }
    },
    
    $1x_2: function SP_UI_Portal_TreeNodeCollection$$1x_2() {
        if (this.get_element().style.display !== '') {
            this.get_element().style.display = '';
        }
    },
    
    $1W_2: function SP_UI_Portal_TreeNodeCollection$$1W_2() {
        if (this.get_element().style.display !== 'none') {
            this.get_element().style.display = 'none';
        }
    },
    
    $1v_2: function SP_UI_Portal_TreeNodeCollection$$1v_2() {
        while (this.get_element().firstChild) {
            this.get_element().removeChild(this.get_element().firstChild);
        }
    },
    
    $2q_2: function SP_UI_Portal_TreeNodeCollection$$2q_2($p0) {
        if (!$p0 || !$p0.get_$2_2()) {
            return;
        }
        var $v_0 = this.get_element().parentNode;
        $p0.get_$2_2().id = this.get_element().id;
        $v_0.replaceChild($p0.get_$2_2(), this.get_element());
        var $v_1 = ($v_0.control);
        $v_1.$j_2 = $p0.get_$1J_2().length;
    },
    
    get_$2_2: function SP_UI_Portal_TreeNodeCollection$get_$2_2() {
        return this.get_element();
    },
    
    $7_2: null
}


SP.UI.Portal.TreeUtility = function SP_UI_Portal_TreeUtility() {
}
SP.UI.Portal.TreeUtility.$2r = function SP_UI_Portal_TreeUtility$$2r($p0) {
    alert($p0);
}
SP.UI.Portal.TreeUtility.$1W = function SP_UI_Portal_TreeUtility$$1W($p0) {
    if ($p0) {
        Sys.UI.DomElement.addCssClass($p0, 'display-none');
    }
}
SP.UI.Portal.TreeUtility.$1x = function SP_UI_Portal_TreeUtility$$1x($p0) {
    if ($p0) {
        Sys.UI.DomElement.removeCssClass($p0, 'display-none');
    }
}
SP.UI.Portal.TreeUtility.$5 = function SP_UI_Portal_TreeUtility$$5($p0, $p1, $p2) {
    if ($p0 && $p2) {
        $addHandler($p0, $p1, $p2);
    }
}
SP.UI.Portal.TreeUtility.$1N = function SP_UI_Portal_TreeUtility$$1N($p0, $p1, $p2) {
    if ($p0 && $p2) {
        $removeHandler($p0, $p1, $p2);
    }
}


SP.UI.Portal.TreeNodeDataSource = function SP_UI_Portal_TreeNodeDataSource() {
    SP.UI.Portal.TreeNodeDataSource.initializeBase(this);
}
SP.UI.Portal.TreeNodeDataSource.prototype = {
    
    $2o_1: function SP_UI_Portal_TreeNodeDataSource$$2o_1($p0) {
        throw Error.notImplemented();
    },
    
    $1s_1: function SP_UI_Portal_TreeNodeDataSource$$1s_1($p0) {
        $p0.set_$B_2(true);
    },
    
    $2J_1: function SP_UI_Portal_TreeNodeDataSource$$2J_1($p0) {
        throw Error.notImplemented();
    },
    
    $2E_1: function SP_UI_Portal_TreeNodeDataSource$$2E_1($p0) {
        return false;
    },
    
    $2W_1: function SP_UI_Portal_TreeNodeDataSource$$2W_1() {
        return false;
    }
}


SP.UI.Portal.NodeData.registerClass('SP.UI.Portal.NodeData');
SP.UI.Portal.ProfileData.registerClass('SP.UI.Portal.ProfileData');
SP.UI.Portal.ProfileServiceGlobal.registerClass('SP.UI.Portal.ProfileServiceGlobal');
SP.UI.Portal.SimpleProfileBrowser.registerClass('SP.UI.Portal.SimpleProfileBrowser');
SP.UI.Portal.TreeNodeDataSource.registerClass('SP.UI.Portal.TreeNodeDataSource', Sys.Component);
SP.UI.Portal.ProfileBrowserDataSource.registerClass('SP.UI.Portal.ProfileBrowserDataSource', SP.UI.Portal.TreeNodeDataSource);
SP.UI.Portal.Tree.registerClass('SP.UI.Portal.Tree', Sys.UI.Control);
SP.UI.Portal.TreeNode.registerClass('SP.UI.Portal.TreeNode', Sys.UI.Control);
SP.UI.Portal.Images.registerClass('SP.UI.Portal.Images');
SP.UI.Portal.TreeNodeCollection.registerClass('SP.UI.Portal.TreeNodeCollection', Sys.UI.Control);
SP.UI.Portal.TreeUtility.registerClass('SP.UI.Portal.TreeUtility');
function profilebrowsercontrol_initialize() {
SP.UI.Portal.ProfileServiceGlobal.$11 = '/_vti_bin/SilverlightProfileService.json';
SP.UI.Portal.ProfileServiceGlobal.$1S = 'GetOrganizationSLProfileData';
SP.UI.Portal.ProfileServiceGlobal.$13 = 'GetUserSLProfileData';
SP.UI.Portal.ProfileServiceGlobal.$1u = 'RecordIDs';
SP.UI.Portal.ProfileServiceGlobal.$Z = 'AccountNames';
SP.UI.Portal.TreeNode.$23 = -1;
SP.UI.Portal.TreeNode.$1X = 0;
SP.UI.Portal.TreeNode.$D = {};
SP.UI.Portal.Images.$1A = false;
SP.UI.Portal.Images.$1B = false;
SP.UI.Portal.Images.$1r = '/_layouts/Images/kpiprogressbar.gif';
SP.UI.Portal.Images.$b = '/_layouts/Images/blank.gif';
SP.UI.Portal.Images.$2C = '/_layouts/Images/defaultprovider.png';
SP.UI.Portal.TreeUtility.$18 = 50;
SP.UI.Portal.TreeUtility.$2R = 0;
};
profilebrowsercontrol_initialize();

RegisterModuleInit("profilebrowsercontrol.js", profilebrowsercontrol_initialize);


