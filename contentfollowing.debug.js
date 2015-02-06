function $_global_contentfollowing() {
    RegisterSod("userprofile", "/_layouts/15/SP.UserProfiles.js");
    (function() {
        var resizeTimer;
        var DATAID_CONTENTFOLLOWSOURCE = 9427;
        var DATAID_CONTENTSTOPFOLLOWINGSOURCE = 9428;
        var FOLLOWEDCONTENT_SOURCE = 3;
        var FollowedContentType = {
            Document: "0x01FC00A1B06EC3D1F64BC6A842CF614178A523",
            Site: "0x01FC00533CDB8F4EAE447D941948EFAE32BFD5"
        };
        var ContentFollowingRenderer = {
            renderFollowButton: function(listItem, strRowId) {
                var itemUrl = listItem["Url"];
                var itemTitle = listItem["Title"];
                var strClickScript = "ContentFollowing_StopFollowing('" + STSScriptEncode(itemUrl) + "', '" + STSScriptEncode(itemTitle) + "', this); return false;";
                var strTitleAttr = String.format(Strings.STS.L_StopFollowingTitle, itemTitle);
                var strElemId = ContentFollowingHelpers.getElementId(listItem, "contentFollowingButton_");
                var strFollowButton = ["<a href=\"#\" onclick=", ContentFollowingHelpers.encodeAttributeValue(strClickScript), " title=", ContentFollowingHelpers.encodeAttributeValue(strTitleAttr), " id=", ContentFollowingHelpers.encodeAttributeValue(strElemId), " class=\"ms-contentFollowing-followButton\">", "<span class=\"ms-contentFollowing-followingSpan\">", "<img class=\"ms-contentFollowing-followingImg\" src=", ContentFollowingHelpers.encodeAttributeValue(GetThemedImageUrl("socialcommon.png")), ">", "</span>", "</a>"].join("");

                return strFollowButton;
            },
            renderFollowCommand: function(listItem, strRowId) {
                var itemUrl = listItem["Url"];
                var itemTitle = ContentFollowingHelpers.getItemTitle(listItem);
                var strClickScript = "ContentFollowing_StopFollowing('" + STSScriptEncode(itemUrl) + "', '" + STSScriptEncode(itemTitle) + "', this); return false;";
                var strTitleAttr = String.format(Strings.STS.L_StopFollowingTitle, itemTitle);
                var strElemId = ContentFollowingHelpers.getElementId(listItem, "contentFollowingButton_");
                var strFollowButton = ["<a href=\"#\" class=\"ms-secondaryCommandLink\" onclick=", ContentFollowingHelpers.encodeAttributeValue(strClickScript), " title=", ContentFollowingHelpers.encodeAttributeValue(strTitleAttr), " id=", ContentFollowingHelpers.encodeAttributeValue(strElemId), ">", "<span>", STSHtmlEncode(Strings.STS.L_StopFollowingCommand), "</span>", "</a>"].join("");

                return strFollowButton;
            },
            renderItemTitle: function(listItem, renderCtx) {
                var itemUrl = listItem["Url"];
                var itemId = listItem["ID"];
                var itemApp = listItem["File_x0020_Type.mapapp"];
                var strItemName = ContentFollowingHelpers.getItemName(listItem, renderCtx);
                var strElemId = ContentFollowingHelpers.getElementId(listItem, "contentFollowingLink_");
                var strItemTitle = ["<span class=\"ms-contentFollowing-itemTitle\">", "<a href=", ContentFollowingHelpers.encodeAttributeValue(itemUrl), " class=\"js-contentFollowing-itemLink ms-textLarge ms-recs-titleLink\" id=", ContentFollowingHelpers.encodeAttributeValue(strElemId), " itemid=", ContentFollowingHelpers.encodeAttributeValue(itemId), " app=", ContentFollowingHelpers.encodeAttributeValue(itemApp), ">", ContentFollowingHelpers.encodeTextValue(strItemName), "</a>", "</span>"].join("");

                return strItemTitle;
            },
            renderItemIcon: function(listItem) {
                var itemUrl = listItem["Url"];
                var itemId = listItem["ID"];
                var itemIcon = listItem["IconUrl"];

                if (itemIcon == "") {
                    if (ContentFollowingHelpers.verifyItemType(listItem, FollowedContentType.Site))
                        itemIcon = "/_layouts/15/images/siteIcon.png?rev=23";
                    else
                        return "";
                }
                var strItemTitle = ContentFollowingHelpers.getItemTitle(listItem);
                var strElemId = ContentFollowingHelpers.getElementId(listItem, "contentFollowingIcon_");
                var strItemIcon = ["<a href=", ContentFollowingHelpers.encodeAttributeValue(itemUrl), " id=", ContentFollowingHelpers.encodeAttributeValue(strElemId), " itemid=", ContentFollowingHelpers.encodeAttributeValue(itemId), " class=\"ms-contentFollowing-itemIcon js-contentFollowing-itemLink\">", "<img border=\"0\" title=", ContentFollowingHelpers.encodeAttributeValue(strItemTitle), " src=", ContentFollowingHelpers.encodeAttributeValue(itemIcon), "/>", "</a>"].join("");

                return strItemIcon;
            },
            renderItemUrl: function(listItem) {
                var itemUrl = listItem["Url"];
                var strElemId = ContentFollowingHelpers.getElementId(listItem, "contentFollowingUrl_");
                var strItemUrl = ["<div class=\"js-contentFollowing-itemUrlDiv\" id=", ContentFollowingHelpers.encodeAttributeValue(strElemId), " url=", ContentFollowingHelpers.encodeAttributeValue(itemUrl), ">", "<span class=\"ms-metadata ms-contentFollowing-itemUrl\"></span>", "<input type=\"text\" readonly=\"readonly\" class=\"ms-metadata ms-contentFollowing-itemUrl ms-contentFollowing-itemFullUrl\" />", "</div>"].join("");

                return strItemUrl;
            },
            renderItemUrls: function() {
                (m$(".js-contentFollowing-itemUrlDiv")).forEach(function(elm) {
                    var spanElm = elm.childNodes[0];
                    var inputElm = elm.childNodes[1];

                    if (spanElm == null || inputElm == null)
                        return;
                    var itemUrl = elm.getAttribute("url");

                    if (typeof decodeURIComponent != "undefined")
                        itemUrl = decodeURIComponent(itemUrl);
                    var truncatedUrl = ContentFollowingHelpers.getTruncatedUrl(spanElm, itemUrl, elm.offsetWidth);

                    inputElm.value = truncatedUrl;
                    inputElm.style.visibility = "visible";
                    inputElm.style.borderColor = "transparent";
                    inputElm.style.backgroundColor = "transparent";
                    spanElm.innerHTML = "";
                    (m$(inputElm)).mouseup(function(evt) {
                        if (m$.isFunction(evt.preventDefault)) {
                            evt.preventDefault();
                        }
                    });
                    (m$(inputElm)).focus(function(evt) {
                        inputElm.value = encodeURI(itemUrl);
                        inputElm.select();
                    });
                    (m$(inputElm)).blur(function(evt) {
                        inputElm.value = truncatedUrl;
                    });
                });
            },
            renderItemUrlsDefer: function() {
                if (resizeTimer != null)
                    clearTimeout(resizeTimer);
                resizeTimer = setTimeout(ContentFollowingRenderer.renderItemUrls, 150);
            },
            renderLinkOnclick: function(renderCtx) {
                var listData = renderCtx.ListData;

                if (m$.isUndefinedOrNull(listData))
                    return;
                var listItems = listData.Row;

                if (m$.isUndefinedOrNull(listItems))
                    return;
                (m$(".js-contentFollowing-itemLink")).forEach(function(elm) {
                    var itemId = elm.getAttribute("itemid");

                    for (var i = 0; i < listItems.length; i++) {
                        var listItem = listItems[i];

                        if (m$.isUndefinedOrNull(listItem))
                            continue;
                        if (listItem["ID"] == itemId) {
                            var itemUrl = listItem["Url"];

                            (m$(elm)).click(function(evt) {
                                ContentFollowingEventCallbacks.navigateToItem(itemUrl, evt, elm, listItem, renderCtx);
                                if (m$.isFunction(evt.preventDefault)) {
                                    evt.preventDefault();
                                }
                            });
                            break;
                        }
                    }
                });
            },
            renderSitesAttractMode: function(renderCtx) {
                var listSchema = renderCtx.ListSchema;
                var result = ["<div class=\"ms-attractMode-Background\">", "<div class=\"ms-attractMode-Wrapper\">", "<div class=\"ms-attractMode-Cell\">", "<img src=\"", "/_layouts/15/images/AttractModeFollowStar.128x128x32.png?rev=23", "\" class=\"ms-attractMode-Icon\" />", "</div>", "<div class=\"ms-attractMode-Spacer ms-attractMode-Cell\"></div>", "<div class=\"ms-attractMode-Cell\">", "<span class=\"ms-attractMode ms-attractMode-Text\">", STSHtmlEncode(listSchema.NoListItem), "</span>", "</div></div></div>"];

                return result.join('');
            }
        };
        var ContentFollowingHelpers = {
            getItemTitle: function(listItem) {
                var itemTitle = STSHtmlDecode(listItem["Title"]);

                return itemTitle;
            },
            getItemName: function(listItem, renderCtx) {
                var itemTitle = STSHtmlDecode(listItem["Title"]);

                if (renderCtx.BaseViewID == 1 && itemTitle != null) {
                    var index = itemTitle.lastIndexOf(".");

                    itemTitle = index >= 0 ? itemTitle.substring(0, index) : itemTitle;
                }
                return itemTitle;
            },
            getElementId: function(listItem, idRoot) {
                var itemId = listItem["ID"];

                return idRoot + itemId;
            },
            getTruncatedUrl: function(element, itemUrl, maxWidth) {
                var STR_ELLIPSIS = "...";
                var ELLIPSIS_LENGTH = STR_ELLIPSIS.length;
                var CHARS_TO_TRUNCATE_PER_ITERATION = 2 + ELLIPSIS_LENGTH;

                element.innerHTML = itemUrl;
                while (element.offsetWidth > maxWidth) {
                    itemUrl = ContentFollowingHelpers.safeTruncateString(itemUrl, itemUrl.length - CHARS_TO_TRUNCATE_PER_ITERATION) + STR_ELLIPSIS;
                    element.innerHTML = itemUrl;
                }
                return element.innerHTML;
            },
            safeTruncateString: function(str, numChars) {
                var lastChar = str.charCodeAt(numChars - 1);

                if ((lastChar & SURROGATE_6_BIT) === HIGH_SURROGATE_BITS) {
                    numChars = numChars - 1;
                }
                return str.substr(0, numChars);
            },
            setButtonStateToWaiting: function(elm) {
                elm.title = "";
                elm.onclick = function() {
                };
                var img = ContentFollowingHelpers.getImgElementFromButton(elm);

                if (Boolean(img)) {
                    img.src = "/_layouts/15/images/loading.gif?rev=23";
                    img.className = "";
                }
            },
            setButtonStateToFollowed: function(itemUrl, itemTitle, elm) {
                elm.title = String.format(Strings.STS.L_StopFollowingTitle, itemTitle);
                var img = ContentFollowingHelpers.getImgElementFromButton(elm);

                if (Boolean(img)) {
                    img.src = GetThemedImageUrl("socialcommon.png");
                    img.className = "ms-contentFollowing-followingImg";
                }
                else {
                    var span = elm.firstChild;

                    if (Boolean(span)) {
                        span.innerHTML = STSHtmlEncode(Strings.STS.L_StopFollowingCommand);
                    }
                }
                elm.onclick = function() {
                    ContentFollowingEventCallbacks.stopFollowing(itemUrl, itemTitle, elm);
                    return false;
                };
            },
            setButtonStateToNotFollowed: function(itemUrl, itemTitle, elm) {
                elm.title = String.format(Strings.STS.L_StartFollowingTitle, itemTitle);
                var img = ContentFollowingHelpers.getImgElementFromButton(elm);

                if (Boolean(img)) {
                    img.src = GetThemedImageUrl("socialcommon.png");
                    img.className = "ms-contentFollowing-notFollowingImg";
                }
                else {
                    var span = elm.firstChild;

                    if (Boolean(span)) {
                        span.innerHTML = STSHtmlEncode(Strings.STS.L_StartFollowingCommand);
                    }
                }
                elm.onclick = function() {
                    ContentFollowingEventCallbacks.startFollowing(itemUrl, itemTitle, elm);
                    return false;
                };
            },
            getImgElementFromButton: function(elm) {
                var img = elm.firstChild;

                if (img != null)
                    img = img.firstChild;
                if (img.nodeName.toUpperCase() != "IMG") {
                    img = null;
                }
                return img;
            },
            displayNavigateFailedDialog: function(dialogTitle, dialogText) {
                var innerHtmlStr = ["<div style=\"padding-bottom: 24px;\">", ContentFollowingHelpers.encodeTextValue(dialogText), "</div>", "<div style=\"text-align: right;\">", "<button id=\"ms-OkBtnDismissDlg\" class=\"ms-ButtonHeightWidth\" onclick=\"SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK, null);\">", ContentFollowingHelpers.encodeTextValue(Strings.STS.L_CloseButtonCaption), "</button>", "</div>"].join("");
                var divElem = document.createElement("div");

                divElem.className = "s4-dlg-err";
                divElem.innerHTML = innerHtmlStr;
                var dlgOptions = {
                    html: divElem,
                    title: dialogTitle,
                    allowMaximize: false
                };
                var dlg = new SP.UI.ModalDialog.showModalDialog(dlgOptions);
                var okButton = document.getElementById("ms-OkBtnDismissDlg");

                if (okButton != null)
                    okButton.focus();
            },
            verifyItemType: function(listItem, verifyType) {
                var itemType = listItem["ContentTypeId"];

                return itemType.indexOf(verifyType) === 0;
            },
            encodeAttributeValue: function(strValue) {
                if (m$.isUndefinedOrNull(strValue))
                    strValue = "";
                return StAttrQuote(strValue);
            },
            encodeTextValue: function(strValue) {
                if (m$.isUndefinedOrNull(strValue))
                    strValue = "";
                return STSHtmlEncode(strValue);
            }
        };
        var ContentFollowingEventCallbacks = {
            startFollowing: function(itemUrl, itemTitle, elm) {
                if (elm == null || typeof elm == "undefined")
                    return;
                ContentFollowingHelpers.setButtonStateToWaiting(elm);
                SP.SOD.executeFunc("SP.js", "SP.ClientContext", function() {
                    SP.SOD.executeFunc("userprofile", "SP.UserProfiles.ProfileLoader", function() {
                        var fcmCtx = SP.ClientContext.get_current();
                        var profile = (SP.UserProfiles.ProfileLoader.getProfileLoader(fcmCtx)).getUserProfile();
                        var fcm = profile.get_followedContent();

                        fcmCtx.load(profile);
                        fcm.follow(itemUrl, null);
                        fcmCtx.executeQueryAsync(function() {
                            ContentFollowingHelpers.setButtonStateToFollowed(itemUrl, itemTitle, elm);
                            if (typeof GetWSA != "undefined") {
                                var wsa = GetWSA();

                                if (typeof wsa != "undefined" && wsa != null)
                                    wsa.setDw(DATAID_CONTENTFOLLOWSOURCE, FOLLOWEDCONTENT_SOURCE);
                            }
                        }, function(sender, args) {
                            ContentFollowingHelpers.setButtonStateToNotFollowed(itemUrl, itemTitle, elm);
                        });
                    });
                });
            },
            stopFollowing: function(itemUrl, itemTitle, elm) {
                ContentFollowingHelpers.setButtonStateToWaiting(elm);
                if (elm == null || typeof elm == "undefined")
                    return;
                SP.SOD.executeFunc("SP.js", "SP.ClientContext", function() {
                    SP.SOD.executeFunc("userprofile", "SP.UserProfiles.ProfileLoader", function() {
                        var fcmCtx = SP.ClientContext.get_current();
                        var profile = (SP.UserProfiles.ProfileLoader.getProfileLoader(fcmCtx)).getUserProfile();
                        var fcm = profile.get_followedContent();

                        fcmCtx.load(profile);
                        fcm.stopFollowing(itemUrl);
                        fcmCtx.executeQueryAsync(function() {
                            ContentFollowingHelpers.setButtonStateToNotFollowed(itemUrl, itemTitle, elm);
                            if (typeof GetWSA != "undefined") {
                                var wsa = GetWSA();

                                if (typeof wsa != "undefined" && wsa != null)
                                    wsa.setDw(DATAID_CONTENTSTOPFOLLOWINGSOURCE, FOLLOWEDCONTENT_SOURCE);
                            }
                        }, function() {
                            ContentFollowingHelpers.setButtonStateToFollowed(itemUrl, itemTitle, elm);
                        });
                    });
                });
            },
            navigateToItem: function(url, evt, elm, listItem, renderCtx) {
                SP.SOD.executeFunc("SP.js", "SP.ClientContext", function() {
                    SP.SOD.executeFunc("userprofile", "SP.UserProfiles.ProfileLoader", function() {
                        var fcmCtx = SP.ClientContext.get_current();
                        var profile = (SP.UserProfiles.ProfileLoader.getProfileLoader(fcmCtx)).getUserProfile();
                        var fcm = profile.get_followedContent();
                        var updatedItem = fcm.findAndUpdateFollowedItem(url);

                        fcmCtx.executeQueryAsync(function() {
                            if (m$.isDefinedAndNotNull(updatedItem)) {
                                if (ContentFollowingHelpers.verifyItemType(listItem, FollowedContentType.Site)) {
                                    window.location.href = updatedItem.get_url();
                                }
                                else {
                                    elm.href = updatedItem.get_url();
                                    listItem["File_x0020_Type.url"] = "FALSE";
                                    listItem["FSObjType"] = "0";
                                    listItem["File_x0020_Type.progid"] = updatedItem.get_fileTypeProgid();
                                    listItem["serverurl.progid"] = encodeURI(updatedItem.get_serverUrlProgid());
                                    var listSchema = renderCtx.ListSchema;

                                    smartOpenFileOrFolderFromHref(evt, elm, listItem, listSchema);
                                }
                            }
                            else {
                                STSNavigate(url);
                            }
                        }, function() {
                            STSNavigate(url);
                        });
                    });
                });
                return false;
            }
        };
        var ContentFollowingTemplates = {
            viewTemplate: function(renderCtx) {
                var arrView = [renderCtx.RenderHeader(renderCtx), renderCtx.RenderBody(renderCtx), renderCtx.RenderFooter(renderCtx)];

                return arrView.join("");
            },
            headerTemplate: function(renderCtx) {
                var listSchema = renderCtx.ListSchema;
                var listData = renderCtx.ListData;
                var tableClassName = m$.isUndefinedOrNull(listData.Row) ? "ms-emptyView" : "ms-listviewtable ms-contentFollowing-table";
                var arrHead = ["<table class=", ContentFollowingHelpers.encodeAttributeValue(tableClassName), " ms-core-tableNoSpace ms-fillBox\" id=", ContentFollowingHelpers.encodeAttributeValue(renderCtx.listName + "-" + listSchema.View), ">"];

                if (renderCtx.BaseViewID == 2) {
                    var headerClass = "ms-webpart-titleText ms-contentFollowing-titleArea";

                    if (listData.Row.length > 0) {
                        headerClass += " ms-contentFollowing-titleAreaBorder";
                    }
                    arrHead.push("<thead><tr><td colspan=\"6\" class=\"" + headerClass + "\">" + ContentFollowingHelpers.encodeTextValue(Strings.STS.L_FollowedSites_Title) + "</span></td></tr></thead>");
                }
                return arrHead.join("");
            },
            footerTemplate: function(renderCtx) {
                var ret = [];

                if (renderCtx.BaseViewID == 2 && renderCtx.ListData.Row.length == 0) {
                    ret.push(ContentFollowingRenderer.renderSitesAttractMode(renderCtx));
                }
                else {
                    RenderEmptyText(ret, renderCtx);
                }
                RenderPaging(ret, renderCtx);
                return ret.join('');
            },
            itemTemplate: function(renderCtx) {
                var listItem = renderCtx.CurrentItem;
                var listSchema = renderCtx.ListSchema;
                var strRowId = ContentFollowingHelpers.getElementId(listItem, "contentFollowingRow_");
                var arrBody = [];
                var rowIndex = -1;
                var len = renderCtx.ListData.Row.length;

                for (var i = 0; i < len; i++) {
                    if (listItem === renderCtx.ListData.Row[i]) {
                        rowIndex = i;
                        break;
                    }
                }
                var cellClass = "ms-contentFollowing-itemCell";

                if (rowIndex % 2 == 0) {
                    arrBody.push("<tr>");
                    cellClass += " ms-contentFollowing-itemFirstCell";
                }
                arrBody = arrBody.concat(["<td colspan=\"3\" class=\"" + cellClass + "\" iid=", ContentFollowingHelpers.encodeAttributeValue(renderCtx.ctxId + "," + listItem.ID + "," + listItem.FSObjType), ">", "<div class=\"ms-contentFollowing-itemDiv\">", "<table class=\"ms-core-tableNoSpace ms-fillBox\">", "<tr id=", ContentFollowingHelpers.encodeAttributeValue(strRowId), ">"]);
                if (renderCtx.BaseViewID == 1) {
                    arrBody = arrBody.concat(["<td class=\"ms-contentFollowing-itemIconCell\">", ContentFollowingRenderer.renderItemIcon(listItem), "</td>"]);
                }
                arrBody = arrBody.concat(["<td valign=\"top\">", "", ContentFollowingRenderer.renderItemTitle(listItem, renderCtx), "<br />", ContentFollowingRenderer.renderItemUrl(listItem), ContentFollowingRenderer.renderFollowCommand(listItem, strRowId), "</td>", "</tr>", "</table>", "</div>", "</td>"]);
                if (rowIndex % 2 == 1 || rowIndex + 1 == len) {
                    arrBody.push("</tr>");
                }
                return arrBody.join("");
            },
            postRender: function(renderCtx) {
                ContentFollowingRenderer.renderItemUrls();
                ContentFollowingRenderer.renderLinkOnclick(renderCtx);
                (m$(window)).resize(ContentFollowingRenderer.renderItemUrlsDefer);
                var cellId = "MSOZoneCell_WebPart" + renderCtx.wpq;
                var element = document.getElementById(cellId);

                if (Boolean(element)) {
                    element.setAttribute("onmouseup", "");
                }
            }
        };
        var CreateContentFollowingViewTemplate = function(viewId) {
            var contentFollowingCtx = {};

            contentFollowingCtx.Templates = {};
            contentFollowingCtx.BaseViewID = viewId;
            contentFollowingCtx.ListTemplateType = 550;
            contentFollowingCtx.Templates.View = ContentFollowingTemplates.viewTemplate;
            contentFollowingCtx.Templates.Header = ContentFollowingTemplates.headerTemplate;
            contentFollowingCtx.Templates.Item = ContentFollowingTemplates.itemTemplate;
            contentFollowingCtx.Templates.Footer = ContentFollowingTemplates.footerTemplate;
            contentFollowingCtx.Templates.OnPostRender = ContentFollowingTemplates.postRender;
            SPClientTemplates.TemplateManager.RegisterTemplateOverrides(contentFollowingCtx);
        };

        CreateContentFollowingViewTemplate(1);
        CreateContentFollowingViewTemplate(2);
        window.ContentFollowing_StopFollowing = ContentFollowingEventCallbacks.stopFollowing;
    })();
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("contentfollowing.js");
    }
}
$_global_contentfollowing();
