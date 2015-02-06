function ULSxTu(){var o=new Object;o.ULSTeamName="Work Management";o.ULSFileName="Wma.UI.Settings.debug.js";return o;}

Type.registerNamespace('SP.UI');

SP.UI.SettingsImpl = function SP_UI_SettingsImpl(textBoxes, checkBoxes, filtersGridId, btnSaveId) {ULSxTu:;
    this.GetStatus = this.getStatus;
    this.Save = this.save;
    this.GetEnabled = this.getEnabled;
    this.SetEnabled = this.setEnabled;
    this.GetField = this.getField;
    this.SetField = this.setField;
    this.GetLocationsDisplayInfo = this.getLocationsDisplayInfo;
    this.SetLocationDisplayInfo = this.setLocationDisplayInfo;
    this.$3_0 = checkBoxes;
    this.$4_0 = textBoxes;
    this.$0_0 = $get(filtersGridId);
    this.$2_0 = $get(btnSaveId);
    this.$1_0 = {};
    var $v_0 = document.getElementsByTagName('select');
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        if ($v_0[$v_1].className.indexOf('DropDownListFilterPosition') !== -1) {
            this.$1_0[($v_0[$v_1]).value] = $v_0[$v_1];
        }
    }
    SP.WorkManagement.OM.SettingsPage.WrapImplementationInApiAndMarkInitComplete(this);
}
SP.UI.SettingsImpl.UpdateTextBoxes = function SP_UI_SettingsImpl$UpdateTextBoxes(sender, textBoxId, defaultValue) {ULSxTu:;
    var $v_0 = $get(textBoxId);
    if (sender.checked) {
        $v_0.disabled = false;
        if (!$v_0.value) {
            $v_0.value = defaultValue;
        }
    }
    else {
        $v_0.disabled = true;
        $v_0.value = '';
    }
}
SP.UI.SettingsImpl.CheckValidators = function SP_UI_SettingsImpl$CheckValidators() {ULSxTu:;
    if (!Page_ClientValidate()) {
        var $v_0 = Page_Validators;
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            if (!$v_0[$v_1].isvalid) {
                var $v_2 = $v_0[$v_1];
                $v_2.tabIndex = -1;
                $v_2.focus();
            }
        }
        return false;
    }
    else {
        return true;
    }
}
SP.UI.SettingsImpl.$E = function SP_UI_SettingsImpl$$E($p0, $p1) {
    SP.UI.SettingsImpl.$6($p0).value = $p1;
    $p0.children[2].children[0].style.backgroundColor = $p1;
}
SP.UI.SettingsImpl.$F = function SP_UI_SettingsImpl$$F($p0, $p1) {
    SP.UI.SettingsImpl.$7($p0).checked = $p1;
}
SP.UI.SettingsImpl.$6 = function SP_UI_SettingsImpl$$6($p0) {
    return ($p0.children[2].children[1]);
}
SP.UI.SettingsImpl.$8 = function SP_UI_SettingsImpl$$8($p0) {
    return ($p0.children[1].children[1]);
}
SP.UI.SettingsImpl.$7 = function SP_UI_SettingsImpl$$7($p0) {
    return ($p0.children[0].children[0].children[0]);
}
SP.UI.SettingsImpl.$9 = function SP_UI_SettingsImpl$$9($p0) {
    return ($p0.children[3].children[0]);
}
SP.UI.SettingsImpl.$C = function SP_UI_SettingsImpl$$C($p0) {
    var $v_0 = new SP.WorkManagement.OM.UILocationDisplaySetting();
    $v_0.id = Number.parseInvariant(SP.UI.SettingsImpl.$8($p0).value);
    $v_0.color = SP.UI.SettingsImpl.$6($p0).value;
    $v_0.display = SP.UI.SettingsImpl.$7($p0).checked;
    $v_0.order = Number.parseInvariant(SP.UI.SettingsImpl.$9($p0).value) - 1;
    return $v_0;
}
SP.UI.SettingsImpl.prototype = {
    $3_0: null,
    $4_0: null,
    $1_0: null,
    $0_0: null,
    $2_0: null,
    
    FilterPositionOnFocus: function SP_UI_SettingsImpl$FilterPositionOnFocus(sender) {ULSxTu:;
        sender.prvValue = sender.value;
    },
    
    FilterPositionOnChange: function SP_UI_SettingsImpl$FilterPositionOnChange(sender) {ULSxTu:;
        var $v_0 = this.$1_0[sender.value];
        $v_0.value = sender.prvValue;
        this.$1_0[sender.value] = sender;
        this.$1_0[sender.prvValue] = $v_0;
        sender.prvValue = sender.value;
    },
    
    getStatus: function SP_UI_SettingsImpl$getStatus() {ULSxTu:;
        if (Page_ClientValidate()) {
            return 1;
        }
        else {
            return 2;
        }
    },
    
    save: function SP_UI_SettingsImpl$save() {ULSxTu:;
        this.$2_0.click();
    },
    
    getEnabled: function SP_UI_SettingsImpl$getEnabled(fieldName) {ULSxTu:;
        var $v_0 = this.$5_0(fieldName);
        return $v_0.checked;
    },
    
    setEnabled: function SP_UI_SettingsImpl$setEnabled(fieldName, value) {ULSxTu:;
        var $v_0 = this.$5_0(fieldName);
        if ($v_0.checked !== value) {
            $v_0.click();
        }
    },
    
    getField: function SP_UI_SettingsImpl$getField(fieldName) {ULSxTu:;
        var $v_0 = this.$A_0(fieldName);
        return $v_0.value;
    },
    
    setField: function SP_UI_SettingsImpl$setField(fieldName, value) {ULSxTu:;
        var $v_0 = this.$A_0(fieldName);
        $v_0.value = value;
    },
    
    getLocationsDisplayInfo: function SP_UI_SettingsImpl$getLocationsDisplayInfo() {ULSxTu:;
        var $v_0 = new Array(0);
        if (this.$0_0) {
            var $v_1 = this.$0_0.children[0].children;
            for (var $v_2 = 1; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = SP.UI.SettingsImpl.$C($v_1[$v_2]);
                Array.add($v_0, $v_3);
            }
        }
        var $$t_6 = this;
        $v_0.sort(function($p1_0, $p1_1) {
            return ($p1_0).order - ($p1_1).order;
        });
        return $v_0;
    },
    
    setLocationDisplayInfo: function SP_UI_SettingsImpl$setLocationDisplayInfo(location) {ULSxTu:;
        var $v_0 = this.$D_0(location.id);
        if ($v_0) {
            SP.UI.SettingsImpl.$E($v_0, location.color);
            SP.UI.SettingsImpl.$F($v_0, location.display);
            this.$G_0($v_0, location.order);
        }
    },
    
    $G_0: function SP_UI_SettingsImpl$$G_0($p0, $p1) {
        var $v_0 = SP.UI.SettingsImpl.$9($p0);
        this.FilterPositionOnFocus($v_0);
        $v_0.value = ($p1 + 1).toString();
        this.FilterPositionOnChange($v_0);
    },
    
    $5_0: function SP_UI_SettingsImpl$$5_0($p0) {
        return $get(this.$3_0[($p0).toString()].toString());
    },
    
    $A_0: function SP_UI_SettingsImpl$$A_0($p0) {
        return $get(this.$4_0[($p0).toString()].toString());
    },
    
    $D_0: function SP_UI_SettingsImpl$$D_0($p0) {
        if (this.$0_0) {
            var $v_0 = this.$0_0.children[0].children;
            for (var $v_1 = 1; $v_1 < $v_0.length; $v_1++) {
                if (Number.parseInvariant(SP.UI.SettingsImpl.$8($v_0[$v_1]).value) === $p0) {
                    return $v_0[$v_1];
                }
            }
        }
        return null;
    }
}


SP.UI.SettingsImpl.registerClass('SP.UI.SettingsImpl', null, SP.WorkManagement.OM.ISettingsPageImpl, SP.WorkManagement.OM.ISettingsPage, SP.WorkManagement.OM.IJsApiImpl);
function wma_ui_settings_initialize() {
};
wma_ui_settings_initialize();

RegisterModuleInit("wma.ui.settings.js", wma_ui_settings_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("wma.ui.settings.js");
