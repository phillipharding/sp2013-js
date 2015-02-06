function ULSXaE(){var o=new Object;o.ULSTeamName="Office Server";o.ULSFileName="TreeControl.js";return o;}


Type.registerNamespace('Microsoft.SharePoint.Taxonomy');

Microsoft.SharePoint.Taxonomy.FilterType = function() {}
Microsoft.SharePoint.Taxonomy.FilterType.prototype = {
    invalid: -1, 
    minRange: 0, 
    idExclude: 1, 
    requirePermission: 2, 
    typeExclude: 3, 
    disabledExclude: 4, 
    pinnedExclude: 5, 
    maxRange: 6
}
Microsoft.SharePoint.Taxonomy.FilterType.registerEnum('Microsoft.SharePoint.Taxonomy.FilterType', false);


Microsoft.SharePoint.Taxonomy.TreeNodeType = function() {}
Microsoft.SharePoint.Taxonomy.TreeNodeType.prototype = {
    root: 0, 
    group: 1, 
    groupNoDelete: 2, 
    termSet: 3, 
    term: 4, 
    keywordSet: 6, 
    keyword: 7, 
    systemGroup: 8, 
    orphanSet: 9, 
    orphan: 10, 
    ssp: 11, 
    customDictionarySet: 12, 
    searchDictionariesGroup: 13, 
    customDictionaryTerm: 14, 
    hashtagSet: 15, 
    hashtag: 16, 
    minRange: -1, 
    maxRange: 17
}
Microsoft.SharePoint.Taxonomy.TreeNodeType.registerEnum('Microsoft.SharePoint.Taxonomy.TreeNodeType', false);


Microsoft.SharePoint.Taxonomy.TaxonomyRights = function() {}
Microsoft.SharePoint.Taxonomy.TaxonomyRights.prototype = {
    none: 0, 
    editTerm: 1, 
    editTermSet: 2, 
    editGroup: 4, 
    addTermSetEditPermissions: 8, 
    manageTermStore: 16, 
    addManageTermStorePermissions: 32, 
    contributor: 64, 
    groupManager: 128, 
    termStoreAdministrator: 256, 
    all: 4095
}
Microsoft.SharePoint.Taxonomy.TaxonomyRights.registerEnum('Microsoft.SharePoint.Taxonomy.TaxonomyRights', false);


Microsoft.SharePoint.Taxonomy.TreeNodeOperation = function() {}
Microsoft.SharePoint.Taxonomy.TreeNodeOperation.prototype = {
    none: -1, 
    addChild: 0, 
    expandAndLoad: 1
}
Microsoft.SharePoint.Taxonomy.TreeNodeOperation.registerEnum('Microsoft.SharePoint.Taxonomy.TreeNodeOperation', false);


Microsoft.SharePoint.Taxonomy.DateTimeKind = function() {}
Microsoft.SharePoint.Taxonomy.DateTimeKind.prototype = {
    unspecified: 0, 
    utc: 1, 
    local: 2
}
Microsoft.SharePoint.Taxonomy.DateTimeKind.registerEnum('Microsoft.SharePoint.Taxonomy.DateTimeKind', false);


Microsoft.SharePoint.Taxonomy.ClientValidator = function Microsoft_SharePoint_Taxonomy_ClientValidator() {
}
Microsoft.SharePoint.Taxonomy.ClientValidator.validateName = function Microsoft_SharePoint_Taxonomy_ClientValidator$validateName(name) {ULSXaE:;
    var $v_0 = null;
    var $v_1 = new RegExp('[;<>|\\t]', 'ig');
    if (SP.ScriptUtility.isNullOrEmptyString(name)) {
        $v_0 = Microsoft.SharePoint.Taxonomy.ScriptResources.errorNameBlank;
    }
    else if ($v_1.test(name)) {
        $v_0 = Microsoft.SharePoint.Taxonomy.ScriptResources.errorNameInvalid;
    }
    else if (name.length > 255) {
        $v_0 = String.format(Microsoft.SharePoint.Taxonomy.ScriptResources.errorNameExceedLength, 255);
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.ClientValidator.validatePropertyValue = function Microsoft_SharePoint_Taxonomy_ClientValidator$validatePropertyValue(value) {ULSXaE:;
    var $v_0 = null;
    if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
        if (value.length > 10240) {
            $v_0 = String.format(Microsoft.SharePoint.Taxonomy.ScriptResources.errorValueExceedLength, 10240);
        }
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.ClientValidator.checkInvalidChar = function Microsoft_SharePoint_Taxonomy_ClientValidator$checkInvalidChar(sender, args) {ULSXaE:;
    var $v_0 = args.Value;
    var $v_1 = new RegExp('[;<>|\\t]', 'ig');
    if ($v_1.test($v_0)) {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}
Microsoft.SharePoint.Taxonomy.ClientValidator.checkInvalidDescription = function Microsoft_SharePoint_Taxonomy_ClientValidator$checkInvalidDescription(sender, args) {ULSXaE:;
    var $v_0 = args.Value;
    var $v_1 = new RegExp('\\t', 'ig');
    if ($v_1.test($v_0)) {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}
Microsoft.SharePoint.Taxonomy.ClientValidator.checkEmptyString = function Microsoft_SharePoint_Taxonomy_ClientValidator$checkEmptyString(sender, args) {ULSXaE:;
    var $v_0 = args.Value;
    if (SP.ScriptUtility.isNullOrEmptyString($v_0)) {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}


Microsoft.SharePoint.Taxonomy.Filter = function Microsoft_SharePoint_Taxonomy_Filter() {
}
Microsoft.SharePoint.Taxonomy.Filter.prototype = {
    
    get_count: function Microsoft_SharePoint_Taxonomy_Filter$get_count() {ULSXaE:;
        return this.$27_0;
    },
    set_count: function Microsoft_SharePoint_Taxonomy_Filter$set_count(value) {ULSXaE:;
        if (value < 0) {
            throw Error.argumentOutOfRange('Count');
        }
        this.$27_0 = value;
        return value;
    },
    
    $27_0: 0,
    
    get_filters: function Microsoft_SharePoint_Taxonomy_Filter$get_filters() {ULSXaE:;
        if (!this.$1j_0) {
            this.$1j_0 = [];
        }
        return this.$1j_0;
    },
    
    $1j_0: null,
    
    add: function Microsoft_SharePoint_Taxonomy_Filter$add(type, property, value) {ULSXaE:;
        if (type > 6 || type < 0) {
            throw Error.argumentOutOfRange('type');
        }
        if (!value) {
            throw Error.argumentNull('value');
        }
        var $v_0 = new Microsoft.SharePoint.Taxonomy.FilterEntry(type, property, value);
        var $$t_4;
        this.get_filters()[(this.set_count(($$t_4 = this.get_count()) + 1), $$t_4)] = $v_0;
    },
    
    evaluate: function Microsoft_SharePoint_Taxonomy_Filter$evaluate(node) {ULSXaE:;
        var $v_0 = false;
        for (var $v_1 = 0; $v_1 < this.get_filters().length; $v_1++) {
            var $v_2 = this.get_filters()[$v_1];
            if (!$v_2) {
                Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError('filter not setup right');
            }
            else if ($v_2.evaluate(node)) {
                $v_0 = true;
                break;
            }
        }
        return $v_0;
    },
    
    isGuidExcluded: function Microsoft_SharePoint_Taxonomy_Filter$isGuidExcluded(guid) {ULSXaE:;
        var $v_0 = false;
        for (var $v_1 = 0; $v_1 < this.get_filters().length; $v_1++) {
            var $v_2 = this.get_filters()[$v_1];
            if (!$v_2) {
                Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError('filter not setup right');
            }
            else if ($v_2.$1C_0 === 1) {
                if ($v_2.$s_0 === guid) {
                    $v_0 = true;
                    break;
                }
            }
        }
        return $v_0;
    }
}


Microsoft.SharePoint.Taxonomy.FilterEntry = function Microsoft_SharePoint_Taxonomy_FilterEntry(type, property, value) {ULSXaE:;
    this.$1C_0 = -1;
    this.$1C_0 = type;
    this.$3L_0 = property;
    this.$s_0 = value;
}
Microsoft.SharePoint.Taxonomy.FilterEntry.prototype = {
    
    get_taxFilterType: function Microsoft_SharePoint_Taxonomy_FilterEntry$get_taxFilterType() {ULSXaE:;
        return this.$1C_0;
    },
    
    $3L_0: null,
    
    get_value: function Microsoft_SharePoint_Taxonomy_FilterEntry$get_value() {ULSXaE:;
        return this.$s_0;
    },
    
    $s_0: null,
    
    evaluate: function Microsoft_SharePoint_Taxonomy_FilterEntry$evaluate(node) {ULSXaE:;
        if (!node) {
            return false;
        }
        var $v_0 = false;
        switch (this.$1C_0) {
            case 1:
                if (node.get_id() === this.$s_0) {
                    $v_0 = true;
                }
                break;
            case 2:
                if (node.$5_2 && node.$k_2 <= 0) {
                    $v_0 = true;
                }
                break;
            case 3:
                if (node.$0_2 === this.$s_0) {
                    $v_0 = true;
                }
                else if (this.$s_0 === 3 && node.$0_2 === 1) {
                    node.set_isChildrenLoaded(true);
                    node.set_isPreloaded(true);
                    node.set_isLeaf(true);
                }
                break;
            case 4:
                if (node.get_disabled()) {
                    $v_0 = true;
                }
                break;
            case 5:
                if (node.get_isPinned()) {
                    $v_0 = true;
                }
                break;
            default:
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorUnknownFilterType);
        }
        return $v_0;
    }
}


Microsoft.SharePoint.Taxonomy.TaxonomyDataSource = function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource() {ULSXaE:;
    this.$$d_$3V_2 = Function.createDelegate(this, this.$3V_2);
    this.$$d_onExpandToNodeComplete = Function.createDelegate(this, this.onExpandToNodeComplete);
    this.$$d_onCopyComplete = Function.createDelegate(this, this.onCopyComplete);
    this.$$d_onMergeComplete = Function.createDelegate(this, this.onMergeComplete);
    this.$$d_onMoveComplete = Function.createDelegate(this, this.onMoveComplete);
    this.$$d_onReuseTermComplete = Function.createDelegate(this, this.onReuseTermComplete);
    this.$$d_onDeleteItemComplete = Function.createDelegate(this, this.onDeleteItemComplete);
    this.$$d_onCreateItemComplete = Function.createDelegate(this, this.onCreateItemComplete);
    this.$$d_onChangeItemNameComplete = Function.createDelegate(this, this.onChangeItemNameComplete);
    this.$$d_onGetAnchorTermCompleted = Function.createDelegate(this, this.onGetAnchorTermCompleted);
    this.$$d_onGetTermSetAsRootsCompleted = Function.createDelegate(this, this.onGetTermSetAsRootsCompleted);
    this.$$d_onGetSspsAsRootsCompleted = Function.createDelegate(this, this.onGetSspsAsRootsCompleted);
    this.$$d_onGetRootCompleted = Function.createDelegate(this, this.onGetRootCompleted);
    this.$$d_onBackgroundWebServiceCallFailure = Function.createDelegate(this, this.onBackgroundWebServiceCallFailure);
    this.$$d_onPreloadCompleted = Function.createDelegate(this, this.onPreloadCompleted);
    this.$$d_onGetChildrenFailed = Function.createDelegate(this, this.onGetChildrenFailed);
    this.$$d_onGetChildrenCompleted = Function.createDelegate(this, this.onGetChildrenCompleted);
    this.$$d_onFailed = Function.createDelegate(this, this.onFailed);
    this.$$d_onDeprecateTermComplete = Function.createDelegate(this, this.onDeprecateTermComplete);
    this.$$d_$3C_2 = Function.createDelegate(this, this.$3C_2);
    this.$$d_$3D_2 = Function.createDelegate(this, this.$3D_2);
    this.$2_2 = [];
    this.$19_2 = '00000000-0000-0000-0000-000000000000';
    this.$1w_2 = 0;
    this.$7_2 = '00000000-0000-0000-0000-000000000000';
    this.$6_2 = '00000000-0000-0000-0000-000000000000';
    this.$3_2 = 0;
    this.$1B_2 = -1;
    Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.initializeBase(this);
    for (var $v_0 = 0; $v_0 < this.$2_2.length; $v_0++) {
        this.$2_2[$v_0] = null;
    }
    Sys.Net.WebRequestManager.add_invokingRequest(this.$$d_$3D_2);
    Sys.Net.WebRequestManager.add_completedRequest(this.$$d_$3C_2);
    this.$1b_2 = {};
}
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$M = function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$M($p0, $p1) {
    if (!$p0) {
        return;
    }
    else if ($p1 === 'Invalid term store ID') {
        var $v_0 = ($p0.$9_2).get_sspId();
        if ($v_0 !== '00000000-0000-0000-0000-000000000001' && $v_0 !== '00000000-0000-0000-0000-000000000000') {
            ($p0.$9_2).set_sspId('00000000-0000-0000-0000-000000000000');
        }
        if (!$p0.get_roots().get_firstChild()) {
            var $v_1 = Microsoft.SharePoint.Taxonomy.TreeNode.createANewTreeNode(true);
            $v_1.$0_2 = 0;
            $p0.get_roots().addChild($v_1);
        }
        $p0.get_roots().get_firstChild().setFocus();
    }
    else {
        $p0.displayError($p1);
    }
}
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$1d = function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$1d($p0) {
    if (!$p0 || typeof($p0) !== 'object') {
        return $p0;
    }
    if ($p0.constructor === Array) {
        return [].concat($p0);
    }
    var $v_0 = {};
    var $$dict_2 = $p0;
    for (var $$key_3 in $$dict_2) {
        var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
        $v_0[$v_1.key] = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$1d($v_1.value);
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.isHashtag = function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$isHashtag(node) {ULSXaE:;
    if (Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(node) === '3ceb0050-69a1-40e7-a427-83e2fac80c27') {
        return true;
    }
    return false;
}
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId = function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$getTermSetId(node) {ULSXaE:;
    var $v_0 = '00000000-0000-0000-0000-000000000000';
    if (!node) {
        throw Error.argumentNull('node');
    }
    if (node.$0_2 === 3) {
        $v_0 = node.get_id();
    }
    else if (node.$0_2 === 4 || node.$0_2 === 7 || node.$0_2 === 10) {
        var $v_1 = node;
        while ($v_1 && ($v_1.$0_2 !== 3 && $v_1.$0_2 !== 12 && $v_1.$0_2 !== 6 && $v_1.$0_2 !== 9)) {
            $v_1 = $v_1.get_parentNode();
        }
        if ($v_1) {
            $v_0 = $v_1.get_id();
        }
        else if (node.$0_2 === 4) {
            $v_0 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$21;
        }
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.objectToArray = function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$objectToArray(obj) {ULSXaE:;
    var $v_0 = obj;
    if (!$v_0) {
        $v_0 = [];
    }
    try {
        var $v_1 = $v_0.length;
    }
    catch ($$e_3) {
        Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError('not an array:' + obj);
        throw Error.format();
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.isTermDeprecated = function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$isTermDeprecated(data) {ULSXaE:;
    var $v_0 = false;
    if (!SP.ScriptUtility.isNullOrUndefined(data) && data.Ip) {
        $v_0 = data.Ip;
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$2P = function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$2P($p0) {
    return 'c866ca65-f095-4a16-9249-028d500f7703' === $p0 || 'd41a92ec-33dc-4720-bd03-3a00287653e4' === $p0 || '22035077-2e30-450f-99ac-889a3bec24d8' === $p0 || '190a2c19-cb43-4b06-b5bb-db50945aefbf' === $p0;
}
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.isTermSetOpen = function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$isTermSetOpen(node) {ULSXaE:;
    if (!node) {
        throw Error.argumentNull('node');
    }
    var $v_0 = false;
    if (node.$0_2 === 3 || node.$0_2 === 4) {
        if (node.$5_2) {
            $v_0 = node.$5_2.Io;
        }
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$2X = function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$2X($p0, $p1) {
    if ($p0 && $p0.get_parentNode()) {
        $p0.get_parentNode().$5_2.Lm = $p1;
    }
}
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$U = function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$U($p0, $p1) {
    if ($p0) {
        $p0.$5_2.Lm = $p1;
        $p0.get_$1_2().$3N_2();
    }
}
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.prototype = {
    
    dispose: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$dispose() {ULSXaE:;
        Sys.Net.WebRequestManager.remove_invokingRequest(this.$$d_$3D_2);
        Sys.Net.WebRequestManager.remove_completedRequest(this.$$d_$3C_2);
        Sys.Component.prototype.dispose.call(this);
    },
    
    webTaggingAddTerm: null,
    
    get_rootECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_rootECBMenu() {ULSXaE:;
        if (this.$2_2[0]) {
            return (this.$2_2[0]).id;
        }
        else {
            return null;
        }
    },
    set_rootECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_rootECBMenu(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$2_2[0] = $get(value);
            if (!this.$2_2[0]) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    get_groupECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_groupECBMenu() {ULSXaE:;
        if (this.$2_2[1]) {
            return (this.$2_2[1]).id;
        }
        else {
            return null;
        }
    },
    set_groupECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_groupECBMenu(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$2_2[1] = $get(value);
            if (!this.$2_2[1]) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    get_groupNoDeleteECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_groupNoDeleteECBMenu() {ULSXaE:;
        if (this.$2_2[2]) {
            return (this.$2_2[2]).id;
        }
        else {
            return null;
        }
    },
    set_groupNoDeleteECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_groupNoDeleteECBMenu(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$2_2[2] = $get(value);
            if (!this.$2_2[2]) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    get_dictionaryGroupECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_dictionaryGroupECBMenu() {ULSXaE:;
        if (this.$2_2[13]) {
            return (this.$2_2[13]).id;
        }
        return null;
    },
    set_dictionaryGroupECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_dictionaryGroupECBMenu(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$2_2[13] = $get(value);
            if (!this.$2_2[13]) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    get_termSetECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_termSetECBMenu() {ULSXaE:;
        if (this.$2_2[3]) {
            return (this.$2_2[3]).id;
        }
        else {
            return null;
        }
    },
    set_termSetECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_termSetECBMenu(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$2_2[3] = $get(value);
            this.$2_2[6] = this.$2_2[3];
            if (!this.$2_2[3]) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    get_dictionaryECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_dictionaryECBMenu() {ULSXaE:;
        if (this.$2_2[12]) {
            return (this.$2_2[12]).id;
        }
        return null;
    },
    set_dictionaryECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_dictionaryECBMenu(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$2_2[12] = $get(value);
            if (!this.$2_2[12]) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    get_termECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_termECBMenu() {ULSXaE:;
        if (this.$2_2[4]) {
            return (this.$2_2[4]).id;
        }
        else {
            return null;
        }
    },
    set_termECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_termECBMenu(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$2_2[4] = $get(value);
            if (!this.$2_2[4]) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    get_dictionaryTermECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_dictionaryTermECBMenu() {ULSXaE:;
        if (this.$2_2[14]) {
            return (this.$2_2[14]).id;
        }
        else {
            return null;
        }
    },
    set_dictionaryTermECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_dictionaryTermECBMenu(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$2_2[14] = $get(value);
            if (!this.$2_2[14]) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    get_leafTermECBMenuID: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_leafTermECBMenuID() {ULSXaE:;
        if (this.$o_2) {
            return this.$o_2.id;
        }
        else {
            return null;
        }
    },
    set_leafTermECBMenuID: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_leafTermECBMenuID(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$o_2 = $get(value);
            if (!this.$o_2) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    $o_2: null,
    
    get_keywordECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_keywordECBMenu() {ULSXaE:;
        if (this.$2_2[7]) {
            return (this.$2_2[7]).id;
        }
        else {
            return null;
        }
    },
    set_keywordECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_keywordECBMenu(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$2_2[7] = $get(value);
            if (!this.$2_2[7]) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    get_hashtagECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_hashtagECBMenu() {ULSXaE:;
        if (this.$2_2[16]) {
            return (this.$2_2[16]).id;
        }
        else {
            return null;
        }
    },
    set_hashtagECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_hashtagECBMenu(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$2_2[16] = $get(value);
            if (!this.$2_2[16]) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    get_keywordSetECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_keywordSetECBMenu() {ULSXaE:;
        if (this.$2_2[6]) {
            return (this.$2_2[6]).id;
        }
        else {
            return null;
        }
    },
    set_keywordSetECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_keywordSetECBMenu(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$2_2[6] = $get(value);
            if (!this.$2_2[6]) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    get_hashtagSetECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_hashtagSetECBMenu() {ULSXaE:;
        if (this.$2_2[15]) {
            return (this.$2_2[15]).id;
        }
        else {
            return null;
        }
    },
    set_hashtagSetECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_hashtagSetECBMenu(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$2_2[15] = $get(value);
            if (!this.$2_2[15]) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    get_deprecatedTermECBMenuID: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_deprecatedTermECBMenuID() {ULSXaE:;
        if (this.$n_2) {
            return this.$n_2.id;
        }
        else {
            return null;
        }
    },
    set_deprecatedTermECBMenuID: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_deprecatedTermECBMenuID(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$n_2 = $get(value);
            if (!this.$n_2) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    $n_2: null,
    
    getDeprecatedTermECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$getDeprecatedTermECBMenu() {ULSXaE:;
        return this.$n_2;
    },
    
    get_reusedTermNoSourceAccessECBMenuID: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_reusedTermNoSourceAccessECBMenuID() {ULSXaE:;
        if (this.$17_2) {
            return this.$17_2.id;
        }
        else {
            return null;
        }
    },
    set_reusedTermNoSourceAccessECBMenuID: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_reusedTermNoSourceAccessECBMenuID(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$17_2 = $get(value);
            if (!this.$17_2) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    $17_2: null,
    
    get_reusedLeafNoSourceAccessECBMenuID: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_reusedLeafNoSourceAccessECBMenuID() {ULSXaE:;
        if (this.$14_2) {
            return this.$14_2.id;
        }
        else {
            return null;
        }
    },
    set_reusedLeafNoSourceAccessECBMenuID: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_reusedLeafNoSourceAccessECBMenuID(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$14_2 = $get(value);
            if (!this.$14_2) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    $14_2: null,
    
    get_reusedNoSourceAccessDeprecatedECBMenuID: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_reusedNoSourceAccessDeprecatedECBMenuID() {ULSXaE:;
        if (this.$15_2) {
            return this.$15_2.id;
        }
        else {
            return null;
        }
    },
    set_reusedNoSourceAccessDeprecatedECBMenuID: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_reusedNoSourceAccessDeprecatedECBMenuID(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$15_2 = $get(value);
            if (!this.$15_2) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    $15_2: null,
    
    get_reusedTermECBMenuID: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_reusedTermECBMenuID() {ULSXaE:;
        if (this.$16_2) {
            return this.$16_2.id;
        }
        else {
            return null;
        }
    },
    set_reusedTermECBMenuID: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_reusedTermECBMenuID(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$16_2 = $get(value);
            if (!this.$16_2) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    $16_2: null,
    
    get_reusedLeafECBMenuID: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_reusedLeafECBMenuID() {ULSXaE:;
        if (this.$13_2) {
            return this.$13_2.id;
        }
        else {
            return null;
        }
    },
    set_reusedLeafECBMenuID: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_reusedLeafECBMenuID(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$13_2 = $get(value);
            if (!this.$13_2) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    $13_2: null,
    
    get_pinnedRootECBMenuID: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_pinnedRootECBMenuID() {ULSXaE:;
        if (this.$12_2) {
            return this.$12_2.id;
        }
        else {
            return null;
        }
    },
    set_pinnedRootECBMenuID: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_pinnedRootECBMenuID(value) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.$12_2 = $get(value);
            if (!this.$12_2) {
                throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
            }
        }
        return value;
    },
    
    $12_2: null,
    
    get_sspId: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_sspId() {ULSXaE:;
        if (SP.ScriptUtility.isNullOrEmptyString(this.$19_2)) {
            this.$19_2 = '00000000-0000-0000-0000-000000000000';
        }
        return this.$19_2;
    },
    set_sspId: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_sspId(value) {ULSXaE:;
        this.$19_2 = value;
        return value;
    },
    
    get_displayLcid: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_displayLcid() {ULSXaE:;
        return this.$1g_2;
    },
    set_displayLcid: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_displayLcid(value) {ULSXaE:;
        if (this.$1g_2 !== value) {
            this.$1g_2 = value;
        }
        return value;
    },
    
    $1g_2: 1033,
    
    get_rootNodeType: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_rootNodeType() {ULSXaE:;
        return this.$1w_2;
    },
    set_rootNodeType: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_rootNodeType(value) {ULSXaE:;
        if ((value <= -1) || (value >= 17)) {
            throw Error.argumentOutOfRange('rootNodeType');
        }
        else {
            this.$1w_2 = value;
        }
        return value;
    },
    
    get_rootGuids: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_rootGuids() {ULSXaE:;
        return this.$l_2;
    },
    set_rootGuids: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_rootGuids(value) {ULSXaE:;
        this.$l_2 = value;
        return value;
    },
    
    $l_2: null,
    $N_2: '',
    
    get_initialNodeSelected: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_initialNodeSelected() {ULSXaE:;
        return this.$N_2;
    },
    set_initialNodeSelected: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_initialNodeSelected(value) {ULSXaE:;
        this.$N_2 = value;
        return value;
    },
    
    get_anchorTermId: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_anchorTermId() {ULSXaE:;
        return this.$t_2;
    },
    set_anchorTermId: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_anchorTermId(value) {ULSXaE:;
        this.$t_2 = value;
        return value;
    },
    
    $t_2: null,
    
    get_mode: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_mode() {ULSXaE:;
        return this.$3_2;
    },
    set_mode: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_mode(value) {ULSXaE:;
        this.$3_2 = value;
        return value;
    },
    
    get_manualShowNonTaggingTermSets: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_manualShowNonTaggingTermSets() {ULSXaE:;
        return this.$d_2;
    },
    set_manualShowNonTaggingTermSets: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_manualShowNonTaggingTermSets(value) {ULSXaE:;
        this.$d_2 = value;
        return value;
    },
    
    get_manualShowDeprecatedTerms: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_manualShowDeprecatedTerms() {ULSXaE:;
        return this.$1t_2;
    },
    set_manualShowDeprecatedTerms: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_manualShowDeprecatedTerms(value) {ULSXaE:;
        this.$1t_2 = value;
        return value;
    },
    
    get_siteUrl: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_siteUrl() {ULSXaE:;
        return this.$2g_2;
    },
    set_siteUrl: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_siteUrl(value) {ULSXaE:;
        this.$2g_2 = value;
        return value;
    },
    
    get_webId: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_webId() {ULSXaE:;
        return this.$7_2;
    },
    set_webId: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_webId(value) {ULSXaE:;
        this.$7_2 = value;
        return value;
    },
    
    get_listId: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_listId() {ULSXaE:;
        return this.$6_2;
    },
    set_listId: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$set_listId(value) {ULSXaE:;
        this.$6_2 = value;
        return value;
    },
    
    $1t_2: true,
    $d_2: true,
    $2g_2: null,
    
    get_webServiceUrl: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$get_webServiceUrl() {ULSXaE:;
        if (SP.ScriptUtility.isNullOrEmptyString(this.$25_2)) {
            this.$25_2 = Microsoft.SharePoint.Taxonomy.TreeUtility.getPageUrlInSite('/_vti_bin/taxonomyinternalservice.json');
        }
        return this.$25_2;
    },
    
    $25_2: null,
    
    isInWebTaggingMode: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$isInWebTaggingMode() {ULSXaE:;
        return (this.$3_2 === 1);
    },
    
    deprecateTerm: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$deprecateTerm(node, toDeprecate) {ULSXaE:;
        if (!node) {
            throw Error.argumentNull('node');
        }
        var $v_0 = {};
        $v_0['sspId'] = this.getSspId(node);
        $v_0['termId'] = node.get_id();
        $v_0['toDeprecate'] = toDeprecate;
        $v_0['webId'] = this.$7_2;
        $v_0['listId'] = this.$6_2;
        $v_0['lcid'] = this.get_displayLcid();
        this.$8_2('DeprecateTerm', $v_0, node, this.$$d_onDeprecateTermComplete, this.$$d_onFailed);
    },
    
    raiseGetChildrenEvent: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$raiseGetChildrenEvent(node) {ULSXaE:;
        if (!node) {
            throw Error.argumentNull('node');
        }
        var $v_0 = {};
        $v_0['sspId'] = this.getSspId(node);
        $v_0['lcid'] = this.get_displayLcid();
        this.$f_2($v_0);
        if (this.$3_2 === 6) {
            $v_0['includeNoneTaggableTermset'] = this.$d_2;
        }
        else if (!this.$3_2) {
            $v_0['includeNoneTaggableTermset'] = true;
        }
        else {
            $v_0['includeNoneTaggableTermset'] = false;
        }
        $v_0['webId'] = this.$7_2;
        $v_0['listId'] = this.$6_2;
        switch (node.$0_2) {
            case 11:
            case 0:
                this.$1y_2($v_0);
                this.$8_2('GetGroups', $v_0, node, this.$$d_onGetChildrenCompleted, this.$$d_onGetChildrenFailed);
                break;
            case 1:
            case 8:
                $v_0['guid'] = node.get_id();
                this.$8_2('GetTermSets', $v_0, node, this.$$d_onGetChildrenCompleted, this.$$d_onGetChildrenFailed);
                break;
            case 3:
            case 6:
            case 12:
            case 9:
                $v_0['guid'] = node.get_id();
                if (this.$3_2 === 6) {
                    $v_0['includeNoneTaggableTermset'] = !this.$d_2;
                }
                else if (this.$3_2 === 3 || this.$3_2 === 4 || this.$3_2 === 2) {
                    $v_0['includeNoneTaggableTermset'] = true;
                }
                $v_0['includeCurrentChild'] = true;
                $v_0['currentChildId'] = '00000000-0000-0000-0000-000000000000';
                $v_0['pagingForward'] = true;
                $v_0['pageLimit'] = node.get_$1_2().$H_2;
                this.$8_2('GetChildTermsInTermSetWithPaging', $v_0, node, this.$$d_onGetChildrenCompleted, this.$$d_onGetChildrenFailed);
                break;
            case 4:
                $v_0['guid'] = node.get_id();
                if (this.$3_2 === 6) {
                    $v_0['includeNoneTaggableTermset'] = !this.$d_2;
                }
                else if (this.$3_2 === 3 || this.$3_2 === 4 || this.$3_2 === 2) {
                    $v_0['includeNoneTaggableTermset'] = true;
                }
                $v_0['termsetId'] = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(node);
                $v_0['includeCurrentChild'] = true;
                $v_0['currentChildId'] = '00000000-0000-0000-0000-000000000000';
                $v_0['pagingForward'] = true;
                $v_0['pageLimit'] = node.get_$1_2().$H_2;
                this.$8_2('GetChildTermsInTermWithPaging', $v_0, node, this.$$d_onGetChildrenCompleted, this.$$d_onGetChildrenFailed);
                break;
            default:
                throw Error.invalidOperation();
        }
    },
    
    onGetChildrenCompleted: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onGetChildrenCompleted(result, userContext, methodName) {ULSXaE:;
        var $v_0 = null;
        var $v_1 = userContext;
        if (!$v_1) {
            throw Error.argumentNull('userContext');
        }
        if (this.$F_2(result)) {
            var $v_2 = result.Content;
            $v_0 = this.$1u_2($v_2, $v_1);
        }
        else {
            Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$M($v_1.get_$1_2(), result.Error);
        }
        $v_1.getChildrenCallBack($v_0);
    },
    
    $1u_2: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$1u_2($p0, $p1) {
        var $v_0 = null;
        if ($p0 && (($p0).length)) {
            var $v_1;
            switch ($p1.$0_2) {
                case 11:
                case 0:
                    $v_1 = 1;
                    break;
                case 1:
                case 8:
                    $v_1 = 3;
                    break;
                case 3:
                case 12:
                    $v_1 = 4;
                    break;
                case 6:
                    $v_1 = 7;
                    break;
                case 9:
                    $v_1 = 10;
                    break;
                case 4:
                    $v_1 = 4;
                    break;
                default:
                    throw Error.invalidOperation(Microsoft.SharePoint.Taxonomy.ScriptResources.errorUnknownNodeType);
            }
            $v_0 = this.$1a_2($p0, $v_1, $p1.get_$1_2());
        }
        return $v_0;
    },
    
    onGetChildrenFailed: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onGetChildrenFailed(error, userContext, methodName) {ULSXaE:;
        if (!error) {
            throw Error.argumentNull('error');
        }
        else {
            Microsoft.SharePoint.Taxonomy.TreeUtility.showError(error.get_message());
        }
        var $v_0 = userContext;
        if (!$v_0) {
            throw Error.argumentNull('userContext');
        }
    },
    
    raisePreloadEvent: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$raisePreloadEvent(node) {ULSXaE:;
        if (!node) {
            throw Error.argumentNull('node');
        }
        if (node.get_isLeaf()) {
            return;
        }
        var $v_0 = false;
        if (node.get_childList()) {
            var $v_2 = node.get_childList().get_$1G_2();
            for (var $v_3 = 0; $v_3 < node.get_childList().get_count(); $v_3++) {
                var $v_4 = $v_2[$v_3].control;
                if ($v_4 && !$v_4.get_isLeaf()) {
                    $v_0 = true;
                    break;
                }
            }
        }
        if (!$v_0) {
            return;
        }
        Microsoft.SharePoint.Taxonomy.TreeNodeDataSource.prototype.raisePreloadEvent.call(this, node);
        var $v_1 = {};
        $v_1['sspId'] = this.getSspId(node);
        $v_1['lcid'] = this.get_displayLcid();
        this.$f_2($v_1);
        if (this.$3_2 === 5) {
            $v_1['includeDeprecated'] = true;
        }
        $v_1['includeNoneTaggableTermset'] = true;
        $v_1['webId'] = this.$7_2;
        $v_1['listId'] = this.$6_2;
        switch (node.$0_2) {
            case 0:
            case 11:
                this.$1F_2('PreloadTermSetsInRoot', $v_1, node, this.$$d_onPreloadCompleted, this.$$d_onBackgroundWebServiceCallFailure);
                break;
            case 1:
            case 8:
                $v_1['guid'] = node.get_id();
                $v_1['pageLimit'] = node.get_$1_2().$H_2;
                this.$1F_2('PreloadTermsInGroupWithPaging', $v_1, node, this.$$d_onPreloadCompleted, this.$$d_onBackgroundWebServiceCallFailure);
                break;
            case 3:
                $v_1['guid'] = node.get_id();
                $v_1['pageLimit'] = node.get_$1_2().$H_2;
                this.$1F_2('PreloadTermsForTermSetWithPaging', $v_1, node, this.$$d_onPreloadCompleted, this.$$d_onBackgroundWebServiceCallFailure);
                break;
            case 4:
                $v_1['guid'] = node.get_id();
                $v_1['termsetId'] = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(node);
                $v_1['pageLimit'] = node.get_$1_2().$H_2;
                this.$1F_2('PreloadTermsForTermWithPaging', $v_1, node, this.$$d_onPreloadCompleted, this.$$d_onBackgroundWebServiceCallFailure);
                break;
            default:
                Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError('preload - type unassigned');
                throw Error.invalidOperation();
        }
    },
    
    onPreloadCompleted: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onPreloadCompleted(result, userContext, methodName) {ULSXaE:;
        var $v_0 = null;
        var $v_1 = userContext;
        if (!$v_1) {
            throw Error.argumentNull('userContext');
        }
        if (this.$F_2(result)) {
            var $v_2 = result.Content;
            var $v_3;
            switch ($v_1.$0_2) {
                case 0:
                case 11:
                    $v_3 = 3;
                    break;
                case 1:
                case 8:
                    $v_3 = 4;
                    break;
                case 3:
                    $v_3 = 4;
                    break;
                case 4:
                    $v_3 = 4;
                    break;
                default:
                    throw Error.invalidOperation(Microsoft.SharePoint.Taxonomy.ScriptResources.errorUnknownNodeType);
            }
            var $v_4 = $v_2;
            if ($v_4) {
                $v_0 = new Array($v_4.length);
                for (var $v_5 = 0; $v_5 < $v_4.length; $v_5++) {
                    $v_0[$v_5] = this.$1a_2($v_4[$v_5].Ch, $v_3, $v_1.get_$1_2());
                    $v_0[$v_5].get_domNode().id = $v_4[$v_5].PId;
                }
            }
        }
        else {
            Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$M($v_1.get_$1_2(), result.Error);
        }
        $v_1.getPreloadCallBack($v_0);
    },
    
    onBackgroundWebServiceCallFailure: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onBackgroundWebServiceCallFailure(error, userContext, methodName) {ULSXaE:;
        if (!error) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError('Web service call failed but error Object is null');
            return;
        }
        if (!this.$Z_2) {
        }
        else if (this.$Z_2.get_aborted()) {
        }
        else if (this.$Z_2.get_timedOut()) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError('timeout:' + error.get_message());
        }
        else {
            Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError(error.get_message() + '\nmethod: ' + methodName + '\nExceptionType: ' + error.get_exceptionType() + '\nStackTrace: ' + error.get_stackTrace());
            var $v_0 = userContext;
            if (!$v_0) {
                throw Error.argumentNull('userContext');
            }
            $v_0.set_isPreloaded(true);
        }
    },
    
    getRoots: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$getRoots(targetTree) {ULSXaE:;
        if (!targetTree) {
            throw Error.argumentNull('targetTree');
        }
        if (!this.get_rootNodeType()) {
            var $v_0 = {};
            $v_0['sspId'] = this.get_sspId();
            $v_0['webId'] = this.$7_2;
            $v_0['listId'] = this.$6_2;
            this.$8_2('CheckPermission', $v_0, targetTree, this.$$d_onGetRootCompleted, this.$$d_onFailed);
        }
        else if (this.get_rootNodeType() === 11) {
            if (this.$3_2 === 2 || this.$3_2 === 6) {
                var $v_1 = {};
                $v_1['webId'] = this.$7_2;
                $v_1['listId'] = this.$6_2;
                $v_1['lcid'] = this.get_displayLcid();
                this.$8_2('PickSsps', $v_1, targetTree, this.$$d_onGetSspsAsRootsCompleted, this.$$d_onFailed);
            }
        }
        else if (this.get_sspId() === '00000000-0000-0000-0000-000000000000' || this.get_sspId() === '00000000-0000-0000-0000-000000000001') {
        }
        else if (this.get_rootNodeType() === 3) {
            if (SP.ScriptUtility.isNullOrEmptyString(this.$t_2) || this.$t_2 === '00000000-0000-0000-0000-000000000000') {
                var $v_2 = {};
                $v_2['sspIds'] = this.get_sspId();
                $v_2['termsetGuids'] = this.$l_2;
                $v_2['webId'] = this.$7_2;
                $v_2['listId'] = this.$6_2;
                $v_2['lcid'] = this.get_displayLcid();
                this.$8_2('PickTermSets', $v_2, targetTree, this.$$d_onGetTermSetAsRootsCompleted, this.$$d_onFailed);
            }
            else {
                var $v_3 = {};
                $v_3['sspId'] = this.get_sspId();
                $v_3['lcid'] = this.get_displayLcid();
                $v_3['termSetId'] = this.$l_2;
                $v_3['anchorId'] = this.$t_2;
                this.$8_2('GetTermSetWAnchorTerm', $v_3, targetTree, this.$$d_onGetAnchorTermCompleted, this.$$d_onFailed);
            }
        }
        else if (this.get_rootNodeType() === 1) {
        }
        else {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorInvalidRootNodeType);
        }
    },
    
    onGetRootCompleted: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onGetRootCompleted(result, userContext, methodName) {ULSXaE:;
        var $v_0 = userContext;
        if (!$v_0) {
            throw Error.argumentNull('userContext');
        }
        if (this.$F_2(result)) {
            var $v_1 = this.renderTreeNode(result.Content, 0, true);
            $v_1.get_domNode().id = 'TaxonomyRootID';
            var $v_2 = Microsoft.SharePoint.Taxonomy.TreeNodeCollection.createANewTreeNodeCollection();
            $v_2.get_domNode().id = $v_1.get_id() + '_ul';
            $v_2.addChild($v_1);
            $v_0.set_roots($v_2);
            if (!SP.ScriptUtility.isNullOrEmptyString(this.$N_2)) {
                $v_0.expandToNodeWithPaging(this.$N_2);
            }
            else {
                $v_1.setFocus();
                if (this.get_sspId() !== '00000000-0000-0000-0000-000000000000' && this.get_sspId() !== '00000000-0000-0000-0000-000000000001') {
                    $v_1.loadChildren();
                }
                else {
                    $v_1.set_isLeaf(true);
                    $v_1.set_disabled(true);
                }
            }
        }
        else {
            Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$M($v_0, result.Error);
        }
    },
    
    onGetSspsAsRootsCompleted: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onGetSspsAsRootsCompleted(result, userContext, methodName) {ULSXaE:;
        var $v_0 = userContext;
        if (!$v_0) {
            throw Error.argumentNull('userContext');
        }
        if (this.$F_2(result)) {
            var $v_1 = result.Content;
            if ($v_1 && (($v_1).length)) {
                $v_0.set_roots(this.$1a_2($v_1, 11, $v_0));
            }
            else {
                var $v_2 = Microsoft.SharePoint.Taxonomy.TreeNode.createANewTreeNode(true);
                $v_2.set_text(Microsoft.SharePoint.Taxonomy.ScriptResources.fieldEditor_NoDataReturned);
                $v_2.set_isLeaf(true);
                $v_0.get_roots().addChild($v_2);
            }
            if (!SP.ScriptUtility.isNullOrEmptyString(this.$N_2)) {
                $v_0.expandToNodeWithPaging(this.$N_2);
            }
        }
        else {
        }
    },
    
    onGetTermSetAsRootsCompleted: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onGetTermSetAsRootsCompleted(result, userContext, methodName) {ULSXaE:;
        var $v_0 = userContext;
        if (!$v_0) {
            throw Error.argumentNull('userContext');
        }
        if (this.$F_2(result)) {
            var $v_1 = result.Content;
            if ($v_1 && (($v_1).length)) {
                $v_0.set_roots(this.$1a_2($v_1, 3, $v_0));
                var $v_2 = $v_0.get_roots();
                var $v_3 = $v_2.get_firstChild();
                if (!SP.ScriptUtility.isNullOrUndefined($v_3)) {
                    if (this.$3_2 === 3) {
                        if (!$v_3.$5_2.It) {
                            $v_2.$2V_2();
                            var $v_4 = Microsoft.SharePoint.Taxonomy.TreeNode.createANewTreeNode(true);
                            $v_4.set_text(STSScriptEncode(Microsoft.SharePoint.Taxonomy.ScriptResources.errorTermSetNotAvailableForTagging));
                            $v_4.set_isLeaf(true);
                            $v_2.addChild($v_4);
                            this.$N_2 = '';
                        }
                    }
                    if (this.$3_2 === 1 && !Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.isTermSetOpen($v_3)) {
                        this.set_termSetECBMenu(null);
                        this.set_termECBMenu(null);
                        this.$o_2 = null;
                    }
                }
                if (!SP.ScriptUtility.isNullOrEmptyString(Microsoft.SharePoint.Taxonomy.Tree.$w)) {
                    $v_3.setFocus();
                }
                else if (!SP.ScriptUtility.isNullOrEmptyString(this.$N_2)) {
                    $v_0.expandToNodeWithPaging(this.$N_2);
                }
                else {
                    $v_3.setFocus();
                    $v_3.loadChildren();
                    if (!$v_3.$S_2) {
                        var $v_5 = $v_3.get_nextSibling();
                        while ($v_5) {
                            $v_5.loadChildren();
                            $v_5 = $v_5.get_nextSibling();
                        }
                    }
                }
            }
        }
        else {
        }
    },
    
    onGetAnchorTermCompleted: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onGetAnchorTermCompleted(result, userContext, methodName) {ULSXaE:;
        var $v_0 = userContext;
        if (!$v_0) {
            throw Error.argumentNull('userContext');
        }
        if (this.$F_2(result)) {
            var $v_1 = result.Content;
            if ($v_1) {
                var $v_2 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.objectToArray($v_1);
                if ($v_2 && $v_2.length >= 2) {
                    var $v_3 = $v_2[0].Io;
                    Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$21 = $v_2[0].Id;
                    var $v_4 = this.renderTreeNode($v_2[1], 4, !$v_3);
                    if ($v_4.$5_2) {
                        $v_4.$5_2.Mt = $v_2[0].Mt;
                    }
                    $v_0.get_roots().addChild($v_4);
                    if (!SP.ScriptUtility.isNullOrEmptyString(Microsoft.SharePoint.Taxonomy.Tree.$w)) {
                        $v_4.setFocus();
                    }
                    else if (!SP.ScriptUtility.isNullOrEmptyString(this.$N_2)) {
                        $v_0.expandToNodeWithPaging(this.$N_2);
                    }
                    else {
                        $v_4.setFocus();
                        $v_4.loadChildren();
                    }
                }
            }
        }
        else {
        }
    },
    
    onGetFindTermSetsCompleted: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onGetFindTermSetsCompleted(result, userContext, methodName) {ULSXaE:;
        var $v_0 = userContext;
        if (!$v_0) {
            throw Error.argumentNull('userContext');
        }
        if (this.$F_2(result)) {
            var $v_1 = result.Content;
            if ($v_1) {
                var $v_2 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.objectToArray($v_1);
                $v_0.$r_2 = true;
                var $v_3 = null;
                var $v_4 = null;
                for (var $v_5 = 0; $v_5 < $v_2.length; $v_5++) {
                    var $v_6 = $v_2[$v_5].Tp;
                    if ($v_6 === 11) {
                        if ($v_3) {
                            if ($v_4) {
                                $v_3.$a_2($v_4);
                            }
                            $v_0.get_roots().addChild($v_3);
                        }
                        $v_3 = this.renderTreeNode($v_2[$v_5], 11, true);
                        $v_3.set_isChildrenLoaded(true);
                        $v_3.set_isPreloaded(true);
                        $v_3.set_isExpanded(true);
                        $v_4 = null;
                    }
                    if ($v_6 === 1) {
                        if ($v_3 && $v_4) {
                            $v_3.$a_2($v_4);
                        }
                        $v_4 = this.renderTreeNode($v_2[$v_5], 1, true);
                        $v_4.set_isChildrenLoaded(true);
                        $v_4.set_isPreloaded(true);
                        $v_4.set_isExpanded(true);
                    }
                    else if ($v_6 === 3) {
                        var $v_7 = this.renderTreeNode($v_2[$v_5], 3, true);
                        $v_4.$a_2($v_7);
                    }
                }
                if ($v_3) {
                    if ($v_4) {
                        $v_3.$a_2($v_4);
                    }
                    $v_0.get_roots().addChild($v_3);
                }
            }
        }
    },
    
    onChangeItemNameComplete: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onChangeItemNameComplete(result, userContext, methodName) {ULSXaE:;
        var $v_0 = userContext;
        if (!$v_0) {
            throw Error.argumentNull('userContext');
        }
        if (!result || this.$F_2(result)) {
            $v_0.uiSaveNameChange();
            var $v_1 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.objectToArray(result.Content);
            var $v_2 = result.Lm;
            if ($v_1 && $v_0.get_$1_2()) {
                for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
                    var $v_4 = $v_0.get_$1_2().locateLoadedNodeByPath('TaxonomyRootID:' + $v_1[$v_3], ':');
                    if ($v_4) {
                        $v_4.set_text($v_0.get_text());
                        var $v_5 = $v_4.$5_2.It;
                        var $v_6 = $v_4.$5_2.LCP;
                        $v_4.$5_2 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$1d($v_0.$5_2);
                        $v_4.$5_2.It = $v_5;
                        $v_4.$5_2.LCP = $v_6;
                        Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$U($v_4, $v_2);
                    }
                }
            }
            Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$U($v_0, $v_2);
        }
        else {
            $v_0.set_text($v_0.textLabel.innerHTML);
            Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$M($v_0.get_$1_2(), result.Error);
        }
    },
    
    onCreateItemComplete: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onCreateItemComplete(result, userContext, methodName) {ULSXaE:;
        var $v_0 = userContext;
        if (!$v_0) {
            throw Error.argumentNull('userContext');
        }
        var $v_1 = $v_0.get_$1_2();
        if (this.$F_2(result)) {
            var $v_2 = result.Content;
            var $v_3 = this.renderTreeNode($v_2, $v_0.$0_2, false);
            $v_3.set_isLeaf(true);
            $v_3.set_isPreloaded(true);
            $v_3.set_isChildrenLoaded(true);
            Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$2X($v_0, result.Lm);
            $v_0.uiReplaceWithNewNode($v_3);
            this.$x_2(result, $v_0);
            if (this.$3_2 === 1 && this.webTaggingAddTerm) {
                this.webTaggingAddTerm($v_3);
            }
        }
        else {
            Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$M($v_0.get_$1_2(), result.Error);
            $v_0.set_text('');
            $v_0.$0_2 = Microsoft.SharePoint.Taxonomy.TreeNode.typeUnassigned;
            $v_0.uiDelete();
        }
    },
    
    $x_2: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$x_2($p0, $p1) {
        var $v_0 = $p0.PinData;
        if (!$v_0) {
            return;
        }
        var $v_1 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.objectToArray($v_0);
        var $v_2 = $p0.Lm;
        var $v_3 = $v_1.length;
        if ($v_1 && $p1.get_$1_2()) {
            for (var $v_4 = 0; $v_4 < $v_3; $v_4++) {
                var $v_5 = $p1.get_$1_2().locateLoadedNodeByPath('TaxonomyRootID:' + $v_1[$v_4], ':');
                if ($v_5) {
                    $v_5.refresh();
                    Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$U($v_5, $v_2);
                }
            }
        }
    },
    
    onDeleteItemComplete: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onDeleteItemComplete(result, userContext, methodName) {ULSXaE:;
        var $v_0 = userContext;
        if (!$v_0) {
            throw Error.argumentNull('userContext');
        }
        if (this.$F_2(result)) {
            var $v_1 = $v_0.get_parentNode();
            if (result && result.Content && $v_1) {
                Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$2X($v_1, result.Lm);
                var $v_5 = $v_1.get_childList().get_count();
                var $v_6 = $v_1.get_childList().hasMoreChildAfter;
                var $v_7 = $v_1.get_childList().hasMoreChildBefore;
                $v_1.$S_2--;
                this.onGetChildrenCompleted(result, $v_1, methodName);
                $v_1.setFocus();
                if ($v_5 === 1) {
                    if (!$v_7) {
                        $v_1.set_enablePageUpButton(false);
                    }
                    if (!$v_6) {
                        $v_1.set_enablePageDownButton(false);
                    }
                }
            }
            else {
                $v_0.uiDelete();
            }
            if ($v_1 && !$v_1.get_isOrphan()) {
                this.updateOrphanTermSet();
            }
            var $v_2 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.objectToArray(result.OtherData);
            var $v_3 = result.Lm;
            var $v_4 = $v_2.length;
            if ($v_2 && $v_0.get_$1_2()) {
                for (var $v_8 = 0; $v_8 < $v_4; $v_8++) {
                    var $v_9 = $v_0.get_$1_2().locateLoadedNodeByPath('TaxonomyRootID:' + $v_2[$v_8], ':');
                    if ($v_9) {
                        if ($v_4 === 1 && $v_9.get_$i_2()) {
                            $v_9.set_$L_2(false);
                        }
                        Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$U($v_9, $v_3);
                    }
                }
            }
            this.$x_2(result, $v_0);
        }
        else {
            Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$M($v_0.get_$1_2(), result.Error);
        }
    },
    
    $1z_2: null,
    $38_2: null,
    $j_2: null,
    
    onDeprecateTermComplete: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onDeprecateTermComplete(result, userContext, methodName) {ULSXaE:;
        var $v_0 = userContext;
        if (!$v_0) {
            throw Error.argumentNull('userContext');
        }
        if (this.$F_2(result)) {
            var $v_1 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.objectToArray(result.Content);
            var $v_2 = !$v_0.get_isDeprecated();
            if ($v_1 && $v_0.get_$1_2()) {
                for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
                    var $v_4 = $v_0.get_$1_2().locateLoadedNodeByPath('TaxonomyRootID:' + $v_1[$v_3], ':');
                    if ($v_4) {
                        $v_4.set_isDeprecated($v_2);
                    }
                }
            }
            Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$U($v_0, result.Lm);
        }
        else {
            Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$M($v_0.get_$1_2(), result.Error);
        }
    },
    
    onReuseTermComplete: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onReuseTermComplete(result, userContext, methodName) {ULSXaE:;
        var $v_0 = userContext;
        if (!$v_0) {
            throw Error.argumentNull('userContext');
        }
        if (this.$F_2(result)) {
            var $v_1 = result.Content;
            var $v_2 = $v_0.get_$1_2().locateLoadedNodeByPath('TaxonomyRootID:' + $v_1, ':');
            $v_0.refresh();
            $v_0.loadChildren();
            if ($v_2) {
                $v_2.set_$L_2(true);
                $v_2.refresh();
                Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$U($v_2, result.Lm);
            }
            this.$x_2(result, $v_0);
            $v_0.setFocus();
            Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$U($v_0, result.Lm);
        }
        else {
            Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$M($v_0.get_$1_2(), result.Error);
        }
    },
    
    updateReusedTermSource: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$updateReusedTermSource(node, path, isSource, delimitor) {ULSXaE:;
        if (!node) {
            throw Error.argumentNull('node');
        }
        var $v_0 = node.get_$1_2().locateLoadedNodeByPath('TaxonomyRootID' + delimitor + path, delimitor);
        if ($v_0) {
            $v_0.set_$i_2(isSource);
            if (node.$0_2 !== 4) {
                $v_0.set_$L_2(false);
            }
        }
    },
    
    onMoveComplete: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onMoveComplete(result, userContext, methodName) {ULSXaE:;
        var $v_0 = userContext;
        if (!$v_0) {
            throw Error.argumentNull('userContext');
        }
        if (this.$F_2(result)) {
            var $v_1 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.objectToArray(result.OtherData);
            if ($v_1 && $v_1.length < 1) {
                throw Error.argumentNull('reusedParentPaths');
            }
            var $v_2 = $v_1[0];
            if (this.get_rootNodeType() !== 3) {
                $v_2 = 'TaxonomyRootID:' + $v_2;
                var $v_6 = $v_1.length;
                for (var $v_7 = 1; $v_7 < $v_6; $v_7++) {
                    var $v_8 = $v_0.get_$1_2().locateLoadedNodeByPath('TaxonomyRootID:' + $v_1[$v_7], ':');
                    if ($v_8) {
                        $v_8.refresh();
                    }
                }
            }
            var $v_3 = $v_0.get_$1_2().locateLoadedNodeByPath($v_2, ':');
            var $v_4 = $v_0.get_parentNode();
            var $v_5 = null;
            if ($v_0.$0_2 === 7) {
                var $v_9 = result.NewKeywordId;
                if (!SP.ScriptUtility.isNullOrEmptyString($v_9)) {
                    var $v_A = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$1d($v_0.$5_2);
                    $v_A.It = false;
                    $v_A.Id = $v_9;
                    $v_5 = this.renderTreeNode($v_A, 7, $v_0.get_isReadOnly());
                    $v_5.set_isLeaf(true);
                    $v_5.set_isChildrenLoaded(true);
                    $v_5.set_isPreloaded(true);
                }
            }
            if ($v_3) {
                if ($v_0.$0_2 === 7) {
                    $v_0.$0_2 = 4;
                    $v_0.get_$1_2().set_focusNode($v_0);
                }
                if ($v_3.get_isChildrenLoaded()) {
                    if ($v_3.get_isLeaf() && $v_3.get_parentNode() && !$v_3.get_parentNode().get_isPreloaded()) {
                        $v_3.get_parentNode().set_isPreloaded(true);
                    }
                    if ($v_5) {
                        $v_4.get_childList().$2L_2($v_5, $v_0);
                    }
                    $v_3.$a_2($v_0);
                    $v_3.set_isExpanded(true);
                }
                else {
                    var $v_B = $v_3;
                    while ($v_B && $v_B !== $v_4) {
                        $v_B = $v_B.get_parentNode();
                    }
                    if (!$v_B) {
                        $v_3.loadChildren();
                    }
                    if (!$v_5) {
                        $v_0.uiDelete();
                    }
                    else {
                        $v_4.get_childList().$1v_2($v_5.get_domNode(), $v_0.get_domNode());
                    }
                }
            }
            else {
                if (!$v_5) {
                    $v_0.uiDelete();
                }
                else {
                    $v_4.get_childList().$1v_2($v_5.get_domNode(), $v_0.get_domNode());
                    $v_5.setFocus();
                }
            }
            if (result && result.Content && $v_4 && !$v_5) {
                var $v_C = $v_4.get_childList().get_count();
                var $v_D = $v_4.get_childList().hasMoreChildAfter;
                var $v_E = $v_4.get_childList().hasMoreChildBefore;
                $v_4.$S_2--;
                this.onGetChildrenCompleted(result, $v_4, methodName);
                if ($v_C === 1) {
                    if (!$v_E) {
                        $v_4.set_enablePageUpButton(false);
                    }
                    if (!$v_D) {
                        $v_4.set_enablePageDownButton(false);
                    }
                }
            }
            if ($v_4) {
                Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$U($v_4, result.Lm);
            }
            if ($v_3) {
                Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$U($v_3, result.Lm);
            }
            $v_0.get_$1_2().$3M_2();
            this.$x_2(result, $v_0);
        }
        else {
            Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$M($v_0.get_$1_2(), result.Error);
        }
    },
    
    onMergeComplete: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onMergeComplete(result, userContext, methodName) {ULSXaE:;
        var $v_0 = userContext;
        if (!$v_0) {
            throw Error.argumentNull('userContext');
        }
        if (this.$F_2(result)) {
            var $v_1 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.objectToArray(result.Content);
            if ($v_1 && $v_0.get_$1_2()) {
                for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                    var $v_3 = $v_1[$v_2].PId;
                    var $v_4 = $v_1[$v_2].Ch;
                    var $v_5 = $v_0.get_$1_2().locateLoadedNodeByPath('TaxonomyRootID:' + $v_3, ':');
                    if ($v_5) {
                        $v_5.getChildrenCallBack(this.$1u_2($v_4, $v_5));
                    }
                }
            }
            $v_0.uiDelete();
        }
        else {
            Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$M($v_0.get_$1_2(), result.Error);
        }
    },
    
    onCopyComplete: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onCopyComplete(result, userContext, methodName) {ULSXaE:;
        var $v_0 = userContext;
        if (!$v_0) {
            throw Error.argumentNull('userContext');
        }
        if (this.$F_2(result)) {
            var $v_1 = this.renderTreeNode(result.Content, $v_0.$0_2, $v_0.get_isReadOnly());
            if (($v_0.$0_2 === 4 && !this.$2O_2) || $v_0.$0_2 === 7 || $v_0.$0_2 === 10) {
                $v_1.set_isLeaf(true);
                $v_1.set_isChildrenLoaded(true);
                $v_1.set_isPreloaded(true);
            }
            else {
                $v_0.refresh();
                $v_1.refresh();
            }
            this.$x_2(result, $v_0);
            if ($v_0.get_parentNode()) {
                $v_0.get_parentNode().$a_2($v_1);
                $v_1.setFocus();
            }
        }
        else {
            Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$M($v_0.get_$1_2(), result.Error);
        }
    },
    
    $2O_2: false,
    
    onExpandToNodeComplete: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onExpandToNodeComplete(result, userContext, methodName) {ULSXaE:;
        var $v_0 = userContext;
        if (!$v_0) {
            throw Error.argumentNull('userContext');
        }
        if (this.$F_2(result)) {
            var $v_1 = result.Content;
            if ($v_1) {
                var $v_2 = null;
                for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
                    if ($v_0) {
                        $v_2 = this.$1u_2($v_1[$v_3].Ch, $v_0);
                        $v_0.set_isPreloaded(true);
                        $v_0.getChildrenCallBack($v_2);
                        if ($v_3 === $v_1.length - 1) {
                            $v_0 = $v_0.$2C_2(($v_1[0].PId).toLowerCase());
                        }
                        else {
                            $v_0 = $v_0.$2C_2($v_1[$v_3 + 1].PId);
                        }
                    }
                }
                if ($v_0) {
                    var $v_4 = $v_0;
                    $v_0 = $v_0.get_parentNode();
                    while ($v_0) {
                        if (!$v_0.get_isExpanded()) {
                            $v_0.set_isExpanded(true);
                        }
                        $v_0 = $v_0.get_parentNode();
                    }
                    $v_4.setFocus();
                }
            }
        }
        else {
            var $v_5 = result.Error;
            if ((methodName === 'ExpandToNodeById') && $v_5.indexOf('termId') > 0) {
            }
            else {
                Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$M($v_0.get_$1_2(), $v_5);
            }
        }
    },
    
    renderTreeNode: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$renderTreeNode(treeNodeJSON, type, readOnly) {ULSXaE:;
        var $v_0 = null;
        $v_0 = Microsoft.SharePoint.Taxonomy.TreeNode.createANewTreeNode(readOnly);
        this.$2B_2($v_0, type, treeNodeJSON);
        return $v_0;
    },
    
    getSspId: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$getSspId(node) {ULSXaE:;
        var $v_0 = this.get_sspId();
        if (!node) {
            throw Error.argumentNull('node');
        }
        if (this.get_rootNodeType() === 11) {
            if (node.$0_2 === 11) {
                $v_0 = node.get_id();
            }
            var $v_1 = node.get_parentNode();
            while ($v_1) {
                if ($v_1.$0_2 === 11) {
                    $v_0 = $v_1.get_id();
                    break;
                }
                $v_1 = $v_1.get_parentNode();
            }
        }
        else if (this.get_rootNodeType() === 3) {
            var $v_2 = node;
            while ($v_2 && $v_2.$0_2 !== 3) {
                $v_2 = $v_2.get_parentNode();
            }
            if ($v_2 && $v_2.$5_2) {
                $v_0 = ($v_2.$5_2.Sp);
            }
            if (SP.ScriptUtility.isNullOrEmptyString($v_0)) {
                $v_0 = this.get_sspId();
            }
        }
        return $v_0;
    },
    
    changeItemName: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$changeItemName(node, newName) {ULSXaE:;
        if (!node) {
            throw Error.argumentNull('node');
        }
        var $v_0 = {};
        $v_0['sspId'] = this.getSspId(node);
        $v_0['lcid'] = this.get_displayLcid();
        $v_0['itemType'] = node.$0_2;
        $v_0['itemId'] = node.get_id();
        $v_0['parentId'] = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(node);
        $v_0['newName'] = newName;
        $v_0['webId'] = this.$7_2;
        $v_0['listId'] = this.$6_2;
        this.$8_2('ChangeTaxonomyItemName', $v_0, node, this.$$d_onChangeItemNameComplete, this.$$d_onFailed);
    },
    
    createNewItem: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$createNewItem(parentNode, newName) {ULSXaE:;
        if (!parentNode) {
            throw Error.argumentNull('parentNode');
        }
        var $v_0 = 'CreateTaxonomyItem';
        var $v_1 = {};
        $v_1['sspId'] = this.getSspId(parentNode);
        $v_1['lcid'] = this.get_displayLcid();
        $v_1['parentType'] = parentNode.$0_2;
        $v_1['webId'] = this.$7_2;
        $v_1['listId'] = this.$6_2;
        if (parentNode.$0_2 === 0) {
            $v_1['parentId'] = '00000000-0000-0000-0000-000000000000';
        }
        else {
            $v_1['parentId'] = parentNode.get_id();
        }
        $v_1['termsetId'] = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(parentNode);
        $v_1['newName'] = newName;
        if (this.$3_2 === 3) {
            $v_0 = 'CreateTaxonomyItemInSiteGroup';
        }
        if (parentNode && parentNode.get_$1_2()) {
            var $v_2 = parentNode.get_$1_2().get_newNodeTemplate();
            switch (parentNode.$0_2) {
                case 0:
                    $v_2.$0_2 = 1;
                    break;
                case 1:
                case 8:
                    $v_2.$0_2 = 3;
                    break;
                case 3:
                case 12:
                    $v_2.$0_2 = 4;
                    break;
                case 6:
                    $v_2.$0_2 = 7;
                    break;
                case 9:
                    $v_2.$0_2 = 10;
                    break;
                case 4:
                    $v_2.$0_2 = 4;
                    break;
                default:
                    throw Error.invalidOperation(Microsoft.SharePoint.Taxonomy.ScriptResources.errorUnknownNodeType);
            }
            this.$8_2($v_0, $v_1, $v_2, this.$$d_onCreateItemComplete, this.$$d_onFailed);
        }
    },
    
    deleteItem: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$deleteItem(node) {ULSXaE:;
        if (!node) {
            throw Error.argumentNull('node');
        }
        var $v_0 = true;
        if (node.$0_2 === 1) {
            if (node.$S_2 > 0) {
                alert(Microsoft.SharePoint.Taxonomy.ScriptResources.msgCannotDeleteNonEmptyGroup);
                $v_0 = false;
            }
        }
        else {
            var $v_1 = Microsoft.SharePoint.Taxonomy.ScriptResources.msgConfirmTermDelete;
            if (node.$0_2 === 3) {
                $v_1 = Microsoft.SharePoint.Taxonomy.ScriptResources.msgConfirmTermSetDelete;
            }
            if (!confirm($v_1)) {
                $v_0 = false;
            }
        }
        if ($v_0) {
            var $v_2 = {};
            $v_2['sspId'] = this.getSspId(node);
            $v_2['lcid'] = this.get_displayLcid();
            $v_2['itemType'] = node.$0_2;
            $v_2['itemId'] = node.get_id();
            $v_2['termsetId'] = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(node);
            if (node.get_parentNode() && node.get_parentNode().get_childList() && (node.get_parentNode().get_childList().hasMoreChildAfter || node.get_parentNode().get_childList().hasMoreChildBefore)) {
                $v_2['refillPage'] = true;
                if (node.get_parentNode().get_childList().get_firstChild() === node) {
                    if (node.get_nextSibling() && node.get_parentNode().get_childList().get_lastChild() !== node) {
                        $v_2['firstItemIdInPage'] = node.get_nextSibling().get_id();
                    }
                    else {
                        $v_2['firstItemIdInPage'] = '00000000-0000-0000-0000-000000000000';
                    }
                }
                else {
                    if (node.get_parentNode().get_childList().get_firstChild()) {
                        $v_2['firstItemIdInPage'] = node.get_parentNode().get_childList().get_firstChild().get_id();
                    }
                    else {
                        $v_2['firstItemIdInPage'] = '00000000-0000-0000-0000-000000000000';
                    }
                }
            }
            else {
                $v_2['refillPage'] = false;
                $v_2['firstItemIdInPage'] = '00000000-0000-0000-0000-000000000000';
            }
            $v_2['pageLimit'] = node.get_$1_2().$H_2;
            this.$f_2($v_2);
            $v_2['webId'] = this.$7_2;
            $v_2['listId'] = this.$6_2;
            this.$8_2('DeleteTaxonomyItem', $v_2, node, this.$$d_onDeleteItemComplete, this.$$d_onFailed);
        }
    },
    
    reuseTerm: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$reuseTerm(node, reuseTermGuid) {ULSXaE:;
        this.$18_2(node, reuseTermGuid, false, false);
    },
    
    reuseTermWithBranch: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$reuseTermWithBranch(node, reuseTermGuid) {ULSXaE:;
        this.$18_2(node, reuseTermGuid, false, true);
    },
    
    reuseTermWithPinning: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$reuseTermWithPinning(node, reuseTermGuid) {ULSXaE:;
        this.$18_2(node, reuseTermGuid, true, false);
    },
    
    $18_2: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$18_2($p0, $p1, $p2, $p3) {
        if (!$p0) {
            throw Error.argumentNull('node');
        }
        var $v_0 = {};
        $v_0['sspId'] = this.getSspId($p0);
        $v_0['parentId'] = $p0.get_id();
        $v_0['parentType'] = $p0.$0_2;
        $v_0['termsetId'] = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId($p0);
        $v_0['reuseTermId'] = '00000000-0000-0000-0000-000000000000';
        $v_0['reuseTermsetId'] = '00000000-0000-0000-0000-000000000000';
        if (!SP.ScriptUtility.isNullOrEmptyString($p1)) {
            var $v_1 = $p1.split(':');
            $v_0['reuseTermId'] = $v_1[0];
            if ($v_1.length >= 2) {
                $v_0['reuseTermsetId'] = $v_1[1];
            }
        }
        else {
            throw Error.argumentNull('reuseTermGuid');
        }
        $v_0['webId'] = this.$7_2;
        $v_0['listId'] = this.$6_2;
        $v_0['lcid'] = this.get_displayLcid();
        $v_0['withPinning'] = $p2;
        $v_0['reuseBranch'] = $p3;
        this.$8_2('ReuseTerm15', $v_0, $p0, this.$$d_onReuseTermComplete, this.$$d_onFailed);
    },
    
    moveTo: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$moveTo(node, newParentType, newParentGuid, blocksKeyword) {ULSXaE:;
        if (!node) {
            throw Error.argumentNull('node');
        }
        var $v_0 = {};
        $v_0['sspId'] = this.getSspId(node);
        $v_0['itemType'] = node.$0_2;
        $v_0['itemId'] = node.get_id();
        $v_0['itemTermsetId'] = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(node);
        $v_0['parentType'] = newParentType;
        $v_0['parentId'] = '00000000-0000-0000-0000-000000000000';
        $v_0['parentTermsetId'] = '00000000-0000-0000-0000-000000000000';
        $v_0['rootNodeType'] = this.get_rootNodeType();
        if (!SP.ScriptUtility.isNullOrEmptyString(newParentGuid)) {
            var $v_1 = newParentGuid.split(':');
            if ($v_1 && $v_1.length >= 0) {
                $v_0['parentId'] = $v_1[0];
                $v_0['parentTermsetId'] = $v_1[1];
            }
        }
        else {
            throw Error.argumentNull('newParentGuid');
        }
        if (node.get_parentNode() && node.get_parentNode().get_childList() && (node.get_parentNode().get_childList().hasMoreChildAfter || node.get_parentNode().get_childList().hasMoreChildBefore)) {
            $v_0['refillPage'] = true;
            if (node.get_parentNode().get_childList().get_firstChild() === node) {
                if (node.get_nextSibling() && node.get_parentNode().get_childList().get_lastChild() !== node) {
                    $v_0['firstItemIdInPage'] = node.get_nextSibling().get_id();
                }
                else {
                    $v_0['firstItemIdInPage'] = '00000000-0000-0000-0000-000000000000';
                }
            }
            else {
                if (node.get_parentNode().get_childList().get_firstChild()) {
                    $v_0['firstItemIdInPage'] = node.get_parentNode().get_childList().get_firstChild().get_id();
                }
                else {
                    $v_0['firstItemIdInPage'] = '00000000-0000-0000-0000-000000000000';
                }
            }
        }
        else {
            $v_0['refillPage'] = false;
            $v_0['firstItemIdInPage'] = '00000000-0000-0000-0000-000000000000';
        }
        $v_0['pageLimit'] = node.get_$1_2().$H_2;
        this.$f_2($v_0);
        $v_0['webId'] = this.$7_2;
        $v_0['listId'] = this.$6_2;
        $v_0['lcid'] = this.get_displayLcid();
        $v_0['blocksKeyword'] = blocksKeyword;
        this.$8_2('MoveTaxonomyItem15', $v_0, node, this.$$d_onMoveComplete, this.$$d_onFailed);
    },
    
    merge: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$merge(mergeSource, mergeTargetId, mergeTargetTermsetId) {ULSXaE:;
        if (!mergeSource) {
            throw Error.argumentNull('node');
        }
        else if (SP.ScriptUtility.isNullOrEmptyString(mergeTargetId)) {
            throw Error.argumentNull('mergeTargetId');
        }
        else if (SP.ScriptUtility.isNullOrEmptyString(mergeTargetTermsetId)) {
            throw Error.argumentNull('mergeTargetTermsetId');
        }
        var $v_0 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(mergeSource);
        if ($v_0 === mergeTargetTermsetId) {
            if (!confirm(Microsoft.SharePoint.Taxonomy.ScriptResources.msgConfirmTermMerge2)) {
                return;
            }
        }
        else {
            if (!confirm(Microsoft.SharePoint.Taxonomy.ScriptResources.msgConfirmTermMergeCrossTermSet)) {
                return;
            }
        }
        var $v_1 = {};
        $v_1['sspId'] = this.getSspId(mergeSource);
        $v_1['lcid'] = this.get_displayLcid();
        $v_1['mergeSourceId'] = mergeSource.get_id();
        $v_1['mergeSourceTermsetId'] = $v_0;
        $v_1['mergeTargetId'] = mergeTargetId;
        $v_1['mergeTargetTermsetId'] = mergeTargetTermsetId;
        this.$f_2($v_1);
        if (mergeSource.get_$1_2()) {
            $v_1['pageLimit'] = mergeSource.get_$1_2().$H_2;
        }
        else {
            $v_1['pageLimit'] = 0;
        }
        $v_1['webId'] = this.$7_2;
        $v_1['listId'] = this.$6_2;
        this.$8_2('MergeTaxonomyItem', $v_1, mergeSource, this.$$d_onMergeComplete, this.$$d_onFailed);
    },
    
    copy: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$copy(node, isCopyWChildren) {ULSXaE:;
        if (!node) {
            throw Error.argumentNull('node');
        }
        if (node.$0_2 === 3 && !confirm(Microsoft.SharePoint.Taxonomy.ScriptResources.msgConfirmTermSetCopy)) {
            return;
        }
        var $v_0 = {};
        $v_0['sspId'] = this.getSspId(node);
        $v_0['lcid'] = this.get_displayLcid();
        $v_0['itemType'] = node.$0_2;
        $v_0['itemId'] = node.get_id();
        $v_0['termsetId'] = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(node);
        $v_0['isCopyWChildren'] = isCopyWChildren;
        this.$2O_2 = isCopyWChildren;
        $v_0['webId'] = this.$7_2;
        $v_0['listId'] = this.$6_2;
        this.$8_2('CopyTaxonomyItem', $v_0, node, this.$$d_onCopyComplete, this.$$d_onFailed);
    },
    
    getECBMenu: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$getECBMenu(node) {ULSXaE:;
        var $v_0 = null;
        if (!node) {
            return null;
        }
        else if (node.get_disabled()) {
        }
        else if (node.get_isOrphan()) {
        }
        else if (node.get_isDeprecated()) {
            if (node.get_isPinned()) {
                $v_0 = null;
            }
            else if (node.get_$L_2() && node.get_isReadOnly() && !node.get_disabled()) {
                $v_0 = this.$15_2;
            }
            else {
                $v_0 = this.$n_2;
            }
        }
        else if (node.get_isPinned()) {
            var $v_1 = (!!node.get_parentNode() && node.get_parentNode().$0_2 === 3) || (!!node.get_parentNode() && node.get_parentNode().$0_2 === 4 && !node.get_parentNode().get_isPinned());
            if ($v_1) {
                $v_0 = this.$12_2;
            }
        }
        else if (node.get_$L_2() && node.get_isReadOnly() && !node.get_disabled()) {
            if (node.get_isLeaf()) {
                $v_0 = this.$14_2;
            }
            else {
                $v_0 = this.$17_2;
            }
        }
        else if (node.get_$L_2() && !node.get_$i_2()) {
            if (node.get_isLeaf()) {
                $v_0 = this.$13_2;
            }
            else {
                $v_0 = this.$16_2;
            }
        }
        else if (node.$0_2 === 3 && node.get_id() === '3ceb0050-69a1-40e7-a427-83e2fac80c27') {
            $v_0 = this.$2_2[15];
        }
        else if (node.$0_2 === 4 && Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(node) === '3ceb0050-69a1-40e7-a427-83e2fac80c27') {
            $v_0 = this.$2_2[16];
        }
        else if (node.$0_2 === 4 && Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$2P(Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(node))) {
            $v_0 = this.$2_2[14];
        }
        else if (node.$0_2 === 4 && node.get_isLeaf()) {
            $v_0 = this.$o_2;
        }
        else if (node.$0_2 === 1 && !node.get_disabled() && (node.$k_2 & 16) !== 16) {
            $v_0 = this.$2_2[2];
        }
        else if (node.$0_2 === 1 && node.get_text() === 'Search Dictionaries') {
            $v_0 = this.$2_2[13];
        }
        else {
            $v_0 = this.$2_2[node.$0_2];
        }
        return $v_0;
    },
    
    expandToChildNodeWithPaging: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$expandToChildNodeWithPaging(node, childPathFromParent) {ULSXaE:;
        if (!node) {
            throw Error.argumentNull('node');
        }
        var $v_0 = {};
        $v_0['sspId'] = this.getSspId(node);
        $v_0['lcid'] = this.get_displayLcid();
        this.$f_2($v_0);
        if (this.$3_2 === 6) {
            $v_0['includeNoneTaggableTermset'] = this.$d_2;
        }
        else if (this.$3_2 === 2 || this.$3_2 === 4) {
            $v_0['includeNoneTaggableTermset'] = false;
        }
        else {
            $v_0['includeNoneTaggableTermset'] = true;
        }
        $v_0['parentType'] = node.$0_2;
        $v_0['termSetId'] = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(node);
        if (node.get_$1_2()) {
            $v_0['pageLimit'] = node.get_$1_2().$H_2;
        }
        else {
            $v_0['pageLimit'] = 0;
        }
        $v_0['childPathFromParent'] = node.get_id() + '|' + childPathFromParent;
        $v_0['webId'] = this.$7_2;
        $v_0['listId'] = this.$6_2;
        this.$1y_2($v_0);
        this.$8_2('ExpandToNodeByPath', $v_0, node, this.$$d_onExpandToNodeComplete, this.$$d_onFailed);
    },
    
    expandToChildNodeById: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$expandToChildNodeById(node, childId) {ULSXaE:;
        if (!node) {
            throw Error.argumentNull('node');
        }
        if (SP.ScriptUtility.isNullOrEmptyString(childId) || childId === Microsoft.SharePoint.Taxonomy.Term.newTermGuid) {
            return;
        }
        node.get_childList().$26_2(node.get_longRunningOp());
        var $v_0 = {};
        $v_0['sspId'] = this.getSspId(node);
        this.$f_2($v_0);
        if (this.$3_2 === 6) {
            $v_0['includeNoneTaggableTermset'] = this.$d_2;
        }
        else if (this.$3_2 === 2 || this.$3_2 === 4) {
            $v_0['includeNoneTaggableTermset'] = false;
        }
        else {
            $v_0['includeNoneTaggableTermset'] = true;
        }
        $v_0['parentType'] = node.$0_2;
        $v_0['termSetId'] = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(node);
        if (node.get_$1_2()) {
            $v_0['pageLimit'] = node.get_$1_2().$H_2;
        }
        else {
            $v_0['pageLimit'] = 0;
        }
        $v_0['childId'] = childId;
        $v_0['parentId'] = node.get_id();
        $v_0['webId'] = this.$7_2;
        $v_0['listId'] = this.$6_2;
        $v_0['lcid'] = this.get_displayLcid();
        this.$1y_2($v_0);
        this.$8_2('ExpandToNodeById', $v_0, node, this.$$d_onExpandToNodeComplete, this.$$d_onFailed);
    },
    
    onFailed: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$onFailed(error, userContext, methodName) {ULSXaE:;
        if (!error) {
            throw Error.argumentNull('error');
        }
        Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError(error.get_message());
    },
    
    getTermAlsoMemOfList: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$getTermAlsoMemOfList(node, termGuid, requestCompletedCallback) {ULSXaE:;
        var $v_0 = {};
        $v_0['sspId'] = this.get_sspId();
        $v_0['lcid'] = this.get_displayLcid();
        $v_0['termId'] = termGuid;
        $v_0['webId'] = this.$7_2;
        $v_0['listId'] = this.$6_2;
        $v_0['termsetId'] = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(node);
        this.$8_2('GetTermMembership15', $v_0, null, requestCompletedCallback, this.$$d_onFailed);
    },
    
    getCustomSortList: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$getCustomSortList(termSetId, termId, requestCompletedCallback) {ULSXaE:;
        var $v_0 = {};
        $v_0['sspId'] = this.get_sspId();
        $v_0['lcid'] = this.get_displayLcid();
        $v_0['webId'] = this.$7_2;
        $v_0['listId'] = this.$6_2;
        $v_0['termSetId'] = termSetId;
        $v_0['termId'] = termId;
        this.$8_2('GetSortOrderList', $v_0, null, requestCompletedCallback, this.$$d_onFailed);
    },
    
    getCustomProperties: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$getCustomProperties(node, requestCompletedCallback, requestFailCallback) {ULSXaE:;
        if (node.$0_2 !== 4) {
            return;
        }
        var $v_0 = {};
        $v_0['sspId'] = this.get_sspId();
        $v_0['lcid'] = this.get_displayLcid();
        $v_0['webId'] = this.$7_2;
        $v_0['listId'] = this.$6_2;
        $v_0['termSetId'] = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(node);
        $v_0['termId'] = node.get_id();
        this.$8_2('GetCustomProperties', $v_0, null, requestCompletedCallback, requestFailCallback);
    },
    
    requirePaging: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$requirePaging(node) {ULSXaE:;
        if (!node || node.$0_2 === 0 || node.$0_2 === 1 || node.$0_2 === 2 || node.$0_2 === 8) {
            return false;
        }
        else {
            return true;
        }
    },
    
    page: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$page(node, pagingForward) {ULSXaE:;
        if (!node || !node.get_childList() || node.get_childList().get_count() <= 0) {
            throw Error.argumentNull('node');
        }
        var $v_0 = {};
        $v_0['sspId'] = this.getSspId(node);
        $v_0['lcid'] = this.get_displayLcid();
        this.$f_2($v_0);
        if (this.$3_2 === 6) {
            $v_0['includeNoneTaggableTermset'] = this.$d_2;
        }
        else if (this.$3_2 === 2 || this.$3_2 === 4) {
            $v_0['includeNoneTaggableTermset'] = false;
        }
        else {
            $v_0['includeNoneTaggableTermset'] = true;
        }
        if (pagingForward) {
            $v_0['includeCurrentChild'] = false;
            $v_0['currentChildId'] = node.get_childList().lastChildId;
            $v_0['pagingForward'] = true;
        }
        else {
            $v_0['includeCurrentChild'] = false;
            if (node.get_childList().get_firstChild()) {
                $v_0['currentChildId'] = node.get_childList().get_firstChild().get_id();
            }
            else {
                $v_0['currentChildId'] = '00000000-0000-0000-0000-000000000000';
            }
            $v_0['pagingForward'] = false;
        }
        $v_0['guid'] = node.get_id();
        if (node.get_$1_2()) {
            $v_0['pageLimit'] = node.get_$1_2().$H_2;
        }
        else {
            $v_0['pageLimit'] = 0;
        }
        $v_0['webId'] = this.$7_2;
        $v_0['listId'] = this.$6_2;
        switch (node.$0_2) {
            case 3:
            case 6:
            case 12:
            case 9:
                this.$8_2('GetChildTermsInTermSetWithPaging', $v_0, node, this.$$d_onGetChildrenCompleted, this.$$d_onGetChildrenFailed);
                break;
            case 4:
                $v_0['termsetId'] = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.getTermSetId(node);
                this.$8_2('GetChildTermsInTermWithPaging', $v_0, node, this.$$d_onGetChildrenCompleted, this.$$d_onGetChildrenFailed);
                break;
            default:
                throw Error.invalidOperation();
        }
    },
    
    $8_2: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$8_2($p0, $p1, $p2, $p3, $p4) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
            throw Error.argumentNull('methodName');
        }
        Sys.Net.WebServiceProxy.invoke(this.get_webServiceUrl(), $p0, false, $p1, $p3, $p4, $p2, Sys.Net.WebRequestManager.get_defaultTimeout(), false, null);
    },
    
    $1F_2: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$1F_2($p0, $p1, $p2, $p3, $p4) {
        this.$1b_2[$p0] = true;
        Sys.Net.WebServiceProxy.invoke(this.get_webServiceUrl(), $p0, false, $p1, $p3, $p4, $p2, Sys.Net.WebRequestManager.get_defaultTimeout(), false, null);
    },
    
    $3D_2: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$3D_2($p0, $p1) {
        if (!SP.ScriptUtility.isUndefined(window._spPageContextInfo) && !SP.ScriptUtility.isUndefined(window._spFormDigestRefreshInterval) && !SP.ScriptUtility.isUndefined(window.UpdateFormDigest)) {
            var $v_3 = window._spPageContextInfo;
            var $v_4 = $v_3.webServerRelativeUrl;
            var $v_5 = window._spFormDigestRefreshInterval;
            UpdateFormDigest($v_4, $v_5);
        }
        var $v_0 = $get('__REQUESTDIGEST');
        if ($v_0) {
            $p1.get_webRequest().get_headers()['X-RequestDigest'] = ($v_0).value;
        }
        this.$2j_2();
        var $v_1 = $p1.get_webRequest().get_url().lastIndexOf('/');
        var $v_2 = $p1.get_webRequest().get_url().substr($v_1 + 1);
        if (!SP.ScriptUtility.isNullOrUndefined(this.$1b_2[$v_2])) {
            this.$Z_2 = $p1.get_webRequest().get_executor();
        }
        else {
            if (this.$1B_2 <= 0) {
                this.$1B_2 = window.setTimeout(this.$$d_$3V_2, 2000);
            }
        }
    },
    
    $1b_2: null,
    
    $3C_2: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$3C_2($p0, $p1) {
        this.$2l_2();
        this.$Z_2 = null;
    },
    
    $3V_2: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$3V_2() {ULSXaE:;
        if (!this.$3_2) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.popupWaitScreen(Microsoft.SharePoint.Taxonomy.ScriptResources.termStoreLRODialogTitle, Microsoft.SharePoint.Taxonomy.ScriptResources.termStoreLRODialogBody);
        }
    },
    
    $2l_2: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$2l_2() {ULSXaE:;
        if (!this.$3_2) {
            window.clearTimeout(this.$1B_2);
            this.$1B_2 = -1;
            Microsoft.SharePoint.Taxonomy.TreeUtility.dismissWaitScreen();
        }
    },
    
    $2j_2: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$2j_2() {ULSXaE:;
        if ((this.$Z_2) && this.$Z_2.get_started()) {
            this.$Z_2.abort();
        }
    },
    
    $Z_2: null,
    
    $F_2: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$F_2($p0) {
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
    },
    
    updateOrphanTermSet: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$updateOrphanTermSet() {ULSXaE:;
        if (this.$j_2) {
            if (this.$j_2.get_isExpanded() || this.$j_2.get_isLeaf()) {
                this.$j_2.refresh();
                this.$j_2.loadChildren();
            }
            else {
                this.$j_2.refresh();
            }
        }
    },
    
    $1a_2: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$1a_2($p0, $p1, $p2) {
        var $v_0 = Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.objectToArray($p0);
        var $v_1 = $v_0.length;
        var $v_2 = 0;
        var $v_3 = null;
        if (($p1 === 4 || $p1 === 7 || $p1 === 10) && $v_1 > 0 && SP.ScriptUtility.isNullOrEmptyString($v_0[0].Id)) {
            $v_3 = Microsoft.SharePoint.Taxonomy.TreeNode.$28($v_1 - 1);
            if (!SP.ScriptUtility.isNullOrUndefined($v_0[0].Hb)) {
                $v_3.hasMoreChildBefore = $v_0[0].Hb;
            }
            if (!SP.ScriptUtility.isNullOrUndefined($v_0[0].Ha)) {
                $v_3.hasMoreChildAfter = $v_0[0].Ha;
            }
            $v_2 = 1;
        }
        else {
            $v_3 = Microsoft.SharePoint.Taxonomy.TreeNode.$28($v_1);
        }
        $v_3.$D_2 = $p2;
        var $v_4 = $v_3.get_firstChild();
        for (; $v_2 < $v_1; $v_2++) {
            this.$2B_2($v_4, $p1, $v_0[$v_2]);
            $v_4.set_isReadOnly($p2.$r_2);
            if ($p2.$1L_2 && $p2.get_filter().evaluate($v_4)) {
                var $v_5 = $v_4;
                $v_4 = $v_4.get_nextSibling();
                $v_3.get_domNode().removeChild($v_5.get_domNode());
            }
            else {
                $v_3.lastChildId = $v_4.get_id();
                $v_4 = $v_4.get_nextSibling();
            }
        }
        return $v_3;
    },
    
    $2B_2: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$2B_2($p0, $p1, $p2) {
        if (!$p0) {
            Error.argumentNull('node');
        }
        if (!$p2) {
            Error.argumentNull('data');
        }
        $p0.set_text($p2.Nm);
        $p0.set_id($p2.Id);
        $p0.$5_2 = $p2;
        $p0.set_isDeprecated($p2.Ip);
        if (!this.isInWebTaggingMode()) {
            $p0.set_$L_2($p2.Ir);
            $p0.set_$i_2($p2.Is);
            $p0.set_isPinned($p2.Irp);
        }
        $p0.$k_2 = $p2.Dw;
        if (this.$3_2 === 1 && $p2.Io) {
        }
        else if ($p0.$k_2 === 0 || (!$p1 && ($p0.$k_2 & 256) !== 256)) {
            $p0.set_disabled(true);
        }
        else if ($p0.get_$L_2()) {
            $p0.set_isReadOnly(!$p2.Sw);
        }
        $p0.set_isOrphan($p2.Tb);
        $p0.$S_2 = $p2.Cc;
        if (($p1 && !$p0.$S_2) || $p1 === 7 || $p1 === 10) {
            $p0.set_isChildrenLoaded(true);
            $p0.set_isPreloaded(true);
            $p0.set_isLeaf(true);
        }
        if ($p1 === 3 && $p0.get_isOrphan()) {
            $p0.set_isPreloaded(true);
            this.$j_2 = $p0;
            $p0.set_isReadOnly(true);
            $p0.$0_2 = 9;
        }
        else if ($p1 === 3 && $p2.Ik) {
            $p0.$0_2 = 6;
            $p0.set_isPreloaded(true);
            $p0.set_isReadOnly(true);
            this.$38_2 = $p0;
        }
        else if ($p1 === 3 && Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$2P($p0.get_id())) {
            $p0.$0_2 = 12;
        }
        else if ($p1 === 1) {
            if ($p2.Ig) {
                $p0.$0_2 = 8;
                Sys.UI.DomElement.addCssClass($p0.get_domNode(), 'tmt-systemgroup');
                $p0.set_isReadOnly(true);
                this.$1z_2 = $p0;
            }
            else if ($p2.Iro) {
                $p0.$0_2 = 1;
                $p0.set_isReadOnly(true);
            }
            else {
                $p0.$0_2 = 1;
            }
        }
        else if ($p1 === 10) {
            $p0.$0_2 = 10;
            $p0.set_isReadOnly(true);
        }
        else if ($p1 === 4 && $p2.Ik) {
            $p0.$0_2 = 7;
        }
        else {
            $p0.$0_2 = $p1;
        }
        if ($p2.Iro) {
            $p0.set_disabled(true);
        }
        $p0.setDisplayIcon();
        if (this.isInWebTaggingMode() && $p0.$0_2 === 4) {
            $p0.textLabel.title = this.$3T_2($p0);
        }
        if (this.isInWebTaggingMode() && $p2.It) {
            $p0.grayOutText(false);
        }
    },
    
    $3T_2: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$3T_2($p0) {
        if (!$p0) {
            return null;
        }
        var $v_0 = new Sys.StringBuilder();
        $v_0.appendLine($p0.get_text());
        var $v_1 = ($p0.$5_2.Lb);
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            if (parseInt($v_1[$v_2].Lc) === this.get_displayLcid()) {
                var $v_3 = $v_1[$v_2].Ds;
                if (!SP.ScriptUtility.isNullOrEmptyString($v_3)) {
                    $v_0.appendLine('\"' + $v_3 + '\"');
                }
                var $v_4 = ($v_1[$v_2].Ln).split('|');
                if ($v_4.length > 1) {
                    $v_0.append(Microsoft.SharePoint.Taxonomy.ScriptResources.webTaggingUI_Tooltip_Synonyms);
                    for (var $v_5 = 1; $v_5 < $v_4.length; $v_5++) {
                        if (!SP.ScriptUtility.isNullOrEmptyString($v_4[$v_5])) {
                            if ($v_5 > 1) {
                                $v_0.append('; ');
                            }
                            $v_0.append($v_4[$v_5]);
                        }
                    }
                }
                break;
            }
        }
        return $v_0.toString();
    },
    
    $f_2: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$f_2($p0) {
        var $v_0;
        if (this.$3_2 === 6) {
            $v_0 = this.$1t_2;
        }
        else {
            $v_0 = !this.$3_2;
        }
        $p0['includeDeprecated'] = $v_0;
    },
    
    $1y_2: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$1y_2($p0) {
        if (this.$3_2 === 4 || this.$3_2 === 2 || this.$3_2 === 6) {
            $p0['includeSystemGroup'] = false;
        }
        else {
            $p0['includeSystemGroup'] = true;
        }
    },
    
    $2M_2: function Microsoft_SharePoint_Taxonomy_TaxonomyDataSource$$2M_2() {ULSXaE:;
        if (this.$3_2 === 3 || this.$3_2 === 4 || this.$3_2 === 2) {
            return true;
        }
        else {
            return false;
        }
    }
}


Microsoft.SharePoint.Taxonomy.Tree = function Microsoft_SharePoint_Taxonomy_Tree(e) {ULSXaE:;
    this.$$d_$34_2 = Function.createDelegate(this, this.$34_2);
    this.$$d_$35_2 = Function.createDelegate(this, this.$35_2);
    this.$$d_$32_2 = Function.createDelegate(this, this.$32_2);
    this.$$d_$33_2 = Function.createDelegate(this, this.$33_2);
    this.$$d_$31_2 = Function.createDelegate(this, this.$31_2);
    Microsoft.SharePoint.Taxonomy.Tree.initializeBase(this, [ e ]);
}
Microsoft.SharePoint.Taxonomy.Tree.get_defaultNodeID = function Microsoft_SharePoint_Taxonomy_Tree$get_defaultNodeID() {ULSXaE:;
    return Microsoft.SharePoint.Taxonomy.Tree.$w;
}
Microsoft.SharePoint.Taxonomy.Tree.set_defaultNodeID = function Microsoft_SharePoint_Taxonomy_Tree$set_defaultNodeID(value) {ULSXaE:;
    Microsoft.SharePoint.Taxonomy.Tree.$w = value;
    return value;
}
Microsoft.SharePoint.Taxonomy.Tree.deprecateTermIconSrc = function Microsoft_SharePoint_Taxonomy_Tree$deprecateTermIconSrc() {ULSXaE:;
    return '/' + SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/cat.gif';
}
Microsoft.SharePoint.Taxonomy.Tree.prototype = {
    
    get_focusNode: function Microsoft_SharePoint_Taxonomy_Tree$get_focusNode() {ULSXaE:;
        return this.$2D_2;
    },
    set_focusNode: function Microsoft_SharePoint_Taxonomy_Tree$set_focusNode(value) {ULSXaE:;
        this.$2D_2 = value;
        if (this.get_newNodeTemplate().$h_2) {
            this.removeNewNodeTemplate();
        }
        this.raisePropertyChanged('focusNode');
        return value;
    },
    
    $2D_2: null,
    
    get_targetNode: function Microsoft_SharePoint_Taxonomy_Tree$get_targetNode() {ULSXaE:;
        return this.$20_2;
    },
    set_targetNode: function Microsoft_SharePoint_Taxonomy_Tree$set_targetNode(value) {ULSXaE:;
        if (this.$20_2 !== value) {
            this.$20_2 = value;
        }
        if (this.get_newNodeTemplate().$h_2) {
            this.removeNewNodeTemplate();
        }
        return value;
    },
    
    $20_2: null,
    
    get_hoverNode: function Microsoft_SharePoint_Taxonomy_Tree$get_hoverNode() {ULSXaE:;
        return this.$1n_2;
    },
    set_hoverNode: function Microsoft_SharePoint_Taxonomy_Tree$set_hoverNode(value) {ULSXaE:;
        if (this.$1n_2 !== value) {
            this.$1n_2 = value;
        }
        return value;
    },
    
    $1n_2: null,
    
    get_data: function Microsoft_SharePoint_Taxonomy_Tree$get_data() {ULSXaE:;
        return this.$5_2;
    },
    set_data: function Microsoft_SharePoint_Taxonomy_Tree$set_data(value) {ULSXaE:;
        this.$5_2 = value;
        return value;
    },
    
    $5_2: null,
    
    get_readOnly: function Microsoft_SharePoint_Taxonomy_Tree$get_readOnly() {ULSXaE:;
        return this.$r_2;
    },
    set_readOnly: function Microsoft_SharePoint_Taxonomy_Tree$set_readOnly(value) {ULSXaE:;
        this.$r_2 = value;
        return value;
    },
    
    $r_2: false,
    
    get_defaultMenuID: function Microsoft_SharePoint_Taxonomy_Tree$get_defaultMenuID() {ULSXaE:;
        return this.$1I_2;
    },
    set_defaultMenuID: function Microsoft_SharePoint_Taxonomy_Tree$set_defaultMenuID(value) {ULSXaE:;
        this.$1I_2 = value;
        return value;
    },
    
    $1I_2: null,
    
    get_isContentChanged: function Microsoft_SharePoint_Taxonomy_Tree$get_isContentChanged() {ULSXaE:;
        return this.$2N_2;
    },
    set_isContentChanged: function Microsoft_SharePoint_Taxonomy_Tree$set_isContentChanged(value) {ULSXaE:;
        this.$2N_2 = value;
        this.raisePropertyChanged('isContentChanged');
        return value;
    },
    
    $2N_2: false,
    
    get_newNodeTemplateText: function Microsoft_SharePoint_Taxonomy_Tree$get_newNodeTemplateText() {ULSXaE:;
        return this.$2R_2;
    },
    set_newNodeTemplateText: function Microsoft_SharePoint_Taxonomy_Tree$set_newNodeTemplateText(value) {ULSXaE:;
        this.$2R_2 = value;
        if (this.$X_2) {
            this.$X_2.set_text(value);
        }
        return value;
    },
    
    $2R_2: null,
    
    get_pageLimit: function Microsoft_SharePoint_Taxonomy_Tree$get_pageLimit() {ULSXaE:;
        return this.$H_2;
    },
    set_pageLimit: function Microsoft_SharePoint_Taxonomy_Tree$set_pageLimit(value) {ULSXaE:;
        this.$H_2 = value;
        return value;
    },
    
    $H_2: 10,
    
    get_clientDataSource: function Microsoft_SharePoint_Taxonomy_Tree$get_clientDataSource() {ULSXaE:;
        return this.$9_2;
    },
    set_clientDataSource: function Microsoft_SharePoint_Taxonomy_Tree$set_clientDataSource(value) {ULSXaE:;
        this.$9_2 = value;
        return value;
    },
    
    $9_2: null,
    
    get_filter: function Microsoft_SharePoint_Taxonomy_Tree$get_filter() {ULSXaE:;
        if (!this.$1i_2) {
            this.$1i_2 = new Microsoft.SharePoint.Taxonomy.Filter();
        }
        return this.$1i_2;
    },
    
    $1i_2: null,
    
    get_enableFiltering: function Microsoft_SharePoint_Taxonomy_Tree$get_enableFiltering() {ULSXaE:;
        return this.$1L_2;
    },
    set_enableFiltering: function Microsoft_SharePoint_Taxonomy_Tree$set_enableFiltering(value) {ULSXaE:;
        this.$1L_2 = value;
        return value;
    },
    
    $1L_2: false,
    
    get_roots: function Microsoft_SharePoint_Taxonomy_Tree$get_roots() {ULSXaE:;
        if (!this.$Y_2) {
            this.$Y_2 = Microsoft.SharePoint.Taxonomy.TreeNodeCollection.createANewTreeNodeCollection();
            Sys.UI.DomElement.addCssClass(this.$Y_2.get_domNode(), 'TmtTree');
            this.$Y_2.set_id(this.get_id() + '_ul');
            this.$Y_2.$D_2 = this;
            this.get_element().appendChild(this.$Y_2.get_domNode());
        }
        return this.$Y_2;
    },
    set_roots: function Microsoft_SharePoint_Taxonomy_Tree$set_roots(value) {ULSXaE:;
        if (value && value !== this.$Y_2) {
            this.get_element().appendChild(value.get_domNode());
            value.get_domNode().className = 'TmtTree';
            value.$D_2 = this;
        }
        this.$Y_2 = value;
        return value;
    },
    
    $Y_2: null,
    
    clear: function Microsoft_SharePoint_Taxonomy_Tree$clear() {ULSXaE:;
        if (this.get_roots() && this.get_roots().get_domNode() && this.get_roots().get_domNode().parentNode) {
            this.get_roots().get_domNode().parentNode.removeChild(this.get_roots().get_domNode());
            this.set_roots(null);
        }
        if (this.get_element()) {
            $clearHandlers(this.get_element());
        }
    },
    
    get_newNodeTemplate: function Microsoft_SharePoint_Taxonomy_Tree$get_newNodeTemplate() {ULSXaE:;
        if (!this.$X_2) {
            this.$X_2 = Microsoft.SharePoint.Taxonomy.TreeNode.createANewTreeNode(false);
            this.$X_2.set_id(this.get_id() + '_newnodetemplate');
            this.$X_2.set_text(this.get_newNodeTemplateText());
            this.$X_2.setToNewNodeTemplate();
            this.$X_2.set_isLeaf(true);
        }
        return this.$X_2;
    },
    
    $X_2: null,
    showTreeError: null,
    
    get_isImeActive: function Microsoft_SharePoint_Taxonomy_Tree$get_isImeActive() {ULSXaE:;
        return this.$1P_2;
    },
    set_isImeActive: function Microsoft_SharePoint_Taxonomy_Tree$set_isImeActive(value) {ULSXaE:;
        this.$1P_2 = value;
        return value;
    },
    
    $1P_2: false,
    
    get_nodeEditDelegate: function Microsoft_SharePoint_Taxonomy_Tree$get_nodeEditDelegate() {ULSXaE:;
        return this.$1W_2;
    },
    set_nodeEditDelegate: function Microsoft_SharePoint_Taxonomy_Tree$set_nodeEditDelegate(value) {ULSXaE:;
        this.$1W_2 = value;
        return value;
    },
    
    $1W_2: null,
    
    get_doubleClickDelegate: function Microsoft_SharePoint_Taxonomy_Tree$get_doubleClickDelegate() {ULSXaE:;
        return this.$1J_2;
    },
    set_doubleClickDelegate: function Microsoft_SharePoint_Taxonomy_Tree$set_doubleClickDelegate(value) {ULSXaE:;
        this.$1J_2 = value;
        return value;
    },
    
    $1J_2: null,
    
    get_mouseOverDelegate: function Microsoft_SharePoint_Taxonomy_Tree$get_mouseOverDelegate() {ULSXaE:;
        return this.$1V_2;
    },
    set_mouseOverDelegate: function Microsoft_SharePoint_Taxonomy_Tree$set_mouseOverDelegate(value) {ULSXaE:;
        this.$1V_2 = value;
        return value;
    },
    
    $1V_2: null,
    
    get_preECBMenuCheck: function Microsoft_SharePoint_Taxonomy_Tree$get_preECBMenuCheck() {ULSXaE:;
        return this.$1Z_2;
    },
    set_preECBMenuCheck: function Microsoft_SharePoint_Taxonomy_Tree$set_preECBMenuCheck(value) {ULSXaE:;
        this.$1Z_2 = value;
        return value;
    },
    
    $1Z_2: null,
    
    displayError: function Microsoft_SharePoint_Taxonomy_Tree$displayError(error) {ULSXaE:;
        if (error === 'Term store changed') {
            this.refresh();
        }
        else {
            if (this.showTreeError) {
                this.showTreeError(error);
            }
            else {
                Microsoft.SharePoint.Taxonomy.TreeUtility.showError(error);
            }
        }
    },
    
    expandAndLoadToNode: function Microsoft_SharePoint_Taxonomy_Tree$expandAndLoadToNode(path) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(path)) {
            var $v_0;
            var $v_1;
            var $v_2 = path.indexOf('|');
            if ($v_2 > -1) {
                $v_0 = path.substr(0, $v_2);
                $v_1 = path.substr($v_2 + 1);
            }
            else {
                $v_0 = path;
                $v_1 = '';
            }
            var $v_3 = this.get_roots().get_firstChild();
            while ($v_3) {
                if ($v_3.get_id() === $v_0) {
                    $v_3.expandAndLoadToNode($v_1);
                    $v_3 = null;
                }
                else {
                    $v_3 = $v_3.get_nextSibling();
                }
            }
        }
    },
    
    initialize: function Microsoft_SharePoint_Taxonomy_Tree$initialize() {ULSXaE:;
        Sys.Component.prototype.initialize.call(this);
        this.$2U_2();
        this.$2I_2();
    },
    
    $2I_2: function Microsoft_SharePoint_Taxonomy_Tree$$2I_2() {ULSXaE:;
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.get_element(), 'click', this.$$d_$31_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.get_element(), 'keypress', this.$$d_$33_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.get_element(), 'contextmenu', this.$$d_$32_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.get_element(), 'mouseover', this.$$d_$35_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.get_element(), 'mouseout', this.$$d_$34_2);
    },
    
    $3M_2: function Microsoft_SharePoint_Taxonomy_Tree$$3M_2() {ULSXaE:;
        this.raisePropertyChanged('nodeMoved');
    },
    
    $3N_2: function Microsoft_SharePoint_Taxonomy_Tree$$3N_2() {ULSXaE:;
        this.raisePropertyChanged('updateModifiedTime');
    },
    
    $31_2: function Microsoft_SharePoint_Taxonomy_Tree$$31_2($p0) {
        var $v_0 = $p0.target;
        var $v_1 = $v_0.id;
        var $v_2 = '';
        if ($v_1.startsWith('TIC_') || $v_1.startsWith('TIE_')) {
            $v_2 = $v_1.substring(4, 11);
            var $v_3 = (Microsoft.SharePoint.Taxonomy.TreeNode.$B[$v_2]);
            if ($v_3) {
                $v_3.$23_2($p0);
                $p0.rawEvent.returnValue = false;
                $p0.rawEvent.cancelBubble = true;
                $p0.preventDefault();
                return;
            }
        }
        if ($v_1.startsWith('LBL_')) {
            $v_2 = $v_1.substring(4, 11);
            var $v_4 = (Microsoft.SharePoint.Taxonomy.TreeNode.$B[$v_2]);
            if ($v_4) {
                $v_4.get_onClick()($p0);
                return;
            }
        }
        if ($v_1.startsWith('DAI_')) {
            $v_2 = $v_1.substring(4, 11);
            var $v_5 = (Microsoft.SharePoint.Taxonomy.TreeNode.$B[$v_2]);
            if ($v_5) {
                $v_5.$1X_2($p0);
                $p0.rawEvent.returnValue = false;
                $p0.rawEvent.cancelBubble = true;
                $p0.preventDefault();
                return;
            }
        }
        if ($v_1.startsWith('ICN_')) {
            $v_2 = $v_1.substring(4, 11);
            var $v_6 = (Microsoft.SharePoint.Taxonomy.TreeNode.$B[$v_2]);
            if ($v_6) {
                $v_6.setFocus();
                $p0.rawEvent.returnValue = false;
                $p0.rawEvent.cancelBubble = true;
                $p0.preventDefault();
                return;
            }
        }
        if ($v_1.startsWith('PGU_')) {
            $v_2 = $v_1.substring(4, 11);
            var $v_7 = (Microsoft.SharePoint.Taxonomy.TreeNode.$B[$v_2]);
            if ($v_7 && $v_7.get_enablePageUpButton()) {
                $v_7.$2T_2($p0);
            }
            $p0.preventDefault();
            return;
        }
        else if ($v_1.startsWith('PGD_')) {
            $v_2 = $v_1.substring(4, 11);
            var $v_8 = (Microsoft.SharePoint.Taxonomy.TreeNode.$B[$v_2]);
            if ($v_8 && $v_8.get_enablePageDownButton()) {
                $v_8.$2S_2($p0);
            }
            $p0.preventDefault();
            return;
        }
    },
    
    $1m_2: function Microsoft_SharePoint_Taxonomy_Tree$$1m_2($p0) {
        for (var $v_0 = 0; $v_0 < 5; $v_0++) {
            if ($p0.id.startsWith('TXN_')) {
                return $p0;
            }
            $p0 = $p0.parentNode;
        }
        return null;
    },
    
    $32_2: function Microsoft_SharePoint_Taxonomy_Tree$$32_2($p0) {
        var $v_0 = this.$1m_2($p0.target);
        if ($v_0) {
            var $v_1 = $v_0.id;
            var $v_2 = $v_1.substring(4, 11);
            var $v_3 = (Microsoft.SharePoint.Taxonomy.TreeNode.$B[$v_2]);
            if ($v_3) {
                $v_3.$1X_2($p0);
                $p0.preventDefault();
                return;
            }
        }
    },
    
    $35_2: function Microsoft_SharePoint_Taxonomy_Tree$$35_2($p0) {
        var $v_0 = this.$1m_2($p0.target);
        if ($v_0) {
            var $v_1 = $v_0.id;
            var $v_2 = $v_1.substring(4, 11);
            var $v_3 = (Microsoft.SharePoint.Taxonomy.TreeNode.$B[$v_2]);
            if ($v_3) {
                $v_3.get_onMouseOver()($p0);
                $p0.rawEvent.returnValue = false;
                $p0.rawEvent.cancelBubble = true;
                $p0.preventDefault();
                $p0.stopPropagation();
                return;
            }
        }
    },
    
    $34_2: function Microsoft_SharePoint_Taxonomy_Tree$$34_2($p0) {
        var $v_0 = this.$1m_2($p0.target);
        if ($v_0) {
            var $v_1 = $v_0.id;
            var $v_2 = $v_1.substring(4, 11);
            var $v_3 = (Microsoft.SharePoint.Taxonomy.TreeNode.$B[$v_2]);
            if ($v_3) {
                $v_3.get_onMouseOut()($p0);
                $p0.rawEvent.returnValue = false;
                $p0.rawEvent.cancelBubble = true;
                $p0.preventDefault();
                $p0.stopPropagation();
                return;
            }
        }
    },
    
    $33_2: function Microsoft_SharePoint_Taxonomy_Tree$$33_2($p0) {
        var $v_0 = $p0.target;
        var $v_1 = $v_0.id;
        var $v_2 = '';
        if ($v_1.startsWith('TIC_') || $v_1.startsWith('TIE_')) {
            $v_2 = $v_1.substring(4, 11);
            var $v_3 = (Microsoft.SharePoint.Taxonomy.TreeNode.$B[$v_2]);
            if ($v_3) {
                $v_3.$2i_2($p0);
                $p0.rawEvent.returnValue = false;
                $p0.rawEvent.cancelBubble = true;
                $p0.preventDefault();
                return;
            }
        }
        if ($v_1.startsWith('IPT_')) {
            $v_2 = $v_1.substring(4, 11);
            var $v_4 = (Microsoft.SharePoint.Taxonomy.TreeNode.$B[$v_2]);
            if ($v_4) {
                $v_4.get_onKeyPress()($p0);
                return;
            }
        }
        if ($v_1.startsWith('LBL_') && $p0.charCode === 13) {
            $v_2 = $v_1.substring(4, 11);
            var $v_5 = (Microsoft.SharePoint.Taxonomy.TreeNode.$B[$v_2]);
            if ($v_5) {
                var $v_6 = null;
                if ($v_5.get_dataSource()) {
                    $v_6 = $v_5.get_dataSource();
                }
                if ($v_6) {
                    if ($v_6.$2M_2() || $v_6.$3_2 === 6) {
                        $v_5.setFocus();
                    }
                }
                if (!this.$r_2 && !$v_5.get_isReadOnly()) {
                    $v_5.$V_2(true);
                    if (!$v_5.$1D_2) {
                        $v_5.$1x_2();
                        $v_5.$1D_2 = true;
                    }
                }
                else if ($v_6 && $v_6.isInWebTaggingMode() && $v_5.$5_2.It) {
                    $v_5.$2A_2($p0);
                }
                $p0.rawEvent.returnValue = false;
                $p0.rawEvent.cancelBubble = true;
                $p0.preventDefault();
                return;
            }
        }
        if ($v_1.startsWith('PGU_')) {
            $v_2 = $v_1.substring(4, 11);
            var $v_7 = (Microsoft.SharePoint.Taxonomy.TreeNode.$B[$v_2]);
            if ($v_7) {
                $v_7.$3K_2($p0);
            }
            $p0.preventDefault();
            return;
        }
        else if ($v_1.startsWith('PGD_')) {
            $v_2 = $v_1.substring(4, 11);
            var $v_8 = (Microsoft.SharePoint.Taxonomy.TreeNode.$B[$v_2]);
            if ($v_8) {
                $v_8.$3J_2($p0);
            }
            $p0.preventDefault();
            return;
        }
        else if ($v_1.startsWith('ICN_')) {
            $v_2 = $v_1.substring(4, 11);
            var $v_9 = (Microsoft.SharePoint.Taxonomy.TreeNode.$B[$v_2]);
            if ($v_9) {
                $v_9.$1X_2($p0);
            }
            $p0.preventDefault();
            return;
        }
    },
    
    dispose: function Microsoft_SharePoint_Taxonomy_Tree$dispose() {ULSXaE:;
        if (this.get_element()) {
            $clearHandlers(this.get_element());
        }
        Sys.Component.prototype.dispose.call(this);
    },
    
    refresh: function Microsoft_SharePoint_Taxonomy_Tree$refresh() {ULSXaE:;
        if (confirm(Microsoft.SharePoint.Taxonomy.ScriptResources.msgRefreshTree)) {
            this.clear();
            this.$2U_2();
            this.$2I_2();
            return true;
        }
        else {
            return false;
        }
    },
    
    locateLoadedNodeByPath: function Microsoft_SharePoint_Taxonomy_Tree$locateLoadedNodeByPath(path, pathSeperator) {ULSXaE:;
        if (SP.ScriptUtility.isNullOrEmptyString(path)) {
            return null;
        }
        var $v_0 = path.split(pathSeperator);
        var $v_1 = this.get_roots().get_firstChild();
        var $v_2 = null;
        var $v_3 = this.get_roots();
        for (var $v_4 = 0; $v_4 < $v_0.length; $v_4++) {
            $v_2 = $v_3.getChildById($v_0[$v_4]);
            if (!$v_2) {
                continue;
            }
            $v_3 = $v_2.get_childList();
        }
        return $v_2;
    },
    
    removeNewNodeTemplate: function Microsoft_SharePoint_Taxonomy_Tree$removeNewNodeTemplate() {ULSXaE:;
        this.get_newNodeTemplate().set_text('');
        var $v_0 = this.get_newNodeTemplate().get_parentNode();
        if ($v_0) {
            this.get_newNodeTemplate().get_domNode().parentNode.removeChild(this.get_newNodeTemplate().get_domNode());
            if (!(--$v_0.$S_2) && !$v_0.get_childList().get_count()) {
                $v_0.set_isLeaf(true);
            }
        }
        this.get_newNodeTemplate().$h_2 = false;
    },
    
    expandToNodeWithPaging: function Microsoft_SharePoint_Taxonomy_Tree$expandToNodeWithPaging(path) {ULSXaE:;
        if (SP.ScriptUtility.isNullOrEmptyString(path)) {
            throw Error.argumentNull(path);
        }
        var $v_0;
        var $v_1 = path.split('|');
        var $v_2 = this.get_roots().get_firstChild();
        var $v_3 = 0;
        while ($v_2) {
            for ($v_3 = 0; $v_3 < $v_1.length; $v_3++) {
                if ($v_1[$v_3] === $v_2.get_id()) {
                    break;
                }
            }
            if ($v_3 === $v_1.length) {
                $v_2 = $v_2.get_nextSibling();
            }
            else {
                break;
            }
        }
        if (!$v_2) {
        }
        else {
            if ($v_3 === $v_1.length - 1) {
                $v_0 = '';
            }
            else {
                $v_0 = path.substring(path.indexOf($v_1[$v_3 + 1]), path.length);
            }
            $v_2.expandToChildWithPaging($v_0);
        }
    },
    
    $2U_2: function Microsoft_SharePoint_Taxonomy_Tree$$2U_2() {ULSXaE:;
        if (this.$5_2) {
            this.$39_2();
        }
        else if (this.$9_2) {
            this.$9_2.getRoots(this);
        }
    },
    
    $39_2: function Microsoft_SharePoint_Taxonomy_Tree$$39_2() {ULSXaE:;
        if (!this.$5_2) {
            return;
        }
        var $v_0 = null;
        try {
            $v_0 = Microsoft.SharePoint.Taxonomy.ParseJSONUtil.parseObjectFromJsonString(this.$5_2);
        }
        catch ($v_1) {
            this.displayError($v_1.message);
        }
        if ($v_0) {
            var $v_2 = null;
            for (var $v_3 = 0; $v_3 < $v_0.length; $v_3++) {
                $v_2 = this.$29_2($v_0[$v_3]);
                this.get_roots().addChild($v_2);
            }
        }
    },
    
    $29_2: function Microsoft_SharePoint_Taxonomy_Tree$$29_2($p0) {
        if (!$p0) {
            return null;
        }
        var $v_0 = $p0.Id;
        var $v_1 = $p0.Nm;
        var $v_2 = Microsoft.SharePoint.Taxonomy.TreeNode.createANewTreeNode(this.$r_2);
        $v_2.set_id($v_0);
        $v_2.set_text($v_1);
        $v_2.$5_2 = $p0.Dt;
        $v_2.$0_2 = $p0.Tp;
        $v_2.set_isExpanded(false);
        var $v_3 = $p0.Mu;
        if (!SP.ScriptUtility.isNullOrEmptyString($v_3)) {
            $v_2.set_ecbMenuID($v_3);
        }
        else if (!SP.ScriptUtility.isNullOrEmptyString(this.$1I_2)) {
            $v_2.set_ecbMenuID(this.$1I_2);
        }
        var $v_4 = $p0.Ch;
        if ($v_4 && $v_4.length > 0) {
            var $v_5 = null;
            for (var $v_6 = 0; $v_6 < $v_4.length; $v_6++) {
                $v_5 = this.$29_2($v_4[$v_6]);
                if ($v_5) {
                    $v_2.$a_2($v_5);
                }
            }
            $v_2.set_isChildrenLoaded(true);
            $v_2.set_isPreloaded(true);
        }
        else if (!this.$9_2) {
            $v_2.set_isLeaf(true);
            $v_2.set_isChildrenLoaded(true);
            $v_2.set_isPreloaded(true);
        }
        else {
        }
        return $v_2;
    }
}


Microsoft.SharePoint.Taxonomy.TreeNode = function Microsoft_SharePoint_Taxonomy_TreeNode($p0) {
    this.$$d_$2z_2 = Function.createDelegate(this, this.$2z_2);
    this.$$d_$3F_2 = Function.createDelegate(this, this.$3F_2);
    this.$$d_$3H_2 = Function.createDelegate(this, this.$3H_2);
    this.$$d_$2r_2 = Function.createDelegate(this, this.$2r_2);
    this.$$d_$2A_2 = Function.createDelegate(this, this.$2A_2);
    this.$$d_$3W_2 = Function.createDelegate(this, this.$3W_2);
    this.$$d_$1X_2 = Function.createDelegate(this, this.$1X_2);
    this.$$d_$2i_2 = Function.createDelegate(this, this.$2i_2);
    this.$$d_$23_2 = Function.createDelegate(this, this.$23_2);
    this.$$d_$2s_2 = Function.createDelegate(this, this.$2s_2);
    this.$$d_$2p_2 = Function.createDelegate(this, this.$2p_2);
    this.$$d_$2q_2 = Function.createDelegate(this, this.$2q_2);
    this.$$d_$2t_2 = Function.createDelegate(this, this.$2t_2);
    this.$$d_$2u_2 = Function.createDelegate(this, this.$2u_2);
    this.$$d_$3I_2 = Function.createDelegate(this, this.$3I_2);
    this.$0_2 = Microsoft.SharePoint.Taxonomy.TreeNode.typeUnassigned;
    this.$E_2 = -1;
    Microsoft.SharePoint.Taxonomy.TreeNode.initializeBase(this, [ $p0 ]);
    this.initialize();
    this.add_propertyChanged(this.$$d_$3I_2);
}
Microsoft.SharePoint.Taxonomy.TreeNode.disableEvent = function Microsoft_SharePoint_Taxonomy_TreeNode$disableEvent(e) {ULSXaE:;
    if (e) {
        e.preventDefault();
    }
}
Microsoft.SharePoint.Taxonomy.TreeNode.createANewTreeNode = function Microsoft_SharePoint_Taxonomy_TreeNode$createANewTreeNode(isReadOnly) {ULSXaE:;
    var $v_0 = document.createElement('LI');
    var $v_1 = new Microsoft.SharePoint.Taxonomy.TreeNode($v_0);
    if (isReadOnly) {
        $v_1.set_isReadOnly(true);
    }
    return $v_1;
}
Microsoft.SharePoint.Taxonomy.TreeNode.$2n = function Microsoft_SharePoint_Taxonomy_TreeNode$$2n($p0) {
    var $v_0 = new Sys.StringBuilder();
    $v_0.append('<input type=\"image\" disabled id=PGU_');
    $v_0.append($p0);
    $v_0.append(' tabIndex=0 src=\"' + SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/ARRUPI.gif\" title=\'');
    $v_0.append(Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipPageBackward);
    $v_0.append('\' alt=\'');
    $v_0.append(Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipPageBackward);
    $v_0.append('\' />');
    return $v_0.toString();
}
Microsoft.SharePoint.Taxonomy.TreeNode.$2m = function Microsoft_SharePoint_Taxonomy_TreeNode$$2m($p0) {
    var $v_0 = new Sys.StringBuilder();
    $v_0.append('<input type=\"image\" id=PGD_');
    $v_0.append($p0);
    $v_0.append(' tabIndex=0 src=\"' + SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/ARRDOWNA.gif\" title=\'');
    $v_0.append(Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipPageForward);
    $v_0.append('\' alt=\'');
    $v_0.append(Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipPageForward);
    $v_0.append('\' />');
    return $v_0.toString();
}
Microsoft.SharePoint.Taxonomy.TreeNode.$28 = function Microsoft_SharePoint_Taxonomy_TreeNode$$28($p0) {
    var $v_0 = Microsoft.SharePoint.Taxonomy.TreeNodeCollection.createANewTreeNodeCollection();
    var $v_1 = new Sys.StringBuilder();
    for (var $v_2 = 0; $v_2 < $p0; $v_2++) {
        $v_1.append('<LI>');
        $v_1.append(Microsoft.SharePoint.Taxonomy.TreeNode.$2E((++Microsoft.SharePoint.Taxonomy.TreeNode.$1o).toString()));
        $v_1.append('</LI>');
    }
    $v_0.get_domNode().innerHTML = $v_1.toString();
    for (var $v_3 = 0; $v_3 < $p0; $v_3++) {
        new Microsoft.SharePoint.Taxonomy.TreeNode($v_0.get_domNode().childNodes[$v_3]);
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TreeNode.$2E = function Microsoft_SharePoint_Taxonomy_TreeNode$$2E($p0) {
    var $v_0 = new Sys.StringBuilder();
    $v_0.append('<DIV id=\"_Div');
    $v_0.append($p0);
    $v_0.append('\" class=\"treenodediv\">');
    $v_0.append('<SPAN id=_ImgContainer><IMG class=ti id=TIE_');
    $v_0.append($p0);
    $v_0.append(' tabIndex=0 src=\"' + SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'images/MDNCollapsed.png\"></SPAN><IMG id=ICN_');
    $v_0.append($p0);
    $v_0.append(' tabIndex=0 height=16');
    $v_0.append(' src=\"' + SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/itdisc.gif\" width=16><SPAN class=tnn id=TXN_');
    $v_0.append($p0);
    $v_0.append('><SPAN class=ms-input id=TXC_');
    $v_0.append($p0);
    $v_0.append('><SPAN id=LBL_');
    $v_0.append($p0);
    $v_0.append(' tabIndex=0></SPAN><INPUT id=IPT_');
    $v_0.append($p0);
    $v_0.append(' class=\"ms-input display-none\" tabIndex=0></SPAN><SPAN><IMG class=\"dai\" id=DAI_');
    $v_0.append($p0);
    $v_0.append(' height=13 src=\"' + SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/downarrw.gif\" width=13></SPAN></SPAN></DIV>');
    return $v_0.toString();
}
Microsoft.SharePoint.Taxonomy.TreeNode.prototype = {
    
    get_keyUpDelegate: function Microsoft_SharePoint_Taxonomy_TreeNode$get_keyUpDelegate() {ULSXaE:;
        return this.$z_2;
    },
    set_keyUpDelegate: function Microsoft_SharePoint_Taxonomy_TreeNode$set_keyUpDelegate(value) {ULSXaE:;
        this.$z_2 = value;
        return value;
    },
    
    $z_2: null,
    
    get_right: function Microsoft_SharePoint_Taxonomy_TreeNode$get_right() {ULSXaE:;
        return this.$k_2;
    },
    set_right: function Microsoft_SharePoint_Taxonomy_TreeNode$set_right(value) {ULSXaE:;
        this.$k_2 = value;
        return value;
    },
    
    $k_2: 0,
    
    get_text: function Microsoft_SharePoint_Taxonomy_TreeNode$get_text() {ULSXaE:;
        return this.$1A_2;
    },
    set_text: function Microsoft_SharePoint_Taxonomy_TreeNode$set_text(value) {ULSXaE:;
        if (!this.textLabel || !this.textInput) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorControlNotInitialized);
        }
        if (SP.ScriptUtility.isNullOrEmptyString(value)) {
            this.textLabel.innerHTML = '';
            this.textInput.value = '';
            this.textLabel.title = '';
            this.textInput.title = '';
        }
        else {
            this.textLabel.innerHTML = SP.Utilities.HttpUtility.htmlEncode(value);
            if (this.textLabel.offsetWidth < 100) {
                this.textLabel.style.minWidth = 100 + 'px';
            }
            this.textInput.value = value;
            this.textInput.title = value;
            this.textLabel.title = value;
        }
        this.$1A_2 = value;
        return value;
    },
    
    $1A_2: '',
    
    get_id: function Microsoft_SharePoint_Taxonomy_TreeNode$get_id() {ULSXaE:;
        return this.get_element().id;
    },
    set_id: function Microsoft_SharePoint_Taxonomy_TreeNode$set_id(value) {ULSXaE:;
        this.get_element().id = value;
        return value;
    },
    
    get_data: function Microsoft_SharePoint_Taxonomy_TreeNode$get_data() {ULSXaE:;
        return this.$5_2;
    },
    set_data: function Microsoft_SharePoint_Taxonomy_TreeNode$set_data(value) {ULSXaE:;
        this.$5_2 = value;
        return value;
    },
    
    $5_2: null,
    
    get_nextSibling: function Microsoft_SharePoint_Taxonomy_TreeNode$get_nextSibling() {ULSXaE:;
        if (this.get_element().nextSibling) {
            return this.get_element().nextSibling.control;
        }
        else {
            return null;
        }
    },
    
    get_previousSibling: function Microsoft_SharePoint_Taxonomy_TreeNode$get_previousSibling() {ULSXaE:;
        if (this.get_element().previousSibling) {
            return this.get_element().previousSibling.control;
        }
        else {
            return null;
        }
    },
    
    get_mainContainer: function Microsoft_SharePoint_Taxonomy_TreeNode$get_mainContainer() {ULSXaE:;
        return this.get_element();
    },
    
    get_isChildrenLoaded: function Microsoft_SharePoint_Taxonomy_TreeNode$get_isChildrenLoaded() {ULSXaE:;
        if (!this.$O_2 && !this.get_dataSource()) {
            this.$O_2 = true;
        }
        else if (!this.get_isLeaf()) {
            if (this.get_childList().get_count() && !this.$O_2) {
                this.$O_2 = true;
            }
            else if (!this.get_childList().get_count() && this.$O_2) {
                this.$O_2 = false;
            }
        }
        else {
            if (!this.$O_2) {
                this.$O_2 = true;
            }
        }
        return this.$O_2;
    },
    set_isChildrenLoaded: function Microsoft_SharePoint_Taxonomy_TreeNode$set_isChildrenLoaded(value) {ULSXaE:;
        if (value && !this.$O_2) {
            this.raisePropertyChanged('isChildrenLoaded');
        }
        this.$O_2 = value;
        return value;
    },
    
    $O_2: false,
    
    get_isExpanded: function Microsoft_SharePoint_Taxonomy_TreeNode$get_isExpanded() {ULSXaE:;
        if (this.$C_2.firstChild === this.get_$1M_2()) {
            return true;
        }
        else {
            return false;
        }
    },
    set_isExpanded: function Microsoft_SharePoint_Taxonomy_TreeNode$set_isExpanded(value) {ULSXaE:;
        if (value) {
            if (this.get_dataSource() && this.get_dataSource().requirePaging(this)) {
                this.set_displayPager(true);
            }
            if (!this.$C_2.firstChild) {
                this.$C_2.appendChild(this.get_$1M_2());
            }
            else if (this.$C_2.firstChild !== this.get_$1M_2()) {
                this.$C_2.replaceChild(this.get_$1M_2(), this.$C_2.firstChild);
            }
            this.get_childList().$3U_2();
        }
        else if (!value) {
            if (!this.$C_2.firstChild) {
                this.$C_2.appendChild(this.get_$1e_2());
            }
            else if (this.$C_2.firstChild !== this.get_$1e_2()) {
                this.$C_2.replaceChild(this.get_$1e_2(), this.$C_2.firstChild);
            }
            this.set_displayPager(false);
            this.get_childList().$36_2();
        }
        return value;
    },
    
    get_iconImageSrc: function Microsoft_SharePoint_Taxonomy_TreeNode$get_iconImageSrc() {ULSXaE:;
        if (!this.$4_2) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorControlNotInitialized);
        }
        return this.$4_2.src;
    },
    set_iconImageSrc: function Microsoft_SharePoint_Taxonomy_TreeNode$set_iconImageSrc(value) {ULSXaE:;
        this.$4_2.src = value;
        return value;
    },
    
    get_ecbMenuID: function Microsoft_SharePoint_Taxonomy_TreeNode$get_ecbMenuID() {ULSXaE:;
        return this.$K_2.id;
    },
    set_ecbMenuID: function Microsoft_SharePoint_Taxonomy_TreeNode$set_ecbMenuID(value) {ULSXaE:;
        this.$K_2 = $get(value);
        if (!this.$K_2) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        return value;
    },
    
    get_ecbMenu: function Microsoft_SharePoint_Taxonomy_TreeNode$get_ecbMenu() {ULSXaE:;
        return this.$K_2;
    },
    set_ecbMenu: function Microsoft_SharePoint_Taxonomy_TreeNode$set_ecbMenu(value) {ULSXaE:;
        this.$K_2 = value;
        return value;
    },
    
    $K_2: null,
    
    get_onMouseOver: function Microsoft_SharePoint_Taxonomy_TreeNode$get_onMouseOver() {ULSXaE:;
        if (!this.$1U_2) {
            this.$1U_2 = this.$$d_$2u_2;
        }
        return this.$1U_2;
    },
    set_onMouseOver: function Microsoft_SharePoint_Taxonomy_TreeNode$set_onMouseOver(value) {ULSXaE:;
        this.$1U_2 = value;
        return value;
    },
    
    $1U_2: null,
    
    get_onMouseOut: function Microsoft_SharePoint_Taxonomy_TreeNode$get_onMouseOut() {ULSXaE:;
        if (!this.$1T_2) {
            this.$1T_2 = this.$$d_$2t_2;
        }
        return this.$1T_2;
    },
    set_onMouseOut: function Microsoft_SharePoint_Taxonomy_TreeNode$set_onMouseOut(value) {ULSXaE:;
        this.$1T_2 = value;
        return value;
    },
    
    $1T_2: null,
    
    get_onClick: function Microsoft_SharePoint_Taxonomy_TreeNode$get_onClick() {ULSXaE:;
        if (!this.$1H_2) {
            this.$1H_2 = this.$$d_$2q_2;
        }
        return this.$1H_2;
    },
    set_onClick: function Microsoft_SharePoint_Taxonomy_TreeNode$set_onClick(value) {ULSXaE:;
        this.$1H_2 = value;
        return value;
    },
    
    $1H_2: null,
    
    get_onBlur: function Microsoft_SharePoint_Taxonomy_TreeNode$get_onBlur() {ULSXaE:;
        if (!this.$1E_2) {
            this.$1E_2 = this.$$d_$2p_2;
        }
        return this.$1E_2;
    },
    set_onBlur: function Microsoft_SharePoint_Taxonomy_TreeNode$set_onBlur(value) {ULSXaE:;
        this.$1E_2 = value;
        return value;
    },
    
    $1E_2: null,
    
    get_onKeyPress: function Microsoft_SharePoint_Taxonomy_TreeNode$get_onKeyPress() {ULSXaE:;
        if (!this.$1R_2) {
            this.$1R_2 = this.$$d_$2s_2;
        }
        return this.$1R_2;
    },
    set_onKeyPress: function Microsoft_SharePoint_Taxonomy_TreeNode$set_onKeyPress(value) {ULSXaE:;
        this.$1R_2 = value;
        return value;
    },
    
    $1R_2: null,
    
    get_nodeType: function Microsoft_SharePoint_Taxonomy_TreeNode$get_nodeType() {ULSXaE:;
        return this.$0_2;
    },
    set_nodeType: function Microsoft_SharePoint_Taxonomy_TreeNode$set_nodeType(value) {ULSXaE:;
        this.$0_2 = value;
        return value;
    },
    
    get_domNode: function Microsoft_SharePoint_Taxonomy_TreeNode$get_domNode() {ULSXaE:;
        return this.get_element();
    },
    
    get_isNewNodeTemplate: function Microsoft_SharePoint_Taxonomy_TreeNode$get_isNewNodeTemplate() {ULSXaE:;
        return this.$G_2;
    },
    
    $G_2: false,
    
    setToNewNodeTemplate: function Microsoft_SharePoint_Taxonomy_TreeNode$setToNewNodeTemplate() {ULSXaE:;
        if (!this.$G_2) {
            this.$G_2 = true;
            Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.textInput, 'keyup', this.get_$3G_2());
            Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.textInput, 'keydown', this.get_$3E_2());
        }
    },
    
    get_ignoreKeyUp: function Microsoft_SharePoint_Taxonomy_TreeNode$get_ignoreKeyUp() {ULSXaE:;
        return this.$g_2;
    },
    
    $g_2: true,
    
    get_parentNode: function Microsoft_SharePoint_Taxonomy_TreeNode$get_parentNode() {ULSXaE:;
        if (!this.get_element().parentNode || !this.get_element().parentNode.parentNode || this.get_element().parentNode.parentNode.tagName !== 'LI') {
            return null;
        }
        else {
            return this.get_element().parentNode.parentNode.control;
        }
    },
    
    get_$R_2: function Microsoft_SharePoint_Taxonomy_TreeNode$get_$R_2() {ULSXaE:;
        if (!this.get_element().parentNode || this.get_element().parentNode.nodeType !== 1) {
            return null;
        }
        this.$1Y_2 = this.get_element().parentNode.control;
        if (!this.$1Y_2) {
            this.$1Y_2 = new Microsoft.SharePoint.Taxonomy.TreeNodeCollection(this.get_element().parentNode);
        }
        return this.$1Y_2;
    },
    
    $1Y_2: null,
    
    get_childList: function Microsoft_SharePoint_Taxonomy_TreeNode$get_childList() {ULSXaE:;
        if (!this.get_element().lastChild) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorControlNotInitialized);
        }
        if (this.get_element().lastChild.tagName.toUpperCase() !== 'UL') {
            this.$v_2 = Microsoft.SharePoint.Taxonomy.TreeNodeCollection.createANewTreeNodeCollection();
            this.$v_2.get_domNode().id = this.get_id() + '_ul';
            this.get_element().appendChild(this.$v_2.get_domNode());
        }
        else {
            this.$v_2 = this.get_element().lastChild.control;
        }
        return this.$v_2;
    },
    
    $v_2: null,
    
    get_dataSource: function Microsoft_SharePoint_Taxonomy_TreeNode$get_dataSource() {ULSXaE:;
        if (this.get_$1_2()) {
            return this.get_$1_2().$9_2;
        }
        else {
            return null;
        }
    },
    
    get_$1_2: function Microsoft_SharePoint_Taxonomy_TreeNode$get_$1_2() {ULSXaE:;
        if (!this.$D_2) {
            var $v_0 = this;
            while (($v_0) && ($v_0.get_$R_2()) && (!$v_0.get_$R_2().$D_2)) {
                $v_0 = $v_0.get_parentNode();
            }
            if ((!$v_0) || (!$v_0.get_$R_2())) {
                this.$D_2 = null;
            }
            else {
                this.get_$R_2().$D_2 = $v_0.get_$R_2().$D_2;
                this.$D_2 = this.get_$R_2().$D_2;
            }
        }
        return this.$D_2;
    },
    set_$1_2: function Microsoft_SharePoint_Taxonomy_TreeNode$set_$1_2($p0) {
        this.$D_2 = $p0;
        return $p0;
    },
    
    $D_2: null,
    
    get_isLeaf: function Microsoft_SharePoint_Taxonomy_TreeNode$get_isLeaf() {ULSXaE:;
        return (this.$C_2.firstChild === this.get_$1c_2());
    },
    set_isLeaf: function Microsoft_SharePoint_Taxonomy_TreeNode$set_isLeaf(value) {ULSXaE:;
        if (value && (this.$C_2.firstChild !== this.get_$1c_2())) {
            this.$C_2.replaceChild(this.get_$1c_2(), this.$C_2.firstChild);
            this.removeAllChildren();
        }
        return value;
    },
    
    get_isReadOnly: function Microsoft_SharePoint_Taxonomy_TreeNode$get_isReadOnly() {ULSXaE:;
        return this.$1Q_2;
    },
    set_isReadOnly: function Microsoft_SharePoint_Taxonomy_TreeNode$set_isReadOnly(value) {ULSXaE:;
        if (value && !this.$1Q_2) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.textInput, 'blur', this.$u_2);
            this.$u_2 = null;
            this.$2Q_2 = null;
            this.$1Q_2 = true;
        }
        return value;
    },
    
    $1Q_2: false,
    
    get_isPreloaded: function Microsoft_SharePoint_Taxonomy_TreeNode$get_isPreloaded() {ULSXaE:;
        if (!this.$y_2 && !this.get_dataSource()) {
            this.$y_2 = true;
        }
        else if (this.get_dataSource() && this.get_dataSource().disablePreloadForNode(this)) {
            this.set_isPreloaded(true);
        }
        return this.$y_2;
    },
    set_isPreloaded: function Microsoft_SharePoint_Taxonomy_TreeNode$set_isPreloaded(value) {ULSXaE:;
        this.$y_2 = value;
        return value;
    },
    
    $y_2: false,
    $1O_2: false,
    $1D_2: false,
    $24_2: false,
    $C_2: null,
    $4_2: null,
    textNode: null,
    textLabel: null,
    textInput: null,
    suggestions: null,
    
    get_$1M_2: function Microsoft_SharePoint_Taxonomy_TreeNode$get_$1M_2() {ULSXaE:;
        if (!this.$W_2) {
            this.$W_2 = document.createElement('IMG');
            this.$W_2.className = 'ti';
            this.$W_2.alt = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipCollpase;
            this.$W_2.title = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipCollpase;
            this.$W_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'images/MDNExpanded.png';
            this.$W_2.id = 'TIC_' + this.$T_2.toString();
            this.$W_2.tabIndex = 0;
        }
        return this.$W_2;
    },
    
    $W_2: null,
    
    get_$1e_2: function Microsoft_SharePoint_Taxonomy_TreeNode$get_$1e_2() {ULSXaE:;
        if (!this.$J_2) {
            this.$J_2 = document.createElement('IMG');
            this.$J_2.className = 'ti';
            this.$J_2.alt = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipExpand;
            this.$J_2.title = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipExpand;
            this.$J_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'images/MDNCollapsed.png';
            this.$J_2.id = 'TIE_' + this.$T_2.toString();
            this.$J_2.tabIndex = 0;
        }
        return this.$J_2;
    },
    
    $J_2: null,
    
    get_$1c_2: function Microsoft_SharePoint_Taxonomy_TreeNode$get_$1c_2() {ULSXaE:;
        if (!this.$m_2) {
            this.$m_2 = document.createElement('IMG');
            this.$m_2.className = 'ti';
            this.$m_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/blank.gif';
            this.$m_2.tabIndex = -1;
        }
        return this.$m_2;
    },
    
    $m_2: null,
    downArrowImage: null,
    $3X_2: null,
    $3Y_2: null,
    $3B_2: null,
    $3A_2: null,
    $u_2: null,
    $2k_2: null,
    $2v_2: null,
    $2w_2: null,
    $2Q_2: null,
    $22_2: null,
    $1k_2: null,
    
    get_longRunningOp: function Microsoft_SharePoint_Taxonomy_TreeNode$get_longRunningOp() {ULSXaE:;
        if (!this.$1S_2) {
            this.$1S_2 = document.createElement('IMG');
            this.$1S_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/kpiprogressbar.gif';
        }
        return this.$1S_2;
    },
    
    $1S_2: null,
    
    grayOutText: function Microsoft_SharePoint_Taxonomy_TreeNode$grayOutText(toGrayOut) {ULSXaE:;
        if (toGrayOut) {
            Sys.UI.DomElement.removeCssClass(this.textLabel, 'ms-pagetitle');
            Sys.UI.DomElement.addCssClass(this.textLabel, 'font-gray');
        }
        else {
            Sys.UI.DomElement.removeCssClass(this.textLabel, 'font-gray');
            Sys.UI.DomElement.addCssClass(this.textLabel, 'ms-pagetitle');
        }
    },
    
    expandAndLoadToNode: function Microsoft_SharePoint_Taxonomy_TreeNode$expandAndLoadToNode(path) {ULSXaE:;
        if (!SP.ScriptUtility.isNullOrEmptyString(path)) {
            if (this.get_isChildrenLoaded()) {
                var $v_0;
                var $v_1;
                var $v_2 = path.indexOf('|');
                if ($v_2 > -1) {
                    $v_0 = path.substr(0, $v_2);
                    $v_1 = path.substr($v_2 + 1);
                }
                else {
                    $v_0 = path;
                    $v_1 = '';
                }
                this.expand(true);
                var $v_3 = this.get_childList().getChildById($v_0);
                if ($v_3) {
                    $v_3.expandAndLoadToNode($v_1);
                }
            }
            else {
                this.$q_2 = path;
                this.$E_2 = 1;
                if (this.$q_2.indexOf('|') > -1) {
                    this.set_isPreloaded(true);
                }
                this.expand(true);
            }
        }
        else {
            this.setFocus();
        }
    },
    
    expandToChildWithPaging: function Microsoft_SharePoint_Taxonomy_TreeNode$expandToChildWithPaging(path) {ULSXaE:;
        if (SP.ScriptUtility.isNullOrEmptyString(path)) {
            var $v_4 = this.get_parentNode();
            while ($v_4) {
                if (!$v_4.get_isExpanded()) {
                    $v_4.set_isExpanded(true);
                }
                $v_4 = $v_4.get_parentNode();
            }
            this.setFocus();
            return;
        }
        var $v_0;
        var $v_1;
        var $v_2 = path.indexOf('|');
        if ($v_2 > -1) {
            $v_0 = path.substr(0, $v_2);
            $v_1 = path.substr($v_2 + 1);
        }
        else {
            $v_0 = path;
            $v_1 = '';
        }
        var $v_3 = this.get_childList().get_firstChild();
        while ($v_3) {
            if ($v_3.get_id() === $v_0) {
                break;
            }
            $v_3 = $v_3.get_nextSibling();
        }
        if (!$v_3) {
            if (this.get_dataSource()) {
                this.get_dataSource().expandToChildNodeWithPaging(this, path);
            }
        }
        else {
            $v_3.expandToChildWithPaging($v_1);
        }
    },
    
    initialize: function Microsoft_SharePoint_Taxonomy_TreeNode$initialize() {ULSXaE:;
        Sys.Component.prototype.initialize.call(this);
        this.$2o_2();
        this.$3X_2 = this.$$d_$23_2;
        this.$3Y_2 = this.$$d_$2i_2;
        this.$2v_2 = this.$$d_$1X_2;
        this.$2w_2 = this.$$d_$1X_2;
        this.$3B_2 = this.get_onMouseOver();
        this.$3A_2 = this.get_onMouseOut();
        this.$u_2 = this.get_onBlur();
        this.$2k_2 = this.get_onClick();
        this.$2Q_2 = this.get_onKeyPress();
        this.$22_2 = this.$$d_$3W_2;
        this.$1h_2 = this.$$d_$2A_2;
        this.$1k_2 = this.$$d_$2r_2;
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.textInput, 'blur', this.$u_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.textLabel, 'blur', this.$22_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.textLabel, 'dblclick', this.$1h_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(this.textLabel, 'focus', this.$1k_2);
    },
    
    $2y_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$2y_2() {ULSXaE:;
        if (this.get_$1_2() && this.get_$1_2().$1W_2) {
            this.get_$1_2().$1W_2(this);
        }
    },
    
    $2x_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$2x_2($p0) {
        if (this.$z_2) {
            this.$z_2(this, $p0);
        }
    },
    
    $2A_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$2A_2($p0) {
        if (this.get_$1_2() && this.get_$1_2().$1J_2) {
            this.get_$1_2().$1J_2($p0);
        }
        else {
            Microsoft.SharePoint.Taxonomy.TreeNode.disableEvent($p0);
        }
    },
    
    $1h_2: null,
    $T_2: null,
    
    $2C_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$2C_2($p0) {
        var $v_0 = this.get_childList().get_firstChild();
        while ($v_0) {
            if ($v_0.get_id() === $p0) {
                break;
            }
            $v_0 = $v_0.get_nextSibling();
        }
        return $v_0;
    },
    
    dispose: function Microsoft_SharePoint_Taxonomy_TreeNode$dispose() {ULSXaE:;
        delete Microsoft.SharePoint.Taxonomy.TreeNode.$B[this.$T_2.toString()];
        if (this.$G_2) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.textInput, 'keyup', this.$11_2);
            Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.textInput, 'keydown', this.$10_2);
        }
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.textLabel, 'blur', this.$22_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.textInput, 'blur', this.$u_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.textLabel, 'dblclick', this.$1h_2);
        Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(this.textLabel, 'focus', this.$1k_2);
        Sys.Component.prototype.dispose.call(this);
    },
    
    getChildrenCallBack: function Microsoft_SharePoint_Taxonomy_TreeNode$getChildrenCallBack(childNodeCollection) {ULSXaE:;
        this.removeAllChildren();
        if ((!childNodeCollection) || (!childNodeCollection.get_count())) {
            this.set_isLeaf(true);
        }
        else {
            this.get_childList().$2W_2(childNodeCollection);
            if (this.$0_2 === 0) {
                this.$y_2 = true;
            }
            if (this.get_dataSource() && !this.get_isPreloaded()) {
                this.get_dataSource().raisePreloadEvent(this);
            }
            this.set_isExpanded(true);
        }
        this.set_isChildrenLoaded(true);
        if (this.get_parentNode() && !this.get_parentNode().get_isPreloaded()) {
            this.get_parentNode().set_isPreloaded(true);
        }
    },
    
    removeAllChildren: function Microsoft_SharePoint_Taxonomy_TreeNode$removeAllChildren() {ULSXaE:;
        this.get_childList().$2V_2();
        this.$I_2 = null;
        this.$e_2 = null;
        this.$Q_2 = null;
        this.$P_2 = null;
    },
    
    getPreloadCallBack: function Microsoft_SharePoint_Taxonomy_TreeNode$getPreloadCallBack(grandChildren) {ULSXaE:;
        this.set_isPreloaded(true);
        if (!grandChildren) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError('Expecting preloaded results but got null');
        }
        else {
            var $v_0 = 0;
            for (var $v_1 = 0; $v_1 < grandChildren.length; $v_1++) {
                var $v_2 = this.get_childList().get_firstChild();
                if (grandChildren[$v_1]) {
                    while ($v_2) {
                        if (grandChildren[$v_1].get_id() === $v_2.get_id()) {
                            $v_0++;
                            if ((!grandChildren[$v_1].get_count())) {
                                $v_2.set_isLeaf(true);
                            }
                            else {
                                $v_2.get_childList().$2W_2(grandChildren[$v_1]);
                                $v_2.set_isExpanded(false);
                            }
                            break;
                        }
                        $v_2 = $v_2.get_nextSibling();
                    }
                }
            }
        }
    },
    
    $23_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$23_2($p0) {
        if (this.get_isExpanded()) {
            this.expand(false);
        }
        else {
            this.expand(true);
        }
        this.$C_2.firstChild.focus();
    },
    
    $2i_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$2i_2($p0) {
        if ($p0.charCode === 13) {
            this.$23_2($p0);
        }
    },
    
    $2u_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$2u_2($p0) {
        Sys.UI.DomElement.addCssClass(this.textLabel, 'CursorStylePointer');
        Sys.UI.DomElement.addCssClass(this.textLabel, 'font-black');
        if (!this.$1O_2) {
            this.textNode.className = 'treenodehover';
        }
        if (this.$1l_2() && this.get_dataSource() && !this.get_dataSource().isInWebTaggingMode()) {
            this.downArrowImage.style.visibility = 'visible';
        }
        this.get_$1_2().set_hoverNode(this);
        if (this.get_$1_2().$1V_2) {
            this.get_$1_2().$1V_2($p0);
        }
    },
    
    $2t_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$2t_2($p0) {
        Sys.UI.DomElement.removeCssClass(this.textLabel, 'CursorStylePointer');
        if (this.get_$1_2().get_focusNode() !== this) {
            Sys.UI.DomElement.removeCssClass(this.textLabel, 'font-black');
        }
        if (!this.$1O_2) {
            this.textNode.className = 'tnn';
        }
        if (this.$1l_2() && this.get_dataSource() && !this.get_dataSource().isInWebTaggingMode()) {
            this.downArrowImage.style.visibility = 'hidden';
        }
    },
    
    $2p_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$2p_2($p0) {
        if (!this.$b_2) {
            this.textEdited();
            this.$1D_2 = false;
        }
        else {
            this.$b_2 = false;
        }
        if (this.suggestions) {
            this.suggestions.hidePanel();
        }
    },
    
    $2r_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$2r_2($p0) {
        if (!this.get_$1_2()) {
            throw Error.invalidOperation(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        if (this.get_dataSource()) {
            var $v_0 = this.get_dataSource();
            if ($v_0.$2M_2()) {
                return;
            }
            if ($v_0.$3_2 === 6) {
                return;
            }
        }
        if (this.get_dataSource() && this.get_dataSource().isInWebTaggingMode() && this.$5_2 && !(this.$5_2.It)) {
            return;
        }
        this.setFocus();
    },
    
    $2q_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$2q_2($p0) {
        this.setFocus();
        this.get_$1_2().set_targetNode(this);
        if (this.$24_2 && !this.$1Q_2) {
            this.$V_2(true);
            if (!this.$1D_2) {
                this.$1x_2();
                this.$1D_2 = true;
            }
        }
        else {
            this.$24_2 = true;
        }
    },
    
    $2s_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$2s_2($p0) {
        if ($p0.charCode === 13 && !this.get_isReadOnly()) {
            this.$b_2 = true;
            if (this.$G_2 && this.$z_2 && !this.$g_2) {
                $p0.preventDefault();
                return;
            }
            this.textEdited();
            $p0.preventDefault();
        }
        else if ($p0.charCode === 27) {
            if (this.$G_2) {
                this.uiDelete();
                this.set_text('');
            }
            else {
                this.set_text(this.textLabel.innerHTML);
                this.$V_2(false);
            }
        }
    },
    
    $b_2: false,
    
    $1X_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$1X_2($p0) {
        $p0.preventDefault();
        var $v_0 = this.$1l_2();
        if (!$v_0) {
            return;
        }
        if (!this.get_$1_2()) {
            throw Error.invalidOperation(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        if (this.get_$1_2().$1Z_2) {
            if (!this.get_$1_2().$1Z_2($p0)) {
                return;
            }
        }
        this.get_$1_2().set_targetNode(this);
        $v_0.style.visibility = 'hidden';
        MenuHtc_show($v_0, this.downArrowImage.parentNode, true, false, null);
    },
    
    $3W_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$3W_2($p0) {
        if (Sys.UI.DomElement.containsCssClass(this.textLabel, 'highlight')) {
            Sys.UI.DomElement.removeCssClass(this.textLabel, 'highlight');
        }
    },
    
    $3J_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$3J_2($p0) {
        if ($p0.charCode === 13) {
            this.$2S_2($p0);
        }
    },
    
    $2S_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$2S_2($p0) {
        if (this.get_dataSource()) {
            this.get_dataSource().page(this, true);
        }
    },
    
    $3K_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$3K_2($p0) {
        if ($p0.charCode === 13) {
            this.$2T_2($p0);
        }
    },
    
    $2T_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$2T_2($p0) {
        if (this.get_dataSource()) {
            this.get_dataSource().page(this, false);
        }
    },
    
    $1l_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$1l_2() {ULSXaE:;
        var $v_0 = null;
        if (this.$K_2) {
            $v_0 = this.$K_2;
        }
        else if (this.get_dataSource()) {
            $v_0 = this.get_dataSource().getECBMenu(this);
        }
        return $v_0;
    },
    
    $2o_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$2o_2() {ULSXaE:;
        var $v_0 = null;
        if (!this.get_element().firstChild) {
            this.$T_2 = (++Microsoft.SharePoint.Taxonomy.TreeNode.$1o).toString();
            this.get_element().innerHTML = Microsoft.SharePoint.Taxonomy.TreeNode.$2E(this.$T_2);
            this.get_element().firstChild.id = '_Div' + this.$T_2;
            $v_0 = this.get_element().firstChild;
        }
        else {
            $v_0 = this.get_element().firstChild;
            this.$T_2 = $v_0.id.substring(4, 11);
        }
        Microsoft.SharePoint.Taxonomy.TreeNode.$B[this.$T_2.toString()] = this;
        this.$C_2 = $v_0.childNodes[0];
        this.$J_2 = (this.$C_2.childNodes[0]);
        this.$J_2.alt = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipExpand;
        this.$J_2.title = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipExpand;
        this.$4_2 = ($v_0.childNodes[1]);
        this.textNode = ($v_0.childNodes[2]);
        this.textLabel = (this.textNode.childNodes[0].childNodes[0]);
        this.textInput = this.textLabel.nextSibling;
        this.downArrowImage = (this.textNode.childNodes[1].childNodes[0]);
        this.downArrowImage.alt = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipECBMenu;
        this.downArrowImage.title = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipECBMenu;
    },
    
    setInputText: function Microsoft_SharePoint_Taxonomy_TreeNode$setInputText(value) {ULSXaE:;
        this.textInput.value = value;
    },
    
    textEdited: function Microsoft_SharePoint_Taxonomy_TreeNode$textEdited() {ULSXaE:;
        if (this.textInput.value.trim().length !== this.textInput.value.length) {
            this.textInput.value = this.textInput.value.trim();
        }
        if (SP.ScriptUtility.isNullOrEmptyString(this.textInput.value)) {
            if (this.$G_2) {
                this.$h_2 = true;
                this.$b_2 = false;
                this.uiDelete();
            }
            else {
                this.get_$1_2().displayError(Microsoft.SharePoint.Taxonomy.ScriptResources.errorNameBlank);
                this.set_text(this.$1A_2);
                this.$V_2(false);
            }
        }
        else {
            var $v_0 = Microsoft.SharePoint.Taxonomy.ClientValidator.validateName(this.textInput.value);
            if ($v_0) {
                if (this.$G_2) {
                    this.$h_2 = true;
                    this.get_$1_2().displayError($v_0);
                    this.setFocus();
                    this.$2H_2();
                }
                else {
                    this.get_$1_2().displayError($v_0);
                    this.set_text(this.$1A_2);
                    this.$V_2(true);
                }
            }
            else if (this.textInput.value !== this.$1A_2) {
                if (this.$G_2) {
                    if (this.get_dataSource()) {
                        this.set_text(this.textInput.value);
                        this.$V_2(false);
                        this.get_dataSource().createNewItem(this.get_parentNode(), this.get_text());
                    }
                    else {
                        var $v_1 = Microsoft.SharePoint.Taxonomy.TreeNode.createANewTreeNode(false);
                        $v_1.set_text(this.textInput.value);
                        $v_1.set_isLeaf(true);
                        $v_1.set_isPreloaded(true);
                        $v_1.set_isChildrenLoaded(true);
                        $v_1.set_id(Microsoft.SharePoint.Taxonomy.TreeUtility.$2G());
                        $v_1.$K_2 = null;
                        this.uiReplaceWithNewNode($v_1);
                    }
                }
                else {
                    if (this.get_dataSource()) {
                        this.get_dataSource().changeItemName(this, this.textInput.value);
                    }
                    else {
                        this.uiSaveNameChange();
                    }
                }
                this.$V_2(false);
            }
            else {
                this.$V_2(false);
            }
        }
    },
    
    uiSaveNameChange: function Microsoft_SharePoint_Taxonomy_TreeNode$uiSaveNameChange() {ULSXaE:;
        this.set_text(this.textInput.value);
        if (this.get_$1_2()) {
            this.get_$1_2().set_isContentChanged(true);
        }
    },
    
    uiReplaceWithNewNode: function Microsoft_SharePoint_Taxonomy_TreeNode$uiReplaceWithNewNode(node) {ULSXaE:;
        if (!node) {
            throw Error.argumentNull('node');
        }
        if (this.$G_2) {
            this.set_text('');
            if (!this.$b_2) {
                this.$0_2 = Microsoft.SharePoint.Taxonomy.TreeNode.typeUnassigned;
            }
        }
        if (this.get_$R_2()) {
            if (this.$G_2 && this.$b_2 && (this.$0_2 === 4 || this.$0_2 === 7)) {
                this.get_$R_2().$2L_2(node, this);
                this.$b_2 = false;
                this.$V_2(true);
            }
            else {
                this.get_$R_2().$1v_2(node.get_domNode(), this.get_element());
                node.setFocus();
            }
        }
    },
    
    uiDelete: function Microsoft_SharePoint_Taxonomy_TreeNode$uiDelete() {ULSXaE:;
        var $v_0 = this.get_parentNode();
        if ($v_0) {
            $v_0.setFocus();
            if ($v_0.get_childList() && $v_0.get_childList().lastChildId === this.get_id()) {
                if (this.get_element().previousSibling) {
                    $v_0.get_childList().lastChildId = this.get_element().previousSibling.id;
                }
                else {
                    $v_0.get_childList().lastChildId = null;
                }
            }
        }
        else if (this.get_$1_2()) {
            this.get_$1_2().get_roots().get_firstChild().setFocus();
        }
        if (this.get_element().parentNode) {
            this.get_element().parentNode.removeChild(this.get_element());
            if ($v_0) {
                $v_0.$S_2--;
                if (!$v_0.get_childList().get_count()) {
                    $v_0.set_isLeaf(true);
                }
            }
        }
        if (this.$G_2) {
            this.$b_2 = false;
        }
    },
    
    $1K_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$1K_2($p0) {
        var $v_0 = Microsoft.SharePoint.Taxonomy.TreeNode.createANewTreeNode(this.get_isReadOnly());
        $v_0.get_domNode().id = this.get_id();
        $v_0.set_text(this.get_text());
        $v_0.$5_2 = this.$5_2;
        $v_0.$K_2 = this.$K_2;
        $v_0.$0_2 = this.$0_2;
        $v_0.set_isPreloaded(this.get_isPreloaded());
        $v_0.set_isExpanded(this.get_isExpanded());
        $v_0.set_isLeaf(this.get_isLeaf());
        if ($p0 && (this.get_childList().get_count())) {
            var $v_1 = null;
            var $v_2 = null;
            for (var $v_3 = 0; $v_3 < this.get_childList().get_count(); $v_3++) {
                $v_1 = this.get_childList().get_$1G_2()[$v_3].control;
                $v_2 = $v_1.$1K_2(true);
                $v_0.addChildAndExpand($v_2);
            }
        }
        else {
            $v_0.set_isLeaf(true);
        }
        return $v_0;
    },
    
    $30_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$30_2() {ULSXaE:;
        var $v_0 = new Sys.StringBuilder();
        for (var $v_1 = 1; $v_1 < Number.MAX_VALUE; $v_1++) {
            $v_0.append('copy ');
            if ($v_1 !== 1) {
                $v_0.append('(' + $v_1 + ') ');
            }
            $v_0.append('of ');
            $v_0.append(this.get_text());
            if (!this.get_$R_2().$3R_2($v_0.toString())) {
                break;
            }
            $v_0.clear();
        }
        return $v_0.toString();
    },
    
    loadChildren: function Microsoft_SharePoint_Taxonomy_TreeNode$loadChildren() {ULSXaE:;
        if (!this.get_isChildrenLoaded()) {
            this.get_childList().$26_2(this.get_longRunningOp());
            this.get_dataSource().raiseGetChildrenEvent(this);
        }
        else if (!this.get_isPreloaded()) {
            this.get_dataSource().raisePreloadEvent(this);
        }
    },
    
    $2z_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$2z_2() {ULSXaE:;
        try {
            this.textInput.focus();
            this.$2y_2();
        }
        catch ($$e_0) {
        }
    },
    
    $3H_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$3H_2($p0) {
        this.$2x_2($p0);
    },
    
    $3F_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$3F_2($p0) {
        if ($p0.keyCode === 229) {
            this.get_$1_2().$1P_2 = true;
        }
        else {
            this.get_$1_2().$1P_2 = false;
        }
    },
    
    get_$3G_2: function Microsoft_SharePoint_Taxonomy_TreeNode$get_$3G_2() {ULSXaE:;
        if (!this.$11_2) {
            this.$11_2 = this.$$d_$3H_2;
        }
        return this.$11_2;
    },
    set_$3G_2: function Microsoft_SharePoint_Taxonomy_TreeNode$set_$3G_2($p0) {
        this.$11_2 = $p0;
        return $p0;
    },
    
    $11_2: null,
    
    get_$3E_2: function Microsoft_SharePoint_Taxonomy_TreeNode$get_$3E_2() {ULSXaE:;
        if (!this.$10_2) {
            this.$10_2 = this.$$d_$3F_2;
        }
        return this.$10_2;
    },
    set_$3E_2: function Microsoft_SharePoint_Taxonomy_TreeNode$set_$3E_2($p0) {
        this.$10_2 = $p0;
        return $p0;
    },
    
    $10_2: null,
    
    $a_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$a_2($p0) {
        if ($p0) {
            if ($p0.get_parentNode()) {
                $p0.get_parentNode().$S_2--;
            }
            this.get_childList().addChild($p0);
            this.$S_2++;
        }
    },
    
    addChildAndExpand: function Microsoft_SharePoint_Taxonomy_TreeNode$addChildAndExpand(child) {ULSXaE:;
        if (!child) {
            return;
        }
        if (!this.get_isChildrenLoaded()) {
            this.$E_2 = 0;
            this.$A_2 = child;
            this.loadChildren();
        }
        else {
            if (child.$G_2) {
                this.$3S_2(child);
                child.$V_2(true);
                child.$1x_2();
                child.$2H_2();
            }
            this.$a_2(child);
            if (child.$G_2) {
                child.setFocus();
            }
            this.set_isExpanded(true);
        }
    },
    
    $3O_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$3O_2() {ULSXaE:;
        if (!this.get_element().parentNode) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
        if (this.get_dataSource()) {
            this.get_dataSource().deleteItem(this);
        }
        else {
            this.uiDelete();
        }
    },
    
    copy: function Microsoft_SharePoint_Taxonomy_TreeNode$copy(isCopyWithChildren) {ULSXaE:;
        if (this.get_dataSource()) {
            this.get_dataSource().copy(this, isCopyWithChildren);
        }
        else {
            this.$3Z_2(isCopyWithChildren);
        }
    },
    
    $3Z_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$3Z_2($p0) {
        var $v_0 = this.$30_2();
        var $v_1 = null;
        if ($p0) {
            $v_1 = this.$1K_2(true);
            $v_1.expand(true);
        }
        else {
            $v_1 = this.$1K_2(false);
        }
        $v_1.set_text($v_0);
        $v_1.get_element().id = Microsoft.SharePoint.Taxonomy.TreeUtility.$2G();
        this.get_$R_2().addChild($v_1);
    },
    
    refresh: function Microsoft_SharePoint_Taxonomy_TreeNode$refresh() {ULSXaE:;
        this.set_isExpanded(false);
        this.removeAllChildren();
        this.set_isChildrenLoaded(false);
        this.set_isPreloaded(false);
    },
    
    setFocus: function Microsoft_SharePoint_Taxonomy_TreeNode$setFocus() {ULSXaE:;
        if (!this.get_$1_2() || this.get_$1_2().get_focusNode() === this) {
            return;
        }
        if (this.get_$1_2().get_focusNode()) {
            this.get_$1_2().get_focusNode().removeFocus();
        }
        this.textNode.className = 'treenodeonfocus';
        this.$1O_2 = true;
        if (!Sys.UI.DomElement.containsCssClass(this.textLabel, 'display-none')) {
            Sys.UI.DomElement.addCssClass(this.textLabel, 'font-black');
            this.textLabel.focus();
        }
        this.get_$1_2().set_focusNode(this);
    },
    
    removeFocus: function Microsoft_SharePoint_Taxonomy_TreeNode$removeFocus() {ULSXaE:;
        Sys.UI.DomElement.removeCssClass(this.textLabel, 'font-black');
        this.textNode.className = 'tnn';
        this.$1O_2 = false;
        this.$24_2 = false;
    },
    
    $1x_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$1x_2() {ULSXaE:;
        this.textInput.select();
    },
    
    $2H_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$2H_2() {ULSXaE:;
        Sys.UI.DomElement.addCssClass(this.textLabel, 'highlight');
    },
    
    $3a_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$3a_2() {ULSXaE:;
        Sys.UI.DomElement.removeCssClass(this.textLabel, 'highlight');
    },
    
    setTooltip: function Microsoft_SharePoint_Taxonomy_TreeNode$setTooltip(toolTip) {ULSXaE:;
        this.textLabel.title = toolTip;
    },
    
    $V_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$V_2($p0) {
        if ($p0) {
            if (this.textLabel.offsetWidth > 150) {
                this.textInput.style.width = this.textLabel.offsetWidth + 'px';
            }
            else {
                this.textInput.style.width = 150 + 'px';
            }
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.textLabel);
            if (SP.ScriptUtility.isNullOrEmptyString(this.textInput.value)) {
                this.textInput.value = this.textLabel.title;
            }
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.textInput);
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.downArrowImage);
            window.setTimeout(this.$$d_$2z_2, 500);
        }
        else {
            this.$3a_2();
            Microsoft.SharePoint.Taxonomy.TreeUtility.hide(this.textInput);
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.textLabel);
            Microsoft.SharePoint.Taxonomy.TreeUtility.show(this.downArrowImage);
        }
    },
    
    expand: function Microsoft_SharePoint_Taxonomy_TreeNode$expand(toexpand) {ULSXaE:;
        if (toexpand && !this.get_isExpanded()) {
            this.loadChildren();
            this.set_isExpanded(true);
            if (!this.get_childList().get_count()) {
                this.set_isLeaf(true);
            }
        }
        else if (!toexpand && this.get_isExpanded()) {
            this.set_isExpanded(false);
            if (!this.get_childList().get_count()) {
                this.set_isLeaf(true);
            }
        }
    },
    
    deprecate: function Microsoft_SharePoint_Taxonomy_TreeNode$deprecate(toDeprecate) {ULSXaE:;
        if (toDeprecate !== this.$1N_2) {
            if (!this.get_dataSource()) {
                this.set_isDeprecated(toDeprecate);
            }
            else {
                this.get_dataSource().deprecateTerm(this, toDeprecate);
            }
        }
    },
    
    reuse: function Microsoft_SharePoint_Taxonomy_TreeNode$reuse(reuseTermId) {ULSXaE:;
        if (this.get_dataSource()) {
            this.get_dataSource().reuseTermWithBranch(this, reuseTermId);
        }
    },
    
    reuseWithPinning: function Microsoft_SharePoint_Taxonomy_TreeNode$reuseWithPinning(reuseTermId) {ULSXaE:;
        if (this.get_dataSource()) {
            this.get_dataSource().reuseTermWithPinning(this, reuseTermId);
        }
    },
    
    uiReuse: function Microsoft_SharePoint_Taxonomy_TreeNode$uiReuse(reuseTerm) {ULSXaE:;
        if (reuseTerm) {
            var $v_0 = reuseTerm.$1K_2(false);
            $v_0.set_id(reuseTerm.get_id());
            $v_0.set_$L_2(true);
            this.addChildAndExpand($v_0);
        }
    },
    
    moveTo: function Microsoft_SharePoint_Taxonomy_TreeNode$moveTo(parentType, newParentId, blocksKeyword) {ULSXaE:;
        if (this.get_dataSource()) {
            this.get_dataSource().moveTo(this, parentType, newParentId, blocksKeyword);
        }
    },
    
    merge: function Microsoft_SharePoint_Taxonomy_TreeNode$merge(mergeTargetAndParentIds) {ULSXaE:;
        if (this.get_dataSource()) {
            if (!SP.ScriptUtility.isNullOrEmptyString(mergeTargetAndParentIds)) {
                var $v_0 = mergeTargetAndParentIds.split(':');
                if ($v_0 && $v_0.length >= 2) {
                    this.get_dataSource().merge(this, $v_0[0], $v_0[1]);
                }
            }
        }
    },
    
    get_isDeprecated: function Microsoft_SharePoint_Taxonomy_TreeNode$get_isDeprecated() {ULSXaE:;
        return this.$1N_2;
    },
    set_isDeprecated: function Microsoft_SharePoint_Taxonomy_TreeNode$set_isDeprecated(value) {ULSXaE:;
        if (value !== this.$1N_2) {
            this.$1N_2 = value;
            this.setDisplayIcon();
        }
        return value;
    },
    
    $1N_2: false,
    
    get_$L_2: function Microsoft_SharePoint_Taxonomy_TreeNode$get_$L_2() {ULSXaE:;
        return this.$1r_2;
    },
    set_$L_2: function Microsoft_SharePoint_Taxonomy_TreeNode$set_$L_2($p0) {
        if ($p0 !== this.$1r_2) {
            this.$1r_2 = $p0;
            this.setDisplayIcon();
        }
        return $p0;
    },
    
    $1r_2: false,
    
    get_$i_2: function Microsoft_SharePoint_Taxonomy_TreeNode$get_$i_2() {ULSXaE:;
        return this.$1s_2;
    },
    set_$i_2: function Microsoft_SharePoint_Taxonomy_TreeNode$set_$i_2($p0) {
        if ($p0 !== this.$1s_2) {
            this.$1s_2 = $p0;
            this.setDisplayIcon();
        }
        return $p0;
    },
    
    $1s_2: false,
    $S_2: 0,
    
    get_isOrphan: function Microsoft_SharePoint_Taxonomy_TreeNode$get_isOrphan() {ULSXaE:;
        return this.$1p_2;
    },
    set_isOrphan: function Microsoft_SharePoint_Taxonomy_TreeNode$set_isOrphan(value) {ULSXaE:;
        if (value && !this.$1p_2) {
            this.$K_2 = null;
            this.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/itcontct.gif';
            this.$1p_2 = true;
        }
        return value;
    },
    
    $1p_2: false,
    
    get_isPinned: function Microsoft_SharePoint_Taxonomy_TreeNode$get_isPinned() {ULSXaE:;
        return this.$1q_2;
    },
    set_isPinned: function Microsoft_SharePoint_Taxonomy_TreeNode$set_isPinned(value) {ULSXaE:;
        if (value !== this.$1q_2) {
            this.$1q_2 = value;
            this.setDisplayIcon();
        }
        return value;
    },
    
    $1q_2: false,
    
    get_disabled: function Microsoft_SharePoint_Taxonomy_TreeNode$get_disabled() {ULSXaE:;
        return this.$1f_2;
    },
    set_disabled: function Microsoft_SharePoint_Taxonomy_TreeNode$set_disabled(value) {ULSXaE:;
        if (value && !this.$1f_2) {
            this.set_isReadOnly(true);
            this.$K_2 = null;
        }
        this.$1f_2 = value;
        return value;
    },
    
    $1f_2: false,
    
    get_isInvalid: function Microsoft_SharePoint_Taxonomy_TreeNode$get_isInvalid() {ULSXaE:;
        return this.$h_2;
    },
    set_isInvalid: function Microsoft_SharePoint_Taxonomy_TreeNode$set_isInvalid(value) {ULSXaE:;
        this.$h_2 = value;
        return value;
    },
    
    $h_2: false,
    $q_2: null,
    $A_2: null,
    
    setDisplayIcon: function Microsoft_SharePoint_Taxonomy_TreeNode$setDisplayIcon() {ULSXaE:;
        switch (this.$0_2) {
            case 0:
            case 11:
                this.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMRoot.png';
                this.$4_2.title = this.get_text();
                this.$4_2.alt = this.get_text();
                Sys.UI.DomElement.addCssClass(this.textLabel, 'ms-pagetitle');
                break;
            case 1:
            case 8:
                this.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMGroup.png';
                this.$4_2.title = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipIconGroup;
                this.$4_2.alt = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipIconGroup;
                Sys.UI.DomElement.addCssClass(this.textLabel, 'ms-pagetitle');
                break;
            case 3:
            case 6:
            case 12:
            case 9:
                this.$4_2.title = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipIconTermSet;
                this.$4_2.alt = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipIconTermSet;
                if (this.$5_2 && !((this.$5_2.It)) && this.$0_2 !== 9) {
                    this.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMTermSetDisabled.png';
                    Sys.UI.DomElement.removeCssClass(this.textLabel, 'ms-pagetitle');
                    Sys.UI.DomElement.addCssClass(this.textLabel, 'font-gray');
                }
                else {
                    if (this.$0_2 === 6 || this.$0_2 === 12 || this.$0_2 === 9 || Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.isHashtag(this) || this.$5_2 && this.$5_2.Ic) {
                        this.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMSpecialSet.png';
                    }
                    else {
                        this.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMTermSet.png';
                    }
                    Sys.UI.DomElement.removeCssClass(this.textLabel, 'font-gray');
                    Sys.UI.DomElement.addCssClass(this.textLabel, 'ms-pagetitle');
                }
                break;
            case 4:
            case 7:
            case 10:
                if (this.get_isDeprecated()) {
                    if (this.get_$L_2()) {
                        if (this.get_isPinned()) {
                            this.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/TermPinnedDeprecated.png';
                        }
                        else if (this.get_$i_2()) {
                            this.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMTermReuseDeprecatedSource.png';
                        }
                        else {
                            this.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMTermReuseDeprecated.png';
                        }
                    }
                    else {
                        this.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMTermDeprecated.png';
                    }
                    this.$4_2.title = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipIconDeprecatedTerm;
                    this.$4_2.alt = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipIconDeprecatedTerm;
                    Sys.UI.DomElement.removeCssClass(this.textLabel, 'ms-pagetitle');
                    Sys.UI.DomElement.addCssClass(this.textLabel, 'font-gray');
                }
                else if (this.$5_2 && !((this.$5_2.It))) {
                    if (this.get_$L_2()) {
                        if (this.get_isPinned()) {
                            this.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/TermPinnedDisabled.png';
                        }
                        else if (this.get_$i_2()) {
                            this.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMTermReuseDisabledSource.png';
                        }
                        else {
                            this.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMTermReuseDisabled.png';
                        }
                    }
                    else {
                        this.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMTermDisabled.png';
                    }
                    this.$4_2.title = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipIconTerm;
                    this.$4_2.alt = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipIconTerm;
                    Sys.UI.DomElement.removeCssClass(this.textLabel, 'ms-pagetitle');
                    Sys.UI.DomElement.addCssClass(this.textLabel, 'font-gray');
                }
                else if (this.get_$L_2()) {
                    if (this.get_isPinned()) {
                        this.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/TermPinned.png';
                    }
                    else if (this.get_$i_2()) {
                        this.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMTermReusedSource.png';
                    }
                    else {
                        this.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMTermReused.png';
                    }
                    this.$4_2.title = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipIconReusedTerm;
                    this.$4_2.alt = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipIconReusedTerm;
                    Sys.UI.DomElement.removeCssClass(this.textLabel, 'font-gray');
                    Sys.UI.DomElement.addCssClass(this.textLabel, 'ms-pagetitle');
                }
                else {
                    this.$4_2.title = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipIconTerm;
                    this.$4_2.alt = Microsoft.SharePoint.Taxonomy.ScriptResources.tooltipIconTerm;
                    this.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMTerm.png';
                    Sys.UI.DomElement.removeCssClass(this.textLabel, 'font-gray');
                    Sys.UI.DomElement.addCssClass(this.textLabel, 'ms-pagetitle');
                }
                break;
            default:
                break;
        }
        if (this.get_disabled()) {
            Sys.UI.DomElement.removeCssClass(this.textLabel, 'ms-pagetitle');
            Sys.UI.DomElement.addCssClass(this.textLabel, 'font-gray');
        }
    },
    
    $3S_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$3S_2($p0) {
        switch (this.$0_2) {
            case 0:
                $p0.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMGroup.png';
                $p0.$g_2 = true;
                break;
            case 1:
            case 8:
                $p0.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMTermSet.png';
                $p0.$g_2 = true;
                break;
            case 3:
            case 12:
                $p0.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMTerm.png';
                $p0.$g_2 = false;
                break;
            case 6:
                $p0.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMTerm.png';
                $p0.$g_2 = true;
                break;
            case 4:
            case 7:
                $p0.$4_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/EMMTerm.png';
                $p0.$g_2 = false;
                break;
            default:
                break;
        }
    },
    
    $3I_2: function Microsoft_SharePoint_Taxonomy_TreeNode$$3I_2($p0, $p1) {
        if ($p1.get_propertyName() === 'isChildrenLoaded') {
            if (!this.$E_2) {
                this.addChildAndExpand(this.$A_2);
                this.$E_2 = -1;
                this.$A_2 = null;
            }
            if (this.$E_2 === 1) {
                this.$E_2 = -1;
                var $v_0;
                var $v_1;
                var $v_2 = this.$q_2.indexOf('|');
                if ($v_2 > -1) {
                    $v_0 = this.$q_2.substr(0, $v_2);
                    $v_1 = this.$q_2.substr($v_2 + 1);
                }
                else {
                    $v_0 = this.$q_2;
                    $v_1 = '';
                }
                var $v_3 = this.get_childList().getChildById($v_0);
                if ($v_3) {
                    $v_3.expandAndLoadToNode($v_1);
                }
            }
        }
    },
    
    get_displayPager: function Microsoft_SharePoint_Taxonomy_TreeNode$get_displayPager() {ULSXaE:;
        if (this.$I_2 && !Sys.UI.DomElement.containsCssClass(this.$I_2, 'display-none')) {
            return true;
        }
        else {
            return false;
        }
    },
    set_displayPager: function Microsoft_SharePoint_Taxonomy_TreeNode$set_displayPager(value) {ULSXaE:;
        if (value) {
            if (this.get_childList().hasMoreChildAfter || this.get_childList().hasMoreChildBefore) {
                if (!this.$I_2) {
                    this.$I_2 = document.createElement('DIV');
                    Sys.UI.DomElement.addCssClass(this.$I_2, 'pager');
                    this.$I_2.innerHTML = Microsoft.SharePoint.Taxonomy.TreeNode.$2n(this.$T_2);
                    this.$e_2 = document.createElement('DIV');
                    Sys.UI.DomElement.addCssClass(this.$e_2, 'pager');
                    this.$e_2.innerHTML = Microsoft.SharePoint.Taxonomy.TreeNode.$2m(this.$T_2);
                    this.get_childList().get_domNode().appendChild(this.$e_2);
                    if (!this.get_childList().get_firstChild()) {
                        this.get_childList().get_domNode().appendChild(this.$I_2);
                    }
                    else {
                        this.get_childList().get_domNode().insertBefore(this.$I_2, this.get_childList().get_firstChild().get_domNode());
                    }
                    this.$Q_2 = this.$I_2.childNodes[0];
                    this.$P_2 = this.$e_2.childNodes[0];
                }
                else {
                    Sys.UI.DomElement.removeCssClass(this.$I_2, 'display-none');
                    Sys.UI.DomElement.removeCssClass(this.$e_2, 'display-none');
                }
                this.set_enablePageDownButton(this.get_childList().hasMoreChildAfter);
                this.set_enablePageUpButton(this.get_childList().hasMoreChildBefore);
            }
        }
        else {
            if (this.$I_2) {
                Sys.UI.DomElement.addCssClass(this.$I_2, 'display-none');
                Sys.UI.DomElement.addCssClass(this.$e_2, 'display-none');
                this.set_enablePageUpButton(false);
                this.set_enablePageDownButton(false);
            }
        }
        return value;
    },
    
    get_enablePageDownButton: function Microsoft_SharePoint_Taxonomy_TreeNode$get_enablePageDownButton() {ULSXaE:;
        if (this.get_displayPager() && this.$P_2 && !this.$P_2.disabled) {
            return true;
        }
        else {
            return false;
        }
    },
    set_enablePageDownButton: function Microsoft_SharePoint_Taxonomy_TreeNode$set_enablePageDownButton(value) {ULSXaE:;
        if (this.$P_2) {
            if (value && this.$P_2.disabled) {
                this.$P_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/ARRDOWNA.gif';
                this.$P_2.disabled = false;
            }
            else if (!value && !this.$P_2.disabled) {
                this.$P_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/ARRDOWNI.gif';
                this.$P_2.disabled = true;
            }
        }
        return value;
    },
    
    get_enablePageUpButton: function Microsoft_SharePoint_Taxonomy_TreeNode$get_enablePageUpButton() {ULSXaE:;
        if (this.get_displayPager() && this.$Q_2 && !this.$Q_2.disabled) {
            return true;
        }
        else {
            return false;
        }
    },
    set_enablePageUpButton: function Microsoft_SharePoint_Taxonomy_TreeNode$set_enablePageUpButton(value) {ULSXaE:;
        if (this.$Q_2) {
            if (value && this.$Q_2.disabled) {
                this.$Q_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/ARRUPA.gif';
                this.$Q_2.disabled = false;
            }
            else if (!value && !this.$Q_2.disabled) {
                this.$Q_2.src = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'Images/ARRUPI.gif';
                this.$Q_2.disabled = true;
            }
        }
        return value;
    },
    
    $I_2: null,
    $e_2: null,
    $Q_2: null,
    $P_2: null
}


Microsoft.SharePoint.Taxonomy.TreeNodeCollection = function Microsoft_SharePoint_Taxonomy_TreeNodeCollection(e) {ULSXaE:;
    Microsoft.SharePoint.Taxonomy.TreeNodeCollection.initializeBase(this, [ e ]);
}
Microsoft.SharePoint.Taxonomy.TreeNodeCollection.createANewTreeNodeCollection = function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$createANewTreeNodeCollection() {ULSXaE:;
    var $v_0 = document.createElement('UL');
    return new Microsoft.SharePoint.Taxonomy.TreeNodeCollection($v_0);
}
Microsoft.SharePoint.Taxonomy.TreeNodeCollection.prototype = {
    
    get_count: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$get_count() {ULSXaE:;
        if (this.get_element().lastChild && SP.ScriptUtility.isNullOrEmptyString(this.get_element().lastChild.id)) {
            return this.get_$1G_2().length - 1;
        }
        else {
            return this.get_$1G_2().length;
        }
    },
    
    get_id: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$get_id() {ULSXaE:;
        return this.get_element().id;
    },
    set_id: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$set_id(value) {ULSXaE:;
        this.get_element().id = value;
        return value;
    },
    
    get_firstChild: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$get_firstChild() {ULSXaE:;
        if (this.get_element().firstChild) {
            if (this.get_element().firstChild.tagName !== 'LI' && this.get_element().firstChild.nextSibling) {
                return this.get_element().firstChild.nextSibling.control;
            }
            else {
                return this.get_element().firstChild.control;
            }
        }
        return null;
    },
    
    get_lastChild: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$get_lastChild() {ULSXaE:;
        if (this.get_element().lastChild) {
            if (this.get_element().lastChild.tagName !== 'LI' && this.get_element().lastChild.previousSibling) {
                return this.get_element().lastChild.previousSibling.control;
            }
            else {
                return this.get_element().lastChild.control;
            }
        }
        return null;
    },
    
    get_$1G_2: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$get_$1G_2() {ULSXaE:;
        return this.get_element().childNodes;
    },
    
    $3R_2: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$$3R_2($p0) {
        var $v_0 = null;
        for (var $v_1 = 0; $v_1 < this.get_count(); $v_1++) {
            $v_0 = this.get_element().childNodes[$v_1].control;
            if ($p0 === $v_0.get_text()) {
                return $v_0;
            }
        }
        return null;
    },
    
    getChildById: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$getChildById(id) {ULSXaE:;
        var $v_0 = null;
        for (var $v_1 = 0; $v_1 < this.get_count(); $v_1++) {
            if (id === this.get_element().childNodes[$v_1].id) {
                $v_0 = this.get_element().childNodes[$v_1].control;
                break;
            }
        }
        return $v_0;
    },
    
    addChild: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$addChild(child) {ULSXaE:;
        if (child) {
            if (this.$D_2 && this.$D_2.$1L_2 && this.$D_2.get_filter().evaluate(child)) {
                return;
            }
            else if (this.get_element().childNodes && this.get_element().childNodes.length > 0 && SP.ScriptUtility.isNullOrEmptyString(this.get_element().childNodes[this.get_element().childNodes.length - 1].id)) {
                this.get_element().insertBefore(child.get_domNode(), this.get_element().childNodes[this.get_element().childNodes.length - 1]);
            }
            else {
                this.get_element().appendChild(child.get_domNode());
            }
        }
    },
    
    $26_2: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$$26_2($p0) {
        if ($p0) {
            this.get_element().appendChild($p0);
        }
    },
    
    $1v_2: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$$1v_2($p0, $p1) {
        if ($p0 && $p1) {
            this.get_element().replaceChild($p0, $p1);
        }
    },
    
    $2L_2: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$$2L_2($p0, $p1) {
        if ($p0 && $p1) {
            this.get_element().insertBefore($p0.get_domNode(), $p1.get_domNode());
        }
    },
    
    $3U_2: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$$3U_2() {ULSXaE:;
        if (this.get_element().style.display !== '') {
            this.get_element().style.display = '';
        }
    },
    
    $36_2: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$$36_2() {ULSXaE:;
        if (this.get_element().style.display !== 'none') {
            this.get_element().style.display = 'none';
        }
    },
    
    $2V_2: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$$2V_2() {ULSXaE:;
        while (this.get_element().firstChild) {
            this.get_element().removeChild(this.get_element().firstChild);
        }
    },
    
    $2W_2: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$$2W_2($p0) {
        if (!$p0 || !$p0.get_domNode()) {
            return;
        }
        var $v_0 = this.get_element().parentNode;
        $p0.get_domNode().id = this.get_element().id;
        $v_0.replaceChild($p0.get_domNode(), this.get_element());
    },
    
    get_domNode: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$get_domNode() {ULSXaE:;
        return this.get_element();
    },
    
    get_tree: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$get_tree() {ULSXaE:;
        return this.$D_2;
    },
    set_tree: function Microsoft_SharePoint_Taxonomy_TreeNodeCollection$set_tree(value) {ULSXaE:;
        this.$D_2 = value;
        return value;
    },
    
    $D_2: null,
    hasMoreChildBefore: false,
    hasMoreChildAfter: false,
    lastChildId: null
}


Microsoft.SharePoint.Taxonomy.TreeUtility = function Microsoft_SharePoint_Taxonomy_TreeUtility() {
}
Microsoft.SharePoint.Taxonomy.TreeUtility.addChildandFocus = function Microsoft_SharePoint_Taxonomy_TreeUtility$addChildandFocus(treeId) {ULSXaE:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TreeUtility.$c(treeId);
    if (!$v_0) {
        Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError(Microsoft.SharePoint.Taxonomy.ScriptResources.errorControlNotTree);
        return;
    }
    if (!$v_0.get_targetNode()) {
        Microsoft.SharePoint.Taxonomy.TreeUtility.showError('Target node is not set for tree ' + treeId);
        return;
    }
    $v_0.get_targetNode().addChildAndExpand($v_0.get_newNodeTemplate());
}
Microsoft.SharePoint.Taxonomy.TreeUtility.removeTargetNode = function Microsoft_SharePoint_Taxonomy_TreeUtility$removeTargetNode(treeId) {ULSXaE:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TreeUtility.$c(treeId);
    if (!$v_0) {
        Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError(Microsoft.SharePoint.Taxonomy.ScriptResources.errorControlNotTree);
        return;
    }
    if (!$v_0.get_targetNode()) {
        Microsoft.SharePoint.Taxonomy.TreeUtility.showError('Target node is not set.');
        return;
    }
    $v_0.get_targetNode().$3O_2();
    $v_0.set_targetNode(null);
}
Microsoft.SharePoint.Taxonomy.TreeUtility.copyTargetNode = function Microsoft_SharePoint_Taxonomy_TreeUtility$copyTargetNode(treeId, isCopyWithChildren) {ULSXaE:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TreeUtility.$c(treeId);
    if (!$v_0) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorControlNotTree);
    }
    if (!$v_0.get_targetNode()) {
        Microsoft.SharePoint.Taxonomy.TreeUtility.showError('Target node is not set for tree.');
        return;
    }
    $v_0.get_targetNode().copy(isCopyWithChildren);
}
Microsoft.SharePoint.Taxonomy.TreeUtility.deprecate = function Microsoft_SharePoint_Taxonomy_TreeUtility$deprecate(treeId, toDeprecate) {ULSXaE:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TreeUtility.$c(treeId);
    if (!$v_0) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorControlNotTree);
    }
    if ($v_0.get_targetNode()) {
        $v_0.get_targetNode().deprecate(toDeprecate);
    }
}
Microsoft.SharePoint.Taxonomy.TreeUtility.reuseTerm = function Microsoft_SharePoint_Taxonomy_TreeUtility$reuseTerm(treeId) {ULSXaE:;
    Microsoft.SharePoint.Taxonomy.TreeUtility.$18(treeId, false);
}
Microsoft.SharePoint.Taxonomy.TreeUtility.reuseTermWithPinning = function Microsoft_SharePoint_Taxonomy_TreeUtility$reuseTermWithPinning(treeId) {ULSXaE:;
    Microsoft.SharePoint.Taxonomy.TreeUtility.$18(treeId, true);
}
Microsoft.SharePoint.Taxonomy.TreeUtility.$18 = function Microsoft_SharePoint_Taxonomy_TreeUtility$$18($p0, $p1) {
    var $v_0 = Microsoft.SharePoint.Taxonomy.TreeUtility.$c($p0);
    if (!$v_0) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorControlNotTree);
    }
    var $v_1 = $v_0.get_targetNode();
    while ($v_1 && $v_1.$0_2 !== 3) {
        $v_1 = $v_1.get_parentNode();
    }
    if ($v_1) {
        Microsoft.SharePoint.Taxonomy.TreeUtility.$E = ($p1) ? 3 : 0;
        Microsoft.SharePoint.Taxonomy.TreeUtility.$A = $v_0.get_targetNode();
        Microsoft.SharePoint.Taxonomy.TreeUtility.launchTreePicker($v_1.get_id(), null, false, Microsoft.SharePoint.Taxonomy.TreeUtility.$E, $v_0.get_targetNode().$0_2, ($v_0.$9_2).$7_2, ($v_0.$9_2).$6_2, (($v_0.$9_2).get_rootNodeType() === 3) ? ($v_0.$9_2).$l_2 : '');
    }
}
Microsoft.SharePoint.Taxonomy.TreeUtility.importTermSet = function Microsoft_SharePoint_Taxonomy_TreeUtility$importTermSet(treeId) {ULSXaE:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TreeUtility.$c(treeId);
    if (!$v_0) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorControlNotTree);
    }
    var $v_1 = $v_0.get_targetNode();
    if (!$v_1) {
        Microsoft.SharePoint.Taxonomy.TreeUtility.showError('Target node is not set for tree ' + treeId);
        return;
    }
    if ($v_1.$0_2 !== 1) {
        throw Error.invalidOperation();
    }
    Microsoft.SharePoint.Taxonomy.TreeUtility.$A = $v_1;
    Microsoft.SharePoint.Taxonomy.TreeUtility.launchImportDialog(($v_1.get_dataSource()).get_sspId(), $v_1.get_id());
}
Microsoft.SharePoint.Taxonomy.TreeUtility.mergeTerm = function Microsoft_SharePoint_Taxonomy_TreeUtility$mergeTerm(treeId) {ULSXaE:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TreeUtility.$c(treeId);
    if (!$v_0) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorControlNotTree);
    }
    Microsoft.SharePoint.Taxonomy.TreeUtility.$E = 2;
    Microsoft.SharePoint.Taxonomy.TreeUtility.$A = $v_0.get_targetNode();
    Microsoft.SharePoint.Taxonomy.TreeUtility.launchTreePicker($v_0.get_targetNode().get_id(), Microsoft.SharePoint.Taxonomy.TreeUtility.$2F($v_0.get_targetNode()), true, 2, $v_0.get_targetNode().$0_2, ($v_0.$9_2).$7_2, ($v_0.$9_2).$6_2, (($v_0.$9_2).get_rootNodeType() === 3) ? ($v_0.$9_2).$l_2 : '');
}
Microsoft.SharePoint.Taxonomy.TreeUtility.showError = function Microsoft_SharePoint_Taxonomy_TreeUtility$showError(error) {ULSXaE:;
    alert(error);
}
Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError = function Microsoft_SharePoint_Taxonomy_TreeUtility$debugShowError(error) {
}
Microsoft.SharePoint.Taxonomy.TreeUtility.$2F = function Microsoft_SharePoint_Taxonomy_TreeUtility$$2F($p0) {
    var $v_0 = '';
    if ($p0 && $p0.get_parentNode()) {
        var $v_1 = $p0.get_parentNode();
        while ($v_1) {
            if ($v_0 === '') {
                $v_0 = $v_1.get_id();
            }
            else {
                $v_0 = $v_1.get_id() + '|' + $v_0;
            }
            $v_1 = $v_1.get_parentNode();
        }
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TreeUtility.$2G = function Microsoft_SharePoint_Taxonomy_TreeUtility$$2G() {ULSXaE:;
    var $v_0 = null;
    while (true) {
        $v_0 = 'newid' + Microsoft.SharePoint.Taxonomy.TreeUtility.$2K++;
        if (!$get($v_0)) {
            return $v_0;
        }
    }
}
Microsoft.SharePoint.Taxonomy.TreeUtility.$c = function Microsoft_SharePoint_Taxonomy_TreeUtility$$c($p0) {
    if (!$p0) {
        Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError('Tree ID is not specified');
        return null;
    }
    var $v_0 = $get($p0);
    if (!$v_0) {
        Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError('Element does not exist in document');
        return null;
    }
    return $v_0.control;
}
Microsoft.SharePoint.Taxonomy.TreeUtility.moveTo = function Microsoft_SharePoint_Taxonomy_TreeUtility$moveTo(treeID) {ULSXaE:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.TreeUtility.$c(treeID);
    if (!$v_0) {
        throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorControlNotTree);
    }
    Microsoft.SharePoint.Taxonomy.TreeUtility.$E = 1;
    Microsoft.SharePoint.Taxonomy.TreeUtility.$A = $v_0.get_targetNode();
    Microsoft.SharePoint.Taxonomy.TreeUtility.launchTreePicker($v_0.get_targetNode().get_id(), Microsoft.SharePoint.Taxonomy.TreeUtility.$2F($v_0.get_targetNode()), true, 1, $v_0.get_targetNode().$0_2, ($v_0.$9_2).$7_2, ($v_0.$9_2).$6_2, (($v_0.$9_2).get_rootNodeType() === 3) ? ($v_0.$9_2).$l_2 : '');
}
Microsoft.SharePoint.Taxonomy.TreeUtility.launchImportDialog = function Microsoft_SharePoint_Taxonomy_TreeUtility$launchImportDialog(sspId, groupId) {ULSXaE:;
    var $v_0 = new SP.UI.DialogOptions();
    $v_0.width = 550;
    $v_0.height = 200;
    $v_0.url = Microsoft.SharePoint.Taxonomy.TreeUtility.getPageUrlInSite(Microsoft.SharePoint.Taxonomy.TreeUtility.get_$37()) + '?sspId=' + sspId + '&groupId=' + groupId;
    $v_0.dialogReturnValueCallback = Microsoft.SharePoint.Taxonomy.TreeUtility.onImportDialogReturn;
    var $v_1 = SP.UI.ModalDialog.showModalDialog($v_0);
}
Microsoft.SharePoint.Taxonomy.TreeUtility.get_$37 = function Microsoft_SharePoint_Taxonomy_TreeUtility$get_$37() {ULSXaE:;
    return SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'InputCsvFile.aspx';
}
Microsoft.SharePoint.Taxonomy.TreeUtility.onImportDialogReturn = function Microsoft_SharePoint_Taxonomy_TreeUtility$onImportDialogReturn(dialogResult, errorMessage) {ULSXaE:;
    if (dialogResult === 1) {
        var $v_0 = null;
        if (errorMessage) {
            $v_0 = errorMessage.toString();
        }
        if (!$v_0 || $v_0 === '') {
            Microsoft.SharePoint.Taxonomy.TreeUtility.$A.refresh();
            Microsoft.SharePoint.Taxonomy.TreeUtility.$A.loadChildren();
            Microsoft.SharePoint.Taxonomy.TreeUtility.$A.setFocus();
            Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$U(Microsoft.SharePoint.Taxonomy.TreeUtility.$A, '');
        }
        else {
            Microsoft.SharePoint.Taxonomy.TreeUtility.showError($v_0);
        }
    }
}
Microsoft.SharePoint.Taxonomy.TreeUtility.launchTreePicker = function Microsoft_SharePoint_Taxonomy_TreeUtility$launchTreePicker(excludeGuidsString, focusNodePath, requirePermssion, operation, nodeType, webId, listId, termSetId) {ULSXaE:;
    var $v_0 = new SP.UI.DialogOptions();
    $v_0.width = 500;
    $v_0.height = 500;
    $v_0.dialogReturnValueCallback = Microsoft.SharePoint.Taxonomy.TreeUtility.onTreePickerDialogReturn;
    var $v_1 = {};
    var $v_2 = new Sys.StringBuilder();
    $v_2.append(excludeGuidsString);
    if (Microsoft.SharePoint.Taxonomy.TreeUtility.$A && Microsoft.SharePoint.Taxonomy.TreeUtility.$A.get_dataSource()) {
        var $v_4 = Microsoft.SharePoint.Taxonomy.TreeUtility.$A.get_dataSource();
        $v_1['lcid'] = $v_4.get_displayLcid();
        $v_1['sspId'] = $v_4.get_sspId();
        if ($v_4.$1z_2) {
            $v_2.append(':');
            $v_2.append($v_4.$1z_2.get_id());
        }
    }
    $v_1['excludeGuidList'] = $v_2.toString();
    $v_1['requirePermission'] = requirePermssion;
    $v_1['operation'] = operation;
    $v_1['nodeType'] = nodeType;
    $v_1['focusNodePath'] = focusNodePath;
    $v_1['webId'] = webId;
    $v_1['listId'] = listId;
    $v_1['termSetId'] = termSetId;
    $v_2 = new Sys.StringBuilder();
    $v_2.append(Microsoft.SharePoint.Taxonomy.TreeUtility.getPageUrlInSite(Microsoft.SharePoint.Taxonomy.TreeUtility.$2h));
    if (operation === 1 && nodeType === 3) {
        $v_0.title = Microsoft.SharePoint.Taxonomy.ScriptResources.tsmt_pickertitle_termset_move;
    }
    else if (operation === 1 && nodeType === 4) {
        $v_0.title = Microsoft.SharePoint.Taxonomy.ScriptResources.tsmt_pickertitle_term_move;
    }
    else if (!operation) {
        $v_0.title = Microsoft.SharePoint.Taxonomy.ScriptResources.tsmt_pickertitle_term_reuse;
    }
    else if (operation === 3) {
        $v_0.title = Microsoft.SharePoint.Taxonomy.ScriptResources.tsmt_pickertitle_term_reusepin;
    }
    else if (operation === 2) {
        $v_0.title = Microsoft.SharePoint.Taxonomy.ScriptResources.tsmt_pickertitle_term_merge;
    }
    $v_0.url = $v_2.toString();
    $v_0.args = $v_1;
    var $v_3 = SP.UI.ModalDialog.showModalDialog($v_0);
}
Microsoft.SharePoint.Taxonomy.TreeUtility.popupWaitScreen = function Microsoft_SharePoint_Taxonomy_TreeUtility$popupWaitScreen(title, body) {ULSXaE:;
    if (SP.ScriptUtility.isNullOrUndefined(Microsoft.SharePoint.Taxonomy.TreeUtility.$p)) {
        Microsoft.SharePoint.Taxonomy.TreeUtility.$p = SP.UI.ModalDialog.showWaitScreenWithNoClose(title, body);
    }
}
Microsoft.SharePoint.Taxonomy.TreeUtility.dismissWaitScreen = function Microsoft_SharePoint_Taxonomy_TreeUtility$dismissWaitScreen() {ULSXaE:;
    if (!SP.ScriptUtility.isNullOrUndefined(Microsoft.SharePoint.Taxonomy.TreeUtility.$p)) {
        Microsoft.SharePoint.Taxonomy.TreeUtility.$p.close(1);
        Microsoft.SharePoint.Taxonomy.TreeUtility.$p = null;
    }
}
Microsoft.SharePoint.Taxonomy.TreeUtility.getPageUrlInSite = function Microsoft_SharePoint_Taxonomy_TreeUtility$getPageUrlInSite(url) {ULSXaE:;
    var $v_0 = window.location.href;
    var $v_1 = $v_0.toLowerCase().indexOf('_layouts');
    $v_0 = $v_0.substring(0, $v_1 - 1);
    $v_0 = $v_0.replace(Microsoft.SharePoint.Taxonomy.TreeUtility.$2J, '');
    $v_0 = decodeURI($v_0);
    $v_0 = encodeURI($v_0);
    if (url.startsWith('/')) {
        return $v_0 + url;
    }
    else {
        return $v_0 + '/' + url;
    }
}
Microsoft.SharePoint.Taxonomy.TreeUtility.onTreePickerDialogReturn = function Microsoft_SharePoint_Taxonomy_TreeUtility$onTreePickerDialogReturn(dialogResult, returnObject) {ULSXaE:;
    var $v_0 = returnObject;
    if ($v_0 && dialogResult === 1) {
        if (!Microsoft.SharePoint.Taxonomy.TreeUtility.$E) {
            if (!SP.ScriptUtility.isNullOrEmptyString($v_0.guid)) {
                Microsoft.SharePoint.Taxonomy.TreeUtility.$A.reuse($v_0.guid);
            }
        }
        else if (Microsoft.SharePoint.Taxonomy.TreeUtility.$E === 3) {
            if (!SP.ScriptUtility.isNullOrEmptyString($v_0.guid)) {
                Microsoft.SharePoint.Taxonomy.TreeUtility.$A.reuseWithPinning($v_0.guid);
            }
        }
        else if (Microsoft.SharePoint.Taxonomy.TreeUtility.$E === 1) {
            if (!SP.ScriptUtility.isNullOrEmptyString($v_0.guid)) {
                Microsoft.SharePoint.Taxonomy.TreeUtility.$A.moveTo($v_0.type, $v_0.guid, $v_0.isKeywordBlocking);
            }
        }
        else if (Microsoft.SharePoint.Taxonomy.TreeUtility.$E === 2) {
            if (!SP.ScriptUtility.isNullOrEmptyString($v_0.guid)) {
                Microsoft.SharePoint.Taxonomy.TreeUtility.$A.merge($v_0.guid);
            }
        }
        else {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorInvalidOperation);
        }
    }
}
Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById = function Microsoft_SharePoint_Taxonomy_TreeUtility$getChildElemById(obj, itemId) {ULSXaE:;
    if (!obj || obj.nodeType !== 1) {
        return null;
    }
    var $v_0 = null;
    if (obj.id === itemId) {
        $v_0 = obj;
    }
    else if (obj.childNodes) {
        var $v_1 = null;
        for (var $v_2 = 0; $v_2 < obj.childNodes.length; $v_2++) {
            $v_1 = Microsoft.SharePoint.Taxonomy.TreeUtility.getChildElemById(obj.childNodes[$v_2], itemId);
            if ($v_1) {
                $v_0 = $v_1;
                break;
            }
        }
    }
    return $v_0;
}
Microsoft.SharePoint.Taxonomy.TreeUtility.hide = function Microsoft_SharePoint_Taxonomy_TreeUtility$hide(obj) {ULSXaE:;
    if (obj) {
        Sys.UI.DomElement.addCssClass(obj, 'display-none');
    }
}
Microsoft.SharePoint.Taxonomy.TreeUtility.show = function Microsoft_SharePoint_Taxonomy_TreeUtility$show(obj) {ULSXaE:;
    if (obj) {
        Sys.UI.DomElement.removeCssClass(obj, 'display-none');
    }
}
Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler = function Microsoft_SharePoint_Taxonomy_TreeUtility$attachHandler(element, eventName, handler) {ULSXaE:;
    if (element && handler) {
        $addHandler(element, eventName, handler);
    }
}
Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler = function Microsoft_SharePoint_Taxonomy_TreeUtility$detachHandler(element, eventName, handler) {ULSXaE:;
    if (element && handler) {
        $removeHandler(element, eventName, handler);
    }
}
Microsoft.SharePoint.Taxonomy.TreeUtility.firstChildDOMElement = function Microsoft_SharePoint_Taxonomy_TreeUtility$firstChildDOMElement(obj) {ULSXaE:;
    if (!obj) {
        return null;
    }
    else {
        var $v_0 = obj.firstChild;
        while ($v_0 && $v_0.nodeType !== 1) {
            $v_0 = $v_0.nextSibling;
        }
        return $v_0;
    }
}


Microsoft.SharePoint.Taxonomy.PickerReturnType = function Microsoft_SharePoint_Taxonomy_PickerReturnType() {
}
Microsoft.SharePoint.Taxonomy.PickerReturnType.prototype = {
    type: 0,
    guid: null,
    isKeywordBlocking: false
}


Microsoft.SharePoint.Taxonomy.TreeNodeDataSource = function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource() {ULSXaE:;
    Microsoft.SharePoint.Taxonomy.TreeNodeDataSource.initializeBase(this);
}
Microsoft.SharePoint.Taxonomy.TreeNodeDataSource.prototype = {
    
    raiseGetChildrenEvent: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$raiseGetChildrenEvent(node) {ULSXaE:;
        throw Error.notImplemented('TreeNodeDataSource.RaiseGetChildrenEvent');
    },
    
    raisePreloadEvent: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$raisePreloadEvent(node) {ULSXaE:;
        node.set_isPreloaded(true);
    },
    
    getRoots: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$getRoots(targetTree) {ULSXaE:;
        throw Error.notImplemented('TreeNodeDataSource.GetRoots');
    },
    
    disablePreloadForNode: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$disablePreloadForNode(node) {ULSXaE:;
        return false;
    },
    
    changeItemName: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$changeItemName(node, newName) {ULSXaE:;
        throw Error.notImplemented('TreeNodeDataSource.ChangeItemName');
    },
    
    createNewItem: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$createNewItem(parentNode, newName) {ULSXaE:;
        throw Error.notImplemented('TreeNodeDataSource.CreateNewItem');
    },
    
    deleteItem: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$deleteItem(node) {ULSXaE:;
        throw Error.notImplemented('TreeNodeDataSource.DeleteItem');
    },
    
    getDeprecatedTermECBMenu: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$getDeprecatedTermECBMenu() {ULSXaE:;
        throw Error.notImplemented('TreeNodeDataSource.GetDeprecatedTermECBMenu');
    },
    
    deprecateTerm: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$deprecateTerm(node, toDeprecate) {ULSXaE:;
        throw Error.notImplemented('TreeNodeDataSource.DeprecateTerm');
    },
    
    reuseTerm: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$reuseTerm(node, reuseTermGuid) {ULSXaE:;
        throw Error.notImplemented('TreeNodeDataSource.ReuseTerm');
    },
    
    reuseTermWithBranch: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$reuseTermWithBranch(node, reuseTermGuid) {ULSXaE:;
        throw Error.notImplemented('TreeNodeDataSource.ReuseTermWithBranch');
    },
    
    reuseTermWithPinning: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$reuseTermWithPinning(node, reuseTermGuid) {ULSXaE:;
        throw Error.notImplemented('TreeNodeDataSource.ReuseTermWithPinning');
    },
    
    moveTo: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$moveTo(node, newParentType, newParentGuid, blocksKeyword) {ULSXaE:;
        throw Error.notImplemented('TreeNodeDataSource.MoveTo');
    },
    
    merge: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$merge(mergeSource, mergeTargetId, mergeTargetTermsetId) {ULSXaE:;
        throw Error.notImplemented('TreeNodeDataSource.Merge');
    },
    
    copy: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$copy(node, isCopyWChildren) {ULSXaE:;
        throw Error.notImplemented('TreeNodeDataSource.Copy');
    },
    
    isInWebTaggingMode: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$isInWebTaggingMode() {ULSXaE:;
        return false;
    },
    
    getECBMenu: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$getECBMenu(node) {ULSXaE:;
        return null;
    },
    
    requirePaging: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$requirePaging(node) {ULSXaE:;
        return false;
    },
    
    page: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$page(node, pagingForward) {
    },
    
    updateOrphanTermSet: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$updateOrphanTermSet() {
    },
    
    expandToChildNodeWithPaging: function Microsoft_SharePoint_Taxonomy_TreeNodeDataSource$expandToChildNodeWithPaging(node, childPathFromParent) {
    }
}


Microsoft.SharePoint.Taxonomy.ParseJSONUtil = function Microsoft_SharePoint_Taxonomy_ParseJSONUtil() {
}
Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$3P = function Microsoft_SharePoint_Taxonomy_ParseJSONUtil$$3P($p0) {
    $p0 = $p0.replace(Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$2b, '$1new SP.Guid(\"$2\")');
    $p0 = $p0.replace(Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$2a, '$1Microsoft.SharePoint.Taxonomy.DataConvertUtil.createUtcDateTime($2)');
    $p0 = $p0.replace(Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$2Y, '$1Microsoft.SharePoint.Taxonomy.DataConvertUtil.createLocalDateTime($2)');
    $p0 = $p0.replace(Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$2Z, '$1Microsoft.SharePoint.Taxonomy.DataConvertUtil.createUnspecifiedDateTime($2)');
    return $p0;
}
Microsoft.SharePoint.Taxonomy.ParseJSONUtil.parseObjectFromJsonString = function Microsoft_SharePoint_Taxonomy_ParseJSONUtil$parseObjectFromJsonString(json) {ULSXaE:;
    if (SP.ScriptUtility.isNullOrEmptyString(json)) {
        return null;
    }
    var $v_0 = Microsoft.SharePoint.Taxonomy.ParseJSONUtil.validateJson(json);
    if (!$v_0) {
        throw Error.argument('json');
    }
    json = Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$3P(json);
    var $v_1 = eval('(' + json + ')');
    return $v_1;
}
Microsoft.SharePoint.Taxonomy.ParseJSONUtil.validateJson = function Microsoft_SharePoint_Taxonomy_ParseJSONUtil$validateJson(text) {ULSXaE:;
    return Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$2d.test(text.replace(Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$2e, '@').replace(Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$2f, ']').replace(Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$2c, ''));
}


Microsoft.SharePoint.Taxonomy.ClientValidator.registerClass('Microsoft.SharePoint.Taxonomy.ClientValidator');
Microsoft.SharePoint.Taxonomy.Filter.registerClass('Microsoft.SharePoint.Taxonomy.Filter');
Microsoft.SharePoint.Taxonomy.FilterEntry.registerClass('Microsoft.SharePoint.Taxonomy.FilterEntry');
Microsoft.SharePoint.Taxonomy.TreeNodeDataSource.registerClass('Microsoft.SharePoint.Taxonomy.TreeNodeDataSource', Sys.Component);
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.registerClass('Microsoft.SharePoint.Taxonomy.TaxonomyDataSource', Microsoft.SharePoint.Taxonomy.TreeNodeDataSource);
Microsoft.SharePoint.Taxonomy.Tree.registerClass('Microsoft.SharePoint.Taxonomy.Tree', Sys.UI.Control);
Microsoft.SharePoint.Taxonomy.TreeNode.registerClass('Microsoft.SharePoint.Taxonomy.TreeNode', Sys.UI.Control);
Microsoft.SharePoint.Taxonomy.TreeNodeCollection.registerClass('Microsoft.SharePoint.Taxonomy.TreeNodeCollection', Sys.UI.Control);
Microsoft.SharePoint.Taxonomy.TreeUtility.registerClass('Microsoft.SharePoint.Taxonomy.TreeUtility');
Microsoft.SharePoint.Taxonomy.PickerReturnType.registerClass('Microsoft.SharePoint.Taxonomy.PickerReturnType');
Microsoft.SharePoint.Taxonomy.ParseJSONUtil.registerClass('Microsoft.SharePoint.Taxonomy.ParseJSONUtil');
function treecontrol_initialize() {ULSXaE:;
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.taxonomyTreeRootId = 'TaxonomyRootID';
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.emptyGuid = '00000000-0000-0000-0000-000000000000';
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.unauthorizedAccessGuid = '00000000-0000-0000-0000-000000000001';
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.termStoreChanged = 'Term store changed';
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.invalidTermStoreId = 'Invalid term store ID';
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.saveConflict = 'Save conflict';
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.hashTagTermSetId = '3ceb0050-69a1-40e7-a427-83e2fac80c27';
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.tsmtMode = 0;
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.webTaggingMode = 1;
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.columnUIMode = 2;
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.columnCreateUIMode = 3;
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.columnFindMode = 4;
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.refinementMode = 5;
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.manualMode = 6;
Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.$21 = '00000000-0000-0000-0000-000000000000';
Microsoft.SharePoint.Taxonomy.Tree.$w = null;
Microsoft.SharePoint.Taxonomy.Tree.treeNodeName = 'Nm';
Microsoft.SharePoint.Taxonomy.Tree.treeNodeId = 'Id';
Microsoft.SharePoint.Taxonomy.Tree.treeNodeType = 'Tp';
Microsoft.SharePoint.Taxonomy.Tree.treeNodeChildren = 'Ch';
Microsoft.SharePoint.Taxonomy.Tree.treeNodeData = 'Dt';
Microsoft.SharePoint.Taxonomy.Tree.treeNodeMenu = 'Mu';
Microsoft.SharePoint.Taxonomy.Tree.treeNodeIsKeyword = 'Ik';
Microsoft.SharePoint.Taxonomy.Tree.treeNodeIsDeprecated = 'Ip';
Microsoft.SharePoint.Taxonomy.Tree.treeNodeIsSystemGroup = 'Ig';
Microsoft.SharePoint.Taxonomy.Tree.treeNodeIsReadOnly = 'Iro';
Microsoft.SharePoint.Taxonomy.Tree.treeNodeIsSiteCollectionGroup = 'Iscg';
Microsoft.SharePoint.Taxonomy.TreeNode.typeUnassigned = -1;
Microsoft.SharePoint.Taxonomy.TreeNode.$1o = 0;
Microsoft.SharePoint.Taxonomy.TreeNode.$B = {};
Microsoft.SharePoint.Taxonomy.TreeUtility.$2K = 0;
Microsoft.SharePoint.Taxonomy.TreeUtility.$2h = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'TaxonomyTreePicker.aspx';
Microsoft.SharePoint.Taxonomy.TreeUtility.$p = null;
Microsoft.SharePoint.Taxonomy.TreeUtility.$2J = new RegExp('[^:]*://[^/]*', 'ig');
Microsoft.SharePoint.Taxonomy.TreeUtility.$A = null;
Microsoft.SharePoint.Taxonomy.TreeUtility.$E = -1;
Microsoft.SharePoint.Taxonomy.TreeUtility.reuseOperation = 0;
Microsoft.SharePoint.Taxonomy.TreeUtility.moveOperation = 1;
Microsoft.SharePoint.Taxonomy.TreeUtility.mergeOperation = 2;
Microsoft.SharePoint.Taxonomy.TreeUtility.reusePinOperation = 3;
Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$2Z = new RegExp('(^|[^\\\\])\\\"\\\\/Date\\(([0-9]+(?:,[0-9]+){2,6})\\)\\\\/\\\"', 'g');
Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$2Y = new RegExp('(^|[^\\\\])\\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})\\)\\\\/\\\"', 'g');
Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$2a = new RegExp('(^|[^\\\\])\\\"\\\\/Date\\((-?[0-9]+)\\)\\\\/\\\"', 'g');
Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$2b = new RegExp('(^|[^\\\\])\\\"\\\\/Guid\\(([0-9a-fA-F\\-]+)\\)\\\\/\\\"', 'g');
Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$2d = new RegExp('^[\\],:{}\\s]*$');
Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$2e = new RegExp('\\\\(?:[\"\\\\\\/bfnrt]|u[0-9a-fA-F]{4})', 'g');
Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$2f = new RegExp('\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', 'g');
Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$2c = new RegExp('(?:^|:|,)(?:\\s*\\[)+', 'g');
Microsoft.SharePoint.Taxonomy.ParseJSONUtil.$3Q = new RegExp('(^|[^\\\\])\\\"\\\\/Base64Binary\\(([^\\)]*)\\)\\\\/\\\"', 'g');
};
treecontrol_initialize();

RegisterModuleInit("FieldEditor.js", treecontrol_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application )
{
   Sys.Application.notifyScriptLoaded();
}
if (typeof(NotifyScriptLoadedAndExecuteWaitingJobs) != "undefined")
{
    NotifyScriptLoadedAndExecuteWaitingJobs("treecontrol.js");
}
