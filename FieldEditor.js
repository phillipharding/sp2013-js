function ULSJCr(){var o=new Object;o.ULSTeamName="Office Server";o.ULSFileName="FieldEditor.js";return o;}


Type.registerNamespace('Microsoft.SharePoint.Taxonomy');

Microsoft.SharePoint.Taxonomy.FieldEditor = function Microsoft_SharePoint_Taxonomy_FieldEditor() {ULSJCr:;
    this.$$d_$7_0 = Function.createDelegate(this, this.$7_0);
    this.$$d_$R_0 = Function.createDelegate(this, this.$R_0);
    this.$$d_$P_0 = Function.createDelegate(this, this.$P_0);
    this.$$d_$S_0 = Function.createDelegate(this, this.$S_0);
    this.$$d_$O_0 = Function.createDelegate(this, this.$O_0);
    this.$$d_$Q_0 = Function.createDelegate(this, this.$Q_0);
}
Microsoft.SharePoint.Taxonomy.FieldEditor.callScriptWebService = function Microsoft_SharePoint_Taxonomy_FieldEditor$callScriptWebService() {ULSJCr:;
    var $v_0 = new Microsoft.SharePoint.Taxonomy.FieldEditor();
    $v_0.$K_0();
}
Microsoft.SharePoint.Taxonomy.FieldEditor.initializeSections = function Microsoft_SharePoint_Taxonomy_FieldEditor$initializeSections() {ULSJCr:;
    var $v_0 = getIsReuseTermSet();
    Microsoft.SharePoint.Taxonomy.FieldEditor.disableCreateSection($v_0, false);
    Microsoft.SharePoint.Taxonomy.FieldEditor.disableReuseSection(!$v_0, false);
    var $v_1 = new Microsoft.SharePoint.Taxonomy.FieldEditor();
    var $v_2 = $get(getAllowMultiId());
    $v_1.get_defaultValueControl().setIsMulti($v_2.checked);
}
Microsoft.SharePoint.Taxonomy.FieldEditor.disableReuseSection = function Microsoft_SharePoint_Taxonomy_FieldEditor$disableReuseSection(disable, clearOldValues) {ULSJCr:;
    if (!disable) {
        var $v_1 = new Microsoft.SharePoint.Taxonomy.FieldEditor();
        var $v_2 = $v_1.get_$0_0();
        $v_1.$A_0 = true;
        if ($v_2.get_focusNode()) {
            $v_1.$9_0($v_2.get_focusNode(), true);
        }
        else if (clearOldValues) {
            $v_1.get_defaultValueControl().setTermSetId(SP.Guid.get_empty().toString());
            $v_1.get_defaultValueControl().setSspId(SP.Guid.get_empty().toString());
            $v_1.get_defaultValueControl().setAnchorId(SP.Guid.get_empty().toString());
        }
        $v_1.$7_0();
        Microsoft.SharePoint.Taxonomy.FieldEditor.$B('metadataTreeControlTreeReuse', '');
    }
    else {
        Microsoft.SharePoint.Taxonomy.FieldEditor.$B('metadataTreeControlTreeReuse', 'none');
    }
    var $v_0 = $get('frameForReuseTreesContainer');
    $v_0.disabled = disable;
    $v_0 = $get('findLink');
    $v_0.disabled = disable;
    $v_0 = $get(getTermSetSearchBoxId());
    $v_0.disabled = disable;
    $v_0 = $get(getTermSetSearchBoxLabelId());
    $v_0.disabled = disable;
    Microsoft.SharePoint.Taxonomy.FieldEditor.$6($v_0, disable);
}
Microsoft.SharePoint.Taxonomy.FieldEditor.disableCreateSection = function Microsoft_SharePoint_Taxonomy_FieldEditor$disableCreateSection(disable, clearOldValues) {ULSJCr:;
    if (!disable) {
        var $v_1 = new Microsoft.SharePoint.Taxonomy.FieldEditor();
        var $v_2 = $v_1.get_$3_0();
        $v_1.$A_0 = false;
        if ($v_2.get_focusNode()) {
            $v_1.$9_0($v_2.get_focusNode(), false);
        }
        else if (clearOldValues) {
            $v_1.get_defaultValueControl().setTermSetId(SP.Guid.get_empty().toString());
            $v_1.get_defaultValueControl().setSspId(SP.Guid.get_empty().toString());
            $v_1.get_defaultValueControl().setAnchorId(SP.Guid.get_empty().toString());
        }
        $v_1.$7_0();
        Microsoft.SharePoint.Taxonomy.FieldEditor.$B('metadataTreeControlTreeCreate', '');
    }
    else {
        Microsoft.SharePoint.Taxonomy.FieldEditor.$B('metadataTreeControlTreeCreate', 'none');
    }
    var $v_0 = $get('editWithTermManagerLink');
    if ($v_0) {
        $v_0.disabled = disable;
        Microsoft.SharePoint.Taxonomy.FieldEditor.$6($v_0, disable);
    }
    $v_0 = $get('frameForCreateTreesContainer');
    if ($v_0) {
        $v_0.disabled = disable;
    }
    $v_0 = $get(getCreateTermSetDescriptionId());
    if ($v_0) {
        $v_0.disabled = disable;
    }
    $v_0 = $get(getCreateTermSetDescriptionLabelId());
    if ($v_0) {
        $v_0.disabled = disable;
        Microsoft.SharePoint.Taxonomy.FieldEditor.$6($v_0, disable);
    }
    $v_0 = $get(getCreateTermSetWarning());
    if ($v_0) {
        $v_0.disabled = disable;
        Microsoft.SharePoint.Taxonomy.FieldEditor.$6($v_0, disable);
    }
}
Microsoft.SharePoint.Taxonomy.FieldEditor.showReuseTaxTree = function Microsoft_SharePoint_Taxonomy_FieldEditor$showReuseTaxTree() {ULSJCr:;
    var $v_0 = new Microsoft.SharePoint.Taxonomy.FieldEditor();
    $v_0.$F_0();
    $v_0.$H_0();
}
Microsoft.SharePoint.Taxonomy.FieldEditor.$T = function Microsoft_SharePoint_Taxonomy_FieldEditor$$T($p0) {
    var $v_0 = new Microsoft.SharePoint.Taxonomy.FieldEditor();
    if ($v_0.get_$3_0().get_roots().get_count()) {
        var $v_1 = $p0.target;
        if ($v_1.value) {
            if ($v_0.get_$3_0().get_roots().get_firstChild().get_dataSource()) {
                $v_0.get_$3_0().get_roots().get_firstChild().setInputText($v_1.value);
                $v_0.get_$3_0().get_roots().get_firstChild().get_dataSource().changeItemName($v_0.get_$3_0().get_roots().get_firstChild(), $v_1.value);
            }
        }
    }
}
Microsoft.SharePoint.Taxonomy.FieldEditor.$2 = function Microsoft_SharePoint_Taxonomy_FieldEditor$$2($p0, $p1) {
    var $v_0 = $get($p0);
    if ($v_0) {
        $v_0.value = $p1;
    }
}
Microsoft.SharePoint.Taxonomy.FieldEditor.$1 = function Microsoft_SharePoint_Taxonomy_FieldEditor$$1($p0) {
    var $v_0 = $get($p0);
    if ($v_0) {
        return $v_0.value;
    }
    else {
        return '';
    }
}
Microsoft.SharePoint.Taxonomy.FieldEditor.$6 = function Microsoft_SharePoint_Taxonomy_FieldEditor$$6($p0, $p1) {
    $p0.style.color = ($p1) ? '#C6C6C6' : '';
}
Microsoft.SharePoint.Taxonomy.FieldEditor.$B = function Microsoft_SharePoint_Taxonomy_FieldEditor$$B($p0, $p1) {
    var $v_0 = $get($p0);
    if ($v_0 && $v_0.style) {
        $v_0.style.display = $p1;
    }
}
Microsoft.SharePoint.Taxonomy.FieldEditor.prototype = {
    
    get_defaultValueControl: function Microsoft_SharePoint_Taxonomy_FieldEditor$get_defaultValueControl() {ULSJCr:;
        if (!this.$C_0) {
            var $v_0 = $get(getDefaultValueId());
            if ($v_0) {
                this.$C_0 = new Microsoft.SharePoint.Taxonomy.ControlObject($v_0);
            }
        }
        return this.$C_0;
    },
    
    get_$0_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$get_$0_0() {ULSJCr:;
        if (!this.$5_0) {
            var $v_0 = $get('metadataTreeControlTreeReuse');
            if ($v_0) {
                this.$5_0 = $v_0.control;
                if (!this.$5_0) {
                    this.$5_0 = new Microsoft.SharePoint.Taxonomy.Tree($v_0);
                    this.$H_0();
                    this.$5_0.set_readOnly(true);
                    this.$5_0.add_propertyChanged(this.$$d_$Q_0);
                }
            }
        }
        return this.$5_0;
    },
    
    $H_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$$H_0() {ULSJCr:;
        this.get_$0_0().clear();
        if (getFeatureEnabled()) {
            var $v_0 = new Microsoft.SharePoint.Taxonomy.TaxonomyDataSource();
            var $v_1 = Microsoft.SharePoint.Taxonomy.FieldEditor.$1(getTermSetInputTextId());
            var $v_2 = Microsoft.SharePoint.Taxonomy.FieldEditor.$1(getSspInputTextId());
            var $v_3 = Microsoft.SharePoint.Taxonomy.FieldEditor.$1(getGroupInputTextId());
            var $v_4 = Microsoft.SharePoint.Taxonomy.FieldEditor.$1(getAnchorPathInputTextId());
            var $v_5 = $v_4.split('|');
            if ($v_1 !== SP.Guid.get_empty().toString()) {
                $v_0.set_initialNodeSelected($v_2 + '|' + $v_3 + '|' + $v_1 + $v_4);
            }
            $v_0.set_mode(Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.columnUIMode);
            $v_0.set_rootNodeType(11);
            $v_0.set_sspId($v_2);
            $v_0.set_rootGuids($v_1);
            $v_0.set_anchorTermId($v_5[$v_5.length]);
            $v_0.set_displayLcid(getLCID());
            this.get_$0_0().set_clientDataSource($v_0);
        }
        else {
            var $v_6 = Microsoft.SharePoint.Taxonomy.TreeNode.createANewTreeNode(true);
            $v_6.set_text(Microsoft.SharePoint.Taxonomy.ScriptResources.fieldEditor_FeatureNotEnabled);
            $v_6.set_isLeaf(true);
            this.get_$0_0().get_roots().addChild($v_6);
        }
        this.get_$0_0().initialize();
    },
    
    $G_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$$G_0($p0) {
        setCreateTermSetId($p0);
        if (!getFeatureEnabled()) {
            this.$4_0.clear();
            var $v_0 = Microsoft.SharePoint.Taxonomy.TreeNode.createANewTreeNode(true);
            $v_0.set_text(Microsoft.SharePoint.Taxonomy.ScriptResources.fieldEditor_FeatureNotEnabled);
            $v_0.set_isLeaf(true);
            this.$4_0.get_roots().addChild($v_0);
        }
        else {
            var $v_1 = new Microsoft.SharePoint.Taxonomy.TaxonomyDataSource();
            $v_1.set_rootNodeType(3);
            $v_1.set_mode(Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.columnCreateUIMode);
            $v_1.set_rootGuids($p0);
            $v_1.set_siteUrl(getWebServicePath());
            $v_1.set_webId(getWebId());
            $v_1.set_listId(getListId());
            $v_1.set_sspId(Microsoft.SharePoint.Taxonomy.FieldEditor.$1(getCreateSspInputTextId()));
            $v_1.set_initialNodeSelected($p0 + Microsoft.SharePoint.Taxonomy.FieldEditor.$1(getCreateAnchorPathInputTextId()));
            $v_1.set_displayLcid(getLCID());
            $v_1.set_termSetECBMenu(getTSEcbMenu());
            $v_1.set_termECBMenu(getTermEcbMenu());
            $v_1.set_leafTermECBMenuID(getTermEcbMenu());
            this.get_$3_0().set_clientDataSource($v_1);
        }
        this.get_$3_0().initialize();
        this.get_$3_0().add_propertyChanged(this.$$d_$O_0);
    },
    
    get_$3_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$get_$3_0() {ULSJCr:;
        if (!this.$4_0) {
            var $v_0 = $get('metadataTreeControlTreeCreate');
            if ($v_0) {
                this.$4_0 = $v_0.control;
                if (!this.$4_0) {
                    this.$4_0 = new Microsoft.SharePoint.Taxonomy.Tree($v_0);
                    if (Microsoft.SharePoint.Taxonomy.FieldEditor.$1(getCreateTermSetInputTextId()) !== SP.Guid.get_empty().toString() || !getFeatureEnabled()) {
                        this.$G_0(Microsoft.SharePoint.Taxonomy.FieldEditor.$1(getCreateTermSetInputTextId()));
                    }
                    else {
                        this.$L_0();
                    }
                }
            }
        }
        return this.$4_0;
    },
    
    $K_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$$K_0() {ULSJCr:;
        var $v_0 = getFindText();
        if ($v_0 !== '') {
            var $v_1 = {};
            $v_1['searchTerms'] = $v_0;
            $v_1['lcid'] = getLCID();
            Sys.Net.WebServiceProxy.invoke(this.get_defaultValueControl().getWebServicePath(), 'FindTermSet', false, $v_1, this.$$d_$S_0, this.$$d_$P_0, this.get_$0_0(), Sys.Net.WebRequestManager.get_defaultTimeout(), false, null);
        }
    },
    
    $L_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$$L_0() {ULSJCr:;
        var $v_0 = {};
        $v_0['webId'] = getWebId();
        $v_0['listId'] = getListId();
        $v_0['lcid'] = getLCID();
        var $v_1 = '';
        var $v_2 = $get('ctl00_PlaceHolderMain_NameAndType_ColumnName_idColName');
        if ($v_2) {
            $v_1 = $v_2.value;
        }
        if (!$v_1 || $v_1 === '') {
            $v_1 = Microsoft.SharePoint.Taxonomy.ScriptResources.fieldEditor_Untitled;
        }
        $addHandler($v_2, 'change', Microsoft.SharePoint.Taxonomy.FieldEditor.$T);
        $v_0['newName'] = $v_1;
        Sys.Net.WebServiceProxy.invoke(this.get_defaultValueControl().getWebServicePath(), 'CreateSiteCollectionTermSet', false, $v_0, this.$$d_$R_0, this.$$d_$P_0, this, Sys.Net.WebRequestManager.get_defaultTimeout(), false, null);
    },
    
    $S_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$$S_0($p0, $p1, $p2) {
        if (!$p0) {
            throw Error.argumentNull('result');
        }
        this.$F_0();
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
    
    $R_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$$R_0($p0, $p1, $p2) {
        if (SP.ScriptUtility.isNullOrUndefined($p0)) {
            alert('WEB SERVICE CALL FAILED');
        }
        var $v_0 = $p0.Error;
        if (SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            this.$G_0($p0.Content);
        }
        else {
            alert($v_0);
        }
    },
    
    $P_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$$P_0($p0, $p1, $p2) {
        if (!$p0) {
            throw Error.argumentNull('error');
        }
        alert($p0.get_message());
    },
    
    $Q_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$$Q_0($p0, $p1) {
        if ($p1.get_propertyName() === 'focusNode') {
            this.$9_0(this.get_$0_0().get_focusNode(), true);
        }
    },
    
    $O_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$$O_0($p0, $p1) {
        if ($p1.get_propertyName() === 'focusNode') {
            this.$9_0(this.get_$3_0().get_roots().get_firstChild(), false);
        }
    },
    
    $F_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$$F_0() {ULSJCr:;
        Microsoft.SharePoint.Taxonomy.FieldEditor.$2(getTermSetInputTextId(), SP.Guid.get_empty().toString());
        Microsoft.SharePoint.Taxonomy.FieldEditor.$2(getGroupInputTextId(), SP.Guid.get_empty().toString());
        Microsoft.SharePoint.Taxonomy.FieldEditor.$2(getAnchorInputTextId(), SP.Guid.get_empty().toString());
        Microsoft.SharePoint.Taxonomy.FieldEditor.$2(getAnchorPathInputTextId(), '');
        this.get_defaultValueControl().enableControl(false);
    },
    
    $9_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$$9_0($p0, $p1) {
        switch ($p0.get_nodeType()) {
            case (3):
            case (12):
                this.$J_0($p0, $p1);
                var $$t_2 = this;
                window.setTimeout(function() {ULSJCr:;
                    $$t_2.get_defaultValueControl().validateAll(false);
                }, 0);
                this.$E_0 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.isTermSetOpen($p0);
                this.$I_0 = $p1;
                break;
            case (4):
                this.$U_0($p0, $p1);
                var $$t_3 = this;
                window.setTimeout(function() {ULSJCr:;
                    $$t_3.get_defaultValueControl().validateAll(false);
                }, 0);
                Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.isTermSetOpen(this.$8_0($p0, 3));
                break;
            default:
                if ($p1) {
                    this.$M_0();
                }
                break;
        }
        this.$A_0 = $p1;
        this.$7_0();
    },
    
    $A_0: false,
    $E_0: false,
    $I_0: false,
    
    $7_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$$7_0() {ULSJCr:;
        if (this.get_defaultValueControl()) {
            if (this.$A_0) {
                this.get_defaultValueControl().enableControl(Microsoft.SharePoint.Taxonomy.FieldEditor.$1(getTermSetInputTextId()) !== SP.Guid.get_empty().toString());
            }
            else {
                this.get_defaultValueControl().enableControl(Microsoft.SharePoint.Taxonomy.FieldEditor.$1(getCreateTermSetInputTextId()) !== SP.Guid.get_empty().toString());
            }
            this.get_defaultValueControl().setAllowFillIn(this.$E_0 && this.$I_0);
        }
        else {
            window.setTimeout(this.$$d_$7_0, 100);
        }
    },
    
    $M_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$$M_0() {ULSJCr:;
        if (this.get_$0_0()) {
            var $v_0 = Microsoft.SharePoint.Taxonomy.FieldEditor.$1(getGroupInputTextId());
            var $v_1 = Microsoft.SharePoint.Taxonomy.FieldEditor.$1(getTermSetInputTextId());
            var $v_2 = Microsoft.SharePoint.Taxonomy.FieldEditor.$1(getSspInputTextId());
            if ($v_0 !== SP.Guid.get_empty().toString() && $v_1 !== SP.Guid.get_empty().toString()) {
                this.get_$0_0().expandAndLoadToNode($v_2 + '|' + $v_0 + '|' + $v_1 + Microsoft.SharePoint.Taxonomy.FieldEditor.$1(getAnchorPathInputTextId()));
            }
            else {
                if (this.get_$0_0().get_focusNode()) {
                    this.get_$0_0().get_focusNode().removeFocus();
                }
            }
        }
    },
    
    $U_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$$U_0($p0, $p1) {
        if ($p0.get_nodeType() !== 4) {
        }
        this.$J_0(this.$8_0($p0, 3), $p1);
        if ($p1) {
            Microsoft.SharePoint.Taxonomy.FieldEditor.$2(getAnchorInputTextId(), $p0.get_id());
            Microsoft.SharePoint.Taxonomy.FieldEditor.$2(getAnchorPathInputTextId(), this.$N_0($p0));
            this.get_defaultValueControl().setAnchorId($p0.get_id());
        }
    },
    
    $N_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$$N_0($p0) {
        var $v_0 = $p0;
        var $v_1 = '';
        while ($v_0 && $v_0.get_nodeType() === 4) {
            $v_1 = '|' + $v_0.get_id() + $v_1;
            $v_0 = $v_0.get_parentNode();
        }
        return $v_1;
    },
    
    $8_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$$8_0($p0, $p1) {
        var $v_0 = $p0.get_parentNode();
        if ($p1 === 3) {
            while ($v_0 && $v_0.get_nodeType() !== $p1 && $v_0.get_nodeType() !== 12) {
                $v_0 = $v_0.get_parentNode();
            }
        }
        else {
            while ($v_0 && $v_0.get_nodeType() !== $p1) {
                $v_0 = $v_0.get_parentNode();
            }
        }
        return $v_0;
    },
    
    $J_0: function Microsoft_SharePoint_Taxonomy_FieldEditor$$J_0($p0, $p1) {
        if ($p0.get_nodeType() !== 3) {
        }
        var $v_0 = this.$8_0($p0, 1);
        var $v_1;
        if ($p1) {
            Microsoft.SharePoint.Taxonomy.FieldEditor.$2(getTermSetInputTextId(), $p0.get_id());
            Microsoft.SharePoint.Taxonomy.FieldEditor.$2(getGroupInputTextId(), $v_0.get_id());
            var $v_4 = this.$8_0($p0, 11);
            Microsoft.SharePoint.Taxonomy.FieldEditor.$2(getSspInputTextId(), $v_4.get_id());
            $v_1 = $v_4.get_id();
            Microsoft.SharePoint.Taxonomy.FieldEditor.$2(getAnchorInputTextId(), SP.Guid.get_empty().toString());
            Microsoft.SharePoint.Taxonomy.FieldEditor.$2(getAnchorPathInputTextId(), '');
        }
        else {
            Microsoft.SharePoint.Taxonomy.FieldEditor.$2(getCreateTermSetInputTextId(), $p0.get_id());
            Microsoft.SharePoint.Taxonomy.FieldEditor.$2(getCreateAnchorInputTextId(), SP.Guid.get_empty().toString());
            Microsoft.SharePoint.Taxonomy.FieldEditor.$2(getCreateAnchorPathInputTextId(), '');
            $v_1 = Microsoft.SharePoint.Taxonomy.FieldEditor.$1(getCreateSspInputTextId());
        }
        this.get_defaultValueControl().setTermSetId($p0.get_id());
        this.get_defaultValueControl().setSspId($v_1);
        this.get_defaultValueControl().setAnchorId(SP.Guid.get_empty().toString());
        var $v_2 = $get(getFillInFalseId());
        var $v_3 = $get(getFillInTrueId());
        if (Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.isTermSetOpen($p0)) {
            $v_2.disabled = false;
            $v_3.disabled = false;
            $v_2.checked = !getAllowFillinDefault();
            $v_3.checked = getAllowFillinDefault();
        }
        else {
            $v_2.checked = true;
            $v_3.disabled = true;
            $v_2.disabled = true;
        }
    },
    
    $5_0: null,
    $4_0: null,
    $C_0: null
}


Microsoft.SharePoint.Taxonomy.FieldEditor.registerClass('Microsoft.SharePoint.Taxonomy.FieldEditor');
function fieldeditor_initialize() {
};
fieldeditor_initialize();

RegisterModuleInit("FieldEditor.js", fieldeditor_initialize);


if (typeof(_spBodyOnLoadCalled) == 'undefined' || _spBodyOnLoadCalled)
{
	window.setTimeout(Microsoft.SharePoint.Taxonomy.FieldEditor.initializeSections, 0);
}
else
{
	_spBodyOnLoadFunctionNames.push("Microsoft.SharePoint.Taxonomy.FieldEditor.initializeSections");
}    


if( typeof(Sys) != "undefined" && Sys && Sys.Application )
{
   Sys.Application.notifyScriptLoaded();
}
if (typeof(NotifyScriptLoadedAndExecuteWaitingJobs) != "undefined")
{
    NotifyScriptLoadedAndExecuteWaitingJobs("fieldeditor.js");
}
