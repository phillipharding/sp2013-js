function $_global_non__ie() {
    MSOLayout_inDesignMode = false;
    MSOLayout_currentDragMode = "";
    MSOLayout_zoneDragOver = null;
    MSOLayout_cellToDrop = 0;
    MSOLayout_oDropLocation = undefined;
    MSOLayout_iBar = document.createElement != null ? document.createElement("div") : null;
    MSOLayout_horzZoneIBar = undefined;
    MSOLayout_vertZoneIBar = undefined;
    MSOLayout_horzBodyZoneIBar = undefined;
    MSOLayout_vertBodyZoneIBar = undefined;
    MSOLayout_moveObject = undefined;
    MSOLayout_maintainOriginalZone = 0;
    MSOLayout_topObject = document.body;
    MSOLayout_galleryView = false;
    MSOLayout_unsavedChanges = [];
    MSOLayout_FormSubmit = null;
    MSOLayout_FormSubmitHref = null;
    MenuWebPartID = null;
    MenuWebPart = null;
    MSOConn_SourceWpNode = null;
    MSOConn_TargetWpNode = null;
    MSOConn_XformInfo1 = null;
    MSOConn_XformInfo2 = null;
    MSOConn_AspXformInfo = null;
    MSOConn_ConnCancelled = false;
    MSOConn_MultipleTargetGroups = false;
    MSOConn_TargetGroupNode = null;
    MSOConn_SourceGroupNode = null;
    MSOConn_BackButtonClicked = false;
    MSOTlPn_prevBuilder = null;
    MSOTlPn_prevWidth = 0;
    MSOTlPn_prevHeight = 0;
    MSOTlPn_shownViewChangeWarning = false;
    MSOWebPartPage_hideNextBeforeUnload = false;
    MSOWebPartPage_partDeleted = "";
    MSOChangeInToolPaneWidth = 120;
    browserScript = {
        MSOLayout_ChangeLayoutMode: _MSOLayout_ChangeLayoutMode,
        MSOWebPartPage_OpenMenu: MSOWebPartPage_OpenMenu,
        MSOLayout_ToggleView: MSOLayout_ToggleView,
        MSOMenu_KeyboardClick: MSOMenu_KeyboardClick,
        MSOTlPn_ShowToolPane2Wrapper: MSOTlPn_ShowToolPane2Wrapper,
        MSOWebPartPage_SetupFixedWidthWebParts: MSOWebPartPage_SetupFixedWidthWebParts
    };
    if (typeof Sys != "undefined" && Sys != null && typeof Sys.Application != "undefined" && Sys.Application != null && typeof Sys.Application.notifyScriptLoaded == "function") {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs != "undefined") {
        NotifyScriptLoadedAndExecuteWaitingJobs("non_ie.js");
    }
}
function ULSjLO() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "non_ie.commentedjs";
    return o;
}
function MSOLayout_MinimizeRestoreDownLevel(webPartGUID, chromeState, source) {
ULSjLO:
    ;
    var newChromeState = chromeState == "Minimized" ? "1" : "0";

    if (typeof MSOWebPartPageFormName != "undefined") {
        document.forms[MSOWebPartPageFormName].MSOLayout_LayoutChanges.value = webPartGUID + ",chromeState," + newChromeState;
        document.forms[MSOWebPartPageFormName].MSOWebPartPage_PostbackSource.value = source;
    }
    __doPostBack(MSOWebPartPageFormName, '');
}
function MSOLayout_RemoveWebPartDownLevel(webPartGUID, isSelected) {
ULSjLO:
    ;
    document.forms[MSOWebPartPageFormName].MSOLayout_LayoutChanges.value = webPartGUID + ",isIncluded,False";
    document.forms[MSOWebPartPageFormName].MSOWebPartPage_PostbackSource.value = 22;
    if (isSelected) {
        MSOTlPn_ShowToolPane2('Browse');
    }
    else {
        __doPostBack(MSOWebPartPageFormName, '');
    }
}
function GetUTFCode(UniCode) {
ULSjLO:
    ;
    var BitLen = 11;
    var ByteLen = 2;
    var UTFCode = "";
    var FirstByte = 0xC0;
    var i;

    while (UniCode >= 1 << BitLen) {
        FirstByte = FirstByte >> 1;
        BitLen += 5;
        ByteLen++;
    }
    for (i = 0; i < ByteLen; i++) {
        var Code = 0x80 | UniCode & 0x3f;

        UniCode = UniCode >>> 6;
        if (i == ByteLen - 1) {
            Code |= FirstByte;
        }
        UTFCode = "%" + (Code.toString(16)).toUpperCase() + UTFCode;
    }
    return UTFCode;
}
function URLEncode(strURL) {
    var strSpecialUrl = " <>\"#%{}|^~[]`'&?+=";
    var strEncode = "";
    var i;
    var chUrl;
    var iCode;

    strURL += "";
    for (i = 0; i < strURL.length; i++) {
        chUrl = strURL.charAt(i);
        iCode = chUrl.charCodeAt(0);
        if (iCode <= 0x7F) {
            if (strSpecialUrl.indexOf(chUrl) != -1) {
                strEncode += "%" + (iCode.toString(16)).toUpperCase();
            }
            else {
                strEncode += chUrl;
            }
        }
        else {
            strEncode += GetUTFCode(iCode);
        }
    }
    return strEncode;
}
var MSOLayout_inDesignMode;
var MSOLayout_currentDragMode;
var MSOLayout_zoneDragOver;
var MSOLayout_cellToDrop;
var MSOLayout_oDropLocation;
var MSOLayout_iBar;
var MSOLayout_horzZoneIBar;
var MSOLayout_vertZoneIBar;
var MSOLayout_horzBodyZoneIBar;
var MSOLayout_vertBodyZoneIBar;
var MSOLayout_moveObject;
var MSOLayout_maintainOriginalZone;
var MSOLayout_topObject;
var MSOLayout_galleryView;
var MSOLayout_unsavedChanges;
var MSOLayout_FormSubmit;
var MSOLayout_FormSubmitHref;
var MenuWebPartID;
var MenuWebPart;
var MSOConn_SourceWpNode;
var MSOConn_TargetWpNode;
var MSOConn_XformInfo1;
var MSOConn_XformInfo2;
var MSOConn_AspXformInfo;
var MSOConn_ConnCancelled;
var MSOConn_MultipleTargetGroups;
var MSOConn_TargetGroupNode;
var MSOConn_SourceGroupNode;
var MSOConn_BackButtonClicked;

function MSOConn_DialogFeatures() {
ULSjLO:
    ;
    if (typeof window.showModalDialog != "undefined")
        return "dialogHeight:210px;dialogWidth:460px;center:yes;help:no;status:no;scroll:no;resizable:no;";
    return "resizable=no,status=no,scrollbars=no,menubar=no,directories=no,location=no,width=460,height=210";
}
function MSOLayout_RemoveQueryParametersFromUrl(url) {
    url = RemoveQueryParameterFromUrl(url, "[p|P][a|A][g|G][e|E][v|V][i|I][e|E][w|W]");
    url = RemoveQueryParameterFromUrl(url, "[tT][oO][[oO][lL][pP][aA][nN][eE][vV][iE][eE][wW]");
    url = RemoveQueryParameterFromUrl(url, "[dD][iI][sS][pP][lL][aA][yY][mM][oO][dD][eE]");
    return url;
}
function MSOLayout_hasAttribute(element, attributeName) {
    if (typeof element.hasAttribute == "function" || typeof element.hasAttribute == "object") {
        return element.hasAttribute(attributeName);
    }
    return false;
}
function MSOLayout_GetTopElement() {
ULSjLO:
    ;
    return document.getElementById('s4-workspace') != null ? document.getElementById('s4-workspace') : document.body;
}
function MSOLayout_GetParentWPZoneDiv(WPCell) {
    var currentObject;

    for (currentObject = WPCell; true; currentObject = currentObject.parentNode) {
        if (currentObject == document.body)
            return 0;
        if (MSOLayout_hasAttribute(currentObject, 'zoneid'))
            break;
    }
    return currentObject;
}
function _MSOLayout_ChangeLayoutMode(bPersonalView, bExitDesignMode) {
ULSjLO:
    ;
    var url;

    if (typeof MSOWebPartPageFormName == 'undefined') { }
    if (bPersonalView != null) {
        MSOLayout_SaveChanges();
        url = document.forms[MSOWebPartPageFormName].action;
        url = RemoveQueryParameterFromUrl(url, "[p|P][a|A][g|G][e|E][v|V][i|I][e|E][w|W]");
        url = RemoveQueryParameterFromUrl(url, "[tT][oO][[oO][lL][pP][aA][nN][eE][vV][iE][eE][wW]");
        url = RemoveQueryParameterFromUrl(url, "[dD][iI][sS][pP][lL][aA][yY][mM][oO][dD][eE]");
        url = RemoveQueryParameterFromUrl(url, "InitialTabId");
        url = RemoveQueryParameterFromUrl(url, "VisibilityContext");
        var hashIndex = url.indexOf("#");
        var hashData = null;

        if (hashIndex >= 0) {
            hashData = url.substring(hashIndex);
            url = url.substring(0, hashIndex);
        }
        if (url.indexOf("?") < 0)
            url += "?";
        else
            url += "&";
        if (bPersonalView == true) {
            document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value = 1;
            document.forms[MSOWebPartPageFormName].MSOSPWebPartManager_DisplayModeName.value = 'Design';
            url += "PageView=Personal";
            if (FV4UI()) {
                url += "&InitialTabId=Ribbon.WebPartPage&VisibilityContext=WSSWebPartPage";
            }
            document.forms[MSOWebPartPageFormName].action = url;
        }
        else {
            document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value = 1;
            document.forms[MSOWebPartPageFormName].MSOSPWebPartManager_DisplayModeName.value = 'Design';
            url += "PageView=Shared";
            if (FV4UI()) {
                url += "&InitialTabId=Ribbon.WebPartPage&VisibilityContext=WSSWebPartPage";
            }
            document.forms[MSOWebPartPageFormName].action = url;
        }
        if (Boolean(hashData))
            url += hashData;
    }
    else if (bExitDesignMode != null && bExitDesignMode) {
        url = document.forms[MSOWebPartPageFormName].action;
        url = RemoveQueryParameterFromUrl(url, "[tT][oO][[oO][lL][pP][aA][nN][eE][vV][iE][eE][wW]");
        url = RemoveQueryParameterFromUrl(url, "[dD][iI][sS][pP][lL][aA][yY][mM][oO][dD][eE]");
        document.forms[MSOWebPartPageFormName].MSOWebPartPage_Shared.value = "";
        document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value = 0;
        document.forms[MSOWebPartPageFormName].MSOSPWebPartManager_DisplayModeName.value = 'Browse';
        document.forms[MSOWebPartPageFormName].MSOSPWebPartManager_ExitingDesignMode.value = "true";
        document.forms[MSOWebPartPageFormName].action = url;
    }
    document.forms[MSOWebPartPageFormName].MSOSPWebPartManager_EndWebPartEditing.value = 'true';
    __doPostBack(MSOWebPartPageFormName, '');
}
function MSOLayout_ToggleLayoutMode() {
ULSjLO:
    ;
    var inDesignMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;

    if (inDesignMode != 1) {
        document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value = 1;
        document.forms[MSOWebPartPageFormName].MSOSPWebPartManager_DisplayModeName.value = 'Design';
    }
    else {
        document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value = 0;
        document.forms[MSOWebPartPageFormName].MSOSPWebPartManager_DisplayModeName.value = 'Browse';
    }
    __doPostBack(MSOWebPartPageFormName, '');
}
function MSOLayout_ToggleView(bPersonalView) {
ULSjLO:
    ;
    var url = document.forms[MSOWebPartPageFormName].action;

    url = MSOLayout_RemoveQueryParametersFromUrl(url);
    document.forms[MSOWebPartPageFormName].action = url;
    if (bPersonalView == true) {
        document.forms[MSOWebPartPageFormName].MSOWebPartPage_Shared.value = "false";
    }
    else {
        document.forms[MSOWebPartPageFormName].MSOWebPartPage_Shared.value = "true";
    }
    document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value = 0;
    document.forms[MSOWebPartPageFormName].MSOSPWebPartManager_DisplayModeName.value = 'Browse';
    __doPostBack(MSOWebPartPageFormName, '');
}
function MSOLayout_SetupLayoutFlags() {
ULSjLO:
    ;
    MSOLayout_inDesignMode = true;
    MSOLayout_topObject = document.getElementById('MSOTlPn_WebPartPageDiv') != null ? document.getElementById('MSOTlPn_WebPartPageDiv') : document.body;
}
function MSOLayout_GetRealOffset(StartingObject, OffsetType, EndParent) {
    var realValue = 0;

    if (!Boolean(EndParent))
        EndParent = document.body;
    var endOffsetParent = EndParent.offsetParent;
    var documentBody = document.body;

    for (var currentObject = StartingObject; Boolean(currentObject) && currentObject != endOffsetParent && currentObject != documentBody; currentObject = currentObject.offsetParent) {
        if (OffsetType.charAt(0) == 'L')
            realValue += currentObject.offsetLeft;
        else if (OffsetType.charAt(0) == 'T')
            realValue += currentObject.offsetTop;
    }
    return realValue;
}
function MSOLayout_IsWikiEditMode() {
ULSjLO:
    ;
    var elem = document.getElementById("_wikiPageMode");

    if (!Boolean(elem)) {
        return false;
    }
    return elem.value == "Edit";
}
function MSOLayout_MoveWebPartStart(e, ZoneWPCell, WebPartCaption, Gallery) {
    if (window.event == null || window.event.button != 1)
        return;
    MSOLayout_currentDragMode = 'move';
    document.selection.empty();
    MSOLayout_galleryView = Gallery == true ? true : false;
    MSOLayout_CreateDragObject(WebPartCaption);
    MSOLayout_CreateIBar();
    MSOLayout_oDropLocation = ZoneWPCell;
    var allowZoneChange = ZoneWPCell.getAttribute('allowZoneChange');

    if (allowZoneChange == '0')
        MSOLayout_maintainOriginalZone = MSOLayout_GetParentWPZoneDiv(ZoneWPCell);
    else
        MSOLayout_maintainOriginalZone = '0';
    var zoneid = ZoneWPCell.getAttribute('zoneid');

    if (MSOLayout_galleryView && typeof ZoneWPCell.dzc != "undefined" && ZoneWPCell.dzc != null) {
        var zones = GetElementsByName('MSOZone');

        if (zones != null && zones.length > 1) {
            for (var i = 0; i < zones.length; i++) {
                if (zones[i].zoneID == zoneid) {
                    MSOLayout_maintainOriginalZone = zones[i];
                    break;
                }
            }
        }
    }
    MSOLayout_iBar.setAttribute('goodDrop', 'false');
    var zone = MSOLayout_GetParentWPZoneDiv(ZoneWPCell);

    if (zone.id == 'MSOZone') {
        MSOLayout_zoneDragOver = zone;
        Sys.UI.DomElement.addCssClass(MSOLayout_zoneDragOver, "ms-SPZoneSelected");
    }
    if (!MSOLayout_galleryView && !MSOLayout_IsWikiEditMode()) {
        MSOLayout_MoveIBar(ZoneWPCell);
    }
    AddEvtHandler(document.body, 'ondragover', MSOLayout_MoveWebPartBodyDragOver);
    if (typeof document.body.ondragend != "undefined")
        var oldDragEnd = document.body.ondragend;
    if (typeof document.body.ondrop != "undefined")
        var oldDrop = document.body.ondrop;
    document.body.ondragend = new Function("window.event.returnValue = false;");
    document.body.ondrop = new Function("MSOLayout_iBar.setAttribute('goodDrop', 'true');");
    ZoneWPCell.ondragstart = new Function("try {event.dataTransfer.effectAllowed = 'move';} catch (exception) {}");
    AddEvtHandler(ZoneWPCell, 'ondrag', MSOLayout_MoveDragObject);
    ZoneWPCell.dragDrop();
    DetachEvent('dragover', MSOLayout_MoveWebPartBodyDragOver, document.body);
    document.body.ondragend = oldDragEnd;
    document.body.ondrop = oldDrop;
    DetachEvent("drag", MSOLayout_MoveDragObject, ZoneWPCell);
    MSOLayout_moveObject.style.display = 'none';
    MSOLayout_currentDragMode = "";
    event.returnValue = false;
}
function MSOLayout_CalculateZoneCellIndex(ZoneWPCell) {
    var zoneDiv = MSOLayout_GetParentWPZoneDiv(ZoneWPCell);

    if (zoneDiv == null) {
        return 0;
    }
    var cellIndex = 0;
    var divElements = zoneDiv.getElementsByTagName('DIV');

    if (divElements != null) {
        for (var i = 0; i < divElements.length; i++) {
            var divElement = divElements[i];

            if (divElement == ZoneWPCell) {
                return cellIndex;
            }
            if (MSOLayout_hasAttribute(divElement, 'data-iszonecell')) {
                cellIndex++;
            }
        }
    }
    return 0;
}
function MSOLayout_MoveWebPartDragZoneEnter(ZoneTable, browserevent) {
ULSjLO:
    ;
    if (MSOLayout_currentDragMode != 'move')
        return;
    if (ZoneTable != MSOLayout_zoneDragOver) {
        if (MSOLayout_zoneDragOver != null) {
            Sys.UI.DomElement.removeCssClass(MSOLayout_zoneDragOver, "ms-SPZoneSelected");
        }
        MSOLayout_zoneDragOver = ZoneTable;
        event.dataTransfer.dropEffect = 'move';
    }
    MSOLayout_MoveWebPartDragOver(browserevent, MSOLayout_GetWPZoneCell(ZoneTable, 0), 'False');
    MSOLayout_MoveWebPartStopEventBubble();
}
function MSOLayout_MoveWebPartDragEnter(ZoneWPCell) {
    if (MSOLayout_currentDragMode != 'move')
        return;
    event.dataTransfer.dropEffect = 'move';
    MSOLayout_cellToDrop = MSOLayout_CalculateZoneCellIndex(ZoneWPCell);
}
function MSOLayout_GetWPZoneCell(WPZone, cellIndex) {
    var cellCounter = 0;
    var divElements = WPZone.getElementsByTagName('DIV');

    if (divElements != null) {
        for (var i = 0; i < divElements.length; i++) {
            var divElement = divElements[i];

            if (MSOLayout_hasAttribute(divElement, 'data-iszonecell')) {
                if (cellIndex == cellCounter) {
                    return divElement;
                }
                cellCounter++;
            }
        }
    }
    return null;
}
function MSOLayout_MoveWebPartDragOver(e, ZoneWPCell, NeedsSetup) {
ULSjLO:
    ;
    if (MSOLayout_currentDragMode != 'move')
        return;
    event.dataTransfer.dropEffect = 'move';
    var needSetup = NeedsSetup == "True" ? true : false;

    MSOLayout_SetupDropLocation(ZoneWPCell, needSetup);
    var wpZone = MSOLayout_GetParentWPZoneDiv(ZoneWPCell);
    var dropLocation = MSOLayout_GetWPZoneCell(wpZone, MSOLayout_cellToDrop);

    if (dropLocation == null) {
        return;
    }
    MSOLayout_oDropLocation = dropLocation;
    MSOLayout_MoveIBar(MSOLayout_oDropLocation);
    if (MSOLayout_galleryView && MSOLayout_maintainOriginalZone == '0')
        MSOLayout_UpdateZoneDropDown();
    MSOLayout_MoveWebPartStopEventBubble();
}
function MSOLayout_MoveWebPartBodyDragOver() {
ULSjLO:
    ;
    if (MSOLayout_currentDragMode != 'move')
        return;
    event.dataTransfer.dropEffect = 'none';
    MSOLayout_iBar.style.display = 'none';
    if (MSOLayout_zoneDragOver != null) {
        Sys.UI.DomElement.removeCssClass(MSOLayout_zoneDragOver, "ms-SPZoneSelected");
    }
    window.event.returnValue = false;
}
function MSOLayout_MoveWebPartStopEventBubble() {
ULSjLO:
    ;
    if (MSOLayout_currentDragMode != 'move' || MSOLayout_iBar.style.display == 'none')
        return;
    window.event.returnValue = false;
    window.event.cancelBubble = true;
}
function MSOLayout_MoveWebPart(OriginalZoneCell, DestinationZoneCell) {
    MSOLayout_iBar.style.display = 'none';
    Sys.UI.DomElement.removeCssClass(MSOLayout_zoneDragOver, "ms-SPZoneSelected");
    if (MSOLayout_currentDragMode != 'move' || MSOLayout_iBar.getAttribute('goodDrop') != 'true' || OriginalZoneCell == DestinationZoneCell)
        return;
    var newTableCell;
    var originalZone = MSOLayout_GetParentWPZoneDiv(OriginalZoneCell);
    var originalIndex;
    var originalOrientation = OriginalZoneCell.getAttribute('orientation');

    originalIndex = MSOLayout_CalculateZoneCellIndex(OriginalZoneCell);
    var destinationZone;
    var destinationIndex;

    destinationZone = MSOLayout_GetParentWPZoneDiv(DestinationZoneCell);
    var zonesChanged = destinationZone != originalZone;
    var destinationOrientation = DestinationZoneCell.getAttribute('orientation');

    destinationIndex = MSOLayout_CalculateZoneCellIndex(DestinationZoneCell);
    var zoneCellPlaceHolder = document.createElement('div');

    DestinationZoneCell.parentNode.insertBefore(zoneCellPlaceHolder, DestinationZoneCell);
    zoneCellPlaceHolder.swapNode(OriginalZoneCell);
    zoneCellPlaceHolder.removeNode(true);
    OriginalZoneCell.setAttribute('orientation', destinationOrientation);
    if (zonesChanged) {
        var originalEmptyZoneText = getFirstElementByName(originalZone, 'MSOZoneCell_emptyZoneText');
        var destinationEmptyZoneText = getFirstElementByName(destinationZone, 'MSOZoneCell_emptyZoneText');

        if (originalEmptyZoneText != null) {
            var strNumWebParts = originalEmptyZoneText.getAttribute('webPartsInZone');

            if (strNumWebParts != null) {
                var numWebParts = Number(strNumWebParts);

                numWebParts--;
                if (numWebParts == 0) {
                    originalEmptyZoneText.style.display = '';
                    originalEmptyZoneText.parentNode.style.padding = '';
                }
                originalEmptyZoneText.setAttribute('webPartsInZone', String(numWebParts));
            }
        }
        if (destinationEmptyZoneText != null) {
            var strDestNumWebParts = destinationEmptyZoneText.getAttribute('webPartsInZone');

            if (strDestNumWebParts != null) {
                var numDestWebParts = Number(strDestNumWebParts);

                numDestWebParts++;
                destinationEmptyZoneText.setAttribute('webPartsInZone', String(numDestWebParts));
            }
            destinationEmptyZoneText.style.display = 'none';
            destinationEmptyZoneText.parentNode.style.padding = '0';
        }
    }
    if (zonesChanged || destinationIndex != originalIndex && destinationIndex != originalIndex + 1) {
        if (originalZone != destinationZone) {
            var destZoneId = destinationZone.getAttribute('zoneID');
            var relatedWebPart = OriginalZoneCell.getAttribute('relatedwebpart');

            if (relatedWebPart != null && destZoneId != null)
                MSOLayout_AddChange(eval(relatedWebPart), "Zone", destZoneId);
            MSOLayout_UpdatePartOrderAfterMove(originalZone, 0);
        }
        MSOLayout_UpdatePartOrderAfterMove(destinationZone, 0);
    }
    if (zonesChanged) {
        if (destinationOrientation == 'Horizontal') {
            MSOLayout_AdjustHorizontalZoneCells(destinationZone);
        }
        else {
            Sys.UI.DomElement.removeCssClass(OriginalZoneCell, "ms-webpart-cell-horizontal");
        }
    }
}
function MSOLayout_AdjustHorizontalZoneCells(zoneDiv) {
    var cellCount = MSOLayout_CountZoneCells(zoneDiv) - 1;

    for (var index = 0; index < cellCount; index++) {
        var tmpZoneCell = MSOLayout_GetWPZoneCell(zoneDiv, index);

        if (tmpZoneCell != null) {
            if (tmpZoneCell.className.indexOf("ms-webpartcell-horizontal") < 0) {
                Sys.UI.DomElement.addCssClass(tmpZoneCell, "ms-webpart-cell-horizontal");
            }
        }
    }
}
function MSOLayout_CountZoneCells(zoneDiv) {
    if (zoneDiv == null) {
        return 0;
    }
    var cellCount = 0;
    var divElements = zoneDiv.getElementsByTagName('DIV');

    if (divElements != null) {
        for (var i = 0; i < divElements.length; i++) {
            var divElement = divElements[i];

            if (MSOLayout_hasAttribute(divElement, 'data-iszonecell')) {
                cellCount++;
            }
        }
    }
    return cellCount;
}
function MSOLayout_UpdatePartOrderAfterMove(Zone, StartingIndex) {
ULSjLO:
    ;
    var wpCell;

    for (var index = StartingIndex; true; index++) {
        wpCell = MSOLayout_GetWPZoneCell(Zone, index);
        if (wpCell == null) {
            break;
        }
        var relatedWebPart = wpCell.getAttribute('relatedwebpart');

        MSOLayout_AddChange(eval(relatedWebPart), "ZoneIndex", index);
    }
}
function MSOLayout_CreateDragObject(WebPartTitle) {
ULSjLO:
    ;
    var titleText;

    if (!Boolean(MSOLayout_moveObject)) {
        MSOLayout_moveObject = insertAdjacentElement(document.body, "afterBegin", document.createElement('DIV'));
        MSOLayout_moveObject.className = 'UserCellSelected';
        MSOLayout_moveObject.style.cssText = "font-size:8pt;position:absolute;overflow:hidden;display:none;z-index:100";
        MSOLayout_moveObject.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=75)";
        titleText = MSOLayout_moveObject.insertBefore(document.createElement('NOBR'));
        titleText.style.cssText = "padding-top:2px;width:147px;height:1.5em;overflow:hidden;text-overflow:ellipsis";
    }
    else
        titleText = MSOLayout_moveObject.children(0);
    titleText.innerText = WebPartTitle;
}
function MSOLayout_MoveDragObject() {
ULSjLO:
    ;
    if (MSOLayout_currentDragMode != 'move')
        return;
    if (MSOLayout_moveObject.style.display == 'none')
        MSOLayout_moveObject.style.display = '';
    if (MSOLayout_moveObject.style.width == '') {
        MSOLayout_moveObject.realWidth = MSOLayout_moveObject.offsetWidth;
        MSOLayout_moveObject.realHeight = MSOLayout_moveObject.offsetHeight;
    }
    var newWidth = MSOLayout_moveObject.realWidth;
    var newHeight = MSOLayout_moveObject.realHeight;
    var newLeft = event.clientX + document.body.scrollLeft - newWidth / 2;
    var newTop = event.clientY + document.body.scrollTop + 1;

    if (newLeft + newWidth > document.body.scrollWidth)
        newWidth -= newLeft + newWidth - document.body.scrollWidth;
    if (newTop + newHeight > document.body.scrollHeight)
        newHeight -= newTop + newHeight - document.body.scrollHeight;
    if (newHeight <= 0 || newWidth <= 0) {
        MSOLayout_moveObject.style.display = 'none';
        newWidth = (newHeight = 0);
    }
    else
        MSOLayout_moveObject.style.display = '';
    MSOLayout_moveObject.width = String(newWidth);
    MSOLayout_moveObject.height = String(newHeight);
    MSOLayout_moveObject.style.pixelLeft = newLeft;
    MSOLayout_moveObject.style.pixelTop = newTop;
}
function MSOLayout_Contains(obj, elem) {
    if (elem == null) {
        return false;
    }
    var isParent = false;

    do {
        isParent = obj == elem;
        if (isParent)
            break;
        elem = elem.parentNode;
    } while (elem != null);
    return isParent;
}
function MSOLayout_ShowWPMenuAndCheckbox(controlBoxId) {
ULSjLO:
    ;
    var controlBox = document.getElementById(controlBoxId);

    if (controlBox != null) {
        Sys.UI.DomElement.removeCssClass(controlBox, "ms-webpart-controlBox-hide");
        Sys.UI.DomElement.addCssClass(controlBox, "ms-webpart-controlBox-show");
    }
}
function MSOLayout_HideWPMenuAndCheckbox(controlBoxId, checkboxId) {
ULSjLO:
    ;
    var checkbox = document.getElementById(checkboxId);
    var controlBox = document.getElementById(controlBoxId);

    if (controlBox != null && checkbox != null && !checkbox.checked) {
        Sys.UI.DomElement.removeCssClass(controlBox, "ms-webpart-controlBox-show");
        Sys.UI.DomElement.addCssClass(controlBox, "ms-webpart-controlBox-hide");
    }
}
function MSOLayout_CreateIBar() {
ULSjLO:
    ;
    if (!Boolean(MSOLayout_vertZoneIBar) || !Boolean(MSOLayout_horzZoneIBar)) {
        var iBarBuilder = document.createElement('TABLE');
        var barMargin = FV4UI() ? " margin:1px;" : "";

        iBarBuilder.style.cssText = "font-size:1pt; position:absolute; display:none; border-collapse:collapse;" + barMargin;
        iBarBuilder.cellSpacing = 0;
        iBarBuilder.cellPadding = 0;
        AddEvtHandler(iBarBuilder, 'ondragenter', MSOLayout_MoveWebPartStopEventBubble);
        AddEvtHandler(iBarBuilder, 'ondragover', MSOLayout_MoveWebPartStopEventBubble);
        var insideIBarCell = (iBarBuilder.insertRow(-1)).insertCell(-1);

        insideIBarCell.align = 'center';
        var insideIBar = insideIBarCell.insertBefore(document.createElement('DIV'));

        insideIBar.className = 'ms-SPZoneIBar';
        insideIBar.style.backgroundColor = iBarBuilder.currentStyle.borderColor;
        insideIBar.style.borderWidth = "2px";
        insideIBar.style.position = "relative";
        MSOLayout_topObject = document.body;
        MSOLayout_horzZoneIBar = MSOLayout_topObject.appendChild(iBarBuilder.cloneNode(true));
        MSOLayout_vertZoneIBar = MSOLayout_topObject.appendChild(iBarBuilder.cloneNode(true));
        var insideHorzIBar = getFirstElementByProperty(MSOLayout_horzZoneIBar, 'className', 'ms-SPZoneIBar');
        var insideVertIBar = getFirstElementByProperty(MSOLayout_vertZoneIBar, 'className', 'ms-SPZoneIBar');

        MSOLayout_horzZoneIBar.width = "2";
        MSOLayout_horzZoneIBar.style.borderStyle = "solid none";
        insideHorzIBar.className = 'ms-SPZoneIBar';
        insideHorzIBar.height = '100%';
        insideHorzIBar.width = '33%';
        insideHorzIBar.style.borderStyle = "none solid none none";
        insideHorzIBar.style.posTop = 0;
        insideHorzIBar.name = "MSOLayout_insideIBar";
        MSOLayout_vertZoneIBar.height = "6";
        MSOLayout_vertZoneIBar.style.borderStyle = "none solid";
        insideVertIBar.className = 'ms-SPZoneIBar';
        insideVertIBar.width = '100%';
        insideVertIBar.height = '2';
        insideVertIBar.style.borderStyle = "solid none none none";
        insideVertIBar.style.posTop = 1;
        insideVertIBar.name = "MSOLayout_insideIBar";
        if (MSOLayout_topObject != document.body) {
            MSOLayout_horzBodyZoneIBar = document.body.appendChild(MSOLayout_horzZoneIBar.cloneNode(true));
            MSOLayout_vertBodyZoneIBar = document.body.appendChild(MSOLayout_vertZoneIBar.cloneNode(true));
        }
    }
    MSOLayout_iBar = MSOLayout_vertZoneIBar;
}
function MSOLayout_MoveIBar(ZoneWPCell) {
    if (Boolean(MSOLayout_iBar))
        MSOLayout_iBar.style.display = 'none';
    var insideLayoutDiv = MSOLayout_Contains(MSOLayout_topObject, ZoneWPCell);

    if (MSOLayout_zoneDragOver == null) {
        return;
    }
    if (MSOLayout_maintainOriginalZone == '0' || MSOLayout_GetParentWPZoneDiv(ZoneWPCell) == MSOLayout_maintainOriginalZone) {
        var insideIBar;
        var verticalIBarHeight = 0;
        var fitForMargin = FV4UI() ? 2 : 0;
        var zoneOrientation = ZoneWPCell.getAttribute('orientation');

        if (zoneOrientation == 'Horizontal') {
            var rightOffset = document.dir == "rtl" ? ZoneWPCell.offsetWidth - (MSOLayout_CalculateZoneCellIndex(ZoneWPCell) == 0 ? 3 : 0) : 0;

            MSOLayout_iBar = insideLayoutDiv ? (MSOLayout_iBar = MSOLayout_horzZoneIBar) : MSOLayout_horzBodyZoneIBar;
            insideIBar = getFirstElementByName(MSOLayout_iBar, "MSOLayout_insideIBar");
            MSOLayout_iBar.style.pixelLeft = MSOLayout_GetRealOffset(ZoneWPCell, 'Left', MSOLayout_topObject) - (MSOLayout_CalculateZoneCellIndex(ZoneWPCell) == 0 ? 0 : 3);
            MSOLayout_iBar.style.pixelLeft += rightOffset;
            MSOLayout_iBar.style.pixelTop = MSOLayout_GetRealOffset(MSOLayout_zoneDragOver, 'Top', MSOLayout_topObject) + 1;
            verticalIBarHeight = MSOLayout_zoneDragOver.clientHeight >= fitForMargin ? MSOLayout_zoneDragOver.clientHeight - fitForMargin : MSOLayout_zoneDragOver.clientHeight;
            MSOLayout_iBar.height = String(verticalIBarHeight);
            if (ZoneWPCell.id == "MSOZone_EmptyZoneCell") {
                var emptyZoneText = getFirstElementByName(ZoneWPCell, 'MSOZoneCell_emptyZoneText');
                var strNumWebParts = emptyZoneText != null ? emptyZoneText.getAttribute('webPartsInZone') : null;

                if (strNumWebParts != null && Number(strNumWebParts) > 0) {
                    MSOLayout_iBar.style.pixelLeft -= 3;
                }
            }
        }
        else {
            MSOLayout_iBar = insideLayoutDiv ? MSOLayout_vertZoneIBar : MSOLayout_vertBodyZoneIBar;
            insideIBar = getFirstElementByName(MSOLayout_iBar, "MSOLayout_insideIBar");
            MSOLayout_iBar.style.pixelLeft = MSOLayout_GetRealOffset(MSOLayout_zoneDragOver, 'Left', MSOLayout_topObject) + 1;
            MSOLayout_iBar.style.pixelTop = MSOLayout_GetRealOffset(ZoneWPCell, 'Top', MSOLayout_topObject) - (MSOLayout_CalculateZoneCellIndex(ZoneWPCell) == 0 ? 0 : 4);
            MSOLayout_iBar.width = String(MSOLayout_zoneDragOver.clientWidth >= fitForMargin ? MSOLayout_zoneDragOver.clientWidth - fitForMargin : MSOLayout_zoneDragOver.clientWidth);
            if (ZoneWPCell.id == "MSOZone_EmptyZoneCell") {
                MSOLayout_iBar.style.pixelTop -= 1;
            }
        }
        if (FV4UI() && MSOLayout_topObject.id != "MSOTlPn_WebPartPageDiv") {
            var workspaceElt = document.getElementById("s4-workspace");

            if (Boolean(workspaceElt)) {
                MSOLayout_iBar.style.pixelTop -= workspaceElt.scrollTop;
                MSOLayout_iBar.style.pixelLeft -= workspaceElt.scrollLeft;
            }
        }
        if (FV4UI() && Boolean(insideIBar) && zoneOrientation == 'Horizontal') {
            insideIBar.style.minHeight = String(verticalIBarHeight - 6) + 'px';
            var parentCell = insideIBar.parentNode;

            if (Boolean(parentCell))
                parentCell.align = "left";
        }
        Sys.UI.DomElement.addCssClass(MSOLayout_zoneDragOver, "ms-SPZoneSelected");
        MSOLayout_iBar.style.display = 'inline';
    }
}
function MSOLayout_UpdateZoneDropDown() {
ULSjLO:
    ;
    if (MSOLayout_zoneDragOver == null) {
        return;
    }
    var zoneId = MSOLayout_zoneDragOver.getAttribute('zoneID');

    if (typeof zoneChooserID != 'undefined' && Boolean(window.zoneChooserID)) {
        var rgdropd = GetElementsByName(zoneChooserID);

        if (rgdropd != null && rgdropd.length > 0) {
            var dropd = rgdropd[0];

            for (var i = 0; i < dropd.options.length; i++) {
                if (dropd.options[i].value == zoneId)
                    dropd.options[i].selected = true;
            }
        }
    }
}
function MSOLayout_GetRibbonHeight() {
ULSjLO:
    ;
    var ribbonHeight = 0;
    var suiteBar = document.getElementById('suiteBar');

    if (suiteBar != null) {
        ribbonHeight += suiteBar.offsetHeight;
    }
    var ribbonRow = document.getElementById('s4-ribbonrow');

    if (ribbonRow != null) {
        ribbonHeight += ribbonRow.offsetHeight;
    }
    return ribbonHeight;
}
function MSOLayout_SetupDropLocation(ZoneWPCell, CheckSize) {
    var zoneOrientation = ZoneWPCell.getAttribute('orientation');
    var zoneCellIndex = MSOLayout_CalculateZoneCellIndex(ZoneWPCell);

    if (zoneOrientation == 'Vertical') {
        var parentRow = MSOLayout_GetParentRow(ZoneWPCell);

        if (!Boolean(parentRow))
            return;
        if (ZoneWPCell.id != "MSOZone_EmptyZoneCell" && MSOLayout_hasAttribute(ZoneWPCell, "data-iszonecell") && (!CheckSize || event.clientY + (MSOLayout_GetTopElement()).scrollTop - MSOLayout_GetRealOffset(ZoneWPCell, 'Top') > ZoneWPCell.offsetHeight / 2))
            MSOLayout_cellToDrop = zoneCellIndex + 1;
        else
            MSOLayout_cellToDrop = zoneCellIndex;
    }
    else {
        var rtlPage = document.dir == "rtl", maxCells = ZoneWPCell.parentNode.childNodes.length, nextCellIndex = zoneCellIndex + 1;

        if (ZoneWPCell.id != "MSOZone_EmptyZoneCell" && (!CheckSize || event.clientX + MSOLayout_topObject.scrollLeft - MSOLayout_GetRealOffset(ZoneWPCell, 'Left') > ZoneWPCell.offsetWidth / 2))
            MSOLayout_cellToDrop = rtlPage ? zoneCellIndex : zoneCellIndex + 1;
        else {
            if (rtlPage)
                MSOLayout_cellToDrop = nextCellIndex >= maxCells ? zoneCellIndex : zoneCellIndex + 1;
            else
                MSOLayout_cellToDrop = zoneCellIndex;
        }
    }
}
function MSOLayout_UpdatePropertySheet(WebPart, PropertyName, PropertyValue) {
ULSjLO:
    ;
    var Elements;
    var ElementIndex;
    var radioElements;
    var radioIndex;
    var toolPane = document.getElementById("MSOTlPn_MainTD");

    if (typeof WebPart.SelectedWebPart != "undefined" && Boolean(WebPart.SelectedWebPart) && typeof toolPane != "undefined" && Boolean(toolPane) && typeof toolPane.all != "undefined") {
        for (Elements = toolPane.all, ElementIndex = 0; ElementIndex < Elements.length; ElementIndex++) {
            if (Elements[ElementIndex].layoutID == PropertyName) {
                if (PropertyName == "ChromeState") {
                    for (radioElements = Elements[ElementIndex].all, radioIndex = 0; radioIndex < radioElements.length; radioIndex++) {
                        if (radioElements[radioIndex].value == PropertyValue) {
                            radioElements[radioIndex].checked = true;
                            break;
                        }
                    }
                }
                else if (PropertyName == "Height" || PropertyName == "Width") {
                    for (radioElements = Elements[ElementIndex].all, radioIndex = 0; radioIndex < radioElements.length; radioIndex++) {
                        if (radioElements[radioIndex].id.indexOf("YesOption") != -1) {
                            radioElements[radioIndex].checked = true;
                        }
                        else if (radioElements[radioIndex].id.indexOf("SizeTextBox") != -1) {
                            radioElements[radioIndex].value = PropertyValue;
                        }
                        else if (radioElements[radioIndex].id.indexOf("UnitsDropdown") != -1) {
                            radioElements[radioIndex].value = "Pixel";
                        }
                    }
                }
                else {
                    Elements[ElementIndex].value = PropertyValue;
                }
            }
        }
    }
}
function MSOLayout_MinimizeRestore(WebPart) {
    var newValue;
    var newValueIndex;

    if (WebPart.style.display != 'none') {
        newValue = 'Minimized';
        newValueIndex = 1;
        WebPart.style.display = 'none';
    }
    else {
        newValue = 'Normal';
        newValueIndex = 0;
        WebPart.style.display = '';
    }
    MSOLayout_UpdatePropertySheet(WebPart, "ChromeState", newValue);
    MSOLayout_AddChange(WebPart, "chromeState", newValueIndex);
    RefreshCommandUI();
}
function MSOLayout_PageViewerMinimizeRestore(WebPart, PageViewerIFrameID) {
    var PageViewerIFrame = document.getElementById(PageViewerIFrameID);

    if (PageViewerIFrame != null) {
        if (WebPart.style.display != 'none') {
            if (typeof PageViewerIFrame.ddf_src != "undefined" && PageViewerIFrame.src != PageViewerIFrame.ddf_src) {
                PageViewerIFrame.src = PageViewerIFrame.ddf_src;
            }
        }
    }
}
function MSOLayout_FindAncestorByAttribute(Element, AttributeName) {
    while (Element != null) {
        if (Element.getAttribute(AttributeName) != null)
            break;
        Element = Element.parentNode;
    }
    return Element;
}
function MSOLayout_MinimizeRestoreToolPart(ToolPart, partTitle, strImgName, strAnchorName, strImageAnchorName) {
ULSjLO:
    ;
    var fieldID = ToolPart + 'ChromeState';
    var containingFrame = ToolPart + 'Chrome';
    var stateFieldValue;
    var tooltipTemplate;

    if ((document.getElementById(containingFrame)).style.display == 'none') {
        (document.getElementById(containingFrame)).style.display = 'inline';
        document.images[strImgName].src = '/_layouts/15/images/TPMin1.gif';
        tooltipTemplate = Strings.STS.L_ToolPartCollapseToolTip_TXT;
        stateFieldValue = "Normal";
    }
    else {
        (document.getElementById(containingFrame)).style.display = 'none';
        document.images[strImgName].src = '/_layouts/15/images/TPMax1.gif';
        tooltipTemplate = Strings.STS.L_ToolPartExpandToolTip_TXT;
        stateFieldValue = "Minimized";
    }
    var tooltipString = tooltipTemplate.replace("%0", partTitle);

    document.images[strImgName].alt = tooltipString;
    (document.getElementById(strImageAnchorName)).title = tooltipString;
    (document.getElementById(strAnchorName)).title = tooltipString;
    if (document.getElementById(fieldID) != null) {
        (document.getElementById(fieldID)).value = stateFieldValue;
    }
}
function MSOLayout_RemoveWebPart(webPart) {
    MSOLayout_AddChange(webPart, "isIncluded", "False");
    document.forms[MSOWebPartPageFormName].MSOWebPartPage_PostbackSource.value = 19;
    if (typeof webPart.SelectedWebPart != "undefined" && Boolean(webPart.SelectedWebPart))
        MSOTlPn_onToolPaneCloseClick();
    else
        __doPostBack(MSOWebPartPageFormName, '');
}
function MSOLayout_RefreshIFrame(IFrame) {
    document.forms[MSOWebPartPageFormName].MSOWebPartPage_PostbackSource.value = 23;
    IFrame.src = IFrame.src;
}
function MSOLayout_GetStyleFromClass(sClass, sRule) {
ULSjLO:
    ;
    insertAdjacentHTML(document.body, 'beforeEnd', "<div style = 'display:none' id='temp' class='" + sClass + "'></div>");
    var sReturnValue = eval('temp.currentStyle.' + sRule);

    eval('temp.removeNode();');
    return sReturnValue;
}
function MSOLayout_AddChange(WebPart, Property, NewValue) {
    if (!Boolean(WebPart))
        return;
    var WebPartGUID = WebPart.getAttribute('WebPartID');

    if (typeof WebPart.layoutChanges != "undefined" && Boolean(WebPart.layoutChanges)) {
        var propertyIndex = MSOLayout_SearchArray(WebPart.layoutChanges, Property);

        if (propertyIndex != -1)
            WebPart.layoutChanges[propertyIndex + 1] = NewValue;
        else {
            var layoutChanges = WebPart.layoutChanges;

            layoutChanges.push(Property);
            layoutChanges.push(NewValue);
        }
    }
    else {
        WebPart.layoutChanges = [];
        WebPart.layoutChanges.push(Property);
        WebPart.layoutChanges.push(NewValue);
    }
    if (MSOLayout_SearchArray(MSOLayout_unsavedChanges, WebPartGUID) == -1) {
        MSOLayout_unsavedChanges.push((Boolean(MSOLayout_unsavedChanges.length) ? "|" : "") + WebPartGUID);
        MSOLayout_unsavedChanges.push(WebPart.layoutChanges);
    }
    document.forms[MSOWebPartPageFormName].MSOLayout_LayoutChanges.value = MSOLayout_unsavedChanges;
    MSOLayout_UpdatePropertySheet(WebPart, Property, NewValue);
    if (MSOLayout_FormSubmit == null) {
        MSOLayout_FormSubmit = document.forms[MSOWebPartPageFormName].submit;
        MSOLayout_FormSubmitHref = ajaxNavigate.get_href();
        document.forms[MSOWebPartPageFormName].submit = new Function("MSOLayout_OnSubmit(); if(MSOLayout_FormSubmit.call) MSOLayout_FormSubmit.call(document.forms[MSOWebPartPageFormName]); else MSOLayout_FormSubmit();");
        AddEvtHandler(document.forms[MSOWebPartPageFormName], "onsubmit", MSOLayout_OnSubmit);
        AddEvtHandler(window, "onunload", MSOLayout_SaveChanges);
    }
}
function MSOLayout_ClearOnSubmitHooks() {
ULSjLO:
    ;
    DetachEvent("unload", MSOLayout_SaveChanges, window);
    DetachEvent("submit", MSOLayout_OnSubmit, document.forms[MSOWebPartPageFormName]);
    if (null != MSOLayout_FormSubmit) {
        document.forms[MSOWebPartPageFormName].submit = MSOLayout_FormSubmit;
    }
    MSOLayout_FormSubmitHref = null;
}
function MSOLayout_OnSubmit() {
ULSjLO:
    ;
    MSOLayout_ClearOnSubmitHooks();
}
function MSOLayout_SaveChanges() {
ULSjLO:
    ;
    if (document.forms[MSOWebPartPageFormName].MSOLayout_LayoutChanges != null && document.forms[MSOWebPartPageFormName].MSOLayout_LayoutChanges.value != "") {
        var pageUrl = MSOLayout_FormSubmitHref;

        if (null != pageUrl) {
            var hashMarkExpression = /\#/;
            var hashMarkIndex = pageUrl.search(hashMarkExpression);

            if (hashMarkIndex != -1) {
                pageUrl = pageUrl.substring(0, hashMarkIndex);
            }
            pageUrl = encodeURI(pageUrl);
            var xmlhttp = GetXMLHttpRequestObject();

            xmlhttp.open('POST', pageUrl, false);
            var formData = '&__REQUESTDIGEST=' + URLEncode(document.forms[MSOWebPartPageFormName].__REQUESTDIGEST.value) + '&MSOLayout_LayoutChanges=' + URLEncode(document.forms[MSOWebPartPageFormName].MSOLayout_LayoutChanges.value);

            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlhttp.send(formData);
            document.forms[MSOWebPartPageFormName].MSOLayout_LayoutChanges.value = "";
        }
    }
    MSOLayout_ClearOnSubmitHooks();
}
function MSOLayout_SearchArray(SearchArray, Value) {
    for (var index = 0; index < SearchArray.length; index++) {
        if (SearchArray[index] == Value || SearchArray[index] == "#" + Value)
            return index;
    }
    return -1;
}
function MSOWebPartPage_OpenMenu(strMenuToOpen, SourceElement, strWebPart, InConnectionsMode, refreshRibbon) {
ULSjLO:
    ;
    var MenuToOpen = document.getElementById(strMenuToOpen);
    var WebPart = document.getElementById(strWebPart);

    if (MenuToOpen != null && typeof MenuToOpen.length != "undefined")
        MenuToOpen = MenuToOpen[0];
    if (Boolean(WebPart)) {
        MenuWebPart = WebPart;
        MenuWebPartID = WebPart.getAttribute('WebPartID');
        if (typeof vwpcm != "undefined" && Boolean(vwpcm)) {
            var MenuWebPartID2 = WebPart.getAttribute('WebPartID2');

            if (!Boolean(MenuWebPartID2)) {
                MenuWebPartID2 = MenuWebPartID;
            }
        }
        var minOption = null;
        var restoreOption = null;
        var closeOption = null;
        var deleteOption = null;
        var exportOption = null;
        var resetPersOption = null;
        var helpOption = null;
        var connectionOption = null;
        var elements1 = MenuToOpen.getElementsByTagName("ie:menuitem");
        var elements2 = MenuToOpen.getElementsByTagName("menuitem");
        var elements = [];
        var i;

        for (i = 0; i < elements1.length; i++) {
            elements.push(elements1[i]);
        }
        for (i = 0; i < elements2.length; i++) {
            elements.push(elements2[i]);
        }
        for (i = 0; i < elements.length; ++i) {
            var elm = elements[i];

            switch (elm.id) {
            case "MSOMenu_Minimize":
                minOption = elm;
                break;
            case "MSOMenu_Restore":
                restoreOption = elm;
                break;
            case "MSOMenu_Close":
                closeOption = elm;
                break;
            case "MSOMenu_Delete":
                deleteOption = elm;
                break;
            case "MSOMenu_Export":
                exportOption = elm;
                break;
            case "MSOMenu_RestorePartDefaults":
                resetPersOption = elm;
                break;
            case "MSOMenu_Help":
                helpOption = elm;
                break;
            case "MSOMenu_Connections":
                connectionOption = elm;
                break;
            default:
                break;
            }
        }
        if (Boolean(minOption)) {
            minOption.style.display = WebPart.getAttribute('allowMinimize') == 'false' || WebPart.style.display == 'none' ? 'none' : '';
        }
        if (Boolean(restoreOption)) {
            restoreOption.style.display = WebPart.getAttribute('allowMinimize') == 'false' || WebPart.style.display != 'none' ? 'none' : '';
        }
        if (Boolean(closeOption)) {
            closeOption.style.display = WebPart.getAttribute('allowRemove') == 'false' ? 'none' : '';
        }
        if (Boolean(deleteOption)) {
            deleteOption.style.display = WebPart.getAttribute('allowDelete') != 'false' ? '' : 'none';
        }
        if (Boolean(exportOption)) {
            exportOption.style.display = WebPart.getAttribute('allowExport') == 'false' ? 'none' : '';
        }
        if (Boolean(helpOption)) {
            helpOption.style.display = WebPart.getAttribute('helpLink') == null ? 'none' : "";
        }
        if (Boolean(resetPersOption)) {
            resetPersOption.style.display = MSOLayout_inDesignMode && WebPart.getAttribute('HasPers') == 'true' && typeof WebPart.OnlyForMePart != "undefined" && WebPart.OnlyForMePart != 'true' ? '' : 'none';
        }
        if (Boolean(connectionOption)) {
            connectionOption.style.display = MSOLayout_inDesignMode ? '' : 'none';
        }
        if (InConnectionsMode != 'False') {
            var connMenu = document.getElementById('MSOMenu_Connections' + WebPart.id);

            if (connectionOption != null && connMenu != null) {
                if (browseris.ie)
                    try {
                        connectionOption.outerHTML = connMenu.innerHTML;
                    }
                    catch (e) { }
                else {
                    var connSub = connMenu.firstChild;

                    while (connSub != null && connSub.nodeType != 1)
                        connSub = connSub.nextSibling;
                    if (connSub != null) {
                        connSub.style.display = connectionOption.style.display;
                        connectionOption.parentNode.replaceChild(connSub.cloneNode(true), connectionOption);
                    }
                }
            }
        }
    }
    if (refreshRibbon)
        ((SP.Ribbon.PageManager.get_instance()).get_commandDispatcher()).executeCommand('appstatechanged', null);
    if (SourceElement != null)
        MenuHtc_show(MenuToOpen, SourceElement, true, null, null);
    return true;
}
function MSOConn_IsXFormUINeeded(fnCallback) {
ULSjLO:
    ;
    var tinterface = SelectSingleNode(MSOConn_TargetGroupNode, XPathForBrowser('tInterface'));
    var isXFormUINeeded = false;
    var xFormNode = SelectSingleNode(tinterface, XPathForBrowser('xForm'));
    var miNodex = SelectSingleNode(tinterface, "mi");

    if (xFormNode != null && GetXmlAttributeValueForBrowser(miNodex, "isXFormUINeeded") == "True") {
        isXFormUINeeded = true;
        if (GetXmlAttributeValueForBrowser(MSOConn_TargetGroupNode, "isConn") == "True") {
            (document.getElementById('MSOConn_Button')).value = "edit";
        }
        if (xFormNode.getAttribute("type") == "RowCellTransform") {
            MSOConn_ShowRowCellXForm(tinterface, fnCallback);
        }
        else if (xFormNode.getAttribute("type") == "RowFilterTransform") {
            MSOConn_ShowRowFilterXForm(tinterface, fnCallback);
        }
        else {
            MSOConn_ShowAspXForm(tinterface, fnCallback);
        }
    }
    if (!isXFormUINeeded) {
        if (GetXmlAttributeValueForBrowser(MSOConn_TargetGroupNode, "isConn") == "True" && MSOConn_BackButtonClicked == false) {
            (document.getElementById('MSOConn_Button')).value = "remove";
        }
        fnCallback();
    }
}
function MSOConn_ShowRowFilterXForm(targetInterface, fnCallback) {
    var rowProInitArgNode;
    var filConInitArgNode;
    var providerPart;
    var consumerPart;
    var cref;
    var strVal;
    var args;
    var displayListSet;
    var sMatchInterfaceName = (SelectSingleNode(targetInterface, "mi")).getAttribute("id");
    var miNode = SelectSingleNode(targetInterface, "mi");
    var xFormInfo = GetXmlAttributeValueForBrowser(miNode, "xInfo");
    var sInterfaceNode = SelectSingleNode(MSOConn_SourceGroupNode, XPathForBrowser("sInterfaces/sInterface") + "[@id = '" + sMatchInterfaceName + "']");

    rowProInitArgNode = SelectSingleNode(targetInterface, XPathForBrowser("InitEventArgs/RowProviderInitEventArgs"));
    var isConnected = GetXmlAttributeValueForBrowser(MSOConn_TargetGroupNode, "isConn");

    if (rowProInitArgNode == null) {
        rowProInitArgNode = SelectSingleNode(sInterfaceNode, XPathForBrowser("InitEventArgs/RowProviderInitEventArgs"));
        filConInitArgNode = SelectSingleNode(targetInterface, XPathForBrowser("InitEventArgs/FilterConsumerInitEventArgs"));
        consumerPart = MSOConn_TargetWpNode;
        providerPart = MSOConn_SourceWpNode;
    }
    else {
        filConInitArgNode = SelectSingleNode(sInterfaceNode, XPathForBrowser("InitEventArgs/FilterConsumerInitEventArgs"));
        consumerPart = MSOConn_SourceWpNode;
        providerPart = MSOConn_TargetWpNode;
    }
    if (rowProInitArgNode != null && filConInitArgNode != null) {
        var rowFieldList = [];
        var rowFieldDisplayList = [];
        var rowFieldListNodes = SelectNodes(rowProInitArgNode, XPathForBrowser("Field"));
        var filterFieldListNodes = SelectNodes(filConInitArgNode, XPathForBrowser("Field"));
        var filterFieldList = [];
        var filterFieldDisplayList = [];
        var i;

        if (rowFieldListNodes == null || rowFieldListNodes.length == 0) {
            cref = rowProInitArgNode.getAttribute("cref");
            if (cref != null) {
                strVal = cref + ".GetInitEventArgs()";
                args = null;
                try {
                    args = eval(strVal);
                }
                catch (e) { }
                if (args != null) {
                    if (typeof args.FieldList != "undefined")
                        rowFieldList = args.FieldList;
                    if (typeof args.FieldDisplayList != "undefined")
                        rowFieldDisplayList = args.FieldDisplayList;
                }
            }
        }
        else {
            for (i = 0; i < rowFieldListNodes.length; i++) {
                displayListSet = false;
                rowFieldList[i] = rowFieldListNodes[i].getAttribute("FieldName");
                if (rowFieldListNodes[i].getAttribute("FieldDisplayName") != null) {
                    rowFieldDisplayList[i] = rowFieldListNodes[i].getAttribute("FieldDisplayName");
                    displayListSet = true;
                }
                else if (displayListSet == true) {
                    rowFieldDisplayList = null;
                }
            }
        }
        if (filterFieldListNodes == null || filterFieldListNodes.length == 0) {
            cref = filConInitArgNode.getAttribute("cref");
            if (cref != null) {
                strVal = cref + ".GetInitEventArgs()";
                args = null;
                try {
                    args = eval(strVal);
                }
                catch (e) { }
                if (args != null) {
                    filterFieldList = args.FieldList;
                    filterFieldDisplayList = args.FieldDisplayList;
                }
            }
        }
        else {
            for (i = 0; i < filterFieldListNodes.length; i++) {
                displayListSet = false;
                filterFieldList[i] = filterFieldListNodes[i].getAttribute("FieldName");
                if (filterFieldListNodes[i].getAttribute("FieldDisplayName") != null) {
                    filterFieldDisplayList[i] = filterFieldListNodes[i].getAttribute("FieldDisplayName");
                    displayListSet = true;
                }
                else if (displayListSet == true) {
                    filterFieldDisplayList = null;
                }
            }
        }
        if (rowFieldList != null && rowFieldList.length != 0 && filterFieldList != null && filterFieldList.length != 0 || isConnected == 'True') {
            var rfxFormInfo;
            var rowList = rowFieldList;

            if (rowFieldDisplayList != null && rowFieldDisplayList.length == rowFieldList.length) {
                rowList = rowFieldDisplayList;
            }
            var sFeatures = MSOConn_DialogFeatures();
            var url = (document.getElementById('MSOConn_RFProXform')).value + "?part=provider";
            var dialogArgs = [rowList, isConnected, providerPart.getAttribute("title"), consumerPart.getAttribute("title"), MSOConn_MultipleTargetGroups, xFormInfo, rowFieldList];

            commonShowModalDialog(url, sFeatures, function(rfxFormInfoRowIndex) {
            ULSjLO:
                ;
                var fCall = true;

                if (rfxFormInfoRowIndex == null || rfxFormInfoRowIndex == "undefined") {
                    MSOConn_ConnCancelled = true;
                }
                else if (rfxFormInfoRowIndex == "remove") {
                    (document.getElementById('MSOConn_Button')).value = "remove";
                    rfxFormInfo = "";
                }
                else if (rfxFormInfoRowIndex == "choose") {
                    MSOConn_ShowTargetGroupsDialog(MSOConn_ShowXFormsAndPersistEx);
                }
                else {
                    fCall = false;
                    var filterList = filterFieldList;

                    if (filterFieldDisplayList != null && filterFieldList.length == filterFieldDisplayList.length) {
                        filterList = filterFieldDisplayList;
                    }
                    var selectedRowDisplayFieldName = rowList[rfxFormInfoRowIndex];

                    dialogArgs = [filterList, selectedRowDisplayFieldName, isConnected, consumerPart.getAttribute("title"), xFormInfo, filterFieldList];
                    commonShowModalDialog((document.getElementById('MSOConn_RFConXform')).value, sFeatures, function(rfxFormInfoFilterIndex) {
                    ULSjLO:
                        ;
                        if (rfxFormInfoFilterIndex == null) {
                            MSOConn_ConnCancelled = true;
                        }
                        else if (rfxFormInfoFilterIndex == "remove") {
                            (document.getElementById('MSOConn_Button')).value = "remove";
                            rfxFormInfo = "";
                        }
                        else if (rfxFormInfoFilterIndex == "previous") {
                            MSOConn_ShowRowFilterXForm(targetInterface);
                        }
                        else if (MSOConn_ConnCancelled != true) {
                            MSOConn_XformInfo1 = filterFieldList[rfxFormInfoFilterIndex];
                            MSOConn_XformInfo2 = rowFieldList[rfxFormInfoRowIndex];
                        }
                        fnCallback();
                    }, dialogArgs);
                }
                if (fCall)
                    fnCallback();
            }, dialogArgs);
        }
        else {
            MSOConn_InitArgsError();
            MSOConn_ConnCancelled = true;
        }
    }
    else {
        MSOConn_InitArgsError();
        MSOConn_ConnCancelled = true;
    }
}
function MSOConn_ShowRowCellXForm(targetInterface, fnCallback) {
ULSjLO:
    ;
    var rowProInitArgNode = null;
    var cellConInitArgNode = null;
    var providerPart = null;
    var consumerPart = null;
    var rcxFormInfo = null;
    var cref;
    var strVal;
    var args;
    var sMatchInterfaceName = (SelectSingleNode(targetInterface, "mi")).getAttribute("id");
    var miNode = SelectSingleNode(targetInterface, "mi");
    var xFormInfo = GetXmlAttributeValueForBrowser(miNode, "xInfo");
    var sInterfaceNode = SelectSingleNode(MSOConn_SourceGroupNode, "sInterfaces/sInterface[@id = '" + sMatchInterfaceName + "']");

    rowProInitArgNode = SelectSingleNode(targetInterface, XPathForBrowser("InitEventArgs/RowProviderInitEventArgs"));
    var isConnected = GetXmlAttributeValueForBrowser(MSOConn_TargetGroupNode, "isConn");

    if (rowProInitArgNode == null) {
        rowProInitArgNode = SelectSingleNode(sInterfaceNode, XPathForBrowser("InitEventArgs/RowProviderInitEventArgs"));
        cellConInitArgNode = SelectSingleNode(targetInterface, XPathForBrowser("InitEventArgs/CellConsumerInitEventArgs"));
        providerPart = MSOConn_SourceWpNode;
        consumerPart = MSOConn_TargetWpNode;
    }
    else {
        cellConInitArgNode = SelectSingleNode(sInterfaceNode, "InitEventArgs/CellConsumerInitEventArgs");
        providerPart = MSOConn_TargetWpNode;
        consumerPart = MSOConn_SourceWpNode;
    }
    if (rowProInitArgNode != null && cellConInitArgNode != null) {
        var fieldList = [];
        var fieldDisplayList = [];
        var fieldListNodes = SelectNodes(rowProInitArgNode, XPathForBrowser("Field"));

        if (fieldListNodes == null || fieldListNodes.length == 0) {
            cref = rowProInitArgNode.getAttribute("cref");
            if (cref != null) {
                strVal = cref + ".GetInitEventArgs()";
                args = null;
                try {
                    args = eval(strVal);
                }
                catch (e) { }
                if (args != null) {
                    if (typeof args.FieldList != "undefined")
                        fieldList = args.FieldList;
                    if (typeof args.FieldDisplayList != "undefined")
                        fieldDisplayList = args.FieldDisplayList;
                }
            }
        }
        else {
            for (var i = 0; i < fieldListNodes.length; i++) {
                var displayListSet = false;

                fieldList[i] = fieldListNodes[i].getAttribute("FieldName");
                if (fieldListNodes[i].getAttribute("FieldDisplayName") != null) {
                    fieldDisplayList[i] = fieldListNodes[i].getAttribute("FieldDisplayName");
                    displayListSet = true;
                }
                else if (displayListSet == true) {
                    fieldDisplayList = null;
                }
            }
        }
        var cell = cellConInitArgNode.getAttribute("FieldName");
        var cellDisplayName = cellConInitArgNode.getAttribute("FieldDisplayName");

        if (cell == null) {
            cref = cellConInitArgNode.getAttribute("cref");
            if (cref != null) {
                strVal = cref + ".GetInitEventArgs()";
                args = null;
                try {
                    args = eval(strVal);
                }
                catch (e) { }
                if (args != null) {
                    if (typeof args.FieldName != "undefined")
                        cell = args.FieldName;
                    if (typeof args.cellDisplayName != "undefined")
                        cellDisplayName = args.cellDisplayName;
                }
            }
        }
        if (fieldList != null && fieldList.length != 0 && cell != null || isConnected == 'True') {
            var cellName = cell;
            var rowList = fieldList;

            if (fieldDisplayList != null && fieldDisplayList.length == fieldList.length) {
                rowList = fieldDisplayList;
            }
            if (cellDisplayName != null) {
                cellName = cellDisplayName;
            }
            var dialogArgs = [rowList, cellName, isConnected, providerPart.getAttribute("title"), consumerPart.getAttribute("title"), MSOConn_MultipleTargetGroups, xFormInfo, fieldList];
            var sFeatures = MSOConn_DialogFeatures();

            commonShowModalDialog((document.getElementById('MSOConn_RCXform')).value, sFeatures, function(rcxFormInfoIndex) {
            ULSjLO:
                ;
                if (rcxFormInfoIndex == "undefined" || rcxFormInfoIndex == null) {
                    MSOConn_ConnCancelled = true;
                }
                else if (rcxFormInfoIndex == "remove") {
                    (document.getElementById('MSOConn_Button')).value = "remove";
                    rcxFormInfo = "";
                }
                else if (rcxFormInfoIndex == "choose") {
                    MSOConn_ShowTargetGroupsDialog(MSOConn_ShowXFormsAndPersistEx);
                }
                else {
                    rcxFormInfo = fieldList[rcxFormInfoIndex];
                    if (rcxFormInfo != null && MSOConn_ConnCancelled != true) {
                        MSOConn_XformInfo1 = rcxFormInfo;
                    }
                }
                fnCallback();
            }, dialogArgs);
        }
        else {
            MSOConn_InitArgsError();
            MSOConn_ConnCancelled = true;
        }
    }
    else {
        MSOConn_InitArgsError();
        MSOConn_ConnCancelled = true;
    }
    if (rcxFormInfo != null && MSOConn_ConnCancelled != true) {
        MSOConn_XformInfo1 = rcxFormInfo;
    }
}
function MSOConn_ShowAspXForm(targetInterface, fnCallback) {
ULSjLO:
    ;
    var xFormNode = SelectSingleNode(targetInterface, XPathForBrowser('xForm'));
    var xFormType = xFormNode.getAttribute("type");
    var miNode = SelectSingleNode(targetInterface, "mi");
    var xFormInfo = GetXmlAttributeValueForBrowser(miNode, "xInfo");
    var isConnected = GetXmlAttributeValueForBrowser(MSOConn_TargetGroupNode, "isConn");
    var tGroupId = targetInterface.getAttribute("id");
    var isMultiGroup;

    if (MSOConn_MultipleTargetGroups) {
        isMultiGroup = "True";
    }
    else {
        isMultiGroup = "False";
    }
    var sFeatures = MSOConn_DialogFeatures();
    var xFormUrl = (document.getElementById('MSOConn_AspXformUrl')).value;

    xFormUrl += "?pageUrl=";
    xFormUrl += escapeProperly(ajaxNavigate.get_href());
    xFormUrl += "&sWpId=";
    xFormUrl += escapeProperly((document.getElementById('MSOConn_SWpId')).value);
    xFormUrl += "&sGroupId=";
    xFormUrl += escapeProperly((document.getElementById('MSOConn_SGroupId')).value);
    xFormUrl += "&tWpId=";
    xFormUrl += escapeProperly((document.getElementById('MSOConn_TWpId')).value);
    xFormUrl += "&tGroupId=";
    xFormUrl += escapeProperly(tGroupId);
    xFormUrl += "&xFormType=";
    xFormUrl += escapeProperly(xFormType);
    xFormUrl += "&xFormInfo=";
    xFormUrl += escapeProperly(xFormInfo);
    xFormUrl += "&isMultiGroup=";
    xFormUrl += escapeProperly(isMultiGroup);
    xFormUrl += "&isConnected=";
    xFormUrl += escapeProperly(isConnected);
    commonShowModalDialog(xFormUrl, sFeatures, function(returnInfo) {
    ULSjLO:
        ;
        if (returnInfo == null) {
            returnInfo = [null, null];
        }
        var action = returnInfo[0];
        var serializedConfig = returnInfo[1];

        if (action == "undefined" || action == null) {
            MSOConn_ConnCancelled = true;
        }
        else if (action == "remove") {
            (document.getElementById('MSOConn_Button')).value = "remove";
            serializedConfig = "";
        }
        else if (action == "choose") {
            MSOConn_ShowTargetGroupsDialog(MSOConn_ShowXFormsAndPersistEx);
        }
        if (serializedConfig != null && MSOConn_ConnCancelled != true) {
            MSOConn_AspXformInfo = serializedConfig;
        }
        fnCallback();
    }, null);
}
function MSOConn_InitArgsError() {
ULSjLO:
    ;
    document.body.style.cursor = 'auto';
    alert(Strings.STS.L_NoInitArgs_ERR);
}
function MSOConn_TargetGroupDlgCallback(rValues) {
ULSjLO:
    ;
    if (rValues != null) {
        (document.getElementById('MSOConn_Button')).value = rValues[0];
        var targetGroupNodes = SelectNodes(MSOConn_TargetWpNode, 'tg');

        for (var j = 0; targetGroupNodes.length; j++) {
            if (targetGroupNodes[j].getAttribute('id') == rValues[1]) {
                MSOConn_TargetGroupNode = targetGroupNodes[j];
                break;
            }
        }
    }
    else {
        MSOConn_ConnCancelled = true;
    }
}
function MSOConn_ShowTargetGroupsDialog(fnCallback) {
ULSjLO:
    ;
    var connected = false;

    if (SelectNodes(MSOConn_TargetWpNode, "tg") != null && (SelectNodes(MSOConn_TargetWpNode, "tg")).length != 0) {
        var targetGroupNodes = SelectNodes(MSOConn_TargetWpNode, "tg");

        if (targetGroupNodes != null) {
            for (var i = 0; i < targetGroupNodes.length; i++) {
                var tg = targetGroupNodes[i];

                if (GetXmlAttributeValueForBrowser(tg, 'isConn') == 'True') {
                    connected = true;
                    MSOConn_TargetGroupNode = tg;
                    break;
                }
            }
        }
        if (!connected) {
            var sFeatures = MSOConn_DialogFeatures();
            var fn = function(rv) {
            ULSjLO:
                ;
                MSOConn_TargetGroupDlgCallback(rv);
                fnCallback();
            };

            commonShowModalDialog((document.getElementById('MSOConn_GroupUrl')).value, sFeatures, fn, MSOConn_TargetWpNode);
        }
        else {
            fnCallback();
        }
    }
    else {
        MSOConn_ConnCancelled = true;
    }
}
function MSOConn_ConfirmRemoveConnection(sourceTitle, targetTitle) {
ULSjLO:
    ;
    var errMsg = Strings.STS.L_RemoveConnection_TXT;
    var titleArray = [];

    titleArray[0] = sourceTitle;
    titleArray[1] = targetTitle;
    if (titleArray != null) {
        for (var index = 0; index < titleArray.length; index++) {
            errMsg = errMsg.replace("%" + String(index), titleArray[index]);
        }
    }
    return errMsg;
}
function MSOConn_ShowAndPersistCallback() {
ULSjLO:
    ;
    if (!MSOConn_ConnCancelled) {
        if ((document.getElementById('MSOConn_Button')).value == "remove") {
            var errMsg = MSOConn_ConfirmRemoveConnection(MSOConn_SourceWpNode.getAttribute("title"), MSOConn_TargetWpNode.getAttribute("title"));

            if (confirm(errMsg)) {
                MSOConn_PersistConnection();
            }
        }
        else {
            MSOConn_PersistConnection();
        }
    }
    (document.getElementById('MSOConn_Button')).value = "none";
    MSOConn_ConnCancelled = false;
    MSOConn_XformInfo1 = null;
    MSOConn_XformInfo2 = null;
    MSOConn_AspXformInfo = null;
    MSOConn_SourceWpNode = null;
    MSOConn_TargetWpNode = null;
    MSOConn_MultipleTargetGroups = false;
    MSOConn_TargetGroupNode = null;
    MSOConn_SourceGroupNode = null;
}
function MSOConn_ShowXFormsAndPersistEx() {
ULSjLO:
    ;
    MSOConn_ShowXFormsAndPersist();
    MSOConn_ConnCancelled = true;
}
function MSOConn_ShowXFormsAndPersist() {
ULSjLO:
    ;
    if (!MSOConn_ConnCancelled && MSOConn_TargetGroupNode != null) {
        if ((document.getElementById('MSOConn_Button')).value != "remove") {
            MSOConn_IsXFormUINeeded(MSOConn_ShowAndPersistCallback);
            return;
        }
        MSOConn_ShowAndPersistCallback();
        return;
    }
    (document.getElementById('MSOConn_Button')).value = "none";
    MSOConn_ConnCancelled = false;
    MSOConn_XformInfo1 = null;
    MSOConn_XformInfo2 = null;
    MSOConn_AspXformInfo = null;
    MSOConn_SourceWpNode = null;
    MSOConn_TargetWpNode = null;
    MSOConn_MultipleTargetGroups = false;
    MSOConn_TargetGroupNode = null;
    MSOConn_SourceGroupNode = null;
}
function MSOConn_CreateConnectionStep1(sourceGuid, targetGuid, sourceTitle, targetTitle, sGroupID, connected, isXFormNeeded, tGroupID) {
ULSjLO:
    ;
    (document.getElementById('MSOConn_SWpId')).value = sourceGuid;
    (document.getElementById('MSOConn_TWpId')).value = targetGuid;
    (document.getElementById('MSOConn_SGroupId')).value = sGroupID;
    (document.getElementById('MSOConn_Button')).value = "save";
    (document.getElementById('MSOConn_TGroupId')).value = "";
    (document.getElementById('MSOConn_XForm1')).value = "";
    (document.getElementById('MSOConn_XForm2')).value = "";
    (document.getElementById('MSOConn_AspXForm')).value = "";
    var submit = true;

    if (Boolean(tGroupID)) {
        (document.getElementById('MSOConn_TGroupId')).value = tGroupID;
    }
    if (connected == "True" && tGroupID != null && isXFormNeeded != null && isXFormNeeded == "False") {
        var errMsg = MSOConn_ConfirmRemoveConnection(sourceTitle, targetTitle);

        if (confirm(errMsg)) {
            (document.getElementById('MSOConn_Button')).value = "remove";
        }
        else {
            submit = false;
        }
    }
    else if (connected == "True" && tGroupID == null) {
        (document.getElementById('MSOConn_Button')).value = "edit";
    }
    if (submit == true) {
        (document.getElementById('MSOConn_CreationStep')).value = "1";
        document.body.style.cursor = "wait";
        __doPostBack(MSOWebPartPageFormName, '');
    }
}
function XPathForBrowser(xpath) {
    xpath = xpath + '|' + xpath.toLowerCase();
    return xpath;
}
function GetXmlAttributeValueForBrowser(xmlNode, attributeName) {
    var attributeValue = xmlNode.getAttribute(attributeName);

    if (null == attributeValue) {
        attributeValue = xmlNode.getAttribute(attributeName.toLowerCase());
    }
    return attributeValue;
}
function SelectSingleNode(elem, xpath) {
    xpath = (xpath.replace(/[\r\n \t]*$/, "")).replace(/^[\r\n \t]*/, "");
    if (browseris.ie) {
        return elem.selectSingleNode(xpath);
    }
    else {
        var r = elem.ownerDocument.evaluate(xpath, elem, null, XPathResult.ANY_TYPE, null);
        var type = r.resultType;
        var el = r.iterateNext();

        return el;
    }
}
function SelectNodes(elem, xpath) {
    if (browseris.ie)
        return elem.selectNodes(xpath);
    var r = elem.ownerDocument.evaluate(xpath, elem, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    var rg = [];

    if (r.resultType == XPathResult.ORDERED_NODE_ITERATOR_TYPE) {
        var i = r.iterateNext();

        while (i != null) {
            rg.push(i);
            i = r.iterateNext();
        }
    }
    return rg;
}
function MSOConn_CreateConnectionStep2(sourceGuid, targetGuid, sourceID, targetID, sGroupID, tGroupID) {
ULSjLO:
    ;
    var targetGroupID = null;
    var targetGpNode = null;

    (document.getElementById('MSOConn_SWpId')).value = sourceGuid;
    (document.getElementById('MSOConn_TWpId')).value = targetGuid;
    (document.getElementById('MSOConn_SGroupId')).value = sGroupID;
    (document.getElementById('MSOConn_TGroupId')).value = tGroupID;
    var xpath = XPathForBrowser("ConnDesign/sWebPart") + "[@id = 'MSOConn_" + sourceID + "']";
    var xmlDocumentNode = document.getElementById('MSOConn_Compatibility');

    if (browseris.ie) {
        try {
            var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");

            xmlDoc.async = false;
            if (null != xmlDocumentNode && typeof xmlDoc.loadXML != "undefined") {
                xmlDoc.loadXML(xmlDocumentNode.outerHTML);
                if (typeof xmlDoc.documentElement != "undefined" && xmlDoc.documentElement != null) {
                    xmlDocumentNode = xmlDoc.documentElement;
                }
            }
        }
        catch (e) {
            return null;
        }
    }
    var sourceWpNode = SelectSingleNode(xmlDocumentNode, xpath);

    if (sourceWpNode != null) {
        MSOConn_SourceWpNode = sourceWpNode;
        var sourceGpNode = null;
        var sourceGpNodes = SelectNodes(sourceWpNode, 'sg');

        for (var i = 0; sourceGpNodes.length; i++) {
            if (sourceGpNodes[i].getAttribute('id') == sGroupID) {
                sourceGpNode = sourceGpNodes[i];
                break;
            }
        }
        if (sourceGpNode != null) {
            MSOConn_SourceGroupNode = sourceGpNode;
            var targetWpNode = SelectSingleNode(sourceGpNode, XPathForBrowser("tParts/tWebPart") + "[@id = 'MSOConn_" + targetID + "']");

            if (targetWpNode != null) {
                MSOConn_TargetWpNode = targetWpNode;
                if (!Boolean(tGroupID)) {
                    MSOConn_MultipleTargetGroups = true;
                    MSOConn_ShowTargetGroupsDialog(MSOConn_ShowXFormsAndPersist);
                }
                else {
                    var targetGroupNodes = SelectNodes(targetWpNode, 'tg');

                    for (var j = 0; targetGroupNodes.length; j++) {
                        if (targetGroupNodes[j].getAttribute('id') == tGroupID) {
                            MSOConn_TargetGroupNode = targetGroupNodes[j];
                            break;
                        }
                    }
                    MSOConn_ShowXFormsAndPersist();
                }
            }
        }
    }
    document.body.style.cursor = "auto";
}
function MSOConn_PersistConnection() {
ULSjLO:
    ;
    (document.getElementById('MSOConn_SGroupId')).value = MSOConn_SourceGroupNode.getAttribute('id');
    (document.getElementById('MSOConn_TGroupId')).value = MSOConn_TargetGroupNode.getAttribute('id');
    if ((document.getElementById('MSOConn_Button')).value != "remove" && (document.getElementById('MSOConn_Button')).value != "edit") {
        (document.getElementById('MSOConn_Button')).value = "save";
    }
    if (MSOConn_XformInfo1 != null) {
        (document.getElementById('MSOConn_XForm1')).value = MSOConn_XformInfo1;
    }
    if (MSOConn_XformInfo2 != null) {
        (document.getElementById('MSOConn_XForm2')).value = MSOConn_XformInfo2;
    }
    if (MSOConn_AspXformInfo != null) {
        (document.getElementById('MSOConn_AspXForm')).value = MSOConn_AspXformInfo;
    }
    __doPostBack(MSOWebPartPageFormName, '');
}
function MSOLayout_ShowErrorDetails() {
ULSjLO:
    ;
    var src = event.srcElement.parentNode;

    MSOLayout_ShowHideErrorDetails(src.nextSibling, src);
}
function MSOLayout_HideErrorDetails() {
ULSjLO:
    ;
    var src = event.srcElement.parentNode.parentNode;

    MSOLayout_ShowHideErrorDetails(src.previousSibling, src);
}
function MSOLayout_ShowHideErrorDetails(show, hide) {
ULSjLO:
    ;
    hide.style.display = 'none';
    show.style.display = 'inline';
}
function MoveSiteTitle() {
ULSjLO:
    ;
    var rgTitlewpTitleArea = documentGetElementsByName('titlewpTitleArea');

    if (rgTitlewpTitleArea == null || rgTitlewpTitleArea[0] == null)
        return;
    var titlewpTitleArea = rgTitlewpTitleArea[0];
    var rgSiteTitleNode = documentGetElementsByName('onetidProjectPropertyTitle');

    if (rgSiteTitleNode == null || rgSiteTitleNode[0] == null)
        return;
    var siteTitleNode = rgSiteTitleNode[0];
    var separatorNode = document.getElementById('onetidPageTitleSeparator');

    if (separatorNode == null)
        return;
    if (Boolean(titlewpTitleArea.insertAdjacentElement)) {
        titlewpTitleArea.insertAdjacentElement('afterBegin', separatorNode);
        titlewpTitleArea.insertAdjacentElement('afterBegin', siteTitleNode);
    }
    else {
        titlewpTitleArea.insertBefore(separatorNode, titlewpTitleArea.firstChild);
        titlewpTitleArea.insertBefore(siteTitleNode, titlewpTitleArea.firstChild);
    }
}
function MSOLayout_ShowQuickAddDialog(siteId, webId, encodedQuickAddGroups, showListsAndLibraries, numberOfWebPartsInZone, maxWebPartsInZone, callbackMethod, enCodedZoneDisplayName, popUpPage, feature) {
ULSjLO:
    ;
    var queryString = '?SiteId=' + siteId + '&WebId=' + webId;

    if (encodedQuickAddGroups != '') {
        queryString += '&Groups=' + encodedQuickAddGroups;
    }
    if (showListsAndLibraries == false) {
        queryString += '&ShowListsAndLibraries=false';
    }
    queryString += '&NumberOfWebPartsInZone=' + numberOfWebPartsInZone;
    queryString += '&MaxWebPartsInZone=' + maxWebPartsInZone;
    if (enCodedZoneDisplayName != '') {
        queryString += '&ZoneDisplayName=' + enCodedZoneDisplayName;
    }
    commonShowModalDialog(popUpPage + queryString, feature, callbackMethod, undefined);
}
var MSOTlPn_prevBuilder;
var MSOTlPn_prevWidth;
var MSOTlPn_prevHeight;
var MSOTlPn_shownViewChangeWarning;
var MSOWebPartPage_hideNextBeforeUnload;
var MSOWebPartPage_partDeleted;
var MSOChangeInToolPaneWidth;

function ConvertToAspPartDisplayMode(view) {
ULSjLO:
    ;
    var displayMode;

    switch (view) {
    case '-1':
        displayMode = 'ExtensibleView';
        break;
    case '0':
        displayMode = 'Browse';
        break;
    case '1':
        displayMode = 'Edit';
        break;
    case '2':
        displayMode = 'Catalog';
        break;
    case '3':
        displayMode = 'GallerySearch';
        break;
    case '4':
        displayMode = 'Navigation';
        break;
    case '5':
        displayMode = 'Import';
        break;
    case '6':
        displayMode = 'DownLevelWebPartMenu';
        break;
    case '7':
        displayMode = 'ToolPaneErr';
        break;
    }
    return displayMode;
}
function MSOTlPn_ShowToolPane2(displayModeName) {
ULSjLO:
    ;
    if (document.forms[MSOWebPartPageFormName].MSOGallery_FilterVisible)
        document.forms[MSOWebPartPageFormName].MSOGallery_FilterVisible.value = 'false';
    document.forms[MSOWebPartPageFormName].MSOSPWebPartManager_DisplayModeName.value = displayModeName;
    if (arguments.length > 1) {
        document.forms[MSOWebPartPageFormName].MSOSPWebPartManager_StartWebPartEditingName.value = 'true';
        document.forms[MSOWebPartPageFormName].MSOTlPn_SelectedWpId.value = arguments[1];
    }
    __doPostBack(MSOWebPartPageFormName, '');
}
function MSOTlPn_ShowToolPane2Wrapper(displayModeName, source) {
ULSjLO:
    ;
    document.forms[MSOWebPartPageFormName].MSOWebPartPage_PostbackSource.value = source;
    if (arguments[2] == null)
        MSOTlPn_ShowToolPane2(displayModeName);
    else
        MSOTlPn_ShowToolPane2(displayModeName, arguments[2]);
}
function MSOTlPn_ShowToolPane(view) {
ULSjLO:
    ;
    if (arguments.length > 1)
        MSOTlPn_ShowToolPane2(ConvertToAspPartDisplayMode(view), arguments[1]);
    else
        MSOTlPn_ShowToolPane2(ConvertToAspPartDisplayMode(view));
}
function MSOTlPn_ShowToolPaneWrapper(view, source) {
ULSjLO:
    ;
    if (arguments[2] == null)
        MSOTlPn_ShowToolPane2Wrapper(ConvertToAspPartDisplayMode(view), source);
    else
        MSOTlPn_ShowToolPane2Wrapper(ConvertToAspPartDisplayMode(view), source, arguments[2]);
}
function MSOLayout_CheckAndSaveChanges() {
ULSjLO:
    ;
    if (document.forms[MSOWebPartPageFormName].MSOLayout_LayoutChanges != null && document.forms[MSOWebPartPageFormName].MSOLayout_LayoutChanges.value != "") {
        MSOLayout_SaveChanges();
    }
}
function MSOWebPartPage_ExportCheckWarning(address, hasPersonalizations) {
ULSjLO:
    ;
    var doexport = true;

    if (hasPersonalizations) {
        if (!confirm(Strings.STS.L_ExportPersonalization_TXT)) {
            doexport = false;
        }
    }
    if (doexport) {
        var oldSavePerformed = false;

        if (typeof MSOWPSC_SavePerformed == "boolean") {
            oldSavePerformed = MSOWPSC_SavePerformed;
        }
        MSOWebPartPage_SetWindowLocation(address);
        if (typeof MSOWPSC_SavePerformed == "boolean") {
            MSOWPSC_SavePerformed = oldSavePerformed;
            MSOWebPartPage_hideNextBeforeUnload = true;
        }
    }
}
function MSOMode_SetMode(bAllUsers) {
    var newUrl = MSOMode_GetNewUrl(bAllUsers);

    MSOLayout_CheckAndSaveChanges();
    if (document.forms[MSOWebPartPageFormName].MSOSPWebPartManager_DisplayModeName.value != 'Navigation') {
        document.forms[MSOWebPartPageFormName].MSOSPWebPartManager_DisplayModeName.value = 'Browse';
        var toolPaneViewExpression = /[& | \?]ToolPaneView=[-0-9A-Z]*/ig;
        var displayModeExpression = /[& | \?]DisplayMode=[a-zA-Z]*/ig;

        newUrl = MSOMode_RemoveMode(newUrl, toolPaneViewExpression);
        newUrl = MSOMode_RemoveMode(newUrl, displayModeExpression);
    }
    document.forms[MSOWebPartPageFormName].MSOWebPartPage_Shared.value = bAllUsers ? "true" : "false";
    document.forms[MSOWebPartPageFormName].action = newUrl;
    __doPostBack(MSOWebPartPageFormName, '');
}
function MSOMode_GetNewUrl(bAllUsers, newUrl) {
    if (newUrl == null) {
        newUrl = ajaxNavigate.get_href();
    }
    var personalViewExpression = /[& | \?]PageView=Personal/ig;
    var allUsersViewExpression = /[& | \?]PageView=Shared/ig;
    var newMode = "PageView=" + (bAllUsers ? "Shared" : "Personal");

    newUrl = MSOMode_RemoveMode(newUrl, personalViewExpression);
    newUrl = MSOMode_RemoveMode(newUrl, allUsersViewExpression);
    newUrl = MSOMode_AddMode(newUrl, allUsersViewExpression, newMode);
    return newUrl;
}
function MSOMode_RemoveMode(newUrl, regExpression) {
ULSjLO:
    ;
    var hashMarkExpression = /\#/;
    var hashMarkIndex = newUrl.search(hashMarkExpression);

    if (hashMarkIndex != -1) {
        newUrl = newUrl.substring(0, hashMarkIndex);
    }
    var questionMarkExpression = /\?/;
    var questionMarkIndex = newUrl.search(questionMarkExpression);

    if (questionMarkIndex != -1) {
        var pathString = newUrl.substring(0, questionMarkIndex);
        var queryString = newUrl.substring(questionMarkIndex, newUrl.length);

        queryString = queryString.replace(regExpression, '');
        if (queryString.length != 0 && queryString.charAt(0) != '?') {
            queryString = "?" + queryString;
        }
        newUrl = pathString + queryString;
    }
    return newUrl;
}
function MSOMode_AddMode(newUrl, regExpression, stringToAdd) {
ULSjLO:
    ;
    var hashMarkExpression = /\#/;
    var hashMarkIndex = newUrl.search(hashMarkExpression);

    if (hashMarkIndex != -1) {
        newUrl = newUrl.substring(0, hashMarkIndex);
    }
    var questionMarkExpression = /\?/;
    var questionMarkIndex = newUrl.search(questionMarkExpression);

    if (questionMarkIndex == -1) {
        newUrl += '?' + stringToAdd;
    }
    else {
        var queryString = newUrl.substring(questionMarkIndex, newUrl.length);

        if (queryString.search(regExpression) == -1) {
            newUrl += '&' + stringToAdd;
        }
    }
    return newUrl;
}
function MSOPGrid_BuilderVisible(builderID) {
    MSOPGrid_HidePrevBuilder();
    MSOTlPn_prevBuilder = null;
    builderID.style.display = 'inline';
}
function MSOPGrid_HidePrevBuilder() {
ULSjLO:
    ;
    if (MSOTlPn_prevBuilder != null) {
        (eval(MSOTlPn_prevBuilder)).style.display = 'none';
    }
}
function MSOPGrid_doBuilder(builderUrl, editorId, dialogFeatures) {
    var pReturnValue = showModalDialog(builderUrl, editorId, dialogFeatures);

    editorId.value = pReturnValue;
    try {
        editorId.focus();
    }
    catch (exception) { }
}
function MSOWebPartPage_RestorePageDefault() {
ULSjLO:
    ;
    if (confirm(Strings.STS.L_ResetPagePersonalizationDialog_TXT)) {
        var newInput = document.createElement('INPUT');

        try {
            newInput.type = 'hidden';
        }
        catch (e) {
            newInput.style.display = 'none';
        }
        newInput.name = 'MSOWebPartPage_RestorePageDefault';
        newInput.value = 'true';
        document.forms[MSOWebPartPageFormName].appendChild(newInput);
        if (document.forms[MSOWebPartPageFormName].MSOLayout_LayoutChanges != null) {
            document.forms[MSOWebPartPageFormName].MSOLayout_LayoutChanges.value = "";
        }
        MSOMode_SetMode(false);
    }
}
function MSOWebPartPage_RestorePartDefaults(webPartID) {
ULSjLO:
    ;
    if (confirm(Strings.STS.L_ResetPartPersonalizationDialog_TXT)) {
        var newInput = document.createElement('INPUT');

        try {
            newInput.type = 'hidden';
        }
        catch (e) {
            newInput.style.display = 'none';
        }
        newInput.name = 'MSO_RestoreSettings';
        newInput.value = webPartID;
        document.forms[MSOWebPartPageFormName].appendChild(newInput);
        MSOMode_SetMode(false);
    }
}
function MSOWebPartPage_MenuDoPostBack(eventTarget, eventArgument) {
ULSjLO:
    ;
    var theform = document.forms[MSOWebPartPageFormName];

    if (typeof theform.__EVENTTARGET != "undefined") {
        var eventTargetField = theform.__EVENTTARGET;
    }
    if (typeof theform.__EVENTARGUMENT != "undefined") {
        var eventArgumentField = theform.__EVENTARGUMENT;
    }
    if (eventTargetField == null) {
        eventTargetField = document.createElement('INPUT');
        eventTargetField.style.display = 'none';
        eventTargetField.name = '__EVENTTARGET';
        document.forms[MSOWebPartPageFormName].appendChild(eventTargetField);
    }
    if (eventArgumentField == null) {
        eventArgumentField = document.createElement('INPUT');
        eventArgumentField.style.display = 'none';
        eventArgumentField.name = '__EVENTARGUMENT';
        document.forms[MSOWebPartPageFormName].appendChild(eventArgumentField);
    }
    __doPostBack(eventTarget, eventArgument);
}
function MSOWebPartPage_SignIn() {
ULSjLO:
    ;
    var newInput = document.createElement('INPUT');

    try {
        newInput.type = 'hidden';
    }
    catch (e) {
        newInput.style.display = 'none';
    }
    newInput.name = 'MSOWebPartPage_AnonymousAccessLogIn';
    newInput.value = "1";
    document.forms[MSOWebPartPageFormName].appendChild(newInput);
    __doPostBack(MSOWebPartPageFormName, '');
}
function MSOWebPartPage_SetWindowLocation(newLocation) {
    var newLocationLowerCase = newLocation.toLowerCase();

    if (newLocationLowerCase.indexOf('javascript:') == 0 || newLocationLowerCase.indexOf('vbscript:') == 0) {
        MSOWebPartPage_hideNextBeforeUnload = true;
    }
    window.location.href = newLocation;
}
function MSOWebPartPage_SetNewWindowLocation(helpUrl, helpMode) {
ULSjLO:
    ;
    if (helpMode == 0 || helpMode == 1) {
        if (helpMode == 0) {
            var dialogInfo = "edge: Sunken; center: yes; help: no; resizable: yes; status: no";

            window.commonShowModalDialog(helpUrl, dialogInfo);
        }
        else {
            window.open(helpUrl, null, "scrollbars=yes,resizable=yes,status=no,toolbar=no,menubar=no,location=no");
        }
    }
    else if (helpMode == 2) {
        window.location.href = helpUrl;
    }
}
function MSOTlPn_onToolPaneCloseClick() {
ULSjLO:
    ;
    var DisplayModeBrowse = 'Browse';
    var PostbackSourceSettingsHide = '49';

    MSOTlPn_ShowToolPane2Wrapper(DisplayModeBrowse, PostbackSourceSettingsHide);
}
function MSOPGrid_InvokeFPBuilder(type, args, editorCtrl) {
    if (typeof window.external != "undefined" && typeof window.external.InvokeBuilder != "undefined") {
        editorCtrl.value = window.external.InvokeBuilder(type, args, editorCtrl.id);
    }
    editorCtrl.focus();
}
function MSOMenu_KeyboardClick(widget, expectedKeyCode1, expectedKeyCode2, e) {
    if (e != null && Boolean(widget)) {
        for (var index = 1; index < arguments.length - 1; index++) {
            if (e.keyCode == arguments[index] && e.keyCode != 13) {
                widget.onclick();
                return false;
            }
        }
    }
    return;
}
function MSOTlPn_ToggleDisplay(strID, strImgName, strAnchorName, strAltExpandText, strAltCollapseText, strImageAnchorName) {
ULSjLO:
    ;
    var fieldID = strID + '_STATEFIELD';
    var stateFieldValue;
    var group = document.getElementById(strID);
    var image = document.getElementById(strImgName);
    var anchor = document.getElementById(strAnchorName);
    var imgAnchor = document.getElementById(strImageAnchorName);

    if (group.style.display == 'none') {
        group.style.display = '';
        image.src = '/_layouts/15/images/TPMin2.gif';
        image.alt = strAltCollapseText;
        imgAnchor.title = strAltCollapseText;
        anchor.title = strAltCollapseText;
        stateFieldValue = "1";
    }
    else {
        group.style.display = 'none';
        image.src = '/_layouts/15/images/TPMax2.gif';
        image.alt = strAltExpandText;
        imgAnchor.title = strAltExpandText;
        anchor.title = strAltExpandText;
        stateFieldValue = "0";
    }
    var field = document.getElementById(fieldID);

    if (field != null) {
        field.value = stateFieldValue;
    }
}
function MSOTlPn_onToolPaneMaxClick() {
ULSjLO:
    ;
    var mod = 1;
    var minMaxIcon = document.getElementById('MSOTlPn_minMaxIcon');
    var newSrc = minMaxIcon.src.substring(0, minMaxIcon.src.lastIndexOf('/') + 1);

    if (document.forms[MSOWebPartPageFormName].MSOTlPn_Maximized.value == "False") {
        (document.getElementById('MSOTlPn_Tbl')).style.width = ((document.getElementById('MSOTlPn_Tbl')).offsetWidth + MSOChangeInToolPaneWidth).toString() + "px";
        newSrc += document.dir == "rtl" ? "tpmax.gif" : "tpmin.gif";
        minMaxIcon.title = Strings.STS.L_ToolPaneShrinkToolTip_TXT;
        minMaxIcon.alt = Strings.STS.L_ToolPaneShrinkToolTip_TXT;
        minMaxIcon.parentNode.title = Strings.STS.L_ToolPaneShrinkToolTip_TXT;
        document.forms[MSOWebPartPageFormName].MSOTlPn_Maximized.value = "True";
    }
    else {
        (document.getElementById('MSOTlPn_Tbl')).style.width = "225px";
        newSrc += document.dir == "rtl" ? "tpmin.gif" : "tpmax.gif";
        minMaxIcon.title = Strings.STS.L_ToolPaneWidenToolTip_TXT;
        minMaxIcon.alt = Strings.STS.L_ToolPaneWidenToolTip_TXT;
        minMaxIcon.parentNode.title = Strings.STS.L_ToolPaneWidenToolTip_TXT;
        mod = -1;
        document.forms[MSOWebPartPageFormName].MSOTlPn_Maximized.value = "False";
    }
    minMaxIcon.src = newSrc;
    var x = document.getElementById('MSOTlPn_Tbl');

    try {
        if (x != null && x.getAttribute('ms-TlPnWiden') == "true") {
            x.style.pixelWidth += mod * MSOChangeInToolPaneWidth;
        }
    }
    catch (e) { }
}
function MSOTlPn_WindowResize() {
ULSjLO:
    ;
    var objToolPane = document.getElementById('MSOTlPn_MainTD');

    if (objToolPane == null || objToolPane.offsetWidth == 0)
        return;
    var widthToolPane = objToolPane.offsetWidth;
    var docFrame = document.body.offsetWidth - document.body.clientWidth;
    var spDiv = document.getElementById('MSOTlPn_WebPartPageDiv');

    if (spDiv.offsetWidth + objToolPane.offsetWidth == document.body.clientWidth) {
        return;
    }
    var widthAncestors = 0;
    var next = spDiv.offsetParent;
    var elementWidth = 0;

    while (next != null) {
        if (document.dir != "rtl") {
            elementWidth = next.offsetLeft + (next.offsetWidth - (next.clientLeft + next.clientWidth));
            if (next.offsetParent != null) {
                elementWidth += next.offsetParent.clientLeft;
            }
        }
        else {
            elementWidth = next.offsetParent != null ? next.offsetParent.offsetWidth - (next.offsetLeft + next.offsetWidth) : 0;
        }
        widthAncestors += elementWidth;
        next = next.offsetParent;
    }
    widthAncestors -= docFrame;
    var widthCenter = document.body.clientWidth - (widthAncestors + widthToolPane);

    if (widthCenter < 250)
        widthCenter = 250;
    (document.getElementById('MSO_tblPageBody')).style.pixelWidth = widthCenter + widthToolPane;
    spDiv.style.pixelWidth = widthCenter;
    if (window.event.type == "load" && document.getElementById("MSOTlPn_TlPnCaptionSpan") != null)
        (document.getElementById("MSOTlPn_TlPnCaptionSpan")).scrollIntoView(false);
}
function MSOTlPn_CheckUrl() {
ULSjLO:
    ;
    var toolPaneViewExpression = /[& | \?]ToolPaneView=[-0-9A-Z]*/ig;
    var displayModeExpression = /[& | \?]DisplayMode=[a-zA-Z]*/ig;
    var formAction = document.forms[MSOWebPartPageFormName].action;
    var newUrl;

    newUrl = MSOMode_RemoveMode(document.forms[MSOWebPartPageFormName].action, toolPaneViewExpression);
    newUrl = MSOMode_RemoveMode(document.forms[MSOWebPartPageFormName].action, displayModeExpression);
    document.forms[MSOWebPartPageFormName].action = newUrl;
}
function MSOTlPn_Resize(obj) {
    if (MSOTlPn_prevWidth != obj.clientWidth) {
        MSOTlPn_prevWidth = obj.clientWidth;
        MSOTlPn_WindowResize();
    }
    if (MSOTlPn_prevHeight != document.body.clientHeight) {
        MSOTlPn_prevHeight = document.body.clientHeight;
        var spDiv = document.getElementById('MSOTlPn_WebPartPageDiv');

        spDiv.style.height = "100%";
        spDiv.style.height = String(spDiv.offsetHeight);
    }
}
function MSOWebPartPage_SetupFixedWidthWebParts() {
ULSjLO:
    ;
    var fixedWidthTitles = documentGetElementsByName('MSOFixedWidthTitle');

    if (fixedWidthTitles != null) {
        if (fixedWidthTitles.length > 0) {
            for (var elementIndex = 0; elementIndex < fixedWidthTitles.length; elementIndex++) {
                fixedWidthTitles[elementIndex].style.width = String(MSOWebPartPage_AllocateSpaceForFirstTD(fixedWidthTitles[elementIndex])) + "px";
            }
        }
    }
}
function MSOWebPartPage_AllocateSpaceForFirstTD(titleDiv) {
    var tempElement = document.createElement("DIV");

    tempElement.style.width = titleDiv.getAttribute("fixedWidth");
    document.body.appendChild(tempElement);
    var pixelSize = tempElement.offsetWidth;

    document.body.removeChild(tempElement);
    var tempTable = MSOLayout_GetParentTable(titleDiv);

    if (tempTable != 0) {
        var tempTableRow = tempTable.rows[0];

        for (var index = 2; index < tempTableRow.cells.length; index++) {
            if (tempTableRow.cells[index].style.display != "none" && GetCurrentEltStyle(tempTableRow.cells[index], "display") != "none")
                pixelSize -= tempTableRow.cells[index].offsetWidth;
        }
    }
    return pixelSize < 1 ? 1 : pixelSize;
}
function MSOWebPartPage_FindControlName(displayName) {
ULSjLO:
    ;
    var labelcollection = document.getElementsByTagName("label");

    if (labelcollection != null) {
        for (var i = 0; i < labelcollection.length; i++) {
            var label = labelcollection[i];

            if (label.innerText == displayName) {
                if (typeof label.htmlFor != "undefined" && typeof label.htmlFor.indexOf != "undefined") {
                    if (label.htmlFor.indexOf("_EDITOR") != -1) {
                        return label.htmlFor;
                    }
                }
            }
        }
    }
    return null;
}
function MSOTlPn_ListViewChange(strWarningText) {
ULSjLO:
    ;
    if (MSOTlPn_shownViewChangeWarning)
        return;
    alert(strWarningText);
    MSOTlPn_shownViewChangeWarning = true;
}
function MSOTlPn_CustomWindowResize() {
ULSjLO:
    ;
    var objToolPane = document.getElementById('MSOTlPn_Tbl');

    if (objToolPane == null || objToolPane.offsetWidth == 0)
        return;
    objToolPane.style.pixelWidth = document.body.clientWidth;
}
function MSOTlPn_ShowListFilter() {
ULSjLO:
    ;
    if ((document.getElementById('WebPartListFilter')).style.display == 'none') {
        (document.getElementById('WebPartListFilter')).style.display = 'block';
        document.forms[MSOWebPartPageFormName].MSOGallery_FilterVisible.value = "true";
    }
    else {
        (document.getElementById('WebPartListFilter')).style.display = 'none';
        document.forms[MSOWebPartPageFormName].MSOGallery_FilterVisible.value = "false";
    }
}
function MSOGallery_GetCookie(cookieName) {
ULSjLO:
    ;
    var prefix = cookieName + "=";
    var cookieStartIndex = document.cookie.indexOf(prefix);

    if (cookieStartIndex == -1) {
        return null;
    }
    var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);

    if (cookieEndIndex == -1) {
        cookieEndIndex = document.cookie.length;
    }
    return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
}
function MSOTlPn_ShowAllUsersToolPane(displayMode, source, storageKey) {
ULSjLO:
    ;
    MSOLayout_CheckAndSaveChanges();
    document.forms[MSOWebPartPageFormName].action = MSOMode_GetNewUrl(true);
    MSOTlPn_ShowToolPane2Wrapper(displayMode, source, storageKey);
}
function MSOLayout_MakeInvisibleIfEmpty() {
ULSjLO:
    ;
    var allElements = document.getElementsByName("_invisibleIfEmpty");
    var agt = navigator.userAgent.toLowerCase();
    var isNav = agt.indexOf('mozilla') != -1 && (agt.indexOf('spoofer') == -1 && agt.indexOf('compatible') == -1);
    var isIE = agt.indexOf("msie") != -1;

    for (var curElement = 0; curElement < allElements.length; curElement++) {
        if (isIE && allElements[curElement].childNodes.length == 0 || isNav && allElements[curElement].childNodes.length <= 1) {
            allElements[curElement].style.display = "none";
        }
    }
}
function MSOLayout_GetParentRow(tableCell) {
ULSjLO:
    ;
    var parentRow = tableCell.parentNode;

    while (parentRow.tagName != "TR" && parentRow.tagName != "BODY")
        parentRow = parentRow.parentNode;
    if (parentRow.tagName != "TR") {
        return null;
    }
    else {
        return parentRow;
    }
}
function MSOLayout_GetParentTable(TableCell) {
    for (var currentObject = TableCell; currentObject.tagName != 'TABLE'; currentObject = currentObject.parentNode) {
        if (currentObject == document.body)
            return 0;
    }
    return currentObject;
}
var browserScript;

$_global_non__ie();
