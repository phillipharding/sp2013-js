function $_global_groupboard() {
    g_aMenuParams = [];
    Whereabouts_Period_Renderer_InitializePrototype();
    Whereabouts_Period_Renderer.prototype.BuildUI = Whereabouts_Period_Renderer_BuildUI;
    if (typeof Sys != "undefined" && Boolean(Sys) && Boolean(Sys.Application)) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("groupboard.js");
    }
}
function ULSJrn() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "groupboard.commentedjs";
    return o;
}
var g_aMenuParams;

function GroupBoard_OnLink(elm) {
ULSJrn:
    ;
    if (!IsMenuEnabled())
        return false;
    elm.onblur = OutItem;
    elm.onkeydown = GroupBoard_PopMenu;
    var elmTmp = FindSTSMenuTable(elm, "CTXName");

    if (elmTmp == null)
        return false;
    GroupBoard_OnItem(elmTmp);
    return false;
}
function GroupBoard_StartDeferItem(elm) {
ULSJrn:
    ;
    if (elm != itemTable) {
        itemTableDeferred = elm;
        elm.onmouseout = EndDeferItem;
        elm.onclick = GroupBoard_DeferredOnItem;
        elm.oncontextmenu = GroupBoard_DeferredOnItem;
    }
}
function GroupBoard_DeferredOnItem(e) {
ULSJrn:
    ;
    var elm = itemTableDeferred;

    if (elm != null) {
        MenuHtc_hide();
        GroupBoard_OnItem(elm);
        GroupBoard_CreateMenu(e);
        return false;
    }
    return undefined;
}
function GroupBoard_OnItem(elm) {
ULSJrn:
    ;
    if (!IsMenuEnabled())
        return false;
    if (IsMenuOn()) {
        GroupBoard_StartDeferItem(elm);
        return false;
    }
    if (itemTable != null)
        OutItem();
    itemTable = elm;
    currentItemID = itemTable.getAttribute("ItemId");
    var createCtx = new Function("setupMenuContext(" + itemTable.getAttribute("CTXName") + ");");

    createCtx();
    var ctxLocal = currentCtx;

    if (browseris.nav6up)
        itemTable.className = "ms-selectedtitlealternative";
    else
        itemTable.className = "ms-selectedtitle";
    if (browseris.ie5up && !browseris.ie55up) {
        if (ctxLocal.ctxType == CTXTYPE_VIEWSELECTOR)
            return false;
        else {
            itemTable.onclick = EditMenuDefaultForOnclick;
            itemTable.oncontextmenu = EditMenuDefaultForOnclick;
        }
    }
    else {
        itemTable.onclick = GroupBoard_CreateMenu;
        itemTable.oncontextmenu = GroupBoard_CreateMenu;
    }
    itemTable.onmouseout = OutItem;
    var titleRow;

    titleRow = GetFirstChildElement(GetFirstChildElement(itemTable));
    if (titleRow != null) {
        imageCell = GetLastChildElement(titleRow);
    }
    if (ctxLocal.ctxType == CTXTYPE_VIEWSELECTOR) {
        downArrowText = Strings.STS.L_VS_DownArrow_Text;
    }
    else {
        downArrowText = Strings.STS.L_Edit_Text;
    }
    var imageTag = GetFirstChildElement(imageCell);

    imageTag.src = ctxLocal.imagesPath + "menudark.gif";
    imageTag.alt = downArrowText;
    imageTag.style.visibility = "visible";
    imageCell.style.visibility = "visible";
    imageCell.className = "ms-menuimagecell";
    return false;
}
function GroupBoard_PopMenu(e) {
ULSJrn:
    ;
    if (!IsMenuEnabled())
        return true;
    if (e == null)
        e = window.event;
    var nKeyCode;

    if (browseris.nav6up)
        nKeyCode = e.which;
    else
        nKeyCode = e.keyCode;
    if (!IsMenuOn() && (e.shiftKey && nKeyCode == 13 || e.altKey && nKeyCode == 40)) {
        onKeyPress = true;
        GroupBoard_CreateMenu(e);
        onKeyPress = false;
        return false;
    }
    else
        return true;
}
function GroupBoard_CreateMenuEx(ctxParam, container, e) {
ULSJrn:
    ;
    if (container == null)
        return undefined;
    IsMenuShown = true;
    document.body.onclick = null;
    var m;

    if (ctxParam.ctxType == CTXTYPE_VIEWSELECTOR) {
        m = CMenu("VS" + "_menu");
        if (!Boolean(m))
            return undefined;
        if (typeof AddViewSelectorMenuItems == "function")
            AddViewSelectorMenuItems(m, ctxParam);
    }
    else {
        m = CMenu(currentItemID + "_menu");
        if (!Boolean(m))
            return undefined;
        else if (ctxParam.listTemplate == 403)
            Whereabouts_AddListMenuItems(m, ctxParam);
        else
            AddListMenuItems(m, ctxParam);
        InsertFeatureMenuItems(m, ctxParam);
    }
    currentEditMenu = m;
    container.onmouseout = null;
    OMenu(m, container, null, null, -1);
    itemTable = GetSelectedElement(container, "TABLE");
    m._onDestroy = OutItem;
    e.cancelBubble = true;
    return false;
}
function GroupBoard_CreateMenu(e) {
ULSJrn:
    ;
    var ctxLocal = currentCtx;

    if (e == null)
        e = window.event;
    var srcElement = Boolean(e.srcElement) ? e.srcElement : e.target;

    if (itemTable == null || imageCell == null || onKeyPress == false && (srcElement.tagName == "A" || srcElement.parentNode.tagName == "A"))
        return undefined;
    return GroupBoard_CreateMenuEx(ctxLocal, itemTable, e);
}
function GroupBoard_DeleteItemConfirmation(stMessage) {
ULSJrn:
    ;
    return confirm(stMessage);
}
function Calltrack_Resolve(stLayoutsUrl, stListName, stItemId, stCmd) {
ULSJrn:
    ;
    if (stCmd != "Resolve" && stCmd != "Unresolve")
        return;
    var stUrl = stLayoutsUrl + "CalltrackMark.aspx";

    stUrl += "?";
    stUrl += "List=" + stListName;
    stUrl += "&";
    stUrl += "Cmd=" + stCmd;
    stUrl += "&";
    stUrl += "ID=" + stItemId;
    stUrl += "&";
    stUrl += "Source=" + GetSource();
    SubmitFormPost(stUrl);
}
function Circulation_Confirm(stLayoutsUrl, stListName, stItemId, stCmd) {
ULSJrn:
    ;
    if (stCmd != "Confirm" && stCmd != "Disconfirm")
        return;
    var stUrl = stLayoutsUrl + "CirculationConfirm.aspx";

    stUrl += "?";
    stUrl += "List=" + stListName;
    stUrl += "&";
    stUrl += "Cmd=" + stCmd;
    stUrl += "&";
    stUrl += "ID=" + stItemId;
    stUrl += "&";
    stUrl += "Source=" + GetSource();
    SubmitFormPost(stUrl);
}
function Whereabouts_SetMenuParam(stCTXId, stUserId, stCallTrackingListId, stEventListId) {
ULSJrn:
    ;
    var aMenuParam = [];

    aMenuParam[0] = stUserId;
    aMenuParam[1] = stCallTrackingListId;
    aMenuParam[2] = stEventListId;
    g_aMenuParams[stCTXId] = aMenuParam;
}
function Whereabouts_AddListMenuItems(m, ctxParam) {
ULSJrn:
    ;
    var stCTXId = ctxParam.ctxId + "";
    var aMenuParam = g_aMenuParams[stCTXId];

    if (aMenuParam == null)
        return undefined;
    var currentUserID = aMenuParam[0];
    var callTrackingListId = aMenuParam[1];
    var eventListId = aMenuParam[2];
    var stLayoutsUrl = ctxParam.HttpRoot + "/_layouts/15/";
    var strDisplayText = Strings.STS.L_Whereabouts_ViewWA_Text;
    var strSeperator = "&";

    if (ctxParam.displayFormUrl.indexOf("?") == -1)
        strSeperator = "?";
    var strAction = "EditItem2(event, '" + ctxParam.displayFormUrl + strSeperator + "ID=" + currentItemID + "&Source=" + GetSource() + "')";
    var strImagePath = ctxParam.imagesPath + "list.gif";

    CAMOpt(m, strDisplayText, strAction, strImagePath);
    strDisplayText = Strings.STS.L_Whereabouts_EditWA_Text;
    strSeperator = "&";
    if (ctxParam.editFormUrl.indexOf("?") == -1)
        strSeperator = "?";
    strAction = "EditItem2(event, '" + ctxParam.editFormUrl + strSeperator + "ID=" + currentItemID + "&Source=" + GetSource() + "')";
    strImagePath = ctxParam.imagesPath + "edititem.gif";
    CAMOpt(m, strDisplayText, strAction, strImagePath);
    if (eventListId != null && eventListId != "") {
        strDisplayText = Strings.STS.L_Whereabouts_TodaysSchedule_Text;
        strAction = "Whereabouts_TodaysSchedule(\"" + stLayoutsUrl + "\",\"" + currentUserID + "\",\"" + eventListId + "\")";
        strImagePath = ctxParam.imagesPath + "gbwwasr.gif";
        CAMOpt(m, strDisplayText, strAction, strImagePath);
    }
    if (callTrackingListId != null && callTrackingListId != "") {
        strDisplayText = Strings.STS.L_Whereabouts_PhoneCallMemo_Text;
        strAction = "Whereabouts_NewPhoneCallMemo(\"" + stLayoutsUrl + "\",\"" + currentUserID + "\",\"" + callTrackingListId + "\")";
        strImagePath = ctxParam.imagesPath + "gbwwacm.gif";
        CAMOpt(m, strDisplayText, strAction, strImagePath);
    }
    CAMSep(m);
    strDisplayText = Strings.STS.L_Whereabouts_In_Text;
    strAction = "Whereabouts_SetWhereabout(\"" + stLayoutsUrl + "\",\"" + ctxParam.listName + "\",\"" + currentItemID + "\",\"" + strDisplayText + "\");";
    strImagePath = ctxParam.imagesPath + "gbwwain.png";
    CAMOpt(m, strDisplayText, strAction, strImagePath);
    strDisplayText = Strings.STS.L_Whereabouts_OOF_Text;
    strAction = "Whereabouts_SetWhereabout(\"" + stLayoutsUrl + "\",\"" + ctxParam.listName + "\",\"" + currentItemID + "\",\"" + strDisplayText + "\");";
    strImagePath = ctxParam.imagesPath + "gbwwaoof.png";
    CAMOpt(m, strDisplayText, strAction, strImagePath);
    strDisplayText = Strings.STS.L_Whereabouts_Home_Text;
    strAction = "Whereabouts_SetWhereabout(\"" + stLayoutsUrl + "\",\"" + ctxParam.listName + "\",\"" + currentItemID + "\",\"" + strDisplayText + "\");";
    strImagePath = ctxParam.imagesPath + "gbwwahome.png";
    CAMOpt(m, strDisplayText, strAction, strImagePath);
    return true;
}
function Whereabouts_SetWhereabout(stLayoutsUrl, stListName, stItemId, stWhereabout) {
ULSJrn:
    ;
    var stUrl = stLayoutsUrl + "SetWhereabouts.aspx";

    stUrl += "?";
    stUrl += "List=" + stListName;
    stUrl += "&";
    stUrl += "Cmd=SetWhereabout";
    stUrl += "&";
    stUrl += "Whereabout=" + escapeProperly(stWhereabout);
    stUrl += "&";
    stUrl += "ID=" + stItemId;
    stUrl += "&";
    stUrl += "Source=" + GetSource();
    SubmitFormPost(stUrl);
}
function Whereabouts_TodaysSchedule(stLayoutsUrl, stUserId, stEventListId) {
ULSJrn:
    ;
    var stUrl = stLayoutsUrl + "GroupBoardRedirect.aspx";

    stUrl += "?";
    stUrl += "List=" + escapeProperly(stEventListId);
    stUrl += "&";
    stUrl += "View=2";
    stUrl += "&";
    stUrl += "Param=" + escapeProperly("CalendarPeriod=day&AccountId=" + stUserId);
    STSNavigate(stUrl);
}
function Whereabouts_NewPhoneCallMemo(stLayoutsUrl, stUserId, stCallTrackingListId) {
ULSJrn:
    ;
    var stUrl = stLayoutsUrl + "GroupBoardRedirect.aspx";

    stUrl += "?";
    stUrl += "List=" + escapeProperly(stCallTrackingListId);
    stUrl += "&";
    stUrl += "Form=NewForm";
    stUrl += "&";
    stUrl += "Param=" + escapeProperly("CallTo=" + stUserId + "&Source=" + GetSource());
    STSNavigate(stUrl);
}
function Whereabouts_Period_Renderer_InitializePrototype() {
ULSJrn:
    ;
    Whereabouts_Period_Renderer.prototype = {
        dtop: undefined,
        stFromValue: undefined,
        stUntilValue: undefined,
        stGoFromHome: undefined,
        stGoingHome: undefined,
        stPeriodSep: undefined,
        stNC: undefined,
        stNR: undefined
    };
}
function Whereabouts_Period_Renderer(dtop, stFromValue, stUntilValue, stGoFromHome, stGoingHome) {
ULSJrn:
    ;
    this.dtop = dtop;
    this.stFromValue = stFromValue;
    this.stUntilValue = stUntilValue;
    this.stGoFromHome = stGoFromHome;
    this.stGoingHome = stGoingHome;
    this.stPeriodSep = Strings.STS.L_Whereabouts_PeriodSeparator_Text;
    this.stNC = Strings.STS.L_Whereabouts_GoFromHome_Text;
    this.stNR = Strings.STS.L_Whereabouts_GoingHome_Text;
    return this;
}
function Whereabouts_Period_Renderer_BuildUI(ele) {
ULSJrn:
    ;
    var st = "";
    var dtFrom;
    var dtUntil;
    var dtFromDateOnly;
    var dtUntilDateOnly;
    var stFrom = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var stUntil = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var stGoFromHome = "&nbsp;&nbsp;&nbsp;&nbsp;";
    var stGoingHome = "&nbsp;&nbsp;&nbsp;&nbsp;";
    var dtToday = this.dtop.Today();

    dtToday = new Date();
    dtToday.setTime(dtToday.getTime() + (dtToday.getTimezoneOffset() - this.dtop.webTZOffsetMin) * DateOptions.msMinute);
    dtToday.setHours(0, 0, 0, 0);
    if (!FBlankString(this.stFromValue)) {
        dtFrom = DateOptions.ParseISODate(this.stFromValue);
        dtFrom.setTime(dtFrom.getTime() + dtFrom.getTimezoneOffset() * DateOptions.msMinute);
        dtFromDateOnly = new Date(dtFrom.getTime());
        dtFromDateOnly.setHours(0, 0, 0, 0);
    }
    if (!FBlankString(this.stUntilValue)) {
        dtUntil = DateOptions.ParseISODate(this.stUntilValue);
        dtUntil.setTime(dtUntil.getTime() + dtUntil.getTimezoneOffset() * DateOptions.msMinute);
        dtUntilDateOnly = new Date(dtUntil.getTime());
        dtUntilDateOnly.setHours(0, 0, 0, 0);
    }
    if (Boolean(dtFrom)) {
        if (dtToday.getTime() != dtFromDateOnly.getTime())
            stFrom = St2Digits(dtFrom.getMonth() + 1) + "/" + St2Digits(dtFrom.getDate());
        else
            stFrom = St2Digits(dtFrom.getHours()) + ":" + St2Digits(dtFrom.getMinutes());
    }
    if (Boolean(dtUntil)) {
        if (dtToday.getTime() != dtUntilDateOnly.getTime())
            stUntil = St2Digits(dtUntil.getMonth() + 1) + "/" + St2Digits(dtUntil.getDate());
        else
            stUntil = St2Digits(dtUntil.getHours()) + ":" + St2Digits(dtUntil.getMinutes());
    }
    if (this.stGoFromHome == "1")
        stGoFromHome = this.stNC;
    if (this.stGoingHome == "1")
        stGoingHome = this.stNR;
    st += "<table style=\"width:100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" rules=\"rows\"><tr>";
    if (Boolean(dtFromDateOnly) && Boolean(dtUntilDateOnly) && dtFromDateOnly.getTime() == dtUntilDateOnly.getTime() && dtFromDateOnly.getTime() != dtToday.getTime())
        st += "<td class=\"ms-vb\" style=\"width:" + String(5 + this.stPeriodSep.length) + "em;\">" + stFrom + "</td>";
    else {
        if (Boolean(dtFrom) || Boolean(dtUntil)) {
            st += "<td class=\"ms-vb\" style=\"width:2.5em;\"><nobr>" + stFrom + "</nobr></td>";
            st += "<td class=\"ms-vb\" style=\"text-align:center; width:" + String(this.stPeriodSep.length) + "em;\"><nobr>" + this.stPeriodSep + "</nobr></td>";
            st += "<td class=\"ms-vb\" style=\"width:2.5em;\"><nobr>" + stUntil + "</nobr></td>";
        }
        else
            st += "<td class=\"ms-vb\" style=\"width:" + String(5 + this.stPeriodSep.length) + "em;\"/>";
    }
    st += "<td class=\"ms-vb\" ><nobr>&nbsp;</nobr></td>";
    st += "<td class=\"ms-vb\" style=\"width:" + String(this.stNC.length) + "em;\" ><nobr>" + stGoFromHome + "</nobr></td>";
    st += "<td class=\"ms-vb\" style=\"width:" + String(this.stNR.length) + "em;\" ><nobr>" + stGoingHome + "</nobr></td>";
    st += "</tr></table>";
    if (Boolean(ele)) {
        var docEle = document.getElementById(ele);

        docEle.innerHtml = st;
    }
    else {
        document.write(st);
    }
}
function Whereabouts_ToggleDateTimeControl(stID, stCheckboxID) {
ULSJrn:
    ;
    var elmCheckbox = document.getElementById(stCheckboxID);

    if (Boolean(elmCheckbox)) {
        ChangeDateTimeControlState(stID, !elmCheckbox.checked);
    }
}
$_global_groupboard();
