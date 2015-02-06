// JScript File


Type.registerNamespace('Srch');

Srch.HashTagDataView = function Srch_HashTagDataView($p0) {
    Srch.HashTagDataView.initializeBase(this, [ $p0 ]);
}
Srch.HashTagDataView.prototype = {
    
    count: function Srch_HashTagDataView$count() {
        return 6;
    },
    
    get_ensureSocialFollowingManager: function Srch_HashTagDataView$get_ensureSocialFollowingManager() {
        if (!this.$I_1) {
            this.$I_1 = new SP.Social.SocialFollowingManager(Srch.ScriptApplicationManager.get_clientRuntimeContext());
        }
        return this.$I_1;
    },
    
    $I_1: null,
    
    buildDataSet: function Srch_HashTagDataView$buildDataSet($p0) {
        return this.buildNextDataSet($p0, 0);
    },
    
    getPivots: function Srch_HashTagDataView$getPivots() {
        return null;
    },
    
    buildView: function Srch_HashTagDataView$buildView($p0) {
        var $v_0 = $p0;
        var $v_1 = $v_0.$9_1;
        if ($v_1) {
            var $v_2 = $v_1.split('|');
            if ($v_2.length === 3) {
                var $v_3 = $v_2[2];
                var $v_4 = $v_2[1];
                if ($v_4.length > 1) {
                    $v_4 = $v_4.substr(2);
                }
                var $v_5 = $v_0.$E_0;
                var $v_6 = '?TermID=' + $v_4;
                var $v_7 = Srch.DataView.getHostUrl() + SP.Utilities.VersionUtility.getLayoutsPageUrl('HashTagProfile.aspx') + $v_6;
                var $v_8 = '<a class=\"ms-textLarge ms-subtleLink\" href=\"' + $v_7 + '\">' + $v_3 + '</a>';
                var $v_9 = '<div style=\"max-width: 250px;\" class=\"ms-noWrap\">' + $v_8 + '</div>';
                var $v_A = ($v_5 && $v_5.length > 0) ? ('<div style=\"max-width: 250px;\" class=\"ms-noWrap ms-metadata\">' + $v_5 + '</div>') : '';
                return '<div>' + $v_9 + $v_A + '</div>';
            }
        }
        return '';
    },
    
    $O_1: function Srch_HashTagDataView$$O_1($p0) {
        var $v_0;
        var $v_1 = ($p0.$0_0) ? 'ms-contentFollowing-followingImg' : 'ms-contentFollowing-notFollowingImg';
        var $v_2 = '<img class=\"{1}\" src=\"/_layouts/15/images/socialcommon.png\" {0}>';
        var $v_3 = '<span class=\"ms-contentFollowing-followingSpan s4-clust ms-promotedActionButton-icon\">{0}</span>';
        var $v_4 = '<span class=\"ms-metadata\" style=\"vertical-align:bottom;\">{0}</span>';
        var $v_5;
        var $v_6;
        if (!$p0.$8_1) {
            var $v_7;
            if (!$p0.$0_0) {
                $v_7 = Srch.AnalyticsRecommendation.strIsNotFollowed;
            }
            else {
                $v_7 = Srch.AnalyticsRecommendation.strIsFollowed;
            }
            $v_5 = String.format($v_2, '', $v_1);
            $v_6 = String.format($v_3, $v_5);
            var $v_8 = String.format($v_4, $v_7);
            return $v_6 + $v_8;
        }
        else {
            $v_5 = String.format($v_2, Srch.AnalyticsRecommendation.strFollow, $v_1);
            $v_0 = 'title=\'' + String.format(Srch.AnalyticsRecommendation.strStopFollowing, $p0.$9_1) + '\'';
            $v_6 = String.format($v_3, $v_5);
            var $v_9 = 'onclick=\"Srch.AnalyticsRecommendation.handleTagFollow(\'' + this.$4_0.$1_0 + '\', \'' + $p0.$A_0 + '\', this); return false;\"';
            var $v_A = String.format($v_4, Srch.AnalyticsRecommendation.strFollow);
            var $v_B = '<a ' + $v_0 + ' class=\"ms-subtleLink\" ' + $v_9 + '>' + $v_6 + $v_A + '</a>';
            return $v_B;
        }
    },
    
    doFollow: function Srch_HashTagDataView$doFollow($p0, $p1) {
        var $v_0 = $p0;
        var $v_1 = this.get_ensureSocialFollowingManager();
        var $v_2 = new SP.Social.SocialActorInfo();
        $v_2.set_actorType(3);
        $v_2.set_tagGuid(new SP.Guid($v_0.$8_1));
        try {
            if (!$p0.$0_0) {
                $v_1.follow($v_2);
            }
            else {
                $v_1.stopFollowing($v_2);
            }
            $p0.$0_0 = !$p0.$0_0;
            $p1.parentNode.innerHTML = this.$O_1($v_0);
        }
        catch ($$e_5) {
        }
    }
}


Srch.AnalyticsRecommendation = function Srch_AnalyticsRecommendation(templateId, recType, searchUrl) {
    this.$$d_$Q_0 = Function.createDelegate(this, this.$Q_0);
    this.$G_0 = Srch.AnalyticsRecommendation.strNoResults;
    if (SP.ScriptUtility.isNullOrEmptyString(searchUrl)) {
        searchUrl = null;
    }
    this.$1_0 = templateId;
    this.$6_0 = recType;
    this.$H_0 = searchUrl;
}
Srch.AnalyticsRecommendation.doRecommend = function Srch_AnalyticsRecommendation$doRecommend(templateId, action, pivot) {
    var $v_0 = Srch.AnalyticsRecommendation.$J(templateId);
    $v_0.$L_0(action, pivot);
    return false;
}
Srch.AnalyticsRecommendation.ensureObject = function Srch_AnalyticsRecommendation$ensureObject(templateId, recType, searchUrl) {
    var $v_0 = Srch.AnalyticsRecommendation.$J(templateId);
    if (!$v_0) {
        $v_0 = new Srch.AnalyticsRecommendation(templateId, recType, searchUrl);
        Array.add(Srch.AnalyticsRecommendation.$F, $v_0);
        Srch.AnalyticsRecommendation.$K++;
    }
    $v_0.$S_0();
}
Srch.AnalyticsRecommendation.handleTagFollow = function Srch_AnalyticsRecommendation$handleTagFollow(templateId, guid, htmlElm) {
    var $v_0 = Srch.AnalyticsRecommendation.$J(templateId);
    var $v_1 = $v_0.$C_0();
    var $v_2 = $v_0.$7_0.findId(guid);
    $v_1.doFollow($v_2, htmlElm);
}
Srch.AnalyticsRecommendation.$J = function Srch_AnalyticsRecommendation$$J($p0) {
    for (var $v_0 = 0; $v_0 < Srch.AnalyticsRecommendation.$K; $v_0++) {
        var $v_1 = Srch.AnalyticsRecommendation.$F[$v_0];
        if ($v_1.$1_0 === $p0) {
            return $v_1;
        }
    }
    return null;
}
Srch.AnalyticsRecommendation.prototype = {
    
    get_itemTemplateId: function Srch_AnalyticsRecommendation$get_itemTemplateId() {
        return this.$1_0;
    },
    set_itemTemplateId: function Srch_AnalyticsRecommendation$set_itemTemplateId(value) {
        this.$1_0 = value;
        return value;
    },
    
    $1_0: '',
    
    get_recommendationType: function Srch_AnalyticsRecommendation$get_recommendationType() {
        return this.$6_0;
    },
    set_recommendationType: function Srch_AnalyticsRecommendation$set_recommendationType(value) {
        this.$6_0 = value;
        return value;
    },
    
    $6_0: '',
    
    get_searchUrl: function Srch_AnalyticsRecommendation$get_searchUrl() {
        return this.$H_0;
    },
    set_searchUrl: function Srch_AnalyticsRecommendation$set_searchUrl(value) {
        this.$H_0 = value;
        return value;
    },
    
    $H_0: null,
    
    get_getPivotId: function Srch_AnalyticsRecommendation$get_getPivotId() {
        return 'Recommendation_' + this.$1_0 + '_pivot';
    },
    
    get_getResultsId: function Srch_AnalyticsRecommendation$get_getResultsId() {
        return 'Recommendation_' + this.$1_0 + '_results';
    },
    
    $L_0: function Srch_AnalyticsRecommendation$$L_0($p0, $p1) {
        this.$C_0().updatePivot($p1);
        this.$R_0($p0, $p1);
    },
    
    $D_0: null,
    
    $S_0: function Srch_AnalyticsRecommendation$$S_0() {
        this.$C_0().ensurePivotControl();
        window.setTimeout(this.$$d_$Q_0, 500);
    },
    
    $Q_0: function Srch_AnalyticsRecommendation$$Q_0() {
        this.$L_0(this.$6_0, this.$C_0().getDefaultPivot());
    },
    
    $M_0: function Srch_AnalyticsRecommendation$$M_0() {
        var $v_0 = $get(this.get_getResultsId());
        $v_0.innerHTML = '';
        var $v_1 = this.$C_0();
        var $v_2 = $v_1.buildNextDataSet(this.$7_0, 0);
        for (var $v_3 = 0; $v_3 < $v_2.$3_0; $v_3++) {
            $v_0.innerHTML += $v_1.buildView($v_2.get($v_3));
        }
        if (!$v_2.$3_0) {
            $v_0.innerHTML = '<div class=\"ms-textLarge\">' + this.$G_0 + '</div>';
        }
    },
    
    $C_0: function Srch_AnalyticsRecommendation$$C_0() {
        if (this.$D_0) {
            return this.$D_0;
        }
        if (this.$6_0 === 'HashTags') {
            this.$D_0 = new Srch.HashTagDataView(this);
            return this.$D_0;
        }
        return null;
    },
    
    $7_0: null,
    
    $R_0: function Srch_AnalyticsRecommendation$$R_0($p0, $p1) {
        if (this.$7_0) {
            this.$M_0();
            return;
        }
        this.$7_0 = new Srch.DataSet();
        var $v_0 = null;
        var $v_1 = $get('AnalyticsRecommendation_SerializedHashTagCollection');
        if ($v_1) {
            var $v_2 = SP.ClientContext.get_current();
            $v_0 = $v_2.parseObjectFromJsonString(SP.UI.UIUtility.getInnerText($v_1));
            $v_1.parentNode.removeChild($v_1);
        }
        if (!$v_0 || !$v_0.get_count()) {
            this.$G_0 = Srch.AnalyticsRecommendation.strNoResults;
        }
        else {
            for (var $v_3 = 0; $v_3 < $v_0.get_count(); $v_3++) {
                var $v_4 = $v_0.get_item($v_3);
                var $v_5 = String.format(Srch.AnalyticsRecommendation.strExplanation, $v_4.get_useCount().localeFormat('N0'));
                var $v_6 = new Srch.HashTagData($v_4.get_name(), false, $v_5, $v_4.get_useCount(), null);
                this.$7_0.add($v_6);
            }
        }
        this.$M_0();
    }
}


Srch.DataSet = function Srch_DataSet() {
    this.$B_0 = [];
}
Srch.DataSet.$P = function Srch_DataSet$$P($p0, $p1) {
    var $v_0 = $p0;
    var $v_1 = $p1;
    if ($v_1.$5_0 > $v_0.$5_0) {
        return 1;
    }
    else if ($v_1.$5_0 < $v_0.$5_0) {
        return -1;
    }
    else {
        return 0;
    }
}
Srch.DataSet.prototype = {
    $3_0: 0,
    $B_0: null,
    
    add: function Srch_DataSet$add($p0) {
        Array.add(this.$B_0, $p0);
        this.$3_0++;
    },
    
    remove: function Srch_DataSet$remove($p0) {
        var $v_0 = this.get($p0);
        Array.removeAt(this.$B_0, $p0);
        this.$3_0--;
        return $v_0;
    },
    
    findId: function Srch_DataSet$findId($p0) {
        for (var $v_0 = 0; $v_0 < this.$3_0; $v_0++) {
            var $v_1 = this.get($v_0);
            if ($v_1.$A_0 === $p0) {
                return $v_1;
            }
        }
        return null;
    },
    
    get_count: function Srch_DataSet$get_count() {
        return this.$3_0;
    },
    
    get: function Srch_DataSet$get($p0) {
        return this.$B_0[$p0];
    },
    
    sort: function Srch_DataSet$sort() {
        this.$B_0.sort(Srch.DataSet.$P);
    }
}


Srch.BaseData = function Srch_BaseData($p0, $p1, $p2, $p3) {
    this.$0_0 = $p0;
    this.$E_0 = $p1;
    this.$5_0 = $p2;
    this.$A_0 = $p3;
}
Srch.BaseData.prototype = {
    
    get_isFollowed: function Srch_BaseData$get_isFollowed() {
        return this.$0_0;
    },
    set_isFollowed: function Srch_BaseData$set_isFollowed($p0) {
        this.$0_0 = $p0;
        return $p0;
    },
    
    $0_0: false,
    
    get_explanation: function Srch_BaseData$get_explanation() {
        return this.$E_0;
    },
    set_explanation: function Srch_BaseData$set_explanation($p0) {
        this.$E_0 = $p0;
        return $p0;
    },
    
    $E_0: null,
    
    get_relevance: function Srch_BaseData$get_relevance() {
        return this.$5_0;
    },
    set_relevance: function Srch_BaseData$set_relevance($p0) {
        this.$5_0 = $p0;
        return $p0;
    },
    
    $5_0: 0,
    
    get_id: function Srch_BaseData$get_id() {
        return this.$A_0;
    },
    set_id: function Srch_BaseData$set_id($p0) {
        this.$A_0 = $p0;
        return $p0;
    },
    
    $A_0: null
}


Srch.HashTagData = function Srch_HashTagData($p0, $p1, $p2, $p3, $p4) {
    Srch.HashTagData.initializeBase(this, [ $p1, $p2, $p3, $p4 ]);
    this.$9_1 = $p0;
    this.$8_1 = $p4;
}
Srch.HashTagData.prototype = {
    
    get_hashTag: function Srch_HashTagData$get_hashTag() {
        return this.$9_1;
    },
    set_hashTag: function Srch_HashTagData$set_hashTag($p0) {
        this.$9_1 = $p0;
        return $p0;
    },
    
    $9_1: null,
    
    get_guid: function Srch_HashTagData$get_guid() {
        return this.$8_1;
    },
    set_guid: function Srch_HashTagData$set_guid($p0) {
        this.$8_1 = $p0;
        return $p0;
    },
    
    $8_1: null
}


Srch.DataView = function Srch_DataView($p0) {
    this.$4_0 = $p0;
}
Srch.DataView.getHostUrl = function Srch_DataView$getHostUrl() {
    return window.location.protocol + '//' + window.location.host;
}
Srch.DataView.prototype = {
    $2_0: null,
    
    get_rec: function Srch_DataView$get_rec() {
        return this.$4_0;
    },
    set_rec: function Srch_DataView$set_rec($p0) {
        this.$4_0 = $p0;
        return $p0;
    },
    
    $4_0: null,
    
    ensurePivotControl: function Srch_DataView$ensurePivotControl() {
        if (this.$2_0 || !this.getPivots()) {
            return;
        }
        var $v_0 = new ClientPivotControl();
        $v_0.PivotParentId = this.$4_0.get_getPivotId();
        this.$N_0($v_0);
    },
    
    getDefaultPivot: function Srch_DataView$getDefaultPivot() {
        var $v_0 = this.getPivots();
        if ($v_0 && $v_0.length > 0) {
            return $v_0[0][1];
        }
        return null;
    },
    
    buildNextDataSet: function Srch_DataView$buildNextDataSet($p0, $p1) {
        var $v_0 = new Srch.DataSet();
        var $v_1 = this.count();
        var $v_2 = $p0.$3_0;
        for (var $v_3 = $p1; $v_3 < $v_1 && $v_3 < $v_2; $v_3++) {
            $v_0.add($p0.get($v_3));
        }
        return $v_0;
    },
    
    $N_0: function Srch_DataView$$N_0($p0) {
        var $v_0 = this.getPivots();
        if ($v_0) {
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                var $v_2 = new ClientPivotControlMenuOption();
                $v_2.DisplayText = $v_0[$v_1][0];
                $v_2.Description = $v_0[$v_1][1];
                $v_2.SelectedOption = (!$v_1);
                $v_2.OnClickAction = 'Srch.AnalyticsRecommendation.doRecommend(\"' + this.$4_0.$1_0 + '\", \"' + this.$4_0.$6_0 + '\", \"' + $v_0[$v_1][1] + '\");';
                $p0.AddMenuOption($v_2);
            }
            this.$2_0 = $p0;
            this.$2_0.SurfacedPivotCount = $v_0.length;
            this.$2_0.Render();
        }
        else {
        }
    },
    
    updatePivot: function Srch_DataView$updatePivot($p0) {
        if (!this.$2_0) {
            return;
        }
        var $v_0 = this.$2_0.SurfacedOptions;
        for (var $v_1 = 0; $v_1 < this.$2_0.SurfacedPivotCount; $v_1++) {
            var $v_2 = $v_0[$v_1];
            $v_2.SelectedOption = ($v_2.Description === $p0);
        }
        this.$2_0.Render();
    }
}


Srch.DataView.registerClass('Srch.DataView');
Srch.HashTagDataView.registerClass('Srch.HashTagDataView', Srch.DataView);
Srch.AnalyticsRecommendation.registerClass('Srch.AnalyticsRecommendation');
Srch.DataSet.registerClass('Srch.DataSet');
Srch.BaseData.registerClass('Srch.BaseData');
Srch.HashTagData.registerClass('Srch.HashTagData', Srch.BaseData);
Srch.AnalyticsRecommendation.$F = [];
Srch.AnalyticsRecommendation.$K = 0;
Srch.AnalyticsRecommendation.strFollow = Srch.Res.ar_htv_Follow;
Srch.AnalyticsRecommendation.strStartFollowing = Srch.Res.ar_htv_StartFollowing;
Srch.AnalyticsRecommendation.strStopFollowing = Srch.Res.ar_htv_StopFollowing;
Srch.AnalyticsRecommendation.strNoResults = Srch.Res.ar_rec_NoResults;
Srch.AnalyticsRecommendation.strExplanation = Srch.Res.ar_Explanation;
Srch.AnalyticsRecommendation.strIsFollowed = Srch.Res.ar_htv_IsFollowed;
Srch.AnalyticsRecommendation.strIsNotFollowed = Srch.Res.ar_htv_IsNotFollowed;

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}

NotifyScriptLoadedAndExecuteWaitingJobs("search.analyticsrecommendation.js");
