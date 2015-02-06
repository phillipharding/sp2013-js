// JScript File


Type.registerNamespace('Microsoft.SharePoint.Portal');

Microsoft.SharePoint.Portal.MySiteRecommendations = function Microsoft_SharePoint_Portal_MySiteRecommendations() {
}
Microsoft.SharePoint.Portal.MySiteRecommendations.followItem = function Microsoft_SharePoint_Portal_MySiteRecommendations$followItem(context, uri, personalSiteUri, category) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{25bf791e-bd66-4ec7-9232-727cb4820e1a}', 'FollowItem', [ uri, personalSiteUri, category ]);
    context.addQuery($v_1);
    $v_0 = new SP.BooleanResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
Microsoft.SharePoint.Portal.MySiteRecommendations.stopFollowingItem = function Microsoft_SharePoint_Portal_MySiteRecommendations$stopFollowingItem(context, uri, personalSiteUri, category) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{25bf791e-bd66-4ec7-9232-727cb4820e1a}', 'StopFollowingItem', [ uri, personalSiteUri, category ]);
    context.addQuery($v_1);
    $v_0 = new SP.BooleanResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
Microsoft.SharePoint.Portal.MySiteRecommendations.fetchCacheBlob = function Microsoft_SharePoint_Portal_MySiteRecommendations$fetchCacheBlob(context, category, personalSiteUri, forceRefresh) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{25bf791e-bd66-4ec7-9232-727cb4820e1a}', 'FetchCacheBlob', [ category, personalSiteUri, forceRefresh ]);
    context.addQuery($v_1);
    $v_0 = new Microsoft.SharePoint.Portal.Project.MyRecsCacheBlob();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}


Type.registerNamespace('Microsoft.SharePoint.Portal.Project');

Microsoft.SharePoint.Portal.Project.MyRecsCategory = function() {}
Microsoft.SharePoint.Portal.Project.MyRecsCategory.prototype = {
    document: 0, 
    site: 1
}
Microsoft.SharePoint.Portal.Project.MyRecsCategory.registerEnum('Microsoft.SharePoint.Portal.Project.MyRecsCategory', false);


Microsoft.SharePoint.Portal.Project.MyRecsCacheBlob = function Microsoft_SharePoint_Portal_Project_MyRecsCacheBlob() {
    Microsoft.SharePoint.Portal.Project.MyRecsCacheBlob.initializeBase(this);
}
Microsoft.SharePoint.Portal.Project.MyRecsCacheBlob.prototype = {
    $1_1: null,
    $3_1: null,
    $4_1: null,
    $7_1: null,
    $8_1: null,
    $A_1: null,
    $B_1: null,
    
    get_dateCached: function Microsoft_SharePoint_Portal_Project_MyRecsCacheBlob$get_dateCached() {
        return this.$1_1;
    },
    set_dateCached: function Microsoft_SharePoint_Portal_Project_MyRecsCacheBlob$set_dateCached(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_fillInQuery: function Microsoft_SharePoint_Portal_Project_MyRecsCacheBlob$get_fillInQuery() {
        return this.$3_1;
    },
    set_fillInQuery: function Microsoft_SharePoint_Portal_Project_MyRecsCacheBlob$set_fillInQuery(value) {
        this.$3_1 = value;
        return value;
    },
    
    get_fillInSortBy: function Microsoft_SharePoint_Portal_Project_MyRecsCacheBlob$get_fillInSortBy() {
        return this.$4_1;
    },
    set_fillInSortBy: function Microsoft_SharePoint_Portal_Project_MyRecsCacheBlob$set_fillInSortBy(value) {
        this.$4_1 = value;
        return value;
    },
    
    get_query: function Microsoft_SharePoint_Portal_Project_MyRecsCacheBlob$get_query() {
        return this.$7_1;
    },
    set_query: function Microsoft_SharePoint_Portal_Project_MyRecsCacheBlob$set_query(value) {
        this.$7_1 = value;
        return value;
    },
    
    get_queryInfo: function Microsoft_SharePoint_Portal_Project_MyRecsCacheBlob$get_queryInfo() {
        return this.$8_1;
    },
    set_queryInfo: function Microsoft_SharePoint_Portal_Project_MyRecsCacheBlob$set_queryInfo(value) {
        this.$8_1 = value;
        return value;
    },
    
    get_result: function Microsoft_SharePoint_Portal_Project_MyRecsCacheBlob$get_result() {
        return this.$A_1;
    },
    set_result: function Microsoft_SharePoint_Portal_Project_MyRecsCacheBlob$set_result(value) {
        this.$A_1 = value;
        return value;
    },
    
    get_sortBy: function Microsoft_SharePoint_Portal_Project_MyRecsCacheBlob$get_sortBy() {
        return this.$B_1;
    },
    set_sortBy: function Microsoft_SharePoint_Portal_Project_MyRecsCacheBlob$set_sortBy(value) {
        this.$B_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Portal_Project_MyRecsCacheBlob$get_typeId() {
        return '{29f2be9d-493f-433f-9f2e-adbcb814fd36}';
    },
    
    writeToXml: function Microsoft_SharePoint_Portal_Project_MyRecsCacheBlob$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'DateCached', 'FillInQuery', 'FillInSortBy', 'Query', 'QueryInfo', 'Result', 'SortBy' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Portal_Project_MyRecsCacheBlob$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.DateCached;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.DateCached;
        }
        $v_0 = parentNode.FillInQuery;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ($v_0);
            delete parentNode.FillInQuery;
        }
        $v_0 = parentNode.FillInSortBy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4_1 = ($v_0);
            delete parentNode.FillInSortBy;
        }
        $v_0 = parentNode.Query;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$7_1 = ($v_0);
            delete parentNode.Query;
        }
        $v_0 = parentNode.QueryInfo;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$8_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.QueryInfo;
        }
        $v_0 = parentNode.Result;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$A_1 = ($v_0);
            delete parentNode.Result;
        }
        $v_0 = parentNode.SortBy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$B_1 = ($v_0);
            delete parentNode.SortBy;
        }
    }
}


Microsoft.SharePoint.Portal.Project.MyRecsQueryInfo = function Microsoft_SharePoint_Portal_Project_MyRecsQueryInfo() {
    Microsoft.SharePoint.Portal.Project.MyRecsQueryInfo.initializeBase(this);
}
Microsoft.SharePoint.Portal.Project.MyRecsQueryInfo.prototype = {
    $0_1: 0,
    $2_1: null,
    $5_1: null,
    $6_1: null,
    $9_1: false,
    $C_1: null,
    
    get_category: function Microsoft_SharePoint_Portal_Project_MyRecsQueryInfo$get_category() {
        return this.$0_1;
    },
    set_category: function Microsoft_SharePoint_Portal_Project_MyRecsQueryInfo$set_category(value) {
        this.$0_1 = value;
        return value;
    },
    
    get_expertiseTags: function Microsoft_SharePoint_Portal_Project_MyRecsQueryInfo$get_expertiseTags() {
        return this.$2_1;
    },
    set_expertiseTags: function Microsoft_SharePoint_Portal_Project_MyRecsQueryInfo$set_expertiseTags(value) {
        this.$2_1 = value;
        return value;
    },
    
    get_followedUrls: function Microsoft_SharePoint_Portal_Project_MyRecsQueryInfo$get_followedUrls() {
        return this.$5_1;
    },
    set_followedUrls: function Microsoft_SharePoint_Portal_Project_MyRecsQueryInfo$set_followedUrls(value) {
        this.$5_1 = value;
        return value;
    },
    
    get_interestTags: function Microsoft_SharePoint_Portal_Project_MyRecsQueryInfo$get_interestTags() {
        return this.$6_1;
    },
    set_interestTags: function Microsoft_SharePoint_Portal_Project_MyRecsQueryInfo$set_interestTags(value) {
        this.$6_1 = value;
        return value;
    },
    
    get_queryInfoExists: function Microsoft_SharePoint_Portal_Project_MyRecsQueryInfo$get_queryInfoExists() {
        return this.$9_1;
    },
    set_queryInfoExists: function Microsoft_SharePoint_Portal_Project_MyRecsQueryInfo$set_queryInfoExists(value) {
        this.$9_1 = value;
        return value;
    },
    
    get_suggestedTags: function Microsoft_SharePoint_Portal_Project_MyRecsQueryInfo$get_suggestedTags() {
        return this.$C_1;
    },
    set_suggestedTags: function Microsoft_SharePoint_Portal_Project_MyRecsQueryInfo$set_suggestedTags(value) {
        this.$C_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Portal_Project_MyRecsQueryInfo$get_typeId() {
        return '{51ed498a-b66b-490d-bd39-2c9413261d4a}';
    },
    
    writeToXml: function Microsoft_SharePoint_Portal_Project_MyRecsQueryInfo$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Category', 'ExpertiseTags', 'FollowedUrls', 'InterestTags', 'QueryInfoExists', 'SuggestedTags' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Portal_Project_MyRecsQueryInfo$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Category;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Category;
        }
        $v_0 = parentNode.ExpertiseTags;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.ExpertiseTags;
        }
        $v_0 = parentNode.FollowedUrls;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.FollowedUrls;
        }
        $v_0 = parentNode.InterestTags;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.InterestTags;
        }
        $v_0 = parentNode.QueryInfoExists;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$9_1 = ($v_0);
            delete parentNode.QueryInfoExists;
        }
        $v_0 = parentNode.SuggestedTags;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$C_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.SuggestedTags;
        }
    }
}


Microsoft.SharePoint.Portal.MySiteRecommendations.registerClass('Microsoft.SharePoint.Portal.MySiteRecommendations');
Microsoft.SharePoint.Portal.Project.MyRecsCacheBlob.registerClass('Microsoft.SharePoint.Portal.Project.MyRecsCacheBlob', SP.ClientValueObject);
Microsoft.SharePoint.Portal.Project.MyRecsQueryInfo.registerClass('Microsoft.SharePoint.Portal.Project.MyRecsQueryInfo', SP.ClientValueObject);
function sp_ui_mysiterecommendations_initialize() {
};
sp_ui_mysiterecommendations_initialize();

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}

NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.MySiteRecommendations.js");
