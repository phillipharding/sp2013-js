Type.registerNamespace('SP');
SP.TaggingUtilities = function SP_TaggingUtilities() {
};
SP.TaggingUtilities.getTagFromiTag = function SP_TaggingUtilities$getTagFromiTag(tag) {
    if (tag <= 65535) {
        return tag.toString();
    }
    if (tag >>> 24 >= 36) {
        return String.fromCharCode.call(null, tag >>> 24 & 255, tag >>> 16 & 255, tag >>> 8 & 255, tag & 255);
    }
    return '' + 'abcdefghijklmnopqrstuvwxyz0123456789'.charAt(tag >>> 24 & 63) + 'abcdefghijklmnopqrstuvwxyz0123456789'.charAt(tag >>> 18 & 63) + 'abcdefghijklmnopqrstuvwxyz0123456789'.charAt(tag >>> 12 & 63) + 'abcdefghijklmnopqrstuvwxyz0123456789'.charAt(tag >>> 6 & 63) + 'abcdefghijklmnopqrstuvwxyz0123456789'.charAt(tag & 63);
};
SP.TaggingUtilities.getiTagFromTag = function SP_TaggingUtilities$getiTagFromTag(sTag) {
    var $v_0 = 0;

    $v_0 = parseInt(sTag);
    if ($v_0.toString(10) === sTag && $v_0 <= 65535) {
        return $v_0;
    }
    if (sTag.length === 4) {
        $v_0 = sTag.charAt(0) << 24 | sTag.charAt(1) << 16 | sTag.charAt(2) << 8 | sTag.charAt(3);
    }
    else {
        $v_0 = 'abcdefghijklmnopqrstuvwxyz0123456789'.indexOf(sTag.charAt(0)) << 24 | 'abcdefghijklmnopqrstuvwxyz0123456789'.indexOf(sTag.charAt(1)) << 18 | 'abcdefghijklmnopqrstuvwxyz0123456789'.indexOf(sTag.charAt(2)) << 12 | 'abcdefghijklmnopqrstuvwxyz0123456789'.indexOf(sTag.charAt(3)) << 6 | 'abcdefghijklmnopqrstuvwxyz0123456789'.indexOf(sTag.charAt(4));
    }
    return $v_0;
};
Type.registerNamespace('SP.UI.ComboBox');
SP.UI.ComboBox.IEmbeddedControl = function() {
};
SP.UI.ComboBox.IEmbeddedControl.registerInterface('SP.UI.ComboBox.IEmbeddedControl');
SP.UI.ComboBox.ComboBox = function SP_UI_ComboBox_ComboBox(controlId) {
    this.$$d_$2v_0 = Function.createDelegate(this, this.$2v_0);
    this.$$d_$1q_0 = Function.createDelegate(this, this.$1q_0);
    this.$$d_$2s_0 = Function.createDelegate(this, this.$2s_0);
    this.$$d_$2X_0 = Function.createDelegate(this, this.$2X_0);
    this.$$d_$38_0 = Function.createDelegate(this, this.$38_0);
    this.$$d_onPanelOpenStateChange = Function.createDelegate(this, this.onPanelOpenStateChange);
    this.$$d_panelGetContentEventHandler = Function.createDelegate(this, this.panelGetContentEventHandler);
    this.$$d_$2n_0 = Function.createDelegate(this, this.$2n_0);
    this.$$d_$2r_0 = Function.createDelegate(this, this.$2r_0);
    this.$$d_onDropDownButtonClick = Function.createDelegate(this, this.onDropDownButtonClick);
    this.$$d_$2M_0 = Function.createDelegate(this, this.$2M_0);
    this.$C_0 = new Sys.EventHandlerList();
    var $v_0 = $get(controlId);

    this.$B_0 = $v_0;
    this.$1C_0 = new SP.UI.ComboBox.DomEventList($v_0);
    this.$1C_0.attach('mousedown', this.$$d_$2M_0);
};
SP.UI.ComboBox.ComboBox.get_nonDropdownStartingKeyChars = function SP_UI_ComboBox_ComboBox$get_nonDropdownStartingKeyChars() {
    if (!SP.UI.ComboBox.ComboBox.$I) {
        SP.UI.ComboBox.ComboBox.$I = {};
        SP.UI.ComboBox.ComboBox.$I[39] = 1;
        SP.UI.ComboBox.ComboBox.$I[37] = 1;
        SP.UI.ComboBox.ComboBox.$I[38] = 1;
        SP.UI.ComboBox.ComboBox.$I[40] = 1;
        SP.UI.ComboBox.ComboBox.$I[33] = 1;
        SP.UI.ComboBox.ComboBox.$I[34] = 1;
        SP.UI.ComboBox.ComboBox.$I[36] = 1;
        SP.UI.ComboBox.ComboBox.$I[35] = 1;
        SP.UI.ComboBox.ComboBox.$I[127] = 1;
        SP.UI.ComboBox.ComboBox.$I[8] = 1;
        SP.UI.ComboBox.ComboBox.$I[9] = 1;
        SP.UI.ComboBox.ComboBox.$I[27] = 1;
        SP.UI.ComboBox.ComboBox.$I[13] = 1;
        SP.UI.ComboBox.ComboBox.$I[46] = 1;
    }
    return SP.UI.ComboBox.ComboBox.$I;
};
SP.UI.ComboBox.ComboBox.createComboBox = function SP_UI_ComboBox_ComboBox$createComboBox(controlId, origValue, comboInfo) {
    var $v_0 = null;

    if (comboInfo.$X_0) {
        $v_0 = new SP.UI.ComboBox.MultiComboBox(controlId);
        $v_0.init(origValue, comboInfo);
    }
    else {
        $v_0 = new SP.UI.ComboBox.SingleComboBox(controlId);
        $v_0.init(origValue, comboInfo);
    }
    return $v_0;
};
SP.UI.ComboBox.ComboBox.createListBox = function SP_UI_ComboBox_ComboBox$createListBox(controlId, origValue, comboInfo) {
    var $v_0 = new SP.UI.ComboBox.ListBox(controlId);

    $v_0.init(origValue, comboInfo);
    return $v_0;
};
SP.UI.ComboBox.ComboBox.prototype = {
    $0_0: null,
    $O_0: null,
    $U_0: null,
    $1C_0: null,
    $B_0: null,
    $S_0: null,
    $2_0: null,
    $7_0: null,
    $E_0: null,
    $1f_0: false,
    $y_0: null,
    $i_0: 0,
    $1i_0: false,
    $1N_0: false,
    add_valueUpdatedEvent: function SP_UI_ComboBox_ComboBox$add_valueUpdatedEvent(value) {
        this.$C_0.addHandler('ValueUpdatedEvent_', value);
    },
    remove_valueUpdatedEvent: function SP_UI_ComboBox_ComboBox$remove_valueUpdatedEvent(value) {
        this.$C_0.removeHandler('ValueUpdatedEvent_', value);
    },
    add_focusEvent: function SP_UI_ComboBox_ComboBox$add_focusEvent(value) {
        this.$C_0.addHandler('FocusEvent_', value);
    },
    remove_focusEvent: function SP_UI_ComboBox_ComboBox$remove_focusEvent(value) {
        this.$C_0.removeHandler('FocusEvent_', value);
    },
    add_blurEvent: function SP_UI_ComboBox_ComboBox$add_blurEvent(value) {
        this.$C_0.addHandler('BlurEvent_', value);
    },
    remove_blurEvent: function SP_UI_ComboBox_ComboBox$remove_blurEvent(value) {
        this.$C_0.removeHandler('BlurEvent_', value);
    },
    get_currentValue: function SP_UI_ComboBox_ComboBox$get_currentValue() {
        return this.$E_0;
    },
    set_currentValue: function SP_UI_ComboBox_ComboBox$set_currentValue(value) {
        if (this.$E_0 !== value) {
            this.$E_0 = !value ? '' : value;
            this.onSetValue();
        }
        return value;
    },
    get_displayText: function SP_UI_ComboBox_ComboBox$get_displayText() {
        if (this.$2_0) {
            return this.$2_0.value;
        }
        var $v_0 = this.$0_0.$1l_0();

        if ($v_0) {
            return $v_0.$F_0;
        }
        return null;
    },
    set_displayText: function SP_UI_ComboBox_ComboBox$set_displayText(value) {
        if (this.$2_0) {
            this.set_textBoxValue(value);
            this.onSetDisplayText();
        }
        return value;
    },
    get_comboInfo: function SP_UI_ComboBox_ComboBox$get_comboInfo() {
        return this.$0_0.get_$1M_0();
    },
    set_comboInfo: function SP_UI_ComboBox_ComboBox$set_comboInfo(value) {
        this.$0_0.set_$1M_0(value);
        this.$1T_0();
        return value;
    },
    get_focusElement: function SP_UI_ComboBox_ComboBox$get_focusElement() {
        return this.$2_0;
    },
    get_$m_0: function SP_UI_ComboBox_ComboBox$get_$m_0() {
        return false;
    },
    get_$2z_0: function SP_UI_ComboBox_ComboBox$get_$2z_0() {
        if (!this.$S_0) {
            this.$S_0 = document.createElement('div');
            this.$S_0.className = 'combobox-dropdown';
            SP.UI.ComboBox.Helper.$1x(this.$S_0, false);
            if (this.get_$n_0()) {
                this.$S_0.disabled = true;
            }
            this.$B_0.appendChild(this.$S_0);
        }
        return this.$S_0;
    },
    get_isLookup: function SP_UI_ComboBox_ComboBox$get_isLookup() {
        return (this.$0_0.get_$1M_0()).get_firstColumn() > 0;
    },
    get_textBoxValue: function SP_UI_ComboBox_ComboBox$get_textBoxValue() {
        return this.$2_0.value;
    },
    set_textBoxValue: function SP_UI_ComboBox_ComboBox$set_textBoxValue(value) {
        if (this.$2_0.value !== value) {
            this.$2_0.value = value;
        }
        return value;
    },
    get_dirty: function SP_UI_ComboBox_ComboBox$get_dirty() {
        return this.$1f_0;
    },
    set_dirty: function SP_UI_ComboBox_ComboBox$set_dirty(value) {
        this.$1f_0 = value;
        return value;
    },
    get_originalValue: function SP_UI_ComboBox_ComboBox$get_originalValue() {
        return this.$y_0;
    },
    set_originalValue: function SP_UI_ComboBox_ComboBox$set_originalValue(value) {
        this.$y_0 = value;
        return value;
    },
    get_originalValueString: function SP_UI_ComboBox_ComboBox$get_originalValueString() {
        return !this.$y_0 ? null : this.$y_0.toString();
    },
    get_$n_0: function SP_UI_ComboBox_ComboBox$get_$n_0() {
        return !this.$B_0 || this.$B_0.disabled || !SP.UI.ComboBox.Helper.$j(this.$B_0.getAttribute('disabled'));
    },
    get_disposed: function SP_UI_ComboBox_ComboBox$get_disposed() {
        return this.$B_0 === null;
    },
    dispose: function SP_UI_ComboBox_ComboBox$dispose() {
        this.$B_0 = null;
        if (this.$1C_0) {
            this.$1C_0.dispose();
            this.$1C_0 = null;
        }
        if (this.$O_0) {
            this.$O_0.dispose();
            this.$O_0 = null;
        }
        if (this.$U_0) {
            this.$U_0.dispose();
            this.$U_0 = null;
        }
        if (this.$0_0) {
            this.$0_0.dispose();
            this.$0_0 = null;
        }
        if (this.$S_0) {
            SP.UI.ComboBox.Helper.$M(this.$S_0);
            this.$S_0 = null;
        }
        if (this.$7_0) {
            SP.UI.ComboBox.Helper.$M(this.$7_0);
            this.$7_0 = null;
        }
        if (this.$2_0) {
            SP.UI.ComboBox.Helper.$M(this.$2_0);
            this.$2_0 = null;
        }
        this.$E_0 = null;
    },
    notifySetLayout: function SP_UI_ComboBox_ComboBox$notifySetLayout() {
        if (this.$7_0 || this.$2_0) {
            var $v_0 = SP.UI.ComboBox.Helper.$2C(this.$B_0);

            if (this.$7_0 && $v_0.y > 0) {
                this.$7_0.style.height = $v_0.y + 'px';
                if (this.$7_0.childNodes.length > 0 && $v_0.y > 16) {
                    var $v_1 = this.$7_0.childNodes[0];

                    $v_1.style.marginTop = Math.floor(($v_0.y - 16) / 2) + 'px';
                }
            }
            if (this.$2_0) {
                var $v_2 = SP.UI.ComboBox.Helper.$1P(this.$2_0);
                var $v_3 = $v_0.y - parseInt($v_2.paddingTop) - parseInt($v_2.paddingBottom);

                if ($v_3 > 0) {
                    this.$2_0.style.height = $v_3 + 'px';
                }
                var $v_4 = $v_0.x - 22 - 1 - parseInt($v_2.paddingLeft) - parseInt($v_2.paddingRight);

                if ($v_4 > 0) {
                    this.$2_0.style.width = $v_4 + 'px';
                }
            }
        }
    },
    closeDropdown: function SP_UI_ComboBox_ComboBox$closeDropdown() {
        if (this.$0_0 && this.$0_0.get_$Y_0()) {
            this.$0_0.$V_0();
        }
    },
    openDropdown: function SP_UI_ComboBox_ComboBox$openDropdown() {
        if (this.$0_0 && !this.$0_0.get_$Y_0() && !this.get_$n_0()) {
            this.$0_0.$F_0();
        }
    },
    invalidatePanel: function SP_UI_ComboBox_ComboBox$invalidatePanel() {
        this.$0_0.$1m_0();
    },
    commit: function SP_UI_ComboBox_ComboBox$commit() {
    },
    disable: function SP_UI_ComboBox_ComboBox$disable(disable) {
        if (this.$B_0) {
            this.$B_0.disabled = disable;
        }
        if (this.$S_0) {
            this.$S_0.disabled = disable;
        }
        if (this.$2_0) {
            this.$2_0.disabled = disable;
        }
        if (this.$7_0) {
            this.$7_0.disabled = disable;
            if (disable && this.$U_0) {
                this.$U_0.dispose();
                this.$U_0 = null;
            }
            else if (!disable && !this.$U_0) {
                this.$U_0 = new SP.UI.ComboBox.DomEventList(this.$7_0);
                this.$U_0.attach('click', this.$$d_onDropDownButtonClick);
                this.$U_0.attach('focus', this.$$d_$2r_0);
                this.$U_0.attach('blur', this.$$d_$2n_0);
            }
        }
        this.$3C_0(!disable);
    },
    $s_0: function SP_UI_ComboBox_ComboBox$$s_0($p0) {
        var $v_0 = this.get_isLookup() && $p0 === null;

        if (!$p0) {
            $p0 = '';
        }
        if (this.$E_0 !== $p0 || $v_0) {
            this.$E_0 = $p0;
            this.onSetValue();
            this.$1f_0 = this.$E_0 !== this.get_originalValueString();
            this.$35_0();
            return true;
        }
        return false;
    },
    createElements: function SP_UI_ComboBox_ComboBox$createElements(comboInfo) {
        if (comboInfo.$1g_0) {
            this.$2_0 = this.$B_0.childNodes[0];
            this.$7_0 = this.$B_0.childNodes[1];
        }
        else {
            this.$2_0 = document.createElement('input');
            this.$2_0.type = 'text';
            this.$2_0.className = 'cb-textbox ';
            this.$7_0 = document.createElement('input');
            this.$7_0.type = 'button';
            this.$7_0.className = 'combobox-img';
            this.$7_0.value = '\u25bc';
            this.$7_0.tabIndex = -1;
            Sys.UI.DomElement.addCssClass(this.$B_0, 'combobox-placeholder');
            if (comboInfo.$f_0) {
                this.$7_0.style.textAlign = 'center';
            }
            if (comboInfo.get_needRtlControlReordering()) {
                this.$7_0.style.styleFloat = 'left';
                this.$7_0.style.cssFloat = 'left';
                this.$2_0.style.styleFloat = 'left';
                this.$2_0.style.cssFloat = 'left';
                this.$B_0.appendChild(this.$7_0);
                this.$B_0.appendChild(this.$2_0);
            }
            else {
                this.$B_0.appendChild(this.$2_0);
                this.$B_0.appendChild(this.$7_0);
            }
            this.notifySetLayout();
        }
        this.$7_0.title = SP.Res.dropdownImageAltText;
    },
    init: function SP_UI_ComboBox_ComboBox$init(origValue, comboInfo) {
        this.createElements(comboInfo);
        this.$0_0 = new SP.UI.ComboBox.ComboPanel(this, this.$2_0 !== null, comboInfo);
        this.$0_0.add_$30_0(this.$$d_panelGetContentEventHandler);
        this.$0_0.add_$31_0(this.$$d_onPanelOpenStateChange);
        this.$0_0.$V_0();
        if (SP.UI.ComboBox.Helper.$5(origValue)) {
            this.$y_0 = null;
            this.$s_0('');
        }
        else {
            this.$y_0 = origValue;
            this.$s_0(origValue.toString());
        }
        this.$1T_0();
        this.disable(this.get_$n_0());
    },
    onPanelOpenStateChange: function SP_UI_ComboBox_ComboBox$onPanelOpenStateChange(sender, e) {
        var $v_0 = e;

        if (this.$7_0) {
            if ($v_0) {
                Sys.UI.DomElement.addCssClass(this.$7_0, 'combobox-img-active');
            }
            else {
                Sys.UI.DomElement.removeCssClass(this.$7_0, 'combobox-img-active');
                this.commit();
            }
        }
    },
    panelGetContentEventHandler: function SP_UI_ComboBox_ComboBox$panelGetContentEventHandler(sender, e) {
        this.$0_0.$1p_0(this.$E_0);
    },
    onSetDisplayText: function SP_UI_ComboBox_ComboBox$onSetDisplayText() {
    },
    $35_0: function SP_UI_ComboBox_ComboBox$$35_0() {
        var $v_0 = this.$C_0.getHandler('ValueUpdatedEvent_');

        if (!SP.UI.ComboBox.Helper.$5($v_0)) {
            $v_0(this, Sys.EventArgs.Empty);
        }
    },
    $33_0: function SP_UI_ComboBox_ComboBox$$33_0() {
        var $v_0 = this.$C_0.getHandler('FocusEvent_');

        if (!SP.UI.ComboBox.Helper.$5($v_0)) {
            $v_0(this, Sys.EventArgs.Empty);
        }
    },
    $1V_0: function SP_UI_ComboBox_ComboBox$$1V_0() {
        var $v_0 = this.$C_0.getHandler('BlurEvent_');

        if (!SP.UI.ComboBox.Helper.$5($v_0)) {
            $v_0(this, Sys.EventArgs.Empty);
        }
    },
    $1q_0: function SP_UI_ComboBox_ComboBox$$1q_0($p0) {
        switch ($p0.keyCode) {
        case 38:
        case 40:
            if (this.$0_0.get_$Y_0() && !(this.get_comboInfo()).$r_0) {
                if ($p0.keyCode === 40) {
                    this.$0_0.$2l_0();
                }
                else {
                    this.$0_0.$2m_0();
                }
                $p0.preventDefault();
                $p0.stopPropagation();
            }
            else if ($p0.altKey && $p0.keyCode === 40) {
                this.$0_0.$F_0();
                $p0.preventDefault();
                $p0.stopPropagation();
            }
            else if ((this.get_comboInfo()).$12_0) {
                this.$1V_0();
                $p0.preventDefault();
                $p0.stopPropagation();
            }
            break;
        case 27:
            window.setTimeout(this.$$d_$38_0, 0);
            break;
        case 13:
            this.commit();
            this.$0_0.$V_0();
            break;
        case 9:
            if (!$p0.shiftKey && this.$0_0.$2u_0()) {
                $p0.preventDefault();
                $p0.stopPropagation();
            }
            break;
        case 37:
            if (this.$2_0 && (this.get_comboInfo()).$12_0 && !SP.UI.ComboBox.Helper.$29(this.$2_0)) {
                this.$1V_0();
                $p0.preventDefault();
                $p0.stopPropagation();
            }
            break;
        case 39:
            if (this.$2_0 && (this.get_comboInfo()).$12_0 && SP.UI.ComboBox.Helper.$29(this.$2_0) === this.$2_0.value.length) {
                this.$1V_0();
                $p0.preventDefault();
                $p0.stopPropagation();
            }
            break;
        }
    },
    $2s_0: function SP_UI_ComboBox_ComboBox$$2s_0($p0) {
    },
    $2r_0: function SP_UI_ComboBox_ComboBox$$2r_0($p0) {
        this.$1b_0();
        this.$1i_0 = true;
        if (!this.$1N_0) {
            this.$33_0();
            this.$1N_0 = true;
        }
    },
    $2n_0: function SP_UI_ComboBox_ComboBox$$2n_0($p0) {
        this.$1i_0 = false;
        if (!this.$i_0) {
            this.$i_0 = window.setTimeout(this.$$d_$2X_0, 0);
        }
    },
    $2X_0: function SP_UI_ComboBox_ComboBox$$2X_0() {
        this.$i_0 = 0;
        if (!this.get_disposed() && !this.$1i_0 && this.$1N_0) {
            this.$1N_0 = false;
            this.commit();
            this.$0_0.$V_0();
            this.$1V_0();
        }
    },
    onDropDownButtonClick: function SP_UI_ComboBox_ComboBox$onDropDownButtonClick(domEvent) {
        if (!this.$0_0.get_$Y_0()) {
            this.openDropdown();
        }
        else {
            this.closeDropdown();
        }
        this.selectText();
    },
    $2M_0: function SP_UI_ComboBox_ComboBox$$2M_0($p0) {
        if (!this.get_$n_0()) {
            $p0.stopPropagation();
            var $v_0 = $p0.target.tagName.toLowerCase();

            if ($v_0 !== 'a') {
                if ($v_0 === 'input') {
                    if ($p0.target.type.toLowerCase() !== 'checkbox') {
                        return;
                    }
                }
                this.$1b_0();
                var $$t_2 = this;

                this.$i_0 = window.setTimeout(function() {
                    $$t_2.$i_0 = 0;
                    if (!$$t_2.get_disposed()) {
                        ($$t_2.get_focusElement()).focus();
                    }
                }, 0);
            }
        }
    },
    $2v_0: function SP_UI_ComboBox_ComboBox$$2v_0($p0) {
        if (!this.get_$n_0() && !this.$0_0.get_$Y_0()) {
            this.onDropDownButtonClick($p0);
        }
    },
    selectText: function SP_UI_ComboBox_ComboBox$selectText() {
        if (this.$2_0 && !this.get_$n_0()) {
            this.$1b_0();
            try {
                this.$2_0.focus();
                this.$2_0.select(null);
            }
            catch ($$e_0) { }
        }
    },
    appendAndSelectText: function SP_UI_ComboBox_ComboBox$appendAndSelectText(startingPoint, text) {
        SP.UI.ComboBox.Helper.$3B(this.$2_0, startingPoint, startingPoint, text);
    },
    $1T_0: function SP_UI_ComboBox_ComboBox$$1T_0() {
        var $v_0 = this.$0_0.get_$1M_0();

        if ($v_0 && !SP.UI.ComboBox.Helper.$j($v_0.$l_0)) {
            if (this.$2_0) {
                this.$2_0.className = 'cb-textbox ' + $v_0.$l_0;
            }
        }
        else {
            if (this.$2_0) {
                this.$2_0.className = 'cb-textbox ';
            }
        }
        if (this.$7_0 && this.$2_0) {
            var $v_1 = $v_0 && $v_0.$f_0 ? 'rtl' : 'ltr';

            this.$7_0.dir = (this.$2_0.dir = $v_1);
            if (this.$7_0.childNodes.length > 0) {
                this.$7_0.childNodes[0].dir = $v_1;
            }
        }
    },
    $3C_0: function SP_UI_ComboBox_ComboBox$$3C_0($p0) {
        if ($p0) {
            if (!this.$O_0) {
                this.$O_0 = new SP.UI.ComboBox.DomEventList(this.get_focusElement());
                this.$O_0.attach('keypress', this.$$d_$2s_0);
                this.$O_0.attach('keydown', this.$$d_$1q_0);
                this.$O_0.attach('blur', this.$$d_$2n_0);
                this.$O_0.attach('focus', this.$$d_$2r_0);
                this.$O_0.attach('mousedown', this.$$d_$2v_0);
            }
        }
        else if (this.$O_0) {
            this.$O_0.dispose();
            this.$O_0 = null;
        }
    },
    $38_0: function SP_UI_ComboBox_ComboBox$$38_0() {
        if (!this.get_disposed()) {
            if (!this.$s_0(this.get_originalValueString())) {
                this.onSetValue();
            }
            this.$0_0.$V_0();
            this.selectText();
        }
    },
    $1b_0: function SP_UI_ComboBox_ComboBox$$1b_0() {
        if (this.$i_0) {
            window.clearTimeout(this.$i_0);
            this.$i_0 = 0;
        }
    }
};
SP.UI.ComboBox.SPComboInfo = function SP_UI_ComboBox_SPComboInfo() {
    this.$1S_0 = true;
    this.$Q_0 = 1;
    this.$d_0 = -1;
};
SP.UI.ComboBox.SPComboInfo.formatMultiValue = function SP_UI_ComboBox_SPComboInfo$formatMultiValue(original, dataSeparator, displaySeparator) {
    var $v_0 = dataSeparator.length;

    if (original.startsWith(dataSeparator)) {
        original = original.substr($v_0);
    }
    if (original.endsWith(dataSeparator)) {
        original = original.substr(0, original.length - $v_0);
    }
    var $v_1 = original.split(dataSeparator);

    if (!$v_1 || $v_1.length <= 0) {
        return '';
    }
    var $v_2 = $v_1[0];

    for (var $v_3 = 1; $v_3 < $v_1.length; $v_3++) {
        $v_2 += displaySeparator + $v_1[$v_3].trim();
    }
    return $v_2;
};
SP.UI.ComboBox.SPComboInfo.prototype = {
    $1L_0: null,
    $1S_0: false,
    $28_0: false,
    $X_0: false,
    $Q_0: 0,
    $u_0: false,
    $l_0: null,
    $r_0: false,
    $16_0: false,
    $f_0: false,
    $1t_0: false,
    $1o_0: null,
    $1A_0: 0,
    $1n_0: 0,
    $1v_0: null,
    $15_0: null,
    $x_0: null,
    $1Y_0: null,
    $1Q_0: null,
    $1J_0: 0,
    $12_0: false,
    $1U_0: null,
    $A_0: null,
    $d_0: 0,
    $1g_0: false,
    $1K_0: false,
    $1k_0: null,
    $1d_0: null,
    get_limitToList: function SP_UI_ComboBox_SPComboInfo$get_limitToList() {
        return this.$1S_0;
    },
    set_limitToList: function SP_UI_ComboBox_SPComboInfo$set_limitToList(value) {
        this.$1S_0 = value;
        return value;
    },
    get_required: function SP_UI_ComboBox_SPComboInfo$get_required() {
        return this.$1t_0;
    },
    set_required: function SP_UI_ComboBox_SPComboInfo$set_required(value) {
        this.$1t_0 = value;
        return value;
    },
    get_editable: function SP_UI_ComboBox_SPComboInfo$get_editable() {
        return this.$28_0;
    },
    set_editable: function SP_UI_ComboBox_SPComboInfo$set_editable(value) {
        this.$28_0 = value;
        return value;
    },
    get_multipleSelect: function SP_UI_ComboBox_SPComboInfo$get_multipleSelect() {
        return this.$X_0;
    },
    set_multipleSelect: function SP_UI_ComboBox_SPComboInfo$set_multipleSelect(value) {
        this.$X_0 = value;
        return value;
    },
    get_allowMultiEdits: function SP_UI_ComboBox_SPComboInfo$get_allowMultiEdits() {
        return this.$1K_0;
    },
    set_allowMultiEdits: function SP_UI_ComboBox_SPComboInfo$set_allowMultiEdits(value) {
        this.$1K_0 = value;
        return value;
    },
    get_domCreated: function SP_UI_ComboBox_SPComboInfo$get_domCreated() {
        return this.$1g_0;
    },
    set_domCreated: function SP_UI_ComboBox_SPComboInfo$set_domCreated(value) {
        this.$1g_0 = value;
        return value;
    },
    get_columnWidths: function SP_UI_ComboBox_SPComboInfo$get_columnWidths() {
        return this.$1L_0;
    },
    set_columnWidths: function SP_UI_ComboBox_SPComboInfo$set_columnWidths(value) {
        this.$1L_0 = value;
        this.$A_0 = null;
        this.$d_0 = -1;
        return value;
    },
    get_listWidth: function SP_UI_ComboBox_SPComboInfo$get_listWidth() {
        return this.$1o_0;
    },
    set_listWidth: function SP_UI_ComboBox_SPComboInfo$set_listWidth(value) {
        this.$1o_0 = value;
        return value;
    },
    get_listMaxWidth: function SP_UI_ComboBox_SPComboInfo$get_listMaxWidth() {
        return this.$1A_0;
    },
    set_listMaxWidth: function SP_UI_ComboBox_SPComboInfo$set_listMaxWidth(value) {
        this.$1A_0 = value;
        return value;
    },
    get_listMinWidth: function SP_UI_ComboBox_SPComboInfo$get_listMinWidth() {
        return this.$1n_0;
    },
    set_listMinWidth: function SP_UI_ComboBox_SPComboInfo$set_listMinWidth(value) {
        this.$1n_0 = value;
        return value;
    },
    get_needRtlControlReordering: function SP_UI_ComboBox_SPComboInfo$get_needRtlControlReordering() {
        return this.$f_0 && this.$1A_0 > 0;
    },
    get_expandSpace: function SP_UI_ComboBox_SPComboInfo$get_expandSpace() {
        return this.$1k_0;
    },
    set_expandSpace: function SP_UI_ComboBox_SPComboInfo$set_expandSpace(value) {
        this.$1k_0 = value;
        return value;
    },
    get_clipParent: function SP_UI_ComboBox_SPComboInfo$get_clipParent() {
        return this.$1d_0;
    },
    set_clipParent: function SP_UI_ComboBox_SPComboInfo$set_clipParent(value) {
        this.$1d_0 = value;
        return value;
    },
    get_columnCount: function SP_UI_ComboBox_SPComboInfo$get_columnCount() {
        return this.$Q_0;
    },
    set_columnCount: function SP_UI_ComboBox_SPComboInfo$set_columnCount(value) {
        this.$Q_0 = value;
        return value;
    },
    get_columnHeads: function SP_UI_ComboBox_SPComboInfo$get_columnHeads() {
        return this.$u_0;
    },
    set_columnHeads: function SP_UI_ComboBox_SPComboInfo$set_columnHeads(value) {
        this.$u_0 = value;
        return value;
    },
    get_locked: function SP_UI_ComboBox_SPComboInfo$get_locked() {
        return this.$r_0;
    },
    set_locked: function SP_UI_ComboBox_SPComboInfo$set_locked(value) {
        this.$r_0 = value;
        return value;
    },
    get_hidden: function SP_UI_ComboBox_SPComboInfo$get_hidden() {
        return this.$16_0;
    },
    set_hidden: function SP_UI_ComboBox_SPComboInfo$set_hidden(value) {
        this.$16_0 = value;
        return value;
    },
    get_styleName: function SP_UI_ComboBox_SPComboInfo$get_styleName() {
        return this.$l_0;
    },
    set_styleName: function SP_UI_ComboBox_SPComboInfo$set_styleName(value) {
        this.$l_0 = value;
        return value;
    },
    get_zIndex: function SP_UI_ComboBox_SPComboInfo$get_zIndex() {
        return this.$1J_0;
    },
    set_zIndex: function SP_UI_ComboBox_SPComboInfo$set_zIndex(value) {
        this.$1J_0 = value;
        return value;
    },
    get_RTL: function SP_UI_ComboBox_SPComboInfo$get_RTL() {
        return this.$f_0;
    },
    set_RTL: function SP_UI_ComboBox_SPComboInfo$set_RTL(value) {
        this.$f_0 = value;
        return value;
    },
    get_separatorCharacters: function SP_UI_ComboBox_SPComboInfo$get_separatorCharacters() {
        return !this.$1v_0 ? ';' : this.$1v_0;
    },
    set_separatorCharacters: function SP_UI_ComboBox_SPComboInfo$set_separatorCharacters(value) {
        this.$1v_0 = value;
        return value;
    },
    get_arrowKeysBlur: function SP_UI_ComboBox_SPComboInfo$get_arrowKeysBlur() {
        return this.$12_0;
    },
    set_arrowKeysBlur: function SP_UI_ComboBox_SPComboInfo$set_arrowKeysBlur(value) {
        this.$12_0 = value;
        return value;
    },
    get_progressImageUrl: function SP_UI_ComboBox_SPComboInfo$get_progressImageUrl() {
        return this.$1U_0;
    },
    set_progressImageUrl: function SP_UI_ComboBox_SPComboInfo$set_progressImageUrl(value) {
        this.$1U_0 = value;
        return value;
    },
    get_itemFocusCallback: function SP_UI_ComboBox_SPComboInfo$get_itemFocusCallback() {
        return this.$15_0;
    },
    set_itemFocusCallback: function SP_UI_ComboBox_SPComboInfo$set_itemFocusCallback(value) {
        this.$15_0 = value;
        return value;
    },
    get_dropdownStateCallback: function SP_UI_ComboBox_SPComboInfo$get_dropdownStateCallback() {
        return this.$x_0;
    },
    set_dropdownStateCallback: function SP_UI_ComboBox_SPComboInfo$set_dropdownStateCallback(value) {
        this.$x_0 = value;
        return value;
    },
    get_updateDataCallback: function SP_UI_ComboBox_SPComboInfo$get_updateDataCallback() {
        return this.$1Y_0;
    },
    set_updateDataCallback: function SP_UI_ComboBox_SPComboInfo$set_updateDataCallback(value) {
        this.$1Y_0 = value;
        return value;
    },
    get_getDataCallback: function SP_UI_ComboBox_SPComboInfo$get_getDataCallback() {
        return this.$1Q_0;
    },
    set_getDataCallback: function SP_UI_ComboBox_SPComboInfo$set_getDataCallback(value) {
        this.$1Q_0 = value;
        return value;
    },
    get_firstColumn: function SP_UI_ComboBox_SPComboInfo$get_firstColumn() {
        if (this.$d_0 < 0) {
            if (!this.$1L_0) {
                this.$d_0 = 0;
            }
            else {
                var $v_0 = this.$2A_0(-1);

                for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                    if ($v_0[$v_1]) {
                        this.$d_0 = $v_1;
                        break;
                    }
                }
                this.$A_0 = null;
            }
            if (this.$d_0 < 0 || this.$d_0 >= this.$Q_0) {
                this.$d_0 = 0;
            }
        }
        return this.$d_0;
    },
    $2A_0: function SP_UI_ComboBox_SPComboInfo$$2A_0($p0) {
        if (!this.$A_0) {
            var $v_0 = this.$1L_0;

            if (!$v_0) {
                $v_0 = '';
            }
            if ($v_0.endsWith(',')) {
                $v_0 = $v_0.substr(0, $v_0.length - 1);
            }
            var $v_1 = $p0 >= 0;
            var $v_2 = 0;
            var $v_3 = $v_0.split(',');

            this.$A_0 = new Array(this.$Q_0);
            var $v_4 = 0;
            var $v_5 = -1;

            for (var $v_6 = this.$Q_0 - 1; $v_6 >= 0; $v_6--) {
                if ($v_6 < $v_3.length && !SP.UI.ComboBox.Helper.$j($v_3[$v_6])) {
                    this.$A_0[$v_6] = parseInt($v_3[$v_6]);
                    if (isNaN(this.$A_0[$v_6])) {
                        this.$A_0[$v_6] = -1;
                    }
                }
                else {
                    this.$A_0[$v_6] = -1;
                }
                if (this.$A_0[$v_6] < 0) {
                    $v_2++;
                }
                else if (this.$A_0[$v_6] > 0) {
                    $p0 -= this.$A_0[$v_6];
                    this.$A_0[$v_6] -= $v_4 + 8;
                    if (!$v_6 && !this.$X_0) {
                        this.$A_0[$v_6] -= 4;
                    }
                    if ($v_6 === this.$Q_0 - 1) {
                        this.$A_0[$v_6] -= 4;
                    }
                    if (this.$A_0[$v_6] <= 0) {
                        this.$A_0[$v_6] = 1;
                    }
                    if ($v_5 < 0) {
                        $v_5 = $v_6;
                    }
                }
                $v_4 = 1;
            }
            if ($v_1 && this.$Q_0 > 0) {
                if ($v_2 > 0) {
                    var $v_7 = $p0 / $v_2 - 8;

                    $v_4 = 0;
                    for (var $v_8 = this.$Q_0 - 1; $v_8 >= 0; $v_8--) {
                        if (this.$A_0[$v_8] < 0) {
                            this.$A_0[$v_8] = $v_7 - $v_4;
                            if (!$v_8 && !this.$X_0) {
                                this.$A_0[$v_8] -= 4;
                            }
                            if ($v_8 === this.$Q_0 - 1) {
                                this.$A_0[$v_8] -= 4;
                            }
                            if (this.$A_0[$v_8] <= 0) {
                                this.$A_0[$v_8] = 1;
                            }
                        }
                        $v_4 = 1;
                    }
                }
                else if ($p0 > 0 && $v_5 > 0) {
                    this.$A_0[$v_5] += $p0;
                }
            }
        }
        return this.$A_0;
    },
    $2k_0: function SP_UI_ComboBox_SPComboInfo$$2k_0() {
        this.$A_0 = null;
    }
};
SP.UI.ComboBox.ComboOption = function SP_UI_ComboBox_ComboOption($p0, $p1) {
    this.$F_0 = $p1;
    this.$T_0 = $p0;
};
SP.UI.ComboBox.ComboOption.prototype = {
    $F_0: null,
    $T_0: null,
    $c_0: false
};
SP.UI.ComboBox.ComboPanel = function SP_UI_ComboBox_ComboPanel($p0, $p1, $p2) {
    this.$$d_$2o_0 = Function.createDelegate(this, this.$2o_0);
    this.$$d_$2w_0 = Function.createDelegate(this, this.$2w_0);
    this.$$d_$2x_0 = Function.createDelegate(this, this.$2x_0);
    this.$$d_$2N_0 = Function.createDelegate(this, this.$2N_0);
    this.$$d_$2y_0 = Function.createDelegate(this, this.$2y_0);
    this.$$d_$2p_0 = Function.createDelegate(this, this.$2p_0);
    this.$$d_$2M_0 = Function.createDelegate(this, this.$2M_0);
    this.$$d_$2g_0 = Function.createDelegate(this, this.$2g_0);
    this.$$d_$3E_0 = Function.createDelegate(this, this.$3E_0);
    this.$$d_$2c_0 = Function.createDelegate(this, this.$2c_0);
    this.$$d_$1m_0 = Function.createDelegate(this, this.$1m_0);
    this.$$d_$2t_0 = Function.createDelegate(this, this.$2t_0);
    this.$$d_$2q_0 = Function.createDelegate(this, this.$2q_0);
    this.$C_0 = new Sys.EventHandlerList();
    this.$D_0 = $p0;
    this.$24_0 = $p1;
    this.$k_0 = $p0.$B_0;
    this.$1_0 = $p2;
    this.$J_0 = -1;
};
SP.UI.ComboBox.ComboPanel.$2e = function SP_UI_ComboBox_ComboPanel$$2e($p0) {
    return $p0.rowIndex;
};
SP.UI.ComboBox.ComboPanel.prototype = {
    $6_0: null,
    $J_0: 0,
    $1B_0: false,
    $8_0: null,
    $24_0: false,
    $9_0: null,
    $k_0: null,
    $R_0: null,
    $3_0: null,
    $G_0: null,
    $L_0: null,
    $N_0: null,
    $H_0: null,
    $b_0: null,
    $h_0: null,
    $Z_0: null,
    $e_0: null,
    $17_0: null,
    $w_0: false,
    $1_0: null,
    $4_0: null,
    $D_0: null,
    $1E_0: 0,
    $1F_0: 0,
    $1D_0: 0,
    $1R_0: false,
    $z_0: false,
    $2K_0: 0,
    get_$1M_0: function SP_UI_ComboBox_ComboPanel$get_$1M_0() {
        return this.$1_0;
    },
    set_$1M_0: function SP_UI_ComboBox_ComboPanel$set_$1M_0($p0) {
        this.$V_0();
        this.$1c_0();
        this.$13_0();
        this.$25_0();
        this.$1_0 = $p0;
        this.$1_0.$2k_0();
        this.$1T_0();
        this.$1m_0();
        return $p0;
    },
    add_$2J_0: function SP_UI_ComboBox_ComboPanel$add_$2J_0($p0) {
        this.$C_0.addHandler('PanelFocusChangeEvent_', $p0);
    },
    remove_$2J_0: function SP_UI_ComboBox_ComboPanel$remove_$2J_0($p0) {
        this.$C_0.removeHandler('PanelFocusChangeEvent_', $p0);
    },
    add_$30_0: function SP_UI_ComboBox_ComboPanel$add_$30_0($p0) {
        this.$C_0.addHandler('PanelGetContentEvent_', $p0);
    },
    remove_$30_0: function SP_UI_ComboBox_ComboPanel$remove_$30_0($p0) {
        this.$C_0.removeHandler('PanelGetContentEvent_', $p0);
    },
    add_$2O_0: function SP_UI_ComboBox_ComboPanel$add_$2O_0($p0) {
        this.$C_0.addHandler('PanelCheckOptionEvent', $p0);
    },
    remove_$2O_0: function SP_UI_ComboBox_ComboPanel$remove_$2O_0($p0) {
        this.$C_0.removeHandler('PanelCheckOptionEvent', $p0);
    },
    add_$31_0: function SP_UI_ComboBox_ComboPanel$add_$31_0($p0) {
        this.$C_0.addHandler('PanelOpenStateChangeEvent_', $p0);
    },
    remove_$31_0: function SP_UI_ComboBox_ComboPanel$remove_$31_0($p0) {
        this.$C_0.removeHandler('PanelOpenStateChangeEvent_', $p0);
    },
    get_$Y_0: function SP_UI_ComboBox_ComboPanel$get_$Y_0() {
        return SP.UI.ComboBox.Helper.$19(this.$9_0) && !!this.$4_0;
    },
    get_$a_0: function SP_UI_ComboBox_ComboPanel$get_$a_0() {
        return this.$4_0 === null;
    },
    get_$m_0: function SP_UI_ComboBox_ComboPanel$get_$m_0() {
        return this.$D_0.get_$m_0();
    },
    get_$1X_0: function SP_UI_ComboBox_ComboPanel$get_$1X_0() {
        return this.$8_0.tBodies[0];
    },
    get_$2T_0: function SP_UI_ComboBox_ComboPanel$get_$2T_0() {
        if (!this.$b_0) {
            this.$b_0 = new SP.UI.ComboBox.DomEventList(this.$8_0);
        }
        return this.$b_0;
    },
    get_$3G_0: function SP_UI_ComboBox_ComboPanel$get_$3G_0() {
        if (!this.$h_0 && this.$3_0) {
            this.$h_0 = new SP.UI.ComboBox.DomEventList(this.$3_0);
        }
        return this.$h_0;
    },
    get_$2W_0: function SP_UI_ComboBox_ComboPanel$get_$2W_0() {
        if (!this.$Z_0 && this.$N_0) {
            this.$Z_0 = new SP.UI.ComboBox.DomEventList(this.$N_0);
        }
        return this.$Z_0;
    },
    get_$39_0: function SP_UI_ComboBox_ComboPanel$get_$39_0() {
        if (!this.$e_0 && this.$H_0) {
            this.$e_0 = new SP.UI.ComboBox.DomEventList(this.$H_0);
        }
        return this.$e_0;
    },
    get_$2b_0: function SP_UI_ComboBox_ComboPanel$get_$2b_0() {
        return this.$D_0 === null;
    },
    get_$1y_0: function SP_UI_ComboBox_ComboPanel$get_$1y_0() {
        return !!this.$1_0.$1Y_0 && !this.$1_0.$r_0;
    },
    get_$2Q_0: function SP_UI_ComboBox_ComboPanel$get_$2Q_0() {
        var $v_0 = this.$1_0.$1o_0;
        var $v_1 = this.$k_0.offsetWidth;
        var $v_2 = $v_1;
        var $v_3 = true;

        if ($v_0 && !SP.UI.ComboBox.Helper.$1j($v_0, 'auto', true)) {
            $v_0 = $v_0.trim();
            $v_2 = parseInt($v_0);
            if ($v_2 < $v_1) {
                $v_2 = $v_1;
            }
            else {
                $v_3 = false;
            }
        }
        if ($v_3 && $v_2 > 2) {
            $v_2 -= 2;
        }
        return $v_2;
    },
    get_$21_0: function SP_UI_ComboBox_ComboPanel$get_$21_0() {
        var $v_0 = this.get_$2Q_0();

        if ($v_0 > 0) {
            return $v_0 + 'px';
        }
        else {
            return 'auto';
        }
    },
    get_$3A_0: function SP_UI_ComboBox_ComboPanel$get_$3A_0() {
        if (!this.$H_0) {
            this.$H_0 = document.createElement('a');
            this.$H_0.href = '#';
            this.$H_0.className = 'cb-err-link';
            (this.get_$39_0()).attach('click', this.$$d_$2q_0);
            this.$e_0.attach('keydown', this.$$d_$2t_0);
            this.$e_0.attach('focus', this.$D_0.$$d_$2r_0);
            this.$e_0.attach('blur', this.$D_0.$$d_$2n_0);
        }
        SP.UI.ComboBox.Helper.$1H(this.$H_0, SP.Res.getDataErrorRetry);
        return this.$H_0;
    },
    dispose: function SP_UI_ComboBox_ComboPanel$dispose() {
        this.$1c_0();
        this.$13_0();
        this.$D_0 = null;
        this.$14_0(true);
        if (this.$h_0) {
            this.$h_0.dispose();
            this.$h_0 = null;
        }
        if (this.$Z_0) {
            this.$Z_0.dispose();
            this.$Z_0 = null;
        }
        if (this.$e_0) {
            this.$e_0.dispose();
            this.$e_0 = null;
        }
        if (this.$N_0) {
            SP.UI.ComboBox.Helper.$M(this.$N_0);
            this.$N_0 = null;
        }
        if (this.$H_0) {
            if (this.$H_0.parentNode) {
                SP.UI.ComboBox.Helper.$M(this.$H_0);
            }
            this.$H_0 = null;
        }
        if (this.$3_0) {
            SP.UI.ComboBox.Helper.$M(this.$3_0);
            this.$3_0 = null;
        }
        if (this.$G_0) {
            SP.UI.ComboBox.Helper.$M(this.$G_0);
            this.$G_0 = null;
        }
        if (this.$L_0) {
            SP.UI.ComboBox.Helper.$M(this.$L_0);
            this.$L_0 = null;
        }
        this.$9_0 = null;
        this.$R_0 = null;
        this.$k_0 = null;
        this.$C_0 = null;
        if (this.$w_0) {
            SP.UI.ComboBox.DomEventList.detachHandler(document.body, 'mousedown', this.$17_0);
            this.$w_0 = false;
        }
        this.$17_0 = null;
        this.$1_0 = null;
        this.$4_0 = null;
        if (this.$6_0) {
            this.$6_0.$27_0();
            this.$6_0 = null;
        }
    },
    $F_0: function SP_UI_ComboBox_ComboPanel$$F_0() {
        if (!this.$1_0.$16_0) {
            if (!this.$9_0) {
                this.$2a_0();
            }
            if (SP.UI.ComboBox.Helper.$5(this.$4_0)) {
                this.$2L_0();
            }
            this.$1r_0();
            if (!this.get_$m_0()) {
                this.$9_0.style.zIndex = this.$1_0.$1J_0 + 1;
            }
            SP.UI.ComboBox.Helper.$1x(this.$9_0, true);
            this.$1G_0('PanelOpenStateChangeEvent_', this, true);
            if (this.$R_0) {
                this.$1u_0(this.$R_0);
            }
            if (this.$1_0.$x_0) {
                this.$1_0.$x_0(true);
            }
            if (!this.$w_0 && !this.get_$m_0()) {
                SP.UI.ComboBox.DomEventList.attachHandler(document.body, 'mousedown', this.$17_0);
                this.$w_0 = true;
            }
        }
    },
    $V_0: function SP_UI_ComboBox_ComboPanel$$V_0() {
        if (this.$w_0) {
            SP.UI.ComboBox.DomEventList.detachHandler(document.body, 'mousedown', this.$17_0);
            this.$w_0 = false;
        }
        if (!this.get_$m_0() && this.$9_0 && SP.UI.ComboBox.Helper.$19(this.$9_0)) {
            SP.UI.ComboBox.Helper.$1x(this.$9_0, false);
            this.$9_0.style.zIndex = this.$1_0.$1J_0;
            this.$1G_0('PanelOpenStateChangeEvent_', this, false);
            if (this.$1_0 && this.$1_0.$x_0) {
                this.$1_0.$x_0(false);
            }
        }
    },
    $1I_0: function SP_UI_ComboBox_ComboPanel$$1I_0($p0) {
        if (!this.$1_0.$1t_0 && SP.UI.ComboBox.Helper.$j($p0)) {
            return true;
        }
        if (!this.get_$a_0() && !this.$1R_0 && this.$1_0.$1S_0 && !this.$1O_0($p0, true)) {
            return false;
        }
        return true;
    },
    $2w_0: function SP_UI_ComboBox_ComboPanel$$2w_0($p0) {
        if ($p0.keyCode === 9) {
            $p0.stopPropagation();
            return;
        }
        (this.$D_0.get_focusElement()).focus();
        switch ($p0.keyCode) {
        case 13:
        case 32:
            this.$2N_0($p0);
            break;
        default:
            if (this.$D_0.get_focusElement() !== this.$9_0) {
                this.$D_0.$1q_0($p0);
            }
            break;
        }
    },
    $2N_0: function SP_UI_ComboBox_ComboPanel$$2N_0($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
        this.$V_0();
        this.$1_0.$1Y_0(this.$4_0, this.$$d_$1m_0);
    },
    $2x_0: function SP_UI_ComboBox_ComboPanel$$2x_0($p0) {
        $p0.stopPropagation();
    },
    $2y_0: function SP_UI_ComboBox_ComboPanel$$2y_0($p0) {
        if (this.$L_0) {
            this.$L_0.scrollLeft = this.$3_0.scrollLeft;
            if (this.$L_0.clientWidth > this.$3_0.clientWidth) {
                var $v_0 = this.$G_0.rows[0];
                var $v_1 = $v_0.lastChild.firstChild;

                if (!$v_1.style.width) {
                    $v_1.style.width = ($v_1.offsetWidth + this.$L_0.clientWidth - this.$3_0.clientWidth).toString() + 'px';
                }
            }
        }
    },
    $2p_0: function SP_UI_ComboBox_ComboPanel$$2p_0($p0) {
        if (this.$1_0.$r_0 || this.get_$a_0()) {
            return;
        }
        var $v_0 = this.$2E_0($p0);

        if ($v_0) {
            var $v_1 = SP.UI.ComboBox.ComboPanel.$2e($v_0);

            this.$g_0($v_1);
            if (this.$1_0.$X_0) {
                this.$2U_0();
            }
        }
        if (!this.$1_0.$X_0) {
            this.$V_0();
        }
    },
    $2M_0: function SP_UI_ComboBox_ComboPanel$$2M_0($p0) {
        if (this.$1_0.$r_0 || this.get_$a_0()) {
            return;
        }
        var $v_0 = this.$2E_0($p0);

        if ($v_0 && !this.get_$m_0()) {
            this.$2H_0($v_0);
        }
    },
    $2o_0: function SP_UI_ComboBox_ComboPanel$$2o_0($p0) {
        var $v_0 = $p0.target;

        while ($v_0) {
            if ($v_0 === this.$k_0 || $v_0 === this.$9_0) {
                return;
            }
            $v_0 = $v_0.parentNode;
        }
        this.$V_0();
        $p0.preventDefault();
        $p0.stopPropagation();
    },
    $2L_0: function SP_UI_ComboBox_ComboPanel$$2L_0() {
        if (this.$1B_0 || this.$4_0) {
            return;
        }
        this.$1c_0();
        var $$t_0 = this;

        this.$1E_0 = window.setTimeout(function() {
            $$t_0.$1E_0 = 0;
            if ($$t_0.$1_0.$1Q_0) {
                $$t_0.$1B_0 = true;
                $$t_0.$1_0.$1Q_0($$t_0.$$d_$2c_0, 0, 500);
            }
        }, 0);
        this.$13_0();
        this.$1F_0 = window.setTimeout(this.$$d_$3E_0, 1000);
    },
    $2U_0: function SP_UI_ComboBox_ComboPanel$$2U_0() {
        if (!this.get_$a_0() && this.$R_0) {
            var $v_0 = this.$R_0.childNodes[0].childNodes[0];
            var $v_1 = this.$6_0.$2D_0(this.$J_0);

            $v_1.$c_0 = !$v_1.$c_0;
            this.$1w_0($v_0, $v_1, true);
        }
    },
    $1m_0: function SP_UI_ComboBox_ComboPanel$$1m_0() {
        this.$14_0(false);
        if (this.$6_0) {
            this.$6_0.$27_0();
            this.$6_0 = null;
        }
        this.$4_0 = null;
        this.$1B_0 = false;
        this.$z_0 = false;
        this.$13_0();
        if (this.get_$m_0() && !this.$1_0.$16_0) {
            this.$F_0();
        }
    },
    $3E_0: function SP_UI_ComboBox_ComboPanel$$3E_0() {
        this.$1F_0 = 0;
        this.$14_0(false);
        var $v_0 = this.$8_0.insertRow(-1);
        var $v_1 = document.createElement('img');

        $v_1.src = !this.$1_0.$1U_0 ? SP.Utilities.Utility.get_layoutsLatestVersionUrl() + 'images/progress-circle-24.gif' : this.$1_0.$1U_0;
        $v_1.className = 'cb-progress-img';
        $v_1.alt = SP.Res.dropdownLoading;
        var $v_2 = document.createElement('span');

        $v_2.className = 'cb-progress-text';
        SP.UI.ComboBox.Helper.$1H($v_2, SP.Res.dropdownLoading);
        var $v_3 = $v_0.insertCell(-1);

        $v_3.className = 'cb-progress-cell';
        $v_3.style.width = this.get_$21_0();
        $v_3.appendChild($v_1);
        $v_3.appendChild($v_2);
        if (SP.UI.ComboBox.Helper.$2I()) {
            this.$z_0 = false;
            this.$1r_0();
        }
    },
    $2j_0: function SP_UI_ComboBox_ComboPanel$$2j_0() {
        this.$14_0(false);
        var $v_0 = this.$8_0.insertRow(-1);
        var $v_1 = document.createElement('span');

        $v_1.className = 'cb-retry-text';
        $v_1.style.whiteSpace = 'normal';
        SP.UI.ComboBox.Helper.$1H($v_1, SP.Res.getDataError);
        var $v_2 = $v_0.insertCell(-1);

        $v_2.className = 'cb-retry-cell';
        $v_2.style.width = this.get_$21_0();
        $v_2.style.lineHeight = '';
        $v_2.appendChild($v_1);
        $v_2.appendChild(this.get_$3A_0());
    },
    $2c_0: function SP_UI_ComboBox_ComboPanel$$2c_0($p0, $p1, $p2, $p3) {
        if (!this.$1B_0) {
            return;
        }
        this.$1B_0 = false;
        this.$1R_0 = $p2;
        this.$13_0();
        if (!this.get_$2b_0()) {
            if ($p3) {
                this.$2j_0();
                return;
            }
            if (SP.UI.ComboBox.Helper.$5($p0)) {
                $p0 = new Array(0);
            }
            this.$4_0 = $p0;
            this.$14_0(false);
            this.$z_0 = false;
            SP.UI.ComboBox.Helper.$M(this.$8_0);
            try {
                var $v_0;
                var $v_1 = null;

                if (this.$1_0.$u_0 && this.$4_0.length > 0) {
                    var $v_2 = null;

                    if ($p1) {
                        $v_2 = $p1[0];
                        $p1.splice(0, 1);
                    }
                    $v_0 = this.$G_0.insertRow(-1);
                    $v_1 = this.$4_0[0];
                    this.$1Z_0($v_0, $v_1, $v_2, true);
                    this.$4_0.splice(0, 1);
                }
                if (this.$1_0.$X_0) {
                    var $v_3 = new Array(this.$4_0.length);

                    for (var $v_4 = 0; $v_4 < this.$4_0.length; $v_4++) {
                        $v_3[$v_4] = this.$1e_0($v_4);
                    }
                    this.$6_0 = new SP.UI.ComboBox.OptionList($v_3, this.$1_0.get_firstColumn(), this.$1_0.get_separatorCharacters());
                }
                for (var $v_5 = 0; $v_5 < this.$4_0.length; $v_5++) {
                    var $v_6 = !$p1 ? null : $p1[$v_5];

                    $v_0 = this.$8_0.insertRow(-1);
                    $v_0.className = 'cb-dp-rw';
                    this.$1Z_0($v_0, this.$4_0[$v_5], $v_6, false);
                }
                this.$N_0.style.display = this.get_$1y_0() ? 'block' : '';
                if (!this.$4_0.length && $v_1) {
                    $v_0 = this.$8_0.insertRow(-1);
                    $v_0.style.visibility = 'hidden';
                    this.$3_0.style.overflowY = 'hidden';
                    this.$1Z_0($v_0, new Array($v_1.length), null, false);
                }
                if ($p2) {
                    var $v_7 = this.$8_0.createTFoot();
                    var $v_8 = $v_7.insertRow(-1);
                    var $v_9 = $v_8.insertCell(-1);

                    $v_9.className = 'combobox-dropdown-foot';
                    $v_9.colSpan = this.$1_0.$Q_0 + 2;
                    SP.UI.ComboBox.Helper.$1H($v_9, SP.Res.moreItems);
                }
            }
            finally {
                this.$3_0.appendChild(this.$8_0);
            }
            this.$1r_0();
            this.$1G_0('PanelGetContentEvent_', null, Sys.EventArgs.Empty);
        }
    },
    $1r_0: function SP_UI_ComboBox_ComboPanel$$1r_0() {
        var $v_0 = this.$1_0.$1d_0;

        if ($v_0 && $v_0.scrollTop !== this.$2K_0) {
            this.$z_0 = false;
            this.$2K_0 = $v_0.scrollTop;
        }
        if (this.$z_0) {
            return;
        }
        this.$z_0 = true;
        var $v_1 = SP.UI.ComboBox.Helper.$1P(this.$k_0);
        var $v_2 = false;
        var $v_3 = SP.UI.ComboBox.Helper.$2I();
        var $v_4 = (SP.UI.ComboBox.Helper.$2C(this.$9_0)).y;
        var $v_5 = this.get_$1y_0() ? 21 : 0;
        var $v_6 = !this.$L_0 ? 0 : Math.max(this.$L_0.offsetHeight, this.$L_0.clientHeight);

        if ((!$v_4 || $v_3) && !this.get_$a_0()) {
            var $v_7 = parseInt($v_1.fontSize);

            $v_6 = Math.round(this.$1_0.$u_0 ? 1.25 * ($v_7 + 8) : 0);
            if ($v_3 && this.$3_0.scrollHeight > 0) {
                $v_4 = this.$3_0.scrollHeight;
            }
            else {
                $v_4 = Math.round(this.$4_0.length * 1.25 * ($v_7 + 8));
            }
            $v_4 = Math.min(300, $v_4 + $v_5 + $v_6);
        }
        else if ($v_3 && this.$3_0.scrollHeight > 0) {
            $v_4 = this.$3_0.scrollHeight;
        }
        if (this.$24_0) {
            var $v_8 = this.$3_0.scrollHeight > 0 && this.$3_0.clientHeight > 0 && this.$3_0.scrollHeight > this.$3_0.clientHeight;

            if ($v_8 && this.$3_0.scrollHeight + $v_6 + $v_5 > $v_4) {
                $v_4 = Math.min(this.$3_0.scrollHeight + $v_6 + $v_5, 300);
            }
            if (!this.$1_0.$1A_0) {
                this.$9_0.style.width = this.get_$21_0();
            }
            else {
                this.$9_0.style.maxWidth = this.$1_0.$1A_0 + 'px';
                this.$k_0.style.minWidth = this.$1_0.$1n_0 + 'px';
                this.$k_0.style.width = 'auto';
            }
            if (this.$1_0.$f_0) {
                var $v_D = -parseInt($v_1.paddingRight) - parseInt($v_1.borderRightWidth);

                if (!isNaN($v_D)) {
                    this.$9_0.style.marginRight = $v_D + 'px';
                }
            }
            else {
                var $v_E = -parseInt($v_1.paddingLeft) - parseInt($v_1.borderLeftWidth);

                if (!isNaN($v_E)) {
                    this.$9_0.style.marginLeft = $v_E + 'px';
                }
            }
            var $v_9 = this.$1_0.$1k_0;
            var $v_A = Sys.UI.DomElement.getBounds(this.$k_0);

            if (!$v_9 && $v_0) {
                $v_9 = {};
                var $v_F = Sys.UI.DomElement.getBounds($v_0);

                $v_9.top = $v_A.y - $v_F.y;
                $v_9.bottom = $v_F.y + $v_F.height - ($v_A.y + $v_A.height);
            }
            var $v_B;

            if ($v_9) {
                if ($v_9.bottom < $v_4 && $v_9.top > $v_9.bottom) {
                    $v_2 = true;
                    $v_B = $v_9.top;
                }
                else {
                    $v_B = $v_9.bottom;
                }
            }
            else {
                var $v_G = (SP.UI.ComboBox.Helper.$2i()).y;
                var $v_H = (SP.UI.ComboBox.Helper.$2h()).y;

                $v_2 = $v_A.y + $v_A.height + $v_4 > $v_G + $v_H && $v_A.y - $v_4 > $v_H;
                if ($v_2) {
                    $v_B = $v_A.y - $v_H;
                }
                else {
                    $v_B = $v_G + $v_H - ($v_A.y + $v_A.height);
                }
            }
            $v_B -= 1;
            $v_4 = Math.min($v_4, $v_B);
            var $v_C;

            if ($v_2) {
                $v_C = -$v_A.height - $v_4 - 1 - 2;
            }
            else {
                $v_C = parseInt($v_1.borderTopWidth) + 1;
            }
            if (!isNaN($v_C)) {
                this.$9_0.style.top = $v_C + 'px';
            }
        }
        $v_4 -= $v_6;
        $v_4 -= $v_5;
        if ($v_4 > 0) {
            this.$3_0.style.height = $v_4.toString() + 'px';
        }
        else {
            this.$3_0.style.height = 'auto';
        }
        this.$25_0();
        if ($v_3 && !this.get_$m_0() && this.$3_0.scrollWidth <= this.$3_0.clientWidth) {
            this.$1D_0 = window.setTimeout(this.$$d_$2g_0, 0);
        }
    },
    $2g_0: function SP_UI_ComboBox_ComboPanel$$2g_0() {
        this.$1D_0 = 0;
        if (this.$3_0 && this.$3_0.scrollWidth > this.$3_0.clientWidth) {
            this.$3_0.style.height = this.$3_0.offsetHeight + SP.UI.ComboBox.Helper.$2F() + 'px';
            var $v_0 = parseInt(this.$9_0.style.top);

            if ($v_0 < 0) {
                this.$9_0.style.top = $v_0 - SP.UI.ComboBox.Helper.$2F() + 'px';
            }
        }
    },
    $1Z_0: function SP_UI_ComboBox_ComboPanel$$1Z_0($p0, $p1, $p2, $p3) {
        var $v_0 = null;
        var $v_1;
        var $v_2 = this.get_$2Q_0();
        var $v_3 = this.$1_0.$2A_0($v_2);
        var $v_4 = Math.min($p1.length, this.$1_0.$Q_0);

        if (this.$1_0.$X_0) {
            this.$2V_0($p0, $p3);
        }
        var $v_5 = $p3 ? 'combobox-dropdown-hdrcell' : 'combobox-dropdown-cell';
        var $v_6 = 'ltr';

        if (this.$1_0.$f_0) {
            $v_5 += ' cb-td-rtl';
            $v_6 = 'rtl';
        }
        var $v_7 = 0;

        for (var $v_8 = 0; $v_8 < $v_4; $v_8++) {
            if ($v_3[$v_8] > 0) {
                $v_7++;
            }
        }
        for (var $v_9 = 0; $v_9 < $v_4; $v_9++) {
            if ($p2) {
                $v_0 = $p0.insertCell(-1);
                $v_0.appendChild($p2[$v_9]);
            }
            else {
                if ($v_3[$v_9] > 0) {
                    var $v_A = document.createElement('span');

                    $v_A.style.whiteSpace = 'nowrap';
                    $v_0 = $p0.insertCell(-1);
                    $v_0.className = $v_5;
                    $v_1 = document.createElement('div');
                    if (!SP.UI.ComboBox.Helper.$5($p1[$v_9])) {
                        SP.UI.ComboBox.Helper.$1H($v_A, $p1[$v_9].toString());
                    }
                    else {
                        $v_1.style.height = '1em';
                    }
                    $v_1.appendChild($v_A);
                    $v_1.dir = $v_6;
                    $v_1.className = 'combobox-dropdown-celldiv';
                    if (!$v_9 && !this.$1_0.$X_0) {
                        Sys.UI.DomElement.addCssClass($v_1, 'cb-dp-celldiv-first');
                    }
                    if ($v_9 === $v_4 - 1) {
                        Sys.UI.DomElement.addCssClass($v_1, 'cb-dp-celldiv-last');
                    }
                    if ($v_7 > 1) {
                        $v_1.style.width = $v_3[$v_9] + 'px';
                    }
                    $v_0.appendChild($v_1);
                }
            }
        }
        if ($v_0) {
            if (this.$1_0.$f_0) {
                $v_0.style.borderLeftWidth = '0px';
            }
            else {
                $v_0.style.borderRightWidth = '0px';
            }
        }
    },
    $2V_0: function SP_UI_ComboBox_ComboPanel$$2V_0($p0, $p1) {
        var $v_0 = $p0.insertCell(-1);

        if (!$p1) {
            $v_0.className = 'combobox-dropdown-imgcell';
            var $v_1 = document.createElement('input');

            $v_1.type = 'checkbox';
            $v_1.tabIndex = -1;
            $v_0.appendChild($v_1);
            this.$1w_0($v_1, null, false);
        }
        else {
            $v_0.className = 'combobox-dropdown-imghdrcell';
        }
    },
    $2q_0: function SP_UI_ComboBox_ComboPanel$$2q_0($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
        this.$2L_0();
    },
    $2t_0: function SP_UI_ComboBox_ComboPanel$$2t_0($p0) {
        if ($p0.keyCode === 9) {
            $p0.stopPropagation();
            return;
        }
    },
    $2R_0: function SP_UI_ComboBox_ComboPanel$$2R_0($p0) {
        var $v_0 = this.$1l_0();

        if (SP.UI.ComboBox.Helper.$j($p0) || $v_0 && ($v_0.$T_0.toLowerCase()).startsWith($p0)) {
            return !$v_0 ? null : $v_0.$F_0;
        }
        var $v_1 = this.$J_0 >= 0 ? this.$J_0 : 0;
        var $v_2 = this.$4_0.length;
        var $v_3 = this.$1_0.get_firstColumn();

        while (true) {
            for (var $v_4 = $v_1; $v_4 < $v_2; $v_4++) {
                var $v_5 = SP.UI.ComboBox.Helper.$5(this.$4_0[$v_4][$v_3]) ? '' : this.$4_0[$v_4][$v_3].toString();

                if (($v_5.toLowerCase()).startsWith($p0)) {
                    if ((this.get_$1X_0()).childNodes[$v_4]) {
                        this.$3_0.scrollTop = (this.get_$1X_0()).childNodes[$v_4].offsetTop;
                        this.$g_0($v_4);
                        return $v_5;
                    }
                }
            }
            if ($v_1 > 0) {
                $v_1 = 0;
                $v_2 = this.$J_0;
            }
            else {
                break;
            }
        }
        this.$g_0(-1);
        return null;
    },
    $1l_0: function SP_UI_ComboBox_ComboPanel$$1l_0() {
        if (this.$4_0 && this.$J_0 >= 0 && this.$J_0 < this.$4_0.length) {
            return this.$1e_0(this.$J_0);
        }
        return null;
    },
    $1O_0: function SP_UI_ComboBox_ComboPanel$$1O_0($p0, $p1) {
        var $v_0 = null;

        if (this.$4_0) {
            var $v_1 = 0;

            if ($p1) {
                $p0 = $p0.toLowerCase();
                $v_1 = this.$1_0.get_firstColumn();
            }
            for (var $v_2 = 0; $v_2 < this.$4_0.length; $v_2++) {
                var $v_3 = SP.UI.ComboBox.Helper.$5(this.$4_0[$v_2][$v_1]) ? '' : this.$4_0[$v_2][$v_1].toString();

                if ($p1) {
                    $v_3 = $v_3.toLowerCase();
                }
                if ($v_3 === $p0) {
                    $v_0 = this.$1e_0($v_2);
                    break;
                }
            }
        }
        return $v_0;
    },
    $1p_0: function SP_UI_ComboBox_ComboPanel$$1p_0($p0) {
        var $v_0 = 0;
        var $v_1 = false;

        if (this.$4_0) {
            for ($v_0 = 0; $v_0 < this.$4_0.length; $v_0++) {
                if ($p0 === (SP.UI.ComboBox.Helper.$5(this.$4_0[$v_0][0]) ? '' : this.$4_0[$v_0][0].toString())) {
                    $v_1 = true;
                    break;
                }
            }
        }
        if ($v_1) {
            this.$g_0($v_0);
        }
        else {
            this.$g_0(-1);
        }
    },
    $2l_0: function SP_UI_ComboBox_ComboPanel$$2l_0() {
        if (this.$J_0 < this.$4_0.length - 1) {
            this.$g_0(this.$J_0 + 1);
        }
        else if (this.$4_0.length > 0) {
            this.$g_0(0);
        }
    },
    $2m_0: function SP_UI_ComboBox_ComboPanel$$2m_0() {
        if (this.$J_0 > 0) {
            this.$g_0(this.$J_0 - 1);
        }
        else if (this.$4_0.length > 0) {
            this.$g_0(this.$4_0.length - 1);
        }
    },
    $2u_0: function SP_UI_ComboBox_ComboPanel$$2u_0() {
        if (this.get_$a_0() && this.$H_0 && SP.UI.ComboBox.Helper.$19(this.$9_0) && SP.UI.ComboBox.Helper.$19(this.$H_0)) {
            try {
                this.$H_0.focus();
                return true;
            }
            catch ($$e_0) { }
        }
        if (this.get_$Y_0() && this.get_$1y_0()) {
            this.$N_0.focus();
            return true;
        }
        return false;
    },
    $20_0: function SP_UI_ComboBox_ComboPanel$$20_0($p0) {
        if (this.$6_0) {
            this.$6_0.$32_0($p0);
            for (var $v_0 = 0; $v_0 < this.$4_0.length; $v_0++) {
                var $v_1 = this.$8_0.rows[$v_0].childNodes[0].childNodes[0];

                this.$1w_0($v_1, this.$6_0.$2D_0($v_0), false);
            }
        }
    },
    $14_0: function SP_UI_ComboBox_ComboPanel$$14_0($p0) {
        this.$J_0 = -1;
        this.$R_0 = null;
        if (this.$8_0) {
            this.$8_0.deleteTHead(-1);
            this.$8_0.deleteTFoot(-1);
            while (this.$8_0.rows.length > 0) {
                this.$8_0.deleteRow(-1);
            }
            if (this.$G_0) {
                while (this.$G_0.rows.length > 0) {
                    this.$G_0.deleteRow(-1);
                }
            }
            if ($p0) {
                if (this.$b_0) {
                    this.$b_0.dispose();
                    this.$b_0 = null;
                }
                SP.UI.ComboBox.Helper.$M(this.$8_0);
                this.$8_0 = null;
            }
            if (this.$H_0 && this.$H_0.parentNode) {
                SP.UI.ComboBox.Helper.$M(this.$H_0);
            }
        }
    },
    $3D_0: function SP_UI_ComboBox_ComboPanel$$3D_0() {
        this.$8_0 = document.createElement('table');
        this.$8_0.cellSpacing = 0;
        this.$8_0.cellPadding = 0;
        this.$8_0.className = 'combobox-panel-table';
        if (!this.$D_0.get_$n_0()) {
            (this.get_$2T_0()).attach('mousedown', this.$$d_$2M_0);
            (this.get_$2T_0()).attach('click', this.$$d_$2p_0);
            this.$b_0.attach('keydown', this.$D_0.$$d_$1q_0);
            this.$b_0.attach('focus', this.$D_0.$$d_$2r_0);
            this.$b_0.attach('blur', this.$D_0.$$d_$2n_0);
            if (this.$1_0.$X_0) {
                this.$b_0.attach('keypress', this.$D_0.$$d_$2s_0);
            }
        }
        this.$3_0.appendChild(this.$8_0);
    },
    $1e_0: function SP_UI_ComboBox_ComboPanel$$1e_0($p0) {
        var $v_0 = this.$1_0.get_firstColumn();
        var $v_1 = this.$4_0[$p0];

        return new SP.UI.ComboBox.ComboOption(SP.UI.ComboBox.Helper.$5($v_1[0]) ? '' : $v_1[0].toString(), SP.UI.ComboBox.Helper.$5($v_1[$v_0]) ? '' : $v_1[$v_0].toString());
    },
    $1u_0: function SP_UI_ComboBox_ComboPanel$$1u_0($p0) {
        if ($p0.offsetTop < this.$3_0.scrollTop) {
            this.$3_0.scrollTop = $p0.offsetTop;
        }
        else if ($p0.offsetTop + $p0.offsetHeight > this.$3_0.scrollTop + this.$3_0.clientHeight) {
            this.$3_0.scrollTop = $p0.offsetTop + $p0.offsetHeight - this.$3_0.clientHeight;
        }
    },
    $1T_0: function SP_UI_ComboBox_ComboPanel$$1T_0() {
        if (!this.$9_0) {
            return;
        }
        var $v_0 = this.$1_0;

        if (this.$8_0) {
            this.$8_0.className = 'combobox-panel-table';
            if ($v_0 && $v_0.$l_0) {
                Sys.UI.DomElement.addCssClass(this.$8_0, $v_0.$l_0);
            }
        }
        this.$2S_0();
        var $v_1 = !$v_0 ? 0 : $v_0.$1J_0;

        this.$9_0.style.zIndex = $v_1;
        if (this.get_$Y_0() && $v_0 && $v_0.$16_0) {
            this.$V_0();
        }
    },
    $g_0: function SP_UI_ComboBox_ComboPanel$$g_0($p0) {
        if (!this.get_$a_0() && $p0 !== this.$J_0) {
            var $v_0 = this.$R_0;

            if ($p0 < 0) {
                this.$J_0 = -1;
                this.$R_0 = null;
            }
            else if ((this.get_$1X_0()).childNodes[$p0]) {
                this.$J_0 = $p0;
                this.$R_0 = (this.get_$1X_0()).childNodes[$p0];
                this.$1u_0(this.$R_0);
            }
            if (this.$1_0.$15_0) {
                this.$1_0.$15_0($v_0, this.$R_0);
            }
            else {
                this.$2H_0(this.$R_0);
            }
            this.$34_0();
        }
    },
    $2H_0: function SP_UI_ComboBox_ComboPanel$$2H_0($p0) {
        if (!this.get_$a_0() && !this.$1_0.$15_0) {
            var $v_0 = this.$8_0.rows;

            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                if ($v_0[$v_1] === $p0) {
                    Sys.UI.DomElement.addCssClass($v_0[$v_1], 'cb-dp-highlight');
                    this.$1u_0($v_0[$v_1]);
                }
                else {
                    Sys.UI.DomElement.removeCssClass($v_0[$v_1], 'cb-dp-highlight');
                }
            }
        }
    },
    $1w_0: function SP_UI_ComboBox_ComboPanel$$1w_0($p0, $p1, $p2) {
        if (!$p1 || !$p1.$c_0 !== !$p0.checked) {
            var $v_0 = !$p1 ? false : $p1.$c_0;

            $p0.checked = $v_0;
            $p0.title = $v_0 ? SP.Res.uncheckAltText : SP.Res.checkAltText;
        }
        if ($p1) {
            this.$6_0.$2Y_0($p1);
        }
        if ($p2) {
            this.$1G_0('PanelCheckOptionEvent', $p1, Sys.EventArgs.Empty);
        }
    },
    $2S_0: function SP_UI_ComboBox_ComboPanel$$2S_0() {
        if (this.$1_0.$u_0 && !this.$G_0) {
            this.$G_0 = document.createElement('table');
            this.$G_0.cellSpacing = 0;
            this.$G_0.cellPadding = 0;
            this.$G_0.className = 'combobox-panel-table';
            if (this.$1_0.$l_0) {
                Sys.UI.DomElement.addCssClass(this.$G_0, this.$1_0.$l_0);
            }
            this.$L_0 = document.createElement('div');
            this.$L_0.className = 'combobox-headerwrapper';
            this.$L_0.appendChild(this.$G_0);
            this.$9_0.appendChild(this.$L_0);
        }
        else if (!this.$1_0.$u_0 && this.$G_0) {
            SP.UI.ComboBox.Helper.$M(this.$G_0);
            this.$G_0 = null;
            SP.UI.ComboBox.Helper.$M(this.$L_0);
            this.$L_0 = null;
        }
    },
    $34_0: function SP_UI_ComboBox_ComboPanel$$34_0() {
        this.$1G_0('PanelFocusChangeEvent_', this.$1l_0(), Sys.EventArgs.Empty);
    },
    $1G_0: function SP_UI_ComboBox_ComboPanel$$1G_0($p0, $p1, $p2) {
        var $v_0 = this.$C_0.getHandler($p0);

        if (!SP.UI.ComboBox.Helper.$5($v_0)) {
            $v_0($p1, $p2);
        }
    },
    $1c_0: function SP_UI_ComboBox_ComboPanel$$1c_0() {
        if (this.$1E_0) {
            window.clearTimeout(this.$1E_0);
            this.$1E_0 = 0;
        }
    },
    $13_0: function SP_UI_ComboBox_ComboPanel$$13_0() {
        if (this.$1F_0) {
            window.clearTimeout(this.$1F_0);
            this.$1F_0 = 0;
        }
    },
    $25_0: function SP_UI_ComboBox_ComboPanel$$25_0() {
        if (this.$1D_0) {
            window.clearTimeout(this.$1D_0);
            this.$1D_0 = 0;
        }
    },
    $2a_0: function SP_UI_ComboBox_ComboPanel$$2a_0() {
        this.$9_0 = this.$D_0.get_$2z_0();
        this.$3_0 = document.createElement('div');
        this.$3_0.className = 'combobox-tablewrapper';
        this.$2S_0();
        this.$3D_0();
        this.$9_0.appendChild(this.$3_0);
        (this.get_$3G_0()).attach('scroll', this.$$d_$2y_0);
        this.$h_0.attach('keydown', this.$D_0.$$d_$1q_0);
        this.$h_0.attach('focus', this.$D_0.$$d_$2r_0);
        this.$h_0.attach('blur', this.$D_0.$$d_$2n_0);
        this.$N_0 = document.createElement('a');
        this.$N_0.innerText = SP.Res.editListItems;
        this.$N_0.href = '#';
        this.$N_0.dir = this.$1_0.$f_0 ? 'rtl' : 'ltr';
        this.$N_0.className = 'combobox-link';
        this.$9_0.appendChild(this.$N_0);
        (this.get_$2W_0()).attach('click', this.$$d_$2N_0);
        this.$Z_0.attach('mousedown', this.$$d_$2x_0);
        this.$Z_0.attach('keydown', this.$$d_$2w_0);
        this.$Z_0.attach('focus', this.$D_0.$$d_$2r_0);
        this.$Z_0.attach('blur', this.$D_0.$$d_$2n_0);
        this.$17_0 = this.$$d_$2o_0;
        this.$1T_0();
    },
    $2E_0: function SP_UI_ComboBox_ComboPanel$$2E_0($p0) {
        var $v_0 = $p0.target;
        var $v_1 = null;

        while ($v_0 && $v_0 !== this.$8_0 && $v_0.parentNode) {
            if ($v_0.tagName.toLowerCase() === 'tr') {
                $v_1 = $v_0;
            }
            $v_0 = $v_0.parentNode;
        }
        if ($v_0 === this.$8_0 && $v_1) {
            return $v_1;
        }
        return null;
    }
};
SP.UI.ComboBox.ControlBase = function SP_UI_ComboBox_ControlBase(domElement) {
    SP.UI.ComboBox.ControlBase.initializeBase(this, [domElement]);
};
SP.UI.ComboBox.ControlBase.prototype = {
    $1h_2: null,
    dispose: function SP_UI_ComboBox_ControlBase$dispose() {
        try {
            if (this.$1h_2) {
                this.$1h_2.dispose();
                this.$1h_2 = null;
            }
        }
        finally {
            Sys.Component.prototype.dispose.call(this);
        }
    }
};
SP.UI.ComboBox.DomEventList = function SP_UI_ComboBox_DomEventList(element) {
    this.$p_0 = {};
    this.$o_0 = element;
};
SP.UI.ComboBox.DomEventList.attachHandler = function SP_UI_ComboBox_DomEventList$attachHandler(element, eventName, handler) {
    $addHandler(element, eventName, handler);
};
SP.UI.ComboBox.DomEventList.detachHandler = function SP_UI_ComboBox_DomEventList$detachHandler(element, eventName, handler) {
    $removeHandler(element, eventName, handler);
};
SP.UI.ComboBox.DomEventList.prototype = {
    $o_0: null,
    get_element: function SP_UI_ComboBox_DomEventList$get_element() {
        return this.$o_0;
    },
    attach: function SP_UI_ComboBox_DomEventList$attach(eventName, handler) {
        if (this.isAttached(eventName)) {
            var $v_0 = 'There is already an event handler attached to ' + eventName;

            throw Error.invalidOperation($v_0);
        }
        $addHandler(this.$o_0, eventName, handler);
        this.$p_0[eventName] = handler;
    },
    isAttached: function SP_UI_ComboBox_DomEventList$isAttached(eventName) {
        return !!this.$p_0[eventName];
    },
    detach: function SP_UI_ComboBox_DomEventList$detach(eventName) {
        var $v_0 = this.$p_0[eventName];

        if ($v_0) {
            delete this.$p_0[eventName];
            $removeHandler(this.$o_0, eventName, $v_0);
            return true;
        }
        return false;
    },
    dispose: function SP_UI_ComboBox_DomEventList$dispose() {
        if (this.$o_0) {
            var $$dict_0 = this.$p_0;

            for (var $$key_1 in $$dict_0) {
                var $v_0 = {
                    key: $$key_1,
                    value: $$dict_0[$$key_1]
                };

                $removeHandler(this.$o_0, $v_0.key, $v_0.value);
            }
            this.$o_0 = null;
            this.$p_0 = null;
        }
    }
};
SP.UI.ComboBox.Helper = function SP_UI_ComboBox_Helper() {
};
SP.UI.ComboBox.Helper.$1P = function SP_UI_ComboBox_Helper$$1P($p0) {
    var $v_0 = $p0.currentStyle;

    if (!SP.UI.ComboBox.Helper.$5($v_0)) {
        return $v_0;
    }
    else {
        var $v_1 = (eval('document')).defaultView;

        if (!SP.UI.ComboBox.Helper.$5($v_1) && !SP.UI.ComboBox.Helper.$5($v_1.getComputedStyle)) {
            $v_0 = $v_1.getComputedStyle($p0, null);
            if (!SP.UI.ComboBox.Helper.$5($v_0)) {
                return $v_0;
            }
        }
    }
    return $p0.style;
};
SP.UI.ComboBox.Helper.$2B = function SP_UI_ComboBox_Helper$$2B($p0, $p1, $p2) {
    var $v_0 = null;

    if (!SP.UI.ComboBox.Helper.$5($p0)) {
        var $v_1 = SP.UI.ComboBox.Helper.$1P($p0);

        if (!SP.UI.ComboBox.Helper.$5($v_1)) {
            $v_0 = $v_1[$p1];
        }
        if (SP.UI.ComboBox.Helper.$5($v_0) && !SP.UI.ComboBox.Helper.$5($p0.style.getPropertyValue)) {
            $v_0 = $p0.style.getPropertyValue($p1);
        }
        else if (SP.UI.ComboBox.Helper.$5($v_0) && !SP.UI.ComboBox.Helper.$5($p0.style.getAttribute)) {
            $v_0 = $p0.style.getAttribute($p1);
        }
    }
    if (SP.UI.ComboBox.Helper.$5($v_0) || $v_0 === '') {
        if (!SP.UI.ComboBox.Helper.$5($p2)) {
            $v_0 = $p2;
        }
        else {
            $v_0 = null;
        }
    }
    return $v_0;
};
SP.UI.ComboBox.Helper.$2h = function SP_UI_ComboBox_Helper$$2h() {
    var $v_0 = window.pageXOffset;
    var $v_1 = window.pageYOffset;

    if (typeof $v_0 !== 'number') {
        if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
            $v_0 = document.documentElement.scrollLeft;
            $v_1 = document.documentElement.scrollTop;
        }
        else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
            $v_0 = document.body.scrollLeft;
            $v_1 = document.body.scrollTop;
        }
        else {
            $v_0 = 0;
            $v_1 = 0;
        }
    }
    return new Sys.UI.Point($v_0, $v_1);
};
SP.UI.ComboBox.Helper.$2i = function SP_UI_ComboBox_Helper$$2i() {
    var $v_0 = window.innerHeight;
    var $v_1 = window.innerWidth;

    if (typeof $v_0 !== 'number') {
        if (document.documentElement && document.documentElement.clientHeight) {
            $v_0 = document.documentElement.clientHeight;
            $v_1 = document.documentElement.clientWidth;
        }
        else if (document.body) {
            $v_0 = document.body.clientHeight;
            $v_1 = document.body.clientWidth;
        }
        else {
            $v_0 = 0;
            $v_1 = 0;
        }
    }
    return new Sys.UI.Point($v_1, $v_0);
};
SP.UI.ComboBox.Helper.$2C = function SP_UI_ComboBox_Helper$$2C($p0) {
    var $v_0 = SP.UI.ComboBox.Helper.$1P($p0);
    var $v_1 = Math.floor($p0.clientHeight - parseFloat($v_0.paddingTop) - parseFloat($v_0.paddingBottom));
    var $v_2 = Math.floor($p0.clientWidth - parseFloat($v_0.paddingLeft) - parseFloat($v_0.paddingRight));

    return new Sys.UI.Point($v_2, $v_1);
};
SP.UI.ComboBox.Helper.$19 = function SP_UI_ComboBox_Helper$$19($p0) {
    return !SP.UI.ComboBox.Helper.$1j('none', SP.UI.ComboBox.Helper.$2B($p0, 'display', null), true) && !SP.UI.ComboBox.Helper.$1j('hidden', SP.UI.ComboBox.Helper.$2B($p0, 'visibility', null), true);
};
SP.UI.ComboBox.Helper.$1x = function SP_UI_ComboBox_Helper$$1x($p0, $p1) {
    if (SP.UI.ComboBox.Helper.$5($p0)) {
        return;
    }
    if ($p1 !== SP.UI.ComboBox.Helper.$19($p0)) {
        if ($p1) {
            if (!SP.UI.ComboBox.Helper.$5($p0.style.removeAttribute)) {
                $p0.style.removeAttribute('display');
            }
            else {
                $p0.style.removeProperty('display');
            }
        }
        else {
            $p0.style.display = 'none';
        }
        $p0.style.visibility = $p1 ? 'visible' : 'hidden';
    }
};
SP.UI.ComboBox.Helper.$1H = function SP_UI_ComboBox_Helper$$1H($p0, $p1) {
    if (document.createTextNode) {
        var $v_0 = document.createTextNode($p1);

        $p0.innerHTML = '';
        $p0.appendChild($v_0);
    }
    else {
        $p0.innerText = $p1;
    }
};
SP.UI.ComboBox.Helper.$2F = function SP_UI_ComboBox_Helper$$2F() {
    if (!SP.UI.ComboBox.Helper.$10) {
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
        SP.UI.ComboBox.Helper.$10 = $v_2 - $v_3;
        if (!SP.UI.ComboBox.Helper.$10) {
            SP.UI.ComboBox.Helper.$10 = 17;
        }
    }
    return SP.UI.ComboBox.Helper.$10;
};
SP.UI.ComboBox.Helper.$M = function SP_UI_ComboBox_Helper$$M($p0) {
    $p0.parentNode.removeChild($p0);
};
SP.UI.ComboBox.Helper.$3B = function SP_UI_ComboBox_Helper$$3B($p0, $p1, $p2, $p3) {
    var $v_0 = $p0.value;
    var $v_1 = new Sys.StringBuilder($v_0.substring(0, $p1));

    $v_1.append($p3);
    $v_1.append($v_0.substr($p2));
    $p0.value = $v_1.toString();
    if ($p0.createTextRange) {
        var $v_2 = $p0.createTextRange();

        $v_2.moveStart('character', $p1);
        $v_2.moveEnd('character', $p3.length);
        $v_2.select();
    }
    else if (!SP.UI.ComboBox.Helper.$5($p0.selectionStart) && !SP.UI.ComboBox.Helper.$5($p0.selectionEnd)) {
        $p0.selectionStart = $p1;
        $p0.selectionEnd = $p1 + $p3.length;
    }
};
SP.UI.ComboBox.Helper.$29 = function SP_UI_ComboBox_Helper$$29($p0) {
    var $v_0 = $p0.selectionStart;

    if (!SP.UI.ComboBox.Helper.$5($v_0)) {
        return $v_0;
    }
    else if (!SP.UI.ComboBox.Helper.$5(document.selection)) {
        return Math.abs((document.selection.createRange()).moveStart('character', -1000000));
    }
    return -1;
};
SP.UI.ComboBox.Helper.$2Z = function SP_UI_ComboBox_Helper$$2Z($p0, $p1, $p2) {
    if ($p2) {
        if ($p0) {
            $p0 = $p0.toUpperCase();
        }
        if ($p1) {
            $p1 = $p1.toUpperCase();
        }
    }
    $p0 = !$p0 ? '' : $p0;
    $p1 = !$p1 ? '' : $p1;
    if ($p0 === $p1) {
        return 0;
    }
    if ($p0 < $p1) {
        return -1;
    }
    return 1;
};
SP.UI.ComboBox.Helper.$1j = function SP_UI_ComboBox_Helper$$1j($p0, $p1, $p2) {
    return !SP.UI.ComboBox.Helper.$2Z($p0, $p1, $p2);
};
SP.UI.ComboBox.Helper.$j = function SP_UI_ComboBox_Helper$$j($p0) {
    return !$p0 || $p0 === '';
};
SP.UI.ComboBox.Helper.$5 = function SP_UI_ComboBox_Helper$$5($p0) {
    return $p0 === null || typeof $p0 === 'undefined';
};
SP.UI.ComboBox.Helper.$2I = function SP_UI_ComboBox_Helper$$2I() {
    return Sys.Browser.agent === Sys.Browser.InternetExplorer && (SP.UI.ComboBox.Helper.$5(document.documentMode) || document.documentMode < 8);
};
SP.UI.ComboBox.ListBox = function SP_UI_ComboBox_ListBox(controlId) {
    this.$$d_$2P_1 = Function.createDelegate(this, this.$2P_1);
    SP.UI.ComboBox.ListBox.initializeBase(this, [controlId]);
};
SP.UI.ComboBox.ListBox.prototype = {
    $q_1: null,
    get_focusElement: function SP_UI_ComboBox_ListBox$get_focusElement() {
        return this.$q_1;
    },
    get_$m_0: function SP_UI_ComboBox_ListBox$get_$m_0() {
        return true;
    },
    get_$2z_0: function SP_UI_ComboBox_ListBox$get_$2z_0() {
        return this.$B_0;
    },
    dispose: function SP_UI_ComboBox_ListBox$dispose() {
        SP.UI.ComboBox.Helper.$M(this.$q_1);
        this.$q_1 = null;
        SP.UI.ComboBox.ComboBox.prototype.dispose.call(this);
    },
    onSetValue: function SP_UI_ComboBox_ListBox$onSetValue() {
        this.$0_0.$1p_0(this.$E_0);
    },
    createElements: function SP_UI_ComboBox_ListBox$createElements(comboInfo) {
        Sys.UI.DomElement.addCssClass(this.$B_0, 'listbox-panel');
        this.$q_1 = document.createElement('input');
        this.$q_1.type = 'text';
        this.$q_1.className = 'listbox-hidden-input';
        this.$B_0.appendChild(this.$q_1);
    },
    init: function SP_UI_ComboBox_ListBox$init(originalValue, comboInfo) {
        SP.UI.ComboBox.ComboBox.prototype.init.call(this, originalValue, comboInfo);
        this.$0_0.add_$2J_0(this.$$d_$2P_1);
        this.$0_0.$F_0();
    },
    $2P_1: function SP_UI_ComboBox_ListBox$$2P_1($p0, $p1) {
        var $v_0 = $p0;

        if ($v_0 && this.$E_0 !== $v_0.$T_0) {
            this.$s_0($v_0.$T_0);
        }
    }
};
SP.UI.ComboBox.MultiComboBox = function SP_UI_ComboBox_MultiComboBox(controlId) {
    this.$$d_$1z_1 = Function.createDelegate(this, this.$1z_1);
    this.$$d_$36_1 = Function.createDelegate(this, this.$36_1);
    SP.UI.ComboBox.MultiComboBox.initializeBase(this, [controlId]);
};
SP.UI.ComboBox.MultiComboBox.prototype = {
    $11_1: null,
    $1a_1: false,
    dispose: function SP_UI_ComboBox_MultiComboBox$dispose() {
        if (this.$11_1) {
            this.$0_0.remove_$2O_0(this.$11_1);
            this.$11_1 = null;
        }
        SP.UI.ComboBox.ComboBox.prototype.dispose.call(this);
    },
    commit: function SP_UI_ComboBox_MultiComboBox$commit() {
        if (this.$0_0.$6_0) {
            if (!this.$0_0.$1R_0 || this.$1a_1) {
                this.$s_0(this.$0_0.$6_0.get_$3F_0());
            }
        }
    },
    onSetValue: function SP_UI_ComboBox_MultiComboBox$onSetValue() {
        this.$1a_1 = false;
        if (this.$0_0.$6_0) {
            this.$0_0.$20_0(this.$E_0);
            this.set_textBoxValue(this.$0_0.$6_0.get_$26_0());
        }
        else {
            this.set_textBoxValue(SP.UI.ComboBox.SPComboInfo.formatMultiValue(this.$E_0, ';#', (this.get_comboInfo()).get_separatorCharacters()));
        }
    },
    panelGetContentEventHandler: function SP_UI_ComboBox_MultiComboBox$panelGetContentEventHandler(sender, e) {
        this.$0_0.$20_0(this.$E_0);
    },
    init: function SP_UI_ComboBox_MultiComboBox$init(originalValue, comboInfo) {
        SP.UI.ComboBox.ComboBox.prototype.init.call(this, originalValue, comboInfo);
        this.$11_1 = this.$$d_$36_1;
        this.$0_0.add_$2O_0(this.$11_1);
    },
    $1q_0: function SP_UI_ComboBox_MultiComboBox$$1q_0($p0) {
        switch ($p0.keyCode) {
        case 8:
        case 127:
        case 46:
            if ((this.get_comboInfo()).$1K_0) {
                window.setTimeout(this.$$d_$1z_1, 0);
            }
            else {
                $p0.stopPropagation();
                $p0.preventDefault();
            }
            break;
        default:
            SP.UI.ComboBox.ComboBox.prototype.$1q_0.call(this, $p0);
            break;
        }
    },
    $2s_0: function SP_UI_ComboBox_MultiComboBox$$2s_0($p0) {
        switch ($p0.charCode) {
        case 13:
            this.$0_0.$V_0();
            break;
        case 32:
            if (this.$0_0.get_$Y_0() && !(this.get_comboInfo()).$r_0 && this.$0_0.$J_0 >= 0) {
                this.$0_0.$2U_0();
                $p0.stopPropagation();
                $p0.preventDefault();
            }
            break;
        default:
            if ((this.get_comboInfo()).$1K_0) {
                window.setTimeout(this.$$d_$1z_1, 0);
            }
            else {
                var $v_0 = !SP.UI.ComboBox.Helper.$5($p0.keyCode) ? $p0.keyCode : $p0.rawEvent.keyCode;

                if (!(SP.UI.ComboBox.ComboBox.get_nonDropdownStartingKeyChars())[$v_0]) {
                    if (!this.$0_0.get_$Y_0()) {
                        this.$0_0.$F_0();
                    }
                    $p0.stopPropagation();
                    $p0.preventDefault();
                }
            }
            break;
        }
    },
    $1z_1: function SP_UI_ComboBox_MultiComboBox$$1z_1() {
        if (this.get_disposed()) {
            return;
        }
        var $v_0 = this.$0_0.$6_0;

        if ($v_0) {
            var $v_1 = (this.get_textBoxValue()).split(((this.get_comboInfo()).get_separatorCharacters()).trim());
            var $v_2 = '';

            for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
                var $v_4 = $v_1[$v_3].trim();

                if ($v_4) {
                    if (this.get_isLookup()) {
                        var $v_5 = $v_0.$2d_0($v_4);

                        if ($v_5) {
                            $v_2 += ';#' + $v_5.$T_0;
                        }
                    }
                    else if (this.$0_0.$1I_0($v_4)) {
                        $v_2 += ';#' + $v_4;
                    }
                }
            }
            this.$0_0.$20_0($v_2);
        }
    },
    $36_1: function SP_UI_ComboBox_MultiComboBox$$36_1($p0, $p1) {
        this.$1a_1 = true;
        if (this.$0_0.get_$Y_0()) {
            if (this.$0_0.$6_0) {
                this.set_textBoxValue(this.$0_0.$6_0.get_$26_0());
            }
            this.selectText();
        }
    }
};
SP.UI.ComboBox.SingleComboBox = function SP_UI_ComboBox_SingleComboBox(controlId) {
    this.$$d_$1z_1 = Function.createDelegate(this, this.$1z_1);
    this.$$d_$2P_1 = Function.createDelegate(this, this.$2P_1);
    SP.UI.ComboBox.SingleComboBox.initializeBase(this, [controlId]);
};
SP.UI.ComboBox.SingleComboBox.prototype = {
    $P_1: '',
    $18_1: false,
    $1s_1: false,
    $W_1: null,
    dispose: function SP_UI_ComboBox_SingleComboBox$dispose() {
        SP.UI.ComboBox.ComboBox.prototype.dispose.call(this);
        this.$P_1 = null;
    },
    commit: function SP_UI_ComboBox_SingleComboBox$commit() {
        var $v_0 = this.get_textBoxValue();
        var $v_1 = this.$0_0.$1O_0(this.$E_0, false);

        if (this.$W_1 && this.$W_1.$F_0 !== $v_0) {
            this.$W_1 = null;
        }
        if (!$v_1 || $v_1.$F_0 !== $v_0 || this.$W_1 && this.$W_1.$T_0 !== $v_1.$T_0) {
            if (!this.$0_0.$1I_0($v_0)) {
                if (this.get_isLookup()) {
                    this.set_textBoxValue(this.$P_1);
                }
                else {
                    this.set_textBoxValue(this.$E_0);
                }
            }
            else {
                var $v_2 = this.$W_1 || this.$0_0.$1O_0($v_0, true);

                if (!$v_2) {
                    if ((!this.get_isLookup() || !this.$0_0.get_$a_0()) && !(SP.UI.ComboBox.Helper.$j($v_0) && SP.UI.ComboBox.Helper.$j(this.$E_0))) {
                        try {
                            this.$1s_1 = true;
                            if (!this.get_isLookup() || !this.$0_0.$1R_0 || SP.UI.ComboBox.Helper.$j($v_0)) {
                                this.$s_0(this.get_isLookup() ? null : $v_0);
                            }
                        }
                        finally {
                            this.$1s_1 = false;
                        }
                    }
                }
                else {
                    this.$s_0($v_2.$T_0);
                }
            }
        }
    },
    init: function SP_UI_ComboBox_SingleComboBox$init(origValue, comboInfo) {
        SP.UI.ComboBox.ComboBox.prototype.init.call(this, origValue, comboInfo);
        this.$0_0.add_$2J_0(this.$$d_$2P_1);
    },
    onSetValue: function SP_UI_ComboBox_SingleComboBox$onSetValue() {
        var $v_0 = this.$E_0;
        var $v_1 = this.$0_0.$1O_0($v_0, false);

        if ($v_1) {
            this.set_textBoxValue($v_1.$F_0);
        }
        else {
            if (!this.$1s_1) {
                this.set_textBoxValue(this.get_isLookup() ? '' : this.$E_0);
            }
        }
    },
    onSetDisplayText: function SP_UI_ComboBox_SingleComboBox$onSetDisplayText() {
        this.$P_1 = this.get_textBoxValue();
    },
    panelGetContentEventHandler: function SP_UI_ComboBox_SingleComboBox$panelGetContentEventHandler(sender, e) {
        this.$P_1 = '';
        this.$0_0.$F_0();
        this.$18_1 = true;
        try {
            SP.UI.ComboBox.ComboBox.prototype.panelGetContentEventHandler.call(this, sender, e);
            var $v_0 = this.get_textBoxValue();
            var $v_1 = this.$0_0.$2R_0($v_0.toLowerCase());

            if ($v_1) {
                if (this.$0_0.$1I_0($v_0)) {
                    this.$P_1 = $v_0;
                }
                else {
                    $v_0 = $v_1;
                    this.set_textBoxValue($v_0);
                }
                var $v_2 = $v_0.length;

                this.appendAndSelectText($v_2, $v_1.substr($v_2));
            }
            else if (!this.$0_0.$1I_0($v_0)) {
                this.set_textBoxValue(this.$P_1);
            }
        }
        finally {
            this.$18_1 = false;
        }
    },
    $2P_1: function SP_UI_ComboBox_SingleComboBox$$2P_1($p0, $p1) {
        if (!this.$18_1) {
            this.$W_1 = $p0;
            if (this.$W_1) {
                if (this.get_textBoxValue() !== this.$W_1.$F_0) {
                    this.set_textBoxValue(this.$P_1 = this.$W_1.$F_0);
                }
                this.selectText();
            }
        }
    },
    onPanelOpenStateChange: function SP_UI_ComboBox_SingleComboBox$onPanelOpenStateChange(sender, e) {
        SP.UI.ComboBox.ComboBox.prototype.onPanelOpenStateChange.call(this, sender, e);
        if (!e && !this.get_disposed()) {
            this.$P_1 = this.get_textBoxValue();
        }
    },
    $2s_0: function SP_UI_ComboBox_SingleComboBox$$2s_0($p0) {
        var $v_0 = !SP.UI.ComboBox.Helper.$5($p0.keyCode) ? $p0.keyCode : $p0.rawEvent.keyCode;

        if (!(SP.UI.ComboBox.ComboBox.get_nonDropdownStartingKeyChars())[$v_0]) {
            this.$W_1 = null;
            window.setTimeout(this.$$d_$1z_1, 0);
            this.$0_0.$F_0();
        }
    },
    onDropDownButtonClick: function SP_UI_ComboBox_SingleComboBox$onDropDownButtonClick(domEvent) {
        SP.UI.ComboBox.ComboBox.prototype.onDropDownButtonClick.call(this, domEvent);
        if (this.$0_0.get_$Y_0()) {
            this.$0_0.$1p_0(this.$E_0);
        }
    },
    $1z_1: function SP_UI_ComboBox_SingleComboBox$$1z_1() {
        if (this.get_disposed()) {
            return;
        }
        this.$18_1 = true;
        try {
            var $v_0 = this.get_textBoxValue();

            if (this.$P_1.length >= $v_0.length) {
                this.$P_1 = '';
            }
            if (!this.$0_0.get_$a_0()) {
                var $v_1 = this.$0_0.$2R_0($v_0.toLowerCase());

                if (!$v_1 && !this.$0_0.$1I_0($v_0)) {
                    if (this.$P_1 !== $v_0) {
                        this.set_textBoxValue(this.$P_1);
                        this.$1z_1();
                    }
                }
                else {
                    this.$P_1 = $v_0;
                    if ($v_1) {
                        var $v_2 = $v_0.length;

                        this.appendAndSelectText($v_2, $v_1.substr($v_2));
                    }
                }
            }
        }
        finally {
            this.$18_1 = false;
        }
    }
};
SP.UI.ComboBox.OptionList = function SP_UI_ComboBox_OptionList($p0, $p1, $p2) {
    this.$K_0 = $p0;
    this.$2f_0 = $p1;
    this.$1W_0 = $p2;
};
SP.UI.ComboBox.OptionList.prototype = {
    $6_0: null,
    $K_0: null,
    $t_0: null,
    $v_0: null,
    $2f_0: 0,
    $1W_0: null,
    get_$3F_0: function SP_UI_ComboBox_OptionList$get_$3F_0() {
        if (!this.$t_0) {
            this.$2G_0();
        }
        return this.$t_0;
    },
    get_$26_0: function SP_UI_ComboBox_OptionList$get_$26_0() {
        if (!this.$v_0) {
            this.$2G_0();
        }
        return this.$v_0;
    },
    $27_0: function SP_UI_ComboBox_OptionList$$27_0() {
        this.$K_0 = null;
        this.$6_0 = null;
    },
    $2D_0: function SP_UI_ComboBox_OptionList$$2D_0($p0) {
        return this.$K_0[$p0];
    },
    $2d_0: function SP_UI_ComboBox_OptionList$$2d_0($p0) {
        for (var $v_0 = 0; $v_0 < this.$K_0.length; $v_0++) {
            if (this.$K_0[$v_0].$F_0 === $p0) {
                return this.$K_0[$v_0];
            }
        }
        return null;
    },
    $2Y_0: function SP_UI_ComboBox_OptionList$$2Y_0($p0) {
        for (var $v_0 = 0; $v_0 < this.$K_0.length; $v_0++) {
            if (this.$K_0[$v_0].$T_0 === $p0.$T_0 && this.$K_0[$v_0].$F_0 === $p0.$F_0) {
                this.$K_0[$v_0].$c_0 = $p0.$c_0;
                this.$t_0 = null;
                this.$v_0 = null;
                this.$23_0($v_0, $p0.$c_0);
            }
        }
    },
    $32_0: function SP_UI_ComboBox_OptionList$$32_0($p0) {
        if ($p0 !== this.$t_0) {
            this.$37_0();
            if ($p0) {
                var $v_0 = $p0.split(';#');

                for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                    for (var $v_2 = 0; $v_2 < this.$K_0.length; $v_2++) {
                        if (this.$K_0[$v_2].$T_0 === $v_0[$v_1]) {
                            this.$K_0[$v_2].$c_0 = true;
                            this.$23_0($v_2, true);
                        }
                    }
                }
            }
            this.$t_0 = null;
            this.$v_0 = null;
        }
    },
    $23_0: function SP_UI_ComboBox_OptionList$$23_0($p0, $p1) {
        if (!this.$6_0) {
            this.$6_0 = new Array(0);
        }
        if (!Array.contains(this.$6_0, $p0) !== !$p1) {
            if ($p1) {
                this.$6_0[this.$6_0.length] = $p0;
            }
            else {
                Array.remove(this.$6_0, $p0);
            }
        }
    },
    $37_0: function SP_UI_ComboBox_OptionList$$37_0() {
        for (var $v_0 = 0; $v_0 < this.$K_0.length; $v_0++) {
            this.$K_0[$v_0].$c_0 = false;
        }
        this.$t_0 = null;
        this.$v_0 = null;
        this.$6_0 = null;
    },
    $2G_0: function SP_UI_ComboBox_OptionList$$2G_0() {
        var $v_0 = '';
        var $v_1 = '';

        for (var $v_2 = 0; $v_2 < this.$6_0.length; $v_2++) {
            $v_0 += ';#' + this.$K_0[this.$6_0[$v_2]].$T_0;
            $v_1 += this.$1W_0 + this.$K_0[this.$6_0[$v_2]].$F_0;
        }
        if ($v_0 !== '') {
            $v_0 = $v_0 + ';#';
        }
        if ($v_1.startsWith(this.$1W_0)) {
            $v_1 = $v_1.substr(this.$1W_0.length);
        }
        this.$t_0 = $v_0;
        this.$v_0 = $v_1.trim();
    }
};
SP.TaggingUtilities.registerClass('SP.TaggingUtilities');
SP.UI.ComboBox.ComboBox.registerClass('SP.UI.ComboBox.ComboBox', null, Sys.IDisposable, SP.UI.ComboBox.IEmbeddedControl);
SP.UI.ComboBox.SPComboInfo.registerClass('SP.UI.ComboBox.SPComboInfo');
SP.UI.ComboBox.ComboOption.registerClass('SP.UI.ComboBox.ComboOption');
SP.UI.ComboBox.ComboPanel.registerClass('SP.UI.ComboBox.ComboPanel', null, Sys.IDisposable);
SP.UI.ComboBox.ControlBase.registerClass('SP.UI.ComboBox.ControlBase', Sys.UI.Control);
SP.UI.ComboBox.DomEventList.registerClass('SP.UI.ComboBox.DomEventList', null, Sys.IDisposable);
SP.UI.ComboBox.Helper.registerClass('SP.UI.ComboBox.Helper');
SP.UI.ComboBox.ListBox.registerClass('SP.UI.ComboBox.ListBox', SP.UI.ComboBox.ComboBox);
SP.UI.ComboBox.MultiComboBox.registerClass('SP.UI.ComboBox.MultiComboBox', SP.UI.ComboBox.ComboBox);
SP.UI.ComboBox.SingleComboBox.registerClass('SP.UI.ComboBox.SingleComboBox', SP.UI.ComboBox.ComboBox);
SP.UI.ComboBox.OptionList.registerClass('SP.UI.ComboBox.OptionList');
function sp_ui_combobox_initialize() {
    SP.UI.ComboBox.ComboBox.$I = null;
    SP.UI.ComboBox.Helper.$10 = 0;
}
;
sp_ui_combobox_initialize();
if (typeof RegisterModuleInit != 'undefined') {
    RegisterModuleInit("sp.ui.combobox.js", sp_ui_combobox_initialize);
}
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
    NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.combobox.js");
}
