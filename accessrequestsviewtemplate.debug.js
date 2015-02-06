function $_global_accessrequestsviewtemplate() {
    (function() {
    ULSaQO:
        ;
        var globalOverrideCtx = {};

        globalOverrideCtx.Templates = {};
        globalOverrideCtx.BaseViewID = 'Callout';
        globalOverrideCtx.ListTemplateType = 160;
        globalOverrideCtx.Templates.Footer = function(renderCtx) {
            return accessReq_CalloutRenderFooterTemplate(renderCtx, AccessReqActionsMenuPopulator);
        };
        globalOverrideCtx.Templates.Item = accessReq_CalloutRenderItemTemplate;
        globalOverrideCtx.Templates.Header = accessReq_CalloutRenderHeaderTemplate;
        SPClientTemplates.TemplateManager.RegisterTemplateOverrides(globalOverrideCtx);
        function AccessReqActionsMenuPopulator(renderCtx, calloutActionMenu) {
            var rCtx = renderCtx;
            var listItem = renderCtx.CurrentItem;
            var isInvitation = listItem["IsInvitation.value"];

            if (rCtx.clvp.ctx.BaseViewID == _pendingRequestsBaseViewId && isInvitation == "0") {
                var approvalStrings = {
                    contactingServerMsg: Strings.STS.L_AccReqSendingApproval,
                    successMsg: Strings.STS.L_AccReqApprovalSuccess,
                    failureMsg: Strings.STS.L_AccReqApprovalFail
                };
                var denialStrings = {
                    contactingServerMsg: Strings.STS.L_AccReqSendingDenial,
                    successMsg: Strings.STS.L_AccReqDenialSuccess,
                    failureMsg: Strings.STS.L_AccReqDenialFail
                };

                calloutActionMenu.addAction(new CalloutAction({
                    text: Strings.STS.L_AccRqCllUtActApprv,
                    isEnabledCallback: GetIsEnabledCallbackFunc(listItem["ID"], this, renderCtx),
                    disabledTooltip: Strings.STS.L_AccRqWrnPerm,
                    onClickCallback: GetCalloutActionOnClickCallback(renderCtx, listItem["ID"], 1, approvalStrings)
                }));
                calloutActionMenu.addAction(new CalloutAction({
                    text: Strings.STS.L_AccRqCllUtActDcl,
                    onClickCallback: GetCalloutActionOnClickCallback(renderCtx, listItem["ID"], 3, denialStrings)
                }));
                var strId = renderCtx.CurrentItem.ID + _permSelectIdSuffix;
                var ele = document.getElementById(strId);

                ele.onchange = function() {
                ULSaQO:
                    ;
                    calloutActionMenu.render();
                    return false;
                };
            }
            else if (rCtx.clvp.ctx.BaseViewID == _pendingInvitationsBaseViewId && isInvitation == "1") {
                var resendStrings = {
                    contactingServerMsg: Strings.STS.L_AccReqResendingInv,
                    successMsg: Strings.STS.L_AccReqResendingInvSuccess,
                    failureMsg: Strings.STS.L_AccReqResendingInvFail
                };
                var revokeStrings = {
                    contactingServerMsg: Strings.STS.L_AccReqRevokingInv,
                    successMsg: Strings.STS.L_AccReqRevokingInvSuccess,
                    failureMsg: Strings.STS.L_AccReqRevokingInvFail
                };

                calloutActionMenu.addAction(new CalloutAction({
                    text: Strings.STS.L_AccRqCllUtActRsnd,
                    onClickCallback: GetCalloutActionOnClickCallback(renderCtx, listItem["ID"], 0, resendStrings)
                }));
                calloutActionMenu.addAction(new CalloutAction({
                    text: Strings.STS.L_AccRqCllUtActRvk,
                    onClickCallback: GetCalloutActionOnClickCallback(renderCtx, listItem["ID"], 5, revokeStrings)
                }));
            }
        }
        function GetIsEnabledCallbackFunc(iid, curCalloutAction, renderCtx) {
            return function() {
            ULSaQO:
                ;
                var permEle = document.getElementById(iid + _permSelectIdSuffix);
                var permStr = permEle.value;
                var permArr = permStr.split(_accRqOptSep);
                var permissionLevel = permArr[1];

                if (!g_accReqCSRBridgeSPGroups[permissionLevel] && !g_accReqCSRBridgeSPIndvPerms[permissionLevel]) {
                    return false;
                }
                else {
                    return true;
                }
            };
        }
        function accessReq_CalloutRenderFooterTemplate(renderCtx, calloutActionMenuPopulator) {
            if (calloutActionMenuPopulator == undefined || calloutActionMenuPopulator == null) {
                calloutActionMenuPopulator = CalloutOnPostRenderTemplate;
            }
            var calloutID = GetCalloutElementIDFromRenderCtx(renderCtx);

            AddPostRenderCallback(renderCtx, function() {
            ULSaQO:
                ;
                var calloutActionMenu = new CalloutActionMenu(calloutID + '-actions');

                calloutActionMenuPopulator(renderCtx, calloutActionMenu);
                calloutActionMenu.render();
            });
            return Callout.GenerateDefaultFooter(calloutID, null);
        }
        function accessReq_CalloutRenderHeaderTemplate(renderCtx) {
            var calloutID = GetCalloutElementIDFromRenderCtx(renderCtx);
            var reqForUser = renderCtx.CurrentItem["ReqForUser"];
            var title = STSHtmlEncode(renderCtx.CurrentItem["RequestedForDisplayName"]);

            if (reqForUser.length > 0) {
                title = STSHtmlEncode(renderCtx.CurrentItem["ReqForUser"][0].title);
            }
            return Callout.GenerateDefaultHeader(calloutID, title, null, true);
        }
        function accessReq_CalloutRenderItemTemplate(renderCtx) {
            var listItem = renderCtx.CurrentItem;
            var calloutID = GetCalloutElementIDFromRenderCtx(renderCtx);
            var ret = [];

            ret.push(GetCalloutContent(renderCtx, listItem, calloutID));
            var isInvitation = listItem["IsInvitation.value"] == "1";
            var callout = GetCalloutFromRenderCtx(renderCtx);

            if (isInvitation) {
                var convAreaWidth = GetConversationCalloutWidth();

                callout.set({
                    contentWidth: convAreaWidth
                });
            }
            else
                callout.set({
                    contentWidth: 520
                });
            if (!isInvitation) {
                GetCalloutOpeningCallbackFunc(listItem["ID"], listItem["ID"] + _convDivIdSuffix, 1)();
            }
            return ret.join('');
        }
        function GetAllPermissionStringsForSelectCtrl(iid, listItem, baseViewId, calloutActionMenuId) {
        ULSaQO:
            ;
            var strId = iid + _permSelectIdSuffix;
            var str = "";
            var arrGroupIds;

            if (listItem["RequestedListItemId"] != (SP.Guid.get_empty()).toString("B")) {
                str = GetAllPermissionStringsForSelectCtrlCore(iid, listItem, baseViewId, calloutActionMenuId, null);
            }
            else if (listItem["RequestedListId"] != (SP.Guid.get_empty()).toString("B")) {
                str = GetAllPermissionStringsForSelectCtrlCore(iid, listItem, baseViewId, calloutActionMenuId, null);
            }
            else {
                arrGroupIds = g_accReqCSRBridgeSPSecToGrps[listItem["RequestedWebId"]];
                str = GetAllPermissionStringsForSelectCtrlCore(iid, listItem, baseViewId, calloutActionMenuId, arrGroupIds);
            }
            return str;
        }
        function GetAllPermissionStringsForSelectCtrlCore(iid, listItem, baseViewId, calloutActionMenuId, arrGroupIds) {
            var selectedId = listItem["PermissionLevelRequested"];
            var strId = iid + _permSelectIdSuffix;
            var strDisabled = "";
            var groupName;
            var groupId;
            var selectedStr;

            if (baseViewId != _pendingRequestsBaseViewId && baseViewId != _pendingInvitationsBaseViewId) {
                strDisabled = "disabled=\"true\"";
            }
            var str = "<select " + strDisabled + " id=\"" + strId + "\" " + "class=\"ms-accRqCllOt-PrmCmbBx\">";

            if (!g_accReqCSRBridgeSPGroups[selectedId] && !g_accReqCSRBridgeSPIndvPerms[selectedId]) {
                str = str + "<option selected=\"yes\" name=\"permissionLevelNotSelected\" title =\"" + Strings.STS.L_AccessRequestPermissionFieldDisplayError + "\" value = \"" + Strings.STS.L_AccessRequestPermissionFieldDisplayError + "\">" + Strings.STS.L_AccessRequestPermissionFieldDisplayError + "</option>";
            }
            if (Boolean(arrGroupIds) && arrGroupIds.length > 0) {
                for (var grIdx in arrGroupIds) {
                    var gr = arrGroupIds[grIdx];

                    groupName = g_accReqCSRBridgeSPGroups[gr];
                    groupId = _strAccRqSPGrp + _accRqOptSep + gr;
                    if (gr == selectedId) {
                        selectedStr = "selected=\"yes\"";
                    }
                    else {
                        selectedStr = "";
                    }
                    str = str + "<option " + selectedStr + " name=\"" + groupName + "\" title = \"" + groupName + "\" value = \"" + groupId + "\">" + groupName + "</option>";
                }
            }
            for (var roleId in g_accReqCSRBridgeSPIndvPerms) {
                groupName = g_accReqCSRBridgeSPIndvPerms[roleId];
                groupId = _strAccRqSPRlDf + _accRqOptSep + roleId;
                if (roleId == selectedId) {
                    selectedStr = "selected=\"yes\"";
                }
                else {
                    selectedStr = "";
                }
                str = str + "<option " + selectedStr + " name=\"" + groupName + "\" title = \"" + groupName + "\" value = \"" + groupId + "\">" + groupName + "</option>";
            }
            str = str + "</select>";
            return str;
        }
        function GetCalloutContent(renderCtx, listItem, calloutID) {
        ULSaQO:
            ;
            var listItemId = listItem["ID"];
            var rCtx = renderCtx;
            var approvedByTitle = "";

            if (listItem["ApprovedBy"]) {
                approvedByTitle = listItem["ApprovedBy"][0].title;
            }
            var strStatus = GetAccessRequestStatusString(listItem);
            var convDivId = listItemId + _convDivIdSuffix;
            var strInputBox = "";
            var convDivContent = "";
            var strTitleStyle = "\"ms-accReqCtl-clltTtl ms-textLarge ms-soften\"";

            if (rCtx.clvp.ctx.BaseViewID == _pendingRequestsBaseViewId) {
                strInputBox = "<div id=\"" + listItemId + "convTitle" + "\" class=" + strTitleStyle + ">" + Strings.STS.L_AccReqList_Conversation + "</div>";
                strInputBox = strInputBox + "<div>" + GetCalloutConvAreaMarkup(listItem["ID"], listItemId, true, null) + "</div>";
                convDivContent = String.format(_strconvDivContent, "ms-accRqCllOt-CnvMsg", convDivId);
            }
            else {
                convDivContent = String.format(_strconvDivContent, "ms-accRqCllOt-CnvMsgTall", convDivId);
            }
            var isInvitation = listItem["IsInvitation.value"];
            var styleClass = "";
            var lfClassName = "";

            if (isInvitation == "0") {
                styleClass = "ms-accRqCllOt-CllMnDv";
                lfClassName = "ms-accRqCllOt-CllLfDv";
            }
            else {
                styleClass = "ms-accReqCtl-PrsPermCllOt";
                lfClassName = "";
            }
            var calloutContent = "<div class=\"" + styleClass + "\">" + "<div class='" + lfClassName + "'>" + "<div id=\"" + listItemId + _PermDivIdSuffix + "\" class=" + strTitleStyle + ">" + Strings.STS.L_AccRqCllUtPermTtl + "</div>" + "<div class='ms-accReqCtl-clltDes'>" + GetAllPermissionStringsForSelectCtrl(listItemId, listItem, rCtx.clvp.ctx.BaseViewID, calloutID + '-actions') + "</div>" + "<div id=\"" + listItemId + _ReqByDivIdSuffix + "\" class=" + strTitleStyle + ">" + Strings.STS.L_AccRqCllUtRqBy + "</div>" + "<div id=\"" + listItemId + _ReqByValueDivIdSuffix + "\" class='ms-accReqCtl-clltDes'>" + STSHtmlEncode(listItem["ReqByUser"][0].title) + "</div>" + "<div id=\"" + listItemId + _ReqResrcDivIdSuffix + "\" class=" + strTitleStyle + ">" + Strings.STS.L_AccRqCllUtRqFor + "</div>" + "<div id=\"" + listItemId + _ReqResrcValueDivIdSuffix + "\" class='ms-accReqCtl-clltDes'>" + STSHtmlEncode(listItem["RequestedObjectTitle"]) + "</div>" + "<div id=\"" + listItemId + _CrtdDivIdSuffix + "\" class=" + strTitleStyle + ">" + Strings.STS.L_AccRqCllUtCrtd + "</div>" + "<div id=\"" + listItemId + _CrtdValueDivIdSuffix + "\" class='ms-accReqCtl-clltDes'>" + listItem["Created"] + "</div>" + "<div id=\"" + listItemId + _StatDivIdSuffix + "\" class=" + strTitleStyle + ">" + Strings.STS.L_AccRqCllUtSts + "</div>" + "<div id=\"" + listItemId + _StatValueDivIdSuffix + "\" class='ms-accReqCtl-clltDes'>" + strStatus + "</div>" + "</div>";

            if (listItem["IsInvitation.value"] == "0") {
                calloutContent = calloutContent + "<div class='ms-accRqCllOt-CllRtDv'>" + strInputBox + convDivContent + "</div>";
            }
            calloutContent = calloutContent + "</div>";
            return calloutContent;
        }
        function GetCalloutActionOnClickCallback(renderCtx, itmId, newStatus, stateStrings) {
        ULSaQO:
            ;
            return function(calloutActionClickEvent, calloutAction) {
            ULSaQO:
                ;
                CalloutAction_Click(calloutAction, renderCtx, itmId, newStatus, stateStrings);
            };
        }
        function CalloutAction_Click(calloutAction, renderCtx, itemId, newStatus, stateStrings) {
            EnsureScriptFunc("SP.js", "SP.ClientContext", function() {
            ULSaQO:
                ;
                var permEle = document.getElementById(itemId + _permSelectIdSuffix);

                if (permEle != null) {
                    var baseViewId = renderCtx.clvp.ctx.BaseViewID;
                    var isAccessRequest = baseViewId == _pendingRequestsBaseViewId;

                    if (isAccessRequest || baseViewId == _pendingInvitationsBaseViewId) {
                        var permStr = permEle.value;
                        var permArr = permStr.split(_accRqOptSep);

                        if (permArr[0] == _strAccRqSPGrp || permArr[0] == _strAccRqSPRlDf || newStatus != 1) {
                            var permissionLevel = permArr[1];
                            var convStr = null;

                            if (isAccessRequest) {
                                convStr = (document.getElementById(itemId + _newCommentBoxName)).value;
                                if (convStr == Strings.STS.L_AccRqCllUtPst) {
                                    convStr = "";
                                }
                            }
                            var spctx = SP.ClientContext.get_current();

                            if (spctx != null) {
                                SP.AccessRequests.changeRequestStatus(spctx, itemId, newStatus, convStr, permArr[0], permissionLevel);
                                spctx.executeQueryAsync((function(stateStr) {
                                ULSaQO:
                                    ;
                                    return function(sender, args) {
                                        onUpdateAccRqItm(sender, args, stateStr);
                                    };
                                })(stateStrings), (function(stateStr) {
                                ULSaQO:
                                    ;
                                    return function(sender, args) {
                                        onFailAccRqItm(sender, args, stateStr);
                                    };
                                })(stateStrings));
                                CloseCalloutAndAddNotification(permEle, stateStrings.contactingServerMsg);
                            }
                        }
                        else {
                            var notificationHtml = Strings.STS.L_AccRqWrnPerm + permArr[0];

                            CloseCalloutAndAddNotification(permEle, notificationHtml);
                        }
                    }
                }
            });
        }
        function CloseCalloutAndAddNotification(permEle, notificationHtml) {
        ULSaQO:
            ;
            var nId = addNotification(notificationHtml, true);
            var curCallout = CalloutManager.getFromCalloutDescendant(permEle);

            if (curCallout != null) {
                curCallout.close(true);
            }
            setTimeout(GetClearToastFunction(nId), _timeOut);
        }
        function onFailAccRqItm(sender, args, stateStrings) {
            var nId = addNotification(stateStrings.failureMsg, true);

            setTimeout(GetClearToastFunction(nId), _timeOut);
        }
        var globalOverrideCtx2 = {};

        globalOverrideCtx2.Templates = {};
        globalOverrideCtx2.ListTemplateType = 160;
        globalOverrideCtx2.Templates.Fields = {
            'User': {
                'View': accessReq_UserRenderUserFieldTemplate
            },
            'StatusDisp': {
                'View': accessReq_StatusDispRenderTemplate
            },
            'PermissionDisp': {
                'View': PermissionDispRenderTemplate
            },
            'ObjectRequestedTitleDisp': {
                'View': ObjectRequestedTitleDispRenderTemplate
            },
            'RequestDate': {
                'View': PermissionReqDateRenderTemplate
            }
        };
        function GetAccessRequestStatusString(listItem) {
            var retVal = "";
            var statusCode = listItem.Status;
            var isInvitation = listItem["IsInvitation.value"];

            switch (statusCode) {
            case "0":
                if ("1" == isInvitation) {
                    var expiresDate = new Date(listItem["Expires"]);
                    var today = new Date();

                    today = new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds(), today.getUTCMilliseconds());
                    var msLeftToExpire = Math.round(expiresDate.getTime() - today.getTime());

                    if (msLeftToExpire < 0) {
                        retVal = retVal + Strings.STS.L_AccessRequestStatusExpired;
                    }
                    else {
                        var oneDayInMs = 24 * 60 * 60 * 1000;
                        var daysLeftToExpire = Math.round(msLeftToExpire / oneDayInMs);

                        retVal = retVal + Strings.STS.L_AccessRequestStatusPending;
                        if (daysLeftToExpire > 0) {
                            retVal = retVal + String.format(Strings.STS.L_AccessRequestStatusExpiresInDays, daysLeftToExpire);
                        }
                        else {
                            var oneHourInMs = 1 * 60 * 60 * 1000;
                            var hoursLeftToExpire = Math.round(msLeftToExpire / oneHourInMs);

                            if (hoursLeftToExpire > 0) {
                                retVal = retVal + String.format(Strings.STS.L_AccessRequestStatusExpiresInHours, hoursLeftToExpire);
                            }
                            else {
                                var oneMinInMs = 1 * 60 * 1000;
                                var minsLeftToExpire = Math.round(msLeftToExpire / oneMinInMs);

                                if (minsLeftToExpire > 0) {
                                    retVal = retVal + Strings.STS.L_AccessRequestStatusExpiresInAnyMinNow;
                                }
                            }
                        }
                    }
                }
                else {
                    retVal = retVal + Strings.STS.L_AccessRequestStatusPending;
                }
                break;
            case "1":
                var approvedByTitle = Boolean(listItem["ApprovedBy"]) ? STSHtmlEncode(listItem["ApprovedBy"][0].title) : '';

                retVal = retVal + String.format(Strings.STS.L_AccessRequestStatusApproved, approvedByTitle);
                break;
            case "2":
                var acceptedByTitle = Boolean(listItem["ReqForUser"]) ? STSHtmlEncode(listItem["ReqForUser"][0].title) : '';

                retVal = retVal + String.format(Strings.STS.L_AccessRequestStatusAccepted, acceptedByTitle);
                break;
            case "3":
                retVal = retVal + Strings.STS.L_AccessRequestStatusDenied;
                break;
            case "4":
                retVal = retVal + Strings.STS.L_AccessRequestStatusExpired;
                break;
            case "5":
                retVal = retVal + Strings.STS.L_AccessRequestStatusRevoked;
                break;
            }
            return retVal;
        }
        function ObjectRequestedTitleDispRenderTemplate(renderCtx, field, listItem, listSchema) {
            var retValue;
            var ret = [];
            var requestedObjectUrl = listItem.RequestedObjectUrl;
            var requestedObjectTitle = STSHtmlEncode(listItem.RequestedObjectTitle);

            ret.push("<a onfocus=\"OnLink(this)\" href=\"");
            ret.push(requestedObjectUrl);
            ret.push("\">");
            ret.push(requestedObjectTitle);
            ret.push("</a>");
            retValue = ret.join('');
            return retValue;
        }
        function PermissionReqDateRenderTemplate(renderCtx, field, listItem, listSchema) {
            var dateRenderer = new DateTimeFieldRenderer("RequestDate");

            listItem["RequestDate.FriendlyDisplay"] = listItem["Created.FriendlyDisplay"];
            return dateRenderer.RenderField(renderCtx, field, listItem, listSchema);
        }
        function PermissionDispRenderTemplate(renderCtx, field, listItem, listSchema) {
            var retValue;
            var ret = [];

            if (Boolean(g_accReqCSRBridgeSPGroups) && Boolean(g_accReqCSRBridgeSPIndvPerms) && listItem.PermissionType.length > 0) {
                var permissionLevelRequested = listItem.PermissionLevelRequested;
                var permissionType = listItem.PermissionType;
                var strPermissionDisplay = Strings.STS.L_AccessRequestPermissionFieldDisplayError;

                if (permissionType === "SharePoint Group") {
                    if (g_accReqCSRBridgeSPGroups[permissionLevelRequested] != null) {
                        strPermissionDisplay = g_accReqCSRBridgeSPGroups[permissionLevelRequested];
                    }
                }
                else if (permissionType === "Role Definition") {
                    if (g_accReqCSRBridgeSPIndvPerms[permissionLevelRequested] != null) {
                        strPermissionDisplay = g_accReqCSRBridgeSPIndvPerms[permissionLevelRequested];
                    }
                }
                ret.push("<span>");
                ret.push(strPermissionDisplay);
                ret.push("</span>");
            }
            else {
                ret.push("<span>");
                ret.push(Strings.STS.L_CantDisplayAccessRequestPermissionField);
                ret.push("</span>");
            }
            retValue = ret.join('');
            return retValue;
        }
        function accessReq_StatusDispRenderTemplate(renderCtx, field, listItem, listSchema) {
            var retValue;
            var ret = [];

            ret.push(GetAccessRequestStatusString(listItem));
            ret.push("<span>");
            retValue = ret.join('');
            ret.push("</span>");
            return retValue;
        }
        function accessReq_UserRenderUserFieldTemplate(renderCtx, field, listItem, listSchema) {
            if ("1" == listItem["IsInvitation.value"]) {
                var curListItem = renderCtx.CurrentItem;
                var email = curListItem["RequestedForDisplayName"];
                var userData = {
                    "ID": "0",
                    "Editor": [{
                        "title": email,
                        "email": email,
                        "CustomDetail": ""
                    }]
                };
                var fieldSchemaData = {
                    "Field": [{
                        "Name": "Editor",
                        "FieldType": "User",
                        "WithPictureDetail": "1",
                        "PictureSize": "Size_36px",
                        "Type": "User"
                    }],
                    "PresenceAlt": Strings.STS.L_UserFieldNoUserPresenceAlt,
                    "EffectivePresenceEnabled": "1"
                };
                var dummyRenderCtx = new ContextInfo();

                dummyRenderCtx.Templates = {};
                dummyRenderCtx.Templates['Fields'] = {};
                return spMgr.RenderFieldByName(dummyRenderCtx, "Editor", userData, fieldSchemaData);
            }
            else {
                var reqForRenderer = new UserFieldRenderer("ReqForUser");

                return reqForRenderer.RenderField(renderCtx, field, listItem, listSchema);
            }
        }
        SPClientTemplates.TemplateManager.RegisterTemplateOverrides(globalOverrideCtx2);
        var globalOverrideCtx4 = {};

        globalOverrideCtx4.Templates = {};
        globalOverrideCtx4.BaseViewID = 1;
        globalOverrideCtx4.ListTemplateType = 160;
        globalOverrideCtx4.Templates.View = function(renderCtx) {
            return RenderAccessRequestsView(renderCtx, Strings.STS.AccReqList_PendReqView);
        };
        SPClientTemplates.TemplateManager.RegisterTemplateOverrides(globalOverrideCtx4);
        var globalOverrideCtx5 = {};

        globalOverrideCtx5.Templates = {};
        globalOverrideCtx5.BaseViewID = 2;
        globalOverrideCtx5.ListTemplateType = 160;
        globalOverrideCtx5.Templates.View = function(renderCtx) {
            return RenderAccessRequestsView(renderCtx, Strings.STS.AccReqList_PendInvView);
        };
        SPClientTemplates.TemplateManager.RegisterTemplateOverrides(globalOverrideCtx5);
        var globalOverrideCtx3 = {};

        globalOverrideCtx3.Templates = {};
        globalOverrideCtx3.BaseViewID = 3;
        globalOverrideCtx3.ListTemplateType = 160;
        globalOverrideCtx3.Templates.View = function(renderCtx) {
            return RenderAccessRequestsView(renderCtx, Strings.STS.AccReqList_HistoryView);
        };
        SPClientTemplates.TemplateManager.RegisterTemplateOverrides(globalOverrideCtx3);
        function RenderAccessRequestsView(renderCtx, webPartTitle) {
            if (renderCtx.Templates.Body != '' && renderCtx.Templates.Header != '') {
                return "<h2 class='ms-uppercase'>" + webPartTitle + "</h2>" + RenderViewTemplate(renderCtx);
            }
            else {
                return RenderViewTemplate(renderCtx);
            }
        }
    })();
    if (typeof Sys != 'undefined' && Sys != null && Sys.Application != null)
        Sys.Application.notifyScriptLoaded();
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == 'function')
        NotifyScriptLoadedAndExecuteWaitingJobs("accessrequestsviewtemplate.js");
}
function ULSaQO() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "accessRequestsviewtemplate.commentedjs";
    return o;
}
var g_accReqCSRBridgeSPSecToGrps;
var g_accReqCSRBridgeSPGroups;
var g_accReqCSRBridgeSPIndvPerms;

$_global_accessrequestsviewtemplate();
