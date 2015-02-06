
Type.registerNamespace('Microsoft.Office.Server.ReputationModel');

Microsoft.Office.Server.ReputationModel.Reputation = function Microsoft_Office_Server_ReputationModel_Reputation() {
}
Microsoft.Office.Server.ReputationModel.Reputation.setLike = function Microsoft_Office_Server_ReputationModel_Reputation$setLike(context, listID, itemID, like) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{d9c758a9-d32d-4c9c-ab60-46fd8b3c79b7}', 'SetLike', [ listID, itemID, like ]);
    context.addQuery($v_1);
    $v_0 = new SP.IntResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
Microsoft.Office.Server.ReputationModel.Reputation.setRating = function Microsoft_Office_Server_ReputationModel_Reputation$setRating(context, listID, itemID, rating) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{d9c758a9-d32d-4c9c-ab60-46fd8b3c79b7}', 'SetRating', [ listID, itemID, rating ]);
    context.addQuery($v_1);
    $v_0 = new SP.DoubleResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}


Type.registerNamespace('Microsoft.SharePoint.Portal');

Microsoft.SharePoint.Portal.CommunityModeration = function Microsoft_SharePoint_Portal_CommunityModeration() {
}
Microsoft.SharePoint.Portal.CommunityModeration.reportAbuse = function Microsoft_SharePoint_Portal_CommunityModeration$reportAbuse(context, listID, itemID, comment) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{2007e496-db6f-4808-a8bf-9eb98eb6d0f3}', 'ReportAbuse', [ listID, itemID, comment ]);
    context.addQuery($v_1);
    $v_0 = new SP.IntResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
Microsoft.SharePoint.Portal.CommunityModeration.approveReportedItems = function Microsoft_SharePoint_Portal_CommunityModeration$approveReportedItems(context, listID, itemIDs) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{2007e496-db6f-4808-a8bf-9eb98eb6d0f3}', 'ApproveReportedItems', [ listID, itemIDs ]);
    context.addQuery($v_0);
}


Microsoft.SharePoint.Portal.ReputationClient = function Microsoft_SharePoint_Portal_ReputationClient() {
}
Microsoft.SharePoint.Portal.ReputationClient.setLike = function Microsoft_SharePoint_Portal_ReputationClient$setLike(listID, itemID, like, onSuccess, onFail) {
    var $v_0 = new SP.ClientContext();
    Microsoft.Office.Server.ReputationModel.Reputation.setLike($v_0, listID, itemID, like);
    $v_0.executeQueryAsync(onSuccess, onFail);
}
Microsoft.SharePoint.Portal.ReputationClient.setRating = function Microsoft_SharePoint_Portal_ReputationClient$setRating(listID, itemID, rating, onSuccess, onFail) {
    var $v_0 = new SP.ClientContext();
    Microsoft.Office.Server.ReputationModel.Reputation.setRating($v_0, listID, itemID, rating);
    $v_0.executeQueryAsync(onSuccess, onFail);
}


Microsoft.SharePoint.Portal.CommunityModerationClient = function Microsoft_SharePoint_Portal_CommunityModerationClient() {
}
Microsoft.SharePoint.Portal.CommunityModerationClient.reportAbuse = function Microsoft_SharePoint_Portal_CommunityModerationClient$reportAbuse(listID, itemID, comment, onSuccess, onFail) {
    var $v_0 = new SP.ClientContext();
    Microsoft.SharePoint.Portal.CommunityModeration.reportAbuse($v_0, listID, itemID, comment);
    $v_0.executeQueryAsync(onSuccess, onFail);
}
Microsoft.SharePoint.Portal.CommunityModerationClient.approveReportedItems = function Microsoft_SharePoint_Portal_CommunityModerationClient$approveReportedItems(listID, itemIDs, onSuccess, onFail) {
    var $v_0 = new SP.ClientContext();
    Microsoft.SharePoint.Portal.CommunityModeration.approveReportedItems($v_0, listID, itemIDs);
    $v_0.executeQueryAsync(onSuccess, onFail);
}


Microsoft.Office.Server.ReputationModel.Reputation.registerClass('Microsoft.Office.Server.ReputationModel.Reputation');
Microsoft.SharePoint.Portal.CommunityModeration.registerClass('Microsoft.SharePoint.Portal.CommunityModeration');
Microsoft.SharePoint.Portal.ReputationClient.registerClass('Microsoft.SharePoint.Portal.ReputationClient');
Microsoft.SharePoint.Portal.CommunityModerationClient.registerClass('Microsoft.SharePoint.Portal.CommunityModerationClient');
function reputation_initialize() {
};
reputation_initialize();

RegisterModuleInit("reputation.js", reputation_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("reputation.js");
