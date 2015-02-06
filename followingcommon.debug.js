function $_global_followingcommon() {
    (function() {
        window.SetFollowStatus = function(sUrl, bFollow, bIsDoc, successCallback, failureCallback) {
            SP.SOD.executeFunc('userprofile', 'SP.UserProfiles.ProfileLoader', function() {
                var ctxCurrent = SP.ClientContext.get_current();
                var profile = (SP.UserProfiles.ProfileLoader.getProfileLoader(ctxCurrent)).getUserProfile();
                var fc = profile.get_followedContent();
                var followResult;

                if (bFollow) {
                    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                        CUI.PMetrics.perfMark(CUI.PMarker.perfSPFollowContentBegin);
                    followResult = fc.follow(sUrl, null);
                }
                else {
                    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                        CUI.PMetrics.perfMark(CUI.PMarker.perfSPStopFollowContentBegin);
                    fc.stopFollowing(sUrl);
                }
                ctxCurrent.executeQueryAsync(function() {
                    if (bFollow) {
                        if (m$.isDefinedAndNotNull(followResult)) {
                            var resultType = followResult.get_resultType();

                            if (resultType === SP.UserProfiles.FollowResultType.followed || resultType === SP.UserProfiles.FollowResultType.refollowed) {
                                var followedItem = followResult.get_item();
                                var ico = followedItem.get_iconUrl();
                                var title = followedItem.get_title();

                                if (bIsDoc === true) {
                                    if (ico === null) {
                                        ico = SP.Utilities.Utility.getImageUrl('lg_icgen.gif');
                                    }
                                    if (resultType === SP.UserProfiles.FollowResultType.followed) {
                                        addDocumentFollowNotification(title, '', ico);
                                    }
                                    else {
                                        addAlreadyFollowingDocumentNotification(title, '', ico);
                                    }
                                    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                                        CUI.PMetrics.perfMark(CUI.PMarker.perfSPFollowDocEnd);
                                }
                                else {
                                    if (ico == null) {
                                        ico = "/_layouts/15/images/siteicon.png?rev=23";
                                    }
                                    if (resultType == SP.UserProfiles.FollowResultType.followed) {
                                        addSiteFollowNotification(title, '', ico, null, function() {
                                            NavigateToFollowedList(true);
                                        });
                                    }
                                    else {
                                        addAlreadyFollowingSiteNotification(title, '', ico, null, function() {
                                            NavigateToFollowedList(true);
                                        });
                                    }
                                    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                                        CUI.PMetrics.perfMark(CUI.PMarker.perfSPFollowSiteEnd);
                                }
                                if (m$.isDefinedAndNotNull(successCallback))
                                    successCallback();
                            }
                            else if (resultType === SP.UserProfiles.FollowResultType.hitFollowLimit) {
                                var dialogText, dialogTitle, okButtonText, okCallback = null;

                                if (bIsDoc) {
                                    dialogText = Strings.STS.L_DocumentsFollowLimitReachedDialog_Text;
                                    dialogTitle = Strings.STS.L_FollowLimitReachedDialog_Title;
                                    okButtonText = Strings.STS.L_DocumentsFollowLimitReachedDialog_Button;
                                    okCallback = function() {
                                        NavigateToFollowedList();
                                    };
                                }
                                else {
                                    dialogText = Strings.STS.L_SitesFollowLimitReachedDialog_Text;
                                    dialogTitle = Strings.STS.L_FollowLimitReachedDialog_Title;
                                    okButtonText = Strings.STS.L_SitesFollowLimitReachedDialog_Button;
                                    okCallback = function() {
                                        NavigateToFollowedList(true);
                                    };
                                }
                                DisplayFollowResultDialog(dialogText, dialogTitle, okButtonText, okCallback);
                                if (m$.isDefinedAndNotNull(failureCallback))
                                    failureCallback();
                            }
                            else {
                                DisplayGenericErrorDialog(bIsDoc, Strings.STS.L_FollowingException_FollowFailed);
                                if (m$.isDefinedAndNotNull(failureCallback))
                                    failureCallback();
                            }
                        }
                        else if (m$.isDefinedAndNotNull(failureCallback))
                            failureCallback();
                    }
                    else {
                        if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                            CUI.PMetrics.perfMark(CUI.PMarker.perfSPStopFollowContentEnd);
                        if (m$.isDefinedAndNotNull(successCallback))
                            successCallback();
                    }
                }, function(sender, err) {
                    var errorCode = err.get_errorCode();
                    var dialogText, dialogTitle = "";

                    if (errorCode == SP.UserProfiles.SocialDataStoreExceptionCode.cannotCreatePersonalSite || errorCode == SP.UserProfiles.SocialDataStoreExceptionCode.noSocialFeatures) {
                        dialogText = Strings.STS.L_FollowingCannotCreatePersonalSiteError_Text;
                        dialogTitle = Strings.STS.L_FollowingCannotCreatePersonalSiteError_Title;
                        SP.SOD.executeFunc('SP.UI.MySiteCommon.js', 'SP.UI.MySiteCommon.MySiteDialog', function() {
                            var errorDialog = new SP.UI.MySiteCommon.MySiteDialog(dialogTitle, dialogText);

                            errorDialog.set_hideOkButton(true);
                            errorDialog.set_cancelButtonText(Strings.STS.L_CloseButtonCaption);
                            errorDialog.show();
                        });
                    }
                    else if (errorCode == SP.UserProfiles.SocialDataStoreExceptionCode.personalSiteNotFound) {
                        dialogText = Strings.STS.L_FollowingPersonalSiteNotFoundError_Text;
                        dialogTitle = Strings.STS.L_FollowingPersonalSiteNotFoundError_Title;
                        var okButtonText = Strings.STS.L_FollowingPersonalSiteNotFoundError_ButtonText;

                        DisplayFollowResultDialog(dialogText, dialogTitle, okButtonText, function() {
                            ctxCurrent.load(profile, 'UrlToCreatePersonalSite');
                            ctxCurrent.executeQueryAsync(function() {
                                window.location.href = profile.get_urlToCreatePersonalSite();
                            });
                        });
                    }
                    else {
                        var msg = err.get_message();

                        DisplayGenericErrorDialog(bIsDoc, msg);
                    }
                    if (m$.isDefinedAndNotNull(failureCallback))
                        failureCallback();
                });
            });
        };
        var DisplayGenericErrorDialog = function(bIsDoc, sErrorMsg) {
            var sDialogTitle = Strings.STS.L_FollowingGenericError_Title;
            var sDialogText = bIsDoc ? Strings.STS.L_FollowingGenericError_Document_Text : Strings.STS.L_FollowingGenericError_Site_Text;

            SP.SOD.executeFunc('SP.UI.MySiteCommon.js', 'SP.UI.MySiteCommon.MySiteDialog', function() {
                var genericErrorDialog = new SP.UI.MySiteCommon.MySiteDialog(sDialogTitle, sDialogText);

                genericErrorDialog.set_errorMessage(sErrorMsg);
                genericErrorDialog.set_okButtonText(Strings.STS.L_CloseButtonCaption);
                genericErrorDialog.set_hideCancelButton(true);
                genericErrorDialog.show();
            });
        };
        var DisplayFollowResultDialog = function(dialogText, dialogTitle, okButtonText, okCallback) {
            SP.SOD.executeFunc('SP.UI.MySiteCommon.js', 'SP.UI.MySiteCommon.MySiteDialog', function() {
                var followResultDialog = new SP.UI.MySiteCommon.MySiteDialog(dialogTitle, dialogText);

                followResultDialog.set_okButtonText(okButtonText);
                followResultDialog.set_okButtonCallback(okCallback);
                followResultDialog.show();
            });
        };
        var DisplayFollowDialog = function(followedItemName, content, callback) {
            SP.SOD.executeFunc('SP.UI.MySiteCommon.js', 'SP.UI.MySiteCommon.MySiteDialog', function() {
                var sDialogTitle = String.format(Strings.STS.L_DialogFollowAction_Title, followedItemName);
                var sDialogText = content;
                var followDialog = new SP.UI.MySiteCommon.MySiteDialog(sDialogTitle, sDialogText);

                followDialog.set_okButtonText(Strings.STS.L_DialogFollowButton_Text);
                followDialog.set_okButtonCallback(callback);
                followDialog.show();
            });
        };

        window.FollowSiteFromEmail = function(siteName) {
            DisplayFollowDialog(siteName, Strings.STS.L_DialogFollowSiteAction_Content, function() {
                FollowSite();
            });
        };
        window.FollowDocumentFromEmail = function(itemId, listId, docname) {
            DisplayFollowDialog(docname, Strings.STS.L_DialogFollowDocAction_Content, function() {
                FollowDoc(listId, itemId);
            });
        };
        window.FollowSelectedDocument = function(renderCtx) {
            var listId, itemId = null;

            if (m$.isDefinedAndNotNull(renderCtx)) {
                var listItem = renderCtx.CurrentItem;

                if (m$.isUndefinedOrNull(listItem) || m$.isUndefinedOrNull(listItem.ID)) {
                    throw "Error: listItem is missing properties";
                }
                listId = renderCtx.listName;
                itemId = listItem.ID;
            }
            else {
                var sel = SP.ListOperation.Selection.getSelectedItems();

                if (sel.length == 1) {
                    listId = SP.ListOperation.Selection.getSelectedList();
                    itemId = sel[0].id;
                }
            }
            if (m$.isDefinedAndNotNull(listId) && m$.isDefinedAndNotNull(itemId)) {
                FollowDoc(listId, itemId);
            }
        };
        window.FollowDoc = function(listId, itemId) {
            var ctxCurrent = SP.ClientContext.get_current();
            var url = ctxCurrent.get_url();
            var docUrl = window.location.protocol + "//" + window.location.host + url + "?listId=" + listId + "&itemId=" + itemId;

            SetFollowStatus(docUrl, true, true);
        };
        window.FollowSite = function() {
            var ctxCurrent = SP.ClientContext.get_current();
            var url = ctxCurrent.get_url();

            url = window.location.protocol + '//' + window.location.host + url;
            SetFollowStatus(url, true, false);
        };
        window.NavigateToFollowedList = function(bSite) {
            bSite = Boolean(bSite);
            SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
                SP.SOD.executeFunc('userprofile', 'SP.UserProfiles.ProfileLoader', function() {
                    var clientCtx = SP.ClientContext.get_current();
                    var profile = (SP.UserProfiles.ProfileLoader.getProfileLoader(clientCtx)).getUserProfile();
                    var fc = profile.get_followedContent();

                    clientCtx.load(fc, bSite ? 'FollowedSitesUrl' : 'FollowedDocumentsUrl');
                    clientCtx.executeQueryAsync(function() {
                        if (bSite) {
                            window.location.href = fc.get_followedSitesUrl();
                        }
                        else {
                            window.location.href = fc.get_followedDocumentsUrl();
                        }
                    });
                });
            });
        };
        window.addFollowNotification = function(title, txt, img, sip, onclickHandler, bNoAnimate) {
            var extraData = new SPStatusNotificationData(STSHtmlEncode(txt), Strings.STS.L_FollowNotificationText, img, sip);

            return addNotificationHelper(title, extraData, onclickHandler, bNoAnimate);
        };
        window.addPeopleFollowNotification = function(title, txt, img, sip, onclickHandler, bNoAnimate) {
            var extraData = new SPStatusNotificationData(STSHtmlEncode(txt), Strings.STS.L_FollowNotificationText_Person, img, sip);

            return addNotificationHelper(title, extraData, onclickHandler, bNoAnimate);
        };
        window.addDocumentFollowNotification = function(title, txt, img, sip, onclickHandler, bNoAnimate) {
            var extraData = new SPStatusNotificationData(STSHtmlEncode(txt), Strings.STS.L_FollowNotificationText_Document, img, sip);

            return addNotificationHelper(title, extraData, onclickHandler, bNoAnimate);
        };
        window.addSiteFollowNotification = function(title, txt, img, sip, onclickHandler, bNoAnimate) {
            var extraData = new SPStatusNotificationData(STSHtmlEncode(txt), Strings.STS.L_FollowNotificationText_Site, img, sip);

            return addNotificationHelper(title, extraData, onclickHandler, bNoAnimate);
        };
        window.addAlreadyFollowingDocumentNotification = function(title, txt, img, sip, onclickHandler, bNoAnimate) {
            var extraData = new SPStatusNotificationData(STSHtmlEncode(txt), Strings.STS.L_AlreadyFollowingNotificationText_Document, img, sip);

            return addNotificationHelper(title, extraData, onclickHandler, bNoAnimate);
        };
        window.addAlreadyFollowingSiteNotification = function(title, txt, img, sip, onclickHandler, bNoAnimate) {
            var extraData = new SPStatusNotificationData(STSHtmlEncode(txt), Strings.STS.L_AlreadyFollowingNotificationText_Site, img, sip);

            return addNotificationHelper(title, extraData, onclickHandler, bNoAnimate);
        };
        var addNotificationHelper = function(title, data, onclickHandler, bNoAnimate) {
            var onClick;

            if (onclickHandler != null) {
                onClick = onclickHandler;
            }
            else {
                onClick = function() {
                    NavigateToFollowedList();
                };
            }
            var objNoti = new SP.UI.Notify.Notification(SPNotifications.ContainerID.Status, STSHtmlEncode(title), false, null, onClick, data);

            objNoti.Show(bNoAnimate);
            return objNoti.id;
        };
    })();
    if (m$.isDefinedAndNotNull(Sys) && m$.isDefinedAndNotNull(Sys.Application))
        Sys.Application.notifyScriptLoaded();
    if (m$.isFunction(NotifyScriptLoadedAndExecuteWaitingJobs))
        NotifyScriptLoadedAndExecuteWaitingJobs("followingcommon.js");
}
$_global_followingcommon();
