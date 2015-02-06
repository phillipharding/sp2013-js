Type.registerNamespace('SP.UI');
SP.UI.DialogResult = function() {
};
SP.UI.DialogResult.prototype = {
    invalid: -1,
    cancel: 0,
    OK: 1
};
SP.UI.DialogResult.registerEnum('SP.UI.DialogResult', false);
SP.UI.DialogOptions = function SP_UI_DialogOptions() {
};
SP.UI.Dialog = function SP_UI_Dialog($p0) {
    this.$$d_$2P_0 = Function.createDelegate(this, this.$2P_0);
    this.$$d_$1W_0 = Function.createDelegate(this, this.$1W_0);
    this.$$d_autoSizeSuppressScrollbar = Function.createDelegate(this, this.autoSizeSuppressScrollbar);
    this.$$d_autoSize = Function.createDelegate(this, this.autoSize);
    this.$$d_$1m_0 = Function.createDelegate(this, this.$1m_0);
    this.$$d_$2F_0 = Function.createDelegate(this, this.$2F_0);
    this.$$d_$1l_0 = Function.createDelegate(this, this.$1l_0);
    this.$$d_$1K_0 = Function.createDelegate(this, this.$1K_0);
    this.$$d_$2H_0 = Function.createDelegate(this, this.$2H_0);
    this.$$d_$1L_0 = Function.createDelegate(this, this.$1L_0);
    this.$$d_$1p_0 = Function.createDelegate(this, this.$1p_0);
    this.$$d_$21_0 = Function.createDelegate(this, this.$21_0);
    this.$$d_$22_0 = Function.createDelegate(this, this.$22_0);
    this.$$d_$1j_0 = Function.createDelegate(this, this.$1j_0);
    this.$$d_$1k_0 = Function.createDelegate(this, this.$1k_0);
    this.$$d_$1Y_0 = Function.createDelegate(this, this.$1Y_0);
    this.$$d_$2Q_0 = Function.createDelegate(this, this.$2Q_0);
    this.$$d_$2I_0 = Function.createDelegate(this, this.$2I_0);
    this.$$d_$1s_0 = Function.createDelegate(this, this.$1s_0);
    this.$w_0 = -1;
    if ($p0.delayAppearance && SP.ScriptUtility.isNullOrEmptyString($p0.url)) {
        throw Error.notImplemented(SP.Res.delayedAppearanceForHTMLDialogNotImplemented);
    }
    this.$2_0 = $p0;
    this.$18_0 = $p0.args;
    this.$U_0 = $p0.width;
    if (this.$U_0 < 0) {
        this.$U_0 = null;
    }
    if (SP.ScriptUtility.isNullOrUndefined(this.$U_0)) {
        this.$U_0 = parseInt(SP.Res.defaultDialogWidth);
    }
    this.$P_0 = $p0.height;
    if (this.$P_0 < 0) {
        this.$P_0 = null;
    }
    if (SP.ScriptUtility.isNullOrUndefined(this.$P_0)) {
        this.$P_0 = parseInt(SP.Res.defaultDialogHeight);
    }
    this.$s_0 = $p0.autoSize;
    if (SP.ScriptUtility.isNullOrUndefined(this.$s_0)) {
        this.$s_0 = true;
    }
    this.$c_0 = $p0.dialogReturnValueCallback;
    this.$l_0 = $p0.url;
    this.$m_0 = $p0.x;
    if (this.$m_0 < 0) {
        this.$m_0 = null;
    }
    this.$n_0 = $p0.y;
    if (this.$n_0 < 0) {
        this.$n_0 = null;
    }
    this.$H_0 = $p0.html;
    this.$T_0 = $p0.title;
    if (SP.ScriptUtility.isNullOrUndefined($p0.allowMaximize)) {
        this.$f_0 = false;
    }
    else {
        this.$f_0 = $p0.allowMaximize;
    }
    if (SP.ScriptUtility.isNullOrUndefined($p0.showMaximized)) {
        this.$1H_0 = false;
    }
    else {
        this.$1H_0 = $p0.showMaximized;
    }
    if (SP.ScriptUtility.isNullOrUndefined($p0.showClose)) {
        this.$10_0 = true;
    }
    else {
        this.$10_0 = $p0.showClose;
    }
};
SP.UI.Dialog.get_$1 = function SP_UI_Dialog$get_$1() {
    return window.self._dlgWndTop();
};
SP.UI.Dialog.$1N = function SP_UI_Dialog$$1N() {
    if (!SP.UI.Dialog.$X) {
        var $v_0 = document.createElement('p');

        $v_0.style.width = '100%';
        $v_0.style.height = '100px';
        var $v_1 = document.createElement('div');

        $v_1.style.position = 'absolute';
        $v_1.style.visibility = 'hidden';
        $v_1.style.width = '100px';
        $v_1.style.height = '50px';
        $v_1.appendChild($v_0);
        document.body.appendChild($v_1);
        $v_1.style.overflow = 'hidden';
        var $v_2 = $v_0.offsetWidth;

        $v_1.style.overflow = 'scroll';
        var $v_3 = $v_0.offsetWidth;

        if ($v_2 === $v_3) {
            $v_3 = $v_1.clientWidth;
        }
        document.body.removeChild($v_1);
        SP.UI.Dialog.$X = $v_2 - $v_3;
        if (!SP.UI.Dialog.$X) {
            SP.UI.Dialog.$X = 17;
        }
    }
    return SP.UI.Dialog.$X;
};
SP.UI.Dialog.$1P = function SP_UI_Dialog$$1P($p0) {
    var $v_0;

    $v_0 = $p0.document.documentElement.clientWidth;
    if (SP.ScriptUtility.isNullOrUndefined($v_0) || $v_0 <= 0) {
        $v_0 = $p0.innerWidth;
    }
    if (SP.ScriptUtility.isNullOrUndefined($v_0) || $v_0 <= 0) {
        $v_0 = $p0.document.body.clientWidth;
    }
    return $v_0;
};
SP.UI.Dialog.$1O = function SP_UI_Dialog$$1O($p0) {
    var $v_0;

    $v_0 = $p0.document.documentElement.clientHeight;
    if (SP.ScriptUtility.isNullOrUndefined($v_0) || $v_0 <= 0) {
        $v_0 = $p0.innerHeight;
    }
    if (SP.ScriptUtility.isNullOrUndefined($v_0) || $v_0 <= 0) {
        $v_0 = $p0.document.body.clientHeight;
    }
    return $v_0;
};
SP.UI.Dialog.$16 = function SP_UI_Dialog$$16($p0) {
    var $v_0 = 0;

    if (!SP.ScriptUtility.isNullOrUndefined($p0.documentElement) && !SP.ScriptUtility.isNullOrUndefined($p0.documentElement.scrollWidth) && !SP.ScriptUtility.isNullOrUndefined($p0.documentElement.offsetWidth)) {
        $v_0 = Math.max($p0.documentElement.scrollWidth, $p0.documentElement.offsetWidth);
    }
    return Math.max($p0.body.scrollWidth, $p0.body.offsetWidth, $v_0);
};
SP.UI.Dialog.$15 = function SP_UI_Dialog$$15($p0) {
    var $v_0 = 0;

    if (!SP.ScriptUtility.isNullOrUndefined($p0.documentElement) && !SP.ScriptUtility.isNullOrUndefined($p0.documentElement.scrollHeight) && !SP.ScriptUtility.isNullOrUndefined($p0.documentElement.offsetHeight)) {
        $v_0 = Math.max($p0.documentElement.scrollHeight, $p0.documentElement.offsetHeight);
    }
    return Math.max($p0.body.scrollHeight, $p0.body.offsetHeight, $v_0);
};
SP.UI.Dialog.$1x = function SP_UI_Dialog$$1x($p0) {
    var $v_0 = $p0.pageXOffset;

    if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
        return $v_0;
    }
    if (!(Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version === 7) && !SP.ScriptUtility.isNullOrUndefined($p0.document.documentElement) && !SP.ScriptUtility.isNullOrUndefined($p0.document.documentElement.scrollLeft)) {
        return $p0.document.documentElement.scrollLeft;
    }
    return $p0.document.body.scrollLeft;
};
SP.UI.Dialog.$20 = function SP_UI_Dialog$$20($p0) {
    var $v_0 = $p0.pageYOffset;

    if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
        return $v_0;
    }
    if (!SP.ScriptUtility.isNullOrUndefined($p0.document.documentElement) && !SP.ScriptUtility.isNullOrUndefined($p0.document.documentElement.scrollTop)) {
        return $p0.document.documentElement.scrollTop;
    }
    return $p0.document.body.scrollTop;
};
SP.UI.Dialog.$1h = function SP_UI_Dialog$$1h($p0) {
    if ($p0.length > 2040) {
        $p0 = $p0.substr(0, 2040);
    }
    if ($p0.indexOf('?') < 0) {
        $p0 = $p0 + '?IsDlg=1';
    }
    else {
        if (!$p0.endsWith('&')) {
            $p0 = $p0 + '&';
        }
        $p0 = $p0 + 'IsDlg=1';
    }
    return $p0;
};
SP.UI.Dialog.$1e = function SP_UI_Dialog$$1e($p0) {
    if (!SP.UI.Dialog.$z) {
        SP.UI.Dialog.$z = SP.UI.Dialog.$2O;
    }
    var $v_0 = ['click', 'dblclick', 'mouseout', 'mouseover', 'mousedown', 'mouseenter', 'mouseleave'];

    for (var $$arr_2 = $v_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];

        $addHandler($p0, $v_1, SP.UI.Dialog.$z);
    }
};
SP.UI.Dialog.$1a = function SP_UI_Dialog$$1a($p0) {
    $p0.setAttribute('href', 'javascript:;');
};
SP.UI.Dialog.get_$Y = function SP_UI_Dialog$get_$Y() {
    var $v_0 = (SP.UI.Dialog.get_$1()).g_overlayPopup;

    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        return null;
    }
    return $v_0;
};
SP.UI.Dialog.set_$Y = function SP_UI_Dialog$set_$Y($p0) {
    (SP.UI.Dialog.get_$1()).g_overlayPopup = $p0;
    return $p0;
};
SP.UI.Dialog.$2O = function SP_UI_Dialog$$2O($p0) {
    $p0.stopPropagation();
};
SP.UI.Dialog.$2R = function SP_UI_Dialog$$2R($p0) {
    var $v_0 = SP.UI.Dialog.get_$Y();

    if ($v_0) {
        SP.UI.UIUtility.removeNode($v_0);
        (SP.UI.Dialog.get_$1()).setTimeout(SP.UI.Dialog.$2S, 20);
    }
    var $v_1 = SP.UI.ModalDialog.get_childDialog();

    while ($v_1) {
        $v_1.$2J_0();
        $v_1 = $v_1.$u_1;
    }
};
SP.UI.Dialog.$2S = function SP_UI_Dialog$$2S() {
    if (SP.UI.Dialog.$M) {
        $removeHandler(SP.UI.Dialog.get_$1(), 'resize', SP.UI.Dialog.$M);
    }
    var $v_0 = SP.UI.Dialog.get_$Y();

    if ($v_0) {
        var $v_1 = SP.UI.Dialog.$16((SP.UI.Dialog.get_$1()).document);

        $v_0.style.width = $v_1.toString() + 'px';
        var $v_2 = SP.UI.Dialog.$15((SP.UI.Dialog.get_$1()).document);

        $v_0.style.height = $v_2.toString() + 'px';
        (SP.UI.Dialog.get_$1()).document.body.appendChild(SP.UI.Dialog.get_$Y());
    }
    if (SP.UI.Dialog.$M) {
        $addHandler(SP.UI.Dialog.get_$1(), 'resize', SP.UI.Dialog.$M);
    }
};
SP.UI.Dialog.prototype = {
    $L_0: null,
    $F_0: null,
    $5_0: null,
    $0_0: null,
    $e_0: null,
    $3_0: null,
    $1C_0: null,
    $1U_0: null,
    $G_0: null,
    $c_0: null,
    $l_0: null,
    $m_0: 0,
    $n_0: 0,
    $U_0: 0,
    $P_0: 0,
    $1B_0: 0,
    $2_0: null,
    $V_0: false,
    $K_0: 0,
    $W_0: 0,
    $C_0: 0,
    $B_0: 0,
    $Q_0: false,
    $1H_0: false,
    $A_0: null,
    $7_0: null,
    $4_0: null,
    $v_0: false,
    $j_0: null,
    $s_0: false,
    $t_0: null,
    $1T_0: false,
    $1r_0: 88,
    $E_0: null,
    $D_0: null,
    $J_0: null,
    get_firstTabStop: function SP_UI_Dialog$get_firstTabStop() {
        return this.$J_0;
    },
    $I_0: null,
    get_lastTabStop: function SP_UI_Dialog$get_lastTabStop() {
        if (!this.$I_0) {
            this.$1y_0();
        }
        if (this.$I_0) {
            return this.$I_0;
        }
        else {
            return null;
        }
    },
    get_url: function SP_UI_Dialog$get_url() {
        return this.$l_0;
    },
    $H_0: null,
    get_html: function SP_UI_Dialog$get_html() {
        return this.$H_0;
    },
    $T_0: null,
    get_title: function SP_UI_Dialog$get_title() {
        return this.$T_0;
    },
    $18_0: null,
    get_args: function SP_UI_Dialog$get_args() {
        return this.$18_0;
    },
    $f_0: false,
    get_allowMaximize: function SP_UI_Dialog$get_allowMaximize() {
        return this.$f_0;
    },
    $10_0: false,
    get_showClose: function SP_UI_Dialog$get_showClose() {
        return this.$10_0;
    },
    $i_0: null,
    get_returnValue: function SP_UI_Dialog$get_returnValue() {
        return this.$i_0;
    },
    set_returnValue: function SP_UI_Dialog$set_returnValue(value) {
        this.$i_0 = value;
        return value;
    },
    get_$q_0: function SP_UI_Dialog$get_$q_0() {
        if (this.$s_0 && (SP.ScriptUtility.isNullOrUndefined(this.$2_0.width) || SP.ScriptUtility.isNullOrUndefined(this.$2_0.height))) {
            return true;
        }
        return false;
    },
    get_$a_0: function SP_UI_Dialog$get_$a_0() {
        return !SP.ScriptUtility.isNullOrUndefined(this.$2_0.delayAppearance) && this.$2_0.delayAppearance;
    },
    get_$24_0: function SP_UI_Dialog$get_$24_0() {
        return SP.ScriptUtility.isNullOrUndefined(this.$2_0.includeScrollBarPadding) || this.$2_0.includeScrollBarPadding;
    },
    get_$1f_0: function SP_UI_Dialog$get_$1f_0() {
        return this.$1z_0(this.$F_0, 'offsetHeight');
    },
    $1z_0: function SP_UI_Dialog$$1z_0($p0, $p1) {
        if (!SP.ScriptUtility.isNullOrUndefined($p0) && !SP.ScriptUtility.isNullOrUndefined($p0[$p1])) {
            return $p0[$p1];
        }
        return 0;
    },
    $25_0: function SP_UI_Dialog$$25_0() {
        this.$1o_0();
        if (this.$N_0 > 0) {
            this.$2L_0(this.$N_0 - 1);
        }
        if (this.get_$q_0() && this.$0_0) {
            var $$t_0 = this;

            window.setTimeout(function() {
                if (!$$t_0.$V_0 && !$$t_0.$v_0) {
                    $$t_0.$t_0 = SP.UI.ModalDialog.$2M();
                }
            }, 1000);
            window.setTimeout(this.$$d_$1s_0, 30000);
            this.$12_0(false);
        }
        else {
            this.$12_0(!this.get_$a_0());
        }
    },
    $1R_0: function SP_UI_Dialog$$1R_0() {
        if (!this.$A_0) {
            this.$A_0 = new SP.Application.UI.DragBehavior(this.$3_0, this.$F_0);
            this.$A_0.$1g_2(this.$5_0);
            this.$A_0.$1n_2(this.$0_0);
            this.$A_0.initialize();
        }
    },
    $1q_0: function SP_UI_Dialog$$1q_0() {
        if (this.$A_0) {
            this.$A_0.dispose();
            this.$A_0 = null;
        }
    },
    $1j_0: function SP_UI_Dialog$$1j_0($p0) {
        this.close(0);
        $p0.preventDefault();
    },
    $21_0: function SP_UI_Dialog$$21_0($p0) {
        if (this.$J_0) {
            try {
                this.$J_0.focus();
            }
            catch ($$e_1) { }
        }
    },
    $22_0: function SP_UI_Dialog$$22_0($p0) {
        if (this.get_lastTabStop()) {
            try {
                (this.get_lastTabStop()).focus();
            }
            catch ($$e_1) { }
        }
        else {
            if (this.$J_0) {
                try {
                    this.$J_0.focus();
                }
                catch ($$e_2) { }
            }
        }
    },
    $1k_0: function SP_UI_Dialog$$1k_0($p0) {
        $p0.stopPropagation();
    },
    $2Q_0: function SP_UI_Dialog$$2Q_0($p0) {
        this.$F_0.style.cursor = 'move';
    },
    $1Y_0: function SP_UI_Dialog$$1Y_0($p0) {
        if (this.$Q_0) {
            if (this.$4_0) {
                this.$4_0.innerHTML = '<span style=\"padding:8px;height:16px;width:16px;display:inline-block\"><span style=\"height:16px;width:16px;position:relative;display:inline-block;overflow:hidden;\" class=\"s4-clust\"><img src=\"/_layouts/15/images/fgimg.png?rev=23\" alt=\'{0}\' style=\"left:-0px !important;top:-661px !important;position:absolute;\" class=\'ms-dlgCloseBtnImg\' /></span></span>';
                this.$4_0.setAttribute('title', SP.Res.maximize);
            }
            this.$O_0(this.$C_0, this.$B_0);
            this.$p_0(this.$K_0, this.$W_0);
        }
        else {
            this.$K_0 = this.$3_0.offsetLeft;
            this.$W_0 = this.$3_0.offsetTop;
            if (this.$0_0) {
                this.$C_0 = this.$0_0.offsetWidth;
                this.$B_0 = this.$0_0.offsetHeight;
            }
            else {
                this.$C_0 = this.$G_0.offsetWidth;
                this.$B_0 = this.$G_0.offsetHeight;
            }
            if (this.$4_0) {
                this.$4_0.innerHTML = String.format('<span style=\"padding:8px;height:16px;width:16px;display:inline-block\"><span style=\"height:16px;width:16px;position:relative;display:inline-block;overflow:hidden;\" class=\"s4-clust\"><img src=\"/_layouts/15/images/fgimg.png?rev=23\" alt=\'{0}\' style=\"left:-0px !important;top:-677px !important;position:absolute;\" class=\'ms-dlgCloseBtnImg\' /></span></span>', SP.Res.restore);
                this.$4_0.setAttribute('title', SP.Res.restore);
            }
            this.$1J_0();
        }
        this.$Q_0 = !this.$Q_0;
        if (this.$Q_0) {
            this.$1q_0();
        }
        else {
            this.$1R_0();
        }
        if ($p0) {
            $p0.preventDefault();
        }
        if (this.$4_0) {
            (SP.UI.Dialog.get_$1()).setTimeout(this.$$d_$2I_0, 0);
        }
    },
    $2I_0: function SP_UI_Dialog$$2I_0() {
        this.$4_0.focus();
    },
    $1p_0: function SP_UI_Dialog$$1p_0($p0) {
        if (this.$0_0) {
            if (this.$0_0.contentWindow) {
                this.$0_0.contentWindow.focus();
            }
        }
    },
    $1J_0: function SP_UI_Dialog$$1J_0() {
        var $v_0 = this.$1M_0();

        this.$p_0(10, 10);
        this.$O_0($v_0[0], $v_0[1]);
    },
    $2J_0: function SP_UI_Dialog$$2J_0() {
        if (this.$Q_0) {
            this.$1J_0();
        }
    },
    $p_0: function SP_UI_Dialog$$p_0($p0, $p1) {
        this.$5_0.style.left = $p0 + 'px';
        this.$5_0.style.top = $p1 + 'px';
        this.$3_0.style.left = $p0 + 'px';
        this.$3_0.style.top = $p1 + 'px';
    },
    $O_0: function SP_UI_Dialog$$O_0($p0, $p1) {
        if ($p0 <= 0 || $p1 <= 0) {
            return;
        }
        var $v_0 = $p1 + this.get_$1f_0();
        var $v_1;

        if (!SP.ScriptUtility.isNullOrUndefined(this.$2_0.$6_0) && this.$2_0.$6_0) {
            $v_1 = 0;
        }
        else {
            $v_1 = 2;
        }
        var $v_2;

        if (!SP.ScriptUtility.isNullOrUndefined(this.$2_0.$6_0) && this.$2_0.$6_0) {
            $v_2 = $p0;
        }
        else {
            $v_2 = $p0 + 19 + 19;
        }
        var $v_3;

        if (!SP.ScriptUtility.isNullOrUndefined(this.$2_0.$6_0) && this.$2_0.$6_0) {
            $v_3 = $v_0;
        }
        else {
            $v_3 = $v_0 + 10;
        }
        this.$1C_0.style.width = $v_2 + 'px';
        this.$1C_0.style.height = $v_3 + 'px';
        this.$3_0.style.width = $v_2 + $v_1 + 'px';
        this.$3_0.style.height = $v_3 + $v_1 + 'px';
        if (this.$0_0) {
            this.$0_0.style.width = $p0.toString() + 'px';
            this.$0_0.style.height = $p1.toString() + 'px';
        }
        else {
            this.$G_0.style.width = $p0.toString() + 'px';
            this.$G_0.style.height = $p1.toString() + 'px';
        }
        this.$1b_0();
        var $v_4 = 2;

        this.$5_0.style.width = $v_2 + $v_1 + $v_4 + 'px';
        this.$5_0.style.height = $v_3 + $v_1 + $v_4 + 'px';
    },
    $27_0: function SP_UI_Dialog$$27_0() {
        var $v_0 = this.$1M_0();
        var $v_1 = $v_0[0];
        var $v_2 = $v_0[1];
        var $v_3 = window.browseris.ipad;
        var $v_4 = false;

        if (this.$C_0 > $v_1) {
            this.$C_0 = $v_1;
            $v_4 = true;
        }
        if (this.$B_0 > $v_2 && !$v_3) {
            this.$B_0 = $v_2;
            $v_4 = true;
        }
        if ($v_4 && !$v_3) {
            this.$O_0(this.$C_0, this.$B_0);
        }
        $v_4 = false;
        var $v_5 = this.$3_0.offsetWidth;
        var $v_6 = this.$3_0.offsetLeft;

        if ($v_3 && $v_6 < 0) {
            if ($v_5 < $v_1 + 20) {
                this.$K_0 = ($v_1 + 20 - $v_5) / 2;
            }
            else {
                this.$K_0 = 10;
            }
            $v_4 = true;
        }
        if ($v_6 + $v_5 > $v_1 + 20) {
            this.$K_0 = 10;
            $v_4 = true;
        }
        if (this.$3_0.offsetTop + this.$3_0.offsetHeight > $v_2 + 20) {
            this.$W_0 = 10;
            $v_4 = true;
        }
        if ($v_4) {
            this.$p_0(this.$K_0, this.$W_0);
        }
    },
    $1M_0: function SP_UI_Dialog$$1M_0() {
        var $v_0 = SP.UI.Dialog.get_$1();
        var $v_1 = SP.UI.Dialog.$1P($v_0) - 2;
        var $v_2 = SP.UI.Dialog.$1O($v_0) - 2;

        if ($v_1 > 20) {
            $v_1 = $v_1 - 20;
        }
        $v_2 = $v_2 - this.get_$1f_0();
        if ($v_2 > 20) {
            $v_2 = $v_2 - 20;
        }
        var $v_3 = new Array(2);

        $v_3[0] = $v_1 - 19 - 19;
        $v_3[1] = $v_2 - 13 - 10;
        return $v_3;
    },
    $1c_0: function SP_UI_Dialog$$1c_0($p0, $p1) {
        var $v_0 = this.$0_0.contentWindow.document;

        if ($p1) {
            Sys.UI.DomElement.addCssClass($p0, 'ms-hideOverflow');
        }
        else {
            Sys.UI.DomElement.removeCssClass($p0, 'ms-hideOverflow');
        }
    },
    autoSizeSuppressScrollbar: function SP_UI_Dialog$autoSizeSuppressScrollbar(ResizePageCallBack) {
        var $v_0 = this.$0_0.contentWindow.document;
        var $v_1 = $v_0.getElementById('s4-workspace');
        var $v_2 = false;

        if (!$v_1) {
            $v_1 = $v_0.getElementById('ms-error');
        }
        if ($v_1) {
            $v_2 = $v_1.clientHeight < $v_1.scrollHeight;
            if (!$v_2) {
                this.$1c_0($v_1, true);
            }
            ResizePageCallBack();
            this.autoSize();
            if (!$v_2) {
                var $$t_4 = this;

                window.setTimeout(function() {
                    $$t_4.$1c_0($v_1, false);
                }, 100);
            }
        }
    },
    autoSize: function SP_UI_Dialog$autoSize() {
        var $v_0 = 0;
        var $v_1 = 0;
        var $v_2 = SP.ScriptUtility.isNullOrUndefined(this.$2_0.autoSizeStartWidth) ? 575 : this.$2_0.autoSizeStartWidth;

        this.$O_0(SP.ScriptUtility.isNullOrUndefined(this.$2_0.width) ? $v_2 : this.$2_0.width, SP.ScriptUtility.isNullOrUndefined(this.$2_0.height) ? 20 : this.$2_0.height);
        if (this.$0_0) {
            try {
                var $v_3 = this.$0_0.contentWindow.document;
                var $v_4 = $v_3.getElementById('s4-ribbonrow');
                var $v_5 = $v_3.getElementById('s4-workspace');

                if ($v_4 && $v_5) {
                    var $v_6 = $v_5.style;
                    var $v_7 = $v_4.style;
                    var $v_8 = $v_6.width;
                    var $v_9 = $v_6.height;
                    var $v_A = $v_7.width;
                    var $v_B = $v_7.height;

                    $v_6.width = '';
                    $v_6.height = '';
                    $v_7.width = '';
                    $v_7.height = '';
                    $v_0 = Math.max($v_4.offsetWidth, $v_5.scrollWidth);
                    $v_1 = $v_4.offsetHeight + $v_5.scrollHeight;
                    $v_6.width = $v_8;
                    $v_6.height = $v_9;
                    $v_7.width = $v_A;
                    $v_7.height = $v_B;
                }
                else {
                    var $v_C = $v_3.getElementById('ms-notdlgautosize');

                    if ($v_C) {
                        $v_0 = parseInt(SP.Res.defaultDialogWidth);
                        $v_1 = parseInt(SP.Res.defaultDialogHeight);
                    }
                    else {
                        $v_0 = this.$0_0.contentWindow.document.body.scrollWidth;
                        $v_1 = this.$0_0.contentWindow.document.body.scrollHeight;
                    }
                }
            }
            catch ($$e_D) { }
        }
        else if (this.$H_0) {
            $v_0 = this.$H_0.scrollWidth;
            $v_1 = this.$H_0.scrollHeight;
        }
        if (this.get_$24_0()) {
            $v_0 += SP.UI.Dialog.$1N();
            $v_1 += SP.UI.Dialog.$1N();
        }
        if ($v_0 < 50) {
            $v_0 = SP.ScriptUtility.isNullOrUndefined(this.$2_0.autoSizeStartWidth) ? parseInt(SP.Res.defaultDialogWidth) : this.$2_0.autoSizeStartWidth;
        }
        if ($v_1 < 20) {
            $v_1 = parseInt(SP.Res.defaultDialogHeight);
        }
        if (SP.ScriptUtility.isNullOrUndefined(this.$2_0.height)) {
            this.$B_0 = $v_1;
        }
        if (SP.ScriptUtility.isNullOrUndefined(this.$2_0.width)) {
            this.$C_0 = $v_0;
        }
        this.$O_0(this.$C_0, this.$B_0);
        this.$14_0(true);
    },
    $1S_0: function SP_UI_Dialog$$1S_0($p0) {
        var $$t_5 = this;

        return function($p1_0) {
            var $v_0 = $p1_0.target;
            var $v_1 = '';

            while ($v_0 && !$v_0.getAttribute('href')) {
                $v_0 = $v_0.parentNode;
            }
            if ($v_0 && $v_0.getAttribute('href')) {
                $v_1 = ($v_0.getAttribute('href')).toString();
                $p1_0.preventDefault();
                $p1_0.stopPropagation();
                $p1_0.rawEvent.returnValue = false;
                if ($p0) {
                    SP.Utilities.HttpUtility.navigateTo($v_1);
                }
                else {
                    var $v_2 = $$t_5.$0_0.contentWindow.STSNavigate;

                    $v_2.call($$t_5.$0_0.contentWindow, $v_1);
                }
            }
        };
    },
    $1Q_0: function SP_UI_Dialog$$1Q_0($p0) {
        for (var $v_0 = 0, $v_1 = $p0.length; $v_0 < $v_1; $v_0++) {
            var $v_2 = $p0[$v_0];
            var $v_3 = $v_2.getAttribute('target');
            var $v_4 = $v_2.getAttribute('onclick');
            var $v_5 = $v_2.getAttribute('rel');
            var $v_6 = $v_2.getAttribute('href');
            var $v_7 = '';

            if ($v_6) {
                var $v_8 = $v_6.toString();
                var $v_9 = $v_8.indexOf('?');

                if ($v_9 !== -1) {
                    var $v_A = $v_8.substr($v_9 + 1);
                    var $v_B = $v_A.match(new RegExp('DialogLink=[^&]*'));

                    if ($v_B && $v_B.length > 0) {
                        var $v_C = $v_B[0];
                        var $v_D = $v_C.split('=');

                        if ($v_D.length > 1) {
                            $v_7 = $v_D[1];
                        }
                    }
                }
            }
            if ((!$v_3 || $v_3.toString() === '' || $v_3.toString() === '_self') && !$v_4) {
                if ((!$v_5 || $v_5.toString() === 'sp_DialogLinkExternal') && ($v_7 === '' || $v_7 === 'External') && (!$v_3 || $v_3.toString() === '')) {
                    if ($v_6 && ($v_6.toString()).indexOf('javascript:') === -1) {
                        $v_2.setAttribute('target', '_blank');
                    }
                }
                else if ($v_5 && $v_5.toString() === 'sp_DialogLinkInternal' || $v_7 === 'Internal') {
                    if (this.$0_0) {
                        if ($v_6 && ($v_6.toString()).indexOf('javascript:') === -1) {
                            $addHandler($v_2, 'click', this.$1S_0(false));
                        }
                    }
                }
                else if (($v_5 && $v_5.toString() === 'sp_DialogLinkNavigate' || $v_7 === 'Navigate') && (!$v_3 || $v_3.toString() === '')) {
                    if ($v_6 && ($v_6.toString()).indexOf('javascript:') === -1) {
                        $addHandler($v_2, 'click', this.$1S_0(true));
                    }
                }
            }
        }
    },
    $1L_0: function SP_UI_Dialog$$1L_0($p0) {
        if (!this.get_$a_0()) {
            this.$1X_0();
        }
    },
    $1s_0: function SP_UI_Dialog$$1s_0() {
        if (!this.$V_0) {
            this.$1L_0(null);
        }
    },
    $1X_0: function SP_UI_Dialog$$1X_0() {
        this.$V_0 = true;
        if (this.$L_0 && this.$0_0) {
            var $v_0 = null;

            try {
                if (this.$0_0.contentWindow) {
                    $v_0 = this.$0_0.contentWindow.document;
                }
                else if (this.$0_0.contentDocument) {
                    $v_0 = this.$0_0.contentDocument;
                }
            }
            catch ($$e_1) { }
            if ($v_0) {
                this.$e_0 = $v_0;
                var $v_1 = SP.Res.defaultDialogTitle;

                try {
                    $v_1 = $v_0.title;
                }
                catch ($$e_3) { }
                if (SP.ScriptUtility.isNullOrEmptyString(this.$T_0)) {
                    SP.UI.UIUtility.setInnerText(this.$L_0, $v_1);
                    this.$L_0.title = $v_1;
                }
                var $v_2 = this.$0_0.contentWindow;
                var $v_3 = new SP.UI.DialogHostedWindow(this, $v_2);

                $v_3.initialize();
                var $v_4 = this.$e_0.getElementsByTagName('a');

                this.$1Q_0($v_4);
            }
            else if (SP.ScriptUtility.isNullOrEmptyString(this.$T_0)) {
                SP.UI.UIUtility.setInnerText(this.$L_0, SP.Res.defaultDialogTitle);
                this.$L_0.title = SP.Res.defaultDialogTitle;
            }
            if (this.get_$q_0()) {
                this.$12_0(true);
                this.$13_0();
            }
            var $$t_8 = this;

            window.setTimeout(function() {
                try {
                    $$t_8.$0_0.contentWindow.NotifyBrowserOfAsyncUpdate();
                    $$t_8.$0_0.contentWindow.EnsureScriptParams('core.js', 'FixRibbonAndWorkspaceDimensions');
                    $$t_8.$0_0.contentWindow.AddEvtHandler($$t_8.$0_0.contentWindow, 'onresize', $$t_8.$0_0.contentWindow.FixRibbonAndWorkspaceDimensionsForResize);
                }
                catch ($$e_7) { }
            }, 0);
        }
    },
    $13_0: function SP_UI_Dialog$$13_0() {
        if (this.$t_0) {
            this.$t_0.close(0);
            this.$t_0 = null;
        }
    },
    $1y_0: function SP_UI_Dialog$$1y_0() {
        if (this.$e_0) {
            try {
                this.$I_0 = this.$17_0(this.$e_0.body);
            }
            catch ($$e_0) {
                this.$I_0 = null;
            }
        }
        else {
            if (this.$H_0) {
                try {
                    this.$I_0 = this.$17_0(this.$H_0);
                }
                catch ($$e_1) {
                    this.$I_0 = null;
                }
            }
            else {
                this.$I_0 = null;
            }
        }
    },
    $17_0: function SP_UI_Dialog$$17_0($p0) {
        if ($p0.nodeType === 1) {
            var $v_0 = $p0.childNodes;

            for (var $v_1 = $v_0.length - 1; $v_1 >= 0; $v_1--) {
                var $v_2 = $v_0[$v_1];

                if (SP.ScriptUtility.isNullOrUndefined($v_2.tagName) || $v_2.tagName === 'SCRIPT') {
                    continue;
                }
                var $v_3 = window.self.GetCurrentEltStyle($v_2, 'display');

                if ($v_2.nodeType === 1 && $v_3 === 'none') {
                    continue;
                }
                var $v_4 = this.$17_0($v_2);

                if ($v_4) {
                    return $v_4;
                }
            }
            if (this.$26_0($p0)) {
                return $p0;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    },
    $26_0: function SP_UI_Dialog$$26_0($p0) {
        if ($p0.tagName === 'A' || $p0.tagName === 'INPUT' || $p0.tagName === 'AREA' || $p0.tagName === 'BUTTON' || $p0.tagName === 'SELECT' || $p0.tagName === 'TEXTAREA' || $p0.tagName === 'OBJECT') {
            if ($p0.tabIndex === -1) {
                return false;
            }
            if ($p0.disabled || $p0.getAttribute('disabled') === 'true') {
                return false;
            }
            if ($p0.tagName === 'INPUT') {
                var $v_0 = $p0;

                if ($v_0.type === 'hidden' || $v_0.style.display === 'none') {
                    return false;
                }
            }
            return true;
        }
        return false;
    },
    $1o_0: function SP_UI_Dialog$$1o_0() {
        var $v_0 = this.$8_0('div');

        this.$3_0 = $v_0;
        if (!SP.ScriptUtility.isNullOrUndefined(this.$2_0.$6_0) && this.$2_0.$6_0) {
            $v_0.className = 'ms-dlgContentNoBorder';
        }
        else {
            $v_0.className = 'ms-dlgContent';
        }
        $v_0.setAttribute('role', 'dialog');
        $v_0.setAttribute('aria-labelledby', 'dialogTitleSpan');
        $v_0.setAttribute('tabindex', '-1');
        if (this.$N_0) {
            $v_0.style.zIndex = this.$N_0;
        }
        if (this.get_$b_0()) {
            (SP.UI.Dialog.get_$1()).document.body.appendChild($v_0);
            SP.UI.Dialog.$1e($v_0);
        }
        else {
            document.body.appendChild($v_0);
        }
        var $v_1 = this.$8_0('div');

        this.$1C_0 = $v_1;
        $v_1.className = 'ms-dlgBorder';
        $v_0.appendChild($v_1);
        this.$E_0 = this.$8_0('input');
        this.$E_0.type = 'button';
        this.$E_0.value = SP.Res.hiddenButtonValueBeforeDialog;
        this.$E_0.className = 'ms-accessible';
        $v_1.appendChild(this.$E_0);
        var $v_2 = this.$8_0('div');

        $v_2.className = 'ms-dlgTitle';
        if (!SP.ScriptUtility.isNullOrUndefined(this.$2_0.$6_0) && this.$2_0.$6_0) {
            $v_2.className = 'ms-dlgTitleNoPadding';
        }
        $addHandler($v_2, 'mousedown', this.$$d_$2Q_0);
        var $v_3 = this.$8_0('h1');

        if (SP.ScriptUtility.isNullOrEmptyString(this.$T_0)) {
            if (this.$l_0) {
                SP.UI.UIUtility.setInnerText($v_3, SP.Res.dialogLoading15);
                $v_3.title = SP.Res.dialogLoading15;
            }
            else {
                SP.UI.UIUtility.setInnerText($v_3, SP.Res.defaultDialogTitle);
                $v_3.title = SP.Res.defaultDialogTitle;
            }
        }
        else {
            SP.UI.UIUtility.setInnerText($v_3, this.$T_0);
            $v_3.title = this.$T_0;
        }
        if (!SP.ScriptUtility.isNullOrUndefined(this.$2_0.$r_0) && this.$2_0.$r_0) {
            $v_2.className = 'ms-hidden';
        }
        $v_3.className = 'ms-dlgTitleText ms-accentText ms-dlg-heading';
        $v_3.id = 'dialogTitleSpan';
        this.$L_0 = $v_3;
        this.$F_0 = $v_2;
        var $v_4 = this.$8_0('span');

        $v_4.id = 'dlgTitleBtns';
        $v_4.className = 'ms-dlgTitleBtns';
        if (this.$f_0) {
            this.$4_0 = this.$8_0('a');
            this.$4_0.id = 'DlgResize' + (SP.Guid.newGuid()).toString();
            this.$4_0.className = 'ms-dlgCloseBtn';
            this.$4_0.setAttribute('title', SP.Res.maximize);
            SP.UI.Dialog.$1a(this.$4_0);
            this.$4_0.innerHTML = String.format('<span style=\"padding:8px;height:16px;width:16px;display:inline-block\"><span style=\"height:16px;width:16px;position:relative;display:inline-block;overflow:hidden;\" class=\"s4-clust\"><img src=\"/_layouts/15/images/fgimg.png?rev=23\" alt=\'{0}\' style=\"left:-0px !important;top:-661px !important;position:absolute;\" class=\'ms-dlgCloseBtnImg\' /></span></span>', SP.Res.maximize);
            this.$j_0 = this.$$d_$1Y_0;
            $addHandler(this.$F_0, 'dblclick', this.$j_0);
            $addHandler(this.$4_0, 'click', this.$$d_$1Y_0);
            $addHandler(this.$4_0, 'mousedown', this.$$d_$1k_0);
            $addHandler(this.$4_0, 'mouseup', this.$$d_$1k_0);
            $v_4.appendChild(this.$4_0);
        }
        if (this.$10_0) {
            this.$7_0 = this.$8_0('a');
            this.$7_0.id = 'DlgClose' + (SP.Guid.newGuid()).toString();
            this.$7_0.className = 'ms-dlgCloseBtn';
            this.$7_0.setAttribute('title', SP.Res.close15);
            SP.UI.Dialog.$1a(this.$7_0);
            this.$7_0.setAttribute('accesskey', SP.Res.dialogCancelAK);
            this.$7_0.innerHTML = String.format('<span style=\"padding:8px;height:16px;width:16px;display:inline-block\"><span style=\"height:16px;width:16px;position:relative;display:inline-block;overflow:hidden;\" class=\"s4-clust\"><img src=\"/_layouts/15/images/fgimg.png?rev=23\" alt=\'{0}\' style=\"left:-0px !important;top:-645px !important;position:absolute;\" class=\'ms-dlgCloseBtnImg\' /></span></span>', SP.Res.close15);
            $addHandler(this.$7_0, 'click', this.$$d_$1j_0);
            $addHandler(this.$7_0, 'mousedown', this.$$d_$1k_0);
            $addHandler(this.$7_0, 'mouseup', this.$$d_$1k_0);
            $v_4.appendChild(this.$7_0);
        }
        if (this.$f_0) {
            this.$J_0 = this.$4_0;
        }
        else {
            this.$J_0 = this.$7_0;
        }
        $v_2.appendChild($v_4);
        $v_1.appendChild($v_2);
        $v_2.appendChild($v_3);
        if (this.$l_0) {
            var $v_6 = this.$l_0;

            $v_6 = SP.UI.Dialog.$1h($v_6);
            var $v_7 = this.$8_0('div');

            this.$1U_0 = $v_7;
            $v_7.className = 'ms-dlgFrameContainer';
            if (!SP.ScriptUtility.isNullOrUndefined(this.$2_0.$6_0) && this.$2_0.$6_0) {
                $v_7.className = 'ms-dlgFrameContainerNoPadding';
            }
            $v_1.appendChild($v_7);
            var $v_8 = this.$8_0('iframe');

            this.$0_0 = $v_8;
            this.$0_0.id = 'DlgFrame' + (SP.Guid.newGuid()).toString();
            $v_8.className = 'ms-dlgFrame';
            $v_8.setAttribute('src', $v_6);
            $v_8.setAttribute('frameBorder', '0');
            $v_7.appendChild($v_8);
        }
        else {
            var $v_9 = this.$8_0('div');

            this.$1U_0 = $v_9;
            $v_9.className = 'ms-dlgFrameContainer';
            if (!SP.ScriptUtility.isNullOrUndefined(this.$2_0.$6_0) && this.$2_0.$6_0) {
                $v_9.className = 'ms-dlgFrameContainerNoPadding';
            }
            $v_1.appendChild($v_9);
            var $v_A = this.$H_0.getElementsByTagName('a');

            this.$1Q_0($v_A);
            this.$G_0 = this.$8_0('div');
            this.$G_0.appendChild(this.$H_0);
            $v_9.appendChild(this.$G_0);
        }
        this.$D_0 = this.$8_0('input');
        this.$D_0.type = 'button';
        this.$D_0.value = SP.Res.hiddenButtonValueAfterDialog;
        this.$D_0.className = 'ms-accessible';
        $v_1.appendChild(this.$D_0);
        $addHandler(this.$E_0, 'focus', this.$$d_$22_0);
        $addHandler(this.$E_0, 'click', this.$$d_$22_0);
        $addHandler(this.$D_0, 'focus', this.$$d_$21_0);
        $addHandler(this.$D_0, 'click', this.$$d_$21_0);
        this.$5_0 = this.$8_0('iframe');
        this.$5_0.style.border = 'none';
        this.$5_0.style.position = 'absolute';
        this.$5_0.setAttribute('frameBorder', '0');
        this.$5_0.style.zIndex = this.$3_0.style.zIndex - 1;
        var $v_5 = window.browseris.ipad;

        if ($v_5 && document.documentElement.dir === 'rtl') {
            this.$5_0.style.height = (this.$5_0.style.width = '0px');
        }
        if (this.get_$b_0()) {
            (SP.UI.Dialog.get_$1()).document.body.insertBefore(this.$5_0, this.$3_0);
        }
        else {
            document.body.insertBefore(this.$5_0, this.$3_0);
        }
        $addHandler(this.$3_0, 'click', this.$$d_$1p_0);
        if (this.$0_0) {
            $addHandler(this.$0_0, 'load', this.$$d_$1L_0);
        }
        this.$2K_0();
        $addHandler(window, 'message', this.$$d_$2H_0);
    },
    $1W_0: function SP_UI_Dialog$$1W_0() {
        if (!this.get_$a_0()) {
            throw Error.invalidOperation();
        }
        if (this.$V_0) {
            throw Error.invalidOperation();
        }
        this.$1X_0();
        this.$13_0();
        if (!this.get_$q_0()) {
            this.$12_0(true);
        }
    },
    $2K_0: function SP_UI_Dialog$$2K_0() {
        if (this.$0_0) {
            this.$0_0.cancelPopUp = this.$$d_$1K_0;
            this.$0_0.commitPopup = this.$$d_$1l_0;
            this.$0_0.overrideDialogResult = this.$$d_$2F_0;
            this.$0_0.navigateParent = SP.Utilities.HttpUtility.navigateTo;
            this.$0_0.commonModalDialogClose = this.$$d_$1m_0;
            this.$0_0.dialogArgs = this.$18_0;
            this.$0_0.autoSize = this.$$d_autoSize;
            this.$0_0.autoSizeSuppressScrollbar = this.$$d_autoSizeSuppressScrollbar;
            if (this.get_$a_0()) {
                this.$0_0.makeVisible = this.$$d_$1W_0;
            }
        }
    },
    $1K_0: function SP_UI_Dialog$$1K_0() {
        this.close(0);
    },
    $1l_0: function SP_UI_Dialog$$1l_0($p0) {
        this.$i_0 = $p0;
        this.close(1);
    },
    $1m_0: function SP_UI_Dialog$$1m_0($p0, $p1) {
        this.$i_0 = $p1;
        this.close($p0);
    },
    $2F_0: function SP_UI_Dialog$$2F_0($p0) {
        this.$w_0 = $p0;
    },
    $2H_0: function SP_UI_Dialog$$2H_0($p0) {
        var $v_0 = $p0.rawEvent.data;

        if ($v_0) {
            if ($v_0 === 'CloseDialog') {
                this.$1K_0();
            }
            else if ($v_0 === 'MakePageVisible' && this.get_$a_0() && !this.$V_0) {
                this.$1W_0();
            }
            else if ($v_0.indexOf('NavigateParent') !== -1) {
                var $v_1 = $v_0.split('=');

                if ($v_1.length === 2) {
                    var $$t_D = this;

                    EnsureScriptFunc('core.js', 'IsSafeHref', function() {
                        var $v_2 = $v_1[1];
                        var $v_3 = window.self.IsSafeHref($v_2);

                        if ($v_3) {
                            (SP.UI.Dialog.get_$1()).location.href = $v_2;
                        }
                        else {
                            throw Error.create(String.format('Invalid web URL: {0}', $v_2));
                        }
                    });
                }
            }
            else {
                var $v_4 = $v_0.split(';');

                if ($v_4.length === 2) {
                    var $v_5 = -1;
                    var $v_6 = -1;

                    for (var $$arr_6 = $v_4, $$len_7 = $$arr_6.length, $$idx_8 = 0; $$idx_8 < $$len_7; ++$$idx_8) {
                        var $v_7 = $$arr_6[$$idx_8];
                        var $v_8 = $v_7.split('=');

                        if ($v_8.length === 2) {
                            if ($v_8[0] === 'PageWidth') {
                                $v_5 = parseInt($v_8[1]);
                            }
                            else if ($v_8[0] === 'PageHeight') {
                                $v_6 = parseInt($v_8[1]);
                            }
                        }
                    }
                    if ($v_5 !== -1 && $v_6 !== -1) {
                        this.$1T_0 = true;
                        this.$U_0 = $v_5;
                        this.$P_0 = $v_6;
                        if (this.$V_0) {
                            this.$O_0($v_5, $v_6);
                            this.$14_0(true);
                        }
                    }
                }
            }
        }
    },
    $12_0: function SP_UI_Dialog$$12_0($p0) {
        if (window.IsFullNameDefined('CUI.PMetrics.perfMark')) {
            CUI.PMetrics.perfMark(7706);
        }
        this.$3_0.style.display = 'block';
        this.$O_0(this.$U_0, this.$P_0);
        if (this.$0_0) {
            this.$B_0 = this.$0_0.offsetHeight;
            this.$C_0 = this.$0_0.offsetWidth;
        }
        else {
            this.$B_0 = this.$G_0.offsetHeight;
            this.$C_0 = this.$G_0.offsetWidth;
        }
        if (this.get_$q_0() && $p0 && !this.$1T_0) {
            this.autoSize();
        }
        else {
            this.$O_0(this.$C_0, this.$B_0);
            this.$14_0($p0);
        }
    },
    $14_0: function SP_UI_Dialog$$14_0($p0) {
        var $v_0, $v_1;
        var $v_2 = SP.UI.Dialog.$1x(SP.UI.Dialog.get_$1());
        var $v_3 = SP.UI.Dialog.$20(SP.UI.Dialog.get_$1());

        if (!SP.ScriptUtility.isNullOrUndefined(this.$m_0)) {
            $v_0 = this.$m_0;
        }
        else if (this.get_$b_0()) {
            $v_0 = (SP.UI.Dialog.$1P(SP.UI.Dialog.get_$1()) - this.$3_0.offsetWidth) / 2 + $v_2;
            if ($v_0 < $v_2 + 10) {
                $v_0 = $v_2 + 10;
            }
        }
        else {
            $v_0 = (SP.UI.Dialog.$16(this.$3_0.ownerDocument) - this.$3_0.offsetWidth) / 2;
            if ($v_0 < 10) {
                $v_0 = 10;
            }
        }
        if (!SP.ScriptUtility.isNullOrUndefined(this.$n_0)) {
            $v_1 = this.$n_0;
        }
        else if (this.get_$b_0()) {
            $v_1 = (SP.UI.Dialog.$1O(SP.UI.Dialog.get_$1()) - this.$3_0.offsetHeight) / 2 + $v_3;
            if ($v_1 < $v_3 + 10) {
                $v_1 = $v_3 + 10;
            }
        }
        else {
            $v_1 = (SP.UI.Dialog.$15(this.$3_0.ownerDocument) - this.$3_0.offsetHeight) / 2;
            if ($v_1 < 10) {
                $v_1 = 10;
            }
        }
        this.$K_0 = $v_0;
        this.$W_0 = $v_1;
        if ($p0) {
            this.$p_0(this.$K_0, this.$W_0);
            this.$1b_0();
            this.$27_0();
            this.$1R_0();
            if (this.$Q_0) {
                this.$1J_0();
            }
            else if (this.$1H_0) {
                this.$1Y_0(null);
            }
        }
        else {
            var $v_4 = document.documentElement.dir === 'rtl' ? 10000 : -10000;
            var $v_5 = -10000;

            this.$p_0($v_4, $v_5);
        }
    },
    $1b_0: function SP_UI_Dialog$$1b_0() {
        this.$L_0.style.width = Math.max(this.$F_0.offsetWidth - this.$1r_0, 0) + 'px';
    },
    close: function SP_UI_Dialog$close(dialogResult) {
        this.$13_0();
        if (this.$v_0) {
            return;
        }
        if (this.$A_0) {
            this.$A_0.dispose();
            this.$A_0 = null;
        }
        if (this.$3_0) {
            this.$3_0.style.display = 'none';
            $clearHandlers(this.$3_0);
        }
        if (this.$j_0) {
            $removeHandler(this.$F_0, 'dblclick', this.$j_0);
            this.$j_0 = null;
        }
        this.$L_0 = null;
        if (this.$F_0) {
            $clearHandlers(this.$F_0);
            this.$F_0 = null;
        }
        if (this.$0_0) {
            $clearHandlers(this.$0_0);
            this.$0_0.setAttribute('src', '/_layouts/15/blank.htm');
            this.$0_0 = null;
        }
        this.$e_0 = null;
        if (this.$7_0) {
            $clearHandlers(this.$7_0);
            this.$7_0 = null;
        }
        if (this.$E_0) {
            $clearHandlers(this.$E_0);
            this.$E_0 = null;
        }
        if (this.$D_0) {
            $clearHandlers(this.$D_0);
            this.$D_0 = null;
        }
        this.$I_0 = null;
        this.$J_0 = null;
        if (this.$4_0) {
            $clearHandlers(this.$4_0);
            this.$4_0 = null;
        }
        if (this.$N_0 > 0) {
            this.$23_0();
        }
        if (this.$w_0 === -1) {
            this.$1B_0 = dialogResult;
        }
        else {
            this.$1B_0 = this.$w_0;
        }
        $removeHandler(window, 'message', this.$$d_$2H_0);
        if (this.$c_0) {
            (SP.UI.Dialog.get_$1()).setTimeout(this.$$d_$2P_0, 0);
        }
        if (this.$3_0) {
            SP.UI.UIUtility.removeNode(this.$3_0);
            this.$3_0 = null;
        }
        if (this.$5_0) {
            SP.UI.UIUtility.removeNode(this.$5_0);
            this.$5_0 = null;
        }
        this.$v_0 = true;
        if (window.IsFullNameDefined('CUI.PMetrics.perfMark')) {
            CUI.PMetrics.perfMark(7707);
        }
    },
    get_closed: function SP_UI_Dialog$get_closed() {
        return this.$v_0;
    },
    get_frameElement: function SP_UI_Dialog$get_frameElement() {
        return this.$0_0;
    },
    get_dialogElement: function SP_UI_Dialog$get_dialogElement() {
        return this.$3_0;
    },
    get_isMaximized: function SP_UI_Dialog$get_isMaximized() {
        return this.$Q_0;
    },
    $N_0: 0,
    $2P_0: function SP_UI_Dialog$$2P_0() {
        if (this.$c_0) {
            this.$c_0(this.$1B_0, this.$i_0);
            this.$c_0 = null;
        }
    },
    $x_0: 0,
    $2L_0: function SP_UI_Dialog$$2L_0($p0) {
        var $v_0 = SP.UI.Dialog.get_$Y();

        if (!$v_0) {
            $v_0 = (SP.UI.Dialog.get_$1()).document.createElement('div');
            $v_0.className = 'ms-dlgOverlay';
            (SP.UI.Dialog.get_$1()).document.body.appendChild($v_0);
            SP.UI.Dialog.set_$Y($v_0);
            SP.UI.Dialog.$1e($v_0);
            if (!SP.UI.Dialog.$M) {
                SP.UI.Dialog.$M = SP.UI.Dialog.$2R;
            }
            $addHandler(SP.UI.Dialog.get_$1(), 'resize', SP.UI.Dialog.$M);
        }
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            var $v_1 = document.getElementsByTagName('object');

            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];

                if ($v_3.className.indexOf('ms-dlgDisable') !== -1 && $v_3.style.visibility !== 'hidden') {
                    $v_3.dialogDisabled = true;
                    $v_3.style.visibility = 'hidden';
                }
            }
        }
        this.$x_0 = $v_0.style.zIndex;
        $v_0.style.display = 'block';
        $v_0.style.zIndex = $p0;
        $v_0.style.width = SP.UI.Dialog.$16((SP.UI.Dialog.get_$1()).document) + 'px';
        $v_0.style.height = SP.UI.Dialog.$15((SP.UI.Dialog.get_$1()).document) + 'px';
    },
    $23_0: function SP_UI_Dialog$$23_0() {
        var $v_0 = SP.UI.Dialog.get_$Y();

        if ($v_0) {
            if (SP.ScriptUtility.isNullOrUndefined(this.$x_0) || this.$x_0 <= 0) {
                $v_0.style.display = 'none';
                if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
                    var $v_1 = document.getElementsByTagName('object');

                    for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                        var $v_3 = $v_1[$v_2];

                        if ($v_3.className.indexOf('ms-dlgDisable') !== -1 && $v_3.style.visibility === 'hidden' && $v_3.dialogDisabled) {
                            $v_3.dialogDisabled = false;
                            $v_3.style.visibility = 'visible';
                        }
                    }
                }
            }
            $v_0.style.zIndex = this.$x_0;
        }
    },
    $8_0: function SP_UI_Dialog$$8_0($p0) {
        if (this.get_$b_0()) {
            return (SP.UI.Dialog.get_$1()).document.createElement($p0);
        }
        else {
            return document.createElement($p0);
        }
    },
    get_$b_0: function SP_UI_Dialog$get_$b_0() {
        if (!(this.$N_0 > 0)) {
            throw Error.notImplemented(SP.Res.modelessDialogsNotImplemented);
        }
        return this.$N_0 > 0;
    }
};
SP.UI.DialogHostedWindow = function SP_UI_DialogHostedWindow($p0, $p1) {
    this.$28_0 = $p0;
    this.$11_0 = $p1;
};
SP.UI.DialogHostedWindow.prototype = {
    $28_0: null,
    $11_0: null,
    initialize: function SP_UI_DialogHostedWindow$initialize() {
        try {
            if (this.$11_0.document && this.$11_0.document.body) {
                this.$11_0.document.body.tabIndex = -1;
            }
        }
        catch ($$e_0) { }
    },
    dispose: function SP_UI_DialogHostedWindow$dispose() {
    }
};
SP.UI.ModalDialog = function SP_UI_ModalDialog($p0) {
    SP.UI.ModalDialog.initializeBase(this, [$p0]);
};
SP.UI.ModalDialog.get_$o = function SP_UI_ModalDialog$get_$o() {
    var $v_0 = 0;
    var $v_1 = (SP.UI.Dialog.get_$1()).g_ModalDialogCount;

    if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
        $v_0 = $v_1;
    }
    return $v_0;
};
SP.UI.ModalDialog.set_$o = function SP_UI_ModalDialog$set_$o($p0) {
    (SP.UI.Dialog.get_$1()).g_ModalDialogCount = $p0;
    return $p0;
};
SP.UI.ModalDialog.get_childDialog = function SP_UI_ModalDialog$get_childDialog() {
    var $v_0 = (SP.UI.Dialog.get_$1()).g_childDialog;

    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        return null;
    }
    return $v_0;
};
SP.UI.ModalDialog.$1Z = function SP_UI_ModalDialog$$1Z($p0) {
    (SP.UI.Dialog.get_$1()).g_childDialog = $p0;
};
SP.UI.ModalDialog.showModalDialog = function SP_UI_ModalDialog$showModalDialog(options) {
    var $v_0 = new SP.UI.ModalDialog(options);

    $v_0.$25_0();
    return $v_0;
};
SP.UI.ModalDialog.showPlatformFirstRunDialog = function SP_UI_ModalDialog$showPlatformFirstRunDialog(url, callbackFunc) {
    var $v_0 = new SP.UI.DialogOptions();

    $v_0.includeScrollBarPadding = false;
    $v_0.url = url;
    $v_0.showClose = false;
    $v_0.allowMaximize = false;
    $v_0.$r_0 = true;
    $v_0.$6_0 = true;
    $v_0.dialogReturnValueCallback = callbackFunc;
    return SP.UI.ModalDialog.showModalDialog($v_0);
};
SP.UI.ModalDialog.$2M = function SP_UI_ModalDialog$$2M() {
    return SP.UI.ModalDialog.showWaitScreenWithNoClose(SP.Res.dialogLoading15);
};
SP.UI.ModalDialog.showWaitScreenWithNoClose = function SP_UI_ModalDialog$showWaitScreenWithNoClose(title, message, height, width) {
    return SP.UI.ModalDialog.$1d(title, message, false, true, null, height, width, null, 1);
};
SP.UI.ModalDialog.showWaitScreenSize = function SP_UI_ModalDialog$showWaitScreenSize(title, message, callbackFunc, height, width) {
    return SP.UI.ModalDialog.$1d(title, message, true, true, callbackFunc, height, width, null, 1);
};
SP.UI.ModalDialog.$2G = function SP_UI_ModalDialog$$2G($p0) {
    var $v_0 = $p0.target;

    Sys.UI.DomElement.addCssClass($v_0.parentNode, 'ms-hide');
};
SP.UI.ModalDialog.$1d = function SP_UI_ModalDialog$$1d($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    if (SP.ScriptUtility.isNullOrUndefined($p5) && SP.ScriptUtility.isNullOrUndefined($p6) && SP.ScriptUtility.isNullOrUndefined($p7)) {
        $p7 = '39px 0px 30px';
    }
    $p1 = $p1 || '';
    var $v_0 = (SP.UI.Dialog.get_$1()).document.createElement('INPUT');
    var $v_1 = (SP.UI.Dialog.get_$1()).document.createElement('DIV');

    $v_1.style.padding = SP.ScriptUtility.isNullOrUndefined($p7) ? '10px' : $p7;
    var $v_2 = (SP.UI.Dialog.get_$1()).document.createElement('DIV');
    var $v_3 = (SP.UI.Dialog.get_$1()).document.createElement('SPAN');

    if ($p8 === 1) {
        $v_3.style.paddingTop = '6px';
    }
    $v_3.style.paddingRight = '10px';
    var $v_4 = (SP.UI.Dialog.get_$1()).document.createElement('IMG');

    if ($p8 === 1) {
        $v_4.src = GetImageUrlWithRevision('/_layouts/15/images/gears_anv4.gif');
    }
    else if (!$p8) {
        $v_4.src = GetImageUrlWithRevision('/_layouts/15/images/loadingcirclests16.gif');
    }
    $v_4.title = window.self.Strings.STS.L_SPClientPeoplePickerWaitImgAlt;
    $addHandler($v_4, 'click', SP.UI.ModalDialog.$2G);
    $v_3.appendChild($v_4);
    var $v_5 = (SP.UI.Dialog.get_$1()).document.createElement('SPAN');

    $v_5.className = 'ms-core-pageTitle ms-accentText';
    $v_5.innerHTML = $p0;
    $v_2.className = 'ms-dlgLoadingTextDiv ms-alignCenter';
    $v_2.appendChild($v_3);
    $v_2.appendChild($v_5);
    $v_1.appendChild($v_2);
    var $v_6 = (SP.UI.Dialog.get_$1()).document.createElement('DIV');

    $v_6.className = 'ms-textXLarge ms-alignCenter';
    $v_6.innerHTML = $p1;
    $v_1.appendChild($v_6);
    if ($p2) {
        var $v_9 = (SP.UI.Dialog.get_$1()).document.createElement('DIV');

        $v_9.className = 'ms-floatRight';
        $v_0.type = 'Button';
        $v_0.value = SP.Res.createWaitScreenCancel;
        $v_9.appendChild($v_0);
        $v_1.appendChild($v_9);
        var $v_A = (SP.UI.Dialog.get_$1()).document.createElement('DIV');

        $v_A.className = 'ms-clear';
        $v_1.appendChild($v_A);
    }
    var $v_7 = new SP.UI.DialogOptions();

    $v_7.includeScrollBarPadding = false;
    $v_7.html = $v_1;
    $v_7.width = $p6;
    $v_7.height = $p5;
    $v_7.showClose = $p2;
    $v_7.autoSizeStartWidth = !SP.ScriptUtility.isNullOrUndefined($p6) ? $p6 : 327;
    $v_7.allowMaximize = $p3;
    $v_7.title = '';
    $v_7.$r_0 = true;
    $v_7.dialogReturnValueCallback = $p4;
    var $v_8 = SP.UI.ModalDialog.showModalDialog($v_7);

    $addHandler($v_0, 'click', $v_8.$$d_$1j_0);
    return $v_8;
};
SP.UI.ModalDialog.OpenPopUpPage = function SP_UI_ModalDialog$OpenPopUpPage(url, callback, width, height) {
    OpenPopUpPage(url, callback, width, height);
};
SP.UI.ModalDialog.ShowPopupDialog = function SP_UI_ModalDialog$ShowPopupDialog(url) {
    ShowPopupDialog(url);
};
SP.UI.ModalDialog.commonModalDialogOpen = function SP_UI_ModalDialog$commonModalDialogOpen(url, options, callback, args) {
    commonModalDialogOpen(url, options, callback, args);
};
SP.UI.ModalDialog.commonModalDialogClose = function SP_UI_ModalDialog$commonModalDialogClose(dialogResult, returnVal) {
    commonModalDialogClose(dialogResult, returnVal);
};
SP.UI.ModalDialog.RefreshPage = function SP_UI_ModalDialog$RefreshPage(dialogResult) {
    RefreshPage(dialogResult);
};
SP.UI.ModalDialog.prototype = {
    $1V_1: false,
    $u_1: null,
    $25_0: function SP_UI_ModalDialog$$25_0() {
        var $$t_0;

        ($$t_0 = SP.UI.ModalDialog).set_$o($$t_0.get_$o() + 1);
        this.$N_0 = SP.UI.ModalDialog.get_$o() * 5 + 1500;
        SP.UI.Dialog.prototype.$25_0.call(this);
        this.$u_1 = SP.UI.ModalDialog.get_childDialog();
        SP.UI.ModalDialog.$1Z(this);
    },
    close: function SP_UI_ModalDialog$close(dialogResult) {
        if (this.$1V_1) {
            return;
        }
        this.$1V_1 = true;
        var $$t_1;

        ($$t_1 = SP.UI.ModalDialog).set_$o($$t_1.get_$o() - 1);
        SP.UI.ModalDialog.$1Z(this.$u_1);
        this.$u_1 = null;
        SP.UI.Dialog.prototype.close.call(this, dialogResult);
    }
};
Type.registerNamespace('SP.Application.UI');
SP.Application.UI.DragBehavior = function SP_Application_UI_DragBehavior($p0, $p1) {
    this.$$d_$2E_2 = Function.createDelegate(this, this.$2E_2);
    this.$$d_$2D_2 = Function.createDelegate(this, this.$2D_2);
    this.$$d_$2C_2 = Function.createDelegate(this, this.$2C_2);
    SP.Application.UI.DragBehavior.initializeBase(this, [$p0]);
    this.$R_2 = new SP.Application.UI.MouseTrackerBehavior($p1);
    this.$d_2 = [];
    this.$9_2 = null;
};
SP.Application.UI.DragBehavior.prototype = {
    $R_2: null,
    $d_2: null,
    $9_2: null,
    $1g_2: function SP_Application_UI_DragBehavior$$1g_2($p0) {
        this.$d_2[this.$d_2.length] = $p0;
    },
    $1n_2: function SP_Application_UI_DragBehavior$$1n_2($p0) {
        if (Sys.Browser.agent === Sys.Browser.Firefox || Sys.Browser.agent === Sys.Browser.Safari || Sys.Browser.agent === Sys.Browser.AppleWebKit) {
            if (!$p0) {
                return;
            }
            this.$9_2 = document.createElement('div');
            this.$9_2.style.position = 'absolute';
            this.$9_2.style.cursor = 'move';
            this.$9_2.style.zIndex = $p0.style.zIndex + 1;
            this.$9_2.style.width = $p0.offsetWidth + 'px';
            this.$9_2.style.height = $p0.offsetHeight + 'px';
            this.$9_2.style.top = $p0.offsetTop + 'px';
            this.$9_2.style.left = $p0.offsetLeft + 'px';
        }
    },
    initialize: function SP_Application_UI_DragBehavior$initialize() {
        Sys.UI.Behavior.prototype.initialize.call(this);
        this.$R_2.initialize();
        this.$R_2.add_$1i_2(this.$$d_$2C_2);
        this.$R_2.add_$1t_2(this.$$d_$2D_2);
        this.$R_2.add_$2N_2(this.$$d_$2E_2);
    },
    $19_2: 0,
    $1A_2: 0,
    $1E_2: 0,
    $1D_2: 0,
    $2C_2: function SP_Application_UI_DragBehavior$$2C_2($p0, $p1) {
        var $v_0 = $p1.$h_1.x;
        var $v_1 = $p1.$h_1.y;
        var $v_2 = (this.get_element()).offsetLeft;
        var $v_3 = (this.get_element()).offsetTop;

        this.$19_2 = $v_0 - $v_2;
        this.$1A_2 = $v_1 - $v_3;
        var $v_4 = window.self._dlgWndTop();

        this.$1E_2 = $v_4.document.body.clientWidth;
        this.$1D_2 = $v_4.document.body.clientHeight;
        if (this.$9_2) {
            (this.get_element()).appendChild(this.$9_2);
        }
    },
    $2D_2: function SP_Application_UI_DragBehavior$$2D_2($p0, $p1) {
        var $v_0 = $p1.$h_1.x;
        var $v_1 = $p1.$h_1.y;

        if ($v_0 < 16) {
            $v_0 = 16;
        }
        else if ($v_0 > this.$1E_2 - 16) {
            $v_0 = this.$1E_2 - 16;
        }
        if ($v_1 < 16) {
            $v_1 = 16;
        }
        else if ($v_1 > this.$1D_2 - 16) {
            $v_1 = this.$1D_2 - 16;
        }
        (this.get_element()).style.left = $v_0 - this.$19_2 + 'px';
        (this.get_element()).style.top = $v_1 - this.$1A_2 + 'px';
        for (var $v_2 = 0, $v_3 = this.$d_2.length; $v_2 < $v_3; $v_2++) {
            var $v_4 = this.$d_2[$v_2];

            $v_4.style.left = $v_0 - this.$19_2 + 'px';
            $v_4.style.top = $v_1 - this.$1A_2 + 'px';
        }
    },
    $2E_2: function SP_Application_UI_DragBehavior$$2E_2($p0, $p1) {
        if (this.$9_2) {
            (this.get_element()).removeChild(this.$9_2);
        }
    },
    dispose: function SP_Application_UI_DragBehavior$dispose() {
        try {
            if (this.$R_2) {
                this.$R_2.dispose();
            }
        }
        finally {
            Sys.UI.Behavior.prototype.dispose.call(this);
        }
    }
};
SP.Application.UI.MouseTrackerEventArgs = function SP_Application_UI_MouseTrackerEventArgs($p0, $p1, $p2, $p3) {
    SP.Application.UI.MouseTrackerEventArgs.initializeBase(this);
    this.$2B_1 = $p3;
    this.$h_1 = $p0;
    this.$2A_1 = $p1;
    this.$29_1 = $p2;
};
SP.Application.UI.MouseTrackerEventArgs.prototype = {
    $h_1: null,
    $2A_1: null,
    $29_1: null,
    $2B_1: null
};
SP.Application.UI.MouseTrackerBehavior = function SP_Application_UI_MouseTrackerBehavior($p0) {
    this.$$d_$1w_2 = Function.createDelegate(this, this.$1w_2);
    this.$$d_$1v_2 = Function.createDelegate(this, this.$1v_2);
    this.$$d_$1u_2 = Function.createDelegate(this, this.$1u_2);
    SP.Application.UI.MouseTrackerBehavior.initializeBase(this, [$p0]);
    this.$y_2 = this.$$d_$1u_2;
    this.$g_2 = this.$$d_$1v_2;
    this.$S_2 = this.$$d_$1w_2;
};
SP.Application.UI.MouseTrackerBehavior.$1I = function SP_Application_UI_MouseTrackerBehavior$$1I($p0) {
    if ($p0.rawEvent.pageX) {
        return new Sys.UI.Point($p0.rawEvent.pageX, $p0.rawEvent.pageY);
    }
    var $v_0 = $p0.clientX + document.body.scrollLeft - document.body.clientLeft;
    var $v_1 = $p0.clientY + document.body.scrollTop - document.body.clientTop;
    var $v_2 = document.body.parentNode;

    if ($v_2 && $v_2.clientLeft) {
        $v_0 += $v_2.scrollLeft - $v_2.clientLeft;
        $v_1 += $v_2.scrollTop - $v_2.clientTop;
    }
    return new Sys.UI.Point($v_0, $v_1);
};
SP.Application.UI.MouseTrackerBehavior.prototype = {
    $y_2: null,
    $g_2: null,
    $S_2: null,
    $k_2: false,
    initialize: function SP_Application_UI_MouseTrackerBehavior$initialize() {
        Sys.UI.Behavior.prototype.initialize.call(this);
        this.$k_2 = false;
        $addHandler(this.get_element(), 'mousedown', this.$y_2);
    },
    $1F_2: 0,
    $1G_2: 0,
    add_$1i_2: function SP_Application_UI_MouseTrackerBehavior$add_$1i_2($p0) {
        (this.get_events()).addHandler('begindrag', $p0);
    },
    remove_$1i_2: function SP_Application_UI_MouseTrackerBehavior$remove_$1i_2($p0) {
        (this.get_events()).removeHandler('begindrag', $p0);
    },
    add_$2N_2: function SP_Application_UI_MouseTrackerBehavior$add_$2N_2($p0) {
        (this.get_events()).addHandler('stopdrag', $p0);
    },
    remove_$2N_2: function SP_Application_UI_MouseTrackerBehavior$remove_$2N_2($p0) {
        (this.get_events()).removeHandler('stopdrag', $p0);
    },
    add_$1t_2: function SP_Application_UI_MouseTrackerBehavior$add_$1t_2($p0) {
        (this.get_events()).addHandler('dragging', $p0);
    },
    remove_$1t_2: function SP_Application_UI_MouseTrackerBehavior$remove_$1t_2($p0) {
        (this.get_events()).removeHandler('dragging', $p0);
    },
    $1u_2: function SP_Application_UI_MouseTrackerBehavior$$1u_2($p0) {
        if (this.$k_2 || $p0.button) {
            return;
        }
        this.$k_2 = true;
        this.$1F_2 = $p0.clientX;
        this.$1G_2 = $p0.clientY;
        if ((this.get_element()).ownerDocument.addEventListener) {
            $addHandler((this.get_element()).ownerDocument, 'mousemove', this.$g_2);
            $addHandler((this.get_element()).ownerDocument, 'mouseup', this.$S_2);
        }
        else {
            (this.get_element()).setCapture();
            $addHandler(this.get_element(), 'mousemove', this.$g_2);
            $addHandler(this.get_element(), 'mouseup', this.$S_2);
            $addHandler(this.get_element(), 'losecapture', this.$S_2);
        }
        $p0.preventDefault();
        $p0.stopPropagation();
        var $v_0 = (this.get_events()).getHandler('begindrag');

        if ($v_0) {
            var $v_1 = new Sys.UI.Point($p0.clientX, $p0.clientY);
            var $v_2 = new Sys.UI.Point(0, 0);
            var $v_3 = SP.Application.UI.MouseTrackerBehavior.$1I($p0);
            var $v_4 = new SP.Application.UI.MouseTrackerEventArgs($v_1, $v_2, $v_3, $p0.target);

            $v_0(this, $v_4);
        }
    },
    $1v_2: function SP_Application_UI_MouseTrackerBehavior$$1v_2($p0) {
        if (!this.$k_2) {
            return;
        }
        $p0.stopPropagation();
        var $v_0 = (this.get_events()).getHandler('dragging');

        if ($v_0) {
            var $v_1 = new Sys.UI.Point($p0.clientX, $p0.clientY);
            var $v_2 = new Sys.UI.Point($p0.clientX - this.$1F_2, $p0.clientY - this.$1G_2);
            var $v_3 = SP.Application.UI.MouseTrackerBehavior.$1I($p0);
            var $v_4 = new SP.Application.UI.MouseTrackerEventArgs($v_1, $v_2, $v_3, $p0.target);

            $v_0(this, $v_4);
        }
    },
    $1w_2: function SP_Application_UI_MouseTrackerBehavior$$1w_2($p0) {
        this.$k_2 = false;
        if ((this.get_element()).ownerDocument.removeEventListener) {
            $removeHandler((this.get_element()).ownerDocument, 'mouseup', this.$S_2);
            $removeHandler((this.get_element()).ownerDocument, 'mousemove', this.$g_2);
        }
        else {
            $removeHandler(this.get_element(), 'losecapture', this.$S_2);
            $removeHandler(this.get_element(), 'mouseup', this.$S_2);
            $removeHandler(this.get_element(), 'mousemove', this.$g_2);
            (this.get_element()).releaseCapture();
        }
        $p0.stopPropagation();
        var $v_0 = (this.get_events()).getHandler('stopdrag');

        if ($v_0) {
            var $v_1 = new Sys.UI.Point($p0.clientX, $p0.clientY);
            var $v_2 = new Sys.UI.Point($p0.clientX - this.$1F_2, $p0.clientY - this.$1G_2);
            var $v_3 = SP.Application.UI.MouseTrackerBehavior.$1I($p0);
            var $v_4 = new SP.Application.UI.MouseTrackerEventArgs($v_1, $v_2, $v_3, $p0.target);

            $v_0(this, $v_4);
        }
    },
    dispose: function SP_Application_UI_MouseTrackerBehavior$dispose() {
        try {
            if (this.$y_2) {
                if (this.get_element()) {
                    $removeHandler(this.get_element(), 'mousedown', this.$y_2);
                }
            }
        }
        finally {
            Sys.UI.Behavior.prototype.dispose.call(this);
        }
    }
};
SP.UI.DialogOptions.registerClass('SP.UI.DialogOptions');
SP.UI.Dialog.registerClass('SP.UI.Dialog');
SP.UI.DialogHostedWindow.registerClass('SP.UI.DialogHostedWindow', null, Sys.IDisposable);
SP.UI.ModalDialog.registerClass('SP.UI.ModalDialog', SP.UI.Dialog);
SP.Application.UI.DragBehavior.registerClass('SP.Application.UI.DragBehavior', Sys.UI.Behavior);
SP.Application.UI.MouseTrackerEventArgs.registerClass('SP.Application.UI.MouseTrackerEventArgs', Sys.EventArgs);
SP.Application.UI.MouseTrackerBehavior.registerClass('SP.Application.UI.MouseTrackerBehavior', Sys.UI.Behavior);
function sp_ui_dialog_initialize() {
    SP.UI.Dialog.$M = null;
    SP.UI.Dialog.$z = null;
    SP.UI.Dialog.$X = 0;
    SP.UI.ModalDialog.zIndexStep = 5;
    SP.UI.ModalDialog.zIndexStart = 1500;
}
;
sp_ui_dialog_initialize();
if (!SP.UI.$create_DialogOptions) {
    SP.UI.$create_DialogOptions = function() {
        return new SP.UI.DialogOptions();
    };
}
RegisterModuleInit("sp.ui.dialog.js", sp_ui_dialog_initialize);
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.dialog.js");
