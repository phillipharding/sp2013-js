function $_global_calloutusagecontrolscript() {
    ;
    SP.SOD.executeFunc('clienttemplates.js', 'SPClientTemplates.TemplateManager.RegisterTemplateOverrides', _calloutUsageControlStartup);
    if (typeof Sys != 'undefined' && Sys != null && Sys.Application != null)
        Sys.Application.notifyScriptLoaded();
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == 'function')
        NotifyScriptLoadedAndExecuteWaitingJobs("CalloutUsageControlScript.js");
}
function ULSv1j() {
    var o = new Object;

    o.ULSTeamName = "DLC Server";
    o.ULSFileName = "CalloutUsageControlScript.commentedjs";
    return o;
}
function _calloutUsageControlStartup() {
ULSv1j:
    ;
    var calloutUsageCtx = {};

    calloutUsageCtx.Templates = {};
    calloutUsageCtx.BaseViewID = 'Callout';
    calloutUsageCtx.Templates.OnPostRender = function(renderCtx) {
    ULSv1j:
        ;
        var calloutID = GetCalloutElementIDFromRenderCtx(renderCtx);

        SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function() {
        ULSv1j:
            ;
            SP.SOD.executeFunc('sp.search.apps.js', 'Microsoft.SharePoint.Client.Search.Analytics.UsageAnalytics', function() {
            ULSv1j:
                ;
                var ctx = new SP.ClientContext.get_current();
                var currentList = ((ctx.get_web()).get_lists()).getByTitle(renderCtx.ListTitle);
                var currentItem = currentList.getItemById(renderCtx.CurrentItem.ID);
                var ua = Microsoft.SharePoint.Client.Search.Analytics.UsageAnalytics.newObject(ctx, ctx.get_site());
                var itemAnalyticsData = ua.getAnalyticsItemData(1, currentItem);
                var failureCleanupFunc = Function.createDelegate(this, function(sender, e) {
                ULSv1j:
                    ;
                    var errorMessage = typeof e.get_message != 'undefined' && e.get_message != null ? e.get_message() : e.message;

                    SP.ULS.log('Failed to get view count for item at:' + renderCtx.CurrentItem.FileLeafRef + ' due to:' + errorMessage);
                });

                ctx.load(itemAnalyticsData);
                ctx.executeQueryAsync(Function.createDelegate(this, function(sender, e) {
                ULSv1j:
                    ;
                    var calloutViewCountValueEl = document.getElementById(calloutID + '-Usage');

                    if (typeof calloutViewCountValueEl != 'undefined' && calloutViewCountValueEl != null) {
                        try {
                            var totalHits = STSHtmlEncode(itemAnalyticsData.get_totalHits());

                            SP.SOD.executeFunc('strings.js', 'Strings.CMS', function() {
                            ULSv1j:
                                ;
                                if (parseInt(totalHits) > 10000) {
                                    calloutViewCountValueEl.innerHTML = String.format(SP.Utilities.LocUtility.getLocalizedCountValue(Strings.CMS.L_Callout_Usage_Count, Strings.CMS.L_Callout_Usage_CountIntervals, totalHits), Strings.CMS.L_Callout_Usage_Count_Max);
                                    calloutViewCountValueEl.removeAttribute('style');
                                }
                                else if (totalHits != '0') {
                                    calloutViewCountValueEl.innerHTML = String.format(SP.Utilities.LocUtility.getLocalizedCountValue(Strings.CMS.L_Callout_Usage_Count, Strings.CMS.L_Callout_Usage_CountIntervals, totalHits), totalHits);
                                    calloutViewCountValueEl.removeAttribute('style');
                                }
                            });
                        }
                        catch (ex) {
                            failureCleanupFunc(sender, ex);
                        }
                    }
                }), failureCleanupFunc);
            });
        });
    };
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(calloutUsageCtx);
}
$_global_calloutusagecontrolscript();
