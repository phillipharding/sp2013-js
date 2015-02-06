function $_global_mydocs() {
    myDocumentsListTemplateType = 700;
    sharedWithMeBaseViewID = 54;
    (function() {
        function getViewCtxByListID(listId) {
            for (var ctxName in g_ctxDict) {
                var ctxi = g_ctxDict[ctxName];

                if (ctxi.listName === listId) {
                    return ctxi;
                }
            }
            return null;
        }
        function getItemByID(viewCtx, listItemId) {
            for (var i = 0; i < viewCtx.ListData.Row.length; i++) {
                if (viewCtx.ListData.Row[i].ID === listItemId) {
                    return viewCtx.ListData.Row[i];
                }
            }
            return null;
        }
        function sharingAddedCallback(listId, listItemId) {
            var viewCtx = getViewCtxByListID(listId);
            var iid = GenerateIIDForListItem(viewCtx, getItemByID(viewCtx, listItemId));

            refreshSharingHint(iid);
        }
        function sharingModifiedCallback(listId, listItemId) {
            var viewCtx = getViewCtxByListID(listId);
            var iid = GenerateIIDForListItem(viewCtx, getItemByID(viewCtx, listItemId));

            refreshSharingHint(iid);
        }
        function bindSharingEvents() {
            (m$(document)).bind("SharingEvents.SharingAdded", sharingAddedCallback);
            (m$(document)).bind("SharingEvents.SharingModified", sharingModifiedCallback);
        }
        function refreshSharingHint(iid) {
            if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                CUI.PMetrics.perfMark(CUI.PMarker.perfSPMyDocsSharingHintRefreshStart);
            var ctxRgiid = GetCtxRgiidFromIid(iid);
            var viewCtx = ctxRgiid.ctx;
            var ctxListItem = GetListItemByIID(iid);
            var cctx = SP.ClientContext.get_current();
            var list = ((cctx.get_web()).get_lists()).getById(viewCtx.listName);
            var listItem = list.getItemById(ctxListItem.ID);
            var onRefreshSharingHintQuerySucceeded = function(sender, args) {
                var fieldValues = listItem.get_fieldValues();

                ctxListItem.PrincipalCount = fieldValues.PrincipalCount;
                if (typeof getSharingHintIconHtml === "function") {
                    var iconHtml = getSharingHintIconHtml(ctxListItem, viewCtx);

                    SP.SOD.executeFunc("mquery.js", "m$", function() {
                        (m$('tr[iid="' + iid + '"] .js-sharingHint-listViewWrapper')).forEach(function(elt) {
                            elt.innerHTML = iconHtml;
                        });
                    });
                }
                if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                    CUI.PMetrics.perfMark(CUI.PMarker.perfSPMyDocsSharingHintRefreshEnd);
            };
            var onRefreshSharingHintQueryFailed = function(sender, args) {
                if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                    CUI.PMetrics.perfMark(CUI.PMarker.perfSPMyDocsSharingHintRefreshEnd);
                Sys.Debug.assert(false, 'CSOM query to refresh sharing hint failed');
            };

            cctx.load(list);
            cctx.load(listItem, 'ID', 'PrincipalCount');
            cctx.executeQueryAsync(onRefreshSharingHintQuerySucceeded, onRefreshSharingHintQueryFailed);
        }
        function isSharedWithMeView(ctxT) {
            return ctxT.BaseViewID === sharedWithMeBaseViewID;
        }
        function MyDocs_CalloutRenderItemTemplate(renderCtx) {
            var listItem = renderCtx.CurrentItem;
            var calloutID = GetCalloutElementIDFromRenderCtx(renderCtx);
            var viewCtx = getViewCtxFromCalloutCtx(renderCtx);
            var ret = [];

            ret.push('<div>');
            ret.push(CalloutRenderFilePreview(renderCtx));
            ret.push(CalloutRenderLastModifiedInfo(renderCtx));
            if (isSharedWithMeView(viewCtx)) {
                ret.push(Callout.GenerateDefaultSection(null, '<a class="ms-metadata ms-uppercase ms-subtleLink" id=' + StAttrQuote(calloutID + 'MoreDocumentsLink') + '></a>'));
            }
            else {
                ret.push('<div><span id=', StAttrQuote(calloutID + 'YouModified'), '></span></div>');
            }
            ret.push(CalloutRenderSharingStatusDiv(renderCtx));
            ret.push(CalloutRenderSourceUrl(renderCtx));
            ret.push('</div>');
            return ret.join('');
        }
        function MyDocs_OnOpeningCallback(renderCtx) {
            var callout = GetCalloutFromRenderCtx(renderCtx);
            var calloutID = GetCalloutElementIDFromRenderCtx(renderCtx);
            var populateMyDocsCallout = function() {
                if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                    CUI.PMetrics.perfMark(CUI.PMarker.perfSPMyDocsOnOpenedCallbackStart);
                var iid = GenerateIID(renderCtx);
                var calloutEcbMenu = document.getElementById("co" + iid + "_callout-ecbMenu");

                ((m$(calloutEcbMenu)).find(".js-callout-ecbMenu a")).click(MyDocs_CreateCalloutSqmFunctionDw1(9739, 3));
                var ctxT = getViewCtxFromCalloutCtx(renderCtx);
                var ctxListItem = renderCtx.CurrentItem;
                var isFolder = ctxListItem.FSObjType === "1";

                if (!isFolder) {
                    renderLightweightVersionHistory(ctxT, ctxListItem, callout, calloutID);
                }
                renderSharedWithInfo(renderCtx, ctxListItem, iid, callout);
                if (isSharedWithMeView(ctxT)) {
                    renderSeeMoreDocumentsLink(ctxT, ctxListItem, callout, calloutID);
                }
                if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                    CUI.PMetrics.perfMark(CUI.PMarker.perfSPMyDocsOnOpenedCallbackEnd);
            };

            SP.SOD.loadMultiple(["SP.js", "Strings.js", "mquery.js"], populateMyDocsCallout);
        }
        function MyDocs_CalloutAction_Open_OnClick(calloutActionClickEvent, calloutAction, renderCtx) {
            MyDocs_CreateCalloutSqmFunctionDw1(9739, 0)();
            CalloutAction_Open_OnClick(calloutActionClickEvent, calloutAction, renderCtx);
        }
        function MyDocs_CalloutAction_Share_OnClick(calloutActionClickEvent, calloutAction, renderCtx) {
            MyDocs_CreateCalloutSqmFunctionDw1(9739, 1)();
            CalloutAction_Share_OnClick(calloutActionClickEvent, calloutAction, renderCtx);
        }
        function MyDocs_CalloutAction_Share_IsVisible(calloutAction, renderCtx) {
            var viewCtx = getViewCtxFromCalloutCtx(renderCtx);

            if (isSharedWithMeView(viewCtx)) {
                return false;
            }
            var listItem = renderCtx.CurrentItem;

            if (listItem == null || listItem.PermMask == null) {
                throw "Error: listItem is missing properties";
            }
            return viewCtx.CurrentUserIsSiteAdmin;
        }
        function renderSharedWithInfo(renderCtx, ctxListItem, iid, callout) {
            if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                CUI.PMetrics.perfMark(CUI.PMarker.perfSPMyDocsRenderSharedWithStart);
            var sharedWithInfoElement = document.getElementById(GetCalloutSharingStatusDivId(renderCtx));

            (m$(sharedWithInfoElement)).empty();
            var ctxRgiid = GetCtxRgiidFromIid(iid);
            var ctxT = ctxRgiid.ctx;

            if (ctxT == null)
                return;
            if (isSharedWithMeView(ctxT)) {
                if (ctxListItem.SharedWithInternal != null) {
                    SP.SOD.executeFunc("sharing.js", "ApplySharingListStyles", function() {
                        sharedWithInfoElement.innerHTML = RenderSharedWithMeCalloutSharingInfo(ctxT, ctxListItem, callout);
                        ((m$(sharedWithInfoElement)).find(".js-callout-sharedWithLink")).click(function(evt) {
                            openSharedWithDialog(ctxListItem);
                            return false;
                        });
                        window.setTimeout(function() {
                            sharedWithInfoElement.calloutRenderCtx = renderCtx;
                            ApplySharingListStyles(sharedWithInfoElement);
                        }, 0);
                    });
                }
            }
            else {
                CalloutPostRenderSharingStatus(renderCtx);
            }
            ((m$(sharedWithInfoElement)).find(".js-callout-sharedWithLink")).click(function(evt) {
                MyDocs_CreateCalloutSqmFunctionDw1(9739, 6)();
                callout.close();
                return false;
            });
            if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                CUI.PMetrics.perfMark(CUI.PMarker.perfSPMyDocsRenderSharedWithEnd);
        }
        var displayLWVersioningDialog = function(ctxT, ctxListItem, fileVersions, versionLastCreatedByMySiteOwner, fileLink, callout, calloutID) {
            var lwVersioningContainer;
            var versionsPopupLinkId = calloutID + 'versionsPopupLink';
            var restoreButtonId = calloutID + 'lwVersioningrestoreButton';
            var cancelButtonId = calloutID + 'lwVersioningCancelButton';
            var myLastEditsId = calloutID + 'lwVersioningmyLastEdits';
            var lwVersioningContainerHTML = [StBuildParam(Strings.STS.L_MyDocsLwVersionDialogDescription, "<a href='" + fileLink + "' id='" + myLastEditsId + "'>", "</a>"), '<br /><p>', '<div class="ms-floatLeft">', '<a href="#" id=' + StAttrQuote(versionsPopupLinkId) + ' onclick="return false;">See other versions</a>', '</div>', '<div class="ms-floatRight">', '<input class="ms-textSmall" id=' + StAttrQuote(restoreButtonId) + ' value=', StAttrQuote(Strings.STS.L_MyDocsLwVersionDialogRestoreButtonCaption), ' type="button">', '&nbsp;&nbsp;', '<input class="ms-textSmall" id=' + StAttrQuote(cancelButtonId) + ' value=', StAttrQuote(Strings.STS.L_CancelButtonCaption), ' type="button">', '</div>', '</p><div style="clear:both;">'].join('');

            lwVersioningContainer = document.createElement("div");
            lwVersioningContainer.id = calloutID + 'lwVersioningRadiosContainer';
            lwVersioningContainer.className = 'js-myDocs-lwversionContainer';
            lwVersioningContainer.innerHTML = lwVersioningContainerHTML;
            var versionsLink = (m$(lwVersioningContainer)).find("[id='" + versionsPopupLinkId + "']");
            var NavigateToVersionsPage = function(evt, strHttpRoot, strArgs) {
                var url = strHttpRoot + "/_layouts/15/Versions.aspx?" + strArgs;

                ShowInPopUI(evt, ctxT, url);
            };

            versionsLink.click(function(evt) {
                NavigateToVersionsPage(evt, ctxT.HttpRoot, 'list=' + ctxT.listName + '&ID=' + ctxListItem.ID + '&FileName=' + ctxListItem.FileLeafRef);
            });
            var restoreButton = (m$(lwVersioningContainer)).find("[id='" + restoreButtonId + "']");

            restoreButton.click(function(evt) {
                if (confirm(Strings.STS.L_MyDocsLwVersionDialogRevertToYourVersionWarning)) {
                    var versionLabel = versionLastCreatedByMySiteOwner.get_versionLabel();

                    fileVersions.restoreByLabel(versionLabel);
                    var onQuerySucceeded = function(sender, args) {
                        SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK, null);
                        callout.close();
                        ctx.clvp.RefreshPagingEx(ctx.clvp.RefreshCurrent(), false, null);
                    };
                    var onQueryFailed = function(sender, args) {
                        alert(StBuildParam(Strings.STS.L_MyDocsLwVersionDialogError, args.get_message()));
                        SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK, null);
                    };
                    var cctx = SP.ClientContext.get_current();

                    cctx.executeQueryAsync(onQuerySucceeded, onQueryFailed);
                }
                return false;
            });
            var cancelButton = (m$(lwVersioningContainer)).find("[id='" + cancelButtonId + "']");

            (m$(cancelButton)).click(function(evt) {
                SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.cancel, null);
            });
            SP.SOD.executeFunc("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", function() {
                var dialogOptions = {
                    html: lwVersioningContainer,
                    title: Strings.STS.L_MyDocsLwVersionDialogTitle,
                    allowMaximize: false
                };
                var dlg = SP.UI.ModalDialog.showModalDialog(dialogOptions);
            });
        };

        function renderLightweightVersionHistory(ctxT, ctxListItem, callout, calloutID) {
            var listItemID = ctxListItem.ID;
            var cctx = SP.ClientContext.get_current();
            var site = cctx.get_site();
            var siteOwner = site.get_owner();
            var list = ((cctx.get_web()).get_lists()).getById(ctxT.listName);
            var listItem = list.getItemById(Number(listItemID));
            var file = listItem.get_file();
            var fileVersions = file.get_versions();
            var onQuerySucceeded = function(sender, args) {
                if (siteOwner.get_id() !== ctxT.CurrentUserId || list.get_enableVersioning() && !isSharedWithMeView(ctxT)) {
                    return;
                }
                if (ctxListItem.Editor == null || ctxListItem.Editor[0] == null || siteOwner.get_id() === parseInt(ctxListItem.Editor[0].id, 10)) {
                    return;
                }
                var versionCount = fileVersions.get_count();
                var youModifiedElement = document.getElementById(calloutID + "YouModified");

                if (versionCount !== 0) {
                    var versionLastCreatedByMySiteOwner = null;

                    for (var index = versionCount - 1; versionLastCreatedByMySiteOwner === null && index >= 0; --index) {
                        var version = fileVersions.itemAt(index);

                        if (versionLastCreatedByMySiteOwner === null && (version.get_createdBy()).get_id() === siteOwner.get_id()) {
                            versionLastCreatedByMySiteOwner = version;
                        }
                    }
                    var concatStrings = function() {
                        return Array.prototype.join.call(arguments, '');
                    };

                    if (versionLastCreatedByMySiteOwner !== null) {
                        var rootFolderUrl = ctxT.listUrlDir;
                        var fileRef = listItem.get_item("FileRef");
                        var rootFolderRelativeUrl = fileRef.replace(rootFolderUrl, "");
                        var urlSegments = rootFolderUrl.split('/');
                        var rootFolderName = urlSegments[urlSegments.length - 1];
                        var link = concatStrings(ctxT.HttpRoot, '/_vti_history/', version.get_id(), '/', rootFolderName, encodeURI(rootFolderRelativeUrl));

                        youModifiedElement.innerHTML = concatStrings('<a class="ms-metadata ms-uppercase ms-subtleLink" href="#" onclick="return false;">', STSHtmlEncode(Strings.STS.L_MyDocsCalloutUndoChanges), '</a>');
                        (m$(youModifiedElement.firstChild)).click(MyDocs_CreateCalloutSqmFunctionDw1(9739, 4));
                        (m$(youModifiedElement.firstChild)).click(function(evt) {
                            displayLWVersioningDialog(ctxT, ctxListItem, fileVersions, versionLastCreatedByMySiteOwner, link, callout, calloutID);
                        });
                    }
                }
            };
            var onQueryFailed = function(sender, args) {
            };

            cctx.load(site, 'Owner');
            cctx.load(siteOwner, 'Id');
            cctx.load(list);
            cctx.load(listItem, 'ID', 'FileRef');
            cctx.load(file, 'ModifiedBy');
            cctx.load(fileVersions, 'Include(Created, CreatedBy, ID, IsCurrentVersion, VersionLabel)');
            cctx.executeQueryAsync(onQuerySucceeded, onQueryFailed);
        }
        function renderSeeMoreDocumentsLink(ctxT, ctxListItem, callout, calloutID) {
            var author = ctxListItem.Author;

            if (author == null || !IsArray(author) || author[0] == null || author[0].title == null || ctxListItem.SiteUrl == null || ctxListItem.FileRef == null) {
                return;
            }
            var itemUrlSegments = ctxListItem.FileRef.split('/');
            var siteUrlSegments = ctxListItem.SiteUrl.split('/');
            var listUrl = ctxListItem.SiteUrl + '/' + itemUrlSegments[siteUrlSegments.length];
            var moreDocumentsLink = document.getElementById(calloutID + "MoreDocumentsLink");

            moreDocumentsLink.href = listUrl;
            var linkText = StBuildParam(Strings.STS.L_MyDocsSharedWithMeSeeMoreDocuments, author[0].title);

            moreDocumentsLink.appendChild(document.createTextNode(linkText));
        }
        var filterMenuItems = function(menuItems) {
            var ctxs = ctx;

            if (typeof ctxs === 'undefined' || ctxs === null || typeof ctxs.CurrentUserIsSiteAdmin !== 'boolean') {
                throw "Error: Complete ctx could not be found";
            }
            var viewsToBeFilteredOut = ["ViewType.aspx", "ViewEdit.aspx"];

            if (!ctxs.CurrentUserIsSiteAdmin) {
                viewsToBeFilteredOut.push("Personal.aspx");
                viewsToBeFilteredOut.push("SharedByMe.aspx");
                viewsToBeFilteredOut.push("SharedWithMe.aspx");
            }
            var retItems = m$.filter(menuItems, function(menuItem) {
                var isAllowed = true;

                if (!isDefinedAndNotNullOrEmpty(menuItem.NavigateUrl)) {
                    isAllowed = false;
                }
                else {
                    for (var filterIndex = 0; filterIndex < viewsToBeFilteredOut.length; filterIndex++) {
                        var filterItem = viewsToBeFilteredOut[filterIndex];
                        var uri = new URI(menuItem.NavigateUrl);

                        if ((uri.getLastPathSegment()).toLowerCase() === filterItem.toLowerCase()) {
                            isAllowed = false;
                            break;
                        }
                    }
                }
                return isAllowed;
            });

            return retItems;
        };
        var myDocsCtx = {};

        myDocsCtx.Templates = {};
        function registerViewSelectorFilterCallback(renderCtx) {
            SP.SOD.loadMultiple(["SP.js", "mquery.js"], function() {
                SP.Application.UI.ViewSelectorMenuBuilder.set_filterMenuItemsCallback(filterMenuItems);
            });
        }
        myDocsCtx.Templates.OnPostRender = [registerViewSelectorFilterCallback];
        myDocsCtx.ListTemplateType = myDocumentsListTemplateType;
        SPClientTemplates.TemplateManager.RegisterTemplateOverrides(myDocsCtx);
        myDocsCtx.BaseViewID = 51;
        SPClientTemplates.TemplateManager.RegisterTemplateOverrides(myDocsCtx);
        var myDocsCalloutCtx = {};

        myDocsCalloutCtx.Templates = {};
        myDocsCalloutCtx.BaseViewID = 'Callout';
        myDocsActionsMenuPopulator = function(renderCtx, calloutActionMenu) {
            SP.SOD.executeFunc("mquery.js", "m$", function() {
                calloutActionMenu.addAction(new CalloutAction({
                    text: GetCallOutOpenText(renderCtx.CurrentItem, renderCtx),
                    onClickCallback: function(calloutActionClickEvent, calloutAction) {
                        MyDocs_CalloutAction_Open_OnClick(calloutActionClickEvent, calloutAction, renderCtx);
                    }
                }));
                calloutActionMenu.addAction(new CalloutAction({
                    text: Strings.STS.L_CalloutShareAction,
                    onClickCallback: function(calloutActionClickEvent, calloutAction) {
                        MyDocs_CalloutAction_Share_OnClick(calloutActionClickEvent, calloutAction, renderCtx);
                    },
                    isVisibleCallback: function(calloutAction) {
                        return MyDocs_CalloutAction_Share_IsVisible(calloutAction, renderCtx);
                    }
                }));
            });
            var viewCtx = getViewCtxFromCalloutCtx(renderCtx);

            if (isSharedWithMeView(viewCtx)) {
                SP.SOD.executeFunc("Strings.js", "Strings.STS.L_ViewProperties_Text", function() {
                    var sharedWithMeMenuEntries = ConstructSharedWithMeMenuEntries(renderCtx);

                    calloutActionMenu.addAction(new CalloutAction({
                        menuEntries: sharedWithMeMenuEntries
                    }));
                });
            }
        };
        _spBodyOnLoadFunctions.push(function() {
            SP.SOD.executeFunc("mquery.js", "m$", bindSharingEvents);
        });
        myDocsCalloutCtx.Templates.Footer = function(renderCtx) {
            var viewCtx = getViewCtxFromCalloutCtx(renderCtx);
            var renderECB = !isSharedWithMeView(viewCtx);

            return CalloutRenderFooterTemplate(renderCtx, myDocsActionsMenuPopulator, renderECB);
        };
        myDocsCalloutCtx.Templates.OnPostRender = MyDocs_OnOpeningCallback;
        myDocsCalloutCtx.Templates.Item = MyDocs_CalloutRenderItemTemplate;
        myDocsCalloutCtx.ListTemplateType = myDocumentsListTemplateType;
        SPClientTemplates.TemplateManager.RegisterTemplateOverrides(myDocsCalloutCtx);
    })();
    (function() {
        var myDocsAllCtx = {};

        myDocsAllCtx.Templates = {};
        myDocsAllCtx.BaseViewID = 51;
        myDocsAllCtx.ListTemplateType = myDocumentsListTemplateType;
        SPClientTemplates.TemplateManager.RegisterTemplateOverrides(myDocsAllCtx);
    })();
    (function() {
        UpdateSharedWithMeErrorMessage = function(message) {
            var el = document.getElementById("SharedWithMeStatusMessage");

            el.innerHTML = STSHtmlEncode(message);
        };
        RefreshSharedWithMeView = function(ctxId, fieldName, ascending, offset) {
            if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                CUI.PMetrics.perfMark(CUI.PMarker.perfSPMyDocsSharedWithMeRefreshViewStart);
            SP.SOD.executeFunc("SP.js", "SP.ClientContext", function() {
                SP.SOD.executeFunc("SP.UI.DocumentsSharedWithMe.js", "Microsoft.SharePoint.Portal.UserProfiles.DocumentsSharedWithMe", function() {
                    if (typeof offset !== "number") {
                        offset = 0;
                    }
                    var cctx = SP.ClientContext.get_current();
                    var ctxT = g_ctxDict["ctx" + ctxId];
                    var wpq = ctxT.wpq;
                    var SharePointNS = Microsoft.SharePoint;
                    var listDataScript = SharePointNS.Portal.UserProfiles.DocumentsSharedWithMe.getListDataScript(cctx, wpq, fieldName, ascending, offset, 30);
                    var onListDataScriptQuerySucceeded = function(sender, args) {
                        eval(listDataScript.get_value());
                        if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                            CUI.PMetrics.perfMark(CUI.PMarker.perfSPMyDocsSharedWithMeRefreshViewEnd);
                    };
                    var onListDataScriptQueryFailed = function(sender, args) {
                        if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                            CUI.PMetrics.perfMark(CUI.PMarker.perfSPMyDocsSharedWithMeRefreshViewEnd);
                        Sys.Debug.assert(false, 'CSOM query to refresh shared with me view failed');
                    };

                    cctx.executeQueryAsync(onListDataScriptQuerySucceeded, onListDataScriptQueryFailed);
                });
            });
        };
        RenderSharedWithMeCalloutSharingInfo = function(viewCtx, ctxListItem, callout) {
            var sharingInfoHtml = '';
            var author = ctxListItem["Author"];

            if (author != null && IsArray(author) && author[0] != null) {
                var renderOptions = {
                    HasUserLink: true,
                    DefaultRender: true,
                    AllowMultipleValues: true,
                    InlineRender: true,
                    InlineRenderMoreAsLink: true
                };
                var userFieldRenderer = new UserFieldRenderer("Author");
                var userHtml = userFieldRenderer.RenderField(viewCtx, renderOptions, ctxListItem, viewCtx.ListSchema);
                var sharedWithContainsCurrentUser = false;

                for (var index in ctxListItem.SharedWithInternal) {
                    var sharedWithUser = ctxListItem.SharedWithInternal[index];

                    if (sharedWithUser.loginName.toLowerCase() === viewCtx.CurrentUserLoginName.toLowerCase()) {
                        sharedWithContainsCurrentUser = true;
                        break;
                    }
                }
                var sharedWithCount = ctxListItem.SharedWithInternal.length;
                var adjustedSharedWithCount = sharedWithContainsCurrentUser ? sharedWithCount - 1 : sharedWithCount;
                var SHARED_WITH_MORE_MAX = 30;

                if (adjustedSharedWithCount > 0) {
                    var linkText = "";

                    if (adjustedSharedWithCount > SHARED_WITH_MORE_MAX) {
                        linkText = STSHtmlEncode(Strings.STS.L_MyDocsSharedWithMeAuthorSharedWithManyOthers);
                    }
                    else if (adjustedSharedWithCount > 1) {
                        linkText = STSHtmlEncode(StBuildParam(Strings.STS.L_MyDocsSharedWithMeAuthorSharedWithOthersN, adjustedSharedWithCount.toString()));
                    }
                    else {
                        linkText = STSHtmlEncode(Strings.STS.L_MyDocsSharedWithMeAuthorSharedWithOneOther);
                    }
                    var calloutID = GetCalloutElementIDFromCallout(callout);
                    var linkId = calloutID + 'SharedWithLink';
                    var linkClass = "js-callout-sharedWithLink";
                    var linkHtml = '<a href="#" onclick="return false;" id=' + StAttrQuote(linkId) + ' class=' + StAttrQuote(linkClass) + '>' + linkText + '</a>';

                    sharingInfoHtml = StBuildParam(STSHtmlEncode(Strings.STS.L_MyDocsSharedWithMeAuthorSharedWithOthers), userHtml, linkHtml);
                }
                else {
                    sharingInfoHtml = StBuildParam(STSHtmlEncode(Strings.STS.L_MyDocsSharedWithMeAuthorShared), userHtml);
                }
            }
            return sharingInfoHtml;
        };
        getListItemByID = function(id) {
            var iid = [sharedWithMeViewCtx.ctxId, id, "0"].join(',');

            return GetListItemByIID(iid);
        };
        viewProperties = function(listItem) {
            var viewPropertiesUrl = listItem.SiteUrl + "/_layouts/15/listform.aspx" + "?PageType=4&ListId=" + listItem.ListId + "&ID=" + listItem.ListItemId + "&ContentTypeID=" + listItem.ContentTypeId;

            OpenPopUpPageWithTitle(viewPropertiesUrl, null, null, null, null);
        };
        openDocumentInBrowser = function(listItem) {
            if (isDefinedAndNotNullOrEmpty(listItem['serverurl.progid'])) {
                var navigateUrl = listItem['serverurl.progid'].substring(1);

                STSNavigate(navigateUrl);
            }
            else {
                downloadCopy(listItem);
            }
        };
        editDocumentInApplication = function(listItem) {
            editDocumentWithProgIDNoUI(listItem.FileRef, listItem['File_x0020_Type.progid'], listItem['File_x0020_Type.mapcon'], "0", listItem.SiteUrl, "0", listItem['File_x0020_Type.mapapp'], OnError, OnError);
            function OnError() {
                var navigateUrl = AddSourceToUrl(listItem.SiteUrl + "/_layouts/15/download.aspx" + "?SourceUrl=" + escapeProperly(listItem.FileRef));

                STSNavigate(navigateUrl);
            }
        };
        downloadCopy = function(listItem) {
            var navigateUrl = AddSourceToUrl(listItem.SiteUrl + "/_layouts/15/download.aspx" + "?SourceUrl=" + escapeProperly(listItem.FileRef));

            STSNavigate(navigateUrl);
        };
        openSharedWithDialog = function(listItem) {
            SP.SOD.executeFunc("sharing.js", "DisplaySharedWithDialog", function() {
                DisplaySharedWithDialog(listItem.SiteUrl, listItem.ListId, listItem.ListItemId, true);
            });
        };
        viewVersions = function(listItem) {
            var versionHistoryUrl = AddSourceToUrl(listItem.SiteUrl + "/_layouts/15/Versions.aspx" + "?List=" + listItem.ListId + "&ID=" + listItem.ListItemId + "&FileName=" + escapeProperly(listItem.FileRef));

            OpenPopUpPageWithTitle(versionHistoryUrl, null, null, null, null);
        };
        sendToOtherLocation = function(listItem) {
            var sendToUrl = AddSourceToUrl(listItem.SiteUrl + "/_layouts/15/copy.aspx" + "?SourceUrl=" + escapeProperly(listItem.FileRef));

            OpenPopUpPageWithTitle(sendToUrl, null, null, null, null);
        };
        ConstructSharedWithMeMenuEntries = function(renderCtx) {
            var listItem = renderCtx.CurrentItem;
            var sharedWithMeMenuEntries = [];

            sharedWithMeMenuEntries.push(new CalloutActionMenuEntry(Strings.STS.L_SharedWithDialogTitle, function(menuAction, menuEntryIndex) {
                openSharedWithDialog(listItem);
            }, renderCtx.imagesPath + "permissions16.png"));
            sharedWithMeMenuEntries.push(new CalloutActionMenuEntry(Strings.STS.L_ViewProperties_Text, function(menuAction, menuEntryIndex) {
                viewProperties(listItem);
            }));
            if (isDefinedAndNotNullOrEmpty(listItem['serverurl.progid'])) {
                sharedWithMeMenuEntries.push(new CalloutActionMenuEntry(Strings.STS.L_ViewInBrowser_Text, function(menuAction, menuEntryIndex) {
                    openDocumentInBrowser(listItem);
                }));
            }
            if (listItem['File_x0020_Type.progid'] != null && listItem['File_x0020_Type.progid'].length > 0) {
                sharedWithMeMenuEntries.push(new CalloutActionMenuEntry(Strings.STS.L_EditInApplication_Text, function(menuAction, menuEntryIndex) {
                    editDocumentInApplication(listItem);
                }, ctx.imagesPath + listItem["HTML_x0020_File_x0020_Type.File_x0020_Type.mapico"]));
            }
            sharedWithMeMenuEntries.push(new CalloutActionMenuEntry(Strings.STS.L_DownloadACopy_Text, function(menuAction, menuEntryIndex) {
                downloadCopy(listItem);
            }));
            sharedWithMeMenuEntries.push(new CalloutActionMenuEntry(Strings.STS.L_Versions_Text, function(menuAction, menuEntryIndex) {
                viewVersions(listItem);
            }, renderCtx.imagesPath + "versions.gif"));
            sharedWithMeMenuEntries.push(new CalloutActionMenuEntry(Strings.STS.L_Send_Text, function(menuAction, menuEntryIndex) {
                sendToOtherLocation(listItem);
            }, renderCtx.imagesPath + "sendOtherLoc.gif"));
            return sharedWithMeMenuEntries;
        };
        function SharedWithMeRenderHeaderTemplate(renderCtx) {
            var listSchema = renderCtx.ListSchema;
            var listData = renderCtx.ListData;
            var ret = [];

            ret.push(RenderTableHeader(renderCtx));
            ret.push('<thead id="');
            ret.push("js-listviewthead-" + renderCtx.wpq);
            ret.push('"><tr valign="top" class="ms-viewheadertr');
            if (listSchema.Direction == 'rtl')
                ret.push(' ms-vhrtl');
            else
                ret.push(' ms-vhltr');
            ret.push('">');
            if (listSchema.TabularView != undefined && listSchema.TabularView == "1") {
                ret.push('<th class="ms-headerCellStyleIcon ms-vh-icon" scope="col"><input type="checkbox" title="');
                ret.push(Strings.STS.L_select_deselect_all);
                ret.push('" onclick="ToggleAllItems(event,this,');
                ret.push(renderCtx.ctxId);
                ret.push(')" onfocus="EnsureSelectionHandlerOnFocus(event,this,');
                ret.push(renderCtx.ctxId);
                ret.push(')" id="cbxSelectAllItems');
                ret.push(renderCtx.ctxId);
                ret.push('" />');
            }
            var fields = listSchema ? listSchema.Field : null;
            var counter = 1;

            for (var f in fields) {
                var field = fields[f];

                field.counter = counter++;
                ret.push(SharedWithMeRenderHeaderField(renderCtx, field));
            }
            ret.push("</tr></thead>");
            return ret.join('');
        }
        function SharedWithMeRenderHeaderField(renderCtx, field) {
            var listSchema = renderCtx.ListSchema;
            var listData = renderCtx.ListData;

            if (listSchema.Filter === '1')
                return field.Filter;
            if (field.Name === 'Author')
                field.DisplayName = Strings.STS.L_MyDocsSharedWithMeAuthorColumnTitle;
            var iStr;

            iStr = '<th class="ms-headerCellStyleNormal ms-vh2" noWrap="nowrap">';
            iStr += '<div class="ms-vh-div" name="' + field.Name + '">';
            if (field.ImnHeader == 'TRUE' && listSchema.EffectivePresenceEnabled) {
                iStr += '<table cellpadding="0" cellspacing="0" dir="';
                iStr += listSchema.Direction;
                iStr += '"><tr><td class="ms-imnImgTD"><img border="0" valign="middle" height="' + SPClientTemplates.PresenceIndicatorSize.Square_10px + '" width="' + SPClientTemplates.PresenceIndicatorSize.Square_10px + '" altbase="';
                iStr += Strings.STS.L_idPresEnabled;
                iStr += '" src=' + StAttrQuote("/_layouts/15/images/blank.gif?rev=23") + ' onload="IMNRegisterHeader(event)" id="imnhdr';
                iStr += String(field.counter);
                iStr += '"/></td><td nowrap="nowrap" class="ms-imnTxtTD">';
                iStr += SharedWithMeRenderFieldHeaderCore(renderCtx, listSchema, field);
                iStr += '</td></tr></table>';
            }
            else {
                iStr += SharedWithMeRenderFieldHeaderCore(renderCtx, listSchema, field);
            }
            iStr += '</div></th>';
            return iStr;
        }
        function SharedWithMeRenderFieldHeaderCore(renderCtx, listSchema, field) {
            var iStr;

            if (field.Sortable != 'FALSE') {
                var listData = renderCtx.ListData;
                var isSortedAscending = field.Name == listData.SortField && listData.SortDir == 'ascending';
                var isSortedDescending = field.Name == listData.SortField && !isSortedAscending;

                iStr = '<a id="diidSort';
                iStr += renderCtx.ctxId;
                iStr += field.Name;
                iStr += '" onclick=';
                iStr += StAttrQuote('RefreshSharedWithMeView(' + STSScriptEncodeWithQuote(renderCtx.ctxId) + ', ' + STSScriptEncodeWithQuote(field.Name) + ', ' + (isSortedAscending ? 'false' : 'true') + '); return false;');
                iStr += ' href="#">';
                if (field.Name === "DocIcon")
                    iStr += '<img border="0" src="' + "/_layouts/15/images/icgen.gif?rev=23" + '"/>';
                else
                    iStr += STSHtmlEncode(field.DisplayName);
                iStr += '<img src="' + "/_layouts/15/images/blank.gif?rev=23" + '" class="ms-hidden" border="0" width="1" height="1" alt=';
                iStr += StAttrQuote(Strings.STS.L_OpenMenuKeyAccessible);
                iStr += '/></a>';
                if (isSortedAscending) {
                    iStr += '<img border="0" alt=';
                    iStr += StAttrQuote(Strings.STS.L_viewedit_onetidSortAsc);
                    iStr += ' src=';
                    iStr += StAttrQuote("/_layouts/15/images/sort.gif?rev=23");
                    iStr += ' />';
                }
                else if (isSortedDescending) {
                    iStr += '<img border="0" alt=';
                    iStr += StAttrQuote(Strings.STS.L_viewedit_onetidSortDesc);
                    iStr += ' src=';
                    iStr += StAttrQuote("/_layouts/15/images/rsort.gif?rev=23");
                    iStr += ' />';
                }
                iStr += '<img src=' + StAttrQuote("/_layouts/15/images/blank.gif?rev=23") + ' alt="" border="0"/>';
                if (listData.FilterFields != null && listData.FilterFields.indexOf(';' + field.Name + ';') >= 0)
                    iStr += '<img src=' + StAttrQuote("/_layouts/15/images/filter.gif?rev=23") + ' border="0" alt="" />';
                else
                    iStr += '<img src=' + StAttrQuote("/_layouts/15/images/blank.gif?rev=23") + ' border="0" alt=""/>';
            }
            else {
                iStr = STSHtmlEncode(field.DisplayName);
            }
            return iStr;
        }
        function SharedWithMeRenderFooterTemplate(renderCtx) {
            var ret = [];
            var listData = renderCtx.ListData;

            if (listData.Row.length > 0) {
                SharedWithMeRenderPaging(ret, renderCtx);
            }
            else {
                var listSchema = renderCtx.ListSchema;

                ret.push('<table class="ms-list-emptyText" dir="');
                ret.push(listSchema.Direction);
                ret.push('" border="0" width="100%">');
                ret.push('<tr id="empty-');
                ret.push(renderCtx.wpq);
                ret.push('"><td class="ms-emptyMode" colspan="99">');
                ret.push('<span id="SharedWithMeStatusMessage">');
                ret.push(STSHtmlEncode(Strings.STS.L_MyDocsSharedWithMeNoDocuments));
                ret.push('</span>');
                ret.push('</td></tr></table>');
            }
            var str = ret.join('');

            if (str.length === 0) {
                str = ' ';
            }
            return str;
        }
        function SharedWithMeRenderPaging(ret, renderCtx) {
            var listData = renderCtx.ListData;

            if (listData != null && (listData.PrevHref != null || listData.NextHref != null)) {
                var wpq = renderCtx.wpq;
                var listSchema = renderCtx.ListSchema;

                ret.push('<table width="100%" border="0" cellpadding="0" dir="ltr" cellspacing="0" class="ms-bottompaging" id="bottomPaging');
                ret.push(wpq);
                ret.push('"><tr><td class="ms-bottompagingline1"><img src=' + '"/_layouts/15/images/blank.gif?rev=23"' + ' width="1" height="1" alt=""/></td></tr>');
                ret.push('<tr><td class="ms-bottompagingline2"><img src=' + '"/_layouts/15/images/blank.gif?rev=23"' + ' width="1" height="1" alt=""/></td></tr>');
                ret.push('<tr><td class="ms-vb" id="bottomPagingCell');
                ret.push(wpq);
                ret.push('" align="center">');
                var str = [];

                str.push("<table><tr>");
                if (listData.PrevHref != null) {
                    str.push("<td><a onclick=");
                    str.push(StAttrQuote('RefreshSharedWithMeView(' + STSScriptEncodeWithQuote(renderCtx.ctxId) + ', ' + STSScriptEncodeWithQuote(listData.SortField) + ', ' + (listData.SortDir == 'descending' ? 'false' : 'true') + ', ' + listData.PrevHref + '); return false;'));
                    str.push(" href=\"#\"><img src=" + StAttrQuote("/_layouts/15/1033/images/prev.gif") + " border=\"0\" alt=");
                    str.push(StAttrQuote(Strings.STS.L_SPClientPrevious));
                    str.push("></a></td>");
                }
                str.push("<td class=\"ms-paging\">");
                str.push(listData.FirstRow);
                str.push(" - ");
                str.push(listData.LastRow);
                str.push("</td>");
                if (listData.NextHref != null) {
                    str.push("<td><a onclick=");
                    str.push(StAttrQuote('RefreshSharedWithMeView(' + STSScriptEncodeWithQuote(renderCtx.ctxId) + ', ' + STSScriptEncodeWithQuote(listData.SortField) + ', ' + (listData.SortDir == 'descending' ? 'false' : 'true') + ', ' + listData.NextHref + '); return false;'));
                    str.push(" href=\"#\"><img src=" + StAttrQuote("/_layouts/15/1033/images/next.gif") + " border=\"0\" alt=");
                    str.push(StAttrQuote(Strings.STS.L_SPClientNext));
                    str.push("></a></td>");
                }
                str.push("</tr></table>");
                var pagingStr = str.join('');
                var topPagingCell = document.getElementById("topPagingCell" + wpq);

                if (topPagingCell != null) {
                    topPagingCell.innerHTML = pagingStr;
                }
                ret.push(pagingStr);
                ret.push('</td></tr><tr><td class="ms-bottompagingline3">');
                ret.push('<img src=' + StAttrQuote("/_layouts/15/images/blank.gif?rev=23") + ' width="1" height="1" alt=""/>');
                ret.push('</td></tr>');
                ret.push('</table>');
            }
        }
        SP.SOD.executeFunc("SP.js", "SP.ClientContext", function() {
            SP.SOD.executeFunc('SP.UI.DocumentsSharedWithMe.js', 'Microsoft.SharePoint.Portal.DocumentsSharedWithMePageComponent.initialize', function() {
                ExecuteOrDelayUntilScriptLoaded(function() {
                    var SharePointNS = Microsoft.SharePoint;

                    SharePointNS.Portal.DocumentsSharedWithMePageComponent.initialize();
                }, 'SP.Ribbon.js');
            });
        });
        var myDocsSharedWithMeCtx = {};

        myDocsSharedWithMeCtx.Templates = {};
        myDocsSharedWithMeCtx.BaseViewID = sharedWithMeBaseViewID;
        myDocsSharedWithMeCtx.ListTemplateType = myDocumentsListTemplateType;
        myDocsSharedWithMeCtx.Templates.Header = SharedWithMeRenderHeaderTemplate;
        myDocsSharedWithMeCtx.Templates.Footer = SharedWithMeRenderFooterTemplate;
        SPClientTemplates.TemplateManager.RegisterTemplateOverrides(myDocsSharedWithMeCtx);
    })();
    (function() {
        function DefineSharedWithFieldWorker() {
            if (typeof ComputedFieldWorker !== 'undefined' && ComputedFieldWorker !== null) {
                ComputedFieldWorker['SharedWith'] = RenderSharedWithField;
            }
        }
        ExecuteAndRegisterBeginEndFunctions("sps\\jscript\\mysite\\sharedwithfield.jss", function() {
            ExecuteOrDelayUntilScriptLoaded(DefineSharedWithFieldWorker, 'clienttemplates.js');
        }, null, null);
        function RenderSharedWithField(renderCtx, field, listSchema) {
            return '<span class="js-sharingHint-listViewWrapper">' + getSharingHintIconHtml(renderCtx.CurrentItem, renderCtx) + '</span>';
        }
        getSharingHintIconHtml = function(ctxListItem, renderCtx) {
            if (ctxListItem.PrincipalCount == null) {
                return '';
            }
            var tooltip = '';
            var imageClass = '';
            var principalCount = ctxListItem.PrincipalCount;

            if (principalCount < 1) {
                tooltip = Strings.STS.L_SharedWithNone;
                imageClass = 'js-sharingHint-unshared';
            }
            else {
                imageClass = 'js-sharingHint-sharedDefault';
                tooltip = Strings.STS.L_SharingHintShared;
            }
            var iconHtml = '<a href="#" onclick="onSharingHintClicked(this); return false;">' + '<span class="js-sharingHint-iconContainer">' + '<img class=' + StAttrQuote(imageClass) + ' title=' + StAttrQuote(tooltip) + ' src=' + StAttrQuote(GetThemedImageUrl("spcommon.png")) + '></img></span></a>';

            return iconHtml;
        };
        onSharingHintClicked = function(elt) {
            var iid = findIIDInAncestorNode(elt);
            var ctxListItem = GetListItemByIID(iid);
            var ctxRgiid = GetCtxRgiidFromIid(iid);
            var viewCtx = ctxRgiid.ctx;

            SP.SOD.executeFunc("sharing.js", "DisplaySharedWithDialog", function() {
                var forceReadOnly = !permMaskContains(ctxListItem.PermMask, 0x0, 0x2000000);

                DisplaySharedWithDialog(viewCtx.HttpRoot, viewCtx.listName, ctxListItem.ID, forceReadOnly);
            });
        };
    })();
    notifyScriptsLoadedAndExecuteWaitingJobs("mydocs.js");
}
function MyDocs_AddToWSAStreamDw1(streamId, dataValue) {
    ExecuteOrDelayUntilScriptLoaded(function() {
        var wsa = GetWSA();

        if (wsa != null) {
            return;
        }
        wsa.createStream(streamId, 1, 1, 200);
        wsa.addToStreamDw(streamId, dataValue);
    }, "SP.ribbon.js");
}
function MyDocs_AddToWSAStreamDw2(streamId, dataValue, datavalue2) {
    ExecuteOrDelayUntilScriptLoaded(function() {
        var wsa = GetWSA();

        if (wsa != null) {
            return;
        }
        wsa.createStream(streamId, 1, 2, 200);
        wsa.addToStreamDw(streamId, dataValue, datavalue2);
    }, "SP.ribbon.js");
}
function MyDocs_CreateCalloutSqmFunctionDw1(streamId, dataValue) {
    return function(evt) {
        MyDocs_AddToWSAStreamDw1(streamId, dataValue);
    };
}
function MyDocs_CreateCalloutSqmFunctionDw2(streamId, dataValue, dataValue2) {
    return function(evt) {
        MyDocs_AddToWSAStreamDw2(streamId, dataValue, dataValue2);
    };
}
var myDocsActionsMenuPopulator;
var myDocumentsListTemplateType;
var sharedWithMeBaseViewID;
var UpdateSharedWithMeErrorMessage;
var RefreshSharedWithMeView;
var RenderSharedWithMeCalloutSharingInfo;
var ConstructSharedWithMeMenuEntries;
var getListItemByID;
var viewProperties;
var openDocumentInBrowser;
var editDocumentInApplication;
var viewVersions;
var openSharedWithDialog;
var downloadCopy;
var sendToOtherLocation;
var sharedWithMeViewCtx;
var getSharingHintIconHtml;
var onSharingHintClicked;

$_global_mydocs();
