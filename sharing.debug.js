function $_global_sharing() {
    (function() {
    ULSoNk:
        ;
        var SharingMarkupOptions = function() {
        };

        SharingMarkupOptions.prototype = {
            showSharingHintImages: false,
            showSharedWithNoneLink: false,
            appendCountToSharedWithListUserLinkId: false,
            appendCountToSharedWithMoreLinkId: false,
            sharedWithListDivId: '',
            sharedWithListDivClass: '',
            sharedWithListImageId: '',
            sharedWithListImageClass: '',
            sharedWithListInnerSpanId: '',
            sharedWithListInnerSpanClass: '',
            sharedWithListUserLinkId: '',
            sharedWithListUserLinkClass: '',
            sharedWithNoneLinkId: '',
            sharedWithNoneLinkClass: '',
            sharedWithMoreLinkId: '',
            sharedWithMoreLinkClass: '',
            sharedWithManyLinkId: '',
            sharedWithManyLinkClass: '',
            guestLinkDivId: '',
            guestLinkDivClass: '',
            guestLinkImageId: '',
            guestLinkImageClass: '',
            guestLinkInnerSpanId: '',
            guestLinkInnerSpanClass: '',
            guestLinkId: '',
            guestLinkClass: '',
            guestLinkOnClickCallback: ''
        };
        function GenerateSharingMarkupOptions(useSharingDialogMarkup, callout) {
            var markupOptions = new SharingMarkupOptions();

            if (useSharingDialogMarkup) {
                markupOptions.showSharingHintImages = true;
                markupOptions.showSharedWithNoneLink = true;
                markupOptions.appendCountToSharedWithListUserLinkId = true;
                markupOptions.appendCountToSharedWithMoreLinkId = true;
                markupOptions.sharedWithListDivClass = 'ms-core-form-line ms-textSmall';
                markupOptions.sharedWithListImageId = 'js-sharingdlg-imageUserAccess';
                markupOptions.sharedWithListImageClass = 'ms-verticalAlignTop';
                markupOptions.sharedWithListInnerSpanId = 'js-sharingdlg-labelUserAccess';
                markupOptions.sharedWithListInnerSpanClass = 'ms-aclinv-label ms-verticalAlignTop ms-soften';
                markupOptions.sharedWithListUserLinkId = 'js-sharingdlg-user';
                markupOptions.sharedWithNoneLinkId = 'js-sharingdlg-notshared';
                markupOptions.sharedWithNoneLinkClass = 'js-sharingdlg-sharedWithLink';
                markupOptions.sharedWithMoreLinkId = 'js-sharingdlg-nmore-';
                markupOptions.sharedWithMoreLinkClass = 'js-sharingdlg-sharedWithLink';
                markupOptions.sharedWithManyLinkId = 'js-sharingdlg-lotspeople';
                markupOptions.sharedWithManyLinkClass = 'js-sharingdlg-sharedWithLink';
                markupOptions.guestLinkDivId = 'js-sharingdlg-guestLinkDiv';
                markupOptions.guestLinkDivClass = 'ms-core-form-line ms-textSmall';
                markupOptions.guestLinkImageId = 'js-sharingdlg-imageGuestLink';
                markupOptions.guestLinkImageClass = 'ms-verticalAlignTop';
                markupOptions.guestLinkInnerSpanId = 'js-sharingdlg-labelGuestLink';
                markupOptions.guestLinkInnerSpanClass = 'ms-aclinv-label ms-verticalAlignTop ms-soften';
                markupOptions.guestLinkId = 'js-sharingdlg-guestLink';
                markupOptions.guestLinkClass = 'js-sharingdlg-guestLink';
                markupOptions.guestLinkOnClickCallback = 'ManageLink();';
            }
            else {
                var calloutID = '';

                if (m$.isDefinedAndNotNull(callout)) {
                    calloutID = GetCalloutElementIDFromCallout(callout);
                }
                markupOptions.sharedWithListDivClass = 'js-callout-sharedWithList';
                markupOptions.sharedWithListUserLinkClass = 'js-callout-sharedWithDisplayNameLink';
                markupOptions.showSharedWithNoneLink = true;
                markupOptions.sharedWithNoneLinkId = calloutID + 'js-callout-notshared';
                markupOptions.sharedWithNoneLinkClass = 'js-callout-sharedWithLink';
                markupOptions.sharedWithMoreLinkId = calloutID + 'SharedWithLink';
                markupOptions.sharedWithMoreLinkClass = 'js-callout-sharedWithLink';
                markupOptions.sharedWithManyLinkId = calloutID + 'SharedWithLink';
                markupOptions.sharedWithManyLinkClass = 'js-callout-sharedWithLink';
                markupOptions.guestLinkDivClass = 'js-callout-sharedWithManageLinks';
                markupOptions.guestLinkId = calloutID + 'GuestLink';
                markupOptions.guestLinkClass = 'js-callout-sharedWithGuestLink';
            }
            return markupOptions;
        }
        function AttrQuoteIfNotEmpty(attrName, attrValue) {
            var ret = '';

            if (m$.isDefinedAndNotNull(attrValue) && attrValue.length > 0) {
                ret = ' ' + attrName + '=' + StAttrQuote(attrValue) + ' ';
            }
            return ret;
        }
        GetSharingStatusHtml = function(sharedWithUsers, isSharedWithMany, isSharedWithSecurityGroup, isSharedWithGuest, useSharingDialogMarkup, userDispUrl, itemTitle, viewCtx, callout) {
            var markupOptions = GenerateSharingMarkupOptions(useSharingDialogMarkup, callout);
            var ret = [];
            var sharingHintImageClass = '';

            if (sharedWithUsers.length === 0 && !isSharedWithSecurityGroup && !isSharedWithMany) {
                if (!isSharedWithGuest) {
                    var sharedWithNoneLinkOpenTagHtml = '';
                    var sharedWithNoneLinkCloseTagHtml = '';

                    if (markupOptions.showSharedWithNoneLink) {
                        sharedWithNoneLinkOpenTagHtml = '<a href="#" onclick="return false;"' + AttrQuoteIfNotEmpty('id', markupOptions.sharedWithNoneLinkId) + AttrQuoteIfNotEmpty('class', markupOptions.sharedWithNoneLinkClass) + '>';
                        sharedWithNoneLinkCloseTagHtml = '</a>';
                    }
                    ret.push(sharedWithNoneLinkOpenTagHtml, Strings.STS.L_SharedWithNone, sharedWithNoneLinkCloseTagHtml);
                    sharingHintImageClass = 'js-sharingHint-unshared';
                }
            }
            else {
                sharingHintImageClass = 'js-sharingHint-sharedDefault';
                var linkTooltip = '';

                if (isDefinedAndNotNullOrEmpty(itemTitle)) {
                    linkTooltip = StBuildParam(Strings.STS.L_SharedWithTooltip, itemTitle);
                }
                if (isSharedWithSecurityGroup || isSharedWithMany) {
                    var sharedWithManyLinkOpenTagHtml = '<a href="#" onclick="return false;"' + AttrQuoteIfNotEmpty('id', markupOptions.sharedWithManyLinkId) + AttrQuoteIfNotEmpty('title', linkTooltip) + AttrQuoteIfNotEmpty('class', markupOptions.sharedWithManyLinkClass) + '>';
                    var sharedWithManyLinkCloseTagHtml = '</a>';

                    ret.push(StBuildParam(STSHtmlEncode(Strings.STS.L_SharedWithMany), sharedWithManyLinkOpenTagHtml, sharedWithManyLinkCloseTagHtml));
                }
                else {
                    var renderOptions = {
                        HasUserLink: true,
                        DefaultRender: true,
                        AllowMultipleValues: true,
                        InlineRender: true,
                        InlineRenderMoreAsLink: true
                    };
                    var schemaData = {
                        EffectivePresenceEnabled: "1",
                        PresenceAlt: Strings.STS.L_UserFieldNoUserPresenceAlt,
                        UserDispUrl: userDispUrl
                    };
                    var sharedWithUsersReversed = [];
                    var sharedWithUsersCount = sharedWithUsers.length;

                    for (var i = 0; i < sharedWithUsersCount; i++) {
                        sharedWithUsersReversed.unshift(sharedWithUsers[i]);
                    }
                    var sharedWithListTempDiv = document.createElement("div");
                    var userFieldRenderer = new UserFieldRenderer("SharedWith");

                    sharedWithListTempDiv.innerHTML = userFieldRenderer.RenderField(viewCtx, renderOptions, {
                        SharedWith: sharedWithUsersReversed
                    }, schemaData);
                    var userCount = 0;
                    var renderedUsers = (m$(sharedWithListTempDiv)).find('.ms-imnSpan');

                    renderedUsers.forEach(function(elt) {
                        var userLinkClass = markupOptions.sharedWithListUserLinkClass;
                        var userLinkId = markupOptions.sharedWithListUserLinkId;

                        if (markupOptions.appendCountToSharedWithListUserLinkId) {
                            userLinkId += String(renderedUsers.length - userCount);
                        }
                        if (m$.isDefinedAndNotNull(userLinkId) && userLinkId.length > 0)
                            elt.id = userLinkId;
                        if (m$.isDefinedAndNotNull(userLinkClass) && userLinkClass.length > 0)
                            (m$(elt)).addClass(userLinkClass);
                        userCount++;
                    });
                    var renderedMoreLinks = (m$(sharedWithListTempDiv)).find('.ms-imnMoreLink');

                    renderedMoreLinks.forEach(function(elt) {
                        var numMore = sharedWithUsersCount - 3;

                        Sys.Debug.assert(numMore > 0, 'Error constructing sharing list');
                        var sharedWithMoreLinkId = markupOptions.sharedWithMoreLinkId;

                        if (markupOptions.appendCountToSharedWithMoreLinkId) {
                            sharedWithMoreLinkId += String(numMore);
                        }
                        var moreLinkClass = markupOptions.sharedWithMoreLinkClass;
                        var moreLinkTooltip = linkTooltip;
                        var moreLinkId = sharedWithMoreLinkId;

                        if (m$.isDefinedAndNotNull(moreLinkId) && moreLinkId.length > 0)
                            elt.id = moreLinkId;
                        if (m$.isDefinedAndNotNull(moreLinkClass) && moreLinkClass.length > 0)
                            (m$(elt)).addClass(moreLinkClass);
                        if (m$.isDefinedAndNotNull(moreLinkTooltip) && moreLinkTooltip.length > 0)
                            elt.title = moreLinkTooltip;
                    });
                    ret.push(StBuildParam(STSHtmlEncode(Strings.STS.L_SharedWithUsers), sharedWithListTempDiv.innerHTML));
                }
            }
            if (ret.length > 0) {
                ret.unshift('<span', AttrQuoteIfNotEmpty('id', markupOptions.sharedWithListInnerSpanId), AttrQuoteIfNotEmpty('class', markupOptions.sharedWithListInnerSpanClass), '>');
                ret.push('</span>');
                var sharedWithImageHtml = '';

                if (markupOptions.showSharingHintImages) {
                    sharedWithImageHtml = GetSharedWithImageHtml(markupOptions.sharedWithListImageClass, sharingHintImageClass, markupOptions.sharedWithListImageId);
                    ret.unshift(sharedWithImageHtml);
                }
                ret.unshift('<div', AttrQuoteIfNotEmpty('id', markupOptions.sharedWithListDivId), AttrQuoteIfNotEmpty('class', markupOptions.sharedWithListDivClass), '>');
                ret.push('</div>');
            }
            if (isSharedWithGuest) {
                var sharedWithGuestImageHtml = '';

                if (markupOptions.showSharingHintImages) {
                    sharedWithGuestImageHtml = GetSharedWithImageHtml(markupOptions.guestLinkImageClass, 'js-sharingHint-sharedAnonymously', markupOptions.guestLinkImageId);
                }
                ret.push('<div', AttrQuoteIfNotEmpty('id', markupOptions.guestLinkDivId), AttrQuoteIfNotEmpty('class', markupOptions.guestLinkDivClass), '>', sharedWithGuestImageHtml, '<span', AttrQuoteIfNotEmpty('id', markupOptions.guestLinkInnerSpanId), AttrQuoteIfNotEmpty('class', markupOptions.guestLinkInnerSpanClass), '>', StBuildParam(STSHtmlEncode(Strings.STS.L_SharedWithGuest), '<a href="#"' + AttrQuoteIfNotEmpty('onclick', markupOptions.guestLinkOnClickCallback + 'return false;') + AttrQuoteIfNotEmpty('id', markupOptions.guestLinkId) + AttrQuoteIfNotEmpty('title', Strings.STS.L_SharedWithGuestTooltip) + AttrQuoteIfNotEmpty('class', markupOptions.guestLinkClass) + '>', '</a>'), '</span>', '</div>');
            }
            return ret.join('');
        };
        function GetSharedWithImageHtml(spanClass, sharingHintImageClass, imageId) {
            var sharedWithImageHtml = ['<span ', AttrQuoteIfNotEmpty('class', 'js-sharingHint-iconContainer ' + spanClass), '><img ', AttrQuoteIfNotEmpty('class', sharingHintImageClass), AttrQuoteIfNotEmpty('id', imageId), AttrQuoteIfNotEmpty('src', GetThemedImageUrl("spcommon.png")), '></img></span>'];

            return sharedWithImageHtml.join('');
        }
        ;
        ApplySharingListStyles = function(sharingListElement) {
            if (m$.isFunction(ProcessImn)) {
                ProcessImn();
            }
            var onClickGuestLink = function(evt) {
                if (typeof sharingListElement.calloutRenderCtx !== "undefined" && sharingListElement.calloutRenderCtx !== null) {
                    var callout = CalloutManager.getFromCalloutDescendant(sharingListElement);
                    var renderCtx = sharingListElement.calloutRenderCtx;
                    var webUrl = renderCtx.HttpRoot;
                    var listId = renderCtx.listName;
                    var listItemId = renderCtx.CurrentItem.ID;
                    var itemTitle = renderCtx.CurrentItem.FileLeafRef;

                    if (m$.isUndefinedOrNull(itemTitle) || itemTitle.length === 0) {
                        itemTitle = renderCtx.CurrentItem.Title;
                    }
                    var onCloseDialogCallback = function() {
                    ULSoNk:
                        ;
                        (m$(document)).trigger("SharingEvents.SharingModified", listId, listItemId);
                    };
                    var displayManageLinksDialogFromCallout = function(sharingInformation) {
                        callout.close();
                        var canManagePermissions = sharingInformation.get_canManagePermissions();
                        var anonymousEditLink = sharingInformation.get_anonymousEditLink();
                        var anonymousViewLink = sharingInformation.get_anonymousViewLink();
                        var manageLinkParam = new ManageLinkParams(webUrl, listId, listItemId, itemTitle, anonymousEditLink, anonymousViewLink, canManagePermissions, onCloseDialogCallback);

                        DisplayManageLinkDialog(manageLinkParam);
                    };

                    if (typeof sharingListElement.objectSharingInformation !== "undefined" && sharingListElement.objectSharingInformation !== null) {
                        displayManageLinksDialogFromCallout(sharingListElement.objectSharingInformation);
                    }
                    else {
                        var cctx = new SP.ClientContext(webUrl);
                        var web = cctx.get_web();
                        var securableObject = web;
                        var list = null;
                        var listItem = null;

                        if (listId.length > 0) {
                            list = (web.get_lists()).getById(listId);
                            if (listItemId.length > 0) {
                                listItem = list.getItemById(listItemId);
                                securableObject = listItem;
                            }
                            else {
                                listItem = null;
                                securableObject = list;
                            }
                        }
                        var objectSharingInformation = SP.ObjectSharingInformation.getObjectSharingInformation(cctx, securableObject, false, false, false, true, false, false, false);

                        cctx.load(objectSharingInformation, 'CanManagePermissions', 'AnonymousEditLink', 'AnonymousViewLink');
                        var onSharingInformationQuerySucceeded = function(sender, args) {
                        ULSoNk:
                            ;
                            displayManageLinksDialogFromCallout(objectSharingInformation);
                        };
                        var onSharingInformationQueryFailed = function(sender, args) {
                        };

                        cctx.executeQueryAsync(onSharingInformationQuerySucceeded, onSharingInformationQueryFailed);
                    }
                }
                return false;
            };

            ((m$(sharingListElement)).find(".js-callout-sharedWithGuestLink")).click(onClickGuestLink);
            (m$(sharingListElement)).css({
                display: "block"
            });
            var dlg = window.top.g_childDialog;

            if (m$.isDefinedAndNotNull(dlg)) {
                dlg.autoSize();
            }
        };
        NavigateToRootLibraryWithoutQueryString = function() {
        ULSoNk:
            ;
            var windowUrl = ajaxNavigate.get_href();
            var idxQueryParamsStart = windowUrl.indexOf('?');

            if (idxQueryParamsStart > -1) {
                windowUrl = windowUrl.substring(0, idxQueryParamsStart);
                STSNavigate(windowUrl);
            }
        };
        var c_sharingDialogWidth = 450;

        DisplaySharingDialog = function(webUrl, listId, listItemId) {
            if (!webUrl.endsWith('/')) {
                webUrl += '/';
            }
            var shareUrlComponents = [webUrl, "_layouts/15/aclinv.aspx", "?forSharing=1"];

            if (m$.isDefinedAndNotNull(listId) && listId.length > 0) {
                shareUrlComponents.push("&List=", escapeProperly(listId));
                if (m$.isDefinedAndNotNull(listItemId) && listItemId.length > 0) {
                    shareUrlComponents.push("&obj=", listId, ",", listItemId, ",DOCUMENT");
                }
            }
            var shareUrl = shareUrlComponents.join('');
            var onShareClickCallback = function(dialogResult) {
                var uri = new URI(ajaxNavigate.get_href());
                var sharingDialogForListItemId = uri.getQueryParameter("sharingDialogForListItemId");

                if (sharingDialogForListItemId) {
                    NavigateToRootLibraryWithoutQueryString();
                }
                else {
                    if (dialogResult === SP.UI.DialogResult.OK) {
                        (m$(document)).trigger("SharingEvents.SharingAdded", listId, listItemId);
                    }
                    else if (dialogResult === 100) {
                        DisplaySharedWithDialog(webUrl, listId, listItemId);
                    }
                }
            };
            var dlgArgs = {};

            dlgArgs['LaunchedWithCallback'] = true;
            var dialogOptions = {
                url: shareUrl,
                dialogReturnValueCallback: onShareClickCallback,
                args: dlgArgs,
                autoSizeStartWidth: c_sharingDialogWidth
            };

            OpenPopUpPageWithDialogOptions(dialogOptions);
        };
        var c_sharedWithDialogStartWidth = 450;
        var c_sharedWithDialogNameTitleWidthWithDropdown = 300;
        var c_sharedWithDialogNameTitleWidthWithoutDropdown = 350;

        DisplaySharedWithDialog = function(webUrl, listId, listItemId, forceReadOnly, hideInviteLink) {
            var topWnd = _dlgWndTop();

            if (Boolean(topWnd) && topWnd != window && typeof topWnd.EnsureScriptParams == "function") {
                topWnd.EnsureScriptParams("sharing.js", "DisplaySharedWithDialog", webUrl, listId, listItemId, forceReadOnly, hideInviteLink);
                return;
            }
            if (!webUrl.endsWith('/')) {
                webUrl += '/';
            }
            if (m$.isUndefinedOrNull(listId)) {
                listId = '';
            }
            if (m$.isUndefinedOrNull(listItemId)) {
                listItemId = '';
            }
            if (m$.isUndefinedOrNull(forceReadOnly)) {
                forceReadOnly = false;
            }
            if (m$.isUndefinedOrNull(hideInviteLink)) {
                hideInviteLink = false;
            }
            if (listItemId.length > 0) {
                if (typeof CalloutManager !== "undefined" && CalloutManager !== null) {
                    CalloutManager.closeAll();
                }
            }
            EnsureScriptFunc("SP.js", "SP.ClientContext", function() {
            ULSoNk:
                ;
                EnsureScriptFunc("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", function() {
                ULSoNk:
                    ;
                    var dlg = null;
                    var sharingListContainerHTML = ['<img src=', StAttrQuote("/_layouts/15/images/progress-circle-24.gif?rev=23"), 'class="js-sharing-fullListDialogWaitImg" id=', StAttrQuote('sl-waitImg' + listItemId), ' onclick=' + StAttrQuote("this.style.display='none'"), '/>', '<div class="js-sharing-fullListDialogStatusBar" id=' + StAttrQuote('sl-StatusBar' + listItemId) + '>', '</div>', '<div class="js-sharing-fullListDialogCommandsTop">', '<span class="js-sharing-fullListDialogManageGuestLinks ms-textSmall ms-soften">', '<span class="js-sharingHint-iconContainer ms-verticalAlignMiddle">', '<img class="js-sharingHint-sharedAnonymously"', ' src=', StAttrQuote(GetThemedImageUrl("spcommon.png")), '></img>', '</span>', StBuildParam(STSHtmlEncode(Strings.STS.L_SharedWithGuest), '<a id=' + StAttrQuote('sl-ManageGuestLinks' + listItemId) + ' href="#" onclick="return false;">', '</a>'), '</span>', '</div>', '<div class="js-sharing-fullListDialog">', '</div>', '<div class="js-sharing-fullListDialogCommandsLeft">', '<a href="#" onclick="return false;" id=', StAttrQuote('sl-InviteLink' + listItemId), ' class="js-sharing-fullListDialogCommandInvite ms-calloutLink">', STSHtmlEncode(Strings.STS.L_SharedWithDialogInvitePeople), '</a>', '<a href="#" onclick="return false;" id=', StAttrQuote('sl-EmailLink' + listItemId), ' class="js-sharing-fullListDialogCommandEmail ms-calloutLink">', STSHtmlEncode(Strings.STS.L_SharedWithDialogEmailEveryone), '</a>', '<a href="#" onclick="return false;" id=', StAttrQuote('sl-AdvancedLink' + listItemId), ' class="js-sharing-fullListDialogCommandAdvanced ms-calloutLink">', STSHtmlEncode(Strings.STS.L_SharedWithDialogAdvanced), '</a>', '</div>', '<div class="js-sharing-fullListDialogCommandsRight">', '<span class="js-sharing-fullListDialogApplyText ms-textXSmall" id=', StAttrQuote('sl-applyText' + listItemId), '></span>', '<img src=', StAttrQuote("/_layouts/15/images/loadingcirclests16.gif?rev=23"), ' class="js-sharing-fullListDialogApplyWaitImg" id=', StAttrQuote('sl-applyWaitImg' + listItemId), ' onclick=' + StAttrQuote("this.style.display='none'"), '/>', '<button id=', StAttrQuote('sl-OKButton' + listItemId), ' class="js-sharing-fullListDialogCommandApply" disabled="disabled">', STSHtmlEncode(Strings.STS.L_SharedWithDialogApply), '</button>', '<button id=', StAttrQuote('sl-CloseButton' + listItemId), ' class="js-sharing-fullListDialogCommandCancel">', STSHtmlEncode(Strings.STS.L_SharedWithDialogCancel), '</button>', '</div>'].join('');
                    var sharingListContainer = document.createElement('div');

                    sharingListContainer.className = 'js-sharing-fullListDialogContainer';
                    sharingListContainer.id = 'sl-Container' + listItemId;
                    sharingListContainer.innerHTML = sharingListContainerHTML;
                    (m$(sharingListContainer)).click(MenuHtc_hide);
                    ((m$(sharingListContainer)).find('.js-sharing-fullListDialog')).scroll(MenuHtc_hide);
                    var dialogOptions = {
                        html: sharingListContainer,
                        title: Strings.STS.L_SharedWithDialogTitle,
                        allowMaximize: false,
                        includeScrollBarPadding: false,
                        autoSizeStartWidth: c_sharedWithDialogStartWidth
                    };

                    dlg = SP.UI.ModalDialog.showModalDialog(dialogOptions);
                    var waitImg = document.getElementById('sl-waitImg' + listItemId);
                    var applyWaitText = document.getElementById('sl-applyText' + listItemId);
                    var applyWaitImg = document.getElementById('sl-applyWaitImg' + listItemId);
                    var inviteLinkElement = document.getElementById('sl-InviteLink' + listItemId);
                    var emailLinkElement = document.getElementById('sl-EmailLink' + listItemId);
                    var advancedLinkElement = document.getElementById('sl-AdvancedLink' + listItemId);
                    var applyButtonElement = document.getElementById('sl-OKButton' + listItemId);
                    var closeButtonElement = document.getElementById('sl-CloseButton' + listItemId);
                    var manageGuestLinksElement = document.getElementById('sl-ManageGuestLinks' + listItemId);
                    var sharingEntriesDiv = ((m$(sharingListContainer)).find(".js-sharing-fullListDialog"))[0];
                    var emailAddresses = [];
                    var canManagePermissions = false;
                    var anonymousEditLink = '';
                    var anonymousViewLink = '';
                    var pendingAccessRequestsLink = '';

                    (m$(inviteLinkElement)).click(function() {
                    ULSoNk:
                        ;
                        SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK, null);
                        var sharingDlg = typeof window.top.g_childDialog != "undefined" ? window.top.g_childDialog : undefined;

                        if (Boolean(sharingDlg)) {
                            sharingDlg.close(SP.UI.DialogResult.cancel);
                        }
                        DisplaySharingDialog(webUrl, listId, listItemId);
                        return false;
                    });
                    (m$(advancedLinkElement)).click(function() {
                    ULSoNk:
                        ;
                        var managePermsPageUrlComponents = [webUrl, "_layouts/15/User.aspx", "?"];

                        if (m$.isDefinedAndNotNull(listId) && listId.length > 0) {
                            managePermsPageUrlComponents.push("List=", escapeProperly(listId));
                            if (m$.isDefinedAndNotNull(listItemId) && listItemId.length > 0) {
                                managePermsPageUrlComponents.push("&obj=", listId, ",", listItemId, ",LISTITEM");
                            }
                        }
                        var managePermsPageUrl = managePermsPageUrlComponents.join('');

                        managePermsPageUrl = AddSourceToUrl(managePermsPageUrl);
                        STSNavigate(managePermsPageUrl);
                        return false;
                    });
                    (m$(applyButtonElement)).click(function() {
                    ULSoNk:
                        ;
                        if (m$.isDefinedAndNotNull(applyWaitImg)) {
                            applyWaitImg.style.display = "inline";
                        }
                        applyChanges();
                    });
                    (m$(closeButtonElement)).click(function() {
                    ULSoNk:
                        ;
                        SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK, null);
                    });
                    closeButtonElement.focus();
                    var cctx = new SP.ClientContext(webUrl);
                    var web = cctx.get_web();
                    var securableObject = web;
                    var list = null;
                    var listItem = null;
                    var listRootFolder = null;

                    if (listId.length > 0) {
                        listId = unescapeProperly(listId);
                        list = (web.get_lists()).getById(listId);
                        if (listItemId.length > 0) {
                            listItem = list.getItemById(listItemId);
                            securableObject = listItem;
                        }
                        else {
                            listItem = null;
                            securableObject = list;
                        }
                    }
                    else {
                        list = null;
                        listItem = null;
                    }
                    cctx.load(web, 'Title', 'ServerRelativeUrl');
                    if (m$.isDefinedAndNotNull(list)) {
                        cctx.load(list, 'BaseType', 'Title');
                        listRootFolder = list.get_rootFolder();
                        if (m$.isDefinedAndNotNull(listRootFolder)) {
                            cctx.load(listRootFolder, 'ServerRelativeUrl');
                        }
                    }
                    if (m$.isDefinedAndNotNull(listItem)) {
                        cctx.load(listItem, 'ID', 'FileRef', 'FileLeafRef', 'Title');
                    }
                    var objectSharingInformation = SP.ObjectSharingInformation.getObjectSharingInformation(cctx, securableObject, false, false, false, true, true, true, !forceReadOnly);
                    var sharedWithUsers = objectSharingInformation.getSharedWithUsers(cctx);

                    cctx.load(objectSharingInformation, 'IsSharedWithGuest', 'CanManagePermissions', 'AnonymousEditLink', 'AnonymousViewLink', 'HasPendingAccessRequests', 'PendingAccessRequestsLink', 'HasPermissionLevels');
                    cctx.load(sharedWithUsers);
                    var onSharingInformationQuerySucceeded = function(sender, args) {
                    ULSoNk:
                        ;
                        var isSharedWithGuest = objectSharingInformation.get_isSharedWithGuest();
                        var hasPendingAccessRequests = objectSharingInformation.get_hasPendingAccessRequests();

                        canManagePermissions = objectSharingInformation.get_canManagePermissions();
                        anonymousEditLink = objectSharingInformation.get_anonymousEditLink();
                        anonymousViewLink = objectSharingInformation.get_anonymousViewLink();
                        var hasPermissionLevels = objectSharingInformation.get_hasPermissionLevels();
                        var sharedWithUsersEnum = sharedWithUsers.getEnumerator();
                        var userCount = 0;

                        while (sharedWithUsersEnum.moveNext()) {
                            var currentSharedWithUser = sharedWithUsersEnum.get_current();
                            var id = currentSharedWithUser.get_id();
                            var title = currentSharedWithUser.get_name();
                            var email = currentSharedWithUser.get_email();
                            var pictureURL = currentSharedWithUser.get_picture();
                            var jobTitle = currentSharedWithUser.get_jobTitle();
                            var department = currentSharedWithUser.get_department();
                            var sip = currentSharedWithUser.get_sipAddress();
                            var actualPermission = currentSharedWithUser.get_customRoleNames();
                            var hasEditPermission = currentSharedWithUser.get_hasEditPermission();
                            var hasViewPermission = currentSharedWithUser.get_hasViewPermission();
                            var isSiteAdmin = currentSharedWithUser.get_isSiteAdmin();
                            var userDetailsElement = createUserDetailsElement({
                                id: id,
                                title: title,
                                email: email,
                                pictureURL: pictureURL,
                                sip: sip,
                                jobTitle: jobTitle,
                                department: department
                            }, hasPermissionLevels);
                            var permissionElement = hasPermissionLevels ? createPermissionElement(id, currentSharedWithUser, isSiteAdmin, actualPermission, hasEditPermission, hasViewPermission) : null;
                            var sharingEntryDiv = createSharingEntryDiv(userDetailsElement, permissionElement, id);

                            sharingEntriesDiv.appendChild(sharingEntryDiv);
                            if (m$.isDefinedAndNotNull(email) && email.length > 0) {
                                emailAddresses.push(escapeProperly(email));
                            }
                            userCount++;
                        }
                        var C_MAXUSERCOUNT = 30;

                        if (userCount >= C_MAXUSERCOUNT) {
                            var sharedWithManyEntry = document.createElement("DIV");

                            sharedWithManyEntry.className = "js-sharing-fullListDialogEntry js-sharing-fullListDialogEntrySharedWithMany ms-soften";
                            sharedWithManyEntry.id = "sharingListEntry_many";
                            sharedWithManyEntry.innerHTML = STSHtmlEncode(Strings.STS.L_SharedWithDialogManyMessage);
                            sharingEntriesDiv.appendChild(sharedWithManyEntry);
                        }
                        if (hasPendingAccessRequests) {
                            pendingAccessRequestsLink = objectSharingInformation.get_pendingAccessRequestsLink();
                            displayPendingAccessRequestsStatusBar();
                        }
                        if (isSharedWithGuest && (Boolean(anonymousEditLink) || Boolean(anonymousViewLink))) {
                            enableManageGuestLinksCommand();
                        }
                        dlg.autoSize();
                        onDialogLoadingCompleted(!hasPermissionLevels);
                    };
                    var onSharingInformationQueryFailed = function(sender, args) {
                        if (m$.isDefinedAndNotNull(sharingEntriesDiv)) {
                            var errMsgSpan = document.createElement('SPAN');

                            errMsgSpan.innerHTML = args.get_message();
                            sharingEntriesDiv.appendChild(errMsgSpan);
                            waitImg.style.display = 'none';
                        }
                    };

                    cctx.executeQueryAsync(onSharingInformationQuerySucceeded, onSharingInformationQueryFailed);
                    var displayPendingAccessRequestsStatusBar = function() {
                    ULSoNk:
                        ;
                        var pendingAccessRequestsHtml = [STSHtmlEncode(Strings.STS.L_SharedWithDialogPendingAccessRequests), ' <a href=', StAttrQuote(pendingAccessRequestsLink), " onclick='STSNavigate(this.href);return false;'", '>', STSHtmlEncode(Strings.STS.L_SharedWithDialogViewAccessRequests), '</a>'].join('');
                        var statusSpanElement = _createStatusMarkup('', pendingAccessRequestsHtml, false);
                        var statusElement = document.createElement('SPAN');

                        statusElement.className = StatusBarClassNames[StatusPriority.yellow] + ' ms-status-msg';
                        statusElement.style.display = 'block';
                        statusElement.appendChild(statusSpanElement);
                        var statusBarElement = document.getElementById('sl-StatusBar' + listItemId);

                        statusBarElement.appendChild(statusElement);
                        statusBarElement.style.display = 'block';
                    };
                    var enableManageGuestLinksCommand = function() {
                    ULSoNk:
                        ;
                        manageGuestLinksElement.parentNode.style.display = 'inline-block';
                        (m$(manageGuestLinksElement)).click(function() {
                        ULSoNk:
                            ;
                            dlg.close();
                            var itemTitle = listItem.get_item('FileLeafRef');

                            if (m$.isUndefinedOrNull(itemTitle) || itemTitle.length === 0) {
                                itemTitle = listItem.get_item('Title');
                            }
                            var manageLinkParams = new ManageLinkParams(webUrl, listId, listItemId, itemTitle, anonymousEditLink, anonymousViewLink, canManagePermissions);

                            DisplayManageLinkDialog(manageLinkParams);
                            return false;
                        });
                    };
                    var onDialogLoadingCompleted = function(isDialogReadOnly) {
                        if (!hideInviteLink && (m$.isUndefinedOrNull(list) || m$.isUndefinedOrNull(listItem) || m$.isDefinedAndNotNull(listItem) && list.get_baseType() == 1)) {
                            inviteLinkElement.style.display = "inline";
                        }
                        else {
                            inviteLinkElement.style.display = "none";
                        }
                        configureEmailLink();
                        if (isDialogReadOnly) {
                            applyButtonElement.style.visibility = "hidden";
                        }
                        else {
                            applyButtonElement.style.visibility = "visible";
                            applyButtonElement.disabled = true;
                        }
                        if (!isDialogReadOnly || canManagePermissions) {
                            advancedLinkElement.style.display = "inline";
                        }
                        waitImg.style.display = "none";
                        window.setTimeout(function() {
                        ULSoNk:
                            ;
                            if (m$.isFunction(ProcessImn)) {
                                ProcessImn();
                            }
                        }, 0);
                        dlg.autoSize();
                    };
                    var permissionsMenuEntries = {
                        edit: "edit",
                        view: "view",
                        custom: "custom",
                        none: "none"
                    };
                    var applyChanges = function() {
                    ULSoNk:
                        ;
                        var userRoleAssignments = [];

                        ((m$(sharingListContainer)).find(".js-sharing-fullListDialogEntryPermissionsInnerContainer")).forEach(function(permissionsMenuElement) {
                            if (permissionsMenuElement.currentSelection !== permissionsMenuElement.initialSelection) {
                                var loginName = permissionsMenuElement.loginName;
                                var roleValue;

                                switch (permissionsMenuElement.currentSelection) {
                                case permissionsMenuEntries.edit:
                                    roleValue = SP.Sharing.Role.edit;
                                    break;
                                case permissionsMenuEntries.view:
                                    roleValue = SP.Sharing.Role.view;
                                    break;
                                case permissionsMenuEntries.none:
                                    roleValue = SP.Sharing.Role.none;
                                    break;
                                default:
                                    Sys.Debug.assert(false, 'Permission level was changed to something other than edit, view, or none');
                                    return;
                                }
                            }
                            permissionsMenuElement.initialSelection = permissionsMenuElement.currentSelection;
                            if (permissionsMenuElement.currentSelection !== permissionsMenuEntries.custom) {
                                permissionsMenuElement.actualPermission = null;
                            }
                            var userRoleAssignment = new SP.Sharing.UserRoleAssignment;

                            userRoleAssignment.set_userId(loginName);
                            userRoleAssignment.set_role(roleValue);
                            userRoleAssignments.push(userRoleAssignment);
                        });
                        if (userRoleAssignments.length > 0) {
                            updateDocumentSharingInfo(userRoleAssignments, function() {
                            ULSoNk:
                                ;
                                applyButtonElement.disabled = true;
                            });
                        }
                    };
                    var configureEmailLink = function() {
                    ULSoNk:
                        ;
                        if (emailAddresses.length > 0) {
                            emailLinkElement.style.display = "inline";
                            var mailTo = [];

                            mailTo.push('mailto:');
                            mailTo.push(emailAddresses.join(';'));
                            var resourceName = null;
                            var resourceAddress = null;

                            if (m$.isDefinedAndNotNull(listItem)) {
                                if (list.get_baseType() == 1) {
                                    resourceName = listItem.get_item('FileLeafRef');
                                    resourceAddress = getHostUrl(webUrl) + listItem.get_item("FileRef");
                                }
                                else {
                                    resourceName = listItem.get_item('Title');
                                }
                            }
                            else if (m$.isDefinedAndNotNull(list)) {
                                resourceName = list.get_title();
                                if (m$.isDefinedAndNotNull(listRootFolder)) {
                                    resourceAddress = getHostUrl(ajaxNavigate.get_href()) + listRootFolder.get_serverRelativeUrl();
                                }
                            }
                            else if (m$.isDefinedAndNotNull(web)) {
                                resourceName = web.get_title();
                                resourceAddress = getHostUrl(ajaxNavigate.get_href()) + web.get_serverRelativeUrl();
                            }
                            if (m$.isDefinedAndNotNull(resourceName) || m$.isDefinedAndNotNull(resourceAddress)) {
                                mailTo.push('?');
                            }
                            var addAmp = false;

                            if (m$.isDefinedAndNotNull(resourceName)) {
                                mailTo.push('subject=');
                                mailTo.push(escapeProperly(resourceName));
                                addAmp = true;
                            }
                            if (m$.isDefinedAndNotNull(resourceAddress)) {
                                if (addAmp) {
                                    mailTo.push('&');
                                }
                                mailTo.push('body=');
                                mailTo.push(encodeURIComponent(encodeURI(resourceAddress)));
                            }
                            (m$(emailLinkElement)).click(function() {
                            ULSoNk:
                                ;
                                window.location.href = mailTo.join('');
                                return false;
                            });
                        }
                    };
                    var updateDocumentSharingInfo = function(userRoleAssignments, onSuccess) {
                        var resourceAddress = getHostUrl(webUrl) + listItem.get_item("FileRef");

                        SP.Sharing.DocumentSharingManager.updateDocumentSharingInfo(cctx, resourceAddress, userRoleAssignments, false, false, false, null, false);
                        cctx.executeQueryAsync(function() {
                        ULSoNk:
                            ;
                            onUpdateDocumentSharingInfoSucceeded(onSuccess);
                        }, onUpdateDocumentSharingInfoFailed);
                    };
                    var onUpdateDocumentSharingInfoSucceeded = function(onSuccess) {
                        if (m$.isDefinedAndNotNull(applyWaitImg)) {
                            applyWaitImg.style.display = "none";
                            if (!applyWaitText.hasChildNodes()) {
                                applyWaitText.appendChild(document.createTextNode(Strings.STS.L_SharedWithDialogApplySuccessText));
                            }
                            applyWaitText.style.display = "inline";
                            applyWaitText.style.opacity = 1;
                            var fadeOutApplyWaitUI = function() {
                            ULSoNk:
                                ;
                                SPAnimationUtility.BasicAnimator.FadeOut(applyWaitText, function() {
                                ULSoNk:
                                    ;
                                    applyWaitText.style.display = "none";
                                    applyWaitImg.style.display = "none";
                                });
                            };

                            window.setTimeout(fadeOutApplyWaitUI, 500);
                        }
                        (m$(document)).trigger("SharingEvents.SharingModified", listId, listItemId);
                        if (m$.isDefinedAndNotNull(onSuccess)) {
                            onSuccess();
                        }
                    };
                    var onUpdateDocumentSharingInfoFailed = function(sender, args) {
                    ULSoNk:
                        ;
                        if (m$.isDefinedAndNotNull(applyWaitImg)) {
                            applyWaitImg.style.display = "none";
                        }
                        alert(Strings.STS.L_SharedWithDialogApplyUpdatedPermissionsFailed);
                    };
                    var createUserDetailsElement = function(user, hasPermissionLevels) {
                        var userDetailsElement = document.createElement("div");

                        userDetailsElement.className = "js-sharing-fullListDialogEntryNameAndTitleContainer";
                        var renderCtx = new ContextInfo();

                        renderCtx.Templates = {};
                        renderCtx.Templates['Fields'] = {};
                        var fieldSchemaData = {
                            "Field": [{
                                "Name": "SharedWith",
                                "FieldType": "User",
                                "RealFieldName": "SharedWith",
                                "WithPicture": "1",
                                "PictureSize": "Size_48px",
                                "WithPictureDetail": "1",
                                "HasUserLink": "1",
                                "Type": "User",
                                "MaxWidth": hasPermissionLevels ? c_sharedWithDialogNameTitleWidthWithDropdown : c_sharedWithDialogNameTitleWidthWithoutDropdown
                            }],
                            "EffectivePresenceEnabled": "1",
                            "PresenceAlt": Strings.STS.L_UserFieldNoUserPresenceAlt,
                            "UserDispUrl": webUrl + "_layouts/15/userdisp.aspx"
                        };
                        var userData = {
                            "ID": listItemId,
                            "SharedWith": [{
                                "id": user.id,
                                "title": user.title,
                                "email": user.email,
                                "picture": user.pictureURL,
                                "sip": user.sip,
                                "jobTitle": user.jobTitle,
                                "department": user.department
                            }]
                        };
                        var userHtml = spMgr.RenderFieldByName(renderCtx, "SharedWith", userData, fieldSchemaData);

                        userDetailsElement.innerHTML = userHtml;
                        return userDetailsElement;
                    };
                    var createPermissionElement = function(userId, sharedWithUser, isSiteAdmin, actualPermission, canEdit, canView) {
                        var permissionsElement = document.createElement("div");

                        permissionsElement.className = "js-sharing-fullListDialogEntryPermissionsContainer";
                        var permissionsMenuElement;

                        if (isSiteAdmin) {
                            permissionsMenuElement = document.createElement("span");
                        }
                        else {
                            permissionsMenuElement = document.createElement("a");
                            permissionsMenuElement.href = "#";
                            permissionsMenuElement.onclick = function() {
                            ULSoNk:
                                ;
                                return false;
                            };
                        }
                        permissionsMenuElement.className = "js-sharing-fullListDialogEntryPermissionsInnerContainer";
                        permissionsMenuElement.id = "sl-permissionsMenuElement" + userId;
                        permissionsElement.appendChild(permissionsMenuElement);
                        if (isSiteAdmin) {
                            permissionsMenuElement.innerHTML = STSHtmlEncode(Strings.STS.L_SharedWithDialogOwnerPermission);
                        }
                        else {
                            (m$(permissionsMenuElement)).addClass('js-sharing-fullListDialogEntryPermissionsMenu');
                            var permissionsMenuTextElement = document.createElement('span');

                            (m$(permissionsMenuTextElement)).addClass('js-sharing-fullListDialogEntryPermissionsText');
                            permissionsMenuElement.appendChild(permissionsMenuTextElement);
                            var permissionsMenuArrowElement = document.createElement('img');

                            (m$(permissionsMenuArrowElement)).addClass('js-sharing-fullListDialogEntryPermissionsMenuArrow');
                            permissionsMenuArrowElement.src = "/_layouts/15/images/ecbarw.png?rev=23";
                            permissionsMenuArrowElement.alt = Strings.STS.L_OpenMenu_Text;
                            permissionsMenuElement.appendChild(permissionsMenuArrowElement);
                            (m$(permissionsMenuElement)).click(function(evt) {
                                var menuElement = ((m$(evt.target)).closest('.js-sharing-fullListDialogEntryPermissionsMenu'))[0];
                                var permissionsMenuId = "sl-permissionsMenu" + userId;
                                var permissionsMenu = CMenu(permissionsMenuId);
                                var addPermissionsMenuEntry = function(permission) {
                                    var permissionDisplayName = "";

                                    switch (permission) {
                                    case permissionsMenuEntries.edit:
                                        permissionDisplayName = Strings.STS.L_EditPermission;
                                        break;
                                    case permissionsMenuEntries.view:
                                        permissionDisplayName = Strings.STS.L_ViewPermission;
                                        break;
                                    case permissionsMenuEntries.custom:
                                        permissionDisplayName = menuElement.actualPermission;
                                        break;
                                    case permissionsMenuEntries.none:
                                        permissionDisplayName = Strings.STS.L_StopSharing;
                                        break;
                                    default:
                                        Sys.Debug.assert(false, 'Permission level is not valid');
                                        break;
                                    }
                                    CAMOpt(permissionsMenu, permissionDisplayName, 'SetSelectedPermission("' + permission + '", "' + menuElement.id + '");');
                                };

                                addPermissionsMenuEntry(permissionsMenuEntries.edit);
                                addPermissionsMenuEntry(permissionsMenuEntries.view);
                                if (isDefinedAndNotNullOrEmpty(menuElement.actualPermission)) {
                                    addPermissionsMenuEntry(permissionsMenuEntries.custom);
                                }
                                addPermissionsMenuEntry(permissionsMenuEntries.none);
                                var menuParentElement = document.createElement('span');

                                menuParentElement.id = permissionsMenuId;
                                menuParentElement.style.position = 'absolute';
                                menuElement.appendChild(menuParentElement);
                                var menuElementLeft = ((m$(menuElement)).offset()).left;
                                var menuElementBottom = ((m$(menuElement)).offset()).bottom;

                                (m$(menuParentElement)).offset({
                                    left: menuElementLeft,
                                    top: menuElementBottom
                                });
                                MenuHtc_hide();
                                OMenu(permissionsMenu, menuParentElement, undefined, false);
                                evt.stopPropagation();
                                return false;
                            });
                            if (isDefinedAndNotNullOrEmpty(actualPermission)) {
                                permissionsMenuElement.initialSelection = permissionsMenuEntries.custom;
                                permissionsMenuElement.actualPermission = actualPermission;
                            }
                            else if (canEdit) {
                                permissionsMenuElement.initialSelection = permissionsMenuEntries.edit;
                            }
                            else if (canView) {
                                permissionsMenuElement.initialSelection = permissionsMenuEntries.view;
                            }
                            permissionsMenuElement.loginName = sharedWithUser.get_loginName();
                            SetSelectedPermission(permissionsMenuElement.initialSelection, permissionsMenuElement);
                        }
                        return permissionsElement;
                    };

                    SetSelectedPermission = function(selectedPermission, menuElement) {
                        if (!m$.isElement(menuElement)) {
                            menuElement = document.getElementById(menuElement);
                        }
                        if (menuElement.currentSelection !== selectedPermission) {
                            var selectedPermissionText = '';

                            switch (selectedPermission) {
                            case permissionsMenuEntries.edit:
                                selectedPermissionText = Strings.STS.L_EditPermission;
                                break;
                            case permissionsMenuEntries.view:
                                selectedPermissionText = Strings.STS.L_ViewPermission;
                                break;
                            case permissionsMenuEntries.custom:
                                selectedPermissionText = menuElement.actualPermission;
                                break;
                            case permissionsMenuEntries.none:
                                selectedPermissionText = Strings.STS.L_StopSharing;
                                break;
                            default:
                                Sys.Debug.assert(false, 'Selected permission level is not valid');
                                break;
                            }
                            ((m$(menuElement)).find('.js-sharing-fullListDialogEntryPermissionsText'))[0].innerHTML = STSHtmlEncode(selectedPermissionText);
                            menuElement.currentSelection = selectedPermission;
                            applyButtonElement.disabled = false;
                        }
                        menuElement.focus();
                    };
                    var createSharingEntryDiv = function(userDetailsElement, permissionsElement, entryId) {
                        var sharingEntry = document.createElement("div");

                        sharingEntry.className = "js-sharing-fullListDialogEntry";
                        if (m$.isDefinedAndNotNull(entryId)) {
                            sharingEntry.id = "sharingListEntry_" + entryId;
                        }
                        sharingEntry.appendChild(userDetailsElement);
                        if (m$.isDefinedAndNotNull(permissionsElement)) {
                            sharingEntry.appendChild(permissionsElement);
                        }
                        return sharingEntry;
                    };
                });
            });
        };
        var c_manageLinkTable = "<div class='ms-table ms-manageLink-table'>";
        var c_linkRow = ["<div class='ms-tableRow'>", "<div class='ms-tableCell ms-manageLink-cell'><div class='ms-manageLink-column ms-accentText'>{0}</div></div>", "<div class='ms-tableCell ms-manageLink-cell'><div class='ms-manageLink-column' id='{1}'><input type='text' class='ms-manageLink-url ms-noWrap' value='{2}' title='{3}' readonly='readonly' onmousedown='SelectOnFocus(this, event);'/>", "<span style='display:none' class='ms-manageLink-progress'><img class='ms-manageLink-progress-img' src='", "/_layouts/15/images/loadingcirclests16.gif?rev=23", "' onclick='javascript:style.display=\"none\";' alt=", StAttrQuote(Strings.STS.L_Sharing_ManageLink_ProgressTooltip), "/><span>", STSHtmlEncode(Strings.STS.L_Sharing_ManageLink_ProgressText), "</span></span>", "</div></div>", "<div class='ms-tableCell' style='display:{4}'><a href='#' onclick='OnDisableLink({6}, this);return false;'><img id='{5}' class='ms-manageLink-table-img' src='", "/_layouts/15/images/delete.gif?rev=23", "'/></a></div></div>"];
        var c_buttonRow = "<div class='ms-core-form-bottomButtonBox ms-manageLink-buttonrow'><button onclick='DismissTopDlg(0);' id='js-manageLink-CloseBtn'>" + STSHtmlEncode(Strings.STS.L_CloseButtonCaption) + "</button></div>";
        var c_urlDivIdPref = "js-manageLinkUrl-";
        var c_deleteBtnPref = "js-manageLink-deletelink-";

        ManageLinkParams = function(webUrlIn, listIdIn, itemIdIn, itemNameIn, editLinkIn, viewLinkIn, allowDisableLinkIn, onReturnCallbackIn) {
            if (!webUrlIn.endsWith('/')) {
                webUrlIn += '/';
            }
            var startBracketIndex = listIdIn.indexOf("{");
            var endBracketIndex = listIdIn.indexOf("}");

            if (startBracketIndex >= 0 && endBracketIndex >= 0) {
                listIdIn = listIdIn.substring(startBracketIndex + 1, endBracketIndex);
            }
            this.webUrl = webUrlIn;
            this.listId = listIdIn;
            this.itemId = itemIdIn;
            this.itemName = itemNameIn;
            this.editLink = editLinkIn;
            this.viewLink = viewLinkIn;
            this.allowDisableLink = allowDisableLinkIn;
            this.onReturnCallback = onReturnCallbackIn;
        };
        ManageLinkParams.prototype = {
            webUrl: undefined,
            listId: undefined,
            itemId: undefined,
            itemName: undefined,
            editLink: undefined,
            viewLink: undefined,
            allowDisableLink: undefined,
            onReturnCallback: undefined
        };
        DisplayManageLinkDialog = function(manageLinkParam) {
            if (!Boolean(manageLinkParam)) {
                Sys.Debug.assert(false, 'manageLinkParam is null in DisplayManageLinkDialog call');
                return;
            }
            var dlgHTML = c_manageLinkTable;
            var showDisableIcon = manageLinkParam.allowDisableLink ? "" : "none";
            var viewLbl = STSHtmlEncode(Strings.STS.L_Sharing_ManageLink_ViewOnlyLabel);
            var editLbl = STSHtmlEncode(Strings.STS.L_Sharing_ManageLink_EditLabel);
            var linkRow = c_linkRow.join("");

            if (Boolean(manageLinkParam.viewLink)) {
                dlgHTML += String.format(linkRow, viewLbl, c_urlDivIdPref + "View", manageLinkParam.viewLink, manageLinkParam.viewLink, showDisableIcon, c_deleteBtnPref + "View", "false");
            }
            if (Boolean(manageLinkParam.editLink)) {
                dlgHTML += String.format(linkRow, editLbl, c_urlDivIdPref + "Edit", manageLinkParam.editLink, manageLinkParam.editLink, showDisableIcon, c_deleteBtnPref + "Edit", "true");
            }
            dlgHTML += "</div>";
            dlgHTML += c_buttonRow;
            var dialogTitle = String.format(Strings.STS.L_Sharing_ManageLink_Title, manageLinkParam.itemName);
            var divElem = document.createElement("DIV");

            divElem.innerHTML = dlgHTML;
            var dopt = {
                html: divElem,
                showClose: true,
                title: dialogTitle,
                dialogReturnValueCallback: manageLinkParam.onReturnCallback,
                args: manageLinkParam
            };
            var dispDlgFunc = function() {
            ULSoNk:
                ;
                var dlg = new SP.UI.ModalDialog.showModalDialog(dopt);
                var closeButton = window.top.document.getElementById('js-manageLink-CloseBtn');

                if (Boolean(closeButton)) {
                    closeButton.focus();
                }
            };

            EnsureScriptFunc("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", dispDlgFunc);
        };
        SelectOnFocus = function(element, evt) {
            if (Boolean(element))
                element.select();
            cancelDefault(evt);
        };
        DismissTopDlg = function(result) {
            var dlg = window.top.g_childDialog;

            if (Boolean(dlg)) {
                dlg.close(result);
            }
        };
        OnDisableLink = function(bReadWrite, btn) {
            var divUrl = null;
            var linkId = "js-manageLinkUrl-" + (bReadWrite ? "Edit" : "View");

            divUrl = document.getElementById(linkId);
            var confirmationCallback = function(dialogResult) {
            ULSoNk:
                ;
                if (dialogResult == SP.UI.DialogResult.OK) {
                    if (divUrl != null)
                        UpdateDialogInProgress(btn, divUrl, bReadWrite);
                    var manageLinkParam = commonModalDialogGetArguments();

                    if (Boolean(manageLinkParam)) {
                        DisableAnonymousLink(btn, divUrl, bReadWrite, manageLinkParam);
                    }
                }
                var closeBtn = document.getElementById("js-manageLink-CloseBtn");

                if (Boolean(closeBtn))
                    closeBtn.focus();
            };

            launchConfirmationDialog(confirmationCallback);
        };
        function setManageLinkReturnValue() {
        ULSoNk:
            ;
            var manageLinkParam = commonModalDialogGetArguments();
            var l_editLinkDisabled = Boolean(manageLinkParam) && Boolean(manageLinkParam.editLink) ? IsLinkDisabled(true) : true;
            var l_viewLinkDisabled = Boolean(manageLinkParam) && Boolean(manageLinkParam.viewLink) ? IsLinkDisabled(false) : true;
            var dlg = SP.UI.ModalDialog.get_childDialog();

            if (Boolean(dlg)) {
                var returnVal = {
                    'editLinkDisabled': l_editLinkDisabled,
                    'viewLinkDisabled': l_viewLinkDisabled
                };

                dlg.set_returnValue(returnVal);
            }
        }
        var confirmationHTML = ["<div>", STSHtmlEncode(Strings.STS.L_Sharing_ManageLink_ConfirmText), "</div>", "<div class='ms-core-form-bottomButtonBox'>", "<button id='js-disableLinkBtn' onclick='DismissTopDlg(1)'>", STSHtmlEncode(Strings.STS.L_Sharing_ManageLink_ConfirmButtonOK), "</button>", "<button id='js-keepLinkBtn' onclick='DismissTopDlg(0)'>", STSHtmlEncode(Strings.STS.L_Sharing_ManageLink_ConfirmButtonCancel), "</button></div>"];

        function launchConfirmationDialog(callback) {
        ULSoNk:
            ;
            var divElem = document.createElement("DIV");

            divElem.innerHTML = confirmationHTML.join("");
            var dopt = {
                html: divElem,
                title: Strings.STS.L_Sharing_ManageLink_ConfirmTitle,
                dialogReturnValueCallback: callback
            };
            var dlg = new SP.UI.ModalDialog.showModalDialog(dopt);
            var keepItButton = document.getElementById('js-keepLinkBtn');

            if (Boolean(keepItButton))
                keepItButton.focus();
        }
        function UpdateDialogInProgress(btn, divUrl, bReadWrite) {
            var urlText = divUrl.firstChild;
            var spanProgress = urlText.nextSibling;

            if (urlText != null && spanProgress != null) {
                urlText.style.display = "none";
                spanProgress.style.display = "";
                btn.style.display = "none";
            }
        }
        function UpdateDialogOnFinish(btn, divUrl, bReadWrite, bSuccess) {
            var urlText = divUrl.firstChild;
            var spanProgress = urlText.nextSibling;

            if (urlText != null && spanProgress != null) {
                if (bSuccess) {
                    urlText.value = Strings.STS.L_Sharing_ManageLink_DisabledText;
                    urlText.title = "";
                    btn.style.display = "none";
                }
                else {
                    btn.style.display = "";
                }
                urlText.style.display = "";
                spanProgress.style.display = "none";
                setManageLinkReturnValue();
            }
        }
        function DisableAnonymousLink(btn, divUrl, bReadWrite, manageLinkParam) {
            var strPostUrl = [];

            strPostUrl.push(manageLinkParam.webUrl);
            strPostUrl.push("_layouts/15/aclinv.aspx");
            strPostUrl.push("?obj=");
            strPostUrl.push("{");
            strPostUrl.push(manageLinkParam.listId);
            strPostUrl.push("},");
            strPostUrl.push(manageLinkParam.itemId);
            strPostUrl.push(",DOCUMENT");
            strPostUrl.push("&List=");
            strPostUrl.push(escapeProperly(manageLinkParam.listId));
            strPostUrl.push("&command=disablelink");
            strPostUrl.push("&readwrite=");
            strPostUrl.push(String(bReadWrite));
            var onFinishCallback = function(xmlhttp) {
                if (xmlhttp.status != 200) {
                    var errMsg = xmlhttp.getResponseHeader('SharePoint-DestroySharingLink-Error');

                    if (!Boolean(errMsg) || errMsg == "") {
                        errMsg = Strings.STS.L_Sharing_ManageLink_DefaultError;
                    }
                    var errorPageUrl = manageLinkParam.webUrl + "_layouts/15/error.aspx" + '?ErrorText=' + errMsg;

                    OpenPopUpPageWithTitle(errorPageUrl, null, null, null, Strings.STS.L_Sharing_ManageLink_ErrorTitle);
                    xmlhttp.onreadystatechange = null;
                    UpdateDialogOnFinish(btn, divUrl, bReadWrite, false);
                }
                else {
                    UpdateDialogOnFinish(btn, divUrl, bReadWrite, true);
                }
            };

            SendAjaxFormPostWithFormDigest(strPostUrl.join(""), null, onFinishCallback);
        }
        function IsLinkDisabled(bReadWrite) {
            var isDisabled = false;
            var linkDiv = document.getElementById("js-manageLinkUrl-" + (bReadWrite ? "Edit" : "View"));

            if (Boolean(linkDiv)) {
                var linkText = linkDiv.firstChild;

                if (Boolean(linkText)) {
                    isDisabled = linkText.value == Strings.STS.L_Sharing_ManageLink_DisabledText;
                }
            }
            return isDisabled;
        }
        if (m$.isDefinedAndNotNull(Sys) && m$.isDefinedAndNotNull(Sys.Application)) {
            Sys.Application.notifyScriptLoaded();
        }
        if (m$.isFunction(NotifyScriptLoadedAndExecuteWaitingJobs)) {
            NotifyScriptLoadedAndExecuteWaitingJobs("sharing.js");
        }
    })();
}
function ULSoNk() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "sharing.commentedjs";
    return o;
}
var GetSharingStatusHtml;
var ApplySharingListStyles;
var DisplaySharingDialog;
var NavigateToRootLibraryWithoutQueryString;
var DisplaySharedWithDialog;
var SetSelectedPermission;
var ManageLinkParams;
var DisplayManageLinkDialog;
var OnDisableLink;
var DismissTopDlg;
var SelectOnFocus;

$_global_sharing();
