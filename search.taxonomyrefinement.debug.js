// JScript File


Type.registerNamespace('Srch');

Srch.TaxonomyRefinementSortOrder = function() {}
Srch.TaxonomyRefinementSortOrder.prototype = {
    Frequency: 0, 
    TermSet: 1
}
Srch.TaxonomyRefinementSortOrder.registerEnum('Srch.TaxonomyRefinementSortOrder', false);


Srch.TaxonomyRefinement = function Srch_TaxonomyRefinement(elem) {
    this.$$d_$8_4 = Function.createDelegate(this, this.$8_4);
    this.$3_4 = Srch.TaxonomyRefinementSortOrder.toString(0);
    Srch.TaxonomyRefinement.initializeBase(this, [ elem ]);
}
Srch.TaxonomyRefinement.$6 = function Srch_TaxonomyRefinement$$6($p0, $p1) {
    var $v_0 = $p0, $v_1 = $p1;
    if ($v_0.count < $v_1.count) {
        return 1;
    }
    else if ($v_0.count === $v_1.count) {
        return 0;
    }
    else {
        return -1;
    }
}
Srch.TaxonomyRefinement.$7 = function Srch_TaxonomyRefinement$$7($p0, $p1) {
    var $v_0 = 5;
    if (!$p1.startsWith('GP') || $p1.length < $v_0) {
        return false;
    }
    var $v_1 = $p1.charAt(2);
    if ($v_1 !== '0' && $v_1 !== 'P') {
        return false;
    }
    if ($p1.charAt(3) !== '|') {
        return false;
    }
    if ($p1.charAt(4) !== '#') {
        return false;
    }
    var $v_2 = $p1.substring($v_0, $p1.length);
    return $v_2.toLowerCase() === $p0.id;
}
Srch.TaxonomyRefinement.prototype = {
    
    get_taxonomyRefinerName: function Srch_TaxonomyRefinement$get_taxonomyRefinerName() {
        return this.$4_4;
    },
    set_taxonomyRefinerName: function Srch_TaxonomyRefinement$set_taxonomyRefinerName(value) {
        this.$4_4 = value;
        return value;
    },
    
    $4_4: null,
    
    get_currentTaxonomyNodes: function Srch_TaxonomyRefinement$get_currentTaxonomyNodes() {
        return this.$0_4;
    },
    set_currentTaxonomyNodes: function Srch_TaxonomyRefinement$set_currentTaxonomyNodes(value) {
        this.$0_4 = value;
        return value;
    },
    
    $0_4: null,
    
    get_renderCounts: function Srch_TaxonomyRefinement$get_renderCounts() {
        return this.$2_4;
    },
    set_renderCounts: function Srch_TaxonomyRefinement$set_renderCounts(value) {
        this.$2_4 = value;
        return value;
    },
    
    $2_4: true,
    
    get_sortMode: function Srch_TaxonomyRefinement$get_sortMode() {
        return this.$3_4;
    },
    set_sortMode: function Srch_TaxonomyRefinement$set_sortMode(value) {
        this.$3_4 = value;
        return value;
    },
    
    get_itemTemplateId: function Srch_TaxonomyRefinement$get_itemTemplateId() {
        return this.$1_4;
    },
    set_itemTemplateId: function Srch_TaxonomyRefinement$set_itemTemplateId(value) {
        this.$1_4 = value;
        return value;
    },
    
    $1_4: '',
    
    render: function Srch_TaxonomyRefinement$render() {
        Srch.U.ensureNotNullOrUndefined(this.get_element(), this, 'RenderControl', 'this.Element');
        this.set_renderedResult(false);
        this.displayControlMessages();
        if (Srch.U.w(this.$4_4)) {
            return;
        }
        var $v_0 = new Array(this.$0_4.length);
        for (var $v_2 = 0; $v_2 < this.$0_4.length; $v_2++) {
            $v_0[$v_2] = new Srch.TaxonomyNodeSearchResult(this.$0_4[$v_2], 0);
        }
        if (!Srch.U.n(this.get_dataProvider().get_refinementInfo())) {
            var $v_3 = this.get_dataProvider().get_refinementInfo()[this.$4_4];
            if (!Srch.U.n($v_3)) {
                for (var $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
                    var $v_5 = $v_3[$v_4];
                    var $v_6 = $v_5['RefinementValue'];
                    for (var $v_7 = 0; $v_7 < $v_0.length; $v_7++) {
                        var $v_8 = $v_0[$v_7];
                        if (Srch.TaxonomyRefinement.$7($v_8, $v_6)) {
                            var $v_9 = $v_5['RefinementCount'];
                            $v_8.count += $v_9;
                        }
                    }
                }
            }
        }
        var $v_1 = [];
        for (var $v_A = 0; $v_A < $v_0.length; $v_A++) {
            var $v_B = $v_0[$v_A];
            if ($v_B.count > 0) {
                Array.add($v_1, $v_B);
            }
        }
        if (this.$3_4 === Srch.TaxonomyRefinementSortOrder.toString(0)) {
            $v_1.sort(Srch.TaxonomyRefinement.$6);
        }
        if (!Srch.U.n(this.alternateRenderer)) {
            if (Srch.U.n(this.alternateRenderContext)) {
                this.alternateRenderContext = {};
            }
            this.alternateRenderContext['ListData'] = $v_1;
            this.alternateRenderContext['CurrentItems'] = $v_1;
            this.alternateRenderContext['ClientControl'] = this;
            this.alternateRenderContext['DataProvider'] = this.get_dataProvider();
            this.alternateRenderContext['ScriptApplicationManager'] = Srch.ScriptApplicationManager.get_current();
            this.alternateRenderContext['RenderCounts'] = this.$2_4;
            this.invokeAlternateRender(this.alternateRenderer, this.get_element(), this.alternateRenderContext);
        }
        else {
            var $v_C = {};
            $v_C['ResolveTemplate'] = this.$$d_$8_4;
            $v_C['ListData'] = $v_1;
            $v_C['CurrentItems'] = $v_1;
            $v_C['ClientControl'] = this;
            $v_C['DataProvider'] = this.get_dataProvider();
            $v_C['ScriptApplicationManager'] = Srch.ScriptApplicationManager.get_current();
            $v_C['RenderCounts'] = this.$2_4;
            this.invokeClientRenderer(this.get_element(), $v_C);
        }
        this.raiseResultRenderedEvent(new Srch.ResultEventArgs(this.get_currentResultTableCollection()));
    },
    
    scriptApplication_PreLoad: function Srch_TaxonomyRefinement$scriptApplication_PreLoad(sender, e) {
        Srch.U.trace(this, 'ScriptApplication_PreLoad', 'TaxonomyRefinement');
        if (this.get_delayLoadTemplateScripts()) {
            Srch.U.appendScriptsToLoad(this.serverTemplateScriptsToLoad, this.$1_4);
        }
        Srch.DisplayControl.prototype.scriptApplication_PreLoad.call(this, sender, e);
    },
    
    $8_4: function Srch_TaxonomyRefinement$$8_4($p0, $p1, $p2) {
        if ($p2 === 'Item') {
            return Srch.U.getRenderTemplateByName(this.$1_4, $p0);
        }
        else {
            return Srch.U.resolveRenderTemplate($p0, $p1, $p2);
        }
    },
    
    handleClickOnCategoryLink: function Srch_TaxonomyRefinement$handleClickOnCategoryLink(termGuidStr) {
        var $v_0 = null;
        for (var $v_2 = 0; $v_2 < this.$0_4.length; $v_2++) {
            var $v_3 = this.$0_4[$v_2];
            if (Srch.TaxonomyRefinementNodeInfo.$5($v_3) === termGuidStr) {
                $v_0 = $v_3;
                break;
            }
        }
        if (!$v_0) {
            Srch.U.traceFormatted(this, 'HandleClickOnCategoryLink', 'Can\'t find TaxonomyRefinementNodeInfo for category \'{0}\'', termGuidStr);
            return;
        }
        var $v_1 = this.get_dataProvider().get_currentQueryState();
        $v_1.s = 1;
        Srch.ScriptApplicationManager.get_current().navigateTo($v_0.TopicPageUrl, true);
    }
}


Srch.TaxonomyRefinementNodeInfo = function Srch_TaxonomyRefinementNodeInfo() {
}
Srch.TaxonomyRefinementNodeInfo.$5 = function Srch_TaxonomyRefinementNodeInfo$$5($p0) {
    return $p0.Id.toString('D').toLowerCase();
}
Srch.TaxonomyRefinementNodeInfo.prototype = {
    DisplayName: null,
    TopicPageUrl: null,
    TopicPageQueryString: null,
    Id: null
}


Srch.TaxonomyNodeSearchResult = function Srch_TaxonomyNodeSearchResult($p0, $p1) {
    this.count = $p1;
    this.displayName = $p0.DisplayName;
    this.topicPageUrl = $p0.TopicPageUrl;
    this.topicPageQueryString = $p0.TopicPageQueryString;
    this.id = Srch.TaxonomyRefinementNodeInfo.$5($p0);
}
Srch.TaxonomyNodeSearchResult.prototype = {
    count: 0,
    displayName: null,
    topicPageUrl: null,
    topicPageQueryString: null,
    id: null
}


Srch.TaxonomyRefinement.registerClass('Srch.TaxonomyRefinement', Srch.DisplayControl);
Srch.TaxonomyRefinementNodeInfo.registerClass('Srch.TaxonomyRefinementNodeInfo');
Srch.TaxonomyNodeSearchResult.registerClass('Srch.TaxonomyNodeSearchResult');

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("search.taxonomyrefinement.js");
