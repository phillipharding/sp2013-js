function ULSfE4(){var o=new Object;o.ULSTeamName="Office Server";o.ULSFileName="TaxonomyItemPickerScript.js";return o;}


Type.registerNamespace('Microsoft.SharePoint.Taxonomy');

Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript = function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript() {ULSfE4:;
    this.$$d_$D_0 = Function.createDelegate(this, this.$D_0);
    this.$$d_$F_0 = Function.createDelegate(this, this.$F_0);
    this.$$d_$E_0 = Function.createDelegate(this, this.$E_0);
}
Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.initializeSections = function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$initializeSections() {ULSfE4:;
    Sys.Application.add_load(Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$A);
}
Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$A = function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$$A($p0, $p1) {
    Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.setEnabled(true);
}
Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.setEnabled = function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$setEnabled(enabled) {ULSfE4:;
    if (enabled) {
        var $v_1 = new Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript();
        var $v_2 = $v_1.get_$0_0();
        if ($v_2 && $v_2.get_focusNode()) {
            $v_1.$8_0($v_2.get_focusNode());
        }
        Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$9('taxonomyItemPickerTreeControl', '');
    }
    else {
        Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$9('taxonomyItemPickerTreeControl', 'none');
    }
    var $v_0 = $get('taxonomyItemPickerTreeContainer');
    if ($v_0) {
        $v_0.disabled = !enabled;
        $v_0 = $get('findLink');
        $v_0.disabled = !enabled;
        $v_0 = $get(getTermSetSearchBoxId());
        $v_0.disabled = !enabled;
        $v_0 = $get(getTermSetSearchBoxLabelId());
        $v_0.disabled = !enabled;
    }
}
Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.initializeControl = function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$initializeControl() {ULSfE4:;
    var $v_0 = new Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript();
    Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$5();
    $v_0.$6_0();
}
Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$5 = function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$$5() {ULSfE4:;
    Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$1(getTermSetInputTextId(), SP.Guid.get_empty().toString());
    Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$1(getGroupInputTextId(), SP.Guid.get_empty().toString());
    Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$1(getTermPathInputTextId(), '');
}
Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.executeFindTermSet = function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$executeFindTermSet() {ULSfE4:;
    var $v_0 = new Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript();
    $v_0.$C_0();
}
Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.showReuseTaxTree = function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$showReuseTaxTree() {ULSfE4:;
    var $v_0 = new Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript();
    Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$5();
    $v_0.$6_0();
}
Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$1 = function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$$1($p0, $p1) {
    var $v_0 = $get($p0);
    if ($v_0) {
        $v_0.value = $p1;
    }
}
Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$3 = function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$$3($p0) {
    var $v_0 = $get($p0);
    if ($v_0) {
        return $v_0.value;
    }
    else {
        return '';
    }
}
Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$9 = function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$$9($p0, $p1) {
    var $v_0 = $get($p0);
    if ($v_0 && $v_0.style) {
        $v_0.style.display = $p1;
    }
}
Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$4 = function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$$4($p0, $p1) {
    if (!SP.ScriptUtility.isNullOrUndefined($p0)) {
        return $p0.indexOf($p1) >= 0;
    }
    return false;
}
Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$B = function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$$B($p0) {
    Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$1(getTermStoreInputTextId(), '');
    Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$1(getGroupInputTextId(), '');
    Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$1(getTermSetInputTextId(), '');
    var $v_0 = '';
    for (var $v_1 = $p0; $v_1; $v_1 = $v_1.get_parentNode()) {
        var $v_2 = null;
        switch ($v_1.get_nodeType()) {
            case 11:
                $v_2 = getTermStoreInputTextId();
                break;
            case 1:
            case 8:
            case 2:
                $v_2 = getGroupInputTextId();
                break;
            case 3:
            case 6:
            case 9:
            case 12:
                $v_2 = getTermSetInputTextId();
                break;
            case 4:
            case 7:
            case 10:
                if ($v_0 !== '') {
                    $v_0 = $v_1.get_id().toString() + '|' + $v_0;
                }
                else {
                    $v_0 = $v_1.get_id().toString();
                }
                break;
        }
        if ($v_2) {
            Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$1($v_2, $v_1.get_id());
        }
    }
    Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$1(getTermPathInputTextId(), $v_0);
}
Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.prototype = {
    $2_0: null,
    
    get_$0_0: function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$get_$0_0() {ULSfE4:;
        if (!this.$2_0) {
            var $v_0 = $get('taxonomyItemPickerTreeControl');
            if ($v_0) {
                this.$2_0 = $v_0.control;
                if (!this.$2_0) {
                    this.$2_0 = new Microsoft.SharePoint.Taxonomy.Tree($v_0);
                    this.$6_0();
                    this.$2_0.set_readOnly(true);
                    this.$2_0.add_propertyChanged(this.$$d_$E_0);
                }
            }
        }
        return this.$2_0;
    },
    
    $6_0: function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$$6_0() {ULSfE4:;
        this.get_$0_0().clear();
        if (getFeatureEnabled()) {
            var $v_0 = new Microsoft.SharePoint.Taxonomy.TaxonomyDataSource();
            $v_0.set_initialNodeSelected(this.$7_0());
            $v_0.set_mode(Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.manualMode);
            $v_0.set_manualShowNonTaggingTermSets(true);
            $v_0.set_manualShowDeprecatedTerms(true);
            $v_0.set_rootNodeType(11);
            $v_0.set_displayLcid(getLCID());
            this.get_$0_0().set_clientDataSource($v_0);
        }
        else {
            var $v_1 = Microsoft.SharePoint.Taxonomy.TreeNode.createANewTreeNode(true);
            $v_1.set_text(Microsoft.SharePoint.Taxonomy.ScriptResources.fieldEditor_FeatureNotEnabled);
            $v_1.set_isLeaf(true);
            this.get_$0_0().get_roots().addChild($v_1);
        }
        this.get_$0_0().initialize();
    },
    
    $C_0: function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$$C_0() {ULSfE4:;
        var $v_0 = getFindText();
        if ($v_0 || $v_0.length > 0) {
            var $v_1 = {};
            $v_1['searchTerms'] = $v_0;
            $v_1['lcid'] = getLCID();
            Sys.Net.WebServiceProxy.invoke(getWebServicePath(), 'FindTermSet', false, $v_1, this.$$d_$F_0, this.$$d_$D_0, this.get_$0_0(), Sys.Net.WebRequestManager.get_defaultTimeout(), false, null);
        }
    },
    
    $F_0: function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$$F_0($p0, $p1, $p2) {
        if (!$p0) {
            throw Error.argumentNull('result');
        }
        Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$5();
        var $v_0 = $p0.Error;
        if (SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            this.get_$0_0().clear();
            var $v_1 = new Microsoft.SharePoint.Taxonomy.TaxonomyDataSource();
            $v_1.set_rootNodeType(11);
            $v_1.set_mode(Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.columnFindMode);
            $v_1.set_siteUrl(getWebServicePath());
            $v_1.set_webId(getWebId());
            $v_1.onGetFindTermSetsCompleted($p0, $p1, $p2);
            $v_1.set_displayLcid(getLCID());
            this.get_$0_0().set_clientDataSource($v_1);
            this.get_$0_0().initialize();
        }
        else {
            this.get_$0_0().clear();
            var $v_2 = Microsoft.SharePoint.Taxonomy.TreeNode.createANewTreeNode(true);
            $v_2.set_text($v_0);
            $v_2.set_isLeaf(true);
            this.get_$0_0().get_roots().addChild($v_2);
        }
        setResetEnabled(true);
    },
    
    $D_0: function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$$D_0($p0, $p1, $p2) {
        if (!$p0) {
            throw Error.argumentNull('error');
        }
        alert($p0.get_message());
    },
    
    $E_0: function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$$E_0($p0, $p1) {
        if ($p1.get_propertyName() === 'focusNode') {
            this.$8_0(this.get_$0_0().get_focusNode());
        }
    },
    
    $8_0: function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$$8_0($p0) {
        if ($p0) {
            var $v_0 = Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$3(getOptionsInputTextId());
            var $v_1 = true;
            switch ($p0.get_nodeType()) {
                case 11:
                    $v_1 = !!($v_1 & Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$4($v_0, ':AllowSelectTermStore:'));
                    break;
                case 1:
                case 8:
                case 2:
                    $v_1 = !!($v_1 & Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$4($v_0, ':AllowSelectGroup:'));
                    break;
                case 3:
                case 6:
                case 9:
                case 12:
                    $v_1 = !!($v_1 & Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$4($v_0, ':AllowSelectTermSet:'));
                    break;
                case 4:
                case 7:
                case 10:
                    $v_1 = !!($v_1 & Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$4($v_0, ':AllowSelectTerm:'));
                    break;
                default:
                    $v_1 = false;
                    break;
            }
            if (!$v_1) {
                this.$G_0();
                return;
            }
        }
        Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$B($p0);
    },
    
    $7_0: function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$$7_0() {ULSfE4:;
        var $v_0 = '';
        if (!this.get_$0_0()) {
            return $v_0;
        }
        var $v_1 = Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$3(getTermStoreInputTextId());
        if ($v_1 === '') {
            return $v_0;
        }
        $v_0 += $v_1;
        var $v_2 = Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$3(getGroupInputTextId());
        if ($v_2 === '') {
            return $v_0;
        }
        $v_0 += '|' + $v_2;
        var $v_3 = Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$3(getTermSetInputTextId());
        if ($v_3 === '') {
            return $v_0;
        }
        $v_0 += '|' + $v_3;
        var $v_4 = Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.$3(getTermPathInputTextId());
        if ($v_4 === '') {
            return $v_0;
        }
        $v_0 += '|' + $v_4;
        return $v_0;
    },
    
    $G_0: function Microsoft_SharePoint_Taxonomy_TaxonomyItemPickerScript$$G_0() {ULSfE4:;
        if (this.get_$0_0()) {
            var $v_0 = this.$7_0();
            if ($v_0 !== '') {
                this.get_$0_0().expandAndLoadToNode($v_0);
            }
            else {
                if (this.get_$0_0().get_focusNode()) {
                    this.get_$0_0().get_focusNode().removeFocus();
                }
            }
        }
    }
}


Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.registerClass('Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript');
function taxonomyitempicker_initialize() {
};
taxonomyitempicker_initialize();

RegisterModuleInit("TaxonomyItemPickerScript.js", taxonomyitempicker_initialize);

Microsoft.SharePoint.Taxonomy.TaxonomyItemPickerScript.initializeSections();

if( typeof(Sys) != "undefined" && Sys && Sys.Application )
{
   Sys.Application.notifyScriptLoaded();
}
if (typeof(NotifyScriptLoadedAndExecuteWaitingJobs) != "undefined")
{
    NotifyScriptLoadedAndExecuteWaitingJobs("TaxonomyItemPickerScript.js");
}
