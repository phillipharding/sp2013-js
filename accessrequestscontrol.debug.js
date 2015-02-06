function $_global_accessrequestscontrol() {
    _timeOut = 3000;
    _PermDivIdSuffix = "permDivId";
    _ReqByDivIdSuffix = "reqByDivId";
    _ReqResrcDivIdSuffix = "reqRsrcByDivId";
    _CrtdDivIdSuffix = "createdDivId";
    _StatDivIdSuffix = "statusDivId";
    _convDivIdSuffix = "convDivId";
    _permSelectIdSuffix = "PermSelect";
    _ReqByValueDivIdSuffix = "reqValueByDivId";
    _ReqResrcValueDivIdSuffix = "reqRsrcValueByDivId";
    _CrtdValueDivIdSuffix = "createdValueDivId";
    _StatValueDivIdSuffix = "statusValueDivId";
    _accRqOptSep = "#";
    _strAccRqSPGrp = "SharePoint Group";
    _strAccRqSPRlDf = "Role Definition";
    _accRqStsFldNm = "Status";
    _accRqCnvFldNm = "Conversation";
    _accRqPrmTypFldNm = "PermissionType";
    _accRqPrmLvlRqFldNm = "PermissionLevelRequested";
    _pendingRequestsBaseViewId = "1";
    _pendingInvitationsBaseViewId = "2";
    _newCommentBoxName = "newComment";
    _newCommentPstBtnName = "newCommentPostBtn";
    _calloutSetAttr = "data-calloutHandlersSetup";
    _strDiv = "div";
    _itemAttr = "iid";
    _strComments = "<div class='ms-accessRequestsControl-convViewMsg'>" + "<span class='ms-accessRequestsControl-username ms-bold ms-textSmall'>{0}" + "</span>" + "<span class='ms-textSmall'>{2}" + "</span>" + "</div>" + "<div class='ms-accReqCtl-clltDes ms-accessRequestsControl-date ms-metadata'>{1}" + "</div>";
    _strErrorComments = "<div class='ms-accessRequestsControl-convViewMsg'>" + "<span class='ms-error'>{0}" + "</span>" + "</div>";
    _strconvDivContent = "<div class=\"ms-accRqCllOt-PrgBr\">" + "<img class=\"ms-accRqCllOt-PrgBrImg\" src=\"" + "/_layouts/15/images/progress-circle-24.gif" + "\" />" + Strings.STS.L_AccReqCtlGettingMessages + "</div>" + "<div class=\"{0}\" id=\"{1}\"></div>";
    if (typeof Sys != 'undefined' && Sys != null && Sys.Application != null)
        Sys.Application.notifyScriptLoaded();
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == 'function')
        NotifyScriptLoadedAndExecuteWaitingJobs("accessrequestscontrol.js");
}
function ULShzK() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "accessRequestsControl.commentedjs";
    return o;
}
var accReqNotiId;
var g_defaultTextOnAccRqTxtBxId;
var g_defaultTextOnAccRqTxtBx;
var g_accRqMsgBtnSubmit;
var _timeOut;

function clearContents(element) {
    if (null == element)
        return;
    if (null != element.value) {
        if (element.value == g_defaultTextOnAccRqTxtBx) {
            element.value = '';
            EnsureScriptParams("core.js", "AddCssClassToElement", element, "ms-accessRequestsControl-convTextArea");
        }
    }
}
function enableSubmitBtn(element, bResetContents) {
    if (null == element)
        return;
    if (null != element.value) {
        var btn = document.getElementById(g_accRqMsgBtnSubmit);

        if (element.value == '' || element.value == g_defaultTextOnAccRqTxtBx) {
            if (bResetContents) {
                element.value = g_defaultTextOnAccRqTxtBx;
                EnsureScriptParams("core.js", "AddCssClassToElement", element, "ms-accessRequestsControl-convTextArea");
                EnsureScriptParams("core.js", "AddCssClassToElement", element, "ms-helperText");
            }
            btn.disabled = true;
        }
        else {
            btn.disabled = false;
        }
    }
}
function validateText() {
ULShzK:
    ;
    var element = document.getElementById(g_defaultTextOnAccRqTxtBxId);

    if (null == element)
        return false;
    if (element.value == g_defaultTextOnAccRqTxtBx) {
        return false;
    }
    if (element.value != null && element.value.length > 256) {
        alert(Strings.STS.L_AccReqCtlErr0);
        return false;
    }
    return true;
}
function moreClicked() {
ULShzK:
    ;
    var curUrl = window.location.toString();

    if (curUrl.indexOf('?') != -1)
        curUrl = curUrl + "&showAll=true";
    else
        curUrl = curUrl + "?showAll=true";
    STSNavigate(curUrl);
    return true;
}
function HideOldRequests(oldRequestsWpId) {
ULShzK:
    ;
    EnsureScriptParams('foldhyperlink.js', 'ToggleElementWithChangeInLinkText', oldRequestsWpId, "ms-accReq-hide", "aToggleShareLink", Strings.STS.L_HideAllSharingRequests, Strings.STS.L_ViewAllSharingRequests, null, null);
}
var g_AccReqListId;

function _UpdateStatus(listItemsSelected, newStatus, stateDetails) {
    EnsureScriptFunc("SP.js", "SP.ClientContext", function() {
    ULShzK:
        ;
        var spctx = SP.ClientContext.get_current();

        if (spctx != null) {
            var itemIds = [];

            for (var i = 0; i < listItemsSelected.length; i++) {
                itemIds.push(listItemsSelected[i].ID);
            }
            SP.AccessRequests.changeRequestStatusBulk(spctx, itemIds, newStatus);
            spctx.executeQueryAsync(GetQueryCallBackFunc(stateDetails, onUpdateAccRqItm), GetQueryCallBackFunc(stateDetails, onFail));
            accReqNotiId = addNotification(stateDetails.contactingServerMsg, true);
            setTimeout(GetClearToastFunction(accReqNotiId), _timeOut);
        }
    });
}
function GetQueryCallBackFunc(obj, CallbackFn) {
    return function(sender, args) {
    ULShzK:
        ;
        CallbackFn(sender, args, obj);
    };
}
function onUpdateAccRqItm(sender, args, state) {
    accReqNotiId = addNotification(state.successMsg, true);
    setTimeout(GetClearToastFunction(accReqNotiId), _timeOut);
    for (var context in g_ctxDict) {
        var viewCtx = g_ctxDict[context];

        RefreshListView(viewCtx);
    }
}
function onFail(sender, args, state) {
    var noti = String.format(state.failureMsg, args.get_message());

    accReqNotiId = addNotification(noti, true);
    setTimeout(GetClearToastFunction(accReqNotiId), _timeOut);
}
function RefreshListView(viewCtx) {
    if (!viewCtx || !Boolean(viewCtx.IsClientRendering))
        return;
    if (viewCtx.BaseViewID && viewCtx.BaseViewID != "Callout" && viewCtx.clvp != null) {
        var evt = new Object();

        evt.currentCtx = viewCtx;
        evt.csrAjaxRefresh = true;
        if (typeof AJAXRefreshView == "function") {
            AJAXRefreshView(evt, 1);
        }
    }
}
function GetClearToastFunction(notiId) {
ULShzK:
    ;
    return function() {
    ULShzK:
        ;
        removeNotification(notiId);
    };
}
var _PermDivIdSuffix;
var _ReqByDivIdSuffix;
var _ReqResrcDivIdSuffix;
var _CrtdDivIdSuffix;
var _StatDivIdSuffix;
var _convDivIdSuffix;
var _permSelectIdSuffix;
var _ReqByValueDivIdSuffix;
var _ReqResrcValueDivIdSuffix;
var _CrtdValueDivIdSuffix;
var _StatValueDivIdSuffix;
var _accRqOptSep;
var _strAccRqSPGrp;
var _strAccRqSPRlDf;
var _accRqStsFldNm;
var _accRqCnvFldNm;
var _accRqPrmTypFldNm;
var _accRqPrmLvlRqFldNm;
var _pendingRequestsBaseViewId;
var _pendingInvitationsBaseViewId;
var _newCommentBoxName;
var _newCommentPstBtnName;
var _calloutSetAttr;
var _strDiv;
var _itemAttr;
var _strComments;
var _strErrorComments;
var _strconvDivContent;

function GetCalloutOpeningCallbackFunc(listItemId, convDivId, isAdmin) {
ULShzK:
    ;
    return function() {
    ULShzK:
        ;
        GetConversationForItem(listItemId, convDivId, isAdmin);
    };
}
function GetConversationForItem(itemId, divId, isAdmin) {
ULShzK:
    ;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
    ULShzK:
        ;
        if (xmlhttp.readyState == 4) {
            try {
                xmlhttp.onreadystatechange = null;
            }
            catch (e) { }
            if (xmlhttp.status == 200) {
                onItemGetSuccess(divId, xmlhttp.responseText);
            }
        }
    };
    var webServerRelUrl = _spPageContextInfo.webServerRelativeUrl;

    if (webServerRelUrl.endsWith('/')) {
        webServerRelUrl = webServerRelUrl.substring(0, webServerRelUrl.length - 1);
    }
    var strGetUrl = webServerRelUrl + "/_layouts/15/accessrequests.aspx?iid=" + itemId + "&isAdminReq=" + isAdmin;

    xmlhttp.open("GET", strGetUrl, true);
    xmlhttp.send();
}
function onItemGetSuccess(divId, convJson) {
ULShzK:
    ;
    var ele = document.getElementById(divId);
    var convDivContent = "";

    if (convJson != null) {
        try {
            var arr = JSON.parse(convJson);

            if (arr.Versions.count == 0) {
                convDivContent = Strings.STS.L_AccRqMsgGtFl;
            }
            else {
                for (var itemId in arr.Versions) {
                    var itemVer = arr.Versions[itemId];

                    convDivContent = convDivContent + String.format(_strComments, itemVer.User, itemVer.Time, itemVer.Message);
                }
            }
        }
        catch (e) {
            convDivContent = Strings.STS.L_AccRqMsgGtFl;
        }
    }
    var eleToFadeIn = document.createElement(_strDiv);

    eleToFadeIn.innerHTML = convDivContent;
    ((m$(ele.parentNode)).find('.ms-accRqCllOt-PrgBr')).forEach(function(e) {
        SPAnimationUtility.BasicAnimator.FadeOut(e, function() {
        ULShzK:
            ;
            e.style.display = 'none';
        }, null);
    });
    SPAnimationUtility.BasicAnimator.ResizeContainerAndFillContent(eleToFadeIn, ele, null, false);
}
var g_CurrentWebUser;

function SubmitNewAccReqMessage(itemId, elemIdPrefix, isAdminUpdate) {
ULShzK:
    ;
    EnsureScriptFunc("SP.js", "SP.ClientContext", function() {
    ULShzK:
        ;
        var convDivId = elemIdPrefix + _convDivIdSuffix;
        var convTextAreaId = elemIdPrefix + _newCommentBoxName;
        var pstBtnId = elemIdPrefix + _newCommentPstBtnName;
        var convTextArea = document.getElementById(convTextAreaId);
        var convStr = convTextArea.value;

        if (convStr != "" && convStr != Strings.STS.L_AccRqCllUtPst) {
            accReqNotiId = addNotification(Strings.STS.L_AccRqCllNwMsg, true);
            setTimeout(GetClearToastFunction(accReqNotiId), _timeOut);
            var eleToFadeIn = document.createElement(_strDiv);
            var parentEle = document.getElementById(convDivId);

            eleToFadeIn.innerHTML = String.format(_strComments, g_CurrentWebUser, Strings.STS.L_AccRqAMmtAgo, STSHtmlEncode(convStr));
            SPAnimationUtility.BasicAnimator.ResizeContainerAndFillContent(eleToFadeIn, parentEle, null, false);
            var spctx = SP.ClientContext.get_current();

            if (isAdminUpdate) {
                if (spctx != null) {
                    var spWeb = spctx.get_web();
                    var oList = (spWeb.get_lists()).getById(g_AccReqListId);
                    var oListItem = oList.getItemById(itemId);

                    oListItem.set_item(_accRqCnvFldNm, convStr);
                    oListItem.update();
                    spctx.executeQueryAsync(function() {
                    ULShzK:
                        ;
                        NotifyNewMessageUpdate(true);
                    }, AddErrorMessageToConv(convDivId));
                }
            }
            else {
                var webServerRelUrl = _spPageContextInfo.webServerRelativeUrl;

                if (webServerRelUrl.endsWith('/')) {
                    webServerRelUrl = webServerRelUrl.substring(0, webServerRelUrl.length - 1);
                }
                var strPostUrl = webServerRelUrl + "/_layouts/15/mypermissions.aspx?isConvUpdate=1";
                var params = String.format("message={0}&itemId={1}", convStr, itemId);

                SendAjaxFormPostWithFormDigest(strPostUrl, params, function(xmlhttp) {
                    if (xmlhttp.status != 200) {
                        xmlhttp.onreadystatechange = null;
                        AddErrorMessageToConv(convDivId);
                    }
                    ;
                });
            }
            ToggleLabelDisplay(convDivId, convTextAreaId, pstBtnId, "true", "false");
        }
    });
}
function AddErrorMessageToConv(convDivId) {
ULShzK:
    ;
    return function() {
    ULShzK:
        ;
        var parentEle = document.getElementById(convDivId);

        if (Boolean(parentEle)) {
            var eleToFadeIn = document.createElement(_strDiv);

            eleToFadeIn.innerHTML = String.format(_strErrorComments, Strings.STS.L_AccRqNwMsgFl);
            SPAnimationUtility.BasicAnimator.ResizeContainerAndFillContent(eleToFadeIn, parentEle, null, false);
        }
    };
}
function NotifyNewMessageUpdate(bSuccess) {
ULShzK:
    ;
    if (bSuccess) {
        accReqNotiId = addNotification(Strings.STS.L_AccRqCllNwMsgScc, true);
    }
    else {
        accReqNotiId = addNotification(Strings.STS.L_AccRqNwMsgFl, true);
    }
    setTimeout(GetClearToastFunction(accReqNotiId), _timeOut);
}
function SetupCalloutHandlersFrPrsnlPrmsPg() {
ULShzK:
    ;
    EnsureScript("mquery.js", typeof MQueryResultSet, SetupCalloutHandlersFrPrsnlPrmsPgCore);
}
function SetupCalloutHandlersFrPrsnlPrmsPgCore() {
ULShzK:
    ;
    EnsureScript("callout.js", typeof CalloutManager, SetupCalloutHandlersFrPrsnlPrmsPgInternal);
}
function SetupCalloutHandlersFrPrsnlPrmsPgInternal() {
ULShzK:
    ;
    var elementsWithoutCalloutHandlersSetup = [];
    var tbodyElements = m$(".ms-listviewtable > tbody");

    for (var tbodyidx = 0; tbodyidx < tbodyElements.length; tbodyidx++) {
        var calloutHandlersSetup = tbodyElements[tbodyidx].getAttribute(_calloutSetAttr);

        if (calloutHandlersSetup === null || calloutHandlersSetup === "false")
            elementsWithoutCalloutHandlersSetup.push(tbodyElements[tbodyidx]);
    }
    if (elementsWithoutCalloutHandlersSetup.length <= 0)
        return;
    for (var elemidx = 0; elemidx < elementsWithoutCalloutHandlersSetup.length; elemidx++) {
        ((m$(elementsWithoutCalloutHandlersSetup[elemidx])).find('.accRqCallout')).forEach(function(e) {
            var reqForName = e.getAttribute("userName");
            var itemId = e.getAttribute(_itemAttr);
            var reqForId = e.getAttribute("reqForId");

            ((m$(e)).find('img')).forEach(function(calloutImg) {
                calloutImg.setAttribute("alt", Strings.STS.L_CalloutTargetAltTag);
            });
            var convDivId = itemId + _convDivIdSuffix;
            var strInputBox = GetCalloutConvAreaMarkup(itemId, itemId, false, reqForId);
            var strCallOtDiv = "<div class=\"ms-accReqCtl-PrsPermCllOt\">" + strInputBox + String.format(_strconvDivContent, "ms-accRqCllOt-CnvMsg", convDivId) + "</div>";
            var convAreaWidth = GetConversationCalloutWidth();
            var callout = CalloutManager.createNew({
                launchPoint: e,
                content: strCallOtDiv,
                ID: itemId,
                onOpeningCallback: GetCalloutOpeningCallbackFunc(itemId, convDivId, 0),
                title: reqForName,
                contentWidth: convAreaWidth
            });
        });
        elementsWithoutCalloutHandlersSetup[elemidx].setAttribute(_calloutSetAttr, "true");
    }
}
function GetConversationCalloutWidth() {
ULShzK:
    ;
    return 56 / 100 * 520;
}
function GetCalloutConvAreaMarkup(listItemID, listItemIID, isAdminCallout, reqForId) {
ULShzK:
    ;
    var strInputBox = "";
    var convDivId = listItemIID + _convDivIdSuffix;
    var newCommentId = listItemIID + _newCommentBoxName;
    var newCommentPstBtnId = listItemIID + _newCommentPstBtnName;
    var strToggleLabel = " \"ToggleLabelDisplay('{0}', '{1}', '{2}', '{3}', '{4}');return false;\" ";
    var strRemoveLabelOnFocus = " onfocus = " + String.format(strToggleLabel, convDivId, newCommentId, newCommentPstBtnId, "false", "true");
    var strLabelOnBlur = " onblur = " + String.format(strToggleLabel, convDivId, newCommentId, newCommentPstBtnId, "false", "false");
    var strTogglePostBtnEnable = " \"TogglePostBtnEnable('{0}', '{1}');\" ";
    var strPstBtnOnKeyUp = " onkeyup = " + String.format(strTogglePostBtnEnable, newCommentId, newCommentPstBtnId);

    strInputBox = "<div class=\"ms-accessRequestsControl-convTextAreaDiv\" >" + "<textarea rows=\"1\" " + strRemoveLabelOnFocus + strLabelOnBlur + strPstBtnOnKeyUp + " class=\"ms-accRqCllOt-CllTxtBx ms-accessRequestsControl-convTextArea\" id=\"" + newCommentId + "\" type=\"text\" name=\"" + _newCommentBoxName + "\">" + Strings.STS.L_AccRqCllUtPst + "</textarea>" + "</div>" + "<input class=\"ms-accRqCllOt-NwPstOkBtn\" type=\"button\" " + "id=\"" + newCommentPstBtnId + "\"" + "value=\"" + Strings.STS.L_AccRqCllSndPst + "\" " + "disabled=\"disabled\" " + "onclick=\"SubmitNewAccReqMessage('" + listItemID + "', '" + listItemIID + "', " + isAdminCallout.toString() + ");return false;\" />";
    return strInputBox;
}
function TogglePostBtnEnable(newCommentId, newCommentPstBtnId) {
ULShzK:
    ;
    var eleNewComment = document.getElementById(newCommentId);
    var eleNewCommentPstBtn = document.getElementById(newCommentPstBtnId);

    if (eleNewComment != null && eleNewCommentPstBtn != null) {
        if (eleNewComment.value != "") {
            eleNewCommentPstBtn.disabled = false;
        }
        else {
            eleNewCommentPstBtn.disabled = true;
        }
    }
}
function ToggleLabelDisplay(convDivId, newCommentTextAreaId, newCommentPstBtnId, bForceShow, bForceHide) {
ULShzK:
    ;
    var txtAreaWidth;
    var txtAreaHeightMax = 50;
    var txtAreaHeightMin = 30;
    var txtArea;

    if (bForceHide == "true") {
        txtArea = document.getElementById(newCommentTextAreaId);
        if (txtArea.value == Strings.STS.L_AccRqCllUtPst)
            txtArea.value = "";
        (document.getElementById(convDivId)).style.maxHeight = "160px";
        SPAnimationUtility.BasicAnimator.Resize(txtArea, txtAreaHeightMax, txtAreaWidth, function() {
        ULShzK:
            ;
            txtArea.focus();
        }, null);
    }
    else {
        txtArea = document.getElementById(newCommentTextAreaId);
        if (bForceShow == "true" || txtArea.value == '') {
            SPAnimationUtility.BasicAnimator.Resize(txtArea, txtAreaHeightMin, txtAreaWidth, function() {
            ULShzK:
                ;
                txtArea.value = Strings.STS.L_AccRqCllUtPst;
                TogglePostBtnEnable(newCommentTextAreaId, newCommentPstBtnId);
                (document.getElementById(convDivId)).style.maxHeight = "180px";
            }, null);
        }
    }
}
$_global_accessrequestscontrol();
