function $_global_mylinks() {
    (function() {
        RenderMySiteLinksFromServer = function(allDocumentsLinkControlId, allSitesLinkControlId) {
            function CacheAndProcessMySiteLinks(callBackToCacheAndProcessData, allDocumentsLink, allSitesLink, allDocumentsLinkTarget, allSitesLinkTarget) {
                var mySiteLinks = {};

                mySiteLinks.AllDocumentsLink = allDocumentsLink;
                mySiteLinks.AllSitesLink = allSitesLink;
                mySiteLinks.AllDocumentsLinkTarget = allDocumentsLinkTarget;
                mySiteLinks.AllSitesLinkTarget = allSitesLinkTarget;
                callBackToCacheAndProcessData(JSON.stringify(mySiteLinks));
            }
            function RetrieveMySiteLinks(callBackToCacheAndProcessData) {
                SP.SOD.loadMultiple(["SP.js", "SP.UI.MySiteNavigation.js"], function() {
                    var context = SP.ClientContext.get_current();
                    var mySiteLinks = SP.UI.MySiteLinks.getMySiteLinks(context);

                    if (SP.UI.MySiteLinksPropertyNames.allDocumentsLinkTarget === undefined) {
                        context.load(mySiteLinks, SP.UI.MySiteLinksPropertyNames.allDocumentsLink, SP.UI.MySiteLinksPropertyNames.allSitesLink);
                    }
                    else {
                        context.load(mySiteLinks, SP.UI.MySiteLinksPropertyNames.allDocumentsLink, SP.UI.MySiteLinksPropertyNames.allSitesLink, SP.UI.MySiteLinksPropertyNames.allDocumentsLinkTarget, SP.UI.MySiteLinksPropertyNames.allSitesLinkTarget);
                    }
                    var onGetMySiteLinksSucceeded = function(sender, args) {
                        var allDocumentsLink = null;
                        var allSitesLink = null;
                        var allDocumentsLinkTarget = null;
                        var allSitesLinkTarget = null;

                        if (mySiteLinks != null) {
                            allDocumentsLink = mySiteLinks.get_allDocumentsLink();
                            allSitesLink = mySiteLinks.get_allSitesLink();
                            if (Boolean(SP.UI.MySiteLinks.prototype.get_allDocumentsLinkTarget)) {
                                allDocumentsLinkTarget = mySiteLinks.get_allDocumentsLinkTarget();
                                allSitesLinkTarget = mySiteLinks.get_allSitesLinkTarget();
                            }
                            else {
                                allDocumentsLinkTarget = null;
                                allSitesLinkTarget = null;
                            }
                        }
                        CacheAndProcessMySiteLinks(callBackToCacheAndProcessData, allDocumentsLink, allSitesLink, allDocumentsLinkTarget, allSitesLinkTarget);
                    };
                    var onGetMySiteLinksFailed = function(sender, args) {
                        CacheAndProcessMySiteLinks(callBackToCacheAndProcessData, null, null, null, null);
                    };

                    context.executeQueryAsync(onGetMySiteLinksSucceeded, onGetMySiteLinksFailed);
                });
            }
            function ReplaceMySiteLink(controlId, newUrl, newTarget) {
                if (newUrl != null && controlId != null) {
                    var control = document.getElementById(controlId);

                    if (control != null && typeof control.href == "string") {
                        control.href = newUrl;
                        if (typeof control.target == "string" && Boolean(newTarget)) {
                            control.target = newTarget;
                        }
                    }
                }
            }
            function UpdateMySiteLinks(data) {
                var mySiteLinks = {};

                if (data != null) {
                    mySiteLinks = JSON.parse(data);
                }
                ReplaceMySiteLink(allDocumentsLinkControlId, mySiteLinks.AllDocumentsLink, mySiteLinks.AllDocumentsLinkTarget);
                ReplaceMySiteLink(allSitesLinkControlId, mySiteLinks.AllSitesLink, mySiteLinks.AllSitesLinkTarget);
            }
            SP.SOD.executeFunc("core.js", "GetSuiteLinks", function() {
                GetSuiteLinks(RetrieveMySiteLinks, UpdateMySiteLinks);
            });
        };
        notifyScriptsLoadedAndExecuteWaitingJobs("mylinks.js");
    })();
}
var RenderMySiteLinksFromServer;

$_global_mylinks();
